// Automatically generated with Reach 0.1.13 (c44a1544)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (c44a1544)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Object({
    creator: ctc0,
    creatorAddress: ctc1,
    decimals: ctc2,
    name: ctc3,
    pricePerToken: ctc2,
    symbol: ctc4,
    token: ctc5,
    totalSupply: ctc2
    });
  const ctc7 = stdlib.T_Object({
    Parent: ctc0,
    creator: ctc0,
    creatorAddress: ctc1,
    decimals: ctc2,
    name: ctc3,
    pricePerToken: ctc2,
    symbol: ctc4,
    token: ctc5,
    totalSupply: ctc2
    });
  return {
    E: {
      created: [ctc6],
      deleted: [ctc6],
      listed: [ctc7],
      removed: [ctc7]
      }
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      3: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Object({
    creator: ctc1,
    creatorAddress: ctc2,
    decimals: ctc3,
    name: ctc4,
    pricePerToken: ctc3,
    symbol: ctc5,
    token: ctc6,
    totalSupply: ctc3
    });
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Object({
    Parent: ctc1,
    creator: ctc1,
    creatorAddress: ctc2,
    decimals: ctc3,
    name: ctc4,
    pricePerToken: ctc3,
    symbol: ctc5,
    token: ctc6,
    totalSupply: ctc3
    });
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Data({
    created0_39: ctc8,
    deleted0_39: ctc8,
    end0_39: ctc9,
    listed0_39: ctc11,
    removed0_39: ctc11
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:55:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:55:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v494, time: v493, didSend: v22, from: v492 } = txn1;
      
      ;
      const v495 = await ctc.getContractInfo();
      
      const v497 = true;
      const v498 = v493;
      
      if (await (async () => {
        
        return v497;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v494, time: v493, didSend: v22, from: v492 } = txn1;
  ;
  const v495 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.contractInfo(v495), {
    at: './index.rsh:59:26:application',
    fs: ['at ./index.rsh:59:26:application call to [unknown function] (defined at: ./index.rsh:59:26:function exp)', 'at ./index.rsh:59:26:application call to "liftedInteract" (defined at: ./index.rsh:59:26:application)'],
    msg: 'contractInfo',
    who: 'Alice'
    });
  
  let v497 = true;
  let v498 = v493;
  
  let txn2 = txn1;
  while (await (async () => {
    
    return v497;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc12],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v653], secs: v655, time: v654, didSend: v346, from: v652 } = txn3;
    switch (v653[0]) {
      case 'created0_39': {
        const v656 = v653[1];
        undefined /* setApiDetails */;
        ;
        const v685 = v656[stdlib.checkedBigNumberify('./index.rsh:64:10:spread', stdlib.UInt_max, '0')];
        null;
        const v695 = null;
        await txn3.getOutput('created', 'v695', ctc0, v695);
        const cv497 = true;
        const cv498 = v654;
        
        v497 = cv497;
        v498 = cv498;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'deleted0_39': {
        const v804 = v653[1];
        undefined /* setApiDetails */;
        ;
        const v860 = v804[stdlib.checkedBigNumberify('./index.rsh:74:10:spread', stdlib.UInt_max, '0')];
        null;
        const v870 = null;
        await txn3.getOutput('deleted', 'v870', ctc0, v870);
        const cv497 = true;
        const cv498 = v654;
        
        v497 = cv497;
        v498 = cv498;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'end0_39': {
        const v952 = v653[1];
        undefined /* setApiDetails */;
        ;
        const v1035 = null;
        await txn3.getOutput('end', 'v1035', ctc0, v1035);
        const cv497 = false;
        const cv498 = v654;
        
        v497 = cv497;
        v498 = cv498;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'listed0_39': {
        const v1100 = v653[1];
        undefined /* setApiDetails */;
        ;
        const v1191 = v1100[stdlib.checkedBigNumberify('./index.rsh:84:10:spread', stdlib.UInt_max, '0')];
        null;
        const v1202 = null;
        await txn3.getOutput('listed', 'v1202', ctc0, v1202);
        const cv497 = true;
        const cv498 = v654;
        
        v497 = cv497;
        v498 = cv498;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'removed0_39': {
        const v1248 = v653[1];
        undefined /* setApiDetails */;
        ;
        const v1368 = v1248[stdlib.checkedBigNumberify('./index.rsh:94:10:spread', stdlib.UInt_max, '0')];
        null;
        const v1379 = null;
        await txn3.getOutput('removed', 'v1379', ctc0, v1379);
        const cv497 = true;
        const cv498 = v654;
        
        v497 = cv497;
        v498 = cv498;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _created3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _created3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _created3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Object({
    creator: ctc0,
    creatorAddress: ctc1,
    decimals: ctc2,
    name: ctc3,
    pricePerToken: ctc2,
    symbol: ctc4,
    token: ctc5,
    totalSupply: ctc2
    });
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Object({
    Parent: ctc0,
    creator: ctc0,
    creatorAddress: ctc1,
    decimals: ctc2,
    name: ctc3,
    pricePerToken: ctc2,
    symbol: ctc4,
    token: ctc5,
    totalSupply: ctc2
    });
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Data({
    created0_39: ctc7,
    deleted0_39: ctc7,
    end0_39: ctc8,
    listed0_39: ctc10,
    removed0_39: ctc10
    });
  const ctc12 = stdlib.T_Null;
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), []);
  const v506 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:64:35:application call to [unknown function] (defined at: ./index.rsh:64:35:function exp)', 'at ./index.rsh:61:34:application call to "runcreated0_39" (defined at: ./index.rsh:64:10:function exp)', 'at ./index.rsh:61:34:application call to [unknown function] (defined at: ./index.rsh:61:34:function exp)'],
    msg: 'in',
    who: 'created'
    });
  const v530 = ['created0_39', v506];
  
  const txn1 = await (ctc.sendrecv({
    args: [v530],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:66:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v653], secs: v655, time: v654, didSend: v346, from: v652 } = txn1;
      
      switch (v653[0]) {
        case 'created0_39': {
          const v656 = v653[1];
          sim_r.txns.push({
            kind: 'api',
            who: "created"
            });
          ;
          const v685 = v656[stdlib.checkedBigNumberify('./index.rsh:64:10:spread', stdlib.UInt_max, '0')];
          null;
          const v695 = null;
          const v696 = await txn1.getOutput('created', 'v695', ctc12, v695);
          
          sim_r.isHalt = false;
          
          break;
          }
        case 'deleted0_39': {
          const v804 = v653[1];
          
          break;
          }
        case 'end0_39': {
          const v952 = v653[1];
          
          break;
          }
        case 'listed0_39': {
          const v1100 = v653[1];
          
          break;
          }
        case 'removed0_39': {
          const v1248 = v653[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v653], secs: v655, time: v654, didSend: v346, from: v652 } = txn1;
  switch (v653[0]) {
    case 'created0_39': {
      const v656 = v653[1];
      undefined /* setApiDetails */;
      ;
      const v685 = v656[stdlib.checkedBigNumberify('./index.rsh:64:10:spread', stdlib.UInt_max, '0')];
      null;
      const v695 = null;
      const v696 = await txn1.getOutput('created', 'v695', ctc12, v695);
      if (v346) {
        stdlib.protect(ctc12, await interact.out(v656, v696), {
          at: './index.rsh:64:11:application',
          fs: ['at ./index.rsh:64:11:application call to [unknown function] (defined at: ./index.rsh:64:11:function exp)', 'at ./index.rsh:69:14:application call to "ret" (defined at: ./index.rsh:67:15:function exp)', 'at ./index.rsh:67:15:application call to [unknown function] (defined at: ./index.rsh:67:15:function exp)'],
          msg: 'out',
          who: 'created'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'deleted0_39': {
      const v804 = v653[1];
      return;
      break;
      }
    case 'end0_39': {
      const v952 = v653[1];
      return;
      break;
      }
    case 'listed0_39': {
      const v1100 = v653[1];
      return;
      break;
      }
    case 'removed0_39': {
      const v1248 = v653[1];
      return;
      break;
      }
    }
  
  
  };
export async function _deleted3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _deleted3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _deleted3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Object({
    creator: ctc0,
    creatorAddress: ctc1,
    decimals: ctc2,
    name: ctc3,
    pricePerToken: ctc2,
    symbol: ctc4,
    token: ctc5,
    totalSupply: ctc2
    });
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Object({
    Parent: ctc0,
    creator: ctc0,
    creatorAddress: ctc1,
    decimals: ctc2,
    name: ctc3,
    pricePerToken: ctc2,
    symbol: ctc4,
    token: ctc5,
    totalSupply: ctc2
    });
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Data({
    created0_39: ctc7,
    deleted0_39: ctc7,
    end0_39: ctc8,
    listed0_39: ctc10,
    removed0_39: ctc10
    });
  const ctc12 = stdlib.T_Null;
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), []);
  const v534 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:74:35:application call to [unknown function] (defined at: ./index.rsh:74:35:function exp)', 'at ./index.rsh:61:34:application call to "rundeleted0_39" (defined at: ./index.rsh:74:10:function exp)', 'at ./index.rsh:61:34:application call to [unknown function] (defined at: ./index.rsh:61:34:function exp)'],
    msg: 'in',
    who: 'deleted'
    });
  const v558 = ['deleted0_39', v534];
  
  const txn1 = await (ctc.sendrecv({
    args: [v558],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:76:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v653], secs: v655, time: v654, didSend: v346, from: v652 } = txn1;
      
      switch (v653[0]) {
        case 'created0_39': {
          const v656 = v653[1];
          
          break;
          }
        case 'deleted0_39': {
          const v804 = v653[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deleted"
            });
          ;
          const v860 = v804[stdlib.checkedBigNumberify('./index.rsh:74:10:spread', stdlib.UInt_max, '0')];
          null;
          const v870 = null;
          const v871 = await txn1.getOutput('deleted', 'v870', ctc12, v870);
          
          sim_r.isHalt = false;
          
          break;
          }
        case 'end0_39': {
          const v952 = v653[1];
          
          break;
          }
        case 'listed0_39': {
          const v1100 = v653[1];
          
          break;
          }
        case 'removed0_39': {
          const v1248 = v653[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v653], secs: v655, time: v654, didSend: v346, from: v652 } = txn1;
  switch (v653[0]) {
    case 'created0_39': {
      const v656 = v653[1];
      return;
      break;
      }
    case 'deleted0_39': {
      const v804 = v653[1];
      undefined /* setApiDetails */;
      ;
      const v860 = v804[stdlib.checkedBigNumberify('./index.rsh:74:10:spread', stdlib.UInt_max, '0')];
      null;
      const v870 = null;
      const v871 = await txn1.getOutput('deleted', 'v870', ctc12, v870);
      if (v346) {
        stdlib.protect(ctc12, await interact.out(v804, v871), {
          at: './index.rsh:74:11:application',
          fs: ['at ./index.rsh:74:11:application call to [unknown function] (defined at: ./index.rsh:74:11:function exp)', 'at ./index.rsh:79:14:application call to "ret" (defined at: ./index.rsh:77:15:function exp)', 'at ./index.rsh:77:15:application call to [unknown function] (defined at: ./index.rsh:77:15:function exp)'],
          msg: 'out',
          who: 'deleted'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'end0_39': {
      const v952 = v653[1];
      return;
      break;
      }
    case 'listed0_39': {
      const v1100 = v653[1];
      return;
      break;
      }
    case 'removed0_39': {
      const v1248 = v653[1];
      return;
      break;
      }
    }
  
  
  };
export async function _end3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _end3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _end3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Tuple([]);
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Object({
    creator: ctc1,
    creatorAddress: ctc2,
    decimals: ctc3,
    name: ctc4,
    pricePerToken: ctc3,
    symbol: ctc5,
    token: ctc6,
    totalSupply: ctc3
    });
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Object({
    Parent: ctc1,
    creator: ctc1,
    creatorAddress: ctc2,
    decimals: ctc3,
    name: ctc4,
    pricePerToken: ctc3,
    symbol: ctc5,
    token: ctc6,
    totalSupply: ctc3
    });
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Data({
    created0_39: ctc8,
    deleted0_39: ctc8,
    end0_39: ctc0,
    listed0_39: ctc10,
    removed0_39: ctc10
    });
  const ctc12 = stdlib.T_Null;
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), []);
  const v622 = stdlib.protect(ctc0, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:104:23:application call to [unknown function] (defined at: ./index.rsh:104:23:function exp)', 'at ./index.rsh:61:34:application call to "runend0_39" (defined at: ./index.rsh:104:10:function exp)', 'at ./index.rsh:61:34:application call to [unknown function] (defined at: ./index.rsh:61:34:function exp)'],
    msg: 'in',
    who: 'end'
    });
  const v626 = ['end0_39', v622];
  
  const txn1 = await (ctc.sendrecv({
    args: [v626],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:106:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v653], secs: v655, time: v654, didSend: v346, from: v652 } = txn1;
      
      switch (v653[0]) {
        case 'created0_39': {
          const v656 = v653[1];
          
          break;
          }
        case 'deleted0_39': {
          const v804 = v653[1];
          
          break;
          }
        case 'end0_39': {
          const v952 = v653[1];
          sim_r.txns.push({
            kind: 'api',
            who: "end"
            });
          ;
          const v1035 = null;
          const v1036 = await txn1.getOutput('end', 'v1035', ctc12, v1035);
          
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'listed0_39': {
          const v1100 = v653[1];
          
          break;
          }
        case 'removed0_39': {
          const v1248 = v653[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v653], secs: v655, time: v654, didSend: v346, from: v652 } = txn1;
  switch (v653[0]) {
    case 'created0_39': {
      const v656 = v653[1];
      return;
      break;
      }
    case 'deleted0_39': {
      const v804 = v653[1];
      return;
      break;
      }
    case 'end0_39': {
      const v952 = v653[1];
      undefined /* setApiDetails */;
      ;
      const v1035 = null;
      const v1036 = await txn1.getOutput('end', 'v1035', ctc12, v1035);
      if (v346) {
        stdlib.protect(ctc12, await interact.out(v952, v1036), {
          at: './index.rsh:104:11:application',
          fs: ['at ./index.rsh:104:11:application call to [unknown function] (defined at: ./index.rsh:104:11:function exp)', 'at ./index.rsh:108:14:application call to "ret" (defined at: ./index.rsh:107:15:function exp)', 'at ./index.rsh:107:15:application call to [unknown function] (defined at: ./index.rsh:107:15:function exp)'],
          msg: 'out',
          who: 'end'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'listed0_39': {
      const v1100 = v653[1];
      return;
      break;
      }
    case 'removed0_39': {
      const v1248 = v653[1];
      return;
      break;
      }
    }
  
  
  };
export async function _listed3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _listed3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _listed3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Object({
    Parent: ctc0,
    creator: ctc0,
    creatorAddress: ctc1,
    decimals: ctc2,
    name: ctc3,
    pricePerToken: ctc2,
    symbol: ctc4,
    token: ctc5,
    totalSupply: ctc2
    });
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Object({
    creator: ctc0,
    creatorAddress: ctc1,
    decimals: ctc2,
    name: ctc3,
    pricePerToken: ctc2,
    symbol: ctc4,
    token: ctc5,
    totalSupply: ctc2
    });
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    created0_39: ctc9,
    deleted0_39: ctc9,
    end0_39: ctc10,
    listed0_39: ctc7,
    removed0_39: ctc7
    });
  const ctc12 = stdlib.T_Null;
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), []);
  const v562 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:84:34:application call to [unknown function] (defined at: ./index.rsh:84:34:function exp)', 'at ./index.rsh:61:34:application call to "runlisted0_39" (defined at: ./index.rsh:84:10:function exp)', 'at ./index.rsh:61:34:application call to [unknown function] (defined at: ./index.rsh:61:34:function exp)'],
    msg: 'in',
    who: 'listed'
    });
  const v588 = ['listed0_39', v562];
  
  const txn1 = await (ctc.sendrecv({
    args: [v588],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:86:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v653], secs: v655, time: v654, didSend: v346, from: v652 } = txn1;
      
      switch (v653[0]) {
        case 'created0_39': {
          const v656 = v653[1];
          
          break;
          }
        case 'deleted0_39': {
          const v804 = v653[1];
          
          break;
          }
        case 'end0_39': {
          const v952 = v653[1];
          
          break;
          }
        case 'listed0_39': {
          const v1100 = v653[1];
          sim_r.txns.push({
            kind: 'api',
            who: "listed"
            });
          ;
          const v1191 = v1100[stdlib.checkedBigNumberify('./index.rsh:84:10:spread', stdlib.UInt_max, '0')];
          null;
          const v1202 = null;
          const v1203 = await txn1.getOutput('listed', 'v1202', ctc12, v1202);
          
          sim_r.isHalt = false;
          
          break;
          }
        case 'removed0_39': {
          const v1248 = v653[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v653], secs: v655, time: v654, didSend: v346, from: v652 } = txn1;
  switch (v653[0]) {
    case 'created0_39': {
      const v656 = v653[1];
      return;
      break;
      }
    case 'deleted0_39': {
      const v804 = v653[1];
      return;
      break;
      }
    case 'end0_39': {
      const v952 = v653[1];
      return;
      break;
      }
    case 'listed0_39': {
      const v1100 = v653[1];
      undefined /* setApiDetails */;
      ;
      const v1191 = v1100[stdlib.checkedBigNumberify('./index.rsh:84:10:spread', stdlib.UInt_max, '0')];
      null;
      const v1202 = null;
      const v1203 = await txn1.getOutput('listed', 'v1202', ctc12, v1202);
      if (v346) {
        stdlib.protect(ctc12, await interact.out(v1100, v1203), {
          at: './index.rsh:84:11:application',
          fs: ['at ./index.rsh:84:11:application call to [unknown function] (defined at: ./index.rsh:84:11:function exp)', 'at ./index.rsh:89:14:application call to "ret" (defined at: ./index.rsh:87:15:function exp)', 'at ./index.rsh:87:15:application call to [unknown function] (defined at: ./index.rsh:87:15:function exp)'],
          msg: 'out',
          who: 'listed'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'removed0_39': {
      const v1248 = v653[1];
      return;
      break;
      }
    }
  
  
  };
export async function _removed3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _removed3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _removed3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Object({
    Parent: ctc0,
    creator: ctc0,
    creatorAddress: ctc1,
    decimals: ctc2,
    name: ctc3,
    pricePerToken: ctc2,
    symbol: ctc4,
    token: ctc5,
    totalSupply: ctc2
    });
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Object({
    creator: ctc0,
    creatorAddress: ctc1,
    decimals: ctc2,
    name: ctc3,
    pricePerToken: ctc2,
    symbol: ctc4,
    token: ctc5,
    totalSupply: ctc2
    });
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    created0_39: ctc9,
    deleted0_39: ctc9,
    end0_39: ctc10,
    listed0_39: ctc7,
    removed0_39: ctc7
    });
  const ctc12 = stdlib.T_Null;
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), []);
  const v592 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:94:35:application call to [unknown function] (defined at: ./index.rsh:94:35:function exp)', 'at ./index.rsh:61:34:application call to "runremoved0_39" (defined at: ./index.rsh:94:10:function exp)', 'at ./index.rsh:61:34:application call to [unknown function] (defined at: ./index.rsh:61:34:function exp)'],
    msg: 'in',
    who: 'removed'
    });
  const v618 = ['removed0_39', v592];
  
  const txn1 = await (ctc.sendrecv({
    args: [v618],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:96:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v653], secs: v655, time: v654, didSend: v346, from: v652 } = txn1;
      
      switch (v653[0]) {
        case 'created0_39': {
          const v656 = v653[1];
          
          break;
          }
        case 'deleted0_39': {
          const v804 = v653[1];
          
          break;
          }
        case 'end0_39': {
          const v952 = v653[1];
          
          break;
          }
        case 'listed0_39': {
          const v1100 = v653[1];
          
          break;
          }
        case 'removed0_39': {
          const v1248 = v653[1];
          sim_r.txns.push({
            kind: 'api',
            who: "removed"
            });
          ;
          const v1368 = v1248[stdlib.checkedBigNumberify('./index.rsh:94:10:spread', stdlib.UInt_max, '0')];
          null;
          const v1379 = null;
          const v1380 = await txn1.getOutput('removed', 'v1379', ctc12, v1379);
          
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v653], secs: v655, time: v654, didSend: v346, from: v652 } = txn1;
  switch (v653[0]) {
    case 'created0_39': {
      const v656 = v653[1];
      return;
      break;
      }
    case 'deleted0_39': {
      const v804 = v653[1];
      return;
      break;
      }
    case 'end0_39': {
      const v952 = v653[1];
      return;
      break;
      }
    case 'listed0_39': {
      const v1100 = v653[1];
      return;
      break;
      }
    case 'removed0_39': {
      const v1248 = v653[1];
      undefined /* setApiDetails */;
      ;
      const v1368 = v1248[stdlib.checkedBigNumberify('./index.rsh:94:10:spread', stdlib.UInt_max, '0')];
      null;
      const v1379 = null;
      const v1380 = await txn1.getOutput('removed', 'v1379', ctc12, v1379);
      if (v346) {
        stdlib.protect(ctc12, await interact.out(v1248, v1380), {
          at: './index.rsh:94:11:application',
          fs: ['at ./index.rsh:94:11:application call to [unknown function] (defined at: ./index.rsh:94:11:function exp)', 'at ./index.rsh:99:14:application call to "ret" (defined at: ./index.rsh:97:15:function exp)', 'at ./index.rsh:97:15:application call to [unknown function] (defined at: ./index.rsh:97:15:function exp)'],
          msg: 'out',
          who: 'removed'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    }
  
  
  };
export async function created(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for created expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for created expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _created3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function deleted(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for deleted expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for deleted expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _deleted3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function end(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for end expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for end expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _end3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function listed(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for listed expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for listed expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _listed3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function removed(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for removed expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for removed expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _removed3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`_reachp_0((uint64))void`, `_reachp_2((uint64,(byte,byte[120])))void`, `created((uint64,address,uint64,byte[32],uint64,byte[8],uint64,uint64))void`, `deleted((uint64,address,uint64,byte[32],uint64,byte[8],uint64,uint64))void`, `end()void`, `listed((uint64,uint64,address,uint64,byte[32],uint64,byte[8],uint64,uint64))void`, `removed((uint64,uint64,address,uint64,byte[32],uint64,byte[8],uint64,uint64))void`],
    pure: [],
    sigs: [`_reachp_0((uint64))void`, `_reachp_2((uint64,(byte,byte[120])))void`, `created((uint64,address,uint64,byte[32],uint64,byte[8],uint64,uint64))void`, `deleted((uint64,address,uint64,byte[32],uint64,byte[8],uint64,uint64))void`, `end()void`, `listed((uint64,uint64,address,uint64,byte[32],uint64,byte[8],uint64,uint64))void`, `removed((uint64,uint64,address,uint64,byte[32],uint64,byte[8],uint64,uint64))void`]
    },
  GlobalNumByteSlice: 1,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAEAAEIAyYBADEYQQKLKGRJIls1ASRbNQIoggcEKledowQsCfOlBGd6UfIEhxDEcQSuIk4sBMGUrZkE5GlqZTYaAI4HAmwCfAK4AjwCdAIoAsAANA1XAXA1C4AEgxibWzQLULAoNQuACAAAAAAAAAK3NAtQsDQLNQQjMgY1DjUPNA9BAnIoJTIGNQI1AUgoNAEWNAIWUGcxGSISRIgCvjQDQAAKgAQVH3x1NARQsCNDNA1XAXA1C4AEj79c7zQLULAoNQuACAAAAAAAAANmNAtQsDQLNQQjMgY1DjUPQv+gKDULgAgAAAAAAAAECzQLULA0CzUEIjIGNQ41D0L/gTQNVwF4NQuABI1tJGw0C1CwKDULgAgAAAAAAAAEsjQLULA0CzUEIzIGNQ41D0L/UTQNVwF4NQuABERRtBo0C1CwKDULgAgAAAAAAAAFYzQLULA0CzUEIzIGNQ41D0L/ISSvgAEANAtQJK9QUDULJTQBEkQ0CyJbNQw0C1cIeTUNgARQnSeyNAwWUDQNULA0DIgBvTQNIlWNBQFGAUkBTAFPAVJC/q0kr4ABATQLUCSvUFA1C0L/t4CBAQAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv8uJK+AAQM0C1BQNQtC/yAkr4ABBDQLUFA1C0L/EjQLFzUMgASCxGH+NAwWULA0DIgA3yMyBjUONQ9C/gaIAM6BoI0GNAYINQY2GgE1C0L/zYgAujYaATULQv7UIjE0EkQjMTUSRCIxNhJEIjE3EkSIAJsoIiJC/dMxGSISREL95jYaATULQv6ZNhoBNQtC/tdC/uVJNQYyCogAgEL9wyKyASOyELIHsgiziUL9aEL9wkL970L+C0L+ODEZgQUSRIgAXTIKYDIKeAlC/8c2GgE1C0L/LTYaATULQv8zSIlMCUk1BjIJiAAziQlJQf/uSTUGMRY0ACMISTUACUcCOAcyChJEOBAjEkQ4CBJEiSM1A4lJIhJMNAISEUSJsUL/fzQGNAdKD0H/tkL/vg==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `4`,
    100: `29`,
    101: `31`,
    102: `32`,
    103: `32`,
    104: `33`,
    105: `33`,
    106: `33`,
    107: `33`,
    108: `33`,
    109: `33`,
    11: `4`,
    110: `33`,
    111: `33`,
    112: `33`,
    113: `33`,
    114: `34`,
    115: `34`,
    116: `35`,
    117: `36`,
    118: `37`,
    119: `37`,
    12: `5`,
    120: `38`,
    121: `38`,
    122: `39`,
    123: `40`,
    124: `40`,
    125: `41`,
    126: `41`,
    127: `42`,
    128: `42`,
    129: `44`,
    13: `5`,
    130: `44`,
    131: `45`,
    132: `45`,
    133: `45`,
    134: `47`,
    135: `48`,
    136: `49`,
    137: `49`,
    138: `51`,
    139: `51`,
    14: `5`,
    140: `52`,
    141: `52`,
    142: `53`,
    143: `54`,
    144: `55`,
    145: `55`,
    146: `56`,
    147: `57`,
    148: `57`,
    149: `58`,
    15: `6`,
    150: `59`,
    151: `60`,
    152: `61`,
    153: `61`,
    154: `62`,
    155: `63`,
    156: `64`,
    157: `66`,
    158: `66`,
    159: `66`,
    16: `7`,
    160: `68`,
    161: `68`,
    162: `69`,
    163: `69`,
    164: `69`,
    165: `71`,
    166: `71`,
    167: `71`,
    168: `71`,
    169: `71`,
    17: `8`,
    170: `71`,
    171: `72`,
    172: `72`,
    173: `73`,
    174: `74`,
    175: `76`,
    176: `77`,
    177: `79`,
    178: `79`,
    179: `80`,
    18: `9`,
    180: `80`,
    181: `80`,
    182: `81`,
    183: `81`,
    184: `82`,
    185: `82`,
    186: `82`,
    187: `82`,
    188: `82`,
    189: `82`,
    19: `10`,
    190: `83`,
    191: `83`,
    192: `84`,
    193: `85`,
    194: `87`,
    195: `88`,
    196: `88`,
    197: `89`,
    198: `89`,
    199: `89`,
    2: `2`,
    20: `11`,
    200: `89`,
    201: `89`,
    202: `89`,
    203: `89`,
    204: `89`,
    205: `89`,
    206: `89`,
    207: `90`,
    208: `90`,
    209: `91`,
    21: `11`,
    210: `92`,
    211: `93`,
    212: `93`,
    213: `94`,
    214: `94`,
    215: `95`,
    216: `96`,
    217: `96`,
    218: `97`,
    219: `97`,
    22: `12`,
    220: `98`,
    221: `98`,
    222: `99`,
    223: `99`,
    224: `99`,
    225: `101`,
    226: `102`,
    227: `102`,
    228: `103`,
    229: `103`,
    23: `13`,
    230: `103`,
    231: `103`,
    232: `103`,
    233: `103`,
    234: `103`,
    235: `103`,
    236: `103`,
    237: `103`,
    238: `104`,
    239: `104`,
    24: `14`,
    240: `105`,
    241: `106`,
    242: `107`,
    243: `107`,
    244: `108`,
    245: `108`,
    246: `109`,
    247: `110`,
    248: `110`,
    249: `111`,
    25: `14`,
    250: `111`,
    251: `112`,
    252: `112`,
    253: `113`,
    254: `113`,
    255: `113`,
    256: `115`,
    257: `115`,
    258: `116`,
    259: `116`,
    26: `15`,
    260: `116`,
    261: `117`,
    262: `117`,
    263: `118`,
    264: `118`,
    265: `118`,
    266: `118`,
    267: `118`,
    268: `118`,
    269: `119`,
    27: `17`,
    270: `119`,
    271: `120`,
    272: `121`,
    273: `123`,
    274: `124`,
    275: `124`,
    276: `125`,
    277: `125`,
    278: `125`,
    279: `125`,
    28: `17`,
    280: `125`,
    281: `125`,
    282: `125`,
    283: `125`,
    284: `125`,
    285: `125`,
    286: `126`,
    287: `126`,
    288: `127`,
    289: `128`,
    29: `17`,
    290: `129`,
    291: `129`,
    292: `130`,
    293: `130`,
    294: `131`,
    295: `132`,
    296: `132`,
    297: `133`,
    298: `133`,
    299: `134`,
    3: `2`,
    30: `17`,
    300: `134`,
    301: `135`,
    302: `135`,
    303: `135`,
    304: `137`,
    305: `137`,
    306: `138`,
    307: `138`,
    308: `138`,
    309: `139`,
    31: `17`,
    310: `139`,
    311: `140`,
    312: `140`,
    313: `140`,
    314: `140`,
    315: `140`,
    316: `140`,
    317: `141`,
    318: `141`,
    319: `142`,
    32: `17`,
    320: `143`,
    321: `145`,
    322: `146`,
    323: `146`,
    324: `147`,
    325: `147`,
    326: `147`,
    327: `147`,
    328: `147`,
    329: `147`,
    33: `17`,
    330: `147`,
    331: `147`,
    332: `147`,
    333: `147`,
    334: `148`,
    335: `148`,
    336: `149`,
    337: `150`,
    338: `151`,
    339: `151`,
    34: `17`,
    340: `152`,
    341: `152`,
    342: `153`,
    343: `154`,
    344: `154`,
    345: `155`,
    346: `155`,
    347: `156`,
    348: `156`,
    349: `157`,
    35: `17`,
    350: `157`,
    351: `157`,
    352: `159`,
    353: `160`,
    354: `161`,
    355: `161`,
    356: `161`,
    357: `162`,
    358: `162`,
    359: `163`,
    36: `17`,
    360: `164`,
    361: `165`,
    362: `166`,
    363: `167`,
    364: `168`,
    365: `168`,
    366: `170`,
    367: `171`,
    368: `171`,
    369: `172`,
    37: `17`,
    370: `173`,
    371: `175`,
    372: `175`,
    373: `176`,
    374: `177`,
    375: `178`,
    376: `178`,
    377: `179`,
    378: `179`,
    379: `180`,
    38: `17`,
    380: `180`,
    381: `180`,
    382: `181`,
    383: `181`,
    384: `182`,
    385: `182`,
    386: `182`,
    387: `182`,
    388: `182`,
    389: `182`,
    39: `17`,
    390: `183`,
    391: `183`,
    392: `184`,
    393: `185`,
    394: `186`,
    395: `186`,
    396: `187`,
    397: `188`,
    398: `190`,
    399: `190`,
    4: `2`,
    40: `17`,
    400: `191`,
    401: `191`,
    402: `191`,
    403: `192`,
    404: `192`,
    405: `193`,
    406: `194`,
    407: `195`,
    408: `195`,
    409: `195`,
    41: `17`,
    410: `195`,
    411: `195`,
    412: `195`,
    413: `195`,
    414: `195`,
    415: `195`,
    416: `195`,
    417: `195`,
    418: `195`,
    419: `196`,
    42: `17`,
    420: `196`,
    421: `196`,
    422: `198`,
    423: `199`,
    424: `200`,
    425: `200`,
    426: `200`,
    427: `201`,
    428: `201`,
    429: `202`,
    43: `17`,
    430: `203`,
    431: `204`,
    432: `205`,
    433: `206`,
    434: `207`,
    435: `207`,
    436: `208`,
    437: `208`,
    438: `208`,
    439: `210`,
    44: `17`,
    440: `210`,
    441: `210`,
    442: `210`,
    443: `210`,
    444: `210`,
    445: `210`,
    446: `210`,
    447: `210`,
    448: `210`,
    449: `210`,
    45: `17`,
    450: `210`,
    451: `210`,
    452: `210`,
    453: `210`,
    454: `210`,
    455: `210`,
    456: `210`,
    457: `210`,
    458: `210`,
    459: `210`,
    46: `17`,
    460: `210`,
    461: `210`,
    462: `210`,
    463: `210`,
    464: `210`,
    465: `210`,
    466: `210`,
    467: `210`,
    468: `210`,
    469: `210`,
    47: `17`,
    470: `210`,
    471: `210`,
    472: `210`,
    473: `210`,
    474: `210`,
    475: `210`,
    476: `210`,
    477: `210`,
    478: `210`,
    479: `210`,
    48: `17`,
    480: `210`,
    481: `210`,
    482: `210`,
    483: `210`,
    484: `210`,
    485: `210`,
    486: `210`,
    487: `210`,
    488: `210`,
    489: `210`,
    49: `17`,
    490: `210`,
    491: `210`,
    492: `210`,
    493: `210`,
    494: `210`,
    495: `210`,
    496: `210`,
    497: `210`,
    498: `210`,
    499: `210`,
    5: `2`,
    50: `17`,
    500: `210`,
    501: `210`,
    502: `210`,
    503: `210`,
    504: `210`,
    505: `210`,
    506: `210`,
    507: `210`,
    508: `210`,
    509: `210`,
    51: `17`,
    510: `210`,
    511: `210`,
    512: `210`,
    513: `210`,
    514: `210`,
    515: `210`,
    516: `210`,
    517: `210`,
    518: `210`,
    519: `210`,
    52: `17`,
    520: `210`,
    521: `210`,
    522: `210`,
    523: `210`,
    524: `210`,
    525: `210`,
    526: `210`,
    527: `210`,
    528: `210`,
    529: `210`,
    53: `17`,
    530: `210`,
    531: `210`,
    532: `210`,
    533: `210`,
    534: `210`,
    535: `210`,
    536: `210`,
    537: `210`,
    538: `210`,
    539: `210`,
    54: `17`,
    540: `210`,
    541: `210`,
    542: `210`,
    543: `210`,
    544: `210`,
    545: `210`,
    546: `210`,
    547: `210`,
    548: `210`,
    549: `210`,
    55: `17`,
    550: `210`,
    551: `210`,
    552: `210`,
    553: `210`,
    554: `210`,
    555: `210`,
    556: `210`,
    557: `210`,
    558: `210`,
    559: `210`,
    56: `17`,
    560: `210`,
    561: `210`,
    562: `210`,
    563: `210`,
    564: `210`,
    565: `210`,
    566: `210`,
    567: `210`,
    568: `210`,
    569: `210`,
    57: `17`,
    570: `210`,
    571: `211`,
    572: `211`,
    573: `212`,
    574: `212`,
    575: `212`,
    576: `214`,
    577: `215`,
    578: `216`,
    579: `216`,
    58: `17`,
    580: `216`,
    581: `217`,
    582: `217`,
    583: `218`,
    584: `219`,
    585: `220`,
    586: `220`,
    587: `221`,
    588: `221`,
    589: `221`,
    59: `17`,
    590: `223`,
    591: `224`,
    592: `225`,
    593: `225`,
    594: `225`,
    595: `226`,
    596: `226`,
    597: `227`,
    598: `228`,
    599: `229`,
    6: `2`,
    60: `17`,
    600: `229`,
    601: `230`,
    602: `230`,
    603: `230`,
    604: `232`,
    605: `232`,
    606: `233`,
    607: `234`,
    608: `234`,
    609: `235`,
    61: `17`,
    610: `235`,
    611: `235`,
    612: `235`,
    613: `235`,
    614: `235`,
    615: `236`,
    616: `236`,
    617: `237`,
    618: `238`,
    619: `239`,
    62: `17`,
    620: `241`,
    621: `241`,
    622: `242`,
    623: `242`,
    624: `242`,
    625: `243`,
    626: `244`,
    627: `244`,
    628: `245`,
    629: `245`,
    63: `17`,
    630: `246`,
    631: `246`,
    632: `247`,
    633: `247`,
    634: `247`,
    635: `249`,
    636: `249`,
    637: `249`,
    638: `250`,
    639: `250`,
    64: `18`,
    640: `250`,
    641: `250`,
    642: `252`,
    643: `252`,
    644: `253`,
    645: `254`,
    646: `254`,
    647: `255`,
    648: `255`,
    649: `255`,
    65: `18`,
    650: `256`,
    651: `256`,
    652: `257`,
    653: `257`,
    654: `257`,
    655: `259`,
    656: `259`,
    657: `259`,
    658: `260`,
    659: `260`,
    66: `18`,
    660: `260`,
    661: `261`,
    662: `261`,
    663: `262`,
    664: `262`,
    665: `262`,
    666: `264`,
    667: `265`,
    668: `265`,
    669: `266`,
    67: `19`,
    670: `267`,
    671: `268`,
    672: `269`,
    673: `269`,
    674: `270`,
    675: `271`,
    676: `272`,
    677: `273`,
    678: `273`,
    679: `274`,
    68: `19`,
    680: `275`,
    681: `276`,
    682: `277`,
    683: `277`,
    684: `278`,
    685: `279`,
    686: `280`,
    687: `280`,
    688: `280`,
    689: `281`,
    69: `19`,
    690: `282`,
    691: `283`,
    692: `284`,
    693: `284`,
    694: `284`,
    695: `286`,
    696: `286`,
    697: `287`,
    698: `288`,
    699: `289`,
    7: `2`,
    70: `19`,
    700: `291`,
    701: `291`,
    702: `291`,
    703: `293`,
    704: `293`,
    705: `293`,
    706: `294`,
    707: `294`,
    708: `295`,
    709: `295`,
    71: `19`,
    710: `295`,
    711: `297`,
    712: `297`,
    713: `297`,
    714: `298`,
    715: `298`,
    716: `299`,
    717: `299`,
    718: `299`,
    719: `301`,
    72: `19`,
    720: `301`,
    721: `301`,
    722: `303`,
    723: `304`,
    724: `304`,
    725: `305`,
    726: `305`,
    727: `306`,
    728: `306`,
    729: `306`,
    73: `19`,
    730: `307`,
    731: `307`,
    732: `307`,
    733: `309`,
    734: `310`,
    735: `310`,
    736: `311`,
    737: `312`,
    738: `312`,
    739: `313`,
    74: `19`,
    740: `313`,
    741: `314`,
    742: `314`,
    743: `315`,
    744: `316`,
    745: `318`,
    746: `318`,
    747: `318`,
    748: `320`,
    749: `320`,
    75: `19`,
    750: `320`,
    751: `322`,
    752: `322`,
    753: `322`,
    754: `324`,
    755: `324`,
    756: `324`,
    757: `326`,
    758: `326`,
    759: `326`,
    76: `19`,
    760: `329`,
    761: `329`,
    762: `330`,
    763: `330`,
    764: `331`,
    765: `332`,
    766: `334`,
    767: `334`,
    768: `334`,
    769: `336`,
    77: `19`,
    770: `336`,
    771: `337`,
    772: `338`,
    773: `338`,
    774: `339`,
    775: `340`,
    776: `341`,
    777: `341`,
    778: `341`,
    779: `343`,
    78: `19`,
    780: `343`,
    781: `343`,
    782: `344`,
    783: `344`,
    784: `345`,
    785: `345`,
    786: `345`,
    787: `347`,
    788: `347`,
    789: `347`,
    79: `19`,
    790: `348`,
    791: `348`,
    792: `349`,
    793: `349`,
    794: `349`,
    795: `351`,
    796: `352`,
    797: `354`,
    798: `355`,
    799: `356`,
    8: `2`,
    80: `19`,
    800: `357`,
    801: `357`,
    802: `358`,
    803: `358`,
    804: `359`,
    805: `359`,
    806: `359`,
    807: `360`,
    808: `362`,
    809: `363`,
    81: `19`,
    810: `364`,
    811: `364`,
    812: `364`,
    813: `365`,
    814: `366`,
    815: `366`,
    816: `369`,
    817: `369`,
    818: `370`,
    819: `370`,
    82: `19`,
    820: `371`,
    821: `372`,
    822: `373`,
    823: `374`,
    824: `374`,
    825: `375`,
    826: `376`,
    827: `376`,
    828: `377`,
    829: `377`,
    83: `21`,
    830: `378`,
    831: `378`,
    832: `379`,
    833: `380`,
    834: `381`,
    835: `381`,
    836: `382`,
    837: `383`,
    838: `384`,
    839: `385`,
    84: `23`,
    840: `385`,
    841: `386`,
    842: `387`,
    843: `388`,
    844: `390`,
    845: `391`,
    846: `391`,
    847: `392`,
    848: `394`,
    849: `395`,
    85: `23`,
    850: `396`,
    851: `397`,
    852: `398`,
    853: `398`,
    854: `399`,
    855: `400`,
    856: `401`,
    857: `402`,
    858: `404`,
    859: `405`,
    86: `24`,
    860: `405`,
    861: `405`,
    862: `407`,
    863: `407`,
    864: `408`,
    865: `408`,
    866: `409`,
    867: `410`,
    868: `411`,
    869: `411`,
    87: `24`,
    870: `411`,
    871: `412`,
    88: `24`,
    89: `25`,
    9: `2`,
    90: `25`,
    91: `26`,
    92: `26`,
    93: `26`,
    94: `26`,
    95: `26`,
    96: `26`,
    97: `27`,
    98: `27`,
    99: `28`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"v1898","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"address payable","name":"_creatorAddress","type":"address"},{"internalType":"uint256","name":"_decimals","type":"uint256"},{"internalType":"bytes32","name":"_name","type":"bytes32"},{"internalType":"uint256","name":"_pricePerToken","type":"uint256"},{"internalType":"bytes8","name":"_symbol","type":"bytes8"},{"internalType":"address payable","name":"_token","type":"address"},{"internalType":"uint256","name":"_totalSupply","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"E_created","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"address payable","name":"_creatorAddress","type":"address"},{"internalType":"uint256","name":"_decimals","type":"uint256"},{"internalType":"bytes32","name":"_name","type":"bytes32"},{"internalType":"uint256","name":"_pricePerToken","type":"uint256"},{"internalType":"bytes8","name":"_symbol","type":"bytes8"},{"internalType":"address payable","name":"_token","type":"address"},{"internalType":"uint256","name":"_totalSupply","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"E_deleted","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"_Parent","type":"address"},{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"address payable","name":"_creatorAddress","type":"address"},{"internalType":"uint256","name":"_decimals","type":"uint256"},{"internalType":"bytes32","name":"_name","type":"bytes32"},{"internalType":"uint256","name":"_pricePerToken","type":"uint256"},{"internalType":"bytes8","name":"_symbol","type":"bytes8"},{"internalType":"address payable","name":"_token","type":"address"},{"internalType":"uint256","name":"_totalSupply","type":"uint256"}],"indexed":false,"internalType":"struct T3","name":"v0","type":"tuple"}],"name":"E_listed","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"_Parent","type":"address"},{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"address payable","name":"_creatorAddress","type":"address"},{"internalType":"uint256","name":"_decimals","type":"uint256"},{"internalType":"bytes32","name":"_name","type":"bytes32"},{"internalType":"uint256","name":"_pricePerToken","type":"uint256"},{"internalType":"bytes8","name":"_symbol","type":"bytes8"},{"internalType":"address payable","name":"_token","type":"address"},{"internalType":"uint256","name":"_totalSupply","type":"uint256"}],"indexed":false,"internalType":"struct T3","name":"v0","type":"tuple"}],"name":"E_removed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"components":[{"components":[{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"address payable","name":"_creatorAddress","type":"address"},{"internalType":"uint256","name":"_decimals","type":"uint256"},{"internalType":"bytes32","name":"_name","type":"bytes32"},{"internalType":"uint256","name":"_pricePerToken","type":"uint256"},{"internalType":"bytes8","name":"_symbol","type":"bytes8"},{"internalType":"address payable","name":"_token","type":"address"},{"internalType":"uint256","name":"_totalSupply","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"}],"internalType":"struct T1","name":"_created0_39","type":"tuple"},{"components":[{"components":[{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"address payable","name":"_creatorAddress","type":"address"},{"internalType":"uint256","name":"_decimals","type":"uint256"},{"internalType":"bytes32","name":"_name","type":"bytes32"},{"internalType":"uint256","name":"_pricePerToken","type":"uint256"},{"internalType":"bytes8","name":"_symbol","type":"bytes8"},{"internalType":"address payable","name":"_token","type":"address"},{"internalType":"uint256","name":"_totalSupply","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"}],"internalType":"struct T1","name":"_deleted0_39","type":"tuple"},{"internalType":"bool","name":"_end0_39","type":"bool"},{"components":[{"components":[{"internalType":"address payable","name":"_Parent","type":"address"},{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"address payable","name":"_creatorAddress","type":"address"},{"internalType":"uint256","name":"_decimals","type":"uint256"},{"internalType":"bytes32","name":"_name","type":"bytes32"},{"internalType":"uint256","name":"_pricePerToken","type":"uint256"},{"internalType":"bytes8","name":"_symbol","type":"bytes8"},{"internalType":"address payable","name":"_token","type":"address"},{"internalType":"uint256","name":"_totalSupply","type":"uint256"}],"internalType":"struct T3","name":"elem0","type":"tuple"}],"internalType":"struct T4","name":"_listed0_39","type":"tuple"},{"components":[{"components":[{"internalType":"address payable","name":"_Parent","type":"address"},{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"address payable","name":"_creatorAddress","type":"address"},{"internalType":"uint256","name":"_decimals","type":"uint256"},{"internalType":"bytes32","name":"_name","type":"bytes32"},{"internalType":"uint256","name":"_pricePerToken","type":"uint256"},{"internalType":"bytes8","name":"_symbol","type":"bytes8"},{"internalType":"address payable","name":"_token","type":"address"},{"internalType":"uint256","name":"_totalSupply","type":"uint256"}],"internalType":"struct T3","name":"elem0","type":"tuple"}],"internalType":"struct T4","name":"_removed0_39","type":"tuple"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1035","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1202","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1379","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v695","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v870","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"components":[{"components":[{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"address payable","name":"_creatorAddress","type":"address"},{"internalType":"uint256","name":"_decimals","type":"uint256"},{"internalType":"bytes32","name":"_name","type":"bytes32"},{"internalType":"uint256","name":"_pricePerToken","type":"uint256"},{"internalType":"bytes8","name":"_symbol","type":"bytes8"},{"internalType":"address payable","name":"_token","type":"address"},{"internalType":"uint256","name":"_totalSupply","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"}],"internalType":"struct T1","name":"_created0_39","type":"tuple"},{"components":[{"components":[{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"address payable","name":"_creatorAddress","type":"address"},{"internalType":"uint256","name":"_decimals","type":"uint256"},{"internalType":"bytes32","name":"_name","type":"bytes32"},{"internalType":"uint256","name":"_pricePerToken","type":"uint256"},{"internalType":"bytes8","name":"_symbol","type":"bytes8"},{"internalType":"address payable","name":"_token","type":"address"},{"internalType":"uint256","name":"_totalSupply","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"}],"internalType":"struct T1","name":"_deleted0_39","type":"tuple"},{"internalType":"bool","name":"_end0_39","type":"bool"},{"components":[{"components":[{"internalType":"address payable","name":"_Parent","type":"address"},{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"address payable","name":"_creatorAddress","type":"address"},{"internalType":"uint256","name":"_decimals","type":"uint256"},{"internalType":"bytes32","name":"_name","type":"bytes32"},{"internalType":"uint256","name":"_pricePerToken","type":"uint256"},{"internalType":"bytes8","name":"_symbol","type":"bytes8"},{"internalType":"address payable","name":"_token","type":"address"},{"internalType":"uint256","name":"_totalSupply","type":"uint256"}],"internalType":"struct T3","name":"elem0","type":"tuple"}],"internalType":"struct T4","name":"_listed0_39","type":"tuple"},{"components":[{"components":[{"internalType":"address payable","name":"_Parent","type":"address"},{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"address payable","name":"_creatorAddress","type":"address"},{"internalType":"uint256","name":"_decimals","type":"uint256"},{"internalType":"bytes32","name":"_name","type":"bytes32"},{"internalType":"uint256","name":"_pricePerToken","type":"uint256"},{"internalType":"bytes8","name":"_symbol","type":"bytes8"},{"internalType":"address payable","name":"_token","type":"address"},{"internalType":"uint256","name":"_totalSupply","type":"uint256"}],"internalType":"struct T3","name":"elem0","type":"tuple"}],"internalType":"struct T4","name":"_removed0_39","type":"tuple"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"internalType":"struct T6","name":"v1901","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"address payable","name":"_creatorAddress","type":"address"},{"internalType":"uint256","name":"_decimals","type":"uint256"},{"internalType":"bytes32","name":"_name","type":"bytes32"},{"internalType":"uint256","name":"_pricePerToken","type":"uint256"},{"internalType":"bytes8","name":"_symbol","type":"bytes8"},{"internalType":"address payable","name":"_token","type":"address"},{"internalType":"uint256","name":"_totalSupply","type":"uint256"}],"internalType":"struct T0","name":"v1873","type":"tuple"}],"name":"created","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"address payable","name":"_creatorAddress","type":"address"},{"internalType":"uint256","name":"_decimals","type":"uint256"},{"internalType":"bytes32","name":"_name","type":"bytes32"},{"internalType":"uint256","name":"_pricePerToken","type":"uint256"},{"internalType":"bytes8","name":"_symbol","type":"bytes8"},{"internalType":"address payable","name":"_token","type":"address"},{"internalType":"uint256","name":"_totalSupply","type":"uint256"}],"internalType":"struct T0","name":"v1879","type":"tuple"}],"name":"deleted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"end","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address payable","name":"_Parent","type":"address"},{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"address payable","name":"_creatorAddress","type":"address"},{"internalType":"uint256","name":"_decimals","type":"uint256"},{"internalType":"bytes32","name":"_name","type":"bytes32"},{"internalType":"uint256","name":"_pricePerToken","type":"uint256"},{"internalType":"bytes8","name":"_symbol","type":"bytes8"},{"internalType":"address payable","name":"_token","type":"address"},{"internalType":"uint256","name":"_totalSupply","type":"uint256"}],"internalType":"struct T3","name":"v1889","type":"tuple"}],"name":"listed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address payable","name":"_Parent","type":"address"},{"internalType":"address payable","name":"_creator","type":"address"},{"internalType":"address payable","name":"_creatorAddress","type":"address"},{"internalType":"uint256","name":"_decimals","type":"uint256"},{"internalType":"bytes32","name":"_name","type":"bytes32"},{"internalType":"uint256","name":"_pricePerToken","type":"uint256"},{"internalType":"bytes8","name":"_symbol","type":"bytes8"},{"internalType":"address payable","name":"_token","type":"address"},{"internalType":"uint256","name":"_totalSupply","type":"uint256"}],"internalType":"struct T3","name":"v1895","type":"tuple"}],"name":"removed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200188890813803601f1980601f83011683019360018060401b0392848610848711176200030257808592604097885283396020948591810103126200031857845190848201828110858211176200030257865251815243600355845160c081019080821085831117620003025760a0918752600091818380935282888201528289820152826060820152826080820152015260049160ff835416620002eb577f87b51d26f290dc1fb530aed45f92ac77d813efb7cccb67b06c40d875955dde87878051338152835189820152a1518015908115620002de575b5015620002c75734620002b057855194868601868110868211176200029d5787526001958681528143910152600382554386558651928282850152818452878401848110878211176200028a57885283519586116200027757600254908782811c921680156200026c575b83831014620002595750601f81116200020d575b508093601f8611600114620001a55750509183949184939462000199575b50501b916000199060031b1c1916176002555b5161156a90816200031e8239f35b01519250388062000178565b600283528183209493928692918316915b88838310620001f25750505010620001d8575b505050811b016002556200018b565b015160001960f88460031b161c19169055388080620001c9565b858701518855909601959485019487935090810190620001b6565b60028352818320601f870160051c8101918388106200024e575b601f0160051c019087905b828110620002425750506200015a565b84815501879062000232565b909150819062000227565b634e487b7160e01b845260229052602483fd5b91607f169162000146565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b634e487b7160e01b835260418452602483fd5b855163100960cb60e01b8152600981840152602490fd5b855163100960cb60e01b8152600881840152602490fd5b90506001541438620000db565b865163100960cb60e01b8152600781850152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fdfe604060808152600436101561001a575b50361561001857005b005b600090813560e01c80631830b34d146105ab5780631e93b0f11461058d5780634961f1ee146105425780637667e562146104f657806383230757146104d857806397c0d2b414610481578063ab53f2c614610416578063e5cd27b3146100e45763efbe1c1c1461008a575061000f565b816003193601126100e05760606020926100d56100a5610785565b80926100af61150b565b87810190600282515251151586825101526100c861150b565b9182525187820152610a9a565b015115159051908152f35b5080fd5b50906104a0366003190112610413576100fb610785565b9082519261010884610631565b60043584526104803660231901126100e05780519260c084016001600160401b038111858210176103ff57825260243560058110156103fb57845261010094856043193601126103fb5782519461015e86610699565b83519661016a8861067d565b6001600160a01b039760443589811681036103e75781526064359789891689036103e7576020828101999099526084358783015260a435606083015260c43560808301526001600160c01b03199160e43583811681036103ef5760a0820152610104358b811681036103ef5760c08201526101243560e082015281528884015281610143193601126103f357855161020181610699565b865161020c8161067d565b610144358b811681036103ef578152610164358b811681036103ef578a82015261018435888201526101a43560608201526101c43560808201526101e43583811681036103ef5760a0820152610204358b811681036103ef5760c08201526102243560e08201528152868401526102443580151581036103e757606084015261012080610263193601126103e75786516102a581610699565b87516102b0816106b4565b610264358c811681036103f7578152610284358c811681036103f7578b8201526102a4358c811681036103f757898201526102c43560608201526102e43560808201526103043560a08201526103243584811681036103f75760c0820152610344358c811681036103f75760e0820152610364358582015281526080850152366103831901126103f35785519161034683610699565b865191610352836106b4565b610384358b811681036103ef5783526103a4358b811681036103ef578a8401526103c4358b811681036103ef57888401526103e43560608401526104043560808401526104243560a08401526104443590811681036103eb5760c083015261046435998a168a036103e7576103e19697989960e08301526104843590820152815260a082015286820152610a9a565b51908152f35b8780fd5b8880fd5b8980fd5b8680fd5b8a80fd5b8380fd5b634e487b7160e01b84526041600452602484fd5b80fd5b50346100e057816003193601126100e05781546104316106d0565b91805193849283526020828185015284518093850152815b83811061046a57505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610449565b506101003660031901126100e057602080926100d561049e610785565b80926104a9366107b7565b6104b16114e9565b9081515285810190828251525186825101526104cb61150b565b9182525185820152610a9a565b50346100e057816003193601126100e0576020906001549051908152f35b506101203660031901126100e05760a06020926100d5610514610785565b809261051f3661084a565b610527611527565b908151528781019060048251525186825101526100c861150b565b506101003660031901126100e057806020926100d561055f610785565b809261056a366107b7565b6105726114e9565b908151528781019060018251525186825101526100c861150b565b50346100e057816003193601126100e0576020906003549051908152f35b506101203660031901126100e05760806020926100d56105c9610785565b80926105d43661084a565b6105dc611527565b908151528781019060038251525186825101526100c861150b565b90600182811c92168015610627575b602083101461061157565b634e487b7160e01b600052602260045260246000fd5b91607f1691610606565b604081019081106001600160401b0382111761064c57604052565b634e487b7160e01b600052604160045260246000fd5b60c081019081106001600160401b0382111761064c57604052565b61010081019081106001600160401b0382111761064c57604052565b602081019081106001600160401b0382111761064c57604052565b61012081019081106001600160401b0382111761064c57604052565b6040519060006002546106e2816105f7565b8085526001918083169081156107665750600114610720575b5050829003601f01601f191682016001600160401b0381118382101761064c57604052565b6002600090815260209350918360008051602061153e8339815191525b838510610752575050505083010138806106fb565b80548886018301529301928490820161073d565b919250506020925060ff191682850152151560051b83010138806106fb565b6040519061079282610662565b8160a06000918281528260208201528260408201528260608201528260808201520152565b61010090600319011261084557604051906107d18261067d565b816001600160a01b036004358181168103610845578252602435818116810361084557602083015260443560408301526064356060830152608435608083015260a4356001600160c01b0319811681036108455760a083015260c43590811681036108455760c082015260e060e435910152565b600080fd5b6101209060031901126108455760405190610864826106b4565b816001600160a01b036004358181168103610845578252602435818116810361084557602083015260443581811681036108455760408301526064356060830152608435608083015260a43560a083015260c4356001600160c01b0319811681036108455760c083015260e43590811681036108455760e082015261010061010435910152565b604051906108f882610699565b6040518261010082016001600160401b0381118382101761064c5760405260008083528060208401528060408401528060608401528060808401528060a08401528060c084015260e083015252565b6040519061095482610699565b6040518261012082016001600160401b0381118382101761064c5760405260008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e084015261010083015252565b60e0809160018060a01b0380825116855280602083015116602086015260408201516040860152606082015160608601526080820151608086015260018060c01b031960a08301511660a086015260c08201511660c08501520151910152565b60018060a01b03808251168352806020830151166020840152806040830151166040840152606082015160608401526080820151608084015260a082015160a084015260018060c01b031960c08301511660c084015260e08201511660e083015261010080910151910152565b516005811015610a845790565b634e487b7160e01b600052602160045260246000fd5b604051909190608081016001600160401b0381118282101761064c57604052610ac16108eb565b81526020810192610ad06108eb565b8452610ada610947565b60408301526060820193610aec610947565b855260036000540361146a57610b006106d0565b6020818051810103126108455760200151801515036108455760ff6004541661145157604051338152825160208201526020830151908151906005821015610a8457610bc860a07fa87ee92711b2390ac46585ff3328172aacf99ad4e42046691e20fe522c74ce51946104c0946040850152610b8560208201516060860190516109aa565b610b996040820151610160860190516109aa565b60608101511515610260850152610bba608082015161028086019051610a0a565b01516103a083019051610a0a565ba181518015908115611445575b501561142c57610be86020830151610a77565b6005811015610a8457610dc957506020919293508101510151815234610db0576000917f3084a5fdbdfbac12b50b48d8b98018b0681fc763826027d8c16cb7effeaab5f06101006020935151610c4160405180926109aa565ba17ff16743a1ce9c9ef3faa7f6234d4dd451b16c37d89e07c2d952b143c8c6e9416f82604051858152a10152604051610c7981610631565b60019081815260204391015260036000554381556040516000602082015260208152610ca481610631565b8051906001600160401b03821161064c57610cc06002546105f7565b601f8111610d68575b50602090601f8311600114610d0557928293918392600094610cfa575b50501b916000199060031b1c191617600255565b015192503880610ce6565b90601f1983169160026000528360206000209360005b87828210610d4f57505010610d36575b505050811b01600255565b015160001960f88460031b161c19169055388080610d2b565b8486015187559095019460209485019487935001610d1b565b6002600052610da09060008051602061153e833981519152601f850160051c81019160208610610da6575b601f0160051c0190611483565b38610cc9565b9091508190610d93565b60405163100960cb60e01b8152600d6004820152602490fd5b9193610dd86020830151610a77565b946005861015610a84576001958603610f885750506020015160400151815234610f6f576000917f0411843268dc24ece3db8b749f7a7f5f362f85ce830e87194b8247d83c5c65616101006040935151610e34855180926109aa565ba17f24de3d403f51f9e385f28a86918ef394fd3947cf7aec3e0229f0bd6bf824ad7d60208351858152a10152604051610e6c81610631565b81815260204391015260036000554381556040516000602082015260208152610e9481610631565b8051906001600160401b03821161064c57610eb06002546105f7565b601f8111610f32575b50602090601f8311600114610ee957928293918392600094610cfa5750501b916000199060031b1c191617600255565b90601f1983169160026000528360206000209360005b87828210610f1957505010610d3657505050811b01600255565b8486015187559095019460209485019487935001610eff565b6002600052610f699060008051602061153e833981519152601f850160051c81019160208610610da657601f0160051c0190611483565b38610eb9565b60405163100960cb60e01b8152600e6004820152602490fd5b9190939250610f9a6020820151610a77565b936005851015610a8457600294850361106a57505050346110515760606000917f49ab41ddd723600d5afc5cd7e12c08b03fb53623045bdde8f62323113a9f13636020604051858152a10152604051610ff281610631565b60008152602043910152600080556000825561100e81546105f7565b918261101957505050565b82601f6000941160011461102c57505055565b61104791838552601f60208620920160051c82019101611483565b8160208120915555565b60405163100960cb60e01b8152600f6004820152602490fd5b61107a6020839796970151610a77565b6005811015610a84576003036112455750602001516080015160408201523461122c576000917fbcd01d7760375c3e6ba3ea4edff0883be580b48aece60bcf278927f719a73b3061012060406080940151516110d96040518092610a0a565ba17fa076ccd6f4d4afacdd75e994f763766477ff0ec01af31be3caeee7ea5183539c6020604051858152a1015260405161111281610631565b8181526020439101526003600055438155604051600060208201526020815261113a81610631565b8051906001600160401b03821161064c5761115584546105f7565b601f81116111fa575b50602090601f83116001146111995792829391839260009461118e575b50501b916000199060031b1c1916179055565b01519250388061117b565b90601f19831691856000528360206000209360005b878282106111e1575050106111c8575b505050811b019055565b015160001960f88460031b161c191690553880806111be565b84860151875590950194602094850194879350016111ae565b61122690856000526020600020601f850160051c81019160208610610da657601f0160051c0190611483565b3861115e565b60405163100960cb60e01b815260106004820152602490fd5b91506112546020820151610a77565b6005811015610a845760041461126c575b5050505050565b6020015160a00151815234611413576000917f3a9f5beb1a7fac019c3402e99f4672d8331553d8b70faea1facfd22fb776a44e61012060a09351516112b46040518092610a0a565ba17f9e89ee439a0663a7df76ca29f10c399fa3a7f5b3b8c240444d5388d63c6512a26020604051858152a101526040516112ed81610631565b8181526020439101526003600055438155604051600060208201526020815261131581610631565b8051906001600160401b03821161064c5761133084546105f7565b601f81116113e1575b50602090601f831160011461137d57928293918392600094611372575b50501b916000199060031b1c19161790555b3880808080611265565b015192503880611356565b90601f19831691856000528360206000209360005b878282106113c8575050106113af575b505050811b019055611368565b015160001960f88460031b161c191690553880806113a2565b8486015187559095019460209485019487935001611392565b61140d90856000526020600020601f850160051c81019160208610610da657601f0160051c0190611483565b38611339565b60405163100960cb60e01b815260116004820152602490fd5b60405163100960cb60e01b8152600c6004820152602490fd5b90506001541438610bd5565b60405163100960cb60e01b8152600b6004820152602490fd5b60405163100960cb60e01b8152600a6004820152602490fd5b81811061148e575050565b60008155600101611483565b604051906114a782610662565b81600081526114b46108eb565b60208201526114c16108eb565b6040820152600060608201526114d5610947565b608082015260a06114e4610947565b910152565b604051906114f682610631565b816114ff6108eb565b815260206114e461149a565b6040519061151882610631565b816000815260206114e461149a565b6040519061153482610631565b816114ff61094756fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 6280,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:115:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:61:34:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "created": created,
  "deleted": deleted,
  "end": end,
  "listed": listed,
  "removed": removed
  };
export const _APIs = {
  created: created,
  deleted: deleted,
  end: end,
  listed: listed,
  removed: removed
  };
