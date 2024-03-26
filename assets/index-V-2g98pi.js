(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function c(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=c(s);fetch(s.href,n)}})();function _a(t,e){const c=Object.create(null),a=t.split(",");for(let s=0;s<a.length;s++)c[a[s]]=!0;return e?s=>!!c[s.toLowerCase()]:s=>!!c[s]}const E2={},le=[],t3=()=>{},iH=()=>!1,Nt=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),La=t=>t.startsWith("onUpdate:"),s1=Object.assign,ba=(t,e)=>{const c=t.indexOf(e);c>-1&&t.splice(c,1)},rH=Object.prototype.hasOwnProperty,C2=(t,e)=>rH.call(t,e),i2=Array.isArray,fe=t=>Tt(t)==="[object Map]",l7=t=>Tt(t)==="[object Set]",p2=t=>typeof t=="function",G2=t=>typeof t=="string",Ae=t=>typeof t=="symbol",P2=t=>t!==null&&typeof t=="object",f7=t=>(P2(t)||p2(t))&&p2(t.then)&&p2(t.catch),u7=Object.prototype.toString,Tt=t=>u7.call(t),oH=t=>Tt(t).slice(8,-1),d7=t=>Tt(t)==="[object Object]",wa=t=>G2(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,A0=_a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Et=t=>{const e=Object.create(null);return c=>e[c]||(e[c]=t(c))},lH=/-(\w)/g,s3=Et(t=>t.replace(lH,(e,c)=>c?c.toUpperCase():"")),fH=/\B([A-Z])/g,Pe=Et(t=>t.replace(fH,"-$1").toLowerCase()),kt=Et(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ac=Et(t=>t?`on${kt(t)}`:""),T4=(t,e)=>!Object.is(t,e),P0=(t,e)=>{for(let c=0;c<t.length;c++)t[c](e)},G0=(t,e,c)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:c})},g8=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let mi;const H8=()=>mi||(mi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ya(t){if(i2(t)){const e={};for(let c=0;c<t.length;c++){const a=t[c],s=G2(a)?pH(a):ya(a);if(s)for(const n in s)e[n]=s[n]}return e}else if(G2(t)||P2(t))return t}const uH=/;(?![^(]*\))/g,dH=/:([^]+)/,hH=/\/\*[^]*?\*\//g;function pH(t){const e={};return t.replace(hH,"").split(uH).forEach(c=>{if(c){const a=c.split(dH);a.length>1&&(e[a[0].trim()]=a[1].trim())}}),e}function q6(t){let e="";if(G2(t))e=t;else if(i2(t))for(let c=0;c<t.length;c++){const a=q6(t[c]);a&&(e+=a+" ")}else if(P2(t))for(const c in t)t[c]&&(e+=c+" ");return e.trim()}const mH="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vH=_a(mH);function h7(t){return!!t||t===""}const n2=t=>G2(t)?t:t==null?"":i2(t)||P2(t)&&(t.toString===u7||!p2(t.toString))?JSON.stringify(t,p7,2):String(t),p7=(t,e)=>e&&e.__v_isRef?p7(t,e.value):fe(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((c,[a,s],n)=>(c[Pc(a,n)+" =>"]=s,c),{})}:l7(e)?{[`Set(${e.size})`]:[...e.values()].map(c=>Pc(c))}:Ae(e)?Pc(e):P2(e)&&!i2(e)&&!d7(e)?String(e):e,Pc=(t,e="")=>{var c;return Ae(t)?`Symbol(${(c=t.description)!=null?c:e})`:t};let _1;class m7{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_1,!e&&_1&&(this.index=(_1.scopes||(_1.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const c=_1;try{return _1=this,e()}finally{_1=c}}}on(){_1=this}off(){_1=this.parent}stop(e){if(this._active){let c,a;for(c=0,a=this.effects.length;c<a;c++)this.effects[c].stop();for(c=0,a=this.cleanups.length;c<a;c++)this.cleanups[c]();if(this.scopes)for(c=0,a=this.scopes.length;c<a;c++)this.scopes[c].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function v7(t){return new m7(t)}function gH(t,e=_1){e&&e.active&&e.effects.push(t)}function g7(){return _1}function HH(t){_1&&_1.cleanups.push(t)}const Sa=t=>{const e=new Set(t);return e.w=0,e.n=0,e},H7=t=>(t.w&J3)>0,z7=t=>(t.n&J3)>0,zH=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=J3},CH=t=>{const{deps:e}=t;if(e.length){let c=0;for(let a=0;a<e.length;a++){const s=e[a];H7(s)&&!z7(s)?s.delete(t):e[c++]=s,s.w&=~J3,s.n&=~J3}e.length=c}},j0=new WeakMap;let a6=0,J3=1;const z8=30;let O1;const L4=Symbol(""),C8=Symbol("");class xa{constructor(e,c=null,a){this.fn=e,this.scheduler=c,this.active=!0,this.deps=[],this.parent=void 0,gH(this,a)}run(){if(!this.active)return this.fn();let e=O1,c=G3;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=O1,O1=this,G3=!0,J3=1<<++a6,a6<=z8?zH(this):vi(this),this.fn()}finally{a6<=z8&&CH(this),J3=1<<--a6,O1=this.parent,G3=c,this.parent=void 0,this.deferStop&&this.stop()}}stop(){O1===this?this.deferStop=!0:this.active&&(vi(this),this.onStop&&this.onStop(),this.active=!1)}}function vi(t){const{deps:e}=t;if(e.length){for(let c=0;c<e.length;c++)e[c].delete(t);e.length=0}}let G3=!0;const C7=[];function Ie(){C7.push(G3),G3=!1}function Re(){const t=C7.pop();G3=t===void 0?!0:t}function H1(t,e,c){if(G3&&O1){let a=j0.get(t);a||j0.set(t,a=new Map);let s=a.get(c);s||a.set(c,s=Sa()),M7(s)}}function M7(t,e){let c=!1;a6<=z8?z7(t)||(t.n|=J3,c=!H7(t)):c=!t.has(O1),c&&(t.add(O1),O1.deps.push(t))}function m3(t,e,c,a,s,n){const i=j0.get(t);if(!i)return;let r=[];if(e==="clear")r=[...i.values()];else if(c==="length"&&i2(t)){const o=Number(a);i.forEach((l,f)=>{(f==="length"||!Ae(f)&&f>=o)&&r.push(l)})}else switch(c!==void 0&&r.push(i.get(c)),e){case"add":i2(t)?wa(c)&&r.push(i.get("length")):(r.push(i.get(L4)),fe(t)&&r.push(i.get(C8)));break;case"delete":i2(t)||(r.push(i.get(L4)),fe(t)&&r.push(i.get(C8)));break;case"set":fe(t)&&r.push(i.get(L4));break}if(r.length===1)r[0]&&M8(r[0]);else{const o=[];for(const l of r)l&&o.push(...l);M8(Sa(o))}}function M8(t,e){const c=i2(t)?t:[...t];for(const a of c)a.computed&&gi(a);for(const a of c)a.computed||gi(a)}function gi(t,e){(t!==O1||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function MH(t,e){var c;return(c=j0.get(t))==null?void 0:c.get(e)}const VH=_a("__proto__,__v_isRef,__isVue"),V7=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ae)),Hi=_H();function _H(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...c){const a=z2(this);for(let n=0,i=this.length;n<i;n++)H1(a,"get",n+"");const s=a[e](...c);return s===-1||s===!1?a[e](...c.map(z2)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...c){Ie();const a=z2(this)[e].apply(this,c);return Re(),a}}),t}function LH(t){const e=z2(this);return H1(e,"has",t),e.hasOwnProperty(t)}class _7{constructor(e=!1,c=!1){this._isReadonly=e,this._shallow=c}get(e,c,a){const s=this._isReadonly,n=this._shallow;if(c==="__v_isReactive")return!s;if(c==="__v_isReadonly")return s;if(c==="__v_isShallow")return n;if(c==="__v_raw")return a===(s?n?RH:y7:n?w7:b7).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(a)?e:void 0;const i=i2(e);if(!s){if(i&&C2(Hi,c))return Reflect.get(Hi,c,a);if(c==="hasOwnProperty")return LH}const r=Reflect.get(e,c,a);return(Ae(c)?V7.has(c):VH(c))||(s||H1(e,"get",c),n)?r:$2(r)?i&&wa(c)?r:r.value:P2(r)?s?x7(r):G6(r):r}}class L7 extends _7{constructor(e=!1){super(!1,e)}set(e,c,a,s){let n=e[c];if(!this._shallow){const o=Ve(n);if(!K0(a)&&!Ve(a)&&(n=z2(n),a=z2(a)),!i2(e)&&$2(n)&&!$2(a))return o?!1:(n.value=a,!0)}const i=i2(e)&&wa(c)?Number(c)<e.length:C2(e,c),r=Reflect.set(e,c,a,s);return e===z2(s)&&(i?T4(a,n)&&m3(e,"set",c,a):m3(e,"add",c,a)),r}deleteProperty(e,c){const a=C2(e,c);e[c];const s=Reflect.deleteProperty(e,c);return s&&a&&m3(e,"delete",c,void 0),s}has(e,c){const a=Reflect.has(e,c);return(!Ae(c)||!V7.has(c))&&H1(e,"has",c),a}ownKeys(e){return H1(e,"iterate",i2(e)?"length":L4),Reflect.ownKeys(e)}}class bH extends _7{constructor(e=!1){super(!0,e)}set(e,c){return!0}deleteProperty(e,c){return!0}}const wH=new L7,yH=new bH,SH=new L7(!0),Na=t=>t,At=t=>Reflect.getPrototypeOf(t);function h0(t,e,c=!1,a=!1){t=t.__v_raw;const s=z2(t),n=z2(e);c||(T4(e,n)&&H1(s,"get",e),H1(s,"get",n));const{has:i}=At(s),r=a?Na:c?ka:M6;if(i.call(s,e))return r(t.get(e));if(i.call(s,n))return r(t.get(n));t!==s&&t.get(e)}function p0(t,e=!1){const c=this.__v_raw,a=z2(c),s=z2(t);return e||(T4(t,s)&&H1(a,"has",t),H1(a,"has",s)),t===s?c.has(t):c.has(t)||c.has(s)}function m0(t,e=!1){return t=t.__v_raw,!e&&H1(z2(t),"iterate",L4),Reflect.get(t,"size",t)}function zi(t){t=z2(t);const e=z2(this);return At(e).has.call(e,t)||(e.add(t),m3(e,"add",t,t)),this}function Ci(t,e){e=z2(e);const c=z2(this),{has:a,get:s}=At(c);let n=a.call(c,t);n||(t=z2(t),n=a.call(c,t));const i=s.call(c,t);return c.set(t,e),n?T4(e,i)&&m3(c,"set",t,e):m3(c,"add",t,e),this}function Mi(t){const e=z2(this),{has:c,get:a}=At(e);let s=c.call(e,t);s||(t=z2(t),s=c.call(e,t)),a&&a.call(e,t);const n=e.delete(t);return s&&m3(e,"delete",t,void 0),n}function Vi(){const t=z2(this),e=t.size!==0,c=t.clear();return e&&m3(t,"clear",void 0,void 0),c}function v0(t,e){return function(a,s){const n=this,i=n.__v_raw,r=z2(i),o=e?Na:t?ka:M6;return!t&&H1(r,"iterate",L4),i.forEach((l,f)=>a.call(s,o(l),o(f),n))}}function g0(t,e,c){return function(...a){const s=this.__v_raw,n=z2(s),i=fe(n),r=t==="entries"||t===Symbol.iterator&&i,o=t==="keys"&&i,l=s[t](...a),f=c?Na:e?ka:M6;return!e&&H1(n,"iterate",o?C8:L4),{next(){const{value:u,done:d}=l.next();return d?{value:u,done:d}:{value:r?[f(u[0]),f(u[1])]:f(u),done:d}},[Symbol.iterator](){return this}}}}function N3(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function xH(){const t={get(n){return h0(this,n)},get size(){return m0(this)},has:p0,add:zi,set:Ci,delete:Mi,clear:Vi,forEach:v0(!1,!1)},e={get(n){return h0(this,n,!1,!0)},get size(){return m0(this)},has:p0,add:zi,set:Ci,delete:Mi,clear:Vi,forEach:v0(!1,!0)},c={get(n){return h0(this,n,!0)},get size(){return m0(this,!0)},has(n){return p0.call(this,n,!0)},add:N3("add"),set:N3("set"),delete:N3("delete"),clear:N3("clear"),forEach:v0(!0,!1)},a={get(n){return h0(this,n,!0,!0)},get size(){return m0(this,!0)},has(n){return p0.call(this,n,!0)},add:N3("add"),set:N3("set"),delete:N3("delete"),clear:N3("clear"),forEach:v0(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{t[n]=g0(n,!1,!1),c[n]=g0(n,!0,!1),e[n]=g0(n,!1,!0),a[n]=g0(n,!0,!0)}),[t,c,e,a]}const[NH,TH,EH,kH]=xH();function Ta(t,e){const c=e?t?kH:EH:t?TH:NH;return(a,s,n)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?a:Reflect.get(C2(c,s)&&s in a?c:a,s,n)}const AH={get:Ta(!1,!1)},PH={get:Ta(!1,!0)},IH={get:Ta(!0,!1)},b7=new WeakMap,w7=new WeakMap,y7=new WeakMap,RH=new WeakMap;function OH(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function DH(t){return t.__v_skip||!Object.isExtensible(t)?0:OH(oH(t))}function G6(t){return Ve(t)?t:Ea(t,!1,wH,AH,b7)}function S7(t){return Ea(t,!1,SH,PH,w7)}function x7(t){return Ea(t,!0,yH,IH,y7)}function Ea(t,e,c,a,s){if(!P2(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const n=s.get(t);if(n)return n;const i=DH(t);if(i===0)return t;const r=new Proxy(t,i===2?a:c);return s.set(t,r),r}function v3(t){return Ve(t)?v3(t.__v_raw):!!(t&&t.__v_isReactive)}function Ve(t){return!!(t&&t.__v_isReadonly)}function K0(t){return!!(t&&t.__v_isShallow)}function N7(t){return v3(t)||Ve(t)}function z2(t){const e=t&&t.__v_raw;return e?z2(e):t}function Pt(t){return G0(t,"__v_skip",!0),t}const M6=t=>P2(t)?G6(t):t,ka=t=>P2(t)?x7(t):t;function T7(t){G3&&O1&&(t=z2(t),M7(t.dep||(t.dep=Sa())))}function E7(t,e){t=z2(t);const c=t.dep;c&&M8(c)}function $2(t){return!!(t&&t.__v_isRef===!0)}function h2(t){return k7(t,!1)}function FH(t){return k7(t,!0)}function k7(t,e){return $2(t)?t:new BH(t,e)}class BH{constructor(e,c){this.__v_isShallow=c,this.dep=void 0,this.__v_isRef=!0,this._rawValue=c?e:z2(e),this._value=c?e:M6(e)}get value(){return T7(this),this._value}set value(e){const c=this.__v_isShallow||K0(e)||Ve(e);e=c?e:z2(e),T4(e,this._rawValue)&&(this._rawValue=e,this._value=c?e:M6(e),E7(this))}}function J(t){return $2(t)?t.value:t}const UH={get:(t,e,c)=>J(Reflect.get(t,e,c)),set:(t,e,c,a)=>{const s=t[e];return $2(s)&&!$2(c)?(s.value=c,!0):Reflect.set(t,e,c,a)}};function A7(t){return v3(t)?t:new Proxy(t,UH)}function $H(t){const e=i2(t)?new Array(t.length):{};for(const c in t)e[c]=P7(t,c);return e}class WH{constructor(e,c,a){this._object=e,this._key=c,this._defaultValue=a,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return MH(z2(this._object),this._key)}}class qH{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function GH(t,e,c){return $2(t)?t:p2(t)?new qH(t):P2(t)&&arguments.length>1?P7(t,e,c):h2(t)}function P7(t,e,c){const a=t[e];return $2(a)?a:new WH(t,e,c)}class jH{constructor(e,c,a,s){this._setter=c,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new xa(e,()=>{this._dirty||(this._dirty=!0,E7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=a}get value(){const e=z2(this);return T7(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function KH(t,e,c=!1){let a,s;const n=p2(t);return n?(a=t,s=t3):(a=t.get,s=t.set),new jH(a,s,n||!s,c)}function j3(t,e,c,a){let s;try{s=a?t(...a):t()}catch(n){It(n,e,c)}return s}function W1(t,e,c,a){if(p2(t)){const n=j3(t,e,c,a);return n&&f7(n)&&n.catch(i=>{It(i,e,c)}),n}const s=[];for(let n=0;n<t.length;n++)s.push(W1(t[n],e,c,a));return s}function It(t,e,c,a=!0){const s=e?e.vnode:null;if(e){let n=e.parent;const i=e.proxy,r=c;for(;n;){const l=n.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,i,r)===!1)return}n=n.parent}const o=e.appContext.config.errorHandler;if(o){j3(o,null,10,[t,i,r]);return}}YH(t,c,s,a)}function YH(t,e,c,a=!0){console.error(t)}let V6=!1,V8=!1;const r1=[];let Z1=0;const ue=[];let o3=null,h4=0;const I7=Promise.resolve();let Aa=null;function Rt(t){const e=Aa||I7;return t?e.then(this?t.bind(this):t):e}function XH(t){let e=Z1+1,c=r1.length;for(;e<c;){const a=e+c>>>1,s=r1[a],n=_6(s);n<t||n===t&&s.pre?e=a+1:c=a}return e}function Pa(t){(!r1.length||!r1.includes(t,V6&&t.allowRecurse?Z1+1:Z1))&&(t.id==null?r1.push(t):r1.splice(XH(t.id),0,t),R7())}function R7(){!V6&&!V8&&(V8=!0,Aa=I7.then(D7))}function QH(t){const e=r1.indexOf(t);e>Z1&&r1.splice(e,1)}function JH(t){i2(t)?ue.push(...t):(!o3||!o3.includes(t,t.allowRecurse?h4+1:h4))&&ue.push(t),R7()}function _i(t,e,c=V6?Z1+1:0){for(;c<r1.length;c++){const a=r1[c];if(a&&a.pre){if(t&&a.id!==t.uid)continue;r1.splice(c,1),c--,a()}}}function O7(t){if(ue.length){const e=[...new Set(ue)];if(ue.length=0,o3){o3.push(...e);return}for(o3=e,o3.sort((c,a)=>_6(c)-_6(a)),h4=0;h4<o3.length;h4++)o3[h4]();o3=null,h4=0}}const _6=t=>t.id==null?1/0:t.id,ZH=(t,e)=>{const c=_6(t)-_6(e);if(c===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return c};function D7(t){V8=!1,V6=!0,r1.sort(ZH);try{for(Z1=0;Z1<r1.length;Z1++){const e=r1[Z1];e&&e.active!==!1&&j3(e,null,14)}}finally{Z1=0,r1.length=0,O7(),V6=!1,Aa=null,(r1.length||ue.length)&&D7()}}function ez(t,e,...c){if(t.isUnmounted)return;const a=t.vnode.props||E2;let s=c;const n=e.startsWith("update:"),i=n&&e.slice(7);if(i&&i in a){const f=`${i==="modelValue"?"model":i}Modifiers`,{number:u,trim:d}=a[f]||E2;d&&(s=c.map(h=>G2(h)?h.trim():h)),u&&(s=c.map(g8))}let r,o=a[r=Ac(e)]||a[r=Ac(s3(e))];!o&&n&&(o=a[r=Ac(Pe(e))]),o&&W1(o,t,6,s);const l=a[r+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[r])return;t.emitted[r]=!0,W1(l,t,6,s)}}function F7(t,e,c=!1){const a=e.emitsCache,s=a.get(t);if(s!==void 0)return s;const n=t.emits;let i={},r=!1;if(!p2(t)){const o=l=>{const f=F7(l,e,!0);f&&(r=!0,s1(i,f))};!c&&e.mixins.length&&e.mixins.forEach(o),t.extends&&o(t.extends),t.mixins&&t.mixins.forEach(o)}return!n&&!r?(P2(t)&&a.set(t,null),null):(i2(n)?n.forEach(o=>i[o]=null):s1(i,n),P2(t)&&a.set(t,i),i)}function Ot(t,e){return!t||!Nt(e)?!1:(e=e.slice(2).replace(/Once$/,""),C2(t,e[0].toLowerCase()+e.slice(1))||C2(t,Pe(e))||C2(t,e))}let w1=null,Dt=null;function Y0(t){const e=w1;return w1=t,Dt=t&&t.type.__scopeId||null,e}function z1(t){Dt=t}function C1(){Dt=null}function I2(t,e=w1,c){if(!e||t._n)return t;const a=(...s)=>{a._d&&Ai(-1);const n=Y0(e);let i;try{i=t(...s)}finally{Y0(n),a._d&&Ai(1)}return i};return a._n=!0,a._c=!0,a._d=!0,a}function Ic(t){const{type:e,vnode:c,proxy:a,withProxy:s,props:n,propsOptions:[i],slots:r,attrs:o,emit:l,render:f,renderCache:u,data:d,setupState:h,ctx:m,inheritAttrs:v}=t;let M,H;const p=Y0(t);try{if(c.shapeFlag&4){const _=s||a,b=_;M=J1(f.call(b,_,u,n,h,d,m)),H=o}else{const _=e;M=J1(_.length>1?_(n,{attrs:o,slots:r,emit:l}):_(n,null)),H=e.props?o:tz(o)}}catch(_){f6.length=0,It(_,t,1),M=a2(E4)}let g=M;if(H&&v!==!1){const _=Object.keys(H),{shapeFlag:b}=g;_.length&&b&7&&(i&&_.some(La)&&(H=cz(H,i)),g=_e(g,H))}return c.dirs&&(g=_e(g),g.dirs=g.dirs?g.dirs.concat(c.dirs):c.dirs),c.transition&&(g.transition=c.transition),M=g,Y0(p),M}const tz=t=>{let e;for(const c in t)(c==="class"||c==="style"||Nt(c))&&((e||(e={}))[c]=t[c]);return e},cz=(t,e)=>{const c={};for(const a in t)(!La(a)||!(a.slice(9)in e))&&(c[a]=t[a]);return c};function az(t,e,c){const{props:a,children:s,component:n}=t,{props:i,children:r,patchFlag:o}=e,l=n.emitsOptions;if(e.dirs||e.transition)return!0;if(c&&o>=0){if(o&1024)return!0;if(o&16)return a?Li(a,i,l):!!i;if(o&8){const f=e.dynamicProps;for(let u=0;u<f.length;u++){const d=f[u];if(i[d]!==a[d]&&!Ot(l,d))return!0}}}else return(s||r)&&(!r||!r.$stable)?!0:a===i?!1:a?i?Li(a,i,l):!0:!!i;return!1}function Li(t,e,c){const a=Object.keys(e);if(a.length!==Object.keys(t).length)return!0;for(let s=0;s<a.length;s++){const n=a[s];if(e[n]!==t[n]&&!Ot(c,n))return!0}return!1}function sz({vnode:t,parent:e},c){for(;e&&e.subTree===t;)(t=e.vnode).el=c,e=e.parent}const B7="components";function Z3(t,e){return iz(B7,t,!0,e)||t}const nz=Symbol.for("v-ndc");function iz(t,e,c=!0,a=!1){const s=w1||J2;if(s){const n=s.type;if(t===B7){const r=Kz(n,!1);if(r&&(r===e||r===s3(e)||r===kt(s3(e))))return n}const i=bi(s[t]||n[t],e)||bi(s.appContext[t],e);return!i&&a?n:i}}function bi(t,e){return t&&(t[e]||t[s3(e)]||t[kt(s3(e))])}const rz=t=>t.__isSuspense;function oz(t,e){e&&e.pendingBranch?i2(t)?e.effects.push(...t):e.effects.push(t):JH(t)}const H0={};function b4(t,e,c){return U7(t,e,c)}function U7(t,e,{immediate:c,deep:a,flush:s,onTrack:n,onTrigger:i}=E2){var r;const o=g7()===((r=J2)==null?void 0:r.scope)?J2:null;let l,f=!1,u=!1;if($2(t)?(l=()=>t.value,f=K0(t)):v3(t)?(l=()=>t,a=!0):i2(t)?(u=!0,f=t.some(_=>v3(_)||K0(_)),l=()=>t.map(_=>{if($2(_))return _.value;if(v3(_))return g4(_);if(p2(_))return j3(_,o,2)})):p2(t)?e?l=()=>j3(t,o,2):l=()=>{if(!(o&&o.isUnmounted))return d&&d(),W1(t,o,3,[h])}:l=t3,e&&a){const _=l;l=()=>g4(_())}let d,h=_=>{d=p.onStop=()=>{j3(_,o,4),d=p.onStop=void 0}},m;if(w6)if(h=t3,e?c&&W1(e,o,3,[l(),u?[]:void 0,h]):l(),s==="sync"){const _=Qz();m=_.__watcherHandles||(_.__watcherHandles=[])}else return t3;let v=u?new Array(t.length).fill(H0):H0;const M=()=>{if(p.active)if(e){const _=p.run();(a||f||(u?_.some((b,A)=>T4(b,v[A])):T4(_,v)))&&(d&&d(),W1(e,o,3,[_,v===H0?void 0:u&&v[0]===H0?[]:v,h]),v=_)}else p.run()};M.allowRecurse=!!e;let H;s==="sync"?H=M:s==="post"?H=()=>h1(M,o&&o.suspense):(M.pre=!0,o&&(M.id=o.uid),H=()=>Pa(M));const p=new xa(l,H);e?c?M():v=p.run():s==="post"?h1(p.run.bind(p),o&&o.suspense):p.run();const g=()=>{p.stop(),o&&o.scope&&ba(o.scope.effects,p)};return m&&m.push(g),g}function lz(t,e,c){const a=this.proxy,s=G2(t)?t.includes(".")?$7(a,t):()=>a[t]:t.bind(a,a);let n;p2(e)?n=e:(n=e.handler,c=e);const i=J2;Le(this);const r=U7(s,n.bind(a),c);return i?Le(i):w4(),r}function $7(t,e){const c=e.split(".");return()=>{let a=t;for(let s=0;s<c.length&&a;s++)a=a[c[s]];return a}}function g4(t,e){if(!P2(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),$2(t))g4(t.value,e);else if(i2(t))for(let c=0;c<t.length;c++)g4(t[c],e);else if(l7(t)||fe(t))t.forEach(c=>{g4(c,e)});else if(d7(t))for(const c in t)g4(t[c],e);return t}function K3(t,e){const c=w1;if(c===null)return t;const a=$t(c)||c.proxy,s=t.dirs||(t.dirs=[]);for(let n=0;n<e.length;n++){let[i,r,o,l=E2]=e[n];i&&(p2(i)&&(i={mounted:i,updated:i}),i.deep&&g4(r),s.push({dir:i,instance:a,value:r,oldValue:void 0,arg:o,modifiers:l}))}return t}function l4(t,e,c,a){const s=t.dirs,n=e&&e.dirs;for(let i=0;i<s.length;i++){const r=s[i];n&&(r.oldValue=n[i].value);let o=r.dir[a];o&&(Ie(),W1(o,c,8,[t.el,r,t,e]),Re())}}/*! #__NO_SIDE_EFFECTS__ */function Ia(t,e){return p2(t)?s1({name:t.name},e,{setup:t}):t}const I0=t=>!!t.type.__asyncLoader,W7=t=>t.type.__isKeepAlive;function fz(t,e){q7(t,"a",e)}function uz(t,e){q7(t,"da",e)}function q7(t,e,c=J2){const a=t.__wdc||(t.__wdc=()=>{let s=c;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ft(e,a,c),c){let s=c.parent;for(;s&&s.parent;)W7(s.parent.vnode)&&dz(a,e,c,s),s=s.parent}}function dz(t,e,c,a){const s=Ft(e,t,a,!0);j7(()=>{ba(a[e],s)},c)}function Ft(t,e,c=J2,a=!1){if(c){const s=c[t]||(c[t]=[]),n=e.__weh||(e.__weh=(...i)=>{if(c.isUnmounted)return;Ie(),Le(c);const r=W1(e,c,t,i);return w4(),Re(),r});return a?s.unshift(n):s.push(n),n}}const w3=t=>(e,c=J2)=>(!w6||t==="sp")&&Ft(t,(...a)=>e(...a),c),hz=w3("bm"),Ra=w3("m"),G7=w3("bu"),Oa=w3("u"),Da=w3("bum"),j7=w3("um"),pz=w3("sp"),mz=w3("rtg"),vz=w3("rtc");function gz(t,e=J2){Ft("ec",t,e)}function m1(t,e,c,a){let s;const n=c&&c[a];if(i2(t)||G2(t)){s=new Array(t.length);for(let i=0,r=t.length;i<r;i++)s[i]=e(t[i],i,void 0,n&&n[i])}else if(typeof t=="number"){s=new Array(t);for(let i=0;i<t;i++)s[i]=e(i+1,i,void 0,n&&n[i])}else if(P2(t))if(t[Symbol.iterator])s=Array.from(t,(i,r)=>e(i,r,void 0,n&&n[r]));else{const i=Object.keys(t);s=new Array(i.length);for(let r=0,o=i.length;r<o;r++){const l=i[r];s[r]=e(t[l],l,r,n&&n[r])}}else s=[];return c&&(c[a]=s),s}const _8=t=>t?so(t)?$t(t)||t.proxy:_8(t.parent):null,l6=s1(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_8(t.parent),$root:t=>_8(t.root),$emit:t=>t.emit,$options:t=>Fa(t),$forceUpdate:t=>t.f||(t.f=()=>Pa(t.update)),$nextTick:t=>t.n||(t.n=Rt.bind(t.proxy)),$watch:t=>lz.bind(t)}),Rc=(t,e)=>t!==E2&&!t.__isScriptSetup&&C2(t,e),Hz={get({_:t},e){const{ctx:c,setupState:a,data:s,props:n,accessCache:i,type:r,appContext:o}=t;let l;if(e[0]!=="$"){const h=i[e];if(h!==void 0)switch(h){case 1:return a[e];case 2:return s[e];case 4:return c[e];case 3:return n[e]}else{if(Rc(a,e))return i[e]=1,a[e];if(s!==E2&&C2(s,e))return i[e]=2,s[e];if((l=t.propsOptions[0])&&C2(l,e))return i[e]=3,n[e];if(c!==E2&&C2(c,e))return i[e]=4,c[e];L8&&(i[e]=0)}}const f=l6[e];let u,d;if(f)return e==="$attrs"&&H1(t,"get",e),f(t);if((u=r.__cssModules)&&(u=u[e]))return u;if(c!==E2&&C2(c,e))return i[e]=4,c[e];if(d=o.config.globalProperties,C2(d,e))return d[e]},set({_:t},e,c){const{data:a,setupState:s,ctx:n}=t;return Rc(s,e)?(s[e]=c,!0):a!==E2&&C2(a,e)?(a[e]=c,!0):C2(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(n[e]=c,!0)},has({_:{data:t,setupState:e,accessCache:c,ctx:a,appContext:s,propsOptions:n}},i){let r;return!!c[i]||t!==E2&&C2(t,i)||Rc(e,i)||(r=n[0])&&C2(r,i)||C2(a,i)||C2(l6,i)||C2(s.config.globalProperties,i)},defineProperty(t,e,c){return c.get!=null?t._.accessCache[e]=0:C2(c,"value")&&this.set(t,e,c.value,null),Reflect.defineProperty(t,e,c)}};function wi(t){return i2(t)?t.reduce((e,c)=>(e[c]=null,e),{}):t}let L8=!0;function zz(t){const e=Fa(t),c=t.proxy,a=t.ctx;L8=!1,e.beforeCreate&&yi(e.beforeCreate,t,"bc");const{data:s,computed:n,methods:i,watch:r,provide:o,inject:l,created:f,beforeMount:u,mounted:d,beforeUpdate:h,updated:m,activated:v,deactivated:M,beforeDestroy:H,beforeUnmount:p,destroyed:g,unmounted:_,render:b,renderTracked:A,renderTriggered:G,errorCaptured:k,serverPrefetch:w,expose:y,inheritAttrs:O,components:E,directives:x,filters:R}=e;if(l&&Cz(l,a,null),i)for(const l2 in i){const q=i[l2];p2(q)&&(a[l2]=q.bind(c))}if(s){const l2=s.call(c,c);P2(l2)&&(t.data=G6(l2))}if(L8=!0,n)for(const l2 in n){const q=n[l2],f2=p2(q)?q.bind(c,c):p2(q.get)?q.get.bind(c,c):t3,y2=!p2(q)&&p2(q.set)?q.set.bind(c):t3,W2=D2({get:f2,set:y2});Object.defineProperty(a,l2,{enumerable:!0,configurable:!0,get:()=>W2.value,set:U2=>W2.value=U2})}if(r)for(const l2 in r)K7(r[l2],a,c,l2);if(o){const l2=p2(o)?o.call(c):o;Reflect.ownKeys(l2).forEach(q=>{de(q,l2[q])})}f&&yi(f,t,"c");function U(l2,q){i2(q)?q.forEach(f2=>l2(f2.bind(c))):q&&l2(q.bind(c))}if(U(hz,u),U(Ra,d),U(G7,h),U(Oa,m),U(fz,v),U(uz,M),U(gz,k),U(vz,A),U(mz,G),U(Da,p),U(j7,_),U(pz,w),i2(y))if(y.length){const l2=t.exposed||(t.exposed={});y.forEach(q=>{Object.defineProperty(l2,q,{get:()=>c[q],set:f2=>c[q]=f2})})}else t.exposed||(t.exposed={});b&&t.render===t3&&(t.render=b),O!=null&&(t.inheritAttrs=O),E&&(t.components=E),x&&(t.directives=x)}function Cz(t,e,c=t3){i2(t)&&(t=b8(t));for(const a in t){const s=t[a];let n;P2(s)?"default"in s?n=T1(s.from||a,s.default,!0):n=T1(s.from||a):n=T1(s),$2(n)?Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get:()=>n.value,set:i=>n.value=i}):e[a]=n}}function yi(t,e,c){W1(i2(t)?t.map(a=>a.bind(e.proxy)):t.bind(e.proxy),e,c)}function K7(t,e,c,a){const s=a.includes(".")?$7(c,a):()=>c[a];if(G2(t)){const n=e[t];p2(n)&&b4(s,n)}else if(p2(t))b4(s,t.bind(c));else if(P2(t))if(i2(t))t.forEach(n=>K7(n,e,c,a));else{const n=p2(t.handler)?t.handler.bind(c):e[t.handler];p2(n)&&b4(s,n,t)}}function Fa(t){const e=t.type,{mixins:c,extends:a}=e,{mixins:s,optionsCache:n,config:{optionMergeStrategies:i}}=t.appContext,r=n.get(e);let o;return r?o=r:!s.length&&!c&&!a?o=e:(o={},s.length&&s.forEach(l=>X0(o,l,i,!0)),X0(o,e,i)),P2(e)&&n.set(e,o),o}function X0(t,e,c,a=!1){const{mixins:s,extends:n}=e;n&&X0(t,n,c,!0),s&&s.forEach(i=>X0(t,i,c,!0));for(const i in e)if(!(a&&i==="expose")){const r=Mz[i]||c&&c[i];t[i]=r?r(t[i],e[i]):e[i]}return t}const Mz={data:Si,props:xi,emits:xi,methods:s6,computed:s6,beforeCreate:f1,created:f1,beforeMount:f1,mounted:f1,beforeUpdate:f1,updated:f1,beforeDestroy:f1,beforeUnmount:f1,destroyed:f1,unmounted:f1,activated:f1,deactivated:f1,errorCaptured:f1,serverPrefetch:f1,components:s6,directives:s6,watch:_z,provide:Si,inject:Vz};function Si(t,e){return e?t?function(){return s1(p2(t)?t.call(this,this):t,p2(e)?e.call(this,this):e)}:e:t}function Vz(t,e){return s6(b8(t),b8(e))}function b8(t){if(i2(t)){const e={};for(let c=0;c<t.length;c++)e[t[c]]=t[c];return e}return t}function f1(t,e){return t?[...new Set([].concat(t,e))]:e}function s6(t,e){return t?s1(Object.create(null),t,e):e}function xi(t,e){return t?i2(t)&&i2(e)?[...new Set([...t,...e])]:s1(Object.create(null),wi(t),wi(e??{})):e}function _z(t,e){if(!t)return e;if(!e)return t;const c=s1(Object.create(null),t);for(const a in e)c[a]=f1(t[a],e[a]);return c}function Y7(){return{app:null,config:{isNativeTag:iH,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lz=0;function bz(t,e){return function(a,s=null){p2(a)||(a=s1({},a)),s!=null&&!P2(s)&&(s=null);const n=Y7(),i=new WeakSet;let r=!1;const o=n.app={_uid:Lz++,_component:a,_props:s,_container:null,_context:n,_instance:null,version:Jz,get config(){return n.config},set config(l){},use(l,...f){return i.has(l)||(l&&p2(l.install)?(i.add(l),l.install(o,...f)):p2(l)&&(i.add(l),l(o,...f))),o},mixin(l){return n.mixins.includes(l)||n.mixins.push(l),o},component(l,f){return f?(n.components[l]=f,o):n.components[l]},directive(l,f){return f?(n.directives[l]=f,o):n.directives[l]},mount(l,f,u){if(!r){const d=a2(a,s);return d.appContext=n,f&&e?e(d,l):t(d,l,u),r=!0,o._container=l,l.__vue_app__=o,$t(d.component)||d.component.proxy}},unmount(){r&&(t(null,o._container),delete o._container.__vue_app__)},provide(l,f){return n.provides[l]=f,o},runWithContext(l){L6=o;try{return l()}finally{L6=null}}};return o}}let L6=null;function de(t,e){if(J2){let c=J2.provides;const a=J2.parent&&J2.parent.provides;a===c&&(c=J2.provides=Object.create(a)),c[t]=e}}function T1(t,e,c=!1){const a=J2||w1;if(a||L6){const s=a?a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:L6._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return c&&p2(e)?e.call(a&&a.proxy):e}}function wz(){return!!(J2||w1||L6)}function yz(t,e,c,a=!1){const s={},n={};G0(n,Ut,1),t.propsDefaults=Object.create(null),X7(t,e,s,n);for(const i in t.propsOptions[0])i in s||(s[i]=void 0);c?t.props=a?s:S7(s):t.type.props?t.props=s:t.props=n,t.attrs=n}function Sz(t,e,c,a){const{props:s,attrs:n,vnode:{patchFlag:i}}=t,r=z2(s),[o]=t.propsOptions;let l=!1;if((a||i>0)&&!(i&16)){if(i&8){const f=t.vnode.dynamicProps;for(let u=0;u<f.length;u++){let d=f[u];if(Ot(t.emitsOptions,d))continue;const h=e[d];if(o)if(C2(n,d))h!==n[d]&&(n[d]=h,l=!0);else{const m=s3(d);s[m]=w8(o,r,m,h,t,!1)}else h!==n[d]&&(n[d]=h,l=!0)}}}else{X7(t,e,s,n)&&(l=!0);let f;for(const u in r)(!e||!C2(e,u)&&((f=Pe(u))===u||!C2(e,f)))&&(o?c&&(c[u]!==void 0||c[f]!==void 0)&&(s[u]=w8(o,r,u,void 0,t,!0)):delete s[u]);if(n!==r)for(const u in n)(!e||!C2(e,u))&&(delete n[u],l=!0)}l&&m3(t,"set","$attrs")}function X7(t,e,c,a){const[s,n]=t.propsOptions;let i=!1,r;if(e)for(let o in e){if(A0(o))continue;const l=e[o];let f;s&&C2(s,f=s3(o))?!n||!n.includes(f)?c[f]=l:(r||(r={}))[f]=l:Ot(t.emitsOptions,o)||(!(o in a)||l!==a[o])&&(a[o]=l,i=!0)}if(n){const o=z2(c),l=r||E2;for(let f=0;f<n.length;f++){const u=n[f];c[u]=w8(s,o,u,l[u],t,!C2(l,u))}}return i}function w8(t,e,c,a,s,n){const i=t[c];if(i!=null){const r=C2(i,"default");if(r&&a===void 0){const o=i.default;if(i.type!==Function&&!i.skipFactory&&p2(o)){const{propsDefaults:l}=s;c in l?a=l[c]:(Le(s),a=l[c]=o.call(null,e),w4())}else a=o}i[0]&&(n&&!r?a=!1:i[1]&&(a===""||a===Pe(c))&&(a=!0))}return a}function Q7(t,e,c=!1){const a=e.propsCache,s=a.get(t);if(s)return s;const n=t.props,i={},r=[];let o=!1;if(!p2(t)){const f=u=>{o=!0;const[d,h]=Q7(u,e,!0);s1(i,d),h&&r.push(...h)};!c&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!n&&!o)return P2(t)&&a.set(t,le),le;if(i2(n))for(let f=0;f<n.length;f++){const u=s3(n[f]);Ni(u)&&(i[u]=E2)}else if(n)for(const f in n){const u=s3(f);if(Ni(u)){const d=n[f],h=i[u]=i2(d)||p2(d)?{type:d}:s1({},d);if(h){const m=ki(Boolean,h.type),v=ki(String,h.type);h[0]=m>-1,h[1]=v<0||m<v,(m>-1||C2(h,"default"))&&r.push(u)}}}const l=[i,r];return P2(t)&&a.set(t,l),l}function Ni(t){return t[0]!=="$"}function Ti(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ei(t,e){return Ti(t)===Ti(e)}function ki(t,e){return i2(e)?e.findIndex(c=>Ei(c,t)):p2(e)&&Ei(e,t)?0:-1}const J7=t=>t[0]==="_"||t==="$stable",Ba=t=>i2(t)?t.map(J1):[J1(t)],xz=(t,e,c)=>{if(e._n)return e;const a=I2((...s)=>Ba(e(...s)),c);return a._c=!1,a},Z7=(t,e,c)=>{const a=t._ctx;for(const s in t){if(J7(s))continue;const n=t[s];if(p2(n))e[s]=xz(s,n,a);else if(n!=null){const i=Ba(n);e[s]=()=>i}}},eo=(t,e)=>{const c=Ba(e);t.slots.default=()=>c},Nz=(t,e)=>{if(t.vnode.shapeFlag&32){const c=e._;c?(t.slots=z2(e),G0(e,"_",c)):Z7(e,t.slots={})}else t.slots={},e&&eo(t,e);G0(t.slots,Ut,1)},Tz=(t,e,c)=>{const{vnode:a,slots:s}=t;let n=!0,i=E2;if(a.shapeFlag&32){const r=e._;r?c&&r===1?n=!1:(s1(s,e),!c&&r===1&&delete s._):(n=!e.$stable,Z7(e,s)),i=e}else e&&(eo(t,e),i={default:1});if(n)for(const r in s)!J7(r)&&i[r]==null&&delete s[r]};function y8(t,e,c,a,s=!1){if(i2(t)){t.forEach((d,h)=>y8(d,e&&(i2(e)?e[h]:e),c,a,s));return}if(I0(a)&&!s)return;const n=a.shapeFlag&4?$t(a.component)||a.component.proxy:a.el,i=s?null:n,{i:r,r:o}=t,l=e&&e.r,f=r.refs===E2?r.refs={}:r.refs,u=r.setupState;if(l!=null&&l!==o&&(G2(l)?(f[l]=null,C2(u,l)&&(u[l]=null)):$2(l)&&(l.value=null)),p2(o))j3(o,r,12,[i,f]);else{const d=G2(o),h=$2(o);if(d||h){const m=()=>{if(t.f){const v=d?C2(u,o)?u[o]:f[o]:o.value;s?i2(v)&&ba(v,n):i2(v)?v.includes(n)||v.push(n):d?(f[o]=[n],C2(u,o)&&(u[o]=f[o])):(o.value=[n],t.k&&(f[t.k]=o.value))}else d?(f[o]=i,C2(u,o)&&(u[o]=i)):h&&(o.value=i,t.k&&(f[t.k]=i))};i?(m.id=-1,h1(m,c)):m()}}}const h1=oz;function Ez(t){return kz(t)}function kz(t,e){const c=H8();c.__VUE__=!0;const{insert:a,remove:s,patchProp:n,createElement:i,createText:r,createComment:o,setText:l,setElementText:f,parentNode:u,nextSibling:d,setScopeId:h=t3,insertStaticContent:m}=t,v=(C,V,L,S=null,T=null,P=null,j=!1,B=null,$=!!V.dynamicChildren)=>{if(C===V)return;C&&!Ke(C,V)&&(S=N(C),U2(C,T,P,!0),C=null),V.patchFlag===-2&&($=!1,V.dynamicChildren=null);const{type:I,ref:t2,shapeFlag:X}=V;switch(I){case Bt:M(C,V,L,S);break;case E4:H(C,V,L,S);break;case R0:C==null&&p(V,L,S,j);break;case R2:E(C,V,L,S,T,P,j,B,$);break;default:X&1?b(C,V,L,S,T,P,j,B,$):X&6?x(C,V,L,S,T,P,j,B,$):(X&64||X&128)&&I.process(C,V,L,S,T,P,j,B,$,W)}t2!=null&&T&&y8(t2,C&&C.ref,P,V||C,!V)},M=(C,V,L,S)=>{if(C==null)a(V.el=r(V.children),L,S);else{const T=V.el=C.el;V.children!==C.children&&l(T,V.children)}},H=(C,V,L,S)=>{C==null?a(V.el=o(V.children||""),L,S):V.el=C.el},p=(C,V,L,S)=>{[C.el,C.anchor]=m(C.children,V,L,S,C.el,C.anchor)},g=({el:C,anchor:V},L,S)=>{let T;for(;C&&C!==V;)T=d(C),a(C,L,S),C=T;a(V,L,S)},_=({el:C,anchor:V})=>{let L;for(;C&&C!==V;)L=d(C),s(C),C=L;s(V)},b=(C,V,L,S,T,P,j,B,$)=>{j=j||V.type==="svg",C==null?A(V,L,S,T,P,j,B,$):w(C,V,T,P,j,B,$)},A=(C,V,L,S,T,P,j,B)=>{let $,I;const{type:t2,props:X,shapeFlag:c2,transition:d2,dirs:H2}=C;if($=C.el=i(C.type,P,X&&X.is,X),c2&8?f($,C.children):c2&16&&k(C.children,$,null,S,T,P&&t2!=="foreignObject",j,B),H2&&l4(C,null,S,"created"),G($,C,C.scopeId,j,S),X){for(const L2 in X)L2!=="value"&&!A0(L2)&&n($,L2,null,X[L2],P,C.children,S,T,i1);"value"in X&&n($,"value",null,X.value),(I=X.onVnodeBeforeMount)&&Q1(I,S,C)}H2&&l4(C,null,S,"beforeMount");const x2=Az(T,d2);x2&&d2.beforeEnter($),a($,V,L),((I=X&&X.onVnodeMounted)||x2||H2)&&h1(()=>{I&&Q1(I,S,C),x2&&d2.enter($),H2&&l4(C,null,S,"mounted")},T)},G=(C,V,L,S,T)=>{if(L&&h(C,L),S)for(let P=0;P<S.length;P++)h(C,S[P]);if(T){let P=T.subTree;if(V===P){const j=T.vnode;G(C,j,j.scopeId,j.slotScopeIds,T.parent)}}},k=(C,V,L,S,T,P,j,B,$=0)=>{for(let I=$;I<C.length;I++){const t2=C[I]=B?I3(C[I]):J1(C[I]);v(null,t2,V,L,S,T,P,j,B)}},w=(C,V,L,S,T,P,j)=>{const B=V.el=C.el;let{patchFlag:$,dynamicChildren:I,dirs:t2}=V;$|=C.patchFlag&16;const X=C.props||E2,c2=V.props||E2;let d2;L&&f4(L,!1),(d2=c2.onVnodeBeforeUpdate)&&Q1(d2,L,V,C),t2&&l4(V,C,L,"beforeUpdate"),L&&f4(L,!0);const H2=T&&V.type!=="foreignObject";if(I?y(C.dynamicChildren,I,B,L,S,H2,P):j||q(C,V,B,null,L,S,H2,P,!1),$>0){if($&16)O(B,V,X,c2,L,S,T);else if($&2&&X.class!==c2.class&&n(B,"class",null,c2.class,T),$&4&&n(B,"style",X.style,c2.style,T),$&8){const x2=V.dynamicProps;for(let L2=0;L2<x2.length;L2++){const q2=x2[L2],R1=X[q2],X4=c2[q2];(X4!==R1||q2==="value")&&n(B,q2,R1,X4,T,C.children,L,S,i1)}}$&1&&C.children!==V.children&&f(B,V.children)}else!j&&I==null&&O(B,V,X,c2,L,S,T);((d2=c2.onVnodeUpdated)||t2)&&h1(()=>{d2&&Q1(d2,L,V,C),t2&&l4(V,C,L,"updated")},S)},y=(C,V,L,S,T,P,j)=>{for(let B=0;B<V.length;B++){const $=C[B],I=V[B],t2=$.el&&($.type===R2||!Ke($,I)||$.shapeFlag&70)?u($.el):L;v($,I,t2,null,S,T,P,j,!0)}},O=(C,V,L,S,T,P,j)=>{if(L!==S){if(L!==E2)for(const B in L)!A0(B)&&!(B in S)&&n(C,B,L[B],null,j,V.children,T,P,i1);for(const B in S){if(A0(B))continue;const $=S[B],I=L[B];$!==I&&B!=="value"&&n(C,B,I,$,j,V.children,T,P,i1)}"value"in S&&n(C,"value",L.value,S.value)}},E=(C,V,L,S,T,P,j,B,$)=>{const I=V.el=C?C.el:r(""),t2=V.anchor=C?C.anchor:r("");let{patchFlag:X,dynamicChildren:c2,slotScopeIds:d2}=V;d2&&(B=B?B.concat(d2):d2),C==null?(a(I,L,S),a(t2,L,S),k(V.children,L,t2,T,P,j,B,$)):X>0&&X&64&&c2&&C.dynamicChildren?(y(C.dynamicChildren,c2,L,T,P,j,B),(V.key!=null||T&&V===T.subTree)&&to(C,V,!0)):q(C,V,L,t2,T,P,j,B,$)},x=(C,V,L,S,T,P,j,B,$)=>{V.slotScopeIds=B,C==null?V.shapeFlag&512?T.ctx.activate(V,L,S,j,$):R(V,L,S,T,P,j,$):D(C,V,$)},R=(C,V,L,S,T,P,j)=>{const B=C.component=$z(C,S,T);if(W7(C)&&(B.ctx.renderer=W),Wz(B),B.asyncDep){if(T&&T.registerDep(B,U),!C.el){const $=B.subTree=a2(E4);H(null,$,V,L)}return}U(B,C,V,L,T,P,j)},D=(C,V,L)=>{const S=V.component=C.component;if(az(C,V,L))if(S.asyncDep&&!S.asyncResolved){l2(S,V,L);return}else S.next=V,QH(S.update),S.update();else V.el=C.el,S.vnode=V},U=(C,V,L,S,T,P,j)=>{const B=()=>{if(C.isMounted){let{next:t2,bu:X,u:c2,parent:d2,vnode:H2}=C,x2=t2,L2;f4(C,!1),t2?(t2.el=H2.el,l2(C,t2,j)):t2=H2,X&&P0(X),(L2=t2.props&&t2.props.onVnodeBeforeUpdate)&&Q1(L2,d2,t2,H2),f4(C,!0);const q2=Ic(C),R1=C.subTree;C.subTree=q2,v(R1,q2,u(R1.el),N(R1),C,T,P),t2.el=q2.el,x2===null&&sz(C,q2.el),c2&&h1(c2,T),(L2=t2.props&&t2.props.onVnodeUpdated)&&h1(()=>Q1(L2,d2,t2,H2),T)}else{let t2;const{el:X,props:c2}=V,{bm:d2,m:H2,parent:x2}=C,L2=I0(V);if(f4(C,!1),d2&&P0(d2),!L2&&(t2=c2&&c2.onVnodeBeforeMount)&&Q1(t2,x2,V),f4(C,!0),X&&V2){const q2=()=>{C.subTree=Ic(C),V2(X,C.subTree,C,T,null)};L2?V.type.__asyncLoader().then(()=>!C.isUnmounted&&q2()):q2()}else{const q2=C.subTree=Ic(C);v(null,q2,L,S,C,T,P),V.el=q2.el}if(H2&&h1(H2,T),!L2&&(t2=c2&&c2.onVnodeMounted)){const q2=V;h1(()=>Q1(t2,x2,q2),T)}(V.shapeFlag&256||x2&&I0(x2.vnode)&&x2.vnode.shapeFlag&256)&&C.a&&h1(C.a,T),C.isMounted=!0,V=L=S=null}},$=C.effect=new xa(B,()=>Pa(I),C.scope),I=C.update=()=>$.run();I.id=C.uid,f4(C,!0),I()},l2=(C,V,L)=>{V.component=C;const S=C.vnode.props;C.vnode=V,C.next=null,Sz(C,V.props,S,L),Tz(C,V.children,L),Ie(),_i(C),Re()},q=(C,V,L,S,T,P,j,B,$=!1)=>{const I=C&&C.children,t2=C?C.shapeFlag:0,X=V.children,{patchFlag:c2,shapeFlag:d2}=V;if(c2>0){if(c2&128){y2(I,X,L,S,T,P,j,B,$);return}else if(c2&256){f2(I,X,L,S,T,P,j,B,$);return}}d2&8?(t2&16&&i1(I,T,P),X!==I&&f(L,X)):t2&16?d2&16?y2(I,X,L,S,T,P,j,B,$):i1(I,T,P,!0):(t2&8&&f(L,""),d2&16&&k(X,L,S,T,P,j,B,$))},f2=(C,V,L,S,T,P,j,B,$)=>{C=C||le,V=V||le;const I=C.length,t2=V.length,X=Math.min(I,t2);let c2;for(c2=0;c2<X;c2++){const d2=V[c2]=$?I3(V[c2]):J1(V[c2]);v(C[c2],d2,L,null,T,P,j,B,$)}I>t2?i1(C,T,P,!0,!1,X):k(V,L,S,T,P,j,B,$,X)},y2=(C,V,L,S,T,P,j,B,$)=>{let I=0;const t2=V.length;let X=C.length-1,c2=t2-1;for(;I<=X&&I<=c2;){const d2=C[I],H2=V[I]=$?I3(V[I]):J1(V[I]);if(Ke(d2,H2))v(d2,H2,L,null,T,P,j,B,$);else break;I++}for(;I<=X&&I<=c2;){const d2=C[X],H2=V[c2]=$?I3(V[c2]):J1(V[c2]);if(Ke(d2,H2))v(d2,H2,L,null,T,P,j,B,$);else break;X--,c2--}if(I>X){if(I<=c2){const d2=c2+1,H2=d2<t2?V[d2].el:S;for(;I<=c2;)v(null,V[I]=$?I3(V[I]):J1(V[I]),L,H2,T,P,j,B,$),I++}}else if(I>c2)for(;I<=X;)U2(C[I],T,P,!0),I++;else{const d2=I,H2=I,x2=new Map;for(I=H2;I<=c2;I++){const V1=V[I]=$?I3(V[I]):J1(V[I]);V1.key!=null&&x2.set(V1.key,I)}let L2,q2=0;const R1=c2-H2+1;let X4=!1,di=0;const je=new Array(R1);for(I=0;I<R1;I++)je[I]=0;for(I=d2;I<=X;I++){const V1=C[I];if(q2>=R1){U2(V1,T,P,!0);continue}let X1;if(V1.key!=null)X1=x2.get(V1.key);else for(L2=H2;L2<=c2;L2++)if(je[L2-H2]===0&&Ke(V1,V[L2])){X1=L2;break}X1===void 0?U2(V1,T,P,!0):(je[X1-H2]=I+1,X1>=di?di=X1:X4=!0,v(V1,V[X1],L,null,T,P,j,B,$),q2++)}const hi=X4?Pz(je):le;for(L2=hi.length-1,I=R1-1;I>=0;I--){const V1=H2+I,X1=V[V1],pi=V1+1<t2?V[V1+1].el:S;je[I]===0?v(null,X1,L,pi,T,P,j,B,$):X4&&(L2<0||I!==hi[L2]?W2(X1,L,pi,2):L2--)}}},W2=(C,V,L,S,T=null)=>{const{el:P,type:j,transition:B,children:$,shapeFlag:I}=C;if(I&6){W2(C.component.subTree,V,L,S);return}if(I&128){C.suspense.move(V,L,S);return}if(I&64){j.move(C,V,L,W);return}if(j===R2){a(P,V,L);for(let X=0;X<$.length;X++)W2($[X],V,L,S);a(C.anchor,V,L);return}if(j===R0){g(C,V,L);return}if(S!==2&&I&1&&B)if(S===0)B.beforeEnter(P),a(P,V,L),h1(()=>B.enter(P),T);else{const{leave:X,delayLeave:c2,afterLeave:d2}=B,H2=()=>a(P,V,L),x2=()=>{X(P,()=>{H2(),d2&&d2()})};c2?c2(P,H2,x2):x2()}else a(P,V,L)},U2=(C,V,L,S=!1,T=!1)=>{const{type:P,props:j,ref:B,children:$,dynamicChildren:I,shapeFlag:t2,patchFlag:X,dirs:c2}=C;if(B!=null&&y8(B,null,L,C,!0),t2&256){V.ctx.deactivate(C);return}const d2=t2&1&&c2,H2=!I0(C);let x2;if(H2&&(x2=j&&j.onVnodeBeforeUnmount)&&Q1(x2,V,C),t2&6)x1(C.component,L,S);else{if(t2&128){C.suspense.unmount(L,S);return}d2&&l4(C,null,V,"beforeUnmount"),t2&64?C.type.remove(C,V,L,T,W,S):I&&(P!==R2||X>0&&X&64)?i1(I,V,L,!1,!0):(P===R2&&X&384||!T&&t2&16)&&i1($,V,L),S&&u2(C)}(H2&&(x2=j&&j.onVnodeUnmounted)||d2)&&h1(()=>{x2&&Q1(x2,V,C),d2&&l4(C,null,V,"unmounted")},L)},u2=C=>{const{type:V,el:L,anchor:S,transition:T}=C;if(V===R2){S2(L,S);return}if(V===R0){_(C);return}const P=()=>{s(L),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(C.shapeFlag&1&&T&&!T.persisted){const{leave:j,delayLeave:B}=T,$=()=>j(L,P);B?B(C.el,P,$):$()}else P()},S2=(C,V)=>{let L;for(;C!==V;)L=d(C),s(C),C=L;s(V)},x1=(C,V,L)=>{const{bum:S,scope:T,update:P,subTree:j,um:B}=C;S&&P0(S),T.stop(),P&&(P.active=!1,U2(j,C,V,L)),B&&h1(B,V),h1(()=>{C.isUnmounted=!0},V),V&&V.pendingBranch&&!V.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===V.pendingId&&(V.deps--,V.deps===0&&V.resolve())},i1=(C,V,L,S=!1,T=!1,P=0)=>{for(let j=P;j<C.length;j++)U2(C[j],V,L,S,T)},N=C=>C.shapeFlag&6?N(C.component.subTree):C.shapeFlag&128?C.suspense.next():d(C.anchor||C.el),Y=(C,V,L)=>{C==null?V._vnode&&U2(V._vnode,null,null,!0):v(V._vnode||null,C,V,null,null,null,L),_i(),O7(),V._vnode=C},W={p:v,um:U2,m:W2,r:u2,mt:R,mc:k,pc:q,pbc:y,n:N,o:t};let Z,V2;return e&&([Z,V2]=e(W)),{render:Y,hydrate:Z,createApp:bz(Y,Z)}}function f4({effect:t,update:e},c){t.allowRecurse=e.allowRecurse=c}function Az(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function to(t,e,c=!1){const a=t.children,s=e.children;if(i2(a)&&i2(s))for(let n=0;n<a.length;n++){const i=a[n];let r=s[n];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=s[n]=I3(s[n]),r.el=i.el),c||to(i,r)),r.type===Bt&&(r.el=i.el)}}function Pz(t){const e=t.slice(),c=[0];let a,s,n,i,r;const o=t.length;for(a=0;a<o;a++){const l=t[a];if(l!==0){if(s=c[c.length-1],t[s]<l){e[a]=s,c.push(a);continue}for(n=0,i=c.length-1;n<i;)r=n+i>>1,t[c[r]]<l?n=r+1:i=r;l<t[c[n]]&&(n>0&&(e[a]=c[n-1]),c[n]=a)}}for(n=c.length,i=c[n-1];n-- >0;)c[n]=i,i=e[i];return c}const Iz=t=>t.__isTeleport,R2=Symbol.for("v-fgt"),Bt=Symbol.for("v-txt"),E4=Symbol.for("v-cmt"),R0=Symbol.for("v-stc"),f6=[];let F1=null;function e2(t=!1){f6.push(F1=t?null:[])}function Rz(){f6.pop(),F1=f6[f6.length-1]||null}let b6=1;function Ai(t){b6+=t}function co(t){return t.dynamicChildren=b6>0?F1||le:null,Rz(),b6>0&&F1&&F1.push(t),t}function o2(t,e,c,a,s,n){return co(z(t,e,c,a,s,n,!0))}function u3(t,e,c,a,s){return co(a2(t,e,c,a,s,!0))}function S8(t){return t?t.__v_isVNode===!0:!1}function Ke(t,e){return t.type===e.type&&t.key===e.key}const Ut="__vInternal",ao=({key:t})=>t??null,O0=({ref:t,ref_key:e,ref_for:c})=>(typeof t=="number"&&(t=""+t),t!=null?G2(t)||$2(t)||p2(t)?{i:w1,r:t,k:e,f:!!c}:t:null);function z(t,e=null,c=null,a=0,s=null,n=t===R2?0:1,i=!1,r=!1){const o={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ao(e),ref:e&&O0(e),scopeId:Dt,slotScopeIds:null,children:c,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:a,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:w1};return r?(Ua(o,c),n&128&&t.normalize(o)):c&&(o.shapeFlag|=G2(c)?8:16),b6>0&&!i&&F1&&(o.patchFlag>0||n&6)&&o.patchFlag!==32&&F1.push(o),o}const a2=Oz;function Oz(t,e=null,c=null,a=0,s=null,n=!1){if((!t||t===nz)&&(t=E4),S8(t)){const r=_e(t,e,!0);return c&&Ua(r,c),b6>0&&!n&&F1&&(r.shapeFlag&6?F1[F1.indexOf(t)]=r:F1.push(r)),r.patchFlag|=-2,r}if(Yz(t)&&(t=t.__vccOpts),e){e=Dz(e);let{class:r,style:o}=e;r&&!G2(r)&&(e.class=q6(r)),P2(o)&&(N7(o)&&!i2(o)&&(o=s1({},o)),e.style=ya(o))}const i=G2(t)?1:rz(t)?128:Iz(t)?64:P2(t)?4:p2(t)?2:0;return z(t,e,c,a,s,i,n,!0)}function Dz(t){return t?N7(t)||Ut in t?s1({},t):t:null}function _e(t,e,c=!1){const{props:a,ref:s,patchFlag:n,children:i}=t,r=e?Fz(a||{},e):a;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:r,key:r&&ao(r),ref:e&&e.ref?c&&s?i2(s)?s.concat(O0(e)):[s,O0(e)]:O0(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==R2?n===-1?16:n|16:n,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&_e(t.ssContent),ssFallback:t.ssFallback&&_e(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function b1(t=" ",e=0){return a2(Bt,null,t,e)}function K1(t,e){const c=a2(R0,null,t);return c.staticCount=e,c}function se(t="",e=!1){return e?(e2(),u3(E4,null,t)):a2(E4,null,t)}function J1(t){return t==null||typeof t=="boolean"?a2(E4):i2(t)?a2(R2,null,t.slice()):typeof t=="object"?I3(t):a2(Bt,null,String(t))}function I3(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:_e(t)}function Ua(t,e){let c=0;const{shapeFlag:a}=t;if(e==null)e=null;else if(i2(e))c=16;else if(typeof e=="object")if(a&65){const s=e.default;s&&(s._c&&(s._d=!1),Ua(t,s()),s._c&&(s._d=!0));return}else{c=32;const s=e._;!s&&!(Ut in e)?e._ctx=w1:s===3&&w1&&(w1.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else p2(e)?(e={default:e,_ctx:w1},c=32):(e=String(e),a&64?(c=16,e=[b1(e)]):c=8);t.children=e,t.shapeFlag|=c}function Fz(...t){const e={};for(let c=0;c<t.length;c++){const a=t[c];for(const s in a)if(s==="class")e.class!==a.class&&(e.class=q6([e.class,a.class]));else if(s==="style")e.style=ya([e.style,a.style]);else if(Nt(s)){const n=e[s],i=a[s];i&&n!==i&&!(i2(n)&&n.includes(i))&&(e[s]=n?[].concat(n,i):i)}else s!==""&&(e[s]=a[s])}return e}function Q1(t,e,c,a=null){W1(t,e,7,[c,a])}const Bz=Y7();let Uz=0;function $z(t,e,c){const a=t.type,s=(e?e.appContext:t.appContext)||Bz,n={uid:Uz++,vnode:t,type:a,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new m7(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Q7(a,s),emitsOptions:F7(a,s),emit:null,emitted:null,propsDefaults:E2,inheritAttrs:a.inheritAttrs,ctx:E2,data:E2,props:E2,attrs:E2,slots:E2,refs:E2,setupState:E2,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:c,suspenseId:c?c.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=e?e.root:n,n.emit=ez.bind(null,n),t.ce&&t.ce(n),n}let J2=null,$a,Q4,Pi="__VUE_INSTANCE_SETTERS__";(Q4=H8()[Pi])||(Q4=H8()[Pi]=[]),Q4.push(t=>J2=t),$a=t=>{Q4.length>1?Q4.forEach(e=>e(t)):Q4[0](t)};const Le=t=>{$a(t),t.scope.on()},w4=()=>{J2&&J2.scope.off(),$a(null)};function so(t){return t.vnode.shapeFlag&4}let w6=!1;function Wz(t,e=!1){w6=e;const{props:c,children:a}=t.vnode,s=so(t);yz(t,c,s,e),Nz(t,a);const n=s?qz(t,e):void 0;return w6=!1,n}function qz(t,e){const c=t.type;t.accessCache=Object.create(null),t.proxy=Pt(new Proxy(t.ctx,Hz));const{setup:a}=c;if(a){const s=t.setupContext=a.length>1?jz(t):null;Le(t),Ie();const n=j3(a,t,0,[t.props,s]);if(Re(),w4(),f7(n)){if(n.then(w4,w4),e)return n.then(i=>{Ii(t,i,e)}).catch(i=>{It(i,t,0)});t.asyncDep=n}else Ii(t,n,e)}else no(t,e)}function Ii(t,e,c){p2(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:P2(e)&&(t.setupState=A7(e)),no(t,c)}let Ri;function no(t,e,c){const a=t.type;if(!t.render){if(!e&&Ri&&!a.render){const s=a.template||Fa(t).template;if(s){const{isCustomElement:n,compilerOptions:i}=t.appContext.config,{delimiters:r,compilerOptions:o}=a,l=s1(s1({isCustomElement:n,delimiters:r},i),o);a.render=Ri(s,l)}}t.render=a.render||t3}{Le(t),Ie();try{zz(t)}finally{Re(),w4()}}}function Gz(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,c){return H1(t,"get","$attrs"),e[c]}}))}function jz(t){const e=c=>{t.exposed=c||{}};return{get attrs(){return Gz(t)},slots:t.slots,emit:t.emit,expose:e}}function $t(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(A7(Pt(t.exposed)),{get(e,c){if(c in e)return e[c];if(c in l6)return l6[c](t)},has(e,c){return c in e||c in l6}}))}function Kz(t,e=!0){return p2(t)?t.displayName||t.name:t.name||e&&t.__name}function Yz(t){return p2(t)&&"__vccOpts"in t}const D2=(t,e)=>KH(t,e,w6);function p1(t,e,c){const a=arguments.length;return a===2?P2(e)&&!i2(e)?S8(e)?a2(t,null,[e]):a2(t,e):a2(t,null,e):(a>3?c=Array.prototype.slice.call(arguments,2):a===3&&S8(c)&&(c=[c]),a2(t,e,c))}const Xz=Symbol.for("v-scx"),Qz=()=>T1(Xz),Jz="3.3.12",Zz="http://www.w3.org/2000/svg",p4=typeof document<"u"?document:null,Oi=p4&&p4.createElement("template"),eC={insert:(t,e,c)=>{e.insertBefore(t,c||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,c,a)=>{const s=e?p4.createElementNS(Zz,t):p4.createElement(t,c?{is:c}:void 0);return t==="select"&&a&&a.multiple!=null&&s.setAttribute("multiple",a.multiple),s},createText:t=>p4.createTextNode(t),createComment:t=>p4.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>p4.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,c,a,s,n){const i=c?c.previousSibling:e.lastChild;if(s&&(s===n||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),c),!(s===n||!(s=s.nextSibling)););else{Oi.innerHTML=a?`<svg>${t}</svg>`:t;const r=Oi.content;if(a){const o=r.firstChild;for(;o.firstChild;)r.appendChild(o.firstChild);r.removeChild(o)}e.insertBefore(r,c)}return[i?i.nextSibling:e.firstChild,c?c.previousSibling:e.lastChild]}},tC=Symbol("_vtc");function cC(t,e,c){const a=t[tC];a&&(e=(e?[e,...a]:[...a]).join(" ")),e==null?t.removeAttribute("class"):c?t.setAttribute("class",e):t.className=e}const Wa=Symbol("_vod"),he={beforeMount(t,{value:e},{transition:c}){t[Wa]=t.style.display==="none"?"":t.style.display,c&&e?c.beforeEnter(t):Ye(t,e)},mounted(t,{value:e},{transition:c}){c&&e&&c.enter(t)},updated(t,{value:e,oldValue:c},{transition:a}){!e!=!c&&(a?e?(a.beforeEnter(t),Ye(t,!0),a.enter(t)):a.leave(t,()=>{Ye(t,!1)}):Ye(t,e))},beforeUnmount(t,{value:e}){Ye(t,e)}};function Ye(t,e){t.style.display=e?t[Wa]:"none"}const aC=Symbol("");function sC(t,e,c){const a=t.style,s=G2(c);if(c&&!s){if(e&&!G2(e))for(const n in e)c[n]==null&&x8(a,n,"");for(const n in c)x8(a,n,c[n])}else{const n=a.display;if(s){if(e!==c){const i=a[aC];i&&(c+=";"+i),a.cssText=c}}else e&&t.removeAttribute("style");Wa in t&&(a.display=n)}}const Di=/\s*!important$/;function x8(t,e,c){if(i2(c))c.forEach(a=>x8(t,e,a));else if(c==null&&(c=""),e.startsWith("--"))t.setProperty(e,c);else{const a=nC(t,e);Di.test(c)?t.setProperty(Pe(a),c.replace(Di,""),"important"):t[a]=c}}const Fi=["Webkit","Moz","ms"],Oc={};function nC(t,e){const c=Oc[e];if(c)return c;let a=s3(e);if(a!=="filter"&&a in t)return Oc[e]=a;a=kt(a);for(let s=0;s<Fi.length;s++){const n=Fi[s]+a;if(n in t)return Oc[e]=n}return e}const Bi="http://www.w3.org/1999/xlink";function iC(t,e,c,a,s){if(a&&e.startsWith("xlink:"))c==null?t.removeAttributeNS(Bi,e.slice(6,e.length)):t.setAttributeNS(Bi,e,c);else{const n=vH(e);c==null||n&&!h7(c)?t.removeAttribute(e):t.setAttribute(e,n?"":c)}}function rC(t,e,c,a,s,n,i){if(e==="innerHTML"||e==="textContent"){a&&i(a,s,n),t[e]=c??"";return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){t._value=c;const l=r==="OPTION"?t.getAttribute("value"):t.value,f=c??"";l!==f&&(t.value=f),c==null&&t.removeAttribute(e);return}let o=!1;if(c===""||c==null){const l=typeof t[e];l==="boolean"?c=h7(c):c==null&&l==="string"?(c="",o=!0):l==="number"&&(c=0,o=!0)}try{t[e]=c}catch{}o&&t.removeAttribute(e)}function ee(t,e,c,a){t.addEventListener(e,c,a)}function oC(t,e,c,a){t.removeEventListener(e,c,a)}const Ui=Symbol("_vei");function lC(t,e,c,a,s=null){const n=t[Ui]||(t[Ui]={}),i=n[e];if(a&&i)i.value=a;else{const[r,o]=fC(e);if(a){const l=n[e]=hC(a,s);ee(t,r,l,o)}else i&&(oC(t,r,i,o),n[e]=void 0)}}const $i=/(?:Once|Passive|Capture)$/;function fC(t){let e;if($i.test(t)){e={};let a;for(;a=t.match($i);)t=t.slice(0,t.length-a[0].length),e[a[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Pe(t.slice(2)),e]}let Dc=0;const uC=Promise.resolve(),dC=()=>Dc||(uC.then(()=>Dc=0),Dc=Date.now());function hC(t,e){const c=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=c.attached)return;W1(pC(a,c.value),e,5,[a])};return c.value=t,c.attached=dC(),c}function pC(t,e){if(i2(e)){const c=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{c.call(t),t._stopped=!0},e.map(a=>s=>!s._stopped&&a&&a(s))}else return e}const Wi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,mC=(t,e,c,a,s=!1,n,i,r,o)=>{e==="class"?cC(t,a,s):e==="style"?sC(t,c,a):Nt(e)?La(e)||lC(t,e,c,a,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vC(t,e,a,s))?rC(t,e,a,n,i,r,o):(e==="true-value"?t._trueValue=a:e==="false-value"&&(t._falseValue=a),iC(t,e,a,s))};function vC(t,e,c,a){if(a)return!!(e==="innerHTML"||e==="textContent"||e in t&&Wi(e)&&p2(c));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Wi(e)&&G2(c)?!1:e in t}const qi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return i2(e)?c=>P0(e,c):e};function gC(t){t.target.composing=!0}function Gi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Fc=Symbol("_assign"),ji={created(t,{modifiers:{lazy:e,trim:c,number:a}},s){t[Fc]=qi(s);const n=a||s.props&&s.props.type==="number";ee(t,e?"change":"input",i=>{if(i.target.composing)return;let r=t.value;c&&(r=r.trim()),n&&(r=g8(r)),t[Fc](r)}),c&&ee(t,"change",()=>{t.value=t.value.trim()}),e||(ee(t,"compositionstart",gC),ee(t,"compositionend",Gi),ee(t,"change",Gi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:c,trim:a,number:s}},n){if(t[Fc]=qi(n),t.composing)return;const i=s||t.type==="number"?g8(t.value):t.value,r=e??"";i!==r&&(document.activeElement===t&&t.type!=="range"&&(c||a&&t.value.trim()===r)||(t.value=r))}},HC=s1({patchProp:mC},eC);let Ki;function zC(){return Ki||(Ki=Ez(HC))}const CC=(...t)=>{const e=zC().createApp(...t),{mount:c}=e;return e.mount=a=>{const s=MC(a);if(!s)return;const n=e._component;!p2(n)&&!n.render&&!n.template&&(n.template=s.innerHTML),s.innerHTML="";const i=c(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},e};function MC(t){return G2(t)?document.querySelector(t):t}var VC=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let io;const Wt=t=>io=t,ro=Symbol();function N8(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var u6;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(u6||(u6={}));function _C(){const t=v7(!0),e=t.run(()=>h2({}));let c=[],a=[];const s=Pt({install(n){Wt(s),s._a=n,n.provide(ro,s),n.config.globalProperties.$pinia=s,a.forEach(i=>c.push(i)),a=[]},use(n){return!this._a&&!VC?a.push(n):c.push(n),this},_p:c,_a:null,_e:t,_s:new Map,state:e});return s}const oo=()=>{};function Yi(t,e,c,a=oo){t.push(e);const s=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),a())};return!c&&g7()&&HH(s),s}function J4(t,...e){t.slice().forEach(c=>{c(...e)})}const LC=t=>t();function T8(t,e){t instanceof Map&&e instanceof Map&&e.forEach((c,a)=>t.set(a,c)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const c in e){if(!e.hasOwnProperty(c))continue;const a=e[c],s=t[c];N8(s)&&N8(a)&&t.hasOwnProperty(c)&&!$2(a)&&!v3(a)?t[c]=T8(s,a):t[c]=a}return t}const bC=Symbol();function wC(t){return!N8(t)||!t.hasOwnProperty(bC)}const{assign:A3}=Object;function yC(t){return!!($2(t)&&t.effect)}function SC(t,e,c,a){const{state:s,actions:n,getters:i}=e,r=c.state.value[t];let o;function l(){r||(c.state.value[t]=s?s():{});const f=$H(c.state.value[t]);return A3(f,n,Object.keys(i||{}).reduce((u,d)=>(u[d]=Pt(D2(()=>{Wt(c);const h=c._s.get(t);return i[d].call(h,h)})),u),{}))}return o=lo(t,l,e,c,a,!0),o}function lo(t,e,c={},a,s,n){let i;const r=A3({actions:{}},c),o={deep:!0};let l,f,u=[],d=[],h;const m=a.state.value[t];!n&&!m&&(a.state.value[t]={}),h2({});let v;function M(k){let w;l=f=!1,typeof k=="function"?(k(a.state.value[t]),w={type:u6.patchFunction,storeId:t,events:h}):(T8(a.state.value[t],k),w={type:u6.patchObject,payload:k,storeId:t,events:h});const y=v=Symbol();Rt().then(()=>{v===y&&(l=!0)}),f=!0,J4(u,w,a.state.value[t])}const H=n?function(){const{state:w}=c,y=w?w():{};this.$patch(O=>{A3(O,y)})}:oo;function p(){i.stop(),u=[],d=[],a._s.delete(t)}function g(k,w){return function(){Wt(a);const y=Array.from(arguments),O=[],E=[];function x(U){O.push(U)}function R(U){E.push(U)}J4(d,{args:y,name:k,store:b,after:x,onError:R});let D;try{D=w.apply(this&&this.$id===t?this:b,y)}catch(U){throw J4(E,U),U}return D instanceof Promise?D.then(U=>(J4(O,U),U)).catch(U=>(J4(E,U),Promise.reject(U))):(J4(O,D),D)}}const _={_p:a,$id:t,$onAction:Yi.bind(null,d),$patch:M,$reset:H,$subscribe(k,w={}){const y=Yi(u,k,w.detached,()=>O()),O=i.run(()=>b4(()=>a.state.value[t],E=>{(w.flush==="sync"?f:l)&&k({storeId:t,type:u6.direct,events:h},E)},A3({},o,w)));return y},$dispose:p},b=G6(_);a._s.set(t,b);const G=(a._a&&a._a.runWithContext||LC)(()=>a._e.run(()=>(i=v7()).run(e)));for(const k in G){const w=G[k];if($2(w)&&!yC(w)||v3(w))n||(m&&wC(w)&&($2(w)?w.value=m[k]:T8(w,m[k])),a.state.value[t][k]=w);else if(typeof w=="function"){const y=g(k,w);G[k]=y,r.actions[k]=w}}return A3(b,G),A3(z2(b),G),Object.defineProperty(b,"$state",{get:()=>a.state.value[t],set:k=>{M(w=>{A3(w,k)})}}),a._p.forEach(k=>{A3(b,i.run(()=>k({store:b,app:a._a,pinia:a,options:r})))}),m&&n&&c.hydrate&&c.hydrate(b.$state,m),l=!0,f=!0,b}function j6(t,e,c){let a,s;const n=typeof e=="function";typeof t=="string"?(a=t,s=n?c:e):(s=t,a=t.id);function i(r,o){const l=wz();return r=r||(l?T1(ro,null):null),r&&Wt(r),r=io,r._s.has(a)||(n?lo(a,e,s,r):SC(a,s,r)),r._s.get(a)}return i.$id=a,i}function z3(t){{t=z2(t);const e={};for(const c in t){const a=t[c];($2(a)||v3(a))&&(e[c]=GH(t,c))}return e}}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const te=typeof window<"u";function xC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const _2=Object.assign;function Bc(t,e){const c={};for(const a in e){const s=e[a];c[a]=G1(s)?s.map(t):t(s)}return c}const d6=()=>{},G1=Array.isArray,NC=/\/$/,TC=t=>t.replace(NC,"");function Uc(t,e,c="/"){let a,s={},n="",i="";const r=e.indexOf("#");let o=e.indexOf("?");return r<o&&r>=0&&(o=-1),o>-1&&(a=e.slice(0,o),n=e.slice(o+1,r>-1?r:e.length),s=t(n)),r>-1&&(a=a||e.slice(0,r),i=e.slice(r,e.length)),a=PC(a??e,c),{fullPath:a+(n&&"?")+n+i,path:a,query:s,hash:i}}function EC(t,e){const c=e.query?t(e.query):"";return e.path+(c&&"?")+c+(e.hash||"")}function Xi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function kC(t,e,c){const a=e.matched.length-1,s=c.matched.length-1;return a>-1&&a===s&&be(e.matched[a],c.matched[s])&&fo(e.params,c.params)&&t(e.query)===t(c.query)&&e.hash===c.hash}function be(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function fo(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const c in t)if(!AC(t[c],e[c]))return!1;return!0}function AC(t,e){return G1(t)?Qi(t,e):G1(e)?Qi(e,t):t===e}function Qi(t,e){return G1(e)?t.length===e.length&&t.every((c,a)=>c===e[a]):t.length===1&&t[0]===e}function PC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const c=e.split("/"),a=t.split("/"),s=a[a.length-1];(s===".."||s===".")&&a.push("");let n=c.length-1,i,r;for(i=0;i<a.length;i++)if(r=a[i],r!==".")if(r==="..")n>1&&n--;else break;return c.slice(0,n).join("/")+"/"+a.slice(i-(i===a.length?1:0)).join("/")}var y6;(function(t){t.pop="pop",t.push="push"})(y6||(y6={}));var h6;(function(t){t.back="back",t.forward="forward",t.unknown=""})(h6||(h6={}));function IC(t){if(!t)if(te){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),TC(t)}const RC=/^[^#]+#/;function OC(t,e){return t.replace(RC,"#")+e}function DC(t,e){const c=document.documentElement.getBoundingClientRect(),a=t.getBoundingClientRect();return{behavior:e.behavior,left:a.left-c.left-(e.left||0),top:a.top-c.top-(e.top||0)}}const qt=()=>({left:window.pageXOffset,top:window.pageYOffset});function FC(t){let e;if("el"in t){const c=t.el,a=typeof c=="string"&&c.startsWith("#"),s=typeof c=="string"?a?document.getElementById(c.slice(1)):document.querySelector(c):c;if(!s)return;e=DC(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ji(t,e){return(history.state?history.state.position-e:-1)+t}const E8=new Map;function BC(t,e){E8.set(t,e)}function UC(t){const e=E8.get(t);return E8.delete(t),e}let $C=()=>location.protocol+"//"+location.host;function uo(t,e){const{pathname:c,search:a,hash:s}=e,n=t.indexOf("#");if(n>-1){let r=s.includes(t.slice(n))?t.slice(n).length:1,o=s.slice(r);return o[0]!=="/"&&(o="/"+o),Xi(o,"")}return Xi(c,t)+a+s}function WC(t,e,c,a){let s=[],n=[],i=null;const r=({state:d})=>{const h=uo(t,location),m=c.value,v=e.value;let M=0;if(d){if(c.value=h,e.value=d,i&&i===m){i=null;return}M=v?d.position-v.position:0}else a(h);s.forEach(H=>{H(c.value,m,{delta:M,type:y6.pop,direction:M?M>0?h6.forward:h6.back:h6.unknown})})};function o(){i=c.value}function l(d){s.push(d);const h=()=>{const m=s.indexOf(d);m>-1&&s.splice(m,1)};return n.push(h),h}function f(){const{history:d}=window;d.state&&d.replaceState(_2({},d.state,{scroll:qt()}),"")}function u(){for(const d of n)d();n=[],window.removeEventListener("popstate",r),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",r),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:o,listen:l,destroy:u}}function Zi(t,e,c,a=!1,s=!1){return{back:t,current:e,forward:c,replaced:a,position:window.history.length,scroll:s?qt():null}}function qC(t){const{history:e,location:c}=window,a={value:uo(t,c)},s={value:e.state};s.value||n(a.value,{back:null,current:a.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function n(o,l,f){const u=t.indexOf("#"),d=u>-1?(c.host&&document.querySelector("base")?t:t.slice(u))+o:$C()+t+o;try{e[f?"replaceState":"pushState"](l,"",d),s.value=l}catch(h){console.error(h),c[f?"replace":"assign"](d)}}function i(o,l){const f=_2({},e.state,Zi(s.value.back,o,s.value.forward,!0),l,{position:s.value.position});n(o,f,!0),a.value=o}function r(o,l){const f=_2({},s.value,e.state,{forward:o,scroll:qt()});n(f.current,f,!0);const u=_2({},Zi(a.value,o,null),{position:f.position+1},l);n(o,u,!1),a.value=o}return{location:a,state:s,push:r,replace:i}}function GC(t){t=IC(t);const e=qC(t),c=WC(t,e.state,e.location,e.replace);function a(n,i=!0){i||c.pauseListeners(),history.go(n)}const s=_2({location:"",base:t,go:a,createHref:OC.bind(null,t)},e,c);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function jC(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),GC(t)}function KC(t){return typeof t=="string"||t&&typeof t=="object"}function ho(t){return typeof t=="string"||typeof t=="symbol"}const T3={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},po=Symbol("");var er;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(er||(er={}));function we(t,e){return _2(new Error,{type:t,[po]:!0},e)}function i3(t,e){return t instanceof Error&&po in t&&(e==null||!!(t.type&e))}const tr="[^/]+?",YC={sensitive:!1,strict:!1,start:!0,end:!0},XC=/[.+*?^${}()[\]/\\]/g;function QC(t,e){const c=_2({},YC,e),a=[];let s=c.start?"^":"";const n=[];for(const l of t){const f=l.length?[]:[90];c.strict&&!l.length&&(s+="/");for(let u=0;u<l.length;u++){const d=l[u];let h=40+(c.sensitive?.25:0);if(d.type===0)u||(s+="/"),s+=d.value.replace(XC,"\\$&"),h+=40;else if(d.type===1){const{value:m,repeatable:v,optional:M,regexp:H}=d;n.push({name:m,repeatable:v,optional:M});const p=H||tr;if(p!==tr){h+=10;try{new RegExp(`(${p})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${m}" (${p}): `+_.message)}}let g=v?`((?:${p})(?:/(?:${p}))*)`:`(${p})`;u||(g=M&&l.length<2?`(?:/${g})`:"/"+g),M&&(g+="?"),s+=g,h+=20,M&&(h+=-8),v&&(h+=-20),p===".*"&&(h+=-50)}f.push(h)}a.push(f)}if(c.strict&&c.end){const l=a.length-1;a[l][a[l].length-1]+=.7000000000000001}c.strict||(s+="/?"),c.end?s+="$":c.strict&&(s+="(?:/|$)");const i=new RegExp(s,c.sensitive?"":"i");function r(l){const f=l.match(i),u={};if(!f)return null;for(let d=1;d<f.length;d++){const h=f[d]||"",m=n[d-1];u[m.name]=h&&m.repeatable?h.split("/"):h}return u}function o(l){let f="",u=!1;for(const d of t){(!u||!f.endsWith("/"))&&(f+="/"),u=!1;for(const h of d)if(h.type===0)f+=h.value;else if(h.type===1){const{value:m,repeatable:v,optional:M}=h,H=m in l?l[m]:"";if(G1(H)&&!v)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const p=G1(H)?H.join("/"):H;if(!p)if(M)d.length<2&&(f.endsWith("/")?f=f.slice(0,-1):u=!0);else throw new Error(`Missing required param "${m}"`);f+=p}}return f||"/"}return{re:i,score:a,keys:n,parse:r,stringify:o}}function JC(t,e){let c=0;for(;c<t.length&&c<e.length;){const a=e[c]-t[c];if(a)return a;c++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ZC(t,e){let c=0;const a=t.score,s=e.score;for(;c<a.length&&c<s.length;){const n=JC(a[c],s[c]);if(n)return n;c++}if(Math.abs(s.length-a.length)===1){if(cr(a))return 1;if(cr(s))return-1}return s.length-a.length}function cr(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const eM={type:0,value:""},tM=/[a-zA-Z0-9_]/;function cM(t){if(!t)return[[]];if(t==="/")return[[eM]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${c})/"${l}": ${h}`)}let c=0,a=c;const s=[];let n;function i(){n&&s.push(n),n=[]}let r=0,o,l="",f="";function u(){l&&(c===0?n.push({type:0,value:l}):c===1||c===2||c===3?(n.length>1&&(o==="*"||o==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),n.push({type:1,value:l,regexp:f,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=o}for(;r<t.length;){if(o=t[r++],o==="\\"&&c!==2){a=c,c=4;continue}switch(c){case 0:o==="/"?(l&&u(),i()):o===":"?(u(),c=1):d();break;case 4:d(),c=a;break;case 1:o==="("?c=2:tM.test(o)?d():(u(),c=0,o!=="*"&&o!=="?"&&o!=="+"&&r--);break;case 2:o===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+o:c=3:f+=o;break;case 3:u(),c=0,o!=="*"&&o!=="?"&&o!=="+"&&r--,f="";break;default:e("Unknown state");break}}return c===2&&e(`Unfinished custom RegExp for param "${l}"`),u(),i(),s}function aM(t,e,c){const a=QC(cM(t.path),c),s=_2(a,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function sM(t,e){const c=[],a=new Map;e=nr({strict:!1,end:!0,sensitive:!1},e);function s(f){return a.get(f)}function n(f,u,d){const h=!d,m=nM(f);m.aliasOf=d&&d.record;const v=nr(e,f),M=[m];if("alias"in f){const g=typeof f.alias=="string"?[f.alias]:f.alias;for(const _ of g)M.push(_2({},m,{components:d?d.record.components:m.components,path:_,aliasOf:d?d.record:m}))}let H,p;for(const g of M){const{path:_}=g;if(u&&_[0]!=="/"){const b=u.record.path,A=b[b.length-1]==="/"?"":"/";g.path=u.record.path+(_&&A+_)}if(H=aM(g,u,v),d?d.alias.push(H):(p=p||H,p!==H&&p.alias.push(H),h&&f.name&&!sr(H)&&i(f.name)),m.children){const b=m.children;for(let A=0;A<b.length;A++)n(b[A],H,d&&d.children[A])}d=d||H,(H.record.components&&Object.keys(H.record.components).length||H.record.name||H.record.redirect)&&o(H)}return p?()=>{i(p)}:d6}function i(f){if(ho(f)){const u=a.get(f);u&&(a.delete(f),c.splice(c.indexOf(u),1),u.children.forEach(i),u.alias.forEach(i))}else{const u=c.indexOf(f);u>-1&&(c.splice(u,1),f.record.name&&a.delete(f.record.name),f.children.forEach(i),f.alias.forEach(i))}}function r(){return c}function o(f){let u=0;for(;u<c.length&&ZC(f,c[u])>=0&&(f.record.path!==c[u].record.path||!mo(f,c[u]));)u++;c.splice(u,0,f),f.record.name&&!sr(f)&&a.set(f.record.name,f)}function l(f,u){let d,h={},m,v;if("name"in f&&f.name){if(d=a.get(f.name),!d)throw we(1,{location:f});v=d.record.name,h=_2(ar(u.params,d.keys.filter(p=>!p.optional).map(p=>p.name)),f.params&&ar(f.params,d.keys.map(p=>p.name))),m=d.stringify(h)}else if("path"in f)m=f.path,d=c.find(p=>p.re.test(m)),d&&(h=d.parse(m),v=d.record.name);else{if(d=u.name?a.get(u.name):c.find(p=>p.re.test(u.path)),!d)throw we(1,{location:f,currentLocation:u});v=d.record.name,h=_2({},u.params,f.params),m=d.stringify(h)}const M=[];let H=d;for(;H;)M.unshift(H.record),H=H.parent;return{name:v,path:m,params:h,matched:M,meta:rM(M)}}return t.forEach(f=>n(f)),{addRoute:n,resolve:l,removeRoute:i,getRoutes:r,getRecordMatcher:s}}function ar(t,e){const c={};for(const a of e)a in t&&(c[a]=t[a]);return c}function nM(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:iM(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function iM(t){const e={},c=t.props||!1;if("component"in t)e.default=c;else for(const a in t.components)e[a]=typeof c=="object"?c[a]:c;return e}function sr(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function rM(t){return t.reduce((e,c)=>_2(e,c.meta),{})}function nr(t,e){const c={};for(const a in t)c[a]=a in e?e[a]:t[a];return c}function mo(t,e){return e.children.some(c=>c===t||mo(t,c))}const vo=/#/g,oM=/&/g,lM=/\//g,fM=/=/g,uM=/\?/g,go=/\+/g,dM=/%5B/g,hM=/%5D/g,Ho=/%5E/g,pM=/%60/g,zo=/%7B/g,mM=/%7C/g,Co=/%7D/g,vM=/%20/g;function qa(t){return encodeURI(""+t).replace(mM,"|").replace(dM,"[").replace(hM,"]")}function gM(t){return qa(t).replace(zo,"{").replace(Co,"}").replace(Ho,"^")}function k8(t){return qa(t).replace(go,"%2B").replace(vM,"+").replace(vo,"%23").replace(oM,"%26").replace(pM,"`").replace(zo,"{").replace(Co,"}").replace(Ho,"^")}function HM(t){return k8(t).replace(fM,"%3D")}function zM(t){return qa(t).replace(vo,"%23").replace(uM,"%3F")}function CM(t){return t==null?"":zM(t).replace(lM,"%2F")}function Q0(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function MM(t){const e={};if(t===""||t==="?")return e;const a=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<a.length;++s){const n=a[s].replace(go," "),i=n.indexOf("="),r=Q0(i<0?n:n.slice(0,i)),o=i<0?null:Q0(n.slice(i+1));if(r in e){let l=e[r];G1(l)||(l=e[r]=[l]),l.push(o)}else e[r]=o}return e}function ir(t){let e="";for(let c in t){const a=t[c];if(c=HM(c),a==null){a!==void 0&&(e+=(e.length?"&":"")+c);continue}(G1(a)?a.map(n=>n&&k8(n)):[a&&k8(a)]).forEach(n=>{n!==void 0&&(e+=(e.length?"&":"")+c,n!=null&&(e+="="+n))})}return e}function VM(t){const e={};for(const c in t){const a=t[c];a!==void 0&&(e[c]=G1(a)?a.map(s=>s==null?null:""+s):a==null?a:""+a)}return e}const _M=Symbol(""),rr=Symbol(""),Gt=Symbol(""),Ga=Symbol(""),A8=Symbol("");function Xe(){let t=[];function e(a){return t.push(a),()=>{const s=t.indexOf(a);s>-1&&t.splice(s,1)}}function c(){t=[]}return{add:e,list:()=>t.slice(),reset:c}}function R3(t,e,c,a,s){const n=a&&(a.enterCallbacks[s]=a.enterCallbacks[s]||[]);return()=>new Promise((i,r)=>{const o=u=>{u===!1?r(we(4,{from:c,to:e})):u instanceof Error?r(u):KC(u)?r(we(2,{from:e,to:u})):(n&&a.enterCallbacks[s]===n&&typeof u=="function"&&n.push(u),i())},l=t.call(a&&a.instances[s],e,c,o);let f=Promise.resolve(l);t.length<3&&(f=f.then(o)),f.catch(u=>r(u))})}function $c(t,e,c,a){const s=[];for(const n of t)for(const i in n.components){let r=n.components[i];if(!(e!=="beforeRouteEnter"&&!n.instances[i]))if(LM(r)){const l=(r.__vccOpts||r)[e];l&&s.push(R3(l,c,a,n,i))}else{let o=r();s.push(()=>o.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${n.path}"`));const f=xC(l)?l.default:l;n.components[i]=f;const d=(f.__vccOpts||f)[e];return d&&R3(d,c,a,n,i)()}))}}return s}function LM(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function or(t){const e=T1(Gt),c=T1(Ga),a=D2(()=>e.resolve(J(t.to))),s=D2(()=>{const{matched:o}=a.value,{length:l}=o,f=o[l-1],u=c.matched;if(!f||!u.length)return-1;const d=u.findIndex(be.bind(null,f));if(d>-1)return d;const h=lr(o[l-2]);return l>1&&lr(f)===h&&u[u.length-1].path!==h?u.findIndex(be.bind(null,o[l-2])):d}),n=D2(()=>s.value>-1&&SM(c.params,a.value.params)),i=D2(()=>s.value>-1&&s.value===c.matched.length-1&&fo(c.params,a.value.params));function r(o={}){return yM(o)?e[J(t.replace)?"replace":"push"](J(t.to)).catch(d6):Promise.resolve()}return{route:a,href:D2(()=>a.value.href),isActive:n,isExactActive:i,navigate:r}}const bM=Ia({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:or,setup(t,{slots:e}){const c=G6(or(t)),{options:a}=T1(Gt),s=D2(()=>({[fr(t.activeClass,a.linkActiveClass,"router-link-active")]:c.isActive,[fr(t.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:c.isExactActive}));return()=>{const n=e.default&&e.default(c);return t.custom?n:p1("a",{"aria-current":c.isExactActive?t.ariaCurrentValue:null,href:c.href,onClick:c.navigate,class:s.value},n)}}}),wM=bM;function yM(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function SM(t,e){for(const c in e){const a=e[c],s=t[c];if(typeof a=="string"){if(a!==s)return!1}else if(!G1(s)||s.length!==a.length||a.some((n,i)=>n!==s[i]))return!1}return!0}function lr(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const fr=(t,e,c)=>t??e??c,xM=Ia({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:c}){const a=T1(A8),s=D2(()=>t.route||a.value),n=T1(rr,0),i=D2(()=>{let l=J(n);const{matched:f}=s.value;let u;for(;(u=f[l])&&!u.components;)l++;return l}),r=D2(()=>s.value.matched[i.value]);de(rr,D2(()=>i.value+1)),de(_M,r),de(A8,s);const o=h2();return b4(()=>[o.value,r.value,t.name],([l,f,u],[d,h,m])=>{f&&(f.instances[u]=l,h&&h!==f&&l&&l===d&&(f.leaveGuards.size||(f.leaveGuards=h.leaveGuards),f.updateGuards.size||(f.updateGuards=h.updateGuards))),l&&f&&(!h||!be(f,h)||!d)&&(f.enterCallbacks[u]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=s.value,f=t.name,u=r.value,d=u&&u.components[f];if(!d)return ur(c.default,{Component:d,route:l});const h=u.props[f],m=h?h===!0?l.params:typeof h=="function"?h(l):h:null,M=p1(d,_2({},m,e,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(u.instances[f]=null)},ref:o}));return ur(c.default,{Component:M,route:l})||M}}});function ur(t,e){if(!t)return null;const c=t(e);return c.length===1?c[0]:c}const Mo=xM;function NM(t){const e=sM(t.routes,t),c=t.parseQuery||MM,a=t.stringifyQuery||ir,s=t.history,n=Xe(),i=Xe(),r=Xe(),o=FH(T3);let l=T3;te&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Bc.bind(null,N=>""+N),u=Bc.bind(null,CM),d=Bc.bind(null,Q0);function h(N,Y){let W,Z;return ho(N)?(W=e.getRecordMatcher(N),Z=Y):Z=N,e.addRoute(Z,W)}function m(N){const Y=e.getRecordMatcher(N);Y&&e.removeRoute(Y)}function v(){return e.getRoutes().map(N=>N.record)}function M(N){return!!e.getRecordMatcher(N)}function H(N,Y){if(Y=_2({},Y||o.value),typeof N=="string"){const L=Uc(c,N,Y.path),S=e.resolve({path:L.path},Y),T=s.createHref(L.fullPath);return _2(L,S,{params:d(S.params),hash:Q0(L.hash),redirectedFrom:void 0,href:T})}let W;if("path"in N)W=_2({},N,{path:Uc(c,N.path,Y.path).path});else{const L=_2({},N.params);for(const S in L)L[S]==null&&delete L[S];W=_2({},N,{params:u(L)}),Y.params=u(Y.params)}const Z=e.resolve(W,Y),V2=N.hash||"";Z.params=f(d(Z.params));const C=EC(a,_2({},N,{hash:gM(V2),path:Z.path})),V=s.createHref(C);return _2({fullPath:C,hash:V2,query:a===ir?VM(N.query):N.query||{}},Z,{redirectedFrom:void 0,href:V})}function p(N){return typeof N=="string"?Uc(c,N,o.value.path):_2({},N)}function g(N,Y){if(l!==N)return we(8,{from:Y,to:N})}function _(N){return G(N)}function b(N){return _(_2(p(N),{replace:!0}))}function A(N){const Y=N.matched[N.matched.length-1];if(Y&&Y.redirect){const{redirect:W}=Y;let Z=typeof W=="function"?W(N):W;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=p(Z):{path:Z},Z.params={}),_2({query:N.query,hash:N.hash,params:"path"in Z?{}:N.params},Z)}}function G(N,Y){const W=l=H(N),Z=o.value,V2=N.state,C=N.force,V=N.replace===!0,L=A(W);if(L)return G(_2(p(L),{state:typeof L=="object"?_2({},V2,L.state):V2,force:C,replace:V}),Y||W);const S=W;S.redirectedFrom=Y;let T;return!C&&kC(a,Z,W)&&(T=we(16,{to:S,from:Z}),W2(Z,Z,!0,!1)),(T?Promise.resolve(T):y(S,Z)).catch(P=>i3(P)?i3(P,2)?P:y2(P):q(P,S,Z)).then(P=>{if(P){if(i3(P,2))return G(_2({replace:V},p(P.to),{state:typeof P.to=="object"?_2({},V2,P.to.state):V2,force:C}),Y||S)}else P=E(S,Z,!0,V,V2);return O(S,Z,P),P})}function k(N,Y){const W=g(N,Y);return W?Promise.reject(W):Promise.resolve()}function w(N){const Y=S2.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(N):N()}function y(N,Y){let W;const[Z,V2,C]=TM(N,Y);W=$c(Z.reverse(),"beforeRouteLeave",N,Y);for(const L of Z)L.leaveGuards.forEach(S=>{W.push(R3(S,N,Y))});const V=k.bind(null,N,Y);return W.push(V),i1(W).then(()=>{W=[];for(const L of n.list())W.push(R3(L,N,Y));return W.push(V),i1(W)}).then(()=>{W=$c(V2,"beforeRouteUpdate",N,Y);for(const L of V2)L.updateGuards.forEach(S=>{W.push(R3(S,N,Y))});return W.push(V),i1(W)}).then(()=>{W=[];for(const L of C)if(L.beforeEnter)if(G1(L.beforeEnter))for(const S of L.beforeEnter)W.push(R3(S,N,Y));else W.push(R3(L.beforeEnter,N,Y));return W.push(V),i1(W)}).then(()=>(N.matched.forEach(L=>L.enterCallbacks={}),W=$c(C,"beforeRouteEnter",N,Y),W.push(V),i1(W))).then(()=>{W=[];for(const L of i.list())W.push(R3(L,N,Y));return W.push(V),i1(W)}).catch(L=>i3(L,8)?L:Promise.reject(L))}function O(N,Y,W){r.list().forEach(Z=>w(()=>Z(N,Y,W)))}function E(N,Y,W,Z,V2){const C=g(N,Y);if(C)return C;const V=Y===T3,L=te?history.state:{};W&&(Z||V?s.replace(N.fullPath,_2({scroll:V&&L&&L.scroll},V2)):s.push(N.fullPath,V2)),o.value=N,W2(N,Y,W,V),y2()}let x;function R(){x||(x=s.listen((N,Y,W)=>{if(!x1.listening)return;const Z=H(N),V2=A(Z);if(V2){G(_2(V2,{replace:!0}),Z).catch(d6);return}l=Z;const C=o.value;te&&BC(Ji(C.fullPath,W.delta),qt()),y(Z,C).catch(V=>i3(V,12)?V:i3(V,2)?(G(V.to,Z).then(L=>{i3(L,20)&&!W.delta&&W.type===y6.pop&&s.go(-1,!1)}).catch(d6),Promise.reject()):(W.delta&&s.go(-W.delta,!1),q(V,Z,C))).then(V=>{V=V||E(Z,C,!1),V&&(W.delta&&!i3(V,8)?s.go(-W.delta,!1):W.type===y6.pop&&i3(V,20)&&s.go(-1,!1)),O(Z,C,V)}).catch(d6)}))}let D=Xe(),U=Xe(),l2;function q(N,Y,W){y2(N);const Z=U.list();return Z.length?Z.forEach(V2=>V2(N,Y,W)):console.error(N),Promise.reject(N)}function f2(){return l2&&o.value!==T3?Promise.resolve():new Promise((N,Y)=>{D.add([N,Y])})}function y2(N){return l2||(l2=!N,R(),D.list().forEach(([Y,W])=>N?W(N):Y()),D.reset()),N}function W2(N,Y,W,Z){const{scrollBehavior:V2}=t;if(!te||!V2)return Promise.resolve();const C=!W&&UC(Ji(N.fullPath,0))||(Z||!W)&&history.state&&history.state.scroll||null;return Rt().then(()=>V2(N,Y,C)).then(V=>V&&FC(V)).catch(V=>q(V,N,Y))}const U2=N=>s.go(N);let u2;const S2=new Set,x1={currentRoute:o,listening:!0,addRoute:h,removeRoute:m,hasRoute:M,getRoutes:v,resolve:H,options:t,push:_,replace:b,go:U2,back:()=>U2(-1),forward:()=>U2(1),beforeEach:n.add,beforeResolve:i.add,afterEach:r.add,onError:U.add,isReady:f2,install(N){const Y=this;N.component("RouterLink",wM),N.component("RouterView",Mo),N.config.globalProperties.$router=Y,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>J(o)}),te&&!u2&&o.value===T3&&(u2=!0,_(s.location).catch(V2=>{}));const W={};for(const V2 in T3)Object.defineProperty(W,V2,{get:()=>o.value[V2],enumerable:!0});N.provide(Gt,Y),N.provide(Ga,S7(W)),N.provide(A8,o);const Z=N.unmount;S2.add(N),N.unmount=function(){S2.delete(N),S2.size<1&&(l=T3,x&&x(),x=null,o.value=T3,u2=!1,l2=!1),Z()}}};function i1(N){return N.reduce((Y,W)=>Y.then(()=>w(W)),Promise.resolve())}return x1}function TM(t,e){const c=[],a=[],s=[],n=Math.max(e.matched.length,t.matched.length);for(let i=0;i<n;i++){const r=e.matched[i];r&&(t.matched.find(l=>be(l,r))?a.push(r):c.push(r));const o=t.matched[i];o&&(e.matched.find(l=>be(l,o))||s.push(o))}return[c,a,s]}function Y1(){return T1(Gt)}function EM(){return T1(Ga)}const t1=(t,e)=>{const c=t.__vccOpts||t;for(const[a,s]of e)c[a]=s;return c},Oe=t=>(z1("data-v-c8c78364"),t=t(),C1(),t),kM={class:"footer"},AM={class:"container"},PM=K1('<div class="subscribe_wrapper" data-v-c8c78364><div class="booking" data-v-c8c78364>訂閱電子報</div><div class="divider" data-v-c8c78364></div><div class="email" data-v-c8c78364><input type="email" data-v-c8c78364><button data-v-c8c78364> → </button></div><div class="check" data-v-c8c78364><input type="checkbox" id="blue" name="color" value="blue" data-v-c8c78364><p data-v-c8c78364>訂閱電子報，讓我們提供您最新的相關資訊。若您選擇訂閱，即表示您已閱讀並了解我們的隱私權政策。</p></div></div>',1),IM={class:"wrapper"},RM=Oe(()=>z("div",{class:"mainTitle"},"訂單與諮詢",-1)),OM=Oe(()=>z("div",{class:"divider"},null,-1)),DM={class:"contact"},FM=Oe(()=>z("p",null,"常見問答",-1)),BM=Oe(()=>z("p",null,"寄送規則",-1)),UM=Oe(()=>z("p",null,"我要退貨",-1)),$M=Oe(()=>z("p",null,"訂單查詢",-1)),WM=K1('<div class="wrapper" data-v-c8c78364><div class="mainTitle" data-v-c8c78364>服務</div><div class="divider" data-v-c8c78364></div><p data-v-c8c78364>企業贈禮</p><p data-v-c8c78364>線上客服</p><p data-v-c8c78364>預約保養</p></div><div class="wrapper" data-v-c8c78364><div class="mainTitle" data-v-c8c78364>所在區域</div><div class="divider" data-v-c8c78364></div><p data-v-c8c78364>地點：台灣</p><p data-v-c8c78364>語言：繁體中文</p></div><div class="eco_wrapper" data-v-c8c78364><div class="mainTitle" data-v-c8c78364>環境永續性</div><div class="divider" data-v-c8c78364></div><p data-v-c8c78364>所有產品均為天然純素，且所有成分未進行動物測試實驗。我們是一間擁有跳躍小兔（Leaping Bunny）與 B 型共益企業（B Corporation）認證的公司。 了解更多</p></div><div class="wrapper" data-v-c8c78364><div class="mainTitle" data-v-c8c78364>關於我們</div><div class="divider" data-v-c8c78364></div><p data-v-c8c78364>品牌故事</p><p data-v-c8c78364>招聘人才</p><p data-v-c8c78364>隱私權政策</p></div><div class="wrapper" data-v-c8c78364><div class="mainTitle" data-v-c8c78364>社群媒體</div><div class="divider" data-v-c8c78364></div><p data-v-c8c78364>Instagram</p><p data-v-c8c78364>Facebook</p><p data-v-c8c78364>Twitter</p></div>',5),qM={__name:"Footer",setup(t){return Y1(),(e,c)=>{const a=Z3("RouterLink");return e2(),o2("div",kM,[z("div",AM,[PM,z("div",IM,[RM,OM,z("div",DM,[a2(a,{to:"/contact"},{default:I2(()=>[b1("聯絡我們↗")]),_:1})]),FM,BM,UM,$M]),WM])])}}},GM=t1(qM,[["__scopeId","data-v-c8c78364"]]);var dr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F=function(t,e){if(!t)throw De(e)},De=function(t){return new Error("Firebase Database ("+Vo.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=function(t){const e=[];let c=0;for(let a=0;a<t.length;a++){let s=t.charCodeAt(a);s<128?e[c++]=s:s<2048?(e[c++]=s>>6|192,e[c++]=s&63|128):(s&64512)===55296&&a+1<t.length&&(t.charCodeAt(a+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++a)&1023),e[c++]=s>>18|240,e[c++]=s>>12&63|128,e[c++]=s>>6&63|128,e[c++]=s&63|128):(e[c++]=s>>12|224,e[c++]=s>>6&63|128,e[c++]=s&63|128)}return e},jM=function(t){const e=[];let c=0,a=0;for(;c<t.length;){const s=t[c++];if(s<128)e[a++]=String.fromCharCode(s);else if(s>191&&s<224){const n=t[c++];e[a++]=String.fromCharCode((s&31)<<6|n&63)}else if(s>239&&s<365){const n=t[c++],i=t[c++],r=t[c++],o=((s&7)<<18|(n&63)<<12|(i&63)<<6|r&63)-65536;e[a++]=String.fromCharCode(55296+(o>>10)),e[a++]=String.fromCharCode(56320+(o&1023))}else{const n=t[c++],i=t[c++];e[a++]=String.fromCharCode((s&15)<<12|(n&63)<<6|i&63)}}return e.join("")},ja={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const c=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let s=0;s<t.length;s+=3){const n=t[s],i=s+1<t.length,r=i?t[s+1]:0,o=s+2<t.length,l=o?t[s+2]:0,f=n>>2,u=(n&3)<<4|r>>4;let d=(r&15)<<2|l>>6,h=l&63;o||(h=64,i||(d=64)),a.push(c[f],c[u],c[d],c[h])}return a.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_o(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jM(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const c=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let s=0;s<t.length;){const n=c[t.charAt(s++)],r=s<t.length?c[t.charAt(s)]:0;++s;const l=s<t.length?c[t.charAt(s)]:64;++s;const u=s<t.length?c[t.charAt(s)]:64;if(++s,n==null||r==null||l==null||u==null)throw new KM;const d=n<<2|r>>4;if(a.push(d),l!==64){const h=r<<4&240|l>>2;if(a.push(h),u!==64){const m=l<<6&192|u;a.push(m)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class KM extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lo=function(t){const e=_o(t);return ja.encodeByteArray(e,!0)},J0=function(t){return Lo(t).replace(/\./g,"")},Z0=function(t){try{return ja.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YM(t){return bo(void 0,t)}function bo(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const c=e;return new Date(c.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const c in e)!e.hasOwnProperty(c)||!XM(c)||(t[c]=bo(t[c],e[c]));return t}function XM(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QM(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JM=()=>QM().__FIREBASE_DEFAULTS__,ZM=()=>{if(typeof process>"u"||typeof dr>"u")return;const t=dr.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},eV=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Z0(t[1]);return e&&JSON.parse(e)},Ka=()=>{try{return JM()||ZM()||eV()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wo=t=>{var e,c;return(c=(e=Ka())===null||e===void 0?void 0:e.emulatorHosts)===null||c===void 0?void 0:c[t]},Ya=t=>{const e=wo(t);if(!e)return;const c=e.lastIndexOf(":");if(c<=0||c+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(c+1),10);return e[0]==="["?[e.substring(1,c-1),a]:[e.substring(0,c),a]},yo=()=>{var t;return(t=Ka())===null||t===void 0?void 0:t.config},So=t=>{var e;return(e=Ka())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K6{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,c)=>{this.resolve=e,this.reject=c})}wrapCallback(e){return(c,a)=>{c?this.reject(c):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(c):e(c,a))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const c={alg:"none",type:"JWT"},a=e||"demo-project",s=t.iat||0,n=t.sub||t.user_id;if(!n)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:s,exp:s+3600,auth_time:s,sub:n,user_id:n,firebase:{sign_in_provider:"custom",identities:{}}},t),r="";return[J0(JSON.stringify(c)),J0(JSON.stringify(i)),r].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(o1())}function tV(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function No(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cV(){const t=o1();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function To(){return Vo.NODE_ADMIN===!0}function aV(){try{return typeof indexedDB=="object"}catch{return!1}}function sV(){return new Promise((t,e)=>{try{let c=!0;const a="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(a);s.onsuccess=()=>{s.result.close(),c||self.indexedDB.deleteDatabase(a),t(!0)},s.onupgradeneeded=()=>{c=!1},s.onerror=()=>{var n;e(((n=s.error)===null||n===void 0?void 0:n.message)||"")}}catch(c){e(c)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nV="FirebaseError";class y3 extends Error{constructor(e,c,a){super(c),this.code=e,this.customData=a,this.name=nV,Object.setPrototypeOf(this,y3.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Y6.prototype.create)}}class Y6{constructor(e,c,a){this.service=e,this.serviceName=c,this.errors=a}create(e,...c){const a=c[0]||{},s=`${this.service}/${e}`,n=this.errors[e],i=n?iV(n,a):"Error",r=`${this.serviceName}: ${i} (${s}).`;return new y3(s,r,a)}}function iV(t,e){return t.replace(rV,(c,a)=>{const s=e[a];return s!=null?String(s):`<${a}?>`})}const rV=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S6(t){return JSON.parse(t)}function Z2(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=function(t){let e={},c={},a={},s="";try{const n=t.split(".");e=S6(Z0(n[0])||""),c=S6(Z0(n[1])||""),s=n[2],a=c.d||{},delete c.d}catch{}return{header:e,claims:c,data:a,signature:s}},oV=function(t){const e=Eo(t),c=e.claims;return!!c&&typeof c=="object"&&c.hasOwnProperty("iat")},lV=function(t){const e=Eo(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n3(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ye(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function P8(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function et(t,e,c){const a={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(a[s]=e.call(c,t[s],s,t));return a}function tt(t,e){if(t===e)return!0;const c=Object.keys(t),a=Object.keys(e);for(const s of c){if(!a.includes(s))return!1;const n=t[s],i=e[s];if(hr(n)&&hr(i)){if(!tt(n,i))return!1}else if(n!==i)return!1}for(const s of a)if(!c.includes(s))return!1;return!0}function hr(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t){const e=[];for(const[c,a]of Object.entries(t))Array.isArray(a)?a.forEach(s=>{e.push(encodeURIComponent(c)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(c)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function n6(t){const e={};return t.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[s,n]=a.split("=");e[decodeURIComponent(s)]=decodeURIComponent(n)}}),e}function i6(t){const e=t.indexOf("?");if(!e)return"";const c=t.indexOf("#",e);return t.substring(e,c>0?c:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fV{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,c){c||(c=0);const a=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)a[u]=e.charCodeAt(c)<<24|e.charCodeAt(c+1)<<16|e.charCodeAt(c+2)<<8|e.charCodeAt(c+3),c+=4;else for(let u=0;u<16;u++)a[u]=e[c]<<24|e[c+1]<<16|e[c+2]<<8|e[c+3],c+=4;for(let u=16;u<80;u++){const d=a[u-3]^a[u-8]^a[u-14]^a[u-16];a[u]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],n=this.chain_[1],i=this.chain_[2],r=this.chain_[3],o=this.chain_[4],l,f;for(let u=0;u<80;u++){u<40?u<20?(l=r^n&(i^r),f=1518500249):(l=n^i^r,f=1859775393):u<60?(l=n&i|r&(n|i),f=2400959708):(l=n^i^r,f=3395469782);const d=(s<<5|s>>>27)+l+o+f+a[u]&4294967295;o=r,r=i,i=(n<<30|n>>>2)&4294967295,n=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+n&4294967295,this.chain_[2]=this.chain_[2]+i&4294967295,this.chain_[3]=this.chain_[3]+r&4294967295,this.chain_[4]=this.chain_[4]+o&4294967295}update(e,c){if(e==null)return;c===void 0&&(c=e.length);const a=c-this.blockSize;let s=0;const n=this.buf_;let i=this.inbuf_;for(;s<c;){if(i===0)for(;s<=a;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<c;)if(n[i]=e.charCodeAt(s),++i,++s,i===this.blockSize){this.compress_(n),i=0;break}}else for(;s<c;)if(n[i]=e[s],++i,++s,i===this.blockSize){this.compress_(n),i=0;break}}this.inbuf_=i,this.total_+=c}digest(){const e=[];let c=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=c&255,c/=256;this.compress_(this.buf_);let a=0;for(let s=0;s<5;s++)for(let n=24;n>=0;n-=8)e[a]=this.chain_[s]>>n&255,++a;return e}}function uV(t,e){const c=new dV(t,e);return c.subscribe.bind(c)}class dV{constructor(e,c){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=c,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(c=>{c.next(e)})}error(e){this.forEachObserver(c=>{c.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,c,a){let s;if(e===void 0&&c===void 0&&a===void 0)throw new Error("Missing Observer.");hV(e,["next","error","complete"])?s=e:s={next:e,error:c,complete:a},s.next===void 0&&(s.next=Wc),s.error===void 0&&(s.error=Wc),s.complete===void 0&&(s.complete=Wc);const n=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),n}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let c=0;c<this.observers.length;c++)this.sendOne(c,e)}sendOne(e,c){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{c(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hV(t,e){if(typeof t!="object"||t===null)return!1;for(const c of e)if(c in t&&typeof t[c]=="function")return!0;return!1}function Wc(){}function jt(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pV=function(t){const e=[];let c=0;for(let a=0;a<t.length;a++){let s=t.charCodeAt(a);if(s>=55296&&s<=56319){const n=s-55296;a++,F(a<t.length,"Surrogate pair missing trail surrogate.");const i=t.charCodeAt(a)-56320;s=65536+(n<<10)+i}s<128?e[c++]=s:s<2048?(e[c++]=s>>6|192,e[c++]=s&63|128):s<65536?(e[c++]=s>>12|224,e[c++]=s>>6&63|128,e[c++]=s&63|128):(e[c++]=s>>18|240,e[c++]=s>>12&63|128,e[c++]=s>>6&63|128,e[c++]=s&63|128)}return e},Kt=function(t){let e=0;for(let c=0;c<t.length;c++){const a=t.charCodeAt(c);a<128?e++:a<2048?e+=2:a>=55296&&a<=56319?(e+=4,c++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K2(t){return t&&t._delegate?t._delegate:t}class C3{constructor(e,c,a){this.name=e,this.instanceFactory=c,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u4="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mV{constructor(e,c){this.name=e,this.container=c,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const c=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(c)){const a=new K6;if(this.instancesDeferred.set(c,a),this.isInitialized(c)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:c});s&&a.resolve(s)}catch{}}return this.instancesDeferred.get(c).promise}getImmediate(e){var c;const a=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(c=e==null?void 0:e.optional)!==null&&c!==void 0?c:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(n){if(s)return null;throw n}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gV(e))try{this.getOrInitializeService({instanceIdentifier:u4})}catch{}for(const[c,a]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(c);try{const n=this.getOrInitializeService({instanceIdentifier:s});a.resolve(n)}catch{}}}}clearInstance(e=u4){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(c=>"INTERNAL"in c).map(c=>c.INTERNAL.delete()),...e.filter(c=>"_delete"in c).map(c=>c._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=u4){return this.instances.has(e)}getOptions(e=u4){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:c={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:a,options:c});for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);a===r&&i.resolve(s)}return s}onInit(e,c){var a;const s=this.normalizeInstanceIdentifier(c),n=(a=this.onInitCallbacks.get(s))!==null&&a!==void 0?a:new Set;n.add(e),this.onInitCallbacks.set(s,n);const i=this.instances.get(s);return i&&e(i,s),()=>{n.delete(e)}}invokeOnInitCallbacks(e,c){const a=this.onInitCallbacks.get(c);if(a)for(const s of a)try{s(e,c)}catch{}}getOrInitializeService({instanceIdentifier:e,options:c={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:vV(e),options:c}),this.instances.set(e,a),this.instancesOptions.set(e,c),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=u4){return this.component?this.component.multipleInstances?e:u4:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vV(t){return t===u4?void 0:t}function gV(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HV{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const c=this.getProvider(e.name);if(c.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);c.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const c=new mV(e,this);return this.providers.set(e,c),c}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b2;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(b2||(b2={}));const zV={debug:b2.DEBUG,verbose:b2.VERBOSE,info:b2.INFO,warn:b2.WARN,error:b2.ERROR,silent:b2.SILENT},CV=b2.INFO,MV={[b2.DEBUG]:"log",[b2.VERBOSE]:"log",[b2.INFO]:"info",[b2.WARN]:"warn",[b2.ERROR]:"error"},VV=(t,e,...c)=>{if(e<t.logLevel)return;const a=new Date().toISOString(),s=MV[e];if(s)console[s](`[${a}]  ${t.name}:`,...c);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qa{constructor(e){this.name=e,this._logLevel=CV,this._logHandler=VV,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in b2))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zV[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,b2.DEBUG,...e),this._logHandler(this,b2.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,b2.VERBOSE,...e),this._logHandler(this,b2.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,b2.INFO,...e),this._logHandler(this,b2.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,b2.WARN,...e),this._logHandler(this,b2.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,b2.ERROR,...e),this._logHandler(this,b2.ERROR,...e)}}const _V=(t,e)=>e.some(c=>t instanceof c);let pr,mr;function LV(){return pr||(pr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bV(){return mr||(mr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ko=new WeakMap,I8=new WeakMap,Ao=new WeakMap,qc=new WeakMap,Ja=new WeakMap;function wV(t){const e=new Promise((c,a)=>{const s=()=>{t.removeEventListener("success",n),t.removeEventListener("error",i)},n=()=>{c(Y3(t.result)),s()},i=()=>{a(t.error),s()};t.addEventListener("success",n),t.addEventListener("error",i)});return e.then(c=>{c instanceof IDBCursor&&ko.set(c,t)}).catch(()=>{}),Ja.set(e,t),e}function yV(t){if(I8.has(t))return;const e=new Promise((c,a)=>{const s=()=>{t.removeEventListener("complete",n),t.removeEventListener("error",i),t.removeEventListener("abort",i)},n=()=>{c(),s()},i=()=>{a(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",n),t.addEventListener("error",i),t.addEventListener("abort",i)});I8.set(t,e)}let R8={get(t,e,c){if(t instanceof IDBTransaction){if(e==="done")return I8.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ao.get(t);if(e==="store")return c.objectStoreNames[1]?void 0:c.objectStore(c.objectStoreNames[0])}return Y3(t[e])},set(t,e,c){return t[e]=c,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function SV(t){R8=t(R8)}function xV(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...c){const a=t.call(Gc(this),e,...c);return Ao.set(a,e.sort?e.sort():[e]),Y3(a)}:bV().includes(t)?function(...e){return t.apply(Gc(this),e),Y3(ko.get(this))}:function(...e){return Y3(t.apply(Gc(this),e))}}function NV(t){return typeof t=="function"?xV(t):(t instanceof IDBTransaction&&yV(t),_V(t,LV())?new Proxy(t,R8):t)}function Y3(t){if(t instanceof IDBRequest)return wV(t);if(qc.has(t))return qc.get(t);const e=NV(t);return e!==t&&(qc.set(t,e),Ja.set(e,t)),e}const Gc=t=>Ja.get(t);function TV(t,e,{blocked:c,upgrade:a,blocking:s,terminated:n}={}){const i=indexedDB.open(t,e),r=Y3(i);return a&&i.addEventListener("upgradeneeded",o=>{a(Y3(i.result),o.oldVersion,o.newVersion,Y3(i.transaction),o)}),c&&i.addEventListener("blocked",o=>c(o.oldVersion,o.newVersion,o)),r.then(o=>{n&&o.addEventListener("close",()=>n()),s&&o.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),r}const EV=["get","getKey","getAll","getAllKeys","count"],kV=["put","add","delete","clear"],jc=new Map;function vr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jc.get(e))return jc.get(e);const c=e.replace(/FromIndex$/,""),a=e!==c,s=kV.includes(c);if(!(c in(a?IDBIndex:IDBObjectStore).prototype)||!(s||EV.includes(c)))return;const n=async function(i,...r){const o=this.transaction(i,s?"readwrite":"readonly");let l=o.store;return a&&(l=l.index(r.shift())),(await Promise.all([l[c](...r),s&&o.done]))[0]};return jc.set(e,n),n}SV(t=>({...t,get:(e,c,a)=>vr(e,c)||t.get(e,c,a),has:(e,c)=>!!vr(e,c)||t.has(e,c)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AV{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(c=>{if(PV(c)){const a=c.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(c=>c).join(" ")}}function PV(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const O8="@firebase/app",gr="0.9.29";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k4=new Qa("@firebase/app"),IV="@firebase/app-compat",RV="@firebase/analytics-compat",OV="@firebase/analytics",DV="@firebase/app-check-compat",FV="@firebase/app-check",BV="@firebase/auth",UV="@firebase/auth-compat",$V="@firebase/database",WV="@firebase/database-compat",qV="@firebase/functions",GV="@firebase/functions-compat",jV="@firebase/installations",KV="@firebase/installations-compat",YV="@firebase/messaging",XV="@firebase/messaging-compat",QV="@firebase/performance",JV="@firebase/performance-compat",ZV="@firebase/remote-config",e_="@firebase/remote-config-compat",t_="@firebase/storage",c_="@firebase/storage-compat",a_="@firebase/firestore",s_="@firebase/firestore-compat",n_="firebase",i_="10.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D8="[DEFAULT]",r_={[O8]:"fire-core",[IV]:"fire-core-compat",[OV]:"fire-analytics",[RV]:"fire-analytics-compat",[FV]:"fire-app-check",[DV]:"fire-app-check-compat",[BV]:"fire-auth",[UV]:"fire-auth-compat",[$V]:"fire-rtdb",[WV]:"fire-rtdb-compat",[qV]:"fire-fn",[GV]:"fire-fn-compat",[jV]:"fire-iid",[KV]:"fire-iid-compat",[YV]:"fire-fcm",[XV]:"fire-fcm-compat",[QV]:"fire-perf",[JV]:"fire-perf-compat",[ZV]:"fire-rc",[e_]:"fire-rc-compat",[t_]:"fire-gcs",[c_]:"fire-gcs-compat",[a_]:"fire-fst",[s_]:"fire-fst-compat","fire-js":"fire-js",[n_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new Map,F8=new Map;function o_(t,e){try{t.container.addComponent(e)}catch(c){k4.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,c)}}function e4(t){const e=t.name;if(F8.has(e))return k4.debug(`There were multiple attempts to register component ${e}.`),!1;F8.set(e,t);for(const c of ct.values())o_(c,t);return!0}function X6(t,e){const c=t.container.getProvider("heartbeat").getImmediate({optional:!0});return c&&c.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},X3=new Y6("app","Firebase",l_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,c,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},c),this._name=c.name,this._automaticDataCollectionEnabled=c.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new C3("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw X3.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q4=i_;function Po(t,e={}){let c=t;typeof e!="object"&&(e={name:e});const a=Object.assign({name:D8,automaticDataCollectionEnabled:!1},e),s=a.name;if(typeof s!="string"||!s)throw X3.create("bad-app-name",{appName:String(s)});if(c||(c=yo()),!c)throw X3.create("no-options");const n=ct.get(s);if(n){if(tt(c,n.options)&&tt(a,n.config))return n;throw X3.create("duplicate-app",{appName:s})}const i=new HV(s);for(const o of F8.values())i.addComponent(o);const r=new f_(c,a,i);return ct.set(s,r),r}function Yt(t=D8){const e=ct.get(t);if(!e&&t===D8&&yo())return Po();if(!e)throw X3.create("no-app",{appName:t});return e}function E1(t,e,c){var a;let s=(a=r_[t])!==null&&a!==void 0?a:t;c&&(s+=`-${c}`);const n=s.match(/\s|\//),i=e.match(/\s|\//);if(n||i){const r=[`Unable to register library "${s}" with version "${e}":`];n&&r.push(`library name "${s}" contains illegal characters (whitespace or "/")`),n&&i&&r.push("and"),i&&r.push(`version name "${e}" contains illegal characters (whitespace or "/")`),k4.warn(r.join(" "));return}e4(new C3(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_="firebase-heartbeat-database",d_=1,x6="firebase-heartbeat-store";let Kc=null;function Io(){return Kc||(Kc=TV(u_,d_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(x6)}catch(c){console.warn(c)}}}}).catch(t=>{throw X3.create("idb-open",{originalErrorMessage:t.message})})),Kc}async function h_(t){try{const c=(await Io()).transaction(x6),a=await c.objectStore(x6).get(Ro(t));return await c.done,a}catch(e){if(e instanceof y3)k4.warn(e.message);else{const c=X3.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});k4.warn(c.message)}}}async function Hr(t,e){try{const a=(await Io()).transaction(x6,"readwrite");await a.objectStore(x6).put(e,Ro(t)),await a.done}catch(c){if(c instanceof y3)k4.warn(c.message);else{const a=X3.create("idb-set",{originalErrorMessage:c==null?void 0:c.message});k4.warn(a.message)}}}function Ro(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=1024,m_=30*24*60*60*1e3;class v_{constructor(e){this.container=e,this._heartbeatsCache=null;const c=this.container.getProvider("app").getImmediate();this._storage=new H_(c),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var e,c;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=zr();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((c=this._heartbeatsCache)===null||c===void 0?void 0:c.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=m_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const c=zr(),{heartbeatsToSend:a,unsentEntries:s}=g_(this._heartbeatsCache.heartbeats),n=J0(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=c,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function zr(){return new Date().toISOString().substring(0,10)}function g_(t,e=p_){const c=[];let a=t.slice();for(const s of t){const n=c.find(i=>i.agent===s.agent);if(n){if(n.dates.push(s.date),Cr(c)>e){n.dates.pop();break}}else if(c.push({agent:s.agent,dates:[s.date]}),Cr(c)>e){c.pop();break}a=a.slice(1)}return{heartbeatsToSend:c,unsentEntries:a}}class H_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aV()?sV().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const c=await h_(this.app);return c!=null&&c.heartbeats?c:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var c;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hr(this.app,{lastSentHeartbeatDate:(c=e.lastSentHeartbeatDate)!==null&&c!==void 0?c:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var c;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hr(this.app,{lastSentHeartbeatDate:(c=e.lastSentHeartbeatDate)!==null&&c!==void 0?c:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Cr(t){return J0(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(t){e4(new C3("platform-logger",e=>new AV(e),"PRIVATE")),e4(new C3("heartbeat",e=>new v_(e),"PRIVATE")),E1(O8,gr,t),E1(O8,gr,"esm2017"),E1("fire-js","")}z_("");function Za(t,e){var c={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(c[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(t);s<a.length;s++)e.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(t,a[s])&&(c[a[s]]=t[a[s]]);return c}function Oo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const C_=Oo,Do=new Y6("auth","Firebase",Oo());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=new Qa("@firebase/auth");function M_(t,...e){at.logLevel<=b2.WARN&&at.warn(`Auth (${q4}): ${t}`,...e)}function D0(t,...e){at.logLevel<=b2.ERROR&&at.error(`Auth (${q4}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(t,...e){throw es(t,...e)}function c3(t,...e){return es(t,...e)}function Fo(t,e,c){const a=Object.assign(Object.assign({},C_()),{[e]:c});return new Y6("auth","Firebase",a).create(e,{appName:t.name})}function V_(t,e,c){const a=c;if(!(e instanceof a))throw a.name!==e.constructor.name&&A1(t,"argument-error"),Fo(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function es(t,...e){if(typeof t!="string"){const c=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=t.name),t._errorFactory.create(c,...a)}return Do.create(t,...e)}function r2(t,e,...c){if(!t)throw es(e,...c)}function d3(t){const e="INTERNAL ASSERTION FAILED: "+t;throw D0(e),new Error(e)}function M3(t,e){t||d3(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B8(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function __(){return Mr()==="http:"||Mr()==="https:"}function Mr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(__()||tV()||"connection"in navigator)?navigator.onLine:!0}function b_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q6{constructor(e,c){this.shortDelay=e,this.longDelay=c,M3(c>e,"Short delay should be less than long delay!"),this.isMobile=Xa()||No()}get(){return L_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(t,e){M3(t.emulator,"Emulator should always be set here");const{url:c}=t.emulator;return e?`${c}${e.startsWith("/")?e.slice(1):e}`:c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{static initialize(e,c,a){this.fetchImpl=e,c&&(this.headersImpl=c),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;d3("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;d3("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;d3("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=new Q6(3e4,6e4);function i4(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function r4(t,e,c,a,s={}){return Uo(t,s,async()=>{let n={},i={};a&&(e==="GET"?i=a:n={body:JSON.stringify(a)});const r=Fe(Object.assign({key:t.config.apiKey},i)).slice(1),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/json",t.languageCode&&(o["X-Firebase-Locale"]=t.languageCode),Bo.fetch()($o(t,t.config.apiHost,c,r),Object.assign({method:e,headers:o,referrerPolicy:"no-referrer"},n))})}async function Uo(t,e,c){t._canInitEmulator=!1;const a=Object.assign(Object.assign({},w_),e);try{const s=new x_(t),n=await Promise.race([c(),s.promise]);s.clearNetworkTimeout();const i=await n.json();if("needConfirmation"in i)throw z0(t,"account-exists-with-different-credential",i);if(n.ok&&!("errorMessage"in i))return i;{const r=n.ok?i.errorMessage:i.error.message,[o,l]=r.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw z0(t,"credential-already-in-use",i);if(o==="EMAIL_EXISTS")throw z0(t,"email-already-in-use",i);if(o==="USER_DISABLED")throw z0(t,"user-disabled",i);const f=a[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Fo(t,f,l);A1(t,f)}}catch(s){if(s instanceof y3)throw s;A1(t,"network-request-failed",{message:String(s)})}}async function J6(t,e,c,a,s={}){const n=await r4(t,e,c,a,s);return"mfaPendingCredential"in n&&A1(t,"multi-factor-auth-required",{_serverResponse:n}),n}function $o(t,e,c,a){const s=`${e}${c}?${a}`;return t.config.emulator?ts(t.config,s):`${t.config.apiScheme}://${s}`}function S_(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class x_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((c,a)=>{this.timer=setTimeout(()=>a(c3(this.auth,"network-request-failed")),y_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function z0(t,e,c){const a={appName:t.name};c.email&&(a.email=c.email),c.phoneNumber&&(a.phoneNumber=c.phoneNumber);const s=c3(t,e,a);return s.customData._tokenResponse=c,s}function Vr(t){return t!==void 0&&t.enterprise!==void 0}class N_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const c of this.recaptchaEnforcementState)if(c.provider&&c.provider===e)return S_(c.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function T_(t,e){return r4(t,"GET","/v2/recaptchaConfig",i4(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E_(t,e){return r4(t,"POST","/v1/accounts:delete",e)}async function k_(t,e){return r4(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p6(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function A_(t,e=!1){const c=K2(t),a=await c.getIdToken(e),s=cs(a);r2(s&&s.exp&&s.auth_time&&s.iat,c.auth,"internal-error");const n=typeof s.firebase=="object"?s.firebase:void 0,i=n==null?void 0:n.sign_in_provider;return{claims:s,token:a,authTime:p6(Yc(s.auth_time)),issuedAtTime:p6(Yc(s.iat)),expirationTime:p6(Yc(s.exp)),signInProvider:i||null,signInSecondFactor:(n==null?void 0:n.sign_in_second_factor)||null}}function Yc(t){return Number(t)*1e3}function cs(t){const[e,c,a]=t.split(".");if(e===void 0||c===void 0||a===void 0)return D0("JWT malformed, contained fewer than 3 sections"),null;try{const s=Z0(c);return s?JSON.parse(s):(D0("Failed to decode base64 JWT payload"),null)}catch(s){return D0("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function P_(t){const e=cs(t);return r2(e,"internal-error"),r2(typeof e.exp<"u","internal-error"),r2(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N6(t,e,c=!1){if(c)return e;try{return await e}catch(a){throw a instanceof y3&&I_(a)&&t.auth.currentUser===t&&await t.auth.signOut(),a}}function I_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var c;if(e){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const s=((c=this.user.stsTokenManager.expirationTime)!==null&&c!==void 0?c:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const c=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},c)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,c){this.createdAt=e,this.lastLoginAt=c,this._initializeTime()}_initializeTime(){this.lastSignInTime=p6(this.lastLoginAt),this.creationTime=p6(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(t){var e;const c=t.auth,a=await t.getIdToken(),s=await N6(t,k_(c,{idToken:a}));r2(s==null?void 0:s.users.length,c,"internal-error");const n=s.users[0];t._notifyReloadListener(n);const i=!((e=n.providerUserInfo)===null||e===void 0)&&e.length?F_(n.providerUserInfo):[],r=D_(t.providerData,i),o=t.isAnonymous,l=!(t.email&&n.passwordHash)&&!(r!=null&&r.length),f=o?l:!1,u={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:r,metadata:new Wo(n.createdAt,n.lastLoginAt),isAnonymous:f};Object.assign(t,u)}async function O_(t){const e=K2(t);await st(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function D_(t,e){return[...t.filter(a=>!e.some(s=>s.providerId===a.providerId)),...e]}function F_(t){return t.map(e=>{var{providerId:c}=e,a=Za(e,["providerId"]);return{providerId:c,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B_(t,e){const c=await Uo(t,{},async()=>{const a=Fe({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:n}=t.config,i=$o(t,s,"/v1/token",`key=${n}`),r=await t._getAdditionalHeaders();return r["Content-Type"]="application/x-www-form-urlencoded",Bo.fetch()(i,{method:"POST",headers:r,body:a})});return{accessToken:c.access_token,expiresIn:c.expires_in,refreshToken:c.refresh_token}}async function U_(t,e){return r4(t,"POST","/v2/accounts:revokeToken",i4(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T6{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){r2(e.idToken,"internal-error"),r2(typeof e.idToken<"u","internal-error"),r2(typeof e.refreshToken<"u","internal-error");const c="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):P_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,c)}async getToken(e,c=!1){return r2(!this.accessToken||this.refreshToken,e,"user-token-expired"),!c&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,c){const{accessToken:a,refreshToken:s,expiresIn:n}=await B_(e,c);this.updateTokensAndExpiration(a,s,Number(n))}updateTokensAndExpiration(e,c,a){this.refreshToken=c||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,c){const{refreshToken:a,accessToken:s,expirationTime:n}=c,i=new T6;return a&&(r2(typeof a=="string","internal-error",{appName:e}),i.refreshToken=a),s&&(r2(typeof s=="string","internal-error",{appName:e}),i.accessToken=s),n&&(r2(typeof n=="number","internal-error",{appName:e}),i.expirationTime=n),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new T6,this.toJSON())}_performRefresh(){return d3("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E3(t,e){r2(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class y4{constructor(e){var{uid:c,auth:a,stsTokenManager:s}=e,n=Za(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new R_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=c,this.auth=a,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new Wo(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(e){const c=await N6(this,this.stsTokenManager.getToken(this.auth,e));return r2(c,this.auth,"internal-error"),this.accessToken!==c&&(this.accessToken=c,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),c}getIdTokenResult(e){return A_(this,e)}reload(){return O_(this)}_assign(e){this!==e&&(r2(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(c=>Object.assign({},c)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const c=new y4(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return c.metadata._copy(this.metadata),c}_onReload(e){r2(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,c=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),c&&await st(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await N6(this,E_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,c){var a,s,n,i,r,o,l,f;const u=(a=c.displayName)!==null&&a!==void 0?a:void 0,d=(s=c.email)!==null&&s!==void 0?s:void 0,h=(n=c.phoneNumber)!==null&&n!==void 0?n:void 0,m=(i=c.photoURL)!==null&&i!==void 0?i:void 0,v=(r=c.tenantId)!==null&&r!==void 0?r:void 0,M=(o=c._redirectEventId)!==null&&o!==void 0?o:void 0,H=(l=c.createdAt)!==null&&l!==void 0?l:void 0,p=(f=c.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:g,emailVerified:_,isAnonymous:b,providerData:A,stsTokenManager:G}=c;r2(g&&G,e,"internal-error");const k=T6.fromJSON(this.name,G);r2(typeof g=="string",e,"internal-error"),E3(u,e.name),E3(d,e.name),r2(typeof _=="boolean",e,"internal-error"),r2(typeof b=="boolean",e,"internal-error"),E3(h,e.name),E3(m,e.name),E3(v,e.name),E3(M,e.name),E3(H,e.name),E3(p,e.name);const w=new y4({uid:g,auth:e,email:d,emailVerified:_,displayName:u,isAnonymous:b,photoURL:m,phoneNumber:h,tenantId:v,stsTokenManager:k,createdAt:H,lastLoginAt:p});return A&&Array.isArray(A)&&(w.providerData=A.map(y=>Object.assign({},y))),M&&(w._redirectEventId=M),w}static async _fromIdTokenResponse(e,c,a=!1){const s=new T6;s.updateFromServerResponse(c);const n=new y4({uid:c.localId,auth:e,stsTokenManager:s,isAnonymous:a});return await st(n),n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new Map;function h3(t){M3(t instanceof Function,"Expected a class definition");let e=_r.get(t);return e?(M3(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_r.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,c){this.storage[e]=c}async _get(e){const c=this.storage[e];return c===void 0?null:c}async _remove(e){delete this.storage[e]}_addListener(e,c){}_removeListener(e,c){}}qo.type="NONE";const Lr=qo;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(t,e,c){return`firebase:${t}:${e}:${c}`}class pe{constructor(e,c,a){this.persistence=e,this.auth=c,this.userKey=a;const{config:s,name:n}=this.auth;this.fullUserKey=F0(this.userKey,s.apiKey,n),this.fullPersistenceKey=F0("persistence",s.apiKey,n),this.boundEventHandler=c._onStorageEvent.bind(c),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?y4._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const c=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,c)return this.setCurrentUser(c)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,c,a="authUser"){if(!c.length)return new pe(h3(Lr),e,a);const s=(await Promise.all(c.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let n=s[0]||h3(Lr);const i=F0(a,e.config.apiKey,e.name);let r=null;for(const l of c)try{const f=await l._get(i);if(f){const u=y4._fromJSON(e,f);l!==n&&(r=u),n=l;break}}catch{}const o=s.filter(l=>l._shouldAllowMigration);return!n._shouldAllowMigration||!o.length?new pe(n,e,a):(n=o[0],r&&await n._set(i,r.toJSON()),await Promise.all(c.map(async l=>{if(l!==n)try{await l._remove(i)}catch{}})),new pe(n,e,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ko(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Go(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xo(e))return"Blackberry";if(Qo(e))return"Webos";if(as(e))return"Safari";if((e.includes("chrome/")||jo(e))&&!e.includes("edge/"))return"Chrome";if(Yo(e))return"Android";{const c=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=t.match(c);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function Go(t=o1()){return/firefox\//i.test(t)}function as(t=o1()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jo(t=o1()){return/crios\//i.test(t)}function Ko(t=o1()){return/iemobile/i.test(t)}function Yo(t=o1()){return/android/i.test(t)}function Xo(t=o1()){return/blackberry/i.test(t)}function Qo(t=o1()){return/webos/i.test(t)}function Xt(t=o1()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $_(t=o1()){var e;return Xt(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function W_(){return cV()&&document.documentMode===10}function Jo(t=o1()){return Xt(t)||Yo(t)||Qo(t)||Xo(t)||/windows phone/i.test(t)||Ko(t)}function q_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(t,e=[]){let c;switch(t){case"Browser":c=br(o1());break;case"Worker":c=`${br(o1())}-${t}`;break;default:c=t}const a=e.length?e.join(","):"FirebaseCore-web";return`${c}/JsCore/${q4}/${a}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,c){const a=n=>new Promise((i,r)=>{try{const o=e(n);i(o)}catch(o){r(o)}});a.onAbort=c,this.queue.push(a);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const c=[];try{for(const a of this.queue)await a(e),a.onAbort&&c.push(a.onAbort)}catch(a){c.reverse();for(const s of c)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j_(t,e={}){return r4(t,"GET","/v2/passwordPolicy",i4(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=6;class Y_{constructor(e){var c,a,s,n;const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(c=i.minPasswordLength)!==null&&c!==void 0?c:K_,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(a=e.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(n=e.forceUpgradeOnSignin)!==null&&n!==void 0?n:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var c,a,s,n,i,r;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=(c=o.meetsMinPasswordLength)!==null&&c!==void 0?c:!0),o.isValid&&(o.isValid=(a=o.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),o.isValid&&(o.isValid=(s=o.containsLowercaseLetter)!==null&&s!==void 0?s:!0),o.isValid&&(o.isValid=(n=o.containsUppercaseLetter)!==null&&n!==void 0?n:!0),o.isValid&&(o.isValid=(i=o.containsNumericCharacter)!==null&&i!==void 0?i:!0),o.isValid&&(o.isValid=(r=o.containsNonAlphanumericCharacter)!==null&&r!==void 0?r:!0),o}validatePasswordLengthOptions(e,c){const a=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;a&&(c.meetsMinPasswordLength=e.length>=a),s&&(c.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,c){this.updatePasswordCharacterOptionsStatuses(c,!1,!1,!1,!1);let a;for(let s=0;s<e.length;s++)a=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(c,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,c,a,s,n){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=c)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,c,a,s){this.app=e,this.heartbeatServiceProvider=c,this.appCheckServiceProvider=a,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wr(this),this.idTokenSubscription=new wr(this),this.beforeStateQueue=new G_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Do,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,c){return c&&(this._popupRedirectResolver=h3(c)),this._initializationPromise=this.queue(async()=>{var a,s;if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(c),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var c;const a=await this.assertedPersistence.getCurrentUser();let s=a,n=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(c=this.redirectUser)===null||c===void 0?void 0:c._redirectEventId,r=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===r)&&(o!=null&&o.user)&&(s=o.user,n=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(n)try{await this.beforeStateQueue.runMiddleware(s)}catch(i){s=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return r2(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let c=null;try{c=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return c}async reloadAndSetCurrentUserOrClear(e){try{await st(e)}catch(c){if((c==null?void 0:c.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=b_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const c=e?K2(e):null;return c&&r2(c.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(c&&c._clone(this))}async _updateCurrentUser(e,c=!1){if(!this._deleted)return e&&r2(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),c||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(h3(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const c=this._getPasswordPolicyInternal();return c.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):c.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await j_(this),c=new Y_(e);this.tenantId===null?this._projectPasswordPolicy=c:this._tenantPasswordPolicies[this.tenantId]=c}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Y6("auth","Firebase",e())}onAuthStateChanged(e,c,a){return this.registerStateListener(this.authStateSubscription,e,c,a)}beforeAuthStateChanged(e,c){return this.beforeStateQueue.pushCallback(e,c)}onIdTokenChanged(e,c,a){return this.registerStateListener(this.idTokenSubscription,e,c,a)}authStateReady(){return new Promise((e,c)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},c)}})}async revokeAccessToken(e){if(this.currentUser){const c=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:c};this.tenantId!=null&&(a.tenantId=this.tenantId),await U_(this,a)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,c){const a=await this.getOrInitRedirectPersistenceManager(c);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const c=e&&h3(e)||this._popupRedirectResolver;r2(c,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[h3(c._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var c,a;return this._isInitialized&&await this.queue(async()=>{}),((c=this._currentUser)===null||c===void 0?void 0:c._redirectEventId)===e?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,c;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(c=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&c!==void 0?c:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,c,a,s){if(this._deleted)return()=>{};const n=typeof c=="function"?c:c.next.bind(c);let i=!1;const r=this._isInitialized?Promise.resolve():this._initializationPromise;if(r2(r,this,"internal-error"),r.then(()=>{i||n(this.currentUser)}),typeof c=="function"){const o=e.addObserver(c,a,s);return()=>{i=!0,o()}}else{const o=e.addObserver(c);return()=>{i=!0,o()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return r2(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const c={"X-Client-Version":this.clientVersion};this.app.options.appId&&(c["X-Firebase-gmpid"]=this.app.options.appId);const a=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());a&&(c["X-Firebase-Client"]=a);const s=await this._getAppCheckToken();return s&&(c["X-Firebase-AppCheck"]=s),c}async _getAppCheckToken(){var e;const c=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return c!=null&&c.error&&M_(`Error while retrieving App Check token: ${c.error}`),c==null?void 0:c.token}}function o4(t){return K2(t)}class wr{constructor(e){this.auth=e,this.observer=null,this.addObserver=uV(c=>this.observer=c)}get next(){return r2(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Q_(t){Qt=t}function el(t){return Qt.loadJS(t)}function J_(){return Qt.recaptchaEnterpriseScript}function Z_(){return Qt.gapiScript}function eL(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const tL="recaptcha-enterprise",cL="NO_RECAPTCHA";class aL{constructor(e){this.type=tL,this.auth=o4(e)}async verify(e="verify",c=!1){async function a(n){if(!c){if(n.tenantId==null&&n._agentRecaptchaConfig!=null)return n._agentRecaptchaConfig.siteKey;if(n.tenantId!=null&&n._tenantRecaptchaConfigs[n.tenantId]!==void 0)return n._tenantRecaptchaConfigs[n.tenantId].siteKey}return new Promise(async(i,r)=>{T_(n,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(o=>{if(o.recaptchaKey===void 0)r(new Error("recaptcha Enterprise site key undefined"));else{const l=new N_(o);return n.tenantId==null?n._agentRecaptchaConfig=l:n._tenantRecaptchaConfigs[n.tenantId]=l,i(l.siteKey)}}).catch(o=>{r(o)})})}function s(n,i,r){const o=window.grecaptcha;Vr(o)?o.enterprise.ready(()=>{o.enterprise.execute(n,{action:e}).then(l=>{i(l)}).catch(()=>{i(cL)})}):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((n,i)=>{a(this.auth).then(r=>{if(!c&&Vr(window.grecaptcha))s(r,n,i);else{if(typeof window>"u"){i(new Error("RecaptchaVerifier is only supported in browser"));return}let o=J_();o.length!==0&&(o+=r),el(o).then(()=>{s(r,n,i)}).catch(l=>{i(l)})}}).catch(r=>{i(r)})})}}async function yr(t,e,c,a=!1){const s=new aL(t);let n;try{n=await s.verify(c)}catch{n=await s.verify(c,!0)}const i=Object.assign({},e);return a?Object.assign(i,{captchaResp:n}):Object.assign(i,{captchaResponse:n}),Object.assign(i,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(i,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),i}async function U8(t,e,c,a){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const n=await yr(t,e,c,c==="getOobCode");return a(t,n)}else return a(t,e).catch(async n=>{if(n.code==="auth/missing-recaptcha-token"){console.log(`${c} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await yr(t,e,c,c==="getOobCode");return a(t,i)}else return Promise.reject(n)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sL(t,e){const c=X6(t,"auth");if(c.isInitialized()){const s=c.getImmediate(),n=c.getOptions();if(tt(n,e??{}))return s;A1(s,"already-initialized")}return c.initialize({options:e})}function nL(t,e){const c=(e==null?void 0:e.persistence)||[],a=(Array.isArray(c)?c:[c]).map(h3);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(a,e==null?void 0:e.popupRedirectResolver)}function iL(t,e,c){const a=o4(t);r2(a._canInitEmulator,a,"emulator-config-failed"),r2(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const s=!!(c!=null&&c.disableWarnings),n=tl(e),{host:i,port:r}=rL(e),o=r===null?"":`:${r}`;a.config.emulator={url:`${n}//${i}${o}/`},a.settings.appVerificationDisabledForTesting=!0,a.emulatorConfig=Object.freeze({host:i,port:r,protocol:n.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||oL()}function tl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rL(t){const e=tl(t),c=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!c)return{host:"",port:null};const a=c[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(a);if(s){const n=s[1];return{host:n,port:Sr(a.substr(n.length+1))}}else{const[n,i]=a.split(":");return{host:n,port:Sr(i)}}}function Sr(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oL(){function t(){const e=document.createElement("p"),c=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",c.position="fixed",c.width="100%",c.backgroundColor="#ffffff",c.border=".1em solid #000000",c.color="#b50000",c.bottom="0px",c.left="0px",c.margin="0px",c.zIndex="10000",c.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,c){this.providerId=e,this.signInMethod=c}toJSON(){return d3("not implemented")}_getIdTokenResponse(e){return d3("not implemented")}_linkToIdToken(e,c){return d3("not implemented")}_getReauthenticationResolver(e){return d3("not implemented")}}async function lL(t,e){return r4(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fL(t,e){return J6(t,"POST","/v1/accounts:signInWithPassword",i4(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uL(t,e){return J6(t,"POST","/v1/accounts:signInWithEmailLink",i4(t,e))}async function dL(t,e){return J6(t,"POST","/v1/accounts:signInWithEmailLink",i4(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E6 extends ss{constructor(e,c,a,s=null){super("password",a),this._email=e,this._password=c,this._tenantId=s}static _fromEmailAndPassword(e,c){return new E6(e,c,"password")}static _fromEmailAndCode(e,c,a=null){return new E6(e,c,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const c=typeof e=="string"?JSON.parse(e):e;if(c!=null&&c.email&&(c!=null&&c.password)){if(c.signInMethod==="password")return this._fromEmailAndPassword(c.email,c.password);if(c.signInMethod==="emailLink")return this._fromEmailAndCode(c.email,c.password,c.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const c={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return U8(e,c,"signInWithPassword",fL);case"emailLink":return uL(e,{email:this._email,oobCode:this._password});default:A1(e,"internal-error")}}async _linkToIdToken(e,c){switch(this.signInMethod){case"password":const a={idToken:c,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return U8(e,a,"signUpPassword",lL);case"emailLink":return dL(e,{idToken:c,email:this._email,oobCode:this._password});default:A1(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function me(t,e){return J6(t,"POST","/v1/accounts:signInWithIdp",i4(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hL="http://localhost";class A4 extends ss{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const c=new A4(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(c.idToken=e.idToken),e.accessToken&&(c.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(c.nonce=e.nonce),e.pendingToken&&(c.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(c.accessToken=e.oauthToken,c.secret=e.oauthTokenSecret):A1("argument-error"),c}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const c=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:s}=c,n=Za(c,["providerId","signInMethod"]);if(!a||!s)return null;const i=new A4(a,s);return i.idToken=n.idToken||void 0,i.accessToken=n.accessToken||void 0,i.secret=n.secret,i.nonce=n.nonce,i.pendingToken=n.pendingToken||null,i}_getIdTokenResponse(e){const c=this.buildRequest();return me(e,c)}_linkToIdToken(e,c){const a=this.buildRequest();return a.idToken=c,me(e,a)}_getReauthenticationResolver(e){const c=this.buildRequest();return c.autoCreate=!1,me(e,c)}buildRequest(){const e={requestUri:hL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const c={};this.idToken&&(c.id_token=this.idToken),this.accessToken&&(c.access_token=this.accessToken),this.secret&&(c.oauth_token_secret=this.secret),c.providerId=this.providerId,this.nonce&&!this.pendingToken&&(c.nonce=this.nonce),e.postBody=Fe(c)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pL(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mL(t){const e=n6(i6(t)).link,c=e?n6(i6(e)).deep_link_id:null,a=n6(i6(t)).deep_link_id;return(a?n6(i6(a)).link:null)||a||c||e||t}class ns{constructor(e){var c,a,s,n,i,r;const o=n6(i6(e)),l=(c=o.apiKey)!==null&&c!==void 0?c:null,f=(a=o.oobCode)!==null&&a!==void 0?a:null,u=pL((s=o.mode)!==null&&s!==void 0?s:null);r2(l&&f&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=f,this.continueUrl=(n=o.continueUrl)!==null&&n!==void 0?n:null,this.languageCode=(i=o.languageCode)!==null&&i!==void 0?i:null,this.tenantId=(r=o.tenantId)!==null&&r!==void 0?r:null}static parseLink(e){const c=mL(e);try{return new ns(c)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(){this.providerId=Be.PROVIDER_ID}static credential(e,c){return E6._fromEmailAndPassword(e,c)}static credentialWithLink(e,c){const a=ns.parseLink(c);return r2(a,"argument-error"),E6._fromEmailAndCode(e,a.code,a.tenantId)}}Be.PROVIDER_ID="password";Be.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Be.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z6 extends is{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D3 extends Z6{constructor(){super("facebook.com")}static credential(e){return A4._fromParams({providerId:D3.PROVIDER_ID,signInMethod:D3.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return D3.credentialFromTaggedObject(e)}static credentialFromError(e){return D3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return D3.credential(e.oauthAccessToken)}catch{return null}}}D3.FACEBOOK_SIGN_IN_METHOD="facebook.com";D3.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l3 extends Z6{constructor(){super("google.com"),this.addScope("profile")}static credential(e,c){return A4._fromParams({providerId:l3.PROVIDER_ID,signInMethod:l3.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:c})}static credentialFromResult(e){return l3.credentialFromTaggedObject(e)}static credentialFromError(e){return l3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:c,oauthAccessToken:a}=e;if(!c&&!a)return null;try{return l3.credential(c,a)}catch{return null}}}l3.GOOGLE_SIGN_IN_METHOD="google.com";l3.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F3 extends Z6{constructor(){super("github.com")}static credential(e){return A4._fromParams({providerId:F3.PROVIDER_ID,signInMethod:F3.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return F3.credentialFromTaggedObject(e)}static credentialFromError(e){return F3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return F3.credential(e.oauthAccessToken)}catch{return null}}}F3.GITHUB_SIGN_IN_METHOD="github.com";F3.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B3 extends Z6{constructor(){super("twitter.com")}static credential(e,c){return A4._fromParams({providerId:B3.PROVIDER_ID,signInMethod:B3.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:c})}static credentialFromResult(e){return B3.credentialFromTaggedObject(e)}static credentialFromError(e){return B3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:c,oauthTokenSecret:a}=e;if(!c||!a)return null;try{return B3.credential(c,a)}catch{return null}}}B3.TWITTER_SIGN_IN_METHOD="twitter.com";B3.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vL(t,e){return J6(t,"POST","/v1/accounts:signUp",i4(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P4{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,c,a,s=!1){const n=await y4._fromIdTokenResponse(e,a,s),i=xr(a);return new P4({user:n,providerId:i,_tokenResponse:a,operationType:c})}static async _forOperation(e,c,a){await e._updateTokensIfNecessary(a,!0);const s=xr(a);return new P4({user:e,providerId:s,_tokenResponse:a,operationType:c})}}function xr(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends y3{constructor(e,c,a,s){var n;super(c.code,c.message),this.operationType=a,this.user=s,Object.setPrototypeOf(this,nt.prototype),this.customData={appName:e.name,tenantId:(n=e.tenantId)!==null&&n!==void 0?n:void 0,_serverResponse:c.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,c,a,s){return new nt(e,c,a,s)}}function cl(t,e,c,a){return(e==="reauthenticate"?c._getReauthenticationResolver(t):c._getIdTokenResponse(t)).catch(n=>{throw n.code==="auth/multi-factor-auth-required"?nt._fromErrorAndOperation(t,n,e,a):n})}async function gL(t,e,c=!1){const a=await N6(t,e._linkToIdToken(t.auth,await t.getIdToken()),c);return P4._forOperation(t,"link",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HL(t,e,c=!1){const{auth:a}=t,s="reauthenticate";try{const n=await N6(t,cl(a,s,e,t),c);r2(n.idToken,a,"internal-error");const i=cs(n.idToken);r2(i,a,"internal-error");const{sub:r}=i;return r2(t.uid===r,a,"user-mismatch"),P4._forOperation(t,s,n)}catch(n){throw(n==null?void 0:n.code)==="auth/user-not-found"&&A1(a,"user-mismatch"),n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function al(t,e,c=!1){const a="signIn",s=await cl(t,a,e),n=await P4._fromIdTokenResponse(t,a,s);return c||await t._updateCurrentUser(n.user),n}async function zL(t,e){return al(o4(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(t){const e=o4(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function CL(t,e,c){const a=o4(t),i=await U8(a,{returnSecureToken:!0,email:e,password:c,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vL).catch(o=>{throw o.code==="auth/password-does-not-meet-requirements"&&sl(t),o}),r=await P4._fromIdTokenResponse(a,"signIn",i);return await a._updateCurrentUser(r.user),r}function ML(t,e,c){return zL(K2(t),Be.credential(e,c)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&sl(t),a})}function VL(t,e,c,a){return K2(t).onIdTokenChanged(e,c,a)}function _L(t,e,c){return K2(t).beforeAuthStateChanged(e,c)}function LL(t,e,c,a){return K2(t).onAuthStateChanged(e,c,a)}function bL(t){return K2(t).signOut()}const it="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,c){this.storageRetriever=e,this.type=c}_isAvailable(){try{return this.storage?(this.storage.setItem(it,"1"),this.storage.removeItem(it),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,c){return this.storage.setItem(e,JSON.stringify(c)),Promise.resolve()}_get(e){const c=this.storage.getItem(e);return Promise.resolve(c?JSON.parse(c):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wL(){const t=o1();return as(t)||Xt(t)}const yL=1e3,SL=10;class il extends nl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,c)=>this.onStorageEvent(e,c),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wL()&&q_(),this.fallbackToPolling=Jo(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const c of Object.keys(this.listeners)){const a=this.storage.getItem(c),s=this.localCache[c];a!==s&&e(c,s,a)}}onStorageEvent(e,c=!1){if(!e.key){this.forAllChangedKeys((i,r,o)=>{this.notifyListeners(i,o)});return}const a=e.key;if(c?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(a);if(e.newValue!==i)e.newValue!==null?this.storage.setItem(a,e.newValue):this.storage.removeItem(a);else if(this.localCache[a]===e.newValue&&!c)return}const s=()=>{const i=this.storage.getItem(a);!c&&this.localCache[a]===i||this.notifyListeners(a,i)},n=this.storage.getItem(a);W_()&&n!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,SL):s()}notifyListeners(e,c){this.localCache[e]=c;const a=this.listeners[e];if(a)for(const s of Array.from(a))s(c&&JSON.parse(c))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,c,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:c,newValue:a}),!0)})},yL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,c){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(c)}_removeListener(e,c){this.listeners[e]&&(this.listeners[e].delete(c),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,c){await super._set(e,c),this.localCache[e]=JSON.stringify(c)}async _get(e){const c=await super._get(e);return this.localCache[e]=JSON.stringify(c),c}async _remove(e){await super._remove(e),delete this.localCache[e]}}il.type="LOCAL";const xL=il;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl extends nl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,c){}_removeListener(e,c){}}rl.type="SESSION";const ol=rl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(c){return{fulfilled:!1,reason:c}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const c=this.receivers.find(s=>s.isListeningto(e));if(c)return c;const a=new Jt(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const c=e,{eventId:a,eventType:s,data:n}=c.data,i=this.handlersMap[s];if(!(i!=null&&i.size))return;c.ports[0].postMessage({status:"ack",eventId:a,eventType:s});const r=Array.from(i).map(async l=>l(c.origin,n)),o=await NL(r);c.ports[0].postMessage({status:"done",eventId:a,eventType:s,response:o})}_subscribe(e,c){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(c)}_unsubscribe(e,c){this.handlersMap[e]&&c&&this.handlersMap[e].delete(c),(!c||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t="",e=10){let c="";for(let a=0;a<e;a++)c+=Math.floor(Math.random()*10);return t+c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,c,a=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let n,i;return new Promise((r,o)=>{const l=rs("",20);s.port1.start();const f=setTimeout(()=>{o(new Error("unsupported_event"))},a);i={messageChannel:s,onMessage(u){const d=u;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(f),n=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(n),r(d.data.response);break;default:clearTimeout(f),clearTimeout(n),o(new Error("invalid_response"));break}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:c},[s.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a3(){return window}function EL(t){a3().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(){return typeof a3().WorkerGlobalScope<"u"&&typeof a3().importScripts=="function"}async function kL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function PL(){return ll()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl="firebaseLocalStorageDb",IL=1,rt="firebaseLocalStorage",ul="fbase_key";class e0{constructor(e){this.request=e}toPromise(){return new Promise((e,c)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{c(this.request.error)})})}}function Zt(t,e){return t.transaction([rt],e?"readwrite":"readonly").objectStore(rt)}function RL(){const t=indexedDB.deleteDatabase(fl);return new e0(t).toPromise()}function $8(){const t=indexedDB.open(fl,IL);return new Promise((e,c)=>{t.addEventListener("error",()=>{c(t.error)}),t.addEventListener("upgradeneeded",()=>{const a=t.result;try{a.createObjectStore(rt,{keyPath:ul})}catch(s){c(s)}}),t.addEventListener("success",async()=>{const a=t.result;a.objectStoreNames.contains(rt)?e(a):(a.close(),await RL(),e(await $8()))})})}async function Nr(t,e,c){const a=Zt(t,!0).put({[ul]:e,value:c});return new e0(a).toPromise()}async function OL(t,e){const c=Zt(t,!1).get(e),a=await new e0(c).toPromise();return a===void 0?null:a.value}function Tr(t,e){const c=Zt(t,!0).delete(e);return new e0(c).toPromise()}const DL=800,FL=3;class dl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $8(),this.db)}async _withRetries(e){let c=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(c++>FL)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ll()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jt._getInstance(PL()),this.receiver._subscribe("keyChanged",async(e,c)=>({keyProcessed:(await this._poll()).includes(c.key)})),this.receiver._subscribe("ping",async(e,c)=>["keyChanged"])}async initializeSender(){var e,c;if(this.activeServiceWorker=await kL(),!this.activeServiceWorker)return;this.sender=new TL(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((e=a[0])===null||e===void 0)&&e.fulfilled&&!((c=a[0])===null||c===void 0)&&c.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||AL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $8();return await Nr(e,it,"1"),await Tr(e,it),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,c){return this._withPendingWrite(async()=>(await this._withRetries(a=>Nr(a,e,c)),this.localCache[e]=c,this.notifyServiceWorker(e)))}async _get(e){const c=await this._withRetries(a=>OL(a,e));return this.localCache[e]=c,c}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(c=>Tr(c,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const n=Zt(s,!1).getAll();return new e0(n).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const c=[],a=new Set;if(e.length!==0)for(const{fbase_key:s,value:n}of e)a.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(n)&&(this.notifyListeners(s,n),c.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!a.has(s)&&(this.notifyListeners(s,null),c.push(s));return c}notifyListeners(e,c){this.localCache[e]=c;const a=this.listeners[e];if(a)for(const s of Array.from(a))s(c)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,c){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(c)}_removeListener(e,c){this.listeners[e]&&(this.listeners[e].delete(c),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dl.type="LOCAL";const BL=dl;new Q6(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(t,e){return e?h3(e):(r2(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends ss{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return me(e,this._buildIdpRequest())}_linkToIdToken(e,c){return me(e,this._buildIdpRequest(c))}_getReauthenticationResolver(e){return me(e,this._buildIdpRequest())}_buildIdpRequest(e){const c={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(c.idToken=e),c}}function UL(t){return al(t.auth,new os(t),t.bypassAuthState)}function $L(t){const{auth:e,user:c}=t;return r2(c,e,"internal-error"),HL(c,new os(t),t.bypassAuthState)}async function WL(t){const{auth:e,user:c}=t;return r2(c,e,"internal-error"),gL(c,new os(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,c,a,s,n=!1){this.auth=e,this.resolver=a,this.user=s,this.bypassAuthState=n,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(c)?c:[c]}execute(){return new Promise(async(e,c)=>{this.pendingPromise={resolve:e,reject:c};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:c,sessionId:a,postBody:s,tenantId:n,error:i,type:r}=e;if(i){this.reject(i);return}const o={auth:this.auth,requestUri:c,sessionId:a,tenantId:n||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(r)(o))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UL;case"linkViaPopup":case"linkViaRedirect":return WL;case"reauthViaPopup":case"reauthViaRedirect":return $L;default:A1(this.auth,"internal-error")}}resolve(e){M3(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){M3(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qL=new Q6(2e3,1e4);async function GL(t,e,c){const a=o4(t);V_(t,e,is);const s=hl(a,c);return new H4(a,"signInViaPopup",e,s).executeNotNull()}class H4 extends pl{constructor(e,c,a,s,n){super(e,c,s,n),this.provider=a,this.authWindow=null,this.pollId=null,H4.currentPopupAction&&H4.currentPopupAction.cancel(),H4.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return r2(e,this.auth,"internal-error"),e}async onExecution(){M3(this.filter.length===1,"Popup operations only handle one event");const e=rs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(c=>{this.reject(c)}),this.resolver._isIframeWebStorageSupported(this.auth,c=>{c||this.reject(c3(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(c3(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,H4.currentPopupAction=null}pollUserCancellation(){const e=()=>{var c,a;if(!((a=(c=this.authWindow)===null||c===void 0?void 0:c.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(c3(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qL.get())};e()}}H4.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jL="pendingRedirect",B0=new Map;class KL extends pl{constructor(e,c,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],c,void 0,a),this.eventId=null}async execute(){let e=B0.get(this.auth._key());if(!e){try{const a=await YL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(c){e=()=>Promise.reject(c)}B0.set(this.auth._key(),e)}return this.bypassAuthState||B0.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const c=await this.auth._redirectUserForId(e.eventId);if(c)return this.user=c,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YL(t,e){const c=JL(e),a=QL(t);if(!await a._isAvailable())return!1;const s=await a._get(c)==="true";return await a._remove(c),s}function XL(t,e){B0.set(t._key(),e)}function QL(t){return h3(t._redirectPersistence)}function JL(t){return F0(jL,t.config.apiKey,t.name)}async function ZL(t,e,c=!1){const a=o4(t),s=hl(a,e),i=await new KL(a,s,c).execute();return i&&!c&&(delete i.user._redirectEventId,await a._persistUserIfCurrent(i.user),await a._setRedirectUser(null,e)),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=10*60*1e3;class tb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let c=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(c=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cb(e)||(this.hasHandledPotentialRedirect=!0,c||(this.queuedRedirectEvent=e,c=!0)),c}sendToConsumer(e,c){var a;if(e.error&&!ml(e)){const s=((a=e.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";c.onError(c3(this.auth,s))}else c.onAuthEvent(e)}isEventForConsumer(e,c){const a=c.eventId===null||!!e.eventId&&e.eventId===c.eventId;return c.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Er(e))}saveEventToCache(e){this.cachedEventUids.add(Er(e)),this.lastProcessedEventTime=Date.now()}}function Er(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ml({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ml(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ab(t,e={}){return r4(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nb=/^https?/;async function ib(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ab(t);for(const c of e)try{if(rb(c))return}catch{}A1(t,"unauthorized-domain")}function rb(t){const e=B8(),{protocol:c,hostname:a}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return i.hostname===""&&a===""?c==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):c==="chrome-extension:"&&i.hostname===a}if(!nb.test(c))return!1;if(sb.test(t))return a===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob=new Q6(3e4,6e4);function kr(){const t=a3().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let c=0;c<t.CP.length;c++)t.CP[c]=null}}function lb(t){return new Promise((e,c)=>{var a,s,n;function i(){kr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kr(),c(c3(t,"network-request-failed"))},timeout:ob.get()})}if(!((s=(a=a3().gapi)===null||a===void 0?void 0:a.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((n=a3().gapi)===null||n===void 0)&&n.load)i();else{const r=eL("iframefcb");return a3()[r]=()=>{gapi.load?i():c(c3(t,"network-request-failed"))},el(`${Z_()}?onload=${r}`).catch(o=>c(o))}}).catch(e=>{throw U0=null,e})}let U0=null;function fb(t){return U0=U0||lb(t),U0}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=new Q6(5e3,15e3),db="__/auth/iframe",hb="emulator/auth/iframe",pb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vb(t){const e=t.config;r2(e.authDomain,t,"auth-domain-config-required");const c=e.emulator?ts(e,hb):`https://${t.config.authDomain}/${db}`,a={apiKey:e.apiKey,appName:t.name,v:q4},s=mb.get(t.config.apiHost);s&&(a.eid=s);const n=t._getFrameworks();return n.length&&(a.fw=n.join(",")),`${c}?${Fe(a).slice(1)}`}async function gb(t){const e=await fb(t),c=a3().gapi;return r2(c,t,"internal-error"),e.open({where:document.body,url:vb(t),messageHandlersFilter:c.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pb,dontclear:!0},a=>new Promise(async(s,n)=>{await a.restyle({setHideOnLeave:!1});const i=c3(t,"network-request-failed"),r=a3().setTimeout(()=>{n(i)},ub.get());function o(){a3().clearTimeout(r),s(a)}a.ping(o).then(o,()=>{n(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zb=500,Cb=600,Mb="_blank",Vb="http://localhost";class Ar{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _b(t,e,c,a=zb,s=Cb){const n=Math.max((window.screen.availHeight-s)/2,0).toString(),i=Math.max((window.screen.availWidth-a)/2,0).toString();let r="";const o=Object.assign(Object.assign({},Hb),{width:a.toString(),height:s.toString(),top:n,left:i}),l=o1().toLowerCase();c&&(r=jo(l)?Mb:c),Go(l)&&(e=e||Vb,o.scrollbars="yes");const f=Object.entries(o).reduce((d,[h,m])=>`${d}${h}=${m},`,"");if($_(l)&&r!=="_self")return Lb(e||"",r),new Ar(null);const u=window.open(e||"",r,f);r2(u,t,"popup-blocked");try{u.focus()}catch{}return new Ar(u)}function Lb(t,e){const c=document.createElement("a");c.href=t,c.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),c.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb="__/auth/handler",wb="emulator/auth/handler",yb=encodeURIComponent("fac");async function Pr(t,e,c,a,s,n){r2(t.config.authDomain,t,"auth-domain-config-required"),r2(t.config.apiKey,t,"invalid-api-key");const i={apiKey:t.config.apiKey,appName:t.name,authType:c,redirectUrl:a,v:q4,eventId:s};if(e instanceof is){e.setDefaultLanguage(t.languageCode),i.providerId=e.providerId||"",P8(e.getCustomParameters())||(i.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,u]of Object.entries(n||{}))i[f]=u}if(e instanceof Z6){const f=e.getScopes().filter(u=>u!=="");f.length>0&&(i.scopes=f.join(","))}t.tenantId&&(i.tid=t.tenantId);const r=i;for(const f of Object.keys(r))r[f]===void 0&&delete r[f];const o=await t._getAppCheckToken(),l=o?`#${yb}=${encodeURIComponent(o)}`:"";return`${Sb(t)}?${Fe(r).slice(1)}${l}`}function Sb({config:t}){return t.emulator?ts(t,wb):`https://${t.authDomain}/${bb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="webStorageSupport";class xb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ol,this._completeRedirectFn=ZL,this._overrideRedirectResult=XL}async _openPopup(e,c,a,s){var n;M3((n=this.eventManagers[e._key()])===null||n===void 0?void 0:n.manager,"_initialize() not called before _openPopup()");const i=await Pr(e,c,a,B8(),s);return _b(e,i,rs())}async _openRedirect(e,c,a,s){await this._originValidation(e);const n=await Pr(e,c,a,B8(),s);return EL(n),new Promise(()=>{})}_initialize(e){const c=e._key();if(this.eventManagers[c]){const{manager:s,promise:n}=this.eventManagers[c];return s?Promise.resolve(s):(M3(n,"If manager is not set, promise should be"),n)}const a=this.initAndGetManager(e);return this.eventManagers[c]={promise:a},a.catch(()=>{delete this.eventManagers[c]}),a}async initAndGetManager(e){const c=await gb(e),a=new tb(e);return c.register("authEvent",s=>(r2(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:a.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=c,a}_isIframeWebStorageSupported(e,c){this.iframes[e._key()].send(Xc,{type:Xc},s=>{var n;const i=(n=s==null?void 0:s[0])===null||n===void 0?void 0:n[Xc];i!==void 0&&c(!!i),A1(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const c=e._key();return this.originValidationPromises[c]||(this.originValidationPromises[c]=ib(e)),this.originValidationPromises[c]}get _shouldInitProactively(){return Jo()||as()||Xt()}}const Nb=xb;var Ir="@firebase/auth",Rr="1.6.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const c=this.auth.onIdTokenChanged(a=>{e((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,c),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const c=this.internalListeners.get(e);c&&(this.internalListeners.delete(e),c(),this.updateProactiveRefresh())}assertAuthConfigured(){r2(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kb(t){e4(new C3("auth",(e,{options:c})=>{const a=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),n=e.getProvider("app-check-internal"),{apiKey:i,authDomain:r}=a.options;r2(i&&!i.includes(":"),"invalid-api-key",{appName:a.name});const o={apiKey:i,authDomain:r,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zo(t)},l=new X_(a,s,n,o);return nL(l,c),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,c,a)=>{e.getProvider("auth-internal").initialize()})),e4(new C3("auth-internal",e=>{const c=o4(e.getProvider("auth").getImmediate());return(a=>new Tb(a))(c)},"PRIVATE").setInstantiationMode("EXPLICIT")),E1(Ir,Rr,Eb(t)),E1(Ir,Rr,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab=5*60,Pb=So("authIdTokenMaxAge")||Ab;let Or=null;const Ib=t=>async e=>{const c=e&&await e.getIdTokenResult(),a=c&&(new Date().getTime()-Date.parse(c.issuedAtTime))/1e3;if(a&&a>Pb)return;const s=c==null?void 0:c.token;Or!==s&&(Or=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Rb(t=Yt()){const e=X6(t,"auth");if(e.isInitialized())return e.getImmediate();const c=sL(t,{popupRedirectResolver:Nb,persistence:[BL,xL,ol]}),a=So("authTokenSyncURL");if(a&&a.match(/^\/[^\/].*/)){const n=Ib(a);_L(c,n,()=>n(c.currentUser)),VL(c,i=>n(i))}const s=wo("auth");return s&&iL(c,`http://${s}`),c}function Ob(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Q_({loadJS(t){return new Promise((e,c)=>{const a=document.createElement("script");a.setAttribute("src",t),a.onload=e,a.onerror=s=>{const n=c3("internal-error");n.customData=s,c(n)},a.type="text/javascript",a.charset="UTF-8",Ob().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kb("Browser");var Db="firebase",Fb="10.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */E1(Db,Fb,"app");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,c,a){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=c.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||c.get().then(s=>this.messaging=s,()=>{}),this.appCheck||a.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const c=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return c.error?null:c.token}return null}async getContext(e){const c=await this.getAuthToken(),a=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:c,messagingToken:a,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W8="us-central1";class Ub{constructor(e,c,a,s,n=W8,i){this.app=e,this.fetchImpl=i,this.emulatorOrigin=null,this.contextProvider=new Bb(c,a,s),this.cancelAllRequests=new Promise(r=>{this.deleteService=()=>Promise.resolve(r())});try{const r=new URL(n);this.customDomain=r.origin,this.region=W8}catch{this.customDomain=null,this.region=n}}_delete(){return this.deleteService()}_url(e){const c=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${c}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${c}.cloudfunctions.net/${e}`}}function $b(t,e,c){t.emulatorOrigin=`http://${e}:${c}`}const Dr="@firebase/functions",Fr="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb="auth-internal",qb="app-check-internal",Gb="messaging-internal";function jb(t,e){const c=(a,{instanceIdentifier:s})=>{const n=a.getProvider("app").getImmediate(),i=a.getProvider(Wb),r=a.getProvider(Gb),o=a.getProvider(qb);return new Ub(n,i,r,o,s,t)};e4(new C3(vl,c,"PUBLIC").setMultipleInstances(!0)),E1(Dr,Fr,e),E1(Dr,Fr,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kb(t=Yt(),e=W8){const a=X6(K2(t),vl).getImmediate({identifier:e}),s=Ya("functions");return s&&Yb(a,...s),a}function Yb(t,e,c){$b(K2(t),e,c)}jb(fetch.bind(self));var Br={};const Ur="@firebase/database",$r="1.0.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gl="";function Xb(t){gl=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,c){c==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Z2(c))}get(e){const c=this.domStorage_.getItem(this.prefixedName_(e));return c==null?null:S6(c)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,c){c==null?delete this.cache_[e]:this.cache_[e]=c}get(e){return n3(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Qb(e)}}catch{}return new Jb},z4=Hl("localStorage"),q8=Hl("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=new Qa("@firebase/database"),Zb=function(){let t=1;return function(){return t++}}(),zl=function(t){const e=pV(t),c=new fV;c.update(e);const a=c.digest();return ja.encodeByteArray(a)},t0=function(...t){let e="";for(let c=0;c<t.length;c++){const a=t[c];Array.isArray(a)||a&&typeof a=="object"&&typeof a.length=="number"?e+=t0.apply(null,a):typeof a=="object"?e+=Z2(a):e+=a,e+=" "}return e};let S4=null,Wr=!0;const ew=function(t,e){F(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ve.logLevel=b2.VERBOSE,S4=ve.log.bind(ve),e&&q8.set("logging_enabled",!0)):typeof t=="function"?S4=t:(S4=null,q8.remove("logging_enabled"))},a1=function(...t){if(Wr===!0&&(Wr=!1,S4===null&&q8.get("logging_enabled")===!0&&ew(!0)),S4){const e=t0.apply(null,t);S4(e)}},c0=function(t){return function(...e){a1(t,...e)}},G8=function(...t){const e="FIREBASE INTERNAL ERROR: "+t0(...t);ve.error(e)},V3=function(...t){const e=`FIREBASE FATAL ERROR: ${t0(...t)}`;throw ve.error(e),new Error(e)},u1=function(...t){const e="FIREBASE WARNING: "+t0(...t);ve.warn(e)},tw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&u1("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ls=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},cw=function(t){if(document.readyState==="complete")t();else{let e=!1;const c=function(){if(!document.body){setTimeout(c,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&c()}),window.attachEvent("onload",c))}},Se="[MIN_NAME]",I4="[MAX_NAME]",G4=function(t,e){if(t===e)return 0;if(t===Se||e===I4)return-1;if(e===Se||t===I4)return 1;{const c=qr(t),a=qr(e);return c!==null?a!==null?c-a===0?t.length-e.length:c-a:-1:a!==null?1:t<e?-1:1}},aw=function(t,e){return t===e?0:t<e?-1:1},Qe=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Z2(e))},fs=function(t){if(typeof t!="object"||t===null)return Z2(t);const e=[];for(const a in t)e.push(a);e.sort();let c="{";for(let a=0;a<e.length;a++)a!==0&&(c+=","),c+=Z2(e[a]),c+=":",c+=fs(t[e[a]]);return c+="}",c},Cl=function(t,e){const c=t.length;if(c<=e)return[t];const a=[];for(let s=0;s<c;s+=e)s+e>c?a.push(t.substring(s,c)):a.push(t.substring(s,s+e));return a};function n1(t,e){for(const c in t)t.hasOwnProperty(c)&&e(c,t[c])}const Ml=function(t){F(!ls(t),"Invalid JSON number");const e=11,c=52,a=(1<<e-1)-1;let s,n,i,r,o;t===0?(n=0,i=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-a)?(r=Math.min(Math.floor(Math.log(t)/Math.LN2),a),n=r+a,i=Math.round(t*Math.pow(2,c-r)-Math.pow(2,c))):(n=0,i=Math.round(t/Math.pow(2,1-a-c))));const l=[];for(o=c;o;o-=1)l.push(i%2?1:0),i=Math.floor(i/2);for(o=e;o;o-=1)l.push(n%2?1:0),n=Math.floor(n/2);l.push(s?1:0),l.reverse();const f=l.join("");let u="";for(o=0;o<64;o+=8){let d=parseInt(f.substr(o,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},sw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},nw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function iw(t,e){let c="Unknown Error";t==="too_big"?c="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?c="Client doesn't have permission to access the desired data.":t==="unavailable"&&(c="The service is unavailable");const a=new Error(t+" at "+e._path.toString()+": "+c);return a.code=t.toUpperCase(),a}const rw=new RegExp("^-?(0*)\\d{1,10}$"),ow=-2147483648,lw=2147483647,qr=function(t){if(rw.test(t)){const e=Number(t);if(e>=ow&&e<=lw)return e}return null},Ue=function(t){try{t()}catch(e){setTimeout(()=>{const c=e.stack||"";throw u1("Exception was thrown by user callback.",c),e},Math.floor(0))}},fw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},m6=function(t,e){const c=setTimeout(t,e);return typeof c=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(c):typeof c=="object"&&c.unref&&c.unref(),c};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e,c){this.appName_=e,this.appCheckProvider=c,this.appCheck=c==null?void 0:c.getImmediate({optional:!0}),this.appCheck||c==null||c.get().then(a=>this.appCheck=a)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((c,a)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(c,a):c(null)},0)})}addTokenChangeListener(e){var c;(c=this.appCheckProvider)===null||c===void 0||c.get().then(a=>a.addTokenListener(e))}notifyForInvalidToken(){u1(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,c,a){this.appName_=e,this.firebaseOptions_=c,this.authProvider_=a,this.auth_=null,this.auth_=a.getImmediate({optional:!0}),this.auth_||a.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(c=>c&&c.code==="auth/token-not-initialized"?(a1("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(c)):new Promise((c,a)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(c,a):c(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(c=>c.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(c=>c.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',u1(e)}}class ge{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ge.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us="5",Vl="v",_l="s",Ll="r",bl="f",wl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,yl="ls",Sl="p",j8="ac",xl="websocket",Nl="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,c,a,s,n=!1,i="",r=!1,o=!1){this.secure=c,this.namespace=a,this.webSocketOnly=s,this.nodeAdmin=n,this.persistenceKey=i,this.includeNamespaceInQueryParams=r,this.isUsingEmulator=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=z4.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&z4.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",c=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${c}`}}function hw(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function El(t,e,c){F(typeof e=="string","typeof type must == string"),F(typeof c=="object","typeof params must == object");let a;if(e===xl)a=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Nl)a=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);hw(t)&&(c.ns=t.namespace);const s=[];return n1(c,(n,i)=>{s.push(n+"="+i)}),a+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(){this.counters_={}}incrementCounter(e,c=1){n3(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=c}get(){return YM(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc={},Jc={};function ds(t){const e=t.toString();return Qc[e]||(Qc[e]=new pw),Qc[e]}function mw(t,e){const c=t.toString();return Jc[c]||(Jc[c]=e()),Jc[c]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,c){this.closeAfterResponse=e,this.onClose=c,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,c){for(this.pendingResponses[e]=c;this.pendingResponses[this.currentResponseNum];){const a=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<a.length;++s)a[s]&&Ue(()=>{this.onMessage_(a[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="start",gw="close",Hw="pLPCommand",zw="pRTLPCB",kl="id",Al="pw",Pl="ser",Cw="cb",Mw="seg",Vw="ts",_w="d",Lw="dframe",Il=1870,Rl=30,bw=Il-Rl,ww=25e3,yw=3e4;class ne{constructor(e,c,a,s,n,i,r){this.connId=e,this.repoInfo=c,this.applicationId=a,this.appCheckToken=s,this.authToken=n,this.transportSessionId=i,this.lastSessionId=r,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=c0(e),this.stats_=ds(c),this.urlFn=o=>(this.appCheckToken&&(o[j8]=this.appCheckToken),El(c,Nl,o))}open(e,c){this.curSegmentNum=0,this.onDisconnect_=c,this.myPacketOrderer=new vw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(yw)),cw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hs((...n)=>{const[i,r,o,l,f]=n;if(this.incrementIncomingBytes_(n),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,i===Gr)this.id=r,this.password=o;else if(i===gw)r?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(r,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+i)},(...n)=>{const[i,r]=n;this.incrementIncomingBytes_(n),this.myPacketOrderer.handleResponse(i,r)},()=>{this.onClosed_()},this.urlFn);const a={};a[Gr]="t",a[Pl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(a[Cw]=this.scriptTagHolder.uniqueCallbackIdentifier),a[Vl]=us,this.transportSessionId&&(a[_l]=this.transportSessionId),this.lastSessionId&&(a[yl]=this.lastSessionId),this.applicationId&&(a[Sl]=this.applicationId),this.appCheckToken&&(a[j8]=this.appCheckToken),typeof location<"u"&&location.hostname&&wl.test(location.hostname)&&(a[Ll]=bl);const s=this.urlFn(a);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ne.forceAllow_=!0}static forceDisallow(){ne.forceDisallow_=!0}static isAvailable(){return ne.forceAllow_?!0:!ne.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!sw()&&!nw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const c=Z2(e);this.bytesSent+=c.length,this.stats_.incrementCounter("bytes_sent",c.length);const a=Lo(c),s=Cl(a,bw);for(let n=0;n<s.length;n++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[n]),this.curSegmentNum++}addDisconnectPingFrame(e,c){this.myDisconnFrame=document.createElement("iframe");const a={};a[Lw]="t",a[kl]=e,a[Al]=c,this.myDisconnFrame.src=this.urlFn(a),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const c=Z2(e).length;this.bytesReceived+=c,this.stats_.incrementCounter("bytes_received",c)}}class hs{constructor(e,c,a,s){this.onDisconnect=a,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Zb(),window[Hw+this.uniqueCallbackIdentifier]=e,window[zw+this.uniqueCallbackIdentifier]=c,this.myIFrame=hs.createIFrame_();let n="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(n='<script>document.domain="'+document.domain+'";<\/script>');const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(r){a1("frame writing exception"),r.stack&&a1(r.stack),a1(r)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||a1("No IE domain setting required")}catch{const a=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+a+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,c){for(this.myID=e,this.myPW=c,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[kl]=this.myID,e[Al]=this.myPW,e[Pl]=this.currentSerial;let c=this.urlFn(e),a="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Rl+a.length<=Il;){const i=this.pendingSegs.shift();a=a+"&"+Mw+s+"="+i.seg+"&"+Vw+s+"="+i.ts+"&"+_w+s+"="+i.d,s++}return c=c+a,this.addLongPollTag_(c,this.currentSerial),!0}else return!1}enqueueSegment(e,c,a){this.pendingSegs.push({seg:e,ts:c,d:a}),this.alive&&this.newRequest_()}addLongPollTag_(e,c){this.outstandingRequests.add(c);const a=()=>{this.outstandingRequests.delete(c),this.newRequest_()},s=setTimeout(a,Math.floor(ww)),n=()=>{clearTimeout(s),a()};this.addTag(e,n)}addTag(e,c){setTimeout(()=>{try{if(!this.sendNewPolls)return;const a=this.myIFrame.doc.createElement("script");a.type="text/javascript",a.async=!0,a.src=e,a.onload=a.onreadystatechange=function(){const s=a.readyState;(!s||s==="loaded"||s==="complete")&&(a.onload=a.onreadystatechange=null,a.parentNode&&a.parentNode.removeChild(a),c())},a.onerror=()=>{a1("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(a)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=16384,xw=45e3;let ot=null;typeof MozWebSocket<"u"?ot=MozWebSocket:typeof WebSocket<"u"&&(ot=WebSocket);class D1{constructor(e,c,a,s,n,i,r){this.connId=e,this.applicationId=a,this.appCheckToken=s,this.authToken=n,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=c0(this.connId),this.stats_=ds(c),this.connURL=D1.connectionURL_(c,i,r,s,a),this.nodeAdmin=c.nodeAdmin}static connectionURL_(e,c,a,s,n){const i={};return i[Vl]=us,typeof location<"u"&&location.hostname&&wl.test(location.hostname)&&(i[Ll]=bl),c&&(i[_l]=c),a&&(i[yl]=a),s&&(i[j8]=s),n&&(i[Sl]=n),El(e,xl,i)}open(e,c){this.onDisconnect=c,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,z4.set("previous_websocket_failure",!0);try{let a;To(),this.mySock=new ot(this.connURL,[],a)}catch(a){this.log_("Error instantiating WebSocket.");const s=a.message||a.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=a=>{this.handleIncomingFrame(a)},this.mySock.onerror=a=>{this.log_("WebSocket error.  Closing connection.");const s=a.message||a.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){D1.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const c=/Android ([0-9]{0,}\.[0-9]{0,})/,a=navigator.userAgent.match(c);a&&a.length>1&&parseFloat(a[1])<4.4&&(e=!0)}return!e&&ot!==null&&!D1.forceDisallow_}static previouslyFailed(){return z4.isInMemoryStorage||z4.get("previous_websocket_failure")===!0}markConnectionHealthy(){z4.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const c=this.frames.join("");this.frames=null;const a=S6(c);this.onMessage(a)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(F(this.frames===null,"We already have a frame buffer"),e.length<=6){const c=Number(e);if(!isNaN(c))return this.handleNewFrameCount_(c),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const c=e.data;if(this.bytesReceived+=c.length,this.stats_.incrementCounter("bytes_received",c.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(c);else{const a=this.extractFrameCount_(c);a!==null&&this.appendFrame_(a)}}send(e){this.resetKeepAlive();const c=Z2(e);this.bytesSent+=c.length,this.stats_.incrementCounter("bytes_sent",c.length);const a=Cl(c,Sw);a.length>1&&this.sendString_(String(a.length));for(let s=0;s<a.length;s++)this.sendString_(a[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xw))}sendString_(e){try{this.mySock.send(e)}catch(c){this.log_("Exception thrown from WebSocket.send():",c.message||c.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}D1.responsesRequiredToBeHealthy=2;D1.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k6{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ne,D1]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const c=D1&&D1.isAvailable();let a=c&&!D1.previouslyFailed();if(e.webSocketOnly&&(c||u1("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),a=!0),a)this.transports_=[D1];else{const s=this.transports_=[];for(const n of k6.ALL_TRANSPORTS)n&&n.isAvailable()&&s.push(n);k6.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}k6.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=6e4,Tw=5e3,Ew=10*1024,kw=100*1024,Zc="t",jr="d",Aw="s",Kr="r",Pw="e",Yr="o",Xr="a",Qr="n",Jr="p",Iw="h";class Rw{constructor(e,c,a,s,n,i,r,o,l,f){this.id=e,this.repoInfo_=c,this.applicationId_=a,this.appCheckToken_=s,this.authToken_=n,this.onMessage_=i,this.onReady_=r,this.onDisconnect_=o,this.onKill_=l,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=c0("c:"+this.id+":"),this.transportManager_=new k6(c),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const c=this.connReceiver_(this.conn_),a=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(c,a)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=m6(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>kw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ew?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return c=>{e===this.conn_?this.onConnectionLost_(c):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return c=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(c):e===this.secondaryConn_?this.onSecondaryMessageReceived_(c):this.log_("message on old connection"))}}sendRequest(e){const c={t:"d",d:e};this.sendData_(c)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zc in e){const c=e[Zc];c===Xr?this.upgradeIfSecondaryHealthy_():c===Kr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):c===Yr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const c=Qe("t",e),a=Qe("d",e);if(c==="c")this.onSecondaryControl_(a);else if(c==="d")this.pendingDataMessages.push(a);else throw new Error("Unknown protocol layer: "+c)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Jr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Qr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const c=Qe("t",e),a=Qe("d",e);c==="c"?this.onControl_(a):c==="d"&&this.onDataMessage_(a)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const c=Qe(Zc,e);if(jr in e){const a=e[jr];if(c===Iw){const s=Object.assign({},a);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(c===Qr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else c===Aw?this.onConnectionShutdown_(a):c===Kr?this.onReset_(a):c===Pw?G8("Server Error: "+a):c===Yr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):G8("Unknown control packet command: "+c)}}onHandshake_(e){const c=e.ts,a=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,c),us!==a&&u1("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const c=this.connReceiver_(this.secondaryConn_),a=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(c,a),m6(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Nw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,c){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(c,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):m6(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Tw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Jr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(z4.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{put(e,c,a,s){}merge(e,c,a,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,c,a){}onDisconnectMerge(e,c,a){}onDisconnectCancel(e,c){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e){this.allowedEvents_=e,this.listeners_={},F(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...c){if(Array.isArray(this.listeners_[e])){const a=[...this.listeners_[e]];for(let s=0;s<a.length;s++)a[s].callback.apply(a[s].context,c)}}on(e,c,a){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:c,context:a});const s=this.getInitialEvent(e);s&&c.apply(a,s)}off(e,c,a){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let n=0;n<s.length;n++)if(s[n].callback===c&&(!a||a===s[n].context)){s.splice(n,1);return}}validateEventType_(e){F(this.allowedEvents_.find(c=>c===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends Dl{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Xa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new lt}getInitialEvent(e){return F(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=32,e5=768;class w2{constructor(e,c){if(c===void 0){this.pieces_=e.split("/");let a=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[a]=this.pieces_[s],a++);this.pieces_.length=a,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=c}toString(){let e="";for(let c=this.pieceNum_;c<this.pieces_.length;c++)this.pieces_[c]!==""&&(e+="/"+this.pieces_[c]);return e||"/"}}function M2(){return new w2("")}function m2(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function t4(t){return t.pieces_.length-t.pieceNum_}function T2(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new w2(t.pieces_,e)}function ps(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Ow(t){let e="";for(let c=t.pieceNum_;c<t.pieces_.length;c++)t.pieces_[c]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[c])));return e||"/"}function A6(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Fl(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let c=t.pieceNum_;c<t.pieces_.length-1;c++)e.push(t.pieces_[c]);return new w2(e,0)}function F2(t,e){const c=[];for(let a=t.pieceNum_;a<t.pieces_.length;a++)c.push(t.pieces_[a]);if(e instanceof w2)for(let a=e.pieceNum_;a<e.pieces_.length;a++)c.push(e.pieces_[a]);else{const a=e.split("/");for(let s=0;s<a.length;s++)a[s].length>0&&c.push(a[s])}return new w2(c,0)}function g2(t){return t.pieceNum_>=t.pieces_.length}function v1(t,e){const c=m2(t),a=m2(e);if(c===null)return e;if(c===a)return v1(T2(t),T2(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Dw(t,e){const c=A6(t,0),a=A6(e,0);for(let s=0;s<c.length&&s<a.length;s++){const n=G4(c[s],a[s]);if(n!==0)return n}return c.length===a.length?0:c.length<a.length?-1:1}function ms(t,e){if(t4(t)!==t4(e))return!1;for(let c=t.pieceNum_,a=e.pieceNum_;c<=t.pieces_.length;c++,a++)if(t.pieces_[c]!==e.pieces_[a])return!1;return!0}function N1(t,e){let c=t.pieceNum_,a=e.pieceNum_;if(t4(t)>t4(e))return!1;for(;c<t.pieces_.length;){if(t.pieces_[c]!==e.pieces_[a])return!1;++c,++a}return!0}class Fw{constructor(e,c){this.errorPrefix_=c,this.parts_=A6(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let a=0;a<this.parts_.length;a++)this.byteLength_+=Kt(this.parts_[a]);Bl(this)}}function Bw(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Kt(e),Bl(t)}function Uw(t){const e=t.parts_.pop();t.byteLength_-=Kt(e),t.parts_.length>0&&(t.byteLength_-=1)}function Bl(t){if(t.byteLength_>e5)throw new Error(t.errorPrefix_+"has a key path longer than "+e5+" bytes ("+t.byteLength_+").");if(t.parts_.length>Zr)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Zr+") or object contains a cycle "+d4(t))}function d4(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends Dl{constructor(){super(["visible"]);let e,c;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(c="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(c="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(c="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(c="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,c&&document.addEventListener(c,()=>{const a=!document[e];a!==this.visible_&&(this.visible_=a,this.trigger("visible",a))},!1)}static getInstance(){return new vs}getInitialEvent(e){return F(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=1e3,$w=60*5*1e3,t5=30*1e3,Ww=1.3,qw=3e4,Gw="server_kill",c5=3;class g3 extends Ol{constructor(e,c,a,s,n,i,r,o){if(super(),this.repoInfo_=e,this.applicationId_=c,this.onDataUpdate_=a,this.onConnectStatus_=s,this.onServerInfoUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.authOverride_=o,this.id=g3.nextPersistentConnectionId_++,this.log_=c0("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Je,this.maxReconnectDelay_=$w,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,o&&!To())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&lt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,c,a){const s=++this.requestNumber_,n={r:s,a:e,b:c};this.log_(Z2(n)),F(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(n),a&&(this.requestCBHash_[s]=a)}get(e){this.initConnection_();const c=new K6,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:i=>{const r=i.d;i.s==="ok"?c.resolve(r):c.reject(r)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const n=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(n),c.promise}listen(e,c,a,s){this.initConnection_();const n=e._queryIdentifier,i=e._path.toString();this.log_("Listen called for "+i+" "+n),this.listens.has(i)||this.listens.set(i,new Map),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),F(!this.listens.get(i).has(n),"listen() called twice for same path/queryId.");const r={onComplete:s,hashFn:c,query:e,tag:a};this.listens.get(i).set(n,r),this.connected_&&this.sendListen_(r)}sendGet_(e){const c=this.outstandingGets_[e];this.sendRequest("g",c.request,a=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),c.onComplete&&c.onComplete(a)})}sendListen_(e){const c=e.query,a=c._path.toString(),s=c._queryIdentifier;this.log_("Listen on "+a+" for "+s);const n={p:a},i="q";e.tag&&(n.q=c._queryObject,n.t=e.tag),n.h=e.hashFn(),this.sendRequest(i,n,r=>{const o=r.d,l=r.s;g3.warnOnListenWarnings_(o,c),(this.listens.get(a)&&this.listens.get(a).get(s))===e&&(this.log_("listen response",r),l!=="ok"&&this.removeListen_(a,s),e.onComplete&&e.onComplete(l,o))})}static warnOnListenWarnings_(e,c){if(e&&typeof e=="object"&&n3(e,"w")){const a=ye(e,"w");if(Array.isArray(a)&&~a.indexOf("no_index")){const s='".indexOn": "'+c._queryParams.getIndex().toString()+'"',n=c._path.toString();u1(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||lV(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=t5)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,c=oV(e)?"auth":"gauth",a={cred:e};this.authOverride_===null?a.noauth=!0:typeof this.authOverride_=="object"&&(a.authvar=this.authOverride_),this.sendRequest(c,a,s=>{const n=s.s,i=s.d||"error";this.authToken_===e&&(n==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const c=e.s,a=e.d||"error";c==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(c,a)})}unlisten(e,c){const a=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+a+" "+s),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(a,s)&&this.connected_&&this.sendUnlisten_(a,s,e._queryObject,c)}sendUnlisten_(e,c,a,s){this.log_("Unlisten on "+e+" for "+c);const n={p:e},i="n";s&&(n.q=a,n.t=s),this.sendRequest(i,n)}onDisconnectPut(e,c,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,c,a):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:c,onComplete:a})}onDisconnectMerge(e,c,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,c,a):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:c,onComplete:a})}onDisconnectCancel(e,c){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,c):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:c})}sendOnDisconnect_(e,c,a,s){const n={p:c,d:a};this.log_("onDisconnect "+e,n),this.sendRequest(e,n,i=>{s&&setTimeout(()=>{s(i.s,i.d)},Math.floor(0))})}put(e,c,a,s){this.putInternal("p",e,c,a,s)}merge(e,c,a,s){this.putInternal("m",e,c,a,s)}putInternal(e,c,a,s,n){this.initConnection_();const i={p:c,d:a};n!==void 0&&(i.h=n),this.outstandingPuts_.push({action:e,request:i,onComplete:s}),this.outstandingPutCount_++;const r=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(r):this.log_("Buffering put: "+c)}sendPut_(e){const c=this.outstandingPuts_[e].action,a=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(c,a,n=>{this.log_(c+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(n.s,n.d)})}reportStats(e){if(this.connected_){const c={c:e};this.log_("reportStats",c),this.sendRequest("s",c,a=>{if(a.s!=="ok"){const n=a.d;this.log_("reportStats","Error sending stats: "+n)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Z2(e));const c=e.r,a=this.requestCBHash_[c];a&&(delete this.requestCBHash_[c],a(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,c){this.log_("handleServerMessage",e,c),e==="d"?this.onDataUpdate_(c.p,c.d,!1,c.t):e==="m"?this.onDataUpdate_(c.p,c.d,!0,c.t):e==="c"?this.onListenRevoked_(c.p,c.q):e==="ac"?this.onAuthRevoked_(c.s,c.d):e==="apc"?this.onAppCheckRevoked_(c.s,c.d):e==="sd"?this.onSecurityDebugPacket_(c):G8("Unrecognized action received from server: "+Z2(e)+`
Are you using the latest client?`)}onReady_(e,c){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=c,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){F(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Je,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Je,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>qw&&(this.reconnectDelay_=Je),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let c=Math.max(0,this.reconnectDelay_-e);c=Math.random()*c,this.log_("Trying to reconnect in "+c+"ms"),this.scheduleConnect_(c),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ww)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),c=this.onReady_.bind(this),a=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+g3.nextConnectionId_++,n=this.lastSessionId;let i=!1,r=null;const o=function(){r?r.close():(i=!0,a())},l=function(u){F(r,"sendRequest call when we're not connected not allowed."),r.sendRequest(u)};this.realtime_={close:o,sendRequest:l};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);i?a1("getToken() completed but was canceled"):(a1("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,r=new Rw(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,c,a,h=>{u1(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(Gw)},n))}catch(u){this.log_("Failed to get token: "+u),i||(this.repoInfo_.nodeAdmin&&u1(u),o())}}}interrupt(e){a1("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){a1("Resuming connection for reason: "+e),delete this.interruptReasons_[e],P8(this.interruptReasons_)&&(this.reconnectDelay_=Je,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const c=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:c})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const c=this.outstandingPuts_[e];c&&"h"in c.request&&c.queued&&(c.onComplete&&c.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,c){let a;c?a=c.map(n=>fs(n)).join("$"):a="default";const s=this.removeListen_(e,a);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,c){const a=new w2(e).toString();let s;if(this.listens.has(a)){const n=this.listens.get(a);s=n.get(c),n.delete(c),n.size===0&&this.listens.delete(a)}else s=void 0;return s}onAuthRevoked_(e,c){a1("Auth token revoked: "+e+"/"+c),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=c5&&(this.reconnectDelay_=t5,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,c){a1("App check token revoked: "+e+"/"+c),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=c5&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const c of e.values())this.sendListen_(c);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let c="js";e["sdk."+c+"."+gl.replace(/\./g,"-")]=1,Xa()?e["framework.cordova"]=1:No()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=lt.getInstance().currentlyOnline();return P8(this.interruptReasons_)&&e}}g3.nextPersistentConnectionId_=0;g3.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e,c){this.name=e,this.node=c}static Wrap(e,c){return new v2(e,c)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,c){const a=new v2(Se,e),s=new v2(Se,c);return this.compare(a,s)!==0}minPost(){return v2.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C0;class Ul extends ec{static get __EMPTY_NODE(){return C0}static set __EMPTY_NODE(e){C0=e}compare(e,c){return G4(e.name,c.name)}isDefinedOn(e){throw De("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,c){return!1}minPost(){return v2.MIN}maxPost(){return new v2(I4,C0)}makePost(e,c){return F(typeof e=="string","KeyIndex indexValue must always be a string."),new v2(e,C0)}toString(){return".key"}}const He=new Ul;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e,c,a,s,n=null){this.isReverse_=s,this.resultGenerator_=n,this.nodeStack_=[];let i=1;for(;!e.isEmpty();)if(e=e,i=c?a(e.key,c):1,s&&(i*=-1),i<0)this.isReverse_?e=e.left:e=e.right;else if(i===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),c;if(this.resultGenerator_?c=this.resultGenerator_(e.key,e.value):c={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return c}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class X2{constructor(e,c,a,s,n){this.key=e,this.value=c,this.color=a??X2.RED,this.left=s??g1.EMPTY_NODE,this.right=n??g1.EMPTY_NODE}copy(e,c,a,s,n){return new X2(e??this.key,c??this.value,a??this.color,s??this.left,n??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,c,a){let s=this;const n=a(e,s.key);return n<0?s=s.copy(null,null,null,s.left.insert(e,c,a),null):n===0?s=s.copy(null,c,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,c,a)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return g1.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,c){let a,s;if(a=this,c(e,a.key)<0)!a.left.isEmpty()&&!a.left.isRed_()&&!a.left.left.isRed_()&&(a=a.moveRedLeft_()),a=a.copy(null,null,null,a.left.remove(e,c),null);else{if(a.left.isRed_()&&(a=a.rotateRight_()),!a.right.isEmpty()&&!a.right.isRed_()&&!a.right.left.isRed_()&&(a=a.moveRedRight_()),c(e,a.key)===0){if(a.right.isEmpty())return g1.EMPTY_NODE;s=a.right.min_(),a=a.copy(s.key,s.value,null,null,a.right.removeMin_())}a=a.copy(null,null,null,null,a.right.remove(e,c))}return a.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,X2.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,X2.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),c=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,c)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}X2.RED=!0;X2.BLACK=!1;class jw{copy(e,c,a,s,n){return this}insert(e,c,a){return new X2(e,c,null)}remove(e,c){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class g1{constructor(e,c=g1.EMPTY_NODE){this.comparator_=e,this.root_=c}insert(e,c){return new g1(this.comparator_,this.root_.insert(e,c,this.comparator_).copy(null,null,X2.BLACK,null,null))}remove(e){return new g1(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,X2.BLACK,null,null))}get(e){let c,a=this.root_;for(;!a.isEmpty();){if(c=this.comparator_(e,a.key),c===0)return a.value;c<0?a=a.left:c>0&&(a=a.right)}return null}getPredecessorKey(e){let c,a=this.root_,s=null;for(;!a.isEmpty();)if(c=this.comparator_(e,a.key),c===0){if(a.left.isEmpty())return s?s.key:null;for(a=a.left;!a.right.isEmpty();)a=a.right;return a.key}else c<0?a=a.left:c>0&&(s=a,a=a.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new M0(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,c){return new M0(this.root_,e,this.comparator_,!1,c)}getReverseIteratorFrom(e,c){return new M0(this.root_,e,this.comparator_,!0,c)}getReverseIterator(e){return new M0(this.root_,null,this.comparator_,!0,e)}}g1.EMPTY_NODE=new jw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(t,e){return G4(t.name,e.name)}function gs(t,e){return G4(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let K8;function Yw(t){K8=t}const $l=function(t){return typeof t=="number"?"number:"+Ml(t):"string:"+t},Wl=function(t){if(t.isLeafNode()){const e=t.val();F(typeof e=="string"||typeof e=="number"||typeof e=="object"&&n3(e,".sv"),"Priority must be a string or number.")}else F(t===K8||t.isEmpty(),"priority of unexpected type.");F(t===K8||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a5;class Y2{constructor(e,c=Y2.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=c,this.lazyHash_=null,F(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Wl(this.priorityNode_)}static set __childrenNodeConstructor(e){a5=e}static get __childrenNodeConstructor(){return a5}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Y2(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Y2.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return g2(e)?this:m2(e)===".priority"?this.priorityNode_:Y2.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,c){return null}updateImmediateChild(e,c){return e===".priority"?this.updatePriority(c):c.isEmpty()&&e!==".priority"?this:Y2.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,c).updatePriority(this.priorityNode_)}updateChild(e,c){const a=m2(e);return a===null?c:c.isEmpty()&&a!==".priority"?this:(F(a!==".priority"||t4(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(a,Y2.__childrenNodeConstructor.EMPTY_NODE.updateChild(T2(e),c)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,c){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+$l(this.priorityNode_.val())+":");const c=typeof this.value_;e+=c+":",c==="number"?e+=Ml(this.value_):e+=this.value_,this.lazyHash_=zl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Y2.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Y2.__childrenNodeConstructor?-1:(F(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const c=typeof e.value_,a=typeof this.value_,s=Y2.VALUE_TYPE_ORDER.indexOf(c),n=Y2.VALUE_TYPE_ORDER.indexOf(a);return F(s>=0,"Unknown leaf type: "+c),F(n>=0,"Unknown leaf type: "+a),s===n?a==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:n-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const c=e;return this.value_===c.value_&&this.priorityNode_.equals(c.priorityNode_)}else return!1}}Y2.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ql,Gl;function Xw(t){ql=t}function Qw(t){Gl=t}class Jw extends ec{compare(e,c){const a=e.node.getPriority(),s=c.node.getPriority(),n=a.compareTo(s);return n===0?G4(e.name,c.name):n}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,c){return!e.getPriority().equals(c.getPriority())}minPost(){return v2.MIN}maxPost(){return new v2(I4,new Y2("[PRIORITY-POST]",Gl))}makePost(e,c){const a=ql(e);return new v2(c,new Y2("[PRIORITY-POST]",a))}toString(){return".priority"}}const B2=new Jw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=Math.log(2);class ey{constructor(e){const c=n=>parseInt(Math.log(n)/Zw,10),a=n=>parseInt(Array(n+1).join("1"),2);this.count=c(e+1),this.current_=this.count-1;const s=a(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ft=function(t,e,c,a){t.sort(e);const s=function(o,l){const f=l-o;let u,d;if(f===0)return null;if(f===1)return u=t[o],d=c?c(u):u,new X2(d,u.node,X2.BLACK,null,null);{const h=parseInt(f/2,10)+o,m=s(o,h),v=s(h+1,l);return u=t[h],d=c?c(u):u,new X2(d,u.node,X2.BLACK,m,v)}},n=function(o){let l=null,f=null,u=t.length;const d=function(m,v){const M=u-m,H=u;u-=m;const p=s(M+1,H),g=t[M],_=c?c(g):g;h(new X2(_,g.node,v,null,p))},h=function(m){l?(l.left=m,l=m):(f=m,l=m)};for(let m=0;m<o.count;++m){const v=o.nextBitIsOne(),M=Math.pow(2,o.count-(m+1));v?d(M,X2.BLACK):(d(M,X2.BLACK),d(M,X2.RED))}return f},i=new ey(t.length),r=n(i);return new g1(a||e,r)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e8;const Z4={};class p3{constructor(e,c){this.indexes_=e,this.indexSet_=c}static get Default(){return F(Z4&&B2,"ChildrenNode.ts has not been loaded"),e8=e8||new p3({".priority":Z4},{".priority":B2}),e8}get(e){const c=ye(this.indexes_,e);if(!c)throw new Error("No index defined for "+e);return c instanceof g1?c:null}hasIndex(e){return n3(this.indexSet_,e.toString())}addIndex(e,c){F(e!==He,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const a=[];let s=!1;const n=c.getIterator(v2.Wrap);let i=n.getNext();for(;i;)s=s||e.isDefinedOn(i.node),a.push(i),i=n.getNext();let r;s?r=ft(a,e.getCompare()):r=Z4;const o=e.toString(),l=Object.assign({},this.indexSet_);l[o]=e;const f=Object.assign({},this.indexes_);return f[o]=r,new p3(f,l)}addToIndexes(e,c){const a=et(this.indexes_,(s,n)=>{const i=ye(this.indexSet_,n);if(F(i,"Missing index implementation for "+n),s===Z4)if(i.isDefinedOn(e.node)){const r=[],o=c.getIterator(v2.Wrap);let l=o.getNext();for(;l;)l.name!==e.name&&r.push(l),l=o.getNext();return r.push(e),ft(r,i.getCompare())}else return Z4;else{const r=c.get(e.name);let o=s;return r&&(o=o.remove(new v2(e.name,r))),o.insert(e,e.node)}});return new p3(a,this.indexSet_)}removeFromIndexes(e,c){const a=et(this.indexes_,s=>{if(s===Z4)return s;{const n=c.get(e.name);return n?s.remove(new v2(e.name,n)):s}});return new p3(a,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ze;class s2{constructor(e,c,a){this.children_=e,this.priorityNode_=c,this.indexMap_=a,this.lazyHash_=null,this.priorityNode_&&Wl(this.priorityNode_),this.children_.isEmpty()&&F(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ze||(Ze=new s2(new g1(gs),null,p3.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ze}updatePriority(e){return this.children_.isEmpty()?this:new s2(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const c=this.children_.get(e);return c===null?Ze:c}}getChild(e){const c=m2(e);return c===null?this:this.getImmediateChild(c).getChild(T2(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,c){if(F(c,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(c);{const a=new v2(e,c);let s,n;c.isEmpty()?(s=this.children_.remove(e),n=this.indexMap_.removeFromIndexes(a,this.children_)):(s=this.children_.insert(e,c),n=this.indexMap_.addToIndexes(a,this.children_));const i=s.isEmpty()?Ze:this.priorityNode_;return new s2(s,i,n)}}updateChild(e,c){const a=m2(e);if(a===null)return c;{F(m2(e)!==".priority"||t4(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(a).updateChild(T2(e),c);return this.updateImmediateChild(a,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const c={};let a=0,s=0,n=!0;if(this.forEachChild(B2,(i,r)=>{c[i]=r.val(e),a++,n&&s2.INTEGER_REGEXP_.test(i)?s=Math.max(s,Number(i)):n=!1}),!e&&n&&s<2*a){const i=[];for(const r in c)i[r]=c[r];return i}else return e&&!this.getPriority().isEmpty()&&(c[".priority"]=this.getPriority().val()),c}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+$l(this.getPriority().val())+":"),this.forEachChild(B2,(c,a)=>{const s=a.hash();s!==""&&(e+=":"+c+":"+s)}),this.lazyHash_=e===""?"":zl(e)}return this.lazyHash_}getPredecessorChildName(e,c,a){const s=this.resolveIndex_(a);if(s){const n=s.getPredecessorKey(new v2(e,c));return n?n.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const c=this.resolveIndex_(e);if(c){const a=c.minKey();return a&&a.name}else return this.children_.minKey()}getFirstChild(e){const c=this.getFirstChildName(e);return c?new v2(c,this.children_.get(c)):null}getLastChildName(e){const c=this.resolveIndex_(e);if(c){const a=c.maxKey();return a&&a.name}else return this.children_.maxKey()}getLastChild(e){const c=this.getLastChildName(e);return c?new v2(c,this.children_.get(c)):null}forEachChild(e,c){const a=this.resolveIndex_(e);return a?a.inorderTraversal(s=>c(s.name,s.node)):this.children_.inorderTraversal(c)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,c){const a=this.resolveIndex_(c);if(a)return a.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,v2.Wrap);let n=s.peek();for(;n!=null&&c.compare(n,e)<0;)s.getNext(),n=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,c){const a=this.resolveIndex_(c);if(a)return a.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,v2.Wrap);let n=s.peek();for(;n!=null&&c.compare(n,e)>0;)s.getNext(),n=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===a0?-1:0}withIndex(e){if(e===He||this.indexMap_.hasIndex(e))return this;{const c=this.indexMap_.addIndex(e,this.children_);return new s2(this.children_,this.priorityNode_,c)}}isIndexed(e){return e===He||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const c=e;if(this.getPriority().equals(c.getPriority()))if(this.children_.count()===c.children_.count()){const a=this.getIterator(B2),s=c.getIterator(B2);let n=a.getNext(),i=s.getNext();for(;n&&i;){if(n.name!==i.name||!n.node.equals(i.node))return!1;n=a.getNext(),i=s.getNext()}return n===null&&i===null}else return!1;else return!1}}resolveIndex_(e){return e===He?null:this.indexMap_.get(e.toString())}}s2.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ty extends s2{constructor(){super(new g1(gs),s2.EMPTY_NODE,p3.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return s2.EMPTY_NODE}isEmpty(){return!1}}const a0=new ty;Object.defineProperties(v2,{MIN:{value:new v2(Se,s2.EMPTY_NODE)},MAX:{value:new v2(I4,a0)}});Ul.__EMPTY_NODE=s2.EMPTY_NODE;Y2.__childrenNodeConstructor=s2;Yw(a0);Qw(a0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=!0;function Q2(t,e=null){if(t===null)return s2.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),F(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const c=t;return new Y2(c,Q2(e))}if(!(t instanceof Array)&&cy){const c=[];let a=!1;if(n1(t,(i,r)=>{if(i.substring(0,1)!=="."){const o=Q2(r);o.isEmpty()||(a=a||!o.getPriority().isEmpty(),c.push(new v2(i,o)))}}),c.length===0)return s2.EMPTY_NODE;const n=ft(c,Kw,i=>i.name,gs);if(a){const i=ft(c,B2.getCompare());return new s2(n,Q2(e),new p3({".priority":i},{".priority":B2}))}else return new s2(n,Q2(e),p3.Default)}else{let c=s2.EMPTY_NODE;return n1(t,(a,s)=>{if(n3(t,a)&&a.substring(0,1)!=="."){const n=Q2(s);(n.isLeafNode()||!n.isEmpty())&&(c=c.updateImmediateChild(a,n))}}),c.updatePriority(Q2(e))}}Xw(Q2);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay extends ec{constructor(e){super(),this.indexPath_=e,F(!g2(e)&&m2(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,c){const a=this.extractChild(e.node),s=this.extractChild(c.node),n=a.compareTo(s);return n===0?G4(e.name,c.name):n}makePost(e,c){const a=Q2(e),s=s2.EMPTY_NODE.updateChild(this.indexPath_,a);return new v2(c,s)}maxPost(){const e=s2.EMPTY_NODE.updateChild(this.indexPath_,a0);return new v2(I4,e)}toString(){return A6(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy extends ec{compare(e,c){const a=e.node.compareTo(c.node);return a===0?G4(e.name,c.name):a}isDefinedOn(e){return!0}indexedValueChanged(e,c){return!e.equals(c)}minPost(){return v2.MIN}maxPost(){return v2.MAX}makePost(e,c){const a=Q2(e);return new v2(c,a)}toString(){return".value"}}const ny=new sy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(t){return{type:"value",snapshotNode:t}}function xe(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function P6(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function I6(t,e,c){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:c}}function iy(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.index_=e}updateChild(e,c,a,s,n,i){F(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const r=e.getImmediateChild(c);return r.getChild(s).equals(a.getChild(s))&&r.isEmpty()===a.isEmpty()||(i!=null&&(a.isEmpty()?e.hasChild(c)?i.trackChildChange(P6(c,r)):F(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):r.isEmpty()?i.trackChildChange(xe(c,a)):i.trackChildChange(I6(c,a,r))),e.isLeafNode()&&a.isEmpty())?e:e.updateImmediateChild(c,a).withIndex(this.index_)}updateFullNode(e,c,a){return a!=null&&(e.isLeafNode()||e.forEachChild(B2,(s,n)=>{c.hasChild(s)||a.trackChildChange(P6(s,n))}),c.isLeafNode()||c.forEachChild(B2,(s,n)=>{if(e.hasChild(s)){const i=e.getImmediateChild(s);i.equals(n)||a.trackChildChange(I6(s,n,i))}else a.trackChildChange(xe(s,n))})),c.withIndex(this.index_)}updatePriority(e,c){return e.isEmpty()?s2.EMPTY_NODE:e.updatePriority(c)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R6{constructor(e){this.indexedFilter_=new Hs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=R6.getStartPost_(e),this.endPost_=R6.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const c=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,a=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return c&&a}updateChild(e,c,a,s,n,i){return this.matches(new v2(c,a))||(a=s2.EMPTY_NODE),this.indexedFilter_.updateChild(e,c,a,s,n,i)}updateFullNode(e,c,a){c.isLeafNode()&&(c=s2.EMPTY_NODE);let s=c.withIndex(this.index_);s=s.updatePriority(s2.EMPTY_NODE);const n=this;return c.forEachChild(B2,(i,r)=>{n.matches(new v2(i,r))||(s=s.updateImmediateChild(i,s2.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,a)}updatePriority(e,c){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const c=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),c)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const c=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),c)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e){this.withinDirectionalStart=c=>this.reverse_?this.withinEndPost(c):this.withinStartPost(c),this.withinDirectionalEnd=c=>this.reverse_?this.withinStartPost(c):this.withinEndPost(c),this.withinStartPost=c=>{const a=this.index_.compare(this.rangedFilter_.getStartPost(),c);return this.startIsInclusive_?a<=0:a<0},this.withinEndPost=c=>{const a=this.index_.compare(c,this.rangedFilter_.getEndPost());return this.endIsInclusive_?a<=0:a<0},this.rangedFilter_=new R6(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,c,a,s,n,i){return this.rangedFilter_.matches(new v2(c,a))||(a=s2.EMPTY_NODE),e.getImmediateChild(c).equals(a)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,c,a,s,n,i):this.fullLimitUpdateChild_(e,c,a,n,i)}updateFullNode(e,c,a){let s;if(c.isLeafNode()||c.isEmpty())s=s2.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<c.numChildren()&&c.isIndexed(this.index_)){s=s2.EMPTY_NODE.withIndex(this.index_);let n;this.reverse_?n=c.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):n=c.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let i=0;for(;n.hasNext()&&i<this.limit_;){const r=n.getNext();if(this.withinDirectionalStart(r))if(this.withinDirectionalEnd(r))s=s.updateImmediateChild(r.name,r.node),i++;else break;else continue}}else{s=c.withIndex(this.index_),s=s.updatePriority(s2.EMPTY_NODE);let n;this.reverse_?n=s.getReverseIterator(this.index_):n=s.getIterator(this.index_);let i=0;for(;n.hasNext();){const r=n.getNext();i<this.limit_&&this.withinDirectionalStart(r)&&this.withinDirectionalEnd(r)?i++:s=s.updateImmediateChild(r.name,s2.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,a)}updatePriority(e,c){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,c,a,s,n){let i;if(this.reverse_){const u=this.index_.getCompare();i=(d,h)=>u(h,d)}else i=this.index_.getCompare();const r=e;F(r.numChildren()===this.limit_,"");const o=new v2(c,a),l=this.reverse_?r.getFirstChild(this.index_):r.getLastChild(this.index_),f=this.rangedFilter_.matches(o);if(r.hasChild(c)){const u=r.getImmediateChild(c);let d=s.getChildAfterChild(this.index_,l,this.reverse_);for(;d!=null&&(d.name===c||r.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const h=d==null?1:i(d,o);if(f&&!a.isEmpty()&&h>=0)return n!=null&&n.trackChildChange(I6(c,a,u)),r.updateImmediateChild(c,a);{n!=null&&n.trackChildChange(P6(c,u));const v=r.updateImmediateChild(c,s2.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(n!=null&&n.trackChildChange(xe(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return a.isEmpty()?e:f&&i(l,o)>=0?(n!=null&&(n.trackChildChange(P6(l.name,l.node)),n.trackChildChange(xe(c,a))),r.updateImmediateChild(c,a).updateImmediateChild(l.name,s2.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=B2}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return F(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return F(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Se}hasEnd(){return this.endSet_}getIndexEndValue(){return F(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return F(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:I4}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return F(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===B2}copy(){const e=new zs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function oy(t){return t.loadsAllData()?new Hs(t.getIndex()):t.hasLimit()?new ry(t):new R6(t)}function s5(t){const e={};if(t.isDefault())return e;let c;if(t.index_===B2?c="$priority":t.index_===ny?c="$value":t.index_===He?c="$key":(F(t.index_ instanceof ay,"Unrecognized index type!"),c=t.index_.toString()),e.orderBy=Z2(c),t.startSet_){const a=t.startAfterSet_?"startAfter":"startAt";e[a]=Z2(t.indexStartValue_),t.startNameSet_&&(e[a]+=","+Z2(t.indexStartName_))}if(t.endSet_){const a=t.endBeforeSet_?"endBefore":"endAt";e[a]=Z2(t.indexEndValue_),t.endNameSet_&&(e[a]+=","+Z2(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function n5(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let c=t.viewFrom_;c===""&&(t.isViewFromLeft()?c="l":c="r"),e.vf=c}return t.index_!==B2&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends Ol{constructor(e,c,a,s){super(),this.repoInfo_=e,this.onDataUpdate_=c,this.authTokenProvider_=a,this.appCheckTokenProvider_=s,this.log_=c0("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,c){return c!==void 0?"tag$"+c:(F(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,c,a,s){const n=e._path.toString();this.log_("Listen called for "+n+" "+e._queryIdentifier);const i=ut.getListenId_(e,a),r={};this.listens_[i]=r;const o=s5(e._queryParams);this.restRequest_(n+".json",o,(l,f)=>{let u=f;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(n,u,!1,a),ye(this.listens_,i)===r){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",s(d,null)}})}unlisten(e,c){const a=ut.getListenId_(e,c);delete this.listens_[a]}get(e){const c=s5(e._queryParams),a=e._path.toString(),s=new K6;return this.restRequest_(a+".json",c,(n,i)=>{let r=i;n===404&&(r=null,n=null),n===null?(this.onDataUpdate_(a,r,!1,null),s.resolve(r)):s.reject(new Error(r))}),s.promise}refreshAuthToken(e){}restRequest_(e,c={},a){return c.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,n])=>{s&&s.accessToken&&(c.auth=s.accessToken),n&&n.token&&(c.ac=n.token);const i=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Fe(c);this.log_("Sending REST request for "+i);const r=new XMLHttpRequest;r.onreadystatechange=()=>{if(a&&r.readyState===4){this.log_("REST Response for "+i+" received. status:",r.status,"response:",r.responseText);let o=null;if(r.status>=200&&r.status<300){try{o=S6(r.responseText)}catch{u1("Failed to parse JSON response for "+i+": "+r.responseText)}a(null,o)}else r.status!==401&&r.status!==404&&u1("Got unsuccessful REST response for "+i+" Status: "+r.status),a(r.status);a=null}},r.open("GET",i,!0),r.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(){this.rootNode_=s2.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,c){this.rootNode_=this.rootNode_.updateChild(e,c)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return{value:null,children:new Map}}function Kl(t,e,c){if(g2(e))t.value=c,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,c);else{const a=m2(e);t.children.has(a)||t.children.set(a,dt());const s=t.children.get(a);e=T2(e),Kl(s,e,c)}}function Y8(t,e,c){t.value!==null?c(e,t.value):fy(t,(a,s)=>{const n=new w2(e.toString()+"/"+a);Y8(s,n,c)})}function fy(t,e){t.children.forEach((c,a)=>{e(a,c)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),c=Object.assign({},e);return this.last_&&n1(this.last_,(a,s)=>{c[a]=c[a]-s}),this.last_=e,c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i5=10*1e3,dy=30*1e3,hy=5*60*1e3;class py{constructor(e,c){this.server_=c,this.statsToReport_={},this.statsListener_=new uy(e);const a=i5+(dy-i5)*Math.random();m6(this.reportStats_.bind(this),Math.floor(a))}reportStats_(){const e=this.statsListener_.get(),c={};let a=!1;n1(e,(s,n)=>{n>0&&n3(this.statsToReport_,s)&&(c[s]=n,a=!0)}),a&&this.server_.reportStats(c),m6(this.reportStats_.bind(this),Math.floor(Math.random()*2*hy))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B1;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(B1||(B1={}));function Cs(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ms(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vs(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,c,a){this.path=e,this.affectedTree=c,this.revert=a,this.type=B1.ACK_USER_WRITE,this.source=Cs()}operationForChild(e){if(g2(this.path)){if(this.affectedTree.value!=null)return F(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const c=this.affectedTree.subtree(new w2(e));return new ht(M2(),c,this.revert)}}else return F(m2(this.path)===e,"operationForChild called for unrelated child."),new ht(T2(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O6{constructor(e,c){this.source=e,this.path=c,this.type=B1.LISTEN_COMPLETE}operationForChild(e){return g2(this.path)?new O6(this.source,M2()):new O6(this.source,T2(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R4{constructor(e,c,a){this.source=e,this.path=c,this.snap=a,this.type=B1.OVERWRITE}operationForChild(e){return g2(this.path)?new R4(this.source,M2(),this.snap.getImmediateChild(e)):new R4(this.source,T2(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,c,a){this.source=e,this.path=c,this.children=a,this.type=B1.MERGE}operationForChild(e){if(g2(this.path)){const c=this.children.subtree(new w2(e));return c.isEmpty()?null:c.value?new R4(this.source,M2(),c.value):new Ne(this.source,M2(),c)}else return F(m2(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ne(this.source,T2(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O4{constructor(e,c,a){this.node_=e,this.fullyInitialized_=c,this.filtered_=a}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(g2(e))return this.isFullyInitialized()&&!this.filtered_;const c=m2(e);return this.isCompleteForChild(c)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function vy(t,e,c,a){const s=[],n=[];return e.forEach(i=>{i.type==="child_changed"&&t.index_.indexedValueChanged(i.oldSnap,i.snapshotNode)&&n.push(iy(i.childName,i.snapshotNode))}),e6(t,s,"child_removed",e,a,c),e6(t,s,"child_added",e,a,c),e6(t,s,"child_moved",n,a,c),e6(t,s,"child_changed",e,a,c),e6(t,s,"value",e,a,c),s}function e6(t,e,c,a,s,n){const i=a.filter(r=>r.type===c);i.sort((r,o)=>Hy(t,r,o)),i.forEach(r=>{const o=gy(t,r,n);s.forEach(l=>{l.respondsTo(r.type)&&e.push(l.createEvent(o,t.query_))})})}function gy(t,e,c){return e.type==="value"||e.type==="child_removed"||(e.prevName=c.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Hy(t,e,c){if(e.childName==null||c.childName==null)throw De("Should only compare child_ events.");const a=new v2(e.childName,e.snapshotNode),s=new v2(c.childName,c.snapshotNode);return t.index_.compare(a,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(t,e){return{eventCache:t,serverCache:e}}function v6(t,e,c,a){return tc(new O4(e,c,a),t.serverCache)}function Yl(t,e,c,a){return tc(t.eventCache,new O4(e,c,a))}function X8(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function D4(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t8;const zy=()=>(t8||(t8=new g1(aw)),t8);class N2{constructor(e,c=zy()){this.value=e,this.children=c}static fromObject(e){let c=new N2(null);return n1(e,(a,s)=>{c=c.set(new w2(a),s)}),c}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,c){if(this.value!=null&&c(this.value))return{path:M2(),value:this.value};if(g2(e))return null;{const a=m2(e),s=this.children.get(a);if(s!==null){const n=s.findRootMostMatchingPathAndValue(T2(e),c);return n!=null?{path:F2(new w2(a),n.path),value:n.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(g2(e))return this;{const c=m2(e),a=this.children.get(c);return a!==null?a.subtree(T2(e)):new N2(null)}}set(e,c){if(g2(e))return new N2(c,this.children);{const a=m2(e),n=(this.children.get(a)||new N2(null)).set(T2(e),c),i=this.children.insert(a,n);return new N2(this.value,i)}}remove(e){if(g2(e))return this.children.isEmpty()?new N2(null):new N2(null,this.children);{const c=m2(e),a=this.children.get(c);if(a){const s=a.remove(T2(e));let n;return s.isEmpty()?n=this.children.remove(c):n=this.children.insert(c,s),this.value===null&&n.isEmpty()?new N2(null):new N2(this.value,n)}else return this}}get(e){if(g2(e))return this.value;{const c=m2(e),a=this.children.get(c);return a?a.get(T2(e)):null}}setTree(e,c){if(g2(e))return c;{const a=m2(e),n=(this.children.get(a)||new N2(null)).setTree(T2(e),c);let i;return n.isEmpty()?i=this.children.remove(a):i=this.children.insert(a,n),new N2(this.value,i)}}fold(e){return this.fold_(M2(),e)}fold_(e,c){const a={};return this.children.inorderTraversal((s,n)=>{a[s]=n.fold_(F2(e,s),c)}),c(e,this.value,a)}findOnPath(e,c){return this.findOnPath_(e,M2(),c)}findOnPath_(e,c,a){const s=this.value?a(c,this.value):!1;if(s)return s;if(g2(e))return null;{const n=m2(e),i=this.children.get(n);return i?i.findOnPath_(T2(e),F2(c,n),a):null}}foreachOnPath(e,c){return this.foreachOnPath_(e,M2(),c)}foreachOnPath_(e,c,a){if(g2(e))return this;{this.value&&a(c,this.value);const s=m2(e),n=this.children.get(s);return n?n.foreachOnPath_(T2(e),F2(c,s),a):new N2(null)}}foreach(e){this.foreach_(M2(),e)}foreach_(e,c){this.children.inorderTraversal((a,s)=>{s.foreach_(F2(e,a),c)}),this.value&&c(e,this.value)}foreachChild(e){this.children.inorderTraversal((c,a)=>{a.value&&e(c,a.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e){this.writeTree_=e}static empty(){return new q1(new N2(null))}}function g6(t,e,c){if(g2(e))return new q1(new N2(c));{const a=t.writeTree_.findRootMostValueAndPath(e);if(a!=null){const s=a.path;let n=a.value;const i=v1(s,e);return n=n.updateChild(i,c),new q1(t.writeTree_.set(s,n))}else{const s=new N2(c),n=t.writeTree_.setTree(e,s);return new q1(n)}}}function Q8(t,e,c){let a=t;return n1(c,(s,n)=>{a=g6(a,F2(e,s),n)}),a}function r5(t,e){if(g2(e))return q1.empty();{const c=t.writeTree_.setTree(e,new N2(null));return new q1(c)}}function J8(t,e){return j4(t,e)!=null}function j4(t,e){const c=t.writeTree_.findRootMostValueAndPath(e);return c!=null?t.writeTree_.get(c.path).getChild(v1(c.path,e)):null}function o5(t){const e=[],c=t.writeTree_.value;return c!=null?c.isLeafNode()||c.forEachChild(B2,(a,s)=>{e.push(new v2(a,s))}):t.writeTree_.children.inorderTraversal((a,s)=>{s.value!=null&&e.push(new v2(a,s.value))}),e}function Q3(t,e){if(g2(e))return t;{const c=j4(t,e);return c!=null?new q1(new N2(c)):new q1(t.writeTree_.subtree(e))}}function Z8(t){return t.writeTree_.isEmpty()}function Te(t,e){return Xl(M2(),t.writeTree_,e)}function Xl(t,e,c){if(e.value!=null)return c.updateChild(t,e.value);{let a=null;return e.children.inorderTraversal((s,n)=>{s===".priority"?(F(n.value!==null,"Priority writes must always be leaf nodes"),a=n.value):c=Xl(F2(t,s),n,c)}),!c.getChild(t).isEmpty()&&a!==null&&(c=c.updateChild(F2(t,".priority"),a)),c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(t,e){return e9(e,t)}function Cy(t,e,c,a,s){F(a>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:c,writeId:a,visible:s}),s&&(t.visibleWrites=g6(t.visibleWrites,e,c)),t.lastWriteId=a}function My(t,e,c,a){F(a>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:c,writeId:a,visible:!0}),t.visibleWrites=Q8(t.visibleWrites,e,c),t.lastWriteId=a}function Vy(t,e){for(let c=0;c<t.allWrites.length;c++){const a=t.allWrites[c];if(a.writeId===e)return a}return null}function _y(t,e){const c=t.allWrites.findIndex(r=>r.writeId===e);F(c>=0,"removeWrite called with nonexistent writeId.");const a=t.allWrites[c];t.allWrites.splice(c,1);let s=a.visible,n=!1,i=t.allWrites.length-1;for(;s&&i>=0;){const r=t.allWrites[i];r.visible&&(i>=c&&Ly(r,a.path)?s=!1:N1(a.path,r.path)&&(n=!0)),i--}if(s){if(n)return by(t),!0;if(a.snap)t.visibleWrites=r5(t.visibleWrites,a.path);else{const r=a.children;n1(r,o=>{t.visibleWrites=r5(t.visibleWrites,F2(a.path,o))})}return!0}else return!1}function Ly(t,e){if(t.snap)return N1(t.path,e);for(const c in t.children)if(t.children.hasOwnProperty(c)&&N1(F2(t.path,c),e))return!0;return!1}function by(t){t.visibleWrites=Ql(t.allWrites,wy,M2()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function wy(t){return t.visible}function Ql(t,e,c){let a=q1.empty();for(let s=0;s<t.length;++s){const n=t[s];if(e(n)){const i=n.path;let r;if(n.snap)N1(c,i)?(r=v1(c,i),a=g6(a,r,n.snap)):N1(i,c)&&(r=v1(i,c),a=g6(a,M2(),n.snap.getChild(r)));else if(n.children){if(N1(c,i))r=v1(c,i),a=Q8(a,r,n.children);else if(N1(i,c))if(r=v1(i,c),g2(r))a=Q8(a,M2(),n.children);else{const o=ye(n.children,m2(r));if(o){const l=o.getChild(T2(r));a=g6(a,M2(),l)}}}else throw De("WriteRecord should have .snap or .children")}}return a}function Jl(t,e,c,a,s){if(!a&&!s){const n=j4(t.visibleWrites,e);if(n!=null)return n;{const i=Q3(t.visibleWrites,e);if(Z8(i))return c;if(c==null&&!J8(i,M2()))return null;{const r=c||s2.EMPTY_NODE;return Te(i,r)}}}else{const n=Q3(t.visibleWrites,e);if(!s&&Z8(n))return c;if(!s&&c==null&&!J8(n,M2()))return null;{const i=function(l){return(l.visible||s)&&(!a||!~a.indexOf(l.writeId))&&(N1(l.path,e)||N1(e,l.path))},r=Ql(t.allWrites,i,e),o=c||s2.EMPTY_NODE;return Te(r,o)}}}function yy(t,e,c){let a=s2.EMPTY_NODE;const s=j4(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(B2,(n,i)=>{a=a.updateImmediateChild(n,i)}),a;if(c){const n=Q3(t.visibleWrites,e);return c.forEachChild(B2,(i,r)=>{const o=Te(Q3(n,new w2(i)),r);a=a.updateImmediateChild(i,o)}),o5(n).forEach(i=>{a=a.updateImmediateChild(i.name,i.node)}),a}else{const n=Q3(t.visibleWrites,e);return o5(n).forEach(i=>{a=a.updateImmediateChild(i.name,i.node)}),a}}function Sy(t,e,c,a,s){F(a||s,"Either existingEventSnap or existingServerSnap must exist");const n=F2(e,c);if(J8(t.visibleWrites,n))return null;{const i=Q3(t.visibleWrites,n);return Z8(i)?s.getChild(c):Te(i,s.getChild(c))}}function xy(t,e,c,a){const s=F2(e,c),n=j4(t.visibleWrites,s);if(n!=null)return n;if(a.isCompleteForChild(c)){const i=Q3(t.visibleWrites,s);return Te(i,a.getNode().getImmediateChild(c))}else return null}function Ny(t,e){return j4(t.visibleWrites,e)}function Ty(t,e,c,a,s,n,i){let r;const o=Q3(t.visibleWrites,e),l=j4(o,M2());if(l!=null)r=l;else if(c!=null)r=Te(o,c);else return[];if(r=r.withIndex(i),!r.isEmpty()&&!r.isLeafNode()){const f=[],u=i.getCompare(),d=n?r.getReverseIteratorFrom(a,i):r.getIteratorFrom(a,i);let h=d.getNext();for(;h&&f.length<s;)u(h,a)!==0&&f.push(h),h=d.getNext();return f}else return[]}function Ey(){return{visibleWrites:q1.empty(),allWrites:[],lastWriteId:-1}}function pt(t,e,c,a){return Jl(t.writeTree,t.treePath,e,c,a)}function Ls(t,e){return yy(t.writeTree,t.treePath,e)}function l5(t,e,c,a){return Sy(t.writeTree,t.treePath,e,c,a)}function mt(t,e){return Ny(t.writeTree,F2(t.treePath,e))}function ky(t,e,c,a,s,n){return Ty(t.writeTree,t.treePath,e,c,a,s,n)}function bs(t,e,c){return xy(t.writeTree,t.treePath,e,c)}function Zl(t,e){return e9(F2(t.treePath,e),t.writeTree)}function e9(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(){this.changeMap=new Map}trackChildChange(e){const c=e.type,a=e.childName;F(c==="child_added"||c==="child_changed"||c==="child_removed","Only child changes supported for tracking"),F(a!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(a);if(s){const n=s.type;if(c==="child_added"&&n==="child_removed")this.changeMap.set(a,I6(a,e.snapshotNode,s.snapshotNode));else if(c==="child_removed"&&n==="child_added")this.changeMap.delete(a);else if(c==="child_removed"&&n==="child_changed")this.changeMap.set(a,P6(a,s.oldSnap));else if(c==="child_changed"&&n==="child_added")this.changeMap.set(a,xe(a,e.snapshotNode));else if(c==="child_changed"&&n==="child_changed")this.changeMap.set(a,I6(a,e.snapshotNode,s.oldSnap));else throw De("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(a,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{getCompleteChild(e){return null}getChildAfterChild(e,c,a){return null}}const t9=new Py;class ws{constructor(e,c,a=null){this.writes_=e,this.viewCache_=c,this.optCompleteServerCache_=a}getCompleteChild(e){const c=this.viewCache_.eventCache;if(c.isCompleteForChild(e))return c.getNode().getImmediateChild(e);{const a=this.optCompleteServerCache_!=null?new O4(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return bs(this.writes_,e,a)}}getChildAfterChild(e,c,a){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:D4(this.viewCache_),n=ky(this.writes_,s,c,1,a,e);return n.length===0?null:n[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(t){return{filter:t}}function Ry(t,e){F(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),F(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Oy(t,e,c,a,s){const n=new Ay;let i,r;if(c.type===B1.OVERWRITE){const l=c;l.source.fromUser?i=ea(t,e,l.path,l.snap,a,s,n):(F(l.source.fromServer,"Unknown source."),r=l.source.tagged||e.serverCache.isFiltered()&&!g2(l.path),i=vt(t,e,l.path,l.snap,a,s,r,n))}else if(c.type===B1.MERGE){const l=c;l.source.fromUser?i=Fy(t,e,l.path,l.children,a,s,n):(F(l.source.fromServer,"Unknown source."),r=l.source.tagged||e.serverCache.isFiltered(),i=ta(t,e,l.path,l.children,a,s,r,n))}else if(c.type===B1.ACK_USER_WRITE){const l=c;l.revert?i=$y(t,e,l.path,a,s,n):i=By(t,e,l.path,l.affectedTree,a,s,n)}else if(c.type===B1.LISTEN_COMPLETE)i=Uy(t,e,c.path,a,n);else throw De("Unknown operation type: "+c.type);const o=n.getChanges();return Dy(e,i,o),{viewCache:i,changes:o}}function Dy(t,e,c){const a=e.eventCache;if(a.isFullyInitialized()){const s=a.getNode().isLeafNode()||a.getNode().isEmpty(),n=X8(t);(c.length>0||!t.eventCache.isFullyInitialized()||s&&!a.getNode().equals(n)||!a.getNode().getPriority().equals(n.getPriority()))&&c.push(jl(X8(e)))}}function c9(t,e,c,a,s,n){const i=e.eventCache;if(mt(a,c)!=null)return e;{let r,o;if(g2(c))if(F(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=D4(e),f=l instanceof s2?l:s2.EMPTY_NODE,u=Ls(a,f);r=t.filter.updateFullNode(e.eventCache.getNode(),u,n)}else{const l=pt(a,D4(e));r=t.filter.updateFullNode(e.eventCache.getNode(),l,n)}else{const l=m2(c);if(l===".priority"){F(t4(c)===1,"Can't have a priority with additional path components");const f=i.getNode();o=e.serverCache.getNode();const u=l5(a,c,f,o);u!=null?r=t.filter.updatePriority(f,u):r=i.getNode()}else{const f=T2(c);let u;if(i.isCompleteForChild(l)){o=e.serverCache.getNode();const d=l5(a,c,i.getNode(),o);d!=null?u=i.getNode().getImmediateChild(l).updateChild(f,d):u=i.getNode().getImmediateChild(l)}else u=bs(a,l,e.serverCache);u!=null?r=t.filter.updateChild(i.getNode(),l,u,f,s,n):r=i.getNode()}}return v6(e,r,i.isFullyInitialized()||g2(c),t.filter.filtersNodes())}}function vt(t,e,c,a,s,n,i,r){const o=e.serverCache;let l;const f=i?t.filter:t.filter.getIndexedFilter();if(g2(c))l=f.updateFullNode(o.getNode(),a,null);else if(f.filtersNodes()&&!o.isFiltered()){const h=o.getNode().updateChild(c,a);l=f.updateFullNode(o.getNode(),h,null)}else{const h=m2(c);if(!o.isCompleteForPath(c)&&t4(c)>1)return e;const m=T2(c),M=o.getNode().getImmediateChild(h).updateChild(m,a);h===".priority"?l=f.updatePriority(o.getNode(),M):l=f.updateChild(o.getNode(),h,M,m,t9,null)}const u=Yl(e,l,o.isFullyInitialized()||g2(c),f.filtersNodes()),d=new ws(s,u,n);return c9(t,u,c,s,d,r)}function ea(t,e,c,a,s,n,i){const r=e.eventCache;let o,l;const f=new ws(s,e,n);if(g2(c))l=t.filter.updateFullNode(e.eventCache.getNode(),a,i),o=v6(e,l,!0,t.filter.filtersNodes());else{const u=m2(c);if(u===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),a),o=v6(e,l,r.isFullyInitialized(),r.isFiltered());else{const d=T2(c),h=r.getNode().getImmediateChild(u);let m;if(g2(d))m=a;else{const v=f.getCompleteChild(u);v!=null?ps(d)===".priority"&&v.getChild(Fl(d)).isEmpty()?m=v:m=v.updateChild(d,a):m=s2.EMPTY_NODE}if(h.equals(m))o=e;else{const v=t.filter.updateChild(r.getNode(),u,m,d,f,i);o=v6(e,v,r.isFullyInitialized(),t.filter.filtersNodes())}}}return o}function f5(t,e){return t.eventCache.isCompleteForChild(e)}function Fy(t,e,c,a,s,n,i){let r=e;return a.foreach((o,l)=>{const f=F2(c,o);f5(e,m2(f))&&(r=ea(t,r,f,l,s,n,i))}),a.foreach((o,l)=>{const f=F2(c,o);f5(e,m2(f))||(r=ea(t,r,f,l,s,n,i))}),r}function u5(t,e,c){return c.foreach((a,s)=>{e=e.updateChild(a,s)}),e}function ta(t,e,c,a,s,n,i,r){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let o=e,l;g2(c)?l=a:l=new N2(null).setTree(c,a);const f=e.serverCache.getNode();return l.children.inorderTraversal((u,d)=>{if(f.hasChild(u)){const h=e.serverCache.getNode().getImmediateChild(u),m=u5(t,h,d);o=vt(t,o,new w2(u),m,s,n,i,r)}}),l.children.inorderTraversal((u,d)=>{const h=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!f.hasChild(u)&&!h){const m=e.serverCache.getNode().getImmediateChild(u),v=u5(t,m,d);o=vt(t,o,new w2(u),v,s,n,i,r)}}),o}function By(t,e,c,a,s,n,i){if(mt(s,c)!=null)return e;const r=e.serverCache.isFiltered(),o=e.serverCache;if(a.value!=null){if(g2(c)&&o.isFullyInitialized()||o.isCompleteForPath(c))return vt(t,e,c,o.getNode().getChild(c),s,n,r,i);if(g2(c)){let l=new N2(null);return o.getNode().forEachChild(He,(f,u)=>{l=l.set(new w2(f),u)}),ta(t,e,c,l,s,n,r,i)}else return e}else{let l=new N2(null);return a.foreach((f,u)=>{const d=F2(c,f);o.isCompleteForPath(d)&&(l=l.set(f,o.getNode().getChild(d)))}),ta(t,e,c,l,s,n,r,i)}}function Uy(t,e,c,a,s){const n=e.serverCache,i=Yl(e,n.getNode(),n.isFullyInitialized()||g2(c),n.isFiltered());return c9(t,i,c,a,t9,s)}function $y(t,e,c,a,s,n){let i;if(mt(a,c)!=null)return e;{const r=new ws(a,e,s),o=e.eventCache.getNode();let l;if(g2(c)||m2(c)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=pt(a,D4(e));else{const u=e.serverCache.getNode();F(u instanceof s2,"serverChildren would be complete if leaf node"),f=Ls(a,u)}f=f,l=t.filter.updateFullNode(o,f,n)}else{const f=m2(c);let u=bs(a,f,e.serverCache);u==null&&e.serverCache.isCompleteForChild(f)&&(u=o.getImmediateChild(f)),u!=null?l=t.filter.updateChild(o,f,u,T2(c),r,n):e.eventCache.getNode().hasChild(f)?l=t.filter.updateChild(o,f,s2.EMPTY_NODE,T2(c),r,n):l=o,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(i=pt(a,D4(e)),i.isLeafNode()&&(l=t.filter.updateFullNode(l,i,n)))}return i=e.serverCache.isFullyInitialized()||mt(a,M2())!=null,v6(e,l,i,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,c){this.query_=e,this.eventRegistrations_=[];const a=this.query_._queryParams,s=new Hs(a.getIndex()),n=oy(a);this.processor_=Iy(n);const i=c.serverCache,r=c.eventCache,o=s.updateFullNode(s2.EMPTY_NODE,i.getNode(),null),l=n.updateFullNode(s2.EMPTY_NODE,r.getNode(),null),f=new O4(o,i.isFullyInitialized(),s.filtersNodes()),u=new O4(l,r.isFullyInitialized(),n.filtersNodes());this.viewCache_=tc(u,f),this.eventGenerator_=new my(this.query_)}get query(){return this.query_}}function qy(t){return t.viewCache_.serverCache.getNode()}function Gy(t,e){const c=D4(t.viewCache_);return c&&(t.query._queryParams.loadsAllData()||!g2(e)&&!c.getImmediateChild(m2(e)).isEmpty())?c.getChild(e):null}function d5(t){return t.eventRegistrations_.length===0}function jy(t,e){t.eventRegistrations_.push(e)}function h5(t,e,c){const a=[];if(c){F(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(n=>{const i=n.createCancelEvent(c,s);i&&a.push(i)})}if(e){let s=[];for(let n=0;n<t.eventRegistrations_.length;++n){const i=t.eventRegistrations_[n];if(!i.matches(e))s.push(i);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(n+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return a}function p5(t,e,c,a){e.type===B1.MERGE&&e.source.queryId!==null&&(F(D4(t.viewCache_),"We should always have a full cache before handling merges"),F(X8(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,n=Oy(t.processor_,s,e,c,a);return Ry(t.processor_,n.viewCache),F(n.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=n.viewCache,a9(t,n.changes,n.viewCache.eventCache.getNode(),null)}function Ky(t,e){const c=t.viewCache_.eventCache,a=[];return c.getNode().isLeafNode()||c.getNode().forEachChild(B2,(n,i)=>{a.push(xe(n,i))}),c.isFullyInitialized()&&a.push(jl(c.getNode())),a9(t,a,c.getNode(),e)}function a9(t,e,c,a){const s=a?[a]:t.eventRegistrations_;return vy(t.eventGenerator_,e,c,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gt;class Yy{constructor(){this.views=new Map}}function Xy(t){F(!gt,"__referenceConstructor has already been defined"),gt=t}function Qy(){return F(gt,"Reference.ts has not been loaded"),gt}function Jy(t){return t.views.size===0}function ys(t,e,c,a){const s=e.source.queryId;if(s!==null){const n=t.views.get(s);return F(n!=null,"SyncTree gave us an op for an invalid query."),p5(n,e,c,a)}else{let n=[];for(const i of t.views.values())n=n.concat(p5(i,e,c,a));return n}}function Zy(t,e,c,a,s){const n=e._queryIdentifier,i=t.views.get(n);if(!i){let r=pt(c,s?a:null),o=!1;r?o=!0:a instanceof s2?(r=Ls(c,a),o=!1):(r=s2.EMPTY_NODE,o=!1);const l=tc(new O4(r,o,!1),new O4(a,s,!1));return new Wy(e,l)}return i}function eS(t,e,c,a,s,n){const i=Zy(t,e,a,s,n);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,i),jy(i,c),Ky(i,c)}function tS(t,e,c,a){const s=e._queryIdentifier,n=[];let i=[];const r=c4(t);if(s==="default")for(const[o,l]of t.views.entries())i=i.concat(h5(l,c,a)),d5(l)&&(t.views.delete(o),l.query._queryParams.loadsAllData()||n.push(l.query));else{const o=t.views.get(s);o&&(i=i.concat(h5(o,c,a)),d5(o)&&(t.views.delete(s),o.query._queryParams.loadsAllData()||n.push(o.query)))}return r&&!c4(t)&&n.push(new(Qy())(e._repo,e._path)),{removed:n,events:i}}function s9(t){const e=[];for(const c of t.views.values())c.query._queryParams.loadsAllData()||e.push(c);return e}function ze(t,e){let c=null;for(const a of t.views.values())c=c||Gy(a,e);return c}function n9(t,e){if(e._queryParams.loadsAllData())return cc(t);{const a=e._queryIdentifier;return t.views.get(a)}}function i9(t,e){return n9(t,e)!=null}function c4(t){return cc(t)!=null}function cc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ht;function cS(t){F(!Ht,"__referenceConstructor has already been defined"),Ht=t}function aS(){return F(Ht,"Reference.ts has not been loaded"),Ht}let sS=1;class m5{constructor(e){this.listenProvider_=e,this.syncPointTree_=new N2(null),this.pendingWriteTree_=Ey(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function r9(t,e,c,a,s){return Cy(t.pendingWriteTree_,e,c,a,s),s?$e(t,new R4(Cs(),e,c)):[]}function nS(t,e,c,a){My(t.pendingWriteTree_,e,c,a);const s=N2.fromObject(c);return $e(t,new Ne(Cs(),e,s))}function $3(t,e,c=!1){const a=Vy(t.pendingWriteTree_,e);if(_y(t.pendingWriteTree_,e)){let n=new N2(null);return a.snap!=null?n=n.set(M2(),!0):n1(a.children,i=>{n=n.set(new w2(i),!0)}),$e(t,new ht(a.path,n,c))}else return[]}function ac(t,e,c){return $e(t,new R4(Ms(),e,c))}function iS(t,e,c){const a=N2.fromObject(c);return $e(t,new Ne(Ms(),e,a))}function rS(t,e){return $e(t,new O6(Ms(),e))}function oS(t,e,c){const a=xs(t,c);if(a){const s=Ns(a),n=s.path,i=s.queryId,r=v1(n,e),o=new O6(Vs(i),r);return Ts(t,n,o)}else return[]}function ca(t,e,c,a,s=!1){const n=e._path,i=t.syncPointTree_.get(n);let r=[];if(i&&(e._queryIdentifier==="default"||i9(i,e))){const o=tS(i,e,c,a);Jy(i)&&(t.syncPointTree_=t.syncPointTree_.remove(n));const l=o.removed;if(r=o.events,!s){const f=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(n,(d,h)=>c4(h));if(f&&!u){const d=t.syncPointTree_.subtree(n);if(!d.isEmpty()){const h=uS(d);for(let m=0;m<h.length;++m){const v=h[m],M=v.query,H=f9(t,v);t.listenProvider_.startListening(H6(M),zt(t,M),H.hashFn,H.onComplete)}}}!u&&l.length>0&&!a&&(f?t.listenProvider_.stopListening(H6(e),null):l.forEach(d=>{const h=t.queryToTagMap.get(sc(d));t.listenProvider_.stopListening(H6(d),h)}))}dS(t,l)}return r}function lS(t,e,c,a){const s=xs(t,a);if(s!=null){const n=Ns(s),i=n.path,r=n.queryId,o=v1(i,e),l=new R4(Vs(r),o,c);return Ts(t,i,l)}else return[]}function fS(t,e,c,a){const s=xs(t,a);if(s){const n=Ns(s),i=n.path,r=n.queryId,o=v1(i,e),l=N2.fromObject(c),f=new Ne(Vs(r),o,l);return Ts(t,i,f)}else return[]}function v5(t,e,c,a=!1){const s=e._path;let n=null,i=!1;t.syncPointTree_.foreachOnPath(s,(d,h)=>{const m=v1(d,s);n=n||ze(h,m),i=i||c4(h)});let r=t.syncPointTree_.get(s);r?(i=i||c4(r),n=n||ze(r,M2())):(r=new Yy,t.syncPointTree_=t.syncPointTree_.set(s,r));let o;n!=null?o=!0:(o=!1,n=s2.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((h,m)=>{const v=ze(m,M2());v&&(n=n.updateImmediateChild(h,v))}));const l=i9(r,e);if(!l&&!e._queryParams.loadsAllData()){const d=sc(e);F(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const h=hS();t.queryToTagMap.set(d,h),t.tagToQueryMap.set(h,d)}const f=_s(t.pendingWriteTree_,s);let u=eS(r,e,c,f,n,o);if(!l&&!i&&!a){const d=n9(r,e);u=u.concat(pS(t,e,d))}return u}function Ss(t,e,c){const s=t.pendingWriteTree_,n=t.syncPointTree_.findOnPath(e,(i,r)=>{const o=v1(i,e),l=ze(r,o);if(l)return l});return Jl(s,e,n,c,!0)}function $e(t,e){return o9(e,t.syncPointTree_,null,_s(t.pendingWriteTree_,M2()))}function o9(t,e,c,a){if(g2(t.path))return l9(t,e,c,a);{const s=e.get(M2());c==null&&s!=null&&(c=ze(s,M2()));let n=[];const i=m2(t.path),r=t.operationForChild(i),o=e.children.get(i);if(o&&r){const l=c?c.getImmediateChild(i):null,f=Zl(a,i);n=n.concat(o9(r,o,l,f))}return s&&(n=n.concat(ys(s,t,a,c))),n}}function l9(t,e,c,a){const s=e.get(M2());c==null&&s!=null&&(c=ze(s,M2()));let n=[];return e.children.inorderTraversal((i,r)=>{const o=c?c.getImmediateChild(i):null,l=Zl(a,i),f=t.operationForChild(i);f&&(n=n.concat(l9(f,r,o,l)))}),s&&(n=n.concat(ys(s,t,a,c))),n}function f9(t,e){const c=e.query,a=zt(t,c);return{hashFn:()=>(qy(e)||s2.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return a?oS(t,c._path,a):rS(t,c._path);{const n=iw(s,c);return ca(t,c,null,n)}}}}function zt(t,e){const c=sc(e);return t.queryToTagMap.get(c)}function sc(t){return t._path.toString()+"$"+t._queryIdentifier}function xs(t,e){return t.tagToQueryMap.get(e)}function Ns(t){const e=t.indexOf("$");return F(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new w2(t.substr(0,e))}}function Ts(t,e,c){const a=t.syncPointTree_.get(e);F(a,"Missing sync point for query tag that we're tracking");const s=_s(t.pendingWriteTree_,e);return ys(a,c,s,null)}function uS(t){return t.fold((e,c,a)=>{if(c&&c4(c))return[cc(c)];{let s=[];return c&&(s=s9(c)),n1(a,(n,i)=>{s=s.concat(i)}),s}})}function H6(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(aS())(t._repo,t._path):t}function dS(t,e){for(let c=0;c<e.length;++c){const a=e[c];if(!a._queryParams.loadsAllData()){const s=sc(a),n=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(n)}}}function hS(){return sS++}function pS(t,e,c){const a=e._path,s=zt(t,e),n=f9(t,c),i=t.listenProvider_.startListening(H6(e),s,n.hashFn,n.onComplete),r=t.syncPointTree_.subtree(a);if(s)F(!c4(r.value),"If we're adding a query, it shouldn't be shadowed");else{const o=r.fold((l,f,u)=>{if(!g2(l)&&f&&c4(f))return[cc(f).query];{let d=[];return f&&(d=d.concat(s9(f).map(h=>h.query))),n1(u,(h,m)=>{d=d.concat(m)}),d}});for(let l=0;l<o.length;++l){const f=o[l];t.listenProvider_.stopListening(H6(f),zt(t,f))}}return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.node_=e}getImmediateChild(e){const c=this.node_.getImmediateChild(e);return new Es(c)}node(){return this.node_}}class ks{constructor(e,c){this.syncTree_=e,this.path_=c}getImmediateChild(e){const c=F2(this.path_,e);return new ks(this.syncTree_,c)}node(){return Ss(this.syncTree_,this.path_)}}const mS=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},g5=function(t,e,c){if(!t||typeof t!="object")return t;if(F(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return vS(t[".sv"],e,c);if(typeof t[".sv"]=="object")return gS(t[".sv"],e);F(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},vS=function(t,e,c){switch(t){case"timestamp":return c.timestamp;default:F(!1,"Unexpected server value: "+t)}},gS=function(t,e,c){t.hasOwnProperty("increment")||F(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const a=t.increment;typeof a!="number"&&F(!1,"Unexpected increment value: "+a);const s=e.node();if(F(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return a;const i=s.getValue();return typeof i!="number"?a:i+a},u9=function(t,e,c,a){return As(e,new ks(c,t),a)},d9=function(t,e,c){return As(t,new Es(e),c)};function As(t,e,c){const a=t.getPriority().val(),s=g5(a,e.getImmediateChild(".priority"),c);let n;if(t.isLeafNode()){const i=t,r=g5(i.getValue(),e,c);return r!==i.getValue()||s!==i.getPriority().val()?new Y2(r,Q2(s)):t}else{const i=t;return n=i,s!==i.getPriority().val()&&(n=n.updatePriority(new Y2(s))),i.forEachChild(B2,(r,o)=>{const l=As(o,e.getImmediateChild(r),c);l!==o&&(n=n.updateImmediateChild(r,l))}),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e="",c=null,a={children:{},childCount:0}){this.name=e,this.parent=c,this.node=a}}function Is(t,e){let c=e instanceof w2?e:new w2(e),a=t,s=m2(c);for(;s!==null;){const n=ye(a.node.children,s)||{children:{},childCount:0};a=new Ps(s,a,n),c=T2(c),s=m2(c)}return a}function We(t){return t.node.value}function h9(t,e){t.node.value=e,aa(t)}function p9(t){return t.node.childCount>0}function HS(t){return We(t)===void 0&&!p9(t)}function nc(t,e){n1(t.node.children,(c,a)=>{e(new Ps(c,t,a))})}function m9(t,e,c,a){c&&!a&&e(t),nc(t,s=>{m9(s,e,!0,a)}),c&&a&&e(t)}function zS(t,e,c){let a=c?t:t.parent;for(;a!==null;){if(e(a))return!0;a=a.parent}return!1}function s0(t){return new w2(t.parent===null?t.name:s0(t.parent)+"/"+t.name)}function aa(t){t.parent!==null&&CS(t.parent,t.name,t)}function CS(t,e,c){const a=HS(c),s=n3(t.node.children,e);a&&s?(delete t.node.children[e],t.node.childCount--,aa(t)):!a&&!s&&(t.node.children[e]=c.node,t.node.childCount++,aa(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS=/[\[\].#$\/\u0000-\u001F\u007F]/,VS=/[\[\].#$\u0000-\u001F\u007F]/,c8=10*1024*1024,Rs=function(t){return typeof t=="string"&&t.length!==0&&!MS.test(t)},v9=function(t){return typeof t=="string"&&t.length!==0&&!VS.test(t)},_S=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),v9(t)},LS=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!ls(t)||t&&typeof t=="object"&&n3(t,".sv")},bS=function(t,e,c,a){a&&e===void 0||ic(jt(t,"value"),e,c)},ic=function(t,e,c){const a=c instanceof w2?new Fw(c,t):c;if(e===void 0)throw new Error(t+"contains undefined "+d4(a));if(typeof e=="function")throw new Error(t+"contains a function "+d4(a)+" with contents = "+e.toString());if(ls(e))throw new Error(t+"contains "+e.toString()+" "+d4(a));if(typeof e=="string"&&e.length>c8/3&&Kt(e)>c8)throw new Error(t+"contains a string greater than "+c8+" utf8 bytes "+d4(a)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,n=!1;if(n1(e,(i,r)=>{if(i===".value")s=!0;else if(i!==".priority"&&i!==".sv"&&(n=!0,!Rs(i)))throw new Error(t+" contains an invalid key ("+i+") "+d4(a)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Bw(a,i),ic(t,r,a),Uw(a)}),s&&n)throw new Error(t+' contains ".value" child '+d4(a)+" in addition to actual children.")}},wS=function(t,e){let c,a;for(c=0;c<e.length;c++){a=e[c];const n=A6(a);for(let i=0;i<n.length;i++)if(!(n[i]===".priority"&&i===n.length-1)){if(!Rs(n[i]))throw new Error(t+"contains an invalid key ("+n[i]+") in path "+a.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Dw);let s=null;for(c=0;c<e.length;c++){if(a=e[c],s!==null&&N1(s,a))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+a.toString());s=a}},yS=function(t,e,c,a){if(a&&e===void 0)return;const s=jt(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const n=[];n1(e,(i,r)=>{const o=new w2(i);if(ic(s,r,F2(c,o)),ps(o)===".priority"&&!LS(r))throw new Error(s+"contains an invalid value for '"+o.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");n.push(o)}),wS(s,n)},g9=function(t,e,c,a){if(!(a&&c===void 0)&&!v9(c))throw new Error(jt(t,e)+'was an invalid path = "'+c+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},SS=function(t,e,c,a){c&&(c=c.replace(/^\/*\.info(\/|$)/,"/")),g9(t,e,c,a)},xS=function(t,e){if(m2(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},NS=function(t,e){const c=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Rs(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||c.length!==0&&!_S(c))throw new Error(jt(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function rc(t,e){let c=null;for(let a=0;a<e.length;a++){const s=e[a],n=s.getPath();c!==null&&!ms(n,c.path)&&(t.eventLists_.push(c),c=null),c===null&&(c={events:[],path:n}),c.events.push(s)}c&&t.eventLists_.push(c)}function H9(t,e,c){rc(t,c),z9(t,a=>ms(a,e))}function j1(t,e,c){rc(t,c),z9(t,a=>N1(a,e)||N1(e,a))}function z9(t,e){t.recursionDepth_++;let c=!0;for(let a=0;a<t.eventLists_.length;a++){const s=t.eventLists_[a];if(s){const n=s.path;e(n)?(ES(t.eventLists_[a]),t.eventLists_[a]=null):c=!1}}c&&(t.eventLists_=[]),t.recursionDepth_--}function ES(t){for(let e=0;e<t.events.length;e++){const c=t.events[e];if(c!==null){t.events[e]=null;const a=c.getEventRunner();S4&&a1("event: "+c.toString()),Ue(a)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS="repo_interrupt",AS=25;class PS{constructor(e,c,a,s){this.repoInfo_=e,this.forceRestClient_=c,this.authTokenProvider_=a,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new TS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=dt(),this.transactionQueueTree_=new Ps,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function IS(t,e,c){if(t.stats_=ds(t.repoInfo_),t.forceRestClient_||fw())t.server_=new ut(t.repoInfo_,(a,s,n,i)=>{H5(t,a,s,n,i)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>z5(t,!0),0);else{if(typeof c<"u"&&c!==null){if(typeof c!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Z2(c)}catch(a){throw new Error("Invalid authOverride provided: "+a)}}t.persistentConnection_=new g3(t.repoInfo_,e,(a,s,n,i)=>{H5(t,a,s,n,i)},a=>{z5(t,a)},a=>{OS(t,a)},t.authTokenProvider_,t.appCheckProvider_,c),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(a=>{t.server_.refreshAuthToken(a)}),t.appCheckProvider_.addTokenChangeListener(a=>{t.server_.refreshAppCheckToken(a.token)}),t.statsReporter_=mw(t.repoInfo_,()=>new py(t.stats_,t.server_)),t.infoData_=new ly,t.infoSyncTree_=new m5({startListening:(a,s,n,i)=>{let r=[];const o=t.infoData_.getNode(a._path);return o.isEmpty()||(r=ac(t.infoSyncTree_,a._path,o),setTimeout(()=>{i("ok")},0)),r},stopListening:()=>{}}),Os(t,"connected",!1),t.serverSyncTree_=new m5({startListening:(a,s,n,i)=>(t.server_.listen(a,n,s,(r,o)=>{const l=i(r,o);j1(t.eventQueue_,a._path,l)}),[]),stopListening:(a,s)=>{t.server_.unlisten(a,s)}})}function RS(t){const c=t.infoData_.getNode(new w2(".info/serverTimeOffset")).val()||0;return new Date().getTime()+c}function oc(t){return mS({timestamp:RS(t)})}function H5(t,e,c,a,s){t.dataUpdateCount++;const n=new w2(e);c=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,c):c;let i=[];if(s)if(a){const o=et(c,l=>Q2(l));i=fS(t.serverSyncTree_,n,o,s)}else{const o=Q2(c);i=lS(t.serverSyncTree_,n,o,s)}else if(a){const o=et(c,l=>Q2(l));i=iS(t.serverSyncTree_,n,o)}else{const o=Q2(c);i=ac(t.serverSyncTree_,n,o)}let r=n;i.length>0&&(r=Ee(t,n)),j1(t.eventQueue_,r,i)}function z5(t,e){Os(t,"connected",e),e===!1&&BS(t)}function OS(t,e){n1(e,(c,a)=>{Os(t,c,a)})}function Os(t,e,c){const a=new w2("/.info/"+e),s=Q2(c);t.infoData_.updateSnapshot(a,s);const n=ac(t.infoSyncTree_,a,s);j1(t.eventQueue_,a,n)}function Ds(t){return t.nextWriteId_++}function DS(t,e,c,a,s){lc(t,"set",{path:e.toString(),value:c,priority:a});const n=oc(t),i=Q2(c,a),r=Ss(t.serverSyncTree_,e),o=d9(i,r,n),l=Ds(t),f=r9(t.serverSyncTree_,e,o,l,!0);rc(t.eventQueue_,f),t.server_.put(e.toString(),i.val(!0),(d,h)=>{const m=d==="ok";m||u1("set at "+e+" failed: "+d);const v=$3(t.serverSyncTree_,l,!m);j1(t.eventQueue_,e,v),sa(t,s,d,h)});const u=Bs(t,e);Ee(t,u),j1(t.eventQueue_,u,[])}function FS(t,e,c,a){lc(t,"update",{path:e.toString(),value:c});let s=!0;const n=oc(t),i={};if(n1(c,(r,o)=>{s=!1,i[r]=u9(F2(e,r),Q2(o),t.serverSyncTree_,n)}),s)a1("update() called with empty data.  Don't do anything."),sa(t,a,"ok",void 0);else{const r=Ds(t),o=nS(t.serverSyncTree_,e,i,r);rc(t.eventQueue_,o),t.server_.merge(e.toString(),c,(l,f)=>{const u=l==="ok";u||u1("update at "+e+" failed: "+l);const d=$3(t.serverSyncTree_,r,!u),h=d.length>0?Ee(t,e):e;j1(t.eventQueue_,h,d),sa(t,a,l,f)}),n1(c,l=>{const f=Bs(t,F2(e,l));Ee(t,f)}),j1(t.eventQueue_,e,[])}}function BS(t){lc(t,"onDisconnectEvents");const e=oc(t),c=dt();Y8(t.onDisconnect_,M2(),(s,n)=>{const i=u9(s,n,t.serverSyncTree_,e);Kl(c,s,i)});let a=[];Y8(c,M2(),(s,n)=>{a=a.concat(ac(t.serverSyncTree_,s,n));const i=Bs(t,s);Ee(t,i)}),t.onDisconnect_=dt(),j1(t.eventQueue_,M2(),a)}function US(t,e,c){let a;m2(e._path)===".info"?a=v5(t.infoSyncTree_,e,c):a=v5(t.serverSyncTree_,e,c),H9(t.eventQueue_,e._path,a)}function C5(t,e,c){let a;m2(e._path)===".info"?a=ca(t.infoSyncTree_,e,c):a=ca(t.serverSyncTree_,e,c),H9(t.eventQueue_,e._path,a)}function $S(t){t.persistentConnection_&&t.persistentConnection_.interrupt(kS)}function lc(t,...e){let c="";t.persistentConnection_&&(c=t.persistentConnection_.id+":"),a1(c,...e)}function sa(t,e,c,a){e&&Ue(()=>{if(c==="ok")e(null);else{const s=(c||"error").toUpperCase();let n=s;a&&(n+=": "+a);const i=new Error(n);i.code=s,e(i)}})}function C9(t,e,c){return Ss(t.serverSyncTree_,e,c)||s2.EMPTY_NODE}function Fs(t,e=t.transactionQueueTree_){if(e||fc(t,e),We(e)){const c=V9(t,e);F(c.length>0,"Sending zero length transaction queue"),c.every(s=>s.status===0)&&WS(t,s0(e),c)}else p9(e)&&nc(e,c=>{Fs(t,c)})}function WS(t,e,c){const a=c.map(l=>l.currentWriteId),s=C9(t,e,a);let n=s;const i=s.hash();for(let l=0;l<c.length;l++){const f=c[l];F(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const u=v1(e,f.path);n=n.updateChild(u,f.currentOutputSnapshotRaw)}const r=n.val(!0),o=e;t.server_.put(o.toString(),r,l=>{lc(t,"transaction put response",{path:o.toString(),status:l});let f=[];if(l==="ok"){const u=[];for(let d=0;d<c.length;d++)c[d].status=2,f=f.concat($3(t.serverSyncTree_,c[d].currentWriteId)),c[d].onComplete&&u.push(()=>c[d].onComplete(null,!0,c[d].currentOutputSnapshotResolved)),c[d].unwatcher();fc(t,Is(t.transactionQueueTree_,e)),Fs(t,t.transactionQueueTree_),j1(t.eventQueue_,e,f);for(let d=0;d<u.length;d++)Ue(u[d])}else{if(l==="datastale")for(let u=0;u<c.length;u++)c[u].status===3?c[u].status=4:c[u].status=0;else{u1("transaction at "+o.toString()+" failed: "+l);for(let u=0;u<c.length;u++)c[u].status=4,c[u].abortReason=l}Ee(t,e)}},i)}function Ee(t,e){const c=M9(t,e),a=s0(c),s=V9(t,c);return qS(t,s,a),a}function qS(t,e,c){if(e.length===0)return;const a=[];let s=[];const i=e.filter(r=>r.status===0).map(r=>r.currentWriteId);for(let r=0;r<e.length;r++){const o=e[r],l=v1(c,o.path);let f=!1,u;if(F(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),o.status===4)f=!0,u=o.abortReason,s=s.concat($3(t.serverSyncTree_,o.currentWriteId,!0));else if(o.status===0)if(o.retryCount>=AS)f=!0,u="maxretry",s=s.concat($3(t.serverSyncTree_,o.currentWriteId,!0));else{const d=C9(t,o.path,i);o.currentInputSnapshot=d;const h=e[r].update(d.val());if(h!==void 0){ic("transaction failed: Data returned ",h,o.path);let m=Q2(h);typeof h=="object"&&h!=null&&n3(h,".priority")||(m=m.updatePriority(d.getPriority()));const M=o.currentWriteId,H=oc(t),p=d9(m,d,H);o.currentOutputSnapshotRaw=m,o.currentOutputSnapshotResolved=p,o.currentWriteId=Ds(t),i.splice(i.indexOf(M),1),s=s.concat(r9(t.serverSyncTree_,o.path,p,o.currentWriteId,o.applyLocally)),s=s.concat($3(t.serverSyncTree_,M,!0))}else f=!0,u="nodata",s=s.concat($3(t.serverSyncTree_,o.currentWriteId,!0))}j1(t.eventQueue_,c,s),s=[],f&&(e[r].status=2,function(d){setTimeout(d,Math.floor(0))}(e[r].unwatcher),e[r].onComplete&&(u==="nodata"?a.push(()=>e[r].onComplete(null,!1,e[r].currentInputSnapshot)):a.push(()=>e[r].onComplete(new Error(u),!1,null))))}fc(t,t.transactionQueueTree_);for(let r=0;r<a.length;r++)Ue(a[r]);Fs(t,t.transactionQueueTree_)}function M9(t,e){let c,a=t.transactionQueueTree_;for(c=m2(e);c!==null&&We(a)===void 0;)a=Is(a,c),e=T2(e),c=m2(e);return a}function V9(t,e){const c=[];return _9(t,e,c),c.sort((a,s)=>a.order-s.order),c}function _9(t,e,c){const a=We(e);if(a)for(let s=0;s<a.length;s++)c.push(a[s]);nc(e,s=>{_9(t,s,c)})}function fc(t,e){const c=We(e);if(c){let a=0;for(let s=0;s<c.length;s++)c[s].status!==2&&(c[a]=c[s],a++);c.length=a,h9(e,c.length>0?c:void 0)}nc(e,a=>{fc(t,a)})}function Bs(t,e){const c=s0(M9(t,e)),a=Is(t.transactionQueueTree_,e);return zS(a,s=>{a8(t,s)}),a8(t,a),m9(a,s=>{a8(t,s)}),c}function a8(t,e){const c=We(e);if(c){const a=[];let s=[],n=-1;for(let i=0;i<c.length;i++)c[i].status===3||(c[i].status===1?(F(n===i-1,"All SENT items should be at beginning of queue."),n=i,c[i].status=3,c[i].abortReason="set"):(F(c[i].status===0,"Unexpected transaction status in abort"),c[i].unwatcher(),s=s.concat($3(t.serverSyncTree_,c[i].currentWriteId,!0)),c[i].onComplete&&a.push(c[i].onComplete.bind(null,new Error("set"),!1,null))));n===-1?h9(e,void 0):c.length=n+1,j1(t.eventQueue_,s0(e),s);for(let i=0;i<a.length;i++)Ue(a[i])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(t){let e="";const c=t.split("/");for(let a=0;a<c.length;a++)if(c[a].length>0){let s=c[a];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function jS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const c of t.split("&")){if(c.length===0)continue;const a=c.split("=");a.length===2?e[decodeURIComponent(a[0])]=decodeURIComponent(a[1]):u1(`Invalid query segment '${c}' in query '${t}'`)}return e}const M5=function(t,e){const c=KS(t),a=c.namespace;c.domain==="firebase.com"&&V3(c.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!a||a==="undefined")&&c.domain!=="localhost"&&V3("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),c.secure||tw();const s=c.scheme==="ws"||c.scheme==="wss";return{repoInfo:new Tl(c.host,c.secure,a,s,e,"",a!==c.subdomain),path:new w2(c.pathString)}},KS=function(t){let e="",c="",a="",s="",n="",i=!0,r="https",o=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(r=t.substring(0,l-1),t=t.substring(l+2));let f=t.indexOf("/");f===-1&&(f=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(f,u)),f<u&&(s=GS(t.substring(f,u)));const d=jS(t.substring(Math.min(t.length,u)));l=e.indexOf(":"),l>=0?(i=r==="https"||r==="wss",o=parseInt(e.substring(l+1),10)):l=e.length;const h=e.slice(0,l);if(h.toLowerCase()==="localhost")c="localhost";else if(h.split(".").length<=2)c=h;else{const m=e.indexOf(".");a=e.substring(0,m).toLowerCase(),c=e.substring(m+1),n=a}"ns"in d&&(n=d.ns)}return{host:e,port:o,domain:c,subdomain:a,secure:i,scheme:r,pathString:s,namespace:n}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L9{constructor(e,c,a,s){this.eventType=e,this.eventRegistration=c,this.snapshot=a,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Z2(this.snapshot.exportVal())}}class b9{constructor(e,c,a){this.eventRegistration=e,this.error=c,this.path=a}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,c){this.snapshotCallback=e,this.cancelCallback=c}onValue(e,c){this.snapshotCallback.call(null,e,c)}onCancel(e){return F(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,c,a,s){this._repo=e,this._path=c,this._queryParams=a,this._orderByCalled=s}get key(){return g2(this._path)?null:ps(this._path)}get ref(){return new S3(this._repo,this._path)}get _queryIdentifier(){const e=n5(this._queryParams),c=fs(e);return c==="{}"?"default":c}get _queryObject(){return n5(this._queryParams)}isEqual(e){if(e=K2(e),!(e instanceof Us))return!1;const c=this._repo===e._repo,a=ms(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return c&&a&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ow(this._path)}}class S3 extends Us{constructor(e,c){super(e,c,new zs,!1)}get parent(){const e=Fl(this._path);return e===null?null:new S3(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class D6{constructor(e,c,a){this._node=e,this.ref=c,this._index=a}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const c=new w2(e),a=Ct(this.ref,e);return new D6(this._node.getChild(c),a,B2)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(a,s)=>e(new D6(s,Ct(this.ref,a),B2)))}hasChild(e){const c=new w2(e);return!this._node.getChild(c).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function C4(t,e){return t=K2(t),t._checkNotDeleted("ref"),e!==void 0?Ct(t._root,e):t._root}function Ct(t,e){return t=K2(t),m2(t._path)===null?SS("child","path",e,!1):g9("child","path",e,!1),new S3(t._repo,F2(t._path,e))}function V5(t,e){t=K2(t),xS("set",t._path),bS("set",e,t._path,!1);const c=new K6;return DS(t._repo,t._path,e,null,c.wrapCallback(()=>{})),c.promise}function w9(t,e){yS("update",e,t._path,!1);const c=new K6;return FS(t._repo,t._path,e,c.wrapCallback(()=>{})),c.promise}class $s{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,c){const a=c._queryParams.getIndex();return new L9("value",this,new D6(e.snapshotNode,new S3(c._repo,c._path),a))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,c){return this.callbackContext.hasCancelCallback?new b9(this,e,c):null}matches(e){return e instanceof $s?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Ws{constructor(e,c){this.eventType=e,this.callbackContext=c}respondsTo(e){let c=e==="children_added"?"child_added":e;return c=c==="children_removed"?"child_removed":c,this.eventType===c}createCancelEvent(e,c){return this.callbackContext.hasCancelCallback?new b9(this,e,c):null}createEvent(e,c){F(e.childName!=null,"Child events should have a childName.");const a=Ct(new S3(c._repo,c._path),e.childName),s=c._queryParams.getIndex();return new L9(e.type,this,new D6(e.snapshotNode,a,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ws?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function XS(t,e,c,a,s){let n;if(typeof a=="object"&&(n=void 0,s=a),typeof a=="function"&&(n=a),s&&s.onlyOnce){const o=c,l=(f,u)=>{C5(t._repo,t,r),o(f,u)};l.userCallback=c.userCallback,l.context=c.context,c=l}const i=new YS(c,n||void 0),r=e==="value"?new $s(i):new Ws(e,i);return US(t._repo,t,r),()=>C5(t._repo,t,r)}function qs(t,e,c,a){return XS(t,"value",e,c,a)}Xy(S3);cS(S3);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS="FIREBASE_DATABASE_EMULATOR_HOST",na={};let JS=!1;function ZS(t,e,c,a){t.repoInfo_=new Tl(`${e}:${c}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),a&&(t.authTokenProvider_=a)}function ex(t,e,c,a,s){let n=a||t.options.databaseURL;n===void 0&&(t.options.projectId||V3("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),a1("Using default host for project ",t.options.projectId),n=`${t.options.projectId}-default-rtdb.firebaseio.com`);let i=M5(n,s),r=i.repoInfo,o,l;typeof process<"u"&&Br&&(l=Br[QS]),l?(o=!0,n=`http://${l}?ns=${r.namespace}`,i=M5(n,s),r=i.repoInfo):o=!i.repoInfo.secure;const f=s&&o?new ge(ge.OWNER):new dw(t.name,t.options,e);NS("Invalid Firebase Database URL",i),g2(i.path)||V3("Database URL must point to the root of a Firebase Database (not including a child path).");const u=cx(r,t,f,new uw(t.name,c));return new ax(u,t)}function tx(t,e){const c=na[e];(!c||c[t.key]!==t)&&V3(`Database ${e}(${t.repoInfo_}) has already been deleted.`),$S(t),delete c[t.key]}function cx(t,e,c,a){let s=na[e.name];s||(s={},na[e.name]=s);let n=s[t.toURLString()];return n&&V3("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),n=new PS(t,JS,c,a),s[t.toURLString()]=n,n}class ax{constructor(e,c){this._repoInternal=e,this.app=c,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(IS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new S3(this._repo,M2())),this._rootInternal}_delete(){return this._rootInternal!==null&&(tx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&V3("Cannot call "+e+" on a deleted database.")}}function sx(t=Yt(),e){const c=X6(t,"database").getImmediate({identifier:e});if(!c._instanceStarted){const a=Ya("database");a&&nx(c,...a)}return c}function nx(t,e,c,a={}){t=K2(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&V3("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let n;if(s.repoInfo_.nodeAdmin)a.mockUserToken&&V3('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),n=new ge(ge.OWNER);else if(a.mockUserToken){const i=typeof a.mockUserToken=="string"?a.mockUserToken:xo(a.mockUserToken,t.app.options.projectId);n=new ge(i)}ZS(s,e,c,n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(t){Xb(q4),e4(new C3("database",(e,{instanceIdentifier:c})=>{const a=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),n=e.getProvider("app-check-internal");return ex(a,s,n,c)},"PUBLIC").setMultipleInstances(!0)),E1(Ur,$r,t),E1(Ur,$r,"esm2017")}g3.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};g3.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ix();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y9="firebasestorage.googleapis.com",S9="storageBucket",rx=2*60*1e3,ox=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1 extends y3{constructor(e,c,a=0){super(s8(e),`Firebase Storage: ${c} (${s8(e)})`),this.status_=a,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,c1.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return s8(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var e1;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(e1||(e1={}));function s8(t){return"storage/"+t}function x9(){const t="An unknown error occurred, please check the error payload for server response.";return new c1(e1.UNKNOWN,t)}function lx(t){return new c1(e1.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function fx(t){return new c1(e1.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ux(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new c1(e1.UNAUTHENTICATED,t)}function dx(){return new c1(e1.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function hx(t){return new c1(e1.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function px(){return new c1(e1.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function mx(){return new c1(e1.CANCELED,"User canceled the upload/download.")}function vx(t){return new c1(e1.INVALID_URL,"Invalid URL '"+t+"'.")}function gx(t){return new c1(e1.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Hx(){return new c1(e1.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+S9+"' property when initializing the app?")}function zx(){return new c1(e1.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ia(t){return new c1(e1.INVALID_ARGUMENT,t)}function N9(){return new c1(e1.APP_DELETED,"The Firebase app was deleted.")}function Cx(t){return new c1(e1.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function t6(t){throw new c1(e1.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e,c){this.bucket=e,this.path_=c}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,c){let a;try{a=y1.makeFromUrl(e,c)}catch{return new y1(e,"")}if(a.path==="")return a;throw gx(e)}static makeFromUrl(e,c){let a=null;const s="([A-Za-z0-9.\\-_]+)";function n(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const i="(/(.*))?$",r=new RegExp("^gs://"+s+i,"i"),o={bucket:1,path:3};function l(_){_.path_=decodeURIComponent(_.path)}const f="v[A-Za-z0-9_]+",u=c.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",h=new RegExp(`^https?://${u}/${f}/b/${s}/o${d}`,"i"),m={bucket:1,path:3},v=c===y9?"(?:storage.googleapis.com|storage.cloud.google.com)":c,M="([^?#]*)",H=new RegExp(`^https?://${v}/${s}/${M}`,"i"),g=[{regex:r,indices:o,postModify:n},{regex:h,indices:m,postModify:l},{regex:H,indices:{bucket:1,path:2},postModify:l}];for(let _=0;_<g.length;_++){const b=g[_],A=b.regex.exec(e);if(A){const G=A[b.indices.bucket];let k=A[b.indices.path];k||(k=""),a=new y1(G,k),b.postModify(a);break}}if(a==null)throw vx(e);return a}}class Mx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(t,e,c){let a=1,s=null,n=null,i=!1,r=0;function o(){return r===2}let l=!1;function f(...M){l||(l=!0,e.apply(null,M))}function u(M){s=setTimeout(()=>{s=null,t(h,o())},M)}function d(){n&&clearTimeout(n)}function h(M,...H){if(l){d();return}if(M){d(),f.call(null,M,...H);return}if(o()||i){d(),f.call(null,M,...H);return}a<64&&(a*=2);let g;r===1?(r=2,g=0):g=(a+Math.random())*1e3,u(g)}let m=!1;function v(M){m||(m=!0,d(),!l&&(s!==null?(M||(r=2),clearTimeout(s),u(0)):M||(r=1)))}return u(0),n=setTimeout(()=>{i=!0,v(!0)},c),v}function _x(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lx(t){return t!==void 0}function bx(t){return typeof t=="object"&&!Array.isArray(t)}function T9(t){return typeof t=="string"||t instanceof String}function _5(t,e,c,a){if(a<e)throw ia(`Invalid value for '${t}'. Expected ${e} or greater.`);if(a>c)throw ia(`Invalid value for '${t}'. Expected ${c} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E9(t,e,c){let a=e;return c==null&&(a=`https://${e}`),`${c}://${a}/v0${t}`}function k9(t){const e=encodeURIComponent;let c="?";for(const a in t)if(t.hasOwnProperty(a)){const s=e(a)+"="+e(t[a]);c=c+s+"&"}return c=c.slice(0,-1),c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x4;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(x4||(x4={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(t,e){const c=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,n=e.indexOf(t)!==-1;return c||s||n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e,c,a,s,n,i,r,o,l,f,u,d=!0){this.url_=e,this.method_=c,this.headers_=a,this.body_=s,this.successCodes_=n,this.additionalRetryCodes_=i,this.callback_=r,this.errorCallback_=o,this.timeout_=l,this.progressCallback_=f,this.connectionFactory_=u,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((h,m)=>{this.resolve_=h,this.reject_=m,this.start_()})}start_(){const e=(a,s)=>{if(s){a(!1,new V0(!1,null,!0));return}const n=this.connectionFactory_();this.pendingConnection_=n;const i=r=>{const o=r.loaded,l=r.lengthComputable?r.total:-1;this.progressCallback_!==null&&this.progressCallback_(o,l)};this.progressCallback_!==null&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const r=n.getErrorCode()===x4.NO_ERROR,o=n.getStatus();if(!r||wx(o,this.additionalRetryCodes_)&&this.retry){const f=n.getErrorCode()===x4.ABORT;a(!1,new V0(!1,null,f));return}const l=this.successCodes_.indexOf(o)!==-1;a(!0,new V0(l,n))})},c=(a,s)=>{const n=this.resolve_,i=this.reject_,r=s.connection;if(s.wasSuccessCode)try{const o=this.callback_(r,r.getResponse());Lx(o)?n(o):n()}catch(o){i(o)}else if(r!==null){const o=x9();o.serverResponse=r.getErrorText(),this.errorCallback_?i(this.errorCallback_(r,o)):i(o)}else if(s.canceled){const o=this.appDelete_?N9():mx();i(o)}else{const o=px();i(o)}};this.canceled_?c(!1,new V0(!1,null,!0)):this.backoffId_=Vx(e,c,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&_x(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class V0{constructor(e,c,a){this.wasSuccessCode=e,this.connection=c,this.canceled=!!a}}function Sx(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function xx(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Nx(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Tx(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Ex(t,e,c,a,s,n,i=!0){const r=k9(t.urlParams),o=t.url+r,l=Object.assign({},t.headers);return Nx(l,e),Sx(l,c),xx(l,n),Tx(l,a),new yx(o,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A9(t){let e;try{e=JSON.parse(t)}catch{return null}return bx(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kx(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Ax(t,e){const c=e.split("/").filter(a=>a.length>0).join("/");return t.length===0?c:t+"/"+c}function P9(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Px(t,e){return e}class l1{constructor(e,c,a,s){this.server=e,this.local=c||e,this.writable=!!a,this.xform=s||Px}}let _0=null;function Ix(t){return!T9(t)||t.length<2?t:P9(t)}function Rx(){if(_0)return _0;const t=[];t.push(new l1("bucket")),t.push(new l1("generation")),t.push(new l1("metageneration")),t.push(new l1("name","fullPath",!0));function e(n,i){return Ix(i)}const c=new l1("name");c.xform=e,t.push(c);function a(n,i){return i!==void 0?Number(i):i}const s=new l1("size");return s.xform=a,t.push(s),t.push(new l1("timeCreated")),t.push(new l1("updated")),t.push(new l1("md5Hash",null,!0)),t.push(new l1("cacheControl",null,!0)),t.push(new l1("contentDisposition",null,!0)),t.push(new l1("contentEncoding",null,!0)),t.push(new l1("contentLanguage",null,!0)),t.push(new l1("contentType",null,!0)),t.push(new l1("metadata","customMetadata",!0)),_0=t,_0}function Ox(t,e){function c(){const a=t.bucket,s=t.fullPath,n=new y1(a,s);return e._makeStorageReference(n)}Object.defineProperty(t,"ref",{get:c})}function Dx(t,e,c){const a={};a.type="file";const s=c.length;for(let n=0;n<s;n++){const i=c[n];a[i.local]=i.xform(a,e[i.server])}return Ox(a,t),a}function Fx(t,e,c){const a=A9(e);return a===null?null:Dx(t,a,c)}function Bx(t,e,c,a){const s=A9(e);if(s===null||!T9(s.downloadTokens))return null;const n=s.downloadTokens;if(n.length===0)return null;const i=encodeURIComponent;return n.split(",").map(l=>{const f=t.bucket,u=t.fullPath,d="/b/"+i(f)+"/o/"+i(u),h=E9(d,c,a),m=k9({alt:"media",token:l});return h+m})[0]}class Ux{constructor(e,c,a,s){this.url=e,this.method=c,this.handler=a,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $x(t){if(!t)throw x9()}function Wx(t,e){function c(a,s){const n=Fx(t,s,e);return $x(n!==null),Bx(n,s,t.host,t._protocol)}return c}function qx(t){function e(c,a){let s;return c.getStatus()===401?c.getErrorText().includes("Firebase App Check token is invalid")?s=dx():s=ux():c.getStatus()===402?s=fx(t.bucket):c.getStatus()===403?s=hx(t.path):s=a,s.status=c.getStatus(),s.serverResponse=a.serverResponse,s}return e}function Gx(t){const e=qx(t);function c(a,s){let n=e(a,s);return a.getStatus()===404&&(n=lx(t.path)),n.serverResponse=s.serverResponse,n}return c}function jx(t,e,c){const a=e.fullServerUrl(),s=E9(a,t.host,t._protocol),n="GET",i=t.maxOperationRetryTime,r=new Ux(s,n,Wx(t,c),i);return r.errorHandler=Gx(e),r}class Kx{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=x4.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=x4.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=x4.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,c,a,s){if(this.sent_)throw t6("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(c,e,!0),s!==void 0)for(const n in s)s.hasOwnProperty(n)&&this.xhr_.setRequestHeader(n,s[n].toString());return a!==void 0?this.xhr_.send(a):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw t6("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw t6("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw t6("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw t6("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Yx extends Kx{initXhr(){this.xhr_.responseType="text"}}function Xx(){return new Yx}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F4{constructor(e,c){this._service=e,c instanceof y1?this._location=c:this._location=y1.makeFromUrl(c,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,c){return new F4(e,c)}get root(){const e=new y1(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return P9(this._location.path)}get storage(){return this._service}get parent(){const e=kx(this._location.path);if(e===null)return null;const c=new y1(this._location.bucket,e);return new F4(this._service,c)}_throwIfRoot(e){if(this._location.path==="")throw Cx(e)}}function Qx(t){t._throwIfRoot("getDownloadURL");const e=jx(t.storage,t._location,Rx());return t.storage.makeRequestWithTokens(e,Xx).then(c=>{if(c===null)throw zx();return c})}function Jx(t,e){const c=Ax(t._location.path,e),a=new y1(t._location.bucket,c);return new F4(t.storage,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zx(t){return/^[A-Za-z]+:\/\//.test(t)}function eN(t,e){return new F4(t,e)}function I9(t,e){if(t instanceof Gs){const c=t;if(c._bucket==null)throw Hx();const a=new F4(c,c._bucket);return e!=null?I9(a,e):a}else return e!==void 0?Jx(t,e):t}function tN(t,e){if(e&&Zx(e)){if(t instanceof Gs)return eN(t,e);throw ia("To use ref(service, url), the first argument must be a Storage instance.")}else return I9(t,e)}function L5(t,e){const c=e==null?void 0:e[S9];return c==null?null:y1.makeFromBucketSpec(c,t)}function cN(t,e,c,a={}){t.host=`${e}:${c}`,t._protocol="http";const{mockUserToken:s}=a;s&&(t._overrideAuthToken=typeof s=="string"?s:xo(s,t.app.options.projectId))}class Gs{constructor(e,c,a,s,n){this.app=e,this._authProvider=c,this._appCheckProvider=a,this._url=s,this._firebaseVersion=n,this._bucket=null,this._host=y9,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=rx,this._maxUploadRetryTime=ox,this._requests=new Set,s!=null?this._bucket=y1.makeFromBucketSpec(s,this._host):this._bucket=L5(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=y1.makeFromBucketSpec(this._url,e):this._bucket=L5(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){_5("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){_5("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const c=await e.getToken();if(c!==null)return c.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new F4(this,e)}_makeRequest(e,c,a,s,n=!0){if(this._deleted)return new Mx(N9());{const i=Ex(e,this._appId,a,s,c,this._firebaseVersion,n);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,c){const[a,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,c,a,s).getPromise()}}const b5="@firebase/storage",w5="0.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R9="storage";function aN(t){return t=K2(t),Qx(t)}function sN(t,e){return t=K2(t),tN(t,e)}function nN(t=Yt(),e){t=K2(t);const a=X6(t,R9).getImmediate({identifier:e}),s=Ya("storage");return s&&iN(a,...s),a}function iN(t,e,c,a={}){cN(t,e,c,a)}function rN(t,{instanceIdentifier:e}){const c=t.getProvider("app").getImmediate(),a=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Gs(c,a,s,e,q4)}function oN(){e4(new C3(R9,rN,"PUBLIC").setMultipleInstances(!0)),E1(b5,w5,""),E1(b5,w5,"esm2017")}oN();const lN={apiKey:"AIzaSyBk_WqKQCd9SP39rqI8XSFWmsaNqxu3AtA",authDomain:"dasparfum-e06ae.firebaseapp.com",projectId:"dasparfum-e06ae",storageBucket:"dasparfum-e06ae.appspot.com",messagingSenderId:"352920630111",appId:"1:352920630111:web:7a40a92d632d267cad7cea",measurementId:"G-PWW5440LDN"},O9=Po(lN),fN=nN(),M4=sx(),c6=Rb(O9);Kb(O9,"asia-northeast1");const K4=j6("cart",{state:()=>({cartList:[]}),actions:{addProduct(t){const e=this.cartList.find(c=>c.id===t.id&&c.selectedSizeIndex===t.selectedSizeIndex);if(e)e.quantity+=1;else{let c=JSON.parse(JSON.stringify(t));c.quantity=1,this.cartList.push(c)}},deleteProduct(t){this.cartList=this.cartList.filter(e=>e.id!==t.id)},setList(t){console.log(t,"ssetlist"),Array.isArray(t)?this.cartList=t:this.cartList=[]},submit(){const t=qe(),e=C4(M4,"users/"+t.user.uid);w9(e,{order:this.cartList}),this.clearCart()},clearCart(){this.cartList=[]}}}),D9=j6("order",{state:()=>({order:[]}),actions:{getOrder(){const t=qe(),e=C4(M4,"users/"+t.user.uid);qs(e,c=>{const a=c.val();this.userDb=a,this.order=this.userDb.order})},clearOrder(){this.order=[]}}}),H3=j6("ui",{state:()=>({loginPopup:!1,cartPreview:!1,menuFadeIn:!1}),actions:{showLoginPopup(){this.loginPopup=!0},hideLoginPopup(){this.loginPopup=!1},showCartPreview(){this.cartPreview=!0},hideCartPreview(){this.cartPreview=!1},toggleMenuFadeIn(){this.menuFadeIn=!this.menuFadeIn}}}),uN=new l3,qe=j6("auth",{state:()=>({user:null,userDb:null}),getters:{isLogin(){return this.user!==null}},actions:{signInWithGoogle(){try{GL(c6,uN).then(t=>{const e=t;this.user=e.user,this.createGoogleUserData().then(()=>(this.getUserData(),H3().hideLoginPopup(),!0))})}catch(t){return console.error(t),!1}},createGoogleUserData(){const t=C4(M4,"users/"+this.user.uid);return V5(t,{name:this.user.displayName})},signInWithEmail(t,e){ML(c6,t,e).then(c=>c.user).then(c=>{console.log(c,"useruser"),this.user=c,this.getUserData(c),H3().hideLoginPopup()}).catch(c=>{console.log("登入帳密錯誤",c)})},signUpWithEmail(t,e){CL(c6,t,e).then(c=>c.user).then(c=>{this.user=c,this.createUserData(c.email.split("@")[0]),H3().hideLoginPopup()}).catch(c=>{console.log("註冊失敗，直接登入",t,e),this.signInWithEmail(t,e)})},createUserData(t){const e=C4(M4,"users/"+this.user.uid);return V5(e,{name:t})},getUserData(){return new Promise(t=>{const e=C4(M4,"users/"+this.user.uid);qs(e,c=>{const a=c.val();this.userDb=a,t()})})},checkAuthState(){return new Promise((t,e)=>{LL(c6,c=>{console.log(c,"user"),c?(this.user=c,this.getUserData().then(()=>{t(c)})):(this.user=null,t(null))},e)})},setCartData(){const e=K4().cartList;console.log(e,"shopcartList");const c=C4(M4,"users/"+this.user.uid);w9(c,{cart:e})},logout(){bL(c6).then(t=>{console.log(t,"res"),this.user=null,this.clearUserData()})},clearUserData(){const t=D9();this.user=null,this.userDb=null,t.clearOrder()}}}),js=t=>(z1("data-v-b0e80726"),t=t(),C1(),t),dN={key:0,class:"login-dialogue"},hN={class:"closed"},pN={class:"wrapper"},mN=js(()=>z("div",{class:"loginTitle"},"登入您的帳號",-1)),vN=js(()=>z("div",{class:"email"},"電子郵件",-1)),gN=js(()=>z("div",{class:"password"},"密碼",-1)),HN={__name:"Login",setup(t){const e=H3(),a=z3(e).loginPopup,s=h2(""),n=h2(""),i=h2(""),r=qe();function o(){r.signUpWithEmail(s.value,n.value,i.value)}function l(){r.signInWithGoogle()}return(f,u)=>J(a)?(e2(),o2("div",dN,[z("div",hN,[z("button",{onClick:u[0]||(u[0]=(...d)=>J(e).hideLoginPopup&&J(e).hideLoginPopup(...d))},"Ｘ")]),z("div",pN,[mN,vN,K3(z("input",{type:"email","onUpdate:modelValue":u[1]||(u[1]=d=>s.value=d),name:"email",placeholder:"輸入您的電子郵件"},null,512),[[ji,s.value]]),gN,K3(z("input",{type:"password","onUpdate:modelValue":u[2]||(u[2]=d=>n.value=d),name:"password",placeholder:"輸入密碼"},null,512),[[ji,n.value]]),z("div",{class:"loginButton"},[z("button",{onClick:o},"登入")]),z("div",{class:"loginButton"},[z("button",{onClick:l},"google登入")])])])):se("",!0)}},zN=t1(HN,[["__scopeId","data-v-b0e80726"]]),uc=t=>(z1("data-v-f1b24345"),t=t(),C1(),t),CN={class:"content"},MN={class:"productWrapper"},VN={class:"name"},_N={class:"detailWrapper"},LN={class:"capacity"},bN=uc(()=>z("div",{class:"title"},"容量",-1)),wN={class:"unitPrice"},yN=uc(()=>z("div",{class:"title"},"單價",-1)),SN={class:"quantity"},xN=uc(()=>z("div",{class:"title"},"數量",-1)),NN=uc(()=>z("button",null,"前往結帳",-1)),TN=[NN],EN={__name:"PreviewCart",setup(t,{expose:e}){const c=H3(),a=z3(c),n=z3(K4()).cartList,i=Y1(),r=a.cartPreview;function o(){c.showCartPreview()}function l(){c.hideCartPreview()}e({show:o,hide:l});function f(){i.push("/CartshopView")}return(u,d)=>J(r)?(e2(),o2("div",{key:0,class:"previewWrapper",onMouseleave:l},[z("div",CN,[z("div",MN,[(e2(!0),o2(R2,null,m1(J(n),(h,m)=>(e2(),o2("div",{class:"item",key:m},[z("div",VN,n2(h.title),1),z("div",_N,[z("div",LN,[bN,b1(" "+n2(h.sizeList[h.selectedSizeIndex].capacity)+" ml ",1)]),z("div",wN,[yN,b1(" "+n2(h.sizeList[h.selectedSizeIndex].price),1)]),z("div",SN,[xN,b1(" "+n2(h.quantity),1)])])]))),128))]),z("div",{class:"buttonWrapper",onClick:f},TN)])],32)):se("",!0)}},kN=t1(EN,[["__scopeId","data-v-f1b24345"]]),dc=j6("product",{state:()=>({productList:null}),actions:{getProductList(){return new Promise(t=>{const e=C4(M4,"product");qs(e,c=>{const a=c.val();console.log(a),a.forEach(s=>{s.sizeList.forEach(n=>{this.getProductImage(n)})}),setTimeout(()=>{this.productList=a},1e3)})})},getProductImage(t){const e=sN(fN,t.imagePath);aN(e).then(c=>{const a=c;t.imageSrc=a}).catch(c=>{t.imageSrc=null,console.log(c)})},setCurrentProduct(t){this.currentProduct=t}}}),Ks=""+new URL("LOGO-WQH0Ww7K.png",import.meta.url).href,AN={__name:"AppNavbar",setup(t){const e=H3();function c(){e.toggleMenuFadeIn()}return(a,s)=>{const n=Z3("RouterLink");return e2(),o2("div",{class:q6(["navbar",{"fade-in":J(e).menuFadeIn}]),onClick:c},[a2(n,{to:"/"},{default:I2(()=>[b1("首頁")]),_:1}),a2(n,{to:"/about"},{default:I2(()=>[b1("關於我們")]),_:1}),a2(n,{to:"/productList"},{default:I2(()=>[b1("商品列表")]),_:1}),a2(n,{to:"/shop"},{default:I2(()=>[b1("實體店鋪")]),_:1}),a2(n,{to:"/contact"},{default:I2(()=>[b1("聯絡我們")]),_:1})],2)}}},PN=t1(AN,[["__scopeId","data-v-c7e01cea"]]),IN=t=>(z1("data-v-67000862"),t=t(),C1(),t),RN={class:"logo"},ON=IN(()=>z("img",{src:Ks},null,-1)),DN={class:"login-wrapper"},FN={key:1,class:"welcome"},BN={__name:"AppHeader",setup(t){const e=h2(),c=h2(!1),a=H3(),s=Y1(),n=D2(()=>r.userDb!==null),i=D2(()=>r.userDb),r=qe();function o(){r.logout()}function l(){a.showLoginPopup()}function f(){s.push("/cartshopView")}function u(){s.push("/member")}function d(){r.checkAuthState(),setTimeout(()=>{c.value=!0},1500)}return d(),(h,m)=>{const v=Z3("RouterLink"),M=Z3("icon");return e2(),o2("div",{class:q6(["header",{fixed:J(a).menuFadeIn}])},[z("div",RN,[a2(v,{to:"/"},{default:I2(()=>[ON]),_:1})]),a2(PN,{ref_key:"navbarRef",ref:e},null,512),z("div",{class:"toolbox",onMouseenter:m[3]||(m[3]=(...H)=>h.hidePreviewCart&&h.hidePreviewCart(...H))},[K3(z("div",DN,[n.value?se("",!0):(e2(),o2("div",{key:0,class:"login",onClick:l},"登入會員")),n.value?(e2(),o2("div",FN,n2(i.value.name),1)):se("",!0),n.value?(e2(),o2("div",{key:2,class:"login",onClick:u},"會員頁面")):se("",!0),n.value?(e2(),o2("div",{key:3,class:"login",onClick:o},"登出")):se("",!0)],512),[[he,c.value]]),z("div",{class:"cart",onClick:f,onMouseenter:m[0]||(m[0]=(...H)=>J(a).showCartPreview&&J(a).showCartPreview(...H))},[a2(M,{icon:"cart-shopping"})],32),K3(a2(M,{class:"menu-control",icon:"bars",onClick:m[1]||(m[1]=H=>J(a).toggleMenuFadeIn())},null,512),[[he,!J(a).menuFadeIn]]),K3(a2(M,{class:"menu-close",icon:"xmark",onClick:m[2]||(m[2]=H=>J(a).toggleMenuFadeIn())},null,512),[[he,J(a).menuFadeIn]])],32)],2)}}},UN=t1(BN,[["__scopeId","data-v-67000862"]]),$N=t=>(z1("data-v-68187a5c"),t=t(),C1(),t),WN=$N(()=>z("div",{class:"headerTop"},[z("p",null,"單筆訂單金額滿$1,500，即享全台灣宅配免運費。")],-1)),qN={class:"content"},GN={__name:"AppLayout",setup(t){const e=h2(null),c=h2(!1),a=dc();function s(){a.getProductList()}function n(){setTimeout(()=>{c.value=!0},1500),s()}return n(),(i,r)=>(e2(),o2(R2,null,[WN,a2(UN),z("div",qN,[a2(J(Mo)),a2(zN,{ref_key:"loginRef",ref:e},null,512),a2(kN,{ref:"previewCartRef"},null,512)]),a2(GM)],64))}},jN=t1(GN,[["__scopeId","data-v-68187a5c"]]),KN={__name:"App",setup(t){return(e,c)=>(e2(),u3(jN))}},YN=""+new URL("home-perfume-FjvhSv2s.jpg",import.meta.url).href,XN=""+new URL("home-gift-0FUBJj_3.jpg",import.meta.url).href,QN=""+new URL("home-videocall-44cJss5W.jpg",import.meta.url).href,JN=t=>(z1("data-v-2643e7a9"),t=t(),C1(),t),ZN={class:"app-button"},eT={class:"text"},tT=JN(()=>z("div",{class:"action"},"→",-1)),cT={__name:"AppButton",props:["title","path"],setup(t){const e=Y1(),c=t;function a(){e.push(c.path)}return(s,n)=>(e2(),o2("div",ZN,[z("div",{class:"wrapper",onClick:a},[z("div",eT,n2(t.title),1),tT])]))}},ce=t1(cT,[["__scopeId","data-v-2643e7a9"]]);function y5(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function Ys(t,e){t===void 0&&(t={}),e===void 0&&(e={}),Object.keys(e).forEach(c=>{typeof t[c]>"u"?t[c]=e[c]:y5(e[c])&&y5(t[c])&&Object.keys(e[c]).length>0&&Ys(t[c],e[c])})}const F9={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function k1(){const t=typeof document<"u"?document:{};return Ys(t,F9),t}const aT={document:F9,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}};function M1(){const t=typeof window<"u"?window:{};return Ys(t,aT),t}function P3(t){return t===void 0&&(t=""),t.trim().split(" ").filter(e=>!!e.trim())}function sT(t){const e=t;Object.keys(e).forEach(c=>{try{e[c]=null}catch{}try{delete e[c]}catch{}})}function Mt(t,e){return e===void 0&&(e=0),setTimeout(t,e)}function Vt(){return Date.now()}function nT(t){const e=M1();let c;return e.getComputedStyle&&(c=e.getComputedStyle(t,null)),!c&&t.currentStyle&&(c=t.currentStyle),c||(c=t.style),c}function iT(t,e){e===void 0&&(e="x");const c=M1();let a,s,n;const i=nT(t);return c.WebKitCSSMatrix?(s=i.transform||i.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(r=>r.replace(",",".")).join(", ")),n=new c.WebKitCSSMatrix(s==="none"?"":s)):(n=i.MozTransform||i.OTransform||i.MsTransform||i.msTransform||i.transform||i.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=n.toString().split(",")),e==="x"&&(c.WebKitCSSMatrix?s=n.m41:a.length===16?s=parseFloat(a[12]):s=parseFloat(a[4])),e==="y"&&(c.WebKitCSSMatrix?s=n.m42:a.length===16?s=parseFloat(a[13]):s=parseFloat(a[5])),s||0}function L0(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function rT(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function L1(){const t=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let c=1;c<arguments.length;c+=1){const a=c<0||arguments.length<=c?void 0:arguments[c];if(a!=null&&!rT(a)){const s=Object.keys(Object(a)).filter(n=>e.indexOf(n)<0);for(let n=0,i=s.length;n<i;n+=1){const r=s[n],o=Object.getOwnPropertyDescriptor(a,r);o!==void 0&&o.enumerable&&(L0(t[r])&&L0(a[r])?a[r].__swiper__?t[r]=a[r]:L1(t[r],a[r]):!L0(t[r])&&L0(a[r])?(t[r]={},a[r].__swiper__?t[r]=a[r]:L1(t[r],a[r])):t[r]=a[r])}}}return t}function r6(t,e,c){t.style.setProperty(e,c)}function B9(t){let{swiper:e,targetPosition:c,side:a}=t;const s=M1(),n=-e.translate;let i=null,r;const o=e.params.speed;e.wrapperEl.style.scrollSnapType="none",s.cancelAnimationFrame(e.cssModeFrameID);const l=c>n?"next":"prev",f=(d,h)=>l==="next"&&d>=h||l==="prev"&&d<=h,u=()=>{r=new Date().getTime(),i===null&&(i=r);const d=Math.max(Math.min((r-i)/o,1),0),h=.5-Math.cos(d*Math.PI)/2;let m=n+h*(c-n);if(f(m,c)&&(m=c),e.wrapperEl.scrollTo({[a]:m}),f(m,c)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[a]:m})}),s.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=s.requestAnimationFrame(u)};u()}function U9(t){return t.querySelector(".swiper-slide-transform")||t.shadowRoot&&t.shadowRoot.querySelector(".swiper-slide-transform")||t}function U1(t,e){return e===void 0&&(e=""),[...t.children].filter(c=>c.matches(e))}function _t(t){try{console.warn(t);return}catch{}}function B4(t,e){e===void 0&&(e=[]);const c=document.createElement(t);return c.classList.add(...Array.isArray(e)?e:P3(e)),c}function oT(t){const e=M1(),c=k1(),a=t.getBoundingClientRect(),s=c.body,n=t.clientTop||s.clientTop||0,i=t.clientLeft||s.clientLeft||0,r=t===e?e.scrollY:t.scrollTop,o=t===e?e.scrollX:t.scrollLeft;return{top:a.top+r-n,left:a.left+o-i}}function lT(t,e){const c=[];for(;t.previousElementSibling;){const a=t.previousElementSibling;e?a.matches(e)&&c.push(a):c.push(a),t=a}return c}function fT(t,e){const c=[];for(;t.nextElementSibling;){const a=t.nextElementSibling;e?a.matches(e)&&c.push(a):c.push(a),t=a}return c}function W3(t,e){return M1().getComputedStyle(t,null).getPropertyValue(e)}function Lt(t){let e=t,c;if(e){for(c=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(c+=1);return c}}function $9(t,e){const c=[];let a=t.parentElement;for(;a;)e?a.matches(e)&&c.push(a):c.push(a),a=a.parentElement;return c}function uT(t,e){function c(a){a.target===t&&(e.call(t,a),t.removeEventListener("transitionend",c))}e&&t.addEventListener("transitionend",c)}function ra(t,e,c){const a=M1();return c?t[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(a.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(a.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):t.offsetWidth}let n8;function dT(){const t=M1(),e=k1();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function W9(){return n8||(n8=dT()),n8}let i8;function hT(t){let{userAgent:e}=t===void 0?{}:t;const c=W9(),a=M1(),s=a.navigator.platform,n=e||a.navigator.userAgent,i={ios:!1,android:!1},r=a.screen.width,o=a.screen.height,l=n.match(/(Android);?[\s\/]+([\d.]+)?/);let f=n.match(/(iPad).*OS\s([\d_]+)/);const u=n.match(/(iPod)(.*OS\s([\d_]+))?/),d=!f&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h=s==="Win32";let m=s==="MacIntel";const v=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!f&&m&&c.touch&&v.indexOf(`${r}x${o}`)>=0&&(f=n.match(/(Version)\/([\d.]+)/),f||(f=[0,1,"13_0_0"]),m=!1),l&&!h&&(i.os="android",i.android=!0),(f||d||u)&&(i.os="ios",i.ios=!0),i}function pT(t){return t===void 0&&(t={}),i8||(i8=hT(t)),i8}let r8;function mT(){const t=M1();let e=!1;function c(){const a=t.navigator.userAgent.toLowerCase();return a.indexOf("safari")>=0&&a.indexOf("chrome")<0&&a.indexOf("android")<0}if(c()){const a=String(t.navigator.userAgent);if(a.includes("Version/")){const[s,n]=a.split("Version/")[1].split(" ")[0].split(".").map(i=>Number(i));e=s<16||s===16&&n<2}}return{isSafari:e||c(),needPerspectiveFix:e,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)}}function vT(){return r8||(r8=mT()),r8}function gT(t){let{swiper:e,on:c,emit:a}=t;const s=M1();let n=null,i=null;const r=()=>{!e||e.destroyed||!e.initialized||(a("beforeResize"),a("resize"))},o=()=>{!e||e.destroyed||!e.initialized||(n=new ResizeObserver(u=>{i=s.requestAnimationFrame(()=>{const{width:d,height:h}=e;let m=d,v=h;u.forEach(M=>{let{contentBoxSize:H,contentRect:p,target:g}=M;g&&g!==e.el||(m=p?p.width:(H[0]||H).inlineSize,v=p?p.height:(H[0]||H).blockSize)}),(m!==d||v!==h)&&r()})}),n.observe(e.el))},l=()=>{i&&s.cancelAnimationFrame(i),n&&n.unobserve&&e.el&&(n.unobserve(e.el),n=null)},f=()=>{!e||e.destroyed||!e.initialized||a("orientationchange")};c("init",()=>{if(e.params.resizeObserver&&typeof s.ResizeObserver<"u"){o();return}s.addEventListener("resize",r),s.addEventListener("orientationchange",f)}),c("destroy",()=>{l(),s.removeEventListener("resize",r),s.removeEventListener("orientationchange",f)})}function HT(t){let{swiper:e,extendParams:c,on:a,emit:s}=t;const n=[],i=M1(),r=function(f,u){u===void 0&&(u={});const d=i.MutationObserver||i.WebkitMutationObserver,h=new d(m=>{if(e.__preventObserver__)return;if(m.length===1){s("observerUpdate",m[0]);return}const v=function(){s("observerUpdate",m[0])};i.requestAnimationFrame?i.requestAnimationFrame(v):i.setTimeout(v,0)});h.observe(f,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:typeof u.childList>"u"?!0:u.childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),n.push(h)},o=()=>{if(e.params.observer){if(e.params.observeParents){const f=$9(e.hostEl);for(let u=0;u<f.length;u+=1)r(f[u])}r(e.hostEl,{childList:e.params.observeSlideChildren}),r(e.wrapperEl,{attributes:!1})}},l=()=>{n.forEach(f=>{f.disconnect()}),n.splice(0,n.length)};c({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",o),a("destroy",l)}var zT={on(t,e,c){const a=this;if(!a.eventsListeners||a.destroyed||typeof e!="function")return a;const s=c?"unshift":"push";return t.split(" ").forEach(n=>{a.eventsListeners[n]||(a.eventsListeners[n]=[]),a.eventsListeners[n][s](e)}),a},once(t,e,c){const a=this;if(!a.eventsListeners||a.destroyed||typeof e!="function")return a;function s(){a.off(t,s),s.__emitterProxy&&delete s.__emitterProxy;for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];e.apply(a,i)}return s.__emitterProxy=e,a.on(t,s,c)},onAny(t,e){const c=this;if(!c.eventsListeners||c.destroyed||typeof t!="function")return c;const a=e?"unshift":"push";return c.eventsAnyListeners.indexOf(t)<0&&c.eventsAnyListeners[a](t),c},offAny(t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const c=e.eventsAnyListeners.indexOf(t);return c>=0&&e.eventsAnyListeners.splice(c,1),e},off(t,e){const c=this;return!c.eventsListeners||c.destroyed||!c.eventsListeners||t.split(" ").forEach(a=>{typeof e>"u"?c.eventsListeners[a]=[]:c.eventsListeners[a]&&c.eventsListeners[a].forEach((s,n)=>{(s===e||s.__emitterProxy&&s.__emitterProxy===e)&&c.eventsListeners[a].splice(n,1)})}),c},emit(){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let e,c,a;for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return typeof n[0]=="string"||Array.isArray(n[0])?(e=n[0],c=n.slice(1,n.length),a=t):(e=n[0].events,c=n[0].data,a=n[0].context||t),c.unshift(a),(Array.isArray(e)?e:e.split(" ")).forEach(o=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(a,[o,...c])}),t.eventsListeners&&t.eventsListeners[o]&&t.eventsListeners[o].forEach(l=>{l.apply(a,c)})}),t}};function CT(){const t=this;let e,c;const a=t.el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=a.clientWidth,typeof t.params.height<"u"&&t.params.height!==null?c=t.params.height:c=a.clientHeight,!(e===0&&t.isHorizontal()||c===0&&t.isVertical())&&(e=e-parseInt(W3(a,"padding-left")||0,10)-parseInt(W3(a,"padding-right")||0,10),c=c-parseInt(W3(a,"padding-top")||0,10)-parseInt(W3(a,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(c)&&(c=0),Object.assign(t,{width:e,height:c,size:t.isHorizontal()?e:c}))}function MT(){const t=this;function e(y,O){return parseFloat(y.getPropertyValue(t.getDirectionLabel(O))||0)}const c=t.params,{wrapperEl:a,slidesEl:s,size:n,rtlTranslate:i,wrongRTL:r}=t,o=t.virtual&&c.virtual.enabled,l=o?t.virtual.slides.length:t.slides.length,f=U1(s,`.${t.params.slideClass}, swiper-slide`),u=o?t.virtual.slides.length:f.length;let d=[];const h=[],m=[];let v=c.slidesOffsetBefore;typeof v=="function"&&(v=c.slidesOffsetBefore.call(t));let M=c.slidesOffsetAfter;typeof M=="function"&&(M=c.slidesOffsetAfter.call(t));const H=t.snapGrid.length,p=t.slidesGrid.length;let g=c.spaceBetween,_=-v,b=0,A=0;if(typeof n>"u")return;typeof g=="string"&&g.indexOf("%")>=0?g=parseFloat(g.replace("%",""))/100*n:typeof g=="string"&&(g=parseFloat(g)),t.virtualSize=-g,f.forEach(y=>{i?y.style.marginLeft="":y.style.marginRight="",y.style.marginBottom="",y.style.marginTop=""}),c.centeredSlides&&c.cssMode&&(r6(a,"--swiper-centered-offset-before",""),r6(a,"--swiper-centered-offset-after",""));const G=c.grid&&c.grid.rows>1&&t.grid;G?t.grid.initSlides(f):t.grid&&t.grid.unsetSlides();let k;const w=c.slidesPerView==="auto"&&c.breakpoints&&Object.keys(c.breakpoints).filter(y=>typeof c.breakpoints[y].slidesPerView<"u").length>0;for(let y=0;y<u;y+=1){k=0;let O;if(f[y]&&(O=f[y]),G&&t.grid.updateSlide(y,O,f),!(f[y]&&W3(O,"display")==="none")){if(c.slidesPerView==="auto"){w&&(f[y].style[t.getDirectionLabel("width")]="");const E=getComputedStyle(O),x=O.style.transform,R=O.style.webkitTransform;if(x&&(O.style.transform="none"),R&&(O.style.webkitTransform="none"),c.roundLengths)k=t.isHorizontal()?ra(O,"width",!0):ra(O,"height",!0);else{const D=e(E,"width"),U=e(E,"padding-left"),l2=e(E,"padding-right"),q=e(E,"margin-left"),f2=e(E,"margin-right"),y2=E.getPropertyValue("box-sizing");if(y2&&y2==="border-box")k=D+q+f2;else{const{clientWidth:W2,offsetWidth:U2}=O;k=D+U+l2+q+f2+(U2-W2)}}x&&(O.style.transform=x),R&&(O.style.webkitTransform=R),c.roundLengths&&(k=Math.floor(k))}else k=(n-(c.slidesPerView-1)*g)/c.slidesPerView,c.roundLengths&&(k=Math.floor(k)),f[y]&&(f[y].style[t.getDirectionLabel("width")]=`${k}px`);f[y]&&(f[y].swiperSlideSize=k),m.push(k),c.centeredSlides?(_=_+k/2+b/2+g,b===0&&y!==0&&(_=_-n/2-g),y===0&&(_=_-n/2-g),Math.abs(_)<1/1e3&&(_=0),c.roundLengths&&(_=Math.floor(_)),A%c.slidesPerGroup===0&&d.push(_),h.push(_)):(c.roundLengths&&(_=Math.floor(_)),(A-Math.min(t.params.slidesPerGroupSkip,A))%t.params.slidesPerGroup===0&&d.push(_),h.push(_),_=_+k+g),t.virtualSize+=k+g,b=k,A+=1}}if(t.virtualSize=Math.max(t.virtualSize,n)+M,i&&r&&(c.effect==="slide"||c.effect==="coverflow")&&(a.style.width=`${t.virtualSize+g}px`),c.setWrapperSize&&(a.style[t.getDirectionLabel("width")]=`${t.virtualSize+g}px`),G&&t.grid.updateWrapperSize(k,d),!c.centeredSlides){const y=[];for(let O=0;O<d.length;O+=1){let E=d[O];c.roundLengths&&(E=Math.floor(E)),d[O]<=t.virtualSize-n&&y.push(E)}d=y,Math.floor(t.virtualSize-n)-Math.floor(d[d.length-1])>1&&d.push(t.virtualSize-n)}if(o&&c.loop){const y=m[0]+g;if(c.slidesPerGroup>1){const O=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/c.slidesPerGroup),E=y*c.slidesPerGroup;for(let x=0;x<O;x+=1)d.push(d[d.length-1]+E)}for(let O=0;O<t.virtual.slidesBefore+t.virtual.slidesAfter;O+=1)c.slidesPerGroup===1&&d.push(d[d.length-1]+y),h.push(h[h.length-1]+y),t.virtualSize+=y}if(d.length===0&&(d=[0]),g!==0){const y=t.isHorizontal()&&i?"marginLeft":t.getDirectionLabel("marginRight");f.filter((O,E)=>!c.cssMode||c.loop?!0:E!==f.length-1).forEach(O=>{O.style[y]=`${g}px`})}if(c.centeredSlides&&c.centeredSlidesBounds){let y=0;m.forEach(E=>{y+=E+(g||0)}),y-=g;const O=y-n;d=d.map(E=>E<=0?-v:E>O?O+M:E)}if(c.centerInsufficientSlides){let y=0;if(m.forEach(O=>{y+=O+(g||0)}),y-=g,y<n){const O=(n-y)/2;d.forEach((E,x)=>{d[x]=E-O}),h.forEach((E,x)=>{h[x]=E+O})}}if(Object.assign(t,{slides:f,snapGrid:d,slidesGrid:h,slidesSizesGrid:m}),c.centeredSlides&&c.cssMode&&!c.centeredSlidesBounds){r6(a,"--swiper-centered-offset-before",`${-d[0]}px`),r6(a,"--swiper-centered-offset-after",`${t.size/2-m[m.length-1]/2}px`);const y=-t.snapGrid[0],O=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(E=>E+y),t.slidesGrid=t.slidesGrid.map(E=>E+O)}if(u!==l&&t.emit("slidesLengthChange"),d.length!==H&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),h.length!==p&&t.emit("slidesGridLengthChange"),c.watchSlidesProgress&&t.updateSlidesOffset(),t.emit("slidesUpdated"),!o&&!c.cssMode&&(c.effect==="slide"||c.effect==="fade")){const y=`${c.containerModifierClass}backface-hidden`,O=t.el.classList.contains(y);u<=c.maxBackfaceHiddenSlides?O||t.el.classList.add(y):O&&t.el.classList.remove(y)}}function VT(t){const e=this,c=[],a=e.virtual&&e.params.virtual.enabled;let s=0,n;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);const i=r=>a?e.slides[e.getSlideIndexByData(r)]:e.slides[r];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(r=>{c.push(r)});else for(n=0;n<Math.ceil(e.params.slidesPerView);n+=1){const r=e.activeIndex+n;if(r>e.slides.length&&!a)break;c.push(i(r))}else c.push(i(e.activeIndex));for(n=0;n<c.length;n+=1)if(typeof c[n]<"u"){const r=c[n].offsetHeight;s=r>s?r:s}(s||s===0)&&(e.wrapperEl.style.height=`${s}px`)}function _T(){const t=this,e=t.slides,c=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let a=0;a<e.length;a+=1)e[a].swiperSlideOffset=(t.isHorizontal()?e[a].offsetLeft:e[a].offsetTop)-c-t.cssOverflowAdjustment()}function LT(t){t===void 0&&(t=this&&this.translate||0);const e=this,c=e.params,{slides:a,rtlTranslate:s,snapGrid:n}=e;if(a.length===0)return;typeof a[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let i=-t;s&&(i=t),a.forEach(o=>{o.classList.remove(c.slideVisibleClass,c.slideFullyVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];let r=c.spaceBetween;typeof r=="string"&&r.indexOf("%")>=0?r=parseFloat(r.replace("%",""))/100*e.size:typeof r=="string"&&(r=parseFloat(r));for(let o=0;o<a.length;o+=1){const l=a[o];let f=l.swiperSlideOffset;c.cssMode&&c.centeredSlides&&(f-=a[0].swiperSlideOffset);const u=(i+(c.centeredSlides?e.minTranslate():0)-f)/(l.swiperSlideSize+r),d=(i-n[0]+(c.centeredSlides?e.minTranslate():0)-f)/(l.swiperSlideSize+r),h=-(i-f),m=h+e.slidesSizesGrid[o],v=h>=0&&h<=e.size-e.slidesSizesGrid[o];(h>=0&&h<e.size-1||m>1&&m<=e.size||h<=0&&m>=e.size)&&(e.visibleSlides.push(l),e.visibleSlidesIndexes.push(o),a[o].classList.add(c.slideVisibleClass)),v&&a[o].classList.add(c.slideFullyVisibleClass),l.progress=s?-u:u,l.originalProgress=s?-d:d}}function bT(t){const e=this;if(typeof t>"u"){const f=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*f||0}const c=e.params,a=e.maxTranslate()-e.minTranslate();let{progress:s,isBeginning:n,isEnd:i,progressLoop:r}=e;const o=n,l=i;if(a===0)s=0,n=!0,i=!0;else{s=(t-e.minTranslate())/a;const f=Math.abs(t-e.minTranslate())<1,u=Math.abs(t-e.maxTranslate())<1;n=f||s<=0,i=u||s>=1,f&&(s=0),u&&(s=1)}if(c.loop){const f=e.getSlideIndexByData(0),u=e.getSlideIndexByData(e.slides.length-1),d=e.slidesGrid[f],h=e.slidesGrid[u],m=e.slidesGrid[e.slidesGrid.length-1],v=Math.abs(t);v>=d?r=(v-d)/m:r=(v+m-h)/m,r>1&&(r-=1)}Object.assign(e,{progress:s,progressLoop:r,isBeginning:n,isEnd:i}),(c.watchSlidesProgress||c.centeredSlides&&c.autoHeight)&&e.updateSlidesProgress(t),n&&!o&&e.emit("reachBeginning toEdge"),i&&!l&&e.emit("reachEnd toEdge"),(o&&!n||l&&!i)&&e.emit("fromEdge"),e.emit("progress",s)}function wT(){const t=this,{slides:e,params:c,slidesEl:a,activeIndex:s}=t,n=t.virtual&&c.virtual.enabled,i=t.grid&&c.grid&&c.grid.rows>1,r=u=>U1(a,`.${c.slideClass}${u}, swiper-slide${u}`)[0];e.forEach(u=>{u.classList.remove(c.slideActiveClass,c.slideNextClass,c.slidePrevClass)});let o,l,f;if(n)if(c.loop){let u=s-t.virtual.slidesBefore;u<0&&(u=t.virtual.slides.length+u),u>=t.virtual.slides.length&&(u-=t.virtual.slides.length),o=r(`[data-swiper-slide-index="${u}"]`)}else o=r(`[data-swiper-slide-index="${s}"]`);else i?(o=e.filter(u=>u.column===s)[0],f=e.filter(u=>u.column===s+1)[0],l=e.filter(u=>u.column===s-1)[0]):o=e[s];o&&(o.classList.add(c.slideActiveClass),i?(f&&f.classList.add(c.slideNextClass),l&&l.classList.add(c.slidePrevClass)):(f=fT(o,`.${c.slideClass}, swiper-slide`)[0],c.loop&&!f&&(f=e[0]),f&&f.classList.add(c.slideNextClass),l=lT(o,`.${c.slideClass}, swiper-slide`)[0],c.loop&&!l===0&&(l=e[e.length-1]),l&&l.classList.add(c.slidePrevClass))),t.emitSlidesClasses()}const $0=(t,e)=>{if(!t||t.destroyed||!t.params)return;const c=()=>t.isElement?"swiper-slide":`.${t.params.slideClass}`,a=e.closest(c());if(a){let s=a.querySelector(`.${t.params.lazyPreloaderClass}`);!s&&t.isElement&&(a.shadowRoot?s=a.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{a.shadowRoot&&(s=a.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),s&&s.remove())})),s&&s.remove()}},o8=(t,e)=>{if(!t.slides[e])return;const c=t.slides[e].querySelector('[loading="lazy"]');c&&c.removeAttribute("loading")},oa=t=>{if(!t||t.destroyed||!t.params)return;let e=t.params.lazyPreloadPrevNext;const c=t.slides.length;if(!c||!e||e<0)return;e=Math.min(e,c);const a=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(t.params.slidesPerView),s=t.activeIndex;if(t.params.grid&&t.params.grid.rows>1){const i=s,r=[i-e];r.push(...Array.from({length:e}).map((o,l)=>i+a+l)),t.slides.forEach((o,l)=>{r.includes(o.column)&&o8(t,l)});return}const n=s+a-1;if(t.params.rewind||t.params.loop)for(let i=s-e;i<=n+e;i+=1){const r=(i%c+c)%c;(r<s||r>n)&&o8(t,r)}else for(let i=Math.max(s-e,0);i<=Math.min(n+e,c-1);i+=1)i!==s&&(i>n||i<s)&&o8(t,i)};function yT(t){const{slidesGrid:e,params:c}=t,a=t.rtlTranslate?t.translate:-t.translate;let s;for(let n=0;n<e.length;n+=1)typeof e[n+1]<"u"?a>=e[n]&&a<e[n+1]-(e[n+1]-e[n])/2?s=n:a>=e[n]&&a<e[n+1]&&(s=n+1):a>=e[n]&&(s=n);return c.normalizeSlideIndex&&(s<0||typeof s>"u")&&(s=0),s}function ST(t){const e=this,c=e.rtlTranslate?e.translate:-e.translate,{snapGrid:a,params:s,activeIndex:n,realIndex:i,snapIndex:r}=e;let o=t,l;const f=h=>{let m=h-e.virtual.slidesBefore;return m<0&&(m=e.virtual.slides.length+m),m>=e.virtual.slides.length&&(m-=e.virtual.slides.length),m};if(typeof o>"u"&&(o=yT(e)),a.indexOf(c)>=0)l=a.indexOf(c);else{const h=Math.min(s.slidesPerGroupSkip,o);l=h+Math.floor((o-h)/s.slidesPerGroup)}if(l>=a.length&&(l=a.length-1),o===n&&!e.params.loop){l!==r&&(e.snapIndex=l,e.emit("snapIndexChange"));return}if(o===n&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=f(o);return}const u=e.grid&&s.grid&&s.grid.rows>1;let d;if(e.virtual&&s.virtual.enabled&&s.loop)d=f(o);else if(u){const h=e.slides.filter(v=>v.column===o)[0];let m=parseInt(h.getAttribute("data-swiper-slide-index"),10);Number.isNaN(m)&&(m=Math.max(e.slides.indexOf(h),0)),d=Math.floor(m/s.grid.rows)}else if(e.slides[o]){const h=e.slides[o].getAttribute("data-swiper-slide-index");h?d=parseInt(h,10):d=o}else d=o;Object.assign(e,{previousSnapIndex:r,snapIndex:l,previousRealIndex:i,realIndex:d,previousIndex:n,activeIndex:o}),e.initialized&&oa(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(i!==d&&e.emit("realIndexChange"),e.emit("slideChange"))}function xT(t,e){const c=this,a=c.params;let s=t.closest(`.${a.slideClass}, swiper-slide`);!s&&c.isElement&&e&&e.length>1&&e.includes(t)&&[...e.slice(e.indexOf(t)+1,e.length)].forEach(r=>{!s&&r.matches&&r.matches(`.${a.slideClass}, swiper-slide`)&&(s=r)});let n=!1,i;if(s){for(let r=0;r<c.slides.length;r+=1)if(c.slides[r]===s){n=!0,i=r;break}}if(s&&n)c.clickedSlide=s,c.virtual&&c.params.virtual.enabled?c.clickedIndex=parseInt(s.getAttribute("data-swiper-slide-index"),10):c.clickedIndex=i;else{c.clickedSlide=void 0,c.clickedIndex=void 0;return}a.slideToClickedSlide&&c.clickedIndex!==void 0&&c.clickedIndex!==c.activeIndex&&c.slideToClickedSlide()}var NT={updateSize:CT,updateSlides:MT,updateAutoHeight:VT,updateSlidesOffset:_T,updateSlidesProgress:LT,updateProgress:bT,updateSlidesClasses:wT,updateActiveIndex:ST,updateClickedSlide:xT};function TT(t){t===void 0&&(t=this.isHorizontal()?"x":"y");const e=this,{params:c,rtlTranslate:a,translate:s,wrapperEl:n}=e;if(c.virtualTranslate)return a?-s:s;if(c.cssMode)return s;let i=iT(n,t);return i+=e.cssOverflowAdjustment(),a&&(i=-i),i||0}function ET(t,e){const c=this,{rtlTranslate:a,params:s,wrapperEl:n,progress:i}=c;let r=0,o=0;const l=0;c.isHorizontal()?r=a?-t:t:o=t,s.roundLengths&&(r=Math.floor(r),o=Math.floor(o)),c.previousTranslate=c.translate,c.translate=c.isHorizontal()?r:o,s.cssMode?n[c.isHorizontal()?"scrollLeft":"scrollTop"]=c.isHorizontal()?-r:-o:s.virtualTranslate||(c.isHorizontal()?r-=c.cssOverflowAdjustment():o-=c.cssOverflowAdjustment(),n.style.transform=`translate3d(${r}px, ${o}px, ${l}px)`);let f;const u=c.maxTranslate()-c.minTranslate();u===0?f=0:f=(t-c.minTranslate())/u,f!==i&&c.updateProgress(t),c.emit("setTranslate",c.translate,e)}function kT(){return-this.snapGrid[0]}function AT(){return-this.snapGrid[this.snapGrid.length-1]}function PT(t,e,c,a,s){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),c===void 0&&(c=!0),a===void 0&&(a=!0);const n=this,{params:i,wrapperEl:r}=n;if(n.animating&&i.preventInteractionOnTransition)return!1;const o=n.minTranslate(),l=n.maxTranslate();let f;if(a&&t>o?f=o:a&&t<l?f=l:f=t,n.updateProgress(f),i.cssMode){const u=n.isHorizontal();if(e===0)r[u?"scrollLeft":"scrollTop"]=-f;else{if(!n.support.smoothScroll)return B9({swiper:n,targetPosition:-f,side:u?"left":"top"}),!0;r.scrollTo({[u?"left":"top"]:-f,behavior:"smooth"})}return!0}return e===0?(n.setTransition(0),n.setTranslate(f),c&&(n.emit("beforeTransitionStart",e,s),n.emit("transitionEnd"))):(n.setTransition(e),n.setTranslate(f),c&&(n.emit("beforeTransitionStart",e,s),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(d){!n||n.destroyed||d.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,c&&n.emit("transitionEnd"))}),n.wrapperEl.addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd))),!0}var IT={getTranslate:TT,setTranslate:ET,minTranslate:kT,maxTranslate:AT,translateTo:PT};function RT(t,e){const c=this;c.params.cssMode||(c.wrapperEl.style.transitionDuration=`${t}ms`,c.wrapperEl.style.transitionDelay=t===0?"0ms":""),c.emit("setTransition",t,e)}function q9(t){let{swiper:e,runCallbacks:c,direction:a,step:s}=t;const{activeIndex:n,previousIndex:i}=e;let r=a;if(r||(n>i?r="next":n<i?r="prev":r="reset"),e.emit(`transition${s}`),c&&n!==i){if(r==="reset"){e.emit(`slideResetTransition${s}`);return}e.emit(`slideChangeTransition${s}`),r==="next"?e.emit(`slideNextTransition${s}`):e.emit(`slidePrevTransition${s}`)}}function OT(t,e){t===void 0&&(t=!0);const c=this,{params:a}=c;a.cssMode||(a.autoHeight&&c.updateAutoHeight(),q9({swiper:c,runCallbacks:t,direction:e,step:"Start"}))}function DT(t,e){t===void 0&&(t=!0);const c=this,{params:a}=c;c.animating=!1,!a.cssMode&&(c.setTransition(0),q9({swiper:c,runCallbacks:t,direction:e,step:"End"}))}var FT={setTransition:RT,transitionStart:OT,transitionEnd:DT};function BT(t,e,c,a,s){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),c===void 0&&(c=!0),typeof t=="string"&&(t=parseInt(t,10));const n=this;let i=t;i<0&&(i=0);const{params:r,snapGrid:o,slidesGrid:l,previousIndex:f,activeIndex:u,rtlTranslate:d,wrapperEl:h,enabled:m}=n;if(n.animating&&r.preventInteractionOnTransition||!m&&!a&&!s)return!1;const v=Math.min(n.params.slidesPerGroupSkip,i);let M=v+Math.floor((i-v)/n.params.slidesPerGroup);M>=o.length&&(M=o.length-1);const H=-o[M];if(r.normalizeSlideIndex)for(let g=0;g<l.length;g+=1){const _=-Math.floor(H*100),b=Math.floor(l[g]*100),A=Math.floor(l[g+1]*100);typeof l[g+1]<"u"?_>=b&&_<A-(A-b)/2?i=g:_>=b&&_<A&&(i=g+1):_>=b&&(i=g)}if(n.initialized&&i!==u&&(!n.allowSlideNext&&(d?H>n.translate&&H>n.minTranslate():H<n.translate&&H<n.minTranslate())||!n.allowSlidePrev&&H>n.translate&&H>n.maxTranslate()&&(u||0)!==i))return!1;i!==(f||0)&&c&&n.emit("beforeSlideChangeStart"),n.updateProgress(H);let p;if(i>u?p="next":i<u?p="prev":p="reset",d&&-H===n.translate||!d&&H===n.translate)return n.updateActiveIndex(i),r.autoHeight&&n.updateAutoHeight(),n.updateSlidesClasses(),r.effect!=="slide"&&n.setTranslate(H),p!=="reset"&&(n.transitionStart(c,p),n.transitionEnd(c,p)),!1;if(r.cssMode){const g=n.isHorizontal(),_=d?H:-H;if(e===0){const b=n.virtual&&n.params.virtual.enabled;b&&(n.wrapperEl.style.scrollSnapType="none",n._immediateVirtual=!0),b&&!n._cssModeVirtualInitialSet&&n.params.initialSlide>0?(n._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{h[g?"scrollLeft":"scrollTop"]=_})):h[g?"scrollLeft":"scrollTop"]=_,b&&requestAnimationFrame(()=>{n.wrapperEl.style.scrollSnapType="",n._immediateVirtual=!1})}else{if(!n.support.smoothScroll)return B9({swiper:n,targetPosition:_,side:g?"left":"top"}),!0;h.scrollTo({[g?"left":"top"]:_,behavior:"smooth"})}return!0}return n.setTransition(e),n.setTranslate(H),n.updateActiveIndex(i),n.updateSlidesClasses(),n.emit("beforeTransitionStart",e,a),n.transitionStart(c,p),e===0?n.transitionEnd(c,p):n.animating||(n.animating=!0,n.onSlideToWrapperTransitionEnd||(n.onSlideToWrapperTransitionEnd=function(_){!n||n.destroyed||_.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.onSlideToWrapperTransitionEnd=null,delete n.onSlideToWrapperTransitionEnd,n.transitionEnd(c,p))}),n.wrapperEl.addEventListener("transitionend",n.onSlideToWrapperTransitionEnd)),!0}function UT(t,e,c,a){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),c===void 0&&(c=!0),typeof t=="string"&&(t=parseInt(t,10));const s=this,n=s.grid&&s.params.grid&&s.params.grid.rows>1;let i=t;if(s.params.loop)if(s.virtual&&s.params.virtual.enabled)i=i+s.virtual.slidesBefore;else{let r;if(n){const d=i*s.params.grid.rows;r=s.slides.filter(h=>h.getAttribute("data-swiper-slide-index")*1===d)[0].column}else r=s.getSlideIndexByData(i);const o=n?Math.ceil(s.slides.length/s.params.grid.rows):s.slides.length,{centeredSlides:l}=s.params;let f=s.params.slidesPerView;f==="auto"?f=s.slidesPerViewDynamic():(f=Math.ceil(parseFloat(s.params.slidesPerView,10)),l&&f%2===0&&(f=f+1));let u=o-r<f;if(l&&(u=u||r<Math.ceil(f/2)),u){const d=l?r<s.activeIndex?"prev":"next":r-s.activeIndex-1<s.params.slidesPerView?"next":"prev";s.loopFix({direction:d,slideTo:!0,activeSlideIndex:d==="next"?r+1:r-o+1,slideRealIndex:d==="next"?s.realIndex:void 0})}if(n){const d=i*s.params.grid.rows;i=s.slides.filter(h=>h.getAttribute("data-swiper-slide-index")*1===d)[0].column}else i=s.getSlideIndexByData(i)}return requestAnimationFrame(()=>{s.slideTo(i,e,c,a)}),s}function $T(t,e,c){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0);const a=this,{enabled:s,params:n,animating:i}=a;if(!s)return a;let r=n.slidesPerGroup;n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(r=Math.max(a.slidesPerViewDynamic("current",!0),1));const o=a.activeIndex<n.slidesPerGroupSkip?1:r,l=a.virtual&&n.virtual.enabled;if(n.loop){if(i&&!l&&n.loopPreventsSliding)return!1;if(a.loopFix({direction:"next"}),a._clientLeft=a.wrapperEl.clientLeft,a.activeIndex===a.slides.length-1&&n.cssMode)return requestAnimationFrame(()=>{a.slideTo(a.activeIndex+o,t,e,c)}),!0}return n.rewind&&a.isEnd?a.slideTo(0,t,e,c):a.slideTo(a.activeIndex+o,t,e,c)}function WT(t,e,c){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0);const a=this,{params:s,snapGrid:n,slidesGrid:i,rtlTranslate:r,enabled:o,animating:l}=a;if(!o)return a;const f=a.virtual&&s.virtual.enabled;if(s.loop){if(l&&!f&&s.loopPreventsSliding)return!1;a.loopFix({direction:"prev"}),a._clientLeft=a.wrapperEl.clientLeft}const u=r?a.translate:-a.translate;function d(H){return H<0?-Math.floor(Math.abs(H)):Math.floor(H)}const h=d(u),m=n.map(H=>d(H));let v=n[m.indexOf(h)-1];if(typeof v>"u"&&s.cssMode){let H;n.forEach((p,g)=>{h>=p&&(H=g)}),typeof H<"u"&&(v=n[H>0?H-1:H])}let M=0;if(typeof v<"u"&&(M=i.indexOf(v),M<0&&(M=a.activeIndex-1),s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(M=M-a.slidesPerViewDynamic("previous",!0)+1,M=Math.max(M,0))),s.rewind&&a.isBeginning){const H=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(H,t,e,c)}else if(s.loop&&a.activeIndex===0&&s.cssMode)return requestAnimationFrame(()=>{a.slideTo(M,t,e,c)}),!0;return a.slideTo(M,t,e,c)}function qT(t,e,c){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0);const a=this;return a.slideTo(a.activeIndex,t,e,c)}function GT(t,e,c,a){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0),a===void 0&&(a=.5);const s=this;let n=s.activeIndex;const i=Math.min(s.params.slidesPerGroupSkip,n),r=i+Math.floor((n-i)/s.params.slidesPerGroup),o=s.rtlTranslate?s.translate:-s.translate;if(o>=s.snapGrid[r]){const l=s.snapGrid[r],f=s.snapGrid[r+1];o-l>(f-l)*a&&(n+=s.params.slidesPerGroup)}else{const l=s.snapGrid[r-1],f=s.snapGrid[r];o-l<=(f-l)*a&&(n-=s.params.slidesPerGroup)}return n=Math.max(n,0),n=Math.min(n,s.slidesGrid.length-1),s.slideTo(n,t,e,c)}function jT(){const t=this,{params:e,slidesEl:c}=t,a=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView;let s=t.clickedIndex,n;const i=t.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(t.animating)return;n=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?s<t.loopedSlides-a/2||s>t.slides.length-t.loopedSlides+a/2?(t.loopFix(),s=t.getSlideIndex(U1(c,`${i}[data-swiper-slide-index="${n}"]`)[0]),Mt(()=>{t.slideTo(s)})):t.slideTo(s):s>t.slides.length-a?(t.loopFix(),s=t.getSlideIndex(U1(c,`${i}[data-swiper-slide-index="${n}"]`)[0]),Mt(()=>{t.slideTo(s)})):t.slideTo(s)}else t.slideTo(s)}var KT={slideTo:BT,slideToLoop:UT,slideNext:$T,slidePrev:WT,slideReset:qT,slideToClosest:GT,slideToClickedSlide:jT};function YT(t){const e=this,{params:c,slidesEl:a}=e;if(!c.loop||e.virtual&&e.params.virtual.enabled)return;const s=()=>{U1(a,`.${c.slideClass}, swiper-slide`).forEach((u,d)=>{u.setAttribute("data-swiper-slide-index",d)})},n=e.grid&&c.grid&&c.grid.rows>1,i=c.slidesPerGroup*(n?c.grid.rows:1),r=e.slides.length%i!==0,o=n&&e.slides.length%c.grid.rows!==0,l=f=>{for(let u=0;u<f;u+=1){const d=e.isElement?B4("swiper-slide",[c.slideBlankClass]):B4("div",[c.slideClass,c.slideBlankClass]);e.slidesEl.append(d)}};if(r){if(c.loopAddBlankSlides){const f=i-e.slides.length%i;l(f),e.recalcSlides(),e.updateSlides()}else _t("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else if(o){if(c.loopAddBlankSlides){const f=c.grid.rows-e.slides.length%c.grid.rows;l(f),e.recalcSlides(),e.updateSlides()}else _t("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else s();e.loopFix({slideRealIndex:t,direction:c.centeredSlides?void 0:"next"})}function XT(t){let{slideRealIndex:e,slideTo:c=!0,direction:a,setTranslate:s,activeSlideIndex:n,byController:i,byMousewheel:r}=t===void 0?{}:t;const o=this;if(!o.params.loop)return;o.emit("beforeLoopFix");const{slides:l,allowSlidePrev:f,allowSlideNext:u,slidesEl:d,params:h}=o,{centeredSlides:m}=h;if(o.allowSlidePrev=!0,o.allowSlideNext=!0,o.virtual&&h.virtual.enabled){c&&(!h.centeredSlides&&o.snapIndex===0?o.slideTo(o.virtual.slides.length,0,!1,!0):h.centeredSlides&&o.snapIndex<h.slidesPerView?o.slideTo(o.virtual.slides.length+o.snapIndex,0,!1,!0):o.snapIndex===o.snapGrid.length-1&&o.slideTo(o.virtual.slidesBefore,0,!1,!0)),o.allowSlidePrev=f,o.allowSlideNext=u,o.emit("loopFix");return}let v=h.slidesPerView;v==="auto"?v=o.slidesPerViewDynamic():(v=Math.ceil(parseFloat(h.slidesPerView,10)),m&&v%2===0&&(v=v+1));const M=h.slidesPerGroupAuto?v:h.slidesPerGroup;let H=M;H%M!==0&&(H+=M-H%M),H+=h.loopAdditionalSlides,o.loopedSlides=H;const p=o.grid&&h.grid&&h.grid.rows>1;l.length<v+H?_t("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):p&&h.grid.fill==="row"&&_t("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const g=[],_=[];let b=o.activeIndex;typeof n>"u"?n=o.getSlideIndex(l.filter(x=>x.classList.contains(h.slideActiveClass))[0]):b=n;const A=a==="next"||!a,G=a==="prev"||!a;let k=0,w=0;const y=p?Math.ceil(l.length/h.grid.rows):l.length,E=(p?l[n].column:n)+(m&&typeof s>"u"?-v/2+.5:0);if(E<H){k=Math.max(H-E,M);for(let x=0;x<H-E;x+=1){const R=x-Math.floor(x/y)*y;if(p){const D=y-R-1;for(let U=l.length-1;U>=0;U-=1)l[U].column===D&&g.push(U)}else g.push(y-R-1)}}else if(E+v>y-H){w=Math.max(E-(y-H*2),M);for(let x=0;x<w;x+=1){const R=x-Math.floor(x/y)*y;p?l.forEach((D,U)=>{D.column===R&&_.push(U)}):_.push(R)}}if(o.__preventObserver__=!0,requestAnimationFrame(()=>{o.__preventObserver__=!1}),G&&g.forEach(x=>{l[x].swiperLoopMoveDOM=!0,d.prepend(l[x]),l[x].swiperLoopMoveDOM=!1}),A&&_.forEach(x=>{l[x].swiperLoopMoveDOM=!0,d.append(l[x]),l[x].swiperLoopMoveDOM=!1}),o.recalcSlides(),h.slidesPerView==="auto"?o.updateSlides():p&&(g.length>0&&G||_.length>0&&A)&&o.slides.forEach((x,R)=>{o.grid.updateSlide(R,x,o.slides)}),h.watchSlidesProgress&&o.updateSlidesOffset(),c){if(g.length>0&&G){if(typeof e>"u"){const x=o.slidesGrid[b],D=o.slidesGrid[b+k]-x;r?o.setTranslate(o.translate-D):(o.slideTo(b+k,0,!1,!0),s&&(o.touchEventsData.startTranslate=o.touchEventsData.startTranslate-D,o.touchEventsData.currentTranslate=o.touchEventsData.currentTranslate-D))}else if(s){const x=p?g.length/h.grid.rows:g.length;o.slideTo(o.activeIndex+x,0,!1,!0),o.touchEventsData.currentTranslate=o.translate}}else if(_.length>0&&A)if(typeof e>"u"){const x=o.slidesGrid[b],D=o.slidesGrid[b-w]-x;r?o.setTranslate(o.translate-D):(o.slideTo(b-w,0,!1,!0),s&&(o.touchEventsData.startTranslate=o.touchEventsData.startTranslate-D,o.touchEventsData.currentTranslate=o.touchEventsData.currentTranslate-D))}else{const x=p?_.length/h.grid.rows:_.length;o.slideTo(o.activeIndex-x,0,!1,!0)}}if(o.allowSlidePrev=f,o.allowSlideNext=u,o.controller&&o.controller.control&&!i){const x={slideRealIndex:e,direction:a,setTranslate:s,activeSlideIndex:n,byController:!0};Array.isArray(o.controller.control)?o.controller.control.forEach(R=>{!R.destroyed&&R.params.loop&&R.loopFix({...x,slideTo:R.params.slidesPerView===h.slidesPerView?c:!1})}):o.controller.control instanceof o.constructor&&o.controller.control.params.loop&&o.controller.control.loopFix({...x,slideTo:o.controller.control.params.slidesPerView===h.slidesPerView?c:!1})}o.emit("loopFix")}function QT(){const t=this,{params:e,slidesEl:c}=t;if(!e.loop||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();const a=[];t.slides.forEach(s=>{const n=typeof s.swiperSlideIndex>"u"?s.getAttribute("data-swiper-slide-index")*1:s.swiperSlideIndex;a[n]=s}),t.slides.forEach(s=>{s.removeAttribute("data-swiper-slide-index")}),a.forEach(s=>{c.append(s)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}var JT={loopCreate:YT,loopFix:XT,loopDestroy:QT};function ZT(t){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const c=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),c.style.cursor="move",c.style.cursor=t?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function eE(){const t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t.isElement&&(t.__preventObserver__=!0),t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1}))}var tE={setGrabCursor:ZT,unsetGrabCursor:eE};function cE(t,e){e===void 0&&(e=this);function c(a){if(!a||a===k1()||a===M1())return null;a.assignedSlot&&(a=a.assignedSlot);const s=a.closest(t);return!s&&!a.getRootNode?null:s||c(a.getRootNode().host)}return c(e)}function S5(t,e,c){const a=M1(),{params:s}=t,n=s.edgeSwipeDetection,i=s.edgeSwipeThreshold;return n&&(c<=i||c>=a.innerWidth-i)?n==="prevent"?(e.preventDefault(),!0):!1:!0}function aE(t){const e=this,c=k1();let a=t;a.originalEvent&&(a=a.originalEvent);const s=e.touchEventsData;if(a.type==="pointerdown"){if(s.pointerId!==null&&s.pointerId!==a.pointerId)return;s.pointerId=a.pointerId}else a.type==="touchstart"&&a.targetTouches.length===1&&(s.touchId=a.targetTouches[0].identifier);if(a.type==="touchstart"){S5(e,a,a.targetTouches[0].pageX);return}const{params:n,touches:i,enabled:r}=e;if(!r||!n.simulateTouch&&a.pointerType==="mouse"||e.animating&&n.preventInteractionOnTransition)return;!e.animating&&n.cssMode&&n.loop&&e.loopFix();let o=a.target;if(n.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(o)||"which"in a&&a.which===3||"button"in a&&a.button>0||s.isTouched&&s.isMoved)return;const l=!!n.noSwipingClass&&n.noSwipingClass!=="",f=a.composedPath?a.composedPath():a.path;l&&a.target&&a.target.shadowRoot&&f&&(o=f[0]);const u=n.noSwipingSelector?n.noSwipingSelector:`.${n.noSwipingClass}`,d=!!(a.target&&a.target.shadowRoot);if(n.noSwiping&&(d?cE(u,o):o.closest(u))){e.allowClick=!0;return}if(n.swipeHandler&&!o.closest(n.swipeHandler))return;i.currentX=a.pageX,i.currentY=a.pageY;const h=i.currentX,m=i.currentY;if(!S5(e,a,h))return;Object.assign(s,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),i.startX=h,i.startY=m,s.touchStartTime=Vt(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,n.threshold>0&&(s.allowThresholdMove=!1);let v=!0;o.matches(s.focusableElements)&&(v=!1,o.nodeName==="SELECT"&&(s.isTouched=!1)),c.activeElement&&c.activeElement.matches(s.focusableElements)&&c.activeElement!==o&&c.activeElement.blur();const M=v&&e.allowTouchMove&&n.touchStartPreventDefault;(n.touchStartForcePreventDefault||M)&&!o.isContentEditable&&a.preventDefault(),n.freeMode&&n.freeMode.enabled&&e.freeMode&&e.animating&&!n.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",a)}function sE(t){const e=k1(),c=this,a=c.touchEventsData,{params:s,touches:n,rtlTranslate:i,enabled:r}=c;if(!r||!s.simulateTouch&&t.pointerType==="mouse")return;let o=t;if(o.originalEvent&&(o=o.originalEvent),o.type==="pointermove"&&(a.touchId!==null||o.pointerId!==a.pointerId))return;let l;if(o.type==="touchmove"){if(l=[...o.changedTouches].filter(A=>A.identifier===a.touchId)[0],!l||l.identifier!==a.touchId)return}else l=o;if(!a.isTouched){a.startMoving&&a.isScrolling&&c.emit("touchMoveOpposite",o);return}const f=l.pageX,u=l.pageY;if(o.preventedByNestedSwiper){n.startX=f,n.startY=u;return}if(!c.allowTouchMove){o.target.matches(a.focusableElements)||(c.allowClick=!1),a.isTouched&&(Object.assign(n,{startX:f,startY:u,currentX:f,currentY:u}),a.touchStartTime=Vt());return}if(s.touchReleaseOnEdges&&!s.loop){if(c.isVertical()){if(u<n.startY&&c.translate<=c.maxTranslate()||u>n.startY&&c.translate>=c.minTranslate()){a.isTouched=!1,a.isMoved=!1;return}}else if(f<n.startX&&c.translate<=c.maxTranslate()||f>n.startX&&c.translate>=c.minTranslate())return}if(e.activeElement&&o.target===e.activeElement&&o.target.matches(a.focusableElements)){a.isMoved=!0,c.allowClick=!1;return}a.allowTouchCallbacks&&c.emit("touchMove",o),n.previousX=n.currentX,n.previousY=n.currentY,n.currentX=f,n.currentY=u;const d=n.currentX-n.startX,h=n.currentY-n.startY;if(c.params.threshold&&Math.sqrt(d**2+h**2)<c.params.threshold)return;if(typeof a.isScrolling>"u"){let A;c.isHorizontal()&&n.currentY===n.startY||c.isVertical()&&n.currentX===n.startX?a.isScrolling=!1:d*d+h*h>=25&&(A=Math.atan2(Math.abs(h),Math.abs(d))*180/Math.PI,a.isScrolling=c.isHorizontal()?A>s.touchAngle:90-A>s.touchAngle)}if(a.isScrolling&&c.emit("touchMoveOpposite",o),typeof a.startMoving>"u"&&(n.currentX!==n.startX||n.currentY!==n.startY)&&(a.startMoving=!0),a.isScrolling){a.isTouched=!1;return}if(!a.startMoving)return;c.allowClick=!1,!s.cssMode&&o.cancelable&&o.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&o.stopPropagation();let m=c.isHorizontal()?d:h,v=c.isHorizontal()?n.currentX-n.previousX:n.currentY-n.previousY;s.oneWayMovement&&(m=Math.abs(m)*(i?1:-1),v=Math.abs(v)*(i?1:-1)),n.diff=m,m*=s.touchRatio,i&&(m=-m,v=-v);const M=c.touchesDirection;c.swipeDirection=m>0?"prev":"next",c.touchesDirection=v>0?"prev":"next";const H=c.params.loop&&!s.cssMode,p=c.touchesDirection==="next"&&c.allowSlideNext||c.touchesDirection==="prev"&&c.allowSlidePrev;if(!a.isMoved){if(H&&p&&c.loopFix({direction:c.swipeDirection}),a.startTranslate=c.getTranslate(),c.setTransition(0),c.animating){const A=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});c.wrapperEl.dispatchEvent(A)}a.allowMomentumBounce=!1,s.grabCursor&&(c.allowSlideNext===!0||c.allowSlidePrev===!0)&&c.setGrabCursor(!0),c.emit("sliderFirstMove",o)}let g;if(new Date().getTime(),a.isMoved&&a.allowThresholdMove&&M!==c.touchesDirection&&H&&p&&Math.abs(m)>=1){Object.assign(n,{startX:f,startY:u,currentX:f,currentY:u,startTranslate:a.currentTranslate}),a.loopSwapReset=!0,a.startTranslate=a.currentTranslate;return}c.emit("sliderMove",o),a.isMoved=!0,a.currentTranslate=m+a.startTranslate;let _=!0,b=s.resistanceRatio;if(s.touchReleaseOnEdges&&(b=0),m>0?(H&&p&&!g&&a.allowThresholdMove&&a.currentTranslate>(s.centeredSlides?c.minTranslate()-c.slidesSizesGrid[c.activeIndex+1]:c.minTranslate())&&c.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),a.currentTranslate>c.minTranslate()&&(_=!1,s.resistance&&(a.currentTranslate=c.minTranslate()-1+(-c.minTranslate()+a.startTranslate+m)**b))):m<0&&(H&&p&&!g&&a.allowThresholdMove&&a.currentTranslate<(s.centeredSlides?c.maxTranslate()+c.slidesSizesGrid[c.slidesSizesGrid.length-1]:c.maxTranslate())&&c.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:c.slides.length-(s.slidesPerView==="auto"?c.slidesPerViewDynamic():Math.ceil(parseFloat(s.slidesPerView,10)))}),a.currentTranslate<c.maxTranslate()&&(_=!1,s.resistance&&(a.currentTranslate=c.maxTranslate()+1-(c.maxTranslate()-a.startTranslate-m)**b))),_&&(o.preventedByNestedSwiper=!0),!c.allowSlideNext&&c.swipeDirection==="next"&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!c.allowSlidePrev&&c.swipeDirection==="prev"&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),!c.allowSlidePrev&&!c.allowSlideNext&&(a.currentTranslate=a.startTranslate),s.threshold>0)if(Math.abs(m)>s.threshold||a.allowThresholdMove){if(!a.allowThresholdMove){a.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,a.currentTranslate=a.startTranslate,n.diff=c.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY;return}}else{a.currentTranslate=a.startTranslate;return}!s.followFinger||s.cssMode||((s.freeMode&&s.freeMode.enabled&&c.freeMode||s.watchSlidesProgress)&&(c.updateActiveIndex(),c.updateSlidesClasses()),s.freeMode&&s.freeMode.enabled&&c.freeMode&&c.freeMode.onTouchMove(),c.updateProgress(a.currentTranslate),c.setTranslate(a.currentTranslate))}function nE(t){const e=this,c=e.touchEventsData;let a=t;a.originalEvent&&(a=a.originalEvent);let s;if(a.type==="touchend"||a.type==="touchcancel"){if(s=[...a.changedTouches].filter(b=>b.identifier===c.touchId)[0],!s||s.identifier!==c.touchId)return}else{if(c.touchId!==null||a.pointerId!==c.pointerId)return;s=a}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(a.type)&&!(["pointercancel","contextmenu"].includes(a.type)&&(e.browser.isSafari||e.browser.isWebView)))return;c.pointerId=null,c.touchId=null;const{params:i,touches:r,rtlTranslate:o,slidesGrid:l,enabled:f}=e;if(!f||!i.simulateTouch&&a.pointerType==="mouse")return;if(c.allowTouchCallbacks&&e.emit("touchEnd",a),c.allowTouchCallbacks=!1,!c.isTouched){c.isMoved&&i.grabCursor&&e.setGrabCursor(!1),c.isMoved=!1,c.startMoving=!1;return}i.grabCursor&&c.isMoved&&c.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const u=Vt(),d=u-c.touchStartTime;if(e.allowClick){const b=a.path||a.composedPath&&a.composedPath();e.updateClickedSlide(b&&b[0]||a.target,b),e.emit("tap click",a),d<300&&u-c.lastClickTime<300&&e.emit("doubleTap doubleClick",a)}if(c.lastClickTime=Vt(),Mt(()=>{e.destroyed||(e.allowClick=!0)}),!c.isTouched||!c.isMoved||!e.swipeDirection||r.diff===0&&!c.loopSwapReset||c.currentTranslate===c.startTranslate&&!c.loopSwapReset){c.isTouched=!1,c.isMoved=!1,c.startMoving=!1;return}c.isTouched=!1,c.isMoved=!1,c.startMoving=!1;let h;if(i.followFinger?h=o?e.translate:-e.translate:h=-c.currentTranslate,i.cssMode)return;if(i.freeMode&&i.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:h});return}const m=h>=-e.maxTranslate()&&!e.params.loop;let v=0,M=e.slidesSizesGrid[0];for(let b=0;b<l.length;b+=b<i.slidesPerGroupSkip?1:i.slidesPerGroup){const A=b<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;typeof l[b+A]<"u"?(m||h>=l[b]&&h<l[b+A])&&(v=b,M=l[b+A]-l[b]):(m||h>=l[b])&&(v=b,M=l[l.length-1]-l[l.length-2])}let H=null,p=null;i.rewind&&(e.isBeginning?p=i.virtual&&i.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(H=0));const g=(h-l[v])/M,_=v<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(d>i.longSwipesMs){if(!i.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(g>=i.longSwipesRatio?e.slideTo(i.rewind&&e.isEnd?H:v+_):e.slideTo(v)),e.swipeDirection==="prev"&&(g>1-i.longSwipesRatio?e.slideTo(v+_):p!==null&&g<0&&Math.abs(g)>i.longSwipesRatio?e.slideTo(p):e.slideTo(v))}else{if(!i.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(a.target===e.navigation.nextEl||a.target===e.navigation.prevEl)?a.target===e.navigation.nextEl?e.slideTo(v+_):e.slideTo(v):(e.swipeDirection==="next"&&e.slideTo(H!==null?H:v+_),e.swipeDirection==="prev"&&e.slideTo(p!==null?p:v))}}function x5(){const t=this,{params:e,el:c}=t;if(c&&c.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:s,snapGrid:n}=t,i=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();const r=i&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides&&!r?t.slideTo(t.slides.length-1,0,!1,!0):t.params.loop&&!i?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(t.autoplay.resizeTimeout),t.autoplay.resizeTimeout=setTimeout(()=>{t.autoplay&&t.autoplay.running&&t.autoplay.paused&&t.autoplay.resume()},500)),t.allowSlidePrev=s,t.allowSlideNext=a,t.params.watchOverflow&&n!==t.snapGrid&&t.checkOverflow()}function iE(t){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function rE(){const t=this,{wrapperEl:e,rtlTranslate:c,enabled:a}=t;if(!a)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let s;const n=t.maxTranslate()-t.minTranslate();n===0?s=0:s=(t.translate-t.minTranslate())/n,s!==t.progress&&t.updateProgress(c?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}function oE(t){const e=this;$0(e,t.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function lE(){const t=this;t.documentTouchHandlerProceeded||(t.documentTouchHandlerProceeded=!0,t.params.touchReleaseOnEdges&&(t.el.style.touchAction="auto"))}const G9=(t,e)=>{const c=k1(),{params:a,el:s,wrapperEl:n,device:i}=t,r=!!a.nested,o=e==="on"?"addEventListener":"removeEventListener",l=e;c[o]("touchstart",t.onDocumentTouchStart,{passive:!1,capture:r}),s[o]("touchstart",t.onTouchStart,{passive:!1}),s[o]("pointerdown",t.onTouchStart,{passive:!1}),c[o]("touchmove",t.onTouchMove,{passive:!1,capture:r}),c[o]("pointermove",t.onTouchMove,{passive:!1,capture:r}),c[o]("touchend",t.onTouchEnd,{passive:!0}),c[o]("pointerup",t.onTouchEnd,{passive:!0}),c[o]("pointercancel",t.onTouchEnd,{passive:!0}),c[o]("touchcancel",t.onTouchEnd,{passive:!0}),c[o]("pointerout",t.onTouchEnd,{passive:!0}),c[o]("pointerleave",t.onTouchEnd,{passive:!0}),c[o]("contextmenu",t.onTouchEnd,{passive:!0}),(a.preventClicks||a.preventClicksPropagation)&&s[o]("click",t.onClick,!0),a.cssMode&&n[o]("scroll",t.onScroll),a.updateOnWindowResize?t[l](i.ios||i.android?"resize orientationchange observerUpdate":"resize observerUpdate",x5,!0):t[l]("observerUpdate",x5,!0),s[o]("load",t.onLoad,{capture:!0})};function fE(){const t=this,{params:e}=t;t.onTouchStart=aE.bind(t),t.onTouchMove=sE.bind(t),t.onTouchEnd=nE.bind(t),t.onDocumentTouchStart=lE.bind(t),e.cssMode&&(t.onScroll=rE.bind(t)),t.onClick=iE.bind(t),t.onLoad=oE.bind(t),G9(t,"on")}function uE(){G9(this,"off")}var dE={attachEvents:fE,detachEvents:uE};const N5=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function hE(){const t=this,{realIndex:e,initialized:c,params:a,el:s}=t,n=a.breakpoints;if(!n||n&&Object.keys(n).length===0)return;const i=t.getBreakpoint(n,t.params.breakpointsBase,t.el);if(!i||t.currentBreakpoint===i)return;const o=(i in n?n[i]:void 0)||t.originalParams,l=N5(t,a),f=N5(t,o),u=a.enabled;l&&!f?(s.classList.remove(`${a.containerModifierClass}grid`,`${a.containerModifierClass}grid-column`),t.emitContainerClasses()):!l&&f&&(s.classList.add(`${a.containerModifierClass}grid`),(o.grid.fill&&o.grid.fill==="column"||!o.grid.fill&&a.grid.fill==="column")&&s.classList.add(`${a.containerModifierClass}grid-column`),t.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(H=>{if(typeof o[H]>"u")return;const p=a[H]&&a[H].enabled,g=o[H]&&o[H].enabled;p&&!g&&t[H].disable(),!p&&g&&t[H].enable()});const d=o.direction&&o.direction!==a.direction,h=a.loop&&(o.slidesPerView!==a.slidesPerView||d),m=a.loop;d&&c&&t.changeDirection(),L1(t.params,o);const v=t.params.enabled,M=t.params.loop;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),u&&!v?t.disable():!u&&v&&t.enable(),t.currentBreakpoint=i,t.emit("_beforeBreakpoint",o),c&&(h?(t.loopDestroy(),t.loopCreate(e),t.updateSlides()):!m&&M?(t.loopCreate(e),t.updateSlides()):m&&!M&&t.loopDestroy()),t.emit("breakpoint",o)}function pE(t,e,c){if(e===void 0&&(e="window"),!t||e==="container"&&!c)return;let a=!1;const s=M1(),n=e==="window"?s.innerHeight:c.clientHeight,i=Object.keys(t).map(r=>{if(typeof r=="string"&&r.indexOf("@")===0){const o=parseFloat(r.substr(1));return{value:n*o,point:r}}return{value:r,point:r}});i.sort((r,o)=>parseInt(r.value,10)-parseInt(o.value,10));for(let r=0;r<i.length;r+=1){const{point:o,value:l}=i[r];e==="window"?s.matchMedia(`(min-width: ${l}px)`).matches&&(a=o):l<=c.clientWidth&&(a=o)}return a||"max"}var mE={setBreakpoint:hE,getBreakpoint:pE};function vE(t,e){const c=[];return t.forEach(a=>{typeof a=="object"?Object.keys(a).forEach(s=>{a[s]&&c.push(e+s)}):typeof a=="string"&&c.push(e+a)}),c}function gE(){const t=this,{classNames:e,params:c,rtl:a,el:s,device:n}=t,i=vE(["initialized",c.direction,{"free-mode":t.params.freeMode&&c.freeMode.enabled},{autoheight:c.autoHeight},{rtl:a},{grid:c.grid&&c.grid.rows>1},{"grid-column":c.grid&&c.grid.rows>1&&c.grid.fill==="column"},{android:n.android},{ios:n.ios},{"css-mode":c.cssMode},{centered:c.cssMode&&c.centeredSlides},{"watch-progress":c.watchSlidesProgress}],c.containerModifierClass);e.push(...i),s.classList.add(...e),t.emitContainerClasses()}function HE(){const t=this,{el:e,classNames:c}=t;e.classList.remove(...c),t.emitContainerClasses()}var zE={addClasses:gE,removeClasses:HE};function CE(){const t=this,{isLocked:e,params:c}=t,{slidesOffsetBefore:a}=c;if(a){const s=t.slides.length-1,n=t.slidesGrid[s]+t.slidesSizesGrid[s]+a*2;t.isLocked=t.size>n}else t.isLocked=t.snapGrid.length===1;c.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),c.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}var ME={checkOverflow:CE},la={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function VE(t,e){return function(a){a===void 0&&(a={});const s=Object.keys(a)[0],n=a[s];if(typeof n!="object"||n===null){L1(e,a);return}if(t[s]===!0&&(t[s]={enabled:!0}),s==="navigation"&&t[s]&&t[s].enabled&&!t[s].prevEl&&!t[s].nextEl&&(t[s].auto=!0),["pagination","scrollbar"].indexOf(s)>=0&&t[s]&&t[s].enabled&&!t[s].el&&(t[s].auto=!0),!(s in t&&"enabled"in n)){L1(e,a);return}typeof t[s]=="object"&&!("enabled"in t[s])&&(t[s].enabled=!0),t[s]||(t[s]={enabled:!1}),L1(e,a)}}const l8={eventsEmitter:zT,update:NT,translate:IT,transition:FT,slide:KT,loop:JT,grabCursor:tE,events:dE,breakpoints:mE,checkOverflow:ME,classes:zE},f8={};let Xs=class r3{constructor(){let e,c;for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];s.length===1&&s[0].constructor&&Object.prototype.toString.call(s[0]).slice(8,-1)==="Object"?c=s[0]:[e,c]=s,c||(c={}),c=L1({},c),e&&!c.el&&(c.el=e);const i=k1();if(c.el&&typeof c.el=="string"&&i.querySelectorAll(c.el).length>1){const f=[];return i.querySelectorAll(c.el).forEach(u=>{const d=L1({},c,{el:u});f.push(new r3(d))}),f}const r=this;r.__swiper__=!0,r.support=W9(),r.device=pT({userAgent:c.userAgent}),r.browser=vT(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],c.modules&&Array.isArray(c.modules)&&r.modules.push(...c.modules);const o={};r.modules.forEach(f=>{f({params:c,swiper:r,extendParams:VE(c,o),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})});const l=L1({},la,o);return r.params=L1({},l,f8,c),r.originalParams=L1({},r.params),r.passedParams=L1({},c),r.params&&r.params.on&&Object.keys(r.params.on).forEach(f=>{r.on(f,r.params.on[f])}),r.params&&r.params.onAny&&r.onAny(r.params.onAny),Object.assign(r,{enabled:r.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return r.params.direction==="horizontal"},isVertical(){return r.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:c,params:a}=this,s=U1(c,`.${a.slideClass}, swiper-slide`),n=Lt(s[0]);return Lt(e)-n}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(c=>c.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:c,params:a}=e;e.slides=U1(c,`.${a.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,c){const a=this;e=Math.min(Math.max(e,0),1);const s=a.minTranslate(),i=(a.maxTranslate()-s)*e+s;a.translateTo(i,typeof c>"u"?0:c),a.updateActiveIndex(),a.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const c=e.el.className.split(" ").filter(a=>a.indexOf("swiper")===0||a.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",c.join(" "))}getSlideClasses(e){const c=this;return c.destroyed?"":e.className.split(" ").filter(a=>a.indexOf("swiper-slide")===0||a.indexOf(c.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const c=[];e.slides.forEach(a=>{const s=e.getSlideClasses(a);c.push({slideEl:a,classNames:s}),e.emit("_slideClass",a,s)}),e.emit("_slideClasses",c)}slidesPerViewDynamic(e,c){e===void 0&&(e="current"),c===void 0&&(c=!1);const a=this,{params:s,slides:n,slidesGrid:i,slidesSizesGrid:r,size:o,activeIndex:l}=a;let f=1;if(typeof s.slidesPerView=="number")return s.slidesPerView;if(s.centeredSlides){let u=n[l]?n[l].swiperSlideSize:0,d;for(let h=l+1;h<n.length;h+=1)n[h]&&!d&&(u+=n[h].swiperSlideSize,f+=1,u>o&&(d=!0));for(let h=l-1;h>=0;h-=1)n[h]&&!d&&(u+=n[h].swiperSlideSize,f+=1,u>o&&(d=!0))}else if(e==="current")for(let u=l+1;u<n.length;u+=1)(c?i[u]+r[u]-i[l]<o:i[u]-i[l]<o)&&(f+=1);else for(let u=l-1;u>=0;u-=1)i[l]-i[u]<o&&(f+=1);return f}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:c,params:a}=e;a.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(i=>{i.complete&&$0(e,i)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function s(){const i=e.rtlTranslate?e.translate*-1:e.translate,r=Math.min(Math.max(i,e.maxTranslate()),e.minTranslate());e.setTranslate(r),e.updateActiveIndex(),e.updateSlidesClasses()}let n;if(a.freeMode&&a.freeMode.enabled&&!a.cssMode)s(),a.autoHeight&&e.updateAutoHeight();else{if((a.slidesPerView==="auto"||a.slidesPerView>1)&&e.isEnd&&!a.centeredSlides){const i=e.virtual&&a.virtual.enabled?e.virtual.slides:e.slides;n=e.slideTo(i.length-1,0,!1,!0)}else n=e.slideTo(e.activeIndex,0,!1,!0);n||s()}a.watchOverflow&&c!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,c){c===void 0&&(c=!0);const a=this,s=a.params.direction;return e||(e=s==="horizontal"?"vertical":"horizontal"),e===s||e!=="horizontal"&&e!=="vertical"||(a.el.classList.remove(`${a.params.containerModifierClass}${s}`),a.el.classList.add(`${a.params.containerModifierClass}${e}`),a.emitContainerClasses(),a.params.direction=e,a.slides.forEach(n=>{e==="vertical"?n.style.width="":n.style.height=""}),a.emit("changeDirection"),c&&a.update()),a}changeLanguageDirection(e){const c=this;c.rtl&&e==="rtl"||!c.rtl&&e==="ltr"||(c.rtl=e==="rtl",c.rtlTranslate=c.params.direction==="horizontal"&&c.rtl,c.rtl?(c.el.classList.add(`${c.params.containerModifierClass}rtl`),c.el.dir="rtl"):(c.el.classList.remove(`${c.params.containerModifierClass}rtl`),c.el.dir="ltr"),c.update())}mount(e){const c=this;if(c.mounted)return!0;let a=e||c.params.el;if(typeof a=="string"&&(a=document.querySelector(a)),!a)return!1;a.swiper=c,a.parentNode&&a.parentNode.host&&a.parentNode.host.nodeName==="SWIPER-CONTAINER"&&(c.isElement=!0);const s=()=>`.${(c.params.wrapperClass||"").trim().split(" ").join(".")}`;let i=a&&a.shadowRoot&&a.shadowRoot.querySelector?a.shadowRoot.querySelector(s()):U1(a,s())[0];return!i&&c.params.createElements&&(i=B4("div",c.params.wrapperClass),a.append(i),U1(a,`.${c.params.slideClass}`).forEach(r=>{i.append(r)})),Object.assign(c,{el:a,wrapperEl:i,slidesEl:c.isElement&&!a.parentNode.host.slideSlots?a.parentNode.host:i,hostEl:c.isElement?a.parentNode.host:a,mounted:!0,rtl:a.dir.toLowerCase()==="rtl"||W3(a,"direction")==="rtl",rtlTranslate:c.params.direction==="horizontal"&&(a.dir.toLowerCase()==="rtl"||W3(a,"direction")==="rtl"),wrongRTL:W3(i,"display")==="-webkit-box"}),!0}init(e){const c=this;if(c.initialized||c.mount(e)===!1)return c;c.emit("beforeInit"),c.params.breakpoints&&c.setBreakpoint(),c.addClasses(),c.updateSize(),c.updateSlides(),c.params.watchOverflow&&c.checkOverflow(),c.params.grabCursor&&c.enabled&&c.setGrabCursor(),c.params.loop&&c.virtual&&c.params.virtual.enabled?c.slideTo(c.params.initialSlide+c.virtual.slidesBefore,0,c.params.runCallbacksOnInit,!1,!0):c.slideTo(c.params.initialSlide,0,c.params.runCallbacksOnInit,!1,!0),c.params.loop&&c.loopCreate(),c.attachEvents();const s=[...c.el.querySelectorAll('[loading="lazy"]')];return c.isElement&&s.push(...c.hostEl.querySelectorAll('[loading="lazy"]')),s.forEach(n=>{n.complete?$0(c,n):n.addEventListener("load",i=>{$0(c,i.target)})}),oa(c),c.initialized=!0,oa(c),c.emit("init"),c.emit("afterInit"),c}destroy(e,c){e===void 0&&(e=!0),c===void 0&&(c=!0);const a=this,{params:s,el:n,wrapperEl:i,slides:r}=a;return typeof a.params>"u"||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),s.loop&&a.loopDestroy(),c&&(a.removeClasses(),n.removeAttribute("style"),i.removeAttribute("style"),r&&r.length&&r.forEach(o=>{o.classList.remove(s.slideVisibleClass,s.slideFullyVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass),o.removeAttribute("style"),o.removeAttribute("data-swiper-slide-index")})),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(o=>{a.off(o)}),e!==!1&&(a.el.swiper=null,sT(a)),a.destroyed=!0),null}static extendDefaults(e){L1(f8,e)}static get extendedDefaults(){return f8}static get defaults(){return la}static installModule(e){r3.prototype.__modules__||(r3.prototype.__modules__=[]);const c=r3.prototype.__modules__;typeof e=="function"&&c.indexOf(e)<0&&c.push(e)}static use(e){return Array.isArray(e)?(e.forEach(c=>r3.installModule(c)),r3):(r3.installModule(e),r3)}};Object.keys(l8).forEach(t=>{Object.keys(l8[t]).forEach(e=>{Xs.prototype[e]=l8[t][e]})});Xs.use([gT,HT]);const j9=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function U4(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"&&!t.__swiper__}function Ce(t,e){const c=["__proto__","constructor","prototype"];Object.keys(e).filter(a=>c.indexOf(a)<0).forEach(a=>{typeof t[a]>"u"?t[a]=e[a]:U4(e[a])&&U4(t[a])&&Object.keys(e[a]).length>0?e[a].__swiper__?t[a]=e[a]:Ce(t[a],e[a]):t[a]=e[a]})}function K9(t){return t===void 0&&(t={}),t.navigation&&typeof t.navigation.nextEl>"u"&&typeof t.navigation.prevEl>"u"}function Y9(t){return t===void 0&&(t={}),t.pagination&&typeof t.pagination.el>"u"}function X9(t){return t===void 0&&(t={}),t.scrollbar&&typeof t.scrollbar.el>"u"}function Q9(t){t===void 0&&(t="");const e=t.split(" ").map(a=>a.trim()).filter(a=>!!a),c=[];return e.forEach(a=>{c.indexOf(a)<0&&c.push(a)}),c.join(" ")}function _E(t){return t===void 0&&(t=""),t?t.includes("swiper-wrapper")?t:`swiper-wrapper ${t}`:"swiper-wrapper"}function LE(t){let{swiper:e,slides:c,passedParams:a,changedParams:s,nextEl:n,prevEl:i,scrollbarEl:r,paginationEl:o}=t;const l=s.filter(w=>w!=="children"&&w!=="direction"&&w!=="wrapperClass"),{params:f,pagination:u,navigation:d,scrollbar:h,virtual:m,thumbs:v}=e;let M,H,p,g,_,b,A,G;s.includes("thumbs")&&a.thumbs&&a.thumbs.swiper&&f.thumbs&&!f.thumbs.swiper&&(M=!0),s.includes("controller")&&a.controller&&a.controller.control&&f.controller&&!f.controller.control&&(H=!0),s.includes("pagination")&&a.pagination&&(a.pagination.el||o)&&(f.pagination||f.pagination===!1)&&u&&!u.el&&(p=!0),s.includes("scrollbar")&&a.scrollbar&&(a.scrollbar.el||r)&&(f.scrollbar||f.scrollbar===!1)&&h&&!h.el&&(g=!0),s.includes("navigation")&&a.navigation&&(a.navigation.prevEl||i)&&(a.navigation.nextEl||n)&&(f.navigation||f.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(_=!0);const k=w=>{e[w]&&(e[w].destroy(),w==="navigation"?(e.isElement&&(e[w].prevEl.remove(),e[w].nextEl.remove()),f[w].prevEl=void 0,f[w].nextEl=void 0,e[w].prevEl=void 0,e[w].nextEl=void 0):(e.isElement&&e[w].el.remove(),f[w].el=void 0,e[w].el=void 0))};s.includes("loop")&&e.isElement&&(f.loop&&!a.loop?b=!0:!f.loop&&a.loop?A=!0:G=!0),l.forEach(w=>{if(U4(f[w])&&U4(a[w]))Object.assign(f[w],a[w]),(w==="navigation"||w==="pagination"||w==="scrollbar")&&"enabled"in a[w]&&!a[w].enabled&&k(w);else{const y=a[w];(y===!0||y===!1)&&(w==="navigation"||w==="pagination"||w==="scrollbar")?y===!1&&k(w):f[w]=a[w]}}),l.includes("controller")&&!H&&e.controller&&e.controller.control&&f.controller&&f.controller.control&&(e.controller.control=f.controller.control),s.includes("children")&&c&&m&&f.virtual.enabled?(m.slides=c,m.update(!0)):s.includes("virtual")&&m&&f.virtual.enabled&&(c&&(m.slides=c),m.update(!0)),s.includes("children")&&c&&f.loop&&(G=!0),M&&v.init()&&v.update(!0),H&&(e.controller.control=f.controller.control),p&&(e.isElement&&(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-pagination"),o.part.add("pagination"),e.el.appendChild(o)),o&&(f.pagination.el=o),u.init(),u.render(),u.update()),g&&(e.isElement&&(!r||typeof r=="string")&&(r=document.createElement("div"),r.classList.add("swiper-scrollbar"),r.part.add("scrollbar"),e.el.appendChild(r)),r&&(f.scrollbar.el=r),h.init(),h.updateSize(),h.setTranslate()),_&&(e.isElement&&((!n||typeof n=="string")&&(n=document.createElement("div"),n.classList.add("swiper-button-next"),n.innerHTML=e.hostEl.constructor.nextButtonSvg,n.part.add("button-next"),e.el.appendChild(n)),(!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-prev"),i.innerHTML=e.hostEl.constructor.prevButtonSvg,i.part.add("button-prev"),e.el.appendChild(i))),n&&(f.navigation.nextEl=n),i&&(f.navigation.prevEl=i),d.init(),d.update()),s.includes("allowSlideNext")&&(e.allowSlideNext=a.allowSlideNext),s.includes("allowSlidePrev")&&(e.allowSlidePrev=a.allowSlidePrev),s.includes("direction")&&e.changeDirection(a.direction,!1),(b||G)&&e.loopDestroy(),(A||G)&&e.loopCreate(),e.update()}function T5(t,e){t===void 0&&(t={}),e===void 0&&(e=!0);const c={on:{}},a={},s={};Ce(c,la),c._emitClasses=!0,c.init=!1;const n={},i=j9.map(o=>o.replace(/_/,"")),r=Object.assign({},t);return Object.keys(r).forEach(o=>{typeof t[o]>"u"||(i.indexOf(o)>=0?U4(t[o])?(c[o]={},s[o]={},Ce(c[o],t[o]),Ce(s[o],t[o])):(c[o]=t[o],s[o]=t[o]):o.search(/on[A-Z]/)===0&&typeof t[o]=="function"?e?a[`${o[2].toLowerCase()}${o.substr(3)}`]=t[o]:c.on[`${o[2].toLowerCase()}${o.substr(3)}`]=t[o]:n[o]=t[o])}),["navigation","pagination","scrollbar"].forEach(o=>{c[o]===!0&&(c[o]={}),c[o]===!1&&delete c[o]}),{params:c,passedParams:s,rest:n,events:a}}function bE(t,e){let{el:c,nextEl:a,prevEl:s,paginationEl:n,scrollbarEl:i,swiper:r}=t;K9(e)&&a&&s&&(r.params.navigation.nextEl=a,r.originalParams.navigation.nextEl=a,r.params.navigation.prevEl=s,r.originalParams.navigation.prevEl=s),Y9(e)&&n&&(r.params.pagination.el=n,r.originalParams.pagination.el=n),X9(e)&&i&&(r.params.scrollbar.el=i,r.originalParams.scrollbar.el=i),r.init(c)}function wE(t,e,c,a,s){const n=[];if(!e)return n;const i=o=>{n.indexOf(o)<0&&n.push(o)};if(c&&a){const o=a.map(s),l=c.map(s);o.join("")!==l.join("")&&i("children"),a.length!==c.length&&i("children")}return j9.filter(o=>o[0]==="_").map(o=>o.replace(/_/,"")).forEach(o=>{if(o in t&&o in e)if(U4(t[o])&&U4(e[o])){const l=Object.keys(t[o]),f=Object.keys(e[o]);l.length!==f.length?i(o):(l.forEach(u=>{t[o][u]!==e[o][u]&&i(o)}),f.forEach(u=>{t[o][u]!==e[o][u]&&i(o)}))}else t[o]!==e[o]&&i(o)}),n}const yE=t=>{!t||t.destroyed||!t.params.virtual||t.params.virtual&&!t.params.virtual.enabled||(t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.parallax&&t.params.parallax&&t.params.parallax.enabled&&t.parallax.setTranslate())};function u8(t,e,c){t===void 0&&(t={});const a=[],s={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},n=(i,r)=>{Array.isArray(i)&&i.forEach(o=>{const l=typeof o.type=="symbol";r==="default"&&(r="container-end"),l&&o.children?n(o.children,r):o.type&&(o.type.name==="SwiperSlide"||o.type.name==="AsyncComponentWrapper")?a.push(o):s[r]&&s[r].push(o)})};return Object.keys(t).forEach(i=>{if(typeof t[i]!="function")return;const r=t[i]();n(r,i)}),c.value=e.value,e.value=a,{slides:a,slots:s}}function SE(t,e,c){if(!c)return null;const a=f=>{let u=f;return f<0?u=e.length+f:u>=e.length&&(u=u-e.length),u},s=t.value.isHorizontal()?{[t.value.rtlTranslate?"right":"left"]:`${c.offset}px`}:{top:`${c.offset}px`},{from:n,to:i}=c,r=t.value.params.loop?-e.length:0,o=t.value.params.loop?e.length*2:e.length,l=[];for(let f=r;f<o;f+=1)f>=n&&f<=i&&l.push(e[a(f)]);return l.map(f=>(f.props||(f.props={}),f.props.style||(f.props.style={}),f.props.swiperRef=t,f.props.style=s,p1(f.type,{...f.props},f.children)))}const ie={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},modules:{type:Array,default:void 0},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},oneWayMovement:{type:Boolean,default:void 0},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},focusableElements:{type:String,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},spaceBetween:{type:[Number,String],default:void 0},slidesPerView:{type:[Number,String],default:void 0},maxBackfaceHiddenSlides:{type:Number,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},slidesPerGroupAuto:{type:Boolean,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopedSlides:{type:Number,default:void 0},loopPreventsSliding:{type:Boolean,default:void 0},rewind:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideFullyVisibleClass:{type:String,default:void 0},slideBlankClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},lazyPreloaderClass:{type:String,default:void 0},lazyPreloadPrevNext:{type:Number,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},creativeEffect:{type:Object,default:void 0},cardsEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0},grid:{type:[Object],default:void 0},freeMode:{type:[Boolean,Object],default:void 0},enabled:{type:Boolean,default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","_freeModeNoMomentumRelease","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","autoplayPause","autoplayResume","autoplayTimeLeft","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","breakpointsBase","changeDirection","click","disable","doubleTap","doubleClick","destroy","enable","fromEdge","hashChange","hashSet","init","keyPress","lock","loopFix","momentumBounce","navigationHide","navigationShow","navigationPrev","navigationNext","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slidesUpdated","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","virtualUpdate","zoomChange"],setup(t,e){let{slots:c,emit:a}=e;const{tag:s,wrapperTag:n}=t,i=h2("swiper"),r=h2(null),o=h2(!1),l=h2(!1),f=h2(null),u=h2(null),d=h2(null),h={value:[]},m={value:[]},v=h2(null),M=h2(null),H=h2(null),p=h2(null),{params:g,passedParams:_}=T5(t,!1);u8(c,h,m),d.value=_,m.value=h.value;const b=()=>{u8(c,h,m),o.value=!0};g.onAny=function(k){for(var w=arguments.length,y=new Array(w>1?w-1:0),O=1;O<w;O++)y[O-1]=arguments[O];a(k,...y)},Object.assign(g.on,{_beforeBreakpoint:b,_containerClasses(k,w){i.value=w}});const A={...g};if(delete A.wrapperClass,u.value=new Xs(A),u.value.virtual&&u.value.params.virtual.enabled){u.value.virtual.slides=h.value;const k={cache:!1,slides:h.value,renderExternal:w=>{r.value=w},renderExternalUpdate:!1};Ce(u.value.params.virtual,k),Ce(u.value.originalParams.virtual,k)}Oa(()=>{!l.value&&u.value&&(u.value.emitSlidesClasses(),l.value=!0);const{passedParams:k}=T5(t,!1),w=wE(k,d.value,h.value,m.value,y=>y.props&&y.props.key);d.value=k,(w.length||o.value)&&u.value&&!u.value.destroyed&&LE({swiper:u.value,slides:h.value,passedParams:k,changedParams:w,nextEl:v.value,prevEl:M.value,scrollbarEl:p.value,paginationEl:H.value}),o.value=!1}),de("swiper",u),b4(r,()=>{Rt(()=>{yE(u.value)})}),Ra(()=>{f.value&&(bE({el:f.value,nextEl:v.value,prevEl:M.value,paginationEl:H.value,scrollbarEl:p.value,swiper:u.value},g),a("swiper",u.value))}),Da(()=>{u.value&&!u.value.destroyed&&u.value.destroy(!0,!1)});function G(k){return g.virtual?SE(u,k,r.value):(k.forEach((w,y)=>{w.props||(w.props={}),w.props.swiperRef=u,w.props.swiperSlideIndex=y}),k)}return()=>{const{slides:k,slots:w}=u8(c,h,m);return p1(s,{ref:f,class:Q9(i.value)},[w["container-start"],p1(n,{class:_E(g.wrapperClass)},[w["wrapper-start"],G(k),w["wrapper-end"]]),K9(t)&&[p1("div",{ref:M,class:"swiper-button-prev"}),p1("div",{ref:v,class:"swiper-button-next"})],X9(t)&&p1("div",{ref:p,class:"swiper-scrollbar"}),Y9(t)&&p1("div",{ref:H,class:"swiper-pagination"}),w["container-end"]])}}},U3={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:{type:Object,required:!1},swiperSlideIndex:{type:Number,default:void 0,required:!1},zoom:{type:Boolean,default:void 0,required:!1},lazy:{type:Boolean,default:!1,required:!1},virtualIndex:{type:[String,Number],default:void 0}},setup(t,e){let{slots:c}=e,a=!1;const{swiperRef:s}=t,n=h2(null),i=h2("swiper-slide"),r=h2(!1);function o(u,d,h){d===n.value&&(i.value=h)}Ra(()=>{!s||!s.value||(s.value.on("_slideClass",o),a=!0)}),G7(()=>{a||!s||!s.value||(s.value.on("_slideClass",o),a=!0)}),Oa(()=>{!n.value||!s||!s.value||(typeof t.swiperSlideIndex<"u"&&(n.value.swiperSlideIndex=t.swiperSlideIndex),s.value.destroyed&&i.value!=="swiper-slide"&&(i.value="swiper-slide"))}),Da(()=>{!s||!s.value||s.value.off("_slideClass",o)});const l=D2(()=>({isActive:i.value.indexOf("swiper-slide-active")>=0,isVisible:i.value.indexOf("swiper-slide-visible")>=0,isPrev:i.value.indexOf("swiper-slide-prev")>=0,isNext:i.value.indexOf("swiper-slide-next")>=0}));de("swiperSlide",l);const f=()=>{r.value=!0};return()=>p1(t.tag,{class:Q9(`${i.value}`),ref:n,"data-swiper-slide-index":typeof t.virtualIndex>"u"&&s&&s.value&&s.value.params.loop?t.swiperSlideIndex:t.virtualIndex,onLoadCapture:f},t.zoom?p1("div",{class:"swiper-zoom-container","data-swiper-zoom":typeof t.zoom=="number"?t.zoom:void 0},[c.default&&c.default(l.value),t.lazy&&!r.value&&p1("div",{class:"swiper-lazy-preloader"})]):[c.default&&c.default(l.value),t.lazy&&!r.value&&p1("div",{class:"swiper-lazy-preloader"})])}};function Qs(t){let{swiper:e,extendParams:c,on:a,emit:s}=t;c({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let n;const i=k1();e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};const r=i.createElement("div");function o(m,v){const M=e.params.virtual;if(M.cache&&e.virtual.cache[v])return e.virtual.cache[v];let H;return M.renderSlide?(H=M.renderSlide.call(e,m,v),typeof H=="string"&&(r.innerHTML=H,H=r.children[0])):e.isElement?H=B4("swiper-slide"):H=B4("div",e.params.slideClass),H.setAttribute("data-swiper-slide-index",v),M.renderSlide||(H.innerHTML=m),M.cache&&(e.virtual.cache[v]=H),H}function l(m){const{slidesPerView:v,slidesPerGroup:M,centeredSlides:H,loop:p}=e.params,{addSlidesBefore:g,addSlidesAfter:_}=e.params.virtual,{from:b,to:A,slides:G,slidesGrid:k,offset:w}=e.virtual;e.params.cssMode||e.updateActiveIndex();const y=e.activeIndex||0;let O;e.rtlTranslate?O="right":O=e.isHorizontal()?"left":"top";let E,x;H?(E=Math.floor(v/2)+M+_,x=Math.floor(v/2)+M+g):(E=v+(M-1)+_,x=(p?v:M)+g);let R=y-x,D=y+E;p||(R=Math.max(R,0),D=Math.min(D,G.length-1));let U=(e.slidesGrid[R]||0)-(e.slidesGrid[0]||0);p&&y>=x?(R-=x,H||(U+=e.slidesGrid[0])):p&&y<x&&(R=-x,H&&(U+=e.slidesGrid[0])),Object.assign(e.virtual,{from:R,to:D,offset:U,slidesGrid:e.slidesGrid,slidesBefore:x,slidesAfter:E});function l2(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),s("virtualUpdate")}if(b===R&&A===D&&!m){e.slidesGrid!==k&&U!==w&&e.slides.forEach(u2=>{u2.style[O]=`${U-Math.abs(e.cssOverflowAdjustment())}px`}),e.updateProgress(),s("virtualUpdate");return}if(e.params.virtual.renderExternal){e.params.virtual.renderExternal.call(e,{offset:U,from:R,to:D,slides:function(){const S2=[];for(let x1=R;x1<=D;x1+=1)S2.push(G[x1]);return S2}()}),e.params.virtual.renderExternalUpdate?l2():s("virtualUpdate");return}const q=[],f2=[],y2=u2=>{let S2=u2;return u2<0?S2=G.length+u2:S2>=G.length&&(S2=S2-G.length),S2};if(m)e.slides.filter(u2=>u2.matches(`.${e.params.slideClass}, swiper-slide`)).forEach(u2=>{u2.remove()});else for(let u2=b;u2<=A;u2+=1)if(u2<R||u2>D){const S2=y2(u2);e.slides.filter(x1=>x1.matches(`.${e.params.slideClass}[data-swiper-slide-index="${S2}"], swiper-slide[data-swiper-slide-index="${S2}"]`)).forEach(x1=>{x1.remove()})}const W2=p?-G.length:0,U2=p?G.length*2:G.length;for(let u2=W2;u2<U2;u2+=1)if(u2>=R&&u2<=D){const S2=y2(u2);typeof A>"u"||m?f2.push(S2):(u2>A&&f2.push(S2),u2<b&&q.push(S2))}if(f2.forEach(u2=>{e.slidesEl.append(o(G[u2],u2))}),p)for(let u2=q.length-1;u2>=0;u2-=1){const S2=q[u2];e.slidesEl.prepend(o(G[S2],S2))}else q.sort((u2,S2)=>S2-u2),q.forEach(u2=>{e.slidesEl.prepend(o(G[u2],u2))});U1(e.slidesEl,".swiper-slide, swiper-slide").forEach(u2=>{u2.style[O]=`${U-Math.abs(e.cssOverflowAdjustment())}px`}),l2()}function f(m){if(typeof m=="object"&&"length"in m)for(let v=0;v<m.length;v+=1)m[v]&&e.virtual.slides.push(m[v]);else e.virtual.slides.push(m);l(!0)}function u(m){const v=e.activeIndex;let M=v+1,H=1;if(Array.isArray(m)){for(let p=0;p<m.length;p+=1)m[p]&&e.virtual.slides.unshift(m[p]);M=v+m.length,H=m.length}else e.virtual.slides.unshift(m);if(e.params.virtual.cache){const p=e.virtual.cache,g={};Object.keys(p).forEach(_=>{const b=p[_],A=b.getAttribute("data-swiper-slide-index");A&&b.setAttribute("data-swiper-slide-index",parseInt(A,10)+H),g[parseInt(_,10)+H]=b}),e.virtual.cache=g}l(!0),e.slideTo(M,0)}function d(m){if(typeof m>"u"||m===null)return;let v=e.activeIndex;if(Array.isArray(m))for(let M=m.length-1;M>=0;M-=1)e.params.virtual.cache&&(delete e.virtual.cache[m[M]],Object.keys(e.virtual.cache).forEach(H=>{H>m&&(e.virtual.cache[H-1]=e.virtual.cache[H],e.virtual.cache[H-1].setAttribute("data-swiper-slide-index",H-1),delete e.virtual.cache[H])})),e.virtual.slides.splice(m[M],1),m[M]<v&&(v-=1),v=Math.max(v,0);else e.params.virtual.cache&&(delete e.virtual.cache[m],Object.keys(e.virtual.cache).forEach(M=>{M>m&&(e.virtual.cache[M-1]=e.virtual.cache[M],e.virtual.cache[M-1].setAttribute("data-swiper-slide-index",M-1),delete e.virtual.cache[M])})),e.virtual.slides.splice(m,1),m<v&&(v-=1),v=Math.max(v,0);l(!0),e.slideTo(v,0)}function h(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),l(!0),e.slideTo(0,0)}a("beforeInit",()=>{if(!e.params.virtual.enabled)return;let m;if(typeof e.passedParams.virtual.slides>"u"){const v=[...e.slidesEl.children].filter(M=>M.matches(`.${e.params.slideClass}, swiper-slide`));v&&v.length&&(e.virtual.slides=[...v],m=!0,v.forEach((M,H)=>{M.setAttribute("data-swiper-slide-index",H),e.virtual.cache[H]=M,M.remove()}))}m||(e.virtual.slides=e.params.virtual.slides),e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,l()}),a("setTranslate",()=>{e.params.virtual.enabled&&(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(n),n=setTimeout(()=>{l()},100)):l())}),a("init update resize",()=>{e.params.virtual.enabled&&e.params.cssMode&&r6(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:f,prependSlide:u,removeSlide:d,removeAllSlides:h,update:l})}function Js(t,e,c,a){return t.params.createElements&&Object.keys(a).forEach(s=>{if(!c[s]&&c.auto===!0){let n=U1(t.el,`.${a[s]}`)[0];n||(n=B4("div",a[s]),n.className=a[s],t.el.append(n)),c[s]=n,e[s]=n}}),c}function Zs(t){let{swiper:e,extendParams:c,on:a,emit:s}=t;c({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const n=v=>(Array.isArray(v)?v:[v]).filter(M=>!!M);function i(v){let M;return v&&typeof v=="string"&&e.isElement&&(M=e.el.querySelector(v),M)?M:(v&&(typeof v=="string"&&(M=[...document.querySelectorAll(v)]),e.params.uniqueNavElements&&typeof v=="string"&&M.length>1&&e.el.querySelectorAll(v).length===1&&(M=e.el.querySelector(v))),v&&!M?v:M)}function r(v,M){const H=e.params.navigation;v=n(v),v.forEach(p=>{p&&(p.classList[M?"add":"remove"](...H.disabledClass.split(" ")),p.tagName==="BUTTON"&&(p.disabled=M),e.params.watchOverflow&&e.enabled&&p.classList[e.isLocked?"add":"remove"](H.lockClass))})}function o(){const{nextEl:v,prevEl:M}=e.navigation;if(e.params.loop){r(M,!1),r(v,!1);return}r(M,e.isBeginning&&!e.params.rewind),r(v,e.isEnd&&!e.params.rewind)}function l(v){v.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),s("navigationPrev"))}function f(v){v.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),s("navigationNext"))}function u(){const v=e.params.navigation;if(e.params.navigation=Js(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(v.nextEl||v.prevEl))return;let M=i(v.nextEl),H=i(v.prevEl);Object.assign(e.navigation,{nextEl:M,prevEl:H}),M=n(M),H=n(H);const p=(g,_)=>{g&&g.addEventListener("click",_==="next"?f:l),!e.enabled&&g&&g.classList.add(...v.lockClass.split(" "))};M.forEach(g=>p(g,"next")),H.forEach(g=>p(g,"prev"))}function d(){let{nextEl:v,prevEl:M}=e.navigation;v=n(v),M=n(M);const H=(p,g)=>{p.removeEventListener("click",g==="next"?f:l),p.classList.remove(...e.params.navigation.disabledClass.split(" "))};v.forEach(p=>H(p,"next")),M.forEach(p=>H(p,"prev"))}a("init",()=>{e.params.navigation.enabled===!1?m():(u(),o())}),a("toEdge fromEdge lock unlock",()=>{o()}),a("destroy",()=>{d()}),a("enable disable",()=>{let{nextEl:v,prevEl:M}=e.navigation;if(v=n(v),M=n(M),e.enabled){o();return}[...v,...M].filter(H=>!!H).forEach(H=>H.classList.add(e.params.navigation.lockClass))}),a("click",(v,M)=>{let{nextEl:H,prevEl:p}=e.navigation;H=n(H),p=n(p);const g=M.target;if(e.params.navigation.hideOnClick&&!p.includes(g)&&!H.includes(g)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===g||e.pagination.el.contains(g)))return;let _;H.length?_=H[0].classList.contains(e.params.navigation.hiddenClass):p.length&&(_=p[0].classList.contains(e.params.navigation.hiddenClass)),s(_===!0?"navigationShow":"navigationHide"),[...H,...p].filter(b=>!!b).forEach(b=>b.classList.toggle(e.params.navigation.hiddenClass))}});const h=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),o()},m=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(e.navigation,{enable:h,disable:m,update:o,init:u,destroy:d})}function ae(t){return t===void 0&&(t=""),`.${t.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function en(t){let{swiper:e,extendParams:c,on:a,emit:s}=t;const n="swiper-pagination";c({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:p=>p,formatFractionTotal:p=>p,bulletClass:`${n}-bullet`,bulletActiveClass:`${n}-bullet-active`,modifierClass:`${n}-`,currentClass:`${n}-current`,totalClass:`${n}-total`,hiddenClass:`${n}-hidden`,progressbarFillClass:`${n}-progressbar-fill`,progressbarOppositeClass:`${n}-progressbar-opposite`,clickableClass:`${n}-clickable`,lockClass:`${n}-lock`,horizontalClass:`${n}-horizontal`,verticalClass:`${n}-vertical`,paginationDisabledClass:`${n}-disabled`}}),e.pagination={el:null,bullets:[]};let i,r=0;const o=p=>(Array.isArray(p)?p:[p]).filter(g=>!!g);function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function f(p,g){const{bulletActiveClass:_}=e.params.pagination;p&&(p=p[`${g==="prev"?"previous":"next"}ElementSibling`],p&&(p.classList.add(`${_}-${g}`),p=p[`${g==="prev"?"previous":"next"}ElementSibling`],p&&p.classList.add(`${_}-${g}-${g}`)))}function u(p){const g=p.target.closest(ae(e.params.pagination.bulletClass));if(!g)return;p.preventDefault();const _=Lt(g)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===_)return;e.slideToLoop(_)}else e.slideTo(_)}function d(){const p=e.rtl,g=e.params.pagination;if(l())return;let _=e.pagination.el;_=o(_);let b,A;const G=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,k=e.params.loop?Math.ceil(G/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(A=e.previousRealIndex||0,b=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(b=e.snapIndex,A=e.previousSnapIndex):(A=e.previousIndex||0,b=e.activeIndex||0),g.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const w=e.pagination.bullets;let y,O,E;if(g.dynamicBullets&&(i=ra(w[0],e.isHorizontal()?"width":"height",!0),_.forEach(x=>{x.style[e.isHorizontal()?"width":"height"]=`${i*(g.dynamicMainBullets+4)}px`}),g.dynamicMainBullets>1&&A!==void 0&&(r+=b-(A||0),r>g.dynamicMainBullets-1?r=g.dynamicMainBullets-1:r<0&&(r=0)),y=Math.max(b-r,0),O=y+(Math.min(w.length,g.dynamicMainBullets)-1),E=(O+y)/2),w.forEach(x=>{const R=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(D=>`${g.bulletActiveClass}${D}`)].map(D=>typeof D=="string"&&D.includes(" ")?D.split(" "):D).flat();x.classList.remove(...R)}),_.length>1)w.forEach(x=>{const R=Lt(x);R===b?x.classList.add(...g.bulletActiveClass.split(" ")):e.isElement&&x.setAttribute("part","bullet"),g.dynamicBullets&&(R>=y&&R<=O&&x.classList.add(...`${g.bulletActiveClass}-main`.split(" ")),R===y&&f(x,"prev"),R===O&&f(x,"next"))});else{const x=w[b];if(x&&x.classList.add(...g.bulletActiveClass.split(" ")),e.isElement&&w.forEach((R,D)=>{R.setAttribute("part",D===b?"bullet-active":"bullet")}),g.dynamicBullets){const R=w[y],D=w[O];for(let U=y;U<=O;U+=1)w[U]&&w[U].classList.add(...`${g.bulletActiveClass}-main`.split(" "));f(R,"prev"),f(D,"next")}}if(g.dynamicBullets){const x=Math.min(w.length,g.dynamicMainBullets+4),R=(i*x-i)/2-E*i,D=p?"right":"left";w.forEach(U=>{U.style[e.isHorizontal()?D:"top"]=`${R}px`})}}_.forEach((w,y)=>{if(g.type==="fraction"&&(w.querySelectorAll(ae(g.currentClass)).forEach(O=>{O.textContent=g.formatFractionCurrent(b+1)}),w.querySelectorAll(ae(g.totalClass)).forEach(O=>{O.textContent=g.formatFractionTotal(k)})),g.type==="progressbar"){let O;g.progressbarOpposite?O=e.isHorizontal()?"vertical":"horizontal":O=e.isHorizontal()?"horizontal":"vertical";const E=(b+1)/k;let x=1,R=1;O==="horizontal"?x=E:R=E,w.querySelectorAll(ae(g.progressbarFillClass)).forEach(D=>{D.style.transform=`translate3d(0,0,0) scaleX(${x}) scaleY(${R})`,D.style.transitionDuration=`${e.params.speed}ms`})}g.type==="custom"&&g.renderCustom?(w.innerHTML=g.renderCustom(e,b+1,k),y===0&&s("paginationRender",w)):(y===0&&s("paginationRender",w),s("paginationUpdate",w)),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](g.lockClass)})}function h(){const p=e.params.pagination;if(l())return;const g=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let _=e.pagination.el;_=o(_);let b="";if(p.type==="bullets"){let A=e.params.loop?Math.ceil(g/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&A>g&&(A=g);for(let G=0;G<A;G+=1)p.renderBullet?b+=p.renderBullet.call(e,G,p.bulletClass):b+=`<${p.bulletElement} ${e.isElement?'part="bullet"':""} class="${p.bulletClass}"></${p.bulletElement}>`}p.type==="fraction"&&(p.renderFraction?b=p.renderFraction.call(e,p.currentClass,p.totalClass):b=`<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`),p.type==="progressbar"&&(p.renderProgressbar?b=p.renderProgressbar.call(e,p.progressbarFillClass):b=`<span class="${p.progressbarFillClass}"></span>`),e.pagination.bullets=[],_.forEach(A=>{p.type!=="custom"&&(A.innerHTML=b||""),p.type==="bullets"&&e.pagination.bullets.push(...A.querySelectorAll(ae(p.bulletClass)))}),p.type!=="custom"&&s("paginationRender",_[0])}function m(){e.params.pagination=Js(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const p=e.params.pagination;if(!p.el)return;let g;typeof p.el=="string"&&e.isElement&&(g=e.el.querySelector(p.el)),!g&&typeof p.el=="string"&&(g=[...document.querySelectorAll(p.el)]),g||(g=p.el),!(!g||g.length===0)&&(e.params.uniqueNavElements&&typeof p.el=="string"&&Array.isArray(g)&&g.length>1&&(g=[...e.el.querySelectorAll(p.el)],g.length>1&&(g=g.filter(_=>$9(_,".swiper")[0]===e.el)[0])),Array.isArray(g)&&g.length===1&&(g=g[0]),Object.assign(e.pagination,{el:g}),g=o(g),g.forEach(_=>{p.type==="bullets"&&p.clickable&&_.classList.add(...(p.clickableClass||"").split(" ")),_.classList.add(p.modifierClass+p.type),_.classList.add(e.isHorizontal()?p.horizontalClass:p.verticalClass),p.type==="bullets"&&p.dynamicBullets&&(_.classList.add(`${p.modifierClass}${p.type}-dynamic`),r=0,p.dynamicMainBullets<1&&(p.dynamicMainBullets=1)),p.type==="progressbar"&&p.progressbarOpposite&&_.classList.add(p.progressbarOppositeClass),p.clickable&&_.addEventListener("click",u),e.enabled||_.classList.add(p.lockClass)}))}function v(){const p=e.params.pagination;if(l())return;let g=e.pagination.el;g&&(g=o(g),g.forEach(_=>{_.classList.remove(p.hiddenClass),_.classList.remove(p.modifierClass+p.type),_.classList.remove(e.isHorizontal()?p.horizontalClass:p.verticalClass),p.clickable&&(_.classList.remove(...(p.clickableClass||"").split(" ")),_.removeEventListener("click",u))})),e.pagination.bullets&&e.pagination.bullets.forEach(_=>_.classList.remove(...p.bulletActiveClass.split(" ")))}a("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const p=e.params.pagination;let{el:g}=e.pagination;g=o(g),g.forEach(_=>{_.classList.remove(p.horizontalClass,p.verticalClass),_.classList.add(e.isHorizontal()?p.horizontalClass:p.verticalClass)})}),a("init",()=>{e.params.pagination.enabled===!1?H():(m(),h(),d())}),a("activeIndexChange",()=>{typeof e.snapIndex>"u"&&d()}),a("snapIndexChange",()=>{d()}),a("snapGridLengthChange",()=>{h(),d()}),a("destroy",()=>{v()}),a("enable disable",()=>{let{el:p}=e.pagination;p&&(p=o(p),p.forEach(g=>g.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),a("lock unlock",()=>{d()}),a("click",(p,g)=>{const _=g.target,b=o(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&b&&b.length>0&&!_.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&_===e.navigation.nextEl||e.navigation.prevEl&&_===e.navigation.prevEl))return;const A=b[0].classList.contains(e.params.pagination.hiddenClass);s(A===!0?"paginationShow":"paginationHide"),b.forEach(G=>G.classList.toggle(e.params.pagination.hiddenClass))}});const M=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:p}=e.pagination;p&&(p=o(p),p.forEach(g=>g.classList.remove(e.params.pagination.paginationDisabledClass))),m(),h(),d()},H=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:p}=e.pagination;p&&(p=o(p),p.forEach(g=>g.classList.add(e.params.pagination.paginationDisabledClass))),v()};Object.assign(e.pagination,{enable:M,disable:H,render:h,update:d,init:m,destroy:v})}function tn(t){let{swiper:e,extendParams:c,on:a,emit:s}=t;const n=k1();let i=!1,r=null,o=null,l,f,u,d;c({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null};function h(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:E,rtlTranslate:x}=e,{dragEl:R,el:D}=E,U=e.params.scrollbar,l2=e.params.loop?e.progressLoop:e.progress;let q=f,f2=(u-f)*l2;x?(f2=-f2,f2>0?(q=f-f2,f2=0):-f2+f>u&&(q=u+f2)):f2<0?(q=f+f2,f2=0):f2+f>u&&(q=u-f2),e.isHorizontal()?(R.style.transform=`translate3d(${f2}px, 0, 0)`,R.style.width=`${q}px`):(R.style.transform=`translate3d(0px, ${f2}px, 0)`,R.style.height=`${q}px`),U.hide&&(clearTimeout(r),D.style.opacity=1,r=setTimeout(()=>{D.style.opacity=0,D.style.transitionDuration="400ms"},1e3))}function m(E){!e.params.scrollbar.el||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${E}ms`)}function v(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:E}=e,{dragEl:x,el:R}=E;x.style.width="",x.style.height="",u=e.isHorizontal()?R.offsetWidth:R.offsetHeight,d=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?f=u*d:f=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?x.style.width=`${f}px`:x.style.height=`${f}px`,d>=1?R.style.display="none":R.style.display="",e.params.scrollbar.hide&&(R.style.opacity=0),e.params.watchOverflow&&e.enabled&&E.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function M(E){return e.isHorizontal()?E.clientX:E.clientY}function H(E){const{scrollbar:x,rtlTranslate:R}=e,{el:D}=x;let U;U=(M(E)-oT(D)[e.isHorizontal()?"left":"top"]-(l!==null?l:f/2))/(u-f),U=Math.max(Math.min(U,1),0),R&&(U=1-U);const l2=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*U;e.updateProgress(l2),e.setTranslate(l2),e.updateActiveIndex(),e.updateSlidesClasses()}function p(E){const x=e.params.scrollbar,{scrollbar:R,wrapperEl:D}=e,{el:U,dragEl:l2}=R;i=!0,l=E.target===l2?M(E)-E.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,E.preventDefault(),E.stopPropagation(),D.style.transitionDuration="100ms",l2.style.transitionDuration="100ms",H(E),clearTimeout(o),U.style.transitionDuration="0ms",x.hide&&(U.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),s("scrollbarDragStart",E)}function g(E){const{scrollbar:x,wrapperEl:R}=e,{el:D,dragEl:U}=x;i&&(E.preventDefault?E.preventDefault():E.returnValue=!1,H(E),R.style.transitionDuration="0ms",D.style.transitionDuration="0ms",U.style.transitionDuration="0ms",s("scrollbarDragMove",E))}function _(E){const x=e.params.scrollbar,{scrollbar:R,wrapperEl:D}=e,{el:U}=R;i&&(i=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",D.style.transitionDuration=""),x.hide&&(clearTimeout(o),o=Mt(()=>{U.style.opacity=0,U.style.transitionDuration="400ms"},1e3)),s("scrollbarDragEnd",E),x.snapOnRelease&&e.slideToClosest())}function b(E){const{scrollbar:x,params:R}=e,D=x.el;if(!D)return;const U=D,l2=R.passiveListeners?{passive:!1,capture:!1}:!1,q=R.passiveListeners?{passive:!0,capture:!1}:!1;if(!U)return;const f2=E==="on"?"addEventListener":"removeEventListener";U[f2]("pointerdown",p,l2),n[f2]("pointermove",g,l2),n[f2]("pointerup",_,q)}function A(){!e.params.scrollbar.el||!e.scrollbar.el||b("on")}function G(){!e.params.scrollbar.el||!e.scrollbar.el||b("off")}function k(){const{scrollbar:E,el:x}=e;e.params.scrollbar=Js(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const R=e.params.scrollbar;if(!R.el)return;let D;if(typeof R.el=="string"&&e.isElement&&(D=e.el.querySelector(R.el)),!D&&typeof R.el=="string"){if(D=n.querySelectorAll(R.el),!D.length)return}else D||(D=R.el);e.params.uniqueNavElements&&typeof R.el=="string"&&D.length>1&&x.querySelectorAll(R.el).length===1&&(D=x.querySelector(R.el)),D.length>0&&(D=D[0]),D.classList.add(e.isHorizontal()?R.horizontalClass:R.verticalClass);let U;D&&(U=D.querySelector(ae(e.params.scrollbar.dragClass)),U||(U=B4("div",e.params.scrollbar.dragClass),D.append(U))),Object.assign(E,{el:D,dragEl:U}),R.draggable&&A(),D&&D.classList[e.enabled?"remove":"add"](...P3(e.params.scrollbar.lockClass))}function w(){const E=e.params.scrollbar,x=e.scrollbar.el;x&&x.classList.remove(...P3(e.isHorizontal()?E.horizontalClass:E.verticalClass)),G()}a("init",()=>{e.params.scrollbar.enabled===!1?O():(k(),v(),h())}),a("update resize observerUpdate lock unlock",()=>{v()}),a("setTranslate",()=>{h()}),a("setTransition",(E,x)=>{m(x)}),a("enable disable",()=>{const{el:E}=e.scrollbar;E&&E.classList[e.enabled?"remove":"add"](...P3(e.params.scrollbar.lockClass))}),a("destroy",()=>{w()});const y=()=>{e.el.classList.remove(...P3(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.remove(...P3(e.params.scrollbar.scrollbarDisabledClass)),k(),v(),h()},O=()=>{e.el.classList.add(...P3(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.add(...P3(e.params.scrollbar.scrollbarDisabledClass)),w()};Object.assign(e.scrollbar,{enable:y,disable:O,updateSize:v,setTranslate:h,init:k,destroy:w})}function cn(t){let{swiper:e,extendParams:c,on:a,emit:s,params:n}=t;e.autoplay={running:!1,paused:!1,timeLeft:0},c({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let i,r,o=n&&n.autoplay?n.autoplay.delay:3e3,l=n&&n.autoplay?n.autoplay.delay:3e3,f,u=new Date().getTime(),d,h,m,v,M,H,p;function g(q){!e||e.destroyed||!e.wrapperEl||q.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",g),!p&&y())}const _=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&(l=f,d=!1);const q=e.autoplay.paused?f:u+l-new Date().getTime();e.autoplay.timeLeft=q,s("autoplayTimeLeft",q,q/o),r=requestAnimationFrame(()=>{_()})},b=()=>{let q;return e.virtual&&e.params.virtual.enabled?q=e.slides.filter(y2=>y2.classList.contains("swiper-slide-active"))[0]:q=e.slides[e.activeIndex],q?parseInt(q.getAttribute("data-swiper-autoplay"),10):void 0},A=q=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(r),_();let f2=typeof q>"u"?e.params.autoplay.delay:q;o=e.params.autoplay.delay,l=e.params.autoplay.delay;const y2=b();!Number.isNaN(y2)&&y2>0&&typeof q>"u"&&(f2=y2,o=y2,l=y2),f=f2;const W2=e.params.speed,U2=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(W2,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,W2,!0,!0),s("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(W2,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,W2,!0,!0),s("autoplay")),e.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{A()})))};return f2>0?(clearTimeout(i),i=setTimeout(()=>{U2()},f2)):requestAnimationFrame(()=>{U2()}),f2},G=()=>{u=new Date().getTime(),e.autoplay.running=!0,A(),s("autoplayStart")},k=()=>{e.autoplay.running=!1,clearTimeout(i),cancelAnimationFrame(r),s("autoplayStop")},w=(q,f2)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(i),q||(H=!0);const y2=()=>{s("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",g):y()};if(e.autoplay.paused=!0,f2){M&&(f=e.params.autoplay.delay),M=!1,y2();return}f=(f||e.params.autoplay.delay)-(new Date().getTime()-u),!(e.isEnd&&f<0&&!e.params.loop)&&(f<0&&(f=0),y2())},y=()=>{e.isEnd&&f<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(u=new Date().getTime(),H?(H=!1,A(f)):A(),e.autoplay.paused=!1,s("autoplayResume"))},O=()=>{if(e.destroyed||!e.autoplay.running)return;const q=k1();q.visibilityState==="hidden"&&(H=!0,w(!0)),q.visibilityState==="visible"&&y()},E=q=>{q.pointerType==="mouse"&&(H=!0,p=!0,!(e.animating||e.autoplay.paused)&&w(!0))},x=q=>{q.pointerType==="mouse"&&(p=!1,e.autoplay.paused&&y())},R=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",E),e.el.addEventListener("pointerleave",x))},D=()=>{e.el.removeEventListener("pointerenter",E),e.el.removeEventListener("pointerleave",x)},U=()=>{k1().addEventListener("visibilitychange",O)},l2=()=>{k1().removeEventListener("visibilitychange",O)};a("init",()=>{e.params.autoplay.enabled&&(R(),U(),G())}),a("destroy",()=>{D(),l2(),e.autoplay.running&&k()}),a("_freeModeStaticRelease",()=>{(m||H)&&y()}),a("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?k():w(!0,!0)}),a("beforeTransitionStart",(q,f2,y2)=>{e.destroyed||!e.autoplay.running||(y2||!e.params.autoplay.disableOnInteraction?w(!0,!0):k())}),a("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){k();return}h=!0,m=!1,H=!1,v=setTimeout(()=>{H=!0,m=!0,w(!0)},200)}}),a("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!h)){if(clearTimeout(v),clearTimeout(i),e.params.autoplay.disableOnInteraction){m=!1,h=!1;return}m&&e.params.cssMode&&y(),m=!1,h=!1}}),a("slideChange",()=>{e.destroyed||!e.autoplay.running||(M=!0)}),Object.assign(e.autoplay,{start:G,stop:k,pause:w,resume:y})}function xE(t){const{effect:e,swiper:c,on:a,setTranslate:s,setTransition:n,overwriteParams:i,perspective:r,recreateShadows:o,getEffectParams:l}=t;a("beforeInit",()=>{if(c.params.effect!==e)return;c.classNames.push(`${c.params.containerModifierClass}${e}`),r&&r()&&c.classNames.push(`${c.params.containerModifierClass}3d`);const u=i?i():{};Object.assign(c.params,u),Object.assign(c.originalParams,u)}),a("setTranslate",()=>{c.params.effect===e&&s()}),a("setTransition",(u,d)=>{c.params.effect===e&&n(d)}),a("transitionEnd",()=>{if(c.params.effect===e&&o){if(!l||!l().slideShadows)return;c.slides.forEach(u=>{u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(d=>d.remove())}),o()}});let f;a("virtualUpdate",()=>{c.params.effect===e&&(c.slides.length||(f=!0),requestAnimationFrame(()=>{f&&c.slides&&c.slides.length&&(s(),f=!1)}))})}function NE(t,e){const c=U9(e);return c!==e&&(c.style.backfaceVisibility="hidden",c.style["-webkit-backface-visibility"]="hidden"),c}function TE(t){let{swiper:e,duration:c,transformElements:a,allSlides:s}=t;const{activeIndex:n}=e,i=r=>r.parentElement?r.parentElement:e.slides.filter(l=>l.shadowRoot&&l.shadowRoot===r.parentNode)[0];if(e.params.virtualTranslate&&c!==0){let r=!1,o;s?o=a:o=a.filter(l=>{const f=l.classList.contains("swiper-slide-transform")?i(l):l;return e.getSlideIndex(f)===n}),o.forEach(l=>{uT(l,()=>{if(r||!e||e.destroyed)return;r=!0,e.animating=!1;const f=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(f)})})}}function an(t){let{swiper:e,extendParams:c,on:a}=t;c({fadeEffect:{crossFade:!1}}),xE({effect:"fade",swiper:e,on:a,setTranslate:()=>{const{slides:i}=e,r=e.params.fadeEffect;for(let o=0;o<i.length;o+=1){const l=e.slides[o];let u=-l.swiperSlideOffset;e.params.virtualTranslate||(u-=e.translate);let d=0;e.isHorizontal()||(d=u,u=0);const h=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(l.progress),0):1+Math.min(Math.max(l.progress,-1),0),m=NE(r,l);m.style.opacity=h,m.style.transform=`translate3d(${u}px, ${d}px, 0px)`}},setTransition:i=>{const r=e.slides.map(o=>U9(o));r.forEach(o=>{o.style.transitionDuration=`${i}ms`}),TE({swiper:e,duration:i,transformElements:r,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}const O3=""+new URL("shop1-rixsYcRI.png",import.meta.url).href,m4=""+new URL("shop2-rAIGWahc.jpg",import.meta.url).href,v4=""+new URL("shop3-Pqo9itNl.jpg",import.meta.url).href,EE=""+new URL("banner1-ISLZS2Mc.jpg",import.meta.url).href,kE=""+new URL("banner2-mp907Kc0.jpg",import.meta.url).href,AE=""+new URL("banner3-u2xzmQOv.png",import.meta.url).href,J9=""+new URL("p001-7AxGYEV1.png",import.meta.url).href,Z9=""+new URL("p002-LFprbvll.png",import.meta.url).href,ef=""+new URL("p009-_5dnmno2.png",import.meta.url).href,bt=""+new URL("p013-_dcQPP3F.png",import.meta.url).href,N4=""+new URL("p014-yykBkoAB.png",import.meta.url).href,q3=""+new URL("p015-EDktiCeq.png",import.meta.url).href,E5=""+new URL("set001-w1Xbq58e.png",import.meta.url).href,k5=""+new URL("set002-r-JGk1mb.png",import.meta.url).href,A5=""+new URL("set003-29mEQ4pU.png",import.meta.url).href,P5=""+new URL("set004-fGwtOZIg.png",import.meta.url).href,P1=t=>(z1("data-v-4ff3d919"),t=t(),C1(),t),PE={class:"content"},IE={class:"container"},RE={class:"homeVueWapper"},OE={class:"swiper-container-zero"},DE={class:"newsWrapper"},FE={class:"news"},BE={class:"smalltitle"},UE={class:"maintitle"},$E={class:"subtitle"},WE=["src"],qE={class:"swiper-container-first"},GE=P1(()=>z("div",{class:"famousArticle"},[z("p",null,"臉部調理系列"),z("h2",null,"針對多重肌膚問題的高效滋養"),z("p",null," 專為成熟肌膚精心研發的保養配方，注入有益的強效維生素和抗氧化成分，讓肌膚更加健康有光澤。 ")],-1)),jE=["onClick"],KE=["src"],YE={class:"productitle"},XE={class:"subtitle"},QE={class:"perfumeWapper"},JE=P1(()=>z("div",{class:"perfumeImage"},[z("img",{src:YN,alt:""})],-1)),ZE={class:"perfumeInformation"},ek=P1(()=>z("div",{class:"title"},"一滴精華，雙倍享受",-1)),tk=P1(()=>z("div",{class:"subtitle"}," 突破傳統框架的迷人香水，除了提供現有的 50mL 版本外，還新增了 100mL 的大容量版本。這些大容量版本僅在官網上販售，適合長期使用 的忠實愛好者。 ",-1)),ck={class:"surpriseGiftWapper"},ak={class:"giftInformation"},sk=P1(()=>z("div",{class:"title"},"驚喜禮物",-1)),nk=P1(()=>z("div",{class:"subtitle"}," 慶祝特別的時刻，卻不知道該送什麼，禮物指南中有各種適合不同人的產品，輕鬆解決你的煩惱。 ",-1)),ik=P1(()=>z("div",{class:"giftImage"},[z("img",{src:XN,alt:""})],-1)),rk={class:"videoServiceWapper"},ok=P1(()=>z("div",{class:"videoServiceImage"},[z("img",{src:QN,alt:""})],-1)),lk={class:"videoServiceInformation"},fk=P1(()=>z("div",{class:"title"},"專屬於您的居家諮詢",-1)),uk=P1(()=>z("div",{class:"subtitle"}," 為了協助您挑選最適合的產品，邀請您與專業顧問進行「線上視訊諮詢」。 ",-1)),dk={class:"swiper-container-second"},hk=["onClick"],pk=["src"],mk={class:"settitle"},vk={class:"setsubtitle"},gk={class:"shop"},Hk={class:"loctioninfo"},zk=P1(()=>z("div",{class:"shoptitle"},"尋找店鋪",-1)),Ck=P1(()=>z("div",{class:"subtitle"}," 位於各城市的精華地段中，交通便利方便抵達！就讓我們的美容顧問，為您提供量身訂製的建議吧，期待與您相見的那天到來！ ",-1)),Mk={class:"swiper-container-third"},Vk={class:"shopimage"},_k=["src"],Lk=K1('<div class="wisdom-wrapper" data-v-4ff3d919><h2 data-v-4ff3d919>&#39;You are very much ON TIME, and in your TIME ZONE which God set up for you.&#39;</h2><p data-v-4ff3d919>&#39;&#39;在上帝為你安排的時區裡，一切都是準時的。&#39;&#39;</p></div><div class="eco-wrapper" data-v-4ff3d919><div class="textwrapper" data-v-4ff3d919><div class="section" data-v-4ff3d919><div class="ecoTitle" data-v-4ff3d919>無動物實驗</div><div class="ecoSubtitle" data-v-4ff3d919> 使用專業儀器對所有產品進行全面測試，同時秉持著對動物生命的愛護和尊重，堅持不進行動物實驗 </div></div><div class="section" data-v-4ff3d919><div class="ecoTitle" data-v-4ff3d919>全產品環保包裝</div><div class="ecoSubtitle" data-v-4ff3d919> 皆使用可回收或可生物降解的天然材料作為包裝，以減少對地球的塑料污染。同時，我們提供消費者空瓶回收的回購優惠價，鼓勵大家參與環保行動。 </div></div><div class="section" data-v-4ff3d919><div class="ecoTitle" data-v-4ff3d919>降低碳足跡</div><div class="ecoSubtitle" data-v-4ff3d919> 減少生產和運輸過程中的能源消耗，採用節能技術，降低80%碳足跡。 </div></div></div></div>',2),bk={__name:"HomeView",setup(t){function e(M){}function c(M){}function a(M){}function s(M){}function n(){window.scrollTo({behavior:"smooth",top:0})}const i={clickable:!0,renderBullet:function(){return'<div class="nav-item" > </item>'}},r=[Zs,en,tn,cn,Qs,an],o=h2({0:{slidesPerView:1,spaceBetween:10},430:{slidesPerView:1,spaceBetween:10},1024:{slidesPerView:3,spaceBetween:10},1440:{slidesPerView:3,spaceBetween:10}}),l=h2([{smalltitle:"家居香氛",maintitle:"為您介紹 Alles Gute 香氛系列",subtitle:"探索三款啟程心靈旅程的香氛────森林、朝露以及夜幕，每三十分鐘銷售5,000份。",src:EE},{smalltitle:"高效配方",maintitle:"肌膚調理凝霜",subtitle:"這款蘊含牛奶般獨特質地、富含維他命 B 和 C 的輕度保濕配方，能有效呵護、柔軟、平衡肌膚。",src:kE},{smalltitle:"陶冶心情",maintitle:"2024年全新力作",subtitle:"香水系列分為以下幾種香調：花香、清新、木質、馥郁──也可能同時擁有兩種香調特色。",src:AE}]);let f=h2([{title:"甜橙香檸身體凝乳",subtitle:"柑橘、木質、草本芳香",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:N4},{capacity:500,price:1400,imageSrc:q3}],id:1},{title:"芫荽籽身體凝乳",subtitle:"溫暖木質辛香",size:"容量",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:N4},{capacity:500,price:1400,imageSrc:q3}],price:"NT$600起",id:2},{title:"玫瑰身體凝乳",subtitle:"玫瑰花、豆蔻、黑胡椒",size:"容量",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:N4},{capacity:500,price:1400,imageSrc:q3}],id:3},{title:"橙香萬用油",subtitle:"柑橘、清爽幽香",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:ef},{capacity:500,price:1400,imageSrc:q3}],id:4},{title:"晨沐薰衣草面霜",subtitle:"薰衣草、朝露、草本芳香",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:J9},{capacity:500,price:1400,imageSrc:bt}],id:5},{title:"香草森林面霜",subtitle:"香草、木質、草本芳香",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:Z9},{capacity:500,price:1400,imageSrc:bt}],id:6}]),u=h2([{title:"春意盎然",subtitle:"清潔露、廁後點滴、室內噴霧",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:E5},{capacity:500,price:1400,imageSrc:E5}],id:1},{title:"夏日戀曲",subtitle:"潔膚露、去角質露、身體乳霜",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:k5},{capacity:500,price:1400,imageSrc:k5}],id:2},{title:"秋頌曲調",subtitle:"護手霜、潔膚露、護唇膏",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:A5},{capacity:500,price:1400,imageSrc:A5}],id:3},{title:"冬季禮遇",subtitle:"護手霜、清潔露、乾洗手",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:P5},{capacity:500,price:1400,imageSrc:P5}],id:4}]);const d=h2([{src:O3},{src:m4},{src:v4}]),h=Y1();function m(M){h.push({name:"productDetailView",params:{id:M.id}})}function v(){n()}return v(),(M,H)=>{const p=Z3("icon");return e2(),o2("div",PE,[z("div",IE,[z("div",RE,[z("div",OE,[a2(J(ie),{slidesPerView:1,spaceBetween:30,loop:!0,centeredSlides:!0,navigation:!1,autoplay:{delay:3500,disableOnInteraction:!0},modules:r,effect:M.fade,onSwiper:e},{default:I2(()=>[(e2(!0),o2(R2,null,m1(l.value,(g,_)=>(e2(),u3(J(U3),{key:_},{default:I2(()=>[z("div",DE,[z("div",FE,[z("div",BE,n2(g.smalltitle),1),z("div",UE,n2(g.maintitle),1),z("div",$E,n2(g.subtitle),1),a2(ce,{title:"立即探索",path:"productList",class:"perfume-button"})]),z("img",{src:g.src},null,8,WE)])]),_:2},1024))),128))]),_:1},8,["effect"])]),z("div",qE,[a2(J(ie),{scrollbar:{hide:!1,draggable:!0,dragSize:600},slidesPerView:4,spaceBetween:0,breakpoints:o.value,loop:!1,centeredSlides:!1,pagination:i,navigation:{hiddenClass:"swiper-button-hidden"},modules:r,onSwiper:c},{default:I2(()=>[a2(J(U3),null,{default:I2(()=>[GE]),_:1}),(e2(!0),o2(R2,null,m1(J(f),g=>(e2(),u3(J(U3),{key:g},{default:I2(()=>[z("div",{class:"famousProductsWrapper",onClick:_=>m(g)},[z("img",{src:g.sizeList[0].imageSrc},null,8,KE),z("div",YE,n2(g.title),1),z("div",XE,n2(g.subtitle),1)],8,jE)]),_:2},1024))),128))]),_:1},8,["breakpoints"])]),z("div",QE,[JE,z("div",ZE,[ek,tk,a2(ce,{title:"立即探索",path:"productList",class:"perfume-button"})])]),z("div",ck,[z("div",ak,[sk,nk,a2(ce,{title:"立即挑選",path:"combineList",class:"surpriseGift-button"})]),ik]),z("div",rk,[ok,z("div",lk,[fk,uk,a2(ce,{title:"立即諮詢",path:"contact",class:"video-button"})])]),z("div",dk,[a2(J(ie),{scrollbar:{hide:!1,draggable:!0,dragsize:600,mousewheel:!0},slidesPerView:3,spaceBetween:10,breakpoints:o.value,loop:!0,centeredSlides:!1,pagination:i,autoplay:{delay:3e3,disableOnInteraction:!1},navigation:!0,modules:r,onSwiper:a},{default:I2(()=>[(e2(!0),o2(R2,null,m1(J(u),g=>(e2(),u3(J(U3),{key:g},{default:I2(()=>[z("div",{class:"SetWrapper",onClick:_=>m(g)},[z("img",{src:g.sizeList[0].imageSrc},null,8,pk),z("div",mk,n2(g.title),1),z("div",vk,n2(g.subtitle),1)],8,hk)]),_:2},1024))),128))]),_:1},8,["breakpoints"])]),z("div",gk,[z("div",Hk,[zk,Ck,a2(ce,{title:"立即出發",path:"shop",class:"shop-button"})]),z("div",Mk,[a2(J(ie),{slidesPerView:1,loop:!0,centeredSlides:!0,pagination:i,autoplay:{delay:4e3,disableOnInteraction:!0},navigation:!1,modules:r,onSwiper:s},{default:I2(()=>[(e2(!0),o2(R2,null,m1(d.value,(g,_)=>(e2(),u3(J(U3),{key:_},{default:I2(()=>[z("div",Vk,[z("img",{src:g.src},null,8,_k)])]),_:2},1024))),128))]),_:1})])]),Lk])]),a2(p,{class:"goTop",icon:"arrow-up",onClick:n})])}}},wk=t1(bk,[["__scopeId","data-v-4ff3d919"]]),yk="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='87.74'%20height='18.33'%20viewBox='0%200%2087.74%2018.33'%3e%3ctitle%3eshop-map%3c/title%3e%3cg%20id='圖層_2'%20data-name='圖層%202'%3e%3cg%20id='design'%3e%3cg%3e%3cpath%20d='M5.8,12.27A2.55,2.55,0,0,1,4.68,13a4.51,4.51,0,0,1-1.6.27,3.2,3.2,0,0,1-1.62-.41A2.7,2.7,0,0,1,.39,11.69,4.19,4.19,0,0,1,0,9.89V9.41A4.39,4.39,0,0,1,.36,7.56a2.73,2.73,0,0,1,1-1.19A3,3,0,0,1,3,6a3,3,0,0,1,2,.6A2.63,2.63,0,0,1,5.8,8.32H4.38a1.37,1.37,0,0,0-.44-.89A1.37,1.37,0,0,0,3,7.14a1.32,1.32,0,0,0-1.14.56,2.94,2.94,0,0,0-.39,1.67v.46a2.85,2.85,0,0,0,.42,1.69,1.47,1.47,0,0,0,1.25.57,1.66,1.66,0,0,0,1.18-.35V10.51H3V9.43H5.8Z'%20fill='%23231815'/%3e%3cpath%20d='M14,9.77a4.38,4.38,0,0,1-.37,1.84,2.86,2.86,0,0,1-1.07,1.23,3.12,3.12,0,0,1-3.16,0,2.81,2.81,0,0,1-1.07-1.21,4.2,4.2,0,0,1-.39-1.82V9.46A4.34,4.34,0,0,1,8.3,7.61,2.78,2.78,0,0,1,9.37,6.39,2.9,2.9,0,0,1,11,6a2.9,2.9,0,0,1,1.58.43A2.78,2.78,0,0,1,13.6,7.61,4.34,4.34,0,0,1,14,9.46Zm-1.49-.32a3,3,0,0,0-.4-1.7A1.3,1.3,0,0,0,11,7.17a1.3,1.3,0,0,0-1.14.58,3,3,0,0,0-.4,1.68v.34a3,3,0,0,0,.4,1.69,1.29,1.29,0,0,0,1.15.6,1.29,1.29,0,0,0,1.13-.57,3,3,0,0,0,.4-1.69Z'%20fill='%23231815'/%3e%3cpath%20d='M22,9.77a4.23,4.23,0,0,1-.37,1.84,2.84,2.84,0,0,1-1.06,1.23,3,3,0,0,1-1.59.43,3,3,0,0,1-1.57-.43,2.83,2.83,0,0,1-1.08-1.21A4.2,4.2,0,0,1,16,9.81V9.46a4.19,4.19,0,0,1,.38-1.85,2.76,2.76,0,0,1,1.06-1.22,3.12,3.12,0,0,1,3.16,0,2.78,2.78,0,0,1,1.07,1.22A4.19,4.19,0,0,1,22,9.46Zm-1.48-.32a3.07,3.07,0,0,0-.4-1.7A1.33,1.33,0,0,0,19,7.17a1.27,1.27,0,0,0-1.13.58,2.89,2.89,0,0,0-.41,1.68v.34a3,3,0,0,0,.4,1.69,1.3,1.3,0,0,0,1.15.6,1.32,1.32,0,0,0,1.14-.57,3.12,3.12,0,0,0,.4-1.69Z'%20fill='%23231815'/%3e%3cpath%20d='M29.87,12.27a2.55,2.55,0,0,1-1.12.73,4.51,4.51,0,0,1-1.6.27,3.2,3.2,0,0,1-1.62-.41,2.7,2.7,0,0,1-1.07-1.17,4.19,4.19,0,0,1-.39-1.8V9.41a4.39,4.39,0,0,1,.36-1.85,2.73,2.73,0,0,1,1-1.19A3.06,3.06,0,0,1,27.05,6a3,3,0,0,1,2,.6,2.63,2.63,0,0,1,.84,1.76H28.45a1.25,1.25,0,0,0-1.36-1.18A1.29,1.29,0,0,0,26,7.7a2.86,2.86,0,0,0-.4,1.67v.46A2.85,2.85,0,0,0,26,11.52a1.47,1.47,0,0,0,1.25.57,1.66,1.66,0,0,0,1.18-.35V10.51H27.07V9.43h2.8Z'%20fill='%23231815'/%3e%3cpath%20d='M33.67,12h3.11v1.18H32.21V6.06h1.46Z'%20fill='%23231815'/%3e%3cpath%20d='M43.05,10.09H40.24V12h3.3v1.18H38.77V6.06h4.76V7.24H40.24v1.7h2.81Z'%20fill='%23231815'/%3e%3cpath%20d='M51.1,6.06l1.83,5.15,1.81-5.15h1.93v7.11H55.2V11.22l.14-3.35-1.91,5.3h-1l-1.91-5.3.14,3.35v1.95H49.19V6.06Z'%20fill='%23231815'/%3e%3cpath%20d='M63.2,11.7H60.63l-.49,1.47H58.58l2.65-7.11h1.36l2.66,7.11H63.69ZM61,10.52H62.8l-.89-2.67Z'%20fill='%23231815'/%3e%3cpath%20d='M68.53,10.66v2.51H67.06V6.06h2.78a3.32,3.32,0,0,1,1.41.29,2.21,2.21,0,0,1,.93.83,2.31,2.31,0,0,1,.33,1.23,2,2,0,0,1-.72,1.65,3,3,0,0,1-2,.6Zm0-1.18h1.31a1.29,1.29,0,0,0,.88-.28A1,1,0,0,0,71,8.42a1.11,1.11,0,0,0-1.16-1.18H68.53Z'%20fill='%23231815'/%3e%3c/g%3e%3cpolygon%20points='83.99%2018.33%2083.3%2018.05%2086.93%209.17%2083.3%200.28%2083.99%200%2087.74%209.17%2083.99%2018.33'%20fill='%233e3a39'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",fa=""+new URL("shop4-LdqzFcpl.png",import.meta.url).href,tf=t=>(z1("data-v-fc01ba37"),t=t(),C1(),t),Sk={class:"content"},xk={class:"navbar"},Nk={class:"city"},Tk={class:"shopWrapper"},Ek={class:"store-pic"},kk=["src"],Ak={class:"info"},Pk={class:"title"},Ik={class:"name"},Rk={class:"icon"},Ok=["href"],Dk=tf(()=>z("img",{src:yk,alt:""},null,-1)),Fk=[Dk],Bk=tf(()=>z("div",{class:"divider"},null,-1)),Uk={class:"subtitle"},$k={class:"openhour"},Wk={class:"open"},qk={class:"hour"},Gk={class:"phonenumber"},jk={class:"phone"},Kk={class:"number"},Yk={class:"location"},Xk={class:"location"},Qk={class:"address"},Jk=["href"],Zk={__name:"ShopView",setup(t){let e=h2("Open."),c=h2("Tel."),a=h2("Add."),s=h2([{title:"永康旗艦店",hour:"10:00AM-17:00PM",number:"02-23222200",address:"台北市大安區永康街31巷6號",googleUrl:"https://maps.app.goo.gl/CJYqdnSoCshtykQF8",src:O3,id:1},{title:"台北林口店",hour:"10:00AM-18:00PM",number:"02-66375888",address:"新北市林口區文化三路一段356號1F",googleUrl:"https://maps.app.goo.gl/DtuTYJRT9SCe2MH67",src:m4,id:2},{title:"華泰名品城店",hour:"10:00AM-21:00PM",number:"03-2738666",address:"桃園市中壢區春德路189號",googleUrl:"https://maps.app.goo.gl/3qtDRzqr8AnVh7ks5",src:v4,id:3},{title:"台中新光店",hour:"10:00AM-21:00PM",number:"04-22510792",address:"台中市西屯區臺灣大道三段301號B2",googleUrl:"https://maps.app.goo.gl/DzTmbFNm8LXuefh97",src:fa,id:4},{title:"台中勤美店",hour:"10:00AM-21:00PM",number:"04-23295911",address:"台中市西區公益路68號B1",googleUrl:"https://maps.app.goo.gl/uHN7i4z9mav2UPnDA",src:O3,id:5},{title:"三井LaLa店",hour:"10:00AM-21:00PM",number:"04-22138281",address:"台中市東區進德路600號北館4樓",googleUrl:"https://maps.app.goo.gl/zwo14MK4ULxiwUEs5",src:m4,id:6},{title:"台南新天地店",hour:"10:00AM-21:00PM",number:"06-3030705",address:"台南市中西區西門路一段658號4F",googleUrl:"https://maps.app.goo.gl/5cHrDnZQ6fGEe6nJA",src:v4,id:7},{title:"漢神巨蛋店",hour:"10:00AM-21:00PM",number:"07-3550705",address:"高雄市左營區博愛二路777號B1",googleUrl:"https://maps.app.goo.gl/GQZPNRqbL7qhZQ8V8",src:fa,id:8},{title:"高雄駁二店",hour:"10:00AM-21:00PM",number:"07-9631200",address:"高雄市鹽埕區大勇路3號(駁二藝術特區C4倉庫)",googleUrl:"https://maps.app.goo.gl/16uvzTFgAweKM26N9",src:O3,id:9}]),n=h2([{title:"台北永康旗艦店",hour:"10:00AM-17:00PM",number:"02-23222200",address:"台北市大安區永康街31巷6號",googleUrl:"https://maps.app.goo.gl/CJYqdnSoCshtykQF8",src:O3,id:1},{title:"台北林口店",hour:"10:00AM-18:00PM",number:"02-66375888",address:"新北市林口區文化三路一段356號1F",googleUrl:"https://maps.app.goo.gl/DtuTYJRT9SCe2MH67",src:m4,id:2},{title:"華泰名品城店",hour:"10:00AM-21:00PM",number:"03-2738666",address:"桃園市中壢區春德路189號",googleUrl:"https://maps.app.goo.gl/3qtDRzqr8AnVh7ks5",src:v4,id:3}]),i=h2([{title:"台中新光店",hour:"10:00AM-21:00PM",number:"04-22510792",address:"台中市西屯區臺灣大道三段301號B2",googleUrl:"https://maps.app.goo.gl/DzTmbFNm8LXuefh97",src:O3,id:1},{title:"台中勤美店",hour:"10:00AM-21:00PM",number:"04-23295911",address:"台中市西區公益路68號B1",googleUrl:"https://maps.app.goo.gl/uHN7i4z9mav2UPnDA",src:m4,id:2},{title:"台中三井LaLa店",hour:"10:00AM-21:00PM",number:"04-22138281",address:"台中市東區進德路600號北館4樓",googleUrl:"https://maps.app.goo.gl/zwo14MK4ULxiwUEs5",src:v4,id:3}]),r=h2([{title:"台南新天地店",hour:"10:00AM-21:00PM",number:"06-3030705",address:"台南市中西區西門路一段658號4F",googleUrl:"https://maps.app.goo.gl/5cHrDnZQ6fGEe6nJA",src:O3,id:1},{title:"漢神巨蛋店",hour:"10:00AM-21:00PM",number:"07-3550705",address:"高雄市左營區博愛二路777號B1",googleUrl:"https://maps.app.goo.gl/GQZPNRqbL7qhZQ8V8",src:m4,id:2},{title:"高雄駁二店",hour:"10:00AM-21:00PM",number:"07-9631200",address:"高雄市鹽埕區大勇路3號(駁二藝術特區C4倉庫)",googleUrl:"https://maps.app.goo.gl/16uvzTFgAweKM26N9",src:v4,id:3}]),o=h2(s.value);function l(u){console.log(u,"type"),u==="northList"?o.value=n.value:u==="westList"?o.value=i.value:u==="southList"?o.value=r.value:o.value=s.value}function f(){let u=window.localStorage.getItem("shopList"),d=JSON.parse(u);console.log(d,"shopList")}return f(),window.scrollTo(0,0),window.scrollTo({top:0,behavior:"smooth"}),(u,d)=>(e2(),o2("div",Sk,[z("div",xk,[z("div",Nk,[z("p",{onClick:d[0]||(d[0]=h=>l("all"))},"全部店鋪"),z("p",{onClick:d[1]||(d[1]=h=>l("northList"))},"北部"),z("p",{onClick:d[2]||(d[2]=h=>l("westList"))},"中部"),z("p",{onClick:d[3]||(d[3]=h=>l("southList"))},"南部")]),z("div",Tk,[(e2(!0),o2(R2,null,m1(J(o),h=>(e2(),o2("div",{class:"section",key:h.id},[z("div",Ek,[z("img",{src:h.src},null,8,kk)]),z("div",Ak,[z("div",Pk,[z("div",Ik,n2(h.title),1),z("div",Rk,[z("a",{href:h.googleUrl,target:"_blank"},Fk,8,Ok)])]),Bk,z("div",Uk,[z("div",$k,[z("div",Wk,n2(J(e)),1),z("div",qk,n2(h.hour),1)]),z("div",Gk,[z("div",jk,n2(J(c)),1),z("div",Kk,n2(h.number),1)]),z("div",Yk,[z("div",Xk,n2(J(a)),1),z("div",Qk,[z("a",{href:h.googleUrl,target:"_blank"},n2(h.address),9,Jk)])])])])]))),128))])])]))}},eA=t1(Zk,[["__scopeId","data-v-fc01ba37"]]),tA=""+new URL("about2-xqwRdcCF.png",import.meta.url).href,cA=""+new URL("about3-SRzLv8-z.jpg",import.meta.url).href,aA=""+new URL("about4-mV3p-5bf.jpg",import.meta.url).href,hc=t=>(z1("data-v-98450fbf"),t=t(),C1(),t),sA={class:"about"},nA={class:"container"},iA=K1('<div class="storyWrapper" data-v-98450fbf><div class="icon" data-v-98450fbf><img src="'+Ks+'" data-v-98450fbf></div><div class="storyArea" data-v-98450fbf><div class="title" data-v-98450fbf>故事的起點</div><div class="description" data-v-98450fbf> 「Alles Gute!」源自德語，是德國人經常使用的日常招呼語，有祝福別人一切順利、圓滿的意思。因此，我們以這句招呼語作為品牌名稱，就是希望能夠提供您如同摯友般的祝福，得到身心療癒，讓保養的旅程中盡情享受當下幸福的時刻。 </div></div></div><div class="productsIdeaWrapper" data-v-98450fbf><div class="ideaImage" data-v-98450fbf><img src="'+tA+'" data-v-98450fbf></div><div class="productsIdea" data-v-98450fbf><div class="title" data-v-98450fbf>擁有鑽研產品細節的熱忱</div><div class="description" data-v-98450fbf> 致力開發一系列專業的護膚、頭髮和身體護理產品，秉持科學驗證，加入了頂級的植物萃取和抗氧化成分，所有配方都通過嚴格檢驗，只為提供安全、安心的產品。 </div></div></div><div class="designWrapper" data-v-98450fbf><div class="design" data-v-98450fbf><div class="title" data-v-98450fbf>好設計造就好生活</div><div class="description" data-v-98450fbf> 堅持自行研發產品，不斷構思新點子、開發新配方，以最新技術和成熟的科研方案，並根據客戶的實際需求進行研發，投入時間深入研究，以確保推出的配方具有最高品質和最有效果。 </div></div><div class="designImage" data-v-98450fbf><img src="'+cA+'" alt="" data-v-98450fbf></div></div>',3),rA={class:"shopWrapper"},oA={class:"shop"},lA=hc(()=>z("div",{class:"title"},"交通便利的門市位置",-1)),fA=hc(()=>z("div",{class:"description"}," 無論是開車、搭乘大眾運輸還是步行前來，我們的店鋪都是您的理想選擇。靠近多個公共交通站點，步行數分鐘即可抵達，方便快捷。此外，我們也提供寬敞的停車場，讓您可以輕鬆停車後盡情享受購物樂趣，期待與您相見！ ",-1)),uA=hc(()=>z("div",{class:"shopImage"},[z("img",{src:aA,alt:""})],-1)),dA={class:"swiper-photo"},hA={class:"shopWrapper"},pA=["src"],mA=hc(()=>z("div",{class:"wisdom"},[z("div",{class:"title"},"‘If the path be beautiful, let us not ask where it leads.’ "),z("div",{class:"subtitle"},"Anatole France")],-1)),vA={__name:"AboutView",setup(t){function e(s){}const c=[Zs,en,tn,cn,Qs,an],a=h2([{src:O3},{src:m4},{src:v4},{src:fa}]);return(s,n)=>(e2(),o2("div",sA,[z("div",nA,[iA,z("div",rA,[z("div",oA,[lA,fA,a2(ce,{title:"查看所有店舖",path:"shop",class:"shop-button"})]),uA]),z("div",dA,[a2(J(ie),{scrollbar:{hide:!1,draggable:!0},slidesPerView:1,spaceBetween:0,loop:!0,centeredSlides:!0,pagination:!1,navigation:!0,modules:c,autoplay:{delay:2e3,disableOnInteraction:!0},onSwiper:e},{default:I2(()=>[(e2(!0),o2(R2,null,m1(a.value,(i,r)=>(e2(),u3(J(U3),{key:r},{default:I2(()=>[z("div",hA,[z("img",{src:i.src},null,8,pA)])]),_:2},1024))),128))]),_:1})]),mA])]))}},gA=t1(vA,[["__scopeId","data-v-98450fbf"]]),HA={class:"product-card"},zA=["src"],CA={class:"productInfo"},MA={class:"productitle"},VA={class:"subtitle"},_A={class:"sizenprice"},LA={class:"size-wrapper"},bA={class:"size-list-wrapper"},wA=["id","checked","onChange"],yA=["for"],SA={class:"price"},xA={__name:"ProductCard",props:["inputProduct"],setup(t){const e=t;e.inputProduct;const c=Y1();function a(o,l){o.selectedSizeIndex=l}const s=dc();function n(o){s.setCurrentProduct(o),c.push({name:"productDetailView",params:{id:o.id}})}const i=K4();function r(o){i.addProduct(o)}return(o,l)=>(e2(),o2("div",HA,[z("div",{class:"productPic",onClick:l[0]||(l[0]=f=>n(e.inputProduct))},[z("img",{src:e.inputProduct.sizeList[e.inputProduct.selectedSizeIndex].imageSrc,alt:""},null,8,zA)]),z("div",CA,[z("div",MA,n2(e.inputProduct.title),1),z("div",VA,n2(e.inputProduct.subtitle),1),z("div",_A,[z("div",LA,[z("div",bA,[(e2(!0),o2(R2,null,m1(e.inputProduct.sizeList,(f,u)=>(e2(),o2("div",{class:"size-option",key:u},[z("input",{type:"radio",id:f.id,checked:e.inputProduct.selectedSizeIndex===u,onChange:d=>a(e.inputProduct,u)},null,40,wA),z("label",{for:f.id},n2(f.capacity)+" ml",9,yA)]))),128))])]),z("div",SA,"NT$ "+n2(e.inputProduct.sizeList[e.inputProduct.selectedSizeIndex].price),1)]),z("div",{class:"cart",onClick:l[1]||(l[1]=f=>r(e.inputProduct))},"加入購物車")])]))}},NA=t1(xA,[["__scopeId","data-v-223e583f"]]),TA=t=>(z1("data-v-54b5aad7"),t=t(),C1(),t),EA={class:"container"},kA={class:"navbar"},AA={class:"productsCategories"},PA={class:"productWapper"},IA=TA(()=>z("div",{class:"introduce"},[z("div",{class:"maintitle"},"重新體驗肌膚潔淨及柔滑的感受"),z("div",{class:"description"}," 所有產品皆含有滋潤功效的草本植物成分，讓肌膚在任何季節都能保持潔淨柔滑。 ")],-1)),RA={class:"loading-wrapper"},OA={__name:"ProductListView",setup(t){const e=dc(),a=z3(e).productList;function s(i){i==="all"?a.value=productList:a.value=productList.filter(r=>r.tag===i)}function n(){window.scrollTo({behavior:"smooth",top:0})}return n(),(i,r)=>{const o=Z3("icon");return e2(),o2("div",EA,[K3(z("div",kA,[z("div",AA,[z("p",{onClick:r[0]||(r[0]=l=>s("all"))},"全部商品"),z("p",{onClick:r[1]||(r[1]=l=>s("shampoo"))},"髮品"),z("p",{onClick:r[2]||(r[2]=l=>s("body"))},"身體乳"),z("p",{onClick:r[3]||(r[3]=l=>s("combine"))},"送禮組合")])],512),[[he,J(a)&&J(a).length>0]]),K3(z("div",PA,[IA,(e2(!0),o2(R2,null,m1(J(a),l=>(e2(),u3(NA,{inputProduct:l,key:l.id},null,8,["inputProduct"]))),128))],512),[[he,J(a)&&J(a).length>0]]),K3(z("div",RA,[a2(o,{class:"loading-icon",icon:"circle-notch"})],512),[[he,!J(a)||J(a).length<=0]])])}}},DA=t1(OA,[["__scopeId","data-v-54b5aad7"]]),FA=""+new URL("contactus_picture-6hXdmfMO.jpg",import.meta.url).href,BA={class:"container"},UA=K1('<div class="contact_wrapper" data-v-b7a4674d><div class="icon" data-v-b7a4674d><img src="'+Ks+'" data-v-b7a4674d></div><div class="contact" data-v-b7a4674d><div class="contactus" data-v-b7a4674d>聯絡我們</div><p data-v-b7a4674d> 你可以在家裡舒服地預約視訊諮詢服務。我們會根據你的需求量身打造服務，可能包括送禮建議、肌膚保養推薦，或是挑選個人或家居香氛。我們的顧問會示範產品，和你分享使用方法，還有提供專屬的個人建議 </p><p data-v-b7a4674d> 預約視訊諮詢完全免費！每次約定都有30分鐘的時間，讓我們能夠好好討論您想討論的肌膚問題，歡迎利用電腦、平板或手機上開展線上視訊諮詢。記得要確保你的網路連接穩定喔！ </p></div></div><div class="contactWay_wrapper" data-v-b7a4674d><div class="video" data-v-b7a4674d><div class="title" data-v-b7a4674d>視訊諮詢</div><div class="subtitle" data-v-b7a4674d> 我們想透過網路諮詢，給你帶來跟實體店一樣的感受，期待以全新的方式與您見面！ </div><a href="https://www.example.com" data-v-b7a4674d>立即開始</a></div><div class="mail" data-v-b7a4674d><div class="title" data-v-b7a4674d>寄信給我們</div><div class="subtitle" data-v-b7a4674d>在選購或保養上有任何問題，都可以透過郵件跟我們聊聊唷．</div><a href="mailto:info@example.com" data-v-b7a4674d>立即傳送</a></div><div class="phone" data-v-b7a4674d><div class="title" data-v-b7a4674d>諮詢專線</div><div class="subtitle" data-v-b7a4674d>歡迎撥打諮詢專線，將由專人為您服務。</div><a href="tel:+1234567890" data-v-b7a4674d>立即撥打</a></div></div><div class="imgWrapper" data-v-b7a4674d><img src="'+FA+'" alt="" data-v-b7a4674d></div>',3),$A=[UA],WA={__name:"ContactUsView",setup(t){return window.scrollTo(0,0),window.scrollTo({top:0,behavior:"smooth"}),(e,c)=>(e2(),o2("div",BA,$A))}},qA=t1(WA,[["__scopeId","data-v-b7a4674d"]]),GA="data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.57385%2021.2502V10.3413H20.2241V21.2502H5.57385Z'%20stroke='%23333333'%20stroke-width='1.49961'/%3e%3cpath%20d='M3.92102%2010.3326V6.62276L21.8768%206.62276V10.3326H3.92102Z'%20stroke='%23333333'%20stroke-width='1.49961'/%3e%3cpath%20d='M12.8989%206.61918V21.269M12.8989%206.61918L9.18213%202.50269M12.8989%206.61918L16.3531%202.51051'%20stroke='%23333333'%20stroke-width='1.49961'/%3e%3c/svg%3e",jA="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='25'%20viewBox='0%200%2024%2025'%20fill='none'%3e%3cpath%20d='M20%204.95068H4L4%2016.5592H12.5L17%2020.5592V16.5592H20V4.95068Z'%20stroke='%23333333'%20stroke-width='1.5'/%3e%3c/svg%3e",KA="data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.8562%2022C10.584%2022%208.68975%2021.2194%207.17343%2019.6582C5.65709%2018.097%204.89893%2016.1538%204.89893%2013.8286C4.89893%2012.1823%205.55777%2010.3779%206.87546%208.41531C8.19316%206.45271%2010.1874%204.31428%2012.8581%202C15.5289%204.31428%2017.5231%206.45271%2018.8408%208.41531C20.1585%2010.3779%2020.8173%2012.1823%2020.8173%2013.8286C20.8173%2016.1538%2020.0585%2018.097%2018.5409%2019.6582C17.0234%2021.2194%2015.1284%2022%2012.8562%2022ZM12.8581%2020.4082C14.6976%2020.4082%2016.2187%2019.7847%2017.4214%2018.5378C18.6241%2017.2908%2019.2255%2015.7211%2019.2255%2013.8286C19.2255%2012.5374%2018.6905%2011.0782%2017.6204%209.45099C16.5503%207.82378%2014.9629%206.04622%2012.8581%204.11832C10.7533%206.04622%209.16592%207.82378%208.09585%209.45099C7.02578%2011.0782%206.49074%2012.5374%206.49074%2013.8286C6.49074%2015.7211%207.09211%2017.2908%208.29483%2018.5378C9.49756%2019.7847%2011.0187%2020.4082%2012.8581%2020.4082Z'%20fill='%23333333'/%3e%3c/svg%3e",YA=""+new URL("001-11oj_6dI.jpg",import.meta.url).href,I1=t=>(z1("data-v-f9e99c9c"),t=t(),C1(),t),XA={key:0,class:"container"},QA={class:"productWrapper"},JA=I1(()=>z("div",{class:"productPic"},[z("img",{src:N4,alt:""})],-1)),ZA={class:"productInfo"},eP={class:"name"},tP=I1(()=>z("div",{class:"directions"}," 這款性質溫和的低泡沫潔膚凝露含有多種淨化肌膚的植物萃取物，可清潔肌膚，散發充滿活力的柑橘芳香。 ",-1)),cP={class:"sizenprice"},aP={class:"size-wrapper"},sP={class:"size-list-wrapper"},nP=["id","checked","onChange"],iP=["for"],rP={class:"price"},oP=I1(()=>z("div",{class:"divider"},null,-1)),lP={class:"introduce"},fP=I1(()=>z("div",{class:"title"},"膚質感受",-1)),uP=I1(()=>z("div",{class:"info"},"清潔、清爽",-1)),dP=I1(()=>z("div",{class:"useDivider"},null,-1)),hP=I1(()=>z("div",{class:"title"},"香氛",-1)),pP={class:"info"},mP=I1(()=>z("div",{class:"useDivider"},null,-1)),vP=I1(()=>z("div",{class:"title"},"成份",-1)),gP=I1(()=>z("div",{class:"info"},"苦橙、檸檬皮、葡萄柚皮",-1)),HP=I1(()=>z("div",{class:"useDivider"},null,-1)),zP=K1('<div class="serviceWrapper" data-v-f9e99c9c><div class="section" data-v-f9e99c9c><img src="'+GA+'" alt="" data-v-f9e99c9c><div class="mainTitle" data-v-f9e99c9c>免費禮品包裝</div><p data-v-f9e99c9c>為您提供禮品包裝、品牌專屬棉袋以及個人化禮物小卡服務，是我們的榮幸。</p></div><div class="section" data-v-f9e99c9c><img src="'+jA+'" alt="" data-v-f9e99c9c><div class="mainTitle" data-v-f9e99c9c>諮詢美容顧問</div><p data-v-f9e99c9c>我們受過專業訓練的顧問，非常樂意在線上為您提供個人化的產品建議。</p></div><div class="section" data-v-f9e99c9c><img src="'+KA+'" alt="" data-v-f9e99c9c><div class="mainTitle" data-v-f9e99c9c>下單送試用包</div><p data-v-f9e99c9c>我們很榮幸為所有訂單提供試用包體驗組。</p></div></div><div class="UsageWrapper" data-v-f9e99c9c><div class="productPic" data-v-f9e99c9c><img src="'+YA+'" alt="" data-v-f9e99c9c></div><div class="way" data-v-f9e99c9c><div class="howToUse" data-v-f9e99c9c>使用方式</div><p data-v-f9e99c9c>倒在手中或海綿上。按摩全身濕潤的肌膚，然後徹底洗淨。</p><div class="useDivider" data-v-f9e99c9c></div><div class="title" data-v-f9e99c9c>用量</div><div class="info" data-v-f9e99c9c>倒在手掌上約一個十元硬幣大小</div><div class="divider" data-v-f9e99c9c></div><div class="title" data-v-f9e99c9c>質地</div><div class="info" data-v-f9e99c9c>低泡沫透明凝露</div></div></div>',2),CP={class:"swiper-bottom"},MP=I1(()=>z("div",{class:"recommendArticle"},[z("p",null,"推薦搭配使用")],-1)),VP=["onClick"],_P=["src"],LP={class:"productitle"},bP={class:"subtitle"},wP={key:1,class:"loading-wrapper"},yP={__name:"ProductDetailView",setup(t){const c=EM().params.id,a=dc(),n=z3(a).productList,i=D2(()=>n.value.find(v=>String(v.id)===String(c)));Y1();function r(v){}const o=[Zs,en,tn,cn,Qs,an];function l(v){router.push({name:"productDetailView",params:{id:v.id}})}function f(v){i.value.selectedSizeIndex=v}const u=K4();function d(v){u.addProduct(v)}function h(){window.scrollTo({top:0,behavior:"smooth"})}let m=h2([{title:"甜橙香檸身體凝乳",subtitle:"柑橘、木質、草本芳香",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:N4},{capacity:500,price:1400,imageSrc:q3}],id:1},{title:"芫荽籽身體凝乳",subtitle:"溫暖木質辛香",size:"容量",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:N4},{capacity:500,price:1400,imageSrc:q3}],price:"NT$600起",id:2},{title:"玫瑰身體凝乳",subtitle:"玫瑰花、豆蔻、黑胡椒",size:"容量",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:N4},{capacity:500,price:1400,imageSrc:q3}],id:3},{title:"橙香萬用油",subtitle:"柑橘、清爽幽香",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:ef},{capacity:500,price:1400,imageSrc:q3}],id:4},{title:"晨沐薰衣草面霜",subtitle:"薰衣草、朝露、草本芳香",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:J9},{capacity:500,price:1400,imageSrc:bt}],id:5},{title:"香草森林面霜",subtitle:"香草、木質、草本芳香",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:Z9},{capacity:500,price:1400,imageSrc:bt}],id:6}]);return h(),(v,M)=>{const H=Z3("icon");return J(n)&&J(n).length>0?(e2(),o2("div",XA,[z("div",QA,[JA,z("div",ZA,[z("div",eP,n2(i.value.title),1),tP,z("div",cP,[z("div",aP,[z("div",sP,[(e2(!0),o2(R2,null,m1(i.value.sizeList,(p,g)=>(e2(),o2("div",{class:"size-option",key:g},[z("input",{type:"radio",id:p.id,checked:i.value.selectedSizeIndex===g,onChange:_=>f(g)},null,40,nP),z("label",{for:p.id},n2(p.capacity)+" ml",9,iP)]))),128))])]),z("div",rP,"NT$ "+n2(i.value.sizeList[i.value.selectedSizeIndex].price),1)]),z("div",{class:"addCart",onClick:M[0]||(M[0]=p=>d(i.value))},"加入購物車"),oP,z("div",lP,[fP,uP,dP,hP,z("div",pP,n2(i.value.subtitle),1),mP,vP,gP,HP])])]),zP,z("div",CP,[a2(J(ie),{scrollbar:{hide:!1,draggable:!0,dragSize:500},slidesPerView:4,spaceBetween:0,loop:!1,centeredSlides:!1,modules:o,onSwiper:r},{default:I2(()=>[a2(J(U3),null,{default:I2(()=>[MP]),_:1}),(e2(!0),o2(R2,null,m1(J(m),p=>(e2(),u3(J(U3),{key:p},{default:I2(()=>[z("div",{class:"recommendProductsWrapper",onClick:g=>l(p)},[z("img",{src:p.sizeList[0].imageSrc},null,8,_P),z("div",LP,n2(p.title),1),z("div",bP,n2(p.subtitle),1)],8,VP)]),_:2},1024))),128))]),_:1})])])):(e2(),o2("div",wP,[a2(H,{class:"loading-icon",icon:"circle-notch"})]))}}},SP=t1(yP,[["__scopeId","data-v-f9e99c9c"]]),sn=t=>(z1("data-v-32457fb6"),t=t(),C1(),t),xP={class:"cartshop"},NP={class:"content"},TP=K1('<div class="item" data-v-32457fb6><div class="title" data-v-32457fb6>商品名稱</div><div class="title" data-v-32457fb6>容量</div><div class="title" data-v-32457fb6>單價</div><div class="title" data-v-32457fb6>數量</div><div class="title" data-v-32457fb6>小計</div></div><div class="divider" data-v-32457fb6></div>',2),EP={class:"product-wrapper"},kP={class:"name"},AP={class:"capacity"},PP={class:"unitPrice"},IP={class:"quantity"},RP=["onClick"],OP=["onClick"],DP={class:"delete"},FP=["onClick"],BP={class:"subtotal"},UP=sn(()=>z("div",{class:"divider"},null,-1)),$P={class:"countWrapper"},WP={class:"totalWrapper"},qP=sn(()=>z("div",{class:"total"},"總計",-1)),GP={class:"totalPrice"},jP={class:"buttonWrapper"},KP=sn(()=>z("button",null,"繼續購物",-1)),YP=[KP],XP={class:"checkout"},QP={__name:"CartshopView",setup(t){const e=qe(),c=H3(),a=K4(),n=z3(a).cartList;let i=h2(0);const r=Y1();function o(){r.push("/productList")}function l(){c.showLoginPopup()}function f(){r.push("/OrderPageView")}function u(){i.value=0;for(let v of n.value){let M=v.sizeList[v.selectedSizeIndex].price*v.quantity;i.value=i.value+M}}u();function d(v){v.quantity>1&&(v.quantity--,i.value=0,u())}function h(v){v.quantity=v.quantity+1,i.value=0,u()}function m(v){a.deleteProduct(v),u()}return(v,M)=>(e2(),o2("div",xP,[z("div",NP,[TP,z("div",EP,[(e2(!0),o2(R2,null,m1(J(n),(H,p)=>(e2(),o2("div",{class:"item_detail",key:p},[z("div",kP,n2(H.title),1),z("div",AP,n2(H.sizeList[H.selectedSizeIndex].capacity)+" ml",1),z("div",PP,n2(H.sizeList[H.selectedSizeIndex].price),1),z("div",IP,[z("button",{onClick:g=>d(H)},"-",8,RP),b1(" "+n2(H.quantity)+" ",1),z("button",{onClick:g=>h(H)},"+",8,OP),z("div",DP,[z("button",{onClick:g=>m(H)},"刪除",8,FP)])]),z("div",BP,n2(H.sizeList[H.selectedSizeIndex].price*H.quantity),1)]))),128))]),UP,z("div",$P,[z("div",WP,[qP,z("div",GP,n2(J(i)),1)]),z("div",jP,[z("div",{class:"shopping",onClick:o},YP),z("div",XP,[J(e).isLogin?(e2(),o2("button",{key:0,onClick:f},"結帳")):(e2(),o2("button",{key:1,onClick:l},"請先登入會員"))])])])])]))}},JP=t1(QP,[["__scopeId","data-v-32457fb6"]]),Y4=t=>(z1("data-v-4f93052a"),t=t(),C1(),t),ZP={class:"container"},eI={class:"oderList"},tI=Y4(()=>z("div",{class:"mainTitle"},[z("h2",null,"查看本次訂單")],-1)),cI={class:"orderWrapper"},aI=K1('<div class="divider" data-v-4f93052a></div><div class="listWrapper" data-v-4f93052a><div class="item" data-v-4f93052a>商品名稱</div><div class="item" data-v-4f93052a>容量</div><div class="item" data-v-4f93052a>數量</div><div class="item" data-v-4f93052a>單價</div><div class="item" data-v-4f93052a>小計</div></div><div class="dividerLiter" data-v-4f93052a></div>',3),sI={class:"detail"},nI={class:"detail"},iI={class:"detail"},rI={class:"detail"},oI={class:"detail"},lI=Y4(()=>z("div",{class:"dividerLiter"},null,-1)),fI={class:"totalPrice"},uI=Y4(()=>z("div",{class:"title"},"總計金額:NT$",-1)),dI={class:"number"},hI=Y4(()=>z("div",{class:"divider"},null,-1)),pI=Y4(()=>z("div",{class:"mainTitle"},[z("h2",null,"填寫訂單資訊")],-1)),mI=K1('<div class="infoWrapper" data-v-4f93052a><div class="divider" data-v-4f93052a></div><div class="inputWrapper" data-v-4f93052a><div class="title" data-v-4f93052a>收件人姓名：</div><input type="text" name="username" placeholder="請輸入全名" id="myInput" data-v-4f93052a></div><div class="inputWrapper" data-v-4f93052a><div class="title" data-v-4f93052a>連絡電話：</div><input type="tel" name="phone" placeholder="0912-000-000" id="myInput" data-v-4f93052a></div><div class="inputWrapper" data-v-4f93052a><div class="title" data-v-4f93052a>收件地址：</div><input type="text" name="address" placeholder="請加入郵遞區號" id="myInput" data-v-4f93052a></div></div>',1),vI=Y4(()=>z("div",{class:"reset"},[z("button",{type:"reset"},"清除資料")],-1)),gI=Y4(()=>z("div",{class:"divider"},null,-1)),HI={__name:"OrderPageView",setup(t){const e=K4(),a=z3(e).cartList;let s=h2(0);const n=Y1();function i(){e.submit(),n.push("/FinalpagesView")}window.scrollTo(0,0),window.scrollTo({top:0,behavior:"smooth"});function r(){for(let o of a.value){let l=o.sizeList[o.selectedSizeIndex].price*o.quantity;s.value=s.value+l}}return r(),(o,l)=>(e2(),o2("div",ZP,[z("div",eI,[tI,z("div",cI,[aI,(e2(!0),o2(R2,null,m1(J(a),(f,u)=>(e2(),o2("div",{class:"listWrapper",key:u},[z("div",sI,n2(f.title),1),z("div",nI,n2(f.sizeList[f.selectedSizeIndex].capacity)+" ml",1),z("div",iI,n2(f.quantity),1),z("div",rI,n2(f.sizeList[f.selectedSizeIndex].price),1),z("div",oI,n2(f.sizeList[f.selectedSizeIndex].price*f.quantity),1)]))),128)),lI,z("div",fI,[uI,z("div",dI,n2(J(s)),1)]),hI]),pI,z("form",null,[z("label",{for:"infoForm"},[mI,z("div",{class:"buttonWrapper"},[vI,z("div",{class:"submit"},[z("button",{class:"submitBtn",onClick:i},"確定送出")])]),gI])])])]))}},zI=t1(HI,[["__scopeId","data-v-4f93052a"]]),CI=""+new URL("complete-K7uzOgMP.png",import.meta.url).href,MI={class:"container"},VI={class:"thanksWrapper"},_I=K1('<div class="textWrapper" data-v-64e68ab7><div class="icon" data-v-64e68ab7><img src="'+CI+'" data-v-64e68ab7></div><div class="mainTitle" data-v-64e68ab7>感謝您的購買！</div><div class="subTitle" data-v-64e68ab7>已收到您的訂單，將於三個工作天完成包裹寄送，再次感謝您的訂購，預祝您！有個美好的一天！</div></div>',1),LI={class:"buttonWrapper"},bI={class:"back"},wI={class:"check"},yI={__name:"FinalpagesView",setup(t){return Y1(),(e,c)=>{const a=Z3("RouterLink");return e2(),o2("div",MI,[z("div",VI,[_I,z("div",LI,[z("div",bI,[z("button",null,[a2(a,{to:"/"},{default:I2(()=>[b1("返回首頁")]),_:1})])]),z("div",wI,[z("button",null,[a2(a,{to:"/member"},{default:I2(()=>[b1("查看本次訂單")]),_:1})])])])])])}}},SI=t1(yI,[["__scopeId","data-v-64e68ab7"]]),nn=t=>(z1("data-v-ae8c99a4"),t=t(),C1(),t),xI={class:"member"},NI={class:"order"},TI={class:"order-detail"},EI=nn(()=>z("div",{class:"mainTitle"},[z("h2",null,"本次訂單明細")],-1)),kI={class:"orderWrapper"},AI=K1('<div class="divider" data-v-ae8c99a4></div><div class="listWrapper" data-v-ae8c99a4><div class="item" data-v-ae8c99a4>商品名稱</div><div class="item" data-v-ae8c99a4>容量</div><div class="item" data-v-ae8c99a4>數量</div><div class="item" data-v-ae8c99a4>單價</div><div class="item" data-v-ae8c99a4>小計</div></div><div class="dividerLiter" data-v-ae8c99a4></div>',3),PI={class:"detail"},II={class:"detail"},RI={class:"detail"},OI={class:"detail"},DI={class:"detail"},FI=nn(()=>z("div",{class:"dividerLiter"},null,-1)),BI=nn(()=>z("div",{class:"divider"},null,-1)),UI={__name:"MemberView",setup(t){qe(),H3();const e=K4(),a=z3(e).cartList,s=D9(),n=z3(s);s.getOrder();const i=n.order;let r=h2(0);Y1();function o(){r.value=0;for(let l of a.value){let f=l.sizeList[l.selectedSizeIndex].price*l.quantity;r.value=r.value+f}}return o(),(l,f)=>(e2(),o2("div",xI,[z("div",NI,[z("div",TI,[EI,z("div",kI,[AI,(e2(!0),o2(R2,null,m1(J(i),(u,d)=>(e2(),o2("div",{class:"listWrapper",key:d},[z("div",PI,n2(u.title),1),z("div",II,n2(u.sizeList[u.selectedSizeIndex].capacity)+" ml",1),z("div",RI,n2(u.quantity),1),z("div",OI,n2(u.sizeList[u.selectedSizeIndex].price),1),z("div",DI,n2(u.sizeList[u.selectedSizeIndex].price*u.quantity),1)]))),128)),FI,BI])])])]))}},$I=t1(UI,[["__scopeId","data-v-ae8c99a4"]]),WI=NM({history:jC(),routes:[{path:"/:pathMatch(.*)",redirect:{name:"home"}},{path:"/",redirect:{name:"home"}},{path:"/home",name:"home",component:wk},{path:"/shop",name:"shop",component:eA},{path:"/about",name:"about",component:gA},{path:"/productList",name:"productList",component:DA},{path:"/contact",name:"contact",component:qA},{path:"/productDetailView/:id",name:"productDetailView",component:SP},{path:"/cartshopView",name:"cartshopView",component:JP},{path:"/OrderPageView",name:"OrderPageView",component:zI},{path:"/FinalpagesView",name:"FinalpagesView",component:SI},{path:"/member",name:"member",component:$I}]});function I5(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),c.push.apply(c,a)}return c}function K(t){for(var e=1;e<arguments.length;e++){var c=arguments[e]!=null?arguments[e]:{};e%2?I5(Object(c),!0).forEach(function(a){j2(t,a,c[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):I5(Object(c)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(c,a))})}return t}function wt(t){"@babel/helpers - typeof";return wt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wt(t)}function qI(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function R5(t,e){for(var c=0;c<e.length;c++){var a=e[c];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function GI(t,e,c){return e&&R5(t.prototype,e),c&&R5(t,c),Object.defineProperty(t,"prototype",{writable:!1}),t}function j2(t,e,c){return e in t?Object.defineProperty(t,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[e]=c,t}function rn(t,e){return KI(t)||XI(t,e)||cf(t,e)||JI()}function n0(t){return jI(t)||YI(t)||cf(t)||QI()}function jI(t){if(Array.isArray(t))return ua(t)}function KI(t){if(Array.isArray(t))return t}function YI(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function XI(t,e){var c=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(c!=null){var a=[],s=!0,n=!1,i,r;try{for(c=c.call(t);!(s=(i=c.next()).done)&&(a.push(i.value),!(e&&a.length===e));s=!0);}catch(o){n=!0,r=o}finally{try{!s&&c.return!=null&&c.return()}finally{if(n)throw r}}return a}}function cf(t,e){if(t){if(typeof t=="string")return ua(t,e);var c=Object.prototype.toString.call(t).slice(8,-1);if(c==="Object"&&t.constructor&&(c=t.constructor.name),c==="Map"||c==="Set")return Array.from(t);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return ua(t,e)}}function ua(t,e){(e==null||e>t.length)&&(e=t.length);for(var c=0,a=new Array(e);c<e;c++)a[c]=t[c];return a}function QI(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function JI(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var O5=function(){},on={},af={},sf=null,nf={mark:O5,measure:O5};try{typeof window<"u"&&(on=window),typeof document<"u"&&(af=document),typeof MutationObserver<"u"&&(sf=MutationObserver),typeof performance<"u"&&(nf=performance)}catch{}var ZI=on.navigator||{},D5=ZI.userAgent,F5=D5===void 0?"":D5,a4=on,A2=af,B5=sf,b0=nf;a4.document;var x3=!!A2.documentElement&&!!A2.head&&typeof A2.addEventListener=="function"&&typeof A2.createElement=="function",rf=~F5.indexOf("MSIE")||~F5.indexOf("Trident/"),w0,y0,S0,x0,N0,_3="___FONT_AWESOME___",da=16,of="fa",lf="svg-inline--fa",$4="data-fa-i2svg",ha="data-fa-pseudo-element",eR="data-fa-pseudo-element-pending",ln="data-prefix",fn="data-icon",U5="fontawesome-i2svg",tR="async",cR=["HTML","HEAD","STYLE","SCRIPT"],ff=function(){try{return!0}catch{return!1}}(),k2="classic",O2="sharp",un=[k2,O2];function i0(t){return new Proxy(t,{get:function(c,a){return a in c?c[a]:c[k2]}})}var F6=i0((w0={},j2(w0,k2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),j2(w0,O2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),w0)),B6=i0((y0={},j2(y0,k2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),j2(y0,O2,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),y0)),U6=i0((S0={},j2(S0,k2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),j2(S0,O2,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),S0)),aR=i0((x0={},j2(x0,k2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),j2(x0,O2,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),x0)),sR=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,uf="fa-layers-text",nR=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,iR=i0((N0={},j2(N0,k2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),j2(N0,O2,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),N0)),df=[1,2,3,4,5,6,7,8,9,10],rR=df.concat([11,12,13,14,15,16,17,18,19,20]),oR=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],V4={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$6=new Set;Object.keys(B6[k2]).map($6.add.bind($6));Object.keys(B6[O2]).map($6.add.bind($6));var lR=[].concat(un,n0($6),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",V4.GROUP,V4.SWAP_OPACITY,V4.PRIMARY,V4.SECONDARY]).concat(df.map(function(t){return"".concat(t,"x")})).concat(rR.map(function(t){return"w-".concat(t)})),z6=a4.FontAwesomeConfig||{};function fR(t){var e=A2.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function uR(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(A2&&typeof A2.querySelector=="function"){var dR=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];dR.forEach(function(t){var e=rn(t,2),c=e[0],a=e[1],s=uR(fR(c));s!=null&&(z6[a]=s)})}var hf={styleDefault:"solid",familyDefault:"classic",cssPrefix:of,replacementClass:lf,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};z6.familyPrefix&&(z6.cssPrefix=z6.familyPrefix);var ke=K(K({},hf),z6);ke.autoReplaceSvg||(ke.observeMutations=!1);var Q={};Object.keys(hf).forEach(function(t){Object.defineProperty(Q,t,{enumerable:!0,set:function(c){ke[t]=c,C6.forEach(function(a){return a(Q)})},get:function(){return ke[t]}})});Object.defineProperty(Q,"familyPrefix",{enumerable:!0,set:function(e){ke.cssPrefix=e,C6.forEach(function(c){return c(Q)})},get:function(){return ke.cssPrefix}});a4.FontAwesomeConfig=Q;var C6=[];function hR(t){return C6.push(t),function(){C6.splice(C6.indexOf(t),1)}}var k3=da,e3={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function pR(t){if(!(!t||!x3)){var e=A2.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var c=A2.head.childNodes,a=null,s=c.length-1;s>-1;s--){var n=c[s],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=n)}return A2.head.insertBefore(e,a),t}}var mR="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function W6(){for(var t=12,e="";t-- >0;)e+=mR[Math.random()*62|0];return e}function Ge(t){for(var e=[],c=(t||[]).length>>>0;c--;)e[c]=t[c];return e}function dn(t){return t.classList?Ge(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function pf(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function vR(t){return Object.keys(t||{}).reduce(function(e,c){return e+"".concat(c,'="').concat(pf(t[c]),'" ')},"").trim()}function pc(t){return Object.keys(t||{}).reduce(function(e,c){return e+"".concat(c,": ").concat(t[c].trim(),";")},"")}function hn(t){return t.size!==e3.size||t.x!==e3.x||t.y!==e3.y||t.rotate!==e3.rotate||t.flipX||t.flipY}function gR(t){var e=t.transform,c=t.containerWidth,a=t.iconWidth,s={transform:"translate(".concat(c/2," 256)")},n="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),r="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(n," ").concat(i," ").concat(r)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:s,inner:o,path:l}}function HR(t){var e=t.transform,c=t.width,a=c===void 0?da:c,s=t.height,n=s===void 0?da:s,i=t.startCentered,r=i===void 0?!1:i,o="";return r&&rf?o+="translate(".concat(e.x/k3-a/2,"em, ").concat(e.y/k3-n/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/k3,"em), calc(-50% + ").concat(e.y/k3,"em)) "):o+="translate(".concat(e.x/k3,"em, ").concat(e.y/k3,"em) "),o+="scale(".concat(e.size/k3*(e.flipX?-1:1),", ").concat(e.size/k3*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var zR=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function mf(){var t=of,e=lf,c=Q.cssPrefix,a=Q.replacementClass,s=zR;if(c!==t||a!==e){var n=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),r=new RegExp("\\.".concat(e),"g");s=s.replace(n,".".concat(c,"-")).replace(i,"--".concat(c,"-")).replace(r,".".concat(a))}return s}var $5=!1;function d8(){Q.autoAddCss&&!$5&&(pR(mf()),$5=!0)}var CR={mixout:function(){return{dom:{css:mf,insertCss:d8}}},hooks:function(){return{beforeDOMElementCreation:function(){d8()},beforeI2svg:function(){d8()}}}},L3=a4||{};L3[_3]||(L3[_3]={});L3[_3].styles||(L3[_3].styles={});L3[_3].hooks||(L3[_3].hooks={});L3[_3].shims||(L3[_3].shims=[]);var $1=L3[_3],vf=[],MR=function t(){A2.removeEventListener("DOMContentLoaded",t),yt=1,vf.map(function(e){return e()})},yt=!1;x3&&(yt=(A2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(A2.readyState),yt||A2.addEventListener("DOMContentLoaded",MR));function VR(t){x3&&(yt?setTimeout(t,0):vf.push(t))}function r0(t){var e=t.tag,c=t.attributes,a=c===void 0?{}:c,s=t.children,n=s===void 0?[]:s;return typeof t=="string"?pf(t):"<".concat(e," ").concat(vR(a),">").concat(n.map(r0).join(""),"</").concat(e,">")}function W5(t,e,c){if(t&&t[e]&&t[e][c])return{prefix:e,iconName:c,icon:t[e][c]}}var _R=function(e,c){return function(a,s,n,i){return e.call(c,a,s,n,i)}},h8=function(e,c,a,s){var n=Object.keys(e),i=n.length,r=s!==void 0?_R(c,s):c,o,l,f;for(a===void 0?(o=1,f=e[n[0]]):(o=0,f=a);o<i;o++)l=n[o],f=r(f,e[l],l,e);return f};function LR(t){for(var e=[],c=0,a=t.length;c<a;){var s=t.charCodeAt(c++);if(s>=55296&&s<=56319&&c<a){var n=t.charCodeAt(c++);(n&64512)==56320?e.push(((s&1023)<<10)+(n&1023)+65536):(e.push(s),c--)}else e.push(s)}return e}function pa(t){var e=LR(t);return e.length===1?e[0].toString(16):null}function bR(t,e){var c=t.length,a=t.charCodeAt(e),s;return a>=55296&&a<=56319&&c>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(a-55296)*1024+s-56320+65536:a}function q5(t){return Object.keys(t).reduce(function(e,c){var a=t[c],s=!!a.icon;return s?e[a.iconName]=a.icon:e[c]=a,e},{})}function ma(t,e){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=c.skipHooks,s=a===void 0?!1:a,n=q5(e);typeof $1.hooks.addPack=="function"&&!s?$1.hooks.addPack(t,q5(e)):$1.styles[t]=K(K({},$1.styles[t]||{}),n),t==="fas"&&ma("fa",e)}var T0,E0,k0,re=$1.styles,wR=$1.shims,yR=(T0={},j2(T0,k2,Object.values(U6[k2])),j2(T0,O2,Object.values(U6[O2])),T0),pn=null,gf={},Hf={},zf={},Cf={},Mf={},SR=(E0={},j2(E0,k2,Object.keys(F6[k2])),j2(E0,O2,Object.keys(F6[O2])),E0);function xR(t){return~lR.indexOf(t)}function NR(t,e){var c=e.split("-"),a=c[0],s=c.slice(1).join("-");return a===t&&s!==""&&!xR(s)?s:null}var Vf=function(){var e=function(n){return h8(re,function(i,r,o){return i[o]=h8(r,n,{}),i},{})};gf=e(function(s,n,i){if(n[3]&&(s[n[3]]=i),n[2]){var r=n[2].filter(function(o){return typeof o=="number"});r.forEach(function(o){s[o.toString(16)]=i})}return s}),Hf=e(function(s,n,i){if(s[i]=i,n[2]){var r=n[2].filter(function(o){return typeof o=="string"});r.forEach(function(o){s[o]=i})}return s}),Mf=e(function(s,n,i){var r=n[2];return s[i]=i,r.forEach(function(o){s[o]=i}),s});var c="far"in re||Q.autoFetchSvg,a=h8(wR,function(s,n){var i=n[0],r=n[1],o=n[2];return r==="far"&&!c&&(r="fas"),typeof i=="string"&&(s.names[i]={prefix:r,iconName:o}),typeof i=="number"&&(s.unicodes[i.toString(16)]={prefix:r,iconName:o}),s},{names:{},unicodes:{}});zf=a.names,Cf=a.unicodes,pn=mc(Q.styleDefault,{family:Q.familyDefault})};hR(function(t){pn=mc(t.styleDefault,{family:Q.familyDefault})});Vf();function mn(t,e){return(gf[t]||{})[e]}function TR(t,e){return(Hf[t]||{})[e]}function _4(t,e){return(Mf[t]||{})[e]}function _f(t){return zf[t]||{prefix:null,iconName:null}}function ER(t){var e=Cf[t],c=mn("fas",t);return e||(c?{prefix:"fas",iconName:c}:null)||{prefix:null,iconName:null}}function s4(){return pn}var vn=function(){return{prefix:null,iconName:null,rest:[]}};function mc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=e.family,a=c===void 0?k2:c,s=F6[a][t],n=B6[a][t]||B6[a][s],i=t in $1.styles?t:null;return n||i||null}var G5=(k0={},j2(k0,k2,Object.keys(U6[k2])),j2(k0,O2,Object.keys(U6[O2])),k0);function vc(t){var e,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.skipLookups,s=a===void 0?!1:a,n=(e={},j2(e,k2,"".concat(Q.cssPrefix,"-").concat(k2)),j2(e,O2,"".concat(Q.cssPrefix,"-").concat(O2)),e),i=null,r=k2;(t.includes(n[k2])||t.some(function(l){return G5[k2].includes(l)}))&&(r=k2),(t.includes(n[O2])||t.some(function(l){return G5[O2].includes(l)}))&&(r=O2);var o=t.reduce(function(l,f){var u=NR(Q.cssPrefix,f);if(re[f]?(f=yR[r].includes(f)?aR[r][f]:f,i=f,l.prefix=f):SR[r].indexOf(f)>-1?(i=f,l.prefix=mc(f,{family:r})):u?l.iconName=u:f!==Q.replacementClass&&f!==n[k2]&&f!==n[O2]&&l.rest.push(f),!s&&l.prefix&&l.iconName){var d=i==="fa"?_f(l.iconName):{},h=_4(l.prefix,l.iconName);d.prefix&&(i=null),l.iconName=d.iconName||h||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!re.far&&re.fas&&!Q.autoFetchSvg&&(l.prefix="fas")}return l},vn());return(t.includes("fa-brands")||t.includes("fab"))&&(o.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(o.prefix="fad"),!o.prefix&&r===O2&&(re.fass||Q.autoFetchSvg)&&(o.prefix="fass",o.iconName=_4(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||i==="fa")&&(o.prefix=s4()||"fas"),o}var kR=function(){function t(){qI(this,t),this.definitions={}}return GI(t,[{key:"add",value:function(){for(var c=this,a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];var i=s.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(r){c.definitions[r]=K(K({},c.definitions[r]||{}),i[r]),ma(r,i[r]);var o=U6[k2][r];o&&ma(o,i[r]),Vf()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(c,a){var s=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(s).map(function(n){var i=s[n],r=i.prefix,o=i.iconName,l=i.icon,f=l[2];c[r]||(c[r]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(c[r][u]=l)}),c[r][o]=l}),c}}]),t}(),j5=[],oe={},Me={},AR=Object.keys(Me);function PR(t,e){var c=e.mixoutsTo;return j5=t,oe={},Object.keys(Me).forEach(function(a){AR.indexOf(a)===-1&&delete Me[a]}),j5.forEach(function(a){var s=a.mixout?a.mixout():{};if(Object.keys(s).forEach(function(i){typeof s[i]=="function"&&(c[i]=s[i]),wt(s[i])==="object"&&Object.keys(s[i]).forEach(function(r){c[i]||(c[i]={}),c[i][r]=s[i][r]})}),a.hooks){var n=a.hooks();Object.keys(n).forEach(function(i){oe[i]||(oe[i]=[]),oe[i].push(n[i])})}a.provides&&a.provides(Me)}),c}function va(t,e){for(var c=arguments.length,a=new Array(c>2?c-2:0),s=2;s<c;s++)a[s-2]=arguments[s];var n=oe[t]||[];return n.forEach(function(i){e=i.apply(null,[e].concat(a))}),e}function W4(t){for(var e=arguments.length,c=new Array(e>1?e-1:0),a=1;a<e;a++)c[a-1]=arguments[a];var s=oe[t]||[];s.forEach(function(n){n.apply(null,c)})}function b3(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Me[t]?Me[t].apply(null,e):void 0}function ga(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,c=t.prefix||s4();if(e)return e=_4(c,e)||e,W5(Lf.definitions,c,e)||W5($1.styles,c,e)}var Lf=new kR,IR=function(){Q.autoReplaceSvg=!1,Q.observeMutations=!1,W4("noAuto")},RR={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return x3?(W4("beforeI2svg",e),b3("pseudoElements2svg",e),b3("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=e.autoReplaceSvgRoot;Q.autoReplaceSvg===!1&&(Q.autoReplaceSvg=!0),Q.observeMutations=!0,VR(function(){DR({autoReplaceSvgRoot:c}),W4("watch",e)})}},OR={icon:function(e){if(e===null)return null;if(wt(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:_4(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var c=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=mc(e[0]);return{prefix:a,iconName:_4(a,c)||c}}if(typeof e=="string"&&(e.indexOf("".concat(Q.cssPrefix,"-"))>-1||e.match(sR))){var s=vc(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||s4(),iconName:_4(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){var n=s4();return{prefix:n,iconName:_4(n,e)||e}}}},S1={noAuto:IR,config:Q,dom:RR,parse:OR,library:Lf,findIconDefinition:ga,toHtml:r0},DR=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=e.autoReplaceSvgRoot,a=c===void 0?A2:c;(Object.keys($1.styles).length>0||Q.autoFetchSvg)&&x3&&Q.autoReplaceSvg&&S1.dom.i2svg({node:a})};function gc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return r0(a)})}}),Object.defineProperty(t,"node",{get:function(){if(x3){var a=A2.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function FR(t){var e=t.children,c=t.main,a=t.mask,s=t.attributes,n=t.styles,i=t.transform;if(hn(i)&&c.found&&!a.found){var r=c.width,o=c.height,l={x:r/o/2,y:.5};s.style=pc(K(K({},n),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function BR(t){var e=t.prefix,c=t.iconName,a=t.children,s=t.attributes,n=t.symbol,i=n===!0?"".concat(e,"-").concat(Q.cssPrefix,"-").concat(c):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:K(K({},s),{},{id:i}),children:a}]}]}function gn(t){var e=t.icons,c=e.main,a=e.mask,s=t.prefix,n=t.iconName,i=t.transform,r=t.symbol,o=t.title,l=t.maskId,f=t.titleId,u=t.extra,d=t.watchable,h=d===void 0?!1:d,m=a.found?a:c,v=m.width,M=m.height,H=s==="fak",p=[Q.replacementClass,n?"".concat(Q.cssPrefix,"-").concat(n):""].filter(function(w){return u.classes.indexOf(w)===-1}).filter(function(w){return w!==""||!!w}).concat(u.classes).join(" "),g={children:[],attributes:K(K({},u.attributes),{},{"data-prefix":s,"data-icon":n,class:p,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(M)})},_=H&&!~u.classes.indexOf("fa-fw")?{width:"".concat(v/M*16*.0625,"em")}:{};h&&(g.attributes[$4]=""),o&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(f||W6())},children:[o]}),delete g.attributes.title);var b=K(K({},g),{},{prefix:s,iconName:n,main:c,mask:a,maskId:l,transform:i,symbol:r,styles:K(K({},_),u.styles)}),A=a.found&&c.found?b3("generateAbstractMask",b)||{children:[],attributes:{}}:b3("generateAbstractIcon",b)||{children:[],attributes:{}},G=A.children,k=A.attributes;return b.children=G,b.attributes=k,r?BR(b):FR(b)}function K5(t){var e=t.content,c=t.width,a=t.height,s=t.transform,n=t.title,i=t.extra,r=t.watchable,o=r===void 0?!1:r,l=K(K(K({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")});o&&(l[$4]="");var f=K({},i.styles);hn(s)&&(f.transform=HR({transform:s,startCentered:!0,width:c,height:a}),f["-webkit-transform"]=f.transform);var u=pc(f);u.length>0&&(l.style=u);var d=[];return d.push({tag:"span",attributes:l,children:[e]}),n&&d.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),d}function UR(t){var e=t.content,c=t.title,a=t.extra,s=K(K(K({},a.attributes),c?{title:c}:{}),{},{class:a.classes.join(" ")}),n=pc(a.styles);n.length>0&&(s.style=n);var i=[];return i.push({tag:"span",attributes:s,children:[e]}),c&&i.push({tag:"span",attributes:{class:"sr-only"},children:[c]}),i}var p8=$1.styles;function Ha(t){var e=t[0],c=t[1],a=t.slice(4),s=rn(a,1),n=s[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(Q.cssPrefix,"-").concat(V4.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Q.cssPrefix,"-").concat(V4.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(Q.cssPrefix,"-").concat(V4.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:e,height:c,icon:i}}var $R={found:!1,width:512,height:512};function WR(t,e){!ff&&!Q.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function za(t,e){var c=e;return e==="fa"&&Q.styleDefault!==null&&(e=s4()),new Promise(function(a,s){if(b3("missingIconAbstract"),c==="fa"){var n=_f(t)||{};t=n.iconName||t,e=n.prefix||e}if(t&&e&&p8[e]&&p8[e][t]){var i=p8[e][t];return a(Ha(i))}WR(t,e),a(K(K({},$R),{},{icon:Q.showMissingIcons&&t?b3("missingIconAbstract")||{}:{}}))})}var Y5=function(){},Ca=Q.measurePerformance&&b0&&b0.mark&&b0.measure?b0:{mark:Y5,measure:Y5},o6='FA "6.5.1"',qR=function(e){return Ca.mark("".concat(o6," ").concat(e," begins")),function(){return bf(e)}},bf=function(e){Ca.mark("".concat(o6," ").concat(e," ends")),Ca.measure("".concat(o6," ").concat(e),"".concat(o6," ").concat(e," begins"),"".concat(o6," ").concat(e," ends"))},Hn={begin:qR,end:bf},W0=function(){};function X5(t){var e=t.getAttribute?t.getAttribute($4):null;return typeof e=="string"}function GR(t){var e=t.getAttribute?t.getAttribute(ln):null,c=t.getAttribute?t.getAttribute(fn):null;return e&&c}function jR(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Q.replacementClass)}function KR(){if(Q.autoReplaceSvg===!0)return q0.replace;var t=q0[Q.autoReplaceSvg];return t||q0.replace}function YR(t){return A2.createElementNS("http://www.w3.org/2000/svg",t)}function XR(t){return A2.createElement(t)}function wf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=e.ceFn,a=c===void 0?t.tag==="svg"?YR:XR:c;if(typeof t=="string")return A2.createTextNode(t);var s=a(t.tag);Object.keys(t.attributes||[]).forEach(function(i){s.setAttribute(i,t.attributes[i])});var n=t.children||[];return n.forEach(function(i){s.appendChild(wf(i,{ceFn:a}))}),s}function QR(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var q0={replace:function(e){var c=e[0];if(c.parentNode)if(e[1].forEach(function(s){c.parentNode.insertBefore(wf(s),c)}),c.getAttribute($4)===null&&Q.keepOriginalSource){var a=A2.createComment(QR(c));c.parentNode.replaceChild(a,c)}else c.remove()},nest:function(e){var c=e[0],a=e[1];if(~dn(c).indexOf(Q.replacementClass))return q0.replace(e);var s=new RegExp("".concat(Q.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var n=a[0].attributes.class.split(" ").reduce(function(r,o){return o===Q.replacementClass||o.match(s)?r.toSvg.push(o):r.toNode.push(o),r},{toNode:[],toSvg:[]});a[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?c.removeAttribute("class"):c.setAttribute("class",n.toNode.join(" "))}var i=a.map(function(r){return r0(r)}).join(`
`);c.setAttribute($4,""),c.innerHTML=i}};function Q5(t){t()}function yf(t,e){var c=typeof e=="function"?e:W0;if(t.length===0)c();else{var a=Q5;Q.mutateApproach===tR&&(a=a4.requestAnimationFrame||Q5),a(function(){var s=KR(),n=Hn.begin("mutate");t.map(s),n(),c()})}}var zn=!1;function Sf(){zn=!0}function Ma(){zn=!1}var St=null;function J5(t){if(B5&&Q.observeMutations){var e=t.treeCallback,c=e===void 0?W0:e,a=t.nodeCallback,s=a===void 0?W0:a,n=t.pseudoElementsCallback,i=n===void 0?W0:n,r=t.observeMutationsRoot,o=r===void 0?A2:r;St=new B5(function(l){if(!zn){var f=s4();Ge(l).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!X5(u.addedNodes[0])&&(Q.searchPseudoElements&&i(u.target),c(u.target)),u.type==="attributes"&&u.target.parentNode&&Q.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&X5(u.target)&&~oR.indexOf(u.attributeName))if(u.attributeName==="class"&&GR(u.target)){var d=vc(dn(u.target)),h=d.prefix,m=d.iconName;u.target.setAttribute(ln,h||f),m&&u.target.setAttribute(fn,m)}else jR(u.target)&&s(u.target)})}}),x3&&St.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function JR(){St&&St.disconnect()}function ZR(t){var e=t.getAttribute("style"),c=[];return e&&(c=e.split(";").reduce(function(a,s){var n=s.split(":"),i=n[0],r=n.slice(1);return i&&r.length>0&&(a[i]=r.join(":").trim()),a},{})),c}function eO(t){var e=t.getAttribute("data-prefix"),c=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",s=vc(dn(t));return s.prefix||(s.prefix=s4()),e&&c&&(s.prefix=e,s.iconName=c),s.iconName&&s.prefix||(s.prefix&&a.length>0&&(s.iconName=TR(s.prefix,t.innerText)||mn(s.prefix,pa(t.innerText))),!s.iconName&&Q.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function tO(t){var e=Ge(t.attributes).reduce(function(s,n){return s.name!=="class"&&s.name!=="style"&&(s[n.name]=n.value),s},{}),c=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return Q.autoA11y&&(c?e["aria-labelledby"]="".concat(Q.replacementClass,"-title-").concat(a||W6()):(e["aria-hidden"]="true",e.focusable="false")),e}function cO(){return{iconName:null,title:null,titleId:null,prefix:null,transform:e3,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Z5(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},c=eO(t),a=c.iconName,s=c.prefix,n=c.rest,i=tO(t),r=va("parseNodeAttributes",{},t),o=e.styleParser?ZR(t):[];return K({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:e3,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:o,attributes:i}},r)}var aO=$1.styles;function xf(t){var e=Q.autoReplaceSvg==="nest"?Z5(t,{styleParser:!1}):Z5(t);return~e.extra.classes.indexOf(uf)?b3("generateLayersText",t,e):b3("generateSvgReplacementMutation",t,e)}var n4=new Set;un.map(function(t){n4.add("fa-".concat(t))});Object.keys(F6[k2]).map(n4.add.bind(n4));Object.keys(F6[O2]).map(n4.add.bind(n4));n4=n0(n4);function e7(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!x3)return Promise.resolve();var c=A2.documentElement.classList,a=function(u){return c.add("".concat(U5,"-").concat(u))},s=function(u){return c.remove("".concat(U5,"-").concat(u))},n=Q.autoFetchSvg?n4:un.map(function(f){return"fa-".concat(f)}).concat(Object.keys(aO));n.includes("fa")||n.push("fa");var i=[".".concat(uf,":not([").concat($4,"])")].concat(n.map(function(f){return".".concat(f,":not([").concat($4,"])")})).join(", ");if(i.length===0)return Promise.resolve();var r=[];try{r=Ge(t.querySelectorAll(i))}catch{}if(r.length>0)a("pending"),s("complete");else return Promise.resolve();var o=Hn.begin("onTree"),l=r.reduce(function(f,u){try{var d=xf(u);d&&f.push(d)}catch(h){ff||h.name==="MissingIcon"&&console.error(h)}return f},[]);return new Promise(function(f,u){Promise.all(l).then(function(d){yf(d,function(){a("active"),a("complete"),s("pending"),typeof e=="function"&&e(),o(),f()})}).catch(function(d){o(),u(d)})})}function sO(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;xf(t).then(function(c){c&&yf([c],e)})}function nO(t){return function(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:ga(e||{}),s=c.mask;return s&&(s=(s||{}).icon?s:ga(s||{})),t(a,K(K({},c),{},{mask:s}))}}var iO=function(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.transform,s=a===void 0?e3:a,n=c.symbol,i=n===void 0?!1:n,r=c.mask,o=r===void 0?null:r,l=c.maskId,f=l===void 0?null:l,u=c.title,d=u===void 0?null:u,h=c.titleId,m=h===void 0?null:h,v=c.classes,M=v===void 0?[]:v,H=c.attributes,p=H===void 0?{}:H,g=c.styles,_=g===void 0?{}:g;if(e){var b=e.prefix,A=e.iconName,G=e.icon;return gc(K({type:"icon"},e),function(){return W4("beforeDOMElementCreation",{iconDefinition:e,params:c}),Q.autoA11y&&(d?p["aria-labelledby"]="".concat(Q.replacementClass,"-title-").concat(m||W6()):(p["aria-hidden"]="true",p.focusable="false")),gn({icons:{main:Ha(G),mask:o?Ha(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:A,transform:K(K({},e3),s),symbol:i,title:d,maskId:f,titleId:m,extra:{attributes:p,styles:_,classes:M}})})}},rO={mixout:function(){return{icon:nO(iO)}},hooks:function(){return{mutationObserverCallbacks:function(c){return c.treeCallback=e7,c.nodeCallback=sO,c}}},provides:function(e){e.i2svg=function(c){var a=c.node,s=a===void 0?A2:a,n=c.callback,i=n===void 0?function(){}:n;return e7(s,i)},e.generateSvgReplacementMutation=function(c,a){var s=a.iconName,n=a.title,i=a.titleId,r=a.prefix,o=a.transform,l=a.symbol,f=a.mask,u=a.maskId,d=a.extra;return new Promise(function(h,m){Promise.all([za(s,r),f.iconName?za(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var M=rn(v,2),H=M[0],p=M[1];h([c,gn({icons:{main:H,mask:p},prefix:r,iconName:s,transform:o,symbol:l,maskId:u,title:n,titleId:i,extra:d,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(c){var a=c.children,s=c.attributes,n=c.main,i=c.transform,r=c.styles,o=pc(r);o.length>0&&(s.style=o);var l;return hn(i)&&(l=b3("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),a.push(l||n.icon),{children:a,attributes:s}}}},oO={mixout:function(){return{layer:function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.classes,n=s===void 0?[]:s;return gc({type:"layer"},function(){W4("beforeDOMElementCreation",{assembler:c,params:a});var i=[];return c(function(r){Array.isArray(r)?r.map(function(o){i=i.concat(o.abstract)}):i=i.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(Q.cssPrefix,"-layers")].concat(n0(n)).join(" ")},children:i}]})}}}},lO={mixout:function(){return{counter:function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.title,n=s===void 0?null:s,i=a.classes,r=i===void 0?[]:i,o=a.attributes,l=o===void 0?{}:o,f=a.styles,u=f===void 0?{}:f;return gc({type:"counter",content:c},function(){return W4("beforeDOMElementCreation",{content:c,params:a}),UR({content:c.toString(),title:n,extra:{attributes:l,styles:u,classes:["".concat(Q.cssPrefix,"-layers-counter")].concat(n0(r))}})})}}}},fO={mixout:function(){return{text:function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.transform,n=s===void 0?e3:s,i=a.title,r=i===void 0?null:i,o=a.classes,l=o===void 0?[]:o,f=a.attributes,u=f===void 0?{}:f,d=a.styles,h=d===void 0?{}:d;return gc({type:"text",content:c},function(){return W4("beforeDOMElementCreation",{content:c,params:a}),K5({content:c,transform:K(K({},e3),n),title:r,extra:{attributes:u,styles:h,classes:["".concat(Q.cssPrefix,"-layers-text")].concat(n0(l))}})})}}},provides:function(e){e.generateLayersText=function(c,a){var s=a.title,n=a.transform,i=a.extra,r=null,o=null;if(rf){var l=parseInt(getComputedStyle(c).fontSize,10),f=c.getBoundingClientRect();r=f.width/l,o=f.height/l}return Q.autoA11y&&!s&&(i.attributes["aria-hidden"]="true"),Promise.resolve([c,K5({content:c.innerHTML,width:r,height:o,transform:n,title:s,extra:i,watchable:!0})])}}},uO=new RegExp('"',"ug"),t7=[1105920,1112319];function dO(t){var e=t.replace(uO,""),c=bR(e,0),a=c>=t7[0]&&c<=t7[1],s=e.length===2?e[0]===e[1]:!1;return{value:pa(s?e[0]:e),isSecondary:a||s}}function c7(t,e){var c="".concat(eR).concat(e.replace(":","-"));return new Promise(function(a,s){if(t.getAttribute(c)!==null)return a();var n=Ge(t.children),i=n.filter(function(G){return G.getAttribute(ha)===e})[0],r=a4.getComputedStyle(t,e),o=r.getPropertyValue("font-family").match(nR),l=r.getPropertyValue("font-weight"),f=r.getPropertyValue("content");if(i&&!o)return t.removeChild(i),a();if(o&&f!=="none"&&f!==""){var u=r.getPropertyValue("content"),d=~["Sharp"].indexOf(o[2])?O2:k2,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?B6[d][o[2].toLowerCase()]:iR[d][l],m=dO(u),v=m.value,M=m.isSecondary,H=o[0].startsWith("FontAwesome"),p=mn(h,v),g=p;if(H){var _=ER(v);_.iconName&&_.prefix&&(p=_.iconName,h=_.prefix)}if(p&&!M&&(!i||i.getAttribute(ln)!==h||i.getAttribute(fn)!==g)){t.setAttribute(c,g),i&&t.removeChild(i);var b=cO(),A=b.extra;A.attributes[ha]=e,za(p,h).then(function(G){var k=gn(K(K({},b),{},{icons:{main:G,mask:vn()},prefix:h,iconName:g,extra:A,watchable:!0})),w=A2.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(w,t.firstChild):t.appendChild(w),w.outerHTML=k.map(function(y){return r0(y)}).join(`