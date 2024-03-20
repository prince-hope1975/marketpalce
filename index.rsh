"reach 0.1";
"use strict";
const tokenUint = UInt;
const priceUint = UInt;
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
const OBJ = Object(constructorObject);

const LISTEDOBJECT = Object({
  ...constructorObject,
  Parent: Contract,
});

export const main = Reach.App(() => {
  setOptions({ ALGOExitMode: "DeleteAndCloseOutASAs", connectors: [ALGO] });

  const D = Participant("Deployer", {
    token: Token,

    meta: Object({
      name: Bytes(32),
      symbol: Bytes(8),
      decimals: UInt,
      totalSupply: UInt,
      // Extra metaData
      price: UInt,
    }),
    launched: Fun([Contract], Null),
    // Specify Alice's interact interface here
  });
  const B = API({
    PrimaryBuy: Fun([UInt], UInt),
    stopContract: Fun([], Bool),
    halt: Fun([], Null),
  });
  const V = View({
    meta: metaStruct,
    balance: Fun([], UInt),
    // allowance: Fun([Address, Address], UInt),
    token: Token,
    owner: Address,
    halted: Bool,
    tracker: Fun([], BalanceInfo),
  });
  init();
  D.only(() => {
    const meta = declassify(interact.meta);
    const token = declassify(interact.token);
    const { totalSupply, price, decimals, name, symbol } = meta;
  });
  D.publish(totalSupply, token, price, decimals, name, symbol).check(() => {
    check(totalSupply > 0, "Supply must be greater than 0");
    check(price < UInt.max, "Price Too Large");
    // check(decimalAmt > 0, "Too small");
  });
  // Token.track(token);

  commit();
  const currentContract = getContract();
  const correctTotalSupply = totalSupply;
  D.pay([[correctTotalSupply, token]]);
  D.interact.launched(currentContract);
  V.meta.set(
    metaStruct.fromObject({ totalSupply, token, price, decimals, name, symbol })
  );
  V.token.set(token);
  V.owner.set(D);

  // const salesData = new Map(Tuple(Address, UInt), BalanceInfo);

  const [
    tokensInContract,
    tokensOnSale,
    tokensOutOfContract,
    salesIndex,
    contractShouldContinue,
    halt,
  ] = parallelReduce([balance(token), 0, 0, 0, true, false])
    .invariant(
      balance(token) == tokensInContract,
      "Balance Of NFT not matching up"
    )
    .invariant(
      tokensInContract + tokensOutOfContract == correctTotalSupply,
      "Token supply not adding up"
    )
    .while(contractShouldContinue)
    // .while(contractShouldContinue || balance(token) != correctTotalSupply)
    .define(() => {
      V.tracker.set(() => [balance(token), tokensInContract]);
      V.balance.set(() => tokensInContract);
      V.halted.set(halt);
    })
    .paySpec([token])
    .api(
      B.PrimaryBuy,

      (numberOfTokens) => {
        assume(numberOfTokens <= balance(token), "balance is less");
        check(numberOfTokens > 0, "can't be less than 0");
        check(!halt, "Code has been halted");
      },
      (numberOfTokens) => [price * numberOfTokens, [0, token]],
      (numberOfTokens, k) => {
        check(numberOfTokens <= balance(token));
        transfer(price * numberOfTokens).to(D);
        transfer(numberOfTokens, token).to(this);
        k(numberOfTokens);
        return [
          tokensInContract - numberOfTokens,
          tokensOnSale,
          tokensOutOfContract + numberOfTokens,
          salesIndex,
          true,
          halt,
        ];
      }
    )
    .api_(B.halt, () => {
      check(this == D, "You are not Owner");
      // check(!halt, "Code has been halted");
      return [
        [0, [0, token]],
        (k) => {
          k(null);
          return [
            tokensInContract,
            tokensOnSale,
            tokensOutOfContract,
            salesIndex,
            true,
            !halt,
          ];
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
        return [
          tokensInContract,
          tokensOnSale,
          tokensOutOfContract,
          salesIndex,
          false,
          halt,
        ];
      }
    )
    .timeout(false);
  transfer([[balance(token), token]]).to(D);
  transfer(balance()).to(D);
  commit();
  exit();
});
export const marketplace = Reach.App(() => {
  setOptions({ ALGOExitMode: "DeleteAndCloseOutASAs" });

  const D = Participant("Deployer", {
    meta: Object({
      name: Bytes(32),
      symbol: Bytes(8),
      decimals: UInt,
      totalSupply: UInt,
      price: UInt,
      token: Token,
      Parent: Contract,
    }),
    launched: Fun([Contract], Null),
  });
  const B = API({
    SecondaryBuy: Fun([UInt], Null),
    stopContract: Fun([], Bool),
    halt: Fun([], Null),
  });
  const V = View({
    meta: metaStruct,
    balance: Fun([], Tuple(UInt)),
    // allowance: Fun([Address, Address], UInt),
    token: Token,
    owner: Address,
    halted: Bool,
    tracker: Fun([], BalanceInfo),
  });
  init();
  D.only(() => {
    const meta = declassify(interact.meta);
    const { totalSupply, token, price, decimals, name, symbol, Parent } = meta;
  });
  D.publish(totalSupply, token, price, decimals, name, symbol, Parent).check(
    () => {
      check(totalSupply > 0, "Supply must be greater than 0");
      check(price < UInt.max, "Price Too Large");
    }
  );
  // Token.track(token);

  commit();
  const currentContract = getContract();

  D.pay([[totalSupply, token]]);
  D.interact.launched(currentContract);
  V.meta.set(
    metaStruct.fromObject({ totalSupply, token, price, decimals, name, symbol })
  );
  V.token.set(token);
  V.owner.set(D);

  const [
    tokensInContract,
    tokensOnSale,
    tokensOutOfContract,
    contractShouldContinue,
    halt,
  ] = parallelReduce([balance(token), 0, 0, true, false])
    .invariant(
      balance(token) == tokensInContract,
      "Balance Of NFT not matching up"
    )
    .invariant(
      tokensInContract + tokensOutOfContract == totalSupply,
      "Token supply not adding up"
    )
    .while(contractShouldContinue)
    // .while(contractShouldContinue || balance(token) != totalSupply)
    .define(() => {
      V.tracker.set(() => [balance(token), price]);
      V.balance.set(() => [tokensInContract]);
      V.halted.set(halt);
    })
    .paySpec([token])
    .api(
      B.SecondaryBuy,
      (numberOfTokens) => {
        assume(
          numberOfTokens <= balance(token),
          "You are trying to buy more than what is available"
        );
        check(!halt, "Code has been halted");
      },
      (numberOfTokens) => [price * numberOfTokens, [0, token]],
      (numberOfTokens, k) => {
        check(numberOfTokens <= balance(token));
        k(null);
        transfer(price * numberOfTokens).to(D);
        transfer(numberOfTokens, token).to(this);
        return [
          tokensInContract - numberOfTokens,
          tokensOnSale,
          tokensOutOfContract + numberOfTokens,
          true,
          halt,
        ];
      }
    )
    .api_(B.halt, () => {
      check(this == D, "You are not Owner");
      // check(!halt, "Code has been halted");
      return [
        [0, [0, token]],
        (k) => {
          k(null);
          return [
            tokensInContract,
            tokensOnSale,
            tokensOutOfContract,
            true,
            !halt,
          ];
        },
      ];
    })
    .api(
      B.stopContract,
      () => {
        check(!halt, "Code has been halted");
        check(
          this == D,
          "You don't have sufficient permission to end the contract"
        );
      },
      () => [0, [0, token]],
      (k) => {
        k(true);
        return [
          tokensInContract,
          tokensOnSale,
          tokensOutOfContract,
          false,
          halt,
        ];
      }
    )
    .timeout(false);
  transfer([[balance(token), token]]).to(D);
  transfer(balance()).to(D);
  commit();
  exit();
});
