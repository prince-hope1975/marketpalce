import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
import * as backend2 from "./build/index.marketplace.mjs";
const stdlib = loadStdlib({ REACH_NO_WARN: "Y" });

const supply = 100;
const decimals = 2;
const name = "TRC200 Coin";
const symbol = "TRC";
const price = stdlib.parseCurrency(10);
const startingBalance = stdlib.parseCurrency(1000000);

const [accAlice, accBob, accSam, accBill, ...accsRemaining] =
  await stdlib.newTestAccounts(10, startingBalance);

console.log("Launching...");
const ctc_info = stdlib.bigNumberToNumber({ _hex: "0x04", _isBigNumber: true });

const contract_Abstraction = async (acc) => {
  console.log("Starting abstraction...");
  return await stdlib.withDisconnect(async () => {
    const accAlice = acc || (await stdlib.newTestAccount(startingBalance));
    console.log("Minting...");
    const tok = await stdlib.launchToken(accAlice, name, symbol, {
      supply: supply * 10 ** decimals,
      decimals,
    });
    console.log("Minted...");

    const bal = await accAlice.balanceOf(stdlib.bigNumberToNumber(tok.id));
    console.log("Balancing...", stdlib.parseCurrency(bal, supply));

    const ctcAlice = accAlice.contract(backend);
    return await ctcAlice.p.Deployer({
      launched: (info) => {
        console.log(`Successfully deployed contract with id ${info}`),
          stdlib.disconnect({ info, tok: tok.id }); // causes withDisconnect to immediately return null
      },
      token: tok.id,
      meta: {
        name,
        symbol,
        decimals,
        totalSupply: supply * 10 ** decimals,
        price,
        watcherContract: ctc_info,
      },

      // implement Alice's interact object here
    });
  });
};
const secondary_contract_Abstraction = async (acc, parent, token, supply) => {
  console.log("Starting abstraction...");
  return await stdlib.withDisconnect(async () => {
    const accAlice = acc || (await stdlib.newTestAccount(startingBalance));

    return await stdlib.withDisconnect(async () => {
      const ctcAlice = accAlice.contract(backend2);
      return await ctcAlice.p.Deployer({
        launched: (info) => {
          console.log(`Successfully deployed contract with id ${info}`),
            stdlib.disconnect({ info, tok: token }); // causes withDisconnect to immediately return null
        },
        meta: {
          name,
          symbol,
          decimals,
          totalSupply: stdlib.parseCurrency(supply, decimals),
          price,
          token,
          watcherContract: ctc_info,
          Parent: parent,
        },

        // implement Alice's interact object here
      });
    });
  });
};

const getBal = async (acc, tok) => {
  const bal = await acc.balanceOf(tok);
  console.log({ bal: stdlib.formatCurrency(bal) });
  return stdlib.bigNumberToNumber(bal);
};

const ctc = accsRemaining.at(-1).contract(backend, ctc_info);
const monitor = async () => {
  await ctc.e.E.notify.monitor(async ({ what }) => {
    console.log("Created", what);
    await monitor();
  });
};

const views = (first, info) => {
  const ctc = accAlice.contract(first ? backend : backend2, info);
  const meta = async () => await ctc.v.meta();
  const balance = async () => await ctc.v.balance();
  const token = async () => await ctc.v.token();
  const owner = async () => await ctc.v.owner();
  const tracker = async () => await ctc.v.tracker();
  const halted = async () => await ctc.v.halted();
  return { meta, token, owner, tracker, balance, halted };
};

const API = async (info, acc, tok, backendVersion = backend) => {
  await acc.tokenAccept(tok);
  const BuyPrimary = async (amount) => {
    try {
      const ctc = acc.contract(backendVersion, info);
      console.log(await acc.balancesOf([tok]));
      const ret = await ctc.apis.PrimaryBuy(
        stdlib.parseCurrency(amount, decimals)
      );
      console.log({
        ret: stdlib.bigNumberToNumber(ret),
      });
      console.log(await acc.balancesOf([tok]));
      console.log(`Successfully bought  ${amount} tokens`);
    } catch (error) {
      console.log(
        `Failed to Claim,  ${await acc.getAddress()} ${error.toString()} \n`
      );
    }
  };

  const SecondaryBuy = async (amountToBuy) => {
    try {
      const ctc = acc.contract(backend2, info);
      await ctc.apis.SecondaryBuy(stdlib.parseCurrency(amountToBuy, decimals));
      console.log(`Successfully bought ${amountToBuy} tokens`);
    } catch (error) {
      console.log(
        `Failed  trying to purchase ${amountToBuy} tokens: ${error.toString()} \n`
      );
    }
  };
  const delist = async (numberOfTokens) => {
    try {
      const ctc = acc.contract(backend2, info);
      const left = await ctc.apis.deList(numberOfTokens);
      console.log(
        `Successfully removed ${numberOfTokens} tokens from sale, ${left} tokens left`
      );
    } catch (error) {
      console.log(`Failed  : ${error.toString()} \n`);
    }
  };
  const halt = async (numberOfTokens) => {
    try {
      const ctc = acc.contract(backend2, info);
      const left = await ctc.apis.halt();
      console.log(
        `Successfully removed ${numberOfTokens} tokens from sale, ${left} tokens left`
      );
    } catch (error) {
      console.log(`Failed  : ${error.toString()} \n`);
    }
  };
  const stopContract = async () => {
    try {
      const ctc = acc.contract(backendVersion, info);
      const isdeleted = await ctc.apis.stopContract();
      if (isdeleted) return console.log(`Successfully deleted contract`);
      console.log(`Faiele to delete`);
    } catch (error) {
      console.log(` Failed   ${error.toString()} \n`);
    }
  };

  return {
    BuyPrimary,
    SecondaryBuy,
    delist,
    stopContract,
    halt: halt,
  };
};
const accNew = await stdlib.newTestAccount(startingBalance);

const { info: info2, tok: tok2 } = await contract_Abstraction(accAlice);
const { info: info3, tok: tok3 } = await contract_Abstraction(accNew);

await accSam.tokenAccept(tok2);
await accBill.tokenAccept(tok3);

await accSam.tokenAccept(tok3);
await accBill.tokenAccept(tok2);

const api1 = await API(info3, accBill, tok3);
const api2 = await API(info2, accSam, tok2);

const api0 = await API(info2, accAlice);

const f = views(true, info2);
const fx = views(true, info3);

console.log((await f.tracker())[1].map((res) => stdlib.bigNumberToNumber(res)));
console.log((await f.tracker())[1].map((res) => stdlib.bigNumberToNumber(res)));

await getBal(accNew);
await api1.BuyPrimary(0.1);
await getBal(accNew);
await api1.BuyPrimary(0.1);
await getBal(accNew);
await api1.BuyPrimary(0.1);
await getBal(accNew);
await api1.BuyPrimary(0.1);
await getBal(accNew);
await api1.BuyPrimary(0.1);
await getBal(accNew);
await api1.BuyPrimary(0.1);
await getBal(accNew);
await api1.BuyPrimary(0.1);
await getBal(accNew);
await api1.BuyPrimary(0.1);
await getBal(accNew);
await api1.BuyPrimary(0.1);
await getBal(accNew);
await api1.BuyPrimary(0.1);
await getBal(accNew);
await api1.BuyPrimary(0.1);
await getBal(accNew);
await api1.BuyPrimary(0.1);
await getBal(accNew);
await api1.BuyPrimary(0.1);

await getBal(accNew);
await api1.BuyPrimary(0.8);

await getBal(accNew);
await api1.BuyPrimary(0.1);

await getBal(accNew);
await api1.BuyPrimary(0.5);

await getBal(accNew);
await api2.BuyPrimary(0.2);
// await api2.BuyPrimary(0.3);
// await api1.BuyPrimary(0.3);
console.log((await f.tracker())[1].map((res) => stdlib.bigNumberToNumber(res)));
console.log((await f.tracker())[1].map((res) => stdlib.bigNumberToNumber(res)));
// console.log((await fx.balance()).then((res) => stdlib.bigNumberToNumber(res)));
// console.log((await fx.balance()).then((res) => stdlib.bigNumberToNumber(res)));

const { info: child } = await secondary_contract_Abstraction(
  accSam,
  info2,
  tok2,
  0.1
).catch(console.error);

const { info: child2 } = await secondary_contract_Abstraction(
  accBill,
  info3,
  tok3,
  0.2
).catch(console.error);

const api1_2 = await API(child2, accBill);
const api2_2 = await API(child, accSam);
const api0_1 = await API(child, accAlice);

// const [addr1, salesIds1] = await api1.List(5, 3);
// const [addr2, salesIds3] = await api1.List(5, 20);
// const [addr3, salesIds2] = await api2.List(20, 20);

const v = views(false, child);
const vx = views(false, child2);

console.log((await v.tracker())[1].map((res) => stdlib.bigNumberToNumber(res)));
console.log((await v.balance())[1].map((res) => stdlib.bigNumberToNumber(res)));
console.log(
  (await vx.tracker())[1].map((res) => stdlib.bigNumberToNumber(res))
);
console.log(
  (await vx.balance())[1].map((res) => stdlib.bigNumberToNumber(res))
);

await api1_2.SecondaryBuy(0.1);
await api1_2.SecondaryBuy(0.02);
await api1_2.SecondaryBuy(0.9);
await api1_2.SecondaryBuy(0.25);
await api1_2.SecondaryBuy(0.0004);
await api1_2.SecondaryBuy(0.4444);
// await api2_2.SecondaryBuy(10);
// await api2_2.SecondaryBuy(5);

// console.log({ d });
// await api2.delist(4,);
// await api2.delist(0,);
// await api2.delist(20,);

await api0.stopContract();

// await getLog()();
// const acc2 = await stdlib.newTestAccount(startingBalance);
