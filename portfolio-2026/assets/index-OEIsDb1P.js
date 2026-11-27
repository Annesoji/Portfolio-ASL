(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function Zd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yl={exports:{}},Ts={},Jl={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yr=Symbol.for("react.element"),Yd=Symbol.for("react.portal"),Jd=Symbol.for("react.fragment"),ep=Symbol.for("react.strict_mode"),tp=Symbol.for("react.profiler"),np=Symbol.for("react.provider"),rp=Symbol.for("react.context"),sp=Symbol.for("react.forward_ref"),ip=Symbol.for("react.suspense"),ap=Symbol.for("react.memo"),op=Symbol.for("react.lazy"),No=Symbol.iterator;function lp(e){return e===null||typeof e!="object"?null:(e=No&&e[No]||e["@@iterator"],typeof e=="function"?e:null)}var eu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tu=Object.assign,nu={};function Sn(e,t,n){this.props=e,this.context=t,this.refs=nu,this.updater=n||eu}Sn.prototype.isReactComponent={};Sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ru(){}ru.prototype=Sn.prototype;function Ia(e,t,n){this.props=e,this.context=t,this.refs=nu,this.updater=n||eu}var Pa=Ia.prototype=new ru;Pa.constructor=Ia;tu(Pa,Sn.prototype);Pa.isPureReactComponent=!0;var Io=Array.isArray,su=Object.prototype.hasOwnProperty,Da={current:null},iu={key:!0,ref:!0,__self:!0,__source:!0};function au(e,t,n){var r,s={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)su.call(t,r)&&!iu.hasOwnProperty(r)&&(s[r]=t[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];s.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:yr,type:e,key:a,ref:o,props:s,_owner:Da.current}}function up(e,t){return{$$typeof:yr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function qa(e){return typeof e=="object"&&e!==null&&e.$$typeof===yr}function cp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Po=/\/+/g;function Qs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?cp(""+e.key):t.toString(36)}function Gr(e,t,n,r,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case yr:case Yd:o=!0}}if(o)return o=e,s=s(o),e=r===""?"."+Qs(o,0):r,Io(s)?(n="",e!=null&&(n=e.replace(Po,"$&/")+"/"),Gr(s,t,n,"",function(d){return d})):s!=null&&(qa(s)&&(s=up(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Po,"$&/")+"/")+e)),t.push(s)),1;if(o=0,r=r===""?".":r+":",Io(e))for(var l=0;l<e.length;l++){a=e[l];var u=r+Qs(a,l);o+=Gr(a,t,n,u,s)}else if(u=lp(e),typeof u=="function")for(e=u.call(e),l=0;!(a=e.next()).done;)a=a.value,u=r+Qs(a,l++),o+=Gr(a,t,n,u,s);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Nr(e,t,n){if(e==null)return e;var r=[],s=0;return Gr(e,r,"","",function(a){return t.call(n,a,s++)}),r}function dp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},Hr={transition:null},pp={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:Hr,ReactCurrentOwner:Da};function ou(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Nr,forEach:function(e,t,n){Nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Nr(e,function(){t++}),t},toArray:function(e){return Nr(e,function(t){return t})||[]},only:function(e){if(!qa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Sn;U.Fragment=Jd;U.Profiler=tp;U.PureComponent=Ia;U.StrictMode=ep;U.Suspense=ip;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pp;U.act=ou;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=tu({},e.props),s=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Da.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)su.call(t,u)&&!iu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:yr,type:e.type,key:s,ref:a,props:r,_owner:o}};U.createContext=function(e){return e={$$typeof:rp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:np,_context:e},e.Consumer=e};U.createElement=au;U.createFactory=function(e){var t=au.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:sp,render:e}};U.isValidElement=qa;U.lazy=function(e){return{$$typeof:op,_payload:{_status:-1,_result:e},_init:dp}};U.memo=function(e,t){return{$$typeof:ap,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=Hr.transition;Hr.transition={};try{e()}finally{Hr.transition=t}};U.unstable_act=ou;U.useCallback=function(e,t){return me.current.useCallback(e,t)};U.useContext=function(e){return me.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return me.current.useDeferredValue(e)};U.useEffect=function(e,t){return me.current.useEffect(e,t)};U.useId=function(){return me.current.useId()};U.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return me.current.useMemo(e,t)};U.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};U.useRef=function(e){return me.current.useRef(e)};U.useState=function(e){return me.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return me.current.useTransition()};U.version="18.3.1";Jl.exports=U;var C=Jl.exports;const mp=Zd(C);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp=C,fp=Symbol.for("react.element"),gp=Symbol.for("react.fragment"),vp=Object.prototype.hasOwnProperty,xp=hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yp={key:!0,ref:!0,__self:!0,__source:!0};function lu(e,t,n){var r,s={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)vp.call(t,r)&&!yp.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:fp,type:e,key:a,ref:o,props:s,_owner:xp.current}}Ts.Fragment=gp;Ts.jsx=lu;Ts.jsxs=lu;Yl.exports=Ts;var i=Yl.exports,Ii={},uu={exports:{}},Ie={},cu={exports:{}},du={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,q){var E=A.length;A.push(q);e:for(;0<E;){var V=E-1>>>1,P=A[V];if(0<s(P,q))A[V]=q,A[E]=P,E=V;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var q=A[0],E=A.pop();if(E!==q){A[0]=E;e:for(var V=0,P=A.length,Z=P>>>1;V<Z;){var ce=2*(V+1)-1,In=A[ce],Dt=ce+1,Ar=A[Dt];if(0>s(In,E))Dt<P&&0>s(Ar,In)?(A[V]=Ar,A[Dt]=E,V=Dt):(A[V]=In,A[ce]=E,V=ce);else if(Dt<P&&0>s(Ar,E))A[V]=Ar,A[Dt]=E,V=Dt;else break e}}return q}function s(A,q){var E=A.sortIndex-q.sortIndex;return E!==0?E:A.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var u=[],d=[],p=1,g=null,f=3,v=!1,x=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(A){for(var q=n(d);q!==null;){if(q.callback===null)r(d);else if(q.startTime<=A)r(d),q.sortIndex=q.expirationTime,t(u,q);else break;q=n(d)}}function b(A){if(y=!1,h(A),!x)if(n(u)!==null)x=!0,Nn(S);else{var q=n(d);q!==null&&Kt(b,q.startTime-A)}}function S(A,q){x=!1,y&&(y=!1,m(I),I=-1),v=!0;var E=f;try{for(h(q),g=n(u);g!==null&&(!(g.expirationTime>q)||A&&!we());){var V=g.callback;if(typeof V=="function"){g.callback=null,f=g.priorityLevel;var P=V(g.expirationTime<=q);q=e.unstable_now(),typeof P=="function"?g.callback=P:g===n(u)&&r(u),h(q)}else r(u);g=n(u)}if(g!==null)var Z=!0;else{var ce=n(d);ce!==null&&Kt(b,ce.startTime-q),Z=!1}return Z}finally{g=null,f=E,v=!1}}var D=!1,j=null,I=-1,_=5,L=-1;function we(){return!(e.unstable_now()-L<_)}function Pt(){if(j!==null){var A=e.unstable_now();L=A;var q=!0;try{q=j(!0,A)}finally{q?ot():(D=!1,j=null)}}else D=!1}var ot;if(typeof c=="function")ot=function(){c(Pt)};else if(typeof MessageChannel<"u"){var Cr=new MessageChannel,Ks=Cr.port2;Cr.port1.onmessage=Pt,ot=function(){Ks.postMessage(null)}}else ot=function(){k(Pt,0)};function Nn(A){j=A,D||(D=!0,ot())}function Kt(A,q){I=k(function(){A(e.unstable_now())},q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,Nn(S))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(A){switch(f){case 1:case 2:case 3:var q=3;break;default:q=f}var E=f;f=q;try{return A()}finally{f=E}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,q){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var E=f;f=A;try{return q()}finally{f=E}},e.unstable_scheduleCallback=function(A,q,E){var V=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?V+E:V):E=V,A){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=E+P,A={id:p++,callback:q,priorityLevel:A,startTime:E,expirationTime:P,sortIndex:-1},E>V?(A.sortIndex=E,t(d,A),n(u)===null&&A===n(d)&&(y?(m(I),I=-1):y=!0,Kt(b,E-V))):(A.sortIndex=P,t(u,A),x||v||(x=!0,Nn(S))),A},e.unstable_shouldYield=we,e.unstable_wrapCallback=function(A){var q=f;return function(){var E=f;f=q;try{return A.apply(this,arguments)}finally{f=E}}}})(du);cu.exports=du;var bp=cu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp=C,Ne=bp;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pu=new Set,er={};function Ht(e,t){vn(e,t),vn(e+"Capture",t)}function vn(e,t){for(er[e]=t,e=0;e<t.length;e++)pu.add(t[e])}var nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pi=Object.prototype.hasOwnProperty,kp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Do={},qo={};function jp(e){return Pi.call(qo,e)?!0:Pi.call(Do,e)?!1:kp.test(e)?qo[e]=!0:(Do[e]=!0,!1)}function Sp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cp(e,t,n,r){if(t===null||typeof t>"u"||Sp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,s,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ta=/[\-:]([a-z])/g;function Ea(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ta,Ea);ie[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ta,Ea);ie[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ta,Ea);ie[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function La(e,t,n,r){var s=ie.hasOwnProperty(t)?ie[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Cp(t,n,s,r)&&(n=null),r||s===null?jp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var at=wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ir=Symbol.for("react.element"),Yt=Symbol.for("react.portal"),Jt=Symbol.for("react.fragment"),Ua=Symbol.for("react.strict_mode"),Di=Symbol.for("react.profiler"),mu=Symbol.for("react.provider"),hu=Symbol.for("react.context"),za=Symbol.for("react.forward_ref"),qi=Symbol.for("react.suspense"),Ti=Symbol.for("react.suspense_list"),Ra=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),fu=Symbol.for("react.offscreen"),To=Symbol.iterator;function Pn(e){return e===null||typeof e!="object"?null:(e=To&&e[To]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Zs;function Mn(e){if(Zs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Zs=t&&t[1]||""}return`
`+Zs+e}var Ys=!1;function Js(e,t){if(!e||Ys)return"";Ys=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),a=r.stack.split(`
`),o=s.length-1,l=a.length-1;1<=o&&0<=l&&s[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==a[l]){var u=`
`+s[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=l);break}}}finally{Ys=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mn(e):""}function Ap(e){switch(e.tag){case 5:return Mn(e.type);case 16:return Mn("Lazy");case 13:return Mn("Suspense");case 19:return Mn("SuspenseList");case 0:case 2:case 15:return e=Js(e.type,!1),e;case 11:return e=Js(e.type.render,!1),e;case 1:return e=Js(e.type,!0),e;default:return""}}function Ei(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jt:return"Fragment";case Yt:return"Portal";case Di:return"Profiler";case Ua:return"StrictMode";case qi:return"Suspense";case Ti:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hu:return(e.displayName||"Context")+".Consumer";case mu:return(e._context.displayName||"Context")+".Provider";case za:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ra:return t=e.displayName||null,t!==null?t:Ei(e.type)||"Memo";case ut:t=e._payload,e=e._init;try{return Ei(e(t))}catch{}}return null}function Np(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ei(t);case 8:return t===Ua?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function St(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ip(e){var t=gu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pr(e){e._valueTracker||(e._valueTracker=Ip(e))}function vu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=gu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ss(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Li(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Eo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=St(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xu(e,t){t=t.checked,t!=null&&La(e,"checked",t,!1)}function Ui(e,t){xu(e,t);var n=St(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?zi(e,t.type,n):t.hasOwnProperty("defaultValue")&&zi(e,t.type,St(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Lo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function zi(e,t,n){(t!=="number"||ss(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fn=Array.isArray;function dn(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+St(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Ri(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Uo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(Fn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:St(n)}}function yu(e,t){var n=St(t.value),r=St(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function zo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Dr,wu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Dr=Dr||document.createElement("div"),Dr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Dr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function tr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pp=["Webkit","ms","Moz","O"];Object.keys(_n).forEach(function(e){Pp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_n[t]=_n[e]})});function ku(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_n.hasOwnProperty(e)&&_n[e]?(""+t).trim():t+"px"}function ju(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=ku(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var Dp=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fi(e,t){if(t){if(Dp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function Bi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=null;function Ma(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _i=null,pn=null,mn=null;function Ro(e){if(e=kr(e)){if(typeof _i!="function")throw Error(w(280));var t=e.stateNode;t&&(t=Rs(t),_i(e.stateNode,e.type,t))}}function Su(e){pn?mn?mn.push(e):mn=[e]:pn=e}function Cu(){if(pn){var e=pn,t=mn;if(mn=pn=null,Ro(e),t)for(e=0;e<t.length;e++)Ro(t[e])}}function Au(e,t){return e(t)}function Nu(){}var ei=!1;function Iu(e,t,n){if(ei)return e(t,n);ei=!0;try{return Au(e,t,n)}finally{ei=!1,(pn!==null||mn!==null)&&(Nu(),Cu())}}function nr(e,t){var n=e.stateNode;if(n===null)return null;var r=Rs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var Vi=!1;if(nt)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){Vi=!0}}),window.addEventListener("test",Dn,Dn),window.removeEventListener("test",Dn,Dn)}catch{Vi=!1}function qp(e,t,n,r,s,a,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(p){this.onError(p)}}var Vn=!1,is=null,as=!1,$i=null,Tp={onError:function(e){Vn=!0,is=e}};function Ep(e,t,n,r,s,a,o,l,u){Vn=!1,is=null,qp.apply(Tp,arguments)}function Lp(e,t,n,r,s,a,o,l,u){if(Ep.apply(this,arguments),Vn){if(Vn){var d=is;Vn=!1,is=null}else throw Error(w(198));as||(as=!0,$i=d)}}function Xt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Pu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Mo(e){if(Xt(e)!==e)throw Error(w(188))}function Up(e){var t=e.alternate;if(!t){if(t=Xt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return Mo(s),e;if(a===r)return Mo(s),t;a=a.sibling}throw Error(w(188))}if(n.return!==r.return)n=s,r=a;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=a;break}if(l===r){o=!0,r=s,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=s;break}if(l===r){o=!0,r=a,n=s;break}l=l.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Du(e){return e=Up(e),e!==null?qu(e):null}function qu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qu(e);if(t!==null)return t;e=e.sibling}return null}var Tu=Ne.unstable_scheduleCallback,Fo=Ne.unstable_cancelCallback,zp=Ne.unstable_shouldYield,Rp=Ne.unstable_requestPaint,K=Ne.unstable_now,Mp=Ne.unstable_getCurrentPriorityLevel,Fa=Ne.unstable_ImmediatePriority,Eu=Ne.unstable_UserBlockingPriority,os=Ne.unstable_NormalPriority,Fp=Ne.unstable_LowPriority,Lu=Ne.unstable_IdlePriority,Es=null,Xe=null;function Bp(e){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(Es,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Vp,Op=Math.log,_p=Math.LN2;function Vp(e){return e>>>=0,e===0?32:31-(Op(e)/_p|0)|0}var qr=64,Tr=4194304;function Bn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ls(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Bn(l):(a&=o,a!==0&&(r=Bn(a)))}else o=n&~s,o!==0?r=Bn(o):a!==0&&(r=Bn(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Oe(t),s=1<<n,r|=e[n],t&=~s;return r}function $p(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Oe(a),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=$p(l,t)):u<=t&&(e.expiredLanes|=l),a&=~l}}function Wi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uu(){var e=qr;return qr<<=1,!(qr&4194240)&&(qr=64),e}function ti(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function br(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=n}function Gp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Oe(n),a=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~a}}function Ba(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Oe(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var M=0;function zu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ru,Oa,Mu,Fu,Bu,Gi=!1,Er=[],ft=null,gt=null,vt=null,rr=new Map,sr=new Map,dt=[],Hp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bo(e,t){switch(e){case"focusin":case"focusout":ft=null;break;case"dragenter":case"dragleave":gt=null;break;case"mouseover":case"mouseout":vt=null;break;case"pointerover":case"pointerout":rr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":sr.delete(t.pointerId)}}function qn(e,t,n,r,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[s]},t!==null&&(t=kr(t),t!==null&&Oa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Xp(e,t,n,r,s){switch(t){case"focusin":return ft=qn(ft,e,t,n,r,s),!0;case"dragenter":return gt=qn(gt,e,t,n,r,s),!0;case"mouseover":return vt=qn(vt,e,t,n,r,s),!0;case"pointerover":var a=s.pointerId;return rr.set(a,qn(rr.get(a)||null,e,t,n,r,s)),!0;case"gotpointercapture":return a=s.pointerId,sr.set(a,qn(sr.get(a)||null,e,t,n,r,s)),!0}return!1}function Ou(e){var t=Ut(e.target);if(t!==null){var n=Xt(t);if(n!==null){if(t=n.tag,t===13){if(t=Pu(n),t!==null){e.blockedOn=t,Bu(e.priority,function(){Mu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Hi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Oi=r,n.target.dispatchEvent(r),Oi=null}else return t=kr(n),t!==null&&Oa(t),e.blockedOn=n,!1;t.shift()}return!0}function Oo(e,t,n){Xr(e)&&n.delete(t)}function Kp(){Gi=!1,ft!==null&&Xr(ft)&&(ft=null),gt!==null&&Xr(gt)&&(gt=null),vt!==null&&Xr(vt)&&(vt=null),rr.forEach(Oo),sr.forEach(Oo)}function Tn(e,t){e.blockedOn===t&&(e.blockedOn=null,Gi||(Gi=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,Kp)))}function ir(e){function t(s){return Tn(s,e)}if(0<Er.length){Tn(Er[0],e);for(var n=1;n<Er.length;n++){var r=Er[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ft!==null&&Tn(ft,e),gt!==null&&Tn(gt,e),vt!==null&&Tn(vt,e),rr.forEach(t),sr.forEach(t),n=0;n<dt.length;n++)r=dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dt.length&&(n=dt[0],n.blockedOn===null);)Ou(n),n.blockedOn===null&&dt.shift()}var hn=at.ReactCurrentBatchConfig,us=!0;function Qp(e,t,n,r){var s=M,a=hn.transition;hn.transition=null;try{M=1,_a(e,t,n,r)}finally{M=s,hn.transition=a}}function Zp(e,t,n,r){var s=M,a=hn.transition;hn.transition=null;try{M=4,_a(e,t,n,r)}finally{M=s,hn.transition=a}}function _a(e,t,n,r){if(us){var s=Hi(e,t,n,r);if(s===null)di(e,t,r,cs,n),Bo(e,r);else if(Xp(s,e,t,n,r))r.stopPropagation();else if(Bo(e,r),t&4&&-1<Hp.indexOf(e)){for(;s!==null;){var a=kr(s);if(a!==null&&Ru(a),a=Hi(e,t,n,r),a===null&&di(e,t,r,cs,n),a===s)break;s=a}s!==null&&r.stopPropagation()}else di(e,t,r,null,n)}}var cs=null;function Hi(e,t,n,r){if(cs=null,e=Ma(r),e=Ut(e),e!==null)if(t=Xt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Pu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return cs=e,null}function _u(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mp()){case Fa:return 1;case Eu:return 4;case os:case Fp:return 16;case Lu:return 536870912;default:return 16}default:return 16}}var mt=null,Va=null,Kr=null;function Vu(){if(Kr)return Kr;var e,t=Va,n=t.length,r,s="value"in mt?mt.value:mt.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===s[a-r];r++);return Kr=s.slice(e,1<r?1-r:void 0)}function Qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Lr(){return!0}function _o(){return!1}function Pe(e){function t(n,r,s,a,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Lr:_o,this.isPropagationStopped=_o,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lr)},persist:function(){},isPersistent:Lr}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$a=Pe(Cn),wr=H({},Cn,{view:0,detail:0}),Yp=Pe(wr),ni,ri,En,Ls=H({},wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==En&&(En&&e.type==="mousemove"?(ni=e.screenX-En.screenX,ri=e.screenY-En.screenY):ri=ni=0,En=e),ni)},movementY:function(e){return"movementY"in e?e.movementY:ri}}),Vo=Pe(Ls),Jp=H({},Ls,{dataTransfer:0}),em=Pe(Jp),tm=H({},wr,{relatedTarget:0}),si=Pe(tm),nm=H({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),rm=Pe(nm),sm=H({},Cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),im=Pe(sm),am=H({},Cn,{data:0}),$o=Pe(am),om={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},um={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=um[e])?!!t[e]:!1}function Wa(){return cm}var dm=H({},wr,{key:function(e){if(e.key){var t=om[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wa,charCode:function(e){return e.type==="keypress"?Qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pm=Pe(dm),mm=H({},Ls,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wo=Pe(mm),hm=H({},wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wa}),fm=Pe(hm),gm=H({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),vm=Pe(gm),xm=H({},Ls,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ym=Pe(xm),bm=[9,13,27,32],Ga=nt&&"CompositionEvent"in window,$n=null;nt&&"documentMode"in document&&($n=document.documentMode);var wm=nt&&"TextEvent"in window&&!$n,$u=nt&&(!Ga||$n&&8<$n&&11>=$n),Go=" ",Ho=!1;function Wu(e,t){switch(e){case"keyup":return bm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var en=!1;function km(e,t){switch(e){case"compositionend":return Gu(t);case"keypress":return t.which!==32?null:(Ho=!0,Go);case"textInput":return e=t.data,e===Go&&Ho?null:e;default:return null}}function jm(e,t){if(en)return e==="compositionend"||!Ga&&Wu(e,t)?(e=Vu(),Kr=Va=mt=null,en=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $u&&t.locale!=="ko"?null:t.data;default:return null}}var Sm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sm[e.type]:t==="textarea"}function Hu(e,t,n,r){Su(r),t=ds(t,"onChange"),0<t.length&&(n=new $a("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wn=null,ar=null;function Cm(e){sc(e,0)}function Us(e){var t=rn(e);if(vu(t))return e}function Am(e,t){if(e==="change")return t}var Xu=!1;if(nt){var ii;if(nt){var ai="oninput"in document;if(!ai){var Ko=document.createElement("div");Ko.setAttribute("oninput","return;"),ai=typeof Ko.oninput=="function"}ii=ai}else ii=!1;Xu=ii&&(!document.documentMode||9<document.documentMode)}function Qo(){Wn&&(Wn.detachEvent("onpropertychange",Ku),ar=Wn=null)}function Ku(e){if(e.propertyName==="value"&&Us(ar)){var t=[];Hu(t,ar,e,Ma(e)),Iu(Cm,t)}}function Nm(e,t,n){e==="focusin"?(Qo(),Wn=t,ar=n,Wn.attachEvent("onpropertychange",Ku)):e==="focusout"&&Qo()}function Im(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Us(ar)}function Pm(e,t){if(e==="click")return Us(t)}function Dm(e,t){if(e==="input"||e==="change")return Us(t)}function qm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ve=typeof Object.is=="function"?Object.is:qm;function or(e,t){if(Ve(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Pi.call(t,s)||!Ve(e[s],t[s]))return!1}return!0}function Zo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yo(e,t){var n=Zo(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zo(n)}}function Qu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zu(){for(var e=window,t=ss();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ss(e.document)}return t}function Ha(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Tm(e){var t=Zu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qu(n.ownerDocument.documentElement,n)){if(r!==null&&Ha(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,a=Math.min(r.start,s);r=r.end===void 0?a:Math.min(r.end,s),!e.extend&&a>r&&(s=r,r=a,a=s),s=Yo(n,a);var o=Yo(n,r);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Em=nt&&"documentMode"in document&&11>=document.documentMode,tn=null,Xi=null,Gn=null,Ki=!1;function Jo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ki||tn==null||tn!==ss(r)||(r=tn,"selectionStart"in r&&Ha(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gn&&or(Gn,r)||(Gn=r,r=ds(Xi,"onSelect"),0<r.length&&(t=new $a("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=tn)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var nn={animationend:Ur("Animation","AnimationEnd"),animationiteration:Ur("Animation","AnimationIteration"),animationstart:Ur("Animation","AnimationStart"),transitionend:Ur("Transition","TransitionEnd")},oi={},Yu={};nt&&(Yu=document.createElement("div").style,"AnimationEvent"in window||(delete nn.animationend.animation,delete nn.animationiteration.animation,delete nn.animationstart.animation),"TransitionEvent"in window||delete nn.transitionend.transition);function zs(e){if(oi[e])return oi[e];if(!nn[e])return e;var t=nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yu)return oi[e]=t[n];return e}var Ju=zs("animationend"),ec=zs("animationiteration"),tc=zs("animationstart"),nc=zs("transitionend"),rc=new Map,el="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function At(e,t){rc.set(e,t),Ht(t,[e])}for(var li=0;li<el.length;li++){var ui=el[li],Lm=ui.toLowerCase(),Um=ui[0].toUpperCase()+ui.slice(1);At(Lm,"on"+Um)}At(Ju,"onAnimationEnd");At(ec,"onAnimationIteration");At(tc,"onAnimationStart");At("dblclick","onDoubleClick");At("focusin","onFocus");At("focusout","onBlur");At(nc,"onTransitionEnd");vn("onMouseEnter",["mouseout","mouseover"]);vn("onMouseLeave",["mouseout","mouseover"]);vn("onPointerEnter",["pointerout","pointerover"]);vn("onPointerLeave",["pointerout","pointerover"]);Ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ht("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zm=new Set("cancel close invalid load scroll toggle".split(" ").concat(On));function tl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Lp(r,t,void 0,e),e.currentTarget=null}function sc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==a&&s.isPropagationStopped())break e;tl(s,l,d),a=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==a&&s.isPropagationStopped())break e;tl(s,l,d),a=u}}}if(as)throw e=$i,as=!1,$i=null,e}function B(e,t){var n=t[ea];n===void 0&&(n=t[ea]=new Set);var r=e+"__bubble";n.has(r)||(ic(t,e,2,!1),n.add(r))}function ci(e,t,n){var r=0;t&&(r|=4),ic(n,e,r,t)}var zr="_reactListening"+Math.random().toString(36).slice(2);function lr(e){if(!e[zr]){e[zr]=!0,pu.forEach(function(n){n!=="selectionchange"&&(zm.has(n)||ci(n,!1,e),ci(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zr]||(t[zr]=!0,ci("selectionchange",!1,t))}}function ic(e,t,n,r){switch(_u(t)){case 1:var s=Qp;break;case 4:s=Zp;break;default:s=_a}n=s.bind(null,t,n,e),s=void 0,!Vi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function di(e,t,n,r,s){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Ut(l),o===null)return;if(u=o.tag,u===5||u===6){r=a=o;continue e}l=l.parentNode}}r=r.return}Iu(function(){var d=a,p=Ma(n),g=[];e:{var f=rc.get(e);if(f!==void 0){var v=$a,x=e;switch(e){case"keypress":if(Qr(n)===0)break e;case"keydown":case"keyup":v=pm;break;case"focusin":x="focus",v=si;break;case"focusout":x="blur",v=si;break;case"beforeblur":case"afterblur":v=si;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Vo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=em;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=fm;break;case Ju:case ec:case tc:v=rm;break;case nc:v=vm;break;case"scroll":v=Yp;break;case"wheel":v=ym;break;case"copy":case"cut":case"paste":v=im;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Wo}var y=(t&4)!==0,k=!y&&e==="scroll",m=y?f!==null?f+"Capture":null:f;y=[];for(var c=d,h;c!==null;){h=c;var b=h.stateNode;if(h.tag===5&&b!==null&&(h=b,m!==null&&(b=nr(c,m),b!=null&&y.push(ur(c,b,h)))),k)break;c=c.return}0<y.length&&(f=new v(f,x,null,n,p),g.push({event:f,listeners:y}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&n!==Oi&&(x=n.relatedTarget||n.fromElement)&&(Ut(x)||x[rt]))break e;if((v||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=d,x=x?Ut(x):null,x!==null&&(k=Xt(x),x!==k||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=d),v!==x)){if(y=Vo,b="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=Wo,b="onPointerLeave",m="onPointerEnter",c="pointer"),k=v==null?f:rn(v),h=x==null?f:rn(x),f=new y(b,c+"leave",v,n,p),f.target=k,f.relatedTarget=h,b=null,Ut(p)===d&&(y=new y(m,c+"enter",x,n,p),y.target=h,y.relatedTarget=k,b=y),k=b,v&&x)t:{for(y=v,m=x,c=0,h=y;h;h=Qt(h))c++;for(h=0,b=m;b;b=Qt(b))h++;for(;0<c-h;)y=Qt(y),c--;for(;0<h-c;)m=Qt(m),h--;for(;c--;){if(y===m||m!==null&&y===m.alternate)break t;y=Qt(y),m=Qt(m)}y=null}else y=null;v!==null&&nl(g,f,v,y,!1),x!==null&&k!==null&&nl(g,k,x,y,!0)}}e:{if(f=d?rn(d):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var S=Am;else if(Xo(f))if(Xu)S=Dm;else{S=Im;var D=Nm}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=Pm);if(S&&(S=S(e,d))){Hu(g,S,n,p);break e}D&&D(e,f,d),e==="focusout"&&(D=f._wrapperState)&&D.controlled&&f.type==="number"&&zi(f,"number",f.value)}switch(D=d?rn(d):window,e){case"focusin":(Xo(D)||D.contentEditable==="true")&&(tn=D,Xi=d,Gn=null);break;case"focusout":Gn=Xi=tn=null;break;case"mousedown":Ki=!0;break;case"contextmenu":case"mouseup":case"dragend":Ki=!1,Jo(g,n,p);break;case"selectionchange":if(Em)break;case"keydown":case"keyup":Jo(g,n,p)}var j;if(Ga)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else en?Wu(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&($u&&n.locale!=="ko"&&(en||I!=="onCompositionStart"?I==="onCompositionEnd"&&en&&(j=Vu()):(mt=p,Va="value"in mt?mt.value:mt.textContent,en=!0)),D=ds(d,I),0<D.length&&(I=new $o(I,e,null,n,p),g.push({event:I,listeners:D}),j?I.data=j:(j=Gu(n),j!==null&&(I.data=j)))),(j=wm?km(e,n):jm(e,n))&&(d=ds(d,"onBeforeInput"),0<d.length&&(p=new $o("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:d}),p.data=j))}sc(g,t)})}function ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ds(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=nr(e,n),a!=null&&r.unshift(ur(e,a,s)),a=nr(e,t),a!=null&&r.push(ur(e,a,s))),e=e.return}return r}function Qt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nl(e,t,n,r,s){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,s?(u=nr(n,a),u!=null&&o.unshift(ur(n,u,l))):s||(u=nr(n,a),u!=null&&o.push(ur(n,u,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Rm=/\r\n?/g,Mm=/\u0000|\uFFFD/g;function rl(e){return(typeof e=="string"?e:""+e).replace(Rm,`
`).replace(Mm,"")}function Rr(e,t,n){if(t=rl(t),rl(e)!==t&&n)throw Error(w(425))}function ps(){}var Qi=null,Zi=null;function Yi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ji=typeof setTimeout=="function"?setTimeout:void 0,Fm=typeof clearTimeout=="function"?clearTimeout:void 0,sl=typeof Promise=="function"?Promise:void 0,Bm=typeof queueMicrotask=="function"?queueMicrotask:typeof sl<"u"?function(e){return sl.resolve(null).then(e).catch(Om)}:Ji;function Om(e){setTimeout(function(){throw e})}function pi(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),ir(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ir(t)}function xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function il(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var An=Math.random().toString(36).slice(2),He="__reactFiber$"+An,cr="__reactProps$"+An,rt="__reactContainer$"+An,ea="__reactEvents$"+An,_m="__reactListeners$"+An,Vm="__reactHandles$"+An;function Ut(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rt]||n[He]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=il(e);e!==null;){if(n=e[He])return n;e=il(e)}return t}e=n,n=e.parentNode}return null}function kr(e){return e=e[He]||e[rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Rs(e){return e[cr]||null}var ta=[],sn=-1;function Nt(e){return{current:e}}function O(e){0>sn||(e.current=ta[sn],ta[sn]=null,sn--)}function F(e,t){sn++,ta[sn]=e.current,e.current=t}var Ct={},ue=Nt(Ct),xe=Nt(!1),Ot=Ct;function xn(e,t){var n=e.type.contextTypes;if(!n)return Ct;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in n)s[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ye(e){return e=e.childContextTypes,e!=null}function ms(){O(xe),O(ue)}function al(e,t,n){if(ue.current!==Ct)throw Error(w(168));F(ue,t),F(xe,n)}function ac(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(w(108,Np(e)||"Unknown",s));return H({},n,r)}function hs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ct,Ot=ue.current,F(ue,e),F(xe,xe.current),!0}function ol(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=ac(e,t,Ot),r.__reactInternalMemoizedMergedChildContext=e,O(xe),O(ue),F(ue,e)):O(xe),F(xe,n)}var Ze=null,Ms=!1,mi=!1;function oc(e){Ze===null?Ze=[e]:Ze.push(e)}function $m(e){Ms=!0,oc(e)}function It(){if(!mi&&Ze!==null){mi=!0;var e=0,t=M;try{var n=Ze;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ze=null,Ms=!1}catch(s){throw Ze!==null&&(Ze=Ze.slice(e+1)),Tu(Fa,It),s}finally{M=t,mi=!1}}return null}var an=[],on=0,fs=null,gs=0,qe=[],Te=0,_t=null,Ye=1,Je="";function qt(e,t){an[on++]=gs,an[on++]=fs,fs=e,gs=t}function lc(e,t,n){qe[Te++]=Ye,qe[Te++]=Je,qe[Te++]=_t,_t=e;var r=Ye;e=Je;var s=32-Oe(r)-1;r&=~(1<<s),n+=1;var a=32-Oe(t)+s;if(30<a){var o=s-s%5;a=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Ye=1<<32-Oe(t)+s|n<<s|r,Je=a+e}else Ye=1<<a|n<<s|r,Je=e}function Xa(e){e.return!==null&&(qt(e,1),lc(e,1,0))}function Ka(e){for(;e===fs;)fs=an[--on],an[on]=null,gs=an[--on],an[on]=null;for(;e===_t;)_t=qe[--Te],qe[Te]=null,Je=qe[--Te],qe[Te]=null,Ye=qe[--Te],qe[Te]=null}var Ae=null,Ce=null,$=!1,Be=null;function uc(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ll(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ae=e,Ce=xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ae=e,Ce=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_t!==null?{id:Ye,overflow:Je}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ae=e,Ce=null,!0):!1;default:return!1}}function na(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ra(e){if($){var t=Ce;if(t){var n=t;if(!ll(e,t)){if(na(e))throw Error(w(418));t=xt(n.nextSibling);var r=Ae;t&&ll(e,t)?uc(r,n):(e.flags=e.flags&-4097|2,$=!1,Ae=e)}}else{if(na(e))throw Error(w(418));e.flags=e.flags&-4097|2,$=!1,Ae=e}}}function ul(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ae=e}function Mr(e){if(e!==Ae)return!1;if(!$)return ul(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Yi(e.type,e.memoizedProps)),t&&(t=Ce)){if(na(e))throw cc(),Error(w(418));for(;t;)uc(e,t),t=xt(t.nextSibling)}if(ul(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ce=xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ce=null}}else Ce=Ae?xt(e.stateNode.nextSibling):null;return!0}function cc(){for(var e=Ce;e;)e=xt(e.nextSibling)}function yn(){Ce=Ae=null,$=!1}function Qa(e){Be===null?Be=[e]:Be.push(e)}var Wm=at.ReactCurrentBatchConfig;function Ln(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var s=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=s.refs;o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Fr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cl(e){var t=e._init;return t(e._payload)}function dc(e){function t(m,c){if(e){var h=m.deletions;h===null?(m.deletions=[c],m.flags|=16):h.push(c)}}function n(m,c){if(!e)return null;for(;c!==null;)t(m,c),c=c.sibling;return null}function r(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function s(m,c){return m=kt(m,c),m.index=0,m.sibling=null,m}function a(m,c,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<c?(m.flags|=2,c):h):(m.flags|=2,c)):(m.flags|=1048576,c)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,c,h,b){return c===null||c.tag!==6?(c=bi(h,m.mode,b),c.return=m,c):(c=s(c,h),c.return=m,c)}function u(m,c,h,b){var S=h.type;return S===Jt?p(m,c,h.props.children,b,h.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ut&&cl(S)===c.type)?(b=s(c,h.props),b.ref=Ln(m,c,h),b.return=m,b):(b=rs(h.type,h.key,h.props,null,m.mode,b),b.ref=Ln(m,c,h),b.return=m,b)}function d(m,c,h,b){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=wi(h,m.mode,b),c.return=m,c):(c=s(c,h.children||[]),c.return=m,c)}function p(m,c,h,b,S){return c===null||c.tag!==7?(c=Ft(h,m.mode,b,S),c.return=m,c):(c=s(c,h),c.return=m,c)}function g(m,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=bi(""+c,m.mode,h),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ir:return h=rs(c.type,c.key,c.props,null,m.mode,h),h.ref=Ln(m,null,c),h.return=m,h;case Yt:return c=wi(c,m.mode,h),c.return=m,c;case ut:var b=c._init;return g(m,b(c._payload),h)}if(Fn(c)||Pn(c))return c=Ft(c,m.mode,h,null),c.return=m,c;Fr(m,c)}return null}function f(m,c,h,b){var S=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:l(m,c,""+h,b);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ir:return h.key===S?u(m,c,h,b):null;case Yt:return h.key===S?d(m,c,h,b):null;case ut:return S=h._init,f(m,c,S(h._payload),b)}if(Fn(h)||Pn(h))return S!==null?null:p(m,c,h,b,null);Fr(m,h)}return null}function v(m,c,h,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return m=m.get(h)||null,l(c,m,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ir:return m=m.get(b.key===null?h:b.key)||null,u(c,m,b,S);case Yt:return m=m.get(b.key===null?h:b.key)||null,d(c,m,b,S);case ut:var D=b._init;return v(m,c,h,D(b._payload),S)}if(Fn(b)||Pn(b))return m=m.get(h)||null,p(c,m,b,S,null);Fr(c,b)}return null}function x(m,c,h,b){for(var S=null,D=null,j=c,I=c=0,_=null;j!==null&&I<h.length;I++){j.index>I?(_=j,j=null):_=j.sibling;var L=f(m,j,h[I],b);if(L===null){j===null&&(j=_);break}e&&j&&L.alternate===null&&t(m,j),c=a(L,c,I),D===null?S=L:D.sibling=L,D=L,j=_}if(I===h.length)return n(m,j),$&&qt(m,I),S;if(j===null){for(;I<h.length;I++)j=g(m,h[I],b),j!==null&&(c=a(j,c,I),D===null?S=j:D.sibling=j,D=j);return $&&qt(m,I),S}for(j=r(m,j);I<h.length;I++)_=v(j,m,I,h[I],b),_!==null&&(e&&_.alternate!==null&&j.delete(_.key===null?I:_.key),c=a(_,c,I),D===null?S=_:D.sibling=_,D=_);return e&&j.forEach(function(we){return t(m,we)}),$&&qt(m,I),S}function y(m,c,h,b){var S=Pn(h);if(typeof S!="function")throw Error(w(150));if(h=S.call(h),h==null)throw Error(w(151));for(var D=S=null,j=c,I=c=0,_=null,L=h.next();j!==null&&!L.done;I++,L=h.next()){j.index>I?(_=j,j=null):_=j.sibling;var we=f(m,j,L.value,b);if(we===null){j===null&&(j=_);break}e&&j&&we.alternate===null&&t(m,j),c=a(we,c,I),D===null?S=we:D.sibling=we,D=we,j=_}if(L.done)return n(m,j),$&&qt(m,I),S;if(j===null){for(;!L.done;I++,L=h.next())L=g(m,L.value,b),L!==null&&(c=a(L,c,I),D===null?S=L:D.sibling=L,D=L);return $&&qt(m,I),S}for(j=r(m,j);!L.done;I++,L=h.next())L=v(j,m,I,L.value,b),L!==null&&(e&&L.alternate!==null&&j.delete(L.key===null?I:L.key),c=a(L,c,I),D===null?S=L:D.sibling=L,D=L);return e&&j.forEach(function(Pt){return t(m,Pt)}),$&&qt(m,I),S}function k(m,c,h,b){if(typeof h=="object"&&h!==null&&h.type===Jt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ir:e:{for(var S=h.key,D=c;D!==null;){if(D.key===S){if(S=h.type,S===Jt){if(D.tag===7){n(m,D.sibling),c=s(D,h.props.children),c.return=m,m=c;break e}}else if(D.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ut&&cl(S)===D.type){n(m,D.sibling),c=s(D,h.props),c.ref=Ln(m,D,h),c.return=m,m=c;break e}n(m,D);break}else t(m,D);D=D.sibling}h.type===Jt?(c=Ft(h.props.children,m.mode,b,h.key),c.return=m,m=c):(b=rs(h.type,h.key,h.props,null,m.mode,b),b.ref=Ln(m,c,h),b.return=m,m=b)}return o(m);case Yt:e:{for(D=h.key;c!==null;){if(c.key===D)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(m,c.sibling),c=s(c,h.children||[]),c.return=m,m=c;break e}else{n(m,c);break}else t(m,c);c=c.sibling}c=wi(h,m.mode,b),c.return=m,m=c}return o(m);case ut:return D=h._init,k(m,c,D(h._payload),b)}if(Fn(h))return x(m,c,h,b);if(Pn(h))return y(m,c,h,b);Fr(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(m,c.sibling),c=s(c,h),c.return=m,m=c):(n(m,c),c=bi(h,m.mode,b),c.return=m,m=c),o(m)):n(m,c)}return k}var bn=dc(!0),pc=dc(!1),vs=Nt(null),xs=null,ln=null,Za=null;function Ya(){Za=ln=xs=null}function Ja(e){var t=vs.current;O(vs),e._currentValue=t}function sa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fn(e,t){xs=e,Za=ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ve=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(Za!==e)if(e={context:e,memoizedValue:t,next:null},ln===null){if(xs===null)throw Error(w(308));ln=e,xs.dependencies={lanes:0,firstContext:e}}else ln=ln.next=e;return t}var zt=null;function eo(e){zt===null?zt=[e]:zt.push(e)}function mc(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,eo(t)):(n.next=s.next,s.next=n),t.interleaved=n,st(e,r)}function st(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ct=!1;function to(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,st(e,n)}return s=r.interleaved,s===null?(t.next=t,eo(r)):(t.next=s.next,s.next=t),r.interleaved=t,st(e,n)}function Zr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ba(e,n)}}function dl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?s=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ys(e,t,n,r){var s=e.updateQueue;ct=!1;var a=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?a=d:o.next=d,o=u;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=u))}if(a!==null){var g=s.baseState;o=0,p=d=u=null,l=a;do{var f=l.lane,v=l.eventTime;if((r&f)===f){p!==null&&(p=p.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,y=l;switch(f=t,v=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){g=x.call(v,g,f);break e}g=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,f=typeof x=="function"?x.call(v,g,f):x,f==null)break e;g=H({},g,f);break e;case 2:ct=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=s.effects,f===null?s.effects=[l]:f.push(l))}else v={eventTime:v,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=v,u=g):p=p.next=v,o|=f;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;f=l,l=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(p===null&&(u=g),s.baseState=u,s.firstBaseUpdate=d,s.lastBaseUpdate=p,t=s.shared.interleaved,t!==null){s=t;do o|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);$t|=o,e.lanes=o,e.memoizedState=g}}function pl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(w(191,s));s.call(r)}}}var jr={},Ke=Nt(jr),dr=Nt(jr),pr=Nt(jr);function Rt(e){if(e===jr)throw Error(w(174));return e}function no(e,t){switch(F(pr,t),F(dr,e),F(Ke,jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Mi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Mi(t,e)}O(Ke),F(Ke,t)}function wn(){O(Ke),O(dr),O(pr)}function fc(e){Rt(pr.current);var t=Rt(Ke.current),n=Mi(t,e.type);t!==n&&(F(dr,e),F(Ke,n))}function ro(e){dr.current===e&&(O(Ke),O(dr))}var W=Nt(0);function bs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hi=[];function so(){for(var e=0;e<hi.length;e++)hi[e]._workInProgressVersionPrimary=null;hi.length=0}var Yr=at.ReactCurrentDispatcher,fi=at.ReactCurrentBatchConfig,Vt=0,G=null,Y=null,ee=null,ws=!1,Hn=!1,mr=0,Gm=0;function ae(){throw Error(w(321))}function io(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ve(e[n],t[n]))return!1;return!0}function ao(e,t,n,r,s,a){if(Vt=a,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yr.current=e===null||e.memoizedState===null?Qm:Zm,e=n(r,s),Hn){a=0;do{if(Hn=!1,mr=0,25<=a)throw Error(w(301));a+=1,ee=Y=null,t.updateQueue=null,Yr.current=Ym,e=n(r,s)}while(Hn)}if(Yr.current=ks,t=Y!==null&&Y.next!==null,Vt=0,ee=Y=G=null,ws=!1,t)throw Error(w(300));return e}function oo(){var e=mr!==0;return mr=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?G.memoizedState=ee=e:ee=ee.next=e,ee}function ze(){if(Y===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=ee===null?G.memoizedState:ee.next;if(t!==null)ee=t,Y=e;else{if(e===null)throw Error(w(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},ee===null?G.memoizedState=ee=e:ee=ee.next=e}return ee}function hr(e,t){return typeof t=="function"?t(e):t}function gi(e){var t=ze(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=Y,s=r.baseQueue,a=n.pending;if(a!==null){if(s!==null){var o=s.next;s.next=a.next,a.next=o}r.baseQueue=s=a,n.pending=null}if(s!==null){a=s.next,r=r.baseState;var l=o=null,u=null,d=a;do{var p=d.lane;if((Vt&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=g,o=r):u=u.next=g,G.lanes|=p,$t|=p}d=d.next}while(d!==null&&d!==a);u===null?o=r:u.next=l,Ve(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do a=s.lane,G.lanes|=a,$t|=a,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vi(e){var t=ze(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do a=e(a,o.action),o=o.next;while(o!==s);Ve(a,t.memoizedState)||(ve=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function gc(){}function vc(e,t){var n=G,r=ze(),s=t(),a=!Ve(r.memoizedState,s);if(a&&(r.memoizedState=s,ve=!0),r=r.queue,lo(bc.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,fr(9,yc.bind(null,n,r,s,t),void 0,null),te===null)throw Error(w(349));Vt&30||xc(n,t,s)}return s}function xc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yc(e,t,n,r){t.value=n,t.getSnapshot=r,wc(t)&&kc(e)}function bc(e,t,n){return n(function(){wc(t)&&kc(e)})}function wc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ve(e,n)}catch{return!0}}function kc(e){var t=st(e,1);t!==null&&_e(t,e,1,-1)}function ml(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hr,lastRenderedState:e},t.queue=e,e=e.dispatch=Km.bind(null,G,e),[t.memoizedState,e]}function fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function jc(){return ze().memoizedState}function Jr(e,t,n,r){var s=We();G.flags|=e,s.memoizedState=fr(1|t,n,void 0,r===void 0?null:r)}function Fs(e,t,n,r){var s=ze();r=r===void 0?null:r;var a=void 0;if(Y!==null){var o=Y.memoizedState;if(a=o.destroy,r!==null&&io(r,o.deps)){s.memoizedState=fr(t,n,a,r);return}}G.flags|=e,s.memoizedState=fr(1|t,n,a,r)}function hl(e,t){return Jr(8390656,8,e,t)}function lo(e,t){return Fs(2048,8,e,t)}function Sc(e,t){return Fs(4,2,e,t)}function Cc(e,t){return Fs(4,4,e,t)}function Ac(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nc(e,t,n){return n=n!=null?n.concat([e]):null,Fs(4,4,Ac.bind(null,t,e),n)}function uo(){}function Ic(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&io(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Pc(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&io(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Dc(e,t,n){return Vt&21?(Ve(n,t)||(n=Uu(),G.lanes|=n,$t|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=n)}function Hm(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=fi.transition;fi.transition={};try{e(!1),t()}finally{M=n,fi.transition=r}}function qc(){return ze().memoizedState}function Xm(e,t,n){var r=wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Tc(e))Ec(t,n);else if(n=mc(e,t,n,r),n!==null){var s=pe();_e(n,e,r,s),Lc(n,t,r)}}function Km(e,t,n){var r=wt(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tc(e))Ec(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(s.hasEagerState=!0,s.eagerState=l,Ve(l,o)){var u=t.interleaved;u===null?(s.next=s,eo(t)):(s.next=u.next,u.next=s),t.interleaved=s;return}}catch{}finally{}n=mc(e,t,s,r),n!==null&&(s=pe(),_e(n,e,r,s),Lc(n,t,r))}}function Tc(e){var t=e.alternate;return e===G||t!==null&&t===G}function Ec(e,t){Hn=ws=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Lc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ba(e,n)}}var ks={readContext:Ue,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},Qm={readContext:Ue,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:hl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Jr(4194308,4,Ac.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Jr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Jr(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xm.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:ml,useDebugValue:uo,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=ml(!1),t=e[0];return e=Hm.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,s=We();if($){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),te===null)throw Error(w(349));Vt&30||xc(r,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,hl(bc.bind(null,r,a,e),[e]),r.flags|=2048,fr(9,yc.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=We(),t=te.identifierPrefix;if($){var n=Je,r=Ye;n=(r&~(1<<32-Oe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=mr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Gm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zm={readContext:Ue,useCallback:Ic,useContext:Ue,useEffect:lo,useImperativeHandle:Nc,useInsertionEffect:Sc,useLayoutEffect:Cc,useMemo:Pc,useReducer:gi,useRef:jc,useState:function(){return gi(hr)},useDebugValue:uo,useDeferredValue:function(e){var t=ze();return Dc(t,Y.memoizedState,e)},useTransition:function(){var e=gi(hr)[0],t=ze().memoizedState;return[e,t]},useMutableSource:gc,useSyncExternalStore:vc,useId:qc,unstable_isNewReconciler:!1},Ym={readContext:Ue,useCallback:Ic,useContext:Ue,useEffect:lo,useImperativeHandle:Nc,useInsertionEffect:Sc,useLayoutEffect:Cc,useMemo:Pc,useReducer:vi,useRef:jc,useState:function(){return vi(hr)},useDebugValue:uo,useDeferredValue:function(e){var t=ze();return Y===null?t.memoizedState=e:Dc(t,Y.memoizedState,e)},useTransition:function(){var e=vi(hr)[0],t=ze().memoizedState;return[e,t]},useMutableSource:gc,useSyncExternalStore:vc,useId:qc,unstable_isNewReconciler:!1};function Me(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ia(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bs={isMounted:function(e){return(e=e._reactInternals)?Xt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),s=wt(e),a=tt(r,s);a.payload=t,n!=null&&(a.callback=n),t=yt(e,a,s),t!==null&&(_e(t,e,s,r),Zr(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),s=wt(e),a=tt(r,s);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=yt(e,a,s),t!==null&&(_e(t,e,s,r),Zr(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=wt(e),s=tt(n,r);s.tag=2,t!=null&&(s.callback=t),t=yt(e,s,r),t!==null&&(_e(t,e,r,n),Zr(t,e,r))}};function fl(e,t,n,r,s,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!or(n,r)||!or(s,a):!0}function Uc(e,t,n){var r=!1,s=Ct,a=t.contextType;return typeof a=="object"&&a!==null?a=Ue(a):(s=ye(t)?Ot:ue.current,r=t.contextTypes,a=(r=r!=null)?xn(e,s):Ct),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Bs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function gl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bs.enqueueReplaceState(t,t.state,null)}function aa(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},to(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=Ue(a):(a=ye(t)?Ot:ue.current,s.context=xn(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ia(e,t,a,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Bs.enqueueReplaceState(s,s.state,null),ys(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function kn(e,t){try{var n="",r=t;do n+=Ap(r),r=r.return;while(r);var s=n}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function xi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function oa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Jm=typeof WeakMap=="function"?WeakMap:Map;function zc(e,t,n){n=tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ss||(Ss=!0,va=r),oa(e,t)},n}function Rc(e,t,n){n=tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){oa(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){oa(e,t),typeof r!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function vl(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Jm;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=mh.bind(null,e,t,n),t.then(e,e))}function xl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yl(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=tt(-1,1),t.tag=2,yt(n,t,1))),n.lanes|=1),e)}var eh=at.ReactCurrentOwner,ve=!1;function de(e,t,n,r){t.child=e===null?pc(t,null,n,r):bn(t,e.child,n,r)}function bl(e,t,n,r,s){n=n.render;var a=t.ref;return fn(t,s),r=ao(e,t,n,r,a,s),n=oo(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,it(e,t,s)):($&&n&&Xa(t),t.flags|=1,de(e,t,r,s),t.child)}function wl(e,t,n,r,s){if(e===null){var a=n.type;return typeof a=="function"&&!xo(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Mc(e,t,a,r,s)):(e=rs(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&s)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:or,n(o,r)&&e.ref===t.ref)return it(e,t,s)}return t.flags|=1,e=kt(a,r),e.ref=t.ref,e.return=t,t.child=e}function Mc(e,t,n,r,s){if(e!==null){var a=e.memoizedProps;if(or(a,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=a,(e.lanes&s)!==0)e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,it(e,t,s)}return la(e,t,n,r,s)}function Fc(e,t,n){var r=t.pendingProps,s=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(cn,Se),Se|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(cn,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,F(cn,Se),Se|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,F(cn,Se),Se|=r;return de(e,t,s,n),t.child}function Bc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function la(e,t,n,r,s){var a=ye(n)?Ot:ue.current;return a=xn(t,a),fn(t,s),n=ao(e,t,n,r,a,s),r=oo(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,it(e,t,s)):($&&r&&Xa(t),t.flags|=1,de(e,t,n,s),t.child)}function kl(e,t,n,r,s){if(ye(n)){var a=!0;hs(t)}else a=!1;if(fn(t,s),t.stateNode===null)es(e,t),Uc(t,n,r),aa(t,n,r,s),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ue(d):(d=ye(n)?Ot:ue.current,d=xn(t,d));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&gl(t,o,r,d),ct=!1;var f=t.memoizedState;o.state=f,ys(t,r,o,s),u=t.memoizedState,l!==r||f!==u||xe.current||ct?(typeof p=="function"&&(ia(t,n,p,r),u=t.memoizedState),(l=ct||fl(t,n,l,r,f,u,d))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,hc(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Me(t.type,l),o.props=d,g=t.pendingProps,f=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ue(u):(u=ye(n)?Ot:ue.current,u=xn(t,u));var v=n.getDerivedStateFromProps;(p=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||f!==u)&&gl(t,o,r,u),ct=!1,f=t.memoizedState,o.state=f,ys(t,r,o,s);var x=t.memoizedState;l!==g||f!==x||xe.current||ct?(typeof v=="function"&&(ia(t,n,v,r),x=t.memoizedState),(d=ct||fl(t,n,d,r,f,x,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return ua(e,t,n,r,a,s)}function ua(e,t,n,r,s,a){Bc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return s&&ol(t,n,!1),it(e,t,a);r=t.stateNode,eh.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=bn(t,e.child,null,a),t.child=bn(t,null,l,a)):de(e,t,l,a),t.memoizedState=r.state,s&&ol(t,n,!0),t.child}function Oc(e){var t=e.stateNode;t.pendingContext?al(e,t.pendingContext,t.pendingContext!==t.context):t.context&&al(e,t.context,!1),no(e,t.containerInfo)}function jl(e,t,n,r,s){return yn(),Qa(s),t.flags|=256,de(e,t,n,r),t.child}var ca={dehydrated:null,treeContext:null,retryLane:0};function da(e){return{baseLanes:e,cachePool:null,transitions:null}}function _c(e,t,n){var r=t.pendingProps,s=W.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),F(W,s&1),e===null)return ra(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Vs(o,r,0,null),e=Ft(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=da(n),t.memoizedState=ca,e):co(t,o));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return th(e,t,o,r,l,s,n);if(a){a=r.fallback,o=t.mode,s=e.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=kt(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?a=kt(l,a):(a=Ft(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?da(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=ca,r}return a=e.child,e=a.sibling,r=kt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function co(e,t){return t=Vs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Br(e,t,n,r){return r!==null&&Qa(r),bn(t,e.child,null,n),e=co(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function th(e,t,n,r,s,a,o){if(n)return t.flags&256?(t.flags&=-257,r=xi(Error(w(422))),Br(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,s=t.mode,r=Vs({mode:"visible",children:r.children},s,0,null),a=Ft(a,s,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&bn(t,e.child,null,o),t.child.memoizedState=da(o),t.memoizedState=ca,a);if(!(t.mode&1))return Br(e,t,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(w(419)),r=xi(a,r,void 0),Br(e,t,o,r)}if(l=(o&e.childLanes)!==0,ve||l){if(r=te,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,st(e,s),_e(r,e,s,-1))}return vo(),r=xi(Error(w(421))),Br(e,t,o,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=hh.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,Ce=xt(s.nextSibling),Ae=t,$=!0,Be=null,e!==null&&(qe[Te++]=Ye,qe[Te++]=Je,qe[Te++]=_t,Ye=e.id,Je=e.overflow,_t=t),t=co(t,r.children),t.flags|=4096,t)}function Sl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),sa(e.return,t,n)}function yi(e,t,n,r,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=s)}function Vc(e,t,n){var r=t.pendingProps,s=r.revealOrder,a=r.tail;if(de(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sl(e,n,t);else if(e.tag===19)Sl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(W,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&bs(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),yi(t,!1,s,n,a);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&bs(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}yi(t,!0,n,null,a);break;case"together":yi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function es(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function it(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$t|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nh(e,t,n){switch(t.tag){case 3:Oc(t),yn();break;case 5:fc(t);break;case 1:ye(t.type)&&hs(t);break;case 4:no(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;F(vs,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?_c(e,t,n):(F(W,W.current&1),e=it(e,t,n),e!==null?e.sibling:null);F(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Vc(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),F(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,Fc(e,t,n)}return it(e,t,n)}var $c,pa,Wc,Gc;$c=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pa=function(){};Wc=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,Rt(Ke.current);var a=null;switch(n){case"input":s=Li(e,s),r=Li(e,r),a=[];break;case"select":s=H({},s,{value:void 0}),r=H({},r,{value:void 0}),a=[];break;case"textarea":s=Ri(e,s),r=Ri(e,r),a=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ps)}Fi(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(er.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in r){var u=r[d];if(l=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(a||(a=[]),a.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(a=a||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(er.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&B("scroll",e),a||l===u||(a=[])):(a=a||[]).push(d,u))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};Gc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Un(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rh(e,t,n){var r=t.pendingProps;switch(Ka(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ye(t.type)&&ms(),oe(t),null;case 3:return r=t.stateNode,wn(),O(xe),O(ue),so(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Mr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Be!==null&&(ba(Be),Be=null))),pa(e,t),oe(t),null;case 5:ro(t);var s=Rt(pr.current);if(n=t.type,e!==null&&t.stateNode!=null)Wc(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return oe(t),null}if(e=Rt(Ke.current),Mr(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[He]=t,r[cr]=a,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(s=0;s<On.length;s++)B(On[s],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Eo(r,a),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},B("invalid",r);break;case"textarea":Uo(r,a),B("invalid",r)}Fi(n,a),s=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&Rr(r.textContent,l,e),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Rr(r.textContent,l,e),s=["children",""+l]):er.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&B("scroll",r)}switch(n){case"input":Pr(r),Lo(r,a,!0);break;case"textarea":Pr(r),zo(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=ps)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[He]=t,e[cr]=r,$c(e,t,!1,!1),t.stateNode=e;e:{switch(o=Bi(n,r),n){case"dialog":B("cancel",e),B("close",e),s=r;break;case"iframe":case"object":case"embed":B("load",e),s=r;break;case"video":case"audio":for(s=0;s<On.length;s++)B(On[s],e);s=r;break;case"source":B("error",e),s=r;break;case"img":case"image":case"link":B("error",e),B("load",e),s=r;break;case"details":B("toggle",e),s=r;break;case"input":Eo(e,r),s=Li(e,r),B("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=H({},r,{value:void 0}),B("invalid",e);break;case"textarea":Uo(e,r),s=Ri(e,r),B("invalid",e);break;default:s=r}Fi(n,s),l=s;for(a in l)if(l.hasOwnProperty(a)){var u=l[a];a==="style"?ju(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&wu(e,u)):a==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&tr(e,u):typeof u=="number"&&tr(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(er.hasOwnProperty(a)?u!=null&&a==="onScroll"&&B("scroll",e):u!=null&&La(e,a,u,o))}switch(n){case"input":Pr(e),Lo(e,r,!1);break;case"textarea":Pr(e),zo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+St(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?dn(e,!!r.multiple,a,!1):r.defaultValue!=null&&dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=ps)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Gc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Rt(pr.current),Rt(Ke.current),Mr(t)){if(r=t.stateNode,n=t.memoizedProps,r[He]=t,(a=r.nodeValue!==n)&&(e=Ae,e!==null))switch(e.tag){case 3:Rr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Rr(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[He]=t,t.stateNode=r}return oe(t),null;case 13:if(O(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&Ce!==null&&t.mode&1&&!(t.flags&128))cc(),yn(),t.flags|=98560,a=!1;else if(a=Mr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(w(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(w(317));a[He]=t}else yn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),a=!1}else Be!==null&&(ba(Be),Be=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?J===0&&(J=3):vo())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return wn(),pa(e,t),e===null&&lr(t.stateNode.containerInfo),oe(t),null;case 10:return Ja(t.type._context),oe(t),null;case 17:return ye(t.type)&&ms(),oe(t),null;case 19:if(O(W),a=t.memoizedState,a===null)return oe(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Un(a,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=bs(e),o!==null){for(t.flags|=128,Un(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(W,W.current&1|2),t.child}e=e.sibling}a.tail!==null&&K()>jn&&(t.flags|=128,r=!0,Un(a,!1),t.lanes=4194304)}else{if(!r)if(e=bs(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Un(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!$)return oe(t),null}else 2*K()-a.renderingStartTime>jn&&n!==1073741824&&(t.flags|=128,r=!0,Un(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=K(),t.sibling=null,n=W.current,F(W,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return go(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Se&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function sh(e,t){switch(Ka(t),t.tag){case 1:return ye(t.type)&&ms(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wn(),O(xe),O(ue),so(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ro(t),null;case 13:if(O(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(W),null;case 4:return wn(),null;case 10:return Ja(t.type._context),null;case 22:case 23:return go(),null;case 24:return null;default:return null}}var Or=!1,le=!1,ih=typeof WeakSet=="function"?WeakSet:Set,N=null;function un(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function ma(e,t,n){try{n()}catch(r){X(e,t,r)}}var Cl=!1;function ah(e,t){if(Qi=us,e=Zu(),Ha(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,p=0,g=e,f=null;t:for(;;){for(var v;g!==n||s!==0&&g.nodeType!==3||(l=o+s),g!==a||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(v=g.firstChild)!==null;)f=g,g=v;for(;;){if(g===e)break t;if(f===n&&++d===s&&(l=o),f===a&&++p===r&&(u=o),(v=g.nextSibling)!==null)break;g=f,f=g.parentNode}g=v}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zi={focusedElem:e,selectionRange:n},us=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,k=x.memoizedState,m=t.stateNode,c=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:Me(t.type,y),k);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(b){X(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return x=Cl,Cl=!1,x}function Xn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&ma(t,n,a)}s=s.next}while(s!==r)}}function Os(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ha(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hc(e){var t=e.alternate;t!==null&&(e.alternate=null,Hc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[He],delete t[cr],delete t[ea],delete t[_m],delete t[Vm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xc(e){return e.tag===5||e.tag===3||e.tag===4}function Al(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ps));else if(r!==4&&(e=e.child,e!==null))for(fa(e,t,n),e=e.sibling;e!==null;)fa(e,t,n),e=e.sibling}function ga(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ga(e,t,n),e=e.sibling;e!==null;)ga(e,t,n),e=e.sibling}var ne=null,Fe=!1;function lt(e,t,n){for(n=n.child;n!==null;)Kc(e,t,n),n=n.sibling}function Kc(e,t,n){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(Es,n)}catch{}switch(n.tag){case 5:le||un(n,t);case 6:var r=ne,s=Fe;ne=null,lt(e,t,n),ne=r,Fe=s,ne!==null&&(Fe?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Fe?(e=ne,n=n.stateNode,e.nodeType===8?pi(e.parentNode,n):e.nodeType===1&&pi(e,n),ir(e)):pi(ne,n.stateNode));break;case 4:r=ne,s=Fe,ne=n.stateNode.containerInfo,Fe=!0,lt(e,t,n),ne=r,Fe=s;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var a=s,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&ma(n,t,o),s=s.next}while(s!==r)}lt(e,t,n);break;case 1:if(!le&&(un(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){X(n,t,l)}lt(e,t,n);break;case 21:lt(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,lt(e,t,n),le=r):lt(e,t,n);break;default:lt(e,t,n)}}function Nl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ih),t.forEach(function(r){var s=fh.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ne=l.stateNode,Fe=!1;break e;case 3:ne=l.stateNode.containerInfo,Fe=!0;break e;case 4:ne=l.stateNode.containerInfo,Fe=!0;break e}l=l.return}if(ne===null)throw Error(w(160));Kc(a,o,s),ne=null,Fe=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(d){X(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qc(t,e),t=t.sibling}function Qc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),$e(e),r&4){try{Xn(3,e,e.return),Os(3,e)}catch(y){X(e,e.return,y)}try{Xn(5,e,e.return)}catch(y){X(e,e.return,y)}}break;case 1:Re(t,e),$e(e),r&512&&n!==null&&un(n,n.return);break;case 5:if(Re(t,e),$e(e),r&512&&n!==null&&un(n,n.return),e.flags&32){var s=e.stateNode;try{tr(s,"")}catch(y){X(e,e.return,y)}}if(r&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&xu(s,a),Bi(l,o);var d=Bi(l,a);for(o=0;o<u.length;o+=2){var p=u[o],g=u[o+1];p==="style"?ju(s,g):p==="dangerouslySetInnerHTML"?wu(s,g):p==="children"?tr(s,g):La(s,p,g,d)}switch(l){case"input":Ui(s,a);break;case"textarea":yu(s,a);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?dn(s,!!a.multiple,v,!1):f!==!!a.multiple&&(a.defaultValue!=null?dn(s,!!a.multiple,a.defaultValue,!0):dn(s,!!a.multiple,a.multiple?[]:"",!1))}s[cr]=a}catch(y){X(e,e.return,y)}}break;case 6:if(Re(t,e),$e(e),r&4){if(e.stateNode===null)throw Error(w(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(y){X(e,e.return,y)}}break;case 3:if(Re(t,e),$e(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ir(t.containerInfo)}catch(y){X(e,e.return,y)}break;case 4:Re(t,e),$e(e);break;case 13:Re(t,e),$e(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(ho=K())),r&4&&Nl(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(le=(d=le)||p,Re(t,e),le=d):Re(t,e),$e(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(N=e,p=e.child;p!==null;){for(g=N=p;N!==null;){switch(f=N,v=f.child,f.tag){case 0:case 11:case 14:case 15:Xn(4,f,f.return);break;case 1:un(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){X(r,n,y)}}break;case 5:un(f,f.return);break;case 22:if(f.memoizedState!==null){Pl(g);continue}}v!==null?(v.return=f,N=v):Pl(g)}p=p.sibling}e:for(p=null,g=e;;){if(g.tag===5){if(p===null){p=g;try{s=g.stateNode,d?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=ku("display",o))}catch(y){X(e,e.return,y)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(y){X(e,e.return,y)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Re(t,e),$e(e),r&4&&Nl(e);break;case 21:break;default:Re(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xc(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(tr(s,""),r.flags&=-33);var a=Al(e);ga(e,a,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Al(e);fa(e,l,o);break;default:throw Error(w(161))}}catch(u){X(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function oh(e,t,n){N=e,Zc(e)}function Zc(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var s=N,a=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Or;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||le;l=Or;var d=le;if(Or=o,(le=u)&&!d)for(N=s;N!==null;)o=N,u=o.child,o.tag===22&&o.memoizedState!==null?Dl(s):u!==null?(u.return=o,N=u):Dl(s);for(;a!==null;)N=a,Zc(a),a=a.sibling;N=s,Or=l,le=d}Il(e)}else s.subtreeFlags&8772&&a!==null?(a.return=s,N=a):Il(e)}}function Il(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||Os(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Me(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&pl(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pl(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&ir(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}le||t.flags&512&&ha(t)}catch(f){X(t,t.return,f)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Pl(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Dl(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Os(4,t)}catch(u){X(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(u){X(t,s,u)}}var a=t.return;try{ha(t)}catch(u){X(t,a,u)}break;case 5:var o=t.return;try{ha(t)}catch(u){X(t,o,u)}}}catch(u){X(t,t.return,u)}if(t===e){N=null;break}var l=t.sibling;if(l!==null){l.return=t.return,N=l;break}N=t.return}}var lh=Math.ceil,js=at.ReactCurrentDispatcher,po=at.ReactCurrentOwner,Le=at.ReactCurrentBatchConfig,R=0,te=null,Q=null,se=0,Se=0,cn=Nt(0),J=0,gr=null,$t=0,_s=0,mo=0,Kn=null,fe=null,ho=0,jn=1/0,Qe=null,Ss=!1,va=null,bt=null,_r=!1,ht=null,Cs=0,Qn=0,xa=null,ts=-1,ns=0;function pe(){return R&6?K():ts!==-1?ts:ts=K()}function wt(e){return e.mode&1?R&2&&se!==0?se&-se:Wm.transition!==null?(ns===0&&(ns=Uu()),ns):(e=M,e!==0||(e=window.event,e=e===void 0?16:_u(e.type)),e):1}function _e(e,t,n,r){if(50<Qn)throw Qn=0,xa=null,Error(w(185));br(e,n,r),(!(R&2)||e!==te)&&(e===te&&(!(R&2)&&(_s|=n),J===4&&pt(e,se)),be(e,r),n===1&&R===0&&!(t.mode&1)&&(jn=K()+500,Ms&&It()))}function be(e,t){var n=e.callbackNode;Wp(e,t);var r=ls(e,e===te?se:0);if(r===0)n!==null&&Fo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fo(n),t===1)e.tag===0?$m(ql.bind(null,e)):oc(ql.bind(null,e)),Bm(function(){!(R&6)&&It()}),n=null;else{switch(zu(r)){case 1:n=Fa;break;case 4:n=Eu;break;case 16:n=os;break;case 536870912:n=Lu;break;default:n=os}n=id(n,Yc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Yc(e,t){if(ts=-1,ns=0,R&6)throw Error(w(327));var n=e.callbackNode;if(gn()&&e.callbackNode!==n)return null;var r=ls(e,e===te?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=As(e,r);else{t=r;var s=R;R|=2;var a=ed();(te!==e||se!==t)&&(Qe=null,jn=K()+500,Mt(e,t));do try{dh();break}catch(l){Jc(e,l)}while(!0);Ya(),js.current=a,R=s,Q!==null?t=0:(te=null,se=0,t=J)}if(t!==0){if(t===2&&(s=Wi(e),s!==0&&(r=s,t=ya(e,s))),t===1)throw n=gr,Mt(e,0),pt(e,r),be(e,K()),n;if(t===6)pt(e,r);else{if(s=e.current.alternate,!(r&30)&&!uh(s)&&(t=As(e,r),t===2&&(a=Wi(e),a!==0&&(r=a,t=ya(e,a))),t===1))throw n=gr,Mt(e,0),pt(e,r),be(e,K()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:Tt(e,fe,Qe);break;case 3:if(pt(e,r),(r&130023424)===r&&(t=ho+500-K(),10<t)){if(ls(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Ji(Tt.bind(null,e,fe,Qe),t);break}Tt(e,fe,Qe);break;case 4:if(pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var o=31-Oe(r);a=1<<o,o=t[o],o>s&&(s=o),r&=~a}if(r=s,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lh(r/1960))-r,10<r){e.timeoutHandle=Ji(Tt.bind(null,e,fe,Qe),r);break}Tt(e,fe,Qe);break;case 5:Tt(e,fe,Qe);break;default:throw Error(w(329))}}}return be(e,K()),e.callbackNode===n?Yc.bind(null,e):null}function ya(e,t){var n=Kn;return e.current.memoizedState.isDehydrated&&(Mt(e,t).flags|=256),e=As(e,t),e!==2&&(t=fe,fe=n,t!==null&&ba(t)),e}function ba(e){fe===null?fe=e:fe.push.apply(fe,e)}function uh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],a=s.getSnapshot;s=s.value;try{if(!Ve(a(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pt(e,t){for(t&=~mo,t&=~_s,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Oe(t),r=1<<n;e[n]=-1,t&=~r}}function ql(e){if(R&6)throw Error(w(327));gn();var t=ls(e,0);if(!(t&1))return be(e,K()),null;var n=As(e,t);if(e.tag!==0&&n===2){var r=Wi(e);r!==0&&(t=r,n=ya(e,r))}if(n===1)throw n=gr,Mt(e,0),pt(e,t),be(e,K()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tt(e,fe,Qe),be(e,K()),null}function fo(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(jn=K()+500,Ms&&It())}}function Wt(e){ht!==null&&ht.tag===0&&!(R&6)&&gn();var t=R;R|=1;var n=Le.transition,r=M;try{if(Le.transition=null,M=1,e)return e()}finally{M=r,Le.transition=n,R=t,!(R&6)&&It()}}function go(){Se=cn.current,O(cn)}function Mt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Fm(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(Ka(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ms();break;case 3:wn(),O(xe),O(ue),so();break;case 5:ro(r);break;case 4:wn();break;case 13:O(W);break;case 19:O(W);break;case 10:Ja(r.type._context);break;case 22:case 23:go()}n=n.return}if(te=e,Q=e=kt(e.current,null),se=Se=t,J=0,gr=null,mo=_s=$t=0,fe=Kn=null,zt!==null){for(t=0;t<zt.length;t++)if(n=zt[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=s,r.next=o}n.pending=r}zt=null}return e}function Jc(e,t){do{var n=Q;try{if(Ya(),Yr.current=ks,ws){for(var r=G.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ws=!1}if(Vt=0,ee=Y=G=null,Hn=!1,mr=0,po.current=null,n===null||n.return===null){J=1,gr=t,Q=null;break}e:{var a=e,o=n.return,l=n,u=t;if(t=se,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=l,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=xl(o);if(v!==null){v.flags&=-257,yl(v,o,l,a,t),v.mode&1&&vl(a,d,t),t=v,u=d;var x=t.updateQueue;if(x===null){var y=new Set;y.add(u),t.updateQueue=y}else x.add(u);break e}else{if(!(t&1)){vl(a,d,t),vo();break e}u=Error(w(426))}}else if($&&l.mode&1){var k=xl(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),yl(k,o,l,a,t),Qa(kn(u,l));break e}}a=u=kn(u,l),J!==4&&(J=2),Kn===null?Kn=[a]:Kn.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=zc(a,u,t);dl(a,m);break e;case 1:l=u;var c=a.type,h=a.stateNode;if(!(a.flags&128)&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(bt===null||!bt.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var b=Rc(a,l,t);dl(a,b);break e}}a=a.return}while(a!==null)}nd(n)}catch(S){t=S,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function ed(){var e=js.current;return js.current=ks,e===null?ks:e}function vo(){(J===0||J===3||J===2)&&(J=4),te===null||!($t&268435455)&&!(_s&268435455)||pt(te,se)}function As(e,t){var n=R;R|=2;var r=ed();(te!==e||se!==t)&&(Qe=null,Mt(e,t));do try{ch();break}catch(s){Jc(e,s)}while(!0);if(Ya(),R=n,js.current=r,Q!==null)throw Error(w(261));return te=null,se=0,J}function ch(){for(;Q!==null;)td(Q)}function dh(){for(;Q!==null&&!zp();)td(Q)}function td(e){var t=sd(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?nd(e):Q=t,po.current=null}function nd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=sh(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,Q=null;return}}else if(n=rh(n,t,Se),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);J===0&&(J=5)}function Tt(e,t,n){var r=M,s=Le.transition;try{Le.transition=null,M=1,ph(e,t,n,r)}finally{Le.transition=s,M=r}return null}function ph(e,t,n,r){do gn();while(ht!==null);if(R&6)throw Error(w(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Gp(e,a),e===te&&(Q=te=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_r||(_r=!0,id(os,function(){return gn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Le.transition,Le.transition=null;var o=M;M=1;var l=R;R|=4,po.current=null,ah(e,n),Qc(n,e),Tm(Zi),us=!!Qi,Zi=Qi=null,e.current=n,oh(n),Rp(),R=l,M=o,Le.transition=a}else e.current=n;if(_r&&(_r=!1,ht=e,Cs=s),a=e.pendingLanes,a===0&&(bt=null),Bp(n.stateNode),be(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Ss)throw Ss=!1,e=va,va=null,e;return Cs&1&&e.tag!==0&&gn(),a=e.pendingLanes,a&1?e===xa?Qn++:(Qn=0,xa=e):Qn=0,It(),null}function gn(){if(ht!==null){var e=zu(Cs),t=Le.transition,n=M;try{if(Le.transition=null,M=16>e?16:e,ht===null)var r=!1;else{if(e=ht,ht=null,Cs=0,R&6)throw Error(w(331));var s=R;for(R|=4,N=e.current;N!==null;){var a=N,o=a.child;if(N.flags&16){var l=a.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(N=d;N!==null;){var p=N;switch(p.tag){case 0:case 11:case 15:Xn(8,p,a)}var g=p.child;if(g!==null)g.return=p,N=g;else for(;N!==null;){p=N;var f=p.sibling,v=p.return;if(Hc(p),p===d){N=null;break}if(f!==null){f.return=v,N=f;break}N=v}}}var x=a.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}N=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,N=o;else e:for(;N!==null;){if(a=N,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Xn(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,N=m;break e}N=a.return}}var c=e.current;for(N=c;N!==null;){o=N;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,N=h;else e:for(o=c;N!==null;){if(l=N,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Os(9,l)}}catch(S){X(l,l.return,S)}if(l===o){N=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,N=b;break e}N=l.return}}if(R=s,It(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(Es,e)}catch{}r=!0}return r}finally{M=n,Le.transition=t}}return!1}function Tl(e,t,n){t=kn(n,t),t=zc(e,t,1),e=yt(e,t,1),t=pe(),e!==null&&(br(e,1,t),be(e,t))}function X(e,t,n){if(e.tag===3)Tl(e,e,n);else for(;t!==null;){if(t.tag===3){Tl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bt===null||!bt.has(r))){e=kn(n,e),e=Rc(t,e,1),t=yt(t,e,1),e=pe(),t!==null&&(br(t,1,e),be(t,e));break}}t=t.return}}function mh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(se&n)===n&&(J===4||J===3&&(se&130023424)===se&&500>K()-ho?Mt(e,0):mo|=n),be(e,t)}function rd(e,t){t===0&&(e.mode&1?(t=Tr,Tr<<=1,!(Tr&130023424)&&(Tr=4194304)):t=1);var n=pe();e=st(e,t),e!==null&&(br(e,t,n),be(e,n))}function hh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rd(e,n)}function fh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),rd(e,n)}var sd;sd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ve=!1,nh(e,t,n);ve=!!(e.flags&131072)}else ve=!1,$&&t.flags&1048576&&lc(t,gs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;es(e,t),e=t.pendingProps;var s=xn(t,ue.current);fn(t,n),s=ao(null,t,r,e,s,n);var a=oo();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(a=!0,hs(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,to(t),s.updater=Bs,t.stateNode=s,s._reactInternals=t,aa(t,r,e,n),t=ua(null,t,r,!0,a,n)):(t.tag=0,$&&a&&Xa(t),de(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(es(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=vh(r),e=Me(r,e),s){case 0:t=la(null,t,r,e,n);break e;case 1:t=kl(null,t,r,e,n);break e;case 11:t=bl(null,t,r,e,n);break e;case 14:t=wl(null,t,r,Me(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Me(r,s),la(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Me(r,s),kl(e,t,r,s,n);case 3:e:{if(Oc(t),e===null)throw Error(w(387));r=t.pendingProps,a=t.memoizedState,s=a.element,hc(e,t),ys(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=kn(Error(w(423)),t),t=jl(e,t,r,n,s);break e}else if(r!==s){s=kn(Error(w(424)),t),t=jl(e,t,r,n,s);break e}else for(Ce=xt(t.stateNode.containerInfo.firstChild),Ae=t,$=!0,Be=null,n=pc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yn(),r===s){t=it(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return fc(t),e===null&&ra(t),r=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,o=s.children,Yi(r,s)?o=null:a!==null&&Yi(r,a)&&(t.flags|=32),Bc(e,t),de(e,t,o,n),t.child;case 6:return e===null&&ra(t),null;case 13:return _c(e,t,n);case 4:return no(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bn(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Me(r,s),bl(e,t,r,s,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,a=t.memoizedProps,o=s.value,F(vs,r._currentValue),r._currentValue=o,a!==null)if(Ve(a.value,o)){if(a.children===s.children&&!xe.current){t=it(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(a.tag===1){u=tt(-1,n&-n),u.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),sa(a.return,n,t),l.lanes|=n;break}u=u.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(w(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),sa(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}de(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,fn(t,n),s=Ue(s),r=r(s),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,s=Me(r,t.pendingProps),s=Me(r.type,s),wl(e,t,r,s,n);case 15:return Mc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Me(r,s),es(e,t),t.tag=1,ye(r)?(e=!0,hs(t)):e=!1,fn(t,n),Uc(t,r,s),aa(t,r,s,n),ua(null,t,r,!0,e,n);case 19:return Vc(e,t,n);case 22:return Fc(e,t,n)}throw Error(w(156,t.tag))};function id(e,t){return Tu(e,t)}function gh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new gh(e,t,n,r)}function xo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vh(e){if(typeof e=="function")return xo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===za)return 11;if(e===Ra)return 14}return 2}function kt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function rs(e,t,n,r,s,a){var o=2;if(r=e,typeof e=="function")xo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Jt:return Ft(n.children,s,a,t);case Ua:o=8,s|=8;break;case Di:return e=Ee(12,n,t,s|2),e.elementType=Di,e.lanes=a,e;case qi:return e=Ee(13,n,t,s),e.elementType=qi,e.lanes=a,e;case Ti:return e=Ee(19,n,t,s),e.elementType=Ti,e.lanes=a,e;case fu:return Vs(n,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mu:o=10;break e;case hu:o=9;break e;case za:o=11;break e;case Ra:o=14;break e;case ut:o=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Ee(o,n,t,s),t.elementType=e,t.type=r,t.lanes=a,t}function Ft(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function Vs(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=fu,e.lanes=n,e.stateNode={isHidden:!1},e}function bi(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function wi(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xh(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ti(0),this.expirationTimes=ti(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ti(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function yo(e,t,n,r,s,a,o,l,u){return e=new xh(e,t,n,l,u),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ee(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},to(a),e}function yh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ad(e){if(!e)return Ct;e=e._reactInternals;e:{if(Xt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(ye(n))return ac(e,n,t)}return t}function od(e,t,n,r,s,a,o,l,u){return e=yo(n,r,!0,e,s,a,o,l,u),e.context=ad(null),n=e.current,r=pe(),s=wt(n),a=tt(r,s),a.callback=t??null,yt(n,a,s),e.current.lanes=s,br(e,s,r),be(e,r),e}function $s(e,t,n,r){var s=t.current,a=pe(),o=wt(s);return n=ad(n),t.context===null?t.context=n:t.pendingContext=n,t=tt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yt(s,t,o),e!==null&&(_e(e,s,o,a),Zr(e,s,o)),o}function Ns(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function El(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bo(e,t){El(e,t),(e=e.alternate)&&El(e,t)}function bh(){return null}var ld=typeof reportError=="function"?reportError:function(e){console.error(e)};function wo(e){this._internalRoot=e}Ws.prototype.render=wo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));$s(e,t,null,null)};Ws.prototype.unmount=wo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wt(function(){$s(null,e,null,null)}),t[rt]=null}};function Ws(e){this._internalRoot=e}Ws.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dt.length&&t!==0&&t<dt[n].priority;n++);dt.splice(n,0,e),n===0&&Ou(e)}};function ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Gs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ll(){}function wh(e,t,n,r,s){if(s){if(typeof r=="function"){var a=r;r=function(){var d=Ns(o);a.call(d)}}var o=od(t,r,e,0,null,!1,!1,"",Ll);return e._reactRootContainer=o,e[rt]=o.current,lr(e.nodeType===8?e.parentNode:e),Wt(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var d=Ns(u);l.call(d)}}var u=yo(e,0,!1,null,null,!1,!1,"",Ll);return e._reactRootContainer=u,e[rt]=u.current,lr(e.nodeType===8?e.parentNode:e),Wt(function(){$s(t,u,n,r)}),u}function Hs(e,t,n,r,s){var a=n._reactRootContainer;if(a){var o=a;if(typeof s=="function"){var l=s;s=function(){var u=Ns(o);l.call(u)}}$s(t,o,e,s)}else o=wh(n,t,e,s,r);return Ns(o)}Ru=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Bn(t.pendingLanes);n!==0&&(Ba(t,n|1),be(t,K()),!(R&6)&&(jn=K()+500,It()))}break;case 13:Wt(function(){var r=st(e,1);if(r!==null){var s=pe();_e(r,e,1,s)}}),bo(e,1)}};Oa=function(e){if(e.tag===13){var t=st(e,134217728);if(t!==null){var n=pe();_e(t,e,134217728,n)}bo(e,134217728)}};Mu=function(e){if(e.tag===13){var t=wt(e),n=st(e,t);if(n!==null){var r=pe();_e(n,e,t,r)}bo(e,t)}};Fu=function(){return M};Bu=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};_i=function(e,t,n){switch(t){case"input":if(Ui(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Rs(r);if(!s)throw Error(w(90));vu(r),Ui(r,s)}}}break;case"textarea":yu(e,n);break;case"select":t=n.value,t!=null&&dn(e,!!n.multiple,t,!1)}};Au=fo;Nu=Wt;var kh={usingClientEntryPoint:!1,Events:[kr,rn,Rs,Su,Cu,fo]},zn={findFiberByHostInstance:Ut,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jh={bundleType:zn.bundleType,version:zn.version,rendererPackageName:zn.rendererPackageName,rendererConfig:zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:at.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Du(e),e===null?null:e.stateNode},findFiberByHostInstance:zn.findFiberByHostInstance||bh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vr.isDisabled&&Vr.supportsFiber)try{Es=Vr.inject(jh),Xe=Vr}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kh;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ko(t))throw Error(w(200));return yh(e,t,null,n)};Ie.createRoot=function(e,t){if(!ko(e))throw Error(w(299));var n=!1,r="",s=ld;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=yo(e,1,!1,null,null,n,!1,r,s),e[rt]=t.current,lr(e.nodeType===8?e.parentNode:e),new wo(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Du(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return Wt(e)};Ie.hydrate=function(e,t,n){if(!Gs(t))throw Error(w(200));return Hs(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!ko(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,s=!1,a="",o=ld;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=od(t,null,e,1,n??null,s,!1,a,o),e[rt]=t.current,lr(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Ws(t)};Ie.render=function(e,t,n){if(!Gs(t))throw Error(w(200));return Hs(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!Gs(e))throw Error(w(40));return e._reactRootContainer?(Wt(function(){Hs(null,null,e,!1,function(){e._reactRootContainer=null,e[rt]=null})}),!0):!1};Ie.unstable_batchedUpdates=fo;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gs(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Hs(e,t,n,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";function ud(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ud)}catch(e){console.error(e)}}ud(),uu.exports=Ie;var cd=uu.exports,Ul=cd;Ii.createRoot=Ul.createRoot,Ii.hydrateRoot=Ul.hydrateRoot;/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),dd=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ch={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=C.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:a,iconNode:o,...l},u)=>C.createElement("svg",{ref:u,...Ch,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:dd("lucide",s),...l},[...o.map(([d,p])=>C.createElement(d,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=(e,t)=>{const n=C.forwardRef(({className:r,...s},a)=>C.createElement(Ah,{ref:a,iconNode:t,className:dd(`lucide-${Sh(e)}`,r),...s}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=T("ArrowDownToLine",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=T("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=T("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=T("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=T("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=T("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=T("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=T("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=T("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=T("ChevronsLeftRight",[["path",{d:"m9 7-5 5 5 5",key:"j5w590"}],["path",{d:"m15 7 5 5-5 5",key:"1bl6da"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=T("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=T("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=T("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=T("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=T("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=T("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=T("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=T("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=T("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=T("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=T("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=T("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=T("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=T("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=T("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=T("MessagesSquare",[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z",key:"p1xzt8"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",key:"1cx29u"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=T("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=T("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=T("PenTool",[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=T("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=T("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=T("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=T("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=T("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=T("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=T("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=T("Slash",[["path",{d:"M22 2 2 22",key:"y4kqgn"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=T("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=T("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=T("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=T("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=T("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=T("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=T("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Vh='<!-- source-hash: b4bd94f1e332 -->\n---\nname: asl-design-system\ndescription: Design System of Anne-Sophie Leroy\'s portfolio — colours through tokens, neutral and solid surfaces, reserved shadow, colour meanings, component structure (buttons, tags, cards, menus), action hierarchy, layout and typography without all caps. Use it whenever you create or modify a component, a screen, a style, a colour or a button in this project, even if the request does not mention a “design system” (for example “add a card”, “make this block more visible”, “create a banner”).\n---\n\n# ASL portfolio Design System\n\nThis portfolio has a precise direction: restrained, readable, with colour reserved for what matters.\nYour role is to build screens that blend into it, not to make them “prettier” in your own way.\nWhen in doubt, go simpler.\n\n## Before writing code\n\nThe system is organised in three files, from the most general to the most specific. Open the ones you need:\n\n| You want to… | Read |\n|---|---|\n| Create or modify a component (button, tag, card, menu…) | `references/composants.md`: every component is described there (example, anatomy, states). Follow its structure rather than inventing one. |\n| Choose a colour, a text size, a radius, an icon | `references/styles.md`. The source of truth for values remains `src/index.css`. |\n| Compose a screen, write a label, check accessibility | `references/fondations.md` |\n\nThese three files are also the source of the portfolio\'s “Design System” page: a rule changed here changes the page.\n\n## The four non-negotiable rules\n\nThese are the ones whose omission shows on screen straight away.\n\n### 1. No hard-coded colour\n\nEvery colour goes through a token (`bg-accent`, `text-ink`, `border-line`, `var(--ai)`…). Never `#640017`, `rgb(...)` or a standard Tailwind colour (`bg-red-500`, `text-gray-600`, `text-white`).\n\nWhy: tokens change value with the theme. A hard-coded colour stays fixed, so the screen breaks in dark mode, and it leaves the palette without anyone noticing.\n\nConsequence: do not use Tailwind\'s `dark:` prefix. The theme is carried by `data-theme` on `<html>`; with tokens, both themes work without writing anything more.\n\n- Yes: `className="bg-accent text-accent-fg"`\n- No: `className="bg-[#640017] text-white"`\n\n### 2. Neutral, solid surfaces\n\nA background is a solid, neutral colour: `bg-bg`, `bg-elevated` or `bg-sidebar`. No gradient, no texture, no decorative shape, and no large coloured surface (an olive banner, a burgundy card).\n\nColour lives in the small elements that carry an action or a piece of information: buttons, tags, icon badges.\n\nWhy: background effects were tried and then removed, because they got in the way of reading without adding anything. And a large coloured surface overwhelms everything around it. To make a block stand out, work with text size, space and a single coloured action: see `references/fondations.md`, “Layout”.\n\n- Yes: `className="rounded-3xl border border-line bg-elevated p-5"` with a `btn-primary` inside\n- No: `className="bg-olive text-olive-fg"` across the full width\n\n### 3. The shadow is reserved\n\nOnly one shadow exists, `shadow-signature`, and it serves two purposes: the prompt input (with its send button) and the main action of a screen (`btn-primary`). A card, a tag, a secondary menu or an image has no shadow: they stand out through a flat fill and a thin border (`border border-line`).\n\nWhy: if everything has a shadow, nothing stands out any more. The shadow says “this is where you act”.\n\n### 4. One colour, one meaning\n\n| Colour | Meaning | Tokens |\n|---|---|---|\n| Solid olive | Main action | `olive`, `olive-fg` |\n| Pale olive | Positive element (tag, badge) | `olive-tint`, `olive-text` |\n| Burgundy | Secondary action as an icon button, step number, icon badge, link, monogram | `accent`, `accent-fg`, `accent-text`, `accent-tint` |\n| Turquoise | What comes from the AI | `--ai`, `--ai-text`, `--ai-tint` |\n| Orange | Friction point, alert | `--warn-text`, `--warn-tint` |\n| Vermilion | Punctuation only: list bullet, caret, small arrow. Never a text, never a background | `vermillion` |\n\nOlive exists in two intensities, and the difference matters: solid for a button, pale for information. A tag is never solid olive, a button never pale olive: a button that is not the main action stays neutral (outlined or `bg-surface-2`).\n\nDo not repurpose a colour because it “would look good”. If no meaning matches, stay neutral: `text-ink`, `text-muted`, `border-line`. Figures, in particular, stay neutral.\n\nWhy: as soon as a colour has two meanings, the reader can no longer rely on it.\n\n## When the request contradicts a rule\n\nSometimes you are explicitly asked for what a rule forbids (“add a gradient”, “add a shadow so it stands out”). The person wants a result — for the block to be seen — not necessarily that particular means.\n\nBuild the compliant version that reaches the same goal, then say clearly what you did not do and why, and offer to do it anyway if they insist. Do not add it silently, and do not refuse without delivering anything.\n\n## Composing the screen\n\nA screen can follow the four rules and still fail: elements that overlap, lines that separate nothing. Before creating or reorganising a block, read “Layout” in `references/fondations.md`.\n\nWorth remembering even without opening it: **no text is in all caps**, neither button, nor tag, nor label (no `uppercase` class), and **in a button, the icon is to the right of the label**.\n\n## Before delivering\n\nFirst run the check script on the files you created or modified:\n\n```bash\nnode .claude/skills/asl-design-system/scripts/check.mjs src/components/MonComposant.tsx\n```\n\nWith no argument, it checks all of `src/`. It reports two levels:\n\n- `✗` an error: a rule is broken (hard-coded colour, gradient, unplanned shadow, all-caps text), fix it before delivering;\n- `?` to check: the script cannot decide on its own (a shadow, a coloured surface). See whether the use is legitimate.\n\nThe script does not see everything. It judges neither the meaning of a colour (rule 4), nor the structure of a component (icon on the right, suggestion card), nor the composition: a text that covers another escapes it. These points remain yours.\n\nIf you have to depart from a rule, write the reason just above the line, then say so clearly in your reply:\n\n```tsx\n{/* ds-ignore: le prototype est toujours clair, son support reste blanc */}\n```\n\nA reported deviation is better than a hidden one.\n',$h=`<!-- source-hash: da9feafc9322 -->
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
`,Wh=`<!-- source-hash: 84ab3c194b63 -->
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
`,Gh=`<!-- source-hash: 793e7e263f9c -->
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
`,Ad=`# Styles

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
`,Hh=e=>/^[\p{L}«“"]/u.test(e.trim());function zl(e,t){const n=e.startsWith("---")?e.slice(e.indexOf(`
---`,3)+4):e,r=[];let s,a=null,o=null,l=!1;for(const u of n.split(`
`)){u.startsWith("```")&&(l=!l);const d=l?null:u.match(/^(#{1,6})\s+(.*)$/);if(d){const p=d[1].length;if(p<t){s=p===1?void 0:d[2],a=null,o=null;continue}if(p===t){a={family:s,title:d[2],lead:"",sections:[]},o={title:"",body:""},a.sections.push(o),r.push(a);continue}if(p===t+1&&a){o={title:d[2],body:""},a.sections.push(o);continue}}o&&(o.body+=`${u}
`)}for(const u of r){const d=u.sections[0],p=d.body.split(`
`),g=p.findIndex(f=>f.trim());if(g>=0&&Hh(p[g])){let f=g;for(;f<p.length&&p[f].trim();)f++;u.lead=p.slice(g,f).join(" "),d.body=p.slice(f).join(`
`)}u.sections=u.sections.map(f=>({...f,body:f.body.trim()})).filter(f=>f.title||f.body)}return r}function Nd(e){const t=[],n=[];let r=!1;for(const s of e.split(`
`)){s.startsWith("```")&&(r=!r);const a=r?null:s.match(/^\s*(?:[-•]|\d+\.)\s+(.*)$/);a?t.push(a[1]):n.push(s)}return{items:t,rest:n.join(`
`).trim()}}const Xh=Object.assign({"./design-system-en/SKILL.md":Vh,"./design-system-en/composants.md":$h,"./design-system-en/fondations.md":Wh,"./design-system-en/styles.md":Gh}),Yn={fr:{title:"Design System",subtitle:"Les règles et les composants de ce portfolio",pages:"Pages",previous:"Précédent",next:"Suivant",source:"Cette page affiche le fichier que l’agent IA lit",openTitle:"Le Design System de ce portfolio",openText:"Fondations, styles et composants : la page lit directement les fichiers du skill.",open:"Voir le Design System",link:"Design System"},en:{title:"Design System",subtitle:"The rules and components of this portfolio",pages:"Pages",previous:"Previous",next:"Next",source:"This page displays the file the AI agent reads",openTitle:"This portfolio’s Design System",openText:"Foundations, styles and components: the page reads the skill files directly.",open:"View the Design System",link:"Design System"}},ki=[{id:"start",title:{fr:"Démarrer",en:"Get started"}},{id:"foundations",title:{fr:"Fondations",en:"Foundations"}},{id:"styles",title:{fr:"Styles",en:"Styles"}},{id:"components",title:{fr:"Composants",en:"Components"}}],Kh=["Les quatre règles non négociables","Quand la demande contredit une règle","Avant de livrer"],Qh=[{file:"SKILL.md",path:"SKILL.md",fr:jd,group:"start",level:2,only:Kh},{file:"fondations.md",path:"references/fondations.md",fr:Cd,group:"foundations",level:2},{file:"styles.md",path:"references/styles.md",fr:Ad,group:"styles",level:2},{file:"composants.md",path:"references/composants.md",fr:Sd,group:"components",level:3}],Zh={Anatomie:"anatomy","À faire":"do","À éviter":"dont"};function Yh(e,t){return e.length===t.length&&e.every((n,r)=>n.sections.length===t[r].sections.length)}function Jh(e){return Qh.flatMap(t=>{const n=zl(t.fr,t.level),r=Xh[`./design-system-en/${t.file}`],s=e==="en"&&r?zl(r,t.level):null,a=s&&Yh(n,s)?s:n;return n.map((o,l)=>({p:o,i:l})).filter(({p:o})=>!t.only||t.only.includes(o.title)).map(({p:o,i:l})=>({id:`${t.group}-${l}`,group:t.group,path:t.path,category:a[l].family,title:a[l].title,lead:a[l].lead,sections:o.sections.map((u,d)=>({title:a[l].sections[d].title,body:a[l].sections[d].body,kind:Zh[u.title]??"text"}))}))})}const ji={},ef=e=>ji[e]??(ji[e]=Jh(e)),Rl={before:{label:{fr:"Avant",en:"Before"},stages:[{step:1,title:{fr:"Obtenir le document",en:"Getting the document"},frictions:[{fr:"Relances répétées pour obtenir les pièces",en:"Repeated reminders to get the files"}],nodes:[{actor:"offline",label:{fr:"Échanges et relances entre plusieurs personnes pour recevoir les pièces",en:"Messages and reminders between several people to receive the files"}}]},{step:2,title:{fr:"Module Contrat",en:"Contract module"},frictions:[{fr:"Délai entre la réception et la saisie",en:"Delay between receipt and data entry"}],nodes:[{actor:"human",label:{fr:"Dépose le document dans la partie Documents du contrat",en:"Uploads the document in the contract’s Documents section"}}]},{step:3,title:{fr:"Module Covenant",en:"Covenant module"},nodes:[{actor:"human",label:{fr:"Change de module",en:"Switches module"}},{actor:"human",label:{fr:"Lit le certificat pour y retrouver chaque valeur",en:"Reads the certificate to find each value"}}]},{step:4,title:{fr:"Calendrier du contrat",en:"Contract calendar"},repeat:{fr:"Répété pour chaque covenant",en:"Repeated for every covenant"},frictions:[{fr:"Erreurs de saisie à corriger",en:"Typing errors to correct"},{fr:"Breach recalculé à la main",en:"Breach re-computed by hand"}],nodes:[{actor:"human",label:{fr:"Crée à la main la ligne de monitoring de la période",en:"Creates the monitoring line for the period by hand"}},{actor:"human",label:{fr:"Saisit valeur réelle, dates et statut",en:"Types in actual value, dates and status"}},{actor:"human",label:{fr:"Recontrôle le breach calculé par l’outil",en:"Re-checks the breach computed by the tool"}},{actor:"human",label:{fr:"Lie le document à la période suivie",en:"Links the document to the monitored period"}}]}]},after:{label:{fr:"Après",en:"After"},stages:[{title:{fr:"Réception",en:"Intake"},alternatives:!0,nodes:[{actor:"system",label:{fr:"Email reçu dans la file « Submissions »",en:"Email received in the “Submissions” queue"}},{actor:"human",label:{fr:"Dépôt manuel d’un document",en:"Manual document upload"}}]},{step:1,title:{fr:"Analyse des documents",en:"Documents analysis"},nodes:[{actor:"ai",label:{fr:"Lit les pièces : emprunteur, facility, date de signature",en:"Reads the files: borrower, facility, signature date"}}]},{step:2,title:{fr:"Rapprochement du contrat",en:"Contract matching"},nodes:[{actor:"ai",label:{fr:"Propose les contrats possibles",en:"Suggests the possible contracts"}},{actor:"human",label:{fr:"Accepte, ou choisit le contrat à la main",en:"Accepts, or picks the contract manually"}}]},{step:3,title:{fr:"Extraction & rapprochement des covenants",en:"Covenant extraction & matching"},nodes:[{actor:"ai",label:{fr:"Extrait chaque covenant et sa valeur",en:"Extracts each covenant and its value"}},{actor:"ai",label:{fr:"Propose le covenant correspondant du contrat",en:"Suggests the matching covenant of the contract"}},{actor:"human",label:{fr:"Valide un par un, face à la source — ou suit à la main",en:"Validates one by one, against the source — or monitors manually"}}]},{title:{fr:"Suivi",en:"Monitoring"},nodes:[{actor:"system",label:{fr:"Valeurs poussées dans le calendrier des covenants",en:"Values pushed to the covenant calendar"}},{actor:"human",label:{fr:"Échéances, breach et réception suivis par contrat",en:"Due dates, breach and receipt tracked per contract"}}]}]}},ge={fr:{eyebrow:"Parcours utilisateur · avant / après",title:"Du document reçu au covenant suivi",actors:{ai:"IA",human:"Analyste",system:"Système",offline:"Hors outil"},step:"Étape",or:"ou",navLabel:"Sections de l’étude de cas",navFlow:"Avant / Après",navUxFlow:"Le flow",navProto:"Prototype",detail:"Les deux parcours",friction:"Point de friction",open:"Tester le prototype",ctaTitle:"Essayez le parcours vous-même",ctaText:"Le prototype s’ouvre ici, sans quitter le portfolio. Il est entièrement navigable : ouvrez une soumission, acceptez un contrat, validez un covenant.",viewerTitle:"Suivi des clauses de crédit — prototype navigable",viewerNote:"Données fictives · marque et couleurs anonymisées",restart:"Recommencer",desktopHint:"Prototype conçu pour un écran d’ordinateur : il est réduit pour tenir dans cette fenêtre."},en:{eyebrow:"User journey · before / after",title:"From the received document to the monitored covenant",actors:{ai:"AI",human:"Analyst",system:"System",offline:"Outside the tool"},step:"Step",or:"or",navLabel:"Case study sections",navFlow:"Before / After",navUxFlow:"The flow",navProto:"Prototype",detail:"The two journeys",friction:"Pain point",open:"Try the prototype",ctaTitle:"Try the journey yourself",ctaText:"The prototype opens here, without leaving the portfolio. It is fully navigable: open a submission, accept a contract, validate a covenant.",viewerTitle:"Loan clause monitoring — navigable prototype",viewerNote:"Fictional data · brand and colours anonymised",restart:"Restart",desktopHint:"Prototype designed for a desktop screen: it is scaled down to fit this window."}},Id={eyebrow:{fr:ge.fr.eyebrow,en:ge.en.eyebrow},title:{fr:ge.fr.title,en:ge.en.title},journeys:[{id:"before",muted:!0,...Rl.before},{id:"after",...Rl.after}],defaultView:"before"},tf="prototypes/covenant-monitoring.html#screen=0",z=(e,t)=>({fr:e,en:t}),nf={eyebrow:z("Parcours du lecteur · avant / après","Reader journey · before / after"),title:z("Trouver et lire un contenu sur la décarbonation","Finding and reading content about decarbonisation"),actors:{fr:{human:"Lecteur",system:"Plateforme"},en:{human:"Reader",system:"Platform"}},defaultView:"before",journeys:[{id:"before",muted:!0,label:z("Avant","Before"),stages:[{step:1,title:z("Se connecter","Signing in"),frictions:[z("Trop de défilement","Too much scrolling"),z("Contenu pas adapté au mobile","Content not adapted to mobile")],nodes:[{actor:"human",label:z("Se connecte et personnalise son profil","Signs in and personalises their profile")}]},{step:2,title:z("Découvrir","Discovering"),frictions:[z("Contenu mal hiérarchisé","Poorly ranked content"),z("Audio, vidéo et lecture mélangés","Audio, video and reading mixed together")],nodes:[{actor:"human",label:z("Explore la page d’accueil","Explores the home page")}]},{step:3,title:z("Filtrer","Filtering"),nodes:[{actor:"human",label:z("Affine avec les filtres région et thématique","Narrows down with the region and topic filters")}]},{step:4,title:z("Rechercher","Searching"),frictions:[z("Liens qui ne fonctionnent pas","Broken links"),z("Page trop chargée, on ne sait plus où l’on est","Overloaded page, hard to know where you are")],nodes:[{actor:"human",label:z("Parcourt les résultats","Browses the results")},{actor:"human",label:z("Choisit un article","Picks an article")}]},{step:5,title:z("Consulter","Reading"),frictions:[z("Impossible de partager l’article","No way to share the article"),z("Aucune autre lecture proposée","No other reading suggested")],nodes:[{actor:"human",label:z("Lit un article sur les énergies renouvelables","Reads an article about renewable energy")}]}]},{id:"after",label:z("Après","After"),stages:[{step:1,title:z("À la une","Front page"),nodes:[{actor:"system",label:z("Présente une sélection de contenus, un à la fois","Presents a selection of content, one at a time")},{actor:"human",label:z("Lit, passe ou revient en arrière","Reads, skips or goes back")}]},{step:2,title:z("Les contenus","Content"),nodes:[{actor:"human",label:z("Choisit une thématique","Chooses a topic")},{actor:"human",label:z("Filtre par format : à lire, à écouter, à voir","Filters by format: to read, to listen, to watch")}]},{step:3,title:z("Rechercher","Searching"),nodes:[{actor:"human",label:z("Cherche un contenu depuis l’en-tête, sur toutes les pages","Searches for content from the header, on every page")}]},{step:4,title:z("Consulter","Reading"),nodes:[{actor:"system",label:z("Affiche la thématique et le format de chaque article","Shows the topic and format of each article")},{actor:"human",label:z("Lit, puis partage l’article","Reads, then shares the article")}]}]}]},Pd="bRCddnUzlotCFXHBfThuI1/Portfolio-file",Dd="node-id=7-43622&page-id=2%3A1791&starting-point-node-id=50%3A122678",rf=`https://embed.figma.com/proto/${Pd}?${Dd}&scaling=scale-down-width&content-scaling=fixed&embed-host=portfolio-asl&footer=false&viewport-controls=false&device-frame=false`,sf=`https://www.figma.com/proto/${Pd}?${Dd}&scaling=scale-down&content-scaling=fixed`,af="https://justdecarb.grdf.fr/",qd={fr:{protoEyebrow:"Prototype · version mobile",ctaTitle:"Essayez la plateforme",ctaText:"Le prototype est navigable ici : touchez les boutons comme sur un téléphone. La plateforme a été conçue mobile first, c’est donc cette version que vous voyez. Le chargement peut prendre quelques secondes.",open:"Voir le prototype",site:"Voir le site en ligne",openFigma:"Ouvrir dans Figma",viewerTitle:"GRDF — prototype mobile"},en:{protoEyebrow:"Prototype · mobile version",ctaTitle:"Try the platform",ctaText:"The prototype is navigable here: tap the buttons as you would on a phone. The platform was designed mobile first, so this is the version you see. Loading can take a few seconds.",open:"View the prototype",site:"View the live site",openFigma:"Open in Figma",viewerTitle:"GRDF — mobile prototype"}},of={eyebrow:{fr:"Flow design · de la recherche au réel",en:"Design flow · from research to reality"},title:{fr:"L’IA produit, le designer décide",en:"The AI produces, the designer decides"},actors:{fr:{ai:"L’IA produit",human:"Le designer décide"},en:{ai:"The AI produces",human:"The designer decides"}},journeys:[{id:"flow",label:{fr:"Flow",en:"Flow"},stages:[{step:1,title:{fr:"Recherche",en:"Research"},nodes:[{actor:"ai",label:{fr:"Analyse des données utilisateurs, segmentation, écarts",en:"User data analysis, segmentation, gap analysis"}},{actor:"human",label:{fr:"Cadre la recherche, anime le cadrage UX",en:"Frames the research, runs the UX framing"}}]},{step:2,title:{fr:"Intention",en:"Intention"},nodes:[{actor:"ai",label:{fr:"Benchmark large, pistes multiples",en:"Wide benchmark, multiple directions"}},{actor:"human",label:{fr:"Fixe l’intention, retient les pistes",en:"Sets the intention, keeps the directions"}}]},{step:3,title:{fr:"Génération 1 · prototypage design",en:"Generation 1 · design prototyping"},nodes:[{actor:"ai",label:{fr:"Itérations de design, plusieurs solutions",en:"Design iterations, several solutions"}},{actor:"human",label:{fr:"Juge et sélectionne les solutions",en:"Judges and selects the solutions"}}]},{step:4,title:{fr:"Génération 2 · prototypage code",en:"Generation 2 · code prototyping"},nodes:[{actor:"ai",label:{fr:"Itérations de code sur le Design System",en:"Code iterations on the Design System"}},{actor:"human",label:{fr:"Arbitre avec les développeurs",en:"Arbitrates with the developers"}}]},{step:5,title:{fr:"Implémentation",en:"Implementation"},nodes:[{actor:"ai",label:{fr:"Environnement de test, livraison prête",en:"Test environment, delivery ready"}},{actor:"human",label:{fr:"Valide la conformité au design",en:"Validates design compliance"}}]},{step:6,title:{fr:"Tests utilisateurs",en:"User tests"},nodes:[{actor:"ai",label:{fr:"Protocoles de test, synthèse des retours",en:"Test protocols, feedback synthesis"}},{actor:"human",label:{fr:"Observe les utilisateurs, interprète",en:"Observes users, interprets"}}]},{step:7,title:{fr:"Rétro & documentation",en:"Retro & documentation"},nodes:[{actor:"ai",label:{fr:"Specs d’interaction, mise à jour du Design System",en:"Interaction specs, Design System updates"}},{actor:"human",label:{fr:"Valide ce qui entre dans la connaissance commune",en:"Validates what enters the shared knowledge"}}]}]}]},lf=[{id:"method",question:{fr:"Quelle est sa méthode de travail, de la recherche à la livraison ?",en:"What is her way of working, from research to delivery?"},chip:{fr:"Sa méthode de travail",en:"Her way of working"},keywords:[["comment travaille t elle",8],["ux research",7],["research",4],["un projet avec elle",8],["se passe un projet",8],["methode",6],["methodo",6],["method",5],["process",4],["demarche",5],["etape",4],["steps",3],["design thinking",7],["recherche utilisateur",6],["user research",6],["interview",5],["entretien",4],["benchmark",6],["atelier",5],["workshop",5],["prototyp",3],["test utilisateur",6],["tests utilisateurs",6],["user test",6],["usability",5],["specification",4],["recette",5],["discovery",4],["v0",5],["agile",6],["scrum",7],["sprint",6],["pspo",4],["design process",7],["way of working",6],["facon de travailler",6]],answer:{fr:{standard:`Anne-Sophie adapte sa méthode à chaque projet, mais suit toujours le même fil : comprendre, concevoir, valider, livrer.

### 1. Comprendre
- **Recherche et interviews** : comprendre les utilisateurs, leurs tâches et leurs irritants.
- **Benchmark** : voir ce qui existe, ce qui marche et ce qui manque.
- **Ateliers** : aligner utilisateurs, métiers et équipe produit sur le problème à résoudre.

### 2. Concevoir
- **Une V0, un « prototype à casser »** : quand les besoins sont flous ou le parcours très complexe, elle part d'un premier prototype volontairement imparfait. Il sert de base aux premiers ateliers, car il est plus facile de réagir à un écran qu'à une page blanche.
- **Prototypage** : du wireframe à la haute fidélité, jusqu'au prototype fonctionnel en *vibecoding*.

### 3. Valider
- **Démos** auprès des métiers et de l'équipe.
- **Tests utilisateurs**, puis itérations.

### 4. Livrer
- **Spécifications** : des specs UX/UI claires pour les développeurs, rédigées en \`.md\`.
- **Recette UI** : elle vérifie que ce qui est développé correspond à ce qui a été conçu.

### Le cadre
Elle travaille en **Scrum**, au rythme des sprints de l'équipe, et elle est certifiée **PSPO I** (Professional Scrum Product Owner).`,express:`- **Comprendre** : recherche, interviews, benchmark, ateliers.
- **Concevoir** : une V0 « à casser » quand le besoin est flou, puis un prototypage jusqu'à la haute fidélité.
- **Valider** : démos et tests utilisateurs.
- **Livrer** : specs UX/UI en \`.md\` et recette UI.
- **Cadre** : Scrum, certifiée PSPO I.`},en:{standard:`Anne-Sophie adapts her method to each project, but always follows the same thread: understand, design, validate, deliver.

### 1. Understand
- **Research and interviews**: understanding users, their tasks and their pain points.
- **Benchmark**: seeing what exists, what works and what is missing.
- **Workshops**: aligning users, business teams and the product team on the problem to solve.

### 2. Design
- **A V0, a “prototype to break”**: when needs are unclear or the journey is very complex, she starts from a deliberately imperfect first prototype. It is the basis for the first workshops, because reacting to a screen is easier than to a blank page.
- **Prototyping**: from wireframe to high fidelity, up to a functional prototype through *vibecoding*.

### 3. Validate
- **Demos** to business teams and the product team.
- **User testing**, then iterations.

### 4. Deliver
- **Specifications**: clear UX/UI specs for developers, written in \`.md\`.
- **UI acceptance testing**: she checks that what is built matches what was designed.

### The framework
She works in **Scrum**, at the pace of the team's sprints, and is **PSPO I** certified (Professional Scrum Product Owner).`,express:`- **Understand**: research, interviews, benchmark, workshops.
- **Design**: a V0 “to break” when the need is unclear, then prototyping up to high fidelity.
- **Validate**: demos and user testing.
- **Deliver**: UX/UI specs in \`.md\` and UI acceptance testing.
- **Framework**: Scrum, PSPO I certified.`}},followUps:["collab","proudest","ai"]},{id:"collab",question:{fr:"Comment travaille-t-elle avec les PO, les développeurs et les utilisateurs ?",en:"How does she work with POs, developers and users?"},chip:{fr:"Sa collaboration avec l’équipe",en:"How she works with the team"},keywords:[["avec les dev",6],["en equipe",6],["bien en equipe",8],["team player",8],["collabor",5],["developpeur",6],["developer",6],["devs",5],["dev",3],["handoff",6],["po",4],["product owner",6],["product manager",6],["pm",3],["cadrage",6],["cadrer",4],["framing",5],["desaccord",6],["disagree",6],["conflit",5],["conflict",5],["contrainte",5],["constraint",5],["prioris",5],["prioritiz",5],["stakeholder",6],["parties prenantes",6],["metier",3],["work with",3],["travaille avec",4],["defend",6],["convaincre",5],["convince",5],["justifi",5],["argument",5],["pushback",6],["equipe produit",5],["product team",5]],answer:{fr:{standard:`Anne-Sophie travaille au centre de l'équipe produit, du cadrage à la mise en production.

### Le cadrage
Avec les PO et les métiers, elle clarifie le problème à résoudre, les utilisateurs concernés et les priorités, avant de dessiner le moindre écran.

### Les utilisateurs
Elle garde un lien direct avec eux tout au long du projet : interviews, ateliers, démos et tests. Quand l'équipe hésite entre deux options, leurs retours aident à trancher.

### Les PO et les métiers
Ateliers de co-création, démos régulières et arbitrages partagés sur ce qui apporte le plus de valeur.

### Défendre un choix de design
- **Par le test** : plutôt que d'opposer deux avis, elle fait tester les options aux utilisateurs.
- **Par les règles et les preuves** : Design System, normes d'accessibilité, bonnes pratiques d'ergonomie, retours utilisateurs et données.

### Les développeurs
- **Tôt dans le projet** : elle partage ses prototypes pour vérifier la faisabilité et intégrer les contraintes techniques avant qu'elles ne coûtent cher.
- **Des livrables clairs** : des specs en \`.md\` et des prototypes fonctionnels en *vibecoding*, plus proches du produit final qu'une maquette.
- **La recette UI** : elle vérifie avec eux que ce qui est développé correspond à ce qui a été conçu.

### Les équipes IA
Chez BNP Paribas CIB, elle a co-construit les process entre les pôles IA et UX.`,express:`- **Cadrage** : problème, utilisateurs et priorités clarifiés avec les PO et les métiers.
- **Utilisateurs** : un lien direct, des interviews aux tests ; leurs retours aident à trancher.
- **Défendre un choix** : elle fait tester, et argumente avec des règles et des preuves.
- **Développeurs** : prototypes partagés tôt, specs en \`.md\`, recette UI.
- **Équipes IA** : process co-construits entre les pôles IA et UX.`},en:{standard:`Anne-Sophie works at the centre of the product team, from framing to release.

### Framing
With POs and business teams, she clarifies the problem to solve, the users involved and the priorities, before drawing a single screen.

### Users
She keeps a direct link with them throughout the project: interviews, workshops, demos and testing. When the team hesitates between two options, their feedback helps decide.

### POs and business teams
Co-creation workshops, regular demos and shared decisions on what brings the most value.

### Defending a design choice
- **Through testing**: rather than pitting two opinions against each other, she has users test the options.
- **Through rules and evidence**: the Design System, accessibility standards, usability best practices, user feedback and data.

### Developers
- **Early in the project**: she shares her prototypes to check feasibility and take technical constraints into account before they become costly.
- **Clear deliverables**: specs in \`.md\` and functional prototypes through *vibecoding*, closer to the final product than a mock-up.
- **UI acceptance testing**: she checks with them that what is built matches what was designed.

### AI teams
At BNP Paribas CIB, she co-built the processes between the AI and UX departments.`,express:`- **Framing**: problem, users and priorities clarified with POs and business teams.
- **Users**: a direct link, from interviews to testing; their feedback helps decide.
- **Defending a choice**: she has it tested, and argues with rules and evidence.
- **Developers**: prototypes shared early, specs in \`.md\`, UI acceptance testing.
- **AI teams**: processes co-built between the AI and UX departments.`}},followUps:["method","seniority","bnp"]},{id:"seniority",question:{fr:"Quelle est sa séniorité, et est-elle prête pour un rôle de lead ?",en:"How senior is she, and is she ready for a lead role?"},chip:{fr:"Séniorité et leadership",en:"Seniority and leadership"},keywords:[["senior",7],["junior",7],["seniorit",7],["annees d experience",7],["ans d experience",7],["years of experience",7],["niveau",3],["level",3],["lead",5],["leadership",7],["manag",8],["encadr",6],["team lead",7],["consultante",4],["how long",3],["combien d annees",5]],answer:{fr:{standard:`Anne-Sophie a **5 ans d'expérience** en design digital et produit. Elle est aujourd'hui **Consultante Senior** chez mc2i.

### Ce qu'elle porte déjà
- **Le cadrage d'une équipe UX augmentée par l'IA** chez BNP Paribas CIB : des process co-construits entre les pôles IA et UX, et un Design System pensé pour l'IA.
- **Des projets de bout en bout**, de la recherche à la recette, chez Kering, GRDF et Eden Park.
- **Les échanges avec les métiers et la direction de programme** : ateliers, démos et arbitrages.

### La suite
Elle veut évoluer vers un rôle de **lead design**, au plus près du produit : encadrer une équipe, transmettre ce qu'elle a appris et continuer d'innover.`,express:`- **Expérience** : 5 ans en design digital et produit.
- **Aujourd'hui** : Consultante Senior chez mc2i.
- **Déjà porté** : le cadrage d'une équipe UX augmentée par l'IA, des projets de bout en bout.
- **La suite** : évoluer vers un rôle de lead design.`},en:{standard:`Anne-Sophie has **5 years of experience** in digital and product design. She is currently a **Senior Consultant** at mc2i.

### What she already leads
- **Framing an AI-augmented UX team** at BNP Paribas CIB: processes co-built between the AI and UX departments, and a Design System designed for AI.
- **End-to-end projects**, from research to acceptance testing, at Kering, GRDF and Eden Park.
- **Exchanges with business teams and programme management**: workshops, demos and decisions.

### Next
She wants to grow into a **design lead** role, close to the product: leading a team, passing on what she has learned and keeping on innovating.`,express:`- **Experience**: 5 years in digital and product design.
- **Today**: Senior Consultant at mc2i.
- **Already led**: framing an AI-augmented UX team, end-to-end projects.
- **Next**: growing into a design lead role.`}},followUps:["future","proudest","collab"],actions:["cv"]},{id:"failure",question:{fr:"Parle-moi d’un échec et de ce qu’elle en a appris",en:"Tell me about a failure and what she learned from it"},chip:{fr:"Un échec et ses leçons",en:"A failure and its lessons"},keywords:[["echec",8],["echoue",7],["failure",8],["fail",6],["mistake",6],["erreur",4],["appris",4],["learned",4],["lesson",5],["lecon",5],["regret",5],["went wrong",6],["difficult",3]],answer:{fr:{standard:`### Ce qui s'est passé
Sur un projet, Anne-Sophie a voulu aller vite et loin : beaucoup de changements d'un coup. Les utilisateurs ont perdu leurs repères. La nouvelle solution, pourtant meilleure, a été moins adoptée, et son impact a été plus faible que prévu.

### Ce qu'elle en a retenu
- **Embarquer les utilisateurs** dès le début, et à chaque étape.
- **Avancer par étapes** : changer moins à la fois, observer l'adoption, puis aller plus loin.
- **Penser l'adoption autant que la conception** : une solution réussit quand ses utilisateurs l'adoptent, pas seulement quand elle est bien conçue.`,express:`- **L'échec** : trop de changements d'un coup, des utilisateurs perdus, une adoption et un impact plus faibles que prévu.
- **La leçon** : embarquer les utilisateurs à chaque étape et avancer par étapes.
- **Aujourd'hui** : elle pense l'adoption autant que la conception.`},en:{standard:`### What happened
On one project, Anne-Sophie wanted to go fast and far: many changes at once. Users lost their bearings. The new solution, although better, was less adopted, and its impact was lower than expected.

### What she took from it
- **Bring users along** from the start, and at every step.
- **Move in steps**: change less at a time, watch adoption, then go further.
- **Think about adoption as much as design**: a solution succeeds when its users adopt it, not only when it is well designed.`,express:`- **The failure**: too many changes at once, users lost, lower adoption and impact than expected.
- **The lesson**: bring users along at every step and move in steps.
- **Today**: she thinks about adoption as much as design.`}},followUps:["method","vision","softskills"]},{id:"weaknesses",question:{fr:"Quels sont ses axes d’amélioration ?",en:"What areas is she working to improve?"},chip:{fr:"Ses axes d’amélioration",en:"Her areas for growth"},keywords:[["point faible",8],["points faibles",8],["faiblesse",8],["weakness",8],["axe d amelioration",8],["axes d amelioration",8],["ameliorer",4],["improve",4],["defaut",6],["flaw",6],["progresser",5],["work on",3],["areas for growth",8],["growth areas",8]],answer:{fr:{standard:`Deux points sur lesquels Anne-Sophie progresse, et ce qu'elle fait pour avancer.

### Savoir dire non
Face à de nombreuses demandes, le réflexe est de tout accepter. Elle apprend à prioriser avec le PO, selon la valeur pour les utilisateurs, et à refuser ce qui n'en apporte pas assez.

### Ralentir pour embarquer
Son envie d'avancer vite peut aller plus vite que l'équipe ou les utilisateurs. Elle pose désormais des étapes, et vérifie que chacun suit avant d'aller plus loin.`,express:`- **Savoir dire non** : elle apprend à prioriser selon la valeur pour les utilisateurs, et à refuser le reste.
- **Ralentir pour embarquer** : elle pose des étapes et vérifie que l'équipe et les utilisateurs suivent.`},en:{standard:`Two points Anne-Sophie is working on, and what she does to progress.

### Saying no
Faced with many requests, the reflex is to accept everything. She is learning to prioritise with the PO, based on value for users, and to turn down what does not bring enough of it.

### Slowing down to bring people along
Her drive to move fast can outpace the team or the users. She now sets steps, and checks that everyone is following before going further.`,express:`- **Saying no**: she is learning to prioritise by value for users, and to turn down the rest.
- **Slowing down to bring people along**: she sets steps and checks that the team and users are following.`}},followUps:["failure","collab","seniority"]},{id:"vision",question:{fr:"Quelle est sa vision du design ?",en:"What is her view of design?"},chip:{fr:"Sa vision du design",en:"Her view of design"},keywords:[["aime t elle le design",9],["aime le design",8],["love design",7],["loves design",7],["vision",7],["view of design",8],["philosophi",6],["pourquoi le design",7],["pourquoi le product design",8],["why design",7],["why product design",8],["inspiration",6],["inspire",5],["bon design",6],["good design",6],["design pour elle",6],["what design means",6],["aime dans",4],["loves about",5]],answer:{fr:{standard:`Pour Anne-Sophie, le design s'applique partout, et c'est ce qui le rend stimulant.

- **L'inspiration est partout** : un objet, un lieu, un service du quotidien peuvent nourrir un écran.
- **Tout est améliorable** : il y a toujours une façon de faire plus simple, et toujours de la place pour innover.
- **Le but** : un usage plus facile pour tous, plus accessible et plus responsable.

C'est ce qui l'a menée au Product Design : un métier qui réunit créativité, technique et impact concret sur le quotidien des gens.`,express:`- **Partout** : le design s'applique partout, et l'inspiration aussi.
- **Toujours améliorable** : il y a toujours plus simple, et de la place pour innover.
- **Le but** : un usage plus facile pour tous, plus accessible et plus responsable.`},en:{standard:`For Anne-Sophie, design applies everywhere, and that is what makes it stimulating.

- **Inspiration is everywhere**: an object, a place or an everyday service can feed a screen.
- **Everything can be improved**: there is always a simpler way, and always room to innovate.
- **The goal**: easier use for everyone, more accessible and more responsible.

That is what led her to Product Design: a job that brings together creativity, technique and a concrete impact on people's daily lives.`,express:`- **Everywhere**: design applies everywhere, and so does inspiration.
- **Always improvable**: there is always a simpler way, and room to innovate.
- **The goal**: easier use for everyone, more accessible and more responsible.`}},followUps:["method","grdf","profile"]},{id:"portfoliobuild",question:{fr:"Comment ce portfolio a-t-il été fait ?",en:"How was this portfolio built?"},chip:{fr:"Comment ce portfolio est fait",en:"How this portfolio is built"},keywords:[["chatgpt",8],["gpt",6],["tu es",4],["are you",4],["robot",5],["bot",5],["ia qui repond",8],["ce portfolio",7],["this portfolio",5],["ce site",5],["this site",5],["code ce",5],["coded",4],["construit",3],["built",4],["react",6],["technolog",4],["comment marche",5],["how does this",4],["how it works",4],["fonctionne",3],["vraie ia",6],["real ai",6],["chatbot",5],["assistant",3],["qui a code",6],["who built",6],["who made",6]],answer:{fr:{standard:`Anne-Sophie a conçu ce portfolio et l'a construit en *vibecoding* avec Claude Code. Elle définit l'expérience, les contenus et le Design System ; l'IA écrit le code sous sa direction.

### Ce qu'il y a dessous
- **React, TypeScript et Tailwind**, sans serveur : tout tourne dans votre navigateur.
- **Son propre Design System**, écrit comme un skill que l'IA applique à chaque modification.
- **Deux langues**, français et anglais, et un thème clair et un thème sombre.

### L'assistant, en toute transparence
Aucune IA ne répond en direct. Anne-Sophie a écrit chaque réponse à l'avance, en trois niveaux de lecture, et l'assistant choisit celle qui correspond le mieux à votre question à partir de ses mots-clés. Il ne peut donc rien inventer sur elle.

### Pourquoi ce format
Une interface de chat montre, en une seule expérience, ce qu'elle sait faire : concevoir un produit, l'outiller avec l'IA et le livrer.`,express:`- **Construit** en *vibecoding* avec Claude Code : elle conçoit, l'IA code sous sa direction.
- **Dessous** : React, TypeScript, Tailwind, sans serveur, avec son propre Design System écrit comme un skill.
- **L'assistant** : aucune IA en direct ; des réponses écrites à l'avance, choisies selon vos mots-clés.`},en:{standard:`Anne-Sophie designed this portfolio and built it through *vibecoding* with Claude Code. She defines the experience, the content and the Design System; the AI writes the code under her direction.

### Under the hood
- **React, TypeScript and Tailwind**, with no server: everything runs in your browser.
- **Its own Design System**, written as a skill the AI applies to every change.
- **Two languages**, French and English, and a light and a dark theme.

### The assistant, transparently
No AI answers live. Anne-Sophie wrote every answer in advance, at three reading levels, and the assistant picks the one that best matches your question from its keywords. So it cannot make anything up about her.

### Why this format
A chat interface shows, in a single experience, what she can do: design a product, equip it with AI and ship it.`,express:`- **Built** through *vibecoding* with Claude Code: she designs, the AI codes under her direction.
- **Under the hood**: React, TypeScript, Tailwind, no server, with its own Design System written as a skill.
- **The assistant**: no live AI; answers written in advance, picked from your keywords.`}},followUps:["portfoliods","ai","stack"]},{id:"proudest",question:{fr:"De quel projet est-elle la plus fière ?",en:"Which project is she proudest of?"},chip:{fr:"Le projet dont elle est fière",en:"The project she is proudest of"},keywords:[["fiere",8],["fier",6],["proud",8],["prefere",7],["favori",7],["favourite",5],["favorite",5],["meilleur projet",7],["best project",7],["plus reussi",9],["most successful",9],["hackathon",7],["workspace",6],["marquant",6],["memorable",5]],answer:{fr:{standard:`Le projet dont Anne-Sophie est la plus fière : **l'intégration d'un workspace IA chez une grande banque d'investissement**.

### D'un hackathon à un vrai projet
Tout part d'un hackathon. L'idée devient un vrai projet, qui évolue beaucoup, et elle influence la création d'une équipe IA de ==40 personnes==.

### Ce qui a convaincu
La direction du programme a été convaincue par :
- **un travail collaboratif** entre UX/UI, développeurs et PO ;
- **une UX qui rend intuitif** un outil nouveau pour ses utilisateurs ;
- **une UI convaincante** ;
- **des fonctionnalités** qui apportent une vraie valeur.`,express:`- **Le projet** : l'intégration d'un workspace IA chez une grande banque d'investissement.
- **Le parcours** : d'un hackathon à un vrai projet, qui influence la création d'une équipe IA de ==40 personnes==.
- **Ce qui a convaincu** : le travail collaboratif, une UX intuitive, une UI convaincante, des fonctionnalités utiles.`},en:{standard:`The project Anne-Sophie is proudest of: **integrating an AI workspace at a major investment bank**.

### From a hackathon to a real project
It all starts with a hackathon. The idea becomes a real project, which evolves a lot, and it influences the creation of an AI team of ==40 people==.

### What won people over
Programme management was won over by:
- **collaborative work** between UX/UI, developers and POs;
- **a UX that makes a new tool intuitive** for its users;
- **a convincing UI**;
- **features** that bring real value.`,express:`- **The project**: integrating an AI workspace at a major investment bank.
- **The path**: from a hackathon to a real project, which influences the creation of an AI team of ==40 people==.
- **What won people over**: collaborative work, an intuitive UX, a convincing UI, useful features.`}},followUps:["bnp","collab","impact"]},{id:"whyleave",question:{fr:"Pourquoi veut-elle quitter le conseil ?",en:"Why does she want to leave consulting?"},chip:{fr:"Pourquoi quitter le conseil",en:"Why leave consulting"},keywords:[["partir",6],["partir de",8],["quitter",7],["quitte",6],["leave",5],["leaving",6],["pourquoi partir",8],["why leave",8],["conseil",4],["consulting",5],["de passage",6],["changer de poste",6],["change jobs",5],["cabinet",4]],answer:{fr:{standard:`Le conseil lui a beaucoup apporté : plusieurs secteurs, des contextes très différents et une grande capacité d'adaptation. Aujourd'hui, elle veut **s'investir dans un seul produit sur la durée**.

- **Voir un produit grandir** : suivre ses évolutions, mesurer l'effet de ses choix dans le temps, et pas seulement livrer une mission.
- **Faire partie d'une équipe** : connaître ses collègues et les autres équipes, construire des relations de confiance, et se sentir pleinement partie prenante plutôt que de passage.`,express:`- **Ce que le conseil lui a apporté** : plusieurs secteurs et une grande capacité d'adaptation.
- **Ce qu'elle cherche** : s'investir dans un seul produit sur la durée et le voir grandir.
- **Et une équipe** : en faire pleinement partie, plutôt que d'être de passage.`},en:{standard:`Consulting has given her a lot: several sectors, very different contexts and a strong ability to adapt. Today, she wants to **commit to a single product over the long term**.

- **Watching a product grow**: following how it evolves, measuring the effect of her choices over time, not just delivering an engagement.
- **Being part of a team**: knowing her colleagues and the other teams, building trust, and feeling fully involved rather than just passing through.`,express:`- **What consulting gave her**: several sectors and a strong ability to adapt.
- **What she is looking for**: committing to a single product over the long term and watching it grow.
- **And a team**: being fully part of it, rather than passing through.`}},followUps:["search","future","environment"]},{id:"future",question:{fr:"Où se voit-elle dans 3 à 5 ans ?",en:"Where does she see herself in 3 to 5 years?"},chip:{fr:"Dans 3 à 5 ans",en:"In 3 to 5 years"},keywords:[["objectif",6],["objectifs de carriere",10],["career goal",10],["plus tard",7],["dans 5 ans",9],["dans 3 ans",9],["3 a 5 ans",9],["5 ans",4],["5 years",7],["five years",7],["futur",5],["avenir",6],["long terme",6],["long term",6],["se voit",6],["see herself",7],["plan de carriere",7],["career plan",7]],answer:{fr:{standard:`Dans 3 à 5 ans, Anne-Sophie se voit **lead design, au plus près du produit**.

- **Encadrer une équipe** : faire grandir des designers, transmettre ce qu'elle a appris, et continuer d'apprendre avec eux.
- **Continuer d'innover** : tester de nouvelles approches, notamment avec l'IA, et les adopter quand elles apportent une vraie valeur.
- **Garder le produit au centre** : le Design Ops l'intéresse, mais ce sont le produit et ses utilisateurs qui la motivent le plus.`,express:`- **Le rôle** : lead design, au plus près du produit.
- **Encadrer** : faire grandir une équipe, transmettre et continuer d'apprendre.
- **Innover** : de nouvelles approches, notamment avec l'IA.
- **Le produit d'abord** : le Design Ops l'intéresse, le produit la motive le plus.`},en:{standard:`In 3 to 5 years, Anne-Sophie sees herself as a **design lead, close to the product**.

- **Leading a team**: helping designers grow, passing on what she has learned, and keeping on learning with them.
- **Keeping on innovating**: trying new approaches, especially with AI, and adopting them when they bring real value.
- **Keeping the product at the centre**: Design Ops interests her, but the product and its users are what motivate her most.`,express:`- **The role**: design lead, close to the product.
- **Leading**: helping a team grow, passing on and keeping on learning.
- **Innovating**: new approaches, especially with AI.
- **Product first**: Design Ops interests her, the product motivates her most.`}},followUps:["seniority","environment","search"]},{id:"environment",question:{fr:"Dans quel environnement donne-t-elle le meilleur d’elle-même ?",en:"In what environment does she do her best work?"},chip:{fr:"Son environnement idéal",en:"Her ideal environment"},keywords:[["attend elle",7],["expect from",8],["motive",6],["motivates",6],["environnement",7],["environment",7],["culture d entreprise",8],["company culture",8],["culture",3],["donne le meilleur",8],["at her best",8],["best work",7],["type de manager",11],["kind of manager",11],["bienveillan",6],["ambiance",6],["atmosphere",5]],answer:{fr:{standard:`Anne-Sophie donne le meilleur d'elle-même dans un environnement qui réunit trois choses.

- **Exigeant et bienveillant** : des défis à relever, dans une équipe où l'on peut proposer, se tromper et progresser.
- **Une communication ouverte** : des échanges directs et réguliers, entre designers comme avec le produit et la tech.
- **Le sentiment d'apprendre** : chaque projet doit lui apprendre quelque chose de nouveau.`,express:`- **Exigeant et bienveillant** : des défis, dans une équipe où l'on peut proposer et progresser.
- **Une communication ouverte** : des échanges directs et réguliers.
- **Le sentiment d'apprendre** : chaque projet lui apprend quelque chose.`},en:{standard:`Anne-Sophie does her best work in an environment that brings together three things.

- **Demanding and supportive**: challenges to take on, in a team where people can suggest, make mistakes and improve.
- **Open communication**: direct and regular exchanges, between designers as well as with product and tech.
- **A sense of learning**: every project should teach her something new.`,express:`- **Demanding and supportive**: challenges, in a team where people can suggest and improve.
- **Open communication**: direct and regular exchanges.
- **A sense of learning**: every project teaches her something.`}},followUps:["whyleave","future","softskills"]},{id:"veille",question:{fr:"Comment fait-elle sa veille design et IA ?",en:"How does she keep up with design and AI?"},chip:{fr:"Sa veille design et IA",en:"How she keeps up"},keywords:[["informee",7],["se tient informee",9],["stay current",8],["keep current",8],["veille",8],["newsletter",7],["se tenir a jour",8],["a jour",4],["up to date",7],["keep up",6],["tendance",5],["trend",5],["actualite",5],["side project",7],["se former",5]],answer:{fr:{standard:`Anne-Sophie suit l'actualité du design et de l'IA de trois façons.

- **Des newsletters** spécialisées, pour repérer les tendances et les nouveaux outils.
- **Des vidéos d'actualité**, pour voir les outils en action.
- **Des side projects**, pour les tester par elle-même. Ce portfolio, et son Design System écrit comme un skill, en est un exemple.`,express:`- **Newsletters** : les tendances et les nouveaux outils.
- **Vidéos d'actualité** : les outils en action.
- **Side projects** : tester par elle-même, comme ce portfolio.`},en:{standard:`Anne-Sophie keeps up with design and AI in three ways.

- **Specialised newsletters**, to spot trends and new tools.
- **News videos**, to see the tools in action.
- **Side projects**, to try them out herself. This portfolio, with its Design System written as a skill, is one example.`,express:`- **Newsletters**: trends and new tools.
- **News videos**: the tools in action.
- **Side projects**: trying things herself, like this portfolio.`}},followUps:["portfoliobuild","ai","softskills"]},{id:"success",question:{fr:"Comment mesure-t-elle le succès d’un design ?",en:"How does she measure the success of a design?"},chip:{fr:"Mesurer le succès d’un design",en:"Measuring design success"},keywords:[["mesure le succes",10],["mesurer le succes",10],["measure success",10],["measure the success",10],["indicateur",6],["indicator",6],["adoption",6],["conversion",6],["satisfaction",6],["taux d engagement",7],["engagement rate",7],["fluidite",6],["how does she measure",8],["comment mesure",10],["design fonctionne",9],["design works",9],["kpi",6],["pour un design",4],["succes d un design",8]],answer:{fr:{standard:`Pour Anne-Sophie, un design réussi se mesure chez ses utilisateurs, avec des indicateurs choisis selon le produit.

- **La satisfaction** : ce que disent les utilisateurs, en entretien, en test et après la mise en production.
- **L'adoption** : les utilisateurs s'approprient-ils vraiment la solution ? Une solution bien conçue mais peu adoptée n'a pas d'impact.
- **L'engagement et la conversion** : selon le produit, le taux d'engagement ou de conversion montre si le parcours remplit son rôle.
- **La fluidité** : moins de frictions, moins d'erreurs, des tâches réalisées plus facilement.`,express:`- **Satisfaction** : ce que disent les utilisateurs, avant et après la mise en production.
- **Adoption** : une solution peu adoptée n'a pas d'impact.
- **Engagement et conversion** : selon le produit.
- **Fluidité** : moins de frictions et d'erreurs.`},en:{standard:`For Anne-Sophie, a successful design is measured with its users, through indicators chosen for the product.

- **Satisfaction**: what users say, in interviews, in testing and after release.
- **Adoption**: are users really taking ownership of the solution? A well-designed solution that is barely adopted has no impact.
- **Engagement and conversion**: depending on the product, the engagement or conversion rate shows whether the journey does its job.
- **Smoothness**: fewer frictions, fewer errors, tasks completed more easily.`,express:`- **Satisfaction**: what users say, before and after release.
- **Adoption**: a barely adopted solution has no impact.
- **Engagement and conversion**: depending on the product.
- **Smoothness**: fewer frictions and errors.`}},followUps:["impact","method","failure"]},{id:"responsibleai",question:{fr:"Comment utilise-t-elle l’IA de façon responsable ?",en:"How does she use AI responsibly?"},chip:{fr:"Une IA responsable",en:"Using AI responsibly"},keywords:[["ia responsable",10],["responsible ai",10],["facon responsable",9],["responsibly",9],["ethique",7],["ethic",7],["sobriete",7],["frugal",6],["donnees fictives",7],["fictional data",7],["confidentialite des donnees",9],["data privacy",9],["rgpd",6],["gdpr",6],["risque",4],["risk",4],["biais",7],["bias",7],["stereotyp",7]],answer:{fr:{standard:`Anne-Sophie applique sept règles quand elle travaille avec l'IA.

- **Des données fictives** : jamais de données réelles ni confidentielles dans les outils d'IA.
- **Une vérification humaine** : l'IA propose, le designer vérifie et décide.
- **Des prompts précis** : bien cadrés dès le départ, ils limitent les allers-retours et les générations inutiles.
- **La sobriété** : utiliser l'IA quand elle apporte une vraie valeur, pas par réflexe.
- **Des règles écrites** : encadrer l'IA par un Design System et des skills, plutôt que de la laisser improviser.
- **L'accessibilité vérifiée** : contrôler que ce que l'IA génère respecte les contrastes et le RGAA, car elle ne le garantit pas seule.
- **Les biais** : relire les textes, personas et images générés pour éviter les stéréotypes.

Ce cadre rejoint sa certification Numérique Responsable.`,express:`- **Données fictives** : jamais de données réelles ni confidentielles.
- **Vérification humaine** : l'IA propose, le designer décide.
- **Prompts précis** : moins d'allers-retours et de générations inutiles.
- **Sobriété** : l'IA quand elle apporte une vraie valeur.
- **Règles écrites** : un Design System et des skills pour encadrer l'IA.
- **Accessibilité et biais** : contrastes, RGAA et stéréotypes vérifiés.`},en:{standard:`Anne-Sophie applies seven rules when working with AI.

- **Fictional data**: never real or confidential data in AI tools.
- **Human review**: the AI suggests, the designer checks and decides.
- **Precise prompts**: well framed from the start, they limit back-and-forth and unnecessary generations.
- **Restraint**: using AI when it brings real value, not by reflex.
- **Written rules**: framing the AI with a Design System and skills, rather than letting it improvise.
- **Checked accessibility**: making sure what the AI generates meets contrast and RGAA requirements, because it does not guarantee this on its own.
- **Bias**: reviewing generated texts, personas and images to avoid stereotypes.

This approach echoes her Responsible Digital certification.`,express:`- **Fictional data**: never real or confidential data.
- **Human review**: the AI suggests, the designer decides.
- **Precise prompts**: less back-and-forth and fewer unnecessary generations.
- **Restraint**: AI when it brings real value.
- **Written rules**: a Design System and skills to frame the AI.
- **Accessibility and bias**: contrast, RGAA and stereotypes checked.`}},followUps:["ai","education","portfoliobuild"]},{id:"confidential",question:{fr:"Peut-elle présenter ses projets confidentiels en entretien ?",en:"Can she present her confidential projects in an interview?"},chip:{fr:"Ses projets confidentiels",en:"Her confidential projects"},keywords:[["pas montres",8],["projets clients",9],["client projects",9],["client work",8],["ne sont pas montres",9],["real work",8],["vrais projets",8],["vrai travail",7],["confidenti",7],["nda",7],["accord de confidentialite",10],["non disclosure",9],["montrer ses projets",8],["presenter ses projets",8],["show her projects",8],["present her projects",8],["en entretien",5],["in an interview",5],["sous nda",9],["under nda",9]],answer:{fr:{standard:`Une partie de son travail en mission est confidentielle. Ce qu'elle peut montrer, et sous quelle forme, dépend de chaque projet.

Le plus simple est de lui écrire : elle vous dira ce qu'elle peut présenter, et vous trouverez ensemble le format le plus adapté à votre recrutement.`,express:`- **Confidentiel** : une partie de son travail en mission ne peut pas être montrée telle quelle.
- **Selon le projet** : ce qu'elle peut présenter varie.
- **Le plus simple** : lui écrire pour en parler.`},en:{standard:`Part of her work on engagements is confidential. What she can show, and in what form, depends on each project.

The simplest way is to write to her: she will tell you what she can present, and together you will find the format that best suits your hiring process.`,express:`- **Confidential**: part of her engagement work cannot be shown as is.
- **Depending on the project**: what she can present varies.
- **The simplest way**: write to her to discuss it.`}},followUps:["bnp","proudest","contact"],actions:["email"]}],Td=[{id:"profile",question:{fr:"Résume le profil d'Anne-Sophie et ce qui la différencie en 30 secondes",en:"Summarise Anne-Sophie's profile and what sets her apart in 30 seconds"},chip:{fr:"Son profil en 30 secondes",en:"Her profile in 30 seconds"},keywords:[["apporte de plus",8],["ce qu elle apporte",7],["makes her different",8],["different",4],["profil",4],["qui est",4],["who is",4],["present",3],["pitch",4],["differenci",4],["valeur ajoutee",4],["added value",4],["summar",3],["resum",2],["30 secondes",4],["30 seconds",4],["about her",4],["sets her apart",5],["pourquoi elle",4],["why her",4],["why hire",5],["recrut",4],["embauch",4],["hire",4],["anne sophie",2]],answer:{fr:{standard:`**Anne-Sophie Leroy** est Product Designer — UX/UI, Design Ops & AI Workflows, basée à Paris.

### Ce qui la différencie
- **Un double profil, technique et créatif** : une maîtrise pointue de l'UX et de l'UI, et des compétences de graphiste pour l'illustration et la création quand le projet le demande. Un héritage des arts visuels et de la mode (Balmain, Indress), conjugué à une forte expertise Design System, *AI Skills* et *vibecoding*.
- **Six secteurs** : mode, retail, luxe, banque, énergie et secteur public.
- **Des produits complexes rendus lisibles** : chaîne de crédit grandes entreprises chez BNP Paribas CIB, application Privilege Card du Groupe Kering, plateforme justdecarb.grdf.fr.
- **L'industrialisation du design** : elle a cadré, avec son équipe, un Design System lisible par l'IA, et prototype en haute fidélité avec Claude Code pour accélérer le delivery.

### Sa façon de travailler
- **Curieuse et autodidacte** : passée des arts visuels et de la mode à l'UX, puis aux workflows IA, elle a appris seule Claude Code et les skills. Ce qu'elle aime : apprendre et relever de nouveaux défis.
- **Sens du collectif** : elle fait travailler ensemble métiers, développeurs et équipes IA, en atelier comme au quotidien.
- **Adaptable** : elle prend vite ses repères dans un nouveau métier et un nouveau contexte.

### En chiffres
| Mission | Résultat |
|---|---|
| BNP Paribas CIB | ==+5 modules sur 17== optimisés par l'IA · ==~1 500 utilisateurs== |
| Groupe Kering | ==40 000 utilisateurs== actifs |
| GRDF | ==Note C EcoIndex== + conformité RGAA |
| Eden Park | ==+20 % de ventes e-commerce== en 1 an |`,express:`- **Product Designer** UX/UI, Design Ops & AI Workflows — Paris, chez mc2i depuis janvier 2024.
- **Aujourd'hui** : BNP Paribas CIB, équipes IA et UX — ==+5 modules sur 17== optimisés par l'IA, ==~1 500 utilisateurs==.
- **Avant** : Groupe Kering (==40 000 utilisateurs==), GRDF (==Note C EcoIndex== + RGAA).
- **Sa signature** : le design augmenté par l'IA (*AI Skills*, *vibecoding* avec Claude Code), porté par un œil créatif issu de la mode.
- **Six secteurs** : mode, retail, luxe, banque, énergie et secteur public.
- **Sa façon de travailler** : curieuse et autodidacte, sens du collectif, adaptable.`,deep:`### Lecture Design Lead
- **Positionnement** : à la jonction entre conception produit et outillage des équipes — elle ne livre pas seulement des écrans, elle fait évoluer la façon dont l'équipe les produit.
- **Levier 1 — Cadre** : avec l'équipe, des principes pour qu'un Design System soit exploitable par des agents IA.
- **Levier 2 — Vitesse** : prototypes haute fidélité fonctionnels en *vibecoding* (Claude Code), cohérents avec le Design System, et specs UX/UI générées en \`.md\`.
- **Levier 3 — Process** : co-construction de processus transverses entre les pôles IA et UX.`},en:{standard:`**Anne-Sophie Leroy** is a Product Designer — UX/UI, Design Ops & AI Workflows, based in Paris.

### What sets her apart
- **A dual profile, technical and creative**: in-depth UX and UI expertise, plus graphic design skills for illustration and creative work when the project calls for it. A heritage from visual arts and fashion (Balmain, Indress), combined with strong expertise in Design Systems, *AI Skills* and *vibecoding*.
- **Six sectors**: fashion, retail, luxury, banking, energy and the public sector.
- **Complex products made readable**: the large-corporate credit chain at BNP Paribas CIB, Kering Group's Privilege Card app, the justdecarb.grdf.fr platform.
- **Industrialising design**: with her team she framed an AI-readable Design System, and builds high-fidelity prototypes with Claude Code to speed up delivery.

### How she works
- **Curious and self-taught**: from visual arts and fashion to UX, then to AI workflows, she taught herself Claude Code and skills. What she enjoys: learning and taking on new challenges.
- **Team spirit**: she gets business teams, developers and AI teams working together, in workshops and day to day.
- **Adaptable**: she quickly finds her bearings in a new business and a new context.

### In figures
| Engagement | Result |
|---|---|
| BNP Paribas CIB | ==5+ of 17 modules== optimised with AI · ==~1,500 users== |
| Kering Group | ==40,000 active users== |
| GRDF | ==EcoIndex grade C== + RGAA compliance |
| Eden Park | ==+20% e-commerce sales== in one year |`,express:`- **Product Designer** UX/UI, Design Ops & AI Workflows — Paris, at mc2i since January 2024.
- **Today**: BNP Paribas CIB, AI and UX teams — ==5+ of 17 modules== optimised with AI, ==~1,500 users==.
- **Before**: Kering Group (==40,000 users==), GRDF (==EcoIndex grade C== + RGAA).
- **Her signature**: AI-augmented design (*AI Skills*, *vibecoding* with Claude Code), driven by a creative eye trained in fashion.
- **Six sectors**: fashion, retail, luxury, banking, energy and the public sector.
- **How she works**: curious and self-taught, team spirit, adaptable.`,deep:`### Design Lead reading
- **Positioning**: at the junction of product design and team tooling — she doesn't only ship screens, she improves how the team produces them.
- **Lever 1 — Framework**: with the team, principles that make a Design System usable by AI agents.
- **Lever 2 — Speed**: functional high-fidelity prototypes through *vibecoding* (Claude Code), consistent with the Design System, plus UX/UI specs generated in \`.md\`.
- **Lever 3 — Process**: co-building cross-team processes between the AI and UX departments.`}},followUps:["ai","impact","background"],actions:["cv"]},{id:"ai",question:{fr:"Comment a-t-elle intégré l'IA, le vibecoding et les AI Skills dans les workflows UX ?",en:"How did she bring AI, vibecoding and AI Skills into UX workflows?"},chip:{fr:"IA, vibecoding & AI Skills",en:"AI, vibecoding & AI Skills"},keywords:[["ai skill",6],["skill md",6],["ia",4],["ai",4],["travaille t elle avec l ia",8],["work with ai",6],["vibecod",6],["vibe coding",6],["claude",5],["agent",3],["prompt",4],["workflow",4],["automatis",3],["automat",3],["design ops",5],["designops",5],["intelligence artificielle",5],["artificial intelligence",5],["llm",4],["genai",4],["industrialis",4],["industrializ",4]],answer:{fr:{standard:`Chez **BNP Paribas CIB**, Anne-Sophie travaille dans une cellule design « AI First ». L'IA y est un outil de production du design, pas seulement un sujet de produit.

### 1. Un cadre d'équipe
Avec son équipe, elle a développé puis formalisé une nouvelle façon de travailler : un flow où l'IA génère plusieurs solutions et où le designer juge, et un Design System rendu lisible par la machine.

### 2. Le *vibecoding* au quotidien
- Prototypes haute fidélité **fonctionnels** avec Claude Code, en s'appuyant sur les *AI Skills* du Design System, qu'elle crée pour l'équipe.
- Spécifications UX/UI structurées en \`.md\`.

### 3. Un skill conçu par elle
Pour maîtriser la mécanique, elle a conçu et testé, avec Claude Code, un skill sur le Design System de ce portfolio. En voici le fichier réel.

### Résultat
==+5 modules sur 17== déjà simplifiés grâce à l'IA et déployés auprès d'environ ==1 500 utilisateurs==, avec des retours positifs des utilisateurs cibles. Les composants sont unifiés, la navigation est homogène d'un module à l'autre, et le delivery s'accélère.`,express:`- **Cadre d'équipe** : un flow où l'IA génère et le designer juge, développé avec son équipe chez BNP Paribas CIB.
- **Vibecoding** : prototypes haute fidélité fonctionnels avec Claude Code et les *AI Skills* du Design System, specs en \`.md\`.
- **Skill** : un skill conçu et testé par elle, avec Claude Code, sur le Design System de ce portfolio.
- **Impact** : ==+5 modules sur 17== simplifiés grâce à l'IA, ==~1 500 utilisateurs==, composants et navigation unifiés.`,deep:`### Le dispositif (vue Design Lead)
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
==5+ of 17 modules== already simplified with AI and rolled out to around ==1,500 users==, with positive feedback from target users. Components are unified, navigation is consistent from one module to the next, and delivery is faster.`,express:`- **Team framework**: a flow where the AI generates and the designer judges, developed with her team at BNP Paribas CIB.
- **Vibecoding**: functional high-fidelity prototypes with Claude Code and the Design System *AI Skills*, specs in \`.md\`.
- **Skill**: a skill she designed and tested, with Claude Code, on this portfolio's Design System.
- **Impact**: ==5+ of 17 modules== simplified with AI, ==~1,500 users==, unified components and navigation.`,deep:`### The system (Design Lead view)
| Building block | Role in the workflow |
|---|---|
| Component library | Source of truth for the interface |
| Design System AI Skills | Rules made usable by an AI agent |
| Vibecoding (Claude Code) | Functional high-fidelity prototype aligned with the Design System |
| \`.md\` specs | Structured handoff, readable by developers and agents alike |

**Why it works**: a skill is only useful if the rules are explicit. Formalising a Design System for an AI forces ambiguities out — which also benefits designers.`}},attachment:"skill",followUps:["bnp","responsibleai","designsystem"]},{id:"impact",question:{fr:"Quel impact a eu son travail, mission par mission ?",en:"What impact has her work had, engagement by engagement?"},chip:{fr:"L’impact de son travail",en:"The impact of her work"},keywords:[["impact",5],["resultat",5],["result",5],["chiffre",5],["figure",4],["kpi",5],["metric",5],["mesur",4],["measur",4],["performance",3],["roi",4],["succes",3],["success",3],["achievement",4],["reussite",4],["numbers",4],["retours utilisateurs",5],["user feedback",5],["dette design",5],["design debt",5],["apport",3]],answer:{fr:{standard:`Voici ce que le travail d'Anne-Sophie a changé, mission par mission.

| Mission | Périmètre | Ce que son travail a changé |
|---|---|---|
| **BNP Paribas CIB** · chaîne de crédit · 2024 – aujourd'hui | 17 modules, ~1 500 utilisateurs | ==+5 modules== simplifiés grâce à l'IA |
| **Groupe Kering** · Privilege Card · 2022 – 2023 | ==40 000 utilisateurs== actifs | Quotas d'achat et restrictions de vente fiabilisés |
| **GRDF** · justdecarb.grdf.fr · 2024 | Plateforme grand public | ==Note C EcoIndex== et conformité ==RGAA== |
| **Eden Park** · e-commerce · 2021 – 2022 | Site e-commerce | Contribution à ==+20 % de ventes== en un an |

### Chez BNP Paribas CIB
- **+5 modules sur 17 simplifiés grâce à l'IA** : l'IA prend en charge les tâches chronophages, allège la charge cognitive et limite les erreurs de données. Les retours des utilisateurs cibles sont positifs.
- **Une dette design réduite** : des composants unifiés et une navigation homogène, plus intuitive d'un module à l'autre.
- **Une équipe qui travaille autrement** : des process co-construits entre les pôles IA et UX, des prototypes haute fidélité en *vibecoding* et des specs en \`.md\`.

### Chez Eden Park
- **Une contribution à +20 % de ventes en un an**, avec l'équipe e-commerce : refonte éditoriale du site, stratégie e-marketing, migration de Magento vers Shopify et suivi des tickets de maintenance.

### Chez Kering et GRDF
- **Kering** : la gestion des quotas d'achat et des restrictions de vente devient fiable en boutique.
- **GRDF** : un Design System dédié, sobre et accessible.`,express:`- **BNP Paribas CIB** : ==+5 modules sur 17== simplifiés grâce à l'IA, moins de tâches chronophages et d'erreurs, retours utilisateurs positifs.
- **Groupe Kering** : quotas d'achat fiabilisés sur une app de ==40 000 utilisateurs==.
- **GRDF** : ==Note C EcoIndex== et conformité RGAA.
- **Eden Park** : contribution à ==+20 % de ventes e-commerce== en un an.`,deep:`### Comment ces résultats ont été obtenus
- **BNP** : l'impact vient du couple Design System + AI Skills mis en place par l'équipe — moins d'écarts à corriger, des prototypes fonctionnels plus tôt dans le cycle.
- **Kering** : recherche utilisateurs, cartographies de parcours complexes et tests itératifs avant chaque évolution de l'app.
- **GRDF** : les audits UX et RGAA en amont ont cadré un Design System sobre, pensé mobile-first — la performance environnementale est une conséquence du design, pas un correctif.`},en:{standard:`Here is what Anne-Sophie's work changed, engagement by engagement.

| Engagement | Scope | What her work changed |
|---|---|---|
| **BNP Paribas CIB** · credit chain · 2024 – present | 17 modules, ~1,500 users | ==5+ modules== simplified with AI |
| **Kering Group** · Privilege Card · 2022 – 2023 | ==40,000 active users== | Reliable purchase quotas and sales restrictions |
| **GRDF** · justdecarb.grdf.fr · 2024 | Public-facing platform | ==EcoIndex grade C== and ==RGAA== compliance |
| **Eden Park** · e-commerce · 2021 – 2022 | E-commerce site | Contribution to ==+20% sales== in one year |

### At BNP Paribas CIB
- **5+ of 17 modules simplified with AI**: AI takes over time-consuming tasks, lightens the cognitive load and limits data errors. Feedback from target users is positive.
- **Less design debt**: unified components and consistent navigation, more intuitive from one module to the next.
- **A team that works differently**: processes co-built between the AI and UX departments, high-fidelity prototypes through *vibecoding* and specs in \`.md\`.

### At Eden Park
- **A contribution to +20% sales in one year**, with the e-commerce team: editorial redesign of the site, e-marketing strategy, migration from Magento to Shopify and follow-up of maintenance tickets.

### At Kering and GRDF
- **Kering**: purchase-quota management and in-store sales restrictions become reliable.
- **GRDF**: a dedicated, lean and accessible Design System.`,express:`- **BNP Paribas CIB**: ==5+ of 17 modules== simplified with AI, fewer time-consuming tasks and errors, positive user feedback.
- **Kering Group**: reliable purchase quotas on an app with ==40,000 users==.
- **GRDF**: ==EcoIndex grade C== and RGAA compliance.
- **Eden Park**: contribution to ==+20% e-commerce sales== in one year.`,deep:`### How these results were achieved
- **BNP**: the impact comes from the Design System + AI Skills pairing set up by the team — fewer deviations to fix, functional prototypes earlier in the cycle.
- **Kering**: user research, complex journey mapping and iterative testing before each evolution of the app.
- **GRDF**: upfront UX and RGAA audits framed a lean, mobile-first Design System — environmental performance is a consequence of the design, not a patch.`}},followUps:["success","bnp","kering"]},{id:"search",question:{fr:"Quel type de poste et d'équipe recherche-t-elle aujourd'hui ?",en:"What kind of role and team is she looking for today?"},chip:{fr:"Le poste qui lui correspond",en:"The role that fits her"},keywords:[["poste",4],["recherche t elle",5],["cherche",3],["looking for",5],["role",3],["job",3],["opportunit",4],["souhait",3],["ideal",3],["seeking",4],["type d equipe",4],["kind of team",4],["projet professionnel",5],["next step",4],["motivation",4],["ambition",4],["position",3],["lead",3],["evoluer",4],["evolution",3],["growth",3],["secteur",3],["sector",3]],answer:{fr:{standard:`Anne-Sophie recherche un poste de **Product Designer en CDI**, avec la perspective d'évoluer vers un rôle de **lead design**.

### Ce qu'elle recherche
- **Poste** : Product Designer, en CDI.
- **Lieu** : Paris ou région PACA, en hybride.
- **Évolution** : à terme, la possibilité de prendre un rôle de lead design.
- **Secteur** : ouverte à tous les secteurs. Après plusieurs missions dans la banque, elle a envie de découvrir de nouveaux domaines.

### Ce qu'elle apporte
- **Un regard créatif**, formé aux arts visuels et à la mode.
- **Une solide maîtrise de l'UX/UI**, de la recherche utilisateur au Design System.
- **Une longueur d'avance technique sur l'IA** : skills, *vibecoding* avec Claude Code, prototypes fonctionnels.

Adaptable, elle est ouverte à échanger sur toute opportunité. Le plus simple est de lui écrire : elle vous répond directement.`,express:`- **Poste** : Product Designer en CDI, avec la perspective d'évoluer vers le lead design.
- **Lieu** : Paris ou région PACA, en hybride.
- **Secteur** : ouverte à tous, avec l'envie de découvrir de nouveaux domaines après la banque.
- **Ses atouts** : un regard créatif, une solide maîtrise de l'UX/UI, une longueur d'avance sur l'IA.`},en:{standard:`Anne-Sophie is looking for a **permanent Product Designer role**, with the prospect of growing into a **design lead** role.

### What she is looking for
- **Role**: Product Designer, permanent contract (CDI).
- **Location**: Paris or the PACA region (south-east France), hybrid.
- **Growth**: in time, the opportunity to take on a design lead role.
- **Sector**: open to all sectors. After several engagements in banking, she is keen to discover new fields.

### What she brings
- **A creative eye**, trained in visual arts and fashion.
- **Solid UX/UI expertise**, from user research to Design Systems.
- **A technical head start on AI**: skills, *vibecoding* with Claude Code, functional prototypes.

Adaptable, she is open to discussing any opportunity. The simplest way is to write to her: she replies directly.`,express:`- **Role**: permanent Product Designer, with the prospect of growing into design lead.
- **Location**: Paris or the PACA region, hybrid.
- **Sector**: open to all, keen to discover new fields after banking.
- **Strengths**: a creative eye, solid UX/UI expertise, a head start on AI.`}},followUps:["whyleave","future","availability"],actions:["email","cv"]},{id:"bnp",question:{fr:"Comment a-t-elle cadré le travail d'une équipe design augmentée par l'IA chez BNP Paribas CIB ?",en:"How did she frame the work of an AI-augmented design team at BNP Paribas CIB?"},chip:{fr:"Banque · Équipe UX augmentée par l’IA",en:"Bank · AI-augmented UX team"},keywords:[["ux augmentee",10],["equipe ux",8],["augmentee par l ia",10],["bnp",6],["paribas",6],["cib",5],["credit",5],["banque",4],["bank",4],["mc2i",4],["conseil",3],["consult",3],["charge cognitive",4],["cognitive load",4],["actuel",2]],answer:{fr:{standard:`### Contexte
Cellule design « AI First » chez **BNP Paribas CIB**, sur la refonte de la chaîne de crédit pour grandes entreprises.

Les skills et les documents produits en mission sont confidentiels. Les schémas de cette page illustrent le cadre sans reprendre les documents réels.

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
Comme les skills de mission ne peuvent pas être montrés, elle a conçu, avec Claude Code, un skill pour le Design System de ce portfolio : les règles qu'un agent IA lit avant de créer ou de modifier un écran.

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
- **En pratique** : les skills de mission étant confidentiels, un skill conçu et testé par elle, avec Claude Code, sur le Design System de ce portfolio.`,deep:`### Design Lead
- **Le Design System change de nature** : ce n'est plus seulement une bibliothèque de composants, c'est le contexte que l'agent charge avant de générer.
- **Un prompt robuste tient en trois clés** : des cas d'usage explicites (succès, erreur, états limites), les règles de gestion, et une auto-vérification exigée de l'IA.
- **Definition of done d'un changement d'interface** : tokens réutilisés, build et tests verts, aucune donnée réelle, sur une branche.
- **Le design versionné comme du code** : changement mineur ou rupture, contrôle automatique avant validation, IA confinée à une zone ciblée.
- **Garde-fous** : aucune donnée réelle, uniquement des données fictives.
- **Vigilance** : un bon premier jet donne une illusion de facilité.`},en:{standard:`### Context
“AI First” design unit at **BNP Paribas CIB**, on the redesign of the credit chain for large corporates.

The skills and documents produced on the engagement are confidential. The diagrams on this page illustrate the framework without reproducing the real documents.

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
As the engagement's skills cannot be shown, she designed, with Claude Code, a skill for this portfolio's Design System: the rules an AI agent reads before creating or changing a screen.

She then tested it: the same request given to two agents, one with the skill, one without.

[[skill-test]]

### Fix the rule, not the result
The skill was not right the first time. After each test she looked at the screens produced, spotted what was wrong, and fixed the rule rather than touching up the screen.

[[skill-lessons]]

It is the same principle as in the team: the AI produces, the designer judges, and that judgement becomes a rule the AI will apply next time.

The file below is the real one: it is also the one the Design System page displays.`,express:`- **Context**: “AI First” design unit at BNP Paribas CIB, credit-chain redesign — ==5+ of 17 modules==, ==~1,500 users==.
- **Problem**: when the AI produces a screen in minutes, guaranteeing consistency with the Design System, one way of working, and knowledge that is not lost.
- **Her role**: developing a new working framework with her team, then formalising it; creating skills and governing the UI components for AI.
- **Solution**: a shared framework (design flow, AI-ready Design System, knowledge, handoffs) where the AI generates several solutions and the designer judges and decides.
- **In practice**: as the engagement's skills are confidential, a skill she designed and tested, with Claude Code, on this portfolio's Design System.`,deep:`### Design Lead
- **The Design System changes nature**: no longer just a component library, it is the context the agent loads before generating.
- **A robust prompt has three keys**: explicit use cases (success, error, edge states), the business rules, and a self-check required from the AI.
- **Definition of done for a UI change**: tokens reused, clean build and green tests, no real data, on a branch.
- **Design versioned like code**: minor change or breaking change, automatic check before validation, AI confined to a targeted area.
- **Guardrails**: no real data, mock data only.
- **Watch out**: a good first draft creates an illusion of ease.`}},attachment:"skill",flow:"ux",anchors:!0,followUps:["covenant","confidential","ai"]},{id:"covenant",question:{fr:"Montre-moi le suivi des clauses de crédit : comment a-t-elle conçu ce suivi assisté par IA pour une banque d'investissement ?",en:"Show me the loan clause monitoring project: how did she design this AI-assisted monitoring for an investment bank?"},chip:{fr:"Banque · Clauses de crédit et IA",en:"Bank · Loan clauses and AI"},keywords:[["covenant",8],["covenants",8],["monitoring",4],["clauses de credit",10],["clause de credit",10],["loan clause",10],["suivi des clauses",10],["clause",5],["compliance certificate",6],["breach",5],["waiver",4],["matching",4],["rapprochement",4],["extraction",4],["mycreditapp",5],["workspace ai",5],["suivi des engagements",5],["ecran",3],["screen",3],["maquette",4],["mockup",4],["prototype",3],["ux case",5],["cas ux",5]],answer:{fr:{standard:`### Contexte
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
- **From case to pattern**: AI extraction, email submission and status tags reused as-is on another module.`}},attachment:"covenant",flow:"covenant",anchors:!0,followUps:["ai","designsystem","skills"]},{id:"kering",question:{fr:"Parle-moi de l'app Privilege Card du Groupe Kering : comment a-t-elle transformé une carte physique en application utilisée par 40 000 personnes ?",en:"Tell me about the Kering Group Privilege Card app: how did she turn a physical card into an app used by 40,000 people?"},chip:{fr:"Kering · Carte de réduction devenue application",en:"Kering · Discount card turned into an app"},keywords:[["kering",6],["privilege",6],["luxe",4],["luxury",4],["40k",5],["40 000",5],["40000",5],["carte",3],["card",3],["mobile",3],["application mobile",4],["mobile app",4],["quota",5],["boutique",3],["retail",3],["projet mobile",7],["mobile project",7]],answer:{fr:{standard:`### Contexte
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
- **Mobile-first**: designing for the small screen first forces content prioritisation.`}},attachment:"grdf",flow:"grdf",anchors:!0,followUps:["covenant","designsystem","impact"]},{id:"cdc",question:{fr:"Quelle a été sa démarche pour refondre un outil métier de gestion de carrière à la Caisse des Dépôts ?",en:"What was her approach to redesigning a career-management business tool at Caisse des Dépôts?"},chip:{fr:"Caisse des Dépôts · Outil métier",en:"Caisse des Dépôts · Business tool"},keywords:[["caisse des depots",6],["cdc",5],["outil metier",5],["business tool",5],["emaj",6],["rh",4],["hr",4],["carriere",4],["career management",5],["ressources humaines",5],["human resources",5],["outil interne",4],["internal tool",4],["atelier",3],["workshop",3],["co creation",4],["secteur public",4],["public sector",4]],answer:{fr:{standard:`### Contexte
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
- **Structured handoff**: \`.md\` specs consistent with the Design System, from prototype to development.`}},attachment:"ds",followUps:["ai","grdf","stack"]},{id:"vitalize",question:{fr:"Parle-moi de Vitaliz : comment a-t-elle mené une étude UX complète, des personas à l'application ?",en:"Tell me about Vitaliz: how did she run a full UX study, from personas to the app?"},chip:{fr:"Vitaliz · Des personas à l’application",en:"Vitaliz · From personas to the app"},keywords:[["sante",6],["health",6],["application de sante",8],["vitalize",9],["vitaliz",9],["bracelet",7],["montre connectee",8],["smartwatch",7],["watch",6],["wristband",7],["blueprint",7],["service blueprint",8],["charte graphique",6],["brand guidelines",6],["projet de master",6],["master project",6],["master 2",5],["sport",4],["interview",4],["persona",3],["experience map",4],["carte d'experience",4]],answer:{fr:{standard:`### Contexte
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
- **Solution**: a personalised programme, a home screen with chosen information, challenges and a ranking among friends to come back; one model per persona and a reassuring brand.`}},attachment:"vitalize",anchors:!0,followUps:["bloombar","rebrand","grdf"]},{id:"bloombar",question:{fr:"Parle-moi de Bloom Bar : comment a-t-elle créé l'univers visuel d'un nouveau produit ?",en:"Tell me about Bloom Bar: how did she create the visual world of a new product?"},chip:{fr:"Bloom Bar · Direction artistique",en:"Bloom Bar · Art direction"},keywords:[["bloom bar",9],["bloombar",9],["bloom",7],["barre",5],["cereale",5],["fleur",5],["flower",5],["illustration 3d",8],["3d",6],["packaging",7],["direction artistique",5],["art direction",5],["illustrator",4],["style graphique",7],["culture graphique",7],["graphic style",7],["graphiste",5]],answer:{fr:{standard:`### Contexte
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
- **Solution**: a “retro chic” McDonald's, from the logo to the desktop and mobile screens.`}},anchors:!0,followUps:["vitalize","portfoliods","grdf"]},{id:"portfoliods",question:{fr:"Peut-on voir le Design System de ce portfolio ?",en:"Can I see this portfolio’s Design System?"},chip:{fr:"Portfolio · Design System automatisé",en:"Portfolio · AI-automated Design System"},keywords:[["montre moi le design system",10],["voir le design system",10],["show me the design system",10],["design system du portfolio",9],["design system de ce portfolio",9],["design system du site",9],["design system de ce site",9],["design system of this portfolio",9],["portfolio design system",9],["design system of this site",9],["portfolio s design system",9],["lisible par l ia",7],["ai readable",7],["design system",3],["regles de design",4],["design rules",4]],answer:{fr:{standard:`Oui : ce portfolio a son propre Design System, lisible par une personne comme par une IA. C'est la démarche qu'Anne-Sophie mène avec son équipe chez BNP Paribas CIB pour rendre un Design System exploitable par l'IA. Ici, elle l'a appliquée de bout en bout.

### Pour vous : une page à parcourir
- **Fondations** : accessibilité, mise en page, contenu.
- **Styles** : couleurs en tokens, typographie, formes, élévation, icônes, en thème clair et sombre.
- **Composants** : rangés par fonction, chacun avec son exemple, son anatomie et ses états.

### Pour l'IA : un skill
Un skill est un dossier d'instructions qu'un agent IA charge de lui-même quand la tâche s'y prête — ici, dès qu'on lui demande de créer ou de modifier un écran. Il contient :

- **un fichier principal** : les quatre règles non négociables ;
- **trois fichiers de référence** : fondations, styles, composants ;
- **un script** que l'agent lance avant de livrer, pour vérifier ce qui peut l'être automatiquement (couleurs en dur, ombres, majuscules).

Un Design System classique documente pour des personnes. Un skill rend ces mêmes règles **applicables par une IA**, et vérifiables.

### Ses choix de conception
- **Chaque règle donne sa raison** : l'IA, comme un nouveau designer, comprend la règle au lieu de l'appliquer à l'aveugle, et sait quoi faire face à un cas imprévu.
- **Des fichiers ouverts seulement au besoin** : l'agent lit l'essentiel, puis la seule référence utile à sa tâche.
- **Des contrastes vérifiés** : chaque couple de couleurs est calculé dans les deux thèmes, et tous les textes passent le niveau AA des WCAG.

### Gouvernance : une seule source
La page n'a pas de contenu à elle : elle affiche directement les fichiers du skill. Un script vérifie que la version anglaise suit chaque modification de la version française. Ce que vous lisez est ce que l'IA applique.

### Ce que ça change
Même demande confiée à deux agents, sur un projet vide : ==7 critères sur 7== respectés avec le skill, ==3 sur 7== sans. Anne-Sophie l'a conçu et testé avec Claude Code, en corrigeant la règle après chaque test.`,express:`- **Un Design System lisible par l'IA** : la démarche qu'elle mène avec son équipe chez BNP Paribas CIB, testée ici de bout en bout.
- **Une page** en trois niveaux (fondations, styles, composants), avec des tokens, un thème clair et sombre, et des contrastes AA vérifiés.
- **Un skill** : les mêmes règles, chacune avec sa raison, et un script de vérification.
- **Résultat du test** : ==7 critères sur 7== avec le skill, ==3 sur 7== sans.`},en:{standard:`Yes: this portfolio has its own Design System, readable by a person as well as by an AI. It is the approach Anne-Sophie leads with her team at BNP Paribas CIB to make a Design System usable by AI. Here, she applied it end to end.

### For you: a page to browse
- **Foundations**: accessibility, layout, content.
- **Styles**: colours as tokens, typography, shape, elevation, icons, in light and dark themes.
- **Components**: grouped by function, each with its example, anatomy and states.

### For the AI: a skill
A skill is a folder of instructions that an AI agent loads on its own when the task calls for it — here, whenever it is asked to create or change a screen. It contains:

- **a main file**: the four non-negotiable rules;
- **three reference files**: foundations, styles, components;
- **a script** the agent runs before delivering, to check what can be checked automatically (hard-coded colours, shadows, capitals).

A classic Design System documents for people. A skill makes those same rules **applicable by an AI**, and verifiable.

### Her design choices
- **Every rule gives its reason**: the AI, like a new designer, understands the rule instead of applying it blindly, and knows what to do in an unforeseen case.
- **Files opened only when needed**: the agent reads the essentials, then only the reference its task needs.
- **Checked contrasts**: every colour pair is calculated in both themes, and all text passes WCAG level AA.

### Governance: a single source
The page has no content of its own: it displays the skill files directly. A script checks that the English version follows every change to the French one. What you read is what the AI applies.

### What it changes
The same request given to two agents, on an empty project: ==7 criteria out of 7== met with the skill, ==3 out of 7== without. Anne-Sophie designed and tested it with Claude Code, fixing the rule after each test.`,express:`- **An AI-readable Design System**: the approach she leads with her team at BNP Paribas CIB, tested here end to end.
- **A page** on three levels (foundations, styles, components), with tokens, light and dark themes, and checked AA contrasts.
- **A skill**: the same rules, each with its reason, and a check script.
- **Test result**: ==7 criteria out of 7== with the skill, ==3 out of 7== without.`}},attachment:"ds",followUps:["bnp","designsystem","ai"]},{id:"education",question:{fr:"Quelle est sa formation ?",en:"What is her educational background?"},chip:{fr:"Sa formation",en:"Her education"},keywords:[["formation",5],["diplome",5],["etudes",3],["master",5],["bachelor",5],["ecole",4],["school",4],["degree",5],["education",5],["studied",4],["etudie",4],["universit",4],["manaa",6],["chardon savard",6],["digital school",6],["bac",3],["cursus",5],["academi",4],["certif",7],["pspo",7],["numerique responsable",7],["responsible digital",7]],answer:{fr:{standard:`Une formation qui relie **arts appliqués, mode et design numérique**.

| Diplôme | École | Période |
|---|---|---|
| **Master Design UX/UI & Gestion de projet** | Digital School of Paris | 2021 – 2023 |
| **Bachelor Design de Mode & Textile** | Atelier Chardon Savard, Nantes | 2016 – 2020 |
| **MANAA — Arts Appliqués** | IMAD, Caen | 2018 – 2019 |

### Certifications
- **Scrum PSPO I** (Professional Scrum Product Owner), 2026 : le cadre Scrum, le rôle du Product Owner et la gestion du Product Backlog.
- **Certificat de connaissance Numérique Responsable**, 2026 : un numérique durable, éthique et inclusif.

Ce socle créatif nourrit aujourd'hui son travail de Product Designer : sens du détail, culture visuelle et rigueur de gestion de projet.`,express:`- **Master** Design UX/UI & Gestion de projet — Digital School of Paris (2021 – 2023).
- **Bachelor** Design de Mode & Textile — Atelier Chardon Savard, Nantes (2016 – 2020).
- **MANAA** Arts Appliqués — IMAD, Caen (2018 – 2019).
- **Certifications** : Scrum PSPO I et Numérique Responsable (2026).`},en:{standard:`An education linking **applied arts, fashion and digital design**.

| Degree | School | Period |
|---|---|---|
| **Master's in UX/UI Design & Project Management** | Digital School of Paris | 2021 – 2023 |
| **Bachelor in Fashion & Textile Design** | Atelier Chardon Savard, Nantes | 2016 – 2020 |
| **MANAA — Applied Arts foundation year** | IMAD, Caen | 2018 – 2019 |

### Certifications
- **Scrum PSPO I** (Professional Scrum Product Owner), 2026: the Scrum framework, the Product Owner role and Product Backlog management.
- **Responsible Digital knowledge certificate**, 2026: sustainable, ethical and inclusive digital.

This creative foundation feeds her work as a Product Designer today: attention to detail, visual culture and project-management rigour.`,express:`- **Master's** in UX/UI Design & Project Management — Digital School of Paris (2021 – 2023).
- **Bachelor** in Fashion & Textile Design — Atelier Chardon Savard, Nantes (2016 – 2020).
- **MANAA** Applied Arts — IMAD, Caen (2018 – 2019).
- **Certifications**: Scrum PSPO I and Responsible Digital (2026).`}},followUps:["background","languages","skills"]},{id:"languages",question:{fr:"Quelles langues parle-t-elle ?",en:"Which languages does she speak?"},chip:{fr:"Ses langues",en:"Her languages"},keywords:[["langue",5],["language",5],["anglais",5],["english",5],["espagnol",5],["spanish",5],["bilingue",5],["bilingual",5],["parle t elle",4],["speak",4],["francais",3],["french",3],["international",3]],answer:{fr:{standard:`Anne-Sophie travaille en **français** et en **anglais**.

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
- **Spanish**: B1.`}},followUps:["education","availability","profile"]},{id:"softskills",question:{fr:"Quels sont ses soft skills et ses engagements personnels ?",en:"What are her soft skills and personal commitments?"},chip:{fr:"Soft skills & engagements",en:"Soft skills & commitments"},keywords:[["soft skill",7],["softskill",7],["personnalite",5],["personality",5],["qualite",4],["hobb",5],["loisir",5],["passion",4],["benevol",6],["volunteer",6],["piano",6],["course a pied",6],["running",5],["engagement",4],["valeur",3],["values",4],["interet",4],["interests",4],["humain",4],["human",3],["collabor",4],["equipe",3],["team",3],["facilit",4],["communic",4],["caractere",4],["sport",4],["musique",4],["music",4],["en dehors",4],["outside work",5],["leadership",4],["manag",3],["travaille t elle",3],["curieu",5],["curious",5],["autodidact",6],["self taught",6],["adaptab",5],["sociable",5],["collectif",4],["team spirit",5]],answer:{fr:{standard:`Les soft skills d'Anne-Sophie se lisent dans ses missions autant que dans ses engagements.

### Dans le travail
- **Curieuse et autodidacte** : passée des arts visuels et de la mode à l'UX, puis aux workflows IA, elle a appris seule Claude Code et les skills.
- **Sens du collectif** : elle anime des ateliers de co-création (Caisse des Dépôts, Kering) et co-construit les process entre les pôles IA et UX chez BNP Paribas CIB.
- **Adaptable** : banque, luxe, énergie, secteur public. Elle prend vite ses repères dans un nouveau métier.
- **Écoute** : entretiens et tests utilisateurs au cœur de chaque projet.
- **Autonomie de bout en bout** : pilotage de projets digitaux complets chez Eden Park.

### En dehors
- **Bénévolat** — accompagnement à l'inclusion sociale et orientation administrative pour les jeunes de l'Aide Sociale à l'Enfance.
- **Piano classique** — plus de 5 ans de pratique : rigueur et régularité.
- **Course à pied** — endurance et constance.`,express:`- **Curieuse et autodidacte** : de la mode à l'UX, puis aux workflows IA.
- **Sens du collectif** : ateliers de co-création, process IA × UX.
- **Adaptable** : banque, luxe, énergie, secteur public.
- **Engagement** : bénévolat auprès des jeunes de l'Aide Sociale à l'Enfance.
- **Rigueur** : piano classique (+5 ans), course à pied.`},en:{standard:`Anne-Sophie's soft skills show in her engagements as much as in her commitments.

### At work
- **Curious and self-taught**: from visual arts and fashion to UX, then to AI workflows, she taught herself Claude Code and skills.
- **Team spirit**: she runs co-creation workshops (Caisse des Dépôts, Kering) and co-builds processes between the AI and UX departments at BNP Paribas CIB.
- **Adaptable**: banking, luxury, energy, public sector. She quickly finds her bearings in a new business.
- **Listening**: user interviews and testing at the heart of every project.
- **End-to-end autonomy**: managed complete digital projects at Eden Park.

### Outside work
- **Volunteering** — supporting social inclusion and administrative guidance for young people in child welfare care (Aide Sociale à l'Enfance).
- **Classical piano** — over 5 years of practice: rigour and consistency.
- **Running** — endurance and steadiness.`,express:`- **Curious and self-taught**: from fashion to UX, then to AI workflows.
- **Team spirit**: co-creation workshops, AI × UX processes.
- **Adaptable**: banking, luxury, energy, public sector.
- **Commitment**: volunteering with young people in child welfare care.
- **Rigour**: classical piano (5+ years), running.`}},followUps:["search","covenant","background"]},{id:"salary",question:{fr:"Quelles sont ses prétentions salariales ?",en:"What are her salary expectations?"},chip:{fr:"Rémunération",en:"Compensation"},keywords:[["salair",6],["remuner",6],["pretention",6],["tjm",6],["tarif",5],["salary",6],["compensation",6],["package",5],["pay",4],["day rate",6],["daily rate",6],["rate",3],["combien",3],["budget",4],["fourchette",5],["k€",4],["brut",4],["wage",5],["how much",4]],answer:{fr:{standard:`La rémunération n'est pas un sujet que je peux traiter à sa place : elle dépend du **périmètre du poste**, du **niveau de responsabilité** et du **contexte de l'équipe**.

Anne-Sophie en parle volontiers de vive voix. Le plus simple : lui écrire en précisant le poste et votre fourchette, elle vous répondra directement.`,express:`- **Rémunération** : à discuter directement avec Anne-Sophie.
- **Dépend de** : périmètre, responsabilités, contexte d'équipe.
- **Prochaine étape** : un email avec le poste et votre fourchette.`},en:{standard:`Compensation isn't something I can settle on her behalf: it depends on the **scope of the role**, the **level of responsibility** and the **team context**.

Anne-Sophie is happy to discuss it directly. The simplest route: email her with the role and your range, and she will get back to you.`,express:`- **Compensation**: to be discussed directly with Anne-Sophie.
- **Depends on**: scope, responsibilities, team context.
- **Next step**: an email with the role and your range.`}},followUps:["search","availability","profile"],actions:["email"]},{id:"availability",question:{fr:"Où est-elle basée et quelle est sa disponibilité ?",en:"Where is she based and what is her availability?"},chip:{fr:"Localisation & disponibilité",en:"Location & availability"},keywords:[["bouger",5],["a nice",6],["toulon",5],["aix",4],["montpellier",3],["dispon",6],["availab",6],["mobilit",6],["remote",5],["teletravail",6],["preavis",6],["notice",5],["localis",5],["location",4],["paris",4],["habite",4],["based",4],["relocat",5],["freelance",5],["cdi",5],["contrat",4],["contract",4],["quand",2],["when can",4],["start date",5],["commencer",4],["hybride",5],["hybrid",5],["demenag",5],["deplacement",4],["ville",3],["where",2],["ou est",3],["full time",4],["temps plein",4],["paca",6],["marseille",5],["provence",5],["sud",2]],answer:{fr:{standard:`### Localisation
Anne-Sophie est basée à **Paris**. Elle recherche un poste à Paris ou en région PACA, en **hybride**.

### Situation actuelle
Elle est en poste chez **mc2i** depuis janvier 2024, actuellement en mission chez BNP Paribas CIB.

### Contrat et disponibilité
Elle recherche un **CDI**. Pour sa date de disponibilité, le plus simple est de lui écrire : elle vous répondra directement.`,express:`- **Basée à** : Paris. Poste recherché à Paris ou en région PACA, en hybride.
- **Contrat** : CDI.
- **Situation** : en poste chez mc2i, mission BNP Paribas CIB.
- **Langues de travail** : français et anglais courant.
- **Disponibilité** : à préciser avec elle par email.`},en:{standard:`### Location
Anne-Sophie is based in **Paris**. She is looking for a role in Paris or the PACA region (south-east France), **hybrid**.

### Current situation
She has been at **mc2i** since January 2024, currently on assignment at BNP Paribas CIB.

### Contract and availability
She is looking for a **permanent contract (CDI)**. For her start date, the simplest way is to write to her: she will answer directly.`,express:`- **Based in**: Paris. Looking for a role in Paris or the PACA region, hybrid.
- **Contract**: permanent (CDI).
- **Situation**: employed at mc2i, on assignment at BNP Paribas CIB.
- **Working languages**: French and fluent English.
- **Availability**: to be confirmed with her by email.`}},followUps:["search","languages","profile"],actions:["email"]},{id:"contact",question:{fr:"Comment contacter Anne-Sophie ?",en:"How can I contact Anne-Sophie?"},chip:{fr:"La contacter",en:"Contact her"},keywords:[["contact",6],["email",5],["mail",5],["joindre",5],["telephone",5],["phone",5],["linkedin",5],["appeler",5],["call",3],["reach",4],["ecrire",4],["rendez vous",5],["meeting",4],["entretien",4],["interview",4],["rencontrer",5],["meet",4],["numero",4],["coordonnees",6],["get in touch",6]],answer:{fr:{standard:`Anne-Sophie répond volontiers aux prises de contact.

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
- **Full CV**: button below.`}},followUps:["profile","impact","contact"],actions:["cv","email"]},{id:"projects",question:{fr:"Quels sont ses principaux projets ?",en:"What are her main projects?"},chip:{fr:"Ses projets",en:"Her projects"},keywords:[["ses projets",6],["show me her work",7],["projet",3],["project",2],["her projects",5],["all projects",5],["main projects",6],["principaux projets",6],["etude de cas",6],["etudes de cas",6],["case stud",6],["portfolio",5],["realisation",5],["mission",4],["client",4],["travaux",4],["her work",5],["reference",4]],answer:{fr:{standard:`Trois missions en entreprise, puis des projets personnels, à explorer dans la barre latérale ou via les questions ci-dessous.

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
| **BNP Paribas CIB** | Framing an AI-augmented UX team | ==5+ of 17 modules== · ==~1,500 users== |
| **Investment bank** | AI-assisted monitoring of loan clauses | Before / after journey · navigable prototype |
| **GRDF** | Eco-designed redesign of justdecarb.grdf.fr | ==EcoIndex grade C== + RGAA |

### Personal projects
- **Portfolio · AI-automated Design System** (2026): this portfolio's Design System, written as a skill that AI applies.
- **Vitaliz · From personas to the mobile app** (2023, Master's year 2): a full UX study of a connected wristband app, from personas to prototype.
- **Bloom Bar · Art direction and 3D illustration** (2023, Master's year 2): art direction and 3D illustration for a brand of flower bars.
- **McDonald's · Rebranding for a new audience** (2021, Master's year 1): repositioning a well-known brand for a new audience.`,express:`- **BNP Paribas CIB**: AI-augmented UX team — ==5+ of 17 modules==.
- **Loan clauses**: AI-assisted monitoring, before / after journey, navigable prototype.
- **GRDF**: eco-designed redesign — ==EcoIndex grade C== + RGAA.
- **Personal projects**: portfolio Design System, Vitaliz, Bloom Bar, McDonald's.`}},followUps:["bnp","covenant","grdf","vitalize"]},...lf,{id:"greeting",question:{fr:"Bonjour !",en:"Hello!"},keywords:[["bonjour",3],["hello",3],["salut",3],["hi",3],["hey",3],["coucou",3],["bonsoir",3],["good morning",3],["ca va",3],["how are you",3]],answer:{fr:{standard:`Bonjour ! Je suis l'assistant portfolio d'**Anne-Sophie Leroy**, Product Designer spécialisée en UX/UI, Design Ops et workflows IA.

Je peux vous parler de son parcours, de ses projets (BNP Paribas CIB, Kering, GRDF, Caisse des Dépôts), de ses compétences ou de sa façon d'intégrer l'IA dans le design. Par où souhaitez-vous commencer ?`,express:"Bonjour ! Posez-moi une question sur **Anne-Sophie Leroy** : profil, projets, compétences, IA & Design Ops."},en:{standard:`Hello! I'm the portfolio assistant of **Anne-Sophie Leroy**, a Product Designer specialising in UX/UI, Design Ops and AI workflows.

I can tell you about her background, her projects (BNP Paribas CIB, Kering, GRDF, Caisse des Dépôts), her skills or how she brings AI into design. Where would you like to start?`,express:"Hello! Ask me anything about **Anne-Sophie Leroy**: profile, projects, skills, AI & Design Ops."}},followUps:["profile","projects","ai"]},{id:"thanks",question:{fr:"Merci !",en:"Thank you!"},keywords:[["merci",5],["thanks",5],["thank",5],["super",2],["parfait",3],["perfect",3],["great",2],["au revoir",4],["bye",4]],answer:{fr:{standard:"Avec plaisir ! Si le profil d'Anne-Sophie vous intéresse, le plus simple est de lui écrire directement — elle sera ravie d'échanger.",express:"Avec plaisir ! Pour aller plus loin, écrivez directement à Anne-Sophie."},en:{standard:"You're welcome! If Anne-Sophie's profile is a match, the simplest next step is to write to her directly — she will be glad to talk.",express:"You're welcome! To go further, write to Anne-Sophie directly."}},actions:["email","cv"]},{id:"fallback",question:{fr:"",en:""},keywords:[],answer:{fr:{standard:"Je n'ai pas d'information fiable sur ce point, et je préfère ne rien inventer sur Anne-Sophie.\n\n### Ce que je sais faire\n- **Présenter son profil** et ce qui la différencie.\n- **Détailler ses projets** : BNP Paribas CIB, Groupe Kering, GRDF, Caisse des Dépôts, et ses projets personnels.\n- **Expliquer sa pratique** : méthode, collaboration, Design System, *AI Skills*, *vibecoding*.\n- **Répondre aux questions d'entretien** : séniorité, motivations, axes d'amélioration, ce qu'elle recherche.\n- **Répondre aux questions pratiques** : formation, langues, outils, localisation.\n\nAstuce : tapez `/` pour les commandes rapides (`/cv`, `/projets`, `/skills`, `/contact`, `/stack`). Et pour toute question précise, Anne-Sophie vous répondra directement.",express:"Je n'ai pas cette information. Essayez une question sur son **profil**, ses **projets**, ses **compétences** ou l'**IA** — ou contactez-la directement."},en:{standard:"I don't have reliable information on that, and I'd rather not make anything up about Anne-Sophie.\n\n### What I can do\n- **Present her profile** and what sets her apart.\n- **Detail her projects**: BNP Paribas CIB, Kering Group, GRDF, Caisse des Dépôts, and her personal projects.\n- **Explain her practice**: method, collaboration, Design System, *AI Skills*, *vibecoding*.\n- **Answer interview questions**: seniority, motivations, areas for growth, what she is looking for.\n- **Answer practical questions**: education, languages, tools, location.\n\nTip: type `/` for quick commands (`/cv`, `/projects`, `/skills`, `/contact`, `/stack`). And for any specific question, Anne-Sophie will answer you directly.",express:"I don't have that information. Try a question about her **profile**, **projects**, **skills** or **AI** — or contact her directly."}},followUps:["profile","method","projects"],actions:["cv","email"]}],Ml=Object.fromEntries(Td.map(e=>[e.id,e]));function Bt(e){return Ml[e]??Ml.fallback}function Ed(e,t,n){const r=Bt(e).answer[t];return n==="express"?r.express:n==="deepdive"&&r.deep?`${r.standard}

${r.deep}`:r.standard}function uf(e){return e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/\bj['’]ai\b/g," ").replace(/[^a-z0-9€]+/g," ").trim()}function cf(e,t){const n=Array.from({length:e.length+1},(r,s)=>[s,...Array(t.length).fill(0)]);for(let r=1;r<=t.length;r++)n[0][r]=r;for(let r=1;r<=e.length;r++)for(let s=1;s<=t.length;s++)n[r][s]=Math.min(n[r-1][s]+1,n[r][s-1]+1,n[r-1][s-1]+(e[r-1]===t[s-1]?0:1));return n[e.length][t.length]}function df(e,t){return e===t||t.length>=4&&e.startsWith(t)?!0:t.length>=6&&e.length>=6&&Math.abs(e.length-t.length)<=1?cf(e,t)<=1:!1}const pf={"/cv":"cv","/projets":"projects","/projects":"projects","/projet":"projects","/skills":"skills","/competences":"skills","/contact":"contact","/stack":"stack","/designsystem":"portfoliods","/design-system":"portfoliods","/ds":"portfoliods"};function mf(e){const t=e.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").split(/\s+/)[0];return t.startsWith("/")?pf[t]??"fallback":null}const hf=3;function ff(e){const t=mf(e);if(t)return t;const n=uf(e);if(!n)return"fallback";const r=` ${n} `,s=n.split(" ");let a="fallback",o=0;for(const l of Td){let u=0;for(const[d,p]of l.keywords)(d.includes(" ")?r.includes(` ${d}`):s.some(f=>df(f,d)))&&(u+=p);u>o&&(o=u,a=l.id)}return o>=hf?a:"fallback"}function Ld(e){return e.match(/\S+\s*/g)??[]}const Fl={ai:{icon:Is,chip:"bg-[var(--ai-tint)] text-[var(--ai-text)]",dot:"bg-[var(--ai)]"},human:{icon:Ps,chip:"border border-rule text-ink",dot:"bg-ink"},system:{icon:Fh,chip:"bg-surface-2 text-ink",dot:"bg-muted"},offline:{icon:Lh,chip:"border border-line text-muted",dot:"border border-muted"}};function Ud({id:e,lang:t,board:n,cta:r}){const s=ge[t],[a,o]=C.useState(n.defaultView??n.journeys[0].id),l=n.journeys.find(p=>p.id===a)??n.journeys[0],u=p=>{var g;return((g=n.actors)==null?void 0:g[t][p])??s.actors[p]},d=[...new Set(l.stages.flatMap(p=>p.nodes.map(g=>g.actor)))];return i.jsxs("section",{id:e,className:"rise mb-7 scroll-mt-16 overflow-hidden rounded-3xl border border-line bg-elevated",children:[i.jsxs("header",{className:"flex flex-wrap items-center gap-x-4 gap-y-3 border-b border-line px-5 py-4",children:[i.jsxs("div",{className:"w-full min-w-0 sm:w-auto sm:flex-1",children:[i.jsx("p",{className:"eyebrow text-muted",children:n.eyebrow[t]}),i.jsx("h3",{className:"mt-1 font-display text-[1.15rem] font-semibold leading-tight tracking-[-0.02em] text-ink",children:n.title[t]})]}),r&&i.jsxs("button",{onClick:r.onClick,className:"btn-primary !py-2.5",children:[r.label," ",i.jsx(So,{size:14,className:"fill-current","aria-hidden":!0})]})]}),n.journeys.length>1&&i.jsxs("div",{className:"flex flex-wrap items-center gap-3 px-5 pt-4",children:[i.jsx("p",{className:"eyebrow flex-1 text-muted",children:s.detail}),i.jsx("div",{role:"group","aria-label":s.detail,className:"flex rounded-full border border-line p-0.5",children:n.journeys.map(p=>i.jsx("button",{onClick:()=>o(p.id),"aria-pressed":a===p.id,className:`t-all rounded-full px-3.5 py-1 text-xs font-semibold ${a===p.id?"bg-ink text-bg":"text-muted hover:text-ink"}`,children:p.label[t]},p.id))})]}),i.jsx("ol",{className:"rise px-5 py-2",children:l.stages.map((p,g)=>i.jsxs("li",{className:"relative flex gap-4 py-3",children:[g<l.stages.length-1&&i.jsx("span",{className:"absolute bottom-[-12px] left-[15px] top-[44px] w-px bg-line","aria-hidden":!0}),i.jsx("span",{className:`relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${p.step?l.muted?"bg-ink text-bg":"bg-accent text-accent-fg":"border border-rule bg-elevated text-ink"}`,"aria-hidden":!0,children:p.step??(g===0?i.jsx(wa,{size:14}):i.jsx(jt,{size:14}))}),i.jsxs("div",{className:"min-w-0 flex-1",children:[i.jsxs("p",{className:"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold leading-snug text-ink",children:[p.step&&i.jsxs("span",{className:"eyebrow text-accent-text",children:[s.step," ",p.step]}),p.title[t],p.repeat&&i.jsxs("span",{className:"tag border border-rule text-ink",children:[i.jsx(bd,{size:12,"aria-hidden":!0})," ",p.repeat[t]]})]}),i.jsx("ul",{className:"mt-2 flex flex-wrap items-stretch gap-x-1.5 gap-y-2",children:p.nodes.map((f,v)=>{const x=Fl[f.actor],y=x.icon;return i.jsxs("li",{className:"flex items-stretch gap-1.5",children:[v>0&&i.jsx("span",{className:"flex items-center px-1 text-xs italic text-muted","aria-hidden":!p.alternatives,children:p.alternatives?s.or:i.jsx(vr,{size:14})}),i.jsxs("span",{className:"flex max-w-[15rem] flex-col gap-1.5 rounded-2xl border border-line bg-bg px-3 py-2.5",children:[i.jsxs("span",{className:`tag w-fit ${x.chip}`,children:[i.jsx(y,{size:12,"aria-hidden":!0})," ",u(f.actor)]}),i.jsx("span",{className:"text-[12.5px] font-light leading-snug text-ink",children:f.label[t]})]})]},f.label.en)})}),p.frictions&&i.jsx("ul",{className:"mt-2.5 flex flex-wrap gap-1.5","aria-label":s.friction,children:p.frictions.map(f=>i.jsxs("li",{className:"tag bg-[var(--warn-tint)] text-[var(--warn-text)]",children:[i.jsx(kd,{size:12,"aria-hidden":!0})," ",f[t]]},f.en))})]})]},p.title.en))},a),i.jsx("footer",{className:"flex flex-wrap gap-x-5 gap-y-1.5 border-t border-line px-5 py-3",children:d.map(p=>i.jsxs("span",{className:"inline-flex items-center gap-2 text-xs text-muted",children:[i.jsx("span",{className:`h-2 w-2 rounded-full ${Fl[p].dot}`,"aria-hidden":!0})," ",u(p)]},p))})]})}const gf=/(\*\*[^*]+\*\*|==[^=]+==|`[^`]+`|\[[^\]]+\]\([^)\s]+\)|\*[^*\s][^*]*\*)/g;function vf(e){return e.replace(/\*\*|==|`|\*/g,"")}function Lt(e){return e.split(gf).map((t,n)=>{if(!t)return null;if(t.startsWith("**")&&t.endsWith("**")&&t.length>4)return i.jsx("strong",{className:"font-semibold text-ink",children:Lt(t.slice(2,-2))},n);if(t.startsWith("==")&&t.endsWith("==")&&t.length>4)return i.jsx("span",{className:"mx-0.5 inline-block whitespace-nowrap rounded-full bg-olive-tint px-2.5 py-0.5 text-[0.86em] font-semibold text-olive-text",children:t.slice(2,-2)},n);if(t.startsWith("`")&&t.endsWith("`")&&t.length>2)return i.jsx("code",{className:"rounded-md bg-accent-tint px-1.5 py-0.5 font-mono text-[0.85em] text-accent-text",children:t.slice(1,-1)},n);const r=t.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);if(r){const s=r[2].startsWith("http");return i.jsx("a",{href:r[2],...s?{target:"_blank",rel:"noopener noreferrer"}:{},className:"t-all break-words font-medium text-accent-text underline decoration-1 underline-offset-4 hover:decoration-2",children:r[1]},n)}return t.startsWith("*")&&t.endsWith("*")&&t.length>2?i.jsx("em",{children:t.slice(1,-1)},n):i.jsx(C.Fragment,{children:vf(t)},n)})}function xf(e){return e.trim().replace(/^\||\|$/g,"").split("|").map(t=>t.trim())}function Gt({text:e,anchorPrefix:t,embeds:n}){const r=e.split(`
`),s=[];let a=0,o=0,l=0;for(;a<r.length;){const u=r[a];if(!u.trim()){a++;continue}if(u.trimStart().startsWith("[[")){const v=u.trim().match(/^\[\[([a-z0-9-]+)\]\]$/);v&&(n!=null&&n[v[1]])&&s.push(i.jsx(C.Fragment,{children:n[v[1]]},o++)),a++;continue}if(u.startsWith("```")){const v=[];for(a++;a<r.length&&!r[a].startsWith("```");)v.push(r[a++]);a++,s.push(i.jsx("pre",{className:"my-4 overflow-x-auto rounded-2xl bg-code-bg px-4 py-3.5 font-mono text-[12.5px] leading-relaxed text-code-ink",children:v.join(`
`)},o++));continue}if(u.trimStart().startsWith("|")){const v=[];for(;a<r.length&&r[a].trimStart().startsWith("|");)/^\s*\|[\s|:-]+\|?\s*$/.test(r[a])||v.push(xf(r[a])),a++;if(v.length===0)continue;const[x,...y]=v;s.push(i.jsx("div",{className:"my-4 overflow-x-auto rounded-2xl border border-line bg-elevated",children:i.jsxs("table",{className:"w-full min-w-[420px] border-collapse text-left text-sm",children:[i.jsx("thead",{children:i.jsx("tr",{className:"border-b border-rule",children:x.map((k,m)=>i.jsx("th",{className:"eyebrow px-4 py-3 font-semibold text-ink",children:Lt(k)},m))})}),i.jsx("tbody",{children:y.map((k,m)=>i.jsx("tr",{className:"border-t border-line align-top first:border-t-0",children:k.map((c,h)=>i.jsx("td",{className:"px-4 py-2.5 leading-relaxed",children:Lt(c)},h))},m))})]})},o++));continue}const d=u.match(/^(#{1,4})\s+(.*)$/);if(d){s.push(i.jsx("h3",{id:t?`${t}-s${l++}`:void 0,className:"scroll-mt-16 mb-2 mt-7 font-display text-[1.2rem] font-semibold leading-tight tracking-[-0.02em] text-ink first:mt-0",children:Lt(d[2])},o++)),a++;continue}const p=v=>/^\s*[-•]\s+/.test(v),g=v=>/^\s*\d+\.\s+/.test(v);if(p(u)||g(u)){const v=g(u),x=v?g:p,y=[];for(;a<r.length&&x(r[a]);)y.push(r[a].replace(/^\s*(?:[-•]|\d+\.)\s+/,"")),a++;s.push(v?i.jsx("ol",{className:"my-3 space-y-2",children:y.map((k,m)=>i.jsxs("li",{className:"flex gap-3 leading-relaxed",children:[i.jsxs("span",{className:"w-6 shrink-0 font-display text-[0.85rem] font-medium italic leading-[1.9] text-accent-text",children:["0",m+1]}),i.jsx("span",{className:"min-w-0",children:Lt(k)})]},m))},o++):i.jsx("ul",{className:"my-3 space-y-2",children:y.map((k,m)=>i.jsxs("li",{className:"flex gap-3 leading-relaxed",children:[i.jsx("span",{className:"mt-[0.62em] h-1.5 w-1.5 shrink-0 rounded-full bg-vermillion","aria-hidden":!0}),i.jsx("span",{className:"min-w-0",children:Lt(k)})]},m))},o++));continue}const f=[];for(;a<r.length&&r[a].trim()&&!r[a].startsWith("```")&&!r[a].trimStart().startsWith("[[")&&!r[a].trimStart().startsWith("|")&&!/^#{1,4}\s/.test(r[a])&&!p(r[a])&&!g(r[a]);)f.push(r[a++]);s.push(i.jsx("p",{className:"my-3 leading-relaxed first:mt-0 last:mb-0",children:Lt(f.join(" "))},o++))}return i.jsx("div",{className:"text-[15px] font-normal text-ink",children:s})}function Jn({size:e=40}){return i.jsx("span",{className:"monogram",style:{width:e,height:e,fontSize:Math.max(9,e*.25)},"aria-hidden":!0,children:"ASL"})}const yf={fr:{kicker:"Dépôt UX · Design",title:"Le fichier d’entrée de toutes les règles IA",goal:"Objectif : que l’IA sache où chercher, sans charger tout le dépôt.",parts:[{title:"Rôle & mission de l’IA",detail:"Rôle, missions, posture"},{title:"Normes & formats de fichiers",detail:"Guidelines de composants, tokens, branches"},{title:"Directives UX & Design System",detail:"Accessibilité, UX writing, gestion des états"},{title:"Directives Git & workflow",detail:"Convention de commit, demande d’intégration"},{title:"Cartographie du dépôt",detail:"Où se trouve chaque type de contenu"}]},en:{kicker:"UX · Design repository",title:"The entry file for all AI rules",goal:"Goal: the AI knows where to look, without loading the whole repository.",parts:[{title:"AI role & mission",detail:"Role, missions, posture"},{title:"File standards & formats",detail:"Component guidelines, tokens, branches"},{title:"UX & Design System directives",detail:"Accessibility, UX writing, state handling"},{title:"Git & workflow directives",detail:"Commit convention, pull request"},{title:"Repository map",detail:"Where each type of content lives"}]}},bf=[{group:{fr:"Design System",en:"Design System"},items:["template_guidelines.md","tokens.md"]},{group:{fr:"Composants",en:"Components"},items:["styles_hybride.md","component_guidelines.md"]},{group:{fr:"Utilisateurs & règles",en:"Users & rules"},items:["personas/","business-rules/"]},{group:{fr:"Livrables UX",en:"UX deliverables"},items:["sitemap/","user-flows/","journeys/","ux-specs/"]},{group:{fr:"Références",en:"Reference"},items:["benchmark/","decisions/","context/"]}],wf={fr:{tree:"Arborescence par usage",auto:"Automatisation",autoDetail:"Synchronisation des tokens, demandes d’intégration préparées pour les développeurs",dev:"Dépôt technique · Devs",devDetail:"Consomme ce que le dépôt UX produit",preview:"Lien de prévisualisation",previewDetail:"Chaque demande d’intégration génère une adresse où voir le prototype"},en:{tree:"A tree organised by use",auto:"Automation",autoDetail:"Token sync, pull requests prepared for developers",dev:"Technical repository · Devs",devDetail:"Consumes what the UX repository produces",preview:"Preview link",previewDetail:"Every pull request generates an address where the prototype can be seen"}};function kf({name:e}){const n=e.endsWith(".md")?Sr:Xs;return i.jsxs("li",{className:"inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-2.5 py-1 font-mono text-[11px] text-ink",children:[i.jsx(n,{size:11,className:"shrink-0 text-muted","aria-hidden":!0})," ",e]})}function jf({lang:e}){const t=yf[e],n=wf[e];return i.jsxs("figure",{className:"my-5 overflow-hidden rounded-3xl border border-line bg-elevated",children:[i.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2",children:[i.jsxs("div",{className:"border-b border-line p-5 sm:border-b-0 sm:border-r",children:[i.jsx("p",{className:"eyebrow text-muted",children:t.kicker}),i.jsxs("p",{className:"mt-2 inline-flex items-center gap-2 font-mono text-sm font-semibold text-accent-text",children:[i.jsx(Sr,{size:14,"aria-hidden":!0})," CLAUDE.md"]}),i.jsx("p",{className:"mt-1 text-[13px] font-medium leading-snug text-ink",children:t.title}),i.jsx("ol",{className:"mt-4 space-y-2.5",children:t.parts.map((r,s)=>i.jsxs("li",{className:"flex gap-2.5",children:[i.jsx("span",{className:"font-display text-[12px] font-medium italic leading-[1.5] text-accent-text",children:String(s+1).padStart(2,"0")}),i.jsxs("span",{className:"min-w-0",children:[i.jsx("span",{className:"block text-[13px] font-semibold leading-snug text-ink",children:r.title}),i.jsx("span",{className:"block text-[12px] font-light leading-snug text-muted",children:r.detail})]})]},r.title))}),i.jsx("p",{className:"mt-4 border-t border-line pt-3 text-[12px] font-medium leading-snug text-olive-text",children:t.goal})]}),i.jsxs("div",{className:"p-5",children:[i.jsx("p",{className:"eyebrow text-muted",children:n.tree}),i.jsx("ul",{className:"mt-3 space-y-3",children:bf.map(r=>i.jsxs("li",{children:[i.jsx("p",{className:"mb-1.5 text-[12px] font-semibold text-ink",children:r.group[e]}),i.jsx("ul",{className:"flex flex-wrap gap-1.5",children:r.items.map(s=>i.jsx(kf,{name:s},s))})]},r.group.en))})]})]}),i.jsxs("div",{className:"flex flex-col items-stretch gap-2 border-t border-line p-5 sm:flex-row sm:items-center",children:[i.jsxs("div",{className:"flex flex-1 items-start gap-2.5 rounded-2xl border border-line bg-bg p-3",children:[i.jsx(Rh,{size:14,className:"mt-0.5 shrink-0 text-olive-text","aria-hidden":!0}),i.jsxs("p",{className:"min-w-0 text-[12px] leading-snug",children:[i.jsx("span",{className:"block font-semibold text-ink",children:n.auto}),i.jsx("span",{className:"font-light text-muted",children:n.autoDetail})]})]}),i.jsxs("span",{className:"flex justify-center text-muted","aria-hidden":!0,children:[i.jsx(vr,{size:16,className:"hidden sm:block"}),i.jsx(wa,{size:16,className:"sm:hidden"})]}),i.jsxs("div",{className:"flex flex-1 items-start gap-2.5 rounded-2xl border border-line bg-bg p-3",children:[i.jsx(Xs,{size:14,className:"mt-0.5 shrink-0 text-muted","aria-hidden":!0}),i.jsxs("p",{className:"min-w-0 text-[12px] leading-snug",children:[i.jsx("span",{className:"block font-semibold text-ink",children:n.dev}),i.jsx("span",{className:"font-light text-muted",children:n.devDetail})]})]}),i.jsxs("span",{className:"flex justify-center text-muted","aria-hidden":!0,children:[i.jsx(vr,{size:16,className:"hidden sm:block"}),i.jsx(wa,{size:16,className:"sm:hidden"})]}),i.jsxs("div",{className:"flex flex-1 items-start gap-2.5 rounded-2xl border border-line bg-bg p-3",children:[i.jsx(qh,{size:14,className:"mt-0.5 shrink-0 text-muted","aria-hidden":!0}),i.jsxs("p",{className:"min-w-0 text-[12px] leading-snug",children:[i.jsx("span",{className:"block font-semibold text-ink",children:n.preview}),i.jsx("span",{className:"font-light text-muted",children:n.previewDetail})]})]})]})]})}const zd="Lz1R1WzSOZS9votvKTaiTS/Master",Rd="node-id=1192-8054&page-id=603%3A528&starting-point-node-id=1192%3A8054",Sf=`https://embed.figma.com/proto/${zd}?${Rd}&scaling=scale-down-width&content-scaling=fixed&embed-host=portfolio-asl&footer=false&viewport-controls=false&device-frame=false`,Cf=`https://www.figma.com/proto/${zd}?${Rd}&scaling=scale-down&content-scaling=fixed`,Ao={fr:{protoEyebrow:"Prototype · application mobile",ctaTitle:"Essayez l’application",ctaText:"Le prototype est navigable ici : touchez les boutons comme sur un téléphone. Le chargement peut prendre quelques secondes.",openFigma:"Ouvrir dans Figma",viewerTitle:"Vitaliz — prototype mobile",problem:"Problème",answer:"Réponse",persona:"Le persona du cœur de cible : Théodore, ses motivations, ses freins, ses habitudes d’achat",map:"Carte d’expérience de Théodore : pensées, actions, points de friction, émotions, opportunités",brand:"La charte graphique : logo, zones de protection, couleurs, interdits, typographie",shop:"Support promotionnel : la marque en vitrine"},en:{protoEyebrow:"Prototype · mobile app",ctaTitle:"Try the app",ctaText:"The prototype is navigable here: tap the buttons as you would on a phone. Loading can take a few seconds.",openFigma:"Open in Figma",viewerTitle:"Vitaliz — mobile prototype",problem:"Problem",answer:"Answer",persona:"The core-target persona: Théodore, his motivations, barriers and buying habits",map:"Théodore’s experience map: thoughts, actions, pain points, emotions, opportunities",brand:"The brand guidelines: logo, clear space, colours, don’ts, typography",shop:"Promotional material: the brand in a shop window"}},ke=(e,t)=>({fr:e,en:t}),Af=[{problem:ke("Sport, sommeil, alimentation, santé : chacun arrive avec un objectif différent. Un suivi identique pour tous ne parle à personne.","Sport, sleep, nutrition, health: everyone arrives with a different goal. The same tracking for all speaks to no one."),answer:ke("Dès l’ouverture, on choisit un programme du catalogue ou l’on compose le sien, catégorie par catégorie. Le profil ajuste ensuite les repères.","From the first screen, you pick a programme from the catalogue or build your own, category by category. The profile then adjusts the targets."),screens:[{file:"ecran-choix",caption:ke("Choisir ou créer son programme","Pick or create a programme")},{file:"ecran-categories",caption:ke("Quatre catégories à régler","Four categories to set")},{file:"ecran-profil",caption:ke("Le profil et le mode de vie","Profile and lifestyle")}]},{problem:ke("Le cœur de cible veut des données poussées et fiables. Mais un écran saturé de chiffres décourage au lieu d’aider.","The core target wants detailed, reliable data. But a screen crammed with figures discourages instead of helping."),answer:ke("L’accueil n’affiche que les informations favorites : chacun en choisit jusqu’à six, parmi le sommeil, la santé et l’alimentation. Le détail reste à un geste.","The home screen only shows favourite information: each person picks up to six, across sleep, health and nutrition. Detail stays one tap away."),screens:[{file:"ecran-accueil",caption:ke("L’accueil et ses informations favorites","Home and its favourite information")},{file:"ecran-favoris",caption:ke("Le choix des informations, jusqu’à six","Choosing the information, up to six")},{file:"ecran-sommeil",caption:ke("Le détail, ici le sommeil","The detail, here sleep")}]},{problem:ke("Le risque d’un bracelet connecté : porté quelques semaines, puis oublié. Suivre ses chiffres ne suffit pas à revenir.","The risk with a connected wristband: worn for a few weeks, then forgotten. Tracking figures is not enough to come back."),answer:ke("Le programme avance jour après jour, et l’application propose des challenges chaque semaine. Un classement entre amis donne une raison de revenir : pour les autres autant que pour soi.","The programme moves forward day by day, and the app suggests challenges every week. A ranking among friends gives a reason to come back: for the others as much as for yourself."),screens:[{file:"ecran-classement",caption:ke("Les challenges de la semaine et le classement entre amis","The weekly challenges and the ranking among friends")}]}],Nf={fr:[{value:"+5 / 17",label:"modules optimisés par l’IA"},{value:"~1 500",label:"utilisateurs concernés"},{value:"1 an",label:"de delivery en banque régulée"}],en:[{value:"+5 / 17",label:"modules optimised with AI"},{value:"~1,500",label:"users reached"},{value:"1 year",label:"of delivery in regulated banking"}]};function Md({lang:e}){return i.jsx("ul",{className:"my-4 grid grid-cols-3 gap-2 sm:gap-3",children:Nf[e].map(t=>i.jsxs("li",{className:"rounded-2xl border border-line bg-elevated p-3 sm:p-4",children:[i.jsx("span",{className:"block font-display text-[1.35rem] font-semibold leading-none tracking-[-0.03em] text-ink sm:text-[1.7rem]",children:t.value}),i.jsx("span",{className:"mt-1.5 block text-[11.5px] font-light leading-snug text-muted sm:text-xs",children:t.label})]},t.label))})}const If={fr:[{title:"Source de vérité",text:"Réutiliser avant d’inventer. Diverger est une décision discutée."},{title:"Double bibliothèque en miroir",text:"Le composant de référence et sa copie lisible par l’IA."},{title:"Aucune valeur inventée",text:"Dimensions, couleurs et comportements viennent des sources réelles."},{title:"Boucle courte et revue",text:"De petits changements, revus à l’œil, sur une branche."}],en:[{title:"Source of truth",text:"Reuse before inventing. Diverging is a discussed decision."},{title:"Mirrored double library",text:"The reference component and its AI-readable copy."},{title:"No invented value",text:"Dimensions, colours and behaviours come from the real sources."},{title:"Short loop and review",text:"Small changes, reviewed by eye, on a branch."}]};function Fd({lang:e}){return i.jsx("ol",{className:"my-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3",children:If[e].map((t,n)=>i.jsxs("li",{className:"flex gap-3 rounded-2xl border border-line bg-elevated p-4",children:[i.jsx("span",{className:"flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-fg",children:n+1}),i.jsxs("span",{className:"min-w-0",children:[i.jsx("span",{className:"block text-[13.5px] font-semibold leading-snug text-ink",children:t.title}),i.jsx("span",{className:"mt-1 block text-[12.5px] font-light leading-snug text-muted",children:t.text})]})]},t.title))})}const Pf={fr:[{role:"Lead Design",ai:"Cadre, standards, revues",human:"Pilote l’intention, arbitre"},{role:"UX UI Designer",ai:"Wireframes, parcours, prototypes",human:"Juge les générations"},{role:"Dev Front",ai:"Intégration, Design System",human:"Implémente"},{role:"Product Owner",ai:"Specs, priorisation",human:"Teste sur des prototypes autonomes"}],en:[{role:"Lead Design",ai:"Framework, standards, reviews",human:"Steers the intention, arbitrates"},{role:"UX UI Designer",ai:"Wireframes, flows, prototypes",human:"Judges the generations"},{role:"Front Dev",ai:"Integration, Design System",human:"Implements"},{role:"Product Owner",ai:"Specs, prioritisation",human:"Tests on standalone prototypes"}]},Df=[_h,Uh,Ph,Ih];function qf({lang:e}){return i.jsx("ul",{className:"my-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3",children:Pf[e].map((t,n)=>{const r=Df[n];return i.jsxs("li",{className:"rounded-2xl border border-line bg-elevated p-4",children:[i.jsxs("span",{className:"flex items-center gap-2 text-[13.5px] font-semibold text-ink",children:[i.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full bg-accent-tint text-accent-text",children:i.jsx(r,{size:14,"aria-hidden":!0})}),t.role]}),i.jsxs("span",{className:"mt-3 flex items-start gap-2 text-[12.5px] leading-snug text-ink",children:[i.jsxs("span",{className:"tag shrink-0 bg-[var(--ai-tint)] text-[var(--ai-text)]",children:[i.jsx(Is,{size:12,"aria-hidden":!0})," Claude"]}),i.jsx("span",{className:"font-light",children:t.ai})]}),i.jsx("span",{className:"mt-1.5 block text-[12.5px] font-medium leading-snug text-ink",children:t.human})]},t.role)})})}const Tf={fr:{handoff:"Passer le relais sans perte",chips:["Fichier d’état tenu à jour","Prompt de reprise prêt à coller","Mémoire dans des fichiers"],onboarding:"Onboarding par un seul prompt",steps:["Contexte","Outils","Accès","Dépôts","Arborescence","Opérationnel"],note:"Opérationnel en quelques heures, en autonomie."},en:{handoff:"Handoffs without loss",chips:["Status file kept up to date","Ready-to-paste kickoff prompt","Memory kept in files"],onboarding:"Onboarding from a single prompt",steps:["Context","Tools","Access","Repositories","Tree","Operational"],note:"Operational within a few hours, autonomously."}};function Ef({lang:e}){const t=Tf[e];return i.jsxs("div",{className:"my-4 rounded-2xl border border-line bg-elevated p-4",children:[i.jsx("p",{className:"eyebrow text-muted",children:t.handoff}),i.jsx("ul",{className:"mt-2.5 flex flex-wrap gap-1.5",children:t.chips.map(n=>i.jsx("li",{className:"tag bg-olive-tint text-olive-text",children:n},n))}),i.jsx("p",{className:"eyebrow mt-5 text-muted",children:t.onboarding}),i.jsx("ol",{className:"mt-2.5 flex flex-wrap items-center gap-x-1.5 gap-y-2",children:t.steps.map((n,r)=>{const s=r===t.steps.length-1;return i.jsxs("li",{className:"flex items-center gap-1.5",children:[i.jsxs("span",{className:`inline-flex items-center gap-1.5 rounded-full py-1 pl-1 pr-2.5 text-[12px] font-medium ${s?"bg-accent text-accent-fg":"border border-line bg-bg text-ink"}`,children:[i.jsx("span",{className:`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold ${s?"bg-accent-fg text-accent":"bg-accent-tint text-accent-text"}`,children:r+1}),n]}),!s&&i.jsx(vr,{size:12,className:"text-muted","aria-hidden":!0})]},n)})}),i.jsx("p",{className:"mt-2.5 text-[12px] font-light text-muted",children:t.note})]})}const Lf={fr:{caption:"Même demande, sur un projet vide : une page complète de portfolio conversationnel",criterion:"Critère",without:"Sans le skill",withSkill:"Avec le skill",yes:"Respecté",no:"Non respecté",rows:[["Icône à droite du libellé dans chaque bouton",!1,!0],["Carte de suggestion à structure fixe",!1,!0],["Contact par email en bouton plein, CV en contour",!1,!0],["Chiffres clés en couleur neutre",!1,!0],["Aucun texte tout en majuscules",!0,!0],["Menu mobile en tiroir partiel",!0,!0],["Aucune couleur en dur, aucune ombre non prévue",!0,!0]],note:"Un essai par version. Sur le projet complet, le skill ne change rien : l’agent déduit les règles du code existant. Il sert donc là où le code ne montre pas encore l’exemple."},en:{caption:"Same request, on an empty project: a full conversational portfolio page",criterion:"Criterion",without:"Without the skill",withSkill:"With the skill",yes:"Met",no:"Not met",rows:[["Icon to the right of the label in every button",!1,!0],["Suggestion card with a fixed structure",!1,!0],["Email contact as filled button, CV outlined",!1,!0],["Key figures in neutral colour",!1,!0],["No all-caps text",!0,!0],["Mobile menu as a partial drawer",!0,!0],["No hard-coded colour, no unplanned shadow",!0,!0]],note:"One run per version. On the full project the skill changes nothing: the agent infers the rules from the existing code. So it is useful where the code does not yet show the example."}};function Bl({ok:e,label:t}){return i.jsx("span",{role:"img","aria-label":t,className:`inline-flex h-5 w-5 items-center justify-center rounded-full ${e?"bg-olive-tint text-olive-text":"bg-[var(--warn-tint)] text-[var(--warn-text)]"}`,children:e?i.jsx(jt,{size:11,strokeWidth:3,"aria-hidden":!0}):i.jsx(et,{size:11,strokeWidth:3,"aria-hidden":!0})})}function Uf({lang:e}){const t=Lf[e],n=r=>`${t.rows.filter(s=>s[r]).length} / ${t.rows.length}`;return i.jsxs("figure",{className:"my-4 overflow-hidden rounded-2xl border border-line bg-elevated",children:[i.jsx("figcaption",{className:"eyebrow border-b border-line px-4 py-2.5 text-muted",children:t.caption}),i.jsxs("table",{className:"w-full border-collapse text-left",children:[i.jsx("thead",{children:i.jsxs("tr",{className:"border-b border-line",children:[i.jsx("th",{className:"eyebrow px-4 py-2.5 font-semibold text-ink",children:t.criterion}),i.jsx("th",{className:"eyebrow w-[4.5rem] px-2 py-2.5 text-center font-semibold text-ink sm:w-28",children:t.without}),i.jsx("th",{className:"eyebrow w-[4.5rem] px-2 py-2.5 text-center font-semibold text-ink sm:w-28",children:t.withSkill})]})}),i.jsxs("tbody",{children:[t.rows.map(([r,s,a])=>i.jsxs("tr",{className:"border-b border-line",children:[i.jsx("td",{className:"px-4 py-2 text-[12.5px] font-light leading-snug text-ink",children:r}),i.jsx("td",{className:"px-2 py-2 text-center",children:i.jsx(Bl,{ok:s,label:s?t.yes:t.no})}),i.jsx("td",{className:"px-2 py-2 text-center",children:i.jsx(Bl,{ok:a,label:a?t.yes:t.no})})]},r)),i.jsxs("tr",{children:[i.jsx("td",{className:"px-4 py-2.5"}),i.jsx("td",{className:"px-2 py-2.5 text-center font-display text-[1.05rem] font-semibold text-ink",children:n(1)}),i.jsx("td",{className:"px-2 py-2.5 text-center font-display text-[1.05rem] font-semibold text-ink",children:n(2)})]})]})]}),i.jsx("p",{className:"border-t border-line px-4 py-2.5 text-[12px] font-light leading-snug text-muted",children:t.note})]})}const zf={fr:{seen:"Ce qu’elle a vu",fixed:"La règle corrigée",items:[{seen:"Des chiffres clés qui se chevauchent et un trait qui ne sépare rien.",fixed:"Des consignes de mise en page : une grille, un trait seulement entre deux contenus."},{seen:"Deux boutons de même poids côte à côte, la couleur d’action au mauvais endroit.",fixed:"Une hiérarchie des actions : un bouton plein vert, l’autre en contour."},{seen:"Un menu sans bouton pour le replier, la langue écrite en toutes lettres.",fixed:"L’anatomie complète du menu et les deux versions du sélecteur."}]},en:{seen:"What she saw",fixed:"The rule she fixed",items:[{seen:"Key figures overlapping and a line that separated nothing.",fixed:"Layout guidance: a grid, and a line only between two contents."},{seen:"Two buttons of equal weight side by side, the action colour in the wrong place.",fixed:"An action hierarchy: one filled green button, the other outlined."},{seen:"A menu with no button to collapse it, the language written out in full.",fixed:"The full anatomy of the menu and both versions of the control."}]}};function Rf({lang:e}){const t=zf[e];return i.jsx("ol",{className:"my-4 space-y-2",children:t.items.map((n,r)=>i.jsxs("li",{className:"flex gap-3 rounded-2xl border border-line bg-elevated p-4",children:[i.jsx("span",{className:"flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-fg",children:r+1}),i.jsxs("span",{className:"grid min-w-0 flex-1 grid-cols-1 gap-x-5 gap-y-2 sm:grid-cols-2",children:[i.jsxs("span",{className:"min-w-0",children:[i.jsx("span",{className:"eyebrow block text-muted",children:t.seen}),i.jsx("span",{className:"mt-0.5 block text-[12.5px] font-light leading-snug text-ink",children:n.seen})]}),i.jsxs("span",{className:"min-w-0",children:[i.jsx("span",{className:"eyebrow block text-muted",children:t.fixed}),i.jsx("span",{className:"mt-0.5 block text-[12.5px] font-medium leading-snug text-ink",children:n.fixed})]})]})]},n.seen))})}const Ds=e=>`./grdf/${e}.jpg`,Mf={fr:{before:"Avant",after:"Après",slider:"Déplacer la séparation entre avant et après",caption:"La page d’accueil sur ordinateur : Act4Gaz, puis justdecarb.grdf.fr. Faites glisser la séparation."},en:{before:"Before",after:"After",slider:"Move the divider between before and after",caption:"The home page on desktop: Act4Gaz, then justdecarb.grdf.fr. Drag the divider."}};function Bd({lang:e}){const t=Mf[e],[n,r]=C.useState(50);return i.jsxs("figure",{className:"my-4",children:[i.jsxs("div",{className:"relative aspect-[16/10] select-none overflow-hidden rounded-2xl border border-line bg-elevated",children:[i.jsx("img",{src:Ds("apres-accueil"),alt:t.after,className:"absolute inset-0 h-full w-full object-cover object-top"}),i.jsx("div",{className:"absolute inset-0",style:{clipPath:`inset(0 ${100-n}% 0 0)`},children:i.jsx("img",{src:Ds("avant-accueil"),alt:t.before,className:"absolute inset-0 h-full w-full object-cover object-top"})}),i.jsx("span",{className:"tag absolute left-3 top-3 bg-ink text-bg",children:t.before}),i.jsx("span",{className:"tag absolute right-3 top-3 bg-ink text-bg",children:t.after}),i.jsx("div",{className:"pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-ink",style:{left:`${n}%`},children:i.jsx("span",{className:"absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-bg",children:i.jsx(Nh,{size:16,"aria-hidden":!0})})}),i.jsx("input",{type:"range",min:0,max:100,value:n,onChange:s=>r(Number(s.target.value)),"aria-label":t.slider,className:"absolute inset-0 h-full w-full cursor-ew-resize opacity-0"})]}),i.jsx("figcaption",{className:"mt-2 text-[12.5px] font-light leading-snug text-muted",children:t.caption})]})}const Ff={persona:[{file:"persona",caption:{fr:"Le persona : Julien, ses besoins, ce qu’il aime, ses frustrations",en:"The persona: Julien, his needs, likes and frustrations"}}],map:[{file:"parcours",caption:{fr:"Carte d’expérience sur l’ancienne plateforme : actions, réflexions, émotions",en:"Experience map on the old platform: actions, thoughts, emotions"}}],moodboard:[{file:"moodboard",caption:{fr:"Moodboard de la nouvelle identité",en:"Moodboard for the new identity"}}],screens:[{file:"apres-accueil",caption:{fr:"La une : un contenu à la fois, puis les chiffres clés",en:"Front page: one piece of content at a time, then the key figures"}},{file:"apres-contenus",caption:{fr:"Les contenus : une thématique, puis un filtre par format",en:"Content: a topic, then a filter by format"}}]};function $r({lang:e,set:t}){const n=Ff[t],r=n.length===1;return i.jsx("ul",{className:`my-4 grid grid-cols-1 gap-3 ${r?"":"sm:grid-cols-2"} ${t==="persona"?"max-w-[420px]":""}`,children:n.map(s=>i.jsx("li",{className:"flex",children:i.jsxs("a",{href:Ds(s.file),target:"_blank",rel:"noopener noreferrer",className:"t-all flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-elevated hover:border-rule",children:[i.jsx("img",{src:Ds(s.file),alt:s.caption[e],loading:"lazy",className:r?"block h-auto w-full":"block aspect-[16/10] w-full object-cover object-top"}),i.jsx("span",{className:"block flex-1 border-t border-line px-4 py-2.5 text-[12.5px] font-light leading-snug text-muted",children:s.caption[e]})]})},s.file))})}function Od({id:e,eyebrow:t,title:n,text:r,embed:s,frameTitle:a,links:o,tall:l}){return i.jsx("section",{id:e,className:"mt-6 scroll-mt-16 rounded-3xl border border-line bg-elevated p-5",children:i.jsxs("div",{className:"grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto]",children:[i.jsxs("div",{className:"min-w-0",children:[i.jsx("p",{className:"eyebrow text-muted",children:t}),i.jsx("h3",{className:"mt-1 font-display text-[1.2rem] font-semibold leading-tight tracking-[-0.02em] text-ink",children:n}),i.jsx("p",{className:"mt-2 text-[13.5px] font-light leading-relaxed text-muted",children:r}),i.jsx("div",{className:"mt-4 flex flex-wrap gap-3",children:o.map((u,d)=>i.jsxs("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:d===0?"btn-primary":"btn-secondary",children:[u.label," ",i.jsx(xr,{size:15,"aria-hidden":!0})]},u.href))})]}),i.jsx("div",{className:`relative mx-auto w-[300px] max-w-full overflow-hidden rounded-xl border border-rule bg-white ${l?"aspect-[375/812]":"aspect-[375/700]"}`,children:i.jsx("iframe",{src:s,title:a,loading:"eager",allowFullScreen:!0,className:"absolute inset-x-0 -top-10 block h-[calc(100%+5rem)] w-full border-0"})})]})})}function Bf({id:e,lang:t}){const n=qd[t];return i.jsx(Od,{id:e,eyebrow:n.protoEyebrow,title:n.ctaTitle,text:n.ctaText,embed:rf,frameTitle:n.viewerTitle,links:[{label:n.site,href:af},{label:n.openFigma,href:sf}]})}const Of={persona:"persona",map:"parcours",brand:"charte",shop:"vitrine"};function Wr({lang:e,shot:t}){const n=Ao[e][t],r=`./vitalize/${Of[t]}.jpg`;return i.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"t-all my-4 block overflow-hidden rounded-2xl border border-line bg-elevated hover:border-rule",children:[i.jsx("img",{src:r,alt:n,loading:"lazy",className:"block h-auto w-full"}),i.jsx("span",{className:"block border-t border-line px-4 py-2.5 text-[12.5px] font-light leading-snug text-muted",children:n})]})}function Si({lang:e,n:t}){const n=Af[t],r=Ao[e];return i.jsxs("section",{className:"my-4 overflow-hidden rounded-2xl border border-line bg-elevated",children:[i.jsxs("div",{className:"grid grid-cols-1 gap-x-6 gap-y-4 p-5 sm:grid-cols-2",children:[i.jsxs("div",{className:"min-w-0",children:[i.jsx("span",{className:"tag border border-rule text-ink",children:r.problem}),i.jsx("p",{className:"mt-2 text-[13.5px] font-light leading-relaxed text-ink",children:n.problem[e]})]}),i.jsxs("div",{className:"min-w-0",children:[i.jsx("span",{className:"tag bg-olive-tint text-olive-text",children:r.answer}),i.jsx("p",{className:"mt-2 text-[13.5px] leading-relaxed text-ink",children:n.answer[e]})]})]}),i.jsx("ul",{className:"flex justify-center gap-4 border-t border-line bg-surface-2 p-5",children:n.screens.map(s=>i.jsxs("li",{className:"min-w-0 max-w-[180px] flex-1",children:[i.jsx("img",{src:`./vitalize/${s.file}.jpg`,alt:s.caption[e],loading:"lazy",className:"block h-auto w-full rounded-xl border border-rule"}),i.jsx("span",{className:"mt-2 block text-center text-[12.5px] font-light leading-snug text-muted",children:s.caption[e]})]},s.file))})]})}function _f({id:e,lang:t}){const n=Ao[t];return i.jsx(Od,{id:e,eyebrow:n.protoEyebrow,title:n.ctaTitle,text:n.ctaText,embed:Sf,tall:!0,frameTitle:n.viewerTitle,links:[{label:n.openFigma,href:Cf}]})}const _d=e=>`./rebrand/${e}.jpg`,Vd={fr:{logo:"Le nouveau logo",hero:"Haut de la page d’accueil : le montage photo",desktop:"La page d’accueil sur ordinateur",mobile:"Sur mobile",scroll:"Maquette à faire défiler"},en:{logo:"The new logo",hero:"Top of the home page: the photo composite",desktop:"The home page on desktop",mobile:"On mobile",scroll:"Scrollable mockup"}};function Ol({lang:e,shot:t}){const n=Vd[e][t];return i.jsxs("figure",{className:`my-4 overflow-hidden rounded-2xl border border-line bg-elevated ${t==="logo"?"max-w-[420px]":""}`,children:[i.jsx("img",{src:_d(t),alt:n,loading:"lazy",className:"block h-auto w-full"}),i.jsx("figcaption",{className:"border-t border-line px-4 py-2.5 text-[12.5px] font-light leading-snug text-muted",children:n})]})}function qs({file:e,caption:t,label:n,phone:r,src:s}){return i.jsxs("figure",{className:r?"mx-auto w-[230px] max-w-full":"min-w-0",children:[i.jsx("div",{tabIndex:0,role:"region","aria-label":`${n} — ${t}`,className:`h-[460px] overflow-y-auto border bg-elevated ${r?"rounded-xl border-rule":"rounded-2xl border-line"}`,children:i.jsx("img",{src:s??_d(e),alt:t,loading:"lazy",className:"block h-auto w-full"})}),i.jsx("figcaption",{className:"mt-2 text-[12.5px] font-light leading-snug text-muted",children:t})]})}function Vf({lang:e}){const t=Vd[e];return i.jsxs("div",{className:"my-4 grid grid-cols-1 items-start gap-4 md:grid-cols-[1fr_230px]",children:[i.jsx(qs,{file:"desktop",caption:t.desktop,label:t.scroll}),i.jsx(qs,{file:"mobile",caption:t.mobile,label:t.scroll,phone:!0})]})}const Sa=e=>`./bloombar/${e}.jpg`,$d={fr:{hero:"Le haut de la page d’accueil : les fleurs en relief",box:"Le packaging et le coffret à composer",wireframe:"Le wireframe de départ",page:"La même page, avec la direction artistique",scroll:"Maquette à faire défiler"},en:{hero:"Top of the home page: the flowers in relief",box:"The packaging and the box to build",wireframe:"The starting wireframe",page:"The same page, with the art direction",scroll:"Scrollable mockup"}};function _l({lang:e,shot:t}){const n=$d[e][t];return i.jsxs("figure",{className:"my-4 overflow-hidden rounded-2xl border border-line bg-elevated",children:[i.jsx("img",{src:Sa(t),alt:n,loading:"lazy",className:"block h-auto w-full"}),i.jsx("figcaption",{className:"border-t border-line px-4 py-2.5 text-[12.5px] font-light leading-snug text-muted",children:n})]})}function $f({lang:e}){const t=$d[e];return i.jsxs("div",{className:"my-4 grid grid-cols-1 items-start gap-4 sm:grid-cols-2",children:[i.jsx(qs,{file:"wireframe",src:Sa("wireframe"),caption:t.wireframe,label:t.scroll}),i.jsx(qs,{file:"maquette",src:Sa("maquette"),caption:t.page,label:t.scroll})]})}function Wd({links:e,label:t}){const n=r=>{var s;return(s=document.getElementById(r))==null?void 0:s.scrollIntoView({behavior:"smooth",block:"start"})};return i.jsx("nav",{"aria-label":t,className:"sticky top-0 z-10 -mx-1 mb-5 bg-bg px-1 py-2.5",children:i.jsx("ul",{className:"flex gap-1.5 overflow-x-auto",children:e.map((r,s)=>i.jsx("li",{className:"shrink-0",children:i.jsxs("button",{onClick:()=>n(r.id),className:"t-all inline-flex items-center gap-1.5 rounded-full border border-line bg-elevated px-3 py-1.5 text-xs font-medium text-ink hover:border-rule hover:bg-surface-2",children:[i.jsx("span",{className:"font-display text-[11px] italic opacity-60",children:String(s+1).padStart(2,"0")}),r.label]})},r.id))})})}const Wf=`#!/usr/bin/env node
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
`,Gd="asl-design-system/",Vl=[{path:"SKILL.md",content:jd},{path:"references/fondations.md",content:Cd},{path:"references/styles.md",content:Ad},{path:"references/composants.md",content:Sd},{path:"scripts/check.mjs",content:Wf}];function Gf(e,t){return e==="---"?"text-code-muted":t?"text-[var(--code-key)]":/^#{1,3}\s/.test(e)?"font-semibold text-[var(--code-heading)]":(/^\s*- \[ \]/.test(e),"text-code-ink")}function Hf({t:e}){const[t,n]=C.useState(0),[r,s]=C.useState(!1),a=Vl[t],o=a.content.replace(/\n$/,"").split(`
`),l=async()=>{try{await navigator.clipboard.writeText(a.content),s(!0),window.setTimeout(()=>s(!1),1600)}catch{}};let u=0;return i.jsxs("figure",{className:"rise my-6 overflow-hidden rounded-3xl border border-line bg-code-bg",children:[i.jsxs("div",{className:"flex flex-wrap items-center gap-2 border-b border-[var(--code-line)] px-4 py-3",children:[i.jsx(jo,{size:15,className:"text-code-muted","aria-hidden":!0}),i.jsx("span",{className:"font-mono text-xs text-code-muted",children:Gd}),i.jsx("span",{className:"ml-auto rounded-full bg-[var(--code-key-tint)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--code-key)]",children:e.skill.badge})]}),i.jsxs("div",{className:"flex items-center gap-1 overflow-x-auto border-b border-[var(--code-line)] px-2 pt-2",role:"tablist",children:[Vl.map((d,p)=>i.jsxs("button",{role:"tab","aria-selected":p===t,onClick:()=>n(p),className:`t-all flex shrink-0 items-center gap-1.5 rounded-t-xl px-3 py-2 font-mono text-xs ${p===t?"bg-[var(--code-line)] text-code-ink":"text-code-muted hover:text-code-ink"}`,children:[i.jsx(Sr,{size:13,"aria-hidden":!0}),d.path]},d.path)),i.jsxs("button",{onClick:l,className:"t-all ml-auto mr-1 flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-code-muted hover:bg-[var(--code-line)] hover:text-code-ink",children:[r?e.skill.copied:e.skill.copy,r?i.jsx(jt,{size:13,"aria-hidden":!0}):i.jsx(hd,{size:13,"aria-hidden":!0})]})]}),i.jsx("pre",{className:"max-h-[380px] overflow-auto py-3 font-mono text-[12.5px] leading-[1.65]",role:"tabpanel",children:o.map((d,p)=>{const g=d==="---",f=t===0&&u===1&&!g;return g&&u++,i.jsxs("div",{className:"flex px-4 hover:bg-[var(--code-hover)]",children:[i.jsx("span",{className:"w-8 shrink-0 select-none pr-3 text-right text-code-muted opacity-60","aria-hidden":!0,children:p+1}),i.jsx("span",{className:`min-w-0 whitespace-pre-wrap break-words ${Gf(d,f)}`,children:d||" "})]},p)})}),i.jsx("figcaption",{className:"border-t border-[var(--code-line)] px-4 py-2.5 text-xs font-light text-code-muted",children:e.skill.caption})]})}function Xf({message:e,lang:t,t:n,streamCount:r,isLast:s,onAction:a,onFollowUp:o,onOpenPrototype:l,onOpenDesignSystem:u}){var S,D;if(e.role==="user"){const j=e.text??Bt(e.questionOf??"").question[t];return i.jsx("div",{className:"rise flex justify-end",children:i.jsx("div",{className:"max-w-[85%] whitespace-pre-wrap break-words rounded-3xl rounded-br-md bg-bubble px-5 py-3 text-[15px] leading-relaxed text-bubble-fg",children:j})})}const d=Bt(e.intentId),p=Ed(e.intentId,t,e.model),g=r!==null,f=g?r:e.stoppedAt,v=f==null?p:Ld(p).slice(0,f).join(""),x=!g&&e.stoppedAt===void 0,y=g&&r===0,k=(S=d.actions)!=null&&S.includes("email")?"email":(D=d.actions)==null?void 0:D[0],m=p.includes("[[flow]]"),c=d.flow?i.jsx(Ud,{id:`${e.id}-flow`,lang:t,board:d.flow==="covenant"?Id:d.flow==="grdf"?nf:of,cta:d.flow==="covenant"?{label:ge[t].open,onClick:()=>l("covenant")}:d.flow==="grdf"?{label:qd[t].open,onClick:()=>{var j;return(j=document.getElementById(`${e.id}-proto`))==null?void 0:j.scrollIntoView({behavior:"smooth",block:"start"})}}:void 0}):null,h=ge[t],b=d.anchors?[...d.flow&&!m?[{id:`${e.id}-flow`,label:d.flow==="covenant"?h.navFlow:h.navUxFlow}]:[],...[...p.matchAll(/^###\s+(.+)$/gm)].map((j,I)=>({id:`${e.id}-s${I}`,label:j[1]})),...d.attachment==="covenant"||d.attachment==="grdf"||d.attachment==="vitalize"?[{id:`${e.id}-proto`,label:h.navProto}]:[]]:[];return i.jsxs("div",{className:"rise flex gap-3 sm:gap-4",children:[i.jsx("div",{className:"mt-0.5 hidden sm:block",children:i.jsx(Jn,{size:34})}),i.jsxs("div",{className:"min-w-0 flex-1",children:[i.jsxs("div",{className:"eyebrow mb-2.5 flex items-center gap-2.5",children:[i.jsx("span",{className:"font-semibold text-ink",children:n.assistantName}),i.jsx("span",{className:"h-px w-5 bg-rule","aria-hidden":!0}),i.jsx("span",{className:"text-muted",children:n.models[e.model].name})]}),b.length>0&&!y&&i.jsx(Wd,{links:b,label:h.navLabel}),!m&&!y&&c,y?i.jsx("div",{className:"flex h-7 items-center gap-1.5",role:"status","aria-label":n.thinking,children:[0,1,2].map(j=>i.jsx("span",{className:"thinking-dot",style:{animationDelay:`${j*.16}s`}},j))}):i.jsxs("div",{"aria-live":g?"off":"polite",children:[i.jsx(Gt,{text:v,anchorPrefix:d.anchors?e.id:void 0,embeds:{flow:c,"grdf-compare":i.jsx(Bd,{lang:t}),"grdf-persona":i.jsx($r,{lang:t,set:"persona"}),"grdf-map":i.jsx($r,{lang:t,set:"map"}),"grdf-moodboard":i.jsx($r,{lang:t,set:"moodboard"}),"grdf-screens":i.jsx($r,{lang:t,set:"screens"}),"rebrand-logo":i.jsx(Ol,{lang:t,shot:"logo"}),"rebrand-hero":i.jsx(Ol,{lang:t,shot:"hero"}),"rebrand-screens":i.jsx(Vf,{lang:t}),"vitaliz-decision-1":i.jsx(Si,{lang:t,n:0}),"vitaliz-decision-2":i.jsx(Si,{lang:t,n:1}),"vitaliz-decision-3":i.jsx(Si,{lang:t,n:2}),"vitalize-persona":i.jsx(Wr,{lang:t,shot:"persona"}),"vitalize-map":i.jsx(Wr,{lang:t,shot:"map"}),"vitalize-brand":i.jsx(Wr,{lang:t,shot:"brand"}),"vitalize-shop":i.jsx(Wr,{lang:t,shot:"shop"}),"bloombar-hero":i.jsx(_l,{lang:t,shot:"hero"}),"bloombar-box":i.jsx(_l,{lang:t,shot:"box"}),"bloombar-screens":i.jsx($f,{lang:t}),"repo-map":i.jsx(jf,{lang:t}),"bnp-figures":i.jsx(Md,{lang:t}),"ds-principles":i.jsx(Fd,{lang:t}),"team-roles":i.jsx(qf,{lang:t}),relay:i.jsx(Ef,{lang:t}),"skill-test":i.jsx(Uf,{lang:t}),"skill-lessons":i.jsx(Rf,{lang:t})}}),g&&i.jsx("span",{className:"caret","aria-hidden":!0})]}),e.stoppedAt!==void 0&&i.jsxs("p",{className:"tag mt-3 border border-rule text-ink",children:[i.jsx(Co,{size:10,className:"fill-current","aria-hidden":!0})," ",n.stopped]}),x&&d.attachment==="skill"&&e.model!=="express"&&i.jsx(Hf,{t:n}),x&&(d.attachment==="skill"||d.attachment==="ds")&&i.jsxs("div",{className:"rise mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 rounded-3xl border border-line bg-elevated p-5",children:[i.jsxs("div",{className:"min-w-0 flex-1 basis-64",children:[i.jsx("p",{className:"text-sm font-semibold text-ink",children:Yn[t].openTitle}),i.jsx("p",{className:"mt-1 text-[13px] font-light leading-relaxed text-muted",children:Yn[t].openText})]}),i.jsxs("button",{onClick:u,className:"btn-primary",children:[Yn[t].open," ",i.jsx(fd,{size:14,"aria-hidden":!0})]})]}),!y&&d.attachment==="grdf"&&i.jsx(Bf,{id:`${e.id}-proto`,lang:t}),!y&&d.attachment==="vitalize"&&i.jsx(_f,{id:`${e.id}-proto`,lang:t}),x&&d.attachment==="covenant"&&i.jsxs("div",{id:`${e.id}-proto`,className:"rise mt-6 flex scroll-mt-16 flex-wrap items-center gap-x-5 gap-y-3 rounded-3xl border border-line bg-elevated p-5",children:[i.jsxs("div",{className:"min-w-0 flex-1 basis-64",children:[i.jsx("p",{className:"text-sm font-semibold text-ink",children:ge[t].ctaTitle}),i.jsx("p",{className:"mt-1 text-[13px] font-light leading-relaxed text-muted",children:ge[t].ctaText})]}),i.jsxs("button",{onClick:()=>l("covenant"),className:"btn-primary",children:[ge[t].open," ",i.jsx(So,{size:14,className:"fill-current","aria-hidden":!0})]})]}),x&&d.actions&&i.jsx("div",{className:"rise mt-5 flex flex-wrap gap-3",children:[...d.actions].sort((j,I)=>+(I===k)-+(j===k)).map(j=>{const I=j==="cv"?Sr:Ge;return i.jsxs("button",{onClick:()=>a(j),className:j===k?"btn-primary":"btn-secondary",children:[j==="cv"?n.actionCV:n.actionEmail," ",i.jsx(I,{size:16,"aria-hidden":!0})]},j)})}),x&&s&&d.followUps&&i.jsxs("div",{className:"rise mt-6",children:[i.jsxs("p",{className:"eyebrow mb-3 flex items-center gap-3 text-muted",children:[i.jsx("span",{children:n.followUps}),i.jsx("span",{className:"h-px flex-1 bg-line","aria-hidden":!0})]}),i.jsx("div",{className:"flex flex-wrap gap-2",children:d.followUps.map(j=>{const I=Bt(j);return i.jsxs("button",{onClick:()=>o(j),className:"t-all group inline-flex items-center gap-1.5 rounded-full border border-line bg-elevated px-3.5 py-1.5 text-left text-sm text-ink hover:border-rule hover:bg-surface-2",children:[(I.chip??I.question)[t],i.jsx(xr,{size:14,className:"shrink-0 text-vermillion","aria-hidden":!0})]},j)})})]})]})]})}const re={name:"Anne-Sophie Leroy",monogram:"ASL",email:"leroy.annesophie02@gmail.com",phone:"06 30 47 84 39",phoneHref:"tel:+33630478439",linkedin:"linkedin.com/in/anne-sophie-leroy",linkedinHref:"https://www.linkedin.com/in/anne-sophie-leroy",location:"Paris, France",cvFile:"CV-Anne-Sophie-Leroy.pdf"},Kf={fr:"Product Designer — UX/UI, Design Ops & AI Workflows",en:"Product Designer — UX/UI, Design Ops & AI Workflows"},Qf={fr:"Product Designer à l’intersection de l’UX/UI, du Design System et de l’IA. Je conçois des interfaces complexes et industrialise les workflows design. Du cadrage au prototypage en vibecoding, avec un regard façonné par les arts visuels.",en:"Product Designer at the intersection of UX/UI, Design Systems and AI. I design complex interfaces and industrialise design workflows. From framing to vibecoded prototypes, with an eye shaped by the visual arts."},Ca=[{id:"bnp",intentId:"bnp",title:{fr:"Banque d’investissement · Cadrer une équipe UX augmentée par l’IA",en:"Investment bank · Framing an AI-augmented UX team"},tag:{fr:"2026 · Design Ops · IA",en:"2026 · Design Ops · AI"}},{id:"covenant",intentId:"covenant",title:{fr:"Banque d’investissement · Suivi des clauses de crédit assisté par l’IA",en:"Investment bank · AI-assisted monitoring of loan clauses"},tag:{fr:"2026 · Crédit · IA",en:"2026 · Lending · AI"}},{id:"grdf",intentId:"grdf",title:{fr:"GRDF · Refonte éco-conçue et RGAA",en:"GRDF · Eco-designed redesign and RGAA"},tag:{fr:"2024 · Énergie · Accessibilité",en:"2024 · Energy · Accessibility"}}],Aa=[{id:"vitalize",intentId:"vitalize",title:{fr:"Vitaliz · Des personas à l’application mobile",en:"Vitaliz · From personas to the mobile app"},tag:{fr:"2023 · Master 2 · Étude UX complète",en:"2023 · Master’s year 2 · Full UX study"}},{id:"bloombar",intentId:"bloombar",title:{fr:"Bloom Bar · Direction artistique et illustration 3D",en:"Bloom Bar · Art direction and 3D illustration"},tag:{fr:"2023 · Master 2 · Direction artistique",en:"2023 · Master’s year 2 · Art direction"}},{id:"rebrand",intentId:"rebrand",title:{fr:"McDonald’s · Rebranding pour une nouvelle cible",en:"McDonald’s · Rebranding for a new audience"},tag:{fr:"2021 · Master 1 · Identité visuelle",en:"2021 · Master’s year 1 · Visual identity"}}],Zf=[{company:"mc2i",role:{fr:"Product Designer UX/UI pour solutions IA",en:"UX/UI Product Designer for AI solutions"},period:{fr:"Janv. 2024 – Aujourd’hui",en:"Jan 2024 – Present"},location:"Paris",bullets:{fr:[],en:[]},missions:[{client:"BNP Paribas CIB",period:{fr:"Août 2024 – Aujourd’hui",en:"Aug 2024 – Present"},role:{fr:"UX UI Product Designer pour solutions IA",en:"UX UI Product Designer for AI solutions"},bullets:{fr:["Refonte complète de la chaîne de crédit pour grandes entreprises : automatisation de processus complexes par l’IA pour réduire significativement la charge cognitive des utilisateurs.","Optimisation du workflow design par l’IA : utilisation du vibecoding pour générer des prototypes haute fidélité en cohérence avec le Design System. Génération des spécifications (.md) UX UI.","Design Ops : co-construction de processus transverses entre les pôles Technique, UX et Produit pour fluidifier et accélérer le cycle de conception. Création de skills pour standardiser et accélérer le travail des équipes.","Gouvernance du Design System : des composants UI pensés pour l’IA.","Stratégie UX & recherche : conduite d’entretiens, cartographie de parcours et analyse de données pour traduire les exigences métier en solutions intuitives.","Collaboration agile : alignement continu entre Product Managers, équipes Tech et utilisateurs finaux.","Résultats : +5 modules sur 17 optimisés par l’intégration de l’IA (environ 1 500 utilisateurs) ; réduction significative de la dette design, avec des composants unifiés et une navigation homogène ; une optimisation par l’IA adoptée, avec des retours positifs des utilisateurs cibles ; réduction significative des erreurs de données et accélération du delivery."],en:["Full redesign of the credit chain for large corporates: AI automation of complex processes to significantly reduce users’ cognitive load.","AI-optimised design workflow: vibecoding to generate high-fidelity prototypes consistent with the Design System. Generation of UX/UI specifications (.md).","Design Ops: co-built cross-functional processes between the Tech, UX and Product teams to streamline and speed up the design cycle. Created skills to standardise and speed up the teams’ work.","Design System governance: UI components designed for AI.","UX strategy & research: interviews, journey mapping and data analysis to translate business requirements into intuitive solutions.","Agile collaboration: continuous alignment between Product Managers, Tech teams and end users.","Results: 5+ of 17 modules optimised by integrating AI (around 1,500 users); significant reduction of design debt, with unified components and consistent navigation; AI optimisation adopted, with positive feedback from target users; significant reduction of data errors and faster delivery."]}},{client:"La Caisse des Dépôts",period:{fr:"Avr. 2024 – Août 2024",en:"Apr 2024 – Aug 2024"},role:{fr:"UX UI Designer",en:"UX UI Designer"},bullets:{fr:["Design et refonte d’Emaj, outil interne de gestion stratégique des carrières.","Insights utilisateurs & analyse : entretiens utilisateurs et analyse de données pour en extraire des insights exploitables et définir les besoins fondamentaux des utilisateurs.","Facilitation d’ateliers : planification et animation d’ateliers collaboratifs pour aligner les parties prenantes et co-créer des solutions.","Prototypage haute fidélité et tests utilisateurs : prototypes interactifs pour valider les flux utilisateurs et les fonctionnalités.","Coordination de projet : organisation des activités inter-équipes."],en:["Design and redesign of Emaj, an internal strategic career-management tool.","User insights & analysis: user interviews and data analysis to extract actionable insights and define users’ core needs.","Workshop facilitation: planned and ran collaborative workshops to align stakeholders and co-create solutions.","High-fidelity prototyping and user testing: interactive prototypes to validate user flows and features.","Project coordination: organised cross-team activities."]}},{client:"GRDF",period:{fr:"Janv. 2024 – Mai 2024",en:"Jan 2024 – May 2024"},role:{fr:"UX UI Designer",en:"UX UI Designer"},bullets:{fr:["Refonte et rebranding de la plateforme Act4Gaz en justdecarb.grdf.fr, pour une expérience digitale performante, accessible et éco-conçue.","Audits UX & ergonomie : audits approfondis d’accessibilité et d’utilisabilité pour identifier les points de friction et garantir la conformité aux normes de durabilité numérique (RGAA).","Identité visuelle & Design System : nouvelle identité graphique et bibliothèque de Design System dédiée, accessible et éco-responsable.","Prototypage haute fidélité : maquettes responsives mobile first et prototypes interactifs pour valider les parcours utilisateurs sur tous les appareils.","Résultats : amélioration de la performance environnementale, avec la note C EcoIndex pour le nouveau site, tout en garantissant la conformité RGAA."],en:["Redesign and rebranding of the Act4Gaz platform into justdecarb.grdf.fr, for a fast, accessible and eco-designed digital experience.","UX & usability audits: in-depth accessibility and usability audits to identify pain points and ensure compliance with digital sustainability standards (RGAA).","Visual identity & Design System: new visual identity and a dedicated, accessible and eco-responsible Design System library.","High-fidelity prototyping: responsive mobile-first mockups and interactive prototypes to validate user journeys on every device.","Results: better environmental performance, with an EcoIndex grade C for the new site, while ensuring RGAA compliance."]}}]},{company:"Groupe Kering",role:{fr:"Product Designer",en:"Product Designer"},period:{fr:"Sept. 2022 – Déc. 2023",en:"Sep 2022 – Dec 2023"},location:"Paris",bullets:{fr:["Numérisation d’une carte de réduction physique, offrant une solution mobile évolutive pour une base de 40 000 utilisateurs.","Recherche utilisateurs : direction d’entretiens et d’ateliers pour définir les besoins fondamentaux des utilisateurs.","Stratégie UX : audits et cartographies UX pour simplifier les parcours utilisateurs complexes.","Design UI : interfaces haute fidélité et composants de Design System évolutifs.","Tests utilisateurs : tests itératifs pour valider et affiner les solutions de design.","Résultats : 40 000 utilisateurs utilisent aujourd’hui l’application Privilege Card ; gestion des quotas d’achat optimisée et respect des restrictions de vente en boutique fiabilisé."],en:["Turned a physical discount card into a scalable mobile solution for a base of 40,000 users.","User research: led interviews and workshops to define users’ core needs.","UX strategy: UX audits and journey maps to simplify complex user journeys.","UI design: high-fidelity interfaces and scalable Design System components.","User testing: iterative tests to validate and refine design solutions.","Results: 40,000 people use the Privilege Card app today; optimised purchase-quota management and more reliable in-store sales restrictions."]}},{company:"Eden Park",role:{fr:"Coordinatrice de contenu digital & de projet",en:"Digital Content & Project Coordinator"},period:{fr:"Janv. 2021 – Juil. 2022",en:"Jan 2021 – Jul 2022"},location:"Paris",bullets:{fr:["Coordination de projets digitaux de bout en bout, de la stratégie éditoriale à la création de contenu visuel pour le web et les réseaux sociaux.","Stratégie éditoriale : gestion du calendrier de contenu et du flux de publication du site web.","Maintenance du site web : gestion des tickets de maintenance liés au design et des mises à jour UX.","Production visuelle : visuels photo et vidéo pour les campagnes SMO/SEA.","Résultats : +20 % de ventes e-commerce en 1 an."],en:["End-to-end coordination of digital projects, from editorial strategy to visual content for the web and social media.","Editorial strategy: managed the content calendar and the website publishing flow.","Website maintenance: handled design-related maintenance tickets and UX updates.","Visual production: photo and video visuals for SMO/SEA campaigns.","Results: +20% e-commerce sales in one year."]}},{company:"Balmain · Indress",role:{fr:"Designer Broderie (Balmain) · Designer Studio (Indress)",en:"Embroidery Designer (Balmain) · Studio Designer (Indress)"},period:{fr:"Oct. – Déc. 2019",en:"Oct – Dec 2019"},location:"Paris",bullets:{fr:[],en:[]}}],Yf=[{label:{fr:"Design & Prototypage",en:"Design & Prototyping"},items:{fr:["Figma (Expert)","After Effects","Photoshop","Illustrator","Storybook","Zeroheight","Vibecoding"],en:["Figma (Expert)","After Effects","Photoshop","Illustrator","Storybook","Zeroheight","Vibecoding"]}},{label:{fr:"Outils d’IA",en:"AI tools"},items:{fr:["Prompt Engineering","Claude Code","Midjourney","Adobe Firefly","Gemini"],en:["Prompt Engineering","Claude Code","Midjourney","Adobe Firefly","Gemini"]}},{label:{fr:"Produit & collaboration",en:"Product & collaboration"},items:{fr:["Jira","Confluence","Teams"],en:["Jira","Confluence","Teams"]}},{label:{fr:"Développement",en:"Development"},items:{fr:["HTML & CSS (handoff design-to-dev)"],en:["HTML & CSS (design-to-dev handoff)"]}},{label:{fr:"Compétences relationnelles",en:"Interpersonal skills"},items:{fr:["Curieuse et autodidacte","Sens du collectif","Adaptable"],en:["Curious and self-taught","Team spirit","Adaptable"]}}],Jf=[{title:{fr:"Certification Scrum PSPO I (Professional Scrum Product Owner)",en:"Scrum PSPO I certification (Professional Scrum Product Owner)"},school:"Scrum.org",period:"2026"},{title:{fr:"Certificat de connaissance Numérique Responsable",en:"Responsible Digital knowledge certificate"},school:"Numérique durable, éthique et inclusif",period:"2026"},{title:{fr:"Master Design UX/UI & Gestion de projet, en alternance",en:"Master’s in UX/UI Design & Project Management, work-study"},school:"Digital School of Paris",period:"2021 – 2023"},{title:{fr:"Bachelor Design de Mode & Textile",en:"Bachelor in Fashion & Textile Design"},school:"Atelier Chardon Savard, Nantes",period:"2016 – 2020"},{title:{fr:"Année préparatoire en Arts Appliqués (MANAA)",en:"Applied Arts foundation year (MANAA)"},school:"IMAD, Caen",period:"2018 – 2019"}],eg={fr:["Français — Langue maternelle","Anglais — Courant","Espagnol — Compétences professionnelles limitées (B1)"],en:["French — Native","English — Fluent","Spanish — Limited working proficiency (B1)"]},tg={fr:["Bénévolat : inclusion sociale et orientation administrative des jeunes de l’Aide Sociale à l’Enfance","Piano classique (+5 ans)","Course à pied"],en:["Volunteering: social inclusion and administrative guidance for young people in child welfare care (ASE)","Classical piano (5+ years)","Running"]};function Ci({text:e}){const t=e.match(/^((?:Résultats|Results|Impact)\s?:)(.*)$/);return i.jsxs("li",{className:"flex gap-2.5 text-sm leading-relaxed text-ink",children:[i.jsx("span",{className:"mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-vermillion","aria-hidden":!0}),t?i.jsxs("span",{children:[i.jsx("strong",{className:"font-semibold text-olive-text",children:t[1]}),i.jsx("span",{className:"font-medium",children:t[2]})]}):i.jsx("span",{className:"font-light",children:e})]})}function Rn({label:e,children:t}){return i.jsxs("section",{className:"cv-section mt-7",children:[i.jsxs("h3",{className:"eyebrow mb-4 flex items-center gap-3 font-semibold text-ink",children:[i.jsx("span",{children:e}),i.jsx("span",{className:"h-px flex-1 bg-rule","aria-hidden":!0})]}),t]})}async function ng(){const e=`./${re.cvFile}`;try{const t=await fetch(e,{method:"HEAD"});if(t.ok&&(t.headers.get("content-type")??"").includes("pdf")){const n=document.createElement("a");n.href=e,n.download=re.cvFile,document.body.appendChild(n),n.click(),n.remove();return}}catch{}window.print()}function rg({t:e,lang:t}){return i.jsx("div",{className:"cv-print rise mx-auto w-full max-w-3xl px-5 py-8 sm:px-8 sm:py-10",children:i.jsxs("article",{children:[i.jsxs("header",{children:[i.jsx("h1",{className:"font-display text-[clamp(2rem,6vw,3rem)] font-semibold leading-none tracking-[-0.035em] text-ink",children:re.name}),i.jsx("p",{className:"eyebrow mt-4 font-semibold text-accent-text",children:Kf[t]}),i.jsxs("ul",{className:"mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted",children:[i.jsxs("li",{className:"inline-flex items-center gap-1.5",children:[i.jsx(Th,{size:14,"aria-hidden":!0})," ",re.location]}),i.jsx("li",{children:i.jsxs("a",{href:`mailto:${re.email}`,className:"t-all inline-flex items-center gap-1.5 hover:text-ink",children:[i.jsx(Ge,{size:14,"aria-hidden":!0})," ",re.email]})}),i.jsx("li",{children:i.jsxs("a",{href:re.phoneHref,className:"t-all inline-flex items-center gap-1.5 hover:text-ink",children:[i.jsx(yd,{size:14,"aria-hidden":!0})," ",re.phone]})}),i.jsx("li",{children:i.jsxs("a",{href:re.linkedinHref,target:"_blank",rel:"noopener noreferrer",className:"t-all inline-flex items-center gap-1.5 hover:text-ink",children:[i.jsx(gd,{size:14,"aria-hidden":!0})," ",re.linkedin]})})]}),i.jsx("p",{className:"mt-4 text-sm font-light leading-relaxed text-ink",children:Qf[t]})]}),i.jsx(Rn,{label:e.cv.experience,children:i.jsx("div",{className:"space-y-6",children:Zf.map(n=>{var r;return i.jsxs("div",{children:[i.jsxs("div",{className:"flex flex-wrap items-baseline justify-between gap-x-4",children:[i.jsx("h4",{className:"font-display text-[1.15rem] font-semibold leading-tight tracking-[-0.02em] text-ink",children:n.company}),i.jsxs("span",{className:"text-xs font-medium text-muted",children:[n.period[t]," · ",n.location]})]}),i.jsx("p",{className:"text-sm font-medium text-muted",children:n.role[t]}),n.bullets[t].length>0&&i.jsx("ul",{className:"mt-2 space-y-1.5",children:n.bullets[t].map(s=>i.jsx(Ci,{text:s},s))}),(r=n.missions)==null?void 0:r.map(s=>i.jsxs("div",{className:"cv-section mt-3 border-l-2 border-line pl-4",children:[i.jsxs("div",{className:"flex flex-wrap items-baseline justify-between gap-x-4",children:[i.jsx("h5",{className:"text-sm font-semibold text-ink",children:s.client}),i.jsx("span",{className:"text-xs text-muted",children:s.period[t]})]}),i.jsx("p",{className:"text-xs font-medium text-muted",children:s.role[t]}),i.jsx("ul",{className:"mt-1.5 space-y-1.5",children:s.bullets[t].map(a=>i.jsx(Ci,{text:a},a))})]},s.client))]},n.company)})})}),i.jsx(Rn,{label:e.cv.skills,children:i.jsx("div",{className:"space-y-3",children:Yf.map(n=>i.jsxs("div",{children:[i.jsx("p",{className:"mb-1.5 text-sm font-semibold text-ink",children:n.label[t]}),i.jsx("ul",{className:"flex flex-wrap gap-1.5",children:n.items[t].map(r=>i.jsx("li",{className:"tag bg-olive-tint text-olive-text",children:r},r))})]},n.label.en))})}),i.jsxs("div",{className:"grid gap-x-8 sm:grid-cols-2",children:[i.jsx(Rn,{label:e.cv.education,children:i.jsx("ul",{className:"space-y-2.5",children:Jf.map(n=>i.jsxs("li",{className:"text-sm",children:[i.jsx("p",{className:"font-semibold text-ink",children:n.title[t]}),i.jsxs("p",{className:"font-light text-muted",children:[n.school,n.period&&` · ${n.period}`]})]},n.school))})}),i.jsxs("div",{children:[i.jsx(Rn,{label:e.cv.languages,children:i.jsx("ul",{className:"space-y-1 text-sm font-light text-ink",children:eg[t].map(n=>i.jsx("li",{children:n},n))})}),i.jsx(Rn,{label:e.cv.interests,children:i.jsx("ul",{className:"space-y-1.5",children:tg[t].map(n=>i.jsx(Ci,{text:n},n))})})]})]})]})})}function Hd({t:e,isStreaming:t,onSend:n,onStop:r}){const[s,a]=C.useState(""),[o,l]=C.useState(0),[u,d]=C.useState(0),[p,g]=C.useState(!1),f=C.useRef(null);C.useEffect(()=>{const c=window.setInterval(()=>l(h=>h+1),4500);return()=>window.clearInterval(c)},[]),C.useEffect(()=>{const c=f.current;c&&(c.style.height="auto",c.style.height=`${Math.min(c.scrollHeight,200)}px`)},[s]);const v=C.useMemo(()=>!s.startsWith("/")||/\s/.test(s)?[]:e.slash.filter(c=>c.cmd.startsWith(s.toLowerCase())),[s,e]),x=v.length>0&&!p;C.useEffect(()=>d(0),[s]);const y=(c=s)=>{const h=c.trim();!h||t||(n(h),a(""))},k=c=>{if(x){if(c.key==="ArrowDown"||c.key==="ArrowUp"){c.preventDefault();const h=c.key==="ArrowDown"?1:-1;d(b=>(b+h+v.length)%v.length);return}if(c.key==="Enter"||c.key==="Tab"){c.preventDefault(),y(v[u].cmd);return}if(c.key==="Escape"){c.preventDefault(),g(!0);return}}c.key==="Enter"&&!c.shiftKey&&!c.nativeEvent.isComposing&&(c.preventDefault(),y())},m=()=>{var c;g(!1),a(h=>h.startsWith("/")?"":"/"),(c=f.current)==null||c.focus()};return i.jsx("div",{className:"relative z-10 mx-auto w-full max-w-3xl px-3 pb-3 sm:px-6 sm:pb-5",children:i.jsxs("div",{className:"relative",children:[x&&i.jsx("ul",{role:"listbox","aria-label":e.commands,className:"rise absolute bottom-full left-0 z-10 mb-2 w-full max-w-sm overflow-hidden rounded-3xl border border-rule bg-elevated p-1.5",children:v.map((c,h)=>i.jsx("li",{role:"option","aria-selected":h===u,children:i.jsxs("button",{onMouseEnter:()=>d(h),onClick:()=>y(c.cmd),className:`t-all flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-left text-sm ${h===u?"bg-surface-2":""}`,children:[i.jsx("code",{className:"rounded-md bg-accent-tint px-1.5 py-0.5 font-mono text-xs font-semibold text-accent-text",children:c.cmd}),i.jsx("span",{className:"text-muted",children:c.desc})]})},c.cmd))}),i.jsxs("div",{className:"t-all flex items-end gap-2 rounded-[28px] border border-line bg-elevated p-2 pl-2.5 shadow-signature focus-within:border-rule",children:[i.jsx("button",{type:"button",onClick:m,"aria-label":e.commands,title:e.commands,className:"t-all mb-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-2 text-ink hover:bg-line",children:i.jsx(Bh,{size:15,"aria-hidden":!0})}),i.jsx("textarea",{ref:f,rows:1,value:s,onChange:c=>{a(c.target.value),g(!1)},onKeyDown:k,placeholder:e.placeholders[o%e.placeholders.length],"aria-label":e.placeholders[0],className:"max-h-[200px] min-h-[40px] flex-1 resize-none bg-transparent py-2 text-[15px] leading-relaxed text-ink outline-none placeholder:font-light placeholder:text-muted"}),t?i.jsx("button",{type:"button",onClick:r,"aria-label":e.stop,title:e.stop,className:"t-all flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-bg shadow-signature hover:opacity-85 active:scale-95",children:i.jsx(Co,{size:14,className:"fill-current","aria-hidden":!0})}):i.jsx("button",{type:"button",onClick:()=>y(),disabled:!s.trim(),"aria-label":e.send,title:e.send,className:"t-all flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-fg shadow-signature hover:bg-accent-hover active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none",children:i.jsx(pd,{size:18,strokeWidth:2.5,"aria-hidden":!0})})]})]})})}const sg={fr:{contact:"Me contacter",cv:"Voir le CV",open:"Ouvrir le prototype",cancel:"Annuler",send:"Envoyer",copy:"Copier l’adresse",copied:"Copié",newChat:"Nouvelle conversation",email:"Contacter par email",result:"Résultat",friction:"Relances répétées",repeat:"Pour chaque période",close:"Fermer",menu:"Menu",collapse:"Replier",stop:"Arrêter",q1:"Quel a été son rôle ?",q2:"Voir le projet Covenant",question:"Quel est son parcours ?",answer:"Anne-Sophie est Product Designer, spécialisée en **UX/UI**, Design Ops et workflows IA.",ctaTitle:"Essayez le parcours vous-même",ctaText:"Le prototype s’ouvre ici, sans quitter le portfolio.",dialogTitle:"Écrire à Anne-Sophie",dialogBody:"Le contenu de la fenêtre.",mailApp:"Ouvrir ma messagerie",placeholder:"Votre message…",title:"Titre de section",body:"Texte courant, pour lire sans effort.",caption:"Légende ou détail",label:"Petit libellé",figure:"Chiffre clé",display:"Titre d’accueil",card:"Carte",control:"Bouton, tag, pastille",inner:"Élément interne",promptZone:"Zone de saisie",noShadow:"Carte : pas d’ombre",yes:"Oui",no:"Non",ordered:"Des étapes : numéros",unordered:"Des sujets : icônes",step1:"Comprendre",step2:"Concevoir",topic1:"Profil",topic2:"Impact",projects:"Projets professionnels",personal:"Projets personnels",p1:"Cadrer une équipe UX augmentée",p2:"Clauses de crédit",ctx:"Contexte",approach:"Démarche",outcome:"Résultat",tableMd:`| Cas | Ce que fait l’outil |
|---|---|
| Document reçu | Extraction par l’IA |
| Valeur douteuse | Signalée à l’analyste |
| Seuil dépassé | Alerte |`,s1:"Profil & valeur ajoutée",s1t:"Résume le profil d’Anne-Sophie en quelques lignes.",s2:"Impact & chiffres clés",s2t:"Quels sont ses résultats mesurables ?",cPrimary:"Action principale",cPositive:"Élément positif",cSecondary:"Action secondaire, étape, lien",cAi:"Ce qui vient de l’IA",cWarn:"Friction, alerte",cPunct:"Ponctuation",bg:"Fond de page",sidebar:"Menu latéral",elevated:"Carte, champ",surface2:"Survol, neutre",ink:"Texte principal",muted:"Texte secondaire",inverse:"Neutre inversé",pair:"Couple",thLight:"Clair",thDark:"Sombre",pInk:"Texte principal sur fond",pMuted:"Texte secondaire sur fond",pBtn:"Bouton principal",pTagOk:"Tag olive pâle",pTagAi:"Tag IA",pTagWarn:"Tag friction",pVerm:"Vermillon (ponctuation)",m1:"ASL Court",m1h:"L’essentiel",m2:"ASL Complet",m2h:"La réponse structurée",m3:"ASL Détaillé",m3h:"Avec la méthode",r1t:"Aucune couleur en dur",r1:"Tout passe par un token, donc les deux thèmes fonctionnent.",r2t:"Surfaces neutres et unies",r2:"La couleur vit dans les petits éléments qui portent un sens.",r3t:"L’ombre est réservée",r3:"La zone de saisie et l’action principale, rien d’autre.",r4t:"Une couleur, un seul sens",r4:"Si aucun sens ne correspond, on reste neutre."},en:{contact:"Contact me",cv:"View the CV",open:"Open the prototype",cancel:"Cancel",send:"Send",copy:"Copy the address",copied:"Copied",newChat:"New conversation",email:"Contact by email",result:"Outcome",friction:"Repeated reminders",repeat:"For each period",close:"Close",menu:"Menu",collapse:"Collapse",stop:"Stop",q1:"What was her role?",q2:"See the Covenant project",question:"What is her background?",answer:"Anne-Sophie is a Product Designer, specialised in **UX/UI**, Design Ops and AI workflows.",ctaTitle:"Try the journey yourself",ctaText:"The prototype opens here, without leaving the portfolio.",dialogTitle:"Write to Anne-Sophie",dialogBody:"The dialog content.",mailApp:"Open my mail app",placeholder:"Your message…",title:"Section title",body:"Body text, effortless to read.",caption:"Caption or detail",label:"Small label",figure:"Key figure",display:"Welcome title",card:"Card",control:"Button, tag, badge",inner:"Inner element",promptZone:"Prompt area",noShadow:"Card: no shadow",yes:"Do",no:"Don’t",ordered:"Steps: numbers",unordered:"Topics: icons",step1:"Understand",step2:"Design",topic1:"Profile",topic2:"Impact",projects:"Work projects",personal:"Personal projects",p1:"Framing an AI-augmented UX team",p2:"Loan clauses",ctx:"Context",approach:"Approach",outcome:"Outcome",tableMd:`| Case | What the tool does |
|---|---|
| Document received | AI extraction |
| Doubtful value | Flagged to the analyst |
| Threshold exceeded | Alert |`,s1:"Profile & added value",s1t:"Sum up Anne-Sophie’s profile in a few lines.",s2:"Impact & key figures",s2t:"What are her measurable results?",cPrimary:"Main action",cPositive:"Positive element",cSecondary:"Secondary action, step, link",cAi:"What comes from the AI",cWarn:"Friction, alert",cPunct:"Punctuation",bg:"Page background",sidebar:"Side menu",elevated:"Card, field",surface2:"Hover, neutral",ink:"Main text",muted:"Secondary text",inverse:"Inverted neutral",pair:"Pair",thLight:"Light",thDark:"Dark",pInk:"Main text on background",pMuted:"Secondary text on background",pBtn:"Primary button",pTagOk:"Pale olive tag",pTagAi:"AI tag",pTagWarn:"Friction tag",pVerm:"Vermilion (punctuation)",m1:"ASL Short",m1h:"The essentials",m2:"ASL Full",m2h:"The structured answer",m3:"ASL In-depth",m3h:"With the method",r1t:"No hard-coded colour",r1:"Everything goes through a token, so both themes work.",r2t:"Neutral, flat surfaces",r2:"Colour lives in the small elements that carry meaning.",r3t:"The shadow is reserved",r3:"The prompt area and the main action, nothing else.",r4t:"One colour, one meaning",r4:"If no meaning fits, stay neutral."}},Zt="tag",Ai="t-all flex flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold",Na="t-all inline-flex items-center gap-1.5 rounded-full border border-line bg-elevated px-3.5 py-1.5 text-sm text-ink hover:border-rule hover:bg-surface-2";function je({children:e}){return i.jsx("div",{className:"flex flex-wrap items-center gap-3",children:e})}function De({cls:e,name:t,label:n,border:r}){return i.jsxs("li",{className:"flex items-center gap-3",children:[i.jsx("span",{className:`h-10 w-10 shrink-0 rounded-2xl ${e} ${r?"border border-line":""}`,"aria-hidden":!0}),i.jsxs("span",{className:"min-w-0",children:[i.jsx("span",{className:"block text-[13px] font-medium leading-snug text-ink",children:n}),i.jsx("code",{className:"font-mono text-[11.5px] text-muted",children:t})]})]})}function ig({id:e,lang:t,t:n}){const r=sg[t],[s,a]=C.useState(0),[o,l]=C.useState(!1),[u,d]=C.useState(!0),[p,g]=C.useState(0),[f,v]=C.useState(!1),[x,y]=C.useState(!0);switch(e){case"hierarchy":return i.jsxs(je,{children:[i.jsxs("button",{className:"btn-primary",children:[r.contact," ",i.jsx(Ge,{size:16,"aria-hidden":!0})]}),i.jsxs("button",{className:"btn-secondary",children:[r.cv," ",i.jsx(Et,{size:16,"aria-hidden":!0})]}),i.jsx("button",{className:"icon-btn","aria-label":r.close,children:i.jsx(et,{size:18,"aria-hidden":!0})})]});case"nocaps":return i.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[i.jsxs("div",{className:"rounded-2xl border border-line bg-elevated p-4",children:[i.jsxs("p",{className:"mb-3 inline-flex items-center gap-1.5 text-xs font-semibold text-olive-text",children:[i.jsx(jt,{size:13,"aria-hidden":!0})," ",r.yes]}),i.jsxs(je,{children:[i.jsx("button",{className:"btn-primary !px-4 !py-2",children:r.contact}),i.jsx("span",{className:`${Zt} bg-olive-tint text-olive-text`,children:r.result})]})]}),i.jsxs("div",{className:"rounded-2xl border border-line bg-elevated p-4",children:[i.jsxs("p",{className:"mb-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--warn-text)]",children:[i.jsx(et,{size:13,"aria-hidden":!0})," ",r.no]}),i.jsxs(je,{children:[i.jsx("span",{className:"inline-flex items-center rounded-full bg-olive px-4 py-2 text-[11.5px] font-semibold tracking-[0.14em] text-olive-fg",children:r.contact.toUpperCase()}),i.jsx("span",{className:"rounded-full bg-olive-tint px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.1em] text-olive-text",children:r.result.toUpperCase()})]})]})]});case"numbericon":return i.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[i.jsxs("div",{className:"rounded-2xl border border-line bg-elevated p-4",children:[i.jsx("p",{className:"eyebrow mb-3 text-muted",children:r.ordered}),i.jsx(je,{children:[r.step1,r.step2].map((k,m)=>i.jsxs("span",{className:"inline-flex items-center gap-2 text-[13px] font-medium text-ink",children:[i.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-fg",children:m+1})," ",k]},k))})]}),i.jsxs("div",{className:"rounded-2xl border border-line bg-elevated p-4",children:[i.jsx("p",{className:"eyebrow mb-3 text-muted",children:r.unordered}),i.jsx(je,{children:[{I:Ps,x:r.topic1},{I:ka,x:r.topic2}].map(({I:k,x:m})=>i.jsxs("span",{className:"inline-flex items-center gap-2 text-[13px] font-medium text-ink",children:[i.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full bg-accent-tint text-accent-text",children:i.jsx(k,{size:14,"aria-hidden":!0})})," ",m]},m))})]})]});case"neutrals":return i.jsxs("ul",{className:"grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2",children:[i.jsx(De,{cls:"bg-bg",name:"bg-bg",label:r.bg,border:!0}),i.jsx(De,{cls:"bg-sidebar",name:"bg-sidebar",label:r.sidebar,border:!0}),i.jsx(De,{cls:"bg-elevated",name:"bg-elevated",label:r.elevated,border:!0}),i.jsx(De,{cls:"bg-surface-2",name:"bg-surface-2",label:r.surface2,border:!0}),i.jsx(De,{cls:"bg-ink",name:"text-ink · bg-ink",label:`${r.ink} · ${r.inverse}`}),i.jsx(De,{cls:"bg-muted",name:"text-muted",label:r.muted})]});case"meanings":return i.jsxs("ul",{className:"grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2",children:[i.jsx(De,{cls:"bg-olive",name:"bg-olive",label:r.cPrimary}),i.jsx(De,{cls:"bg-olive-tint",name:"bg-olive-tint",label:r.cPositive,border:!0}),i.jsx(De,{cls:"bg-accent",name:"bg-accent",label:r.cSecondary}),i.jsx(De,{cls:"bg-[var(--ai)]",name:"--ai",label:r.cAi}),i.jsx(De,{cls:"bg-[var(--warn-tint)]",name:"--warn-tint",label:r.cWarn,border:!0}),i.jsx(De,{cls:"bg-vermillion",name:"bg-vermillion",label:r.cPunct})]});case"typescale":return i.jsx("ul",{className:"space-y-4",children:[{cls:"font-display text-[2rem] font-semibold leading-none tracking-[-0.035em]",label:r.display,spec:"Poppins · semibold"},{cls:"font-display text-[1.7rem] font-semibold leading-none tracking-[-0.03em]",label:r.figure,spec:"Poppins · 1.7rem"},{cls:"font-display text-[1.2rem] font-semibold leading-tight tracking-[-0.02em]",label:r.title,spec:"Poppins · 1.2rem"},{cls:"text-[15px] font-light leading-relaxed",label:r.body,spec:"Outfit · 15px · light"},{cls:"eyebrow",label:r.label,spec:"Outfit · 12.5px · medium"},{cls:"text-xs font-light text-muted",label:r.caption,spec:"Outfit · 12px · light"}].map(k=>i.jsxs("li",{className:"flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line pb-4 last:border-b-0 last:pb-0",children:[i.jsx("span",{className:`min-w-0 text-ink ${k.cls}`,children:k.label}),i.jsx("code",{className:"shrink-0 font-mono text-[11.5px] text-muted",children:k.spec})]},k.spec))});case"shapes":return i.jsx("ul",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[{cls:"rounded-full",label:r.control,spec:"rounded-full"},{cls:"rounded-3xl",label:r.card,spec:"rounded-3xl"},{cls:"rounded-2xl",label:r.inner,spec:"rounded-2xl"}].map(k=>i.jsxs("li",{children:[i.jsx("span",{className:`block h-16 border border-rule bg-elevated ${k.cls}`,"aria-hidden":!0}),i.jsx("span",{className:"mt-2 block text-[13px] font-medium text-ink",children:k.label}),i.jsx("code",{className:"font-mono text-[11.5px] text-muted",children:k.spec})]},k.spec))});case"elevation":return i.jsxs("div",{className:"grid grid-cols-1 items-center gap-4 sm:grid-cols-3",children:[i.jsx("div",{className:"flex h-12 items-center rounded-[28px] border border-line bg-elevated px-4 text-[13px] font-light text-muted shadow-signature",children:r.promptZone}),i.jsx("div",{className:"flex justify-center",children:i.jsx("button",{className:"btn-primary",children:r.contact})}),i.jsx("div",{className:"flex h-12 items-center rounded-2xl border border-line bg-elevated px-4 text-[13px] font-light text-muted",children:r.noShadow})]});case"iconplace":return i.jsxs(je,{children:[i.jsxs("button",{className:"btn-secondary",children:[r.cv," ",i.jsx(Et,{size:16,"aria-hidden":!0})]}),i.jsxs("span",{className:`${Zt} bg-[var(--ai-tint)] text-[var(--ai-text)]`,children:[i.jsx(Is,{size:12,"aria-hidden":!0})," Claude"]})]});case"buttons":return i.jsxs(je,{children:[i.jsxs("button",{className:"btn-primary",children:[r.contact," ",i.jsx(Ge,{size:16,"aria-hidden":!0})]}),i.jsxs("button",{className:"btn-secondary",children:[r.cv," ",i.jsx(Et,{size:16,"aria-hidden":!0})]}),i.jsx("button",{className:"btn-primary",children:r.open}),i.jsx("button",{className:"btn-secondary",children:r.cancel})]});case"buttons-wide":return i.jsxs("div",{className:"w-full max-w-[280px] space-y-2 rounded-3xl bg-sidebar p-4",children:[i.jsxs("button",{className:"btn-secondary w-full !justify-between !py-2 !pl-4 !pr-2",children:[r.newChat,i.jsx("span",{className:"icon-chip bg-olive text-base leading-none text-olive-fg",children:"+"})]}),i.jsxs("button",{className:"btn-primary w-full !justify-between !py-2 !pl-4 !pr-2",children:[r.email,i.jsx("span",{className:"icon-chip bg-olive-fg text-olive",children:i.jsx(Ge,{size:13,strokeWidth:2.25,"aria-hidden":!0})})]}),i.jsxs("button",{className:"btn-secondary w-full !justify-between !py-2 !pl-4 !pr-2",children:[r.cv,i.jsx("span",{className:"icon-chip bg-accent text-accent-fg",children:i.jsx(Et,{size:14,strokeWidth:2.25,"aria-hidden":!0})})]})]});case"buttons-states":return i.jsxs(je,{children:[i.jsxs("button",{className:"btn-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none",disabled:!0,children:[r.send," ",i.jsx(Ge,{size:16,"aria-hidden":!0})]}),i.jsxs("button",{className:"btn-secondary",onClick:()=>{l(!0),window.setTimeout(()=>l(!1),1600)},children:[o?r.copied:r.copy," ",o?i.jsx(jt,{size:16,"aria-hidden":!0}):i.jsx(hd,{size:16,"aria-hidden":!0})]})]});case"iconbuttons":return i.jsxs(je,{children:[i.jsx("button",{className:"icon-btn","aria-label":r.close,children:i.jsx(et,{size:18,"aria-hidden":!0})}),i.jsx("button",{className:"icon-btn","aria-label":r.menu,children:i.jsx(vd,{size:19,"aria-hidden":!0})}),i.jsx("button",{className:"icon-btn","aria-label":r.collapse,children:i.jsx(ja,{size:18,"aria-hidden":!0})}),i.jsx("span",{className:"mx-1 h-6 w-px bg-line","aria-hidden":!0}),i.jsx("button",{"aria-label":r.send,className:"t-all flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-fg shadow-signature hover:bg-accent-hover",children:i.jsx(pd,{size:18,strokeWidth:2.5,"aria-hidden":!0})}),i.jsx("button",{"aria-label":r.stop,className:"t-all flex h-10 w-10 items-center justify-center rounded-full bg-ink text-bg shadow-signature hover:opacity-85",children:i.jsx(Co,{size:14,className:"fill-current","aria-hidden":!0})})]});case"segmented":return i.jsxs(je,{children:[i.jsx("div",{role:"group","aria-label":n.theme,className:"flex w-56 rounded-full border border-line p-0.5",children:[{x:n.light,I:wd},{x:n.dark,I:xd}].map(({x:k,I:m},c)=>i.jsxs("button",{"aria-pressed":s===c,onClick:()=>a(c),className:`${Ai} ${s===c?"bg-ink text-bg":"text-muted hover:text-ink"}`,children:[k," ",i.jsx(m,{size:12,className:"text-vermillion","aria-hidden":!0})]},k))}),i.jsxs("div",{role:"group","aria-label":n.language,className:"flex w-36 rounded-full border border-line p-0.5",children:[i.jsx("span",{className:`${Ai} bg-ink text-bg`,children:"FR"}),i.jsx("span",{className:`${Ai} text-muted`,children:"EN"})]})]});case"chips":return i.jsx(je,{children:[r.q1,r.q2].map(k=>i.jsxs("button",{className:Na,children:[k," ",i.jsx(xr,{size:14,className:"shrink-0 text-vermillion","aria-hidden":!0})]},k))});case"tags":return i.jsxs(je,{children:[i.jsx("span",{className:`${Zt} bg-olive-tint text-olive-text`,children:r.result}),i.jsxs("span",{className:`${Zt} bg-[var(--ai-tint)] text-[var(--ai-text)]`,children:[i.jsx(Is,{size:12,"aria-hidden":!0})," Claude"]}),i.jsxs("span",{className:`${Zt} bg-[var(--warn-tint)] text-[var(--warn-text)]`,children:[i.jsx(kd,{size:12,"aria-hidden":!0})," ",r.friction]}),i.jsxs("span",{className:`${Zt} border border-rule text-ink`,children:[i.jsx(bd,{size:12,"aria-hidden":!0})," ",r.repeat]})]});case"badges":return i.jsxs(je,{children:[i.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-accent-tint text-accent-text",children:i.jsx(md,{size:15,"aria-hidden":!0})}),i.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-fg",children:"1"}),i.jsx("span",{className:"icon-chip bg-olive text-olive-fg",children:i.jsx(Ge,{size:13,"aria-hidden":!0})}),i.jsx(Jn,{size:40})]});case"messages":return i.jsxs("div",{className:"space-y-5",children:[i.jsx("div",{className:"flex justify-end",children:i.jsx("div",{className:"max-w-[85%] rounded-3xl rounded-br-md bg-bubble px-5 py-3 text-[15px] leading-relaxed text-bubble-fg",children:r.question})}),i.jsxs("div",{className:"flex gap-4",children:[i.jsx("div",{className:"mt-0.5 hidden sm:block",children:i.jsx(Jn,{size:34})}),i.jsxs("div",{className:"min-w-0 flex-1",children:[i.jsxs("div",{className:"eyebrow mb-2.5 flex items-center gap-2.5",children:[i.jsx("span",{className:"font-semibold text-ink",children:n.assistantName}),i.jsx("span",{className:"h-px w-5 bg-rule","aria-hidden":!0}),i.jsx("span",{className:"text-muted",children:n.models.standard.name})]}),i.jsx(Gt,{text:r.answer}),i.jsxs("div",{className:"mt-4 flex flex-wrap gap-3",children:[i.jsxs("button",{className:"btn-primary",children:[r.contact," ",i.jsx(Ge,{size:16,"aria-hidden":!0})]}),i.jsxs("button",{className:"btn-secondary",children:[r.cv," ",i.jsx(Et,{size:16,"aria-hidden":!0})]})]})]})]})]});case"card-suggestion":return i.jsx("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[{I:Ps,a:r.s1,b:r.s1t},{I:ka,a:r.s2,b:r.s2t}].map(({I:k,a:m,b:c})=>i.jsxs("button",{className:"t-all group flex flex-col gap-3 rounded-3xl border border-line bg-elevated p-5 text-left hover:-translate-y-0.5 hover:border-rule",children:[i.jsxs("span",{className:"flex items-center gap-3",children:[i.jsx("span",{className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-tint text-accent-text",children:i.jsx(k,{size:15,"aria-hidden":!0})}),i.jsx("span",{className:"eyebrow flex-1 font-semibold text-ink",children:m}),i.jsx(xr,{size:15,className:"t-all shrink-0 text-muted group-hover:text-ink","aria-hidden":!0})]}),i.jsx("span",{className:"text-[14.5px] font-light leading-relaxed text-ink",children:c})]},m))});case"card-numbered":return i.jsx(Fd,{lang:t});case"card-cta":return i.jsxs("div",{className:"flex flex-wrap items-center gap-x-5 gap-y-3 rounded-3xl border border-line bg-elevated p-5",children:[i.jsxs("div",{className:"min-w-0 flex-1 basis-56",children:[i.jsx("p",{className:"text-sm font-semibold text-ink",children:r.ctaTitle}),i.jsx("p",{className:"mt-1 text-[13px] font-light leading-relaxed text-muted",children:r.ctaText})]}),i.jsxs("button",{className:"btn-primary",children:[r.open," ",i.jsx(So,{size:14,className:"fill-current","aria-hidden":!0})]})]});case"table":return i.jsx(Gt,{text:r.tableMd});case"sidemenu":return i.jsxs("div",{className:"relative flex h-72 overflow-hidden rounded-3xl border border-line bg-bg",children:[i.jsxs("div",{className:`t-all flex shrink-0 flex-col overflow-hidden bg-sidebar ${x?"w-[62%] max-w-[250px] border-r border-line p-4":"w-0 p-0"}`,children:[i.jsxs("div",{className:"flex items-center gap-2.5",children:[i.jsx(Jn,{size:32}),i.jsx("p",{className:"min-w-0 flex-1 truncate font-display text-[14px] font-semibold text-ink",children:"Anne-Sophie Leroy"})]}),i.jsxs("p",{className:"mt-5 flex items-center gap-2 text-[12.5px] font-medium text-ink",children:[i.jsx(jo,{size:13,className:"shrink-0 text-accent-text","aria-hidden":!0}),i.jsx("span",{className:"min-w-0 flex-1 truncate",children:r.projects}),i.jsx(Zn,{size:13,className:"rotate-180 text-muted","aria-hidden":!0})]}),i.jsx("ul",{className:"mt-2 space-y-2 pl-2",children:[r.p1,r.p2].map((k,m)=>i.jsxs("li",{className:"flex items-baseline gap-2.5 text-[12.5px] leading-snug text-ink",children:[i.jsx("span",{className:"font-display text-[12px] font-medium italic text-accent-text",children:String(m+1).padStart(2,"0")})," ",k]},k))}),i.jsxs("p",{className:"mt-3 flex items-center gap-2 text-[12.5px] font-medium text-ink",children:[i.jsx(Xs,{size:13,className:"shrink-0 text-accent-text","aria-hidden":!0}),i.jsx("span",{className:"min-w-0 flex-1 truncate",children:r.personal}),i.jsx(Zn,{size:13,className:"text-muted","aria-hidden":!0})]}),i.jsxs("span",{className:"mt-auto inline-flex items-center justify-between rounded-full bg-olive py-1.5 pl-3.5 pr-1.5 text-[12px] font-semibold text-olive-fg",children:[r.email,i.jsx("span",{className:"icon-chip !h-5 !w-5 bg-olive-fg text-olive",children:i.jsx(Ge,{size:11,"aria-hidden":!0})})]})]}),i.jsx("div",{className:"flex min-w-0 flex-1 flex-col",children:i.jsxs("div",{className:"flex items-center gap-2 border-b border-line px-3 py-2",children:[i.jsx("button",{onClick:()=>y(!x),"aria-label":r.collapse,"aria-expanded":x,className:"icon-btn",children:i.jsx(ja,{size:18,"aria-hidden":!0})}),i.jsx("p",{className:"eyebrow min-w-0 flex-1 truncate text-ink",children:r.newChat})]})})]});case"anchors":return i.jsx("div",{className:"px-1",children:i.jsx(Wd,{label:n.caseStudies,links:[{id:"ds-top",label:r.ctx},{id:"ds-anchor-2",label:r.approach},{id:"ds-anchor-3",label:r.outcome}]})});case"tabs":return i.jsxs("div",{className:"flex items-center gap-1 rounded-2xl border border-line bg-bg px-3 py-2",children:[i.jsx("span",{className:"rounded-full px-3 py-1.5 text-[12.5px] font-medium text-muted",children:r.newChat}),i.jsxs("span",{className:"flex items-center rounded-full bg-surface-2 text-[12.5px] font-medium text-ink",children:[i.jsx("span",{className:"py-1.5 pl-3 pr-1.5",children:n.cv.tab}),i.jsx("button",{"aria-label":n.cv.closeTab,className:"t-all mr-1 flex h-6 w-6 items-center justify-center rounded-full text-muted hover:bg-line hover:text-ink",children:i.jsx(et,{size:13,"aria-hidden":!0})})]}),i.jsx("span",{className:"flex-1"}),i.jsxs("button",{className:"btn-primary !px-4 !py-2",children:[n.cv.download," ",i.jsx(Et,{size:16,"aria-hidden":!0})]})]});case"menu":{const k=[[r.m1,r.m1h],[r.m2,r.m2h],[r.m3,r.m3h]];return i.jsx("div",{className:u?"h-52":"",children:i.jsxs("div",{className:"relative inline-block",children:[i.jsxs("button",{onClick:()=>d(!u),"aria-haspopup":"listbox","aria-expanded":u,className:"t-all flex items-center gap-2 rounded-full border border-line bg-elevated px-3.5 py-1.5 text-[13px] hover:border-rule",children:[i.jsx("span",{className:"h-2 w-2 rounded-full bg-vermillion","aria-hidden":!0}),i.jsx("span",{className:"font-semibold text-ink",children:k[p][0]}),i.jsx(Zn,{size:15,className:`t-all text-muted ${u?"rotate-180":""}`,"aria-hidden":!0})]}),u&&i.jsx("ul",{role:"listbox",className:"absolute left-0 top-full z-10 mt-2 w-[260px] rounded-3xl border border-rule bg-elevated p-1.5",children:k.map(([m,c],h)=>i.jsx("li",{role:"option","aria-selected":h===p,children:i.jsxs("button",{onClick:()=>g(h),className:"t-all flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left hover:bg-surface-2",children:[i.jsxs("span",{className:"min-w-0 flex-1 text-sm font-semibold text-ink",children:[m," ",i.jsxs("span",{className:"font-normal text-muted",children:["· ",c]})]}),h===p&&i.jsx(jt,{size:16,className:"shrink-0 text-accent-text","aria-hidden":!0})]})},m))})]})})}case"prompt":return i.jsxs("div",{children:[i.jsx("div",{className:"flex justify-end",children:i.jsx("button",{onClick:()=>v(!f),className:"btn-secondary !px-3.5 !py-1.5",children:f?r.send:r.stop})}),i.jsx("div",{className:"pt-44",children:i.jsx(Hd,{t:n,isStreaming:f,onSend:()=>{},onStop:()=>v(!1)})})]});case"compare":return i.jsx(Bd,{lang:t});case"figures":return i.jsx(Md,{lang:t});case"flow":return i.jsx(Ud,{lang:t,board:Id});default:return null}}function Xd({children:e}){return i.jsx("h3",{className:"mb-3 font-display text-[1.2rem] font-semibold leading-tight tracking-[-0.02em] text-ink",children:e})}function Kd({body:e,lang:t,t:n}){const r={},s=e.replace(/^<!--\s*exemple:\s*([a-z-]+)\s*-->$/gm,(a,o)=>(r[o]=i.jsx("div",{className:"my-4 rounded-3xl border border-line bg-bg p-5 sm:p-6",children:i.jsx(ig,{id:o,lang:t,t:n})}),`[[${o}]]`));return s.trim()?i.jsx(Gt,{text:s,embeds:r}):null}function ag({section:e,lang:t,t:n}){return i.jsxs("section",{children:[e.title&&i.jsx(Xd,{children:e.title}),i.jsx(Kd,{body:e.body,lang:t,t:n})]})}function og({section:e,lang:t,t:n}){const{items:r,rest:s}=Nd(e.body);return i.jsxs("section",{children:[i.jsx(Xd,{children:e.title}),i.jsx("ol",{className:"grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2",children:r.map((a,o)=>i.jsxs("li",{className:"flex items-start gap-2.5",children:[i.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-[11px] font-semibold text-accent-fg",children:o+1}),i.jsx("span",{className:"min-w-0 pt-px",children:i.jsx(Gt,{text:a})})]},o))}),i.jsx(Kd,{body:s,lang:t,t:n})]})}function lg({section:e}){const t=e.kind==="do";return i.jsxs("div",{className:"rounded-3xl border border-line bg-elevated p-5",children:[i.jsxs("p",{className:`tag mb-3 ${t?"bg-olive-tint text-olive-text":"bg-[var(--warn-tint)] text-[var(--warn-text)]"}`,children:[t?i.jsx(jt,{size:12,"aria-hidden":!0}):i.jsx(et,{size:12,"aria-hidden":!0})," ",e.title]}),i.jsx("ul",{className:"space-y-2",children:Nd(e.body).items.map((n,r)=>i.jsx("li",{children:i.jsx(Gt,{text:n})},r))})]})}function ug({page:e,lang:t,t:n}){const r=[];for(let s=0;s<e.sections.length;s++){const a=e.sections[s];if(a.kind==="do"||a.kind==="dont"){const o=[a],l=e.sections[s+1];l&&(l.kind==="do"||l.kind==="dont")&&o.push(e.sections[++s]),r.push(i.jsx("section",{className:`grid grid-cols-1 gap-3 ${o.length>1?"sm:grid-cols-2":""}`,children:o.map(u=>i.jsx(lg,{section:u},u.title))},s))}else a.kind==="anatomy"?r.push(i.jsx(og,{section:a,lang:t,t:n},s)):r.push(i.jsx(ag,{section:a,lang:t,t:n},s))}return i.jsx(i.Fragment,{children:r})}function cg({lang:e,t}){const n=Yn[e],r=ef(e),[s,a]=C.useState(r[0].id),o=C.useRef(null),l=Math.max(0,r.findIndex(x=>x.id===s)),u=r[l],d=r[l-1],p=r[l+1],g=x=>{var y;a(x),(y=o.current)==null||y.scrollTo({top:0})},f=ki.find(x=>x.id===u.group).title[e],v=x=>i.jsx("li",{children:i.jsx("button",{onClick:()=>g(x.id),"aria-current":x.id===s?"page":void 0,className:`t-all w-full rounded-full px-3 py-1.5 text-left text-[13.5px] ${x.id===s?"bg-surface-2 font-semibold text-ink":"font-normal text-muted hover:text-ink"}`,children:x.title})},x.id);return i.jsxs("div",{className:"flex min-h-0 flex-1",children:[i.jsx("nav",{"aria-label":n.pages,className:"hidden w-[232px] shrink-0 overflow-y-auto border-r border-line px-3 py-5 xl:block",children:ki.map(x=>{const y=r.filter(m=>m.group===x.id),k=[...new Set(y.map(m=>m.category??""))];return i.jsxs("div",{className:"mb-6",children:[i.jsx("p",{className:"px-3 font-display text-[13px] font-semibold text-ink",children:x.title[e]}),k.map(m=>i.jsxs("div",{children:[m&&i.jsx("p",{className:"mt-4 px-3 text-[11.5px] font-medium text-accent-text",children:m}),i.jsx("ul",{className:"mt-1.5 space-y-0.5",children:y.filter(c=>(c.category??"")===m).map(v)})]},m))]},x.id)})}),i.jsxs("div",{ref:o,className:"min-w-0 flex-1 overflow-y-auto",children:[i.jsxs("div",{className:"border-b border-line px-4 py-3 xl:hidden",children:[i.jsx("label",{className:"sr-only",htmlFor:"ds-page",children:n.pages}),i.jsx("select",{id:"ds-page",value:u.id,onChange:x=>g(x.target.value),className:"w-full rounded-full border border-rule bg-elevated px-4 py-2 text-[13.5px] font-semibold text-ink",children:ki.map(x=>i.jsx("optgroup",{label:x.title[e],children:r.filter(y=>y.group===x.id).map(y=>i.jsx("option",{value:y.id,children:y.title},y.id))},x.id))})]}),i.jsxs("article",{id:"ds-top",className:"mx-auto w-full max-w-3xl px-5 py-8 sm:px-8 sm:py-10",children:[i.jsxs("p",{className:"eyebrow text-accent-text",children:[f,u.category?` · ${u.category}`:""]}),i.jsx("h2",{className:"mt-2 font-display text-[clamp(1.8rem,5vw,2.4rem)] font-semibold leading-none tracking-[-0.035em] text-ink",children:u.title}),u.lead&&i.jsx("div",{className:"mt-4 text-muted [&>div]:text-[16px] [&>div]:font-light [&>div]:text-muted",children:i.jsx(Gt,{text:u.lead})}),i.jsx("div",{className:"mt-9 space-y-10",children:i.jsx(ug,{page:u,lang:e,t})},u.id),i.jsxs("p",{className:"mt-12 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-light text-muted",children:[i.jsx(Sr,{size:13,className:"shrink-0 text-accent-text","aria-hidden":!0})," ",n.source," :",i.jsxs("code",{className:"font-mono text-[11.5px] text-ink",children:[Gd,u.path]})]}),i.jsxs("footer",{className:"mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6",children:[d?i.jsxs("button",{onClick:()=>g(d.id),className:Na,children:[i.jsx("span",{className:"opacity-60",children:n.previous})," ",d.title]}):i.jsx("span",{}),p&&i.jsxs("button",{onClick:()=>g(p.id),className:Na,children:[i.jsx("span",{className:"opacity-60",children:n.next})," ",p.title,i.jsx(vr,{size:14,className:"shrink-0 text-vermillion","aria-hidden":!0})]})]})]})]})]})}const Ni=1280;function dg({src:e,title:t,note:n,restartLabel:r,closeLabel:s,desktopHint:a,onClose:o}){const l=C.useRef(null),[u,d]=C.useState({w:Ni,h:800}),[p,g]=C.useState(0);C.useLayoutEffect(()=>{const x=l.current;if(!x)return;const y=()=>d({w:x.clientWidth,h:x.clientHeight});y();const k=new ResizeObserver(y);return k.observe(x),()=>k.disconnect()},[]),C.useEffect(()=>{const x=document.activeElement,y=k=>k.key==="Escape"&&o();return document.addEventListener("keydown",y),()=>{var k;document.removeEventListener("keydown",y),(k=x==null?void 0:x.focus)==null||k.call(x)}},[o]);const f=Math.min(1,u.w/Ni),v=f<1;return cd.createPortal(i.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":t,className:"fixed inset-0 z-50 flex flex-col bg-bg",children:[i.jsxs("div",{className:"flex shrink-0 items-center gap-3 border-b border-line px-4 py-2.5",children:[i.jsxs("div",{className:"min-w-0 flex-1",children:[i.jsx("p",{className:"eyebrow truncate font-semibold text-ink",children:t}),i.jsx("p",{className:"mt-0.5 truncate text-xs font-light text-muted",children:v?a:n})]}),i.jsxs("button",{onClick:()=>g(x=>x+1),className:"btn-secondary !px-3.5 !py-2",title:r,children:[i.jsx("span",{className:"hidden sm:inline",children:r})," ",i.jsx(Mh,{size:14,"aria-hidden":!0})]}),i.jsx("button",{onClick:o,"aria-label":s,autoFocus:!0,className:"icon-btn",children:i.jsx(et,{size:18,"aria-hidden":!0})})]}),i.jsx("div",{ref:l,className:"relative min-h-0 flex-1 overflow-hidden bg-white",children:i.jsx("iframe",{src:`./${e}`,title:t,className:"absolute left-0 top-0 origin-top-left border-0",style:{width:v?Ni:"100%",height:v?u.h/f:"100%",transform:v?`scale(${f})`:void 0}},p)})]}),document.body)}function $l({label:e,value:t,options:n,onChange:r}){return i.jsx("div",{role:"group","aria-label":e,className:"flex flex-1 rounded-full border border-line p-0.5",children:n.map(s=>i.jsx("button",{onClick:()=>r(s.value),"aria-pressed":t===s.value,"aria-label":s.aria,className:`t-all flex flex-1 items-center justify-center gap-1.5 rounded-full px-2 py-1.5 text-xs font-semibold ${t===s.value?"bg-ink text-bg":"text-muted hover:text-ink"}`,children:s.label},s.value))})}function pg({children:e}){return i.jsxs("p",{className:"eyebrow flex items-center gap-3 text-muted",children:[i.jsx("span",{className:"shrink-0",children:e}),i.jsx("span",{className:"h-px flex-1 bg-line","aria-hidden":!0})]})}function Wl({id:e,label:t,open:n,onToggle:r,items:s}){const a=n?jo:Xs;return i.jsxs("div",{children:[i.jsxs("button",{onClick:r,"aria-expanded":n,"aria-controls":e,className:"t-all -mx-2 flex w-[calc(100%+1rem)] items-center gap-2.5 rounded-2xl px-2 py-2 text-left hover:bg-surface-2",children:[i.jsx(a,{size:15,className:"shrink-0 text-accent-text","aria-hidden":!0}),i.jsx("span",{className:"min-w-0 flex-1 truncate text-[13.5px] font-medium text-ink",children:t}),i.jsx("span",{className:"text-[11px] font-normal text-muted",children:s.length}),i.jsx(Zn,{size:15,className:`t-all shrink-0 text-muted ${n?"rotate-180":""}`,"aria-hidden":!0})]}),n&&i.jsx("ul",{id:e,className:"-mx-2 mt-1 pl-3",children:s.map((o,l)=>i.jsx("li",{children:i.jsxs("button",{onClick:o.onClick,"aria-current":o.active?"page":void 0,className:`t-all group flex w-full items-baseline gap-3 rounded-2xl px-2 py-2.5 text-left ${o.active?"bg-surface-2":"hover:bg-surface-2"}`,children:[i.jsx("span",{className:`t-all w-6 shrink-0 font-display text-[13px] font-medium italic leading-none ${o.active?"text-vermillion":"text-accent-text"}`,children:String(l+1).padStart(2,"0")}),i.jsxs("span",{className:"min-w-0",children:[i.jsx("span",{className:`block text-[13.5px] leading-snug text-ink ${o.active?"font-semibold":"font-normal"}`,children:o.title}),i.jsx("span",{className:"mt-1 block text-[11px] font-normal text-muted",children:o.tag})]})]})},o.id))})]})}function mg(e){const{t,lang:n}=e,[r,s]=C.useState("work"),a=Ca.some(p=>p.id===e.activeProject),o=e.designSystemActive||Aa.some(p=>p.id===e.activeProject);C.useEffect(()=>{a&&s("work")},[a]),C.useEffect(()=>{o&&s("personal")},[o]);const l=p=>s(g=>g===p?null:p),u=Ca.map(p=>({id:p.id,title:p.title[n],tag:p.tag[n],active:e.activeProject===p.id,onClick:()=>e.onProject(p.id)})),d=[{id:"ds",title:t.dsProject.title,tag:t.dsProject.tag,active:e.designSystemActive,onClick:e.onDesignSystem},...Aa.map(p=>({id:p.id,title:p.title[n],tag:p.tag[n],active:e.activeProject===p.id,onClick:()=>e.onProject(p.id)}))];return i.jsxs(i.Fragment,{children:[i.jsx("div",{onClick:e.onClose,"aria-hidden":!0,className:`t-all fixed inset-0 z-30 bg-[var(--overlay)] md:hidden ${e.open?"opacity-100":"pointer-events-none opacity-0"}`}),i.jsxs("aside",{"aria-label":"Navigation",className:`t-all fixed inset-y-0 left-0 z-40 flex w-[304px] max-w-[88vw] shrink-0 flex-col border-r border-line bg-sidebar md:relative md:z-10 md:max-w-none ${e.open?"translate-x-0":"-translate-x-full"} md:translate-x-0 ${e.collapsed?"md:-ml-[304px]":"md:ml-0"}`,children:[i.jsxs("div",{className:"px-5 pb-4 pt-5",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(Jn,{size:46}),i.jsxs("div",{className:"min-w-0 flex-1",children:[i.jsx("p",{className:"truncate font-display text-[17px] font-semibold leading-tight tracking-[-0.02em] text-ink",children:re.name}),i.jsx("p",{className:"tag mt-1 !inline-block max-w-full truncate bg-olive-tint text-olive-text",children:t.role})]}),i.jsx("button",{onClick:e.onClose,"aria-label":t.closeMenu,className:"icon-btn md:hidden",children:i.jsx(et,{size:18,"aria-hidden":!0})})]}),i.jsxs("button",{onClick:e.onNew,className:"btn-secondary mt-5 w-full !justify-between !py-2 !pl-4 !pr-2",children:[t.newChat,i.jsx("span",{className:"icon-chip bg-olive text-olive-fg",children:i.jsx(zh,{size:14,strokeWidth:2.5,"aria-hidden":!0})})]})]}),i.jsxs("nav",{className:"min-h-0 flex-1 space-y-1 overflow-y-auto px-5 pb-3",children:[i.jsx(Wl,{id:"work-projects",label:t.caseStudies,open:r==="work",onToggle:()=>l("work"),items:u}),i.jsx(Wl,{id:"personal-projects",label:t.personalProjects,open:r==="personal",onToggle:()=>l("personal"),items:d})]}),i.jsxs("div",{className:"px-5 pb-5",children:[i.jsx(pg,{children:t.quickAccess}),i.jsxs("div",{className:"mt-3 space-y-2",children:[i.jsxs("button",{onClick:e.onEmail,className:"btn-primary w-full !justify-between !py-2 !pl-4 !pr-2",children:[t.contactEmail,i.jsx("span",{className:"icon-chip bg-olive-fg text-olive",children:i.jsx(Ge,{size:13,strokeWidth:2.25,"aria-hidden":!0})})]}),i.jsxs("button",{onClick:e.onCV,className:"btn-secondary w-full !justify-between !py-2 !pl-4 !pr-2",children:[t.viewCV,i.jsx("span",{className:"icon-chip bg-accent text-accent-fg",children:i.jsx(Et,{size:14,strokeWidth:2.25,"aria-hidden":!0})})]})]}),i.jsxs("div",{className:"mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted",children:[i.jsxs("a",{href:re.linkedinHref,target:"_blank",rel:"noopener noreferrer",className:"t-all inline-flex items-center gap-1.5 hover:text-ink",children:[i.jsx(gd,{size:13,className:"text-accent-text","aria-hidden":!0})," LinkedIn"]}),i.jsxs("a",{href:re.phoneHref,className:"t-all inline-flex items-center gap-1.5 hover:text-ink",children:[i.jsx(yd,{size:13,className:"text-accent-text","aria-hidden":!0})," ",re.phone]})]}),i.jsxs("div",{className:"mt-4 flex gap-2",children:[i.jsx($l,{label:t.language,value:n,onChange:e.setLang,options:[{value:"fr",label:"FR",aria:"Français"},{value:"en",label:"EN",aria:"English"}]}),i.jsx($l,{label:t.theme,value:e.theme,onChange:e.setTheme,options:[{value:"light",label:i.jsxs(i.Fragment,{children:[t.light," ",i.jsx(wd,{size:12,className:"text-vermillion","aria-hidden":!0})]}),aria:t.light},{value:"dark",label:i.jsxs(i.Fragment,{children:[t.dark," ",i.jsx(xd,{size:12,className:"text-vermillion","aria-hidden":!0})]}),aria:t.dark}]})]})]})]})]})}const hg=["express","standard","deepdive"],Gl="t-all flex min-w-0 items-center rounded-full text-[12.5px] font-medium",Hl=e=>e?"bg-surface-2 text-ink":"text-muted hover:text-ink";function fg({t:e,title:t,model:n,setModel:r,onMenu:s,onToggleSidebar:a,docTabs:o=[],chatActive:l=!0,onSelectChat:u,docAction:d}){const[p,g]=C.useState(!1),f=C.useRef(null);return C.useEffect(()=>{if(!p)return;const v=y=>{var k;(k=f.current)!=null&&k.contains(y.target)||g(!1)},x=y=>y.key==="Escape"&&g(!1);return document.addEventListener("mousedown",v),document.addEventListener("keydown",x),()=>{document.removeEventListener("mousedown",v),document.removeEventListener("keydown",x)}},[p]),i.jsxs("header",{className:"relative z-20 flex h-14 shrink-0 items-center gap-2 border-b border-line px-2 sm:px-4",children:[i.jsx("button",{onClick:s,"aria-label":e.openMenu,className:"icon-btn md:hidden",children:i.jsx(vd,{size:19,"aria-hidden":!0})}),i.jsx("button",{onClick:a,"aria-label":e.toggleSidebar,title:e.toggleSidebar,className:"icon-btn hidden md:inline-flex",children:i.jsx(ja,{size:18,"aria-hidden":!0})}),o.length>0?i.jsxs("div",{role:"tablist",className:"flex min-w-0 flex-1 items-center gap-1 overflow-x-auto",children:[i.jsx("button",{role:"tab","aria-selected":l,onClick:u,className:`${Gl} px-3 py-1.5 ${Hl(l)}`,children:i.jsx("span",{className:"truncate",children:t})}),o.map(v=>i.jsxs("span",{className:`${Gl} shrink-0 ${Hl(v.active)}`,children:[i.jsx("button",{role:"tab","aria-selected":v.active,onClick:v.onSelect,className:"whitespace-nowrap rounded-full py-1.5 pl-3 pr-1.5",children:v.label}),i.jsx("button",{onClick:v.onClose,"aria-label":v.closeLabel,title:v.closeLabel,className:"t-all mr-1 flex h-6 w-6 items-center justify-center rounded-full text-muted hover:bg-line hover:text-ink",children:i.jsx(et,{size:13,"aria-hidden":!0})})]},v.id))]}):i.jsx("h2",{className:"eyebrow min-w-0 flex-1 truncate text-ink",children:t}),d??(l?i.jsxs("div",{ref:f,className:"relative",children:[i.jsxs("button",{onClick:()=>g(v=>!v),"aria-haspopup":"listbox","aria-expanded":p,"aria-label":e.model,className:"t-all flex items-center gap-2 rounded-full border border-line bg-elevated px-3.5 py-1.5 text-[13px] hover:border-rule",children:[i.jsx("span",{className:"h-2 w-2 rounded-full bg-vermillion","aria-hidden":!0}),i.jsx("span",{className:"font-semibold text-ink",children:e.models[n].name}),i.jsxs("span",{className:"hidden font-light text-muted lg:inline",children:["(",e.models[n].hint,")"]}),i.jsx(Zn,{size:15,className:`t-all text-muted ${p?"rotate-180":""}`,"aria-hidden":!0})]}),p&&i.jsx("ul",{role:"listbox","aria-label":e.model,className:"rise absolute right-0 top-full z-20 mt-2 w-[min(320px,calc(100vw-1.5rem))] rounded-3xl border border-rule bg-elevated p-1.5",children:hg.map(v=>i.jsx("li",{role:"option","aria-selected":v===n,children:i.jsxs("button",{onClick:()=>{r(v),g(!1)},className:"t-all flex w-full items-start gap-3 rounded-2xl px-3 py-2.5 text-left hover:bg-surface-2",children:[i.jsxs("span",{className:"min-w-0 flex-1",children:[i.jsxs("span",{className:"block text-sm font-semibold text-ink",children:[e.models[v].name," ",i.jsxs("span",{className:"font-normal text-muted",children:["· ",e.models[v].hint]})]}),i.jsx("span",{className:"mt-0.5 block text-xs font-light text-muted",children:e.models[v].desc})]}),v===n&&i.jsx(jt,{size:16,className:"mt-0.5 shrink-0 text-accent-text","aria-hidden":!0})]})},v))})]}):null)]})}const gg={profile:Ps,ai:Oh,impact:ka,search:md,portfoliods:fd};function vg({lang:e,t,onPick:n}){const[r,s]=t.heroTitle.split(re.name),[,a,o]=r.match(/^(.*\s)(\S+['’])$/s)??[null,r,""],[,l="",u=""]=s.match(/^(['’]s)?\s*(.*)$/s)??[],d=/^[.!?…]*$/.test(u);return i.jsxs("div",{className:"mx-auto flex min-h-full w-full max-w-4xl flex-col justify-center px-5 py-8 sm:px-10 sm:py-12",children:[i.jsxs("div",{className:"rise",children:[i.jsxs("h1",{className:"text-ink",children:[i.jsx("span",{className:"block text-[clamp(1.2rem,2.5vw,1.7rem)] font-light leading-snug",children:a.trim()}),i.jsxs("span",{className:"mt-2 block font-display text-[clamp(2.3rem,6vw,4rem)] font-semibold leading-[1.08] tracking-[-0.035em]",children:[o&&i.jsx("span",{className:"font-light",children:o}),re.name,l&&i.jsx("span",{className:"font-light",children:l}),d&&i.jsx("span",{className:"text-vermillion",children:u})]}),!d&&i.jsx("span",{className:"mt-3 block text-[clamp(1.2rem,2.5vw,1.7rem)] font-light leading-snug",children:u})]}),i.jsx("p",{className:"mt-6 max-w-xl text-[15px] font-light leading-relaxed text-muted sm:text-base",children:t.heroSubtitle})]}),i.jsx("div",{className:"mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2",children:t.suggestions.map((p,g)=>{const f=gg[p.intentId]??Eh;return i.jsxs("button",{onClick:()=>n(p.intentId),style:{animationDelay:`${120+g*70}ms`},className:`rise t-all group flex flex-col gap-3 rounded-3xl border border-line bg-elevated p-5 text-left hover:-translate-y-0.5 hover:border-rule ${g===t.suggestions.length-1&&t.suggestions.length%2===1?"sm:col-span-2":""}`,children:[i.jsxs("span",{className:"flex items-center gap-3",children:[i.jsx("span",{className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-tint text-accent-text",children:i.jsx(f,{size:15,"aria-hidden":!0})}),i.jsx("span",{className:"eyebrow flex-1 font-semibold text-ink",children:p.title}),i.jsx(xr,{size:15,className:"t-all shrink-0 text-muted group-hover:text-ink","aria-hidden":!0})]}),i.jsx("span",{className:"text-[14.5px] font-light leading-relaxed text-ink",children:Bt(p.intentId).question[e]})]},p.intentId)})})]})}const xg={fr:{role:"Product Designer · AI & Design Ops",newChat:"Nouvelle conversation",caseStudies:"Projets professionnels",personalProjects:"Projets personnels",dsProject:{title:"Portfolio · Design System automatisé avec l’IA",tag:"2026 · Skill IA · Claude Code"},quickAccess:"Accès rapide et contact",viewCV:"Voir et télécharger le CV",contactEmail:"Contacter par email",language:"Langue",theme:"Thème",light:"Light",dark:"Dark",openMenu:"Ouvrir le menu",closeMenu:"Fermer le menu",toggleSidebar:"Afficher / masquer la barre latérale",newSession:"Nouvelle conversation",model:"Niveau de détail",models:{standard:{name:"ASL Complet",hint:"La réponse structurée",desc:"Contexte, rôle, solution et résultats."},express:{name:"ASL Court",hint:"L’essentiel",desc:"Quelques points et les chiffres clés."},deepdive:{name:"ASL Détaillé",hint:"Avec la méthode",desc:"La réponse complète, plus la méthode de travail."}},heroTitle:"Bonjour, je suis l'assistant portfolio d'Anne-Sophie Leroy.",heroSubtitle:"Product Designer spécialisée en UX/UI, Design Ops et workflows IA. Posez-moi une question sur son parcours, ses projets chez BNP Paribas ou sa façon d’industrialiser le design.",suggestions:[{title:"Profil et valeur ajoutée",intentId:"profile"},{title:"Un Design System lisible par l’IA",intentId:"portfoliods"},{title:"Impact et chiffres clés",intentId:"impact"},{title:"Recherche actuelle",intentId:"search"}],placeholders:["Posez une question sur Anne-Sophie, ses AI skills, son parcours...","Ex. : « Comment son équipe design travaille-t-elle avec l’IA ? »","Tapez / pour les commandes : /cv, /projets, /skills, /contact, /stack"],send:"Envoyer",stop:"Arrêter la génération",commands:"Commandes",slash:[{cmd:"/cv",desc:"Son CV"},{cmd:"/projets",desc:"Lister les projets"},{cmd:"/skills",desc:"Compétences clés"},{cmd:"/contact",desc:"Écrire à Anne-Sophie"},{cmd:"/stack",desc:"Outils et stack"},{cmd:"/designsystem",desc:"Le Design System de ce portfolio"}],stopped:"Génération interrompue",thinking:"Réflexion en cours",followUps:"Pour aller plus loin",actionCV:"Voir le CV",actionEmail:"Envoyer un email",close:"Fermer",cv:{title:"Curriculum Vitae",tab:"CV",closeTab:"Fermer le CV",download:"Télécharger en PDF",downloadHint:"Si le PDF n’est pas disponible, la fenêtre d’impression s’ouvre : choisissez « Enregistrer au format PDF ».",experience:"Expériences",skills:"Compétences et outils",education:"Formations et certifications",languages:"Langues",interests:"Engagements et intérêts"},emailSubject:"Opportunité Product Designer",skill:{badge:"Skill réel",caption:"Le skill qui encadre le design de ce portfolio, conçu et testé par Anne-Sophie avec Claude Code. Fichiers réels du projet.",copy:"Copier",copied:"Copié !"},assistantName:"Assistant ASL",you:"Vous"},en:{role:"Product Designer · AI & Design Ops",newChat:"New conversation",caseStudies:"Work projects",personalProjects:"Personal projects",dsProject:{title:"Portfolio · AI-automated Design System",tag:"2026 · AI skill · Claude Code"},quickAccess:"Quick access and contact",viewCV:"View and download the CV",contactEmail:"Contact by email",language:"Language",theme:"Theme",light:"Light",dark:"Dark",openMenu:"Open menu",closeMenu:"Close menu",toggleSidebar:"Show / hide sidebar",newSession:"New conversation",model:"Level of detail",models:{standard:{name:"ASL Full",hint:"The structured answer",desc:"Context, role, solution and results."},express:{name:"ASL Short",hint:"The essentials",desc:"A few points and the key figures."},deepdive:{name:"ASL In-depth",hint:"With the method",desc:"The full answer, plus the working method."}},heroTitle:"Hello, I'm Anne-Sophie Leroy's portfolio assistant.",heroSubtitle:"Product Designer specialising in UX/UI, Design Ops and AI workflows. Ask me about her background, her projects at BNP Paribas or how she industrialises design.",suggestions:[{title:"Profile and added value",intentId:"profile"},{title:"An AI-readable Design System",intentId:"portfoliods"},{title:"Impact and key figures",intentId:"impact"},{title:"Current search",intentId:"search"}],placeholders:["Ask about Anne-Sophie, her AI skills, her background...","E.g. “How does her design team work with AI?”","Type / for commands: /cv, /projects, /skills, /contact, /stack"],send:"Send",stop:"Stop generating",commands:"Commands",slash:[{cmd:"/cv",desc:"Her CV"},{cmd:"/projects",desc:"List the projects"},{cmd:"/skills",desc:"Key skills"},{cmd:"/contact",desc:"Write to Anne-Sophie"},{cmd:"/stack",desc:"Tools and stack"},{cmd:"/designsystem",desc:"This portfolio’s Design System"}],stopped:"Generation stopped",thinking:"Thinking",followUps:"Go further",actionCV:"View CV",actionEmail:"Send an email",close:"Close",cv:{title:"Curriculum Vitae",tab:"CV",closeTab:"Close the CV",download:"Download as PDF",downloadHint:"If the PDF is not available, the print dialog opens: choose “Save as PDF”.",experience:"Experience",skills:"Skills and tools",education:"Education and certifications",languages:"Languages",interests:"Commitments and interests"},emailSubject:"Product Designer opportunity",skill:{badge:"Real skill",caption:"The skill that frames this portfolio’s design, designed and tested by Anne-Sophie with Claude Code. Real project files (in French).",copy:"Copy",copied:"Copied!"},assistantName:"ASL Assistant",you:"You"}},yg=450,bg=30,wg=2;function kg(e,t){const[n,r]=C.useState([]),[s,a]=C.useState(null),o=C.useRef(),l=C.useRef(0),u=C.useRef(e);u.current=e;const d=()=>{window.clearTimeout(o.current),window.clearInterval(o.current)};C.useEffect(()=>d,[]);const p=C.useCallback((y,k)=>{d();const m=`m${++l.current}`,c=`m${++l.current}`;r(h=>[...h,{id:m,role:"user",...y},{id:c,role:"assistant",intentId:k,model:t}]),a({id:c,count:0}),o.current=window.setTimeout(()=>{o.current=window.setInterval(()=>{a(h=>{if(!h||h.id!==c)return h;const b=Ld(Ed(k,u.current,t)).length,S=h.count+wg;return S>=b?(d(),null):{id:c,count:S}})},bg)},yg)},[t]),g=C.useCallback(y=>{const k=ff(y);return p({text:y},k),k},[p]),f=C.useCallback(y=>p({questionOf:y},y),[p]),v=C.useCallback(()=>{d(),a(y=>(y&&r(k=>k.map(m=>m.id===y.id&&m.role==="assistant"?{...m,stoppedAt:y.count}:m)),null))},[]),x=C.useCallback(()=>{d(),a(null),r([])},[]);return{messages:n,stream:s,isStreaming:s!==null,askText:g,askIntent:f,stop:v,reset:x}}const Xl="asl-lang";function jg(){const[e,t]=C.useState(()=>{try{const n=localStorage.getItem(Xl);if(n==="fr"||n==="en")return n}catch{}return"fr"});return C.useEffect(()=>{document.documentElement.lang=e;try{localStorage.setItem(Xl,e)}catch{}},[e]),[e,t]}const Kl="asl-theme";function Sg(){const[e,t]=C.useState(()=>{try{return localStorage.getItem(Kl)==="dark"?"dark":"light"}catch{return"light"}});return C.useEffect(()=>{document.documentElement.dataset.theme=e;try{localStorage.setItem(Kl,e)}catch{}},[e]),[e,t]}const Ql=[...Ca,...Aa],Qd="#design-system",Zl=()=>window.location.hash===Qd;function Cg(){const[e,t]=jg(),[n,r]=Sg(),[s,a]=C.useState("standard"),[o,l]=C.useState(()=>Zl()?["ds"]:[]),[u,d]=C.useState(()=>Zl()?"ds":"chat"),[p,g]=C.useState(!1),[f,v]=C.useState(!1),[x,y]=C.useState(null),[k,m]=C.useState(null),c=xg[e],h=kg(e,s),b=C.useRef(null),S=C.useRef(!0);C.useEffect(()=>{const P=b.current;P&&(h.messages.length===0?P.scrollTop=0:S.current&&(P.scrollTop=P.scrollHeight))},[h.messages,h.stream]),C.useEffect(()=>{const P=u==="ds"?Qd:window.location.pathname+window.location.search;window.history.replaceState(null,"",P)},[u]);const D=()=>{const P=b.current;P&&(S.current=P.scrollHeight-P.scrollTop-P.clientHeight<120)},j=C.useCallback(P=>{g(!1),l(Z=>Z.includes(P)?Z:[...Z,P]),d(P)},[]),I=C.useCallback(P=>{l(Z=>Z.filter(ce=>ce!==P)),d(Z=>Z===P?"chat":Z)},[]),_=C.useCallback(()=>j("cv"),[j]),L=C.useCallback(()=>j("ds"),[j]),we=C.useCallback(P=>m(P),[]),Pt=C.useCallback(()=>m(null),[]),ot=()=>{g(!1),window.location.href=`mailto:${re.email}?subject=${encodeURIComponent(c.emailSubject)}`},Cr=()=>{h.reset(),d("chat"),y(null),g(!1)},Ks=P=>{const Z=Ql.find(In=>In.id===P);if(!Z)return;d("chat"),h.reset();const ce=Bt(Z.intentId);S.current=!(ce.flow||ce.anchors),y(P),g(!1),h.askIntent(Z.intentId)},Nn=P=>{S.current=!0,h.askText(P)},Kt=P=>{d("chat"),S.current=!0,h.askIntent(P)},A=P=>P==="cv"?_():ot(),q=h.messages[0],E=x?Ql.find(P=>P.id===x).title[e]:(q==null?void 0:q.role)==="user"?q.text??Bt(q.questionOf??"").question[e]:c.newSession,V={cv:c.cv.tab,ds:Yn[e].title};return i.jsxs("div",{className:"relative flex h-dvh overflow-hidden bg-bg text-ink",children:[i.jsx(mg,{t:c,lang:e,theme:n,open:p,collapsed:f,activeProject:u==="chat"?x:null,onClose:()=>g(!1),onNew:Cr,onProject:Ks,onDesignSystem:L,designSystemActive:u==="ds",onCV:_,onEmail:ot,setLang:t,setTheme:r}),i.jsxs("main",{className:"relative z-10 flex min-w-0 flex-1 flex-col",children:[i.jsx(fg,{t:c,title:E,model:s,setModel:a,onMenu:()=>g(!0),onToggleSidebar:()=>v(P=>!P),chatActive:u==="chat",onSelectChat:()=>d("chat"),docTabs:o.map(P=>({id:P,label:V[P],active:u===P,closeLabel:`${c.close} — ${V[P]}`,onSelect:()=>d(P),onClose:()=>I(P)})),docAction:u==="cv"?i.jsxs("button",{onClick:ng,className:"btn-primary !px-4 !py-2",title:c.cv.downloadHint,children:[i.jsx("span",{className:"hidden sm:inline",children:c.cv.download}),i.jsx("span",{className:"sm:hidden",children:"PDF"}),i.jsx(Dh,{size:16,"aria-hidden":!0})]}):void 0}),u==="ds"?i.jsx(cg,{lang:e,t:c}):i.jsx("div",{ref:b,onScroll:D,className:"relative z-10 min-h-0 flex-1 overflow-y-auto overflow-x-hidden",children:u==="cv"?i.jsx(rg,{t:c,lang:e}):h.messages.length===0?i.jsx(vg,{lang:e,t:c,onPick:Kt}):i.jsx("div",{role:"log",className:"mx-auto w-full max-w-3xl space-y-7 px-4 py-8 sm:px-6",children:h.messages.map((P,Z)=>{var ce;return i.jsx(Xf,{message:P,lang:e,t:c,streamCount:((ce=h.stream)==null?void 0:ce.id)===P.id?h.stream.count:null,isLast:Z===h.messages.length-1,onAction:A,onFollowUp:Kt,onOpenPrototype:we,onOpenDesignSystem:L},P.id)})})}),u==="chat"&&i.jsx(Hd,{t:c,isStreaming:h.isStreaming,onSend:Nn,onStop:h.stop})]}),k&&i.jsx(dg,{src:tf,title:ge[e].viewerTitle,note:ge[e].viewerNote,restartLabel:ge[e].restart,desktopHint:ge[e].desktopHint,closeLabel:c.close,onClose:Pt})]})}Ii.createRoot(document.getElementById("root")).render(i.jsx(mp.StrictMode,{children:i.jsx(Cg,{})}));
