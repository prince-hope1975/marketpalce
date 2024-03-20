import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib({ reach_no_warn: true });

const startingBalance = stdlib.parseCurrency(100);

const [accAlice, accBob] = await stdlib.newTestAccounts(2, startingBalance);
console.log("Hello, Alice and Bob!");

console.log("Launching...");
const ctcAlice = accAlice.contract(backend);

const info = await stdlib.withDisconnect(
  async () =>
    await backend.Alice(ctcAlice, {
      ...stdlib.hasRandom,
      contractInfo: (info) => {
        console.log(info);
        stdlib.disconnect(info); // causes withDisconnect to immediately return null
      },
      // implement Alice's interact object here
    })
);
// await Promise.all([
//   backend.Alice(ctcAlice, {
//     ...stdlib.hasRandom,
//     contractInfo: (info) => {
//       console.log({ info });
//     },
//     // implement Alice's interact object here
//   }),
// ]);
const buy = async (acc) => {
  const ctc = acc.contract(backend, info);
  await ctc.a.A.buy(stdlib.parseCurrency(10));
  // console.log({  });
  console.log();
};
const acc2 = await stdlib.newTestAccount(startingBalance);
// await buy(acc2);

const getLog = (ctc) => async () => {
  console.log(ctc.e.E);

  // const lastTime = await ctc.e.E.notify.lastTime();
  // console.log("what", what);
  // return
};

// await getLog(ctcAlice)();
let i = 0;
while (true) {
  try {
    await Promise.all([
      ctcAlice.e.E.created.monitor(({ when, what }) => {
        console.log({ what, when });
        throw "Failed";
      }),
      ctcAlice.e.E.listed.monitor(({ when, what }) => {
        console.log("Just listed");
        console.log({ what, when });
        throw "Failed";
      }),
    ]);
  } catch (error) {
    console.log(error);
  }
  i++;
}
console.log("Goodbye, Alice and Bob!");
