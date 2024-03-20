"reach 0.1";
"use strict";
const tokenUint = UInt;
const priceUint = UInt;
const amountUint = UInt;
const BalanceInfo = Tuple(tokenUint, priceUint);
const metaStruct = Struct([
  ["name", Bytes(32)],
  ["symbol", Bytes(8)],
  ["decimals", UInt],
  ["totalSupply", UInt],
  ["price", UInt],
  ["token", Token],
]);

const constructorObject = {
  creator: Contract,
  creatorAddress: Address,
  pricePerToken: UInt,
  name: Bytes(32),
  symbol: Bytes(8),
  decimals: UInt,
  totalSupply: UInt,
  token: Token,
};

const LISTEDOBJECT = Object({
  ...constructorObject,
  Parent: Contract,
});


export const secondary = Reach.App(() => {
  setOptions({ ALGOExitMode: "DeleteAndCloseOutASAs" });

  const D = Participant("Deployer", {
    meta: Object({
      name: Bytes(32),
      symbol: Bytes(8),
      decimals: UInt,
      totalSupply: UInt,
      // Extra metaData
      price: UInt,
      token: Token,
      Parent: Contract,
      watcherContract: Contract,
    }),
    launched: Fun([Contract], Null),
    // Specify Alice's interact interface here
  });
  const B = API({
    SecondaryBuy: Fun([amountUint], Null),
    deList: Fun([UInt], UInt),
    withdraw: Fun([UInt], Null),
    deposit: Fun([UInt], Null),
    stopContract: Fun([], Bool),
  });
  const V = View({
    meta: metaStruct,
    balance: Fun([], Tuple(UInt)),
    tracker: Fun([], BalanceInfo),
    token: Token,
    owner: Address,
  });

  init();
  D.only(() => {
    const meta = declassify(interact.meta);
    const {
      totalSupply,
      token,
      price,
      decimals,
      name,
      symbol,
      Parent,
      watcherContract,
    } = meta;
  });
  D.publish(
    totalSupply,
    token,
    price,
    decimals,
    name,
    symbol,
    watcherContract,
    Parent
  ).check(() => {
    check(totalSupply > 0, "Supply must be greater than 0");
    check(price < UInt.max, "Price Too Large");
  });

  commit();
  const currentContract = getContract();

  D.pay([[totalSupply, token]]);
  D.interact.launched(currentContract);
  V.meta.set(
    metaStruct.fromObject({ totalSupply, token, price, decimals, name, symbol })
  );
  V.token.set(token);
  V.owner.set(D);

  // V.tracker.set((_)=>[0,0]);

  const watcherOracle = remote(watcherContract, {
    listed: Fun([LISTEDOBJECT], Null),
    removed: Fun([LISTEDOBJECT], Null),
    // created: Fun([BalanceInfo], Null),
    // bought: Fun([BalanceInfo], Null),
    // delisted: Fun([BalanceInfo], Null),
  });

  const creatorOBJ = {
    creator: currentContract,
    creatorAddress: D,
    pricePerToken: price,
    totalSupply,
    token,
    decimals,
    name,
    symbol,
    Parent,
  };

  watcherOracle.listed({ ...creatorOBJ });

  const [ctTokens, tokOnSale, offChainTok, bal, continueCTC] = parallelReduce([
    balance(token),
    0,
    0,
    balance(),
    true,
  ])
    .invariant(balance(token) == ctTokens, "Balance Of NFT not matching up")
    .invariant(
      ctTokens + offChainTok == totalSupply,
      "Token supply not adding up"
    )
    .while(continueCTC)
    .define(() => {
      V.tracker.set(() => [balance(token), price]);
      V.balance.set(() => [bal]);
    })
    .paySpec([token])
    .api(
      B.deList,
      (tokNo) => {
        check(this == D, "You are not Owner");
        check(balance(token) >= tokNo, "Cannot delist more than balance");
        check(tokNo > 0, "Cannot delist 0");
      },
      (_) => [0, [0, token]],
      (tokNo, k) => {
        check(
          tokNo <= balance(token),
          "Balance is insuffienct for this transaction"
        );
        transfer(tokNo, token).to(this);
        k(balance(token) - tokNo);
        return [
          ctTokens - tokNo,
          tokOnSale - tokNo,
          offChainTok + tokNo,
          balance(),
          true,
        ];
      }
    )
    .api_(B.SecondaryBuy, (amt) => {
      check(amt > 0, "Cannot buy 0 tokens");
      check(balance(token) > 0, "No tokens left to buy");
      check(
        balance(token) >= amt,
        "The Token balance in the contract will not be enough for this transaction"
      );

      return [
        [amt * price, [0, token]],
        (k) => {
          check(
            balance(token) >= amt,
            "The Token balance  in the contract will not be enough for this transaction"
          );
          transfer([[amt, token]]).to(this);
          k(null);
          return [
            ctTokens - amt,
            tokOnSale - amt,
            offChainTok + amt,
            balance(),
            true,
          ];
        },
      ];
    })
    .api_(B.deposit, (amt) => {
      check(this == D, "You are not Owner");
      check(
        balance(token) >= amt,
        "The Token balance in the contract will not be enough for this transaction"
      );

      return [
        [amt * price, [0, token]],
        (k) => {
          check(
            balance() >= amt * price,
            "The balance in the contract will not be enough for this transaction"
          );
          check(
            balance(token) >= amt,
            "The Token balance  in the contract will not be enough for this transaction"
          );
          transfer(amt, token).to(this);
          k(null);
          return [
            ctTokens - amt,
            tokOnSale - amt,
            offChainTok + amt,
            balance(),
            true,
          ];
        },
      ];
    })
    .api_(B.withdraw, (amt) => {
      check(this == D, "You are not Owner");
      check(amt > 0, "Cannot buy 0 tokens");
      check(balance() > 0, "No tokens left to buy");
      check(
        balance() >= amt,
        "The Token balance in the contract will not be enough for this transaction"
      );
      return [
        [0, [0, token]],
        (k) => {
          check(
            balance() >= 0,
            "The balance in the contract will not be enough for this transaction"
          );
          check(
            balance() >= amt,
            "The Token balance  in the contract will not be enough for this transaction"
          );

          transfer(amt).to(this);
          k(null);
          return [ctTokens, tokOnSale, offChainTok, balance(), true];
        },
      ];
    })
    .api(
      B.stopContract,
      () => {
        check(
          this == D,
          "You don't have sufficient permission to end the contract"
        );
      },
      () => [0, [0, token]],
      (k) => {
        k(true);
        return [ctTokens, tokOnSale, offChainTok, balance(), false];
      }
    )
    .timeout(false);
  watcherOracle.removed({ ...creatorOBJ });

  transfer([[balance(token), token]]).to(D);
  transfer(balance()).to(D);
  commit();
  exit();
});
