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
        
        const v849 = v842[stdlib.checkedBigNumberify('./test.rsh:110:35:application', stdlib.UInt_max, '0')];
        const v850 = v849[stdlib.checkedBigNumberify('./test.rsh:110:35:application', stdlib.UInt_max, '0')];
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
  
  const v794 = stdlib.gt(v785, stdlib.checkedBigNumberify('./test.rsh:72:25:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v794, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./test.rsh:72:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Supply must be greater than 0',
    who: 'Deployer'
    });
  const v796 = stdlib.lt(v783, stdlib.UInt_max);
  stdlib.assert(v796, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./test.rsh:73:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Price Too Large',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v785, v786, v783, v781, v782, v784],
    evt_cnt: 6,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./test.rsh:71:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc4, ctc0, ctc0, ctc1, ctc2],
    pay: [stdlib.checkedBigNumberify('./test.rsh:71:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v799, v800, v801, v802, v803, v804], secs: v806, time: v805, didSend: v107, from: v798 } = txn1;
      
      const v807 = v776[stdlib.checkedBigNumberify('./test.rsh:71:5:dot', stdlib.UInt_max, '0')];
      const v808 = stdlib.Array_set(v807, '0', stdlib.checkedBigNumberify('./test.rsh:71:5:dot', stdlib.UInt_max, '0'));
      const v809 = stdlib.Array_set(v776, stdlib.checkedBigNumberify('./test.rsh:71:5:dot', stdlib.UInt_max, '0'), v808);
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
  const v807 = v776[stdlib.checkedBigNumberify('./test.rsh:71:5:dot', stdlib.UInt_max, '0')];
  const v808 = stdlib.Array_set(v807, '0', stdlib.checkedBigNumberify('./test.rsh:71:5:dot', stdlib.UInt_max, '0'));
  const v809 = stdlib.Array_set(v776, stdlib.checkedBigNumberify('./test.rsh:71:5:dot', stdlib.UInt_max, '0'), v808);
  const v811 = stdlib.gt(v799, stdlib.checkedBigNumberify('./test.rsh:72:25:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v811, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./test.rsh:72:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Supply must be greater than 0',
    who: 'Deployer'
    });
  const v813 = stdlib.lt(v801, stdlib.UInt_max);
  stdlib.assert(v813, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./test.rsh:73:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
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
    pay: [stdlib.checkedBigNumberify('./test.rsh:81:5:dot', stdlib.UInt_max, '0'), [[v799, v800]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v818, time: v817, didSend: v115, from: v816 } = txn2;
      
      ;
      const v819 = v809[stdlib.checkedBigNumberify('./test.rsh:81:5:dot', stdlib.UInt_max, '0')];
      const v820 = v819[stdlib.checkedBigNumberify('./test.rsh:81:5:dot', stdlib.UInt_max, '0')];
      const v821 = stdlib.add(v820, v799);
      const v823 = stdlib.Array_set(v819, '0', v821);
      const v824 = stdlib.Array_set(v809, stdlib.checkedBigNumberify('./test.rsh:81:5:dot', stdlib.UInt_max, '0'), v823);
      sim_r.txns.push({
        amt: v799,
        kind: 'to',
        tok: v800
        });
      
      const v828 = v824[stdlib.checkedBigNumberify('./test.rsh:98:30:application', stdlib.UInt_max, '0')];
      const v829 = v828[stdlib.checkedBigNumberify('./test.rsh:98:30:application', stdlib.UInt_max, '0')];
      const v830 = true;
      const v831 = false;
      const v833 = v829;
      const v835 = stdlib.checkedBigNumberify('./test.rsh:98:42:decimal', stdlib.UInt_max, '0');
      const v836 = v817;
      const v842 = v824;
      const v843 = stdlib.checkedBigNumberify('./test.rsh:65:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v830;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v1209 = v842[stdlib.checkedBigNumberify('./test.rsh:180:21:application', stdlib.UInt_max, '0')];
        const v1210 = v1209[stdlib.checkedBigNumberify('./test.rsh:180:21:application', stdlib.UInt_max, '0')];
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
  const v819 = v809[stdlib.checkedBigNumberify('./test.rsh:81:5:dot', stdlib.UInt_max, '0')];
  const v820 = v819[stdlib.checkedBigNumberify('./test.rsh:81:5:dot', stdlib.UInt_max, '0')];
  const v821 = stdlib.add(v820, v799);
  const v823 = stdlib.Array_set(v819, '0', v821);
  const v824 = stdlib.Array_set(v809, stdlib.checkedBigNumberify('./test.rsh:81:5:dot', stdlib.UInt_max, '0'), v823);
  ;
  const v825 = stdlib.addressEq(v798, v816);
  stdlib.assert(v825, {
    at: './test.rsh:81:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  stdlib.protect(ctc5, await interact.launched(v815), {
    at: './test.rsh:82:22:application',
    fs: ['at ./test.rsh:82:22:application call to [unknown function] (defined at: ./test.rsh:82:22:function exp)', 'at ./test.rsh:82:22:application call to "liftedInteract" (defined at: ./test.rsh:82:22:application)'],
    msg: 'launched',
    who: 'Deployer'
    });
  
  const v828 = v824[stdlib.checkedBigNumberify('./test.rsh:98:30:application', stdlib.UInt_max, '0')];
  const v829 = v828[stdlib.checkedBigNumberify('./test.rsh:98:30:application', stdlib.UInt_max, '0')];
  let v830 = true;
  let v831 = false;
  let v833 = v829;
  let v835 = stdlib.checkedBigNumberify('./test.rsh:98:42:decimal', stdlib.UInt_max, '0');
  let v836 = v817;
  let v842 = v824;
  let v843 = stdlib.checkedBigNumberify('./test.rsh:65:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
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
        const v934 = v929[stdlib.checkedBigNumberify('./test.rsh:115:9:spread', stdlib.UInt_max, '0')];
        const v935 = stdlib.safeMul(v801, v934);
        const v966 = stdlib.add(v843, v935);
        ;
        const v967 = v842[stdlib.checkedBigNumberify('./test.rsh:98:21:dot', stdlib.UInt_max, '0')];
        const v968 = v967[stdlib.checkedBigNumberify('./test.rsh:98:21:dot', stdlib.UInt_max, '0')];
        ;
        const v977 = stdlib.le(v934, v968);
        stdlib.assert(v977, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./test.rsh:125:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./test.rsh:124:27:application call to [unknown function] (defined at: ./test.rsh:124:27:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v983 = stdlib.sub(v966, v935);
        ;
        const v989 = stdlib.sub(v968, v934);
        const v991 = stdlib.Array_set(v967, '0', v989);
        const v992 = stdlib.Array_set(v842, stdlib.checkedBigNumberify('./test.rsh:127:43:application', stdlib.UInt_max, '0'), v991);
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
          fs: ['at ./test.rsh:140:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./test.rsh:139:22:application call to [unknown function] (defined at: ./test.rsh:139:22:function exp)', 'at ./test.rsh:98:21:application call to [unknown function] (defined at: ./test.rsh:139:22:function exp)', 'at ./test.rsh:98:21:application call to [unknown function] (defined at: ./test.rsh:98:21:function exp)', 'at ./test.rsh:114:14:application call to [unknown function] (defined at: ./test.rsh:114:14:function exp)'],
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
  const v1209 = v842[stdlib.checkedBigNumberify('./test.rsh:180:21:application', stdlib.UInt_max, '0')];
  const v1210 = v1209[stdlib.checkedBigNumberify('./test.rsh:180:21:application', stdlib.UInt_max, '0')];
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
    at: './test.rsh:1:23:application',
    fs: ['at ./test.rsh:118:24:application call to [unknown function] (defined at: ./test.rsh:118:24:function exp)', 'at ./test.rsh:98:21:application call to "runPrimaryBuy0_159" (defined at: ./test.rsh:115:9:function exp)', 'at ./test.rsh:98:21:application call to [unknown function] (defined at: ./test.rsh:98:21:function exp)'],
    msg: 'in',
    who: 'PrimaryBuy'
    });
  const v856 = v855[stdlib.checkedBigNumberify('./test.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v859 = v842[stdlib.checkedBigNumberify('./test.rsh:119:41:application', stdlib.UInt_max, '0')];
  const v860 = v859[stdlib.checkedBigNumberify('./test.rsh:119:41:application', stdlib.UInt_max, '0')];
  const v861 = stdlib.le(v856, v860);
  stdlib.assert(v861, {
    at: './test.rsh:119:15:application',
    fs: ['at ./test.rsh:118:24:application call to [unknown function] (defined at: ./test.rsh:118:24:function exp)', 'at ./test.rsh:118:24:application call to [unknown function] (defined at: ./test.rsh:118:24:function exp)', 'at ./test.rsh:98:21:application call to "runPrimaryBuy0_159" (defined at: ./test.rsh:115:9:function exp)', 'at ./test.rsh:98:21:application call to [unknown function] (defined at: ./test.rsh:98:21:function exp)'],
    msg: 'balance is less',
    who: 'PrimaryBuy'
    });
  const v862 = stdlib.gt(v856, stdlib.checkedBigNumberify('./test.rsh:120:32:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v862, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./test.rsh:120:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./test.rsh:118:24:application call to [unknown function] (defined at: ./test.rsh:118:24:function exp)', 'at ./test.rsh:118:24:application call to [unknown function] (defined at: ./test.rsh:118:24:function exp)', 'at ./test.rsh:98:21:application call to "runPrimaryBuy0_159" (defined at: ./test.rsh:115:9:function exp)', 'at ./test.rsh:98:21:application call to [unknown function] (defined at: ./test.rsh:98:21:function exp)'],
    msg: 'can\'t be less than 0',
    who: 'PrimaryBuy'
    });
  const v864 = v831 ? false : true;
  stdlib.assert(v864, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./test.rsh:121:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./test.rsh:118:24:application call to [unknown function] (defined at: ./test.rsh:118:24:function exp)', 'at ./test.rsh:118:24:application call to [unknown function] (defined at: ./test.rsh:118:24:function exp)', 'at ./test.rsh:98:21:application call to "runPrimaryBuy0_159" (defined at: ./test.rsh:115:9:function exp)', 'at ./test.rsh:98:21:application call to [unknown function] (defined at: ./test.rsh:98:21:function exp)'],
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
    pay: [v893, [[stdlib.checkedBigNumberify('./test.rsh:123:53:decimal', stdlib.UInt_max, '0'), v800]]],
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
          const v934 = v929[stdlib.checkedBigNumberify('./test.rsh:115:9:spread', stdlib.UInt_max, '0')];
          const v935 = stdlib.safeMul(v801, v934);
          const v966 = stdlib.add(v843, v935);
          sim_r.txns.push({
            amt: v935,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v967 = v842[stdlib.checkedBigNumberify('./test.rsh:98:21:dot', stdlib.UInt_max, '0')];
          const v968 = v967[stdlib.checkedBigNumberify('./test.rsh:98:21:dot', stdlib.UInt_max, '0')];
          ;
          const v983 = stdlib.sub(v966, v935);
          sim_r.txns.push({
            kind: 'from',
            to: v798,
            tok: undefined /* Nothing */
            });
          const v989 = stdlib.sub(v968, v934);
          const v991 = stdlib.Array_set(v967, '0', v989);
          const v992 = stdlib.Array_set(v842, stdlib.checkedBigNumberify('./test.rsh:127:43:application', stdlib.UInt_max, '0'), v991);
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
      const v934 = v929[stdlib.checkedBigNumberify('./test.rsh:115:9:spread', stdlib.UInt_max, '0')];
      const v935 = stdlib.safeMul(v801, v934);
      const v966 = stdlib.add(v843, v935);
      ;
      const v967 = v842[stdlib.checkedBigNumberify('./test.rsh:98:21:dot', stdlib.UInt_max, '0')];
      const v968 = v967[stdlib.checkedBigNumberify('./test.rsh:98:21:dot', stdlib.UInt_max, '0')];
      ;
      const v977 = stdlib.le(v934, v968);
      stdlib.assert(v977, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./test.rsh:125:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./test.rsh:124:27:application call to [unknown function] (defined at: ./test.rsh:124:27:function exp)'],
        msg: null,
        who: 'PrimaryBuy'
        });
      const v983 = stdlib.sub(v966, v935);
      ;
      const v989 = stdlib.sub(v968, v934);
      const v991 = stdlib.Array_set(v967, '0', v989);
      const v992 = stdlib.Array_set(v842, stdlib.checkedBigNumberify('./test.rsh:127:43:application', stdlib.UInt_max, '0'), v991);
      ;
      const v993 = await txn1.getOutput('PrimaryBuy', 'v934', ctc1, v934);
      if (v616) {
        stdlib.protect(ctc11, await interact.out(v929, v993), {
          at: './test.rsh:116:7:application',
          fs: ['at ./test.rsh:116:7:application call to [unknown function] (defined at: ./test.rsh:116:7:function exp)', 'at ./test.rsh:128:10:application call to "k" (defined at: ./test.rsh:124:27:function exp)', 'at ./test.rsh:124:27:application call to [unknown function] (defined at: ./test.rsh:124:27:function exp)'],
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
    at: './test.rsh:1:23:application',
    fs: ['at ./test.rsh:139:22:application call to [unknown function] (defined at: ./test.rsh:139:22:function exp)', 'at ./test.rsh:98:21:application call to "runhalt0_159" (defined at: ./test.rsh:139:10:function exp)', 'at ./test.rsh:98:21:application call to [unknown function] (defined at: ./test.rsh:98:21:function exp)'],
    msg: 'in',
    who: 'halt'
    });
  const v884 = stdlib.addressEq(v881, v798);
  stdlib.assert(v884, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./test.rsh:140:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./test.rsh:139:22:application call to [unknown function] (defined at: ./test.rsh:139:22:function exp)', 'at ./test.rsh:98:21:application call to "runhalt0_159" (defined at: ./test.rsh:139:10:function exp)', 'at ./test.rsh:98:21:application call to [unknown function] (defined at: ./test.rsh:98:21:function exp)'],
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
    pay: [stdlib.checkedBigNumberify('./test.rsh:143:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./test.rsh:143:14:decimal', stdlib.UInt_max, '0'), v800]]],
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
        fs: ['at ./test.rsh:140:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./test.rsh:139:22:application call to [unknown function] (defined at: ./test.rsh:139:22:function exp)', 'at ./test.rsh:98:21:application call to [unknown function] (defined at: ./test.rsh:139:22:function exp)', 'at ./test.rsh:98:21:application call to [unknown function] (defined at: ./test.rsh:98:21:function exp)', 'at ./test.rsh:114:14:application call to [unknown function] (defined at: ./test.rsh:114:14:function exp)'],
        msg: 'You are not Owner',
        who: 'halt'
        });
      ;
      ;
      const v1097 = null;
      const v1098 = await txn1.getOutput('halt', 'v1097', ctc11, v1097);
      if (v616) {
        stdlib.protect(ctc11, await interact.out(v1021, v1098), {
          at: './test.rsh:139:11:application',
          fs: ['at ./test.rsh:139:11:application call to [unknown function] (defined at: ./test.rsh:139:11:function exp)', 'at ./test.rsh:145:12:application call to "k" (defined at: ./test.rsh:144:13:function exp)', 'at ./test.rsh:144:13:application call to [unknown function] (defined at: ./test.rsh:144:13:function exp)'],
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
    at: './test.rsh:1:23:application',
    fs: ['at ./test.rsh:160:10:application call to [unknown function] (defined at: ./test.rsh:160:10:function exp)', 'at ./test.rsh:98:21:application call to "runstopContract0_159" (defined at: ./test.rsh:157:9:function exp)', 'at ./test.rsh:98:21:application call to [unknown function] (defined at: ./test.rsh:98:21:function exp)'],
    msg: 'in',
    who: 'stopContract'
    });
  const v875 = stdlib.addressEq(v871, v798);
  stdlib.assert(v875, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./test.rsh:161:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./test.rsh:160:10:application call to [unknown function] (defined at: ./test.rsh:160:10:function exp)', 'at ./test.rsh:160:10:application call to [unknown function] (defined at: ./test.rsh:160:10:function exp)', 'at ./test.rsh:98:21:application call to "runstopContract0_159" (defined at: ./test.rsh:157:9:function exp)', 'at ./test.rsh:98:21:application call to [unknown function] (defined at: ./test.rsh:98:21:function exp)'],
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
    pay: [stdlib.checkedBigNumberify('./test.rsh:166:14:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./test.rsh:166:18:decimal', stdlib.UInt_max, '0'), v800]]],
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
          
          const v2053 = v842[stdlib.checkedBigNumberify('./test.rsh:180:21:application', stdlib.UInt_max, '0')];
          const v2054 = v2053[stdlib.checkedBigNumberify('./test.rsh:180:21:application', stdlib.UInt_max, '0')];
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
          at: './test.rsh:158:7:application',
          fs: ['at ./test.rsh:158:7:application call to [unknown function] (defined at: ./test.rsh:158:7:function exp)', 'at ./test.rsh:168:10:application call to "k" (defined at: ./test.rsh:167:11:function exp)', 'at ./test.rsh:167:11:application call to [unknown function] (defined at: ./test.rsh:167:11:function exp)'],
          msg: 'out',
          who: 'stopContract'
          });
        }
      else {
        }
      
      const v2053 = v842[stdlib.checkedBigNumberify('./test.rsh:180:21:application', stdlib.UInt_max, '0')];
      const v2054 = v2053[stdlib.checkedBigNumberify('./test.rsh:180:21:application', stdlib.UInt_max, '0')];
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
const _ALGO = {
  ABI: {
    impure: [`PrimaryBuy(uint64)uint64`, `_reachp_0((uint64,uint64,uint64,uint64,uint64,byte[32],byte[8]))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[8])))void`, `halt()void`, `stopContract()byte`],
    pure: [`balance()uint64`, `halted()byte`, `meta()(byte[32],byte[8],uint64,uint64,uint64,uint64)`, `owner()address`, `token()uint64`, `tracker()(uint64,uint64)`],
    sigs: [`PrimaryBuy(uint64)uint64`, `_reachp_0((uint64,uint64,uint64,uint64,uint64,byte[32],byte[8]))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[8])))void`, `balance()uint64`, `halt()void`, `halted()byte`, `meta()(byte[32],byte[8],uint64,uint64,uint64,uint64)`, `owner()address`, `stopContract()byte`, `token()uint64`, `tracker()(uint64,uint64)`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAJAAEECCCgjQYoMDgmAwABAAEBMRhBBBgoZEkiWzUBJVs1AilkKmRQggwEAsmHpwQz5e4hBDdHyqUEO8ouOQQ8yyqlBET4SyIES2fRDQR8WwKJBH477JkEjZy34wSxu7CoBN/ZIyg2GgCODAQ0BDoDogRAA9ED1AQ9A84AAQOHBDcDlwA2GgEXNQslryk0CxZQUDULJDQBEkSIBEM0CyJbNQw0C1cICTUNgARU52KsNAwWUDQNULA0DIgEeTQNIlWNAwPpA+wDkkL/uDQNI1s1CzQYNAsLSTUciAR1NA9XABFJNQ0iWzUMNAs0DA5ENBw0G4gENDQLNBkxAIgEM4AIAAAAAAAAA6Y0CxZQsDQLFjUEIzQSNAsJNBE0CwgyBjQPNA00DDQLCRZcAFwANA40HAg0HAk1DjUPNRA1ETUSNRQ0FEEDFzQbNBoWUDQZFlA0GBZQNBcWUDQWUDQVUDQTFlEHCFA0EhZQNBEWUDQPUDQOFlAkMgY1AjUBKUsBVwB/ZypMV38TZyg0ARY0AhZQZzEZIhJEiAOsNANAAAqABBUffHU0BFCwI0MxADQbEkQoNQuACAAAAAAAAARJNAtQsDQLNQQjNBMUMgY1EDUTNRRC/20jNQuACAAAAAAAAASuNAsWUQcIULA0CxZRBwg1BCIyBjUQNRRC/0Y0ASQSRIgC3DQSFjUEMRkiEkRC/46AEQAAAAAAAAAAAQAAAAAAAAAANQtC/mw0ASQSRIgCrzQTFlEHCDUEQv/NNAEkEkSIApw0FjQVUDQXFlA0GhZQNBgWUDQZFlA1BEL/qzQBJBJEiAJ6NBs1BEL/nIARAAAAAAAAAAACAAAAAAAAAAA1C0L+EDQBJBJEiAJTNBkWNQRC/3Q0ASQSRIgCQzQPVwARVwAINBIWUDUEQv9bMQA1GzQLIls1DDQLJVs1GjQLgRBbNRk0C4EYWzUYNAshBFs1FzQLVyggNRY0C1dICDUVgARn8PadNAwWUDQaFlA0GRZQNBgWUDQXFlA0FlA0FVCwNAyIAi+BEa9JNQtJVwARJa9cAFwANQ00GiINRDQYgf///////////wEMRCEFiAIOIjQZMgqIAfg0GzQaFlA0GRZQNBgWUDQXFlA0FlA0FVA0DVCBGa9QIzIGQv4ZIzQBEkRJVwAgNRtJIQRbNRpJIQZbNRlJIQdbNRhJIQhbNRdJV0AgNRZJV2AINRVXaBE1DTQLFzUMgATVFRkUNAwWULA0DIgBjjQNVwARNQw0DTQMSSJbNBoIFlwAXAA1CzQaNBkxFjQAIwhJNQAJRwM4FDIKEkQ4ECQSRDgRTwISRDgSEkQ0GzEAEkQjIjQLVwARIlsiMgY0CyI1DjUPNRA1ETUSNRM1FEL9N4gBICEFiAEtNhoBNQtC/pOIARA2GgE1C0L/OYgBBTYaATULQvxkIjE0EkSBAzE1EkQiMTYSRCIxNxJEiADlgZIBryIiQv0mQv2nQv25Qv3OQv13NA9XABEiWzQZNBuIAMY0DjQbiAC3IjQZMgoyCYgA8TEZgQUSRIgAwDIKYDIKeAlJNQYyCogAlUL9AiKyASOyELIHsgiziSKyASSyELIUshGyErOJQvwXQvzzQv2BQv2gQv2sQv3BQv3OSIlMCUk1BjIJiABXiQlJQf/uSTUGiABziUlXACA1G0khBFs1GkkhBls1GUkhB1s1GEkhCFs1F0lXQCA1FklXYAg1FUlXaAEXNRNJgWlbNRJJgXFbNRFJV3kRNQ+BigFbNQ6JsUL/aiM1A4mxQv9uSSISTDQCEhFEiTQGCDUGiTQGNAdKD0H/ekL/gjEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRImxshVC/zA=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `561`,
    1001: `561`,
    1002: `562`,
    1003: `563`,
    1004: `566`,
    1005: `567`,
    1006: `568`,
    1007: `568`,
    1008: `569`,
    1009: `569`,
    101: `21`,
    1010: `569`,
    1011: `570`,
    1012: `571`,
    1013: `572`,
    1014: `573`,
    1015: `573`,
    1016: `574`,
    1017: `574`,
    1018: `575`,
    1019: `576`,
    102: `21`,
    1020: `576`,
    1021: `577`,
    1022: `577`,
    1023: `578`,
    1024: `578`,
    1025: `579`,
    1026: `579`,
    1027: `580`,
    1028: `580`,
    1029: `581`,
    103: `21`,
    1030: `581`,
    1031: `582`,
    1032: `582`,
    1033: `583`,
    1034: `583`,
    1035: `583`,
    1036: `585`,
    1037: `585`,
    1038: `585`,
    1039: `586`,
    104: `22`,
    1040: `586`,
    1041: `587`,
    1042: `587`,
    1043: `587`,
    1044: `588`,
    1045: `588`,
    1046: `588`,
    1047: `589`,
    1048: `589`,
    1049: `590`,
    105: `22`,
    1050: `590`,
    1051: `590`,
    1052: `592`,
    1053: `592`,
    1054: `592`,
    1055: `593`,
    1056: `593`,
    1057: `593`,
    1058: `594`,
    1059: `594`,
    106: `22`,
    1060: `595`,
    1061: `595`,
    1062: `595`,
    1063: `597`,
    1064: `597`,
    1065: `597`,
    1066: `598`,
    1067: `598`,
    1068: `598`,
    1069: `599`,
    107: `23`,
    1070: `599`,
    1071: `600`,
    1072: `600`,
    1073: `600`,
    1074: `602`,
    1075: `603`,
    1076: `603`,
    1077: `604`,
    1078: `605`,
    1079: `606`,
    108: `23`,
    1080: `606`,
    1081: `607`,
    1082: `607`,
    1083: `608`,
    1084: `609`,
    1085: `610`,
    1086: `611`,
    1087: `611`,
    1088: `612`,
    1089: `613`,
    109: `23`,
    1090: `614`,
    1091: `615`,
    1092: `615`,
    1093: `616`,
    1094: `617`,
    1095: `618`,
    1096: `618`,
    1097: `618`,
    1098: `619`,
    1099: `619`,
    11: `2`,
    110: `23`,
    1100: `619`,
    1101: `620`,
    1102: `621`,
    1103: `622`,
    1104: `623`,
    1105: `623`,
    1106: `623`,
    1107: `625`,
    1108: `625`,
    1109: `625`,
    111: `23`,
    1110: `627`,
    1111: `627`,
    1112: `627`,
    1113: `629`,
    1114: `629`,
    1115: `629`,
    1116: `631`,
    1117: `631`,
    1118: `631`,
    1119: `633`,
    112: `23`,
    1120: `633`,
    1121: `634`,
    1122: `634`,
    1123: `634`,
    1124: `635`,
    1125: `636`,
    1126: `638`,
    1127: `638`,
    1128: `640`,
    1129: `640`,
    113: `23`,
    1130: `641`,
    1131: `641`,
    1132: `641`,
    1133: `642`,
    1134: `642`,
    1135: `643`,
    1136: `643`,
    1137: `644`,
    1138: `644`,
    1139: `644`,
    114: `23`,
    1140: `646`,
    1141: `647`,
    1142: `647`,
    1143: `648`,
    1144: `648`,
    1145: `649`,
    1146: `649`,
    1147: `650`,
    1148: `650`,
    1149: `650`,
    115: `23`,
    1150: `652`,
    1151: `652`,
    1152: `653`,
    1153: `653`,
    1154: `654`,
    1155: `655`,
    1156: `657`,
    1157: `657`,
    1158: `657`,
    1159: `659`,
    116: `23`,
    1160: `659`,
    1161: `660`,
    1162: `661`,
    1163: `661`,
    1164: `662`,
    1165: `663`,
    1166: `665`,
    1167: `666`,
    1168: `666`,
    1169: `667`,
    117: `23`,
    1170: `667`,
    1171: `668`,
    1172: `668`,
    1173: `668`,
    1174: `669`,
    1175: `669`,
    1176: `669`,
    1177: `671`,
    1178: `672`,
    1179: `672`,
    118: `23`,
    1180: `673`,
    1181: `674`,
    1182: `674`,
    1183: `675`,
    1184: `675`,
    1185: `676`,
    1186: `676`,
    1187: `677`,
    1188: `678`,
    1189: `680`,
    119: `23`,
    1190: `681`,
    1191: `681`,
    1192: `682`,
    1193: `683`,
    1194: `683`,
    1195: `684`,
    1196: `684`,
    1197: `685`,
    1198: `685`,
    1199: `686`,
    12: `2`,
    120: `23`,
    1200: `686`,
    1201: `687`,
    1202: `688`,
    1203: `690`,
    1204: `690`,
    1205: `690`,
    1206: `692`,
    1207: `692`,
    1208: `692`,
    1209: `694`,
    121: `23`,
    1210: `694`,
    1211: `694`,
    1212: `696`,
    1213: `696`,
    1214: `696`,
    1215: `698`,
    1216: `698`,
    1217: `698`,
    1218: `700`,
    1219: `700`,
    122: `23`,
    1220: `700`,
    1221: `702`,
    1222: `702`,
    1223: `702`,
    1224: `704`,
    1225: `705`,
    1226: `707`,
    1227: `708`,
    1228: `709`,
    1229: `710`,
    123: `23`,
    1230: `710`,
    1231: `711`,
    1232: `711`,
    1233: `712`,
    1234: `712`,
    1235: `712`,
    1236: `713`,
    1237: `715`,
    1238: `716`,
    1239: `717`,
    124: `23`,
    1240: `717`,
    1241: `717`,
    1242: `718`,
    1243: `719`,
    1244: `719`,
    1245: `720`,
    1246: `720`,
    1247: `720`,
    1248: `721`,
    1249: `723`,
    125: `23`,
    1250: `724`,
    1251: `724`,
    1252: `724`,
    1253: `725`,
    1254: `725`,
    1255: `726`,
    1256: `727`,
    1257: `727`,
    1258: `728`,
    1259: `729`,
    126: `23`,
    1260: `729`,
    1261: `730`,
    1262: `731`,
    1263: `731`,
    1264: `732`,
    1265: `733`,
    1266: `733`,
    1267: `734`,
    1268: `735`,
    1269: `735`,
    127: `23`,
    1270: `736`,
    1271: `737`,
    1272: `737`,
    1273: `738`,
    1274: `739`,
    1275: `739`,
    1276: `740`,
    1277: `741`,
    1278: `741`,
    1279: `742`,
    128: `23`,
    1280: `743`,
    1281: `743`,
    1282: `743`,
    1283: `744`,
    1284: `744`,
    1285: `745`,
    1286: `746`,
    1287: `746`,
    1288: `746`,
    1289: `747`,
    129: `23`,
    1290: `747`,
    1291: `748`,
    1292: `749`,
    1293: `749`,
    1294: `749`,
    1295: `750`,
    1296: `751`,
    1297: `751`,
    1298: `752`,
    1299: `753`,
    13: `2`,
    130: `23`,
    1300: `753`,
    1301: `754`,
    1302: `755`,
    1303: `755`,
    1304: `756`,
    1305: `757`,
    1306: `757`,
    1307: `758`,
    1308: `759`,
    1309: `759`,
    131: `23`,
    1310: `760`,
    1311: `761`,
    1312: `761`,
    1313: `761`,
    1314: `762`,
    1315: `762`,
    1316: `763`,
    1317: `763`,
    1318: `763`,
    1319: `764`,
    132: `23`,
    1320: `765`,
    1321: `765`,
    1322: `766`,
    1323: `768`,
    1324: `769`,
    1325: `769`,
    1326: `769`,
    1327: `771`,
    1328: `772`,
    1329: `772`,
    133: `25`,
    1330: `773`,
    1331: `775`,
    1332: `776`,
    1333: `776`,
    1334: `776`,
    1335: `778`,
    1336: `779`,
    1337: `780`,
    1338: `781`,
    1339: `782`,
    134: `27`,
    1340: `782`,
    1341: `783`,
    1342: `784`,
    1343: `785`,
    1344: `786`,
    1345: `788`,
    1346: `788`,
    1347: `789`,
    1348: `790`,
    1349: `790`,
    135: `27`,
    1350: `791`,
    1351: `793`,
    1352: `793`,
    1353: `794`,
    1354: `794`,
    1355: `795`,
    1356: `796`,
    1357: `797`,
    1358: `797`,
    1359: `797`,
    136: `27`,
    1360: `798`,
    1361: `798`,
    1362: `798`,
    1363: `801`,
    1364: `801`,
    1365: `802`,
    1366: `802`,
    1367: `803`,
    1368: `804`,
    1369: `805`,
    137: `28`,
    1370: `806`,
    1371: `806`,
    1372: `807`,
    1373: `808`,
    1374: `808`,
    1375: `809`,
    1376: `809`,
    1377: `810`,
    1378: `810`,
    1379: `811`,
    138: `29`,
    1380: `812`,
    1381: `813`,
    1382: `813`,
    1383: `814`,
    1384: `815`,
    1385: `816`,
    1386: `817`,
    1387: `817`,
    1388: `818`,
    1389: `819`,
    139: `29`,
    1390: `820`,
    1391: `822`,
    1392: `823`,
    1393: `823`,
    1394: `824`,
    14: `2`,
    140: `31`,
    141: `32`,
    142: `33`,
    143: `34`,
    144: `34`,
    145: `35`,
    146: `36`,
    147: `37`,
    148: `38`,
    149: `38`,
    15: `2`,
    150: `40`,
    151: `41`,
    152: `41`,
    153: `42`,
    154: `43`,
    155: `44`,
    156: `44`,
    157: `44`,
    158: `45`,
    159: `45`,
    16: `2`,
    160: `46`,
    161: `47`,
    162: `48`,
    163: `48`,
    164: `49`,
    165: `49`,
    166: `50`,
    167: `50`,
    168: `50`,
    169: `51`,
    17: `2`,
    170: `51`,
    171: `52`,
    172: `52`,
    173: `52`,
    174: `52`,
    175: `52`,
    176: `52`,
    177: `53`,
    178: `53`,
    179: `54`,
    18: `2`,
    180: `55`,
    181: `56`,
    182: `56`,
    183: `57`,
    184: `58`,
    185: `60`,
    186: `60`,
    187: `61`,
    188: `61`,
    189: `61`,
    19: `2`,
    190: `62`,
    191: `62`,
    192: `63`,
    193: `64`,
    194: `65`,
    195: `65`,
    196: `65`,
    197: `65`,
    198: `65`,
    199: `65`,
    2: `2`,
    20: `2`,
    200: `65`,
    201: `65`,
    202: `66`,
    203: `66`,
    204: `66`,
    205: `68`,
    206: `68`,
    207: `69`,
    208: `70`,
    209: `71`,
    21: `4`,
    210: `71`,
    211: `72`,
    212: `72`,
    213: `73`,
    214: `73`,
    215: `74`,
    216: `75`,
    217: `76`,
    218: `76`,
    219: `77`,
    22: `4`,
    220: `77`,
    221: `77`,
    222: `80`,
    223: `80`,
    224: `81`,
    225: `81`,
    226: `81`,
    227: `82`,
    228: `83`,
    229: `83`,
    23: `5`,
    230: `84`,
    231: `85`,
    232: `86`,
    233: `86`,
    234: `87`,
    235: `87`,
    236: `88`,
    237: `88`,
    238: `89`,
    239: `90`,
    24: `5`,
    240: `95`,
    241: `95`,
    242: `97`,
    243: `97`,
    244: `98`,
    245: `98`,
    246: `98`,
    247: `99`,
    248: `99`,
    249: `101`,
    25: `5`,
    250: `101`,
    251: `103`,
    252: `103`,
    253: `104`,
    254: `104`,
    255: `104`,
    256: `105`,
    257: `105`,
    258: `105`,
    259: `105`,
    26: `6`,
    260: `105`,
    261: `105`,
    262: `105`,
    263: `105`,
    264: `105`,
    265: `105`,
    266: `106`,
    267: `106`,
    268: `107`,
    269: `108`,
    27: `7`,
    270: `109`,
    271: `110`,
    272: `110`,
    273: `111`,
    274: `112`,
    275: `112`,
    276: `113`,
    277: `114`,
    278: `114`,
    279: `115`,
    28: `8`,
    280: `115`,
    281: `116`,
    282: `117`,
    283: `117`,
    284: `118`,
    285: `118`,
    286: `119`,
    287: `120`,
    288: `120`,
    289: `121`,
    29: `9`,
    290: `121`,
    291: `122`,
    292: `122`,
    293: `123`,
    294: `123`,
    295: `124`,
    296: `124`,
    297: `125`,
    298: `126`,
    299: `127`,
    3: `2`,
    30: `10`,
    300: `127`,
    301: `128`,
    302: `128`,
    303: `129`,
    304: `129`,
    305: `130`,
    306: `130`,
    307: `131`,
    308: `132`,
    309: `132`,
    31: `11`,
    310: `133`,
    311: `134`,
    312: `134`,
    313: `135`,
    314: `135`,
    315: `136`,
    316: `136`,
    317: `137`,
    318: `137`,
    319: `138`,
    32: `11`,
    320: `138`,
    321: `139`,
    322: `139`,
    323: `141`,
    324: `141`,
    325: `142`,
    326: `142`,
    327: `142`,
    328: `144`,
    329: `144`,
    33: `12`,
    330: `145`,
    331: `145`,
    332: `146`,
    333: `147`,
    334: `148`,
    335: `148`,
    336: `149`,
    337: `150`,
    338: `151`,
    339: `151`,
    34: `13`,
    340: `152`,
    341: `153`,
    342: `154`,
    343: `154`,
    344: `155`,
    345: `156`,
    346: `157`,
    347: `157`,
    348: `158`,
    349: `159`,
    35: `14`,
    350: `159`,
    351: `160`,
    352: `161`,
    353: `161`,
    354: `162`,
    355: `163`,
    356: `163`,
    357: `163`,
    358: `164`,
    359: `165`,
    36: `14`,
    360: `165`,
    361: `166`,
    362: `167`,
    363: `168`,
    364: `168`,
    365: `169`,
    366: `170`,
    367: `171`,
    368: `171`,
    369: `172`,
    37: `15`,
    370: `173`,
    371: `173`,
    372: `174`,
    373: `175`,
    374: `176`,
    375: `177`,
    376: `177`,
    377: `179`,
    378: `179`,
    379: `180`,
    38: `16`,
    380: `180`,
    381: `181`,
    382: `182`,
    383: `182`,
    384: `183`,
    385: `183`,
    386: `183`,
    387: `184`,
    388: `185`,
    389: `186`,
    39: `17`,
    390: `187`,
    391: `187`,
    392: `187`,
    393: `188`,
    394: `189`,
    395: `190`,
    396: `190`,
    397: `191`,
    398: `192`,
    399: `192`,
    4: `2`,
    40: `18`,
    400: `193`,
    401: `194`,
    402: `195`,
    403: `196`,
    404: `196`,
    405: `197`,
    406: `198`,
    407: `199`,
    408: `201`,
    409: `201`,
    41: `19`,
    410: `201`,
    411: `203`,
    412: `203`,
    413: `204`,
    414: `204`,
    415: `204`,
    416: `206`,
    417: `206`,
    418: `206`,
    419: `206`,
    42: `21`,
    420: `206`,
    421: `206`,
    422: `207`,
    423: `207`,
    424: `208`,
    425: `209`,
    426: `211`,
    427: `212`,
    428: `214`,
    429: `214`,
    43: `21`,
    430: `215`,
    431: `215`,
    432: `216`,
    433: `217`,
    434: `225`,
    435: `226`,
    436: `226`,
    437: `227`,
    438: `227`,
    439: `227`,
    44: `21`,
    440: `227`,
    441: `227`,
    442: `227`,
    443: `227`,
    444: `227`,
    445: `227`,
    446: `227`,
    447: `228`,
    448: `228`,
    449: `229`,
    45: `21`,
    450: `230`,
    451: `231`,
    452: `231`,
    453: `232`,
    454: `232`,
    455: `233`,
    456: `234`,
    457: `234`,
    458: `235`,
    459: `236`,
    46: `21`,
    460: `236`,
    461: `237`,
    462: `237`,
    463: `238`,
    464: `238`,
    465: `239`,
    466: `239`,
    467: `240`,
    468: `240`,
    469: `240`,
    47: `21`,
    470: `242`,
    471: `243`,
    472: `243`,
    473: `244`,
    474: `244`,
    475: `244`,
    476: `244`,
    477: `244`,
    478: `244`,
    479: `244`,
    48: `21`,
    480: `244`,
    481: `244`,
    482: `244`,
    483: `245`,
    484: `245`,
    485: `246`,
    486: `247`,
    487: `247`,
    488: `247`,
    489: `248`,
    49: `21`,
    490: `249`,
    491: `250`,
    492: `250`,
    493: `251`,
    494: `252`,
    495: `252`,
    496: `252`,
    497: `253`,
    498: `253`,
    499: `254`,
    5: `2`,
    50: `21`,
    500: `255`,
    501: `255`,
    502: `256`,
    503: `256`,
    504: `257`,
    505: `257`,
    506: `258`,
    507: `258`,
    508: `258`,
    509: `260`,
    51: `21`,
    510: `260`,
    511: `261`,
    512: `262`,
    513: `263`,
    514: `266`,
    515: `266`,
    516: `266`,
    517: `267`,
    518: `267`,
    519: `268`,
    52: `21`,
    520: `269`,
    521: `269`,
    522: `271`,
    523: `271`,
    524: `272`,
    525: `273`,
    526: `274`,
    527: `276`,
    528: `276`,
    529: `276`,
    53: `21`,
    530: `278`,
    531: `278`,
    532: `278`,
    533: `278`,
    534: `278`,
    535: `278`,
    536: `278`,
    537: `278`,
    538: `278`,
    539: `278`,
    54: `21`,
    540: `278`,
    541: `278`,
    542: `278`,
    543: `278`,
    544: `278`,
    545: `278`,
    546: `278`,
    547: `278`,
    548: `278`,
    549: `279`,
    55: `21`,
    550: `279`,
    551: `280`,
    552: `280`,
    553: `280`,
    554: `282`,
    555: `282`,
    556: `283`,
    557: `284`,
    558: `285`,
    559: `288`,
    56: `21`,
    560: `288`,
    561: `288`,
    562: `289`,
    563: `289`,
    564: `290`,
    565: `291`,
    566: `291`,
    567: `291`,
    568: `292`,
    569: `292`,
    57: `21`,
    570: `293`,
    571: `293`,
    572: `293`,
    573: `295`,
    574: `295`,
    575: `296`,
    576: `297`,
    577: `298`,
    578: `301`,
    579: `301`,
    58: `21`,
    580: `301`,
    581: `302`,
    582: `302`,
    583: `303`,
    584: `303`,
    585: `304`,
    586: `305`,
    587: `305`,
    588: `306`,
    589: `307`,
    59: `21`,
    590: `308`,
    591: `308`,
    592: `309`,
    593: `310`,
    594: `311`,
    595: `311`,
    596: `312`,
    597: `313`,
    598: `314`,
    599: `314`,
    6: `2`,
    60: `21`,
    600: `315`,
    601: `316`,
    602: `317`,
    603: `317`,
    604: `318`,
    605: `318`,
    606: `318`,
    607: `320`,
    608: `320`,
    609: `321`,
    61: `21`,
    610: `322`,
    611: `323`,
    612: `326`,
    613: `326`,
    614: `326`,
    615: `327`,
    616: `327`,
    617: `328`,
    618: `328`,
    619: `329`,
    62: `21`,
    620: `329`,
    621: `329`,
    622: `331`,
    623: `331`,
    624: `331`,
    625: `331`,
    626: `331`,
    627: `331`,
    628: `331`,
    629: `331`,
    63: `21`,
    630: `331`,
    631: `331`,
    632: `331`,
    633: `331`,
    634: `331`,
    635: `331`,
    636: `331`,
    637: `331`,
    638: `331`,
    639: `331`,
    64: `21`,
    640: `331`,
    641: `332`,
    642: `332`,
    643: `333`,
    644: `333`,
    645: `333`,
    646: `335`,
    647: `335`,
    648: `336`,
    649: `337`,
    65: `21`,
    650: `338`,
    651: `341`,
    652: `341`,
    653: `341`,
    654: `342`,
    655: `342`,
    656: `343`,
    657: `344`,
    658: `344`,
    659: `345`,
    66: `21`,
    660: `345`,
    661: `345`,
    662: `347`,
    663: `347`,
    664: `348`,
    665: `349`,
    666: `350`,
    667: `353`,
    668: `353`,
    669: `353`,
    67: `21`,
    670: `354`,
    671: `354`,
    672: `355`,
    673: `355`,
    674: `355`,
    675: `356`,
    676: `356`,
    677: `356`,
    678: `357`,
    679: `357`,
    68: `21`,
    680: `358`,
    681: `359`,
    682: `360`,
    683: `360`,
    684: `361`,
    685: `361`,
    686: `361`,
    687: `363`,
    688: `363`,
    689: `364`,
    69: `21`,
    690: `364`,
    691: `365`,
    692: `365`,
    693: `366`,
    694: `367`,
    695: `368`,
    696: `368`,
    697: `369`,
    698: `369`,
    699: `370`,
    7: `2`,
    70: `21`,
    700: `371`,
    701: `372`,
    702: `372`,
    703: `373`,
    704: `373`,
    705: `374`,
    706: `374`,
    707: `375`,
    708: `376`,
    709: `376`,
    71: `21`,
    710: `377`,
    711: `377`,
    712: `378`,
    713: `378`,
    714: `379`,
    715: `380`,
    716: `380`,
    717: `381`,
    718: `381`,
    719: `382`,
    72: `21`,
    720: `382`,
    721: `383`,
    722: `384`,
    723: `384`,
    724: `385`,
    725: `385`,
    726: `386`,
    727: `386`,
    728: `386`,
    729: `387`,
    73: `21`,
    730: `387`,
    731: `388`,
    732: `388`,
    733: `389`,
    734: `389`,
    735: `389`,
    736: `390`,
    737: `390`,
    738: `391`,
    739: `391`,
    74: `21`,
    740: `391`,
    741: `391`,
    742: `391`,
    743: `391`,
    744: `392`,
    745: `392`,
    746: `393`,
    747: `394`,
    748: `395`,
    749: `395`,
    75: `21`,
    750: `396`,
    751: `397`,
    752: `398`,
    753: `398`,
    754: `399`,
    755: `400`,
    756: `401`,
    757: `401`,
    758: `402`,
    759: `403`,
    76: `21`,
    760: `404`,
    761: `404`,
    762: `405`,
    763: `406`,
    764: `407`,
    765: `407`,
    766: `408`,
    767: `409`,
    768: `409`,
    769: `410`,
    77: `21`,
    770: `411`,
    771: `413`,
    772: `413`,
    773: `414`,
    774: `414`,
    775: `414`,
    776: `415`,
    777: `415`,
    778: `416`,
    779: `417`,
    78: `21`,
    780: `418`,
    781: `418`,
    782: `419`,
    783: `420`,
    784: `420`,
    785: `420`,
    786: `421`,
    787: `422`,
    788: `423`,
    789: `423`,
    79: `21`,
    790: `424`,
    791: `424`,
    792: `425`,
    793: `425`,
    794: `426`,
    795: `426`,
    796: `427`,
    797: `428`,
    798: `429`,
    799: `433`,
    8: `2`,
    80: `21`,
    800: `433`,
    801: `434`,
    802: `434`,
    803: `434`,
    804: `434`,
    805: `434`,
    806: `434`,
    807: `434`,
    808: `434`,
    809: `434`,
    81: `21`,
    810: `434`,
    811: `434`,
    812: `435`,
    813: `436`,
    814: `440`,
    815: `440`,
    816: `441`,
    817: `441`,
    818: `441`,
    819: `442`,
    82: `21`,
    820: `444`,
    821: `444`,
    822: `445`,
    823: `445`,
    824: `446`,
    825: `446`,
    826: `446`,
    827: `448`,
    828: `448`,
    829: `449`,
    83: `21`,
    830: `449`,
    831: `450`,
    832: `451`,
    833: `452`,
    834: `452`,
    835: `453`,
    836: `454`,
    837: `455`,
    838: `455`,
    839: `456`,
    84: `21`,
    840: `457`,
    841: `458`,
    842: `458`,
    843: `459`,
    844: `460`,
    845: `461`,
    846: `461`,
    847: `462`,
    848: `463`,
    849: `463`,
    85: `21`,
    850: `464`,
    851: `465`,
    852: `465`,
    853: `466`,
    854: `467`,
    855: `467`,
    856: `468`,
    857: `469`,
    858: `470`,
    859: `471`,
    86: `21`,
    860: `471`,
    861: `472`,
    862: `472`,
    863: `472`,
    864: `474`,
    865: `475`,
    866: `475`,
    867: `476`,
    868: `477`,
    869: `479`,
    87: `21`,
    870: `480`,
    871: `480`,
    872: `480`,
    873: `481`,
    874: `481`,
    875: `482`,
    876: `483`,
    877: `483`,
    878: `484`,
    879: `485`,
    88: `21`,
    880: `485`,
    881: `486`,
    882: `487`,
    883: `487`,
    884: `488`,
    885: `489`,
    886: `489`,
    887: `490`,
    888: `491`,
    889: `491`,
    89: `21`,
    890: `492`,
    891: `493`,
    892: `493`,
    893: `494`,
    894: `495`,
    895: `495`,
    896: `496`,
    897: `497`,
    898: `497`,
    899: `498`,
    9: `2`,
    90: `21`,
    900: `499`,
    901: `499`,
    902: `499`,
    903: `500`,
    904: `500`,
    905: `501`,
    906: `502`,
    907: `502`,
    908: `502`,
    909: `503`,
    91: `21`,
    910: `503`,
    911: `504`,
    912: `504`,
    913: `504`,
    914: `505`,
    915: `505`,
    916: `506`,
    917: `506`,
    918: `507`,
    919: `508`,
    92: `21`,
    920: `508`,
    921: `509`,
    922: `509`,
    923: `509`,
    924: `509`,
    925: `509`,
    926: `509`,
    927: `510`,
    928: `510`,
    929: `511`,
    93: `21`,
    930: `512`,
    931: `513`,
    932: `515`,
    933: `515`,
    934: `516`,
    935: `516`,
    936: `516`,
    937: `517`,
    938: `517`,
    939: `518`,
    94: `21`,
    940: `518`,
    941: `518`,
    942: `519`,
    943: `519`,
    944: `520`,
    945: `520`,
    946: `521`,
    947: `521`,
    948: `522`,
    949: `523`,
    95: `21`,
    950: `524`,
    951: `525`,
    952: `525`,
    953: `526`,
    954: `527`,
    955: `528`,
    956: `528`,
    957: `529`,
    958: `529`,
    959: `530`,
    96: `21`,
    960: `530`,
    961: `531`,
    962: `531`,
    963: `532`,
    964: `532`,
    965: `535`,
    966: `535`,
    967: `536`,
    968: `536`,
    969: `537`,
    97: `21`,
    970: `538`,
    971: `539`,
    972: `540`,
    973: `540`,
    974: `541`,
    975: `542`,
    976: `542`,
    977: `543`,
    978: `543`,
    979: `544`,
    98: `21`,
    980: `544`,
    981: `545`,
    982: `546`,
    983: `547`,
    984: `547`,
    985: `548`,
    986: `549`,
    987: `550`,
    988: `551`,
    989: `551`,
    99: `21`,
    990: `552`,
    991: `552`,
    992: `553`,
    993: `554`,
    994: `555`,
    995: `555`,
    996: `556`,
    997: `557`,
    998: `560`,
    999: `560`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 2,
  stateSize: 146,
  unsupported: [],
  version: 13,
  warnings: [`API PrimaryBuy may use up to 5 accounts, but the limit is 4. API PrimaryBuy starts at /app/test.rsh:98:21:application.`, `Step 3 may use up to 5 accounts, but the limit is 4. Step 3 starts at /app/test.rsh:98:21:dot.`]
  };
export const _stateSourceMap = {
  1: {
    at: './test.rsh:78:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './test.rsh:182:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './test.rsh:98:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
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
