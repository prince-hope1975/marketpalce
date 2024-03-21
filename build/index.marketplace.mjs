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
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Struct([['name', ctc3], ['symbol', ctc4], ['decimals', ctc1], ['totalSupply', ctc1], ['price', ctc1], ['token', ctc2]]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1]);
  
  const _balance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2913, v2914, v2915, v2916, v2917, v2918, v2919, v2925] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2913, v2914, v2915, v2916, v2917, v2918, v2919, v2947, v2948, v2950, v2957, v2958] = svs;
      return (await ((async () => {
        
        const v2968 = [v2948];
        
        return v2968;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _halted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2913, v2914, v2915, v2916, v2917, v2918, v2919, v2925] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2913, v2914, v2915, v2916, v2917, v2918, v2919, v2947, v2948, v2950, v2957, v2958] = svs;
      return (await ((async () => {
        
        
        return v2947;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _meta = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2913, v2914, v2915, v2916, v2917, v2918, v2919, v2925] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2913, v2914, v2915, v2916, v2917, v2918, v2919, v2947, v2948, v2950, v2957, v2958] = svs;
      return (await ((async () => {
        
        const v2943 = {
          decimals: v2917,
          name: v2918,
          price: v2916,
          symbol: v2919,
          token: v2915,
          totalSupply: v2914
          };
        
        return v2943;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _owner = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2913, v2914, v2915, v2916, v2917, v2918, v2919, v2925] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2913, v2914, v2915, v2916, v2917, v2918, v2919, v2947, v2948, v2950, v2957, v2958] = svs;
      return (await ((async () => {
        
        
        return v2913;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _token = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2913, v2914, v2915, v2916, v2917, v2918, v2919, v2925] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2913, v2914, v2915, v2916, v2917, v2918, v2919, v2947, v2948, v2950, v2957, v2958] = svs;
      return (await ((async () => {
        
        
        return v2915;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _tracker = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2913, v2914, v2915, v2916, v2917, v2918, v2919, v2925] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2913, v2914, v2915, v2916, v2917, v2918, v2919, v2947, v2948, v2950, v2957, v2958] = svs;
      return (await ((async () => {
        
        const v2964 = v2957[stdlib.checkedBigNumberify('./index.rsh:254:35:application', stdlib.UInt_max, '0')];
        const v2965 = v2964[stdlib.checkedBigNumberify('./index.rsh:254:35:application', stdlib.UInt_max, '0')];
        const v2966 = [v2965, v2916];
        
        return v2966;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      balance: {
        decode: _balance,
        dom: [],
        rng: ctc8
        },
      halted: {
        decode: _halted,
        dom: [],
        rng: ctc5
        },
      meta: {
        decode: _meta,
        dom: [],
        rng: ctc9
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
        rng: ctc10
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
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Object({
    Parent: ctc0,
    decimals: ctc1,
    name: ctc2,
    price: ctc1,
    symbol: ctc3,
    token: ctc4,
    totalSupply: ctc1
    });
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    SecondaryBuy0_2266: ctc7,
    halt0_2266: ctc8,
    stopContract0_2266: ctc8
    });
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Address;
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc10]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v2887 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2888 = [v2887];
  const v2892 = stdlib.protect(ctc5, interact.meta, 'for Deployer\'s interact field meta');
  const v2893 = v2892.Parent;
  const v2894 = v2892.decimals;
  const v2895 = v2892.name;
  const v2896 = v2892.price;
  const v2897 = v2892.symbol;
  const v2898 = v2892.token;
  const v2899 = v2892.totalSupply;
  
  const v2909 = stdlib.gt(v2899, stdlib.checkedBigNumberify('./index.rsh:219:27:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2909, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:219:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Supply must be greater than 0',
    who: 'Deployer'
    });
  const v2911 = stdlib.lt(v2896, stdlib.UInt_max);
  stdlib.assert(v2911, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:220:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Price Too Large',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2899, v2898, v2896, v2894, v2895, v2897, v2893],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:217:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc4, ctc1, ctc1, ctc2, ctc3, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:217:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2914, v2915, v2916, v2917, v2918, v2919, v2920], secs: v2922, time: v2921, didSend: v2207, from: v2913 } = txn1;
      
      const v2923 = v2888[stdlib.checkedBigNumberify('./index.rsh:217:5:dot', stdlib.UInt_max, '0')];
      const v2924 = stdlib.Array_set(v2923, '0', stdlib.checkedBigNumberify('./index.rsh:217:5:dot', stdlib.UInt_max, '0'));
      const v2925 = stdlib.Array_set(v2888, stdlib.checkedBigNumberify('./index.rsh:217:5:dot', stdlib.UInt_max, '0'), v2924);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2915
        });
      ;
      const v2931 = await ctc.getContractInfo();
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc4, ctc1, ctc1, ctc2, ctc3, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v2914, v2915, v2916, v2917, v2918, v2919, v2920], secs: v2922, time: v2921, didSend: v2207, from: v2913 } = txn1;
  const v2923 = v2888[stdlib.checkedBigNumberify('./index.rsh:217:5:dot', stdlib.UInt_max, '0')];
  const v2924 = stdlib.Array_set(v2923, '0', stdlib.checkedBigNumberify('./index.rsh:217:5:dot', stdlib.UInt_max, '0'));
  const v2925 = stdlib.Array_set(v2888, stdlib.checkedBigNumberify('./index.rsh:217:5:dot', stdlib.UInt_max, '0'), v2924);
  const v2927 = stdlib.gt(v2914, stdlib.checkedBigNumberify('./index.rsh:219:27:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2927, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:219:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Supply must be greater than 0',
    who: 'Deployer'
    });
  const v2929 = stdlib.lt(v2916, stdlib.UInt_max);
  stdlib.assert(v2929, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:220:12:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Price Too Large',
    who: 'Deployer'
    });
  ;
  ;
  const v2931 = await ctc.getContractInfo();
  const txn2 = await (ctc.sendrecv({
    args: [v2913, v2914, v2915, v2916, v2917, v2918, v2919, v2925],
    evt_cnt: 0,
    funcNum: 1,
    lct: v2921,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:228:5:dot', stdlib.UInt_max, '0'), [[v2914, v2915]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v2934, time: v2933, didSend: v2215, from: v2932 } = txn2;
      
      ;
      const v2935 = v2925[stdlib.checkedBigNumberify('./index.rsh:228:5:dot', stdlib.UInt_max, '0')];
      const v2936 = v2935[stdlib.checkedBigNumberify('./index.rsh:228:5:dot', stdlib.UInt_max, '0')];
      const v2937 = stdlib.add(v2936, v2914);
      const v2939 = stdlib.Array_set(v2935, '0', v2937);
      const v2940 = stdlib.Array_set(v2925, stdlib.checkedBigNumberify('./index.rsh:228:5:dot', stdlib.UInt_max, '0'), v2939);
      sim_r.txns.push({
        amt: v2914,
        kind: 'to',
        tok: v2915
        });
      
      const v2944 = v2940[stdlib.checkedBigNumberify('./index.rsh:242:30:application', stdlib.UInt_max, '0')];
      const v2945 = v2944[stdlib.checkedBigNumberify('./index.rsh:242:30:application', stdlib.UInt_max, '0')];
      const v2946 = true;
      const v2947 = false;
      const v2948 = v2945;
      const v2950 = stdlib.checkedBigNumberify('./index.rsh:242:42:decimal', stdlib.UInt_max, '0');
      const v2951 = v2933;
      const v2957 = v2940;
      const v2958 = stdlib.checkedBigNumberify('./index.rsh:212:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v2946;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v3331 = v2957[stdlib.checkedBigNumberify('./index.rsh:322:21:application', stdlib.UInt_max, '0')];
        const v3332 = v3331[stdlib.checkedBigNumberify('./index.rsh:322:21:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v2913,
          tok: v2915
          });
        sim_r.txns.push({
          kind: 'from',
          to: v2913,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v2915
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
    tys: [ctc11, ctc1, ctc4, ctc1, ctc1, ctc2, ctc3, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2934, time: v2933, didSend: v2215, from: v2932 } = txn2;
  ;
  const v2935 = v2925[stdlib.checkedBigNumberify('./index.rsh:228:5:dot', stdlib.UInt_max, '0')];
  const v2936 = v2935[stdlib.checkedBigNumberify('./index.rsh:228:5:dot', stdlib.UInt_max, '0')];
  const v2937 = stdlib.add(v2936, v2914);
  const v2939 = stdlib.Array_set(v2935, '0', v2937);
  const v2940 = stdlib.Array_set(v2925, stdlib.checkedBigNumberify('./index.rsh:228:5:dot', stdlib.UInt_max, '0'), v2939);
  ;
  const v2941 = stdlib.addressEq(v2913, v2932);
  stdlib.assert(v2941, {
    at: './index.rsh:228:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  stdlib.protect(ctc6, await interact.launched(v2931), {
    at: './index.rsh:229:22:application',
    fs: ['at ./index.rsh:229:22:application call to [unknown function] (defined at: ./index.rsh:229:22:function exp)', 'at ./index.rsh:229:22:application call to "liftedInteract" (defined at: ./index.rsh:229:22:application)'],
    msg: 'launched',
    who: 'Deployer'
    });
  
  const v2944 = v2940[stdlib.checkedBigNumberify('./index.rsh:242:30:application', stdlib.UInt_max, '0')];
  const v2945 = v2944[stdlib.checkedBigNumberify('./index.rsh:242:30:application', stdlib.UInt_max, '0')];
  let v2946 = true;
  let v2947 = false;
  let v2948 = v2945;
  let v2950 = stdlib.checkedBigNumberify('./index.rsh:242:42:decimal', stdlib.UInt_max, '0');
  let v2951 = v2933;
  let v2957 = v2940;
  let v2958 = stdlib.checkedBigNumberify('./index.rsh:212:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    
    return v2946;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc9],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v3043], secs: v3045, time: v3044, didSend: v2725, from: v3042 } = txn4;
    switch (v3043[0]) {
      case 'SecondaryBuy0_2266': {
        const v3046 = v3043[1];
        undefined /* setApiDetails */;
        const v3051 = v3046[stdlib.checkedBigNumberify('./index.rsh:259:9:spread', stdlib.UInt_max, '0')];
        const v3052 = stdlib.safeMul(v2916, v3051);
        const v3083 = stdlib.add(v2958, v3052);
        ;
        const v3084 = v2957[stdlib.checkedBigNumberify('./index.rsh:242:21:dot', stdlib.UInt_max, '0')];
        const v3085 = v3084[stdlib.checkedBigNumberify('./index.rsh:242:21:dot', stdlib.UInt_max, '0')];
        ;
        const v3094 = stdlib.le(v3051, v3085);
        stdlib.assert(v3094, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:270:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:269:27:application call to [unknown function] (defined at: ./index.rsh:269:27:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v3096 = null;
        await txn4.getOutput('SecondaryBuy', 'v3096', ctc6, v3096);
        const v3107 = stdlib.sub(v3083, v3052);
        ;
        const v3113 = stdlib.sub(v3085, v3051);
        const v3115 = stdlib.Array_set(v3084, '0', v3113);
        const v3116 = stdlib.Array_set(v2957, stdlib.checkedBigNumberify('./index.rsh:273:43:application', stdlib.UInt_max, '0'), v3115);
        ;
        const v3117 = stdlib.safeSub(v2948, v3051);
        const v3118 = stdlib.safeAdd(v2950, v3051);
        const cv2946 = true;
        const cv2947 = v2947;
        const cv2948 = v3117;
        const cv2950 = v3118;
        const cv2951 = v3044;
        const cv2957 = v3116;
        const cv2958 = v3107;
        
        v2946 = cv2946;
        v2947 = cv2947;
        v2948 = cv2948;
        v2950 = cv2950;
        v2951 = cv2951;
        v2957 = cv2957;
        v2958 = cv2958;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'halt0_2266': {
        const v3139 = v3043[1];
        undefined /* setApiDetails */;
        const v3153 = stdlib.addressEq(v3042, v2913);
        stdlib.assert(v3153, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:284:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:283:22:application call to [unknown function] (defined at: ./index.rsh:283:22:function exp)', 'at ./index.rsh:242:21:application call to [unknown function] (defined at: ./index.rsh:283:22:function exp)', 'at ./index.rsh:242:21:application call to [unknown function] (defined at: ./index.rsh:242:21:function exp)', 'at ./index.rsh:258:14:application call to [unknown function] (defined at: ./index.rsh:258:14:function exp)'],
          msg: 'You are not Owner',
          who: 'Deployer'
          });
        ;
        ;
        const v3216 = null;
        await txn4.getOutput('halt', 'v3216', ctc6, v3216);
        const v3222 = v2947 ? false : true;
        const cv2946 = true;
        const cv2947 = v3222;
        const cv2948 = v2948;
        const cv2950 = v2950;
        const cv2951 = v3044;
        const cv2957 = v2957;
        const cv2958 = v2958;
        
        v2946 = cv2946;
        v2947 = cv2947;
        v2948 = cv2948;
        v2950 = cv2950;
        v2951 = cv2951;
        v2957 = cv2957;
        v2958 = cv2958;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'stopContract0_2266': {
        const v3232 = v3043[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v3318 = true;
        await txn4.getOutput('stopContract', 'v3318', ctc10, v3318);
        const cv2946 = false;
        const cv2947 = v2947;
        const cv2948 = v2948;
        const cv2950 = v2950;
        const cv2951 = v3044;
        const cv2957 = v2957;
        const cv2958 = v2958;
        
        v2946 = cv2946;
        v2947 = cv2947;
        v2948 = cv2948;
        v2950 = cv2950;
        v2951 = cv2951;
        v2957 = cv2957;
        v2958 = cv2958;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v3331 = v2957[stdlib.checkedBigNumberify('./index.rsh:322:21:application', stdlib.UInt_max, '0')];
  const v3332 = v3331[stdlib.checkedBigNumberify('./index.rsh:322:21:application', stdlib.UInt_max, '0')];
  ;
  ;
  return;
  
  
  
  
  };
export async function _SecondaryBuy4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _SecondaryBuy4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _SecondaryBuy4 expects to receive an interact object as its second argument.`));}
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
    SecondaryBuy0_2266: ctc8,
    halt0_2266: ctc9,
    stopContract0_2266: ctc9
    });
  const ctc11 = stdlib.T_Null;
  
  
  const [v2913, v2914, v2915, v2916, v2917, v2918, v2919, v2947, v2948, v2950, v2957, v2958] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2, ctc1, ctc1, ctc3, ctc4, ctc5, ctc1, ctc1, ctc7, ctc1]);
  const v2972 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:261:24:application call to [unknown function] (defined at: ./index.rsh:261:24:function exp)', 'at ./index.rsh:242:21:application call to "runSecondaryBuy0_2266" (defined at: ./index.rsh:259:9:function exp)', 'at ./index.rsh:242:21:application call to [unknown function] (defined at: ./index.rsh:242:21:function exp)'],
    msg: 'in',
    who: 'SecondaryBuy'
    });
  const v2973 = v2972[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2976 = v2957[stdlib.checkedBigNumberify('./index.rsh:263:36:application', stdlib.UInt_max, '0')];
  const v2977 = v2976[stdlib.checkedBigNumberify('./index.rsh:263:36:application', stdlib.UInt_max, '0')];
  const v2978 = stdlib.le(v2973, v2977);
  stdlib.assert(v2978, {
    at: './index.rsh:262:15:application',
    fs: ['at ./index.rsh:261:24:application call to [unknown function] (defined at: ./index.rsh:261:24:function exp)', 'at ./index.rsh:261:24:application call to [unknown function] (defined at: ./index.rsh:261:24:function exp)', 'at ./index.rsh:242:21:application call to "runSecondaryBuy0_2266" (defined at: ./index.rsh:259:9:function exp)', 'at ./index.rsh:242:21:application call to [unknown function] (defined at: ./index.rsh:242:21:function exp)'],
    msg: 'You are trying to buy more than what is available',
    who: 'SecondaryBuy'
    });
  const v2979 = v2947 ? false : true;
  stdlib.assert(v2979, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:266:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:261:24:application call to [unknown function] (defined at: ./index.rsh:261:24:function exp)', 'at ./index.rsh:261:24:application call to [unknown function] (defined at: ./index.rsh:261:24:function exp)', 'at ./index.rsh:242:21:application call to "runSecondaryBuy0_2266" (defined at: ./index.rsh:259:9:function exp)', 'at ./index.rsh:242:21:application call to [unknown function] (defined at: ./index.rsh:242:21:function exp)'],
    msg: 'Code has been halted',
    who: 'SecondaryBuy'
    });
  const v2984 = ['SecondaryBuy0_2266', v2972];
  
  const v3010 = stdlib.safeMul(v2916, v2973);
  
  const txn1 = await (ctc.sendrecv({
    args: [v2913, v2914, v2915, v2916, v2917, v2918, v2919, v2947, v2948, v2950, v2957, v2958, v2984],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [v3010, [[stdlib.checkedBigNumberify('./index.rsh:268:53:decimal', stdlib.UInt_max, '0'), v2915]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3043], secs: v3045, time: v3044, didSend: v2725, from: v3042 } = txn1;
      
      switch (v3043[0]) {
        case 'SecondaryBuy0_2266': {
          const v3046 = v3043[1];
          sim_r.txns.push({
            kind: 'api',
            who: "SecondaryBuy"
            });
          const v3051 = v3046[stdlib.checkedBigNumberify('./index.rsh:259:9:spread', stdlib.UInt_max, '0')];
          const v3052 = stdlib.safeMul(v2916, v3051);
          const v3083 = stdlib.add(v2958, v3052);
          sim_r.txns.push({
            amt: v3052,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v3084 = v2957[stdlib.checkedBigNumberify('./index.rsh:242:21:dot', stdlib.UInt_max, '0')];
          const v3085 = v3084[stdlib.checkedBigNumberify('./index.rsh:242:21:dot', stdlib.UInt_max, '0')];
          ;
          const v3096 = null;
          const v3097 = await txn1.getOutput('SecondaryBuy', 'v3096', ctc11, v3096);
          
          const v3107 = stdlib.sub(v3083, v3052);
          sim_r.txns.push({
            kind: 'from',
            to: v2913,
            tok: undefined /* Nothing */
            });
          const v3113 = stdlib.sub(v3085, v3051);
          const v3115 = stdlib.Array_set(v3084, '0', v3113);
          const v3116 = stdlib.Array_set(v2957, stdlib.checkedBigNumberify('./index.rsh:273:43:application', stdlib.UInt_max, '0'), v3115);
          sim_r.txns.push({
            kind: 'from',
            to: v3042,
            tok: v2915
            });
          const v3117 = stdlib.safeSub(v2948, v3051);
          const v3118 = stdlib.safeAdd(v2950, v3051);
          const v4061 = v2947;
          const v4062 = v3117;
          const v4063 = v3118;
          const v4065 = v3116;
          const v4066 = v3107;
          sim_r.isHalt = false;
          
          break;
          }
        case 'halt0_2266': {
          const v3139 = v3043[1];
          
          break;
          }
        case 'stopContract0_2266': {
          const v3232 = v3043[1];
          
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
  const {data: [v3043], secs: v3045, time: v3044, didSend: v2725, from: v3042 } = txn1;
  switch (v3043[0]) {
    case 'SecondaryBuy0_2266': {
      const v3046 = v3043[1];
      undefined /* setApiDetails */;
      const v3051 = v3046[stdlib.checkedBigNumberify('./index.rsh:259:9:spread', stdlib.UInt_max, '0')];
      const v3052 = stdlib.safeMul(v2916, v3051);
      const v3083 = stdlib.add(v2958, v3052);
      ;
      const v3084 = v2957[stdlib.checkedBigNumberify('./index.rsh:242:21:dot', stdlib.UInt_max, '0')];
      const v3085 = v3084[stdlib.checkedBigNumberify('./index.rsh:242:21:dot', stdlib.UInt_max, '0')];
      ;
      const v3094 = stdlib.le(v3051, v3085);
      stdlib.assert(v3094, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:270:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:269:27:application call to [unknown function] (defined at: ./index.rsh:269:27:function exp)'],
        msg: null,
        who: 'SecondaryBuy'
        });
      const v3096 = null;
      const v3097 = await txn1.getOutput('SecondaryBuy', 'v3096', ctc11, v3096);
      if (v2725) {
        stdlib.protect(ctc11, await interact.out(v3046, v3097), {
          at: './index.rsh:260:7:application',
          fs: ['at ./index.rsh:260:7:application call to [unknown function] (defined at: ./index.rsh:260:7:function exp)', 'at ./index.rsh:271:10:application call to "k" (defined at: ./index.rsh:269:27:function exp)', 'at ./index.rsh:269:27:application call to [unknown function] (defined at: ./index.rsh:269:27:function exp)'],
          msg: 'out',
          who: 'SecondaryBuy'
          });
        }
      else {
        }
      
      const v3107 = stdlib.sub(v3083, v3052);
      ;
      const v3113 = stdlib.sub(v3085, v3051);
      const v3115 = stdlib.Array_set(v3084, '0', v3113);
      const v3116 = stdlib.Array_set(v2957, stdlib.checkedBigNumberify('./index.rsh:273:43:application', stdlib.UInt_max, '0'), v3115);
      ;
      const v3117 = stdlib.safeSub(v2948, v3051);
      const v3118 = stdlib.safeAdd(v2950, v3051);
      const v4061 = v2947;
      const v4062 = v3117;
      const v4063 = v3118;
      const v4065 = v3116;
      const v4066 = v3107;
      return;
      
      break;
      }
    case 'halt0_2266': {
      const v3139 = v3043[1];
      return;
      break;
      }
    case 'stopContract0_2266': {
      const v3232 = v3043[1];
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
    SecondaryBuy0_2266: ctc9,
    halt0_2266: ctc8,
    stopContract0_2266: ctc8
    });
  const ctc11 = stdlib.T_Null;
  
  
  const [v2913, v2914, v2915, v2916, v2917, v2918, v2919, v2947, v2948, v2950, v2957, v2958] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2, ctc1, ctc1, ctc3, ctc4, ctc5, ctc1, ctc1, ctc7, ctc1]);
  const v2998 = ctc.selfAddress();
  const v3000 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:283:22:application call to [unknown function] (defined at: ./index.rsh:283:22:function exp)', 'at ./index.rsh:242:21:application call to "runhalt0_2266" (defined at: ./index.rsh:283:10:function exp)', 'at ./index.rsh:242:21:application call to [unknown function] (defined at: ./index.rsh:242:21:function exp)'],
    msg: 'in',
    who: 'halt'
    });
  const v3001 = stdlib.addressEq(v2998, v2913);
  stdlib.assert(v3001, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:284:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:283:22:application call to [unknown function] (defined at: ./index.rsh:283:22:function exp)', 'at ./index.rsh:242:21:application call to "runhalt0_2266" (defined at: ./index.rsh:283:10:function exp)', 'at ./index.rsh:242:21:application call to [unknown function] (defined at: ./index.rsh:242:21:function exp)'],
    msg: 'You are not Owner',
    who: 'halt'
    });
  const v3006 = ['halt0_2266', v3000];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2913, v2914, v2915, v2916, v2917, v2918, v2919, v2947, v2948, v2950, v2957, v2958, v3006],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:287:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:287:14:decimal', stdlib.UInt_max, '0'), v2915]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3043], secs: v3045, time: v3044, didSend: v2725, from: v3042 } = txn1;
      
      switch (v3043[0]) {
        case 'SecondaryBuy0_2266': {
          const v3046 = v3043[1];
          
          break;
          }
        case 'halt0_2266': {
          const v3139 = v3043[1];
          sim_r.txns.push({
            kind: 'api',
            who: "halt"
            });
          ;
          ;
          const v3216 = null;
          const v3217 = await txn1.getOutput('halt', 'v3216', ctc11, v3216);
          
          const v3222 = v2947 ? false : true;
          const v4097 = v3222;
          const v4098 = v2948;
          const v4099 = v2950;
          const v4101 = v2957;
          const v4102 = v2958;
          sim_r.isHalt = false;
          
          break;
          }
        case 'stopContract0_2266': {
          const v3232 = v3043[1];
          
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
  const {data: [v3043], secs: v3045, time: v3044, didSend: v2725, from: v3042 } = txn1;
  switch (v3043[0]) {
    case 'SecondaryBuy0_2266': {
      const v3046 = v3043[1];
      return;
      break;
      }
    case 'halt0_2266': {
      const v3139 = v3043[1];
      undefined /* setApiDetails */;
      const v3153 = stdlib.addressEq(v3042, v2913);
      stdlib.assert(v3153, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:284:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:283:22:application call to [unknown function] (defined at: ./index.rsh:283:22:function exp)', 'at ./index.rsh:242:21:application call to [unknown function] (defined at: ./index.rsh:283:22:function exp)', 'at ./index.rsh:242:21:application call to [unknown function] (defined at: ./index.rsh:242:21:function exp)', 'at ./index.rsh:258:14:application call to [unknown function] (defined at: ./index.rsh:258:14:function exp)'],
        msg: 'You are not Owner',
        who: 'halt'
        });
      ;
      ;
      const v3216 = null;
      const v3217 = await txn1.getOutput('halt', 'v3216', ctc11, v3216);
      if (v2725) {
        stdlib.protect(ctc11, await interact.out(v3139, v3217), {
          at: './index.rsh:283:11:application',
          fs: ['at ./index.rsh:283:11:application call to [unknown function] (defined at: ./index.rsh:283:11:function exp)', 'at ./index.rsh:289:12:application call to "k" (defined at: ./index.rsh:288:13:function exp)', 'at ./index.rsh:288:13:application call to [unknown function] (defined at: ./index.rsh:288:13:function exp)'],
          msg: 'out',
          who: 'halt'
          });
        }
      else {
        }
      
      const v3222 = v2947 ? false : true;
      const v4097 = v3222;
      const v4098 = v2948;
      const v4099 = v2950;
      const v4101 = v2957;
      const v4102 = v2958;
      return;
      
      break;
      }
    case 'stopContract0_2266': {
      const v3232 = v3043[1];
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
    SecondaryBuy0_2266: ctc9,
    halt0_2266: ctc8,
    stopContract0_2266: ctc8
    });
  const ctc11 = stdlib.T_Null;
  
  
  const [v2913, v2914, v2915, v2916, v2917, v2918, v2919, v2947, v2948, v2950, v2957, v2958] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2, ctc1, ctc1, ctc3, ctc4, ctc5, ctc1, ctc1, ctc7, ctc1]);
  const v2986 = ctc.selfAddress();
  const v2988 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:302:10:application call to [unknown function] (defined at: ./index.rsh:302:10:function exp)', 'at ./index.rsh:242:21:application call to "runstopContract0_2266" (defined at: ./index.rsh:300:9:function exp)', 'at ./index.rsh:242:21:application call to [unknown function] (defined at: ./index.rsh:242:21:function exp)'],
    msg: 'in',
    who: 'stopContract'
    });
  const v2990 = v2947 ? false : true;
  stdlib.assert(v2990, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:303:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:302:10:application call to [unknown function] (defined at: ./index.rsh:302:10:function exp)', 'at ./index.rsh:302:10:application call to [unknown function] (defined at: ./index.rsh:302:10:function exp)', 'at ./index.rsh:242:21:application call to "runstopContract0_2266" (defined at: ./index.rsh:300:9:function exp)', 'at ./index.rsh:242:21:application call to [unknown function] (defined at: ./index.rsh:242:21:function exp)'],
    msg: 'Code has been halted',
    who: 'stopContract'
    });
  const v2992 = stdlib.addressEq(v2986, v2913);
  stdlib.assert(v2992, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:304:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:302:10:application call to [unknown function] (defined at: ./index.rsh:302:10:function exp)', 'at ./index.rsh:302:10:application call to [unknown function] (defined at: ./index.rsh:302:10:function exp)', 'at ./index.rsh:242:21:application call to "runstopContract0_2266" (defined at: ./index.rsh:300:9:function exp)', 'at ./index.rsh:242:21:application call to [unknown function] (defined at: ./index.rsh:242:21:function exp)'],
    msg: 'You don\'t have sufficient permission to end the contract',
    who: 'stopContract'
    });
  const v2996 = ['stopContract0_2266', v2988];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2913, v2914, v2915, v2916, v2917, v2918, v2919, v2947, v2948, v2950, v2957, v2958, v2996],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:309:14:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:309:18:decimal', stdlib.UInt_max, '0'), v2915]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3043], secs: v3045, time: v3044, didSend: v2725, from: v3042 } = txn1;
      
      switch (v3043[0]) {
        case 'SecondaryBuy0_2266': {
          const v3046 = v3043[1];
          
          break;
          }
        case 'halt0_2266': {
          const v3139 = v3043[1];
          
          break;
          }
        case 'stopContract0_2266': {
          const v3232 = v3043[1];
          sim_r.txns.push({
            kind: 'api',
            who: "stopContract"
            });
          ;
          ;
          const v3318 = true;
          const v3319 = await txn1.getOutput('stopContract', 'v3318', ctc5, v3318);
          
          const v4139 = v2957[stdlib.checkedBigNumberify('./index.rsh:322:21:application', stdlib.UInt_max, '0')];
          const v4140 = v4139[stdlib.checkedBigNumberify('./index.rsh:322:21:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v2913,
            tok: v2915
            });
          sim_r.txns.push({
            kind: 'from',
            to: v2913,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v2915
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
  const {data: [v3043], secs: v3045, time: v3044, didSend: v2725, from: v3042 } = txn1;
  switch (v3043[0]) {
    case 'SecondaryBuy0_2266': {
      const v3046 = v3043[1];
      return;
      break;
      }
    case 'halt0_2266': {
      const v3139 = v3043[1];
      return;
      break;
      }
    case 'stopContract0_2266': {
      const v3232 = v3043[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v3318 = true;
      const v3319 = await txn1.getOutput('stopContract', 'v3318', ctc5, v3318);
      if (v2725) {
        stdlib.protect(ctc11, await interact.out(v3232, v3319), {
          at: './index.rsh:301:7:application',
          fs: ['at ./index.rsh:301:7:application call to [unknown function] (defined at: ./index.rsh:301:7:function exp)', 'at ./index.rsh:311:10:application call to "k" (defined at: ./index.rsh:310:11:function exp)', 'at ./index.rsh:310:11:application call to [unknown function] (defined at: ./index.rsh:310:11:function exp)'],
          msg: 'out',
          who: 'stopContract'
          });
        }
      else {
        }
      
      const v4139 = v2957[stdlib.checkedBigNumberify('./index.rsh:322:21:application', stdlib.UInt_max, '0')];
      const v4140 = v4139[stdlib.checkedBigNumberify('./index.rsh:322:21:application', stdlib.UInt_max, '0')];
      ;
      ;
      return;
      
      break;
      }
    }
  
  
  };
export async function SecondaryBuy(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for SecondaryBuy expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for SecondaryBuy expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _SecondaryBuy4(ctcTop, interact);}
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
    impure: [`SecondaryBuy(uint64)void`, `_reachp_0((uint64,uint64,uint64,uint64,uint64,byte[32],byte[8],uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[8])))void`, `halt()void`, `stopContract()byte`],
    pure: [`balance()(uint64)`, `halted()byte`, `meta()(byte[32],byte[8],uint64,uint64,uint64,uint64)`, `owner()address`, `token()uint64`, `tracker()(uint64,uint64)`],
    sigs: [`SecondaryBuy(uint64)void`, `_reachp_0((uint64,uint64,uint64,uint64,uint64,byte[32],byte[8],uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64,(byte,byte[8])))void`, `balance()(uint64)`, `halt()void`, `halted()byte`, `meta()(byte[32],byte[8],uint64,uint64,uint64,uint64)`, `owner()address`, `stopContract()byte`, `token()uint64`, `tracker()(uint64,uint64)`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAJAAEECCCgjQYoMDgmAwABAAEBMRhBBB8oZEkiWzUBJVs1AilkKmRQggwEAsmHpwQW5OjtBDPl7iEEN0fKpQQ7yi45BDzLKqUERPhLIgRLZ9ENBLG7sKgE0hIcwATUkNWfBN/ZIyg2GgCODAQ7A9UEQQOpBEcD2APbBEQEPgABA44DngA2GgEXNQslryk0CxZQUDULJDQBEkSIBEo0CyJbNQw0C1cICTUNgARU52KsNAwWUDQNULA0DIgEgDQNIlWNAwPwA/MDmUL/uDQNI1s1CzQYNAsLSTUdiAR8NA9XABFJNRwiWzUNNAs0DQ5EKDUMgAgAAAAAAAAMGDQMULA0DDUENB00G4gEJjQLNBkxAIgEJSM0EjQLCTQRNAsIMgY0DzQcNA00CwkWXABcADQONB0INB0JNQ41DzUQNRE1EjUUNBRBAx00GzQaFlA0GRZQNBgWUDQXFlA0FlA0FVA0ExZRBwhQNBIWUDQRFlA0D1A0DhZQJDIGNQI1ASlLAVcAf2cqTFd/E2coNAEWNAIWUGcxGSISRIgDsjQDQAAKgAQVH3x1NARQsCNDMQA0GxJEKDULgAgAAAAAAAAMkDQLULA0CzUEIzQTFDIGNRA1EzUUQv9tIzULgAgAAAAAAAAM9jQLFlEHCFCwNAsWUQcINQQiMgY1EDUUQv9GNAEkEkSIAuI0EhY1BDEZIhJEQv+OgBEAAAAAAAAAAAEAAAAAAAAAADULQv5rNAEkEkSIArU0ExZRBwg1BEL/zTQBJBJEiAKiNBY0FVA0FxZQNBoWUDQYFlA0GRZQNQRC/6s0ASQSRIgCgDQbNQRC/5yAEQAAAAAAAAAAAgAAAAAAAAAANQtC/g80ASQSRIgCWTQZFjUEQv90NAEkEkSIAkk0D1cAEVcACDQYFlA1BEL/WzEANRs0CyJbNQw0CyVbNRo0C4EQWzUZNAuBGFs1GDQLIQRbNRc0C1coIDUWNAtXSAg1FYAE3Eq3oDQMFlA0GhZQNBkWUDQYFlA0FxZQNBZQNBVQNAtXUAhQsDQMiAIvgRGvSTULSVcAESWvXABcADUNNBoiDUQ0GIH///////////8BDEQhBYgCDiI0GTIKiAH4NBs0GhZQNBkWUDQYFlA0FxZQNBZQNBVQNA1QgRmvUCMyBkL+EyM0ARJESVcAIDUbSSEEWzUaSSEGWzUZSSEHWzUYSSEIWzUXSVdAIDUWSVdgCDUVV2gRNQ00Cxc1DIAE1RUZFDQMFlCwNAyIAY40DVcAETUMNA00DEkiWzQaCBZcAFwANQs0GjQZMRY0ACMISTUACUcDOBQyChJEOBAkEkQ4EU8CEkQ4EhJENBsxABJEIyI0C1cAESJbIjIGNAsiNQ41DzUQNRE1EjUTNRRC/TGIASAhBYgBLTYaATULQv6NiAEQNhoBNQtC/zmIAQU2GgE1C0L8XSIxNBJEgQMxNRJEIjE2EkQiMTcSRIgA5YGSAa8iIkL9IEL9oUL9s0L9yEL9cTQPVwARIls0GTQbiADGNA40G4gAtyI0GTIKMgmIAPExGYEFEkSIAMAyCmAyCngJSTUGMgqIAJVC/PwisgEjshCyB7IIs4kisgEkshCyFLIRshKziUL8EEL87UL9e0L9mkL9pkL9u0L9yEiJTAlJNQYyCYgAV4kJSUH/7kk1BogAc4lJVwAgNRtJIQRbNRpJIQZbNRlJIQdbNRhJIQhbNRdJV0AgNRZJV2AINRVJV2gBFzUTSYFpWzUSSYFxWzURSVd5ETUPgYoBWzUOibFC/2ojNQOJsUL/bkkiEkw0AhIRRIk0Bgg1Bok0BjQHSg9B/3pC/4IxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJsbIVQv8w`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `557`,
    1001: `558`,
    1002: `558`,
    1003: `559`,
    1004: `560`,
    1005: `563`,
    1006: `563`,
    1007: `564`,
    1008: `564`,
    1009: `565`,
    101: `21`,
    1010: `566`,
    1011: `569`,
    1012: `570`,
    1013: `571`,
    1014: `571`,
    1015: `572`,
    1016: `572`,
    1017: `572`,
    1018: `573`,
    1019: `574`,
    102: `21`,
    1020: `575`,
    1021: `576`,
    1022: `576`,
    1023: `577`,
    1024: `577`,
    1025: `578`,
    1026: `579`,
    1027: `579`,
    1028: `580`,
    1029: `580`,
    103: `21`,
    1030: `581`,
    1031: `581`,
    1032: `582`,
    1033: `582`,
    1034: `583`,
    1035: `583`,
    1036: `584`,
    1037: `584`,
    1038: `585`,
    1039: `585`,
    104: `22`,
    1040: `586`,
    1041: `586`,
    1042: `586`,
    1043: `588`,
    1044: `588`,
    1045: `588`,
    1046: `589`,
    1047: `589`,
    1048: `590`,
    1049: `590`,
    105: `22`,
    1050: `590`,
    1051: `591`,
    1052: `591`,
    1053: `591`,
    1054: `592`,
    1055: `592`,
    1056: `593`,
    1057: `593`,
    1058: `593`,
    1059: `595`,
    106: `22`,
    1060: `595`,
    1061: `595`,
    1062: `596`,
    1063: `596`,
    1064: `596`,
    1065: `597`,
    1066: `597`,
    1067: `598`,
    1068: `598`,
    1069: `598`,
    107: `23`,
    1070: `600`,
    1071: `600`,
    1072: `600`,
    1073: `601`,
    1074: `601`,
    1075: `601`,
    1076: `602`,
    1077: `602`,
    1078: `603`,
    1079: `603`,
    108: `23`,
    1080: `603`,
    1081: `605`,
    1082: `606`,
    1083: `606`,
    1084: `607`,
    1085: `608`,
    1086: `609`,
    1087: `609`,
    1088: `610`,
    1089: `610`,
    109: `23`,
    1090: `611`,
    1091: `612`,
    1092: `613`,
    1093: `614`,
    1094: `614`,
    1095: `615`,
    1096: `616`,
    1097: `617`,
    1098: `618`,
    1099: `618`,
    11: `2`,
    110: `23`,
    1100: `619`,
    1101: `620`,
    1102: `621`,
    1103: `621`,
    1104: `621`,
    1105: `622`,
    1106: `622`,
    1107: `622`,
    1108: `623`,
    1109: `624`,
    111: `23`,
    1110: `625`,
    1111: `626`,
    1112: `626`,
    1113: `626`,
    1114: `628`,
    1115: `628`,
    1116: `628`,
    1117: `630`,
    1118: `630`,
    1119: `630`,
    112: `23`,
    1120: `632`,
    1121: `632`,
    1122: `632`,
    1123: `634`,
    1124: `634`,
    1125: `634`,
    1126: `636`,
    1127: `636`,
    1128: `637`,
    1129: `637`,
    113: `23`,
    1130: `637`,
    1131: `638`,
    1132: `639`,
    1133: `641`,
    1134: `641`,
    1135: `643`,
    1136: `643`,
    1137: `644`,
    1138: `644`,
    1139: `644`,
    114: `23`,
    1140: `645`,
    1141: `645`,
    1142: `646`,
    1143: `646`,
    1144: `647`,
    1145: `647`,
    1146: `647`,
    1147: `649`,
    1148: `650`,
    1149: `650`,
    115: `23`,
    1150: `651`,
    1151: `651`,
    1152: `652`,
    1153: `652`,
    1154: `653`,
    1155: `653`,
    1156: `653`,
    1157: `655`,
    1158: `655`,
    1159: `656`,
    116: `23`,
    1160: `656`,
    1161: `657`,
    1162: `658`,
    1163: `660`,
    1164: `660`,
    1165: `660`,
    1166: `662`,
    1167: `662`,
    1168: `663`,
    1169: `664`,
    117: `23`,
    1170: `664`,
    1171: `665`,
    1172: `666`,
    1173: `668`,
    1174: `669`,
    1175: `669`,
    1176: `670`,
    1177: `670`,
    1178: `671`,
    1179: `671`,
    118: `23`,
    1180: `671`,
    1181: `672`,
    1182: `672`,
    1183: `672`,
    1184: `674`,
    1185: `675`,
    1186: `675`,
    1187: `676`,
    1188: `677`,
    1189: `677`,
    119: `23`,
    1190: `678`,
    1191: `678`,
    1192: `679`,
    1193: `679`,
    1194: `680`,
    1195: `681`,
    1196: `683`,
    1197: `684`,
    1198: `684`,
    1199: `685`,
    12: `2`,
    120: `23`,
    1200: `686`,
    1201: `686`,
    1202: `687`,
    1203: `687`,
    1204: `688`,
    1205: `688`,
    1206: `689`,
    1207: `689`,
    1208: `690`,
    1209: `691`,
    121: `23`,
    1210: `693`,
    1211: `693`,
    1212: `693`,
    1213: `695`,
    1214: `695`,
    1215: `695`,
    1216: `697`,
    1217: `697`,
    1218: `697`,
    1219: `699`,
    122: `23`,
    1220: `699`,
    1221: `699`,
    1222: `701`,
    1223: `701`,
    1224: `701`,
    1225: `703`,
    1226: `703`,
    1227: `703`,
    1228: `705`,
    1229: `705`,
    123: `23`,
    1230: `705`,
    1231: `707`,
    1232: `708`,
    1233: `710`,
    1234: `711`,
    1235: `712`,
    1236: `713`,
    1237: `713`,
    1238: `714`,
    1239: `714`,
    124: `23`,
    1240: `715`,
    1241: `715`,
    1242: `715`,
    1243: `716`,
    1244: `718`,
    1245: `719`,
    1246: `720`,
    1247: `720`,
    1248: `720`,
    1249: `721`,
    125: `23`,
    1250: `722`,
    1251: `722`,
    1252: `723`,
    1253: `723`,
    1254: `723`,
    1255: `724`,
    1256: `726`,
    1257: `727`,
    1258: `727`,
    1259: `727`,
    126: `23`,
    1260: `728`,
    1261: `728`,
    1262: `729`,
    1263: `730`,
    1264: `730`,
    1265: `731`,
    1266: `732`,
    1267: `732`,
    1268: `733`,
    1269: `734`,
    127: `23`,
    1270: `734`,
    1271: `735`,
    1272: `736`,
    1273: `736`,
    1274: `737`,
    1275: `738`,
    1276: `738`,
    1277: `739`,
    1278: `740`,
    1279: `740`,
    128: `23`,
    1280: `741`,
    1281: `742`,
    1282: `742`,
    1283: `743`,
    1284: `744`,
    1285: `744`,
    1286: `745`,
    1287: `746`,
    1288: `746`,
    1289: `746`,
    129: `23`,
    1290: `747`,
    1291: `747`,
    1292: `748`,
    1293: `749`,
    1294: `749`,
    1295: `749`,
    1296: `750`,
    1297: `750`,
    1298: `751`,
    1299: `752`,
    13: `2`,
    130: `23`,
    1300: `752`,
    1301: `752`,
    1302: `753`,
    1303: `754`,
    1304: `754`,
    1305: `755`,
    1306: `756`,
    1307: `756`,
    1308: `757`,
    1309: `758`,
    131: `23`,
    1310: `758`,
    1311: `759`,
    1312: `760`,
    1313: `760`,
    1314: `761`,
    1315: `762`,
    1316: `762`,
    1317: `763`,
    1318: `764`,
    1319: `764`,
    132: `23`,
    1320: `764`,
    1321: `765`,
    1322: `765`,
    1323: `766`,
    1324: `766`,
    1325: `766`,
    1326: `767`,
    1327: `768`,
    1328: `768`,
    1329: `769`,
    133: `25`,
    1330: `771`,
    1331: `772`,
    1332: `772`,
    1333: `772`,
    1334: `774`,
    1335: `775`,
    1336: `775`,
    1337: `776`,
    1338: `778`,
    1339: `779`,
    134: `27`,
    1340: `779`,
    1341: `779`,
    1342: `781`,
    1343: `782`,
    1344: `783`,
    1345: `784`,
    1346: `785`,
    1347: `785`,
    1348: `786`,
    1349: `787`,
    135: `27`,
    1350: `788`,
    1351: `789`,
    1352: `791`,
    1353: `791`,
    1354: `792`,
    1355: `793`,
    1356: `793`,
    1357: `794`,
    1358: `796`,
    1359: `796`,
    136: `27`,
    1360: `797`,
    1361: `797`,
    1362: `798`,
    1363: `799`,
    1364: `800`,
    1365: `800`,
    1366: `800`,
    1367: `801`,
    1368: `801`,
    1369: `801`,
    137: `28`,
    1370: `804`,
    1371: `804`,
    1372: `805`,
    1373: `805`,
    1374: `806`,
    1375: `807`,
    1376: `808`,
    1377: `809`,
    1378: `809`,
    1379: `810`,
    138: `29`,
    1380: `811`,
    1381: `811`,
    1382: `812`,
    1383: `812`,
    1384: `813`,
    1385: `813`,
    1386: `814`,
    1387: `815`,
    1388: `816`,
    1389: `816`,
    139: `29`,
    1390: `817`,
    1391: `818`,
    1392: `819`,
    1393: `820`,
    1394: `820`,
    1395: `821`,
    1396: `822`,
    1397: `823`,
    1398: `825`,
    1399: `826`,
    14: `2`,
    140: `31`,
    1400: `826`,
    1401: `827`,
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
    241: `96`,
    242: `96`,
    243: `97`,
    244: `97`,
    245: `97`,
    246: `97`,
    247: `97`,
    248: `97`,
    249: `97`,
    25: `5`,
    250: `97`,
    251: `97`,
    252: `97`,
    253: `98`,
    254: `98`,
    255: `99`,
    256: `100`,
    257: `101`,
    258: `101`,
    259: `102`,
    26: `6`,
    260: `102`,
    261: `103`,
    262: `103`,
    263: `105`,
    264: `105`,
    265: `106`,
    266: `106`,
    267: `106`,
    268: `107`,
    269: `107`,
    27: `7`,
    270: `109`,
    271: `109`,
    272: `111`,
    273: `111`,
    274: `112`,
    275: `112`,
    276: `112`,
    277: `113`,
    278: `114`,
    279: `114`,
    28: `8`,
    280: `115`,
    281: `115`,
    282: `116`,
    283: `117`,
    284: `117`,
    285: `118`,
    286: `118`,
    287: `119`,
    288: `120`,
    289: `120`,
    29: `9`,
    290: `121`,
    291: `121`,
    292: `122`,
    293: `122`,
    294: `123`,
    295: `123`,
    296: `124`,
    297: `124`,
    298: `125`,
    299: `126`,
    3: `2`,
    30: `10`,
    300: `127`,
    301: `127`,
    302: `128`,
    303: `128`,
    304: `129`,
    305: `129`,
    306: `130`,
    307: `130`,
    308: `131`,
    309: `132`,
    31: `11`,
    310: `132`,
    311: `133`,
    312: `134`,
    313: `134`,
    314: `135`,
    315: `135`,
    316: `136`,
    317: `136`,
    318: `137`,
    319: `137`,
    32: `11`,
    320: `138`,
    321: `138`,
    322: `139`,
    323: `139`,
    324: `141`,
    325: `141`,
    326: `142`,
    327: `142`,
    328: `142`,
    329: `144`,
    33: `12`,
    330: `144`,
    331: `145`,
    332: `145`,
    333: `146`,
    334: `147`,
    335: `148`,
    336: `148`,
    337: `149`,
    338: `150`,
    339: `151`,
    34: `13`,
    340: `151`,
    341: `152`,
    342: `153`,
    343: `154`,
    344: `154`,
    345: `155`,
    346: `156`,
    347: `157`,
    348: `157`,
    349: `158`,
    35: `14`,
    350: `159`,
    351: `159`,
    352: `160`,
    353: `161`,
    354: `161`,
    355: `162`,
    356: `163`,
    357: `163`,
    358: `163`,
    359: `164`,
    36: `14`,
    360: `165`,
    361: `165`,
    362: `166`,
    363: `167`,
    364: `168`,
    365: `168`,
    366: `169`,
    367: `170`,
    368: `171`,
    369: `171`,
    37: `15`,
    370: `172`,
    371: `173`,
    372: `173`,
    373: `174`,
    374: `175`,
    375: `176`,
    376: `177`,
    377: `177`,
    378: `179`,
    379: `179`,
    38: `16`,
    380: `180`,
    381: `180`,
    382: `181`,
    383: `182`,
    384: `182`,
    385: `183`,
    386: `183`,
    387: `183`,
    388: `184`,
    389: `185`,
    39: `17`,
    390: `186`,
    391: `187`,
    392: `187`,
    393: `187`,
    394: `188`,
    395: `189`,
    396: `190`,
    397: `190`,
    398: `191`,
    399: `192`,
    4: `2`,
    40: `18`,
    400: `192`,
    401: `193`,
    402: `194`,
    403: `195`,
    404: `196`,
    405: `196`,
    406: `197`,
    407: `198`,
    408: `199`,
    409: `201`,
    41: `19`,
    410: `201`,
    411: `201`,
    412: `203`,
    413: `203`,
    414: `204`,
    415: `204`,
    416: `204`,
    417: `206`,
    418: `206`,
    419: `206`,
    42: `21`,
    420: `206`,
    421: `206`,
    422: `206`,
    423: `207`,
    424: `207`,
    425: `208`,
    426: `209`,
    427: `211`,
    428: `212`,
    429: `214`,
    43: `21`,
    430: `214`,
    431: `215`,
    432: `215`,
    433: `216`,
    434: `217`,
    435: `225`,
    436: `226`,
    437: `226`,
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
    447: `227`,
    448: `228`,
    449: `228`,
    45: `21`,
    450: `229`,
    451: `230`,
    452: `231`,
    453: `231`,
    454: `232`,
    455: `232`,
    456: `233`,
    457: `234`,
    458: `234`,
    459: `235`,
    46: `21`,
    460: `236`,
    461: `236`,
    462: `237`,
    463: `237`,
    464: `238`,
    465: `238`,
    466: `239`,
    467: `239`,
    468: `240`,
    469: `240`,
    47: `21`,
    470: `240`,
    471: `242`,
    472: `243`,
    473: `243`,
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
    483: `244`,
    484: `245`,
    485: `245`,
    486: `246`,
    487: `247`,
    488: `247`,
    489: `247`,
    49: `21`,
    490: `248`,
    491: `249`,
    492: `250`,
    493: `250`,
    494: `251`,
    495: `252`,
    496: `252`,
    497: `252`,
    498: `253`,
    499: `253`,
    5: `2`,
    50: `21`,
    500: `254`,
    501: `255`,
    502: `255`,
    503: `256`,
    504: `256`,
    505: `257`,
    506: `257`,
    507: `258`,
    508: `258`,
    509: `258`,
    51: `21`,
    510: `260`,
    511: `260`,
    512: `261`,
    513: `262`,
    514: `263`,
    515: `266`,
    516: `266`,
    517: `266`,
    518: `267`,
    519: `267`,
    52: `21`,
    520: `268`,
    521: `269`,
    522: `269`,
    523: `271`,
    524: `271`,
    525: `272`,
    526: `273`,
    527: `274`,
    528: `276`,
    529: `276`,
    53: `21`,
    530: `276`,
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
    549: `278`,
    55: `21`,
    550: `279`,
    551: `279`,
    552: `280`,
    553: `280`,
    554: `280`,
    555: `282`,
    556: `282`,
    557: `283`,
    558: `284`,
    559: `285`,
    56: `21`,
    560: `288`,
    561: `288`,
    562: `288`,
    563: `289`,
    564: `289`,
    565: `290`,
    566: `291`,
    567: `291`,
    568: `291`,
    569: `292`,
    57: `21`,
    570: `292`,
    571: `293`,
    572: `293`,
    573: `293`,
    574: `295`,
    575: `295`,
    576: `296`,
    577: `297`,
    578: `298`,
    579: `301`,
    58: `21`,
    580: `301`,
    581: `301`,
    582: `302`,
    583: `302`,
    584: `303`,
    585: `303`,
    586: `304`,
    587: `305`,
    588: `305`,
    589: `306`,
    59: `21`,
    590: `307`,
    591: `308`,
    592: `308`,
    593: `309`,
    594: `310`,
    595: `311`,
    596: `311`,
    597: `312`,
    598: `313`,
    599: `314`,
    6: `2`,
    60: `21`,
    600: `314`,
    601: `315`,
    602: `316`,
    603: `317`,
    604: `317`,
    605: `318`,
    606: `318`,
    607: `318`,
    608: `320`,
    609: `320`,
    61: `21`,
    610: `321`,
    611: `322`,
    612: `323`,
    613: `326`,
    614: `326`,
    615: `326`,
    616: `327`,
    617: `327`,
    618: `328`,
    619: `328`,
    62: `21`,
    620: `329`,
    621: `329`,
    622: `329`,
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
    641: `331`,
    642: `332`,
    643: `332`,
    644: `333`,
    645: `333`,
    646: `333`,
    647: `335`,
    648: `335`,
    649: `336`,
    65: `21`,
    650: `337`,
    651: `338`,
    652: `341`,
    653: `341`,
    654: `341`,
    655: `342`,
    656: `342`,
    657: `343`,
    658: `344`,
    659: `344`,
    66: `21`,
    660: `345`,
    661: `345`,
    662: `345`,
    663: `347`,
    664: `347`,
    665: `348`,
    666: `349`,
    667: `350`,
    668: `353`,
    669: `353`,
    67: `21`,
    670: `353`,
    671: `354`,
    672: `354`,
    673: `355`,
    674: `355`,
    675: `355`,
    676: `356`,
    677: `356`,
    678: `356`,
    679: `357`,
    68: `21`,
    680: `357`,
    681: `358`,
    682: `359`,
    683: `360`,
    684: `360`,
    685: `361`,
    686: `361`,
    687: `361`,
    688: `363`,
    689: `363`,
    69: `21`,
    690: `364`,
    691: `364`,
    692: `365`,
    693: `365`,
    694: `366`,
    695: `367`,
    696: `368`,
    697: `368`,
    698: `369`,
    699: `369`,
    7: `2`,
    70: `21`,
    700: `370`,
    701: `371`,
    702: `372`,
    703: `372`,
    704: `373`,
    705: `373`,
    706: `374`,
    707: `374`,
    708: `375`,
    709: `376`,
    71: `21`,
    710: `376`,
    711: `377`,
    712: `377`,
    713: `378`,
    714: `378`,
    715: `379`,
    716: `380`,
    717: `380`,
    718: `381`,
    719: `381`,
    72: `21`,
    720: `382`,
    721: `382`,
    722: `383`,
    723: `384`,
    724: `384`,
    725: `385`,
    726: `385`,
    727: `386`,
    728: `386`,
    729: `386`,
    73: `21`,
    730: `387`,
    731: `387`,
    732: `388`,
    733: `388`,
    734: `389`,
    735: `389`,
    736: `389`,
    737: `390`,
    738: `390`,
    739: `391`,
    74: `21`,
    740: `391`,
    741: `391`,
    742: `391`,
    743: `391`,
    744: `391`,
    745: `392`,
    746: `392`,
    747: `393`,
    748: `394`,
    749: `395`,
    75: `21`,
    750: `395`,
    751: `396`,
    752: `397`,
    753: `398`,
    754: `398`,
    755: `399`,
    756: `400`,
    757: `401`,
    758: `401`,
    759: `402`,
    76: `21`,
    760: `403`,
    761: `404`,
    762: `404`,
    763: `405`,
    764: `406`,
    765: `407`,
    766: `407`,
    767: `408`,
    768: `409`,
    769: `409`,
    77: `21`,
    770: `410`,
    771: `411`,
    772: `411`,
    773: `412`,
    774: `412`,
    775: `412`,
    776: `413`,
    777: `414`,
    778: `416`,
    779: `416`,
    78: `21`,
    780: `417`,
    781: `417`,
    782: `417`,
    783: `418`,
    784: `418`,
    785: `419`,
    786: `420`,
    787: `421`,
    788: `421`,
    789: `422`,
    79: `21`,
    790: `423`,
    791: `423`,
    792: `423`,
    793: `424`,
    794: `425`,
    795: `426`,
    796: `426`,
    797: `427`,
    798: `427`,
    799: `428`,
    8: `2`,
    80: `21`,
    800: `428`,
    801: `429`,
    802: `429`,
    803: `430`,
    804: `431`,
    805: `432`,
    806: `436`,
    807: `436`,
    808: `437`,
    809: `437`,
    81: `21`,
    810: `437`,
    811: `437`,
    812: `437`,
    813: `437`,
    814: `437`,
    815: `437`,
    816: `437`,
    817: `437`,
    818: `437`,
    819: `438`,
    82: `21`,
    820: `439`,
    821: `443`,
    822: `443`,
    823: `444`,
    824: `444`,
    825: `444`,
    826: `445`,
    827: `447`,
    828: `447`,
    829: `448`,
    83: `21`,
    830: `448`,
    831: `449`,
    832: `449`,
    833: `449`,
    834: `451`,
    835: `451`,
    836: `452`,
    837: `452`,
    838: `453`,
    839: `454`,
    84: `21`,
    840: `455`,
    841: `455`,
    842: `456`,
    843: `457`,
    844: `458`,
    845: `458`,
    846: `459`,
    847: `460`,
    848: `461`,
    849: `461`,
    85: `21`,
    850: `462`,
    851: `463`,
    852: `464`,
    853: `464`,
    854: `465`,
    855: `466`,
    856: `466`,
    857: `467`,
    858: `468`,
    859: `468`,
    86: `21`,
    860: `469`,
    861: `470`,
    862: `470`,
    863: `471`,
    864: `472`,
    865: `473`,
    866: `474`,
    867: `474`,
    868: `475`,
    869: `475`,
    87: `21`,
    870: `475`,
    871: `477`,
    872: `478`,
    873: `478`,
    874: `479`,
    875: `480`,
    876: `482`,
    877: `483`,
    878: `483`,
    879: `483`,
    88: `21`,
    880: `484`,
    881: `484`,
    882: `485`,
    883: `486`,
    884: `486`,
    885: `487`,
    886: `488`,
    887: `488`,
    888: `489`,
    889: `490`,
    89: `21`,
    890: `490`,
    891: `491`,
    892: `492`,
    893: `492`,
    894: `493`,
    895: `494`,
    896: `494`,
    897: `495`,
    898: `496`,
    899: `496`,
    9: `2`,
    90: `21`,
    900: `497`,
    901: `498`,
    902: `498`,
    903: `499`,
    904: `500`,
    905: `500`,
    906: `501`,
    907: `502`,
    908: `502`,
    909: `502`,
    91: `21`,
    910: `503`,
    911: `503`,
    912: `504`,
    913: `505`,
    914: `505`,
    915: `505`,
    916: `506`,
    917: `506`,
    918: `507`,
    919: `507`,
    92: `21`,
    920: `507`,
    921: `508`,
    922: `508`,
    923: `509`,
    924: `509`,
    925: `510`,
    926: `511`,
    927: `511`,
    928: `512`,
    929: `512`,
    93: `21`,
    930: `512`,
    931: `512`,
    932: `512`,
    933: `512`,
    934: `513`,
    935: `513`,
    936: `514`,
    937: `515`,
    938: `516`,
    939: `518`,
    94: `21`,
    940: `518`,
    941: `519`,
    942: `519`,
    943: `519`,
    944: `520`,
    945: `520`,
    946: `521`,
    947: `521`,
    948: `521`,
    949: `522`,
    95: `21`,
    950: `522`,
    951: `523`,
    952: `523`,
    953: `524`,
    954: `524`,
    955: `525`,
    956: `526`,
    957: `527`,
    958: `528`,
    959: `528`,
    96: `21`,
    960: `529`,
    961: `530`,
    962: `531`,
    963: `531`,
    964: `532`,
    965: `532`,
    966: `533`,
    967: `533`,
    968: `534`,
    969: `534`,
    97: `21`,
    970: `535`,
    971: `535`,
    972: `538`,
    973: `538`,
    974: `539`,
    975: `539`,
    976: `540`,
    977: `541`,
    978: `542`,
    979: `543`,
    98: `21`,
    980: `543`,
    981: `544`,
    982: `545`,
    983: `545`,
    984: `546`,
    985: `546`,
    986: `547`,
    987: `547`,
    988: `548`,
    989: `549`,
    99: `21`,
    990: `550`,
    991: `550`,
    992: `551`,
    993: `552`,
    994: `553`,
    995: `554`,
    996: `554`,
    997: `555`,
    998: `555`,
    999: `556`
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
  warnings: [`API SecondaryBuy may use up to 5 accounts, but the limit is 4. API SecondaryBuy starts at /app/index.rsh:242:21:application.`, `Step 3 may use up to 5 accounts, but the limit is 4. Step 3 starts at /app/index.rsh:242:21:dot.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"bytes32","name":"elem5","type":"bytes32"},{"internalType":"bytes8","name":"elem6","type":"bytes8"},{"internalType":"address payable","name":"elem7","type":"address"}],"internalType":"struct T9","name":"v4169","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"bytes32","name":"elem5","type":"bytes32"},{"internalType":"bytes8","name":"elem6","type":"bytes8"},{"internalType":"address payable","name":"elem7","type":"address"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"_SecondaryBuy0_2266","type":"tuple"},{"internalType":"bool","name":"_halt0_2266","type":"bool"},{"internalType":"bool","name":"_stopContract0_2266","type":"bool"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3096","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3216","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3318","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"v4158","type":"uint256"}],"name":"SecondaryBuy","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v4172","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"_SecondaryBuy0_2266","type":"tuple"},{"internalType":"bool","name":"_halt0_2266","type":"bool"},{"internalType":"bool","name":"_stopContract0_2266","type":"bool"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"internalType":"struct T5","name":"v4175","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"balance","outputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"halt","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"halted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"meta","outputs":[{"components":[{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"bytes8","name":"symbol","type":"bytes8"},{"internalType":"uint256","name":"decimals","type":"uint256"},{"internalType":"uint256","name":"totalSupply","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address payable","name":"token","type":"address"}],"internalType":"struct T1","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stopContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tracker","outputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T2","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608060405260405162002a8c38038062002a8c8339810160408190526200002691620004a8565b6000805543600355620000c3604080516101408101825260008082526020808301829052835180820185528281528385015260608084018390526080808501849052855160c0808201885285825281850186905281880186905292810185905290810184905260a0808201859052850152830182905260e08301829052610100830182905283518085019094528184528301529061012082015290565b620000cf8282620000d7565b505062000797565b620000e1620003a2565b600454620000f59060ff1615600d620002f0565b60408051338152845160208083019190915285015181830152908401516001600160a01b0390811660608084019190915285015160808084019190915285015160a08084019190915285015160c0808401919091528501516001600160c01b03191660e080840191909152850151166101008201527fc4cfcd2b5316ded84eb6b6526c9cefefce2c93b1881910538b5dfe7bf9e100a2906101200160405180910390a18251620001b6901580620001ae57508351600154145b600e620002f0565b80516000908190528151602090810182905282516040019190915281518183015152830151620001ea901515600f620002f0565b620002056000198460600151106010620002f060201b60201c565b6200021334156011620002f0565b6200021d620003c6565b338152602084810151818301526040808601516001600160a01b031681840152606080870151818501526080808801519085015260a0808801519085015260c0808801516001600160c01b03191690850152848301805183519283018452600080845282515186015195840195909552905151830151151592820192909252620002a892906200031a565b60e082015260016000819055439055604051620002ca90829060200162000569565b60405160208183030381529060405260029081620002e99190620006a3565b5050505050565b81620003165760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6200032462000409565b60005b60018110156200037a5784816001811062000346576200034662000553565b602002015182826001811062000360576200036062000553565b60200201528062000371816200076f565b91505062000327565b508181846001811062000391576200039162000553565b60200201529392505050565b905290565b6040518060400160405280620003b762000439565b81526020016200039d62000409565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915260e081016200039d5b60405180602001604052806001905b6200042262000439565b815260200190600190039081620004185790505090565b604051806060016040528060008152602001600081526020016000151581525090565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200048a57600080fd5b919050565b80516001600160c01b0319811681146200048a57600080fd5b6000610100808385031215620004bd57600080fd5b604051908101906001600160401b0382118183101715620004e257620004e26200045c565b816040528351815260208401516020820152620005026040850162000472565b6040820152606084015160608201526080840151608082015260a084015160a08201526200053360c085016200048f565b60c08201526200054660e0850162000472565b60e0820152949350505050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b0390811682526020808401518184015260408085015190921682840152606080850151818501526080808601519085015260a0858101519085015260c0808601516001600160c01b0319169085015260e08086015161014086019492939291860160005b6001811015620006085782518051835285810151868401528401511515848301529184019190850190600101620005d6565b50505050505092915050565b600181811c908216806200062957607f821691505b6020821081036200064a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200069e57600081815260208120601f850160051c81016020861015620006795750805b601f850160051c820191505b818110156200069a5782815560010162000685565b5050505b505050565b81516001600160401b03811115620006bf57620006bf6200045c565b620006d781620006d0845462000614565b8462000650565b602080601f8311600181146200070f5760008415620006f65750858301515b600019600386901b1c1916600185901b1785556200069a565b600085815260208120601f198616915b8281101562000740578886015182559484019460019091019084016200071f565b50858210156200075f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000600182016200079057634e487b7160e01b600052601160045260246000fd5b5060010190565b6122e580620007a76000396000f3fe6080604052600436106100ae5760003560e01c806312253a6c146100b75780631ad4ef28146100d45780631e93b0f1146100e75780632571973e14610106578063573b8510146101195780635ed7ca5b1461012c57806383230757146101345780638da5cb5b14610149578063ab53f2c614610176578063b69ef8a814610199578063b9b8af0b146101bd578063c885044e146101d2578063f52bccad14610241578063fc0c546a1461027157005b366100b557005b005b6100bf610286565b60405190151581526020015b60405180910390f35b6100bf6100e2366004611aa0565b6102a6565b3480156100f357600080fd5b506003545b6040519081526020016100cb565b6100bf610114366004611ab2565b6102ce565b6100bf610127366004611acb565b6102ec565b6100bf61030e565b34801561014057600080fd5b506001546100f8565b34801561015557600080fd5b5061015e61032e565b6040516001600160a01b0390911681526020016100cb565b34801561018257600080fd5b5061018b61034e565b6040516100cb929190611b0e565b3480156101a557600080fd5b506101ae6103eb565b604051905181526020016100cb565b3480156101c957600080fd5b506100bf610411565b3480156101de57600080fd5b506101e7610431565b6040516100cb9190815181526020808301516001600160c01b0319169082015260408083015190820152606080830151908201526080808301519082015260a0918201516001600160a01b03169181019190915260c00190565b34801561024d57600080fd5b50610256610457565b604080518251815260209283015192810192909252016100cb565b34801561027d57600080fd5b5061015e61047e565b6000610290611744565b600061029c818361049f565b5060e00151919050565b60006102b0611744565b6102c86102c236859003850185611c3c565b826104e4565b50919050565b60006102d8611744565b6102e28382610ade565b6020015192915050565b60006102f6611744565b6102c861030836859003850185611cef565b82610b06565b6000610318611744565b60006103248183610d92565b5060600151919050565b6000610338611744565b60006103448183610db9565b5060c00151919050565b60006060600054600280805461036390611d0b565b80601f016020809104026020016040519081016040528092919081815260200182805461038f90611d0b565b80156103dc5780601f106103b1576101008083540402835291602001916103dc565b820191906000526020600020905b8154815290600101906020018083116103bf57829003601f168201915b50505050509050915091509091565b6103f36117a6565b6103fb611744565b60006104078183610e80565b5060400151919050565b600061041b611744565b60006104278183610f4b565b5060800151919050565b6104396117b9565b610441611744565b600061044d818361100e565b5060a00151919050565b61045f6117ee565b610467611744565b60006104738183611134565b506101200151919050565b6000610488611744565b6000610494818361120e565b506101000151919050565b6104a7611808565b60208101805160029052815190519015156060909101526104c6611824565b60008152602080830151908201526104de81846104e4565b50505050565b6104ec61183e565b6104fc60046000541460186112d9565b60006002805461050b90611d0b565b80601f016020809104026020016040519081016040528092919081815260200182805461053790611d0b565b80156105845780601f1061055957610100808354040283529160200191610584565b820191906000526020600020905b81548152906001019060200180831161056757829003601f168201915b505050505080602001905181019061059c9190611e1d565b6004549091506105b19060ff161560196112d9565b7f7146322068d47776d11a14502ba39cc2b8f2e0de86e0aba8bcda584e530c3bae33856040516105e2929190611edb565b60405180910390a183516106059015806105fe57508451600154145b601a6112d9565b6000602085015151600281111561061e5761061e611d3f565b0361083b5760208085015101518083526060820151905161063f9190611303565b60208301819052610653903414601b6112d9565b61066d6106663383604001516000611336565b601c6112d9565b6101408101515151825151610685911015601d6112d9565b604051600081527fae8b654ee5ce554c412f8b40e6f928f89ee7c8d6477d00dfe06ffe533f603d059060200160405180910390a1600060208085018290528251908401516040516001600160a01b039092169281156108fc029290818181858888f193505050501580156106fd573d6000803e3d6000fd5b5060408101518251516107129190339061134e565b61071a61185e565b81516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a0808301519082015260c0808301516001600160c01b03191690820152600160e08083019190915282015115156101008083019190915282015183515161079c9190611367565b610120808301919091528201518351516107b69190611382565b61014082810191909152436101608301528201805160408051606081018252835151518751519003815283515160209081015190820152925161081093600092909190820190835b6020020151604001511515905261139d565b6101808201526101608201516020840151908101036101a08201526108358185611411565b506104de565b6001602085015151600281111561085457610854611d3f565b0361099c578051610871906001600160a01b03163314601e6112d9565b61087d3415601f6112d9565b6108976108903383604001516000611336565b60206112d9565b604051600081527f79245ef4503edd4f44d745d8cdc4cef7d9f26ac11c41958771a82c6a916850999060200160405180910390a1600060608401526108da61185e565b81516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a0808301519082015260c0808301516001600160c01b03191690820152600160e08083019190915282015161094b57600161094e565b60005b15156101008083019190915282015161012080830191909152820151610140808301919091524361016080840191909152908301516101808301528201516101a08201526108358185611411565b600260208501515160028111156109b5576109b5611d3f565b036104de576109c6341560216112d9565b6109e06109d93383604001516000611336565b60226112d9565b604051600181527f3d144def0f128b32c09fdd49428950e44f49ed643405a6b4431e7757af5e83399060200160405180910390a1600160e0840152610a2361185e565b81516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a0808301519082015260c0808301516001600160c01b03191690820152600060e08083019190915282015115156101008083019190915282015161012080830191909152820151610140808301919091524361016080840191909152908301516101808301528201516101a0820152610ad78185611411565b5050505050565b610ae66118e9565b8051839052602080820180516000905282519051909101526104c6611824565b610b0e611909565b610b1e60016000541460126112d9565b600060028054610b2d90611d0b565b80601f0160208091040260200160405190810160405280929190818152602001828054610b5990611d0b565b8015610ba65780601f10610b7b57610100808354040283529160200191610ba6565b820191906000526020600020905b815481529060010190602001808311610b8957829003601f168201915b5050505050806020019051810190610bbe9190611f63565b600454909150610bd39060ff161560136112d9565b60408051338152855160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596910160405180910390a18351610c27901580610c2057508451600154145b60146112d9565b610c33341560156112d9565b610cb58160e0015160006040518060600160405280610c748660e00151600060018110610c6257610c62611f4d565b60200201516000015187602001510190565b81526020018560e00151600060018110610c9057610c90611f4d565b60200201516020015181526020018560e001516000600181106107fe576107fe611f4d565b825260408101516020820151610cd891610cd191339190611336565b60166112d9565b8051610cf0906001600160a01b0316331460176112d9565b610cf861185e565b81516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a0808301519082015260c0808301516001600160c01b03191690820152600160e0820152600061010082018190528351515161012083015261014082018190524361016083015283516101808301526101a0820152610ad78185611411565b610d9a611808565b60208101805160019052815190519015156040909101526104c6611824565b610dc9600460005414600a6112d9565b600060028054610dd890611d0b565b80601f0160208091040260200160405190810160405280929190818152602001828054610e0490611d0b565b8015610e515780601f10610e2657610100808354040283529160200191610e51565b820191906000526020600020905b815481529060010190602001808311610e3457829003601f168201915b5050505050806020019051810190610e699190611e1d565b516001600160a01b031660c0909201919091525050565b610e8861191c565b610e9860046000541460076112d9565b600060028054610ea790611d0b565b80601f0160208091040260200160405190810160405280929190818152602001828054610ed390611d0b565b8015610f205780601f10610ef557610100808354040283529160200191610f20565b820191906000526020600020905b815481529060010190602001808311610f0357829003601f168201915b5050505050806020019051810190610f389190611e1d565b6101000151825152505160409091015250565b610f5b60046000541460086112d9565b600060028054610f6a90611d0b565b80601f0160208091040260200160405190810160405280929190818152602001828054610f9690611d0b565b8015610fe35780601f10610fb857610100808354040283529160200191610fe3565b820191906000526020600020905b815481529060010190602001808311610fc657829003601f168201915b5050505050806020019051810190610ffb9190611e1d565b60e0015115156080909201919091525050565b61101661192f565b61102660046000541460096112d9565b60006002805461103590611d0b565b80601f016020809104026020016040519081016040528092919081815260200182805461106190611d0b565b80156110ae5780601f10611083576101008083540402835291602001916110ae565b820191906000526020600020905b81548152906001019060200180831161109157829003601f168201915b50505050508060200190518101906110c69190611e1d565b60a08082015184515260c082015184516001600160c01b031990911660209182015260808084015186516040908101919091529184015186516060908101919091528401518651909101529091015183516001600160a01b0390911690820152915192909101919091525050565b61113c611942565b61114c600460005414600c6112d9565b60006002805461115b90611d0b565b80601f016020809104026020016040519081016040528092919081815260200182805461118790611d0b565b80156111d45780601f106111a9576101008083540402835291602001916111d4565b820191906000526020600020905b8154815290600101906020018083116111b757829003601f168201915b50505050508060200190518101906111ec9190611e1d565b6101408101515151835152606001518251602001525051610120919091015250565b61121e600460005414600b6112d9565b60006002805461122d90611d0b565b80601f016020809104026020016040519081016040528092919081815260200182805461125990611d0b565b80156112a65780601f1061127b576101008083540402835291602001916112a6565b820191906000526020600020905b81548152906001019060200180831161128957829003601f168201915b50505050508060200190518101906112be9190611e1d565b604001516001600160a01b0316610100909201919091525050565b816112ff5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000811580611327575082826113198183612020565b92506113259083612037565b145b61133057600080fd5b92915050565b60006113448385308561155e565b90505b9392505050565b611359838383611638565b61136257600080fd5b505050565b6000826113748382612059565b915081111561133057600080fd5b60008261138f838261206c565b915081101561133057600080fd5b6113a5611955565b60005b60018110156113f1578481600181106113c3576113c3611f4d565b60200201518282600181106113da576113da611f4d565b6020020152806113e98161207f565b9150506113a8565b508181846001811061140557611405611f4d565b60200201529392505050565b8160e00151156114ef576114236119a0565b82516001600160a01b0390811682526020808501518184015260408086015190921682840152606080860151908401526080808601519084015260a0808601519084015260c0808601516001600160c01b0319169084015261010080860151151560e085015261012080870151918501919091526101408087015191850191909152610180860151908401526101a085015161016084015260046000554360015590516114d2918391016120d6565b604051602081830303815290604052600290816104de91906121e0565b60408201518251610180840151515161150992919061134e565b81516101a08301516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611547573d6000803e3d6000fd5b50600080805560018190556112ff90600290611a1b565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916115c59161229f565b60006040518083038185875af1925050503d8060008114611602576040519150601f19603f3d011682016040523d82523d6000602084013e611607565b606091505b509150915061161882826001611709565b508080602001905181019061162d91906122bb565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916116979161229f565b60006040518083038185875af1925050503d80600081146116d4576040519150601f19603f3d011682016040523d82523d6000602084013e6116d9565b606091505b50915091506116ea82826002611709565b50808060200190518101906116ff91906122bb565b9695505050505050565b60608315611718575081611347565b8251156117285782518084602001fd5b60405163100960cb60e01b8152600481018390526024016112f6565b6040805161014081018252600080825260208201529081016117646117a6565b8152600060208201819052604082015260600161177f6117b9565b81526000602082018190526040820181905260608201526080016117a16117ee565b905290565b6040518060200160405280600081525090565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915290565b604051806040016040528060008152602001600081525090565b60405180604001604052806000151581526020016117a1611a58565b6040518060400160405280600081526020016117a1611a58565b60405180604001604052806118516117a6565b8152602001600081525090565b604051806101c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000801916815260200160006001600160c01b0319168152602001600015158152602001600015158152602001600081526020016000815260200160008152602001611851611955565b60405180604001604052806118fc6117a6565b81526020016117a1611a58565b60405180602001604052806117a1611955565b60405180602001604052806117a16117a6565b60405180602001604052806117a16117b9565b60405180602001604052806117a16117ee565b60405180602001604052806001905b61198a604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816119645790505090565b60405180610180016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000801916815260200160006001600160c01b03191681526020016000151581526020016000815260200160008152602001611851611955565b508054611a2790611d0b565b6000825580601f10611a37575050565b601f016020900490600052602060002090810190611a559190611a87565b50565b60408051608081019091528060008152602001611a736117a6565b815260006020820181905260409091015290565b5b80821115611a9c5760008155600101611a88565b5090565b600060a082840312156102c857600080fd5b600060208284031215611ac457600080fd5b5035919050565b6000602082840312156102c857600080fd5b6001600160a01b03169052565b60005b83811015611b05578181015183820152602001611aed565b50506000910152565b8281526040602082015260008251806040840152611b33816060850160208701611aea565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b0381118282101715611b8057611b80611b48565b60405290565b604051602081016001600160401b0381118282101715611b8057611b80611b48565b604051606081016001600160401b0381118282101715611b8057611b80611b48565b60405161018081016001600160401b0381118282101715611b8057611b80611b48565b600060208284031215611bff57600080fd5b604051602081016001600160401b0381118282101715611c2157611c21611b48565b6040529135825250919050565b8015158114611a5557600080fd5b600081830360a0811215611c4f57600080fd5b604080519081016001600160401b0381118282101715611c7157611c71611b48565b604052833581526080601f1983011215611c8a57600080fd5b611c92611b5e565b9150602084013560038110611ca657600080fd5b8252611cb58560408601611bed565b60208301526060840135611cc881611c2e565b60408301526080840135611cdb81611c2e565b606083015260208101919091529392505050565b600060208284031215611d0157600080fd5b6113478383611bed565b600181811c90821680611d1f57607f821691505b6020821081036102c857634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b80516001600160a01b0381168114611d6c57600080fd5b919050565b80516001600160c01b031981168114611d6c57600080fd5b8051611d6c81611c2e565b600082601f830112611da557600080fd5b611dad611b86565b80606080850186811115611dc057600080fd5b855b81811015611e1157828189031215611dda5760008081fd5b611de2611ba8565b8151815260208083015181830152604080840151611dff81611c2e565b90830152908652909401938201611dc2565b50919695505050505050565b60006101c08284031215611e3057600080fd5b611e38611bca565b611e4183611d55565b815260208301516020820152611e5960408401611d55565b6040820152606083015160608201526080830151608082015260a083015160a0820152611e8860c08401611d71565b60c0820152611e9960e08401611d89565b60e082015261010083810151908201526101208084015190820152610140611ec385828601611d94565b908201526101a0929092015161016083015250919050565b6001600160a01b03831681528151602080830191909152820151805160c08301919060038110611f1b57634e487b7160e01b600052602160045260246000fd5b8060408501525060208101515160608401526040810151151560808401526060810151151560a0840152509392505050565b634e487b7160e01b600052603260045260246000fd5b60006101408284031215611f7657600080fd5b60405161010081016001600160401b0381118282101715611f9957611f99611b48565b604052611fa583611d55565b815260208301516020820152611fbd60408401611d55565b6040820152606083015160608201526080830151608082015260a083015160a0820152611fec60c08401611d71565b60c0820152611ffe8460e08501611d94565b60e08201529392505050565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176113305761133061200a565b60008261205457634e487b7160e01b600052601260045260246000fd5b500490565b818103818111156113305761133061200a565b808201808211156113305761133061200a565b6000600182016120915761209161200a565b5060010190565b8060005b60018110156104de57815180518552602080820151818701526040918201511515918601919091526060909401939091019060010161209c565b60006101c0820190506120ea828451611add565b6020830151602083015260408301516121066040840182611add565b50606083015160608301526080830151608083015260a083015160a083015260c083015161214060c08401826001600160c01b0319169052565b5060e083015161215460e084018215159052565b50610100838101519083015261012080840151908301526101408084015161217e82850182612098565b50506101608301516101a083015292915050565b601f82111561136257600081815260208120601f850160051c810160208610156121b95750805b601f850160051c820191505b818110156121d8578281556001016121c5565b505050505050565b81516001600160401b038111156121f9576121f9611b48565b61220d816122078454611d0b565b84612192565b602080601f831160018114612242576000841561222a5750858301515b600019600386901b1c1916600185901b1785556121d8565b600085815260208120601f198616915b8281101561227157888601518255948401946001909101908401612252565b508582101561228f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600082516122b1818460208701611aea565b9190910192915050565b6000602082840312156122cd57600080fd5b815161134781611c2e56fea164736f6c6343000811000a`,
  BytecodeLen: 10892,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:225:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:324:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:242:21:after expr stmt semicolon',
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
  "Deployer": Deployer,
  "SecondaryBuy": SecondaryBuy,
  "halt": halt,
  "stopContract": stopContract
  };
export const _APIs = {
  SecondaryBuy: SecondaryBuy,
  halt: halt,
  stopContract: stopContract
  };
