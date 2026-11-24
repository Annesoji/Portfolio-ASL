(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ad(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rl={exports:{}},js={},Ml={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fr=Symbol.for("react.element"),Id=Symbol.for("react.portal"),Dd=Symbol.for("react.fragment"),Pd=Symbol.for("react.strict_mode"),Ed=Symbol.for("react.profiler"),Td=Symbol.for("react.provider"),Ld=Symbol.for("react.context"),qd=Symbol.for("react.forward_ref"),zd=Symbol.for("react.suspense"),Ud=Symbol.for("react.memo"),Rd=Symbol.for("react.lazy"),ha=Symbol.iterator;function Md(e){return e===null||typeof e!="object"?null:(e=ha&&e[ha]||e["@@iterator"],typeof e=="function"?e:null)}var Fl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_l=Object.assign,Ol={};function Sn(e,t,n){this.props=e,this.context=t,this.refs=Ol,this.updater=n||Fl}Sn.prototype.isReactComponent={};Sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bl(){}Bl.prototype=Sn.prototype;function vo(e,t,n){this.props=e,this.context=t,this.refs=Ol,this.updater=n||Fl}var yo=vo.prototype=new Bl;yo.constructor=vo;_l(yo,Sn.prototype);yo.isPureReactComponent=!0;var ga=Array.isArray,Vl=Object.prototype.hasOwnProperty,bo={current:null},$l={key:!0,ref:!0,__self:!0,__source:!0};function Wl(e,t,n){var r,s={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Vl.call(t,r)&&!$l.hasOwnProperty(r)&&(s[r]=t[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];s.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:fr,type:e,key:i,ref:a,props:s,_owner:bo.current}}function Fd(e,t){return{$$typeof:fr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function wo(e){return typeof e=="object"&&e!==null&&e.$$typeof===fr}function _d(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xa=/\/+/g;function Bs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_d(""+e.key):t.toString(36)}function Fr(e,t,n,r,s){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case fr:case Id:a=!0}}if(a)return a=e,s=s(a),e=r===""?"."+Bs(a,0):r,ga(s)?(n="",e!=null&&(n=e.replace(xa,"$&/")+"/"),Fr(s,t,n,"",function(d){return d})):s!=null&&(wo(s)&&(s=Fd(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(xa,"$&/")+"/")+e)),t.push(s)),1;if(a=0,r=r===""?".":r+":",ga(e))for(var l=0;l<e.length;l++){i=e[l];var u=r+Bs(i,l);a+=Fr(i,t,n,u,s)}else if(u=Md(e),typeof u=="function")for(e=u.call(e),l=0;!(i=e.next()).done;)i=i.value,u=r+Bs(i,l++),a+=Fr(i,t,n,u,s);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function kr(e,t,n){if(e==null)return e;var r=[],s=0;return Fr(e,r,"","",function(i){return t.call(n,i,s++)}),r}function Od(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},_r={transition:null},Bd={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:_r,ReactCurrentOwner:bo};function Gl(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:kr,forEach:function(e,t,n){kr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return kr(e,function(){t++}),t},toArray:function(e){return kr(e,function(t){return t})||[]},only:function(e){if(!wo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=Sn;z.Fragment=Dd;z.Profiler=Ed;z.PureComponent=vo;z.StrictMode=Pd;z.Suspense=zd;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bd;z.act=Gl;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_l({},e.props),s=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=bo.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)Vl.call(t,u)&&!$l.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:fr,type:e.type,key:s,ref:i,props:r,_owner:a}};z.createContext=function(e){return e={$$typeof:Ld,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Td,_context:e},e.Consumer=e};z.createElement=Wl;z.createFactory=function(e){var t=Wl.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:qd,render:e}};z.isValidElement=wo;z.lazy=function(e){return{$$typeof:Rd,_payload:{_status:-1,_result:e},_init:Od}};z.memo=function(e,t){return{$$typeof:Ud,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=_r.transition;_r.transition={};try{e()}finally{_r.transition=t}};z.unstable_act=Gl;z.useCallback=function(e,t){return de.current.useCallback(e,t)};z.useContext=function(e){return de.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return de.current.useDeferredValue(e)};z.useEffect=function(e,t){return de.current.useEffect(e,t)};z.useId=function(){return de.current.useId()};z.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return de.current.useMemo(e,t)};z.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};z.useRef=function(e){return de.current.useRef(e)};z.useState=function(e){return de.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return de.current.useTransition()};z.version="18.3.1";Ml.exports=z;var C=Ml.exports;const Vd=Ad(C);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $d=C,Wd=Symbol.for("react.element"),Gd=Symbol.for("react.fragment"),Hd=Object.prototype.hasOwnProperty,Xd=$d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kd={key:!0,ref:!0,__self:!0,__source:!0};function Hl(e,t,n){var r,s={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Hd.call(t,r)&&!Kd.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:Wd,type:e,key:i,ref:a,props:s,_owner:Xd.current}}js.Fragment=Gd;js.jsx=Hl;js.jsxs=Hl;Rl.exports=js;var o=Rl.exports,yi={},Xl={exports:{}},Ne={},Kl={exports:{}},Ql={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,E){var L=N.length;N.push(E);e:for(;0<L;){var B=L-1>>>1,P=N[B];if(0<s(P,E))N[B]=E,N[L]=P,L=B;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var E=N[0],L=N.pop();if(L!==E){N[0]=L;e:for(var B=0,P=N.length,Q=P>>>1;B<Q;){var me=2*(B+1)-1,Os=N[me],It=me+1,wr=N[It];if(0>s(Os,L))It<P&&0>s(wr,Os)?(N[B]=wr,N[It]=L,B=It):(N[B]=Os,N[me]=L,B=me);else if(It<P&&0>s(wr,L))N[B]=wr,N[It]=L,B=It;else break e}}return E}function s(N,E){var L=N.sortIndex-E.sortIndex;return L!==0?L:N.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],d=[],f=1,g=null,h=3,x=!1,v=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var E=n(d);E!==null;){if(E.callback===null)r(d);else if(E.startTime<=N)r(d),E.sortIndex=E.expirationTime,t(u,E);else break;E=n(d)}}function b(N){if(y=!1,m(N),!v)if(n(u)!==null)v=!0,Nn(j);else{var E=n(d);E!==null&&Ht(b,E.startTime-N)}}function j(N,E){v=!1,y&&(y=!1,p(I),I=-1),x=!0;var L=h;try{for(m(E),g=n(u);g!==null&&(!(g.expirationTime>E)||N&&!be());){var B=g.callback;if(typeof B=="function"){g.callback=null,h=g.priorityLevel;var P=B(g.expirationTime<=E);E=e.unstable_now(),typeof P=="function"?g.callback=P:g===n(u)&&r(u),m(E)}else r(u);g=n(u)}if(g!==null)var Q=!0;else{var me=n(d);me!==null&&Ht(b,me.startTime-E),Q=!1}return Q}finally{g=null,h=L,x=!1}}var D=!1,S=null,I=-1,O=5,q=-1;function be(){return!(e.unstable_now()-q<O)}function At(){if(S!==null){var N=e.unstable_now();q=N;var E=!0;try{E=S(!0,N)}finally{E?it():(D=!1,S=null)}}else D=!1}var it;if(typeof c=="function")it=function(){c(At)};else if(typeof MessageChannel<"u"){var br=new MessageChannel,_s=br.port2;br.port1.onmessage=At,it=function(){_s.postMessage(null)}}else it=function(){k(At,0)};function Nn(N){S=N,D||(D=!0,it())}function Ht(N,E){I=k(function(){N(e.unstable_now())},E)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,Nn(j))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var E=3;break;default:E=h}var L=h;h=E;try{return N()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,E){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=h;h=N;try{return E()}finally{h=L}},e.unstable_scheduleCallback=function(N,E,L){var B=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?B+L:B):L=B,N){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=L+P,N={id:f++,callback:E,priorityLevel:N,startTime:L,expirationTime:P,sortIndex:-1},L>B?(N.sortIndex=L,t(d,N),n(u)===null&&N===n(d)&&(y?(p(I),I=-1):y=!0,Ht(b,L-B))):(N.sortIndex=P,t(u,N),v||x||(v=!0,Nn(j))),N},e.unstable_shouldYield=be,e.unstable_wrapCallback=function(N){var E=h;return function(){var L=h;h=E;try{return N.apply(this,arguments)}finally{h=L}}}})(Ql);Kl.exports=Ql;var Qd=Kl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd=C,Ce=Qd;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zl=new Set,Qn={};function Wt(e,t){gn(e,t),gn(e+"Capture",t)}function gn(e,t){for(Qn[e]=t,e=0;e<t.length;e++)Zl.add(t[e])}var et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bi=Object.prototype.hasOwnProperty,Yd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,va={},ya={};function Jd(e){return bi.call(ya,e)?!0:bi.call(va,e)?!1:Yd.test(e)?ya[e]=!0:(va[e]=!0,!1)}function ep(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function tp(e,t,n,r){if(t===null||typeof t>"u"||ep(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,s,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ko=/[\-:]([a-z])/g;function So(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ko,So);se[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ko,So);se[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ko,So);se[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function jo(e,t,n,r){var s=se.hasOwnProperty(t)?se[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(tp(t,n,s,r)&&(n=null),r||s===null?Jd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var st=Zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sr=Symbol.for("react.element"),Qt=Symbol.for("react.portal"),Zt=Symbol.for("react.fragment"),Co=Symbol.for("react.strict_mode"),wi=Symbol.for("react.profiler"),Yl=Symbol.for("react.provider"),Jl=Symbol.for("react.context"),No=Symbol.for("react.forward_ref"),ki=Symbol.for("react.suspense"),Si=Symbol.for("react.suspense_list"),Ao=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),eu=Symbol.for("react.offscreen"),ba=Symbol.iterator;function An(e){return e===null||typeof e!="object"?null:(e=ba&&e[ba]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Vs;function Un(e){if(Vs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vs=t&&t[1]||""}return`
`+Vs+e}var $s=!1;function Ws(e,t){if(!e||$s)return"";$s=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),a=s.length-1,l=i.length-1;1<=a&&0<=l&&s[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(s[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||s[a]!==i[l]){var u=`
`+s[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=l);break}}}finally{$s=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Un(e):""}function np(e){switch(e.tag){case 5:return Un(e.type);case 16:return Un("Lazy");case 13:return Un("Suspense");case 19:return Un("SuspenseList");case 0:case 2:case 15:return e=Ws(e.type,!1),e;case 11:return e=Ws(e.type.render,!1),e;case 1:return e=Ws(e.type,!0),e;default:return""}}function ji(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zt:return"Fragment";case Qt:return"Portal";case wi:return"Profiler";case Co:return"StrictMode";case ki:return"Suspense";case Si:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Jl:return(e.displayName||"Context")+".Consumer";case Yl:return(e._context.displayName||"Context")+".Provider";case No:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ao:return t=e.displayName||null,t!==null?t:ji(e.type)||"Memo";case at:t=e._payload,e=e._init;try{return ji(e(t))}catch{}}return null}function rp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ji(t);case 8:return t===Co?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function sp(e){var t=tu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jr(e){e._valueTracker||(e._valueTracker=sp(e))}function nu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=tu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Zr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ci(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ru(e,t){t=t.checked,t!=null&&jo(e,"checked",t,!1)}function Ni(e,t){ru(e,t);var n=kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ai(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ai(e,t.type,kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ka(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ai(e,t,n){(t!=="number"||Zr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rn=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Ii(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(Rn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kt(n)}}function su(e,t){var n=kt(t.value),r=kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ja(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function iu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Di(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?iu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Cr,ou=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Cr=Cr||document.createElement("div"),Cr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Cr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ip=["Webkit","ms","Moz","O"];Object.keys(_n).forEach(function(e){ip.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_n[t]=_n[e]})});function au(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_n.hasOwnProperty(e)&&_n[e]?(""+t).trim():t+"px"}function lu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=au(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var op=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pi(e,t){if(t){if(op[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function Ei(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ti=null;function Io(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Li=null,cn=null,dn=null;function Ca(e){if(e=xr(e)){if(typeof Li!="function")throw Error(w(280));var t=e.stateNode;t&&(t=Ds(t),Li(e.stateNode,e.type,t))}}function uu(e){cn?dn?dn.push(e):dn=[e]:cn=e}function cu(){if(cn){var e=cn,t=dn;if(dn=cn=null,Ca(e),t)for(e=0;e<t.length;e++)Ca(t[e])}}function du(e,t){return e(t)}function pu(){}var Gs=!1;function mu(e,t,n){if(Gs)return e(t,n);Gs=!0;try{return du(e,t,n)}finally{Gs=!1,(cn!==null||dn!==null)&&(pu(),cu())}}function Yn(e,t){var n=e.stateNode;if(n===null)return null;var r=Ds(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var qi=!1;if(et)try{var In={};Object.defineProperty(In,"passive",{get:function(){qi=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{qi=!1}function ap(e,t,n,r,s,i,a,l,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(f){this.onError(f)}}var On=!1,Yr=null,Jr=!1,zi=null,lp={onError:function(e){On=!0,Yr=e}};function up(e,t,n,r,s,i,a,l,u){On=!1,Yr=null,ap.apply(lp,arguments)}function cp(e,t,n,r,s,i,a,l,u){if(up.apply(this,arguments),On){if(On){var d=Yr;On=!1,Yr=null}else throw Error(w(198));Jr||(Jr=!0,zi=d)}}function Gt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function fu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Na(e){if(Gt(e)!==e)throw Error(w(188))}function dp(e){var t=e.alternate;if(!t){if(t=Gt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Na(s),e;if(i===r)return Na(s),t;i=i.sibling}throw Error(w(188))}if(n.return!==r.return)n=s,r=i;else{for(var a=!1,l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function hu(e){return e=dp(e),e!==null?gu(e):null}function gu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=gu(e);if(t!==null)return t;e=e.sibling}return null}var xu=Ce.unstable_scheduleCallback,Aa=Ce.unstable_cancelCallback,pp=Ce.unstable_shouldYield,mp=Ce.unstable_requestPaint,X=Ce.unstable_now,fp=Ce.unstable_getCurrentPriorityLevel,Do=Ce.unstable_ImmediatePriority,vu=Ce.unstable_UserBlockingPriority,es=Ce.unstable_NormalPriority,hp=Ce.unstable_LowPriority,yu=Ce.unstable_IdlePriority,Cs=null,Ge=null;function gp(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(Cs,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:yp,xp=Math.log,vp=Math.LN2;function yp(e){return e>>>=0,e===0?32:31-(xp(e)/vp|0)|0}var Nr=64,Ar=4194304;function Mn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ts(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~s;l!==0?r=Mn(l):(i&=a,i!==0&&(r=Mn(i)))}else a=n&~s,a!==0?r=Mn(a):i!==0&&(r=Mn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,i=t&-t,s>=i||s===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),s=1<<n,r|=e[n],t&=~s;return r}function bp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Fe(i),l=1<<a,u=s[a];u===-1?(!(l&n)||l&r)&&(s[a]=bp(l,t)):u<=t&&(e.expiredLanes|=l),i&=~l}}function Ui(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bu(){var e=Nr;return Nr<<=1,!(Nr&4194240)&&(Nr=64),e}function Hs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function kp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Fe(n),i=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~i}}function Po(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var R=0;function wu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ku,Eo,Su,ju,Cu,Ri=!1,Ir=[],mt=null,ft=null,ht=null,Jn=new Map,er=new Map,ut=[],Sp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ia(e,t){switch(e){case"focusin":case"focusout":mt=null;break;case"dragenter":case"dragleave":ft=null;break;case"mouseover":case"mouseout":ht=null;break;case"pointerover":case"pointerout":Jn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":er.delete(t.pointerId)}}function Dn(e,t,n,r,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},t!==null&&(t=xr(t),t!==null&&Eo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function jp(e,t,n,r,s){switch(t){case"focusin":return mt=Dn(mt,e,t,n,r,s),!0;case"dragenter":return ft=Dn(ft,e,t,n,r,s),!0;case"mouseover":return ht=Dn(ht,e,t,n,r,s),!0;case"pointerover":var i=s.pointerId;return Jn.set(i,Dn(Jn.get(i)||null,e,t,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,er.set(i,Dn(er.get(i)||null,e,t,n,r,s)),!0}return!1}function Nu(e){var t=Lt(e.target);if(t!==null){var n=Gt(t);if(n!==null){if(t=n.tag,t===13){if(t=fu(n),t!==null){e.blockedOn=t,Cu(e.priority,function(){Su(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Or(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Mi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ti=r,n.target.dispatchEvent(r),Ti=null}else return t=xr(n),t!==null&&Eo(t),e.blockedOn=n,!1;t.shift()}return!0}function Da(e,t,n){Or(e)&&n.delete(t)}function Cp(){Ri=!1,mt!==null&&Or(mt)&&(mt=null),ft!==null&&Or(ft)&&(ft=null),ht!==null&&Or(ht)&&(ht=null),Jn.forEach(Da),er.forEach(Da)}function Pn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ri||(Ri=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,Cp)))}function tr(e){function t(s){return Pn(s,e)}if(0<Ir.length){Pn(Ir[0],e);for(var n=1;n<Ir.length;n++){var r=Ir[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mt!==null&&Pn(mt,e),ft!==null&&Pn(ft,e),ht!==null&&Pn(ht,e),Jn.forEach(t),er.forEach(t),n=0;n<ut.length;n++)r=ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ut.length&&(n=ut[0],n.blockedOn===null);)Nu(n),n.blockedOn===null&&ut.shift()}var pn=st.ReactCurrentBatchConfig,ns=!0;function Np(e,t,n,r){var s=R,i=pn.transition;pn.transition=null;try{R=1,To(e,t,n,r)}finally{R=s,pn.transition=i}}function Ap(e,t,n,r){var s=R,i=pn.transition;pn.transition=null;try{R=4,To(e,t,n,r)}finally{R=s,pn.transition=i}}function To(e,t,n,r){if(ns){var s=Mi(e,t,n,r);if(s===null)ri(e,t,r,rs,n),Ia(e,r);else if(jp(s,e,t,n,r))r.stopPropagation();else if(Ia(e,r),t&4&&-1<Sp.indexOf(e)){for(;s!==null;){var i=xr(s);if(i!==null&&ku(i),i=Mi(e,t,n,r),i===null&&ri(e,t,r,rs,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else ri(e,t,r,null,n)}}var rs=null;function Mi(e,t,n,r){if(rs=null,e=Io(r),e=Lt(e),e!==null)if(t=Gt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=fu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return rs=e,null}function Au(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fp()){case Do:return 1;case vu:return 4;case es:case hp:return 16;case yu:return 536870912;default:return 16}default:return 16}}var dt=null,Lo=null,Br=null;function Iu(){if(Br)return Br;var e,t=Lo,n=t.length,r,s="value"in dt?dt.value:dt.textContent,i=s.length;for(e=0;e<n&&t[e]===s[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===s[i-r];r++);return Br=s.slice(e,1<r?1-r:void 0)}function Vr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dr(){return!0}function Pa(){return!1}function Ae(e){function t(n,r,s,i,a){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Dr:Pa,this.isPropagationStopped=Pa,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Dr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Dr)},persist:function(){},isPersistent:Dr}),t}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qo=Ae(jn),gr=G({},jn,{view:0,detail:0}),Ip=Ae(gr),Xs,Ks,En,Ns=G({},gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==En&&(En&&e.type==="mousemove"?(Xs=e.screenX-En.screenX,Ks=e.screenY-En.screenY):Ks=Xs=0,En=e),Xs)},movementY:function(e){return"movementY"in e?e.movementY:Ks}}),Ea=Ae(Ns),Dp=G({},Ns,{dataTransfer:0}),Pp=Ae(Dp),Ep=G({},gr,{relatedTarget:0}),Qs=Ae(Ep),Tp=G({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Lp=Ae(Tp),qp=G({},jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zp=Ae(qp),Up=G({},jn,{data:0}),Ta=Ae(Up),Rp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _p(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fp[e])?!!t[e]:!1}function zo(){return _p}var Op=G({},gr,{key:function(e){if(e.key){var t=Rp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zo,charCode:function(e){return e.type==="keypress"?Vr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bp=Ae(Op),Vp=G({},Ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),La=Ae(Vp),$p=G({},gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zo}),Wp=Ae($p),Gp=G({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hp=Ae(Gp),Xp=G({},Ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kp=Ae(Xp),Qp=[9,13,27,32],Uo=et&&"CompositionEvent"in window,Bn=null;et&&"documentMode"in document&&(Bn=document.documentMode);var Zp=et&&"TextEvent"in window&&!Bn,Du=et&&(!Uo||Bn&&8<Bn&&11>=Bn),qa=" ",za=!1;function Pu(e,t){switch(e){case"keyup":return Qp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yt=!1;function Yp(e,t){switch(e){case"compositionend":return Eu(t);case"keypress":return t.which!==32?null:(za=!0,qa);case"textInput":return e=t.data,e===qa&&za?null:e;default:return null}}function Jp(e,t){if(Yt)return e==="compositionend"||!Uo&&Pu(e,t)?(e=Iu(),Br=Lo=dt=null,Yt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Du&&t.locale!=="ko"?null:t.data;default:return null}}var em={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ua(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!em[e.type]:t==="textarea"}function Tu(e,t,n,r){uu(r),t=ss(t,"onChange"),0<t.length&&(n=new qo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vn=null,nr=null;function tm(e){Vu(e,0)}function As(e){var t=tn(e);if(nu(t))return e}function nm(e,t){if(e==="change")return t}var Lu=!1;if(et){var Zs;if(et){var Ys="oninput"in document;if(!Ys){var Ra=document.createElement("div");Ra.setAttribute("oninput","return;"),Ys=typeof Ra.oninput=="function"}Zs=Ys}else Zs=!1;Lu=Zs&&(!document.documentMode||9<document.documentMode)}function Ma(){Vn&&(Vn.detachEvent("onpropertychange",qu),nr=Vn=null)}function qu(e){if(e.propertyName==="value"&&As(nr)){var t=[];Tu(t,nr,e,Io(e)),mu(tm,t)}}function rm(e,t,n){e==="focusin"?(Ma(),Vn=t,nr=n,Vn.attachEvent("onpropertychange",qu)):e==="focusout"&&Ma()}function sm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return As(nr)}function im(e,t){if(e==="click")return As(t)}function om(e,t){if(e==="input"||e==="change")return As(t)}function am(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:am;function rr(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!bi.call(t,s)||!Oe(e[s],t[s]))return!1}return!0}function Fa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _a(e,t){var n=Fa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fa(n)}}function zu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uu(){for(var e=window,t=Zr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zr(e.document)}return t}function Ro(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function lm(e){var t=Uu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zu(n.ownerDocument.documentElement,n)){if(r!==null&&Ro(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!e.extend&&i>r&&(s=r,r=i,i=s),s=_a(n,i);var a=_a(n,r);s&&a&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var um=et&&"documentMode"in document&&11>=document.documentMode,Jt=null,Fi=null,$n=null,_i=!1;function Oa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_i||Jt==null||Jt!==Zr(r)||(r=Jt,"selectionStart"in r&&Ro(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$n&&rr($n,r)||($n=r,r=ss(Fi,"onSelect"),0<r.length&&(t=new qo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Jt)))}function Pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var en={animationend:Pr("Animation","AnimationEnd"),animationiteration:Pr("Animation","AnimationIteration"),animationstart:Pr("Animation","AnimationStart"),transitionend:Pr("Transition","TransitionEnd")},Js={},Ru={};et&&(Ru=document.createElement("div").style,"AnimationEvent"in window||(delete en.animationend.animation,delete en.animationiteration.animation,delete en.animationstart.animation),"TransitionEvent"in window||delete en.transitionend.transition);function Is(e){if(Js[e])return Js[e];if(!en[e])return e;var t=en[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ru)return Js[e]=t[n];return e}var Mu=Is("animationend"),Fu=Is("animationiteration"),_u=Is("animationstart"),Ou=Is("transitionend"),Bu=new Map,Ba="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jt(e,t){Bu.set(e,t),Wt(t,[e])}for(var ei=0;ei<Ba.length;ei++){var ti=Ba[ei],cm=ti.toLowerCase(),dm=ti[0].toUpperCase()+ti.slice(1);jt(cm,"on"+dm)}jt(Mu,"onAnimationEnd");jt(Fu,"onAnimationIteration");jt(_u,"onAnimationStart");jt("dblclick","onDoubleClick");jt("focusin","onFocus");jt("focusout","onBlur");jt(Ou,"onTransitionEnd");gn("onMouseEnter",["mouseout","mouseover"]);gn("onMouseLeave",["mouseout","mouseover"]);gn("onPointerEnter",["pointerout","pointerover"]);gn("onPointerLeave",["pointerout","pointerover"]);Wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));function Va(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,cp(r,t,void 0,e),e.currentTarget=null}function Vu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Va(s,l,d),i=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,d=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Va(s,l,d),i=u}}}if(Jr)throw e=zi,Jr=!1,zi=null,e}function F(e,t){var n=t[Wi];n===void 0&&(n=t[Wi]=new Set);var r=e+"__bubble";n.has(r)||($u(t,e,2,!1),n.add(r))}function ni(e,t,n){var r=0;t&&(r|=4),$u(n,e,r,t)}var Er="_reactListening"+Math.random().toString(36).slice(2);function sr(e){if(!e[Er]){e[Er]=!0,Zl.forEach(function(n){n!=="selectionchange"&&(pm.has(n)||ni(n,!1,e),ni(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Er]||(t[Er]=!0,ni("selectionchange",!1,t))}}function $u(e,t,n,r){switch(Au(t)){case 1:var s=Np;break;case 4:s=Ap;break;default:s=To}n=s.bind(null,t,n,e),s=void 0,!qi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function ri(e,t,n,r,s){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;a=a.return}for(;l!==null;){if(a=Lt(l),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}l=l.parentNode}}r=r.return}mu(function(){var d=i,f=Io(n),g=[];e:{var h=Bu.get(e);if(h!==void 0){var x=qo,v=e;switch(e){case"keypress":if(Vr(n)===0)break e;case"keydown":case"keyup":x=Bp;break;case"focusin":v="focus",x=Qs;break;case"focusout":v="blur",x=Qs;break;case"beforeblur":case"afterblur":x=Qs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ea;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Pp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Wp;break;case Mu:case Fu:case _u:x=Lp;break;case Ou:x=Hp;break;case"scroll":x=Ip;break;case"wheel":x=Kp;break;case"copy":case"cut":case"paste":x=zp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=La}var y=(t&4)!==0,k=!y&&e==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var c=d,m;c!==null;){m=c;var b=m.stateNode;if(m.tag===5&&b!==null&&(m=b,p!==null&&(b=Yn(c,p),b!=null&&y.push(ir(c,b,m)))),k)break;c=c.return}0<y.length&&(h=new x(h,v,null,n,f),g.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==Ti&&(v=n.relatedTarget||n.fromElement)&&(Lt(v)||v[tt]))break e;if((x||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=d,v=v?Lt(v):null,v!==null&&(k=Gt(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=d),x!==v)){if(y=Ea,b="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=La,b="onPointerLeave",p="onPointerEnter",c="pointer"),k=x==null?h:tn(x),m=v==null?h:tn(v),h=new y(b,c+"leave",x,n,f),h.target=k,h.relatedTarget=m,b=null,Lt(f)===d&&(y=new y(p,c+"enter",v,n,f),y.target=m,y.relatedTarget=k,b=y),k=b,x&&v)t:{for(y=x,p=v,c=0,m=y;m;m=Xt(m))c++;for(m=0,b=p;b;b=Xt(b))m++;for(;0<c-m;)y=Xt(y),c--;for(;0<m-c;)p=Xt(p),m--;for(;c--;){if(y===p||p!==null&&y===p.alternate)break t;y=Xt(y),p=Xt(p)}y=null}else y=null;x!==null&&$a(g,h,x,y,!1),v!==null&&k!==null&&$a(g,k,v,y,!0)}}e:{if(h=d?tn(d):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var j=nm;else if(Ua(h))if(Lu)j=om;else{j=sm;var D=rm}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=im);if(j&&(j=j(e,d))){Tu(g,j,n,f);break e}D&&D(e,h,d),e==="focusout"&&(D=h._wrapperState)&&D.controlled&&h.type==="number"&&Ai(h,"number",h.value)}switch(D=d?tn(d):window,e){case"focusin":(Ua(D)||D.contentEditable==="true")&&(Jt=D,Fi=d,$n=null);break;case"focusout":$n=Fi=Jt=null;break;case"mousedown":_i=!0;break;case"contextmenu":case"mouseup":case"dragend":_i=!1,Oa(g,n,f);break;case"selectionchange":if(um)break;case"keydown":case"keyup":Oa(g,n,f)}var S;if(Uo)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Yt?Pu(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Du&&n.locale!=="ko"&&(Yt||I!=="onCompositionStart"?I==="onCompositionEnd"&&Yt&&(S=Iu()):(dt=f,Lo="value"in dt?dt.value:dt.textContent,Yt=!0)),D=ss(d,I),0<D.length&&(I=new Ta(I,e,null,n,f),g.push({event:I,listeners:D}),S?I.data=S:(S=Eu(n),S!==null&&(I.data=S)))),(S=Zp?Yp(e,n):Jp(e,n))&&(d=ss(d,"onBeforeInput"),0<d.length&&(f=new Ta("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:d}),f.data=S))}Vu(g,t)})}function ir(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ss(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Yn(e,n),i!=null&&r.unshift(ir(e,i,s)),i=Yn(e,t),i!=null&&r.push(ir(e,i,s))),e=e.return}return r}function Xt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $a(e,t,n,r,s){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,s?(u=Yn(n,i),u!=null&&a.unshift(ir(n,u,l))):s||(u=Yn(n,i),u!=null&&a.push(ir(n,u,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var mm=/\r\n?/g,fm=/\u0000|\uFFFD/g;function Wa(e){return(typeof e=="string"?e:""+e).replace(mm,`
`).replace(fm,"")}function Tr(e,t,n){if(t=Wa(t),Wa(e)!==t&&n)throw Error(w(425))}function is(){}var Oi=null,Bi=null;function Vi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $i=typeof setTimeout=="function"?setTimeout:void 0,hm=typeof clearTimeout=="function"?clearTimeout:void 0,Ga=typeof Promise=="function"?Promise:void 0,gm=typeof queueMicrotask=="function"?queueMicrotask:typeof Ga<"u"?function(e){return Ga.resolve(null).then(e).catch(xm)}:$i;function xm(e){setTimeout(function(){throw e})}function si(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),tr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);tr(t)}function gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ha(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cn=Math.random().toString(36).slice(2),We="__reactFiber$"+Cn,or="__reactProps$"+Cn,tt="__reactContainer$"+Cn,Wi="__reactEvents$"+Cn,vm="__reactListeners$"+Cn,ym="__reactHandles$"+Cn;function Lt(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tt]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ha(e);e!==null;){if(n=e[We])return n;e=Ha(e)}return t}e=n,n=e.parentNode}return null}function xr(e){return e=e[We]||e[tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Ds(e){return e[or]||null}var Gi=[],nn=-1;function Ct(e){return{current:e}}function _(e){0>nn||(e.current=Gi[nn],Gi[nn]=null,nn--)}function M(e,t){nn++,Gi[nn]=e.current,e.current=t}var St={},le=Ct(St),xe=Ct(!1),Ft=St;function xn(e,t){var n=e.type.contextTypes;if(!n)return St;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ve(e){return e=e.childContextTypes,e!=null}function os(){_(xe),_(le)}function Xa(e,t,n){if(le.current!==St)throw Error(w(168));M(le,t),M(xe,n)}function Wu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(w(108,rp(e)||"Unknown",s));return G({},n,r)}function as(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||St,Ft=le.current,M(le,e),M(xe,xe.current),!0}function Ka(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=Wu(e,t,Ft),r.__reactInternalMemoizedMergedChildContext=e,_(xe),_(le),M(le,e)):_(xe),M(xe,n)}var Ke=null,Ps=!1,ii=!1;function Gu(e){Ke===null?Ke=[e]:Ke.push(e)}function bm(e){Ps=!0,Gu(e)}function Nt(){if(!ii&&Ke!==null){ii=!0;var e=0,t=R;try{var n=Ke;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ke=null,Ps=!1}catch(s){throw Ke!==null&&(Ke=Ke.slice(e+1)),xu(Do,Nt),s}finally{R=t,ii=!1}}return null}var rn=[],sn=0,ls=null,us=0,De=[],Pe=0,_t=null,Qe=1,Ze="";function Dt(e,t){rn[sn++]=us,rn[sn++]=ls,ls=e,us=t}function Hu(e,t,n){De[Pe++]=Qe,De[Pe++]=Ze,De[Pe++]=_t,_t=e;var r=Qe;e=Ze;var s=32-Fe(r)-1;r&=~(1<<s),n+=1;var i=32-Fe(t)+s;if(30<i){var a=s-s%5;i=(r&(1<<a)-1).toString(32),r>>=a,s-=a,Qe=1<<32-Fe(t)+s|n<<s|r,Ze=i+e}else Qe=1<<i|n<<s|r,Ze=e}function Mo(e){e.return!==null&&(Dt(e,1),Hu(e,1,0))}function Fo(e){for(;e===ls;)ls=rn[--sn],rn[sn]=null,us=rn[--sn],rn[sn]=null;for(;e===_t;)_t=De[--Pe],De[Pe]=null,Ze=De[--Pe],De[Pe]=null,Qe=De[--Pe],De[Pe]=null}var je=null,Se=null,V=!1,Me=null;function Xu(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Qa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,Se=gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_t!==null?{id:Qe,overflow:Ze}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,Se=null,!0):!1;default:return!1}}function Hi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xi(e){if(V){var t=Se;if(t){var n=t;if(!Qa(e,t)){if(Hi(e))throw Error(w(418));t=gt(n.nextSibling);var r=je;t&&Qa(e,t)?Xu(r,n):(e.flags=e.flags&-4097|2,V=!1,je=e)}}else{if(Hi(e))throw Error(w(418));e.flags=e.flags&-4097|2,V=!1,je=e}}}function Za(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function Lr(e){if(e!==je)return!1;if(!V)return Za(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Vi(e.type,e.memoizedProps)),t&&(t=Se)){if(Hi(e))throw Ku(),Error(w(418));for(;t;)Xu(e,t),t=gt(t.nextSibling)}if(Za(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=gt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=je?gt(e.stateNode.nextSibling):null;return!0}function Ku(){for(var e=Se;e;)e=gt(e.nextSibling)}function vn(){Se=je=null,V=!1}function _o(e){Me===null?Me=[e]:Me.push(e)}var wm=st.ReactCurrentBatchConfig;function Tn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var s=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=s.refs;a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function qr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ya(e){var t=e._init;return t(e._payload)}function Qu(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function s(p,c){return p=bt(p,c),p.index=0,p.sibling=null,p}function i(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,c,m,b){return c===null||c.tag!==6?(c=pi(m,p.mode,b),c.return=p,c):(c=s(c,m),c.return=p,c)}function u(p,c,m,b){var j=m.type;return j===Zt?f(p,c,m.props.children,b,m.key):c!==null&&(c.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===at&&Ya(j)===c.type)?(b=s(c,m.props),b.ref=Tn(p,c,m),b.return=p,b):(b=Qr(m.type,m.key,m.props,null,p.mode,b),b.ref=Tn(p,c,m),b.return=p,b)}function d(p,c,m,b){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=mi(m,p.mode,b),c.return=p,c):(c=s(c,m.children||[]),c.return=p,c)}function f(p,c,m,b,j){return c===null||c.tag!==7?(c=Rt(m,p.mode,b,j),c.return=p,c):(c=s(c,m),c.return=p,c)}function g(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=pi(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Sr:return m=Qr(c.type,c.key,c.props,null,p.mode,m),m.ref=Tn(p,null,c),m.return=p,m;case Qt:return c=mi(c,p.mode,m),c.return=p,c;case at:var b=c._init;return g(p,b(c._payload),m)}if(Rn(c)||An(c))return c=Rt(c,p.mode,m,null),c.return=p,c;qr(p,c)}return null}function h(p,c,m,b){var j=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return j!==null?null:l(p,c,""+m,b);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Sr:return m.key===j?u(p,c,m,b):null;case Qt:return m.key===j?d(p,c,m,b):null;case at:return j=m._init,h(p,c,j(m._payload),b)}if(Rn(m)||An(m))return j!==null?null:f(p,c,m,b,null);qr(p,m)}return null}function x(p,c,m,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return p=p.get(m)||null,l(c,p,""+b,j);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Sr:return p=p.get(b.key===null?m:b.key)||null,u(c,p,b,j);case Qt:return p=p.get(b.key===null?m:b.key)||null,d(c,p,b,j);case at:var D=b._init;return x(p,c,m,D(b._payload),j)}if(Rn(b)||An(b))return p=p.get(m)||null,f(c,p,b,j,null);qr(c,b)}return null}function v(p,c,m,b){for(var j=null,D=null,S=c,I=c=0,O=null;S!==null&&I<m.length;I++){S.index>I?(O=S,S=null):O=S.sibling;var q=h(p,S,m[I],b);if(q===null){S===null&&(S=O);break}e&&S&&q.alternate===null&&t(p,S),c=i(q,c,I),D===null?j=q:D.sibling=q,D=q,S=O}if(I===m.length)return n(p,S),V&&Dt(p,I),j;if(S===null){for(;I<m.length;I++)S=g(p,m[I],b),S!==null&&(c=i(S,c,I),D===null?j=S:D.sibling=S,D=S);return V&&Dt(p,I),j}for(S=r(p,S);I<m.length;I++)O=x(S,p,I,m[I],b),O!==null&&(e&&O.alternate!==null&&S.delete(O.key===null?I:O.key),c=i(O,c,I),D===null?j=O:D.sibling=O,D=O);return e&&S.forEach(function(be){return t(p,be)}),V&&Dt(p,I),j}function y(p,c,m,b){var j=An(m);if(typeof j!="function")throw Error(w(150));if(m=j.call(m),m==null)throw Error(w(151));for(var D=j=null,S=c,I=c=0,O=null,q=m.next();S!==null&&!q.done;I++,q=m.next()){S.index>I?(O=S,S=null):O=S.sibling;var be=h(p,S,q.value,b);if(be===null){S===null&&(S=O);break}e&&S&&be.alternate===null&&t(p,S),c=i(be,c,I),D===null?j=be:D.sibling=be,D=be,S=O}if(q.done)return n(p,S),V&&Dt(p,I),j;if(S===null){for(;!q.done;I++,q=m.next())q=g(p,q.value,b),q!==null&&(c=i(q,c,I),D===null?j=q:D.sibling=q,D=q);return V&&Dt(p,I),j}for(S=r(p,S);!q.done;I++,q=m.next())q=x(S,p,I,q.value,b),q!==null&&(e&&q.alternate!==null&&S.delete(q.key===null?I:q.key),c=i(q,c,I),D===null?j=q:D.sibling=q,D=q);return e&&S.forEach(function(At){return t(p,At)}),V&&Dt(p,I),j}function k(p,c,m,b){if(typeof m=="object"&&m!==null&&m.type===Zt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Sr:e:{for(var j=m.key,D=c;D!==null;){if(D.key===j){if(j=m.type,j===Zt){if(D.tag===7){n(p,D.sibling),c=s(D,m.props.children),c.return=p,p=c;break e}}else if(D.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===at&&Ya(j)===D.type){n(p,D.sibling),c=s(D,m.props),c.ref=Tn(p,D,m),c.return=p,p=c;break e}n(p,D);break}else t(p,D);D=D.sibling}m.type===Zt?(c=Rt(m.props.children,p.mode,b,m.key),c.return=p,p=c):(b=Qr(m.type,m.key,m.props,null,p.mode,b),b.ref=Tn(p,c,m),b.return=p,p=b)}return a(p);case Qt:e:{for(D=m.key;c!==null;){if(c.key===D)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=s(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=mi(m,p.mode,b),c.return=p,p=c}return a(p);case at:return D=m._init,k(p,c,D(m._payload),b)}if(Rn(m))return v(p,c,m,b);if(An(m))return y(p,c,m,b);qr(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=s(c,m),c.return=p,p=c):(n(p,c),c=pi(m,p.mode,b),c.return=p,p=c),a(p)):n(p,c)}return k}var yn=Qu(!0),Zu=Qu(!1),cs=Ct(null),ds=null,on=null,Oo=null;function Bo(){Oo=on=ds=null}function Vo(e){var t=cs.current;_(cs),e._currentValue=t}function Ki(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function mn(e,t){ds=e,Oo=on=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(Oo!==e)if(e={context:e,memoizedValue:t,next:null},on===null){if(ds===null)throw Error(w(308));on=e,ds.dependencies={lanes:0,firstContext:e}}else on=on.next=e;return t}var qt=null;function $o(e){qt===null?qt=[e]:qt.push(e)}function Yu(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,$o(t)):(n.next=s.next,s.next=n),t.interleaved=n,nt(e,r)}function nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var lt=!1;function Wo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ju(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Je(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,nt(e,n)}return s=r.interleaved,s===null?(t.next=t,$o(r)):(t.next=s.next,s.next=t),r.interleaved=t,nt(e,n)}function $r(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Po(e,n)}}function Ja(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?s=i=t:i=i.next=t}else s=i=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ps(e,t,n,r){var s=e.updateQueue;lt=!1;var i=s.firstBaseUpdate,a=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,d=u.next;u.next=null,a===null?i=d:a.next=d,a=u;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=u))}if(i!==null){var g=s.baseState;a=0,f=d=u=null,l=i;do{var h=l.lane,x=l.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,y=l;switch(h=t,x=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){g=v.call(x,g,h);break e}g=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(x,g,h):v,h==null)break e;g=G({},g,h);break e;case 2:lt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=s.effects,h===null?s.effects=[l]:h.push(l))}else x={eventTime:x,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=x,u=g):f=f.next=x,a|=h;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;h=l,l=h.next,h.next=null,s.lastBaseUpdate=h,s.shared.pending=null}}while(!0);if(f===null&&(u=g),s.baseState=u,s.firstBaseUpdate=d,s.lastBaseUpdate=f,t=s.shared.interleaved,t!==null){s=t;do a|=s.lane,s=s.next;while(s!==t)}else i===null&&(s.shared.lanes=0);Bt|=a,e.lanes=a,e.memoizedState=g}}function el(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(w(191,s));s.call(r)}}}var vr={},He=Ct(vr),ar=Ct(vr),lr=Ct(vr);function zt(e){if(e===vr)throw Error(w(174));return e}function Go(e,t){switch(M(lr,t),M(ar,e),M(He,vr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Di(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Di(t,e)}_(He),M(He,t)}function bn(){_(He),_(ar),_(lr)}function ec(e){zt(lr.current);var t=zt(He.current),n=Di(t,e.type);t!==n&&(M(ar,e),M(He,n))}function Ho(e){ar.current===e&&(_(He),_(ar))}var $=Ct(0);function ms(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var oi=[];function Xo(){for(var e=0;e<oi.length;e++)oi[e]._workInProgressVersionPrimary=null;oi.length=0}var Wr=st.ReactCurrentDispatcher,ai=st.ReactCurrentBatchConfig,Ot=0,W=null,Z=null,J=null,fs=!1,Wn=!1,ur=0,km=0;function ie(){throw Error(w(321))}function Ko(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Oe(e[n],t[n]))return!1;return!0}function Qo(e,t,n,r,s,i){if(Ot=i,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Wr.current=e===null||e.memoizedState===null?Nm:Am,e=n(r,s),Wn){i=0;do{if(Wn=!1,ur=0,25<=i)throw Error(w(301));i+=1,J=Z=null,t.updateQueue=null,Wr.current=Im,e=n(r,s)}while(Wn)}if(Wr.current=hs,t=Z!==null&&Z.next!==null,Ot=0,J=Z=W=null,fs=!1,t)throw Error(w(300));return e}function Zo(){var e=ur!==0;return ur=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?W.memoizedState=J=e:J=J.next=e,J}function qe(){if(Z===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=J===null?W.memoizedState:J.next;if(t!==null)J=t,Z=e;else{if(e===null)throw Error(w(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},J===null?W.memoizedState=J=e:J=J.next=e}return J}function cr(e,t){return typeof t=="function"?t(e):t}function li(e){var t=qe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=Z,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var a=s.next;s.next=i.next,i.next=a}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=a=null,u=null,d=i;do{var f=d.lane;if((Ot&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=g,a=r):u=u.next=g,W.lanes|=f,Bt|=f}d=d.next}while(d!==null&&d!==i);u===null?a=r:u.next=l,Oe(r,t.memoizedState)||(ge=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do i=s.lane,W.lanes|=i,Bt|=i,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ui(e){var t=qe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,i=t.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do i=e(i,a.action),a=a.next;while(a!==s);Oe(i,t.memoizedState)||(ge=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function tc(){}function nc(e,t){var n=W,r=qe(),s=t(),i=!Oe(r.memoizedState,s);if(i&&(r.memoizedState=s,ge=!0),r=r.queue,Yo(ic.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,dr(9,sc.bind(null,n,r,s,t),void 0,null),ee===null)throw Error(w(349));Ot&30||rc(n,t,s)}return s}function rc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sc(e,t,n,r){t.value=n,t.getSnapshot=r,oc(t)&&ac(e)}function ic(e,t,n){return n(function(){oc(t)&&ac(e)})}function oc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function ac(e){var t=nt(e,1);t!==null&&_e(t,e,1,-1)}function tl(e){var t=Ve();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:e},t.queue=e,e=e.dispatch=Cm.bind(null,W,e),[t.memoizedState,e]}function dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function lc(){return qe().memoizedState}function Gr(e,t,n,r){var s=Ve();W.flags|=e,s.memoizedState=dr(1|t,n,void 0,r===void 0?null:r)}function Es(e,t,n,r){var s=qe();r=r===void 0?null:r;var i=void 0;if(Z!==null){var a=Z.memoizedState;if(i=a.destroy,r!==null&&Ko(r,a.deps)){s.memoizedState=dr(t,n,i,r);return}}W.flags|=e,s.memoizedState=dr(1|t,n,i,r)}function nl(e,t){return Gr(8390656,8,e,t)}function Yo(e,t){return Es(2048,8,e,t)}function uc(e,t){return Es(4,2,e,t)}function cc(e,t){return Es(4,4,e,t)}function dc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pc(e,t,n){return n=n!=null?n.concat([e]):null,Es(4,4,dc.bind(null,t,e),n)}function Jo(){}function mc(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ko(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fc(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ko(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function hc(e,t,n){return Ot&21?(Oe(n,t)||(n=bu(),W.lanes|=n,Bt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n)}function Sm(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=ai.transition;ai.transition={};try{e(!1),t()}finally{R=n,ai.transition=r}}function gc(){return qe().memoizedState}function jm(e,t,n){var r=yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xc(e))vc(t,n);else if(n=Yu(e,t,n,r),n!==null){var s=ce();_e(n,e,r,s),yc(n,t,r)}}function Cm(e,t,n){var r=yt(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xc(e))vc(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(s.hasEagerState=!0,s.eagerState=l,Oe(l,a)){var u=t.interleaved;u===null?(s.next=s,$o(t)):(s.next=u.next,u.next=s),t.interleaved=s;return}}catch{}finally{}n=Yu(e,t,s,r),n!==null&&(s=ce(),_e(n,e,r,s),yc(n,t,r))}}function xc(e){var t=e.alternate;return e===W||t!==null&&t===W}function vc(e,t){Wn=fs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function yc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Po(e,n)}}var hs={readContext:Le,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Nm={readContext:Le,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:nl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Gr(4194308,4,dc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Gr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Gr(4,2,e,t)},useMemo:function(e,t){var n=Ve();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ve();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=jm.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:tl,useDebugValue:Jo,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=tl(!1),t=e[0];return e=Sm.bind(null,e[1]),Ve().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,s=Ve();if(V){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),ee===null)throw Error(w(349));Ot&30||rc(r,t,n)}s.memoizedState=n;var i={value:n,getSnapshot:t};return s.queue=i,nl(ic.bind(null,r,i,e),[e]),r.flags|=2048,dr(9,sc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ve(),t=ee.identifierPrefix;if(V){var n=Ze,r=Qe;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=km++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Am={readContext:Le,useCallback:mc,useContext:Le,useEffect:Yo,useImperativeHandle:pc,useInsertionEffect:uc,useLayoutEffect:cc,useMemo:fc,useReducer:li,useRef:lc,useState:function(){return li(cr)},useDebugValue:Jo,useDeferredValue:function(e){var t=qe();return hc(t,Z.memoizedState,e)},useTransition:function(){var e=li(cr)[0],t=qe().memoizedState;return[e,t]},useMutableSource:tc,useSyncExternalStore:nc,useId:gc,unstable_isNewReconciler:!1},Im={readContext:Le,useCallback:mc,useContext:Le,useEffect:Yo,useImperativeHandle:pc,useInsertionEffect:uc,useLayoutEffect:cc,useMemo:fc,useReducer:ui,useRef:lc,useState:function(){return ui(cr)},useDebugValue:Jo,useDeferredValue:function(e){var t=qe();return Z===null?t.memoizedState=e:hc(t,Z.memoizedState,e)},useTransition:function(){var e=ui(cr)[0],t=qe().memoizedState;return[e,t]},useMutableSource:tc,useSyncExternalStore:nc,useId:gc,unstable_isNewReconciler:!1};function Ue(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Qi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ts={isMounted:function(e){return(e=e._reactInternals)?Gt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),s=yt(e),i=Je(r,s);i.payload=t,n!=null&&(i.callback=n),t=xt(e,i,s),t!==null&&(_e(t,e,s,r),$r(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),s=yt(e),i=Je(r,s);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=xt(e,i,s),t!==null&&(_e(t,e,s,r),$r(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=yt(e),s=Je(n,r);s.tag=2,t!=null&&(s.callback=t),t=xt(e,s,r),t!==null&&(_e(t,e,r,n),$r(t,e,r))}};function rl(e,t,n,r,s,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!rr(n,r)||!rr(s,i):!0}function bc(e,t,n){var r=!1,s=St,i=t.contextType;return typeof i=="object"&&i!==null?i=Le(i):(s=ve(t)?Ft:le.current,r=t.contextTypes,i=(r=r!=null)?xn(e,s):St),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ts,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),t}function sl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ts.enqueueReplaceState(t,t.state,null)}function Zi(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Wo(e);var i=t.contextType;typeof i=="object"&&i!==null?s.context=Le(i):(i=ve(t)?Ft:le.current,s.context=xn(e,i)),s.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Qi(e,t,i,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Ts.enqueueReplaceState(s,s.state,null),ps(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function wn(e,t){try{var n="",r=t;do n+=np(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:s,digest:null}}function ci(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Yi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Dm=typeof WeakMap=="function"?WeakMap:Map;function wc(e,t,n){n=Je(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){xs||(xs=!0,lo=r),Yi(e,t)},n}function kc(e,t,n){n=Je(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){Yi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Yi(e,t),typeof r!="function"&&(vt===null?vt=new Set([this]):vt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function il(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Dm;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=Vm.bind(null,e,t,n),t.then(e,e))}function ol(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function al(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Je(-1,1),t.tag=2,xt(n,t,1))),n.lanes|=1),e)}var Pm=st.ReactCurrentOwner,ge=!1;function ue(e,t,n,r){t.child=e===null?Zu(t,null,n,r):yn(t,e.child,n,r)}function ll(e,t,n,r,s){n=n.render;var i=t.ref;return mn(t,s),r=Qo(e,t,n,r,i,s),n=Zo(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,rt(e,t,s)):(V&&n&&Mo(t),t.flags|=1,ue(e,t,r,s),t.child)}function ul(e,t,n,r,s){if(e===null){var i=n.type;return typeof i=="function"&&!aa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Sc(e,t,i,r,s)):(e=Qr(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&s)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:rr,n(a,r)&&e.ref===t.ref)return rt(e,t,s)}return t.flags|=1,e=bt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Sc(e,t,n,r,s){if(e!==null){var i=e.memoizedProps;if(rr(i,r)&&e.ref===t.ref)if(ge=!1,t.pendingProps=r=i,(e.lanes&s)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,rt(e,t,s)}return Ji(e,t,n,r,s)}function jc(e,t,n){var r=t.pendingProps,s=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(ln,ke),ke|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,M(ln,ke),ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,M(ln,ke),ke|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,M(ln,ke),ke|=r;return ue(e,t,s,n),t.child}function Cc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ji(e,t,n,r,s){var i=ve(n)?Ft:le.current;return i=xn(t,i),mn(t,s),n=Qo(e,t,n,r,i,s),r=Zo(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,rt(e,t,s)):(V&&r&&Mo(t),t.flags|=1,ue(e,t,n,s),t.child)}function cl(e,t,n,r,s){if(ve(n)){var i=!0;as(t)}else i=!1;if(mn(t,s),t.stateNode===null)Hr(e,t),bc(t,n,r),Zi(t,n,r,s),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Le(d):(d=ve(n)?Ft:le.current,d=xn(t,d));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==d)&&sl(t,a,r,d),lt=!1;var h=t.memoizedState;a.state=h,ps(t,r,a,s),u=t.memoizedState,l!==r||h!==u||xe.current||lt?(typeof f=="function"&&(Qi(t,n,f,r),u=t.memoizedState),(l=lt||rl(t,n,l,r,h,u,d))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ju(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Ue(t.type,l),a.props=d,g=t.pendingProps,h=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Le(u):(u=ve(n)?Ft:le.current,u=xn(t,u));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==g||h!==u)&&sl(t,a,r,u),lt=!1,h=t.memoizedState,a.state=h,ps(t,r,a,s);var v=t.memoizedState;l!==g||h!==v||xe.current||lt?(typeof x=="function"&&(Qi(t,n,x,r),v=t.memoizedState),(d=lt||rl(t,n,d,r,h,v,u)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return eo(e,t,n,r,i,s)}function eo(e,t,n,r,s,i){Cc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return s&&Ka(t,n,!1),rt(e,t,i);r=t.stateNode,Pm.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=yn(t,e.child,null,i),t.child=yn(t,null,l,i)):ue(e,t,l,i),t.memoizedState=r.state,s&&Ka(t,n,!0),t.child}function Nc(e){var t=e.stateNode;t.pendingContext?Xa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xa(e,t.context,!1),Go(e,t.containerInfo)}function dl(e,t,n,r,s){return vn(),_o(s),t.flags|=256,ue(e,t,n,r),t.child}var to={dehydrated:null,treeContext:null,retryLane:0};function no(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ac(e,t,n){var r=t.pendingProps,s=$.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),M($,s&1),e===null)return Xi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=zs(a,r,0,null),e=Rt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=no(n),t.memoizedState=to,e):ea(t,a));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return Em(e,t,a,r,l,s,n);if(i){i=r.fallback,a=t.mode,s=e.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=bt(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=bt(l,i):(i=Rt(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?no(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=to,r}return i=e.child,e=i.sibling,r=bt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ea(e,t){return t=zs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zr(e,t,n,r){return r!==null&&_o(r),yn(t,e.child,null,n),e=ea(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Em(e,t,n,r,s,i,a){if(n)return t.flags&256?(t.flags&=-257,r=ci(Error(w(422))),zr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,s=t.mode,r=zs({mode:"visible",children:r.children},s,0,null),i=Rt(i,s,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&yn(t,e.child,null,a),t.child.memoizedState=no(a),t.memoizedState=to,i);if(!(t.mode&1))return zr(e,t,a,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(w(419)),r=ci(i,r,void 0),zr(e,t,a,r)}if(l=(a&e.childLanes)!==0,ge||l){if(r=ee,r!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|a)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,nt(e,s),_e(r,e,s,-1))}return oa(),r=ci(Error(w(421))),zr(e,t,a,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=$m.bind(null,e),s._reactRetry=t,null):(e=i.treeContext,Se=gt(s.nextSibling),je=t,V=!0,Me=null,e!==null&&(De[Pe++]=Qe,De[Pe++]=Ze,De[Pe++]=_t,Qe=e.id,Ze=e.overflow,_t=t),t=ea(t,r.children),t.flags|=4096,t)}function pl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ki(e.return,t,n)}function di(e,t,n,r,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Ic(e,t,n){var r=t.pendingProps,s=r.revealOrder,i=r.tail;if(ue(e,t,r.children,n),r=$.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pl(e,n,t);else if(e.tag===19)pl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M($,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&ms(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),di(t,!1,s,n,i);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ms(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}di(t,!0,n,null,i);break;case"together":di(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Tm(e,t,n){switch(t.tag){case 3:Nc(t),vn();break;case 5:ec(t);break;case 1:ve(t.type)&&as(t);break;case 4:Go(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;M(cs,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(M($,$.current&1),t.flags|=128,null):n&t.child.childLanes?Ac(e,t,n):(M($,$.current&1),e=rt(e,t,n),e!==null?e.sibling:null);M($,$.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ic(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),M($,$.current),r)break;return null;case 22:case 23:return t.lanes=0,jc(e,t,n)}return rt(e,t,n)}var Dc,ro,Pc,Ec;Dc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ro=function(){};Pc=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,zt(He.current);var i=null;switch(n){case"input":s=Ci(e,s),r=Ci(e,r),i=[];break;case"select":s=G({},s,{value:void 0}),r=G({},r,{value:void 0}),i=[];break;case"textarea":s=Ii(e,s),r=Ii(e,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=is)}Pi(n,r);var a;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Qn.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(l=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Qn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&F("scroll",e),i||l===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Ec=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ln(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lm(e,t,n){var r=t.pendingProps;switch(Fo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ve(t.type)&&os(),oe(t),null;case 3:return r=t.stateNode,bn(),_(xe),_(le),Xo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Lr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(po(Me),Me=null))),ro(e,t),oe(t),null;case 5:Ho(t);var s=zt(lr.current);if(n=t.type,e!==null&&t.stateNode!=null)Pc(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return oe(t),null}if(e=zt(He.current),Lr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[We]=t,r[or]=i,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(s=0;s<Fn.length;s++)F(Fn[s],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":wa(r,i),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},F("invalid",r);break;case"textarea":Sa(r,i),F("invalid",r)}Pi(n,i),s=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Tr(r.textContent,l,e),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Tr(r.textContent,l,e),s=["children",""+l]):Qn.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&F("scroll",r)}switch(n){case"input":jr(r),ka(r,i,!0);break;case"textarea":jr(r),ja(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=is)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=iu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[We]=t,e[or]=r,Dc(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ei(n,r),n){case"dialog":F("cancel",e),F("close",e),s=r;break;case"iframe":case"object":case"embed":F("load",e),s=r;break;case"video":case"audio":for(s=0;s<Fn.length;s++)F(Fn[s],e);s=r;break;case"source":F("error",e),s=r;break;case"img":case"image":case"link":F("error",e),F("load",e),s=r;break;case"details":F("toggle",e),s=r;break;case"input":wa(e,r),s=Ci(e,r),F("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=G({},r,{value:void 0}),F("invalid",e);break;case"textarea":Sa(e,r),s=Ii(e,r),F("invalid",e);break;default:s=r}Pi(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?lu(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ou(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Zn(e,u):typeof u=="number"&&Zn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Qn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&F("scroll",e):u!=null&&jo(e,i,u,a))}switch(n){case"input":jr(e),ka(e,r,!1);break;case"textarea":jr(e),ja(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?un(e,!!r.multiple,i,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=is)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Ec(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=zt(lr.current),zt(He.current),Lr(t)){if(r=t.stateNode,n=t.memoizedProps,r[We]=t,(i=r.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:Tr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Tr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[We]=t,t.stateNode=r}return oe(t),null;case 13:if(_($),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Se!==null&&t.mode&1&&!(t.flags&128))Ku(),vn(),t.flags|=98560,i=!1;else if(i=Lr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(w(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(w(317));i[We]=t}else vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),i=!1}else Me!==null&&(po(Me),Me=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$.current&1?Y===0&&(Y=3):oa())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return bn(),ro(e,t),e===null&&sr(t.stateNode.containerInfo),oe(t),null;case 10:return Vo(t.type._context),oe(t),null;case 17:return ve(t.type)&&os(),oe(t),null;case 19:if(_($),i=t.memoizedState,i===null)return oe(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Ln(i,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ms(e),a!==null){for(t.flags|=128,Ln(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return M($,$.current&1|2),t.child}e=e.sibling}i.tail!==null&&X()>kn&&(t.flags|=128,r=!0,Ln(i,!1),t.lanes=4194304)}else{if(!r)if(e=ms(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ln(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!V)return oe(t),null}else 2*X()-i.renderingStartTime>kn&&n!==1073741824&&(t.flags|=128,r=!0,Ln(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=X(),t.sibling=null,n=$.current,M($,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return ia(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ke&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function qm(e,t){switch(Fo(t),t.tag){case 1:return ve(t.type)&&os(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bn(),_(xe),_(le),Xo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ho(t),null;case 13:if(_($),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _($),null;case 4:return bn(),null;case 10:return Vo(t.type._context),null;case 22:case 23:return ia(),null;case 24:return null;default:return null}}var Ur=!1,ae=!1,zm=typeof WeakSet=="function"?WeakSet:Set,A=null;function an(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function so(e,t,n){try{n()}catch(r){H(e,t,r)}}var ml=!1;function Um(e,t){if(Oi=ns,e=Uu(),Ro(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,d=0,f=0,g=e,h=null;t:for(;;){for(var x;g!==n||s!==0&&g.nodeType!==3||(l=a+s),g!==i||r!==0&&g.nodeType!==3||(u=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(x=g.firstChild)!==null;)h=g,g=x;for(;;){if(g===e)break t;if(h===n&&++d===s&&(l=a),h===i&&++f===r&&(u=a),(x=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=x}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bi={focusedElem:e,selectionRange:n},ns=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,k=v.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ue(t.type,y),k);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(b){H(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return v=ml,ml=!1,v}function Gn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&so(t,n,i)}s=s.next}while(s!==r)}}function Ls(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function io(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Tc(e){var t=e.alternate;t!==null&&(e.alternate=null,Tc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[We],delete t[or],delete t[Wi],delete t[vm],delete t[ym])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Lc(e){return e.tag===5||e.tag===3||e.tag===4}function fl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=is));else if(r!==4&&(e=e.child,e!==null))for(oo(e,t,n),e=e.sibling;e!==null;)oo(e,t,n),e=e.sibling}function ao(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ao(e,t,n),e=e.sibling;e!==null;)ao(e,t,n),e=e.sibling}var te=null,Re=!1;function ot(e,t,n){for(n=n.child;n!==null;)qc(e,t,n),n=n.sibling}function qc(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(Cs,n)}catch{}switch(n.tag){case 5:ae||an(n,t);case 6:var r=te,s=Re;te=null,ot(e,t,n),te=r,Re=s,te!==null&&(Re?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Re?(e=te,n=n.stateNode,e.nodeType===8?si(e.parentNode,n):e.nodeType===1&&si(e,n),tr(e)):si(te,n.stateNode));break;case 4:r=te,s=Re,te=n.stateNode.containerInfo,Re=!0,ot(e,t,n),te=r,Re=s;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&so(n,t,a),s=s.next}while(s!==r)}ot(e,t,n);break;case 1:if(!ae&&(an(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){H(n,t,l)}ot(e,t,n);break;case 21:ot(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,ot(e,t,n),ae=r):ot(e,t,n);break;default:ot(e,t,n)}}function hl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zm),t.forEach(function(r){var s=Wm.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:te=l.stateNode,Re=!1;break e;case 3:te=l.stateNode.containerInfo,Re=!0;break e;case 4:te=l.stateNode.containerInfo,Re=!0;break e}l=l.return}if(te===null)throw Error(w(160));qc(i,a,s),te=null,Re=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(d){H(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zc(t,e),t=t.sibling}function zc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),Be(e),r&4){try{Gn(3,e,e.return),Ls(3,e)}catch(y){H(e,e.return,y)}try{Gn(5,e,e.return)}catch(y){H(e,e.return,y)}}break;case 1:ze(t,e),Be(e),r&512&&n!==null&&an(n,n.return);break;case 5:if(ze(t,e),Be(e),r&512&&n!==null&&an(n,n.return),e.flags&32){var s=e.stateNode;try{Zn(s,"")}catch(y){H(e,e.return,y)}}if(r&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&ru(s,i),Ei(l,a);var d=Ei(l,i);for(a=0;a<u.length;a+=2){var f=u[a],g=u[a+1];f==="style"?lu(s,g):f==="dangerouslySetInnerHTML"?ou(s,g):f==="children"?Zn(s,g):jo(s,f,g,d)}switch(l){case"input":Ni(s,i);break;case"textarea":su(s,i);break;case"select":var h=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?un(s,!!i.multiple,x,!1):h!==!!i.multiple&&(i.defaultValue!=null?un(s,!!i.multiple,i.defaultValue,!0):un(s,!!i.multiple,i.multiple?[]:"",!1))}s[or]=i}catch(y){H(e,e.return,y)}}break;case 6:if(ze(t,e),Be(e),r&4){if(e.stateNode===null)throw Error(w(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(y){H(e,e.return,y)}}break;case 3:if(ze(t,e),Be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{tr(t.containerInfo)}catch(y){H(e,e.return,y)}break;case 4:ze(t,e),Be(e);break;case 13:ze(t,e),Be(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(ra=X())),r&4&&hl(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(d=ae)||f,ze(t,e),ae=d):ze(t,e),Be(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!f&&e.mode&1)for(A=e,f=e.child;f!==null;){for(g=A=f;A!==null;){switch(h=A,x=h.child,h.tag){case 0:case 11:case 14:case 15:Gn(4,h,h.return);break;case 1:an(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){H(r,n,y)}}break;case 5:an(h,h.return);break;case 22:if(h.memoizedState!==null){xl(g);continue}}x!==null?(x.return=h,A=x):xl(g)}f=f.sibling}e:for(f=null,g=e;;){if(g.tag===5){if(f===null){f=g;try{s=g.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=au("display",a))}catch(y){H(e,e.return,y)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(y){H(e,e.return,y)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:ze(t,e),Be(e),r&4&&hl(e);break;case 21:break;default:ze(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Lc(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Zn(s,""),r.flags&=-33);var i=fl(e);ao(e,i,s);break;case 3:case 4:var a=r.stateNode.containerInfo,l=fl(e);oo(e,l,a);break;default:throw Error(w(161))}}catch(u){H(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rm(e,t,n){A=e,Uc(e)}function Uc(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var s=A,i=s.child;if(s.tag===22&&r){var a=s.memoizedState!==null||Ur;if(!a){var l=s.alternate,u=l!==null&&l.memoizedState!==null||ae;l=Ur;var d=ae;if(Ur=a,(ae=u)&&!d)for(A=s;A!==null;)a=A,u=a.child,a.tag===22&&a.memoizedState!==null?vl(s):u!==null?(u.return=a,A=u):vl(s);for(;i!==null;)A=i,Uc(i),i=i.sibling;A=s,Ur=l,ae=d}gl(e)}else s.subtreeFlags&8772&&i!==null?(i.return=s,A=i):gl(e)}}function gl(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||Ls(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Ue(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&el(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}el(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&tr(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ae||t.flags&512&&io(t)}catch(h){H(t,t.return,h)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function xl(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function vl(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ls(4,t)}catch(u){H(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(u){H(t,s,u)}}var i=t.return;try{io(t)}catch(u){H(t,i,u)}break;case 5:var a=t.return;try{io(t)}catch(u){H(t,a,u)}}}catch(u){H(t,t.return,u)}if(t===e){A=null;break}var l=t.sibling;if(l!==null){l.return=t.return,A=l;break}A=t.return}}var Mm=Math.ceil,gs=st.ReactCurrentDispatcher,ta=st.ReactCurrentOwner,Te=st.ReactCurrentBatchConfig,U=0,ee=null,K=null,re=0,ke=0,ln=Ct(0),Y=0,pr=null,Bt=0,qs=0,na=0,Hn=null,fe=null,ra=0,kn=1/0,Xe=null,xs=!1,lo=null,vt=null,Rr=!1,pt=null,vs=0,Xn=0,uo=null,Xr=-1,Kr=0;function ce(){return U&6?X():Xr!==-1?Xr:Xr=X()}function yt(e){return e.mode&1?U&2&&re!==0?re&-re:wm.transition!==null?(Kr===0&&(Kr=bu()),Kr):(e=R,e!==0||(e=window.event,e=e===void 0?16:Au(e.type)),e):1}function _e(e,t,n,r){if(50<Xn)throw Xn=0,uo=null,Error(w(185));hr(e,n,r),(!(U&2)||e!==ee)&&(e===ee&&(!(U&2)&&(qs|=n),Y===4&&ct(e,re)),ye(e,r),n===1&&U===0&&!(t.mode&1)&&(kn=X()+500,Ps&&Nt()))}function ye(e,t){var n=e.callbackNode;wp(e,t);var r=ts(e,e===ee?re:0);if(r===0)n!==null&&Aa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Aa(n),t===1)e.tag===0?bm(yl.bind(null,e)):Gu(yl.bind(null,e)),gm(function(){!(U&6)&&Nt()}),n=null;else{switch(wu(r)){case 1:n=Do;break;case 4:n=vu;break;case 16:n=es;break;case 536870912:n=yu;break;default:n=es}n=$c(n,Rc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Rc(e,t){if(Xr=-1,Kr=0,U&6)throw Error(w(327));var n=e.callbackNode;if(fn()&&e.callbackNode!==n)return null;var r=ts(e,e===ee?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ys(e,r);else{t=r;var s=U;U|=2;var i=Fc();(ee!==e||re!==t)&&(Xe=null,kn=X()+500,Ut(e,t));do try{Om();break}catch(l){Mc(e,l)}while(!0);Bo(),gs.current=i,U=s,K!==null?t=0:(ee=null,re=0,t=Y)}if(t!==0){if(t===2&&(s=Ui(e),s!==0&&(r=s,t=co(e,s))),t===1)throw n=pr,Ut(e,0),ct(e,r),ye(e,X()),n;if(t===6)ct(e,r);else{if(s=e.current.alternate,!(r&30)&&!Fm(s)&&(t=ys(e,r),t===2&&(i=Ui(e),i!==0&&(r=i,t=co(e,i))),t===1))throw n=pr,Ut(e,0),ct(e,r),ye(e,X()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:Pt(e,fe,Xe);break;case 3:if(ct(e,r),(r&130023424)===r&&(t=ra+500-X(),10<t)){if(ts(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=$i(Pt.bind(null,e,fe,Xe),t);break}Pt(e,fe,Xe);break;case 4:if(ct(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var a=31-Fe(r);i=1<<a,a=t[a],a>s&&(s=a),r&=~i}if(r=s,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Mm(r/1960))-r,10<r){e.timeoutHandle=$i(Pt.bind(null,e,fe,Xe),r);break}Pt(e,fe,Xe);break;case 5:Pt(e,fe,Xe);break;default:throw Error(w(329))}}}return ye(e,X()),e.callbackNode===n?Rc.bind(null,e):null}function co(e,t){var n=Hn;return e.current.memoizedState.isDehydrated&&(Ut(e,t).flags|=256),e=ys(e,t),e!==2&&(t=fe,fe=n,t!==null&&po(t)),e}function po(e){fe===null?fe=e:fe.push.apply(fe,e)}function Fm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Oe(i(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ct(e,t){for(t&=~na,t&=~qs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function yl(e){if(U&6)throw Error(w(327));fn();var t=ts(e,0);if(!(t&1))return ye(e,X()),null;var n=ys(e,t);if(e.tag!==0&&n===2){var r=Ui(e);r!==0&&(t=r,n=co(e,r))}if(n===1)throw n=pr,Ut(e,0),ct(e,t),ye(e,X()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pt(e,fe,Xe),ye(e,X()),null}function sa(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(kn=X()+500,Ps&&Nt())}}function Vt(e){pt!==null&&pt.tag===0&&!(U&6)&&fn();var t=U;U|=1;var n=Te.transition,r=R;try{if(Te.transition=null,R=1,e)return e()}finally{R=r,Te.transition=n,U=t,!(U&6)&&Nt()}}function ia(){ke=ln.current,_(ln)}function Ut(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,hm(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(Fo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&os();break;case 3:bn(),_(xe),_(le),Xo();break;case 5:Ho(r);break;case 4:bn();break;case 13:_($);break;case 19:_($);break;case 10:Vo(r.type._context);break;case 22:case 23:ia()}n=n.return}if(ee=e,K=e=bt(e.current,null),re=ke=t,Y=0,pr=null,na=qs=Bt=0,fe=Hn=null,qt!==null){for(t=0;t<qt.length;t++)if(n=qt[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=s,r.next=a}n.pending=r}qt=null}return e}function Mc(e,t){do{var n=K;try{if(Bo(),Wr.current=hs,fs){for(var r=W.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}fs=!1}if(Ot=0,J=Z=W=null,Wn=!1,ur=0,ta.current=null,n===null||n.return===null){Y=1,pr=t,K=null;break}e:{var i=e,a=n.return,l=n,u=t;if(t=re,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=l,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=ol(a);if(x!==null){x.flags&=-257,al(x,a,l,i,t),x.mode&1&&il(i,d,t),t=x,u=d;var v=t.updateQueue;if(v===null){var y=new Set;y.add(u),t.updateQueue=y}else v.add(u);break e}else{if(!(t&1)){il(i,d,t),oa();break e}u=Error(w(426))}}else if(V&&l.mode&1){var k=ol(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),al(k,a,l,i,t),_o(wn(u,l));break e}}i=u=wn(u,l),Y!==4&&(Y=2),Hn===null?Hn=[i]:Hn.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=wc(i,u,t);Ja(i,p);break e;case 1:l=u;var c=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(vt===null||!vt.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var b=kc(i,l,t);Ja(i,b);break e}}i=i.return}while(i!==null)}Oc(n)}catch(j){t=j,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function Fc(){var e=gs.current;return gs.current=hs,e===null?hs:e}function oa(){(Y===0||Y===3||Y===2)&&(Y=4),ee===null||!(Bt&268435455)&&!(qs&268435455)||ct(ee,re)}function ys(e,t){var n=U;U|=2;var r=Fc();(ee!==e||re!==t)&&(Xe=null,Ut(e,t));do try{_m();break}catch(s){Mc(e,s)}while(!0);if(Bo(),U=n,gs.current=r,K!==null)throw Error(w(261));return ee=null,re=0,Y}function _m(){for(;K!==null;)_c(K)}function Om(){for(;K!==null&&!pp();)_c(K)}function _c(e){var t=Vc(e.alternate,e,ke);e.memoizedProps=e.pendingProps,t===null?Oc(e):K=t,ta.current=null}function Oc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=qm(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,K=null;return}}else if(n=Lm(n,t,ke),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Pt(e,t,n){var r=R,s=Te.transition;try{Te.transition=null,R=1,Bm(e,t,n,r)}finally{Te.transition=s,R=r}return null}function Bm(e,t,n,r){do fn();while(pt!==null);if(U&6)throw Error(w(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(kp(e,i),e===ee&&(K=ee=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rr||(Rr=!0,$c(es,function(){return fn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Te.transition,Te.transition=null;var a=R;R=1;var l=U;U|=4,ta.current=null,Um(e,n),zc(n,e),lm(Bi),ns=!!Oi,Bi=Oi=null,e.current=n,Rm(n),mp(),U=l,R=a,Te.transition=i}else e.current=n;if(Rr&&(Rr=!1,pt=e,vs=s),i=e.pendingLanes,i===0&&(vt=null),gp(n.stateNode),ye(e,X()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(xs)throw xs=!1,e=lo,lo=null,e;return vs&1&&e.tag!==0&&fn(),i=e.pendingLanes,i&1?e===uo?Xn++:(Xn=0,uo=e):Xn=0,Nt(),null}function fn(){if(pt!==null){var e=wu(vs),t=Te.transition,n=R;try{if(Te.transition=null,R=16>e?16:e,pt===null)var r=!1;else{if(e=pt,pt=null,vs=0,U&6)throw Error(w(331));var s=U;for(U|=4,A=e.current;A!==null;){var i=A,a=i.child;if(A.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(A=d;A!==null;){var f=A;switch(f.tag){case 0:case 11:case 15:Gn(8,f,i)}var g=f.child;if(g!==null)g.return=f,A=g;else for(;A!==null;){f=A;var h=f.sibling,x=f.return;if(Tc(f),f===d){A=null;break}if(h!==null){h.return=x,A=h;break}A=x}}}var v=i.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}A=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,A=a;else e:for(;A!==null;){if(i=A,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Gn(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,A=p;break e}A=i.return}}var c=e.current;for(A=c;A!==null;){a=A;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,A=m;else e:for(a=c;A!==null;){if(l=A,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ls(9,l)}}catch(j){H(l,l.return,j)}if(l===a){A=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,A=b;break e}A=l.return}}if(U=s,Nt(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(Cs,e)}catch{}r=!0}return r}finally{R=n,Te.transition=t}}return!1}function bl(e,t,n){t=wn(n,t),t=wc(e,t,1),e=xt(e,t,1),t=ce(),e!==null&&(hr(e,1,t),ye(e,t))}function H(e,t,n){if(e.tag===3)bl(e,e,n);else for(;t!==null;){if(t.tag===3){bl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vt===null||!vt.has(r))){e=wn(n,e),e=kc(t,e,1),t=xt(t,e,1),e=ce(),t!==null&&(hr(t,1,e),ye(t,e));break}}t=t.return}}function Vm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(re&n)===n&&(Y===4||Y===3&&(re&130023424)===re&&500>X()-ra?Ut(e,0):na|=n),ye(e,t)}function Bc(e,t){t===0&&(e.mode&1?(t=Ar,Ar<<=1,!(Ar&130023424)&&(Ar=4194304)):t=1);var n=ce();e=nt(e,t),e!==null&&(hr(e,t,n),ye(e,n))}function $m(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bc(e,n)}function Wm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),Bc(e,n)}var Vc;Vc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ge=!1,Tm(e,t,n);ge=!!(e.flags&131072)}else ge=!1,V&&t.flags&1048576&&Hu(t,us,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hr(e,t),e=t.pendingProps;var s=xn(t,le.current);mn(t,n),s=Qo(null,t,r,e,s,n);var i=Zo();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(i=!0,as(t)):i=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Wo(t),s.updater=Ts,t.stateNode=s,s._reactInternals=t,Zi(t,r,e,n),t=eo(null,t,r,!0,i,n)):(t.tag=0,V&&i&&Mo(t),ue(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hr(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=Hm(r),e=Ue(r,e),s){case 0:t=Ji(null,t,r,e,n);break e;case 1:t=cl(null,t,r,e,n);break e;case 11:t=ll(null,t,r,e,n);break e;case 14:t=ul(null,t,r,Ue(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Ue(r,s),Ji(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Ue(r,s),cl(e,t,r,s,n);case 3:e:{if(Nc(t),e===null)throw Error(w(387));r=t.pendingProps,i=t.memoizedState,s=i.element,Ju(e,t),ps(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){s=wn(Error(w(423)),t),t=dl(e,t,r,n,s);break e}else if(r!==s){s=wn(Error(w(424)),t),t=dl(e,t,r,n,s);break e}else for(Se=gt(t.stateNode.containerInfo.firstChild),je=t,V=!0,Me=null,n=Zu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vn(),r===s){t=rt(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return ec(t),e===null&&Xi(t),r=t.type,s=t.pendingProps,i=e!==null?e.memoizedProps:null,a=s.children,Vi(r,s)?a=null:i!==null&&Vi(r,i)&&(t.flags|=32),Cc(e,t),ue(e,t,a,n),t.child;case 6:return e===null&&Xi(t),null;case 13:return Ac(e,t,n);case 4:return Go(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Ue(r,s),ll(e,t,r,s,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,i=t.memoizedProps,a=s.value,M(cs,r._currentValue),r._currentValue=a,i!==null)if(Oe(i.value,a)){if(i.children===s.children&&!xe.current){t=rt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Je(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ki(i.return,n,t),l.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(w(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Ki(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ue(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,mn(t,n),s=Le(s),r=r(s),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,s=Ue(r,t.pendingProps),s=Ue(r.type,s),ul(e,t,r,s,n);case 15:return Sc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Ue(r,s),Hr(e,t),t.tag=1,ve(r)?(e=!0,as(t)):e=!1,mn(t,n),bc(t,r,s),Zi(t,r,s,n),eo(null,t,r,!0,e,n);case 19:return Ic(e,t,n);case 22:return jc(e,t,n)}throw Error(w(156,t.tag))};function $c(e,t){return xu(e,t)}function Gm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new Gm(e,t,n,r)}function aa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hm(e){if(typeof e=="function")return aa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===No)return 11;if(e===Ao)return 14}return 2}function bt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qr(e,t,n,r,s,i){var a=2;if(r=e,typeof e=="function")aa(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Zt:return Rt(n.children,s,i,t);case Co:a=8,s|=8;break;case wi:return e=Ee(12,n,t,s|2),e.elementType=wi,e.lanes=i,e;case ki:return e=Ee(13,n,t,s),e.elementType=ki,e.lanes=i,e;case Si:return e=Ee(19,n,t,s),e.elementType=Si,e.lanes=i,e;case eu:return zs(n,s,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yl:a=10;break e;case Jl:a=9;break e;case No:a=11;break e;case Ao:a=14;break e;case at:a=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Ee(a,n,t,s),t.elementType=e,t.type=r,t.lanes=i,t}function Rt(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function zs(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=eu,e.lanes=n,e.stateNode={isHidden:!1},e}function pi(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function mi(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Xm(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hs(0),this.expirationTimes=Hs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hs(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function la(e,t,n,r,s,i,a,l,u){return e=new Xm(e,t,n,l,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ee(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wo(i),e}function Km(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Wc(e){if(!e)return St;e=e._reactInternals;e:{if(Gt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(ve(n))return Wu(e,n,t)}return t}function Gc(e,t,n,r,s,i,a,l,u){return e=la(n,r,!0,e,s,i,a,l,u),e.context=Wc(null),n=e.current,r=ce(),s=yt(n),i=Je(r,s),i.callback=t??null,xt(n,i,s),e.current.lanes=s,hr(e,s,r),ye(e,r),e}function Us(e,t,n,r){var s=t.current,i=ce(),a=yt(s);return n=Wc(n),t.context===null?t.context=n:t.pendingContext=n,t=Je(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xt(s,t,a),e!==null&&(_e(e,s,a,i),$r(e,s,a)),a}function bs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ua(e,t){wl(e,t),(e=e.alternate)&&wl(e,t)}function Qm(){return null}var Hc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ca(e){this._internalRoot=e}Rs.prototype.render=ca.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Us(e,t,null,null)};Rs.prototype.unmount=ca.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vt(function(){Us(null,e,null,null)}),t[tt]=null}};function Rs(e){this._internalRoot=e}Rs.prototype.unstable_scheduleHydration=function(e){if(e){var t=ju();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ut.length&&t!==0&&t<ut[n].priority;n++);ut.splice(n,0,e),n===0&&Nu(e)}};function da(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ms(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kl(){}function Zm(e,t,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=bs(a);i.call(d)}}var a=Gc(t,r,e,0,null,!1,!1,"",kl);return e._reactRootContainer=a,e[tt]=a.current,sr(e.nodeType===8?e.parentNode:e),Vt(),a}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var d=bs(u);l.call(d)}}var u=la(e,0,!1,null,null,!1,!1,"",kl);return e._reactRootContainer=u,e[tt]=u.current,sr(e.nodeType===8?e.parentNode:e),Vt(function(){Us(t,u,n,r)}),u}function Fs(e,t,n,r,s){var i=n._reactRootContainer;if(i){var a=i;if(typeof s=="function"){var l=s;s=function(){var u=bs(a);l.call(u)}}Us(t,a,e,s)}else a=Zm(n,t,e,s,r);return bs(a)}ku=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mn(t.pendingLanes);n!==0&&(Po(t,n|1),ye(t,X()),!(U&6)&&(kn=X()+500,Nt()))}break;case 13:Vt(function(){var r=nt(e,1);if(r!==null){var s=ce();_e(r,e,1,s)}}),ua(e,1)}};Eo=function(e){if(e.tag===13){var t=nt(e,134217728);if(t!==null){var n=ce();_e(t,e,134217728,n)}ua(e,134217728)}};Su=function(e){if(e.tag===13){var t=yt(e),n=nt(e,t);if(n!==null){var r=ce();_e(n,e,t,r)}ua(e,t)}};ju=function(){return R};Cu=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};Li=function(e,t,n){switch(t){case"input":if(Ni(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Ds(r);if(!s)throw Error(w(90));nu(r),Ni(r,s)}}}break;case"textarea":su(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}};du=sa;pu=Vt;var Ym={usingClientEntryPoint:!1,Events:[xr,tn,Ds,uu,cu,sa]},qn={findFiberByHostInstance:Lt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jm={bundleType:qn.bundleType,version:qn.version,rendererPackageName:qn.rendererPackageName,rendererConfig:qn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:st.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hu(e),e===null?null:e.stateNode},findFiberByHostInstance:qn.findFiberByHostInstance||Qm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mr.isDisabled&&Mr.supportsFiber)try{Cs=Mr.inject(Jm),Ge=Mr}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ym;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!da(t))throw Error(w(200));return Km(e,t,null,n)};Ne.createRoot=function(e,t){if(!da(e))throw Error(w(299));var n=!1,r="",s=Hc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=la(e,1,!1,null,null,n,!1,r,s),e[tt]=t.current,sr(e.nodeType===8?e.parentNode:e),new ca(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=hu(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return Vt(e)};Ne.hydrate=function(e,t,n){if(!Ms(t))throw Error(w(200));return Fs(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!da(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",a=Hc;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Gc(t,null,e,1,n??null,s,!1,i,a),e[tt]=t.current,sr(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Rs(t)};Ne.render=function(e,t,n){if(!Ms(t))throw Error(w(200));return Fs(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!Ms(e))throw Error(w(40));return e._reactRootContainer?(Vt(function(){Fs(null,null,e,!1,function(){e._reactRootContainer=null,e[tt]=null})}),!0):!1};Ne.unstable_batchedUpdates=sa;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ms(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Fs(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function Xc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xc)}catch(e){console.error(e)}}Xc(),Xl.exports=Ne;var Kc=Xl.exports,Sl=Kc;yi.createRoot=Sl.createRoot,yi.hydrateRoot=Sl.hydrateRoot;/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Qc=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var tf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=C.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:a,...l},u)=>C.createElement("svg",{ref:u,...tf,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Qc("lucide",s),...l},[...a.map(([d,f])=>C.createElement(d,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=(e,t)=>{const n=C.forwardRef(({className:r,...s},i)=>C.createElement(nf,{ref:i,iconNode:t,className:Qc(`lucide-${ef(e)}`,r),...s}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=T("ArrowDownToLine",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=T("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=T("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=T("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=T("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=T("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=T("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=T("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=T("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=T("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=T("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=T("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=T("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=T("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=T("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=T("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=T("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=T("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=T("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=T("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=T("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=T("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=T("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=T("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=T("MessagesSquare",[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z",key:"p1xzt8"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",key:"1cx29u"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=T("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=T("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=T("PenTool",[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=T("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=T("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=T("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=T("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=T("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=T("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=T("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=T("Slash",[["path",{d:"M22 2 2 22",key:"y4kqgn"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=T("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=T("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=T("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=T("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=T("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=T("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=T("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),bf='<!-- source-hash: b4bd94f1e332 -->\n---\nname: asl-design-system\ndescription: Design System of Anne-Sophie Leroy\'s portfolio — colours through tokens, neutral and solid surfaces, reserved shadow, colour meanings, component structure (buttons, tags, cards, menus), action hierarchy, layout and typography without all caps. Use it whenever you create or modify a component, a screen, a style, a colour or a button in this project, even if the request does not mention a “design system” (for example “add a card”, “make this block more visible”, “create a banner”).\n---\n\n# ASL portfolio Design System\n\nThis portfolio has a precise direction: restrained, readable, with colour reserved for what matters.\nYour role is to build screens that blend into it, not to make them “prettier” in your own way.\nWhen in doubt, go simpler.\n\n## Before writing code\n\nThe system is organised in three files, from the most general to the most specific. Open the ones you need:\n\n| You want to… | Read |\n|---|---|\n| Create or modify a component (button, tag, card, menu…) | `references/composants.md`: every component is described there (example, anatomy, states). Follow its structure rather than inventing one. |\n| Choose a colour, a text size, a radius, an icon | `references/styles.md`. The source of truth for values remains `src/index.css`. |\n| Compose a screen, write a label, check accessibility | `references/fondations.md` |\n\nThese three files are also the source of the portfolio\'s “Design System” page: a rule changed here changes the page.\n\n## The four non-negotiable rules\n\nThese are the ones whose omission shows on screen straight away.\n\n### 1. No hard-coded colour\n\nEvery colour goes through a token (`bg-accent`, `text-ink`, `border-line`, `var(--ai)`…). Never `#640017`, `rgb(...)` or a standard Tailwind colour (`bg-red-500`, `text-gray-600`, `text-white`).\n\nWhy: tokens change value with the theme. A hard-coded colour stays fixed, so the screen breaks in dark mode, and it leaves the palette without anyone noticing.\n\nConsequence: do not use Tailwind\'s `dark:` prefix. The theme is carried by `data-theme` on `<html>`; with tokens, both themes work without writing anything more.\n\n- Yes: `className="bg-accent text-accent-fg"`\n- No: `className="bg-[#640017] text-white"`\n\n### 2. Neutral, solid surfaces\n\nA background is a solid, neutral colour: `bg-bg`, `bg-elevated` or `bg-sidebar`. No gradient, no texture, no decorative shape, and no large coloured surface (an olive banner, a burgundy card).\n\nColour lives in the small elements that carry an action or a piece of information: buttons, tags, icon badges.\n\nWhy: background effects were tried and then removed, because they got in the way of reading without adding anything. And a large coloured surface overwhelms everything around it. To make a block stand out, work with text size, space and a single coloured action: see `references/fondations.md`, “Layout”.\n\n- Yes: `className="rounded-3xl border border-line bg-elevated p-5"` with a `btn-primary` inside\n- No: `className="bg-olive text-olive-fg"` across the full width\n\n### 3. The shadow is reserved\n\nOnly one shadow exists, `shadow-signature`, and it serves two purposes: the prompt input (with its send button) and the main action of a screen (`btn-primary`). A card, a tag, a secondary menu or an image has no shadow: they stand out through a flat fill and a thin border (`border border-line`).\n\nWhy: if everything has a shadow, nothing stands out any more. The shadow says “this is where you act”.\n\n### 4. One colour, one meaning\n\n| Colour | Meaning | Tokens |\n|---|---|---|\n| Solid olive | Main action | `olive`, `olive-fg` |\n| Pale olive | Positive element (tag, badge) | `olive-tint`, `olive-text` |\n| Burgundy | Secondary action as an icon button, step number, icon badge, link, monogram | `accent`, `accent-fg`, `accent-text`, `accent-tint` |\n| Turquoise | What comes from the AI | `--ai`, `--ai-text`, `--ai-tint` |\n| Orange | Friction point, alert | `--warn-text`, `--warn-tint` |\n| Vermilion | Punctuation only: list bullet, caret, small arrow. Never a text, never a background | `vermillion` |\n\nOlive exists in two intensities, and the difference matters: solid for a button, pale for information. A tag is never solid olive, a button never pale olive: a button that is not the main action stays neutral (outlined or `bg-surface-2`).\n\nDo not repurpose a colour because it “would look good”. If no meaning matches, stay neutral: `text-ink`, `text-muted`, `border-line`. Figures, in particular, stay neutral.\n\nWhy: as soon as a colour has two meanings, the reader can no longer rely on it.\n\n## When the request contradicts a rule\n\nSometimes you are explicitly asked for what a rule forbids (“add a gradient”, “add a shadow so it stands out”). The person wants a result — for the block to be seen — not necessarily that particular means.\n\nBuild the compliant version that reaches the same goal, then say clearly what you did not do and why, and offer to do it anyway if they insist. Do not add it silently, and do not refuse without delivering anything.\n\n## Composing the screen\n\nA screen can follow the four rules and still fail: elements that overlap, lines that separate nothing. Before creating or reorganising a block, read “Layout” in `references/fondations.md`.\n\nWorth remembering even without opening it: **no text is in all caps**, neither button, nor tag, nor label (no `uppercase` class), and **in a button, the icon is to the right of the label**.\n\n## Before delivering\n\nFirst run the check script on the files you created or modified:\n\n```bash\nnode .claude/skills/asl-design-system/scripts/check.mjs src/components/MonComposant.tsx\n```\n\nWith no argument, it checks all of `src/`. It reports two levels:\n\n- `✗` an error: a rule is broken (hard-coded colour, gradient, unplanned shadow, all-caps text), fix it before delivering;\n- `?` to check: the script cannot decide on its own (a shadow, a coloured surface). See whether the use is legitimate.\n\nThe script does not see everything. It judges neither the meaning of a colour (rule 4), nor the structure of a component (icon on the right, suggestion card), nor the composition: a text that covers another escapes it. These points remain yours.\n\nIf you have to depart from a rule, write the reason just above the line, then say so clearly in your reply:\n\n```tsx\n{/* ds-ignore: le prototype est toujours clair, son support reste blanc */}\n```\n\nA reported deviation is better than a hidden one.\n',wf=`<!-- source-hash: 77fb53e886d9 -->
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
4. Project list, numbered in their order of presentation
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
`,kf=`<!-- source-hash: df62a5704dae -->
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
| \`text-ink\` on \`bg-bg\` | 14.8 | 13.8 |
| \`text-muted\` on \`bg-bg\` | 6.7 | 8.4 |
| \`text-muted\` on \`bg-elevated\` | 7.3 | 7.5 |
| \`text-olive-fg\` on \`bg-olive\` | 6.5 | 5.4 |
| \`text-accent-fg\` on \`bg-accent\` | 12.8 | 7.0 |
| Pale olive tag | 7.5 | 6.5 |
| AI tag | 4.9 | 6.9 |
| Friction tag | 6.3 | 5.6 |
| \`text-vermillion\` on \`bg-bg\` | 3.3 | 5.3 |
| \`border-line\` on \`bg-bg\` | 1.4 | 1.3 |

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
`,Sf=`<!-- source-hash: a4aef17224d1 -->
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
- In a link written as text (LinkedIn, phone, Design System in the menu), it comes first too: it says which link it is. It is not a button: no background, no outline.

### Rules

- An icon matches the content, it is not repeated for decoration.
- A decorative icon carries \`aria-hidden\`.
`,ud="---\nname: asl-design-system\ndescription: Design System du portfolio d'Anne-Sophie Leroy — couleurs par tokens, surfaces neutres et unies, ombre réservée, sens des couleurs, structure des composants (boutons, tags, cartes, menus), hiérarchie des actions, mise en page et typographie sans majuscules. À utiliser dès qu'on crée ou modifie un composant, un écran, un style, une couleur ou un bouton dans ce projet, même si la demande ne parle pas de « design system » (par exemple « ajoute une carte », « rends ce bloc plus visible », « crée une bannière »).\n---\n\n# Design System du portfolio ASL\n\nCe portfolio a une direction précise : sobre, lisible, avec la couleur réservée à ce qui compte.\nTon rôle est de construire des écrans qui s'y fondent, pas de les rendre « plus beaux » à ta façon.\nEn cas de doute, fais plus simple.\n\n## Avant d'écrire du code\n\nLe système est rangé en trois fichiers, du plus général au plus précis. Ouvre ceux dont tu as besoin :\n\n| Tu veux… | Lis |\n|---|---|\n| Créer ou modifier un composant (bouton, tag, carte, menu…) | `references/composants.md` : chaque composant y est décrit (exemple, anatomie, états). Suis sa structure plutôt que d'en inventer une. |\n| Choisir une couleur, une taille de texte, un arrondi, une icône | `references/styles.md`. La source de vérité des valeurs reste `src/index.css`. |\n| Composer un écran, écrire un libellé, vérifier l'accessibilité | `references/fondations.md` |\n\nCes trois fichiers sont aussi la source de la page « Design System » du portfolio : une règle changée ici change la page.\n\n## Les quatre règles non négociables\n\nCe sont celles dont l'oubli se voit tout de suite à l'écran.\n\n### 1. Aucune couleur écrite en dur\n\nToute couleur passe par un token (`bg-accent`, `text-ink`, `border-line`, `var(--ai)`…). Jamais de `#640017`, de `rgb(...)` ni de couleur Tailwind standard (`bg-red-500`, `text-gray-600`, `text-white`).\n\nPourquoi : les tokens changent de valeur selon le thème. Une couleur en dur reste figée, donc l'écran casse en mode sombre, et elle sort de la palette sans que personne le remarque.\n\nConséquence : n'utilise pas le préfixe `dark:` de Tailwind. Le thème est porté par `data-theme` sur `<html>` ; avec des tokens, les deux thèmes fonctionnent sans rien écrire de plus.\n\n- Oui : `className=\"bg-accent text-accent-fg\"`\n- Non : `className=\"bg-[#640017] text-white\"`\n\n### 2. Des surfaces neutres et unies\n\nUn fond est une couleur pleine et neutre : `bg-bg`, `bg-elevated` ou `bg-sidebar`. Pas de dégradé, pas de texture, pas de forme décorative, et pas de grande surface colorée (un bandeau olive, une carte bordeaux).\n\nLa couleur vit dans les petits éléments qui portent une action ou une information : boutons, tags, pastilles d'icône.\n\nPourquoi : les effets de fond ont été essayés puis retirés, parce qu'ils gênaient la lecture sans rien apporter. Et une grande surface colorée écrase tout ce qui l'entoure. Pour qu'un bloc ressorte, joue sur la taille du texte, l'espace et une seule action colorée : voir `references/fondations.md`, « Mise en page ».\n\n- Oui : `className=\"rounded-3xl border border-line bg-elevated p-5\"` avec un `btn-primary` à l'intérieur\n- Non : `className=\"bg-olive text-olive-fg\"` sur toute la largeur\n\n### 3. L'ombre est réservée\n\nUne seule ombre existe, `shadow-signature`, et elle sert à deux choses : la zone de saisie du prompt (avec son bouton d'envoi) et l'action principale d'un écran (`btn-primary`). Une carte, un tag, un menu secondaire ou une image n'ont pas d'ombre : ils se détachent par un aplat et une bordure fine (`border border-line`).\n\nPourquoi : si tout a une ombre, plus rien ne ressort. L'ombre dit « c'est ici qu'on agit ».\n\n### 4. Une couleur, un seul sens\n\n| Couleur | Sens | Tokens |\n|---|---|---|\n| Olive plein | Action principale | `olive`, `olive-fg` |\n| Olive pâle | Élément positif (tag, pastille) | `olive-tint`, `olive-text` |\n| Bordeaux | Action secondaire en bouton-icône, numéro d'étape, pastille d'icône, lien, monogramme | `accent`, `accent-fg`, `accent-text`, `accent-tint` |\n| Turquoise | Ce qui vient de l'IA | `--ai`, `--ai-text`, `--ai-tint` |\n| Orange | Point de friction, alerte | `--warn-text`, `--warn-tint` |\n| Vermillon | Ponctuation seulement : puce de liste, curseur, petite flèche. Jamais un texte, jamais un fond | `vermillion` |\n\nL'olive existe en deux intensités, et la différence compte : plein pour un bouton, pâle pour une information. Un tag n'est jamais en olive plein, un bouton jamais en olive pâle : un bouton qui n'est pas l'action principale reste neutre (contour ou `bg-surface-2`).\n\nNe détourne pas une couleur parce qu'elle « irait bien ». Si aucun sens ne correspond, reste neutre : `text-ink`, `text-muted`, `border-line`. Les chiffres, en particulier, restent neutres.\n\nPourquoi : dès qu'une couleur a deux sens, le lecteur ne peut plus s'y fier.\n\n## Quand la demande contredit une règle\n\nIl arrive qu'on te demande explicitement ce qu'une règle interdit (« mets un dégradé », « ajoute une ombre pour que ça ressorte »). La personne veut un résultat — que le bloc se voie — pas forcément ce moyen-là.\n\nConstruis la version conforme qui atteint le même but, puis dis clairement ce que tu n'as pas fait et pourquoi, et propose de le faire quand même si elle y tient. Ne l'ajoute pas en silence, et ne refuse pas sans rien livrer.\n\n## Composer l'écran\n\nUn écran peut respecter les quatre règles et rester raté : des éléments qui se chevauchent, des traits qui ne séparent rien. Avant de créer ou de réorganiser un bloc, lis « Mise en page » dans `references/fondations.md`.\n\nÀ retenir même sans l'ouvrir : **aucun texte n'est tout en majuscules**, ni bouton, ni tag, ni libellé (pas de classe `uppercase`), et **dans un bouton, l'icône est à droite du libellé**.\n\n## Avant de livrer\n\nLance d'abord le script de vérification sur les fichiers que tu as créés ou modifiés :\n\n```bash\nnode .claude/skills/asl-design-system/scripts/check.mjs src/components/MonComposant.tsx\n```\n\nSans argument, il vérifie tout `src/`. Il signale deux niveaux :\n\n- `✗` une erreur : une règle est enfreinte (couleur en dur, dégradé, ombre non prévue, texte en majuscules), corrige avant de livrer ;\n- `?` à vérifier : le script ne peut pas trancher seul (une ombre, une surface colorée). Regarde si l'usage est légitime.\n\nLe script ne voit pas tout. Il ne juge ni le sens d'une couleur (règle 4), ni la structure d'un composant (icône à droite, carte de suggestion), ni la composition : un texte qui en recouvre un autre lui échappe. Ces points restent les tiens.\n\nSi tu dois t'écarter d'une règle, écris la raison juste au-dessus de la ligne, puis dis-le clairement dans ta réponse :\n\n```tsx\n{/* ds-ignore: le prototype est toujours clair, son support reste blanc */}\n```\n\nUn écart signalé vaut mieux qu'un écart caché.\n",cd=`# Composants

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
4. Liste des projets, numérotés dans leur ordre de présentation
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
`,dd=`# Fondations

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
| \`text-ink\` sur \`bg-bg\` | 14,8 | 13,8 |
| \`text-muted\` sur \`bg-bg\` | 6,7 | 8,4 |
| \`text-muted\` sur \`bg-elevated\` | 7,3 | 7,5 |
| \`text-olive-fg\` sur \`bg-olive\` | 6,5 | 5,4 |
| \`text-accent-fg\` sur \`bg-accent\` | 12,8 | 7,0 |
| Tag olive pâle | 7,5 | 6,5 |
| Tag IA | 4,9 | 6,9 |
| Tag friction | 6,3 | 5,6 |
| \`text-vermillion\` sur \`bg-bg\` | 3,3 | 5,3 |
| \`border-line\` sur \`bg-bg\` | 1,4 | 1,3 |

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
`,pd=`# Styles

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
- Dans un lien écrit comme du texte (LinkedIn, téléphone, Design System dans le menu), elle est devant aussi : elle dit de quel lien il s'agit. Ce n'est pas un bouton : pas de fond, pas de contour.

### Règles

- Une icône correspond au contenu, elle n'est pas répétée pour décorer.
- Une icône décorative porte \`aria-hidden\`.
`,jf=e=>/^[\p{L}«“"]/u.test(e.trim());function jl(e,t){const n=e.startsWith("---")?e.slice(e.indexOf(`
---`,3)+4):e,r=[];let s,i=null,a=null,l=!1;for(const u of n.split(`
`)){u.startsWith("```")&&(l=!l);const d=l?null:u.match(/^(#{1,6})\s+(.*)$/);if(d){const f=d[1].length;if(f<t){s=f===1?void 0:d[2],i=null,a=null;continue}if(f===t){i={family:s,title:d[2],lead:"",sections:[]},a={title:"",body:""},i.sections.push(a),r.push(i);continue}if(f===t+1&&i){a={title:d[2],body:""},i.sections.push(a);continue}}a&&(a.body+=`${u}
`)}for(const u of r){const d=u.sections[0],f=d.body.split(`
`),g=f.findIndex(h=>h.trim());if(g>=0&&jf(f[g])){let h=g;for(;h<f.length&&f[h].trim();)h++;u.lead=f.slice(g,h).join(" "),d.body=f.slice(h).join(`
`)}u.sections=u.sections.map(h=>({...h,body:h.body.trim()})).filter(h=>h.title||h.body)}return r}function md(e){const t=[],n=[];let r=!1;for(const s of e.split(`
`)){s.startsWith("```")&&(r=!r);const i=r?null:s.match(/^\s*(?:[-•]|\d+\.)\s+(.*)$/);i?t.push(i[1]):n.push(s)}return{items:t,rest:n.join(`
`).trim()}}const Cf=Object.assign({"./design-system-en/SKILL.md":bf,"./design-system-en/composants.md":wf,"./design-system-en/fondations.md":kf,"./design-system-en/styles.md":Sf}),hn={fr:{title:"Design System",subtitle:"Les règles et les composants de ce portfolio",pages:"Pages",previous:"Précédent",next:"Suivant",source:"Cette page affiche le fichier que l’agent IA lit",openTitle:"Le Design System de ce portfolio",openText:"Fondations, styles et composants : la page lit directement les fichiers du skill.",open:"Voir le Design System",link:"Design System"},en:{title:"Design System",subtitle:"The rules and components of this portfolio",pages:"Pages",previous:"Previous",next:"Next",source:"This page displays the file the AI agent reads",openTitle:"This portfolio’s Design System",openText:"Foundations, styles and components: the page reads the skill files directly.",open:"View the Design System",link:"Design System"}},fi=[{id:"start",title:{fr:"Démarrer",en:"Get started"}},{id:"foundations",title:{fr:"Fondations",en:"Foundations"}},{id:"styles",title:{fr:"Styles",en:"Styles"}},{id:"components",title:{fr:"Composants",en:"Components"}}],Nf=["Les quatre règles non négociables","Quand la demande contredit une règle","Avant de livrer"],Af=[{file:"SKILL.md",path:"SKILL.md",fr:ud,group:"start",level:2,only:Nf},{file:"fondations.md",path:"references/fondations.md",fr:dd,group:"foundations",level:2},{file:"styles.md",path:"references/styles.md",fr:pd,group:"styles",level:2},{file:"composants.md",path:"references/composants.md",fr:cd,group:"components",level:3}],If={Anatomie:"anatomy","À faire":"do","À éviter":"dont"};function Df(e,t){return e.length===t.length&&e.every((n,r)=>n.sections.length===t[r].sections.length)}function Pf(e){return Af.flatMap(t=>{const n=jl(t.fr,t.level),r=Cf[`./design-system-en/${t.file}`],s=e==="en"&&r?jl(r,t.level):null,i=s&&Df(n,s)?s:n;return n.map((a,l)=>({p:a,i:l})).filter(({p:a})=>!t.only||t.only.includes(a.title)).map(({p:a,i:l})=>({id:`${t.group}-${l}`,group:t.group,path:t.path,category:i[l].family,title:i[l].title,lead:i[l].lead,sections:a.sections.map((u,d)=>({title:i[l].sections[d].title,body:i[l].sections[d].body,kind:If[u.title]??"text"}))}))})}const hi={},Ef=e=>hi[e]??(hi[e]=Pf(e)),Cl={before:{label:{fr:"Avant",en:"Before"},stages:[{step:1,title:{fr:"Obtenir le document",en:"Getting the document"},frictions:[{fr:"Relances répétées pour obtenir les pièces",en:"Repeated reminders to get the files"}],nodes:[{actor:"offline",label:{fr:"Échanges et relances entre plusieurs personnes pour recevoir les pièces",en:"Messages and reminders between several people to receive the files"}}]},{step:2,title:{fr:"Module Contrat",en:"Contract module"},frictions:[{fr:"Délai entre la réception et la saisie",en:"Delay between receipt and data entry"}],nodes:[{actor:"human",label:{fr:"Dépose le document dans la partie Documents du contrat",en:"Uploads the document in the contract’s Documents section"}}]},{step:3,title:{fr:"Module Covenant",en:"Covenant module"},nodes:[{actor:"human",label:{fr:"Change de module",en:"Switches module"}},{actor:"human",label:{fr:"Lit le certificat pour y retrouver chaque valeur",en:"Reads the certificate to find each value"}}]},{step:4,title:{fr:"Calendrier du contrat",en:"Contract calendar"},repeat:{fr:"Répété pour chaque covenant",en:"Repeated for every covenant"},frictions:[{fr:"Erreurs de saisie à corriger",en:"Typing errors to correct"},{fr:"Breach recalculé à la main",en:"Breach re-computed by hand"}],nodes:[{actor:"human",label:{fr:"Crée à la main la ligne de monitoring de la période",en:"Creates the monitoring line for the period by hand"}},{actor:"human",label:{fr:"Saisit valeur réelle, dates et statut",en:"Types in actual value, dates and status"}},{actor:"human",label:{fr:"Recontrôle le breach calculé par l’outil",en:"Re-checks the breach computed by the tool"}},{actor:"human",label:{fr:"Lie le document à la période suivie",en:"Links the document to the monitored period"}}]}]},after:{label:{fr:"Après",en:"After"},stages:[{title:{fr:"Réception",en:"Intake"},alternatives:!0,nodes:[{actor:"system",label:{fr:"Email reçu dans la file « Submissions »",en:"Email received in the “Submissions” queue"}},{actor:"human",label:{fr:"Dépôt manuel d’un document",en:"Manual document upload"}}]},{step:1,title:{fr:"Analyse des documents",en:"Documents analysis"},nodes:[{actor:"ai",label:{fr:"Lit les pièces : emprunteur, facility, date de signature",en:"Reads the files: borrower, facility, signature date"}}]},{step:2,title:{fr:"Rapprochement du contrat",en:"Contract matching"},nodes:[{actor:"ai",label:{fr:"Propose les contrats possibles",en:"Suggests the possible contracts"}},{actor:"human",label:{fr:"Accepte, ou choisit le contrat à la main",en:"Accepts, or picks the contract manually"}}]},{step:3,title:{fr:"Extraction & rapprochement des covenants",en:"Covenant extraction & matching"},nodes:[{actor:"ai",label:{fr:"Extrait chaque covenant et sa valeur",en:"Extracts each covenant and its value"}},{actor:"ai",label:{fr:"Propose le covenant correspondant du contrat",en:"Suggests the matching covenant of the contract"}},{actor:"human",label:{fr:"Valide un par un, face à la source — ou suit à la main",en:"Validates one by one, against the source — or monitors manually"}}]},{title:{fr:"Suivi",en:"Monitoring"},nodes:[{actor:"system",label:{fr:"Valeurs poussées dans le calendrier des covenants",en:"Values pushed to the covenant calendar"}},{actor:"human",label:{fr:"Échéances, breach et réception suivis par contrat",en:"Due dates, breach and receipt tracked per contract"}}]}]}},he={fr:{eyebrow:"Parcours utilisateur · avant / après",title:"Du document reçu au covenant suivi",actors:{ai:"IA",human:"Analyste",system:"Système",offline:"Hors outil"},step:"Étape",or:"ou",navLabel:"Sections de l’étude de cas",navFlow:"Avant / Après",navUxFlow:"Le flow",navProto:"Prototype",detail:"Les deux parcours",friction:"Point de friction",open:"Tester le prototype",ctaTitle:"Essayez le parcours vous-même",ctaText:"Le prototype s’ouvre ici, sans quitter le portfolio. Il est entièrement navigable : ouvrez une soumission, acceptez un contrat, validez un covenant.",viewerTitle:"Covenant monitoring — prototype navigable",viewerNote:"Données fictives · marque et couleurs anonymisées",restart:"Recommencer",desktopHint:"Prototype conçu pour un écran d’ordinateur : il est réduit pour tenir dans cette fenêtre."},en:{eyebrow:"User journey · before / after",title:"From the received document to the monitored covenant",actors:{ai:"AI",human:"Analyst",system:"System",offline:"Outside the tool"},step:"Step",or:"or",navLabel:"Case study sections",navFlow:"Before / After",navUxFlow:"The flow",navProto:"Prototype",detail:"The two journeys",friction:"Pain point",open:"Try the prototype",ctaTitle:"Try the journey yourself",ctaText:"The prototype opens here, without leaving the portfolio. It is fully navigable: open a submission, accept a contract, validate a covenant.",viewerTitle:"Covenant monitoring — navigable prototype",viewerNote:"Fictional data · brand and colours anonymised",restart:"Restart",desktopHint:"Prototype designed for a desktop screen: it is scaled down to fit this window."}},fd={eyebrow:{fr:he.fr.eyebrow,en:he.en.eyebrow},title:{fr:he.fr.title,en:he.en.title},journeys:[{id:"before",muted:!0,...Cl.before},{id:"after",...Cl.after}],defaultView:"before"},Tf="prototypes/covenant-monitoring.html#screen=0",Lf={eyebrow:{fr:"Flow design · de la recherche au réel",en:"Design flow · from research to reality"},title:{fr:"L’IA produit, le designer décide",en:"The AI produces, the designer decides"},actors:{fr:{ai:"L’IA produit",human:"Le designer décide"},en:{ai:"The AI produces",human:"The designer decides"}},journeys:[{id:"flow",label:{fr:"Flow",en:"Flow"},stages:[{step:1,title:{fr:"Recherche",en:"Research"},nodes:[{actor:"ai",label:{fr:"Analyse des données utilisateurs, segmentation, écarts",en:"User data analysis, segmentation, gap analysis"}},{actor:"human",label:{fr:"Cadre la recherche, anime le cadrage UX",en:"Frames the research, runs the UX framing"}}]},{step:2,title:{fr:"Intention",en:"Intention"},nodes:[{actor:"ai",label:{fr:"Benchmark large, pistes multiples",en:"Wide benchmark, multiple directions"}},{actor:"human",label:{fr:"Fixe l’intention, retient les pistes",en:"Sets the intention, keeps the directions"}}]},{step:3,title:{fr:"Génération 1 · prototypage design",en:"Generation 1 · design prototyping"},nodes:[{actor:"ai",label:{fr:"Itérations de design, plusieurs solutions",en:"Design iterations, several solutions"}},{actor:"human",label:{fr:"Juge et sélectionne les solutions",en:"Judges and selects the solutions"}}]},{step:4,title:{fr:"Génération 2 · prototypage code",en:"Generation 2 · code prototyping"},nodes:[{actor:"ai",label:{fr:"Itérations de code sur le Design System",en:"Code iterations on the Design System"}},{actor:"human",label:{fr:"Arbitre avec les développeurs",en:"Arbitrates with the developers"}}]},{step:5,title:{fr:"Implémentation",en:"Implementation"},nodes:[{actor:"ai",label:{fr:"Environnement de test, livraison prête",en:"Test environment, delivery ready"}},{actor:"human",label:{fr:"Valide la conformité au design",en:"Validates design compliance"}}]},{step:6,title:{fr:"Tests utilisateurs",en:"User tests"},nodes:[{actor:"ai",label:{fr:"Protocoles de test, synthèse des retours",en:"Test protocols, feedback synthesis"}},{actor:"human",label:{fr:"Observe les utilisateurs, interprète",en:"Observes users, interprets"}}]},{step:7,title:{fr:"Rétro & documentation",en:"Retro & documentation"},nodes:[{actor:"ai",label:{fr:"Specs d’interaction, mise à jour du Design System",en:"Interaction specs, Design System updates"}},{actor:"human",label:{fr:"Valide ce qui entre dans la connaissance commune",en:"Validates what enters the shared knowledge"}}]}]}]},hd=[{id:"profile",question:{fr:"Résume le profil d'Anne-Sophie et ce qui la différencie en 30 secondes",en:"Summarise Anne-Sophie's profile and what sets her apart in 30 seconds"},chip:{fr:"Son profil en 30 secondes",en:"Her profile in 30 seconds"},keywords:[["profil",4],["qui est",4],["who is",4],["present",3],["pitch",4],["differenci",4],["valeur ajoutee",4],["added value",4],["summar",3],["resum",2],["30 secondes",4],["30 seconds",4],["about her",4],["sets her apart",5],["pourquoi elle",4],["why her",4],["why hire",5],["recrut",4],["embauch",4],["hire",4],["anne sophie",2]],answer:{fr:{standard:`**Anne-Sophie Leroy** est Product Designer — UX/UI, Design Ops & AI Workflows, basée à Paris.

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
- **Specific criteria** (contract, availability): best discussed directly with her by email.`}},followUps:["availability","softskills","profile"],actions:["email","cv"]},{id:"bnp",question:{fr:"Comment a-t-elle cadré le travail d'une équipe design augmentée par l'IA chez BNP Paribas CIB ?",en:"How did she frame the work of an AI-augmented design team at BNP Paribas CIB?"},chip:{fr:"Cadrer une équipe UX augmentée",en:"Framing an AI-augmented UX team"},keywords:[["bnp",6],["paribas",6],["cib",5],["credit",5],["banque",4],["bank",4],["mc2i",4],["conseil",3],["consult",3],["charge cognitive",4],["cognitive load",4],["actuel",2]],answer:{fr:{standard:`### Contexte
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
- **Watch out**: a good first draft creates an illusion of ease.`}},attachment:"skill",flow:"ux",anchors:!0,followUps:["covenant","ai","designsystem"]},{id:"covenant",question:{fr:"Montre-moi l'étude de cas Covenant monitoring : comment a-t-elle conçu un suivi des covenants assisté par IA pour une banque d'investissement ?",en:"Show me the Covenant monitoring case study: how did she design AI-assisted covenant monitoring for an investment bank?"},chip:{fr:"Étude de cas Covenant monitoring",en:"Covenant monitoring case study"},keywords:[["covenant",8],["covenants",8],["monitoring",4],["compliance certificate",6],["breach",5],["waiver",4],["matching",4],["rapprochement",4],["extraction",4],["mycreditapp",5],["workspace ai",5],["suivi des engagements",5],["ecran",3],["screen",3],["maquette",4],["mockup",4],["prototype",3],["ux case",5],["cas ux",5]],answer:{fr:{standard:`### Contexte
Dans une **banque d'investissement**, le métier Trade Finance contrôle ses covenants, certificat après certificat. Un projet d'un mois, en binôme avec un développeur.

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
- **Piste suivante** : afficher un indice de confiance de l'IA pour chaque correspondance proposée.`,express:`- **Contexte** : contrôle des covenants de Trade Finance dans une banque d'investissement.
- **Problématique** : un contrôle manuel, dans un outil séparé, avec relances, délais et erreurs de saisie.
- **Son rôle** : Product Designer, en binôme avec un développeur — ateliers, parcours, prototype avec Claude Code.
- **Solution** : l'IA lit et propose, l'analyste valide chaque valeur face à sa source ; certificat manquant, correspondances multiples, échec de l'IA et doublons sont traités.
- **Résultat** : ==17 écrans==, première itération livrée, approche réutilisée.`,deep:`### Design Lead
- **Deux entrées, un seul parcours** : email ou dépôt manuel aboutissent au même stepper.
- **Maître-détail** : covenants extraits à gauche, donnée extraite et covenant du contrat côte à côte à droite.
- **Les états d'erreur font partie du design** : chaque étape asynchrone a son attente, son échec et sa sortie manuelle.
- **Du cas au pattern** : extraction IA, soumission par email et tags de statut repris tels quels sur un autre module.`},en:{standard:`### Context
At an **investment bank**, the Trade Finance business checks its covenants, certificate after certificate. A one-month project, paired with one developer.

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
- **Next path**: show an AI confidence score for each suggested match.`,express:`- **Context**: Trade Finance covenant control at an investment bank.
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
- **Short loops**: iterative user testing guided every design trade-off.`}},followUps:["grdf","bnp","impact"]},{id:"grdf",question:{fr:"Comment a-t-elle mené la refonte éco-conçue et accessible de la plateforme GRDF (Act4Gaz → justdecarb.grdf.fr) ?",en:"How did she lead the eco-designed, accessible redesign of the GRDF platform (Act4Gaz → justdecarb.grdf.fr)?"},chip:{fr:"GRDF — éco-conception & RGAA",en:"GRDF — eco-design & RGAA"},keywords:[["grdf",6],["rgaa",5],["accessib",5],["a11y",5],["wcag",4],["eco",3],["ecoindex",6],["eco conception",5],["eco design",5],["ecoconcep",5],["justdecarb",6],["act4gaz",6],["rebranding",4],["environnement",4],["environment",4],["sobriete",4],["green",3],["energie",3],["energy",3],["handicap",4],["inclusi",3]],answer:{fr:{standard:`### Contexte
De janvier à mai 2024, Anne-Sophie est UX UI Designer pour **GRDF** (via mc2i), sur la plateforme **Act4Gaz**.

### Problématique
Refondre et rebrander la plateforme, devenue **justdecarb.grdf.fr**, pour en faire une expérience performante, accessible (RGAA) et éco-conçue.

### Son rôle
Elle réalise les audits, définit la nouvelle identité graphique, crée le Design System et conçoit les maquettes et les prototypes.

### La solution
- **Audits** UX et accessibilité (RGAA) de l'existant.
- **Nouvelle identité graphique** pour la plateforme.
- **Design System dédié**, sobre et accessible.
- **Maquettes mobile-first**.

### Impact
- ==Note C EcoIndex== — performance environnementale.
- Conformité ==RGAA== garantie.`,express:`- **Contexte** : plateforme Act4Gaz de GRDF, devenue **justdecarb.grdf.fr** (janv. – mai 2024).
- **Problématique** : refondre et rebrander, avec une exigence d'accessibilité (RGAA) et d'éco-conception.
- **Son rôle** : audits, identité graphique, Design System, maquettes et prototypes.
- **Solution** : audits UX & RGAA, nouvelle identité, Design System sobre et accessible, mobile-first.
- **Impact** : ==Note C EcoIndex== + conformité ==RGAA==.`,deep:`### Zoom méthodologie
- **L'audit comme cahier des charges** : les audits UX et RGAA ont défini les contraintes du Design System avant la première maquette.
- **Sobriété par le système** : un Design System volontairement sobre limite ce qui est chargé et affiché — c'est lui qui porte la performance EcoIndex.
- **Accessibilité native** : les règles RGAA sont intégrées aux composants plutôt que vérifiées après coup.
- **Mobile-first** : concevoir d'abord pour le petit écran force à hiérarchiser le contenu.`},en:{standard:`### Context
From January to May 2024, Anne-Sophie was a UX/UI Designer for **GRDF** (through mc2i), on the **Act4Gaz** platform.

### The problem
Redesign and rebrand the platform, now **justdecarb.grdf.fr**, into an experience that performs well, is accessible (RGAA) and eco-designed.

### Her role
She ran the audits, defined the new visual identity, created the Design System and designed the mockups and prototypes.

### The solution
- UX and accessibility (RGAA) **audits** of the existing platform.
- **New visual identity** for the platform.
- **Dedicated Design System**, lean and accessible.
- **Mobile-first mockups**.

### Impact
- ==EcoIndex grade C== — environmental performance.
- ==RGAA== compliance ensured.`,express:`- **Context**: GRDF's Act4Gaz platform, now **justdecarb.grdf.fr** (Jan – May 2024).
- **Problem**: redesign and rebrand, with accessibility (RGAA) and eco-design requirements.
- **Her role**: audits, visual identity, Design System, mockups and prototypes.
- **Solution**: UX & RGAA audits, new identity, lean accessible Design System, mobile-first.
- **Impact**: ==EcoIndex grade C== + ==RGAA== compliance.`,deep:`### Methodology zoom
- **Audit as the brief**: the UX and RGAA audits defined the Design System's constraints before the first mockup.
- **Lean by system**: a deliberately lean Design System limits what gets loaded and displayed — that is what carries the EcoIndex performance.
- **Accessibility built in**: RGAA rules live inside the components rather than being checked afterwards.
- **Mobile-first**: designing for the small screen first forces content prioritisation.`}},followUps:["covenant","designsystem","impact"]},{id:"cdc",question:{fr:"Quelle a été sa démarche pour refondre un outil métier de gestion de carrière à la Caisse des Dépôts ?",en:"What was her approach to redesigning a career-management business tool at Caisse des Dépôts?"},chip:{fr:"Caisse des Dépôts — Outil métier",en:"Caisse des Dépôts — Business tool"},keywords:[["caisse des depots",6],["cdc",5],["outil metier",5],["business tool",5],["emaj",6],["rh",4],["hr",4],["carriere",4],["career management",5],["ressources humaines",5],["human resources",5],["outil interne",4],["internal tool",4],["atelier",3],["workshop",3],["co creation",4],["secteur public",4],["public sector",4]],answer:{fr:{standard:`### Contexte
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
- **Structured handoff**: \`.md\` specs consistent with the Design System, from prototype to development.`}},attachment:"ds",followUps:["ai","grdf","stack"]},{id:"portfoliods",question:{fr:"Peut-on voir le Design System de ce portfolio ?",en:"Can I see this portfolio’s Design System?"},chip:{fr:"Le Design System du portfolio",en:"The portfolio’s Design System"},keywords:[["design system du portfolio",9],["design system de ce portfolio",9],["design system du site",9],["design system de ce site",9],["design system of this portfolio",9],["portfolio design system",9],["design system of this site",9],["design system",3],["regles de design",4],["design rules",4]],answer:{fr:{standard:`Oui : ce portfolio a son propre Design System, et il existe sous deux formes qui disent la même chose.

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
- **Full CV**: button below.`}},followUps:["profile","impact","contact"],actions:["cv","email"]},{id:"projects",question:{fr:"Quels sont ses principaux projets ?",en:"What are her main projects?"},chip:{fr:"Ses projets",en:"Her projects"},keywords:[["projet",5],["project",5],["etude de cas",6],["etudes de cas",6],["case stud",6],["portfolio",5],["realisation",5],["mission",4],["client",4],["travaux",4],["her work",5],["reference",4]],answer:{fr:{standard:`Quatre études de cas, à explorer dans la barre latérale ou via les questions ci-dessous.

| Projet | Sujet | Impact |
|---|---|---|
| **BNP Paribas CIB** | Cadrer une équipe UX augmentée par l'IA | ==+5 modules sur 17== · ==~1 500 utilisateurs== |
| **Banque d'investissement** | Covenant monitoring assisté par IA | Parcours avant / après · prototype navigable |
| **GRDF** | Refonte éco-conçue justdecarb.grdf.fr | ==Note C EcoIndex== + RGAA |
| **Caisse des Dépôts** | Refonte d'un outil métier de gestion de carrière | Entretiens, ateliers de co-création, tests utilisateurs |`,express:`- **BNP Paribas CIB** : équipe UX augmentée par l'IA — ==+5 modules sur 17==.
- **Covenant monitoring** : parcours avant / après, prototype navigable.
- **GRDF** : refonte éco-conçue — ==Note C EcoIndex== + RGAA.
- **Caisse des Dépôts** : refonte d'un outil métier de gestion de carrière.`},en:{standard:`Four case studies, to explore in the sidebar or through the questions below.

| Project | Topic | Impact |
|---|---|---|
| **BNP Paribas CIB** | Framing an AI-augmented UX team | ==+5 of 17 modules== · ==~1,500 users== |
| **Investment bank** | AI-assisted covenant monitoring | Before / after journey · navigable prototype |
| **GRDF** | Eco-designed redesign of justdecarb.grdf.fr | ==EcoIndex grade C== + RGAA |
| **Caisse des Dépôts** | Redesign of a career-management business tool | Interviews, co-creation workshops, user testing |`,express:`- **BNP Paribas CIB**: AI-augmented UX team — ==+5 of 17 modules==.
- **Covenant monitoring**: before / after journey, navigable prototype.
- **GRDF**: eco-designed redesign — ==EcoIndex grade C== + RGAA.
- **Caisse des Dépôts**: redesign of a career-management business tool.`}},followUps:["bnp","covenant","grdf","cdc"]},{id:"greeting",question:{fr:"Bonjour !",en:"Hello!"},keywords:[["bonjour",3],["hello",3],["salut",3],["hi",3],["hey",3],["coucou",3],["bonsoir",3],["good morning",3],["ca va",3],["how are you",3]],answer:{fr:{standard:`Bonjour ! Je suis l'assistant portfolio d'**Anne-Sophie Leroy**, Product Designer spécialisée en UX/UI, Design Ops et workflows IA.

Je peux vous parler de son parcours, de ses projets (BNP Paribas CIB, Kering, GRDF, Caisse des Dépôts), de ses compétences ou de sa façon d'intégrer l'IA dans le design. Par où souhaitez-vous commencer ?`,express:"Bonjour ! Posez-moi une question sur **Anne-Sophie Leroy** : profil, projets, compétences, IA & Design Ops."},en:{standard:`Hello! I'm the portfolio assistant of **Anne-Sophie Leroy**, a Product Designer specialising in UX/UI, Design Ops and AI workflows.

I can tell you about her background, her projects (BNP Paribas CIB, Kering, GRDF, Caisse des Dépôts), her skills or how she brings AI into design. Where would you like to start?`,express:"Hello! Ask me anything about **Anne-Sophie Leroy**: profile, projects, skills, AI & Design Ops."}},followUps:["profile","projects","ai"]},{id:"thanks",question:{fr:"Merci !",en:"Thank you!"},keywords:[["merci",5],["thanks",5],["thank",5],["super",2],["parfait",3],["perfect",3],["great",2],["au revoir",4],["bye",4]],answer:{fr:{standard:"Avec plaisir ! Si le profil d'Anne-Sophie vous intéresse, le plus simple est de lui écrire directement — elle sera ravie d'échanger.",express:"Avec plaisir ! Pour aller plus loin, écrivez directement à Anne-Sophie."},en:{standard:"You're welcome! If Anne-Sophie's profile is a match, the simplest next step is to write to her directly — she will be glad to talk.",express:"You're welcome! To go further, write to Anne-Sophie directly."}},actions:["email","cv"]},{id:"fallback",question:{fr:"",en:""},keywords:[],answer:{fr:{standard:"Je n'ai pas d'information fiable sur ce point, et je préfère ne rien inventer sur Anne-Sophie.\n\n### Ce que je sais faire\n- **Présenter son profil** et ce qui la différencie.\n- **Détailler ses projets** : BNP Paribas CIB, Groupe Kering, GRDF, Caisse des Dépôts.\n- **Expliquer sa pratique** : Design Ops, Design System, *AI Skills*, *vibecoding*.\n- **Répondre aux questions pratiques** : formation, langues, outils, localisation.\n\nAstuce : tapez `/` pour les commandes rapides (`/cv`, `/projets`, `/skills`, `/contact`, `/stack`). Et pour toute question précise, Anne-Sophie vous répondra directement.",express:"Je n'ai pas cette information. Essayez une question sur son **profil**, ses **projets**, ses **compétences** ou l'**IA** — ou contactez-la directement."},en:{standard:"I don't have reliable information on that, and I'd rather not make anything up about Anne-Sophie.\n\n### What I can do\n- **Present her profile** and what sets her apart.\n- **Detail her projects**: BNP Paribas CIB, Kering Group, GRDF, Caisse des Dépôts.\n- **Explain her practice**: Design Ops, Design System, *AI Skills*, *vibecoding*.\n- **Answer practical questions**: education, languages, tools, location.\n\nTip: type `/` for quick commands (`/cv`, `/projects`, `/skills`, `/contact`, `/stack`). And for any specific question, Anne-Sophie will answer you directly.",express:"I don't have that information. Try a question about her **profile**, **projects**, **skills** or **AI** — or contact her directly."}},followUps:["profile","projects","ai"],actions:["cv","email"]}],Nl=Object.fromEntries(hd.map(e=>[e.id,e]));function Mt(e){return Nl[e]??Nl.fallback}function gd(e,t,n){const r=Mt(e).answer[t];return n==="express"?r.express:n==="deepdive"&&r.deep?`${r.standard}

${r.deep}`:r.standard}function qf(e){return e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/\bj['’]ai\b/g," ").replace(/[^a-z0-9€]+/g," ").trim()}function zf(e,t){const n=Array.from({length:e.length+1},(r,s)=>[s,...Array(t.length).fill(0)]);for(let r=1;r<=t.length;r++)n[0][r]=r;for(let r=1;r<=e.length;r++)for(let s=1;s<=t.length;s++)n[r][s]=Math.min(n[r-1][s]+1,n[r][s-1]+1,n[r-1][s-1]+(e[r-1]===t[s-1]?0:1));return n[e.length][t.length]}function Uf(e,t){return e===t||t.length>=4&&e.startsWith(t)?!0:t.length>=6&&e.length>=6&&Math.abs(e.length-t.length)<=1?zf(e,t)<=1:!1}const Rf={"/cv":"cv","/projets":"projects","/projects":"projects","/projet":"projects","/skills":"skills","/competences":"skills","/contact":"contact","/stack":"stack","/designsystem":"portfoliods","/design-system":"portfoliods","/ds":"portfoliods"};function Mf(e){const t=e.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").split(/\s+/)[0];return t.startsWith("/")?Rf[t]??"fallback":null}const Ff=3;function _f(e){const t=Mf(e);if(t)return t;const n=qf(e);if(!n)return"fallback";const r=` ${n} `,s=n.split(" ");let i="fallback",a=0;for(const l of hd){let u=0;for(const[d,f]of l.keywords)(d.includes(" ")?r.includes(` ${d}`):s.some(h=>Uf(h,d)))&&(u+=f);u>a&&(a=u,i=l.id)}return a>=Ff?i:"fallback"}function xd(e){return e.match(/\S+\s*/g)??[]}const Al={ai:{icon:ks,chip:"bg-[var(--ai-tint)] text-[var(--ai-text)]",dot:"bg-[var(--ai)]"},human:{icon:Ss,chip:"border border-rule text-ink",dot:"bg-ink"},system:{icon:gf,chip:"bg-surface-2 text-ink",dot:"bg-muted"},offline:{icon:df,chip:"border border-line text-muted",dot:"border border-muted"}};function vd({id:e,lang:t,board:n,cta:r}){const s=he[t],[i,a]=C.useState(n.defaultView??n.journeys[0].id),l=n.journeys.find(f=>f.id===i)??n.journeys[0],u=f=>{var g;return((g=n.actors)==null?void 0:g[t][f])??s.actors[f]},d=[...new Set(l.stages.flatMap(f=>f.nodes.map(g=>g.actor)))];return o.jsxs("section",{id:e,className:"rise mb-7 scroll-mt-16 overflow-hidden rounded-3xl border border-line bg-elevated",children:[o.jsxs("header",{className:"flex flex-wrap items-center gap-x-4 gap-y-3 border-b border-line px-5 py-4",children:[o.jsxs("div",{className:"w-full min-w-0 sm:w-auto sm:flex-1",children:[o.jsx("p",{className:"eyebrow text-muted",children:n.eyebrow[t]}),o.jsx("h3",{className:"mt-1 font-display text-[1.15rem] font-semibold leading-tight tracking-[-0.02em] text-ink",children:n.title[t]})]}),r&&o.jsxs("button",{onClick:r.onClick,className:"btn-primary !py-2.5",children:[r.label," ",o.jsx(ma,{size:14,className:"fill-current","aria-hidden":!0})]})]}),n.journeys.length>1&&o.jsxs("div",{className:"flex flex-wrap items-center gap-3 px-5 pt-4",children:[o.jsx("p",{className:"eyebrow flex-1 text-muted",children:s.detail}),o.jsx("div",{role:"group","aria-label":s.detail,className:"flex rounded-full border border-line p-0.5",children:n.journeys.map(f=>o.jsx("button",{onClick:()=>a(f.id),"aria-pressed":i===f.id,className:`t-all rounded-full px-3.5 py-1 text-xs font-semibold ${i===f.id?"bg-ink text-bg":"text-muted hover:text-ink"}`,children:f.label[t]},f.id))})]}),o.jsx("ol",{className:"rise px-5 py-2",children:l.stages.map((f,g)=>o.jsxs("li",{className:"relative flex gap-4 py-3",children:[g<l.stages.length-1&&o.jsx("span",{className:"absolute bottom-[-12px] left-[15px] top-[44px] w-px bg-line","aria-hidden":!0}),o.jsx("span",{className:`relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${f.step?l.muted?"bg-ink text-bg":"bg-accent text-accent-fg":"border border-rule bg-elevated text-ink"}`,"aria-hidden":!0,children:f.step??(g===0?o.jsx(mo,{size:14}):o.jsx(wt,{size:14}))}),o.jsxs("div",{className:"min-w-0 flex-1",children:[o.jsxs("p",{className:"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold leading-snug text-ink",children:[f.step&&o.jsxs("span",{className:"eyebrow text-accent-text",children:[s.step," ",f.step]}),f.title[t],f.repeat&&o.jsxs("span",{className:"tag border border-rule text-ink",children:[o.jsx(od,{size:12,"aria-hidden":!0})," ",f.repeat[t]]})]}),o.jsx("ul",{className:"mt-2 flex flex-wrap items-stretch gap-x-1.5 gap-y-2",children:f.nodes.map((h,x)=>{const v=Al[h.actor],y=v.icon;return o.jsxs("li",{className:"flex items-stretch gap-1.5",children:[x>0&&o.jsx("span",{className:"flex items-center px-1 text-xs italic text-muted","aria-hidden":!f.alternatives,children:f.alternatives?s.or:o.jsx(mr,{size:14})}),o.jsxs("span",{className:"flex max-w-[15rem] flex-col gap-1.5 rounded-2xl border border-line bg-bg px-3 py-2.5",children:[o.jsxs("span",{className:`tag w-fit ${v.chip}`,children:[o.jsx(y,{size:12,"aria-hidden":!0})," ",u(h.actor)]}),o.jsx("span",{className:"text-[12.5px] font-light leading-snug text-ink",children:h.label[t]})]})]},h.label.en)})}),f.frictions&&o.jsx("ul",{className:"mt-2.5 flex flex-wrap gap-1.5","aria-label":s.friction,children:f.frictions.map(h=>o.jsxs("li",{className:"tag bg-[var(--warn-tint)] text-[var(--warn-text)]",children:[o.jsx(ld,{size:12,"aria-hidden":!0})," ",h[t]]},h.en))})]})]},f.title.en))},i),o.jsx("footer",{className:"flex flex-wrap gap-x-5 gap-y-1.5 border-t border-line px-5 py-3",children:d.map(f=>o.jsxs("span",{className:"inline-flex items-center gap-2 text-xs text-muted",children:[o.jsx("span",{className:`h-2 w-2 rounded-full ${Al[f].dot}`,"aria-hidden":!0})," ",u(f)]},f))})]})}const Of=/(\*\*[^*]+\*\*|==[^=]+==|`[^`]+`|\[[^\]]+\]\([^)\s]+\)|\*[^*\s][^*]*\*)/g;function Bf(e){return e.replace(/\*\*|==|`|\*/g,"")}function Tt(e){return e.split(Of).map((t,n)=>{if(!t)return null;if(t.startsWith("**")&&t.endsWith("**")&&t.length>4)return o.jsx("strong",{className:"font-semibold text-ink",children:Tt(t.slice(2,-2))},n);if(t.startsWith("==")&&t.endsWith("==")&&t.length>4)return o.jsx("span",{className:"mx-0.5 inline-block whitespace-nowrap rounded-full bg-olive-tint px-2.5 py-0.5 text-[0.86em] font-semibold text-olive-text",children:t.slice(2,-2)},n);if(t.startsWith("`")&&t.endsWith("`")&&t.length>2)return o.jsx("code",{className:"rounded-md bg-accent-tint px-1.5 py-0.5 font-mono text-[0.85em] text-accent-text",children:t.slice(1,-1)},n);const r=t.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);if(r){const s=r[2].startsWith("http");return o.jsx("a",{href:r[2],...s?{target:"_blank",rel:"noopener noreferrer"}:{},className:"t-all break-words font-medium text-accent-text underline decoration-1 underline-offset-4 hover:decoration-2",children:r[1]},n)}return t.startsWith("*")&&t.endsWith("*")&&t.length>2?o.jsx("em",{children:t.slice(1,-1)},n):o.jsx(C.Fragment,{children:Bf(t)},n)})}function Vf(e){return e.trim().replace(/^\||\|$/g,"").split("|").map(t=>t.trim())}function $t({text:e,anchorPrefix:t,embeds:n}){const r=e.split(`
`),s=[];let i=0,a=0,l=0;for(;i<r.length;){const u=r[i];if(!u.trim()){i++;continue}if(u.trimStart().startsWith("[[")){const x=u.trim().match(/^\[\[([a-z-]+)\]\]$/);x&&(n!=null&&n[x[1]])&&s.push(o.jsx(C.Fragment,{children:n[x[1]]},a++)),i++;continue}if(u.startsWith("```")){const x=[];for(i++;i<r.length&&!r[i].startsWith("```");)x.push(r[i++]);i++,s.push(o.jsx("pre",{className:"my-4 overflow-x-auto rounded-2xl bg-code-bg px-4 py-3.5 font-mono text-[12.5px] leading-relaxed text-code-ink",children:x.join(`
`)},a++));continue}if(u.trimStart().startsWith("|")){const x=[];for(;i<r.length&&r[i].trimStart().startsWith("|");)/^\s*\|[\s|:-]+\|?\s*$/.test(r[i])||x.push(Vf(r[i])),i++;if(x.length===0)continue;const[v,...y]=x;s.push(o.jsx("div",{className:"my-4 overflow-x-auto rounded-2xl border border-line bg-elevated",children:o.jsxs("table",{className:"w-full min-w-[420px] border-collapse text-left text-sm",children:[o.jsx("thead",{children:o.jsx("tr",{className:"border-b border-rule",children:v.map((k,p)=>o.jsx("th",{className:"eyebrow px-4 py-3 font-semibold text-ink",children:Tt(k)},p))})}),o.jsx("tbody",{children:y.map((k,p)=>o.jsx("tr",{className:"border-t border-line align-top first:border-t-0",children:k.map((c,m)=>o.jsx("td",{className:"px-4 py-2.5 leading-relaxed",children:Tt(c)},m))},p))})]})},a++));continue}const d=u.match(/^(#{1,4})\s+(.*)$/);if(d){s.push(o.jsx("h3",{id:t?`${t}-s${l++}`:void 0,className:"scroll-mt-16 mb-2 mt-7 font-display text-[1.2rem] font-semibold leading-tight tracking-[-0.02em] text-ink first:mt-0",children:Tt(d[2])},a++)),i++;continue}const f=x=>/^\s*[-•]\s+/.test(x),g=x=>/^\s*\d+\.\s+/.test(x);if(f(u)||g(u)){const x=g(u),v=x?g:f,y=[];for(;i<r.length&&v(r[i]);)y.push(r[i].replace(/^\s*(?:[-•]|\d+\.)\s+/,"")),i++;s.push(x?o.jsx("ol",{className:"my-3 space-y-2",children:y.map((k,p)=>o.jsxs("li",{className:"flex gap-3 leading-relaxed",children:[o.jsxs("span",{className:"w-6 shrink-0 font-display text-[0.85rem] font-medium italic leading-[1.9] text-accent-text",children:["0",p+1]}),o.jsx("span",{className:"min-w-0",children:Tt(k)})]},p))},a++):o.jsx("ul",{className:"my-3 space-y-2",children:y.map((k,p)=>o.jsxs("li",{className:"flex gap-3 leading-relaxed",children:[o.jsx("span",{className:"mt-[0.62em] h-1.5 w-1.5 shrink-0 rounded-full bg-vermillion","aria-hidden":!0}),o.jsx("span",{className:"min-w-0",children:Tt(k)})]},p))},a++));continue}const h=[];for(;i<r.length&&r[i].trim()&&!r[i].startsWith("```")&&!r[i].trimStart().startsWith("[[")&&!r[i].trimStart().startsWith("|")&&!/^#{1,4}\s/.test(r[i])&&!f(r[i])&&!g(r[i]);)h.push(r[i++]);s.push(o.jsx("p",{className:"my-3 leading-relaxed first:mt-0 last:mb-0",children:Tt(h.join(" "))},a++))}return o.jsx("div",{className:"text-[15px] font-normal text-ink",children:s})}function Kn({size:e=40}){return o.jsx("span",{className:"monogram",style:{width:e,height:e,fontSize:Math.max(9,e*.25)},"aria-hidden":!0,children:"ASL"})}const $f={fr:{kicker:"Dépôt UX · Design",title:"Le fichier d’entrée de toutes les règles IA",goal:"Objectif : que l’IA sache où chercher, sans charger tout le dépôt.",parts:[{title:"Rôle & mission de l’IA",detail:"Rôle, missions, posture"},{title:"Normes & formats de fichiers",detail:"Guidelines de composants, tokens, branches"},{title:"Directives UX & Design System",detail:"Accessibilité, UX writing, gestion des états"},{title:"Directives Git & workflow",detail:"Convention de commit, demande d’intégration"},{title:"Cartographie du dépôt",detail:"Où se trouve chaque type de contenu"}]},en:{kicker:"UX · Design repository",title:"The entry file for all AI rules",goal:"Goal: the AI knows where to look, without loading the whole repository.",parts:[{title:"AI role & mission",detail:"Role, missions, posture"},{title:"File standards & formats",detail:"Component guidelines, tokens, branches"},{title:"UX & Design System directives",detail:"Accessibility, UX writing, state handling"},{title:"Git & workflow directives",detail:"Commit convention, pull request"},{title:"Repository map",detail:"Where each type of content lives"}]}},Wf=[{group:{fr:"Design System",en:"Design System"},items:["template_guidelines.md","tokens.md"]},{group:{fr:"Composants",en:"Components"},items:["styles_hybride.md","component_guidelines.md"]},{group:{fr:"Utilisateurs & règles",en:"Users & rules"},items:["personas/","business-rules/"]},{group:{fr:"Livrables UX",en:"UX deliverables"},items:["sitemap/","user-flows/","journeys/","ux-specs/"]},{group:{fr:"Références",en:"Reference"},items:["benchmark/","decisions/","context/"]}],Gf={fr:{tree:"Arborescence par usage",auto:"Automatisation",autoDetail:"Synchronisation des tokens, demandes d’intégration préparées pour les développeurs",dev:"Dépôt technique · Devs",devDetail:"Consomme ce que le dépôt UX produit",preview:"Lien de prévisualisation",previewDetail:"Chaque demande d’intégration génère une adresse où voir le prototype"},en:{tree:"A tree organised by use",auto:"Automation",autoDetail:"Token sync, pull requests prepared for developers",dev:"Technical repository · Devs",devDetail:"Consumes what the UX repository produces",preview:"Preview link",previewDetail:"Every pull request generates an address where the prototype can be seen"}};function Hf({name:e}){const n=e.endsWith(".md")?yr:td;return o.jsxs("li",{className:"inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-2.5 py-1 font-mono text-[11px] text-ink",children:[o.jsx(n,{size:11,className:"shrink-0 text-muted","aria-hidden":!0})," ",e]})}function Xf({lang:e}){const t=$f[e],n=Gf[e];return o.jsxs("figure",{className:"my-5 overflow-hidden rounded-3xl border border-line bg-elevated",children:[o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2",children:[o.jsxs("div",{className:"border-b border-line p-5 sm:border-b-0 sm:border-r",children:[o.jsx("p",{className:"eyebrow text-muted",children:t.kicker}),o.jsxs("p",{className:"mt-2 inline-flex items-center gap-2 font-mono text-sm font-semibold text-accent-text",children:[o.jsx(yr,{size:14,"aria-hidden":!0})," CLAUDE.md"]}),o.jsx("p",{className:"mt-1 text-[13px] font-medium leading-snug text-ink",children:t.title}),o.jsx("ol",{className:"mt-4 space-y-2.5",children:t.parts.map((r,s)=>o.jsxs("li",{className:"flex gap-2.5",children:[o.jsxs("span",{className:"font-display text-[12px] font-medium italic leading-[1.5] text-accent-text",children:["0",s+1]}),o.jsxs("span",{className:"min-w-0",children:[o.jsx("span",{className:"block text-[13px] font-semibold leading-snug text-ink",children:r.title}),o.jsx("span",{className:"block text-[12px] font-light leading-snug text-muted",children:r.detail})]})]},r.title))}),o.jsx("p",{className:"mt-4 border-t border-line pt-3 text-[12px] font-medium leading-snug text-olive-text",children:t.goal})]}),o.jsxs("div",{className:"p-5",children:[o.jsx("p",{className:"eyebrow text-muted",children:n.tree}),o.jsx("ul",{className:"mt-3 space-y-3",children:Wf.map(r=>o.jsxs("li",{children:[o.jsx("p",{className:"mb-1.5 text-[12px] font-semibold text-ink",children:r.group[e]}),o.jsx("ul",{className:"flex flex-wrap gap-1.5",children:r.items.map(s=>o.jsx(Hf,{name:s},s))})]},r.group.en))})]})]}),o.jsxs("div",{className:"flex flex-col items-stretch gap-2 border-t border-line p-5 sm:flex-row sm:items-center",children:[o.jsxs("div",{className:"flex flex-1 items-start gap-2.5 rounded-2xl border border-line bg-bg p-3",children:[o.jsx(ff,{size:14,className:"mt-0.5 shrink-0 text-olive-text","aria-hidden":!0}),o.jsxs("p",{className:"min-w-0 text-[12px] leading-snug",children:[o.jsx("span",{className:"block font-semibold text-ink",children:n.auto}),o.jsx("span",{className:"font-light text-muted",children:n.autoDetail})]})]}),o.jsxs("span",{className:"flex justify-center text-muted","aria-hidden":!0,children:[o.jsx(mr,{size:16,className:"hidden sm:block"}),o.jsx(mo,{size:16,className:"sm:hidden"})]}),o.jsxs("div",{className:"flex flex-1 items-start gap-2.5 rounded-2xl border border-line bg-bg p-3",children:[o.jsx(td,{size:14,className:"mt-0.5 shrink-0 text-muted","aria-hidden":!0}),o.jsxs("p",{className:"min-w-0 text-[12px] leading-snug",children:[o.jsx("span",{className:"block font-semibold text-ink",children:n.dev}),o.jsx("span",{className:"font-light text-muted",children:n.devDetail})]})]}),o.jsxs("span",{className:"flex justify-center text-muted","aria-hidden":!0,children:[o.jsx(mr,{size:16,className:"hidden sm:block"}),o.jsx(mo,{size:16,className:"sm:hidden"})]}),o.jsxs("div",{className:"flex flex-1 items-start gap-2.5 rounded-2xl border border-line bg-bg p-3",children:[o.jsx(lf,{size:14,className:"mt-0.5 shrink-0 text-muted","aria-hidden":!0}),o.jsxs("p",{className:"min-w-0 text-[12px] leading-snug",children:[o.jsx("span",{className:"block font-semibold text-ink",children:n.preview}),o.jsx("span",{className:"font-light text-muted",children:n.previewDetail})]})]})]})]})}const Kf={fr:[{value:"+5 / 17",label:"modules optimisés par l’IA"},{value:"~1 500",label:"utilisateurs concernés"},{value:"1 an",label:"de delivery en banque régulée"}],en:[{value:"+5 / 17",label:"modules optimised with AI"},{value:"~1,500",label:"users reached"},{value:"1 year",label:"of delivery in regulated banking"}]};function yd({lang:e}){return o.jsx("ul",{className:"my-4 grid grid-cols-3 gap-2 sm:gap-3",children:Kf[e].map(t=>o.jsxs("li",{className:"rounded-2xl border border-line bg-elevated p-3 sm:p-4",children:[o.jsx("span",{className:"block font-display text-[1.35rem] font-semibold leading-none tracking-[-0.03em] text-ink sm:text-[1.7rem]",children:t.value}),o.jsx("span",{className:"mt-1.5 block text-[11.5px] font-light leading-snug text-muted sm:text-xs",children:t.label})]},t.label))})}const Qf={fr:[{title:"Source de vérité",text:"Réutiliser avant d’inventer. Diverger est une décision discutée."},{title:"Double bibliothèque en miroir",text:"Le composant de référence et sa copie lisible par l’IA."},{title:"Aucune valeur inventée",text:"Dimensions, couleurs et comportements viennent des sources réelles."},{title:"Boucle courte et revue",text:"De petits changements, revus à l’œil, sur une branche."}],en:[{title:"Source of truth",text:"Reuse before inventing. Diverging is a discussed decision."},{title:"Mirrored double library",text:"The reference component and its AI-readable copy."},{title:"No invented value",text:"Dimensions, colours and behaviours come from the real sources."},{title:"Short loop and review",text:"Small changes, reviewed by eye, on a branch."}]};function bd({lang:e}){return o.jsx("ol",{className:"my-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3",children:Qf[e].map((t,n)=>o.jsxs("li",{className:"flex gap-3 rounded-2xl border border-line bg-elevated p-4",children:[o.jsx("span",{className:"flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-fg",children:n+1}),o.jsxs("span",{className:"min-w-0",children:[o.jsx("span",{className:"block text-[13.5px] font-semibold leading-snug text-ink",children:t.title}),o.jsx("span",{className:"mt-1 block text-[12.5px] font-light leading-snug text-muted",children:t.text})]})]},t.title))})}const Zf={fr:[{role:"Lead Design",ai:"Cadre, standards, revues",human:"Pilote l’intention, arbitre"},{role:"UX UI Designer",ai:"Wireframes, parcours, prototypes",human:"Juge les générations"},{role:"Dev Front",ai:"Intégration, Design System",human:"Implémente"},{role:"Product Owner",ai:"Specs, priorisation",human:"Teste sur des prototypes autonomes"}],en:[{role:"Lead Design",ai:"Framework, standards, reviews",human:"Steers the intention, arbitrates"},{role:"UX UI Designer",ai:"Wireframes, flows, prototypes",human:"Judges the generations"},{role:"Front Dev",ai:"Integration, Design System",human:"Implements"},{role:"Product Owner",ai:"Specs, prioritisation",human:"Tests on standalone prototypes"}]},Yf=[yf,pf,sf,rf];function Jf({lang:e}){return o.jsx("ul",{className:"my-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3",children:Zf[e].map((t,n)=>{const r=Yf[n];return o.jsxs("li",{className:"rounded-2xl border border-line bg-elevated p-4",children:[o.jsxs("span",{className:"flex items-center gap-2 text-[13.5px] font-semibold text-ink",children:[o.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full bg-accent-tint text-accent-text",children:o.jsx(r,{size:14,"aria-hidden":!0})}),t.role]}),o.jsxs("span",{className:"mt-3 flex items-start gap-2 text-[12.5px] leading-snug text-ink",children:[o.jsxs("span",{className:"tag shrink-0 bg-[var(--ai-tint)] text-[var(--ai-text)]",children:[o.jsx(ks,{size:12,"aria-hidden":!0})," Claude"]}),o.jsx("span",{className:"font-light",children:t.ai})]}),o.jsx("span",{className:"mt-1.5 block text-[12.5px] font-medium leading-snug text-ink",children:t.human})]},t.role)})})}const eh={fr:{handoff:"Passer le relais sans perte",chips:["Fichier d’état tenu à jour","Prompt de reprise prêt à coller","Mémoire dans des fichiers"],onboarding:"Onboarding par un seul prompt",steps:["Contexte","Outils","Accès","Dépôts","Arborescence","Opérationnel"],note:"Opérationnel en quelques heures, en autonomie."},en:{handoff:"Handoffs without loss",chips:["Status file kept up to date","Ready-to-paste kickoff prompt","Memory kept in files"],onboarding:"Onboarding from a single prompt",steps:["Context","Tools","Access","Repositories","Tree","Operational"],note:"Operational within a few hours, autonomously."}};function th({lang:e}){const t=eh[e];return o.jsxs("div",{className:"my-4 rounded-2xl border border-line bg-elevated p-4",children:[o.jsx("p",{className:"eyebrow text-muted",children:t.handoff}),o.jsx("ul",{className:"mt-2.5 flex flex-wrap gap-1.5",children:t.chips.map(n=>o.jsx("li",{className:"tag bg-olive-tint text-olive-text",children:n},n))}),o.jsx("p",{className:"eyebrow mt-5 text-muted",children:t.onboarding}),o.jsx("ol",{className:"mt-2.5 flex flex-wrap items-center gap-x-1.5 gap-y-2",children:t.steps.map((n,r)=>{const s=r===t.steps.length-1;return o.jsxs("li",{className:"flex items-center gap-1.5",children:[o.jsxs("span",{className:`inline-flex items-center gap-1.5 rounded-full py-1 pl-1 pr-2.5 text-[12px] font-medium ${s?"bg-accent text-accent-fg":"border border-line bg-bg text-ink"}`,children:[o.jsx("span",{className:`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold ${s?"bg-accent-fg text-accent":"bg-accent-tint text-accent-text"}`,children:r+1}),n]}),!s&&o.jsx(mr,{size:12,className:"text-muted","aria-hidden":!0})]},n)})}),o.jsx("p",{className:"mt-2.5 text-[12px] font-light text-muted",children:t.note})]})}const nh={fr:{caption:"Même demande, sur un projet vide : une page complète de portfolio conversationnel",criterion:"Critère",without:"Sans le skill",withSkill:"Avec le skill",yes:"Respecté",no:"Non respecté",rows:[["Icône à droite du libellé dans chaque bouton",!1,!0],["Carte de suggestion à structure fixe",!1,!0],["Contact par email en bouton plein, CV en contour",!1,!0],["Chiffres clés en couleur neutre",!1,!0],["Aucun texte tout en majuscules",!0,!0],["Menu mobile en tiroir partiel",!0,!0],["Aucune couleur en dur, aucune ombre non prévue",!0,!0]],note:"Un essai par version. Sur le projet complet, le skill ne change rien : l’agent déduit les règles du code existant. Il sert donc là où le code ne montre pas encore l’exemple."},en:{caption:"Same request, on an empty project: a full conversational portfolio page",criterion:"Criterion",without:"Without the skill",withSkill:"With the skill",yes:"Met",no:"Not met",rows:[["Icon to the right of the label in every button",!1,!0],["Suggestion card with a fixed structure",!1,!0],["Email contact as filled button, CV outlined",!1,!0],["Key figures in neutral colour",!1,!0],["No all-caps text",!0,!0],["Mobile menu as a partial drawer",!0,!0],["No hard-coded colour, no unplanned shadow",!0,!0]],note:"One run per version. On the full project the skill changes nothing: the agent infers the rules from the existing code. So it is useful where the code does not yet show the example."}};function Il({ok:e,label:t}){return o.jsx("span",{role:"img","aria-label":t,className:`inline-flex h-5 w-5 items-center justify-center rounded-full ${e?"bg-olive-tint text-olive-text":"bg-[var(--warn-tint)] text-[var(--warn-text)]"}`,children:e?o.jsx(wt,{size:11,strokeWidth:3,"aria-hidden":!0}):o.jsx(Ye,{size:11,strokeWidth:3,"aria-hidden":!0})})}function rh({lang:e}){const t=nh[e],n=r=>`${t.rows.filter(s=>s[r]).length} / ${t.rows.length}`;return o.jsxs("figure",{className:"my-4 overflow-hidden rounded-2xl border border-line bg-elevated",children:[o.jsx("figcaption",{className:"eyebrow border-b border-line px-4 py-2.5 text-muted",children:t.caption}),o.jsxs("table",{className:"w-full border-collapse text-left",children:[o.jsx("thead",{children:o.jsxs("tr",{className:"border-b border-line",children:[o.jsx("th",{className:"eyebrow px-4 py-2.5 font-semibold text-ink",children:t.criterion}),o.jsx("th",{className:"eyebrow w-[4.5rem] px-2 py-2.5 text-center font-semibold text-ink sm:w-28",children:t.without}),o.jsx("th",{className:"eyebrow w-[4.5rem] px-2 py-2.5 text-center font-semibold text-ink sm:w-28",children:t.withSkill})]})}),o.jsxs("tbody",{children:[t.rows.map(([r,s,i])=>o.jsxs("tr",{className:"border-b border-line",children:[o.jsx("td",{className:"px-4 py-2 text-[12.5px] font-light leading-snug text-ink",children:r}),o.jsx("td",{className:"px-2 py-2 text-center",children:o.jsx(Il,{ok:s,label:s?t.yes:t.no})}),o.jsx("td",{className:"px-2 py-2 text-center",children:o.jsx(Il,{ok:i,label:i?t.yes:t.no})})]},r)),o.jsxs("tr",{children:[o.jsx("td",{className:"px-4 py-2.5"}),o.jsx("td",{className:"px-2 py-2.5 text-center font-display text-[1.05rem] font-semibold text-ink",children:n(1)}),o.jsx("td",{className:"px-2 py-2.5 text-center font-display text-[1.05rem] font-semibold text-ink",children:n(2)})]})]})]}),o.jsx("p",{className:"border-t border-line px-4 py-2.5 text-[12px] font-light leading-snug text-muted",children:t.note})]})}const sh={fr:{seen:"Ce qu’elle a vu",fixed:"La règle corrigée",items:[{seen:"Des chiffres clés qui se chevauchent et un trait qui ne sépare rien.",fixed:"Des consignes de mise en page : une grille, un trait seulement entre deux contenus."},{seen:"Deux boutons de même poids côte à côte, la couleur d’action au mauvais endroit.",fixed:"Une hiérarchie des actions : un bouton plein vert, l’autre en contour."},{seen:"Un menu sans bouton pour le replier, la langue écrite en toutes lettres.",fixed:"L’anatomie complète du menu et les deux versions du sélecteur."}]},en:{seen:"What she saw",fixed:"The rule she fixed",items:[{seen:"Key figures overlapping and a line that separated nothing.",fixed:"Layout guidance: a grid, and a line only between two contents."},{seen:"Two buttons of equal weight side by side, the action colour in the wrong place.",fixed:"An action hierarchy: one filled green button, the other outlined."},{seen:"A menu with no button to collapse it, the language written out in full.",fixed:"The full anatomy of the menu and both versions of the control."}]}};function ih({lang:e}){const t=sh[e];return o.jsx("ol",{className:"my-4 space-y-2",children:t.items.map((n,r)=>o.jsxs("li",{className:"flex gap-3 rounded-2xl border border-line bg-elevated p-4",children:[o.jsx("span",{className:"flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-fg",children:r+1}),o.jsxs("span",{className:"grid min-w-0 flex-1 grid-cols-1 gap-x-5 gap-y-2 sm:grid-cols-2",children:[o.jsxs("span",{className:"min-w-0",children:[o.jsx("span",{className:"eyebrow block text-muted",children:t.seen}),o.jsx("span",{className:"mt-0.5 block text-[12.5px] font-light leading-snug text-ink",children:n.seen})]}),o.jsxs("span",{className:"min-w-0",children:[o.jsx("span",{className:"eyebrow block text-muted",children:t.fixed}),o.jsx("span",{className:"mt-0.5 block text-[12.5px] font-medium leading-snug text-ink",children:n.fixed})]})]})]},n.seen))})}function wd({links:e,label:t}){const n=r=>{var s;return(s=document.getElementById(r))==null?void 0:s.scrollIntoView({behavior:"smooth",block:"start"})};return o.jsx("nav",{"aria-label":t,className:"sticky top-0 z-10 -mx-1 mb-5 bg-bg px-1 py-2.5",children:o.jsx("ul",{className:"flex gap-1.5 overflow-x-auto",children:e.map((r,s)=>o.jsx("li",{className:"shrink-0",children:o.jsxs("button",{onClick:()=>n(r.id),className:"t-all inline-flex items-center gap-1.5 rounded-full border border-line bg-elevated px-3 py-1.5 text-xs font-medium text-ink hover:border-rule hover:bg-surface-2",children:[o.jsxs("span",{className:"font-display text-[11px] italic opacity-60",children:["0",s+1]}),r.label]})},r.id))})})}const oh=`#!/usr/bin/env node
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
`,kd="asl-design-system/",Dl=[{path:"SKILL.md",content:ud},{path:"references/fondations.md",content:dd},{path:"references/styles.md",content:pd},{path:"references/composants.md",content:cd},{path:"scripts/check.mjs",content:oh}];function ah(e,t){return e==="---"?"text-code-muted":t?"text-[var(--code-key)]":/^#{1,3}\s/.test(e)?"font-semibold text-[var(--code-heading)]":(/^\s*- \[ \]/.test(e),"text-code-ink")}function lh({t:e}){const[t,n]=C.useState(0),[r,s]=C.useState(!1),i=Dl[t],a=i.content.replace(/\n$/,"").split(`
`),l=async()=>{try{await navigator.clipboard.writeText(i.content),s(!0),window.setTimeout(()=>s(!1),1600)}catch{}};let u=0;return o.jsxs("figure",{className:"rise my-6 overflow-hidden rounded-3xl border border-line bg-code-bg",children:[o.jsxs("div",{className:"flex flex-wrap items-center gap-2 border-b border-[var(--code-line)] px-4 py-3",children:[o.jsx(af,{size:15,className:"text-code-muted","aria-hidden":!0}),o.jsx("span",{className:"font-mono text-xs text-code-muted",children:kd}),o.jsx("span",{className:"ml-auto rounded-full bg-[var(--code-key-tint)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--code-key)]",children:e.skill.badge})]}),o.jsxs("div",{className:"flex items-center gap-1 overflow-x-auto border-b border-[var(--code-line)] px-2 pt-2",role:"tablist",children:[Dl.map((d,f)=>o.jsxs("button",{role:"tab","aria-selected":f===t,onClick:()=>n(f),className:`t-all flex shrink-0 items-center gap-1.5 rounded-t-xl px-3 py-2 font-mono text-xs ${f===t?"bg-[var(--code-line)] text-code-ink":"text-code-muted hover:text-code-ink"}`,children:[o.jsx(yr,{size:13,"aria-hidden":!0}),d.path]},d.path)),o.jsxs("button",{onClick:l,className:"t-all ml-auto mr-1 flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-code-muted hover:bg-[var(--code-line)] hover:text-code-ink",children:[r?e.skill.copied:e.skill.copy,r?o.jsx(wt,{size:13,"aria-hidden":!0}):o.jsx(ed,{size:13,"aria-hidden":!0})]})]}),o.jsx("pre",{className:"max-h-[380px] overflow-auto py-3 font-mono text-[12.5px] leading-[1.65]",role:"tabpanel",children:a.map((d,f)=>{const g=d==="---",h=t===0&&u===1&&!g;return g&&u++,o.jsxs("div",{className:"flex px-4 hover:bg-[var(--code-hover)]",children:[o.jsx("span",{className:"w-8 shrink-0 select-none pr-3 text-right text-code-muted opacity-60","aria-hidden":!0,children:f+1}),o.jsx("span",{className:`min-w-0 whitespace-pre-wrap break-words ${ah(d,h)}`,children:d||" "})]},f)})}),o.jsx("figcaption",{className:"border-t border-[var(--code-line)] px-4 py-2.5 text-xs font-light text-code-muted",children:e.skill.caption})]})}function uh({message:e,lang:t,t:n,streamCount:r,isLast:s,onAction:i,onFollowUp:a,onOpenPrototype:l,onOpenDesignSystem:u}){var j,D;if(e.role==="user"){const S=e.text??Mt(e.questionOf??"").question[t];return o.jsx("div",{className:"rise flex justify-end",children:o.jsx("div",{className:"max-w-[85%] whitespace-pre-wrap break-words rounded-3xl rounded-br-md bg-bubble px-5 py-3 text-[15px] leading-relaxed text-bubble-fg",children:S})})}const d=Mt(e.intentId),f=gd(e.intentId,t,e.model),g=r!==null,h=g?r:e.stoppedAt,x=h==null?f:xd(f).slice(0,h).join(""),v=!g&&e.stoppedAt===void 0,y=g&&r===0,k=(j=d.actions)!=null&&j.includes("email")?"email":(D=d.actions)==null?void 0:D[0],p=f.includes("[[flow]]"),c=d.flow?o.jsx(vd,{id:`${e.id}-flow`,lang:t,board:d.flow==="covenant"?fd:Lf,cta:d.flow==="covenant"?{label:he[t].open,onClick:l}:void 0}):null,m=he[t],b=d.anchors?[...d.flow&&!p?[{id:`${e.id}-flow`,label:d.flow==="covenant"?m.navFlow:m.navUxFlow}]:[],...[...f.matchAll(/^###\s+(.+)$/gm)].map((S,I)=>({id:`${e.id}-s${I}`,label:S[1]})),...d.attachment==="covenant"?[{id:`${e.id}-proto`,label:m.navProto}]:[]]:[];return o.jsxs("div",{className:"rise flex gap-3 sm:gap-4",children:[o.jsx("div",{className:"mt-0.5 hidden sm:block",children:o.jsx(Kn,{size:34})}),o.jsxs("div",{className:"min-w-0 flex-1",children:[o.jsxs("div",{className:"eyebrow mb-2.5 flex items-center gap-2.5",children:[o.jsx("span",{className:"font-semibold text-ink",children:n.assistantName}),o.jsx("span",{className:"h-px w-5 bg-rule","aria-hidden":!0}),o.jsx("span",{className:"text-muted",children:n.models[e.model].name})]}),b.length>0&&!y&&o.jsx(wd,{links:b,label:m.navLabel}),!p&&!y&&c,y?o.jsx("div",{className:"flex h-7 items-center gap-1.5",role:"status","aria-label":n.thinking,children:[0,1,2].map(S=>o.jsx("span",{className:"thinking-dot",style:{animationDelay:`${S*.16}s`}},S))}):o.jsxs("div",{"aria-live":g?"off":"polite",children:[o.jsx($t,{text:x,anchorPrefix:d.anchors?e.id:void 0,embeds:{flow:c,"repo-map":o.jsx(Xf,{lang:t}),"bnp-figures":o.jsx(yd,{lang:t}),"ds-principles":o.jsx(bd,{lang:t}),"team-roles":o.jsx(Jf,{lang:t}),relay:o.jsx(th,{lang:t}),"skill-test":o.jsx(rh,{lang:t}),"skill-lessons":o.jsx(ih,{lang:t})}}),g&&o.jsx("span",{className:"caret","aria-hidden":!0})]}),e.stoppedAt!==void 0&&o.jsxs("p",{className:"tag mt-3 border border-rule text-ink",children:[o.jsx(fa,{size:10,className:"fill-current","aria-hidden":!0})," ",n.stopped]}),v&&d.attachment==="skill"&&e.model!=="express"&&o.jsx(lh,{t:n}),v&&(d.attachment==="skill"||d.attachment==="ds")&&o.jsxs("div",{className:"rise mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 rounded-3xl border border-line bg-elevated p-5",children:[o.jsxs("div",{className:"min-w-0 flex-1 basis-64",children:[o.jsx("p",{className:"text-sm font-semibold text-ink",children:hn[t].openTitle}),o.jsx("p",{className:"mt-1 text-[13px] font-light leading-relaxed text-muted",children:hn[t].openText})]}),o.jsxs("button",{onClick:u,className:"btn-primary",children:[hn[t].open," ",o.jsx(pa,{size:14,"aria-hidden":!0})]})]}),v&&d.attachment==="covenant"&&o.jsxs("div",{id:`${e.id}-proto`,className:"rise mt-6 flex scroll-mt-16 flex-wrap items-center gap-x-5 gap-y-3 rounded-3xl border border-line bg-elevated p-5",children:[o.jsxs("div",{className:"min-w-0 flex-1 basis-64",children:[o.jsx("p",{className:"text-sm font-semibold text-ink",children:he[t].ctaTitle}),o.jsx("p",{className:"mt-1 text-[13px] font-light leading-relaxed text-muted",children:he[t].ctaText})]}),o.jsxs("button",{onClick:l,className:"btn-primary",children:[he[t].open," ",o.jsx(ma,{size:14,className:"fill-current","aria-hidden":!0})]})]}),v&&d.actions&&o.jsx("div",{className:"rise mt-5 flex flex-wrap gap-3",children:[...d.actions].sort((S,I)=>+(I===k)-+(S===k)).map(S=>{const I=S==="cv"?yr:$e;return o.jsxs("button",{onClick:()=>i(S),className:S===k?"btn-primary":"btn-secondary",children:[S==="cv"?n.actionCV:n.actionEmail," ",o.jsx(I,{size:16,"aria-hidden":!0})]},S)})}),v&&s&&d.followUps&&o.jsxs("div",{className:"rise mt-6",children:[o.jsxs("p",{className:"eyebrow mb-3 flex items-center gap-3 text-muted",children:[o.jsx("span",{children:n.followUps}),o.jsx("span",{className:"h-px flex-1 bg-line","aria-hidden":!0})]}),o.jsx("div",{className:"flex flex-wrap gap-2",children:d.followUps.map(S=>{const I=Mt(S);return o.jsxs("button",{onClick:()=>a(S),className:"t-all group inline-flex items-center gap-1.5 rounded-full border border-line bg-elevated px-3.5 py-1.5 text-left text-sm text-ink hover:border-rule hover:bg-surface-2",children:[(I.chip??I.question)[t],o.jsx(ws,{size:14,className:"shrink-0 text-vermillion","aria-hidden":!0})]},S)})})]})]})]})}const ne={name:"Anne-Sophie Leroy",monogram:"ASL",email:"leroy.annesophie02@gmail.com",phone:"06 30 47 84 39",phoneHref:"tel:+33630478439",linkedin:"linkedin.com/in/anne-sophie-leroy",linkedinHref:"https://www.linkedin.com/in/anne-sophie-leroy",location:"Paris, France",cvFile:"CV-Anne-Sophie-Leroy.pdf"},ch={fr:"Product Designer — UX/UI, Design Ops & AI Workflows",en:"Product Designer — UX/UI, Design Ops & AI Workflows"},dh={fr:"Product Designer spécialisée en UX/UI, Design Ops et workflows IA. Je conjugue un héritage créatif issu des arts visuels et de la mode avec une forte expertise technique (Design System, AI Skills, vibecoding) pour concevoir des produits complexes plus lisibles et industrialiser la production des équipes design.",en:"Product Designer specialising in UX/UI, Design Ops and AI workflows. I combine a creative heritage from visual arts and fashion with strong technical expertise (Design System, AI Skills, vibecoding) to make complex products more readable and to industrialise how design teams deliver."},go=[{id:"bnp",intentId:"bnp",title:{fr:"Cadrer une équipe UX augmentée par l’IA",en:"Framing an AI-augmented UX team"},tag:{fr:"Banque · Design Ops IA",en:"Banking · AI Design Ops"}},{id:"covenant",intentId:"covenant",title:{fr:"Covenant monitoring assisté par IA",en:"AI-assisted covenant monitoring"},tag:{fr:"Banque d’investissement · IA",en:"Investment bank · AI"}},{id:"grdf",intentId:"grdf",title:{fr:"GRDF — Refonte éco-conçue & RGAA",en:"GRDF — Eco-designed redesign & RGAA"},tag:{fr:"Énergie · A11y",en:"Energy · A11y"}},{id:"cdc",intentId:"cdc",title:{fr:"Caisse des Dépôts — Refonte d’un outil métier de gestion de carrière",en:"Caisse des Dépôts — Redesign of a career-management business tool"},tag:{fr:"Secteur public · Outil métier",en:"Public sector · Business tool"}}],ph=[{company:"mc2i",role:{fr:"Product Designer UX/UI pour solutions IA",en:"UX/UI Product Designer for AI solutions"},period:{fr:"Janv. 2024 – Aujourd’hui",en:"Jan 2024 – Present"},location:"Paris",bullets:{fr:[],en:[]},missions:[{client:"BNP Paribas CIB",period:{fr:"Août 2024 – Aujourd’hui",en:"Aug 2024 – Present"},role:{fr:"UX UI Product Designer pour solutions IA",en:"UX UI Product Designer for AI solutions"},bullets:{fr:["Refonte complète de la chaîne de crédit pour grandes entreprises : automatisation de processus complexes par l’IA pour réduire significativement la charge cognitive des utilisateurs.","Optimisation du workflow design par l’IA : utilisation du vibecoding pour générer des prototypes haute fidélité en cohérence avec le Design System. Génération des spécifications (.md) UX UI.","Design Ops : co-construction de processus transverses entre les pôles Technique, UX et Produit pour fluidifier et accélérer le cycle de conception. Création de skills pour standardiser et accélérer le travail des équipes.","Gouvernance du Design System : gouvernance des composants UI pour l’IA.","Stratégie UX & recherche : conduite d’entretiens, cartographie de parcours et analyse de données pour traduire les exigences métier en solutions intuitives.","Collaboration agile : alignement continu entre Product Managers, équipes Tech et utilisateurs finaux.","Résultats : +5 modules sur 17 optimisés par l’IA aujourd’hui (environ 1 500 utilisateurs) ; réduction significative de la dette design et accélération du delivery ; une optimisation par l’IA adoptée par les utilisateurs ; réduction significative des erreurs de données."],en:["Full redesign of the credit chain for large corporates: AI automation of complex processes to significantly reduce users’ cognitive load.","AI-optimised design workflow: vibecoding to generate high-fidelity prototypes consistent with the Design System. Generation of UX/UI specifications (.md).","Design Ops: co-built cross-functional processes between the Tech, UX and Product teams to streamline and speed up the design cycle. Created skills to standardise and speed up the teams’ work.","Design System governance: governance of UI components for AI.","UX strategy & research: interviews, journey mapping and data analysis to translate business requirements into intuitive solutions.","Agile collaboration: continuous alignment between Product Managers, Tech teams and end users.","Results: +5 of 17 modules optimised with AI today (around 1,500 users); significant reduction of design debt and faster delivery; AI optimisation adopted by users; significant reduction of data errors."]}},{client:"La Caisse des Dépôts",period:{fr:"Avr. 2024 – Août 2024",en:"Apr 2024 – Aug 2024"},role:{fr:"Product Designer UX/UI",en:"Product Designer UX/UI"},bullets:{fr:["Refonte d’Emaj, outil interne de gestion stratégique des carrières : entretiens utilisateurs, analyse de données, ateliers de co-création, prototypage haute fidélité, tests utilisateurs et coordination inter-équipes."],en:["Redesign of Emaj, an internal strategic career-management tool: user interviews, data analysis, co-creation workshops, high-fidelity prototyping, user testing and cross-team coordination."]}},{client:"GRDF",period:{fr:"Janv. 2024 – Mai 2024",en:"Jan 2024 – May 2024"},role:{fr:"Product Designer UX/UI",en:"Product Designer UX/UI"},bullets:{fr:["Refonte et rebranding d’Act4Gaz vers justdecarb.grdf.fr : audits UX et accessibilité (RGAA), nouvelle identité graphique, Design System dédié sobre et accessible, maquettes mobile-first.","Impact : Note C EcoIndex et conformité RGAA."],en:["Redesign and rebranding of Act4Gaz into justdecarb.grdf.fr: UX and accessibility (RGAA) audits, new visual identity, dedicated lean and accessible Design System, mobile-first mockups.","Impact: EcoIndex grade C and RGAA compliance."]}}]},{company:"Groupe Kering",role:{fr:"Product Designer",en:"Product Designer"},period:{fr:"Sept. 2022 – Déc. 2023",en:"Sep 2022 – Dec 2023"},location:"Paris",bullets:{fr:["Numérisation d’une carte de réduction physique en application mobile évolutive (Privilege Card).","Recherche utilisateurs, ateliers, audits et cartographies UX, conception UI et composants de Design System, tests utilisateurs itératifs.","Impact : 40 000 utilisateurs actifs ; fiabilisation des quotas d’achat et des restrictions de vente en boutique."],en:["Turned a physical discount card into a scalable mobile app (Privilege Card).","User research, workshops, UX audits and journey maps, UI design and Design System components, iterative user testing.","Impact: 40,000 active users; more reliable purchase quotas and in-store sales restrictions."]}},{company:"Eden Park",role:{fr:"Coordinatrice de contenu digital & de projet",en:"Digital Content & Project Coordinator"},period:{fr:"Janv. 2021 – Juil. 2022",en:"Jan 2021 – Jul 2022"},location:"Paris",bullets:{fr:["Pilotage de projets digitaux de bout en bout, calendrier éditorial, maintenance UX du site web, production visuelle (photo/vidéo) pour campagnes SMO/SEA.","Impact : +20 % de ventes e-commerce en 1 an."],en:["End-to-end digital project management, editorial calendar, website UX maintenance, visual production (photo/video) for SMO/SEA campaigns.","Impact: +20% e-commerce sales in one year."]}},{company:"Balmain · Indress",role:{fr:"Designer Broderie (Balmain) · Designer Studio (Indress)",en:"Embroidery Designer (Balmain) · Studio Designer (Indress)"},period:{fr:"2019",en:"2019"},location:"Paris",bullets:{fr:[],en:[]}}],mh=[{label:{fr:"Design & Prototypage",en:"Design & Prototyping"},items:{fr:["Figma (Expert)","Storybook","Zeroheight","After Effects","Illustrator","Photoshop"],en:["Figma (Expert)","Storybook","Zeroheight","After Effects","Illustrator","Photoshop"]}},{label:{fr:"IA & Vibecoding",en:"AI & Vibecoding"},items:{fr:["Claude Code","AI Skills","Prompt Engineering","Gemini","Midjourney","Adobe Firefly"],en:["Claude Code","AI Skills","Prompt Engineering","Gemini","Midjourney","Adobe Firefly"]}},{label:{fr:"Product & Tech",en:"Product & Tech"},items:{fr:["Discovery","Design Ops","Design System","Specs .md","HTML/CSS (Handoff)","Jira","Confluence"],en:["Discovery","Design Ops","Design System",".md specs","HTML/CSS (Handoff)","Jira","Confluence"]}}],fh=[{title:{fr:"Master Design UX/UI & Gestion de projet",en:"Master’s in UX/UI Design & Project Management"},school:"Digital School of Paris",period:"2021 – 2023"},{title:{fr:"Bachelor Design de Mode & Textile",en:"Bachelor in Fashion & Textile Design"},school:"Atelier Chardon Savard, Nantes",period:"2016 – 2020"},{title:{fr:"MANAA — Arts Appliqués",en:"MANAA — Applied Arts foundation year"},school:"IMAD, Caen",period:""}],hh={fr:["Français — Natif","Anglais — Courant","Espagnol — B1"],en:["French — Native","English — Fluent","Spanish — B1"]},gh={fr:["Bénévolat : inclusion sociale et orientation administrative des jeunes de l’Aide Sociale à l’Enfance","Piano classique (+5 ans)","Course à pied"],en:["Volunteering: social inclusion and administrative guidance for young people in child welfare care (ASE)","Classical piano (5+ years)","Running"]};function gi({text:e}){const t=e.match(/^(Impact\s?:)(.*)$/);return o.jsxs("li",{className:"flex gap-2.5 text-sm leading-relaxed text-ink",children:[o.jsx("span",{className:"mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-vermillion","aria-hidden":!0}),t?o.jsxs("span",{children:[o.jsx("strong",{className:"font-semibold text-olive-text",children:t[1]}),o.jsx("span",{className:"font-medium",children:t[2]})]}):o.jsx("span",{className:"font-light",children:e})]})}function zn({label:e,children:t}){return o.jsxs("section",{className:"cv-section mt-7",children:[o.jsxs("h3",{className:"eyebrow mb-4 flex items-center gap-3 font-semibold text-ink",children:[o.jsx("span",{children:e}),o.jsx("span",{className:"h-px flex-1 bg-rule","aria-hidden":!0})]}),t]})}async function xh(){const e=`./${ne.cvFile}`;try{const t=await fetch(e,{method:"HEAD"});if(t.ok&&(t.headers.get("content-type")??"").includes("pdf")){const n=document.createElement("a");n.href=e,n.download=ne.cvFile,document.body.appendChild(n),n.click(),n.remove();return}}catch{}window.print()}function vh({t:e,lang:t}){return o.jsx("div",{className:"cv-print rise mx-auto w-full max-w-3xl px-5 py-8 sm:px-8 sm:py-10",children:o.jsxs("article",{children:[o.jsxs("header",{children:[o.jsx("h1",{className:"font-display text-[clamp(2rem,6vw,3rem)] font-semibold leading-none tracking-[-0.035em] text-ink",children:ne.name}),o.jsx("p",{className:"eyebrow mt-4 font-semibold text-accent-text",children:ch[t]}),o.jsxs("ul",{className:"mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted",children:[o.jsxs("li",{className:"inline-flex items-center gap-1.5",children:[o.jsx(uf,{size:14,"aria-hidden":!0})," ",ne.location]}),o.jsx("li",{children:o.jsxs("a",{href:`mailto:${ne.email}`,className:"t-all inline-flex items-center gap-1.5 hover:text-ink",children:[o.jsx($e,{size:14,"aria-hidden":!0})," ",ne.email]})}),o.jsx("li",{children:o.jsxs("a",{href:ne.phoneHref,className:"t-all inline-flex items-center gap-1.5 hover:text-ink",children:[o.jsx(id,{size:14,"aria-hidden":!0})," ",ne.phone]})}),o.jsx("li",{children:o.jsxs("a",{href:ne.linkedinHref,target:"_blank",rel:"noopener noreferrer",className:"t-all inline-flex items-center gap-1.5 hover:text-ink",children:[o.jsx(nd,{size:14,"aria-hidden":!0})," ",ne.linkedin]})})]}),o.jsx("p",{className:"mt-4 text-sm font-light leading-relaxed text-ink",children:dh[t]})]}),o.jsx(zn,{label:e.cv.experience,children:o.jsx("div",{className:"space-y-6",children:ph.map(n=>{var r;return o.jsxs("div",{children:[o.jsxs("div",{className:"flex flex-wrap items-baseline justify-between gap-x-4",children:[o.jsx("h4",{className:"font-display text-[1.15rem] font-semibold leading-tight tracking-[-0.02em] text-ink",children:n.company}),o.jsxs("span",{className:"text-xs font-medium text-muted",children:[n.period[t]," · ",n.location]})]}),o.jsx("p",{className:"text-sm font-medium text-muted",children:n.role[t]}),n.bullets[t].length>0&&o.jsx("ul",{className:"mt-2 space-y-1.5",children:n.bullets[t].map(s=>o.jsx(gi,{text:s},s))}),(r=n.missions)==null?void 0:r.map(s=>o.jsxs("div",{className:"cv-section mt-3 border-l-2 border-line pl-4",children:[o.jsxs("div",{className:"flex flex-wrap items-baseline justify-between gap-x-4",children:[o.jsx("h5",{className:"text-sm font-semibold text-ink",children:s.client}),o.jsx("span",{className:"text-xs text-muted",children:s.period[t]})]}),o.jsx("p",{className:"text-xs font-medium text-muted",children:s.role[t]}),o.jsx("ul",{className:"mt-1.5 space-y-1.5",children:s.bullets[t].map(i=>o.jsx(gi,{text:i},i))})]},s.client))]},n.company)})})}),o.jsx(zn,{label:e.cv.skills,children:o.jsx("div",{className:"space-y-3",children:mh.map(n=>o.jsxs("div",{children:[o.jsx("p",{className:"mb-1.5 text-sm font-semibold text-ink",children:n.label[t]}),o.jsx("ul",{className:"flex flex-wrap gap-1.5",children:n.items[t].map(r=>o.jsx("li",{className:"tag bg-olive-tint text-olive-text",children:r},r))})]},n.label.en))})}),o.jsxs("div",{className:"grid gap-x-8 sm:grid-cols-2",children:[o.jsx(zn,{label:e.cv.education,children:o.jsx("ul",{className:"space-y-2.5",children:fh.map(n=>o.jsxs("li",{className:"text-sm",children:[o.jsx("p",{className:"font-semibold text-ink",children:n.title[t]}),o.jsxs("p",{className:"font-light text-muted",children:[n.school,n.period&&` · ${n.period}`]})]},n.school))})}),o.jsxs("div",{children:[o.jsx(zn,{label:e.cv.languages,children:o.jsx("ul",{className:"space-y-1 text-sm font-light text-ink",children:hh[t].map(n=>o.jsx("li",{children:n},n))})}),o.jsx(zn,{label:e.cv.interests,children:o.jsx("ul",{className:"space-y-1.5",children:gh[t].map(n=>o.jsx(gi,{text:n},n))})})]})]})]})})}function Sd({t:e,isStreaming:t,onSend:n,onStop:r}){const[s,i]=C.useState(""),[a,l]=C.useState(0),[u,d]=C.useState(0),[f,g]=C.useState(!1),h=C.useRef(null);C.useEffect(()=>{const c=window.setInterval(()=>l(m=>m+1),4500);return()=>window.clearInterval(c)},[]),C.useEffect(()=>{const c=h.current;c&&(c.style.height="auto",c.style.height=`${Math.min(c.scrollHeight,200)}px`)},[s]);const x=C.useMemo(()=>!s.startsWith("/")||/\s/.test(s)?[]:e.slash.filter(c=>c.cmd.startsWith(s.toLowerCase())),[s,e]),v=x.length>0&&!f;C.useEffect(()=>d(0),[s]);const y=(c=s)=>{const m=c.trim();!m||t||(n(m),i(""))},k=c=>{if(v){if(c.key==="ArrowDown"||c.key==="ArrowUp"){c.preventDefault();const m=c.key==="ArrowDown"?1:-1;d(b=>(b+m+x.length)%x.length);return}if(c.key==="Enter"||c.key==="Tab"){c.preventDefault(),y(x[u].cmd);return}if(c.key==="Escape"){c.preventDefault(),g(!0);return}}c.key==="Enter"&&!c.shiftKey&&!c.nativeEvent.isComposing&&(c.preventDefault(),y())},p=()=>{var c;g(!1),i(m=>m.startsWith("/")?"":"/"),(c=h.current)==null||c.focus()};return o.jsx("div",{className:"relative z-10 mx-auto w-full max-w-3xl px-3 pb-3 sm:px-6 sm:pb-5",children:o.jsxs("div",{className:"relative",children:[v&&o.jsx("ul",{role:"listbox","aria-label":e.commands,className:"rise absolute bottom-full left-0 z-10 mb-2 w-full max-w-sm overflow-hidden rounded-3xl border border-rule bg-elevated p-1.5",children:x.map((c,m)=>o.jsx("li",{role:"option","aria-selected":m===u,children:o.jsxs("button",{onMouseEnter:()=>d(m),onClick:()=>y(c.cmd),className:`t-all flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-left text-sm ${m===u?"bg-surface-2":""}`,children:[o.jsx("code",{className:"rounded-md bg-accent-tint px-1.5 py-0.5 font-mono text-xs font-semibold text-accent-text",children:c.cmd}),o.jsx("span",{className:"text-muted",children:c.desc})]})},c.cmd))}),o.jsxs("div",{className:"t-all flex items-end gap-2 rounded-[28px] border border-line bg-elevated p-2 pl-2.5 shadow-signature focus-within:border-rule",children:[o.jsx("button",{type:"button",onClick:p,"aria-label":e.commands,title:e.commands,className:"t-all mb-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-2 text-ink hover:bg-line",children:o.jsx(xf,{size:15,"aria-hidden":!0})}),o.jsx("textarea",{ref:h,rows:1,value:s,onChange:c=>{i(c.target.value),g(!1)},onKeyDown:k,placeholder:e.placeholders[a%e.placeholders.length],"aria-label":e.placeholders[0],className:"max-h-[200px] min-h-[40px] flex-1 resize-none bg-transparent py-2 text-[15px] leading-relaxed text-ink outline-none placeholder:font-light placeholder:text-muted"}),t?o.jsx("button",{type:"button",onClick:r,"aria-label":e.stop,title:e.stop,className:"t-all flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-bg shadow-signature hover:opacity-85 active:scale-95",children:o.jsx(fa,{size:14,className:"fill-current","aria-hidden":!0})}):o.jsx("button",{type:"button",onClick:()=>y(),disabled:!s.trim(),"aria-label":e.send,title:e.send,className:"t-all flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-fg shadow-signature hover:bg-accent-hover active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none",children:o.jsx(Zc,{size:18,strokeWidth:2.5,"aria-hidden":!0})})]})]})})}const yh={fr:{contact:"Me contacter",cv:"Voir le CV",open:"Ouvrir le prototype",cancel:"Annuler",send:"Envoyer",copy:"Copier l’adresse",copied:"Copié",newChat:"Nouvelle conversation",email:"Contacter par email",result:"Résultat",friction:"Relances répétées",repeat:"Pour chaque période",close:"Fermer",menu:"Menu",collapse:"Replier",stop:"Arrêter",q1:"Quel a été son rôle ?",q2:"Voir le projet Covenant",question:"Quel est son parcours ?",answer:"Anne-Sophie est Product Designer, spécialisée en **UX/UI**, Design Ops et workflows IA.",ctaTitle:"Essayez le parcours vous-même",ctaText:"Le prototype s’ouvre ici, sans quitter le portfolio.",dialogTitle:"Écrire à Anne-Sophie",dialogBody:"Le contenu de la fenêtre.",mailApp:"Ouvrir ma messagerie",placeholder:"Votre message…",title:"Titre de section",body:"Texte courant, pour lire sans effort.",caption:"Légende ou détail",label:"Petit libellé",figure:"Chiffre clé",display:"Titre d’accueil",card:"Carte",control:"Bouton, tag, pastille",inner:"Élément interne",promptZone:"Zone de saisie",noShadow:"Carte : pas d’ombre",yes:"Oui",no:"Non",ordered:"Des étapes : numéros",unordered:"Des sujets : icônes",step1:"Comprendre",step2:"Concevoir",topic1:"Profil",topic2:"Impact",projects:"Études de cas",p1:"Cadrer une équipe UX augmentée",p2:"Covenant monitoring",ctx:"Contexte",approach:"Démarche",outcome:"Résultat",tableMd:`| Cas | Ce que fait l’outil |
|---|---|
| Document reçu | Extraction par l’IA |
| Valeur douteuse | Signalée à l’analyste |
| Seuil dépassé | Alerte |`,s1:"Profil & valeur ajoutée",s1t:"Résume le profil d’Anne-Sophie en quelques lignes.",s2:"Impact & chiffres clés",s2t:"Quels sont ses résultats mesurables ?",cPrimary:"Action principale",cPositive:"Élément positif",cSecondary:"Action secondaire, étape, lien",cAi:"Ce qui vient de l’IA",cWarn:"Friction, alerte",cPunct:"Ponctuation",bg:"Fond de page",sidebar:"Menu latéral",elevated:"Carte, champ",surface2:"Survol, neutre",ink:"Texte principal",muted:"Texte secondaire",inverse:"Neutre inversé",pair:"Couple",thLight:"Clair",thDark:"Sombre",pInk:"Texte principal sur fond",pMuted:"Texte secondaire sur fond",pBtn:"Bouton principal",pTagOk:"Tag olive pâle",pTagAi:"Tag IA",pTagWarn:"Tag friction",pVerm:"Vermillon (ponctuation)",m1:"ASL Court",m1h:"L’essentiel",m2:"ASL Complet",m2h:"La réponse structurée",m3:"ASL Détaillé",m3h:"Avec la méthode",r1t:"Aucune couleur en dur",r1:"Tout passe par un token, donc les deux thèmes fonctionnent.",r2t:"Surfaces neutres et unies",r2:"La couleur vit dans les petits éléments qui portent un sens.",r3t:"L’ombre est réservée",r3:"La zone de saisie et l’action principale, rien d’autre.",r4t:"Une couleur, un seul sens",r4:"Si aucun sens ne correspond, on reste neutre."},en:{contact:"Contact me",cv:"View the CV",open:"Open the prototype",cancel:"Cancel",send:"Send",copy:"Copy the address",copied:"Copied",newChat:"New conversation",email:"Contact by email",result:"Outcome",friction:"Repeated reminders",repeat:"For each period",close:"Close",menu:"Menu",collapse:"Collapse",stop:"Stop",q1:"What was her role?",q2:"See the Covenant project",question:"What is her background?",answer:"Anne-Sophie is a Product Designer, specialised in **UX/UI**, Design Ops and AI workflows.",ctaTitle:"Try the journey yourself",ctaText:"The prototype opens here, without leaving the portfolio.",dialogTitle:"Write to Anne-Sophie",dialogBody:"The dialog content.",mailApp:"Open my mail app",placeholder:"Your message…",title:"Section title",body:"Body text, effortless to read.",caption:"Caption or detail",label:"Small label",figure:"Key figure",display:"Welcome title",card:"Card",control:"Button, tag, badge",inner:"Inner element",promptZone:"Prompt area",noShadow:"Card: no shadow",yes:"Do",no:"Don’t",ordered:"Steps: numbers",unordered:"Topics: icons",step1:"Understand",step2:"Design",topic1:"Profile",topic2:"Impact",projects:"Case studies",p1:"Framing an AI-augmented UX team",p2:"Covenant monitoring",ctx:"Context",approach:"Approach",outcome:"Outcome",tableMd:`| Case | What the tool does |
|---|---|
| Document received | AI extraction |
| Doubtful value | Flagged to the analyst |
| Threshold exceeded | Alert |`,s1:"Profile & added value",s1t:"Sum up Anne-Sophie’s profile in a few lines.",s2:"Impact & key figures",s2t:"What are her measurable results?",cPrimary:"Main action",cPositive:"Positive element",cSecondary:"Secondary action, step, link",cAi:"What comes from the AI",cWarn:"Friction, alert",cPunct:"Punctuation",bg:"Page background",sidebar:"Side menu",elevated:"Card, field",surface2:"Hover, neutral",ink:"Main text",muted:"Secondary text",inverse:"Inverted neutral",pair:"Pair",thLight:"Light",thDark:"Dark",pInk:"Main text on background",pMuted:"Secondary text on background",pBtn:"Primary button",pTagOk:"Pale olive tag",pTagAi:"AI tag",pTagWarn:"Friction tag",pVerm:"Vermilion (punctuation)",m1:"ASL Short",m1h:"The essentials",m2:"ASL Full",m2h:"The structured answer",m3:"ASL In-depth",m3h:"With the method",r1t:"No hard-coded colour",r1:"Everything goes through a token, so both themes work.",r2t:"Neutral, flat surfaces",r2:"Colour lives in the small elements that carry meaning.",r3t:"The shadow is reserved",r3:"The prompt area and the main action, nothing else.",r4t:"One colour, one meaning",r4:"If no meaning fits, stay neutral."}},Kt="tag",xi="t-all flex flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold",xo="t-all inline-flex items-center gap-1.5 rounded-full border border-line bg-elevated px-3.5 py-1.5 text-sm text-ink hover:border-rule hover:bg-surface-2";function we({children:e}){return o.jsx("div",{className:"flex flex-wrap items-center gap-3",children:e})}function Ie({cls:e,name:t,label:n,border:r}){return o.jsxs("li",{className:"flex items-center gap-3",children:[o.jsx("span",{className:`h-10 w-10 shrink-0 rounded-2xl ${e} ${r?"border border-line":""}`,"aria-hidden":!0}),o.jsxs("span",{className:"min-w-0",children:[o.jsx("span",{className:"block text-[13px] font-medium leading-snug text-ink",children:n}),o.jsx("code",{className:"font-mono text-[11.5px] text-muted",children:t})]})]})}function bh({id:e,lang:t,t:n}){const r=yh[t],[s,i]=C.useState(0),[a,l]=C.useState(!1),[u,d]=C.useState(!0),[f,g]=C.useState(0),[h,x]=C.useState(!1),[v,y]=C.useState(!0);switch(e){case"hierarchy":return o.jsxs(we,{children:[o.jsxs("button",{className:"btn-primary",children:[r.contact," ",o.jsx($e,{size:16,"aria-hidden":!0})]}),o.jsxs("button",{className:"btn-secondary",children:[r.cv," ",o.jsx(Et,{size:16,"aria-hidden":!0})]}),o.jsx("button",{className:"icon-btn","aria-label":r.close,children:o.jsx(Ye,{size:18,"aria-hidden":!0})})]});case"nocaps":return o.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[o.jsxs("div",{className:"rounded-2xl border border-line bg-elevated p-4",children:[o.jsxs("p",{className:"mb-3 inline-flex items-center gap-1.5 text-xs font-semibold text-olive-text",children:[o.jsx(wt,{size:13,"aria-hidden":!0})," ",r.yes]}),o.jsxs(we,{children:[o.jsx("button",{className:"btn-primary !px-4 !py-2",children:r.contact}),o.jsx("span",{className:`${Kt} bg-olive-tint text-olive-text`,children:r.result})]})]}),o.jsxs("div",{className:"rounded-2xl border border-line bg-elevated p-4",children:[o.jsxs("p",{className:"mb-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--warn-text)]",children:[o.jsx(Ye,{size:13,"aria-hidden":!0})," ",r.no]}),o.jsxs(we,{children:[o.jsx("span",{className:"inline-flex items-center rounded-full bg-olive px-4 py-2 text-[11.5px] font-semibold tracking-[0.14em] text-olive-fg",children:r.contact.toUpperCase()}),o.jsx("span",{className:"rounded-full bg-olive-tint px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.1em] text-olive-text",children:r.result.toUpperCase()})]})]})]});case"numbericon":return o.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[o.jsxs("div",{className:"rounded-2xl border border-line bg-elevated p-4",children:[o.jsx("p",{className:"eyebrow mb-3 text-muted",children:r.ordered}),o.jsx(we,{children:[r.step1,r.step2].map((k,p)=>o.jsxs("span",{className:"inline-flex items-center gap-2 text-[13px] font-medium text-ink",children:[o.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-fg",children:p+1})," ",k]},k))})]}),o.jsxs("div",{className:"rounded-2xl border border-line bg-elevated p-4",children:[o.jsx("p",{className:"eyebrow mb-3 text-muted",children:r.unordered}),o.jsx(we,{children:[{I:Ss,x:r.topic1},{I:fo,x:r.topic2}].map(({I:k,x:p})=>o.jsxs("span",{className:"inline-flex items-center gap-2 text-[13px] font-medium text-ink",children:[o.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full bg-accent-tint text-accent-text",children:o.jsx(k,{size:14,"aria-hidden":!0})})," ",p]},p))})]})]});case"neutrals":return o.jsxs("ul",{className:"grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2",children:[o.jsx(Ie,{cls:"bg-bg",name:"bg-bg",label:r.bg,border:!0}),o.jsx(Ie,{cls:"bg-sidebar",name:"bg-sidebar",label:r.sidebar,border:!0}),o.jsx(Ie,{cls:"bg-elevated",name:"bg-elevated",label:r.elevated,border:!0}),o.jsx(Ie,{cls:"bg-surface-2",name:"bg-surface-2",label:r.surface2,border:!0}),o.jsx(Ie,{cls:"bg-ink",name:"text-ink · bg-ink",label:`${r.ink} · ${r.inverse}`}),o.jsx(Ie,{cls:"bg-muted",name:"text-muted",label:r.muted})]});case"meanings":return o.jsxs("ul",{className:"grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2",children:[o.jsx(Ie,{cls:"bg-olive",name:"bg-olive",label:r.cPrimary}),o.jsx(Ie,{cls:"bg-olive-tint",name:"bg-olive-tint",label:r.cPositive,border:!0}),o.jsx(Ie,{cls:"bg-accent",name:"bg-accent",label:r.cSecondary}),o.jsx(Ie,{cls:"bg-[var(--ai)]",name:"--ai",label:r.cAi}),o.jsx(Ie,{cls:"bg-[var(--warn-tint)]",name:"--warn-tint",label:r.cWarn,border:!0}),o.jsx(Ie,{cls:"bg-vermillion",name:"bg-vermillion",label:r.cPunct})]});case"typescale":return o.jsx("ul",{className:"space-y-4",children:[{cls:"font-display text-[2rem] font-semibold leading-none tracking-[-0.035em]",label:r.display,spec:"Poppins · semibold"},{cls:"font-display text-[1.7rem] font-semibold leading-none tracking-[-0.03em]",label:r.figure,spec:"Poppins · 1.7rem"},{cls:"font-display text-[1.2rem] font-semibold leading-tight tracking-[-0.02em]",label:r.title,spec:"Poppins · 1.2rem"},{cls:"text-[15px] font-light leading-relaxed",label:r.body,spec:"Outfit · 15px · light"},{cls:"eyebrow",label:r.label,spec:"Outfit · 12.5px · medium"},{cls:"text-xs font-light text-muted",label:r.caption,spec:"Outfit · 12px · light"}].map(k=>o.jsxs("li",{className:"flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line pb-4 last:border-b-0 last:pb-0",children:[o.jsx("span",{className:`min-w-0 text-ink ${k.cls}`,children:k.label}),o.jsx("code",{className:"shrink-0 font-mono text-[11.5px] text-muted",children:k.spec})]},k.spec))});case"shapes":return o.jsx("ul",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[{cls:"rounded-full",label:r.control,spec:"rounded-full"},{cls:"rounded-3xl",label:r.card,spec:"rounded-3xl"},{cls:"rounded-2xl",label:r.inner,spec:"rounded-2xl"}].map(k=>o.jsxs("li",{children:[o.jsx("span",{className:`block h-16 border border-rule bg-elevated ${k.cls}`,"aria-hidden":!0}),o.jsx("span",{className:"mt-2 block text-[13px] font-medium text-ink",children:k.label}),o.jsx("code",{className:"font-mono text-[11.5px] text-muted",children:k.spec})]},k.spec))});case"elevation":return o.jsxs("div",{className:"grid grid-cols-1 items-center gap-4 sm:grid-cols-3",children:[o.jsx("div",{className:"flex h-12 items-center rounded-[28px] border border-line bg-elevated px-4 text-[13px] font-light text-muted shadow-signature",children:r.promptZone}),o.jsx("div",{className:"flex justify-center",children:o.jsx("button",{className:"btn-primary",children:r.contact})}),o.jsx("div",{className:"flex h-12 items-center rounded-2xl border border-line bg-elevated px-4 text-[13px] font-light text-muted",children:r.noShadow})]});case"iconplace":return o.jsxs(we,{children:[o.jsxs("button",{className:"btn-secondary",children:[r.cv," ",o.jsx(Et,{size:16,"aria-hidden":!0})]}),o.jsxs("span",{className:`${Kt} bg-[var(--ai-tint)] text-[var(--ai-text)]`,children:[o.jsx(ks,{size:12,"aria-hidden":!0})," Claude"]})]});case"buttons":return o.jsxs(we,{children:[o.jsxs("button",{className:"btn-primary",children:[r.contact," ",o.jsx($e,{size:16,"aria-hidden":!0})]}),o.jsxs("button",{className:"btn-secondary",children:[r.cv," ",o.jsx(Et,{size:16,"aria-hidden":!0})]}),o.jsx("button",{className:"btn-primary",children:r.open}),o.jsx("button",{className:"btn-secondary",children:r.cancel})]});case"buttons-wide":return o.jsxs("div",{className:"w-full max-w-[280px] space-y-2 rounded-3xl bg-sidebar p-4",children:[o.jsxs("button",{className:"btn-secondary w-full !justify-between !py-2 !pl-4 !pr-2",children:[r.newChat,o.jsx("span",{className:"icon-chip bg-olive text-base leading-none text-olive-fg",children:"+"})]}),o.jsxs("button",{className:"btn-primary w-full !justify-between !py-2 !pl-4 !pr-2",children:[r.email,o.jsx("span",{className:"icon-chip bg-olive-fg text-olive",children:o.jsx($e,{size:13,strokeWidth:2.25,"aria-hidden":!0})})]}),o.jsxs("button",{className:"btn-secondary w-full !justify-between !py-2 !pl-4 !pr-2",children:[r.cv,o.jsx("span",{className:"icon-chip bg-accent text-accent-fg",children:o.jsx(Et,{size:14,strokeWidth:2.25,"aria-hidden":!0})})]})]});case"buttons-states":return o.jsxs(we,{children:[o.jsxs("button",{className:"btn-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none",disabled:!0,children:[r.send," ",o.jsx($e,{size:16,"aria-hidden":!0})]}),o.jsxs("button",{className:"btn-secondary",onClick:()=>{l(!0),window.setTimeout(()=>l(!1),1600)},children:[a?r.copied:r.copy," ",a?o.jsx(wt,{size:16,"aria-hidden":!0}):o.jsx(ed,{size:16,"aria-hidden":!0})]})]});case"iconbuttons":return o.jsxs(we,{children:[o.jsx("button",{className:"icon-btn","aria-label":r.close,children:o.jsx(Ye,{size:18,"aria-hidden":!0})}),o.jsx("button",{className:"icon-btn","aria-label":r.menu,children:o.jsx(rd,{size:19,"aria-hidden":!0})}),o.jsx("button",{className:"icon-btn","aria-label":r.collapse,children:o.jsx(ho,{size:18,"aria-hidden":!0})}),o.jsx("span",{className:"mx-1 h-6 w-px bg-line","aria-hidden":!0}),o.jsx("button",{"aria-label":r.send,className:"t-all flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-fg shadow-signature hover:bg-accent-hover",children:o.jsx(Zc,{size:18,strokeWidth:2.5,"aria-hidden":!0})}),o.jsx("button",{"aria-label":r.stop,className:"t-all flex h-10 w-10 items-center justify-center rounded-full bg-ink text-bg shadow-signature hover:opacity-85",children:o.jsx(fa,{size:14,className:"fill-current","aria-hidden":!0})})]});case"segmented":return o.jsxs(we,{children:[o.jsx("div",{role:"group","aria-label":n.theme,className:"flex w-56 rounded-full border border-line p-0.5",children:[{x:n.light,I:ad},{x:n.dark,I:sd}].map(({x:k,I:p},c)=>o.jsxs("button",{"aria-pressed":s===c,onClick:()=>i(c),className:`${xi} ${s===c?"bg-ink text-bg":"text-muted hover:text-ink"}`,children:[k," ",o.jsx(p,{size:12,className:"text-vermillion","aria-hidden":!0})]},k))}),o.jsxs("div",{role:"group","aria-label":n.language,className:"flex w-36 rounded-full border border-line p-0.5",children:[o.jsx("span",{className:`${xi} bg-ink text-bg`,children:"FR"}),o.jsx("span",{className:`${xi} text-muted`,children:"EN"})]})]});case"chips":return o.jsx(we,{children:[r.q1,r.q2].map(k=>o.jsxs("button",{className:xo,children:[k," ",o.jsx(ws,{size:14,className:"shrink-0 text-vermillion","aria-hidden":!0})]},k))});case"tags":return o.jsxs(we,{children:[o.jsx("span",{className:`${Kt} bg-olive-tint text-olive-text`,children:r.result}),o.jsxs("span",{className:`${Kt} bg-[var(--ai-tint)] text-[var(--ai-text)]`,children:[o.jsx(ks,{size:12,"aria-hidden":!0})," Claude"]}),o.jsxs("span",{className:`${Kt} bg-[var(--warn-tint)] text-[var(--warn-text)]`,children:[o.jsx(ld,{size:12,"aria-hidden":!0})," ",r.friction]}),o.jsxs("span",{className:`${Kt} border border-rule text-ink`,children:[o.jsx(od,{size:12,"aria-hidden":!0})," ",r.repeat]})]});case"badges":return o.jsxs(we,{children:[o.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-accent-tint text-accent-text",children:o.jsx(Jc,{size:15,"aria-hidden":!0})}),o.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-fg",children:"1"}),o.jsx("span",{className:"icon-chip bg-olive text-olive-fg",children:o.jsx($e,{size:13,"aria-hidden":!0})}),o.jsx(Kn,{size:40})]});case"messages":return o.jsxs("div",{className:"space-y-5",children:[o.jsx("div",{className:"flex justify-end",children:o.jsx("div",{className:"max-w-[85%] rounded-3xl rounded-br-md bg-bubble px-5 py-3 text-[15px] leading-relaxed text-bubble-fg",children:r.question})}),o.jsxs("div",{className:"flex gap-4",children:[o.jsx("div",{className:"mt-0.5 hidden sm:block",children:o.jsx(Kn,{size:34})}),o.jsxs("div",{className:"min-w-0 flex-1",children:[o.jsxs("div",{className:"eyebrow mb-2.5 flex items-center gap-2.5",children:[o.jsx("span",{className:"font-semibold text-ink",children:n.assistantName}),o.jsx("span",{className:"h-px w-5 bg-rule","aria-hidden":!0}),o.jsx("span",{className:"text-muted",children:n.models.standard.name})]}),o.jsx($t,{text:r.answer}),o.jsxs("div",{className:"mt-4 flex flex-wrap gap-3",children:[o.jsxs("button",{className:"btn-primary",children:[r.contact," ",o.jsx($e,{size:16,"aria-hidden":!0})]}),o.jsxs("button",{className:"btn-secondary",children:[r.cv," ",o.jsx(Et,{size:16,"aria-hidden":!0})]})]})]})]})]});case"card-suggestion":return o.jsx("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[{I:Ss,a:r.s1,b:r.s1t},{I:fo,a:r.s2,b:r.s2t}].map(({I:k,a:p,b:c})=>o.jsxs("button",{className:"t-all group flex flex-col gap-3 rounded-3xl border border-line bg-elevated p-5 text-left hover:-translate-y-0.5 hover:border-rule",children:[o.jsxs("span",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-tint text-accent-text",children:o.jsx(k,{size:15,"aria-hidden":!0})}),o.jsx("span",{className:"eyebrow flex-1 font-semibold text-ink",children:p}),o.jsx(ws,{size:15,className:"t-all shrink-0 text-muted group-hover:text-ink","aria-hidden":!0})]}),o.jsx("span",{className:"text-[14.5px] font-light leading-relaxed text-ink",children:c})]},p))});case"card-numbered":return o.jsx(bd,{lang:t});case"card-cta":return o.jsxs("div",{className:"flex flex-wrap items-center gap-x-5 gap-y-3 rounded-3xl border border-line bg-elevated p-5",children:[o.jsxs("div",{className:"min-w-0 flex-1 basis-56",children:[o.jsx("p",{className:"text-sm font-semibold text-ink",children:r.ctaTitle}),o.jsx("p",{className:"mt-1 text-[13px] font-light leading-relaxed text-muted",children:r.ctaText})]}),o.jsxs("button",{className:"btn-primary",children:[r.open," ",o.jsx(ma,{size:14,className:"fill-current","aria-hidden":!0})]})]});case"table":return o.jsx($t,{text:r.tableMd});case"sidemenu":return o.jsxs("div",{className:"relative flex h-72 overflow-hidden rounded-3xl border border-line bg-bg",children:[o.jsxs("div",{className:`t-all flex shrink-0 flex-col overflow-hidden bg-sidebar ${v?"w-[62%] max-w-[250px] border-r border-line p-4":"w-0 p-0"}`,children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(Kn,{size:32}),o.jsx("p",{className:"min-w-0 flex-1 truncate font-display text-[14px] font-semibold text-ink",children:"Anne-Sophie Leroy"})]}),o.jsx("p",{className:"eyebrow mt-5 text-muted",children:r.projects}),o.jsx("ul",{className:"mt-2 space-y-2",children:[r.p1,r.p2].map((k,p)=>o.jsxs("li",{className:"flex items-baseline gap-2.5 text-[12.5px] leading-snug text-ink",children:[o.jsxs("span",{className:"font-display text-[12px] font-medium italic text-accent-text",children:["0",p+1]})," ",k]},k))}),o.jsxs("span",{className:"mt-auto inline-flex items-center justify-between rounded-full bg-olive py-1.5 pl-3.5 pr-1.5 text-[12px] font-semibold text-olive-fg",children:[r.email,o.jsx("span",{className:"icon-chip !h-5 !w-5 bg-olive-fg text-olive",children:o.jsx($e,{size:11,"aria-hidden":!0})})]})]}),o.jsx("div",{className:"flex min-w-0 flex-1 flex-col",children:o.jsxs("div",{className:"flex items-center gap-2 border-b border-line px-3 py-2",children:[o.jsx("button",{onClick:()=>y(!v),"aria-label":r.collapse,"aria-expanded":v,className:"icon-btn",children:o.jsx(ho,{size:18,"aria-hidden":!0})}),o.jsx("p",{className:"eyebrow min-w-0 flex-1 truncate text-ink",children:r.newChat})]})})]});case"anchors":return o.jsx("div",{className:"px-1",children:o.jsx(wd,{label:n.caseStudies,links:[{id:"ds-top",label:r.ctx},{id:"ds-anchor-2",label:r.approach},{id:"ds-anchor-3",label:r.outcome}]})});case"tabs":return o.jsxs("div",{className:"flex items-center gap-1 rounded-2xl border border-line bg-bg px-3 py-2",children:[o.jsx("span",{className:"rounded-full px-3 py-1.5 text-[12.5px] font-medium text-muted",children:r.newChat}),o.jsxs("span",{className:"flex items-center rounded-full bg-surface-2 text-[12.5px] font-medium text-ink",children:[o.jsx("span",{className:"py-1.5 pl-3 pr-1.5",children:n.cv.tab}),o.jsx("button",{"aria-label":n.cv.closeTab,className:"t-all mr-1 flex h-6 w-6 items-center justify-center rounded-full text-muted hover:bg-line hover:text-ink",children:o.jsx(Ye,{size:13,"aria-hidden":!0})})]}),o.jsx("span",{className:"flex-1"}),o.jsxs("button",{className:"btn-primary !px-4 !py-2",children:[n.cv.download," ",o.jsx(Et,{size:16,"aria-hidden":!0})]})]});case"menu":{const k=[[r.m1,r.m1h],[r.m2,r.m2h],[r.m3,r.m3h]];return o.jsx("div",{className:u?"h-52":"",children:o.jsxs("div",{className:"relative inline-block",children:[o.jsxs("button",{onClick:()=>d(!u),"aria-haspopup":"listbox","aria-expanded":u,className:"t-all flex items-center gap-2 rounded-full border border-line bg-elevated px-3.5 py-1.5 text-[13px] hover:border-rule",children:[o.jsx("span",{className:"h-2 w-2 rounded-full bg-vermillion","aria-hidden":!0}),o.jsx("span",{className:"font-semibold text-ink",children:k[f][0]}),o.jsx(Yc,{size:15,className:`t-all text-muted ${u?"rotate-180":""}`,"aria-hidden":!0})]}),u&&o.jsx("ul",{role:"listbox",className:"absolute left-0 top-full z-10 mt-2 w-[260px] rounded-3xl border border-rule bg-elevated p-1.5",children:k.map(([p,c],m)=>o.jsx("li",{role:"option","aria-selected":m===f,children:o.jsxs("button",{onClick:()=>g(m),className:"t-all flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left hover:bg-surface-2",children:[o.jsxs("span",{className:"min-w-0 flex-1 text-sm font-semibold text-ink",children:[p," ",o.jsxs("span",{className:"font-normal text-muted",children:["· ",c]})]}),m===f&&o.jsx(wt,{size:16,className:"shrink-0 text-accent-text","aria-hidden":!0})]})},p))})]})})}case"prompt":return o.jsxs("div",{children:[o.jsx("div",{className:"flex justify-end",children:o.jsx("button",{onClick:()=>x(!h),className:"btn-secondary !px-3.5 !py-1.5",children:h?r.send:r.stop})}),o.jsx("div",{className:"pt-44",children:o.jsx(Sd,{t:n,isStreaming:h,onSend:()=>{},onStop:()=>x(!1)})})]});case"figures":return o.jsx(yd,{lang:t});case"flow":return o.jsx(vd,{lang:t,board:fd});default:return null}}function jd({children:e}){return o.jsx("h3",{className:"mb-3 font-display text-[1.2rem] font-semibold leading-tight tracking-[-0.02em] text-ink",children:e})}function Cd({body:e,lang:t,t:n}){const r={},s=e.replace(/^<!--\s*exemple:\s*([a-z-]+)\s*-->$/gm,(i,a)=>(r[a]=o.jsx("div",{className:"my-4 rounded-3xl border border-line bg-bg p-5 sm:p-6",children:o.jsx(bh,{id:a,lang:t,t:n})}),`[[${a}]]`));return s.trim()?o.jsx($t,{text:s,embeds:r}):null}function wh({section:e,lang:t,t:n}){return o.jsxs("section",{children:[e.title&&o.jsx(jd,{children:e.title}),o.jsx(Cd,{body:e.body,lang:t,t:n})]})}function kh({section:e,lang:t,t:n}){const{items:r,rest:s}=md(e.body);return o.jsxs("section",{children:[o.jsx(jd,{children:e.title}),o.jsx("ol",{className:"grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2",children:r.map((i,a)=>o.jsxs("li",{className:"flex items-start gap-2.5",children:[o.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-[11px] font-semibold text-accent-fg",children:a+1}),o.jsx("span",{className:"min-w-0 pt-px",children:o.jsx($t,{text:i})})]},a))}),o.jsx(Cd,{body:s,lang:t,t:n})]})}function Sh({section:e}){const t=e.kind==="do";return o.jsxs("div",{className:"rounded-3xl border border-line bg-elevated p-5",children:[o.jsxs("p",{className:`tag mb-3 ${t?"bg-olive-tint text-olive-text":"bg-[var(--warn-tint)] text-[var(--warn-text)]"}`,children:[t?o.jsx(wt,{size:12,"aria-hidden":!0}):o.jsx(Ye,{size:12,"aria-hidden":!0})," ",e.title]}),o.jsx("ul",{className:"space-y-2",children:md(e.body).items.map((n,r)=>o.jsx("li",{children:o.jsx($t,{text:n})},r))})]})}function jh({page:e,lang:t,t:n}){const r=[];for(let s=0;s<e.sections.length;s++){const i=e.sections[s];if(i.kind==="do"||i.kind==="dont"){const a=[i],l=e.sections[s+1];l&&(l.kind==="do"||l.kind==="dont")&&a.push(e.sections[++s]),r.push(o.jsx("section",{className:`grid grid-cols-1 gap-3 ${a.length>1?"sm:grid-cols-2":""}`,children:a.map(u=>o.jsx(Sh,{section:u},u.title))},s))}else i.kind==="anatomy"?r.push(o.jsx(kh,{section:i,lang:t,t:n},s)):r.push(o.jsx(wh,{section:i,lang:t,t:n},s))}return o.jsx(o.Fragment,{children:r})}function Ch({lang:e,t}){const n=hn[e],r=Ef(e),[s,i]=C.useState(r[0].id),a=C.useRef(null),l=Math.max(0,r.findIndex(v=>v.id===s)),u=r[l],d=r[l-1],f=r[l+1],g=v=>{var y;i(v),(y=a.current)==null||y.scrollTo({top:0})},h=fi.find(v=>v.id===u.group).title[e],x=v=>o.jsx("li",{children:o.jsx("button",{onClick:()=>g(v.id),"aria-current":v.id===s?"page":void 0,className:`t-all w-full rounded-full px-3 py-1.5 text-left text-[13.5px] ${v.id===s?"bg-surface-2 font-semibold text-ink":"font-normal text-muted hover:text-ink"}`,children:v.title})},v.id);return o.jsxs("div",{className:"flex min-h-0 flex-1",children:[o.jsx("nav",{"aria-label":n.pages,className:"hidden w-[232px] shrink-0 overflow-y-auto border-r border-line px-3 py-5 xl:block",children:fi.map(v=>{const y=r.filter(p=>p.group===v.id),k=[...new Set(y.map(p=>p.category??""))];return o.jsxs("div",{className:"mb-6",children:[o.jsx("p",{className:"px-3 font-display text-[13px] font-semibold text-ink",children:v.title[e]}),k.map(p=>o.jsxs("div",{children:[p&&o.jsx("p",{className:"mt-4 px-3 text-[11.5px] font-medium text-accent-text",children:p}),o.jsx("ul",{className:"mt-1.5 space-y-0.5",children:y.filter(c=>(c.category??"")===p).map(x)})]},p))]},v.id)})}),o.jsxs("div",{ref:a,className:"min-w-0 flex-1 overflow-y-auto",children:[o.jsxs("div",{className:"border-b border-line px-4 py-3 xl:hidden",children:[o.jsx("label",{className:"sr-only",htmlFor:"ds-page",children:n.pages}),o.jsx("select",{id:"ds-page",value:u.id,onChange:v=>g(v.target.value),className:"w-full rounded-full border border-rule bg-elevated px-4 py-2 text-[13.5px] font-semibold text-ink",children:fi.map(v=>o.jsx("optgroup",{label:v.title[e],children:r.filter(y=>y.group===v.id).map(y=>o.jsx("option",{value:y.id,children:y.title},y.id))},v.id))})]}),o.jsxs("article",{id:"ds-top",className:"mx-auto w-full max-w-3xl px-5 py-8 sm:px-8 sm:py-10",children:[o.jsxs("p",{className:"eyebrow text-accent-text",children:[h,u.category?` · ${u.category}`:""]}),o.jsx("h2",{className:"mt-2 font-display text-[clamp(1.8rem,5vw,2.4rem)] font-semibold leading-none tracking-[-0.035em] text-ink",children:u.title}),u.lead&&o.jsx("div",{className:"mt-4 text-muted [&>div]:text-[16px] [&>div]:font-light [&>div]:text-muted",children:o.jsx($t,{text:u.lead})}),o.jsx("div",{className:"mt-9 space-y-10",children:o.jsx(jh,{page:u,lang:e,t})},u.id),o.jsxs("p",{className:"mt-12 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-light text-muted",children:[o.jsx(yr,{size:13,className:"shrink-0 text-accent-text","aria-hidden":!0})," ",n.source," :",o.jsxs("code",{className:"font-mono text-[11.5px] text-ink",children:[kd,u.path]})]}),o.jsxs("footer",{className:"mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6",children:[d?o.jsxs("button",{onClick:()=>g(d.id),className:xo,children:[o.jsx("span",{className:"opacity-60",children:n.previous})," ",d.title]}):o.jsx("span",{}),f&&o.jsxs("button",{onClick:()=>g(f.id),className:xo,children:[o.jsx("span",{className:"opacity-60",children:n.next})," ",f.title,o.jsx(mr,{size:14,className:"shrink-0 text-vermillion","aria-hidden":!0})]})]})]})]})]})}const vi=1280;function Nh({src:e,title:t,note:n,restartLabel:r,closeLabel:s,desktopHint:i,onClose:a}){const l=C.useRef(null),[u,d]=C.useState({w:vi,h:800}),[f,g]=C.useState(0);C.useLayoutEffect(()=>{const v=l.current;if(!v)return;const y=()=>d({w:v.clientWidth,h:v.clientHeight});y();const k=new ResizeObserver(y);return k.observe(v),()=>k.disconnect()},[]),C.useEffect(()=>{const v=document.activeElement,y=k=>k.key==="Escape"&&a();return document.addEventListener("keydown",y),()=>{var k;document.removeEventListener("keydown",y),(k=v==null?void 0:v.focus)==null||k.call(v)}},[a]);const h=Math.min(1,u.w/vi),x=h<1;return Kc.createPortal(o.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":t,className:"fixed inset-0 z-50 flex flex-col bg-bg",children:[o.jsxs("div",{className:"flex shrink-0 items-center gap-3 border-b border-line px-4 py-2.5",children:[o.jsxs("div",{className:"min-w-0 flex-1",children:[o.jsx("p",{className:"eyebrow truncate font-semibold text-ink",children:t}),o.jsx("p",{className:"mt-0.5 truncate text-xs font-light text-muted",children:x?i:n})]}),o.jsxs("button",{onClick:()=>g(v=>v+1),className:"btn-secondary !px-3.5 !py-2",title:r,children:[o.jsx("span",{className:"hidden sm:inline",children:r})," ",o.jsx(hf,{size:14,"aria-hidden":!0})]}),o.jsx("button",{onClick:a,"aria-label":s,autoFocus:!0,className:"icon-btn",children:o.jsx(Ye,{size:18,"aria-hidden":!0})})]}),o.jsx("div",{ref:l,className:"relative min-h-0 flex-1 overflow-hidden bg-white",children:o.jsx("iframe",{src:`./${e}`,title:t,className:"absolute left-0 top-0 origin-top-left border-0",style:{width:x?vi:"100%",height:x?u.h/h:"100%",transform:x?`scale(${h})`:void 0}},f)})]}),document.body)}function Pl({label:e,value:t,options:n,onChange:r}){return o.jsx("div",{role:"group","aria-label":e,className:"flex flex-1 rounded-full border border-line p-0.5",children:n.map(s=>o.jsx("button",{onClick:()=>r(s.value),"aria-pressed":t===s.value,"aria-label":s.aria,className:`t-all flex flex-1 items-center justify-center gap-1.5 rounded-full px-2 py-1.5 text-xs font-semibold ${t===s.value?"bg-ink text-bg":"text-muted hover:text-ink"}`,children:s.label},s.value))})}function El({children:e}){return o.jsxs("p",{className:"eyebrow flex items-center gap-3 text-muted",children:[o.jsx("span",{className:"shrink-0",children:e}),o.jsx("span",{className:"h-px flex-1 bg-line","aria-hidden":!0})]})}function Ah(e){const{t,lang:n}=e;return o.jsxs(o.Fragment,{children:[o.jsx("div",{onClick:e.onClose,"aria-hidden":!0,className:`t-all fixed inset-0 z-30 bg-[var(--overlay)] md:hidden ${e.open?"opacity-100":"pointer-events-none opacity-0"}`}),o.jsxs("aside",{"aria-label":"Navigation",className:`t-all fixed inset-y-0 left-0 z-40 flex w-[304px] max-w-[88vw] shrink-0 flex-col border-r border-line bg-sidebar md:relative md:z-10 md:max-w-none ${e.open?"translate-x-0":"-translate-x-full"} md:translate-x-0 ${e.collapsed?"md:-ml-[304px]":"md:ml-0"}`,children:[o.jsxs("div",{className:"px-5 pb-4 pt-5",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(Kn,{size:46}),o.jsxs("div",{className:"min-w-0 flex-1",children:[o.jsx("p",{className:"truncate font-display text-[17px] font-semibold leading-tight tracking-[-0.02em] text-ink",children:ne.name}),o.jsx("p",{className:"tag mt-1 !inline-block max-w-full truncate bg-olive-tint text-olive-text",children:t.role})]}),o.jsx("button",{onClick:e.onClose,"aria-label":t.closeMenu,className:"icon-btn md:hidden",children:o.jsx(Ye,{size:18,"aria-hidden":!0})})]}),o.jsxs("button",{onClick:e.onNew,className:"btn-secondary mt-5 w-full !justify-between !py-2 !pl-4 !pr-2",children:[t.newChat,o.jsx("span",{className:"icon-chip bg-olive text-olive-fg",children:o.jsx(mf,{size:14,strokeWidth:2.5,"aria-hidden":!0})})]})]}),o.jsxs("nav",{className:"min-h-0 flex-1 overflow-y-auto px-5 pb-3",children:[o.jsx(El,{children:t.caseStudies}),o.jsx("ul",{className:"-mx-2 mt-2",children:go.map((r,s)=>{const i=e.activeProject===r.id;return o.jsx("li",{children:o.jsxs("button",{onClick:()=>e.onProject(r.id),"aria-current":i?"page":void 0,className:`t-all group flex w-full items-baseline gap-3 rounded-2xl px-2 py-2.5 text-left ${i?"bg-surface-2":"hover:bg-surface-2"}`,children:[o.jsxs("span",{className:`t-all w-6 shrink-0 font-display text-[13px] font-medium italic leading-none ${i?"text-vermillion":"text-accent-text"}`,children:["0",s+1]}),o.jsxs("span",{className:"min-w-0",children:[o.jsx("span",{className:`block text-[13.5px] leading-snug text-ink ${i?"font-semibold":"font-normal"}`,children:r.title[n]}),o.jsx("span",{className:"mt-1 block text-[11px] font-normal text-muted",children:r.tag[n]})]})]})},r.id)})})]}),o.jsxs("div",{className:"px-5 pb-5",children:[o.jsx(El,{children:t.quickAccess}),o.jsxs("div",{className:"mt-3 space-y-2",children:[o.jsxs("button",{onClick:e.onEmail,className:"btn-primary w-full !justify-between !py-2 !pl-4 !pr-2",children:[t.contactEmail,o.jsx("span",{className:"icon-chip bg-olive-fg text-olive",children:o.jsx($e,{size:13,strokeWidth:2.25,"aria-hidden":!0})})]}),o.jsxs("button",{onClick:e.onCV,className:"btn-secondary w-full !justify-between !py-2 !pl-4 !pr-2",children:[t.viewCV,o.jsx("span",{className:"icon-chip bg-accent text-accent-fg",children:o.jsx(Et,{size:14,strokeWidth:2.25,"aria-hidden":!0})})]})]}),o.jsxs("div",{className:"mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted",children:[o.jsxs("a",{href:ne.linkedinHref,target:"_blank",rel:"noopener noreferrer",className:"t-all inline-flex items-center gap-1.5 hover:text-ink",children:[o.jsx(nd,{size:13,className:"text-accent-text","aria-hidden":!0})," LinkedIn"]}),o.jsxs("a",{href:ne.phoneHref,className:"t-all inline-flex items-center gap-1.5 hover:text-ink",children:[o.jsx(id,{size:13,className:"text-accent-text","aria-hidden":!0})," ",ne.phone]}),o.jsxs("button",{onClick:e.onDesignSystem,className:"t-all inline-flex items-center gap-1.5 hover:text-ink",children:[o.jsx(pa,{size:13,className:"text-accent-text","aria-hidden":!0})," ",hn[n].link]})]}),o.jsxs("div",{className:"mt-4 flex gap-2",children:[o.jsx(Pl,{label:t.language,value:n,onChange:e.setLang,options:[{value:"fr",label:"FR",aria:"Français"},{value:"en",label:"EN",aria:"English"}]}),o.jsx(Pl,{label:t.theme,value:e.theme,onChange:e.setTheme,options:[{value:"light",label:o.jsxs(o.Fragment,{children:[t.light," ",o.jsx(ad,{size:12,className:"text-vermillion","aria-hidden":!0})]}),aria:t.light},{value:"dark",label:o.jsxs(o.Fragment,{children:[t.dark," ",o.jsx(sd,{size:12,className:"text-vermillion","aria-hidden":!0})]}),aria:t.dark}]})]})]})]})]})}const Ih=["express","standard","deepdive"],Tl="t-all flex min-w-0 items-center rounded-full text-[12.5px] font-medium",Ll=e=>e?"bg-surface-2 text-ink":"text-muted hover:text-ink";function Dh({t:e,title:t,model:n,setModel:r,onMenu:s,onToggleSidebar:i,docTabs:a=[],chatActive:l=!0,onSelectChat:u,docAction:d}){const[f,g]=C.useState(!1),h=C.useRef(null);return C.useEffect(()=>{if(!f)return;const x=y=>{var k;(k=h.current)!=null&&k.contains(y.target)||g(!1)},v=y=>y.key==="Escape"&&g(!1);return document.addEventListener("mousedown",x),document.addEventListener("keydown",v),()=>{document.removeEventListener("mousedown",x),document.removeEventListener("keydown",v)}},[f]),o.jsxs("header",{className:"relative z-20 flex h-14 shrink-0 items-center gap-2 border-b border-line px-2 sm:px-4",children:[o.jsx("button",{onClick:s,"aria-label":e.openMenu,className:"icon-btn md:hidden",children:o.jsx(rd,{size:19,"aria-hidden":!0})}),o.jsx("button",{onClick:i,"aria-label":e.toggleSidebar,title:e.toggleSidebar,className:"icon-btn hidden md:inline-flex",children:o.jsx(ho,{size:18,"aria-hidden":!0})}),a.length>0?o.jsxs("div",{role:"tablist",className:"flex min-w-0 flex-1 items-center gap-1 overflow-x-auto",children:[o.jsx("button",{role:"tab","aria-selected":l,onClick:u,className:`${Tl} px-3 py-1.5 ${Ll(l)}`,children:o.jsx("span",{className:"truncate",children:t})}),a.map(x=>o.jsxs("span",{className:`${Tl} shrink-0 ${Ll(x.active)}`,children:[o.jsx("button",{role:"tab","aria-selected":x.active,onClick:x.onSelect,className:"whitespace-nowrap rounded-full py-1.5 pl-3 pr-1.5",children:x.label}),o.jsx("button",{onClick:x.onClose,"aria-label":x.closeLabel,title:x.closeLabel,className:"t-all mr-1 flex h-6 w-6 items-center justify-center rounded-full text-muted hover:bg-line hover:text-ink",children:o.jsx(Ye,{size:13,"aria-hidden":!0})})]},x.id))]}):o.jsx("h2",{className:"eyebrow min-w-0 flex-1 truncate text-ink",children:t}),d??(l?o.jsxs("div",{ref:h,className:"relative",children:[o.jsxs("button",{onClick:()=>g(x=>!x),"aria-haspopup":"listbox","aria-expanded":f,"aria-label":e.model,className:"t-all flex items-center gap-2 rounded-full border border-line bg-elevated px-3.5 py-1.5 text-[13px] hover:border-rule",children:[o.jsx("span",{className:"h-2 w-2 rounded-full bg-vermillion","aria-hidden":!0}),o.jsx("span",{className:"font-semibold text-ink",children:e.models[n].name}),o.jsxs("span",{className:"hidden font-light text-muted lg:inline",children:["(",e.models[n].hint,")"]}),o.jsx(Yc,{size:15,className:`t-all text-muted ${f?"rotate-180":""}`,"aria-hidden":!0})]}),f&&o.jsx("ul",{role:"listbox","aria-label":e.model,className:"rise absolute right-0 top-full z-20 mt-2 w-[min(320px,calc(100vw-1.5rem))] rounded-3xl border border-rule bg-elevated p-1.5",children:Ih.map(x=>o.jsx("li",{role:"option","aria-selected":x===n,children:o.jsxs("button",{onClick:()=>{r(x),g(!1)},className:"t-all flex w-full items-start gap-3 rounded-2xl px-3 py-2.5 text-left hover:bg-surface-2",children:[o.jsxs("span",{className:"min-w-0 flex-1",children:[o.jsxs("span",{className:"block text-sm font-semibold text-ink",children:[e.models[x].name," ",o.jsxs("span",{className:"font-normal text-muted",children:["· ",e.models[x].hint]})]}),o.jsx("span",{className:"mt-0.5 block text-xs font-light text-muted",children:e.models[x].desc})]}),x===n&&o.jsx(wt,{size:16,className:"mt-0.5 shrink-0 text-accent-text","aria-hidden":!0})]})},x))})]}):null)]})}const Ph={profile:Ss,ai:vf,impact:fo,search:Jc,portfoliods:pa};function Eh({lang:e,t,onPick:n}){const[r,s]=t.heroTitle.split(ne.name),[,i,a]=r.match(/^(.*\s)(\S+['’])$/s)??[null,r,""],[,l="",u=""]=s.match(/^(['’]s)?\s*(.*)$/s)??[],d=/^[.!?…]*$/.test(u);return o.jsxs("div",{className:"mx-auto flex min-h-full w-full max-w-4xl flex-col justify-center px-5 py-8 sm:px-10 sm:py-12",children:[o.jsxs("div",{className:"rise",children:[o.jsxs("h1",{className:"text-ink",children:[o.jsx("span",{className:"block text-[clamp(1.2rem,2.5vw,1.7rem)] font-light leading-snug",children:i.trim()}),o.jsxs("span",{className:"mt-2 block font-display text-[clamp(2.3rem,6vw,4rem)] font-semibold leading-[1.08] tracking-[-0.035em]",children:[a&&o.jsx("span",{className:"font-light",children:a}),ne.name,l&&o.jsx("span",{className:"font-light",children:l}),d&&o.jsx("span",{className:"text-vermillion",children:u})]}),!d&&o.jsx("span",{className:"mt-3 block text-[clamp(1.2rem,2.5vw,1.7rem)] font-light leading-snug",children:u})]}),o.jsx("p",{className:"mt-6 max-w-xl text-[15px] font-light leading-relaxed text-muted sm:text-base",children:t.heroSubtitle})]}),o.jsx("div",{className:"mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2",children:t.suggestions.map((f,g)=>{const h=Ph[f.intentId]??cf;return o.jsxs("button",{onClick:()=>n(f.intentId),style:{animationDelay:`${120+g*70}ms`},className:`rise t-all group flex flex-col gap-3 rounded-3xl border border-line bg-elevated p-5 text-left hover:-translate-y-0.5 hover:border-rule ${g===t.suggestions.length-1&&t.suggestions.length%2===1?"sm:col-span-2":""}`,children:[o.jsxs("span",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-tint text-accent-text",children:o.jsx(h,{size:15,"aria-hidden":!0})}),o.jsx("span",{className:"eyebrow flex-1 font-semibold text-ink",children:f.title}),o.jsx(ws,{size:15,className:"t-all shrink-0 text-muted group-hover:text-ink","aria-hidden":!0})]}),o.jsx("span",{className:"text-[14.5px] font-light leading-relaxed text-ink",children:Mt(f.intentId).question[e]})]},f.intentId)})})]})}const Th={fr:{role:"Product Designer · AI & Design Ops",newChat:"Nouvelle conversation",caseStudies:"Études de cas",quickAccess:"Accès rapide et contact",viewCV:"Voir et télécharger le CV",contactEmail:"Contacter par email",language:"Langue",theme:"Thème",light:"Light",dark:"Dark",openMenu:"Ouvrir le menu",closeMenu:"Fermer le menu",toggleSidebar:"Afficher / masquer la barre latérale",newSession:"Nouvelle conversation",model:"Niveau de détail",models:{standard:{name:"ASL Complet",hint:"La réponse structurée",desc:"Contexte, rôle, solution et résultats."},express:{name:"ASL Court",hint:"L’essentiel",desc:"Quelques points et les chiffres clés."},deepdive:{name:"ASL Détaillé",hint:"Avec la méthode",desc:"La réponse complète, plus la méthode de travail."}},heroTitle:"Bonjour, je suis l'assistant portfolio d'Anne-Sophie Leroy.",heroSubtitle:"Product Designer spécialisée en UX/UI, Design Ops et workflows IA. Posez-moi une question sur son parcours, ses projets chez BNP Paribas ou sa façon d’industrialiser le design.",suggestions:[{title:"Profil et valeur ajoutée",intentId:"profile"},{title:"Le Design System de ce portfolio",intentId:"portfoliods"},{title:"Impact et chiffres clés",intentId:"impact"},{title:"Recherche actuelle",intentId:"search"}],placeholders:["Posez une question sur Anne-Sophie, ses AI skills, son parcours...","Ex. : « Comment son équipe design travaille-t-elle avec l’IA ? »","Tapez / pour les commandes : /cv, /projets, /skills, /contact, /stack"],send:"Envoyer",stop:"Arrêter la génération",commands:"Commandes",slash:[{cmd:"/cv",desc:"Son CV"},{cmd:"/projets",desc:"Lister les études de cas"},{cmd:"/skills",desc:"Compétences clés"},{cmd:"/contact",desc:"Écrire à Anne-Sophie"},{cmd:"/stack",desc:"Outils et stack"},{cmd:"/designsystem",desc:"Le Design System de ce portfolio"}],stopped:"Génération interrompue",thinking:"Réflexion en cours",followUps:"Pour aller plus loin",actionCV:"Voir le CV",actionEmail:"Envoyer un email",close:"Fermer",cv:{title:"Curriculum Vitae",tab:"CV",closeTab:"Fermer le CV",download:"Télécharger en PDF",downloadHint:"Si le PDF n’est pas disponible, la fenêtre d’impression s’ouvre : choisissez « Enregistrer au format PDF ».",experience:"Expériences",skills:"Compétences et outils",education:"Formation",languages:"Langues",interests:"Engagements et intérêts"},emailSubject:"Opportunité Product Designer",skill:{badge:"Skill réel",caption:"Le skill qui encadre le design de ce portfolio, conçu et testé par Anne-Sophie avec Claude Code. Fichiers réels du projet.",copy:"Copier",copied:"Copié !"},assistantName:"Assistant ASL",you:"Vous"},en:{role:"Product Designer · AI & Design Ops",newChat:"New conversation",caseStudies:"Case studies",quickAccess:"Quick access and contact",viewCV:"View and download the CV",contactEmail:"Contact by email",language:"Language",theme:"Theme",light:"Light",dark:"Dark",openMenu:"Open menu",closeMenu:"Close menu",toggleSidebar:"Show / hide sidebar",newSession:"New conversation",model:"Level of detail",models:{standard:{name:"ASL Full",hint:"The structured answer",desc:"Context, role, solution and results."},express:{name:"ASL Short",hint:"The essentials",desc:"A few points and the key figures."},deepdive:{name:"ASL In-depth",hint:"With the method",desc:"The full answer, plus the working method."}},heroTitle:"Hello, I'm Anne-Sophie Leroy's portfolio assistant.",heroSubtitle:"Product Designer specialising in UX/UI, Design Ops and AI workflows. Ask me about her background, her projects at BNP Paribas or how she industrialises design.",suggestions:[{title:"Profile and added value",intentId:"profile"},{title:"This portfolio’s Design System",intentId:"portfoliods"},{title:"Impact and key figures",intentId:"impact"},{title:"Current search",intentId:"search"}],placeholders:["Ask about Anne-Sophie, her AI skills, her background...","E.g. “How does her design team work with AI?”","Type / for commands: /cv, /projects, /skills, /contact, /stack"],send:"Send",stop:"Stop generating",commands:"Commands",slash:[{cmd:"/cv",desc:"Her CV"},{cmd:"/projects",desc:"List case studies"},{cmd:"/skills",desc:"Key skills"},{cmd:"/contact",desc:"Write to Anne-Sophie"},{cmd:"/stack",desc:"Tools and stack"},{cmd:"/designsystem",desc:"This portfolio’s Design System"}],stopped:"Generation stopped",thinking:"Thinking",followUps:"Go further",actionCV:"View CV",actionEmail:"Send an email",close:"Close",cv:{title:"Curriculum Vitae",tab:"CV",closeTab:"Close the CV",download:"Download as PDF",downloadHint:"If the PDF is not available, the print dialog opens: choose “Save as PDF”.",experience:"Experience",skills:"Skills and tools",education:"Education",languages:"Languages",interests:"Commitments and interests"},emailSubject:"Product Designer opportunity",skill:{badge:"Real skill",caption:"The skill that frames this portfolio’s design, designed and tested by Anne-Sophie with Claude Code. Real project files (in French).",copy:"Copy",copied:"Copied!"},assistantName:"ASL Assistant",you:"You"}},Lh=450,qh=30,zh=2;function Uh(e,t){const[n,r]=C.useState([]),[s,i]=C.useState(null),a=C.useRef(),l=C.useRef(0),u=C.useRef(e);u.current=e;const d=()=>{window.clearTimeout(a.current),window.clearInterval(a.current)};C.useEffect(()=>d,[]);const f=C.useCallback((y,k)=>{d();const p=`m${++l.current}`,c=`m${++l.current}`;r(m=>[...m,{id:p,role:"user",...y},{id:c,role:"assistant",intentId:k,model:t}]),i({id:c,count:0}),a.current=window.setTimeout(()=>{a.current=window.setInterval(()=>{i(m=>{if(!m||m.id!==c)return m;const b=xd(gd(k,u.current,t)).length,j=m.count+zh;return j>=b?(d(),null):{id:c,count:j}})},qh)},Lh)},[t]),g=C.useCallback(y=>{const k=_f(y);return f({text:y},k),k},[f]),h=C.useCallback(y=>f({questionOf:y},y),[f]),x=C.useCallback(()=>{d(),i(y=>(y&&r(k=>k.map(p=>p.id===y.id&&p.role==="assistant"?{...p,stoppedAt:y.count}:p)),null))},[]),v=C.useCallback(()=>{d(),i(null),r([])},[]);return{messages:n,stream:s,isStreaming:s!==null,askText:g,askIntent:h,stop:x,reset:v}}const ql="asl-lang";function Rh(){const[e,t]=C.useState(()=>{try{const n=localStorage.getItem(ql);if(n==="fr"||n==="en")return n}catch{}return"fr"});return C.useEffect(()=>{document.documentElement.lang=e;try{localStorage.setItem(ql,e)}catch{}},[e]),[e,t]}const zl="asl-theme";function Mh(){const[e,t]=C.useState(()=>{try{return localStorage.getItem(zl)==="dark"?"dark":"light"}catch{return"light"}});return C.useEffect(()=>{document.documentElement.dataset.theme=e;try{localStorage.setItem(zl,e)}catch{}},[e]),[e,t]}const Nd="#design-system",Ul=()=>window.location.hash===Nd;function Fh(){const[e,t]=Rh(),[n,r]=Mh(),[s,i]=C.useState("standard"),[a,l]=C.useState(()=>Ul()?["ds"]:[]),[u,d]=C.useState(()=>Ul()?"ds":"chat"),[f,g]=C.useState(!1),[h,x]=C.useState(!1),[v,y]=C.useState(null),[k,p]=C.useState(!1),c=Th[e],m=Uh(e,s),b=C.useRef(null),j=C.useRef(!0);C.useEffect(()=>{const P=b.current;P&&(m.messages.length===0?P.scrollTop=0:j.current&&(P.scrollTop=P.scrollHeight))},[m.messages,m.stream]),C.useEffect(()=>{const P=u==="ds"?Nd:window.location.pathname+window.location.search;window.history.replaceState(null,"",P)},[u]);const D=()=>{const P=b.current;P&&(j.current=P.scrollHeight-P.scrollTop-P.clientHeight<120)},S=C.useCallback(P=>{g(!1),l(Q=>Q.includes(P)?Q:[...Q,P]),d(P)},[]),I=C.useCallback(P=>{l(Q=>Q.filter(me=>me!==P)),d(Q=>Q===P?"chat":Q)},[]),O=C.useCallback(()=>S("cv"),[S]),q=C.useCallback(()=>S("ds"),[S]),be=C.useCallback(()=>p(!0),[]),At=C.useCallback(()=>p(!1),[]),it=()=>{g(!1),window.location.href=`mailto:${ne.email}?subject=${encodeURIComponent(c.emailSubject)}`},br=()=>{m.reset(),d("chat"),y(null),g(!1)},_s=P=>{const Q=go.find(me=>me.id===P);Q&&(d("chat"),m.reset(),j.current=!Mt(Q.intentId).flow,y(P),g(!1),m.askIntent(Q.intentId))},Nn=P=>{j.current=!0,m.askText(P)},Ht=P=>{d("chat"),j.current=!0,m.askIntent(P)},N=P=>P==="cv"?O():it(),E=m.messages[0],L=v?go.find(P=>P.id===v).title[e]:(E==null?void 0:E.role)==="user"?E.text??Mt(E.questionOf??"").question[e]:c.newSession,B={cv:c.cv.tab,ds:hn[e].title};return o.jsxs("div",{className:"relative flex h-dvh overflow-hidden bg-bg text-ink",children:[o.jsx(Ah,{t:c,lang:e,theme:n,open:f,collapsed:h,activeProject:v,onClose:()=>g(!1),onNew:br,onProject:_s,onDesignSystem:q,onCV:O,onEmail:it,setLang:t,setTheme:r}),o.jsxs("main",{className:"relative z-10 flex min-w-0 flex-1 flex-col",children:[o.jsx(Dh,{t:c,title:L,model:s,setModel:i,onMenu:()=>g(!0),onToggleSidebar:()=>x(P=>!P),chatActive:u==="chat",onSelectChat:()=>d("chat"),docTabs:a.map(P=>({id:P,label:B[P],active:u===P,closeLabel:`${c.close} — ${B[P]}`,onSelect:()=>d(P),onClose:()=>I(P)})),docAction:u==="cv"?o.jsxs("button",{onClick:xh,className:"btn-primary !px-4 !py-2",title:c.cv.downloadHint,children:[o.jsx("span",{className:"hidden sm:inline",children:c.cv.download}),o.jsx("span",{className:"sm:hidden",children:"PDF"}),o.jsx(of,{size:16,"aria-hidden":!0})]}):void 0}),u==="ds"?o.jsx(Ch,{lang:e,t:c}):o.jsx("div",{ref:b,onScroll:D,className:"relative z-10 min-h-0 flex-1 overflow-y-auto overflow-x-hidden",children:u==="cv"?o.jsx(vh,{t:c,lang:e}):m.messages.length===0?o.jsx(Eh,{lang:e,t:c,onPick:Ht}):o.jsx("div",{role:"log",className:"mx-auto w-full max-w-3xl space-y-7 px-4 py-8 sm:px-6",children:m.messages.map((P,Q)=>{var me;return o.jsx(uh,{message:P,lang:e,t:c,streamCount:((me=m.stream)==null?void 0:me.id)===P.id?m.stream.count:null,isLast:Q===m.messages.length-1,onAction:N,onFollowUp:Ht,onOpenPrototype:be,onOpenDesignSystem:q},P.id)})})}),u==="chat"&&o.jsx(Sd,{t:c,isStreaming:m.isStreaming,onSend:Nn,onStop:m.stop})]}),k&&o.jsx(Nh,{src:Tf,title:he[e].viewerTitle,note:he[e].viewerNote,restartLabel:he[e].restart,desktopHint:he[e].desktopHint,closeLabel:c.close,onClose:At})]})}yi.createRoot(document.getElementById("root")).render(o.jsx(Vd.StrictMode,{children:o.jsx(Fh,{})}));
