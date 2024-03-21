// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (88e48902)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Struct([['name', ctc3], ['symbol', ctc4], ['decimals', ctc1], ['totalSupply', ctc1], ['price', ctc1], ['token', ctc2]]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1]);
  
  const _balance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v798, v799, v800, v801, v802, v803, v804, v809] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v798, v799, v800, v801, v802, v803, v804, v831, v833, v835, v842, v843] = svs;
      return (await ((async () => {
        
        
        return v833;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _halted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v798, v799, v800, v801, v802, v803, v804, v809] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v798, v799, v800, v801, v802, v803, v804, v831, v833, v835, v842, v843] = svs;
      return (await ((async () => {
        
        
        return v831;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _meta = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v798, v799, v800, v801, v802, v803, v804, v809] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v798, v799, v800, v801, v802, v803, v804, v831, v833, v835, v842, v843] = svs;
      return (await ((async () => {
        
        const v827 = {
          decimals: v802,
          name: v803,
          price: v801,
          symbol: v804,
          token: v800,
          totalSupply: v799
          };
        
        return v827;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _owner = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v798, v799, v800, v801, v802, v803, v804, v809] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v798, v799, v800, v801, v802, v803, v804, v831, v833, v835, v842, v843] = svs;
      return (await ((async () => {
        
        
        return v798;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _token = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v798, v799, v800, v801, v802, v803, v804, v809] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v798, v799, v800, v801, v802, v803, v804, v831, v833, v835, v842, v843] = svs;
      return (await ((async () => {
        
        
        return v800;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _tracker = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v798, v799, v800, v801, v802, v803, v804, v809] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v798, v799, v800, v801, v802, v803, v804, v831, v833, v835, v842, v843] = svs;
      return (await ((async () => {
        
        const v849 = v842[stdlib.checkedBigNumberify('./index.rsh:108:35:application', stdlib.UInt_max, '0')];
        const v850 = v849[stdlib.checkedBigNumberify('./index.rsh:108:35:application', stdlib.UInt_max, '0')];
        const v851 = [v850, v833];
        
        return v851;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      balance: {
        decode: _balance,
        dom: [],
        rng: ctc1
        },
      halted: {
        decode: _halted,
        dom: [],
        rng: ctc5
        },
      meta: {
        decode: _meta,
        dom: [],
        rng: ctc8
        },
      owner: {
        decode: _owner,
        dom: [],
        rng: ctc0
        },
      token: {
        decode: _token,
        dom: [],
        rng: ctc2
        },
      tracker: {
        decode: _tracker,
        dom: [],
        rng: ctc9
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc3, ctc4, ctc7],
      4: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc3, ctc4, ctc5, ctc1, ctc1, ctc7, ctc1]
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
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc3 = stdlib.T_Object({
    decimals: ctc0,
    name: ctc1,
    price: ctc0,
    symbol: ctc2,
    totalSupply: ctc0
    });
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Tuple([ctc0]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    PrimaryBuy0_159: ctc6,
    halt0_159: ctc7,
    stopContract0_159: ctc7
    });
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Tuple([ctc0, ctc0, ctc9]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v775 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v776 = [v775];
  const v780 = stdlib.protect(ctc3, interact.meta, 'for Deployer\'s interact field meta');
  const v781 = v780.decimals;
  const v782 = v780.name;
  const v783 = v780.price;
  const v784 = v780.symbol;
  const v785 = v780.totalSupply;
  const v786 = stdlib.protect(ctc4, interact.token, 'for Deployer\'s interact field token');
  
  const v794 = stdlib.gt(v785, stdlib.checkedBigNumberify('./index.rsh:70:25:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v794, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:70:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Supply must be greater than 0',
    who: 'Deployer'
    });
  const v796 = stdlib.lt(v783, stdlib.UInt_max);
  stdlib.assert(v796, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:71:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Price Too Large',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v785, v786, v783, v781, v782, v784],
    evt_cnt: 6,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:69:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc4, ctc0, ctc0, ctc1, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:69:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v799, v800, v801, v802, v803, v804], secs: v806, time: v805, didSend: v107, from: v798 } = txn1;
      
      const v807 = v776[stdlib.checkedBigNumberify('./index.rsh:69:5:dot', stdlib.UInt_max, '0')];
      const v808 = stdlib.Array_set(v807, '0', stdlib.checkedBigNumberify('./index.rsh:69:5:dot', stdlib.UInt_max, '0'));
      const v809 = stdlib.Array_set(v776, stdlib.checkedBigNumberify('./index.rsh:69:5:dot', stdlib.UInt_max, '0'), v808);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v800
        });
      ;
      const v815 = await ctc.getContractInfo();
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc4, ctc0, ctc0, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v799, v800, v801, v802, v803, v804], secs: v806, time: v805, didSend: v107, from: v798 } = txn1;
  const v807 = v776[stdlib.checkedBigNumberify('./index.rsh:69:5:dot', stdlib.UInt_max, '0')];
  const v808 = stdlib.Array_set(v807, '0', stdlib.checkedBigNumberify('./index.rsh:69:5:dot', stdlib.UInt_max, '0'));
  const v809 = stdlib.Array_set(v776, stdlib.checkedBigNumberify('./index.rsh:69:5:dot', stdlib.UInt_max, '0'), v808);
  const v811 = stdlib.gt(v799, stdlib.checkedBigNumberify('./index.rsh:70:25:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v811, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:70:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Supply must be greater than 0',
    who: 'Deployer'
    });
  const v813 = stdlib.lt(v801, stdlib.UInt_max);
  stdlib.assert(v813, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:71:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Price Too Large',
    who: 'Deployer'
    });
  ;
  ;
  const v815 = await ctc.getContractInfo();
  const txn2 = await (ctc.sendrecv({
    args: [v798, v799, v800, v801, v802, v803, v804, v809],
    evt_cnt: 0,
    funcNum: 1,
    lct: v805,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:79:5:dot', stdlib.UInt_max, '0'), [[v799, v800]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v818, time: v817, didSend: v115, from: v816 } = txn2;
      
      ;
      const v819 = v809[stdlib.checkedBigNumberify('./index.rsh:79:5:dot', stdlib.UInt_max, '0')];
      const v820 = v819[stdlib.checkedBigNumberify('./index.rsh:79:5:dot', stdlib.UInt_max, '0')];
      const v821 = stdlib.add(v820, v799);
      const v823 = stdlib.Array_set(v819, '0', v821);
      const v824 = stdlib.Array_set(v809, stdlib.checkedBigNumberify('./index.rsh:79:5:dot', stdlib.UInt_max, '0'), v823);
      sim_r.txns.push({
        amt: v799,
        kind: 'to',
        tok: v800
        });
      
      const v828 = v824[stdlib.checkedBigNumberify('./index.rsh:96:30:application', stdlib.UInt_max, '0')];
      const v829 = v828[stdlib.checkedBigNumberify('./index.rsh:96:30:application', stdlib.UInt_max, '0')];
      const v830 = true;
      const v831 = false;
      const v833 = v829;
      const v835 = stdlib.checkedBigNumberify('./index.rsh:96:42:decimal', stdlib.UInt_max, '0');
      const v836 = v817;
      const v842 = v824;
      const v843 = stdlib.checkedBigNumberify('./index.rsh:63:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v830;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v1209 = v842[stdlib.checkedBigNumberify('./index.rsh:178:21:application', stdlib.UInt_max, '0')];
        const v1210 = v1209[stdlib.checkedBigNumberify('./index.rsh:178:21:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v798,
          tok: v800
          });
        sim_r.txns.push({
          kind: 'from',
          to: v798,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v800
          })
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
    tys: [ctc10, ctc0, ctc4, ctc0, ctc0, ctc1, ctc2, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v818, time: v817, didSend: v115, from: v816 } = txn2;
  ;
  const v819 = v809[stdlib.checkedBigNumberify('./index.rsh:79:5:dot', stdlib.UInt_max, '0')];
  const v820 = v819[stdlib.checkedBigNumberify('./index.rsh:79:5:dot', stdlib.UInt_max, '0')];
  const v821 = stdlib.add(v820, v799);
  const v823 = stdlib.Array_set(v819, '0', v821);
  const v824 = stdlib.Array_set(v809, stdlib.checkedBigNumberify('./index.rsh:79:5:dot', stdlib.UInt_max, '0'), v823);
  ;
  const v825 = stdlib.addressEq(v798, v816);
  stdlib.assert(v825, {
    at: './index.rsh:79:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  stdlib.protect(ctc5, await interact.launched(v815), {
    at: './index.rsh:80:22:application',
    fs: ['at ./index.rsh:80:22:application call to [unknown function] (defined at: ./index.rsh:80:22:function exp)', 'at ./index.rsh:80:22:application call to "liftedInteract" (defined at: ./index.rsh:80:22:application)'],
    msg: 'launched',
    who: 'Deployer'
    });
  
  const v828 = v824[stdlib.checkedBigNumberify('./index.rsh:96:30:application', stdlib.UInt_max, '0')];
  const v829 = v828[stdlib.checkedBigNumberify('./index.rsh:96:30:application', stdlib.UInt_max, '0')];
  let v830 = true;
  let v831 = false;
  let v833 = v829;
  let v835 = stdlib.checkedBigNumberify('./index.rsh:96:42:decimal', stdlib.UInt_max, '0');
  let v836 = v817;
  let v842 = v824;
  let v843 = stdlib.checkedBigNumberify('./index.rsh:63:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    
    return v830;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc8],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v926], secs: v928, time: v927, didSend: v616, from: v925 } = txn4;
    switch (v926[0]) {
      case 'PrimaryBuy0_159': {
        const v929 = v926[1];
        undefined /* setApiDetails */;
        const v934 = v929[stdlib.checkedBigNumberify('./index.rsh:113:9:spread', stdlib.UInt_max, '0')];
        const v935 = stdlib.safeMul(v801, v934);
        const v966 = stdlib.add(v843, v935);
        ;
        const v967 = v842[stdlib.checkedBigNumberify('./index.rsh:96:21:dot', stdlib.UInt_max, '0')];
        const v968 = v967[stdlib.checkedBigNumberify('./index.rsh:96:21:dot', stdlib.UInt_max, '0')];
        ;
        const v977 = stdlib.le(v934, v968);
        stdlib.assert(v977, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:123:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:122:27:application call to [unknown function] (defined at: ./index.rsh:122:27:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v983 = stdlib.sub(v966, v935);
        ;
        const v989 = stdlib.sub(v968, v934);
        const v991 = stdlib.Array_set(v967, '0', v989);
        const v992 = stdlib.Array_set(v842, stdlib.checkedBigNumberify('./index.rsh:125:43:application', stdlib.UInt_max, '0'), v991);
        ;
        await txn4.getOutput('PrimaryBuy', 'v934', ctc0, v934);
        const v999 = stdlib.safeSub(v833, v934);
        const v1000 = stdlib.safeAdd(v835, v934);
        const cv830 = true;
        const cv831 = v831;
        const cv833 = v999;
        const cv835 = v1000;
        const cv836 = v927;
        const cv842 = v992;
        const cv843 = v983;
        
        v830 = cv830;
        v831 = cv831;
        v833 = cv833;
        v835 = cv835;
        v836 = cv836;
        v842 = cv842;
        v843 = cv843;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'halt0_159': {
        const v1021 = v926[1];
        undefined /* setApiDetails */;
        const v1035 = stdlib.addressEq(v925, v798);
        stdlib.assert(v1035, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:138:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:137:22:application call to [unknown function] (defined at: ./index.rsh:137:22:function exp)', 'at ./index.rsh:96:21:application call to [unknown function] (defined at: ./index.rsh:137:22:function exp)', 'at ./index.rsh:96:21:application call to [unknown function] (defined at: ./index.rsh:96:21:function exp)', 'at ./index.rsh:112:14:application call to [unknown function] (defined at: ./index.rsh:112:14:function exp)'],
          msg: 'You are not Owner',
          who: 'Deployer'
          });
        ;
        ;
        const v1097 = null;
        await txn4.getOutput('halt', 'v1097', ctc5, v1097);
        const v1103 = v831 ? false : true;
        const cv830 = true;
        const cv831 = v1103;
        const cv833 = v833;
        const cv835 = v835;
        const cv836 = v927;
        const cv842 = v842;
        const cv843 = v843;
        
        v830 = cv830;
        v831 = cv831;
        v833 = cv833;
        v835 = cv835;
        v836 = cv836;
        v842 = cv842;
        v843 = cv843;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'stopContract0_159': {
        const v1113 = v926[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v1198 = true;
        await txn4.getOutput('stopContract', 'v1198', ctc9, v1198);
        const cv830 = false;
        const cv831 = v831;
        const cv833 = v833;
        const cv835 = v835;
        const cv836 = v927;
        const cv842 = v842;
        const cv843 = v843;
        
        v830 = cv830;
        v831 = cv831;
        v833 = cv833;
        v835 = cv835;
        v836 = cv836;
        v842 = cv842;
        v843 = cv843;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v1209 = v842[stdlib.checkedBigNumberify('./index.rsh:178:21:application', stdlib.UInt_max, '0')];
  const v1210 = v1209[stdlib.checkedBigNumberify('./index.rsh:178:21:application', stdlib.UInt_max, '0')];
  ;
  ;
  return;
  
  
  
  
  };
export async function _PrimaryBuy4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _PrimaryBuy4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _PrimaryBuy4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    PrimaryBuy0_159: ctc8,
    halt0_159: ctc9,
    stopContract0_159: ctc9
    });
  const ctc11 = stdlib.T_Null;
  
  
  const [v798, v799, v800, v801, v802, v803, v804, v831, v833, v835, v842, v843] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2, ctc1, ctc1, ctc3, ctc4, ctc5, ctc1, ctc1, ctc7, ctc1]);
  const v855 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:116:24:application call to [unknown function] (defined at: ./index.rsh:116:24:function exp)', 'at ./index.rsh:96:21:application call to "runPrimaryBuy0_159" (defined at: ./index.rsh:113:9:function exp)', 'at ./index.rsh:96:21:application call to [unknown function] (defined at: ./index.rsh:96:21:function exp)'],
    msg: 'in',
    who: 'PrimaryBuy'
    });
  const v856 = v855[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v859 = v842[stdlib.checkedBigNumberify('./index.rsh:117:41:application', stdlib.UInt_max, '0')];
  const v860 = v859[stdlib.checkedBigNumberify('./index.rsh:117:41:application', stdlib.UInt_max, '0')];
  const v861 = stdlib.le(v856, v860);
  stdlib.assert(v861, {
    at: './index.rsh:117:15:application',
    fs: ['at ./index.rsh:116:24:application call to [unknown function] (defined at: ./index.rsh:116:24:function exp)', 'at ./index.rsh:116:24:application call to [unknown function] (defined at: ./index.rsh:116:24:function exp)', 'at ./index.rsh:96:21:application call to "runPrimaryBuy0_159" (defined at: ./index.rsh:113:9:function exp)', 'at ./index.rsh:96:21:application call to [unknown function] (defined at: ./index.rsh:96:21:function exp)'],
    msg: 'balance is less',
    who: 'PrimaryBuy'
    });
  const v862 = stdlib.gt(v856, stdlib.checkedBigNumberify('./index.rsh:118:32:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v862, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:118:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:116:24:application call to [unknown function] (defined at: ./index.rsh:116:24:function exp)', 'at ./index.rsh:116:24:application call to [unknown function] (defined at: ./index.rsh:116:24:function exp)', 'at ./index.rsh:96:21:application call to "runPrimaryBuy0_159" (defined at: ./index.rsh:113:9:function exp)', 'at ./index.rsh:96:21:application call to [unknown function] (defined at: ./index.rsh:96:21:function exp)'],
    msg: 'can\'t be less than 0',
    who: 'PrimaryBuy'
    });
  const v864 = v831 ? false : true;
  stdlib.assert(v864, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:119:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:116:24:application call to [unknown function] (defined at: ./index.rsh:116:24:function exp)', 'at ./index.rsh:116:24:application call to [unknown function] (defined at: ./index.rsh:116:24:function exp)', 'at ./index.rsh:96:21:application call to "runPrimaryBuy0_159" (defined at: ./index.rsh:113:9:function exp)', 'at ./index.rsh:96:21:application call to [unknown function] (defined at: ./index.rsh:96:21:function exp)'],
    msg: 'Code has been halted',
    who: 'PrimaryBuy'
    });
  const v869 = ['PrimaryBuy0_159', v855];
  
  const v893 = stdlib.safeMul(v801, v856);
  
  const txn1 = await (ctc.sendrecv({
    args: [v798, v799, v800, v801, v802, v803, v804, v831, v833, v835, v842, v843, v869],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [v893, [[stdlib.checkedBigNumberify('./index.rsh:121:53:decimal', stdlib.UInt_max, '0'), v800]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v926], secs: v928, time: v927, didSend: v616, from: v925 } = txn1;
      
      switch (v926[0]) {
        case 'PrimaryBuy0_159': {
          const v929 = v926[1];
          sim_r.txns.push({
            kind: 'api',
            who: "PrimaryBuy"
            });
          const v934 = v929[stdlib.checkedBigNumberify('./index.rsh:113:9:spread', stdlib.UInt_max, '0')];
          const v935 = stdlib.safeMul(v801, v934);
          const v966 = stdlib.add(v843, v935);
          sim_r.txns.push({
            amt: v935,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v967 = v842[stdlib.checkedBigNumberify('./index.rsh:96:21:dot', stdlib.UInt_max, '0')];
          const v968 = v967[stdlib.checkedBigNumberify('./index.rsh:96:21:dot', stdlib.UInt_max, '0')];
          ;
          const v983 = stdlib.sub(v966, v935);
          sim_r.txns.push({
            kind: 'from',
            to: v798,
            tok: undefined /* Nothing */
            });
          const v989 = stdlib.sub(v968, v934);
          const v991 = stdlib.Array_set(v967, '0', v989);
          const v992 = stdlib.Array_set(v842, stdlib.checkedBigNumberify('./index.rsh:125:43:application', stdlib.UInt_max, '0'), v991);
          sim_r.txns.push({
            kind: 'from',
            to: v925,
            tok: v800
            });
          const v993 = await txn1.getOutput('PrimaryBuy', 'v934', ctc1, v934);
          
          const v999 = stdlib.safeSub(v833, v934);
          const v1000 = stdlib.safeAdd(v835, v934);
          const v1975 = v831;
          const v1976 = v999;
          const v1977 = v1000;
          const v1979 = v992;
          const v1980 = v983;
          sim_r.isHalt = false;
          
          break;
          }
        case 'halt0_159': {
          const v1021 = v926[1];
          
          break;
          }
        case 'stopContract0_159': {
          const v1113 = v926[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc3, ctc4, ctc5, ctc1, ctc1, ctc7, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v926], secs: v928, time: v927, didSend: v616, from: v925 } = txn1;
  switch (v926[0]) {
    case 'PrimaryBuy0_159': {
      const v929 = v926[1];
      undefined /* setApiDetails */;
      const v934 = v929[stdlib.checkedBigNumberify('./index.rsh:113:9:spread', stdlib.UInt_max, '0')];
      const v935 = stdlib.safeMul(v801, v934);
      const v966 = stdlib.add(v843, v935);
      ;
      const v967 = v842[stdlib.checkedBigNumberify('./index.rsh:96:21:dot', stdlib.UInt_max, '0')];
      const v968 = v967[stdlib.checkedBigNumberify('./index.rsh:96:21:dot', stdlib.UInt_max, '0')];
      ;
      const v977 = stdlib.le(v934, v968);
      stdlib.assert(v977, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:123:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:122:27:application call to [unknown function] (defined at: ./index.rsh:122:27:function exp)'],
        msg: null,
        who: 'PrimaryBuy'
        });
      const v983 = stdlib.sub(v966, v935);
      ;
      const v989 = stdlib.sub(v968, v934);
      const v991 = stdlib.Array_set(v967, '0', v989);
      const v992 = stdlib.Array_set(v842, stdlib.checkedBigNumberify('./index.rsh:125:43:application', stdlib.UInt_max, '0'), v991);
      ;
      const v993 = await txn1.getOutput('PrimaryBuy', 'v934', ctc1, v934);
      if (v616) {
        stdlib.protect(ctc11, await interact.out(v929, v993), {
          at: './index.rsh:114:7:application',
          fs: ['at ./index.rsh:114:7:application call to [unknown function] (defined at: ./index.rsh:114:7:function exp)', 'at ./index.rsh:126:10:application call to "k" (defined at: ./index.rsh:122:27:function exp)', 'at ./index.rsh:122:27:application call to [unknown function] (defined at: ./index.rsh:122:27:function exp)'],
          msg: 'out',
          who: 'PrimaryBuy'
          });
        }
      else {
        }
      
      const v999 = stdlib.safeSub(v833, v934);
      const v1000 = stdlib.safeAdd(v835, v934);
      const v1975 = v831;
      const v1976 = v999;
      const v1977 = v1000;
      const v1979 = v992;
      const v1980 = v983;
      return;
      
      break;
      }
    case 'halt0_159': {
      const v1021 = v926[1];
      return;
      break;
      }
    case 'stopContract0_159': {
      const v1113 = v926[1];
      return;
      break;
      }
    }
  
  
  };
export async function _halt4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _halt4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _halt4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Data({
    PrimaryBuy0_159: ctc9,
    halt0_159: ctc8,
    stopContract0_159: ctc8
    });
  const ctc11 = stdlib.T_Null;
  
  
  const [v798, v799, v800, v801, v802, v803, v804, v831, v833, v835, v842, v843] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2, ctc1, ctc1, ctc3, ctc4, ctc5, ctc1, ctc1, ctc7, ctc1]);
  const v881 = ctc.selfAddress();
  const v883 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:137:22:application call to [unknown function] (defined at: ./index.rsh:137:22:function exp)', 'at ./index.rsh:96:21:application call to "runhalt0_159" (defined at: ./index.rsh:137:10:function exp)', 'at ./index.rsh:96:21:application call to [unknown function] (defined at: ./index.rsh:96:21:function exp)'],
    msg: 'in',
    who: 'halt'
    });
  const v884 = stdlib.addressEq(v881, v798);
  stdlib.assert(v884, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:138:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:137:22:application call to [unknown function] (defined at: ./index.rsh:137:22:function exp)', 'at ./index.rsh:96:21:application call to "runhalt0_159" (defined at: ./index.rsh:137:10:function exp)', 'at ./index.rsh:96:21:application call to [unknown function] (defined at: ./index.rsh:96:21:function exp)'],
    msg: 'You are not Owner',
    who: 'halt'
    });
  const v889 = ['halt0_159', v883];
  
  const txn1 = await (ctc.sendrecv({
    args: [v798, v799, v800, v801, v802, v803, v804, v831, v833, v835, v842, v843, v889],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:141:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:141:14:decimal', stdlib.UInt_max, '0'), v800]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v926], secs: v928, time: v927, didSend: v616, from: v925 } = txn1;
      
      switch (v926[0]) {
        case 'PrimaryBuy0_159': {
          const v929 = v926[1];
          
          break;
          }
        case 'halt0_159': {
          const v1021 = v926[1];
          sim_r.txns.push({
            kind: 'api',
            who: "halt"
            });
          ;
          ;
          const v1097 = null;
          const v1098 = await txn1.getOutput('halt', 'v1097', ctc11, v1097);
          
          const v1103 = v831 ? false : true;
          const v2011 = v1103;
          const v2012 = v833;
          const v2013 = v835;
          const v2015 = v842;
          const v2016 = v843;
          sim_r.isHalt = false;
          
          break;
          }
        case 'stopContract0_159': {
          const v1113 = v926[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc3, ctc4, ctc5, ctc1, ctc1, ctc7, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v926], secs: v928, time: v927, didSend: v616, from: v925 } = txn1;
  switch (v926[0]) {
    case 'PrimaryBuy0_159': {
      const v929 = v926[1];
      return;
      break;
      }
    case 'halt0_159': {
      const v1021 = v926[1];
      undefined /* setApiDetails */;
      const v1035 = stdlib.addressEq(v925, v798);
      stdlib.assert(v1035, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:138:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:137:22:application call to [unknown function] (defined at: ./index.rsh:137:22:function exp)', 'at ./index.rsh:96:21:application call to [unknown function] (defined at: ./index.rsh:137:22:function exp)', 'at ./index.rsh:96:21:application call to [unknown function] (defined at: ./index.rsh:96:21:function exp)', 'at ./index.rsh:112:14:application call to [unknown function] (defined at: ./index.rsh:112:14:function exp)'],
        msg: 'You are not Owner',
        who: 'halt'
        });
      ;
      ;
      const v1097 = null;
      const v1098 = await txn1.getOutput('halt', 'v1097', ctc11, v1097);
      if (v616) {
        stdlib.protect(ctc11, await interact.out(v1021, v1098), {
          at: './index.rsh:137:11:application',
          fs: ['at ./index.rsh:137:11:application call to [unknown function] (defined at: ./index.rsh:137:11:function exp)', 'at ./index.rsh:143:12:application call to "k" (defined at: ./index.rsh:142:13:function exp)', 'at ./index.rsh:142:13:application call to [unknown function] (defined at: ./index.rsh:142:13:function exp)'],
          msg: 'out',
          who: 'halt'
          });
        }
      else {
        }
      
      const v1103 = v831 ? false : true;
      const v2011 = v1103;
      const v2012 = v833;
      const v2013 = v835;
      const v2015 = v842;
      const v2016 = v843;
      return;
      
      break;
      }
    case 'stopContract0_159': {
      const v1113 = v926[1];
      return;
      break;
      }
    }
  
  
  };
export async function _stopContract4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _stopContract4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _stopContract4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Data({
    PrimaryBuy0_159: ctc9,
    halt0_159: ctc8,
    stopContract0_159: ctc8
    });
  const ctc11 = stdlib.T_Null;
  
  
  const [v798, v799, v800, v801, v802, v803, v804, v831, v833, v835, v842, v843] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2, ctc1, ctc1, ctc3, ctc4, ctc5, ctc1, ctc1, ctc7, ctc1]);
  const v871 = ctc.selfAddress();
  const v873 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:158:10:application call to [unknown function] (defined at: ./index.rsh:158:10:function exp)', 'at ./index.rsh:96:21:application call to "runstopContract0_159" (defined at: ./index.rsh:155:9:function exp)', 'at ./index.rsh:96:21:application call to [unknown function] (defined at: ./index.rsh:96:21:function exp)'],
    msg: 'in',
    who: 'stopContract'
    });
  const v875 = stdlib.addressEq(v871, v798);
  stdlib.assert(v875, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:159:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:158:10:application call to [unknown function] (defined at: ./index.rsh:158:10:function exp)', 'at ./index.rsh:158:10:application call to [unknown function] (defined at: ./index.rsh:158:10:function exp)', 'at ./index.rsh:96:21:application call to "runstopContract0_159" (defined at: ./index.rsh:155:9:function exp)', 'at ./index.rsh:96:21:application call to [unknown function] (defined at: ./index.rsh:96:21:function exp)'],
    msg: 'You don\'t have sufficient permission to end the contract',
    who: 'stopContract'
    });
  const v879 = ['stopContract0_159', v873];
  
  const txn1 = await (ctc.sendrecv({
    args: [v798, v799, v800, v801, v802, v803, v804, v831, v833, v835, v842, v843, v879],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:164:14:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:164:18:decimal', stdlib.UInt_max, '0'), v800]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v926], secs: v928, time: v927, didSend: v616, from: v925 } = txn1;
      
      switch (v926[0]) {
        case 'PrimaryBuy0_159': {
          const v929 = v926[1];
          
          break;
          }
        case 'halt0_159': {
          const v1021 = v926[1];
          
          break;
          }
        case 'stopContract0_159': {
          const v1113 = v926[1];
          sim_r.txns.push({
            kind: 'api',
            who: "stopContract"
            });
          ;
          ;
          const v1198 = true;
          const v1199 = await txn1.getOutput('stopContract', 'v1198', ctc5, v1198);
          
          const v2053 = v842[stdlib.checkedBigNumberify('./index.rsh:178:21:application', stdlib.UInt_max, '0')];
          const v2054 = v2053[stdlib.checkedBigNumberify('./index.rsh:178:21:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v798,
            tok: v800
            });
          sim_r.txns.push({
            kind: 'from',
            to: v798,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v800
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc1, ctc1, ctc3, ctc4, ctc5, ctc1, ctc1, ctc7, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v926], secs: v928, time: v927, didSend: v616, from: v925 } = txn1;
  switch (v926[0]) {
    case 'PrimaryBuy0_159': {
      const v929 = v926[1];
      return;
      break;
      }
    case 'halt0_159': {
      const v1021 = v926[1];
      return;
      break;
      }
    case 'stopContract0_159': {
      const v1113 = v926[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v1198 = true;
      const v1199 = await txn1.getOutput('stopContract', 'v1198', ctc5, v1198);
      if (v616) {
        stdlib.protect(ctc11, await interact.out(v1113, v1199), {
          at: './index.rsh:156:7:application',
          fs: ['at ./index.rsh:156:7:application call to [unknown function] (defined at: ./index.rsh:156:7:function exp)', 'at ./index.rsh:166:10:application call to "k" (defined at: ./index.rsh:165:11:function exp)', 'at ./index.rsh:165:11:application call to [unknown function] (defined at: ./index.rsh:165:11:function exp)'],
          msg: 'out',
          who: 'stopContract'
          });
        }
      else {
        }
      
      const v2053 = v842[stdlib.checkedBigNumberify('./index.rsh:178:21:application', stdlib.UInt_max, '0')];
      const v2054 = v2053[stdlib.checkedBigNumberify('./index.rsh:178:21:application', stdlib.UInt_max, '0')];
      ;
      ;
      return;
      
      break;
      }
    }
  
  
  };
export async function PrimaryBuy(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for PrimaryBuy expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for PrimaryBuy expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _PrimaryBuy4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function halt(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for halt expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for halt expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _halt4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function stopContract(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for stopContract expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for stopContract expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _stopContract4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"bytes32","name":"elem5","type":"bytes32"},{"internalType":"bytes8","name":"elem6","type":"bytes8"}],"internalType":"struct T9","name":"v2083","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"bytes32","name":"elem5","type":"bytes32"},{"internalType":"bytes8","name":"elem6","type":"bytes8"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_PrimaryBuy0_159","type":"tuple"},{"internalType":"bool","name":"_halt0_159","type":"bool"},{"internalType":"bool","name":"_stopContract0_159","type":"bool"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1097","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1198","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v934","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"v2072","type":"uint256"}],"name":"PrimaryBuy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v2086","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"_PrimaryBuy0_159","type":"tuple"},{"internalType":"bool","name":"_halt0_159","type":"bool"},{"internalType":"bool","name":"_stopContract0_159","type":"bool"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"internalType":"struct T5","name":"v2089","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"halt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"halted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"meta","outputs":[{"components":[{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"bytes8","name":"symbol","type":"bytes8"},{"internalType":"uint256","name":"decimals","type":"uint256"},{"internalType":"uint256","name":"totalSupply","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address payable","name":"token","type":"address"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stopContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tracker","outputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T1","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f6200276738819003918201601f19168301916001600160401b038311848410176200059e5780849260e094604052833981010312620006bb576040519060e082016001600160401b038111838210176200059e5760409081528151835260208083015190840152810151906001600160a01b0382168203620006bb5760c0916040840152606081015160608401526080810151608084015260a081015160a0840152015160018060c01b031981168103620006bb5760c08201524360035560405161014081016001600160401b038111828210176200059e5760405260008152600060208201526000604082015260006060820152600060808201526040518060c081011060018060401b0360c0830111176200059e5760c081016040526000815260006020820152600060408201526000606082015260006080820152600060a082015260a0820152600060c0820152600060e08201526000610100820152610120604051916200017583620006c0565b60008352600060208401520152604051906200019182620006c0565b6200019b620006f8565b8252620001a762000719565b602083015260ff60045416620006a2577ff1305182cd8cf78a169c37ad65684407ef8c8e37e14825edb20862ea6652c5c3610100604051338152835160208201526020840151604082015260018060a01b03604085015116606082015260608401516080820152608084015160a082015260a084015160c082015260018060c01b031960c08501511660e0820152a18051801590811562000695575b50156200067c5760008251526000602083510152600060408351015281516020830151526020810151156200066357600019606082015110156200064a57346200063157604051916001600160401b036101008401908111908411176200059e57602091610100840160405260008452600083850152600060408501526000606085015260006080850152600060a0850152600060c0850152620002e662000719565b60e0850152338452828101518385015260018060a01b036040820151166040850152606081015160608501526080810151608085015260a081015160a085015260c0600180821b03199101511660c084015201518051604060208201519101511515604051916200035783620006dc565b60008352602083015260408201526200036f62000719565b9160005b60018110620005e1575050815260e082015260016000554360015560e06040519160018060a01b0381511660208401526020810151604084015260018060a01b03604082015116606084015260608101516080840152608081015160a084015260a081015160c084015260018060c01b031960c08201511682840152015161010082016000905b60018210620005b45761014084528361016081016001600160401b038111828210176200059e5760405280516001600160401b0381116200059e57600254600181811c9116801562000593575b60208210146200057d57601f811162000513575b50602091601f8211600114620004a9579181926000926200049d575b50508160011b916000199060031b1c1916176002555b604051611fde9081620007898239f35b01519050828062000477565b601f19821692600260005260206000209160005b858110620004fa57508360019510620004e0575b505050811b016002556200048d565b015160001960f88460031b161c19169055828080620004d1565b91926020600181928685015181550194019201620004bd565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000572575b601f0160051c01905b8181106200056557506200045b565b6000815560010162000556565b90915081906200054d565b634e487b7160e01b600052602260045260246000fd5b90607f169062000447565b634e487b7160e01b600052604160045260246000fd5b602060606001926040865180518352848101518584015201511515604082015201930191019091620003fa565b620005ed818362000760565b51620005fa828662000760565b5262000607818562000760565b5060001981146200061b5760010162000373565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260116004820152602490fd5b60405163100960cb60e01b815260106004820152602490fd5b60405163100960cb60e01b8152600f6004820152602490fd5b60405163100960cb60e01b8152600e6004820152602490fd5b9050600154143862000243565b60405163100960cb60e01b8152600d6004820152602490fd5b600080fd5b604081019081106001600160401b038211176200059e57604052565b606081019081106001600160401b038211176200059e57604052565b604051906200070782620006dc565b60006040838281528260208201520152565b6040519060208083016001600160401b038111848210176200059e576040528260005b8281106200074957505050565b829062000755620006f8565b81840152016200073c565b906001811015620007725760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c8063045eba4a1461013057806312253a6c146101275780631ad4ef281461011e5780631e93b0f114610115578063573b85101461010c5780635ed7ca5b1461010357806383230757146100fa5780638da5cb5b146100f1578063ab53f2c6146100e8578063b69ef8a8146100df578063b9b8af0b146100d6578063c885044e146100cd578063f52bccad146100c45763fc0c546a0361000e576100bf61089f565b61000e565b506100bf61080e565b506100bf61070b565b506100bf610686565b506100bf610619565b506100bf6105a4565b506100bf610530565b506100bf610505565b506100bf6104c6565b506100bf6102c4565b506100bf6102a5565b506100bf610208565b506100bf6101ae565b506020806003193601126101a95780610147610b72565b61019f816040516101578161097a565b604051610163816109a2565b60008152815284810190610175610beb565b82526004358151526000825152518582510152610190610c5c565b90600082525185820152610f9a565b0151604051908152f35b600080fd5b5060003660031901126101a957602060e06101c7610b72565b6101fc816101d3610c5c565b8581019060028251525115156060825101526101ed610c5c565b90600082525186820152610f9a565b01511515604051908152f35b5060a03660031901126101a95761021d610b72565b6040519061022a8261097a565b600435825260803660231901126101a95760405191610248836109bd565b6024359260038410156101a95761029593815261026436611e9e565b602082015260643561027581610cc8565b604082015260843561028681610cc8565b60608201526020820152610f9a565b60405160008152602090f35b0390f35b50346101a95760003660031901126101a9576020600354604051908152f35b506020806003193601126101a9576102da610b72565b506104b06102e736611ebe565b916102f0611ede565b6102fe600160005414611543565b61047461046b60c061031f610311610a31565b868082518301019101611ef8565b61033a61033561033160045460ff1690565b1590565b611563565b60408051338152895160208201529098610384917fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596908b90a15180159081156104ba575b50611583565b61038e34156115a3565b61044661043e60e0830151976103d78b8a519a6103d28c519c8589019d8e51019380878301519201511515916103c2610adc565b9586528786015284019015159052565b611993565b88528a8401906103fb6103f66103ed8451610524565b8c519033611950565b6115c3565b6104173360018060a01b036104108851610524565b16146115e3565b61041f610eb9565b9961043361042d8751610524565b8c610f47565b51908a015251610524565b898801610f47565b606081015160608701526080810151608087015260a081015160a087015201516106fe565b60c08401610f56565b600160e08301526000610100830152805151516101208301526000610140830152436101608301525161018082015260006101a0820152611d0e565b5160008152602090f35b9050600154143861037e565b5060003660031901126101a957602060606104df610b72565b6101fc816104eb610c5c565b8581019060018251525115156040825101526101ed610c5c565b50346101a95760003660031901126101a9576020600154604051908152f35b6001600160a01b031690565b50346101a95760003660031901126101a95761054a610b72565b60046000540361058b5760c0602091610561610a31565b80516001600160a01b039161057c9181018601908601610d5a565b51169182910152604051908152f35b60405163100960cb60e01b8152600a6004820152602490fd5b50346101a9576000806003193601126106165780546105c1610a31565b906040519283918252602090604082840152835191826040850152815b8381106105ff57505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016105de565b80fd5b50346101a95760003660031901126101a957610633610b72565b60046000540361066d57604060209161010061065e610650610a31565b858082518301019101610d5a565b01519182910152604051908152f35b60405163100960cb60e01b815260076004820152602490fd5b50346101a95760003660031901126101a9576106a0610b72565b6004600054036106e55760806102a19160e06106cc6106bd610a31565b60208082518301019101610d5a565b0151151591018190526040519081529081906020820190565b60405163100960cb60e01b815260086004820152602490fd5b6001600160c01b03191690565b50346101a95760003660031901126101a957610725610b09565b506102a160a0610733610b72565b61073b611f9b565b610749600460005414611603565b6107ad6107a4604061075c6106bd610a31565b8681015185515261077d61077360c08301516106fe565b6020875101610f56565b60808101518286510152602081015160608651015260608101516080865101520151610524565b84835101610f47565b51910181905260408051825181526020808401516001600160c01b031916908201528183015191810191909152606080830151908201526080808301519082015260a0918201516001600160a01b03169181019190915290819060c0820190565b50346101a95760003660031901126101a957610828610b59565b506102a1610120610837610b72565b604051610843816109a2565b61084b610b59565b815261085b600460005414611623565b6101006108696106bd610a31565b61014081015151518351520151602082510152519182910152604051918291829190916020806040830194805184520151910152565b50346101a95760003660031901126101a9576108b9610b72565b600460005403610910576101006102a1916108d2610a31565b60406108ee60018060a01b039260208082518301019101610d5a565b01511691018190526040516001600160a01b0390911681529081906020820190565b60405163100960cb60e01b8152600b6004820152602490fd5b90600182811c92168015610959575b602083101461094357565b634e487b7160e01b600052602260045260246000fd5b91607f1691610938565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761099557604052565b61099d610963565b604052565b602081019081106001600160401b0382111761099557604052565b608081019081106001600160401b0382111761099557604052565b606081019081106001600160401b0382111761099557604052565b60a081019081106001600160401b0382111761099557604052565b601f909101601f19168101906001600160401b0382119082101761099557604052565b6040519060008260025491610a4583610929565b808352600193808516908115610abb5750600114610a6d575b50610a6b92500383610a0e565b565b60026000908152600080516020611fb283398151915294602093509091905b818310610aa3575050610a6b935082010138610a5e565b85548884018501529485019487945091830191610a8c565b9050610a6b94506020925060ff191682840152151560051b82010138610a5e565b60405190610a6b826109d8565b6040519061018082016001600160401b0381118382101761099557604052565b6040519060c082016001600160401b03811183821017610b4c575b6040528160a06000918281528260208201528260408201528260608201528260808201520152565b610b54610963565b610b24565b60405190610b668261097a565b60006020838281520152565b6040519061014082016001600160401b03811183821017610bde575b604052816000808252806020830152806040830152806060830152806080830152610bb7610b09565b60a08301528060c08301528060e0830152610100820152610120610bd9610b59565b910152565b610be6610963565b610b8e565b60405190608082016001600160401b03811183821017610c2f575b6040526000606083828152604051610c1d816109a2565b83815260208201528260408201520152565b610c37610963565b610c06565b60031115610c4657565b634e487b7160e01b600052602160045260246000fd5b60405190610c698261097a565b81600081526020610bd9610beb565b60405190610c858261097a565b6000602083604051610c96816109a2565b83815281520152565b51906001600160a01b03821682036101a957565b51906001600160c01b0319821682036101a957565b801515036101a957565b5190610a6b82610cc8565b9080601f830112156101a957604091825192610cf8846109a2565b83606093848401938185116101a957915b848310610d195750505050505090565b85838303126101a95783518691610d2f826109d8565b84518252602091828601518382015286860151610d4b81610cc8565b87820152815201920191610d09565b6101c0818303126101a9576101a090610d71610ae9565b92610d7b82610c9f565b845260208201516020850152610d9360408301610c9f565b6040850152606082015160608501526080820151608085015260a082015160a0850152610dc260c08301610cb3565b60c0850152610dd360e08301610cd2565b60e085015261010080830151908501526101208083015190850152610dfd61014091828401610cdd565b90840152015161016082015290565b90929160209060c083019460018060a01b03168352805182840152015180516003811015610c465760a09160609160408501526020810151518285015260408101511515608085015201511515910152565b516003811015610c465790565b6040805191610e79836109a2565b8291600090815b602080821015610eb0579060209184845191610e9b836109d8565b81835282015284848201528188015201610e80565b50505050909150565b604051906101c082016001600160401b03811183821017610f3a575b604052816101a06000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201528261014082015282610160820152610f30610e6b565b6101808201520152565b610f42610963565b610ed5565b6001600160a01b039091169052565b6001600160c01b03199091169052565b906001811015610f775760051b0190565b634e487b7160e01b600052603260045260246000fd5b506040513d6000823e3d90fd5b610fa2610c78565b610fb0600460005414611643565b6020610fcb610fbd610a31565b828082518301019101610d5a565b92610fe3610fde61033160045460ff1690565b611663565b7f7146322068d47776d11a14502ba39cc2b8f2e0de86e0aba8bcda584e530c3bae60405180611013843383610e0c565b0390a161102b81518015908115611487575b50611683565b01926110378451610e5e565b61104081610c3c565b61125c576110706110636020610a6b9651015180855260608601519051906114e4565b8060208501523414611743565b61108e6110896110836040860151610524565b336118f5565b611763565b6110a382515161014085015151511015611783565b60008080806110ba6110b58851610524565b610524565b602087015190828215611253575bf115611246575b6110ea6110df6040850151610524565b8351519033906117a3565b8151516040519081527fc2d5d4e724ac40df8ffe299d272d0854ee8e2c5b20b6d22ac580710c5a35480a90602090a16020825151910152602061112b610eb9565b9261113f6111398251610524565b85610f47565b81810151828501526111606111576040830151610524565b60408601610f47565b606081015160608501526080810151608085015260a081015160a085015261119761118e60c08301516106fe565b60c08601610f56565b600160e08501526111e26111ce6111b160e0840151151590565b6111c2610100918289019015159052565b830151855151906114cc565b6101209081870152820151845151906114aa565b61014085015261016090438286015261122c6101408201518051906103d2825188515190039260408882015191015115159061121c610adc565b9485528885015215156040840152565b6101808601520151910151809101036101a0820152611d0e565b61124e610f8d565b6110cf565b506108fc6110c8565b91929050600161126c8251610e5e565b61127581610c3c565b036113b857508161129661128f6110b5610a6b9551610524565b33146116e3565b6112a03415611703565b6000606060408301936112be6112b96110838751610524565b611723565b604051600081527f1f44f06fa2c378dc8e31d2830931d9a9c49976009917dcad6fe83531e8d1a7cd90602090a1015261132861131f6112fb610eb9565b9361130f6113098551610524565b86610f47565b6020840151602086015251610524565b60408401610f47565b606081015160608301526080810151608083015260a081015160a083015261135661046b60c08301516106fe565b600160e083015260e0810151156113b15760005b61137b610100918285019015159052565b810151610120908184015281015190610140918284015261016091438385015281015161018084015201516101a0820152611d0e565b600161136a565b6113c460029151610e5e565b6113cd81610c3c565b146113d6575050565b610a6b916113e434156116a3565b61143760e060408301936114036113fe6110838751610524565b6116c3565b604051600181527f80b777e74512854f50bb3f187505fcd23c4b5d8b037d7653b9dfba5c99bdbdc790602090a10160019052565b61144561131f6112fb610eb9565b606081015160608301526080810151608083015260a081015160a083015261147361046b60c08301516106fe565b600060e083015261136a60e0820151151590565b90506001541438611025565b50634e487b7160e01b600052601160045260246000fd5b91908201918281116114bf575b82106101a957565b6114c7611493565b6114b7565b9081039081116114d95790565b6114e1611493565b90565b919060009281159182156114fc575b5050156101a957565b81819293955002828104821483151715611536575b809461152057041438806114f3565b634e487b7160e01b600052601260045260246000fd5b61153e611493565b611511565b1561154a57565b60405163100960cb60e01b815260126004820152602490fd5b1561156a57565b60405163100960cb60e01b815260136004820152602490fd5b1561158a57565b60405163100960cb60e01b815260146004820152602490fd5b156115aa57565b60405163100960cb60e01b815260156004820152602490fd5b156115ca57565b60405163100960cb60e01b815260166004820152602490fd5b156115ea57565b60405163100960cb60e01b815260176004820152602490fd5b1561160a57565b60405163100960cb60e01b815260096004820152602490fd5b1561162a57565b60405163100960cb60e01b8152600c6004820152602490fd5b1561164a57565b60405163100960cb60e01b815260186004820152602490fd5b1561166a57565b60405163100960cb60e01b815260196004820152602490fd5b1561168a57565b60405163100960cb60e01b8152601a6004820152602490fd5b156116aa57565b60405163100960cb60e01b815260216004820152602490fd5b156116ca57565b60405163100960cb60e01b815260226004820152602490fd5b156116ea57565b60405163100960cb60e01b8152601e6004820152602490fd5b1561170a57565b60405163100960cb60e01b8152601f6004820152602490fd5b1561172a57565b60405163100960cb60e01b815260206004820152602490fd5b1561174a57565b60405163100960cb60e01b8152601b6004820152602490fd5b1561176a57565b60405163100960cb60e01b8152601c6004820152602490fd5b1561178a57565b60405163100960cb60e01b8152601d6004820152602490fd5b60405163a9059cbb60e01b602082019081526001600160a01b03938416602483015260448083019590955293815261181f93600093849392849190608081016001600160401b03811182821017611826575b6040525193165af161180f611808611833565b8092611895565b5060208082518301019101611880565b156101a957565b61182e610963565b6117f5565b3d1561187b573d906001600160401b03821161186e575b60405191611862601f8201601f191660200184610a0e565b82523d6000602084013e565b611876610963565b61184a565b606090565b908160209103126101a957516114e181610cc8565b1561189d5790565b8051156118ac57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156118cd5790565b8051156118dc57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b60006114e1928192826040519160208301926323b872dd60e01b845260018060a01b03809216602482015230604482015282606482015260648152611939816109f3565b5193165af161180f611949611833565b80926118c5565b6000916114e19383809360405160208101936323b872dd60e01b855260018060a01b038093166024830152306044830152606482015260648152611939816109f3565b919061199d610e6b565b9260005b600181106119af5750508252565b806119bc60019284610f66565b516119c78288610f66565b526119d28187610f66565b5060001981146119e3575b016119a1565b6119eb611493565b6119dd565b8181106119fb575050565b600081556001016119f0565b611a12600254610929565b80611a1a5750565b601f8111600114611a2d57506000600255565b6002600052611a7290601f0160051c600080516020611fb2833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf6119f0565b6000602081208160025555565b6040519061018082016001600160401b03811183821017611af2575b604052816101606000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152611ae8610e6b565b6101408201520152565b611afa610963565b611a9b565b6000915b60018310611b1057505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190611b03565b81516001600160a01b031681526101c0810192916101a09061016090602081810151908501526040808201516001600160a01b031690850152606081810151908501526080808201519085015260a0808201519085015260c0808201516001600160c01b0319169085015260e08181015115159085015261010080820151908501526101208082015190850152611bdf6101408083015190860190611aff565b0151910152565b90601f8211611bf3575050565b610a6b9160026000526020600020906020601f840160051c83019310611c21575b601f0160051c01906119f0565b9091508190611c14565b80519091906001600160401b038111611d01575b611c5381611c4e600254610929565b611be6565b602080601f8311600114611c8f5750819293600092611c84575b50508160011b916000199060031b1c191617600255565b015190503880611c6d565b6002600052601f19831694909190600080516020611fb2833981519152926000905b878210611ce9575050836001959610611cd0575b505050811b01600255565b015160001960f88460031b161c19169055388080611cc5565b80600185968294968601518155019501930190611cb1565b611d09610963565b611c3f565b60e081015115611e1557611e02611e10610a6b926101a0611d2d611a7f565b91611d41611d3b8251610524565b84610f47565b60208101516020840152611d64611d5b6040830151610524565b60408501610f47565b606081015160608401526080810151608084015260a081015160a0840152611d9b611d9260c08301516106fe565b60c08501610f56565b610100611db6611dad82840151151590565b151560e0860152565b610120908183015190850152610140908183015190850152610180820151908401520151610160820152611dea6004600055565b611df343600155565b60405192839160208301611b3f565b03601f198101835282610a0e565b611c2b565b6000808083611e4f611e2b604084970151610524565b611e358351610524565b6101808401515151916001600160a01b03909116906117a3565b6101a0611e5f6110b58351610524565b91015190828215611e95575bf115611e88575b60008055611e806000600155565b610a6b611a07565b611e90610f8d565b611e72565b506108fc611e6b565b60209060431901126101a95760405190611eb7826109a2565b6044358252565b60209060031901126101a95760405190611ed7826109a2565b6004358252565b60405190611eeb826109a2565b81611ef4610e6b565b9052565b90610140828203126101a95760405191611f86919060e09061010085016001600160401b03811186821017611f8e575b604052611f3481610c9f565b855260208101516020860152611f4c60408201610c9f565b6040860152606081015160608601526080810151608086015260a081015160a0860152611f7b60c08201610cb3565b60c086015201610cdd565b60e082015290565b611f96610963565b611f28565b60405190611fa8826109a2565b81611ef4610b0956fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 10087,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:76:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:180:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:96:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ETH: _ETH
  };
export const _Participants = {
  "Deployer": Deployer,
  "PrimaryBuy": PrimaryBuy,
  "halt": halt,
  "stopContract": stopContract
  };
export const _APIs = {
  PrimaryBuy: PrimaryBuy,
  halt: halt,
  stopContract: stopContract
  };
