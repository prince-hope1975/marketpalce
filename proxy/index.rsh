/**
 *
 * This program simulates a business point-of-sale machine (POS)
 * It recieves payment in a network token while rewarding users
 * with a loyalty non-network token. It allows a purchase function of
 * a varying amount of network tokens -- each transaction returns a single
 * non-network loyalty token.
 *
 */
"reach 0.1";
// Verified users can mint an nft
// When an NFT is minted it is minted with a max number that can be minted
// When minted users can come and buy based on price set by creator
// Then people can buy then store their address as part of the users

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
  setOptions({ ALGOExitMode: "DeleteAndCloseOutASAs" });

  const A = Participant("Alice", {
    // Specify Alice's interact interface here
    contractInfo: Fun([Contract], Null),
  });

  const Api = API({
    created: Fun([OBJ], Null),
    listed: Fun([LISTEDOBJECT], Null),
    removed: Fun([LISTEDOBJECT], Null),
    deleted: Fun([OBJ], Null),
    end: Fun([], Null),
  });
  const E = Events("E", {
    created: [OBJ],
    deleted: [OBJ],
    listed: [LISTEDOBJECT],
    removed: [LISTEDOBJECT],
  });

  init();
  A.publish();
  // const contractMap = new Map(Contract, Address);
  // const caller = new Set();
  // The first one to publish deploys the contract
  A.interact.contractInfo(getContract());

  const [isTrue] = parallelReduce([true])
    .invariant(balance() == 0, "network token balance wrong")
    .while(isTrue)
    .api_(Api.created, (obj_info) => {
      return [
        [0],
        (ret) => {
          E.created(obj_info);
          ret(null);
          return [isTrue];
        },
      ];
    })
    .api_(Api.deleted, (obj_info) => {
      return [
        [0],
        (ret) => {
          E.deleted(obj_info);
          ret(null);
          return [isTrue];
        },
      ];
    })
    .api_(Api.listed, (obj_info) => {
      return [
        [0],
        (ret) => {
          E.listed(obj_info);
          ret(null);
          return [isTrue];
        },
      ];
    })
    .api_(Api.removed, (obj_info) => {
      return [
        [0],
        (ret) => {
          E.removed(obj_info);
          ret(null);
          return [isTrue];
        },
      ];
    })
    .api_(Api.end, () => {
      return [
        [0],
        (ret) => {
          ret(null);
          return [false];
        },
      ];
    })
    .timeout(false);
  // The second one to publish always attaches
  commit();
  // write your program here
  exit();
});
