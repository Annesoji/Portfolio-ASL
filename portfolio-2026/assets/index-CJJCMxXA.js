(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function zd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ol={exports:{}},As={},Bl={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gr=Symbol.for("react.element"),Ud=Symbol.for("react.portal"),Rd=Symbol.for("react.fragment"),Fd=Symbol.for("react.strict_mode"),Md=Symbol.for("react.profiler"),_d=Symbol.for("react.provider"),Od=Symbol.for("react.context"),Bd=Symbol.for("react.forward_ref"),$d=Symbol.for("react.suspense"),Vd=Symbol.for("react.memo"),Gd=Symbol.for("react.lazy"),ya=Symbol.iterator;function Wd(e){return e===null||typeof e!="object"?null:(e=ya&&e[ya]||e["@@iterator"],typeof e=="function"?e:null)}var $l={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vl=Object.assign,Gl={};function Sn(e,t,n){this.props=e,this.context=t,this.refs=Gl,this.updater=n||$l}Sn.prototype.isReactComponent={};Sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Wl(){}Wl.prototype=Sn.prototype;function wo(e,t,n){this.props=e,this.context=t,this.refs=Gl,this.updater=n||$l}var ko=wo.prototype=new Wl;ko.constructor=wo;Vl(ko,Sn.prototype);ko.isPureReactComponent=!0;var ba=Array.isArray,Hl=Object.prototype.hasOwnProperty,jo={current:null},Xl={key:!0,ref:!0,__self:!0,__source:!0};function Kl(e,t,n){var r,s={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Hl.call(t,r)&&!Xl.hasOwnProperty(r)&&(s[r]=t[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];s.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:gr,type:e,key:o,ref:a,props:s,_owner:jo.current}}function Hd(e,t){return{$$typeof:gr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function So(e){return typeof e=="object"&&e!==null&&e.$$typeof===gr}function Xd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var wa=/\/+/g;function Gs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xd(""+e.key):t.toString(36)}function Br(e,t,n,r,s){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case gr:case Ud:a=!0}}if(a)return a=e,s=s(a),e=r===""?"."+Gs(a,0):r,ba(s)?(n="",e!=null&&(n=e.replace(wa,"$&/")+"/"),Br(s,t,n,"",function(d){return d})):s!=null&&(So(s)&&(s=Hd(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(wa,"$&/")+"/")+e)),t.push(s)),1;if(a=0,r=r===""?".":r+":",ba(e))for(var l=0;l<e.length;l++){o=e[l];var u=r+Gs(o,l);a+=Br(o,t,n,u,s)}else if(u=Wd(e),typeof u=="function")for(e=u.call(e),l=0;!(o=e.next()).done;)o=o.value,u=r+Gs(o,l++),a+=Br(o,t,n,u,s);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Sr(e,t,n){if(e==null)return e;var r=[],s=0;return Br(e,r,"","",function(o){return t.call(n,o,s++)}),r}function Kd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},$r={transition:null},Qd={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:$r,ReactCurrentOwner:jo};function Ql(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:Sr,forEach:function(e,t,n){Sr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Sr(e,function(){t++}),t},toArray:function(e){return Sr(e,function(t){return t})||[]},only:function(e){if(!So(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=Sn;z.Fragment=Rd;z.Profiler=Md;z.PureComponent=wo;z.StrictMode=Fd;z.Suspense=$d;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qd;z.act=Ql;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vl({},e.props),s=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=jo.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)Hl.call(t,u)&&!Xl.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:gr,type:e.type,key:s,ref:o,props:r,_owner:a}};z.createContext=function(e){return e={$$typeof:Od,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_d,_context:e},e.Consumer=e};z.createElement=Kl;z.createFactory=function(e){var t=Kl.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Bd,render:e}};z.isValidElement=So;z.lazy=function(e){return{$$typeof:Gd,_payload:{_status:-1,_result:e},_init:Kd}};z.memo=function(e,t){return{$$typeof:Vd,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=$r.transition;$r.transition={};try{e()}finally{$r.transition=t}};z.unstable_act=Ql;z.useCallback=function(e,t){return pe.current.useCallback(e,t)};z.useContext=function(e){return pe.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};z.useEffect=function(e,t){return pe.current.useEffect(e,t)};z.useId=function(){return pe.current.useId()};z.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return pe.current.useMemo(e,t)};z.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};z.useRef=function(e){return pe.current.useRef(e)};z.useState=function(e){return pe.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return pe.current.useTransition()};z.version="18.3.1";Bl.exports=z;var C=Bl.exports;const Jd=zd(C);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd=C,Zd=Symbol.for("react.element"),ep=Symbol.for("react.fragment"),tp=Object.prototype.hasOwnProperty,np=Yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rp={key:!0,ref:!0,__self:!0,__source:!0};function Jl(e,t,n){var r,s={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)tp.call(t,r)&&!rp.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:Zd,type:e,key:o,ref:a,props:s,_owner:np.current}}As.Fragment=ep;As.jsx=Jl;As.jsxs=Jl;Ol.exports=As;var i=Ol.exports,ki={},Yl={exports:{}},Ae={},Zl={exports:{}},eu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,E){var L=N.length;N.push(E);e:for(;0<L;){var $=L-1>>>1,D=N[$];if(0<s(D,E))N[$]=E,N[L]=D,L=$;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var E=N[0],L=N.pop();if(L!==E){N[0]=L;e:for(var $=0,D=N.length,J=D>>>1;$<J;){var fe=2*($+1)-1,Vs=N[fe],Dt=fe+1,jr=N[Dt];if(0>s(Vs,L))Dt<D&&0>s(jr,Vs)?(N[$]=jr,N[Dt]=L,$=Dt):(N[$]=Vs,N[fe]=L,$=fe);else if(Dt<D&&0>s(jr,L))N[$]=jr,N[Dt]=L,$=Dt;else break e}}return E}function s(N,E){var L=N.sortIndex-E.sortIndex;return L!==0?L:N.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],d=[],f=1,g=null,h=3,x=!1,v=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var E=n(d);E!==null;){if(E.callback===null)r(d);else if(E.startTime<=N)r(d),E.sortIndex=E.expirationTime,t(u,E);else break;E=n(d)}}function b(N){if(y=!1,m(N),!v)if(n(u)!==null)v=!0,An(S);else{var E=n(d);E!==null&&Xt(b,E.startTime-N)}}function S(N,E){v=!1,y&&(y=!1,p(I),I=-1),x=!0;var L=h;try{for(m(E),g=n(u);g!==null&&(!(g.expirationTime>E)||N&&!we());){var $=g.callback;if(typeof $=="function"){g.callback=null,h=g.priorityLevel;var D=$(g.expirationTime<=E);E=e.unstable_now(),typeof D=="function"?g.callback=D:g===n(u)&&r(u),m(E)}else r(u);g=n(u)}if(g!==null)var J=!0;else{var fe=n(d);fe!==null&&Xt(b,fe.startTime-E),J=!1}return J}finally{g=null,h=L,x=!1}}var P=!1,j=null,I=-1,B=5,q=-1;function we(){return!(e.unstable_now()-q<B)}function It(){if(j!==null){var N=e.unstable_now();q=N;var E=!0;try{E=j(!0,N)}finally{E?ot():(P=!1,j=null)}}else P=!1}var ot;if(typeof c=="function")ot=function(){c(It)};else if(typeof MessageChannel<"u"){var kr=new MessageChannel,$s=kr.port2;kr.port1.onmessage=It,ot=function(){$s.postMessage(null)}}else ot=function(){k(It,0)};function An(N){j=N,P||(P=!0,ot())}function Xt(N,E){I=k(function(){N(e.unstable_now())},E)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,An(S))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var E=3;break;default:E=h}var L=h;h=E;try{return N()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,E){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=h;h=N;try{return E()}finally{h=L}},e.unstable_scheduleCallback=function(N,E,L){var $=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?$+L:$):L=$,N){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=L+D,N={id:f++,callback:E,priorityLevel:N,startTime:L,expirationTime:D,sortIndex:-1},L>$?(N.sortIndex=L,t(d,N),n(u)===null&&N===n(d)&&(y?(p(I),I=-1):y=!0,Xt(b,L-$))):(N.sortIndex=D,t(u,N),v||x||(v=!0,An(S))),N},e.unstable_shouldYield=we,e.unstable_wrapCallback=function(N){var E=h;return function(){var L=h;h=E;try{return N.apply(this,arguments)}finally{h=L}}}})(eu);Zl.exports=eu;var sp=Zl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip=C,Ne=sp;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tu=new Set,Yn={};function Wt(e,t){gn(e,t),gn(e+"Capture",t)}function gn(e,t){for(Yn[e]=t,e=0;e<t.length;e++)tu.add(t[e])}var tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ji=Object.prototype.hasOwnProperty,op=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ka={},ja={};function ap(e){return ji.call(ja,e)?!0:ji.call(ka,e)?!1:op.test(e)?ja[e]=!0:(ka[e]=!0,!1)}function lp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function up(e,t,n,r){if(t===null||typeof t>"u"||lp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,s,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var Co=/[\-:]([a-z])/g;function No(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Co,No);ie[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Co,No);ie[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Co,No);ie[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ao(e,t,n,r){var s=ie.hasOwnProperty(t)?ie[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(up(t,n,s,r)&&(n=null),r||s===null?ap(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var it=ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cr=Symbol.for("react.element"),Jt=Symbol.for("react.portal"),Yt=Symbol.for("react.fragment"),Io=Symbol.for("react.strict_mode"),Si=Symbol.for("react.profiler"),nu=Symbol.for("react.provider"),ru=Symbol.for("react.context"),Do=Symbol.for("react.forward_ref"),Ci=Symbol.for("react.suspense"),Ni=Symbol.for("react.suspense_list"),Po=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),su=Symbol.for("react.offscreen"),Sa=Symbol.iterator;function In(e){return e===null||typeof e!="object"?null:(e=Sa&&e[Sa]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Ws;function Rn(e){if(Ws===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ws=t&&t[1]||""}return`
`+Ws+e}var Hs=!1;function Xs(e,t){if(!e||Hs)return"";Hs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),o=r.stack.split(`
`),a=s.length-1,l=o.length-1;1<=a&&0<=l&&s[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(s[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||s[a]!==o[l]){var u=`
`+s[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=l);break}}}finally{Hs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rn(e):""}function cp(e){switch(e.tag){case 5:return Rn(e.type);case 16:return Rn("Lazy");case 13:return Rn("Suspense");case 19:return Rn("SuspenseList");case 0:case 2:case 15:return e=Xs(e.type,!1),e;case 11:return e=Xs(e.type.render,!1),e;case 1:return e=Xs(e.type,!0),e;default:return""}}function Ai(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yt:return"Fragment";case Jt:return"Portal";case Si:return"Profiler";case Io:return"StrictMode";case Ci:return"Suspense";case Ni:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ru:return(e.displayName||"Context")+".Consumer";case nu:return(e._context.displayName||"Context")+".Provider";case Do:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Po:return t=e.displayName||null,t!==null?t:Ai(e.type)||"Memo";case lt:t=e._payload,e=e._init;try{return Ai(e(t))}catch{}}return null}function dp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ai(t);case 8:return t===Io?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function iu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pp(e){var t=iu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nr(e){e._valueTracker||(e._valueTracker=pp(e))}function ou(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=iu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function es(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ii(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ca(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=jt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function au(e,t){t=t.checked,t!=null&&Ao(e,"checked",t,!1)}function Di(e,t){au(e,t);var n=jt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pi(e,t.type,jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Na(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Pi(e,t,n){(t!=="number"||es(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fn=Array.isArray;function cn(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+jt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Ei(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Aa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(Fn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:jt(n)}}function lu(e,t){var n=jt(t.value),r=jt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ia(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function uu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ti(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?uu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ar,cu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ar=Ar||document.createElement("div"),Ar.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ar.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mp=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(e){mp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),On[t]=On[e]})});function du(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||On.hasOwnProperty(e)&&On[e]?(""+t).trim():t+"px"}function pu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=du(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var fp=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Li(e,t){if(t){if(fp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function qi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zi=null;function Eo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ui=null,dn=null,pn=null;function Da(e){if(e=yr(e)){if(typeof Ui!="function")throw Error(w(280));var t=e.stateNode;t&&(t=Ts(t),Ui(e.stateNode,e.type,t))}}function mu(e){dn?pn?pn.push(e):pn=[e]:dn=e}function fu(){if(dn){var e=dn,t=pn;if(pn=dn=null,Da(e),t)for(e=0;e<t.length;e++)Da(t[e])}}function hu(e,t){return e(t)}function gu(){}var Ks=!1;function xu(e,t,n){if(Ks)return e(t,n);Ks=!0;try{return hu(e,t,n)}finally{Ks=!1,(dn!==null||pn!==null)&&(gu(),fu())}}function er(e,t){var n=e.stateNode;if(n===null)return null;var r=Ts(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var Ri=!1;if(tt)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){Ri=!0}}),window.addEventListener("test",Dn,Dn),window.removeEventListener("test",Dn,Dn)}catch{Ri=!1}function hp(e,t,n,r,s,o,a,l,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(f){this.onError(f)}}var Bn=!1,ts=null,ns=!1,Fi=null,gp={onError:function(e){Bn=!0,ts=e}};function xp(e,t,n,r,s,o,a,l,u){Bn=!1,ts=null,hp.apply(gp,arguments)}function vp(e,t,n,r,s,o,a,l,u){if(xp.apply(this,arguments),Bn){if(Bn){var d=ts;Bn=!1,ts=null}else throw Error(w(198));ns||(ns=!0,Fi=d)}}function Ht(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function vu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Pa(e){if(Ht(e)!==e)throw Error(w(188))}function yp(e){var t=e.alternate;if(!t){if(t=Ht(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var o=s.alternate;if(o===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===n)return Pa(s),e;if(o===r)return Pa(s),t;o=o.sibling}throw Error(w(188))}if(n.return!==r.return)n=s,r=o;else{for(var a=!1,l=s.child;l;){if(l===n){a=!0,n=s,r=o;break}if(l===r){a=!0,r=s,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=s;break}if(l===r){a=!0,r=o,n=s;break}l=l.sibling}if(!a)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function yu(e){return e=yp(e),e!==null?bu(e):null}function bu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bu(e);if(t!==null)return t;e=e.sibling}return null}var wu=Ne.unstable_scheduleCallback,Ea=Ne.unstable_cancelCallback,bp=Ne.unstable_shouldYield,wp=Ne.unstable_requestPaint,K=Ne.unstable_now,kp=Ne.unstable_getCurrentPriorityLevel,To=Ne.unstable_ImmediatePriority,ku=Ne.unstable_UserBlockingPriority,rs=Ne.unstable_NormalPriority,jp=Ne.unstable_LowPriority,ju=Ne.unstable_IdlePriority,Is=null,He=null;function Sp(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Is,e,void 0,(e.current.flags&128)===128)}catch{}}var _e=Math.clz32?Math.clz32:Ap,Cp=Math.log,Np=Math.LN2;function Ap(e){return e>>>=0,e===0?32:31-(Cp(e)/Np|0)|0}var Ir=64,Dr=4194304;function Mn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ss(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~s;l!==0?r=Mn(l):(o&=a,o!==0&&(r=Mn(o)))}else a=n&~s,a!==0?r=Mn(a):o!==0&&(r=Mn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,o=t&-t,s>=o||s===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-_e(t),s=1<<n,r|=e[n],t&=~s;return r}function Ip(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-_e(o),l=1<<a,u=s[a];u===-1?(!(l&n)||l&r)&&(s[a]=Ip(l,t)):u<=t&&(e.expiredLanes|=l),o&=~l}}function Mi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Su(){var e=Ir;return Ir<<=1,!(Ir&4194240)&&(Ir=64),e}function Qs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_e(t),e[t]=n}function Pp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-_e(n),o=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~o}}function Lo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-_e(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var F=0;function Cu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Nu,qo,Au,Iu,Du,_i=!1,Pr=[],ft=null,ht=null,gt=null,tr=new Map,nr=new Map,ct=[],Ep="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ta(e,t){switch(e){case"focusin":case"focusout":ft=null;break;case"dragenter":case"dragleave":ht=null;break;case"mouseover":case"mouseout":gt=null;break;case"pointerover":case"pointerout":tr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":nr.delete(t.pointerId)}}function Pn(e,t,n,r,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[s]},t!==null&&(t=yr(t),t!==null&&qo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Tp(e,t,n,r,s){switch(t){case"focusin":return ft=Pn(ft,e,t,n,r,s),!0;case"dragenter":return ht=Pn(ht,e,t,n,r,s),!0;case"mouseover":return gt=Pn(gt,e,t,n,r,s),!0;case"pointerover":var o=s.pointerId;return tr.set(o,Pn(tr.get(o)||null,e,t,n,r,s)),!0;case"gotpointercapture":return o=s.pointerId,nr.set(o,Pn(nr.get(o)||null,e,t,n,r,s)),!0}return!1}function Pu(e){var t=qt(e.target);if(t!==null){var n=Ht(t);if(n!==null){if(t=n.tag,t===13){if(t=vu(n),t!==null){e.blockedOn=t,Du(e.priority,function(){Au(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Oi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);zi=r,n.target.dispatchEvent(r),zi=null}else return t=yr(n),t!==null&&qo(t),e.blockedOn=n,!1;t.shift()}return!0}function La(e,t,n){Vr(e)&&n.delete(t)}function Lp(){_i=!1,ft!==null&&Vr(ft)&&(ft=null),ht!==null&&Vr(ht)&&(ht=null),gt!==null&&Vr(gt)&&(gt=null),tr.forEach(La),nr.forEach(La)}function En(e,t){e.blockedOn===t&&(e.blockedOn=null,_i||(_i=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,Lp)))}function rr(e){function t(s){return En(s,e)}if(0<Pr.length){En(Pr[0],e);for(var n=1;n<Pr.length;n++){var r=Pr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ft!==null&&En(ft,e),ht!==null&&En(ht,e),gt!==null&&En(gt,e),tr.forEach(t),nr.forEach(t),n=0;n<ct.length;n++)r=ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ct.length&&(n=ct[0],n.blockedOn===null);)Pu(n),n.blockedOn===null&&ct.shift()}var mn=it.ReactCurrentBatchConfig,is=!0;function qp(e,t,n,r){var s=F,o=mn.transition;mn.transition=null;try{F=1,zo(e,t,n,r)}finally{F=s,mn.transition=o}}function zp(e,t,n,r){var s=F,o=mn.transition;mn.transition=null;try{F=4,zo(e,t,n,r)}finally{F=s,mn.transition=o}}function zo(e,t,n,r){if(is){var s=Oi(e,t,n,r);if(s===null)oi(e,t,r,os,n),Ta(e,r);else if(Tp(s,e,t,n,r))r.stopPropagation();else if(Ta(e,r),t&4&&-1<Ep.indexOf(e)){for(;s!==null;){var o=yr(s);if(o!==null&&Nu(o),o=Oi(e,t,n,r),o===null&&oi(e,t,r,os,n),o===s)break;s=o}s!==null&&r.stopPropagation()}else oi(e,t,r,null,n)}}var os=null;function Oi(e,t,n,r){if(os=null,e=Eo(r),e=qt(e),e!==null)if(t=Ht(e),t===null)e=null;else if(n=t.tag,n===13){if(e=vu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return os=e,null}function Eu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kp()){case To:return 1;case ku:return 4;case rs:case jp:return 16;case ju:return 536870912;default:return 16}default:return 16}}var pt=null,Uo=null,Gr=null;function Tu(){if(Gr)return Gr;var e,t=Uo,n=t.length,r,s="value"in pt?pt.value:pt.textContent,o=s.length;for(e=0;e<n&&t[e]===s[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===s[o-r];r++);return Gr=s.slice(e,1<r?1-r:void 0)}function Wr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Er(){return!0}function qa(){return!1}function Ie(e){function t(n,r,s,o,a){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Er:qa,this.isPropagationStopped=qa,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ro=Ie(Cn),vr=H({},Cn,{view:0,detail:0}),Up=Ie(vr),Js,Ys,Tn,Ds=H({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tn&&(Tn&&e.type==="mousemove"?(Js=e.screenX-Tn.screenX,Ys=e.screenY-Tn.screenY):Ys=Js=0,Tn=e),Js)},movementY:function(e){return"movementY"in e?e.movementY:Ys}}),za=Ie(Ds),Rp=H({},Ds,{dataTransfer:0}),Fp=Ie(Rp),Mp=H({},vr,{relatedTarget:0}),Zs=Ie(Mp),_p=H({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),Op=Ie(_p),Bp=H({},Cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$p=Ie(Bp),Vp=H({},Cn,{data:0}),Ua=Ie(Vp),Gp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hp[e])?!!t[e]:!1}function Fo(){return Xp}var Kp=H({},vr,{key:function(e){if(e.key){var t=Gp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fo,charCode:function(e){return e.type==="keypress"?Wr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qp=Ie(Kp),Jp=H({},Ds,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ra=Ie(Jp),Yp=H({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fo}),Zp=Ie(Yp),em=H({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),tm=Ie(em),nm=H({},Ds,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rm=Ie(nm),sm=[9,13,27,32],Mo=tt&&"CompositionEvent"in window,$n=null;tt&&"documentMode"in document&&($n=document.documentMode);var im=tt&&"TextEvent"in window&&!$n,Lu=tt&&(!Mo||$n&&8<$n&&11>=$n),Fa=" ",Ma=!1;function qu(e,t){switch(e){case"keyup":return sm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zt=!1;function om(e,t){switch(e){case"compositionend":return zu(t);case"keypress":return t.which!==32?null:(Ma=!0,Fa);case"textInput":return e=t.data,e===Fa&&Ma?null:e;default:return null}}function am(e,t){if(Zt)return e==="compositionend"||!Mo&&qu(e,t)?(e=Tu(),Gr=Uo=pt=null,Zt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lu&&t.locale!=="ko"?null:t.data;default:return null}}var lm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _a(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lm[e.type]:t==="textarea"}function Uu(e,t,n,r){mu(r),t=as(t,"onChange"),0<t.length&&(n=new Ro("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vn=null,sr=null;function um(e){Hu(e,0)}function Ps(e){var t=nn(e);if(ou(t))return e}function cm(e,t){if(e==="change")return t}var Ru=!1;if(tt){var ei;if(tt){var ti="oninput"in document;if(!ti){var Oa=document.createElement("div");Oa.setAttribute("oninput","return;"),ti=typeof Oa.oninput=="function"}ei=ti}else ei=!1;Ru=ei&&(!document.documentMode||9<document.documentMode)}function Ba(){Vn&&(Vn.detachEvent("onpropertychange",Fu),sr=Vn=null)}function Fu(e){if(e.propertyName==="value"&&Ps(sr)){var t=[];Uu(t,sr,e,Eo(e)),xu(um,t)}}function dm(e,t,n){e==="focusin"?(Ba(),Vn=t,sr=n,Vn.attachEvent("onpropertychange",Fu)):e==="focusout"&&Ba()}function pm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ps(sr)}function mm(e,t){if(e==="click")return Ps(t)}function fm(e,t){if(e==="input"||e==="change")return Ps(t)}function hm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:hm;function ir(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!ji.call(t,s)||!Be(e[s],t[s]))return!1}return!0}function $a(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Va(e,t){var n=$a(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$a(n)}}function Mu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _u(){for(var e=window,t=es();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=es(e.document)}return t}function _o(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gm(e){var t=_u(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mu(n.ownerDocument.documentElement,n)){if(r!==null&&_o(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,o=Math.min(r.start,s);r=r.end===void 0?o:Math.min(r.end,s),!e.extend&&o>r&&(s=r,r=o,o=s),s=Va(n,o);var a=Va(n,r);s&&a&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xm=tt&&"documentMode"in document&&11>=document.documentMode,en=null,Bi=null,Gn=null,$i=!1;function Ga(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$i||en==null||en!==es(r)||(r=en,"selectionStart"in r&&_o(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gn&&ir(Gn,r)||(Gn=r,r=as(Bi,"onSelect"),0<r.length&&(t=new Ro("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=en)))}function Tr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tn={animationend:Tr("Animation","AnimationEnd"),animationiteration:Tr("Animation","AnimationIteration"),animationstart:Tr("Animation","AnimationStart"),transitionend:Tr("Transition","TransitionEnd")},ni={},Ou={};tt&&(Ou=document.createElement("div").style,"AnimationEvent"in window||(delete tn.animationend.animation,delete tn.animationiteration.animation,delete tn.animationstart.animation),"TransitionEvent"in window||delete tn.transitionend.transition);function Es(e){if(ni[e])return ni[e];if(!tn[e])return e;var t=tn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ou)return ni[e]=t[n];return e}var Bu=Es("animationend"),$u=Es("animationiteration"),Vu=Es("animationstart"),Gu=Es("transitionend"),Wu=new Map,Wa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ct(e,t){Wu.set(e,t),Wt(t,[e])}for(var ri=0;ri<Wa.length;ri++){var si=Wa[ri],vm=si.toLowerCase(),ym=si[0].toUpperCase()+si.slice(1);Ct(vm,"on"+ym)}Ct(Bu,"onAnimationEnd");Ct($u,"onAnimationIteration");Ct(Vu,"onAnimationStart");Ct("dblclick","onDoubleClick");Ct("focusin","onFocus");Ct("focusout","onBlur");Ct(Gu,"onTransitionEnd");gn("onMouseEnter",["mouseout","mouseover"]);gn("onMouseLeave",["mouseout","mouseover"]);gn("onPointerEnter",["pointerout","pointerover"]);gn("onPointerLeave",["pointerout","pointerover"]);Wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bm=new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));function Ha(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,vp(r,t,void 0,e),e.currentTarget=null}function Hu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==o&&s.isPropagationStopped())break e;Ha(s,l,d),o=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,d=l.currentTarget,l=l.listener,u!==o&&s.isPropagationStopped())break e;Ha(s,l,d),o=u}}}if(ns)throw e=Fi,ns=!1,Fi=null,e}function _(e,t){var n=t[Xi];n===void 0&&(n=t[Xi]=new Set);var r=e+"__bubble";n.has(r)||(Xu(t,e,2,!1),n.add(r))}function ii(e,t,n){var r=0;t&&(r|=4),Xu(n,e,r,t)}var Lr="_reactListening"+Math.random().toString(36).slice(2);function or(e){if(!e[Lr]){e[Lr]=!0,tu.forEach(function(n){n!=="selectionchange"&&(bm.has(n)||ii(n,!1,e),ii(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Lr]||(t[Lr]=!0,ii("selectionchange",!1,t))}}function Xu(e,t,n,r){switch(Eu(t)){case 1:var s=qp;break;case 4:s=zp;break;default:s=zo}n=s.bind(null,t,n,e),s=void 0,!Ri||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function oi(e,t,n,r,s){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;a=a.return}for(;l!==null;){if(a=qt(l),a===null)return;if(u=a.tag,u===5||u===6){r=o=a;continue e}l=l.parentNode}}r=r.return}xu(function(){var d=o,f=Eo(n),g=[];e:{var h=Wu.get(e);if(h!==void 0){var x=Ro,v=e;switch(e){case"keypress":if(Wr(n)===0)break e;case"keydown":case"keyup":x=Qp;break;case"focusin":v="focus",x=Zs;break;case"focusout":v="blur",x=Zs;break;case"beforeblur":case"afterblur":x=Zs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=za;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Fp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Zp;break;case Bu:case $u:case Vu:x=Op;break;case Gu:x=tm;break;case"scroll":x=Up;break;case"wheel":x=rm;break;case"copy":case"cut":case"paste":x=$p;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Ra}var y=(t&4)!==0,k=!y&&e==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var c=d,m;c!==null;){m=c;var b=m.stateNode;if(m.tag===5&&b!==null&&(m=b,p!==null&&(b=er(c,p),b!=null&&y.push(ar(c,b,m)))),k)break;c=c.return}0<y.length&&(h=new x(h,v,null,n,f),g.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==zi&&(v=n.relatedTarget||n.fromElement)&&(qt(v)||v[nt]))break e;if((x||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=d,v=v?qt(v):null,v!==null&&(k=Ht(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=d),x!==v)){if(y=za,b="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ra,b="onPointerLeave",p="onPointerEnter",c="pointer"),k=x==null?h:nn(x),m=v==null?h:nn(v),h=new y(b,c+"leave",x,n,f),h.target=k,h.relatedTarget=m,b=null,qt(f)===d&&(y=new y(p,c+"enter",v,n,f),y.target=m,y.relatedTarget=k,b=y),k=b,x&&v)t:{for(y=x,p=v,c=0,m=y;m;m=Kt(m))c++;for(m=0,b=p;b;b=Kt(b))m++;for(;0<c-m;)y=Kt(y),c--;for(;0<m-c;)p=Kt(p),m--;for(;c--;){if(y===p||p!==null&&y===p.alternate)break t;y=Kt(y),p=Kt(p)}y=null}else y=null;x!==null&&Xa(g,h,x,y,!1),v!==null&&k!==null&&Xa(g,k,v,y,!0)}}e:{if(h=d?nn(d):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var S=cm;else if(_a(h))if(Ru)S=fm;else{S=pm;var P=dm}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=mm);if(S&&(S=S(e,d))){Uu(g,S,n,f);break e}P&&P(e,h,d),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&Pi(h,"number",h.value)}switch(P=d?nn(d):window,e){case"focusin":(_a(P)||P.contentEditable==="true")&&(en=P,Bi=d,Gn=null);break;case"focusout":Gn=Bi=en=null;break;case"mousedown":$i=!0;break;case"contextmenu":case"mouseup":case"dragend":$i=!1,Ga(g,n,f);break;case"selectionchange":if(xm)break;case"keydown":case"keyup":Ga(g,n,f)}var j;if(Mo)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Zt?qu(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Lu&&n.locale!=="ko"&&(Zt||I!=="onCompositionStart"?I==="onCompositionEnd"&&Zt&&(j=Tu()):(pt=f,Uo="value"in pt?pt.value:pt.textContent,Zt=!0)),P=as(d,I),0<P.length&&(I=new Ua(I,e,null,n,f),g.push({event:I,listeners:P}),j?I.data=j:(j=zu(n),j!==null&&(I.data=j)))),(j=im?om(e,n):am(e,n))&&(d=as(d,"onBeforeInput"),0<d.length&&(f=new Ua("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:d}),f.data=j))}Hu(g,t)})}function ar(e,t,n){return{instance:e,listener:t,currentTarget:n}}function as(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=er(e,n),o!=null&&r.unshift(ar(e,o,s)),o=er(e,t),o!=null&&r.push(ar(e,o,s))),e=e.return}return r}function Kt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xa(e,t,n,r,s){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,s?(u=er(n,o),u!=null&&a.unshift(ar(n,u,l))):s||(u=er(n,o),u!=null&&a.push(ar(n,u,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var wm=/\r\n?/g,km=/\u0000|\uFFFD/g;function Ka(e){return(typeof e=="string"?e:""+e).replace(wm,`
`).replace(km,"")}function qr(e,t,n){if(t=Ka(t),Ka(e)!==t&&n)throw Error(w(425))}function ls(){}var Vi=null,Gi=null;function Wi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hi=typeof setTimeout=="function"?setTimeout:void 0,jm=typeof clearTimeout=="function"?clearTimeout:void 0,Qa=typeof Promise=="function"?Promise:void 0,Sm=typeof queueMicrotask=="function"?queueMicrotask:typeof Qa<"u"?function(e){return Qa.resolve(null).then(e).catch(Cm)}:Hi;function Cm(e){setTimeout(function(){throw e})}function ai(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),rr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);rr(t)}function xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ja(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Nn=Math.random().toString(36).slice(2),We="__reactFiber$"+Nn,lr="__reactProps$"+Nn,nt="__reactContainer$"+Nn,Xi="__reactEvents$"+Nn,Nm="__reactListeners$"+Nn,Am="__reactHandles$"+Nn;function qt(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nt]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ja(e);e!==null;){if(n=e[We])return n;e=Ja(e)}return t}e=n,n=e.parentNode}return null}function yr(e){return e=e[We]||e[nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Ts(e){return e[lr]||null}var Ki=[],rn=-1;function Nt(e){return{current:e}}function O(e){0>rn||(e.current=Ki[rn],Ki[rn]=null,rn--)}function M(e,t){rn++,Ki[rn]=e.current,e.current=t}var St={},ue=Nt(St),ve=Nt(!1),_t=St;function xn(e,t){var n=e.type.contextTypes;if(!n)return St;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in n)s[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ye(e){return e=e.childContextTypes,e!=null}function us(){O(ve),O(ue)}function Ya(e,t,n){if(ue.current!==St)throw Error(w(168));M(ue,t),M(ve,n)}function Ku(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(w(108,dp(e)||"Unknown",s));return H({},n,r)}function cs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||St,_t=ue.current,M(ue,e),M(ve,ve.current),!0}function Za(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=Ku(e,t,_t),r.__reactInternalMemoizedMergedChildContext=e,O(ve),O(ue),M(ue,e)):O(ve),M(ve,n)}var Qe=null,Ls=!1,li=!1;function Qu(e){Qe===null?Qe=[e]:Qe.push(e)}function Im(e){Ls=!0,Qu(e)}function At(){if(!li&&Qe!==null){li=!0;var e=0,t=F;try{var n=Qe;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qe=null,Ls=!1}catch(s){throw Qe!==null&&(Qe=Qe.slice(e+1)),wu(To,At),s}finally{F=t,li=!1}}return null}var sn=[],on=0,ds=null,ps=0,Pe=[],Ee=0,Ot=null,Je=1,Ye="";function Pt(e,t){sn[on++]=ps,sn[on++]=ds,ds=e,ps=t}function Ju(e,t,n){Pe[Ee++]=Je,Pe[Ee++]=Ye,Pe[Ee++]=Ot,Ot=e;var r=Je;e=Ye;var s=32-_e(r)-1;r&=~(1<<s),n+=1;var o=32-_e(t)+s;if(30<o){var a=s-s%5;o=(r&(1<<a)-1).toString(32),r>>=a,s-=a,Je=1<<32-_e(t)+s|n<<s|r,Ye=o+e}else Je=1<<o|n<<s|r,Ye=e}function Oo(e){e.return!==null&&(Pt(e,1),Ju(e,1,0))}function Bo(e){for(;e===ds;)ds=sn[--on],sn[on]=null,ps=sn[--on],sn[on]=null;for(;e===Ot;)Ot=Pe[--Ee],Pe[Ee]=null,Ye=Pe[--Ee],Pe[Ee]=null,Je=Pe[--Ee],Pe[Ee]=null}var Ce=null,Se=null,V=!1,Me=null;function Yu(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function el(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ce=e,Se=xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ce=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:Je,overflow:Ye}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ce=e,Se=null,!0):!1;default:return!1}}function Qi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ji(e){if(V){var t=Se;if(t){var n=t;if(!el(e,t)){if(Qi(e))throw Error(w(418));t=xt(n.nextSibling);var r=Ce;t&&el(e,t)?Yu(r,n):(e.flags=e.flags&-4097|2,V=!1,Ce=e)}}else{if(Qi(e))throw Error(w(418));e.flags=e.flags&-4097|2,V=!1,Ce=e}}}function tl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function zr(e){if(e!==Ce)return!1;if(!V)return tl(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wi(e.type,e.memoizedProps)),t&&(t=Se)){if(Qi(e))throw Zu(),Error(w(418));for(;t;)Yu(e,t),t=xt(t.nextSibling)}if(tl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=Ce?xt(e.stateNode.nextSibling):null;return!0}function Zu(){for(var e=Se;e;)e=xt(e.nextSibling)}function vn(){Se=Ce=null,V=!1}function $o(e){Me===null?Me=[e]:Me.push(e)}var Dm=it.ReactCurrentBatchConfig;function Ln(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var s=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=s.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Ur(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function nl(e){var t=e._init;return t(e._payload)}function ec(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function s(p,c){return p=wt(p,c),p.index=0,p.sibling=null,p}function o(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,c,m,b){return c===null||c.tag!==6?(c=hi(m,p.mode,b),c.return=p,c):(c=s(c,m),c.return=p,c)}function u(p,c,m,b){var S=m.type;return S===Yt?f(p,c,m.props.children,b,m.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===lt&&nl(S)===c.type)?(b=s(c,m.props),b.ref=Ln(p,c,m),b.return=p,b):(b=Zr(m.type,m.key,m.props,null,p.mode,b),b.ref=Ln(p,c,m),b.return=p,b)}function d(p,c,m,b){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=gi(m,p.mode,b),c.return=p,c):(c=s(c,m.children||[]),c.return=p,c)}function f(p,c,m,b,S){return c===null||c.tag!==7?(c=Ft(m,p.mode,b,S),c.return=p,c):(c=s(c,m),c.return=p,c)}function g(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=hi(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Cr:return m=Zr(c.type,c.key,c.props,null,p.mode,m),m.ref=Ln(p,null,c),m.return=p,m;case Jt:return c=gi(c,p.mode,m),c.return=p,c;case lt:var b=c._init;return g(p,b(c._payload),m)}if(Fn(c)||In(c))return c=Ft(c,p.mode,m,null),c.return=p,c;Ur(p,c)}return null}function h(p,c,m,b){var S=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:l(p,c,""+m,b);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Cr:return m.key===S?u(p,c,m,b):null;case Jt:return m.key===S?d(p,c,m,b):null;case lt:return S=m._init,h(p,c,S(m._payload),b)}if(Fn(m)||In(m))return S!==null?null:f(p,c,m,b,null);Ur(p,m)}return null}function x(p,c,m,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return p=p.get(m)||null,l(c,p,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Cr:return p=p.get(b.key===null?m:b.key)||null,u(c,p,b,S);case Jt:return p=p.get(b.key===null?m:b.key)||null,d(c,p,b,S);case lt:var P=b._init;return x(p,c,m,P(b._payload),S)}if(Fn(b)||In(b))return p=p.get(m)||null,f(c,p,b,S,null);Ur(c,b)}return null}function v(p,c,m,b){for(var S=null,P=null,j=c,I=c=0,B=null;j!==null&&I<m.length;I++){j.index>I?(B=j,j=null):B=j.sibling;var q=h(p,j,m[I],b);if(q===null){j===null&&(j=B);break}e&&j&&q.alternate===null&&t(p,j),c=o(q,c,I),P===null?S=q:P.sibling=q,P=q,j=B}if(I===m.length)return n(p,j),V&&Pt(p,I),S;if(j===null){for(;I<m.length;I++)j=g(p,m[I],b),j!==null&&(c=o(j,c,I),P===null?S=j:P.sibling=j,P=j);return V&&Pt(p,I),S}for(j=r(p,j);I<m.length;I++)B=x(j,p,I,m[I],b),B!==null&&(e&&B.alternate!==null&&j.delete(B.key===null?I:B.key),c=o(B,c,I),P===null?S=B:P.sibling=B,P=B);return e&&j.forEach(function(we){return t(p,we)}),V&&Pt(p,I),S}function y(p,c,m,b){var S=In(m);if(typeof S!="function")throw Error(w(150));if(m=S.call(m),m==null)throw Error(w(151));for(var P=S=null,j=c,I=c=0,B=null,q=m.next();j!==null&&!q.done;I++,q=m.next()){j.index>I?(B=j,j=null):B=j.sibling;var we=h(p,j,q.value,b);if(we===null){j===null&&(j=B);break}e&&j&&we.alternate===null&&t(p,j),c=o(we,c,I),P===null?S=we:P.sibling=we,P=we,j=B}if(q.done)return n(p,j),V&&Pt(p,I),S;if(j===null){for(;!q.done;I++,q=m.next())q=g(p,q.value,b),q!==null&&(c=o(q,c,I),P===null?S=q:P.sibling=q,P=q);return V&&Pt(p,I),S}for(j=r(p,j);!q.done;I++,q=m.next())q=x(j,p,I,q.value,b),q!==null&&(e&&q.alternate!==null&&j.delete(q.key===null?I:q.key),c=o(q,c,I),P===null?S=q:P.sibling=q,P=q);return e&&j.forEach(function(It){return t(p,It)}),V&&Pt(p,I),S}function k(p,c,m,b){if(typeof m=="object"&&m!==null&&m.type===Yt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Cr:e:{for(var S=m.key,P=c;P!==null;){if(P.key===S){if(S=m.type,S===Yt){if(P.tag===7){n(p,P.sibling),c=s(P,m.props.children),c.return=p,p=c;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===lt&&nl(S)===P.type){n(p,P.sibling),c=s(P,m.props),c.ref=Ln(p,P,m),c.return=p,p=c;break e}n(p,P);break}else t(p,P);P=P.sibling}m.type===Yt?(c=Ft(m.props.children,p.mode,b,m.key),c.return=p,p=c):(b=Zr(m.type,m.key,m.props,null,p.mode,b),b.ref=Ln(p,c,m),b.return=p,p=b)}return a(p);case Jt:e:{for(P=m.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=s(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=gi(m,p.mode,b),c.return=p,p=c}return a(p);case lt:return P=m._init,k(p,c,P(m._payload),b)}if(Fn(m))return v(p,c,m,b);if(In(m))return y(p,c,m,b);Ur(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=s(c,m),c.return=p,p=c):(n(p,c),c=hi(m,p.mode,b),c.return=p,p=c),a(p)):n(p,c)}return k}var yn=ec(!0),tc=ec(!1),ms=Nt(null),fs=null,an=null,Vo=null;function Go(){Vo=an=fs=null}function Wo(e){var t=ms.current;O(ms),e._currentValue=t}function Yi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fn(e,t){fs=e,Vo=an=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function qe(e){var t=e._currentValue;if(Vo!==e)if(e={context:e,memoizedValue:t,next:null},an===null){if(fs===null)throw Error(w(308));an=e,fs.dependencies={lanes:0,firstContext:e}}else an=an.next=e;return t}var zt=null;function Ho(e){zt===null?zt=[e]:zt.push(e)}function nc(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,Ho(t)):(n.next=s.next,s.next=n),t.interleaved=n,rt(e,r)}function rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ut=!1;function Xo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,rt(e,n)}return s=r.interleaved,s===null?(t.next=t,Ho(r)):(t.next=s.next,s.next=t),r.interleaved=t,rt(e,n)}function Hr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Lo(e,n)}}function rl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?s=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?s=o=t:o=o.next=t}else s=o=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function hs(e,t,n,r){var s=e.updateQueue;ut=!1;var o=s.firstBaseUpdate,a=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,d=u.next;u.next=null,a===null?o=d:a.next=d,a=u;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=u))}if(o!==null){var g=s.baseState;a=0,f=d=u=null,l=o;do{var h=l.lane,x=l.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,y=l;switch(h=t,x=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){g=v.call(x,g,h);break e}g=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(x,g,h):v,h==null)break e;g=H({},g,h);break e;case 2:ut=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=s.effects,h===null?s.effects=[l]:h.push(l))}else x={eventTime:x,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=x,u=g):f=f.next=x,a|=h;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;h=l,l=h.next,h.next=null,s.lastBaseUpdate=h,s.shared.pending=null}}while(!0);if(f===null&&(u=g),s.baseState=u,s.firstBaseUpdate=d,s.lastBaseUpdate=f,t=s.shared.interleaved,t!==null){s=t;do a|=s.lane,s=s.next;while(s!==t)}else o===null&&(s.shared.lanes=0);$t|=a,e.lanes=a,e.memoizedState=g}}function sl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(w(191,s));s.call(r)}}}var br={},Xe=Nt(br),ur=Nt(br),cr=Nt(br);function Ut(e){if(e===br)throw Error(w(174));return e}function Ko(e,t){switch(M(cr,t),M(ur,e),M(Xe,br),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ti(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ti(t,e)}O(Xe),M(Xe,t)}function bn(){O(Xe),O(ur),O(cr)}function sc(e){Ut(cr.current);var t=Ut(Xe.current),n=Ti(t,e.type);t!==n&&(M(ur,e),M(Xe,n))}function Qo(e){ur.current===e&&(O(Xe),O(ur))}var G=Nt(0);function gs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ui=[];function Jo(){for(var e=0;e<ui.length;e++)ui[e]._workInProgressVersionPrimary=null;ui.length=0}var Xr=it.ReactCurrentDispatcher,ci=it.ReactCurrentBatchConfig,Bt=0,W=null,Y=null,ee=null,xs=!1,Wn=!1,dr=0,Pm=0;function oe(){throw Error(w(321))}function Yo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function Zo(e,t,n,r,s,o){if(Bt=o,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xr.current=e===null||e.memoizedState===null?qm:zm,e=n(r,s),Wn){o=0;do{if(Wn=!1,dr=0,25<=o)throw Error(w(301));o+=1,ee=Y=null,t.updateQueue=null,Xr.current=Um,e=n(r,s)}while(Wn)}if(Xr.current=vs,t=Y!==null&&Y.next!==null,Bt=0,ee=Y=W=null,xs=!1,t)throw Error(w(300));return e}function ea(){var e=dr!==0;return dr=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?W.memoizedState=ee=e:ee=ee.next=e,ee}function ze(){if(Y===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=ee===null?W.memoizedState:ee.next;if(t!==null)ee=t,Y=e;else{if(e===null)throw Error(w(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},ee===null?W.memoizedState=ee=e:ee=ee.next=e}return ee}function pr(e,t){return typeof t=="function"?t(e):t}function di(e){var t=ze(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=Y,s=r.baseQueue,o=n.pending;if(o!==null){if(s!==null){var a=s.next;s.next=o.next,o.next=a}r.baseQueue=s=o,n.pending=null}if(s!==null){o=s.next,r=r.baseState;var l=a=null,u=null,d=o;do{var f=d.lane;if((Bt&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=g,a=r):u=u.next=g,W.lanes|=f,$t|=f}d=d.next}while(d!==null&&d!==o);u===null?a=r:u.next=l,Be(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do o=s.lane,W.lanes|=o,$t|=o,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function pi(e){var t=ze(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,o=t.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do o=e(o,a.action),a=a.next;while(a!==s);Be(o,t.memoizedState)||(xe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ic(){}function oc(e,t){var n=W,r=ze(),s=t(),o=!Be(r.memoizedState,s);if(o&&(r.memoizedState=s,xe=!0),r=r.queue,ta(uc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,mr(9,lc.bind(null,n,r,s,t),void 0,null),te===null)throw Error(w(349));Bt&30||ac(n,t,s)}return s}function ac(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function lc(e,t,n,r){t.value=n,t.getSnapshot=r,cc(t)&&dc(e)}function uc(e,t,n){return n(function(){cc(t)&&dc(e)})}function cc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function dc(e){var t=rt(e,1);t!==null&&Oe(t,e,1,-1)}function il(e){var t=Ve();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pr,lastRenderedState:e},t.queue=e,e=e.dispatch=Lm.bind(null,W,e),[t.memoizedState,e]}function mr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function pc(){return ze().memoizedState}function Kr(e,t,n,r){var s=Ve();W.flags|=e,s.memoizedState=mr(1|t,n,void 0,r===void 0?null:r)}function qs(e,t,n,r){var s=ze();r=r===void 0?null:r;var o=void 0;if(Y!==null){var a=Y.memoizedState;if(o=a.destroy,r!==null&&Yo(r,a.deps)){s.memoizedState=mr(t,n,o,r);return}}W.flags|=e,s.memoizedState=mr(1|t,n,o,r)}function ol(e,t){return Kr(8390656,8,e,t)}function ta(e,t){return qs(2048,8,e,t)}function mc(e,t){return qs(4,2,e,t)}function fc(e,t){return qs(4,4,e,t)}function hc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gc(e,t,n){return n=n!=null?n.concat([e]):null,qs(4,4,hc.bind(null,t,e),n)}function na(){}function xc(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vc(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function yc(e,t,n){return Bt&21?(Be(n,t)||(n=Su(),W.lanes|=n,$t|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n)}function Em(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=ci.transition;ci.transition={};try{e(!1),t()}finally{F=n,ci.transition=r}}function bc(){return ze().memoizedState}function Tm(e,t,n){var r=bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wc(e))kc(t,n);else if(n=nc(e,t,n,r),n!==null){var s=de();Oe(n,e,r,s),jc(n,t,r)}}function Lm(e,t,n){var r=bt(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wc(e))kc(t,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(s.hasEagerState=!0,s.eagerState=l,Be(l,a)){var u=t.interleaved;u===null?(s.next=s,Ho(t)):(s.next=u.next,u.next=s),t.interleaved=s;return}}catch{}finally{}n=nc(e,t,s,r),n!==null&&(s=de(),Oe(n,e,r,s),jc(n,t,r))}}function wc(e){var t=e.alternate;return e===W||t!==null&&t===W}function kc(e,t){Wn=xs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Lo(e,n)}}var vs={readContext:qe,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},qm={readContext:qe,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:ol,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Kr(4194308,4,hc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Kr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Kr(4,2,e,t)},useMemo:function(e,t){var n=Ve();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ve();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Tm.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:il,useDebugValue:na,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=il(!1),t=e[0];return e=Em.bind(null,e[1]),Ve().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,s=Ve();if(V){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),te===null)throw Error(w(349));Bt&30||ac(r,t,n)}s.memoizedState=n;var o={value:n,getSnapshot:t};return s.queue=o,ol(uc.bind(null,r,o,e),[e]),r.flags|=2048,mr(9,lc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ve(),t=te.identifierPrefix;if(V){var n=Ye,r=Je;n=(r&~(1<<32-_e(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Pm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},zm={readContext:qe,useCallback:xc,useContext:qe,useEffect:ta,useImperativeHandle:gc,useInsertionEffect:mc,useLayoutEffect:fc,useMemo:vc,useReducer:di,useRef:pc,useState:function(){return di(pr)},useDebugValue:na,useDeferredValue:function(e){var t=ze();return yc(t,Y.memoizedState,e)},useTransition:function(){var e=di(pr)[0],t=ze().memoizedState;return[e,t]},useMutableSource:ic,useSyncExternalStore:oc,useId:bc,unstable_isNewReconciler:!1},Um={readContext:qe,useCallback:xc,useContext:qe,useEffect:ta,useImperativeHandle:gc,useInsertionEffect:mc,useLayoutEffect:fc,useMemo:vc,useReducer:pi,useRef:pc,useState:function(){return pi(pr)},useDebugValue:na,useDeferredValue:function(e){var t=ze();return Y===null?t.memoizedState=e:yc(t,Y.memoizedState,e)},useTransition:function(){var e=pi(pr)[0],t=ze().memoizedState;return[e,t]},useMutableSource:ic,useSyncExternalStore:oc,useId:bc,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Zi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zs={isMounted:function(e){return(e=e._reactInternals)?Ht(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),s=bt(e),o=et(r,s);o.payload=t,n!=null&&(o.callback=n),t=vt(e,o,s),t!==null&&(Oe(t,e,s,r),Hr(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),s=bt(e),o=et(r,s);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=vt(e,o,s),t!==null&&(Oe(t,e,s,r),Hr(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=bt(e),s=et(n,r);s.tag=2,t!=null&&(s.callback=t),t=vt(e,s,r),t!==null&&(Oe(t,e,r,n),Hr(t,e,r))}};function al(e,t,n,r,s,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ir(n,r)||!ir(s,o):!0}function Sc(e,t,n){var r=!1,s=St,o=t.contextType;return typeof o=="object"&&o!==null?o=qe(o):(s=ye(t)?_t:ue.current,r=t.contextTypes,o=(r=r!=null)?xn(e,s):St),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=o),t}function ll(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zs.enqueueReplaceState(t,t.state,null)}function eo(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Xo(e);var o=t.contextType;typeof o=="object"&&o!==null?s.context=qe(o):(o=ye(t)?_t:ue.current,s.context=xn(e,o)),s.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Zi(e,t,o,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&zs.enqueueReplaceState(s,s.state,null),hs(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function wn(e,t){try{var n="",r=t;do n+=cp(r),r=r.return;while(r);var s=n}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:s,digest:null}}function mi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function to(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Rm=typeof WeakMap=="function"?WeakMap:Map;function Cc(e,t,n){n=et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){bs||(bs=!0,po=r),to(e,t)},n}function Nc(e,t,n){n=et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){to(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){to(e,t),typeof r!="function"&&(yt===null?yt=new Set([this]):yt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function ul(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rm;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=Jm.bind(null,e,t,n),t.then(e,e))}function cl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function dl(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=et(-1,1),t.tag=2,vt(n,t,1))),n.lanes|=1),e)}var Fm=it.ReactCurrentOwner,xe=!1;function ce(e,t,n,r){t.child=e===null?tc(t,null,n,r):yn(t,e.child,n,r)}function pl(e,t,n,r,s){n=n.render;var o=t.ref;return fn(t,s),r=Zo(e,t,n,r,o,s),n=ea(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,st(e,t,s)):(V&&n&&Oo(t),t.flags|=1,ce(e,t,r,s),t.child)}function ml(e,t,n,r,s){if(e===null){var o=n.type;return typeof o=="function"&&!ca(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ac(e,t,o,r,s)):(e=Zr(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&s)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ir,n(a,r)&&e.ref===t.ref)return st(e,t,s)}return t.flags|=1,e=wt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ac(e,t,n,r,s){if(e!==null){var o=e.memoizedProps;if(ir(o,r)&&e.ref===t.ref)if(xe=!1,t.pendingProps=r=o,(e.lanes&s)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,st(e,t,s)}return no(e,t,n,r,s)}function Ic(e,t,n){var r=t.pendingProps,s=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(un,je),je|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,M(un,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,M(un,je),je|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,M(un,je),je|=r;return ce(e,t,s,n),t.child}function Dc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function no(e,t,n,r,s){var o=ye(n)?_t:ue.current;return o=xn(t,o),fn(t,s),n=Zo(e,t,n,r,o,s),r=ea(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,st(e,t,s)):(V&&r&&Oo(t),t.flags|=1,ce(e,t,n,s),t.child)}function fl(e,t,n,r,s){if(ye(n)){var o=!0;cs(t)}else o=!1;if(fn(t,s),t.stateNode===null)Qr(e,t),Sc(t,n,r),eo(t,n,r,s),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=qe(d):(d=ye(n)?_t:ue.current,d=xn(t,d));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==d)&&ll(t,a,r,d),ut=!1;var h=t.memoizedState;a.state=h,hs(t,r,a,s),u=t.memoizedState,l!==r||h!==u||ve.current||ut?(typeof f=="function"&&(Zi(t,n,f,r),u=t.memoizedState),(l=ut||al(t,n,l,r,h,u,d))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,rc(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Re(t.type,l),a.props=d,g=t.pendingProps,h=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=qe(u):(u=ye(n)?_t:ue.current,u=xn(t,u));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==g||h!==u)&&ll(t,a,r,u),ut=!1,h=t.memoizedState,a.state=h,hs(t,r,a,s);var v=t.memoizedState;l!==g||h!==v||ve.current||ut?(typeof x=="function"&&(Zi(t,n,x,r),v=t.memoizedState),(d=ut||al(t,n,d,r,h,v,u)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ro(e,t,n,r,o,s)}function ro(e,t,n,r,s,o){Dc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return s&&Za(t,n,!1),st(e,t,o);r=t.stateNode,Fm.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=yn(t,e.child,null,o),t.child=yn(t,null,l,o)):ce(e,t,l,o),t.memoizedState=r.state,s&&Za(t,n,!0),t.child}function Pc(e){var t=e.stateNode;t.pendingContext?Ya(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ya(e,t.context,!1),Ko(e,t.containerInfo)}function hl(e,t,n,r,s){return vn(),$o(s),t.flags|=256,ce(e,t,n,r),t.child}var so={dehydrated:null,treeContext:null,retryLane:0};function io(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ec(e,t,n){var r=t.pendingProps,s=G.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),M(G,s&1),e===null)return Ji(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Fs(a,r,0,null),e=Ft(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=io(n),t.memoizedState=so,e):ra(t,a));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return Mm(e,t,a,r,l,s,n);if(o){o=r.fallback,a=t.mode,s=e.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=wt(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?o=wt(l,o):(o=Ft(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?io(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=so,r}return o=e.child,e=o.sibling,r=wt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ra(e,t){return t=Fs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Rr(e,t,n,r){return r!==null&&$o(r),yn(t,e.child,null,n),e=ra(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mm(e,t,n,r,s,o,a){if(n)return t.flags&256?(t.flags&=-257,r=mi(Error(w(422))),Rr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,s=t.mode,r=Fs({mode:"visible",children:r.children},s,0,null),o=Ft(o,s,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&yn(t,e.child,null,a),t.child.memoizedState=io(a),t.memoizedState=so,o);if(!(t.mode&1))return Rr(e,t,a,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(w(419)),r=mi(o,r,void 0),Rr(e,t,a,r)}if(l=(a&e.childLanes)!==0,xe||l){if(r=te,r!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|a)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,rt(e,s),Oe(r,e,s,-1))}return ua(),r=mi(Error(w(421))),Rr(e,t,a,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Ym.bind(null,e),s._reactRetry=t,null):(e=o.treeContext,Se=xt(s.nextSibling),Ce=t,V=!0,Me=null,e!==null&&(Pe[Ee++]=Je,Pe[Ee++]=Ye,Pe[Ee++]=Ot,Je=e.id,Ye=e.overflow,Ot=t),t=ra(t,r.children),t.flags|=4096,t)}function gl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Yi(e.return,t,n)}function fi(e,t,n,r,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=s)}function Tc(e,t,n){var r=t.pendingProps,s=r.revealOrder,o=r.tail;if(ce(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gl(e,n,t);else if(e.tag===19)gl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M(G,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&gs(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),fi(t,!1,s,n,o);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&gs(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}fi(t,!0,n,null,o);break;case"together":fi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function st(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$t|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _m(e,t,n){switch(t.tag){case 3:Pc(t),vn();break;case 5:sc(t);break;case 1:ye(t.type)&&cs(t);break;case 4:Ko(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;M(ms,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(M(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?Ec(e,t,n):(M(G,G.current&1),e=st(e,t,n),e!==null?e.sibling:null);M(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Tc(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),M(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,Ic(e,t,n)}return st(e,t,n)}var Lc,oo,qc,zc;Lc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};oo=function(){};qc=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,Ut(Xe.current);var o=null;switch(n){case"input":s=Ii(e,s),r=Ii(e,r),o=[];break;case"select":s=H({},s,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":s=Ei(e,s),r=Ei(e,r),o=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ls)}Li(n,r);var a;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Yn.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(l=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Yn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&_("scroll",e),o||l===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};zc=function(e,t,n,r){n!==r&&(t.flags|=4)};function qn(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Om(e,t,n){var r=t.pendingProps;switch(Bo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return ye(t.type)&&us(),ae(t),null;case 3:return r=t.stateNode,bn(),O(ve),O(ue),Jo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(ho(Me),Me=null))),oo(e,t),ae(t),null;case 5:Qo(t);var s=Ut(cr.current);if(n=t.type,e!==null&&t.stateNode!=null)qc(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return ae(t),null}if(e=Ut(Xe.current),zr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[We]=t,r[lr]=o,e=(t.mode&1)!==0,n){case"dialog":_("cancel",r),_("close",r);break;case"iframe":case"object":case"embed":_("load",r);break;case"video":case"audio":for(s=0;s<_n.length;s++)_(_n[s],r);break;case"source":_("error",r);break;case"img":case"image":case"link":_("error",r),_("load",r);break;case"details":_("toggle",r);break;case"input":Ca(r,o),_("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},_("invalid",r);break;case"textarea":Aa(r,o),_("invalid",r)}Li(n,o),s=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&qr(r.textContent,l,e),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&qr(r.textContent,l,e),s=["children",""+l]):Yn.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&_("scroll",r)}switch(n){case"input":Nr(r),Na(r,o,!0);break;case"textarea":Nr(r),Ia(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ls)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[We]=t,e[lr]=r,Lc(e,t,!1,!1),t.stateNode=e;e:{switch(a=qi(n,r),n){case"dialog":_("cancel",e),_("close",e),s=r;break;case"iframe":case"object":case"embed":_("load",e),s=r;break;case"video":case"audio":for(s=0;s<_n.length;s++)_(_n[s],e);s=r;break;case"source":_("error",e),s=r;break;case"img":case"image":case"link":_("error",e),_("load",e),s=r;break;case"details":_("toggle",e),s=r;break;case"input":Ca(e,r),s=Ii(e,r),_("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=H({},r,{value:void 0}),_("invalid",e);break;case"textarea":Aa(e,r),s=Ei(e,r),_("invalid",e);break;default:s=r}Li(n,s),l=s;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?pu(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&cu(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Zn(e,u):typeof u=="number"&&Zn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Yn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&_("scroll",e):u!=null&&Ao(e,o,u,a))}switch(n){case"input":Nr(e),Na(e,r,!1);break;case"textarea":Nr(e),Ia(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?cn(e,!!r.multiple,o,!1):r.defaultValue!=null&&cn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=ls)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)zc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Ut(cr.current),Ut(Xe.current),zr(t)){if(r=t.stateNode,n=t.memoizedProps,r[We]=t,(o=r.nodeValue!==n)&&(e=Ce,e!==null))switch(e.tag){case 3:qr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[We]=t,t.stateNode=r}return ae(t),null;case 13:if(O(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Se!==null&&t.mode&1&&!(t.flags&128))Zu(),vn(),t.flags|=98560,o=!1;else if(o=zr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(w(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[We]=t}else vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),o=!1}else Me!==null&&(ho(Me),Me=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?Z===0&&(Z=3):ua())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return bn(),oo(e,t),e===null&&or(t.stateNode.containerInfo),ae(t),null;case 10:return Wo(t.type._context),ae(t),null;case 17:return ye(t.type)&&us(),ae(t),null;case 19:if(O(G),o=t.memoizedState,o===null)return ae(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)qn(o,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=gs(e),a!==null){for(t.flags|=128,qn(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return M(G,G.current&1|2),t.child}e=e.sibling}o.tail!==null&&K()>kn&&(t.flags|=128,r=!0,qn(o,!1),t.lanes=4194304)}else{if(!r)if(e=gs(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!V)return ae(t),null}else 2*K()-o.renderingStartTime>kn&&n!==1073741824&&(t.flags|=128,r=!0,qn(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=K(),t.sibling=null,n=G.current,M(G,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return la(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?je&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function Bm(e,t){switch(Bo(t),t.tag){case 1:return ye(t.type)&&us(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bn(),O(ve),O(ue),Jo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Qo(t),null;case 13:if(O(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(G),null;case 4:return bn(),null;case 10:return Wo(t.type._context),null;case 22:case 23:return la(),null;case 24:return null;default:return null}}var Fr=!1,le=!1,$m=typeof WeakSet=="function"?WeakSet:Set,A=null;function ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function ao(e,t,n){try{n()}catch(r){X(e,t,r)}}var xl=!1;function Vm(e,t){if(Vi=is,e=_u(),_o(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,d=0,f=0,g=e,h=null;t:for(;;){for(var x;g!==n||s!==0&&g.nodeType!==3||(l=a+s),g!==o||r!==0&&g.nodeType!==3||(u=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(x=g.firstChild)!==null;)h=g,g=x;for(;;){if(g===e)break t;if(h===n&&++d===s&&(l=a),h===o&&++f===r&&(u=a),(x=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=x}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gi={focusedElem:e,selectionRange:n},is=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,k=v.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:Re(t.type,y),k);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(b){X(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return v=xl,xl=!1,v}function Hn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var o=s.destroy;s.destroy=void 0,o!==void 0&&ao(t,n,o)}s=s.next}while(s!==r)}}function Us(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function lo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Uc(e){var t=e.alternate;t!==null&&(e.alternate=null,Uc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[We],delete t[lr],delete t[Xi],delete t[Nm],delete t[Am])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Rc(e){return e.tag===5||e.tag===3||e.tag===4}function vl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ls));else if(r!==4&&(e=e.child,e!==null))for(uo(e,t,n),e=e.sibling;e!==null;)uo(e,t,n),e=e.sibling}function co(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(co(e,t,n),e=e.sibling;e!==null;)co(e,t,n),e=e.sibling}var ne=null,Fe=!1;function at(e,t,n){for(n=n.child;n!==null;)Fc(e,t,n),n=n.sibling}function Fc(e,t,n){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Is,n)}catch{}switch(n.tag){case 5:le||ln(n,t);case 6:var r=ne,s=Fe;ne=null,at(e,t,n),ne=r,Fe=s,ne!==null&&(Fe?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Fe?(e=ne,n=n.stateNode,e.nodeType===8?ai(e.parentNode,n):e.nodeType===1&&ai(e,n),rr(e)):ai(ne,n.stateNode));break;case 4:r=ne,s=Fe,ne=n.stateNode.containerInfo,Fe=!0,at(e,t,n),ne=r,Fe=s;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var o=s,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&ao(n,t,a),s=s.next}while(s!==r)}at(e,t,n);break;case 1:if(!le&&(ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){X(n,t,l)}at(e,t,n);break;case 21:at(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,at(e,t,n),le=r):at(e,t,n);break;default:at(e,t,n)}}function yl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $m),t.forEach(function(r){var s=Zm.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Ue(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ne=l.stateNode,Fe=!1;break e;case 3:ne=l.stateNode.containerInfo,Fe=!0;break e;case 4:ne=l.stateNode.containerInfo,Fe=!0;break e}l=l.return}if(ne===null)throw Error(w(160));Fc(o,a,s),ne=null,Fe=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(d){X(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Mc(t,e),t=t.sibling}function Mc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),$e(e),r&4){try{Hn(3,e,e.return),Us(3,e)}catch(y){X(e,e.return,y)}try{Hn(5,e,e.return)}catch(y){X(e,e.return,y)}}break;case 1:Ue(t,e),$e(e),r&512&&n!==null&&ln(n,n.return);break;case 5:if(Ue(t,e),$e(e),r&512&&n!==null&&ln(n,n.return),e.flags&32){var s=e.stateNode;try{Zn(s,"")}catch(y){X(e,e.return,y)}}if(r&4&&(s=e.stateNode,s!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&au(s,o),qi(l,a);var d=qi(l,o);for(a=0;a<u.length;a+=2){var f=u[a],g=u[a+1];f==="style"?pu(s,g):f==="dangerouslySetInnerHTML"?cu(s,g):f==="children"?Zn(s,g):Ao(s,f,g,d)}switch(l){case"input":Di(s,o);break;case"textarea":lu(s,o);break;case"select":var h=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?cn(s,!!o.multiple,x,!1):h!==!!o.multiple&&(o.defaultValue!=null?cn(s,!!o.multiple,o.defaultValue,!0):cn(s,!!o.multiple,o.multiple?[]:"",!1))}s[lr]=o}catch(y){X(e,e.return,y)}}break;case 6:if(Ue(t,e),$e(e),r&4){if(e.stateNode===null)throw Error(w(162));s=e.stateNode,o=e.memoizedProps;try{s.nodeValue=o}catch(y){X(e,e.return,y)}}break;case 3:if(Ue(t,e),$e(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{rr(t.containerInfo)}catch(y){X(e,e.return,y)}break;case 4:Ue(t,e),$e(e);break;case 13:Ue(t,e),$e(e),s=e.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(oa=K())),r&4&&yl(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(le=(d=le)||f,Ue(t,e),le=d):Ue(t,e),$e(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!f&&e.mode&1)for(A=e,f=e.child;f!==null;){for(g=A=f;A!==null;){switch(h=A,x=h.child,h.tag){case 0:case 11:case 14:case 15:Hn(4,h,h.return);break;case 1:ln(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){X(r,n,y)}}break;case 5:ln(h,h.return);break;case 22:if(h.memoizedState!==null){wl(g);continue}}x!==null?(x.return=h,A=x):wl(g)}f=f.sibling}e:for(f=null,g=e;;){if(g.tag===5){if(f===null){f=g;try{s=g.stateNode,d?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=du("display",a))}catch(y){X(e,e.return,y)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(y){X(e,e.return,y)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ue(t,e),$e(e),r&4&&yl(e);break;case 21:break;default:Ue(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Rc(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Zn(s,""),r.flags&=-33);var o=vl(e);co(e,o,s);break;case 3:case 4:var a=r.stateNode.containerInfo,l=vl(e);uo(e,l,a);break;default:throw Error(w(161))}}catch(u){X(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gm(e,t,n){A=e,_c(e)}function _c(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var s=A,o=s.child;if(s.tag===22&&r){var a=s.memoizedState!==null||Fr;if(!a){var l=s.alternate,u=l!==null&&l.memoizedState!==null||le;l=Fr;var d=le;if(Fr=a,(le=u)&&!d)for(A=s;A!==null;)a=A,u=a.child,a.tag===22&&a.memoizedState!==null?kl(s):u!==null?(u.return=a,A=u):kl(s);for(;o!==null;)A=o,_c(o),o=o.sibling;A=s,Fr=l,le=d}bl(e)}else s.subtreeFlags&8772&&o!==null?(o.return=s,A=o):bl(e)}}function bl(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||Us(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&sl(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}sl(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&rr(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}le||t.flags&512&&lo(t)}catch(h){X(t,t.return,h)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function wl(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function kl(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Us(4,t)}catch(u){X(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(u){X(t,s,u)}}var o=t.return;try{lo(t)}catch(u){X(t,o,u)}break;case 5:var a=t.return;try{lo(t)}catch(u){X(t,a,u)}}}catch(u){X(t,t.return,u)}if(t===e){A=null;break}var l=t.sibling;if(l!==null){l.return=t.return,A=l;break}A=t.return}}var Wm=Math.ceil,ys=it.ReactCurrentDispatcher,sa=it.ReactCurrentOwner,Le=it.ReactCurrentBatchConfig,R=0,te=null,Q=null,se=0,je=0,un=Nt(0),Z=0,fr=null,$t=0,Rs=0,ia=0,Xn=null,he=null,oa=0,kn=1/0,Ke=null,bs=!1,po=null,yt=null,Mr=!1,mt=null,ws=0,Kn=0,mo=null,Jr=-1,Yr=0;function de(){return R&6?K():Jr!==-1?Jr:Jr=K()}function bt(e){return e.mode&1?R&2&&se!==0?se&-se:Dm.transition!==null?(Yr===0&&(Yr=Su()),Yr):(e=F,e!==0||(e=window.event,e=e===void 0?16:Eu(e.type)),e):1}function Oe(e,t,n,r){if(50<Kn)throw Kn=0,mo=null,Error(w(185));xr(e,n,r),(!(R&2)||e!==te)&&(e===te&&(!(R&2)&&(Rs|=n),Z===4&&dt(e,se)),be(e,r),n===1&&R===0&&!(t.mode&1)&&(kn=K()+500,Ls&&At()))}function be(e,t){var n=e.callbackNode;Dp(e,t);var r=ss(e,e===te?se:0);if(r===0)n!==null&&Ea(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ea(n),t===1)e.tag===0?Im(jl.bind(null,e)):Qu(jl.bind(null,e)),Sm(function(){!(R&6)&&At()}),n=null;else{switch(Cu(r)){case 1:n=To;break;case 4:n=ku;break;case 16:n=rs;break;case 536870912:n=ju;break;default:n=rs}n=Xc(n,Oc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Oc(e,t){if(Jr=-1,Yr=0,R&6)throw Error(w(327));var n=e.callbackNode;if(hn()&&e.callbackNode!==n)return null;var r=ss(e,e===te?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ks(e,r);else{t=r;var s=R;R|=2;var o=$c();(te!==e||se!==t)&&(Ke=null,kn=K()+500,Rt(e,t));do try{Km();break}catch(l){Bc(e,l)}while(!0);Go(),ys.current=o,R=s,Q!==null?t=0:(te=null,se=0,t=Z)}if(t!==0){if(t===2&&(s=Mi(e),s!==0&&(r=s,t=fo(e,s))),t===1)throw n=fr,Rt(e,0),dt(e,r),be(e,K()),n;if(t===6)dt(e,r);else{if(s=e.current.alternate,!(r&30)&&!Hm(s)&&(t=ks(e,r),t===2&&(o=Mi(e),o!==0&&(r=o,t=fo(e,o))),t===1))throw n=fr,Rt(e,0),dt(e,r),be(e,K()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:Et(e,he,Ke);break;case 3:if(dt(e,r),(r&130023424)===r&&(t=oa+500-K(),10<t)){if(ss(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Hi(Et.bind(null,e,he,Ke),t);break}Et(e,he,Ke);break;case 4:if(dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var a=31-_e(r);o=1<<a,a=t[a],a>s&&(s=a),r&=~o}if(r=s,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Wm(r/1960))-r,10<r){e.timeoutHandle=Hi(Et.bind(null,e,he,Ke),r);break}Et(e,he,Ke);break;case 5:Et(e,he,Ke);break;default:throw Error(w(329))}}}return be(e,K()),e.callbackNode===n?Oc.bind(null,e):null}function fo(e,t){var n=Xn;return e.current.memoizedState.isDehydrated&&(Rt(e,t).flags|=256),e=ks(e,t),e!==2&&(t=he,he=n,t!==null&&ho(t)),e}function ho(e){he===null?he=e:he.push.apply(he,e)}function Hm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],o=s.getSnapshot;s=s.value;try{if(!Be(o(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dt(e,t){for(t&=~ia,t&=~Rs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_e(t),r=1<<n;e[n]=-1,t&=~r}}function jl(e){if(R&6)throw Error(w(327));hn();var t=ss(e,0);if(!(t&1))return be(e,K()),null;var n=ks(e,t);if(e.tag!==0&&n===2){var r=Mi(e);r!==0&&(t=r,n=fo(e,r))}if(n===1)throw n=fr,Rt(e,0),dt(e,t),be(e,K()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Et(e,he,Ke),be(e,K()),null}function aa(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(kn=K()+500,Ls&&At())}}function Vt(e){mt!==null&&mt.tag===0&&!(R&6)&&hn();var t=R;R|=1;var n=Le.transition,r=F;try{if(Le.transition=null,F=1,e)return e()}finally{F=r,Le.transition=n,R=t,!(R&6)&&At()}}function la(){je=un.current,O(un)}function Rt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,jm(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(Bo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&us();break;case 3:bn(),O(ve),O(ue),Jo();break;case 5:Qo(r);break;case 4:bn();break;case 13:O(G);break;case 19:O(G);break;case 10:Wo(r.type._context);break;case 22:case 23:la()}n=n.return}if(te=e,Q=e=wt(e.current,null),se=je=t,Z=0,fr=null,ia=Rs=$t=0,he=Xn=null,zt!==null){for(t=0;t<zt.length;t++)if(n=zt[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=s,r.next=a}n.pending=r}zt=null}return e}function Bc(e,t){do{var n=Q;try{if(Go(),Xr.current=vs,xs){for(var r=W.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}xs=!1}if(Bt=0,ee=Y=W=null,Wn=!1,dr=0,sa.current=null,n===null||n.return===null){Z=1,fr=t,Q=null;break}e:{var o=e,a=n.return,l=n,u=t;if(t=se,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=l,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=cl(a);if(x!==null){x.flags&=-257,dl(x,a,l,o,t),x.mode&1&&ul(o,d,t),t=x,u=d;var v=t.updateQueue;if(v===null){var y=new Set;y.add(u),t.updateQueue=y}else v.add(u);break e}else{if(!(t&1)){ul(o,d,t),ua();break e}u=Error(w(426))}}else if(V&&l.mode&1){var k=cl(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),dl(k,a,l,o,t),$o(wn(u,l));break e}}o=u=wn(u,l),Z!==4&&(Z=2),Xn===null?Xn=[o]:Xn.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Cc(o,u,t);rl(o,p);break e;case 1:l=u;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(yt===null||!yt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=Nc(o,l,t);rl(o,b);break e}}o=o.return}while(o!==null)}Gc(n)}catch(S){t=S,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function $c(){var e=ys.current;return ys.current=vs,e===null?vs:e}function ua(){(Z===0||Z===3||Z===2)&&(Z=4),te===null||!($t&268435455)&&!(Rs&268435455)||dt(te,se)}function ks(e,t){var n=R;R|=2;var r=$c();(te!==e||se!==t)&&(Ke=null,Rt(e,t));do try{Xm();break}catch(s){Bc(e,s)}while(!0);if(Go(),R=n,ys.current=r,Q!==null)throw Error(w(261));return te=null,se=0,Z}function Xm(){for(;Q!==null;)Vc(Q)}function Km(){for(;Q!==null&&!bp();)Vc(Q)}function Vc(e){var t=Hc(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?Gc(e):Q=t,sa.current=null}function Gc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Bm(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,Q=null;return}}else if(n=Om(n,t,je),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);Z===0&&(Z=5)}function Et(e,t,n){var r=F,s=Le.transition;try{Le.transition=null,F=1,Qm(e,t,n,r)}finally{Le.transition=s,F=r}return null}function Qm(e,t,n,r){do hn();while(mt!==null);if(R&6)throw Error(w(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Pp(e,o),e===te&&(Q=te=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mr||(Mr=!0,Xc(rs,function(){return hn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Le.transition,Le.transition=null;var a=F;F=1;var l=R;R|=4,sa.current=null,Vm(e,n),Mc(n,e),gm(Gi),is=!!Vi,Gi=Vi=null,e.current=n,Gm(n),wp(),R=l,F=a,Le.transition=o}else e.current=n;if(Mr&&(Mr=!1,mt=e,ws=s),o=e.pendingLanes,o===0&&(yt=null),Sp(n.stateNode),be(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(bs)throw bs=!1,e=po,po=null,e;return ws&1&&e.tag!==0&&hn(),o=e.pendingLanes,o&1?e===mo?Kn++:(Kn=0,mo=e):Kn=0,At(),null}function hn(){if(mt!==null){var e=Cu(ws),t=Le.transition,n=F;try{if(Le.transition=null,F=16>e?16:e,mt===null)var r=!1;else{if(e=mt,mt=null,ws=0,R&6)throw Error(w(331));var s=R;for(R|=4,A=e.current;A!==null;){var o=A,a=o.child;if(A.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(A=d;A!==null;){var f=A;switch(f.tag){case 0:case 11:case 15:Hn(8,f,o)}var g=f.child;if(g!==null)g.return=f,A=g;else for(;A!==null;){f=A;var h=f.sibling,x=f.return;if(Uc(f),f===d){A=null;break}if(h!==null){h.return=x,A=h;break}A=x}}}var v=o.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}A=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,A=a;else e:for(;A!==null;){if(o=A,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Hn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,A=p;break e}A=o.return}}var c=e.current;for(A=c;A!==null;){a=A;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,A=m;else e:for(a=c;A!==null;){if(l=A,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Us(9,l)}}catch(S){X(l,l.return,S)}if(l===a){A=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,A=b;break e}A=l.return}}if(R=s,At(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Is,e)}catch{}r=!0}return r}finally{F=n,Le.transition=t}}return!1}function Sl(e,t,n){t=wn(n,t),t=Cc(e,t,1),e=vt(e,t,1),t=de(),e!==null&&(xr(e,1,t),be(e,t))}function X(e,t,n){if(e.tag===3)Sl(e,e,n);else for(;t!==null;){if(t.tag===3){Sl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yt===null||!yt.has(r))){e=wn(n,e),e=Nc(t,e,1),t=vt(t,e,1),e=de(),t!==null&&(xr(t,1,e),be(t,e));break}}t=t.return}}function Jm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(se&n)===n&&(Z===4||Z===3&&(se&130023424)===se&&500>K()-oa?Rt(e,0):ia|=n),be(e,t)}function Wc(e,t){t===0&&(e.mode&1?(t=Dr,Dr<<=1,!(Dr&130023424)&&(Dr=4194304)):t=1);var n=de();e=rt(e,t),e!==null&&(xr(e,t,n),be(e,n))}function Ym(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Wc(e,n)}function Zm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),Wc(e,n)}var Hc;Hc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xe=!1,_m(e,t,n);xe=!!(e.flags&131072)}else xe=!1,V&&t.flags&1048576&&Ju(t,ps,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qr(e,t),e=t.pendingProps;var s=xn(t,ue.current);fn(t,n),s=Zo(null,t,r,e,s,n);var o=ea();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(o=!0,cs(t)):o=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Xo(t),s.updater=zs,t.stateNode=s,s._reactInternals=t,eo(t,r,e,n),t=ro(null,t,r,!0,o,n)):(t.tag=0,V&&o&&Oo(t),ce(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qr(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=tf(r),e=Re(r,e),s){case 0:t=no(null,t,r,e,n);break e;case 1:t=fl(null,t,r,e,n);break e;case 11:t=pl(null,t,r,e,n);break e;case 14:t=ml(null,t,r,Re(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Re(r,s),no(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Re(r,s),fl(e,t,r,s,n);case 3:e:{if(Pc(t),e===null)throw Error(w(387));r=t.pendingProps,o=t.memoizedState,s=o.element,rc(e,t),hs(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){s=wn(Error(w(423)),t),t=hl(e,t,r,n,s);break e}else if(r!==s){s=wn(Error(w(424)),t),t=hl(e,t,r,n,s);break e}else for(Se=xt(t.stateNode.containerInfo.firstChild),Ce=t,V=!0,Me=null,n=tc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vn(),r===s){t=st(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return sc(t),e===null&&Ji(t),r=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,a=s.children,Wi(r,s)?a=null:o!==null&&Wi(r,o)&&(t.flags|=32),Dc(e,t),ce(e,t,a,n),t.child;case 6:return e===null&&Ji(t),null;case 13:return Ec(e,t,n);case 4:return Ko(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Re(r,s),pl(e,t,r,s,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,o=t.memoizedProps,a=s.value,M(ms,r._currentValue),r._currentValue=a,o!==null)if(Be(o.value,a)){if(o.children===s.children&&!ve.current){t=st(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=et(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Yi(o.return,n,t),l.lanes|=n;break}u=u.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(w(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Yi(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ce(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,fn(t,n),s=qe(s),r=r(s),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,s=Re(r,t.pendingProps),s=Re(r.type,s),ml(e,t,r,s,n);case 15:return Ac(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Re(r,s),Qr(e,t),t.tag=1,ye(r)?(e=!0,cs(t)):e=!1,fn(t,n),Sc(t,r,s),eo(t,r,s,n),ro(null,t,r,!0,e,n);case 19:return Tc(e,t,n);case 22:return Ic(e,t,n)}throw Error(w(156,t.tag))};function Xc(e,t){return wu(e,t)}function ef(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new ef(e,t,n,r)}function ca(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tf(e){if(typeof e=="function")return ca(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Do)return 11;if(e===Po)return 14}return 2}function wt(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zr(e,t,n,r,s,o){var a=2;if(r=e,typeof e=="function")ca(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Yt:return Ft(n.children,s,o,t);case Io:a=8,s|=8;break;case Si:return e=Te(12,n,t,s|2),e.elementType=Si,e.lanes=o,e;case Ci:return e=Te(13,n,t,s),e.elementType=Ci,e.lanes=o,e;case Ni:return e=Te(19,n,t,s),e.elementType=Ni,e.lanes=o,e;case su:return Fs(n,s,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nu:a=10;break e;case ru:a=9;break e;case Do:a=11;break e;case Po:a=14;break e;case lt:a=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Te(a,n,t,s),t.elementType=e,t.type=r,t.lanes=o,t}function Ft(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function Fs(e,t,n,r){return e=Te(22,e,r,t),e.elementType=su,e.lanes=n,e.stateNode={isHidden:!1},e}function hi(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function gi(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nf(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qs(0),this.expirationTimes=Qs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qs(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function da(e,t,n,r,s,o,a,l,u){return e=new nf(e,t,n,l,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Te(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xo(o),e}function rf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Kc(e){if(!e)return St;e=e._reactInternals;e:{if(Ht(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(ye(n))return Ku(e,n,t)}return t}function Qc(e,t,n,r,s,o,a,l,u){return e=da(n,r,!0,e,s,o,a,l,u),e.context=Kc(null),n=e.current,r=de(),s=bt(n),o=et(r,s),o.callback=t??null,vt(n,o,s),e.current.lanes=s,xr(e,s,r),be(e,r),e}function Ms(e,t,n,r){var s=t.current,o=de(),a=bt(s);return n=Kc(n),t.context===null?t.context=n:t.pendingContext=n,t=et(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vt(s,t,a),e!==null&&(Oe(e,s,a,o),Hr(e,s,a)),a}function js(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function pa(e,t){Cl(e,t),(e=e.alternate)&&Cl(e,t)}function sf(){return null}var Jc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ma(e){this._internalRoot=e}_s.prototype.render=ma.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Ms(e,t,null,null)};_s.prototype.unmount=ma.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vt(function(){Ms(null,e,null,null)}),t[nt]=null}};function _s(e){this._internalRoot=e}_s.prototype.unstable_scheduleHydration=function(e){if(e){var t=Iu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ct.length&&t!==0&&t<ct[n].priority;n++);ct.splice(n,0,e),n===0&&Pu(e)}};function fa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Os(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nl(){}function of(e,t,n,r,s){if(s){if(typeof r=="function"){var o=r;r=function(){var d=js(a);o.call(d)}}var a=Qc(t,r,e,0,null,!1,!1,"",Nl);return e._reactRootContainer=a,e[nt]=a.current,or(e.nodeType===8?e.parentNode:e),Vt(),a}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var d=js(u);l.call(d)}}var u=da(e,0,!1,null,null,!1,!1,"",Nl);return e._reactRootContainer=u,e[nt]=u.current,or(e.nodeType===8?e.parentNode:e),Vt(function(){Ms(t,u,n,r)}),u}function Bs(e,t,n,r,s){var o=n._reactRootContainer;if(o){var a=o;if(typeof s=="function"){var l=s;s=function(){var u=js(a);l.call(u)}}Ms(t,a,e,s)}else a=of(n,t,e,s,r);return js(a)}Nu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mn(t.pendingLanes);n!==0&&(Lo(t,n|1),be(t,K()),!(R&6)&&(kn=K()+500,At()))}break;case 13:Vt(function(){var r=rt(e,1);if(r!==null){var s=de();Oe(r,e,1,s)}}),pa(e,1)}};qo=function(e){if(e.tag===13){var t=rt(e,134217728);if(t!==null){var n=de();Oe(t,e,134217728,n)}pa(e,134217728)}};Au=function(e){if(e.tag===13){var t=bt(e),n=rt(e,t);if(n!==null){var r=de();Oe(n,e,t,r)}pa(e,t)}};Iu=function(){return F};Du=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Ui=function(e,t,n){switch(t){case"input":if(Di(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Ts(r);if(!s)throw Error(w(90));ou(r),Di(r,s)}}}break;case"textarea":lu(e,n);break;case"select":t=n.value,t!=null&&cn(e,!!n.multiple,t,!1)}};hu=aa;gu=Vt;var af={usingClientEntryPoint:!1,Events:[yr,nn,Ts,mu,fu,aa]},zn={findFiberByHostInstance:qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lf={bundleType:zn.bundleType,version:zn.version,rendererPackageName:zn.rendererPackageName,rendererConfig:zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yu(e),e===null?null:e.stateNode},findFiberByHostInstance:zn.findFiberByHostInstance||sf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_r.isDisabled&&_r.supportsFiber)try{Is=_r.inject(lf),He=_r}catch{}}Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=af;Ae.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fa(t))throw Error(w(200));return rf(e,t,null,n)};Ae.createRoot=function(e,t){if(!fa(e))throw Error(w(299));var n=!1,r="",s=Jc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=da(e,1,!1,null,null,n,!1,r,s),e[nt]=t.current,or(e.nodeType===8?e.parentNode:e),new ma(t)};Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=yu(t),e=e===null?null:e.stateNode,e};Ae.flushSync=function(e){return Vt(e)};Ae.hydrate=function(e,t,n){if(!Os(t))throw Error(w(200));return Bs(null,e,t,!0,n)};Ae.hydrateRoot=function(e,t,n){if(!fa(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,s=!1,o="",a=Jc;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Qc(t,null,e,1,n??null,s,!1,o,a),e[nt]=t.current,or(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new _s(t)};Ae.render=function(e,t,n){if(!Os(t))throw Error(w(200));return Bs(null,e,t,!1,n)};Ae.unmountComponentAtNode=function(e){if(!Os(e))throw Error(w(40));return e._reactRootContainer?(Vt(function(){Bs(null,null,e,!1,function(){e._reactRootContainer=null,e[nt]=null})}),!0):!1};Ae.unstable_batchedUpdates=aa;Ae.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Os(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Bs(e,t,n,!1,r)};Ae.version="18.3.1-next-f1338f8080-20240426";function Yc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yc)}catch(e){console.error(e)}}Yc(),Yl.exports=Ae;var Zc=Yl.exports,Al=Zc;ki.createRoot=Al.createRoot,ki.hydrateRoot=Al.hydrateRoot;/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ed=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var cf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=C.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:o,iconNode:a,...l},u)=>C.createElement("svg",{ref:u,...cf,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:ed("lucide",s),...l},[...a.map(([d,f])=>C.createElement(d,f)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=(e,t)=>{const n=C.forwardRef(({className:r,...s},o)=>C.createElement(df,{ref:o,iconNode:t,className:ed(`lucide-${uf(e)}`,r),...s}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=T("ArrowDownToLine",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=T("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=T("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=T("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=T("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=T("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=T("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=T("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=T("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=T("ChevronsLeftRight",[["path",{d:"m9 7-5 5 5 5",key:"j5w590"}],["path",{d:"m15 7 5 5-5 5",key:"1bl6da"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=T("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=T("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=T("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=T("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=T("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=T("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=T("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=T("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=T("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=T("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=T("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=T("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=T("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=T("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=T("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=T("MessagesSquare",[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z",key:"p1xzt8"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",key:"1cx29u"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=T("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=T("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=T("PenTool",[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=T("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=T("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=T("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=T("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=T("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=T("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=T("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=T("Slash",[["path",{d:"M22 2 2 22",key:"y4kqgn"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=T("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=T("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=T("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=T("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=T("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=T("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=T("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),If='<!-- source-hash: b4bd94f1e332 -->\n---\nname: asl-design-system\ndescription: Design System of Anne-Sophie Leroy\'s portfolio — colours through tokens, neutral and solid surfaces, reserved shadow, colour meanings, component structure (buttons, tags, cards, menus), action hierarchy, layout and typography without all caps. Use it whenever you create or modify a component, a screen, a style, a colour or a button in this project, even if the request does not mention a “design system” (for example “add a card”, “make this block more visible”, “create a banner”).\n---\n\n# ASL portfolio Design System\n\nThis portfolio has a precise direction: restrained, readable, with colour reserved for what matters.\nYour role is to build screens that blend into it, not to make them “prettier” in your own way.\nWhen in doubt, go simpler.\n\n## Before writing code\n\nThe system is organised in three files, from the most general to the most specific. Open the ones you need:\n\n| You want to… | Read |\n|---|---|\n| Create or modify a component (button, tag, card, menu…) | `references/composants.md`: every component is described there (example, anatomy, states). Follow its structure rather than inventing one. |\n| Choose a colour, a text size, a radius, an icon | `references/styles.md`. The source of truth for values remains `src/index.css`. |\n| Compose a screen, write a label, check accessibility | `references/fondations.md` |\n\nThese three files are also the source of the portfolio\'s “Design System” page: a rule changed here changes the page.\n\n## The four non-negotiable rules\n\nThese are the ones whose omission shows on screen straight away.\n\n### 1. No hard-coded colour\n\nEvery colour goes through a token (`bg-accent`, `text-ink`, `border-line`, `var(--ai)`…). Never `#640017`, `rgb(...)` or a standard Tailwind colour (`bg-red-500`, `text-gray-600`, `text-white`).\n\nWhy: tokens change value with the theme. A hard-coded colour stays fixed, so the screen breaks in dark mode, and it leaves the palette without anyone noticing.\n\nConsequence: do not use Tailwind\'s `dark:` prefix. The theme is carried by `data-theme` on `<html>`; with tokens, both themes work without writing anything more.\n\n- Yes: `className="bg-accent text-accent-fg"`\n- No: `className="bg-[#640017] text-white"`\n\n### 2. Neutral, solid surfaces\n\nA background is a solid, neutral colour: `bg-bg`, `bg-elevated` or `bg-sidebar`. No gradient, no texture, no decorative shape, and no large coloured surface (an olive banner, a burgundy card).\n\nColour lives in the small elements that carry an action or a piece of information: buttons, tags, icon badges.\n\nWhy: background effects were tried and then removed, because they got in the way of reading without adding anything. And a large coloured surface overwhelms everything around it. To make a block stand out, work with text size, space and a single coloured action: see `references/fondations.md`, “Layout”.\n\n- Yes: `className="rounded-3xl border border-line bg-elevated p-5"` with a `btn-primary` inside\n- No: `className="bg-olive text-olive-fg"` across the full width\n\n### 3. The shadow is reserved\n\nOnly one shadow exists, `shadow-signature`, and it serves two purposes: the prompt input (with its send button) and the main action of a screen (`btn-primary`). A card, a tag, a secondary menu or an image has no shadow: they stand out through a flat fill and a thin border (`border border-line`).\n\nWhy: if everything has a shadow, nothing stands out any more. The shadow says “this is where you act”.\n\n### 4. One colour, one meaning\n\n| Colour | Meaning | Tokens |\n|---|---|---|\n| Solid olive | Main action | `olive`, `olive-fg` |\n| Pale olive | Positive element (tag, badge) | `olive-tint`, `olive-text` |\n| Burgundy | Secondary action as an icon button, step number, icon badge, link, monogram | `accent`, `accent-fg`, `accent-text`, `accent-tint` |\n| Turquoise | What comes from the AI | `--ai`, `--ai-text`, `--ai-tint` |\n| Orange | Friction point, alert | `--warn-text`, `--warn-tint` |\n| Vermilion | Punctuation only: list bullet, caret, small arrow. Never a text, never a background | `vermillion` |\n\nOlive exists in two intensities, and the difference matters: solid for a button, pale for information. A tag is never solid olive, a button never pale olive: a button that is not the main action stays neutral (outlined or `bg-surface-2`).\n\nDo not repurpose a colour because it “would look good”. If no meaning matches, stay neutral: `text-ink`, `text-muted`, `border-line`. Figures, in particular, stay neutral.\n\nWhy: as soon as a colour has two meanings, the reader can no longer rely on it.\n\n## When the request contradicts a rule\n\nSometimes you are explicitly asked for what a rule forbids (“add a gradient”, “add a shadow so it stands out”). The person wants a result — for the block to be seen — not necessarily that particular means.\n\nBuild the compliant version that reaches the same goal, then say clearly what you did not do and why, and offer to do it anyway if they insist. Do not add it silently, and do not refuse without delivering anything.\n\n## Composing the screen\n\nA screen can follow the four rules and still fail: elements that overlap, lines that separate nothing. Before creating or reorganising a block, read “Layout” in `references/fondations.md`.\n\nWorth remembering even without opening it: **no text is in all caps**, neither button, nor tag, nor label (no `uppercase` class), and **in a button, the icon is to the right of the label**.\n\n## Before delivering\n\nFirst run the check script on the files you created or modified:\n\n```bash\nnode .claude/skills/asl-design-system/scripts/check.mjs src/components/MonComposant.tsx\n```\n\nWith no argument, it checks all of `src/`. It reports two levels:\n\n- `✗` an error: a rule is broken (hard-coded colour, gradient, unplanned shadow, all-caps text), fix it before delivering;\n- `?` to check: the script cannot decide on its own (a shadow, a coloured surface). See whether the use is legitimate.\n\nThe script does not see everything. It judges neither the meaning of a colour (rule 4), nor the structure of a component (icon on the right, suggestion card), nor the composition: a text that covers another escapes it. These points remain yours.\n\nIf you have to depart from a rule, write the reason just above the line, then say so clearly in your reply:\n\n```tsx\n{/* ds-ignore: le prototype est toujours clair, son support reste blanc */}\n```\n\nA reported deviation is better than a hidden one.\n',Df=`<!-- source-hash: bcf579b2c98a -->
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
4. Project list, numbered in their order of presentation, then a collapsible “Personal projects” folder: folder icon, name, number of projects, chevron on the right. It is closed by default and opens when one of its projects is displayed
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
`,Pf=`<!-- source-hash: df62a5704dae -->
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
`,Ef=`<!-- source-hash: 8377417deca8 -->
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
- In a link written as text (LinkedIn, phone), it comes first too: it says which link it is. It is not a button: no background, no outline.

### Rules

- An icon matches the content, it is not repeated for decoration.
- A decorative icon carries \`aria-hidden\`.
`,md="---\nname: asl-design-system\ndescription: Design System du portfolio d'Anne-Sophie Leroy — couleurs par tokens, surfaces neutres et unies, ombre réservée, sens des couleurs, structure des composants (boutons, tags, cartes, menus), hiérarchie des actions, mise en page et typographie sans majuscules. À utiliser dès qu'on crée ou modifie un composant, un écran, un style, une couleur ou un bouton dans ce projet, même si la demande ne parle pas de « design system » (par exemple « ajoute une carte », « rends ce bloc plus visible », « crée une bannière »).\n---\n\n# Design System du portfolio ASL\n\nCe portfolio a une direction précise : sobre, lisible, avec la couleur réservée à ce qui compte.\nTon rôle est de construire des écrans qui s'y fondent, pas de les rendre « plus beaux » à ta façon.\nEn cas de doute, fais plus simple.\n\n## Avant d'écrire du code\n\nLe système est rangé en trois fichiers, du plus général au plus précis. Ouvre ceux dont tu as besoin :\n\n| Tu veux… | Lis |\n|---|---|\n| Créer ou modifier un composant (bouton, tag, carte, menu…) | `references/composants.md` : chaque composant y est décrit (exemple, anatomie, états). Suis sa structure plutôt que d'en inventer une. |\n| Choisir une couleur, une taille de texte, un arrondi, une icône | `references/styles.md`. La source de vérité des valeurs reste `src/index.css`. |\n| Composer un écran, écrire un libellé, vérifier l'accessibilité | `references/fondations.md` |\n\nCes trois fichiers sont aussi la source de la page « Design System » du portfolio : une règle changée ici change la page.\n\n## Les quatre règles non négociables\n\nCe sont celles dont l'oubli se voit tout de suite à l'écran.\n\n### 1. Aucune couleur écrite en dur\n\nToute couleur passe par un token (`bg-accent`, `text-ink`, `border-line`, `var(--ai)`…). Jamais de `#640017`, de `rgb(...)` ni de couleur Tailwind standard (`bg-red-500`, `text-gray-600`, `text-white`).\n\nPourquoi : les tokens changent de valeur selon le thème. Une couleur en dur reste figée, donc l'écran casse en mode sombre, et elle sort de la palette sans que personne le remarque.\n\nConséquence : n'utilise pas le préfixe `dark:` de Tailwind. Le thème est porté par `data-theme` sur `<html>` ; avec des tokens, les deux thèmes fonctionnent sans rien écrire de plus.\n\n- Oui : `className=\"bg-accent text-accent-fg\"`\n- Non : `className=\"bg-[#640017] text-white\"`\n\n### 2. Des surfaces neutres et unies\n\nUn fond est une couleur pleine et neutre : `bg-bg`, `bg-elevated` ou `bg-sidebar`. Pas de dégradé, pas de texture, pas de forme décorative, et pas de grande surface colorée (un bandeau olive, une carte bordeaux).\n\nLa couleur vit dans les petits éléments qui portent une action ou une information : boutons, tags, pastilles d'icône.\n\nPourquoi : les effets de fond ont été essayés puis retirés, parce qu'ils gênaient la lecture sans rien apporter. Et une grande surface colorée écrase tout ce qui l'entoure. Pour qu'un bloc ressorte, joue sur la taille du texte, l'espace et une seule action colorée : voir `references/fondations.md`, « Mise en page ».\n\n- Oui : `className=\"rounded-3xl border border-line bg-elevated p-5\"` avec un `btn-primary` à l'intérieur\n- Non : `className=\"bg-olive text-olive-fg\"` sur toute la largeur\n\n### 3. L'ombre est réservée\n\nUne seule ombre existe, `shadow-signature`, et elle sert à deux choses : la zone de saisie du prompt (avec son bouton d'envoi) et l'action principale d'un écran (`btn-primary`). Une carte, un tag, un menu secondaire ou une image n'ont pas d'ombre : ils se détachent par un aplat et une bordure fine (`border border-line`).\n\nPourquoi : si tout a une ombre, plus rien ne ressort. L'ombre dit « c'est ici qu'on agit ».\n\n### 4. Une couleur, un seul sens\n\n| Couleur | Sens | Tokens |\n|---|---|---|\n| Olive plein | Action principale | `olive`, `olive-fg` |\n| Olive pâle | Élément positif (tag, pastille) | `olive-tint`, `olive-text` |\n| Bordeaux | Action secondaire en bouton-icône, numéro d'étape, pastille d'icône, lien, monogramme | `accent`, `accent-fg`, `accent-text`, `accent-tint` |\n| Turquoise | Ce qui vient de l'IA | `--ai`, `--ai-text`, `--ai-tint` |\n| Orange | Point de friction, alerte | `--warn-text`, `--warn-tint` |\n| Vermillon | Ponctuation seulement : puce de liste, curseur, petite flèche. Jamais un texte, jamais un fond | `vermillion` |\n\nL'olive existe en deux intensités, et la différence compte : plein pour un bouton, pâle pour une information. Un tag n'est jamais en olive plein, un bouton jamais en olive pâle : un bouton qui n'est pas l'action principale reste neutre (contour ou `bg-surface-2`).\n\nNe détourne pas une couleur parce qu'elle « irait bien ». Si aucun sens ne correspond, reste neutre : `text-ink`, `text-muted`, `border-line`. Les chiffres, en particulier, restent neutres.\n\nPourquoi : dès qu'une couleur a deux sens, le lecteur ne peut plus s'y fier.\n\n## Quand la demande contredit une règle\n\nIl arrive qu'on te demande explicitement ce qu'une règle interdit (« mets un dégradé », « ajoute une ombre pour que ça ressorte »). La personne veut un résultat — que le bloc se voie — pas forcément ce moyen-là.\n\nConstruis la version conforme qui atteint le même but, puis dis clairement ce que tu n'as pas fait et pourquoi, et propose de le faire quand même si elle y tient. Ne l'ajoute pas en silence, et ne refuse pas sans rien livrer.\n\n## Composer l'écran\n\nUn écran peut respecter les quatre règles et rester raté : des éléments qui se chevauchent, des traits qui ne séparent rien. Avant de créer ou de réorganiser un bloc, lis « Mise en page » dans `references/fondations.md`.\n\nÀ retenir même sans l'ouvrir : **aucun texte n'est tout en majuscules**, ni bouton, ni tag, ni libellé (pas de classe `uppercase`), et **dans un bouton, l'icône est à droite du libellé**.\n\n## Avant de livrer\n\nLance d'abord le script de vérification sur les fichiers que tu as créés ou modifiés :\n\n```bash\nnode .claude/skills/asl-design-system/scripts/check.mjs src/components/MonComposant.tsx\n```\n\nSans argument, il vérifie tout `src/`. Il signale deux niveaux :\n\n- `✗` une erreur : une règle est enfreinte (couleur en dur, dégradé, ombre non prévue, texte en majuscules), corrige avant de livrer ;\n- `?` à vérifier : le script ne peut pas trancher seul (une ombre, une surface colorée). Regarde si l'usage est légitime.\n\nLe script ne voit pas tout. Il ne juge ni le sens d'une couleur (règle 4), ni la structure d'un composant (icône à droite, carte de suggestion), ni la composition : un texte qui en recouvre un autre lui échappe. Ces points restent les tiens.\n\nSi tu dois t'écarter d'une règle, écris la raison juste au-dessus de la ligne, puis dis-le clairement dans ta réponse :\n\n```tsx\n{/* ds-ignore: le prototype est toujours clair, son support reste blanc */}\n```\n\nUn écart signalé vaut mieux qu'un écart caché.\n",fd=`# Composants

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
4. Liste des projets, numérotés dans leur ordre de présentation, puis un dossier repliable « Projets personnels » : icône de dossier, nom, nombre de projets, chevron à droite. Il est fermé par défaut et s'ouvre quand l'un de ses projets est affiché
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
`,hd=`# Fondations

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
`,gd=`# Styles

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
- Dans un lien écrit comme du texte (LinkedIn, téléphone), elle est devant aussi : elle dit de quel lien il s'agit. Ce n'est pas un bouton : pas de fond, pas de contour.

### Règles

- Une icône correspond au contenu, elle n'est pas répétée pour décorer.
- Une icône décorative porte \`aria-hidden\`.
`,Tf=e=>/^[\p{L}«“"]/u.test(e.trim());function Il(e,t){const n=e.startsWith("---")?e.slice(e.indexOf(`
---`,3)+4):e,r=[];let s,o=null,a=null,l=!1;for(const u of n.split(`
`)){u.startsWith("```")&&(l=!l);const d=l?null:u.match(/^(#{1,6})\s+(.*)$/);if(d){const f=d[1].length;if(f<t){s=f===1?void 0:d[2],o=null,a=null;continue}if(f===t){o={family:s,title:d[2],lead:"",sections:[]},a={title:"",body:""},o.sections.push(a),r.push(o);continue}if(f===t+1&&o){a={title:d[2],body:""},o.sections.push(a);continue}}a&&(a.body+=`${u}
`)}for(const u of r){const d=u.sections[0],f=d.body.split(`
`),g=f.findIndex(h=>h.trim());if(g>=0&&Tf(f[g])){let h=g;for(;h<f.length&&f[h].trim();)h++;u.lead=f.slice(g,h).join(" "),d.body=f.slice(h).join(`
`)}u.sections=u.sections.map(h=>({...h,body:h.body.trim()})).filter(h=>h.title||h.body)}return r}function xd(e){const t=[],n=[];let r=!1;for(const s of e.split(`
`)){s.startsWith("```")&&(r=!r);const o=r?null:s.match(/^\s*(?:[-•]|\d+\.)\s+(.*)$/);o?t.push(o[1]):n.push(s)}return{items:t,rest:n.join(`
`).trim()}}const Lf=Object.assign({"./design-system-en/SKILL.md":If,"./design-system-en/composants.md":Df,"./design-system-en/fondations.md":Pf,"./design-system-en/styles.md":Ef}),Qn={fr:{title:"Design System",subtitle:"Les règles et les composants de ce portfolio",pages:"Pages",previous:"Précédent",next:"Suivant",source:"Cette page affiche le fichier que l’agent IA lit",openTitle:"Le Design System de ce portfolio",openText:"Fondations, styles et composants : la page lit directement les fichiers du skill.",open:"Voir le Design System",link:"Design System"},en:{title:"Design System",subtitle:"The rules and components of this portfolio",pages:"Pages",previous:"Previous",next:"Next",source:"This page displays the file the AI agent reads",openTitle:"This portfolio’s Design System",openText:"Foundations, styles and components: the page reads the skill files directly.",open:"View the Design System",link:"Design System"}},xi=[{id:"start",title:{fr:"Démarrer",en:"Get started"}},{id:"foundations",title:{fr:"Fondations",en:"Foundations"}},{id:"styles",title:{fr:"Styles",en:"Styles"}},{id:"components",title:{fr:"Composants",en:"Components"}}],qf=["Les quatre règles non négociables","Quand la demande contredit une règle","Avant de livrer"],zf=[{file:"SKILL.md",path:"SKILL.md",fr:md,group:"start",level:2,only:qf},{file:"fondations.md",path:"references/fondations.md",fr:hd,group:"foundations",level:2},{file:"styles.md",path:"references/styles.md",fr:gd,group:"styles",level:2},{file:"composants.md",path:"references/composants.md",fr:fd,group:"components",level:3}],Uf={Anatomie:"anatomy","À faire":"do","À éviter":"dont"};function Rf(e,t){return e.length===t.length&&e.every((n,r)=>n.sections.length===t[r].sections.length)}function Ff(e){return zf.flatMap(t=>{const n=Il(t.fr,t.level),r=Lf[`./design-system-en/${t.file}`],s=e==="en"&&r?Il(r,t.level):null,o=s&&Rf(n,s)?s:n;return n.map((a,l)=>({p:a,i:l})).filter(({p:a})=>!t.only||t.only.includes(a.title)).map(({p:a,i:l})=>({id:`${t.group}-${l}`,group:t.group,path:t.path,category:o[l].family,title:o[l].title,lead:o[l].lead,sections:a.sections.map((u,d)=>({title:o[l].sections[d].title,body:o[l].sections[d].body,kind:Uf[u.title]??"text"}))}))})}const vi={},Mf=e=>vi[e]??(vi[e]=Ff(e)),Dl={before:{label:{fr:"Avant",en:"Before"},stages:[{step:1,title:{fr:"Obtenir le document",en:"Getting the document"},frictions:[{fr:"Relances répétées pour obtenir les pièces",en:"Repeated reminders to get the files"}],nodes:[{actor:"offline",label:{fr:"Échanges et relances entre plusieurs personnes pour recevoir les pièces",en:"Messages and reminders between several people to receive the files"}}]},{step:2,title:{fr:"Module Contrat",en:"Contract module"},frictions:[{fr:"Délai entre la réception et la saisie",en:"Delay between receipt and data entry"}],nodes:[{actor:"human",label:{fr:"Dépose le document dans la partie Documents du contrat",en:"Uploads the document in the contract’s Documents section"}}]},{step:3,title:{fr:"Module Covenant",en:"Covenant module"},nodes:[{actor:"human",label:{fr:"Change de module",en:"Switches module"}},{actor:"human",label:{fr:"Lit le certificat pour y retrouver chaque valeur",en:"Reads the certificate to find each value"}}]},{step:4,title:{fr:"Calendrier du contrat",en:"Contract calendar"},repeat:{fr:"Répété pour chaque covenant",en:"Repeated for every covenant"},frictions:[{fr:"Erreurs de saisie à corriger",en:"Typing errors to correct"},{fr:"Breach recalculé à la main",en:"Breach re-computed by hand"}],nodes:[{actor:"human",label:{fr:"Crée à la main la ligne de monitoring de la période",en:"Creates the monitoring line for the period by hand"}},{actor:"human",label:{fr:"Saisit valeur réelle, dates et statut",en:"Types in actual value, dates and status"}},{actor:"human",label:{fr:"Recontrôle le breach calculé par l’outil",en:"Re-checks the breach computed by the tool"}},{actor:"human",label:{fr:"Lie le document à la période suivie",en:"Links the document to the monitored period"}}]}]},after:{label:{fr:"Après",en:"After"},stages:[{title:{fr:"Réception",en:"Intake"},alternatives:!0,nodes:[{actor:"system",label:{fr:"Email reçu dans la file « Submissions »",en:"Email received in the “Submissions” queue"}},{actor:"human",label:{fr:"Dépôt manuel d’un document",en:"Manual document upload"}}]},{step:1,title:{fr:"Analyse des documents",en:"Documents analysis"},nodes:[{actor:"ai",label:{fr:"Lit les pièces : emprunteur, facility, date de signature",en:"Reads the files: borrower, facility, signature date"}}]},{step:2,title:{fr:"Rapprochement du contrat",en:"Contract matching"},nodes:[{actor:"ai",label:{fr:"Propose les contrats possibles",en:"Suggests the possible contracts"}},{actor:"human",label:{fr:"Accepte, ou choisit le contrat à la main",en:"Accepts, or picks the contract manually"}}]},{step:3,title:{fr:"Extraction & rapprochement des covenants",en:"Covenant extraction & matching"},nodes:[{actor:"ai",label:{fr:"Extrait chaque covenant et sa valeur",en:"Extracts each covenant and its value"}},{actor:"ai",label:{fr:"Propose le covenant correspondant du contrat",en:"Suggests the matching covenant of the contract"}},{actor:"human",label:{fr:"Valide un par un, face à la source — ou suit à la main",en:"Validates one by one, against the source — or monitors manually"}}]},{title:{fr:"Suivi",en:"Monitoring"},nodes:[{actor:"system",label:{fr:"Valeurs poussées dans le calendrier des covenants",en:"Values pushed to the covenant calendar"}},{actor:"human",label:{fr:"Échéances, breach et réception suivis par contrat",en:"Due dates, breach and receipt tracked per contract"}}]}]}},ge={fr:{eyebrow:"Parcours utilisateur · avant / après",title:"Du document reçu au covenant suivi",actors:{ai:"IA",human:"Analyste",system:"Système",offline:"Hors outil"},step:"Étape",or:"ou",navLabel:"Sections de l’étude de cas",navFlow:"Avant / Après",navUxFlow:"Le flow",navProto:"Prototype",detail:"Les deux parcours",friction:"Point de friction",open:"Tester le prototype",ctaTitle:"Essayez le parcours vous-même",ctaText:"Le prototype s’ouvre ici, sans quitter le portfolio. Il est entièrement navigable : ouvrez une soumission, acceptez un contrat, validez un covenant.",viewerTitle:"Covenant monitoring — prototype navigable",viewerNote:"Données fictives · marque et couleurs anonymisées",restart:"Recommencer",desktopHint:"Prototype conçu pour un écran d’ordinateur : il est réduit pour tenir dans cette fenêtre."},en:{eyebrow:"User journey · before / after",title:"From the received document to the monitored covenant",actors:{ai:"AI",human:"Analyst",system:"System",offline:"Outside the tool"},step:"Step",or:"or",navLabel:"Case study sections",navFlow:"Before / After",navUxFlow:"The flow",navProto:"Prototype",detail:"The two journeys",friction:"Pain point",open:"Try the prototype",ctaTitle:"Try the journey yourself",ctaText:"The prototype opens here, without leaving the portfolio. It is fully navigable: open a submission, accept a contract, validate a covenant.",viewerTitle:"Covenant monitoring — navigable prototype",viewerNote:"Fictional data · brand and colours anonymised",restart:"Restart",desktopHint:"Prototype designed for a desktop screen: it is scaled down to fit this window."}},vd={eyebrow:{fr:ge.fr.eyebrow,en:ge.en.eyebrow},title:{fr:ge.fr.title,en:ge.en.title},journeys:[{id:"before",muted:!0,...Dl.before},{id:"after",...Dl.after}],defaultView:"before"},_f="prototypes/covenant-monitoring.html#screen=0",U=(e,t)=>({fr:e,en:t}),Of={eyebrow:U("Parcours du lecteur · avant / après","Reader journey · before / after"),title:U("Trouver et lire un contenu sur la décarbonation","Finding and reading content about decarbonisation"),actors:{fr:{human:"Lecteur",system:"Plateforme"},en:{human:"Reader",system:"Platform"}},defaultView:"before",journeys:[{id:"before",muted:!0,label:U("Avant","Before"),stages:[{step:1,title:U("Se connecter","Signing in"),frictions:[U("Trop de défilement","Too much scrolling"),U("Contenu pas adapté au mobile","Content not adapted to mobile")],nodes:[{actor:"human",label:U("Se connecte et personnalise son profil","Signs in and personalises their profile")}]},{step:2,title:U("Découvrir","Discovering"),frictions:[U("Contenu mal hiérarchisé","Poorly ranked content"),U("Audio, vidéo et lecture mélangés","Audio, video and reading mixed together")],nodes:[{actor:"human",label:U("Explore la page d’accueil","Explores the home page")}]},{step:3,title:U("Filtrer","Filtering"),nodes:[{actor:"human",label:U("Affine avec les filtres région et thématique","Narrows down with the region and topic filters")}]},{step:4,title:U("Rechercher","Searching"),frictions:[U("Liens qui ne fonctionnent pas","Broken links"),U("Page trop chargée, on ne sait plus où l’on est","Overloaded page, hard to know where you are")],nodes:[{actor:"human",label:U("Parcourt les résultats","Browses the results")},{actor:"human",label:U("Choisit un article","Picks an article")}]},{step:5,title:U("Consulter","Reading"),frictions:[U("Impossible de partager l’article","No way to share the article"),U("Aucune autre lecture proposée","No other reading suggested")],nodes:[{actor:"human",label:U("Lit un article sur les énergies renouvelables","Reads an article about renewable energy")}]}]},{id:"after",label:U("Après","After"),stages:[{step:1,title:U("À la une","Front page"),nodes:[{actor:"system",label:U("Présente une sélection de contenus, un à la fois","Presents a selection of content, one at a time")},{actor:"human",label:U("Lit, passe ou revient en arrière","Reads, skips or goes back")}]},{step:2,title:U("Les contenus","Content"),nodes:[{actor:"human",label:U("Choisit une thématique","Chooses a topic")},{actor:"human",label:U("Filtre par format : à lire, à écouter, à voir","Filters by format: to read, to listen, to watch")}]},{step:3,title:U("Rechercher","Searching"),nodes:[{actor:"human",label:U("Cherche un contenu depuis l’en-tête, sur toutes les pages","Searches for content from the header, on every page")}]},{step:4,title:U("Consulter","Reading"),nodes:[{actor:"system",label:U("Affiche la thématique et le format de chaque article","Shows the topic and format of each article")},{actor:"human",label:U("Lit, puis partage l’article","Reads, then shares the article")}]}]}]},yd="bRCddnUzlotCFXHBfThuI1/Portfolio-file",bd="node-id=7-43622&page-id=2%3A1791&starting-point-node-id=50%3A122678",Bf=`https://embed.figma.com/proto/${yd}?${bd}&scaling=scale-down-width&content-scaling=fixed&embed-host=portfolio-asl&footer=false&viewport-controls=false&device-frame=false`,$f=`https://www.figma.com/proto/${yd}?${bd}&scaling=scale-down&content-scaling=fixed`,Vf="https://justdecarb.grdf.fr/",wd={fr:{protoEyebrow:"Prototype · version mobile",ctaTitle:"Essayez la plateforme",ctaText:"Le prototype est navigable ici : touchez les boutons comme sur un téléphone. La plateforme a été conçue mobile first, c’est donc cette version que vous voyez. Le chargement peut prendre quelques secondes.",open:"Voir le prototype",site:"Voir le site en ligne",openFigma:"Ouvrir dans Figma",viewerTitle:"GRDF — prototype mobile"},en:{protoEyebrow:"Prototype · mobile version",ctaTitle:"Try the platform",ctaText:"The prototype is navigable here: tap the buttons as you would on a phone. The platform was designed mobile first, so this is the version you see. Loading can take a few seconds.",open:"View the prototype",site:"View the live site",openFigma:"Open in Figma",viewerTitle:"GRDF — mobile prototype"}},Gf={eyebrow:{fr:"Flow design · de la recherche au réel",en:"Design flow · from research to reality"},title:{fr:"L’IA produit, le designer décide",en:"The AI produces, the designer decides"},actors:{fr:{ai:"L’IA produit",human:"Le designer décide"},en:{ai:"The AI produces",human:"The designer decides"}},journeys:[{id:"flow",label:{fr:"Flow",en:"Flow"},stages:[{step:1,title:{fr:"Recherche",en:"Research"},nodes:[{actor:"ai",label:{fr:"Analyse des données utilisateurs, segmentation, écarts",en:"User data analysis, segmentation, gap analysis"}},{actor:"human",label:{fr:"Cadre la recherche, anime le cadrage UX",en:"Frames the research, runs the UX framing"}}]},{step:2,title:{fr:"Intention",en:"Intention"},nodes:[{actor:"ai",label:{fr:"Benchmark large, pistes multiples",en:"Wide benchmark, multiple directions"}},{actor:"human",label:{fr:"Fixe l’intention, retient les pistes",en:"Sets the intention, keeps the directions"}}]},{step:3,title:{fr:"Génération 1 · prototypage design",en:"Generation 1 · design prototyping"},nodes:[{actor:"ai",label:{fr:"Itérations de design, plusieurs solutions",en:"Design iterations, several solutions"}},{actor:"human",label:{fr:"Juge et sélectionne les solutions",en:"Judges and selects the solutions"}}]},{step:4,title:{fr:"Génération 2 · prototypage code",en:"Generation 2 · code prototyping"},nodes:[{actor:"ai",label:{fr:"Itérations de code sur le Design System",en:"Code iterations on the Design System"}},{actor:"human",label:{fr:"Arbitre avec les développeurs",en:"Arbitrates with the developers"}}]},{step:5,title:{fr:"Implémentation",en:"Implementation"},nodes:[{actor:"ai",label:{fr:"Environnement de test, livraison prête",en:"Test environment, delivery ready"}},{actor:"human",label:{fr:"Valide la conformité au design",en:"Validates design compliance"}}]},{step:6,title:{fr:"Tests utilisateurs",en:"User tests"},nodes:[{actor:"ai",label:{fr:"Protocoles de test, synthèse des retours",en:"Test protocols, feedback synthesis"}},{actor:"human",label:{fr:"Observe les utilisateurs, interprète",en:"Observes users, interprets"}}]},{step:7,title:{fr:"Rétro & documentation",en:"Retro & documentation"},nodes:[{actor:"ai",label:{fr:"Specs d’interaction, mise à jour du Design System",en:"Interaction specs, Design System updates"}},{actor:"human",label:{fr:"Valide ce qui entre dans la connaissance commune",en:"Validates what enters the shared knowledge"}}]}]}]},kd=[{id:"profile",question:{fr:"Résume le profil d'Anne-Sophie et ce qui la différencie en 30 secondes",en:"Summarise Anne-Sophie's profile and what sets her apart in 30 seconds"},chip:{fr:"Son profil en 30 secondes",en:"Her profile in 30 seconds"},keywords:[["profil",4],["qui est",4],["who is",4],["present",3],["pitch",4],["differenci",4],["valeur ajoutee",4],["added value",4],["summar",3],["resum",2],["30 secondes",4],["30 seconds",4],["about her",4],["sets her apart",5],["pourquoi elle",4],["why her",4],["why hire",5],["recrut",4],["embauch",4],["hire",4],["anne sophie",2]],answer:{fr:{standard:`**Anne-Sophie Leroy** est Product Designer — UX/UI, Design Ops & AI Workflows, basée à Paris.

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
- **Short loops**: iterative user testing guided every design trade-off.`}},followUps:["grdf","bnp","impact"]},{id:"grdf",question:{fr:"Comment a-t-elle mené la refonte éco-conçue et accessible de la plateforme GRDF (Act4Gaz → justdecarb.grdf.fr) ?",en:"How did she lead the eco-designed, accessible redesign of the GRDF platform (Act4Gaz → justdecarb.grdf.fr)?"},chip:{fr:"GRDF Refonte éco-conçue et RGAA",en:"GRDF Eco-designed redesign and RGAA"},keywords:[["grdf",6],["rgaa",5],["accessib",5],["a11y",5],["wcag",4],["eco",3],["ecoindex",6],["eco conception",5],["eco design",5],["ecoconcep",5],["justdecarb",6],["act4gaz",6],["rebranding",4],["environnement",4],["environment",4],["sobriete",4],["green",3],["energie",3],["energy",3],["handicap",4],["inclusi",3]],answer:{fr:{standard:`### Contexte
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
- **Full CV**: button below.`}},followUps:["profile","impact","contact"],actions:["cv","email"]},{id:"projects",question:{fr:"Quels sont ses principaux projets ?",en:"What are her main projects?"},chip:{fr:"Ses projets",en:"Her projects"},keywords:[["projet",5],["project",5],["etude de cas",6],["etudes de cas",6],["case stud",6],["portfolio",5],["realisation",5],["mission",4],["client",4],["travaux",4],["her work",5],["reference",4]],answer:{fr:{standard:`Trois études de cas, à explorer dans la barre latérale ou via les questions ci-dessous.

| Projet | Sujet | Impact |
|---|---|---|
| **BNP Paribas CIB** | Cadrer une équipe UX augmentée par l'IA | ==+5 modules sur 17== · ==~1 500 utilisateurs== |
| **Banque d'investissement** | Covenant monitoring assisté par IA | Parcours avant / après · prototype navigable |
| **GRDF** | Refonte éco-conçue justdecarb.grdf.fr | ==Note C EcoIndex== + RGAA |`,express:`- **BNP Paribas CIB** : équipe UX augmentée par l'IA — ==+5 modules sur 17==.
- **Covenant monitoring** : parcours avant / après, prototype navigable.
- **GRDF** : refonte éco-conçue — ==Note C EcoIndex== + RGAA.`},en:{standard:`Three case studies, to explore in the sidebar or through the questions below.

| Project | Topic | Impact |
|---|---|---|
| **BNP Paribas CIB** | Framing an AI-augmented UX team | ==+5 of 17 modules== · ==~1,500 users== |
| **Investment bank** | AI-assisted covenant monitoring | Before / after journey · navigable prototype |
| **GRDF** | Eco-designed redesign of justdecarb.grdf.fr | ==EcoIndex grade C== + RGAA |`,express:`- **BNP Paribas CIB**: AI-augmented UX team — ==+5 of 17 modules==.
- **Covenant monitoring**: before / after journey, navigable prototype.
- **GRDF**: eco-designed redesign — ==EcoIndex grade C== + RGAA.`}},followUps:["bnp","covenant","grdf"]},{id:"greeting",question:{fr:"Bonjour !",en:"Hello!"},keywords:[["bonjour",3],["hello",3],["salut",3],["hi",3],["hey",3],["coucou",3],["bonsoir",3],["good morning",3],["ca va",3],["how are you",3]],answer:{fr:{standard:`Bonjour ! Je suis l'assistant portfolio d'**Anne-Sophie Leroy**, Product Designer spécialisée en UX/UI, Design Ops et workflows IA.

Je peux vous parler de son parcours, de ses projets (BNP Paribas CIB, Kering, GRDF, Caisse des Dépôts), de ses compétences ou de sa façon d'intégrer l'IA dans le design. Par où souhaitez-vous commencer ?`,express:"Bonjour ! Posez-moi une question sur **Anne-Sophie Leroy** : profil, projets, compétences, IA & Design Ops."},en:{standard:`Hello! I'm the portfolio assistant of **Anne-Sophie Leroy**, a Product Designer specialising in UX/UI, Design Ops and AI workflows.

I can tell you about her background, her projects (BNP Paribas CIB, Kering, GRDF, Caisse des Dépôts), her skills or how she brings AI into design. Where would you like to start?`,express:"Hello! Ask me anything about **Anne-Sophie Leroy**: profile, projects, skills, AI & Design Ops."}},followUps:["profile","projects","ai"]},{id:"thanks",question:{fr:"Merci !",en:"Thank you!"},keywords:[["merci",5],["thanks",5],["thank",5],["super",2],["parfait",3],["perfect",3],["great",2],["au revoir",4],["bye",4]],answer:{fr:{standard:"Avec plaisir ! Si le profil d'Anne-Sophie vous intéresse, le plus simple est de lui écrire directement — elle sera ravie d'échanger.",express:"Avec plaisir ! Pour aller plus loin, écrivez directement à Anne-Sophie."},en:{standard:"You're welcome! If Anne-Sophie's profile is a match, the simplest next step is to write to her directly — she will be glad to talk.",express:"You're welcome! To go further, write to Anne-Sophie directly."}},actions:["email","cv"]},{id:"fallback",question:{fr:"",en:""},keywords:[],answer:{fr:{standard:"Je n'ai pas d'information fiable sur ce point, et je préfère ne rien inventer sur Anne-Sophie.\n\n### Ce que je sais faire\n- **Présenter son profil** et ce qui la différencie.\n- **Détailler ses projets** : BNP Paribas CIB, Groupe Kering, GRDF, Caisse des Dépôts.\n- **Expliquer sa pratique** : Design Ops, Design System, *AI Skills*, *vibecoding*.\n- **Répondre aux questions pratiques** : formation, langues, outils, localisation.\n\nAstuce : tapez `/` pour les commandes rapides (`/cv`, `/projets`, `/skills`, `/contact`, `/stack`). Et pour toute question précise, Anne-Sophie vous répondra directement.",express:"Je n'ai pas cette information. Essayez une question sur son **profil**, ses **projets**, ses **compétences** ou l'**IA** — ou contactez-la directement."},en:{standard:"I don't have reliable information on that, and I'd rather not make anything up about Anne-Sophie.\n\n### What I can do\n- **Present her profile** and what sets her apart.\n- **Detail her projects**: BNP Paribas CIB, Kering Group, GRDF, Caisse des Dépôts.\n- **Explain her practice**: Design Ops, Design System, *AI Skills*, *vibecoding*.\n- **Answer practical questions**: education, languages, tools, location.\n\nTip: type `/` for quick commands (`/cv`, `/projects`, `/skills`, `/contact`, `/stack`). And for any specific question, Anne-Sophie will answer you directly.",express:"I don't have that information. Try a question about her **profile**, **projects**, **skills** or **AI** — or contact her directly."}},followUps:["profile","projects","ai"],actions:["cv","email"]}],Pl=Object.fromEntries(kd.map(e=>[e.id,e]));function Mt(e){return Pl[e]??Pl.fallback}function jd(e,t,n){const r=Mt(e).answer[t];return n==="express"?r.express:n==="deepdive"&&r.deep?`${r.standard}

${r.deep}`:r.standard}function Wf(e){return e.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/\bj['’]ai\b/g," ").replace(/[^a-z0-9€]+/g," ").trim()}function Hf(e,t){const n=Array.from({length:e.length+1},(r,s)=>[s,...Array(t.length).fill(0)]);for(let r=1;r<=t.length;r++)n[0][r]=r;for(let r=1;r<=e.length;r++)for(let s=1;s<=t.length;s++)n[r][s]=Math.min(n[r-1][s]+1,n[r][s-1]+1,n[r-1][s-1]+(e[r-1]===t[s-1]?0:1));return n[e.length][t.length]}function Xf(e,t){return e===t||t.length>=4&&e.startsWith(t)?!0:t.length>=6&&e.length>=6&&Math.abs(e.length-t.length)<=1?Hf(e,t)<=1:!1}const Kf={"/cv":"cv","/projets":"projects","/projects":"projects","/projet":"projects","/skills":"skills","/competences":"skills","/contact":"contact","/stack":"stack","/designsystem":"portfoliods","/design-system":"portfoliods","/ds":"portfoliods"};function Qf(e){const t=e.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").split(/\s+/)[0];return t.startsWith("/")?Kf[t]??"fallback":null}const Jf=3;function Yf(e){const t=Qf(e);if(t)return t;const n=Wf(e);if(!n)return"fallback";const r=` ${n} `,s=n.split(" ");let o="fallback",a=0;for(const l of kd){let u=0;for(const[d,f]of l.keywords)(d.includes(" ")?r.includes(` ${d}`):s.some(h=>Xf(h,d)))&&(u+=f);u>a&&(a=u,o=l.id)}return a>=Jf?o:"fallback"}function Sd(e){return e.match(/\S+\s*/g)??[]}const El={ai:{icon:Ss,chip:"bg-[var(--ai-tint)] text-[var(--ai-text)]",dot:"bg-[var(--ai)]"},human:{icon:Cs,chip:"border border-rule text-ink",dot:"bg-ink"},system:{icon:Sf,chip:"bg-surface-2 text-ink",dot:"bg-muted"},offline:{icon:yf,chip:"border border-line text-muted",dot:"border border-muted"}};function Cd({id:e,lang:t,board:n,cta:r}){const s=ge[t],[o,a]=C.useState(n.defaultView??n.journeys[0].id),l=n.journeys.find(f=>f.id===o)??n.journeys[0],u=f=>{var g;return((g=n.actors)==null?void 0:g[t][f])??s.actors[f]},d=[...new Set(l.stages.flatMap(f=>f.nodes.map(g=>g.actor)))];return i.jsxs("section",{id:e,className:"rise mb-7 scroll-mt-16 overflow-hidden rounded-3xl border border-line bg-elevated",children:[i.jsxs("header",{className:"flex flex-wrap items-center gap-x-4 gap-y-3 border-b border-line px-5 py-4",children:[i.jsxs("div",{className:"w-full min-w-0 sm:w-auto sm:flex-1",children:[i.jsx("p",{className:"eyebrow text-muted",children:n.eyebrow[t]}),i.jsx("h3",{className:"mt-1 font-display text-[1.15rem] font-semibold leading-tight tracking-[-0.02em] text-ink",children:n.title[t]})]}),r&&i.jsxs("button",{onClick:r.onClick,className:"btn-primary !py-2.5",children:[r.label," ",i.jsx(xa,{size:14,className:"fill-current","aria-hidden":!0})]})]}),n.journeys.length>1&&i.jsxs("div",{className:"flex flex-wrap items-center gap-3 px-5 pt-4",children:[i.jsx("p",{className:"eyebrow flex-1 text-muted",children:s.detail}),i.jsx("div",{role:"group","aria-label":s.detail,className:"flex rounded-full border border-line p-0.5",children:n.journeys.map(f=>i.jsx("button",{onClick:()=>a(f.id),"aria-pressed":o===f.id,className:`t-all rounded-full px-3.5 py-1 text-xs font-semibold ${o===f.id?"bg-ink text-bg":"text-muted hover:text-ink"}`,children:f.label[t]},f.id))})]}),i.jsx("ol",{className:"rise px-5 py-2",children:l.stages.map((f,g)=>i.jsxs("li",{className:"relative flex gap-4 py-3",children:[g<l.stages.length-1&&i.jsx("span",{className:"absolute bottom-[-12px] left-[15px] top-[44px] w-px bg-line","aria-hidden":!0}),i.jsx("span",{className:`relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${f.step?l.muted?"bg-ink text-bg":"bg-accent text-accent-fg":"border border-rule bg-elevated text-ink"}`,"aria-hidden":!0,children:f.step??(g===0?i.jsx(go,{size:14}):i.jsx(kt,{size:14}))}),i.jsxs("div",{className:"min-w-0 flex-1",children:[i.jsxs("p",{className:"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold leading-snug text-ink",children:[f.step&&i.jsxs("span",{className:"eyebrow text-accent-text",children:[s.step," ",f.step]}),f.title[t],f.repeat&&i.jsxs("span",{className:"tag border border-rule text-ink",children:[i.jsx(cd,{size:12,"aria-hidden":!0})," ",f.repeat[t]]})]}),i.jsx("ul",{className:"mt-2 flex flex-wrap items-stretch gap-x-1.5 gap-y-2",children:f.nodes.map((h,x)=>{const v=El[h.actor],y=v.icon;return i.jsxs("li",{className:"flex items-stretch gap-1.5",children:[x>0&&i.jsx("span",{className:"flex items-center px-1 text-xs italic text-muted","aria-hidden":!f.alternatives,children:f.alternatives?s.or:i.jsx(hr,{size:14})}),i.jsxs("span",{className:"flex max-w-[15rem] flex-col gap-1.5 rounded-2xl border border-line bg-bg px-3 py-2.5",children:[i.jsxs("span",{className:`tag w-fit ${v.chip}`,children:[i.jsx(y,{size:12,"aria-hidden":!0})," ",u(h.actor)]}),i.jsx("span",{className:"text-[12.5px] font-light leading-snug text-ink",children:h.label[t]})]})]},h.label.en)})}),f.frictions&&i.jsx("ul",{className:"mt-2.5 flex flex-wrap gap-1.5","aria-label":s.friction,children:f.frictions.map(h=>i.jsxs("li",{className:"tag bg-[var(--warn-tint)] text-[var(--warn-text)]",children:[i.jsx(pd,{size:12,"aria-hidden":!0})," ",h[t]]},h.en))})]})]},f.title.en))},o),i.jsx("footer",{className:"flex flex-wrap gap-x-5 gap-y-1.5 border-t border-line px-5 py-3",children:d.map(f=>i.jsxs("span",{className:"inline-flex items-center gap-2 text-xs text-muted",children:[i.jsx("span",{className:`h-2 w-2 rounded-full ${El[f].dot}`,"aria-hidden":!0})," ",u(f)]},f))})]})}const Zf=/(\*\*[^*]+\*\*|==[^=]+==|`[^`]+`|\[[^\]]+\]\([^)\s]+\)|\*[^*\s][^*]*\*)/g;function eh(e){return e.replace(/\*\*|==|`|\*/g,"")}function Lt(e){return e.split(Zf).map((t,n)=>{if(!t)return null;if(t.startsWith("**")&&t.endsWith("**")&&t.length>4)return i.jsx("strong",{className:"font-semibold text-ink",children:Lt(t.slice(2,-2))},n);if(t.startsWith("==")&&t.endsWith("==")&&t.length>4)return i.jsx("span",{className:"mx-0.5 inline-block whitespace-nowrap rounded-full bg-olive-tint px-2.5 py-0.5 text-[0.86em] font-semibold text-olive-text",children:t.slice(2,-2)},n);if(t.startsWith("`")&&t.endsWith("`")&&t.length>2)return i.jsx("code",{className:"rounded-md bg-accent-tint px-1.5 py-0.5 font-mono text-[0.85em] text-accent-text",children:t.slice(1,-1)},n);const r=t.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);if(r){const s=r[2].startsWith("http");return i.jsx("a",{href:r[2],...s?{target:"_blank",rel:"noopener noreferrer"}:{},className:"t-all break-words font-medium text-accent-text underline decoration-1 underline-offset-4 hover:decoration-2",children:r[1]},n)}return t.startsWith("*")&&t.endsWith("*")&&t.length>2?i.jsx("em",{children:t.slice(1,-1)},n):i.jsx(C.Fragment,{children:eh(t)},n)})}function th(e){return e.trim().replace(/^\||\|$/g,"").split("|").map(t=>t.trim())}function Gt({text:e,anchorPrefix:t,embeds:n}){const r=e.split(`
`),s=[];let o=0,a=0,l=0;for(;o<r.length;){const u=r[o];if(!u.trim()){o++;continue}if(u.trimStart().startsWith("[[")){const x=u.trim().match(/^\[\[([a-z-]+)\]\]$/);x&&(n!=null&&n[x[1]])&&s.push(i.jsx(C.Fragment,{children:n[x[1]]},a++)),o++;continue}if(u.startsWith("```")){const x=[];for(o++;o<r.length&&!r[o].startsWith("```");)x.push(r[o++]);o++,s.push(i.jsx("pre",{className:"my-4 overflow-x-auto rounded-2xl bg-code-bg px-4 py-3.5 font-mono text-[12.5px] leading-relaxed text-code-ink",children:x.join(`
`)},a++));continue}if(u.trimStart().startsWith("|")){const x=[];for(;o<r.length&&r[o].trimStart().startsWith("|");)/^\s*\|[\s|:-]+\|?\s*$/.test(r[o])||x.push(th(r[o])),o++;if(x.length===0)continue;const[v,...y]=x;s.push(i.jsx("div",{className:"my-4 overflow-x-auto rounded-2xl border border-line bg-elevated",children:i.jsxs("table",{className:"w-full min-w-[420px] border-collapse text-left text-sm",children:[i.jsx("thead",{children:i.jsx("tr",{className:"border-b border-rule",children:v.map((k,p)=>i.jsx("th",{className:"eyebrow px-4 py-3 font-semibold text-ink",children:Lt(k)},p))})}),i.jsx("tbody",{children:y.map((k,p)=>i.jsx("tr",{className:"border-t border-line align-top first:border-t-0",children:k.map((c,m)=>i.jsx("td",{className:"px-4 py-2.5 leading-relaxed",children:Lt(c)},m))},p))})]})},a++));continue}const d=u.match(/^(#{1,4})\s+(.*)$/);if(d){s.push(i.jsx("h3",{id:t?`${t}-s${l++}`:void 0,className:"scroll-mt-16 mb-2 mt-7 font-display text-[1.2rem] font-semibold leading-tight tracking-[-0.02em] text-ink first:mt-0",children:Lt(d[2])},a++)),o++;continue}const f=x=>/^\s*[-•]\s+/.test(x),g=x=>/^\s*\d+\.\s+/.test(x);if(f(u)||g(u)){const x=g(u),v=x?g:f,y=[];for(;o<r.length&&v(r[o]);)y.push(r[o].replace(/^\s*(?:[-•]|\d+\.)\s+/,"")),o++;s.push(x?i.jsx("ol",{className:"my-3 space-y-2",children:y.map((k,p)=>i.jsxs("li",{className:"flex gap-3 leading-relaxed",children:[i.jsxs("span",{className:"w-6 shrink-0 font-display text-[0.85rem] font-medium italic leading-[1.9] text-accent-text",children:["0",p+1]}),i.jsx("span",{className:"min-w-0",children:Lt(k)})]},p))},a++):i.jsx("ul",{className:"my-3 space-y-2",children:y.map((k,p)=>i.jsxs("li",{className:"flex gap-3 leading-relaxed",children:[i.jsx("span",{className:"mt-[0.62em] h-1.5 w-1.5 shrink-0 rounded-full bg-vermillion","aria-hidden":!0}),i.jsx("span",{className:"min-w-0",children:Lt(k)})]},p))},a++));continue}const h=[];for(;o<r.length&&r[o].trim()&&!r[o].startsWith("```")&&!r[o].trimStart().startsWith("[[")&&!r[o].trimStart().startsWith("|")&&!/^#{1,4}\s/.test(r[o])&&!f(r[o])&&!g(r[o]);)h.push(r[o++]);s.push(i.jsx("p",{className:"my-3 leading-relaxed first:mt-0 last:mb-0",children:Lt(h.join(" "))},a++))}return i.jsx("div",{className:"text-[15px] font-normal text-ink",children:s})}function Jn({size:e=40}){return i.jsx("span",{className:"monogram",style:{width:e,height:e,fontSize:Math.max(9,e*.25)},"aria-hidden":!0,children:"ASL"})}const nh={fr:{kicker:"Dépôt UX · Design",title:"Le fichier d’entrée de toutes les règles IA",goal:"Objectif : que l’IA sache où chercher, sans charger tout le dépôt.",parts:[{title:"Rôle & mission de l’IA",detail:"Rôle, missions, posture"},{title:"Normes & formats de fichiers",detail:"Guidelines de composants, tokens, branches"},{title:"Directives UX & Design System",detail:"Accessibilité, UX writing, gestion des états"},{title:"Directives Git & workflow",detail:"Convention de commit, demande d’intégration"},{title:"Cartographie du dépôt",detail:"Où se trouve chaque type de contenu"}]},en:{kicker:"UX · Design repository",title:"The entry file for all AI rules",goal:"Goal: the AI knows where to look, without loading the whole repository.",parts:[{title:"AI role & mission",detail:"Role, missions, posture"},{title:"File standards & formats",detail:"Component guidelines, tokens, branches"},{title:"UX & Design System directives",detail:"Accessibility, UX writing, state handling"},{title:"Git & workflow directives",detail:"Commit convention, pull request"},{title:"Repository map",detail:"Where each type of content lives"}]}},rh=[{group:{fr:"Design System",en:"Design System"},items:["template_guidelines.md","tokens.md"]},{group:{fr:"Composants",en:"Components"},items:["styles_hybride.md","component_guidelines.md"]},{group:{fr:"Utilisateurs & règles",en:"Users & rules"},items:["personas/","business-rules/"]},{group:{fr:"Livrables UX",en:"UX deliverables"},items:["sitemap/","user-flows/","journeys/","ux-specs/"]},{group:{fr:"Références",en:"Reference"},items:["benchmark/","decisions/","context/"]}],sh={fr:{tree:"Arborescence par usage",auto:"Automatisation",autoDetail:"Synchronisation des tokens, demandes d’intégration préparées pour les développeurs",dev:"Dépôt technique · Devs",devDetail:"Consomme ce que le dépôt UX produit",preview:"Lien de prévisualisation",previewDetail:"Chaque demande d’intégration génère une adresse où voir le prototype"},en:{tree:"A tree organised by use",auto:"Automation",autoDetail:"Token sync, pull requests prepared for developers",dev:"Technical repository · Devs",devDetail:"Consumes what the UX repository produces",preview:"Preview link",previewDetail:"Every pull request generates an address where the prototype can be seen"}};function ih({name:e}){const n=e.endsWith(".md")?wr:ga;return i.jsxs("li",{className:"inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-2.5 py-1 font-mono text-[11px] text-ink",children:[i.jsx(n,{size:11,className:"shrink-0 text-muted","aria-hidden":!0})," ",e]})}function oh({lang:e}){const t=nh[e],n=sh[e];return i.jsxs("figure",{className:"my-5 overflow-hidden rounded-3xl border border-line bg-elevated",children:[i.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2",children:[i.jsxs("div",{className:"border-b border-line p-5 sm:border-b-0 sm:border-r",children:[i.jsx("p",{className:"eyebrow text-muted",children:t.kicker}),i.jsxs("p",{className:"mt-2 inline-flex items-center gap-2 font-mono text-sm font-semibold text-accent-text",children:[i.jsx(wr,{size:14,"aria-hidden":!0})," CLAUDE.md"]}),i.jsx("p",{className:"mt-1 text-[13px] font-medium leading-snug text-ink",children:t.title}),i.jsx("ol",{className:"mt-4 space-y-2.5",children:t.parts.map((r,s)=>i.jsxs("li",{className:"flex gap-2.5",children:[i.jsxs("span",{className:"font-display text-[12px] font-medium italic leading-[1.5] text-accent-text",children:["0",s+1]}),i.jsxs("span",{className:"min-w-0",children:[i.jsx("span",{className:"block text-[13px] font-semibold leading-snug text-ink",children:r.title}),i.jsx("span",{className:"block text-[12px] font-light leading-snug text-muted",children:r.detail})]})]},r.title))}),i.jsx("p",{className:"mt-4 border-t border-line pt-3 text-[12px] font-medium leading-snug text-olive-text",children:t.goal})]}),i.jsxs("div",{className:"p-5",children:[i.jsx("p",{className:"eyebrow text-muted",children:n.tree}),i.jsx("ul",{className:"mt-3 space-y-3",children:rh.map(r=>i.jsxs("li",{children:[i.jsx("p",{className:"mb-1.5 text-[12px] font-semibold text-ink",children:r.group[e]}),i.jsx("ul",{className:"flex flex-wrap gap-1.5",children:r.items.map(s=>i.jsx(ih,{name:s},s))})]},r.group.en))})]})]}),i.jsxs("div",{className:"flex flex-col items-stretch gap-2 border-t border-line p-5 sm:flex-row sm:items-center",children:[i.jsxs("div",{className:"flex flex-1 items-start gap-2.5 rounded-2xl border border-line bg-bg p-3",children:[i.jsx(kf,{size:14,className:"mt-0.5 shrink-0 text-olive-text","aria-hidden":!0}),i.jsxs("p",{className:"min-w-0 text-[12px] leading-snug",children:[i.jsx("span",{className:"block font-semibold text-ink",children:n.auto}),i.jsx("span",{className:"font-light text-muted",children:n.autoDetail})]})]}),i.jsxs("span",{className:"flex justify-center text-muted","aria-hidden":!0,children:[i.jsx(hr,{size:16,className:"hidden sm:block"}),i.jsx(go,{size:16,className:"sm:hidden"})]}),i.jsxs("div",{className:"flex flex-1 items-start gap-2.5 rounded-2xl border border-line bg-bg p-3",children:[i.jsx(ga,{size:14,className:"mt-0.5 shrink-0 text-muted","aria-hidden":!0}),i.jsxs("p",{className:"min-w-0 text-[12px] leading-snug",children:[i.jsx("span",{className:"block font-semibold text-ink",children:n.dev}),i.jsx("span",{className:"font-light text-muted",children:n.devDetail})]})]}),i.jsxs("span",{className:"flex justify-center text-muted","aria-hidden":!0,children:[i.jsx(hr,{size:16,className:"hidden sm:block"}),i.jsx(go,{size:16,className:"sm:hidden"})]}),i.jsxs("div",{className:"flex flex-1 items-start gap-2.5 rounded-2xl border border-line bg-bg p-3",children:[i.jsx(gf,{size:14,className:"mt-0.5 shrink-0 text-muted","aria-hidden":!0}),i.jsxs("p",{className:"min-w-0 text-[12px] leading-snug",children:[i.jsx("span",{className:"block font-semibold text-ink",children:n.preview}),i.jsx("span",{className:"font-light text-muted",children:n.previewDetail})]})]})]})]})}const ah={fr:[{value:"+5 / 17",label:"modules optimisés par l’IA"},{value:"~1 500",label:"utilisateurs concernés"},{value:"1 an",label:"de delivery en banque régulée"}],en:[{value:"+5 / 17",label:"modules optimised with AI"},{value:"~1,500",label:"users reached"},{value:"1 year",label:"of delivery in regulated banking"}]};function Nd({lang:e}){return i.jsx("ul",{className:"my-4 grid grid-cols-3 gap-2 sm:gap-3",children:ah[e].map(t=>i.jsxs("li",{className:"rounded-2xl border border-line bg-elevated p-3 sm:p-4",children:[i.jsx("span",{className:"block font-display text-[1.35rem] font-semibold leading-none tracking-[-0.03em] text-ink sm:text-[1.7rem]",children:t.value}),i.jsx("span",{className:"mt-1.5 block text-[11.5px] font-light leading-snug text-muted sm:text-xs",children:t.label})]},t.label))})}const lh={fr:[{title:"Source de vérité",text:"Réutiliser avant d’inventer. Diverger est une décision discutée."},{title:"Double bibliothèque en miroir",text:"Le composant de référence et sa copie lisible par l’IA."},{title:"Aucune valeur inventée",text:"Dimensions, couleurs et comportements viennent des sources réelles."},{title:"Boucle courte et revue",text:"De petits changements, revus à l’œil, sur une branche."}],en:[{title:"Source of truth",text:"Reuse before inventing. Diverging is a discussed decision."},{title:"Mirrored double library",text:"The reference component and its AI-readable copy."},{title:"No invented value",text:"Dimensions, colours and behaviours come from the real sources."},{title:"Short loop and review",text:"Small changes, reviewed by eye, on a branch."}]};function Ad({lang:e}){return i.jsx("ol",{className:"my-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3",children:lh[e].map((t,n)=>i.jsxs("li",{className:"flex gap-3 rounded-2xl border border-line bg-elevated p-4",children:[i.jsx("span",{className:"flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-fg",children:n+1}),i.jsxs("span",{className:"min-w-0",children:[i.jsx("span",{className:"block text-[13.5px] font-semibold leading-snug text-ink",children:t.title}),i.jsx("span",{className:"mt-1 block text-[12.5px] font-light leading-snug text-muted",children:t.text})]})]},t.title))})}const uh={fr:[{role:"Lead Design",ai:"Cadre, standards, revues",human:"Pilote l’intention, arbitre"},{role:"UX UI Designer",ai:"Wireframes, parcours, prototypes",human:"Juge les générations"},{role:"Dev Front",ai:"Intégration, Design System",human:"Implémente"},{role:"Product Owner",ai:"Specs, priorisation",human:"Teste sur des prototypes autonomes"}],en:[{role:"Lead Design",ai:"Framework, standards, reviews",human:"Steers the intention, arbitrates"},{role:"UX UI Designer",ai:"Wireframes, flows, prototypes",human:"Judges the generations"},{role:"Front Dev",ai:"Integration, Design System",human:"Implements"},{role:"Product Owner",ai:"Specs, prioritisation",human:"Tests on standalone prototypes"}]},ch=[Af,bf,ff,mf];function dh({lang:e}){return i.jsx("ul",{className:"my-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3",children:uh[e].map((t,n)=>{const r=ch[n];return i.jsxs("li",{className:"rounded-2xl border border-line bg-elevated p-4",children:[i.jsxs("span",{className:"flex items-center gap-2 text-[13.5px] font-semibold text-ink",children:[i.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full bg-accent-tint text-accent-text",children:i.jsx(r,{size:14,"aria-hidden":!0})}),t.role]}),i.jsxs("span",{className:"mt-3 flex items-start gap-2 text-[12.5px] leading-snug text-ink",children:[i.jsxs("span",{className:"tag shrink-0 bg-[var(--ai-tint)] text-[var(--ai-text)]",children:[i.jsx(Ss,{size:12,"aria-hidden":!0})," Claude"]}),i.jsx("span",{className:"font-light",children:t.ai})]}),i.jsx("span",{className:"mt-1.5 block text-[12.5px] font-medium leading-snug text-ink",children:t.human})]},t.role)})})}const ph={fr:{handoff:"Passer le relais sans perte",chips:["Fichier d’état tenu à jour","Prompt de reprise prêt à coller","Mémoire dans des fichiers"],onboarding:"Onboarding par un seul prompt",steps:["Contexte","Outils","Accès","Dépôts","Arborescence","Opérationnel"],note:"Opérationnel en quelques heures, en autonomie."},en:{handoff:"Handoffs without loss",chips:["Status file kept up to date","Ready-to-paste kickoff prompt","Memory kept in files"],onboarding:"Onboarding from a single prompt",steps:["Context","Tools","Access","Repositories","Tree","Operational"],note:"Operational within a few hours, autonomously."}};function mh({lang:e}){const t=ph[e];return i.jsxs("div",{className:"my-4 rounded-2xl border border-line bg-elevated p-4",children:[i.jsx("p",{className:"eyebrow text-muted",children:t.handoff}),i.jsx("ul",{className:"mt-2.5 flex flex-wrap gap-1.5",children:t.chips.map(n=>i.jsx("li",{className:"tag bg-olive-tint text-olive-text",children:n},n))}),i.jsx("p",{className:"eyebrow mt-5 text-muted",children:t.onboarding}),i.jsx("ol",{className:"mt-2.5 flex flex-wrap items-center gap-x-1.5 gap-y-2",children:t.steps.map((n,r)=>{const s=r===t.steps.length-1;return i.jsxs("li",{className:"flex items-center gap-1.5",children:[i.jsxs("span",{className:`inline-flex items-center gap-1.5 rounded-full py-1 pl-1 pr-2.5 text-[12px] font-medium ${s?"bg-accent text-accent-fg":"border border-line bg-bg text-ink"}`,children:[i.jsx("span",{className:`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold ${s?"bg-accent-fg text-accent":"bg-accent-tint text-accent-text"}`,children:r+1}),n]}),!s&&i.jsx(hr,{size:12,className:"text-muted","aria-hidden":!0})]},n)})}),i.jsx("p",{className:"mt-2.5 text-[12px] font-light text-muted",children:t.note})]})}const fh={fr:{caption:"Même demande, sur un projet vide : une page complète de portfolio conversationnel",criterion:"Critère",without:"Sans le skill",withSkill:"Avec le skill",yes:"Respecté",no:"Non respecté",rows:[["Icône à droite du libellé dans chaque bouton",!1,!0],["Carte de suggestion à structure fixe",!1,!0],["Contact par email en bouton plein, CV en contour",!1,!0],["Chiffres clés en couleur neutre",!1,!0],["Aucun texte tout en majuscules",!0,!0],["Menu mobile en tiroir partiel",!0,!0],["Aucune couleur en dur, aucune ombre non prévue",!0,!0]],note:"Un essai par version. Sur le projet complet, le skill ne change rien : l’agent déduit les règles du code existant. Il sert donc là où le code ne montre pas encore l’exemple."},en:{caption:"Same request, on an empty project: a full conversational portfolio page",criterion:"Criterion",without:"Without the skill",withSkill:"With the skill",yes:"Met",no:"Not met",rows:[["Icon to the right of the label in every button",!1,!0],["Suggestion card with a fixed structure",!1,!0],["Email contact as filled button, CV outlined",!1,!0],["Key figures in neutral colour",!1,!0],["No all-caps text",!0,!0],["Mobile menu as a partial drawer",!0,!0],["No hard-coded colour, no unplanned shadow",!0,!0]],note:"One run per version. On the full project the skill changes nothing: the agent infers the rules from the existing code. So it is useful where the code does not yet show the example."}};function Tl({ok:e,label:t}){return i.jsx("span",{role:"img","aria-label":t,className:`inline-flex h-5 w-5 items-center justify-center rounded-full ${e?"bg-olive-tint text-olive-text":"bg-[var(--warn-tint)] text-[var(--warn-text)]"}`,children:e?i.jsx(kt,{size:11,strokeWidth:3,"aria-hidden":!0}):i.jsx(Ze,{size:11,strokeWidth:3,"aria-hidden":!0})})}function hh({lang:e}){const t=fh[e],n=r=>`${t.rows.filter(s=>s[r]).length} / ${t.rows.length}`;return i.jsxs("figure",{className:"my-4 overflow-hidden rounded-2xl border border-line bg-elevated",children:[i.jsx("figcaption",{className:"eyebrow border-b border-line px-4 py-2.5 text-muted",children:t.caption}),i.jsxs("table",{className:"w-full border-collapse text-left",children:[i.jsx("thead",{children:i.jsxs("tr",{className:"border-b border-line",children:[i.jsx("th",{className:"eyebrow px-4 py-2.5 font-semibold text-ink",children:t.criterion}),i.jsx("th",{className:"eyebrow w-[4.5rem] px-2 py-2.5 text-center font-semibold text-ink sm:w-28",children:t.without}),i.jsx("th",{className:"eyebrow w-[4.5rem] px-2 py-2.5 text-center font-semibold text-ink sm:w-28",children:t.withSkill})]})}),i.jsxs("tbody",{children:[t.rows.map(([r,s,o])=>i.jsxs("tr",{className:"border-b border-line",children:[i.jsx("td",{className:"px-4 py-2 text-[12.5px] font-light leading-snug text-ink",children:r}),i.jsx("td",{className:"px-2 py-2 text-center",children:i.jsx(Tl,{ok:s,label:s?t.yes:t.no})}),i.jsx("td",{className:"px-2 py-2 text-center",children:i.jsx(Tl,{ok:o,label:o?t.yes:t.no})})]},r)),i.jsxs("tr",{children:[i.jsx("td",{className:"px-4 py-2.5"}),i.jsx("td",{className:"px-2 py-2.5 text-center font-display text-[1.05rem] font-semibold text-ink",children:n(1)}),i.jsx("td",{className:"px-2 py-2.5 text-center font-display text-[1.05rem] font-semibold text-ink",children:n(2)})]})]})]}),i.jsx("p",{className:"border-t border-line px-4 py-2.5 text-[12px] font-light leading-snug text-muted",children:t.note})]})}const gh={fr:{seen:"Ce qu’elle a vu",fixed:"La règle corrigée",items:[{seen:"Des chiffres clés qui se chevauchent et un trait qui ne sépare rien.",fixed:"Des consignes de mise en page : une grille, un trait seulement entre deux contenus."},{seen:"Deux boutons de même poids côte à côte, la couleur d’action au mauvais endroit.",fixed:"Une hiérarchie des actions : un bouton plein vert, l’autre en contour."},{seen:"Un menu sans bouton pour le replier, la langue écrite en toutes lettres.",fixed:"L’anatomie complète du menu et les deux versions du sélecteur."}]},en:{seen:"What she saw",fixed:"The rule she fixed",items:[{seen:"Key figures overlapping and a line that separated nothing.",fixed:"Layout guidance: a grid, and a line only between two contents."},{seen:"Two buttons of equal weight side by side, the action colour in the wrong place.",fixed:"An action hierarchy: one filled green button, the other outlined."},{seen:"A menu with no button to collapse it, the language written out in full.",fixed:"The full anatomy of the menu and both versions of the control."}]}};function xh({lang:e}){const t=gh[e];return i.jsx("ol",{className:"my-4 space-y-2",children:t.items.map((n,r)=>i.jsxs("li",{className:"flex gap-3 rounded-2xl border border-line bg-elevated p-4",children:[i.jsx("span",{className:"flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-fg",children:r+1}),i.jsxs("span",{className:"grid min-w-0 flex-1 grid-cols-1 gap-x-5 gap-y-2 sm:grid-cols-2",children:[i.jsxs("span",{className:"min-w-0",children:[i.jsx("span",{className:"eyebrow block text-muted",children:t.seen}),i.jsx("span",{className:"mt-0.5 block text-[12.5px] font-light leading-snug text-ink",children:n.seen})]}),i.jsxs("span",{className:"min-w-0",children:[i.jsx("span",{className:"eyebrow block text-muted",children:t.fixed}),i.jsx("span",{className:"mt-0.5 block text-[12.5px] font-medium leading-snug text-ink",children:n.fixed})]})]})]},n.seen))})}const Ns=e=>`./grdf/${e}.jpg`,vh={fr:{before:"Avant",after:"Après",slider:"Déplacer la séparation entre avant et après",caption:"La page d’accueil sur ordinateur : Act4Gaz, puis justdecarb.grdf.fr. Faites glisser la séparation."},en:{before:"Before",after:"After",slider:"Move the divider between before and after",caption:"The home page on desktop: Act4Gaz, then justdecarb.grdf.fr. Drag the divider."}};function Id({lang:e}){const t=vh[e],[n,r]=C.useState(50);return i.jsxs("figure",{className:"my-4",children:[i.jsxs("div",{className:"relative aspect-[16/10] select-none overflow-hidden rounded-2xl border border-line bg-elevated",children:[i.jsx("img",{src:Ns("apres-accueil"),alt:t.after,className:"absolute inset-0 h-full w-full object-cover object-top"}),i.jsx("div",{className:"absolute inset-0",style:{clipPath:`inset(0 ${100-n}% 0 0)`},children:i.jsx("img",{src:Ns("avant-accueil"),alt:t.before,className:"absolute inset-0 h-full w-full object-cover object-top"})}),i.jsx("span",{className:"tag absolute left-3 top-3 bg-ink text-bg",children:t.before}),i.jsx("span",{className:"tag absolute right-3 top-3 bg-ink text-bg",children:t.after}),i.jsx("div",{className:"pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-ink",style:{left:`${n}%`},children:i.jsx("span",{className:"absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-bg",children:i.jsx(pf,{size:16,"aria-hidden":!0})})}),i.jsx("input",{type:"range",min:0,max:100,value:n,onChange:s=>r(Number(s.target.value)),"aria-label":t.slider,className:"absolute inset-0 h-full w-full cursor-ew-resize opacity-0"})]}),i.jsx("figcaption",{className:"mt-2 text-[12.5px] font-light leading-snug text-muted",children:t.caption})]})}const yh={persona:[{file:"persona",caption:{fr:"Le persona : Julien, ses besoins, ce qu’il aime, ses frustrations",en:"The persona: Julien, his needs, likes and frustrations"}}],map:[{file:"parcours",caption:{fr:"Carte d’expérience sur l’ancienne plateforme : actions, réflexions, émotions",en:"Experience map on the old platform: actions, thoughts, emotions"}}],moodboard:[{file:"moodboard",caption:{fr:"Moodboard de la nouvelle identité",en:"Moodboard for the new identity"}}],screens:[{file:"apres-accueil",caption:{fr:"La une : un contenu à la fois, puis les chiffres clés",en:"Front page: one piece of content at a time, then the key figures"}},{file:"apres-contenus",caption:{fr:"Les contenus : une thématique, puis un filtre par format",en:"Content: a topic, then a filter by format"}}]};function Or({lang:e,set:t}){const n=yh[t],r=n.length===1;return i.jsx("ul",{className:`my-4 grid grid-cols-1 gap-3 ${r?"":"sm:grid-cols-2"} ${t==="persona"?"max-w-[420px]":""}`,children:n.map(s=>i.jsx("li",{className:"flex",children:i.jsxs("a",{href:Ns(s.file),target:"_blank",rel:"noopener noreferrer",className:"t-all flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-elevated hover:border-rule",children:[i.jsx("img",{src:Ns(s.file),alt:s.caption[e],loading:"lazy",className:r?"block h-auto w-full":"block aspect-[16/10] w-full object-cover object-top"}),i.jsx("span",{className:"block flex-1 border-t border-line px-4 py-2.5 text-[12.5px] font-light leading-snug text-muted",children:s.caption[e]})]})},s.file))})}function bh({id:e,lang:t}){const n=wd[t];return i.jsx("section",{id:e,className:"mt-6 scroll-mt-16 rounded-3xl border border-line bg-elevated p-5",children:i.jsxs("div",{className:"grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto]",children:[i.jsxs("div",{className:"min-w-0",children:[i.jsx("p",{className:"eyebrow text-muted",children:n.protoEyebrow}),i.jsx("h3",{className:"mt-1 font-display text-[1.2rem] font-semibold leading-tight tracking-[-0.02em] text-ink",children:n.ctaTitle}),i.jsx("p",{className:"mt-2 text-[13.5px] font-light leading-relaxed text-muted",children:n.ctaText}),i.jsxs("div",{className:"mt-4 flex flex-wrap gap-3",children:[i.jsxs("a",{href:Vf,target:"_blank",rel:"noopener noreferrer",className:"btn-primary",children:[n.site," ",i.jsx(jn,{size:15,"aria-hidden":!0})]}),i.jsxs("a",{href:$f,target:"_blank",rel:"noopener noreferrer",className:"btn-secondary",children:[n.openFigma," ",i.jsx(jn,{size:15,"aria-hidden":!0})]})]})]}),i.jsx("div",{className:"relative mx-auto aspect-[375/700] w-[300px] max-w-full overflow-hidden rounded-xl border border-rule bg-white",children:i.jsx("iframe",{src:Bf,title:n.viewerTitle,loading:"eager",allowFullScreen:!0,className:"absolute inset-x-0 -top-10 block h-[calc(100%+5rem)] w-full border-0"})})]})})}function Dd({links:e,label:t}){const n=r=>{var s;return(s=document.getElementById(r))==null?void 0:s.scrollIntoView({behavior:"smooth",block:"start"})};return i.jsx("nav",{"aria-label":t,className:"sticky top-0 z-10 -mx-1 mb-5 bg-bg px-1 py-2.5",children:i.jsx("ul",{className:"flex gap-1.5 overflow-x-auto",children:e.map((r,s)=>i.jsx("li",{className:"shrink-0",children:i.jsxs("button",{onClick:()=>n(r.id),className:"t-all inline-flex items-center gap-1.5 rounded-full border border-line bg-elevated px-3 py-1.5 text-xs font-medium text-ink hover:border-rule hover:bg-surface-2",children:[i.jsxs("span",{className:"font-display text-[11px] italic opacity-60",children:["0",s+1]}),r.label]})},r.id))})})}const wh=`#!/usr/bin/env node
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
`,Pd="asl-design-system/",Ll=[{path:"SKILL.md",content:md},{path:"references/fondations.md",content:hd},{path:"references/styles.md",content:gd},{path:"references/composants.md",content:fd},{path:"scripts/check.mjs",content:wh}];function kh(e,t){return e==="---"?"text-code-muted":t?"text-[var(--code-key)]":/^#{1,3}\s/.test(e)?"font-semibold text-[var(--code-heading)]":(/^\s*- \[ \]/.test(e),"text-code-ink")}function jh({t:e}){const[t,n]=C.useState(0),[r,s]=C.useState(!1),o=Ll[t],a=o.content.replace(/\n$/,"").split(`
`),l=async()=>{try{await navigator.clipboard.writeText(o.content),s(!0),window.setTimeout(()=>s(!1),1600)}catch{}};let u=0;return i.jsxs("figure",{className:"rise my-6 overflow-hidden rounded-3xl border border-line bg-code-bg",children:[i.jsxs("div",{className:"flex flex-wrap items-center gap-2 border-b border-[var(--code-line)] px-4 py-3",children:[i.jsx(sd,{size:15,className:"text-code-muted","aria-hidden":!0}),i.jsx("span",{className:"font-mono text-xs text-code-muted",children:Pd}),i.jsx("span",{className:"ml-auto rounded-full bg-[var(--code-key-tint)] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--code-key)]",children:e.skill.badge})]}),i.jsxs("div",{className:"flex items-center gap-1 overflow-x-auto border-b border-[var(--code-line)] px-2 pt-2",role:"tablist",children:[Ll.map((d,f)=>i.jsxs("button",{role:"tab","aria-selected":f===t,onClick:()=>n(f),className:`t-all flex shrink-0 items-center gap-1.5 rounded-t-xl px-3 py-2 font-mono text-xs ${f===t?"bg-[var(--code-line)] text-code-ink":"text-code-muted hover:text-code-ink"}`,children:[i.jsx(wr,{size:13,"aria-hidden":!0}),d.path]},d.path)),i.jsxs("button",{onClick:l,className:"t-all ml-auto mr-1 flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-code-muted hover:bg-[var(--code-line)] hover:text-code-ink",children:[r?e.skill.copied:e.skill.copy,r?i.jsx(kt,{size:13,"aria-hidden":!0}):i.jsx(rd,{size:13,"aria-hidden":!0})]})]}),i.jsx("pre",{className:"max-h-[380px] overflow-auto py-3 font-mono text-[12.5px] leading-[1.65]",role:"tabpanel",children:a.map((d,f)=>{const g=d==="---",h=t===0&&u===1&&!g;return g&&u++,i.jsxs("div",{className:"flex px-4 hover:bg-[var(--code-hover)]",children:[i.jsx("span",{className:"w-8 shrink-0 select-none pr-3 text-right text-code-muted opacity-60","aria-hidden":!0,children:f+1}),i.jsx("span",{className:`min-w-0 whitespace-pre-wrap break-words ${kh(d,h)}`,children:d||" "})]},f)})}),i.jsx("figcaption",{className:"border-t border-[var(--code-line)] px-4 py-2.5 text-xs font-light text-code-muted",children:e.skill.caption})]})}function Sh({message:e,lang:t,t:n,streamCount:r,isLast:s,onAction:o,onFollowUp:a,onOpenPrototype:l,onOpenDesignSystem:u}){var S,P;if(e.role==="user"){const j=e.text??Mt(e.questionOf??"").question[t];return i.jsx("div",{className:"rise flex justify-end",children:i.jsx("div",{className:"max-w-[85%] whitespace-pre-wrap break-words rounded-3xl rounded-br-md bg-bubble px-5 py-3 text-[15px] leading-relaxed text-bubble-fg",children:j})})}const d=Mt(e.intentId),f=jd(e.intentId,t,e.model),g=r!==null,h=g?r:e.stoppedAt,x=h==null?f:Sd(f).slice(0,h).join(""),v=!g&&e.stoppedAt===void 0,y=g&&r===0,k=(S=d.actions)!=null&&S.includes("email")?"email":(P=d.actions)==null?void 0:P[0],p=f.includes("[[flow]]"),c=d.flow?i.jsx(Cd,{id:`${e.id}-flow`,lang:t,board:d.flow==="covenant"?vd:d.flow==="grdf"?Of:Gf,cta:d.flow==="covenant"?{label:ge[t].open,onClick:()=>l("covenant")}:d.flow==="grdf"?{label:wd[t].open,onClick:()=>{var j;return(j=document.getElementById(`${e.id}-proto`))==null?void 0:j.scrollIntoView({behavior:"smooth",block:"start"})}}:void 0}):null,m=ge[t],b=d.anchors?[...d.flow&&!p?[{id:`${e.id}-flow`,label:d.flow==="covenant"?m.navFlow:m.navUxFlow}]:[],...[...f.matchAll(/^###\s+(.+)$/gm)].map((j,I)=>({id:`${e.id}-s${I}`,label:j[1]})),...d.attachment==="covenant"||d.attachment==="grdf"?[{id:`${e.id}-proto`,label:m.navProto}]:[]]:[];return i.jsxs("div",{className:"rise flex gap-3 sm:gap-4",children:[i.jsx("div",{className:"mt-0.5 hidden sm:block",children:i.jsx(Jn,{size:34})}),i.jsxs("div",{className:"min-w-0 flex-1",children:[i.jsxs("div",{className:"eyebrow mb-2.5 flex items-center gap-2.5",children:[i.jsx("span",{className:"font-semibold text-ink",children:n.assistantName}),i.jsx("span",{className:"h-px w-5 bg-rule","aria-hidden":!0}),i.jsx("span",{className:"text-muted",children:n.models[e.model].name})]}),b.length>0&&!y&&i.jsx(Dd,{links:b,label:m.navLabel}),!p&&!y&&c,y?i.jsx("div",{className:"flex h-7 items-center gap-1.5",role:"status","aria-label":n.thinking,children:[0,1,2].map(j=>i.jsx("span",{className:"thinking-dot",style:{animationDelay:`${j*.16}s`}},j))}):i.jsxs("div",{"aria-live":g?"off":"polite",children:[i.jsx(Gt,{text:x,anchorPrefix:d.anchors?e.id:void 0,embeds:{flow:c,"grdf-compare":i.jsx(Id,{lang:t}),"grdf-persona":i.jsx(Or,{lang:t,set:"persona"}),"grdf-map":i.jsx(Or,{lang:t,set:"map"}),"grdf-moodboard":i.jsx(Or,{lang:t,set:"moodboard"}),"grdf-screens":i.jsx(Or,{lang:t,set:"screens"}),"repo-map":i.jsx(oh,{lang:t}),"bnp-figures":i.jsx(Nd,{lang:t}),"ds-principles":i.jsx(Ad,{lang:t}),"team-roles":i.jsx(dh,{lang:t}),relay:i.jsx(mh,{lang:t}),"skill-test":i.jsx(hh,{lang:t}),"skill-lessons":i.jsx(xh,{lang:t})}}),g&&i.jsx("span",{className:"caret","aria-hidden":!0})]}),e.stoppedAt!==void 0&&i.jsxs("p",{className:"tag mt-3 border border-rule text-ink",children:[i.jsx(va,{size:10,className:"fill-current","aria-hidden":!0})," ",n.stopped]}),v&&d.attachment==="skill"&&e.model!=="express"&&i.jsx(jh,{t:n}),v&&(d.attachment==="skill"||d.attachment==="ds")&&i.jsxs("div",{className:"rise mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 rounded-3xl border border-line bg-elevated p-5",children:[i.jsxs("div",{className:"min-w-0 flex-1 basis-64",children:[i.jsx("p",{className:"text-sm font-semibold text-ink",children:Qn[t].openTitle}),i.jsx("p",{className:"mt-1 text-[13px] font-light leading-relaxed text-muted",children:Qn[t].openText})]}),i.jsxs("button",{onClick:u,className:"btn-primary",children:[Qn[t].open," ",i.jsx(id,{size:14,"aria-hidden":!0})]})]}),!y&&d.attachment==="grdf"&&i.jsx(bh,{id:`${e.id}-proto`,lang:t}),v&&d.attachment==="covenant"&&i.jsxs("div",{id:`${e.id}-proto`,className:"rise mt-6 flex scroll-mt-16 flex-wrap items-center gap-x-5 gap-y-3 rounded-3xl border border-line bg-elevated p-5",children:[i.jsxs("div",{className:"min-w-0 flex-1 basis-64",children:[i.jsx("p",{className:"text-sm font-semibold text-ink",children:ge[t].ctaTitle}),i.jsx("p",{className:"mt-1 text-[13px] font-light leading-relaxed text-muted",children:ge[t].ctaText})]}),i.jsxs("button",{onClick:()=>l("covenant"),className:"btn-primary",children:[ge[t].open," ",i.jsx(xa,{size:14,className:"fill-current","aria-hidden":!0})]})]}),v&&d.actions&&i.jsx("div",{className:"rise mt-5 flex flex-wrap gap-3",children:[...d.actions].sort((j,I)=>+(I===k)-+(j===k)).map(j=>{const I=j==="cv"?wr:Ge;return i.jsxs("button",{onClick:()=>o(j),className:j===k?"btn-primary":"btn-secondary",children:[j==="cv"?n.actionCV:n.actionEmail," ",i.jsx(I,{size:16,"aria-hidden":!0})]},j)})}),v&&s&&d.followUps&&i.jsxs("div",{className:"rise mt-6",children:[i.jsxs("p",{className:"eyebrow mb-3 flex items-center gap-3 text-muted",children:[i.jsx("span",{children:n.followUps}),i.jsx("span",{className:"h-px flex-1 bg-line","aria-hidden":!0})]}),i.jsx("div",{className:"flex flex-wrap gap-2",children:d.followUps.map(j=>{const I=Mt(j);return i.jsxs("button",{onClick:()=>a(j),className:"t-all group inline-flex items-center gap-1.5 rounded-full border border-line bg-elevated px-3.5 py-1.5 text-left text-sm text-ink hover:border-rule hover:bg-surface-2",children:[(I.chip??I.question)[t],i.jsx(jn,{size:14,className:"shrink-0 text-vermillion","aria-hidden":!0})]},j)})})]})]})]})}const re={name:"Anne-Sophie Leroy",monogram:"ASL",email:"leroy.annesophie02@gmail.com",phone:"06 30 47 84 39",phoneHref:"tel:+33630478439",linkedin:"linkedin.com/in/anne-sophie-leroy",linkedinHref:"https://www.linkedin.com/in/anne-sophie-leroy",location:"Paris, France",cvFile:"CV-Anne-Sophie-Leroy.pdf"},Ch={fr:"Product Designer — UX/UI, Design Ops & AI Workflows",en:"Product Designer — UX/UI, Design Ops & AI Workflows"},Nh={fr:"Product Designer spécialisée en UX/UI, Design Ops et workflows IA. Je conjugue un héritage créatif issu des arts visuels et de la mode avec une forte expertise technique (Design System, AI Skills, vibecoding) pour concevoir des produits complexes plus lisibles et industrialiser la production des équipes design.",en:"Product Designer specialising in UX/UI, Design Ops and AI workflows. I combine a creative heritage from visual arts and fashion with strong technical expertise (Design System, AI Skills, vibecoding) to make complex products more readable and to industrialise how design teams deliver."},yo=[{id:"bnp",intentId:"bnp",title:{fr:"Cadrer une équipe UX augmentée par l’IA",en:"Framing an AI-augmented UX team"},tag:{fr:"2026 · Banque · Design Ops IA",en:"2026 · Banking · AI Design Ops"}},{id:"covenant",intentId:"covenant",title:{fr:"Covenant monitoring assisté par IA",en:"AI-assisted covenant monitoring"},tag:{fr:"2026 · Banque d’investissement · IA",en:"2026 · Investment bank · AI"}},{id:"grdf",intentId:"grdf",title:{fr:"GRDF Refonte éco-conçue et RGAA",en:"GRDF Eco-designed redesign and RGAA"},tag:{fr:"2024 · Énergie · Accessibilité",en:"2024 · Energy · Accessibility"}}],Ah=[{company:"mc2i",role:{fr:"Product Designer UX/UI pour solutions IA",en:"UX/UI Product Designer for AI solutions"},period:{fr:"Janv. 2024 – Aujourd’hui",en:"Jan 2024 – Present"},location:"Paris",bullets:{fr:[],en:[]},missions:[{client:"BNP Paribas CIB",period:{fr:"Août 2024 – Aujourd’hui",en:"Aug 2024 – Present"},role:{fr:"UX UI Product Designer pour solutions IA",en:"UX UI Product Designer for AI solutions"},bullets:{fr:["Refonte complète de la chaîne de crédit pour grandes entreprises : automatisation de processus complexes par l’IA pour réduire significativement la charge cognitive des utilisateurs.","Optimisation du workflow design par l’IA : utilisation du vibecoding pour générer des prototypes haute fidélité en cohérence avec le Design System. Génération des spécifications (.md) UX UI.","Design Ops : co-construction de processus transverses entre les pôles Technique, UX et Produit pour fluidifier et accélérer le cycle de conception. Création de skills pour standardiser et accélérer le travail des équipes.","Gouvernance du Design System : gouvernance des composants UI pour l’IA.","Stratégie UX & recherche : conduite d’entretiens, cartographie de parcours et analyse de données pour traduire les exigences métier en solutions intuitives.","Collaboration agile : alignement continu entre Product Managers, équipes Tech et utilisateurs finaux.","Résultats : +5 modules sur 17 optimisés par l’IA aujourd’hui (environ 1 500 utilisateurs) ; réduction significative de la dette design et accélération du delivery ; une optimisation par l’IA adoptée par les utilisateurs ; réduction significative des erreurs de données."],en:["Full redesign of the credit chain for large corporates: AI automation of complex processes to significantly reduce users’ cognitive load.","AI-optimised design workflow: vibecoding to generate high-fidelity prototypes consistent with the Design System. Generation of UX/UI specifications (.md).","Design Ops: co-built cross-functional processes between the Tech, UX and Product teams to streamline and speed up the design cycle. Created skills to standardise and speed up the teams’ work.","Design System governance: governance of UI components for AI.","UX strategy & research: interviews, journey mapping and data analysis to translate business requirements into intuitive solutions.","Agile collaboration: continuous alignment between Product Managers, Tech teams and end users.","Results: +5 of 17 modules optimised with AI today (around 1,500 users); significant reduction of design debt and faster delivery; AI optimisation adopted by users; significant reduction of data errors."]}},{client:"La Caisse des Dépôts",period:{fr:"Avr. 2024 – Août 2024",en:"Apr 2024 – Aug 2024"},role:{fr:"Product Designer UX/UI",en:"Product Designer UX/UI"},bullets:{fr:["Refonte d’Emaj, outil interne de gestion stratégique des carrières : entretiens utilisateurs, analyse de données, ateliers de co-création, prototypage haute fidélité, tests utilisateurs et coordination inter-équipes."],en:["Redesign of Emaj, an internal strategic career-management tool: user interviews, data analysis, co-creation workshops, high-fidelity prototyping, user testing and cross-team coordination."]}},{client:"GRDF",period:{fr:"Janv. 2024 – Mai 2024",en:"Jan 2024 – May 2024"},role:{fr:"Product Designer UX/UI",en:"Product Designer UX/UI"},bullets:{fr:["Refonte et rebranding d’Act4Gaz vers justdecarb.grdf.fr : audits UX et accessibilité (RGAA), nouvelle identité graphique, Design System dédié sobre et accessible, maquettes mobile-first.","Impact : Note C EcoIndex et conformité RGAA."],en:["Redesign and rebranding of Act4Gaz into justdecarb.grdf.fr: UX and accessibility (RGAA) audits, new visual identity, dedicated lean and accessible Design System, mobile-first mockups.","Impact: EcoIndex grade C and RGAA compliance."]}}]},{company:"Groupe Kering",role:{fr:"Product Designer",en:"Product Designer"},period:{fr:"Sept. 2022 – Déc. 2023",en:"Sep 2022 – Dec 2023"},location:"Paris",bullets:{fr:["Numérisation d’une carte de réduction physique en application mobile évolutive (Privilege Card).","Recherche utilisateurs, ateliers, audits et cartographies UX, conception UI et composants de Design System, tests utilisateurs itératifs.","Impact : 40 000 utilisateurs actifs ; fiabilisation des quotas d’achat et des restrictions de vente en boutique."],en:["Turned a physical discount card into a scalable mobile app (Privilege Card).","User research, workshops, UX audits and journey maps, UI design and Design System components, iterative user testing.","Impact: 40,000 active users; more reliable purchase quotas and in-store sales restrictions."]}},{company:"Eden Park",role:{fr:"Coordinatrice de contenu digital & de projet",en:"Digital Content & Project Coordinator"},period:{fr:"Janv. 2021 – Juil. 2022",en:"Jan 2021 – Jul 2022"},location:"Paris",bullets:{fr:["Pilotage de projets digitaux de bout en bout, calendrier éditorial, maintenance UX du site web, production visuelle (photo/vidéo) pour campagnes SMO/SEA.","Impact : +20 % de ventes e-commerce en 1 an."],en:["End-to-end digital project management, editorial calendar, website UX maintenance, visual production (photo/video) for SMO/SEA campaigns.","Impact: +20% e-commerce sales in one year."]}},{company:"Balmain · Indress",role:{fr:"Designer Broderie (Balmain) · Designer Studio (Indress)",en:"Embroidery Designer (Balmain) · Studio Designer (Indress)"},period:{fr:"2019",en:"2019"},location:"Paris",bullets:{fr:[],en:[]}}],Ih=[{label:{fr:"Design & Prototypage",en:"Design & Prototyping"},items:{fr:["Figma (Expert)","Storybook","Zeroheight","After Effects","Illustrator","Photoshop"],en:["Figma (Expert)","Storybook","Zeroheight","After Effects","Illustrator","Photoshop"]}},{label:{fr:"IA & Vibecoding",en:"AI & Vibecoding"},items:{fr:["Claude Code","AI Skills","Prompt Engineering","Gemini","Midjourney","Adobe Firefly"],en:["Claude Code","AI Skills","Prompt Engineering","Gemini","Midjourney","Adobe Firefly"]}},{label:{fr:"Product & Tech",en:"Product & Tech"},items:{fr:["Discovery","Design Ops","Design System","Specs .md","HTML/CSS (Handoff)","Jira","Confluence"],en:["Discovery","Design Ops","Design System",".md specs","HTML/CSS (Handoff)","Jira","Confluence"]}}],Dh=[{title:{fr:"Master Design UX/UI & Gestion de projet",en:"Master’s in UX/UI Design & Project Management"},school:"Digital School of Paris",period:"2021 – 2023"},{title:{fr:"Bachelor Design de Mode & Textile",en:"Bachelor in Fashion & Textile Design"},school:"Atelier Chardon Savard, Nantes",period:"2016 – 2020"},{title:{fr:"MANAA — Arts Appliqués",en:"MANAA — Applied Arts foundation year"},school:"IMAD, Caen",period:""}],Ph={fr:["Français — Natif","Anglais — Courant","Espagnol — B1"],en:["French — Native","English — Fluent","Spanish — B1"]},Eh={fr:["Bénévolat : inclusion sociale et orientation administrative des jeunes de l’Aide Sociale à l’Enfance","Piano classique (+5 ans)","Course à pied"],en:["Volunteering: social inclusion and administrative guidance for young people in child welfare care (ASE)","Classical piano (5+ years)","Running"]};function yi({text:e}){const t=e.match(/^(Impact\s?:)(.*)$/);return i.jsxs("li",{className:"flex gap-2.5 text-sm leading-relaxed text-ink",children:[i.jsx("span",{className:"mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-vermillion","aria-hidden":!0}),t?i.jsxs("span",{children:[i.jsx("strong",{className:"font-semibold text-olive-text",children:t[1]}),i.jsx("span",{className:"font-medium",children:t[2]})]}):i.jsx("span",{className:"font-light",children:e})]})}function Un({label:e,children:t}){return i.jsxs("section",{className:"cv-section mt-7",children:[i.jsxs("h3",{className:"eyebrow mb-4 flex items-center gap-3 font-semibold text-ink",children:[i.jsx("span",{children:e}),i.jsx("span",{className:"h-px flex-1 bg-rule","aria-hidden":!0})]}),t]})}async function Th(){const e=`./${re.cvFile}`;try{const t=await fetch(e,{method:"HEAD"});if(t.ok&&(t.headers.get("content-type")??"").includes("pdf")){const n=document.createElement("a");n.href=e,n.download=re.cvFile,document.body.appendChild(n),n.click(),n.remove();return}}catch{}window.print()}function Lh({t:e,lang:t}){return i.jsx("div",{className:"cv-print rise mx-auto w-full max-w-3xl px-5 py-8 sm:px-8 sm:py-10",children:i.jsxs("article",{children:[i.jsxs("header",{children:[i.jsx("h1",{className:"font-display text-[clamp(2rem,6vw,3rem)] font-semibold leading-none tracking-[-0.035em] text-ink",children:re.name}),i.jsx("p",{className:"eyebrow mt-4 font-semibold text-accent-text",children:Ch[t]}),i.jsxs("ul",{className:"mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted",children:[i.jsxs("li",{className:"inline-flex items-center gap-1.5",children:[i.jsx(xf,{size:14,"aria-hidden":!0})," ",re.location]}),i.jsx("li",{children:i.jsxs("a",{href:`mailto:${re.email}`,className:"t-all inline-flex items-center gap-1.5 hover:text-ink",children:[i.jsx(Ge,{size:14,"aria-hidden":!0})," ",re.email]})}),i.jsx("li",{children:i.jsxs("a",{href:re.phoneHref,className:"t-all inline-flex items-center gap-1.5 hover:text-ink",children:[i.jsx(ud,{size:14,"aria-hidden":!0})," ",re.phone]})}),i.jsx("li",{children:i.jsxs("a",{href:re.linkedinHref,target:"_blank",rel:"noopener noreferrer",className:"t-all inline-flex items-center gap-1.5 hover:text-ink",children:[i.jsx(od,{size:14,"aria-hidden":!0})," ",re.linkedin]})})]}),i.jsx("p",{className:"mt-4 text-sm font-light leading-relaxed text-ink",children:Nh[t]})]}),i.jsx(Un,{label:e.cv.experience,children:i.jsx("div",{className:"space-y-6",children:Ah.map(n=>{var r;return i.jsxs("div",{children:[i.jsxs("div",{className:"flex flex-wrap items-baseline justify-between gap-x-4",children:[i.jsx("h4",{className:"font-display text-[1.15rem] font-semibold leading-tight tracking-[-0.02em] text-ink",children:n.company}),i.jsxs("span",{className:"text-xs font-medium text-muted",children:[n.period[t]," · ",n.location]})]}),i.jsx("p",{className:"text-sm font-medium text-muted",children:n.role[t]}),n.bullets[t].length>0&&i.jsx("ul",{className:"mt-2 space-y-1.5",children:n.bullets[t].map(s=>i.jsx(yi,{text:s},s))}),(r=n.missions)==null?void 0:r.map(s=>i.jsxs("div",{className:"cv-section mt-3 border-l-2 border-line pl-4",children:[i.jsxs("div",{className:"flex flex-wrap items-baseline justify-between gap-x-4",children:[i.jsx("h5",{className:"text-sm font-semibold text-ink",children:s.client}),i.jsx("span",{className:"text-xs text-muted",children:s.period[t]})]}),i.jsx("p",{className:"text-xs font-medium text-muted",children:s.role[t]}),i.jsx("ul",{className:"mt-1.5 space-y-1.5",children:s.bullets[t].map(o=>i.jsx(yi,{text:o},o))})]},s.client))]},n.company)})})}),i.jsx(Un,{label:e.cv.skills,children:i.jsx("div",{className:"space-y-3",children:Ih.map(n=>i.jsxs("div",{children:[i.jsx("p",{className:"mb-1.5 text-sm font-semibold text-ink",children:n.label[t]}),i.jsx("ul",{className:"flex flex-wrap gap-1.5",children:n.items[t].map(r=>i.jsx("li",{className:"tag bg-olive-tint text-olive-text",children:r},r))})]},n.label.en))})}),i.jsxs("div",{className:"grid gap-x-8 sm:grid-cols-2",children:[i.jsx(Un,{label:e.cv.education,children:i.jsx("ul",{className:"space-y-2.5",children:Dh.map(n=>i.jsxs("li",{className:"text-sm",children:[i.jsx("p",{className:"font-semibold text-ink",children:n.title[t]}),i.jsxs("p",{className:"font-light text-muted",children:[n.school,n.period&&` · ${n.period}`]})]},n.school))})}),i.jsxs("div",{children:[i.jsx(Un,{label:e.cv.languages,children:i.jsx("ul",{className:"space-y-1 text-sm font-light text-ink",children:Ph[t].map(n=>i.jsx("li",{children:n},n))})}),i.jsx(Un,{label:e.cv.interests,children:i.jsx("ul",{className:"space-y-1.5",children:Eh[t].map(n=>i.jsx(yi,{text:n},n))})})]})]})]})})}function Ed({t:e,isStreaming:t,onSend:n,onStop:r}){const[s,o]=C.useState(""),[a,l]=C.useState(0),[u,d]=C.useState(0),[f,g]=C.useState(!1),h=C.useRef(null);C.useEffect(()=>{const c=window.setInterval(()=>l(m=>m+1),4500);return()=>window.clearInterval(c)},[]),C.useEffect(()=>{const c=h.current;c&&(c.style.height="auto",c.style.height=`${Math.min(c.scrollHeight,200)}px`)},[s]);const x=C.useMemo(()=>!s.startsWith("/")||/\s/.test(s)?[]:e.slash.filter(c=>c.cmd.startsWith(s.toLowerCase())),[s,e]),v=x.length>0&&!f;C.useEffect(()=>d(0),[s]);const y=(c=s)=>{const m=c.trim();!m||t||(n(m),o(""))},k=c=>{if(v){if(c.key==="ArrowDown"||c.key==="ArrowUp"){c.preventDefault();const m=c.key==="ArrowDown"?1:-1;d(b=>(b+m+x.length)%x.length);return}if(c.key==="Enter"||c.key==="Tab"){c.preventDefault(),y(x[u].cmd);return}if(c.key==="Escape"){c.preventDefault(),g(!0);return}}c.key==="Enter"&&!c.shiftKey&&!c.nativeEvent.isComposing&&(c.preventDefault(),y())},p=()=>{var c;g(!1),o(m=>m.startsWith("/")?"":"/"),(c=h.current)==null||c.focus()};return i.jsx("div",{className:"relative z-10 mx-auto w-full max-w-3xl px-3 pb-3 sm:px-6 sm:pb-5",children:i.jsxs("div",{className:"relative",children:[v&&i.jsx("ul",{role:"listbox","aria-label":e.commands,className:"rise absolute bottom-full left-0 z-10 mb-2 w-full max-w-sm overflow-hidden rounded-3xl border border-rule bg-elevated p-1.5",children:x.map((c,m)=>i.jsx("li",{role:"option","aria-selected":m===u,children:i.jsxs("button",{onMouseEnter:()=>d(m),onClick:()=>y(c.cmd),className:`t-all flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-left text-sm ${m===u?"bg-surface-2":""}`,children:[i.jsx("code",{className:"rounded-md bg-accent-tint px-1.5 py-0.5 font-mono text-xs font-semibold text-accent-text",children:c.cmd}),i.jsx("span",{className:"text-muted",children:c.desc})]})},c.cmd))}),i.jsxs("div",{className:"t-all flex items-end gap-2 rounded-[28px] border border-line bg-elevated p-2 pl-2.5 shadow-signature focus-within:border-rule",children:[i.jsx("button",{type:"button",onClick:p,"aria-label":e.commands,title:e.commands,className:"t-all mb-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-2 text-ink hover:bg-line",children:i.jsx(Cf,{size:15,"aria-hidden":!0})}),i.jsx("textarea",{ref:h,rows:1,value:s,onChange:c=>{o(c.target.value),g(!1)},onKeyDown:k,placeholder:e.placeholders[a%e.placeholders.length],"aria-label":e.placeholders[0],className:"max-h-[200px] min-h-[40px] flex-1 resize-none bg-transparent py-2 text-[15px] leading-relaxed text-ink outline-none placeholder:font-light placeholder:text-muted"}),t?i.jsx("button",{type:"button",onClick:r,"aria-label":e.stop,title:e.stop,className:"t-all flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-bg shadow-signature hover:opacity-85 active:scale-95",children:i.jsx(va,{size:14,className:"fill-current","aria-hidden":!0})}):i.jsx("button",{type:"button",onClick:()=>y(),disabled:!s.trim(),"aria-label":e.send,title:e.send,className:"t-all flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-fg shadow-signature hover:bg-accent-hover active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none",children:i.jsx(td,{size:18,strokeWidth:2.5,"aria-hidden":!0})})]})]})})}const qh={fr:{contact:"Me contacter",cv:"Voir le CV",open:"Ouvrir le prototype",cancel:"Annuler",send:"Envoyer",copy:"Copier l’adresse",copied:"Copié",newChat:"Nouvelle conversation",email:"Contacter par email",result:"Résultat",friction:"Relances répétées",repeat:"Pour chaque période",close:"Fermer",menu:"Menu",collapse:"Replier",stop:"Arrêter",q1:"Quel a été son rôle ?",q2:"Voir le projet Covenant",question:"Quel est son parcours ?",answer:"Anne-Sophie est Product Designer, spécialisée en **UX/UI**, Design Ops et workflows IA.",ctaTitle:"Essayez le parcours vous-même",ctaText:"Le prototype s’ouvre ici, sans quitter le portfolio.",dialogTitle:"Écrire à Anne-Sophie",dialogBody:"Le contenu de la fenêtre.",mailApp:"Ouvrir ma messagerie",placeholder:"Votre message…",title:"Titre de section",body:"Texte courant, pour lire sans effort.",caption:"Légende ou détail",label:"Petit libellé",figure:"Chiffre clé",display:"Titre d’accueil",card:"Carte",control:"Bouton, tag, pastille",inner:"Élément interne",promptZone:"Zone de saisie",noShadow:"Carte : pas d’ombre",yes:"Oui",no:"Non",ordered:"Des étapes : numéros",unordered:"Des sujets : icônes",step1:"Comprendre",step2:"Concevoir",topic1:"Profil",topic2:"Impact",projects:"Études de cas",p1:"Cadrer une équipe UX augmentée",p2:"Covenant monitoring",ctx:"Contexte",approach:"Démarche",outcome:"Résultat",tableMd:`| Cas | Ce que fait l’outil |
|---|---|
| Document reçu | Extraction par l’IA |
| Valeur douteuse | Signalée à l’analyste |
| Seuil dépassé | Alerte |`,s1:"Profil & valeur ajoutée",s1t:"Résume le profil d’Anne-Sophie en quelques lignes.",s2:"Impact & chiffres clés",s2t:"Quels sont ses résultats mesurables ?",cPrimary:"Action principale",cPositive:"Élément positif",cSecondary:"Action secondaire, étape, lien",cAi:"Ce qui vient de l’IA",cWarn:"Friction, alerte",cPunct:"Ponctuation",bg:"Fond de page",sidebar:"Menu latéral",elevated:"Carte, champ",surface2:"Survol, neutre",ink:"Texte principal",muted:"Texte secondaire",inverse:"Neutre inversé",pair:"Couple",thLight:"Clair",thDark:"Sombre",pInk:"Texte principal sur fond",pMuted:"Texte secondaire sur fond",pBtn:"Bouton principal",pTagOk:"Tag olive pâle",pTagAi:"Tag IA",pTagWarn:"Tag friction",pVerm:"Vermillon (ponctuation)",m1:"ASL Court",m1h:"L’essentiel",m2:"ASL Complet",m2h:"La réponse structurée",m3:"ASL Détaillé",m3h:"Avec la méthode",r1t:"Aucune couleur en dur",r1:"Tout passe par un token, donc les deux thèmes fonctionnent.",r2t:"Surfaces neutres et unies",r2:"La couleur vit dans les petits éléments qui portent un sens.",r3t:"L’ombre est réservée",r3:"La zone de saisie et l’action principale, rien d’autre.",r4t:"Une couleur, un seul sens",r4:"Si aucun sens ne correspond, on reste neutre."},en:{contact:"Contact me",cv:"View the CV",open:"Open the prototype",cancel:"Cancel",send:"Send",copy:"Copy the address",copied:"Copied",newChat:"New conversation",email:"Contact by email",result:"Outcome",friction:"Repeated reminders",repeat:"For each period",close:"Close",menu:"Menu",collapse:"Collapse",stop:"Stop",q1:"What was her role?",q2:"See the Covenant project",question:"What is her background?",answer:"Anne-Sophie is a Product Designer, specialised in **UX/UI**, Design Ops and AI workflows.",ctaTitle:"Try the journey yourself",ctaText:"The prototype opens here, without leaving the portfolio.",dialogTitle:"Write to Anne-Sophie",dialogBody:"The dialog content.",mailApp:"Open my mail app",placeholder:"Your message…",title:"Section title",body:"Body text, effortless to read.",caption:"Caption or detail",label:"Small label",figure:"Key figure",display:"Welcome title",card:"Card",control:"Button, tag, badge",inner:"Inner element",promptZone:"Prompt area",noShadow:"Card: no shadow",yes:"Do",no:"Don’t",ordered:"Steps: numbers",unordered:"Topics: icons",step1:"Understand",step2:"Design",topic1:"Profile",topic2:"Impact",projects:"Case studies",p1:"Framing an AI-augmented UX team",p2:"Covenant monitoring",ctx:"Context",approach:"Approach",outcome:"Outcome",tableMd:`| Case | What the tool does |
|---|---|
| Document received | AI extraction |
| Doubtful value | Flagged to the analyst |
| Threshold exceeded | Alert |`,s1:"Profile & added value",s1t:"Sum up Anne-Sophie’s profile in a few lines.",s2:"Impact & key figures",s2t:"What are her measurable results?",cPrimary:"Main action",cPositive:"Positive element",cSecondary:"Secondary action, step, link",cAi:"What comes from the AI",cWarn:"Friction, alert",cPunct:"Punctuation",bg:"Page background",sidebar:"Side menu",elevated:"Card, field",surface2:"Hover, neutral",ink:"Main text",muted:"Secondary text",inverse:"Inverted neutral",pair:"Pair",thLight:"Light",thDark:"Dark",pInk:"Main text on background",pMuted:"Secondary text on background",pBtn:"Primary button",pTagOk:"Pale olive tag",pTagAi:"AI tag",pTagWarn:"Friction tag",pVerm:"Vermilion (punctuation)",m1:"ASL Short",m1h:"The essentials",m2:"ASL Full",m2h:"The structured answer",m3:"ASL In-depth",m3h:"With the method",r1t:"No hard-coded colour",r1:"Everything goes through a token, so both themes work.",r2t:"Neutral, flat surfaces",r2:"Colour lives in the small elements that carry meaning.",r3t:"The shadow is reserved",r3:"The prompt area and the main action, nothing else.",r4t:"One colour, one meaning",r4:"If no meaning fits, stay neutral."}},Qt="tag",bi="t-all flex flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold",bo="t-all inline-flex items-center gap-1.5 rounded-full border border-line bg-elevated px-3.5 py-1.5 text-sm text-ink hover:border-rule hover:bg-surface-2";function ke({children:e}){return i.jsx("div",{className:"flex flex-wrap items-center gap-3",children:e})}function De({cls:e,name:t,label:n,border:r}){return i.jsxs("li",{className:"flex items-center gap-3",children:[i.jsx("span",{className:`h-10 w-10 shrink-0 rounded-2xl ${e} ${r?"border border-line":""}`,"aria-hidden":!0}),i.jsxs("span",{className:"min-w-0",children:[i.jsx("span",{className:"block text-[13px] font-medium leading-snug text-ink",children:n}),i.jsx("code",{className:"font-mono text-[11.5px] text-muted",children:t})]})]})}function zh({id:e,lang:t,t:n}){const r=qh[t],[s,o]=C.useState(0),[a,l]=C.useState(!1),[u,d]=C.useState(!0),[f,g]=C.useState(0),[h,x]=C.useState(!1),[v,y]=C.useState(!0);switch(e){case"hierarchy":return i.jsxs(ke,{children:[i.jsxs("button",{className:"btn-primary",children:[r.contact," ",i.jsx(Ge,{size:16,"aria-hidden":!0})]}),i.jsxs("button",{className:"btn-secondary",children:[r.cv," ",i.jsx(Tt,{size:16,"aria-hidden":!0})]}),i.jsx("button",{className:"icon-btn","aria-label":r.close,children:i.jsx(Ze,{size:18,"aria-hidden":!0})})]});case"nocaps":return i.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[i.jsxs("div",{className:"rounded-2xl border border-line bg-elevated p-4",children:[i.jsxs("p",{className:"mb-3 inline-flex items-center gap-1.5 text-xs font-semibold text-olive-text",children:[i.jsx(kt,{size:13,"aria-hidden":!0})," ",r.yes]}),i.jsxs(ke,{children:[i.jsx("button",{className:"btn-primary !px-4 !py-2",children:r.contact}),i.jsx("span",{className:`${Qt} bg-olive-tint text-olive-text`,children:r.result})]})]}),i.jsxs("div",{className:"rounded-2xl border border-line bg-elevated p-4",children:[i.jsxs("p",{className:"mb-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--warn-text)]",children:[i.jsx(Ze,{size:13,"aria-hidden":!0})," ",r.no]}),i.jsxs(ke,{children:[i.jsx("span",{className:"inline-flex items-center rounded-full bg-olive px-4 py-2 text-[11.5px] font-semibold tracking-[0.14em] text-olive-fg",children:r.contact.toUpperCase()}),i.jsx("span",{className:"rounded-full bg-olive-tint px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.1em] text-olive-text",children:r.result.toUpperCase()})]})]})]});case"numbericon":return i.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[i.jsxs("div",{className:"rounded-2xl border border-line bg-elevated p-4",children:[i.jsx("p",{className:"eyebrow mb-3 text-muted",children:r.ordered}),i.jsx(ke,{children:[r.step1,r.step2].map((k,p)=>i.jsxs("span",{className:"inline-flex items-center gap-2 text-[13px] font-medium text-ink",children:[i.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-fg",children:p+1})," ",k]},k))})]}),i.jsxs("div",{className:"rounded-2xl border border-line bg-elevated p-4",children:[i.jsx("p",{className:"eyebrow mb-3 text-muted",children:r.unordered}),i.jsx(ke,{children:[{I:Cs,x:r.topic1},{I:xo,x:r.topic2}].map(({I:k,x:p})=>i.jsxs("span",{className:"inline-flex items-center gap-2 text-[13px] font-medium text-ink",children:[i.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full bg-accent-tint text-accent-text",children:i.jsx(k,{size:14,"aria-hidden":!0})})," ",p]},p))})]})]});case"neutrals":return i.jsxs("ul",{className:"grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2",children:[i.jsx(De,{cls:"bg-bg",name:"bg-bg",label:r.bg,border:!0}),i.jsx(De,{cls:"bg-sidebar",name:"bg-sidebar",label:r.sidebar,border:!0}),i.jsx(De,{cls:"bg-elevated",name:"bg-elevated",label:r.elevated,border:!0}),i.jsx(De,{cls:"bg-surface-2",name:"bg-surface-2",label:r.surface2,border:!0}),i.jsx(De,{cls:"bg-ink",name:"text-ink · bg-ink",label:`${r.ink} · ${r.inverse}`}),i.jsx(De,{cls:"bg-muted",name:"text-muted",label:r.muted})]});case"meanings":return i.jsxs("ul",{className:"grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2",children:[i.jsx(De,{cls:"bg-olive",name:"bg-olive",label:r.cPrimary}),i.jsx(De,{cls:"bg-olive-tint",name:"bg-olive-tint",label:r.cPositive,border:!0}),i.jsx(De,{cls:"bg-accent",name:"bg-accent",label:r.cSecondary}),i.jsx(De,{cls:"bg-[var(--ai)]",name:"--ai",label:r.cAi}),i.jsx(De,{cls:"bg-[var(--warn-tint)]",name:"--warn-tint",label:r.cWarn,border:!0}),i.jsx(De,{cls:"bg-vermillion",name:"bg-vermillion",label:r.cPunct})]});case"typescale":return i.jsx("ul",{className:"space-y-4",children:[{cls:"font-display text-[2rem] font-semibold leading-none tracking-[-0.035em]",label:r.display,spec:"Poppins · semibold"},{cls:"font-display text-[1.7rem] font-semibold leading-none tracking-[-0.03em]",label:r.figure,spec:"Poppins · 1.7rem"},{cls:"font-display text-[1.2rem] font-semibold leading-tight tracking-[-0.02em]",label:r.title,spec:"Poppins · 1.2rem"},{cls:"text-[15px] font-light leading-relaxed",label:r.body,spec:"Outfit · 15px · light"},{cls:"eyebrow",label:r.label,spec:"Outfit · 12.5px · medium"},{cls:"text-xs font-light text-muted",label:r.caption,spec:"Outfit · 12px · light"}].map(k=>i.jsxs("li",{className:"flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line pb-4 last:border-b-0 last:pb-0",children:[i.jsx("span",{className:`min-w-0 text-ink ${k.cls}`,children:k.label}),i.jsx("code",{className:"shrink-0 font-mono text-[11.5px] text-muted",children:k.spec})]},k.spec))});case"shapes":return i.jsx("ul",{className:"grid grid-cols-1 gap-3 sm:grid-cols-3",children:[{cls:"rounded-full",label:r.control,spec:"rounded-full"},{cls:"rounded-3xl",label:r.card,spec:"rounded-3xl"},{cls:"rounded-2xl",label:r.inner,spec:"rounded-2xl"}].map(k=>i.jsxs("li",{children:[i.jsx("span",{className:`block h-16 border border-rule bg-elevated ${k.cls}`,"aria-hidden":!0}),i.jsx("span",{className:"mt-2 block text-[13px] font-medium text-ink",children:k.label}),i.jsx("code",{className:"font-mono text-[11.5px] text-muted",children:k.spec})]},k.spec))});case"elevation":return i.jsxs("div",{className:"grid grid-cols-1 items-center gap-4 sm:grid-cols-3",children:[i.jsx("div",{className:"flex h-12 items-center rounded-[28px] border border-line bg-elevated px-4 text-[13px] font-light text-muted shadow-signature",children:r.promptZone}),i.jsx("div",{className:"flex justify-center",children:i.jsx("button",{className:"btn-primary",children:r.contact})}),i.jsx("div",{className:"flex h-12 items-center rounded-2xl border border-line bg-elevated px-4 text-[13px] font-light text-muted",children:r.noShadow})]});case"iconplace":return i.jsxs(ke,{children:[i.jsxs("button",{className:"btn-secondary",children:[r.cv," ",i.jsx(Tt,{size:16,"aria-hidden":!0})]}),i.jsxs("span",{className:`${Qt} bg-[var(--ai-tint)] text-[var(--ai-text)]`,children:[i.jsx(Ss,{size:12,"aria-hidden":!0})," Claude"]})]});case"buttons":return i.jsxs(ke,{children:[i.jsxs("button",{className:"btn-primary",children:[r.contact," ",i.jsx(Ge,{size:16,"aria-hidden":!0})]}),i.jsxs("button",{className:"btn-secondary",children:[r.cv," ",i.jsx(Tt,{size:16,"aria-hidden":!0})]}),i.jsx("button",{className:"btn-primary",children:r.open}),i.jsx("button",{className:"btn-secondary",children:r.cancel})]});case"buttons-wide":return i.jsxs("div",{className:"w-full max-w-[280px] space-y-2 rounded-3xl bg-sidebar p-4",children:[i.jsxs("button",{className:"btn-secondary w-full !justify-between !py-2 !pl-4 !pr-2",children:[r.newChat,i.jsx("span",{className:"icon-chip bg-olive text-base leading-none text-olive-fg",children:"+"})]}),i.jsxs("button",{className:"btn-primary w-full !justify-between !py-2 !pl-4 !pr-2",children:[r.email,i.jsx("span",{className:"icon-chip bg-olive-fg text-olive",children:i.jsx(Ge,{size:13,strokeWidth:2.25,"aria-hidden":!0})})]}),i.jsxs("button",{className:"btn-secondary w-full !justify-between !py-2 !pl-4 !pr-2",children:[r.cv,i.jsx("span",{className:"icon-chip bg-accent text-accent-fg",children:i.jsx(Tt,{size:14,strokeWidth:2.25,"aria-hidden":!0})})]})]});case"buttons-states":return i.jsxs(ke,{children:[i.jsxs("button",{className:"btn-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none",disabled:!0,children:[r.send," ",i.jsx(Ge,{size:16,"aria-hidden":!0})]}),i.jsxs("button",{className:"btn-secondary",onClick:()=>{l(!0),window.setTimeout(()=>l(!1),1600)},children:[a?r.copied:r.copy," ",a?i.jsx(kt,{size:16,"aria-hidden":!0}):i.jsx(rd,{size:16,"aria-hidden":!0})]})]});case"iconbuttons":return i.jsxs(ke,{children:[i.jsx("button",{className:"icon-btn","aria-label":r.close,children:i.jsx(Ze,{size:18,"aria-hidden":!0})}),i.jsx("button",{className:"icon-btn","aria-label":r.menu,children:i.jsx(ad,{size:19,"aria-hidden":!0})}),i.jsx("button",{className:"icon-btn","aria-label":r.collapse,children:i.jsx(vo,{size:18,"aria-hidden":!0})}),i.jsx("span",{className:"mx-1 h-6 w-px bg-line","aria-hidden":!0}),i.jsx("button",{"aria-label":r.send,className:"t-all flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-fg shadow-signature hover:bg-accent-hover",children:i.jsx(td,{size:18,strokeWidth:2.5,"aria-hidden":!0})}),i.jsx("button",{"aria-label":r.stop,className:"t-all flex h-10 w-10 items-center justify-center rounded-full bg-ink text-bg shadow-signature hover:opacity-85",children:i.jsx(va,{size:14,className:"fill-current","aria-hidden":!0})})]});case"segmented":return i.jsxs(ke,{children:[i.jsx("div",{role:"group","aria-label":n.theme,className:"flex w-56 rounded-full border border-line p-0.5",children:[{x:n.light,I:dd},{x:n.dark,I:ld}].map(({x:k,I:p},c)=>i.jsxs("button",{"aria-pressed":s===c,onClick:()=>o(c),className:`${bi} ${s===c?"bg-ink text-bg":"text-muted hover:text-ink"}`,children:[k," ",i.jsx(p,{size:12,className:"text-vermillion","aria-hidden":!0})]},k))}),i.jsxs("div",{role:"group","aria-label":n.language,className:"flex w-36 rounded-full border border-line p-0.5",children:[i.jsx("span",{className:`${bi} bg-ink text-bg`,children:"FR"}),i.jsx("span",{className:`${bi} text-muted`,children:"EN"})]})]});case"chips":return i.jsx(ke,{children:[r.q1,r.q2].map(k=>i.jsxs("button",{className:bo,children:[k," ",i.jsx(jn,{size:14,className:"shrink-0 text-vermillion","aria-hidden":!0})]},k))});case"tags":return i.jsxs(ke,{children:[i.jsx("span",{className:`${Qt} bg-olive-tint text-olive-text`,children:r.result}),i.jsxs("span",{className:`${Qt} bg-[var(--ai-tint)] text-[var(--ai-text)]`,children:[i.jsx(Ss,{size:12,"aria-hidden":!0})," Claude"]}),i.jsxs("span",{className:`${Qt} bg-[var(--warn-tint)] text-[var(--warn-text)]`,children:[i.jsx(pd,{size:12,"aria-hidden":!0})," ",r.friction]}),i.jsxs("span",{className:`${Qt} border border-rule text-ink`,children:[i.jsx(cd,{size:12,"aria-hidden":!0})," ",r.repeat]})]});case"badges":return i.jsxs(ke,{children:[i.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-accent-tint text-accent-text",children:i.jsx(nd,{size:15,"aria-hidden":!0})}),i.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-fg",children:"1"}),i.jsx("span",{className:"icon-chip bg-olive text-olive-fg",children:i.jsx(Ge,{size:13,"aria-hidden":!0})}),i.jsx(Jn,{size:40})]});case"messages":return i.jsxs("div",{className:"space-y-5",children:[i.jsx("div",{className:"flex justify-end",children:i.jsx("div",{className:"max-w-[85%] rounded-3xl rounded-br-md bg-bubble px-5 py-3 text-[15px] leading-relaxed text-bubble-fg",children:r.question})}),i.jsxs("div",{className:"flex gap-4",children:[i.jsx("div",{className:"mt-0.5 hidden sm:block",children:i.jsx(Jn,{size:34})}),i.jsxs("div",{className:"min-w-0 flex-1",children:[i.jsxs("div",{className:"eyebrow mb-2.5 flex items-center gap-2.5",children:[i.jsx("span",{className:"font-semibold text-ink",children:n.assistantName}),i.jsx("span",{className:"h-px w-5 bg-rule","aria-hidden":!0}),i.jsx("span",{className:"text-muted",children:n.models.standard.name})]}),i.jsx(Gt,{text:r.answer}),i.jsxs("div",{className:"mt-4 flex flex-wrap gap-3",children:[i.jsxs("button",{className:"btn-primary",children:[r.contact," ",i.jsx(Ge,{size:16,"aria-hidden":!0})]}),i.jsxs("button",{className:"btn-secondary",children:[r.cv," ",i.jsx(Tt,{size:16,"aria-hidden":!0})]})]})]})]})]});case"card-suggestion":return i.jsx("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[{I:Cs,a:r.s1,b:r.s1t},{I:xo,a:r.s2,b:r.s2t}].map(({I:k,a:p,b:c})=>i.jsxs("button",{className:"t-all group flex flex-col gap-3 rounded-3xl border border-line bg-elevated p-5 text-left hover:-translate-y-0.5 hover:border-rule",children:[i.jsxs("span",{className:"flex items-center gap-3",children:[i.jsx("span",{className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-tint text-accent-text",children:i.jsx(k,{size:15,"aria-hidden":!0})}),i.jsx("span",{className:"eyebrow flex-1 font-semibold text-ink",children:p}),i.jsx(jn,{size:15,className:"t-all shrink-0 text-muted group-hover:text-ink","aria-hidden":!0})]}),i.jsx("span",{className:"text-[14.5px] font-light leading-relaxed text-ink",children:c})]},p))});case"card-numbered":return i.jsx(Ad,{lang:t});case"card-cta":return i.jsxs("div",{className:"flex flex-wrap items-center gap-x-5 gap-y-3 rounded-3xl border border-line bg-elevated p-5",children:[i.jsxs("div",{className:"min-w-0 flex-1 basis-56",children:[i.jsx("p",{className:"text-sm font-semibold text-ink",children:r.ctaTitle}),i.jsx("p",{className:"mt-1 text-[13px] font-light leading-relaxed text-muted",children:r.ctaText})]}),i.jsxs("button",{className:"btn-primary",children:[r.open," ",i.jsx(xa,{size:14,className:"fill-current","aria-hidden":!0})]})]});case"table":return i.jsx(Gt,{text:r.tableMd});case"sidemenu":return i.jsxs("div",{className:"relative flex h-72 overflow-hidden rounded-3xl border border-line bg-bg",children:[i.jsxs("div",{className:`t-all flex shrink-0 flex-col overflow-hidden bg-sidebar ${v?"w-[62%] max-w-[250px] border-r border-line p-4":"w-0 p-0"}`,children:[i.jsxs("div",{className:"flex items-center gap-2.5",children:[i.jsx(Jn,{size:32}),i.jsx("p",{className:"min-w-0 flex-1 truncate font-display text-[14px] font-semibold text-ink",children:"Anne-Sophie Leroy"})]}),i.jsx("p",{className:"eyebrow mt-5 text-muted",children:r.projects}),i.jsx("ul",{className:"mt-2 space-y-2",children:[r.p1,r.p2].map((k,p)=>i.jsxs("li",{className:"flex items-baseline gap-2.5 text-[12.5px] leading-snug text-ink",children:[i.jsxs("span",{className:"font-display text-[12px] font-medium italic text-accent-text",children:["0",p+1]})," ",k]},k))}),i.jsxs("span",{className:"mt-auto inline-flex items-center justify-between rounded-full bg-olive py-1.5 pl-3.5 pr-1.5 text-[12px] font-semibold text-olive-fg",children:[r.email,i.jsx("span",{className:"icon-chip !h-5 !w-5 bg-olive-fg text-olive",children:i.jsx(Ge,{size:11,"aria-hidden":!0})})]})]}),i.jsx("div",{className:"flex min-w-0 flex-1 flex-col",children:i.jsxs("div",{className:"flex items-center gap-2 border-b border-line px-3 py-2",children:[i.jsx("button",{onClick:()=>y(!v),"aria-label":r.collapse,"aria-expanded":v,className:"icon-btn",children:i.jsx(vo,{size:18,"aria-hidden":!0})}),i.jsx("p",{className:"eyebrow min-w-0 flex-1 truncate text-ink",children:r.newChat})]})})]});case"anchors":return i.jsx("div",{className:"px-1",children:i.jsx(Dd,{label:n.caseStudies,links:[{id:"ds-top",label:r.ctx},{id:"ds-anchor-2",label:r.approach},{id:"ds-anchor-3",label:r.outcome}]})});case"tabs":return i.jsxs("div",{className:"flex items-center gap-1 rounded-2xl border border-line bg-bg px-3 py-2",children:[i.jsx("span",{className:"rounded-full px-3 py-1.5 text-[12.5px] font-medium text-muted",children:r.newChat}),i.jsxs("span",{className:"flex items-center rounded-full bg-surface-2 text-[12.5px] font-medium text-ink",children:[i.jsx("span",{className:"py-1.5 pl-3 pr-1.5",children:n.cv.tab}),i.jsx("button",{"aria-label":n.cv.closeTab,className:"t-all mr-1 flex h-6 w-6 items-center justify-center rounded-full text-muted hover:bg-line hover:text-ink",children:i.jsx(Ze,{size:13,"aria-hidden":!0})})]}),i.jsx("span",{className:"flex-1"}),i.jsxs("button",{className:"btn-primary !px-4 !py-2",children:[n.cv.download," ",i.jsx(Tt,{size:16,"aria-hidden":!0})]})]});case"menu":{const k=[[r.m1,r.m1h],[r.m2,r.m2h],[r.m3,r.m3h]];return i.jsx("div",{className:u?"h-52":"",children:i.jsxs("div",{className:"relative inline-block",children:[i.jsxs("button",{onClick:()=>d(!u),"aria-haspopup":"listbox","aria-expanded":u,className:"t-all flex items-center gap-2 rounded-full border border-line bg-elevated px-3.5 py-1.5 text-[13px] hover:border-rule",children:[i.jsx("span",{className:"h-2 w-2 rounded-full bg-vermillion","aria-hidden":!0}),i.jsx("span",{className:"font-semibold text-ink",children:k[f][0]}),i.jsx(ha,{size:15,className:`t-all text-muted ${u?"rotate-180":""}`,"aria-hidden":!0})]}),u&&i.jsx("ul",{role:"listbox",className:"absolute left-0 top-full z-10 mt-2 w-[260px] rounded-3xl border border-rule bg-elevated p-1.5",children:k.map(([p,c],m)=>i.jsx("li",{role:"option","aria-selected":m===f,children:i.jsxs("button",{onClick:()=>g(m),className:"t-all flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left hover:bg-surface-2",children:[i.jsxs("span",{className:"min-w-0 flex-1 text-sm font-semibold text-ink",children:[p," ",i.jsxs("span",{className:"font-normal text-muted",children:["· ",c]})]}),m===f&&i.jsx(kt,{size:16,className:"shrink-0 text-accent-text","aria-hidden":!0})]})},p))})]})})}case"prompt":return i.jsxs("div",{children:[i.jsx("div",{className:"flex justify-end",children:i.jsx("button",{onClick:()=>x(!h),className:"btn-secondary !px-3.5 !py-1.5",children:h?r.send:r.stop})}),i.jsx("div",{className:"pt-44",children:i.jsx(Ed,{t:n,isStreaming:h,onSend:()=>{},onStop:()=>x(!1)})})]});case"compare":return i.jsx(Id,{lang:t});case"figures":return i.jsx(Nd,{lang:t});case"flow":return i.jsx(Cd,{lang:t,board:vd});default:return null}}function Td({children:e}){return i.jsx("h3",{className:"mb-3 font-display text-[1.2rem] font-semibold leading-tight tracking-[-0.02em] text-ink",children:e})}function Ld({body:e,lang:t,t:n}){const r={},s=e.replace(/^<!--\s*exemple:\s*([a-z-]+)\s*-->$/gm,(o,a)=>(r[a]=i.jsx("div",{className:"my-4 rounded-3xl border border-line bg-bg p-5 sm:p-6",children:i.jsx(zh,{id:a,lang:t,t:n})}),`[[${a}]]`));return s.trim()?i.jsx(Gt,{text:s,embeds:r}):null}function Uh({section:e,lang:t,t:n}){return i.jsxs("section",{children:[e.title&&i.jsx(Td,{children:e.title}),i.jsx(Ld,{body:e.body,lang:t,t:n})]})}function Rh({section:e,lang:t,t:n}){const{items:r,rest:s}=xd(e.body);return i.jsxs("section",{children:[i.jsx(Td,{children:e.title}),i.jsx("ol",{className:"grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2",children:r.map((o,a)=>i.jsxs("li",{className:"flex items-start gap-2.5",children:[i.jsx("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-[11px] font-semibold text-accent-fg",children:a+1}),i.jsx("span",{className:"min-w-0 pt-px",children:i.jsx(Gt,{text:o})})]},a))}),i.jsx(Ld,{body:s,lang:t,t:n})]})}function Fh({section:e}){const t=e.kind==="do";return i.jsxs("div",{className:"rounded-3xl border border-line bg-elevated p-5",children:[i.jsxs("p",{className:`tag mb-3 ${t?"bg-olive-tint text-olive-text":"bg-[var(--warn-tint)] text-[var(--warn-text)]"}`,children:[t?i.jsx(kt,{size:12,"aria-hidden":!0}):i.jsx(Ze,{size:12,"aria-hidden":!0})," ",e.title]}),i.jsx("ul",{className:"space-y-2",children:xd(e.body).items.map((n,r)=>i.jsx("li",{children:i.jsx(Gt,{text:n})},r))})]})}function Mh({page:e,lang:t,t:n}){const r=[];for(let s=0;s<e.sections.length;s++){const o=e.sections[s];if(o.kind==="do"||o.kind==="dont"){const a=[o],l=e.sections[s+1];l&&(l.kind==="do"||l.kind==="dont")&&a.push(e.sections[++s]),r.push(i.jsx("section",{className:`grid grid-cols-1 gap-3 ${a.length>1?"sm:grid-cols-2":""}`,children:a.map(u=>i.jsx(Fh,{section:u},u.title))},s))}else o.kind==="anatomy"?r.push(i.jsx(Rh,{section:o,lang:t,t:n},s)):r.push(i.jsx(Uh,{section:o,lang:t,t:n},s))}return i.jsx(i.Fragment,{children:r})}function _h({lang:e,t}){const n=Qn[e],r=Mf(e),[s,o]=C.useState(r[0].id),a=C.useRef(null),l=Math.max(0,r.findIndex(v=>v.id===s)),u=r[l],d=r[l-1],f=r[l+1],g=v=>{var y;o(v),(y=a.current)==null||y.scrollTo({top:0})},h=xi.find(v=>v.id===u.group).title[e],x=v=>i.jsx("li",{children:i.jsx("button",{onClick:()=>g(v.id),"aria-current":v.id===s?"page":void 0,className:`t-all w-full rounded-full px-3 py-1.5 text-left text-[13.5px] ${v.id===s?"bg-surface-2 font-semibold text-ink":"font-normal text-muted hover:text-ink"}`,children:v.title})},v.id);return i.jsxs("div",{className:"flex min-h-0 flex-1",children:[i.jsx("nav",{"aria-label":n.pages,className:"hidden w-[232px] shrink-0 overflow-y-auto border-r border-line px-3 py-5 xl:block",children:xi.map(v=>{const y=r.filter(p=>p.group===v.id),k=[...new Set(y.map(p=>p.category??""))];return i.jsxs("div",{className:"mb-6",children:[i.jsx("p",{className:"px-3 font-display text-[13px] font-semibold text-ink",children:v.title[e]}),k.map(p=>i.jsxs("div",{children:[p&&i.jsx("p",{className:"mt-4 px-3 text-[11.5px] font-medium text-accent-text",children:p}),i.jsx("ul",{className:"mt-1.5 space-y-0.5",children:y.filter(c=>(c.category??"")===p).map(x)})]},p))]},v.id)})}),i.jsxs("div",{ref:a,className:"min-w-0 flex-1 overflow-y-auto",children:[i.jsxs("div",{className:"border-b border-line px-4 py-3 xl:hidden",children:[i.jsx("label",{className:"sr-only",htmlFor:"ds-page",children:n.pages}),i.jsx("select",{id:"ds-page",value:u.id,onChange:v=>g(v.target.value),className:"w-full rounded-full border border-rule bg-elevated px-4 py-2 text-[13.5px] font-semibold text-ink",children:xi.map(v=>i.jsx("optgroup",{label:v.title[e],children:r.filter(y=>y.group===v.id).map(y=>i.jsx("option",{value:y.id,children:y.title},y.id))},v.id))})]}),i.jsxs("article",{id:"ds-top",className:"mx-auto w-full max-w-3xl px-5 py-8 sm:px-8 sm:py-10",children:[i.jsxs("p",{className:"eyebrow text-accent-text",children:[h,u.category?` · ${u.category}`:""]}),i.jsx("h2",{className:"mt-2 font-display text-[clamp(1.8rem,5vw,2.4rem)] font-semibold leading-none tracking-[-0.035em] text-ink",children:u.title}),u.lead&&i.jsx("div",{className:"mt-4 text-muted [&>div]:text-[16px] [&>div]:font-light [&>div]:text-muted",children:i.jsx(Gt,{text:u.lead})}),i.jsx("div",{className:"mt-9 space-y-10",children:i.jsx(Mh,{page:u,lang:e,t})},u.id),i.jsxs("p",{className:"mt-12 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-light text-muted",children:[i.jsx(wr,{size:13,className:"shrink-0 text-accent-text","aria-hidden":!0})," ",n.source," :",i.jsxs("code",{className:"font-mono text-[11.5px] text-ink",children:[Pd,u.path]})]}),i.jsxs("footer",{className:"mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6",children:[d?i.jsxs("button",{onClick:()=>g(d.id),className:bo,children:[i.jsx("span",{className:"opacity-60",children:n.previous})," ",d.title]}):i.jsx("span",{}),f&&i.jsxs("button",{onClick:()=>g(f.id),className:bo,children:[i.jsx("span",{className:"opacity-60",children:n.next})," ",f.title,i.jsx(hr,{size:14,className:"shrink-0 text-vermillion","aria-hidden":!0})]})]})]})]})]})}const wi=1280;function Oh({src:e,title:t,note:n,restartLabel:r,closeLabel:s,desktopHint:o,onClose:a}){const l=C.useRef(null),[u,d]=C.useState({w:wi,h:800}),[f,g]=C.useState(0);C.useLayoutEffect(()=>{const v=l.current;if(!v)return;const y=()=>d({w:v.clientWidth,h:v.clientHeight});y();const k=new ResizeObserver(y);return k.observe(v),()=>k.disconnect()},[]),C.useEffect(()=>{const v=document.activeElement,y=k=>k.key==="Escape"&&a();return document.addEventListener("keydown",y),()=>{var k;document.removeEventListener("keydown",y),(k=v==null?void 0:v.focus)==null||k.call(v)}},[a]);const h=Math.min(1,u.w/wi),x=h<1;return Zc.createPortal(i.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":t,className:"fixed inset-0 z-50 flex flex-col bg-bg",children:[i.jsxs("div",{className:"flex shrink-0 items-center gap-3 border-b border-line px-4 py-2.5",children:[i.jsxs("div",{className:"min-w-0 flex-1",children:[i.jsx("p",{className:"eyebrow truncate font-semibold text-ink",children:t}),i.jsx("p",{className:"mt-0.5 truncate text-xs font-light text-muted",children:x?o:n})]}),i.jsxs("button",{onClick:()=>g(v=>v+1),className:"btn-secondary !px-3.5 !py-2",title:r,children:[i.jsx("span",{className:"hidden sm:inline",children:r})," ",i.jsx(jf,{size:14,"aria-hidden":!0})]}),i.jsx("button",{onClick:a,"aria-label":s,autoFocus:!0,className:"icon-btn",children:i.jsx(Ze,{size:18,"aria-hidden":!0})})]}),i.jsx("div",{ref:l,className:"relative min-h-0 flex-1 overflow-hidden bg-white",children:i.jsx("iframe",{src:`./${e}`,title:t,className:"absolute left-0 top-0 origin-top-left border-0",style:{width:x?wi:"100%",height:x?u.h/h:"100%",transform:x?`scale(${h})`:void 0}},f)})]}),document.body)}function ql({label:e,value:t,options:n,onChange:r}){return i.jsx("div",{role:"group","aria-label":e,className:"flex flex-1 rounded-full border border-line p-0.5",children:n.map(s=>i.jsx("button",{onClick:()=>r(s.value),"aria-pressed":t===s.value,"aria-label":s.aria,className:`t-all flex flex-1 items-center justify-center gap-1.5 rounded-full px-2 py-1.5 text-xs font-semibold ${t===s.value?"bg-ink text-bg":"text-muted hover:text-ink"}`,children:s.label},s.value))})}function zl({children:e}){return i.jsxs("p",{className:"eyebrow flex items-center gap-3 text-muted",children:[i.jsx("span",{className:"shrink-0",children:e}),i.jsx("span",{className:"h-px flex-1 bg-line","aria-hidden":!0})]})}function Bh(e){const{t,lang:n}=e,[r,s]=C.useState(!1),o=r||e.designSystemActive,a=o?sd:ga;return i.jsxs(i.Fragment,{children:[i.jsx("div",{onClick:e.onClose,"aria-hidden":!0,className:`t-all fixed inset-0 z-30 bg-[var(--overlay)] md:hidden ${e.open?"opacity-100":"pointer-events-none opacity-0"}`}),i.jsxs("aside",{"aria-label":"Navigation",className:`t-all fixed inset-y-0 left-0 z-40 flex w-[304px] max-w-[88vw] shrink-0 flex-col border-r border-line bg-sidebar md:relative md:z-10 md:max-w-none ${e.open?"translate-x-0":"-translate-x-full"} md:translate-x-0 ${e.collapsed?"md:-ml-[304px]":"md:ml-0"}`,children:[i.jsxs("div",{className:"px-5 pb-4 pt-5",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(Jn,{size:46}),i.jsxs("div",{className:"min-w-0 flex-1",children:[i.jsx("p",{className:"truncate font-display text-[17px] font-semibold leading-tight tracking-[-0.02em] text-ink",children:re.name}),i.jsx("p",{className:"tag mt-1 !inline-block max-w-full truncate bg-olive-tint text-olive-text",children:t.role})]}),i.jsx("button",{onClick:e.onClose,"aria-label":t.closeMenu,className:"icon-btn md:hidden",children:i.jsx(Ze,{size:18,"aria-hidden":!0})})]}),i.jsxs("button",{onClick:e.onNew,className:"btn-secondary mt-5 w-full !justify-between !py-2 !pl-4 !pr-2",children:[t.newChat,i.jsx("span",{className:"icon-chip bg-olive text-olive-fg",children:i.jsx(wf,{size:14,strokeWidth:2.5,"aria-hidden":!0})})]})]}),i.jsxs("nav",{className:"min-h-0 flex-1 overflow-y-auto px-5 pb-3",children:[i.jsx(zl,{children:t.caseStudies}),i.jsx("ul",{className:"-mx-2 mt-2",children:yo.map((l,u)=>{const d=e.activeProject===l.id;return i.jsx("li",{children:i.jsxs("button",{onClick:()=>e.onProject(l.id),"aria-current":d?"page":void 0,className:`t-all group flex w-full items-baseline gap-3 rounded-2xl px-2 py-2.5 text-left ${d?"bg-surface-2":"hover:bg-surface-2"}`,children:[i.jsxs("span",{className:`t-all w-6 shrink-0 font-display text-[13px] font-medium italic leading-none ${d?"text-vermillion":"text-accent-text"}`,children:["0",u+1]}),i.jsxs("span",{className:"min-w-0",children:[i.jsx("span",{className:`block text-[13.5px] leading-snug text-ink ${d?"font-semibold":"font-normal"}`,children:l.title[n]}),i.jsx("span",{className:"mt-1 block text-[11px] font-normal text-muted",children:l.tag[n]})]})]})},l.id)})}),i.jsxs("div",{className:"mt-3",children:[i.jsxs("button",{onClick:()=>s(l=>!l),"aria-expanded":o,"aria-controls":"personal-projects",className:"t-all -mx-2 flex w-[calc(100%+1rem)] items-center gap-2.5 rounded-2xl px-2 py-2 text-left hover:bg-surface-2",children:[i.jsx(a,{size:15,className:"shrink-0 text-accent-text","aria-hidden":!0}),i.jsx("span",{className:"min-w-0 flex-1 truncate text-[13.5px] font-medium text-ink",children:t.personalProjects}),i.jsx("span",{className:"text-[11px] font-normal text-muted",children:"1"}),i.jsx(ha,{size:15,className:`t-all shrink-0 text-muted ${o?"rotate-180":""}`,"aria-hidden":!0})]}),o&&i.jsx("ul",{id:"personal-projects",className:"-mx-2 mt-1 pl-3",children:i.jsx("li",{children:i.jsxs("button",{onClick:e.onDesignSystem,"aria-current":e.designSystemActive?"page":void 0,className:`t-all group flex w-full items-baseline gap-3 rounded-2xl px-2 py-2.5 text-left ${e.designSystemActive?"bg-surface-2":"hover:bg-surface-2"}`,children:[i.jsx("span",{className:`t-all w-6 shrink-0 font-display text-[13px] font-medium italic leading-none ${e.designSystemActive?"text-vermillion":"text-accent-text"}`,children:"01"}),i.jsxs("span",{className:"min-w-0",children:[i.jsx("span",{className:`block text-[13.5px] leading-snug text-ink ${e.designSystemActive?"font-semibold":"font-normal"}`,children:t.dsProject.title}),i.jsx("span",{className:"mt-1 block text-[11px] font-normal text-muted",children:t.dsProject.tag})]})]})})})]})]}),i.jsxs("div",{className:"px-5 pb-5",children:[i.jsx(zl,{children:t.quickAccess}),i.jsxs("div",{className:"mt-3 space-y-2",children:[i.jsxs("button",{onClick:e.onEmail,className:"btn-primary w-full !justify-between !py-2 !pl-4 !pr-2",children:[t.contactEmail,i.jsx("span",{className:"icon-chip bg-olive-fg text-olive",children:i.jsx(Ge,{size:13,strokeWidth:2.25,"aria-hidden":!0})})]}),i.jsxs("button",{onClick:e.onCV,className:"btn-secondary w-full !justify-between !py-2 !pl-4 !pr-2",children:[t.viewCV,i.jsx("span",{className:"icon-chip bg-accent text-accent-fg",children:i.jsx(Tt,{size:14,strokeWidth:2.25,"aria-hidden":!0})})]})]}),i.jsxs("div",{className:"mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted",children:[i.jsxs("a",{href:re.linkedinHref,target:"_blank",rel:"noopener noreferrer",className:"t-all inline-flex items-center gap-1.5 hover:text-ink",children:[i.jsx(od,{size:13,className:"text-accent-text","aria-hidden":!0})," LinkedIn"]}),i.jsxs("a",{href:re.phoneHref,className:"t-all inline-flex items-center gap-1.5 hover:text-ink",children:[i.jsx(ud,{size:13,className:"text-accent-text","aria-hidden":!0})," ",re.phone]})]}),i.jsxs("div",{className:"mt-4 flex gap-2",children:[i.jsx(ql,{label:t.language,value:n,onChange:e.setLang,options:[{value:"fr",label:"FR",aria:"Français"},{value:"en",label:"EN",aria:"English"}]}),i.jsx(ql,{label:t.theme,value:e.theme,onChange:e.setTheme,options:[{value:"light",label:i.jsxs(i.Fragment,{children:[t.light," ",i.jsx(dd,{size:12,className:"text-vermillion","aria-hidden":!0})]}),aria:t.light},{value:"dark",label:i.jsxs(i.Fragment,{children:[t.dark," ",i.jsx(ld,{size:12,className:"text-vermillion","aria-hidden":!0})]}),aria:t.dark}]})]})]})]})]})}const $h=["express","standard","deepdive"],Ul="t-all flex min-w-0 items-center rounded-full text-[12.5px] font-medium",Rl=e=>e?"bg-surface-2 text-ink":"text-muted hover:text-ink";function Vh({t:e,title:t,model:n,setModel:r,onMenu:s,onToggleSidebar:o,docTabs:a=[],chatActive:l=!0,onSelectChat:u,docAction:d}){const[f,g]=C.useState(!1),h=C.useRef(null);return C.useEffect(()=>{if(!f)return;const x=y=>{var k;(k=h.current)!=null&&k.contains(y.target)||g(!1)},v=y=>y.key==="Escape"&&g(!1);return document.addEventListener("mousedown",x),document.addEventListener("keydown",v),()=>{document.removeEventListener("mousedown",x),document.removeEventListener("keydown",v)}},[f]),i.jsxs("header",{className:"relative z-20 flex h-14 shrink-0 items-center gap-2 border-b border-line px-2 sm:px-4",children:[i.jsx("button",{onClick:s,"aria-label":e.openMenu,className:"icon-btn md:hidden",children:i.jsx(ad,{size:19,"aria-hidden":!0})}),i.jsx("button",{onClick:o,"aria-label":e.toggleSidebar,title:e.toggleSidebar,className:"icon-btn hidden md:inline-flex",children:i.jsx(vo,{size:18,"aria-hidden":!0})}),a.length>0?i.jsxs("div",{role:"tablist",className:"flex min-w-0 flex-1 items-center gap-1 overflow-x-auto",children:[i.jsx("button",{role:"tab","aria-selected":l,onClick:u,className:`${Ul} px-3 py-1.5 ${Rl(l)}`,children:i.jsx("span",{className:"truncate",children:t})}),a.map(x=>i.jsxs("span",{className:`${Ul} shrink-0 ${Rl(x.active)}`,children:[i.jsx("button",{role:"tab","aria-selected":x.active,onClick:x.onSelect,className:"whitespace-nowrap rounded-full py-1.5 pl-3 pr-1.5",children:x.label}),i.jsx("button",{onClick:x.onClose,"aria-label":x.closeLabel,title:x.closeLabel,className:"t-all mr-1 flex h-6 w-6 items-center justify-center rounded-full text-muted hover:bg-line hover:text-ink",children:i.jsx(Ze,{size:13,"aria-hidden":!0})})]},x.id))]}):i.jsx("h2",{className:"eyebrow min-w-0 flex-1 truncate text-ink",children:t}),d??(l?i.jsxs("div",{ref:h,className:"relative",children:[i.jsxs("button",{onClick:()=>g(x=>!x),"aria-haspopup":"listbox","aria-expanded":f,"aria-label":e.model,className:"t-all flex items-center gap-2 rounded-full border border-line bg-elevated px-3.5 py-1.5 text-[13px] hover:border-rule",children:[i.jsx("span",{className:"h-2 w-2 rounded-full bg-vermillion","aria-hidden":!0}),i.jsx("span",{className:"font-semibold text-ink",children:e.models[n].name}),i.jsxs("span",{className:"hidden font-light text-muted lg:inline",children:["(",e.models[n].hint,")"]}),i.jsx(ha,{size:15,className:`t-all text-muted ${f?"rotate-180":""}`,"aria-hidden":!0})]}),f&&i.jsx("ul",{role:"listbox","aria-label":e.model,className:"rise absolute right-0 top-full z-20 mt-2 w-[min(320px,calc(100vw-1.5rem))] rounded-3xl border border-rule bg-elevated p-1.5",children:$h.map(x=>i.jsx("li",{role:"option","aria-selected":x===n,children:i.jsxs("button",{onClick:()=>{r(x),g(!1)},className:"t-all flex w-full items-start gap-3 rounded-2xl px-3 py-2.5 text-left hover:bg-surface-2",children:[i.jsxs("span",{className:"min-w-0 flex-1",children:[i.jsxs("span",{className:"block text-sm font-semibold text-ink",children:[e.models[x].name," ",i.jsxs("span",{className:"font-normal text-muted",children:["· ",e.models[x].hint]})]}),i.jsx("span",{className:"mt-0.5 block text-xs font-light text-muted",children:e.models[x].desc})]}),x===n&&i.jsx(kt,{size:16,className:"mt-0.5 shrink-0 text-accent-text","aria-hidden":!0})]})},x))})]}):null)]})}const Gh={profile:Cs,ai:Nf,impact:xo,search:nd,portfoliods:id};function Wh({lang:e,t,onPick:n}){const[r,s]=t.heroTitle.split(re.name),[,o,a]=r.match(/^(.*\s)(\S+['’])$/s)??[null,r,""],[,l="",u=""]=s.match(/^(['’]s)?\s*(.*)$/s)??[],d=/^[.!?…]*$/.test(u);return i.jsxs("div",{className:"mx-auto flex min-h-full w-full max-w-4xl flex-col justify-center px-5 py-8 sm:px-10 sm:py-12",children:[i.jsxs("div",{className:"rise",children:[i.jsxs("h1",{className:"text-ink",children:[i.jsx("span",{className:"block text-[clamp(1.2rem,2.5vw,1.7rem)] font-light leading-snug",children:o.trim()}),i.jsxs("span",{className:"mt-2 block font-display text-[clamp(2.3rem,6vw,4rem)] font-semibold leading-[1.08] tracking-[-0.035em]",children:[a&&i.jsx("span",{className:"font-light",children:a}),re.name,l&&i.jsx("span",{className:"font-light",children:l}),d&&i.jsx("span",{className:"text-vermillion",children:u})]}),!d&&i.jsx("span",{className:"mt-3 block text-[clamp(1.2rem,2.5vw,1.7rem)] font-light leading-snug",children:u})]}),i.jsx("p",{className:"mt-6 max-w-xl text-[15px] font-light leading-relaxed text-muted sm:text-base",children:t.heroSubtitle})]}),i.jsx("div",{className:"mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2",children:t.suggestions.map((f,g)=>{const h=Gh[f.intentId]??vf;return i.jsxs("button",{onClick:()=>n(f.intentId),style:{animationDelay:`${120+g*70}ms`},className:`rise t-all group flex flex-col gap-3 rounded-3xl border border-line bg-elevated p-5 text-left hover:-translate-y-0.5 hover:border-rule ${g===t.suggestions.length-1&&t.suggestions.length%2===1?"sm:col-span-2":""}`,children:[i.jsxs("span",{className:"flex items-center gap-3",children:[i.jsx("span",{className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-tint text-accent-text",children:i.jsx(h,{size:15,"aria-hidden":!0})}),i.jsx("span",{className:"eyebrow flex-1 font-semibold text-ink",children:f.title}),i.jsx(jn,{size:15,className:"t-all shrink-0 text-muted group-hover:text-ink","aria-hidden":!0})]}),i.jsx("span",{className:"text-[14.5px] font-light leading-relaxed text-ink",children:Mt(f.intentId).question[e]})]},f.intentId)})})]})}const Hh={fr:{role:"Product Designer · AI & Design Ops",newChat:"Nouvelle conversation",caseStudies:"Projets",personalProjects:"Projets personnels",dsProject:{title:"Design System appliqué par l’IA",tag:"2026 · Portfolio · Skill IA"},quickAccess:"Accès rapide et contact",viewCV:"Voir et télécharger le CV",contactEmail:"Contacter par email",language:"Langue",theme:"Thème",light:"Light",dark:"Dark",openMenu:"Ouvrir le menu",closeMenu:"Fermer le menu",toggleSidebar:"Afficher / masquer la barre latérale",newSession:"Nouvelle conversation",model:"Niveau de détail",models:{standard:{name:"ASL Complet",hint:"La réponse structurée",desc:"Contexte, rôle, solution et résultats."},express:{name:"ASL Court",hint:"L’essentiel",desc:"Quelques points et les chiffres clés."},deepdive:{name:"ASL Détaillé",hint:"Avec la méthode",desc:"La réponse complète, plus la méthode de travail."}},heroTitle:"Bonjour, je suis l'assistant portfolio d'Anne-Sophie Leroy.",heroSubtitle:"Product Designer spécialisée en UX/UI, Design Ops et workflows IA. Posez-moi une question sur son parcours, ses projets chez BNP Paribas ou sa façon d’industrialiser le design.",suggestions:[{title:"Profil et valeur ajoutée",intentId:"profile"},{title:"Le Design System de ce portfolio",intentId:"portfoliods"},{title:"Impact et chiffres clés",intentId:"impact"},{title:"Recherche actuelle",intentId:"search"}],placeholders:["Posez une question sur Anne-Sophie, ses AI skills, son parcours...","Ex. : « Comment son équipe design travaille-t-elle avec l’IA ? »","Tapez / pour les commandes : /cv, /projets, /skills, /contact, /stack"],send:"Envoyer",stop:"Arrêter la génération",commands:"Commandes",slash:[{cmd:"/cv",desc:"Son CV"},{cmd:"/projets",desc:"Lister les études de cas"},{cmd:"/skills",desc:"Compétences clés"},{cmd:"/contact",desc:"Écrire à Anne-Sophie"},{cmd:"/stack",desc:"Outils et stack"},{cmd:"/designsystem",desc:"Le Design System de ce portfolio"}],stopped:"Génération interrompue",thinking:"Réflexion en cours",followUps:"Pour aller plus loin",actionCV:"Voir le CV",actionEmail:"Envoyer un email",close:"Fermer",cv:{title:"Curriculum Vitae",tab:"CV",closeTab:"Fermer le CV",download:"Télécharger en PDF",downloadHint:"Si le PDF n’est pas disponible, la fenêtre d’impression s’ouvre : choisissez « Enregistrer au format PDF ».",experience:"Expériences",skills:"Compétences et outils",education:"Formation",languages:"Langues",interests:"Engagements et intérêts"},emailSubject:"Opportunité Product Designer",skill:{badge:"Skill réel",caption:"Le skill qui encadre le design de ce portfolio, conçu et testé par Anne-Sophie avec Claude Code. Fichiers réels du projet.",copy:"Copier",copied:"Copié !"},assistantName:"Assistant ASL",you:"Vous"},en:{role:"Product Designer · AI & Design Ops",newChat:"New conversation",caseStudies:"Projects",personalProjects:"Personal projects",dsProject:{title:"AI-applied Design System",tag:"2026 · Portfolio · AI skill"},quickAccess:"Quick access and contact",viewCV:"View and download the CV",contactEmail:"Contact by email",language:"Language",theme:"Theme",light:"Light",dark:"Dark",openMenu:"Open menu",closeMenu:"Close menu",toggleSidebar:"Show / hide sidebar",newSession:"New conversation",model:"Level of detail",models:{standard:{name:"ASL Full",hint:"The structured answer",desc:"Context, role, solution and results."},express:{name:"ASL Short",hint:"The essentials",desc:"A few points and the key figures."},deepdive:{name:"ASL In-depth",hint:"With the method",desc:"The full answer, plus the working method."}},heroTitle:"Hello, I'm Anne-Sophie Leroy's portfolio assistant.",heroSubtitle:"Product Designer specialising in UX/UI, Design Ops and AI workflows. Ask me about her background, her projects at BNP Paribas or how she industrialises design.",suggestions:[{title:"Profile and added value",intentId:"profile"},{title:"This portfolio’s Design System",intentId:"portfoliods"},{title:"Impact and key figures",intentId:"impact"},{title:"Current search",intentId:"search"}],placeholders:["Ask about Anne-Sophie, her AI skills, her background...","E.g. “How does her design team work with AI?”","Type / for commands: /cv, /projects, /skills, /contact, /stack"],send:"Send",stop:"Stop generating",commands:"Commands",slash:[{cmd:"/cv",desc:"Her CV"},{cmd:"/projects",desc:"List case studies"},{cmd:"/skills",desc:"Key skills"},{cmd:"/contact",desc:"Write to Anne-Sophie"},{cmd:"/stack",desc:"Tools and stack"},{cmd:"/designsystem",desc:"This portfolio’s Design System"}],stopped:"Generation stopped",thinking:"Thinking",followUps:"Go further",actionCV:"View CV",actionEmail:"Send an email",close:"Close",cv:{title:"Curriculum Vitae",tab:"CV",closeTab:"Close the CV",download:"Download as PDF",downloadHint:"If the PDF is not available, the print dialog opens: choose “Save as PDF”.",experience:"Experience",skills:"Skills and tools",education:"Education",languages:"Languages",interests:"Commitments and interests"},emailSubject:"Product Designer opportunity",skill:{badge:"Real skill",caption:"The skill that frames this portfolio’s design, designed and tested by Anne-Sophie with Claude Code. Real project files (in French).",copy:"Copy",copied:"Copied!"},assistantName:"ASL Assistant",you:"You"}},Xh=450,Kh=30,Qh=2;function Jh(e,t){const[n,r]=C.useState([]),[s,o]=C.useState(null),a=C.useRef(),l=C.useRef(0),u=C.useRef(e);u.current=e;const d=()=>{window.clearTimeout(a.current),window.clearInterval(a.current)};C.useEffect(()=>d,[]);const f=C.useCallback((y,k)=>{d();const p=`m${++l.current}`,c=`m${++l.current}`;r(m=>[...m,{id:p,role:"user",...y},{id:c,role:"assistant",intentId:k,model:t}]),o({id:c,count:0}),a.current=window.setTimeout(()=>{a.current=window.setInterval(()=>{o(m=>{if(!m||m.id!==c)return m;const b=Sd(jd(k,u.current,t)).length,S=m.count+Qh;return S>=b?(d(),null):{id:c,count:S}})},Kh)},Xh)},[t]),g=C.useCallback(y=>{const k=Yf(y);return f({text:y},k),k},[f]),h=C.useCallback(y=>f({questionOf:y},y),[f]),x=C.useCallback(()=>{d(),o(y=>(y&&r(k=>k.map(p=>p.id===y.id&&p.role==="assistant"?{...p,stoppedAt:y.count}:p)),null))},[]),v=C.useCallback(()=>{d(),o(null),r([])},[]);return{messages:n,stream:s,isStreaming:s!==null,askText:g,askIntent:h,stop:x,reset:v}}const Fl="asl-lang";function Yh(){const[e,t]=C.useState(()=>{try{const n=localStorage.getItem(Fl);if(n==="fr"||n==="en")return n}catch{}return"fr"});return C.useEffect(()=>{document.documentElement.lang=e;try{localStorage.setItem(Fl,e)}catch{}},[e]),[e,t]}const Ml="asl-theme";function Zh(){const[e,t]=C.useState(()=>{try{return localStorage.getItem(Ml)==="dark"?"dark":"light"}catch{return"light"}});return C.useEffect(()=>{document.documentElement.dataset.theme=e;try{localStorage.setItem(Ml,e)}catch{}},[e]),[e,t]}const qd="#design-system",_l=()=>window.location.hash===qd;function eg(){const[e,t]=Yh(),[n,r]=Zh(),[s,o]=C.useState("standard"),[a,l]=C.useState(()=>_l()?["ds"]:[]),[u,d]=C.useState(()=>_l()?"ds":"chat"),[f,g]=C.useState(!1),[h,x]=C.useState(!1),[v,y]=C.useState(null),[k,p]=C.useState(null),c=Hh[e],m=Jh(e,s),b=C.useRef(null),S=C.useRef(!0);C.useEffect(()=>{const D=b.current;D&&(m.messages.length===0?D.scrollTop=0:S.current&&(D.scrollTop=D.scrollHeight))},[m.messages,m.stream]),C.useEffect(()=>{const D=u==="ds"?qd:window.location.pathname+window.location.search;window.history.replaceState(null,"",D)},[u]);const P=()=>{const D=b.current;D&&(S.current=D.scrollHeight-D.scrollTop-D.clientHeight<120)},j=C.useCallback(D=>{g(!1),l(J=>J.includes(D)?J:[...J,D]),d(D)},[]),I=C.useCallback(D=>{l(J=>J.filter(fe=>fe!==D)),d(J=>J===D?"chat":J)},[]),B=C.useCallback(()=>j("cv"),[j]),q=C.useCallback(()=>j("ds"),[j]),we=C.useCallback(D=>p(D),[]),It=C.useCallback(()=>p(null),[]),ot=()=>{g(!1),window.location.href=`mailto:${re.email}?subject=${encodeURIComponent(c.emailSubject)}`},kr=()=>{m.reset(),d("chat"),y(null),g(!1)},$s=D=>{const J=yo.find(fe=>fe.id===D);J&&(d("chat"),m.reset(),S.current=!Mt(J.intentId).flow,y(D),g(!1),m.askIntent(J.intentId))},An=D=>{S.current=!0,m.askText(D)},Xt=D=>{d("chat"),S.current=!0,m.askIntent(D)},N=D=>D==="cv"?B():ot(),E=m.messages[0],L=v?yo.find(D=>D.id===v).title[e]:(E==null?void 0:E.role)==="user"?E.text??Mt(E.questionOf??"").question[e]:c.newSession,$={cv:c.cv.tab,ds:Qn[e].title};return i.jsxs("div",{className:"relative flex h-dvh overflow-hidden bg-bg text-ink",children:[i.jsx(Bh,{t:c,lang:e,theme:n,open:f,collapsed:h,activeProject:u==="chat"?v:null,onClose:()=>g(!1),onNew:kr,onProject:$s,onDesignSystem:q,designSystemActive:u==="ds",onCV:B,onEmail:ot,setLang:t,setTheme:r}),i.jsxs("main",{className:"relative z-10 flex min-w-0 flex-1 flex-col",children:[i.jsx(Vh,{t:c,title:L,model:s,setModel:o,onMenu:()=>g(!0),onToggleSidebar:()=>x(D=>!D),chatActive:u==="chat",onSelectChat:()=>d("chat"),docTabs:a.map(D=>({id:D,label:$[D],active:u===D,closeLabel:`${c.close} — ${$[D]}`,onSelect:()=>d(D),onClose:()=>I(D)})),docAction:u==="cv"?i.jsxs("button",{onClick:Th,className:"btn-primary !px-4 !py-2",title:c.cv.downloadHint,children:[i.jsx("span",{className:"hidden sm:inline",children:c.cv.download}),i.jsx("span",{className:"sm:hidden",children:"PDF"}),i.jsx(hf,{size:16,"aria-hidden":!0})]}):void 0}),u==="ds"?i.jsx(_h,{lang:e,t:c}):i.jsx("div",{ref:b,onScroll:P,className:"relative z-10 min-h-0 flex-1 overflow-y-auto overflow-x-hidden",children:u==="cv"?i.jsx(Lh,{t:c,lang:e}):m.messages.length===0?i.jsx(Wh,{lang:e,t:c,onPick:Xt}):i.jsx("div",{role:"log",className:"mx-auto w-full max-w-3xl space-y-7 px-4 py-8 sm:px-6",children:m.messages.map((D,J)=>{var fe;return i.jsx(Sh,{message:D,lang:e,t:c,streamCount:((fe=m.stream)==null?void 0:fe.id)===D.id?m.stream.count:null,isLast:J===m.messages.length-1,onAction:N,onFollowUp:Xt,onOpenPrototype:we,onOpenDesignSystem:q},D.id)})})}),u==="chat"&&i.jsx(Ed,{t:c,isStreaming:m.isStreaming,onSend:An,onStop:m.stop})]}),k&&i.jsx(Oh,{src:_f,title:ge[e].viewerTitle,note:ge[e].viewerNote,restartLabel:ge[e].restart,desktopHint:ge[e].desktopHint,closeLabel:c.close,onClose:It})]})}ki.createRoot(document.getElementById("root")).render(i.jsx(Jd.StrictMode,{children:i.jsx(eg,{})}));
