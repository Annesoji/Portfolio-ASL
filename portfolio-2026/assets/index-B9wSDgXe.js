(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function Zd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yl={exports:{}},Es={},Jl={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yr=Symbol.for("react.element"),Yd=Symbol.for("react.portal"),Jd=Symbol.for("react.fragment"),ep=Symbol.for("react.strict_mode"),tp=Symbol.for("react.profiler"),np=Symbol.for("react.provider"),rp=Symbol.for("react.context"),sp=Symbol.for("react.forward_ref"),ip=Symbol.for("react.suspense"),op=Symbol.for("react.memo"),ap=Symbol.for("react.lazy"),Aa=Symbol.iterator;function lp(e){return e===null||typeof e!="object"?null:(e=Aa&&e[Aa]||e["@@iterator"],typeof e=="function"?e:null)}var eu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tu=Object.assign,nu={};function Sn(e,t,n){this.props=e,this.context=t,this.refs=nu,this.updater=n||eu}Sn.prototype.isReactComponent={};Sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ru(){}ru.prototype=Sn.prototype;function Io(e,t,n){this.props=e,this.context=t,this.refs=nu,this.updater=n||eu}var Po=Io.prototype=new ru;Po.constructor=Io;tu(Po,Sn.prototype);Po.isPureReactComponent=!0;var Da=Array.isArray,su=Object.prototype.hasOwnProperty,To={current:null},iu={key:!0,ref:!0,__self:!0,__source:!0};function ou(e,t,n){var r,s={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)su.call(t,r)&&!iu.hasOwnProperty(r)&&(s[r]=t[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];s.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:yr,type:e,key:o,ref:a,props:s,_owner:To.current}}function up(e,t){return{$$typeof:yr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Eo(e){return typeof e=="object"&&e!==null&&e.$$typeof===yr}function cp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ia=/\/+/g;function Qs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?cp(""+e.key):t.toString(36)}function Wr(e,t,n,r,s){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case yr:case Yd:a=!0}}if(a)return a=e,s=s(a),e=r===""?"."+Qs(a,0):r,Da(s)?(n="",e!=null&&(n=e.replace(Ia,"$&/")+"/"),Wr(s,t,n,"",function(d){return d})):s!=null&&(Eo(s)&&(s=up(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(Ia,"$&/")+"/")+e)),t.push(s)),1;if(a=0,r=r===""?".":r+":",Da(e))for(var l=0;l<e.length;l++){o=e[l];var u=r+Qs(o,l);a+=Wr(o,t,n,u,s)}else if(u=lp(e),typeof u=="function")for(e=u.call(e),l=0;!(o=e.next()).done;)o=o.value,u=r+Qs(o,l++),a+=Wr(o,t,n,u,s);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ar(e,t,n){if(e==null)return e;var r=[],s=0;return Wr(e,r,"","",function(o){return t.call(n,o,s++)}),r}function dp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},Hr={transition:null},pp={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:Hr,ReactCurrentOwner:To};function au(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:Ar,forEach:function(e,t,n){Ar(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ar(e,function(){t++}),t},toArray:function(e){return Ar(e,function(t){return t})||[]},only:function(e){if(!Eo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=Sn;z.Fragment=Jd;z.Profiler=tp;z.PureComponent=Io;z.StrictMode=ep;z.Suspense=ip;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pp;z.act=au;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=tu({},e.props),s=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=To.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)su.call(t,u)&&!iu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:yr,type:e.type,key:s,ref:o,props:r,_owner:a}};z.createContext=function(e){return e={$$typeof:rp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:np,_context:e},e.Consumer=e};z.createElement=ou;z.createFactory=function(e){var t=ou.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:sp,render:e}};z.isValidElement=Eo;z.lazy=function(e){return{$$typeof:ap,_payload:{_status:-1,_result:e},_init:dp}};z.memo=function(e,t){return{$$typeof:op,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Hr.transition;Hr.transition={};try{e()}finally{Hr.transition=t}};z.unstable_act=au;z.useCallback=function(e,t){return me.current.useCallback(e,t)};z.useContext=function(e){return me.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return me.current.useDeferredValue(e)};z.useEffect=function(e,t){return me.current.useEffect(e,t)};z.useId=function(){return me.current.useId()};z.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return me.current.useMemo(e,t)};z.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};z.useRef=function(e){return me.current.useRef(e)};z.useState=function(e){return me.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return me.current.useTransition()};z.version="18.3.1";Jl.exports=z;var C=Jl.exports;const mp=Zd(C);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fp=C,hp=Symbol.for("react.element"),gp=Symbol.for("react.fragment"),xp=Object.prototype.hasOwnProperty,vp=fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yp={key:!0,ref:!0,__self:!0,__source:!0};function lu(e,t,n){var r,s={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)xp.call(t,r)&&!yp.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:hp,type:e,key:o,ref:a,props:s,_owner:vp.current}}Es.Fragment=gp;Es.jsx=lu;Es.jsxs=lu;Yl.exports=Es;var i=Yl.exports,Di={},uu={exports:{}},De={},cu={exports:{}},du={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,T){var L=N.length;N.push(T);e:for(;0<L;){var V=L-1>>>1,I=N[V];if(0<s(I,T))N[V]=T,N[L]=I,L=V;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var T=N[0],L=N.pop();if(L!==T){N[0]=L;e:for(var V=0,I=N.length,Z=I>>>1;V<Z;){var ce=2*(V+1)-1,Dn=N[ce],Pt=ce+1,Nr=N[Pt];if(0>s(Dn,L))Pt<I&&0>s(Nr,Dn)?(N[V]=Nr,N[Pt]=L,V=Pt):(N[V]=Dn,N[ce]=L,V=ce);else if(Pt<I&&0>s(Nr,L))N[V]=Nr,N[Pt]=L,V=Pt;else break e}}return T}function s(N,T){var L=N.sortIndex-T.sortIndex;return L!==0?L:N.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],d=[],p=1,g=null,h=3,x=!1,v=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(N){for(var T=n(d);T!==null;){if(T.callback===null)r(d);else if(T.startTime<=N)r(d),T.sortIndex=T.expirationTime,t(u,T);else break;T=n(d)}}function b(N){if(y=!1,f(N),!v)if(n(u)!==null)v=!0,An(S);else{var T=n(d);T!==null&&Kt(b,T.startTime-N)}}function S(N,T){v=!1,y&&(y=!1,m(D),D=-1),x=!0;var L=h;try{for(f(T),g=n(u);g!==null&&(!(g.expirationTime>T)||N&&!we());){var V=g.callback;if(typeof V=="function"){g.callback=null,h=g.priorityLevel;var I=V(g.expirationTime<=T);T=e.unstable_now(),typeof I=="function"?g.callback=I:g===n(u)&&r(u),f(T)}else r(u);g=n(u)}if(g!==null)var Z=!0;else{var ce=n(d);ce!==null&&Kt(b,ce.startTime-T),Z=!1}return Z}finally{g=null,h=L,x=!1}}var P=!1,j=null,D=-1,O=5,q=-1;function we(){return!(e.unstable_now()-q<O)}function It(){if(j!==null){var N=e.unstable_now();q=N;var T=!0;try{T=j(!0,N)}finally{T?at():(P=!1,j=null)}}else P=!1}var at;if(typeof c=="function")at=function(){c(It)};else if(typeof MessageChannel<"u"){var Cr=new MessageChannel,Ks=Cr.port2;Cr.port1.onmessage=It,at=function(){Ks.postMessage(null)}}else at=function(){k(It,0)};function An(N){j=N,P||(P=!0,at())}function Kt(N,T){D=k(function(){N(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,An(S))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var T=3;break;default:T=h}var L=h;h=T;try{return N()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,T){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=h;h=N;try{return T()}finally{h=L}},e.unstable_scheduleCallback=function(N,T,L){var V=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?V+L:V):L=V,N){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=L+I,N={id:p++,callback:T,priorityLevel:N,startTime:L,expirationTime:I,sortIndex:-1},L>V?(N.sortIndex=L,t(d,N),n(u)===null&&N===n(d)&&(y?(m(D),D=-1):y=!0,Kt(b,L-V))):(N.sortIndex=I,t(u,N),v||x||(v=!0,An(S))),N},e.unstable_shouldYield=we,e.unstable_wrapCallback=function(N){var T=h;return function(){var L=h;h=T;try{return N.apply(this,arguments)}finally{h=L}}}})(du);cu.exports=du;var bp=cu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp=C,Ae=bp;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pu=new Set,er={};function Ht(e,t){xn(e,t),xn(e+"Capture",t)}function xn(e,t){for(er[e]=t,e=0;e<t.length;e++)pu.add(t[e])}var nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ii=Object.prototype.hasOwnProperty,kp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pa={},Ta={};function jp(e){return Ii.call(Ta,e)?!0:Ii.call(Pa,e)?!1:kp.test(e)?Ta[e]=!0:(Pa[e]=!0,!1)}function Sp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cp(e,t,n,r){if(t===null||typeof t>"u"||Sp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,n,r,s,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Lo=/[\-:]([a-z])/g;function qo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Lo,qo);ie[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Lo,qo);ie[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Lo,qo);ie[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function zo(e,t,n,r){var s=ie.hasOwnProperty(t)?ie[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Cp(t,n,s,r)&&(n=null),r||s===null?jp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ot=wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Dr=Symbol.for("react.element"),Yt=Symbol.for("react.portal"),Jt=Symbol.for("react.fragment"),Uo=Symbol.for("react.strict_mode"),Pi=Symbol.for("react.profiler"),mu=Symbol.for("react.provider"),fu=Symbol.for("react.context"),Mo=Symbol.for("react.forward_ref"),Ti=Symbol.for("react.suspense"),Ei=Symbol.for("react.suspense_list"),Ro=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),hu=Symbol.for("react.offscreen"),Ea=Symbol.iterator;function In(e){return e===null||typeof e!="object"?null:(e=Ea&&e[Ea]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Zs;function Rn(e){if(Zs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Zs=t&&t[1]||""}return`
`+Zs+e}var Ys=!1;function Js(e,t){if(!e||Ys)return"";Ys=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),o=r.stack.split(`
`),a=s.length-1,l=o.length-1;1<=a&&0<=l&&s[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(s[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||s[a]!==o[l]){var u=`
`+s[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=l);break}}}finally{Ys=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rn(e):""}function Np(e){switch(e.tag){case 5:return Rn(e.type);case 16:return Rn("Lazy");case 13:return Rn("Suspense");case 19:return Rn("SuspenseList");case 0:case 2:case 15:return e=Js(e.type,!1),e;case 11:return e=Js(e.type.render,!1),e;case 1:return e=Js(e.type,!0),e;default:return""}}function Li(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jt:return"Fragment";case Yt:return"Portal";case Pi:return"Profiler";case Uo:return"StrictMode";case Ti:return"Suspense";case Ei:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fu:return(e.displayName||"Context")+".Consumer";case mu:return(e._context.displayName||"Context")+".Provider";case Mo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ro:return t=e.displayName||null,t!==null?t:Li(e.type)||"Memo";case ut:t=e._payload,e=e._init;try{return Li(e(t))}catch{}}return null}function Ap(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Li(t);case 8:return t===Uo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function St(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dp(e){var t=gu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ir(e){e._valueTracker||(e._valueTracker=Dp(e))}function xu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=gu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ss(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qi(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function La(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=St(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vu(e,t){t=t.checked,t!=null&&zo(e,"checked",t,!1)}function zi(e,t){vu(e,t);var n=St(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ui(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ui(e,t.type,St(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function qa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ui(e,t,n){(t!=="number"||ss(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fn=Array.isArray;function dn(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+St(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Mi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function za(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(Fn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:St(n)}}function yu(e,t){var n=St(t.value),r=St(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ua(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ri(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Pr,wu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Pr=Pr||document.createElement("div"),Pr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Pr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function tr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ip=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(e){Ip.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),On[t]=On[e]})});function ku(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||On.hasOwnProperty(e)&&On[e]?(""+t).trim():t+"px"}function ju(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=ku(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var Pp=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fi(e,t){if(t){if(Pp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function Bi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _i=null;function Fo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Oi=null,pn=null,mn=null;function Ma(e){if(e=kr(e)){if(typeof Oi!="function")throw Error(w(280));var t=e.stateNode;t&&(t=Ms(t),Oi(e.stateNode,e.type,t))}}function Su(e){pn?mn?mn.push(e):mn=[e]:pn=e}function Cu(){if(pn){var e=pn,t=mn;if(mn=pn=null,Ma(e),t)for(e=0;e<t.length;e++)Ma(t[e])}}function Nu(e,t){return e(t)}function Au(){}var ei=!1;function Du(e,t,n){if(ei)return e(t,n);ei=!0;try{return Nu(e,t,n)}finally{ei=!1,(pn!==null||mn!==null)&&(Au(),Cu())}}function nr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ms(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var Vi=!1;if(nt)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){Vi=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{Vi=!1}function Tp(e,t,n,r,s,o,a,l,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(p){this.onError(p)}}var Vn=!1,is=null,os=!1,$i=null,Ep={onError:function(e){Vn=!0,is=e}};function Lp(e,t,n,r,s,o,a,l,u){Vn=!1,is=null,Tp.apply(Ep,arguments)}function qp(e,t,n,r,s,o,a,l,u){if(Lp.apply(this,arguments),Vn){if(Vn){var d=is;Vn=!1,is=null}else throw Error(w(198));os||(os=!0,$i=d)}}function Xt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Iu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ra(e){if(Xt(e)!==e)throw Error(w(188))}function zp(e){var t=e.alternate;if(!t){if(t=Xt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var o=s.alternate;if(o===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===n)return Ra(s),e;if(o===r)return Ra(s),t;o=o.sibling}throw Error(w(188))}if(n.return!==r.return)n=s,r=o;else{for(var a=!1,l=s.child;l;){if(l===n){a=!0,n=s,r=o;break}if(l===r){a=!0,r=s,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=s;break}if(l===r){a=!0,r=o,n=s;break}l=l.sibling}if(!a)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Pu(e){return e=zp(e),e!==null?Tu(e):null}function Tu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tu(e);if(t!==null)return t;e=e.sibling}return null}var Eu=Ae.unstable_scheduleCallback,Fa=Ae.unstable_cancelCallback,Up=Ae.unstable_shouldYield,Mp=Ae.unstable_requestPaint,K=Ae.unstable_now,Rp=Ae.unstable_getCurrentPriorityLevel,Bo=Ae.unstable_ImmediatePriority,Lu=Ae.unstable_UserBlockingPriority,as=Ae.unstable_NormalPriority,Fp=Ae.unstable_LowPriority,qu=Ae.unstable_IdlePriority,Ls=null,Xe=null;function Bp(e){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(Ls,e,void 0,(e.current.flags&128)===128)}catch{}}var _e=Math.clz32?Math.clz32:Vp,_p=Math.log,Op=Math.LN2;function Vp(e){return e>>>=0,e===0?32:31-(_p(e)/Op|0)|0}var Tr=64,Er=4194304;function Bn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ls(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~s;l!==0?r=Bn(l):(o&=a,o!==0&&(r=Bn(o)))}else a=n&~s,a!==0?r=Bn(a):o!==0&&(r=Bn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,o=t&-t,s>=o||s===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-_e(t),s=1<<n,r|=e[n],t&=~s;return r}function $p(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-_e(o),l=1<<a,u=s[a];u===-1?(!(l&n)||l&r)&&(s[a]=$p(l,t)):u<=t&&(e.expiredLanes|=l),o&=~l}}function Gi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zu(){var e=Tr;return Tr<<=1,!(Tr&4194240)&&(Tr=64),e}function ti(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function br(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_e(t),e[t]=n}function Wp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-_e(n),o=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~o}}function _o(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-_e(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var R=0;function Uu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Mu,Oo,Ru,Fu,Bu,Wi=!1,Lr=[],ht=null,gt=null,xt=null,rr=new Map,sr=new Map,dt=[],Hp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ba(e,t){switch(e){case"focusin":case"focusout":ht=null;break;case"dragenter":case"dragleave":gt=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":rr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":sr.delete(t.pointerId)}}function Tn(e,t,n,r,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[s]},t!==null&&(t=kr(t),t!==null&&Oo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Xp(e,t,n,r,s){switch(t){case"focusin":return ht=Tn(ht,e,t,n,r,s),!0;case"dragenter":return gt=Tn(gt,e,t,n,r,s),!0;case"mouseover":return xt=Tn(xt,e,t,n,r,s),!0;case"pointerover":var o=s.pointerId;return rr.set(o,Tn(rr.get(o)||null,e,t,n,r,s)),!0;case"gotpointercapture":return o=s.pointerId,sr.set(o,Tn(sr.get(o)||null,e,t,n,r,s)),!0}return!1}function _u(e){var t=zt(e.target);if(t!==null){var n=Xt(t);if(n!==null){if(t=n.tag,t===13){if(t=Iu(n),t!==null){e.blockedOn=t,Bu(e.priority,function(){Ru(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Hi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_i=r,n.target.dispatchEvent(r),_i=null}else return t=kr(n),t!==null&&Oo(t),e.blockedOn=n,!1;t.shift()}return!0}function _a(e,t,n){Xr(e)&&n.delete(t)}function Kp(){Wi=!1,ht!==null&&Xr(ht)&&(ht=null),gt!==null&&Xr(gt)&&(gt=null),xt!==null&&Xr(xt)&&(xt=null),rr.forEach(_a),sr.forEach(_a)}function En(e,t){e.blockedOn===t&&(e.blockedOn=null,Wi||(Wi=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,Kp)))}function ir(e){function t(s){return En(s,e)}if(0<Lr.length){En(Lr[0],e);for(var n=1;n<Lr.length;n++){var r=Lr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ht!==null&&En(ht,e),gt!==null&&En(gt,e),xt!==null&&En(xt,e),rr.forEach(t),sr.forEach(t),n=0;n<dt.length;n++)r=dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dt.length&&(n=dt[0],n.blockedOn===null);)_u(n),n.blockedOn===null&&dt.shift()}var fn=ot.ReactCurrentBatchConfig,us=!0;function Qp(e,t,n,r){var s=R,o=fn.transition;fn.transition=null;try{R=1,Vo(e,t,n,r)}finally{R=s,fn.transition=o}}function Zp(e,t,n,r){var s=R,o=fn.transition;fn.transition=null;try{R=4,Vo(e,t,n,r)}finally{R=s,fn.transition=o}}function Vo(e,t,n,r){if(us){var s=Hi(e,t,n,r);if(s===null)di(e,t,r,cs,n),Ba(e,r);else if(Xp(s,e,t,n,r))r.stopPropagation();else if(Ba(e,r),t&4&&-1<Hp.indexOf(e)){for(;s!==null;){var o=kr(s);if(o!==null&&Mu(o),o=Hi(e,t,n,r),o===null&&di(e,t,r,cs,n),o===s)break;s=o}s!==null&&r.stopPropagation()}else di(e,t,r,null,n)}}var cs=null;function Hi(e,t,n,r){if(cs=null,e=Fo(r),e=zt(e),e!==null)if(t=Xt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Iu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return cs=e,null}function Ou(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rp()){case Bo:return 1;case Lu:return 4;case as:case Fp:return 16;case qu:return 536870912;default:return 16}default:return 16}}var mt=null,$o=null,Kr=null;function Vu(){if(Kr)return Kr;var e,t=$o,n=t.length,r,s="value"in mt?mt.value:mt.textContent,o=s.length;for(e=0;e<n&&t[e]===s[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===s[o-r];r++);return Kr=s.slice(e,1<r?1-r:void 0)}function Qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qr(){return!0}function Oa(){return!1}function Ie(e){function t(n,r,s,o,a){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?qr:Oa,this.isPropagationStopped=Oa,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qr)},persist:function(){},isPersistent:qr}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Go=Ie(Cn),wr=H({},Cn,{view:0,detail:0}),Yp=Ie(wr),ni,ri,Ln,qs=H({},wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ln&&(Ln&&e.type==="mousemove"?(ni=e.screenX-Ln.screenX,ri=e.screenY-Ln.screenY):ri=ni=0,Ln=e),ni)},movementY:function(e){return"movementY"in e?e.movementY:ri}}),Va=Ie(qs),Jp=H({},qs,{dataTransfer:0}),em=Ie(Jp),tm=H({},wr,{relatedTarget:0}),si=Ie(tm),nm=H({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),rm=Ie(nm),sm=H({},Cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),im=Ie(sm),om=H({},Cn,{data:0}),$a=Ie(om),am={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},um={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=um[e])?!!t[e]:!1}function Wo(){return cm}var dm=H({},wr,{key:function(e){if(e.key){var t=am[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wo,charCode:function(e){return e.type==="keypress"?Qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pm=Ie(dm),mm=H({},qs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ga=Ie(mm),fm=H({},wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wo}),hm=Ie(fm),gm=H({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),xm=Ie(gm),vm=H({},qs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ym=Ie(vm),bm=[9,13,27,32],Ho=nt&&"CompositionEvent"in window,$n=null;nt&&"documentMode"in document&&($n=document.documentMode);var wm=nt&&"TextEvent"in window&&!$n,$u=nt&&(!Ho||$n&&8<$n&&11>=$n),Wa=" ",Ha=!1;function Gu(e,t){switch(e){case"keyup":return bm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var en=!1;function km(e,t){switch(e){case"compositionend":return Wu(t);case"keypress":return t.which!==32?null:(Ha=!0,Wa);case"textInput":return e=t.data,e===Wa&&Ha?null:e;default:return null}}function jm(e,t){if(en)return e==="compositionend"||!Ho&&Gu(e,t)?(e=Vu(),Kr=$o=mt=null,en=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $u&&t.locale!=="ko"?null:t.data;default:return null}}var Sm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sm[e.type]:t==="textarea"}function Hu(e,t,n,r){Su(r),t=ds(t,"onChange"),0<t.length&&(n=new Go("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gn=null,or=null;function Cm(e){sc(e,0)}function zs(e){var t=rn(e);if(xu(t))return e}function Nm(e,t){if(e==="change")return t}var Xu=!1;if(nt){var ii;if(nt){var oi="oninput"in document;if(!oi){var Ka=document.createElement("div");Ka.setAttribute("oninput","return;"),oi=typeof Ka.oninput=="function"}ii=oi}else ii=!1;Xu=ii&&(!document.documentMode||9<document.documentMode)}function Qa(){Gn&&(Gn.detachEvent("onpropertychange",Ku),or=Gn=null)}function Ku(e){if(e.propertyName==="value"&&zs(or)){var t=[];Hu(t,or,e,Fo(e)),Du(Cm,t)}}function Am(e,t,n){e==="focusin"?(Qa(),Gn=t,or=n,Gn.attachEvent("onpropertychange",Ku)):e==="focusout"&&Qa()}function Dm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zs(or)}function Im(e,t){if(e==="click")return zs(t)}function Pm(e,t){if(e==="input"||e==="change")return zs(t)}function Tm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ve=typeof Object.is=="function"?Object.is:Tm;function ar(e,t){if(Ve(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Ii.call(t,s)||!Ve(e[s],t[s]))return!1}return!0}function Za(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ya(e,t){var n=Za(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Za(n)}}function Qu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zu(){for(var e=window,t=ss();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ss(e.document)}return t}function Xo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Em(e){var t=Zu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qu(n.ownerDocument.documentElement,n)){if(r!==null&&Xo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,o=Math.min(r.start,s);r=r.end===void 0?o:Math.min(r.end,s),!e.extend&&o>r&&(s=r,r=o,o=s),s=Ya(n,o);var a=Ya(n,r);s&&a&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lm=nt&&"documentMode"in document&&11>=document.documentMode,tn=null,Xi=null,Wn=null,Ki=!1;function Ja(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ki||tn==null||tn!==ss(r)||(r=tn,"selectionStart"in r&&Xo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wn&&ar(Wn,r)||(Wn=r,r=ds(Xi,"onSelect"),0<r.length&&(t=new Go("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=tn)))}function zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var nn={animationend:zr("Animation","AnimationEnd"),animationiteration:zr("Animation","AnimationIteration"),animationstart:zr("Animation","AnimationStart"),transitionend:zr("Transition","TransitionEnd")},ai={},Yu={};nt&&(Yu=document.createElement("div").style,"AnimationEvent"in window||(delete nn.animationend.animation,delete nn.animationiteration.animation,delete nn.animationstart.animation),"TransitionEvent"in window||delete nn.transitionend.transition);function Us(e){if(ai[e])return ai[e];if(!nn[e])return e;var t=nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yu)return ai[e]=t[n];return e}var Ju=Us("animationend"),ec=Us("animationiteration"),tc=Us("animationstart"),nc=Us("transitionend"),rc=new Map,el="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nt(e,t){rc.set(e,t),Ht(t,[e])}for(var li=0;li<el.length;li++){var ui=el[li],qm=ui.toLowerCase(),zm=ui[0].toUpperCase()+ui.slice(1);Nt(qm,"on"+zm)}Nt(Ju,"onAnimationEnd");Nt(ec,"onAnimationIteration");Nt(tc,"onAnimationStart");Nt("dblclick","onDoubleClick");Nt("focusin","onFocus");Nt("focusout","onBlur");Nt(nc,"onTransitionEnd");xn("onMouseEnter",["mouseout","mouseover"]);xn("onMouseLeave",["mouseout","mouseover"]);xn("onPointerEnter",["pointerout","pointerover"]);xn("onPointerLeave",["pointerout","pointerover"]);Ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ht("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Um=new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));function tl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qp(r,t,void 0,e),e.currentTarget=null}function sc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==o&&s.isPropagationStopped())break e;tl(s,l,d),o=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,d=l.currentTarget,l=l.listener,u!==o&&s.isPropagationStopped())break e;tl(s,l,d),o=u}}}if(os)throw e=$i,os=!1,$i=null,e}function B(e,t){var n=t[eo];n===void 0&&(n=t[eo]=new Set);var r=e+"__bubble";n.has(r)||(ic(t,e,2,!1),n.add(r))}function ci(e,t,n){var r=0;t&&(r|=4),ic(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function lr(e){if(!e[Ur]){e[Ur]=!0,pu.forEach(function(n){n!=="selectionchange"&&(Um.has(n)||ci(n,!1,e),ci(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ur]||(t[Ur]=!0,ci("selectionchange",!1,t))}}function ic(e,t,n,r){switch(Ou(t)){case 1:var s=Qp;break;case 4:s=Zp;break;default:s=Vo}n=s.bind(null,t,n,e),s=void 0,!Vi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function di(e,t,n,r,s){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;a=a.return}for(;l!==null;){if(a=zt(l),a===null)return;if(u=a.tag,u===5||u===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Du(function(){var d=o,p=Fo(n),g=[];e:{var h=rc.get(e);if(h!==void 0){var x=Go,v=e;switch(e){case"keypress":if(Qr(n)===0)break e;case"keydown":case"keyup":x=pm;break;case"focusin":v="focus",x=si;break;case"focusout":v="blur",x=si;break;case"beforeblur":case"afterblur":x=si;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Va;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=em;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=hm;break;case Ju:case ec:case tc:x=rm;break;case nc:x=xm;break;case"scroll":x=Yp;break;case"wheel":x=ym;break;case"copy":case"cut":case"paste":x=im;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Ga}var y=(t&4)!==0,k=!y&&e==="scroll",m=y?h!==null?h+"Capture":null:h;y=[];for(var c=d,f;c!==null;){f=c;var b=f.stateNode;if(f.tag===5&&b!==null&&(f=b,m!==null&&(b=nr(c,m),b!=null&&y.push(ur(c,b,f)))),k)break;c=c.return}0<y.length&&(h=new x(h,v,null,n,p),g.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==_i&&(v=n.relatedTarget||n.fromElement)&&(zt(v)||v[rt]))break e;if((x||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=d,v=v?zt(v):null,v!==null&&(k=Xt(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=d),x!==v)){if(y=Va,b="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ga,b="onPointerLeave",m="onPointerEnter",c="pointer"),k=x==null?h:rn(x),f=v==null?h:rn(v),h=new y(b,c+"leave",x,n,p),h.target=k,h.relatedTarget=f,b=null,zt(p)===d&&(y=new y(m,c+"enter",v,n,p),y.target=f,y.relatedTarget=k,b=y),k=b,x&&v)t:{for(y=x,m=v,c=0,f=y;f;f=Qt(f))c++;for(f=0,b=m;b;b=Qt(b))f++;for(;0<c-f;)y=Qt(y),c--;for(;0<f-c;)m=Qt(m),f--;for(;c--;){if(y===m||m!==null&&y===m.alternate)break t;y=Qt(y),m=Qt(m)}y=null}else y=null;x!==null&&nl(g,h,x,y,!1),v!==null&&k!==null&&nl(g,k,v,y,!0)}}e:{if(h=d?rn(d):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var S=Nm;else if(Xa(h))if(Xu)S=Pm;else{S=Dm;var P=Am}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=Im);if(S&&(S=S(e,d))){Hu(g,S,n,p);break e}P&&P(e,h,d),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&Ui(h,"number",h.value)}switch(P=d?rn(d):window,e){case"focusin":(Xa(P)||P.contentEditable==="true")&&(tn=P,Xi=d,Wn=null);break;case"focusout":Wn=Xi=tn=null;break;case"mousedown":Ki=!0;break;case"contextmenu":case"mouseup":case"dragend":Ki=!1,Ja(g,n,p);break;case"selectionchange":if(Lm)break;case"keydown":case"keyup":Ja(g,n,p)}var j;if(Ho)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else en?Gu(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&($u&&n.locale!=="ko"&&(en||D!=="onCompositionStart"?D==="onCompositionEnd"&&en&&(j=Vu()):(mt=p,$o="value"in mt?mt.value:mt.textContent,en=!0)),P=ds(d,D),0<P.length&&(D=new $a(D,e,null,n,p),g.push({event:D,listeners:P}),j?D.data=j:(j=Wu(n),j!==null&&(D.data=j)))),(j=wm?km(e,n):jm(e,n))&&(d=ds(d,"onBeforeInput"),0<d.length&&(p=new $a("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:d}),p.data=j))}sc(g,t)})}function ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ds(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=nr(e,n),o!=null&&r.unshift(ur(e,o,s)),o=nr(e,t),o!=null&&r.push(ur(e,o,s))),e=e.return}return r}function Qt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nl(e,t,n,r,s){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,s?(u=nr(n,o),u!=null&&a.unshift(ur(n,u,l))):s||(u=nr(n,o),u!=null&&a.push(ur(n,u,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Mm=/\r\n?/g,Rm=/\u0000|\uFFFD/g;function rl(e){return(typeof e=="string"?e:""+e).replace(Mm,`
`).replace(Rm,"")}function Mr(e,t,n){if(t=rl(t),rl(e)!==t&&n)throw Error(w(425))}function ps(){}var Qi=null,Zi=null;function Yi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ji=typeof setTimeout=="function"?setTimeout:void 0,Fm=typeof clearTimeout=="function"?clearTimeout:void 0,sl=typeof Promise=="function"?Promise:void 0,Bm=typeof queueMicrotask=="function"?queueMicrotask:typeof sl<"u"?function(e){return sl.resolve(null).then(e).catch(_m)}:Ji;function _m(e){setTimeout(function(){throw e})}function pi(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),ir(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ir(t)}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function il(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Nn=Math.random().toString(36).slice(2),He="__reactFiber$"+Nn,cr="__reactProps$"+Nn,rt="__reactContainer$"+Nn,eo="__reactEvents$"+Nn,Om="__reactListeners$"+Nn,Vm="__reactHandles$"+Nn;function zt(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rt]||n[He]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=il(e);e!==null;){if(n=e[He])return n;e=il(e)}return t}e=n,n=e.parentNode}return null}function kr(e){return e=e[He]||e[rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Ms(e){return e[cr]||null}var to=[],sn=-1;function At(e){return{current:e}}function _(e){0>sn||(e.current=to[sn],to[sn]=null,sn--)}function F(e,t){sn++,to[sn]=e.current,e.current=t}var Ct={},ue=At(Ct),ve=At(!1),_t=Ct;function vn(e,t){var n=e.type.contextTypes;if(!n)return Ct;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in n)s[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ye(e){return e=e.childContextTypes,e!=null}function ms(){_(ve),_(ue)}function ol(e,t,n){if(ue.current!==Ct)throw Error(w(168));F(ue,t),F(ve,n)}function oc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(w(108,Ap(e)||"Unknown",s));return H({},n,r)}function fs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ct,_t=ue.current,F(ue,e),F(ve,ve.current),!0}function al(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=oc(e,t,_t),r.__reactInternalMemoizedMergedChildContext=e,_(ve),_(ue),F(ue,e)):_(ve),F(ve,n)}var Ze=null,Rs=!1,mi=!1;function ac(e){Ze===null?Ze=[e]:Ze.push(e)}function $m(e){Rs=!0,ac(e)}function Dt(){if(!mi&&Ze!==null){mi=!0;var e=0,t=R;try{var n=Ze;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ze=null,Rs=!1}catch(s){throw Ze!==null&&(Ze=Ze.slice(e+1)),Eu(Bo,Dt),s}finally{R=t,mi=!1}}return null}var on=[],an=0,hs=null,gs=0,Te=[],Ee=0,Ot=null,Ye=1,Je="";function Tt(e,t){on[an++]=gs,on[an++]=hs,hs=e,gs=t}function lc(e,t,n){Te[Ee++]=Ye,Te[Ee++]=Je,Te[Ee++]=Ot,Ot=e;var r=Ye;e=Je;var s=32-_e(r)-1;r&=~(1<<s),n+=1;var o=32-_e(t)+s;if(30<o){var a=s-s%5;o=(r&(1<<a)-1).toString(32),r>>=a,s-=a,Ye=1<<32-_e(t)+s|n<<s|r,Je=o+e}else Ye=1<<o|n<<s|r,Je=e}function Ko(e){e.return!==null&&(Tt(e,1),lc(e,1,0))}function Qo(e){for(;e===hs;)hs=on[--an],on[an]=null,gs=on[--an],on[an]=null;for(;e===Ot;)Ot=Te[--Ee],Te[Ee]=null,Je=Te[--Ee],Te[Ee]=null,Ye=Te[--Ee],Te[Ee]=null}var Ne=null,Ce=null,$=!1,Be=null;function uc(e,t){var n=Le(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ll(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,Ce=vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,Ce=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:Ye,overflow:Je}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Le(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,Ce=null,!0):!1;default:return!1}}function no(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ro(e){if($){var t=Ce;if(t){var n=t;if(!ll(e,t)){if(no(e))throw Error(w(418));t=vt(n.nextSibling);var r=Ne;t&&ll(e,t)?uc(r,n):(e.flags=e.flags&-4097|2,$=!1,Ne=e)}}else{if(no(e))throw Error(w(418));e.flags=e.flags&-4097|2,$=!1,Ne=e}}}function ul(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Rr(e){if(e!==Ne)return!1;if(!$)return ul(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Yi(e.type,e.memoizedProps)),t&&(t=Ce)){if(no(e))throw cc(),Error(w(418));for(;t;)uc(e,t),t=vt(t.nextSibling)}if(ul(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ce=vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ce=null}}else Ce=Ne?vt(e.stateNode.nextSibling):null;return!0}function cc(){for(var e=Ce;e;)e=vt(e.nextSibling)}function yn(){Ce=Ne=null,$=!1}function Zo(e){Be===null?Be=[e]:Be.push(e)}var Gm=ot.ReactCurrentBatchConfig;function qn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var s=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=s.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Fr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cl(e){var t=e._init;return t(e._payload)}function dc(e){function t(m,c){if(e){var f=m.deletions;f===null?(m.deletions=[c],m.flags|=16):f.push(c)}}function n(m,c){if(!e)return null;for(;c!==null;)t(m,c),c=c.sibling;return null}function r(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function s(m,c){return m=kt(m,c),m.index=0,m.sibling=null,m}function o(m,c,f){return m.index=f,e?(f=m.alternate,f!==null?(f=f.index,f<c?(m.flags|=2,c):f):(m.flags|=2,c)):(m.flags|=1048576,c)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,c,f,b){return c===null||c.tag!==6?(c=bi(f,m.mode,b),c.return=m,c):(c=s(c,f),c.return=m,c)}function u(m,c,f,b){var S=f.type;return S===Jt?p(m,c,f.props.children,b,f.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ut&&cl(S)===c.type)?(b=s(c,f.props),b.ref=qn(m,c,f),b.return=m,b):(b=rs(f.type,f.key,f.props,null,m.mode,b),b.ref=qn(m,c,f),b.return=m,b)}function d(m,c,f,b){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=wi(f,m.mode,b),c.return=m,c):(c=s(c,f.children||[]),c.return=m,c)}function p(m,c,f,b,S){return c===null||c.tag!==7?(c=Ft(f,m.mode,b,S),c.return=m,c):(c=s(c,f),c.return=m,c)}function g(m,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=bi(""+c,m.mode,f),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Dr:return f=rs(c.type,c.key,c.props,null,m.mode,f),f.ref=qn(m,null,c),f.return=m,f;case Yt:return c=wi(c,m.mode,f),c.return=m,c;case ut:var b=c._init;return g(m,b(c._payload),f)}if(Fn(c)||In(c))return c=Ft(c,m.mode,f,null),c.return=m,c;Fr(m,c)}return null}function h(m,c,f,b){var S=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:l(m,c,""+f,b);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Dr:return f.key===S?u(m,c,f,b):null;case Yt:return f.key===S?d(m,c,f,b):null;case ut:return S=f._init,h(m,c,S(f._payload),b)}if(Fn(f)||In(f))return S!==null?null:p(m,c,f,b,null);Fr(m,f)}return null}function x(m,c,f,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return m=m.get(f)||null,l(c,m,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Dr:return m=m.get(b.key===null?f:b.key)||null,u(c,m,b,S);case Yt:return m=m.get(b.key===null?f:b.key)||null,d(c,m,b,S);case ut:var P=b._init;return x(m,c,f,P(b._payload),S)}if(Fn(b)||In(b))return m=m.get(f)||null,p(c,m,b,S,null);Fr(c,b)}return null}function v(m,c,f,b){for(var S=null,P=null,j=c,D=c=0,O=null;j!==null&&D<f.length;D++){j.index>D?(O=j,j=null):O=j.sibling;var q=h(m,j,f[D],b);if(q===null){j===null&&(j=O);break}e&&j&&q.alternate===null&&t(m,j),c=o(q,c,D),P===null?S=q:P.sibling=q,P=q,j=O}if(D===f.length)return n(m,j),$&&Tt(m,D),S;if(j===null){for(;D<f.length;D++)j=g(m,f[D],b),j!==null&&(c=o(j,c,D),P===null?S=j:P.sibling=j,P=j);return $&&Tt(m,D),S}for(j=r(m,j);D<f.length;D++)O=x(j,m,D,f[D],b),O!==null&&(e&&O.alternate!==null&&j.delete(O.key===null?D:O.key),c=o(O,c,D),P===null?S=O:P.sibling=O,P=O);return e&&j.forEach(function(we){return t(m,we)}),$&&Tt(m,D),S}function y(m,c,f,b){var S=In(f);if(typeof S!="function")throw Error(w(150));if(f=S.call(f),f==null)throw Error(w(151));for(var P=S=null,j=c,D=c=0,O=null,q=f.next();j!==null&&!q.done;D++,q=f.next()){j.index>D?(O=j,j=null):O=j.sibling;var we=h(m,j,q.value,b);if(we===null){j===null&&(j=O);break}e&&j&&we.alternate===null&&t(m,j),c=o(we,c,D),P===null?S=we:P.sibling=we,P=we,j=O}if(q.done)return n(m,j),$&&Tt(m,D),S;if(j===null){for(;!q.done;D++,q=f.next())q=g(m,q.value,b),q!==null&&(c=o(q,c,D),P===null?S=q:P.sibling=q,P=q);return $&&Tt(m,D),S}for(j=r(m,j);!q.done;D++,q=f.next())q=x(j,m,D,q.value,b),q!==null&&(e&&q.alternate!==null&&j.delete(q.key===null?D:q.key),c=o(q,c,D),P===null?S=q:P.sibling=q,P=q);return e&&j.forEach(function(It){return t(m,It)}),$&&Tt(m,D),S}function k(m,c,f,b){if(typeof f=="object"&&f!==null&&f.type===Jt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Dr:e:{for(var S=f.key,P=c;P!==null;){if(P.key===S){if(S=f.type,S===Jt){if(P.tag===7){n(m,P.sibling),c=s(P,f.props.children),c.return=m,m=c;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ut&&cl(S)===P.type){n(m,P.sibling),c=s(P,f.props),c.ref=qn(m,P,f),c.return=m,m=c;break e}n(m,P);break}else t(m,P);P=P.sibling}f.type===Jt?(c=Ft(f.props.children,m.mode,b,f.key),c.return=m,m=c):(b=rs(f.type,f.key,f.props,null,m.mode,b),b.ref=qn(m,c,f),b.return=m,m=b)}return a(m);case Yt:e:{for(P=f.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(m,c.sibling),c=s(c,f.children||[]),c.return=m,m=c;break e}else{n(m,c);break}else t(m,c);c=c.sibling}c=wi(f,m.mode,b),c.return=m,m=c}return a(m);case ut:return P=f._init,k(m,c,P(f._payload),b)}if(Fn(f))return v(m,c,f,b);if(In(f))return y(m,c,f,b);Fr(m,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(m,c.sibling),c=s(c,f),c.return=m,m=c):(n(m,c),c=bi(f,m.mode,b),c.return=m,m=c),a(m)):n(m,c)}return k}var bn=dc(!0),pc=dc(!1),xs=At(null),vs=null,ln=null,Yo=null;function Jo(){Yo=ln=vs=null}function ea(e){var t=xs.current;_(xs),e._currentValue=t}function so(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function hn(e,t){vs=e,Yo=ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function ze(e){var t=e._currentValue;if(Yo!==e)if(e={context:e,memoizedValue:t,next:null},ln===null){if(vs===null)throw Error(w(308));ln=e,vs.dependencies={lanes:0,firstContext:e}}else ln=ln.next=e;return t}var Ut=null;function ta(e){Ut===null?Ut=[e]:Ut.push(e)}function mc(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,ta(t)):(n.next=s.next,s.next=n),t.interleaved=n,st(e,r)}function st(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ct=!1;function na(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,st(e,n)}return s=r.interleaved,s===null?(t.next=t,ta(r)):(t.next=s.next,s.next=t),r.interleaved=t,st(e,n)}function Zr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_o(e,n)}}function dl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?s=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?s=o=t:o=o.next=t}else s=o=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ys(e,t,n,r){var s=e.updateQueue;ct=!1;var o=s.firstBaseUpdate,a=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,d=u.next;u.next=null,a===null?o=d:a.next=d,a=u;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==a&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=u))}if(o!==null){var g=s.baseState;a=0,p=d=u=null,l=o;do{var h=l.lane,x=l.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,y=l;switch(h=t,x=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){g=v.call(x,g,h);break e}g=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(x,g,h):v,h==null)break e;g=H({},g,h);break e;case 2:ct=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=s.effects,h===null?s.effects=[l]:h.push(l))}else x={eventTime:x,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=x,u=g):p=p.next=x,a|=h;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;h=l,l=h.next,h.next=null,s.lastBaseUpdate=h,s.shared.pending=null}}while(!0);if(p===null&&(u=g),s.baseState=u,s.firstBaseUpdate=d,s.lastBaseUpdate=p,t=s.shared.interleaved,t!==null){s=t;do a|=s.lane,s=s.next;while(s!==t)}else o===null&&(s.shared.lanes=0);$t|=a,e.lanes=a,e.memoizedState=g}}function pl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(w(191,s));s.call(r)}}}var jr={},Ke=At(jr),dr=At(jr),pr=At(jr);function Mt(e){if(e===jr)throw Error(w(174));return e}function ra(e,t){switch(F(pr,t),F(dr,e),F(Ke,jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ri(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ri(t,e)}_(Ke),F(Ke,t)}function wn(){_(Ke),_(dr),_(pr)}function hc(e){Mt(pr.current);var t=Mt(Ke.current),n=Ri(t,e.type);t!==n&&(F(dr,e),F(Ke,n))}function sa(e){dr.current===e&&(_(Ke),_(dr))}var G=At(0);function bs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fi=[];function ia(){for(var e=0;e<fi.length;e++)fi[e]._workInProgressVersionPrimary=null;fi.length=0}var Yr=ot.ReactCurrentDispatcher,hi=ot.ReactCurrentBatchConfig,Vt=0,W=null,Y=null,ee=null,ws=!1,Hn=!1,mr=0,Wm=0;function oe(){throw Error(w(321))}function oa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ve(e[n],t[n]))return!1;return!0}function aa(e,t,n,r,s,o){if(Vt=o,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yr.current=e===null||e.memoizedState===null?Qm:Zm,e=n(r,s),Hn){o=0;do{if(Hn=!1,mr=0,25<=o)throw Error(w(301));o+=1,ee=Y=null,t.updateQueue=null,Yr.current=Ym,e=n(r,s)}while(Hn)}if(Yr.current=ks,t=Y!==null&&Y.next!==null,Vt=0,ee=Y=W=null,ws=!1,t)throw Error(w(300));return e}function la(){var e=mr!==0;return mr=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?W.memoizedState=ee=e:ee=ee.next=e,ee}function Ue(){if(Y===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=ee===null?W.memoizedState:ee.next;if(t!==null)ee=t,Y=e;else{if(e===null)throw Error(w(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},ee===null?W.memoizedState=ee=e:ee=ee.next=e}return ee}function fr(e,t){return typeof t=="function"?t(e):t}function gi(e){var t=Ue(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=Y,s=r.baseQueue,o=n.pending;if(o!==null){if(s!==null){var a=s.next;s.next=o.next,o.next=a}r.baseQueue=s=o,n.pending=null}if(s!==null){o=s.next,r=r.baseState;var l=a=null,u=null,d=o;do{var p=d.lane;if((Vt&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=g,a=r):u=u.next=g,W.lanes|=p,$t|=p}d=d.next}while(d!==null&&d!==o);u===null?a=r:u.next=l,Ve(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do o=s.lane,W.lanes|=o,$t|=o,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xi(e){var t=Ue(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,o=t.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do o=e(o,a.action),a=a.next;while(a!==s);Ve(o,t.memoizedState)||(xe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function gc(){}function xc(e,t){var n=W,r=Ue(),s=t(),o=!Ve(r.memoizedState,s);if(o&&(r.memoizedState=s,xe=!0),r=r.queue,ua(bc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,hr(9,yc.bind(null,n,r,s,t),void 0,null),te===null)throw Error(w(349));Vt&30||vc(n,t,s)}return s}function vc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yc(e,t,n,r){t.value=n,t.getSnapshot=r,wc(t)&&kc(e)}function bc(e,t,n){return n(function(){wc(t)&&kc(e)})}function wc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ve(e,n)}catch{return!0}}function kc(e){var t=st(e,1);t!==null&&Oe(t,e,1,-1)}function ml(e){var t=Ge();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:e},t.queue=e,e=e.dispatch=Km.bind(null,W,e),[t.memoizedState,e]}function hr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function jc(){return Ue().memoizedState}function Jr(e,t,n,r){var s=Ge();W.flags|=e,s.memoizedState=hr(1|t,n,void 0,r===void 0?null:r)}function Fs(e,t,n,r){var s=Ue();r=r===void 0?null:r;var o=void 0;if(Y!==null){var a=Y.memoizedState;if(o=a.destroy,r!==null&&oa(r,a.deps)){s.memoizedState=hr(t,n,o,r);return}}W.flags|=e,s.memoizedState=hr(1|t,n,o,r)}function fl(e,t){return Jr(8390656,8,e,t)}function ua(e,t){return Fs(2048,8,e,t)}function Sc(e,t){return Fs(4,2,e,t)}function Cc(e,t){return Fs(4,4,e,t)}function Nc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ac(e,t,n){return n=n!=null?n.concat([e]):null,Fs(4,4,Nc.bind(null,t,e),n)}function ca(){}function Dc(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&oa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ic(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&oa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pc(e,t,n){return Vt&21?(Ve(n,t)||(n=zu(),W.lanes|=n,$t|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n)}function Hm(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=hi.transition;hi.transition={};try{e(!1),t()}finally{R=n,hi.transition=r}}function Tc(){return Ue().memoizedState}function Xm(e,t,n){var r=wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ec(e))Lc(t,n);else if(n=mc(e,t,n,r),n!==null){var s=pe();Oe(n,e,r,s),qc(n,t,r)}}function Km(e,t,n){var r=wt(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ec(e))Lc(t,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(s.hasEagerState=!0,s.eagerState=l,Ve(l,a)){var u=t.interleaved;u===null?(s.next=s,ta(t)):(s.next=u.next,u.next=s),t.interleaved=s;return}}catch{}finally{}n=mc(e,t,s,r),n!==null&&(s=pe(),Oe(n,e,r,s),qc(n,t,r))}}function Ec(e){var t=e.alternate;return e===W||t!==null&&t===W}function Lc(e,t){Hn=ws=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_o(e,n)}}var ks={readContext:ze,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},Qm={readContext:ze,useCallback:function(e,t){return Ge().memoizedState=[e,t===void 0?null:t],e},useContext:ze,useEffect:fl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Jr(4194308,4,Nc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Jr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Jr(4,2,e,t)},useMemo:function(e,t){var n=Ge();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ge();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xm.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Ge();return e={current:e},t.memoizedState=e},useState:ml,useDebugValue:ca,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=ml(!1),t=e[0];return e=Hm.bind(null,e[1]),Ge().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,s=Ge();if($){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),te===null)throw Error(w(349));Vt&30||vc(r,t,n)}s.memoizedState=n;var o={value:n,getSnapshot:t};return s.queue=o,fl(bc.bind(null,r,o,e),[e]),r.flags|=2048,hr(9,yc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ge(),t=te.identifierPrefix;if($){var n=Je,r=Ye;n=(r&~(1<<32-_e(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=mr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Wm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zm={readContext:ze,useCallback:Dc,useContext:ze,useEffect:ua,useImperativeHandle:Ac,useInsertionEffect:Sc,useLayoutEffect:Cc,useMemo:Ic,useReducer:gi,useRef:jc,useState:function(){return gi(fr)},useDebugValue:ca,useDeferredValue:function(e){var t=Ue();return Pc(t,Y.memoizedState,e)},useTransition:function(){var e=gi(fr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:gc,useSyncExternalStore:xc,useId:Tc,unstable_isNewReconciler:!1},Ym={readContext:ze,useCallback:Dc,useContext:ze,useEffect:ua,useImperativeHandle:Ac,useInsertionEffect:Sc,useLayoutEffect:Cc,useMemo:Ic,useReducer:xi,useRef:jc,useState:function(){return xi(fr)},useDebugValue:ca,useDeferredValue:function(e){var t=Ue();return Y===null?t.memoizedState=e:Pc(t,Y.memoizedState,e)},useTransition:function(){var e=xi(fr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:gc,useSyncExternalStore:xc,useId:Tc,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function io(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bs={isMounted:function(e){return(e=e._reactInternals)?Xt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),s=wt(e),o=tt(r,s);o.payload=t,n!=null&&(o.callback=n),t=yt(e,o,s),t!==null&&(Oe(t,e,s,r),Zr(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),s=wt(e),o=tt(r,s);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=yt(e,o,s),t!==null&&(Oe(t,e,s,r),Zr(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=wt(e),s=tt(n,r);s.tag=2,t!=null&&(s.callback=t),t=yt(e,s,r),t!==null&&(Oe(t,e,r,n),Zr(t,e,r))}};function hl(e,t,n,r,s,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ar(n,r)||!ar(s,o):!0}function zc(e,t,n){var r=!1,s=Ct,o=t.contextType;return typeof o=="object"&&o!==null?o=ze(o):(s=ye(t)?_t:ue.current,r=t.contextTypes,o=(r=r!=null)?vn(e,s):Ct),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Bs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=o),t}function gl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bs.enqueueReplaceState(t,t.state,null)}function oo(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},na(e);var o=t.contextType;typeof o=="object"&&o!==null?s.context=ze(o):(o=ye(t)?_t:ue.current,s.context=vn(e,o)),s.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(io(e,t,o,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Bs.enqueueReplaceState(s,s.state,null),ys(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function kn(e,t){try{var n="",r=t;do n+=Np(r),r=r.return;while(r);var s=n}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:s,digest:null}}function vi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ao(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Jm=typeof WeakMap=="function"?WeakMap:Map;function Uc(e,t,n){n=tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ss||(Ss=!0,vo=r),ao(e,t)},n}function Mc(e,t,n){n=tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){ao(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ao(e,t),typeof r!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function xl(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Jm;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=ff.bind(null,e,t,n),t.then(e,e))}function vl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yl(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=tt(-1,1),t.tag=2,yt(n,t,1))),n.lanes|=1),e)}var ef=ot.ReactCurrentOwner,xe=!1;function de(e,t,n,r){t.child=e===null?pc(t,null,n,r):bn(t,e.child,n,r)}function bl(e,t,n,r,s){n=n.render;var o=t.ref;return hn(t,s),r=aa(e,t,n,r,o,s),n=la(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,it(e,t,s)):($&&n&&Ko(t),t.flags|=1,de(e,t,r,s),t.child)}function wl(e,t,n,r,s){if(e===null){var o=n.type;return typeof o=="function"&&!va(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Rc(e,t,o,r,s)):(e=rs(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&s)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ar,n(a,r)&&e.ref===t.ref)return it(e,t,s)}return t.flags|=1,e=kt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Rc(e,t,n,r,s){if(e!==null){var o=e.memoizedProps;if(ar(o,r)&&e.ref===t.ref)if(xe=!1,t.pendingProps=r=o,(e.lanes&s)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,it(e,t,s)}return lo(e,t,n,r,s)}function Fc(e,t,n){var r=t.pendingProps,s=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(cn,Se),Se|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(cn,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,F(cn,Se),Se|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,F(cn,Se),Se|=r;return de(e,t,s,n),t.child}function Bc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function lo(e,t,n,r,s){var o=ye(n)?_t:ue.current;return o=vn(t,o),hn(t,s),n=aa(e,t,n,r,o,s),r=la(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,it(e,t,s)):($&&r&&Ko(t),t.flags|=1,de(e,t,n,s),t.child)}function kl(e,t,n,r,s){if(ye(n)){var o=!0;fs(t)}else o=!1;if(hn(t,s),t.stateNode===null)es(e,t),zc(t,n,r),oo(t,n,r,s),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=ze(d):(d=ye(n)?_t:ue.current,d=vn(t,d));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==d)&&gl(t,a,r,d),ct=!1;var h=t.memoizedState;a.state=h,ys(t,r,a,s),u=t.memoizedState,l!==r||h!==u||ve.current||ct?(typeof p=="function"&&(io(t,n,p,r),u=t.memoizedState),(l=ct||hl(t,n,l,r,h,u,d))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,fc(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Re(t.type,l),a.props=d,g=t.pendingProps,h=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=ze(u):(u=ye(n)?_t:ue.current,u=vn(t,u));var x=n.getDerivedStateFromProps;(p=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==g||h!==u)&&gl(t,a,r,u),ct=!1,h=t.memoizedState,a.state=h,ys(t,r,a,s);var v=t.memoizedState;l!==g||h!==v||ve.current||ct?(typeof x=="function"&&(io(t,n,x,r),v=t.memoizedState),(d=ct||hl(t,n,d,r,h,v,u)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return uo(e,t,n,r,o,s)}function uo(e,t,n,r,s,o){Bc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return s&&al(t,n,!1),it(e,t,o);r=t.stateNode,ef.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=bn(t,e.child,null,o),t.child=bn(t,null,l,o)):de(e,t,l,o),t.memoizedState=r.state,s&&al(t,n,!0),t.child}function _c(e){var t=e.stateNode;t.pendingContext?ol(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ol(e,t.context,!1),ra(e,t.containerInfo)}function jl(e,t,n,r,s){return yn(),Zo(s),t.flags|=256,de(e,t,n,r),t.child}var co={dehydrated:null,treeContext:null,retryLane:0};function po(e){return{baseLanes:e,cachePool:null,transitions:null}}function Oc(e,t,n){var r=t.pendingProps,s=G.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),F(G,s&1),e===null)return ro(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Vs(a,r,0,null),e=Ft(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=po(n),t.memoizedState=co,e):da(t,a));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return tf(e,t,a,r,l,s,n);if(o){o=r.fallback,a=t.mode,s=e.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=kt(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?o=kt(l,o):(o=Ft(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?po(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=co,r}return o=e.child,e=o.sibling,r=kt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function da(e,t){return t=Vs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Br(e,t,n,r){return r!==null&&Zo(r),bn(t,e.child,null,n),e=da(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tf(e,t,n,r,s,o,a){if(n)return t.flags&256?(t.flags&=-257,r=vi(Error(w(422))),Br(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,s=t.mode,r=Vs({mode:"visible",children:r.children},s,0,null),o=Ft(o,s,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&bn(t,e.child,null,a),t.child.memoizedState=po(a),t.memoizedState=co,o);if(!(t.mode&1))return Br(e,t,a,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(w(419)),r=vi(o,r,void 0),Br(e,t,a,r)}if(l=(a&e.childLanes)!==0,xe||l){if(r=te,r!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|a)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,st(e,s),Oe(r,e,s,-1))}return xa(),r=vi(Error(w(421))),Br(e,t,a,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=hf.bind(null,e),s._reactRetry=t,null):(e=o.treeContext,Ce=vt(s.nextSibling),Ne=t,$=!0,Be=null,e!==null&&(Te[Ee++]=Ye,Te[Ee++]=Je,Te[Ee++]=Ot,Ye=e.id,Je=e.overflow,Ot=t),t=da(t,r.children),t.flags|=4096,t)}function Sl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),so(e.return,t,n)}function yi(e,t,n,r,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=s)}function Vc(e,t,n){var r=t.pendingProps,s=r.revealOrder,o=r.tail;if(de(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sl(e,n,t);else if(e.tag===19)Sl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(G,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&bs(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),yi(t,!1,s,n,o);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&bs(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}yi(t,!0,n,null,o);break;case"together":yi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function es(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function it(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$t|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nf(e,t,n){switch(t.tag){case 3:_c(t),yn();break;case 5:hc(t);break;case 1:ye(t.type)&&fs(t);break;case 4:ra(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;F(xs,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?Oc(e,t,n):(F(G,G.current&1),e=it(e,t,n),e!==null?e.sibling:null);F(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Vc(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),F(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,Fc(e,t,n)}return it(e,t,n)}var $c,mo,Gc,Wc;$c=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};mo=function(){};Gc=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,Mt(Ke.current);var o=null;switch(n){case"input":s=qi(e,s),r=qi(e,r),o=[];break;case"select":s=H({},s,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":s=Mi(e,s),r=Mi(e,r),o=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ps)}Fi(n,r);var a;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(er.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(l=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(er.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&B("scroll",e),o||l===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Wc=function(e,t,n,r){n!==r&&(t.flags|=4)};function zn(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rf(e,t,n){var r=t.pendingProps;switch(Qo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return ye(t.type)&&ms(),ae(t),null;case 3:return r=t.stateNode,wn(),_(ve),_(ue),ia(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Rr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Be!==null&&(wo(Be),Be=null))),mo(e,t),ae(t),null;case 5:sa(t);var s=Mt(pr.current);if(n=t.type,e!==null&&t.stateNode!=null)Gc(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return ae(t),null}if(e=Mt(Ke.current),Rr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[He]=t,r[cr]=o,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(s=0;s<_n.length;s++)B(_n[s],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":La(r,o),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},B("invalid",r);break;case"textarea":za(r,o),B("invalid",r)}Fi(n,o),s=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Mr(r.textContent,l,e),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Mr(r.textContent,l,e),s=["children",""+l]):er.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&B("scroll",r)}switch(n){case"input":Ir(r),qa(r,o,!0);break;case"textarea":Ir(r),Ua(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ps)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[He]=t,e[cr]=r,$c(e,t,!1,!1),t.stateNode=e;e:{switch(a=Bi(n,r),n){case"dialog":B("cancel",e),B("close",e),s=r;break;case"iframe":case"object":case"embed":B("load",e),s=r;break;case"video":case"audio":for(s=0;s<_n.length;s++)B(_n[s],e);s=r;break;case"source":B("error",e),s=r;break;case"img":case"image":case"link":B("error",e),B("load",e),s=r;break;case"details":B("toggle",e),s=r;break;case"input":La(e,r),s=qi(e,r),B("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=H({},r,{value:void 0}),B("invalid",e);break;case"textarea":za(e,r),s=Mi(e,r),B("invalid",e);break;default:s=r}Fi(n,s),l=s;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?ju(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&wu(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&tr(e,u):typeof u=="number"&&tr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(er.hasOwnProperty(o)?u!=null&&o==="onScroll"&&B("scroll",e):u!=null&&zo(e,o,u,a))}switch(n){case"input":Ir(e),qa(e,r,!1);break;case"textarea":Ir(e),Ua(e);break;case"option":r.value!=null&&e.setAttribute("value",""+St(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?dn(e,!!r.multiple,o,!1):r.defaultValue!=null&&dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=ps)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)Wc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Mt(pr.current),Mt(Ke.current),Rr(t)){if(r=t.stateNode,n=t.memoizedProps,r[He]=t,(o=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:Mr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[He]=t,t.stateNode=r}return ae(t),null;case 13:if(_(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&Ce!==null&&t.mode&1&&!(t.flags&128))cc(),yn(),t.flags|=98560,o=!1;else if(o=Rr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(w(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[He]=t}else yn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),o=!1}else Be!==null&&(wo(Be),Be=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?J===0&&(J=3):xa())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return wn(),mo(e,t),e===null&&lr(t.stateNode.containerInfo),ae(t),null;case 10:return ea(t.type._context),ae(t),null;case 17:return ye(t.type)&&ms(),ae(t),null;case 19:if(_(G),o=t.memoizedState,o===null)return ae(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)zn(o,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=bs(e),a!==null){for(t.flags|=128,zn(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(G,G.current&1|2),t.child}e=e.sibling}o.tail!==null&&K()>jn&&(t.flags|=128,r=!0,zn(o,!1),t.lanes=4194304)}else{if(!r)if(e=bs(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),zn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!$)return ae(t),null}else 2*K()-o.renderingStartTime>jn&&n!==1073741824&&(t.flags|=128,r=!0,zn(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=K(),t.sibling=null,n=G.current,F(G,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return ga(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Se&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function sf(e,t){switch(Qo(t),t.tag){case 1:return ye(t.type)&&ms(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wn(),_(ve),_(ue),ia(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return sa(t),null;case 13:if(_(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(G),null;case 4:return wn(),null;case 10:return ea(t.type._context),null;case 22:case 23:return ga(),null;case 24:return null;default:return null}}var _r=!1,le=!1,of=typeof WeakSet=="function"?WeakSet:Set,A=null;function un(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function fo(e,t,n){try{n()}catch(r){X(e,t,r)}}var Cl=!1;function af(e,t){if(Qi=us,e=Zu(),Xo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,d=0,p=0,g=e,h=null;t:for(;;){for(var x;g!==n||s!==0&&g.nodeType!==3||(l=a+s),g!==o||r!==0&&g.nodeType!==3||(u=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(x=g.firstChild)!==null;)h=g,g=x;for(;;){if(g===e)break t;if(h===n&&++d===s&&(l=a),h===o&&++p===r&&(u=a),(x=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=x}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zi={focusedElem:e,selectionRange:n},us=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,k=v.memoizedState,m=t.stateNode,c=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:Re(t.type,y),k);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(b){X(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return v=Cl,Cl=!1,v}function Xn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var o=s.destroy;s.destroy=void 0,o!==void 0&&fo(t,n,o)}s=s.next}while(s!==r)}}function _s(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ho(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hc(e){var t=e.alternate;t!==null&&(e.alternate=null,Hc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[He],delete t[cr],delete t[eo],delete t[Om],delete t[Vm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xc(e){return e.tag===5||e.tag===3||e.tag===4}function Nl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function go(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ps));else if(r!==4&&(e=e.child,e!==null))for(go(e,t,n),e=e.sibling;e!==null;)go(e,t,n),e=e.sibling}function xo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xo(e,t,n),e=e.sibling;e!==null;)xo(e,t,n),e=e.sibling}var ne=null,Fe=!1;function lt(e,t,n){for(n=n.child;n!==null;)Kc(e,t,n),n=n.sibling}function Kc(e,t,n){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(Ls,n)}catch{}switch(n.tag){case 5:le||un(n,t);case 6:var r=ne,s=Fe;ne=null,lt(e,t,n),ne=r,Fe=s,ne!==null&&(Fe?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Fe?(e=ne,n=n.stateNode,e.nodeType===8?pi(e.parentNode,n):e.nodeType===1&&pi(e,n),ir(e)):pi(ne,n.stateNode));break;case 4:r=ne,s=Fe,ne=n.stateNode.containerInfo,Fe=!0,lt(e,t,n),ne=r,Fe=s;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var o=s,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&fo(n,t,a),s=s.next}while(s!==r)}lt(e,t,n);break;case 1:if(!le&&(un(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){X(n,t,l)}lt(e,t,n);break;case 21:lt(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,lt(e,t,n),le=r):lt(e,t,n);break;default:lt(e,t,n)}}function Al(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new of),t.forEach(function(r){var s=gf.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ne=l.stateNode,Fe=!1;break e;case 3:ne=l.stateNode.containerInfo,Fe=!0;break e;case 4:ne=l.stateNode.containerInfo,Fe=!0;break e}l=l.return}if(ne===null)throw Error(w(160));Kc(o,a,s),ne=null,Fe=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(d){X(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qc(t,e),t=t.sibling}function Qc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),$e(e),r&4){try{Xn(3,e,e.return),_s(3,e)}catch(y){X(e,e.return,y)}try{Xn(5,e,e.return)}catch(y){X(e,e.return,y)}}break;case 1:Me(t,e),$e(e),r&512&&n!==null&&un(n,n.return);break;case 5:if(Me(t,e),$e(e),r&512&&n!==null&&un(n,n.return),e.flags&32){var s=e.stateNode;try{tr(s,"")}catch(y){X(e,e.return,y)}}if(r&4&&(s=e.stateNode,s!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&vu(s,o),Bi(l,a);var d=Bi(l,o);for(a=0;a<u.length;a+=2){var p=u[a],g=u[a+1];p==="style"?ju(s,g):p==="dangerouslySetInnerHTML"?wu(s,g):p==="children"?tr(s,g):zo(s,p,g,d)}switch(l){case"input":zi(s,o);break;case"textarea":yu(s,o);break;case"select":var h=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?dn(s,!!o.multiple,x,!1):h!==!!o.multiple&&(o.defaultValue!=null?dn(s,!!o.multiple,o.defaultValue,!0):dn(s,!!o.multiple,o.multiple?[]:"",!1))}s[cr]=o}catch(y){X(e,e.return,y)}}break;case 6:if(Me(t,e),$e(e),r&4){if(e.stateNode===null)throw Error(w(162));s=e.stateNode,o=e.memoizedProps;try{s.nodeValue=o}catch(y){X(e,e.return,y)}}break;case 3:if(Me(t,e),$e(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ir(t.containerInfo)}catch(y){X(e,e.return,y)}break;case 4:Me(t,e),$e(e);break;case 13:Me(t,e),$e(e),s=e.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(fa=K())),r&4&&Al(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(le=(d=le)||p,Me(t,e),le=d):Me(t,e),$e(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(A=e,p=e.child;p!==null;){for(g=A=p;A!==null;){switch(h=A,x=h.child,h.tag){case 0:case 11:case 14:case 15:Xn(4,h,h.return);break;case 1:un(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){X(r,n,y)}}break;case 5:un(h,h.return);break;case 22:if(h.memoizedState!==null){Il(g);continue}}x!==null?(x.return=h,A=x):Il(g)}p=p.sibling}e:for(p=null,g=e;;){if(g.tag===5){if(p===null){p=g;try{s=g.stateNode,d?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=ku("display",a))}catch(y){X(e,e.return,y)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(y){X(e,e.return,y)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Me(t,e),$e(e),r&4&&Al(e);break;case 21:break;default:Me(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xc(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(tr(s,""),r.flags&=-33);var o=Nl(e);xo(e,o,s);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Nl(e);go(e,l,a);break;default:throw Error(w(161))}}catch(u){X(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lf(e,t,n){A=e,Zc(e)}function Zc(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var s=A,o=s.child;if(s.tag===22&&r){var a=s.memoizedState!==null||_r;if(!a){var l=s.alternate,u=l!==null&&l.memoizedState!==null||le;l=_r;var d=le;if(_r=a,(le=u)&&!d)for(A=s;A!==null;)a=A,u=a.child,a.tag===22&&a.memoizedState!==null?Pl(s):u!==null?(u.return=a,A=u):Pl(s);for(;o!==null;)A=o,Zc(o),o=o.sibling;A=s,_r=l,le=d}Dl(e)}else s.subtreeFlags&8772&&o!==null?(o.return=s,A=o):Dl(e)}}function Dl(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||_s(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&pl(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pl(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&ir(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}le||t.flags&512&&ho(t)}catch(h){X(t,t.return,h)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function Il(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function Pl(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_s(4,t)}catch(u){X(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(u){X(t,s,u)}}var o=t.return;try{ho(t)}catch(u){X(t,o,u)}break;case 5:var a=t.return;try{ho(t)}catch(u){X(t,a,u)}}}catch(u){X(t,t.return,u)}if(t===e){A=null;break}var l=t.sibling;if(l!==null){l.return=t.return,A=l;break}A=t.return}}var uf=Math.ceil,js=ot.ReactCurrentDispatcher,pa=ot.ReactCurrentOwner,qe=ot.ReactCurrentBatchConfig,M=0,te=null,Q=null,se=0,Se=0,cn=At(0),J=0,gr=null,$t=0,Os=0,ma=0,Kn=null,he=null,fa=0,jn=1/0,Qe=null,Ss=!1,vo=null,bt=null,Or=!1,ft=null,Cs=0,Qn=0,yo=null,ts=-1,ns=0;function pe(){return M&6?K():ts!==-1?ts:ts=K()}function wt(e){return e.mode&1?M&2&&se!==0?se&-se:Gm.transition!==null?(ns===0&&(ns=zu()),ns):(e=R,e!==0||(e=window.event,e=e===void 0?16:Ou(e.type)),e):1}function Oe(e,t,n,r){if(50<Qn)throw Qn=0,yo=null,Error(w(185));br(e,n,r),(!(M&2)||e!==te)&&(e===te&&(!(M&2)&&(Os|=n),J===4&&pt(e,se)),be(e,r),n===1&&M===0&&!(t.mode&1)&&(jn=K()+500,Rs&&Dt()))}function be(e,t){var n=e.callbackNode;Gp(e,t);var r=ls(e,e===te?se:0);if(r===0)n!==null&&Fa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fa(n),t===1)e.tag===0?$m(Tl.bind(null,e)):ac(Tl.bind(null,e)),Bm(function(){!(M&6)&&Dt()}),n=null;else{switch(Uu(r)){case 1:n=Bo;break;case 4:n=Lu;break;case 16:n=as;break;case 536870912:n=qu;break;default:n=as}n=id(n,Yc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Yc(e,t){if(ts=-1,ns=0,M&6)throw Error(w(327));var n=e.callbackNode;if(gn()&&e.callbackNode!==n)return null;var r=ls(e,e===te?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ns(e,r);else{t=r;var s=M;M|=2;var o=ed();(te!==e||se!==t)&&(Qe=null,jn=K()+500,Rt(e,t));do try{pf();break}catch(l){Jc(e,l)}while(!0);Jo(),js.current=o,M=s,Q!==null?t=0:(te=null,se=0,t=J)}if(t!==0){if(t===2&&(s=Gi(e),s!==0&&(r=s,t=bo(e,s))),t===1)throw n=gr,Rt(e,0),pt(e,r),be(e,K()),n;if(t===6)pt(e,r);else{if(s=e.current.alternate,!(r&30)&&!cf(s)&&(t=Ns(e,r),t===2&&(o=Gi(e),o!==0&&(r=o,t=bo(e,o))),t===1))throw n=gr,Rt(e,0),pt(e,r),be(e,K()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:Et(e,he,Qe);break;case 3:if(pt(e,r),(r&130023424)===r&&(t=fa+500-K(),10<t)){if(ls(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Ji(Et.bind(null,e,he,Qe),t);break}Et(e,he,Qe);break;case 4:if(pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var a=31-_e(r);o=1<<a,a=t[a],a>s&&(s=a),r&=~o}if(r=s,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uf(r/1960))-r,10<r){e.timeoutHandle=Ji(Et.bind(null,e,he,Qe),r);break}Et(e,he,Qe);break;case 5:Et(e,he,Qe);break;default:throw Error(w(329))}}}return be(e,K()),e.callbackNode===n?Yc.bind(null,e):null}function bo(e,t){var n=Kn;return e.current.memoizedState.isDehydrated&&(Rt(e,t).flags|=256),e=Ns(e,t),e!==2&&(t=he,he=n,t!==null&&wo(t)),e}function wo(e){he===null?he=e:he.push.apply(he,e)}function cf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],o=s.getSnapshot;s=s.value;try{if(!Ve(o(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pt(e,t){for(t&=~ma,t&=~Os,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_e(t),r=1<<n;e[n]=-1,t&=~r}}function Tl(e){if(M&6)throw Error(w(327));gn();var t=ls(e,0);if(!(t&1))return be(e,K()),null;var n=Ns(e,t);if(e.tag!==0&&n===2){var r=Gi(e);r!==0&&(t=r,n=bo(e,r))}if(n===1)throw n=gr,Rt(e,0),pt(e,t),be(e,K()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Et(e,he,Qe),be(e,K()),null}function ha(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(jn=K()+500,Rs&&Dt())}}function Gt(e){ft!==null&&ft.tag===0&&!(M&6)&&gn();var t=M;M|=1;var n=qe.transition,r=R;try{if(qe.transition=null,R=1,e)return e()}finally{R=r,qe.transition=n,M=t,!(M&6)&&Dt()}}function ga(){Se=cn.current,_(cn)}function Rt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Fm(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(Qo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ms();break;case 3:wn(),_(ve),_(ue),ia();break;case 5:sa(r);break;case 4:wn();break;case 13:_(G);break;case 19:_(G);break;case 10:ea(r.type._context);break;case 22:case 23:ga()}n=n.return}if(te=e,Q=e=kt(e.current,null),se=Se=t,J=0,gr=null,ma=Os=$t=0,he=Kn=null,Ut!==null){for(t=0;t<Ut.length;t++)if(n=Ut[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=s,r.next=a}n.pending=r}Ut=null}return e}function Jc(e,t){do{var n=Q;try{if(Jo(),Yr.current=ks,ws){for(var r=W.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ws=!1}if(Vt=0,ee=Y=W=null,Hn=!1,mr=0,pa.current=null,n===null||n.return===null){J=1,gr=t,Q=null;break}e:{var o=e,a=n.return,l=n,u=t;if(t=se,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=l,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=vl(a);if(x!==null){x.flags&=-257,yl(x,a,l,o,t),x.mode&1&&xl(o,d,t),t=x,u=d;var v=t.updateQueue;if(v===null){var y=new Set;y.add(u),t.updateQueue=y}else v.add(u);break e}else{if(!(t&1)){xl(o,d,t),xa();break e}u=Error(w(426))}}else if($&&l.mode&1){var k=vl(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),yl(k,a,l,o,t),Zo(kn(u,l));break e}}o=u=kn(u,l),J!==4&&(J=2),Kn===null?Kn=[o]:Kn.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Uc(o,u,t);dl(o,m);break e;case 1:l=u;var c=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(bt===null||!bt.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=Mc(o,l,t);dl(o,b);break e}}o=o.return}while(o!==null)}nd(n)}catch(S){t=S,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function ed(){var e=js.current;return js.current=ks,e===null?ks:e}function xa(){(J===0||J===3||J===2)&&(J=4),te===null||!($t&268435455)&&!(Os&268435455)||pt(te,se)}function Ns(e,t){var n=M;M|=2;var r=ed();(te!==e||se!==t)&&(Qe=null,Rt(e,t));do try{df();break}catch(s){Jc(e,s)}while(!0);if(Jo(),M=n,js.current=r,Q!==null)throw Error(w(261));return te=null,se=0,J}function df(){for(;Q!==null;)td(Q)}function pf(){for(;Q!==null&&!Up();)td(Q)}function td(e){var t=sd(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?nd(e):Q=t,pa.current=null}function nd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=sf(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,Q=null;return}}else if(n=rf(n,t,Se),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);J===0&&(J=5)}function Et(e,t,n){var r=R,s=qe.transition;try{qe.transition=null,R=1,mf(e,t,n,r)}finally{qe.transition=s,R=r}return null}function mf(e,t,n,r){do gn();while(ft!==null);if(M&6)throw Error(w(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Wp(e,o),e===te&&(Q=te=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Or||(Or=!0,id(as,function(){return gn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=qe.transition,qe.transition=null;var a=R;R=1;var l=M;M|=4,pa.current=null,af(e,n),Qc(n,e),Em(Zi),us=!!Qi,Zi=Qi=null,e.current=n,lf(n),Mp(),M=l,R=a,qe.transition=o}else e.current=n;if(Or&&(Or=!1,ft=e,Cs=s),o=e.pendingLanes,o===0&&(bt=null),Bp(n.stateNode),be(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Ss)throw Ss=!1,e=vo,vo=null,e;return Cs&1&&e.tag!==0&&gn(),o=e.pendingLanes,o&1?e===yo?Qn++:(Qn=0,yo=e):Qn=0,Dt(),null}function gn(){if(ft!==null){var e=Uu(Cs),t=qe.transition,n=R;try{if(qe.transition=null,R=16>e?16:e,ft===null)var r=!1;else{if(e=ft,ft=null,Cs=0,M&6)throw Error(w(331));var s=M;for(M|=4,A=e.current;A!==null;){var o=A,a=o.child;if(A.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(A=d;A!==null;){var p=A;switch(p.tag){case 0:case 11:case 15:Xn(8,p,o)}var g=p.child;if(g!==null)g.return=p,A=g;else for(;A!==null;){p=A;var h=p.sibling,x=p.return;if(Hc(p),p===d){A=null;break}if(h!==null){h.return=x,A=h;break}A=x}}}var v=o.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}A=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,A=a;else e:for(;A!==null;){if(o=A,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Xn(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,A=m;break e}A=o.return}}var c=e.current;for(A=c;A!==null;){a=A;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,A=f;else e:for(a=c;A!==null;){if(l=A,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:_s(9,l)}}catch(S){X(l,l.return,S)}if(l===a){A=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,A=b;break e}A=l.return}}if(M=s,Dt(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(Ls,e)}catch{}r=!0}return r}finally{R=n,qe.transition=t}}return!1}function El(e,t,n){t=kn(n,t),t=Uc(e,t,1),e=yt(e,t,1),t=pe(),e!==null&&(br(e,1,t),be(e,t))}function X(e,t,n){if(e.tag===3)El(e,e,n);else for(;t!==null;){if(t.tag===3){El(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bt===null||!bt.has(r))){e=kn(n,e),e=Mc(t,e,1),t=yt(t,e,1),e=pe(),t!==null&&(br(t,1,e),be(t,e));break}}t=t.return}}function ff(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(se&n)===n&&(J===4||J===3&&(se&130023424)===se&&500>K()-fa?Rt(e,0):ma|=n),be(e,t)}function rd(e,t){t===0&&(e.mode&1?(t=Er,Er<<=1,!(Er&130023424)&&(Er=4194304)):t=1);var n=pe();e=st(e,t),e!==null&&(br(e,t,n),be(e,n))}function hf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rd(e,n)}function gf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),rd(e,n)}var sd;sd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xe=!1,nf(e,t,n);xe=!!(e.flags&131072)}else xe=!1,$&&t.flags&1048576&&lc(t,gs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;es(e,t),e=t.pendingProps;var s=vn(t,ue.current);hn(t,n),s=aa(null,t,r,e,s,n);var o=la();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(o=!0,fs(t)):o=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,na(t),s.updater=Bs,t.stateNode=s,s._reactInternals=t,oo(t,r,e,n),t=uo(null,t,r,!0,o,n)):(t.tag=0,$&&o&&Ko(t),de(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(es(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=vf(r),e=Re(r,e),s){case 0:t=lo(null,t,r,e,n);break e;case 1:t=kl(null,t,r,e,n);break e;case 11:t=bl(null,t,r,e,n);break e;case 14:t=wl(null,t,r,Re(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Re(r,s),lo(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Re(r,s),kl(e,t,r,s,n);case 3:e:{if(_c(t),e===null)throw Error(w(387));r=t.pendingProps,o=t.memoizedState,s=o.element,fc(e,t),ys(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){s=kn(Error(w(423)),t),t=jl(e,t,r,n,s);break e}else if(r!==s){s=kn(Error(w(424)),t),t=jl(e,t,r,n,s);break e}else for(Ce=vt(t.stateNode.containerInfo.firstChild),Ne=t,$=!0,Be=null,n=pc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yn(),r===s){t=it(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return hc(t),e===null&&ro(t),r=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,a=s.children,Yi(r,s)?a=null:o!==null&&Yi(r,o)&&(t.flags|=32),Bc(e,t),de(e,t,a,n),t.child;case 6:return e===null&&ro(t),null;case 13:return Oc(e,t,n);case 4:return ra(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bn(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Re(r,s),bl(e,t,r,s,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,o=t.memoizedProps,a=s.value,F(xs,r._currentValue),r._currentValue=a,o!==null)if(Ve(o.value,a)){if(o.children===s.children&&!ve.current){t=it(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=tt(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),so(o.return,n,t),l.lanes|=n;break}u=u.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(w(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),so(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}de(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,hn(t,n),s=ze(s),r=r(s),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,s=Re(r,t.pendingProps),s=Re(r.type,s),wl(e,t,r,s,n);case 15:return Rc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Re(r,s),es(e,t),t.tag=1,ye(r)?(e=!0,fs(t)):e=!1,hn(t,n),zc(t,r,s),oo(t,r,s,n),uo(null,t,r,!0,e,n);case 19:return Vc(e,t,n);case 22:return Fc(e,t,n)}throw Error(w(156,t.tag))};function id(e,t){return Eu(e,t)}function xf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,t,n,r){return new xf(e,t,n,r)}function va(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vf(e){if(typeof e=="function")return va(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Mo)return 11;if(e===Ro)return 14}return 2}function kt(e,t){var n=e.alternate;return n===null?(n=Le(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function rs(e,t,n,r,s,o){var a=2;if(r=e,typeof e=="function")va(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Jt:return Ft(n.children,s,o,t);case Uo:a=8,s|=8;break;case Pi:return e=Le(12,n,t,s|2),e.elementType=Pi,e.lanes=o,e;case Ti:return e=Le(13,n,t,s),e.elementType=Ti,e.lanes=o,e;case Ei:return e=Le(19,n,t,s),e.elementType=Ei,e.lanes=o,e;case hu:return Vs(n,s,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mu:a=10;break e;case fu:a=9;break e;case Mo:a=11;break e;case Ro:a=14;break e;case ut:a=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Le(a,n,t,s),t.elementType=e,t.type=r,t.lanes=o,t}function Ft(e,t,n,r){return e=Le(7,e,r,t),e.lanes=n,e}function Vs(e,t,n,r){return e=Le(22,e,r,t),e.elementType=hu,e.lanes=n,e.stateNode={isHidden:!1},e}function bi(e,t,n){return e=Le(6,e,null,t),e.lanes=n,e}function wi(e,t,n){return t=Le(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function yf(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ti(0),this.expirationTimes=ti(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ti(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function ya(e,t,n,r,s,o,a,l,u){return e=new yf(e,t,n,l,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Le(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},na(o),e}function bf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function od(e){if(!e)return Ct;e=e._reactInternals;e:{if(Xt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(ye(n))return oc(e,n,t)}return t}function ad(e,t,n,r,s,o,a,l,u){return e=ya(n,r,!0,e,s,o,a,l,u),e.context=od(null),n=e.current,r=pe(),s=wt(n),o=tt(r,s),o.callback=t??null,yt(n,o,s),e.current.lanes=s,br(e,s,r),be(e,r),e}function $s(e,t,n,r){var s=t.current,o=pe(),a=wt(s);return n=od(n),t.context===null?t.context=n:t.pendingContext=n,t=tt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yt(s,t,a),e!==null&&(Oe(e,s,a,o),Zr(e,s,a)),a}function As(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ll(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ba(e,t){Ll(e,t),(e=e.alternate)&&Ll(e,t)}function wf(){return null}var ld=typeof reportError=="function"?reportError:function(e){console.error(e)};function wa(e){this._internalRoot=e}Gs.prototype.render=wa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));$s(e,t,null,null)};Gs.prototype.unmount=wa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gt(function(){$s(null,e,null,null)}),t[rt]=null}};function Gs(e){this._internalRoot=e}Gs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dt.length&&t!==0&&t<dt[n].priority;n++);dt.splice(n,0,e),n===0&&_u(e)}};function ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ws(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ql(){}function kf(e,t,n,r,s){if(s){if(typeof r=="function"){var o=r;r=function(){var d=As(a);o.call(d)}}var a=ad(t,r,e,0,null,!1,!1,"",ql);return e._reactRootContainer=a,e[rt]=a.current,lr(e.nodeType===8?e.parentNode:e),Gt(),a}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var d=As(u);l.call(d)}}var u=ya(e,0,!1,null,null,!1,!1,"",ql);return e._reactRootContainer=u,e[rt]=u.current,lr(e.nodeType===8?e.parentNode:e),Gt(function(){$s(t,u,n,r)}),u}function Hs(e,t,n,r,s){var o=n._reactRootContainer;if(o){var a=o;if(typeof s=="function"){var l=s;s=function(){var u=As(a);l.call(u)}}$s(t,a,e,s)}else a=kf(n,t,e,s,r);return As(a)}Mu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Bn(t.pendingLanes);n!==0&&(_o(t,n|1),be(t,K()),!(M&6)&&(jn=K()+500,Dt()))}break;case 13:Gt(function(){var r=st(e,1);if(r!==null){var s=pe();Oe(r,e,1,s)}}),ba(e,1)}};Oo=function(e){if(e.tag===13){var t=st(e,134217728);if(t!==null){var n=pe();Oe(t,e,134217728,n)}ba(e,134217728)}};Ru=function(e){if(e.tag===13){var t=wt(e),n=st(e,t);if(n!==null){var r=pe();Oe(n,e,t,r)}ba(e,t)}};Fu=function(){return R};Bu=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};Oi=function(e,t,n){switch(t){case"input":if(zi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Ms(r);if(!s)throw Error(w(90));xu(r),zi(r,s)}}}break;case"textarea":yu(e,n);break;case"select":t=n.value,t!=null&&dn(e,!!n.multiple,t,!1)}};Nu=ha;Au=Gt;var jf={usingClientEntryPoint:!1,Events:[kr,rn,Ms,Su,Cu,ha]},Un={findFiberByHostInstance:zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sf={bundleType:Un.bundleType,version:Un.version,rendererPackageName:Un.rendererPackageName,rendererConfig:Un.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pu(e),e===null?null:e.stateNode},findFiberByHostInstance:Un.findFiberByHostInstance||wf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vr.isDisabled&&Vr.supportsFiber)try{Ls=Vr.inject(Sf),Xe=Vr}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jf;De.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ka(t))throw Error(w(200));return bf(e,t,null,n)};De.createRoot=function(e,t){if(!ka(e))throw Error(w(299));var n=!1,r="",s=ld;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ya(e,1,!1,null,null,n,!1,r,s),e[rt]=t.current,lr(e.nodeType===8?e.parentNode:e),new wa(t)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Pu(t),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return Gt(e)};De.hydrate=function(e,t,n){if(!Ws(t))throw Error(w(200));return Hs(null,e,t,!0,n)};De.hydrateRoot=function(e,t,n){if(!ka(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,s=!1,o="",a=ld;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=ad(t,null,e,1,n??null,s,!1,o,a),e[rt]=t.current,lr(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Gs(t)};De.render=function(e,t,n){if(!Ws(t))throw Error(w(200));return Hs(null,e,t,!1,n)};De.unmountComponentAtNode=function(e){if(!Ws(e))throw Error(w(40));return e._reactRootContainer?(Gt(function(){Hs(null,null,e,!1,function(){e._reactRootContainer=null,e[rt]=null})}),!0):!1};De.unstable_batchedUpdates=ha;De.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ws(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Hs(e,t,n,!1,r)};De.version="18.3.1-next-f1338f8080-20240426";function ud(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ud)}catch(e){console.error(e)}}ud(),uu.exports=De;var cd=uu.exports,zl=cd;Di.createRoot=zl.createRoot,Di.hydrateRoot=zl.hydrateRoot;/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),dd=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Nf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=C.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:o,iconNode:a,...l},u)=>C.createElement("svg",{ref:u,...Nf,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:dd("lucide",s),...l},[...a.map(([d,p])=>C.createElement(d,p)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=(e,t)=>{const n=C.forwardRef(({className:r,...s},o)=>C.createElement(Af,{ref:o,iconNode:t,className:dd(`lucide-${Cf(e)}`,r),...s}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=E("ArrowDownToLine",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=E("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=E("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=E("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=E("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=E("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=E("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=E("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=E("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=E("ChevronsLeftRight",[["path",{d:"m9 7-5 5 5 5",key:"j5w590"}],["path",{d:"m15 7 5 5-5 5",key:"1bl6da"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=E("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=E("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=E("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=E("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=E("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=E("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=E("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=E("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=E("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=E("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=E("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=E("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=E("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=E("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=E("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=E("MessagesSquare",[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z",key:"p1xzt8"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",key:"1cx29u"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=E("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=E("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=E("PenTool",[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=E("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=E("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=E("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=E("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=E("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=E("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=E("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=E("Slash",[["path",{d:"M22 2 2 22",key:"y4kqgn"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=E("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=E("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=E("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=E("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=E("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=E("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=E("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),$f='<!-- source-hash: b4bd94f1e332 -->\n---\nname: asl-design-system\ndescription: Design System of Anne-Sophie Leroy\'s portfolio — colours through tokens, neutral and solid surfaces, reserved shadow, colour meanings, component structure (buttons, tags, cards, menus), action hierarchy, layout and typography without all caps. Use it whenever you create or modify a component, a screen, a style, a colour or a button in this project, even if the request does not mention a “design system” (for example “add a card”, “make this block more visible”, “create a banner”).\n---\n\n# ASL portfolio Design System\n\nThis portfolio has a precise direction: restrained, readable, with colour reserved for what matters.\nYour role is to build screens that blend into it, not to make them “prettier” in your own way.\nWhen in doubt, go simpler.\n\n## Before writing code\n\nThe system is organised in three files, from the most general to the most specific. Open the ones you need:\n\n| You want to… | Read |\n|---|---|\n| Create or modify a component (button, tag, card, menu…) | `references/composants.md`: every component is described there (example, anatomy, states). Follow its structure rather than inventing one. |\n| Choose a colour, a text size, a radius, an icon | `references/styles.md`. The source of truth for values remains `src/index.css`. |\n| Compose a screen, write a label, check accessibility | `references/fondations.md` |\n\nThese three files are also the source of the portfolio\'s “Design System” page: a rule changed here changes the page.\n\n## The four non-negotiable rules\n\nThese are the ones whose omission shows on screen straight away.\n\n### 1. No hard-coded colour\n\nEvery colour goes through a token (`bg-accent`, `text-ink`, `border-line`, `var(--ai)`…). Never `#640017`, `rgb(...)` or a standard Tailwind colour (`bg-red-500`, `text-gray-600`, `text-white`).\n\nWhy: tokens change value with the theme. A hard-coded colour stays fixed, so the screen breaks in dark mode, and it leaves the palette without anyone noticing.\n\nConsequence: do not use Tailwind\'s `dark:` prefix. The theme is carried by `data-theme` on `<html>`; with tokens, both themes work without writing anything more.\n\n- Yes: `className="bg-accent text-accent-fg"`\n- No: `className="bg-[#640017] text-white"`\n\n### 2. Neutral, solid surfaces\n\nA background is a solid, neutral colour: `bg-bg`, `bg-elevated` or `bg-sidebar`. No gradient, no texture, no decorative shape, and no large coloured surface (an olive banner, a burgundy card).\n\nColour lives in the small elements that carry an action or a piece of information: buttons, tags, icon badges.\n\nWhy: background effects were tried and then removed, because they got in the way of reading without adding anything. And a large coloured surface overwhelms everything around it. To make a block stand out, work with text size, space and a single coloured action: see `references/fondations.md`, “Layout”.\n\n- Yes: `className="rounded-3xl border border-line bg-elevated p-5"` with a `btn-primary` inside\n- No: `className="bg-olive text-olive-fg"` across the full width\n\n### 3. The shadow is reserved\n\nOnly one shadow exists, `shadow-signature`, and it serves two purposes: the prompt input (with its send button) and the main action of a screen (`btn-primary`). A card, a tag, a secondary menu or an image has no shadow: they stand out through a flat fill and a thin border (`border border-line`).\n\nWhy: if everything has a shadow, nothing stands out any more. The shadow says “this is where you act”.\n\n### 4. One colour, one meaning\n\n| Colour | Meaning | Tokens |\n|---|---|---|\n| Solid olive | Main action | `olive`, `olive-fg` |\n| Pale olive | Positive element (tag, badge) | `olive-tint`, `olive-text` |\n| Burgundy | Secondary action as an icon button, step number, icon badge, link, monogram | `accent`, `accent-fg`, `accent-text`, `accent-tint` |\n| Turquoise | What comes from the AI | `--ai`, `--ai-text`, `--ai-tint` |\n| Orange | Friction point, alert | `--warn-text`, `--warn-tint` |\n| Vermilion | Punctuation only: list bullet, caret, small arrow. Never a text, never a background | `vermillion` |\n\nOlive exists in two intensities, and the difference matters: solid for a button, pale for information. A tag is never solid olive, a button never pale olive: a button that is not the main action stays neutral (outlined or `bg-surface-2`).\n\nDo not repurpose a colour because it “would look good”. If no meaning matches, stay neutral: `text-ink`, `text-muted`, `border-line`. Figures, in particular, stay neutral.\n\nWhy: as soon as a colour has two meanings, the reader can no longer rely on it.\n\n## When the request contradicts a rule\n\nSometimes you are explicitly asked for what a rule forbids (“add a gradient”, “add a shadow so it stands out”). The person wants a result — for the block to be seen — not necessarily that particular means.\n\nBuild the compliant version that reaches the same goal, then say clearly what you did not do and why, and offer to do it anyway if they insist. Do not add it silently, and do not refuse without delivering anything.\n\n## Composing the screen\n\nA screen can follow the four rules and still fail: elements that overlap, lines that separate nothing. Before creating or reorganising a block, read “Layout” in `references/fondations.md`.\n\nWorth remembering even without opening it: **no text is in all caps**, neither button, nor tag, nor label (no `uppercase` class), and **in a button, the icon is to the right of the label**.\n\n## Before delivering\n\nFirst run the check script on the files you created or modified:\n\n```bash\nnode .claude/skills/asl-design-system/scripts/check.mjs src/components/MonComposant.tsx\n```\n\nWith no argument, it checks all of `src/`. It reports two levels:\n\n- `✗` an error: a rule is broken (hard-coded colour, gradient, unplanned shadow, all-caps text), fix it before delivering;\n- `?` to check: the script cannot decide on its own (a shadow, a coloured surface). See whether the use is legitimate.\n\nThe script does not see everything. It judges neither the meaning of a colour (rule 4), nor the structure of a component (icon on the right, suggestion card), nor the composition: a text that covers another escapes it. These points remain yours.\n\nIf you have to depart from a rule, write the reason just above the line, then say so clearly in your reply:\n\n```tsx\n{/* ds-ignore: le prototype est toujours clair, son support reste blanc */}\n```\n\nA reported deviation is better than a hidden one.\n',Gf=`<!-- source-hash: da9feafc9322 -->
# Components

All the portfolio's components, organised by function. Every component follows the same outline: when to use it, example, anatomy, states, do, don't. Reuse what exists before creating; if you need a component that is not here, build it with the same building blocks (pill, card, badge) and say so when you deliver.

Ready-to-use classes, defined in \`src/index.css\`:

| Class | What it is |
|---|---|
| \`btn-primary\` | Solid olive green button, with shadow |
| \`btn-secondary\` | Outlined button, without shadow |
| \`icon-btn\` | Round pale burgundy button containing a single icon |
| \`icon-chip\` | Small round badge placed inside a button |
| \`tag\` | Tag: information pill, in a single size; add the colour classes to it |
| \`eyebrow\` | Small label (section heading, label) |
| \`caption\` | Caption in italics |
| \`t-all\` | Standard transition, on any element that changes on hover |
| \`rise\` | Gentle appearance of a block |

Files to reuse as they are: \`Markdown.tsx\` (answers, tables), \`Monogram.tsx\`, \`SectionNav.tsx\`, \`FlowBoard.tsx\`, \`CaseVisuals.tsx\` (figure and principle cards), \`PromptInput.tsx\`, \`TopBar.tsx\`, \`Sidebar.tsx\`, all in \`src/components/\`.

## Actions

### Buttons

A button triggers an action. Its appearance states its importance.

#### Variants

<!-- exemple: buttons -->

| Variant | Class | When |
|---|---|---|
| Primary | \`btn-primary\` | The main action. Only one per area. |
| Outlined | \`btn-secondary\` | A neighbouring, less important action. |

All buttons are pills. The label is in sentence case, 13.5 px, semibold: it is in the classes, do not rewrite it.

#### Anatomy

1. Pill container
2. Label, in sentence case
3. Optional icon, always to the right of the label

\`\`\`tsx
<button className="btn-primary">Me contacter <Mail size={16} aria-hidden /></button>
\`\`\`

#### Full width with badge

<!-- exemple: buttons-wide -->

In a narrow column, the button takes the full width: label on the left, icon in an \`icon-chip\` badge on the right. The badge inverts the button's colours.

Two outlined buttons are the same component, even when their badge is a different colour: “New conversation” (olive badge) and “View the CV” (burgundy badge) both start from \`btn-secondary\`. Only the badge colour changes. Never rewrite a button's classes by hand: it would lose the shared states, starting with hover.

\`\`\`tsx
<button className="btn-primary w-full !justify-between !py-2 !pl-4 !pr-2">
  Contacter par email
  <span className="icon-chip bg-olive-fg text-olive"><Mail size={13} aria-hidden /></span>
</button>
\`\`\`

#### States

<!-- exemple: buttons-states -->

- Hover: a slight change, never a colour inversion. The solid button lightens (\`hover:opacity-90\`); the outlined button gets a neutral veil (\`hover:bg-surface-2\`), its text and outline do not change.
- Pressed: \`active:scale-[0.98]\`.
- Disabled: \`disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none\`.
- After a successful action: the label and the icon change (“Copied” and a check mark), without changing colour.

#### Do

- One solid and one outlined when two buttons follow each other.

#### Don't

- Two neighbouring solid buttons.
- A solid burgundy button with text.
- The icon to the left of the label.
- A button whose classes are rewritten by hand instead of starting from \`btn-primary\` or \`btn-secondary\`.

### Icon buttons

A secondary or supporting action, carried by a single icon.

#### Variants

<!-- exemple: iconbuttons -->

| Variant | Appearance | When |
|---|---|---|
| Standard | \`icon-btn\`: round, pale burgundy | Close, open the menu, collapse |
| Send | Round \`bg-accent text-accent-fg\`, with shadow | Only for sending the message |
| Stop | Round \`bg-ink text-bg\` | During an answer |

#### Accessibility

- Every icon button carries an \`aria-label\`.

### Segmented control

Two or three exclusive options, permanently visible: language, theme, before / after.

#### Variants

<!-- exemple: segmented -->

| Variant | When | Example |
|---|---|---|
| Without icon | The options are acronyms or very short words | Language: FR / EN |
| With icon | An icon helps recognise the option; it sits to the right of the label, in vermilion | Theme: Light + sun, Dark + moon |

Both versions exist and are used together: in the navigation drawer, the language control (without icon) and the theme control (with icon) sit side by side, at equal width. Do not replace one with the other, and do not write “Français / English” in full: the language is shown as acronyms.

The selected option is solid, in dark neutral (\`bg-ink text-bg\`): it is not an action colour. The others are in \`text-muted\`.

\`\`\`tsx
{/* Sans icône : la langue */}
<div role="group" aria-label="Langue" className="flex flex-1 rounded-full border border-line p-0.5">
  <button aria-pressed className="t-all flex flex-1 items-center justify-center gap-1.5 rounded-full bg-ink px-2 py-1.5 text-xs font-semibold text-bg">FR</button>
  <button aria-pressed={false} className="t-all flex flex-1 items-center justify-center gap-1.5 rounded-full px-2 py-1.5 text-xs font-semibold text-muted hover:text-ink">EN</button>
</div>

{/* Avec icône : le thème */}
<div role="group" aria-label="Thème" className="flex flex-1 rounded-full border border-line p-0.5">
  <button aria-pressed className="t-all flex flex-1 items-center justify-center gap-1.5 rounded-full bg-ink px-2 py-1.5 text-xs font-semibold text-bg">
    Light <Sun size={12} className="text-vermillion" aria-hidden />
  </button>
  <button aria-pressed={false} className="t-all flex flex-1 items-center justify-center gap-1.5 rounded-full px-2 py-1.5 text-xs font-semibold text-muted hover:text-ink">
    Dark <Moon size={12} className="text-vermillion" aria-hidden />
  </button>
</div>
\`\`\`

#### Don't

- More than three options: use a menu.

#### Accessibility

- Every option carries \`aria-pressed\`.

### Chips

A small pill that starts something: a follow-up question.

#### Example

<!-- exemple: chips -->

\`\`\`tsx
<button className="t-all inline-flex items-center gap-1.5 rounded-full border border-line bg-elevated px-3.5 py-1.5 text-sm text-ink hover:border-rule hover:bg-surface-2">
  Question de relance <ArrowUpRight size={14} className="shrink-0 text-vermillion" aria-hidden />
</button>
\`\`\`

#### Anatomy

1. Outlined pill, neutral background
2. Label in sentence case
3. Small arrow on the right

#### Don't

- A coloured background at rest: it is not a main action.
- A colour inversion on hover: like an outlined button, a chip gets a neutral veil (\`hover:bg-surface-2\`).

## Communication

### Tags

A tag informs, it is not clickable.

#### Variants

<!-- exemple: tags -->

| Meaning | Classes |
|---|---|
| Positive element, result | \`bg-olive-tint text-olive-text\` |
| What the AI does | \`bg-[var(--ai-tint)] text-[var(--ai-text)]\` |
| Friction, pain point | \`bg-[var(--warn-tint)] text-[var(--warn-text)]\` |
| Neutral information | \`border border-rule text-ink\`, no background |
| Secondary neutral (an actor such as the system) | \`bg-surface-2 text-ink\` |
| Receding neutral (what happens outside the tool) | \`border border-line text-muted\` |

\`\`\`tsx
<span className="tag bg-olive-tint text-olive-text">Résultat</span>
\`\`\`

All tags are the same size: always start from the \`tag\` class (12 px, medium) and add only the colour. Do not write a size or spacing by hand.

In an answer, an impact figure is written \`==chiffre==\` and becomes a pale olive tag. It is the only size exception: it follows the surrounding text.

#### Anatomy

1. Pale solid pill, or outlined for the neutral one
2. Optional icon (12 px), before the text
3. Text in sentence case, in the same hue

#### Don't

- A tag in capitals: it would read as a button.
- A solid olive tag.

### Badges

A circle that carries an icon or a number.

#### Variants

<!-- exemple: badges -->

| Use | Size | Classes |
|---|---|---|
| Subject icon | 28 to 32 px | \`bg-accent-tint text-accent-text\` |
| Step number | 28 to 32 px | \`bg-accent text-accent-fg\` |
| Icon in a button | 24 px | \`icon-chip\`, inverted colours of the button |
| List bullet | 6 px | \`bg-vermillion\` |

### Messages

The conversation: the question in a bubble, the answer on the page.

#### Example

<!-- exemple: messages -->

#### Anatomy

1. Question bubble, on the right: \`rounded-3xl rounded-br-md bg-bubble text-bubble-fg\`
2. Monogram, hidden on mobile
3. Assistant name and model
4. Answer, without a bubble
5. Action buttons, then follow-up chips

#### States

- Waiting: three animated dots (\`thinking-dot\`).
- In progress: a caret (\`caret\`) after the last word.
- Interrupted: a neutral tag indicates it.

## Containers

### Cards

A card groups content: very rounded corner, thin outline, neutral background, no shadow.

\`\`\`tsx
<div className="rounded-3xl border border-line bg-elevated p-5">…</div>
\`\`\`

In an answer, the small cards of a grid use \`rounded-2xl\` and \`p-4\`. A card inside a card takes \`bg-bg\` to stand out.

#### Suggestion card

<!-- exemple: card-suggestion -->

A clickable card that suggests a question. Its structure is fixed, do not reinvent it. The whole card is clickable: the arrow shows that it opens, it is not a second button. Cards are laid out in two columns; a card alone on its last row takes the full width (\`sm:col-span-2\`).

\`\`\`tsx
<button className="t-all group flex flex-col gap-3 rounded-3xl border border-line bg-elevated p-5 text-left hover:-translate-y-0.5 hover:border-rule">
  <span className="flex items-center gap-3">
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-tint text-accent-text">
      <UserRound size={15} aria-hidden />
    </span>
    <span className="eyebrow flex-1 font-semibold text-ink">Titre</span>
    <ArrowUpRight size={15} className="t-all shrink-0 text-muted group-hover:text-ink" aria-hidden />
  </span>
  <span className="text-[14.5px] font-light leading-relaxed text-ink">Texte de la carte</span>
</button>
\`\`\`

#### Anatomy

1. Subject icon in a badge, on the left
2. Title, on the same line
3. Arrow at the top right, with no background or outline
4. Text, below, across the full width

#### Numbered card

<!-- exemple: card-numbered -->

For principles or steps that follow one another: number badge on the left, semibold title and one line of text.

#### Call-to-action card

<!-- exemple: card-cta -->

A title and a sentence on the left, a single \`btn-primary\` on the right; on mobile the button moves below.

#### Don't

- A coloured card or one with a shadow.
- A number on cards with no order between them.
- A solid button in a suggestion card.

### Table

For comparing elements against the same criteria.

#### Example

<!-- exemple: table -->

A table is always written in Markdown in the answer: \`src/components/Markdown.tsx\` formats it (header as a small label, thin rules, horizontal scrolling on mobile). Do not build it by hand.

## Navigation

### Navigation drawer

The identity, the projects and the shortcuts, always in the same place.

#### Example

<!-- exemple: sidemenu -->

The button that collapses or opens the menu is part of the component: a navigation drawer without it is incomplete.

#### Anatomy

1. Collapse button: an \`icon-btn\` at the start of the top bar, to the left of the title
2. Identity: monogram, name, job title
3. “New conversation” button, neutral
4. Two collapsible folders, “Work projects” then “Personal projects”. Each has a title (folder icon, name, number of projects, chevron on the right) and its projects, numbered in their order of presentation, with their year and context. Only one folder is open at a time: work projects by default; the folder of the displayed project opens by itself, and can still be collapsed by hand
5. Shortcuts: contact by email as \`btn-primary\`, CV as \`btn-secondary\`
6. Settings: two segmented controls side by side, language (FR / EN, without icon) and theme (Light / Dark, with icon). Always both.

#### Behaviour

- On desktop (from 768 px upwards): visible by default, at a fixed width. The collapse button hides it and the content takes the full width; a second click reopens it.
- On a small screen: closed by default. The same button, in the same place, opens it as a drawer that slides in from the left. The drawer never covers the whole screen (\`w-[304px] max-w-[88vw]\`), with a scrim behind it; it closes on a click on the scrim or on the close icon button placed in its header.

#### Accessibility

- The collapse button carries an \`aria-label\` that says what it does (open or collapse the menu).

#### Don't

- A full-screen menu: it makes you lose context. Seeing a piece of the page is a reminder that you have not changed screen.

### Section anchors

In a long answer, move from one section to another without scrolling through everything. Use \`src/components/SectionNav.tsx\`.

#### Example

<!-- exemple: anchors -->

The anchors are numbered, because the sections follow one another. The bar stays stuck to the top of the conversation.

### Menu

A list of options that opens under its trigger: the model choice, the commands.

#### Example

<!-- exemple: menu -->

#### Anatomy

1. Trigger: neutral outlined pill (\`border border-line bg-elevated\`)
2. Chevron on the right, which flips on opening
3. Panel \`rounded-3xl border border-rule bg-elevated p-1.5\`, without shadow
4. Selected option: burgundy check mark on the right

#### Accessibility

- The trigger carries \`aria-haspopup="listbox"\` and \`aria-expanded\`; the selected option carries \`aria-selected\`.
- The menu closes on an outside click and on Escape.

### Tabs

A document to read (the CV, the Design System) opens as a page next to the conversation, never on top of it. It has its own tab in the top bar, closed with its cross. Several documents can stay open at the same time. See \`src/components/TopBar.tsx\`.

#### Example

<!-- exemple: tabs -->

#### Anatomy

1. Conversation tab, with its title
2. Document tab, with a short label
3. Close cross, inside the document tab
4. Document action on the right of the bar (download), in place of the level of detail

#### Behaviour

- The active tab has a neutral fill (\`bg-surface-2 text-ink\`); the other is in \`text-muted\`.
- Clicking the conversation tab returns to it without closing the document; the cross closes it and returns to the conversation.
- While a document is displayed, the prompt input is hidden.

#### Don't

- Opening a document in a window on top of the page: the portfolio has no dialog.
- Putting the prototype in a tab: designed for 1280 px wide, it opens full screen.
- A window to write an email: the contact button opens the person's mail app directly (\`mailto:\`).

#### Accessibility

- Tabs carry \`role="tab"\` and \`aria-selected\`; the cross carries an \`aria-label\`.

## Input

### Prompt input

The entry point of the conversation, and the only field that carries the shadow. See \`src/components/PromptInput.tsx\`.

#### Example

<!-- exemple: prompt -->

#### Anatomy

1. Container \`rounded-[28px] border border-line bg-elevated shadow-signature\`
2. Commands button, neutral (\`bg-surface-2 text-ink\`)
3. Text field, without outline
4. Send button, round, solid burgundy

#### States

- Empty: sending is disabled.
- Focus: the container's outline strengthens (\`focus-within:border-rule\`).
- During an answer: Send becomes Stop.

## Data

### Key figures

One tile per figure: the figure in large, what it measures below.

#### Example

<!-- exemple: figures -->

\`\`\`tsx
<ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
  <li className="min-w-0 rounded-2xl border border-line bg-elevated p-4">
    <span className="block font-display text-[1.7rem] font-semibold leading-none tracking-[-0.03em] text-ink">40 000</span>
    <span className="mt-1.5 block text-xs font-light leading-snug text-muted">utilisateurs actifs</span>
  </li>
</ul>
\`\`\`

#### Do

- Leave the figure neutral (\`text-ink\`): its size is enough.

#### Don't

- Colouring a figure.
- Two figures on the same line without a grid.

### Before / after comparison

Two versions of the same screen, stacked, with a divider you drag to move from one to the other.

#### Example

<!-- exemple: compare -->

#### Anatomy

1. The two images, framed the same way
2. A “Before” tag on the left, an “After” tag on the right
3. The divider and its round handle, in dark neutral
4. A caption under the image

#### Do

- Compare two screens that show the same thing: the same page, before and after.

#### Don't

- Colouring the handle: it moves, it triggers nothing.
- Comparing two unrelated screens: the divider would no longer make sense.

#### Accessibility

- The divider is a slider (\`input type="range"\`): it moves with the keyboard and carries an \`aria-label\`.
- The caption says in words what the two images show.

### Scrollable mockup

A full-page mockup is too tall to be shown in one block. It is displayed in a fixed-height frame that you scroll like the real page.

#### Anatomy

1. A fixed-height frame (\`h-[460px] overflow-y-auto\`), with a thin outline
2. The whole image inside, at the width of the frame
3. A caption under the frame
4. For a mobile screen: a narrow, phone-sized frame next to the desktop frame

#### Don't

- Shrinking the mockup to make it fit: it would become unreadable.
- A frame without a caption: nothing would indicate that it scrolls.

#### Accessibility

- The frame takes focus (\`tabIndex={0}\`) and carries an \`aria-label\`, so it can be scrolled with the keyboard.

### Problem and answer

A design decision in a case study: the audience's need, the answer given, and the screens that prove it. The reader reads the reason before seeing the screen.

#### Anatomy

1. A card (\`rounded-2xl border border-line bg-elevated\`)
2. At the top, two columns: a neutral “Problem” tag with its sentence, a pale green “Answer” tag with its sentence
3. At the bottom, on a \`bg-surface-2\` background, one to three mobile screens side by side, centred (\`max-w-[180px]\`, \`rounded-xl border border-rule\`)
4. A short caption under each screen

#### Do

- One decision per card, with a section title above that names it.
- Say in the answer what has not been designed, rather than letting people look for it.

#### Don't

- More than three screens: they become unreadable.
- A screen without a caption, or an answer that no screen shows.

### Step flow

Who does what, step by step, and where it gets stuck. Use \`src/components/FlowBoard.tsx\` with data, modelled on \`src/data/covenantFlow.ts\`.

#### Example

<!-- exemple: flow -->

#### Anatomy

1. Numbered steps, linked by a vertical rule
2. Small cards: one action per actor
3. Actor tag: only the AI is coloured, the other actors are neutral
4. Frictions as orange tags, under the step concerned
5. Before / after segmented control if there are two flows
`,Wf=`<!-- source-hash: 84ab3c194b63 -->
# Foundations

What applies to every screen, whatever the component: accessibility, layout, content.
This file is also the source of the portfolio's “Design System” page: what you read here is what is displayed there.

## Accessibility

Everything must be readable, reachable by keyboard and announced, in both themes.

### Rules

- Every clickable element is a \`<button>\` or an \`<a>\`, never a \`<div>\`.
- Keyboard focus stays visible: it is handled globally, do not remove it.
- A state (selected, open) is also announced: \`aria-pressed\`, \`aria-expanded\`, \`aria-current\`.
- A button that contains only an icon carries an \`aria-label\`. A decorative icon carries \`aria-hidden\`.
- Animations stop when the person has asked for reduced motion.

### Verified contrasts

Ratios calculated from the values in \`src/index.css\`. WCAG AA threshold: 4.5 for text, 3 for an icon.

| Pair | Light | Dark |
|---|---|---|
| \`text-ink\` on \`bg-bg\` | 14.8 | 14.4 |
| \`text-muted\` on \`bg-bg\` | 6.7 | 7.9 |
| \`text-muted\` on \`bg-elevated\` | 7.3 | 7.1 |
| \`text-olive-fg\` on \`bg-olive\` | 6.5 | 5.3 |
| \`text-accent-fg\` on \`bg-accent\` | 12.8 | 7.0 |
| Pale olive tag | 7.5 | 7.7 |
| AI tag | 4.9 | 8.0 |
| Friction tag | 6.3 | 6.8 |
| \`text-vermillion\` on \`bg-bg\` | 3.3 | 5.6 |
| \`border-line\` on \`bg-bg\` | 1.4 | 1.4 |

All text pairs pass AA in both themes. Vermilion does not pass for text in the light theme: it remains punctuation. \`border-line\` is a decorative line: it must never be the only cue for a state. If you create a new pair, calculate its contrast before using it.

## Layout

A screen can respect every colour and still fail. Layout says how to rank, space and separate.

### Making a block stand out

When you are asked to make an element “visible”, use hierarchy, in this order:

1. **Text size and weight**: a heading in \`font-display font-semibold\`, larger than what surrounds it.
2. **Space**: air around the block sets it apart better than a frame.
3. **A single solid action**: a \`btn-primary\` draws the eye to where action is needed.

Do not add a coloured background, a shadow or a line to “mark” a block.

### Action hierarchy

<!-- exemple: hierarchy -->

| Importance | Button | Appearance |
|---|---|---|
| The main action of the screen | \`btn-primary\` | Solid, olive green, with shadow |
| A neighbouring, less important action | \`btn-secondary\` | Outlined |
| A secondary or supporting action | \`icon-btn\` | Burgundy icon button |

- **Two buttons side by side: one solid, one outlined.** The more important one is solid, therefore green. Never two solid neighbours.
- **Burgundy is not a colour for a solid button with text.** It is used for icon buttons and step numbers.
- **A button that is not the main action stays neutral**: outlined or \`bg-surface-2\`, never pale olive.
- When in doubt, go down a notch: a screen with too little colour reads better than a screen where everything calls out.

### Nothing overlaps

- Align comparable elements in a **grid** (\`grid grid-cols-3 gap-3\`): one column per element.
- Put \`min-w-0\` on a child of \`flex\` or \`grid\` that contains text, otherwise it pushes its neighbours.
- **Fit the text size to the available width**, not to the desire for impact.
- On a small screen, switch to one column (\`grid-cols-1 sm:grid-cols-3\`) rather than shrinking the text. Nothing overflows horizontally.

### Lines

A line separates two pieces of content. It does not decorate.

- **A card** has a thin outline on its four sides: \`border border-line\`.
- **A horizontal line** goes between two stacked pieces of content from the same set: the rows of a table, the header and the body of a card.
- **No line under an isolated block**: it would separate nothing.
- \`border-rule\` (strong line) is reserved for heading rules and the outline of outlined buttons.

### Spacing

Multiples of 4 px (\`gap-2\`, \`gap-3\`, \`p-4\`, \`p-5\`). Between two blocks: \`my-4\` to \`my-6\`.

### Checking by eye

The script checks colours, shadows and capitals, not composition. If you can display the screen, look at it at 375 px and 1280 px wide: no text should touch another. If you cannot display it, say so rather than assuming it holds.

## Content

How texts are written and what goes with them.

### No all-caps text

<!-- exemple: nocaps -->

No text is displayed in all caps: neither button, nor tag, nor label, nor selector option, nor caption. A capital on the first word, the rest in lower case.

- No \`uppercase\` class, no \`text-transform\`, no letter spacing to imitate capitals.
- Labels are written in sentence case in the data.
- The only exceptions: acronyms (FR, EN, CV, PDF, IA) and the “ASL” monogram.

To build hierarchy without capitals, work with weight, size and colour.

### Number or icon

<!-- exemple: numbericon -->

A number states an order. An icon states a subject.

- **Number**: only for elements that follow one another — a flow, a process, an ordered list.
- **Icon**: for elements with no order between them. Choose an icon that matches the content, not a repeated decorative icon.
- If neither adds information, put nothing.

A number is written in two ways, depending on what it numbers:

- **In a round burgundy badge** (\`bg-accent text-accent-fg\`): the steps of a journey or an approach, numbered cards.
- **“01” in burgundy italics, without a badge** (\`font-display italic text-accent-text\`): the entries of a list or a menu — projects in the navigation drawer, section anchors, numbered lists in an answer.

### Two languages

No visible text is written in a component. Every label exists in French and in English:

- interface texts: \`src/data/i18n.ts\`;
- content of the answers: \`src/data/knowledgeBase.ts\`.

The component receives \`t\` (the texts) or \`lang\` as a prop.
`,Hf=`<!-- source-hash: 793e7e263f9c -->
# Styles

Colour, typography, shapes, elevation, icons. The source of truth for values remains \`src/index.css\`:
this file says what each style is for, it does not copy the values.

## Colour

Each colour has a single meaning. Everything goes through tokens, which change value with the theme.

### Surfaces and text

<!-- exemple: neutrals -->

| Class | Use |
|---|---|
| \`bg-bg\` | Background of the main area |
| \`bg-sidebar\` | Background of the navigation drawer |
| \`bg-elevated\` | Card, field, menu: what sits on the background |
| \`bg-surface-2\` | Hover, selected element, neutral button |
| \`text-ink\` | Main text |
| \`text-muted\` | Secondary text, caption |
| \`bg-ink\` + \`text-bg\` | Inverted neutral: selected option, Stop button. Never a hover state. |
| \`border-line\` | Standard outline of cards and fields |
| \`border-rule\` | Strong line: heading rule, outlined button |

Backgrounds are neutral and solid: no gradient, no texture, no translucent background, no large coloured surface.

### Dark theme

The dark theme uses the same tokens, with its own values in \`src/index.css\`.

- Backgrounds are almost neutral greys, barely warm: never brown or burgundy over a large surface. Colour stays on the elements that carry a meaning (olive, burgundy, turquoise, orange, vermilion).
- Text is an off-white with a hint of cream, not the palette's cream: on a dark background, overly coloured text reads less well and adds one more colour.
- Meaningful colours get lighter to keep their contrast; they keep the same meaning.

### Colours that carry meaning

<!-- exemple: meanings -->

| Colour | Meaning | Classes |
|---|---|---|
| Solid olive | Main action | \`bg-olive\` + \`text-olive-fg\` |
| Pale olive | Positive element: tag, result | \`bg-olive-tint\` + \`text-olive-text\` |
| Burgundy | Secondary action as an icon button, step number, icon badge, link, monogram | \`bg-accent\` + \`text-accent-fg\`, \`bg-accent-tint\` + \`text-accent-text\` |
| Turquoise | What comes from the AI | \`bg-[var(--ai-tint)]\` + \`text-[var(--ai-text)]\` |
| Orange | Friction point, alert | \`bg-[var(--warn-tint)]\` + \`text-[var(--warn-text)]\` |
| Vermilion | Punctuation: list bullet, caret, small arrow | \`bg-vermillion\`, \`text-vermillion\` |

### Reserved tokens

- \`bg-bubble\` + \`text-bubble-fg\`: the bubble of the sent message.
- \`bg-[var(--overlay)]\`: the scrim behind the navigation drawer, on small screens.
- \`code-*\`: only code blocks and the file preview. They stay dark in both themes.
- \`hover:bg-accent-hover\`: the hover of the send button.

### Do

- Use a token for every colour.
- Stay neutral if no meaning matches. Figures stay neutral.

### Don't

- Hard-code a colour, or use the \`dark:\` prefix.
- Repurpose a colour because it “would look good”.
- A pale olive button, a solid olive tag, vermilion text.

## Typography

Two typefaces, not one more: Poppins for headings, Outfit for everything else.

### Scale

<!-- exemple: typescale -->

| Use | Classes |
|---|---|
| Home heading | reserved for the home screen |
| Key figure | \`font-display text-[1.7rem] font-semibold\` |
| Section heading | \`font-display text-[1.2rem] font-semibold\` |
| Body text | \`text-[15px]\` or \`text-sm\` |
| Small label | \`eyebrow\` |
| Caption, detail | \`text-xs\`, \`text-[12.5px]\` |

### Rules

- Headings: \`font-display\` class, in \`font-semibold\`.
- Long text in \`font-light\`; what must stand out in \`font-medium\` or \`font-semibold\`.
- Build hierarchy through weight, size and colour, never through capitals (see \`fondations.md\`, “Content”).

## Shapes

Rounded shapes everywhere, with no sharp corner.

### Three radii

<!-- exemple: shapes -->

- Buttons, tags, badges: \`rounded-full\`.
- Cards, prompt input: \`rounded-3xl\`.
- Smaller inner elements: \`rounded-2xl\`.

## Elevation

Only one shadow exists, \`shadow-signature\`. It says “this is where you act”.

### Where it is used

<!-- exemple: elevation -->

Two places only: the prompt input (with its send button) and the main action of a screen (\`btn-primary\`).

### Do

- Set a card, a tag or a menu apart with a flat fill and a thin outline.

### Don't

- Add a shadow to “make it stand out”. If everything has a shadow, nothing stands out any more.

## Icons

A single library, \`lucide-react\`, between 12 and 18 px.

### Icon placement

<!-- exemple: iconplace -->

- In a button with a label, the icon is always to the right of the label.
- In a tag or before a name (a file, a role), it comes first: it qualifies the information.
- In a link written as text (LinkedIn, phone), it comes first too: it says which link it is. It is not a button: no background, no outline.

### Rules

- An icon matches the content, it is not repeated for decoration.
- A decorative icon carries \`aria-hidden\`.
`,jd="---\nname: asl-design-system\ndescription: Design System du portfolio d'Anne-Sophie Leroy — couleurs par tokens, surfaces neutres et unies, ombre réservée, sens des couleurs, structure des composants (boutons, tags, cartes, menus), hiérarchie des actions, mise en page et typographie sans majuscules. À utiliser dès qu'on crée ou modifie un composant, un écran, un style, une couleur ou un bouton dans ce projet, même si la demande ne parle pas de « design system » (par exemple « ajoute une carte », « rends ce bloc plus visible », « crée une bannière »).\n---\n\n# Design System du portfolio ASL\n\nCe portfolio a une direction précise : sobre, lisible, avec la couleur réservée à ce qui compte.\nTon rôle est de construire des écrans qui s'y fondent, pas de les rendre « plus beaux » à ta façon.\nEn cas de doute, fais plus simple.\n\n## Avant d'écrire du code\n\nLe système est rangé en trois fichiers, du plus général au plus précis. Ouvre ceux dont tu as besoin :\n\n| Tu veux… | Lis |\n|---|---|\n| Créer ou modifier un composant (bouton, tag, carte, menu…) | `references/composants.md` : chaque composant y est décrit (exemple, anatomie, états). Suis sa structure plutôt que d'en inventer une. |\n| Choisir une couleur, une taille de texte, un arrondi, une icône | `references/styles.md`. La source de vérité des valeurs reste `src/index.css`. |\n| Composer un écran, écrire un libellé, vérifier l'accessibilité | `references/fondations.md` |\n\nCes trois fichiers sont aussi la source de la page « Design System » du portfolio : une règle changée ici change la page.\n\n## Les quatre règles non négociables\n\nCe sont celles dont l'oubli se voit tout de suite à l'écran.\n\n### 1. Aucune couleur écrite en dur\n\nToute couleur passe par un token (`bg-accent`, `text-ink`, `border-line`, `var(--ai)`…). Jamais de `#640017`, de `rgb(...)` ni de couleur Tailwind standard (`bg-red-500`, `text-gray-600`, `text-white`).\n\nPourquoi : les tokens changent de valeur selon le thème. Une couleur en dur reste figée, donc l'écran casse en mode sombre, et elle sort de la palette sans que personne le remarque.\n\nConséquence : n'utilise pas le préfixe `dark:` de Tailwind. Le thème est porté par `data-theme` sur `<html>` ; avec des tokens, les deux thèmes fonctionnent sans rien écrire de plus.\n\n- Oui : `className=\"bg-accent text-accent-fg\"`\n- Non : `className=\"bg-[#640017] text-white\"`\n\n### 2. Des surfaces neutres et unies\n\nUn fond est une couleur pleine et neutre : `bg-bg`, `bg-elevated` ou `bg-sidebar`. Pas de dégradé, pas de texture, pas de forme décorative, et pas de grande surface colorée (un bandeau olive, une carte bordeaux).\n\nLa couleur vit dans les petits éléments qui portent une action ou une information : boutons, tags, pastilles d'icône.\n\nPourquoi : les effets de fond ont été essayés puis retirés, parce qu'ils gênaient la lecture sans rien apporter. Et une grande surface colorée écrase tout ce qui l'entoure. Pour qu'un bloc ressorte, joue sur la taille du texte, l'espace et une seule action colorée : voir `references/fondations.md`, « Mise en page ».\n\n- Oui : `className=\"rounded-3xl border border-line bg-elevated p-5\"` avec un `btn-primary` à l'intérieur\n- Non : `className=\"bg-olive text-olive-fg\"` sur toute la largeur\n\n### 3. L'ombre est réservée\n\nUne seule ombre existe, `shadow-signature`, et elle sert à deux choses : la zone de saisie du prompt (avec son bouton d'envoi) et l'action principale d'un écran (`btn-primary`). Une carte, un tag, un menu secondaire ou une image n'ont pas d'ombre : ils se détachent par un aplat et une bordure fine (`border border-line`).\n\nPourquoi : si tout a une ombre, plus rien ne ressort. L'ombre dit « c'est ici qu'on agit ».\n\n### 4. Une couleur, un seul sens\n\n| Couleur | Sens | Tokens |\n|---|---|---|\n| Olive plein | Action principale | `olive`, `olive-fg` |\n| Olive pâle | Élément positif (tag, pastille) | `olive-tint`, `olive-text` |\n| Bordeaux | Action secondaire en bouton-icône, numéro d'étape, pastille d'icône, lien, monogramme | `accent`, `accent-fg`, `accent-text`, `accent-tint` |\n| Turquoise | Ce qui vient de l'IA | `--ai`, `--ai-text`, `--ai-tint` |\n| Orange | Point de friction, alerte | `--warn-text`, `--warn-tint` |\n| Vermillon | Ponctuation seulement : puce de liste, curseur, petite flèche. Jamais un texte, jamais un fond | `vermillion` |\n\nL'olive existe en deux intensités, et la différence compte : plein pour un bouton, pâle pour une information. Un tag n'est jamais en olive plein, un bouton jamais en olive pâle : un bouton qui n'est pas l'action principale reste neutre (contour ou `bg-surface-2`).\n\nNe détourne pas une couleur parce qu'elle « irait bien ». Si aucun sens ne correspond, reste neutre : `text-ink`, `text-muted`, `border-line`. Les chiffres, en particulier, restent neutres.\n\nPourquoi : dès qu'une couleur a deux sens, le lecteur ne peut plus s'y fier.\n\n## Quand la demande contredit une règle\n\nIl arrive qu'on te demande explicitement ce qu'une règle interdit (« mets un dégradé », « ajoute une ombre pour que ça ressorte »). La personne veut un résultat — que le bloc se voie — pas forcément ce moyen-là.\n\nConstruis la version conforme qui atteint le même but, puis dis clairement ce que tu n'as pas fait et pourquoi, et propose de le faire quand même si elle y tient. Ne l'ajoute pas en silence, et ne refuse pas sans rien livrer.\n\n## Composer l'écran\n\nUn écran peut respecter les quatre règles et rester raté : des éléments qui se chevauchent, des traits qui ne séparent rien. Avant de créer ou de réorganiser un bloc, lis « Mise en page » dans `references/fondations.md`.\n\nÀ retenir même sans l'ouvrir : **aucun texte n'est tout en majuscules**, ni bouton, ni tag, ni libellé (pas de classe `uppercase`), et **dans un bouton, l'icône est à droite du libellé**.\n\n## Avant de livrer\n\nLance d'abord le script de vérification sur les fichiers que tu as créés ou modifiés :\n\n```bash\nnode .claude/skills/asl-design-system/scripts/check.mjs src/components/MonComposant.tsx\n```\n\nSans argument, il vérifie tout `src/`. Il signale deux niveaux :\n\n- `✗` une erreur : une règle est enfreinte (couleur en dur, dégradé, ombre non prévue, texte en majuscules), corrige avant de livrer ;\n- `?` à vérifier : le script ne peut pas trancher seul (une ombre, une surface colorée). Regarde si l'usage est légitime.\n\nLe script ne voit pas tout. Il ne juge ni le sens d'une couleur (règle 4), ni la structure d'un composant (icône à droite, carte de suggestion), ni la composition : un texte qui en recouvre un autre lui échappe. Ces points restent les tiens.\n\nSi tu dois t'écarter d'une règle, écris la raison juste au-dessus de la ligne, puis dis-le clairement dans ta réponse :\n\n```tsx\n{/* ds-ignore: le prototype est toujours clair, son support reste blanc */}\n```\n\nUn écart signalé vaut mieux qu'un écart caché.\n",Sd=`# Composants

Tous les composants du portfolio, rangés par fonction. Chaque composant suit la même trame : quand l'utiliser, exemple, anatomie, états, à faire, à éviter. Réutilise ce qui existe avant de créer ; si tu as besoin d'un composant qui n'est pas ici, construis-le avec les mêmes briques (pilule, carte, pastille) et dis-le en livrant.

Classes prêtes à l'emploi, définies dans \`src/index.css\` :

| Classe | Ce que c'est |
|---|---|
| \`btn-primary\` | Bouton plein vert olive, avec ombre |
| \`btn-secondary\` | Bouton en contour, sans ombre |
| \`icon-btn\` | Bouton rond bordeaux pâle contenant une seule icône |
| \`icon-chip\` | Petite pastille ronde placée dans un bouton |
| \`tag\` | Tag : pilule d'information, à une seule taille ; on y ajoute les classes de couleur |
| \`eyebrow\` | Petit libellé (titre de section, étiquette) |
| \`caption\` | Légende en italique |
| \`t-all\` | Transition standard, sur tout élément qui change au survol |
| \`rise\` | Apparition douce d'un bloc |

Fichiers à réutiliser tels quels : \`Markdown.tsx\` (réponses, tableaux), \`Monogram.tsx\`, \`SectionNav.tsx\`, \`FlowBoard.tsx\`, \`CaseVisuals.tsx\` (cartes de chiffres et de principes), \`PromptInput.tsx\`, \`TopBar.tsx\`, \`Sidebar.tsx\`, tous dans \`src/components/\`.

## Actions

### Boutons

Un bouton déclenche une action. Son aspect dit son importance.

#### Variantes

<!-- exemple: buttons -->

| Variante | Classe | Quand |
|---|---|---|
| Principal | \`btn-primary\` | L'action principale. Une seule par zone. |
| Contour | \`btn-secondary\` | Une action voisine, moins importante. |

Tous les boutons sont des pilules. Le libellé est en casse normale, 13,5 px, semi-gras : c'est dans les classes, ne le réécris pas.

#### Anatomie

1. Conteneur en pilule
2. Libellé, en casse normale
3. Icône facultative, toujours à droite du libellé

\`\`\`tsx
<button className="btn-primary">Me contacter <Mail size={16} aria-hidden /></button>
\`\`\`

#### Pleine largeur avec pastille

<!-- exemple: buttons-wide -->

Dans une colonne étroite, le bouton prend toute la largeur : libellé à gauche, icône dans une pastille \`icon-chip\` à droite. La pastille inverse les couleurs du bouton.

Deux boutons en contour sont le même composant, même si leur pastille n'a pas la même couleur : « Nouvelle conversation » (pastille olive) et « Voir le CV » (pastille bordeaux) partent tous deux de \`btn-secondary\`. Seule la couleur de la pastille change. Ne réécris jamais les classes d'un bouton à la main : il perdrait les états communs, à commencer par le survol.

\`\`\`tsx
<button className="btn-primary w-full !justify-between !py-2 !pl-4 !pr-2">
  Contacter par email
  <span className="icon-chip bg-olive-fg text-olive"><Mail size={13} aria-hidden /></span>
</button>
\`\`\`

#### États

<!-- exemple: buttons-states -->

- Survol : un changement léger, jamais une inversion de couleur. Le bouton plein s'éclaircit (\`hover:opacity-90\`) ; le bouton en contour reçoit un voile neutre (\`hover:bg-surface-2\`), son texte et son trait ne changent pas.
- Appui : \`active:scale-[0.98]\`.
- Désactivé : \`disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none\`.
- Après une action réussie : le libellé et l'icône changent (« Copié » et une coche), sans changer de couleur.

#### À faire

- Un plein et un contour quand deux boutons se suivent.

#### À éviter

- Deux boutons pleins voisins.
- Un bouton plein bordeaux avec du texte.
- L'icône à gauche du libellé.
- Un bouton dont les classes sont réécrites à la main au lieu de partir de \`btn-primary\` ou \`btn-secondary\`.

### Boutons-icônes

Une action secondaire ou d'appoint, portée par une seule icône.

#### Variantes

<!-- exemple: iconbuttons -->

| Variante | Aspect | Quand |
|---|---|---|
| Standard | \`icon-btn\` : rond bordeaux pâle | Fermer, ouvrir le menu, replier |
| Envoi | Rond \`bg-accent text-accent-fg\`, avec ombre | Uniquement l'envoi du message |
| Stop | Rond \`bg-ink text-bg\` | Pendant une réponse |

#### Accessibilité

- Chaque bouton-icône porte un \`aria-label\`.

### Sélecteur segmenté

Deux ou trois options exclusives, visibles en permanence : langue, thème, avant / après.

#### Variantes

<!-- exemple: segmented -->

| Variante | Quand | Exemple |
|---|---|---|
| Sans icône | Les options sont des sigles ou des mots très courts | Langue : FR / EN |
| Avec icône | Une icône aide à reconnaître l'option ; elle est à droite du libellé, en vermillon | Thème : Light + soleil, Dark + lune |

Les deux versions existent et s'utilisent ensemble : dans le menu latéral, le sélecteur de langue (sans icône) et le sélecteur de thème (avec icône) sont côte à côte, à largeur égale. Ne remplace pas l'une par l'autre, et n'écris pas « Français / English » en toutes lettres : la langue s'affiche en sigles.

L'option choisie est pleine, en neutre foncé (\`bg-ink text-bg\`) : ce n'est pas une couleur d'action. Les autres sont en \`text-muted\`.

\`\`\`tsx
{/* Sans icône : la langue */}
<div role="group" aria-label="Langue" className="flex flex-1 rounded-full border border-line p-0.5">
  <button aria-pressed className="t-all flex flex-1 items-center justify-center gap-1.5 rounded-full bg-ink px-2 py-1.5 text-xs font-semibold text-bg">FR</button>
  <button aria-pressed={false} className="t-all flex flex-1 items-center justify-center gap-1.5 rounded-full px-2 py-1.5 text-xs font-semibold text-muted hover:text-ink">EN</button>
</div>

{/* Avec icône : le thème */}
<div role="group" aria-label="Thème" className="flex flex-1 rounded-full border border-line p-0.5">
  <button aria-pressed className="t-all flex flex-1 items-center justify-center gap-1.5 rounded-full bg-ink px-2 py-1.5 text-xs font-semibold text-bg">
    Light <Sun size={12} className="text-vermillion" aria-hidden />
  </button>
  <button aria-pressed={false} className="t-all flex flex-1 items-center justify-center gap-1.5 rounded-full px-2 py-1.5 text-xs font-semibold text-muted hover:text-ink">
    Dark <Moon size={12} className="text-vermillion" aria-hidden />
  </button>
</div>
\`\`\`

#### À éviter

- Plus de trois options : utilise un menu déroulant.

#### Accessibilité

- Chaque option porte \`aria-pressed\`.

### Puces cliquables

Une petite pilule qui lance quelque chose : une question de relance.

#### Exemple

<!-- exemple: chips -->

\`\`\`tsx
<button className="t-all inline-flex items-center gap-1.5 rounded-full border border-line bg-elevated px-3.5 py-1.5 text-sm text-ink hover:border-rule hover:bg-surface-2">
  Question de relance <ArrowUpRight size={14} className="shrink-0 text-vermillion" aria-hidden />
</button>
\`\`\`

#### Anatomie

1. Pilule en contour, fond neutre
2. Libellé en casse normale
3. Petite flèche à droite

#### À éviter

- Un fond coloré au repos : ce n'est pas une action principale.
- Une inversion de couleur au survol : comme un bouton en contour, une puce reçoit un voile neutre (\`hover:bg-surface-2\`).

## Communication

### Tags

Un tag informe, il ne se clique pas.

#### Variantes

<!-- exemple: tags -->

| Sens | Classes |
|---|---|
| Élément positif, résultat | \`bg-olive-tint text-olive-text\` |
| Ce que fait l'IA | \`bg-[var(--ai-tint)] text-[var(--ai-text)]\` |
| Friction, point de douleur | \`bg-[var(--warn-tint)] text-[var(--warn-text)]\` |
| Information neutre | \`border border-rule text-ink\`, sans fond |
| Neutre secondaire (un acteur comme le système) | \`bg-surface-2 text-ink\` |
| Neutre en retrait (ce qui se passe hors de l'outil) | \`border border-line text-muted\` |

\`\`\`tsx
<span className="tag bg-olive-tint text-olive-text">Résultat</span>
\`\`\`

Tous les tags ont la même taille : pars toujours de la classe \`tag\` (12 px, medium) et ajoute seulement la couleur. N'écris pas une taille ou un espacement à la main.

Dans une réponse, un chiffre d'impact s'écrit \`==chiffre==\` et devient un tag olive pâle. C'est la seule exception de taille : il suit le texte qui l'entoure.

#### Anatomie

1. Pilule pleine pâle, ou contour pour le neutre
2. Icône facultative (12 px), devant le texte
3. Texte en casse normale, de la même teinte

#### À éviter

- Un tag en capitales : il se lirait comme un bouton.
- Un tag en olive plein.

### Pastilles

Un rond qui porte une icône ou un numéro.

#### Variantes

<!-- exemple: badges -->

| Usage | Taille | Classes |
|---|---|---|
| Icône de sujet | 28 à 32 px | \`bg-accent-tint text-accent-text\` |
| Numéro d'étape | 28 à 32 px | \`bg-accent text-accent-fg\` |
| Icône dans un bouton | 24 px | \`icon-chip\`, couleurs inversées du bouton |
| Puce de liste | 6 px | \`bg-vermillion\` |

### Messages

La conversation : la question dans une bulle, la réponse sur la page.

#### Exemple

<!-- exemple: messages -->

#### Anatomie

1. Bulle de la question, à droite : \`rounded-3xl rounded-br-md bg-bubble text-bubble-fg\`
2. Monogramme, masqué sur mobile
3. Nom de l'assistant et modèle
4. Réponse, sans bulle
5. Boutons d'action, puis puces de relance

#### États

- En attente : trois points animés (\`thinking-dot\`).
- En cours : un curseur (\`caret\`) après le dernier mot.
- Interrompue : un tag neutre le signale.

## Contenants

### Cartes

Une carte regroupe un contenu : coin très arrondi, contour fin, fond neutre, pas d'ombre.

\`\`\`tsx
<div className="rounded-3xl border border-line bg-elevated p-5">…</div>
\`\`\`

Dans une réponse, les petites cartes d'une grille utilisent \`rounded-2xl\` et \`p-4\`. Une carte dans une carte prend \`bg-bg\` pour se détacher.

#### Carte de suggestion

<!-- exemple: card-suggestion -->

Une carte cliquable qui propose une question. Sa structure est fixe, ne la réinvente pas. Toute la carte est cliquable : la flèche montre qu'elle s'ouvre, elle n'est pas un second bouton. Les cartes se rangent sur deux colonnes ; une carte seule sur sa dernière ligne prend toute la largeur (\`sm:col-span-2\`).

\`\`\`tsx
<button className="t-all group flex flex-col gap-3 rounded-3xl border border-line bg-elevated p-5 text-left hover:-translate-y-0.5 hover:border-rule">
  <span className="flex items-center gap-3">
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-tint text-accent-text">
      <UserRound size={15} aria-hidden />
    </span>
    <span className="eyebrow flex-1 font-semibold text-ink">Titre</span>
    <ArrowUpRight size={15} className="t-all shrink-0 text-muted group-hover:text-ink" aria-hidden />
  </span>
  <span className="text-[14.5px] font-light leading-relaxed text-ink">Texte de la carte</span>
</button>
\`\`\`

#### Anatomie

1. Icône de sujet dans une pastille, à gauche
2. Titre, sur la même ligne
3. Flèche en haut à droite, sans fond ni contour
4. Texte, en dessous, sur toute la largeur

#### Carte numérotée

<!-- exemple: card-numbered -->

Pour des principes ou des étapes qui se suivent : pastille de numéro à gauche, titre semi-gras et une ligne de texte.

#### Carte d'appel à l'action

<!-- exemple: card-cta -->

Un titre et une phrase à gauche, un seul \`btn-primary\` à droite ; sur mobile le bouton passe dessous.

#### À éviter

- Une carte colorée ou avec une ombre.
- Un numéro sur des cartes sans ordre entre elles.
- Un bouton plein dans une carte de suggestion.

### Tableau

Pour comparer des éléments selon les mêmes critères.

#### Exemple

<!-- exemple: table -->

Un tableau s'écrit toujours en Markdown dans la réponse : \`src/components/Markdown.tsx\` le met en forme (en-tête en petit libellé, filets fins, défilement horizontal sur mobile). Ne le construis pas à la main.

## Navigation

### Menu latéral

L'identité, les projets et les accès rapides, toujours au même endroit.

#### Exemple

<!-- exemple: sidemenu -->

Le bouton qui replie ou ouvre le menu fait partie du composant : un menu latéral sans ce bouton est incomplet.

#### Anatomie

1. Bouton de repli : un \`icon-btn\` au début de la barre du haut, à gauche du titre
2. Identité : monogramme, nom, métier
3. Bouton « Nouvelle conversation », neutre
4. Deux dossiers repliables, « Projets professionnels » puis « Projets personnels ». Chacun a un titre (icône de dossier, nom, nombre de projets, chevron à droite) et ses projets numérotés dans leur ordre de présentation, avec leur année et leur contexte. Un seul dossier est ouvert à la fois : les projets professionnels par défaut ; le dossier du projet affiché s'ouvre de lui-même, et reste repliable à la main
5. Accès rapides : contact par email en \`btn-primary\`, CV en \`btn-secondary\`
6. Réglages : deux sélecteurs segmentés côte à côte, la langue (FR / EN, sans icône) et le thème (Light / Dark, avec icône). Toujours les deux.

#### Comportement

- Sur ordinateur (à partir de 768 px) : visible par défaut, à largeur fixe. Le bouton de repli le masque et le contenu prend toute la largeur ; un second clic le rouvre.
- Sur petit écran : fermé par défaut. Le même bouton, au même endroit, l'ouvre en tiroir qui glisse depuis la gauche. Le tiroir ne couvre jamais tout l'écran (\`w-[304px] max-w-[88vw]\`), avec un voile derrière lui ; il se ferme au clic sur le voile ou sur le bouton-icône de fermeture placé dans son en-tête.

#### Accessibilité

- Le bouton de repli porte un \`aria-label\` qui dit ce qu'il fait (ouvrir ou replier le menu).

#### À éviter

- Un menu plein écran : il fait perdre le contexte. Voir un bout de la page rappelle qu'on n'a pas changé d'écran.

### Ancres de section

Dans une longue réponse, passer d'une section à l'autre sans tout faire défiler. Utilise \`src/components/SectionNav.tsx\`.

#### Exemple

<!-- exemple: anchors -->

Les ancres sont numérotées, car les sections se suivent. La barre reste collée en haut de la conversation.

### Menu déroulant

Une liste d'options qui s'ouvre sous son déclencheur : le choix du modèle, les commandes.

#### Exemple

<!-- exemple: menu -->

#### Anatomie

1. Déclencheur : pilule neutre en contour (\`border border-line bg-elevated\`)
2. Chevron à droite, qui se retourne à l'ouverture
3. Panneau \`rounded-3xl border border-rule bg-elevated p-1.5\`, sans ombre
4. Option choisie : coche bordeaux à droite

#### Accessibilité

- Le déclencheur porte \`aria-haspopup="listbox"\` et \`aria-expanded\` ; l'option choisie porte \`aria-selected\`.
- Le menu se ferme au clic extérieur et à Échap.

### Onglets

Un document à lire (le CV, le Design System) s'ouvre comme une page à côté de la conversation, jamais par-dessus elle. Il a son onglet dans la barre du haut, que l'on referme avec sa croix. Plusieurs documents peuvent rester ouverts en même temps. Voir \`src/components/TopBar.tsx\`.

#### Exemple

<!-- exemple: tabs -->

#### Anatomie

1. Onglet de la conversation, avec son titre
2. Onglet du document, avec un libellé court
3. Croix de fermeture, dans l'onglet du document
4. Action du document à droite de la barre (télécharger), à la place du niveau de détail

#### Comportement

- L'onglet actif a un fond neutre (\`bg-surface-2 text-ink\`) ; l'autre est en \`text-muted\`.
- Cliquer sur l'onglet de la conversation y revient sans fermer le document ; la croix le ferme et revient à la conversation.
- Tant qu'un document est affiché, la zone de saisie est masquée.

#### À éviter

- Ouvrir un document dans une fenêtre par-dessus la page : le portfolio n'a pas de fenêtre modale.
- Mettre le prototype dans un onglet : conçu pour 1280 px de large, il s'ouvre en plein écran.
- Une fenêtre pour écrire un email : le bouton de contact ouvre directement la messagerie de la personne (\`mailto:\`).

#### Accessibilité

- Les onglets portent \`role="tab"\` et \`aria-selected\` ; la croix porte un \`aria-label\`.

## Saisie

### Zone de saisie

Le point d'entrée de la conversation, et le seul champ qui porte l'ombre. Voir \`src/components/PromptInput.tsx\`.

#### Exemple

<!-- exemple: prompt -->

#### Anatomie

1. Conteneur \`rounded-[28px] border border-line bg-elevated shadow-signature\`
2. Bouton des commandes, neutre (\`bg-surface-2 text-ink\`)
3. Champ de texte, sans contour
4. Bouton d'envoi, rond bordeaux plein

#### États

- Vide : l'envoi est désactivé.
- Focus : le contour du conteneur se renforce (\`focus-within:border-rule\`).
- Pendant une réponse : l'envoi devient Stop.

## Données

### Chiffres clés

Une tuile par chiffre : le chiffre en grand, ce qu'il mesure en dessous.

#### Exemple

<!-- exemple: figures -->

\`\`\`tsx
<ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
  <li className="min-w-0 rounded-2xl border border-line bg-elevated p-4">
    <span className="block font-display text-[1.7rem] font-semibold leading-none tracking-[-0.03em] text-ink">40 000</span>
    <span className="mt-1.5 block text-xs font-light leading-snug text-muted">utilisateurs actifs</span>
  </li>
</ul>
\`\`\`

#### À faire

- Laisser le chiffre en neutre (\`text-ink\`) : sa taille suffit.

#### À éviter

- Colorer un chiffre.
- Deux chiffres sur la même ligne sans grille.

### Comparaison avant / après

Deux versions d'un même écran, superposées, avec une séparation que l'on fait glisser pour passer de l'une à l'autre.

#### Exemple

<!-- exemple: compare -->

#### Anatomie

1. Les deux images, cadrées de la même façon
2. Un tag « Avant » à gauche, un tag « Après » à droite
3. La séparation et sa poignée ronde, en neutre foncé
4. Une légende sous l'image

#### À faire

- Comparer deux écrans qui montrent la même chose : la même page, avant et après.

#### À éviter

- Colorer la poignée : elle se déplace, elle ne déclenche rien.
- Comparer deux écrans sans rapport : la séparation n'aurait plus de sens.

#### Accessibilité

- La séparation est un curseur (\`input type="range"\`) : elle se déplace au clavier et porte un \`aria-label\`.
- La légende dit en mots ce que montrent les deux images.

### Maquette défilante

Une maquette de page entière est trop haute pour être montrée d'un bloc. Elle s'affiche dans un cadre à hauteur fixe, que l'on fait défiler comme la vraie page.

#### Anatomie

1. Un cadre à hauteur fixe (\`h-[460px] overflow-y-auto\`), au contour fin
2. L'image entière à l'intérieur, à la largeur du cadre
3. Une légende sous le cadre
4. Pour un écran mobile : un cadre étroit, au format téléphone, à côté du cadre ordinateur

#### À éviter

- Réduire la maquette pour la faire tenir : elle deviendrait illisible.
- Un cadre sans légende : rien n'indiquerait qu'il se fait défiler.

#### Accessibilité

- Le cadre reçoit le focus (\`tabIndex={0}\`) et porte un \`aria-label\`, pour se faire défiler au clavier.

### Problème et réponse

Une décision de conception dans une étude de cas : le besoin de la cible, la réponse apportée, et les écrans qui la prouvent. Le lecteur lit la raison avant de voir l'écran.

#### Anatomie

1. Une carte (\`rounded-2xl border border-line bg-elevated\`)
2. En haut, deux colonnes : un tag neutre « Problème » et sa phrase, un tag vert pâle « Réponse » et sa phrase
3. En bas, sur fond \`bg-surface-2\`, un à trois écrans mobiles côte à côte, centrés (\`max-w-[180px]\`, \`rounded-xl border border-rule\`)
4. Une légende courte sous chaque écran

#### À faire

- Une seule décision par carte, et un titre de section au-dessus qui la nomme.
- Dire dans la réponse ce qui n'est pas maquetté, plutôt que de le laisser chercher.

#### À éviter

- Plus de trois écrans : ils deviennent illisibles.
- Un écran sans légende, ou une réponse qui ne se voit dans aucun écran.

### Parcours en étapes

Qui fait quoi, étape par étape, et où ça coince. Utilise \`src/components/FlowBoard.tsx\` avec des données, sur le modèle de \`src/data/covenantFlow.ts\`.

#### Exemple

<!-- exemple: flow -->

#### Anatomie

1. Étapes numérotées, reliées par un filet vertical
2. Petites cartes : une action par acteur
3. Tag d'acteur : seule l'IA est colorée, les autres acteurs sont neutres
4. Frictions en tags orange, sous l'étape concernée
5. Sélecteur avant / après s'il y a deux parcours
`,Cd=`# Fondations

Ce qui vaut pour tout écran, quel que soit le composant : accessibilité, mise en page, contenu.
Ce fichier est aussi la source de la page « Design System » du portfolio : ce que tu lis ici est ce qui y est affiché.

## Accessibilité

Tout doit pouvoir se lire, s'atteindre au clavier et s'annoncer, dans les deux thèmes.

### Règles

- Tout élément cliquable est un \`<button>\` ou un \`<a>\`, jamais un \`<div>\`.
- Le focus au clavier reste visible : il est géré globalement, ne le retire pas.
- Un état (sélectionné, ouvert) est aussi annoncé : \`aria-pressed\`, \`aria-expanded\`, \`aria-current\`.
- Un bouton qui ne contient qu'une icône porte un \`aria-label\`. Une icône décorative porte \`aria-hidden\`.
- Les animations se coupent quand la personne a demandé moins de mouvement.

### Contrastes vérifiés

Rapports calculés sur les valeurs de \`src/index.css\`. Seuil WCAG AA : 4,5 pour un texte, 3 pour une icône.

| Couple | Clair | Sombre |
|---|---|---|
| \`text-ink\` sur \`bg-bg\` | 14,8 | 14,4 |
| \`text-muted\` sur \`bg-bg\` | 6,7 | 7,9 |
| \`text-muted\` sur \`bg-elevated\` | 7,3 | 7,1 |
| \`text-olive-fg\` sur \`bg-olive\` | 6,5 | 5,3 |
| \`text-accent-fg\` sur \`bg-accent\` | 12,8 | 7,0 |
| Tag olive pâle | 7,5 | 7,7 |
| Tag IA | 4,9 | 8,0 |
| Tag friction | 6,3 | 6,8 |
| \`text-vermillion\` sur \`bg-bg\` | 3,3 | 5,6 |
| \`border-line\` sur \`bg-bg\` | 1,4 | 1,4 |

Tous les couples de texte passent AA dans les deux thèmes. Le vermillon ne passe pas pour du texte en thème clair : il reste une ponctuation. \`border-line\` est un trait décoratif : il ne doit jamais être le seul indice d'un état. Si tu crées un nouveau couple, calcule son contraste avant de l'utiliser.

## Mise en page

Un écran peut respecter toutes les couleurs et rester raté. La mise en page dit comment hiérarchiser, espacer et séparer.

### Faire ressortir un bloc

Quand on te demande qu'un élément « se voie », utilise la hiérarchie, dans cet ordre :

1. **La taille et la graisse du texte** : un titre en \`font-display font-semibold\`, plus grand que ce qui l'entoure.
2. **L'espace** : de l'air autour du bloc le détache mieux qu'un cadre.
3. **Une seule action pleine** : un \`btn-primary\` attire l'œil là où il faut agir.

N'ajoute ni fond coloré, ni ombre, ni trait pour « marquer » un bloc.

### Hiérarchie des actions

<!-- exemple: hierarchy -->

| Importance | Bouton | Aspect |
|---|---|---|
| L'action principale de l'écran | \`btn-primary\` | Plein, vert olive, avec ombre |
| Une action voisine, moins importante | \`btn-secondary\` | Contour |
| Une action secondaire ou d'appoint | \`icon-btn\` | Bouton-icône bordeaux |

- **Deux boutons côte à côte : un plein, un en contour.** Le plus important est plein, donc vert. Jamais deux pleins voisins.
- **Le bordeaux n'est pas une couleur de bouton plein avec texte.** Il sert aux boutons-icônes et aux numéros d'étape.
- **Un bouton qui n'est pas l'action principale reste neutre** : contour ou \`bg-surface-2\`, jamais olive pâle.
- En cas de doute, descends d'un cran : un écran avec trop peu de couleur se lit mieux qu'un écran où tout appelle.

### Rien ne se chevauche

- Aligne des éléments comparables dans une **grille** (\`grid grid-cols-3 gap-3\`) : une colonne par élément.
- Mets \`min-w-0\` sur un enfant de \`flex\` ou de \`grid\` qui contient du texte, sinon il pousse ses voisins.
- **Adapte la taille du texte à la largeur disponible**, pas à l'envie d'impact.
- Sur petit écran, passe en une colonne (\`grid-cols-1 sm:grid-cols-3\`) plutôt que de réduire le texte. Rien ne déborde en largeur.

### Les traits

Un trait sépare deux contenus. Il ne décore pas.

- **Une carte** a un contour fin sur ses quatre côtés : \`border border-line\`.
- **Un trait horizontal** se place entre deux contenus empilés du même ensemble : les lignes d'un tableau, l'en-tête et le corps d'une carte.
- **Pas de trait sous un bloc isolé** : il ne séparerait rien.
- \`border-rule\` (trait marqué) est réservé aux filets de titre et au contour des boutons en contour.

### Espacements

Multiples de 4 px (\`gap-2\`, \`gap-3\`, \`p-4\`, \`p-5\`). Entre deux blocs : \`my-4\` à \`my-6\`.

### Vérifier à l'œil

Le script contrôle les couleurs, les ombres et les majuscules, pas la composition. Si tu peux afficher l'écran, regarde-le à 375 px et à 1280 px de large : aucun texte ne doit en toucher un autre. Si tu ne peux pas l'afficher, dis-le plutôt que de supposer que ça tient.

## Contenu

Comment les textes s'écrivent et ce qui les accompagne.

### Pas de texte tout en majuscules

<!-- exemple: nocaps -->

Aucun texte n'est affiché tout en majuscules : ni bouton, ni tag, ni libellé, ni option de sélecteur, ni légende. Une majuscule au premier mot, le reste en minuscules.

- Pas de classe \`uppercase\`, pas de \`text-transform\`, pas d'espacement de lettres pour imiter des capitales.
- Les libellés s'écrivent en casse normale dans les données.
- Seules exceptions : les sigles (FR, EN, CV, PDF, IA) et le monogramme « ASL ».

Pour hiérarchiser sans capitales, joue sur la graisse, la taille et la couleur.

### Numéro ou icône

<!-- exemple: numbericon -->

Un numéro dit un ordre. Une icône dit un sujet.

- **Numéro** : seulement pour des éléments qui se suivent — un parcours, une démarche, une liste ordonnée.
- **Icône** : pour des éléments sans ordre entre eux. Choisis une icône qui correspond au contenu, pas une icône décorative répétée.
- Si aucun des deux n'apporte d'information, ne mets rien.

Un numéro s'écrit de deux façons, selon ce qu'il numérote :

- **Dans une pastille ronde bordeaux** (\`bg-accent text-accent-fg\`) : les étapes d'un parcours ou d'une démarche, les cartes numérotées.
- **« 01 » en italique bordeaux, sans pastille** (\`font-display italic text-accent-text\`) : les entrées d'une liste ou d'un menu — projets du menu latéral, ancres de section, listes numérotées d'une réponse.

### Deux langues

Aucun texte visible n'est écrit dans un composant. Chaque libellé existe en français et en anglais :

- textes d'interface : \`src/data/i18n.ts\` ;
- contenu des réponses : \`src/data/knowledgeBase.ts\`.

Le composant reçoit \`t\` (les textes) ou \`lang\` en propriété.
`,Nd=`# Styles

Couleur, typographie, formes, élévation, icônes. La source de vérité des valeurs reste \`src/index.css\` :
ce fichier dit à quoi sert chaque style, il ne recopie pas les valeurs.

## Couleur

Chaque couleur a un seul sens. Tout passe par des tokens, qui changent de valeur selon le thème.

### Surfaces et texte

<!-- exemple: neutrals -->

| Classe | Usage |
|---|---|
| \`bg-bg\` | Fond de la zone principale |
| \`bg-sidebar\` | Fond du menu latéral |
| \`bg-elevated\` | Carte, champ, menu : ce qui est posé sur le fond |
| \`bg-surface-2\` | Survol, élément choisi, bouton neutre |
| \`text-ink\` | Texte principal |
| \`text-muted\` | Texte secondaire, légende |
| \`bg-ink\` + \`text-bg\` | Neutre inversé : option choisie, bouton Stop. Jamais un état de survol. |
| \`border-line\` | Contour courant des cartes et des champs |
| \`border-rule\` | Trait marqué : filet de titre, bouton en contour |

Les fonds sont neutres et unis : pas de dégradé, pas de texture, pas de fond translucide, pas de grande surface colorée.

### Thème sombre

Le thème sombre suit les mêmes tokens, avec des valeurs à part dans \`src/index.css\`.

- Les fonds sont des gris presque neutres, à peine chauds : jamais de brun ni de bordeaux en grande surface. La couleur reste aux éléments qui portent un sens (olive, bordeaux, turquoise, orange, vermillon).
- Le texte est un blanc cassé à peine crème, pas le crème de la palette : sur un fond sombre, un texte trop coloré se lit moins bien et ajoute une couleur de plus.
- Les couleurs porteuses de sens s'éclaircissent pour garder leur contraste ; elles gardent le même sens.

### Couleurs porteuses de sens

<!-- exemple: meanings -->

| Couleur | Sens | Classes |
|---|---|---|
| Olive plein | Action principale | \`bg-olive\` + \`text-olive-fg\` |
| Olive pâle | Élément positif : tag, résultat | \`bg-olive-tint\` + \`text-olive-text\` |
| Bordeaux | Action secondaire en bouton-icône, numéro d'étape, pastille d'icône, lien, monogramme | \`bg-accent\` + \`text-accent-fg\`, \`bg-accent-tint\` + \`text-accent-text\` |
| Turquoise | Ce qui vient de l'IA | \`bg-[var(--ai-tint)]\` + \`text-[var(--ai-text)]\` |
| Orange | Point de friction, alerte | \`bg-[var(--warn-tint)]\` + \`text-[var(--warn-text)]\` |
| Vermillon | Ponctuation : puce de liste, curseur, petite flèche | \`bg-vermillion\`, \`text-vermillion\` |

### Tokens réservés

- \`bg-bubble\` + \`text-bubble-fg\` : la bulle du message envoyé.
- \`bg-[var(--overlay)]\` : le voile derrière le tiroir du menu, sur petit écran.
- \`code-*\` : uniquement les blocs de code et l'aperçu de fichiers. Ils restent sombres dans les deux thèmes.
- \`hover:bg-accent-hover\` : le survol du bouton d'envoi.

### À faire

- Utiliser un token pour chaque couleur.
- Rester neutre si aucun sens ne correspond. Les chiffres restent neutres.

### À éviter

- Écrire une couleur en dur, ou utiliser le préfixe \`dark:\`.
- Détourner une couleur parce qu'elle « irait bien ».
- Un bouton en olive pâle, un tag en olive plein, un texte en vermillon.

## Typographie

Deux polices, pas une de plus : Poppins pour les titres, Outfit pour tout le reste.

### Échelle

<!-- exemple: typescale -->

| Usage | Classes |
|---|---|
| Titre d'accueil | réservé à l'écran d'accueil |
| Chiffre clé | \`font-display text-[1.7rem] font-semibold\` |
| Titre de section | \`font-display text-[1.2rem] font-semibold\` |
| Texte courant | \`text-[15px]\` ou \`text-sm\` |
| Petit libellé | \`eyebrow\` |
| Légende, détail | \`text-xs\`, \`text-[12.5px]\` |

### Règles

- Titres : classe \`font-display\`, en \`font-semibold\`.
- Texte long en \`font-light\` ; ce qui doit ressortir en \`font-medium\` ou \`font-semibold\`.
- Hiérarchiser par la graisse, la taille et la couleur, jamais par des capitales (voir \`fondations.md\`, « Contenu »).

## Formes

Des formes arrondies partout, sans angle vif.

### Trois rayons

<!-- exemple: shapes -->

- Boutons, tags, pastilles : \`rounded-full\`.
- Cartes, zone de saisie : \`rounded-3xl\`.
- Éléments internes plus petits : \`rounded-2xl\`.

## Élévation

Une seule ombre existe, \`shadow-signature\`. Elle dit « c'est ici qu'on agit ».

### Où elle sert

<!-- exemple: elevation -->

Deux endroits seulement : la zone de saisie (avec son bouton d'envoi) et l'action principale d'un écran (\`btn-primary\`).

### À faire

- Détacher une carte, un tag ou un menu par un aplat et un contour fin.

### À éviter

- Ajouter une ombre pour « faire ressortir ». Si tout a une ombre, plus rien ne ressort.

## Icônes

Une seule bibliothèque, \`lucide-react\`, entre 12 et 18 px.

### Place de l'icône

<!-- exemple: iconplace -->

- Dans un bouton avec libellé, l'icône est toujours à droite du libellé.
- Dans un tag ou devant un nom (un fichier, un rôle), elle est devant : elle qualifie l'information.
- Dans un lien écrit comme du texte (LinkedIn, téléphone), elle est devant aussi : elle dit de quel lien il s'agit. Ce n'est pas un bouton : pas de fond, pas de contour.

### Règles

- Une icône correspond au contenu, elle n'est pas répétée pour décorer.
- Une icône décorative porte \`aria-hidden\`.
`,Xf=e=>/^[\p{L}«“"]/u.test(e.trim());function Ul(e,t){const n=e.startsWith("---")?e.slice(e.indexOf(`
---`,3)+4):e,r=[];let s,o=null,a=null,l=!1;for(const u of n.split(`
`)){u.startsWith("```")&&(l=!l);const d=l?null:u.match(/^(#{1,6})\s+(.*)$/);if(d){const p=d[1].length;if(p<t){s=p===1?void 0:d[2],o=null,a=null;continue}if(p===t){o={family:s,title:d[2],lead:"",sections:[]},a={title:"",body:""},o.sections.push(a),r.push(o);continue}if(p===t+1&&o){a={title:d[2],body:""},o.sections.push(a);continue}}a&&(a.body+=`${u}
`)}for(const u of r){const d=u.sections[0],p=d.body.split(`
`),g=p.findIndex(h=>h.trim());if(g>=0&&Xf(p[g])){let h=g;for(;h<p.length&&p[h].trim();)h++;u.lead=p.slice(g,h).join(" "),d.body=p.slice(h).join(`
`)}u.sections=u.sections.map(h=>({...h,body:h.body.trim()})).filter(h=>h.title||h.body)}return r}function Ad(e){const t=[],n=[];let r=!1;for(const s of e.split(`
`)){s.startsWith("```")&&(r=!r);const o=r?null:s.match(/^\s*(?:[-•]|\d+\.)\s+(.*)$/);o?t.push(o[1]):n.push(s)}return{items:t,rest:n.join(`
`).trim()}}const Kf=Object.assign({"./design-system-en/SKILL.md":$f,"./design-system-en/composants.md":Gf,"./design-system-en/fondations.md":Wf,"./design-system-en/styles.md":Hf}),Yn={fr:{title:"Design System",subtitle:"Les règles et les composants de ce portfolio",pages:"Pages",previous:"Précédent",next:"Suivant",source:"Cette page affiche le fichier que l’agent IA lit",openTitle:"Le Design System de ce portfolio",openText:"Fondations, styles et composants : la page lit directement les fichiers du skill.",open:"Voir le Design System",link:"Design System"},en:{title:"Design System",subtitle:"The rules and components of this portfolio",pages:"Pages",previous:"Previous",next:"Next",source:"This page displays the file the AI agent reads",openTitle:"This portfolio’s Design System",openText:"Foundations, styles and components: the page reads the skill files directly.",open:"View the Design System",link:"Design System"}},ki=[{id:"start",title:{fr:"Démarrer",en:"Get started"}},{id:"foundations",title:{fr:"Fondations",en:"Foundations"}},{id:"styles",title:{fr:"Styles",en:"Styles"}},{id:"components",title:{fr:"Composants",en:"Components"}}],Qf=["Les quatre règles non négociables","Quand la demande contredit une règle","Avant de livrer"],Zf=[{file:"SKILL.md",path:"SKILL.md",fr:jd,group:"start",level:2,only:Qf},{file:"fondations.md",path:"references/fondations.md",fr:Cd,group:"foundations",level:2},{file:"styles.md",path:"references/styles.md",fr:Nd,group:"styles",level:2},{file:"composants.md",path:"references/composants.md",fr:Sd,group:"components",level:3}],Yf={Anatomie:"anatomy","À faire":"do","À éviter":"dont"};function Jf(e,t){return e.length===t.length&&e.every((n,r)=>n.sections.length===t[r].sections.length)}function eh(e){return Zf.flatMap(t=>{const n=Ul(t.fr,t.level),r=Kf[`./design-system-en/${t.file}`],s=e==="en"&&r?Ul(r,t.level):null,o=s&&Jf(n,s)?s:n;return n.map((a,l)=>({p:a,i:l})).filter(({p:a})=>!t.only||t.only.includes(a.title)).map(({p:a,i:l})=>({id:`${t.group}-${l}`,group:t.group,path:t.path,category:o[l].family,title:o[l].title,lead:o[l].lead,sections:a.sections.map((u,d)=>({title:o[l].sections[d].title,body:o[l].sections[d].body,kind:Yf[u.title]??"text"}))}))})}const ji={},th=e=>ji[e]??(ji[e]=eh(e)),Ml={before:{label:{fr:"Avant",en:"Before"},stages:[{step:1,title:{fr:"Obtenir le document",en:"Getting the document"},frictions:[{fr:"Relances répétées pour obtenir les pièces",en:"Repeated reminders to get the files"}],nodes:[{actor:"offline",label:{fr:"Échanges et relances entre plusieurs personnes pour recevoir les pièces",en:"Messages and reminders between several people to receive the files"}}]},{step:2,title:{fr:"Module Contrat",en:"Contract module"},frictions:[{fr:"Délai entre la réception et la saisie",en:"Delay between receipt and data entry"}],nodes:[{actor:"human",label:{fr:"Dépose le document dans la partie Documents du contrat",en:"Uploads the document in the contract’s Documents section"}}]},{step:3,title:{fr:"Module Covenant",en:"Covenant module"},nodes:[{actor:"human",label:{fr:"Change de module",en:"Switches module"}},{actor:"human",label:{fr:"Lit le certificat pour y retrouver chaque valeur",en:"Reads the certificate to find each value"}}]},{step:4,title:{fr:"Calendrier du contrat",en:"Contract calendar"},repeat:{fr:"Répété pour chaque covenant",en:"Repeated for every covenant"},frictions:[{fr:"Erreurs de saisie à corriger",en:"Typing errors to correct"},{fr:"Breach recalculé à la main",en:"Breach re-computed by hand"}],nodes:[{actor:"human",label:{fr:"Crée à la main la ligne de monitoring de la période",en:"Creates the monitoring line for the period by hand"}},{actor:"human",label:{fr:"Saisit valeur réelle, dates et statut",en:"Types in actual value, dates and status"}},{actor:"human",label:{fr:"Recontrôle le breach calculé par l’outil",en:"Re-checks the breach computed by the tool"}},{actor:"human",label:{fr:"Lie le document à la période suivie",en:"Links the document to the monitored period"}}]}]},after:{label:{fr:"Après",en:"After"},stages:[{title:{fr:"Réception",en:"Intake"},alternatives:!0,nodes:[{actor:"system",label:{fr:"Email reçu dans la file « Submissions »",en:"Email received in the “Submissions” queue"}},{actor:"human",label:{fr:"Dépôt manuel d’un document",en:"Manual document upload"}}]},{step:1,title:{fr:"Analyse des documents",en:"Documents analysis"},nodes:[{actor:"ai",label:{fr:"Lit les pièces : emprunteur, facility, date de signature",en:"Reads the files: borrower, facility, signature date"}}]},{step:2,title:{fr:"Rapprochement du contrat",en:"Contract matching"},nodes:[{actor:"ai",label:{fr:"Propose les contrats possibles",en:"Suggests the possible contracts"}},{actor:"human",label:{fr:"Accepte, ou choisit le contrat à la main",en:"Accepts, or picks the contract manually"}}]},{step:3,title:{fr:"Extraction & rapprochement des covenants",en:"Covenant extraction & matching"},nodes:[{actor:"ai",label:{fr:"Extrait chaque covenant et sa valeur",en:"Extracts each covenant and its value"}},{actor:"ai",label:{fr:"Propose le covenant correspondant du contrat",en:"Suggests the matching covenant of the contract"}},{actor:"human",label:{fr:"Valide un par un, face à la source — ou suit à la main",en:"Validates one by one, against the source — or monitors manually"}}]},{title:{fr:"Suivi",en:"Monitoring"},nodes:[{actor:"system",label:{fr:"Valeurs poussées dans le calendrier des covenants",en:"Values pushed to the covenant calendar"}},{actor:"human",label:{fr:"Échéances, breach et réception suivis par contrat",en:"Due dates, breach and receipt tracked per contract"}}]}]}},ge={fr:{eyebrow:"Parcours utilisateur · avant / après",title:"Du document reçu au covenant suivi",actors:{ai:"IA",human:"Analyste",system:"Système",offline:"Hors outil"},step:"Étape",or:"ou",navLabel:"Sections de l’étude de cas",navFlow:"Avant / Après",navUxFlow:"Le flow",navProto:"Prototype",detail:"Les deux parcours",friction:"Point de friction",open:"Tester le prototype",ctaTitle:"Essayez le parcours vous-même",ctaText:"Le prototype s’ouvre ici, sans quitter le portfolio. Il est entièrement navigable : ouvrez une soumission, acceptez un contrat, validez un covenant.",viewerTitle:"Suivi des clauses de crédit — prototype navigable",viewerNote:"Données fictives · marque et couleurs anonymisées",restart:"Recommencer",desktopHint:"Prototype conçu pour un écran d’ordinateur : il est réduit pour tenir dans cette fenêtre."},en:{eyebrow:"User journey · before / after",title:"From the received document to the monitored covenant",actors:{ai:"AI",human:"Analyst",system:"System",offline:"Outside the tool"},step:"Step",or:"or",navLabel:"Case study sections",navFlow:"Before / After",navUxFlow:"The flow",navProto:"Prototype",detail:"The two journeys",friction:"Pain point",open:"Try the prototype",ctaTitle:"Try the journey yourself",ctaText:"The prototype opens here, without leaving the portfolio. It is fully navigable: open a submission, accept a contract, validate a covenant.",viewerTitle:"Loan clause monitoring — navigable prototype",viewerNote:"Fictional data · brand and colours anonymised",restart:"Restart",desktopHint:"Prototype designed for a desktop screen: it is scaled down to fit this window."}},Dd={eyebrow:{fr:ge.fr.eyebrow,en:ge.en.eyebrow},title:{fr:ge.fr.title,en:ge.en.title},journeys:[{id:"before",muted:!0,...Ml.before},{id:"after",...Ml.after}],defaultView:"before"},nh="prototypes/covenant-monitoring.html#screen=0",U=(e,t)=>({fr:e,en:t}),rh={eyebrow:U("Parcours du lecteur · avant / après","Reader journey · before / after"),title:U("Trouver et lire un contenu sur la décarbonation","Finding and reading content about decarbonisation"),actors:{fr:{human:"Lecteur",system:"Plateforme"},en:{human:"Reader",system:"Platform"}},defaultView:"before",journeys:[{id:"before",muted:!0,label:U("Avant","Before"),stages:[{step:1,title:U("Se connecter","Signing in"),frictions:[U("Trop de défilement","Too much scrolling"),U("Contenu pas adapté au mobile","Content not adapted to mobile")],nodes:[{actor:"human",label:U("Se connecte et personnalise son profil","Signs in and personalises their profile")}]},{step:2,title:U("Découvrir","Discovering"),frictions:[U("Contenu mal hiérarchisé","Poorly ranked content"),U("Audio, vidéo et lecture mélangés","Audio, video and reading mixed together")],nodes:[{actor:"human",label:U("Explore la page d’accueil","Explores the home page")}]},{step:3,title:U("Filtrer","Filtering"),nodes:[{actor:"human",label:U("Affine avec les filtres région et thématique","Narrows down with the region and topic filters")}]},{step:4,title:U("Rechercher","Searching"),frictions:[U("Liens qui ne fonctionnent pas","Broken links"),U("Page trop chargée, on ne sait plus où l’on est","Overloaded page, hard to know where you are")],nodes:[{actor:"human",label:U("Parcourt les résultats","Browses the results")},{actor:"human",label:U("Choisit un article","Picks an article")}]},{step:5,title:U("Consulter","Reading"),frictions:[U("Impossible de partager l’article","No way to share the article"),U("Aucune autre lecture proposée","No other reading suggested")],nodes:[{actor:"human",label:U("Lit un article sur les énergies renouvelables","Reads an article about renewable energy")}]}]},{id:"after",label:U("Après","After"),stages:[{step:1,title:U("À la une","Front page"),nodes:[{actor:"system",label:U("Présente une sélection de contenus, un à la fois","Presents a selection of content, one at a time")},{actor:"human",label:U("Lit, passe ou revient en arrière","Reads, skips or goes back")}]},{step:2,title:U("Les contenus","Content"),nodes:[{actor:"human",label:U("Choisit une thématique","Chooses a topic")},{actor:"human",label:U("Filtre par format : à lire, à écouter, à voir","Filters by format: to read, to listen, to watch")}]},{step:3,title:U("Rechercher","Searching"),nodes:[{actor:"human",label:U("Cherche un contenu depuis l’en-tête, sur toutes les pages","Searches for content from the header, on every page")}]},{step:4,title:U("Consulter","Reading"),nodes:[{actor:"system",label:U("Affiche la thématique et le format de chaque article","Shows the topic and format of each article")},{actor:"human",label:U("Lit, puis partage l’article","Reads, then shares the article")}]}]}]},Id="bRCddnUzlotCFXHBfThuI1/Portfolio-file",Pd="node-id=7-43622&page-id=2%3A1791&starting-point-node-id=50%3A122678",sh=`https://embed.figma.com/proto/${Id}?${Pd}&scaling=scale-down-width&content-scaling=fixed&embed-host=portfolio-asl&footer=false&viewport-controls=false&device-frame=false`,ih=`https://www.figma.com/proto/${Id}?${Pd}&scaling=scale-down&content-scaling=fixed`,oh="https://justdecarb.grdf.fr/",Td={fr:{protoEyebrow:"Prototype · version mobile",ctaTitle:"Essayez la plateforme",ctaText:"Le prototype est navigable ici : touchez les boutons comme sur un téléphone. La plateforme a été conçue mobile first, c’est donc cette version que vous voyez. Le chargement peut prendre quelques secondes.",open:"Voir le prototype",site:"Voir le site en ligne",openFigma:"Ouvrir dans Figma",viewerTitle:"GRDF — prototype mobile"},en:{protoEyebrow:"Prototype · mobile version",ctaTitle:"Try the platform",ctaText:"The prototype is navigable here: tap the buttons as you would on a phone. The platform was designed mobile first, so this is the version you see. Loading can take a few seconds.",open:"View the prototype",site:"View the live site",openFigma:"Open in Figma",viewerTitle:"GRDF — mobile prototype"}},ah={eyebrow:{fr:"Flow design · de la recherche au réel",en:"Design flow · from research to reality"},title:{fr:"L’IA produit, le designer décide",en:"The AI produces, the designer decides"},actors:{fr:{ai:"L’IA produit",human:"Le designer décide"},en:{ai:"The AI produces",human:"The designer decides"}},journeys:[{id:"flow",label:{fr:"Flow",en:"Flow"},stages:[{step:1,title:{fr:"Recherche",en:"Research"},nodes:[{actor:"ai",label:{fr:"Analyse des données utilisateurs, segmentation, écarts",en:"User data analysis, segmentation, gap analysis"}},{actor:"human",label:{fr:"Cadre la recherche, anime le cadrage UX",en:"Frames the research, runs the UX framing"}}]},{step:2,title:{fr:"Intention",en:"Intention"},nodes:[{actor:"ai",label:{fr:"Benchmark large, pistes multiples",en:"Wide benchmark, multiple directions"}},{actor:"human",label:{fr:"Fixe l’intention, retient les pistes",en:"Sets the intention, keeps the directions"}}]},{step:3,title:{fr:"Génération 1 · prototypage design",en:"Generation 1 · design prototyping"},nodes:[{actor:"ai",label:{fr:"Itérations de design, plusieurs solutions",en:"Design iterations, several solutions"}},{actor:"human",label:{fr:"Juge et sélectionne les solutions",en:"Judges and selects the solutions"}}]},{step:4,title:{fr:"Génération 2 · prototypage code",en:"Generation 2 · code prototyping"},nodes:[{actor:"ai",label:{fr:"Itérations de code sur le Design System",en:"Code iterations on the Design System"}},{actor:"human",label:{fr:"Arbitre avec les développeurs",en:"Arbitrates with the developers"}}]},{step:5,title:{fr:"Implémentation",en:"Implementation"},nodes:[{actor:"ai",label:{fr:"Environnement de test, livraison prête",en:"Test environment, delivery ready"}},{actor:"human",label:{fr:"Valide la conformité au design",en:"Validates design compliance"}}]},{step:6,title:{fr:"Tests utilisateurs",en:"User tests"},nodes:[{actor:"ai",label:{fr:"Protocoles de test, synthèse des retours",en:"Test protocols, feedback synthesis"}},{actor:"human",label:{fr:"Observe les utilisateurs, interprète",en:"Observes users, interprets"}}]},{step:7,title:{fr:"Rétro & documentation",en:"Retro & documentation"},nodes:[{actor:"ai",label:{fr:"Specs d’interaction, mise à jour du Design System",en:"Interaction specs, Design System updates"}},{actor:"human",label:{fr:"Valide ce qui entre dans la connaissance commune",en:"Validates what enters the shared knowledge"}}]}]}]},Ed=[{id:"profile",question:{fr:"Résume le profil d'Anne-Sophie et ce qui la différencie en 30 secondes",en:"Summarise Anne-Sophie's profile and what sets her apart in 30 seconds"},chip:{fr:"Son profil en 30 secondes",en:"Her profile in 30 seconds"},keywords:[["profil",4],["qui est",4],["who is",4],["present",3],["pitch",4],["differenci",4],["valeur ajoutee",4],["added value",4],["summar",3],["resum",2],["30 secondes",4],["30 seconds",4],["about her",4],["sets her apart",5],["pourquoi elle",4],["why her",4],["why hire",5],["recrut",4],["embauch",4],["hire",4],["anne sophie",2]],answer:{fr:{standard:`**Anne-Sophie Leroy** est Product Designer — UX/UI, Design Ops & AI Workflows, basée à Paris.

### Ce qui la différencie
- **Un double ADN créatif et technique** : un héritage issu des arts visuels et de la mode (Balmain, Indress), conjugué à une forte expertise Design System, *AI Skills* et *vibecoding*.
- **Des produits complexes rendus lisibles** : chaîne de crédit grandes entreprises chez BNP Paribas CIB, application Privilege Card du Groupe Kering, plateforme justdecarb.grdf.fr.
- **L'industrialisation du design** : elle a cadré, avec son équipe, un Design System lisible par l'IA, et prototype en haute fidélité avec Claude Code pour accélérer le delivery.

### En chiffres
| Mission | Résultat |
|---|---|
| BNP Paribas CIB | ==+5 modules sur 17== optimisés par l'IA · ==~1 500 utilisateurs== |
| Groupe Kering | ==40 000 utilisateurs== actifs |
| GRDF | ==Note C EcoIndex== + conformité RGAA |
| Eden Park | ==+20 % de ventes e-commerce== en 1 an |`,express:`- **Product Designer** UX/UI, Design Ops & AI Workflows — Paris, chez mc2i depuis janvier 2024.
- **Aujourd'hui** : BNP Paribas CIB, équipes IA et UX — ==+5 modules sur 17== optimisés par l'IA, ==~1 500 utilisateurs==.
- **Avant** : Groupe Kering (==40 000 utilisateurs==), GRDF (==Note C EcoIndex== + RGAA).
- **Sa signature** : le design augmenté par l'IA (*AI Skills*, *vibecoding* avec Claude Code), porté par un œil créatif issu de la mode.`,deep:`### Lecture Design Lead
- **Positionnement** : à la jonction entre conception produit et outillage des équipes — elle ne livre pas seulement des écrans, elle fait évoluer la façon dont l'équipe les produit.
- **Levier 1 — Cadre** : avec l'équipe, des principes pour qu'un Design System soit exploitable par des agents IA.
- **Levier 2 — Vitesse** : prototypes haute fidélité fonctionnels en *vibecoding* (Claude Code), cohérents avec le Design System, et specs UX/UI générées en \`.md\`.
- **Levier 3 — Process** : co-construction de processus transverses entre les pôles IA et UX.`},en:{standard:`**Anne-Sophie Leroy** is a Product Designer — UX/UI, Design Ops & AI Workflows, based in Paris.

### What sets her apart
- **A creative and technical DNA**: a heritage from visual arts and fashion (Balmain, Indress) combined with strong expertise in Design Systems, *AI Skills* and *vibecoding*.
- **Complex products made readable**: the large-corporate credit chain at BNP Paribas CIB, Kering Group's Privilege Card app, the justdecarb.grdf.fr platform.
- **Industrialising design**: with her team she framed an AI-readable Design System, and builds high-fidelity prototypes with Claude Code to speed up delivery.

### In figures
| Engagement | Result |
|---|---|
| BNP Paribas CIB | ==+5 of 17 modules== optimised with AI · ==~1,500 users== |
| Kering Group | ==40,000 active users== |
| GRDF | ==EcoIndex grade C== + RGAA compliance |
| Eden Park | ==+20% e-commerce sales== in one year |`,express:`- **Product Designer** UX/UI, Design Ops & AI Workflows — Paris, at mc2i since January 2024.
- **Today**: BNP Paribas CIB, AI and UX teams — ==+5 of 17 modules== optimised with AI, ==~1,500 users==.
- **Before**: Kering Group (==40,000 users==), GRDF (==EcoIndex grade C== + RGAA).
- **Her signature**: AI-augmented design (*AI Skills*, *vibecoding* with Claude Code), driven by a creative eye trained in fashion.`,deep:`### Design Lead reading
- **Positioning**: at the junction of product design and team tooling — she doesn't only ship screens, she improves how the team produces them.
- **Lever 1 — Framework**: with the team, principles that make a Design System usable by AI agents.
- **Lever 2 — Speed**: functional high-fidelity prototypes through *vibecoding* (Claude Code), consistent with the Design System, plus UX/UI specs generated in \`.md\`.
- **Lever 3 — Process**: co-building cross-team processes between the AI and UX departments.`}},followUps:["ai","impact","background"],actions:["cv"]},{id:"ai",question:{fr:"Comment a-t-elle intégré l'IA, le vibecoding et les AI Skills dans les workflows UX ?",en:"How did she bring AI, vibecoding and AI Skills into UX workflows?"},chip:{fr:"IA, vibecoding & AI Skills",en:"AI, vibecoding & AI Skills"},keywords:[["ai skill",6],["skill md",6],["ia",4],["ai",4],["vibecod",6],["vibe coding",6],["claude",5],["agent",3],["prompt",4],["workflow",4],["automatis",3],["automat",3],["design ops",5],["designops",5],["intelligence artificielle",5],["artificial intelligence",5],["llm",4],["genai",4],["industrialis",4],["industrializ",4]],answer:{fr:{standard:`Chez **BNP Paribas CIB**, Anne-Sophie travaille dans une cellule design « AI First ». L'IA y est un outil de production du design, pas seulement un sujet de produit.

### 1. Un cadre d'équipe
Avec son équipe, elle a développé puis formalisé une nouvelle façon de travailler : un flow où l'IA génère plusieurs solutions et où le designer juge, et un Design System rendu lisible par la machine.

### 2. Le *vibecoding* au quotidien
- Prototypes haute fidélité **fonctionnels** avec Claude Code, en s'appuyant sur les *AI Skills* du Design System, qu'elle crée pour l'équipe.
- Spécifications UX/UI structurées en \`.md\`.

### 3. Un skill conçu par elle
Pour maîtriser la mécanique, elle a conçu et testé, avec Claude Code, un skill sur le Design System de ce portfolio. En voici le fichier réel.

### Résultat
==+5 modules sur 17== déjà optimisés par l'IA et déployés auprès d'environ ==1 500 utilisateurs==, avec une réduction significative de la dette design et une accélération du delivery.`,express:`- **Cadre d'équipe** : un flow où l'IA génère et le designer juge, développé avec son équipe chez BNP Paribas CIB.
- **Vibecoding** : prototypes haute fidélité fonctionnels avec Claude Code et les *AI Skills* du Design System, specs en \`.md\`.
- **Skill** : un skill conçu et testé par elle, avec Claude Code, sur le Design System de ce portfolio.
- **Impact** : ==+5 modules sur 17== optimisés par l'IA, ==~1 500 utilisateurs==, dette design réduite.`,deep:`### Le dispositif (vue Design Lead)
| Brique | Rôle dans le workflow |
|---|---|
| Bibliothèque de composants | Source de vérité de l'interface |
| AI Skills du Design System | Règles rendues exploitables par un agent IA |
| Vibecoding (Claude Code) | Prototype fonctionnel haute fidélité, aligné sur le Design System |
| Specs \`.md\` | Handoff structuré, lisible par les développeurs comme par les agents |

**Pourquoi ça fonctionne** : un skill n'est utile que si les règles sont explicites. Formaliser un Design System pour une IA oblige à lever les ambiguïtés — ce qui profite aussi aux designers.`},en:{standard:`At **BNP Paribas CIB**, Anne-Sophie works in an “AI First” design unit. AI there is a design production tool, not just a product topic.

### 1. A team framework
With her team, she developed then formalised a new way of working: a flow where the AI generates several solutions and the designer judges, and a Design System made machine-readable.

### 2. *Vibecoding* day to day
- **Functional** high-fidelity prototypes with Claude Code, relying on the Design System *AI Skills* she creates for the team.
- Structured UX/UI specifications in \`.md\`.

### 3. A skill she designed
To master the mechanics, she designed and tested, with Claude Code, a skill on this portfolio's Design System. Here is the real file.

### Outcome
==+5 of 17 modules== already optimised with AI and rolled out to around ==1,500 users==, with a significant reduction in design debt and faster delivery.`,express:`- **Team framework**: a flow where the AI generates and the designer judges, developed with her team at BNP Paribas CIB.
- **Vibecoding**: functional high-fidelity prototypes with Claude Code and the Design System *AI Skills*, specs in \`.md\`.
- **Skill**: a skill she designed and tested, with Claude Code, on this portfolio's Design System.
- **Impact**: ==+5 of 17 modules== optimised with AI, ==~1,500 users==, less design debt.`,deep:`### The system (Design Lead view)
| Building block | Role in the workflow |
|---|---|
| Component library | Source of truth for the interface |
| Design System AI Skills | Rules made usable by an AI agent |
| Vibecoding (Claude Code) | Functional high-fidelity prototype aligned with the Design System |
| \`.md\` specs | Structured handoff, readable by developers and agents alike |

**Why it works**: a skill is only useful if the rules are explicit. Formalising a Design System for an AI forces ambiguities out — which also benefits designers.`}},attachment:"skill",followUps:["covenant","bnp","designsystem"]},{id:"impact",question:{fr:"Quels sont ses principaux résultats mesurables ?",en:"What are her main measurable results?"},chip:{fr:"Ses résultats mesurables",en:"Her measurable results"},keywords:[["impact",5],["resultat",5],["result",5],["chiffre",5],["figure",4],["kpi",5],["metric",5],["mesur",4],["measur",4],["performance",3],["roi",4],["succes",3],["success",3],["achievement",4],["reussite",4],["numbers",4]],answer:{fr:{standard:`Voici les résultats mesurables d'Anne-Sophie, mission par mission.

| Mission | Période | Impact |
|---|---|---|
| **BNP Paribas CIB** — chaîne de crédit | Août 2024 – aujourd'hui | ==+5 modules sur 17== optimisés par l'IA, déployés auprès de ==~1 500 utilisateurs== |
| **Groupe Kering** — Privilege Card | Sept. 2022 – Déc. 2023 | ==40 000 utilisateurs== actifs sur l'application |
| **GRDF** — justdecarb.grdf.fr | Janv. – Mai 2024 | ==Note C EcoIndex== + conformité ==RGAA== |
| **Eden Park** — e-commerce | Janv. 2021 – Juil. 2022 | ==+20 % de ventes== en 1 an |

### Au-delà des chiffres
- **BNP Paribas CIB** : réduction significative de la dette design et accélération du delivery.
- **Kering** : fiabilisation de la gestion des quotas d'achat et du respect des restrictions de vente en boutique.
- **GRDF** : un Design System dédié, sobre et accessible.`,express:`- **BNP Paribas CIB** : ==+5 modules sur 17== optimisés par l'IA · ==~1 500 utilisateurs==.
- **Groupe Kering** : ==40 000 utilisateurs== actifs sur l'app Privilege Card.
- **GRDF** : ==Note C EcoIndex== + conformité RGAA.
- **Eden Park** : ==+20 % de ventes e-commerce== en 1 an.`,deep:`### Comment ces résultats ont été obtenus
- **BNP** : l'impact vient du couple Design System + AI Skills mis en place par l'équipe — moins d'écarts à corriger, des prototypes fonctionnels plus tôt dans le cycle.
- **Kering** : recherche utilisateurs, cartographies de parcours complexes et tests itératifs avant chaque évolution de l'app.
- **GRDF** : les audits UX et RGAA en amont ont cadré un Design System sobre, pensé mobile-first — la performance environnementale est une conséquence du design, pas un correctif.`},en:{standard:`Here are Anne-Sophie's measurable results, engagement by engagement.

| Engagement | Period | Impact |
|---|---|---|
| **BNP Paribas CIB** — credit chain | Aug 2024 – present | ==+5 of 17 modules== optimised with AI, rolled out to ==~1,500 users== |
| **Kering Group** — Privilege Card | Sep 2022 – Dec 2023 | ==40,000 active users== on the app |
| **GRDF** — justdecarb.grdf.fr | Jan – May 2024 | ==EcoIndex grade C== + ==RGAA== compliance |
| **Eden Park** — e-commerce | Jan 2021 – Jul 2022 | ==+20% sales== in one year |

### Beyond the numbers
- **BNP Paribas CIB**: significant reduction in design debt and faster delivery.
- **Kering**: more reliable purchase-quota management and in-store sales restrictions.
- **GRDF**: a dedicated, lean and accessible Design System.`,express:`- **BNP Paribas CIB**: ==+5 of 17 modules== optimised with AI · ==~1,500 users==.
- **Kering Group**: ==40,000 active users== on the Privilege Card app.
- **GRDF**: ==EcoIndex grade C== + RGAA compliance.
- **Eden Park**: ==+20% e-commerce sales== in one year.`,deep:`### How these results were achieved
- **BNP**: the impact comes from the Design System + AI Skills pairing set up by the team — fewer deviations to fix, functional prototypes earlier in the cycle.
- **Kering**: user research, complex journey mapping and iterative testing before each evolution of the app.
- **GRDF**: upfront UX and RGAA audits framed a lean, mobile-first Design System — environmental performance is a consequence of the design, not a patch.`}},followUps:["bnp","kering","grdf"]},{id:"search",question:{fr:"Quel type de poste et d'équipe recherche-t-elle aujourd'hui ?",en:"What kind of role and team is she looking for today?"},chip:{fr:"Le poste qui lui correspond",en:"The role that fits her"},keywords:[["poste",4],["recherche t elle",5],["cherche",3],["looking for",5],["role",3],["job",3],["opportunit",4],["souhait",3],["ideal",3],["seeking",4],["type d equipe",4],["kind of team",4],["projet professionnel",5],["next step",4],["motivation",4],["ambition",4],["position",3]],answer:{fr:{standard:`Le positionnement d'Anne-Sophie est clair : **Product Designer à l'intersection de l'UX/UI, du Design Ops et des workflows IA**.

### Les environnements où son profil crée le plus de valeur
- **Des produits métiers complexes** à rendre lisibles — comme la chaîne de crédit de BNP Paribas CIB.
- **Des équipes qui veulent industrialiser leur design** : Design System, process transverses, handoff structuré.
- **Des organisations qui intègrent l'IA dans la conception** : *AI Skills*, *vibecoding* avec Claude Code, specs en \`.md\`.

### Ce qu'elle apporte dès l'arrivée
- Une pratique complète du cycle produit : discovery, ateliers, prototypage, tests utilisateurs.
- Une expérience en grands groupes (banque, luxe, énergie, secteur public) et en contexte conseil.

Pour ses critères précis — type de contrat, disponibilité, périmètre — le plus direct est d'échanger avec elle.`,express:`- **Rôle** : Product Designer UX/UI avec une dimension Design Ops & workflows IA.
- **Terrain de jeu** : produits métiers complexes, Design System à faire vivre, équipes qui intègrent l'IA.
- **Atouts** : *AI Skills*, *vibecoding*, expérience grands groupes (BNP Paribas CIB, Kering, GRDF).
- **Critères précis** (contrat, disponibilité) : à voir directement avec elle par email.`},en:{standard:`Anne-Sophie's positioning is clear: **Product Designer at the intersection of UX/UI, Design Ops and AI workflows**.

### Environments where her profile creates the most value
- **Complex business products** that need to become readable — like the BNP Paribas CIB credit chain.
- **Teams that want to industrialise their design**: Design System, cross-team processes, structured handoff.
- **Organisations bringing AI into the design process**: *AI Skills*, *vibecoding* with Claude Code, \`.md\` specs.

### What she brings from day one
- End-to-end product practice: discovery, workshops, prototyping, user testing.
- Experience in large groups (banking, luxury, energy, public sector) and in a consulting context.

For her specific criteria — contract type, availability, scope — the most direct route is to talk to her.`,express:`- **Role**: Product Designer UX/UI with a Design Ops & AI workflows dimension.
- **Playing field**: complex business products, Design Systems to grow, teams adopting AI.
- **Strengths**: *AI Skills*, *vibecoding*, large-group experience (BNP Paribas CIB, Kering, GRDF).
- **Specific criteria** (contract, availability): best discussed directly with her by email.`}},followUps:["availability","softskills","profile"],actions:["email","cv"]},{id:"bnp",question:{fr:"Comment a-t-elle cadré le travail d'une équipe design augmentée par l'IA chez BNP Paribas CIB ?",en:"How did she frame the work of an AI-augmented design team at BNP Paribas CIB?"},chip:{fr:"Banque · Équipe UX augmentée par l’IA",en:"Bank · AI-augmented UX team"},keywords:[["bnp",6],["paribas",6],["cib",5],["credit",5],["banque",4],["bank",4],["mc2i",4],["conseil",3],["consult",3],["charge cognitive",4],["cognitive load",4],["actuel",2]],answer:{fr:{standard:`### Contexte
Cellule design « AI First » chez **BNP Paribas CIB**, sur la refonte de la chaîne de crédit pour grandes entreprises.

[[bnp-figures]]

### Problématique
Le métier se déplace : l'IA génère, le designer juge. Quand un écran se produit en quelques minutes, trois questions se posent : comment garantir qu'il respecte le Design System, comment faire travailler toute l'équipe de la même façon, et comment éviter que le savoir se perde d'une personne à l'autre.

### Son rôle
Elle a développé ce nouveau cadre de travail avec son équipe, puis l'a formalisé pour qu'il puisse être transmis. Elle crée des skills pour standardiser et accélérer le travail des équipes, assure la gouvernance des composants UI pour l'IA, et prototype au quotidien en s'appuyant sur eux.

### La solution
Un cadre de travail commun, de la recherche à la livraison. Il tient en quatre volets, détaillés ci-dessous : un Design System lisible par l'IA, une connaissance organisée, des rôles et des relais clairs, et un skill testé.

[[flow]]

### Design System AI-ready
Sans garde-fou, la vitesse de génération produit de la divergence.

[[ds-principles]]

### Connaissance
Le dépôt UX devient la mémoire de l'équipe, lisible par l'IA comme par les développeurs.

[[repo-map]]

### Collaboration
Un assistant par rôle, chargé du même cadre.

[[team-roles]]

[[relay]]

### En pratique
Pour passer du cadre à la pratique, elle a conçu, avec Claude Code, un skill pour le Design System de ce portfolio : les règles qu'un agent IA lit avant de créer ou de modifier un écran.

Elle l'a ensuite testé : la même demande confiée à deux agents, l'un avec le skill, l'autre sans.

[[skill-test]]

### Corriger la règle, pas le résultat
Le skill n'a pas été juste du premier coup. À chaque test, elle a regardé les écrans produits, repéré ce qui n'allait pas, et corrigé la règle plutôt que de retoucher l'écran.

[[skill-lessons]]

C'est le même principe que dans l'équipe : l'IA produit, le designer juge, et ce jugement devient une règle que l'IA appliquera la fois suivante.

Le fichier ci-dessous est le vrai : c'est aussi lui que la page Design System affiche.`,express:`- **Contexte** : cellule design « AI First » chez BNP Paribas CIB, refonte de la chaîne de crédit — ==+5 modules sur 17==, ==~1 500 utilisateurs==.
- **Problématique** : quand l'IA produit un écran en quelques minutes, garantir la cohérence avec le Design System, une même façon de travailler et un savoir qui ne se perd pas.
- **Son rôle** : développer avec son équipe un nouveau cadre de travail, puis le formaliser ; créer des skills et gouverner les composants UI pour l'IA.
- **Solution** : un cadre commun (flow design, Design System AI-ready, connaissance, relais) où l'IA génère plusieurs solutions et le designer juge et décide.
- **En pratique** : un skill conçu et testé par elle, avec Claude Code, sur le Design System de ce portfolio.`,deep:`### Design Lead
- **Le Design System change de nature** : ce n'est plus seulement une bibliothèque de composants, c'est le contexte que l'agent charge avant de générer.
- **Un prompt robuste tient en trois clés** : des cas d'usage explicites (succès, erreur, états limites), les règles de gestion, et une auto-vérification exigée de l'IA.
- **Definition of done d'un changement d'interface** : tokens réutilisés, build et tests verts, aucune donnée réelle, sur une branche.
- **Le design versionné comme du code** : changement mineur ou rupture, contrôle automatique avant validation, IA confinée à une zone ciblée.
- **Garde-fous** : aucune donnée réelle, uniquement des données fictives.
- **Vigilance** : un bon premier jet donne une illusion de facilité.`},en:{standard:`### Context
“AI First” design unit at **BNP Paribas CIB**, on the redesign of the credit chain for large corporates.

[[bnp-figures]]

### The problem
The job is shifting: the AI generates, the designer judges. When a screen is produced in minutes, three questions arise: how to guarantee it follows the Design System, how to get the whole team working the same way, and how to keep knowledge from being lost from one person to the next.

### Her role
She developed this new working framework with her team, then formalised it so it could be passed on. She creates skills to standardise and speed up the teams' work, governs the UI components for AI, and prototypes with them day to day.

### The solution
A shared working framework, from research to delivery. It has four parts, detailed below: an AI-readable Design System, organised knowledge, clear roles and handoffs, and a tested skill.

[[flow]]

### AI-ready Design System
Without guardrails, generation speed produces divergence.

[[ds-principles]]

### Knowledge
The UX repository becomes the team's memory, readable by the AI as well as by developers.

[[repo-map]]

### Collaboration
One assistant per role, loaded with the same framework.

[[team-roles]]

[[relay]]

### In practice
To move from framework to practice, she designed, with Claude Code, a skill for this portfolio's Design System: the rules an AI agent reads before creating or changing a screen.

She then tested it: the same request given to two agents, one with the skill, one without.

[[skill-test]]

### Fix the rule, not the result
The skill was not right the first time. After each test she looked at the screens produced, spotted what was wrong, and fixed the rule rather than touching up the screen.

[[skill-lessons]]

It is the same principle as in the team: the AI produces, the designer judges, and that judgement becomes a rule the AI will apply next time.

The file below is the real one: it is also the one the Design System page displays.`,express:`- **Context**: “AI First” design unit at BNP Paribas CIB, credit-chain redesign — ==+5 of 17 modules==, ==~1,500 users==.
- **Problem**: when the AI produces a screen in minutes, guaranteeing consistency with the Design System, one way of working, and knowledge that is not lost.
- **Her role**: developing a new working framework with her team, then formalising it; creating skills and governing the UI components for AI.
- **Solution**: a shared framework (design flow, AI-ready Design System, knowledge, handoffs) where the AI generates several solutions and the designer judges and decides.
- **In practice**: a skill she designed and tested, with Claude Code, on this portfolio's Design System.`,deep:`### Design Lead
- **The Design System changes nature**: no longer just a component library, it is the context the agent loads before generating.
- **A robust prompt has three keys**: explicit use cases (success, error, edge states), the business rules, and a self-check required from the AI.
- **Definition of done for a UI change**: tokens reused, clean build and green tests, no real data, on a branch.
- **Design versioned like code**: minor change or breaking change, automatic check before validation, AI confined to a targeted area.
- **Guardrails**: no real data, mock data only.
- **Watch out**: a good first draft creates an illusion of ease.`}},attachment:"skill",flow:"ux",anchors:!0,followUps:["covenant","ai","designsystem"]},{id:"covenant",question:{fr:"Montre-moi le suivi des clauses de crédit : comment a-t-elle conçu ce suivi assisté par IA pour une banque d'investissement ?",en:"Show me the loan clause monitoring project: how did she design this AI-assisted monitoring for an investment bank?"},chip:{fr:"Banque · Clauses de crédit et IA",en:"Bank · Loan clauses and AI"},keywords:[["covenant",8],["covenants",8],["monitoring",4],["compliance certificate",6],["breach",5],["waiver",4],["matching",4],["rapprochement",4],["extraction",4],["mycreditapp",5],["workspace ai",5],["suivi des engagements",5],["ecran",3],["screen",3],["maquette",4],["mockup",4],["prototype",3],["ux case",5],["cas ux",5]],answer:{fr:{standard:`### Contexte
Dans une **banque d'investissement**, le métier Trade Finance contrôle ses covenants, certificat après certificat. Un projet d'un mois, en binôme avec un développeur.

*Un covenant est un engagement inscrit dans un contrat de crédit, comme un ratio financier à respecter, que la banque vérifie à chaque période.*

### Problématique
Ce contrôle se faisait à la main, dans un outil séparé du reste du système, en passant d'un module à l'autre. Les irritants : des relances répétées pour obtenir les pièces, un délai entre la réception et la saisie, des erreurs de saisie, des calculs refaits par l'analyste.

L'enjeu : réintégrer ce contrôle dans l'outil central, en le **repensant avec l'IA** plutôt qu'en le transposant à l'identique.

### Son rôle
Product Designer du projet. Elle a mené les ateliers métiers, cartographié les parcours, puis conçu et prototypé la solution avec Claude Code, jusqu'à la première livraison.

### La solution
Un seul parcours guidé : l'IA lit le certificat reçu et pré-remplit, l'analyste vérifie chaque valeur et valide.

[[flow]]

### Démarche
1. **Ateliers métiers** : recueil du besoin et de la solution existante.
2. **Parcours métier** : embranchements, dépendances, opportunités d'amélioration.
3. **Parcours utilisateur** : fonctionnalités actuelles et souhaitées.
4. **Prototype** : itéré avec Claude Code, en s'appuyant sur l'*AI Skill* du Design System pour rester conforme aux composants.
5. **Livraison** : contrôles, puis première itération versée au dépôt central.

### Gains
- **Des données fiables** dans l'outil, pour le back-office comme pour le monitoring.
- **Moins de tâches chronophages** : l'IA lit le certificat et pré-remplit, l'analyste ne ressaisit plus.
- **Moins de charge cognitive** : un seul parcours guidé, sans jongler entre le document et deux modules.
- **Fini les allers-retours** entre le module Contrat et le module Covenant.
- **Un certificat traité en une fois**, pour tous ses covenants.
- **Chaque valeur tracée** jusqu'à sa page d'origine.

### Partis pris
- **L'IA propose, l'analyste dispose** : contrat comme covenant, chaque correspondance s'accepte ou se corrige.
- **L'IA est toujours identifiable** : une couleur et une icône dédiées, distinctes des statuts.
- **Chaque valeur est vérifiable** : le document s'ouvre à la page d'où elle vient.
- **Une file pilotée par statut** : sept compteurs disent où en est chaque soumission.

### Cas gérés
| Situation | Réponse du design |
|---|---|
| Certificat manquant dans l'email | Statut *To check*, suite bloquée tant qu'il n'est pas ajouté |
| Pièce jointe illisible | Statut *Error*, aucune donnée extraite |
| Plusieurs contrats possibles | Chacun s'accepte séparément, covenants groupés par contrat |
| Aucun contrat ou covenant trouvé | Sélection ou suivi manuel — pas une erreur |
| IA occupée ou en échec | File d'attente, puis relance ou retour aux documents |
| Valeur différente de celle en base | Alerte avant remplacement |
| Covenant déjà suivi | Signalé comme doublon possible |
| Contrat changé en cours de route | Avertissement : l'extraction est perdue, puis relancée |
| Covenants non validés | Envoi au calendrier bloqué |

### Pilotage
Une fois les valeurs validées, le suivi continue dans le même outil.
- **Vue d'ensemble** : cinq blocs de compteurs, de la validation aux covenants extraits.
- **Statuts de suivi** : *Breached*, *Overdue*, *Upcoming*, *Early warning*, *Waived*.
- **Calendrier par covenant** : seuil, valeur et document justificatif pour chaque période ; les lignes mises à jour par l'IA sont marquées.
- **Traçabilité** : piste d'audit, archivage, amendement ou waiver.
- **Tous types de covenants** : financiers, non financiers et ESG.

### Contrainte technique
Le dépôt manuel passe par l'écran de gestion documentaire existant : liste de documents, fenêtre de dépôt, puis métadonnées à renseigner. Cette contrainte technique n'était pas modifiable dans le cadre du projet ; elle ajoute trois gestes avant que l'IA ne démarre.

Le design la rend lisible : un message indique quel document est attendu, et la suite reste bloquée tant qu'il manque.

### Résultat
- ==17 écrans== navigables, prototypés avec Claude.
- Première itération livrée dans le dépôt central.
- Approche réutilisée sur d'autres objets métiers.
- **Piste suivante** : afficher un indice de confiance de l'IA pour chaque correspondance proposée.`,express:`- **Contexte** : contrôle des covenants (les engagements inscrits dans les contrats de crédit) de Trade Finance, dans une banque d'investissement.
- **Problématique** : un contrôle manuel, dans un outil séparé, avec relances, délais et erreurs de saisie.
- **Son rôle** : Product Designer, en binôme avec un développeur — ateliers, parcours, prototype avec Claude Code.
- **Solution** : l'IA lit et propose, l'analyste valide chaque valeur face à sa source ; certificat manquant, correspondances multiples, échec de l'IA et doublons sont traités.
- **Résultat** : ==17 écrans==, première itération livrée, approche réutilisée.`,deep:`### Design Lead
- **Deux entrées, un seul parcours** : email ou dépôt manuel aboutissent au même stepper.
- **Maître-détail** : covenants extraits à gauche, donnée extraite et covenant du contrat côte à côte à droite.
- **Les états d'erreur font partie du design** : chaque étape asynchrone a son attente, son échec et sa sortie manuelle.
- **Du cas au pattern** : extraction IA, soumission par email et tags de statut repris tels quels sur un autre module.`},en:{standard:`### Context
At an **investment bank**, the Trade Finance business checks its covenants, certificate after certificate. A one-month project, paired with one developer.

*A covenant is a commitment written into a loan agreement, such as a financial ratio to respect, that the bank checks every period.*

### The problem
That control was done by hand, in a tool separate from the rest of the system, moving from one module to another. The pain points: repeated reminders to obtain the documents, a delay between receipt and entry, entry errors, calculations redone by the analyst.

The goal: bring that control back into the central tool by **rethinking it with AI** rather than porting it as it was.

### Her role
Product Designer on the project. She ran the business workshops, mapped the journeys, then designed and prototyped the solution with Claude Code, through to the first delivery.

### The solution
A single guided journey: the AI reads the certificate received and pre-fills, the analyst checks each value and validates.

[[flow]]

### Approach
1. **Business workshops**: gathering the need and the existing solution.
2. **Business journey**: branches, dependencies, improvement opportunities.
3. **User journey**: current and desired features.
4. **Prototype**: iterated with Claude Code, relying on the Design System *AI Skill* to stay compliant with the components.
5. **Delivery**: checks, then a first iteration pushed to the central repository.

### Gains
- **Reliable data** in the tool, for the back office as well as for monitoring.
- **Fewer time-consuming tasks**: the AI reads the certificate and pre-fills, the analyst no longer re-types.
- **Less cognitive load**: one guided journey, no more juggling between the document and two modules.
- **No more back-and-forth** between the Contract module and the Covenant module.
- **One certificate handled in one pass**, for all its covenants.
- **Every value traced** back to its source page.

### Principles
- **The AI suggests, the analyst decides**: contract or covenant, every match can be accepted or corrected.
- **AI is always identifiable**: a dedicated colour and icon, distinct from statuses.
- **Every value is verifiable**: the document opens at the page it comes from.
- **A queue driven by status**: seven counters show where every submission stands.

### Cases handled
| Situation | Design response |
|---|---|
| Certificate missing from the email | *To check* status, next step blocked until it is added |
| Unreadable attachment | *Error* status, no data extracted |
| Several possible contracts | Each is accepted separately, covenants grouped by contract |
| No contract or covenant found | Manual selection or monitoring — not an error |
| AI busy or failing | Queue, then retry or back to the documents |
| Value differs from the stored one | Warning before replacing |
| Covenant already monitored | Flagged as a possible duplicate |
| Contract changed along the way | Warning: the extraction is lost, then re-run |
| Covenants not validated | Push to the calendar blocked |

### Steering
Once the values are validated, monitoring continues in the same tool.
- **Overview**: five blocks of counters, from validation to extracted covenants.
- **Monitoring statuses**: *Breached*, *Overdue*, *Upcoming*, *Early warning*, *Waived*.
- **Calendar per covenant**: threshold, value and supporting document for each period; rows updated by the AI are flagged.
- **Traceability**: audit trail, archiving, amendment or waiver.
- **All covenant types**: financial, non-financial and ESG.

### Technical constraint
Manual upload goes through the existing document-management screen: documents list, upload dialog, then metadata to fill in. This technical constraint could not be changed within the project; it adds three steps before the AI starts.

The design makes it readable: a message states which document is expected, and the next step stays blocked while it is missing.

### Outcome
- ==17 navigable screens==, prototyped with Claude.
- First iteration delivered to the central repository.
- Approach reused on other business objects.
- **Next path**: show an AI confidence score for each suggested match.`,express:`- **Context**: Trade Finance covenant control (the commitments written into loan agreements) at an investment bank.
- **Problem**: a manual control, in a separate tool, with reminders, delays and entry errors.
- **Her role**: Product Designer, paired with one developer — workshops, journeys, prototype with Claude Code.
- **Solution**: the AI reads and suggests, the analyst validates each value against its source; missing certificate, multiple matches, AI failure and duplicates are handled.
- **Outcome**: ==17 screens==, first iteration delivered, approach reused.`,deep:`### Design Lead
- **Two entry points, one journey**: email or manual upload lead to the same stepper.
- **Master-detail**: extracted covenants on the left, extracted data and the contract's covenant side by side on the right.
- **Error states are part of the design**: every asynchronous step has its wait, its failure and its manual way out.
- **From case to pattern**: AI extraction, email submission and status tags reused as-is on another module.`}},attachment:"covenant",flow:"covenant",anchors:!0,followUps:["ai","designsystem","skills"]},{id:"kering",question:{fr:"Parle-moi de l'app Privilege Card du Groupe Kering : comment a-t-elle transformé une carte physique en application utilisée par 40 000 personnes ?",en:"Tell me about the Kering Group Privilege Card app: how did she turn a physical card into an app used by 40,000 people?"},chip:{fr:"Kering — Privilege Card",en:"Kering — Privilege Card"},keywords:[["kering",6],["privilege",6],["luxe",4],["luxury",4],["40k",5],["40 000",5],["40000",5],["carte",3],["card",3],["mobile",3],["application mobile",4],["mobile app",4],["quota",5],["boutique",3],["retail",3]],answer:{fr:{standard:`### Contexte
De septembre 2022 à décembre 2023, Anne-Sophie est Product Designer au sein du **Groupe Kering**. Le projet : **numériser une carte de réduction physique** en une application mobile évolutive, la *Privilege Card*.

### Démarche
- **Comprendre** — recherche utilisateurs, ateliers, audits et cartographies UX de parcours complexes.
- **Concevoir** — conception UI et composants de Design System pensés pour évoluer avec l'application.
- **Valider** — tests utilisateurs itératifs.

### Impact
- ==40 000 utilisateurs== actifs sur l'application.
- **Fiabilisation** de la gestion des quotas d'achat et du respect des restrictions de vente en boutique.`,express:`- **Projet** : carte de réduction physique → application mobile *Privilege Card* (sept. 2022 – déc. 2023).
- **Démarche** : recherche utilisateurs, ateliers, cartographies UX, composants de Design System, tests itératifs.
- **Impact** : ==40 000 utilisateurs== actifs.
- **Métier** : quotas d'achat et restrictions de vente en boutique fiabilisés.`,deep:`### Zoom méthodologie
- **Parcours complexes** : la carte physique portait des règles implicites (quotas, restrictions de vente). Les cartographies UX ont servi à les rendre explicites avant de les traduire en interface.
- **Design System évolutif** : des composants conçus pour absorber de nouvelles fonctionnalités sans redessiner l'application.
- **Boucles courtes** : les tests utilisateurs itératifs ont guidé chaque arbitrage de conception.`},en:{standard:`### Context
From September 2022 to December 2023, Anne-Sophie was a Product Designer at **Kering Group**. The project: **digitising a physical discount card** into a scalable mobile app, the *Privilege Card*.

### Approach
- **Understand** — user research, workshops, UX audits and mapping of complex journeys.
- **Design** — UI design and Design System components built to evolve with the app.
- **Validate** — iterative user testing.

### Impact
- ==40,000 active users== on the app.
- **More reliable** purchase-quota management and in-store sales restrictions.`,express:`- **Project**: physical discount card → *Privilege Card* mobile app (Sep 2022 – Dec 2023).
- **Approach**: user research, workshops, UX mapping, Design System components, iterative testing.
- **Impact**: ==40,000 active users==.
- **Business**: purchase quotas and in-store sales restrictions made reliable.`,deep:`### Methodology zoom
- **Complex journeys**: the physical card carried implicit rules (quotas, sales restrictions). UX maps made them explicit before translating them into the interface.
- **Scalable Design System**: components designed to absorb new features without redrawing the app.
- **Short loops**: iterative user testing guided every design trade-off.`}},followUps:["grdf","bnp","impact"]},{id:"grdf",question:{fr:"Comment a-t-elle mené la refonte éco-conçue et accessible de la plateforme GRDF (Act4Gaz → justdecarb.grdf.fr) ?",en:"How did she lead the eco-designed, accessible redesign of the GRDF platform (Act4Gaz → justdecarb.grdf.fr)?"},chip:{fr:"GRDF · Refonte éco-conçue et RGAA",en:"GRDF · Eco-designed redesign and RGAA"},keywords:[["grdf",6],["rgaa",5],["accessib",5],["a11y",5],["wcag",4],["eco",3],["ecoindex",6],["eco conception",5],["eco design",5],["ecoconcep",5],["justdecarb",6],["act4gaz",6],["rebranding",4],["environnement",4],["environment",4],["sobriete",4],["green",3],["energie",3],["energy",3],["handicap",4],["inclusi",3]],answer:{fr:{standard:`### Contexte
**GRDF** (via mc2i), janvier – mai 2024. La plateforme **Act4Gaz** devient **justdecarb.grdf.fr**.

- **Ambition** : faire de GRDF une référence de la décarbonation en France.
- **Cadre** : une refonte en ==trois mois==, pensée **mobile first**.

### Problématique
Beaucoup de contenus, mais des lecteurs perdus : navigation complexe, contenu mal hiérarchisé, formats mélangés, liens cassés, aucun partage, lecture difficile sur mobile.

Deux exigences en plus : l'**accessibilité** (RGAA) et l'**éco-conception**.

### Son rôle
UX UI Designer : audits, recherche, identité graphique, Design System, maquettes et prototype.

### La solution
Trouver un contenu en trois gestes : la une, un filtre par thématique et par format, la recherche.

### 1 · Le persona
Julien, 28 ans, ingénieur en énergies renouvelables.

[[grdf-persona]]

### 2 · La carte d'expérience
Son parcours sur l'ancienne plateforme : là où il décroche.

[[grdf-map]]

### 3 · Le parcours, avant et après
Chaque friction de l'ancien parcours trouve sa réponse dans le nouveau.

[[flow]]

### 4 · Le moodboard et les partis pris
[[grdf-moodboard]]

**Améliorations et décisions graphiques**

- **Glassmorphisme maîtrisé** : le panneau translucide floute la photo derrière le texte. Le contraste et la lisibilité restent stables, quelle que soit l'image.
- **La couleur porte un sens, jamais seule** : deux verts et un bleu pour les thématiques et les actions, toujours doublés d'un libellé ou d'une icône.
- **De l'air** : un fond clair, une idée par bloc. Moins de charge cognitive, la page se balaie.
- **Hiérarchie typographique nette** : grands titres, texte lisible, chiffres clés au trait qui se voient sans concurrencer le texte.
- **Zones d'action généreuses** : boutons larges et espacés, pensés pour le pouce.

**Optimisation de la navigation**

- **Un menu toujours visible**, identique sur chaque page : plus de bouton « Menu », et un repère stable au clavier comme au lecteur d'écran.
- **Des parcours courts** : la une, un filtre ou la recherche mènent au contenu. Moins de pages chargées, moins de données échangées.
- **Rien ne bouge sans le lecteur** : fini le carrousel automatique. Un contenu à la fois, à lire, passer ou reprendre.
- **Le format annoncé avant le clic** : lecture, audio ou vidéo. Chacun choisit, sans lancer une vidéo par erreur.
- **Une barre fixe en bas sur mobile** : trois rubriques sous le pouce, chacune avec son libellé.

### 5 · Les écrans
Mobile first, puis ordinateur, à partir d'un Design System dédié.

[[grdf-screens]]

### 6 · Avant / Après
[[grdf-compare]]

### Accessibilité
- **Audit RGAA** de l'existant, pour partir des blocages réels.
- **Jamais la couleur seule** : thématique et format sont écrits, avec une icône.
- **Des boutons explicites** : « Retour », « Lire », « Passer ».
- **Le lecteur garde la main** : plus de défilement automatique à la une.
- **Des composants accessibles** dès le Design System.

### Impact
- ==Note C EcoIndex==
- Conformité ==RGAA==
- En ligne : [justdecarb.grdf.fr](https://justdecarb.grdf.fr/)`,express:`- **Contexte** : plateforme Act4Gaz de GRDF, devenue **justdecarb.grdf.fr** (janv. – mai 2024).
- **Problématique** : refondre et rebrander, avec une exigence d'accessibilité (RGAA) et d'éco-conception.
- **Son rôle** : audits, identité graphique, Design System, maquettes et prototypes.
- **Solution** : audits UX & RGAA, nouvelle identité, Design System sobre et accessible, mobile-first.
- **Impact** : ==Note C EcoIndex== + conformité ==RGAA==.`,deep:`### Zoom méthodologie
- **L'audit comme cahier des charges** : les audits UX et RGAA ont défini les contraintes du Design System avant la première maquette.
- **Sobriété par le système** : un Design System volontairement sobre limite ce qui est chargé et affiché — c'est lui qui porte la performance EcoIndex.
- **Accessibilité native** : les règles RGAA sont intégrées aux composants plutôt que vérifiées après coup.
- **Mobile-first** : concevoir d'abord pour le petit écran force à hiérarchiser le contenu.`},en:{standard:`### Context
**GRDF** (through mc2i), January – May 2024. The **Act4Gaz** platform becomes **justdecarb.grdf.fr**.

- **Ambition**: make GRDF a reference in decarbonisation in France.
- **Frame**: a redesign in ==three months==, designed **mobile first**.

### The problem
A lot of content, but lost readers: complex navigation, poorly ranked content, mixed formats, broken links, no sharing, difficult reading on mobile.

Two further requirements: **accessibility** (RGAA) and **eco-design**.

### Her role
UX/UI Designer: audits, research, visual identity, Design System, mockups and prototype.

### The solution
Find content in three moves: the front page, a filter by topic and by format, the search.

### 1 · The persona
Julien, 28, a renewable energy engineer.

[[grdf-persona]]

### 2 · The experience map
His journey on the old platform: where he drops off.

[[grdf-map]]

### 3 · The journey, before and after
Every pain point of the old journey finds its answer in the new one.

[[flow]]

### 4 · The moodboard and design choices
[[grdf-moodboard]]

**Visual improvements and decisions**

- **Controlled glassmorphism**: the translucent panel blurs the photo behind the text. Contrast and readability stay stable, whatever the image.
- **Colour carries meaning, never alone**: two greens and a blue for topics and actions, always doubled with a label or an icon.
- **Breathing room**: a light background, one idea per block. Less cognitive load; the page can be scanned.
- **Clear typographic hierarchy**: large headings, readable text, outlined key figures that show without competing with the text.
- **Generous action areas**: wide, well-spaced buttons, designed for the thumb.

**Navigation optimisation**

- **An always-visible menu**, identical on every page: no more “Menu” button, and a stable landmark for keyboard and screen reader users.
- **Short journeys**: the front page, a filter or the search lead to the content. Fewer pages loaded, less data exchanged.
- **Nothing moves without the reader**: the automatic carousel is gone. One piece of content at a time, to read, skip or come back to.
- **Format announced before the click**: reading, audio or video. Everyone chooses, and no video is launched by mistake.
- **Fixed bottom bar on mobile**: three sections under the thumb, each with its label.

### 5 · The screens
Mobile first, then desktop, from a dedicated Design System.

[[grdf-screens]]

### 6 · Before / After
[[grdf-compare]]

### Accessibility
- **RGAA audit** of the existing platform, to start from the real blockers.
- **Never colour alone**: topic and format are written out, with an icon.
- **Explicit buttons**: “Back”, “Read”, “Skip”.
- **The reader stays in control**: no more auto-advancing front page.
- **Accessible components** from the Design System up.

### Impact
- ==EcoIndex grade C==
- ==RGAA== compliance
- Live: [justdecarb.grdf.fr](https://justdecarb.grdf.fr/)`,express:`- **Context**: GRDF's Act4Gaz platform, now **justdecarb.grdf.fr** (Jan – May 2024).
- **Problem**: redesign and rebrand, with accessibility (RGAA) and eco-design requirements.
- **Her role**: audits, visual identity, Design System, mockups and prototypes.
- **Solution**: UX & RGAA audits, new identity, lean accessible Design System, mobile-first.
- **Impact**: ==EcoIndex grade C== + ==RGAA== compliance.`,deep:`### Methodology zoom
- **Audit as the brief**: the UX and RGAA audits defined the Design System's constraints before the first mockup.
- **Lean by system**: a deliberately lean Design System limits what gets loaded and displayed — that is what carries the EcoIndex performance.
- **Accessibility built in**: RGAA rules live inside the components rather than being checked afterwards.
- **Mobile-first**: designing for the small screen first forces content prioritisation.`}},attachment:"grdf",flow:"grdf",anchors:!0,followUps:["covenant","designsystem","impact"]},{id:"cdc",question:{fr:"Quelle a été sa démarche pour refondre un outil métier de gestion de carrière à la Caisse des Dépôts ?",en:"What was her approach to redesigning a career-management business tool at Caisse des Dépôts?"},chip:{fr:"Caisse des Dépôts — Outil métier",en:"Caisse des Dépôts — Business tool"},keywords:[["caisse des depots",6],["cdc",5],["outil metier",5],["business tool",5],["emaj",6],["rh",4],["hr",4],["carriere",4],["career management",5],["ressources humaines",5],["human resources",5],["outil interne",4],["internal tool",4],["atelier",3],["workshop",3],["co creation",4],["secteur public",4],["public sector",4]],answer:{fr:{standard:`### Contexte
D'avril à août 2024, Anne-Sophie est UX UI Designer pour **La Caisse des Dépôts** (via mc2i), sur **Emaj**, l'outil interne de gestion stratégique des carrières.

### Problématique
Refondre cet outil métier en partant des besoins réels de ses utilisateurs, et aligner des parties prenantes différentes autour d'une même solution.

### Son rôle
Elle mène les entretiens et l'analyse de données, planifie et anime les ateliers, prototype, teste et coordonne les activités entre équipes.

### La solution
1. **Entretiens utilisateurs** pour comprendre les usages réels.
2. **Analyse de données** pour objectiver les constats.
3. **Ateliers de co-création** qu'elle facilite avec les parties prenantes.
4. **Prototypage haute fidélité**.
5. **Tests utilisateurs** pour valider les parcours.
6. **Coordination inter-équipes** tout au long du projet.

### Ce que cette mission montre
Sa capacité à mener un cycle de discovery complet sur un outil métier, et à aligner des équipes différentes autour d'une même vision.`,express:`- **Contexte** : **Emaj**, outil interne de gestion stratégique des carrières de la Caisse des Dépôts (avril – août 2024).
- **Problématique** : refondre l'outil à partir des besoins réels, en alignant les parties prenantes.
- **Son rôle** : entretiens, analyse, animation d'ateliers, prototypage, tests, coordination.
- **Solution** : discovery (entretiens + données), ateliers de co-création, prototype haute fidélité validé par des tests utilisateurs.`,deep:`### Zoom méthodologie
- **Qualitatif + quantitatif** : entretiens et analyse de données se complètent — les uns expliquent ce que les autres mesurent.
- **Co-création** : les ateliers font émerger les arbitrages avec les métiers plutôt que de les leur présenter.
- **Prototype comme outil de décision** : la haute fidélité permet de tester des parcours réalistes avant tout développement.`},en:{standard:`### Context
From April to August 2024, Anne-Sophie was a UX/UI Designer for **La Caisse des Dépôts** (through mc2i), on **Emaj**, the internal strategic career-management tool.

### The problem
Redesign this business tool starting from its users' real needs, and align different stakeholders around one solution.

### Her role
She ran the interviews and data analysis, planned and facilitated the workshops, prototyped, tested and coordinated activities across teams.

### The solution
1. **User interviews** to understand real usage.
2. **Data analysis** to back up the findings.
3. **Co-creation workshops** that she facilitated with stakeholders.
4. **High-fidelity prototyping**.
5. **User testing** to validate the journeys.
6. **Cross-team coordination** throughout the project.

### What this engagement shows
Her ability to run a full discovery cycle on a business tool and align different teams around a shared vision.`,express:`- **Context**: **Emaj**, Caisse des Dépôts' internal strategic career-management tool (Apr – Aug 2024).
- **Problem**: redesign the tool from real needs, aligning the stakeholders.
- **Her role**: interviews, analysis, workshop facilitation, prototyping, testing, coordination.
- **Solution**: discovery (interviews + data), co-creation workshops, high-fidelity prototype validated by user testing.`,deep:`### Methodology zoom
- **Qualitative + quantitative**: interviews and data analysis complement each other — one explains what the other measures.
- **Co-creation**: workshops surface trade-offs with business teams rather than presenting them as done.
- **Prototype as a decision tool**: high fidelity lets realistic journeys be tested before any development.`}},followUps:["bnp","softskills","skills"]},{id:"background",question:{fr:"Quel est son parcours, de la mode au Product Design ?",en:"What is her career path, from fashion to Product Design?"},chip:{fr:"De la mode au Product Design",en:"From fashion to Product Design"},keywords:[["parcours",5],["experience",4],["eden park",6],["eden",4],["mode",3],["fashion",4],["balmain",6],["indress",6],["broderie",5],["embroider",5],["creati",3],["histoire",3],["career",3],["background",4],["avant",2],["textile",4],["reconversion",5],["e commerce",4],["ecommerce",4],["trajectoire",4],["journey",3],["history",3],["work history",5],["arts",3]],answer:{fr:{standard:`Un parcours en trois temps : **créer, piloter, concevoir**.

### 2019 — La création
Designer Broderie chez **Balmain** et Designer Studio chez **Indress**, à Paris. Elle y forge son œil : exigence du détail, sens de la matière et de la composition.

### 2021 – 2022 — Le digital
Coordinatrice de contenu digital & de projet chez **Eden Park** : pilotage de projets digitaux de bout en bout, calendrier éditorial, maintenance UX du site, production visuelle pour les campagnes SMO/SEA. Résultat : ==+20 % de ventes e-commerce== en 1 an.

### 2022 – 2023 — Le produit
Product Designer au sein du **Groupe Kering** : l'application *Privilege Card*, ==40 000 utilisateurs==.

### Depuis 2024 — Design Ops & IA
Product Designer chez **mc2i** : GRDF, La Caisse des Dépôts, puis **BNP Paribas CIB** au sein des équipes IA et UX.

Ce fil conducteur explique son profil : un héritage créatif mis au service de produits complexes et de l'outillage des équipes.`,express:`- **2019** : Designer Broderie chez Balmain, Designer Studio chez Indress.
- **2021 – 2022** : Eden Park, contenu digital & projet — ==+20 % de ventes e-commerce==.
- **2022 – 2023** : Product Designer, Groupe Kering — ==40 000 utilisateurs==.
- **Depuis 2024** : mc2i — GRDF, Caisse des Dépôts, BNP Paribas CIB (IA & UX).`},en:{standard:`A path in three movements: **create, coordinate, design**.

### 2019 — Craft
Embroidery Designer at **Balmain** and Studio Designer at **Indress**, in Paris. This is where she trained her eye: attention to detail, a sense of material and composition.

### 2021 – 2022 — Digital
Digital Content & Project Coordinator at **Eden Park**: end-to-end digital project management, editorial calendar, website UX maintenance, visual production for SMO/SEA campaigns. Result: ==+20% e-commerce sales== in one year.

### 2022 – 2023 — Product
Product Designer at **Kering Group**: the *Privilege Card* app, ==40,000 users==.

### Since 2024 — Design Ops & AI
Product Designer at **mc2i**: GRDF, La Caisse des Dépôts, then **BNP Paribas CIB** within the AI and UX teams.

That thread explains her profile: a creative heritage put to work on complex products and team tooling.`,express:`- **2019**: Embroidery Designer at Balmain, Studio Designer at Indress.
- **2021 – 2022**: Eden Park, digital content & project — ==+20% e-commerce sales==.
- **2022 – 2023**: Product Designer, Kering Group — ==40,000 users==.
- **Since 2024**: mc2i — GRDF, Caisse des Dépôts, BNP Paribas CIB (AI & UX).`}},followUps:["education","bnp","softskills"],actions:["cv"]},{id:"skills",question:{fr:"Quelles sont ses compétences clés ?",en:"What are her key skills?"},chip:{fr:"Ses compétences clés",en:"Her key skills"},keywords:[["competence",5],["skill",3],["expertise",4],["savoir faire",4],["capabilit",3],["force",3],["strength",3],["discovery",4],["user research",5],["recherche utilisateur",5],["ux",2],["ui",2],["methode",3],["method",3],["process",3],["prototyp",3],["test utilisateur",4],["user test",4],["hard skills",5],["sait elle faire",4],["can she do",4]],answer:{fr:{standard:`Les compétences d'Anne-Sophie s'organisent en trois piliers.

### Design & Prototypage
Figma (Expert), Storybook, Zeroheight, After Effects, Illustrator, Photoshop.

### IA & Vibecoding
Claude Code, *AI Skills* (création de skills, usage au quotidien), Prompt Engineering, Gemini, Midjourney, Adobe Firefly.

### Product & Tech
Discovery, Design Ops, Design System, rédaction de specs \`.md\`, HTML/CSS (Handoff Design-to-Dev), Jira, Confluence.

### En pratique
| Savoir-faire | Mis en œuvre chez |
|---|---|
| Recherche utilisateurs & ateliers | Kering, Caisse des Dépôts |
| Audits UX & accessibilité RGAA | GRDF |
| Design System (création, évolution, cadrage pour l'IA) | GRDF, Kering, BNP Paribas CIB |
| AI Skills & vibecoding | BNP Paribas CIB |`,express:`- **Design** : Figma (Expert), Storybook, Zeroheight, suite Adobe.
- **IA** : Claude Code, *AI Skills*, Prompt Engineering, Gemini, Midjourney, Firefly.
- **Product & Tech** : Discovery, Design Ops, Design System, specs \`.md\`, HTML/CSS.
- **Terrain** : recherche utilisateurs, ateliers, audits RGAA, tests utilisateurs.`,deep:`### Ce qui est rare dans cette combinaison
- **Du Figma au code** : HTML/CSS pour le handoff et *vibecoding* pour prototyper — elle parle le langage des développeurs.
- **Du composant à la règle** : Storybook et Zeroheight pour documenter, AI Skills pour rendre cette documentation actionnable par un agent.
- **Du pixel au process** : la même personne conçoit l'interface et le workflow qui la produit.`},en:{standard:`Anne-Sophie's skills are organised around three pillars.

### Design & Prototyping
Figma (Expert), Storybook, Zeroheight, After Effects, Illustrator, Photoshop.

### AI & Vibecoding
Claude Code, *AI Skills* (creating skills, daily use), Prompt Engineering, Gemini, Midjourney, Adobe Firefly.

### Product & Tech
Discovery, Design Ops, Design System, \`.md\` spec writing, HTML/CSS (Design-to-Dev handoff), Jira, Confluence.

### In practice
| Know-how | Applied at |
|---|---|
| User research & workshops | Kering, Caisse des Dépôts |
| UX & RGAA accessibility audits | GRDF |
| Design System (creation, evolution, framing for AI) | GRDF, Kering, BNP Paribas CIB |
| AI Skills & vibecoding | BNP Paribas CIB |`,express:`- **Design**: Figma (Expert), Storybook, Zeroheight, Adobe suite.
- **AI**: Claude Code, *AI Skills*, Prompt Engineering, Gemini, Midjourney, Firefly.
- **Product & Tech**: Discovery, Design Ops, Design System, \`.md\` specs, HTML/CSS.
- **Field**: user research, workshops, RGAA audits, user testing.`,deep:`### What is rare in this combination
- **From Figma to code**: HTML/CSS for handoff and *vibecoding* for prototyping — she speaks the developers' language.
- **From component to rule**: Storybook and Zeroheight to document, AI Skills to make that documentation actionable by an agent.
- **From pixel to process**: the same person designs the interface and the workflow that produces it.`}},followUps:["stack","ai","designsystem"]},{id:"stack",question:{fr:"Quels outils et quelle stack utilise-t-elle au quotidien ?",en:"What tools and stack does she use day to day?"},chip:{fr:"Ses outils & sa stack",en:"Her tools & stack"},keywords:[["stack",6],["outil",5],["tool",5],["figma",5],["logiciel",4],["software",4],["storybook",5],["zeroheight",5],["jira",5],["confluence",5],["html",4],["css",4],["code",3],["midjourney",5],["gemini",5],["firefly",5],["adobe",4],["photoshop",5],["illustrator",5],["after effects",5],["techno",4],["developp",3],["handoff",4]],answer:{fr:{standard:`Voici la stack d'Anne-Sophie, de la conception au handoff.

| Usage | Outils |
|---|---|
| **Conception & prototypage** | Figma (Expert) |
| **Documentation Design System** | Storybook, Zeroheight |
| **Motion & création visuelle** | After Effects, Illustrator, Photoshop |
| **IA — production** | Claude Code (*vibecoding*, *AI Skills*), Prompt Engineering |
| **IA — exploration** | Gemini, Midjourney, Adobe Firefly |
| **Handoff Design-to-Dev** | Specs \`.md\`, HTML/CSS |
| **Pilotage** | Jira, Confluence |

### Sa stack type sur un projet
\`\`\`
Figma  →  Design System (Storybook · Zeroheight)
       →  AI Skills (règles & guidelines)
       →  Claude Code (prototype fonctionnel)
       →  specs .md  →  handoff développeurs
\`\`\``,express:`- **Design** : Figma (Expert), Storybook, Zeroheight.
- **IA** : Claude Code, AI Skills, Gemini, Midjourney, Adobe Firefly.
- **Création** : After Effects, Illustrator, Photoshop.
- **Delivery** : specs \`.md\`, HTML/CSS, Jira, Confluence.`},en:{standard:`Here is Anne-Sophie's stack, from design to handoff.

| Use | Tools |
|---|---|
| **Design & prototyping** | Figma (Expert) |
| **Design System documentation** | Storybook, Zeroheight |
| **Motion & visual creation** | After Effects, Illustrator, Photoshop |
| **AI — production** | Claude Code (*vibecoding*, *AI Skills*), Prompt Engineering |
| **AI — exploration** | Gemini, Midjourney, Adobe Firefly |
| **Design-to-Dev handoff** | \`.md\` specs, HTML/CSS |
| **Delivery tracking** | Jira, Confluence |

### Her typical project stack
\`\`\`
Figma  →  Design System (Storybook · Zeroheight)
       →  AI Skills (rules & guidelines)
       →  Claude Code (functional prototype)
       →  .md specs  →  developer handoff
\`\`\``,express:`- **Design**: Figma (Expert), Storybook, Zeroheight.
- **AI**: Claude Code, AI Skills, Gemini, Midjourney, Adobe Firefly.
- **Creative**: After Effects, Illustrator, Photoshop.
- **Delivery**: \`.md\` specs, HTML/CSS, Jira, Confluence.`}},followUps:["ai","skills","designsystem"]},{id:"designsystem",question:{fr:"Quelle est son expérience en Design System ?",en:"What is her Design System experience?"},chip:{fr:"Son expérience Design System",en:"Her Design System experience"},keywords:[["design system",7],["designsystem",7],["composant",4],["component",4],["token",4],["gouvernance",5],["governance",5],["bibliotheque",4],["library",4],["ds",3],["dette design",5],["design debt",5],["conformite",3],["compliance",3],["documentation",3]],answer:{fr:{standard:`Le Design System est le fil rouge du parcours d'Anne-Sophie : elle en a **créé** un, **fait évoluer** un autre, et **cadré** un troisième pour l'IA.

| Contexte | Son rôle |
|---|---|
| **GRDF** | Création d'un Design System dédié, sobre et accessible (RGAA) |
| **Groupe Kering** | Composants de Design System évolutifs pour l'app Privilege Card |
| **BNP Paribas CIB** | Gouvernance des composants UI pour l'IA ; création de skills pour standardiser et accélérer le travail des équipes |

### Sa spécificité : le Design System lisible par l'IA
Chez BNP Paribas CIB, elle a contribué à poser quatre principes : le Design System comme source de vérité, une double bibliothèque en miroir, aucune valeur inventée, une boucle courte avec revue. Pour ce portfolio, elle a conçu et testé son propre skill avec Claude Code.

### Outils
Figma (Expert), Storybook, Zeroheight.`,express:`- **GRDF** : Design System dédié, sobre et accessible (RGAA).
- **Kering** : composants évolutifs pour une app à ==40 000 utilisateurs==.
- **BNP Paribas CIB** : cadrage d'un Design System lisible par l'IA, avec l'équipe.
- **Outils** : Figma (Expert), Storybook, Zeroheight.`,deep:`### Sa vision du Design System
- **Une source de vérité** : la bibliothèque de composants, documentée (Storybook, Zeroheight).
- **Des règles explicites** : ce qui n'est pas écrit ne peut être ni appliqué par un agent, ni vérifié par un designer.
- **Une conformité assistée** : un skill signale les écarts au moment de la production, pas en fin de cycle.
- **Un handoff structuré** : specs \`.md\` cohérentes avec le Design System, du prototype au développement.`},en:{standard:`The Design System is the common thread of Anne-Sophie's career: she **created** one, **evolved** another, and **framed** a third for AI.

| Context | Her role |
|---|---|
| **GRDF** | Creation of a dedicated, lean and accessible (RGAA) Design System |
| **Kering Group** | Scalable Design System components for the Privilege Card app |
| **BNP Paribas CIB** | Governance of UI components for AI; creation of skills to standardise and speed up the teams' work |

### Her specificity: an AI-readable Design System
At BNP Paribas CIB, she helped set four principles: the Design System as source of truth, a mirrored double library, no invented value, a short loop with review. For this portfolio, she designed and tested her own skill with Claude Code.

### Tools
Figma (Expert), Storybook, Zeroheight.`,express:`- **GRDF**: dedicated, lean and accessible (RGAA) Design System.
- **Kering**: scalable components for an app with ==40,000 users==.
- **BNP Paribas CIB**: framing an AI-readable Design System, with the team.
- **Tools**: Figma (Expert), Storybook, Zeroheight.`,deep:`### Her view of the Design System
- **One source of truth**: the component library, documented (Storybook, Zeroheight).
- **Explicit rules**: what isn't written down can neither be applied by an agent nor checked by a designer.
- **Assisted compliance**: a skill flags deviations at production time, not at the end of the cycle.
- **Structured handoff**: \`.md\` specs consistent with the Design System, from prototype to development.`}},attachment:"ds",followUps:["ai","grdf","stack"]},{id:"vitalize",question:{fr:"Parle-moi de Vitaliz : comment a-t-elle mené une étude UX complète, des personas à l'application ?",en:"Tell me about Vitaliz: how did she run a full UX study, from personas to the app?"},chip:{fr:"Vitaliz · Des personas à l’application",en:"Vitaliz · From personas to the app"},keywords:[["vitalize",9],["vitaliz",9],["bracelet",7],["montre",6],["watch",6],["wristband",7],["blueprint",7],["service blueprint",8],["charte graphique",6],["brand guidelines",6],["projet de master",6],["master project",6],["master 2",5],["sport",4],["interview",4],["persona",3],["experience map",4],["carte d'experience",4]],answer:{fr:{standard:`### Contexte
Dernier projet de Master : imaginer une marque de bracelets connectés de sport, Vitaliz, et concevoir son application mobile, des personas aux supports promotionnels. Le bracelet suit et aide à améliorer tout ce qui compte pour la pratique sportive et le quotidien : activité, sommeil, alimentation, santé.

*Projet d'école : marque fictive.*

### Problématique
Le marché du bracelet connecté est saturé, et l'acheteur doute : quel modèle choisir, et les données sont-elles fiables ? Comment faire exister une nouvelle marque, et rassurer avant l'achat ?

### Son rôle
Cibles et personas, carte d'expérience, service blueprint, écrans et prototype de l'application, identité de marque et charte graphique, supports promotionnels.

### La solution
Trois décisions de conception, chacune partie d'un besoin de la cible, et une marque pour les porter. Sa signature : « Votre vie, au centre de tout ».

**Un seul modèle par persona** : l'acheteur n'a plus à comparer une gamme entière, il reconnaît le bracelet fait pour lui.

### 1 · La cible
Quatre cibles, de la plus large au cœur de cible : des actifs urbains de 27 à 37 ans, qui veulent rester motivés, suivre leur progression et relier le bracelet à leurs autres appareils.

*Personas et parcours sont des hypothèses de travail : l'exercice ne prévoyait pas d'utilisateurs réels.*

[[vitalize-persona]]

- **Sa motivation** : un suivi fiable, des données poussées, une interface intuitive.
- **Ses freins avant l'achat** : la robustesse du produit, la fiabilité des données de sport et de santé.

[[vitalize-map]]

- **Le doute grandit jusqu'à la décision** : motivé au départ, puis perdu devant l'offre, prudent, inquiet de se tromper.
- **Côté service**, un blueprint déroule le même parcours, de la prise de conscience au support : ce que la marque montre, et ce qu'elle doit faire en coulisses.

### 2 · Un programme à soi
[[vitaliz-decision-1]]

### 3 · Des données choisies
[[vitaliz-decision-2]]

### 4 · L'envie de revenir
[[vitaliz-decision-3]]

### 5 · La marque
[[vitalize-brand]]

- **Un logo en mouvement** : des lettres coupées, un « V » qui arrive comme un saut. La version miniature dessine une attache de montre.
- **Une charte qui encadre l'usage** : zones de protection, tailles minimales, interdits, échelle typographique.
- **Une marque pour tous, pas seulement pour les grands sportifs**. La garantie de trois ans répond au premier frein du persona : la fiabilité.

[[vitalize-shop]]

### Ce que ce projet montre
Un raisonnement tenu de bout en bout : un besoin de la cible, une décision, un écran. Et une marque construite pour porter l'ensemble.`,express:`- **Contexte** : dernier projet de Master — une marque de bracelets connectés de sport et son application mobile, pour suivre activité, sommeil, alimentation et santé. Projet d'école, marque fictive.
- **Problématique** : faire exister une nouvelle marque sur un marché saturé, et rassurer sur la fiabilité avant l'achat.
- **Son rôle** : personas, parcours, blueprint, identité, prototype, supports.
- **Solution** : un programme personnalisé, un accueil aux informations choisies, des challenges et un classement entre amis pour revenir ; un seul modèle par persona et une marque rassurante.`},en:{standard:`### Context
Final Master's project: invent a brand of connected sports wristbands, Vitaliz, and design its mobile app, from personas to promotional material. The wristband tracks and helps improve everything that matters for sport and daily life: activity, sleep, nutrition, health.

*School project: fictional brand.*

### The problem
The connected wristband market is saturated, and buyers hesitate: which model to choose, and is the data reliable? How do you make a new brand exist, and reassure before purchase?

### Her role
Audiences and personas, experience map, service blueprint, app screens and prototype, brand identity and guidelines, promotional material.

### The solution
Three design decisions, each starting from a need of the audience, and a brand to carry them. Its tagline: “Votre vie, au centre de tout” (your life, at the centre of everything).

**One model per persona**: buyers no longer have to compare a whole range, they recognise the wristband made for them.

### 1 · The audience
Four audiences, from the broadest to the core target: urban professionals aged 27 to 37 who want to stay motivated, track their progress and connect the wristband to their other devices.

*Personas and journeys are working hypotheses: the exercise did not involve real users.*

[[vitalize-persona]]

- **His motivation**: reliable tracking, detailed data, an intuitive interface.
- **His barriers before buying**: how robust the product is, how reliable the sports and health data are.

[[vitalize-map]]

- **Doubt grows until the decision**: motivated at first, then lost in the offer, cautious, worried about choosing wrong.
- **On the service side**, a blueprint lays out the same journey, from awareness to support: what the brand shows, and what it has to do backstage.

### 2 · A programme of your own
[[vitaliz-decision-1]]

### 3 · Chosen data
[[vitaliz-decision-2]]

### 4 · A reason to come back
[[vitaliz-decision-3]]

### 5 · The brand
[[vitalize-brand]]

- **A logo in motion**: cut letters, a “V” that lands like a jump. The compact version draws a watch clasp.
- **Guidelines that frame its use**: clear space, minimum sizes, don'ts, type scale.
- **A brand for everyone, not only for serious athletes**. The three-year warranty answers the persona's first barrier: reliability.

[[vitalize-shop]]

### What this project shows
Reasoning held from end to end: a need of the audience, a decision, a screen. And a brand built to carry it all.`,express:`- **Context**: final Master's project — a brand of connected sports wristbands and its mobile app, to track activity, sleep, nutrition and health. School project, fictional brand.
- **Problem**: make a new brand exist in a saturated market, and reassure on reliability before purchase.
- **Her role**: personas, journeys, blueprint, identity, prototype, promotional material.
- **Solution**: a personalised programme, a home screen with chosen information, challenges and a ranking among friends to come back; one model per persona and a reassuring brand.`}},attachment:"vitalize",anchors:!0,followUps:["bloombar","rebrand","grdf"]},{id:"bloombar",question:{fr:"Parle-moi de Bloom Bar : comment a-t-elle créé l'univers visuel d'un nouveau produit ?",en:"Tell me about Bloom Bar: how did she create the visual world of a new product?"},chip:{fr:"Bloom Bar · Direction artistique",en:"Bloom Bar · Art direction"},keywords:[["bloom bar",9],["bloombar",9],["bloom",7],["barre",5],["cereale",5],["fleur",5],["flower",5],["illustration 3d",8],["3d",6],["packaging",7],["direction artistique",5],["art direction",5],["illustrator",4]],answer:{fr:{standard:`### Contexte
Projet de Master 2, en 2023 : inventer une marque et la direction artistique d'un nouveau produit. Bloom Bar : des barres de céréales aux fleurs, fabriquées en France.

*Projet d'école : marque fictive.*

### Problématique
Une barre de céréales se perd au milieu de dizaines d'autres. Comment rendre désirable une saveur inattendue, la fleur, et donner envie de goûter ?

### Son rôle
Direction artistique, charte graphique et toutes les illustrations, dessinées en 3D sous Illustrator, jusqu'au packaging et à la page d'accueil.

### La solution
Un univers gourmand et joyeux, où chaque fleur devient un objet en volume que l'on a envie de croquer.

### 1 · L'univers
[[bloombar-hero]]

- **Des fleurs en relief**, brillantes comme des bonbons : la fleur n'est plus un décor, elle devient l'ingrédient.
- **Quatre couleurs franches**, rouge, rose, bleu et jaune, sur des fonds pastel : gourmand sans être enfantin.
- **Une bibliothèque de fleurs** déclinée en dizaines de variantes, pour composer chaque visuel sans jamais se répéter.

### 2 · Le packaging
[[bloombar-box]]

- **L'emballage reprend le volume des fleurs** : il semble gonflé, et le nom se lit en relief.
- **Une barre par saveur, une couleur par barre** : on reconnaît le goût avant de lire l'étiquette.

### 3 · De la structure à l'univers
La structure de la page existait ; la direction artistique lui donne son identité. Faites défiler les deux versions.

[[bloombar-screens]]

### Ce que ce projet montre
Une direction artistique complète, de l'illustration 3D au packaging : un savoir-faire visuel qui nourrit aujourd'hui ses interfaces.`,express:`- **Contexte** : projet de Master 2 en 2023 — inventer une marque et la direction artistique de Bloom Bar, des barres de céréales aux fleurs. Projet d'école, marque fictive.
- **Problématique** : rendre désirable une saveur inattendue, la fleur.
- **Son rôle** : direction artistique, charte et illustrations 3D sous Illustrator, jusqu'au packaging et à la page d'accueil.
- **Solution** : des fleurs en relief, quatre couleurs franches et un packaging qui reprend le même volume.`},en:{standard:`### Context
Master's year 2 project, in 2023: invent a brand and the art direction for a new product. Bloom Bar: cereal bars with flowers, made in France.

*School project: fictional brand.*

### The problem
A cereal bar gets lost among dozens of others. How do you make an unexpected flavour, the flower, desirable, and make people want to taste it?

### Her role
Art direction, brand guidelines and every illustration, drawn in 3D with Illustrator, down to the packaging and the home page.

### The solution
A joyful, indulgent world where each flower becomes an object in relief you want to bite into.

### 1 · The world
[[bloombar-hero]]

- **Flowers in relief**, shiny like sweets: the flower is no longer decoration, it becomes the ingredient.
- **Four bold colours**, red, pink, blue and yellow, on pastel backgrounds: indulgent without being childish.
- **A library of flowers** in dozens of variants, to compose every visual without repeating itself.

### 2 · The packaging
[[bloombar-box]]

- **The wrapper takes on the volume of the flowers**: it looks inflated, and the name reads in relief.
- **One bar per flavour, one colour per bar**: you recognise the taste before reading the label.

### 3 · From structure to world
The page structure already existed; the art direction gives it its identity. Scroll both versions.

[[bloombar-screens]]

### What this project shows
A complete art direction, from 3D illustration to packaging: a visual craft that feeds her interfaces today.`,express:`- **Context**: Master's year 2 project in 2023 — invent a brand and the art direction for Bloom Bar, cereal bars with flowers. School project, fictional brand.
- **Problem**: make an unexpected flavour, the flower, desirable.
- **Her role**: art direction, brand guidelines and 3D illustrations in Illustrator, down to the packaging and the home page.
- **Solution**: flowers in relief, four bold colours and packaging with the same volume.`}},anchors:!0,followUps:["vitalize","rebrand","grdf"]},{id:"rebrand",question:{fr:"Parle-moi du rebranding de McDonald's : comment a-t-elle repositionné une marque connue pour une autre cible ?",en:"Tell me about the McDonald's rebranding: how did she reposition a well-known brand for a different audience?"},chip:{fr:"McDonald’s · Rebranding",en:"McDonald’s · Rebranding"},keywords:[["mcdo",7],["mcdonald",7],["mc donald",7],["rebranding",6],["rebrand",6],["identite visuelle",6],["visual identity",6],["direction artistique",6],["art direction",6],["logo",5],["branding",5],["photoshop",5],["illustrator",5],["montage photo",5],["projet perso",5],["projet personnel",5],["personal project",5],["burger",4]],answer:{fr:{standard:`### Contexte
Exercice libre de rebranding, en Master 1 à la Digital School of Paris. La consigne : reprendre une marque existante et la faire parler à une autre cible. Marque choisie : McDonald's.

*Projet d'école, sans lien avec McDonald's.*

### Problématique
Tout le monde connaît la marque : rapide, bon marché, standardisée. Comment en faire une adresse plus haut de gamme, plus saine et toujours familiale, sans la rendre méconnaissable ?

### Son rôle
Direction artistique complète : logo, palette, typographies, messages, montages photo (Photoshop, Illustrator), maquettes ordinateur et mobile (Figma).

### La solution
Un McDonald's « rétro chic » : garder les codes que l'on reconnaît, changer ce qu'ils racontent.

### 1 · La cible
Des familles urbaines, des parents de 30 à 45 ans attentifs à ce qu'ils mangent. Ils veulent un vrai moment à table avec leurs enfants : de bons produits, un cadre confortable, et le plaisir du burger intact.

### 2 · Le logo
[[rebrand-logo]]

- **Des cercles à la place des arches** : un clin d'œil aux cercles des Looney Tunes, pour garder le côté famille dans une identité rétro.
- **Le rouge et le jaune restent**, adoucis : on reconnaît la marque. **Le vert s'ajoute**, pour le frais.
- **Deux typographies** : un « Mc » à empattements, élégant ; un « Donald's » rond et gras, convivial. Le haut de gamme et la famille dans le même logo.

### 3 · L'univers photo
[[rebrand-hero]]

- **Le burger devient un objet précieux** : posé dans des blocs de verre coloré, par montage photo.
- **Un burger vert à côté du classique** : le choix existe, le plaisir reste. C'est le sens de « I prefer that ».
- **Un décor de restaurant**, pas de fast-food : banquettes de velours rouge, laiton, lumière douce.

### 4 · Les messages
- **« Le confort McDonald's »** : on s'installe, on ne fait plus que passer.
- **« Faites la connaissance de nos producteurs »** et **« La transparence »** : l'origine des produits devient un argument.
- **« Le McDonald's intemporel »** : la marque assume son histoire.
- **Commander, récupérer, savourer** : le parcours reste simple, en trois étapes.

### 5 · Les écrans
Ordinateur et mobile : faites défiler chaque maquette.

[[rebrand-screens]]

### Ce que ce projet montre
Une identité construite de bout en bout, du logo aux écrans : la direction artistique au service d'un positionnement.`,express:`- **Contexte** : exercice libre de rebranding en Master 1 — faire parler McDonald's à une autre cible. Projet d'école, sans lien avec la marque.
- **Problématique** : rendre la marque plus haut de gamme, plus saine et familiale, sans la rendre méconnaissable.
- **Son rôle** : direction artistique complète — logo, palette, typographies, messages, montages photo, maquettes.
- **Solution** : un McDonald's « rétro chic », du logo aux écrans ordinateur et mobile.`},en:{standard:`### Context
A free rebranding exercise, in the first year of a Master's at the Digital School of Paris. The brief: take an existing brand and make it speak to a different audience. Brand chosen: McDonald's.

*School project, not affiliated with McDonald's.*

### The problem
Everyone knows the brand: fast, cheap, standardised. How do you turn it into a more premium, healthier and still family-friendly place, without making it unrecognisable?

### Her role
Full art direction: logo, palette, typography, messages, photo compositing (Photoshop, Illustrator), desktop and mobile mockups (Figma).

### The solution
A “retro chic” McDonald's: keep the codes people recognise, change what they say.

### 1 · The audience
Urban families, parents aged 30 to 45 who care about what they eat. They want a real moment at the table with their children: good produce, a comfortable setting, and the pleasure of the burger intact.

### 2 · The logo
[[rebrand-logo]]

- **Circles instead of the arches**: a nod to the Looney Tunes rings, to keep the family feel within a retro identity.
- **Red and yellow stay**, softened: the brand is recognisable. **Green is added**, for freshness.
- **Two typefaces**: an elegant serif “Mc”; a round, bold, friendly “Donald's”. Premium and family in the same logo.

### 3 · The photographic world
[[rebrand-hero]]

- **The burger becomes a precious object**: set inside blocks of coloured glass, through photo compositing.
- **A green burger next to the classic one**: the choice exists, the pleasure stays. That is the meaning of “I prefer that”.
- **A restaurant setting**, not a fast-food one: red velvet banquettes, brass, soft light.

### 4 · The messages
- **“Le confort McDonald's”** (comfort): you settle in instead of passing through.
- **“Meet our producers”** and **“Transparency”**: where the produce comes from becomes an argument.
- **“The timeless McDonald's”**: the brand owns its history.
- **Order, collect, enjoy**: the journey stays simple, in three steps.

### 5 · The screens
Desktop and mobile: scroll each mockup.

[[rebrand-screens]]

### What this project shows
An identity built end to end, from the logo to the screens: art direction in the service of a positioning.`,express:`- **Context**: a free rebranding exercise in Master's year 1 — making McDonald's speak to a different audience. School project, not affiliated with the brand.
- **Problem**: make the brand more premium, healthier and family-friendly, without making it unrecognisable.
- **Her role**: full art direction — logo, palette, typography, messages, photo compositing, mockups.
- **Solution**: a “retro chic” McDonald's, from the logo to the desktop and mobile screens.`}},anchors:!0,followUps:["vitalize","portfoliods","grdf"]},{id:"portfoliods",question:{fr:"Peut-on voir le Design System de ce portfolio ?",en:"Can I see this portfolio’s Design System?"},chip:{fr:"Portfolio · Design System automatisé",en:"Portfolio · AI-automated Design System"},keywords:[["design system du portfolio",9],["design system de ce portfolio",9],["design system du site",9],["design system de ce site",9],["design system of this portfolio",9],["portfolio design system",9],["design system of this site",9],["design system",3],["regles de design",4],["design rules",4]],answer:{fr:{standard:`Oui : ce portfolio a son propre Design System, et il existe sous deux formes qui disent la même chose.

### Pour vous : une page à parcourir
- **Fondations** : accessibilité, mise en page, contenu.
- **Styles** : couleur, typographie, formes, élévation, icônes.
- **Composants** : rangés par fonction, chacun avec son exemple, son anatomie et ses états.

### Pour l'IA : un skill
Un skill est un dossier d'instructions qu'un agent IA charge de lui-même quand la tâche s'y prête — ici, dès qu'on lui demande de créer ou de modifier un écran. Il contient :

- **un fichier principal** : les quatre règles non négociables, chacune avec sa raison ;
- **trois fichiers de référence**, ouverts seulement au besoin : fondations, styles, composants ;
- **un script** que l'agent lance avant de livrer, pour vérifier ce qui peut l'être automatiquement (couleurs en dur, ombres, majuscules).

Un Design System classique documente pour des personnes. Un skill rend ces mêmes règles **applicables par une IA**, et vérifiables.

### Une seule source
La page n'a pas de contenu à elle : elle affiche directement les fichiers du skill. Ce que vous lisez est ce que l'IA applique.

### Ce que ça change
Même demande confiée à deux agents, sur un projet vide : ==7 critères sur 7== respectés avec le skill, ==3 sur 7== sans. Anne-Sophie l'a conçu et testé avec Claude Code, en corrigeant la règle après chaque test.`,express:`- **Le Design System de ce portfolio** se parcourt en trois niveaux : fondations, styles, composants.
- **Un skill** : les mêmes règles, dans un dossier qu'un agent IA charge avant de créer ou de modifier un écran, avec un script de vérification.
- **Une seule source** : la page affiche les fichiers du skill.
- **Résultat du test** : ==7 critères sur 7== avec le skill, ==3 sur 7== sans.`},en:{standard:`Yes: this portfolio has its own Design System, and it exists in two forms that say the same thing.

### For you: a page to browse
- **Foundations**: accessibility, layout, content.
- **Styles**: colour, typography, shape, elevation, icons.
- **Components**: grouped by function, each with its example, anatomy and states.

### For the AI: a skill
A skill is a folder of instructions that an AI agent loads on its own when the task calls for it — here, whenever it is asked to create or change a screen. It contains:

- **a main file**: the four non-negotiable rules, each with its reason;
- **three reference files**, opened only when needed: foundations, styles, components;
- **a script** the agent runs before delivering, to check what can be checked automatically (hard-coded colours, shadows, capitals).

A classic Design System documents for people. A skill makes those same rules **applicable by an AI**, and verifiable.

### A single source
The page has no content of its own: it displays the skill files directly. What you read is what the AI applies.

### What it changes
The same request given to two agents, on an empty project: ==7 criteria out of 7== met with the skill, ==3 out of 7== without. Anne-Sophie designed and tested it with Claude Code, fixing the rule after each test.`,express:`- **This portfolio’s Design System** is browsed on three levels: foundations, styles, components.
- **A skill**: the same rules, in a folder an AI agent loads before creating or changing a screen, with a check script.
- **A single source**: the page displays the skill files.
- **Test result**: ==7 criteria out of 7== with the skill, ==3 out of 7== without.`}},attachment:"ds",followUps:["bnp","designsystem","ai"]},{id:"education",question:{fr:"Quelle est sa formation ?",en:"What is her educational background?"},chip:{fr:"Sa formation",en:"Her education"},keywords:[["formation",5],["diplome",5],["etudes",3],["master",5],["bachelor",5],["ecole",4],["school",4],["degree",5],["education",5],["studied",4],["etudie",4],["universit",4],["manaa",6],["chardon savard",6],["digital school",6],["bac",3],["cursus",5],["academi",4]],answer:{fr:{standard:`Une formation qui relie **arts appliqués, mode et design numérique**.

| Diplôme | École | Période |
|---|---|---|
| **Master Design UX/UI & Gestion de projet** | Digital School of Paris | 2021 – 2023 |
| **Bachelor Design de Mode & Textile** | Atelier Chardon Savard, Nantes | 2016 – 2020 |
| **MANAA — Arts Appliqués** | IMAD, Caen | — |

Ce socle créatif nourrit aujourd'hui son travail de Product Designer : sens du détail, culture visuelle et rigueur de gestion de projet.`,express:`- **Master** Design UX/UI & Gestion de projet — Digital School of Paris (2021 – 2023).
- **Bachelor** Design de Mode & Textile — Atelier Chardon Savard, Nantes (2016 – 2020).
- **MANAA** Arts Appliqués — IMAD, Caen.`},en:{standard:`An education linking **applied arts, fashion and digital design**.

| Degree | School | Period |
|---|---|---|
| **Master's in UX/UI Design & Project Management** | Digital School of Paris | 2021 – 2023 |
| **Bachelor in Fashion & Textile Design** | Atelier Chardon Savard, Nantes | 2016 – 2020 |
| **MANAA — Applied Arts foundation year** | IMAD, Caen | — |

This creative foundation feeds her work as a Product Designer today: attention to detail, visual culture and project-management rigour.`,express:`- **Master's** in UX/UI Design & Project Management — Digital School of Paris (2021 – 2023).
- **Bachelor** in Fashion & Textile Design — Atelier Chardon Savard, Nantes (2016 – 2020).
- **MANAA** Applied Arts — IMAD, Caen.`}},followUps:["background","languages","skills"]},{id:"languages",question:{fr:"Quelles langues parle-t-elle ?",en:"Which languages does she speak?"},chip:{fr:"Ses langues",en:"Her languages"},keywords:[["langue",5],["language",5],["anglais",5],["english",5],["espagnol",5],["spanish",5],["bilingue",5],["bilingual",5],["parle t elle",4],["speak",4],["francais",3],["french",3],["international",3]],answer:{fr:{standard:`Anne-Sophie travaille en **français** et en **anglais**.

| Langue | Niveau |
|---|---|
| Français | Natif |
| Anglais | Courant |
| Espagnol | B1 |`,express:`- **Français** : natif.
- **Anglais** : courant.
- **Espagnol** : B1.`},en:{standard:`Anne-Sophie works in **French** and **English**.

| Language | Level |
|---|---|
| French | Native |
| English | Fluent |
| Spanish | B1 |`,express:`- **French**: native.
- **English**: fluent.
- **Spanish**: B1.`}},followUps:["education","availability","profile"]},{id:"softskills",question:{fr:"Quels sont ses soft skills et ses engagements personnels ?",en:"What are her soft skills and personal commitments?"},chip:{fr:"Soft skills & engagements",en:"Soft skills & commitments"},keywords:[["soft skill",7],["softskill",7],["personnalite",5],["personality",5],["qualite",4],["hobb",5],["loisir",5],["passion",4],["benevol",6],["volunteer",6],["piano",6],["course a pied",6],["running",5],["engagement",4],["valeur",3],["values",4],["interet",4],["interests",4],["humain",4],["human",3],["collabor",4],["equipe",3],["team",3],["facilit",4],["communic",4],["caractere",4],["sport",4],["musique",4],["music",4],["en dehors",4],["outside work",5],["leadership",4],["manag",3],["travaille t elle",3]],answer:{fr:{standard:`Les soft skills d'Anne-Sophie se lisent dans ses missions autant que dans ses engagements.

### Dans le travail
- **Facilitation** : elle anime des ateliers de co-création (Caisse des Dépôts, Kering).
- **Esprit transverse** : coordination inter-équipes et co-construction de process entre les pôles IA et UX chez BNP Paribas CIB.
- **Écoute** : entretiens et tests utilisateurs au cœur de chaque projet.
- **Autonomie de bout en bout** : pilotage de projets digitaux complets chez Eden Park.

### En dehors
- **Bénévolat** — accompagnement à l'inclusion sociale et orientation administrative pour les jeunes de l'Aide Sociale à l'Enfance.
- **Piano classique** — plus de 5 ans de pratique : rigueur et régularité.
- **Course à pied** — endurance et constance.`,express:`- **Facilitation & écoute** : ateliers de co-création, entretiens et tests utilisateurs.
- **Esprit transverse** : coordination inter-équipes, process IA × UX.
- **Engagement** : bénévolat auprès des jeunes de l'Aide Sociale à l'Enfance.
- **Rigueur** : piano classique (+5 ans), course à pied.`},en:{standard:`Anne-Sophie's soft skills show in her engagements as much as in her commitments.

### At work
- **Facilitation**: she runs co-creation workshops (Caisse des Dépôts, Kering).
- **Cross-functional mindset**: cross-team coordination and co-building processes between the AI and UX departments at BNP Paribas CIB.
- **Listening**: user interviews and testing at the heart of every project.
- **End-to-end autonomy**: managed complete digital projects at Eden Park.

### Outside work
- **Volunteering** — supporting social inclusion and administrative guidance for young people in child welfare care (Aide Sociale à l'Enfance).
- **Classical piano** — over 5 years of practice: rigour and consistency.
- **Running** — endurance and steadiness.`,express:`- **Facilitation & listening**: co-creation workshops, user interviews and testing.
- **Cross-functional mindset**: cross-team coordination, AI × UX processes.
- **Commitment**: volunteering with young people in child welfare care.
- **Rigour**: classical piano (5+ years), running.`}},followUps:["search","covenant","background"]},{id:"salary",question:{fr:"Quelles sont ses prétentions salariales ?",en:"What are her salary expectations?"},chip:{fr:"Rémunération",en:"Compensation"},keywords:[["salair",6],["remuner",6],["pretention",6],["tjm",6],["tarif",5],["salary",6],["compensation",6],["package",5],["pay",4],["day rate",6],["daily rate",6],["rate",3],["combien",3],["budget",4],["fourchette",5],["k€",4],["brut",4],["wage",5],["how much",4]],answer:{fr:{standard:`La rémunération n'est pas un sujet que je peux traiter à sa place : elle dépend du **périmètre du poste**, du **niveau de responsabilité** et du **contexte de l'équipe**.

Anne-Sophie en parle volontiers de vive voix. Le plus simple : lui écrire en précisant le poste et votre fourchette, elle vous répondra directement.`,express:`- **Rémunération** : à discuter directement avec Anne-Sophie.
- **Dépend de** : périmètre, responsabilités, contexte d'équipe.
- **Prochaine étape** : un email avec le poste et votre fourchette.`},en:{standard:`Compensation isn't something I can settle on her behalf: it depends on the **scope of the role**, the **level of responsibility** and the **team context**.

Anne-Sophie is happy to discuss it directly. The simplest route: email her with the role and your range, and she will get back to you.`,express:`- **Compensation**: to be discussed directly with Anne-Sophie.
- **Depends on**: scope, responsibilities, team context.
- **Next step**: an email with the role and your range.`}},followUps:["search","availability","profile"],actions:["email"]},{id:"availability",question:{fr:"Où est-elle basée et quelle est sa disponibilité ?",en:"Where is she based and what is her availability?"},chip:{fr:"Localisation & disponibilité",en:"Location & availability"},keywords:[["dispon",6],["availab",6],["mobilit",6],["remote",5],["teletravail",6],["preavis",6],["notice",5],["localis",5],["location",4],["paris",4],["habite",4],["based",4],["relocat",5],["freelance",5],["cdi",5],["contrat",4],["contract",4],["quand",2],["when can",4],["start date",5],["commencer",4],["hybride",5],["hybrid",5],["demenag",5],["deplacement",4],["ville",3],["where",2],["ou est",3],["full time",4],["temps plein",4]],answer:{fr:{standard:`### Localisation
Anne-Sophie est basée à **Paris**, où elle a mené l'ensemble de ses missions.

### Situation actuelle
Elle est en poste chez **mc2i** depuis janvier 2024, actuellement en mission chez BNP Paribas CIB.

### Disponibilité, mobilité, télétravail
Ces points dépendent du projet et se discutent au cas par cas. Le plus fiable est de lui poser la question directement : elle vous répondra avec précision.`,express:`- **Basée à** : Paris.
- **Situation** : en poste chez mc2i, mission BNP Paribas CIB.
- **Langues de travail** : français et anglais courant.
- **Disponibilité & télétravail** : à préciser avec elle par email.`},en:{standard:`### Location
Anne-Sophie is based in **Paris**, where she has carried out all her engagements.

### Current situation
She has been at **mc2i** since January 2024, currently on assignment at BNP Paribas CIB.

### Availability, mobility, remote work
These depend on the project and are discussed case by case. The most reliable way is to ask her directly: she will give you a precise answer.`,express:`- **Based in**: Paris.
- **Situation**: employed at mc2i, on assignment at BNP Paribas CIB.
- **Working languages**: French and fluent English.
- **Availability & remote**: to be confirmed with her by email.`}},followUps:["search","languages","profile"],actions:["email"]},{id:"contact",question:{fr:"Comment contacter Anne-Sophie ?",en:"How can I contact Anne-Sophie?"},chip:{fr:"La contacter",en:"Contact her"},keywords:[["contact",6],["email",5],["mail",5],["joindre",5],["telephone",5],["phone",5],["linkedin",5],["appeler",5],["call",3],["reach",4],["ecrire",4],["rendez vous",5],["meeting",4],["entretien",4],["interview",4],["rencontrer",5],["meet",4],["numero",4],["coordonnees",6],["get in touch",6]],answer:{fr:{standard:`Anne-Sophie répond volontiers aux prises de contact.

| Canal | Coordonnées |
|---|---|
| **Email** | [leroy.annesophie02@gmail.com](mailto:leroy.annesophie02@gmail.com) |
| **Téléphone** | [06 30 47 84 39](tel:+33630478439) |
| **LinkedIn** | [linkedin.com/in/anne-sophie-leroy](https://www.linkedin.com/in/anne-sophie-leroy) |

Le bouton ci-dessous ouvre un email pré-rempli avec l'objet de votre choix.`,express:`- **Email** : [leroy.annesophie02@gmail.com](mailto:leroy.annesophie02@gmail.com)
- **Téléphone** : [06 30 47 84 39](tel:+33630478439)
- **LinkedIn** : [linkedin.com/in/anne-sophie-leroy](https://www.linkedin.com/in/anne-sophie-leroy)`},en:{standard:`Anne-Sophie is happy to hear from you.

| Channel | Details |
|---|---|
| **Email** | [leroy.annesophie02@gmail.com](mailto:leroy.annesophie02@gmail.com) |
| **Phone** | [+33 6 30 47 84 39](tel:+33630478439) |
| **LinkedIn** | [linkedin.com/in/anne-sophie-leroy](https://www.linkedin.com/in/anne-sophie-leroy) |

The button below opens a pre-filled email with the subject of your choice.`,express:`- **Email**: [leroy.annesophie02@gmail.com](mailto:leroy.annesophie02@gmail.com)
- **Phone**: [+33 6 30 47 84 39](tel:+33630478439)
- **LinkedIn**: [linkedin.com/in/anne-sophie-leroy](https://www.linkedin.com/in/anne-sophie-leroy)`}},followUps:["search","profile","projects"],actions:["email","cv"]},{id:"cv",question:{fr:"Puis-je voir son CV ?",en:"Can I see her CV?"},chip:{fr:"Voir son CV",en:"See her CV"},keywords:[["cv",6],["curriculum",6],["telecharg",5],["download",5],["pdf",5],["her resume",5],["resume",2]],answer:{fr:{standard:`Le CV complet d'Anne-Sophie est disponible ici : une vue structurée pour le parcourir en 10 secondes, et un bouton pour le **télécharger en PDF**.

### L'essentiel
- **mc2i** (depuis janv. 2024) — BNP Paribas CIB, La Caisse des Dépôts, GRDF.
- **Groupe Kering** (2022 – 2023) — app Privilege Card, ==40 000 utilisateurs==.
- **Eden Park** (2021 – 2022) — ==+20 % de ventes e-commerce==.
- **Master** Design UX/UI & Gestion de projet, Digital School of Paris.`,express:`- **Aujourd'hui** : Product Designer chez mc2i, mission BNP Paribas CIB.
- **Avant** : Groupe Kering, Eden Park, Balmain, Indress.
- **Formation** : Master Design UX/UI & Gestion de projet.
- **CV complet** : bouton ci-dessous.`},en:{standard:`Anne-Sophie's full CV is available here: a structured view you can scan in 10 seconds, and a button to **download it as a PDF**.

### The essentials
- **mc2i** (since Jan 2024) — BNP Paribas CIB, La Caisse des Dépôts, GRDF.
- **Kering Group** (2022 – 2023) — Privilege Card app, ==40,000 users==.
- **Eden Park** (2021 – 2022) — ==+20% e-commerce sales==.
- **Master's** in UX/UI Design & Project Management, Digital School of Paris.`,express:`- **Today**: Product Designer at mc2i, on assignment at BNP Paribas CIB.
- **Before**: Kering Group, Eden Park, Balmain, Indress.
- **Education**: Master's in UX/UI Design & Project Management.
- **Full CV**: button below.`}},followUps:["profile","impact","contact"],actions:["cv","email"]},{id:"projects",question:{fr:"Quels sont ses principaux projets ?",en:"What are her main projects?"},chip:{fr:"Ses projets",en:"Her projects"},keywords:[["projet",5],["project",5],["etude de cas",6],["etudes de cas",6],["case stud",6],["portfolio",5],["realisation",5],["mission",4],["client",4],["travaux",4],["her work",5],["reference",4]],answer:{fr:{standard:`Trois missions en entreprise, puis des projets personnels, à explorer dans la barre latérale ou via les questions ci-dessous.

### Missions

| Projet | Sujet | Impact |
|---|---|---|
| **BNP Paribas CIB** | Cadrer une équipe UX augmentée par l'IA | ==+5 modules sur 17== · ==~1 500 utilisateurs== |
| **Banque d'investissement** | Suivi des clauses de crédit assisté par l'IA | Parcours avant / après · prototype navigable |
| **GRDF** | Refonte éco-conçue justdecarb.grdf.fr | ==Note C EcoIndex== + RGAA |

### Projets personnels
- **Portfolio · Design System automatisé avec l'IA** (2026) : le Design System de ce portfolio, écrit comme un skill que l'IA applique.
- **Vitaliz · Des personas à l'application mobile** (2023, Master 2) : étude UX complète d'une application de bracelet connecté, des personas au prototype.
- **Bloom Bar · Direction artistique et illustration 3D** (2023, Master 2) : direction artistique et illustration 3D d'une marque de barres aux fleurs.
- **McDonald's · Rebranding pour une nouvelle cible** (2021, Master 1) : repositionner une marque connue pour une nouvelle cible.`,express:`- **BNP Paribas CIB** : équipe UX augmentée par l'IA — ==+5 modules sur 17==.
- **Clauses de crédit** : suivi assisté par l'IA, parcours avant / après, prototype navigable.
- **GRDF** : refonte éco-conçue — ==Note C EcoIndex== + RGAA.
- **Projets personnels** : Design System du portfolio, Vitaliz, Bloom Bar, McDonald's.`},en:{standard:`Three client missions, then personal projects, to explore in the sidebar or through the questions below.

### Missions

| Project | Topic | Impact |
|---|---|---|
| **BNP Paribas CIB** | Framing an AI-augmented UX team | ==+5 of 17 modules== · ==~1,500 users== |
| **Investment bank** | AI-assisted monitoring of loan clauses | Before / after journey · navigable prototype |
| **GRDF** | Eco-designed redesign of justdecarb.grdf.fr | ==EcoIndex grade C== + RGAA |

### Personal projects
- **Portfolio · AI-automated Design System** (2026): this portfolio's Design System, written as a skill that AI applies.
- **Vitaliz · From personas to the mobile app** (2023, Master's year 2): a full UX study of a connected wristband app, from personas to prototype.
- **Bloom Bar · Art direction and 3D illustration** (2023, Master's year 2): art direction and 3D illustration for a brand of flower bars.
- **McDonald's · Rebranding for a new audience** (2021, Master's year 1): repositioning a well-known brand for a new audience.`,express:`- **BNP Paribas CIB**: AI-augmented UX team — ==+5 of 17 modules==.
- **Loan clauses**: AI-assisted monitoring, before / after journey, navigable prototype.
- **GRDF**: eco-designed redesign — ==EcoIndex grade C== + RGAA.
- **Personal projects**: portfolio Design System, Vitaliz, Bloom Bar, McDonald's.`}},followUps:["bnp","covenant","grdf","vitalize"]},{id:"greeting",question:{fr:"Bonjour !",en:"Hello!"},keywords:[["bonjour",3],["hello",3],["salut",3],["hi",3],["hey",3],["coucou",3],["bonsoir",3],["good morning",3],["ca va",3],["how are you",3]],answer:{fr:{standard:`Bonjour ! Je suis l'assistant portfolio d'**Anne-Sophie Leroy**, Product Designer spécialisée en UX/UI, Design Ops et workflows IA.

Je peux vous parler de son parcours, de ses projets (BNP Paribas CIB, Kering, GRDF, Caisse des Dépôts), de ses compétences ou de sa façon d'intégrer l'IA dans le design. Par où souhaitez-vous commencer ?`,express:"Bonjour ! Posez-moi une question sur **Anne-Sophie Leroy** : profil, projets, compétences, IA & Design Ops."},en:{standard:`Hello! I'm the portfolio assistant of **Anne-Sophie Leroy**, a Product Designer specialising in UX/UI, Design Ops and AI workflows.

I can tell you about her background, her projects (BNP Paribas CIB, Kering, GRDF, Caisse des Dépôts), her skills or how she brings AI into design. Where would you like to start?`,express:"Hello! Ask me anything about **Anne-Sophie Leroy**: profile, projects, skills, AI & Design Ops."}},followUps:["profile","projects","ai"]},{id:"thanks",question:{fr:"Merci !",en:"Thank you!"},keywords:[["merci",5],["thanks",5],["thank",5],["super",2],["parfait",3],["perfect",3],["great",2],["au revoir",4],["bye",4]],answer:{fr:{standard:"Avec plaisir ! Si le profil d'Anne-Sophie vous intéresse, le plus simple est de lui écrire directement — elle sera ravie d'échanger.",express:"Avec plaisir ! Pour aller plus loin, écrivez directement à Anne-Sophie."},en:{standard:"You're welcome! If Anne-Sophie's profile is a match, the simplest next step is to write to her directly — she will be glad to talk.",express:"You're welcome! To go further, write to Anne-Sophie directly."}},actions:["email","cv"]},{id:"fallback",question:{fr:"",en:""},keywords:[],answer:{fr:{standard:"Je n'ai pas d'information fiable sur ce point, et je préfère ne rien inventer sur Anne-Sophie.\n\n### Ce que je sais faire\n- **Présenter son profil** et ce qui la différencie.\n- **Détailler ses projets** : BNP Paribas CIB, Groupe Kering, GRDF, Caisse des Dépôts.\n- **Expliquer sa pratique** : Design Ops, Design System, *AI Skills*, *vibecoding*.\n- **Répondre aux questions pratiques** : formation, langues, outils, localisation.\n\nAstuce : tapez `/` pour les commandes rapides (`/cv`, `/projets`, `/skills`, `/contact`, `/stack`). Et pour toute question précise, Anne-Sophie vous répondra directement.",express:"Je n'ai pas cette information. Essayez une question sur son **profil**, ses **projets**, ses **compétences** ou l'**IA** — ou contactez-la directement."},en:{standard:"I don't have reliable information on that, and I'd rather not make anything up about Anne-Sophie.\n\n### What I can do\n- **Present her profile** and what sets her apart.\n- **Detail her projects**: BNP Paribas CIB, Kering Group, GRDF, Caisse des Dépôts.\n- **Explain her practice**: Design Ops, Design System, *AI Skills*, *vibecoding*.\n- **Answer practical questions**: education, languages, tools, location.\n\nTip: type `/` for quick commands (`/cv`, `/projects`, `/skills`, `/contact`, `/stack`). And for any specific question, Anne-Sophie will answer you directly.",express:"I don't have that information. Try a question about her **profile**, **projects**, **skills** or **AI** — or contact her directly."}},followUps:["profile","projects","ai"],actions:["cv","email"]}],Rl=Object.fromEntries(Ed.map(e=>[e.id,e]));function Bt(e){return Rl[e]??Rl.fallback}function Ld(e,t,n){const r=Bt(e).answer[t];return n==="express"?r.express:n==="deepdive"&&r.deep?`${r.standard}

${r.deep}`:r.standard}function lh(e){return e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/\bj['’]ai\b/g," ").replace(/[^a-z0-9€]+/g," ").trim()}function uh(e,t){const n=Array.from({length:e.length+1},(r,s)=>[s,...Array(t.length).fill(0)]);for(let r=1;r<=t.length;r++)n[0][r]=r;for(let r=1;r<=e.length;r++)for(let s=1;s<=t.length;s++)n[r][s]=Math.min(n[r-1][s]+1,n[r][s-1]+1,n[r-1][s-1]+(e[r-1]===t[s-1]?0:1));return n[e.length][t.length]}function ch(e,t){return e===t||t.length>=4&&e.startsWith(t)?!0:t.length>=6&&e.length>=6&&Math.abs(e.length-t.length)<=1?uh(e,t)<=1:!1}const dh={"/cv":"cv","/projets":"projects","/projects":"projects","/projet":"projects","/skills":"skills","/competences":"skills","/contact":"contact","/stack":"stack","/designsystem":"portfoliods","/design-system":"portfoliods","/ds":"portfoliods"};function ph(e){const t=e.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").split(/\s+/)[0];return t.startsWith("/")?dh[t]??"fallback":null}const mh=3;function fh(e){const t=ph(e);if(t)return t;const n=lh(e);if(!n)return"fallback";const r=` ${n} `,s=n.split(" ");let o="fallback",a=0;for(const l of Ed){let u=0;for(const[d,p]of l.keywords)(d.includes(" ")?r.includes(` ${d}`):s.some(h=>ch(h,d)))&&(u+=p);u>a&&(a=u,o=l.id)}return a>=mh?o:"fallback"}function qd(e){return e.match(/\S+\s*/g)??[]}const Fl={ai:{icon:Ds,chip:"bg-[var(--ai-tint)] text-[var(--ai-text)]",dot:"bg-[var(--ai)]"},human:{icon:Is,chip:"border border-rule text-ink",dot:"bg-ink"},system:{icon:Bf,chip:"bg-surface-2 text-ink",dot:"bg-muted"},offline:{icon:zf,chip:"border border-line text-muted",dot:"border border-muted"}};function zd({id:e,lang:t,board:n,cta:r}){const s=ge[t],[o,a]=C.useState(n.defaultView??n.journeys[0].id),l=n.journeys.find(p=>p.id===o)??n.journeys[0],u=p=>{var g;return((g=n.actors)==null?void 0:g[t][p])??s.actors[p]},d=[...new Set(l.stages.flatMap(p=>p.nodes.map(g=>g.actor)))];return i.jsxs("section",{id:e,className:"rise mb-7 scroll-mt-16 overflow-hidden rounded-3xl border border-line bg-elevated",children:[i.jsxs("header",{className:"flex flex-wrap items-center gap-x-4 gap-y-3 border-b border-line px-5 py-4",children:[i.jsxs("div",{className:"w-full min-w-0 sm:w-auto sm:flex-1",children:[i.jsx("p",{className:"eyebrow text-muted",children:n.eyebrow[t]}),i.jsx("h3",{className:"mt-1 font-display text-[1.15rem] font-semibold leading-tight tracking-[-0.02em] text-ink",children:n.title[t]})]}),r&&i.jsxs("button",{onClick:r.onClick,className:"btn-primary !py-2.5",children:[r.label," ",i.jsx(Sa,{size:14,className:"fill-current","aria-hidden":!0})]})]}),n.journeys.length>1&&i.jsxs("div",{className:"flex flex-wrap items-center gap-3 px-5 pt-4",children:[i.jsx("p",{className:"eyebrow flex-1 text-muted",children:s.detail}),i.jsx("div",{role:"group","aria-label":s.detail,className:"flex rounded-full border border-line p-0.5",children:n.journeys.map(p=>i.jsx("button",{onClick:()=>a(p.id),"aria-pressed":o===p.id,className:`t-all rounded-full px-3.5 py-1 text-xs font-semibold ${o===p.id?"bg-ink text-bg":"text-muted hover:text-ink"}`,children:p.label[t]},p.id))})]}),i.jsx("ol",{className:"rise px-5 py-2",children:l.stages.map((p,g)=>i.jsxs("li",{className:"relative flex gap-4 py-3",children:[g<l.stages.length-1&&i.jsx("span",{className:"absolute bottom-[-12px] left-[15px] top-[44px] w-px bg-line","aria-hidden":!0}),i.jsx("span",{className:`relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${p.step?l.muted?"bg-ink text-bg":"bg-accent text-accent-fg":"border border-rule bg-elevated text-ink"}`,"aria-hidden":!0,children:p.step??(g===0?i.jsx(ko,{size:14}):i.jsx(jt,{size:14}))}),i.jsxs("div",{className:"min-w-0 flex-1",children:[i.jsxs("p",{className:"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold leading-snug text-ink",children:[p.step&&i.jsxs("span",{className:"eyebrow text-accent-text",children:[s.step," ",p.step]}),p.title[t],p.repeat&&i.jsxs("span",{className:"tag border border-rule text-ink",children:[i.jsx(bd,{size:12,"aria-hidden":!0})," ",p.repeat[t]]})]}),i.jsx("ul",{className:"mt-2 flex flex-wrap items-stretch gap-x-1.5 gap-y-2",children:p.nodes.map((h,x)=>{const v=Fl[h.actor],y=v.icon;return i.jsxs("li",{className:"flex items-stretch gap-1.5",children:[x>0&&i.jsx("span",{className:"flex items-center px-1 text-xs italic text-muted","aria-hidden":!p.alternatives,children:p.alternatives?s.or:i.jsx(xr,{size:14})}),i.jsxs("span",{className:"flex max-w-[15rem] flex-col gap-1.5 rounded-2xl border border-line bg-bg px-3 py-2.5",children:[i.jsxs("span",{className:`tag w-fit ${v.chip}`,children:[i.jsx(y,{size:12,"aria-hidden":!0})," ",u(h.actor)]}),i.jsx("span",{className:"text-[12.5px] font-light leading-snug text-ink",children:h.label[t]})]})]},h.label.en)})}),p.frictions&&i.jsx("ul",{className:"mt-2.5 flex flex-wrap gap-1.5","aria-label":s.friction,children:p.frictions.map(h=>i.jsxs("li",{className:"tag bg-[var(--warn-tint)] text-[var(--warn-text)]",children:[i.jsx(kd,{size:12,"aria-hidden":!0})," ",h[t]]},h.en))})]})]},p.title.en))},o),i.jsx("footer",{className:"flex flex-wrap gap-x-5 gap-y-1.5 border-t border-line px-5 py-3",children:d.map(p=>i.jsxs("span",{className:"inline-flex items-center gap-2 text-xs text-muted",children:[i.jsx("span",{className:`h-2 w-2 rounded-full ${Fl[p].dot}`,"aria-hidden":!0})," ",u(p)]},p))})]})}const hh=/(\*\*[^*]+\*\*|==[^=]+==|`[^`]+`|\[[^\]]+\]\([^)\s]+\)|\*[^*\s][^*]*\*)/g;function gh(e){return e.replace(/\*\*|==|`|\*/g,"")}function qt(e){return e.split(hh).map((t,n)=>{if(!t)return null;if(t.startsWith("**")&&t.endsWith("**")&&t.length>4)return i.jsx("strong",{className:"font-semibold text-ink",children:qt(t.slice(2,-2))},n);if(t.startsWith("==")&&t.endsWith("==")&&t.length>4)return i.jsx("span",{className:"mx-0.5 inline-block whitespace-nowrap rounded-full bg-olive-tint px-2.5 py-0.5 text-[0.86em] font-semibold text-olive-text",children:t.slice(2,-2)},n);if(t.startsWith("`")&&t.endsWith("`")&&t.length>2)return i.jsx("code",{className:"rounded-md bg-accent-tint px-1.5 py-0.5 font-mono text-[0.85em] text-accent-text",children:t.slice(1,-1)},n);const r=t.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);if(r){const s=r[2].startsWith("http");return i.jsx("a",{href:r[2],...s?{target:"_blank",rel:"noopener noreferrer"}:{},className:"t-all break-words font-medium text-accent-text underline decoration-1 underline-offset-4 hover:decoration-2",children:r[1]},n)}return t.startsWith("*")&&t.endsWith("*")&&t.length>2?i.jsx("em",{children:t.slice(1,-1)},n):i.jsx(C.Fragment,{children:gh(t)},n)})}function xh(e){return e.trim().replace(/^\||\|$/g,"").split("|").map(t=>t.trim())}function Wt({text:e,anchorPrefix:t,embeds:n}){const r=e.split(`
`),s=[];let o=0,a=0,l=0;for(;o<r.length;){const u=r[o];if(!u.trim()){o++;continue}if(u.trimStart().startsWith("[[")){const x=u.trim().match(/^\[\[([a-z0-9-]+)\]\]$/);x&&(n!=null&&n[x[1]])&&s.push(i.jsx(C.Fragment,{children:n[x[1]]},a++)),o++;continue}if(u.startsWith("```")){const x=[];for(o++;o<r.length&&!r[o].startsWith("```");)x.push(r[o++]);o++,s.push(i.jsx("pre",{className:"my-4 overflow-x-auto rounded-2xl bg-code-bg px-4 py-3.5 font-mono text-[12.5px] leading-relaxed text-code-ink",children:x.join(`
`)},a++));continue}if(u.trimStart().startsWith("|")){const x=[];for(;o<r.length&&r[o].trimStart().startsWith("|");)/^\s*\|[\s|:-]+\|?\s*$/.test(r[o])||x.push(xh(r[o])),o++;if(x.length===0)continue;const[v,...y]=x;s.push(i.jsx("div",{className:"my-4 overflow-x-auto rounded-2xl border border-line bg-elevated",children:i.jsxs("table",{className:"w-full min-w-[420px] border-collapse text-left text-sm",children:[i.jsx("thead",{children:i.jsx("tr",{className:"border-b border-rule",children:v.map((k,m)=>i.jsx("th",{className:"eyebrow px-4 py-3 font-semibold text-ink",children:qt(k)},m))})}),i.jsx("tbody",{children:y.map((k,m)=>i.jsx("tr",{className:"border-t border-line align-top first:border-t-0",children:k.map((c,f)=>i.jsx("td",{className:"px-4 py-2.5 leading-relaxed",children:qt(c)},f))},m))})]})},a++));continue}const d=u.match(/^(#{1,4})\s+(.*)$/);if(d){s.push(i.jsx("h3",{id:t?`${t}-s${l++}`:void 0,className:"scroll-mt-16 mb-2 mt-7 font-display text-[1.2rem] font-semibold leading-tight tracking-[-0.02em] text-ink first:mt-0",children:qt(d[2])},a++)),o++;continue}const p=x=>/^\s*[-•]\s+/.test(x),g=x=>/^\s*\d+\.\s+/.test(x);if(p(u)||g(u)){const x=g(u),v=x?g:p,y=[];for(;o<r.length&&v(r[o]);)y.push(r[o].replace(/^\s*(?:[-•]|\d+\.)\s+/,"")),o++;s.push(x?i.jsx("ol",{className:"my-3 space-y-2",children:y.map((k,m)=>i.jsxs("li",{className:"flex gap-3 leading-relaxed",children:[i.jsxs("span",{className:"w-6 shrink-0 font-display text-[0.85rem] font-medium italic leading-[1.9] text-accent-text",children:["0",m+1]}),i.jsx("span",{className:"min-w-0",children:qt(k)})]},m))},a++):i.jsx("ul",{className:"my-3 space-y-2",children:y.map((k,m)=>i.jsxs("li",{className:"flex gap-3 leading-relaxed",children:[i.jsx("span",{className:"mt-[0.62em] h-1.5 w-1.5 shrink-0 rounded-full bg-vermillion","aria-hidden":!0}),i.jsx("span",{className:"min-w-0",children:qt(k)})]},m))},a++));continue}const h=[];for(;o<r.length&&r[o].trim()&&!r[o].startsWith("```")&&!r[o].trimStart().startsWith("[[")&&!r[o].trimStart().startsWith("|")&&!/^#{1,4}\s/.test(r[o])&&!p(r[o])&&!g(r[o]);)h.push(r[o++]);s.push(i.jsx("p",{className:"my-3 leading-relaxed first:mt-0 last:mb-0",children:qt(h.join(" "))},a++))}return i.jsx("div",{className:"text-[15px] font-normal text-ink",children:s})}function Jn({size:e=40}){return i.jsx("span",{className:"monogram",style:{width:e,height:e,fontSize:Math.max(9,e*.25)},"aria-hidden":!0,children:"ASL"})}const vh={fr:{kicker:"Dépôt UX · Design",title:"Le fichier d’entrée de toutes les règles IA",goal:"Objectif : que l’IA sache où chercher, sans charger tout le dépôt.",parts:[{title:"Rôle & mission de l’IA",detail:"Rôle, missions, posture"},{title:"Normes & formats de fichiers",detail:"Guidelines de composants, tokens, branches"},{title:"Directives UX & Design System",detail:"Accessibilité, UX writing, gestion des états"},{title:"Directives Git & workflow",detail:"Convention de commit, demande d’intégration"},{title:"Cartographie du dépôt",detail:"Où se trouve chaque type de contenu"}]},en:{kicker:"UX · Design repository",title:"The entry file for all AI rules",goal:"Goal: the AI knows where to look, without loading the whole repository.",parts:[{title:"AI role & mission",detail:"Role, missions, posture"},{title:"File standards & formats",detail:"Component guidelines, tokens, branches"},{title:"UX & Design System directives",detail:"Accessibility, UX writing, state handling"},{title:"Git & workflow directives",detail:"Commit convention, pull request"},{title:"Repository map",detail:"Where each type of content lives"}]}},yh=[{group:{fr:"Design System",en:"Design System"},items:["template_guidelines.md","tokens.md"]},{group:{fr:"Composants",en:"Components"},items:["styles_hybride.md","component_guidelines.md"]},{group:{fr:"Utilisateurs & règles",en:"Users & rules"},items:["personas/","business-rules/"]},{group:{fr:"Livrables UX",en:"UX deliverables"},items:["sitemap/","user-flows/","journeys/","ux-specs/"]},{group:{fr:"Références",en:"Reference"},items:["benchmark/","decisions/","context/"]}],bh={fr:{tree:"Arborescence par usage",auto:"Automatisation",autoDetail:"Synchronisation des tokens, demandes d’intégration préparées pour les développeurs",dev:"Dépôt technique · Devs",devDetail:"Consomme ce que le dépôt UX produit",preview:"Lien de prévisualisation",previewDetail:"Chaque demande d’intégration génère une adresse où voir le prototype"},en:{tree:"A tree organised by use",auto:"Automation",autoDetail:"Token sync, pull requests prepared for developers",dev:"Technical repository · Devs",devDetail:"Consumes what the UX repository produces",preview:"Preview link",previewDetail:"Every pull request generates an address where the prototype can be seen"}};function wh({name:e}){const n=e.endsWith(".md")?Sr:Xs;return i.jsxs("li",{className:"inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-2.5 py-1 font-mono text-[11px] text-ink",children:[i.jsx(n,{size:11,className:"shrink-0 text-muted","aria-hidden":!0})," ",e]})}function kh({lang:e}){const t=vh[e],n=bh[e];return i.jsxs("figure",{className:"my-5 overflow-hidden rounded-3xl border border-line bg-elevated",children:[i.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2",children:[i.jsxs("div",{className:"border-b border-line p-5 sm:border-b-0 sm:border-r",children:[i.jsx("p",{className:"eyebrow text-muted",children:t.kicker}),i.jsxs("p",{className:"mt-2 inline-flex items-center gap-2 font-mono text-sm font-semibold text-accent-text",children:[i.jsx(Sr,{size:14,"aria-hidden":!0})," CLAUDE.md"]}),i.jsx("p",{className:"mt-1 text-[13px] font-medium leading-snug text-ink",children:t.title}),i.jsx("ol",{className:"mt-4 space-y-2.5",children:t.parts.map((r,s)=>i.jsxs("li",{className:"flex gap-2.5",children:[i.jsx("span",{className:"font-display text-[12px] font-medium italic leading-[1.5] text-accent-text",children:String(s+1).padStart(2,"0")}),i.jsxs("span",{className:"min-w-0",children:[i.jsx("span",{className:"block text-[13px] font-semibold leading-snug text-ink",children:r.title}),i.jsx("span",{className:"block text-[12px] font-light leading-snug text-muted",children:r.detail})]})]},r.title))}),i.jsx("p",{className:"mt-4 border-t border-line pt-3 text-[12px] font-medium leading-snug text-olive-text",children:t.goal})]}),i.jsxs("div",{className:"p-5",children:[i.jsx("p",{className:"eyebrow text-muted",children:n.tree}),i.jsx("ul",{className:"mt-3 space-y-3",children:yh.map(r=>i.jsxs("li",{children:[i.jsx("p",{className:"mb-1.5 text-[12px] font-semibold text-ink",children:r.group[e]}),i.jsx("ul",{className:"flex flex-wrap gap-1.5",children:r.items.map(s=>i.jsx(wh,{name:s},s))})]},r.group.en))})]})]}),i.jsxs("div",{className:"flex flex-col items-stretch gap-2 border-t border-line p-5 sm:flex-row sm:items-center",children:[i.jsxs("div",{className:"flex flex-1 items-start gap-2.5 rounded-2xl border border-line bg-bg p-3",children:[i.jsx(Rf,{size:14,className:"mt-0.5 shrink-0 text-olive-text","aria-hidden":!0}),i.jsxs("p",{className:"min-w-0 text-[12px] leading-snug",children:[i.jsx("span",{className:"block font-semibold text-ink",children:n.auto}),i.jsx("span",{className:"font-light text-muted",children:n.autoDetail})]})]}),i.jsxs("span",{className:"flex justify-center text-muted","aria-hidden":!0,children:[i.jsx(xr,{size:16,className:"hidden sm:block"}),i.jsx(ko,{size:16,className:"sm:hidden"})]}),i.jsxs("div",{className:"flex flex-1 items-start gap-2.5 rounded-2xl border border-line bg-bg p-3",children:[i.jsx(Xs,{size:14,className:"mt-0.5 shrink-0 text-muted","aria-hidden":!0}),i.jsxs("p",{className:"min-w-0 text-[12px] leading-snug",children:[i.jsx("span",{className:"block font-semibold text-ink",children:n.dev}),i.jsx("span",{className:"font-light text-muted",children:n.devDetail})]})]}),i.jsxs("span",{className:"flex justify-center text-muted","aria-hidden":!0,children:[i.jsx(xr,{size:16,className:"hidden sm:block"}),i.jsx(ko,{size:16,className:"sm:hidden"})]}),i.jsxs("div",{className:"flex flex-1 items-start gap-2.5 rounded-2xl border border-line bg-bg p-3",children:[i.jsx(Ef,{size:14,className:"mt-0.5 shrink-0 text-muted","aria-hidden":!0}),i.jsxs("p",{className:"min-w-0 text-[12px] leading-snug",children:[i.jsx("span",{className:"block font-semibold text-ink",children:n.preview}),i.jsx("span",{className:"font-light text-muted",children:n.previewDetail})]})]})]})]})}const Ud="Lz1R1WzSOZS9votvKTaiTS/Master",Md="node-id=1192-8054&page-id=603%3A528&starting-point-node-id=1192%3A8054",jh=`https://embed.figma.com/proto/${Ud}?${Md}&scaling=scale-down-width&content-scaling=fixed&embed-host=portfolio-asl&footer=false&viewport-controls=false&device-frame=false`,Sh=`https://www.figma.com/proto/${Ud}?${Md}&scaling=scale-down&content-scaling=fixed`,Na={fr:{protoEyebrow:"Prototype · application mobile",ctaTitle:"Essayez l’application",ctaText:"Le prototype est navigable ici : touchez les boutons comme sur un téléphone. Le chargement peut prendre quelques secondes.",openFigma:"Ouvrir dans Figma",viewerTitle:"Vitaliz — prototype mobile",problem:"Problème",answer:"Réponse",persona:"Le persona du cœur de cible : Théodore, ses motivations, ses freins, ses habitudes d’achat",map:"Carte d’expérience de Théodore : pensées, actions, points de friction, émotions, opportunités",brand:"La charte graphique : logo, zones de protection, couleurs, interdits, typographie",shop:"Support promotionnel : la marque en vitrine"},en:{protoEyebrow:"Prototype · mobile app",ctaTitle:"Try the app",ctaText:"The prototype is navigable here: tap the buttons as you would on a phone. Loading can take a few seconds.",openFigma:"Open in Figma",viewerTitle:"Vitaliz — mobile prototype",problem:"Problem",answer:"Answer",persona:"The core-target persona: Théodore, his motivations, barriers and buying habits",map:"Théodore’s experience map: thoughts, actions, pain points, emotions, opportunities",brand:"The brand guidelines: logo, clear space, colours, don’ts, typography",shop:"Promotional material: the brand in a shop window"}},ke=(e,t)=>({fr:e,en:t}),Ch=[{problem:ke("Sport, sommeil, alimentation, santé : chacun arrive avec un objectif différent. Un suivi identique pour tous ne parle à personne.","Sport, sleep, nutrition, health: everyone arrives with a different goal. The same tracking for all speaks to no one."),answer:ke("Dès l’ouverture, on choisit un programme du catalogue ou l’on compose le sien, catégorie par catégorie. Le profil ajuste ensuite les repères.","From the first screen, you pick a programme from the catalogue or build your own, category by category. The profile then adjusts the targets."),screens:[{file:"ecran-choix",caption:ke("Choisir ou créer son programme","Pick or create a programme")},{file:"ecran-categories",caption:ke("Quatre catégories à régler","Four categories to set")},{file:"ecran-profil",caption:ke("Le profil et le mode de vie","Profile and lifestyle")}]},{problem:ke("Le cœur de cible veut des données poussées et fiables. Mais un écran saturé de chiffres décourage au lieu d’aider.","The core target wants detailed, reliable data. But a screen crammed with figures discourages instead of helping."),answer:ke("L’accueil n’affiche que les informations favorites : chacun en choisit jusqu’à six, parmi le sommeil, la santé et l’alimentation. Le détail reste à un geste.","The home screen only shows favourite information: each person picks up to six, across sleep, health and nutrition. Detail stays one tap away."),screens:[{file:"ecran-accueil",caption:ke("L’accueil et ses informations favorites","Home and its favourite information")},{file:"ecran-favoris",caption:ke("Le choix des informations, jusqu’à six","Choosing the information, up to six")},{file:"ecran-sommeil",caption:ke("Le détail, ici le sommeil","The detail, here sleep")}]},{problem:ke("Le risque d’un bracelet connecté : porté quelques semaines, puis oublié. Suivre ses chiffres ne suffit pas à revenir.","The risk with a connected wristband: worn for a few weeks, then forgotten. Tracking figures is not enough to come back."),answer:ke("Le programme avance jour après jour, et l’application propose des challenges chaque semaine. Un classement entre amis donne une raison de revenir : pour les autres autant que pour soi.","The programme moves forward day by day, and the app suggests challenges every week. A ranking among friends gives a reason to come back: for the others as much as for yourself."),screens:[{file:"ecran-classement",caption:ke("Les challenges de la semaine et le classement entre amis","The weekly challenges and the ranking among friends")}]}],Nh={fr:[{value:"+5 / 17",label:"modules optimisés par l’IA"},{value:"~1 500",label:"utilisateurs concernés"},{value:"1 an",label:"de delivery en banque régulée"}],en:[{value:"+5 / 17",label:"modules optimised with AI"},{value:"~1,500",label:"users reached"},{value:"1 year",label:"of delivery in regulated banking"}]};function Rd({lang:e}){return i.jsx("ul",{className:"my-4 grid grid-cols-3 gap-2 sm:gap-3",children:Nh[e].map(t=>i.jsxs("li",{className:"rounded-2xl border border-line bg-elevated p-3 sm:p-4",children:[i.jsx("span",{className:"block font-display text-[1.35rem] font-semibold leading-none tracking-[-0.03em] text-ink sm:text-[1.7rem]",children:t.value}),i.jsx("span",{className:"mt-1.5 block text-[11.5px] font-light leading-snug text-muted sm:text-xs",children:t.label})]},t.label))})}const Ah={fr:[{title:"Source de vérité",text:"Réutiliser avant d’inventer. Diverger est une décision discutée."},{title:"Double bibliothèque en miroir",text:"Le composant de référence et sa copie lisible par l’IA."},{title:"Aucune valeur inventée",text:"Dimensions, couleurs et comportements viennent des sources réelles."},{title:"Boucle courte et revue",text:"De petits changements, revus à l’œil, sur une branche."}],en:[{title:"Source of truth",text:"Reuse before inventing. Diverging is a discussed decision."},{title:"Mirrored double library",text:"The reference component and its AI-readable copy."},{title:"No invented value",text:"Dimensions, colours and behaviours come from the real sources."},{title:"Short loop and review",text:"Small changes, reviewed by eye, on a branch."}]};function Fd({lang:e}){return i.jsx("ol",{className:"my-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3",children:Ah[e].map((t,n)=>i.jsxs("li",{className:"flex gap-3 rounded-2xl border border-line bg-elevated p-4",children:[i.jsx("span",{className:"flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-fg",children:n+1}),i.jsxs("span",{className:"min-w-0",children:[i.jsx("span",{className:"block text-[13.5px] font-semibold leading-snug text-ink",children:t.title}),i.jsx("span",{className:"mt-1 block text-[12.5px] font-light leading-snug text-muted",children:t.text})]})]},t.title))})}const Dh={fr:[{role:"Lead Design",ai:"Cadre, standards, revues",human:"Pilote l’intention, arbitre"},{role:"UX UI Designer",ai:"Wireframes, parcours, prototypes",human:"Juge les générations"},{role:"Dev Front",ai:"Intégration, Design System",human:"Implémente"},{role:"Product Owner",ai:"Specs, priorisation",human:"Teste sur des prototypes autonomes"}],en:[{role:"Lead Design",ai:"Framework, standards, reviews",human:"Steers the intention, arbitrates"},{role:"UX UI Designer",ai:"Wireframes, flows, prototypes",human:"Judges the generations"},{role:"Front Dev",ai:"Integration, Design System",human:"Implements"},{role:"Product Owner",ai:"Specs, prioritisation",human:"Tests on standalone prototypes"}]},Ih=[Vf,Uf,Pf,If];function Ph({lang:e}){return i.jsx("ul",{className:"my-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3",children:Dh[e].map((t,n)=>{const r=Ih[n];return i.jsxs("li",{className:"rounded-2xl border border-line bg-elevated p-4",children:[i.jsxs("span",{className:"flex items-center gap-2 text-[13.5px] font-semibold text-ink",children:[i.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full bg-accent-tint text-accent-text",children:i.jsx(r,{size:14,"aria-hidden":!0})}),t.role]}),i.jsxs("span",{className:"mt-3 flex items-start gap-2 text-[12.5px] leading-snug text-ink",children:[i.jsxs("span",{className:"tag shrink-0 bg-[var(--ai-tint)] text-[var(--ai-text)]",children:[i.jsx(Ds,{size:12,"aria-hidden":!0})," Claude"]}),i.jsx("span",{className:"font-light",children:t.ai})]}),i.jsx("span",{className:"mt-1.5 block text-[12.5px] font-medium leading-snug text-ink",children:t.human})]},t.role)})})}const Th={fr:{handoff:"Passer le relais sans perte",chips:["Fichier d’état tenu à jour","Prompt de reprise prêt à coller","Mémoire dans des fichiers"],onboarding:"Onboarding par un seul prompt",steps:["Contexte","Outils","Accès","Dépôts","Arborescence","Opérationnel"],note:"Opérationnel en quelques heures, en autonomie."},en:{handoff:"Handoffs without loss",chips:["Status file kept up to date","Ready-to-paste kickoff prompt","Memory kept in files"],onboarding:"Onboarding from a single prompt",steps:["Context","Tools","Access","Repositories","Tree","Operational"],note:"Operational within a few hours, autonomously."}};function Eh({lang:e}){const t=Th[e];return i.jsxs("div",{className:"my-4 rounded-2xl border border-line bg-elevated p-4",children:[i.jsx("p",{className:"eyebrow text-muted",children:t.handoff}),i.jsx("ul",{className:"mt-2.5 flex flex-wrap gap-1.5",children:t.chips.map(n=>i.jsx("li",{className:"tag bg-olive-tint text-olive-text",children:n},n))}),i.jsx("p",{className:"eyebrow mt-5 text-muted",children:t.onboarding}),i.jsx("ol",{className:"mt-2.5 flex flex-wrap items-center gap-x-1.5 gap-y-2",children:t.steps.map((n,r)=>{const s=r===t.steps.length-1;return i.jsxs("li",{className:"flex items-center gap-1.5",children:[i.jsxs("span",{className:`inline-flex items-center gap-1.5 rounded-full py-1 pl-1 pr-2.5 text-[12px] font-medium ${s?"bg-accent text-accent-fg":"border border-line bg-bg text-ink"}`,children:[i.jsx("span",{className:`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold ${s?"bg-accent-fg text-accent":"bg-accent-tint text-accent-text"}`,children:r+1}),n]}),!s&&i.jsx(xr,{size:12,className:"text-muted","aria-hidden":!0})]},n)})}),i.jsx("p",{className:"mt-2.5 text-[12px] font-light text-muted",children:t.note})]})}const Lh={fr:{caption:"Même demande, sur un projet vide : une page complète de portfolio conversationnel",criterion:"Critère",without:"Sans le skill",withSkill:"Avec le skill",yes:"Respecté",no:"Non respecté",rows:[["Icône à droite du libellé dans chaque bouton",!1,!0],["Carte de suggestion à structure fixe",!1,!0],["Contact par email en bouton plein, CV en contour",!1,!0],["Chiffres clés en couleur neutre",!1,!0],["Aucun texte tout en majuscules",!0,!0],["Menu mobile en tiroir partiel",!0,!0],["Aucune couleur en dur, aucune ombre non prévue",!0,!0]],note:"Un essai par version. Sur le projet complet, le skill ne change rien : l’agent déduit les règles du code existant. Il sert donc là où le code ne montre pas encore l’exemple."},en:{caption:"Same request, on an empty project: a full conversational portfolio page",criterion:"Criterion",without:"Without the skill",withSkill:"With the skill",yes:"Met",no:"Not met",rows:[["Icon to the right of the label in every button",!1,!0],["Suggestion card with a fixed structure",!1,!0],["Email contact as filled button, CV outlined",!1,!0],["Key figures in neutral colour",!1,!0],["No all-caps text",!0,!0],["Mobile menu as a partial drawer",!0,!0],["No hard-coded colour, no unplanned shadow",!0,!0]],note:"One run per version. On the full project the skill changes nothing: the agent infers the rules from the existing code. So it is useful where the code does not yet show the example."}};function Bl({ok:e,label:t}){return i.jsx("span",{role:"img","aria-label":t,className:`inline-flex h-5 w-5 items-center justify-center rounded-full ${e?"bg-olive-tint text-olive-text":"bg-[var(--warn-tint)] text-[var(--warn-text)]"}`,children:e?i.jsx(jt,{size:11,strokeWidth:3,"aria-hidden":!0}):i.jsx(et,{size:11,strokeWidth:3,"aria-hidden":!0})})}function qh({lang:e}){const t=Lh[e],n=r=>`${t.rows.filter(s=>s[r]).length} / ${t.rows.length}`;return i.jsxs("figure",{className:"my-4 overflow-hidden rounded-2xl border border-line bg-elevated",children:[i.jsx("figcaption",{className:"eyebrow border-b border-line px-4 py-2.5 text-muted",children:t.caption}),i.jsxs("table",{className:"w-full border-collapse text-left",children:[i.jsx("thead",{children:i.jsxs("tr",{className:"border-b border-line",children:[i.jsx("th",{className:"eyebrow px-4 py-2.5 font-semibold text-ink",children:t.criterion}),i.jsx("th",{className:"eyebrow w-[4.5rem] px-2 py-2.5 text-center font-semibold text-ink sm:w-28",children:t.without}),i.jsx("th",{className:"eyebrow w-[4.5rem] px-2 py-2.5 text-center font-semibold text-ink sm:w-28",children:t.withSkill})]})}),i.jsxs("tbody",{children:[t.rows.map(([r,s,o])=>i.jsxs("tr",{className:"border-b border-line",children:[i.jsx("td",{className:"px-4 py-2 text-[12.5px] font-light leading-snug text-ink",children:r}),i.jsx("td",{className:"px-2 py-2 text-center",children:i.jsx(Bl,{ok:s,label:s?t.yes:t.no})}),i.jsx("td",{className:"px-2 py-2 text-center",children:i.jsx(Bl,{ok:o,label:o?t.yes:t.no})})]},r)),i.jsxs("tr",{children:[i.jsx("td",{className:"px-4 py-2.5"}),i.jsx("td",{className:"px-2 py-2.5 text-center font-display text-[1.05rem] font-semibold text-ink",children:n(1)}),i.jsx("td",{className:"px-2 py-2.5 text-center font-display text-[1.05rem] font-semibold text-ink",children:n(2)})]})]})]}),i.jsx("p",{className:"border-t border-line px-4 py-2.5 text-[12px] font-light leading-snug text-muted",children:t.note})]})}const zh={fr:{seen:"Ce qu’elle a vu",fixed:"La règle corrigée",items:[{seen:"Des chiffres clés qui se chevauchent et un trait qui ne sépare rien.",fixed:"Des consignes de mise en page : une grille, un trait seulement entre deux contenus."},{seen:"Deux boutons de même poids côte à côte, la couleur d’action au mauvais endroit.",fixed:"Une hiérarchie des actions : un bouton plein vert, l’autre en contour."},{seen:"Un menu sans bouton pour le replier, la langue écrite en toutes lettres.",fixed:"L’anatomie complète du menu et les deux versions du sélecteur."}]},en:{seen:"What she saw",fixed:"The rule she fixed",items:[{seen:"Key figures overlapping and a line that separated nothing.",fixed:"Layout guidance: a grid, and a line only between two contents."},{seen:"Two buttons of equal weight side by side, the action colour in the wrong place.",fixed:"An action hierarchy: one filled green button, the other outlined."},{seen:"A menu with no button to collapse it, the language written out in full.",fixed:"The full anatomy of the menu and both versions of the control."}]}};function Uh({lang:e}){const t=zh[e];return i.jsx("ol",{className:"my-4 space-y-2",children:t.items.map((n,r)=>i.jsxs("li",{className:"flex gap-3 rounded-2xl border border-line bg-elevated p-4",children:[i.jsx("span",{className:"flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-fg",children:r+1}),i.jsxs("span",{className:"grid min-w-0 flex-1 grid-cols-1 gap-x-5 gap-y-2 sm:grid-cols-2",children:[i.jsxs("span",{className:"min-w-0",children:[i.jsx("span",{className:"eyebrow block text-muted",children:t.seen}),i.jsx("span",{className:"mt-0.5 block text-[12.5px] font-light leading-snug text-ink",children:n.seen})]}),i.jsxs("span",{className:"min-w-0",children:[i.jsx("span",{className:"eyebrow block text-muted",children:t.fixed}),i.jsx("span",{className:"mt-0.5 block text-[12.5px] font-medium leading-snug text-ink",children:n.fixed})]})]})]},n.seen))})}const Ps=e=>`./grdf/${e}.jpg`,Mh={fr:{before:"Avant",after:"Après",slider:"Déplacer la séparation entre avant et après",caption:"La page d’accueil sur ordinateur : Act4Gaz, puis justdecarb.grdf.fr. Faites glisser la séparation."},en:{before:"Before",after:"After",slider:"Move the divider between before and after",caption:"The home page on desktop: Act4Gaz, then justdecarb.grdf.fr. Drag the divider."}};function Bd({lang:e}){const t=Mh[e],[n,r]=C.useState(50);return i.jsxs("figure",{className:"my-4",children:[i.jsxs("div",{className:"relative aspect-[16/10] select-none overflow-hidden rounded-2xl border border-line bg-elevated",children:[i.jsx("img",{src:Ps("apres-accueil"),alt:t.after,className:"absolute inset-0 h-full w-full object-cover object-top"}),i.jsx("div",{className:"absolute inset-0",style:{clipPath:`inset(0 ${100-n}% 0 0)`},children:i.jsx("img",{src:Ps("avant-accueil"),alt:t.before,className:"absolute inset-0 h-full w-full object-cover object-top"})}),i.jsx("span",{className:"tag absolute left-3 top-3 bg-ink text-bg",children:t.before}),i.jsx("span",{className:"tag absolute right-3 top-3 bg-ink text-bg",children:t.after}),i.jsx("div",{className:"pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-ink",style:{left:`${n}%`},children:i.jsx("span",{className:"absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-bg",children:i.jsx(Df,{size:16,"aria-hidden":!0})})}),i.jsx("input",{type:"range",min:0,max:100,value:n,onChange:s=>r(Number(s.target.value)),"aria-label":t.slider,className:"absolute inset-0 h-full w-full cursor-ew-resize opacity-0"})]}),i.jsx("figcaption",{className:"mt-2 text-[12.5px] font-light leading-snug text-muted",children:t.caption})]})}const Rh={persona:[{file:"persona",caption:{fr:"Le persona : Julien, ses besoins, ce qu’il aime, ses frustrations",en:"The persona: Julien, his needs, likes and frustrations"}}],map:[{file:"parcours",caption:{fr:"Carte d’expérience sur l’ancienne plateforme : actions, réflexions, émotions",en:"Experience map on the old platform: actions, thoughts, emotions"}}],moodboard:[{file:"moodboard",caption:{fr:"Moodboard de la nouvelle identité",en:"Moodboard for the new identity"}}],screens:[{file:"apres-accueil",caption:{fr:"La une : un contenu à la fois, puis les chiffres clés",en:"Front page: one piece of content at a time, then the key figures"}},{file:"apres-contenus",caption:{fr:"Les contenus : une thématique, puis un filtre par format",en:"Content: a topic, then a filter by format"}}]};function $r({lang:e,set:t}){const n=Rh[t],r=n.length===1;return i.jsx("ul",{className:`my-4 grid grid-cols-1 gap-3 ${r?"":"sm:grid-cols-2"} ${t==="persona"?"max-w-[420px]":""}`,children:n.map(s=>i.jsx("li",{className:"flex",children:i.jsxs("a",{href:Ps(s.file),target:"_blank",rel:"noopener noreferrer",className:"t-all flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-elevated hover:border-rule",children:[i.jsx("img",{src:Ps(s.file),alt:s.caption[e],loading:"lazy",className:r?"block h-auto w-full":"block aspect-[16/10] w-full object-cover object-top"}),i.jsx("span",{className:"block flex-1 border-t border-line px-4 py-2.5 text-[12.5px] font-light leading-snug text-muted",children:s.caption[e]})]})},s.file))})}function _d({id:e,eyebrow:t,title:n,text:r,embed:s,frameTitle:o,links:a,tall:l}){return i.jsx("section",{id:e,className:"mt-6 scroll-mt-16 rounded-3xl border border-line bg-elevated p-5",children:i.jsxs("div",{className:"grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto]",children:[i.jsxs("div",{className:"min-w-0",children:[i.jsx("p",{className:"eyebrow text-muted",children:t}),i.jsx("h3",{className:"mt-1 font-display text-[1.2rem] font-semibold leading-tight tracking-[-0.02em] text-ink",children:n}),i.jsx("p",{className:"mt-2 text-[13.5px] font-light leading-relaxed text-muted",children:r}),i.jsx("div",{className:"mt-4 flex flex-wrap gap-3",children:a.map((u,d)=>i.jsxs("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:d===0?"btn-primary":"btn-secondary",children:[u.label," ",i.jsx(vr,{size:15,"aria-hidden":!0})]},u.href))})]}),i.jsx("div",{className:`relative mx-auto w-[300px] max-w-full overflow-hidden rounded-xl border border-rule bg-white ${l?"aspect-[375/812]":"aspect-[375/700]"}`,children:i.jsx("iframe",{src:s,title:o,loading:"eager",allowFullScreen:!0,className:"absolute inset-x-0 -top-10 block h-[calc(100%+5rem)] w-full border-0"})})]})})}function Fh({id:e,lang:t}){const n=Td[t];return i.jsx(_d,{id:e,eyebrow:n.protoEyebrow,title:n.ctaTitle,text:n.ctaText,embed:sh,frameTitle:n.viewerTitle,links:[{label:n.site,href:oh},{label:n.openFigma,href:ih}]})}const Bh={persona:"persona",map:"parcours",brand:"charte",shop:"vitrine"};function Gr({lang:e,shot:t}){const n=Na[e][t],r=`./vitalize/${Bh[t]}.jpg`;return i.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"t-all my-4 block overflow-hidden rounded-2xl border border-line bg-elevated hover:border-rule",children:[i.jsx("img",{src:r,alt:n,loading:"lazy",className:"block h-auto w-full"}),i.jsx("span",{className:"block border-t border-line px-4 py-2.5 text-[12.5px] font-light leading-snug text-muted",children:n})]})}function Si({lang:e,n:t}){const n=Ch[t],r=Na[e];return i.jsxs("section",{className:"my-4 overflow-hidden rounded-2xl border border-line bg-elevated",children:[i.jsxs("div",{className:"grid grid-cols-1 gap-x-6 gap-y-4 p-5 sm:grid-cols-2",children:[i.jsxs("div",{className:"min-w-0",children:[i.jsx("span",{className:"tag border border-rule text-ink",children:r.problem}),i.jsx("p",{className:"mt-2 text-[13.5px] font-light leading-relaxed text-ink",children:n.problem[e]})]}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("span",{className:"tag bg-olive-tint text-olive-text",children:r.answer}),i.jsx("p",{className:"mt-2 text-[13.5px] leading-relaxed text-ink",children:n.answer[e]})]})]}),i.jsx("ul",{className:"flex justify-center gap-4 border-t border-line bg-surface-2 p-5",children:n.screens.map(s=>i.jsxs("li",{className:"min-w-0 max-w-[180px] flex-1",children:[i.jsx("img",{src:`./vitalize/${s.file}.jpg`,alt:s.caption[e],loading:"lazy",className:"block h-auto w-full rounded-xl border border-rule"}),i.jsx("span",{className:"mt-2 block text-center text-[12.5px] font-light leading-snug text-muted",children:s.caption[e]})]},s.file))})]})}function _h({id:e,lang:t}){const n=Na[t];return i.jsx(_d,{id:e,eyebrow:n.protoEyebrow,title:n.ctaTitle,text:n.ctaText,embed:jh,tall:!0,frameTitle:n.viewerTitle,links:[{label:n.openFigma,href:Sh}]})}const Od=e=>`./rebrand/${e}.jpg`,Vd={fr:{logo:"Le nouveau logo",hero:"Haut de la page d’accueil : le montage photo",desktop:"La page d’accueil sur ordinateur",mobile:"Sur mobile",scroll:"Maquette à faire défiler"},en:{logo:"The new logo",hero:"Top of the home page: the photo composite",desktop:"The home page on desktop",mobile:"On mobile",scroll:"Scrollable mockup"}};function _l({lang:e,shot:t}){const n=Vd[e][t];return i.jsxs("figure",{className:`my-4 overflow-hidden rounded-2xl border border-line bg-elevated ${t==="logo"?"max-w-[420px]":""}`,children:[i.jsx("img",{src:Od(t),alt:n,loading:"lazy",className:"block h-auto w-full"}),i.jsx("figcaption",{className:"border-t border-line px-4 py-2.5 text-[12.5px] font-light leading-snug text-muted",children:n})]})}function Ts({file:e,caption:t,label:n,phone:r,src:s}){return i.jsxs("figure",{className:r?"mx-auto w-[230px] max-w-full":"min-w-0",children:[i.jsx("div",{tabIndex:0,role:"region","aria-label":`${n} — ${t}`,className:`h-[460px] overflow-y-auto border bg-elevated ${r?"rounded-xl border-rule":"rounded-2xl border-line"}`,children:i.jsx("img",{src:s??Od(e),alt:t,loading:"lazy",className:"block h-auto w-full"})}),i.jsx("figcaption",{className:"mt-2 text-[12.5px] font-light leading-snug text-muted",children:t})]})}function Oh({lang:e}){const t=Vd[e];return i.jsxs("div",{className:"my-4 grid grid-cols-1 items-start gap-4 md:grid-cols-[1fr_230px]",children:[i.jsx(Ts,{file:"desktop",caption:t.desktop,label:t.scroll}),i.jsx(Ts,{file:"mobile",caption:t.mobile,label:t.scroll,phone:!0})]})}const Co=e=>`./bloombar/${e}.jpg`,$d={fr:{hero:"Le haut de la page d’accueil : les fleurs en relief",box:"Le packaging et le coffret à composer",wireframe:"Le wireframe de départ",page:"La même page, avec la direction artistique",scroll:"Maquette à faire défiler"},en:{hero:"Top of the home page: the flowers in relief",box:"The packaging and the box to build",wireframe:"The starting wireframe",page:"The same page, with the art direction",scroll:"Scrollable mockup"}};function Ol({lang:e,shot:t}){const n=$d[e][t];return i.jsxs("figure",{className:"my-4 overflow-hidden rounded-2xl border border-line bg-elevated",children:[i.jsx("img",{src:Co(t),alt:n,loading:"lazy",className:"block h-auto w-full"}),i.jsx("figcaption",{className:"border-t border-line px-4 py-2.5 text-[12.5px] font-light leading-snug text-muted",children:n})]})}function Vh({lang:e}){const t=$d[e];return i.jsxs("div",{className:"my-4 grid grid-cols-1 items-start gap-4 sm:grid-cols-2",children:[i.jsx(Ts,{file:"wireframe",src:Co("wireframe"),caption:t.wireframe,label:t.scroll}),i.jsx(Ts,{file:"maquette",src:Co("maquette"),caption:t.page,label:t.scroll})]})}function Gd({links:e,label:t}){const n=r=>{var s;return(s=document.getElementById(r))==null?void 0:s.scrollIntoView({behavior:"smooth",block:"start"})};return i.jsx("nav",{"aria-label":t,className:"sticky top-0 z-10 -mx-1 mb-5 bg-bg px-1 py-2.5",children:i.jsx("ul",{className:"flex gap-1.5 overflow-x-auto",children:e.map((r,s)=>i.jsx("li",{className:"shrink-0",children:i.jsxs("button",{onClick:()=>n(r.id),className:"t-all inline-flex items-center gap-1.5 rounded-full border border-line bg-elevated px-3 py-1.5 text-xs font-medium text-ink hover:border-rule hover:bg-surface-2",children:[i.jsx("span",{className:"font-display text-[11px] italic opacity-60",children:String(s+1).padStart(2,"0")}),r.label]})},r.id))})})}const $h=`#!/usr/bin/env node
/**
 * Vérifie les règles du Design System ASL contrôlables automatiquement (couleurs, fonds, ombres, majuscules) dans des fichiers .tsx / .jsx.
 *
 *   node .claude/skills/asl-design-system/scripts/check.mjs               → tout src/
 *   node .claude/skills/asl-design-system/scripts/check.mjs src/a.tsx …   → fichiers donnés
 *
 * Sortie : une ligne par écart (fichier:ligne, règle, extrait). Code de retour 1 s'il y a une erreur.
 * Les « à vérifier » ne font pas échouer : ils demandent un regard humain.
 *
 * Pour assumer un écart, écrire sur la même ligne ou la ligne précédente :
 *   // ds-ignore: la raison
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const STANDARD =
  'red|blue|green|gray|grey|slate|zinc|neutral|stone|amber|yellow|orange|lime|emerald|teal|cyan|sky|indigo|violet|purple|fuchsia|pink|rose|white|black';

/** Chaque contrôle : règle du skill, niveau, motif, message. */
const CHECKS = [
  { rule: 1, level: 'erreur', re: /#[0-9a-fA-F]{3,8}\\b/g, msg: 'couleur écrite en dur (hex) : utiliser un token' },
  { rule: 1, level: 'erreur', re: /\\brgba?\\(/g, msg: 'couleur écrite en dur (rgb) : utiliser un token' },
  {
    rule: 1,
    level: 'erreur',
    re: new RegExp(\`\\\\b(?:bg|text|border|ring|outline|fill|stroke|from|via|to|divide|placeholder)-(?:\${STANDARD})(?:-\\\\d{2,3})?(?:\\\\/\\\\d+)?\\\\b\`, 'g'),
    msg: 'couleur Tailwind standard : utiliser un token',
  },
  { rule: 1, level: 'erreur', re: /\\bdark:/g, msg: 'préfixe dark: — le thème passe par les tokens' },
  { rule: 2, level: 'erreur', re: /\\b(?:bg-gradient-to-[a-z]+|bg-\\[(?:linear|radial|conic)-gradient)|(?:linear|radial|conic)-gradient\\(/g, msg: 'dégradé : les fonds sont unis' },
  { rule: 2, level: 'erreur', re: /\\bbg-\\[url\\(|backgroundImage/g, msg: 'texture ou image de fond : les fonds sont unis' },
  { rule: 2, level: 'erreur', re: /(?<!backdrop-)\\bblur-(?:2xl|3xl|\\[)/g, msg: 'halo flou décoratif : les fonds sont unis' },
  {
    rule: 2,
    level: 'à vérifier',
    re: /\\b(?:w-full|w-screen|inset-x-0)\\b[^"'\`]*\\bbg-(?:accent|olive|vermillion)\\b(?!-)|\\bbg-(?:accent|olive|vermillion)\\b(?!-)[^"'\`]*\\b(?:w-full|w-screen|inset-x-0)\\b/g,
    msg: 'grande surface colorée ? Un bouton pleine largeur est permis, pas un bandeau ou une carte',
  },
  { rule: 3, level: 'erreur', re: /\\b(?:drop-)?shadow-(?!signature\\b|none\\b)[\\w[\\]().,%#/-]+/g, msg: 'ombre non prévue : seule shadow-signature existe' },
  // le mot « shadow » seul n'est une classe que dans un attribut de classes, pas dans un texte
  { rule: 3, level: 'erreur', onlyIn: /class(?:Name)?=|cls:/, re: /(?<![\\w-])shadow(?![\\w-])/g, msg: 'ombre non prévue : seule shadow-signature existe' },
  { rule: 'typo', level: 'erreur', onlyIn: /class(?:Name)?=|cls:|\`/, re: /(?<![\\w-])uppercase(?![\\w-])/g, msg: 'texte tout en majuscules : casse normale partout (fondations.md)' },
  { rule: 3, level: 'à vérifier', re: /\\bshadow-signature\\b/g, msg: 'ombre : réservée à la zone de saisie et à l’action principale' },
];

function listFiles(target) {
  const st = statSync(target);
  if (st.isFile()) return [target];
  return readdirSync(target).flatMap((name) => {
    if (name === 'node_modules' || name.startsWith('.')) return [];
    const p = join(target, name);
    return statSync(p).isDirectory() ? listFiles(p) : /\\.(tsx|jsx)$/.test(name) ? [p] : [];
  });
}

const targets = process.argv.slice(2);
const files = (targets.length ? targets : ['src']).flatMap(listFiles);
const findings = [];

for (const file of files) {
  const lines = readFileSync(file, 'utf8').split('\\n');
  lines.forEach((line, i) => {
    const ignored = /ds-ignore:/.test(line) || (i > 0 && /ds-ignore:/.test(lines[i - 1]));
    // les commentaires ne sont pas du code affiché
    const code = line.replace(/\\/\\/.*$/, '').replace(/\\/\\*.*?\\*\\//g, '').replace(/^\\s*\\*.*$/, '');
    for (const c of CHECKS) {
      if (c.onlyIn && !c.onlyIn.test(code)) continue;
      for (const m of code.matchAll(c.re)) {
        findings.push({ file: relative(process.cwd(), file), line: i + 1, ...c, hit: m[0].slice(0, 60), ignored });
      }
    }
  });
}

const active = findings.filter((f) => !f.ignored);
const errors = active.filter((f) => f.level === 'erreur');
const reviews = active.filter((f) => f.level === 'à vérifier');
const ignoredCount = findings.length - active.length;

for (const f of [...errors, ...reviews]) {
  console.log(\`\${f.level === 'erreur' ? '✗' : '?'} \${f.file}:\${f.line}  règle \${f.rule}  \${f.msg}  →  \${f.hit}\`);
}
console.log(
  \`\\n\${files.length} fichier(s) · \${errors.length} erreur(s) · \${reviews.length} à vérifier · \${ignoredCount} écart(s) assumé(s) (ds-ignore)\`,
);
process.exit(errors.length ? 1 : 0);
`,Wd="asl-design-system/",Vl=[{path:"SKILL.md",content:jd},{path:"references/fondations.md",content:Cd},{path:"references/styles.md",content:Nd},{path:"references/composants.md",content:Sd},{path:"scripts/check.mjs",content:$h}];function Gh(e,t){return e==="---"?"text-code-muted":t?"text-[var(--code-key)]":/^#{1,3}\s/.test(e)?"font-semibold text-[var(--code-heading)]":(/^\s*- \[ \]/.test(e),"text-code-ink")}function Wh({t:e}){const[t,n]=C.useState(0),[r,s]=C.useState(!1),o=Vl[t],a=o.content.replace(/\n$/,"").split(`
`),l=async()=>{try{await navigator.clipboard.writeText(o.content),s(!0),window.setTimeout(()=>s(!1),1600)}catch{}};let u=0;return i.jsxs("figure",{className:"rise my-6 overflow-hidden rounded-3xl border border-line bg-code-bg",children:[i.jsxs("div",{className:"flex flex-wrap items-center gap-2 border-b border-[var(--code-line)] px-4 py-3",children:[i.jsx(ja,{size:15,className:"text-code-muted","aria-hidden":!0}),i.jsx("span",{className:"font-mono text-xs text-code-muted",children:Wd}),i.jsx("span",{className:"ml-auto rounded-full bg-[var(--code-key-tint)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--code-key)]",children:e.skill.badge})]}),i.jsxs("div",{className:"flex items-center gap-1 overflow-x-auto border-b border-[var(--code-line)] px-2 pt-2",role:"tablist",children:[Vl.map((d,p)=>i.jsxs("button",{role:"tab","aria-selected":p===t,onClick:()=>n(p),className:`t-all flex shrink-0 items-center gap-1.5 rounded-t-xl px-3 py-2 font-mono text-xs ${p===t?"bg-[var(--code-line)] text-code-ink":"text-code-muted hover:text-code-ink"}`,children:[i.jsx(Sr,{size:13,"aria-hidden":!0}),d.path]},d.path)),i.jsxs("button",{onClick:l,className:"t-all ml-auto mr-1 flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-code-muted hover:bg-[var(--code-line)] hover:text-code-ink",children:[r?e.skill.copied:e.skill.copy,r?i.jsx(jt,{size:13,"aria-hidden":!0}):i.jsx(fd,{size:13,"aria-hidden":!0})]})]}),i.jsx("pre",{className:"max-h-[380px] overflow-auto py-3 font-mono text-[12.5px] leading-[1.65]",role:"tabpanel",children:a.map((d,p)=>{const g=d==="---",h=t===0&&u===1&&!g;return g&&u++,i.jsxs("div",{className:"flex px-4 hover:bg-[var(--code-hover)]",children:[i.jsx("span",{className:"w-8 shrink-0 select-none pr-3 text-right text-code-muted opacity-60","aria-hidden":!0,children:p+1}),i.jsx("span",{className:`min-w-0 whitespace-pre-wrap break-words ${Gh(d,h)}`,children:d||" "})]},p)})}),i.jsx("figcaption",{className:"border-t border-[var(--code-line)] px-4 py-2.5 text-xs font-light text-code-muted",children:e.skill.caption})]})}function Hh({message:e,lang:t,t:n,streamCount:r,isLast:s,onAction:o,onFollowUp:a,onOpenPrototype:l,onOpenDesignSystem:u}){var S,P;if(e.role==="user"){const j=e.text??Bt(e.questionOf??"").question[t];return i.jsx("div",{className:"rise flex justify-end",children:i.jsx("div",{className:"max-w-[85%] whitespace-pre-wrap break-words rounded-3xl rounded-br-md bg-bubble px-5 py-3 text-[15px] leading-relaxed text-bubble-fg",children:j})})}const d=Bt(e.intentId),p=Ld(e.intentId,t,e.model),g=r!==null,h=g?r:e.stoppedAt,x=h==null?p:qd(p).slice(0,h).join(""),v=!g&&e.stoppedAt===void 0,y=g&&r===0,k=(S=d.actions)!=null&&S.includes("email")?"email":(P=d.actions)==null?void 0:P[0],m=p.includes("[[flow]]"),c=d.flow?i.jsx(zd,{id:`${e.id}-flow`,lang:t,board:d.flow==="covenant"?Dd:d.flow==="grdf"?rh:ah,cta:d.flow==="covenant"?{label:ge[t].open,onClick:()=>l("covenant")}:d.flow==="grdf"?{label:Td[t].open,onClick:()=>{var j;return(j=document.getElementById(`${e.id}-proto`))==null?void 0:j.scrollIntoView({behavior:"smooth",block:"start"})}}:void 0}):null,f=ge[t],b=d.anchors?[...d.flow&&!m?[{id:`${e.id}-flow`,label:d.flow==="covenant"?f.navFlow:f.navUxFlow}]:[],...[...p.matchAll(/^###\s+(.+)$/gm)].map((j,D)=>({id:`${e.id}-s${D}`,label:j[1]})),...d.attachment==="covenant"||d.attachment==="grdf"||d.attachment==="vitalize"?[{id:`${e.id}-proto`,label:f.navProto}]:[]]:[];return i.jsxs("div",{className:"rise flex gap-3 sm:gap-4",children:[i.jsx("div",{className:"mt-0.5 hidden sm:block",children:i.jsx(Jn,{size:34})}),i.jsxs("div",{className:"min-w-0 flex-1",children:[i.jsxs("div",{className:"eyebrow mb-2.5 flex items-center gap-2.5",children:[i.jsx("span",{className:"font-semibold text-ink",children:n.assistantName}),i.jsx("span",{className:"h-px w-5 bg-rule","aria-hidden":!0}),i.jsx("span",{className:"text-muted",children:n.models[e.model].name})]}),b.length>0&&!y&&i.jsx(Gd,{links:b,label:f.navLabel}),!m&&!y&&c,y?i.jsx("div",{className:"flex h-7 items-center gap-1.5",role:"status","aria-label":n.thinking,children:[0,1,2].map(j=>i.jsx("span",{className:"thinking-dot",style:{animationDelay:`${j*.16}s`}},j))}):i.jsxs("div",{"aria-live":g?"off":"polite",children:[i.jsx(Wt,{text:x,anchorPrefix:d.anchors?e.id:void 0,embeds:{flow:c,"grdf-compare":i.jsx(Bd,{lang:t}),"grdf-persona":i.jsx($r,{lang:t,set:"persona"}),"grdf-map":i.jsx($r,{lang:t,set:"map"}),"grdf-moodboard":i.jsx($r,{lang:t,set:"moodboard"}),"grdf-screens":i.jsx($r,{lang:t,set:"screens"}),"rebrand-logo":i.jsx(_l,{lang:t,shot:"logo"}),"rebrand-hero":i.jsx(_l,{lang:t,shot:"hero"}),"rebrand-screens":i.jsx(Oh,{lang:t}),"vitaliz-decision-1":i.jsx(Si,{lang:t,n:0}),"vitaliz-decision-2":i.jsx(Si,{lang:t,n:1}),"vitaliz-decision-3":i.jsx(Si,{lang:t,n:2}),"vitalize-persona":i.jsx(Gr,{lang:t,shot:"persona"}),"vitalize-map":i.jsx(Gr,{lang:t,shot:"map"}),"vitalize-brand":i.jsx(Gr,{lang:t,shot:"brand"}),"vitalize-shop":i.jsx(Gr,{lang:t,shot:"shop"}),"bloombar-hero":i.jsx(Ol,{lang:t,shot:"hero"}),"bloombar-box":i.jsx(Ol,{lang:t,shot:"box"}),"bloombar-screens":i.jsx(Vh,{lang:t}),"repo-map":i.jsx(kh,{lang:t}),"bnp-figures":i.jsx(Rd,{lang:t}),"ds-principles":i.jsx(Fd,{lang:t}),"team-roles":i.jsx(Ph,{lang:t}),relay:i.jsx(Eh,{lang:t}),"skill-test":i.jsx(qh,{lang:t}),"skill-lessons":i.jsx(Uh,{lang:t})}}),g&&i.jsx("span",{className:"caret","aria-hidden":!0})]}),e.stoppedAt!==void 0&&i.jsxs("p",{className:"tag mt-3 border border-rule text-ink",children:[i.jsx(Ca,{size:10,className:"fill-current","aria-hidden":!0})," ",n.stopped]}),v&&d.attachment==="skill"&&e.model!=="express"&&i.jsx(Wh,{t:n}),v&&(d.attachment==="skill"||d.attachment==="ds")&&i.jsxs("div",{className:"rise mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 rounded-3xl border border-line bg-elevated p-5",children:[i.jsxs("div",{className:"min-w-0 flex-1 basis-64",children:[i.jsx("p",{className:"text-sm font-semibold text-ink",children:Yn[t].openTitle}),i.jsx("p",{className:"mt-1 text-[13px] font-light leading-relaxed text-muted",children:Yn[t].openText})]}),i.jsxs("button",{onClick:u,className:"btn-primary",children:[Yn[t].open," ",i.jsx(hd,{size:14,"aria-hidden":!0})]})]}),!y&&d.attachment==="grdf"&&i.jsx(Fh,{id:`${e.id}-proto`,lang:t}),!y&&d.attachment==="vitalize"&&i.jsx(_h,{id:`${e.id}-proto`,lang:t}),v&&d.attachment==="covenant"&&i.jsxs("div",{id:`${e.id}-proto`,className:"rise mt-6 flex scroll-mt-16 flex-wrap items-center gap-x-5 gap-y-3 rounded-3xl border border-line bg-elevated p-5",children:[i.jsxs("div",{className:"min-w-0 flex-1 basis-64",children:[i.jsx("p",{className:"text-sm font-semibold text-ink",children:ge[t].ctaTitle}),i.jsx("p",{className:"mt-1 text-[13px] font-light leading-relaxed text-muted",children:ge[t].ctaText})]}),i.jsxs("button",{onClick:()=>l("covenant"),className:"btn-primary",children:[ge[t].open," ",i.jsx(Sa,{size:14,className:"fill-current","aria-hidden":!0})]})]}),v&&d.actions&&i.jsx("div",{className:"rise mt-5 flex flex-wrap gap-3",children:[...d.actions].sort((j,D)=>+(D===k)-+(j===k)).map(j=>{const D=j==="cv"?Sr:We;return i.jsxs("button",{onClick:()=>o(j),className:j===k?"btn-primary":"btn-secondary",children:[j==="cv"?n.actionCV:n.actionEmail," ",i.jsx(D,{size:16,"aria-hidden":!0})]},j)})}),v&&s&&d.followUps&&i.jsxs("div",{className:"rise mt-6",children:[i.jsxs("p",{className:"eyebrow mb-3 flex items-center gap-3 text-muted",children:[i.jsx("span",{children:n.followUps}),i.jsx("span",{className:"h-px flex-1 bg-line","aria-hidden":!0})]}),i.jsx("div",{className:"flex flex-wrap gap-2",children:d.followUps.map(j=>{const D=Bt(j);return i.jsxs("button",{onClick:()=>a(j),className:"t-all group inline-flex items-center gap-1.5 rounded-full border border-line bg-elevated px-3.5 py-1.5 text-left text-sm text-ink hover:border-rule hover:bg-surface-2",children:[(D.chip??D.question)[t],i.jsx(vr,{size:14,className:"shrink-0 text-vermillion","aria-hidden":!0})]},j)})})]})]})]})}const re={name:"Anne-Sophie Leroy",monogram:"ASL",email:"leroy.annesophie02@gmail.com",phone:"06 30 47 84 39",phoneHref:"tel:+33630478439",linkedin:"linkedin.com/in/anne-sophie-leroy",linkedinHref:"https://www.linkedin.com/in/anne-sophie-leroy",location:"Paris, France",cvFile:"CV-Anne-Sophie-Leroy.pdf"},Xh={fr:"Product Designer — UX/UI, Design Ops & AI Workflows",en:"Product Designer — UX/UI, Design Ops & AI Workflows"},Kh={fr:"Product Designer à l’intersection de l’UX/UI, du Design System et de l’IA. Je conçois des interfaces complexes et industrialise les workflows design. Du cadrage au prototypage en vibecoding, avec un regard façonné par les arts visuels.",en:"Product Designer at the intersection of UX/UI, Design Systems and AI. I design complex interfaces and industrialise design workflows. From framing to vibecoded prototypes, with an eye shaped by the visual arts."},No=[{id:"bnp",intentId:"bnp",title:{fr:"Banque d’investissement · Cadrer une équipe UX augmentée par l’IA",en:"Investment bank · Framing an AI-augmented UX team"},tag:{fr:"2026 · Design Ops · IA",en:"2026 · Design Ops · AI"}},{id:"covenant",intentId:"covenant",title:{fr:"Banque d’investissement · Suivi des clauses de crédit assisté par l’IA",en:"Investment bank · AI-assisted monitoring of loan clauses"},tag:{fr:"2026 · Crédit · IA",en:"2026 · Lending · AI"}},{id:"grdf",intentId:"grdf",title:{fr:"GRDF · Refonte éco-conçue et RGAA",en:"GRDF · Eco-designed redesign and RGAA"},tag:{fr:"2024 · Énergie · Accessibilité",en:"2024 · Energy · Accessibility"}}],Ao=[{id:"vitalize",intentId:"vitalize",title:{fr:"Vitaliz · Des personas à l’application mobile",en:"Vitaliz · From personas to the mobile app"},tag:{fr:"2023 · Master 2 · Étude UX complète",en:"2023 · Master’s year 2 · Full UX study"}},{id:"bloombar",intentId:"bloombar",title:{fr:"Bloom Bar · Direction artistique et illustration 3D",en:"Bloom Bar · Art direction and 3D illustration"},tag:{fr:"2023 · Master 2 · Direction artistique",en:"2023 · Master’s year 2 · Art direction"}},{id:"rebrand",intentId:"rebrand",title:{fr:"McDonald’s · Rebranding pour une nouvelle cible",en:"McDonald’s · Rebranding for a new audience"},tag:{fr:"2021 · Master 1 · Identité visuelle",en:"2021 · Master’s year 1 · Visual identity"}}],Qh=[{company:"mc2i",role:{fr:"Product Designer UX/UI pour solutions IA",en:"UX/UI Product Designer for AI solutions"},period:{fr:"Janv. 2024 – Aujourd’hui",en:"Jan 2024 – Present"},location:"Paris",bullets:{fr:[],en:[]},missions:[{client:"BNP Paribas CIB",period:{fr:"Août 2024 – Aujourd’hui",en:"Aug 2024 – Present"},role:{fr:"UX UI Product Designer pour solutions IA",en:"UX UI Product Designer for AI solutions"},bullets:{fr:["Refonte complète de la chaîne de crédit pour grandes entreprises : automatisation de processus complexes par l’IA pour réduire significativement la charge cognitive des utilisateurs.","Optimisation du workflow design par l’IA : utilisation du vibecoding pour générer des prototypes haute fidélité en cohérence avec le Design System. Génération des spécifications (.md) UX UI.","Design Ops : co-construction de processus transverses entre les pôles Technique, UX et Produit pour fluidifier et accélérer le cycle de conception. Création de skills pour standardiser et accélérer le travail des équipes.","Gouvernance du Design System : gouvernance des composants UI pour l’IA.","Stratégie UX & recherche : conduite d’entretiens, cartographie de parcours et analyse de données pour traduire les exigences métier en solutions intuitives.","Collaboration agile : alignement continu entre Product Managers, équipes Tech et utilisateurs finaux.","Résultats : +5 modules sur 17 optimisés par l’IA aujourd’hui (environ 1 500 utilisateurs) ; réduction significative de la dette design et accélération du delivery ; une optimisation par l’IA adoptée par les utilisateurs ; réduction significative des erreurs de données."],en:["Full redesign of the credit chain for large corporates: AI automation of complex processes to significantly reduce users’ cognitive load.","AI-optimised design workflow: vibecoding to generate high-fidelity prototypes consistent with the Design System. Generation of UX/UI specifications (.md).","Design Ops: co-built cross-functional processes between the Tech, UX and Product teams to streamline and speed up the design cycle. Created skills to standardise and speed up the teams’ work.","Design System governance: governance of UI components for AI.","UX strategy & research: interviews, journey mapping and data analysis to translate business requirements into intuitive solutions.","Agile collaboration: continuous alignment between Product Managers, Tech teams and end users.","Results: +5 of 17 modules optimised with AI today (around 1,500 users); significant reduction of design debt and faster delivery; AI optimisation adopted by users; significant reduction of data errors."]}},{client:"La Caisse des Dépôts",period:{fr:"Avr. 2024 – Août 2024",en:"Apr 2024 – Aug 2024"},role:{fr:"UX UI Designer",en:"UX UI Designer"},bullets:{fr:["Design et refonte d’Emaj, outil interne de gestion stratégique des carrières.","Insights utilisateurs & analyse : entretiens utilisateurs et analyse de données pour en extraire des insights exploitables et définir les besoins fondamentaux des utilisateurs.","Facilitation d’ateliers : planification et animation d’ateliers collaboratifs pour aligner les parties prenantes et co-créer des solutions.","Prototypage haute fidélité et tests utilisateurs : prototypes interactifs pour valider les flux utilisateurs et les fonctionnalités.","Coordination de projet : organisation des activités inter-équipes."],en:["Design and redesign of Emaj, an internal strategic career-management tool.","User insights & analysis: user interviews and data analysis to extract actionable insights and define users’ core needs.","Workshop facilitation: planned and ran collaborative workshops to align stakeholders and co-create solutions.","High-fidelity prototyping and user testing: interactive prototypes to validate user flows and features.","Project coordination: organised cross-team activities."]}},{client:"GRDF",period:{fr:"Janv. 2024 – Mai 2024",en:"Jan 2024 – May 2024"},role:{fr:"UX UI Designer",en:"UX UI Designer"},bullets:{fr:["Refonte et rebranding de la plateforme Act4Gaz en justdecarb.grdf.fr, pour une expérience digitale performante, accessible et éco-conçue.","Audits UX & ergonomie : audits approfondis d’accessibilité et d’utilisabilité pour identifier les points de friction et garantir la conformité aux normes de durabilité numérique (RGAA).","Identité visuelle & Design System : nouvelle identité graphique et bibliothèque de Design System dédiée, accessible et éco-responsable.","Prototypage haute fidélité : maquettes responsives mobile first et prototypes interactifs pour valider les parcours utilisateurs sur tous les appareils.","Résultats : amélioration de la performance environnementale, avec la note C EcoIndex pour le nouveau site, tout en garantissant la conformité RGAA."],en:["Redesign and rebranding of the Act4Gaz platform into justdecarb.grdf.fr, for a fast, accessible and eco-designed digital experience.","UX & usability audits: in-depth accessibility and usability audits to identify pain points and ensure compliance with digital sustainability standards (RGAA).","Visual identity & Design System: new visual identity and a dedicated, accessible and eco-responsible Design System library.","High-fidelity prototyping: responsive mobile-first mockups and interactive prototypes to validate user journeys on every device.","Results: better environmental performance, with an EcoIndex grade C for the new site, while ensuring RGAA compliance."]}}]},{company:"Groupe Kering",role:{fr:"Product Designer",en:"Product Designer"},period:{fr:"Sept. 2022 – Déc. 2023",en:"Sep 2022 – Dec 2023"},location:"Paris",bullets:{fr:["Numérisation d’une carte de réduction physique, offrant une solution mobile évolutive pour une base de 40 000 utilisateurs.","Recherche utilisateurs : direction d’entretiens et d’ateliers pour définir les besoins fondamentaux des utilisateurs.","Stratégie UX : audits et cartographies UX pour simplifier les parcours utilisateurs complexes.","Design UI : interfaces haute fidélité et composants de Design System évolutifs.","Tests utilisateurs : tests itératifs pour valider et affiner les solutions de design.","Résultats : 40 000 utilisateurs utilisent aujourd’hui l’application Privilege Card ; gestion des quotas d’achat optimisée et respect des restrictions de vente en boutique fiabilisé."],en:["Turned a physical discount card into a scalable mobile solution for a base of 40,000 users.","User research: led interviews and workshops to define users’ core needs.","UX strategy: UX audits and journey maps to simplify complex user journeys.","UI design: high-fidelity interfaces and scalable Design System components.","User testing: iterative tests to validate and refine design solutions.","Results: 40,000 people use the Privilege Card app today; optimised purchase-quota management and more reliable in-store sales restrictions."]}},{company:"Eden Park",role:{fr:"Coordinatrice de contenu digital & de projet",en:"Digital Content & Project Coordinator"},period:{fr:"Janv. 2021 – Juil. 2022",en:"Jan 2021 – Jul 2022"},location:"Paris",bullets:{fr:["Coordination de projets digitaux de bout en bout, de la stratégie éditoriale à la création de contenu visuel pour le web et les réseaux sociaux.","Stratégie éditoriale : gestion du calendrier de contenu et du flux de publication du site web.","Maintenance du site web : gestion des tickets de maintenance liés au design et des mises à jour UX.","Production visuelle : visuels photo et vidéo pour les campagnes SMO/SEA.","Résultats : +20 % de ventes e-commerce en 1 an."],en:["End-to-end coordination of digital projects, from editorial strategy to visual content for the web and social media.","Editorial strategy: managed the content calendar and the website publishing flow.","Website maintenance: handled design-related maintenance tickets and UX updates.","Visual production: photo and video visuals for SMO/SEA campaigns.","Results: +20% e-commerce sales in one year."]}},{company:"Balmain · Indress",role:{fr:"Designer Broderie (Balmain) · Designer Studio (Indress)",en:"Embroidery Designer (Balmain) · Studio Designer (Indress)"},period:{fr:"Oct. – Déc. 2019",en:"Oct – Dec 2019"},location:"Paris",bullets:{fr:[],en:[]}}],Zh=[{label:{fr:"Design & Prototypage",en:"Design & Prototyping"},items:{fr:["Figma (Expert)","After Effects","Photoshop","Illustrator","Storybook","Zeroheight","Vibecoding"],en:["Figma (Expert)","After Effects","Photoshop","Illustrator","Storybook","Zeroheight","Vibecoding"]}},{label:{fr:"Outils d’IA",en:"AI tools"},items:{fr:["Prompt Engineering","Claude Code","Midjourney","Adobe Firefly","Gemini"],en:["Prompt Engineering","Claude Code","Midjourney","Adobe Firefly","Gemini"]}},{label:{fr:"Produit & collaboration",en:"Product & collaboration"},items:{fr:["Jira","Confluence","Teams"],en:["Jira","Confluence","Teams"]}},{label:{fr:"Développement",en:"Development"},items:{fr:["HTML & CSS (handoff design-to-dev)"],en:["HTML & CSS (design-to-dev handoff)"]}},{label:{fr:"Compétences relationnelles",en:"Interpersonal skills"},items:{fr:["Communication transversale","Apprentissage adaptatif","Résolution de problèmes complexes"],en:["Cross-functional communication","Adaptive learning","Complex problem solving"]}}],Yh=[{title:{fr:"Master Design UX/UI & Gestion de projet, en alternance",en:"Master’s in UX/UI Design & Project Management, work-study"},school:"Digital School of Paris",period:"2021 – 2023"},{title:{fr:"Bachelor Design de Mode & Textile",en:"Bachelor in Fashion & Textile Design"},school:"Atelier Chardon Savard, Nantes",period:"2016 – 2020"},{title:{fr:"Année préparatoire en Arts Appliqués (MANAA)",en:"Applied Arts foundation year (MANAA)"},school:"IMAD, Caen",period:"2018 – 2019"}],Jh={fr:["Français — Langue maternelle","Anglais — Courant","Espagnol — Compétences professionnelles limitées (B1)"],en:["French — Native","English — Fluent","Spanish — Limited working proficiency (B1)"]},eg={fr:["Bénévolat : inclusion sociale et orientation administrative des jeunes de l’Aide Sociale à l’Enfance","Piano classique (+5 ans)","Course à pied"],en:["Volunteering: social inclusion and administrative guidance for young people in child welfare care (ASE)","Classical piano (5+ years)","Running"]};function Ci({text:e}){const t=e.match(/^((?:Résultats|Results|Impact)\s?:)(.*)$/);return i.jsxs("li",{className:"flex gap-2.5 text-sm leading-relaxed text-ink",children:[i.jsx("span",{className:"mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-vermillion","aria-hidden":!0}),t?i.jsxs("span",{children:[i.jsx("strong",{className:"font-semibold text-olive-text",children:t[1]}),i.jsx("span",{className:"font-medium",children:t[2]})]}):i.jsx("span",{className:"font-light",children:e})]})}function Mn({label:e,children:t}){return i.jsxs("section",{className:"cv-section mt-7",children:[i.jsxs("h3",{className:"eyebrow mb-4 flex items-center gap-3 font-semibold text-ink",children:[i.jsx("span",{children:e}),i.jsx("span",{className:"h-px flex-1 bg-rule","aria-hidden":!0})]}),t]})}async function tg(){const e=`./${re.cvFile}`;try{const t=await fetch(e,{method:"HEAD"});if(t.ok&&(t.headers.get("content-type")??"").includes("pdf")){const n=document.createElement("a");n.href=e,n.download=re.cvFile,document.body.appendChild(n),n.click(),n.remove();return}}catch{}window.print()}function ng({t:e,lang:t}){return i.jsx("div",{className:"cv-print rise mx-auto w-full max-w-3xl px-5 py-8 sm:px-8 sm:py-10",children:i.jsxs("article",{children:[i.jsxs("header",{children:[i.jsx("h1",{className:"font-display text-[clamp(2rem,6vw,3rem)] font-semibold leading-none tracking-[-0.035em] text-ink",children:re.name}),i.jsx("p",{className:"eyebrow mt-4 font-semibold text-accent-text",children:Xh[t]}),i.jsxs("ul",{className:"mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted",children:[i.jsxs("li",{className:"inline-flex items-center gap-1.5",children:[i.jsx(Lf,{size:14,"aria-hidden":!0})," ",re.location]}),i.jsx("li",{children:i.jsxs("a",{href:`mailto:${re.email}`,className:"t-all inline-flex items-center gap-1.5 hover:text-ink",children:[i.jsx(We,{size:14,"aria-hidden":!0})," ",re.email]})}),i.jsx("li",{children:i.jsxs("a",{href:re.phoneHref,className:"t-all inline-flex items-center gap-1.5 hover:text-ink",children:[i.jsx(yd,{size:14,"aria-hidden":!0})," ",re.phone]})}),i.jsx("li",{children:i.jsxs("a",{href:re.linkedinHref,target:"_blank",rel:"noopener noreferrer",className:"t-all inline-flex items-center gap-1.5 hover:text-ink",children:[i.jsx(gd,{size:14,"aria-hidden":!0})," ",re.linkedin]})})]}),i.jsx("p",{className:"mt-4 text-sm font-light leading-relaxed text-ink",children:Kh[t]})]}),i.jsx(Mn,{label:e.cv.experience,children:i.jsx("div",{className:"space-y-6",children:Qh.map(n=>{var r;return i.jsxs("div",{children:[i.jsxs("div",{className:"flex flex-wrap items-baseline justify-between gap-x-4",children:[i.jsx("h4",{className:"font-display text-[1.15rem] font-semibold leading-tight tracking-[-0.02em] text-ink",children:n.company}),i.jsxs("span",{className:"text-xs font-medium text-muted",children:[n.period[t]," · ",n.location]})]}),i.jsx("p",{className:"text-sm font-medium text-muted",children:n.role[t]}),n.bullets[t].length>0&&i.jsx("ul",{className:"mt-2 space-y-1.5",children:n.bullets[t].map(s=>i.jsx(Ci,{text:s},s))}),(r=n.missions)==null?void 0:r.map(s=>i.jsxs("div",{className:"cv-section mt-3 border-l-2 border-line pl-4",children:[i.jsxs("div",{className:"flex flex-wrap items-baseline justify-between gap-x-4",children:[i.jsx("h5",{className:"text-sm font-semibold text-ink",children:s.client}),i.jsx("span",{className:"text-xs text-muted",children:s.period[t]})]}),i.jsx("p",{className:"text-xs font-medium text-muted",children:s.role[t]}),i.jsx("ul",{className:"mt-1.5 space-y-1.5",children:s.bullets[t].map(o=>i.jsx(Ci,{text:o},o))})]},s.client))]},n.company)})})}),i.jsx(Mn,{label:e.cv.skills,children:i.jsx("div",{className:"space-y-3",children:Zh.map(n=>i.jsxs("div",{children:[i.jsx("p",{className:"mb-1.5 text-sm font-semibold text-ink",children:n.label[t]}),i.jsx("ul",{className:"flex flex-wrap gap-1.5",children:n.items[t].map(r=>i.jsx("li",{className:"tag bg-olive-tint text-olive-text",children:r},r))})]},n.label.en))})}),i.jsxs("div",{className:"grid gap-x-8 sm:grid-cols-2",children:[i.jsx(Mn,{label:e.cv.education,children:i.jsx("ul",{className:"space-y-2.5",children:Yh.map(n=>i.jsxs("li",{className:"text-sm",children:[i.jsx("p",{className:"font-semibold text-ink",children:n.title[t]}),i.jsxs("p",{className:"font-light text-muted",children:[n.school,n.period&&` · ${n.period}`]})]},n.school))})}),i.jsxs("div",{children:[i.jsx(Mn,{label:e.cv.languages,children:i.jsx("ul",{className:"space-y-1 text-sm font-light text-ink",children:Jh[t].map(n=>i.jsx("li",{children:n},n))})}),i.jsx(Mn,{label:e.cv.interests,children:i.jsx("ul",{className:"space-y-1.5",children:eg[t].map(n=>i.jsx(Ci,{text:n},n))})})]})]})]})})}function Hd({t:e,isStreaming:t,onSend:n,onStop:r}){const[s,o]=C.useState(""),[a,l]=C.useState(0),[u,d]=C.useState(0),[p,g]=C.useState(!1),h=C.useRef(null);C.useEffect(()=>{const c=window.setInterval(()=>l(f=>f+1),4500);return()=>window.clearInterval(c)},[]),C.useEffect(()=>{const c=h.current;c&&(c.style.height="auto",c.style.height=`${Math.min(c.scrollHeight,200)}px`)},[s]);const x=C.useMemo(()=>!s.startsWith("/")||/\s/.test(s)?[]:e.slash.filter(c=>c.cmd.startsWith(s.toLowerCase())),[s,e]),v=x.length>0&&!p;C.useEffect(()=>d(0),[s]);const y=(c=s)=>{const f=c.trim();!f||t||(n(f),o(""))},k=c=>{if(v){if(c.key==="ArrowDown"||c.key==="ArrowUp"){c.preventDefault();const f=c.key==="ArrowDown"?1:-1;d(b=>(b+f+x.length)%x.length);return}if(c.key==="Enter"||c.key==="Tab"){c.preventDefault(),y(x[u].cmd);return}if(c.key==="Escape"){c.preventDefault(),g(!0);return}}c.key==="Enter"&&!c.shiftKey&&!c.nativeEvent.isComposing&&(c.preventDefault(),y())},m=()=>{var c;g(!1),o(f=>f.startsWith("/")?"":"/"),(c=h.current)==null||c.focus()};return i.jsx("div",{className:"relative z-10 mx-auto w-full max-w-3xl px-3 pb-3 sm:px-6 sm:pb-5",children:i.jsxs("div",{className:"relative",children:[v&&i.jsx("ul",{role:"listbox","aria-label":e.commands,className:"rise absolute bottom-full left-0 z-10 mb-2 w-full max-w-sm overflow-hidden rounded-3xl border border-rule bg-elevated p-1.5",children:x.map((c,f)=>i.jsx("li",{role:"option","aria-selected":f===u,children:i.jsxs("button",{onMouseEnter:()=>d(f),onClick:()=>y(c.cmd),className:`t-all flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-left text-sm ${f===u?"bg-surface-2":""}`,children:[i.jsx("code",{className:"rounded-md bg-accent-tint px-1.5 py-0.5 font-mono text-xs font-semibold text-accent-text",children:c.cmd}),i.jsx("span",{className:"text-muted",children:c.desc})]})},c.cmd))}),i.jsxs("div",{className:"t-all flex items-end gap-2 rounded-[28px] border border-line bg-elevated p-2 pl-2.5 shadow-signature focus-within:border-rule",children:[i.jsx("button",{type:"button",onClick:m,"aria-label":e.commands,title:e.commands,className:"t-all mb-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-2 text-ink hover:bg-line",children:i.jsx(_f,{size:15,"aria-hidden":!0})}),i.jsx("textarea",{ref:h,rows:1,value:s,onChange:c=>{o(c.target.value),g(!1)},onKeyDown:k,placeholder:e.placeholders[a%e.placeholders.length],"aria-label":e.placeholders[0],className:"max-h-[200px] min-h-[40px] flex-1 resize-none bg-transparent py-2 text-[15px] leading-relaxed text-ink outline-none placeholder:font-light placeholder:text-muted"}),t?i.jsx("button",{type:"button",onClick:r,"aria-label":e.stop,title:e.stop,className:"t-all flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-bg shadow-signature hover:opacity-85 active:scale-95",children:i.jsx(Ca,{size:14,className:"fill-current","aria-hidden":!0})}):i.jsx("button",{type:"button",onClick:()=>y(),disabled:!s.trim(),"aria-label":e.send,title:e.send,className:"t-all flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-fg shadow-signature hover:bg-accent-hover active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none",children:i.jsx(pd,{size:18,strokeWidth:2.5,"aria-hidden":!0})})]})]})})}const rg={fr:{contact:"Me contacter",cv:"Voir le CV",open:"Ouvrir le prototype",cancel:"Annuler",send:"Envoyer",copy:"Copier l’adresse",copied:"Copié",newChat:"Nouvelle conversation",email:"Contacter par email",result:"Résultat",friction:"Relances répétées",repeat:"Pour chaque période",close:"Fermer",menu:"Menu",collapse:"Replier",stop:"Arrêter",q1:"Quel a été son rôle ?",q2:"Voir le projet Covenant",question:"Quel est son parcours ?",answer:"Anne-Sophie est Product Designer, spécialisée en **UX/UI**, Design Ops et workflows IA.",ctaTitle:"Essayez le parcours vous-même",ctaText:"Le prototype s’ouvre ici, sans quitter le portfolio.",dialogTitle:"Écrire à Anne-Sophie",dialogBody:"Le contenu de la fenêtre.",mailApp:"Ouvrir ma messagerie",placeholder:"Votre message…",title:"Titre de section",body:"Texte courant, pour lire sans effort.",caption:"Légende ou détail",label:"Petit libellé",figure:"Chiffre clé",display:"Titre d’accueil",card:"Carte",control:"Bouton, tag, pastille",inner:"Élément interne",promptZone:"Zone de saisie",noShadow:"Carte : pas d’ombre",yes:"Oui",no:"Non",ordered:"Des étapes : numéros",unordered:"Des sujets : icônes",step1:"Comprendre",step2:"Concevoir",topic1:"Profil",topic2:"Impact",projects:"Projets professionnels",personal:"Projets personnels",p1:"Cadrer une équipe UX augmentée",p2:"Clauses de crédit",ctx:"Contexte",approach:"Démarche",outcome:"Résultat",tableMd:`| Cas | Ce que fait l’outil |
|---|---|
| Document reçu | Extraction par l’IA |
| Valeur douteuse | Signalée à l’analyste |
| Seuil dépassé | Alerte |`,s1:"Profil & valeur ajoutée",s1t:"Résume le profil d’Anne-Sophie en quelques lignes.",s2:"Impact & chiffres clés",s2t:"Quels sont ses résultats mesurables ?",cPrimary:"Action principale",cPositive:"Élément positif",cSecondary:"Action secondaire, étape, lien",cAi:"Ce qui vient de l’IA",cWarn:"Friction, alerte",cPunct:"Ponctuation",bg:"Fond de page",sidebar:"Menu latéral",elevated:"Carte, champ",surface2:"Survol, neutre",ink:"Texte principal",muted:"Texte secondaire",inverse:"Neutre inversé",pair:"Couple",thLight:"Clair",thDark:"Sombre",pInk:"Texte principal sur fond",pMuted:"Texte secondaire sur fond",pBtn:"Bouton principal",pTagOk:"Tag olive pâle",pTagAi:"Tag IA",pTagWarn:"Tag friction",pVerm:"Vermillon (ponctuation)",m1:"ASL Court",m1h:"L’essentiel",m2:"ASL Complet",m2h:"La réponse structurée",m3:"ASL Détaillé",m3h:"Avec la méthode",r1t:"Aucune couleur en dur",r1:"Tout passe par un token, donc les deux thèmes fonctionnent.",r2t:"Surfaces neutres et unies",r2:"La couleur vit dans les petits éléments qui portent un sens.",r3t:"L’ombre est réservée",r3:"La zone de saisie et l’action principale, rien d’autre.",r4t:"Une couleur, un seul sens",r4:"Si aucun sens ne correspond, on reste neutre."},en:{contact:"Contact me",cv:"View the CV",open:"Open the prototype",cancel:"Cancel",send:"Send",copy:"Copy the address",copied:"Copied",newChat:"New conversation",email:"Contact by email",result:"Outcome",friction:"Repeated reminders",repeat:"For each period",close:"Close",menu:"Menu",collapse:"Collapse",stop:"Stop",q1:"What was her role?",q2:"See the Covenant project",question:"What is her background?",answer:"Anne-Sophie is a Product Designer, specialised in **UX/UI**, Design Ops and AI workflows.",ctaTitle:"Try the journey yourself",ctaText:"The prototype opens here, without leaving the portfolio.",dialogTitle:"Write to Anne-Sophie",dialogBody:"The dialog content.",mailApp:"Open my mail app",placeholder:"Your message…",title:"Section title",body:"Body text, effortless to read.",caption:"Caption or detail",label:"Small label",figure:"Key figure",display:"Welcome title",card:"Card",control:"Button, tag, badge",inner:"Inner element",promptZone:"Prompt area",noShadow:"Card: no shadow",yes:"Do",no:"Don’t",ordered:"Steps: numbers",unordered:"Topics: icons",step1:"Understand",step2:"Design",topic1:"Profile",topic2:"Impact",projects:"Work projects",personal:"Personal projects",p1:"Framing an AI-augmented UX team",p2:"Loan clauses",ctx:"Context",approach:"Approach",outcome:"Outcome",tableMd:`| Case | What the tool does |
|---|---|
| Document received | AI extraction |
| Doubtful value | Flagged to the analyst |
| Threshold exceeded | Alert |`,s1:"Profile & added value",s1t:"Sum up Anne-Sophie’s profile in a few lines.",s2:"Impact & key figures",s2t:"What are her measurable results?",cPrimary:"Main action",cPositive:"Positive element",cSecondary:"Secondary action, step, link",cAi:"What comes from the AI",cWarn:"Friction, alert",cPunct:"Punctuation",bg:"Page background",sidebar:"Side menu",elevated:"Card, field",surface2:"Hover, neutral",ink:"Main text",muted:"Secondary text",inverse:"Inverted neutral",pair:"Pair",thLight:"Light",thDark:"Dark",pInk:"Main text on background",pMuted:"Secondary text on background",pBtn:"Primary button",pTagOk:"Pale olive tag",pTagAi:"AI tag",pTagWarn:"Friction tag",pVerm:"Vermilion (punctuation)",m1:"ASL Short",m1h:"The essentials",m2:"ASL Full",m2h:"The structured answer",m3:"ASL In-depth",m3h:"With the method",r1t:"No hard-coded colour",r1:"Everything goes through a token, so both themes work.",r2t:"Neutral, flat surfaces",r2:"Colour lives in the small elements that carry meaning.",r3t:"The shadow is reserved",r3:"The prompt area and the main action, nothing else.",r4t:"One colour, one meaning",r4:"If no meaning fits, stay neutral."}},Zt="tag",Ni="t-all flex flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold",Do="t-all inline-flex items-center gap-1.5 rounded-full border border-line bg-elevated px-3.5 py-1.5 text-sm text-ink hover:border-rule hover:bg-surface-2";function je({children:e}){return i.jsx("div",{className:"flex flex-wrap items-center gap-3",children:e})}function Pe({cls:e,name:t,label:n,border:r}){return i.jsxs("li",{className:"flex items-center gap-3",children:[i.jsx("span",{className:`h-10 w-10 shrink-0 rounded-2xl ${e} ${r?"border border-line":""}`,"aria-hidden":!0}),i.jsxs("span",{className:"min-w-0",children:[i.jsx("span",{className:"block text-[13px] font-medium leading-snug text-ink",children:n}),i.jsx("code",{className:"font-mono text-[11.5px] text-muted",children:t})]})]})}function sg({id:e,lang:t,t:n}){const r=rg[t],[s,o]=C.useState(0),[a,l]=C.useState(!1),[u,d]=C.useState(!0),[p,g]=C.useState(0),[h,x]=C.useState(!1),[v,y]=C.useState(!0);switch(e){case"hierarchy":return i.jsxs(je,{children:[i.jsxs("button",{className:"btn-primary",children:[r.contact," ",i.jsx(We,{size:16,"aria-hidden":!0})]}),i.jsxs("button",{className:"btn-secondary",children:[r.cv," ",i.jsx(Lt,{size:16,"aria-hidden":!0})]}),i.jsx("button",{className:"icon-btn","aria-label":r.close,children:i.jsx(et,{size:18,"aria-hidden":!0})})]});case"nocaps":return i.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[i.jsxs("div",{className:"rounded-2xl border border-line bg-elevated p-4",children:[i.jsxs("p",{className:"mb-3 inline-flex items-center gap-1.5 text-xs font-semibold text-olive-text",children:[i.jsx(jt,{size:13,"aria-hidden":!0})," ",r.yes]}),i.jsxs(je,{children:[i.jsx("button",{className:"btn-primary !px-4 !py-2",children:r.contact}),i.jsx("span",{className:`${Zt} bg-olive-tint text-olive-text`,children:r.result})]})]}),i.jsxs("div",{className:"rounded-2xl border border-line bg-elevated p-4",children:[i.jsxs("p",{className:"mb-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--warn-text)]",children:[i.jsx(et,{size:13,"aria-hidden":!0})," ",r.no]}),i.jsxs(je,{children:[i.jsx("span",{className:"inline-flex items-center rounded-full bg-olive px-4 py-2 text-[11.5px] font-semibold tracking-[0.14em] text-olive-fg",children:r.contact.toUpperCase()}),i.jsx("span",{className:"rounded-full bg-olive-tint px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.1em] text-olive-text",children:r.result.toUpperCase()})]})]})]});case"numbericon":return i.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[i.jsxs("div",{className:"rounded-2xl border border-line bg-elevated p-4",children:[i.jsx("p",{className:"eyebrow mb-3 text-muted",children:r.ordered}),i.jsx(je,{children:[r.step1,r.step2].map((k,m)=>i.jsxs("span",{className:"inline-flex items-center gap-2 text-[13px] font-medium text-ink",children:[i.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-fg",children:m+1})," ",k]},k))})]}),i.jsxs("div",{className:"rounded-2xl border border-line bg-elevated p-4",children:[i.jsx("p",{className:"eyebrow mb-3 text-muted",children:r.unordered}),i.jsx(je,{children:[{I:Is,x:r.topic1},{I:jo,x:r.topic2}].map(({I:k,x:m})=>i.jsxs("span",{className:"inline-flex items-center gap-2 text-[13px] font-medium text-ink",children:[i.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full bg-accent-tint text-accent-text",children:i.jsx(k,{size:14,"aria-hidden":!0})})," ",m]},m))})]})]});case"neutrals":return i.jsxs("ul",{className:"grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2",children:[i.jsx(Pe,{cls:"bg-bg",name:"bg-bg",label:r.bg,border:!0}),i.jsx(Pe,{cls:"bg-sidebar",name:"bg-sidebar",label:r.sidebar,border:!0}),i.jsx(Pe,{cls:"bg-elevated",name:"bg-elevated",label:r.elevated,border:!0}),i.jsx(Pe,{cls:"bg-surface-2",name:"bg-surface-2",label:r.surface2,border:!0}),i.jsx(Pe,{cls:"bg-ink",name:"text-ink · bg-ink",label:`${r.ink} · ${r.inverse}`}),i.jsx(Pe,{cls:"bg-muted",name:"text-muted",label:r.muted})]});case"meanings":return i.jsxs("ul",{className:"grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2",children:[i.jsx(Pe,{cls:"bg-olive",name:"bg-olive",label:r.cPrimary}),i.jsx(Pe,{cls:"bg-olive-tint",name:"bg-olive-tint",label:r.cPositive,border:!0}),i.jsx(Pe,{cls:"bg-accent",name:"bg-accent",label:r.cSecondary}),i.jsx(Pe,{cls:"bg-[var(--ai)]",name:"--ai",label:r.cAi}),i.jsx(Pe,{cls:"bg-[var(--warn-tint)]",name:"--warn-tint",label:r.cWarn,border:!0}),i.jsx(Pe,{cls:"bg-vermillion",name:"bg-vermillion",label:r.cPunct})]});case"typescale":return i.jsx("ul",{className:"space-y-4",children:[{cls:"font-display text-[2rem] font-semibold leading-none tracking-[-0.035em]",label:r.display,spec:"Poppins · semibold"},{cls:"font-display text-[1.7rem] font-semibold leading-none tracking-[-0.03em]",label:r.figure,spec:"Poppins · 1.7rem"},{cls:"font-display text-[1.2rem] font-semibold leading-tight tracking-[-0.02em]",label:r.title,spec:"Poppins · 1.2rem"},{cls:"text-[15px] font-light leading-relaxed",label:r.body,spec:"Outfit · 15px · light"},{cls:"eyebrow",label:r.label,spec:"Outfit · 12.5px · medium"},{cls:"text-xs font-light text-muted",label:r.caption,spec:"Outfit · 12px · light"}].map(k=>i.jsxs("li",{className:"flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line pb-4 last:border-b-0 last:pb-0",children:[i.jsx("span",{className:`min-w-0 text-ink ${k.cls}`,children:k.label}),i.jsx("code",{className:"shrink-0 font-mono text-[11.5px] text-muted",children:k.spec})]},k.spec))});case"shapes":return i.jsx("ul",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[{cls:"rounded-full",label:r.control,spec:"rounded-full"},{cls:"rounded-3xl",label:r.card,spec:"rounded-3xl"},{cls:"rounded-2xl",label:r.inner,spec:"rounded-2xl"}].map(k=>i.jsxs("li",{children:[i.jsx("span",{className:`block h-16 border border-rule bg-elevated ${k.cls}`,"aria-hidden":!0}),i.jsx("span",{className:"mt-2 block text-[13px] font-medium text-ink",children:k.label}),i.jsx("code",{className:"font-mono text-[11.5px] text-muted",children:k.spec})]},k.spec))});case"elevation":return i.jsxs("div",{className:"grid grid-cols-1 items-center gap-4 sm:grid-cols-3",children:[i.jsx("div",{className:"flex h-12 items-center rounded-[28px] border border-line bg-elevated px-4 text-[13px] font-light text-muted shadow-signature",children:r.promptZone}),i.jsx("div",{className:"flex justify-center",children:i.jsx("button",{className:"btn-primary",children:r.contact})}),i.jsx("div",{className:"flex h-12 items-center rounded-2xl border border-line bg-elevated px-4 text-[13px] font-light text-muted",children:r.noShadow})]});case"iconplace":return i.jsxs(je,{children:[i.jsxs("button",{className:"btn-secondary",children:[r.cv," ",i.jsx(Lt,{size:16,"aria-hidden":!0})]}),i.jsxs("span",{className:`${Zt} bg-[var(--ai-tint)] text-[var(--ai-text)]`,children:[i.jsx(Ds,{size:12,"aria-hidden":!0})," Claude"]})]});case"buttons":return i.jsxs(je,{children:[i.jsxs("button",{className:"btn-primary",children:[r.contact," ",i.jsx(We,{size:16,"aria-hidden":!0})]}),i.jsxs("button",{className:"btn-secondary",children:[r.cv," ",i.jsx(Lt,{size:16,"aria-hidden":!0})]}),i.jsx("button",{className:"btn-primary",children:r.open}),i.jsx("button",{className:"btn-secondary",children:r.cancel})]});case"buttons-wide":return i.jsxs("div",{className:"w-full max-w-[280px] space-y-2 rounded-3xl bg-sidebar p-4",children:[i.jsxs("button",{className:"btn-secondary w-full !justify-between !py-2 !pl-4 !pr-2",children:[r.newChat,i.jsx("span",{className:"icon-chip bg-olive text-base leading-none text-olive-fg",children:"+"})]}),i.jsxs("button",{className:"btn-primary w-full !justify-between !py-2 !pl-4 !pr-2",children:[r.email,i.jsx("span",{className:"icon-chip bg-olive-fg text-olive",children:i.jsx(We,{size:13,strokeWidth:2.25,"aria-hidden":!0})})]}),i.jsxs("button",{className:"btn-secondary w-full !justify-between !py-2 !pl-4 !pr-2",children:[r.cv,i.jsx("span",{className:"icon-chip bg-accent text-accent-fg",children:i.jsx(Lt,{size:14,strokeWidth:2.25,"aria-hidden":!0})})]})]});case"buttons-states":return i.jsxs(je,{children:[i.jsxs("button",{className:"btn-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none",disabled:!0,children:[r.send," ",i.jsx(We,{size:16,"aria-hidden":!0})]}),i.jsxs("button",{className:"btn-secondary",onClick:()=>{l(!0),window.setTimeout(()=>l(!1),1600)},children:[a?r.copied:r.copy," ",a?i.jsx(jt,{size:16,"aria-hidden":!0}):i.jsx(fd,{size:16,"aria-hidden":!0})]})]});case"iconbuttons":return i.jsxs(je,{children:[i.jsx("button",{className:"icon-btn","aria-label":r.close,children:i.jsx(et,{size:18,"aria-hidden":!0})}),i.jsx("button",{className:"icon-btn","aria-label":r.menu,children:i.jsx(xd,{size:19,"aria-hidden":!0})}),i.jsx("button",{className:"icon-btn","aria-label":r.collapse,children:i.jsx(So,{size:18,"aria-hidden":!0})}),i.jsx("span",{className:"mx-1 h-6 w-px bg-line","aria-hidden":!0}),i.jsx("button",{"aria-label":r.send,className:"t-all flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-fg shadow-signature hover:bg-accent-hover",children:i.jsx(pd,{size:18,strokeWidth:2.5,"aria-hidden":!0})}),i.jsx("button",{"aria-label":r.stop,className:"t-all flex h-10 w-10 items-center justify-center rounded-full bg-ink text-bg shadow-signature hover:opacity-85",children:i.jsx(Ca,{size:14,className:"fill-current","aria-hidden":!0})})]});case"segmented":return i.jsxs(je,{children:[i.jsx("div",{role:"group","aria-label":n.theme,className:"flex w-56 rounded-full border border-line p-0.5",children:[{x:n.light,I:wd},{x:n.dark,I:vd}].map(({x:k,I:m},c)=>i.jsxs("button",{"aria-pressed":s===c,onClick:()=>o(c),className:`${Ni} ${s===c?"bg-ink text-bg":"text-muted hover:text-ink"}`,children:[k," ",i.jsx(m,{size:12,className:"text-vermillion","aria-hidden":!0})]},k))}),i.jsxs("div",{role:"group","aria-label":n.language,className:"flex w-36 rounded-full border border-line p-0.5",children:[i.jsx("span",{className:`${Ni} bg-ink text-bg`,children:"FR"}),i.jsx("span",{className:`${Ni} text-muted`,children:"EN"})]})]});case"chips":return i.jsx(je,{children:[r.q1,r.q2].map(k=>i.jsxs("button",{className:Do,children:[k," ",i.jsx(vr,{size:14,className:"shrink-0 text-vermillion","aria-hidden":!0})]},k))});case"tags":return i.jsxs(je,{children:[i.jsx("span",{className:`${Zt} bg-olive-tint text-olive-text`,children:r.result}),i.jsxs("span",{className:`${Zt} bg-[var(--ai-tint)] text-[var(--ai-text)]`,children:[i.jsx(Ds,{size:12,"aria-hidden":!0})," Claude"]}),i.jsxs("span",{className:`${Zt} bg-[var(--warn-tint)] text-[var(--warn-text)]`,children:[i.jsx(kd,{size:12,"aria-hidden":!0})," ",r.friction]}),i.jsxs("span",{className:`${Zt} border border-rule text-ink`,children:[i.jsx(bd,{size:12,"aria-hidden":!0})," ",r.repeat]})]});case"badges":return i.jsxs(je,{children:[i.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-accent-tint text-accent-text",children:i.jsx(md,{size:15,"aria-hidden":!0})}),i.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-fg",children:"1"}),i.jsx("span",{className:"icon-chip bg-olive text-olive-fg",children:i.jsx(We,{size:13,"aria-hidden":!0})}),i.jsx(Jn,{size:40})]});case"messages":return i.jsxs("div",{className:"space-y-5",children:[i.jsx("div",{className:"flex justify-end",children:i.jsx("div",{className:"max-w-[85%] rounded-3xl rounded-br-md bg-bubble px-5 py-3 text-[15px] leading-relaxed text-bubble-fg",children:r.question})}),i.jsxs("div",{className:"flex gap-4",children:[i.jsx("div",{className:"mt-0.5 hidden sm:block",children:i.jsx(Jn,{size:34})}),i.jsxs("div",{className:"min-w-0 flex-1",children:[i.jsxs("div",{className:"eyebrow mb-2.5 flex items-center gap-2.5",children:[i.jsx("span",{className:"font-semibold text-ink",children:n.assistantName}),i.jsx("span",{className:"h-px w-5 bg-rule","aria-hidden":!0}),i.jsx("span",{className:"text-muted",children:n.models.standard.name})]}),i.jsx(Wt,{text:r.answer}),i.jsxs("div",{className:"mt-4 flex flex-wrap gap-3",children:[i.jsxs("button",{className:"btn-primary",children:[r.contact," ",i.jsx(We,{size:16,"aria-hidden":!0})]}),i.jsxs("button",{className:"btn-secondary",children:[r.cv," ",i.jsx(Lt,{size:16,"aria-hidden":!0})]})]})]})]})]});case"card-suggestion":return i.jsx("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[{I:Is,a:r.s1,b:r.s1t},{I:jo,a:r.s2,b:r.s2t}].map(({I:k,a:m,b:c})=>i.jsxs("button",{className:"t-all group flex flex-col gap-3 rounded-3xl border border-line bg-elevated p-5 text-left hover:-translate-y-0.5 hover:border-rule",children:[i.jsxs("span",{className:"flex items-center gap-3",children:[i.jsx("span",{className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-tint text-accent-text",children:i.jsx(k,{size:15,"aria-hidden":!0})}),i.jsx("span",{className:"eyebrow flex-1 font-semibold text-ink",children:m}),i.jsx(vr,{size:15,className:"t-all shrink-0 text-muted group-hover:text-ink","aria-hidden":!0})]}),i.jsx("span",{className:"text-[14.5px] font-light leading-relaxed text-ink",children:c})]},m))});case"card-numbered":return i.jsx(Fd,{lang:t});case"card-cta":return i.jsxs("div",{className:"flex flex-wrap items-center gap-x-5 gap-y-3 rounded-3xl border border-line bg-elevated p-5",children:[i.jsxs("div",{className:"min-w-0 flex-1 basis-56",children:[i.jsx("p",{className:"text-sm font-semibold text-ink",children:r.ctaTitle}),i.jsx("p",{className:"mt-1 text-[13px] font-light leading-relaxed text-muted",children:r.ctaText})]}),i.jsxs("button",{className:"btn-primary",children:[r.open," ",i.jsx(Sa,{size:14,className:"fill-current","aria-hidden":!0})]})]});case"table":return i.jsx(Wt,{text:r.tableMd});case"sidemenu":return i.jsxs("div",{className:"relative flex h-72 overflow-hidden rounded-3xl border border-line bg-bg",children:[i.jsxs("div",{className:`t-all flex shrink-0 flex-col overflow-hidden bg-sidebar ${v?"w-[62%] max-w-[250px] border-r border-line p-4":"w-0 p-0"}`,children:[i.jsxs("div",{className:"flex items-center gap-2.5",children:[i.jsx(Jn,{size:32}),i.jsx("p",{className:"min-w-0 flex-1 truncate font-display text-[14px] font-semibold text-ink",children:"Anne-Sophie Leroy"})]}),i.jsxs("p",{className:"mt-5 flex items-center gap-2 text-[12.5px] font-medium text-ink",children:[i.jsx(ja,{size:13,className:"shrink-0 text-accent-text","aria-hidden":!0}),i.jsx("span",{className:"min-w-0 flex-1 truncate",children:r.projects}),i.jsx(Zn,{size:13,className:"rotate-180 text-muted","aria-hidden":!0})]}),i.jsx("ul",{className:"mt-2 space-y-2 pl-2",children:[r.p1,r.p2].map((k,m)=>i.jsxs("li",{className:"flex items-baseline gap-2.5 text-[12.5px] leading-snug text-ink",children:[i.jsx("span",{className:"font-display text-[12px] font-medium italic text-accent-text",children:String(m+1).padStart(2,"0")})," ",k]},k))}),i.jsxs("p",{className:"mt-3 flex items-center gap-2 text-[12.5px] font-medium text-ink",children:[i.jsx(Xs,{size:13,className:"shrink-0 text-accent-text","aria-hidden":!0}),i.jsx("span",{className:"min-w-0 flex-1 truncate",children:r.personal}),i.jsx(Zn,{size:13,className:"text-muted","aria-hidden":!0})]}),i.jsxs("span",{className:"mt-auto inline-flex items-center justify-between rounded-full bg-olive py-1.5 pl-3.5 pr-1.5 text-[12px] font-semibold text-olive-fg",children:[r.email,i.jsx("span",{className:"icon-chip !h-5 !w-5 bg-olive-fg text-olive",children:i.jsx(We,{size:11,"aria-hidden":!0})})]})]}),i.jsx("div",{className:"flex min-w-0 flex-1 flex-col",children:i.jsxs("div",{className:"flex items-center gap-2 border-b border-line px-3 py-2",children:[i.jsx("button",{onClick:()=>y(!v),"aria-label":r.collapse,"aria-expanded":v,className:"icon-btn",children:i.jsx(So,{size:18,"aria-hidden":!0})}),i.jsx("p",{className:"eyebrow min-w-0 flex-1 truncate text-ink",children:r.newChat})]})})]});case"anchors":return i.jsx("div",{className:"px-1",children:i.jsx(Gd,{label:n.caseStudies,links:[{id:"ds-top",label:r.ctx},{id:"ds-anchor-2",label:r.approach},{id:"ds-anchor-3",label:r.outcome}]})});case"tabs":return i.jsxs("div",{className:"flex items-center gap-1 rounded-2xl border border-line bg-bg px-3 py-2",children:[i.jsx("span",{className:"rounded-full px-3 py-1.5 text-[12.5px] font-medium text-muted",children:r.newChat}),i.jsxs("span",{className:"flex items-center rounded-full bg-surface-2 text-[12.5px] font-medium text-ink",children:[i.jsx("span",{className:"py-1.5 pl-3 pr-1.5",children:n.cv.tab}),i.jsx("button",{"aria-label":n.cv.closeTab,className:"t-all mr-1 flex h-6 w-6 items-center justify-center rounded-full text-muted hover:bg-line hover:text-ink",children:i.jsx(et,{size:13,"aria-hidden":!0})})]}),i.jsx("span",{className:"flex-1"}),i.jsxs("button",{className:"btn-primary !px-4 !py-2",children:[n.cv.download," ",i.jsx(Lt,{size:16,"aria-hidden":!0})]})]});case"menu":{const k=[[r.m1,r.m1h],[r.m2,r.m2h],[r.m3,r.m3h]];return i.jsx("div",{className:u?"h-52":"",children:i.jsxs("div",{className:"relative inline-block",children:[i.jsxs("button",{onClick:()=>d(!u),"aria-haspopup":"listbox","aria-expanded":u,className:"t-all flex items-center gap-2 rounded-full border border-line bg-elevated px-3.5 py-1.5 text-[13px] hover:border-rule",children:[i.jsx("span",{className:"h-2 w-2 rounded-full bg-vermillion","aria-hidden":!0}),i.jsx("span",{className:"font-semibold text-ink",children:k[p][0]}),i.jsx(Zn,{size:15,className:`t-all text-muted ${u?"rotate-180":""}`,"aria-hidden":!0})]}),u&&i.jsx("ul",{role:"listbox",className:"absolute left-0 top-full z-10 mt-2 w-[260px] rounded-3xl border border-rule bg-elevated p-1.5",children:k.map(([m,c],f)=>i.jsx("li",{role:"option","aria-selected":f===p,children:i.jsxs("button",{onClick:()=>g(f),className:"t-all flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left hover:bg-surface-2",children:[i.jsxs("span",{className:"min-w-0 flex-1 text-sm font-semibold text-ink",children:[m," ",i.jsxs("span",{className:"font-normal text-muted",children:["· ",c]})]}),f===p&&i.jsx(jt,{size:16,className:"shrink-0 text-accent-text","aria-hidden":!0})]})},m))})]})})}case"prompt":return i.jsxs("div",{children:[i.jsx("div",{className:"flex justify-end",children:i.jsx("button",{onClick:()=>x(!h),className:"btn-secondary !px-3.5 !py-1.5",children:h?r.send:r.stop})}),i.jsx("div",{className:"pt-44",children:i.jsx(Hd,{t:n,isStreaming:h,onSend:()=>{},onStop:()=>x(!1)})})]});case"compare":return i.jsx(Bd,{lang:t});case"figures":return i.jsx(Rd,{lang:t});case"flow":return i.jsx(zd,{lang:t,board:Dd});default:return null}}function Xd({children:e}){return i.jsx("h3",{className:"mb-3 font-display text-[1.2rem] font-semibold leading-tight tracking-[-0.02em] text-ink",children:e})}function Kd({body:e,lang:t,t:n}){const r={},s=e.replace(/^<!--\s*exemple:\s*([a-z-]+)\s*-->$/gm,(o,a)=>(r[a]=i.jsx("div",{className:"my-4 rounded-3xl border border-line bg-bg p-5 sm:p-6",children:i.jsx(sg,{id:a,lang:t,t:n})}),`[[${a}]]`));return s.trim()?i.jsx(Wt,{text:s,embeds:r}):null}function ig({section:e,lang:t,t:n}){return i.jsxs("section",{children:[e.title&&i.jsx(Xd,{children:e.title}),i.jsx(Kd,{body:e.body,lang:t,t:n})]})}function og({section:e,lang:t,t:n}){const{items:r,rest:s}=Ad(e.body);return i.jsxs("section",{children:[i.jsx(Xd,{children:e.title}),i.jsx("ol",{className:"grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2",children:r.map((o,a)=>i.jsxs("li",{className:"flex items-start gap-2.5",children:[i.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-[11px] font-semibold text-accent-fg",children:a+1}),i.jsx("span",{className:"min-w-0 pt-px",children:i.jsx(Wt,{text:o})})]},a))}),i.jsx(Kd,{body:s,lang:t,t:n})]})}function ag({section:e}){const t=e.kind==="do";return i.jsxs("div",{className:"rounded-3xl border border-line bg-elevated p-5",children:[i.jsxs("p",{className:`tag mb-3 ${t?"bg-olive-tint text-olive-text":"bg-[var(--warn-tint)] text-[var(--warn-text)]"}`,children:[t?i.jsx(jt,{size:12,"aria-hidden":!0}):i.jsx(et,{size:12,"aria-hidden":!0})," ",e.title]}),i.jsx("ul",{className:"space-y-2",children:Ad(e.body).items.map((n,r)=>i.jsx("li",{children:i.jsx(Wt,{text:n})},r))})]})}function lg({page:e,lang:t,t:n}){const r=[];for(let s=0;s<e.sections.length;s++){const o=e.sections[s];if(o.kind==="do"||o.kind==="dont"){const a=[o],l=e.sections[s+1];l&&(l.kind==="do"||l.kind==="dont")&&a.push(e.sections[++s]),r.push(i.jsx("section",{className:`grid grid-cols-1 gap-3 ${a.length>1?"sm:grid-cols-2":""}`,children:a.map(u=>i.jsx(ag,{section:u},u.title))},s))}else o.kind==="anatomy"?r.push(i.jsx(og,{section:o,lang:t,t:n},s)):r.push(i.jsx(ig,{section:o,lang:t,t:n},s))}return i.jsx(i.Fragment,{children:r})}function ug({lang:e,t}){const n=Yn[e],r=th(e),[s,o]=C.useState(r[0].id),a=C.useRef(null),l=Math.max(0,r.findIndex(v=>v.id===s)),u=r[l],d=r[l-1],p=r[l+1],g=v=>{var y;o(v),(y=a.current)==null||y.scrollTo({top:0})},h=ki.find(v=>v.id===u.group).title[e],x=v=>i.jsx("li",{children:i.jsx("button",{onClick:()=>g(v.id),"aria-current":v.id===s?"page":void 0,className:`t-all w-full rounded-full px-3 py-1.5 text-left text-[13.5px] ${v.id===s?"bg-surface-2 font-semibold text-ink":"font-normal text-muted hover:text-ink"}`,children:v.title})},v.id);return i.jsxs("div",{className:"flex min-h-0 flex-1",children:[i.jsx("nav",{"aria-label":n.pages,className:"hidden w-[232px] shrink-0 overflow-y-auto border-r border-line px-3 py-5 xl:block",children:ki.map(v=>{const y=r.filter(m=>m.group===v.id),k=[...new Set(y.map(m=>m.category??""))];return i.jsxs("div",{className:"mb-6",children:[i.jsx("p",{className:"px-3 font-display text-[13px] font-semibold text-ink",children:v.title[e]}),k.map(m=>i.jsxs("div",{children:[m&&i.jsx("p",{className:"mt-4 px-3 text-[11.5px] font-medium text-accent-text",children:m}),i.jsx("ul",{className:"mt-1.5 space-y-0.5",children:y.filter(c=>(c.category??"")===m).map(x)})]},m))]},v.id)})}),i.jsxs("div",{ref:a,className:"min-w-0 flex-1 overflow-y-auto",children:[i.jsxs("div",{className:"border-b border-line px-4 py-3 xl:hidden",children:[i.jsx("label",{className:"sr-only",htmlFor:"ds-page",children:n.pages}),i.jsx("select",{id:"ds-page",value:u.id,onChange:v=>g(v.target.value),className:"w-full rounded-full border border-rule bg-elevated px-4 py-2 text-[13.5px] font-semibold text-ink",children:ki.map(v=>i.jsx("optgroup",{label:v.title[e],children:r.filter(y=>y.group===v.id).map(y=>i.jsx("option",{value:y.id,children:y.title},y.id))},v.id))})]}),i.jsxs("article",{id:"ds-top",className:"mx-auto w-full max-w-3xl px-5 py-8 sm:px-8 sm:py-10",children:[i.jsxs("p",{className:"eyebrow text-accent-text",children:[h,u.category?` · ${u.category}`:""]}),i.jsx("h2",{className:"mt-2 font-display text-[clamp(1.8rem,5vw,2.4rem)] font-semibold leading-none tracking-[-0.035em] text-ink",children:u.title}),u.lead&&i.jsx("div",{className:"mt-4 text-muted [&>div]:text-[16px] [&>div]:font-light [&>div]:text-muted",children:i.jsx(Wt,{text:u.lead})}),i.jsx("div",{className:"mt-9 space-y-10",children:i.jsx(lg,{page:u,lang:e,t})},u.id),i.jsxs("p",{className:"mt-12 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-light text-muted",children:[i.jsx(Sr,{size:13,className:"shrink-0 text-accent-text","aria-hidden":!0})," ",n.source," :",i.jsxs("code",{className:"font-mono text-[11.5px] text-ink",children:[Wd,u.path]})]}),i.jsxs("footer",{className:"mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6",children:[d?i.jsxs("button",{onClick:()=>g(d.id),className:Do,children:[i.jsx("span",{className:"opacity-60",children:n.previous})," ",d.title]}):i.jsx("span",{}),p&&i.jsxs("button",{onClick:()=>g(p.id),className:Do,children:[i.jsx("span",{className:"opacity-60",children:n.next})," ",p.title,i.jsx(xr,{size:14,className:"shrink-0 text-vermillion","aria-hidden":!0})]})]})]})]})]})}const Ai=1280;function cg({src:e,title:t,note:n,restartLabel:r,closeLabel:s,desktopHint:o,onClose:a}){const l=C.useRef(null),[u,d]=C.useState({w:Ai,h:800}),[p,g]=C.useState(0);C.useLayoutEffect(()=>{const v=l.current;if(!v)return;const y=()=>d({w:v.clientWidth,h:v.clientHeight});y();const k=new ResizeObserver(y);return k.observe(v),()=>k.disconnect()},[]),C.useEffect(()=>{const v=document.activeElement,y=k=>k.key==="Escape"&&a();return document.addEventListener("keydown",y),()=>{var k;document.removeEventListener("keydown",y),(k=v==null?void 0:v.focus)==null||k.call(v)}},[a]);const h=Math.min(1,u.w/Ai),x=h<1;return cd.createPortal(i.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":t,className:"fixed inset-0 z-50 flex flex-col bg-bg",children:[i.jsxs("div",{className:"flex shrink-0 items-center gap-3 border-b border-line px-4 py-2.5",children:[i.jsxs("div",{className:"min-w-0 flex-1",children:[i.jsx("p",{className:"eyebrow truncate font-semibold text-ink",children:t}),i.jsx("p",{className:"mt-0.5 truncate text-xs font-light text-muted",children:x?o:n})]}),i.jsxs("button",{onClick:()=>g(v=>v+1),className:"btn-secondary !px-3.5 !py-2",title:r,children:[i.jsx("span",{className:"hidden sm:inline",children:r})," ",i.jsx(Ff,{size:14,"aria-hidden":!0})]}),i.jsx("button",{onClick:a,"aria-label":s,autoFocus:!0,className:"icon-btn",children:i.jsx(et,{size:18,"aria-hidden":!0})})]}),i.jsx("div",{ref:l,className:"relative min-h-0 flex-1 overflow-hidden bg-white",children:i.jsx("iframe",{src:`./${e}`,title:t,className:"absolute left-0 top-0 origin-top-left border-0",style:{width:x?Ai:"100%",height:x?u.h/h:"100%",transform:x?`scale(${h})`:void 0}},p)})]}),document.body)}function $l({label:e,value:t,options:n,onChange:r}){return i.jsx("div",{role:"group","aria-label":e,className:"flex flex-1 rounded-full border border-line p-0.5",children:n.map(s=>i.jsx("button",{onClick:()=>r(s.value),"aria-pressed":t===s.value,"aria-label":s.aria,className:`t-all flex flex-1 items-center justify-center gap-1.5 rounded-full px-2 py-1.5 text-xs font-semibold ${t===s.value?"bg-ink text-bg":"text-muted hover:text-ink"}`,children:s.label},s.value))})}function dg({children:e}){return i.jsxs("p",{className:"eyebrow flex items-center gap-3 text-muted",children:[i.jsx("span",{className:"shrink-0",children:e}),i.jsx("span",{className:"h-px flex-1 bg-line","aria-hidden":!0})]})}function Gl({id:e,label:t,open:n,onToggle:r,items:s}){const o=n?ja:Xs;return i.jsxs("div",{children:[i.jsxs("button",{onClick:r,"aria-expanded":n,"aria-controls":e,className:"t-all -mx-2 flex w-[calc(100%+1rem)] items-center gap-2.5 rounded-2xl px-2 py-2 text-left hover:bg-surface-2",children:[i.jsx(o,{size:15,className:"shrink-0 text-accent-text","aria-hidden":!0}),i.jsx("span",{className:"min-w-0 flex-1 truncate text-[13.5px] font-medium text-ink",children:t}),i.jsx("span",{className:"text-[11px] font-normal text-muted",children:s.length}),i.jsx(Zn,{size:15,className:`t-all shrink-0 text-muted ${n?"rotate-180":""}`,"aria-hidden":!0})]}),n&&i.jsx("ul",{id:e,className:"-mx-2 mt-1 pl-3",children:s.map((a,l)=>i.jsx("li",{children:i.jsxs("button",{onClick:a.onClick,"aria-current":a.active?"page":void 0,className:`t-all group flex w-full items-baseline gap-3 rounded-2xl px-2 py-2.5 text-left ${a.active?"bg-surface-2":"hover:bg-surface-2"}`,children:[i.jsx("span",{className:`t-all w-6 shrink-0 font-display text-[13px] font-medium italic leading-none ${a.active?"text-vermillion":"text-accent-text"}`,children:String(l+1).padStart(2,"0")}),i.jsxs("span",{className:"min-w-0",children:[i.jsx("span",{className:`block text-[13.5px] leading-snug text-ink ${a.active?"font-semibold":"font-normal"}`,children:a.title}),i.jsx("span",{className:"mt-1 block text-[11px] font-normal text-muted",children:a.tag})]})]})},a.id))})]})}function pg(e){const{t,lang:n}=e,[r,s]=C.useState("work"),o=No.some(p=>p.id===e.activeProject),a=e.designSystemActive||Ao.some(p=>p.id===e.activeProject);C.useEffect(()=>{o&&s("work")},[o]),C.useEffect(()=>{a&&s("personal")},[a]);const l=p=>s(g=>g===p?null:p),u=No.map(p=>({id:p.id,title:p.title[n],tag:p.tag[n],active:e.activeProject===p.id,onClick:()=>e.onProject(p.id)})),d=[{id:"ds",title:t.dsProject.title,tag:t.dsProject.tag,active:e.designSystemActive,onClick:e.onDesignSystem},...Ao.map(p=>({id:p.id,title:p.title[n],tag:p.tag[n],active:e.activeProject===p.id,onClick:()=>e.onProject(p.id)}))];return i.jsxs(i.Fragment,{children:[i.jsx("div",{onClick:e.onClose,"aria-hidden":!0,className:`t-all fixed inset-0 z-30 bg-[var(--overlay)] md:hidden ${e.open?"opacity-100":"pointer-events-none opacity-0"}`}),i.jsxs("aside",{"aria-label":"Navigation",className:`t-all fixed inset-y-0 left-0 z-40 flex w-[304px] max-w-[88vw] shrink-0 flex-col border-r border-line bg-sidebar md:relative md:z-10 md:max-w-none ${e.open?"translate-x-0":"-translate-x-full"} md:translate-x-0 ${e.collapsed?"md:-ml-[304px]":"md:ml-0"}`,children:[i.jsxs("div",{className:"px-5 pb-4 pt-5",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(Jn,{size:46}),i.jsxs("div",{className:"min-w-0 flex-1",children:[i.jsx("p",{className:"truncate font-display text-[17px] font-semibold leading-tight tracking-[-0.02em] text-ink",children:re.name}),i.jsx("p",{className:"tag mt-1 !inline-block max-w-full truncate bg-olive-tint text-olive-text",children:t.role})]}),i.jsx("button",{onClick:e.onClose,"aria-label":t.closeMenu,className:"icon-btn md:hidden",children:i.jsx(et,{size:18,"aria-hidden":!0})})]}),i.jsxs("button",{onClick:e.onNew,className:"btn-secondary mt-5 w-full !justify-between !py-2 !pl-4 !pr-2",children:[t.newChat,i.jsx("span",{className:"icon-chip bg-olive text-olive-fg",children:i.jsx(Mf,{size:14,strokeWidth:2.5,"aria-hidden":!0})})]})]}),i.jsxs("nav",{className:"min-h-0 flex-1 space-y-1 overflow-y-auto px-5 pb-3",children:[i.jsx(Gl,{id:"work-projects",label:t.caseStudies,open:r==="work",onToggle:()=>l("work"),items:u}),i.jsx(Gl,{id:"personal-projects",label:t.personalProjects,open:r==="personal",onToggle:()=>l("personal"),items:d})]}),i.jsxs("div",{className:"px-5 pb-5",children:[i.jsx(dg,{children:t.quickAccess}),i.jsxs("div",{className:"mt-3 space-y-2",children:[i.jsxs("button",{onClick:e.onEmail,className:"btn-primary w-full !justify-between !py-2 !pl-4 !pr-2",children:[t.contactEmail,i.jsx("span",{className:"icon-chip bg-olive-fg text-olive",children:i.jsx(We,{size:13,strokeWidth:2.25,"aria-hidden":!0})})]}),i.jsxs("button",{onClick:e.onCV,className:"btn-secondary w-full !justify-between !py-2 !pl-4 !pr-2",children:[t.viewCV,i.jsx("span",{className:"icon-chip bg-accent text-accent-fg",children:i.jsx(Lt,{size:14,strokeWidth:2.25,"aria-hidden":!0})})]})]}),i.jsxs("div",{className:"mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted",children:[i.jsxs("a",{href:re.linkedinHref,target:"_blank",rel:"noopener noreferrer",className:"t-all inline-flex items-center gap-1.5 hover:text-ink",children:[i.jsx(gd,{size:13,className:"text-accent-text","aria-hidden":!0})," LinkedIn"]}),i.jsxs("a",{href:re.phoneHref,className:"t-all inline-flex items-center gap-1.5 hover:text-ink",children:[i.jsx(yd,{size:13,className:"text-accent-text","aria-hidden":!0})," ",re.phone]})]}),i.jsxs("div",{className:"mt-4 flex gap-2",children:[i.jsx($l,{label:t.language,value:n,onChange:e.setLang,options:[{value:"fr",label:"FR",aria:"Français"},{value:"en",label:"EN",aria:"English"}]}),i.jsx($l,{label:t.theme,value:e.theme,onChange:e.setTheme,options:[{value:"light",label:i.jsxs(i.Fragment,{children:[t.light," ",i.jsx(wd,{size:12,className:"text-vermillion","aria-hidden":!0})]}),aria:t.light},{value:"dark",label:i.jsxs(i.Fragment,{children:[t.dark," ",i.jsx(vd,{size:12,className:"text-vermillion","aria-hidden":!0})]}),aria:t.dark}]})]})]})]})]})}const mg=["express","standard","deepdive"],Wl="t-all flex min-w-0 items-center rounded-full text-[12.5px] font-medium",Hl=e=>e?"bg-surface-2 text-ink":"text-muted hover:text-ink";function fg({t:e,title:t,model:n,setModel:r,onMenu:s,onToggleSidebar:o,docTabs:a=[],chatActive:l=!0,onSelectChat:u,docAction:d}){const[p,g]=C.useState(!1),h=C.useRef(null);return C.useEffect(()=>{if(!p)return;const x=y=>{var k;(k=h.current)!=null&&k.contains(y.target)||g(!1)},v=y=>y.key==="Escape"&&g(!1);return document.addEventListener("mousedown",x),document.addEventListener("keydown",v),()=>{document.removeEventListener("mousedown",x),document.removeEventListener("keydown",v)}},[p]),i.jsxs("header",{className:"relative z-20 flex h-14 shrink-0 items-center gap-2 border-b border-line px-2 sm:px-4",children:[i.jsx("button",{onClick:s,"aria-label":e.openMenu,className:"icon-btn md:hidden",children:i.jsx(xd,{size:19,"aria-hidden":!0})}),i.jsx("button",{onClick:o,"aria-label":e.toggleSidebar,title:e.toggleSidebar,className:"icon-btn hidden md:inline-flex",children:i.jsx(So,{size:18,"aria-hidden":!0})}),a.length>0?i.jsxs("div",{role:"tablist",className:"flex min-w-0 flex-1 items-center gap-1 overflow-x-auto",children:[i.jsx("button",{role:"tab","aria-selected":l,onClick:u,className:`${Wl} px-3 py-1.5 ${Hl(l)}`,children:i.jsx("span",{className:"truncate",children:t})}),a.map(x=>i.jsxs("span",{className:`${Wl} shrink-0 ${Hl(x.active)}`,children:[i.jsx("button",{role:"tab","aria-selected":x.active,onClick:x.onSelect,className:"whitespace-nowrap rounded-full py-1.5 pl-3 pr-1.5",children:x.label}),i.jsx("button",{onClick:x.onClose,"aria-label":x.closeLabel,title:x.closeLabel,className:"t-all mr-1 flex h-6 w-6 items-center justify-center rounded-full text-muted hover:bg-line hover:text-ink",children:i.jsx(et,{size:13,"aria-hidden":!0})})]},x.id))]}):i.jsx("h2",{className:"eyebrow min-w-0 flex-1 truncate text-ink",children:t}),d??(l?i.jsxs("div",{ref:h,className:"relative",children:[i.jsxs("button",{onClick:()=>g(x=>!x),"aria-haspopup":"listbox","aria-expanded":p,"aria-label":e.model,className:"t-all flex items-center gap-2 rounded-full border border-line bg-elevated px-3.5 py-1.5 text-[13px] hover:border-rule",children:[i.jsx("span",{className:"h-2 w-2 rounded-full bg-vermillion","aria-hidden":!0}),i.jsx("span",{className:"font-semibold text-ink",children:e.models[n].name}),i.jsxs("span",{className:"hidden font-light text-muted lg:inline",children:["(",e.models[n].hint,")"]}),i.jsx(Zn,{size:15,className:`t-all text-muted ${p?"rotate-180":""}`,"aria-hidden":!0})]}),p&&i.jsx("ul",{role:"listbox","aria-label":e.model,className:"rise absolute right-0 top-full z-20 mt-2 w-[min(320px,calc(100vw-1.5rem))] rounded-3xl border border-rule bg-elevated p-1.5",children:mg.map(x=>i.jsx("li",{role:"option","aria-selected":x===n,children:i.jsxs("button",{onClick:()=>{r(x),g(!1)},className:"t-all flex w-full items-start gap-3 rounded-2xl px-3 py-2.5 text-left hover:bg-surface-2",children:[i.jsxs("span",{className:"min-w-0 flex-1",children:[i.jsxs("span",{className:"block text-sm font-semibold text-ink",children:[e.models[x].name," ",i.jsxs("span",{className:"font-normal text-muted",children:["· ",e.models[x].hint]})]}),i.jsx("span",{className:"mt-0.5 block text-xs font-light text-muted",children:e.models[x].desc})]}),x===n&&i.jsx(jt,{size:16,className:"mt-0.5 shrink-0 text-accent-text","aria-hidden":!0})]})},x))})]}):null)]})}const hg={profile:Is,ai:Of,impact:jo,search:md,portfoliods:hd};function gg({lang:e,t,onPick:n}){const[r,s]=t.heroTitle.split(re.name),[,o,a]=r.match(/^(.*\s)(\S+['’])$/s)??[null,r,""],[,l="",u=""]=s.match(/^(['’]s)?\s*(.*)$/s)??[],d=/^[.!?…]*$/.test(u);return i.jsxs("div",{className:"mx-auto flex min-h-full w-full max-w-4xl flex-col justify-center px-5 py-8 sm:px-10 sm:py-12",children:[i.jsxs("div",{className:"rise",children:[i.jsxs("h1",{className:"text-ink",children:[i.jsx("span",{className:"block text-[clamp(1.2rem,2.5vw,1.7rem)] font-light leading-snug",children:o.trim()}),i.jsxs("span",{className:"mt-2 block font-display text-[clamp(2.3rem,6vw,4rem)] font-semibold leading-[1.08] tracking-[-0.035em]",children:[a&&i.jsx("span",{className:"font-light",children:a}),re.name,l&&i.jsx("span",{className:"font-light",children:l}),d&&i.jsx("span",{className:"text-vermillion",children:u})]}),!d&&i.jsx("span",{className:"mt-3 block text-[clamp(1.2rem,2.5vw,1.7rem)] font-light leading-snug",children:u})]}),i.jsx("p",{className:"mt-6 max-w-xl text-[15px] font-light leading-relaxed text-muted sm:text-base",children:t.heroSubtitle})]}),i.jsx("div",{className:"mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2",children:t.suggestions.map((p,g)=>{const h=hg[p.intentId]??qf;return i.jsxs("button",{onClick:()=>n(p.intentId),style:{animationDelay:`${120+g*70}ms`},className:`rise t-all group flex flex-col gap-3 rounded-3xl border border-line bg-elevated p-5 text-left hover:-translate-y-0.5 hover:border-rule ${g===t.suggestions.length-1&&t.suggestions.length%2===1?"sm:col-span-2":""}`,children:[i.jsxs("span",{className:"flex items-center gap-3",children:[i.jsx("span",{className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-tint text-accent-text",children:i.jsx(h,{size:15,"aria-hidden":!0})}),i.jsx("span",{className:"eyebrow flex-1 font-semibold text-ink",children:p.title}),i.jsx(vr,{size:15,className:"t-all shrink-0 text-muted group-hover:text-ink","aria-hidden":!0})]}),i.jsx("span",{className:"text-[14.5px] font-light leading-relaxed text-ink",children:Bt(p.intentId).question[e]})]},p.intentId)})})]})}const xg={fr:{role:"Product Designer · AI & Design Ops",newChat:"Nouvelle conversation",caseStudies:"Projets professionnels",personalProjects:"Projets personnels",dsProject:{title:"Portfolio · Design System automatisé avec l’IA",tag:"2026 · Skill IA · Claude Code"},quickAccess:"Accès rapide et contact",viewCV:"Voir et télécharger le CV",contactEmail:"Contacter par email",language:"Langue",theme:"Thème",light:"Light",dark:"Dark",openMenu:"Ouvrir le menu",closeMenu:"Fermer le menu",toggleSidebar:"Afficher / masquer la barre latérale",newSession:"Nouvelle conversation",model:"Niveau de détail",models:{standard:{name:"ASL Complet",hint:"La réponse structurée",desc:"Contexte, rôle, solution et résultats."},express:{name:"ASL Court",hint:"L’essentiel",desc:"Quelques points et les chiffres clés."},deepdive:{name:"ASL Détaillé",hint:"Avec la méthode",desc:"La réponse complète, plus la méthode de travail."}},heroTitle:"Bonjour, je suis l'assistant portfolio d'Anne-Sophie Leroy.",heroSubtitle:"Product Designer spécialisée en UX/UI, Design Ops et workflows IA. Posez-moi une question sur son parcours, ses projets chez BNP Paribas ou sa façon d’industrialiser le design.",suggestions:[{title:"Profil et valeur ajoutée",intentId:"profile"},{title:"Le Design System de ce portfolio",intentId:"portfoliods"},{title:"Impact et chiffres clés",intentId:"impact"},{title:"Recherche actuelle",intentId:"search"}],placeholders:["Posez une question sur Anne-Sophie, ses AI skills, son parcours...","Ex. : « Comment son équipe design travaille-t-elle avec l’IA ? »","Tapez / pour les commandes : /cv, /projets, /skills, /contact, /stack"],send:"Envoyer",stop:"Arrêter la génération",commands:"Commandes",slash:[{cmd:"/cv",desc:"Son CV"},{cmd:"/projets",desc:"Lister les projets"},{cmd:"/skills",desc:"Compétences clés"},{cmd:"/contact",desc:"Écrire à Anne-Sophie"},{cmd:"/stack",desc:"Outils et stack"},{cmd:"/designsystem",desc:"Le Design System de ce portfolio"}],stopped:"Génération interrompue",thinking:"Réflexion en cours",followUps:"Pour aller plus loin",actionCV:"Voir le CV",actionEmail:"Envoyer un email",close:"Fermer",cv:{title:"Curriculum Vitae",tab:"CV",closeTab:"Fermer le CV",download:"Télécharger en PDF",downloadHint:"Si le PDF n’est pas disponible, la fenêtre d’impression s’ouvre : choisissez « Enregistrer au format PDF ».",experience:"Expériences",skills:"Compétences et outils",education:"Formation",languages:"Langues",interests:"Engagements et intérêts"},emailSubject:"Opportunité Product Designer",skill:{badge:"Skill réel",caption:"Le skill qui encadre le design de ce portfolio, conçu et testé par Anne-Sophie avec Claude Code. Fichiers réels du projet.",copy:"Copier",copied:"Copié !"},assistantName:"Assistant ASL",you:"Vous"},en:{role:"Product Designer · AI & Design Ops",newChat:"New conversation",caseStudies:"Work projects",personalProjects:"Personal projects",dsProject:{title:"Portfolio · AI-automated Design System",tag:"2026 · AI skill · Claude Code"},quickAccess:"Quick access and contact",viewCV:"View and download the CV",contactEmail:"Contact by email",language:"Language",theme:"Theme",light:"Light",dark:"Dark",openMenu:"Open menu",closeMenu:"Close menu",toggleSidebar:"Show / hide sidebar",newSession:"New conversation",model:"Level of detail",models:{standard:{name:"ASL Full",hint:"The structured answer",desc:"Context, role, solution and results."},express:{name:"ASL Short",hint:"The essentials",desc:"A few points and the key figures."},deepdive:{name:"ASL In-depth",hint:"With the method",desc:"The full answer, plus the working method."}},heroTitle:"Hello, I'm Anne-Sophie Leroy's portfolio assistant.",heroSubtitle:"Product Designer specialising in UX/UI, Design Ops and AI workflows. Ask me about her background, her projects at BNP Paribas or how she industrialises design.",suggestions:[{title:"Profile and added value",intentId:"profile"},{title:"This portfolio’s Design System",intentId:"portfoliods"},{title:"Impact and key figures",intentId:"impact"},{title:"Current search",intentId:"search"}],placeholders:["Ask about Anne-Sophie, her AI skills, her background...","E.g. “How does her design team work with AI?”","Type / for commands: /cv, /projects, /skills, /contact, /stack"],send:"Send",stop:"Stop generating",commands:"Commands",slash:[{cmd:"/cv",desc:"Her CV"},{cmd:"/projects",desc:"List the projects"},{cmd:"/skills",desc:"Key skills"},{cmd:"/contact",desc:"Write to Anne-Sophie"},{cmd:"/stack",desc:"Tools and stack"},{cmd:"/designsystem",desc:"This portfolio’s Design System"}],stopped:"Generation stopped",thinking:"Thinking",followUps:"Go further",actionCV:"View CV",actionEmail:"Send an email",close:"Close",cv:{title:"Curriculum Vitae",tab:"CV",closeTab:"Close the CV",download:"Download as PDF",downloadHint:"If the PDF is not available, the print dialog opens: choose “Save as PDF”.",experience:"Experience",skills:"Skills and tools",education:"Education",languages:"Languages",interests:"Commitments and interests"},emailSubject:"Product Designer opportunity",skill:{badge:"Real skill",caption:"The skill that frames this portfolio’s design, designed and tested by Anne-Sophie with Claude Code. Real project files (in French).",copy:"Copy",copied:"Copied!"},assistantName:"ASL Assistant",you:"You"}},vg=450,yg=30,bg=2;function wg(e,t){const[n,r]=C.useState([]),[s,o]=C.useState(null),a=C.useRef(),l=C.useRef(0),u=C.useRef(e);u.current=e;const d=()=>{window.clearTimeout(a.current),window.clearInterval(a.current)};C.useEffect(()=>d,[]);const p=C.useCallback((y,k)=>{d();const m=`m${++l.current}`,c=`m${++l.current}`;r(f=>[...f,{id:m,role:"user",...y},{id:c,role:"assistant",intentId:k,model:t}]),o({id:c,count:0}),a.current=window.setTimeout(()=>{a.current=window.setInterval(()=>{o(f=>{if(!f||f.id!==c)return f;const b=qd(Ld(k,u.current,t)).length,S=f.count+bg;return S>=b?(d(),null):{id:c,count:S}})},yg)},vg)},[t]),g=C.useCallback(y=>{const k=fh(y);return p({text:y},k),k},[p]),h=C.useCallback(y=>p({questionOf:y},y),[p]),x=C.useCallback(()=>{d(),o(y=>(y&&r(k=>k.map(m=>m.id===y.id&&m.role==="assistant"?{...m,stoppedAt:y.count}:m)),null))},[]),v=C.useCallback(()=>{d(),o(null),r([])},[]);return{messages:n,stream:s,isStreaming:s!==null,askText:g,askIntent:h,stop:x,reset:v}}const Xl="asl-lang";function kg(){const[e,t]=C.useState(()=>{try{const n=localStorage.getItem(Xl);if(n==="fr"||n==="en")return n}catch{}return"fr"});return C.useEffect(()=>{document.documentElement.lang=e;try{localStorage.setItem(Xl,e)}catch{}},[e]),[e,t]}const Kl="asl-theme";function jg(){const[e,t]=C.useState(()=>{try{return localStorage.getItem(Kl)==="dark"?"dark":"light"}catch{return"light"}});return C.useEffect(()=>{document.documentElement.dataset.theme=e;try{localStorage.setItem(Kl,e)}catch{}},[e]),[e,t]}const Ql=[...No,...Ao],Qd="#design-system",Zl=()=>window.location.hash===Qd;function Sg(){const[e,t]=kg(),[n,r]=jg(),[s,o]=C.useState("standard"),[a,l]=C.useState(()=>Zl()?["ds"]:[]),[u,d]=C.useState(()=>Zl()?"ds":"chat"),[p,g]=C.useState(!1),[h,x]=C.useState(!1),[v,y]=C.useState(null),[k,m]=C.useState(null),c=xg[e],f=wg(e,s),b=C.useRef(null),S=C.useRef(!0);C.useEffect(()=>{const I=b.current;I&&(f.messages.length===0?I.scrollTop=0:S.current&&(I.scrollTop=I.scrollHeight))},[f.messages,f.stream]),C.useEffect(()=>{const I=u==="ds"?Qd:window.location.pathname+window.location.search;window.history.replaceState(null,"",I)},[u]);const P=()=>{const I=b.current;I&&(S.current=I.scrollHeight-I.scrollTop-I.clientHeight<120)},j=C.useCallback(I=>{g(!1),l(Z=>Z.includes(I)?Z:[...Z,I]),d(I)},[]),D=C.useCallback(I=>{l(Z=>Z.filter(ce=>ce!==I)),d(Z=>Z===I?"chat":Z)},[]),O=C.useCallback(()=>j("cv"),[j]),q=C.useCallback(()=>j("ds"),[j]),we=C.useCallback(I=>m(I),[]),It=C.useCallback(()=>m(null),[]),at=()=>{g(!1),window.location.href=`mailto:${re.email}?subject=${encodeURIComponent(c.emailSubject)}`},Cr=()=>{f.reset(),d("chat"),y(null),g(!1)},Ks=I=>{const Z=Ql.find(Dn=>Dn.id===I);if(!Z)return;d("chat"),f.reset();const ce=Bt(Z.intentId);S.current=!(ce.flow||ce.anchors),y(I),g(!1),f.askIntent(Z.intentId)},An=I=>{S.current=!0,f.askText(I)},Kt=I=>{d("chat"),S.current=!0,f.askIntent(I)},N=I=>I==="cv"?O():at(),T=f.messages[0],L=v?Ql.find(I=>I.id===v).title[e]:(T==null?void 0:T.role)==="user"?T.text??Bt(T.questionOf??"").question[e]:c.newSession,V={cv:c.cv.tab,ds:Yn[e].title};return i.jsxs("div",{className:"relative flex h-dvh overflow-hidden bg-bg text-ink",children:[i.jsx(pg,{t:c,lang:e,theme:n,open:p,collapsed:h,activeProject:u==="chat"?v:null,onClose:()=>g(!1),onNew:Cr,onProject:Ks,onDesignSystem:q,designSystemActive:u==="ds",onCV:O,onEmail:at,setLang:t,setTheme:r}),i.jsxs("main",{className:"relative z-10 flex min-w-0 flex-1 flex-col",children:[i.jsx(fg,{t:c,title:L,model:s,setModel:o,onMenu:()=>g(!0),onToggleSidebar:()=>x(I=>!I),chatActive:u==="chat",onSelectChat:()=>d("chat"),docTabs:a.map(I=>({id:I,label:V[I],active:u===I,closeLabel:`${c.close} — ${V[I]}`,onSelect:()=>d(I),onClose:()=>D(I)})),docAction:u==="cv"?i.jsxs("button",{onClick:tg,className:"btn-primary !px-4 !py-2",title:c.cv.downloadHint,children:[i.jsx("span",{className:"hidden sm:inline",children:c.cv.download}),i.jsx("span",{className:"sm:hidden",children:"PDF"}),i.jsx(Tf,{size:16,"aria-hidden":!0})]}):void 0}),u==="ds"?i.jsx(ug,{lang:e,t:c}):i.jsx("div",{ref:b,onScroll:P,className:"relative z-10 min-h-0 flex-1 overflow-y-auto overflow-x-hidden",children:u==="cv"?i.jsx(ng,{t:c,lang:e}):f.messages.length===0?i.jsx(gg,{lang:e,t:c,onPick:Kt}):i.jsx("div",{role:"log",className:"mx-auto w-full max-w-3xl space-y-7 px-4 py-8 sm:px-6",children:f.messages.map((I,Z)=>{var ce;return i.jsx(Hh,{message:I,lang:e,t:c,streamCount:((ce=f.stream)==null?void 0:ce.id)===I.id?f.stream.count:null,isLast:Z===f.messages.length-1,onAction:N,onFollowUp:Kt,onOpenPrototype:we,onOpenDesignSystem:q},I.id)})})}),u==="chat"&&i.jsx(Hd,{t:c,isStreaming:f.isStreaming,onSend:An,onStop:f.stop})]}),k&&i.jsx(cg,{src:nh,title:ge[e].viewerTitle,note:ge[e].viewerNote,restartLabel:ge[e].restart,desktopHint:ge[e].desktopHint,closeLabel:c.close,onClose:It})]})}Di.createRoot(document.getElementById("root")).render(i.jsx(mp.StrictMode,{children:i.jsx(Sg,{})}));
