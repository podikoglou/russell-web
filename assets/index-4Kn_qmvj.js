function bh(i, o) {
  for (var v = 0; v < o.length; v++) {
    const s = o[v];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const _ in s) if (_ !== "default" && !(_ in i)) {
        const D = Object.getOwnPropertyDescriptor(s, _);
        D && Object.defineProperty(i, _, D.get ? D : { enumerable: true, get: () => s[_] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
(function() {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const _ of document.querySelectorAll('link[rel="modulepreload"]')) s(_);
  new MutationObserver((_) => {
    for (const D of _) if (D.type === "childList") for (const x of D.addedNodes) x.tagName === "LINK" && x.rel === "modulepreload" && s(x);
  }).observe(document, { childList: true, subtree: true });
  function v(_) {
    const D = {};
    return _.integrity && (D.integrity = _.integrity), _.referrerPolicy && (D.referrerPolicy = _.referrerPolicy), _.crossOrigin === "use-credentials" ? D.credentials = "include" : _.crossOrigin === "anonymous" ? D.credentials = "omit" : D.credentials = "same-origin", D;
  }
  function s(_) {
    if (_.ep) return;
    _.ep = true;
    const D = v(_);
    fetch(_.href, D);
  }
})();
function Sh(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var ii = { exports: {} }, Ea = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var gd;
function _h() {
  if (gd) return Ea;
  gd = 1;
  var i = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function v(s, _, D) {
    var x = null;
    if (D !== void 0 && (x = "" + D), _.key !== void 0 && (x = "" + _.key), "key" in _) {
      D = {};
      for (var Q in _) Q !== "key" && (D[Q] = _[Q]);
    } else D = _;
    return _ = D.ref, { $$typeof: i, type: s, key: x, ref: _ !== void 0 ? _ : null, props: D };
  }
  return Ea.Fragment = o, Ea.jsx = v, Ea.jsxs = v, Ea;
}
var bd;
function Eh() {
  return bd || (bd = 1, ii.exports = _h()), ii.exports;
}
var R = Eh(), si = { exports: {} }, K = {};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Sd;
function Th() {
  if (Sd) return K;
  Sd = 1;
  var i = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), D = Symbol.for("react.consumer"), x = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), E = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), B = Symbol.iterator;
  function w(d) {
    return d === null || typeof d != "object" ? null : (d = B && d[B] || d["@@iterator"], typeof d == "function" ? d : null);
  }
  var yt = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, bt = Object.assign, mt = {};
  function st(d, O, q) {
    this.props = d, this.context = O, this.refs = mt, this.updater = q || yt;
  }
  st.prototype.isReactComponent = {}, st.prototype.setState = function(d, O) {
    if (typeof d != "object" && typeof d != "function" && d != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, d, O, "setState");
  }, st.prototype.forceUpdate = function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate");
  };
  function he() {
  }
  he.prototype = st.prototype;
  function zl(d, O, q) {
    this.props = d, this.context = O, this.refs = mt, this.updater = q || yt;
  }
  var qt = zl.prototype = new he();
  qt.constructor = zl, bt(qt, st.prototype), qt.isPureReactComponent = true;
  var hl = Array.isArray, I = { H: null, A: null, T: null, S: null, V: null }, Kt = Object.prototype.hasOwnProperty;
  function Jt(d, O, q, N, G, tt) {
    return q = tt.ref, { $$typeof: i, type: d, key: O, ref: q !== void 0 ? q : null, props: tt };
  }
  function Wt(d, O) {
    return Jt(d.type, O, void 0, void 0, void 0, d.props);
  }
  function bl(d) {
    return typeof d == "object" && d !== null && d.$$typeof === i;
  }
  function Be(d) {
    var O = { "=": "=0", ":": "=2" };
    return "$" + d.replace(/[=:]/g, function(q) {
      return O[q];
    });
  }
  var Ol = /\/+/g;
  function jt(d, O) {
    return typeof d == "object" && d !== null && d.key != null ? Be("" + d.key) : O.toString(36);
  }
  function ve() {
  }
  function me(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (typeof d.status == "string" ? d.then(ve, ve) : (d.status = "pending", d.then(function(O) {
          d.status === "pending" && (d.status = "fulfilled", d.value = O);
        }, function(O) {
          d.status === "pending" && (d.status = "rejected", d.reason = O);
        })), d.status) {
          case "fulfilled":
            return d.value;
          case "rejected":
            throw d.reason;
        }
    }
    throw d;
  }
  function Yt(d, O, q, N, G) {
    var tt = typeof d;
    (tt === "undefined" || tt === "boolean") && (d = null);
    var L = false;
    if (d === null) L = true;
    else switch (tt) {
      case "bigint":
      case "string":
      case "number":
        L = true;
        break;
      case "object":
        switch (d.$$typeof) {
          case i:
          case o:
            L = true;
            break;
          case U:
            return L = d._init, Yt(L(d._payload), O, q, N, G);
        }
    }
    if (L) return G = G(d), L = N === "" ? "." + jt(d, 0) : N, hl(G) ? (q = "", L != null && (q = L.replace(Ol, "$&/") + "/"), Yt(G, O, q, "", function(Zl) {
      return Zl;
    })) : G != null && (bl(G) && (G = Wt(G, q + (G.key == null || d && d.key === G.key ? "" : ("" + G.key).replace(Ol, "$&/") + "/") + L)), O.push(G)), 1;
    L = 0;
    var $t = N === "" ? "." : N + ":";
    if (hl(d)) for (var ht = 0; ht < d.length; ht++) N = d[ht], tt = $t + jt(N, ht), L += Yt(N, O, q, tt, G);
    else if (ht = w(d), typeof ht == "function") for (d = ht.call(d), ht = 0; !(N = d.next()).done; ) N = N.value, tt = $t + jt(N, ht++), L += Yt(N, O, q, tt, G);
    else if (tt === "object") {
      if (typeof d.then == "function") return Yt(me(d), O, q, N, G);
      throw O = String(d), Error("Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead.");
    }
    return L;
  }
  function A(d, O, q) {
    if (d == null) return d;
    var N = [], G = 0;
    return Yt(d, N, "", "", function(tt) {
      return O.call(q, tt, G++);
    }), N;
  }
  function H(d) {
    if (d._status === -1) {
      var O = d._result;
      O = O(), O.then(function(q) {
        (d._status === 0 || d._status === -1) && (d._status = 1, d._result = q);
      }, function(q) {
        (d._status === 0 || d._status === -1) && (d._status = 2, d._result = q);
      }), d._status === -1 && (d._status = 0, d._result = O);
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var Z = typeof reportError == "function" ? reportError : function(d) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var O = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d), error: d });
      if (!window.dispatchEvent(O)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", d);
      return;
    }
    console.error(d);
  };
  function rt() {
  }
  return K.Children = { map: A, forEach: function(d, O, q) {
    A(d, function() {
      O.apply(this, arguments);
    }, q);
  }, count: function(d) {
    var O = 0;
    return A(d, function() {
      O++;
    }), O;
  }, toArray: function(d) {
    return A(d, function(O) {
      return O;
    }) || [];
  }, only: function(d) {
    if (!bl(d)) throw Error("React.Children.only expected to receive a single React element child.");
    return d;
  } }, K.Component = st, K.Fragment = v, K.Profiler = _, K.PureComponent = zl, K.StrictMode = s, K.Suspense = M, K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, K.__COMPILER_RUNTIME = { __proto__: null, c: function(d) {
    return I.H.useMemoCache(d);
  } }, K.cache = function(d) {
    return function() {
      return d.apply(null, arguments);
    };
  }, K.cloneElement = function(d, O, q) {
    if (d == null) throw Error("The argument must be a React element, but you passed " + d + ".");
    var N = bt({}, d.props), G = d.key, tt = void 0;
    if (O != null) for (L in O.ref !== void 0 && (tt = void 0), O.key !== void 0 && (G = "" + O.key), O) !Kt.call(O, L) || L === "key" || L === "__self" || L === "__source" || L === "ref" && O.ref === void 0 || (N[L] = O[L]);
    var L = arguments.length - 2;
    if (L === 1) N.children = q;
    else if (1 < L) {
      for (var $t = Array(L), ht = 0; ht < L; ht++) $t[ht] = arguments[ht + 2];
      N.children = $t;
    }
    return Jt(d.type, G, void 0, void 0, tt, N);
  }, K.createContext = function(d) {
    return d = { $$typeof: x, _currentValue: d, _currentValue2: d, _threadCount: 0, Provider: null, Consumer: null }, d.Provider = d, d.Consumer = { $$typeof: D, _context: d }, d;
  }, K.createElement = function(d, O, q) {
    var N, G = {}, tt = null;
    if (O != null) for (N in O.key !== void 0 && (tt = "" + O.key), O) Kt.call(O, N) && N !== "key" && N !== "__self" && N !== "__source" && (G[N] = O[N]);
    var L = arguments.length - 2;
    if (L === 1) G.children = q;
    else if (1 < L) {
      for (var $t = Array(L), ht = 0; ht < L; ht++) $t[ht] = arguments[ht + 2];
      G.children = $t;
    }
    if (d && d.defaultProps) for (N in L = d.defaultProps, L) G[N] === void 0 && (G[N] = L[N]);
    return Jt(d, tt, void 0, void 0, null, G);
  }, K.createRef = function() {
    return { current: null };
  }, K.forwardRef = function(d) {
    return { $$typeof: Q, render: d };
  }, K.isValidElement = bl, K.lazy = function(d) {
    return { $$typeof: U, _payload: { _status: -1, _result: d }, _init: H };
  }, K.memo = function(d, O) {
    return { $$typeof: E, type: d, compare: O === void 0 ? null : O };
  }, K.startTransition = function(d) {
    var O = I.T, q = {};
    I.T = q;
    try {
      var N = d(), G = I.S;
      G !== null && G(q, N), typeof N == "object" && N !== null && typeof N.then == "function" && N.then(rt, Z);
    } catch (tt) {
      Z(tt);
    } finally {
      I.T = O;
    }
  }, K.unstable_useCacheRefresh = function() {
    return I.H.useCacheRefresh();
  }, K.use = function(d) {
    return I.H.use(d);
  }, K.useActionState = function(d, O, q) {
    return I.H.useActionState(d, O, q);
  }, K.useCallback = function(d, O) {
    return I.H.useCallback(d, O);
  }, K.useContext = function(d) {
    return I.H.useContext(d);
  }, K.useDebugValue = function() {
  }, K.useDeferredValue = function(d, O) {
    return I.H.useDeferredValue(d, O);
  }, K.useEffect = function(d, O, q) {
    var N = I.H;
    if (typeof q == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
    return N.useEffect(d, O);
  }, K.useId = function() {
    return I.H.useId();
  }, K.useImperativeHandle = function(d, O, q) {
    return I.H.useImperativeHandle(d, O, q);
  }, K.useInsertionEffect = function(d, O) {
    return I.H.useInsertionEffect(d, O);
  }, K.useLayoutEffect = function(d, O) {
    return I.H.useLayoutEffect(d, O);
  }, K.useMemo = function(d, O) {
    return I.H.useMemo(d, O);
  }, K.useOptimistic = function(d, O) {
    return I.H.useOptimistic(d, O);
  }, K.useReducer = function(d, O, q) {
    return I.H.useReducer(d, O, q);
  }, K.useRef = function(d) {
    return I.H.useRef(d);
  }, K.useState = function(d) {
    return I.H.useState(d);
  }, K.useSyncExternalStore = function(d, O, q) {
    return I.H.useSyncExternalStore(d, O, q);
  }, K.useTransition = function() {
    return I.H.useTransition();
  }, K.version = "19.1.0", K;
}
var _d;
function Ln() {
  return _d || (_d = 1, si.exports = Th()), si.exports;
}
var F = Ln();
const Ah = Sh(F), ph = bh({ __proto__: null, default: Ah }, [F]);
var ri = { exports: {} }, Ta = {}, oi = { exports: {} }, di = {};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ed;
function zh() {
  return Ed || (Ed = 1, function(i) {
    function o(A, H) {
      var Z = A.length;
      A.push(H);
      t: for (; 0 < Z; ) {
        var rt = Z - 1 >>> 1, d = A[rt];
        if (0 < _(d, H)) A[rt] = H, A[Z] = d, Z = rt;
        else break t;
      }
    }
    function v(A) {
      return A.length === 0 ? null : A[0];
    }
    function s(A) {
      if (A.length === 0) return null;
      var H = A[0], Z = A.pop();
      if (Z !== H) {
        A[0] = Z;
        t: for (var rt = 0, d = A.length, O = d >>> 1; rt < O; ) {
          var q = 2 * (rt + 1) - 1, N = A[q], G = q + 1, tt = A[G];
          if (0 > _(N, Z)) G < d && 0 > _(tt, N) ? (A[rt] = tt, A[G] = Z, rt = G) : (A[rt] = N, A[q] = Z, rt = q);
          else if (G < d && 0 > _(tt, Z)) A[rt] = tt, A[G] = Z, rt = G;
          else break t;
        }
      }
      return H;
    }
    function _(A, H) {
      var Z = A.sortIndex - H.sortIndex;
      return Z !== 0 ? Z : A.id - H.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var D = performance;
      i.unstable_now = function() {
        return D.now();
      };
    } else {
      var x = Date, Q = x.now();
      i.unstable_now = function() {
        return x.now() - Q;
      };
    }
    var M = [], E = [], U = 1, B = null, w = 3, yt = false, bt = false, mt = false, st = false, he = typeof setTimeout == "function" ? setTimeout : null, zl = typeof clearTimeout == "function" ? clearTimeout : null, qt = typeof setImmediate < "u" ? setImmediate : null;
    function hl(A) {
      for (var H = v(E); H !== null; ) {
        if (H.callback === null) s(E);
        else if (H.startTime <= A) s(E), H.sortIndex = H.expirationTime, o(M, H);
        else break;
        H = v(E);
      }
    }
    function I(A) {
      if (mt = false, hl(A), !bt) if (v(M) !== null) bt = true, Kt || (Kt = true, jt());
      else {
        var H = v(E);
        H !== null && Yt(I, H.startTime - A);
      }
    }
    var Kt = false, Jt = -1, Wt = 5, bl = -1;
    function Be() {
      return st ? true : !(i.unstable_now() - bl < Wt);
    }
    function Ol() {
      if (st = false, Kt) {
        var A = i.unstable_now();
        bl = A;
        var H = true;
        try {
          t: {
            bt = false, mt && (mt = false, zl(Jt), Jt = -1), yt = true;
            var Z = w;
            try {
              l: {
                for (hl(A), B = v(M); B !== null && !(B.expirationTime > A && Be()); ) {
                  var rt = B.callback;
                  if (typeof rt == "function") {
                    B.callback = null, w = B.priorityLevel;
                    var d = rt(B.expirationTime <= A);
                    if (A = i.unstable_now(), typeof d == "function") {
                      B.callback = d, hl(A), H = true;
                      break l;
                    }
                    B === v(M) && s(M), hl(A);
                  } else s(M);
                  B = v(M);
                }
                if (B !== null) H = true;
                else {
                  var O = v(E);
                  O !== null && Yt(I, O.startTime - A), H = false;
                }
              }
              break t;
            } finally {
              B = null, w = Z, yt = false;
            }
            H = void 0;
          }
        } finally {
          H ? jt() : Kt = false;
        }
      }
    }
    var jt;
    if (typeof qt == "function") jt = function() {
      qt(Ol);
    };
    else if (typeof MessageChannel < "u") {
      var ve = new MessageChannel(), me = ve.port2;
      ve.port1.onmessage = Ol, jt = function() {
        me.postMessage(null);
      };
    } else jt = function() {
      he(Ol, 0);
    };
    function Yt(A, H) {
      Jt = he(function() {
        A(i.unstable_now());
      }, H);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, i.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Wt = 0 < A ? Math.floor(1e3 / A) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, i.unstable_next = function(A) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = w;
      }
      var Z = w;
      w = H;
      try {
        return A();
      } finally {
        w = Z;
      }
    }, i.unstable_requestPaint = function() {
      st = true;
    }, i.unstable_runWithPriority = function(A, H) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var Z = w;
      w = A;
      try {
        return H();
      } finally {
        w = Z;
      }
    }, i.unstable_scheduleCallback = function(A, H, Z) {
      var rt = i.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? rt + Z : rt) : Z = rt, A) {
        case 1:
          var d = -1;
          break;
        case 2:
          d = 250;
          break;
        case 5:
          d = 1073741823;
          break;
        case 4:
          d = 1e4;
          break;
        default:
          d = 5e3;
      }
      return d = Z + d, A = { id: U++, callback: H, priorityLevel: A, startTime: Z, expirationTime: d, sortIndex: -1 }, Z > rt ? (A.sortIndex = Z, o(E, A), v(M) === null && A === v(E) && (mt ? (zl(Jt), Jt = -1) : mt = true, Yt(I, Z - rt))) : (A.sortIndex = d, o(M, A), bt || yt || (bt = true, Kt || (Kt = true, jt()))), A;
    }, i.unstable_shouldYield = Be, i.unstable_wrapCallback = function(A) {
      var H = w;
      return function() {
        var Z = w;
        w = H;
        try {
          return A.apply(this, arguments);
        } finally {
          w = Z;
        }
      };
    };
  }(di)), di;
}
var Td;
function Oh() {
  return Td || (Td = 1, oi.exports = zh()), oi.exports;
}
var yi = { exports: {} }, Xt = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ad;
function Mh() {
  if (Ad) return Xt;
  Ad = 1;
  var i = Ln();
  function o(M) {
    var E = "https://react.dev/errors/" + M;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var U = 2; U < arguments.length; U++) E += "&args[]=" + encodeURIComponent(arguments[U]);
    }
    return "Minified React error #" + M + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function v() {
  }
  var s = { d: { f: v, r: function() {
    throw Error(o(522));
  }, D: v, C: v, L: v, m: v, X: v, S: v, M: v }, p: 0, findDOMNode: null }, _ = Symbol.for("react.portal");
  function D(M, E, U) {
    var B = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: _, key: B == null ? null : "" + B, children: M, containerInfo: E, implementation: U };
  }
  var x = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Q(M, E) {
    if (M === "font") return "";
    if (typeof E == "string") return E === "use-credentials" ? E : "";
  }
  return Xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Xt.createPortal = function(M, E) {
    var U = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11) throw Error(o(299));
    return D(M, E, null, U);
  }, Xt.flushSync = function(M) {
    var E = x.T, U = s.p;
    try {
      if (x.T = null, s.p = 2, M) return M();
    } finally {
      x.T = E, s.p = U, s.d.f();
    }
  }, Xt.preconnect = function(M, E) {
    typeof M == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, s.d.C(M, E));
  }, Xt.prefetchDNS = function(M) {
    typeof M == "string" && s.d.D(M);
  }, Xt.preinit = function(M, E) {
    if (typeof M == "string" && E && typeof E.as == "string") {
      var U = E.as, B = Q(U, E.crossOrigin), w = typeof E.integrity == "string" ? E.integrity : void 0, yt = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      U === "style" ? s.d.S(M, typeof E.precedence == "string" ? E.precedence : void 0, { crossOrigin: B, integrity: w, fetchPriority: yt }) : U === "script" && s.d.X(M, { crossOrigin: B, integrity: w, fetchPriority: yt, nonce: typeof E.nonce == "string" ? E.nonce : void 0 });
    }
  }, Xt.preinitModule = function(M, E) {
    if (typeof M == "string") if (typeof E == "object" && E !== null) {
      if (E.as == null || E.as === "script") {
        var U = Q(E.as, E.crossOrigin);
        s.d.M(M, { crossOrigin: U, integrity: typeof E.integrity == "string" ? E.integrity : void 0, nonce: typeof E.nonce == "string" ? E.nonce : void 0 });
      }
    } else E == null && s.d.M(M);
  }, Xt.preload = function(M, E) {
    if (typeof M == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var U = E.as, B = Q(U, E.crossOrigin);
      s.d.L(M, U, { crossOrigin: B, integrity: typeof E.integrity == "string" ? E.integrity : void 0, nonce: typeof E.nonce == "string" ? E.nonce : void 0, type: typeof E.type == "string" ? E.type : void 0, fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0, referrerPolicy: typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0, imageSrcSet: typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0, imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0, media: typeof E.media == "string" ? E.media : void 0 });
    }
  }, Xt.preloadModule = function(M, E) {
    if (typeof M == "string") if (E) {
      var U = Q(E.as, E.crossOrigin);
      s.d.m(M, { as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0, crossOrigin: U, integrity: typeof E.integrity == "string" ? E.integrity : void 0 });
    } else s.d.m(M);
  }, Xt.requestFormReset = function(M) {
    s.d.r(M);
  }, Xt.unstable_batchedUpdates = function(M, E) {
    return M(E);
  }, Xt.useFormState = function(M, E, U) {
    return x.H.useFormState(M, E, U);
  }, Xt.useFormStatus = function() {
    return x.H.useHostTransitionStatus();
  }, Xt.version = "19.1.0", Xt;
}
var pd;
function Dh() {
  if (pd) return yi.exports;
  pd = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
    } catch (o) {
      console.error(o);
    }
  }
  return i(), yi.exports = Mh(), yi.exports;
}
/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var zd;
function Rh() {
  if (zd) return Ta;
  zd = 1;
  var i = Oh(), o = Ln(), v = Dh();
  function s(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++) l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function _(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function D(t) {
    var l = t, e = t;
    if (t.alternate) for (; l.return; ) l = l.return;
    else {
      t = l;
      do
        l = t, (l.flags & 4098) !== 0 && (e = l.return), t = l.return;
      while (t);
    }
    return l.tag === 3 ? e : null;
  }
  function x(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function Q(t) {
    if (D(t) !== t) throw Error(s(188));
  }
  function M(t) {
    var l = t.alternate;
    if (!l) {
      if (l = D(t), l === null) throw Error(s(188));
      return l !== t ? null : t;
    }
    for (var e = t, u = l; ; ) {
      var a = e.return;
      if (a === null) break;
      var n = a.alternate;
      if (n === null) {
        if (u = a.return, u !== null) {
          e = u;
          continue;
        }
        break;
      }
      if (a.child === n.child) {
        for (n = a.child; n; ) {
          if (n === e) return Q(a), t;
          if (n === u) return Q(a), l;
          n = n.sibling;
        }
        throw Error(s(188));
      }
      if (e.return !== u.return) e = a, u = n;
      else {
        for (var c = false, f = a.child; f; ) {
          if (f === e) {
            c = true, e = a, u = n;
            break;
          }
          if (f === u) {
            c = true, u = a, e = n;
            break;
          }
          f = f.sibling;
        }
        if (!c) {
          for (f = n.child; f; ) {
            if (f === e) {
              c = true, e = n, u = a;
              break;
            }
            if (f === u) {
              c = true, u = n, e = a;
              break;
            }
            f = f.sibling;
          }
          if (!c) throw Error(s(189));
        }
      }
      if (e.alternate !== u) throw Error(s(190));
    }
    if (e.tag !== 3) throw Error(s(188));
    return e.stateNode.current === e ? t : l;
  }
  function E(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (l = E(t), l !== null) return l;
      t = t.sibling;
    }
    return null;
  }
  var U = Object.assign, B = Symbol.for("react.element"), w = Symbol.for("react.transitional.element"), yt = Symbol.for("react.portal"), bt = Symbol.for("react.fragment"), mt = Symbol.for("react.strict_mode"), st = Symbol.for("react.profiler"), he = Symbol.for("react.provider"), zl = Symbol.for("react.consumer"), qt = Symbol.for("react.context"), hl = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), Kt = Symbol.for("react.suspense_list"), Jt = Symbol.for("react.memo"), Wt = Symbol.for("react.lazy"), bl = Symbol.for("react.activity"), Be = Symbol.for("react.memo_cache_sentinel"), Ol = Symbol.iterator;
  function jt(t) {
    return t === null || typeof t != "object" ? null : (t = Ol && t[Ol] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var ve = Symbol.for("react.client.reference");
  function me(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === ve ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case bt:
        return "Fragment";
      case st:
        return "Profiler";
      case mt:
        return "StrictMode";
      case I:
        return "Suspense";
      case Kt:
        return "SuspenseList";
      case bl:
        return "Activity";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case yt:
        return "Portal";
      case qt:
        return (t.displayName || "Context") + ".Provider";
      case zl:
        return (t._context.displayName || "Context") + ".Consumer";
      case hl:
        var l = t.render;
        return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case Jt:
        return l = t.displayName || null, l !== null ? l : me(t.type) || "Memo";
      case Wt:
        l = t._payload, t = t._init;
        try {
          return me(t(l));
        } catch {
        }
    }
    return null;
  }
  var Yt = Array.isArray, A = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = v.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = { pending: false, data: null, method: null, action: null }, rt = [], d = -1;
  function O(t) {
    return { current: t };
  }
  function q(t) {
    0 > d || (t.current = rt[d], rt[d] = null, d--);
  }
  function N(t, l) {
    d++, rt[d] = t.current, t.current = l;
  }
  var G = O(null), tt = O(null), L = O(null), $t = O(null);
  function ht(t, l) {
    switch (N(L, l), N(tt, t), N(G, null), l.nodeType) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? wo(t) : 0;
        break;
      default:
        if (t = l.tagName, l = l.namespaceURI) l = wo(l), t = Ko(l, t);
        else switch (t) {
          case "svg":
            t = 1;
            break;
          case "math":
            t = 2;
            break;
          default:
            t = 0;
        }
    }
    q(G), N(G, t);
  }
  function Zl() {
    q(G), q(tt), q(L);
  }
  function Kn(t) {
    t.memoizedState !== null && N($t, t);
    var l = G.current, e = Ko(l, t.type);
    l !== e && (N(tt, t), N(G, e));
  }
  function za(t) {
    tt.current === t && (q(G), q(tt)), $t.current === t && (q($t), ma._currentValue = Z);
  }
  var Jn = Object.prototype.hasOwnProperty, Wn = i.unstable_scheduleCallback, $n = i.unstable_cancelCallback, kd = i.unstable_shouldYield, Fd = i.unstable_requestPaint, Sl = i.unstable_now, Pd = i.unstable_getCurrentPriorityLevel, pi = i.unstable_ImmediatePriority, zi = i.unstable_UserBlockingPriority, Oa = i.unstable_NormalPriority, Id = i.unstable_LowPriority, Oi = i.unstable_IdlePriority, t0 = i.log, l0 = i.unstable_setDisableYieldValue, pu = null, kt = null;
  function Vl(t) {
    if (typeof t0 == "function" && l0(t), kt && typeof kt.setStrictMode == "function") try {
      kt.setStrictMode(pu, t);
    } catch {
    }
  }
  var Ft = Math.clz32 ? Math.clz32 : a0, e0 = Math.log, u0 = Math.LN2;
  function a0(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (e0(t) / u0 | 0) | 0;
  }
  var Ma = 256, Da = 4194304;
  function ge(t) {
    var l = t & 42;
    if (l !== 0) return l;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Ra(t, l, e) {
    var u = t.pendingLanes;
    if (u === 0) return 0;
    var a = 0, n = t.suspendedLanes, c = t.pingedLanes;
    t = t.warmLanes;
    var f = u & 134217727;
    return f !== 0 ? (u = f & ~n, u !== 0 ? a = ge(u) : (c &= f, c !== 0 ? a = ge(c) : e || (e = f & ~t, e !== 0 && (a = ge(e))))) : (f = u & ~n, f !== 0 ? a = ge(f) : c !== 0 ? a = ge(c) : e || (e = u & ~t, e !== 0 && (a = ge(e)))), a === 0 ? 0 : l !== 0 && l !== a && (l & n) === 0 && (n = a & -a, e = l & -l, n >= e || n === 32 && (e & 4194048) !== 0) ? l : a;
  }
  function zu(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function n0(t, l) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Mi() {
    var t = Ma;
    return Ma <<= 1, (Ma & 4194048) === 0 && (Ma = 256), t;
  }
  function Di() {
    var t = Da;
    return Da <<= 1, (Da & 62914560) === 0 && (Da = 4194304), t;
  }
  function kn(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function Ou(t, l) {
    t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function c0(t, l, e, u, a, n) {
    var c = t.pendingLanes;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
    var f = t.entanglements, r = t.expirationTimes, g = t.hiddenUpdates;
    for (e = c & ~e; 0 < e; ) {
      var T = 31 - Ft(e), z = 1 << T;
      f[T] = 0, r[T] = -1;
      var b = g[T];
      if (b !== null) for (g[T] = null, T = 0; T < b.length; T++) {
        var S = b[T];
        S !== null && (S.lane &= -536870913);
      }
      e &= ~z;
    }
    u !== 0 && Ri(t, u, 0), n !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(c & ~l));
  }
  function Ri(t, l, e) {
    t.pendingLanes |= l, t.suspendedLanes &= ~l;
    var u = 31 - Ft(l);
    t.entangledLanes |= l, t.entanglements[u] = t.entanglements[u] | 1073741824 | e & 4194090;
  }
  function xi(t, l) {
    var e = t.entangledLanes |= l;
    for (t = t.entanglements; e; ) {
      var u = 31 - Ft(e), a = 1 << u;
      a & l | t[u] & l && (t[u] |= l), e &= ~a;
    }
  }
  function Fn(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Pn(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ui() {
    var t = H.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : od(t.type));
  }
  function f0(t, l) {
    var e = H.p;
    try {
      return H.p = t, l();
    } finally {
      H.p = e;
    }
  }
  var Ll = Math.random().toString(36).slice(2), Bt = "__reactFiber$" + Ll, Ct = "__reactProps$" + Ll, Ge = "__reactContainer$" + Ll, In = "__reactEvents$" + Ll, i0 = "__reactListeners$" + Ll, s0 = "__reactHandles$" + Ll, Ni = "__reactResources$" + Ll, Mu = "__reactMarker$" + Ll;
  function tc(t) {
    delete t[Bt], delete t[Ct], delete t[In], delete t[i0], delete t[s0];
  }
  function Xe(t) {
    var l = t[Bt];
    if (l) return l;
    for (var e = t.parentNode; e; ) {
      if (l = e[Ge] || e[Bt]) {
        if (e = l.alternate, l.child !== null || e !== null && e.child !== null) for (t = ko(t); t !== null; ) {
          if (e = t[Bt]) return e;
          t = ko(t);
        }
        return l;
      }
      t = e, e = t.parentNode;
    }
    return null;
  }
  function Qe(t) {
    if (t = t[Bt] || t[Ge]) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 26 || l === 27 || l === 3) return t;
    }
    return null;
  }
  function Du(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(s(33));
  }
  function Ce(t) {
    var l = t[Ni];
    return l || (l = t[Ni] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function Mt(t) {
    t[Mu] = true;
  }
  var Hi = /* @__PURE__ */ new Set(), qi = {};
  function be(t, l) {
    Ze(t, l), Ze(t + "Capture", l);
  }
  function Ze(t, l) {
    for (qi[t] = l, t = 0; t < l.length; t++) Hi.add(l[t]);
  }
  var r0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), ji = {}, Yi = {};
  function o0(t) {
    return Jn.call(Yi, t) ? true : Jn.call(ji, t) ? false : r0.test(t) ? Yi[t] = true : (ji[t] = true, false);
  }
  function xa(t, l, e) {
    if (o0(l)) if (e === null) t.removeAttribute(l);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
          t.removeAttribute(l);
          return;
        case "boolean":
          var u = l.toLowerCase().slice(0, 5);
          if (u !== "data-" && u !== "aria-") {
            t.removeAttribute(l);
            return;
          }
      }
      t.setAttribute(l, "" + e);
    }
  }
  function Ua(t, l, e) {
    if (e === null) t.removeAttribute(l);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttribute(l, "" + e);
    }
  }
  function Ml(t, l, e, u) {
    if (u === null) t.removeAttribute(e);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttributeNS(l, e, "" + u);
    }
  }
  var lc, Bi;
  function Ve(t) {
    if (lc === void 0) try {
      throw Error();
    } catch (e) {
      var l = e.stack.trim().match(/\n( *(at )?)/);
      lc = l && l[1] || "", Bi = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + lc + t + Bi;
  }
  var ec = false;
  function uc(t, l) {
    if (!t || ec) return "";
    ec = true;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = { DetermineComponentFrameRoot: function() {
        try {
          if (l) {
            var z = function() {
              throw Error();
            };
            if (Object.defineProperty(z.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(z, []);
              } catch (S) {
                var b = S;
              }
              Reflect.construct(t, [], z);
            } else {
              try {
                z.call();
              } catch (S) {
                b = S;
              }
              t.call(z.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (S) {
              b = S;
            }
            (z = t()) && typeof z.catch == "function" && z.catch(function() {
            });
          }
        } catch (S) {
          if (S && b && typeof S.stack == "string") return [S.stack, b.stack];
        }
        return [null, null];
      } };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot, "name");
      a && a.configurable && Object.defineProperty(u.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var n = u.DetermineComponentFrameRoot(), c = n[0], f = n[1];
      if (c && f) {
        var r = c.split(`
`), g = f.split(`
`);
        for (a = u = 0; u < r.length && !r[u].includes("DetermineComponentFrameRoot"); ) u++;
        for (; a < g.length && !g[a].includes("DetermineComponentFrameRoot"); ) a++;
        if (u === r.length || a === g.length) for (u = r.length - 1, a = g.length - 1; 1 <= u && 0 <= a && r[u] !== g[a]; ) a--;
        for (; 1 <= u && 0 <= a; u--, a--) if (r[u] !== g[a]) {
          if (u !== 1 || a !== 1) do
            if (u--, a--, 0 > a || r[u] !== g[a]) {
              var T = `
` + r[u].replace(" at new ", " at ");
              return t.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", t.displayName)), T;
            }
          while (1 <= u && 0 <= a);
          break;
        }
      }
    } finally {
      ec = false, Error.prepareStackTrace = e;
    }
    return (e = t ? t.displayName || t.name : "") ? Ve(e) : "";
  }
  function d0(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ve(t.type);
      case 16:
        return Ve("Lazy");
      case 13:
        return Ve("Suspense");
      case 19:
        return Ve("SuspenseList");
      case 0:
      case 15:
        return uc(t.type, false);
      case 11:
        return uc(t.type.render, false);
      case 1:
        return uc(t.type, true);
      case 31:
        return Ve("Activity");
      default:
        return "";
    }
  }
  function Gi(t) {
    try {
      var l = "";
      do
        l += d0(t), t = t.return;
      while (t);
      return l;
    } catch (e) {
      return `
Error generating stack: ` + e.message + `
` + e.stack;
    }
  }
  function nl(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Xi(t) {
    var l = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function y0(t) {
    var l = Xi(t) ? "checked" : "value", e = Object.getOwnPropertyDescriptor(t.constructor.prototype, l), u = "" + t[l];
    if (!t.hasOwnProperty(l) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
      var a = e.get, n = e.set;
      return Object.defineProperty(t, l, { configurable: true, get: function() {
        return a.call(this);
      }, set: function(c) {
        u = "" + c, n.call(this, c);
      } }), Object.defineProperty(t, l, { enumerable: e.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(c) {
        u = "" + c;
      }, stopTracking: function() {
        t._valueTracker = null, delete t[l];
      } };
    }
  }
  function Na(t) {
    t._valueTracker || (t._valueTracker = y0(t));
  }
  function Qi(t) {
    if (!t) return false;
    var l = t._valueTracker;
    if (!l) return true;
    var e = l.getValue(), u = "";
    return t && (u = Xi(t) ? t.checked ? "true" : "false" : t.value), t = u, t !== e ? (l.setValue(t), true) : false;
  }
  function Ha(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var h0 = /[\n"\\]/g;
  function cl(t) {
    return t.replace(h0, function(l) {
      return "\\" + l.charCodeAt(0).toString(16) + " ";
    });
  }
  function ac(t, l, e, u, a, n, c, f) {
    t.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.type = c : t.removeAttribute("type"), l != null ? c === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + nl(l)) : t.value !== "" + nl(l) && (t.value = "" + nl(l)) : c !== "submit" && c !== "reset" || t.removeAttribute("value"), l != null ? nc(t, c, nl(l)) : e != null ? nc(t, c, nl(e)) : u != null && t.removeAttribute("value"), a == null && n != null && (t.defaultChecked = !!n), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.name = "" + nl(f) : t.removeAttribute("name");
  }
  function Ci(t, l, e, u, a, n, c, f) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (t.type = n), l != null || e != null) {
      if (!(n !== "submit" && n !== "reset" || l != null)) return;
      e = e != null ? "" + nl(e) : "", l = l != null ? "" + nl(l) : e, f || l === t.value || (t.value = l), t.defaultValue = l;
    }
    u = u ?? a, u = typeof u != "function" && typeof u != "symbol" && !!u, t.checked = f ? t.checked : !!u, t.defaultChecked = !!u, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.name = c);
  }
  function nc(t, l, e) {
    l === "number" && Ha(t.ownerDocument) === t || t.defaultValue === "" + e || (t.defaultValue = "" + e);
  }
  function Le(t, l, e, u) {
    if (t = t.options, l) {
      l = {};
      for (var a = 0; a < e.length; a++) l["$" + e[a]] = true;
      for (e = 0; e < t.length; e++) a = l.hasOwnProperty("$" + t[e].value), t[e].selected !== a && (t[e].selected = a), a && u && (t[e].defaultSelected = true);
    } else {
      for (e = "" + nl(e), l = null, a = 0; a < t.length; a++) {
        if (t[a].value === e) {
          t[a].selected = true, u && (t[a].defaultSelected = true);
          return;
        }
        l !== null || t[a].disabled || (l = t[a]);
      }
      l !== null && (l.selected = true);
    }
  }
  function Zi(t, l, e) {
    if (l != null && (l = "" + nl(l), l !== t.value && (t.value = l), e == null)) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + nl(e) : "";
  }
  function Vi(t, l, e, u) {
    if (l == null) {
      if (u != null) {
        if (e != null) throw Error(s(92));
        if (Yt(u)) {
          if (1 < u.length) throw Error(s(93));
          u = u[0];
        }
        e = u;
      }
      e == null && (e = ""), l = e;
    }
    e = nl(l), t.defaultValue = e, u = t.textContent, u === e && u !== "" && u !== null && (t.value = u);
  }
  function we(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var v0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Li(t, l, e) {
    var u = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? u ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : u ? t.setProperty(l, e) : typeof e != "number" || e === 0 || v0.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px";
  }
  function wi(t, l, e) {
    if (l != null && typeof l != "object") throw Error(s(62));
    if (t = t.style, e != null) {
      for (var u in e) !e.hasOwnProperty(u) || l != null && l.hasOwnProperty(u) || (u.indexOf("--") === 0 ? t.setProperty(u, "") : u === "float" ? t.cssFloat = "" : t[u] = "");
      for (var a in l) u = l[a], l.hasOwnProperty(a) && e[a] !== u && Li(t, a, u);
    } else for (var n in l) l.hasOwnProperty(n) && Li(t, n, l[n]);
  }
  function cc(t) {
    if (t.indexOf("-") === -1) return false;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var m0 = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), g0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function qa(t) {
    return g0.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var fc = null;
  function ic(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Ke = null, Je = null;
  function Ki(t) {
    var l = Qe(t);
    if (l && (t = l.stateNode)) {
      var e = t[Ct] || null;
      t: switch (t = l.stateNode, l.type) {
        case "input":
          if (ac(t, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name), l = e.name, e.type === "radio" && l != null) {
            for (e = t; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll('input[name="' + cl("" + l) + '"][type="radio"]'), l = 0; l < e.length; l++) {
              var u = e[l];
              if (u !== t && u.form === t.form) {
                var a = u[Ct] || null;
                if (!a) throw Error(s(90));
                ac(u, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
              }
            }
            for (l = 0; l < e.length; l++) u = e[l], u.form === t.form && Qi(u);
          }
          break t;
        case "textarea":
          Zi(t, e.value, e.defaultValue);
          break t;
        case "select":
          l = e.value, l != null && Le(t, !!e.multiple, l, false);
      }
    }
  }
  var sc = false;
  function Ji(t, l, e) {
    if (sc) return t(l, e);
    sc = true;
    try {
      var u = t(l);
      return u;
    } finally {
      if (sc = false, (Ke !== null || Je !== null) && (_n(), Ke && (l = Ke, t = Je, Je = Ke = null, Ki(l), t))) for (l = 0; l < t.length; l++) Ki(t[l]);
    }
  }
  function Ru(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var u = e[Ct] || null;
    if (u === null) return null;
    e = u[l];
    t: switch (l) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) || (t = t.type, u = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !u;
        break t;
      default:
        t = false;
    }
    if (t) return null;
    if (e && typeof e != "function") throw Error(s(231, l, typeof e));
    return e;
  }
  var Dl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), rc = false;
  if (Dl) try {
    var xu = {};
    Object.defineProperty(xu, "passive", { get: function() {
      rc = true;
    } }), window.addEventListener("test", xu, xu), window.removeEventListener("test", xu, xu);
  } catch {
    rc = false;
  }
  var wl = null, oc = null, ja = null;
  function Wi() {
    if (ja) return ja;
    var t, l = oc, e = l.length, u, a = "value" in wl ? wl.value : wl.textContent, n = a.length;
    for (t = 0; t < e && l[t] === a[t]; t++) ;
    var c = e - t;
    for (u = 1; u <= c && l[e - u] === a[n - u]; u++) ;
    return ja = a.slice(t, 1 < u ? 1 - u : void 0);
  }
  function Ya(t) {
    var l = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Ba() {
    return true;
  }
  function $i() {
    return false;
  }
  function Zt(t) {
    function l(e, u, a, n, c) {
      this._reactName = e, this._targetInst = a, this.type = u, this.nativeEvent = n, this.target = c, this.currentTarget = null;
      for (var f in t) t.hasOwnProperty(f) && (e = t[f], this[f] = e ? e(n) : n[f]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === false) ? Ba : $i, this.isPropagationStopped = $i, this;
    }
    return U(l.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var e = this.nativeEvent;
      e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = false), this.isDefaultPrevented = Ba);
    }, stopPropagation: function() {
      var e = this.nativeEvent;
      e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = true), this.isPropagationStopped = Ba);
    }, persist: function() {
    }, isPersistent: Ba }), l;
  }
  var Se = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
    return t.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ga = Zt(Se), Uu = U({}, Se, { view: 0, detail: 0 }), b0 = Zt(Uu), dc, yc, Nu, Xa = U({}, Uu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: vc, button: 0, buttons: 0, relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  }, movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== Nu && (Nu && t.type === "mousemove" ? (dc = t.screenX - Nu.screenX, yc = t.screenY - Nu.screenY) : yc = dc = 0, Nu = t), dc);
  }, movementY: function(t) {
    return "movementY" in t ? t.movementY : yc;
  } }), ki = Zt(Xa), S0 = U({}, Xa, { dataTransfer: 0 }), _0 = Zt(S0), E0 = U({}, Uu, { relatedTarget: 0 }), hc = Zt(E0), T0 = U({}, Se, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), A0 = Zt(T0), p0 = U({}, Se, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } }), z0 = Zt(p0), O0 = U({}, Se, { data: 0 }), Fi = Zt(O0), M0 = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, D0 = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, R0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function x0(t) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(t) : (t = R0[t]) ? !!l[t] : false;
  }
  function vc() {
    return x0;
  }
  var U0 = U({}, Uu, { key: function(t) {
    if (t.key) {
      var l = M0[t.key] || t.key;
      if (l !== "Unidentified") return l;
    }
    return t.type === "keypress" ? (t = Ya(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? D0[t.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: vc, charCode: function(t) {
    return t.type === "keypress" ? Ya(t) : 0;
  }, keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }, which: function(t) {
    return t.type === "keypress" ? Ya(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  } }), N0 = Zt(U0), H0 = U({}, Xa, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Pi = Zt(H0), q0 = U({}, Uu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: vc }), j0 = Zt(q0), Y0 = U({}, Se, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), B0 = Zt(Y0), G0 = U({}, Xa, { deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  }, deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), X0 = Zt(G0), Q0 = U({}, Se, { newState: 0, oldState: 0 }), C0 = Zt(Q0), Z0 = [9, 13, 27, 32], mc = Dl && "CompositionEvent" in window, Hu = null;
  Dl && "documentMode" in document && (Hu = document.documentMode);
  var V0 = Dl && "TextEvent" in window && !Hu, Ii = Dl && (!mc || Hu && 8 < Hu && 11 >= Hu), ts = " ", ls = false;
  function es(t, l) {
    switch (t) {
      case "keyup":
        return Z0.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function us(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var We = false;
  function L0(t, l) {
    switch (t) {
      case "compositionend":
        return us(l);
      case "keypress":
        return l.which !== 32 ? null : (ls = true, ts);
      case "textInput":
        return t = l.data, t === ts && ls ? null : t;
      default:
        return null;
    }
  }
  function w0(t, l) {
    if (We) return t === "compositionend" || !mc && es(t, l) ? (t = Wi(), ja = oc = wl = null, We = false, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
          if (l.char && 1 < l.char.length) return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return Ii && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var K0 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function as(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!K0[t.type] : l === "textarea";
  }
  function ns(t, l, e, u) {
    Ke ? Je ? Je.push(u) : Je = [u] : Ke = u, l = On(l, "onChange"), 0 < l.length && (e = new Ga("onChange", "change", null, e, u), t.push({ event: e, listeners: l }));
  }
  var qu = null, ju = null;
  function J0(t) {
    Qo(t, 0);
  }
  function Qa(t) {
    var l = Du(t);
    if (Qi(l)) return t;
  }
  function cs(t, l) {
    if (t === "change") return l;
  }
  var fs = false;
  if (Dl) {
    var gc;
    if (Dl) {
      var bc = "oninput" in document;
      if (!bc) {
        var is = document.createElement("div");
        is.setAttribute("oninput", "return;"), bc = typeof is.oninput == "function";
      }
      gc = bc;
    } else gc = false;
    fs = gc && (!document.documentMode || 9 < document.documentMode);
  }
  function ss() {
    qu && (qu.detachEvent("onpropertychange", rs), ju = qu = null);
  }
  function rs(t) {
    if (t.propertyName === "value" && Qa(ju)) {
      var l = [];
      ns(l, ju, t, ic(t)), Ji(J0, l);
    }
  }
  function W0(t, l, e) {
    t === "focusin" ? (ss(), qu = l, ju = e, qu.attachEvent("onpropertychange", rs)) : t === "focusout" && ss();
  }
  function $0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return Qa(ju);
  }
  function k0(t, l) {
    if (t === "click") return Qa(l);
  }
  function F0(t, l) {
    if (t === "input" || t === "change") return Qa(l);
  }
  function P0(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var Pt = typeof Object.is == "function" ? Object.is : P0;
  function Yu(t, l) {
    if (Pt(t, l)) return true;
    if (typeof t != "object" || t === null || typeof l != "object" || l === null) return false;
    var e = Object.keys(t), u = Object.keys(l);
    if (e.length !== u.length) return false;
    for (u = 0; u < e.length; u++) {
      var a = e[u];
      if (!Jn.call(l, a) || !Pt(t[a], l[a])) return false;
    }
    return true;
  }
  function os(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function ds(t, l) {
    var e = os(t);
    t = 0;
    for (var u; e; ) {
      if (e.nodeType === 3) {
        if (u = t + e.textContent.length, t <= l && u >= l) return { node: e, offset: l - t };
        t = u;
      }
      t: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break t;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = os(e);
    }
  }
  function ys(t, l) {
    return t && l ? t === l ? true : t && t.nodeType === 3 ? false : l && l.nodeType === 3 ? ys(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : false : false;
  }
  function hs(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var l = Ha(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = false;
      }
      if (e) t = l.contentWindow;
      else break;
      l = Ha(t.document);
    }
    return l;
  }
  function Sc(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
  }
  var I0 = Dl && "documentMode" in document && 11 >= document.documentMode, $e = null, _c = null, Bu = null, Ec = false;
  function vs(t, l, e) {
    var u = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Ec || $e == null || $e !== Ha(u) || (u = $e, "selectionStart" in u && Sc(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), Bu && Yu(Bu, u) || (Bu = u, u = On(_c, "onSelect"), 0 < u.length && (l = new Ga("onSelect", "select", null, l, e), t.push({ event: l, listeners: u }), l.target = $e)));
  }
  function _e(t, l) {
    var e = {};
    return e[t.toLowerCase()] = l.toLowerCase(), e["Webkit" + t] = "webkit" + l, e["Moz" + t] = "moz" + l, e;
  }
  var ke = { animationend: _e("Animation", "AnimationEnd"), animationiteration: _e("Animation", "AnimationIteration"), animationstart: _e("Animation", "AnimationStart"), transitionrun: _e("Transition", "TransitionRun"), transitionstart: _e("Transition", "TransitionStart"), transitioncancel: _e("Transition", "TransitionCancel"), transitionend: _e("Transition", "TransitionEnd") }, Tc = {}, ms = {};
  Dl && (ms = document.createElement("div").style, "AnimationEvent" in window || (delete ke.animationend.animation, delete ke.animationiteration.animation, delete ke.animationstart.animation), "TransitionEvent" in window || delete ke.transitionend.transition);
  function Ee(t) {
    if (Tc[t]) return Tc[t];
    if (!ke[t]) return t;
    var l = ke[t], e;
    for (e in l) if (l.hasOwnProperty(e) && e in ms) return Tc[t] = l[e];
    return t;
  }
  var gs = Ee("animationend"), bs = Ee("animationiteration"), Ss = Ee("animationstart"), ty = Ee("transitionrun"), ly = Ee("transitionstart"), ey = Ee("transitioncancel"), _s = Ee("transitionend"), Es = /* @__PURE__ */ new Map(), Ac = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Ac.push("scrollEnd");
  function vl(t, l) {
    Es.set(t, l), be(l, [t]);
  }
  var Ts = /* @__PURE__ */ new WeakMap();
  function fl(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = Ts.get(t);
      return e !== void 0 ? e : (l = { value: t, source: l, stack: Gi(l) }, Ts.set(t, l), l);
    }
    return { value: t, source: l, stack: Gi(l) };
  }
  var il = [], Fe = 0, pc = 0;
  function Ca() {
    for (var t = Fe, l = pc = Fe = 0; l < t; ) {
      var e = il[l];
      il[l++] = null;
      var u = il[l];
      il[l++] = null;
      var a = il[l];
      il[l++] = null;
      var n = il[l];
      if (il[l++] = null, u !== null && a !== null) {
        var c = u.pending;
        c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a;
      }
      n !== 0 && As(e, a, n);
    }
  }
  function Za(t, l, e, u) {
    il[Fe++] = t, il[Fe++] = l, il[Fe++] = e, il[Fe++] = u, pc |= u, t.lanes |= u, t = t.alternate, t !== null && (t.lanes |= u);
  }
  function zc(t, l, e, u) {
    return Za(t, l, e, u), Va(t);
  }
  function Pe(t, l) {
    return Za(t, null, null, l), Va(t);
  }
  function As(t, l, e) {
    t.lanes |= e;
    var u = t.alternate;
    u !== null && (u.lanes |= e);
    for (var a = false, n = t.return; n !== null; ) n.childLanes |= e, u = n.alternate, u !== null && (u.childLanes |= e), n.tag === 22 && (t = n.stateNode, t === null || t._visibility & 1 || (a = true)), t = n, n = n.return;
    return t.tag === 3 ? (n = t.stateNode, a && l !== null && (a = 31 - Ft(e), t = n.hiddenUpdates, u = t[a], u === null ? t[a] = [l] : u.push(l), l.lane = e | 536870912), n) : null;
  }
  function Va(t) {
    if (50 < ia) throw ia = 0, Nf = null, Error(s(185));
    for (var l = t.return; l !== null; ) t = l, l = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ie = {};
  function uy(t, l, e, u) {
    this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function It(t, l, e, u) {
    return new uy(t, l, e, u);
  }
  function Oc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Rl(t, l) {
    var e = t.alternate;
    return e === null ? (e = It(t.tag, l, t.key, t.mode), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 65011712, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e;
  }
  function ps(t, l) {
    t.flags &= 65011714;
    var e = t.alternate;
    return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }), t;
  }
  function La(t, l, e, u, a, n) {
    var c = 0;
    if (u = t, typeof t == "function") Oc(t) && (c = 1);
    else if (typeof t == "string") c = nh(t, e, G.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else t: switch (t) {
      case bl:
        return t = It(31, e, l, a), t.elementType = bl, t.lanes = n, t;
      case bt:
        return Te(e.children, a, n, l);
      case mt:
        c = 8, a |= 24;
        break;
      case st:
        return t = It(12, e, l, a | 2), t.elementType = st, t.lanes = n, t;
      case I:
        return t = It(13, e, l, a), t.elementType = I, t.lanes = n, t;
      case Kt:
        return t = It(19, e, l, a), t.elementType = Kt, t.lanes = n, t;
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case he:
          case qt:
            c = 10;
            break t;
          case zl:
            c = 9;
            break t;
          case hl:
            c = 11;
            break t;
          case Jt:
            c = 14;
            break t;
          case Wt:
            c = 16, u = null;
            break t;
        }
        c = 29, e = Error(s(130, t === null ? "null" : typeof t, "")), u = null;
    }
    return l = It(c, e, l, a), l.elementType = t, l.type = u, l.lanes = n, l;
  }
  function Te(t, l, e, u) {
    return t = It(7, t, u, l), t.lanes = e, t;
  }
  function Mc(t, l, e) {
    return t = It(6, t, null, l), t.lanes = e, t;
  }
  function Dc(t, l, e) {
    return l = It(4, t.children !== null ? t.children : [], t.key, l), l.lanes = e, l.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, l;
  }
  var tu = [], lu = 0, wa = null, Ka = 0, sl = [], rl = 0, Ae = null, xl = 1, Ul = "";
  function pe(t, l) {
    tu[lu++] = Ka, tu[lu++] = wa, wa = t, Ka = l;
  }
  function zs(t, l, e) {
    sl[rl++] = xl, sl[rl++] = Ul, sl[rl++] = Ae, Ae = t;
    var u = xl;
    t = Ul;
    var a = 32 - Ft(u) - 1;
    u &= ~(1 << a), e += 1;
    var n = 32 - Ft(l) + a;
    if (30 < n) {
      var c = a - a % 5;
      n = (u & (1 << c) - 1).toString(32), u >>= c, a -= c, xl = 1 << 32 - Ft(l) + a | e << a | u, Ul = n + t;
    } else xl = 1 << n | e << a | u, Ul = t;
  }
  function Rc(t) {
    t.return !== null && (pe(t, 1), zs(t, 1, 0));
  }
  function xc(t) {
    for (; t === wa; ) wa = tu[--lu], tu[lu] = null, Ka = tu[--lu], tu[lu] = null;
    for (; t === Ae; ) Ae = sl[--rl], sl[rl] = null, Ul = sl[--rl], sl[rl] = null, xl = sl[--rl], sl[rl] = null;
  }
  var Qt = null, St = null, et = false, ze = null, _l = false, Uc = Error(s(519));
  function Oe(t) {
    var l = Error(s(418, ""));
    throw Qu(fl(l, t)), Uc;
  }
  function Os(t) {
    var l = t.stateNode, e = t.type, u = t.memoizedProps;
    switch (l[Bt] = t, l[Ct] = u, e) {
      case "dialog":
        k("cancel", l), k("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        k("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < ra.length; e++) k(ra[e], l);
        break;
      case "source":
        k("error", l);
        break;
      case "img":
      case "image":
      case "link":
        k("error", l), k("load", l);
        break;
      case "details":
        k("toggle", l);
        break;
      case "input":
        k("invalid", l), Ci(l, u.value, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name, true), Na(l);
        break;
      case "select":
        k("invalid", l);
        break;
      case "textarea":
        k("invalid", l), Vi(l, u.value, u.defaultValue, u.children), Na(l);
    }
    e = u.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || u.suppressHydrationWarning === true || Lo(l.textContent, e) ? (u.popover != null && (k("beforetoggle", l), k("toggle", l)), u.onScroll != null && k("scroll", l), u.onScrollEnd != null && k("scrollend", l), u.onClick != null && (l.onclick = Mn), l = true) : l = false, l || Oe(t);
  }
  function Ms(t) {
    for (Qt = t.return; Qt; ) switch (Qt.tag) {
      case 5:
      case 13:
        _l = false;
        return;
      case 27:
      case 3:
        _l = true;
        return;
      default:
        Qt = Qt.return;
    }
  }
  function Gu(t) {
    if (t !== Qt) return false;
    if (!et) return Ms(t), et = true, false;
    var l = t.tag, e;
    if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || Wf(t.type, t.memoizedProps)), e = !e), e && St && Oe(t), Ms(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
      t: {
        for (t = t.nextSibling, l = 0; t; ) {
          if (t.nodeType === 8) if (e = t.data, e === "/$") {
            if (l === 0) {
              St = gl(t.nextSibling);
              break t;
            }
            l--;
          } else e !== "$" && e !== "$!" && e !== "$?" || l++;
          t = t.nextSibling;
        }
        St = null;
      }
    } else l === 27 ? (l = St, fe(t.type) ? (t = Pf, Pf = null, St = t) : St = l) : St = Qt ? gl(t.stateNode.nextSibling) : null;
    return true;
  }
  function Xu() {
    St = Qt = null, et = false;
  }
  function Ds() {
    var t = ze;
    return t !== null && (wt === null ? wt = t : wt.push.apply(wt, t), ze = null), t;
  }
  function Qu(t) {
    ze === null ? ze = [t] : ze.push(t);
  }
  var Nc = O(null), Me = null, Nl = null;
  function Kl(t, l, e) {
    N(Nc, l._currentValue), l._currentValue = e;
  }
  function Hl(t) {
    t._currentValue = Nc.current, q(Nc);
  }
  function Hc(t, l, e) {
    for (; t !== null; ) {
      var u = t.alternate;
      if ((t.childLanes & l) !== l ? (t.childLanes |= l, u !== null && (u.childLanes |= l)) : u !== null && (u.childLanes & l) !== l && (u.childLanes |= l), t === e) break;
      t = t.return;
    }
  }
  function qc(t, l, e, u) {
    var a = t.child;
    for (a !== null && (a.return = t); a !== null; ) {
      var n = a.dependencies;
      if (n !== null) {
        var c = a.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var f = n;
          n = a;
          for (var r = 0; r < l.length; r++) if (f.context === l[r]) {
            n.lanes |= e, f = n.alternate, f !== null && (f.lanes |= e), Hc(n.return, e, t), u || (c = null);
            break t;
          }
          n = f.next;
        }
      } else if (a.tag === 18) {
        if (c = a.return, c === null) throw Error(s(341));
        c.lanes |= e, n = c.alternate, n !== null && (n.lanes |= e), Hc(c, e, t), c = null;
      } else c = a.child;
      if (c !== null) c.return = a;
      else for (c = a; c !== null; ) {
        if (c === t) {
          c = null;
          break;
        }
        if (a = c.sibling, a !== null) {
          a.return = c.return, c = a;
          break;
        }
        c = c.return;
      }
      a = c;
    }
  }
  function Cu(t, l, e, u) {
    t = null;
    for (var a = l, n = false; a !== null; ) {
      if (!n) {
        if ((a.flags & 524288) !== 0) n = true;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var c = a.alternate;
        if (c === null) throw Error(s(387));
        if (c = c.memoizedProps, c !== null) {
          var f = a.type;
          Pt(a.pendingProps.value, c.value) || (t !== null ? t.push(f) : t = [f]);
        }
      } else if (a === $t.current) {
        if (c = a.alternate, c === null) throw Error(s(387));
        c.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push(ma) : t = [ma]);
      }
      a = a.return;
    }
    t !== null && qc(l, t, e, u), l.flags |= 262144;
  }
  function Ja(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Pt(t.context._currentValue, t.memoizedValue)) return true;
      t = t.next;
    }
    return false;
  }
  function De(t) {
    Me = t, Nl = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Gt(t) {
    return Rs(Me, t);
  }
  function Wa(t, l) {
    return Me === null && De(t), Rs(t, l);
  }
  function Rs(t, l) {
    var e = l._currentValue;
    if (l = { context: l, memoizedValue: e, next: null }, Nl === null) {
      if (t === null) throw Error(s(308));
      Nl = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
    } else Nl = Nl.next = l;
    return e;
  }
  var ay = typeof AbortController < "u" ? AbortController : function() {
    var t = [], l = this.signal = { aborted: false, addEventListener: function(e, u) {
      t.push(u);
    } };
    this.abort = function() {
      l.aborted = true, t.forEach(function(e) {
        return e();
      });
    };
  }, ny = i.unstable_scheduleCallback, cy = i.unstable_NormalPriority, zt = { $$typeof: qt, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function jc() {
    return { controller: new ay(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function Zu(t) {
    t.refCount--, t.refCount === 0 && ny(cy, function() {
      t.controller.abort();
    });
  }
  var Vu = null, Yc = 0, eu = 0, uu = null;
  function fy(t, l) {
    if (Vu === null) {
      var e = Vu = [];
      Yc = 0, eu = Xf(), uu = { status: "pending", value: void 0, then: function(u) {
        e.push(u);
      } };
    }
    return Yc++, l.then(xs, xs), l;
  }
  function xs() {
    if (--Yc === 0 && Vu !== null) {
      uu !== null && (uu.status = "fulfilled");
      var t = Vu;
      Vu = null, eu = 0, uu = null;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function iy(t, l) {
    var e = [], u = { status: "pending", value: null, reason: null, then: function(a) {
      e.push(a);
    } };
    return t.then(function() {
      u.status = "fulfilled", u.value = l;
      for (var a = 0; a < e.length; a++) (0, e[a])(l);
    }, function(a) {
      for (u.status = "rejected", u.reason = a, a = 0; a < e.length; a++) (0, e[a])(void 0);
    }), u;
  }
  var Us = A.S;
  A.S = function(t, l) {
    typeof l == "object" && l !== null && typeof l.then == "function" && fy(t, l), Us !== null && Us(t, l);
  };
  var Re = O(null);
  function Bc() {
    var t = Re.current;
    return t !== null ? t : dt.pooledCache;
  }
  function $a(t, l) {
    l === null ? N(Re, Re.current) : N(Re, l.pool);
  }
  function Ns() {
    var t = Bc();
    return t === null ? null : { parent: zt._currentValue, pool: t };
  }
  var Lu = Error(s(460)), Hs = Error(s(474)), ka = Error(s(542)), Gc = { then: function() {
  } };
  function qs(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Fa() {
  }
  function js(t, l, e) {
    switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(Fa, Fa), l = e), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw t = l.reason, Bs(t), t;
      default:
        if (typeof l.status == "string") l.then(Fa, Fa);
        else {
          if (t = dt, t !== null && 100 < t.shellSuspendCounter) throw Error(s(482));
          t = l, t.status = "pending", t.then(function(u) {
            if (l.status === "pending") {
              var a = l;
              a.status = "fulfilled", a.value = u;
            }
          }, function(u) {
            if (l.status === "pending") {
              var a = l;
              a.status = "rejected", a.reason = u;
            }
          });
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw t = l.reason, Bs(t), t;
        }
        throw wu = l, Lu;
    }
  }
  var wu = null;
  function Ys() {
    if (wu === null) throw Error(s(459));
    var t = wu;
    return wu = null, t;
  }
  function Bs(t) {
    if (t === Lu || t === ka) throw Error(s(483));
  }
  var Jl = false;
  function Xc(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function Qc(t, l) {
    t = t.updateQueue, l.updateQueue === t && (l.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, callbacks: null });
  }
  function Wl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function $l(t, l, e) {
    var u = t.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (at & 2) !== 0) {
      var a = u.pending;
      return a === null ? l.next = l : (l.next = a.next, a.next = l), u.pending = l, l = Va(t), As(t, null, e), l;
    }
    return Za(t, u, l, e), Va(t);
  }
  function Ku(t, l, e) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
      var u = l.lanes;
      u &= t.pendingLanes, e |= u, l.lanes = e, xi(t, e);
    }
  }
  function Cc(t, l) {
    var e = t.updateQueue, u = t.alternate;
    if (u !== null && (u = u.updateQueue, e === u)) {
      var a = null, n = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var c = { lane: e.lane, tag: e.tag, payload: e.payload, callback: null, next: null };
          n === null ? a = n = c : n = n.next = c, e = e.next;
        } while (e !== null);
        n === null ? a = n = l : n = n.next = l;
      } else a = n = l;
      e = { baseState: u.baseState, firstBaseUpdate: a, lastBaseUpdate: n, shared: u.shared, callbacks: u.callbacks }, t.updateQueue = e;
      return;
    }
    t = e.lastBaseUpdate, t === null ? e.firstBaseUpdate = l : t.next = l, e.lastBaseUpdate = l;
  }
  var Zc = false;
  function Ju() {
    if (Zc) {
      var t = uu;
      if (t !== null) throw t;
    }
  }
  function Wu(t, l, e, u) {
    Zc = false;
    var a = t.updateQueue;
    Jl = false;
    var n = a.firstBaseUpdate, c = a.lastBaseUpdate, f = a.shared.pending;
    if (f !== null) {
      a.shared.pending = null;
      var r = f, g = r.next;
      r.next = null, c === null ? n = g : c.next = g, c = r;
      var T = t.alternate;
      T !== null && (T = T.updateQueue, f = T.lastBaseUpdate, f !== c && (f === null ? T.firstBaseUpdate = g : f.next = g, T.lastBaseUpdate = r));
    }
    if (n !== null) {
      var z = a.baseState;
      c = 0, T = g = r = null, f = n;
      do {
        var b = f.lane & -536870913, S = b !== f.lane;
        if (S ? (P & b) === b : (u & b) === b) {
          b !== 0 && b === eu && (Zc = true), T !== null && (T = T.next = { lane: 0, tag: f.tag, payload: f.payload, callback: null, next: null });
          t: {
            var V = t, X = f;
            b = l;
            var it = e;
            switch (X.tag) {
              case 1:
                if (V = X.payload, typeof V == "function") {
                  z = V.call(it, z, b);
                  break t;
                }
                z = V;
                break t;
              case 3:
                V.flags = V.flags & -65537 | 128;
              case 0:
                if (V = X.payload, b = typeof V == "function" ? V.call(it, z, b) : V, b == null) break t;
                z = U({}, z, b);
                break t;
              case 2:
                Jl = true;
            }
          }
          b = f.callback, b !== null && (t.flags |= 64, S && (t.flags |= 8192), S = a.callbacks, S === null ? a.callbacks = [b] : S.push(b));
        } else S = { lane: b, tag: f.tag, payload: f.payload, callback: f.callback, next: null }, T === null ? (g = T = S, r = z) : T = T.next = S, c |= b;
        if (f = f.next, f === null) {
          if (f = a.shared.pending, f === null) break;
          S = f, f = S.next, S.next = null, a.lastBaseUpdate = S, a.shared.pending = null;
        }
      } while (true);
      T === null && (r = z), a.baseState = r, a.firstBaseUpdate = g, a.lastBaseUpdate = T, n === null && (a.shared.lanes = 0), ue |= c, t.lanes = c, t.memoizedState = z;
    }
  }
  function Gs(t, l) {
    if (typeof t != "function") throw Error(s(191, t));
    t.call(l);
  }
  function Xs(t, l) {
    var e = t.callbacks;
    if (e !== null) for (t.callbacks = null, t = 0; t < e.length; t++) Gs(e[t], l);
  }
  var au = O(null), Pa = O(0);
  function Qs(t, l) {
    t = Ql, N(Pa, t), N(au, l), Ql = t | l.baseLanes;
  }
  function Vc() {
    N(Pa, Ql), N(au, au.current);
  }
  function Lc() {
    Ql = Pa.current, q(au), q(Pa);
  }
  var kl = 0, J = null, ct = null, At = null, Ia = false, nu = false, xe = false, tn = 0, $u = 0, cu = null, sy = 0;
  function Et() {
    throw Error(s(321));
  }
  function wc(t, l) {
    if (l === null) return false;
    for (var e = 0; e < l.length && e < t.length; e++) if (!Pt(t[e], l[e])) return false;
    return true;
  }
  function Kc(t, l, e, u, a, n) {
    return kl = n, J = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, A.H = t === null || t.memoizedState === null ? Ar : pr, xe = false, n = e(u, a), xe = false, nu && (n = Zs(l, e, u, a)), Cs(t), n;
  }
  function Cs(t) {
    A.H = cn;
    var l = ct !== null && ct.next !== null;
    if (kl = 0, At = ct = J = null, Ia = false, $u = 0, cu = null, l) throw Error(s(300));
    t === null || Dt || (t = t.dependencies, t !== null && Ja(t) && (Dt = true));
  }
  function Zs(t, l, e, u) {
    J = t;
    var a = 0;
    do {
      if (nu && (cu = null), $u = 0, nu = false, 25 <= a) throw Error(s(301));
      if (a += 1, At = ct = null, t.updateQueue != null) {
        var n = t.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      A.H = my, n = l(e, u);
    } while (nu);
    return n;
  }
  function ry() {
    var t = A.H, l = t.useState()[0];
    return l = typeof l.then == "function" ? ku(l) : l, t = t.useState()[0], (ct !== null ? ct.memoizedState : null) !== t && (J.flags |= 1024), l;
  }
  function Jc() {
    var t = tn !== 0;
    return tn = 0, t;
  }
  function Wc(t, l, e) {
    l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
  }
  function $c(t) {
    if (Ia) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), t = t.next;
      }
      Ia = false;
    }
    kl = 0, At = ct = J = null, nu = false, $u = tn = 0, cu = null;
  }
  function Vt() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return At === null ? J.memoizedState = At = t : At = At.next = t, At;
  }
  function pt() {
    if (ct === null) {
      var t = J.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = ct.next;
    var l = At === null ? J.memoizedState : At.next;
    if (l !== null) At = l, ct = t;
    else {
      if (t === null) throw J.alternate === null ? Error(s(467)) : Error(s(310));
      ct = t, t = { memoizedState: ct.memoizedState, baseState: ct.baseState, baseQueue: ct.baseQueue, queue: ct.queue, next: null }, At === null ? J.memoizedState = At = t : At = At.next = t;
    }
    return At;
  }
  function kc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ku(t) {
    var l = $u;
    return $u += 1, cu === null && (cu = []), t = js(cu, t, l), l = J, (At === null ? l.memoizedState : At.next) === null && (l = l.alternate, A.H = l === null || l.memoizedState === null ? Ar : pr), t;
  }
  function ln(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return ku(t);
      if (t.$$typeof === qt) return Gt(t);
    }
    throw Error(s(438, String(t)));
  }
  function Fc(t) {
    var l = null, e = J.updateQueue;
    if (e !== null && (l = e.memoCache), l == null) {
      var u = J.alternate;
      u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (l = { data: u.data.map(function(a) {
        return a.slice();
      }), index: 0 })));
    }
    if (l == null && (l = { data: [], index: 0 }), e === null && (e = kc(), J.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0) for (e = l.data[l.index] = Array(t), u = 0; u < t; u++) e[u] = Be;
    return l.index++, e;
  }
  function ql(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function en(t) {
    var l = pt();
    return Pc(l, ct, t);
  }
  function Pc(t, l, e) {
    var u = t.queue;
    if (u === null) throw Error(s(311));
    u.lastRenderedReducer = e;
    var a = t.baseQueue, n = u.pending;
    if (n !== null) {
      if (a !== null) {
        var c = a.next;
        a.next = n.next, n.next = c;
      }
      l.baseQueue = a = n, u.pending = null;
    }
    if (n = t.baseState, a === null) t.memoizedState = n;
    else {
      l = a.next;
      var f = c = null, r = null, g = l, T = false;
      do {
        var z = g.lane & -536870913;
        if (z !== g.lane ? (P & z) === z : (kl & z) === z) {
          var b = g.revertLane;
          if (b === 0) r !== null && (r = r.next = { lane: 0, revertLane: 0, action: g.action, hasEagerState: g.hasEagerState, eagerState: g.eagerState, next: null }), z === eu && (T = true);
          else if ((kl & b) === b) {
            g = g.next, b === eu && (T = true);
            continue;
          } else z = { lane: 0, revertLane: g.revertLane, action: g.action, hasEagerState: g.hasEagerState, eagerState: g.eagerState, next: null }, r === null ? (f = r = z, c = n) : r = r.next = z, J.lanes |= b, ue |= b;
          z = g.action, xe && e(n, z), n = g.hasEagerState ? g.eagerState : e(n, z);
        } else b = { lane: z, revertLane: g.revertLane, action: g.action, hasEagerState: g.hasEagerState, eagerState: g.eagerState, next: null }, r === null ? (f = r = b, c = n) : r = r.next = b, J.lanes |= z, ue |= z;
        g = g.next;
      } while (g !== null && g !== l);
      if (r === null ? c = n : r.next = f, !Pt(n, t.memoizedState) && (Dt = true, T && (e = uu, e !== null))) throw e;
      t.memoizedState = n, t.baseState = c, t.baseQueue = r, u.lastRenderedState = n;
    }
    return a === null && (u.lanes = 0), [t.memoizedState, u.dispatch];
  }
  function Ic(t) {
    var l = pt(), e = l.queue;
    if (e === null) throw Error(s(311));
    e.lastRenderedReducer = t;
    var u = e.dispatch, a = e.pending, n = l.memoizedState;
    if (a !== null) {
      e.pending = null;
      var c = a = a.next;
      do
        n = t(n, c.action), c = c.next;
      while (c !== a);
      Pt(n, l.memoizedState) || (Dt = true), l.memoizedState = n, l.baseQueue === null && (l.baseState = n), e.lastRenderedState = n;
    }
    return [n, u];
  }
  function Vs(t, l, e) {
    var u = J, a = pt(), n = et;
    if (n) {
      if (e === void 0) throw Error(s(407));
      e = e();
    } else e = l();
    var c = !Pt((ct || a).memoizedState, e);
    c && (a.memoizedState = e, Dt = true), a = a.queue;
    var f = Ks.bind(null, u, a, t);
    if (Fu(2048, 8, f, [t]), a.getSnapshot !== l || c || At !== null && At.memoizedState.tag & 1) {
      if (u.flags |= 2048, fu(9, un(), ws.bind(null, u, a, e, l), null), dt === null) throw Error(s(349));
      n || (kl & 124) !== 0 || Ls(u, l, e);
    }
    return e;
  }
  function Ls(t, l, e) {
    t.flags |= 16384, t = { getSnapshot: l, value: e }, l = J.updateQueue, l === null ? (l = kc(), J.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
  }
  function ws(t, l, e, u) {
    l.value = e, l.getSnapshot = u, Js(l) && Ws(t);
  }
  function Ks(t, l, e) {
    return e(function() {
      Js(l) && Ws(t);
    });
  }
  function Js(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !Pt(t, e);
    } catch {
      return true;
    }
  }
  function Ws(t) {
    var l = Pe(t, 2);
    l !== null && al(l, t, 2);
  }
  function tf(t) {
    var l = Vt();
    if (typeof t == "function") {
      var e = t;
      if (t = e(), xe) {
        Vl(true);
        try {
          e();
        } finally {
          Vl(false);
        }
      }
    }
    return l.memoizedState = l.baseState = t, l.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ql, lastRenderedState: t }, l;
  }
  function $s(t, l, e, u) {
    return t.baseState = e, Pc(t, ct, typeof u == "function" ? u : ql);
  }
  function oy(t, l, e, u, a) {
    if (nn(t)) throw Error(s(485));
    if (t = l.action, t !== null) {
      var n = { payload: a, action: t, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(c) {
        n.listeners.push(c);
      } };
      A.T !== null ? e(true) : n.isTransition = false, u(n), e = l.pending, e === null ? (n.next = l.pending = n, ks(l, n)) : (n.next = e.next, l.pending = e.next = n);
    }
  }
  function ks(t, l) {
    var e = l.action, u = l.payload, a = t.state;
    if (l.isTransition) {
      var n = A.T, c = {};
      A.T = c;
      try {
        var f = e(a, u), r = A.S;
        r !== null && r(c, f), Fs(t, l, f);
      } catch (g) {
        lf(t, l, g);
      } finally {
        A.T = n;
      }
    } else try {
      n = e(a, u), Fs(t, l, n);
    } catch (g) {
      lf(t, l, g);
    }
  }
  function Fs(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function(u) {
      Ps(t, l, u);
    }, function(u) {
      return lf(t, l, u);
    }) : Ps(t, l, e);
  }
  function Ps(t, l, e) {
    l.status = "fulfilled", l.value = e, Is(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, ks(t, e)));
  }
  function lf(t, l, e) {
    var u = t.pending;
    if (t.pending = null, u !== null) {
      u = u.next;
      do
        l.status = "rejected", l.reason = e, Is(l), l = l.next;
      while (l !== u);
    }
    t.action = null;
  }
  function Is(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function tr(t, l) {
    return l;
  }
  function lr(t, l) {
    if (et) {
      var e = dt.formState;
      if (e !== null) {
        t: {
          var u = J;
          if (et) {
            if (St) {
              l: {
                for (var a = St, n = _l; a.nodeType !== 8; ) {
                  if (!n) {
                    a = null;
                    break l;
                  }
                  if (a = gl(a.nextSibling), a === null) {
                    a = null;
                    break l;
                  }
                }
                n = a.data, a = n === "F!" || n === "F" ? a : null;
              }
              if (a) {
                St = gl(a.nextSibling), u = a.data === "F!";
                break t;
              }
            }
            Oe(u);
          }
          u = false;
        }
        u && (l = e[0]);
      }
    }
    return e = Vt(), e.memoizedState = e.baseState = l, u = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: tr, lastRenderedState: l }, e.queue = u, e = _r.bind(null, J, u), u.dispatch = e, u = tf(false), n = cf.bind(null, J, false, u.queue), u = Vt(), a = { state: l, dispatch: null, action: t, pending: null }, u.queue = a, e = oy.bind(null, J, a, n, e), a.dispatch = e, u.memoizedState = t, [l, e, false];
  }
  function er(t) {
    var l = pt();
    return ur(l, ct, t);
  }
  function ur(t, l, e) {
    if (l = Pc(t, l, tr)[0], t = en(ql)[0], typeof l == "object" && l !== null && typeof l.then == "function") try {
      var u = ku(l);
    } catch (c) {
      throw c === Lu ? ka : c;
    }
    else u = l;
    l = pt();
    var a = l.queue, n = a.dispatch;
    return e !== l.memoizedState && (J.flags |= 2048, fu(9, un(), dy.bind(null, a, e), null)), [u, n, t];
  }
  function dy(t, l) {
    t.action = l;
  }
  function ar(t) {
    var l = pt(), e = ct;
    if (e !== null) return ur(l, e, t);
    pt(), l = l.memoizedState, e = pt();
    var u = e.queue.dispatch;
    return e.memoizedState = t, [l, u, false];
  }
  function fu(t, l, e, u) {
    return t = { tag: t, create: e, deps: u, inst: l, next: null }, l = J.updateQueue, l === null && (l = kc(), J.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (u = e.next, e.next = t, t.next = u, l.lastEffect = t), t;
  }
  function un() {
    return { destroy: void 0, resource: void 0 };
  }
  function nr() {
    return pt().memoizedState;
  }
  function an(t, l, e, u) {
    var a = Vt();
    u = u === void 0 ? null : u, J.flags |= t, a.memoizedState = fu(1 | l, un(), e, u);
  }
  function Fu(t, l, e, u) {
    var a = pt();
    u = u === void 0 ? null : u;
    var n = a.memoizedState.inst;
    ct !== null && u !== null && wc(u, ct.memoizedState.deps) ? a.memoizedState = fu(l, n, e, u) : (J.flags |= t, a.memoizedState = fu(1 | l, n, e, u));
  }
  function cr(t, l) {
    an(8390656, 8, t, l);
  }
  function fr(t, l) {
    Fu(2048, 8, t, l);
  }
  function ir(t, l) {
    return Fu(4, 2, t, l);
  }
  function sr(t, l) {
    return Fu(4, 4, t, l);
  }
  function rr(t, l) {
    if (typeof l == "function") {
      t = t();
      var e = l(t);
      return function() {
        typeof e == "function" ? e() : l(null);
      };
    }
    if (l != null) return t = t(), l.current = t, function() {
      l.current = null;
    };
  }
  function or(t, l, e) {
    e = e != null ? e.concat([t]) : null, Fu(4, 4, rr.bind(null, l, t), e);
  }
  function ef() {
  }
  function dr(t, l) {
    var e = pt();
    l = l === void 0 ? null : l;
    var u = e.memoizedState;
    return l !== null && wc(l, u[1]) ? u[0] : (e.memoizedState = [t, l], t);
  }
  function yr(t, l) {
    var e = pt();
    l = l === void 0 ? null : l;
    var u = e.memoizedState;
    if (l !== null && wc(l, u[1])) return u[0];
    if (u = t(), xe) {
      Vl(true);
      try {
        t();
      } finally {
        Vl(false);
      }
    }
    return e.memoizedState = [u, l], u;
  }
  function uf(t, l, e) {
    return e === void 0 || (kl & 1073741824) !== 0 ? t.memoizedState = l : (t.memoizedState = e, t = go(), J.lanes |= t, ue |= t, e);
  }
  function hr(t, l, e, u) {
    return Pt(e, l) ? e : au.current !== null ? (t = uf(t, e, u), Pt(t, l) || (Dt = true), t) : (kl & 42) === 0 ? (Dt = true, t.memoizedState = e) : (t = go(), J.lanes |= t, ue |= t, l);
  }
  function vr(t, l, e, u, a) {
    var n = H.p;
    H.p = n !== 0 && 8 > n ? n : 8;
    var c = A.T, f = {};
    A.T = f, cf(t, false, l, e);
    try {
      var r = a(), g = A.S;
      if (g !== null && g(f, r), r !== null && typeof r == "object" && typeof r.then == "function") {
        var T = iy(r, u);
        Pu(t, l, T, ul(t));
      } else Pu(t, l, u, ul(t));
    } catch (z) {
      Pu(t, l, { then: function() {
      }, status: "rejected", reason: z }, ul());
    } finally {
      H.p = n, A.T = c;
    }
  }
  function yy() {
  }
  function af(t, l, e, u) {
    if (t.tag !== 5) throw Error(s(476));
    var a = mr(t).queue;
    vr(t, a, l, Z, e === null ? yy : function() {
      return gr(t), e(u);
    });
  }
  function mr(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = { memoizedState: Z, baseState: Z, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ql, lastRenderedState: Z }, next: null };
    var e = {};
    return l.next = { memoizedState: e, baseState: e, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ql, lastRenderedState: e }, next: null }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
  }
  function gr(t) {
    var l = mr(t).next.queue;
    Pu(t, l, {}, ul());
  }
  function nf() {
    return Gt(ma);
  }
  function br() {
    return pt().memoizedState;
  }
  function Sr() {
    return pt().memoizedState;
  }
  function hy(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = ul();
          t = Wl(e);
          var u = $l(l, t, e);
          u !== null && (al(u, l, e), Ku(u, l, e)), l = { cache: jc() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function vy(t, l, e) {
    var u = ul();
    e = { lane: u, revertLane: 0, action: e, hasEagerState: false, eagerState: null, next: null }, nn(t) ? Er(l, e) : (e = zc(t, l, e, u), e !== null && (al(e, t, u), Tr(e, l, u)));
  }
  function _r(t, l, e) {
    var u = ul();
    Pu(t, l, e, u);
  }
  function Pu(t, l, e, u) {
    var a = { lane: u, revertLane: 0, action: e, hasEagerState: false, eagerState: null, next: null };
    if (nn(t)) Er(l, a);
    else {
      var n = t.alternate;
      if (t.lanes === 0 && (n === null || n.lanes === 0) && (n = l.lastRenderedReducer, n !== null)) try {
        var c = l.lastRenderedState, f = n(c, e);
        if (a.hasEagerState = true, a.eagerState = f, Pt(f, c)) return Za(t, l, a, 0), dt === null && Ca(), false;
      } catch {
      } finally {
      }
      if (e = zc(t, l, a, u), e !== null) return al(e, t, u), Tr(e, l, u), true;
    }
    return false;
  }
  function cf(t, l, e, u) {
    if (u = { lane: 2, revertLane: Xf(), action: u, hasEagerState: false, eagerState: null, next: null }, nn(t)) {
      if (l) throw Error(s(479));
    } else l = zc(t, e, u, 2), l !== null && al(l, t, 2);
  }
  function nn(t) {
    var l = t.alternate;
    return t === J || l !== null && l === J;
  }
  function Er(t, l) {
    nu = Ia = true;
    var e = t.pending;
    e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
  }
  function Tr(t, l, e) {
    if ((e & 4194048) !== 0) {
      var u = l.lanes;
      u &= t.pendingLanes, e |= u, l.lanes = e, xi(t, e);
    }
  }
  var cn = { readContext: Gt, use: ln, useCallback: Et, useContext: Et, useEffect: Et, useImperativeHandle: Et, useLayoutEffect: Et, useInsertionEffect: Et, useMemo: Et, useReducer: Et, useRef: Et, useState: Et, useDebugValue: Et, useDeferredValue: Et, useTransition: Et, useSyncExternalStore: Et, useId: Et, useHostTransitionStatus: Et, useFormState: Et, useActionState: Et, useOptimistic: Et, useMemoCache: Et, useCacheRefresh: Et }, Ar = { readContext: Gt, use: ln, useCallback: function(t, l) {
    return Vt().memoizedState = [t, l === void 0 ? null : l], t;
  }, useContext: Gt, useEffect: cr, useImperativeHandle: function(t, l, e) {
    e = e != null ? e.concat([t]) : null, an(4194308, 4, rr.bind(null, l, t), e);
  }, useLayoutEffect: function(t, l) {
    return an(4194308, 4, t, l);
  }, useInsertionEffect: function(t, l) {
    an(4, 2, t, l);
  }, useMemo: function(t, l) {
    var e = Vt();
    l = l === void 0 ? null : l;
    var u = t();
    if (xe) {
      Vl(true);
      try {
        t();
      } finally {
        Vl(false);
      }
    }
    return e.memoizedState = [u, l], u;
  }, useReducer: function(t, l, e) {
    var u = Vt();
    if (e !== void 0) {
      var a = e(l);
      if (xe) {
        Vl(true);
        try {
          e(l);
        } finally {
          Vl(false);
        }
      }
    } else a = l;
    return u.memoizedState = u.baseState = a, t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: a }, u.queue = t, t = t.dispatch = vy.bind(null, J, t), [u.memoizedState, t];
  }, useRef: function(t) {
    var l = Vt();
    return t = { current: t }, l.memoizedState = t;
  }, useState: function(t) {
    t = tf(t);
    var l = t.queue, e = _r.bind(null, J, l);
    return l.dispatch = e, [t.memoizedState, e];
  }, useDebugValue: ef, useDeferredValue: function(t, l) {
    var e = Vt();
    return uf(e, t, l);
  }, useTransition: function() {
    var t = tf(false);
    return t = vr.bind(null, J, t.queue, true, false), Vt().memoizedState = t, [false, t];
  }, useSyncExternalStore: function(t, l, e) {
    var u = J, a = Vt();
    if (et) {
      if (e === void 0) throw Error(s(407));
      e = e();
    } else {
      if (e = l(), dt === null) throw Error(s(349));
      (P & 124) !== 0 || Ls(u, l, e);
    }
    a.memoizedState = e;
    var n = { value: e, getSnapshot: l };
    return a.queue = n, cr(Ks.bind(null, u, n, t), [t]), u.flags |= 2048, fu(9, un(), ws.bind(null, u, n, e, l), null), e;
  }, useId: function() {
    var t = Vt(), l = dt.identifierPrefix;
    if (et) {
      var e = Ul, u = xl;
      e = (u & ~(1 << 32 - Ft(u) - 1)).toString(32) + e, l = "\xAB" + l + "R" + e, e = tn++, 0 < e && (l += "H" + e.toString(32)), l += "\xBB";
    } else e = sy++, l = "\xAB" + l + "r" + e.toString(32) + "\xBB";
    return t.memoizedState = l;
  }, useHostTransitionStatus: nf, useFormState: lr, useActionState: lr, useOptimistic: function(t) {
    var l = Vt();
    l.memoizedState = l.baseState = t;
    var e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return l.queue = e, l = cf.bind(null, J, true, e), e.dispatch = l, [t, l];
  }, useMemoCache: Fc, useCacheRefresh: function() {
    return Vt().memoizedState = hy.bind(null, J);
  } }, pr = { readContext: Gt, use: ln, useCallback: dr, useContext: Gt, useEffect: fr, useImperativeHandle: or, useInsertionEffect: ir, useLayoutEffect: sr, useMemo: yr, useReducer: en, useRef: nr, useState: function() {
    return en(ql);
  }, useDebugValue: ef, useDeferredValue: function(t, l) {
    var e = pt();
    return hr(e, ct.memoizedState, t, l);
  }, useTransition: function() {
    var t = en(ql)[0], l = pt().memoizedState;
    return [typeof t == "boolean" ? t : ku(t), l];
  }, useSyncExternalStore: Vs, useId: br, useHostTransitionStatus: nf, useFormState: er, useActionState: er, useOptimistic: function(t, l) {
    var e = pt();
    return $s(e, ct, t, l);
  }, useMemoCache: Fc, useCacheRefresh: Sr }, my = { readContext: Gt, use: ln, useCallback: dr, useContext: Gt, useEffect: fr, useImperativeHandle: or, useInsertionEffect: ir, useLayoutEffect: sr, useMemo: yr, useReducer: Ic, useRef: nr, useState: function() {
    return Ic(ql);
  }, useDebugValue: ef, useDeferredValue: function(t, l) {
    var e = pt();
    return ct === null ? uf(e, t, l) : hr(e, ct.memoizedState, t, l);
  }, useTransition: function() {
    var t = Ic(ql)[0], l = pt().memoizedState;
    return [typeof t == "boolean" ? t : ku(t), l];
  }, useSyncExternalStore: Vs, useId: br, useHostTransitionStatus: nf, useFormState: ar, useActionState: ar, useOptimistic: function(t, l) {
    var e = pt();
    return ct !== null ? $s(e, ct, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
  }, useMemoCache: Fc, useCacheRefresh: Sr }, iu = null, Iu = 0;
  function fn(t) {
    var l = Iu;
    return Iu += 1, iu === null && (iu = []), js(iu, t, l);
  }
  function ta(t, l) {
    l = l.props.ref, t.ref = l !== void 0 ? l : null;
  }
  function sn(t, l) {
    throw l.$$typeof === B ? Error(s(525)) : (t = Object.prototype.toString.call(l), Error(s(31, t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t)));
  }
  function zr(t) {
    var l = t._init;
    return l(t._payload);
  }
  function Or(t) {
    function l(h, y) {
      if (t) {
        var m = h.deletions;
        m === null ? (h.deletions = [y], h.flags |= 16) : m.push(y);
      }
    }
    function e(h, y) {
      if (!t) return null;
      for (; y !== null; ) l(h, y), y = y.sibling;
      return null;
    }
    function u(h) {
      for (var y = /* @__PURE__ */ new Map(); h !== null; ) h.key !== null ? y.set(h.key, h) : y.set(h.index, h), h = h.sibling;
      return y;
    }
    function a(h, y) {
      return h = Rl(h, y), h.index = 0, h.sibling = null, h;
    }
    function n(h, y, m) {
      return h.index = m, t ? (m = h.alternate, m !== null ? (m = m.index, m < y ? (h.flags |= 67108866, y) : m) : (h.flags |= 67108866, y)) : (h.flags |= 1048576, y);
    }
    function c(h) {
      return t && h.alternate === null && (h.flags |= 67108866), h;
    }
    function f(h, y, m, p) {
      return y === null || y.tag !== 6 ? (y = Mc(m, h.mode, p), y.return = h, y) : (y = a(y, m), y.return = h, y);
    }
    function r(h, y, m, p) {
      var j = m.type;
      return j === bt ? T(h, y, m.props.children, p, m.key) : y !== null && (y.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Wt && zr(j) === y.type) ? (y = a(y, m.props), ta(y, m), y.return = h, y) : (y = La(m.type, m.key, m.props, null, h.mode, p), ta(y, m), y.return = h, y);
    }
    function g(h, y, m, p) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== m.containerInfo || y.stateNode.implementation !== m.implementation ? (y = Dc(m, h.mode, p), y.return = h, y) : (y = a(y, m.children || []), y.return = h, y);
    }
    function T(h, y, m, p, j) {
      return y === null || y.tag !== 7 ? (y = Te(m, h.mode, p, j), y.return = h, y) : (y = a(y, m), y.return = h, y);
    }
    function z(h, y, m) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint") return y = Mc("" + y, h.mode, m), y.return = h, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case w:
            return m = La(y.type, y.key, y.props, null, h.mode, m), ta(m, y), m.return = h, m;
          case yt:
            return y = Dc(y, h.mode, m), y.return = h, y;
          case Wt:
            var p = y._init;
            return y = p(y._payload), z(h, y, m);
        }
        if (Yt(y) || jt(y)) return y = Te(y, h.mode, m, null), y.return = h, y;
        if (typeof y.then == "function") return z(h, fn(y), m);
        if (y.$$typeof === qt) return z(h, Wa(h, y), m);
        sn(h, y);
      }
      return null;
    }
    function b(h, y, m, p) {
      var j = y !== null ? y.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint") return j !== null ? null : f(h, y, "" + m, p);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case w:
            return m.key === j ? r(h, y, m, p) : null;
          case yt:
            return m.key === j ? g(h, y, m, p) : null;
          case Wt:
            return j = m._init, m = j(m._payload), b(h, y, m, p);
        }
        if (Yt(m) || jt(m)) return j !== null ? null : T(h, y, m, p, null);
        if (typeof m.then == "function") return b(h, y, fn(m), p);
        if (m.$$typeof === qt) return b(h, y, Wa(h, m), p);
        sn(h, m);
      }
      return null;
    }
    function S(h, y, m, p, j) {
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint") return h = h.get(m) || null, f(y, h, "" + p, j);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case w:
            return h = h.get(p.key === null ? m : p.key) || null, r(y, h, p, j);
          case yt:
            return h = h.get(p.key === null ? m : p.key) || null, g(y, h, p, j);
          case Wt:
            var W = p._init;
            return p = W(p._payload), S(h, y, m, p, j);
        }
        if (Yt(p) || jt(p)) return h = h.get(m) || null, T(y, h, p, j, null);
        if (typeof p.then == "function") return S(h, y, m, fn(p), j);
        if (p.$$typeof === qt) return S(h, y, m, Wa(y, p), j);
        sn(y, p);
      }
      return null;
    }
    function V(h, y, m, p) {
      for (var j = null, W = null, Y = y, C = y = 0, xt = null; Y !== null && C < m.length; C++) {
        Y.index > C ? (xt = Y, Y = null) : xt = Y.sibling;
        var lt = b(h, Y, m[C], p);
        if (lt === null) {
          Y === null && (Y = xt);
          break;
        }
        t && Y && lt.alternate === null && l(h, Y), y = n(lt, y, C), W === null ? j = lt : W.sibling = lt, W = lt, Y = xt;
      }
      if (C === m.length) return e(h, Y), et && pe(h, C), j;
      if (Y === null) {
        for (; C < m.length; C++) Y = z(h, m[C], p), Y !== null && (y = n(Y, y, C), W === null ? j = Y : W.sibling = Y, W = Y);
        return et && pe(h, C), j;
      }
      for (Y = u(Y); C < m.length; C++) xt = S(Y, h, C, m[C], p), xt !== null && (t && xt.alternate !== null && Y.delete(xt.key === null ? C : xt.key), y = n(xt, y, C), W === null ? j = xt : W.sibling = xt, W = xt);
      return t && Y.forEach(function(de) {
        return l(h, de);
      }), et && pe(h, C), j;
    }
    function X(h, y, m, p) {
      if (m == null) throw Error(s(151));
      for (var j = null, W = null, Y = y, C = y = 0, xt = null, lt = m.next(); Y !== null && !lt.done; C++, lt = m.next()) {
        Y.index > C ? (xt = Y, Y = null) : xt = Y.sibling;
        var de = b(h, Y, lt.value, p);
        if (de === null) {
          Y === null && (Y = xt);
          break;
        }
        t && Y && de.alternate === null && l(h, Y), y = n(de, y, C), W === null ? j = de : W.sibling = de, W = de, Y = xt;
      }
      if (lt.done) return e(h, Y), et && pe(h, C), j;
      if (Y === null) {
        for (; !lt.done; C++, lt = m.next()) lt = z(h, lt.value, p), lt !== null && (y = n(lt, y, C), W === null ? j = lt : W.sibling = lt, W = lt);
        return et && pe(h, C), j;
      }
      for (Y = u(Y); !lt.done; C++, lt = m.next()) lt = S(Y, h, C, lt.value, p), lt !== null && (t && lt.alternate !== null && Y.delete(lt.key === null ? C : lt.key), y = n(lt, y, C), W === null ? j = lt : W.sibling = lt, W = lt);
      return t && Y.forEach(function(gh) {
        return l(h, gh);
      }), et && pe(h, C), j;
    }
    function it(h, y, m, p) {
      if (typeof m == "object" && m !== null && m.type === bt && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case w:
            t: {
              for (var j = m.key; y !== null; ) {
                if (y.key === j) {
                  if (j = m.type, j === bt) {
                    if (y.tag === 7) {
                      e(h, y.sibling), p = a(y, m.props.children), p.return = h, h = p;
                      break t;
                    }
                  } else if (y.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Wt && zr(j) === y.type) {
                    e(h, y.sibling), p = a(y, m.props), ta(p, m), p.return = h, h = p;
                    break t;
                  }
                  e(h, y);
                  break;
                } else l(h, y);
                y = y.sibling;
              }
              m.type === bt ? (p = Te(m.props.children, h.mode, p, m.key), p.return = h, h = p) : (p = La(m.type, m.key, m.props, null, h.mode, p), ta(p, m), p.return = h, h = p);
            }
            return c(h);
          case yt:
            t: {
              for (j = m.key; y !== null; ) {
                if (y.key === j) if (y.tag === 4 && y.stateNode.containerInfo === m.containerInfo && y.stateNode.implementation === m.implementation) {
                  e(h, y.sibling), p = a(y, m.children || []), p.return = h, h = p;
                  break t;
                } else {
                  e(h, y);
                  break;
                }
                else l(h, y);
                y = y.sibling;
              }
              p = Dc(m, h.mode, p), p.return = h, h = p;
            }
            return c(h);
          case Wt:
            return j = m._init, m = j(m._payload), it(h, y, m, p);
        }
        if (Yt(m)) return V(h, y, m, p);
        if (jt(m)) {
          if (j = jt(m), typeof j != "function") throw Error(s(150));
          return m = j.call(m), X(h, y, m, p);
        }
        if (typeof m.then == "function") return it(h, y, fn(m), p);
        if (m.$$typeof === qt) return it(h, y, Wa(h, m), p);
        sn(h, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint" ? (m = "" + m, y !== null && y.tag === 6 ? (e(h, y.sibling), p = a(y, m), p.return = h, h = p) : (e(h, y), p = Mc(m, h.mode, p), p.return = h, h = p), c(h)) : e(h, y);
    }
    return function(h, y, m, p) {
      try {
        Iu = 0;
        var j = it(h, y, m, p);
        return iu = null, j;
      } catch (Y) {
        if (Y === Lu || Y === ka) throw Y;
        var W = It(29, Y, null, h.mode);
        return W.lanes = p, W.return = h, W;
      } finally {
      }
    };
  }
  var su = Or(true), Mr = Or(false), ol = O(null), El = null;
  function Fl(t) {
    var l = t.alternate;
    N(Ot, Ot.current & 1), N(ol, t), El === null && (l === null || au.current !== null || l.memoizedState !== null) && (El = t);
  }
  function Dr(t) {
    if (t.tag === 22) {
      if (N(Ot, Ot.current), N(ol, t), El === null) {
        var l = t.alternate;
        l !== null && l.memoizedState !== null && (El = t);
      }
    } else Pl();
  }
  function Pl() {
    N(Ot, Ot.current), N(ol, ol.current);
  }
  function jl(t) {
    q(ol), El === t && (El = null), q(Ot);
  }
  var Ot = O(0);
  function rn(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || e.data === "$?" || Ff(e))) return l;
      } else if (l.tag === 19 && l.memoizedProps.revealOrder !== void 0) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === t) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return null;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    return null;
  }
  function ff(t, l, e, u) {
    l = t.memoizedState, e = e(u, l), e = e == null ? l : U({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var sf = { enqueueSetState: function(t, l, e) {
    t = t._reactInternals;
    var u = ul(), a = Wl(u);
    a.payload = l, e != null && (a.callback = e), l = $l(t, a, u), l !== null && (al(l, t, u), Ku(l, t, u));
  }, enqueueReplaceState: function(t, l, e) {
    t = t._reactInternals;
    var u = ul(), a = Wl(u);
    a.tag = 1, a.payload = l, e != null && (a.callback = e), l = $l(t, a, u), l !== null && (al(l, t, u), Ku(l, t, u));
  }, enqueueForceUpdate: function(t, l) {
    t = t._reactInternals;
    var e = ul(), u = Wl(e);
    u.tag = 2, l != null && (u.callback = l), l = $l(t, u, e), l !== null && (al(l, t, e), Ku(l, t, e));
  } };
  function Rr(t, l, e, u, a, n, c) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(u, n, c) : l.prototype && l.prototype.isPureReactComponent ? !Yu(e, u) || !Yu(a, n) : true;
  }
  function xr(t, l, e, u) {
    t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, u), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, u), l.state !== t && sf.enqueueReplaceState(l, l.state, null);
  }
  function Ue(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var u in l) u !== "ref" && (e[u] = l[u]);
    }
    if (t = t.defaultProps) {
      e === l && (e = U({}, e));
      for (var a in t) e[a] === void 0 && (e[a] = t[a]);
    }
    return e;
  }
  var on = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var l = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t), error: t });
      if (!window.dispatchEvent(l)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function Ur(t) {
    on(t);
  }
  function Nr(t) {
    console.error(t);
  }
  function Hr(t) {
    on(t);
  }
  function dn(t, l) {
    try {
      var e = t.onUncaughtError;
      e(l.value, { componentStack: l.stack });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function qr(t, l, e) {
    try {
      var u = t.onCaughtError;
      u(e.value, { componentStack: e.stack, errorBoundary: l.tag === 1 ? l.stateNode : null });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function rf(t, l, e) {
    return e = Wl(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      dn(t, l);
    }, e;
  }
  function jr(t) {
    return t = Wl(t), t.tag = 3, t;
  }
  function Yr(t, l, e, u) {
    var a = e.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var n = u.value;
      t.payload = function() {
        return a(n);
      }, t.callback = function() {
        qr(l, e, u);
      };
    }
    var c = e.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (t.callback = function() {
      qr(l, e, u), typeof a != "function" && (ae === null ? ae = /* @__PURE__ */ new Set([this]) : ae.add(this));
      var f = u.stack;
      this.componentDidCatch(u.value, { componentStack: f !== null ? f : "" });
    });
  }
  function gy(t, l, e, u, a) {
    if (e.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (l = e.alternate, l !== null && Cu(l, e, a, true), e = ol.current, e !== null) {
        switch (e.tag) {
          case 13:
            return El === null ? qf() : e.alternate === null && _t === 0 && (_t = 3), e.flags &= -257, e.flags |= 65536, e.lanes = a, u === Gc ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([u]) : l.add(u), Yf(t, u, a)), false;
          case 22:
            return e.flags |= 65536, u === Gc ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([u]) }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([u]) : e.add(u)), Yf(t, u, a)), false;
        }
        throw Error(s(435, e.tag));
      }
      return Yf(t, u, a), qf(), false;
    }
    if (et) return l = ol.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = a, u !== Uc && (t = Error(s(422), { cause: u }), Qu(fl(t, e)))) : (u !== Uc && (l = Error(s(423), { cause: u }), Qu(fl(l, e))), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, u = fl(u, e), a = rf(t.stateNode, u, a), Cc(t, a), _t !== 4 && (_t = 2)), false;
    var n = Error(s(520), { cause: u });
    if (n = fl(n, e), fa === null ? fa = [n] : fa.push(n), _t !== 4 && (_t = 2), l === null) return true;
    u = fl(u, e), e = l;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, t = a & -a, e.lanes |= t, t = rf(e.stateNode, u, t), Cc(e, t), false;
        case 1:
          if (l = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ae === null || !ae.has(n)))) return e.flags |= 65536, a &= -a, e.lanes |= a, a = jr(a), Yr(a, t, e, u), Cc(e, a), false;
      }
      e = e.return;
    } while (e !== null);
    return false;
  }
  var Br = Error(s(461)), Dt = false;
  function Ut(t, l, e, u) {
    l.child = t === null ? Mr(l, null, e, u) : su(l, t.child, e, u);
  }
  function Gr(t, l, e, u, a) {
    e = e.render;
    var n = l.ref;
    if ("ref" in u) {
      var c = {};
      for (var f in u) f !== "ref" && (c[f] = u[f]);
    } else c = u;
    return De(l), u = Kc(t, l, e, c, n, a), f = Jc(), t !== null && !Dt ? (Wc(t, l, a), Yl(t, l, a)) : (et && f && Rc(l), l.flags |= 1, Ut(t, l, u, a), l.child);
  }
  function Xr(t, l, e, u, a) {
    if (t === null) {
      var n = e.type;
      return typeof n == "function" && !Oc(n) && n.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = n, Qr(t, l, n, u, a)) : (t = La(e.type, null, u, l, l.mode, a), t.ref = l.ref, t.return = l, l.child = t);
    }
    if (n = t.child, !bf(t, a)) {
      var c = n.memoizedProps;
      if (e = e.compare, e = e !== null ? e : Yu, e(c, u) && t.ref === l.ref) return Yl(t, l, a);
    }
    return l.flags |= 1, t = Rl(n, u), t.ref = l.ref, t.return = l, l.child = t;
  }
  function Qr(t, l, e, u, a) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (Yu(n, u) && t.ref === l.ref) if (Dt = false, l.pendingProps = u = n, bf(t, a)) (t.flags & 131072) !== 0 && (Dt = true);
      else return l.lanes = t.lanes, Yl(t, l, a);
    }
    return of(t, l, e, u, a);
  }
  function Cr(t, l, e) {
    var u = l.pendingProps, a = u.children, n = t !== null ? t.memoizedState : null;
    if (u.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (u = n !== null ? n.baseLanes | e : e, t !== null) {
          for (a = l.child = t.child, n = 0; a !== null; ) n = n | a.lanes | a.childLanes, a = a.sibling;
          l.childLanes = n & ~u;
        } else l.childLanes = 0, l.child = null;
        return Zr(t, l, u, e);
      }
      if ((e & 536870912) !== 0) l.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && $a(l, n !== null ? n.cachePool : null), n !== null ? Qs(l, n) : Vc(), Dr(l);
      else return l.lanes = l.childLanes = 536870912, Zr(t, l, n !== null ? n.baseLanes | e : e, e);
    } else n !== null ? ($a(l, n.cachePool), Qs(l, n), Pl(), l.memoizedState = null) : (t !== null && $a(l, null), Vc(), Pl());
    return Ut(t, l, a, e), l.child;
  }
  function Zr(t, l, e, u) {
    var a = Bc();
    return a = a === null ? null : { parent: zt._currentValue, pool: a }, l.memoizedState = { baseLanes: e, cachePool: a }, t !== null && $a(l, null), Vc(), Dr(l), t !== null && Cu(t, l, u, true), null;
  }
  function yn(t, l) {
    var e = l.ref;
    if (e === null) t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(s(284));
      (t === null || t.ref !== e) && (l.flags |= 4194816);
    }
  }
  function of(t, l, e, u, a) {
    return De(l), e = Kc(t, l, e, u, void 0, a), u = Jc(), t !== null && !Dt ? (Wc(t, l, a), Yl(t, l, a)) : (et && u && Rc(l), l.flags |= 1, Ut(t, l, e, a), l.child);
  }
  function Vr(t, l, e, u, a, n) {
    return De(l), l.updateQueue = null, e = Zs(l, u, e, a), Cs(t), u = Jc(), t !== null && !Dt ? (Wc(t, l, n), Yl(t, l, n)) : (et && u && Rc(l), l.flags |= 1, Ut(t, l, e, n), l.child);
  }
  function Lr(t, l, e, u, a) {
    if (De(l), l.stateNode === null) {
      var n = Ie, c = e.contextType;
      typeof c == "object" && c !== null && (n = Gt(c)), n = new e(u, n), l.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = sf, l.stateNode = n, n._reactInternals = l, n = l.stateNode, n.props = u, n.state = l.memoizedState, n.refs = {}, Xc(l), c = e.contextType, n.context = typeof c == "object" && c !== null ? Gt(c) : Ie, n.state = l.memoizedState, c = e.getDerivedStateFromProps, typeof c == "function" && (ff(l, e, c, u), n.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (c = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), c !== n.state && sf.enqueueReplaceState(n, n.state, null), Wu(l, u, n, a), Ju(), n.state = l.memoizedState), typeof n.componentDidMount == "function" && (l.flags |= 4194308), u = true;
    } else if (t === null) {
      n = l.stateNode;
      var f = l.memoizedProps, r = Ue(e, f);
      n.props = r;
      var g = n.context, T = e.contextType;
      c = Ie, typeof T == "object" && T !== null && (c = Gt(T));
      var z = e.getDerivedStateFromProps;
      T = typeof z == "function" || typeof n.getSnapshotBeforeUpdate == "function", f = l.pendingProps !== f, T || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f || g !== c) && xr(l, n, u, c), Jl = false;
      var b = l.memoizedState;
      n.state = b, Wu(l, u, n, a), Ju(), g = l.memoizedState, f || b !== g || Jl ? (typeof z == "function" && (ff(l, e, z, u), g = l.memoizedState), (r = Jl || Rr(l, e, r, u, b, g, c)) ? (T || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = u, l.memoizedState = g), n.props = u, n.state = g, n.context = c, u = r) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), u = false);
    } else {
      n = l.stateNode, Qc(t, l), c = l.memoizedProps, T = Ue(e, c), n.props = T, z = l.pendingProps, b = n.context, g = e.contextType, r = Ie, typeof g == "object" && g !== null && (r = Gt(g)), f = e.getDerivedStateFromProps, (g = typeof f == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c !== z || b !== r) && xr(l, n, u, r), Jl = false, b = l.memoizedState, n.state = b, Wu(l, u, n, a), Ju();
      var S = l.memoizedState;
      c !== z || b !== S || Jl || t !== null && t.dependencies !== null && Ja(t.dependencies) ? (typeof f == "function" && (ff(l, e, f, u), S = l.memoizedState), (T = Jl || Rr(l, e, T, u, b, S, r) || t !== null && t.dependencies !== null && Ja(t.dependencies)) ? (g || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, S, r), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(u, S, r)), typeof n.componentDidUpdate == "function" && (l.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || c === t.memoizedProps && b === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && b === t.memoizedState || (l.flags |= 1024), l.memoizedProps = u, l.memoizedState = S), n.props = u, n.state = S, n.context = r, u = T) : (typeof n.componentDidUpdate != "function" || c === t.memoizedProps && b === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === t.memoizedProps && b === t.memoizedState || (l.flags |= 1024), u = false);
    }
    return n = u, yn(t, l), u = (l.flags & 128) !== 0, n || u ? (n = l.stateNode, e = u && typeof e.getDerivedStateFromError != "function" ? null : n.render(), l.flags |= 1, t !== null && u ? (l.child = su(l, t.child, null, a), l.child = su(l, null, e, a)) : Ut(t, l, e, a), l.memoizedState = n.state, t = l.child) : t = Yl(t, l, a), t;
  }
  function wr(t, l, e, u) {
    return Xu(), l.flags |= 256, Ut(t, l, e, u), l.child;
  }
  var df = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function yf(t) {
    return { baseLanes: t, cachePool: Ns() };
  }
  function hf(t, l, e) {
    return t = t !== null ? t.childLanes & ~e : 0, l && (t |= dl), t;
  }
  function Kr(t, l, e) {
    var u = l.pendingProps, a = false, n = (l.flags & 128) !== 0, c;
    if ((c = n) || (c = t !== null && t.memoizedState === null ? false : (Ot.current & 2) !== 0), c && (a = true, l.flags &= -129), c = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if (et) {
        if (a ? Fl(l) : Pl(), et) {
          var f = St, r;
          if (r = f) {
            t: {
              for (r = f, f = _l; r.nodeType !== 8; ) {
                if (!f) {
                  f = null;
                  break t;
                }
                if (r = gl(r.nextSibling), r === null) {
                  f = null;
                  break t;
                }
              }
              f = r;
            }
            f !== null ? (l.memoizedState = { dehydrated: f, treeContext: Ae !== null ? { id: xl, overflow: Ul } : null, retryLane: 536870912, hydrationErrors: null }, r = It(18, null, null, 0), r.stateNode = f, r.return = l, l.child = r, Qt = l, St = null, r = true) : r = false;
          }
          r || Oe(l);
        }
        if (f = l.memoizedState, f !== null && (f = f.dehydrated, f !== null)) return Ff(f) ? l.lanes = 32 : l.lanes = 536870912, null;
        jl(l);
      }
      return f = u.children, u = u.fallback, a ? (Pl(), a = l.mode, f = hn({ mode: "hidden", children: f }, a), u = Te(u, a, e, null), f.return = l, u.return = l, f.sibling = u, l.child = f, a = l.child, a.memoizedState = yf(e), a.childLanes = hf(t, c, e), l.memoizedState = df, u) : (Fl(l), vf(l, f));
    }
    if (r = t.memoizedState, r !== null && (f = r.dehydrated, f !== null)) {
      if (n) l.flags & 256 ? (Fl(l), l.flags &= -257, l = mf(t, l, e)) : l.memoizedState !== null ? (Pl(), l.child = t.child, l.flags |= 128, l = null) : (Pl(), a = u.fallback, f = l.mode, u = hn({ mode: "visible", children: u.children }, f), a = Te(a, f, e, null), a.flags |= 2, u.return = l, a.return = l, u.sibling = a, l.child = u, su(l, t.child, null, e), u = l.child, u.memoizedState = yf(e), u.childLanes = hf(t, c, e), l.memoizedState = df, l = a);
      else if (Fl(l), Ff(f)) {
        if (c = f.nextSibling && f.nextSibling.dataset, c) var g = c.dgst;
        c = g, u = Error(s(419)), u.stack = "", u.digest = c, Qu({ value: u, source: null, stack: null }), l = mf(t, l, e);
      } else if (Dt || Cu(t, l, e, false), c = (e & t.childLanes) !== 0, Dt || c) {
        if (c = dt, c !== null && (u = e & -e, u = (u & 42) !== 0 ? 1 : Fn(u), u = (u & (c.suspendedLanes | e)) !== 0 ? 0 : u, u !== 0 && u !== r.retryLane)) throw r.retryLane = u, Pe(t, u), al(c, t, u), Br;
        f.data === "$?" || qf(), l = mf(t, l, e);
      } else f.data === "$?" ? (l.flags |= 192, l.child = t.child, l = null) : (t = r.treeContext, St = gl(f.nextSibling), Qt = l, et = true, ze = null, _l = false, t !== null && (sl[rl++] = xl, sl[rl++] = Ul, sl[rl++] = Ae, xl = t.id, Ul = t.overflow, Ae = l), l = vf(l, u.children), l.flags |= 4096);
      return l;
    }
    return a ? (Pl(), a = u.fallback, f = l.mode, r = t.child, g = r.sibling, u = Rl(r, { mode: "hidden", children: u.children }), u.subtreeFlags = r.subtreeFlags & 65011712, g !== null ? a = Rl(g, a) : (a = Te(a, f, e, null), a.flags |= 2), a.return = l, u.return = l, u.sibling = a, l.child = u, u = a, a = l.child, f = t.child.memoizedState, f === null ? f = yf(e) : (r = f.cachePool, r !== null ? (g = zt._currentValue, r = r.parent !== g ? { parent: g, pool: g } : r) : r = Ns(), f = { baseLanes: f.baseLanes | e, cachePool: r }), a.memoizedState = f, a.childLanes = hf(t, c, e), l.memoizedState = df, u) : (Fl(l), e = t.child, t = e.sibling, e = Rl(e, { mode: "visible", children: u.children }), e.return = l, e.sibling = null, t !== null && (c = l.deletions, c === null ? (l.deletions = [t], l.flags |= 16) : c.push(t)), l.child = e, l.memoizedState = null, e);
  }
  function vf(t, l) {
    return l = hn({ mode: "visible", children: l }, t.mode), l.return = t, t.child = l;
  }
  function hn(t, l) {
    return t = It(22, t, null, l), t.lanes = 0, t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }, t;
  }
  function mf(t, l, e) {
    return su(l, t.child, null, e), t = vf(l, l.pendingProps.children), t.flags |= 2, l.memoizedState = null, t;
  }
  function Jr(t, l, e) {
    t.lanes |= l;
    var u = t.alternate;
    u !== null && (u.lanes |= l), Hc(t.return, l, e);
  }
  function gf(t, l, e, u, a) {
    var n = t.memoizedState;
    n === null ? t.memoizedState = { isBackwards: l, rendering: null, renderingStartTime: 0, last: u, tail: e, tailMode: a } : (n.isBackwards = l, n.rendering = null, n.renderingStartTime = 0, n.last = u, n.tail = e, n.tailMode = a);
  }
  function Wr(t, l, e) {
    var u = l.pendingProps, a = u.revealOrder, n = u.tail;
    if (Ut(t, l, u.children, e), u = Ot.current, (u & 2) !== 0) u = u & 1 | 2, l.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0) t: for (t = l.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Jr(t, e, l);
        else if (t.tag === 19) Jr(t, e, l);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === l) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      u &= 1;
    }
    switch (N(Ot, u), a) {
      case "forwards":
        for (e = l.child, a = null; e !== null; ) t = e.alternate, t !== null && rn(t) === null && (a = e), e = e.sibling;
        e = a, e === null ? (a = l.child, l.child = null) : (a = e.sibling, e.sibling = null), gf(l, false, a, e, n);
        break;
      case "backwards":
        for (e = null, a = l.child, l.child = null; a !== null; ) {
          if (t = a.alternate, t !== null && rn(t) === null) {
            l.child = a;
            break;
          }
          t = a.sibling, a.sibling = e, e = a, a = t;
        }
        gf(l, true, e, null, n);
        break;
      case "together":
        gf(l, false, null, null, void 0);
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function Yl(t, l, e) {
    if (t !== null && (l.dependencies = t.dependencies), ue |= l.lanes, (e & l.childLanes) === 0) if (t !== null) {
      if (Cu(t, l, e, false), (e & l.childLanes) === 0) return null;
    } else return null;
    if (t !== null && l.child !== t.child) throw Error(s(153));
    if (l.child !== null) {
      for (t = l.child, e = Rl(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; ) t = t.sibling, e = e.sibling = Rl(t, t.pendingProps), e.return = l;
      e.sibling = null;
    }
    return l.child;
  }
  function bf(t, l) {
    return (t.lanes & l) !== 0 ? true : (t = t.dependencies, !!(t !== null && Ja(t)));
  }
  function by(t, l, e) {
    switch (l.tag) {
      case 3:
        ht(l, l.stateNode.containerInfo), Kl(l, zt, t.memoizedState.cache), Xu();
        break;
      case 27:
      case 5:
        Kn(l);
        break;
      case 4:
        ht(l, l.stateNode.containerInfo);
        break;
      case 10:
        Kl(l, l.type, l.memoizedProps.value);
        break;
      case 13:
        var u = l.memoizedState;
        if (u !== null) return u.dehydrated !== null ? (Fl(l), l.flags |= 128, null) : (e & l.child.childLanes) !== 0 ? Kr(t, l, e) : (Fl(l), t = Yl(t, l, e), t !== null ? t.sibling : null);
        Fl(l);
        break;
      case 19:
        var a = (t.flags & 128) !== 0;
        if (u = (e & l.childLanes) !== 0, u || (Cu(t, l, e, false), u = (e & l.childLanes) !== 0), a) {
          if (u) return Wr(t, l, e);
          l.flags |= 128;
        }
        if (a = l.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), N(Ot, Ot.current), u) break;
        return null;
      case 22:
      case 23:
        return l.lanes = 0, Cr(t, l, e);
      case 24:
        Kl(l, zt, t.memoizedState.cache);
    }
    return Yl(t, l, e);
  }
  function $r(t, l, e) {
    if (t !== null) if (t.memoizedProps !== l.pendingProps) Dt = true;
    else {
      if (!bf(t, e) && (l.flags & 128) === 0) return Dt = false, by(t, l, e);
      Dt = (t.flags & 131072) !== 0;
    }
    else Dt = false, et && (l.flags & 1048576) !== 0 && zs(l, Ka, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        t: {
          t = l.pendingProps;
          var u = l.elementType, a = u._init;
          if (u = a(u._payload), l.type = u, typeof u == "function") Oc(u) ? (t = Ue(u, t), l.tag = 1, l = Lr(null, l, u, t, e)) : (l.tag = 0, l = of(null, l, u, t, e));
          else {
            if (u != null) {
              if (a = u.$$typeof, a === hl) {
                l.tag = 11, l = Gr(null, l, u, t, e);
                break t;
              } else if (a === Jt) {
                l.tag = 14, l = Xr(null, l, u, t, e);
                break t;
              }
            }
            throw l = me(u) || u, Error(s(306, l, ""));
          }
        }
        return l;
      case 0:
        return of(t, l, l.type, l.pendingProps, e);
      case 1:
        return u = l.type, a = Ue(u, l.pendingProps), Lr(t, l, u, a, e);
      case 3:
        t: {
          if (ht(l, l.stateNode.containerInfo), t === null) throw Error(s(387));
          u = l.pendingProps;
          var n = l.memoizedState;
          a = n.element, Qc(t, l), Wu(l, u, null, e);
          var c = l.memoizedState;
          if (u = c.cache, Kl(l, zt, u), u !== n.cache && qc(l, [zt], e, true), Ju(), u = c.element, n.isDehydrated) if (n = { element: u, isDehydrated: false, cache: c.cache }, l.updateQueue.baseState = n, l.memoizedState = n, l.flags & 256) {
            l = wr(t, l, u, e);
            break t;
          } else if (u !== a) {
            a = fl(Error(s(424)), l), Qu(a), l = wr(t, l, u, e);
            break t;
          } else {
            switch (t = l.stateNode.containerInfo, t.nodeType) {
              case 9:
                t = t.body;
                break;
              default:
                t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
            }
            for (St = gl(t.firstChild), Qt = l, et = true, ze = null, _l = true, e = Mr(l, null, u, e), l.child = e; e; ) e.flags = e.flags & -3 | 4096, e = e.sibling;
          }
          else {
            if (Xu(), u === a) {
              l = Yl(t, l, e);
              break t;
            }
            Ut(t, l, u, e);
          }
          l = l.child;
        }
        return l;
      case 26:
        return yn(t, l), t === null ? (e = td(l.type, null, l.pendingProps, null)) ? l.memoizedState = e : et || (e = l.type, t = l.pendingProps, u = Dn(L.current).createElement(e), u[Bt] = l, u[Ct] = t, Ht(u, e, t), Mt(u), l.stateNode = u) : l.memoizedState = td(l.type, t.memoizedProps, l.pendingProps, t.memoizedState), null;
      case 27:
        return Kn(l), t === null && et && (u = l.stateNode = Fo(l.type, l.pendingProps, L.current), Qt = l, _l = true, a = St, fe(l.type) ? (Pf = a, St = gl(u.firstChild)) : St = a), Ut(t, l, l.pendingProps.children, e), yn(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && et && ((a = u = St) && (u = Ky(u, l.type, l.pendingProps, _l), u !== null ? (l.stateNode = u, Qt = l, St = gl(u.firstChild), _l = false, a = true) : a = false), a || Oe(l)), Kn(l), a = l.type, n = l.pendingProps, c = t !== null ? t.memoizedProps : null, u = n.children, Wf(a, n) ? u = null : c !== null && Wf(a, c) && (l.flags |= 32), l.memoizedState !== null && (a = Kc(t, l, ry, null, null, e), ma._currentValue = a), yn(t, l), Ut(t, l, u, e), l.child;
      case 6:
        return t === null && et && ((t = e = St) && (e = Jy(e, l.pendingProps, _l), e !== null ? (l.stateNode = e, Qt = l, St = null, t = true) : t = false), t || Oe(l)), null;
      case 13:
        return Kr(t, l, e);
      case 4:
        return ht(l, l.stateNode.containerInfo), u = l.pendingProps, t === null ? l.child = su(l, null, u, e) : Ut(t, l, u, e), l.child;
      case 11:
        return Gr(t, l, l.type, l.pendingProps, e);
      case 7:
        return Ut(t, l, l.pendingProps, e), l.child;
      case 8:
        return Ut(t, l, l.pendingProps.children, e), l.child;
      case 12:
        return Ut(t, l, l.pendingProps.children, e), l.child;
      case 10:
        return u = l.pendingProps, Kl(l, l.type, u.value), Ut(t, l, u.children, e), l.child;
      case 9:
        return a = l.type._context, u = l.pendingProps.children, De(l), a = Gt(a), u = u(a), l.flags |= 1, Ut(t, l, u, e), l.child;
      case 14:
        return Xr(t, l, l.type, l.pendingProps, e);
      case 15:
        return Qr(t, l, l.type, l.pendingProps, e);
      case 19:
        return Wr(t, l, e);
      case 31:
        return u = l.pendingProps, e = l.mode, u = { mode: u.mode, children: u.children }, t === null ? (e = hn(u, e), e.ref = l.ref, l.child = e, e.return = l, l = e) : (e = Rl(t.child, u), e.ref = l.ref, l.child = e, e.return = l, l = e), l;
      case 22:
        return Cr(t, l, e);
      case 24:
        return De(l), u = Gt(zt), t === null ? (a = Bc(), a === null && (a = dt, n = jc(), a.pooledCache = n, n.refCount++, n !== null && (a.pooledCacheLanes |= e), a = n), l.memoizedState = { parent: u, cache: a }, Xc(l), Kl(l, zt, a)) : ((t.lanes & e) !== 0 && (Qc(t, l), Wu(l, null, null, e), Ju()), a = t.memoizedState, n = l.memoizedState, a.parent !== u ? (a = { parent: u, cache: u }, l.memoizedState = a, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = a), Kl(l, zt, u)) : (u = n.cache, Kl(l, zt, u), u !== a.cache && qc(l, [zt], e, true))), Ut(t, l, l.pendingProps.children, e), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(s(156, l.tag));
  }
  function Bl(t) {
    t.flags |= 4;
  }
  function kr(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (t.flags |= 16777216, !nd(l)) {
      if (l = ol.current, l !== null && ((P & 4194048) === P ? El !== null : (P & 62914560) !== P && (P & 536870912) === 0 || l !== El)) throw wu = Gc, Hs;
      t.flags |= 8192;
    }
  }
  function vn(t, l) {
    l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? Di() : 536870912, t.lanes |= l, yu |= l);
  }
  function la(t, l) {
    if (!et) switch (t.tailMode) {
      case "hidden":
        l = t.tail;
        for (var e = null; l !== null; ) l.alternate !== null && (e = l), l = l.sibling;
        e === null ? t.tail = null : e.sibling = null;
        break;
      case "collapsed":
        e = t.tail;
        for (var u = null; e !== null; ) e.alternate !== null && (u = e), e = e.sibling;
        u === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : u.sibling = null;
    }
  }
  function gt(t) {
    var l = t.alternate !== null && t.alternate.child === t.child, e = 0, u = 0;
    if (l) for (var a = t.child; a !== null; ) e |= a.lanes | a.childLanes, u |= a.subtreeFlags & 65011712, u |= a.flags & 65011712, a.return = t, a = a.sibling;
    else for (a = t.child; a !== null; ) e |= a.lanes | a.childLanes, u |= a.subtreeFlags, u |= a.flags, a.return = t, a = a.sibling;
    return t.subtreeFlags |= u, t.childLanes = e, l;
  }
  function Sy(t, l, e) {
    var u = l.pendingProps;
    switch (xc(l), l.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return gt(l), null;
      case 1:
        return gt(l), null;
      case 3:
        return e = l.stateNode, u = null, t !== null && (u = t.memoizedState.cache), l.memoizedState.cache !== u && (l.flags |= 2048), Hl(zt), Zl(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (Gu(l) ? Bl(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Ds())), gt(l), null;
      case 26:
        return e = l.memoizedState, t === null ? (Bl(l), e !== null ? (gt(l), kr(l, e)) : (gt(l), l.flags &= -16777217)) : e ? e !== t.memoizedState ? (Bl(l), gt(l), kr(l, e)) : (gt(l), l.flags &= -16777217) : (t.memoizedProps !== u && Bl(l), gt(l), l.flags &= -16777217), null;
      case 27:
        za(l), e = L.current;
        var a = l.type;
        if (t !== null && l.stateNode != null) t.memoizedProps !== u && Bl(l);
        else {
          if (!u) {
            if (l.stateNode === null) throw Error(s(166));
            return gt(l), null;
          }
          t = G.current, Gu(l) ? Os(l) : (t = Fo(a, u, e), l.stateNode = t, Bl(l));
        }
        return gt(l), null;
      case 5:
        if (za(l), e = l.type, t !== null && l.stateNode != null) t.memoizedProps !== u && Bl(l);
        else {
          if (!u) {
            if (l.stateNode === null) throw Error(s(166));
            return gt(l), null;
          }
          if (t = G.current, Gu(l)) Os(l);
          else {
            switch (a = Dn(L.current), t) {
              case 1:
                t = a.createElementNS("http://www.w3.org/2000/svg", e);
                break;
              case 2:
                t = a.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                break;
              default:
                switch (e) {
                  case "svg":
                    t = a.createElementNS("http://www.w3.org/2000/svg", e);
                    break;
                  case "math":
                    t = a.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                    break;
                  case "script":
                    t = a.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                    break;
                  case "select":
                    t = typeof u.is == "string" ? a.createElement("select", { is: u.is }) : a.createElement("select"), u.multiple ? t.multiple = true : u.size && (t.size = u.size);
                    break;
                  default:
                    t = typeof u.is == "string" ? a.createElement(e, { is: u.is }) : a.createElement(e);
                }
            }
            t[Bt] = l, t[Ct] = u;
            t: for (a = l.child; a !== null; ) {
              if (a.tag === 5 || a.tag === 6) t.appendChild(a.stateNode);
              else if (a.tag !== 4 && a.tag !== 27 && a.child !== null) {
                a.child.return = a, a = a.child;
                continue;
              }
              if (a === l) break t;
              for (; a.sibling === null; ) {
                if (a.return === null || a.return === l) break t;
                a = a.return;
              }
              a.sibling.return = a.return, a = a.sibling;
            }
            l.stateNode = t;
            t: switch (Ht(t, e, u), e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!u.autoFocus;
                break t;
              case "img":
                t = true;
                break t;
              default:
                t = false;
            }
            t && Bl(l);
          }
        }
        return gt(l), l.flags &= -16777217, null;
      case 6:
        if (t && l.stateNode != null) t.memoizedProps !== u && Bl(l);
        else {
          if (typeof u != "string" && l.stateNode === null) throw Error(s(166));
          if (t = L.current, Gu(l)) {
            if (t = l.stateNode, e = l.memoizedProps, u = null, a = Qt, a !== null) switch (a.tag) {
              case 27:
              case 5:
                u = a.memoizedProps;
            }
            t[Bt] = l, t = !!(t.nodeValue === e || u !== null && u.suppressHydrationWarning === true || Lo(t.nodeValue, e)), t || Oe(l);
          } else t = Dn(t).createTextNode(u), t[Bt] = l, l.stateNode = t;
        }
        return gt(l), null;
      case 13:
        if (u = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (a = Gu(l), u !== null && u.dehydrated !== null) {
            if (t === null) {
              if (!a) throw Error(s(318));
              if (a = l.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(s(317));
              a[Bt] = l;
            } else Xu(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            gt(l), a = false;
          } else a = Ds(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), a = true;
          if (!a) return l.flags & 256 ? (jl(l), l) : (jl(l), null);
        }
        if (jl(l), (l.flags & 128) !== 0) return l.lanes = e, l;
        if (e = u !== null, t = t !== null && t.memoizedState !== null, e) {
          u = l.child, a = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (a = u.alternate.memoizedState.cachePool.pool);
          var n = null;
          u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== a && (u.flags |= 2048);
        }
        return e !== t && e && (l.child.flags |= 8192), vn(l, l.updateQueue), gt(l), null;
      case 4:
        return Zl(), t === null && Vf(l.stateNode.containerInfo), gt(l), null;
      case 10:
        return Hl(l.type), gt(l), null;
      case 19:
        if (q(Ot), a = l.memoizedState, a === null) return gt(l), null;
        if (u = (l.flags & 128) !== 0, n = a.rendering, n === null) if (u) la(a, false);
        else {
          if (_t !== 0 || t !== null && (t.flags & 128) !== 0) for (t = l.child; t !== null; ) {
            if (n = rn(t), n !== null) {
              for (l.flags |= 128, la(a, false), t = n.updateQueue, l.updateQueue = t, vn(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; ) ps(e, t), e = e.sibling;
              return N(Ot, Ot.current & 1 | 2), l.child;
            }
            t = t.sibling;
          }
          a.tail !== null && Sl() > bn && (l.flags |= 128, u = true, la(a, false), l.lanes = 4194304);
        }
        else {
          if (!u) if (t = rn(n), t !== null) {
            if (l.flags |= 128, u = true, t = t.updateQueue, l.updateQueue = t, vn(l, t), la(a, true), a.tail === null && a.tailMode === "hidden" && !n.alternate && !et) return gt(l), null;
          } else 2 * Sl() - a.renderingStartTime > bn && e !== 536870912 && (l.flags |= 128, u = true, la(a, false), l.lanes = 4194304);
          a.isBackwards ? (n.sibling = l.child, l.child = n) : (t = a.last, t !== null ? t.sibling = n : l.child = n, a.last = n);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = Sl(), l.sibling = null, t = Ot.current, N(Ot, u ? t & 1 | 2 : t & 1), l) : (gt(l), null);
      case 22:
      case 23:
        return jl(l), Lc(), u = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== u && (l.flags |= 8192) : u && (l.flags |= 8192), u ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (gt(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : gt(l), e = l.updateQueue, e !== null && vn(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== e && (l.flags |= 2048), t !== null && q(Re), null;
      case 24:
        return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), Hl(zt), gt(l), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, l.tag));
  }
  function _y(t, l) {
    switch (xc(l), l.tag) {
      case 1:
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 3:
        return Hl(zt), Zl(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return za(l), null;
      case 13:
        if (jl(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
          if (l.alternate === null) throw Error(s(340));
          Xu();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 19:
        return q(Ot), null;
      case 4:
        return Zl(), null;
      case 10:
        return Hl(l.type), null;
      case 22:
      case 23:
        return jl(l), Lc(), t !== null && q(Re), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 24:
        return Hl(zt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Fr(t, l) {
    switch (xc(l), l.tag) {
      case 3:
        Hl(zt), Zl();
        break;
      case 26:
      case 27:
      case 5:
        za(l);
        break;
      case 4:
        Zl();
        break;
      case 13:
        jl(l);
        break;
      case 19:
        q(Ot);
        break;
      case 10:
        Hl(l.type);
        break;
      case 22:
      case 23:
        jl(l), Lc(), t !== null && q(Re);
        break;
      case 24:
        Hl(zt);
    }
  }
  function ea(t, l) {
    try {
      var e = l.updateQueue, u = e !== null ? e.lastEffect : null;
      if (u !== null) {
        var a = u.next;
        e = a;
        do {
          if ((e.tag & t) === t) {
            u = void 0;
            var n = e.create, c = e.inst;
            u = n(), c.destroy = u;
          }
          e = e.next;
        } while (e !== a);
      }
    } catch (f) {
      ot(l, l.return, f);
    }
  }
  function Il(t, l, e) {
    try {
      var u = l.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        u = n;
        do {
          if ((u.tag & t) === t) {
            var c = u.inst, f = c.destroy;
            if (f !== void 0) {
              c.destroy = void 0, a = l;
              var r = e, g = f;
              try {
                g();
              } catch (T) {
                ot(a, r, T);
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (T) {
      ot(l, l.return, T);
    }
  }
  function Pr(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        Xs(l, e);
      } catch (u) {
        ot(t, t.return, u);
      }
    }
  }
  function Ir(t, l, e) {
    e.props = Ue(t.type, t.memoizedProps), e.state = t.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (u) {
      ot(t, l, u);
    }
  }
  function ua(t, l) {
    try {
      var e = t.ref;
      if (e !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var u = t.stateNode;
            break;
          case 30:
            u = t.stateNode;
            break;
          default:
            u = t.stateNode;
        }
        typeof e == "function" ? t.refCleanup = e(u) : e.current = u;
      }
    } catch (a) {
      ot(t, l, a);
    }
  }
  function Tl(t, l) {
    var e = t.ref, u = t.refCleanup;
    if (e !== null) if (typeof u == "function") try {
      u();
    } catch (a) {
      ot(t, l, a);
    } finally {
      t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
    }
    else if (typeof e == "function") try {
      e(null);
    } catch (a) {
      ot(t, l, a);
    }
    else e.current = null;
  }
  function to(t) {
    var l = t.type, e = t.memoizedProps, u = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && u.focus();
          break t;
        case "img":
          e.src ? u.src = e.src : e.srcSet && (u.srcset = e.srcSet);
      }
    } catch (a) {
      ot(t, t.return, a);
    }
  }
  function Sf(t, l, e) {
    try {
      var u = t.stateNode;
      Cy(u, t.type, e, l), u[Ct] = l;
    } catch (a) {
      ot(t, t.return, a);
    }
  }
  function lo(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && fe(t.type) || t.tag === 4;
  }
  function _f(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || lo(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && fe(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Ef(t, l, e) {
    var u = t.tag;
    if (u === 5 || u === 6) t = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(t, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(t), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = Mn));
    else if (u !== 4 && (u === 27 && fe(t.type) && (e = t.stateNode, l = null), t = t.child, t !== null)) for (Ef(t, l, e), t = t.sibling; t !== null; ) Ef(t, l, e), t = t.sibling;
  }
  function mn(t, l, e) {
    var u = t.tag;
    if (u === 5 || u === 6) t = t.stateNode, l ? e.insertBefore(t, l) : e.appendChild(t);
    else if (u !== 4 && (u === 27 && fe(t.type) && (e = t.stateNode), t = t.child, t !== null)) for (mn(t, l, e), t = t.sibling; t !== null; ) mn(t, l, e), t = t.sibling;
  }
  function eo(t) {
    var l = t.stateNode, e = t.memoizedProps;
    try {
      for (var u = t.type, a = l.attributes; a.length; ) l.removeAttributeNode(a[0]);
      Ht(l, u, e), l[Bt] = t, l[Ct] = e;
    } catch (n) {
      ot(t, t.return, n);
    }
  }
  var Gl = false, Tt = false, Tf = false, uo = typeof WeakSet == "function" ? WeakSet : Set, Rt = null;
  function Ey(t, l) {
    if (t = t.containerInfo, Kf = qn, t = hs(t), Sc(t)) {
      if ("selectionStart" in t) var e = { start: t.selectionStart, end: t.selectionEnd };
      else t: {
        e = (e = t.ownerDocument) && e.defaultView || window;
        var u = e.getSelection && e.getSelection();
        if (u && u.rangeCount !== 0) {
          e = u.anchorNode;
          var a = u.anchorOffset, n = u.focusNode;
          u = u.focusOffset;
          try {
            e.nodeType, n.nodeType;
          } catch {
            e = null;
            break t;
          }
          var c = 0, f = -1, r = -1, g = 0, T = 0, z = t, b = null;
          l: for (; ; ) {
            for (var S; z !== e || a !== 0 && z.nodeType !== 3 || (f = c + a), z !== n || u !== 0 && z.nodeType !== 3 || (r = c + u), z.nodeType === 3 && (c += z.nodeValue.length), (S = z.firstChild) !== null; ) b = z, z = S;
            for (; ; ) {
              if (z === t) break l;
              if (b === e && ++g === a && (f = c), b === n && ++T === u && (r = c), (S = z.nextSibling) !== null) break;
              z = b, b = z.parentNode;
            }
            z = S;
          }
          e = f === -1 || r === -1 ? null : { start: f, end: r };
        } else e = null;
      }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (Jf = { focusedElem: t, selectionRange: e }, qn = false, Rt = l; Rt !== null; ) if (l = Rt, t = l.child, (l.subtreeFlags & 1024) !== 0 && t !== null) t.return = l, Rt = t;
    else for (; Rt !== null; ) {
      switch (l = Rt, n = l.alternate, t = l.flags, l.tag) {
        case 0:
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((t & 1024) !== 0 && n !== null) {
            t = void 0, e = l, a = n.memoizedProps, n = n.memoizedState, u = e.stateNode;
            try {
              var V = Ue(e.type, a, e.elementType === e.type);
              t = u.getSnapshotBeforeUpdate(V, n), u.__reactInternalSnapshotBeforeUpdate = t;
            } catch (X) {
              ot(e, e.return, X);
            }
          }
          break;
        case 3:
          if ((t & 1024) !== 0) {
            if (t = l.stateNode.containerInfo, e = t.nodeType, e === 9) kf(t);
            else if (e === 1) switch (t.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                kf(t);
                break;
              default:
                t.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((t & 1024) !== 0) throw Error(s(163));
      }
      if (t = l.sibling, t !== null) {
        t.return = l.return, Rt = t;
        break;
      }
      Rt = l.return;
    }
  }
  function ao(t, l, e) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        te(t, e), u & 4 && ea(5, e);
        break;
      case 1:
        if (te(t, e), u & 4) if (t = e.stateNode, l === null) try {
          t.componentDidMount();
        } catch (c) {
          ot(e, e.return, c);
        }
        else {
          var a = Ue(e.type, l.memoizedProps);
          l = l.memoizedState;
          try {
            t.componentDidUpdate(a, l, t.__reactInternalSnapshotBeforeUpdate);
          } catch (c) {
            ot(e, e.return, c);
          }
        }
        u & 64 && Pr(e), u & 512 && ua(e, e.return);
        break;
      case 3:
        if (te(t, e), u & 64 && (t = e.updateQueue, t !== null)) {
          if (l = null, e.child !== null) switch (e.child.tag) {
            case 27:
            case 5:
              l = e.child.stateNode;
              break;
            case 1:
              l = e.child.stateNode;
          }
          try {
            Xs(t, l);
          } catch (c) {
            ot(e, e.return, c);
          }
        }
        break;
      case 27:
        l === null && u & 4 && eo(e);
      case 26:
      case 5:
        te(t, e), l === null && u & 4 && to(e), u & 512 && ua(e, e.return);
        break;
      case 12:
        te(t, e);
        break;
      case 13:
        te(t, e), u & 4 && fo(t, e), u & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = xy.bind(null, e), Wy(t, e))));
        break;
      case 22:
        if (u = e.memoizedState !== null || Gl, !u) {
          l = l !== null && l.memoizedState !== null || Tt, a = Gl;
          var n = Tt;
          Gl = u, (Tt = l) && !n ? le(t, e, (e.subtreeFlags & 8772) !== 0) : te(t, e), Gl = a, Tt = n;
        }
        break;
      case 30:
        break;
      default:
        te(t, e);
    }
  }
  function no(t) {
    var l = t.alternate;
    l !== null && (t.alternate = null, no(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && tc(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var vt = null, Lt = false;
  function Xl(t, l, e) {
    for (e = e.child; e !== null; ) co(t, l, e), e = e.sibling;
  }
  function co(t, l, e) {
    if (kt && typeof kt.onCommitFiberUnmount == "function") try {
      kt.onCommitFiberUnmount(pu, e);
    } catch {
    }
    switch (e.tag) {
      case 26:
        Tt || Tl(e, l), Xl(t, l, e), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        Tt || Tl(e, l);
        var u = vt, a = Lt;
        fe(e.type) && (vt = e.stateNode, Lt = false), Xl(t, l, e), da(e.stateNode), vt = u, Lt = a;
        break;
      case 5:
        Tt || Tl(e, l);
      case 6:
        if (u = vt, a = Lt, vt = null, Xl(t, l, e), vt = u, Lt = a, vt !== null) if (Lt) try {
          (vt.nodeType === 9 ? vt.body : vt.nodeName === "HTML" ? vt.ownerDocument.body : vt).removeChild(e.stateNode);
        } catch (n) {
          ot(e, l, n);
        }
        else try {
          vt.removeChild(e.stateNode);
        } catch (n) {
          ot(e, l, n);
        }
        break;
      case 18:
        vt !== null && (Lt ? (t = vt, $o(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, e.stateNode), _a(t)) : $o(vt, e.stateNode));
        break;
      case 4:
        u = vt, a = Lt, vt = e.stateNode.containerInfo, Lt = true, Xl(t, l, e), vt = u, Lt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Tt || Il(2, e, l), Tt || Il(4, e, l), Xl(t, l, e);
        break;
      case 1:
        Tt || (Tl(e, l), u = e.stateNode, typeof u.componentWillUnmount == "function" && Ir(e, l, u)), Xl(t, l, e);
        break;
      case 21:
        Xl(t, l, e);
        break;
      case 22:
        Tt = (u = Tt) || e.memoizedState !== null, Xl(t, l, e), Tt = u;
        break;
      default:
        Xl(t, l, e);
    }
  }
  function fo(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
      _a(t);
    } catch (e) {
      ot(l, l.return, e);
    }
  }
  function Ty(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new uo()), l;
      case 22:
        return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new uo()), l;
      default:
        throw Error(s(435, t.tag));
    }
  }
  function Af(t, l) {
    var e = Ty(t);
    l.forEach(function(u) {
      var a = Uy.bind(null, t, u);
      e.has(u) || (e.add(u), u.then(a, a));
    });
  }
  function tl(t, l) {
    var e = l.deletions;
    if (e !== null) for (var u = 0; u < e.length; u++) {
      var a = e[u], n = t, c = l, f = c;
      t: for (; f !== null; ) {
        switch (f.tag) {
          case 27:
            if (fe(f.type)) {
              vt = f.stateNode, Lt = false;
              break t;
            }
            break;
          case 5:
            vt = f.stateNode, Lt = false;
            break t;
          case 3:
          case 4:
            vt = f.stateNode.containerInfo, Lt = true;
            break t;
        }
        f = f.return;
      }
      if (vt === null) throw Error(s(160));
      co(n, c, a), vt = null, Lt = false, n = a.alternate, n !== null && (n.return = null), a.return = null;
    }
    if (l.subtreeFlags & 13878) for (l = l.child; l !== null; ) io(l, t), l = l.sibling;
  }
  var ml = null;
  function io(t, l) {
    var e = t.alternate, u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        tl(l, t), ll(t), u & 4 && (Il(3, t, t.return), ea(3, t), Il(5, t, t.return));
        break;
      case 1:
        tl(l, t), ll(t), u & 512 && (Tt || e === null || Tl(e, e.return)), u & 64 && Gl && (t = t.updateQueue, t !== null && (u = t.callbacks, u !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? u : e.concat(u))));
        break;
      case 26:
        var a = ml;
        if (tl(l, t), ll(t), u & 512 && (Tt || e === null || Tl(e, e.return)), u & 4) {
          var n = e !== null ? e.memoizedState : null;
          if (u = t.memoizedState, e === null) if (u === null) if (t.stateNode === null) {
            t: {
              u = t.type, e = t.memoizedProps, a = a.ownerDocument || a;
              l: switch (u) {
                case "title":
                  n = a.getElementsByTagName("title")[0], (!n || n[Mu] || n[Bt] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = a.createElement(u), a.head.insertBefore(n, a.querySelector("head > title"))), Ht(n, u, e), n[Bt] = t, Mt(n), u = n;
                  break t;
                case "link":
                  var c = ud("link", "href", a).get(u + (e.href || ""));
                  if (c) {
                    for (var f = 0; f < c.length; f++) if (n = c[f], n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                      c.splice(f, 1);
                      break l;
                    }
                  }
                  n = a.createElement(u), Ht(n, u, e), a.head.appendChild(n);
                  break;
                case "meta":
                  if (c = ud("meta", "content", a).get(u + (e.content || ""))) {
                    for (f = 0; f < c.length; f++) if (n = c[f], n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                      c.splice(f, 1);
                      break l;
                    }
                  }
                  n = a.createElement(u), Ht(n, u, e), a.head.appendChild(n);
                  break;
                default:
                  throw Error(s(468, u));
              }
              n[Bt] = t, Mt(n), u = n;
            }
            t.stateNode = u;
          } else ad(a, t.type, t.stateNode);
          else t.stateNode = ed(a, u, t.memoizedProps);
          else n !== u ? (n === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : n.count--, u === null ? ad(a, t.type, t.stateNode) : ed(a, u, t.memoizedProps)) : u === null && t.stateNode !== null && Sf(t, t.memoizedProps, e.memoizedProps);
        }
        break;
      case 27:
        tl(l, t), ll(t), u & 512 && (Tt || e === null || Tl(e, e.return)), e !== null && u & 4 && Sf(t, t.memoizedProps, e.memoizedProps);
        break;
      case 5:
        if (tl(l, t), ll(t), u & 512 && (Tt || e === null || Tl(e, e.return)), t.flags & 32) {
          a = t.stateNode;
          try {
            we(a, "");
          } catch (S) {
            ot(t, t.return, S);
          }
        }
        u & 4 && t.stateNode != null && (a = t.memoizedProps, Sf(t, a, e !== null ? e.memoizedProps : a)), u & 1024 && (Tf = true);
        break;
      case 6:
        if (tl(l, t), ll(t), u & 4) {
          if (t.stateNode === null) throw Error(s(162));
          u = t.memoizedProps, e = t.stateNode;
          try {
            e.nodeValue = u;
          } catch (S) {
            ot(t, t.return, S);
          }
        }
        break;
      case 3:
        if (Un = null, a = ml, ml = Rn(l.containerInfo), tl(l, t), ml = a, ll(t), u & 4 && e !== null && e.memoizedState.isDehydrated) try {
          _a(l.containerInfo);
        } catch (S) {
          ot(t, t.return, S);
        }
        Tf && (Tf = false, so(t));
        break;
      case 4:
        u = ml, ml = Rn(t.stateNode.containerInfo), tl(l, t), ll(t), ml = u;
        break;
      case 12:
        tl(l, t), ll(t);
        break;
      case 13:
        tl(l, t), ll(t), t.child.flags & 8192 && t.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Rf = Sl()), u & 4 && (u = t.updateQueue, u !== null && (t.updateQueue = null, Af(t, u)));
        break;
      case 22:
        a = t.memoizedState !== null;
        var r = e !== null && e.memoizedState !== null, g = Gl, T = Tt;
        if (Gl = g || a, Tt = T || r, tl(l, t), Tt = T, Gl = g, ll(t), u & 8192) t: for (l = t.stateNode, l._visibility = a ? l._visibility & -2 : l._visibility | 1, a && (e === null || r || Gl || Tt || Ne(t)), e = null, l = t; ; ) {
          if (l.tag === 5 || l.tag === 26) {
            if (e === null) {
              r = e = l;
              try {
                if (n = r.stateNode, a) c = n.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                else {
                  f = r.stateNode;
                  var z = r.memoizedProps.style, b = z != null && z.hasOwnProperty("display") ? z.display : null;
                  f.style.display = b == null || typeof b == "boolean" ? "" : ("" + b).trim();
                }
              } catch (S) {
                ot(r, r.return, S);
              }
            }
          } else if (l.tag === 6) {
            if (e === null) {
              r = l;
              try {
                r.stateNode.nodeValue = a ? "" : r.memoizedProps;
              } catch (S) {
                ot(r, r.return, S);
              }
            }
          } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === t) && l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === t) break t;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t) break t;
            e === l && (e = null), l = l.return;
          }
          e === l && (e = null), l.sibling.return = l.return, l = l.sibling;
        }
        u & 4 && (u = t.updateQueue, u !== null && (e = u.retryQueue, e !== null && (u.retryQueue = null, Af(t, e))));
        break;
      case 19:
        tl(l, t), ll(t), u & 4 && (u = t.updateQueue, u !== null && (t.updateQueue = null, Af(t, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        tl(l, t), ll(t);
    }
  }
  function ll(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, u = t.return; u !== null; ) {
          if (lo(u)) {
            e = u;
            break;
          }
          u = u.return;
        }
        if (e == null) throw Error(s(160));
        switch (e.tag) {
          case 27:
            var a = e.stateNode, n = _f(t);
            mn(t, n, a);
            break;
          case 5:
            var c = e.stateNode;
            e.flags & 32 && (we(c, ""), e.flags &= -33);
            var f = _f(t);
            mn(t, f, c);
            break;
          case 3:
          case 4:
            var r = e.stateNode.containerInfo, g = _f(t);
            Ef(t, g, r);
            break;
          default:
            throw Error(s(161));
        }
      } catch (T) {
        ot(t, t.return, T);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function so(t) {
    if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
      var l = t;
      so(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), t = t.sibling;
    }
  }
  function te(t, l) {
    if (l.subtreeFlags & 8772) for (l = l.child; l !== null; ) ao(t, l.alternate, l), l = l.sibling;
  }
  function Ne(t) {
    for (t = t.child; t !== null; ) {
      var l = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Il(4, l, l.return), Ne(l);
          break;
        case 1:
          Tl(l, l.return);
          var e = l.stateNode;
          typeof e.componentWillUnmount == "function" && Ir(l, l.return, e), Ne(l);
          break;
        case 27:
          da(l.stateNode);
        case 26:
        case 5:
          Tl(l, l.return), Ne(l);
          break;
        case 22:
          l.memoizedState === null && Ne(l);
          break;
        case 30:
          Ne(l);
          break;
        default:
          Ne(l);
      }
      t = t.sibling;
    }
  }
  function le(t, l, e) {
    for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var u = l.alternate, a = t, n = l, c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          le(a, n, e), ea(4, n);
          break;
        case 1:
          if (le(a, n, e), u = n, a = u.stateNode, typeof a.componentDidMount == "function") try {
            a.componentDidMount();
          } catch (g) {
            ot(u, u.return, g);
          }
          if (u = n, a = u.updateQueue, a !== null) {
            var f = u.stateNode;
            try {
              var r = a.shared.hiddenCallbacks;
              if (r !== null) for (a.shared.hiddenCallbacks = null, a = 0; a < r.length; a++) Gs(r[a], f);
            } catch (g) {
              ot(u, u.return, g);
            }
          }
          e && c & 64 && Pr(n), ua(n, n.return);
          break;
        case 27:
          eo(n);
        case 26:
        case 5:
          le(a, n, e), e && u === null && c & 4 && to(n), ua(n, n.return);
          break;
        case 12:
          le(a, n, e);
          break;
        case 13:
          le(a, n, e), e && c & 4 && fo(a, n);
          break;
        case 22:
          n.memoizedState === null && le(a, n, e), ua(n, n.return);
          break;
        case 30:
          break;
        default:
          le(a, n, e);
      }
      l = l.sibling;
    }
  }
  function pf(t, l) {
    var e = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && Zu(e));
  }
  function zf(t, l) {
    t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && Zu(t));
  }
  function Al(t, l, e, u) {
    if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) ro(t, l, e, u), l = l.sibling;
  }
  function ro(t, l, e, u) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Al(t, l, e, u), a & 2048 && ea(9, l);
        break;
      case 1:
        Al(t, l, e, u);
        break;
      case 3:
        Al(t, l, e, u), a & 2048 && (t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && Zu(t)));
        break;
      case 12:
        if (a & 2048) {
          Al(t, l, e, u), t = l.stateNode;
          try {
            var n = l.memoizedProps, c = n.id, f = n.onPostCommit;
            typeof f == "function" && f(c, l.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (r) {
            ot(l, l.return, r);
          }
        } else Al(t, l, e, u);
        break;
      case 13:
        Al(t, l, e, u);
        break;
      case 23:
        break;
      case 22:
        n = l.stateNode, c = l.alternate, l.memoizedState !== null ? n._visibility & 2 ? Al(t, l, e, u) : aa(t, l) : n._visibility & 2 ? Al(t, l, e, u) : (n._visibility |= 2, ru(t, l, e, u, (l.subtreeFlags & 10256) !== 0)), a & 2048 && pf(c, l);
        break;
      case 24:
        Al(t, l, e, u), a & 2048 && zf(l.alternate, l);
        break;
      default:
        Al(t, l, e, u);
    }
  }
  function ru(t, l, e, u, a) {
    for (a = a && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null; ) {
      var n = t, c = l, f = e, r = u, g = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          ru(n, c, f, r, a), ea(8, c);
          break;
        case 23:
          break;
        case 22:
          var T = c.stateNode;
          c.memoizedState !== null ? T._visibility & 2 ? ru(n, c, f, r, a) : aa(n, c) : (T._visibility |= 2, ru(n, c, f, r, a)), a && g & 2048 && pf(c.alternate, c);
          break;
        case 24:
          ru(n, c, f, r, a), a && g & 2048 && zf(c.alternate, c);
          break;
        default:
          ru(n, c, f, r, a);
      }
      l = l.sibling;
    }
  }
  function aa(t, l) {
    if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) {
      var e = t, u = l, a = u.flags;
      switch (u.tag) {
        case 22:
          aa(e, u), a & 2048 && pf(u.alternate, u);
          break;
        case 24:
          aa(e, u), a & 2048 && zf(u.alternate, u);
          break;
        default:
          aa(e, u);
      }
      l = l.sibling;
    }
  }
  var na = 8192;
  function ou(t) {
    if (t.subtreeFlags & na) for (t = t.child; t !== null; ) oo(t), t = t.sibling;
  }
  function oo(t) {
    switch (t.tag) {
      case 26:
        ou(t), t.flags & na && t.memoizedState !== null && fh(ml, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        ou(t);
        break;
      case 3:
      case 4:
        var l = ml;
        ml = Rn(t.stateNode.containerInfo), ou(t), ml = l;
        break;
      case 22:
        t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = na, na = 16777216, ou(t), na = l) : ou(t));
        break;
      default:
        ou(t);
    }
  }
  function yo(t) {
    var l = t.alternate;
    if (l !== null && (t = l.child, t !== null)) {
      l.child = null;
      do
        l = t.sibling, t.sibling = null, t = l;
      while (t !== null);
    }
  }
  function ca(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null) for (var e = 0; e < l.length; e++) {
        var u = l[e];
        Rt = u, vo(u, t);
      }
      yo(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) ho(t), t = t.sibling;
  }
  function ho(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ca(t), t.flags & 2048 && Il(9, t, t.return);
        break;
      case 3:
        ca(t);
        break;
      case 12:
        ca(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, gn(t)) : ca(t);
        break;
      default:
        ca(t);
    }
  }
  function gn(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null) for (var e = 0; e < l.length; e++) {
        var u = l[e];
        Rt = u, vo(u, t);
      }
      yo(t);
    }
    for (t = t.child; t !== null; ) {
      switch (l = t, l.tag) {
        case 0:
        case 11:
        case 15:
          Il(8, l, l.return), gn(l);
          break;
        case 22:
          e = l.stateNode, e._visibility & 2 && (e._visibility &= -3, gn(l));
          break;
        default:
          gn(l);
      }
      t = t.sibling;
    }
  }
  function vo(t, l) {
    for (; Rt !== null; ) {
      var e = Rt;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Il(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var u = e.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Zu(e.memoizedState.cache);
      }
      if (u = e.child, u !== null) u.return = e, Rt = u;
      else t: for (e = t; Rt !== null; ) {
        u = Rt;
        var a = u.sibling, n = u.return;
        if (no(u), u === e) {
          Rt = null;
          break t;
        }
        if (a !== null) {
          a.return = n, Rt = a;
          break t;
        }
        Rt = n;
      }
    }
  }
  var Ay = { getCacheForType: function(t) {
    var l = Gt(zt), e = l.data.get(t);
    return e === void 0 && (e = t(), l.data.set(t, e)), e;
  } }, py = typeof WeakMap == "function" ? WeakMap : Map, at = 0, dt = null, $ = null, P = 0, nt = 0, el = null, ee = false, du = false, Of = false, Ql = 0, _t = 0, ue = 0, He = 0, Mf = 0, dl = 0, yu = 0, fa = null, wt = null, Df = false, Rf = 0, bn = 1 / 0, Sn = null, ae = null, Nt = 0, ne = null, hu = null, vu = 0, xf = 0, Uf = null, mo = null, ia = 0, Nf = null;
  function ul() {
    if ((at & 2) !== 0 && P !== 0) return P & -P;
    if (A.T !== null) {
      var t = eu;
      return t !== 0 ? t : Xf();
    }
    return Ui();
  }
  function go() {
    dl === 0 && (dl = (P & 536870912) === 0 || et ? Mi() : 536870912);
    var t = ol.current;
    return t !== null && (t.flags |= 32), dl;
  }
  function al(t, l, e) {
    (t === dt && (nt === 2 || nt === 9) || t.cancelPendingCommit !== null) && (mu(t, 0), ce(t, P, dl, false)), Ou(t, e), ((at & 2) === 0 || t !== dt) && (t === dt && ((at & 2) === 0 && (He |= e), _t === 4 && ce(t, P, dl, false)), pl(t));
  }
  function bo(t, l, e) {
    if ((at & 6) !== 0) throw Error(s(327));
    var u = !e && (l & 124) === 0 && (l & t.expiredLanes) === 0 || zu(t, l), a = u ? My(t, l) : jf(t, l, true), n = u;
    do {
      if (a === 0) {
        du && !u && ce(t, l, 0, false);
        break;
      } else {
        if (e = t.current.alternate, n && !zy(e)) {
          a = jf(t, l, false), n = false;
          continue;
        }
        if (a === 2) {
          if (n = l, t.errorRecoveryDisabledLanes & n) var c = 0;
          else c = t.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            l = c;
            t: {
              var f = t;
              a = fa;
              var r = f.current.memoizedState.isDehydrated;
              if (r && (mu(f, c).flags |= 256), c = jf(f, c, false), c !== 2) {
                if (Of && !r) {
                  f.errorRecoveryDisabledLanes |= n, He |= n, a = 4;
                  break t;
                }
                n = wt, wt = a, n !== null && (wt === null ? wt = n : wt.push.apply(wt, n));
              }
              a = c;
            }
            if (n = false, a !== 2) continue;
          }
        }
        if (a === 1) {
          mu(t, 0), ce(t, l, 0, true);
          break;
        }
        t: {
          switch (u = t, n = a, n) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              ce(u, l, dl, !ee);
              break t;
            case 2:
              wt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((l & 62914560) === l && (a = Rf + 300 - Sl(), 10 < a)) {
            if (ce(u, l, dl, !ee), Ra(u, 0, true) !== 0) break t;
            u.timeoutHandle = Jo(So.bind(null, u, e, wt, Sn, Df, l, dl, He, yu, ee, n, 2, -0, 0), a);
            break t;
          }
          So(u, e, wt, Sn, Df, l, dl, He, yu, ee, n, 0, -0, 0);
        }
      }
      break;
    } while (true);
    pl(t);
  }
  function So(t, l, e, u, a, n, c, f, r, g, T, z, b, S) {
    if (t.timeoutHandle = -1, z = l.subtreeFlags, (z & 8192 || (z & 16785408) === 16785408) && (va = { stylesheets: null, count: 0, unsuspend: ch }, oo(l), z = ih(), z !== null)) {
      t.cancelPendingCommit = z(Oo.bind(null, t, l, n, e, u, a, c, f, r, T, 1, b, S)), ce(t, n, c, !g);
      return;
    }
    Oo(t, l, n, e, u, a, c, f, r);
  }
  function zy(t) {
    for (var l = t; ; ) {
      var e = l.tag;
      if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue, e !== null && (e = e.stores, e !== null))) for (var u = 0; u < e.length; u++) {
        var a = e[u], n = a.getSnapshot;
        a = a.value;
        try {
          if (!Pt(n(), a)) return false;
        } catch {
          return false;
        }
      }
      if (e = l.child, l.subtreeFlags & 16384 && e !== null) e.return = l, l = e;
      else {
        if (l === t) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return true;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    return true;
  }
  function ce(t, l, e, u) {
    l &= ~Mf, l &= ~He, t.suspendedLanes |= l, t.pingedLanes &= ~l, u && (t.warmLanes |= l), u = t.expirationTimes;
    for (var a = l; 0 < a; ) {
      var n = 31 - Ft(a), c = 1 << n;
      u[n] = -1, a &= ~c;
    }
    e !== 0 && Ri(t, e, l);
  }
  function _n() {
    return (at & 6) === 0 ? (sa(0), false) : true;
  }
  function Hf() {
    if ($ !== null) {
      if (nt === 0) var t = $.return;
      else t = $, Nl = Me = null, $c(t), iu = null, Iu = 0, t = $;
      for (; t !== null; ) Fr(t.alternate, t), t = t.return;
      $ = null;
    }
  }
  function mu(t, l) {
    var e = t.timeoutHandle;
    e !== -1 && (t.timeoutHandle = -1, Vy(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), Hf(), dt = t, $ = e = Rl(t.current, null), P = l, nt = 0, el = null, ee = false, du = zu(t, l), Of = false, yu = dl = Mf = He = ue = _t = 0, wt = fa = null, Df = false, (l & 8) !== 0 && (l |= l & 32);
    var u = t.entangledLanes;
    if (u !== 0) for (t = t.entanglements, u &= l; 0 < u; ) {
      var a = 31 - Ft(u), n = 1 << a;
      l |= t[a], u &= ~n;
    }
    return Ql = l, Ca(), e;
  }
  function _o(t, l) {
    J = null, A.H = cn, l === Lu || l === ka ? (l = Ys(), nt = 3) : l === Hs ? (l = Ys(), nt = 4) : nt = l === Br ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, el = l, $ === null && (_t = 1, dn(t, fl(l, t.current)));
  }
  function Eo() {
    var t = A.H;
    return A.H = cn, t === null ? cn : t;
  }
  function To() {
    var t = A.A;
    return A.A = Ay, t;
  }
  function qf() {
    _t = 4, ee || (P & 4194048) !== P && ol.current !== null || (du = true), (ue & 134217727) === 0 && (He & 134217727) === 0 || dt === null || ce(dt, P, dl, false);
  }
  function jf(t, l, e) {
    var u = at;
    at |= 2;
    var a = Eo(), n = To();
    (dt !== t || P !== l) && (Sn = null, mu(t, l)), l = false;
    var c = _t;
    t: do
      try {
        if (nt !== 0 && $ !== null) {
          var f = $, r = el;
          switch (nt) {
            case 8:
              Hf(), c = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ol.current === null && (l = true);
              var g = nt;
              if (nt = 0, el = null, gu(t, f, r, g), e && du) {
                c = 0;
                break t;
              }
              break;
            default:
              g = nt, nt = 0, el = null, gu(t, f, r, g);
          }
        }
        Oy(), c = _t;
        break;
      } catch (T) {
        _o(t, T);
      }
    while (true);
    return l && t.shellSuspendCounter++, Nl = Me = null, at = u, A.H = a, A.A = n, $ === null && (dt = null, P = 0, Ca()), c;
  }
  function Oy() {
    for (; $ !== null; ) Ao($);
  }
  function My(t, l) {
    var e = at;
    at |= 2;
    var u = Eo(), a = To();
    dt !== t || P !== l ? (Sn = null, bn = Sl() + 500, mu(t, l)) : du = zu(t, l);
    t: do
      try {
        if (nt !== 0 && $ !== null) {
          l = $;
          var n = el;
          l: switch (nt) {
            case 1:
              nt = 0, el = null, gu(t, l, n, 1);
              break;
            case 2:
            case 9:
              if (qs(n)) {
                nt = 0, el = null, po(l);
                break;
              }
              l = function() {
                nt !== 2 && nt !== 9 || dt !== t || (nt = 7), pl(t);
              }, n.then(l, l);
              break t;
            case 3:
              nt = 7;
              break t;
            case 4:
              nt = 5;
              break t;
            case 7:
              qs(n) ? (nt = 0, el = null, po(l)) : (nt = 0, el = null, gu(t, l, n, 7));
              break;
            case 5:
              var c = null;
              switch ($.tag) {
                case 26:
                  c = $.memoizedState;
                case 5:
                case 27:
                  var f = $;
                  if (!c || nd(c)) {
                    nt = 0, el = null;
                    var r = f.sibling;
                    if (r !== null) $ = r;
                    else {
                      var g = f.return;
                      g !== null ? ($ = g, En(g)) : $ = null;
                    }
                    break l;
                  }
              }
              nt = 0, el = null, gu(t, l, n, 5);
              break;
            case 6:
              nt = 0, el = null, gu(t, l, n, 6);
              break;
            case 8:
              Hf(), _t = 6;
              break t;
            default:
              throw Error(s(462));
          }
        }
        Dy();
        break;
      } catch (T) {
        _o(t, T);
      }
    while (true);
    return Nl = Me = null, A.H = u, A.A = a, at = e, $ !== null ? 0 : (dt = null, P = 0, Ca(), _t);
  }
  function Dy() {
    for (; $ !== null && !kd(); ) Ao($);
  }
  function Ao(t) {
    var l = $r(t.alternate, t, Ql);
    t.memoizedProps = t.pendingProps, l === null ? En(t) : $ = l;
  }
  function po(t) {
    var l = t, e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = Vr(e, l, l.pendingProps, l.type, void 0, P);
        break;
      case 11:
        l = Vr(e, l, l.pendingProps, l.type.render, l.ref, P);
        break;
      case 5:
        $c(l);
      default:
        Fr(e, l), l = $ = ps(l, Ql), l = $r(e, l, Ql);
    }
    t.memoizedProps = t.pendingProps, l === null ? En(t) : $ = l;
  }
  function gu(t, l, e, u) {
    Nl = Me = null, $c(l), iu = null, Iu = 0;
    var a = l.return;
    try {
      if (gy(t, a, l, e, P)) {
        _t = 1, dn(t, fl(e, t.current)), $ = null;
        return;
      }
    } catch (n) {
      if (a !== null) throw $ = a, n;
      _t = 1, dn(t, fl(e, t.current)), $ = null;
      return;
    }
    l.flags & 32768 ? (et || u === 1 ? t = true : du || (P & 536870912) !== 0 ? t = false : (ee = t = true, (u === 2 || u === 9 || u === 3 || u === 6) && (u = ol.current, u !== null && u.tag === 13 && (u.flags |= 16384))), zo(l, t)) : En(l);
  }
  function En(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        zo(l, ee);
        return;
      }
      t = l.return;
      var e = Sy(l.alternate, l, Ql);
      if (e !== null) {
        $ = e;
        return;
      }
      if (l = l.sibling, l !== null) {
        $ = l;
        return;
      }
      $ = l = t;
    } while (l !== null);
    _t === 0 && (_t = 5);
  }
  function zo(t, l) {
    do {
      var e = _y(t.alternate, t);
      if (e !== null) {
        e.flags &= 32767, $ = e;
        return;
      }
      if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
        $ = t;
        return;
      }
      $ = t = e;
    } while (t !== null);
    _t = 6, $ = null;
  }
  function Oo(t, l, e, u, a, n, c, f, r) {
    t.cancelPendingCommit = null;
    do
      Tn();
    while (Nt !== 0);
    if ((at & 6) !== 0) throw Error(s(327));
    if (l !== null) {
      if (l === t.current) throw Error(s(177));
      if (n = l.lanes | l.childLanes, n |= pc, c0(t, e, n, c, f, r), t === dt && ($ = dt = null, P = 0), hu = l, ne = t, vu = e, xf = n, Uf = a, mo = u, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Ny(Oa, function() {
        return Uo(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), u = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || u) {
        u = A.T, A.T = null, a = H.p, H.p = 2, c = at, at |= 4;
        try {
          Ey(t, l, e);
        } finally {
          at = c, H.p = a, A.T = u;
        }
      }
      Nt = 1, Mo(), Do(), Ro();
    }
  }
  function Mo() {
    if (Nt === 1) {
      Nt = 0;
      var t = ne, l = hu, e = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || e) {
        e = A.T, A.T = null;
        var u = H.p;
        H.p = 2;
        var a = at;
        at |= 4;
        try {
          io(l, t);
          var n = Jf, c = hs(t.containerInfo), f = n.focusedElem, r = n.selectionRange;
          if (c !== f && f && f.ownerDocument && ys(f.ownerDocument.documentElement, f)) {
            if (r !== null && Sc(f)) {
              var g = r.start, T = r.end;
              if (T === void 0 && (T = g), "selectionStart" in f) f.selectionStart = g, f.selectionEnd = Math.min(T, f.value.length);
              else {
                var z = f.ownerDocument || document, b = z && z.defaultView || window;
                if (b.getSelection) {
                  var S = b.getSelection(), V = f.textContent.length, X = Math.min(r.start, V), it = r.end === void 0 ? X : Math.min(r.end, V);
                  !S.extend && X > it && (c = it, it = X, X = c);
                  var h = ds(f, X), y = ds(f, it);
                  if (h && y && (S.rangeCount !== 1 || S.anchorNode !== h.node || S.anchorOffset !== h.offset || S.focusNode !== y.node || S.focusOffset !== y.offset)) {
                    var m = z.createRange();
                    m.setStart(h.node, h.offset), S.removeAllRanges(), X > it ? (S.addRange(m), S.extend(y.node, y.offset)) : (m.setEnd(y.node, y.offset), S.addRange(m));
                  }
                }
              }
            }
            for (z = [], S = f; S = S.parentNode; ) S.nodeType === 1 && z.push({ element: S, left: S.scrollLeft, top: S.scrollTop });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < z.length; f++) {
              var p = z[f];
              p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
            }
          }
          qn = !!Kf, Jf = Kf = null;
        } finally {
          at = a, H.p = u, A.T = e;
        }
      }
      t.current = l, Nt = 2;
    }
  }
  function Do() {
    if (Nt === 2) {
      Nt = 0;
      var t = ne, l = hu, e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        e = A.T, A.T = null;
        var u = H.p;
        H.p = 2;
        var a = at;
        at |= 4;
        try {
          ao(t, l.alternate, l);
        } finally {
          at = a, H.p = u, A.T = e;
        }
      }
      Nt = 3;
    }
  }
  function Ro() {
    if (Nt === 4 || Nt === 3) {
      Nt = 0, Fd();
      var t = ne, l = hu, e = vu, u = mo;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? Nt = 5 : (Nt = 0, hu = ne = null, xo(t, t.pendingLanes));
      var a = t.pendingLanes;
      if (a === 0 && (ae = null), Pn(e), l = l.stateNode, kt && typeof kt.onCommitFiberRoot == "function") try {
        kt.onCommitFiberRoot(pu, l, void 0, (l.current.flags & 128) === 128);
      } catch {
      }
      if (u !== null) {
        l = A.T, a = H.p, H.p = 2, A.T = null;
        try {
          for (var n = t.onRecoverableError, c = 0; c < u.length; c++) {
            var f = u[c];
            n(f.value, { componentStack: f.stack });
          }
        } finally {
          A.T = l, H.p = a;
        }
      }
      (vu & 3) !== 0 && Tn(), pl(t), a = t.pendingLanes, (e & 4194090) !== 0 && (a & 42) !== 0 ? t === Nf ? ia++ : (ia = 0, Nf = t) : ia = 0, sa(0);
    }
  }
  function xo(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, Zu(l)));
  }
  function Tn(t) {
    return Mo(), Do(), Ro(), Uo();
  }
  function Uo() {
    if (Nt !== 5) return false;
    var t = ne, l = xf;
    xf = 0;
    var e = Pn(vu), u = A.T, a = H.p;
    try {
      H.p = 32 > e ? 32 : e, A.T = null, e = Uf, Uf = null;
      var n = ne, c = vu;
      if (Nt = 0, hu = ne = null, vu = 0, (at & 6) !== 0) throw Error(s(331));
      var f = at;
      if (at |= 4, ho(n.current), ro(n, n.current, c, e), at = f, sa(0, false), kt && typeof kt.onPostCommitFiberRoot == "function") try {
        kt.onPostCommitFiberRoot(pu, n);
      } catch {
      }
      return true;
    } finally {
      H.p = a, A.T = u, xo(t, l);
    }
  }
  function No(t, l, e) {
    l = fl(e, l), l = rf(t.stateNode, l, 2), t = $l(t, l, 2), t !== null && (Ou(t, 2), pl(t));
  }
  function ot(t, l, e) {
    if (t.tag === 3) No(t, t, e);
    else for (; l !== null; ) {
      if (l.tag === 3) {
        No(l, t, e);
        break;
      } else if (l.tag === 1) {
        var u = l.stateNode;
        if (typeof l.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (ae === null || !ae.has(u))) {
          t = fl(e, t), e = jr(2), u = $l(l, e, 2), u !== null && (Yr(e, u, l, t), Ou(u, 2), pl(u));
          break;
        }
      }
      l = l.return;
    }
  }
  function Yf(t, l, e) {
    var u = t.pingCache;
    if (u === null) {
      u = t.pingCache = new py();
      var a = /* @__PURE__ */ new Set();
      u.set(l, a);
    } else a = u.get(l), a === void 0 && (a = /* @__PURE__ */ new Set(), u.set(l, a));
    a.has(e) || (Of = true, a.add(e), t = Ry.bind(null, t, l, e), l.then(t, t));
  }
  function Ry(t, l, e) {
    var u = t.pingCache;
    u !== null && u.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, dt === t && (P & e) === e && (_t === 4 || _t === 3 && (P & 62914560) === P && 300 > Sl() - Rf ? (at & 2) === 0 && mu(t, 0) : Mf |= e, yu === P && (yu = 0)), pl(t);
  }
  function Ho(t, l) {
    l === 0 && (l = Di()), t = Pe(t, l), t !== null && (Ou(t, l), pl(t));
  }
  function xy(t) {
    var l = t.memoizedState, e = 0;
    l !== null && (e = l.retryLane), Ho(t, e);
  }
  function Uy(t, l) {
    var e = 0;
    switch (t.tag) {
      case 13:
        var u = t.stateNode, a = t.memoizedState;
        a !== null && (e = a.retryLane);
        break;
      case 19:
        u = t.stateNode;
        break;
      case 22:
        u = t.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    u !== null && u.delete(l), Ho(t, e);
  }
  function Ny(t, l) {
    return Wn(t, l);
  }
  var An = null, bu = null, Bf = false, pn = false, Gf = false, qe = 0;
  function pl(t) {
    t !== bu && t.next === null && (bu === null ? An = bu = t : bu = bu.next = t), pn = true, Bf || (Bf = true, qy());
  }
  function sa(t, l) {
    if (!Gf && pn) {
      Gf = true;
      do
        for (var e = false, u = An; u !== null; ) {
          if (t !== 0) {
            var a = u.pendingLanes;
            if (a === 0) var n = 0;
            else {
              var c = u.suspendedLanes, f = u.pingedLanes;
              n = (1 << 31 - Ft(42 | t) + 1) - 1, n &= a & ~(c & ~f), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (e = true, Bo(u, n));
          } else n = P, n = Ra(u, u === dt ? n : 0, u.cancelPendingCommit !== null || u.timeoutHandle !== -1), (n & 3) === 0 || zu(u, n) || (e = true, Bo(u, n));
          u = u.next;
        }
      while (e);
      Gf = false;
    }
  }
  function Hy() {
    qo();
  }
  function qo() {
    pn = Bf = false;
    var t = 0;
    qe !== 0 && (Zy() && (t = qe), qe = 0);
    for (var l = Sl(), e = null, u = An; u !== null; ) {
      var a = u.next, n = jo(u, l);
      n === 0 ? (u.next = null, e === null ? An = a : e.next = a, a === null && (bu = e)) : (e = u, (t !== 0 || (n & 3) !== 0) && (pn = true)), u = a;
    }
    sa(t);
  }
  function jo(t, l) {
    for (var e = t.suspendedLanes, u = t.pingedLanes, a = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n; ) {
      var c = 31 - Ft(n), f = 1 << c, r = a[c];
      r === -1 ? ((f & e) === 0 || (f & u) !== 0) && (a[c] = n0(f, l)) : r <= l && (t.expiredLanes |= f), n &= ~f;
    }
    if (l = dt, e = P, e = Ra(t, t === l ? e : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), u = t.callbackNode, e === 0 || t === l && (nt === 2 || nt === 9) || t.cancelPendingCommit !== null) return u !== null && u !== null && $n(u), t.callbackNode = null, t.callbackPriority = 0;
    if ((e & 3) === 0 || zu(t, e)) {
      if (l = e & -e, l === t.callbackPriority) return l;
      switch (u !== null && $n(u), Pn(e)) {
        case 2:
        case 8:
          e = zi;
          break;
        case 32:
          e = Oa;
          break;
        case 268435456:
          e = Oi;
          break;
        default:
          e = Oa;
      }
      return u = Yo.bind(null, t), e = Wn(e, u), t.callbackPriority = l, t.callbackNode = e, l;
    }
    return u !== null && u !== null && $n(u), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Yo(t, l) {
    if (Nt !== 0 && Nt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
    var e = t.callbackNode;
    if (Tn() && t.callbackNode !== e) return null;
    var u = P;
    return u = Ra(t, t === dt ? u : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), u === 0 ? null : (bo(t, u, l), jo(t, Sl()), t.callbackNode != null && t.callbackNode === e ? Yo.bind(null, t) : null);
  }
  function Bo(t, l) {
    if (Tn()) return null;
    bo(t, l, true);
  }
  function qy() {
    Ly(function() {
      (at & 6) !== 0 ? Wn(pi, Hy) : qo();
    });
  }
  function Xf() {
    return qe === 0 && (qe = Mi()), qe;
  }
  function Go(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : qa("" + t);
  }
  function Xo(t, l) {
    var e = l.ownerDocument.createElement("input");
    return e.name = l.name, e.value = l.value, t.id && e.setAttribute("form", t.id), l.parentNode.insertBefore(e, l), t = new FormData(t), e.parentNode.removeChild(e), t;
  }
  function jy(t, l, e, u, a) {
    if (l === "submit" && e && e.stateNode === a) {
      var n = Go((a[Ct] || null).action), c = u.submitter;
      c && (l = (l = c[Ct] || null) ? Go(l.formAction) : c.getAttribute("formAction"), l !== null && (n = l, c = null));
      var f = new Ga("action", "action", null, u, a);
      t.push({ event: f, listeners: [{ instance: null, listener: function() {
        if (u.defaultPrevented) {
          if (qe !== 0) {
            var r = c ? Xo(a, c) : new FormData(a);
            af(e, { pending: true, data: r, method: a.method, action: n }, null, r);
          }
        } else typeof n == "function" && (f.preventDefault(), r = c ? Xo(a, c) : new FormData(a), af(e, { pending: true, data: r, method: a.method, action: n }, n, r));
      }, currentTarget: a }] });
    }
  }
  for (var Qf = 0; Qf < Ac.length; Qf++) {
    var Cf = Ac[Qf], Yy = Cf.toLowerCase(), By = Cf[0].toUpperCase() + Cf.slice(1);
    vl(Yy, "on" + By);
  }
  vl(gs, "onAnimationEnd"), vl(bs, "onAnimationIteration"), vl(Ss, "onAnimationStart"), vl("dblclick", "onDoubleClick"), vl("focusin", "onFocus"), vl("focusout", "onBlur"), vl(ty, "onTransitionRun"), vl(ly, "onTransitionStart"), vl(ey, "onTransitionCancel"), vl(_s, "onTransitionEnd"), Ze("onMouseEnter", ["mouseout", "mouseover"]), Ze("onMouseLeave", ["mouseout", "mouseover"]), Ze("onPointerEnter", ["pointerout", "pointerover"]), Ze("onPointerLeave", ["pointerout", "pointerover"]), be("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), be("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), be("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), be("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), be("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), be("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ra = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Gy = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ra));
  function Qo(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var u = t[e], a = u.event;
      u = u.listeners;
      t: {
        var n = void 0;
        if (l) for (var c = u.length - 1; 0 <= c; c--) {
          var f = u[c], r = f.instance, g = f.currentTarget;
          if (f = f.listener, r !== n && a.isPropagationStopped()) break t;
          n = f, a.currentTarget = g;
          try {
            n(a);
          } catch (T) {
            on(T);
          }
          a.currentTarget = null, n = r;
        }
        else for (c = 0; c < u.length; c++) {
          if (f = u[c], r = f.instance, g = f.currentTarget, f = f.listener, r !== n && a.isPropagationStopped()) break t;
          n = f, a.currentTarget = g;
          try {
            n(a);
          } catch (T) {
            on(T);
          }
          a.currentTarget = null, n = r;
        }
      }
    }
  }
  function k(t, l) {
    var e = l[In];
    e === void 0 && (e = l[In] = /* @__PURE__ */ new Set());
    var u = t + "__bubble";
    e.has(u) || (Co(l, t, 2, false), e.add(u));
  }
  function Zf(t, l, e) {
    var u = 0;
    l && (u |= 4), Co(e, t, u, l);
  }
  var zn = "_reactListening" + Math.random().toString(36).slice(2);
  function Vf(t) {
    if (!t[zn]) {
      t[zn] = true, Hi.forEach(function(e) {
        e !== "selectionchange" && (Gy.has(e) || Zf(e, false, t), Zf(e, true, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[zn] || (l[zn] = true, Zf("selectionchange", false, l));
    }
  }
  function Co(t, l, e, u) {
    switch (od(l)) {
      case 2:
        var a = oh;
        break;
      case 8:
        a = dh;
        break;
      default:
        a = ui;
    }
    e = a.bind(null, l, e, t), a = void 0, !rc || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (a = true), u ? a !== void 0 ? t.addEventListener(l, e, { capture: true, passive: a }) : t.addEventListener(l, e, true) : a !== void 0 ? t.addEventListener(l, e, { passive: a }) : t.addEventListener(l, e, false);
  }
  function Lf(t, l, e, u, a) {
    var n = u;
    if ((l & 1) === 0 && (l & 2) === 0 && u !== null) t: for (; ; ) {
      if (u === null) return;
      var c = u.tag;
      if (c === 3 || c === 4) {
        var f = u.stateNode.containerInfo;
        if (f === a) break;
        if (c === 4) for (c = u.return; c !== null; ) {
          var r = c.tag;
          if ((r === 3 || r === 4) && c.stateNode.containerInfo === a) return;
          c = c.return;
        }
        for (; f !== null; ) {
          if (c = Xe(f), c === null) return;
          if (r = c.tag, r === 5 || r === 6 || r === 26 || r === 27) {
            u = n = c;
            continue t;
          }
          f = f.parentNode;
        }
      }
      u = u.return;
    }
    Ji(function() {
      var g = n, T = ic(e), z = [];
      t: {
        var b = Es.get(t);
        if (b !== void 0) {
          var S = Ga, V = t;
          switch (t) {
            case "keypress":
              if (Ya(e) === 0) break t;
            case "keydown":
            case "keyup":
              S = N0;
              break;
            case "focusin":
              V = "focus", S = hc;
              break;
            case "focusout":
              V = "blur", S = hc;
              break;
            case "beforeblur":
            case "afterblur":
              S = hc;
              break;
            case "click":
              if (e.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S = ki;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = _0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = j0;
              break;
            case gs:
            case bs:
            case Ss:
              S = A0;
              break;
            case _s:
              S = B0;
              break;
            case "scroll":
            case "scrollend":
              S = b0;
              break;
            case "wheel":
              S = X0;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = z0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = Pi;
              break;
            case "toggle":
            case "beforetoggle":
              S = C0;
          }
          var X = (l & 4) !== 0, it = !X && (t === "scroll" || t === "scrollend"), h = X ? b !== null ? b + "Capture" : null : b;
          X = [];
          for (var y = g, m; y !== null; ) {
            var p = y;
            if (m = p.stateNode, p = p.tag, p !== 5 && p !== 26 && p !== 27 || m === null || h === null || (p = Ru(y, h), p != null && X.push(oa(y, p, m))), it) break;
            y = y.return;
          }
          0 < X.length && (b = new S(b, V, null, e, T), z.push({ event: b, listeners: X }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (b = t === "mouseover" || t === "pointerover", S = t === "mouseout" || t === "pointerout", b && e !== fc && (V = e.relatedTarget || e.fromElement) && (Xe(V) || V[Ge])) break t;
          if ((S || b) && (b = T.window === T ? T : (b = T.ownerDocument) ? b.defaultView || b.parentWindow : window, S ? (V = e.relatedTarget || e.toElement, S = g, V = V ? Xe(V) : null, V !== null && (it = D(V), X = V.tag, V !== it || X !== 5 && X !== 27 && X !== 6) && (V = null)) : (S = null, V = g), S !== V)) {
            if (X = ki, p = "onMouseLeave", h = "onMouseEnter", y = "mouse", (t === "pointerout" || t === "pointerover") && (X = Pi, p = "onPointerLeave", h = "onPointerEnter", y = "pointer"), it = S == null ? b : Du(S), m = V == null ? b : Du(V), b = new X(p, y + "leave", S, e, T), b.target = it, b.relatedTarget = m, p = null, Xe(T) === g && (X = new X(h, y + "enter", V, e, T), X.target = m, X.relatedTarget = it, p = X), it = p, S && V) l: {
              for (X = S, h = V, y = 0, m = X; m; m = Su(m)) y++;
              for (m = 0, p = h; p; p = Su(p)) m++;
              for (; 0 < y - m; ) X = Su(X), y--;
              for (; 0 < m - y; ) h = Su(h), m--;
              for (; y--; ) {
                if (X === h || h !== null && X === h.alternate) break l;
                X = Su(X), h = Su(h);
              }
              X = null;
            }
            else X = null;
            S !== null && Zo(z, b, S, X, false), V !== null && it !== null && Zo(z, it, V, X, true);
          }
        }
        t: {
          if (b = g ? Du(g) : window, S = b.nodeName && b.nodeName.toLowerCase(), S === "select" || S === "input" && b.type === "file") var j = cs;
          else if (as(b)) if (fs) j = F0;
          else {
            j = $0;
            var W = W0;
          }
          else S = b.nodeName, !S || S.toLowerCase() !== "input" || b.type !== "checkbox" && b.type !== "radio" ? g && cc(g.elementType) && (j = cs) : j = k0;
          if (j && (j = j(t, g))) {
            ns(z, j, e, T);
            break t;
          }
          W && W(t, b, g), t === "focusout" && g && b.type === "number" && g.memoizedProps.value != null && nc(b, "number", b.value);
        }
        switch (W = g ? Du(g) : window, t) {
          case "focusin":
            (as(W) || W.contentEditable === "true") && ($e = W, _c = g, Bu = null);
            break;
          case "focusout":
            Bu = _c = $e = null;
            break;
          case "mousedown":
            Ec = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ec = false, vs(z, e, T);
            break;
          case "selectionchange":
            if (I0) break;
          case "keydown":
          case "keyup":
            vs(z, e, T);
        }
        var Y;
        if (mc) t: {
          switch (t) {
            case "compositionstart":
              var C = "onCompositionStart";
              break t;
            case "compositionend":
              C = "onCompositionEnd";
              break t;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break t;
          }
          C = void 0;
        }
        else We ? es(t, e) && (C = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (C = "onCompositionStart");
        C && (Ii && e.locale !== "ko" && (We || C !== "onCompositionStart" ? C === "onCompositionEnd" && We && (Y = Wi()) : (wl = T, oc = "value" in wl ? wl.value : wl.textContent, We = true)), W = On(g, C), 0 < W.length && (C = new Fi(C, t, null, e, T), z.push({ event: C, listeners: W }), Y ? C.data = Y : (Y = us(e), Y !== null && (C.data = Y)))), (Y = V0 ? L0(t, e) : w0(t, e)) && (C = On(g, "onBeforeInput"), 0 < C.length && (W = new Fi("onBeforeInput", "beforeinput", null, e, T), z.push({ event: W, listeners: C }), W.data = Y)), jy(z, t, g, e, T);
      }
      Qo(z, l);
    });
  }
  function oa(t, l, e) {
    return { instance: t, listener: l, currentTarget: e };
  }
  function On(t, l) {
    for (var e = l + "Capture", u = []; t !== null; ) {
      var a = t, n = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || n === null || (a = Ru(t, e), a != null && u.unshift(oa(t, a, n)), a = Ru(t, l), a != null && u.push(oa(t, a, n))), t.tag === 3) return u;
      t = t.return;
    }
    return [];
  }
  function Su(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Zo(t, l, e, u, a) {
    for (var n = l._reactName, c = []; e !== null && e !== u; ) {
      var f = e, r = f.alternate, g = f.stateNode;
      if (f = f.tag, r !== null && r === u) break;
      f !== 5 && f !== 26 && f !== 27 || g === null || (r = g, a ? (g = Ru(e, n), g != null && c.unshift(oa(e, g, r))) : a || (g = Ru(e, n), g != null && c.push(oa(e, g, r)))), e = e.return;
    }
    c.length !== 0 && t.push({ event: l, listeners: c });
  }
  var Xy = /\r\n?/g, Qy = /\u0000|\uFFFD/g;
  function Vo(t) {
    return (typeof t == "string" ? t : "" + t).replace(Xy, `
`).replace(Qy, "");
  }
  function Lo(t, l) {
    return l = Vo(l), Vo(t) === l;
  }
  function Mn() {
  }
  function ft(t, l, e, u, a, n) {
    switch (e) {
      case "children":
        typeof u == "string" ? l === "body" || l === "textarea" && u === "" || we(t, u) : (typeof u == "number" || typeof u == "bigint") && l !== "body" && we(t, "" + u);
        break;
      case "className":
        Ua(t, "class", u);
        break;
      case "tabIndex":
        Ua(t, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ua(t, e, u);
        break;
      case "style":
        wi(t, u, n);
        break;
      case "data":
        if (l !== "object") {
          Ua(t, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (l !== "a" || e !== "href")) {
          t.removeAttribute(e);
          break;
        }
        if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
          t.removeAttribute(e);
          break;
        }
        u = qa("" + u), t.setAttribute(e, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          t.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof n == "function" && (e === "formAction" ? (l !== "input" && ft(t, l, "name", a.name, a, null), ft(t, l, "formEncType", a.formEncType, a, null), ft(t, l, "formMethod", a.formMethod, a, null), ft(t, l, "formTarget", a.formTarget, a, null)) : (ft(t, l, "encType", a.encType, a, null), ft(t, l, "method", a.method, a, null), ft(t, l, "target", a.target, a, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          t.removeAttribute(e);
          break;
        }
        u = qa("" + u), t.setAttribute(e, u);
        break;
      case "onClick":
        u != null && (t.onclick = Mn);
        break;
      case "onScroll":
        u != null && k("scroll", t);
        break;
      case "onScrollEnd":
        u != null && k("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(s(61));
          if (e = u.__html, e != null) {
            if (a.children != null) throw Error(s(60));
            t.innerHTML = e;
          }
        }
        break;
      case "multiple":
        t.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        t.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        e = qa("" + u), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol" ? t.setAttribute(e, "" + u) : t.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol" ? t.setAttribute(e, "") : t.removeAttribute(e);
        break;
      case "capture":
      case "download":
        u === true ? t.setAttribute(e, "") : u !== false && u != null && typeof u != "function" && typeof u != "symbol" ? t.setAttribute(e, u) : t.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? t.setAttribute(e, u) : t.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? t.removeAttribute(e) : t.setAttribute(e, u);
        break;
      case "popover":
        k("beforetoggle", t), k("toggle", t), xa(t, "popover", u);
        break;
      case "xlinkActuate":
        Ml(t, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        Ml(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        Ml(t, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        Ml(t, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        Ml(t, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        Ml(t, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        Ml(t, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        Ml(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        Ml(t, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        xa(t, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = m0.get(e) || e, xa(t, e, u));
    }
  }
  function wf(t, l, e, u, a, n) {
    switch (e) {
      case "style":
        wi(t, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(s(61));
          if (e = u.__html, e != null) {
            if (a.children != null) throw Error(s(60));
            t.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof u == "string" ? we(t, u) : (typeof u == "number" || typeof u == "bigint") && we(t, "" + u);
        break;
      case "onScroll":
        u != null && k("scroll", t);
        break;
      case "onScrollEnd":
        u != null && k("scrollend", t);
        break;
      case "onClick":
        u != null && (t.onclick = Mn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!qi.hasOwnProperty(e)) t: {
          if (e[0] === "o" && e[1] === "n" && (a = e.endsWith("Capture"), l = e.slice(2, a ? e.length - 7 : void 0), n = t[Ct] || null, n = n != null ? n[e] : null, typeof n == "function" && t.removeEventListener(l, n, a), typeof u == "function")) {
            typeof n != "function" && n !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(l, u, a);
            break t;
          }
          e in t ? t[e] = u : u === true ? t.setAttribute(e, "") : xa(t, e, u);
        }
    }
  }
  function Ht(t, l, e) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        k("error", t), k("load", t);
        var u = false, a = false, n;
        for (n in e) if (e.hasOwnProperty(n)) {
          var c = e[n];
          if (c != null) switch (n) {
            case "src":
              u = true;
              break;
            case "srcSet":
              a = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(s(137, l));
            default:
              ft(t, l, n, c, e, null);
          }
        }
        a && ft(t, l, "srcSet", e.srcSet, e, null), u && ft(t, l, "src", e.src, e, null);
        return;
      case "input":
        k("invalid", t);
        var f = n = c = a = null, r = null, g = null;
        for (u in e) if (e.hasOwnProperty(u)) {
          var T = e[u];
          if (T != null) switch (u) {
            case "name":
              a = T;
              break;
            case "type":
              c = T;
              break;
            case "checked":
              r = T;
              break;
            case "defaultChecked":
              g = T;
              break;
            case "value":
              n = T;
              break;
            case "defaultValue":
              f = T;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (T != null) throw Error(s(137, l));
              break;
            default:
              ft(t, l, u, T, e, null);
          }
        }
        Ci(t, n, f, r, g, c, a, false), Na(t);
        return;
      case "select":
        k("invalid", t), u = c = n = null;
        for (a in e) if (e.hasOwnProperty(a) && (f = e[a], f != null)) switch (a) {
          case "value":
            n = f;
            break;
          case "defaultValue":
            c = f;
            break;
          case "multiple":
            u = f;
          default:
            ft(t, l, a, f, e, null);
        }
        l = n, e = c, t.multiple = !!u, l != null ? Le(t, !!u, l, false) : e != null && Le(t, !!u, e, true);
        return;
      case "textarea":
        k("invalid", t), n = a = u = null;
        for (c in e) if (e.hasOwnProperty(c) && (f = e[c], f != null)) switch (c) {
          case "value":
            u = f;
            break;
          case "defaultValue":
            a = f;
            break;
          case "children":
            n = f;
            break;
          case "dangerouslySetInnerHTML":
            if (f != null) throw Error(s(91));
            break;
          default:
            ft(t, l, c, f, e, null);
        }
        Vi(t, u, a, n), Na(t);
        return;
      case "option":
        for (r in e) if (e.hasOwnProperty(r) && (u = e[r], u != null)) switch (r) {
          case "selected":
            t.selected = u && typeof u != "function" && typeof u != "symbol";
            break;
          default:
            ft(t, l, r, u, e, null);
        }
        return;
      case "dialog":
        k("beforetoggle", t), k("toggle", t), k("cancel", t), k("close", t);
        break;
      case "iframe":
      case "object":
        k("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ra.length; u++) k(ra[u], t);
        break;
      case "image":
        k("error", t), k("load", t);
        break;
      case "details":
        k("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        k("error", t), k("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (g in e) if (e.hasOwnProperty(g) && (u = e[g], u != null)) switch (g) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(s(137, l));
          default:
            ft(t, l, g, u, e, null);
        }
        return;
      default:
        if (cc(l)) {
          for (T in e) e.hasOwnProperty(T) && (u = e[T], u !== void 0 && wf(t, l, T, u, e, void 0));
          return;
        }
    }
    for (f in e) e.hasOwnProperty(f) && (u = e[f], u != null && ft(t, l, f, u, e, null));
  }
  function Cy(t, l, e, u) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var a = null, n = null, c = null, f = null, r = null, g = null, T = null;
        for (S in e) {
          var z = e[S];
          if (e.hasOwnProperty(S) && z != null) switch (S) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              r = z;
            default:
              u.hasOwnProperty(S) || ft(t, l, S, null, u, z);
          }
        }
        for (var b in u) {
          var S = u[b];
          if (z = e[b], u.hasOwnProperty(b) && (S != null || z != null)) switch (b) {
            case "type":
              n = S;
              break;
            case "name":
              a = S;
              break;
            case "checked":
              g = S;
              break;
            case "defaultChecked":
              T = S;
              break;
            case "value":
              c = S;
              break;
            case "defaultValue":
              f = S;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (S != null) throw Error(s(137, l));
              break;
            default:
              S !== z && ft(t, l, b, S, u, z);
          }
        }
        ac(t, c, f, r, g, T, n, a);
        return;
      case "select":
        S = c = f = b = null;
        for (n in e) if (r = e[n], e.hasOwnProperty(n) && r != null) switch (n) {
          case "value":
            break;
          case "multiple":
            S = r;
          default:
            u.hasOwnProperty(n) || ft(t, l, n, null, u, r);
        }
        for (a in u) if (n = u[a], r = e[a], u.hasOwnProperty(a) && (n != null || r != null)) switch (a) {
          case "value":
            b = n;
            break;
          case "defaultValue":
            f = n;
            break;
          case "multiple":
            c = n;
          default:
            n !== r && ft(t, l, a, n, u, r);
        }
        l = f, e = c, u = S, b != null ? Le(t, !!e, b, false) : !!u != !!e && (l != null ? Le(t, !!e, l, true) : Le(t, !!e, e ? [] : "", false));
        return;
      case "textarea":
        S = b = null;
        for (f in e) if (a = e[f], e.hasOwnProperty(f) && a != null && !u.hasOwnProperty(f)) switch (f) {
          case "value":
            break;
          case "children":
            break;
          default:
            ft(t, l, f, null, u, a);
        }
        for (c in u) if (a = u[c], n = e[c], u.hasOwnProperty(c) && (a != null || n != null)) switch (c) {
          case "value":
            b = a;
            break;
          case "defaultValue":
            S = a;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (a != null) throw Error(s(91));
            break;
          default:
            a !== n && ft(t, l, c, a, u, n);
        }
        Zi(t, b, S);
        return;
      case "option":
        for (var V in e) if (b = e[V], e.hasOwnProperty(V) && b != null && !u.hasOwnProperty(V)) switch (V) {
          case "selected":
            t.selected = false;
            break;
          default:
            ft(t, l, V, null, u, b);
        }
        for (r in u) if (b = u[r], S = e[r], u.hasOwnProperty(r) && b !== S && (b != null || S != null)) switch (r) {
          case "selected":
            t.selected = b && typeof b != "function" && typeof b != "symbol";
            break;
          default:
            ft(t, l, r, b, u, S);
        }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var X in e) b = e[X], e.hasOwnProperty(X) && b != null && !u.hasOwnProperty(X) && ft(t, l, X, null, u, b);
        for (g in u) if (b = u[g], S = e[g], u.hasOwnProperty(g) && b !== S && (b != null || S != null)) switch (g) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (b != null) throw Error(s(137, l));
            break;
          default:
            ft(t, l, g, b, u, S);
        }
        return;
      default:
        if (cc(l)) {
          for (var it in e) b = e[it], e.hasOwnProperty(it) && b !== void 0 && !u.hasOwnProperty(it) && wf(t, l, it, void 0, u, b);
          for (T in u) b = u[T], S = e[T], !u.hasOwnProperty(T) || b === S || b === void 0 && S === void 0 || wf(t, l, T, b, u, S);
          return;
        }
    }
    for (var h in e) b = e[h], e.hasOwnProperty(h) && b != null && !u.hasOwnProperty(h) && ft(t, l, h, null, u, b);
    for (z in u) b = u[z], S = e[z], !u.hasOwnProperty(z) || b === S || b == null && S == null || ft(t, l, z, b, u, S);
  }
  var Kf = null, Jf = null;
  function Dn(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function wo(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ko(t, l) {
    if (t === 0) switch (l) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return t === 1 && l === "foreignObject" ? 0 : t;
  }
  function Wf(t, l) {
    return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var $f = null;
  function Zy() {
    var t = window.event;
    return t && t.type === "popstate" ? t === $f ? false : ($f = t, true) : ($f = null, false);
  }
  var Jo = typeof setTimeout == "function" ? setTimeout : void 0, Vy = typeof clearTimeout == "function" ? clearTimeout : void 0, Wo = typeof Promise == "function" ? Promise : void 0, Ly = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wo < "u" ? function(t) {
    return Wo.resolve(null).then(t).catch(wy);
  } : Jo;
  function wy(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function fe(t) {
    return t === "head";
  }
  function $o(t, l) {
    var e = l, u = 0, a = 0;
    do {
      var n = e.nextSibling;
      if (t.removeChild(e), n && n.nodeType === 8) if (e = n.data, e === "/$") {
        if (0 < u && 8 > u) {
          e = u;
          var c = t.ownerDocument;
          if (e & 1 && da(c.documentElement), e & 2 && da(c.body), e & 4) for (e = c.head, da(e), c = e.firstChild; c; ) {
            var f = c.nextSibling, r = c.nodeName;
            c[Mu] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && c.rel.toLowerCase() === "stylesheet" || e.removeChild(c), c = f;
          }
        }
        if (a === 0) {
          t.removeChild(n), _a(l);
          return;
        }
        a--;
      } else e === "$" || e === "$?" || e === "$!" ? a++ : u = e.charCodeAt(0) - 48;
      else u = 0;
      e = n;
    } while (e);
    _a(l);
  }
  function kf(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (l = l.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          kf(e), tc(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(e);
    }
  }
  function Ky(t, l, e, u) {
    for (; t.nodeType === 1; ) {
      var a = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!u && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (u) {
        if (!t[Mu]) switch (l) {
          case "meta":
            if (!t.hasAttribute("itemprop")) break;
            return t;
          case "link":
            if (n = t.getAttribute("rel"), n === "stylesheet" && t.hasAttribute("data-precedence")) break;
            if (n !== a.rel || t.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || t.getAttribute("title") !== (a.title == null ? null : a.title)) break;
            return t;
          case "style":
            if (t.hasAttribute("data-precedence")) break;
            return t;
          case "script":
            if (n = t.getAttribute("src"), (n !== (a.src == null ? null : a.src) || t.getAttribute("type") !== (a.type == null ? null : a.type) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && n && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
            return t;
          default:
            return t;
        }
      } else if (l === "input" && t.type === "hidden") {
        var n = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && t.getAttribute("name") === n) return t;
      } else return t;
      if (t = gl(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Jy(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = gl(t.nextSibling), t === null)) return null;
    return t;
  }
  function Ff(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete";
  }
  function Wy(t, l) {
    var e = t.ownerDocument;
    if (t.data !== "$?" || e.readyState === "complete") l();
    else {
      var u = function() {
        l(), e.removeEventListener("DOMContentLoaded", u);
      };
      e.addEventListener("DOMContentLoaded", u), t._reactRetry = u;
    }
  }
  function gl(t) {
    for (; t != null; t = t.nextSibling) {
      var l = t.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (l = t.data, l === "$" || l === "$!" || l === "$?" || l === "F!" || l === "F") break;
        if (l === "/$") return null;
      }
    }
    return t;
  }
  var Pf = null;
  function ko(t) {
    t = t.previousSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "$" || e === "$!" || e === "$?") {
          if (l === 0) return t;
          l--;
        } else e === "/$" && l++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Fo(t, l, e) {
    switch (l = Dn(e), t) {
      case "html":
        if (t = l.documentElement, !t) throw Error(s(452));
        return t;
      case "head":
        if (t = l.head, !t) throw Error(s(453));
        return t;
      case "body":
        if (t = l.body, !t) throw Error(s(454));
        return t;
      default:
        throw Error(s(451));
    }
  }
  function da(t) {
    for (var l = t.attributes; l.length; ) t.removeAttributeNode(l[0]);
    tc(t);
  }
  var yl = /* @__PURE__ */ new Map(), Po = /* @__PURE__ */ new Set();
  function Rn(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Cl = H.d;
  H.d = { f: $y, r: ky, D: Fy, C: Py, L: Iy, m: th, X: eh, S: lh, M: uh };
  function $y() {
    var t = Cl.f(), l = _n();
    return t || l;
  }
  function ky(t) {
    var l = Qe(t);
    l !== null && l.tag === 5 && l.type === "form" ? gr(l) : Cl.r(t);
  }
  var _u = typeof document > "u" ? null : document;
  function Io(t, l, e) {
    var u = _u;
    if (u && typeof l == "string" && l) {
      var a = cl(l);
      a = 'link[rel="' + t + '"][href="' + a + '"]', typeof e == "string" && (a += '[crossorigin="' + e + '"]'), Po.has(a) || (Po.add(a), t = { rel: t, crossOrigin: e, href: l }, u.querySelector(a) === null && (l = u.createElement("link"), Ht(l, "link", t), Mt(l), u.head.appendChild(l)));
    }
  }
  function Fy(t) {
    Cl.D(t), Io("dns-prefetch", t, null);
  }
  function Py(t, l) {
    Cl.C(t, l), Io("preconnect", t, l);
  }
  function Iy(t, l, e) {
    Cl.L(t, l, e);
    var u = _u;
    if (u && t && l) {
      var a = 'link[rel="preload"][as="' + cl(l) + '"]';
      l === "image" && e && e.imageSrcSet ? (a += '[imagesrcset="' + cl(e.imageSrcSet) + '"]', typeof e.imageSizes == "string" && (a += '[imagesizes="' + cl(e.imageSizes) + '"]')) : a += '[href="' + cl(t) + '"]';
      var n = a;
      switch (l) {
        case "style":
          n = Eu(t);
          break;
        case "script":
          n = Tu(t);
      }
      yl.has(n) || (t = U({ rel: "preload", href: l === "image" && e && e.imageSrcSet ? void 0 : t, as: l }, e), yl.set(n, t), u.querySelector(a) !== null || l === "style" && u.querySelector(ya(n)) || l === "script" && u.querySelector(ha(n)) || (l = u.createElement("link"), Ht(l, "link", t), Mt(l), u.head.appendChild(l)));
    }
  }
  function th(t, l) {
    Cl.m(t, l);
    var e = _u;
    if (e && t) {
      var u = l && typeof l.as == "string" ? l.as : "script", a = 'link[rel="modulepreload"][as="' + cl(u) + '"][href="' + cl(t) + '"]', n = a;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Tu(t);
      }
      if (!yl.has(n) && (t = U({ rel: "modulepreload", href: t }, l), yl.set(n, t), e.querySelector(a) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(ha(n))) return;
        }
        u = e.createElement("link"), Ht(u, "link", t), Mt(u), e.head.appendChild(u);
      }
    }
  }
  function lh(t, l, e) {
    Cl.S(t, l, e);
    var u = _u;
    if (u && t) {
      var a = Ce(u).hoistableStyles, n = Eu(t);
      l = l || "default";
      var c = a.get(n);
      if (!c) {
        var f = { loading: 0, preload: null };
        if (c = u.querySelector(ya(n))) f.loading = 5;
        else {
          t = U({ rel: "stylesheet", href: t, "data-precedence": l }, e), (e = yl.get(n)) && If(t, e);
          var r = c = u.createElement("link");
          Mt(r), Ht(r, "link", t), r._p = new Promise(function(g, T) {
            r.onload = g, r.onerror = T;
          }), r.addEventListener("load", function() {
            f.loading |= 1;
          }), r.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, xn(c, l, u);
        }
        c = { type: "stylesheet", instance: c, count: 1, state: f }, a.set(n, c);
      }
    }
  }
  function eh(t, l) {
    Cl.X(t, l);
    var e = _u;
    if (e && t) {
      var u = Ce(e).hoistableScripts, a = Tu(t), n = u.get(a);
      n || (n = e.querySelector(ha(a)), n || (t = U({ src: t, async: true }, l), (l = yl.get(a)) && ti(t, l), n = e.createElement("script"), Mt(n), Ht(n, "link", t), e.head.appendChild(n)), n = { type: "script", instance: n, count: 1, state: null }, u.set(a, n));
    }
  }
  function uh(t, l) {
    Cl.M(t, l);
    var e = _u;
    if (e && t) {
      var u = Ce(e).hoistableScripts, a = Tu(t), n = u.get(a);
      n || (n = e.querySelector(ha(a)), n || (t = U({ src: t, async: true, type: "module" }, l), (l = yl.get(a)) && ti(t, l), n = e.createElement("script"), Mt(n), Ht(n, "link", t), e.head.appendChild(n)), n = { type: "script", instance: n, count: 1, state: null }, u.set(a, n));
    }
  }
  function td(t, l, e, u) {
    var a = (a = L.current) ? Rn(a) : null;
    if (!a) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (l = Eu(e.href), e = Ce(a).hoistableStyles, u = e.get(l), u || (u = { type: "style", instance: null, count: 0, state: null }, e.set(l, u)), u) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          t = Eu(e.href);
          var n = Ce(a).hoistableStyles, c = n.get(t);
          if (c || (a = a.ownerDocument || a, c = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, n.set(t, c), (n = a.querySelector(ya(t))) && !n._p && (c.instance = n, c.state.loading = 5), yl.has(t) || (e = { rel: "preload", as: "style", href: e.href, crossOrigin: e.crossOrigin, integrity: e.integrity, media: e.media, hrefLang: e.hrefLang, referrerPolicy: e.referrerPolicy }, yl.set(t, e), n || ah(a, t, e, c.state))), l && u === null) throw Error(s(528, ""));
          return c;
        }
        if (l && u !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = Tu(e), e = Ce(a).hoistableScripts, u = e.get(l), u || (u = { type: "script", instance: null, count: 0, state: null }, e.set(l, u)), u) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, t));
    }
  }
  function Eu(t) {
    return 'href="' + cl(t) + '"';
  }
  function ya(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function ld(t) {
    return U({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function ah(t, l, e, u) {
    t.querySelector('link[rel="preload"][as="style"][' + l + "]") ? u.loading = 1 : (l = t.createElement("link"), u.preload = l, l.addEventListener("load", function() {
      return u.loading |= 1;
    }), l.addEventListener("error", function() {
      return u.loading |= 2;
    }), Ht(l, "link", e), Mt(l), t.head.appendChild(l));
  }
  function Tu(t) {
    return '[src="' + cl(t) + '"]';
  }
  function ha(t) {
    return "script[async]" + t;
  }
  function ed(t, l, e) {
    if (l.count++, l.instance === null) switch (l.type) {
      case "style":
        var u = t.querySelector('style[data-href~="' + cl(e.href) + '"]');
        if (u) return l.instance = u, Mt(u), u;
        var a = U({}, e, { "data-href": e.href, "data-precedence": e.precedence, href: null, precedence: null });
        return u = (t.ownerDocument || t).createElement("style"), Mt(u), Ht(u, "style", a), xn(u, e.precedence, t), l.instance = u;
      case "stylesheet":
        a = Eu(e.href);
        var n = t.querySelector(ya(a));
        if (n) return l.state.loading |= 4, l.instance = n, Mt(n), n;
        u = ld(e), (a = yl.get(a)) && If(u, a), n = (t.ownerDocument || t).createElement("link"), Mt(n);
        var c = n;
        return c._p = new Promise(function(f, r) {
          c.onload = f, c.onerror = r;
        }), Ht(n, "link", u), l.state.loading |= 4, xn(n, e.precedence, t), l.instance = n;
      case "script":
        return n = Tu(e.src), (a = t.querySelector(ha(n))) ? (l.instance = a, Mt(a), a) : (u = e, (a = yl.get(n)) && (u = U({}, e), ti(u, a)), t = t.ownerDocument || t, a = t.createElement("script"), Mt(a), Ht(a, "link", u), t.head.appendChild(a), l.instance = a);
      case "void":
        return null;
      default:
        throw Error(s(443, l.type));
    }
    else l.type === "stylesheet" && (l.state.loading & 4) === 0 && (u = l.instance, l.state.loading |= 4, xn(u, e.precedence, t));
    return l.instance;
  }
  function xn(t, l, e) {
    for (var u = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = u.length ? u[u.length - 1] : null, n = a, c = 0; c < u.length; c++) {
      var f = u[c];
      if (f.dataset.precedence === l) n = f;
      else if (n !== a) break;
    }
    n ? n.parentNode.insertBefore(t, n.nextSibling) : (l = e.nodeType === 9 ? e.head : e, l.insertBefore(t, l.firstChild));
  }
  function If(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title);
  }
  function ti(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
  }
  var Un = null;
  function ud(t, l, e) {
    if (Un === null) {
      var u = /* @__PURE__ */ new Map(), a = Un = /* @__PURE__ */ new Map();
      a.set(e, u);
    } else a = Un, u = a.get(e), u || (u = /* @__PURE__ */ new Map(), a.set(e, u));
    if (u.has(t)) return u;
    for (u.set(t, null), e = e.getElementsByTagName(t), a = 0; a < e.length; a++) {
      var n = e[a];
      if (!(n[Mu] || n[Bt] || t === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = n.getAttribute(l) || "";
        c = t + c;
        var f = u.get(c);
        f ? f.push(n) : u.set(c, [n]);
      }
    }
    return u;
  }
  function ad(t, l, e) {
    t = t.ownerDocument || t, t.head.insertBefore(e, l === "title" ? t.querySelector("head > title") : null);
  }
  function nh(t, l, e) {
    if (e === 1 || l.itemProp != null) return false;
    switch (t) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "") break;
        return true;
      case "link":
        if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError) break;
        switch (l.rel) {
          case "stylesheet":
            return t = l.disabled, typeof l.precedence == "string" && t == null;
          default:
            return true;
        }
      case "script":
        if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string") return true;
    }
    return false;
  }
  function nd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var va = null;
  function ch() {
  }
  function fh(t, l, e) {
    if (va === null) throw Error(s(475));
    var u = va;
    if (l.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== false) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var a = Eu(e.href), n = t.querySelector(ya(a));
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (u.count++, u = Nn.bind(u), t.then(u, u)), l.state.loading |= 4, l.instance = n, Mt(n);
          return;
        }
        n = t.ownerDocument || t, e = ld(e), (a = yl.get(a)) && If(e, a), n = n.createElement("link"), Mt(n);
        var c = n;
        c._p = new Promise(function(f, r) {
          c.onload = f, c.onerror = r;
        }), Ht(n, "link", e), l.instance = n;
      }
      u.stylesheets === null && (u.stylesheets = /* @__PURE__ */ new Map()), u.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (u.count++, l = Nn.bind(u), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  function ih() {
    if (va === null) throw Error(s(475));
    var t = va;
    return t.stylesheets && t.count === 0 && li(t, t.stylesheets), 0 < t.count ? function(l) {
      var e = setTimeout(function() {
        if (t.stylesheets && li(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4);
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(e);
      };
    } : null;
  }
  function Nn() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) li(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Hn = null;
  function li(t, l) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Hn = /* @__PURE__ */ new Map(), l.forEach(sh, t), Hn = null, Nn.call(t));
  }
  function sh(t, l) {
    if (!(l.state.loading & 4)) {
      var e = Hn.get(t);
      if (e) var u = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), Hn.set(t, e);
        for (var a = t.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < a.length; n++) {
          var c = a[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (e.set(c.dataset.precedence, c), u = c);
        }
        u && e.set(null, u);
      }
      a = l.instance, c = a.getAttribute("data-precedence"), n = e.get(c) || u, n === u && e.set(null, a), e.set(c, a), this.count++, u = Nn.bind(this), a.addEventListener("load", u), a.addEventListener("error", u), n ? n.parentNode.insertBefore(a, n.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(a, t.firstChild)), l.state.loading |= 4;
    }
  }
  var ma = { $$typeof: qt, Provider: null, Consumer: null, _currentValue: Z, _currentValue2: Z, _threadCount: 0 };
  function rh(t, l, e, u, a, n, c, f) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = kn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = kn(0), this.hiddenUpdates = kn(null), this.identifierPrefix = u, this.onUncaughtError = a, this.onCaughtError = n, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function cd(t, l, e, u, a, n, c, f, r, g, T, z) {
    return t = new rh(t, l, e, c, f, r, g, z), l = 1, n === true && (l |= 24), n = It(3, null, null, l), t.current = n, n.stateNode = t, l = jc(), l.refCount++, t.pooledCache = l, l.refCount++, n.memoizedState = { element: u, isDehydrated: e, cache: l }, Xc(n), t;
  }
  function fd(t) {
    return t ? (t = Ie, t) : Ie;
  }
  function id(t, l, e, u, a, n) {
    a = fd(a), u.context === null ? u.context = a : u.pendingContext = a, u = Wl(l), u.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (u.callback = n), e = $l(t, u, l), e !== null && (al(e, t, l), Ku(e, t, l));
  }
  function sd(t, l) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function ei(t, l) {
    sd(t, l), (t = t.alternate) && sd(t, l);
  }
  function rd(t) {
    if (t.tag === 13) {
      var l = Pe(t, 67108864);
      l !== null && al(l, t, 67108864), ei(t, 67108864);
    }
  }
  var qn = true;
  function oh(t, l, e, u) {
    var a = A.T;
    A.T = null;
    var n = H.p;
    try {
      H.p = 2, ui(t, l, e, u);
    } finally {
      H.p = n, A.T = a;
    }
  }
  function dh(t, l, e, u) {
    var a = A.T;
    A.T = null;
    var n = H.p;
    try {
      H.p = 8, ui(t, l, e, u);
    } finally {
      H.p = n, A.T = a;
    }
  }
  function ui(t, l, e, u) {
    if (qn) {
      var a = ai(u);
      if (a === null) Lf(t, l, u, jn, e), dd(t, u);
      else if (hh(a, t, l, e, u)) u.stopPropagation();
      else if (dd(t, u), l & 4 && -1 < yh.indexOf(t)) {
        for (; a !== null; ) {
          var n = Qe(a);
          if (n !== null) switch (n.tag) {
            case 3:
              if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                var c = ge(n.pendingLanes);
                if (c !== 0) {
                  var f = n;
                  for (f.pendingLanes |= 2, f.entangledLanes |= 2; c; ) {
                    var r = 1 << 31 - Ft(c);
                    f.entanglements[1] |= r, c &= ~r;
                  }
                  pl(n), (at & 6) === 0 && (bn = Sl() + 500, sa(0));
                }
              }
              break;
            case 13:
              f = Pe(n, 2), f !== null && al(f, n, 2), _n(), ei(n, 2);
          }
          if (n = ai(u), n === null && Lf(t, l, u, jn, e), n === a) break;
          a = n;
        }
        a !== null && u.stopPropagation();
      } else Lf(t, l, u, null, e);
    }
  }
  function ai(t) {
    return t = ic(t), ni(t);
  }
  var jn = null;
  function ni(t) {
    if (jn = null, t = Xe(t), t !== null) {
      var l = D(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (t = x(l), t !== null) return t;
          t = null;
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated) return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return jn = t, null;
  }
  function od(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Pd()) {
          case pi:
            return 2;
          case zi:
            return 8;
          case Oa:
          case Id:
            return 32;
          case Oi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ci = false, ie = null, se = null, re = null, ga = /* @__PURE__ */ new Map(), ba = /* @__PURE__ */ new Map(), oe = [], yh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function dd(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        ie = null;
        break;
      case "dragenter":
      case "dragleave":
        se = null;
        break;
      case "mouseover":
      case "mouseout":
        re = null;
        break;
      case "pointerover":
      case "pointerout":
        ga.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ba.delete(l.pointerId);
    }
  }
  function Sa(t, l, e, u, a, n) {
    return t === null || t.nativeEvent !== n ? (t = { blockedOn: l, domEventName: e, eventSystemFlags: u, nativeEvent: n, targetContainers: [a] }, l !== null && (l = Qe(l), l !== null && rd(l)), t) : (t.eventSystemFlags |= u, l = t.targetContainers, a !== null && l.indexOf(a) === -1 && l.push(a), t);
  }
  function hh(t, l, e, u, a) {
    switch (l) {
      case "focusin":
        return ie = Sa(ie, t, l, e, u, a), true;
      case "dragenter":
        return se = Sa(se, t, l, e, u, a), true;
      case "mouseover":
        return re = Sa(re, t, l, e, u, a), true;
      case "pointerover":
        var n = a.pointerId;
        return ga.set(n, Sa(ga.get(n) || null, t, l, e, u, a)), true;
      case "gotpointercapture":
        return n = a.pointerId, ba.set(n, Sa(ba.get(n) || null, t, l, e, u, a)), true;
    }
    return false;
  }
  function yd(t) {
    var l = Xe(t.target);
    if (l !== null) {
      var e = D(l);
      if (e !== null) {
        if (l = e.tag, l === 13) {
          if (l = x(e), l !== null) {
            t.blockedOn = l, f0(t.priority, function() {
              if (e.tag === 13) {
                var u = ul();
                u = Fn(u);
                var a = Pe(e, u);
                a !== null && al(a, e, u), ei(e, u);
              }
            });
            return;
          }
        } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Yn(t) {
    if (t.blockedOn !== null) return false;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var e = ai(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var u = new e.constructor(e.type, e);
        fc = u, e.target.dispatchEvent(u), fc = null;
      } else return l = Qe(e), l !== null && rd(l), t.blockedOn = e, false;
      l.shift();
    }
    return true;
  }
  function hd(t, l, e) {
    Yn(t) && e.delete(l);
  }
  function vh() {
    ci = false, ie !== null && Yn(ie) && (ie = null), se !== null && Yn(se) && (se = null), re !== null && Yn(re) && (re = null), ga.forEach(hd), ba.forEach(hd);
  }
  function Bn(t, l) {
    t.blockedOn === l && (t.blockedOn = null, ci || (ci = true, i.unstable_scheduleCallback(i.unstable_NormalPriority, vh)));
  }
  var Gn = null;
  function vd(t) {
    Gn !== t && (Gn = t, i.unstable_scheduleCallback(i.unstable_NormalPriority, function() {
      Gn === t && (Gn = null);
      for (var l = 0; l < t.length; l += 3) {
        var e = t[l], u = t[l + 1], a = t[l + 2];
        if (typeof u != "function") {
          if (ni(u || e) === null) continue;
          break;
        }
        var n = Qe(e);
        n !== null && (t.splice(l, 3), l -= 3, af(n, { pending: true, data: a, method: e.method, action: u }, u, a));
      }
    }));
  }
  function _a(t) {
    function l(r) {
      return Bn(r, t);
    }
    ie !== null && Bn(ie, t), se !== null && Bn(se, t), re !== null && Bn(re, t), ga.forEach(l), ba.forEach(l);
    for (var e = 0; e < oe.length; e++) {
      var u = oe[e];
      u.blockedOn === t && (u.blockedOn = null);
    }
    for (; 0 < oe.length && (e = oe[0], e.blockedOn === null); ) yd(e), e.blockedOn === null && oe.shift();
    if (e = (t.ownerDocument || t).$$reactFormReplay, e != null) for (u = 0; u < e.length; u += 3) {
      var a = e[u], n = e[u + 1], c = a[Ct] || null;
      if (typeof n == "function") c || vd(e);
      else if (c) {
        var f = null;
        if (n && n.hasAttribute("formAction")) {
          if (a = n, c = n[Ct] || null) f = c.formAction;
          else if (ni(a) !== null) continue;
        } else f = c.action;
        typeof f == "function" ? e[u + 1] = f : (e.splice(u, 3), u -= 3), vd(e);
      }
    }
  }
  function fi(t) {
    this._internalRoot = t;
  }
  Xn.prototype.render = fi.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(s(409));
    var e = l.current, u = ul();
    id(e, u, t, l, null, null);
  }, Xn.prototype.unmount = fi.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      id(t.current, 2, null, t, null, null), _n(), l[Ge] = null;
    }
  };
  function Xn(t) {
    this._internalRoot = t;
  }
  Xn.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var l = Ui();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < oe.length && l !== 0 && l < oe[e].priority; e++) ;
      oe.splice(e, 0, t), e === 0 && yd(t);
    }
  };
  var md = o.version;
  if (md !== "19.1.0") throw Error(s(527, md, "19.1.0"));
  H.findDOMNode = function(t) {
    var l = t._reactInternals;
    if (l === void 0) throw typeof t.render == "function" ? Error(s(188)) : (t = Object.keys(t).join(","), Error(s(268, t)));
    return t = M(l), t = t !== null ? E(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var mh = { bundleType: 0, version: "19.1.0", rendererPackageName: "react-dom", currentDispatcherRef: A, reconcilerVersion: "19.1.0" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qn.isDisabled && Qn.supportsFiber) try {
      pu = Qn.inject(mh), kt = Qn;
    } catch {
    }
  }
  return Ta.createRoot = function(t, l) {
    if (!_(t)) throw Error(s(299));
    var e = false, u = "", a = Ur, n = Nr, c = Hr, f = null;
    return l != null && (l.unstable_strictMode === true && (e = true), l.identifierPrefix !== void 0 && (u = l.identifierPrefix), l.onUncaughtError !== void 0 && (a = l.onUncaughtError), l.onCaughtError !== void 0 && (n = l.onCaughtError), l.onRecoverableError !== void 0 && (c = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (f = l.unstable_transitionCallbacks)), l = cd(t, 1, false, null, null, e, u, a, n, c, f, null), t[Ge] = l.current, Vf(t), new fi(l);
  }, Ta.hydrateRoot = function(t, l, e) {
    if (!_(t)) throw Error(s(299));
    var u = false, a = "", n = Ur, c = Nr, f = Hr, r = null, g = null;
    return e != null && (e.unstable_strictMode === true && (u = true), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (c = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (r = e.unstable_transitionCallbacks), e.formState !== void 0 && (g = e.formState)), l = cd(t, 1, true, l, e ?? null, u, a, n, c, f, r, g), l.context = fd(null), e = l.current, u = ul(), u = Fn(u), a = Wl(u), a.callback = null, $l(e, a, u), e = u, l.current.lanes = e, Ou(l, e), pl(l), t[Ge] = l.current, Vf(t), new Xn(l);
  }, Ta.version = "19.1.0", Ta;
}
var Od;
function xh() {
  if (Od) return ri.exports;
  Od = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
    } catch (o) {
      console.error(o);
    }
  }
  return i(), ri.exports = Rh(), ri.exports;
}
var Uh = xh();
function Nh(i, o) {
  if (i instanceof RegExp) return { keys: false, pattern: i };
  var v, s, _, D, x = [], Q = "", M = i.split("/");
  for (M[0] || M.shift(); _ = M.shift(); ) v = _[0], v === "*" ? (x.push(v), Q += _[1] === "?" ? "(?:/(.*))?" : "/(.*)") : v === ":" ? (s = _.indexOf("?", 1), D = _.indexOf(".", 1), x.push(_.substring(1, ~s ? s : ~D ? D : _.length)), Q += ~s && !~D ? "(?:/([^/]+?))?" : "/([^/]+?)", ~D && (Q += (~s ? "?" : "") + "\\" + _.substring(D))) : Q += "/" + _;
  return { keys: x, pattern: new RegExp("^" + Q + (o ? "(?=$|/)" : "/?$"), "i") };
}
var hi = { exports: {} }, vi = {};
/**
* @license React
* use-sync-external-store-shim.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Md;
function Hh() {
  if (Md) return vi;
  Md = 1;
  var i = Ln();
  function o(B, w) {
    return B === w && (B !== 0 || 1 / B === 1 / w) || B !== B && w !== w;
  }
  var v = typeof Object.is == "function" ? Object.is : o, s = i.useState, _ = i.useEffect, D = i.useLayoutEffect, x = i.useDebugValue;
  function Q(B, w) {
    var yt = w(), bt = s({ inst: { value: yt, getSnapshot: w } }), mt = bt[0].inst, st = bt[1];
    return D(function() {
      mt.value = yt, mt.getSnapshot = w, M(mt) && st({ inst: mt });
    }, [B, yt, w]), _(function() {
      return M(mt) && st({ inst: mt }), B(function() {
        M(mt) && st({ inst: mt });
      });
    }, [B]), x(yt), yt;
  }
  function M(B) {
    var w = B.getSnapshot;
    B = B.value;
    try {
      var yt = w();
      return !v(B, yt);
    } catch {
      return true;
    }
  }
  function E(B, w) {
    return w();
  }
  var U = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? E : Q;
  return vi.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : U, vi;
}
var Dd;
function qh() {
  return Dd || (Dd = 1, hi.exports = Hh()), hi.exports;
}
var jh = qh();
const Yh = ph.useInsertionEffect, Bh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Gh = Bh ? F.useLayoutEffect : F.useEffect, Xh = Yh || Gh, _i = (i) => {
  const o = F.useRef([i, (...v) => o[0](...v)]).current;
  return Xh(() => {
    o[0] = i;
  }), o[1];
}, Qh = "popstate", Ei = "pushState", Ti = "replaceState", Ch = "hashchange", Rd = [Qh, Ei, Ti, Ch], Zh = (i) => {
  for (const o of Rd) addEventListener(o, i);
  return () => {
    for (const o of Rd) removeEventListener(o, i);
  };
}, Bd = (i, o) => jh.useSyncExternalStore(Zh, i, o), Vh = () => location.search, Lh = ({ ssrSearch: i = "" } = {}) => Bd(Vh, () => i), xd = () => location.pathname, wh = ({ ssrPath: i } = {}) => Bd(xd, i ? () => i : xd), Kh = (i, { replace: o = false, state: v = null } = {}) => history[o ? Ti : Ei](v, "", i), Jh = (i = {}) => [wh(i), Kh], Ud = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Ud] > "u") {
  for (const i of [Ei, Ti]) {
    const o = history[i];
    history[i] = function() {
      const v = o.apply(this, arguments), s = new Event(i);
      return s.arguments = arguments, dispatchEvent(s), v;
    };
  }
  Object.defineProperty(window, Ud, { value: true });
}
const Wh = (i, o) => o.toLowerCase().indexOf(i.toLowerCase()) ? "~" + o : o.slice(i.length) || "/", Gd = (i = "") => i === "/" ? "" : i, $h = (i, o) => i[0] === "~" ? i.slice(1) : Gd(o) + i, kh = (i = "", o) => Wh(bi(Gd(i)), bi(o)), Fh = (i) => i[0] === "?" ? i.slice(1) : i, bi = (i) => {
  try {
    return decodeURI(i);
  } catch {
    return i;
  }
}, Ph = (i) => bi(Fh(i)), Xd = { hook: Jh, searchHook: Lh, parser: Nh, base: "", ssrPath: void 0, ssrSearch: void 0, ssrContext: void 0, hrefs: (i) => i }, Qd = F.createContext(Xd), Au = () => F.useContext(Qd), Cd = {}, Zd = F.createContext(Cd), Ih = () => F.useContext(Zd), wn = (i) => {
  const [o, v] = i.hook(i);
  return [kh(i.base, o), _i((s, _) => v($h(s, i.base), _))];
}, tv = () => wn(Au()), lv = () => {
  const i = Au();
  return Ph(i.searchHook(i));
}, Vd = (i, o, v, s) => {
  const { pattern: _, keys: D } = o instanceof RegExp ? { keys: false, pattern: o } : i(o || "*", s), x = _.exec(v) || [], [Q, ...M] = x;
  return Q !== void 0 ? [true, (() => {
    const E = D !== false ? Object.fromEntries(D.map((B, w) => [B, M[w]])) : x.groups;
    let U = { ...M };
    return E && Object.assign(U, E), U;
  })(), ...s ? [Q] : []] : [false, null];
}, ev = ({ children: i, ...o }) => {
  var _a, _b;
  const v = Au(), s = o.hook ? Xd : v;
  let _ = s;
  const [D, x] = ((_a = o.ssrPath) == null ? void 0 : _a.split("?")) ?? [];
  x && (o.ssrSearch = x, o.ssrPath = D), o.hrefs = o.hrefs ?? ((_b = o.hook) == null ? void 0 : _b.hrefs);
  let Q = F.useRef({}), M = Q.current, E = M;
  for (let U in s) {
    const B = U === "base" ? s[U] + (o[U] || "") : o[U] || s[U];
    M === E && B !== E[U] && (Q.current = E = { ...E }), E[U] = B, (B !== s[U] || B !== _[U]) && (_ = E);
  }
  return F.createElement(Qd.Provider, { value: _, children: i });
}, Nd = ({ children: i, component: o }, v) => o ? F.createElement(o, { params: v }) : typeof i == "function" ? i(v) : i, uv = (i) => {
  let o = F.useRef(Cd);
  const v = o.current;
  return o.current = Object.keys(i).length !== Object.keys(v).length || Object.entries(i).some(([s, _]) => _ !== v[s]) ? i : v;
};
function av() {
  const [i, o] = tv(), v = lv(), s = F.useMemo(() => new URLSearchParams(v), [v]);
  let _ = s;
  const D = _i((x, Q) => {
    _ = new URLSearchParams(typeof x == "function" ? x(_) : x), o(i + "?" + _, Q);
  });
  return [s, D];
}
const Hd = ({ path: i, nest: o, match: v, ...s }) => {
  const _ = Au(), [D] = wn(_), [x, Q, M] = v ?? Vd(_.parser, i, D, o), E = uv({ ...Ih(), ...Q });
  if (!x) return null;
  const U = M ? F.createElement(ev, { base: M }, Nd(s, E)) : Nd(s, E);
  return F.createElement(Zd.Provider, { value: E, children: U });
};
F.forwardRef((i, o) => {
  const v = Au(), [s, _] = wn(v), { to: D = "", href: x = D, onClick: Q, asChild: M, children: E, className: U, replace: B, state: w, ...yt } = i, bt = _i((st) => {
    st.ctrlKey || st.metaKey || st.altKey || st.shiftKey || st.button !== 0 || (Q == null ? void 0 : Q(st), st.defaultPrevented || (st.preventDefault(), _(x, i)));
  }), mt = v.hrefs(x[0] === "~" ? x.slice(1) : v.base + x, v);
  return M && F.isValidElement(E) ? F.cloneElement(E, { onClick: bt, href: mt }) : F.createElement("a", { ...yt, onClick: bt, href: mt, className: (U == null ? void 0 : U.call) ? U(s === x) : U, children: E, ref: o });
});
const Ld = (i) => Array.isArray(i) ? i.flatMap((o) => Ld(o && o.type === F.Fragment ? o.props.children : o)) : [i], nv = ({ children: i, location: o }) => {
  const v = Au(), [s] = wn(v);
  for (const _ of Ld(i)) {
    let D = 0;
    if (F.isValidElement(_) && (D = Vd(v.parser, _.props.path, o || s, _.props.nest))[0]) return F.cloneElement(_, { match: D });
  }
  return null;
};
function cv({ value: i }) {
  return R.jsx(R.Fragment, { children: R.jsx("p", { className: "text-sm", children: i }) });
}
function fv({ value: i, tooltip: o }) {
  const [v, s] = F.useState(false), [_, D] = F.useState({ x: 0, y: 0 });
  return R.jsxs("div", { onMouseEnter: () => s(true), onMouseLeave: () => s(false), onMouseMove: ({ clientX: x, clientY: Q }) => D({ x, y: Q }), className: "bg-gray-100 px-2 py-1 rounded-md", children: [R.jsx("a", { href: `/p?input=${encodeURIComponent(i)}`, children: R.jsx(cv, { value: i }) }), v && R.jsx("div", { className: "fixed z-50 pointer-events-none", style: { left: _.x + 6, top: _.y + 6 }, children: R.jsx("div", { className: "bg-gray-900 text-white text-sm rounded px-2 py-1", children: R.jsx("p", { children: o }) }) })] });
}
function Ai() {
  return R.jsxs("div", { className: "flex flex-col items-center gap-4", children: [R.jsx("h1", { className: "text-4xl", children: "russell" }), R.jsx("form", { action: "/p", className: "flex justify-center w-4xl", children: R.jsx("input", { autoFocus: true, autoComplete: "off", autoCorrect: "off", className: "input", type: "text", name: "input", placeholder: "enter a logical proposition" }) })] });
}
const iv = [[{ proposition: "p && (p || q) == p", name: "absorption laws (1)" }, { proposition: "p || (p && q) == p", name: "absorption laws (2)" }], [{ proposition: "p && (q || r) == (p && q) || (p && r)", name: "distributive laws (conjunction over disjunction)" }, { proposition: "p || (q && r) == (p || q) && (p || r)", name: "distributive laws (disjunction over conjunction)" }], [{ proposition: "!(p && q) == !p || !q", name: "de morgan's laws (1)" }, { proposition: "!(p || q) == !p && !q", name: "de morgan's laws (2)" }], [{ proposition: "!q => !p == p => q", name: "contrapositive" }], [{ proposition: "!!p == p", name: "double negation" }], [{ proposition: "p => q == !p || q", name: "material implication" }]];
function sv() {
  return R.jsxs(R.Fragment, { children: [R.jsx(Ai, {}), R.jsxs("div", { className: "flex flex-col items-center gap-4 my-12", children: [R.jsx("h1", { className: "text-xl", children: "some laws, for example" }), R.jsx("table", { children: R.jsx("tbody", { children: iv.map((i, o) => R.jsx("tr", { children: i.map((v) => R.jsx("td", { children: R.jsx("div", { className: "m-0.5 mx-4", children: R.jsx(fv, { value: v.proposition, tooltip: v.name }) }) }, v.name)) }, o)) }) })] })] });
}
function rv() {
  return R.jsx("header", { children: R.jsx("nav", { children: R.jsxs("ul", { className: "flex gap-4 justify-center", children: [R.jsx("li", { children: R.jsx("a", { href: "/", children: "russell" }) }), R.jsx("li", { children: R.jsx("a", { href: "/docs", children: "docs" }) }), R.jsx("li", { children: R.jsx("a", { href: "https://github.com/podikoglou/russell", children: "github" }) })] }) }) });
}
function ov({ assignments: i }) {
  return Object.keys(i).length === 0 ? null : R.jsxs("div", { children: [R.jsx("h2", { className: "text-2xl font-bold mb-4", children: "variable assignments" }), R.jsx("div", { className: "flex flex-col gap-2", children: Object.entries(i).map(([o, v]) => R.jsxs("div", { className: "flex items-center gap-2", children: [R.jsxs("span", { className: "font-mono", children: [o, ":"] }), R.jsx("span", { className: `px-2 py-1 rounded text-sm ${v ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`, children: v ? "true" : "false" })] }, o)) })] });
}
function wd({ label: i, value: o, className: v = "" }) {
  return R.jsxs("div", { className: `flex flex-col items-center gap-2 ${v}`, children: [R.jsx("h2", { className: "text-2xl font-bold", children: i }), R.jsx("div", { className: `text-xl font-bold px-6 py-3 rounded-lg ${o ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`, children: o ? "true" : "false" })] });
}
function dv({ properties: i }) {
  return i.length === 0 ? null : R.jsxs("div", { children: [R.jsx("h2", { className: "text-2xl font-bold mb-4", children: "logical properties" }), R.jsx("div", { className: "flex flex-wrap gap-4", children: i.map((o) => R.jsxs("div", { className: "flex flex-col items-center gap-2", children: [R.jsx(wd, { label: o.name, value: o.value }), o.description && R.jsx("p", { className: "text-sm text-gray-600", children: o.description })] }, o.name)) })] });
}
let ut;
function yv(i) {
  const o = ut.__externref_table_alloc();
  return ut.__wbindgen_export_2.set(o, i), o;
}
function mi(i, o) {
  try {
    return i.apply(this, o);
  } catch (v) {
    const s = yv(v);
    ut.__wbindgen_exn_store(s);
  }
}
const Kd = typeof TextDecoder < "u" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Kd.decode();
let Aa = null;
function Zn() {
  return (Aa === null || Aa.byteLength === 0) && (Aa = new Uint8Array(ut.memory.buffer)), Aa;
}
function Cn(i, o) {
  return i = i >>> 0, Kd.decode(Zn().subarray(i, i + o));
}
let Ye = 0;
const Vn = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, hv = typeof Vn.encodeInto == "function" ? function(i, o) {
  return Vn.encodeInto(i, o);
} : function(i, o) {
  const v = Vn.encode(i);
  return o.set(v), { read: i.length, written: v.length };
};
function pa(i, o, v) {
  if (v === void 0) {
    const Q = Vn.encode(i), M = o(Q.length, 1) >>> 0;
    return Zn().subarray(M, M + Q.length).set(Q), Ye = Q.length, M;
  }
  let s = i.length, _ = o(s, 1) >>> 0;
  const D = Zn();
  let x = 0;
  for (; x < s; x++) {
    const Q = i.charCodeAt(x);
    if (Q > 127) break;
    D[_ + x] = Q;
  }
  if (x !== s) {
    x !== 0 && (i = i.slice(x)), _ = v(_, s, s = x + i.length * 3, 1) >>> 0;
    const Q = Zn().subarray(_ + x, _ + s), M = hv(i, Q);
    x += M.written, _ = v(_, s, x, 1) >>> 0;
  }
  return Ye = x, _;
}
let je = null;
function ye() {
  return (je === null || je.buffer.detached === true || je.buffer.detached === void 0 && je.buffer !== ut.memory.buffer) && (je = new DataView(ut.memory.buffer)), je;
}
function Si(i) {
  const o = typeof i;
  if (o == "number" || o == "boolean" || i == null) return `${i}`;
  if (o == "string") return `"${i}"`;
  if (o == "symbol") {
    const _ = i.description;
    return _ == null ? "Symbol" : `Symbol(${_})`;
  }
  if (o == "function") {
    const _ = i.name;
    return typeof _ == "string" && _.length > 0 ? `Function(${_})` : "Function";
  }
  if (Array.isArray(i)) {
    const _ = i.length;
    let D = "[";
    _ > 0 && (D += Si(i[0]));
    for (let x = 1; x < _; x++) D += ", " + Si(i[x]);
    return D += "]", D;
  }
  const v = /\[object ([^\]]+)\]/.exec(toString.call(i));
  let s;
  if (v && v.length > 1) s = v[1];
  else return toString.call(i);
  if (s == "Object") try {
    return "Object(" + JSON.stringify(i) + ")";
  } catch {
    return "Object";
  }
  return i instanceof Error ? `${i.name}: ${i.message}
${i.stack}` : s;
}
function gi(i) {
  return i == null;
}
function qd(i) {
  const o = ut.__wbindgen_export_2.get(i);
  return ut.__externref_table_dealloc(i), o;
}
const jd = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((i) => ut.__wbg_wasmengine_free(i >>> 0, 1));
class vv {
  __destroy_into_raw() {
    const o = this.__wbg_ptr;
    return this.__wbg_ptr = 0, jd.unregister(this), o;
  }
  free() {
    const o = this.__destroy_into_raw();
    ut.__wbg_wasmengine_free(o, 0);
  }
  constructor() {
    const o = ut.wasmengine_new();
    return this.__wbg_ptr = o >>> 0, jd.register(this, this.__wbg_ptr, this), this;
  }
  eval(o, v) {
    const s = pa(o, ut.__wbindgen_malloc, ut.__wbindgen_realloc), _ = Ye, D = ut.wasmengine_eval(this.__wbg_ptr, s, _, v);
    if (D[2]) throw qd(D[1]);
    return D[0] !== 0;
  }
  check_tautology(o) {
    const v = pa(o, ut.__wbindgen_malloc, ut.__wbindgen_realloc), s = Ye, _ = ut.wasmengine_check_tautology(this.__wbg_ptr, v, s);
    if (_[2]) throw qd(_[1]);
    return _[0] !== 0;
  }
}
async function mv(i, o) {
  if (typeof Response == "function" && i instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(i, o);
    } catch (s) {
      if (i.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", s);
      else throw s;
    }
    const v = await i.arrayBuffer();
    return await WebAssembly.instantiate(v, o);
  } else {
    const v = await WebAssembly.instantiate(i, o);
    return v instanceof WebAssembly.Instance ? { instance: v, module: i } : v;
  }
}
function gv() {
  const i = {};
  return i.wbg = {}, i.wbg.__wbg_buffer_609cc3eee51ed158 = function(o) {
    return o.buffer;
  }, i.wbg.__wbg_call_672a4d21634d4a24 = function() {
    return mi(function(o, v) {
      return o.call(v);
    }, arguments);
  }, i.wbg.__wbg_done_769e5ede4b31c67b = function(o) {
    return o.done;
  }, i.wbg.__wbg_entries_3265d4158b33e5dc = function(o) {
    return Object.entries(o);
  }, i.wbg.__wbg_error_7534b8e9a36f1ab4 = function(o, v) {
    let s, _;
    try {
      s = o, _ = v, console.error(Cn(o, v));
    } finally {
      ut.__wbindgen_free(s, _, 1);
    }
  }, i.wbg.__wbg_get_67b2ba62fc30de12 = function() {
    return mi(function(o, v) {
      return Reflect.get(o, v);
    }, arguments);
  }, i.wbg.__wbg_get_b9b93047fe3cf45b = function(o, v) {
    return o[v >>> 0];
  }, i.wbg.__wbg_instanceof_ArrayBuffer_e14585432e3737fc = function(o) {
    let v;
    try {
      v = o instanceof ArrayBuffer;
    } catch {
      v = false;
    }
    return v;
  }, i.wbg.__wbg_instanceof_Uint8Array_17156bcf118086a9 = function(o) {
    let v;
    try {
      v = o instanceof Uint8Array;
    } catch {
      v = false;
    }
    return v;
  }, i.wbg.__wbg_iterator_9a24c88df860dc65 = function() {
    return Symbol.iterator;
  }, i.wbg.__wbg_length_a446193dc22c12f8 = function(o) {
    return o.length;
  }, i.wbg.__wbg_length_e2d2a49132c1b256 = function(o) {
    return o.length;
  }, i.wbg.__wbg_new_8a6f238a6ece86ea = function() {
    return new Error();
  }, i.wbg.__wbg_new_a12002a7f91c75be = function(o) {
    return new Uint8Array(o);
  }, i.wbg.__wbg_next_25feadfc0913fea9 = function(o) {
    return o.next;
  }, i.wbg.__wbg_next_6574e1a8a62d1055 = function() {
    return mi(function(o) {
      return o.next();
    }, arguments);
  }, i.wbg.__wbg_set_65595bdd868b3009 = function(o, v, s) {
    o.set(v, s >>> 0);
  }, i.wbg.__wbg_stack_0ed75d68575b0f3c = function(o, v) {
    const s = v.stack, _ = pa(s, ut.__wbindgen_malloc, ut.__wbindgen_realloc), D = Ye;
    ye().setInt32(o + 4 * 1, D, true), ye().setInt32(o + 4 * 0, _, true);
  }, i.wbg.__wbg_value_cd1ffa7b1ab794f1 = function(o) {
    return o.value;
  }, i.wbg.__wbindgen_boolean_get = function(o) {
    const v = o;
    return typeof v == "boolean" ? v ? 1 : 0 : 2;
  }, i.wbg.__wbindgen_debug_string = function(o, v) {
    const s = Si(v), _ = pa(s, ut.__wbindgen_malloc, ut.__wbindgen_realloc), D = Ye;
    ye().setInt32(o + 4 * 1, D, true), ye().setInt32(o + 4 * 0, _, true);
  }, i.wbg.__wbindgen_error_new = function(o, v) {
    return new Error(Cn(o, v));
  }, i.wbg.__wbindgen_init_externref_table = function() {
    const o = ut.__wbindgen_export_2, v = o.grow(4);
    o.set(0, void 0), o.set(v + 0, void 0), o.set(v + 1, null), o.set(v + 2, true), o.set(v + 3, false);
  }, i.wbg.__wbindgen_is_function = function(o) {
    return typeof o == "function";
  }, i.wbg.__wbindgen_is_object = function(o) {
    const v = o;
    return typeof v == "object" && v !== null;
  }, i.wbg.__wbindgen_jsval_loose_eq = function(o, v) {
    return o == v;
  }, i.wbg.__wbindgen_memory = function() {
    return ut.memory;
  }, i.wbg.__wbindgen_number_get = function(o, v) {
    const s = v, _ = typeof s == "number" ? s : void 0;
    ye().setFloat64(o + 8 * 1, gi(_) ? 0 : _, true), ye().setInt32(o + 4 * 0, !gi(_), true);
  }, i.wbg.__wbindgen_string_get = function(o, v) {
    const s = v, _ = typeof s == "string" ? s : void 0;
    var D = gi(_) ? 0 : pa(_, ut.__wbindgen_malloc, ut.__wbindgen_realloc), x = Ye;
    ye().setInt32(o + 4 * 1, x, true), ye().setInt32(o + 4 * 0, D, true);
  }, i.wbg.__wbindgen_string_new = function(o, v) {
    return Cn(o, v);
  }, i.wbg.__wbindgen_throw = function(o, v) {
    throw new Error(Cn(o, v));
  }, i;
}
function bv(i, o) {
  return ut = i.exports, Jd.__wbindgen_wasm_module = o, je = null, Aa = null, ut.__wbindgen_start(), ut;
}
async function Jd(i) {
  if (ut !== void 0) return ut;
  typeof i < "u" && (Object.getPrototypeOf(i) === Object.prototype ? { module_or_path: i } = i : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof i > "u" && (i = new URL("/assets/russell_engine_bg-C60lntmb.wasm", import.meta.url));
  const o = gv();
  (typeof i == "string" || typeof Request == "function" && i instanceof Request || typeof URL == "function" && i instanceof URL) && (i = fetch(i));
  const { instance: v, module: s } = await mv(await i, o);
  return bv(v, s);
}
const Wd = F.createContext(void 0), Sv = ({ children: i }) => {
  const [o, v] = F.useState(null), [s, _] = F.useState(true), [D, x] = F.useState(null);
  return F.useEffect(() => {
    (async () => {
      try {
        await Jd();
        const M = new vv();
        v(M);
      } catch (M) {
        console.error("Failed to initialize WASM:", M), x(M instanceof Error ? M.message : "Failed to initialize WASM");
      } finally {
        _(false);
      }
    })();
  }, []), R.jsx(Wd.Provider, { value: { engine: o, isLoading: s, error: D }, children: i });
}, $d = () => {
  const i = F.useContext(Wd);
  if (!i) throw new Error("useEngine must be used within a EngineProvider");
  return i;
};
function _v() {
  const [i] = av(), o = i.get("input"), v = {};
  for (const s of i.keys()) s !== "input" && (v[s] = i.get(s) === "true");
  return { input: o, assignments: v };
}
function Ev(i, o) {
  const { engine: v } = $d(), [s, _] = F.useState(null), [D, x] = F.useState([]), [Q, M] = F.useState(void 0);
  return F.useEffect(() => {
    if (!v || !i) {
      _(null), x([]), M(void 0);
      return;
    }
    try {
      if (Object.keys(o).length > 0) {
        const B = v.eval(i, o);
        _(B), x([]);
      }
      const U = v.check_tautology(i);
      x([{ name: "tautology", value: U, description: "always true regardless of variable assignments" }]), M(void 0);
    } catch (E) {
      M(String(E)), _(null), x([]);
    }
  }, [v, i, JSON.stringify(o)]), { result: s, properties: D, error: Q };
}
function Tv() {
  return R.jsxs(R.Fragment, { children: [R.jsx(Ai, {}), R.jsx("div", { className: "flex flex-col items-center my-8", children: R.jsx("h2", { className: "text-2xl", children: "loading engine..." }) })] });
}
function Yd({ error: i }) {
  return R.jsxs(R.Fragment, { children: [R.jsx("h1", { className: "text-4xl", children: "whoops!" }), R.jsx("h2", { className: "text-2xl", children: i })] });
}
function Av() {
  const { isLoading: i, error: o } = $d(), { input: v, assignments: s } = _v(), { result: _, properties: D, error: x } = Ev(v, s);
  return i ? R.jsx(Tv, {}) : o || x ? R.jsx(Yd, { error: o || x || "Unknown error" }) : v ? R.jsxs(R.Fragment, { children: [R.jsx(Ai, {}), R.jsxs("div", { className: "flex flex-col items-center my-8 gap-12", children: [R.jsx("h2", { className: "text-2xl font-mono bg-gray-100 px-4 py-2 rounded", children: v }), R.jsx(ov, { assignments: s }), _ !== null && R.jsx(wd, { label: "result", value: _ }), R.jsx(dv, { properties: D })] })] }) : R.jsx(Yd, { error: "you forgot to give input!" });
}
function pv() {
  return R.jsxs(Sv, { children: [R.jsx(rv, {}), R.jsx("div", { className: "container mx-auto my-8", children: R.jsxs(nv, { children: [R.jsx(Hd, { path: "/", component: sv }), R.jsx(Hd, { path: "/p", component: Av })] }) })] });
}
Uh.createRoot(document.getElementById("root")).render(R.jsx(F.StrictMode, { children: R.jsx(pv, {}) }));
