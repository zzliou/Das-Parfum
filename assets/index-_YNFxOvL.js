(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function c(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=c(s);fetch(s.href,n)}})();function _a(t,e){const c=Object.create(null),a=t.split(",");for(let s=0;s<a.length;s++)c[a[s]]=!0;return e?s=>!!c[s.toLowerCase()]:s=>!!c[s]}const E2={},ue=[],s3=()=>{},oH=()=>!1,Tt=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),La=t=>t.startsWith("onUpdate:"),s1=Object.assign,ba=(t,e)=>{const c=t.indexOf(e);c>-1&&t.splice(c,1)},lH=Object.prototype.hasOwnProperty,C2=(t,e)=>lH.call(t,e),r2=Array.isArray,de=t=>Et(t)==="[object Map]",u7=t=>Et(t)==="[object Set]",p2=t=>typeof t=="function",G2=t=>typeof t=="string",Pe=t=>typeof t=="symbol",I2=t=>t!==null&&typeof t=="object",d7=t=>(I2(t)||p2(t))&&p2(t.then)&&p2(t.catch),h7=Object.prototype.toString,Et=t=>h7.call(t),fH=t=>Et(t).slice(8,-1),p7=t=>Et(t)==="[object Object]",wa=t=>G2(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,P0=_a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),kt=t=>{const e=Object.create(null);return c=>e[c]||(e[c]=t(c))},uH=/-(\w)/g,o3=kt(t=>t.replace(uH,(e,c)=>c?c.toUpperCase():"")),dH=/\B([A-Z])/g,Ie=kt(t=>t.replace(dH,"-$1").toLowerCase()),At=kt(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ac=kt(t=>t?`on${At(t)}`:""),P4=(t,e)=>!Object.is(t,e),I0=(t,e)=>{for(let c=0;c<t.length;c++)t[c](e)},j0=(t,e,c)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:c})},g8=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let gi;const H8=()=>gi||(gi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ya(t){if(r2(t)){const e={};for(let c=0;c<t.length;c++){const a=t[c],s=G2(a)?vH(a):ya(a);if(s)for(const n in s)e[n]=s[n]}return e}else if(G2(t)||I2(t))return t}const hH=/;(?![^(]*\))/g,pH=/:([^]+)/,mH=/\/\*[^]*?\*\//g;function vH(t){const e={};return t.replace(mH,"").split(hH).forEach(c=>{if(c){const a=c.split(pH);a.length>1&&(e[a[0].trim()]=a[1].trim())}}),e}function G6(t){let e="";if(G2(t))e=t;else if(r2(t))for(let c=0;c<t.length;c++){const a=G6(t[c]);a&&(e+=a+" ")}else if(I2(t))for(const c in t)t[c]&&(e+=c+" ");return e.trim()}const gH="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",HH=_a(gH);function m7(t){return!!t||t===""}const n2=t=>G2(t)?t:t==null?"":r2(t)||I2(t)&&(t.toString===h7||!p2(t.toString))?JSON.stringify(t,v7,2):String(t),v7=(t,e)=>e&&e.__v_isRef?v7(t,e.value):de(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((c,[a,s],n)=>(c[Pc(a,n)+" =>"]=s,c),{})}:u7(e)?{[`Set(${e.size})`]:[...e.values()].map(c=>Pc(c))}:Pe(e)?Pc(e):I2(e)&&!r2(e)&&!p7(e)?String(e):e,Pc=(t,e="")=>{var c;return Pe(t)?`Symbol(${(c=t.description)!=null?c:e})`:t};let _1;class g7{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_1,!e&&_1&&(this.index=(_1.scopes||(_1.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const c=_1;try{return _1=this,e()}finally{_1=c}}}on(){_1=this}off(){_1=this.parent}stop(e){if(this._active){let c,a;for(c=0,a=this.effects.length;c<a;c++)this.effects[c].stop();for(c=0,a=this.cleanups.length;c<a;c++)this.cleanups[c]();if(this.scopes)for(c=0,a=this.scopes.length;c<a;c++)this.scopes[c].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function H7(t){return new g7(t)}function zH(t,e=_1){e&&e.active&&e.effects.push(t)}function z7(){return _1}function CH(t){_1&&_1.cleanups.push(t)}const Sa=t=>{const e=new Set(t);return e.w=0,e.n=0,e},C7=t=>(t.w&c4)>0,M7=t=>(t.n&c4)>0,MH=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=c4},VH=t=>{const{deps:e}=t;if(e.length){let c=0;for(let a=0;a<e.length;a++){const s=e[a];C7(s)&&!M7(s)?s.delete(t):e[c++]=s,s.w&=~c4,s.n&=~c4}e.length=c}},K0=new WeakMap;let s6=0,c4=1;const z8=30;let D1;const S4=Symbol(""),C8=Symbol("");class xa{constructor(e,c=null,a){this.fn=e,this.scheduler=c,this.active=!0,this.deps=[],this.parent=void 0,zH(this,a)}run(){if(!this.active)return this.fn();let e=D1,c=Q3;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=D1,D1=this,Q3=!0,c4=1<<++s6,s6<=z8?MH(this):Hi(this),this.fn()}finally{s6<=z8&&VH(this),c4=1<<--s6,D1=this.parent,Q3=c,this.parent=void 0,this.deferStop&&this.stop()}}stop(){D1===this?this.deferStop=!0:this.active&&(Hi(this),this.onStop&&this.onStop(),this.active=!1)}}function Hi(t){const{deps:e}=t;if(e.length){for(let c=0;c<e.length;c++)e[c].delete(t);e.length=0}}let Q3=!0;const V7=[];function Re(){V7.push(Q3),Q3=!1}function Oe(){const t=V7.pop();Q3=t===void 0?!0:t}function C1(t,e,c){if(Q3&&D1){let a=K0.get(t);a||K0.set(t,a=new Map);let s=a.get(c);s||a.set(c,s=Sa()),_7(s)}}function _7(t,e){let c=!1;s6<=z8?M7(t)||(t.n|=c4,c=!C7(t)):c=!t.has(D1),c&&(t.add(D1),D1.deps.push(t))}function z3(t,e,c,a,s,n){const i=K0.get(t);if(!i)return;let r=[];if(e==="clear")r=[...i.values()];else if(c==="length"&&r2(t)){const o=Number(a);i.forEach((l,f)=>{(f==="length"||!Pe(f)&&f>=o)&&r.push(l)})}else switch(c!==void 0&&r.push(i.get(c)),e){case"add":r2(t)?wa(c)&&r.push(i.get("length")):(r.push(i.get(S4)),de(t)&&r.push(i.get(C8)));break;case"delete":r2(t)||(r.push(i.get(S4)),de(t)&&r.push(i.get(C8)));break;case"set":de(t)&&r.push(i.get(S4));break}if(r.length===1)r[0]&&M8(r[0]);else{const o=[];for(const l of r)l&&o.push(...l);M8(Sa(o))}}function M8(t,e){const c=r2(t)?t:[...t];for(const a of c)a.computed&&zi(a);for(const a of c)a.computed||zi(a)}function zi(t,e){(t!==D1||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function _H(t,e){var c;return(c=K0.get(t))==null?void 0:c.get(e)}const LH=_a("__proto__,__v_isRef,__isVue"),L7=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Pe)),Ci=bH();function bH(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...c){const a=z2(this);for(let n=0,i=this.length;n<i;n++)C1(a,"get",n+"");const s=a[e](...c);return s===-1||s===!1?a[e](...c.map(z2)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...c){Re();const a=z2(this)[e].apply(this,c);return Oe(),a}}),t}function wH(t){const e=z2(this);return C1(e,"has",t),e.hasOwnProperty(t)}class b7{constructor(e=!1,c=!1){this._isReadonly=e,this._shallow=c}get(e,c,a){const s=this._isReadonly,n=this._shallow;if(c==="__v_isReactive")return!s;if(c==="__v_isReadonly")return s;if(c==="__v_isShallow")return n;if(c==="__v_raw")return a===(s?n?DH:x7:n?S7:y7).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(a)?e:void 0;const i=r2(e);if(!s){if(i&&C2(Ci,c))return Reflect.get(Ci,c,a);if(c==="hasOwnProperty")return wH}const r=Reflect.get(e,c,a);return(Pe(c)?L7.has(c):LH(c))||(s||C1(e,"get",c),n)?r:$2(r)?i&&wa(c)?r:r.value:I2(r)?s?T7(r):j6(r):r}}class w7 extends b7{constructor(e=!1){super(!1,e)}set(e,c,a,s){let n=e[c];if(!this._shallow){const o=_e(n);if(!Y0(a)&&!_e(a)&&(n=z2(n),a=z2(a)),!r2(e)&&$2(n)&&!$2(a))return o?!1:(n.value=a,!0)}const i=r2(e)&&wa(c)?Number(c)<e.length:C2(e,c),r=Reflect.set(e,c,a,s);return e===z2(s)&&(i?P4(a,n)&&z3(e,"set",c,a):z3(e,"add",c,a)),r}deleteProperty(e,c){const a=C2(e,c);e[c];const s=Reflect.deleteProperty(e,c);return s&&a&&z3(e,"delete",c,void 0),s}has(e,c){const a=Reflect.has(e,c);return(!Pe(c)||!L7.has(c))&&C1(e,"has",c),a}ownKeys(e){return C1(e,"iterate",r2(e)?"length":S4),Reflect.ownKeys(e)}}class yH extends b7{constructor(e=!1){super(!0,e)}set(e,c){return!0}deleteProperty(e,c){return!0}}const SH=new w7,xH=new yH,NH=new w7(!0),Na=t=>t,Pt=t=>Reflect.getPrototypeOf(t);function p0(t,e,c=!1,a=!1){t=t.__v_raw;const s=z2(t),n=z2(e);c||(P4(e,n)&&C1(s,"get",e),C1(s,"get",n));const{has:i}=Pt(s),r=a?Na:c?ka:V6;if(i.call(s,e))return r(t.get(e));if(i.call(s,n))return r(t.get(n));t!==s&&t.get(e)}function m0(t,e=!1){const c=this.__v_raw,a=z2(c),s=z2(t);return e||(P4(t,s)&&C1(a,"has",t),C1(a,"has",s)),t===s?c.has(t):c.has(t)||c.has(s)}function v0(t,e=!1){return t=t.__v_raw,!e&&C1(z2(t),"iterate",S4),Reflect.get(t,"size",t)}function Mi(t){t=z2(t);const e=z2(this);return Pt(e).has.call(e,t)||(e.add(t),z3(e,"add",t,t)),this}function Vi(t,e){e=z2(e);const c=z2(this),{has:a,get:s}=Pt(c);let n=a.call(c,t);n||(t=z2(t),n=a.call(c,t));const i=s.call(c,t);return c.set(t,e),n?P4(e,i)&&z3(c,"set",t,e):z3(c,"add",t,e),this}function _i(t){const e=z2(this),{has:c,get:a}=Pt(e);let s=c.call(e,t);s||(t=z2(t),s=c.call(e,t)),a&&a.call(e,t);const n=e.delete(t);return s&&z3(e,"delete",t,void 0),n}function Li(){const t=z2(this),e=t.size!==0,c=t.clear();return e&&z3(t,"clear",void 0,void 0),c}function g0(t,e){return function(a,s){const n=this,i=n.__v_raw,r=z2(i),o=e?Na:t?ka:V6;return!t&&C1(r,"iterate",S4),i.forEach((l,f)=>a.call(s,o(l),o(f),n))}}function H0(t,e,c){return function(...a){const s=this.__v_raw,n=z2(s),i=de(n),r=t==="entries"||t===Symbol.iterator&&i,o=t==="keys"&&i,l=s[t](...a),f=c?Na:e?ka:V6;return!e&&C1(n,"iterate",o?C8:S4),{next(){const{value:u,done:d}=l.next();return d?{value:u,done:d}:{value:r?[f(u[0]),f(u[1])]:f(u),done:d}},[Symbol.iterator](){return this}}}}function k3(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function TH(){const t={get(n){return p0(this,n)},get size(){return v0(this)},has:m0,add:Mi,set:Vi,delete:_i,clear:Li,forEach:g0(!1,!1)},e={get(n){return p0(this,n,!1,!0)},get size(){return v0(this)},has:m0,add:Mi,set:Vi,delete:_i,clear:Li,forEach:g0(!1,!0)},c={get(n){return p0(this,n,!0)},get size(){return v0(this,!0)},has(n){return m0.call(this,n,!0)},add:k3("add"),set:k3("set"),delete:k3("delete"),clear:k3("clear"),forEach:g0(!0,!1)},a={get(n){return p0(this,n,!0,!0)},get size(){return v0(this,!0)},has(n){return m0.call(this,n,!0)},add:k3("add"),set:k3("set"),delete:k3("delete"),clear:k3("clear"),forEach:g0(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{t[n]=H0(n,!1,!1),c[n]=H0(n,!0,!1),e[n]=H0(n,!1,!0),a[n]=H0(n,!0,!0)}),[t,c,e,a]}const[EH,kH,AH,PH]=TH();function Ta(t,e){const c=e?t?PH:AH:t?kH:EH;return(a,s,n)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?a:Reflect.get(C2(c,s)&&s in a?c:a,s,n)}const IH={get:Ta(!1,!1)},RH={get:Ta(!1,!0)},OH={get:Ta(!0,!1)},y7=new WeakMap,S7=new WeakMap,x7=new WeakMap,DH=new WeakMap;function FH(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function BH(t){return t.__v_skip||!Object.isExtensible(t)?0:FH(fH(t))}function j6(t){return _e(t)?t:Ea(t,!1,SH,IH,y7)}function N7(t){return Ea(t,!1,NH,RH,S7)}function T7(t){return Ea(t,!0,xH,OH,x7)}function Ea(t,e,c,a,s){if(!I2(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const n=s.get(t);if(n)return n;const i=BH(t);if(i===0)return t;const r=new Proxy(t,i===2?a:c);return s.set(t,r),r}function C3(t){return _e(t)?C3(t.__v_raw):!!(t&&t.__v_isReactive)}function _e(t){return!!(t&&t.__v_isReadonly)}function Y0(t){return!!(t&&t.__v_isShallow)}function E7(t){return C3(t)||_e(t)}function z2(t){const e=t&&t.__v_raw;return e?z2(e):t}function It(t){return j0(t,"__v_skip",!0),t}const V6=t=>I2(t)?j6(t):t,ka=t=>I2(t)?T7(t):t;function k7(t){Q3&&D1&&(t=z2(t),_7(t.dep||(t.dep=Sa())))}function A7(t,e){t=z2(t);const c=t.dep;c&&M8(c)}function $2(t){return!!(t&&t.__v_isRef===!0)}function d2(t){return P7(t,!1)}function UH(t){return P7(t,!0)}function P7(t,e){return $2(t)?t:new $H(t,e)}class $H{constructor(e,c){this.__v_isShallow=c,this.dep=void 0,this.__v_isRef=!0,this._rawValue=c?e:z2(e),this._value=c?e:V6(e)}get value(){return k7(this),this._value}set value(e){const c=this.__v_isShallow||Y0(e)||_e(e);e=c?e:z2(e),P4(e,this._rawValue)&&(this._rawValue=e,this._value=c?e:V6(e),A7(this))}}function X(t){return $2(t)?t.value:t}const WH={get:(t,e,c)=>X(Reflect.get(t,e,c)),set:(t,e,c,a)=>{const s=t[e];return $2(s)&&!$2(c)?(s.value=c,!0):Reflect.set(t,e,c,a)}};function I7(t){return C3(t)?t:new Proxy(t,WH)}function qH(t){const e=r2(t)?new Array(t.length):{};for(const c in t)e[c]=R7(t,c);return e}class GH{constructor(e,c,a){this._object=e,this._key=c,this._defaultValue=a,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return _H(z2(this._object),this._key)}}class jH{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function KH(t,e,c){return $2(t)?t:p2(t)?new jH(t):I2(t)&&arguments.length>1?R7(t,e,c):d2(t)}function R7(t,e,c){const a=t[e];return $2(a)?a:new GH(t,e,c)}class YH{constructor(e,c,a,s){this._setter=c,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new xa(e,()=>{this._dirty||(this._dirty=!0,A7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=a}get value(){const e=z2(this);return k7(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function XH(t,e,c=!1){let a,s;const n=p2(t);return n?(a=t,s=s3):(a=t.get,s=t.set),new YH(a,s,n||!s,c)}function J3(t,e,c,a){let s;try{s=a?t(...a):t()}catch(n){Rt(n,e,c)}return s}function q1(t,e,c,a){if(p2(t)){const n=J3(t,e,c,a);return n&&d7(n)&&n.catch(i=>{Rt(i,e,c)}),n}const s=[];for(let n=0;n<t.length;n++)s.push(q1(t[n],e,c,a));return s}function Rt(t,e,c,a=!0){const s=e?e.vnode:null;if(e){let n=e.parent;const i=e.proxy,r=c;for(;n;){const l=n.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,i,r)===!1)return}n=n.parent}const o=e.appContext.config.errorHandler;if(o){J3(o,null,10,[t,i,r]);return}}QH(t,c,s,a)}function QH(t,e,c,a=!0){console.error(t)}let _6=!1,V8=!1;const r1=[];let c3=0;const he=[];let d3=null,H4=0;const O7=Promise.resolve();let Aa=null;function Ot(t){const e=Aa||O7;return t?e.then(this?t.bind(this):t):e}function JH(t){let e=c3+1,c=r1.length;for(;e<c;){const a=e+c>>>1,s=r1[a],n=L6(s);n<t||n===t&&s.pre?e=a+1:c=a}return e}function Pa(t){(!r1.length||!r1.includes(t,_6&&t.allowRecurse?c3+1:c3))&&(t.id==null?r1.push(t):r1.splice(JH(t.id),0,t),D7())}function D7(){!_6&&!V8&&(V8=!0,Aa=O7.then(B7))}function ZH(t){const e=r1.indexOf(t);e>c3&&r1.splice(e,1)}function ez(t){r2(t)?he.push(...t):(!d3||!d3.includes(t,t.allowRecurse?H4+1:H4))&&he.push(t),D7()}function bi(t,e,c=_6?c3+1:0){for(;c<r1.length;c++){const a=r1[c];if(a&&a.pre){if(t&&a.id!==t.uid)continue;r1.splice(c,1),c--,a()}}}function F7(t){if(he.length){const e=[...new Set(he)];if(he.length=0,d3){d3.push(...e);return}for(d3=e,d3.sort((c,a)=>L6(c)-L6(a)),H4=0;H4<d3.length;H4++)d3[H4]();d3=null,H4=0}}const L6=t=>t.id==null?1/0:t.id,tz=(t,e)=>{const c=L6(t)-L6(e);if(c===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return c};function B7(t){V8=!1,_6=!0,r1.sort(tz);try{for(c3=0;c3<r1.length;c3++){const e=r1[c3];e&&e.active!==!1&&J3(e,null,14)}}finally{c3=0,r1.length=0,F7(),_6=!1,Aa=null,(r1.length||he.length)&&B7()}}function cz(t,e,...c){if(t.isUnmounted)return;const a=t.vnode.props||E2;let s=c;const n=e.startsWith("update:"),i=n&&e.slice(7);if(i&&i in a){const f=`${i==="modelValue"?"model":i}Modifiers`,{number:u,trim:d}=a[f]||E2;d&&(s=c.map(h=>G2(h)?h.trim():h)),u&&(s=c.map(g8))}let r,o=a[r=Ac(e)]||a[r=Ac(o3(e))];!o&&n&&(o=a[r=Ac(Ie(e))]),o&&q1(o,t,6,s);const l=a[r+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[r])return;t.emitted[r]=!0,q1(l,t,6,s)}}function U7(t,e,c=!1){const a=e.emitsCache,s=a.get(t);if(s!==void 0)return s;const n=t.emits;let i={},r=!1;if(!p2(t)){const o=l=>{const f=U7(l,e,!0);f&&(r=!0,s1(i,f))};!c&&e.mixins.length&&e.mixins.forEach(o),t.extends&&o(t.extends),t.mixins&&t.mixins.forEach(o)}return!n&&!r?(I2(t)&&a.set(t,null),null):(r2(n)?n.forEach(o=>i[o]=null):s1(i,n),I2(t)&&a.set(t,i),i)}function Dt(t,e){return!t||!Tt(e)?!1:(e=e.slice(2).replace(/Once$/,""),C2(t,e[0].toLowerCase()+e.slice(1))||C2(t,Ie(e))||C2(t,e))}let w1=null,Ft=null;function X0(t){const e=w1;return w1=t,Ft=t&&t.type.__scopeId||null,e}function h1(t){Ft=t}function p1(){Ft=null}function R2(t,e=w1,c){if(!e||t._n)return t;const a=(...s)=>{a._d&&Ii(-1);const n=X0(e);let i;try{i=t(...s)}finally{X0(n),a._d&&Ii(1)}return i};return a._n=!0,a._c=!0,a._d=!0,a}function Ic(t){const{type:e,vnode:c,proxy:a,withProxy:s,props:n,propsOptions:[i],slots:r,attrs:o,emit:l,render:f,renderCache:u,data:d,setupState:h,ctx:v,inheritAttrs:m}=t;let C,H;const p=X0(t);try{if(c.shapeFlag&4){const _=s||a,L=_;C=t3(f.call(L,_,u,n,h,d,v)),H=o}else{const _=e;C=t3(_.length>1?_(n,{attrs:o,slots:r,emit:l}):_(n,null)),H=e.props?o:az(o)}}catch(_){u6.length=0,Rt(_,t,1),C=t2(I4)}let g=C;if(H&&m!==!1){const _=Object.keys(H),{shapeFlag:L}=g;_.length&&L&7&&(i&&_.some(La)&&(H=sz(H,i)),g=Le(g,H))}return c.dirs&&(g=Le(g),g.dirs=g.dirs?g.dirs.concat(c.dirs):c.dirs),c.transition&&(g.transition=c.transition),C=g,X0(p),C}const az=t=>{let e;for(const c in t)(c==="class"||c==="style"||Tt(c))&&((e||(e={}))[c]=t[c]);return e},sz=(t,e)=>{const c={};for(const a in t)(!La(a)||!(a.slice(9)in e))&&(c[a]=t[a]);return c};function nz(t,e,c){const{props:a,children:s,component:n}=t,{props:i,children:r,patchFlag:o}=e,l=n.emitsOptions;if(e.dirs||e.transition)return!0;if(c&&o>=0){if(o&1024)return!0;if(o&16)return a?wi(a,i,l):!!i;if(o&8){const f=e.dynamicProps;for(let u=0;u<f.length;u++){const d=f[u];if(i[d]!==a[d]&&!Dt(l,d))return!0}}}else return(s||r)&&(!r||!r.$stable)?!0:a===i?!1:a?i?wi(a,i,l):!0:!!i;return!1}function wi(t,e,c){const a=Object.keys(e);if(a.length!==Object.keys(t).length)return!0;for(let s=0;s<a.length;s++){const n=a[s];if(e[n]!==t[n]&&!Dt(c,n))return!0}return!1}function iz({vnode:t,parent:e},c){for(;e&&e.subTree===t;)(t=e.vnode).el=c,e=e.parent}const $7="components";function Y1(t,e){return oz($7,t,!0,e)||t}const rz=Symbol.for("v-ndc");function oz(t,e,c=!0,a=!1){const s=w1||Z2;if(s){const n=s.type;if(t===$7){const r=Xz(n,!1);if(r&&(r===e||r===o3(e)||r===At(o3(e))))return n}const i=yi(s[t]||n[t],e)||yi(s.appContext[t],e);return!i&&a?n:i}}function yi(t,e){return t&&(t[e]||t[o3(e)]||t[At(o3(e))])}const lz=t=>t.__isSuspense;function fz(t,e){e&&e.pendingBranch?r2(t)?e.effects.push(...t):e.effects.push(t):ez(t)}const z0={};function x4(t,e,c){return W7(t,e,c)}function W7(t,e,{immediate:c,deep:a,flush:s,onTrack:n,onTrigger:i}=E2){var r;const o=z7()===((r=Z2)==null?void 0:r.scope)?Z2:null;let l,f=!1,u=!1;if($2(t)?(l=()=>t.value,f=Y0(t)):C3(t)?(l=()=>t,a=!0):r2(t)?(u=!0,f=t.some(_=>C3(_)||Y0(_)),l=()=>t.map(_=>{if($2(_))return _.value;if(C3(_))return _4(_);if(p2(_))return J3(_,o,2)})):p2(t)?e?l=()=>J3(t,o,2):l=()=>{if(!(o&&o.isUnmounted))return d&&d(),q1(t,o,3,[h])}:l=s3,e&&a){const _=l;l=()=>_4(_())}let d,h=_=>{d=p.onStop=()=>{J3(_,o,4),d=p.onStop=void 0}},v;if(y6)if(h=s3,e?c&&q1(e,o,3,[l(),u?[]:void 0,h]):l(),s==="sync"){const _=Zz();v=_.__watcherHandles||(_.__watcherHandles=[])}else return s3;let m=u?new Array(t.length).fill(z0):z0;const C=()=>{if(p.active)if(e){const _=p.run();(a||f||(u?_.some((L,k)=>P4(L,m[k])):P4(_,m)))&&(d&&d(),q1(e,o,3,[_,m===z0?void 0:u&&m[0]===z0?[]:m,h]),m=_)}else p.run()};C.allowRecurse=!!e;let H;s==="sync"?H=C:s==="post"?H=()=>v1(C,o&&o.suspense):(C.pre=!0,o&&(C.id=o.uid),H=()=>Pa(C));const p=new xa(l,H);e?c?C():m=p.run():s==="post"?v1(p.run.bind(p),o&&o.suspense):p.run();const g=()=>{p.stop(),o&&o.scope&&ba(o.scope.effects,p)};return v&&v.push(g),g}function uz(t,e,c){const a=this.proxy,s=G2(t)?t.includes(".")?q7(a,t):()=>a[t]:t.bind(a,a);let n;p2(e)?n=e:(n=e.handler,c=e);const i=Z2;be(this);const r=W7(s,n.bind(a),c);return i?be(i):N4(),r}function q7(t,e){const c=e.split(".");return()=>{let a=t;for(let s=0;s<c.length&&a;s++)a=a[c[s]];return a}}function _4(t,e){if(!I2(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),$2(t))_4(t.value,e);else if(r2(t))for(let c=0;c<t.length;c++)_4(t[c],e);else if(u7(t)||de(t))t.forEach(c=>{_4(c,e)});else if(p7(t))for(const c in t)_4(t[c],e);return t}function G1(t,e){const c=w1;if(c===null)return t;const a=Wt(c)||c.proxy,s=t.dirs||(t.dirs=[]);for(let n=0;n<e.length;n++){let[i,r,o,l=E2]=e[n];i&&(p2(i)&&(i={mounted:i,updated:i}),i.deep&&_4(r),s.push({dir:i,instance:a,value:r,oldValue:void 0,arg:o,modifiers:l}))}return t}function p4(t,e,c,a){const s=t.dirs,n=e&&e.dirs;for(let i=0;i<s.length;i++){const r=s[i];n&&(r.oldValue=n[i].value);let o=r.dir[a];o&&(Re(),q1(o,c,8,[t.el,r,t,e]),Oe())}}/*! #__NO_SIDE_EFFECTS__ */function Ia(t,e){return p2(t)?s1({name:t.name},e,{setup:t}):t}const R0=t=>!!t.type.__asyncLoader,G7=t=>t.type.__isKeepAlive;function dz(t,e){j7(t,"a",e)}function hz(t,e){j7(t,"da",e)}function j7(t,e,c=Z2){const a=t.__wdc||(t.__wdc=()=>{let s=c;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Bt(e,a,c),c){let s=c.parent;for(;s&&s.parent;)G7(s.parent.vnode)&&pz(a,e,c,s),s=s.parent}}function pz(t,e,c,a){const s=Bt(e,t,a,!0);Y7(()=>{ba(a[e],s)},c)}function Bt(t,e,c=Z2,a=!1){if(c){const s=c[t]||(c[t]=[]),n=e.__weh||(e.__weh=(...i)=>{if(c.isUnmounted)return;Re(),be(c);const r=q1(e,c,t,i);return N4(),Oe(),r});return a?s.unshift(n):s.push(n),n}}const x3=t=>(e,c=Z2)=>(!y6||t==="sp")&&Bt(t,(...a)=>e(...a),c),mz=x3("bm"),Ra=x3("m"),K7=x3("bu"),Oa=x3("u"),Da=x3("bum"),Y7=x3("um"),vz=x3("sp"),gz=x3("rtg"),Hz=x3("rtc");function zz(t,e=Z2){Bt("ec",t,e)}function u1(t,e,c,a){let s;const n=c&&c[a];if(r2(t)||G2(t)){s=new Array(t.length);for(let i=0,r=t.length;i<r;i++)s[i]=e(t[i],i,void 0,n&&n[i])}else if(typeof t=="number"){s=new Array(t);for(let i=0;i<t;i++)s[i]=e(i+1,i,void 0,n&&n[i])}else if(I2(t))if(t[Symbol.iterator])s=Array.from(t,(i,r)=>e(i,r,void 0,n&&n[r]));else{const i=Object.keys(t);s=new Array(i.length);for(let r=0,o=i.length;r<o;r++){const l=i[r];s[r]=e(t[l],l,r,n&&n[r])}}else s=[];return c&&(c[a]=s),s}const _8=t=>t?io(t)?Wt(t)||t.proxy:_8(t.parent):null,f6=s1(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_8(t.parent),$root:t=>_8(t.root),$emit:t=>t.emit,$options:t=>Fa(t),$forceUpdate:t=>t.f||(t.f=()=>Pa(t.update)),$nextTick:t=>t.n||(t.n=Ot.bind(t.proxy)),$watch:t=>uz.bind(t)}),Rc=(t,e)=>t!==E2&&!t.__isScriptSetup&&C2(t,e),Cz={get({_:t},e){const{ctx:c,setupState:a,data:s,props:n,accessCache:i,type:r,appContext:o}=t;let l;if(e[0]!=="$"){const h=i[e];if(h!==void 0)switch(h){case 1:return a[e];case 2:return s[e];case 4:return c[e];case 3:return n[e]}else{if(Rc(a,e))return i[e]=1,a[e];if(s!==E2&&C2(s,e))return i[e]=2,s[e];if((l=t.propsOptions[0])&&C2(l,e))return i[e]=3,n[e];if(c!==E2&&C2(c,e))return i[e]=4,c[e];L8&&(i[e]=0)}}const f=f6[e];let u,d;if(f)return e==="$attrs"&&C1(t,"get",e),f(t);if((u=r.__cssModules)&&(u=u[e]))return u;if(c!==E2&&C2(c,e))return i[e]=4,c[e];if(d=o.config.globalProperties,C2(d,e))return d[e]},set({_:t},e,c){const{data:a,setupState:s,ctx:n}=t;return Rc(s,e)?(s[e]=c,!0):a!==E2&&C2(a,e)?(a[e]=c,!0):C2(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(n[e]=c,!0)},has({_:{data:t,setupState:e,accessCache:c,ctx:a,appContext:s,propsOptions:n}},i){let r;return!!c[i]||t!==E2&&C2(t,i)||Rc(e,i)||(r=n[0])&&C2(r,i)||C2(a,i)||C2(f6,i)||C2(s.config.globalProperties,i)},defineProperty(t,e,c){return c.get!=null?t._.accessCache[e]=0:C2(c,"value")&&this.set(t,e,c.value,null),Reflect.defineProperty(t,e,c)}};function Si(t){return r2(t)?t.reduce((e,c)=>(e[c]=null,e),{}):t}let L8=!0;function Mz(t){const e=Fa(t),c=t.proxy,a=t.ctx;L8=!1,e.beforeCreate&&xi(e.beforeCreate,t,"bc");const{data:s,computed:n,methods:i,watch:r,provide:o,inject:l,created:f,beforeMount:u,mounted:d,beforeUpdate:h,updated:v,activated:m,deactivated:C,beforeDestroy:H,beforeUnmount:p,destroyed:g,unmounted:_,render:L,renderTracked:k,renderTriggered:$,errorCaptured:N,serverPrefetch:w,expose:y,inheritAttrs:O,components:A,directives:x,filters:R}=e;if(l&&Vz(l,a,null),i)for(const l2 in i){const G=i[l2];p2(G)&&(a[l2]=G.bind(c))}if(s){const l2=s.call(c,c);I2(l2)&&(t.data=j6(l2))}if(L8=!0,n)for(const l2 in n){const G=n[l2],f2=p2(G)?G.bind(c,c):p2(G.get)?G.get.bind(c,c):s3,y2=!p2(G)&&p2(G.set)?G.set.bind(c):s3,W2=D2({get:f2,set:y2});Object.defineProperty(a,l2,{enumerable:!0,configurable:!0,get:()=>W2.value,set:U2=>W2.value=U2})}if(r)for(const l2 in r)X7(r[l2],a,c,l2);if(o){const l2=p2(o)?o.call(c):o;Reflect.ownKeys(l2).forEach(G=>{pe(G,l2[G])})}f&&xi(f,t,"c");function U(l2,G){r2(G)?G.forEach(f2=>l2(f2.bind(c))):G&&l2(G.bind(c))}if(U(mz,u),U(Ra,d),U(K7,h),U(Oa,v),U(dz,m),U(hz,C),U(zz,N),U(Hz,k),U(gz,$),U(Da,p),U(Y7,_),U(vz,w),r2(y))if(y.length){const l2=t.exposed||(t.exposed={});y.forEach(G=>{Object.defineProperty(l2,G,{get:()=>c[G],set:f2=>c[G]=f2})})}else t.exposed||(t.exposed={});L&&t.render===s3&&(t.render=L),O!=null&&(t.inheritAttrs=O),A&&(t.components=A),x&&(t.directives=x)}function Vz(t,e,c=s3){r2(t)&&(t=b8(t));for(const a in t){const s=t[a];let n;I2(s)?"default"in s?n=T1(s.from||a,s.default,!0):n=T1(s.from||a):n=T1(s),$2(n)?Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get:()=>n.value,set:i=>n.value=i}):e[a]=n}}function xi(t,e,c){q1(r2(t)?t.map(a=>a.bind(e.proxy)):t.bind(e.proxy),e,c)}function X7(t,e,c,a){const s=a.includes(".")?q7(c,a):()=>c[a];if(G2(t)){const n=e[t];p2(n)&&x4(s,n)}else if(p2(t))x4(s,t.bind(c));else if(I2(t))if(r2(t))t.forEach(n=>X7(n,e,c,a));else{const n=p2(t.handler)?t.handler.bind(c):e[t.handler];p2(n)&&x4(s,n,t)}}function Fa(t){const e=t.type,{mixins:c,extends:a}=e,{mixins:s,optionsCache:n,config:{optionMergeStrategies:i}}=t.appContext,r=n.get(e);let o;return r?o=r:!s.length&&!c&&!a?o=e:(o={},s.length&&s.forEach(l=>Q0(o,l,i,!0)),Q0(o,e,i)),I2(e)&&n.set(e,o),o}function Q0(t,e,c,a=!1){const{mixins:s,extends:n}=e;n&&Q0(t,n,c,!0),s&&s.forEach(i=>Q0(t,i,c,!0));for(const i in e)if(!(a&&i==="expose")){const r=_z[i]||c&&c[i];t[i]=r?r(t[i],e[i]):e[i]}return t}const _z={data:Ni,props:Ti,emits:Ti,methods:n6,computed:n6,beforeCreate:f1,created:f1,beforeMount:f1,mounted:f1,beforeUpdate:f1,updated:f1,beforeDestroy:f1,beforeUnmount:f1,destroyed:f1,unmounted:f1,activated:f1,deactivated:f1,errorCaptured:f1,serverPrefetch:f1,components:n6,directives:n6,watch:bz,provide:Ni,inject:Lz};function Ni(t,e){return e?t?function(){return s1(p2(t)?t.call(this,this):t,p2(e)?e.call(this,this):e)}:e:t}function Lz(t,e){return n6(b8(t),b8(e))}function b8(t){if(r2(t)){const e={};for(let c=0;c<t.length;c++)e[t[c]]=t[c];return e}return t}function f1(t,e){return t?[...new Set([].concat(t,e))]:e}function n6(t,e){return t?s1(Object.create(null),t,e):e}function Ti(t,e){return t?r2(t)&&r2(e)?[...new Set([...t,...e])]:s1(Object.create(null),Si(t),Si(e??{})):e}function bz(t,e){if(!t)return e;if(!e)return t;const c=s1(Object.create(null),t);for(const a in e)c[a]=f1(t[a],e[a]);return c}function Q7(){return{app:null,config:{isNativeTag:oH,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wz=0;function yz(t,e){return function(a,s=null){p2(a)||(a=s1({},a)),s!=null&&!I2(s)&&(s=null);const n=Q7(),i=new WeakSet;let r=!1;const o=n.app={_uid:wz++,_component:a,_props:s,_container:null,_context:n,_instance:null,version:eC,get config(){return n.config},set config(l){},use(l,...f){return i.has(l)||(l&&p2(l.install)?(i.add(l),l.install(o,...f)):p2(l)&&(i.add(l),l(o,...f))),o},mixin(l){return n.mixins.includes(l)||n.mixins.push(l),o},component(l,f){return f?(n.components[l]=f,o):n.components[l]},directive(l,f){return f?(n.directives[l]=f,o):n.directives[l]},mount(l,f,u){if(!r){const d=t2(a,s);return d.appContext=n,f&&e?e(d,l):t(d,l,u),r=!0,o._container=l,l.__vue_app__=o,Wt(d.component)||d.component.proxy}},unmount(){r&&(t(null,o._container),delete o._container.__vue_app__)},provide(l,f){return n.provides[l]=f,o},runWithContext(l){b6=o;try{return l()}finally{b6=null}}};return o}}let b6=null;function pe(t,e){if(Z2){let c=Z2.provides;const a=Z2.parent&&Z2.parent.provides;a===c&&(c=Z2.provides=Object.create(a)),c[t]=e}}function T1(t,e,c=!1){const a=Z2||w1;if(a||b6){const s=a?a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:b6._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return c&&p2(e)?e.call(a&&a.proxy):e}}function Sz(){return!!(Z2||w1||b6)}function xz(t,e,c,a=!1){const s={},n={};j0(n,$t,1),t.propsDefaults=Object.create(null),J7(t,e,s,n);for(const i in t.propsOptions[0])i in s||(s[i]=void 0);c?t.props=a?s:N7(s):t.type.props?t.props=s:t.props=n,t.attrs=n}function Nz(t,e,c,a){const{props:s,attrs:n,vnode:{patchFlag:i}}=t,r=z2(s),[o]=t.propsOptions;let l=!1;if((a||i>0)&&!(i&16)){if(i&8){const f=t.vnode.dynamicProps;for(let u=0;u<f.length;u++){let d=f[u];if(Dt(t.emitsOptions,d))continue;const h=e[d];if(o)if(C2(n,d))h!==n[d]&&(n[d]=h,l=!0);else{const v=o3(d);s[v]=w8(o,r,v,h,t,!1)}else h!==n[d]&&(n[d]=h,l=!0)}}}else{J7(t,e,s,n)&&(l=!0);let f;for(const u in r)(!e||!C2(e,u)&&((f=Ie(u))===u||!C2(e,f)))&&(o?c&&(c[u]!==void 0||c[f]!==void 0)&&(s[u]=w8(o,r,u,void 0,t,!0)):delete s[u]);if(n!==r)for(const u in n)(!e||!C2(e,u))&&(delete n[u],l=!0)}l&&z3(t,"set","$attrs")}function J7(t,e,c,a){const[s,n]=t.propsOptions;let i=!1,r;if(e)for(let o in e){if(P0(o))continue;const l=e[o];let f;s&&C2(s,f=o3(o))?!n||!n.includes(f)?c[f]=l:(r||(r={}))[f]=l:Dt(t.emitsOptions,o)||(!(o in a)||l!==a[o])&&(a[o]=l,i=!0)}if(n){const o=z2(c),l=r||E2;for(let f=0;f<n.length;f++){const u=n[f];c[u]=w8(s,o,u,l[u],t,!C2(l,u))}}return i}function w8(t,e,c,a,s,n){const i=t[c];if(i!=null){const r=C2(i,"default");if(r&&a===void 0){const o=i.default;if(i.type!==Function&&!i.skipFactory&&p2(o)){const{propsDefaults:l}=s;c in l?a=l[c]:(be(s),a=l[c]=o.call(null,e),N4())}else a=o}i[0]&&(n&&!r?a=!1:i[1]&&(a===""||a===Ie(c))&&(a=!0))}return a}function Z7(t,e,c=!1){const a=e.propsCache,s=a.get(t);if(s)return s;const n=t.props,i={},r=[];let o=!1;if(!p2(t)){const f=u=>{o=!0;const[d,h]=Z7(u,e,!0);s1(i,d),h&&r.push(...h)};!c&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!n&&!o)return I2(t)&&a.set(t,ue),ue;if(r2(n))for(let f=0;f<n.length;f++){const u=o3(n[f]);Ei(u)&&(i[u]=E2)}else if(n)for(const f in n){const u=o3(f);if(Ei(u)){const d=n[f],h=i[u]=r2(d)||p2(d)?{type:d}:s1({},d);if(h){const v=Pi(Boolean,h.type),m=Pi(String,h.type);h[0]=v>-1,h[1]=m<0||v<m,(v>-1||C2(h,"default"))&&r.push(u)}}}const l=[i,r];return I2(t)&&a.set(t,l),l}function Ei(t){return t[0]!=="$"}function ki(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ai(t,e){return ki(t)===ki(e)}function Pi(t,e){return r2(e)?e.findIndex(c=>Ai(c,t)):p2(e)&&Ai(e,t)?0:-1}const eo=t=>t[0]==="_"||t==="$stable",Ba=t=>r2(t)?t.map(t3):[t3(t)],Tz=(t,e,c)=>{if(e._n)return e;const a=R2((...s)=>Ba(e(...s)),c);return a._c=!1,a},to=(t,e,c)=>{const a=t._ctx;for(const s in t){if(eo(s))continue;const n=t[s];if(p2(n))e[s]=Tz(s,n,a);else if(n!=null){const i=Ba(n);e[s]=()=>i}}},co=(t,e)=>{const c=Ba(e);t.slots.default=()=>c},Ez=(t,e)=>{if(t.vnode.shapeFlag&32){const c=e._;c?(t.slots=z2(e),j0(e,"_",c)):to(e,t.slots={})}else t.slots={},e&&co(t,e);j0(t.slots,$t,1)},kz=(t,e,c)=>{const{vnode:a,slots:s}=t;let n=!0,i=E2;if(a.shapeFlag&32){const r=e._;r?c&&r===1?n=!1:(s1(s,e),!c&&r===1&&delete s._):(n=!e.$stable,to(e,s)),i=e}else e&&(co(t,e),i={default:1});if(n)for(const r in s)!eo(r)&&i[r]==null&&delete s[r]};function y8(t,e,c,a,s=!1){if(r2(t)){t.forEach((d,h)=>y8(d,e&&(r2(e)?e[h]:e),c,a,s));return}if(R0(a)&&!s)return;const n=a.shapeFlag&4?Wt(a.component)||a.component.proxy:a.el,i=s?null:n,{i:r,r:o}=t,l=e&&e.r,f=r.refs===E2?r.refs={}:r.refs,u=r.setupState;if(l!=null&&l!==o&&(G2(l)?(f[l]=null,C2(u,l)&&(u[l]=null)):$2(l)&&(l.value=null)),p2(o))J3(o,r,12,[i,f]);else{const d=G2(o),h=$2(o);if(d||h){const v=()=>{if(t.f){const m=d?C2(u,o)?u[o]:f[o]:o.value;s?r2(m)&&ba(m,n):r2(m)?m.includes(n)||m.push(n):d?(f[o]=[n],C2(u,o)&&(u[o]=f[o])):(o.value=[n],t.k&&(f[t.k]=o.value))}else d?(f[o]=i,C2(u,o)&&(u[o]=i)):h&&(o.value=i,t.k&&(f[t.k]=i))};i?(v.id=-1,v1(v,c)):v()}}}const v1=fz;function Az(t){return Pz(t)}function Pz(t,e){const c=H8();c.__VUE__=!0;const{insert:a,remove:s,patchProp:n,createElement:i,createText:r,createComment:o,setText:l,setElementText:f,parentNode:u,nextSibling:d,setScopeId:h=s3,insertStaticContent:v}=t,m=(M,V,b,S=null,E=null,P=null,j=!1,B=null,W=!!V.dynamicChildren)=>{if(M===V)return;M&&!Ye(M,V)&&(S=T(M),U2(M,E,P,!0),M=null),V.patchFlag===-2&&(W=!1,V.dynamicChildren=null);const{type:I,ref:c2,shapeFlag:J}=V;switch(I){case Ut:C(M,V,b,S);break;case I4:H(M,V,b,S);break;case O0:M==null&&p(V,b,S,j);break;case A2:A(M,V,b,S,E,P,j,B,W);break;default:J&1?L(M,V,b,S,E,P,j,B,W):J&6?x(M,V,b,S,E,P,j,B,W):(J&64||J&128)&&I.process(M,V,b,S,E,P,j,B,W,q)}c2!=null&&E&&y8(c2,M&&M.ref,P,V||M,!V)},C=(M,V,b,S)=>{if(M==null)a(V.el=r(V.children),b,S);else{const E=V.el=M.el;V.children!==M.children&&l(E,V.children)}},H=(M,V,b,S)=>{M==null?a(V.el=o(V.children||""),b,S):V.el=M.el},p=(M,V,b,S)=>{[M.el,M.anchor]=v(M.children,V,b,S,M.el,M.anchor)},g=({el:M,anchor:V},b,S)=>{let E;for(;M&&M!==V;)E=d(M),a(M,b,S),M=E;a(V,b,S)},_=({el:M,anchor:V})=>{let b;for(;M&&M!==V;)b=d(M),s(M),M=b;s(V)},L=(M,V,b,S,E,P,j,B,W)=>{j=j||V.type==="svg",M==null?k(V,b,S,E,P,j,B,W):w(M,V,E,P,j,B,W)},k=(M,V,b,S,E,P,j,B)=>{let W,I;const{type:c2,props:J,shapeFlag:a2,transition:h2,dirs:H2}=M;if(W=M.el=i(M.type,P,J&&J.is,J),a2&8?f(W,M.children):a2&16&&N(M.children,W,null,S,E,P&&c2!=="foreignObject",j,B),H2&&p4(M,null,S,"created"),$(W,M,M.scopeId,j,S),J){for(const L2 in J)L2!=="value"&&!P0(L2)&&n(W,L2,null,J[L2],P,M.children,S,E,i1);"value"in J&&n(W,"value",null,J.value),(I=J.onVnodeBeforeMount)&&e3(I,S,M)}H2&&p4(M,null,S,"beforeMount");const x2=Iz(E,h2);x2&&h2.beforeEnter(W),a(W,V,b),((I=J&&J.onVnodeMounted)||x2||H2)&&v1(()=>{I&&e3(I,S,M),x2&&h2.enter(W),H2&&p4(M,null,S,"mounted")},E)},$=(M,V,b,S,E)=>{if(b&&h(M,b),S)for(let P=0;P<S.length;P++)h(M,S[P]);if(E){let P=E.subTree;if(V===P){const j=E.vnode;$(M,j,j.scopeId,j.slotScopeIds,E.parent)}}},N=(M,V,b,S,E,P,j,B,W=0)=>{for(let I=W;I<M.length;I++){const c2=M[I]=B?D3(M[I]):t3(M[I]);m(null,c2,V,b,S,E,P,j,B)}},w=(M,V,b,S,E,P,j)=>{const B=V.el=M.el;let{patchFlag:W,dynamicChildren:I,dirs:c2}=V;W|=M.patchFlag&16;const J=M.props||E2,a2=V.props||E2;let h2;b&&m4(b,!1),(h2=a2.onVnodeBeforeUpdate)&&e3(h2,b,V,M),c2&&p4(V,M,b,"beforeUpdate"),b&&m4(b,!0);const H2=E&&V.type!=="foreignObject";if(I?y(M.dynamicChildren,I,B,b,S,H2,P):j||G(M,V,B,null,b,S,H2,P,!1),W>0){if(W&16)O(B,V,J,a2,b,S,E);else if(W&2&&J.class!==a2.class&&n(B,"class",null,a2.class,E),W&4&&n(B,"style",J.style,a2.style,E),W&8){const x2=V.dynamicProps;for(let L2=0;L2<x2.length;L2++){const q2=x2[L2],O1=J[q2],Z4=a2[q2];(Z4!==O1||q2==="value")&&n(B,q2,O1,Z4,E,M.children,b,S,i1)}}W&1&&M.children!==V.children&&f(B,V.children)}else!j&&I==null&&O(B,V,J,a2,b,S,E);((h2=a2.onVnodeUpdated)||c2)&&v1(()=>{h2&&e3(h2,b,V,M),c2&&p4(V,M,b,"updated")},S)},y=(M,V,b,S,E,P,j)=>{for(let B=0;B<V.length;B++){const W=M[B],I=V[B],c2=W.el&&(W.type===A2||!Ye(W,I)||W.shapeFlag&70)?u(W.el):b;m(W,I,c2,null,S,E,P,j,!0)}},O=(M,V,b,S,E,P,j)=>{if(b!==S){if(b!==E2)for(const B in b)!P0(B)&&!(B in S)&&n(M,B,b[B],null,j,V.children,E,P,i1);for(const B in S){if(P0(B))continue;const W=S[B],I=b[B];W!==I&&B!=="value"&&n(M,B,I,W,j,V.children,E,P,i1)}"value"in S&&n(M,"value",b.value,S.value)}},A=(M,V,b,S,E,P,j,B,W)=>{const I=V.el=M?M.el:r(""),c2=V.anchor=M?M.anchor:r("");let{patchFlag:J,dynamicChildren:a2,slotScopeIds:h2}=V;h2&&(B=B?B.concat(h2):h2),M==null?(a(I,b,S),a(c2,b,S),N(V.children,b,c2,E,P,j,B,W)):J>0&&J&64&&a2&&M.dynamicChildren?(y(M.dynamicChildren,a2,b,E,P,j,B),(V.key!=null||E&&V===E.subTree)&&ao(M,V,!0)):G(M,V,b,c2,E,P,j,B,W)},x=(M,V,b,S,E,P,j,B,W)=>{V.slotScopeIds=B,M==null?V.shapeFlag&512?E.ctx.activate(V,b,S,j,W):R(V,b,S,E,P,j,W):D(M,V,W)},R=(M,V,b,S,E,P,j)=>{const B=M.component=qz(M,S,E);if(G7(M)&&(B.ctx.renderer=q),Gz(B),B.asyncDep){if(E&&E.registerDep(B,U),!M.el){const W=B.subTree=t2(I4);H(null,W,V,b)}return}U(B,M,V,b,E,P,j)},D=(M,V,b)=>{const S=V.component=M.component;if(nz(M,V,b))if(S.asyncDep&&!S.asyncResolved){l2(S,V,b);return}else S.next=V,ZH(S.update),S.update();else V.el=M.el,S.vnode=V},U=(M,V,b,S,E,P,j)=>{const B=()=>{if(M.isMounted){let{next:c2,bu:J,u:a2,parent:h2,vnode:H2}=M,x2=c2,L2;m4(M,!1),c2?(c2.el=H2.el,l2(M,c2,j)):c2=H2,J&&I0(J),(L2=c2.props&&c2.props.onVnodeBeforeUpdate)&&e3(L2,h2,c2,H2),m4(M,!0);const q2=Ic(M),O1=M.subTree;M.subTree=q2,m(O1,q2,u(O1.el),T(O1),M,E,P),c2.el=q2.el,x2===null&&iz(M,q2.el),a2&&v1(a2,E),(L2=c2.props&&c2.props.onVnodeUpdated)&&v1(()=>e3(L2,h2,c2,H2),E)}else{let c2;const{el:J,props:a2}=V,{bm:h2,m:H2,parent:x2}=M,L2=R0(V);if(m4(M,!1),h2&&I0(h2),!L2&&(c2=a2&&a2.onVnodeBeforeMount)&&e3(c2,x2,V),m4(M,!0),J&&V2){const q2=()=>{M.subTree=Ic(M),V2(J,M.subTree,M,E,null)};L2?V.type.__asyncLoader().then(()=>!M.isUnmounted&&q2()):q2()}else{const q2=M.subTree=Ic(M);m(null,q2,b,S,M,E,P),V.el=q2.el}if(H2&&v1(H2,E),!L2&&(c2=a2&&a2.onVnodeMounted)){const q2=V;v1(()=>e3(c2,x2,q2),E)}(V.shapeFlag&256||x2&&R0(x2.vnode)&&x2.vnode.shapeFlag&256)&&M.a&&v1(M.a,E),M.isMounted=!0,V=b=S=null}},W=M.effect=new xa(B,()=>Pa(I),M.scope),I=M.update=()=>W.run();I.id=M.uid,m4(M,!0),I()},l2=(M,V,b)=>{V.component=M;const S=M.vnode.props;M.vnode=V,M.next=null,Nz(M,V.props,S,b),kz(M,V.children,b),Re(),bi(M),Oe()},G=(M,V,b,S,E,P,j,B,W=!1)=>{const I=M&&M.children,c2=M?M.shapeFlag:0,J=V.children,{patchFlag:a2,shapeFlag:h2}=V;if(a2>0){if(a2&128){y2(I,J,b,S,E,P,j,B,W);return}else if(a2&256){f2(I,J,b,S,E,P,j,B,W);return}}h2&8?(c2&16&&i1(I,E,P),J!==I&&f(b,J)):c2&16?h2&16?y2(I,J,b,S,E,P,j,B,W):i1(I,E,P,!0):(c2&8&&f(b,""),h2&16&&N(J,b,S,E,P,j,B,W))},f2=(M,V,b,S,E,P,j,B,W)=>{M=M||ue,V=V||ue;const I=M.length,c2=V.length,J=Math.min(I,c2);let a2;for(a2=0;a2<J;a2++){const h2=V[a2]=W?D3(V[a2]):t3(V[a2]);m(M[a2],h2,b,null,E,P,j,B,W)}I>c2?i1(M,E,P,!0,!1,J):N(V,b,S,E,P,j,B,W,J)},y2=(M,V,b,S,E,P,j,B,W)=>{let I=0;const c2=V.length;let J=M.length-1,a2=c2-1;for(;I<=J&&I<=a2;){const h2=M[I],H2=V[I]=W?D3(V[I]):t3(V[I]);if(Ye(h2,H2))m(h2,H2,b,null,E,P,j,B,W);else break;I++}for(;I<=J&&I<=a2;){const h2=M[J],H2=V[a2]=W?D3(V[a2]):t3(V[a2]);if(Ye(h2,H2))m(h2,H2,b,null,E,P,j,B,W);else break;J--,a2--}if(I>J){if(I<=a2){const h2=a2+1,H2=h2<c2?V[h2].el:S;for(;I<=a2;)m(null,V[I]=W?D3(V[I]):t3(V[I]),b,H2,E,P,j,B,W),I++}}else if(I>a2)for(;I<=J;)U2(M[I],E,P,!0),I++;else{const h2=I,H2=I,x2=new Map;for(I=H2;I<=a2;I++){const V1=V[I]=W?D3(V[I]):t3(V[I]);V1.key!=null&&x2.set(V1.key,I)}let L2,q2=0;const O1=a2-H2+1;let Z4=!1,pi=0;const Ke=new Array(O1);for(I=0;I<O1;I++)Ke[I]=0;for(I=h2;I<=J;I++){const V1=M[I];if(q2>=O1){U2(V1,E,P,!0);continue}let Z1;if(V1.key!=null)Z1=x2.get(V1.key);else for(L2=H2;L2<=a2;L2++)if(Ke[L2-H2]===0&&Ye(V1,V[L2])){Z1=L2;break}Z1===void 0?U2(V1,E,P,!0):(Ke[Z1-H2]=I+1,Z1>=pi?pi=Z1:Z4=!0,m(V1,V[Z1],b,null,E,P,j,B,W),q2++)}const mi=Z4?Rz(Ke):ue;for(L2=mi.length-1,I=O1-1;I>=0;I--){const V1=H2+I,Z1=V[V1],vi=V1+1<c2?V[V1+1].el:S;Ke[I]===0?m(null,Z1,b,vi,E,P,j,B,W):Z4&&(L2<0||I!==mi[L2]?W2(Z1,b,vi,2):L2--)}}},W2=(M,V,b,S,E=null)=>{const{el:P,type:j,transition:B,children:W,shapeFlag:I}=M;if(I&6){W2(M.component.subTree,V,b,S);return}if(I&128){M.suspense.move(V,b,S);return}if(I&64){j.move(M,V,b,q);return}if(j===A2){a(P,V,b);for(let J=0;J<W.length;J++)W2(W[J],V,b,S);a(M.anchor,V,b);return}if(j===O0){g(M,V,b);return}if(S!==2&&I&1&&B)if(S===0)B.beforeEnter(P),a(P,V,b),v1(()=>B.enter(P),E);else{const{leave:J,delayLeave:a2,afterLeave:h2}=B,H2=()=>a(P,V,b),x2=()=>{J(P,()=>{H2(),h2&&h2()})};a2?a2(P,H2,x2):x2()}else a(P,V,b)},U2=(M,V,b,S=!1,E=!1)=>{const{type:P,props:j,ref:B,children:W,dynamicChildren:I,shapeFlag:c2,patchFlag:J,dirs:a2}=M;if(B!=null&&y8(B,null,b,M,!0),c2&256){V.ctx.deactivate(M);return}const h2=c2&1&&a2,H2=!R0(M);let x2;if(H2&&(x2=j&&j.onVnodeBeforeUnmount)&&e3(x2,V,M),c2&6)x1(M.component,b,S);else{if(c2&128){M.suspense.unmount(b,S);return}h2&&p4(M,null,V,"beforeUnmount"),c2&64?M.type.remove(M,V,b,E,q,S):I&&(P!==A2||J>0&&J&64)?i1(I,V,b,!1,!0):(P===A2&&J&384||!E&&c2&16)&&i1(W,V,b),S&&u2(M)}(H2&&(x2=j&&j.onVnodeUnmounted)||h2)&&v1(()=>{x2&&e3(x2,V,M),h2&&p4(M,null,V,"unmounted")},b)},u2=M=>{const{type:V,el:b,anchor:S,transition:E}=M;if(V===A2){S2(b,S);return}if(V===O0){_(M);return}const P=()=>{s(b),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(M.shapeFlag&1&&E&&!E.persisted){const{leave:j,delayLeave:B}=E,W=()=>j(b,P);B?B(M.el,P,W):W()}else P()},S2=(M,V)=>{let b;for(;M!==V;)b=d(M),s(M),M=b;s(V)},x1=(M,V,b)=>{const{bum:S,scope:E,update:P,subTree:j,um:B}=M;S&&I0(S),E.stop(),P&&(P.active=!1,U2(j,M,V,b)),B&&v1(B,V),v1(()=>{M.isUnmounted=!0},V),V&&V.pendingBranch&&!V.isUnmounted&&M.asyncDep&&!M.asyncResolved&&M.suspenseId===V.pendingId&&(V.deps--,V.deps===0&&V.resolve())},i1=(M,V,b,S=!1,E=!1,P=0)=>{for(let j=P;j<M.length;j++)U2(M[j],V,b,S,E)},T=M=>M.shapeFlag&6?T(M.component.subTree):M.shapeFlag&128?M.suspense.next():d(M.anchor||M.el),Y=(M,V,b)=>{M==null?V._vnode&&U2(V._vnode,null,null,!0):m(V._vnode||null,M,V,null,null,null,b),bi(),F7(),V._vnode=M},q={p:m,um:U2,m:W2,r:u2,mt:R,mc:N,pc:G,pbc:y,n:T,o:t};let e2,V2;return e&&([e2,V2]=e(q)),{render:Y,hydrate:e2,createApp:yz(Y,e2)}}function m4({effect:t,update:e},c){t.allowRecurse=e.allowRecurse=c}function Iz(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ao(t,e,c=!1){const a=t.children,s=e.children;if(r2(a)&&r2(s))for(let n=0;n<a.length;n++){const i=a[n];let r=s[n];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=s[n]=D3(s[n]),r.el=i.el),c||ao(i,r)),r.type===Ut&&(r.el=i.el)}}function Rz(t){const e=t.slice(),c=[0];let a,s,n,i,r;const o=t.length;for(a=0;a<o;a++){const l=t[a];if(l!==0){if(s=c[c.length-1],t[s]<l){e[a]=s,c.push(a);continue}for(n=0,i=c.length-1;n<i;)r=n+i>>1,t[c[r]]<l?n=r+1:i=r;l<t[c[n]]&&(n>0&&(e[a]=c[n-1]),c[n]=a)}}for(n=c.length,i=c[n-1];n-- >0;)c[n]=i,i=e[i];return c}const Oz=t=>t.__isTeleport,A2=Symbol.for("v-fgt"),Ut=Symbol.for("v-txt"),I4=Symbol.for("v-cmt"),O0=Symbol.for("v-stc"),u6=[];let B1=null;function Q(t=!1){u6.push(B1=t?null:[])}function Dz(){u6.pop(),B1=u6[u6.length-1]||null}let w6=1;function Ii(t){w6+=t}function so(t){return t.dynamicChildren=w6>0?B1||ue:null,Dz(),w6>0&&B1&&B1.push(t),t}function s2(t,e,c,a,s,n){return so(z(t,e,c,a,s,n,!0))}function m3(t,e,c,a,s){return so(t2(t,e,c,a,s,!0))}function S8(t){return t?t.__v_isVNode===!0:!1}function Ye(t,e){return t.type===e.type&&t.key===e.key}const $t="__vInternal",no=({key:t})=>t??null,D0=({ref:t,ref_key:e,ref_for:c})=>(typeof t=="number"&&(t=""+t),t!=null?G2(t)||$2(t)||p2(t)?{i:w1,r:t,k:e,f:!!c}:t:null);function z(t,e=null,c=null,a=0,s=null,n=t===A2?0:1,i=!1,r=!1){const o={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&no(e),ref:e&&D0(e),scopeId:Ft,slotScopeIds:null,children:c,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:a,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:w1};return r?(Ua(o,c),n&128&&t.normalize(o)):c&&(o.shapeFlag|=G2(c)?8:16),w6>0&&!i&&B1&&(o.patchFlag>0||n&6)&&o.patchFlag!==32&&B1.push(o),o}const t2=Fz;function Fz(t,e=null,c=null,a=0,s=null,n=!1){if((!t||t===rz)&&(t=I4),S8(t)){const r=Le(t,e,!0);return c&&Ua(r,c),w6>0&&!n&&B1&&(r.shapeFlag&6?B1[B1.indexOf(t)]=r:B1.push(r)),r.patchFlag|=-2,r}if(Qz(t)&&(t=t.__vccOpts),e){e=Bz(e);let{class:r,style:o}=e;r&&!G2(r)&&(e.class=G6(r)),I2(o)&&(E7(o)&&!r2(o)&&(o=s1({},o)),e.style=ya(o))}const i=G2(t)?1:lz(t)?128:Oz(t)?64:I2(t)?4:p2(t)?2:0;return z(t,e,c,a,s,i,n,!0)}function Bz(t){return t?E7(t)||$t in t?s1({},t):t:null}function Le(t,e,c=!1){const{props:a,ref:s,patchFlag:n,children:i}=t,r=e?Uz(a||{},e):a;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:r,key:r&&no(r),ref:e&&e.ref?c&&s?r2(s)?s.concat(D0(e)):[s,D0(e)]:D0(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==A2?n===-1?16:n|16:n,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Le(t.ssContent),ssFallback:t.ssFallback&&Le(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function b1(t=" ",e=0){return t2(Ut,null,t,e)}function J1(t,e){const c=t2(O0,null,t);return c.staticCount=e,c}function z4(t="",e=!1){return e?(Q(),m3(I4,null,t)):t2(I4,null,t)}function t3(t){return t==null||typeof t=="boolean"?t2(I4):r2(t)?t2(A2,null,t.slice()):typeof t=="object"?D3(t):t2(Ut,null,String(t))}function D3(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Le(t)}function Ua(t,e){let c=0;const{shapeFlag:a}=t;if(e==null)e=null;else if(r2(e))c=16;else if(typeof e=="object")if(a&65){const s=e.default;s&&(s._c&&(s._d=!1),Ua(t,s()),s._c&&(s._d=!0));return}else{c=32;const s=e._;!s&&!($t in e)?e._ctx=w1:s===3&&w1&&(w1.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else p2(e)?(e={default:e,_ctx:w1},c=32):(e=String(e),a&64?(c=16,e=[b1(e)]):c=8);t.children=e,t.shapeFlag|=c}function Uz(...t){const e={};for(let c=0;c<t.length;c++){const a=t[c];for(const s in a)if(s==="class")e.class!==a.class&&(e.class=G6([e.class,a.class]));else if(s==="style")e.style=ya([e.style,a.style]);else if(Tt(s)){const n=e[s],i=a[s];i&&n!==i&&!(r2(n)&&n.includes(i))&&(e[s]=n?[].concat(n,i):i)}else s!==""&&(e[s]=a[s])}return e}function e3(t,e,c,a=null){q1(t,e,7,[c,a])}const $z=Q7();let Wz=0;function qz(t,e,c){const a=t.type,s=(e?e.appContext:t.appContext)||$z,n={uid:Wz++,vnode:t,type:a,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new g7(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Z7(a,s),emitsOptions:U7(a,s),emit:null,emitted:null,propsDefaults:E2,inheritAttrs:a.inheritAttrs,ctx:E2,data:E2,props:E2,attrs:E2,slots:E2,refs:E2,setupState:E2,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:c,suspenseId:c?c.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=e?e.root:n,n.emit=cz.bind(null,n),t.ce&&t.ce(n),n}let Z2=null,$a,ee,Ri="__VUE_INSTANCE_SETTERS__";(ee=H8()[Ri])||(ee=H8()[Ri]=[]),ee.push(t=>Z2=t),$a=t=>{ee.length>1?ee.forEach(e=>e(t)):ee[0](t)};const be=t=>{$a(t),t.scope.on()},N4=()=>{Z2&&Z2.scope.off(),$a(null)};function io(t){return t.vnode.shapeFlag&4}let y6=!1;function Gz(t,e=!1){y6=e;const{props:c,children:a}=t.vnode,s=io(t);xz(t,c,s,e),Ez(t,a);const n=s?jz(t,e):void 0;return y6=!1,n}function jz(t,e){const c=t.type;t.accessCache=Object.create(null),t.proxy=It(new Proxy(t.ctx,Cz));const{setup:a}=c;if(a){const s=t.setupContext=a.length>1?Yz(t):null;be(t),Re();const n=J3(a,t,0,[t.props,s]);if(Oe(),N4(),d7(n)){if(n.then(N4,N4),e)return n.then(i=>{Oi(t,i,e)}).catch(i=>{Rt(i,t,0)});t.asyncDep=n}else Oi(t,n,e)}else ro(t,e)}function Oi(t,e,c){p2(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:I2(e)&&(t.setupState=I7(e)),ro(t,c)}let Di;function ro(t,e,c){const a=t.type;if(!t.render){if(!e&&Di&&!a.render){const s=a.template||Fa(t).template;if(s){const{isCustomElement:n,compilerOptions:i}=t.appContext.config,{delimiters:r,compilerOptions:o}=a,l=s1(s1({isCustomElement:n,delimiters:r},i),o);a.render=Di(s,l)}}t.render=a.render||s3}{be(t),Re();try{Mz(t)}finally{Oe(),N4()}}}function Kz(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,c){return C1(t,"get","$attrs"),e[c]}}))}function Yz(t){const e=c=>{t.exposed=c||{}};return{get attrs(){return Kz(t)},slots:t.slots,emit:t.emit,expose:e}}function Wt(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(I7(It(t.exposed)),{get(e,c){if(c in e)return e[c];if(c in f6)return f6[c](t)},has(e,c){return c in e||c in f6}}))}function Xz(t,e=!0){return p2(t)?t.displayName||t.name:t.name||e&&t.__name}function Qz(t){return p2(t)&&"__vccOpts"in t}const D2=(t,e)=>XH(t,e,y6);function g1(t,e,c){const a=arguments.length;return a===2?I2(e)&&!r2(e)?S8(e)?t2(t,null,[e]):t2(t,e):t2(t,null,e):(a>3?c=Array.prototype.slice.call(arguments,2):a===3&&S8(c)&&(c=[c]),t2(t,e,c))}const Jz=Symbol.for("v-scx"),Zz=()=>T1(Jz),eC="3.3.12",tC="http://www.w3.org/2000/svg",C4=typeof document<"u"?document:null,Fi=C4&&C4.createElement("template"),cC={insert:(t,e,c)=>{e.insertBefore(t,c||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,c,a)=>{const s=e?C4.createElementNS(tC,t):C4.createElement(t,c?{is:c}:void 0);return t==="select"&&a&&a.multiple!=null&&s.setAttribute("multiple",a.multiple),s},createText:t=>C4.createTextNode(t),createComment:t=>C4.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>C4.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,c,a,s,n){const i=c?c.previousSibling:e.lastChild;if(s&&(s===n||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),c),!(s===n||!(s=s.nextSibling)););else{Fi.innerHTML=a?`<svg>${t}</svg>`:t;const r=Fi.content;if(a){const o=r.firstChild;for(;o.firstChild;)r.appendChild(o.firstChild);r.removeChild(o)}e.insertBefore(r,c)}return[i?i.nextSibling:e.firstChild,c?c.previousSibling:e.lastChild]}},aC=Symbol("_vtc");function sC(t,e,c){const a=t[aC];a&&(e=(e?[e,...a]:[...a]).join(" ")),e==null?t.removeAttribute("class"):c?t.setAttribute("class",e):t.className=e}const Wa=Symbol("_vod"),M3={beforeMount(t,{value:e},{transition:c}){t[Wa]=t.style.display==="none"?"":t.style.display,c&&e?c.beforeEnter(t):Xe(t,e)},mounted(t,{value:e},{transition:c}){c&&e&&c.enter(t)},updated(t,{value:e,oldValue:c},{transition:a}){!e!=!c&&(a?e?(a.beforeEnter(t),Xe(t,!0),a.enter(t)):a.leave(t,()=>{Xe(t,!1)}):Xe(t,e))},beforeUnmount(t,{value:e}){Xe(t,e)}};function Xe(t,e){t.style.display=e?t[Wa]:"none"}const nC=Symbol("");function iC(t,e,c){const a=t.style,s=G2(c);if(c&&!s){if(e&&!G2(e))for(const n in e)c[n]==null&&x8(a,n,"");for(const n in c)x8(a,n,c[n])}else{const n=a.display;if(s){if(e!==c){const i=a[nC];i&&(c+=";"+i),a.cssText=c}}else e&&t.removeAttribute("style");Wa in t&&(a.display=n)}}const Bi=/\s*!important$/;function x8(t,e,c){if(r2(c))c.forEach(a=>x8(t,e,a));else if(c==null&&(c=""),e.startsWith("--"))t.setProperty(e,c);else{const a=rC(t,e);Bi.test(c)?t.setProperty(Ie(a),c.replace(Bi,""),"important"):t[a]=c}}const Ui=["Webkit","Moz","ms"],Oc={};function rC(t,e){const c=Oc[e];if(c)return c;let a=o3(e);if(a!=="filter"&&a in t)return Oc[e]=a;a=At(a);for(let s=0;s<Ui.length;s++){const n=Ui[s]+a;if(n in t)return Oc[e]=n}return e}const $i="http://www.w3.org/1999/xlink";function oC(t,e,c,a,s){if(a&&e.startsWith("xlink:"))c==null?t.removeAttributeNS($i,e.slice(6,e.length)):t.setAttributeNS($i,e,c);else{const n=HH(e);c==null||n&&!m7(c)?t.removeAttribute(e):t.setAttribute(e,n?"":c)}}function lC(t,e,c,a,s,n,i){if(e==="innerHTML"||e==="textContent"){a&&i(a,s,n),t[e]=c??"";return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){t._value=c;const l=r==="OPTION"?t.getAttribute("value"):t.value,f=c??"";l!==f&&(t.value=f),c==null&&t.removeAttribute(e);return}let o=!1;if(c===""||c==null){const l=typeof t[e];l==="boolean"?c=m7(c):c==null&&l==="string"?(c="",o=!0):l==="number"&&(c=0,o=!0)}try{t[e]=c}catch{}o&&t.removeAttribute(e)}function ae(t,e,c,a){t.addEventListener(e,c,a)}function fC(t,e,c,a){t.removeEventListener(e,c,a)}const Wi=Symbol("_vei");function uC(t,e,c,a,s=null){const n=t[Wi]||(t[Wi]={}),i=n[e];if(a&&i)i.value=a;else{const[r,o]=dC(e);if(a){const l=n[e]=mC(a,s);ae(t,r,l,o)}else i&&(fC(t,r,i,o),n[e]=void 0)}}const qi=/(?:Once|Passive|Capture)$/;function dC(t){let e;if(qi.test(t)){e={};let a;for(;a=t.match(qi);)t=t.slice(0,t.length-a[0].length),e[a[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ie(t.slice(2)),e]}let Dc=0;const hC=Promise.resolve(),pC=()=>Dc||(hC.then(()=>Dc=0),Dc=Date.now());function mC(t,e){const c=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=c.attached)return;q1(vC(a,c.value),e,5,[a])};return c.value=t,c.attached=pC(),c}function vC(t,e){if(r2(e)){const c=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{c.call(t),t._stopped=!0},e.map(a=>s=>!s._stopped&&a&&a(s))}else return e}const Gi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,gC=(t,e,c,a,s=!1,n,i,r,o)=>{e==="class"?sC(t,a,s):e==="style"?iC(t,c,a):Tt(e)?La(e)||uC(t,e,c,a,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):HC(t,e,a,s))?lC(t,e,a,n,i,r,o):(e==="true-value"?t._trueValue=a:e==="false-value"&&(t._falseValue=a),oC(t,e,a,s))};function HC(t,e,c,a){if(a)return!!(e==="innerHTML"||e==="textContent"||e in t&&Gi(e)&&p2(c));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Gi(e)&&G2(c)?!1:e in t}const ji=t=>{const e=t.props["onUpdate:modelValue"]||!1;return r2(e)?c=>I0(e,c):e};function zC(t){t.target.composing=!0}function Ki(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Fc=Symbol("_assign"),Yi={created(t,{modifiers:{lazy:e,trim:c,number:a}},s){t[Fc]=ji(s);const n=a||s.props&&s.props.type==="number";ae(t,e?"change":"input",i=>{if(i.target.composing)return;let r=t.value;c&&(r=r.trim()),n&&(r=g8(r)),t[Fc](r)}),c&&ae(t,"change",()=>{t.value=t.value.trim()}),e||(ae(t,"compositionstart",zC),ae(t,"compositionend",Ki),ae(t,"change",Ki))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:c,trim:a,number:s}},n){if(t[Fc]=ji(n),t.composing)return;const i=s||t.type==="number"?g8(t.value):t.value,r=e??"";i!==r&&(document.activeElement===t&&t.type!=="range"&&(c||a&&t.value.trim()===r)||(t.value=r))}},CC=s1({patchProp:gC},cC);let Xi;function MC(){return Xi||(Xi=Az(CC))}const VC=(...t)=>{const e=MC().createApp(...t),{mount:c}=e;return e.mount=a=>{const s=_C(a);if(!s)return;const n=e._component;!p2(n)&&!n.render&&!n.template&&(n.template=s.innerHTML),s.innerHTML="";const i=c(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},e};function _C(t){return G2(t)?document.querySelector(t):t}var LC=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let oo;const qt=t=>oo=t,lo=Symbol();function N8(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var d6;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(d6||(d6={}));function bC(){const t=H7(!0),e=t.run(()=>d2({}));let c=[],a=[];const s=It({install(n){qt(s),s._a=n,n.provide(lo,s),n.config.globalProperties.$pinia=s,a.forEach(i=>c.push(i)),a=[]},use(n){return!this._a&&!LC?a.push(n):c.push(n),this},_p:c,_a:null,_e:t,_s:new Map,state:e});return s}const fo=()=>{};function Qi(t,e,c,a=fo){t.push(e);const s=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),a())};return!c&&z7()&&CH(s),s}function te(t,...e){t.slice().forEach(c=>{c(...e)})}const wC=t=>t();function T8(t,e){t instanceof Map&&e instanceof Map&&e.forEach((c,a)=>t.set(a,c)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const c in e){if(!e.hasOwnProperty(c))continue;const a=e[c],s=t[c];N8(s)&&N8(a)&&t.hasOwnProperty(c)&&!$2(a)&&!C3(a)?t[c]=T8(s,a):t[c]=a}return t}const yC=Symbol();function SC(t){return!N8(t)||!t.hasOwnProperty(yC)}const{assign:R3}=Object;function xC(t){return!!($2(t)&&t.effect)}function NC(t,e,c,a){const{state:s,actions:n,getters:i}=e,r=c.state.value[t];let o;function l(){r||(c.state.value[t]=s?s():{});const f=qH(c.state.value[t]);return R3(f,n,Object.keys(i||{}).reduce((u,d)=>(u[d]=It(D2(()=>{qt(c);const h=c._s.get(t);return i[d].call(h,h)})),u),{}))}return o=uo(t,l,e,c,a,!0),o}function uo(t,e,c={},a,s,n){let i;const r=R3({actions:{}},c),o={deep:!0};let l,f,u=[],d=[],h;const v=a.state.value[t];!n&&!v&&(a.state.value[t]={}),d2({});let m;function C(N){let w;l=f=!1,typeof N=="function"?(N(a.state.value[t]),w={type:d6.patchFunction,storeId:t,events:h}):(T8(a.state.value[t],N),w={type:d6.patchObject,payload:N,storeId:t,events:h});const y=m=Symbol();Ot().then(()=>{m===y&&(l=!0)}),f=!0,te(u,w,a.state.value[t])}const H=n?function(){const{state:w}=c,y=w?w():{};this.$patch(O=>{R3(O,y)})}:fo;function p(){i.stop(),u=[],d=[],a._s.delete(t)}function g(N,w){return function(){qt(a);const y=Array.from(arguments),O=[],A=[];function x(U){O.push(U)}function R(U){A.push(U)}te(d,{args:y,name:N,store:L,after:x,onError:R});let D;try{D=w.apply(this&&this.$id===t?this:L,y)}catch(U){throw te(A,U),U}return D instanceof Promise?D.then(U=>(te(O,U),U)).catch(U=>(te(A,U),Promise.reject(U))):(te(O,D),D)}}const _={_p:a,$id:t,$onAction:Qi.bind(null,d),$patch:C,$reset:H,$subscribe(N,w={}){const y=Qi(u,N,w.detached,()=>O()),O=i.run(()=>x4(()=>a.state.value[t],A=>{(w.flush==="sync"?f:l)&&N({storeId:t,type:d6.direct,events:h},A)},R3({},o,w)));return y},$dispose:p},L=j6(_);a._s.set(t,L);const $=(a._a&&a._a.runWithContext||wC)(()=>a._e.run(()=>(i=H7()).run(e)));for(const N in $){const w=$[N];if($2(w)&&!xC(w)||C3(w))n||(v&&SC(w)&&($2(w)?w.value=v[N]:T8(w,v[N])),a.state.value[t][N]=w);else if(typeof w=="function"){const y=g(N,w);$[N]=y,r.actions[N]=w}}return R3(L,$),R3(z2(L),$),Object.defineProperty(L,"$state",{get:()=>a.state.value[t],set:N=>{C(w=>{R3(w,N)})}}),a._p.forEach(N=>{R3(L,i.run(()=>N({store:L,app:a._a,pinia:a,options:r})))}),v&&n&&c.hydrate&&c.hydrate(L.$state,v),l=!0,f=!0,L}function De(t,e,c){let a,s;const n=typeof e=="function";typeof t=="string"?(a=t,s=n?c:e):(s=t,a=t.id);function i(r,o){const l=Sz();return r=r||(l?T1(lo,null):null),r&&qt(r),r=oo,r._s.has(a)||(n?uo(a,e,s,r):NC(a,s,r)),r._s.get(a)}return i.$id=a,i}function j1(t){{t=z2(t);const e={};for(const c in t){const a=t[c];($2(a)||C3(a))&&(e[c]=KH(t,c))}return e}}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const se=typeof window<"u";function TC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const _2=Object.assign;function Bc(t,e){const c={};for(const a in e){const s=e[a];c[a]=X1(s)?s.map(t):t(s)}return c}const h6=()=>{},X1=Array.isArray,EC=/\/$/,kC=t=>t.replace(EC,"");function Uc(t,e,c="/"){let a,s={},n="",i="";const r=e.indexOf("#");let o=e.indexOf("?");return r<o&&r>=0&&(o=-1),o>-1&&(a=e.slice(0,o),n=e.slice(o+1,r>-1?r:e.length),s=t(n)),r>-1&&(a=a||e.slice(0,r),i=e.slice(r,e.length)),a=RC(a??e,c),{fullPath:a+(n&&"?")+n+i,path:a,query:s,hash:i}}function AC(t,e){const c=e.query?t(e.query):"";return e.path+(c&&"?")+c+(e.hash||"")}function Ji(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function PC(t,e,c){const a=e.matched.length-1,s=c.matched.length-1;return a>-1&&a===s&&we(e.matched[a],c.matched[s])&&ho(e.params,c.params)&&t(e.query)===t(c.query)&&e.hash===c.hash}function we(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ho(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const c in t)if(!IC(t[c],e[c]))return!1;return!0}function IC(t,e){return X1(t)?Zi(t,e):X1(e)?Zi(e,t):t===e}function Zi(t,e){return X1(e)?t.length===e.length&&t.every((c,a)=>c===e[a]):t.length===1&&t[0]===e}function RC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const c=e.split("/"),a=t.split("/"),s=a[a.length-1];(s===".."||s===".")&&a.push("");let n=c.length-1,i,r;for(i=0;i<a.length;i++)if(r=a[i],r!==".")if(r==="..")n>1&&n--;else break;return c.slice(0,n).join("/")+"/"+a.slice(i-(i===a.length?1:0)).join("/")}var S6;(function(t){t.pop="pop",t.push="push"})(S6||(S6={}));var p6;(function(t){t.back="back",t.forward="forward",t.unknown=""})(p6||(p6={}));function OC(t){if(!t)if(se){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),kC(t)}const DC=/^[^#]+#/;function FC(t,e){return t.replace(DC,"#")+e}function BC(t,e){const c=document.documentElement.getBoundingClientRect(),a=t.getBoundingClientRect();return{behavior:e.behavior,left:a.left-c.left-(e.left||0),top:a.top-c.top-(e.top||0)}}const Gt=()=>({left:window.pageXOffset,top:window.pageYOffset});function UC(t){let e;if("el"in t){const c=t.el,a=typeof c=="string"&&c.startsWith("#"),s=typeof c=="string"?a?document.getElementById(c.slice(1)):document.querySelector(c):c;if(!s)return;e=BC(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function er(t,e){return(history.state?history.state.position-e:-1)+t}const E8=new Map;function $C(t,e){E8.set(t,e)}function WC(t){const e=E8.get(t);return E8.delete(t),e}let qC=()=>location.protocol+"//"+location.host;function po(t,e){const{pathname:c,search:a,hash:s}=e,n=t.indexOf("#");if(n>-1){let r=s.includes(t.slice(n))?t.slice(n).length:1,o=s.slice(r);return o[0]!=="/"&&(o="/"+o),Ji(o,"")}return Ji(c,t)+a+s}function GC(t,e,c,a){let s=[],n=[],i=null;const r=({state:d})=>{const h=po(t,location),v=c.value,m=e.value;let C=0;if(d){if(c.value=h,e.value=d,i&&i===v){i=null;return}C=m?d.position-m.position:0}else a(h);s.forEach(H=>{H(c.value,v,{delta:C,type:S6.pop,direction:C?C>0?p6.forward:p6.back:p6.unknown})})};function o(){i=c.value}function l(d){s.push(d);const h=()=>{const v=s.indexOf(d);v>-1&&s.splice(v,1)};return n.push(h),h}function f(){const{history:d}=window;d.state&&d.replaceState(_2({},d.state,{scroll:Gt()}),"")}function u(){for(const d of n)d();n=[],window.removeEventListener("popstate",r),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",r),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:o,listen:l,destroy:u}}function tr(t,e,c,a=!1,s=!1){return{back:t,current:e,forward:c,replaced:a,position:window.history.length,scroll:s?Gt():null}}function jC(t){const{history:e,location:c}=window,a={value:po(t,c)},s={value:e.state};s.value||n(a.value,{back:null,current:a.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function n(o,l,f){const u=t.indexOf("#"),d=u>-1?(c.host&&document.querySelector("base")?t:t.slice(u))+o:qC()+t+o;try{e[f?"replaceState":"pushState"](l,"",d),s.value=l}catch(h){console.error(h),c[f?"replace":"assign"](d)}}function i(o,l){const f=_2({},e.state,tr(s.value.back,o,s.value.forward,!0),l,{position:s.value.position});n(o,f,!0),a.value=o}function r(o,l){const f=_2({},s.value,e.state,{forward:o,scroll:Gt()});n(f.current,f,!0);const u=_2({},tr(a.value,o,null),{position:f.position+1},l);n(o,u,!1),a.value=o}return{location:a,state:s,push:r,replace:i}}function KC(t){t=OC(t);const e=jC(t),c=GC(t,e.state,e.location,e.replace);function a(n,i=!0){i||c.pauseListeners(),history.go(n)}const s=_2({location:"",base:t,go:a,createHref:FC.bind(null,t)},e,c);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function YC(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),KC(t)}function XC(t){return typeof t=="string"||t&&typeof t=="object"}function mo(t){return typeof t=="string"||typeof t=="symbol"}const A3={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},vo=Symbol("");var cr;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(cr||(cr={}));function ye(t,e){return _2(new Error,{type:t,[vo]:!0},e)}function f3(t,e){return t instanceof Error&&vo in t&&(e==null||!!(t.type&e))}const ar="[^/]+?",QC={sensitive:!1,strict:!1,start:!0,end:!0},JC=/[.+*?^${}()[\]/\\]/g;function ZC(t,e){const c=_2({},QC,e),a=[];let s=c.start?"^":"";const n=[];for(const l of t){const f=l.length?[]:[90];c.strict&&!l.length&&(s+="/");for(let u=0;u<l.length;u++){const d=l[u];let h=40+(c.sensitive?.25:0);if(d.type===0)u||(s+="/"),s+=d.value.replace(JC,"\\$&"),h+=40;else if(d.type===1){const{value:v,repeatable:m,optional:C,regexp:H}=d;n.push({name:v,repeatable:m,optional:C});const p=H||ar;if(p!==ar){h+=10;try{new RegExp(`(${p})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${v}" (${p}): `+_.message)}}let g=m?`((?:${p})(?:/(?:${p}))*)`:`(${p})`;u||(g=C&&l.length<2?`(?:/${g})`:"/"+g),C&&(g+="?"),s+=g,h+=20,C&&(h+=-8),m&&(h+=-20),p===".*"&&(h+=-50)}f.push(h)}a.push(f)}if(c.strict&&c.end){const l=a.length-1;a[l][a[l].length-1]+=.7000000000000001}c.strict||(s+="/?"),c.end?s+="$":c.strict&&(s+="(?:/|$)");const i=new RegExp(s,c.sensitive?"":"i");function r(l){const f=l.match(i),u={};if(!f)return null;for(let d=1;d<f.length;d++){const h=f[d]||"",v=n[d-1];u[v.name]=h&&v.repeatable?h.split("/"):h}return u}function o(l){let f="",u=!1;for(const d of t){(!u||!f.endsWith("/"))&&(f+="/"),u=!1;for(const h of d)if(h.type===0)f+=h.value;else if(h.type===1){const{value:v,repeatable:m,optional:C}=h,H=v in l?l[v]:"";if(X1(H)&&!m)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const p=X1(H)?H.join("/"):H;if(!p)if(C)d.length<2&&(f.endsWith("/")?f=f.slice(0,-1):u=!0);else throw new Error(`Missing required param "${v}"`);f+=p}}return f||"/"}return{re:i,score:a,keys:n,parse:r,stringify:o}}function eM(t,e){let c=0;for(;c<t.length&&c<e.length;){const a=e[c]-t[c];if(a)return a;c++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function tM(t,e){let c=0;const a=t.score,s=e.score;for(;c<a.length&&c<s.length;){const n=eM(a[c],s[c]);if(n)return n;c++}if(Math.abs(s.length-a.length)===1){if(sr(a))return 1;if(sr(s))return-1}return s.length-a.length}function sr(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const cM={type:0,value:""},aM=/[a-zA-Z0-9_]/;function sM(t){if(!t)return[[]];if(t==="/")return[[cM]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${c})/"${l}": ${h}`)}let c=0,a=c;const s=[];let n;function i(){n&&s.push(n),n=[]}let r=0,o,l="",f="";function u(){l&&(c===0?n.push({type:0,value:l}):c===1||c===2||c===3?(n.length>1&&(o==="*"||o==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),n.push({type:1,value:l,regexp:f,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=o}for(;r<t.length;){if(o=t[r++],o==="\\"&&c!==2){a=c,c=4;continue}switch(c){case 0:o==="/"?(l&&u(),i()):o===":"?(u(),c=1):d();break;case 4:d(),c=a;break;case 1:o==="("?c=2:aM.test(o)?d():(u(),c=0,o!=="*"&&o!=="?"&&o!=="+"&&r--);break;case 2:o===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+o:c=3:f+=o;break;case 3:u(),c=0,o!=="*"&&o!=="?"&&o!=="+"&&r--,f="";break;default:e("Unknown state");break}}return c===2&&e(`Unfinished custom RegExp for param "${l}"`),u(),i(),s}function nM(t,e,c){const a=ZC(sM(t.path),c),s=_2(a,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function iM(t,e){const c=[],a=new Map;e=rr({strict:!1,end:!0,sensitive:!1},e);function s(f){return a.get(f)}function n(f,u,d){const h=!d,v=rM(f);v.aliasOf=d&&d.record;const m=rr(e,f),C=[v];if("alias"in f){const g=typeof f.alias=="string"?[f.alias]:f.alias;for(const _ of g)C.push(_2({},v,{components:d?d.record.components:v.components,path:_,aliasOf:d?d.record:v}))}let H,p;for(const g of C){const{path:_}=g;if(u&&_[0]!=="/"){const L=u.record.path,k=L[L.length-1]==="/"?"":"/";g.path=u.record.path+(_&&k+_)}if(H=nM(g,u,m),d?d.alias.push(H):(p=p||H,p!==H&&p.alias.push(H),h&&f.name&&!ir(H)&&i(f.name)),v.children){const L=v.children;for(let k=0;k<L.length;k++)n(L[k],H,d&&d.children[k])}d=d||H,(H.record.components&&Object.keys(H.record.components).length||H.record.name||H.record.redirect)&&o(H)}return p?()=>{i(p)}:h6}function i(f){if(mo(f)){const u=a.get(f);u&&(a.delete(f),c.splice(c.indexOf(u),1),u.children.forEach(i),u.alias.forEach(i))}else{const u=c.indexOf(f);u>-1&&(c.splice(u,1),f.record.name&&a.delete(f.record.name),f.children.forEach(i),f.alias.forEach(i))}}function r(){return c}function o(f){let u=0;for(;u<c.length&&tM(f,c[u])>=0&&(f.record.path!==c[u].record.path||!go(f,c[u]));)u++;c.splice(u,0,f),f.record.name&&!ir(f)&&a.set(f.record.name,f)}function l(f,u){let d,h={},v,m;if("name"in f&&f.name){if(d=a.get(f.name),!d)throw ye(1,{location:f});m=d.record.name,h=_2(nr(u.params,d.keys.filter(p=>!p.optional).map(p=>p.name)),f.params&&nr(f.params,d.keys.map(p=>p.name))),v=d.stringify(h)}else if("path"in f)v=f.path,d=c.find(p=>p.re.test(v)),d&&(h=d.parse(v),m=d.record.name);else{if(d=u.name?a.get(u.name):c.find(p=>p.re.test(u.path)),!d)throw ye(1,{location:f,currentLocation:u});m=d.record.name,h=_2({},u.params,f.params),v=d.stringify(h)}const C=[];let H=d;for(;H;)C.unshift(H.record),H=H.parent;return{name:m,path:v,params:h,matched:C,meta:lM(C)}}return t.forEach(f=>n(f)),{addRoute:n,resolve:l,removeRoute:i,getRoutes:r,getRecordMatcher:s}}function nr(t,e){const c={};for(const a of e)a in t&&(c[a]=t[a]);return c}function rM(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:oM(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function oM(t){const e={},c=t.props||!1;if("component"in t)e.default=c;else for(const a in t.components)e[a]=typeof c=="object"?c[a]:c;return e}function ir(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lM(t){return t.reduce((e,c)=>_2(e,c.meta),{})}function rr(t,e){const c={};for(const a in t)c[a]=a in e?e[a]:t[a];return c}function go(t,e){return e.children.some(c=>c===t||go(t,c))}const Ho=/#/g,fM=/&/g,uM=/\//g,dM=/=/g,hM=/\?/g,zo=/\+/g,pM=/%5B/g,mM=/%5D/g,Co=/%5E/g,vM=/%60/g,Mo=/%7B/g,gM=/%7C/g,Vo=/%7D/g,HM=/%20/g;function qa(t){return encodeURI(""+t).replace(gM,"|").replace(pM,"[").replace(mM,"]")}function zM(t){return qa(t).replace(Mo,"{").replace(Vo,"}").replace(Co,"^")}function k8(t){return qa(t).replace(zo,"%2B").replace(HM,"+").replace(Ho,"%23").replace(fM,"%26").replace(vM,"`").replace(Mo,"{").replace(Vo,"}").replace(Co,"^")}function CM(t){return k8(t).replace(dM,"%3D")}function MM(t){return qa(t).replace(Ho,"%23").replace(hM,"%3F")}function VM(t){return t==null?"":MM(t).replace(uM,"%2F")}function J0(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function _M(t){const e={};if(t===""||t==="?")return e;const a=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<a.length;++s){const n=a[s].replace(zo," "),i=n.indexOf("="),r=J0(i<0?n:n.slice(0,i)),o=i<0?null:J0(n.slice(i+1));if(r in e){let l=e[r];X1(l)||(l=e[r]=[l]),l.push(o)}else e[r]=o}return e}function or(t){let e="";for(let c in t){const a=t[c];if(c=CM(c),a==null){a!==void 0&&(e+=(e.length?"&":"")+c);continue}(X1(a)?a.map(n=>n&&k8(n)):[a&&k8(a)]).forEach(n=>{n!==void 0&&(e+=(e.length?"&":"")+c,n!=null&&(e+="="+n))})}return e}function LM(t){const e={};for(const c in t){const a=t[c];a!==void 0&&(e[c]=X1(a)?a.map(s=>s==null?null:""+s):a==null?a:""+a)}return e}const bM=Symbol(""),lr=Symbol(""),jt=Symbol(""),Ga=Symbol(""),A8=Symbol("");function Qe(){let t=[];function e(a){return t.push(a),()=>{const s=t.indexOf(a);s>-1&&t.splice(s,1)}}function c(){t=[]}return{add:e,list:()=>t.slice(),reset:c}}function F3(t,e,c,a,s){const n=a&&(a.enterCallbacks[s]=a.enterCallbacks[s]||[]);return()=>new Promise((i,r)=>{const o=u=>{u===!1?r(ye(4,{from:c,to:e})):u instanceof Error?r(u):XC(u)?r(ye(2,{from:e,to:u})):(n&&a.enterCallbacks[s]===n&&typeof u=="function"&&n.push(u),i())},l=t.call(a&&a.instances[s],e,c,o);let f=Promise.resolve(l);t.length<3&&(f=f.then(o)),f.catch(u=>r(u))})}function $c(t,e,c,a){const s=[];for(const n of t)for(const i in n.components){let r=n.components[i];if(!(e!=="beforeRouteEnter"&&!n.instances[i]))if(wM(r)){const l=(r.__vccOpts||r)[e];l&&s.push(F3(l,c,a,n,i))}else{let o=r();s.push(()=>o.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${n.path}"`));const f=TC(l)?l.default:l;n.components[i]=f;const d=(f.__vccOpts||f)[e];return d&&F3(d,c,a,n,i)()}))}}return s}function wM(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function fr(t){const e=T1(jt),c=T1(Ga),a=D2(()=>e.resolve(X(t.to))),s=D2(()=>{const{matched:o}=a.value,{length:l}=o,f=o[l-1],u=c.matched;if(!f||!u.length)return-1;const d=u.findIndex(we.bind(null,f));if(d>-1)return d;const h=ur(o[l-2]);return l>1&&ur(f)===h&&u[u.length-1].path!==h?u.findIndex(we.bind(null,o[l-2])):d}),n=D2(()=>s.value>-1&&NM(c.params,a.value.params)),i=D2(()=>s.value>-1&&s.value===c.matched.length-1&&ho(c.params,a.value.params));function r(o={}){return xM(o)?e[X(t.replace)?"replace":"push"](X(t.to)).catch(h6):Promise.resolve()}return{route:a,href:D2(()=>a.value.href),isActive:n,isExactActive:i,navigate:r}}const yM=Ia({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:fr,setup(t,{slots:e}){const c=j6(fr(t)),{options:a}=T1(jt),s=D2(()=>({[dr(t.activeClass,a.linkActiveClass,"router-link-active")]:c.isActive,[dr(t.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:c.isExactActive}));return()=>{const n=e.default&&e.default(c);return t.custom?n:g1("a",{"aria-current":c.isExactActive?t.ariaCurrentValue:null,href:c.href,onClick:c.navigate,class:s.value},n)}}}),SM=yM;function xM(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function NM(t,e){for(const c in e){const a=e[c],s=t[c];if(typeof a=="string"){if(a!==s)return!1}else if(!X1(s)||s.length!==a.length||a.some((n,i)=>n!==s[i]))return!1}return!0}function ur(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const dr=(t,e,c)=>t??e??c,TM=Ia({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:c}){const a=T1(A8),s=D2(()=>t.route||a.value),n=T1(lr,0),i=D2(()=>{let l=X(n);const{matched:f}=s.value;let u;for(;(u=f[l])&&!u.components;)l++;return l}),r=D2(()=>s.value.matched[i.value]);pe(lr,D2(()=>i.value+1)),pe(bM,r),pe(A8,s);const o=d2();return x4(()=>[o.value,r.value,t.name],([l,f,u],[d,h,v])=>{f&&(f.instances[u]=l,h&&h!==f&&l&&l===d&&(f.leaveGuards.size||(f.leaveGuards=h.leaveGuards),f.updateGuards.size||(f.updateGuards=h.updateGuards))),l&&f&&(!h||!we(f,h)||!d)&&(f.enterCallbacks[u]||[]).forEach(m=>m(l))},{flush:"post"}),()=>{const l=s.value,f=t.name,u=r.value,d=u&&u.components[f];if(!d)return hr(c.default,{Component:d,route:l});const h=u.props[f],v=h?h===!0?l.params:typeof h=="function"?h(l):h:null,C=g1(d,_2({},v,e,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(u.instances[f]=null)},ref:o}));return hr(c.default,{Component:C,route:l})||C}}});function hr(t,e){if(!t)return null;const c=t(e);return c.length===1?c[0]:c}const _o=TM;function EM(t){const e=iM(t.routes,t),c=t.parseQuery||_M,a=t.stringifyQuery||or,s=t.history,n=Qe(),i=Qe(),r=Qe(),o=UH(A3);let l=A3;se&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Bc.bind(null,T=>""+T),u=Bc.bind(null,VM),d=Bc.bind(null,J0);function h(T,Y){let q,e2;return mo(T)?(q=e.getRecordMatcher(T),e2=Y):e2=T,e.addRoute(e2,q)}function v(T){const Y=e.getRecordMatcher(T);Y&&e.removeRoute(Y)}function m(){return e.getRoutes().map(T=>T.record)}function C(T){return!!e.getRecordMatcher(T)}function H(T,Y){if(Y=_2({},Y||o.value),typeof T=="string"){const b=Uc(c,T,Y.path),S=e.resolve({path:b.path},Y),E=s.createHref(b.fullPath);return _2(b,S,{params:d(S.params),hash:J0(b.hash),redirectedFrom:void 0,href:E})}let q;if("path"in T)q=_2({},T,{path:Uc(c,T.path,Y.path).path});else{const b=_2({},T.params);for(const S in b)b[S]==null&&delete b[S];q=_2({},T,{params:u(b)}),Y.params=u(Y.params)}const e2=e.resolve(q,Y),V2=T.hash||"";e2.params=f(d(e2.params));const M=AC(a,_2({},T,{hash:zM(V2),path:e2.path})),V=s.createHref(M);return _2({fullPath:M,hash:V2,query:a===or?LM(T.query):T.query||{}},e2,{redirectedFrom:void 0,href:V})}function p(T){return typeof T=="string"?Uc(c,T,o.value.path):_2({},T)}function g(T,Y){if(l!==T)return ye(8,{from:Y,to:T})}function _(T){return $(T)}function L(T){return _(_2(p(T),{replace:!0}))}function k(T){const Y=T.matched[T.matched.length-1];if(Y&&Y.redirect){const{redirect:q}=Y;let e2=typeof q=="function"?q(T):q;return typeof e2=="string"&&(e2=e2.includes("?")||e2.includes("#")?e2=p(e2):{path:e2},e2.params={}),_2({query:T.query,hash:T.hash,params:"path"in e2?{}:T.params},e2)}}function $(T,Y){const q=l=H(T),e2=o.value,V2=T.state,M=T.force,V=T.replace===!0,b=k(q);if(b)return $(_2(p(b),{state:typeof b=="object"?_2({},V2,b.state):V2,force:M,replace:V}),Y||q);const S=q;S.redirectedFrom=Y;let E;return!M&&PC(a,e2,q)&&(E=ye(16,{to:S,from:e2}),W2(e2,e2,!0,!1)),(E?Promise.resolve(E):y(S,e2)).catch(P=>f3(P)?f3(P,2)?P:y2(P):G(P,S,e2)).then(P=>{if(P){if(f3(P,2))return $(_2({replace:V},p(P.to),{state:typeof P.to=="object"?_2({},V2,P.to.state):V2,force:M}),Y||S)}else P=A(S,e2,!0,V,V2);return O(S,e2,P),P})}function N(T,Y){const q=g(T,Y);return q?Promise.reject(q):Promise.resolve()}function w(T){const Y=S2.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(T):T()}function y(T,Y){let q;const[e2,V2,M]=kM(T,Y);q=$c(e2.reverse(),"beforeRouteLeave",T,Y);for(const b of e2)b.leaveGuards.forEach(S=>{q.push(F3(S,T,Y))});const V=N.bind(null,T,Y);return q.push(V),i1(q).then(()=>{q=[];for(const b of n.list())q.push(F3(b,T,Y));return q.push(V),i1(q)}).then(()=>{q=$c(V2,"beforeRouteUpdate",T,Y);for(const b of V2)b.updateGuards.forEach(S=>{q.push(F3(S,T,Y))});return q.push(V),i1(q)}).then(()=>{q=[];for(const b of M)if(b.beforeEnter)if(X1(b.beforeEnter))for(const S of b.beforeEnter)q.push(F3(S,T,Y));else q.push(F3(b.beforeEnter,T,Y));return q.push(V),i1(q)}).then(()=>(T.matched.forEach(b=>b.enterCallbacks={}),q=$c(M,"beforeRouteEnter",T,Y),q.push(V),i1(q))).then(()=>{q=[];for(const b of i.list())q.push(F3(b,T,Y));return q.push(V),i1(q)}).catch(b=>f3(b,8)?b:Promise.reject(b))}function O(T,Y,q){r.list().forEach(e2=>w(()=>e2(T,Y,q)))}function A(T,Y,q,e2,V2){const M=g(T,Y);if(M)return M;const V=Y===A3,b=se?history.state:{};q&&(e2||V?s.replace(T.fullPath,_2({scroll:V&&b&&b.scroll},V2)):s.push(T.fullPath,V2)),o.value=T,W2(T,Y,q,V),y2()}let x;function R(){x||(x=s.listen((T,Y,q)=>{if(!x1.listening)return;const e2=H(T),V2=k(e2);if(V2){$(_2(V2,{replace:!0}),e2).catch(h6);return}l=e2;const M=o.value;se&&$C(er(M.fullPath,q.delta),Gt()),y(e2,M).catch(V=>f3(V,12)?V:f3(V,2)?($(V.to,e2).then(b=>{f3(b,20)&&!q.delta&&q.type===S6.pop&&s.go(-1,!1)}).catch(h6),Promise.reject()):(q.delta&&s.go(-q.delta,!1),G(V,e2,M))).then(V=>{V=V||A(e2,M,!1),V&&(q.delta&&!f3(V,8)?s.go(-q.delta,!1):q.type===S6.pop&&f3(V,20)&&s.go(-1,!1)),O(e2,M,V)}).catch(h6)}))}let D=Qe(),U=Qe(),l2;function G(T,Y,q){y2(T);const e2=U.list();return e2.length?e2.forEach(V2=>V2(T,Y,q)):console.error(T),Promise.reject(T)}function f2(){return l2&&o.value!==A3?Promise.resolve():new Promise((T,Y)=>{D.add([T,Y])})}function y2(T){return l2||(l2=!T,R(),D.list().forEach(([Y,q])=>T?q(T):Y()),D.reset()),T}function W2(T,Y,q,e2){const{scrollBehavior:V2}=t;if(!se||!V2)return Promise.resolve();const M=!q&&WC(er(T.fullPath,0))||(e2||!q)&&history.state&&history.state.scroll||null;return Ot().then(()=>V2(T,Y,M)).then(V=>V&&UC(V)).catch(V=>G(V,T,Y))}const U2=T=>s.go(T);let u2;const S2=new Set,x1={currentRoute:o,listening:!0,addRoute:h,removeRoute:v,hasRoute:C,getRoutes:m,resolve:H,options:t,push:_,replace:L,go:U2,back:()=>U2(-1),forward:()=>U2(1),beforeEach:n.add,beforeResolve:i.add,afterEach:r.add,onError:U.add,isReady:f2,install(T){const Y=this;T.component("RouterLink",SM),T.component("RouterView",_o),T.config.globalProperties.$router=Y,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>X(o)}),se&&!u2&&o.value===A3&&(u2=!0,_(s.location).catch(V2=>{}));const q={};for(const V2 in A3)Object.defineProperty(q,V2,{get:()=>o.value[V2],enumerable:!0});T.provide(jt,Y),T.provide(Ga,N7(q)),T.provide(A8,o);const e2=T.unmount;S2.add(T),T.unmount=function(){S2.delete(T),S2.size<1&&(l=A3,x&&x(),x=null,o.value=A3,u2=!1,l2=!1),e2()}}};function i1(T){return T.reduce((Y,q)=>Y.then(()=>w(q)),Promise.resolve())}return x1}function kM(t,e){const c=[],a=[],s=[],n=Math.max(e.matched.length,t.matched.length);for(let i=0;i<n;i++){const r=e.matched[i];r&&(t.matched.find(l=>we(l,r))?a.push(r):c.push(r));const o=t.matched[i];o&&(e.matched.find(l=>we(l,o))||s.push(o))}return[c,a,s]}function P1(){return T1(jt)}function AM(){return T1(Ga)}const K2=(t,e)=>{const c=t.__vccOpts||t;for(const[a,s]of e)c[a]=s;return c},Fe=t=>(h1("data-v-a3f78a7f"),t=t(),p1(),t),PM={class:"footer"},IM={class:"container"},RM=J1('<div class="subscribe_wrapper" data-v-a3f78a7f><div class="booking" data-v-a3f78a7f>訂閱電子報</div><div class="divider" data-v-a3f78a7f></div><div class="email" data-v-a3f78a7f><input type="email" data-v-a3f78a7f><button data-v-a3f78a7f> → </button></div><div class="check" data-v-a3f78a7f><input type="checkbox" id="blue" name="color" value="blue" data-v-a3f78a7f><p data-v-a3f78a7f>訂閱電子報，讓我們提供您最新的相關資訊。若您選擇訂閱，即表示您已閱讀並了解我們的隱私權政策。</p></div></div>',1),OM={class:"wrapper"},DM=Fe(()=>z("div",{class:"mainTitle"},"訂單與諮詢",-1)),FM=Fe(()=>z("div",{class:"divider"},null,-1)),BM={class:"contact"},UM=Fe(()=>z("p",null,"常見問答",-1)),$M=Fe(()=>z("p",null,"寄送規則",-1)),WM=Fe(()=>z("p",null,"我要退貨",-1)),qM=Fe(()=>z("p",null,"訂單查詢",-1)),GM=J1('<div class="wrapper" data-v-a3f78a7f><div class="mainTitle" data-v-a3f78a7f>服務</div><div class="divider" data-v-a3f78a7f></div><p data-v-a3f78a7f>企業贈禮</p><p data-v-a3f78a7f>線上客服</p><p data-v-a3f78a7f>預約保養</p></div><div class="wrapper" data-v-a3f78a7f><div class="mainTitle" data-v-a3f78a7f>所在區域</div><div class="divider" data-v-a3f78a7f></div><p data-v-a3f78a7f>地點：台灣</p><p data-v-a3f78a7f>語言：繁體中文</p></div><div class="eco_wrapper" data-v-a3f78a7f><div class="mainTitle" data-v-a3f78a7f>環境永續性</div><div class="divider" data-v-a3f78a7f></div><p data-v-a3f78a7f>所有產品均為天然純素，且所有成分未進行動物測試實驗。我們是一間擁有跳躍小兔（Leaping Bunny）與 B 型共益企業（B Corporation）認證的公司。 了解更多</p></div><div class="wrapper" data-v-a3f78a7f><div class="mainTitle" data-v-a3f78a7f>關於我們</div><div class="divider" data-v-a3f78a7f></div><p data-v-a3f78a7f>品牌故事</p><p data-v-a3f78a7f>招聘人才</p><p data-v-a3f78a7f>隱私權政策</p></div><div class="wrapper" data-v-a3f78a7f><div class="mainTitle" data-v-a3f78a7f>社群媒體</div><div class="divider" data-v-a3f78a7f></div><p data-v-a3f78a7f>Instagram</p><p data-v-a3f78a7f>Facebook</p><p data-v-a3f78a7f>Twitter</p></div>',5),jM={__name:"Footer",setup(t){return P1(),(e,c)=>{const a=Y1("RouterLink");return Q(),s2("div",PM,[z("div",IM,[RM,z("div",OM,[DM,FM,z("div",BM,[t2(a,{to:"/contact"},{default:R2(()=>[b1("聯絡我們↗")]),_:1})]),UM,$M,WM,qM]),GM])])}}},KM=K2(jM,[["__scopeId","data-v-a3f78a7f"]]);var pr={};/**
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
 */const Lo={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const F=function(t,e){if(!t)throw Be(e)},Be=function(t){return new Error("Firebase Database ("+Lo.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const bo=function(t){const e=[];let c=0;for(let a=0;a<t.length;a++){let s=t.charCodeAt(a);s<128?e[c++]=s:s<2048?(e[c++]=s>>6|192,e[c++]=s&63|128):(s&64512)===55296&&a+1<t.length&&(t.charCodeAt(a+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++a)&1023),e[c++]=s>>18|240,e[c++]=s>>12&63|128,e[c++]=s>>6&63|128,e[c++]=s&63|128):(e[c++]=s>>12|224,e[c++]=s>>6&63|128,e[c++]=s&63|128)}return e},YM=function(t){const e=[];let c=0,a=0;for(;c<t.length;){const s=t[c++];if(s<128)e[a++]=String.fromCharCode(s);else if(s>191&&s<224){const n=t[c++];e[a++]=String.fromCharCode((s&31)<<6|n&63)}else if(s>239&&s<365){const n=t[c++],i=t[c++],r=t[c++],o=((s&7)<<18|(n&63)<<12|(i&63)<<6|r&63)-65536;e[a++]=String.fromCharCode(55296+(o>>10)),e[a++]=String.fromCharCode(56320+(o&1023))}else{const n=t[c++],i=t[c++];e[a++]=String.fromCharCode((s&15)<<12|(n&63)<<6|i&63)}}return e.join("")},ja={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const c=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let s=0;s<t.length;s+=3){const n=t[s],i=s+1<t.length,r=i?t[s+1]:0,o=s+2<t.length,l=o?t[s+2]:0,f=n>>2,u=(n&3)<<4|r>>4;let d=(r&15)<<2|l>>6,h=l&63;o||(h=64,i||(d=64)),a.push(c[f],c[u],c[d],c[h])}return a.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bo(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):YM(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const c=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let s=0;s<t.length;){const n=c[t.charAt(s++)],r=s<t.length?c[t.charAt(s)]:0;++s;const l=s<t.length?c[t.charAt(s)]:64;++s;const u=s<t.length?c[t.charAt(s)]:64;if(++s,n==null||r==null||l==null||u==null)throw new XM;const d=n<<2|r>>4;if(a.push(d),l!==64){const h=r<<4&240|l>>2;if(a.push(h),u!==64){const v=l<<6&192|u;a.push(v)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class XM extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wo=function(t){const e=bo(t);return ja.encodeByteArray(e,!0)},Z0=function(t){return wo(t).replace(/\./g,"")},et=function(t){try{return ja.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function QM(t){return yo(void 0,t)}function yo(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const c=e;return new Date(c.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const c in e)!e.hasOwnProperty(c)||!JM(c)||(t[c]=yo(t[c],e[c]));return t}function JM(t){return t!=="__proto__"}/**
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
 */function ZM(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const eV=()=>ZM().__FIREBASE_DEFAULTS__,tV=()=>{if(typeof process>"u"||typeof pr>"u")return;const t=pr.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cV=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&et(t[1]);return e&&JSON.parse(e)},Ka=()=>{try{return eV()||tV()||cV()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},So=t=>{var e,c;return(c=(e=Ka())===null||e===void 0?void 0:e.emulatorHosts)===null||c===void 0?void 0:c[t]},Ya=t=>{const e=So(t);if(!e)return;const c=e.lastIndexOf(":");if(c<=0||c+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(c+1),10);return e[0]==="["?[e.substring(1,c-1),a]:[e.substring(0,c),a]},xo=()=>{var t;return(t=Ka())===null||t===void 0?void 0:t.config},No=t=>{var e;return(e=Ka())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */function To(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const c={alg:"none",type:"JWT"},a=e||"demo-project",s=t.iat||0,n=t.sub||t.user_id;if(!n)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:s,exp:s+3600,auth_time:s,sub:n,user_id:n,firebase:{sign_in_provider:"custom",identities:{}}},t),r="";return[Z0(JSON.stringify(c)),Z0(JSON.stringify(i)),r].join(".")}/**
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
 */function o1(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(o1())}function aV(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Eo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sV(){const t=o1();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ko(){return Lo.NODE_ADMIN===!0}function nV(){try{return typeof indexedDB=="object"}catch{return!1}}function iV(){return new Promise((t,e)=>{try{let c=!0;const a="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(a);s.onsuccess=()=>{s.result.close(),c||self.indexedDB.deleteDatabase(a),t(!0)},s.onupgradeneeded=()=>{c=!1},s.onerror=()=>{var n;e(((n=s.error)===null||n===void 0?void 0:n.message)||"")}}catch(c){e(c)}})}/**
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
 */const rV="FirebaseError";class N3 extends Error{constructor(e,c,a){super(c),this.code=e,this.customData=a,this.name=rV,Object.setPrototypeOf(this,N3.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Y6.prototype.create)}}class Y6{constructor(e,c,a){this.service=e,this.serviceName=c,this.errors=a}create(e,...c){const a=c[0]||{},s=`${this.service}/${e}`,n=this.errors[e],i=n?oV(n,a):"Error",r=`${this.serviceName}: ${i} (${s}).`;return new N3(s,r,a)}}function oV(t,e){return t.replace(lV,(c,a)=>{const s=e[a];return s!=null?String(s):`<${a}?>`})}const lV=/\{\$([^}]+)}/g;/**
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
 */function x6(t){return JSON.parse(t)}function e1(t){return JSON.stringify(t)}/**
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
 */const Ao=function(t){let e={},c={},a={},s="";try{const n=t.split(".");e=x6(et(n[0])||""),c=x6(et(n[1])||""),s=n[2],a=c.d||{},delete c.d}catch{}return{header:e,claims:c,data:a,signature:s}},fV=function(t){const e=Ao(t),c=e.claims;return!!c&&typeof c=="object"&&c.hasOwnProperty("iat")},uV=function(t){const e=Ao(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function l3(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Se(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function P8(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function tt(t,e,c){const a={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(a[s]=e.call(c,t[s],s,t));return a}function ct(t,e){if(t===e)return!0;const c=Object.keys(t),a=Object.keys(e);for(const s of c){if(!a.includes(s))return!1;const n=t[s],i=e[s];if(mr(n)&&mr(i)){if(!ct(n,i))return!1}else if(n!==i)return!1}for(const s of a)if(!c.includes(s))return!1;return!0}function mr(t){return t!==null&&typeof t=="object"}/**
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
 */function Ue(t){const e=[];for(const[c,a]of Object.entries(t))Array.isArray(a)?a.forEach(s=>{e.push(encodeURIComponent(c)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(c)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function i6(t){const e={};return t.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[s,n]=a.split("=");e[decodeURIComponent(s)]=decodeURIComponent(n)}}),e}function r6(t){const e=t.indexOf("?");if(!e)return"";const c=t.indexOf("#",e);return t.substring(e,c>0?c:void 0)}/**
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
 */class dV{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,c){c||(c=0);const a=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)a[u]=e.charCodeAt(c)<<24|e.charCodeAt(c+1)<<16|e.charCodeAt(c+2)<<8|e.charCodeAt(c+3),c+=4;else for(let u=0;u<16;u++)a[u]=e[c]<<24|e[c+1]<<16|e[c+2]<<8|e[c+3],c+=4;for(let u=16;u<80;u++){const d=a[u-3]^a[u-8]^a[u-14]^a[u-16];a[u]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],n=this.chain_[1],i=this.chain_[2],r=this.chain_[3],o=this.chain_[4],l,f;for(let u=0;u<80;u++){u<40?u<20?(l=r^n&(i^r),f=1518500249):(l=n^i^r,f=1859775393):u<60?(l=n&i|r&(n|i),f=2400959708):(l=n^i^r,f=3395469782);const d=(s<<5|s>>>27)+l+o+f+a[u]&4294967295;o=r,r=i,i=(n<<30|n>>>2)&4294967295,n=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+n&4294967295,this.chain_[2]=this.chain_[2]+i&4294967295,this.chain_[3]=this.chain_[3]+r&4294967295,this.chain_[4]=this.chain_[4]+o&4294967295}update(e,c){if(e==null)return;c===void 0&&(c=e.length);const a=c-this.blockSize;let s=0;const n=this.buf_;let i=this.inbuf_;for(;s<c;){if(i===0)for(;s<=a;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<c;)if(n[i]=e.charCodeAt(s),++i,++s,i===this.blockSize){this.compress_(n),i=0;break}}else for(;s<c;)if(n[i]=e[s],++i,++s,i===this.blockSize){this.compress_(n),i=0;break}}this.inbuf_=i,this.total_+=c}digest(){const e=[];let c=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=c&255,c/=256;this.compress_(this.buf_);let a=0;for(let s=0;s<5;s++)for(let n=24;n>=0;n-=8)e[a]=this.chain_[s]>>n&255,++a;return e}}function hV(t,e){const c=new pV(t,e);return c.subscribe.bind(c)}class pV{constructor(e,c){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=c,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(c=>{c.next(e)})}error(e){this.forEachObserver(c=>{c.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,c,a){let s;if(e===void 0&&c===void 0&&a===void 0)throw new Error("Missing Observer.");mV(e,["next","error","complete"])?s=e:s={next:e,error:c,complete:a},s.next===void 0&&(s.next=Wc),s.error===void 0&&(s.error=Wc),s.complete===void 0&&(s.complete=Wc);const n=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),n}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let c=0;c<this.observers.length;c++)this.sendOne(c,e)}sendOne(e,c){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{c(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mV(t,e){if(typeof t!="object"||t===null)return!1;for(const c of e)if(c in t&&typeof t[c]=="function")return!0;return!1}function Wc(){}function Kt(t,e){return`${t} failed: ${e} argument `}/**
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
 */const vV=function(t){const e=[];let c=0;for(let a=0;a<t.length;a++){let s=t.charCodeAt(a);if(s>=55296&&s<=56319){const n=s-55296;a++,F(a<t.length,"Surrogate pair missing trail surrogate.");const i=t.charCodeAt(a)-56320;s=65536+(n<<10)+i}s<128?e[c++]=s:s<2048?(e[c++]=s>>6|192,e[c++]=s&63|128):s<65536?(e[c++]=s>>12|224,e[c++]=s>>6&63|128,e[c++]=s&63|128):(e[c++]=s>>18|240,e[c++]=s>>12&63|128,e[c++]=s>>6&63|128,e[c++]=s&63|128)}return e},Yt=function(t){let e=0;for(let c=0;c<t.length;c++){const a=t.charCodeAt(c);a<128?e++:a<2048?e+=2:a>=55296&&a<=56319?(e+=4,c++):e+=3}return e};/**
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
 */function Y2(t){return t&&t._delegate?t._delegate:t}class _3{constructor(e,c,a){this.name=e,this.instanceFactory=c,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const v4="[DEFAULT]";/**
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
 */class gV{constructor(e,c){this.name=e,this.container=c,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const c=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(c)){const a=new K6;if(this.instancesDeferred.set(c,a),this.isInitialized(c)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:c});s&&a.resolve(s)}catch{}}return this.instancesDeferred.get(c).promise}getImmediate(e){var c;const a=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(c=e==null?void 0:e.optional)!==null&&c!==void 0?c:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(n){if(s)return null;throw n}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zV(e))try{this.getOrInitializeService({instanceIdentifier:v4})}catch{}for(const[c,a]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(c);try{const n=this.getOrInitializeService({instanceIdentifier:s});a.resolve(n)}catch{}}}}clearInstance(e=v4){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(c=>"INTERNAL"in c).map(c=>c.INTERNAL.delete()),...e.filter(c=>"_delete"in c).map(c=>c._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=v4){return this.instances.has(e)}getOptions(e=v4){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:c={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:a,options:c});for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);a===r&&i.resolve(s)}return s}onInit(e,c){var a;const s=this.normalizeInstanceIdentifier(c),n=(a=this.onInitCallbacks.get(s))!==null&&a!==void 0?a:new Set;n.add(e),this.onInitCallbacks.set(s,n);const i=this.instances.get(s);return i&&e(i,s),()=>{n.delete(e)}}invokeOnInitCallbacks(e,c){const a=this.onInitCallbacks.get(c);if(a)for(const s of a)try{s(e,c)}catch{}}getOrInitializeService({instanceIdentifier:e,options:c={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:HV(e),options:c}),this.instances.set(e,a),this.instancesOptions.set(e,c),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=v4){return this.component?this.component.multipleInstances?e:v4:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HV(t){return t===v4?void 0:t}function zV(t){return t.instantiationMode==="EAGER"}/**
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
 */class CV{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const c=this.getProvider(e.name);if(c.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);c.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const c=new gV(e,this);return this.providers.set(e,c),c}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var b2;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(b2||(b2={}));const MV={debug:b2.DEBUG,verbose:b2.VERBOSE,info:b2.INFO,warn:b2.WARN,error:b2.ERROR,silent:b2.SILENT},VV=b2.INFO,_V={[b2.DEBUG]:"log",[b2.VERBOSE]:"log",[b2.INFO]:"info",[b2.WARN]:"warn",[b2.ERROR]:"error"},LV=(t,e,...c)=>{if(e<t.logLevel)return;const a=new Date().toISOString(),s=_V[e];if(s)console[s](`[${a}]  ${t.name}:`,...c);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qa{constructor(e){this.name=e,this._logLevel=VV,this._logHandler=LV,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in b2))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?MV[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,b2.DEBUG,...e),this._logHandler(this,b2.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,b2.VERBOSE,...e),this._logHandler(this,b2.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,b2.INFO,...e),this._logHandler(this,b2.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,b2.WARN,...e),this._logHandler(this,b2.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,b2.ERROR,...e),this._logHandler(this,b2.ERROR,...e)}}const bV=(t,e)=>e.some(c=>t instanceof c);let vr,gr;function wV(){return vr||(vr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yV(){return gr||(gr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Po=new WeakMap,I8=new WeakMap,Io=new WeakMap,qc=new WeakMap,Ja=new WeakMap;function SV(t){const e=new Promise((c,a)=>{const s=()=>{t.removeEventListener("success",n),t.removeEventListener("error",i)},n=()=>{c(Z3(t.result)),s()},i=()=>{a(t.error),s()};t.addEventListener("success",n),t.addEventListener("error",i)});return e.then(c=>{c instanceof IDBCursor&&Po.set(c,t)}).catch(()=>{}),Ja.set(e,t),e}function xV(t){if(I8.has(t))return;const e=new Promise((c,a)=>{const s=()=>{t.removeEventListener("complete",n),t.removeEventListener("error",i),t.removeEventListener("abort",i)},n=()=>{c(),s()},i=()=>{a(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",n),t.addEventListener("error",i),t.addEventListener("abort",i)});I8.set(t,e)}let R8={get(t,e,c){if(t instanceof IDBTransaction){if(e==="done")return I8.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Io.get(t);if(e==="store")return c.objectStoreNames[1]?void 0:c.objectStore(c.objectStoreNames[0])}return Z3(t[e])},set(t,e,c){return t[e]=c,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function NV(t){R8=t(R8)}function TV(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...c){const a=t.call(Gc(this),e,...c);return Io.set(a,e.sort?e.sort():[e]),Z3(a)}:yV().includes(t)?function(...e){return t.apply(Gc(this),e),Z3(Po.get(this))}:function(...e){return Z3(t.apply(Gc(this),e))}}function EV(t){return typeof t=="function"?TV(t):(t instanceof IDBTransaction&&xV(t),bV(t,wV())?new Proxy(t,R8):t)}function Z3(t){if(t instanceof IDBRequest)return SV(t);if(qc.has(t))return qc.get(t);const e=EV(t);return e!==t&&(qc.set(t,e),Ja.set(e,t)),e}const Gc=t=>Ja.get(t);function kV(t,e,{blocked:c,upgrade:a,blocking:s,terminated:n}={}){const i=indexedDB.open(t,e),r=Z3(i);return a&&i.addEventListener("upgradeneeded",o=>{a(Z3(i.result),o.oldVersion,o.newVersion,Z3(i.transaction),o)}),c&&i.addEventListener("blocked",o=>c(o.oldVersion,o.newVersion,o)),r.then(o=>{n&&o.addEventListener("close",()=>n()),s&&o.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),r}const AV=["get","getKey","getAll","getAllKeys","count"],PV=["put","add","delete","clear"],jc=new Map;function Hr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jc.get(e))return jc.get(e);const c=e.replace(/FromIndex$/,""),a=e!==c,s=PV.includes(c);if(!(c in(a?IDBIndex:IDBObjectStore).prototype)||!(s||AV.includes(c)))return;const n=async function(i,...r){const o=this.transaction(i,s?"readwrite":"readonly");let l=o.store;return a&&(l=l.index(r.shift())),(await Promise.all([l[c](...r),s&&o.done]))[0]};return jc.set(e,n),n}NV(t=>({...t,get:(e,c,a)=>Hr(e,c)||t.get(e,c,a),has:(e,c)=>!!Hr(e,c)||t.has(e,c)}));/**
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
 */class IV{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(c=>{if(RV(c)){const a=c.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(c=>c).join(" ")}}function RV(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const O8="@firebase/app",zr="0.9.29";/**
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
 */const R4=new Qa("@firebase/app"),OV="@firebase/app-compat",DV="@firebase/analytics-compat",FV="@firebase/analytics",BV="@firebase/app-check-compat",UV="@firebase/app-check",$V="@firebase/auth",WV="@firebase/auth-compat",qV="@firebase/database",GV="@firebase/database-compat",jV="@firebase/functions",KV="@firebase/functions-compat",YV="@firebase/installations",XV="@firebase/installations-compat",QV="@firebase/messaging",JV="@firebase/messaging-compat",ZV="@firebase/performance",e_="@firebase/performance-compat",t_="@firebase/remote-config",c_="@firebase/remote-config-compat",a_="@firebase/storage",s_="@firebase/storage-compat",n_="@firebase/firestore",i_="@firebase/firestore-compat",r_="firebase",o_="10.9.0";/**
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
 */const D8="[DEFAULT]",l_={[O8]:"fire-core",[OV]:"fire-core-compat",[FV]:"fire-analytics",[DV]:"fire-analytics-compat",[UV]:"fire-app-check",[BV]:"fire-app-check-compat",[$V]:"fire-auth",[WV]:"fire-auth-compat",[qV]:"fire-rtdb",[GV]:"fire-rtdb-compat",[jV]:"fire-fn",[KV]:"fire-fn-compat",[YV]:"fire-iid",[XV]:"fire-iid-compat",[QV]:"fire-fcm",[JV]:"fire-fcm-compat",[ZV]:"fire-perf",[e_]:"fire-perf-compat",[t_]:"fire-rc",[c_]:"fire-rc-compat",[a_]:"fire-gcs",[s_]:"fire-gcs-compat",[n_]:"fire-fst",[i_]:"fire-fst-compat","fire-js":"fire-js",[r_]:"fire-js-all"};/**
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
 */const at=new Map,F8=new Map;function f_(t,e){try{t.container.addComponent(e)}catch(c){R4.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,c)}}function a4(t){const e=t.name;if(F8.has(e))return R4.debug(`There were multiple attempts to register component ${e}.`),!1;F8.set(e,t);for(const c of at.values())f_(c,t);return!0}function X6(t,e){const c=t.container.getProvider("heartbeat").getImmediate({optional:!0});return c&&c.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const u_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},e4=new Y6("app","Firebase",u_);/**
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
 */class d_{constructor(e,c,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},c),this._name=c.name,this._automaticDataCollectionEnabled=c.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new _3("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw e4.create("app-deleted",{appName:this._name})}}/**
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
 */const Y4=o_;function Ro(t,e={}){let c=t;typeof e!="object"&&(e={name:e});const a=Object.assign({name:D8,automaticDataCollectionEnabled:!1},e),s=a.name;if(typeof s!="string"||!s)throw e4.create("bad-app-name",{appName:String(s)});if(c||(c=xo()),!c)throw e4.create("no-options");const n=at.get(s);if(n){if(ct(c,n.options)&&ct(a,n.config))return n;throw e4.create("duplicate-app",{appName:s})}const i=new CV(s);for(const o of F8.values())i.addComponent(o);const r=new d_(c,a,i);return at.set(s,r),r}function Xt(t=D8){const e=at.get(t);if(!e&&t===D8&&xo())return Ro();if(!e)throw e4.create("no-app",{appName:t});return e}function E1(t,e,c){var a;let s=(a=l_[t])!==null&&a!==void 0?a:t;c&&(s+=`-${c}`);const n=s.match(/\s|\//),i=e.match(/\s|\//);if(n||i){const r=[`Unable to register library "${s}" with version "${e}":`];n&&r.push(`library name "${s}" contains illegal characters (whitespace or "/")`),n&&i&&r.push("and"),i&&r.push(`version name "${e}" contains illegal characters (whitespace or "/")`),R4.warn(r.join(" "));return}a4(new _3(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const h_="firebase-heartbeat-database",p_=1,N6="firebase-heartbeat-store";let Kc=null;function Oo(){return Kc||(Kc=kV(h_,p_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(N6)}catch(c){console.warn(c)}}}}).catch(t=>{throw e4.create("idb-open",{originalErrorMessage:t.message})})),Kc}async function m_(t){try{const c=(await Oo()).transaction(N6),a=await c.objectStore(N6).get(Do(t));return await c.done,a}catch(e){if(e instanceof N3)R4.warn(e.message);else{const c=e4.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});R4.warn(c.message)}}}async function Cr(t,e){try{const a=(await Oo()).transaction(N6,"readwrite");await a.objectStore(N6).put(e,Do(t)),await a.done}catch(c){if(c instanceof N3)R4.warn(c.message);else{const a=e4.create("idb-set",{originalErrorMessage:c==null?void 0:c.message});R4.warn(a.message)}}}function Do(t){return`${t.name}!${t.options.appId}`}/**
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
 */const v_=1024,g_=30*24*60*60*1e3;class H_{constructor(e){this.container=e,this._heartbeatsCache=null;const c=this.container.getProvider("app").getImmediate();this._storage=new C_(c),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var e,c;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=Mr();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((c=this._heartbeatsCache)===null||c===void 0?void 0:c.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=g_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const c=Mr(),{heartbeatsToSend:a,unsentEntries:s}=z_(this._heartbeatsCache.heartbeats),n=Z0(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=c,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function Mr(){return new Date().toISOString().substring(0,10)}function z_(t,e=v_){const c=[];let a=t.slice();for(const s of t){const n=c.find(i=>i.agent===s.agent);if(n){if(n.dates.push(s.date),Vr(c)>e){n.dates.pop();break}}else if(c.push({agent:s.agent,dates:[s.date]}),Vr(c)>e){c.pop();break}a=a.slice(1)}return{heartbeatsToSend:c,unsentEntries:a}}class C_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nV()?iV().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const c=await m_(this.app);return c!=null&&c.heartbeats?c:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var c;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cr(this.app,{lastSentHeartbeatDate:(c=e.lastSentHeartbeatDate)!==null&&c!==void 0?c:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var c;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cr(this.app,{lastSentHeartbeatDate:(c=e.lastSentHeartbeatDate)!==null&&c!==void 0?c:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Vr(t){return Z0(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function M_(t){a4(new _3("platform-logger",e=>new IV(e),"PRIVATE")),a4(new _3("heartbeat",e=>new H_(e),"PRIVATE")),E1(O8,zr,t),E1(O8,zr,"esm2017"),E1("fire-js","")}M_("");function Za(t,e){var c={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(c[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(t);s<a.length;s++)e.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(t,a[s])&&(c[a[s]]=t[a[s]]);return c}function Fo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const V_=Fo,Bo=new Y6("auth","Firebase",Fo());/**
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
 */const st=new Qa("@firebase/auth");function __(t,...e){st.logLevel<=b2.WARN&&st.warn(`Auth (${Y4}): ${t}`,...e)}function F0(t,...e){st.logLevel<=b2.ERROR&&st.error(`Auth (${Y4}): ${t}`,...e)}/**
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
 */function A1(t,...e){throw es(t,...e)}function n3(t,...e){return es(t,...e)}function Uo(t,e,c){const a=Object.assign(Object.assign({},V_()),{[e]:c});return new Y6("auth","Firebase",a).create(e,{appName:t.name})}function L_(t,e,c){const a=c;if(!(e instanceof a))throw a.name!==e.constructor.name&&A1(t,"argument-error"),Uo(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function es(t,...e){if(typeof t!="string"){const c=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=t.name),t._errorFactory.create(c,...a)}return Bo.create(t,...e)}function o2(t,e,...c){if(!t)throw es(e,...c)}function v3(t){const e="INTERNAL ASSERTION FAILED: "+t;throw F0(e),new Error(e)}function L3(t,e){t||v3(e)}/**
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
 */function B8(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function b_(){return _r()==="http:"||_r()==="https:"}function _r(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function w_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(b_()||aV()||"connection"in navigator)?navigator.onLine:!0}function y_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Q6{constructor(e,c){this.shortDelay=e,this.longDelay=c,L3(c>e,"Short delay should be less than long delay!"),this.isMobile=Xa()||Eo()}get(){return w_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ts(t,e){L3(t.emulator,"Emulator should always be set here");const{url:c}=t.emulator;return e?`${c}${e.startsWith("/")?e.slice(1):e}`:c}/**
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
 */class $o{static initialize(e,c,a){this.fetchImpl=e,c&&(this.headersImpl=c),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;v3("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;v3("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;v3("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const S_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const x_=new Q6(3e4,6e4);function l4(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function f4(t,e,c,a,s={}){return Wo(t,s,async()=>{let n={},i={};a&&(e==="GET"?i=a:n={body:JSON.stringify(a)});const r=Ue(Object.assign({key:t.config.apiKey},i)).slice(1),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/json",t.languageCode&&(o["X-Firebase-Locale"]=t.languageCode),$o.fetch()(qo(t,t.config.apiHost,c,r),Object.assign({method:e,headers:o,referrerPolicy:"no-referrer"},n))})}async function Wo(t,e,c){t._canInitEmulator=!1;const a=Object.assign(Object.assign({},S_),e);try{const s=new T_(t),n=await Promise.race([c(),s.promise]);s.clearNetworkTimeout();const i=await n.json();if("needConfirmation"in i)throw C0(t,"account-exists-with-different-credential",i);if(n.ok&&!("errorMessage"in i))return i;{const r=n.ok?i.errorMessage:i.error.message,[o,l]=r.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw C0(t,"credential-already-in-use",i);if(o==="EMAIL_EXISTS")throw C0(t,"email-already-in-use",i);if(o==="USER_DISABLED")throw C0(t,"user-disabled",i);const f=a[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Uo(t,f,l);A1(t,f)}}catch(s){if(s instanceof N3)throw s;A1(t,"network-request-failed",{message:String(s)})}}async function J6(t,e,c,a,s={}){const n=await f4(t,e,c,a,s);return"mfaPendingCredential"in n&&A1(t,"multi-factor-auth-required",{_serverResponse:n}),n}function qo(t,e,c,a){const s=`${e}${c}?${a}`;return t.config.emulator?ts(t.config,s):`${t.config.apiScheme}://${s}`}function N_(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class T_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((c,a)=>{this.timer=setTimeout(()=>a(n3(this.auth,"network-request-failed")),x_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function C0(t,e,c){const a={appName:t.name};c.email&&(a.email=c.email),c.phoneNumber&&(a.phoneNumber=c.phoneNumber);const s=n3(t,e,a);return s.customData._tokenResponse=c,s}function Lr(t){return t!==void 0&&t.enterprise!==void 0}class E_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const c of this.recaptchaEnforcementState)if(c.provider&&c.provider===e)return N_(c.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function k_(t,e){return f4(t,"GET","/v2/recaptchaConfig",l4(t,e))}/**
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
 */async function A_(t,e){return f4(t,"POST","/v1/accounts:delete",e)}async function P_(t,e){return f4(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function m6(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function I_(t,e=!1){const c=Y2(t),a=await c.getIdToken(e),s=cs(a);o2(s&&s.exp&&s.auth_time&&s.iat,c.auth,"internal-error");const n=typeof s.firebase=="object"?s.firebase:void 0,i=n==null?void 0:n.sign_in_provider;return{claims:s,token:a,authTime:m6(Yc(s.auth_time)),issuedAtTime:m6(Yc(s.iat)),expirationTime:m6(Yc(s.exp)),signInProvider:i||null,signInSecondFactor:(n==null?void 0:n.sign_in_second_factor)||null}}function Yc(t){return Number(t)*1e3}function cs(t){const[e,c,a]=t.split(".");if(e===void 0||c===void 0||a===void 0)return F0("JWT malformed, contained fewer than 3 sections"),null;try{const s=et(c);return s?JSON.parse(s):(F0("Failed to decode base64 JWT payload"),null)}catch(s){return F0("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function R_(t){const e=cs(t);return o2(e,"internal-error"),o2(typeof e.exp<"u","internal-error"),o2(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function T6(t,e,c=!1){if(c)return e;try{return await e}catch(a){throw a instanceof N3&&O_(a)&&t.auth.currentUser===t&&await t.auth.signOut(),a}}function O_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class D_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var c;if(e){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const s=((c=this.user.stsTokenManager.expirationTime)!==null&&c!==void 0?c:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const c=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},c)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Go{constructor(e,c){this.createdAt=e,this.lastLoginAt=c,this._initializeTime()}_initializeTime(){this.lastSignInTime=m6(this.lastLoginAt),this.creationTime=m6(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function nt(t){var e;const c=t.auth,a=await t.getIdToken(),s=await T6(t,P_(c,{idToken:a}));o2(s==null?void 0:s.users.length,c,"internal-error");const n=s.users[0];t._notifyReloadListener(n);const i=!((e=n.providerUserInfo)===null||e===void 0)&&e.length?U_(n.providerUserInfo):[],r=B_(t.providerData,i),o=t.isAnonymous,l=!(t.email&&n.passwordHash)&&!(r!=null&&r.length),f=o?l:!1,u={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:r,metadata:new Go(n.createdAt,n.lastLoginAt),isAnonymous:f};Object.assign(t,u)}async function F_(t){const e=Y2(t);await nt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function B_(t,e){return[...t.filter(a=>!e.some(s=>s.providerId===a.providerId)),...e]}function U_(t){return t.map(e=>{var{providerId:c}=e,a=Za(e,["providerId"]);return{providerId:c,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
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
 */async function $_(t,e){const c=await Wo(t,{},async()=>{const a=Ue({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:n}=t.config,i=qo(t,s,"/v1/token",`key=${n}`),r=await t._getAdditionalHeaders();return r["Content-Type"]="application/x-www-form-urlencoded",$o.fetch()(i,{method:"POST",headers:r,body:a})});return{accessToken:c.access_token,expiresIn:c.expires_in,refreshToken:c.refresh_token}}async function W_(t,e){return f4(t,"POST","/v2/accounts:revokeToken",l4(t,e))}/**
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
 */class E6{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){o2(e.idToken,"internal-error"),o2(typeof e.idToken<"u","internal-error"),o2(typeof e.refreshToken<"u","internal-error");const c="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):R_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,c)}async getToken(e,c=!1){return o2(!this.accessToken||this.refreshToken,e,"user-token-expired"),!c&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,c){const{accessToken:a,refreshToken:s,expiresIn:n}=await $_(e,c);this.updateTokensAndExpiration(a,s,Number(n))}updateTokensAndExpiration(e,c,a){this.refreshToken=c||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,c){const{refreshToken:a,accessToken:s,expirationTime:n}=c,i=new E6;return a&&(o2(typeof a=="string","internal-error",{appName:e}),i.refreshToken=a),s&&(o2(typeof s=="string","internal-error",{appName:e}),i.accessToken=s),n&&(o2(typeof n=="number","internal-error",{appName:e}),i.expirationTime=n),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new E6,this.toJSON())}_performRefresh(){return v3("not implemented")}}/**
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
 */function P3(t,e){o2(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class T4{constructor(e){var{uid:c,auth:a,stsTokenManager:s}=e,n=Za(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new D_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=c,this.auth=a,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new Go(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(e){const c=await T6(this,this.stsTokenManager.getToken(this.auth,e));return o2(c,this.auth,"internal-error"),this.accessToken!==c&&(this.accessToken=c,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),c}getIdTokenResult(e){return I_(this,e)}reload(){return F_(this)}_assign(e){this!==e&&(o2(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(c=>Object.assign({},c)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const c=new T4(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return c.metadata._copy(this.metadata),c}_onReload(e){o2(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,c=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),c&&await nt(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await T6(this,A_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,c){var a,s,n,i,r,o,l,f;const u=(a=c.displayName)!==null&&a!==void 0?a:void 0,d=(s=c.email)!==null&&s!==void 0?s:void 0,h=(n=c.phoneNumber)!==null&&n!==void 0?n:void 0,v=(i=c.photoURL)!==null&&i!==void 0?i:void 0,m=(r=c.tenantId)!==null&&r!==void 0?r:void 0,C=(o=c._redirectEventId)!==null&&o!==void 0?o:void 0,H=(l=c.createdAt)!==null&&l!==void 0?l:void 0,p=(f=c.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:g,emailVerified:_,isAnonymous:L,providerData:k,stsTokenManager:$}=c;o2(g&&$,e,"internal-error");const N=E6.fromJSON(this.name,$);o2(typeof g=="string",e,"internal-error"),P3(u,e.name),P3(d,e.name),o2(typeof _=="boolean",e,"internal-error"),o2(typeof L=="boolean",e,"internal-error"),P3(h,e.name),P3(v,e.name),P3(m,e.name),P3(C,e.name),P3(H,e.name),P3(p,e.name);const w=new T4({uid:g,auth:e,email:d,emailVerified:_,displayName:u,isAnonymous:L,photoURL:v,phoneNumber:h,tenantId:m,stsTokenManager:N,createdAt:H,lastLoginAt:p});return k&&Array.isArray(k)&&(w.providerData=k.map(y=>Object.assign({},y))),C&&(w._redirectEventId=C),w}static async _fromIdTokenResponse(e,c,a=!1){const s=new E6;s.updateFromServerResponse(c);const n=new T4({uid:c.localId,auth:e,stsTokenManager:s,isAnonymous:a});return await nt(n),n}}/**
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
 */const br=new Map;function g3(t){L3(t instanceof Function,"Expected a class definition");let e=br.get(t);return e?(L3(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,br.set(t,e),e)}/**
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
 */class jo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,c){this.storage[e]=c}async _get(e){const c=this.storage[e];return c===void 0?null:c}async _remove(e){delete this.storage[e]}_addListener(e,c){}_removeListener(e,c){}}jo.type="NONE";const wr=jo;/**
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
 */function B0(t,e,c){return`firebase:${t}:${e}:${c}`}class me{constructor(e,c,a){this.persistence=e,this.auth=c,this.userKey=a;const{config:s,name:n}=this.auth;this.fullUserKey=B0(this.userKey,s.apiKey,n),this.fullPersistenceKey=B0("persistence",s.apiKey,n),this.boundEventHandler=c._onStorageEvent.bind(c),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?T4._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const c=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,c)return this.setCurrentUser(c)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,c,a="authUser"){if(!c.length)return new me(g3(wr),e,a);const s=(await Promise.all(c.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let n=s[0]||g3(wr);const i=B0(a,e.config.apiKey,e.name);let r=null;for(const l of c)try{const f=await l._get(i);if(f){const u=T4._fromJSON(e,f);l!==n&&(r=u),n=l;break}}catch{}const o=s.filter(l=>l._shouldAllowMigration);return!n._shouldAllowMigration||!o.length?new me(n,e,a):(n=o[0],r&&await n._set(i,r.toJSON()),await Promise.all(c.map(async l=>{if(l!==n)try{await l._remove(i)}catch{}})),new me(n,e,a))}}/**
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
 */function yr(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xo(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ko(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jo(e))return"Blackberry";if(Zo(e))return"Webos";if(as(e))return"Safari";if((e.includes("chrome/")||Yo(e))&&!e.includes("edge/"))return"Chrome";if(Qo(e))return"Android";{const c=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=t.match(c);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function Ko(t=o1()){return/firefox\//i.test(t)}function as(t=o1()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yo(t=o1()){return/crios\//i.test(t)}function Xo(t=o1()){return/iemobile/i.test(t)}function Qo(t=o1()){return/android/i.test(t)}function Jo(t=o1()){return/blackberry/i.test(t)}function Zo(t=o1()){return/webos/i.test(t)}function Qt(t=o1()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function q_(t=o1()){var e;return Qt(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function G_(){return sV()&&document.documentMode===10}function el(t=o1()){return Qt(t)||Qo(t)||Zo(t)||Jo(t)||/windows phone/i.test(t)||Xo(t)}function j_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function tl(t,e=[]){let c;switch(t){case"Browser":c=yr(o1());break;case"Worker":c=`${yr(o1())}-${t}`;break;default:c=t}const a=e.length?e.join(","):"FirebaseCore-web";return`${c}/JsCore/${Y4}/${a}`}/**
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
 */class K_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,c){const a=n=>new Promise((i,r)=>{try{const o=e(n);i(o)}catch(o){r(o)}});a.onAbort=c,this.queue.push(a);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const c=[];try{for(const a of this.queue)await a(e),a.onAbort&&c.push(a.onAbort)}catch(a){c.reverse();for(const s of c)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
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
 */async function Y_(t,e={}){return f4(t,"GET","/v2/passwordPolicy",l4(t,e))}/**
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
 */const X_=6;class Q_{constructor(e){var c,a,s,n;const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(c=i.minPasswordLength)!==null&&c!==void 0?c:X_,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(a=e.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(n=e.forceUpgradeOnSignin)!==null&&n!==void 0?n:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var c,a,s,n,i,r;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=(c=o.meetsMinPasswordLength)!==null&&c!==void 0?c:!0),o.isValid&&(o.isValid=(a=o.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),o.isValid&&(o.isValid=(s=o.containsLowercaseLetter)!==null&&s!==void 0?s:!0),o.isValid&&(o.isValid=(n=o.containsUppercaseLetter)!==null&&n!==void 0?n:!0),o.isValid&&(o.isValid=(i=o.containsNumericCharacter)!==null&&i!==void 0?i:!0),o.isValid&&(o.isValid=(r=o.containsNonAlphanumericCharacter)!==null&&r!==void 0?r:!0),o}validatePasswordLengthOptions(e,c){const a=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;a&&(c.meetsMinPasswordLength=e.length>=a),s&&(c.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,c){this.updatePasswordCharacterOptionsStatuses(c,!1,!1,!1,!1);let a;for(let s=0;s<e.length;s++)a=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(c,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,c,a,s,n){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=c)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=n))}}/**
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
 */class J_{constructor(e,c,a,s){this.app=e,this.heartbeatServiceProvider=c,this.appCheckServiceProvider=a,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sr(this),this.idTokenSubscription=new Sr(this),this.beforeStateQueue=new K_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,c){return c&&(this._popupRedirectResolver=g3(c)),this._initializationPromise=this.queue(async()=>{var a,s;if(!this._deleted&&(this.persistenceManager=await me.create(this,e),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(c),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var c;const a=await this.assertedPersistence.getCurrentUser();let s=a,n=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(c=this.redirectUser)===null||c===void 0?void 0:c._redirectEventId,r=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===r)&&(o!=null&&o.user)&&(s=o.user,n=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(n)try{await this.beforeStateQueue.runMiddleware(s)}catch(i){s=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return o2(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let c=null;try{c=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return c}async reloadAndSetCurrentUserOrClear(e){try{await nt(e)}catch(c){if((c==null?void 0:c.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=y_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const c=e?Y2(e):null;return c&&o2(c.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(c&&c._clone(this))}async _updateCurrentUser(e,c=!1){if(!this._deleted)return e&&o2(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),c||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(g3(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const c=this._getPasswordPolicyInternal();return c.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):c.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Y_(this),c=new Q_(e);this.tenantId===null?this._projectPasswordPolicy=c:this._tenantPasswordPolicies[this.tenantId]=c}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Y6("auth","Firebase",e())}onAuthStateChanged(e,c,a){return this.registerStateListener(this.authStateSubscription,e,c,a)}beforeAuthStateChanged(e,c){return this.beforeStateQueue.pushCallback(e,c)}onIdTokenChanged(e,c,a){return this.registerStateListener(this.idTokenSubscription,e,c,a)}authStateReady(){return new Promise((e,c)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},c)}})}async revokeAccessToken(e){if(this.currentUser){const c=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:c};this.tenantId!=null&&(a.tenantId=this.tenantId),await W_(this,a)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,c){const a=await this.getOrInitRedirectPersistenceManager(c);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const c=e&&g3(e)||this._popupRedirectResolver;o2(c,this,"argument-error"),this.redirectPersistenceManager=await me.create(this,[g3(c._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var c,a;return this._isInitialized&&await this.queue(async()=>{}),((c=this._currentUser)===null||c===void 0?void 0:c._redirectEventId)===e?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,c;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(c=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&c!==void 0?c:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,c,a,s){if(this._deleted)return()=>{};const n=typeof c=="function"?c:c.next.bind(c);let i=!1;const r=this._isInitialized?Promise.resolve():this._initializationPromise;if(o2(r,this,"internal-error"),r.then(()=>{i||n(this.currentUser)}),typeof c=="function"){const o=e.addObserver(c,a,s);return()=>{i=!0,o()}}else{const o=e.addObserver(c);return()=>{i=!0,o()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return o2(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const c={"X-Client-Version":this.clientVersion};this.app.options.appId&&(c["X-Firebase-gmpid"]=this.app.options.appId);const a=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());a&&(c["X-Firebase-Client"]=a);const s=await this._getAppCheckToken();return s&&(c["X-Firebase-AppCheck"]=s),c}async _getAppCheckToken(){var e;const c=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return c!=null&&c.error&&__(`Error while retrieving App Check token: ${c.error}`),c==null?void 0:c.token}}function u4(t){return Y2(t)}class Sr{constructor(e){this.auth=e,this.observer=null,this.addObserver=hV(c=>this.observer=c)}get next(){return o2(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Jt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Z_(t){Jt=t}function cl(t){return Jt.loadJS(t)}function eL(){return Jt.recaptchaEnterpriseScript}function tL(){return Jt.gapiScript}function cL(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const aL="recaptcha-enterprise",sL="NO_RECAPTCHA";class nL{constructor(e){this.type=aL,this.auth=u4(e)}async verify(e="verify",c=!1){async function a(n){if(!c){if(n.tenantId==null&&n._agentRecaptchaConfig!=null)return n._agentRecaptchaConfig.siteKey;if(n.tenantId!=null&&n._tenantRecaptchaConfigs[n.tenantId]!==void 0)return n._tenantRecaptchaConfigs[n.tenantId].siteKey}return new Promise(async(i,r)=>{k_(n,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(o=>{if(o.recaptchaKey===void 0)r(new Error("recaptcha Enterprise site key undefined"));else{const l=new E_(o);return n.tenantId==null?n._agentRecaptchaConfig=l:n._tenantRecaptchaConfigs[n.tenantId]=l,i(l.siteKey)}}).catch(o=>{r(o)})})}function s(n,i,r){const o=window.grecaptcha;Lr(o)?o.enterprise.ready(()=>{o.enterprise.execute(n,{action:e}).then(l=>{i(l)}).catch(()=>{i(sL)})}):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((n,i)=>{a(this.auth).then(r=>{if(!c&&Lr(window.grecaptcha))s(r,n,i);else{if(typeof window>"u"){i(new Error("RecaptchaVerifier is only supported in browser"));return}let o=eL();o.length!==0&&(o+=r),cl(o).then(()=>{s(r,n,i)}).catch(l=>{i(l)})}}).catch(r=>{i(r)})})}}async function xr(t,e,c,a=!1){const s=new nL(t);let n;try{n=await s.verify(c)}catch{n=await s.verify(c,!0)}const i=Object.assign({},e);return a?Object.assign(i,{captchaResp:n}):Object.assign(i,{captchaResponse:n}),Object.assign(i,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(i,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),i}async function U8(t,e,c,a){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const n=await xr(t,e,c,c==="getOobCode");return a(t,n)}else return a(t,e).catch(async n=>{if(n.code==="auth/missing-recaptcha-token"){console.log(`${c} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await xr(t,e,c,c==="getOobCode");return a(t,i)}else return Promise.reject(n)})}/**
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
 */function iL(t,e){const c=X6(t,"auth");if(c.isInitialized()){const s=c.getImmediate(),n=c.getOptions();if(ct(n,e??{}))return s;A1(s,"already-initialized")}return c.initialize({options:e})}function rL(t,e){const c=(e==null?void 0:e.persistence)||[],a=(Array.isArray(c)?c:[c]).map(g3);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(a,e==null?void 0:e.popupRedirectResolver)}function oL(t,e,c){const a=u4(t);o2(a._canInitEmulator,a,"emulator-config-failed"),o2(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const s=!!(c!=null&&c.disableWarnings),n=al(e),{host:i,port:r}=lL(e),o=r===null?"":`:${r}`;a.config.emulator={url:`${n}//${i}${o}/`},a.settings.appVerificationDisabledForTesting=!0,a.emulatorConfig=Object.freeze({host:i,port:r,protocol:n.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||fL()}function al(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function lL(t){const e=al(t),c=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!c)return{host:"",port:null};const a=c[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(a);if(s){const n=s[1];return{host:n,port:Nr(a.substr(n.length+1))}}else{const[n,i]=a.split(":");return{host:n,port:Nr(i)}}}function Nr(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fL(){function t(){const e=document.createElement("p"),c=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",c.position="fixed",c.width="100%",c.backgroundColor="#ffffff",c.border=".1em solid #000000",c.color="#b50000",c.bottom="0px",c.left="0px",c.margin="0px",c.zIndex="10000",c.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ss{constructor(e,c){this.providerId=e,this.signInMethod=c}toJSON(){return v3("not implemented")}_getIdTokenResponse(e){return v3("not implemented")}_linkToIdToken(e,c){return v3("not implemented")}_getReauthenticationResolver(e){return v3("not implemented")}}async function uL(t,e){return f4(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function dL(t,e){return J6(t,"POST","/v1/accounts:signInWithPassword",l4(t,e))}/**
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
 */async function hL(t,e){return J6(t,"POST","/v1/accounts:signInWithEmailLink",l4(t,e))}async function pL(t,e){return J6(t,"POST","/v1/accounts:signInWithEmailLink",l4(t,e))}/**
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
 */class k6 extends ss{constructor(e,c,a,s=null){super("password",a),this._email=e,this._password=c,this._tenantId=s}static _fromEmailAndPassword(e,c){return new k6(e,c,"password")}static _fromEmailAndCode(e,c,a=null){return new k6(e,c,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const c=typeof e=="string"?JSON.parse(e):e;if(c!=null&&c.email&&(c!=null&&c.password)){if(c.signInMethod==="password")return this._fromEmailAndPassword(c.email,c.password);if(c.signInMethod==="emailLink")return this._fromEmailAndCode(c.email,c.password,c.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const c={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return U8(e,c,"signInWithPassword",dL);case"emailLink":return hL(e,{email:this._email,oobCode:this._password});default:A1(e,"internal-error")}}async _linkToIdToken(e,c){switch(this.signInMethod){case"password":const a={idToken:c,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return U8(e,a,"signUpPassword",uL);case"emailLink":return pL(e,{idToken:c,email:this._email,oobCode:this._password});default:A1(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ve(t,e){return J6(t,"POST","/v1/accounts:signInWithIdp",l4(t,e))}/**
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
 */const mL="http://localhost";class O4 extends ss{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const c=new O4(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(c.idToken=e.idToken),e.accessToken&&(c.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(c.nonce=e.nonce),e.pendingToken&&(c.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(c.accessToken=e.oauthToken,c.secret=e.oauthTokenSecret):A1("argument-error"),c}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const c=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:s}=c,n=Za(c,["providerId","signInMethod"]);if(!a||!s)return null;const i=new O4(a,s);return i.idToken=n.idToken||void 0,i.accessToken=n.accessToken||void 0,i.secret=n.secret,i.nonce=n.nonce,i.pendingToken=n.pendingToken||null,i}_getIdTokenResponse(e){const c=this.buildRequest();return ve(e,c)}_linkToIdToken(e,c){const a=this.buildRequest();return a.idToken=c,ve(e,a)}_getReauthenticationResolver(e){const c=this.buildRequest();return c.autoCreate=!1,ve(e,c)}buildRequest(){const e={requestUri:mL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const c={};this.idToken&&(c.id_token=this.idToken),this.accessToken&&(c.access_token=this.accessToken),this.secret&&(c.oauth_token_secret=this.secret),c.providerId=this.providerId,this.nonce&&!this.pendingToken&&(c.nonce=this.nonce),e.postBody=Ue(c)}return e}}/**
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
 */function vL(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gL(t){const e=i6(r6(t)).link,c=e?i6(r6(e)).deep_link_id:null,a=i6(r6(t)).deep_link_id;return(a?i6(r6(a)).link:null)||a||c||e||t}class ns{constructor(e){var c,a,s,n,i,r;const o=i6(r6(e)),l=(c=o.apiKey)!==null&&c!==void 0?c:null,f=(a=o.oobCode)!==null&&a!==void 0?a:null,u=vL((s=o.mode)!==null&&s!==void 0?s:null);o2(l&&f&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=f,this.continueUrl=(n=o.continueUrl)!==null&&n!==void 0?n:null,this.languageCode=(i=o.languageCode)!==null&&i!==void 0?i:null,this.tenantId=(r=o.tenantId)!==null&&r!==void 0?r:null}static parseLink(e){const c=gL(e);try{return new ns(c)}catch{return null}}}/**
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
 */class $e{constructor(){this.providerId=$e.PROVIDER_ID}static credential(e,c){return k6._fromEmailAndPassword(e,c)}static credentialWithLink(e,c){const a=ns.parseLink(c);return o2(a,"argument-error"),k6._fromEmailAndCode(e,a.code,a.tenantId)}}$e.PROVIDER_ID="password";$e.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$e.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class U3 extends Z6{constructor(){super("facebook.com")}static credential(e){return O4._fromParams({providerId:U3.PROVIDER_ID,signInMethod:U3.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return U3.credentialFromTaggedObject(e)}static credentialFromError(e){return U3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return U3.credential(e.oauthAccessToken)}catch{return null}}}U3.FACEBOOK_SIGN_IN_METHOD="facebook.com";U3.PROVIDER_ID="facebook.com";/**
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
 */class h3 extends Z6{constructor(){super("google.com"),this.addScope("profile")}static credential(e,c){return O4._fromParams({providerId:h3.PROVIDER_ID,signInMethod:h3.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:c})}static credentialFromResult(e){return h3.credentialFromTaggedObject(e)}static credentialFromError(e){return h3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:c,oauthAccessToken:a}=e;if(!c&&!a)return null;try{return h3.credential(c,a)}catch{return null}}}h3.GOOGLE_SIGN_IN_METHOD="google.com";h3.PROVIDER_ID="google.com";/**
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
 */class $3 extends Z6{constructor(){super("github.com")}static credential(e){return O4._fromParams({providerId:$3.PROVIDER_ID,signInMethod:$3.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $3.credentialFromTaggedObject(e)}static credentialFromError(e){return $3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $3.credential(e.oauthAccessToken)}catch{return null}}}$3.GITHUB_SIGN_IN_METHOD="github.com";$3.PROVIDER_ID="github.com";/**
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
 */class W3 extends Z6{constructor(){super("twitter.com")}static credential(e,c){return O4._fromParams({providerId:W3.PROVIDER_ID,signInMethod:W3.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:c})}static credentialFromResult(e){return W3.credentialFromTaggedObject(e)}static credentialFromError(e){return W3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:c,oauthTokenSecret:a}=e;if(!c||!a)return null;try{return W3.credential(c,a)}catch{return null}}}W3.TWITTER_SIGN_IN_METHOD="twitter.com";W3.PROVIDER_ID="twitter.com";/**
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
 */async function HL(t,e){return J6(t,"POST","/v1/accounts:signUp",l4(t,e))}/**
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
 */class D4{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,c,a,s=!1){const n=await T4._fromIdTokenResponse(e,a,s),i=Tr(a);return new D4({user:n,providerId:i,_tokenResponse:a,operationType:c})}static async _forOperation(e,c,a){await e._updateTokensIfNecessary(a,!0);const s=Tr(a);return new D4({user:e,providerId:s,_tokenResponse:a,operationType:c})}}function Tr(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class it extends N3{constructor(e,c,a,s){var n;super(c.code,c.message),this.operationType=a,this.user=s,Object.setPrototypeOf(this,it.prototype),this.customData={appName:e.name,tenantId:(n=e.tenantId)!==null&&n!==void 0?n:void 0,_serverResponse:c.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,c,a,s){return new it(e,c,a,s)}}function sl(t,e,c,a){return(e==="reauthenticate"?c._getReauthenticationResolver(t):c._getIdTokenResponse(t)).catch(n=>{throw n.code==="auth/multi-factor-auth-required"?it._fromErrorAndOperation(t,n,e,a):n})}async function zL(t,e,c=!1){const a=await T6(t,e._linkToIdToken(t.auth,await t.getIdToken()),c);return D4._forOperation(t,"link",a)}/**
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
 */async function CL(t,e,c=!1){const{auth:a}=t,s="reauthenticate";try{const n=await T6(t,sl(a,s,e,t),c);o2(n.idToken,a,"internal-error");const i=cs(n.idToken);o2(i,a,"internal-error");const{sub:r}=i;return o2(t.uid===r,a,"user-mismatch"),D4._forOperation(t,s,n)}catch(n){throw(n==null?void 0:n.code)==="auth/user-not-found"&&A1(a,"user-mismatch"),n}}/**
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
 */async function nl(t,e,c=!1){const a="signIn",s=await sl(t,a,e),n=await D4._fromIdTokenResponse(t,a,s);return c||await t._updateCurrentUser(n.user),n}async function ML(t,e){return nl(u4(t),e)}/**
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
 */async function il(t){const e=u4(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function VL(t,e,c){const a=u4(t),i=await U8(a,{returnSecureToken:!0,email:e,password:c,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",HL).catch(o=>{throw o.code==="auth/password-does-not-meet-requirements"&&il(t),o}),r=await D4._fromIdTokenResponse(a,"signIn",i);return await a._updateCurrentUser(r.user),r}function _L(t,e,c){return ML(Y2(t),$e.credential(e,c)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&il(t),a})}function LL(t,e,c,a){return Y2(t).onIdTokenChanged(e,c,a)}function bL(t,e,c){return Y2(t).beforeAuthStateChanged(e,c)}function wL(t,e,c,a){return Y2(t).onAuthStateChanged(e,c,a)}function yL(t){return Y2(t).signOut()}const rt="__sak";/**
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
 */class rl{constructor(e,c){this.storageRetriever=e,this.type=c}_isAvailable(){try{return this.storage?(this.storage.setItem(rt,"1"),this.storage.removeItem(rt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,c){return this.storage.setItem(e,JSON.stringify(c)),Promise.resolve()}_get(e){const c=this.storage.getItem(e);return Promise.resolve(c?JSON.parse(c):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function SL(){const t=o1();return as(t)||Qt(t)}const xL=1e3,NL=10;class ol extends rl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,c)=>this.onStorageEvent(e,c),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=SL()&&j_(),this.fallbackToPolling=el(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const c of Object.keys(this.listeners)){const a=this.storage.getItem(c),s=this.localCache[c];a!==s&&e(c,s,a)}}onStorageEvent(e,c=!1){if(!e.key){this.forAllChangedKeys((i,r,o)=>{this.notifyListeners(i,o)});return}const a=e.key;if(c?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(a);if(e.newValue!==i)e.newValue!==null?this.storage.setItem(a,e.newValue):this.storage.removeItem(a);else if(this.localCache[a]===e.newValue&&!c)return}const s=()=>{const i=this.storage.getItem(a);!c&&this.localCache[a]===i||this.notifyListeners(a,i)},n=this.storage.getItem(a);G_()&&n!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,NL):s()}notifyListeners(e,c){this.localCache[e]=c;const a=this.listeners[e];if(a)for(const s of Array.from(a))s(c&&JSON.parse(c))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,c,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:c,newValue:a}),!0)})},xL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,c){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(c)}_removeListener(e,c){this.listeners[e]&&(this.listeners[e].delete(c),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,c){await super._set(e,c),this.localCache[e]=JSON.stringify(c)}async _get(e){const c=await super._get(e);return this.localCache[e]=JSON.stringify(c),c}async _remove(e){await super._remove(e),delete this.localCache[e]}}ol.type="LOCAL";const TL=ol;/**
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
 */class ll extends rl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,c){}_removeListener(e,c){}}ll.type="SESSION";const fl=ll;/**
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
 */function EL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(c){return{fulfilled:!1,reason:c}}}))}/**
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
 */class Zt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const c=this.receivers.find(s=>s.isListeningto(e));if(c)return c;const a=new Zt(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const c=e,{eventId:a,eventType:s,data:n}=c.data,i=this.handlersMap[s];if(!(i!=null&&i.size))return;c.ports[0].postMessage({status:"ack",eventId:a,eventType:s});const r=Array.from(i).map(async l=>l(c.origin,n)),o=await EL(r);c.ports[0].postMessage({status:"done",eventId:a,eventType:s,response:o})}_subscribe(e,c){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(c)}_unsubscribe(e,c){this.handlersMap[e]&&c&&this.handlersMap[e].delete(c),(!c||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zt.receivers=[];/**
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
 */class kL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,c,a=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let n,i;return new Promise((r,o)=>{const l=rs("",20);s.port1.start();const f=setTimeout(()=>{o(new Error("unsupported_event"))},a);i={messageChannel:s,onMessage(u){const d=u;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(f),n=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(n),r(d.data.response);break;default:clearTimeout(f),clearTimeout(n),o(new Error("invalid_response"));break}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:c},[s.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
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
 */function i3(){return window}function AL(t){i3().location.href=t}/**
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
 */function ul(){return typeof i3().WorkerGlobalScope<"u"&&typeof i3().importScripts=="function"}async function PL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function RL(){return ul()?self:null}/**
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
 */const dl="firebaseLocalStorageDb",OL=1,ot="firebaseLocalStorage",hl="fbase_key";class e0{constructor(e){this.request=e}toPromise(){return new Promise((e,c)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{c(this.request.error)})})}}function ec(t,e){return t.transaction([ot],e?"readwrite":"readonly").objectStore(ot)}function DL(){const t=indexedDB.deleteDatabase(dl);return new e0(t).toPromise()}function $8(){const t=indexedDB.open(dl,OL);return new Promise((e,c)=>{t.addEventListener("error",()=>{c(t.error)}),t.addEventListener("upgradeneeded",()=>{const a=t.result;try{a.createObjectStore(ot,{keyPath:hl})}catch(s){c(s)}}),t.addEventListener("success",async()=>{const a=t.result;a.objectStoreNames.contains(ot)?e(a):(a.close(),await DL(),e(await $8()))})})}async function Er(t,e,c){const a=ec(t,!0).put({[hl]:e,value:c});return new e0(a).toPromise()}async function FL(t,e){const c=ec(t,!1).get(e),a=await new e0(c).toPromise();return a===void 0?null:a.value}function kr(t,e){const c=ec(t,!0).delete(e);return new e0(c).toPromise()}const BL=800,UL=3;class pl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $8(),this.db)}async _withRetries(e){let c=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(c++>UL)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ul()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zt._getInstance(RL()),this.receiver._subscribe("keyChanged",async(e,c)=>({keyProcessed:(await this._poll()).includes(c.key)})),this.receiver._subscribe("ping",async(e,c)=>["keyChanged"])}async initializeSender(){var e,c;if(this.activeServiceWorker=await PL(),!this.activeServiceWorker)return;this.sender=new kL(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((e=a[0])===null||e===void 0)&&e.fulfilled&&!((c=a[0])===null||c===void 0)&&c.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $8();return await Er(e,rt,"1"),await kr(e,rt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,c){return this._withPendingWrite(async()=>(await this._withRetries(a=>Er(a,e,c)),this.localCache[e]=c,this.notifyServiceWorker(e)))}async _get(e){const c=await this._withRetries(a=>FL(a,e));return this.localCache[e]=c,c}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(c=>kr(c,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const n=ec(s,!1).getAll();return new e0(n).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const c=[],a=new Set;if(e.length!==0)for(const{fbase_key:s,value:n}of e)a.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(n)&&(this.notifyListeners(s,n),c.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!a.has(s)&&(this.notifyListeners(s,null),c.push(s));return c}notifyListeners(e,c){this.localCache[e]=c;const a=this.listeners[e];if(a)for(const s of Array.from(a))s(c)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,c){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(c)}_removeListener(e,c){this.listeners[e]&&(this.listeners[e].delete(c),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pl.type="LOCAL";const $L=pl;new Q6(3e4,6e4);/**
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
 */function ml(t,e){return e?g3(e):(o2(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class os extends ss{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ve(e,this._buildIdpRequest())}_linkToIdToken(e,c){return ve(e,this._buildIdpRequest(c))}_getReauthenticationResolver(e){return ve(e,this._buildIdpRequest())}_buildIdpRequest(e){const c={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(c.idToken=e),c}}function WL(t){return nl(t.auth,new os(t),t.bypassAuthState)}function qL(t){const{auth:e,user:c}=t;return o2(c,e,"internal-error"),CL(c,new os(t),t.bypassAuthState)}async function GL(t){const{auth:e,user:c}=t;return o2(c,e,"internal-error"),zL(c,new os(t),t.bypassAuthState)}/**
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
 */class vl{constructor(e,c,a,s,n=!1){this.auth=e,this.resolver=a,this.user=s,this.bypassAuthState=n,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(c)?c:[c]}execute(){return new Promise(async(e,c)=>{this.pendingPromise={resolve:e,reject:c};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:c,sessionId:a,postBody:s,tenantId:n,error:i,type:r}=e;if(i){this.reject(i);return}const o={auth:this.auth,requestUri:c,sessionId:a,tenantId:n||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(r)(o))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WL;case"linkViaPopup":case"linkViaRedirect":return GL;case"reauthViaPopup":case"reauthViaRedirect":return qL;default:A1(this.auth,"internal-error")}}resolve(e){L3(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){L3(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const jL=new Q6(2e3,1e4);async function KL(t,e,c){const a=u4(t);L_(t,e,is);const s=ml(a,c);return new L4(a,"signInViaPopup",e,s).executeNotNull()}class L4 extends vl{constructor(e,c,a,s,n){super(e,c,s,n),this.provider=a,this.authWindow=null,this.pollId=null,L4.currentPopupAction&&L4.currentPopupAction.cancel(),L4.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return o2(e,this.auth,"internal-error"),e}async onExecution(){L3(this.filter.length===1,"Popup operations only handle one event");const e=rs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(c=>{this.reject(c)}),this.resolver._isIframeWebStorageSupported(this.auth,c=>{c||this.reject(n3(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(n3(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,L4.currentPopupAction=null}pollUserCancellation(){const e=()=>{var c,a;if(!((a=(c=this.authWindow)===null||c===void 0?void 0:c.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(n3(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jL.get())};e()}}L4.currentPopupAction=null;/**
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
 */const YL="pendingRedirect",U0=new Map;class XL extends vl{constructor(e,c,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],c,void 0,a),this.eventId=null}async execute(){let e=U0.get(this.auth._key());if(!e){try{const a=await QL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(c){e=()=>Promise.reject(c)}U0.set(this.auth._key(),e)}return this.bypassAuthState||U0.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const c=await this.auth._redirectUserForId(e.eventId);if(c)return this.user=c,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QL(t,e){const c=eb(e),a=ZL(t);if(!await a._isAvailable())return!1;const s=await a._get(c)==="true";return await a._remove(c),s}function JL(t,e){U0.set(t._key(),e)}function ZL(t){return g3(t._redirectPersistence)}function eb(t){return B0(YL,t.config.apiKey,t.name)}async function tb(t,e,c=!1){const a=u4(t),s=ml(a,e),i=await new XL(a,s,c).execute();return i&&!c&&(delete i.user._redirectEventId,await a._persistUserIfCurrent(i.user),await a._setRedirectUser(null,e)),i}/**
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
 */const cb=10*60*1e3;class ab{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let c=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(c=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sb(e)||(this.hasHandledPotentialRedirect=!0,c||(this.queuedRedirectEvent=e,c=!0)),c}sendToConsumer(e,c){var a;if(e.error&&!gl(e)){const s=((a=e.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";c.onError(n3(this.auth,s))}else c.onAuthEvent(e)}isEventForConsumer(e,c){const a=c.eventId===null||!!e.eventId&&e.eventId===c.eventId;return c.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ar(e))}saveEventToCache(e){this.cachedEventUids.add(Ar(e)),this.lastProcessedEventTime=Date.now()}}function Ar(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gl(t);default:return!1}}/**
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
 */async function nb(t,e={}){return f4(t,"GET","/v1/projects",e)}/**
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
 */const ib=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rb=/^https?/;async function ob(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nb(t);for(const c of e)try{if(lb(c))return}catch{}A1(t,"unauthorized-domain")}function lb(t){const e=B8(),{protocol:c,hostname:a}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return i.hostname===""&&a===""?c==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):c==="chrome-extension:"&&i.hostname===a}if(!rb.test(c))return!1;if(ib.test(t))return a===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(a)}/**
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
 */const fb=new Q6(3e4,6e4);function Pr(){const t=i3().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let c=0;c<t.CP.length;c++)t.CP[c]=null}}function ub(t){return new Promise((e,c)=>{var a,s,n;function i(){Pr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pr(),c(n3(t,"network-request-failed"))},timeout:fb.get()})}if(!((s=(a=i3().gapi)===null||a===void 0?void 0:a.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((n=i3().gapi)===null||n===void 0)&&n.load)i();else{const r=cL("iframefcb");return i3()[r]=()=>{gapi.load?i():c(n3(t,"network-request-failed"))},cl(`${tL()}?onload=${r}`).catch(o=>c(o))}}).catch(e=>{throw $0=null,e})}let $0=null;function db(t){return $0=$0||ub(t),$0}/**
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
 */const hb=new Q6(5e3,15e3),pb="__/auth/iframe",mb="emulator/auth/iframe",vb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hb(t){const e=t.config;o2(e.authDomain,t,"auth-domain-config-required");const c=e.emulator?ts(e,mb):`https://${t.config.authDomain}/${pb}`,a={apiKey:e.apiKey,appName:t.name,v:Y4},s=gb.get(t.config.apiHost);s&&(a.eid=s);const n=t._getFrameworks();return n.length&&(a.fw=n.join(",")),`${c}?${Ue(a).slice(1)}`}async function zb(t){const e=await db(t),c=i3().gapi;return o2(c,t,"internal-error"),e.open({where:document.body,url:Hb(t),messageHandlersFilter:c.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vb,dontclear:!0},a=>new Promise(async(s,n)=>{await a.restyle({setHideOnLeave:!1});const i=n3(t,"network-request-failed"),r=i3().setTimeout(()=>{n(i)},hb.get());function o(){i3().clearTimeout(r),s(a)}a.ping(o).then(o,()=>{n(i)})}))}/**
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
 */const Cb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mb=500,Vb=600,_b="_blank",Lb="http://localhost";class Ir{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bb(t,e,c,a=Mb,s=Vb){const n=Math.max((window.screen.availHeight-s)/2,0).toString(),i=Math.max((window.screen.availWidth-a)/2,0).toString();let r="";const o=Object.assign(Object.assign({},Cb),{width:a.toString(),height:s.toString(),top:n,left:i}),l=o1().toLowerCase();c&&(r=Yo(l)?_b:c),Ko(l)&&(e=e||Lb,o.scrollbars="yes");const f=Object.entries(o).reduce((d,[h,v])=>`${d}${h}=${v},`,"");if(q_(l)&&r!=="_self")return wb(e||"",r),new Ir(null);const u=window.open(e||"",r,f);o2(u,t,"popup-blocked");try{u.focus()}catch{}return new Ir(u)}function wb(t,e){const c=document.createElement("a");c.href=t,c.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),c.dispatchEvent(a)}/**
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
 */const yb="__/auth/handler",Sb="emulator/auth/handler",xb=encodeURIComponent("fac");async function Rr(t,e,c,a,s,n){o2(t.config.authDomain,t,"auth-domain-config-required"),o2(t.config.apiKey,t,"invalid-api-key");const i={apiKey:t.config.apiKey,appName:t.name,authType:c,redirectUrl:a,v:Y4,eventId:s};if(e instanceof is){e.setDefaultLanguage(t.languageCode),i.providerId=e.providerId||"",P8(e.getCustomParameters())||(i.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,u]of Object.entries(n||{}))i[f]=u}if(e instanceof Z6){const f=e.getScopes().filter(u=>u!=="");f.length>0&&(i.scopes=f.join(","))}t.tenantId&&(i.tid=t.tenantId);const r=i;for(const f of Object.keys(r))r[f]===void 0&&delete r[f];const o=await t._getAppCheckToken(),l=o?`#${xb}=${encodeURIComponent(o)}`:"";return`${Nb(t)}?${Ue(r).slice(1)}${l}`}function Nb({config:t}){return t.emulator?ts(t,Sb):`https://${t.authDomain}/${yb}`}/**
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
 */const Xc="webStorageSupport";class Tb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fl,this._completeRedirectFn=tb,this._overrideRedirectResult=JL}async _openPopup(e,c,a,s){var n;L3((n=this.eventManagers[e._key()])===null||n===void 0?void 0:n.manager,"_initialize() not called before _openPopup()");const i=await Rr(e,c,a,B8(),s);return bb(e,i,rs())}async _openRedirect(e,c,a,s){await this._originValidation(e);const n=await Rr(e,c,a,B8(),s);return AL(n),new Promise(()=>{})}_initialize(e){const c=e._key();if(this.eventManagers[c]){const{manager:s,promise:n}=this.eventManagers[c];return s?Promise.resolve(s):(L3(n,"If manager is not set, promise should be"),n)}const a=this.initAndGetManager(e);return this.eventManagers[c]={promise:a},a.catch(()=>{delete this.eventManagers[c]}),a}async initAndGetManager(e){const c=await zb(e),a=new ab(e);return c.register("authEvent",s=>(o2(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:a.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=c,a}_isIframeWebStorageSupported(e,c){this.iframes[e._key()].send(Xc,{type:Xc},s=>{var n;const i=(n=s==null?void 0:s[0])===null||n===void 0?void 0:n[Xc];i!==void 0&&c(!!i),A1(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const c=e._key();return this.originValidationPromises[c]||(this.originValidationPromises[c]=ob(e)),this.originValidationPromises[c]}get _shouldInitProactively(){return el()||as()||Qt()}}const Eb=Tb;var Or="@firebase/auth",Dr="1.6.2";/**
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
 */class kb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const c=this.auth.onIdTokenChanged(a=>{e((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,c),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const c=this.internalListeners.get(e);c&&(this.internalListeners.delete(e),c(),this.updateProactiveRefresh())}assertAuthConfigured(){o2(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ab(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Pb(t){a4(new _3("auth",(e,{options:c})=>{const a=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),n=e.getProvider("app-check-internal"),{apiKey:i,authDomain:r}=a.options;o2(i&&!i.includes(":"),"invalid-api-key",{appName:a.name});const o={apiKey:i,authDomain:r,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tl(t)},l=new J_(a,s,n,o);return rL(l,c),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,c,a)=>{e.getProvider("auth-internal").initialize()})),a4(new _3("auth-internal",e=>{const c=u4(e.getProvider("auth").getImmediate());return(a=>new kb(a))(c)},"PRIVATE").setInstantiationMode("EXPLICIT")),E1(Or,Dr,Ab(t)),E1(Or,Dr,"esm2017")}/**
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
 */const Ib=5*60,Rb=No("authIdTokenMaxAge")||Ib;let Fr=null;const Ob=t=>async e=>{const c=e&&await e.getIdTokenResult(),a=c&&(new Date().getTime()-Date.parse(c.issuedAtTime))/1e3;if(a&&a>Rb)return;const s=c==null?void 0:c.token;Fr!==s&&(Fr=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Db(t=Xt()){const e=X6(t,"auth");if(e.isInitialized())return e.getImmediate();const c=iL(t,{popupRedirectResolver:Eb,persistence:[$L,TL,fl]}),a=No("authTokenSyncURL");if(a&&a.match(/^\/[^\/].*/)){const n=Ob(a);bL(c,n,()=>n(c.currentUser)),LL(c,i=>n(i))}const s=So("auth");return s&&oL(c,`http://${s}`),c}function Fb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Z_({loadJS(t){return new Promise((e,c)=>{const a=document.createElement("script");a.setAttribute("src",t),a.onload=e,a.onerror=s=>{const n=n3("internal-error");n.customData=s,c(n)},a.type="text/javascript",a.charset="UTF-8",Fb().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Pb("Browser");var Bb="firebase",Ub="10.9.0";/**
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
 */E1(Bb,Ub,"app");/**
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
 */const Hl="functions";/**
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
 */class $b{constructor(e,c,a){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=c.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||c.get().then(s=>this.messaging=s,()=>{}),this.appCheck||a.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const c=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return c.error?null:c.token}return null}async getContext(e){const c=await this.getAuthToken(),a=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:c,messagingToken:a,appCheckToken:s}}}/**
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
 */const W8="us-central1";class Wb{constructor(e,c,a,s,n=W8,i){this.app=e,this.fetchImpl=i,this.emulatorOrigin=null,this.contextProvider=new $b(c,a,s),this.cancelAllRequests=new Promise(r=>{this.deleteService=()=>Promise.resolve(r())});try{const r=new URL(n);this.customDomain=r.origin,this.region=W8}catch{this.customDomain=null,this.region=n}}_delete(){return this.deleteService()}_url(e){const c=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${c}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${c}.cloudfunctions.net/${e}`}}function qb(t,e,c){t.emulatorOrigin=`http://${e}:${c}`}const Br="@firebase/functions",Ur="0.11.2";/**
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
 */const Gb="auth-internal",jb="app-check-internal",Kb="messaging-internal";function Yb(t,e){const c=(a,{instanceIdentifier:s})=>{const n=a.getProvider("app").getImmediate(),i=a.getProvider(Gb),r=a.getProvider(Kb),o=a.getProvider(jb);return new Wb(n,i,r,o,s,t)};a4(new _3(Hl,c,"PUBLIC").setMultipleInstances(!0)),E1(Br,Ur,e),E1(Br,Ur,"esm2017")}/**
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
 */function Xb(t=Xt(),e=W8){const a=X6(Y2(t),Hl).getImmediate({identifier:e}),s=Ya("functions");return s&&Qb(a,...s),a}function Qb(t,e,c){qb(Y2(t),e,c)}Yb(fetch.bind(self));var $r={};const Wr="@firebase/database",qr="1.0.3";/**
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
 */let zl="";function Jb(t){zl=t}/**
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
 */class Zb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,c){c==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),e1(c))}get(e){const c=this.domStorage_.getItem(this.prefixedName_(e));return c==null?null:x6(c)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class ew{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,c){c==null?delete this.cache_[e]:this.cache_[e]=c}get(e){return l3(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Cl=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Zb(e)}}catch{}return new ew},b4=Cl("localStorage"),q8=Cl("sessionStorage");/**
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
 */const ge=new Qa("@firebase/database"),tw=function(){let t=1;return function(){return t++}}(),Ml=function(t){const e=vV(t),c=new dV;c.update(e);const a=c.digest();return ja.encodeByteArray(a)},t0=function(...t){let e="";for(let c=0;c<t.length;c++){const a=t[c];Array.isArray(a)||a&&typeof a=="object"&&typeof a.length=="number"?e+=t0.apply(null,a):typeof a=="object"?e+=e1(a):e+=a,e+=" "}return e};let E4=null,Gr=!0;const cw=function(t,e){F(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ge.logLevel=b2.VERBOSE,E4=ge.log.bind(ge),e&&q8.set("logging_enabled",!0)):typeof t=="function"?E4=t:(E4=null,q8.remove("logging_enabled"))},a1=function(...t){if(Gr===!0&&(Gr=!1,E4===null&&q8.get("logging_enabled")===!0&&cw(!0)),E4){const e=t0.apply(null,t);E4(e)}},c0=function(t){return function(...e){a1(t,...e)}},G8=function(...t){const e="FIREBASE INTERNAL ERROR: "+t0(...t);ge.error(e)},b3=function(...t){const e=`FIREBASE FATAL ERROR: ${t0(...t)}`;throw ge.error(e),new Error(e)},d1=function(...t){const e="FIREBASE WARNING: "+t0(...t);ge.warn(e)},aw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&d1("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ls=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},sw=function(t){if(document.readyState==="complete")t();else{let e=!1;const c=function(){if(!document.body){setTimeout(c,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&c()}),window.attachEvent("onload",c))}},xe="[MIN_NAME]",F4="[MAX_NAME]",X4=function(t,e){if(t===e)return 0;if(t===xe||e===F4)return-1;if(e===xe||t===F4)return 1;{const c=jr(t),a=jr(e);return c!==null?a!==null?c-a===0?t.length-e.length:c-a:-1:a!==null?1:t<e?-1:1}},nw=function(t,e){return t===e?0:t<e?-1:1},Je=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+e1(e))},fs=function(t){if(typeof t!="object"||t===null)return e1(t);const e=[];for(const a in t)e.push(a);e.sort();let c="{";for(let a=0;a<e.length;a++)a!==0&&(c+=","),c+=e1(e[a]),c+=":",c+=fs(t[e[a]]);return c+="}",c},Vl=function(t,e){const c=t.length;if(c<=e)return[t];const a=[];for(let s=0;s<c;s+=e)s+e>c?a.push(t.substring(s,c)):a.push(t.substring(s,s+e));return a};function n1(t,e){for(const c in t)t.hasOwnProperty(c)&&e(c,t[c])}const _l=function(t){F(!ls(t),"Invalid JSON number");const e=11,c=52,a=(1<<e-1)-1;let s,n,i,r,o;t===0?(n=0,i=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-a)?(r=Math.min(Math.floor(Math.log(t)/Math.LN2),a),n=r+a,i=Math.round(t*Math.pow(2,c-r)-Math.pow(2,c))):(n=0,i=Math.round(t/Math.pow(2,1-a-c))));const l=[];for(o=c;o;o-=1)l.push(i%2?1:0),i=Math.floor(i/2);for(o=e;o;o-=1)l.push(n%2?1:0),n=Math.floor(n/2);l.push(s?1:0),l.reverse();const f=l.join("");let u="";for(o=0;o<64;o+=8){let d=parseInt(f.substr(o,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},iw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},rw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ow(t,e){let c="Unknown Error";t==="too_big"?c="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?c="Client doesn't have permission to access the desired data.":t==="unavailable"&&(c="The service is unavailable");const a=new Error(t+" at "+e._path.toString()+": "+c);return a.code=t.toUpperCase(),a}const lw=new RegExp("^-?(0*)\\d{1,10}$"),fw=-2147483648,uw=2147483647,jr=function(t){if(lw.test(t)){const e=Number(t);if(e>=fw&&e<=uw)return e}return null},We=function(t){try{t()}catch(e){setTimeout(()=>{const c=e.stack||"";throw d1("Exception was thrown by user callback.",c),e},Math.floor(0))}},dw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},v6=function(t,e){const c=setTimeout(t,e);return typeof c=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(c):typeof c=="object"&&c.unref&&c.unref(),c};/**
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
 */class hw{constructor(e,c){this.appName_=e,this.appCheckProvider=c,this.appCheck=c==null?void 0:c.getImmediate({optional:!0}),this.appCheck||c==null||c.get().then(a=>this.appCheck=a)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((c,a)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(c,a):c(null)},0)})}addTokenChangeListener(e){var c;(c=this.appCheckProvider)===null||c===void 0||c.get().then(a=>a.addTokenListener(e))}notifyForInvalidToken(){d1(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class pw{constructor(e,c,a){this.appName_=e,this.firebaseOptions_=c,this.authProvider_=a,this.auth_=null,this.auth_=a.getImmediate({optional:!0}),this.auth_||a.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(c=>c&&c.code==="auth/token-not-initialized"?(a1("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(c)):new Promise((c,a)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(c,a):c(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(c=>c.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(c=>c.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',d1(e)}}class He{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}He.OWNER="owner";/**
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
 */const us="5",Ll="v",bl="s",wl="r",yl="f",Sl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,xl="ls",Nl="p",j8="ac",Tl="websocket",El="long_polling";/**
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
 */class kl{constructor(e,c,a,s,n=!1,i="",r=!1,o=!1){this.secure=c,this.namespace=a,this.webSocketOnly=s,this.nodeAdmin=n,this.persistenceKey=i,this.includeNamespaceInQueryParams=r,this.isUsingEmulator=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=b4.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&b4.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",c=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${c}`}}function mw(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Al(t,e,c){F(typeof e=="string","typeof type must == string"),F(typeof c=="object","typeof params must == object");let a;if(e===Tl)a=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===El)a=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);mw(t)&&(c.ns=t.namespace);const s=[];return n1(c,(n,i)=>{s.push(n+"="+i)}),a+s.join("&")}/**
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
 */class vw{constructor(){this.counters_={}}incrementCounter(e,c=1){l3(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=c}get(){return QM(this.counters_)}}/**
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
 */const Qc={},Jc={};function ds(t){const e=t.toString();return Qc[e]||(Qc[e]=new vw),Qc[e]}function gw(t,e){const c=t.toString();return Jc[c]||(Jc[c]=e()),Jc[c]}/**
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
 */class Hw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,c){this.closeAfterResponse=e,this.onClose=c,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,c){for(this.pendingResponses[e]=c;this.pendingResponses[this.currentResponseNum];){const a=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<a.length;++s)a[s]&&We(()=>{this.onMessage_(a[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Kr="start",zw="close",Cw="pLPCommand",Mw="pRTLPCB",Pl="id",Il="pw",Rl="ser",Vw="cb",_w="seg",Lw="ts",bw="d",ww="dframe",Ol=1870,Dl=30,yw=Ol-Dl,Sw=25e3,xw=3e4;class re{constructor(e,c,a,s,n,i,r){this.connId=e,this.repoInfo=c,this.applicationId=a,this.appCheckToken=s,this.authToken=n,this.transportSessionId=i,this.lastSessionId=r,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=c0(e),this.stats_=ds(c),this.urlFn=o=>(this.appCheckToken&&(o[j8]=this.appCheckToken),Al(c,El,o))}open(e,c){this.curSegmentNum=0,this.onDisconnect_=c,this.myPacketOrderer=new Hw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(xw)),sw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hs((...n)=>{const[i,r,o,l,f]=n;if(this.incrementIncomingBytes_(n),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,i===Kr)this.id=r,this.password=o;else if(i===zw)r?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(r,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+i)},(...n)=>{const[i,r]=n;this.incrementIncomingBytes_(n),this.myPacketOrderer.handleResponse(i,r)},()=>{this.onClosed_()},this.urlFn);const a={};a[Kr]="t",a[Rl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(a[Vw]=this.scriptTagHolder.uniqueCallbackIdentifier),a[Ll]=us,this.transportSessionId&&(a[bl]=this.transportSessionId),this.lastSessionId&&(a[xl]=this.lastSessionId),this.applicationId&&(a[Nl]=this.applicationId),this.appCheckToken&&(a[j8]=this.appCheckToken),typeof location<"u"&&location.hostname&&Sl.test(location.hostname)&&(a[wl]=yl);const s=this.urlFn(a);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){re.forceAllow_=!0}static forceDisallow(){re.forceDisallow_=!0}static isAvailable(){return re.forceAllow_?!0:!re.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!iw()&&!rw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const c=e1(e);this.bytesSent+=c.length,this.stats_.incrementCounter("bytes_sent",c.length);const a=wo(c),s=Vl(a,yw);for(let n=0;n<s.length;n++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[n]),this.curSegmentNum++}addDisconnectPingFrame(e,c){this.myDisconnFrame=document.createElement("iframe");const a={};a[ww]="t",a[Pl]=e,a[Il]=c,this.myDisconnFrame.src=this.urlFn(a),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const c=e1(e).length;this.bytesReceived+=c,this.stats_.incrementCounter("bytes_received",c)}}class hs{constructor(e,c,a,s){this.onDisconnect=a,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=tw(),window[Cw+this.uniqueCallbackIdentifier]=e,window[Mw+this.uniqueCallbackIdentifier]=c,this.myIFrame=hs.createIFrame_();let n="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(n='<script>document.domain="'+document.domain+'";<\/script>');const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(r){a1("frame writing exception"),r.stack&&a1(r.stack),a1(r)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||a1("No IE domain setting required")}catch{const a=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+a+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,c){for(this.myID=e,this.myPW=c,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Pl]=this.myID,e[Il]=this.myPW,e[Rl]=this.currentSerial;let c=this.urlFn(e),a="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Dl+a.length<=Ol;){const i=this.pendingSegs.shift();a=a+"&"+_w+s+"="+i.seg+"&"+Lw+s+"="+i.ts+"&"+bw+s+"="+i.d,s++}return c=c+a,this.addLongPollTag_(c,this.currentSerial),!0}else return!1}enqueueSegment(e,c,a){this.pendingSegs.push({seg:e,ts:c,d:a}),this.alive&&this.newRequest_()}addLongPollTag_(e,c){this.outstandingRequests.add(c);const a=()=>{this.outstandingRequests.delete(c),this.newRequest_()},s=setTimeout(a,Math.floor(Sw)),n=()=>{clearTimeout(s),a()};this.addTag(e,n)}addTag(e,c){setTimeout(()=>{try{if(!this.sendNewPolls)return;const a=this.myIFrame.doc.createElement("script");a.type="text/javascript",a.async=!0,a.src=e,a.onload=a.onreadystatechange=function(){const s=a.readyState;(!s||s==="loaded"||s==="complete")&&(a.onload=a.onreadystatechange=null,a.parentNode&&a.parentNode.removeChild(a),c())},a.onerror=()=>{a1("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(a)}catch{}},Math.floor(1))}}/**
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
 */const Nw=16384,Tw=45e3;let lt=null;typeof MozWebSocket<"u"?lt=MozWebSocket:typeof WebSocket<"u"&&(lt=WebSocket);class F1{constructor(e,c,a,s,n,i,r){this.connId=e,this.applicationId=a,this.appCheckToken=s,this.authToken=n,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=c0(this.connId),this.stats_=ds(c),this.connURL=F1.connectionURL_(c,i,r,s,a),this.nodeAdmin=c.nodeAdmin}static connectionURL_(e,c,a,s,n){const i={};return i[Ll]=us,typeof location<"u"&&location.hostname&&Sl.test(location.hostname)&&(i[wl]=yl),c&&(i[bl]=c),a&&(i[xl]=a),s&&(i[j8]=s),n&&(i[Nl]=n),Al(e,Tl,i)}open(e,c){this.onDisconnect=c,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,b4.set("previous_websocket_failure",!0);try{let a;ko(),this.mySock=new lt(this.connURL,[],a)}catch(a){this.log_("Error instantiating WebSocket.");const s=a.message||a.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=a=>{this.handleIncomingFrame(a)},this.mySock.onerror=a=>{this.log_("WebSocket error.  Closing connection.");const s=a.message||a.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){F1.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const c=/Android ([0-9]{0,}\.[0-9]{0,})/,a=navigator.userAgent.match(c);a&&a.length>1&&parseFloat(a[1])<4.4&&(e=!0)}return!e&&lt!==null&&!F1.forceDisallow_}static previouslyFailed(){return b4.isInMemoryStorage||b4.get("previous_websocket_failure")===!0}markConnectionHealthy(){b4.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const c=this.frames.join("");this.frames=null;const a=x6(c);this.onMessage(a)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(F(this.frames===null,"We already have a frame buffer"),e.length<=6){const c=Number(e);if(!isNaN(c))return this.handleNewFrameCount_(c),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const c=e.data;if(this.bytesReceived+=c.length,this.stats_.incrementCounter("bytes_received",c.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(c);else{const a=this.extractFrameCount_(c);a!==null&&this.appendFrame_(a)}}send(e){this.resetKeepAlive();const c=e1(e);this.bytesSent+=c.length,this.stats_.incrementCounter("bytes_sent",c.length);const a=Vl(c,Nw);a.length>1&&this.sendString_(String(a.length));for(let s=0;s<a.length;s++)this.sendString_(a[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Tw))}sendString_(e){try{this.mySock.send(e)}catch(c){this.log_("Exception thrown from WebSocket.send():",c.message||c.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}F1.responsesRequiredToBeHealthy=2;F1.healthyTimeout=3e4;/**
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
 */class A6{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[re,F1]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const c=F1&&F1.isAvailable();let a=c&&!F1.previouslyFailed();if(e.webSocketOnly&&(c||d1("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),a=!0),a)this.transports_=[F1];else{const s=this.transports_=[];for(const n of A6.ALL_TRANSPORTS)n&&n.isAvailable()&&s.push(n);A6.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}A6.globalTransportInitialized_=!1;/**
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
 */const Ew=6e4,kw=5e3,Aw=10*1024,Pw=100*1024,Zc="t",Yr="d",Iw="s",Xr="r",Rw="e",Qr="o",Jr="a",Zr="n",e5="p",Ow="h";class Dw{constructor(e,c,a,s,n,i,r,o,l,f){this.id=e,this.repoInfo_=c,this.applicationId_=a,this.appCheckToken_=s,this.authToken_=n,this.onMessage_=i,this.onReady_=r,this.onDisconnect_=o,this.onKill_=l,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=c0("c:"+this.id+":"),this.transportManager_=new A6(c),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const c=this.connReceiver_(this.conn_),a=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(c,a)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=v6(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Pw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Aw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return c=>{e===this.conn_?this.onConnectionLost_(c):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return c=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(c):e===this.secondaryConn_?this.onSecondaryMessageReceived_(c):this.log_("message on old connection"))}}sendRequest(e){const c={t:"d",d:e};this.sendData_(c)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zc in e){const c=e[Zc];c===Jr?this.upgradeIfSecondaryHealthy_():c===Xr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):c===Qr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const c=Je("t",e),a=Je("d",e);if(c==="c")this.onSecondaryControl_(a);else if(c==="d")this.pendingDataMessages.push(a);else throw new Error("Unknown protocol layer: "+c)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:e5,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Jr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Zr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const c=Je("t",e),a=Je("d",e);c==="c"?this.onControl_(a):c==="d"&&this.onDataMessage_(a)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const c=Je(Zc,e);if(Yr in e){const a=e[Yr];if(c===Ow){const s=Object.assign({},a);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(c===Zr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else c===Iw?this.onConnectionShutdown_(a):c===Xr?this.onReset_(a):c===Rw?G8("Server Error: "+a):c===Qr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):G8("Unknown control packet command: "+c)}}onHandshake_(e){const c=e.ts,a=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,c),us!==a&&d1("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const c=this.connReceiver_(this.secondaryConn_),a=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(c,a),v6(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ew))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,c){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(c,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):v6(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(kw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:e5,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(b4.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Fl{put(e,c,a,s){}merge(e,c,a,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,c,a){}onDisconnectMerge(e,c,a){}onDisconnectCancel(e,c){}reportStats(e){}}/**
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
 */class Bl{constructor(e){this.allowedEvents_=e,this.listeners_={},F(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...c){if(Array.isArray(this.listeners_[e])){const a=[...this.listeners_[e]];for(let s=0;s<a.length;s++)a[s].callback.apply(a[s].context,c)}}on(e,c,a){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:c,context:a});const s=this.getInitialEvent(e);s&&c.apply(a,s)}off(e,c,a){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let n=0;n<s.length;n++)if(s[n].callback===c&&(!a||a===s[n].context)){s.splice(n,1);return}}validateEventType_(e){F(this.allowedEvents_.find(c=>c===e),"Unknown event: "+e)}}/**
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
 */class ft extends Bl{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Xa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ft}getInitialEvent(e){return F(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const t5=32,c5=768;class w2{constructor(e,c){if(c===void 0){this.pieces_=e.split("/");let a=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[a]=this.pieces_[s],a++);this.pieces_.length=a,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=c}toString(){let e="";for(let c=this.pieceNum_;c<this.pieces_.length;c++)this.pieces_[c]!==""&&(e+="/"+this.pieces_[c]);return e||"/"}}function M2(){return new w2("")}function m2(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function s4(t){return t.pieces_.length-t.pieceNum_}function T2(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new w2(t.pieces_,e)}function ps(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Fw(t){let e="";for(let c=t.pieceNum_;c<t.pieces_.length;c++)t.pieces_[c]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[c])));return e||"/"}function P6(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ul(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let c=t.pieceNum_;c<t.pieces_.length-1;c++)e.push(t.pieces_[c]);return new w2(e,0)}function F2(t,e){const c=[];for(let a=t.pieceNum_;a<t.pieces_.length;a++)c.push(t.pieces_[a]);if(e instanceof w2)for(let a=e.pieceNum_;a<e.pieces_.length;a++)c.push(e.pieces_[a]);else{const a=e.split("/");for(let s=0;s<a.length;s++)a[s].length>0&&c.push(a[s])}return new w2(c,0)}function g2(t){return t.pieceNum_>=t.pieces_.length}function H1(t,e){const c=m2(t),a=m2(e);if(c===null)return e;if(c===a)return H1(T2(t),T2(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Bw(t,e){const c=P6(t,0),a=P6(e,0);for(let s=0;s<c.length&&s<a.length;s++){const n=X4(c[s],a[s]);if(n!==0)return n}return c.length===a.length?0:c.length<a.length?-1:1}function ms(t,e){if(s4(t)!==s4(e))return!1;for(let c=t.pieceNum_,a=e.pieceNum_;c<=t.pieces_.length;c++,a++)if(t.pieces_[c]!==e.pieces_[a])return!1;return!0}function N1(t,e){let c=t.pieceNum_,a=e.pieceNum_;if(s4(t)>s4(e))return!1;for(;c<t.pieces_.length;){if(t.pieces_[c]!==e.pieces_[a])return!1;++c,++a}return!0}class Uw{constructor(e,c){this.errorPrefix_=c,this.parts_=P6(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let a=0;a<this.parts_.length;a++)this.byteLength_+=Yt(this.parts_[a]);$l(this)}}function $w(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Yt(e),$l(t)}function Ww(t){const e=t.parts_.pop();t.byteLength_-=Yt(e),t.parts_.length>0&&(t.byteLength_-=1)}function $l(t){if(t.byteLength_>c5)throw new Error(t.errorPrefix_+"has a key path longer than "+c5+" bytes ("+t.byteLength_+").");if(t.parts_.length>t5)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+t5+") or object contains a cycle "+g4(t))}function g4(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class vs extends Bl{constructor(){super(["visible"]);let e,c;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(c="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(c="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(c="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(c="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,c&&document.addEventListener(c,()=>{const a=!document[e];a!==this.visible_&&(this.visible_=a,this.trigger("visible",a))},!1)}static getInstance(){return new vs}getInitialEvent(e){return F(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ze=1e3,qw=60*5*1e3,a5=30*1e3,Gw=1.3,jw=3e4,Kw="server_kill",s5=3;class V3 extends Fl{constructor(e,c,a,s,n,i,r,o){if(super(),this.repoInfo_=e,this.applicationId_=c,this.onDataUpdate_=a,this.onConnectStatus_=s,this.onServerInfoUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.authOverride_=o,this.id=V3.nextPersistentConnectionId_++,this.log_=c0("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ze,this.maxReconnectDelay_=qw,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,o&&!ko())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ft.getInstance().on("online",this.onOnline_,this)}sendRequest(e,c,a){const s=++this.requestNumber_,n={r:s,a:e,b:c};this.log_(e1(n)),F(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(n),a&&(this.requestCBHash_[s]=a)}get(e){this.initConnection_();const c=new K6,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:i=>{const r=i.d;i.s==="ok"?c.resolve(r):c.reject(r)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const n=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(n),c.promise}listen(e,c,a,s){this.initConnection_();const n=e._queryIdentifier,i=e._path.toString();this.log_("Listen called for "+i+" "+n),this.listens.has(i)||this.listens.set(i,new Map),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),F(!this.listens.get(i).has(n),"listen() called twice for same path/queryId.");const r={onComplete:s,hashFn:c,query:e,tag:a};this.listens.get(i).set(n,r),this.connected_&&this.sendListen_(r)}sendGet_(e){const c=this.outstandingGets_[e];this.sendRequest("g",c.request,a=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),c.onComplete&&c.onComplete(a)})}sendListen_(e){const c=e.query,a=c._path.toString(),s=c._queryIdentifier;this.log_("Listen on "+a+" for "+s);const n={p:a},i="q";e.tag&&(n.q=c._queryObject,n.t=e.tag),n.h=e.hashFn(),this.sendRequest(i,n,r=>{const o=r.d,l=r.s;V3.warnOnListenWarnings_(o,c),(this.listens.get(a)&&this.listens.get(a).get(s))===e&&(this.log_("listen response",r),l!=="ok"&&this.removeListen_(a,s),e.onComplete&&e.onComplete(l,o))})}static warnOnListenWarnings_(e,c){if(e&&typeof e=="object"&&l3(e,"w")){const a=Se(e,"w");if(Array.isArray(a)&&~a.indexOf("no_index")){const s='".indexOn": "'+c._queryParams.getIndex().toString()+'"',n=c._path.toString();d1(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||uV(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=a5)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,c=fV(e)?"auth":"gauth",a={cred:e};this.authOverride_===null?a.noauth=!0:typeof this.authOverride_=="object"&&(a.authvar=this.authOverride_),this.sendRequest(c,a,s=>{const n=s.s,i=s.d||"error";this.authToken_===e&&(n==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const c=e.s,a=e.d||"error";c==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(c,a)})}unlisten(e,c){const a=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+a+" "+s),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(a,s)&&this.connected_&&this.sendUnlisten_(a,s,e._queryObject,c)}sendUnlisten_(e,c,a,s){this.log_("Unlisten on "+e+" for "+c);const n={p:e},i="n";s&&(n.q=a,n.t=s),this.sendRequest(i,n)}onDisconnectPut(e,c,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,c,a):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:c,onComplete:a})}onDisconnectMerge(e,c,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,c,a):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:c,onComplete:a})}onDisconnectCancel(e,c){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,c):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:c})}sendOnDisconnect_(e,c,a,s){const n={p:c,d:a};this.log_("onDisconnect "+e,n),this.sendRequest(e,n,i=>{s&&setTimeout(()=>{s(i.s,i.d)},Math.floor(0))})}put(e,c,a,s){this.putInternal("p",e,c,a,s)}merge(e,c,a,s){this.putInternal("m",e,c,a,s)}putInternal(e,c,a,s,n){this.initConnection_();const i={p:c,d:a};n!==void 0&&(i.h=n),this.outstandingPuts_.push({action:e,request:i,onComplete:s}),this.outstandingPutCount_++;const r=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(r):this.log_("Buffering put: "+c)}sendPut_(e){const c=this.outstandingPuts_[e].action,a=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(c,a,n=>{this.log_(c+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(n.s,n.d)})}reportStats(e){if(this.connected_){const c={c:e};this.log_("reportStats",c),this.sendRequest("s",c,a=>{if(a.s!=="ok"){const n=a.d;this.log_("reportStats","Error sending stats: "+n)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+e1(e));const c=e.r,a=this.requestCBHash_[c];a&&(delete this.requestCBHash_[c],a(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,c){this.log_("handleServerMessage",e,c),e==="d"?this.onDataUpdate_(c.p,c.d,!1,c.t):e==="m"?this.onDataUpdate_(c.p,c.d,!0,c.t):e==="c"?this.onListenRevoked_(c.p,c.q):e==="ac"?this.onAuthRevoked_(c.s,c.d):e==="apc"?this.onAppCheckRevoked_(c.s,c.d):e==="sd"?this.onSecurityDebugPacket_(c):G8("Unrecognized action received from server: "+e1(e)+`
Are you using the latest client?`)}onReady_(e,c){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=c,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){F(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ze,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ze,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>jw&&(this.reconnectDelay_=Ze),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let c=Math.max(0,this.reconnectDelay_-e);c=Math.random()*c,this.log_("Trying to reconnect in "+c+"ms"),this.scheduleConnect_(c),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Gw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),c=this.onReady_.bind(this),a=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+V3.nextConnectionId_++,n=this.lastSessionId;let i=!1,r=null;const o=function(){r?r.close():(i=!0,a())},l=function(u){F(r,"sendRequest call when we're not connected not allowed."),r.sendRequest(u)};this.realtime_={close:o,sendRequest:l};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);i?a1("getToken() completed but was canceled"):(a1("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,r=new Dw(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,c,a,h=>{d1(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(Kw)},n))}catch(u){this.log_("Failed to get token: "+u),i||(this.repoInfo_.nodeAdmin&&d1(u),o())}}}interrupt(e){a1("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){a1("Resuming connection for reason: "+e),delete this.interruptReasons_[e],P8(this.interruptReasons_)&&(this.reconnectDelay_=Ze,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const c=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:c})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const c=this.outstandingPuts_[e];c&&"h"in c.request&&c.queued&&(c.onComplete&&c.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,c){let a;c?a=c.map(n=>fs(n)).join("$"):a="default";const s=this.removeListen_(e,a);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,c){const a=new w2(e).toString();let s;if(this.listens.has(a)){const n=this.listens.get(a);s=n.get(c),n.delete(c),n.size===0&&this.listens.delete(a)}else s=void 0;return s}onAuthRevoked_(e,c){a1("Auth token revoked: "+e+"/"+c),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=s5&&(this.reconnectDelay_=a5,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,c){a1("App check token revoked: "+e+"/"+c),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=s5&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const c of e.values())this.sendListen_(c);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let c="js";e["sdk."+c+"."+zl.replace(/\./g,"-")]=1,Xa()?e["framework.cordova"]=1:Eo()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ft.getInstance().currentlyOnline();return P8(this.interruptReasons_)&&e}}V3.nextPersistentConnectionId_=0;V3.nextConnectionId_=0;/**
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
 */class tc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,c){const a=new v2(xe,e),s=new v2(xe,c);return this.compare(a,s)!==0}minPost(){return v2.MIN}}/**
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
 */let M0;class Wl extends tc{static get __EMPTY_NODE(){return M0}static set __EMPTY_NODE(e){M0=e}compare(e,c){return X4(e.name,c.name)}isDefinedOn(e){throw Be("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,c){return!1}minPost(){return v2.MIN}maxPost(){return new v2(F4,M0)}makePost(e,c){return F(typeof e=="string","KeyIndex indexValue must always be a string."),new v2(e,M0)}toString(){return".key"}}const ze=new Wl;/**
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
 */class V0{constructor(e,c,a,s,n=null){this.isReverse_=s,this.resultGenerator_=n,this.nodeStack_=[];let i=1;for(;!e.isEmpty();)if(e=e,i=c?a(e.key,c):1,s&&(i*=-1),i<0)this.isReverse_?e=e.left:e=e.right;else if(i===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),c;if(this.resultGenerator_?c=this.resultGenerator_(e.key,e.value):c={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return c}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Q2{constructor(e,c,a,s,n){this.key=e,this.value=c,this.color=a??Q2.RED,this.left=s??z1.EMPTY_NODE,this.right=n??z1.EMPTY_NODE}copy(e,c,a,s,n){return new Q2(e??this.key,c??this.value,a??this.color,s??this.left,n??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,c,a){let s=this;const n=a(e,s.key);return n<0?s=s.copy(null,null,null,s.left.insert(e,c,a),null):n===0?s=s.copy(null,c,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,c,a)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return z1.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,c){let a,s;if(a=this,c(e,a.key)<0)!a.left.isEmpty()&&!a.left.isRed_()&&!a.left.left.isRed_()&&(a=a.moveRedLeft_()),a=a.copy(null,null,null,a.left.remove(e,c),null);else{if(a.left.isRed_()&&(a=a.rotateRight_()),!a.right.isEmpty()&&!a.right.isRed_()&&!a.right.left.isRed_()&&(a=a.moveRedRight_()),c(e,a.key)===0){if(a.right.isEmpty())return z1.EMPTY_NODE;s=a.right.min_(),a=a.copy(s.key,s.value,null,null,a.right.removeMin_())}a=a.copy(null,null,null,null,a.right.remove(e,c))}return a.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Q2.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Q2.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),c=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,c)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Q2.RED=!0;Q2.BLACK=!1;class Yw{copy(e,c,a,s,n){return this}insert(e,c,a){return new Q2(e,c,null)}remove(e,c){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class z1{constructor(e,c=z1.EMPTY_NODE){this.comparator_=e,this.root_=c}insert(e,c){return new z1(this.comparator_,this.root_.insert(e,c,this.comparator_).copy(null,null,Q2.BLACK,null,null))}remove(e){return new z1(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Q2.BLACK,null,null))}get(e){let c,a=this.root_;for(;!a.isEmpty();){if(c=this.comparator_(e,a.key),c===0)return a.value;c<0?a=a.left:c>0&&(a=a.right)}return null}getPredecessorKey(e){let c,a=this.root_,s=null;for(;!a.isEmpty();)if(c=this.comparator_(e,a.key),c===0){if(a.left.isEmpty())return s?s.key:null;for(a=a.left;!a.right.isEmpty();)a=a.right;return a.key}else c<0?a=a.left:c>0&&(s=a,a=a.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new V0(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,c){return new V0(this.root_,e,this.comparator_,!1,c)}getReverseIteratorFrom(e,c){return new V0(this.root_,e,this.comparator_,!0,c)}getReverseIterator(e){return new V0(this.root_,null,this.comparator_,!0,e)}}z1.EMPTY_NODE=new Yw;/**
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
 */function Xw(t,e){return X4(t.name,e.name)}function gs(t,e){return X4(t,e)}/**
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
 */let K8;function Qw(t){K8=t}const ql=function(t){return typeof t=="number"?"number:"+_l(t):"string:"+t},Gl=function(t){if(t.isLeafNode()){const e=t.val();F(typeof e=="string"||typeof e=="number"||typeof e=="object"&&l3(e,".sv"),"Priority must be a string or number.")}else F(t===K8||t.isEmpty(),"priority of unexpected type.");F(t===K8||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let n5;class X2{constructor(e,c=X2.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=c,this.lazyHash_=null,F(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Gl(this.priorityNode_)}static set __childrenNodeConstructor(e){n5=e}static get __childrenNodeConstructor(){return n5}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new X2(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:X2.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return g2(e)?this:m2(e)===".priority"?this.priorityNode_:X2.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,c){return null}updateImmediateChild(e,c){return e===".priority"?this.updatePriority(c):c.isEmpty()&&e!==".priority"?this:X2.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,c).updatePriority(this.priorityNode_)}updateChild(e,c){const a=m2(e);return a===null?c:c.isEmpty()&&a!==".priority"?this:(F(a!==".priority"||s4(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(a,X2.__childrenNodeConstructor.EMPTY_NODE.updateChild(T2(e),c)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,c){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ql(this.priorityNode_.val())+":");const c=typeof this.value_;e+=c+":",c==="number"?e+=_l(this.value_):e+=this.value_,this.lazyHash_=Ml(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===X2.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof X2.__childrenNodeConstructor?-1:(F(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const c=typeof e.value_,a=typeof this.value_,s=X2.VALUE_TYPE_ORDER.indexOf(c),n=X2.VALUE_TYPE_ORDER.indexOf(a);return F(s>=0,"Unknown leaf type: "+c),F(n>=0,"Unknown leaf type: "+a),s===n?a==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:n-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const c=e;return this.value_===c.value_&&this.priorityNode_.equals(c.priorityNode_)}else return!1}}X2.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let jl,Kl;function Jw(t){jl=t}function Zw(t){Kl=t}class ey extends tc{compare(e,c){const a=e.node.getPriority(),s=c.node.getPriority(),n=a.compareTo(s);return n===0?X4(e.name,c.name):n}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,c){return!e.getPriority().equals(c.getPriority())}minPost(){return v2.MIN}maxPost(){return new v2(F4,new X2("[PRIORITY-POST]",Kl))}makePost(e,c){const a=jl(e);return new v2(c,new X2("[PRIORITY-POST]",a))}toString(){return".priority"}}const B2=new ey;/**
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
 */const ty=Math.log(2);class cy{constructor(e){const c=n=>parseInt(Math.log(n)/ty,10),a=n=>parseInt(Array(n+1).join("1"),2);this.count=c(e+1),this.current_=this.count-1;const s=a(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ut=function(t,e,c,a){t.sort(e);const s=function(o,l){const f=l-o;let u,d;if(f===0)return null;if(f===1)return u=t[o],d=c?c(u):u,new Q2(d,u.node,Q2.BLACK,null,null);{const h=parseInt(f/2,10)+o,v=s(o,h),m=s(h+1,l);return u=t[h],d=c?c(u):u,new Q2(d,u.node,Q2.BLACK,v,m)}},n=function(o){let l=null,f=null,u=t.length;const d=function(v,m){const C=u-v,H=u;u-=v;const p=s(C+1,H),g=t[C],_=c?c(g):g;h(new Q2(_,g.node,m,null,p))},h=function(v){l?(l.left=v,l=v):(f=v,l=v)};for(let v=0;v<o.count;++v){const m=o.nextBitIsOne(),C=Math.pow(2,o.count-(v+1));m?d(C,Q2.BLACK):(d(C,Q2.BLACK),d(C,Q2.RED))}return f},i=new cy(t.length),r=n(i);return new z1(a||e,r)};/**
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
 */let e8;const ce={};class H3{constructor(e,c){this.indexes_=e,this.indexSet_=c}static get Default(){return F(ce&&B2,"ChildrenNode.ts has not been loaded"),e8=e8||new H3({".priority":ce},{".priority":B2}),e8}get(e){const c=Se(this.indexes_,e);if(!c)throw new Error("No index defined for "+e);return c instanceof z1?c:null}hasIndex(e){return l3(this.indexSet_,e.toString())}addIndex(e,c){F(e!==ze,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const a=[];let s=!1;const n=c.getIterator(v2.Wrap);let i=n.getNext();for(;i;)s=s||e.isDefinedOn(i.node),a.push(i),i=n.getNext();let r;s?r=ut(a,e.getCompare()):r=ce;const o=e.toString(),l=Object.assign({},this.indexSet_);l[o]=e;const f=Object.assign({},this.indexes_);return f[o]=r,new H3(f,l)}addToIndexes(e,c){const a=tt(this.indexes_,(s,n)=>{const i=Se(this.indexSet_,n);if(F(i,"Missing index implementation for "+n),s===ce)if(i.isDefinedOn(e.node)){const r=[],o=c.getIterator(v2.Wrap);let l=o.getNext();for(;l;)l.name!==e.name&&r.push(l),l=o.getNext();return r.push(e),ut(r,i.getCompare())}else return ce;else{const r=c.get(e.name);let o=s;return r&&(o=o.remove(new v2(e.name,r))),o.insert(e,e.node)}});return new H3(a,this.indexSet_)}removeFromIndexes(e,c){const a=tt(this.indexes_,s=>{if(s===ce)return s;{const n=c.get(e.name);return n?s.remove(new v2(e.name,n)):s}});return new H3(a,this.indexSet_)}}/**
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
 */let e6;class i2{constructor(e,c,a){this.children_=e,this.priorityNode_=c,this.indexMap_=a,this.lazyHash_=null,this.priorityNode_&&Gl(this.priorityNode_),this.children_.isEmpty()&&F(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return e6||(e6=new i2(new z1(gs),null,H3.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||e6}updatePriority(e){return this.children_.isEmpty()?this:new i2(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const c=this.children_.get(e);return c===null?e6:c}}getChild(e){const c=m2(e);return c===null?this:this.getImmediateChild(c).getChild(T2(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,c){if(F(c,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(c);{const a=new v2(e,c);let s,n;c.isEmpty()?(s=this.children_.remove(e),n=this.indexMap_.removeFromIndexes(a,this.children_)):(s=this.children_.insert(e,c),n=this.indexMap_.addToIndexes(a,this.children_));const i=s.isEmpty()?e6:this.priorityNode_;return new i2(s,i,n)}}updateChild(e,c){const a=m2(e);if(a===null)return c;{F(m2(e)!==".priority"||s4(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(a).updateChild(T2(e),c);return this.updateImmediateChild(a,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const c={};let a=0,s=0,n=!0;if(this.forEachChild(B2,(i,r)=>{c[i]=r.val(e),a++,n&&i2.INTEGER_REGEXP_.test(i)?s=Math.max(s,Number(i)):n=!1}),!e&&n&&s<2*a){const i=[];for(const r in c)i[r]=c[r];return i}else return e&&!this.getPriority().isEmpty()&&(c[".priority"]=this.getPriority().val()),c}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ql(this.getPriority().val())+":"),this.forEachChild(B2,(c,a)=>{const s=a.hash();s!==""&&(e+=":"+c+":"+s)}),this.lazyHash_=e===""?"":Ml(e)}return this.lazyHash_}getPredecessorChildName(e,c,a){const s=this.resolveIndex_(a);if(s){const n=s.getPredecessorKey(new v2(e,c));return n?n.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const c=this.resolveIndex_(e);if(c){const a=c.minKey();return a&&a.name}else return this.children_.minKey()}getFirstChild(e){const c=this.getFirstChildName(e);return c?new v2(c,this.children_.get(c)):null}getLastChildName(e){const c=this.resolveIndex_(e);if(c){const a=c.maxKey();return a&&a.name}else return this.children_.maxKey()}getLastChild(e){const c=this.getLastChildName(e);return c?new v2(c,this.children_.get(c)):null}forEachChild(e,c){const a=this.resolveIndex_(e);return a?a.inorderTraversal(s=>c(s.name,s.node)):this.children_.inorderTraversal(c)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,c){const a=this.resolveIndex_(c);if(a)return a.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,v2.Wrap);let n=s.peek();for(;n!=null&&c.compare(n,e)<0;)s.getNext(),n=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,c){const a=this.resolveIndex_(c);if(a)return a.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,v2.Wrap);let n=s.peek();for(;n!=null&&c.compare(n,e)>0;)s.getNext(),n=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===a0?-1:0}withIndex(e){if(e===ze||this.indexMap_.hasIndex(e))return this;{const c=this.indexMap_.addIndex(e,this.children_);return new i2(this.children_,this.priorityNode_,c)}}isIndexed(e){return e===ze||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const c=e;if(this.getPriority().equals(c.getPriority()))if(this.children_.count()===c.children_.count()){const a=this.getIterator(B2),s=c.getIterator(B2);let n=a.getNext(),i=s.getNext();for(;n&&i;){if(n.name!==i.name||!n.node.equals(i.node))return!1;n=a.getNext(),i=s.getNext()}return n===null&&i===null}else return!1;else return!1}}resolveIndex_(e){return e===ze?null:this.indexMap_.get(e.toString())}}i2.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ay extends i2{constructor(){super(new z1(gs),i2.EMPTY_NODE,H3.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return i2.EMPTY_NODE}isEmpty(){return!1}}const a0=new ay;Object.defineProperties(v2,{MIN:{value:new v2(xe,i2.EMPTY_NODE)},MAX:{value:new v2(F4,a0)}});Wl.__EMPTY_NODE=i2.EMPTY_NODE;X2.__childrenNodeConstructor=i2;Qw(a0);Zw(a0);/**
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
 */const sy=!0;function J2(t,e=null){if(t===null)return i2.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),F(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const c=t;return new X2(c,J2(e))}if(!(t instanceof Array)&&sy){const c=[];let a=!1;if(n1(t,(i,r)=>{if(i.substring(0,1)!=="."){const o=J2(r);o.isEmpty()||(a=a||!o.getPriority().isEmpty(),c.push(new v2(i,o)))}}),c.length===0)return i2.EMPTY_NODE;const n=ut(c,Xw,i=>i.name,gs);if(a){const i=ut(c,B2.getCompare());return new i2(n,J2(e),new H3({".priority":i},{".priority":B2}))}else return new i2(n,J2(e),H3.Default)}else{let c=i2.EMPTY_NODE;return n1(t,(a,s)=>{if(l3(t,a)&&a.substring(0,1)!=="."){const n=J2(s);(n.isLeafNode()||!n.isEmpty())&&(c=c.updateImmediateChild(a,n))}}),c.updatePriority(J2(e))}}Jw(J2);/**
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
 */class ny extends tc{constructor(e){super(),this.indexPath_=e,F(!g2(e)&&m2(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,c){const a=this.extractChild(e.node),s=this.extractChild(c.node),n=a.compareTo(s);return n===0?X4(e.name,c.name):n}makePost(e,c){const a=J2(e),s=i2.EMPTY_NODE.updateChild(this.indexPath_,a);return new v2(c,s)}maxPost(){const e=i2.EMPTY_NODE.updateChild(this.indexPath_,a0);return new v2(F4,e)}toString(){return P6(this.indexPath_,0).join("/")}}/**
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
 */class iy extends tc{compare(e,c){const a=e.node.compareTo(c.node);return a===0?X4(e.name,c.name):a}isDefinedOn(e){return!0}indexedValueChanged(e,c){return!e.equals(c)}minPost(){return v2.MIN}maxPost(){return v2.MAX}makePost(e,c){const a=J2(e);return new v2(c,a)}toString(){return".value"}}const ry=new iy;/**
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
 */function Yl(t){return{type:"value",snapshotNode:t}}function Ne(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function I6(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function R6(t,e,c){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:c}}function oy(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Hs{constructor(e){this.index_=e}updateChild(e,c,a,s,n,i){F(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const r=e.getImmediateChild(c);return r.getChild(s).equals(a.getChild(s))&&r.isEmpty()===a.isEmpty()||(i!=null&&(a.isEmpty()?e.hasChild(c)?i.trackChildChange(I6(c,r)):F(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):r.isEmpty()?i.trackChildChange(Ne(c,a)):i.trackChildChange(R6(c,a,r))),e.isLeafNode()&&a.isEmpty())?e:e.updateImmediateChild(c,a).withIndex(this.index_)}updateFullNode(e,c,a){return a!=null&&(e.isLeafNode()||e.forEachChild(B2,(s,n)=>{c.hasChild(s)||a.trackChildChange(I6(s,n))}),c.isLeafNode()||c.forEachChild(B2,(s,n)=>{if(e.hasChild(s)){const i=e.getImmediateChild(s);i.equals(n)||a.trackChildChange(R6(s,n,i))}else a.trackChildChange(Ne(s,n))})),c.withIndex(this.index_)}updatePriority(e,c){return e.isEmpty()?i2.EMPTY_NODE:e.updatePriority(c)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class O6{constructor(e){this.indexedFilter_=new Hs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=O6.getStartPost_(e),this.endPost_=O6.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const c=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,a=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return c&&a}updateChild(e,c,a,s,n,i){return this.matches(new v2(c,a))||(a=i2.EMPTY_NODE),this.indexedFilter_.updateChild(e,c,a,s,n,i)}updateFullNode(e,c,a){c.isLeafNode()&&(c=i2.EMPTY_NODE);let s=c.withIndex(this.index_);s=s.updatePriority(i2.EMPTY_NODE);const n=this;return c.forEachChild(B2,(i,r)=>{n.matches(new v2(i,r))||(s=s.updateImmediateChild(i,i2.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,a)}updatePriority(e,c){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const c=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),c)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const c=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),c)}else return e.getIndex().maxPost()}}/**
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
 */class ly{constructor(e){this.withinDirectionalStart=c=>this.reverse_?this.withinEndPost(c):this.withinStartPost(c),this.withinDirectionalEnd=c=>this.reverse_?this.withinStartPost(c):this.withinEndPost(c),this.withinStartPost=c=>{const a=this.index_.compare(this.rangedFilter_.getStartPost(),c);return this.startIsInclusive_?a<=0:a<0},this.withinEndPost=c=>{const a=this.index_.compare(c,this.rangedFilter_.getEndPost());return this.endIsInclusive_?a<=0:a<0},this.rangedFilter_=new O6(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,c,a,s,n,i){return this.rangedFilter_.matches(new v2(c,a))||(a=i2.EMPTY_NODE),e.getImmediateChild(c).equals(a)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,c,a,s,n,i):this.fullLimitUpdateChild_(e,c,a,n,i)}updateFullNode(e,c,a){let s;if(c.isLeafNode()||c.isEmpty())s=i2.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<c.numChildren()&&c.isIndexed(this.index_)){s=i2.EMPTY_NODE.withIndex(this.index_);let n;this.reverse_?n=c.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):n=c.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let i=0;for(;n.hasNext()&&i<this.limit_;){const r=n.getNext();if(this.withinDirectionalStart(r))if(this.withinDirectionalEnd(r))s=s.updateImmediateChild(r.name,r.node),i++;else break;else continue}}else{s=c.withIndex(this.index_),s=s.updatePriority(i2.EMPTY_NODE);let n;this.reverse_?n=s.getReverseIterator(this.index_):n=s.getIterator(this.index_);let i=0;for(;n.hasNext();){const r=n.getNext();i<this.limit_&&this.withinDirectionalStart(r)&&this.withinDirectionalEnd(r)?i++:s=s.updateImmediateChild(r.name,i2.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,a)}updatePriority(e,c){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,c,a,s,n){let i;if(this.reverse_){const u=this.index_.getCompare();i=(d,h)=>u(h,d)}else i=this.index_.getCompare();const r=e;F(r.numChildren()===this.limit_,"");const o=new v2(c,a),l=this.reverse_?r.getFirstChild(this.index_):r.getLastChild(this.index_),f=this.rangedFilter_.matches(o);if(r.hasChild(c)){const u=r.getImmediateChild(c);let d=s.getChildAfterChild(this.index_,l,this.reverse_);for(;d!=null&&(d.name===c||r.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const h=d==null?1:i(d,o);if(f&&!a.isEmpty()&&h>=0)return n!=null&&n.trackChildChange(R6(c,a,u)),r.updateImmediateChild(c,a);{n!=null&&n.trackChildChange(I6(c,u));const m=r.updateImmediateChild(c,i2.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(n!=null&&n.trackChildChange(Ne(d.name,d.node)),m.updateImmediateChild(d.name,d.node)):m}}else return a.isEmpty()?e:f&&i(l,o)>=0?(n!=null&&(n.trackChildChange(I6(l.name,l.node)),n.trackChildChange(Ne(c,a))),r.updateImmediateChild(c,a).updateImmediateChild(l.name,i2.EMPTY_NODE)):e}}/**
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
 */class zs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=B2}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return F(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return F(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xe}hasEnd(){return this.endSet_}getIndexEndValue(){return F(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return F(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:F4}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return F(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===B2}copy(){const e=new zs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function fy(t){return t.loadsAllData()?new Hs(t.getIndex()):t.hasLimit()?new ly(t):new O6(t)}function i5(t){const e={};if(t.isDefault())return e;let c;if(t.index_===B2?c="$priority":t.index_===ry?c="$value":t.index_===ze?c="$key":(F(t.index_ instanceof ny,"Unrecognized index type!"),c=t.index_.toString()),e.orderBy=e1(c),t.startSet_){const a=t.startAfterSet_?"startAfter":"startAt";e[a]=e1(t.indexStartValue_),t.startNameSet_&&(e[a]+=","+e1(t.indexStartName_))}if(t.endSet_){const a=t.endBeforeSet_?"endBefore":"endAt";e[a]=e1(t.indexEndValue_),t.endNameSet_&&(e[a]+=","+e1(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function r5(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let c=t.viewFrom_;c===""&&(t.isViewFromLeft()?c="l":c="r"),e.vf=c}return t.index_!==B2&&(e.i=t.index_.toString()),e}/**
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
 */class dt extends Fl{constructor(e,c,a,s){super(),this.repoInfo_=e,this.onDataUpdate_=c,this.authTokenProvider_=a,this.appCheckTokenProvider_=s,this.log_=c0("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,c){return c!==void 0?"tag$"+c:(F(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,c,a,s){const n=e._path.toString();this.log_("Listen called for "+n+" "+e._queryIdentifier);const i=dt.getListenId_(e,a),r={};this.listens_[i]=r;const o=i5(e._queryParams);this.restRequest_(n+".json",o,(l,f)=>{let u=f;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(n,u,!1,a),Se(this.listens_,i)===r){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",s(d,null)}})}unlisten(e,c){const a=dt.getListenId_(e,c);delete this.listens_[a]}get(e){const c=i5(e._queryParams),a=e._path.toString(),s=new K6;return this.restRequest_(a+".json",c,(n,i)=>{let r=i;n===404&&(r=null,n=null),n===null?(this.onDataUpdate_(a,r,!1,null),s.resolve(r)):s.reject(new Error(r))}),s.promise}refreshAuthToken(e){}restRequest_(e,c={},a){return c.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,n])=>{s&&s.accessToken&&(c.auth=s.accessToken),n&&n.token&&(c.ac=n.token);const i=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ue(c);this.log_("Sending REST request for "+i);const r=new XMLHttpRequest;r.onreadystatechange=()=>{if(a&&r.readyState===4){this.log_("REST Response for "+i+" received. status:",r.status,"response:",r.responseText);let o=null;if(r.status>=200&&r.status<300){try{o=x6(r.responseText)}catch{d1("Failed to parse JSON response for "+i+": "+r.responseText)}a(null,o)}else r.status!==401&&r.status!==404&&d1("Got unsuccessful REST response for "+i+" Status: "+r.status),a(r.status);a=null}},r.open("GET",i,!0),r.send()})}}/**
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
 */class uy{constructor(){this.rootNode_=i2.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,c){this.rootNode_=this.rootNode_.updateChild(e,c)}}/**
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
 */function ht(){return{value:null,children:new Map}}function Xl(t,e,c){if(g2(e))t.value=c,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,c);else{const a=m2(e);t.children.has(a)||t.children.set(a,ht());const s=t.children.get(a);e=T2(e),Xl(s,e,c)}}function Y8(t,e,c){t.value!==null?c(e,t.value):dy(t,(a,s)=>{const n=new w2(e.toString()+"/"+a);Y8(s,n,c)})}function dy(t,e){t.children.forEach((c,a)=>{e(a,c)})}/**
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
 */class hy{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),c=Object.assign({},e);return this.last_&&n1(this.last_,(a,s)=>{c[a]=c[a]-s}),this.last_=e,c}}/**
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
 */const o5=10*1e3,py=30*1e3,my=5*60*1e3;class vy{constructor(e,c){this.server_=c,this.statsToReport_={},this.statsListener_=new hy(e);const a=o5+(py-o5)*Math.random();v6(this.reportStats_.bind(this),Math.floor(a))}reportStats_(){const e=this.statsListener_.get(),c={};let a=!1;n1(e,(s,n)=>{n>0&&l3(this.statsToReport_,s)&&(c[s]=n,a=!0)}),a&&this.server_.reportStats(c),v6(this.reportStats_.bind(this),Math.floor(Math.random()*2*my))}}/**
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
 */var U1;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(U1||(U1={}));function Cs(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ms(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vs(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class pt{constructor(e,c,a){this.path=e,this.affectedTree=c,this.revert=a,this.type=U1.ACK_USER_WRITE,this.source=Cs()}operationForChild(e){if(g2(this.path)){if(this.affectedTree.value!=null)return F(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const c=this.affectedTree.subtree(new w2(e));return new pt(M2(),c,this.revert)}}else return F(m2(this.path)===e,"operationForChild called for unrelated child."),new pt(T2(this.path),this.affectedTree,this.revert)}}/**
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
 */class D6{constructor(e,c){this.source=e,this.path=c,this.type=U1.LISTEN_COMPLETE}operationForChild(e){return g2(this.path)?new D6(this.source,M2()):new D6(this.source,T2(this.path))}}/**
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
 */class B4{constructor(e,c,a){this.source=e,this.path=c,this.snap=a,this.type=U1.OVERWRITE}operationForChild(e){return g2(this.path)?new B4(this.source,M2(),this.snap.getImmediateChild(e)):new B4(this.source,T2(this.path),this.snap)}}/**
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
 */class Te{constructor(e,c,a){this.source=e,this.path=c,this.children=a,this.type=U1.MERGE}operationForChild(e){if(g2(this.path)){const c=this.children.subtree(new w2(e));return c.isEmpty()?null:c.value?new B4(this.source,M2(),c.value):new Te(this.source,M2(),c)}else return F(m2(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Te(this.source,T2(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class U4{constructor(e,c,a){this.node_=e,this.fullyInitialized_=c,this.filtered_=a}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(g2(e))return this.isFullyInitialized()&&!this.filtered_;const c=m2(e);return this.isCompleteForChild(c)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class gy{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Hy(t,e,c,a){const s=[],n=[];return e.forEach(i=>{i.type==="child_changed"&&t.index_.indexedValueChanged(i.oldSnap,i.snapshotNode)&&n.push(oy(i.childName,i.snapshotNode))}),t6(t,s,"child_removed",e,a,c),t6(t,s,"child_added",e,a,c),t6(t,s,"child_moved",n,a,c),t6(t,s,"child_changed",e,a,c),t6(t,s,"value",e,a,c),s}function t6(t,e,c,a,s,n){const i=a.filter(r=>r.type===c);i.sort((r,o)=>Cy(t,r,o)),i.forEach(r=>{const o=zy(t,r,n);s.forEach(l=>{l.respondsTo(r.type)&&e.push(l.createEvent(o,t.query_))})})}function zy(t,e,c){return e.type==="value"||e.type==="child_removed"||(e.prevName=c.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Cy(t,e,c){if(e.childName==null||c.childName==null)throw Be("Should only compare child_ events.");const a=new v2(e.childName,e.snapshotNode),s=new v2(c.childName,c.snapshotNode);return t.index_.compare(a,s)}/**
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
 */function cc(t,e){return{eventCache:t,serverCache:e}}function g6(t,e,c,a){return cc(new U4(e,c,a),t.serverCache)}function Ql(t,e,c,a){return cc(t.eventCache,new U4(e,c,a))}function X8(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function $4(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let t8;const My=()=>(t8||(t8=new z1(nw)),t8);class N2{constructor(e,c=My()){this.value=e,this.children=c}static fromObject(e){let c=new N2(null);return n1(e,(a,s)=>{c=c.set(new w2(a),s)}),c}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,c){if(this.value!=null&&c(this.value))return{path:M2(),value:this.value};if(g2(e))return null;{const a=m2(e),s=this.children.get(a);if(s!==null){const n=s.findRootMostMatchingPathAndValue(T2(e),c);return n!=null?{path:F2(new w2(a),n.path),value:n.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(g2(e))return this;{const c=m2(e),a=this.children.get(c);return a!==null?a.subtree(T2(e)):new N2(null)}}set(e,c){if(g2(e))return new N2(c,this.children);{const a=m2(e),n=(this.children.get(a)||new N2(null)).set(T2(e),c),i=this.children.insert(a,n);return new N2(this.value,i)}}remove(e){if(g2(e))return this.children.isEmpty()?new N2(null):new N2(null,this.children);{const c=m2(e),a=this.children.get(c);if(a){const s=a.remove(T2(e));let n;return s.isEmpty()?n=this.children.remove(c):n=this.children.insert(c,s),this.value===null&&n.isEmpty()?new N2(null):new N2(this.value,n)}else return this}}get(e){if(g2(e))return this.value;{const c=m2(e),a=this.children.get(c);return a?a.get(T2(e)):null}}setTree(e,c){if(g2(e))return c;{const a=m2(e),n=(this.children.get(a)||new N2(null)).setTree(T2(e),c);let i;return n.isEmpty()?i=this.children.remove(a):i=this.children.insert(a,n),new N2(this.value,i)}}fold(e){return this.fold_(M2(),e)}fold_(e,c){const a={};return this.children.inorderTraversal((s,n)=>{a[s]=n.fold_(F2(e,s),c)}),c(e,this.value,a)}findOnPath(e,c){return this.findOnPath_(e,M2(),c)}findOnPath_(e,c,a){const s=this.value?a(c,this.value):!1;if(s)return s;if(g2(e))return null;{const n=m2(e),i=this.children.get(n);return i?i.findOnPath_(T2(e),F2(c,n),a):null}}foreachOnPath(e,c){return this.foreachOnPath_(e,M2(),c)}foreachOnPath_(e,c,a){if(g2(e))return this;{this.value&&a(c,this.value);const s=m2(e),n=this.children.get(s);return n?n.foreachOnPath_(T2(e),F2(c,s),a):new N2(null)}}foreach(e){this.foreach_(M2(),e)}foreach_(e,c){this.children.inorderTraversal((a,s)=>{s.foreach_(F2(e,a),c)}),this.value&&c(e,this.value)}foreachChild(e){this.children.inorderTraversal((c,a)=>{a.value&&e(c,a.value)})}}/**
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
 */class K1{constructor(e){this.writeTree_=e}static empty(){return new K1(new N2(null))}}function H6(t,e,c){if(g2(e))return new K1(new N2(c));{const a=t.writeTree_.findRootMostValueAndPath(e);if(a!=null){const s=a.path;let n=a.value;const i=H1(s,e);return n=n.updateChild(i,c),new K1(t.writeTree_.set(s,n))}else{const s=new N2(c),n=t.writeTree_.setTree(e,s);return new K1(n)}}}function Q8(t,e,c){let a=t;return n1(c,(s,n)=>{a=H6(a,F2(e,s),n)}),a}function l5(t,e){if(g2(e))return K1.empty();{const c=t.writeTree_.setTree(e,new N2(null));return new K1(c)}}function J8(t,e){return Q4(t,e)!=null}function Q4(t,e){const c=t.writeTree_.findRootMostValueAndPath(e);return c!=null?t.writeTree_.get(c.path).getChild(H1(c.path,e)):null}function f5(t){const e=[],c=t.writeTree_.value;return c!=null?c.isLeafNode()||c.forEachChild(B2,(a,s)=>{e.push(new v2(a,s))}):t.writeTree_.children.inorderTraversal((a,s)=>{s.value!=null&&e.push(new v2(a,s.value))}),e}function t4(t,e){if(g2(e))return t;{const c=Q4(t,e);return c!=null?new K1(new N2(c)):new K1(t.writeTree_.subtree(e))}}function Z8(t){return t.writeTree_.isEmpty()}function Ee(t,e){return Jl(M2(),t.writeTree_,e)}function Jl(t,e,c){if(e.value!=null)return c.updateChild(t,e.value);{let a=null;return e.children.inorderTraversal((s,n)=>{s===".priority"?(F(n.value!==null,"Priority writes must always be leaf nodes"),a=n.value):c=Jl(F2(t,s),n,c)}),!c.getChild(t).isEmpty()&&a!==null&&(c=c.updateChild(F2(t,".priority"),a)),c}}/**
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
 */function _s(t,e){return c9(e,t)}function Vy(t,e,c,a,s){F(a>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:c,writeId:a,visible:s}),s&&(t.visibleWrites=H6(t.visibleWrites,e,c)),t.lastWriteId=a}function _y(t,e,c,a){F(a>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:c,writeId:a,visible:!0}),t.visibleWrites=Q8(t.visibleWrites,e,c),t.lastWriteId=a}function Ly(t,e){for(let c=0;c<t.allWrites.length;c++){const a=t.allWrites[c];if(a.writeId===e)return a}return null}function by(t,e){const c=t.allWrites.findIndex(r=>r.writeId===e);F(c>=0,"removeWrite called with nonexistent writeId.");const a=t.allWrites[c];t.allWrites.splice(c,1);let s=a.visible,n=!1,i=t.allWrites.length-1;for(;s&&i>=0;){const r=t.allWrites[i];r.visible&&(i>=c&&wy(r,a.path)?s=!1:N1(a.path,r.path)&&(n=!0)),i--}if(s){if(n)return yy(t),!0;if(a.snap)t.visibleWrites=l5(t.visibleWrites,a.path);else{const r=a.children;n1(r,o=>{t.visibleWrites=l5(t.visibleWrites,F2(a.path,o))})}return!0}else return!1}function wy(t,e){if(t.snap)return N1(t.path,e);for(const c in t.children)if(t.children.hasOwnProperty(c)&&N1(F2(t.path,c),e))return!0;return!1}function yy(t){t.visibleWrites=Zl(t.allWrites,Sy,M2()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Sy(t){return t.visible}function Zl(t,e,c){let a=K1.empty();for(let s=0;s<t.length;++s){const n=t[s];if(e(n)){const i=n.path;let r;if(n.snap)N1(c,i)?(r=H1(c,i),a=H6(a,r,n.snap)):N1(i,c)&&(r=H1(i,c),a=H6(a,M2(),n.snap.getChild(r)));else if(n.children){if(N1(c,i))r=H1(c,i),a=Q8(a,r,n.children);else if(N1(i,c))if(r=H1(i,c),g2(r))a=Q8(a,M2(),n.children);else{const o=Se(n.children,m2(r));if(o){const l=o.getChild(T2(r));a=H6(a,M2(),l)}}}else throw Be("WriteRecord should have .snap or .children")}}return a}function e9(t,e,c,a,s){if(!a&&!s){const n=Q4(t.visibleWrites,e);if(n!=null)return n;{const i=t4(t.visibleWrites,e);if(Z8(i))return c;if(c==null&&!J8(i,M2()))return null;{const r=c||i2.EMPTY_NODE;return Ee(i,r)}}}else{const n=t4(t.visibleWrites,e);if(!s&&Z8(n))return c;if(!s&&c==null&&!J8(n,M2()))return null;{const i=function(l){return(l.visible||s)&&(!a||!~a.indexOf(l.writeId))&&(N1(l.path,e)||N1(e,l.path))},r=Zl(t.allWrites,i,e),o=c||i2.EMPTY_NODE;return Ee(r,o)}}}function xy(t,e,c){let a=i2.EMPTY_NODE;const s=Q4(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(B2,(n,i)=>{a=a.updateImmediateChild(n,i)}),a;if(c){const n=t4(t.visibleWrites,e);return c.forEachChild(B2,(i,r)=>{const o=Ee(t4(n,new w2(i)),r);a=a.updateImmediateChild(i,o)}),f5(n).forEach(i=>{a=a.updateImmediateChild(i.name,i.node)}),a}else{const n=t4(t.visibleWrites,e);return f5(n).forEach(i=>{a=a.updateImmediateChild(i.name,i.node)}),a}}function Ny(t,e,c,a,s){F(a||s,"Either existingEventSnap or existingServerSnap must exist");const n=F2(e,c);if(J8(t.visibleWrites,n))return null;{const i=t4(t.visibleWrites,n);return Z8(i)?s.getChild(c):Ee(i,s.getChild(c))}}function Ty(t,e,c,a){const s=F2(e,c),n=Q4(t.visibleWrites,s);if(n!=null)return n;if(a.isCompleteForChild(c)){const i=t4(t.visibleWrites,s);return Ee(i,a.getNode().getImmediateChild(c))}else return null}function Ey(t,e){return Q4(t.visibleWrites,e)}function ky(t,e,c,a,s,n,i){let r;const o=t4(t.visibleWrites,e),l=Q4(o,M2());if(l!=null)r=l;else if(c!=null)r=Ee(o,c);else return[];if(r=r.withIndex(i),!r.isEmpty()&&!r.isLeafNode()){const f=[],u=i.getCompare(),d=n?r.getReverseIteratorFrom(a,i):r.getIteratorFrom(a,i);let h=d.getNext();for(;h&&f.length<s;)u(h,a)!==0&&f.push(h),h=d.getNext();return f}else return[]}function Ay(){return{visibleWrites:K1.empty(),allWrites:[],lastWriteId:-1}}function mt(t,e,c,a){return e9(t.writeTree,t.treePath,e,c,a)}function Ls(t,e){return xy(t.writeTree,t.treePath,e)}function u5(t,e,c,a){return Ny(t.writeTree,t.treePath,e,c,a)}function vt(t,e){return Ey(t.writeTree,F2(t.treePath,e))}function Py(t,e,c,a,s,n){return ky(t.writeTree,t.treePath,e,c,a,s,n)}function bs(t,e,c){return Ty(t.writeTree,t.treePath,e,c)}function t9(t,e){return c9(F2(t.treePath,e),t.writeTree)}function c9(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Iy{constructor(){this.changeMap=new Map}trackChildChange(e){const c=e.type,a=e.childName;F(c==="child_added"||c==="child_changed"||c==="child_removed","Only child changes supported for tracking"),F(a!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(a);if(s){const n=s.type;if(c==="child_added"&&n==="child_removed")this.changeMap.set(a,R6(a,e.snapshotNode,s.snapshotNode));else if(c==="child_removed"&&n==="child_added")this.changeMap.delete(a);else if(c==="child_removed"&&n==="child_changed")this.changeMap.set(a,I6(a,s.oldSnap));else if(c==="child_changed"&&n==="child_added")this.changeMap.set(a,Ne(a,e.snapshotNode));else if(c==="child_changed"&&n==="child_changed")this.changeMap.set(a,R6(a,e.snapshotNode,s.oldSnap));else throw Be("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(a,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Ry{getCompleteChild(e){return null}getChildAfterChild(e,c,a){return null}}const a9=new Ry;class ws{constructor(e,c,a=null){this.writes_=e,this.viewCache_=c,this.optCompleteServerCache_=a}getCompleteChild(e){const c=this.viewCache_.eventCache;if(c.isCompleteForChild(e))return c.getNode().getImmediateChild(e);{const a=this.optCompleteServerCache_!=null?new U4(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return bs(this.writes_,e,a)}}getChildAfterChild(e,c,a){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:$4(this.viewCache_),n=Py(this.writes_,s,c,1,a,e);return n.length===0?null:n[0]}}/**
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
 */function Oy(t){return{filter:t}}function Dy(t,e){F(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),F(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Fy(t,e,c,a,s){const n=new Iy;let i,r;if(c.type===U1.OVERWRITE){const l=c;l.source.fromUser?i=ea(t,e,l.path,l.snap,a,s,n):(F(l.source.fromServer,"Unknown source."),r=l.source.tagged||e.serverCache.isFiltered()&&!g2(l.path),i=gt(t,e,l.path,l.snap,a,s,r,n))}else if(c.type===U1.MERGE){const l=c;l.source.fromUser?i=Uy(t,e,l.path,l.children,a,s,n):(F(l.source.fromServer,"Unknown source."),r=l.source.tagged||e.serverCache.isFiltered(),i=ta(t,e,l.path,l.children,a,s,r,n))}else if(c.type===U1.ACK_USER_WRITE){const l=c;l.revert?i=qy(t,e,l.path,a,s,n):i=$y(t,e,l.path,l.affectedTree,a,s,n)}else if(c.type===U1.LISTEN_COMPLETE)i=Wy(t,e,c.path,a,n);else throw Be("Unknown operation type: "+c.type);const o=n.getChanges();return By(e,i,o),{viewCache:i,changes:o}}function By(t,e,c){const a=e.eventCache;if(a.isFullyInitialized()){const s=a.getNode().isLeafNode()||a.getNode().isEmpty(),n=X8(t);(c.length>0||!t.eventCache.isFullyInitialized()||s&&!a.getNode().equals(n)||!a.getNode().getPriority().equals(n.getPriority()))&&c.push(Yl(X8(e)))}}function s9(t,e,c,a,s,n){const i=e.eventCache;if(vt(a,c)!=null)return e;{let r,o;if(g2(c))if(F(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=$4(e),f=l instanceof i2?l:i2.EMPTY_NODE,u=Ls(a,f);r=t.filter.updateFullNode(e.eventCache.getNode(),u,n)}else{const l=mt(a,$4(e));r=t.filter.updateFullNode(e.eventCache.getNode(),l,n)}else{const l=m2(c);if(l===".priority"){F(s4(c)===1,"Can't have a priority with additional path components");const f=i.getNode();o=e.serverCache.getNode();const u=u5(a,c,f,o);u!=null?r=t.filter.updatePriority(f,u):r=i.getNode()}else{const f=T2(c);let u;if(i.isCompleteForChild(l)){o=e.serverCache.getNode();const d=u5(a,c,i.getNode(),o);d!=null?u=i.getNode().getImmediateChild(l).updateChild(f,d):u=i.getNode().getImmediateChild(l)}else u=bs(a,l,e.serverCache);u!=null?r=t.filter.updateChild(i.getNode(),l,u,f,s,n):r=i.getNode()}}return g6(e,r,i.isFullyInitialized()||g2(c),t.filter.filtersNodes())}}function gt(t,e,c,a,s,n,i,r){const o=e.serverCache;let l;const f=i?t.filter:t.filter.getIndexedFilter();if(g2(c))l=f.updateFullNode(o.getNode(),a,null);else if(f.filtersNodes()&&!o.isFiltered()){const h=o.getNode().updateChild(c,a);l=f.updateFullNode(o.getNode(),h,null)}else{const h=m2(c);if(!o.isCompleteForPath(c)&&s4(c)>1)return e;const v=T2(c),C=o.getNode().getImmediateChild(h).updateChild(v,a);h===".priority"?l=f.updatePriority(o.getNode(),C):l=f.updateChild(o.getNode(),h,C,v,a9,null)}const u=Ql(e,l,o.isFullyInitialized()||g2(c),f.filtersNodes()),d=new ws(s,u,n);return s9(t,u,c,s,d,r)}function ea(t,e,c,a,s,n,i){const r=e.eventCache;let o,l;const f=new ws(s,e,n);if(g2(c))l=t.filter.updateFullNode(e.eventCache.getNode(),a,i),o=g6(e,l,!0,t.filter.filtersNodes());else{const u=m2(c);if(u===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),a),o=g6(e,l,r.isFullyInitialized(),r.isFiltered());else{const d=T2(c),h=r.getNode().getImmediateChild(u);let v;if(g2(d))v=a;else{const m=f.getCompleteChild(u);m!=null?ps(d)===".priority"&&m.getChild(Ul(d)).isEmpty()?v=m:v=m.updateChild(d,a):v=i2.EMPTY_NODE}if(h.equals(v))o=e;else{const m=t.filter.updateChild(r.getNode(),u,v,d,f,i);o=g6(e,m,r.isFullyInitialized(),t.filter.filtersNodes())}}}return o}function d5(t,e){return t.eventCache.isCompleteForChild(e)}function Uy(t,e,c,a,s,n,i){let r=e;return a.foreach((o,l)=>{const f=F2(c,o);d5(e,m2(f))&&(r=ea(t,r,f,l,s,n,i))}),a.foreach((o,l)=>{const f=F2(c,o);d5(e,m2(f))||(r=ea(t,r,f,l,s,n,i))}),r}function h5(t,e,c){return c.foreach((a,s)=>{e=e.updateChild(a,s)}),e}function ta(t,e,c,a,s,n,i,r){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let o=e,l;g2(c)?l=a:l=new N2(null).setTree(c,a);const f=e.serverCache.getNode();return l.children.inorderTraversal((u,d)=>{if(f.hasChild(u)){const h=e.serverCache.getNode().getImmediateChild(u),v=h5(t,h,d);o=gt(t,o,new w2(u),v,s,n,i,r)}}),l.children.inorderTraversal((u,d)=>{const h=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!f.hasChild(u)&&!h){const v=e.serverCache.getNode().getImmediateChild(u),m=h5(t,v,d);o=gt(t,o,new w2(u),m,s,n,i,r)}}),o}function $y(t,e,c,a,s,n,i){if(vt(s,c)!=null)return e;const r=e.serverCache.isFiltered(),o=e.serverCache;if(a.value!=null){if(g2(c)&&o.isFullyInitialized()||o.isCompleteForPath(c))return gt(t,e,c,o.getNode().getChild(c),s,n,r,i);if(g2(c)){let l=new N2(null);return o.getNode().forEachChild(ze,(f,u)=>{l=l.set(new w2(f),u)}),ta(t,e,c,l,s,n,r,i)}else return e}else{let l=new N2(null);return a.foreach((f,u)=>{const d=F2(c,f);o.isCompleteForPath(d)&&(l=l.set(f,o.getNode().getChild(d)))}),ta(t,e,c,l,s,n,r,i)}}function Wy(t,e,c,a,s){const n=e.serverCache,i=Ql(e,n.getNode(),n.isFullyInitialized()||g2(c),n.isFiltered());return s9(t,i,c,a,a9,s)}function qy(t,e,c,a,s,n){let i;if(vt(a,c)!=null)return e;{const r=new ws(a,e,s),o=e.eventCache.getNode();let l;if(g2(c)||m2(c)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=mt(a,$4(e));else{const u=e.serverCache.getNode();F(u instanceof i2,"serverChildren would be complete if leaf node"),f=Ls(a,u)}f=f,l=t.filter.updateFullNode(o,f,n)}else{const f=m2(c);let u=bs(a,f,e.serverCache);u==null&&e.serverCache.isCompleteForChild(f)&&(u=o.getImmediateChild(f)),u!=null?l=t.filter.updateChild(o,f,u,T2(c),r,n):e.eventCache.getNode().hasChild(f)?l=t.filter.updateChild(o,f,i2.EMPTY_NODE,T2(c),r,n):l=o,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(i=mt(a,$4(e)),i.isLeafNode()&&(l=t.filter.updateFullNode(l,i,n)))}return i=e.serverCache.isFullyInitialized()||vt(a,M2())!=null,g6(e,l,i,t.filter.filtersNodes())}}/**
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
 */class Gy{constructor(e,c){this.query_=e,this.eventRegistrations_=[];const a=this.query_._queryParams,s=new Hs(a.getIndex()),n=fy(a);this.processor_=Oy(n);const i=c.serverCache,r=c.eventCache,o=s.updateFullNode(i2.EMPTY_NODE,i.getNode(),null),l=n.updateFullNode(i2.EMPTY_NODE,r.getNode(),null),f=new U4(o,i.isFullyInitialized(),s.filtersNodes()),u=new U4(l,r.isFullyInitialized(),n.filtersNodes());this.viewCache_=cc(u,f),this.eventGenerator_=new gy(this.query_)}get query(){return this.query_}}function jy(t){return t.viewCache_.serverCache.getNode()}function Ky(t,e){const c=$4(t.viewCache_);return c&&(t.query._queryParams.loadsAllData()||!g2(e)&&!c.getImmediateChild(m2(e)).isEmpty())?c.getChild(e):null}function p5(t){return t.eventRegistrations_.length===0}function Yy(t,e){t.eventRegistrations_.push(e)}function m5(t,e,c){const a=[];if(c){F(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(n=>{const i=n.createCancelEvent(c,s);i&&a.push(i)})}if(e){let s=[];for(let n=0;n<t.eventRegistrations_.length;++n){const i=t.eventRegistrations_[n];if(!i.matches(e))s.push(i);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(n+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return a}function v5(t,e,c,a){e.type===U1.MERGE&&e.source.queryId!==null&&(F($4(t.viewCache_),"We should always have a full cache before handling merges"),F(X8(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,n=Fy(t.processor_,s,e,c,a);return Dy(t.processor_,n.viewCache),F(n.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=n.viewCache,n9(t,n.changes,n.viewCache.eventCache.getNode(),null)}function Xy(t,e){const c=t.viewCache_.eventCache,a=[];return c.getNode().isLeafNode()||c.getNode().forEachChild(B2,(n,i)=>{a.push(Ne(n,i))}),c.isFullyInitialized()&&a.push(Yl(c.getNode())),n9(t,a,c.getNode(),e)}function n9(t,e,c,a){const s=a?[a]:t.eventRegistrations_;return Hy(t.eventGenerator_,e,c,s)}/**
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
 */let Ht;class Qy{constructor(){this.views=new Map}}function Jy(t){F(!Ht,"__referenceConstructor has already been defined"),Ht=t}function Zy(){return F(Ht,"Reference.ts has not been loaded"),Ht}function eS(t){return t.views.size===0}function ys(t,e,c,a){const s=e.source.queryId;if(s!==null){const n=t.views.get(s);return F(n!=null,"SyncTree gave us an op for an invalid query."),v5(n,e,c,a)}else{let n=[];for(const i of t.views.values())n=n.concat(v5(i,e,c,a));return n}}function tS(t,e,c,a,s){const n=e._queryIdentifier,i=t.views.get(n);if(!i){let r=mt(c,s?a:null),o=!1;r?o=!0:a instanceof i2?(r=Ls(c,a),o=!1):(r=i2.EMPTY_NODE,o=!1);const l=cc(new U4(r,o,!1),new U4(a,s,!1));return new Gy(e,l)}return i}function cS(t,e,c,a,s,n){const i=tS(t,e,a,s,n);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,i),Yy(i,c),Xy(i,c)}function aS(t,e,c,a){const s=e._queryIdentifier,n=[];let i=[];const r=n4(t);if(s==="default")for(const[o,l]of t.views.entries())i=i.concat(m5(l,c,a)),p5(l)&&(t.views.delete(o),l.query._queryParams.loadsAllData()||n.push(l.query));else{const o=t.views.get(s);o&&(i=i.concat(m5(o,c,a)),p5(o)&&(t.views.delete(s),o.query._queryParams.loadsAllData()||n.push(o.query)))}return r&&!n4(t)&&n.push(new(Zy())(e._repo,e._path)),{removed:n,events:i}}function i9(t){const e=[];for(const c of t.views.values())c.query._queryParams.loadsAllData()||e.push(c);return e}function Ce(t,e){let c=null;for(const a of t.views.values())c=c||Ky(a,e);return c}function r9(t,e){if(e._queryParams.loadsAllData())return ac(t);{const a=e._queryIdentifier;return t.views.get(a)}}function o9(t,e){return r9(t,e)!=null}function n4(t){return ac(t)!=null}function ac(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let zt;function sS(t){F(!zt,"__referenceConstructor has already been defined"),zt=t}function nS(){return F(zt,"Reference.ts has not been loaded"),zt}let iS=1;class g5{constructor(e){this.listenProvider_=e,this.syncPointTree_=new N2(null),this.pendingWriteTree_=Ay(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function l9(t,e,c,a,s){return Vy(t.pendingWriteTree_,e,c,a,s),s?qe(t,new B4(Cs(),e,c)):[]}function rS(t,e,c,a){_y(t.pendingWriteTree_,e,c,a);const s=N2.fromObject(c);return qe(t,new Te(Cs(),e,s))}function G3(t,e,c=!1){const a=Ly(t.pendingWriteTree_,e);if(by(t.pendingWriteTree_,e)){let n=new N2(null);return a.snap!=null?n=n.set(M2(),!0):n1(a.children,i=>{n=n.set(new w2(i),!0)}),qe(t,new pt(a.path,n,c))}else return[]}function sc(t,e,c){return qe(t,new B4(Ms(),e,c))}function oS(t,e,c){const a=N2.fromObject(c);return qe(t,new Te(Ms(),e,a))}function lS(t,e){return qe(t,new D6(Ms(),e))}function fS(t,e,c){const a=xs(t,c);if(a){const s=Ns(a),n=s.path,i=s.queryId,r=H1(n,e),o=new D6(Vs(i),r);return Ts(t,n,o)}else return[]}function ca(t,e,c,a,s=!1){const n=e._path,i=t.syncPointTree_.get(n);let r=[];if(i&&(e._queryIdentifier==="default"||o9(i,e))){const o=aS(i,e,c,a);eS(i)&&(t.syncPointTree_=t.syncPointTree_.remove(n));const l=o.removed;if(r=o.events,!s){const f=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(n,(d,h)=>n4(h));if(f&&!u){const d=t.syncPointTree_.subtree(n);if(!d.isEmpty()){const h=hS(d);for(let v=0;v<h.length;++v){const m=h[v],C=m.query,H=d9(t,m);t.listenProvider_.startListening(z6(C),Ct(t,C),H.hashFn,H.onComplete)}}}!u&&l.length>0&&!a&&(f?t.listenProvider_.stopListening(z6(e),null):l.forEach(d=>{const h=t.queryToTagMap.get(nc(d));t.listenProvider_.stopListening(z6(d),h)}))}pS(t,l)}return r}function uS(t,e,c,a){const s=xs(t,a);if(s!=null){const n=Ns(s),i=n.path,r=n.queryId,o=H1(i,e),l=new B4(Vs(r),o,c);return Ts(t,i,l)}else return[]}function dS(t,e,c,a){const s=xs(t,a);if(s){const n=Ns(s),i=n.path,r=n.queryId,o=H1(i,e),l=N2.fromObject(c),f=new Te(Vs(r),o,l);return Ts(t,i,f)}else return[]}function H5(t,e,c,a=!1){const s=e._path;let n=null,i=!1;t.syncPointTree_.foreachOnPath(s,(d,h)=>{const v=H1(d,s);n=n||Ce(h,v),i=i||n4(h)});let r=t.syncPointTree_.get(s);r?(i=i||n4(r),n=n||Ce(r,M2())):(r=new Qy,t.syncPointTree_=t.syncPointTree_.set(s,r));let o;n!=null?o=!0:(o=!1,n=i2.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((h,v)=>{const m=Ce(v,M2());m&&(n=n.updateImmediateChild(h,m))}));const l=o9(r,e);if(!l&&!e._queryParams.loadsAllData()){const d=nc(e);F(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const h=mS();t.queryToTagMap.set(d,h),t.tagToQueryMap.set(h,d)}const f=_s(t.pendingWriteTree_,s);let u=cS(r,e,c,f,n,o);if(!l&&!i&&!a){const d=r9(r,e);u=u.concat(vS(t,e,d))}return u}function Ss(t,e,c){const s=t.pendingWriteTree_,n=t.syncPointTree_.findOnPath(e,(i,r)=>{const o=H1(i,e),l=Ce(r,o);if(l)return l});return e9(s,e,n,c,!0)}function qe(t,e){return f9(e,t.syncPointTree_,null,_s(t.pendingWriteTree_,M2()))}function f9(t,e,c,a){if(g2(t.path))return u9(t,e,c,a);{const s=e.get(M2());c==null&&s!=null&&(c=Ce(s,M2()));let n=[];const i=m2(t.path),r=t.operationForChild(i),o=e.children.get(i);if(o&&r){const l=c?c.getImmediateChild(i):null,f=t9(a,i);n=n.concat(f9(r,o,l,f))}return s&&(n=n.concat(ys(s,t,a,c))),n}}function u9(t,e,c,a){const s=e.get(M2());c==null&&s!=null&&(c=Ce(s,M2()));let n=[];return e.children.inorderTraversal((i,r)=>{const o=c?c.getImmediateChild(i):null,l=t9(a,i),f=t.operationForChild(i);f&&(n=n.concat(u9(f,r,o,l)))}),s&&(n=n.concat(ys(s,t,a,c))),n}function d9(t,e){const c=e.query,a=Ct(t,c);return{hashFn:()=>(jy(e)||i2.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return a?fS(t,c._path,a):lS(t,c._path);{const n=ow(s,c);return ca(t,c,null,n)}}}}function Ct(t,e){const c=nc(e);return t.queryToTagMap.get(c)}function nc(t){return t._path.toString()+"$"+t._queryIdentifier}function xs(t,e){return t.tagToQueryMap.get(e)}function Ns(t){const e=t.indexOf("$");return F(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new w2(t.substr(0,e))}}function Ts(t,e,c){const a=t.syncPointTree_.get(e);F(a,"Missing sync point for query tag that we're tracking");const s=_s(t.pendingWriteTree_,e);return ys(a,c,s,null)}function hS(t){return t.fold((e,c,a)=>{if(c&&n4(c))return[ac(c)];{let s=[];return c&&(s=i9(c)),n1(a,(n,i)=>{s=s.concat(i)}),s}})}function z6(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(nS())(t._repo,t._path):t}function pS(t,e){for(let c=0;c<e.length;++c){const a=e[c];if(!a._queryParams.loadsAllData()){const s=nc(a),n=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(n)}}}function mS(){return iS++}function vS(t,e,c){const a=e._path,s=Ct(t,e),n=d9(t,c),i=t.listenProvider_.startListening(z6(e),s,n.hashFn,n.onComplete),r=t.syncPointTree_.subtree(a);if(s)F(!n4(r.value),"If we're adding a query, it shouldn't be shadowed");else{const o=r.fold((l,f,u)=>{if(!g2(l)&&f&&n4(f))return[ac(f).query];{let d=[];return f&&(d=d.concat(i9(f).map(h=>h.query))),n1(u,(h,v)=>{d=d.concat(v)}),d}});for(let l=0;l<o.length;++l){const f=o[l];t.listenProvider_.stopListening(z6(f),Ct(t,f))}}return i}/**
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
 */class Es{constructor(e){this.node_=e}getImmediateChild(e){const c=this.node_.getImmediateChild(e);return new Es(c)}node(){return this.node_}}class ks{constructor(e,c){this.syncTree_=e,this.path_=c}getImmediateChild(e){const c=F2(this.path_,e);return new ks(this.syncTree_,c)}node(){return Ss(this.syncTree_,this.path_)}}const gS=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},z5=function(t,e,c){if(!t||typeof t!="object")return t;if(F(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return HS(t[".sv"],e,c);if(typeof t[".sv"]=="object")return zS(t[".sv"],e);F(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},HS=function(t,e,c){switch(t){case"timestamp":return c.timestamp;default:F(!1,"Unexpected server value: "+t)}},zS=function(t,e,c){t.hasOwnProperty("increment")||F(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const a=t.increment;typeof a!="number"&&F(!1,"Unexpected increment value: "+a);const s=e.node();if(F(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return a;const i=s.getValue();return typeof i!="number"?a:i+a},h9=function(t,e,c,a){return As(e,new ks(c,t),a)},p9=function(t,e,c){return As(t,new Es(e),c)};function As(t,e,c){const a=t.getPriority().val(),s=z5(a,e.getImmediateChild(".priority"),c);let n;if(t.isLeafNode()){const i=t,r=z5(i.getValue(),e,c);return r!==i.getValue()||s!==i.getPriority().val()?new X2(r,J2(s)):t}else{const i=t;return n=i,s!==i.getPriority().val()&&(n=n.updatePriority(new X2(s))),i.forEachChild(B2,(r,o)=>{const l=As(o,e.getImmediateChild(r),c);l!==o&&(n=n.updateImmediateChild(r,l))}),n}}/**
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
 */class Ps{constructor(e="",c=null,a={children:{},childCount:0}){this.name=e,this.parent=c,this.node=a}}function Is(t,e){let c=e instanceof w2?e:new w2(e),a=t,s=m2(c);for(;s!==null;){const n=Se(a.node.children,s)||{children:{},childCount:0};a=new Ps(s,a,n),c=T2(c),s=m2(c)}return a}function Ge(t){return t.node.value}function m9(t,e){t.node.value=e,aa(t)}function v9(t){return t.node.childCount>0}function CS(t){return Ge(t)===void 0&&!v9(t)}function ic(t,e){n1(t.node.children,(c,a)=>{e(new Ps(c,t,a))})}function g9(t,e,c,a){c&&!a&&e(t),ic(t,s=>{g9(s,e,!0,a)}),c&&a&&e(t)}function MS(t,e,c){let a=c?t:t.parent;for(;a!==null;){if(e(a))return!0;a=a.parent}return!1}function s0(t){return new w2(t.parent===null?t.name:s0(t.parent)+"/"+t.name)}function aa(t){t.parent!==null&&VS(t.parent,t.name,t)}function VS(t,e,c){const a=CS(c),s=l3(t.node.children,e);a&&s?(delete t.node.children[e],t.node.childCount--,aa(t)):!a&&!s&&(t.node.children[e]=c.node,t.node.childCount++,aa(t))}/**
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
 */const _S=/[\[\].#$\/\u0000-\u001F\u007F]/,LS=/[\[\].#$\u0000-\u001F\u007F]/,c8=10*1024*1024,Rs=function(t){return typeof t=="string"&&t.length!==0&&!_S.test(t)},H9=function(t){return typeof t=="string"&&t.length!==0&&!LS.test(t)},bS=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),H9(t)},wS=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!ls(t)||t&&typeof t=="object"&&l3(t,".sv")},yS=function(t,e,c,a){a&&e===void 0||rc(Kt(t,"value"),e,c)},rc=function(t,e,c){const a=c instanceof w2?new Uw(c,t):c;if(e===void 0)throw new Error(t+"contains undefined "+g4(a));if(typeof e=="function")throw new Error(t+"contains a function "+g4(a)+" with contents = "+e.toString());if(ls(e))throw new Error(t+"contains "+e.toString()+" "+g4(a));if(typeof e=="string"&&e.length>c8/3&&Yt(e)>c8)throw new Error(t+"contains a string greater than "+c8+" utf8 bytes "+g4(a)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,n=!1;if(n1(e,(i,r)=>{if(i===".value")s=!0;else if(i!==".priority"&&i!==".sv"&&(n=!0,!Rs(i)))throw new Error(t+" contains an invalid key ("+i+") "+g4(a)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);$w(a,i),rc(t,r,a),Ww(a)}),s&&n)throw new Error(t+' contains ".value" child '+g4(a)+" in addition to actual children.")}},SS=function(t,e){let c,a;for(c=0;c<e.length;c++){a=e[c];const n=P6(a);for(let i=0;i<n.length;i++)if(!(n[i]===".priority"&&i===n.length-1)){if(!Rs(n[i]))throw new Error(t+"contains an invalid key ("+n[i]+") in path "+a.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Bw);let s=null;for(c=0;c<e.length;c++){if(a=e[c],s!==null&&N1(s,a))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+a.toString());s=a}},xS=function(t,e,c,a){if(a&&e===void 0)return;const s=Kt(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const n=[];n1(e,(i,r)=>{const o=new w2(i);if(rc(s,r,F2(c,o)),ps(o)===".priority"&&!wS(r))throw new Error(s+"contains an invalid value for '"+o.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");n.push(o)}),SS(s,n)},z9=function(t,e,c,a){if(!(a&&c===void 0)&&!H9(c))throw new Error(Kt(t,e)+'was an invalid path = "'+c+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},NS=function(t,e,c,a){c&&(c=c.replace(/^\/*\.info(\/|$)/,"/")),z9(t,e,c,a)},TS=function(t,e){if(m2(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},ES=function(t,e){const c=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Rs(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||c.length!==0&&!bS(c))throw new Error(Kt(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class kS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function oc(t,e){let c=null;for(let a=0;a<e.length;a++){const s=e[a],n=s.getPath();c!==null&&!ms(n,c.path)&&(t.eventLists_.push(c),c=null),c===null&&(c={events:[],path:n}),c.events.push(s)}c&&t.eventLists_.push(c)}function C9(t,e,c){oc(t,c),M9(t,a=>ms(a,e))}function Q1(t,e,c){oc(t,c),M9(t,a=>N1(a,e)||N1(e,a))}function M9(t,e){t.recursionDepth_++;let c=!0;for(let a=0;a<t.eventLists_.length;a++){const s=t.eventLists_[a];if(s){const n=s.path;e(n)?(AS(t.eventLists_[a]),t.eventLists_[a]=null):c=!1}}c&&(t.eventLists_=[]),t.recursionDepth_--}function AS(t){for(let e=0;e<t.events.length;e++){const c=t.events[e];if(c!==null){t.events[e]=null;const a=c.getEventRunner();E4&&a1("event: "+c.toString()),We(a)}}}/**
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
 */const PS="repo_interrupt",IS=25;class RS{constructor(e,c,a,s){this.repoInfo_=e,this.forceRestClient_=c,this.authTokenProvider_=a,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new kS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ht(),this.transactionQueueTree_=new Ps,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function OS(t,e,c){if(t.stats_=ds(t.repoInfo_),t.forceRestClient_||dw())t.server_=new dt(t.repoInfo_,(a,s,n,i)=>{C5(t,a,s,n,i)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>M5(t,!0),0);else{if(typeof c<"u"&&c!==null){if(typeof c!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{e1(c)}catch(a){throw new Error("Invalid authOverride provided: "+a)}}t.persistentConnection_=new V3(t.repoInfo_,e,(a,s,n,i)=>{C5(t,a,s,n,i)},a=>{M5(t,a)},a=>{FS(t,a)},t.authTokenProvider_,t.appCheckProvider_,c),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(a=>{t.server_.refreshAuthToken(a)}),t.appCheckProvider_.addTokenChangeListener(a=>{t.server_.refreshAppCheckToken(a.token)}),t.statsReporter_=gw(t.repoInfo_,()=>new vy(t.stats_,t.server_)),t.infoData_=new uy,t.infoSyncTree_=new g5({startListening:(a,s,n,i)=>{let r=[];const o=t.infoData_.getNode(a._path);return o.isEmpty()||(r=sc(t.infoSyncTree_,a._path,o),setTimeout(()=>{i("ok")},0)),r},stopListening:()=>{}}),Os(t,"connected",!1),t.serverSyncTree_=new g5({startListening:(a,s,n,i)=>(t.server_.listen(a,n,s,(r,o)=>{const l=i(r,o);Q1(t.eventQueue_,a._path,l)}),[]),stopListening:(a,s)=>{t.server_.unlisten(a,s)}})}function DS(t){const c=t.infoData_.getNode(new w2(".info/serverTimeOffset")).val()||0;return new Date().getTime()+c}function lc(t){return gS({timestamp:DS(t)})}function C5(t,e,c,a,s){t.dataUpdateCount++;const n=new w2(e);c=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,c):c;let i=[];if(s)if(a){const o=tt(c,l=>J2(l));i=dS(t.serverSyncTree_,n,o,s)}else{const o=J2(c);i=uS(t.serverSyncTree_,n,o,s)}else if(a){const o=tt(c,l=>J2(l));i=oS(t.serverSyncTree_,n,o)}else{const o=J2(c);i=sc(t.serverSyncTree_,n,o)}let r=n;i.length>0&&(r=ke(t,n)),Q1(t.eventQueue_,r,i)}function M5(t,e){Os(t,"connected",e),e===!1&&$S(t)}function FS(t,e){n1(e,(c,a)=>{Os(t,c,a)})}function Os(t,e,c){const a=new w2("/.info/"+e),s=J2(c);t.infoData_.updateSnapshot(a,s);const n=sc(t.infoSyncTree_,a,s);Q1(t.eventQueue_,a,n)}function Ds(t){return t.nextWriteId_++}function BS(t,e,c,a,s){fc(t,"set",{path:e.toString(),value:c,priority:a});const n=lc(t),i=J2(c,a),r=Ss(t.serverSyncTree_,e),o=p9(i,r,n),l=Ds(t),f=l9(t.serverSyncTree_,e,o,l,!0);oc(t.eventQueue_,f),t.server_.put(e.toString(),i.val(!0),(d,h)=>{const v=d==="ok";v||d1("set at "+e+" failed: "+d);const m=G3(t.serverSyncTree_,l,!v);Q1(t.eventQueue_,e,m),sa(t,s,d,h)});const u=Bs(t,e);ke(t,u),Q1(t.eventQueue_,u,[])}function US(t,e,c,a){fc(t,"update",{path:e.toString(),value:c});let s=!0;const n=lc(t),i={};if(n1(c,(r,o)=>{s=!1,i[r]=h9(F2(e,r),J2(o),t.serverSyncTree_,n)}),s)a1("update() called with empty data.  Don't do anything."),sa(t,a,"ok",void 0);else{const r=Ds(t),o=rS(t.serverSyncTree_,e,i,r);oc(t.eventQueue_,o),t.server_.merge(e.toString(),c,(l,f)=>{const u=l==="ok";u||d1("update at "+e+" failed: "+l);const d=G3(t.serverSyncTree_,r,!u),h=d.length>0?ke(t,e):e;Q1(t.eventQueue_,h,d),sa(t,a,l,f)}),n1(c,l=>{const f=Bs(t,F2(e,l));ke(t,f)}),Q1(t.eventQueue_,e,[])}}function $S(t){fc(t,"onDisconnectEvents");const e=lc(t),c=ht();Y8(t.onDisconnect_,M2(),(s,n)=>{const i=h9(s,n,t.serverSyncTree_,e);Xl(c,s,i)});let a=[];Y8(c,M2(),(s,n)=>{a=a.concat(sc(t.serverSyncTree_,s,n));const i=Bs(t,s);ke(t,i)}),t.onDisconnect_=ht(),Q1(t.eventQueue_,M2(),a)}function WS(t,e,c){let a;m2(e._path)===".info"?a=H5(t.infoSyncTree_,e,c):a=H5(t.serverSyncTree_,e,c),C9(t.eventQueue_,e._path,a)}function V5(t,e,c){let a;m2(e._path)===".info"?a=ca(t.infoSyncTree_,e,c):a=ca(t.serverSyncTree_,e,c),C9(t.eventQueue_,e._path,a)}function qS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(PS)}function fc(t,...e){let c="";t.persistentConnection_&&(c=t.persistentConnection_.id+":"),a1(c,...e)}function sa(t,e,c,a){e&&We(()=>{if(c==="ok")e(null);else{const s=(c||"error").toUpperCase();let n=s;a&&(n+=": "+a);const i=new Error(n);i.code=s,e(i)}})}function V9(t,e,c){return Ss(t.serverSyncTree_,e,c)||i2.EMPTY_NODE}function Fs(t,e=t.transactionQueueTree_){if(e||uc(t,e),Ge(e)){const c=L9(t,e);F(c.length>0,"Sending zero length transaction queue"),c.every(s=>s.status===0)&&GS(t,s0(e),c)}else v9(e)&&ic(e,c=>{Fs(t,c)})}function GS(t,e,c){const a=c.map(l=>l.currentWriteId),s=V9(t,e,a);let n=s;const i=s.hash();for(let l=0;l<c.length;l++){const f=c[l];F(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const u=H1(e,f.path);n=n.updateChild(u,f.currentOutputSnapshotRaw)}const r=n.val(!0),o=e;t.server_.put(o.toString(),r,l=>{fc(t,"transaction put response",{path:o.toString(),status:l});let f=[];if(l==="ok"){const u=[];for(let d=0;d<c.length;d++)c[d].status=2,f=f.concat(G3(t.serverSyncTree_,c[d].currentWriteId)),c[d].onComplete&&u.push(()=>c[d].onComplete(null,!0,c[d].currentOutputSnapshotResolved)),c[d].unwatcher();uc(t,Is(t.transactionQueueTree_,e)),Fs(t,t.transactionQueueTree_),Q1(t.eventQueue_,e,f);for(let d=0;d<u.length;d++)We(u[d])}else{if(l==="datastale")for(let u=0;u<c.length;u++)c[u].status===3?c[u].status=4:c[u].status=0;else{d1("transaction at "+o.toString()+" failed: "+l);for(let u=0;u<c.length;u++)c[u].status=4,c[u].abortReason=l}ke(t,e)}},i)}function ke(t,e){const c=_9(t,e),a=s0(c),s=L9(t,c);return jS(t,s,a),a}function jS(t,e,c){if(e.length===0)return;const a=[];let s=[];const i=e.filter(r=>r.status===0).map(r=>r.currentWriteId);for(let r=0;r<e.length;r++){const o=e[r],l=H1(c,o.path);let f=!1,u;if(F(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),o.status===4)f=!0,u=o.abortReason,s=s.concat(G3(t.serverSyncTree_,o.currentWriteId,!0));else if(o.status===0)if(o.retryCount>=IS)f=!0,u="maxretry",s=s.concat(G3(t.serverSyncTree_,o.currentWriteId,!0));else{const d=V9(t,o.path,i);o.currentInputSnapshot=d;const h=e[r].update(d.val());if(h!==void 0){rc("transaction failed: Data returned ",h,o.path);let v=J2(h);typeof h=="object"&&h!=null&&l3(h,".priority")||(v=v.updatePriority(d.getPriority()));const C=o.currentWriteId,H=lc(t),p=p9(v,d,H);o.currentOutputSnapshotRaw=v,o.currentOutputSnapshotResolved=p,o.currentWriteId=Ds(t),i.splice(i.indexOf(C),1),s=s.concat(l9(t.serverSyncTree_,o.path,p,o.currentWriteId,o.applyLocally)),s=s.concat(G3(t.serverSyncTree_,C,!0))}else f=!0,u="nodata",s=s.concat(G3(t.serverSyncTree_,o.currentWriteId,!0))}Q1(t.eventQueue_,c,s),s=[],f&&(e[r].status=2,function(d){setTimeout(d,Math.floor(0))}(e[r].unwatcher),e[r].onComplete&&(u==="nodata"?a.push(()=>e[r].onComplete(null,!1,e[r].currentInputSnapshot)):a.push(()=>e[r].onComplete(new Error(u),!1,null))))}uc(t,t.transactionQueueTree_);for(let r=0;r<a.length;r++)We(a[r]);Fs(t,t.transactionQueueTree_)}function _9(t,e){let c,a=t.transactionQueueTree_;for(c=m2(e);c!==null&&Ge(a)===void 0;)a=Is(a,c),e=T2(e),c=m2(e);return a}function L9(t,e){const c=[];return b9(t,e,c),c.sort((a,s)=>a.order-s.order),c}function b9(t,e,c){const a=Ge(e);if(a)for(let s=0;s<a.length;s++)c.push(a[s]);ic(e,s=>{b9(t,s,c)})}function uc(t,e){const c=Ge(e);if(c){let a=0;for(let s=0;s<c.length;s++)c[s].status!==2&&(c[a]=c[s],a++);c.length=a,m9(e,c.length>0?c:void 0)}ic(e,a=>{uc(t,a)})}function Bs(t,e){const c=s0(_9(t,e)),a=Is(t.transactionQueueTree_,e);return MS(a,s=>{a8(t,s)}),a8(t,a),g9(a,s=>{a8(t,s)}),c}function a8(t,e){const c=Ge(e);if(c){const a=[];let s=[],n=-1;for(let i=0;i<c.length;i++)c[i].status===3||(c[i].status===1?(F(n===i-1,"All SENT items should be at beginning of queue."),n=i,c[i].status=3,c[i].abortReason="set"):(F(c[i].status===0,"Unexpected transaction status in abort"),c[i].unwatcher(),s=s.concat(G3(t.serverSyncTree_,c[i].currentWriteId,!0)),c[i].onComplete&&a.push(c[i].onComplete.bind(null,new Error("set"),!1,null))));n===-1?m9(e,void 0):c.length=n+1,Q1(t.eventQueue_,s0(e),s);for(let i=0;i<a.length;i++)We(a[i])}}/**
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
 */function KS(t){let e="";const c=t.split("/");for(let a=0;a<c.length;a++)if(c[a].length>0){let s=c[a];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function YS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const c of t.split("&")){if(c.length===0)continue;const a=c.split("=");a.length===2?e[decodeURIComponent(a[0])]=decodeURIComponent(a[1]):d1(`Invalid query segment '${c}' in query '${t}'`)}return e}const _5=function(t,e){const c=XS(t),a=c.namespace;c.domain==="firebase.com"&&b3(c.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!a||a==="undefined")&&c.domain!=="localhost"&&b3("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),c.secure||aw();const s=c.scheme==="ws"||c.scheme==="wss";return{repoInfo:new kl(c.host,c.secure,a,s,e,"",a!==c.subdomain),path:new w2(c.pathString)}},XS=function(t){let e="",c="",a="",s="",n="",i=!0,r="https",o=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(r=t.substring(0,l-1),t=t.substring(l+2));let f=t.indexOf("/");f===-1&&(f=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(f,u)),f<u&&(s=KS(t.substring(f,u)));const d=YS(t.substring(Math.min(t.length,u)));l=e.indexOf(":"),l>=0?(i=r==="https"||r==="wss",o=parseInt(e.substring(l+1),10)):l=e.length;const h=e.slice(0,l);if(h.toLowerCase()==="localhost")c="localhost";else if(h.split(".").length<=2)c=h;else{const v=e.indexOf(".");a=e.substring(0,v).toLowerCase(),c=e.substring(v+1),n=a}"ns"in d&&(n=d.ns)}return{host:e,port:o,domain:c,subdomain:a,secure:i,scheme:r,pathString:s,namespace:n}};/**
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
 */class w9{constructor(e,c,a,s){this.eventType=e,this.eventRegistration=c,this.snapshot=a,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+e1(this.snapshot.exportVal())}}class y9{constructor(e,c,a){this.eventRegistration=e,this.error=c,this.path=a}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class QS{constructor(e,c){this.snapshotCallback=e,this.cancelCallback=c}onValue(e,c){this.snapshotCallback.call(null,e,c)}onCancel(e){return F(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Us{constructor(e,c,a,s){this._repo=e,this._path=c,this._queryParams=a,this._orderByCalled=s}get key(){return g2(this._path)?null:ps(this._path)}get ref(){return new T3(this._repo,this._path)}get _queryIdentifier(){const e=r5(this._queryParams),c=fs(e);return c==="{}"?"default":c}get _queryObject(){return r5(this._queryParams)}isEqual(e){if(e=Y2(e),!(e instanceof Us))return!1;const c=this._repo===e._repo,a=ms(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return c&&a&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Fw(this._path)}}class T3 extends Us{constructor(e,c){super(e,c,new zs,!1)}get parent(){const e=Ul(this._path);return e===null?null:new T3(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class F6{constructor(e,c,a){this._node=e,this.ref=c,this._index=a}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const c=new w2(e),a=Mt(this.ref,e);return new F6(this._node.getChild(c),a,B2)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(a,s)=>e(new F6(s,Mt(this.ref,a),B2)))}hasChild(e){const c=new w2(e);return!this._node.getChild(c).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function j3(t,e){return t=Y2(t),t._checkNotDeleted("ref"),e!==void 0?Mt(t._root,e):t._root}function Mt(t,e){return t=Y2(t),m2(t._path)===null?NS("child","path",e,!1):z9("child","path",e,!1),new T3(t._repo,F2(t._path,e))}function L5(t,e){t=Y2(t),TS("set",t._path),yS("set",e,t._path,!1);const c=new K6;return BS(t._repo,t._path,e,null,c.wrapCallback(()=>{})),c.promise}function $s(t,e){xS("update",e,t._path,!1);const c=new K6;return US(t._repo,t._path,e,c.wrapCallback(()=>{})),c.promise}class Ws{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,c){const a=c._queryParams.getIndex();return new w9("value",this,new F6(e.snapshotNode,new T3(c._repo,c._path),a))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,c){return this.callbackContext.hasCancelCallback?new y9(this,e,c):null}matches(e){return e instanceof Ws?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class qs{constructor(e,c){this.eventType=e,this.callbackContext=c}respondsTo(e){let c=e==="children_added"?"child_added":e;return c=c==="children_removed"?"child_removed":c,this.eventType===c}createCancelEvent(e,c){return this.callbackContext.hasCancelCallback?new y9(this,e,c):null}createEvent(e,c){F(e.childName!=null,"Child events should have a childName.");const a=Mt(new T3(c._repo,c._path),e.childName),s=c._queryParams.getIndex();return new w9(e.type,this,new F6(e.snapshotNode,a,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof qs?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function JS(t,e,c,a,s){let n;if(typeof a=="object"&&(n=void 0,s=a),typeof a=="function"&&(n=a),s&&s.onlyOnce){const o=c,l=(f,u)=>{V5(t._repo,t,r),o(f,u)};l.userCallback=c.userCallback,l.context=c.context,c=l}const i=new QS(c,n||void 0),r=e==="value"?new Ws(i):new qs(e,i);return WS(t._repo,t,r),()=>V5(t._repo,t,r)}function Gs(t,e,c,a){return JS(t,"value",e,c,a)}Jy(T3);sS(T3);/**
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
 */const ZS="FIREBASE_DATABASE_EMULATOR_HOST",na={};let ex=!1;function tx(t,e,c,a){t.repoInfo_=new kl(`${e}:${c}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),a&&(t.authTokenProvider_=a)}function cx(t,e,c,a,s){let n=a||t.options.databaseURL;n===void 0&&(t.options.projectId||b3("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),a1("Using default host for project ",t.options.projectId),n=`${t.options.projectId}-default-rtdb.firebaseio.com`);let i=_5(n,s),r=i.repoInfo,o,l;typeof process<"u"&&$r&&(l=$r[ZS]),l?(o=!0,n=`http://${l}?ns=${r.namespace}`,i=_5(n,s),r=i.repoInfo):o=!i.repoInfo.secure;const f=s&&o?new He(He.OWNER):new pw(t.name,t.options,e);ES("Invalid Firebase Database URL",i),g2(i.path)||b3("Database URL must point to the root of a Firebase Database (not including a child path).");const u=sx(r,t,f,new hw(t.name,c));return new nx(u,t)}function ax(t,e){const c=na[e];(!c||c[t.key]!==t)&&b3(`Database ${e}(${t.repoInfo_}) has already been deleted.`),qS(t),delete c[t.key]}function sx(t,e,c,a){let s=na[e.name];s||(s={},na[e.name]=s);let n=s[t.toURLString()];return n&&b3("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),n=new RS(t,ex,c,a),s[t.toURLString()]=n,n}class nx{constructor(e,c){this._repoInternal=e,this.app=c,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(OS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new T3(this._repo,M2())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ax(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&b3("Cannot call "+e+" on a deleted database.")}}function ix(t=Xt(),e){const c=X6(t,"database").getImmediate({identifier:e});if(!c._instanceStarted){const a=Ya("database");a&&rx(c,...a)}return c}function rx(t,e,c,a={}){t=Y2(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&b3("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let n;if(s.repoInfo_.nodeAdmin)a.mockUserToken&&b3('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),n=new He(He.OWNER);else if(a.mockUserToken){const i=typeof a.mockUserToken=="string"?a.mockUserToken:To(a.mockUserToken,t.app.options.projectId);n=new He(i)}tx(s,e,c,n)}/**
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
 */function ox(t){Jb(Y4),a4(new _3("database",(e,{instanceIdentifier:c})=>{const a=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),n=e.getProvider("app-check-internal");return cx(a,s,n,c)},"PUBLIC").setMultipleInstances(!0)),E1(Wr,qr,t),E1(Wr,qr,"esm2017")}V3.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};V3.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ox();/**
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
 */const S9="firebasestorage.googleapis.com",x9="storageBucket",lx=2*60*1e3,fx=10*60*1e3;/**
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
 */class c1 extends N3{constructor(e,c,a=0){super(s8(e),`Firebase Storage: ${c} (${s8(e)})`),this.status_=a,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,c1.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return s8(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var t1;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(t1||(t1={}));function s8(t){return"storage/"+t}function N9(){const t="An unknown error occurred, please check the error payload for server response.";return new c1(t1.UNKNOWN,t)}function ux(t){return new c1(t1.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function dx(t){return new c1(t1.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function hx(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new c1(t1.UNAUTHENTICATED,t)}function px(){return new c1(t1.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function mx(t){return new c1(t1.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function vx(){return new c1(t1.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function gx(){return new c1(t1.CANCELED,"User canceled the upload/download.")}function Hx(t){return new c1(t1.INVALID_URL,"Invalid URL '"+t+"'.")}function zx(t){return new c1(t1.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Cx(){return new c1(t1.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+x9+"' property when initializing the app?")}function Mx(){return new c1(t1.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ia(t){return new c1(t1.INVALID_ARGUMENT,t)}function T9(){return new c1(t1.APP_DELETED,"The Firebase app was deleted.")}function Vx(t){return new c1(t1.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function c6(t){throw new c1(t1.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class y1{constructor(e,c){this.bucket=e,this.path_=c}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,c){let a;try{a=y1.makeFromUrl(e,c)}catch{return new y1(e,"")}if(a.path==="")return a;throw zx(e)}static makeFromUrl(e,c){let a=null;const s="([A-Za-z0-9.\\-_]+)";function n(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const i="(/(.*))?$",r=new RegExp("^gs://"+s+i,"i"),o={bucket:1,path:3};function l(_){_.path_=decodeURIComponent(_.path)}const f="v[A-Za-z0-9_]+",u=c.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",h=new RegExp(`^https?://${u}/${f}/b/${s}/o${d}`,"i"),v={bucket:1,path:3},m=c===S9?"(?:storage.googleapis.com|storage.cloud.google.com)":c,C="([^?#]*)",H=new RegExp(`^https?://${m}/${s}/${C}`,"i"),g=[{regex:r,indices:o,postModify:n},{regex:h,indices:v,postModify:l},{regex:H,indices:{bucket:1,path:2},postModify:l}];for(let _=0;_<g.length;_++){const L=g[_],k=L.regex.exec(e);if(k){const $=k[L.indices.bucket];let N=k[L.indices.path];N||(N=""),a=new y1($,N),L.postModify(a);break}}if(a==null)throw Hx(e);return a}}class _x{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Lx(t,e,c){let a=1,s=null,n=null,i=!1,r=0;function o(){return r===2}let l=!1;function f(...C){l||(l=!0,e.apply(null,C))}function u(C){s=setTimeout(()=>{s=null,t(h,o())},C)}function d(){n&&clearTimeout(n)}function h(C,...H){if(l){d();return}if(C){d(),f.call(null,C,...H);return}if(o()||i){d(),f.call(null,C,...H);return}a<64&&(a*=2);let g;r===1?(r=2,g=0):g=(a+Math.random())*1e3,u(g)}let v=!1;function m(C){v||(v=!0,d(),!l&&(s!==null?(C||(r=2),clearTimeout(s),u(0)):C||(r=1)))}return u(0),n=setTimeout(()=>{i=!0,m(!0)},c),m}function bx(t){t(!1)}/**
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
 */function wx(t){return t!==void 0}function yx(t){return typeof t=="object"&&!Array.isArray(t)}function E9(t){return typeof t=="string"||t instanceof String}function b5(t,e,c,a){if(a<e)throw ia(`Invalid value for '${t}'. Expected ${e} or greater.`);if(a>c)throw ia(`Invalid value for '${t}'. Expected ${c} or less.`)}/**
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
 */function k9(t,e,c){let a=e;return c==null&&(a=`https://${e}`),`${c}://${a}/v0${t}`}function A9(t){const e=encodeURIComponent;let c="?";for(const a in t)if(t.hasOwnProperty(a)){const s=e(a)+"="+e(t[a]);c=c+s+"&"}return c=c.slice(0,-1),c}/**
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
 */var k4;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(k4||(k4={}));/**
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
 */function Sx(t,e){const c=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,n=e.indexOf(t)!==-1;return c||s||n}/**
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
 */class xx{constructor(e,c,a,s,n,i,r,o,l,f,u,d=!0){this.url_=e,this.method_=c,this.headers_=a,this.body_=s,this.successCodes_=n,this.additionalRetryCodes_=i,this.callback_=r,this.errorCallback_=o,this.timeout_=l,this.progressCallback_=f,this.connectionFactory_=u,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((h,v)=>{this.resolve_=h,this.reject_=v,this.start_()})}start_(){const e=(a,s)=>{if(s){a(!1,new _0(!1,null,!0));return}const n=this.connectionFactory_();this.pendingConnection_=n;const i=r=>{const o=r.loaded,l=r.lengthComputable?r.total:-1;this.progressCallback_!==null&&this.progressCallback_(o,l)};this.progressCallback_!==null&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const r=n.getErrorCode()===k4.NO_ERROR,o=n.getStatus();if(!r||Sx(o,this.additionalRetryCodes_)&&this.retry){const f=n.getErrorCode()===k4.ABORT;a(!1,new _0(!1,null,f));return}const l=this.successCodes_.indexOf(o)!==-1;a(!0,new _0(l,n))})},c=(a,s)=>{const n=this.resolve_,i=this.reject_,r=s.connection;if(s.wasSuccessCode)try{const o=this.callback_(r,r.getResponse());wx(o)?n(o):n()}catch(o){i(o)}else if(r!==null){const o=N9();o.serverResponse=r.getErrorText(),this.errorCallback_?i(this.errorCallback_(r,o)):i(o)}else if(s.canceled){const o=this.appDelete_?T9():gx();i(o)}else{const o=vx();i(o)}};this.canceled_?c(!1,new _0(!1,null,!0)):this.backoffId_=Lx(e,c,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _0{constructor(e,c,a){this.wasSuccessCode=e,this.connection=c,this.canceled=!!a}}function Nx(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Tx(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ex(t,e){e&&(t["X-Firebase-GMPID"]=e)}function kx(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Ax(t,e,c,a,s,n,i=!0){const r=A9(t.urlParams),o=t.url+r,l=Object.assign({},t.headers);return Ex(l,e),Nx(l,c),Tx(l,n),kx(l,a),new xx(o,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,i)}/**
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
 */function P9(t){let e;try{e=JSON.parse(t)}catch{return null}return yx(e)?e:null}/**
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
 */function Px(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Ix(t,e){const c=e.split("/").filter(a=>a.length>0).join("/");return t.length===0?c:t+"/"+c}function I9(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Rx(t,e){return e}class l1{constructor(e,c,a,s){this.server=e,this.local=c||e,this.writable=!!a,this.xform=s||Rx}}let L0=null;function Ox(t){return!E9(t)||t.length<2?t:I9(t)}function Dx(){if(L0)return L0;const t=[];t.push(new l1("bucket")),t.push(new l1("generation")),t.push(new l1("metageneration")),t.push(new l1("name","fullPath",!0));function e(n,i){return Ox(i)}const c=new l1("name");c.xform=e,t.push(c);function a(n,i){return i!==void 0?Number(i):i}const s=new l1("size");return s.xform=a,t.push(s),t.push(new l1("timeCreated")),t.push(new l1("updated")),t.push(new l1("md5Hash",null,!0)),t.push(new l1("cacheControl",null,!0)),t.push(new l1("contentDisposition",null,!0)),t.push(new l1("contentEncoding",null,!0)),t.push(new l1("contentLanguage",null,!0)),t.push(new l1("contentType",null,!0)),t.push(new l1("metadata","customMetadata",!0)),L0=t,L0}function Fx(t,e){function c(){const a=t.bucket,s=t.fullPath,n=new y1(a,s);return e._makeStorageReference(n)}Object.defineProperty(t,"ref",{get:c})}function Bx(t,e,c){const a={};a.type="file";const s=c.length;for(let n=0;n<s;n++){const i=c[n];a[i.local]=i.xform(a,e[i.server])}return Fx(a,t),a}function Ux(t,e,c){const a=P9(e);return a===null?null:Bx(t,a,c)}function $x(t,e,c,a){const s=P9(e);if(s===null||!E9(s.downloadTokens))return null;const n=s.downloadTokens;if(n.length===0)return null;const i=encodeURIComponent;return n.split(",").map(l=>{const f=t.bucket,u=t.fullPath,d="/b/"+i(f)+"/o/"+i(u),h=k9(d,c,a),v=A9({alt:"media",token:l});return h+v})[0]}class Wx{constructor(e,c,a,s){this.url=e,this.method=c,this.handler=a,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function qx(t){if(!t)throw N9()}function Gx(t,e){function c(a,s){const n=Ux(t,s,e);return qx(n!==null),$x(n,s,t.host,t._protocol)}return c}function jx(t){function e(c,a){let s;return c.getStatus()===401?c.getErrorText().includes("Firebase App Check token is invalid")?s=px():s=hx():c.getStatus()===402?s=dx(t.bucket):c.getStatus()===403?s=mx(t.path):s=a,s.status=c.getStatus(),s.serverResponse=a.serverResponse,s}return e}function Kx(t){const e=jx(t);function c(a,s){let n=e(a,s);return a.getStatus()===404&&(n=ux(t.path)),n.serverResponse=s.serverResponse,n}return c}function Yx(t,e,c){const a=e.fullServerUrl(),s=k9(a,t.host,t._protocol),n="GET",i=t.maxOperationRetryTime,r=new Wx(s,n,Gx(t,c),i);return r.errorHandler=Kx(e),r}class Xx{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=k4.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=k4.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=k4.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,c,a,s){if(this.sent_)throw c6("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(c,e,!0),s!==void 0)for(const n in s)s.hasOwnProperty(n)&&this.xhr_.setRequestHeader(n,s[n].toString());return a!==void 0?this.xhr_.send(a):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw c6("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw c6("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw c6("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw c6("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Qx extends Xx{initXhr(){this.xhr_.responseType="text"}}function Jx(){return new Qx}/**
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
 */class W4{constructor(e,c){this._service=e,c instanceof y1?this._location=c:this._location=y1.makeFromUrl(c,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,c){return new W4(e,c)}get root(){const e=new y1(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return I9(this._location.path)}get storage(){return this._service}get parent(){const e=Px(this._location.path);if(e===null)return null;const c=new y1(this._location.bucket,e);return new W4(this._service,c)}_throwIfRoot(e){if(this._location.path==="")throw Vx(e)}}function Zx(t){t._throwIfRoot("getDownloadURL");const e=Yx(t.storage,t._location,Dx());return t.storage.makeRequestWithTokens(e,Jx).then(c=>{if(c===null)throw Mx();return c})}function eN(t,e){const c=Ix(t._location.path,e),a=new y1(t._location.bucket,c);return new W4(t.storage,a)}/**
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
 */function tN(t){return/^[A-Za-z]+:\/\//.test(t)}function cN(t,e){return new W4(t,e)}function R9(t,e){if(t instanceof js){const c=t;if(c._bucket==null)throw Cx();const a=new W4(c,c._bucket);return e!=null?R9(a,e):a}else return e!==void 0?eN(t,e):t}function aN(t,e){if(e&&tN(e)){if(t instanceof js)return cN(t,e);throw ia("To use ref(service, url), the first argument must be a Storage instance.")}else return R9(t,e)}function w5(t,e){const c=e==null?void 0:e[x9];return c==null?null:y1.makeFromBucketSpec(c,t)}function sN(t,e,c,a={}){t.host=`${e}:${c}`,t._protocol="http";const{mockUserToken:s}=a;s&&(t._overrideAuthToken=typeof s=="string"?s:To(s,t.app.options.projectId))}class js{constructor(e,c,a,s,n){this.app=e,this._authProvider=c,this._appCheckProvider=a,this._url=s,this._firebaseVersion=n,this._bucket=null,this._host=S9,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=lx,this._maxUploadRetryTime=fx,this._requests=new Set,s!=null?this._bucket=y1.makeFromBucketSpec(s,this._host):this._bucket=w5(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=y1.makeFromBucketSpec(this._url,e):this._bucket=w5(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){b5("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){b5("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const c=await e.getToken();if(c!==null)return c.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new W4(this,e)}_makeRequest(e,c,a,s,n=!0){if(this._deleted)return new _x(T9());{const i=Ax(e,this._appId,a,s,c,this._firebaseVersion,n);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,c){const[a,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,c,a,s).getPromise()}}const y5="@firebase/storage",S5="0.12.2";/**
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
 */const O9="storage";function nN(t){return t=Y2(t),Zx(t)}function iN(t,e){return t=Y2(t),aN(t,e)}function rN(t=Xt(),e){t=Y2(t);const a=X6(t,O9).getImmediate({identifier:e}),s=Ya("storage");return s&&oN(a,...s),a}function oN(t,e,c,a={}){sN(t,e,c,a)}function lN(t,{instanceIdentifier:e}){const c=t.getProvider("app").getImmediate(),a=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new js(c,a,s,e,Y4)}function fN(){a4(new _3(O9,lN,"PUBLIC").setMultipleInstances(!0)),E1(y5,S5,""),E1(y5,S5,"esm2017")}fN();const uN={apiKey:"AIzaSyBk_WqKQCd9SP39rqI8XSFWmsaNqxu3AtA",authDomain:"dasparfum-e06ae.firebaseapp.com",projectId:"dasparfum-e06ae",storageBucket:"dasparfum-e06ae.appspot.com",messagingSenderId:"352920630111",appId:"1:352920630111:web:7a40a92d632d267cad7cea",measurementId:"G-PWW5440LDN"},D9=Ro(uN),dN=rN(),K3=ix(),a6=Db(D9);Xb(D9,"asia-northeast1");const d4=De("cart",{state:()=>({cartList:[]}),actions:{addProduct(t){const e=this.cartList.find(c=>c.id===t.id&&c.selectedSizeIndex===t.selectedSizeIndex);if(e)e.quantity+=1;else{let c=JSON.parse(JSON.stringify(t));c.quantity=1,this.cartList.push(c)}},deleteProduct(t){this.cartList=this.cartList.filter(e=>e.id!==t.id)},setList(t){console.log(t,"ssetlist"),Array.isArray(t)?this.cartList=t:this.cartList=[]},submit(){const t=h4(),e=j3(K3,"users/"+t.user.uid);$s(e,{order:this.cartList}),this.clearCart()},clearCart(){this.cartList=[]}}}),F9=De("order",{state:()=>({order:[]}),actions:{getOrder(){const t=h4(),e=j3(K3,"users/"+t.user.uid);Gs(e,c=>{const a=c.val();this.userDb=a,this.order=this.userDb.order})},clearOrder(){this.order=[]}}}),r3=De("ui",{state:()=>({loginPopup:!1,cartPreview:!1,menuFadeIn:!1}),actions:{showLoginPopup(){this.loginPopup=!0},hideLoginPopup(){this.loginPopup=!1},showCartPreview(){this.cartPreview=!0},hideCartPreview(){this.cartPreview=!1},toggleMenuFadeIn(){this.menuFadeIn=!this.menuFadeIn}}}),hN=new h3,h4=De("auth",{state:()=>({user:null,userDb:null}),getters:{isLogin(){return this.user!==null}},actions:{signInWithGoogle(){try{KL(a6,hN).then(t=>{const e=t;this.user=e.user,this.createGoogleUserData().then(()=>(this.getUserData(),r3().hideLoginPopup(),!0))})}catch(t){return console.error(t),!1}},createGoogleUserData(){const t=j3(K3,"users/"+this.user.uid);return L5(t,{name:this.user.displayName})},signInWithEmail(t,e){_L(a6,t,e).then(c=>c.user).then(c=>{console.log(c,"useruser"),this.user=c,this.getUserData(c),r3().hideLoginPopup()}).catch(c=>{console.log("登入帳密錯誤",c)})},signUpWithEmail(t,e){VL(a6,t,e).then(c=>c.user).then(c=>{this.user=c,this.createUserData(c.email.split("@")[0]),r3().hideLoginPopup()}).catch(c=>{console.log("註冊失敗，直接登入",t,e),this.signInWithEmail(t,e)})},createUserData(t){const e=j3(K3,"users/"+this.user.uid);return L5(e,{name:t})},getUserData(){return new Promise(t=>{const e=j3(K3,"users/"+this.user.uid);Gs(e,c=>{const a=c.val();this.userDb=a,t()})})},checkAuthState(){return new Promise((t,e)=>{wL(a6,c=>{console.log(c,"user"),c?(this.user=c,this.getUserData().then(()=>{t(c)})):(this.user=null,t(null))},e)})},setCartData(){const e=d4().cartList;console.log(e,"shopcartList");const c=j3(K3,"users/"+this.user.uid);$s(c,{cart:e})},logout(){yL(a6).then(t=>{console.log(t,"res"),this.user=null,this.clearUserData()})},clearUserData(){const t=F9();this.user=null,this.userDb=null,t.clearOrder()}}}),Ks=t=>(h1("data-v-54743880"),t=t(),p1(),t),pN={key:0,class:"login-dialogue"},mN={class:"wrapper"},vN=Ks(()=>z("div",{class:"loginTitle"},"登入您的帳號",-1)),gN=Ks(()=>z("div",{class:"email"},"電子郵件",-1)),HN=Ks(()=>z("div",{class:"password"},"密碼",-1)),zN={__name:"Login",setup(t){const e=r3(),a=j1(e).loginPopup,s=d2(""),n=d2(""),i=d2(""),r=h4();function o(){r.signUpWithEmail(s.value,n.value,i.value)}function l(){r.signInWithGoogle()}return(f,u)=>{const d=Y1("icon");return X(a)?(Q(),s2("div",pN,[t2(d,{class:"closed",icon:"xmark",onClick:X(e).hideLoginPopup},null,8,["onClick"]),z("div",mN,[vN,gN,G1(z("input",{type:"email","onUpdate:modelValue":u[0]||(u[0]=h=>s.value=h),name:"email",placeholder:"輸入您的電子郵件，務必含有＠"},null,512),[[Yi,s.value]]),HN,G1(z("input",{type:"password","onUpdate:modelValue":u[1]||(u[1]=h=>n.value=h),name:"password",placeholder:"輸入密碼"},null,512),[[Yi,n.value]]),z("div",{class:"loginWrapper"},[z("div",{class:"loginButton"},[z("button",{onClick:o},"登入")]),z("div",{class:"loginButton"},[z("button",{onClick:l},"google登入")])])])])):z4("",!0)}}},CN=K2(zN,[["__scopeId","data-v-54743880"]]),Ys=De("wish",{state:()=>({wishList:[]}),actions:{addProduct(t){const e=this.wishList.find(c=>c.id===t.id&&c.selectedSizeIndex===t.selectedSizeIndex);if(e)e.quantity+=1;else{let c=JSON.parse(JSON.stringify(t));c.quantity=1,this.wishList.push(c)}},deleteProduct(t){this.wishList=this.wishList.filter(e=>e.id!==t.id)},setList(t){Array.isArray(t)?this.wishList=t:this.wishList=[]},submit(){const t=h4(),e=j3(K3,"users/"+t.user.uid);$s(e,{wish:this.wishList}),this.clearCart()},clearWishList(){this.wishList=[]}}}),dc=t=>(h1("data-v-4da65fc8"),t=t(),p1(),t),MN={class:"content"},VN={class:"productWrapper"},_N={class:"name"},LN={class:"detailWrapper"},bN={class:"capacity"},wN=dc(()=>z("div",{class:"title"},"容量",-1)),yN={class:"unitPrice"},SN=dc(()=>z("div",{class:"title"},"單價",-1)),xN={class:"quantity"},NN=dc(()=>z("div",{class:"title"},"數量",-1)),TN=dc(()=>z("button",null,"前往結帳",-1)),EN=[TN],kN={__name:"PreviewCart",setup(t,{expose:e}){const c=r3(),a=j1(c),n=j1(d4()).cartList,i=P1(),r=Ys();j1(r).wishList;const l=a.cartPreview;function f(){c.showCartPreview()}function u(){c.hideCartPreview()}e({show:f,hide:u});function d(){i.push("/CartshopView")}return(h,v)=>X(l)?(Q(),s2("div",{key:0,class:"previewWrapper",onMouseleave:u},[z("div",MN,[z("div",VN,[(Q(!0),s2(A2,null,u1(X(n),(m,C)=>(Q(),s2("div",{class:"item",key:C},[z("div",_N,n2(m.title),1),z("div",LN,[z("div",bN,[wN,b1(" "+n2(m.sizeList[m.selectedSizeIndex].capacity)+" ml ",1)]),z("div",yN,[SN,b1(" "+n2(m.sizeList[m.selectedSizeIndex].price),1)]),z("div",xN,[NN,b1(" "+n2(m.quantity),1)])])]))),128))]),z("div",{class:"buttonWrapper",onClick:d},EN)])],32)):z4("",!0)}},AN=K2(kN,[["__scopeId","data-v-4da65fc8"]]),n0=De("product",{state:()=>({productList:null,filterList:null}),actions:{getProductList(){return new Promise(t=>{const e=j3(K3,"product");Gs(e,c=>{const a=c.val();console.log(a),a.forEach(s=>{s.sizeList.forEach(n=>{this.getProductImage(n)})}),setTimeout(()=>{this.productList=a,this.filterList=a},1e3)})})},getProductImage(t){const e=iN(dN,t.imagePath);nN(e).then(c=>{const a=c;t.imageSrc=a}).catch(c=>{t.imageSrc=null,console.log(c)})},setCurrentProduct(t){this.currentProduct=t},setFilterList(t){t==="all"?this.filterList=this.productList:this.filterList=this.productList.filter(e=>e.tag===t)}}}),Xs=""+new URL("LOGO-WQH0Ww7K.png",import.meta.url).href,PN={__name:"AppNavbar",setup(t){const e=r3();function c(){e.toggleMenuFadeIn()}return(a,s)=>{const n=Y1("RouterLink");return Q(),s2("div",{class:G6(["navbar",{"fade-in":X(e).menuFadeIn}]),onClick:c},[t2(n,{to:"/"},{default:R2(()=>[b1("首頁")]),_:1}),t2(n,{to:"/about"},{default:R2(()=>[b1("關於我們")]),_:1}),t2(n,{to:"/productList"},{default:R2(()=>[b1("商品列表")]),_:1}),t2(n,{to:"/shop"},{default:R2(()=>[b1("實體店鋪")]),_:1}),t2(n,{to:"/contact"},{default:R2(()=>[b1("聯絡我們")]),_:1})],2)}}},IN=K2(PN,[["__scopeId","data-v-dda0466b"]]),RN=t=>(h1("data-v-489931d0"),t=t(),p1(),t),ON={class:"logo"},DN=RN(()=>z("img",{src:Xs},null,-1)),FN={class:"login-wrapper"},BN={key:1,class:"welcome"},UN={__name:"AppHeader",setup(t){const e=d2(),c=d2(!1),a=r3(),s=P1(),n=D2(()=>r.userDb!==null),i=D2(()=>r.userDb),r=h4();function o(){r.logout()}function l(){a.showLoginPopup()}function f(){s.push("/cartshopView")}function u(){s.push("/member")}function d(){s.push("/wish")}function h(){r.checkAuthState(),setTimeout(()=>{c.value=!0},1500)}return h(),(v,m)=>{const C=Y1("RouterLink"),H=Y1("icon");return Q(),s2("div",{class:G6(["header",{fixed:X(a).menuFadeIn}])},[z("div",ON,[t2(C,{to:"/"},{default:R2(()=>[DN]),_:1})]),t2(IN,{ref_key:"navbarRef",ref:e},null,512),z("div",{class:"toolbox",onMouseenter:m[4]||(m[4]=(...p)=>v.hidePreviewCart&&v.hidePreviewCart(...p))},[G1(z("div",FN,[n.value?z4("",!0):(Q(),s2("div",{key:0,class:"login",onClick:l},"登入會員")),n.value?(Q(),s2("div",BN,n2(i.value.name),1)):z4("",!0),n.value?(Q(),s2("div",{key:2,class:"login",onClick:u},"會員頁面")):z4("",!0),n.value?z4("",!0):(Q(),s2("div",{key:3,class:"login",onClick:m[0]||(m[0]=p=>d())},"願望清單")),n.value?(Q(),s2("div",{key:4,class:"login",onClick:o},"登出")):z4("",!0)],512),[[M3,c.value]]),z("div",{class:"cart",onClick:f,onMouseenter:m[1]||(m[1]=(...p)=>X(a).showCartPreview&&X(a).showCartPreview(...p))},[t2(H,{icon:"cart-shopping"})],32),G1(t2(H,{class:"menu-control",icon:"bars",onClick:m[2]||(m[2]=p=>X(a).toggleMenuFadeIn())},null,512),[[M3,!X(a).menuFadeIn]]),G1(t2(H,{class:"menu-close",icon:"xmark",onClick:m[3]||(m[3]=p=>X(a).toggleMenuFadeIn())},null,512),[[M3,X(a).menuFadeIn]])],32)],2)}}},$N=K2(UN,[["__scopeId","data-v-489931d0"]]),WN=t=>(h1("data-v-b673c2bc"),t=t(),p1(),t),qN=WN(()=>z("div",{class:"headerTop"},[z("p",null,"單筆訂單金額滿$1,500，即享全台灣宅配免運費。")],-1)),GN={class:"content"},jN={__name:"AppLayout",setup(t){const e=d2(null),c=d2(!1),a=n0();function s(){a.getProductList()}function n(){setTimeout(()=>{c.value=!0},1500),s()}return n(),(i,r)=>(Q(),s2(A2,null,[qN,t2($N),z("div",GN,[t2(X(_o)),t2(CN,{ref_key:"loginRef",ref:e},null,512),t2(AN,{ref:"previewCartRef"},null,512)]),t2(KM)],64))}},KN=K2(jN,[["__scopeId","data-v-b673c2bc"]]),YN={__name:"App",setup(t){return(e,c)=>(Q(),m3(KN))}},XN=""+new URL("home-perfume-FjvhSv2s.jpg",import.meta.url).href,QN=""+new URL("home-gift-0FUBJj_3.jpg",import.meta.url).href,JN=""+new URL("home-videocall-44cJss5W.jpg",import.meta.url).href,ZN=t=>(h1("data-v-061d9c74"),t=t(),p1(),t),eT={class:"app-button"},tT={class:"text"},cT=ZN(()=>z("div",{class:"action"},"→",-1)),aT={__name:"AppButton",props:["title","path"],setup(t){const e=P1(),c=t;function a(){e.push(c.path)}return(s,n)=>(Q(),s2("div",eT,[z("div",{class:"wrapper",onClick:a},[z("div",tT,n2(t.title),1),cT])]))}},ne=K2(aT,[["__scopeId","data-v-061d9c74"]]);function x5(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function Qs(t,e){t===void 0&&(t={}),e===void 0&&(e={}),Object.keys(e).forEach(c=>{typeof t[c]>"u"?t[c]=e[c]:x5(e[c])&&x5(t[c])&&Object.keys(e[c]).length>0&&Qs(t[c],e[c])})}const B9={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function k1(){const t=typeof document<"u"?document:{};return Qs(t,B9),t}const sT={document:B9,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}};function M1(){const t=typeof window<"u"?window:{};return Qs(t,sT),t}function O3(t){return t===void 0&&(t=""),t.trim().split(" ").filter(e=>!!e.trim())}function nT(t){const e=t;Object.keys(e).forEach(c=>{try{e[c]=null}catch{}try{delete e[c]}catch{}})}function Vt(t,e){return e===void 0&&(e=0),setTimeout(t,e)}function _t(){return Date.now()}function iT(t){const e=M1();let c;return e.getComputedStyle&&(c=e.getComputedStyle(t,null)),!c&&t.currentStyle&&(c=t.currentStyle),c||(c=t.style),c}function rT(t,e){e===void 0&&(e="x");const c=M1();let a,s,n;const i=iT(t);return c.WebKitCSSMatrix?(s=i.transform||i.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(r=>r.replace(",",".")).join(", ")),n=new c.WebKitCSSMatrix(s==="none"?"":s)):(n=i.MozTransform||i.OTransform||i.MsTransform||i.msTransform||i.transform||i.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=n.toString().split(",")),e==="x"&&(c.WebKitCSSMatrix?s=n.m41:a.length===16?s=parseFloat(a[12]):s=parseFloat(a[4])),e==="y"&&(c.WebKitCSSMatrix?s=n.m42:a.length===16?s=parseFloat(a[13]):s=parseFloat(a[5])),s||0}function b0(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function oT(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function L1(){const t=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let c=1;c<arguments.length;c+=1){const a=c<0||arguments.length<=c?void 0:arguments[c];if(a!=null&&!oT(a)){const s=Object.keys(Object(a)).filter(n=>e.indexOf(n)<0);for(let n=0,i=s.length;n<i;n+=1){const r=s[n],o=Object.getOwnPropertyDescriptor(a,r);o!==void 0&&o.enumerable&&(b0(t[r])&&b0(a[r])?a[r].__swiper__?t[r]=a[r]:L1(t[r],a[r]):!b0(t[r])&&b0(a[r])?(t[r]={},a[r].__swiper__?t[r]=a[r]:L1(t[r],a[r])):t[r]=a[r])}}}return t}function o6(t,e,c){t.style.setProperty(e,c)}function U9(t){let{swiper:e,targetPosition:c,side:a}=t;const s=M1(),n=-e.translate;let i=null,r;const o=e.params.speed;e.wrapperEl.style.scrollSnapType="none",s.cancelAnimationFrame(e.cssModeFrameID);const l=c>n?"next":"prev",f=(d,h)=>l==="next"&&d>=h||l==="prev"&&d<=h,u=()=>{r=new Date().getTime(),i===null&&(i=r);const d=Math.max(Math.min((r-i)/o,1),0),h=.5-Math.cos(d*Math.PI)/2;let v=n+h*(c-n);if(f(v,c)&&(v=c),e.wrapperEl.scrollTo({[a]:v}),f(v,c)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[a]:v})}),s.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=s.requestAnimationFrame(u)};u()}function $9(t){return t.querySelector(".swiper-slide-transform")||t.shadowRoot&&t.shadowRoot.querySelector(".swiper-slide-transform")||t}function $1(t,e){return e===void 0&&(e=""),[...t.children].filter(c=>c.matches(e))}function Lt(t){try{console.warn(t);return}catch{}}function q4(t,e){e===void 0&&(e=[]);const c=document.createElement(t);return c.classList.add(...Array.isArray(e)?e:O3(e)),c}function lT(t){const e=M1(),c=k1(),a=t.getBoundingClientRect(),s=c.body,n=t.clientTop||s.clientTop||0,i=t.clientLeft||s.clientLeft||0,r=t===e?e.scrollY:t.scrollTop,o=t===e?e.scrollX:t.scrollLeft;return{top:a.top+r-n,left:a.left+o-i}}function fT(t,e){const c=[];for(;t.previousElementSibling;){const a=t.previousElementSibling;e?a.matches(e)&&c.push(a):c.push(a),t=a}return c}function uT(t,e){const c=[];for(;t.nextElementSibling;){const a=t.nextElementSibling;e?a.matches(e)&&c.push(a):c.push(a),t=a}return c}function Y3(t,e){return M1().getComputedStyle(t,null).getPropertyValue(e)}function bt(t){let e=t,c;if(e){for(c=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(c+=1);return c}}function W9(t,e){const c=[];let a=t.parentElement;for(;a;)e?a.matches(e)&&c.push(a):c.push(a),a=a.parentElement;return c}function dT(t,e){function c(a){a.target===t&&(e.call(t,a),t.removeEventListener("transitionend",c))}e&&t.addEventListener("transitionend",c)}function ra(t,e,c){const a=M1();return c?t[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(a.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(a.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):t.offsetWidth}let n8;function hT(){const t=M1(),e=k1();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function q9(){return n8||(n8=hT()),n8}let i8;function pT(t){let{userAgent:e}=t===void 0?{}:t;const c=q9(),a=M1(),s=a.navigator.platform,n=e||a.navigator.userAgent,i={ios:!1,android:!1},r=a.screen.width,o=a.screen.height,l=n.match(/(Android);?[\s\/]+([\d.]+)?/);let f=n.match(/(iPad).*OS\s([\d_]+)/);const u=n.match(/(iPod)(.*OS\s([\d_]+))?/),d=!f&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h=s==="Win32";let v=s==="MacIntel";const m=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!f&&v&&c.touch&&m.indexOf(`${r}x${o}`)>=0&&(f=n.match(/(Version)\/([\d.]+)/),f||(f=[0,1,"13_0_0"]),v=!1),l&&!h&&(i.os="android",i.android=!0),(f||d||u)&&(i.os="ios",i.ios=!0),i}function mT(t){return t===void 0&&(t={}),i8||(i8=pT(t)),i8}let r8;function vT(){const t=M1();let e=!1;function c(){const a=t.navigator.userAgent.toLowerCase();return a.indexOf("safari")>=0&&a.indexOf("chrome")<0&&a.indexOf("android")<0}if(c()){const a=String(t.navigator.userAgent);if(a.includes("Version/")){const[s,n]=a.split("Version/")[1].split(" ")[0].split(".").map(i=>Number(i));e=s<16||s===16&&n<2}}return{isSafari:e||c(),needPerspectiveFix:e,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)}}function gT(){return r8||(r8=vT()),r8}function HT(t){let{swiper:e,on:c,emit:a}=t;const s=M1();let n=null,i=null;const r=()=>{!e||e.destroyed||!e.initialized||(a("beforeResize"),a("resize"))},o=()=>{!e||e.destroyed||!e.initialized||(n=new ResizeObserver(u=>{i=s.requestAnimationFrame(()=>{const{width:d,height:h}=e;let v=d,m=h;u.forEach(C=>{let{contentBoxSize:H,contentRect:p,target:g}=C;g&&g!==e.el||(v=p?p.width:(H[0]||H).inlineSize,m=p?p.height:(H[0]||H).blockSize)}),(v!==d||m!==h)&&r()})}),n.observe(e.el))},l=()=>{i&&s.cancelAnimationFrame(i),n&&n.unobserve&&e.el&&(n.unobserve(e.el),n=null)},f=()=>{!e||e.destroyed||!e.initialized||a("orientationchange")};c("init",()=>{if(e.params.resizeObserver&&typeof s.ResizeObserver<"u"){o();return}s.addEventListener("resize",r),s.addEventListener("orientationchange",f)}),c("destroy",()=>{l(),s.removeEventListener("resize",r),s.removeEventListener("orientationchange",f)})}function zT(t){let{swiper:e,extendParams:c,on:a,emit:s}=t;const n=[],i=M1(),r=function(f,u){u===void 0&&(u={});const d=i.MutationObserver||i.WebkitMutationObserver,h=new d(v=>{if(e.__preventObserver__)return;if(v.length===1){s("observerUpdate",v[0]);return}const m=function(){s("observerUpdate",v[0])};i.requestAnimationFrame?i.requestAnimationFrame(m):i.setTimeout(m,0)});h.observe(f,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:typeof u.childList>"u"?!0:u.childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),n.push(h)},o=()=>{if(e.params.observer){if(e.params.observeParents){const f=W9(e.hostEl);for(let u=0;u<f.length;u+=1)r(f[u])}r(e.hostEl,{childList:e.params.observeSlideChildren}),r(e.wrapperEl,{attributes:!1})}},l=()=>{n.forEach(f=>{f.disconnect()}),n.splice(0,n.length)};c({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",o),a("destroy",l)}var CT={on(t,e,c){const a=this;if(!a.eventsListeners||a.destroyed||typeof e!="function")return a;const s=c?"unshift":"push";return t.split(" ").forEach(n=>{a.eventsListeners[n]||(a.eventsListeners[n]=[]),a.eventsListeners[n][s](e)}),a},once(t,e,c){const a=this;if(!a.eventsListeners||a.destroyed||typeof e!="function")return a;function s(){a.off(t,s),s.__emitterProxy&&delete s.__emitterProxy;for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];e.apply(a,i)}return s.__emitterProxy=e,a.on(t,s,c)},onAny(t,e){const c=this;if(!c.eventsListeners||c.destroyed||typeof t!="function")return c;const a=e?"unshift":"push";return c.eventsAnyListeners.indexOf(t)<0&&c.eventsAnyListeners[a](t),c},offAny(t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const c=e.eventsAnyListeners.indexOf(t);return c>=0&&e.eventsAnyListeners.splice(c,1),e},off(t,e){const c=this;return!c.eventsListeners||c.destroyed||!c.eventsListeners||t.split(" ").forEach(a=>{typeof e>"u"?c.eventsListeners[a]=[]:c.eventsListeners[a]&&c.eventsListeners[a].forEach((s,n)=>{(s===e||s.__emitterProxy&&s.__emitterProxy===e)&&c.eventsListeners[a].splice(n,1)})}),c},emit(){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let e,c,a;for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return typeof n[0]=="string"||Array.isArray(n[0])?(e=n[0],c=n.slice(1,n.length),a=t):(e=n[0].events,c=n[0].data,a=n[0].context||t),c.unshift(a),(Array.isArray(e)?e:e.split(" ")).forEach(o=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(a,[o,...c])}),t.eventsListeners&&t.eventsListeners[o]&&t.eventsListeners[o].forEach(l=>{l.apply(a,c)})}),t}};function MT(){const t=this;let e,c;const a=t.el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=a.clientWidth,typeof t.params.height<"u"&&t.params.height!==null?c=t.params.height:c=a.clientHeight,!(e===0&&t.isHorizontal()||c===0&&t.isVertical())&&(e=e-parseInt(Y3(a,"padding-left")||0,10)-parseInt(Y3(a,"padding-right")||0,10),c=c-parseInt(Y3(a,"padding-top")||0,10)-parseInt(Y3(a,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(c)&&(c=0),Object.assign(t,{width:e,height:c,size:t.isHorizontal()?e:c}))}function VT(){const t=this;function e(y,O){return parseFloat(y.getPropertyValue(t.getDirectionLabel(O))||0)}const c=t.params,{wrapperEl:a,slidesEl:s,size:n,rtlTranslate:i,wrongRTL:r}=t,o=t.virtual&&c.virtual.enabled,l=o?t.virtual.slides.length:t.slides.length,f=$1(s,`.${t.params.slideClass}, swiper-slide`),u=o?t.virtual.slides.length:f.length;let d=[];const h=[],v=[];let m=c.slidesOffsetBefore;typeof m=="function"&&(m=c.slidesOffsetBefore.call(t));let C=c.slidesOffsetAfter;typeof C=="function"&&(C=c.slidesOffsetAfter.call(t));const H=t.snapGrid.length,p=t.slidesGrid.length;let g=c.spaceBetween,_=-m,L=0,k=0;if(typeof n>"u")return;typeof g=="string"&&g.indexOf("%")>=0?g=parseFloat(g.replace("%",""))/100*n:typeof g=="string"&&(g=parseFloat(g)),t.virtualSize=-g,f.forEach(y=>{i?y.style.marginLeft="":y.style.marginRight="",y.style.marginBottom="",y.style.marginTop=""}),c.centeredSlides&&c.cssMode&&(o6(a,"--swiper-centered-offset-before",""),o6(a,"--swiper-centered-offset-after",""));const $=c.grid&&c.grid.rows>1&&t.grid;$?t.grid.initSlides(f):t.grid&&t.grid.unsetSlides();let N;const w=c.slidesPerView==="auto"&&c.breakpoints&&Object.keys(c.breakpoints).filter(y=>typeof c.breakpoints[y].slidesPerView<"u").length>0;for(let y=0;y<u;y+=1){N=0;let O;if(f[y]&&(O=f[y]),$&&t.grid.updateSlide(y,O,f),!(f[y]&&Y3(O,"display")==="none")){if(c.slidesPerView==="auto"){w&&(f[y].style[t.getDirectionLabel("width")]="");const A=getComputedStyle(O),x=O.style.transform,R=O.style.webkitTransform;if(x&&(O.style.transform="none"),R&&(O.style.webkitTransform="none"),c.roundLengths)N=t.isHorizontal()?ra(O,"width",!0):ra(O,"height",!0);else{const D=e(A,"width"),U=e(A,"padding-left"),l2=e(A,"padding-right"),G=e(A,"margin-left"),f2=e(A,"margin-right"),y2=A.getPropertyValue("box-sizing");if(y2&&y2==="border-box")N=D+G+f2;else{const{clientWidth:W2,offsetWidth:U2}=O;N=D+U+l2+G+f2+(U2-W2)}}x&&(O.style.transform=x),R&&(O.style.webkitTransform=R),c.roundLengths&&(N=Math.floor(N))}else N=(n-(c.slidesPerView-1)*g)/c.slidesPerView,c.roundLengths&&(N=Math.floor(N)),f[y]&&(f[y].style[t.getDirectionLabel("width")]=`${N}px`);f[y]&&(f[y].swiperSlideSize=N),v.push(N),c.centeredSlides?(_=_+N/2+L/2+g,L===0&&y!==0&&(_=_-n/2-g),y===0&&(_=_-n/2-g),Math.abs(_)<1/1e3&&(_=0),c.roundLengths&&(_=Math.floor(_)),k%c.slidesPerGroup===0&&d.push(_),h.push(_)):(c.roundLengths&&(_=Math.floor(_)),(k-Math.min(t.params.slidesPerGroupSkip,k))%t.params.slidesPerGroup===0&&d.push(_),h.push(_),_=_+N+g),t.virtualSize+=N+g,L=N,k+=1}}if(t.virtualSize=Math.max(t.virtualSize,n)+C,i&&r&&(c.effect==="slide"||c.effect==="coverflow")&&(a.style.width=`${t.virtualSize+g}px`),c.setWrapperSize&&(a.style[t.getDirectionLabel("width")]=`${t.virtualSize+g}px`),$&&t.grid.updateWrapperSize(N,d),!c.centeredSlides){const y=[];for(let O=0;O<d.length;O+=1){let A=d[O];c.roundLengths&&(A=Math.floor(A)),d[O]<=t.virtualSize-n&&y.push(A)}d=y,Math.floor(t.virtualSize-n)-Math.floor(d[d.length-1])>1&&d.push(t.virtualSize-n)}if(o&&c.loop){const y=v[0]+g;if(c.slidesPerGroup>1){const O=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/c.slidesPerGroup),A=y*c.slidesPerGroup;for(let x=0;x<O;x+=1)d.push(d[d.length-1]+A)}for(let O=0;O<t.virtual.slidesBefore+t.virtual.slidesAfter;O+=1)c.slidesPerGroup===1&&d.push(d[d.length-1]+y),h.push(h[h.length-1]+y),t.virtualSize+=y}if(d.length===0&&(d=[0]),g!==0){const y=t.isHorizontal()&&i?"marginLeft":t.getDirectionLabel("marginRight");f.filter((O,A)=>!c.cssMode||c.loop?!0:A!==f.length-1).forEach(O=>{O.style[y]=`${g}px`})}if(c.centeredSlides&&c.centeredSlidesBounds){let y=0;v.forEach(A=>{y+=A+(g||0)}),y-=g;const O=y-n;d=d.map(A=>A<=0?-m:A>O?O+C:A)}if(c.centerInsufficientSlides){let y=0;if(v.forEach(O=>{y+=O+(g||0)}),y-=g,y<n){const O=(n-y)/2;d.forEach((A,x)=>{d[x]=A-O}),h.forEach((A,x)=>{h[x]=A+O})}}if(Object.assign(t,{slides:f,snapGrid:d,slidesGrid:h,slidesSizesGrid:v}),c.centeredSlides&&c.cssMode&&!c.centeredSlidesBounds){o6(a,"--swiper-centered-offset-before",`${-d[0]}px`),o6(a,"--swiper-centered-offset-after",`${t.size/2-v[v.length-1]/2}px`);const y=-t.snapGrid[0],O=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(A=>A+y),t.slidesGrid=t.slidesGrid.map(A=>A+O)}if(u!==l&&t.emit("slidesLengthChange"),d.length!==H&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),h.length!==p&&t.emit("slidesGridLengthChange"),c.watchSlidesProgress&&t.updateSlidesOffset(),t.emit("slidesUpdated"),!o&&!c.cssMode&&(c.effect==="slide"||c.effect==="fade")){const y=`${c.containerModifierClass}backface-hidden`,O=t.el.classList.contains(y);u<=c.maxBackfaceHiddenSlides?O||t.el.classList.add(y):O&&t.el.classList.remove(y)}}function _T(t){const e=this,c=[],a=e.virtual&&e.params.virtual.enabled;let s=0,n;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);const i=r=>a?e.slides[e.getSlideIndexByData(r)]:e.slides[r];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(r=>{c.push(r)});else for(n=0;n<Math.ceil(e.params.slidesPerView);n+=1){const r=e.activeIndex+n;if(r>e.slides.length&&!a)break;c.push(i(r))}else c.push(i(e.activeIndex));for(n=0;n<c.length;n+=1)if(typeof c[n]<"u"){const r=c[n].offsetHeight;s=r>s?r:s}(s||s===0)&&(e.wrapperEl.style.height=`${s}px`)}function LT(){const t=this,e=t.slides,c=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let a=0;a<e.length;a+=1)e[a].swiperSlideOffset=(t.isHorizontal()?e[a].offsetLeft:e[a].offsetTop)-c-t.cssOverflowAdjustment()}function bT(t){t===void 0&&(t=this&&this.translate||0);const e=this,c=e.params,{slides:a,rtlTranslate:s,snapGrid:n}=e;if(a.length===0)return;typeof a[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let i=-t;s&&(i=t),a.forEach(o=>{o.classList.remove(c.slideVisibleClass,c.slideFullyVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];let r=c.spaceBetween;typeof r=="string"&&r.indexOf("%")>=0?r=parseFloat(r.replace("%",""))/100*e.size:typeof r=="string"&&(r=parseFloat(r));for(let o=0;o<a.length;o+=1){const l=a[o];let f=l.swiperSlideOffset;c.cssMode&&c.centeredSlides&&(f-=a[0].swiperSlideOffset);const u=(i+(c.centeredSlides?e.minTranslate():0)-f)/(l.swiperSlideSize+r),d=(i-n[0]+(c.centeredSlides?e.minTranslate():0)-f)/(l.swiperSlideSize+r),h=-(i-f),v=h+e.slidesSizesGrid[o],m=h>=0&&h<=e.size-e.slidesSizesGrid[o];(h>=0&&h<e.size-1||v>1&&v<=e.size||h<=0&&v>=e.size)&&(e.visibleSlides.push(l),e.visibleSlidesIndexes.push(o),a[o].classList.add(c.slideVisibleClass)),m&&a[o].classList.add(c.slideFullyVisibleClass),l.progress=s?-u:u,l.originalProgress=s?-d:d}}function wT(t){const e=this;if(typeof t>"u"){const f=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*f||0}const c=e.params,a=e.maxTranslate()-e.minTranslate();let{progress:s,isBeginning:n,isEnd:i,progressLoop:r}=e;const o=n,l=i;if(a===0)s=0,n=!0,i=!0;else{s=(t-e.minTranslate())/a;const f=Math.abs(t-e.minTranslate())<1,u=Math.abs(t-e.maxTranslate())<1;n=f||s<=0,i=u||s>=1,f&&(s=0),u&&(s=1)}if(c.loop){const f=e.getSlideIndexByData(0),u=e.getSlideIndexByData(e.slides.length-1),d=e.slidesGrid[f],h=e.slidesGrid[u],v=e.slidesGrid[e.slidesGrid.length-1],m=Math.abs(t);m>=d?r=(m-d)/v:r=(m+v-h)/v,r>1&&(r-=1)}Object.assign(e,{progress:s,progressLoop:r,isBeginning:n,isEnd:i}),(c.watchSlidesProgress||c.centeredSlides&&c.autoHeight)&&e.updateSlidesProgress(t),n&&!o&&e.emit("reachBeginning toEdge"),i&&!l&&e.emit("reachEnd toEdge"),(o&&!n||l&&!i)&&e.emit("fromEdge"),e.emit("progress",s)}function yT(){const t=this,{slides:e,params:c,slidesEl:a,activeIndex:s}=t,n=t.virtual&&c.virtual.enabled,i=t.grid&&c.grid&&c.grid.rows>1,r=u=>$1(a,`.${c.slideClass}${u}, swiper-slide${u}`)[0];e.forEach(u=>{u.classList.remove(c.slideActiveClass,c.slideNextClass,c.slidePrevClass)});let o,l,f;if(n)if(c.loop){let u=s-t.virtual.slidesBefore;u<0&&(u=t.virtual.slides.length+u),u>=t.virtual.slides.length&&(u-=t.virtual.slides.length),o=r(`[data-swiper-slide-index="${u}"]`)}else o=r(`[data-swiper-slide-index="${s}"]`);else i?(o=e.filter(u=>u.column===s)[0],f=e.filter(u=>u.column===s+1)[0],l=e.filter(u=>u.column===s-1)[0]):o=e[s];o&&(o.classList.add(c.slideActiveClass),i?(f&&f.classList.add(c.slideNextClass),l&&l.classList.add(c.slidePrevClass)):(f=uT(o,`.${c.slideClass}, swiper-slide`)[0],c.loop&&!f&&(f=e[0]),f&&f.classList.add(c.slideNextClass),l=fT(o,`.${c.slideClass}, swiper-slide`)[0],c.loop&&!l===0&&(l=e[e.length-1]),l&&l.classList.add(c.slidePrevClass))),t.emitSlidesClasses()}const W0=(t,e)=>{if(!t||t.destroyed||!t.params)return;const c=()=>t.isElement?"swiper-slide":`.${t.params.slideClass}`,a=e.closest(c());if(a){let s=a.querySelector(`.${t.params.lazyPreloaderClass}`);!s&&t.isElement&&(a.shadowRoot?s=a.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{a.shadowRoot&&(s=a.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),s&&s.remove())})),s&&s.remove()}},o8=(t,e)=>{if(!t.slides[e])return;const c=t.slides[e].querySelector('[loading="lazy"]');c&&c.removeAttribute("loading")},oa=t=>{if(!t||t.destroyed||!t.params)return;let e=t.params.lazyPreloadPrevNext;const c=t.slides.length;if(!c||!e||e<0)return;e=Math.min(e,c);const a=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(t.params.slidesPerView),s=t.activeIndex;if(t.params.grid&&t.params.grid.rows>1){const i=s,r=[i-e];r.push(...Array.from({length:e}).map((o,l)=>i+a+l)),t.slides.forEach((o,l)=>{r.includes(o.column)&&o8(t,l)});return}const n=s+a-1;if(t.params.rewind||t.params.loop)for(let i=s-e;i<=n+e;i+=1){const r=(i%c+c)%c;(r<s||r>n)&&o8(t,r)}else for(let i=Math.max(s-e,0);i<=Math.min(n+e,c-1);i+=1)i!==s&&(i>n||i<s)&&o8(t,i)};function ST(t){const{slidesGrid:e,params:c}=t,a=t.rtlTranslate?t.translate:-t.translate;let s;for(let n=0;n<e.length;n+=1)typeof e[n+1]<"u"?a>=e[n]&&a<e[n+1]-(e[n+1]-e[n])/2?s=n:a>=e[n]&&a<e[n+1]&&(s=n+1):a>=e[n]&&(s=n);return c.normalizeSlideIndex&&(s<0||typeof s>"u")&&(s=0),s}function xT(t){const e=this,c=e.rtlTranslate?e.translate:-e.translate,{snapGrid:a,params:s,activeIndex:n,realIndex:i,snapIndex:r}=e;let o=t,l;const f=h=>{let v=h-e.virtual.slidesBefore;return v<0&&(v=e.virtual.slides.length+v),v>=e.virtual.slides.length&&(v-=e.virtual.slides.length),v};if(typeof o>"u"&&(o=ST(e)),a.indexOf(c)>=0)l=a.indexOf(c);else{const h=Math.min(s.slidesPerGroupSkip,o);l=h+Math.floor((o-h)/s.slidesPerGroup)}if(l>=a.length&&(l=a.length-1),o===n&&!e.params.loop){l!==r&&(e.snapIndex=l,e.emit("snapIndexChange"));return}if(o===n&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=f(o);return}const u=e.grid&&s.grid&&s.grid.rows>1;let d;if(e.virtual&&s.virtual.enabled&&s.loop)d=f(o);else if(u){const h=e.slides.filter(m=>m.column===o)[0];let v=parseInt(h.getAttribute("data-swiper-slide-index"),10);Number.isNaN(v)&&(v=Math.max(e.slides.indexOf(h),0)),d=Math.floor(v/s.grid.rows)}else if(e.slides[o]){const h=e.slides[o].getAttribute("data-swiper-slide-index");h?d=parseInt(h,10):d=o}else d=o;Object.assign(e,{previousSnapIndex:r,snapIndex:l,previousRealIndex:i,realIndex:d,previousIndex:n,activeIndex:o}),e.initialized&&oa(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(i!==d&&e.emit("realIndexChange"),e.emit("slideChange"))}function NT(t,e){const c=this,a=c.params;let s=t.closest(`.${a.slideClass}, swiper-slide`);!s&&c.isElement&&e&&e.length>1&&e.includes(t)&&[...e.slice(e.indexOf(t)+1,e.length)].forEach(r=>{!s&&r.matches&&r.matches(`.${a.slideClass}, swiper-slide`)&&(s=r)});let n=!1,i;if(s){for(let r=0;r<c.slides.length;r+=1)if(c.slides[r]===s){n=!0,i=r;break}}if(s&&n)c.clickedSlide=s,c.virtual&&c.params.virtual.enabled?c.clickedIndex=parseInt(s.getAttribute("data-swiper-slide-index"),10):c.clickedIndex=i;else{c.clickedSlide=void 0,c.clickedIndex=void 0;return}a.slideToClickedSlide&&c.clickedIndex!==void 0&&c.clickedIndex!==c.activeIndex&&c.slideToClickedSlide()}var TT={updateSize:MT,updateSlides:VT,updateAutoHeight:_T,updateSlidesOffset:LT,updateSlidesProgress:bT,updateProgress:wT,updateSlidesClasses:yT,updateActiveIndex:xT,updateClickedSlide:NT};function ET(t){t===void 0&&(t=this.isHorizontal()?"x":"y");const e=this,{params:c,rtlTranslate:a,translate:s,wrapperEl:n}=e;if(c.virtualTranslate)return a?-s:s;if(c.cssMode)return s;let i=rT(n,t);return i+=e.cssOverflowAdjustment(),a&&(i=-i),i||0}function kT(t,e){const c=this,{rtlTranslate:a,params:s,wrapperEl:n,progress:i}=c;let r=0,o=0;const l=0;c.isHorizontal()?r=a?-t:t:o=t,s.roundLengths&&(r=Math.floor(r),o=Math.floor(o)),c.previousTranslate=c.translate,c.translate=c.isHorizontal()?r:o,s.cssMode?n[c.isHorizontal()?"scrollLeft":"scrollTop"]=c.isHorizontal()?-r:-o:s.virtualTranslate||(c.isHorizontal()?r-=c.cssOverflowAdjustment():o-=c.cssOverflowAdjustment(),n.style.transform=`translate3d(${r}px, ${o}px, ${l}px)`);let f;const u=c.maxTranslate()-c.minTranslate();u===0?f=0:f=(t-c.minTranslate())/u,f!==i&&c.updateProgress(t),c.emit("setTranslate",c.translate,e)}function AT(){return-this.snapGrid[0]}function PT(){return-this.snapGrid[this.snapGrid.length-1]}function IT(t,e,c,a,s){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),c===void 0&&(c=!0),a===void 0&&(a=!0);const n=this,{params:i,wrapperEl:r}=n;if(n.animating&&i.preventInteractionOnTransition)return!1;const o=n.minTranslate(),l=n.maxTranslate();let f;if(a&&t>o?f=o:a&&t<l?f=l:f=t,n.updateProgress(f),i.cssMode){const u=n.isHorizontal();if(e===0)r[u?"scrollLeft":"scrollTop"]=-f;else{if(!n.support.smoothScroll)return U9({swiper:n,targetPosition:-f,side:u?"left":"top"}),!0;r.scrollTo({[u?"left":"top"]:-f,behavior:"smooth"})}return!0}return e===0?(n.setTransition(0),n.setTranslate(f),c&&(n.emit("beforeTransitionStart",e,s),n.emit("transitionEnd"))):(n.setTransition(e),n.setTranslate(f),c&&(n.emit("beforeTransitionStart",e,s),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(d){!n||n.destroyed||d.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,c&&n.emit("transitionEnd"))}),n.wrapperEl.addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd))),!0}var RT={getTranslate:ET,setTranslate:kT,minTranslate:AT,maxTranslate:PT,translateTo:IT};function OT(t,e){const c=this;c.params.cssMode||(c.wrapperEl.style.transitionDuration=`${t}ms`,c.wrapperEl.style.transitionDelay=t===0?"0ms":""),c.emit("setTransition",t,e)}function G9(t){let{swiper:e,runCallbacks:c,direction:a,step:s}=t;const{activeIndex:n,previousIndex:i}=e;let r=a;if(r||(n>i?r="next":n<i?r="prev":r="reset"),e.emit(`transition${s}`),c&&n!==i){if(r==="reset"){e.emit(`slideResetTransition${s}`);return}e.emit(`slideChangeTransition${s}`),r==="next"?e.emit(`slideNextTransition${s}`):e.emit(`slidePrevTransition${s}`)}}function DT(t,e){t===void 0&&(t=!0);const c=this,{params:a}=c;a.cssMode||(a.autoHeight&&c.updateAutoHeight(),G9({swiper:c,runCallbacks:t,direction:e,step:"Start"}))}function FT(t,e){t===void 0&&(t=!0);const c=this,{params:a}=c;c.animating=!1,!a.cssMode&&(c.setTransition(0),G9({swiper:c,runCallbacks:t,direction:e,step:"End"}))}var BT={setTransition:OT,transitionStart:DT,transitionEnd:FT};function UT(t,e,c,a,s){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),c===void 0&&(c=!0),typeof t=="string"&&(t=parseInt(t,10));const n=this;let i=t;i<0&&(i=0);const{params:r,snapGrid:o,slidesGrid:l,previousIndex:f,activeIndex:u,rtlTranslate:d,wrapperEl:h,enabled:v}=n;if(n.animating&&r.preventInteractionOnTransition||!v&&!a&&!s)return!1;const m=Math.min(n.params.slidesPerGroupSkip,i);let C=m+Math.floor((i-m)/n.params.slidesPerGroup);C>=o.length&&(C=o.length-1);const H=-o[C];if(r.normalizeSlideIndex)for(let g=0;g<l.length;g+=1){const _=-Math.floor(H*100),L=Math.floor(l[g]*100),k=Math.floor(l[g+1]*100);typeof l[g+1]<"u"?_>=L&&_<k-(k-L)/2?i=g:_>=L&&_<k&&(i=g+1):_>=L&&(i=g)}if(n.initialized&&i!==u&&(!n.allowSlideNext&&(d?H>n.translate&&H>n.minTranslate():H<n.translate&&H<n.minTranslate())||!n.allowSlidePrev&&H>n.translate&&H>n.maxTranslate()&&(u||0)!==i))return!1;i!==(f||0)&&c&&n.emit("beforeSlideChangeStart"),n.updateProgress(H);let p;if(i>u?p="next":i<u?p="prev":p="reset",d&&-H===n.translate||!d&&H===n.translate)return n.updateActiveIndex(i),r.autoHeight&&n.updateAutoHeight(),n.updateSlidesClasses(),r.effect!=="slide"&&n.setTranslate(H),p!=="reset"&&(n.transitionStart(c,p),n.transitionEnd(c,p)),!1;if(r.cssMode){const g=n.isHorizontal(),_=d?H:-H;if(e===0){const L=n.virtual&&n.params.virtual.enabled;L&&(n.wrapperEl.style.scrollSnapType="none",n._immediateVirtual=!0),L&&!n._cssModeVirtualInitialSet&&n.params.initialSlide>0?(n._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{h[g?"scrollLeft":"scrollTop"]=_})):h[g?"scrollLeft":"scrollTop"]=_,L&&requestAnimationFrame(()=>{n.wrapperEl.style.scrollSnapType="",n._immediateVirtual=!1})}else{if(!n.support.smoothScroll)return U9({swiper:n,targetPosition:_,side:g?"left":"top"}),!0;h.scrollTo({[g?"left":"top"]:_,behavior:"smooth"})}return!0}return n.setTransition(e),n.setTranslate(H),n.updateActiveIndex(i),n.updateSlidesClasses(),n.emit("beforeTransitionStart",e,a),n.transitionStart(c,p),e===0?n.transitionEnd(c,p):n.animating||(n.animating=!0,n.onSlideToWrapperTransitionEnd||(n.onSlideToWrapperTransitionEnd=function(_){!n||n.destroyed||_.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.onSlideToWrapperTransitionEnd=null,delete n.onSlideToWrapperTransitionEnd,n.transitionEnd(c,p))}),n.wrapperEl.addEventListener("transitionend",n.onSlideToWrapperTransitionEnd)),!0}function $T(t,e,c,a){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),c===void 0&&(c=!0),typeof t=="string"&&(t=parseInt(t,10));const s=this,n=s.grid&&s.params.grid&&s.params.grid.rows>1;let i=t;if(s.params.loop)if(s.virtual&&s.params.virtual.enabled)i=i+s.virtual.slidesBefore;else{let r;if(n){const d=i*s.params.grid.rows;r=s.slides.filter(h=>h.getAttribute("data-swiper-slide-index")*1===d)[0].column}else r=s.getSlideIndexByData(i);const o=n?Math.ceil(s.slides.length/s.params.grid.rows):s.slides.length,{centeredSlides:l}=s.params;let f=s.params.slidesPerView;f==="auto"?f=s.slidesPerViewDynamic():(f=Math.ceil(parseFloat(s.params.slidesPerView,10)),l&&f%2===0&&(f=f+1));let u=o-r<f;if(l&&(u=u||r<Math.ceil(f/2)),u){const d=l?r<s.activeIndex?"prev":"next":r-s.activeIndex-1<s.params.slidesPerView?"next":"prev";s.loopFix({direction:d,slideTo:!0,activeSlideIndex:d==="next"?r+1:r-o+1,slideRealIndex:d==="next"?s.realIndex:void 0})}if(n){const d=i*s.params.grid.rows;i=s.slides.filter(h=>h.getAttribute("data-swiper-slide-index")*1===d)[0].column}else i=s.getSlideIndexByData(i)}return requestAnimationFrame(()=>{s.slideTo(i,e,c,a)}),s}function WT(t,e,c){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0);const a=this,{enabled:s,params:n,animating:i}=a;if(!s)return a;let r=n.slidesPerGroup;n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(r=Math.max(a.slidesPerViewDynamic("current",!0),1));const o=a.activeIndex<n.slidesPerGroupSkip?1:r,l=a.virtual&&n.virtual.enabled;if(n.loop){if(i&&!l&&n.loopPreventsSliding)return!1;if(a.loopFix({direction:"next"}),a._clientLeft=a.wrapperEl.clientLeft,a.activeIndex===a.slides.length-1&&n.cssMode)return requestAnimationFrame(()=>{a.slideTo(a.activeIndex+o,t,e,c)}),!0}return n.rewind&&a.isEnd?a.slideTo(0,t,e,c):a.slideTo(a.activeIndex+o,t,e,c)}function qT(t,e,c){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0);const a=this,{params:s,snapGrid:n,slidesGrid:i,rtlTranslate:r,enabled:o,animating:l}=a;if(!o)return a;const f=a.virtual&&s.virtual.enabled;if(s.loop){if(l&&!f&&s.loopPreventsSliding)return!1;a.loopFix({direction:"prev"}),a._clientLeft=a.wrapperEl.clientLeft}const u=r?a.translate:-a.translate;function d(H){return H<0?-Math.floor(Math.abs(H)):Math.floor(H)}const h=d(u),v=n.map(H=>d(H));let m=n[v.indexOf(h)-1];if(typeof m>"u"&&s.cssMode){let H;n.forEach((p,g)=>{h>=p&&(H=g)}),typeof H<"u"&&(m=n[H>0?H-1:H])}let C=0;if(typeof m<"u"&&(C=i.indexOf(m),C<0&&(C=a.activeIndex-1),s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(C=C-a.slidesPerViewDynamic("previous",!0)+1,C=Math.max(C,0))),s.rewind&&a.isBeginning){const H=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(H,t,e,c)}else if(s.loop&&a.activeIndex===0&&s.cssMode)return requestAnimationFrame(()=>{a.slideTo(C,t,e,c)}),!0;return a.slideTo(C,t,e,c)}function GT(t,e,c){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0);const a=this;return a.slideTo(a.activeIndex,t,e,c)}function jT(t,e,c,a){t===void 0&&(t=this.params.speed),e===void 0&&(e=!0),a===void 0&&(a=.5);const s=this;let n=s.activeIndex;const i=Math.min(s.params.slidesPerGroupSkip,n),r=i+Math.floor((n-i)/s.params.slidesPerGroup),o=s.rtlTranslate?s.translate:-s.translate;if(o>=s.snapGrid[r]){const l=s.snapGrid[r],f=s.snapGrid[r+1];o-l>(f-l)*a&&(n+=s.params.slidesPerGroup)}else{const l=s.snapGrid[r-1],f=s.snapGrid[r];o-l<=(f-l)*a&&(n-=s.params.slidesPerGroup)}return n=Math.max(n,0),n=Math.min(n,s.slidesGrid.length-1),s.slideTo(n,t,e,c)}function KT(){const t=this,{params:e,slidesEl:c}=t,a=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView;let s=t.clickedIndex,n;const i=t.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(t.animating)return;n=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?s<t.loopedSlides-a/2||s>t.slides.length-t.loopedSlides+a/2?(t.loopFix(),s=t.getSlideIndex($1(c,`${i}[data-swiper-slide-index="${n}"]`)[0]),Vt(()=>{t.slideTo(s)})):t.slideTo(s):s>t.slides.length-a?(t.loopFix(),s=t.getSlideIndex($1(c,`${i}[data-swiper-slide-index="${n}"]`)[0]),Vt(()=>{t.slideTo(s)})):t.slideTo(s)}else t.slideTo(s)}var YT={slideTo:UT,slideToLoop:$T,slideNext:WT,slidePrev:qT,slideReset:GT,slideToClosest:jT,slideToClickedSlide:KT};function XT(t){const e=this,{params:c,slidesEl:a}=e;if(!c.loop||e.virtual&&e.params.virtual.enabled)return;const s=()=>{$1(a,`.${c.slideClass}, swiper-slide`).forEach((u,d)=>{u.setAttribute("data-swiper-slide-index",d)})},n=e.grid&&c.grid&&c.grid.rows>1,i=c.slidesPerGroup*(n?c.grid.rows:1),r=e.slides.length%i!==0,o=n&&e.slides.length%c.grid.rows!==0,l=f=>{for(let u=0;u<f;u+=1){const d=e.isElement?q4("swiper-slide",[c.slideBlankClass]):q4("div",[c.slideClass,c.slideBlankClass]);e.slidesEl.append(d)}};if(r){if(c.loopAddBlankSlides){const f=i-e.slides.length%i;l(f),e.recalcSlides(),e.updateSlides()}else Lt("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else if(o){if(c.loopAddBlankSlides){const f=c.grid.rows-e.slides.length%c.grid.rows;l(f),e.recalcSlides(),e.updateSlides()}else Lt("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else s();e.loopFix({slideRealIndex:t,direction:c.centeredSlides?void 0:"next"})}function QT(t){let{slideRealIndex:e,slideTo:c=!0,direction:a,setTranslate:s,activeSlideIndex:n,byController:i,byMousewheel:r}=t===void 0?{}:t;const o=this;if(!o.params.loop)return;o.emit("beforeLoopFix");const{slides:l,allowSlidePrev:f,allowSlideNext:u,slidesEl:d,params:h}=o,{centeredSlides:v}=h;if(o.allowSlidePrev=!0,o.allowSlideNext=!0,o.virtual&&h.virtual.enabled){c&&(!h.centeredSlides&&o.snapIndex===0?o.slideTo(o.virtual.slides.length,0,!1,!0):h.centeredSlides&&o.snapIndex<h.slidesPerView?o.slideTo(o.virtual.slides.length+o.snapIndex,0,!1,!0):o.snapIndex===o.snapGrid.length-1&&o.slideTo(o.virtual.slidesBefore,0,!1,!0)),o.allowSlidePrev=f,o.allowSlideNext=u,o.emit("loopFix");return}let m=h.slidesPerView;m==="auto"?m=o.slidesPerViewDynamic():(m=Math.ceil(parseFloat(h.slidesPerView,10)),v&&m%2===0&&(m=m+1));const C=h.slidesPerGroupAuto?m:h.slidesPerGroup;let H=C;H%C!==0&&(H+=C-H%C),H+=h.loopAdditionalSlides,o.loopedSlides=H;const p=o.grid&&h.grid&&h.grid.rows>1;l.length<m+H?Lt("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):p&&h.grid.fill==="row"&&Lt("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const g=[],_=[];let L=o.activeIndex;typeof n>"u"?n=o.getSlideIndex(l.filter(x=>x.classList.contains(h.slideActiveClass))[0]):L=n;const k=a==="next"||!a,$=a==="prev"||!a;let N=0,w=0;const y=p?Math.ceil(l.length/h.grid.rows):l.length,A=(p?l[n].column:n)+(v&&typeof s>"u"?-m/2+.5:0);if(A<H){N=Math.max(H-A,C);for(let x=0;x<H-A;x+=1){const R=x-Math.floor(x/y)*y;if(p){const D=y-R-1;for(let U=l.length-1;U>=0;U-=1)l[U].column===D&&g.push(U)}else g.push(y-R-1)}}else if(A+m>y-H){w=Math.max(A-(y-H*2),C);for(let x=0;x<w;x+=1){const R=x-Math.floor(x/y)*y;p?l.forEach((D,U)=>{D.column===R&&_.push(U)}):_.push(R)}}if(o.__preventObserver__=!0,requestAnimationFrame(()=>{o.__preventObserver__=!1}),$&&g.forEach(x=>{l[x].swiperLoopMoveDOM=!0,d.prepend(l[x]),l[x].swiperLoopMoveDOM=!1}),k&&_.forEach(x=>{l[x].swiperLoopMoveDOM=!0,d.append(l[x]),l[x].swiperLoopMoveDOM=!1}),o.recalcSlides(),h.slidesPerView==="auto"?o.updateSlides():p&&(g.length>0&&$||_.length>0&&k)&&o.slides.forEach((x,R)=>{o.grid.updateSlide(R,x,o.slides)}),h.watchSlidesProgress&&o.updateSlidesOffset(),c){if(g.length>0&&$){if(typeof e>"u"){const x=o.slidesGrid[L],D=o.slidesGrid[L+N]-x;r?o.setTranslate(o.translate-D):(o.slideTo(L+N,0,!1,!0),s&&(o.touchEventsData.startTranslate=o.touchEventsData.startTranslate-D,o.touchEventsData.currentTranslate=o.touchEventsData.currentTranslate-D))}else if(s){const x=p?g.length/h.grid.rows:g.length;o.slideTo(o.activeIndex+x,0,!1,!0),o.touchEventsData.currentTranslate=o.translate}}else if(_.length>0&&k)if(typeof e>"u"){const x=o.slidesGrid[L],D=o.slidesGrid[L-w]-x;r?o.setTranslate(o.translate-D):(o.slideTo(L-w,0,!1,!0),s&&(o.touchEventsData.startTranslate=o.touchEventsData.startTranslate-D,o.touchEventsData.currentTranslate=o.touchEventsData.currentTranslate-D))}else{const x=p?_.length/h.grid.rows:_.length;o.slideTo(o.activeIndex-x,0,!1,!0)}}if(o.allowSlidePrev=f,o.allowSlideNext=u,o.controller&&o.controller.control&&!i){const x={slideRealIndex:e,direction:a,setTranslate:s,activeSlideIndex:n,byController:!0};Array.isArray(o.controller.control)?o.controller.control.forEach(R=>{!R.destroyed&&R.params.loop&&R.loopFix({...x,slideTo:R.params.slidesPerView===h.slidesPerView?c:!1})}):o.controller.control instanceof o.constructor&&o.controller.control.params.loop&&o.controller.control.loopFix({...x,slideTo:o.controller.control.params.slidesPerView===h.slidesPerView?c:!1})}o.emit("loopFix")}function JT(){const t=this,{params:e,slidesEl:c}=t;if(!e.loop||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();const a=[];t.slides.forEach(s=>{const n=typeof s.swiperSlideIndex>"u"?s.getAttribute("data-swiper-slide-index")*1:s.swiperSlideIndex;a[n]=s}),t.slides.forEach(s=>{s.removeAttribute("data-swiper-slide-index")}),a.forEach(s=>{c.append(s)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}var ZT={loopCreate:XT,loopFix:QT,loopDestroy:JT};function eE(t){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const c=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),c.style.cursor="move",c.style.cursor=t?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function tE(){const t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t.isElement&&(t.__preventObserver__=!0),t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1}))}var cE={setGrabCursor:eE,unsetGrabCursor:tE};function aE(t,e){e===void 0&&(e=this);function c(a){if(!a||a===k1()||a===M1())return null;a.assignedSlot&&(a=a.assignedSlot);const s=a.closest(t);return!s&&!a.getRootNode?null:s||c(a.getRootNode().host)}return c(e)}function N5(t,e,c){const a=M1(),{params:s}=t,n=s.edgeSwipeDetection,i=s.edgeSwipeThreshold;return n&&(c<=i||c>=a.innerWidth-i)?n==="prevent"?(e.preventDefault(),!0):!1:!0}function sE(t){const e=this,c=k1();let a=t;a.originalEvent&&(a=a.originalEvent);const s=e.touchEventsData;if(a.type==="pointerdown"){if(s.pointerId!==null&&s.pointerId!==a.pointerId)return;s.pointerId=a.pointerId}else a.type==="touchstart"&&a.targetTouches.length===1&&(s.touchId=a.targetTouches[0].identifier);if(a.type==="touchstart"){N5(e,a,a.targetTouches[0].pageX);return}const{params:n,touches:i,enabled:r}=e;if(!r||!n.simulateTouch&&a.pointerType==="mouse"||e.animating&&n.preventInteractionOnTransition)return;!e.animating&&n.cssMode&&n.loop&&e.loopFix();let o=a.target;if(n.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(o)||"which"in a&&a.which===3||"button"in a&&a.button>0||s.isTouched&&s.isMoved)return;const l=!!n.noSwipingClass&&n.noSwipingClass!=="",f=a.composedPath?a.composedPath():a.path;l&&a.target&&a.target.shadowRoot&&f&&(o=f[0]);const u=n.noSwipingSelector?n.noSwipingSelector:`.${n.noSwipingClass}`,d=!!(a.target&&a.target.shadowRoot);if(n.noSwiping&&(d?aE(u,o):o.closest(u))){e.allowClick=!0;return}if(n.swipeHandler&&!o.closest(n.swipeHandler))return;i.currentX=a.pageX,i.currentY=a.pageY;const h=i.currentX,v=i.currentY;if(!N5(e,a,h))return;Object.assign(s,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),i.startX=h,i.startY=v,s.touchStartTime=_t(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,n.threshold>0&&(s.allowThresholdMove=!1);let m=!0;o.matches(s.focusableElements)&&(m=!1,o.nodeName==="SELECT"&&(s.isTouched=!1)),c.activeElement&&c.activeElement.matches(s.focusableElements)&&c.activeElement!==o&&c.activeElement.blur();const C=m&&e.allowTouchMove&&n.touchStartPreventDefault;(n.touchStartForcePreventDefault||C)&&!o.isContentEditable&&a.preventDefault(),n.freeMode&&n.freeMode.enabled&&e.freeMode&&e.animating&&!n.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",a)}function nE(t){const e=k1(),c=this,a=c.touchEventsData,{params:s,touches:n,rtlTranslate:i,enabled:r}=c;if(!r||!s.simulateTouch&&t.pointerType==="mouse")return;let o=t;if(o.originalEvent&&(o=o.originalEvent),o.type==="pointermove"&&(a.touchId!==null||o.pointerId!==a.pointerId))return;let l;if(o.type==="touchmove"){if(l=[...o.changedTouches].filter(k=>k.identifier===a.touchId)[0],!l||l.identifier!==a.touchId)return}else l=o;if(!a.isTouched){a.startMoving&&a.isScrolling&&c.emit("touchMoveOpposite",o);return}const f=l.pageX,u=l.pageY;if(o.preventedByNestedSwiper){n.startX=f,n.startY=u;return}if(!c.allowTouchMove){o.target.matches(a.focusableElements)||(c.allowClick=!1),a.isTouched&&(Object.assign(n,{startX:f,startY:u,currentX:f,currentY:u}),a.touchStartTime=_t());return}if(s.touchReleaseOnEdges&&!s.loop){if(c.isVertical()){if(u<n.startY&&c.translate<=c.maxTranslate()||u>n.startY&&c.translate>=c.minTranslate()){a.isTouched=!1,a.isMoved=!1;return}}else if(f<n.startX&&c.translate<=c.maxTranslate()||f>n.startX&&c.translate>=c.minTranslate())return}if(e.activeElement&&o.target===e.activeElement&&o.target.matches(a.focusableElements)){a.isMoved=!0,c.allowClick=!1;return}a.allowTouchCallbacks&&c.emit("touchMove",o),n.previousX=n.currentX,n.previousY=n.currentY,n.currentX=f,n.currentY=u;const d=n.currentX-n.startX,h=n.currentY-n.startY;if(c.params.threshold&&Math.sqrt(d**2+h**2)<c.params.threshold)return;if(typeof a.isScrolling>"u"){let k;c.isHorizontal()&&n.currentY===n.startY||c.isVertical()&&n.currentX===n.startX?a.isScrolling=!1:d*d+h*h>=25&&(k=Math.atan2(Math.abs(h),Math.abs(d))*180/Math.PI,a.isScrolling=c.isHorizontal()?k>s.touchAngle:90-k>s.touchAngle)}if(a.isScrolling&&c.emit("touchMoveOpposite",o),typeof a.startMoving>"u"&&(n.currentX!==n.startX||n.currentY!==n.startY)&&(a.startMoving=!0),a.isScrolling){a.isTouched=!1;return}if(!a.startMoving)return;c.allowClick=!1,!s.cssMode&&o.cancelable&&o.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&o.stopPropagation();let v=c.isHorizontal()?d:h,m=c.isHorizontal()?n.currentX-n.previousX:n.currentY-n.previousY;s.oneWayMovement&&(v=Math.abs(v)*(i?1:-1),m=Math.abs(m)*(i?1:-1)),n.diff=v,v*=s.touchRatio,i&&(v=-v,m=-m);const C=c.touchesDirection;c.swipeDirection=v>0?"prev":"next",c.touchesDirection=m>0?"prev":"next";const H=c.params.loop&&!s.cssMode,p=c.touchesDirection==="next"&&c.allowSlideNext||c.touchesDirection==="prev"&&c.allowSlidePrev;if(!a.isMoved){if(H&&p&&c.loopFix({direction:c.swipeDirection}),a.startTranslate=c.getTranslate(),c.setTransition(0),c.animating){const k=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});c.wrapperEl.dispatchEvent(k)}a.allowMomentumBounce=!1,s.grabCursor&&(c.allowSlideNext===!0||c.allowSlidePrev===!0)&&c.setGrabCursor(!0),c.emit("sliderFirstMove",o)}let g;if(new Date().getTime(),a.isMoved&&a.allowThresholdMove&&C!==c.touchesDirection&&H&&p&&Math.abs(v)>=1){Object.assign(n,{startX:f,startY:u,currentX:f,currentY:u,startTranslate:a.currentTranslate}),a.loopSwapReset=!0,a.startTranslate=a.currentTranslate;return}c.emit("sliderMove",o),a.isMoved=!0,a.currentTranslate=v+a.startTranslate;let _=!0,L=s.resistanceRatio;if(s.touchReleaseOnEdges&&(L=0),v>0?(H&&p&&!g&&a.allowThresholdMove&&a.currentTranslate>(s.centeredSlides?c.minTranslate()-c.slidesSizesGrid[c.activeIndex+1]:c.minTranslate())&&c.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),a.currentTranslate>c.minTranslate()&&(_=!1,s.resistance&&(a.currentTranslate=c.minTranslate()-1+(-c.minTranslate()+a.startTranslate+v)**L))):v<0&&(H&&p&&!g&&a.allowThresholdMove&&a.currentTranslate<(s.centeredSlides?c.maxTranslate()+c.slidesSizesGrid[c.slidesSizesGrid.length-1]:c.maxTranslate())&&c.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:c.slides.length-(s.slidesPerView==="auto"?c.slidesPerViewDynamic():Math.ceil(parseFloat(s.slidesPerView,10)))}),a.currentTranslate<c.maxTranslate()&&(_=!1,s.resistance&&(a.currentTranslate=c.maxTranslate()+1-(c.maxTranslate()-a.startTranslate-v)**L))),_&&(o.preventedByNestedSwiper=!0),!c.allowSlideNext&&c.swipeDirection==="next"&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!c.allowSlidePrev&&c.swipeDirection==="prev"&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),!c.allowSlidePrev&&!c.allowSlideNext&&(a.currentTranslate=a.startTranslate),s.threshold>0)if(Math.abs(v)>s.threshold||a.allowThresholdMove){if(!a.allowThresholdMove){a.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,a.currentTranslate=a.startTranslate,n.diff=c.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY;return}}else{a.currentTranslate=a.startTranslate;return}!s.followFinger||s.cssMode||((s.freeMode&&s.freeMode.enabled&&c.freeMode||s.watchSlidesProgress)&&(c.updateActiveIndex(),c.updateSlidesClasses()),s.freeMode&&s.freeMode.enabled&&c.freeMode&&c.freeMode.onTouchMove(),c.updateProgress(a.currentTranslate),c.setTranslate(a.currentTranslate))}function iE(t){const e=this,c=e.touchEventsData;let a=t;a.originalEvent&&(a=a.originalEvent);let s;if(a.type==="touchend"||a.type==="touchcancel"){if(s=[...a.changedTouches].filter(L=>L.identifier===c.touchId)[0],!s||s.identifier!==c.touchId)return}else{if(c.touchId!==null||a.pointerId!==c.pointerId)return;s=a}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(a.type)&&!(["pointercancel","contextmenu"].includes(a.type)&&(e.browser.isSafari||e.browser.isWebView)))return;c.pointerId=null,c.touchId=null;const{params:i,touches:r,rtlTranslate:o,slidesGrid:l,enabled:f}=e;if(!f||!i.simulateTouch&&a.pointerType==="mouse")return;if(c.allowTouchCallbacks&&e.emit("touchEnd",a),c.allowTouchCallbacks=!1,!c.isTouched){c.isMoved&&i.grabCursor&&e.setGrabCursor(!1),c.isMoved=!1,c.startMoving=!1;return}i.grabCursor&&c.isMoved&&c.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const u=_t(),d=u-c.touchStartTime;if(e.allowClick){const L=a.path||a.composedPath&&a.composedPath();e.updateClickedSlide(L&&L[0]||a.target,L),e.emit("tap click",a),d<300&&u-c.lastClickTime<300&&e.emit("doubleTap doubleClick",a)}if(c.lastClickTime=_t(),Vt(()=>{e.destroyed||(e.allowClick=!0)}),!c.isTouched||!c.isMoved||!e.swipeDirection||r.diff===0&&!c.loopSwapReset||c.currentTranslate===c.startTranslate&&!c.loopSwapReset){c.isTouched=!1,c.isMoved=!1,c.startMoving=!1;return}c.isTouched=!1,c.isMoved=!1,c.startMoving=!1;let h;if(i.followFinger?h=o?e.translate:-e.translate:h=-c.currentTranslate,i.cssMode)return;if(i.freeMode&&i.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:h});return}const v=h>=-e.maxTranslate()&&!e.params.loop;let m=0,C=e.slidesSizesGrid[0];for(let L=0;L<l.length;L+=L<i.slidesPerGroupSkip?1:i.slidesPerGroup){const k=L<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;typeof l[L+k]<"u"?(v||h>=l[L]&&h<l[L+k])&&(m=L,C=l[L+k]-l[L]):(v||h>=l[L])&&(m=L,C=l[l.length-1]-l[l.length-2])}let H=null,p=null;i.rewind&&(e.isBeginning?p=i.virtual&&i.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(H=0));const g=(h-l[m])/C,_=m<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(d>i.longSwipesMs){if(!i.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(g>=i.longSwipesRatio?e.slideTo(i.rewind&&e.isEnd?H:m+_):e.slideTo(m)),e.swipeDirection==="prev"&&(g>1-i.longSwipesRatio?e.slideTo(m+_):p!==null&&g<0&&Math.abs(g)>i.longSwipesRatio?e.slideTo(p):e.slideTo(m))}else{if(!i.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(a.target===e.navigation.nextEl||a.target===e.navigation.prevEl)?a.target===e.navigation.nextEl?e.slideTo(m+_):e.slideTo(m):(e.swipeDirection==="next"&&e.slideTo(H!==null?H:m+_),e.swipeDirection==="prev"&&e.slideTo(p!==null?p:m))}}function T5(){const t=this,{params:e,el:c}=t;if(c&&c.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:s,snapGrid:n}=t,i=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();const r=i&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides&&!r?t.slideTo(t.slides.length-1,0,!1,!0):t.params.loop&&!i?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(t.autoplay.resizeTimeout),t.autoplay.resizeTimeout=setTimeout(()=>{t.autoplay&&t.autoplay.running&&t.autoplay.paused&&t.autoplay.resume()},500)),t.allowSlidePrev=s,t.allowSlideNext=a,t.params.watchOverflow&&n!==t.snapGrid&&t.checkOverflow()}function rE(t){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function oE(){const t=this,{wrapperEl:e,rtlTranslate:c,enabled:a}=t;if(!a)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let s;const n=t.maxTranslate()-t.minTranslate();n===0?s=0:s=(t.translate-t.minTranslate())/n,s!==t.progress&&t.updateProgress(c?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}function lE(t){const e=this;W0(e,t.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function fE(){const t=this;t.documentTouchHandlerProceeded||(t.documentTouchHandlerProceeded=!0,t.params.touchReleaseOnEdges&&(t.el.style.touchAction="auto"))}const j9=(t,e)=>{const c=k1(),{params:a,el:s,wrapperEl:n,device:i}=t,r=!!a.nested,o=e==="on"?"addEventListener":"removeEventListener",l=e;c[o]("touchstart",t.onDocumentTouchStart,{passive:!1,capture:r}),s[o]("touchstart",t.onTouchStart,{passive:!1}),s[o]("pointerdown",t.onTouchStart,{passive:!1}),c[o]("touchmove",t.onTouchMove,{passive:!1,capture:r}),c[o]("pointermove",t.onTouchMove,{passive:!1,capture:r}),c[o]("touchend",t.onTouchEnd,{passive:!0}),c[o]("pointerup",t.onTouchEnd,{passive:!0}),c[o]("pointercancel",t.onTouchEnd,{passive:!0}),c[o]("touchcancel",t.onTouchEnd,{passive:!0}),c[o]("pointerout",t.onTouchEnd,{passive:!0}),c[o]("pointerleave",t.onTouchEnd,{passive:!0}),c[o]("contextmenu",t.onTouchEnd,{passive:!0}),(a.preventClicks||a.preventClicksPropagation)&&s[o]("click",t.onClick,!0),a.cssMode&&n[o]("scroll",t.onScroll),a.updateOnWindowResize?t[l](i.ios||i.android?"resize orientationchange observerUpdate":"resize observerUpdate",T5,!0):t[l]("observerUpdate",T5,!0),s[o]("load",t.onLoad,{capture:!0})};function uE(){const t=this,{params:e}=t;t.onTouchStart=sE.bind(t),t.onTouchMove=nE.bind(t),t.onTouchEnd=iE.bind(t),t.onDocumentTouchStart=fE.bind(t),e.cssMode&&(t.onScroll=oE.bind(t)),t.onClick=rE.bind(t),t.onLoad=lE.bind(t),j9(t,"on")}function dE(){j9(this,"off")}var hE={attachEvents:uE,detachEvents:dE};const E5=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function pE(){const t=this,{realIndex:e,initialized:c,params:a,el:s}=t,n=a.breakpoints;if(!n||n&&Object.keys(n).length===0)return;const i=t.getBreakpoint(n,t.params.breakpointsBase,t.el);if(!i||t.currentBreakpoint===i)return;const o=(i in n?n[i]:void 0)||t.originalParams,l=E5(t,a),f=E5(t,o),u=a.enabled;l&&!f?(s.classList.remove(`${a.containerModifierClass}grid`,`${a.containerModifierClass}grid-column`),t.emitContainerClasses()):!l&&f&&(s.classList.add(`${a.containerModifierClass}grid`),(o.grid.fill&&o.grid.fill==="column"||!o.grid.fill&&a.grid.fill==="column")&&s.classList.add(`${a.containerModifierClass}grid-column`),t.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(H=>{if(typeof o[H]>"u")return;const p=a[H]&&a[H].enabled,g=o[H]&&o[H].enabled;p&&!g&&t[H].disable(),!p&&g&&t[H].enable()});const d=o.direction&&o.direction!==a.direction,h=a.loop&&(o.slidesPerView!==a.slidesPerView||d),v=a.loop;d&&c&&t.changeDirection(),L1(t.params,o);const m=t.params.enabled,C=t.params.loop;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),u&&!m?t.disable():!u&&m&&t.enable(),t.currentBreakpoint=i,t.emit("_beforeBreakpoint",o),c&&(h?(t.loopDestroy(),t.loopCreate(e),t.updateSlides()):!v&&C?(t.loopCreate(e),t.updateSlides()):v&&!C&&t.loopDestroy()),t.emit("breakpoint",o)}function mE(t,e,c){if(e===void 0&&(e="window"),!t||e==="container"&&!c)return;let a=!1;const s=M1(),n=e==="window"?s.innerHeight:c.clientHeight,i=Object.keys(t).map(r=>{if(typeof r=="string"&&r.indexOf("@")===0){const o=parseFloat(r.substr(1));return{value:n*o,point:r}}return{value:r,point:r}});i.sort((r,o)=>parseInt(r.value,10)-parseInt(o.value,10));for(let r=0;r<i.length;r+=1){const{point:o,value:l}=i[r];e==="window"?s.matchMedia(`(min-width: ${l}px)`).matches&&(a=o):l<=c.clientWidth&&(a=o)}return a||"max"}var vE={setBreakpoint:pE,getBreakpoint:mE};function gE(t,e){const c=[];return t.forEach(a=>{typeof a=="object"?Object.keys(a).forEach(s=>{a[s]&&c.push(e+s)}):typeof a=="string"&&c.push(e+a)}),c}function HE(){const t=this,{classNames:e,params:c,rtl:a,el:s,device:n}=t,i=gE(["initialized",c.direction,{"free-mode":t.params.freeMode&&c.freeMode.enabled},{autoheight:c.autoHeight},{rtl:a},{grid:c.grid&&c.grid.rows>1},{"grid-column":c.grid&&c.grid.rows>1&&c.grid.fill==="column"},{android:n.android},{ios:n.ios},{"css-mode":c.cssMode},{centered:c.cssMode&&c.centeredSlides},{"watch-progress":c.watchSlidesProgress}],c.containerModifierClass);e.push(...i),s.classList.add(...e),t.emitContainerClasses()}function zE(){const t=this,{el:e,classNames:c}=t;e.classList.remove(...c),t.emitContainerClasses()}var CE={addClasses:HE,removeClasses:zE};function ME(){const t=this,{isLocked:e,params:c}=t,{slidesOffsetBefore:a}=c;if(a){const s=t.slides.length-1,n=t.slidesGrid[s]+t.slidesSizesGrid[s]+a*2;t.isLocked=t.size>n}else t.isLocked=t.snapGrid.length===1;c.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),c.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}var VE={checkOverflow:ME},la={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function _E(t,e){return function(a){a===void 0&&(a={});const s=Object.keys(a)[0],n=a[s];if(typeof n!="object"||n===null){L1(e,a);return}if(t[s]===!0&&(t[s]={enabled:!0}),s==="navigation"&&t[s]&&t[s].enabled&&!t[s].prevEl&&!t[s].nextEl&&(t[s].auto=!0),["pagination","scrollbar"].indexOf(s)>=0&&t[s]&&t[s].enabled&&!t[s].el&&(t[s].auto=!0),!(s in t&&"enabled"in n)){L1(e,a);return}typeof t[s]=="object"&&!("enabled"in t[s])&&(t[s].enabled=!0),t[s]||(t[s]={enabled:!1}),L1(e,a)}}const l8={eventsEmitter:CT,update:TT,translate:RT,transition:BT,slide:YT,loop:ZT,grabCursor:cE,events:hE,breakpoints:vE,checkOverflow:VE,classes:CE},f8={};let Js=class u3{constructor(){let e,c;for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];s.length===1&&s[0].constructor&&Object.prototype.toString.call(s[0]).slice(8,-1)==="Object"?c=s[0]:[e,c]=s,c||(c={}),c=L1({},c),e&&!c.el&&(c.el=e);const i=k1();if(c.el&&typeof c.el=="string"&&i.querySelectorAll(c.el).length>1){const f=[];return i.querySelectorAll(c.el).forEach(u=>{const d=L1({},c,{el:u});f.push(new u3(d))}),f}const r=this;r.__swiper__=!0,r.support=q9(),r.device=mT({userAgent:c.userAgent}),r.browser=gT(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],c.modules&&Array.isArray(c.modules)&&r.modules.push(...c.modules);const o={};r.modules.forEach(f=>{f({params:c,swiper:r,extendParams:_E(c,o),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})});const l=L1({},la,o);return r.params=L1({},l,f8,c),r.originalParams=L1({},r.params),r.passedParams=L1({},c),r.params&&r.params.on&&Object.keys(r.params.on).forEach(f=>{r.on(f,r.params.on[f])}),r.params&&r.params.onAny&&r.onAny(r.params.onAny),Object.assign(r,{enabled:r.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return r.params.direction==="horizontal"},isVertical(){return r.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:c,params:a}=this,s=$1(c,`.${a.slideClass}, swiper-slide`),n=bt(s[0]);return bt(e)-n}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(c=>c.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:c,params:a}=e;e.slides=$1(c,`.${a.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,c){const a=this;e=Math.min(Math.max(e,0),1);const s=a.minTranslate(),i=(a.maxTranslate()-s)*e+s;a.translateTo(i,typeof c>"u"?0:c),a.updateActiveIndex(),a.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const c=e.el.className.split(" ").filter(a=>a.indexOf("swiper")===0||a.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",c.join(" "))}getSlideClasses(e){const c=this;return c.destroyed?"":e.className.split(" ").filter(a=>a.indexOf("swiper-slide")===0||a.indexOf(c.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const c=[];e.slides.forEach(a=>{const s=e.getSlideClasses(a);c.push({slideEl:a,classNames:s}),e.emit("_slideClass",a,s)}),e.emit("_slideClasses",c)}slidesPerViewDynamic(e,c){e===void 0&&(e="current"),c===void 0&&(c=!1);const a=this,{params:s,slides:n,slidesGrid:i,slidesSizesGrid:r,size:o,activeIndex:l}=a;let f=1;if(typeof s.slidesPerView=="number")return s.slidesPerView;if(s.centeredSlides){let u=n[l]?n[l].swiperSlideSize:0,d;for(let h=l+1;h<n.length;h+=1)n[h]&&!d&&(u+=n[h].swiperSlideSize,f+=1,u>o&&(d=!0));for(let h=l-1;h>=0;h-=1)n[h]&&!d&&(u+=n[h].swiperSlideSize,f+=1,u>o&&(d=!0))}else if(e==="current")for(let u=l+1;u<n.length;u+=1)(c?i[u]+r[u]-i[l]<o:i[u]-i[l]<o)&&(f+=1);else for(let u=l-1;u>=0;u-=1)i[l]-i[u]<o&&(f+=1);return f}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:c,params:a}=e;a.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(i=>{i.complete&&W0(e,i)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function s(){const i=e.rtlTranslate?e.translate*-1:e.translate,r=Math.min(Math.max(i,e.maxTranslate()),e.minTranslate());e.setTranslate(r),e.updateActiveIndex(),e.updateSlidesClasses()}let n;if(a.freeMode&&a.freeMode.enabled&&!a.cssMode)s(),a.autoHeight&&e.updateAutoHeight();else{if((a.slidesPerView==="auto"||a.slidesPerView>1)&&e.isEnd&&!a.centeredSlides){const i=e.virtual&&a.virtual.enabled?e.virtual.slides:e.slides;n=e.slideTo(i.length-1,0,!1,!0)}else n=e.slideTo(e.activeIndex,0,!1,!0);n||s()}a.watchOverflow&&c!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,c){c===void 0&&(c=!0);const a=this,s=a.params.direction;return e||(e=s==="horizontal"?"vertical":"horizontal"),e===s||e!=="horizontal"&&e!=="vertical"||(a.el.classList.remove(`${a.params.containerModifierClass}${s}`),a.el.classList.add(`${a.params.containerModifierClass}${e}`),a.emitContainerClasses(),a.params.direction=e,a.slides.forEach(n=>{e==="vertical"?n.style.width="":n.style.height=""}),a.emit("changeDirection"),c&&a.update()),a}changeLanguageDirection(e){const c=this;c.rtl&&e==="rtl"||!c.rtl&&e==="ltr"||(c.rtl=e==="rtl",c.rtlTranslate=c.params.direction==="horizontal"&&c.rtl,c.rtl?(c.el.classList.add(`${c.params.containerModifierClass}rtl`),c.el.dir="rtl"):(c.el.classList.remove(`${c.params.containerModifierClass}rtl`),c.el.dir="ltr"),c.update())}mount(e){const c=this;if(c.mounted)return!0;let a=e||c.params.el;if(typeof a=="string"&&(a=document.querySelector(a)),!a)return!1;a.swiper=c,a.parentNode&&a.parentNode.host&&a.parentNode.host.nodeName==="SWIPER-CONTAINER"&&(c.isElement=!0);const s=()=>`.${(c.params.wrapperClass||"").trim().split(" ").join(".")}`;let i=a&&a.shadowRoot&&a.shadowRoot.querySelector?a.shadowRoot.querySelector(s()):$1(a,s())[0];return!i&&c.params.createElements&&(i=q4("div",c.params.wrapperClass),a.append(i),$1(a,`.${c.params.slideClass}`).forEach(r=>{i.append(r)})),Object.assign(c,{el:a,wrapperEl:i,slidesEl:c.isElement&&!a.parentNode.host.slideSlots?a.parentNode.host:i,hostEl:c.isElement?a.parentNode.host:a,mounted:!0,rtl:a.dir.toLowerCase()==="rtl"||Y3(a,"direction")==="rtl",rtlTranslate:c.params.direction==="horizontal"&&(a.dir.toLowerCase()==="rtl"||Y3(a,"direction")==="rtl"),wrongRTL:Y3(i,"display")==="-webkit-box"}),!0}init(e){const c=this;if(c.initialized||c.mount(e)===!1)return c;c.emit("beforeInit"),c.params.breakpoints&&c.setBreakpoint(),c.addClasses(),c.updateSize(),c.updateSlides(),c.params.watchOverflow&&c.checkOverflow(),c.params.grabCursor&&c.enabled&&c.setGrabCursor(),c.params.loop&&c.virtual&&c.params.virtual.enabled?c.slideTo(c.params.initialSlide+c.virtual.slidesBefore,0,c.params.runCallbacksOnInit,!1,!0):c.slideTo(c.params.initialSlide,0,c.params.runCallbacksOnInit,!1,!0),c.params.loop&&c.loopCreate(),c.attachEvents();const s=[...c.el.querySelectorAll('[loading="lazy"]')];return c.isElement&&s.push(...c.hostEl.querySelectorAll('[loading="lazy"]')),s.forEach(n=>{n.complete?W0(c,n):n.addEventListener("load",i=>{W0(c,i.target)})}),oa(c),c.initialized=!0,oa(c),c.emit("init"),c.emit("afterInit"),c}destroy(e,c){e===void 0&&(e=!0),c===void 0&&(c=!0);const a=this,{params:s,el:n,wrapperEl:i,slides:r}=a;return typeof a.params>"u"||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),s.loop&&a.loopDestroy(),c&&(a.removeClasses(),n.removeAttribute("style"),i.removeAttribute("style"),r&&r.length&&r.forEach(o=>{o.classList.remove(s.slideVisibleClass,s.slideFullyVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass),o.removeAttribute("style"),o.removeAttribute("data-swiper-slide-index")})),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(o=>{a.off(o)}),e!==!1&&(a.el.swiper=null,nT(a)),a.destroyed=!0),null}static extendDefaults(e){L1(f8,e)}static get extendedDefaults(){return f8}static get defaults(){return la}static installModule(e){u3.prototype.__modules__||(u3.prototype.__modules__=[]);const c=u3.prototype.__modules__;typeof e=="function"&&c.indexOf(e)<0&&c.push(e)}static use(e){return Array.isArray(e)?(e.forEach(c=>u3.installModule(c)),u3):(u3.installModule(e),u3)}};Object.keys(l8).forEach(t=>{Object.keys(l8[t]).forEach(e=>{Js.prototype[e]=l8[t][e]})});Js.use([HT,zT]);const K9=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function G4(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"&&!t.__swiper__}function Me(t,e){const c=["__proto__","constructor","prototype"];Object.keys(e).filter(a=>c.indexOf(a)<0).forEach(a=>{typeof t[a]>"u"?t[a]=e[a]:G4(e[a])&&G4(t[a])&&Object.keys(e[a]).length>0?e[a].__swiper__?t[a]=e[a]:Me(t[a],e[a]):t[a]=e[a]})}function Y9(t){return t===void 0&&(t={}),t.navigation&&typeof t.navigation.nextEl>"u"&&typeof t.navigation.prevEl>"u"}function X9(t){return t===void 0&&(t={}),t.pagination&&typeof t.pagination.el>"u"}function Q9(t){return t===void 0&&(t={}),t.scrollbar&&typeof t.scrollbar.el>"u"}function J9(t){t===void 0&&(t="");const e=t.split(" ").map(a=>a.trim()).filter(a=>!!a),c=[];return e.forEach(a=>{c.indexOf(a)<0&&c.push(a)}),c.join(" ")}function LE(t){return t===void 0&&(t=""),t?t.includes("swiper-wrapper")?t:`swiper-wrapper ${t}`:"swiper-wrapper"}function bE(t){let{swiper:e,slides:c,passedParams:a,changedParams:s,nextEl:n,prevEl:i,scrollbarEl:r,paginationEl:o}=t;const l=s.filter(w=>w!=="children"&&w!=="direction"&&w!=="wrapperClass"),{params:f,pagination:u,navigation:d,scrollbar:h,virtual:v,thumbs:m}=e;let C,H,p,g,_,L,k,$;s.includes("thumbs")&&a.thumbs&&a.thumbs.swiper&&f.thumbs&&!f.thumbs.swiper&&(C=!0),s.includes("controller")&&a.controller&&a.controller.control&&f.controller&&!f.controller.control&&(H=!0),s.includes("pagination")&&a.pagination&&(a.pagination.el||o)&&(f.pagination||f.pagination===!1)&&u&&!u.el&&(p=!0),s.includes("scrollbar")&&a.scrollbar&&(a.scrollbar.el||r)&&(f.scrollbar||f.scrollbar===!1)&&h&&!h.el&&(g=!0),s.includes("navigation")&&a.navigation&&(a.navigation.prevEl||i)&&(a.navigation.nextEl||n)&&(f.navigation||f.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(_=!0);const N=w=>{e[w]&&(e[w].destroy(),w==="navigation"?(e.isElement&&(e[w].prevEl.remove(),e[w].nextEl.remove()),f[w].prevEl=void 0,f[w].nextEl=void 0,e[w].prevEl=void 0,e[w].nextEl=void 0):(e.isElement&&e[w].el.remove(),f[w].el=void 0,e[w].el=void 0))};s.includes("loop")&&e.isElement&&(f.loop&&!a.loop?L=!0:!f.loop&&a.loop?k=!0:$=!0),l.forEach(w=>{if(G4(f[w])&&G4(a[w]))Object.assign(f[w],a[w]),(w==="navigation"||w==="pagination"||w==="scrollbar")&&"enabled"in a[w]&&!a[w].enabled&&N(w);else{const y=a[w];(y===!0||y===!1)&&(w==="navigation"||w==="pagination"||w==="scrollbar")?y===!1&&N(w):f[w]=a[w]}}),l.includes("controller")&&!H&&e.controller&&e.controller.control&&f.controller&&f.controller.control&&(e.controller.control=f.controller.control),s.includes("children")&&c&&v&&f.virtual.enabled?(v.slides=c,v.update(!0)):s.includes("virtual")&&v&&f.virtual.enabled&&(c&&(v.slides=c),v.update(!0)),s.includes("children")&&c&&f.loop&&($=!0),C&&m.init()&&m.update(!0),H&&(e.controller.control=f.controller.control),p&&(e.isElement&&(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-pagination"),o.part.add("pagination"),e.el.appendChild(o)),o&&(f.pagination.el=o),u.init(),u.render(),u.update()),g&&(e.isElement&&(!r||typeof r=="string")&&(r=document.createElement("div"),r.classList.add("swiper-scrollbar"),r.part.add("scrollbar"),e.el.appendChild(r)),r&&(f.scrollbar.el=r),h.init(),h.updateSize(),h.setTranslate()),_&&(e.isElement&&((!n||typeof n=="string")&&(n=document.createElement("div"),n.classList.add("swiper-button-next"),n.innerHTML=e.hostEl.constructor.nextButtonSvg,n.part.add("button-next"),e.el.appendChild(n)),(!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-prev"),i.innerHTML=e.hostEl.constructor.prevButtonSvg,i.part.add("button-prev"),e.el.appendChild(i))),n&&(f.navigation.nextEl=n),i&&(f.navigation.prevEl=i),d.init(),d.update()),s.includes("allowSlideNext")&&(e.allowSlideNext=a.allowSlideNext),s.includes("allowSlidePrev")&&(e.allowSlidePrev=a.allowSlidePrev),s.includes("direction")&&e.changeDirection(a.direction,!1),(L||$)&&e.loopDestroy(),(k||$)&&e.loopCreate(),e.update()}function k5(t,e){t===void 0&&(t={}),e===void 0&&(e=!0);const c={on:{}},a={},s={};Me(c,la),c._emitClasses=!0,c.init=!1;const n={},i=K9.map(o=>o.replace(/_/,"")),r=Object.assign({},t);return Object.keys(r).forEach(o=>{typeof t[o]>"u"||(i.indexOf(o)>=0?G4(t[o])?(c[o]={},s[o]={},Me(c[o],t[o]),Me(s[o],t[o])):(c[o]=t[o],s[o]=t[o]):o.search(/on[A-Z]/)===0&&typeof t[o]=="function"?e?a[`${o[2].toLowerCase()}${o.substr(3)}`]=t[o]:c.on[`${o[2].toLowerCase()}${o.substr(3)}`]=t[o]:n[o]=t[o])}),["navigation","pagination","scrollbar"].forEach(o=>{c[o]===!0&&(c[o]={}),c[o]===!1&&delete c[o]}),{params:c,passedParams:s,rest:n,events:a}}function wE(t,e){let{el:c,nextEl:a,prevEl:s,paginationEl:n,scrollbarEl:i,swiper:r}=t;Y9(e)&&a&&s&&(r.params.navigation.nextEl=a,r.originalParams.navigation.nextEl=a,r.params.navigation.prevEl=s,r.originalParams.navigation.prevEl=s),X9(e)&&n&&(r.params.pagination.el=n,r.originalParams.pagination.el=n),Q9(e)&&i&&(r.params.scrollbar.el=i,r.originalParams.scrollbar.el=i),r.init(c)}function yE(t,e,c,a,s){const n=[];if(!e)return n;const i=o=>{n.indexOf(o)<0&&n.push(o)};if(c&&a){const o=a.map(s),l=c.map(s);o.join("")!==l.join("")&&i("children"),a.length!==c.length&&i("children")}return K9.filter(o=>o[0]==="_").map(o=>o.replace(/_/,"")).forEach(o=>{if(o in t&&o in e)if(G4(t[o])&&G4(e[o])){const l=Object.keys(t[o]),f=Object.keys(e[o]);l.length!==f.length?i(o):(l.forEach(u=>{t[o][u]!==e[o][u]&&i(o)}),f.forEach(u=>{t[o][u]!==e[o][u]&&i(o)}))}else t[o]!==e[o]&&i(o)}),n}const SE=t=>{!t||t.destroyed||!t.params.virtual||t.params.virtual&&!t.params.virtual.enabled||(t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.parallax&&t.params.parallax&&t.params.parallax.enabled&&t.parallax.setTranslate())};function u8(t,e,c){t===void 0&&(t={});const a=[],s={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},n=(i,r)=>{Array.isArray(i)&&i.forEach(o=>{const l=typeof o.type=="symbol";r==="default"&&(r="container-end"),l&&o.children?n(o.children,r):o.type&&(o.type.name==="SwiperSlide"||o.type.name==="AsyncComponentWrapper")?a.push(o):s[r]&&s[r].push(o)})};return Object.keys(t).forEach(i=>{if(typeof t[i]!="function")return;const r=t[i]();n(r,i)}),c.value=e.value,e.value=a,{slides:a,slots:s}}function xE(t,e,c){if(!c)return null;const a=f=>{let u=f;return f<0?u=e.length+f:u>=e.length&&(u=u-e.length),u},s=t.value.isHorizontal()?{[t.value.rtlTranslate?"right":"left"]:`${c.offset}px`}:{top:`${c.offset}px`},{from:n,to:i}=c,r=t.value.params.loop?-e.length:0,o=t.value.params.loop?e.length*2:e.length,l=[];for(let f=r;f<o;f+=1)f>=n&&f<=i&&l.push(e[a(f)]);return l.map(f=>(f.props||(f.props={}),f.props.style||(f.props.style={}),f.props.swiperRef=t,f.props.style=s,g1(f.type,{...f.props},f.children)))}const oe={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},modules:{type:Array,default:void 0},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},oneWayMovement:{type:Boolean,default:void 0},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},focusableElements:{type:String,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},spaceBetween:{type:[Number,String],default:void 0},slidesPerView:{type:[Number,String],default:void 0},maxBackfaceHiddenSlides:{type:Number,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},slidesPerGroupAuto:{type:Boolean,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopedSlides:{type:Number,default:void 0},loopPreventsSliding:{type:Boolean,default:void 0},rewind:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideFullyVisibleClass:{type:String,default:void 0},slideBlankClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},lazyPreloaderClass:{type:String,default:void 0},lazyPreloadPrevNext:{type:Number,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},creativeEffect:{type:Object,default:void 0},cardsEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0},grid:{type:[Object],default:void 0},freeMode:{type:[Boolean,Object],default:void 0},enabled:{type:Boolean,default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","_freeModeNoMomentumRelease","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","autoplayPause","autoplayResume","autoplayTimeLeft","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","breakpointsBase","changeDirection","click","disable","doubleTap","doubleClick","destroy","enable","fromEdge","hashChange","hashSet","init","keyPress","lock","loopFix","momentumBounce","navigationHide","navigationShow","navigationPrev","navigationNext","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slidesUpdated","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","virtualUpdate","zoomChange"],setup(t,e){let{slots:c,emit:a}=e;const{tag:s,wrapperTag:n}=t,i=d2("swiper"),r=d2(null),o=d2(!1),l=d2(!1),f=d2(null),u=d2(null),d=d2(null),h={value:[]},v={value:[]},m=d2(null),C=d2(null),H=d2(null),p=d2(null),{params:g,passedParams:_}=k5(t,!1);u8(c,h,v),d.value=_,v.value=h.value;const L=()=>{u8(c,h,v),o.value=!0};g.onAny=function(N){for(var w=arguments.length,y=new Array(w>1?w-1:0),O=1;O<w;O++)y[O-1]=arguments[O];a(N,...y)},Object.assign(g.on,{_beforeBreakpoint:L,_containerClasses(N,w){i.value=w}});const k={...g};if(delete k.wrapperClass,u.value=new Js(k),u.value.virtual&&u.value.params.virtual.enabled){u.value.virtual.slides=h.value;const N={cache:!1,slides:h.value,renderExternal:w=>{r.value=w},renderExternalUpdate:!1};Me(u.value.params.virtual,N),Me(u.value.originalParams.virtual,N)}Oa(()=>{!l.value&&u.value&&(u.value.emitSlidesClasses(),l.value=!0);const{passedParams:N}=k5(t,!1),w=yE(N,d.value,h.value,v.value,y=>y.props&&y.props.key);d.value=N,(w.length||o.value)&&u.value&&!u.value.destroyed&&bE({swiper:u.value,slides:h.value,passedParams:N,changedParams:w,nextEl:m.value,prevEl:C.value,scrollbarEl:p.value,paginationEl:H.value}),o.value=!1}),pe("swiper",u),x4(r,()=>{Ot(()=>{SE(u.value)})}),Ra(()=>{f.value&&(wE({el:f.value,nextEl:m.value,prevEl:C.value,paginationEl:H.value,scrollbarEl:p.value,swiper:u.value},g),a("swiper",u.value))}),Da(()=>{u.value&&!u.value.destroyed&&u.value.destroy(!0,!1)});function $(N){return g.virtual?xE(u,N,r.value):(N.forEach((w,y)=>{w.props||(w.props={}),w.props.swiperRef=u,w.props.swiperSlideIndex=y}),N)}return()=>{const{slides:N,slots:w}=u8(c,h,v);return g1(s,{ref:f,class:J9(i.value)},[w["container-start"],g1(n,{class:LE(g.wrapperClass)},[w["wrapper-start"],$(N),w["wrapper-end"]]),Y9(t)&&[g1("div",{ref:C,class:"swiper-button-prev"}),g1("div",{ref:m,class:"swiper-button-next"})],Q9(t)&&g1("div",{ref:p,class:"swiper-scrollbar"}),X9(t)&&g1("div",{ref:H,class:"swiper-pagination"}),w["container-end"]])}}},q3={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:{type:Object,required:!1},swiperSlideIndex:{type:Number,default:void 0,required:!1},zoom:{type:Boolean,default:void 0,required:!1},lazy:{type:Boolean,default:!1,required:!1},virtualIndex:{type:[String,Number],default:void 0}},setup(t,e){let{slots:c}=e,a=!1;const{swiperRef:s}=t,n=d2(null),i=d2("swiper-slide"),r=d2(!1);function o(u,d,h){d===n.value&&(i.value=h)}Ra(()=>{!s||!s.value||(s.value.on("_slideClass",o),a=!0)}),K7(()=>{a||!s||!s.value||(s.value.on("_slideClass",o),a=!0)}),Oa(()=>{!n.value||!s||!s.value||(typeof t.swiperSlideIndex<"u"&&(n.value.swiperSlideIndex=t.swiperSlideIndex),s.value.destroyed&&i.value!=="swiper-slide"&&(i.value="swiper-slide"))}),Da(()=>{!s||!s.value||s.value.off("_slideClass",o)});const l=D2(()=>({isActive:i.value.indexOf("swiper-slide-active")>=0,isVisible:i.value.indexOf("swiper-slide-visible")>=0,isPrev:i.value.indexOf("swiper-slide-prev")>=0,isNext:i.value.indexOf("swiper-slide-next")>=0}));pe("swiperSlide",l);const f=()=>{r.value=!0};return()=>g1(t.tag,{class:J9(`${i.value}`),ref:n,"data-swiper-slide-index":typeof t.virtualIndex>"u"&&s&&s.value&&s.value.params.loop?t.swiperSlideIndex:t.virtualIndex,onLoadCapture:f},t.zoom?g1("div",{class:"swiper-zoom-container","data-swiper-zoom":typeof t.zoom=="number"?t.zoom:void 0},[c.default&&c.default(l.value),t.lazy&&!r.value&&g1("div",{class:"swiper-lazy-preloader"})]):[c.default&&c.default(l.value),t.lazy&&!r.value&&g1("div",{class:"swiper-lazy-preloader"})])}};function Zs(t){let{swiper:e,extendParams:c,on:a,emit:s}=t;c({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let n;const i=k1();e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};const r=i.createElement("div");function o(v,m){const C=e.params.virtual;if(C.cache&&e.virtual.cache[m])return e.virtual.cache[m];let H;return C.renderSlide?(H=C.renderSlide.call(e,v,m),typeof H=="string"&&(r.innerHTML=H,H=r.children[0])):e.isElement?H=q4("swiper-slide"):H=q4("div",e.params.slideClass),H.setAttribute("data-swiper-slide-index",m),C.renderSlide||(H.innerHTML=v),C.cache&&(e.virtual.cache[m]=H),H}function l(v){const{slidesPerView:m,slidesPerGroup:C,centeredSlides:H,loop:p}=e.params,{addSlidesBefore:g,addSlidesAfter:_}=e.params.virtual,{from:L,to:k,slides:$,slidesGrid:N,offset:w}=e.virtual;e.params.cssMode||e.updateActiveIndex();const y=e.activeIndex||0;let O;e.rtlTranslate?O="right":O=e.isHorizontal()?"left":"top";let A,x;H?(A=Math.floor(m/2)+C+_,x=Math.floor(m/2)+C+g):(A=m+(C-1)+_,x=(p?m:C)+g);let R=y-x,D=y+A;p||(R=Math.max(R,0),D=Math.min(D,$.length-1));let U=(e.slidesGrid[R]||0)-(e.slidesGrid[0]||0);p&&y>=x?(R-=x,H||(U+=e.slidesGrid[0])):p&&y<x&&(R=-x,H&&(U+=e.slidesGrid[0])),Object.assign(e.virtual,{from:R,to:D,offset:U,slidesGrid:e.slidesGrid,slidesBefore:x,slidesAfter:A});function l2(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),s("virtualUpdate")}if(L===R&&k===D&&!v){e.slidesGrid!==N&&U!==w&&e.slides.forEach(u2=>{u2.style[O]=`${U-Math.abs(e.cssOverflowAdjustment())}px`}),e.updateProgress(),s("virtualUpdate");return}if(e.params.virtual.renderExternal){e.params.virtual.renderExternal.call(e,{offset:U,from:R,to:D,slides:function(){const S2=[];for(let x1=R;x1<=D;x1+=1)S2.push($[x1]);return S2}()}),e.params.virtual.renderExternalUpdate?l2():s("virtualUpdate");return}const G=[],f2=[],y2=u2=>{let S2=u2;return u2<0?S2=$.length+u2:S2>=$.length&&(S2=S2-$.length),S2};if(v)e.slides.filter(u2=>u2.matches(`.${e.params.slideClass}, swiper-slide`)).forEach(u2=>{u2.remove()});else for(let u2=L;u2<=k;u2+=1)if(u2<R||u2>D){const S2=y2(u2);e.slides.filter(x1=>x1.matches(`.${e.params.slideClass}[data-swiper-slide-index="${S2}"], swiper-slide[data-swiper-slide-index="${S2}"]`)).forEach(x1=>{x1.remove()})}const W2=p?-$.length:0,U2=p?$.length*2:$.length;for(let u2=W2;u2<U2;u2+=1)if(u2>=R&&u2<=D){const S2=y2(u2);typeof k>"u"||v?f2.push(S2):(u2>k&&f2.push(S2),u2<L&&G.push(S2))}if(f2.forEach(u2=>{e.slidesEl.append(o($[u2],u2))}),p)for(let u2=G.length-1;u2>=0;u2-=1){const S2=G[u2];e.slidesEl.prepend(o($[S2],S2))}else G.sort((u2,S2)=>S2-u2),G.forEach(u2=>{e.slidesEl.prepend(o($[u2],u2))});$1(e.slidesEl,".swiper-slide, swiper-slide").forEach(u2=>{u2.style[O]=`${U-Math.abs(e.cssOverflowAdjustment())}px`}),l2()}function f(v){if(typeof v=="object"&&"length"in v)for(let m=0;m<v.length;m+=1)v[m]&&e.virtual.slides.push(v[m]);else e.virtual.slides.push(v);l(!0)}function u(v){const m=e.activeIndex;let C=m+1,H=1;if(Array.isArray(v)){for(let p=0;p<v.length;p+=1)v[p]&&e.virtual.slides.unshift(v[p]);C=m+v.length,H=v.length}else e.virtual.slides.unshift(v);if(e.params.virtual.cache){const p=e.virtual.cache,g={};Object.keys(p).forEach(_=>{const L=p[_],k=L.getAttribute("data-swiper-slide-index");k&&L.setAttribute("data-swiper-slide-index",parseInt(k,10)+H),g[parseInt(_,10)+H]=L}),e.virtual.cache=g}l(!0),e.slideTo(C,0)}function d(v){if(typeof v>"u"||v===null)return;let m=e.activeIndex;if(Array.isArray(v))for(let C=v.length-1;C>=0;C-=1)e.params.virtual.cache&&(delete e.virtual.cache[v[C]],Object.keys(e.virtual.cache).forEach(H=>{H>v&&(e.virtual.cache[H-1]=e.virtual.cache[H],e.virtual.cache[H-1].setAttribute("data-swiper-slide-index",H-1),delete e.virtual.cache[H])})),e.virtual.slides.splice(v[C],1),v[C]<m&&(m-=1),m=Math.max(m,0);else e.params.virtual.cache&&(delete e.virtual.cache[v],Object.keys(e.virtual.cache).forEach(C=>{C>v&&(e.virtual.cache[C-1]=e.virtual.cache[C],e.virtual.cache[C-1].setAttribute("data-swiper-slide-index",C-1),delete e.virtual.cache[C])})),e.virtual.slides.splice(v,1),v<m&&(m-=1),m=Math.max(m,0);l(!0),e.slideTo(m,0)}function h(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),l(!0),e.slideTo(0,0)}a("beforeInit",()=>{if(!e.params.virtual.enabled)return;let v;if(typeof e.passedParams.virtual.slides>"u"){const m=[...e.slidesEl.children].filter(C=>C.matches(`.${e.params.slideClass}, swiper-slide`));m&&m.length&&(e.virtual.slides=[...m],v=!0,m.forEach((C,H)=>{C.setAttribute("data-swiper-slide-index",H),e.virtual.cache[H]=C,C.remove()}))}v||(e.virtual.slides=e.params.virtual.slides),e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,l()}),a("setTranslate",()=>{e.params.virtual.enabled&&(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(n),n=setTimeout(()=>{l()},100)):l())}),a("init update resize",()=>{e.params.virtual.enabled&&e.params.cssMode&&o6(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:f,prependSlide:u,removeSlide:d,removeAllSlides:h,update:l})}function en(t,e,c,a){return t.params.createElements&&Object.keys(a).forEach(s=>{if(!c[s]&&c.auto===!0){let n=$1(t.el,`.${a[s]}`)[0];n||(n=q4("div",a[s]),n.className=a[s],t.el.append(n)),c[s]=n,e[s]=n}}),c}function tn(t){let{swiper:e,extendParams:c,on:a,emit:s}=t;c({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const n=m=>(Array.isArray(m)?m:[m]).filter(C=>!!C);function i(m){let C;return m&&typeof m=="string"&&e.isElement&&(C=e.el.querySelector(m),C)?C:(m&&(typeof m=="string"&&(C=[...document.querySelectorAll(m)]),e.params.uniqueNavElements&&typeof m=="string"&&C.length>1&&e.el.querySelectorAll(m).length===1&&(C=e.el.querySelector(m))),m&&!C?m:C)}function r(m,C){const H=e.params.navigation;m=n(m),m.forEach(p=>{p&&(p.classList[C?"add":"remove"](...H.disabledClass.split(" ")),p.tagName==="BUTTON"&&(p.disabled=C),e.params.watchOverflow&&e.enabled&&p.classList[e.isLocked?"add":"remove"](H.lockClass))})}function o(){const{nextEl:m,prevEl:C}=e.navigation;if(e.params.loop){r(C,!1),r(m,!1);return}r(C,e.isBeginning&&!e.params.rewind),r(m,e.isEnd&&!e.params.rewind)}function l(m){m.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),s("navigationPrev"))}function f(m){m.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),s("navigationNext"))}function u(){const m=e.params.navigation;if(e.params.navigation=en(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(m.nextEl||m.prevEl))return;let C=i(m.nextEl),H=i(m.prevEl);Object.assign(e.navigation,{nextEl:C,prevEl:H}),C=n(C),H=n(H);const p=(g,_)=>{g&&g.addEventListener("click",_==="next"?f:l),!e.enabled&&g&&g.classList.add(...m.lockClass.split(" "))};C.forEach(g=>p(g,"next")),H.forEach(g=>p(g,"prev"))}function d(){let{nextEl:m,prevEl:C}=e.navigation;m=n(m),C=n(C);const H=(p,g)=>{p.removeEventListener("click",g==="next"?f:l),p.classList.remove(...e.params.navigation.disabledClass.split(" "))};m.forEach(p=>H(p,"next")),C.forEach(p=>H(p,"prev"))}a("init",()=>{e.params.navigation.enabled===!1?v():(u(),o())}),a("toEdge fromEdge lock unlock",()=>{o()}),a("destroy",()=>{d()}),a("enable disable",()=>{let{nextEl:m,prevEl:C}=e.navigation;if(m=n(m),C=n(C),e.enabled){o();return}[...m,...C].filter(H=>!!H).forEach(H=>H.classList.add(e.params.navigation.lockClass))}),a("click",(m,C)=>{let{nextEl:H,prevEl:p}=e.navigation;H=n(H),p=n(p);const g=C.target;if(e.params.navigation.hideOnClick&&!p.includes(g)&&!H.includes(g)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===g||e.pagination.el.contains(g)))return;let _;H.length?_=H[0].classList.contains(e.params.navigation.hiddenClass):p.length&&(_=p[0].classList.contains(e.params.navigation.hiddenClass)),s(_===!0?"navigationShow":"navigationHide"),[...H,...p].filter(L=>!!L).forEach(L=>L.classList.toggle(e.params.navigation.hiddenClass))}});const h=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),o()},v=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(e.navigation,{enable:h,disable:v,update:o,init:u,destroy:d})}function ie(t){return t===void 0&&(t=""),`.${t.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function cn(t){let{swiper:e,extendParams:c,on:a,emit:s}=t;const n="swiper-pagination";c({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:p=>p,formatFractionTotal:p=>p,bulletClass:`${n}-bullet`,bulletActiveClass:`${n}-bullet-active`,modifierClass:`${n}-`,currentClass:`${n}-current`,totalClass:`${n}-total`,hiddenClass:`${n}-hidden`,progressbarFillClass:`${n}-progressbar-fill`,progressbarOppositeClass:`${n}-progressbar-opposite`,clickableClass:`${n}-clickable`,lockClass:`${n}-lock`,horizontalClass:`${n}-horizontal`,verticalClass:`${n}-vertical`,paginationDisabledClass:`${n}-disabled`}}),e.pagination={el:null,bullets:[]};let i,r=0;const o=p=>(Array.isArray(p)?p:[p]).filter(g=>!!g);function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function f(p,g){const{bulletActiveClass:_}=e.params.pagination;p&&(p=p[`${g==="prev"?"previous":"next"}ElementSibling`],p&&(p.classList.add(`${_}-${g}`),p=p[`${g==="prev"?"previous":"next"}ElementSibling`],p&&p.classList.add(`${_}-${g}-${g}`)))}function u(p){const g=p.target.closest(ie(e.params.pagination.bulletClass));if(!g)return;p.preventDefault();const _=bt(g)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===_)return;e.slideToLoop(_)}else e.slideTo(_)}function d(){const p=e.rtl,g=e.params.pagination;if(l())return;let _=e.pagination.el;_=o(_);let L,k;const $=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,N=e.params.loop?Math.ceil($/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(k=e.previousRealIndex||0,L=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(L=e.snapIndex,k=e.previousSnapIndex):(k=e.previousIndex||0,L=e.activeIndex||0),g.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const w=e.pagination.bullets;let y,O,A;if(g.dynamicBullets&&(i=ra(w[0],e.isHorizontal()?"width":"height",!0),_.forEach(x=>{x.style[e.isHorizontal()?"width":"height"]=`${i*(g.dynamicMainBullets+4)}px`}),g.dynamicMainBullets>1&&k!==void 0&&(r+=L-(k||0),r>g.dynamicMainBullets-1?r=g.dynamicMainBullets-1:r<0&&(r=0)),y=Math.max(L-r,0),O=y+(Math.min(w.length,g.dynamicMainBullets)-1),A=(O+y)/2),w.forEach(x=>{const R=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(D=>`${g.bulletActiveClass}${D}`)].map(D=>typeof D=="string"&&D.includes(" ")?D.split(" "):D).flat();x.classList.remove(...R)}),_.length>1)w.forEach(x=>{const R=bt(x);R===L?x.classList.add(...g.bulletActiveClass.split(" ")):e.isElement&&x.setAttribute("part","bullet"),g.dynamicBullets&&(R>=y&&R<=O&&x.classList.add(...`${g.bulletActiveClass}-main`.split(" ")),R===y&&f(x,"prev"),R===O&&f(x,"next"))});else{const x=w[L];if(x&&x.classList.add(...g.bulletActiveClass.split(" ")),e.isElement&&w.forEach((R,D)=>{R.setAttribute("part",D===L?"bullet-active":"bullet")}),g.dynamicBullets){const R=w[y],D=w[O];for(let U=y;U<=O;U+=1)w[U]&&w[U].classList.add(...`${g.bulletActiveClass}-main`.split(" "));f(R,"prev"),f(D,"next")}}if(g.dynamicBullets){const x=Math.min(w.length,g.dynamicMainBullets+4),R=(i*x-i)/2-A*i,D=p?"right":"left";w.forEach(U=>{U.style[e.isHorizontal()?D:"top"]=`${R}px`})}}_.forEach((w,y)=>{if(g.type==="fraction"&&(w.querySelectorAll(ie(g.currentClass)).forEach(O=>{O.textContent=g.formatFractionCurrent(L+1)}),w.querySelectorAll(ie(g.totalClass)).forEach(O=>{O.textContent=g.formatFractionTotal(N)})),g.type==="progressbar"){let O;g.progressbarOpposite?O=e.isHorizontal()?"vertical":"horizontal":O=e.isHorizontal()?"horizontal":"vertical";const A=(L+1)/N;let x=1,R=1;O==="horizontal"?x=A:R=A,w.querySelectorAll(ie(g.progressbarFillClass)).forEach(D=>{D.style.transform=`translate3d(0,0,0) scaleX(${x}) scaleY(${R})`,D.style.transitionDuration=`${e.params.speed}ms`})}g.type==="custom"&&g.renderCustom?(w.innerHTML=g.renderCustom(e,L+1,N),y===0&&s("paginationRender",w)):(y===0&&s("paginationRender",w),s("paginationUpdate",w)),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](g.lockClass)})}function h(){const p=e.params.pagination;if(l())return;const g=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let _=e.pagination.el;_=o(_);let L="";if(p.type==="bullets"){let k=e.params.loop?Math.ceil(g/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&k>g&&(k=g);for(let $=0;$<k;$+=1)p.renderBullet?L+=p.renderBullet.call(e,$,p.bulletClass):L+=`<${p.bulletElement} ${e.isElement?'part="bullet"':""} class="${p.bulletClass}"></${p.bulletElement}>`}p.type==="fraction"&&(p.renderFraction?L=p.renderFraction.call(e,p.currentClass,p.totalClass):L=`<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`),p.type==="progressbar"&&(p.renderProgressbar?L=p.renderProgressbar.call(e,p.progressbarFillClass):L=`<span class="${p.progressbarFillClass}"></span>`),e.pagination.bullets=[],_.forEach(k=>{p.type!=="custom"&&(k.innerHTML=L||""),p.type==="bullets"&&e.pagination.bullets.push(...k.querySelectorAll(ie(p.bulletClass)))}),p.type!=="custom"&&s("paginationRender",_[0])}function v(){e.params.pagination=en(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const p=e.params.pagination;if(!p.el)return;let g;typeof p.el=="string"&&e.isElement&&(g=e.el.querySelector(p.el)),!g&&typeof p.el=="string"&&(g=[...document.querySelectorAll(p.el)]),g||(g=p.el),!(!g||g.length===0)&&(e.params.uniqueNavElements&&typeof p.el=="string"&&Array.isArray(g)&&g.length>1&&(g=[...e.el.querySelectorAll(p.el)],g.length>1&&(g=g.filter(_=>W9(_,".swiper")[0]===e.el)[0])),Array.isArray(g)&&g.length===1&&(g=g[0]),Object.assign(e.pagination,{el:g}),g=o(g),g.forEach(_=>{p.type==="bullets"&&p.clickable&&_.classList.add(...(p.clickableClass||"").split(" ")),_.classList.add(p.modifierClass+p.type),_.classList.add(e.isHorizontal()?p.horizontalClass:p.verticalClass),p.type==="bullets"&&p.dynamicBullets&&(_.classList.add(`${p.modifierClass}${p.type}-dynamic`),r=0,p.dynamicMainBullets<1&&(p.dynamicMainBullets=1)),p.type==="progressbar"&&p.progressbarOpposite&&_.classList.add(p.progressbarOppositeClass),p.clickable&&_.addEventListener("click",u),e.enabled||_.classList.add(p.lockClass)}))}function m(){const p=e.params.pagination;if(l())return;let g=e.pagination.el;g&&(g=o(g),g.forEach(_=>{_.classList.remove(p.hiddenClass),_.classList.remove(p.modifierClass+p.type),_.classList.remove(e.isHorizontal()?p.horizontalClass:p.verticalClass),p.clickable&&(_.classList.remove(...(p.clickableClass||"").split(" ")),_.removeEventListener("click",u))})),e.pagination.bullets&&e.pagination.bullets.forEach(_=>_.classList.remove(...p.bulletActiveClass.split(" ")))}a("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const p=e.params.pagination;let{el:g}=e.pagination;g=o(g),g.forEach(_=>{_.classList.remove(p.horizontalClass,p.verticalClass),_.classList.add(e.isHorizontal()?p.horizontalClass:p.verticalClass)})}),a("init",()=>{e.params.pagination.enabled===!1?H():(v(),h(),d())}),a("activeIndexChange",()=>{typeof e.snapIndex>"u"&&d()}),a("snapIndexChange",()=>{d()}),a("snapGridLengthChange",()=>{h(),d()}),a("destroy",()=>{m()}),a("enable disable",()=>{let{el:p}=e.pagination;p&&(p=o(p),p.forEach(g=>g.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),a("lock unlock",()=>{d()}),a("click",(p,g)=>{const _=g.target,L=o(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&L&&L.length>0&&!_.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&_===e.navigation.nextEl||e.navigation.prevEl&&_===e.navigation.prevEl))return;const k=L[0].classList.contains(e.params.pagination.hiddenClass);s(k===!0?"paginationShow":"paginationHide"),L.forEach($=>$.classList.toggle(e.params.pagination.hiddenClass))}});const C=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:p}=e.pagination;p&&(p=o(p),p.forEach(g=>g.classList.remove(e.params.pagination.paginationDisabledClass))),v(),h(),d()},H=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:p}=e.pagination;p&&(p=o(p),p.forEach(g=>g.classList.add(e.params.pagination.paginationDisabledClass))),m()};Object.assign(e.pagination,{enable:C,disable:H,render:h,update:d,init:v,destroy:m})}function an(t){let{swiper:e,extendParams:c,on:a,emit:s}=t;const n=k1();let i=!1,r=null,o=null,l,f,u,d;c({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null};function h(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:A,rtlTranslate:x}=e,{dragEl:R,el:D}=A,U=e.params.scrollbar,l2=e.params.loop?e.progressLoop:e.progress;let G=f,f2=(u-f)*l2;x?(f2=-f2,f2>0?(G=f-f2,f2=0):-f2+f>u&&(G=u+f2)):f2<0?(G=f+f2,f2=0):f2+f>u&&(G=u-f2),e.isHorizontal()?(R.style.transform=`translate3d(${f2}px, 0, 0)`,R.style.width=`${G}px`):(R.style.transform=`translate3d(0px, ${f2}px, 0)`,R.style.height=`${G}px`),U.hide&&(clearTimeout(r),D.style.opacity=1,r=setTimeout(()=>{D.style.opacity=0,D.style.transitionDuration="400ms"},1e3))}function v(A){!e.params.scrollbar.el||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${A}ms`)}function m(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:A}=e,{dragEl:x,el:R}=A;x.style.width="",x.style.height="",u=e.isHorizontal()?R.offsetWidth:R.offsetHeight,d=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?f=u*d:f=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?x.style.width=`${f}px`:x.style.height=`${f}px`,d>=1?R.style.display="none":R.style.display="",e.params.scrollbar.hide&&(R.style.opacity=0),e.params.watchOverflow&&e.enabled&&A.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function C(A){return e.isHorizontal()?A.clientX:A.clientY}function H(A){const{scrollbar:x,rtlTranslate:R}=e,{el:D}=x;let U;U=(C(A)-lT(D)[e.isHorizontal()?"left":"top"]-(l!==null?l:f/2))/(u-f),U=Math.max(Math.min(U,1),0),R&&(U=1-U);const l2=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*U;e.updateProgress(l2),e.setTranslate(l2),e.updateActiveIndex(),e.updateSlidesClasses()}function p(A){const x=e.params.scrollbar,{scrollbar:R,wrapperEl:D}=e,{el:U,dragEl:l2}=R;i=!0,l=A.target===l2?C(A)-A.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,A.preventDefault(),A.stopPropagation(),D.style.transitionDuration="100ms",l2.style.transitionDuration="100ms",H(A),clearTimeout(o),U.style.transitionDuration="0ms",x.hide&&(U.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),s("scrollbarDragStart",A)}function g(A){const{scrollbar:x,wrapperEl:R}=e,{el:D,dragEl:U}=x;i&&(A.preventDefault?A.preventDefault():A.returnValue=!1,H(A),R.style.transitionDuration="0ms",D.style.transitionDuration="0ms",U.style.transitionDuration="0ms",s("scrollbarDragMove",A))}function _(A){const x=e.params.scrollbar,{scrollbar:R,wrapperEl:D}=e,{el:U}=R;i&&(i=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",D.style.transitionDuration=""),x.hide&&(clearTimeout(o),o=Vt(()=>{U.style.opacity=0,U.style.transitionDuration="400ms"},1e3)),s("scrollbarDragEnd",A),x.snapOnRelease&&e.slideToClosest())}function L(A){const{scrollbar:x,params:R}=e,D=x.el;if(!D)return;const U=D,l2=R.passiveListeners?{passive:!1,capture:!1}:!1,G=R.passiveListeners?{passive:!0,capture:!1}:!1;if(!U)return;const f2=A==="on"?"addEventListener":"removeEventListener";U[f2]("pointerdown",p,l2),n[f2]("pointermove",g,l2),n[f2]("pointerup",_,G)}function k(){!e.params.scrollbar.el||!e.scrollbar.el||L("on")}function $(){!e.params.scrollbar.el||!e.scrollbar.el||L("off")}function N(){const{scrollbar:A,el:x}=e;e.params.scrollbar=en(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const R=e.params.scrollbar;if(!R.el)return;let D;if(typeof R.el=="string"&&e.isElement&&(D=e.el.querySelector(R.el)),!D&&typeof R.el=="string"){if(D=n.querySelectorAll(R.el),!D.length)return}else D||(D=R.el);e.params.uniqueNavElements&&typeof R.el=="string"&&D.length>1&&x.querySelectorAll(R.el).length===1&&(D=x.querySelector(R.el)),D.length>0&&(D=D[0]),D.classList.add(e.isHorizontal()?R.horizontalClass:R.verticalClass);let U;D&&(U=D.querySelector(ie(e.params.scrollbar.dragClass)),U||(U=q4("div",e.params.scrollbar.dragClass),D.append(U))),Object.assign(A,{el:D,dragEl:U}),R.draggable&&k(),D&&D.classList[e.enabled?"remove":"add"](...O3(e.params.scrollbar.lockClass))}function w(){const A=e.params.scrollbar,x=e.scrollbar.el;x&&x.classList.remove(...O3(e.isHorizontal()?A.horizontalClass:A.verticalClass)),$()}a("init",()=>{e.params.scrollbar.enabled===!1?O():(N(),m(),h())}),a("update resize observerUpdate lock unlock",()=>{m()}),a("setTranslate",()=>{h()}),a("setTransition",(A,x)=>{v(x)}),a("enable disable",()=>{const{el:A}=e.scrollbar;A&&A.classList[e.enabled?"remove":"add"](...O3(e.params.scrollbar.lockClass))}),a("destroy",()=>{w()});const y=()=>{e.el.classList.remove(...O3(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.remove(...O3(e.params.scrollbar.scrollbarDisabledClass)),N(),m(),h()},O=()=>{e.el.classList.add(...O3(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.add(...O3(e.params.scrollbar.scrollbarDisabledClass)),w()};Object.assign(e.scrollbar,{enable:y,disable:O,updateSize:m,setTranslate:h,init:N,destroy:w})}function sn(t){let{swiper:e,extendParams:c,on:a,emit:s,params:n}=t;e.autoplay={running:!1,paused:!1,timeLeft:0},c({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let i,r,o=n&&n.autoplay?n.autoplay.delay:3e3,l=n&&n.autoplay?n.autoplay.delay:3e3,f,u=new Date().getTime(),d,h,v,m,C,H,p;function g(G){!e||e.destroyed||!e.wrapperEl||G.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",g),!p&&y())}const _=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&(l=f,d=!1);const G=e.autoplay.paused?f:u+l-new Date().getTime();e.autoplay.timeLeft=G,s("autoplayTimeLeft",G,G/o),r=requestAnimationFrame(()=>{_()})},L=()=>{let G;return e.virtual&&e.params.virtual.enabled?G=e.slides.filter(y2=>y2.classList.contains("swiper-slide-active"))[0]:G=e.slides[e.activeIndex],G?parseInt(G.getAttribute("data-swiper-autoplay"),10):void 0},k=G=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(r),_();let f2=typeof G>"u"?e.params.autoplay.delay:G;o=e.params.autoplay.delay,l=e.params.autoplay.delay;const y2=L();!Number.isNaN(y2)&&y2>0&&typeof G>"u"&&(f2=y2,o=y2,l=y2),f=f2;const W2=e.params.speed,U2=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(W2,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,W2,!0,!0),s("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(W2,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,W2,!0,!0),s("autoplay")),e.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{k()})))};return f2>0?(clearTimeout(i),i=setTimeout(()=>{U2()},f2)):requestAnimationFrame(()=>{U2()}),f2},$=()=>{u=new Date().getTime(),e.autoplay.running=!0,k(),s("autoplayStart")},N=()=>{e.autoplay.running=!1,clearTimeout(i),cancelAnimationFrame(r),s("autoplayStop")},w=(G,f2)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(i),G||(H=!0);const y2=()=>{s("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",g):y()};if(e.autoplay.paused=!0,f2){C&&(f=e.params.autoplay.delay),C=!1,y2();return}f=(f||e.params.autoplay.delay)-(new Date().getTime()-u),!(e.isEnd&&f<0&&!e.params.loop)&&(f<0&&(f=0),y2())},y=()=>{e.isEnd&&f<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(u=new Date().getTime(),H?(H=!1,k(f)):k(),e.autoplay.paused=!1,s("autoplayResume"))},O=()=>{if(e.destroyed||!e.autoplay.running)return;const G=k1();G.visibilityState==="hidden"&&(H=!0,w(!0)),G.visibilityState==="visible"&&y()},A=G=>{G.pointerType==="mouse"&&(H=!0,p=!0,!(e.animating||e.autoplay.paused)&&w(!0))},x=G=>{G.pointerType==="mouse"&&(p=!1,e.autoplay.paused&&y())},R=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",A),e.el.addEventListener("pointerleave",x))},D=()=>{e.el.removeEventListener("pointerenter",A),e.el.removeEventListener("pointerleave",x)},U=()=>{k1().addEventListener("visibilitychange",O)},l2=()=>{k1().removeEventListener("visibilitychange",O)};a("init",()=>{e.params.autoplay.enabled&&(R(),U(),$())}),a("destroy",()=>{D(),l2(),e.autoplay.running&&N()}),a("_freeModeStaticRelease",()=>{(v||H)&&y()}),a("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?N():w(!0,!0)}),a("beforeTransitionStart",(G,f2,y2)=>{e.destroyed||!e.autoplay.running||(y2||!e.params.autoplay.disableOnInteraction?w(!0,!0):N())}),a("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){N();return}h=!0,v=!1,H=!1,m=setTimeout(()=>{H=!0,v=!0,w(!0)},200)}}),a("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!h)){if(clearTimeout(m),clearTimeout(i),e.params.autoplay.disableOnInteraction){v=!1,h=!1;return}v&&e.params.cssMode&&y(),v=!1,h=!1}}),a("slideChange",()=>{e.destroyed||!e.autoplay.running||(C=!0)}),Object.assign(e.autoplay,{start:$,stop:N,pause:w,resume:y})}function NE(t){const{effect:e,swiper:c,on:a,setTranslate:s,setTransition:n,overwriteParams:i,perspective:r,recreateShadows:o,getEffectParams:l}=t;a("beforeInit",()=>{if(c.params.effect!==e)return;c.classNames.push(`${c.params.containerModifierClass}${e}`),r&&r()&&c.classNames.push(`${c.params.containerModifierClass}3d`);const u=i?i():{};Object.assign(c.params,u),Object.assign(c.originalParams,u)}),a("setTranslate",()=>{c.params.effect===e&&s()}),a("setTransition",(u,d)=>{c.params.effect===e&&n(d)}),a("transitionEnd",()=>{if(c.params.effect===e&&o){if(!l||!l().slideShadows)return;c.slides.forEach(u=>{u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(d=>d.remove())}),o()}});let f;a("virtualUpdate",()=>{c.params.effect===e&&(c.slides.length||(f=!0),requestAnimationFrame(()=>{f&&c.slides&&c.slides.length&&(s(),f=!1)}))})}function TE(t,e){const c=$9(e);return c!==e&&(c.style.backfaceVisibility="hidden",c.style["-webkit-backface-visibility"]="hidden"),c}function EE(t){let{swiper:e,duration:c,transformElements:a,allSlides:s}=t;const{activeIndex:n}=e,i=r=>r.parentElement?r.parentElement:e.slides.filter(l=>l.shadowRoot&&l.shadowRoot===r.parentNode)[0];if(e.params.virtualTranslate&&c!==0){let r=!1,o;s?o=a:o=a.filter(l=>{const f=l.classList.contains("swiper-slide-transform")?i(l):l;return e.getSlideIndex(f)===n}),o.forEach(l=>{dT(l,()=>{if(r||!e||e.destroyed)return;r=!0,e.animating=!1;const f=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(f)})})}}function nn(t){let{swiper:e,extendParams:c,on:a}=t;c({fadeEffect:{crossFade:!1}}),NE({effect:"fade",swiper:e,on:a,setTranslate:()=>{const{slides:i}=e,r=e.params.fadeEffect;for(let o=0;o<i.length;o+=1){const l=e.slides[o];let u=-l.swiperSlideOffset;e.params.virtualTranslate||(u-=e.translate);let d=0;e.isHorizontal()||(d=u,u=0);const h=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(l.progress),0):1+Math.min(Math.max(l.progress,-1),0),v=TE(r,l);v.style.opacity=h,v.style.transform=`translate3d(${u}px, ${d}px, 0px)`}},setTransition:i=>{const r=e.slides.map(o=>$9(o));r.forEach(o=>{o.style.transitionDuration=`${i}ms`}),EE({swiper:e,duration:i,transformElements:r,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}const B3=""+new URL("shop1-rixsYcRI.png",import.meta.url).href,M4=""+new URL("shop2-rAIGWahc.jpg",import.meta.url).href,V4=""+new URL("shop3-Pqo9itNl.jpg",import.meta.url).href,kE=""+new URL("banner1-ISLZS2Mc.jpg",import.meta.url).href,AE=""+new URL("banner2-mp907Kc0.jpg",import.meta.url).href,PE=""+new URL("banner3-u2xzmQOv.png",import.meta.url).href,Z9=""+new URL("p001-7AxGYEV1.png",import.meta.url).href,ef=""+new URL("p002-LFprbvll.png",import.meta.url).href,tf=""+new URL("p009-_5dnmno2.png",import.meta.url).href,wt=""+new URL("p013-_dcQPP3F.png",import.meta.url).href,A4=""+new URL("p014-yykBkoAB.png",import.meta.url).href,X3=""+new URL("p015-EDktiCeq.png",import.meta.url).href,A5=""+new URL("set001-w1Xbq58e.png",import.meta.url).href,P5=""+new URL("set002-r-JGk1mb.png",import.meta.url).href,I5=""+new URL("set003-29mEQ4pU.png",import.meta.url).href,R5=""+new URL("set004-fGwtOZIg.png",import.meta.url).href,I1=t=>(h1("data-v-acf4bade"),t=t(),p1(),t),IE={class:"content"},RE={class:"container"},OE={class:"homeVueWapper"},DE={class:"swiper-container-zero"},FE={class:"newsWrapper"},BE={class:"news"},UE={class:"smalltitle"},$E={class:"maintitle"},WE={class:"subtitle"},qE=["src"],GE={class:"swiper-container-first"},jE=I1(()=>z("div",{class:"famousArticle"},[z("p",null,"臉部調理系列"),z("h2",null,"針對多重肌膚問題的高效滋養"),z("p",null," 專為成熟肌膚精心研發的保養配方，注入有益的強效維生素和抗氧化成分，讓肌膚更加健康有光澤。 ")],-1)),KE=["onClick"],YE=["src"],XE={class:"productitle"},QE={class:"subtitle"},JE={class:"perfumeWapper"},ZE=I1(()=>z("div",{class:"perfumeImage"},[z("img",{src:XN,alt:""})],-1)),ek={class:"perfumeInformation"},tk=I1(()=>z("div",{class:"title"},"一滴精華，雙倍享受",-1)),ck=I1(()=>z("div",{class:"subtitle"}," 突破傳統框架的迷人香水，除了提供現有的 50mL 版本外，還新增了 100mL 的大容量版本。這些大容量版本僅在官網上販售，適合長期使用 的忠實愛好者。 ",-1)),ak={class:"surpriseGiftWapper"},sk={class:"giftInformation"},nk=I1(()=>z("div",{class:"title"},"驚喜禮物",-1)),ik=I1(()=>z("div",{class:"subtitle"}," 慶祝特別的時刻，卻不知道該送什麼，禮物指南中有各種適合不同人的產品，輕鬆解決你的煩惱。 ",-1)),rk=I1(()=>z("div",{class:"giftImage"},[z("img",{src:QN,alt:""})],-1)),ok={class:"videoServiceWapper"},lk=I1(()=>z("div",{class:"videoServiceImage"},[z("img",{src:JN,alt:""})],-1)),fk={class:"videoServiceInformation"},uk=I1(()=>z("div",{class:"title"},"專屬於您的居家諮詢",-1)),dk=I1(()=>z("div",{class:"subtitle"}," 為了協助您挑選最適合的產品，邀請您與專業顧問進行「線上視訊諮詢」。 ",-1)),hk={class:"swiper-container-second"},pk=["onClick"],mk=["src"],vk={class:"settitle"},gk={class:"setsubtitle"},Hk={class:"shop"},zk={class:"loctioninfo"},Ck=I1(()=>z("div",{class:"shoptitle"},"尋找店鋪",-1)),Mk=I1(()=>z("div",{class:"subtitle"}," 位於各城市的精華地段中，交通便利方便抵達！就讓我們的美容顧問，為您提供量身訂製的建議吧，期待與您相見的那天到來！ ",-1)),Vk={class:"swiper-container-third"},_k={class:"shopimage"},Lk=["src"],bk=J1('<div class="wisdom-wrapper" data-v-acf4bade><h2 data-v-acf4bade>&#39;You are very much ON TIME, and in your TIME ZONE which God set up for you.&#39;</h2><p data-v-acf4bade>&#39;&#39;在上帝為你安排的時區裡，一切都是準時的。&#39;&#39;</p></div><div class="eco-wrapper" data-v-acf4bade><div class="textwrapper" data-v-acf4bade><div class="section" data-v-acf4bade><div class="ecoTitle" data-v-acf4bade>無動物實驗</div><div class="ecoSubtitle" data-v-acf4bade> 使用專業儀器對所有產品進行全面測試，同時秉持著對動物生命的愛護和尊重，堅持不進行動物實驗 </div></div><div class="section" data-v-acf4bade><div class="ecoTitle" data-v-acf4bade>全產品環保包裝</div><div class="ecoSubtitle" data-v-acf4bade> 皆使用可回收或可生物降解的天然材料作為包裝，以減少對地球的塑料污染。同時，我們提供消費者空瓶回收的回購優惠價，鼓勵大家參與環保行動。 </div></div><div class="section" data-v-acf4bade><div class="ecoTitle" data-v-acf4bade>降低碳足跡</div><div class="ecoSubtitle" data-v-acf4bade> 減少生產和運輸過程中的能源消耗，採用節能技術，降低80%碳足跡。 </div></div></div></div>',2),wk={__name:"HomeView",setup(t){function e(C){}function c(C){}function a(C){}function s(C){}function n(){window.scrollTo({behavior:"smooth",top:0})}const i={clickable:!0,renderBullet:function(){return'<div class="nav-item" > </item>'}},r=[tn,cn,an,sn,Zs,nn],o=d2({0:{slidesPerView:1,spaceBetween:10},430:{slidesPerView:1,spaceBetween:10},1024:{slidesPerView:3,spaceBetween:10},1440:{slidesPerView:3,spaceBetween:10}}),l=d2([{smalltitle:"家居香氛",maintitle:"為您介紹 Alles Gute 香氛系列",subtitle:"探索三款啟程心靈旅程的香氛────森林、朝露以及夜幕，每三十分鐘銷售5,000份。",src:kE},{smalltitle:"高效配方",maintitle:"肌膚調理凝霜",subtitle:"這款蘊含牛奶般獨特質地、富含維他命 B 和 C 的輕度保濕配方，能有效呵護、柔軟、平衡肌膚。",src:AE},{smalltitle:"陶冶心情",maintitle:"2024年全新力作",subtitle:"香水系列分為以下幾種香調：花香、清新、木質、馥郁──也可能同時擁有兩種香調特色。",src:PE}]);let f=d2([{title:"甜橙香檸身體凝乳",subtitle:"柑橘、木質、草本芳香",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:A4},{capacity:500,price:1400,imageSrc:X3}],id:1},{title:"芫荽籽身體凝乳",subtitle:"溫暖木質辛香",size:"容量",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:A4},{capacity:500,price:1400,imageSrc:X3}],price:"NT$600起",id:2},{title:"玫瑰身體凝乳",subtitle:"玫瑰花、豆蔻、黑胡椒",size:"容量",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:A4},{capacity:500,price:1400,imageSrc:X3}],id:3},{title:"橙香萬用油",subtitle:"柑橘、清爽幽香",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:tf},{capacity:500,price:1400,imageSrc:X3}],id:4},{title:"晨沐薰衣草面霜",subtitle:"薰衣草、朝露、草本芳香",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:Z9},{capacity:500,price:1400,imageSrc:wt}],id:5},{title:"香草森林面霜",subtitle:"香草、木質、草本芳香",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:ef},{capacity:500,price:1400,imageSrc:wt}],id:6}]),u=d2([{title:"春意盎然",subtitle:"清潔露、廁後點滴、室內噴霧",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:A5},{capacity:500,price:1400,imageSrc:A5}],id:1},{title:"夏日戀曲",subtitle:"潔膚露、去角質露、身體乳霜",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:P5},{capacity:500,price:1400,imageSrc:P5}],id:2},{title:"秋頌曲調",subtitle:"護手霜、潔膚露、護唇膏",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:I5},{capacity:500,price:1400,imageSrc:I5}],id:3},{title:"冬季禮遇",subtitle:"護手霜、清潔露、乾洗手",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:R5},{capacity:500,price:1400,imageSrc:R5}],id:4}]);const d=d2([{src:B3},{src:M4},{src:V4}]),h=P1();function v(C){h.push({name:"productDetailView",params:{id:C.id}})}function m(){n()}return m(),(C,H)=>{const p=Y1("icon");return Q(),s2("div",IE,[z("div",RE,[z("div",OE,[z("div",DE,[t2(X(oe),{slidesPerView:1,spaceBetween:30,loop:!0,centeredSlides:!0,navigation:!1,autoplay:{delay:2500,disableOnInteraction:!0},modules:r,effect:C.fade,onSwiper:e},{default:R2(()=>[(Q(!0),s2(A2,null,u1(l.value,(g,_)=>(Q(),m3(X(q3),{key:_},{default:R2(()=>[z("div",FE,[z("div",BE,[z("div",UE,n2(g.smalltitle),1),z("div",$E,n2(g.maintitle),1),z("div",WE,n2(g.subtitle),1),t2(ne,{title:"立即探索",path:"productList",class:"perfume-button"})]),z("img",{src:g.src},null,8,qE)])]),_:2},1024))),128))]),_:1},8,["effect"])]),z("div",GE,[t2(X(oe),{scrollbar:{hide:!1,draggable:!0,dragSize:600},slidesPerView:4,spaceBetween:0,breakpoints:o.value,loop:!1,centeredSlides:!1,pagination:i,navigation:{hiddenClass:"swiper-button-hidden"},modules:r,onSwiper:c},{default:R2(()=>[t2(X(q3),null,{default:R2(()=>[jE]),_:1}),(Q(!0),s2(A2,null,u1(X(f),g=>(Q(),m3(X(q3),{key:g},{default:R2(()=>[z("div",{class:"famousProductsWrapper",onClick:_=>v(g)},[z("img",{src:g.sizeList[0].imageSrc},null,8,YE),z("div",XE,n2(g.title),1),z("div",QE,n2(g.subtitle),1)],8,KE)]),_:2},1024))),128))]),_:1},8,["breakpoints"])]),z("div",JE,[ZE,z("div",ek,[tk,ck,t2(ne,{title:"立即探索",path:"productList",class:"perfume-button"})])]),z("div",ak,[z("div",sk,[nk,ik,t2(ne,{title:"立即挑選",path:"combineList",class:"surpriseGift-button"})]),rk]),z("div",ok,[lk,z("div",fk,[uk,dk,t2(ne,{title:"立即諮詢",path:"contact",class:"video-button"})])]),z("div",hk,[t2(X(oe),{scrollbar:{hide:!1,draggable:!0,dragsize:600,mousewheel:!0},slidesPerView:3,spaceBetween:10,breakpoints:o.value,loop:!0,centeredSlides:!1,pagination:i,autoplay:{delay:3e3,disableOnInteraction:!1},navigation:!0,modules:r,onSwiper:a},{default:R2(()=>[(Q(!0),s2(A2,null,u1(X(u),g=>(Q(),m3(X(q3),{key:g},{default:R2(()=>[z("div",{class:"SetWrapper",onClick:_=>v(g)},[z("img",{src:g.sizeList[0].imageSrc},null,8,mk),z("div",vk,n2(g.title),1),z("div",gk,n2(g.subtitle),1)],8,pk)]),_:2},1024))),128))]),_:1},8,["breakpoints"])]),z("div",Hk,[z("div",zk,[Ck,Mk,t2(ne,{title:"立即出發",path:"shop",class:"shop-button"})]),z("div",Vk,[t2(X(oe),{slidesPerView:1,loop:!0,centeredSlides:!0,pagination:i,autoplay:{delay:4e3,disableOnInteraction:!0},navigation:!1,modules:r,onSwiper:s},{default:R2(()=>[(Q(!0),s2(A2,null,u1(d.value,(g,_)=>(Q(),m3(X(q3),{key:_},{default:R2(()=>[z("div",_k,[z("img",{src:g.src},null,8,Lk)])]),_:2},1024))),128))]),_:1})])]),bk])]),t2(p,{class:"goTop",icon:"arrow-up",onClick:n})])}}},yk=K2(wk,[["__scopeId","data-v-acf4bade"]]),Sk="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='87.74'%20height='18.33'%20viewBox='0%200%2087.74%2018.33'%3e%3ctitle%3eshop-map%3c/title%3e%3cg%20id='圖層_2'%20data-name='圖層%202'%3e%3cg%20id='design'%3e%3cg%3e%3cpath%20d='M5.8,12.27A2.55,2.55,0,0,1,4.68,13a4.51,4.51,0,0,1-1.6.27,3.2,3.2,0,0,1-1.62-.41A2.7,2.7,0,0,1,.39,11.69,4.19,4.19,0,0,1,0,9.89V9.41A4.39,4.39,0,0,1,.36,7.56a2.73,2.73,0,0,1,1-1.19A3,3,0,0,1,3,6a3,3,0,0,1,2,.6A2.63,2.63,0,0,1,5.8,8.32H4.38a1.37,1.37,0,0,0-.44-.89A1.37,1.37,0,0,0,3,7.14a1.32,1.32,0,0,0-1.14.56,2.94,2.94,0,0,0-.39,1.67v.46a2.85,2.85,0,0,0,.42,1.69,1.47,1.47,0,0,0,1.25.57,1.66,1.66,0,0,0,1.18-.35V10.51H3V9.43H5.8Z'%20fill='%23231815'/%3e%3cpath%20d='M14,9.77a4.38,4.38,0,0,1-.37,1.84,2.86,2.86,0,0,1-1.07,1.23,3.12,3.12,0,0,1-3.16,0,2.81,2.81,0,0,1-1.07-1.21,4.2,4.2,0,0,1-.39-1.82V9.46A4.34,4.34,0,0,1,8.3,7.61,2.78,2.78,0,0,1,9.37,6.39,2.9,2.9,0,0,1,11,6a2.9,2.9,0,0,1,1.58.43A2.78,2.78,0,0,1,13.6,7.61,4.34,4.34,0,0,1,14,9.46Zm-1.49-.32a3,3,0,0,0-.4-1.7A1.3,1.3,0,0,0,11,7.17a1.3,1.3,0,0,0-1.14.58,3,3,0,0,0-.4,1.68v.34a3,3,0,0,0,.4,1.69,1.29,1.29,0,0,0,1.15.6,1.29,1.29,0,0,0,1.13-.57,3,3,0,0,0,.4-1.69Z'%20fill='%23231815'/%3e%3cpath%20d='M22,9.77a4.23,4.23,0,0,1-.37,1.84,2.84,2.84,0,0,1-1.06,1.23,3,3,0,0,1-1.59.43,3,3,0,0,1-1.57-.43,2.83,2.83,0,0,1-1.08-1.21A4.2,4.2,0,0,1,16,9.81V9.46a4.19,4.19,0,0,1,.38-1.85,2.76,2.76,0,0,1,1.06-1.22,3.12,3.12,0,0,1,3.16,0,2.78,2.78,0,0,1,1.07,1.22A4.19,4.19,0,0,1,22,9.46Zm-1.48-.32a3.07,3.07,0,0,0-.4-1.7A1.33,1.33,0,0,0,19,7.17a1.27,1.27,0,0,0-1.13.58,2.89,2.89,0,0,0-.41,1.68v.34a3,3,0,0,0,.4,1.69,1.3,1.3,0,0,0,1.15.6,1.32,1.32,0,0,0,1.14-.57,3.12,3.12,0,0,0,.4-1.69Z'%20fill='%23231815'/%3e%3cpath%20d='M29.87,12.27a2.55,2.55,0,0,1-1.12.73,4.51,4.51,0,0,1-1.6.27,3.2,3.2,0,0,1-1.62-.41,2.7,2.7,0,0,1-1.07-1.17,4.19,4.19,0,0,1-.39-1.8V9.41a4.39,4.39,0,0,1,.36-1.85,2.73,2.73,0,0,1,1-1.19A3.06,3.06,0,0,1,27.05,6a3,3,0,0,1,2,.6,2.63,2.63,0,0,1,.84,1.76H28.45a1.25,1.25,0,0,0-1.36-1.18A1.29,1.29,0,0,0,26,7.7a2.86,2.86,0,0,0-.4,1.67v.46A2.85,2.85,0,0,0,26,11.52a1.47,1.47,0,0,0,1.25.57,1.66,1.66,0,0,0,1.18-.35V10.51H27.07V9.43h2.8Z'%20fill='%23231815'/%3e%3cpath%20d='M33.67,12h3.11v1.18H32.21V6.06h1.46Z'%20fill='%23231815'/%3e%3cpath%20d='M43.05,10.09H40.24V12h3.3v1.18H38.77V6.06h4.76V7.24H40.24v1.7h2.81Z'%20fill='%23231815'/%3e%3cpath%20d='M51.1,6.06l1.83,5.15,1.81-5.15h1.93v7.11H55.2V11.22l.14-3.35-1.91,5.3h-1l-1.91-5.3.14,3.35v1.95H49.19V6.06Z'%20fill='%23231815'/%3e%3cpath%20d='M63.2,11.7H60.63l-.49,1.47H58.58l2.65-7.11h1.36l2.66,7.11H63.69ZM61,10.52H62.8l-.89-2.67Z'%20fill='%23231815'/%3e%3cpath%20d='M68.53,10.66v2.51H67.06V6.06h2.78a3.32,3.32,0,0,1,1.41.29,2.21,2.21,0,0,1,.93.83,2.31,2.31,0,0,1,.33,1.23,2,2,0,0,1-.72,1.65,3,3,0,0,1-2,.6Zm0-1.18h1.31a1.29,1.29,0,0,0,.88-.28A1,1,0,0,0,71,8.42a1.11,1.11,0,0,0-1.16-1.18H68.53Z'%20fill='%23231815'/%3e%3c/g%3e%3cpolygon%20points='83.99%2018.33%2083.3%2018.05%2086.93%209.17%2083.3%200.28%2083.99%200%2087.74%209.17%2083.99%2018.33'%20fill='%233e3a39'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",fa=""+new URL("shop4-LdqzFcpl.png",import.meta.url).href,cf=t=>(h1("data-v-9e02bb71"),t=t(),p1(),t),xk={class:"content"},Nk={class:"navbar"},Tk={class:"city"},Ek={class:"shopWrapper"},kk={class:"store-pic"},Ak=["src"],Pk={class:"info"},Ik={class:"title"},Rk={class:"name"},Ok={class:"icon"},Dk=["href"],Fk=cf(()=>z("img",{src:Sk,alt:""},null,-1)),Bk=[Fk],Uk=cf(()=>z("div",{class:"divider"},null,-1)),$k={class:"subtitle"},Wk={class:"openhour"},qk={class:"open"},Gk={class:"hour"},jk={class:"phonenumber"},Kk={class:"phone"},Yk={class:"number"},Xk={class:"location"},Qk={class:"location"},Jk={class:"address"},Zk=["href"],eA={__name:"ShopView",setup(t){let e=d2("Open."),c=d2("Tel."),a=d2("Add."),s=d2([{title:"永康旗艦店",hour:"10:00AM-17:00PM",number:"02-23222200",address:"台北市大安區永康街31巷6號",googleUrl:"https://maps.app.goo.gl/CJYqdnSoCshtykQF8",src:B3,id:1},{title:"台北林口店",hour:"10:00AM-18:00PM",number:"02-66375888",address:"新北市林口區文化三路一段356號1F",googleUrl:"https://maps.app.goo.gl/DtuTYJRT9SCe2MH67",src:M4,id:2},{title:"華泰名品城店",hour:"10:00AM-21:00PM",number:"03-2738666",address:"桃園市中壢區春德路189號",googleUrl:"https://maps.app.goo.gl/3qtDRzqr8AnVh7ks5",src:V4,id:3},{title:"台中新光店",hour:"10:00AM-21:00PM",number:"04-22510792",address:"台中市西屯區臺灣大道三段301號B2",googleUrl:"https://maps.app.goo.gl/DzTmbFNm8LXuefh97",src:fa,id:4},{title:"台中勤美店",hour:"10:00AM-21:00PM",number:"04-23295911",address:"台中市西區公益路68號B1",googleUrl:"https://maps.app.goo.gl/uHN7i4z9mav2UPnDA",src:B3,id:5},{title:"三井LaLa店",hour:"10:00AM-21:00PM",number:"04-22138281",address:"台中市東區進德路600號北館4樓",googleUrl:"https://maps.app.goo.gl/zwo14MK4ULxiwUEs5",src:M4,id:6},{title:"台南新天地店",hour:"10:00AM-21:00PM",number:"06-3030705",address:"台南市中西區西門路一段658號4F",googleUrl:"https://maps.app.goo.gl/5cHrDnZQ6fGEe6nJA",src:V4,id:7},{title:"漢神巨蛋店",hour:"10:00AM-21:00PM",number:"07-3550705",address:"高雄市左營區博愛二路777號B1",googleUrl:"https://maps.app.goo.gl/GQZPNRqbL7qhZQ8V8",src:fa,id:8},{title:"高雄駁二店",hour:"10:00AM-21:00PM",number:"07-9631200",address:"高雄市鹽埕區大勇路3號(駁二藝術特區C4倉庫)",googleUrl:"https://maps.app.goo.gl/16uvzTFgAweKM26N9",src:B3,id:9}]),n=d2([{title:"台北永康旗艦店",hour:"10:00AM-17:00PM",number:"02-23222200",address:"台北市大安區永康街31巷6號",googleUrl:"https://maps.app.goo.gl/CJYqdnSoCshtykQF8",src:B3,id:1},{title:"台北林口店",hour:"10:00AM-18:00PM",number:"02-66375888",address:"新北市林口區文化三路一段356號1F",googleUrl:"https://maps.app.goo.gl/DtuTYJRT9SCe2MH67",src:M4,id:2},{title:"華泰名品城店",hour:"10:00AM-21:00PM",number:"03-2738666",address:"桃園市中壢區春德路189號",googleUrl:"https://maps.app.goo.gl/3qtDRzqr8AnVh7ks5",src:V4,id:3}]),i=d2([{title:"台中新光店",hour:"10:00AM-21:00PM",number:"04-22510792",address:"台中市西屯區臺灣大道三段301號B2",googleUrl:"https://maps.app.goo.gl/DzTmbFNm8LXuefh97",src:B3,id:1},{title:"台中勤美店",hour:"10:00AM-21:00PM",number:"04-23295911",address:"台中市西區公益路68號B1",googleUrl:"https://maps.app.goo.gl/uHN7i4z9mav2UPnDA",src:M4,id:2},{title:"台中三井LaLa店",hour:"10:00AM-21:00PM",number:"04-22138281",address:"台中市東區進德路600號北館4樓",googleUrl:"https://maps.app.goo.gl/zwo14MK4ULxiwUEs5",src:V4,id:3}]),r=d2([{title:"台南新天地店",hour:"10:00AM-21:00PM",number:"06-3030705",address:"台南市中西區西門路一段658號4F",googleUrl:"https://maps.app.goo.gl/5cHrDnZQ6fGEe6nJA",src:B3,id:1},{title:"漢神巨蛋店",hour:"10:00AM-21:00PM",number:"07-3550705",address:"高雄市左營區博愛二路777號B1",googleUrl:"https://maps.app.goo.gl/GQZPNRqbL7qhZQ8V8",src:M4,id:2},{title:"高雄駁二店",hour:"10:00AM-21:00PM",number:"07-9631200",address:"高雄市鹽埕區大勇路3號(駁二藝術特區C4倉庫)",googleUrl:"https://maps.app.goo.gl/16uvzTFgAweKM26N9",src:V4,id:3}]),o=d2(s.value);function l(u){console.log(u,"type"),u==="northList"?o.value=n.value:u==="westList"?o.value=i.value:u==="southList"?o.value=r.value:o.value=s.value}function f(){let u=window.localStorage.getItem("shopList"),d=JSON.parse(u);console.log(d,"shopList")}return f(),window.scrollTo(0,0),window.scrollTo({top:0,behavior:"smooth"}),(u,d)=>(Q(),s2("div",xk,[z("div",Nk,[z("div",Tk,[z("p",{onClick:d[0]||(d[0]=h=>l("all"))},"全部店鋪"),z("p",{onClick:d[1]||(d[1]=h=>l("northList"))},"北部"),z("p",{onClick:d[2]||(d[2]=h=>l("westList"))},"中部"),z("p",{onClick:d[3]||(d[3]=h=>l("southList"))},"南部")]),z("div",Ek,[(Q(!0),s2(A2,null,u1(X(o),h=>(Q(),s2("div",{class:"section",key:h.id},[z("div",kk,[z("img",{src:h.src},null,8,Ak)]),z("div",Pk,[z("div",Ik,[z("div",Rk,n2(h.title),1),z("div",Ok,[z("a",{href:h.googleUrl,target:"_blank"},Bk,8,Dk)])]),Uk,z("div",$k,[z("div",Wk,[z("div",qk,n2(X(e)),1),z("div",Gk,n2(h.hour),1)]),z("div",jk,[z("div",Kk,n2(X(c)),1),z("div",Yk,n2(h.number),1)]),z("div",Xk,[z("div",Qk,n2(X(a)),1),z("div",Jk,[z("a",{href:h.googleUrl,target:"_blank"},n2(h.address),9,Zk)])])])])]))),128))])])]))}},tA=K2(eA,[["__scopeId","data-v-9e02bb71"]]),cA=""+new URL("about2-xqwRdcCF.png",import.meta.url).href,aA=""+new URL("about3-SRzLv8-z.jpg",import.meta.url).href,sA=""+new URL("about4-mV3p-5bf.jpg",import.meta.url).href,hc=t=>(h1("data-v-751900df"),t=t(),p1(),t),nA={class:"about"},iA={class:"container"},rA=J1('<div class="storyWrapper" data-v-751900df><div class="icon" data-v-751900df><img src="'+Xs+'" data-v-751900df></div><div class="storyArea" data-v-751900df><div class="title" data-v-751900df>故事的起點</div><div class="description" data-v-751900df> 「Alles Gute!」源自德語，是德國人經常使用的日常招呼語，有祝福別人一切順利、圓滿的意思。因此，我們以這句招呼語作為品牌名稱，就是希望能夠提供您如同摯友般的祝福，得到身心療癒，讓保養的旅程中盡情享受當下幸福的時刻。 </div></div></div><div class="productsIdeaWrapper" data-v-751900df><div class="ideaImage" data-v-751900df><img src="'+cA+'" data-v-751900df></div><div class="productsIdea" data-v-751900df><div class="title" data-v-751900df>擁有鑽研產品細節的熱忱</div><div class="description" data-v-751900df> 致力開發一系列專業的護膚、頭髮和身體護理產品，秉持科學驗證，加入了頂級的植物萃取和抗氧化成分，所有配方都通過嚴格檢驗，只為提供安全、安心的產品。 </div></div></div><div class="designWrapper" data-v-751900df><div class="design" data-v-751900df><div class="title" data-v-751900df>好設計造就好生活</div><div class="description" data-v-751900df> 堅持自行研發產品，不斷構思新點子、開發新配方，以最新技術和成熟的科研方案，並根據客戶的實際需求進行研發，投入時間深入研究，以確保推出的配方具有最高品質和最有效果。 </div></div><div class="designImage" data-v-751900df><img src="'+aA+'" alt="" data-v-751900df></div></div>',3),oA={class:"shopWrapper"},lA={class:"shop"},fA=hc(()=>z("div",{class:"title"},"交通便利的門市位置",-1)),uA=hc(()=>z("div",{class:"description"}," 無論是開車、搭乘大眾運輸還是步行前來，我們的店鋪都是您的理想選擇。靠近多個公共交通站點，步行數分鐘即可抵達，方便快捷。此外，我們也提供寬敞的停車場，讓您可以輕鬆停車後盡情享受購物樂趣，期待與您相見！ ",-1)),dA=hc(()=>z("div",{class:"shopImage"},[z("img",{src:sA,alt:""})],-1)),hA={class:"swiper-photo"},pA={class:"shopWrapper"},mA=["src"],vA=hc(()=>z("div",{class:"wisdom"},[z("div",{class:"title"},"‘If the path be beautiful, let us not ask where it leads.’ "),z("div",{class:"subtitle"},"Anatole France")],-1)),gA={__name:"AboutView",setup(t){function e(s){}const c=[tn,cn,an,sn,Zs,nn],a=d2([{src:B3},{src:M4},{src:V4},{src:fa}]);return(s,n)=>(Q(),s2("div",nA,[z("div",iA,[rA,z("div",oA,[z("div",lA,[fA,uA,t2(ne,{title:"查看所有店舖",path:"shop",class:"shop-button"})]),dA]),z("div",hA,[t2(X(oe),{scrollbar:{hide:!1,draggable:!0},slidesPerView:1,spaceBetween:0,loop:!0,centeredSlides:!0,pagination:!1,navigation:!0,modules:c,autoplay:{delay:2e3,disableOnInteraction:!0},onSwiper:e},{default:R2(()=>[(Q(!0),s2(A2,null,u1(a.value,(i,r)=>(Q(),m3(X(q3),{key:r},{default:R2(()=>[z("div",pA,[z("img",{src:i.src},null,8,mA)])]),_:2},1024))),128))]),_:1})]),vA])]))}},HA=K2(gA,[["__scopeId","data-v-751900df"]]),zA={class:"product-card"},CA=["src"],MA={class:"productInfo"},VA={class:"productitle"},_A={class:"subtitle"},LA={class:"sizenprice"},bA={class:"size-wrapper"},wA={class:"size-list-wrapper"},yA=["id","checked","onChange"],SA=["for"],xA={class:"price"},NA={__name:"ProductCard",props:["inputProduct"],setup(t){const e=t;e.inputProduct;const c=P1();function a(u,d){u.selectedSizeIndex=d}const s=n0();function n(u){s.setCurrentProduct(u),c.push({name:"productDetailView",params:{id:u.id}})}const i=d4();function r(u){i.addProduct(u)}const o=Ys();function l(u){o.addProduct(u)}function f(){alert("已加入願望清單")}return(u,d)=>{const h=Y1("icon");return Q(),s2("div",zA,[t2(h,{class:"addwish",onClick:d[0]||(d[0]=v=>{l(e.inputProduct),f()}),icon:"heart"}),z("div",{class:"productPic",onClick:d[1]||(d[1]=v=>n(e.inputProduct))},[z("img",{src:e.inputProduct.sizeList[e.inputProduct.selectedSizeIndex].imageSrc,alt:""},null,8,CA)]),z("div",MA,[z("div",VA,n2(e.inputProduct.title),1),z("div",_A,n2(e.inputProduct.subtitle),1),z("div",LA,[z("div",bA,[z("div",wA,[(Q(!0),s2(A2,null,u1(e.inputProduct.sizeList,(v,m)=>(Q(),s2("div",{class:"size-option",key:m},[z("input",{type:"radio",id:v.id,checked:e.inputProduct.selectedSizeIndex===m,onChange:C=>a(e.inputProduct,m)},null,40,yA),z("label",{for:v.id},n2(v.capacity)+" ml",9,SA)]))),128))])]),z("div",xA,"NT$ "+n2(e.inputProduct.sizeList[e.inputProduct.selectedSizeIndex].price),1)]),z("div",{class:"cart",onClick:d[2]||(d[2]=v=>r(e.inputProduct))},"加入購物車")])])}}},TA=K2(NA,[["__scopeId","data-v-e189808d"]]),EA=t=>(h1("data-v-ea7af9e0"),t=t(),p1(),t),kA={class:"container"},AA={class:"navbar"},PA={class:"productsCategories"},IA={class:"productWapper"},RA=EA(()=>z("div",{class:"introduce"},[z("div",{class:"maintitle"},"重新體驗肌膚潔淨及柔滑的感受"),z("div",{class:"description"}," 所有產品皆含有滋潤功效的草本植物成分，讓肌膚在任何季節都能保持潔淨柔滑。 ")],-1)),OA={class:"loading-wrapper"},DA={__name:"ProductListView",setup(t){const e=n0();let a=j1(e).filterList;function s(i){e.setFilterList(i)}function n(){window.scrollTo({behavior:"smooth",top:0})}return n(),(i,r)=>{const o=Y1("icon");return Q(),s2("div",kA,[G1(z("div",AA,[z("div",PA,[z("p",{onClick:r[0]||(r[0]=l=>s("all"))},"全部商品"),z("p",{onClick:r[1]||(r[1]=l=>s("shampoo"))},"髮品"),z("p",{onClick:r[2]||(r[2]=l=>s("body"))},"身體乳"),z("p",{onClick:r[3]||(r[3]=l=>s("combine"))},"送禮組合")])],512),[[M3,X(a)&&X(a).length>0]]),G1(z("div",IA,[RA,(Q(!0),s2(A2,null,u1(X(a),l=>(Q(),m3(TA,{inputProduct:l,key:l.id},null,8,["inputProduct"]))),128))],512),[[M3,X(a)&&X(a).length>0]]),G1(z("div",OA,[t2(o,{class:"loading-icon",icon:"circle-notch"})],512),[[M3,!X(a)||X(a).length<=0]])])}}},FA=K2(DA,[["__scopeId","data-v-ea7af9e0"]]),BA=""+new URL("contactus_picture-6hXdmfMO.jpg",import.meta.url).href,UA={class:"container"},$A=J1('<div class="contact_wrapper" data-v-2c21499e><div class="icon" data-v-2c21499e><img src="'+Xs+'" data-v-2c21499e></div><div class="contact" data-v-2c21499e><div class="contactus" data-v-2c21499e>聯絡我們</div><p data-v-2c21499e> 你可以在家裡舒服地預約視訊諮詢服務。我們會根據你的需求量身打造服務，可能包括送禮建議、肌膚保養推薦，或是挑選個人或家居香氛。我們的顧問會示範產品，和你分享使用方法，還有提供專屬的個人建議 </p><p data-v-2c21499e> 預約視訊諮詢完全免費！每次約定都有30分鐘的時間，讓我們能夠好好討論您想討論的肌膚問題，歡迎利用電腦、平板或手機上開展線上視訊諮詢。記得要確保你的網路連接穩定喔！ </p></div></div><div class="contactWay_wrapper" data-v-2c21499e><div class="video" data-v-2c21499e><div class="title" data-v-2c21499e>視訊諮詢</div><div class="subtitle" data-v-2c21499e> 我們想透過網路諮詢，給你帶來跟實體店一樣的感受，期待以全新的方式與您見面！ </div><a href="https://www.example.com" data-v-2c21499e>立即開始</a></div><div class="mail" data-v-2c21499e><div class="title" data-v-2c21499e>寄信給我們</div><div class="subtitle" data-v-2c21499e>在選購或保養上有任何問題，都可以透過郵件跟我們聊聊唷．</div><a href="mailto:info@example.com" data-v-2c21499e>立即傳送</a></div><div class="phone" data-v-2c21499e><div class="title" data-v-2c21499e>諮詢專線</div><div class="subtitle" data-v-2c21499e>歡迎撥打諮詢專線，將由專人為您服務。</div><a href="tel:+1234567890" data-v-2c21499e>立即撥打</a></div></div><div class="imgWrapper" data-v-2c21499e><img src="'+BA+'" alt="" data-v-2c21499e></div>',3),WA=[$A],qA={__name:"ContactUsView",setup(t){function e(){window.scrollTo({top:0,behavior:"smooth"})}return e(),(c,a)=>(Q(),s2("div",UA,WA))}},GA=K2(qA,[["__scopeId","data-v-2c21499e"]]),jA="data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.57385%2021.2502V10.3413H20.2241V21.2502H5.57385Z'%20stroke='%23333333'%20stroke-width='1.49961'/%3e%3cpath%20d='M3.92102%2010.3326V6.62276L21.8768%206.62276V10.3326H3.92102Z'%20stroke='%23333333'%20stroke-width='1.49961'/%3e%3cpath%20d='M12.8989%206.61918V21.269M12.8989%206.61918L9.18213%202.50269M12.8989%206.61918L16.3531%202.51051'%20stroke='%23333333'%20stroke-width='1.49961'/%3e%3c/svg%3e",KA="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='25'%20viewBox='0%200%2024%2025'%20fill='none'%3e%3cpath%20d='M20%204.95068H4L4%2016.5592H12.5L17%2020.5592V16.5592H20V4.95068Z'%20stroke='%23333333'%20stroke-width='1.5'/%3e%3c/svg%3e",YA="data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.8562%2022C10.584%2022%208.68975%2021.2194%207.17343%2019.6582C5.65709%2018.097%204.89893%2016.1538%204.89893%2013.8286C4.89893%2012.1823%205.55777%2010.3779%206.87546%208.41531C8.19316%206.45271%2010.1874%204.31428%2012.8581%202C15.5289%204.31428%2017.5231%206.45271%2018.8408%208.41531C20.1585%2010.3779%2020.8173%2012.1823%2020.8173%2013.8286C20.8173%2016.1538%2020.0585%2018.097%2018.5409%2019.6582C17.0234%2021.2194%2015.1284%2022%2012.8562%2022ZM12.8581%2020.4082C14.6976%2020.4082%2016.2187%2019.7847%2017.4214%2018.5378C18.6241%2017.2908%2019.2255%2015.7211%2019.2255%2013.8286C19.2255%2012.5374%2018.6905%2011.0782%2017.6204%209.45099C16.5503%207.82378%2014.9629%206.04622%2012.8581%204.11832C10.7533%206.04622%209.16592%207.82378%208.09585%209.45099C7.02578%2011.0782%206.49074%2012.5374%206.49074%2013.8286C6.49074%2015.7211%207.09211%2017.2908%208.29483%2018.5378C9.49756%2019.7847%2011.0187%2020.4082%2012.8581%2020.4082Z'%20fill='%23333333'/%3e%3c/svg%3e",XA=""+new URL("001-11oj_6dI.jpg",import.meta.url).href,R1=t=>(h1("data-v-7d05ad1c"),t=t(),p1(),t),QA={key:0,class:"container"},JA={class:"productWrapper"},ZA=R1(()=>z("div",{class:"productPic"},[z("img",{src:A4,alt:""})],-1)),eP={class:"productInfo"},tP={class:"name"},cP=R1(()=>z("div",{class:"directions"}," 這款性質溫和的低泡沫潔膚凝露含有多種淨化肌膚的植物萃取物，可清潔肌膚，散發充滿活力的柑橘芳香。 ",-1)),aP={class:"sizenprice"},sP={class:"size-wrapper"},nP={class:"size-list-wrapper"},iP=["id","checked","onChange"],rP=["for"],oP={class:"price"},lP=R1(()=>z("div",{class:"divider"},null,-1)),fP={class:"introduce"},uP=R1(()=>z("div",{class:"title"},"膚質感受",-1)),dP=R1(()=>z("div",{class:"info"},"清潔、清爽",-1)),hP=R1(()=>z("div",{class:"useDivider"},null,-1)),pP=R1(()=>z("div",{class:"title"},"香氛",-1)),mP={class:"info"},vP=R1(()=>z("div",{class:"useDivider"},null,-1)),gP=R1(()=>z("div",{class:"title"},"成份",-1)),HP=R1(()=>z("div",{class:"info"},"苦橙、檸檬皮、葡萄柚皮",-1)),zP=R1(()=>z("div",{class:"useDivider"},null,-1)),CP=J1('<div class="serviceWrapper" data-v-7d05ad1c><div class="section" data-v-7d05ad1c><img src="'+jA+'" alt="" data-v-7d05ad1c><div class="mainTitle" data-v-7d05ad1c>免費禮品包裝</div><p data-v-7d05ad1c>為您提供禮品包裝、品牌專屬棉袋以及個人化禮物小卡服務，是我們的榮幸。</p></div><div class="section" data-v-7d05ad1c><img src="'+KA+'" alt="" data-v-7d05ad1c><div class="mainTitle" data-v-7d05ad1c>諮詢美容顧問</div><p data-v-7d05ad1c>我們受過專業訓練的顧問，非常樂意在線上為您提供個人化的產品建議。</p></div><div class="section" data-v-7d05ad1c><img src="'+YA+'" alt="" data-v-7d05ad1c><div class="mainTitle" data-v-7d05ad1c>下單送試用包</div><p data-v-7d05ad1c>我們很榮幸為所有訂單提供試用包體驗組。</p></div></div><div class="UsageWrapper" data-v-7d05ad1c><div class="productPic" data-v-7d05ad1c><img src="'+XA+'" alt="" data-v-7d05ad1c></div><div class="way" data-v-7d05ad1c><div class="howToUse" data-v-7d05ad1c>使用方式</div><p data-v-7d05ad1c>倒在手中或海綿上。按摩全身濕潤的肌膚，然後徹底洗淨。</p><div class="useDivider" data-v-7d05ad1c></div><div class="title" data-v-7d05ad1c>用量</div><div class="info" data-v-7d05ad1c>倒在手掌上約一個十元硬幣大小</div><div class="divider" data-v-7d05ad1c></div><div class="title" data-v-7d05ad1c>質地</div><div class="info" data-v-7d05ad1c>低泡沫透明凝露</div></div></div>',2),MP={class:"swiper-bottom"},VP=R1(()=>z("div",{class:"recommendArticle"},[z("p",null,"推薦搭配使用")],-1)),_P=["onClick"],LP=["src"],bP={class:"productitle"},wP={class:"subtitle"},yP={key:1,class:"loading-wrapper"},SP={__name:"ProductDetailView",setup(t){const c=AM().params.id,a=n0(),n=j1(a).productList,i=D2(()=>n.value.find(m=>String(m.id)===String(c)));P1();function r(m){}const o=[tn,cn,an,sn,Zs,nn];function l(m){router.push({name:"productDetailView",params:{id:m.id}})}function f(m){i.value.selectedSizeIndex=m}const u=d4();function d(m){u.addProduct(m)}function h(){window.scrollTo({top:0,behavior:"smooth"})}let v=d2([{title:"甜橙香檸身體凝乳",subtitle:"柑橘、木質、草本芳香",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:A4},{capacity:500,price:1400,imageSrc:X3}],id:1},{title:"芫荽籽身體凝乳",subtitle:"溫暖木質辛香",size:"容量",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:A4},{capacity:500,price:1400,imageSrc:X3}],price:"NT$600起",id:2},{title:"玫瑰身體凝乳",subtitle:"玫瑰花、豆蔻、黑胡椒",size:"容量",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:A4},{capacity:500,price:1400,imageSrc:X3}],id:3},{title:"橙香萬用油",subtitle:"柑橘、清爽幽香",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:tf},{capacity:500,price:1400,imageSrc:X3}],id:4},{title:"晨沐薰衣草面霜",subtitle:"薰衣草、朝露、草本芳香",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:Z9},{capacity:500,price:1400,imageSrc:wt}],id:5},{title:"香草森林面霜",subtitle:"香草、木質、草本芳香",selectedSizeIndex:0,sizeList:[{capacity:100,price:500,imageSrc:ef},{capacity:500,price:1400,imageSrc:wt}],id:6}]);return h(),(m,C)=>{const H=Y1("icon");return X(n)&&X(n).length>0?(Q(),s2("div",QA,[z("div",JA,[ZA,z("div",eP,[z("div",tP,n2(i.value.title),1),cP,z("div",aP,[z("div",sP,[z("div",nP,[(Q(!0),s2(A2,null,u1(i.value.sizeList,(p,g)=>(Q(),s2("div",{class:"size-option",key:g},[z("input",{type:"radio",id:p.id,checked:i.value.selectedSizeIndex===g,onChange:_=>f(g)},null,40,iP),z("label",{for:p.id},n2(p.capacity)+" ml",9,rP)]))),128))])]),z("div",oP,"NT$ "+n2(i.value.sizeList[i.value.selectedSizeIndex].price),1)]),z("div",{class:"addCart",onClick:C[0]||(C[0]=p=>d(i.value))},"加入購物車"),lP,z("div",fP,[uP,dP,hP,pP,z("div",mP,n2(i.value.subtitle),1),vP,gP,HP,zP])])]),CP,z("div",MP,[t2(X(oe),{scrollbar:{hide:!1,draggable:!0,dragSize:500},slidesPerView:4,spaceBetween:0,loop:!1,centeredSlides:!1,modules:o,onSwiper:r},{default:R2(()=>[t2(X(q3),null,{default:R2(()=>[VP]),_:1}),(Q(!0),s2(A2,null,u1(X(v),p=>(Q(),m3(X(q3),{key:p},{default:R2(()=>[z("div",{class:"recommendProductsWrapper",onClick:g=>l(p)},[z("img",{src:p.sizeList[0].imageSrc},null,8,LP),z("div",bP,n2(p.title),1),z("div",wP,n2(p.subtitle),1)],8,_P)]),_:2},1024))),128))]),_:1})])])):(Q(),s2("div",yP,[t2(H,{class:"loading-icon",icon:"circle-notch"})]))}}},xP=K2(SP,[["__scopeId","data-v-7d05ad1c"]]),rn=t=>(h1("data-v-1f29e034"),t=t(),p1(),t),NP={class:"cartshop"},TP={class:"content"},EP=J1('<div class="item" data-v-1f29e034><div class="title" data-v-1f29e034>商品名稱</div><div class="title" data-v-1f29e034>容量</div><div class="title" data-v-1f29e034>單價</div><div class="title" data-v-1f29e034>數量</div><div class="title" data-v-1f29e034>小計</div></div><div class="divider" data-v-1f29e034></div>',2),kP={class:"product-wrapper"},AP={class:"name"},PP={class:"capacity"},IP={class:"unitPrice"},RP={class:"quantity"},OP=["onClick"],DP=["onClick"],FP={class:"delete"},BP=["onClick"],UP={class:"subtotal"},$P=rn(()=>z("div",{class:"divider"},null,-1)),WP={class:"countWrapper"},qP={class:"totalWrapper"},GP=rn(()=>z("div",{class:"total"},"總計",-1)),jP={class:"totalPrice"},KP={class:"buttonWrapper"},YP=rn(()=>z("button",null,"繼續購物",-1)),XP=[YP],QP={class:"checkout"},JP={__name:"CartshopView",setup(t){const e=h4(),c=r3(),a=d4(),n=j1(a).cartList;let i=d2(0);const r=P1();function o(){r.push("/productList")}function l(){c.showLoginPopup()}function f(){r.push("/OrderPageView")}function u(){i.value=0;for(let m of n.value){let C=m.sizeList[m.selectedSizeIndex].price*m.quantity;i.value=i.value+C}}u();function d(m){m.quantity>1&&(m.quantity--,i.value=0,u())}function h(m){m.quantity=m.quantity+1,i.value=0,u()}function v(m){a.deleteProduct(m),u()}return(m,C)=>(Q(),s2("div",NP,[z("div",TP,[EP,z("div",kP,[(Q(!0),s2(A2,null,u1(X(n),(H,p)=>(Q(),s2("div",{class:"item_detail",key:p},[z("div",AP,n2(H.title),1),z("div",PP,n2(H.sizeList[H.selectedSizeIndex].capacity)+" ml",1),z("div",IP,n2(H.sizeList[H.selectedSizeIndex].price),1),z("div",RP,[z("button",{onClick:g=>d(H)},"-",8,OP),b1(" "+n2(H.quantity)+" ",1),z("button",{onClick:g=>h(H)},"+",8,DP),z("div",FP,[z("button",{onClick:g=>v(H)},"刪除",8,BP)])]),z("div",UP,n2(H.sizeList[H.selectedSizeIndex].price*H.quantity),1)]))),128))]),$P,z("div",WP,[z("div",qP,[GP,z("div",jP,n2(X(i)),1)]),z("div",KP,[z("div",{class:"shopping",onClick:o},XP),z("div",QP,[X(e).isLogin?(Q(),s2("button",{key:0,onClick:f},"結帳")):(Q(),s2("button",{key:1,onClick:l},"請先登入會員"))])])])])]))}},ZP=K2(JP,[["__scopeId","data-v-1f29e034"]]),J4=t=>(h1("data-v-a84cd39a"),t=t(),p1(),t),eI={class:"container"},tI={class:"oderList"},cI=J4(()=>z("div",{class:"mainTitle"},[z("h2",null,"查看本次訂單")],-1)),aI={class:"orderWrapper"},sI=J1('<div class="divider" data-v-a84cd39a></div><div class="listWrapper" data-v-a84cd39a><div class="item" data-v-a84cd39a>商品名稱</div><div class="item" data-v-a84cd39a>容量</div><div class="item" data-v-a84cd39a>數量</div><div class="item" data-v-a84cd39a>單價</div><div class="item" data-v-a84cd39a>小計</div></div><div class="dividerLiter" data-v-a84cd39a></div>',3),nI={class:"detail"},iI={class:"detail"},rI={class:"detail"},oI={class:"detail"},lI={class:"detail"},fI=J4(()=>z("div",{class:"dividerLiter"},null,-1)),uI={class:"totalPrice"},dI=J4(()=>z("div",{class:"title"},"總計金額:NT$",-1)),hI={class:"number"},pI=J4(()=>z("div",{class:"divider"},null,-1)),mI=J4(()=>z("div",{class:"mainTitle"},[z("h2",null,"填寫訂單資訊")],-1)),vI=J1('<div class="infoWrapper" data-v-a84cd39a><div class="divider" data-v-a84cd39a></div><div class="inputWrapper" data-v-a84cd39a><div class="title" data-v-a84cd39a>收件人姓名：</div><input type="text" name="username" placeholder="請輸入全名" id="myInput" data-v-a84cd39a></div><div class="inputWrapper" data-v-a84cd39a><div class="title" data-v-a84cd39a>連絡電話：</div><input type="tel" name="phone" placeholder="0912-000-000" id="myInput" data-v-a84cd39a></div><div class="inputWrapper" data-v-a84cd39a><div class="title" data-v-a84cd39a>收件地址：</div><input type="text" name="address" placeholder="請加入郵遞區號" id="myInput" data-v-a84cd39a></div></div>',1),gI=J4(()=>z("div",{class:"reset"},[z("button",{type:"reset"},"清除資料")],-1)),HI=J4(()=>z("div",{class:"divider"},null,-1)),zI={__name:"OrderPageView",setup(t){const e=d4(),a=j1(e).cartList;let s=d2(0);const n=P1();function i(){e.submit(),n.push("/FinalpagesView")}function r(){for(let l of a.value){let f=l.sizeList[l.selectedSizeIndex].price*l.quantity;s.value=s.value+f}}r();function o(){window.scrollTo({top:0,behavior:"smooth"})}return o(),(l,f)=>(Q(),s2("div",eI,[z("div",tI,[cI,z("div",aI,[sI,(Q(!0),s2(A2,null,u1(X(a),(u,d)=>(Q(),s2("div",{class:"listWrapper",key:d},[z("div",nI,n2(u.title),1),z("div",iI,n2(u.sizeList[u.selectedSizeIndex].capacity)+" ml",1),z("div",rI,n2(u.quantity),1),z("div",oI,n2(u.sizeList[u.selectedSizeIndex].price),1),z("div",lI,n2(u.sizeList[u.selectedSizeIndex].price*u.quantity),1)]))),128)),fI,z("div",uI,[dI,z("div",hI,n2(X(s)),1)]),pI]),mI,z("form",null,[z("label",{for:"infoForm"},[vI,z("div",{class:"buttonWrapper"},[gI,z("div",{class:"submit"},[z("button",{class:"submitBtn",onClick:i},"確定送出")])]),HI])])])]))}},CI=K2(zI,[["__scopeId","data-v-a84cd39a"]]),MI=""+new URL("complete-K7uzOgMP.png",import.meta.url).href,VI={class:"container"},_I={class:"thanksWrapper"},LI=J1('<div class="textWrapper" data-v-a7d2a7dd><div class="icon" data-v-a7d2a7dd><img src="'+MI+'" data-v-a7d2a7dd></div><div class="mainTitle" data-v-a7d2a7dd>感謝您的購買！</div><div class="subTitle" data-v-a7d2a7dd>已收到您的訂單，將於三個工作天完成包裹寄送，再次感謝您的訂購，預祝您！有個美好的一天！</div></div>',1),bI={class:"buttonWrapper"},wI={class:"back"},yI={class:"check"},SI={__name:"FinalpagesView",setup(t){P1();function e(){window.scrollTo({top:0,behavior:"smooth"})}return e(),(c,a)=>{const s=Y1("RouterLink");return Q(),s2("div",VI,[z("div",_I,[LI,z("div",bI,[z("div",wI,[z("button",null,[t2(s,{to:"/"},{default:R2(()=>[b1("返回首頁")]),_:1})])]),z("div",yI,[z("button",null,[t2(s,{to:"/member"},{default:R2(()=>[b1("查看本次訂單")]),_:1})])])])])])}}},xI=K2(SI,[["__scopeId","data-v-a7d2a7dd"]]),af=t=>(h1("data-v-943101f2"),t=t(),p1(),t),NI={class:"member"},TI={class:"order"},EI={class:"order-detail"},kI=af(()=>z("div",{class:"mainTitle"},[z("h2",null,"本次訂單明細")],-1)),AI={class:"orderWrapper"},PI=J1('<div class="divider" data-v-943101f2></div><div class="listWrapper" data-v-943101f2><div class="item" data-v-943101f2>商品名稱</div><div class="item" data-v-943101f2>容量</div><div class="item" data-v-943101f2>數量</div><div class="item" data-v-943101f2>單價</div><div class="item" data-v-943101f2>小計</div></div><div class="dividerLiter" data-v-943101f2></div>',3),II={class:"detail"},RI={class:"detail"},OI={class:"detail"},DI={class:"detail"},FI={class:"detail"},BI=af(()=>z("div",{class:"dividerLiter"},null,-1)),UI={__name:"MemberView",setup(t){h4(),r3();const e=d4(),a=j1(e).cartList,s=F9(),n=j1(s);s.getOrder();const i=n.order;let r=d2(0);P1();function o(){r.value=0;for(let f of a.value){let u=f.sizeList[f.selectedSizeIndex].price*f.quantity;r.value=r.value+u}}o();function l(){window.scrollTo({top:0,behavior:"smooth"})}return l(),(f,u)=>(Q(),s2("div",NI,[z("div",TI,[z("div",EI,[kI,z("div",AI,[PI,(Q(!0),s2(A2,null,u1(X(i),(d,h)=>(Q(),s2("div",{class:"listWrapper",key:h},[z("div",II,n2(d.title),1),z("div",RI,n2(d.sizeList[d.selectedSizeIndex].capacity)+" ml",1),z("div",OI,n2(d.quantity),1),z("div",DI,n2(d.sizeList[d.selectedSizeIndex].price),1),z("div",FI,n2(d.sizeList[d.selectedSizeIndex].price*d.quantity),1)]))),128)),BI])])])]))}},$I=K2(UI,[["__scopeId","data-v-943101f2"]]),on=t=>(h1("data-v-073e72e0"),t=t(),p1(),t),WI={class:"wishWrapper"},qI={class:"content"},GI=on(()=>z("div",{class:"divider"},null,-1)),jI={class:"product-wrapper"},KI={class:"icon-wrapper"},YI={class:"productPic"},XI=["src"],QI={class:"name"},JI={class:"capacity"},ZI={class:"unitPrice"},eR={class:"remind-text"},tR=on(()=>z("div",{class:"divider"},null,-1)),cR={class:"countWrapper"},aR={class:"buttonWrapper"},sR=on(()=>z("button",null,"繼續購物",-1)),nR=[sR],iR={class:"checkout"},rR={__name:"wishView",setup(t){const e=h4(),c=r3(),a=d4(),s=Ys(),i=j1(s).wishList;let r=d2(0);const o=P1();function l(){o.push("/productList")}function f(){c.showLoginPopup()}function u(){o.push("/OrderPageView")}function d(){alert("刪除商品")}function h(){alert("已加入購物車")}function v(L){a.addProduct(L)}let m=d2(0);function C(){let L=0;for(let k of i.value)L+=k.quantity;m.value=Math.max(0,L)}C();function H(L){s.deleteProduct(L),C()}function p(){r.value=0;for(let L of i.value){let k=L.sizeList[L.selectedSizeIndex].price*L.quantity;r.value=r.value+k}}p();const g=n0();function _(L){g.setCurrentProduct(L),o.push({name:"productDetailView",params:{id:L.id}})}return(L,k)=>{const $=Y1("icon");return Q(),s2("div",WI,[z("div",qI,[G1(z("div",{class:"title"},"您的願望清單共有 "+n2(X(m))+" 個商品",513),[[M3,X(i)&&X(i).length>0]]),GI,G1(z("div",jI,[(Q(!0),s2(A2,null,u1(X(i),(N,w)=>(Q(),s2("div",{class:"item_detail",key:w},[z("div",KI,[t2($,{class:"icon",onClick:y=>{H(N),d()},icon:"trash-can"},null,8,["onClick"]),t2($,{class:"icon",onClick:y=>_(N),icon:"magnifying-glass-plus"},null,8,["onClick"]),t2($,{class:"icon",onClick:y=>{h(),v(N)},icon:"cart-shopping"},null,8,["onClick"])]),z("div",YI,[z("img",{src:N.sizeList[N.selectedSizeIndex].imageSrc,alt:""},null,8,XI)]),z("div",QI,n2(N.title),1),z("div",JI,"容量 "+n2(N.sizeList[N.selectedSizeIndex].capacity)+" ml",1),z("div",ZI," 售價 NT$ "+n2(N.sizeList[N.selectedSizeIndex].price),1)]))),128))],512),[[M3,X(i)&&X(i).length>0]]),G1(z("div",eR,"尚未收藏商品",512),[[M3,!X(i)||X(i).length<=0]]),tR,z("div",cR,[z("div",aR,[z("div",{class:"shopping",onClick:l},nR),z("div",iR,[X(e).isLogin?(Q(),s2("button",{key:0,onClick:u},"立即結帳")):(Q(),s2("button",{key:1,onClick:f},"立即結帳 (請先登入會員)"))])])])])])}}},oR=K2(rR,[["__scopeId","data-v-073e72e0"]]),lR=EM({history:YC(),routes:[{path:"/:pathMatch(.*)",redirect:{name:"home"}},{path:"/",redirect:{name:"home"}},{path:"/home",name:"home",component:yk},{path:"/shop",name:"shop",component:tA},{path:"/about",name:"about",component:HA},{path:"/productList",name:"productList",component:FA},{path:"/contact",name:"contact",component:GA},{path:"/productDetailView/:id",name:"productDetailView",component:xP},{path:"/cartshopView",name:"cartshopView",component:ZP},{path:"/OrderPageView",name:"OrderPageView",component:CI},{path:"/FinalpagesView",name:"FinalpagesView",component:xI},{path:"/member",name:"member",component:$I},{path:"/wish",name:"wish",component:oR}]});function O5(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),c.push.apply(c,a)}return c}function K(t){for(var e=1;e<arguments.length;e++){var c=arguments[e]!=null?arguments[e]:{};e%2?O5(Object(c),!0).forEach(function(a){j2(t,a,c[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):O5(Object(c)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(c,a))})}return t}function yt(t){"@babel/helpers - typeof";return yt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},yt(t)}function fR(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function D5(t,e){for(var c=0;c<e.length;c++){var a=e[c];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function uR(t,e,c){return e&&D5(t.prototype,e),c&&D5(t,c),Object.defineProperty(t,"prototype",{writable:!1}),t}function j2(t,e,c){return e in t?Object.defineProperty(t,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[e]=c,t}function ln(t,e){return hR(t)||mR(t,e)||sf(t,e)||gR()}function i0(t){return dR(t)||pR(t)||sf(t)||vR()}function dR(t){if(Array.isArray(t))return ua(t)}function hR(t){if(Array.isArray(t))return t}function pR(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function mR(t,e){var c=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(c!=null){var a=[],s=!0,n=!1,i,r;try{for(c=c.call(t);!(s=(i=c.next()).done)&&(a.push(i.value),!(e&&a.length===e));s=!0);}catch(o){n=!0,r=o}finally{try{!s&&c.return!=null&&c.return()}finally{if(n)throw r}}return a}}function sf(t,e){if(t){if(typeof t=="string")return ua(t,e);var c=Object.prototype.toString.call(t).slice(8,-1);if(c==="Object"&&t.constructor&&(c=t.constructor.name),c==="Map"||c==="Set")return Array.from(t);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return ua(t,e)}}function ua(t,e){(e==null||e>t.length)&&(e=t.length);for(var c=0,a=new Array(e);c<e;c++)a[c]=t[c];return a}function vR(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gR(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var F5=function(){},fn={},nf={},rf=null,of={mark:F5,measure:F5};try{typeof window<"u"&&(fn=window),typeof document<"u"&&(nf=document),typeof MutationObserver<"u"&&(rf=MutationObserver),typeof performance<"u"&&(of=performance)}catch{}var HR=fn.navigator||{},B5=HR.userAgent,U5=B5===void 0?"":B5,i4=fn,P2=nf,$5=rf,w0=of;i4.document;var E3=!!P2.documentElement&&!!P2.head&&typeof P2.addEventListener=="function"&&typeof P2.createElement=="function",lf=~U5.indexOf("MSIE")||~U5.indexOf("Trident/"),y0,S0,x0,N0,T0,w3="___FONT_AWESOME___",da=16,ff="fa",uf="svg-inline--fa",j4="data-fa-i2svg",ha="data-fa-pseudo-element",zR="data-fa-pseudo-element-pending",un="data-prefix",dn="data-icon",W5="fontawesome-i2svg",CR="async",MR=["HTML","HEAD","STYLE","SCRIPT"],df=function(){try{return!0}catch{return!1}}(),k2="classic",O2="sharp",hn=[k2,O2];function r0(t){return new Proxy(t,{get:function(c,a){return a in c?c[a]:c[k2]}})}var B6=r0((y0={},j2(y0,k2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),j2(y0,O2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),y0)),U6=r0((S0={},j2(S0,k2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),j2(S0,O2,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),S0)),$6=r0((x0={},j2(x0,k2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),j2(x0,O2,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),x0)),VR=r0((N0={},j2(N0,k2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),j2(N0,O2,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),N0)),_R=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,hf="fa-layers-text",LR=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,bR=r0((T0={},j2(T0,k2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),j2(T0,O2,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),T0)),pf=[1,2,3,4,5,6,7,8,9,10],wR=pf.concat([11,12,13,14,15,16,17,18,19,20]),yR=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],w4={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},W6=new Set;Object.keys(U6[k2]).map(W6.add.bind(W6));Object.keys(U6[O2]).map(W6.add.bind(W6));var SR=[].concat(hn,i0(W6),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",w4.GROUP,w4.SWAP_OPACITY,w4.PRIMARY,w4.SECONDARY]).concat(pf.map(function(t){return"".concat(t,"x")})).concat(wR.map(function(t){return"w-".concat(t)})),C6=i4.FontAwesomeConfig||{};function xR(t){var e=P2.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function NR(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(P2&&typeof P2.querySelector=="function"){var TR=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];TR.forEach(function(t){var e=ln(t,2),c=e[0],a=e[1],s=NR(xR(c));s!=null&&(C6[a]=s)})}var mf={styleDefault:"solid",familyDefault:"classic",cssPrefix:ff,replacementClass:uf,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};C6.familyPrefix&&(C6.cssPrefix=C6.familyPrefix);var Ae=K(K({},mf),C6);Ae.autoReplaceSvg||(Ae.observeMutations=!1);var Z={};Object.keys(mf).forEach(function(t){Object.defineProperty(Z,t,{enumerable:!0,set:function(c){Ae[t]=c,M6.forEach(function(a){return a(Z)})},get:function(){return Ae[t]}})});Object.defineProperty(Z,"familyPrefix",{enumerable:!0,set:function(e){Ae.cssPrefix=e,M6.forEach(function(c){return c(Z)})},get:function(){return Ae.cssPrefix}});i4.FontAwesomeConfig=Z;var M6=[];function ER(t){return M6.push(t),function(){M6.splice(M6.indexOf(t),1)}}var I3=da,a3={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function kR(t){if(!(!t||!E3)){var e=P2.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var c=P2.head.childNodes,a=null,s=c.length-1;s>-1;s--){var n=c[s],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=n)}return P2.head.insertBefore(e,a),t}}var AR="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function q6(){for(var t=12,e="";t-- >0;)e+=AR[Math.random()*62|0];return e}function je(t){for(var e=[],c=(t||[]).length>>>0;c--;)e[c]=t[c];return e}function pn(t){return t.classList?je(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function vf(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function PR(t){return Object.keys(t||{}).reduce(function(e,c){return e+"".concat(c,'="').concat(vf(t[c]),'" ')},"").trim()}function pc(t){return Object.keys(t||{}).reduce(function(e,c){return e+"".concat(c,": ").concat(t[c].trim(),";")},"")}function mn(t){return t.size!==a3.size||t.x!==a3.x||t.y!==a3.y||t.rotate!==a3.rotate||t.flipX||t.flipY}function IR(t){var e=t.transform,c=t.containerWidth,a=t.iconWidth,s={transform:"translate(".concat(c/2," 256)")},n="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),r="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(n," ").concat(i," ").concat(r)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:s,inner:o,path:l}}function RR(t){var e=t.transform,c=t.width,a=c===void 0?da:c,s=t.height,n=s===void 0?da:s,i=t.startCentered,r=i===void 0?!1:i,o="";return r&&lf?o+="translate(".concat(e.x/I3-a/2,"em, ").concat(e.y/I3-n/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/I3,"em), calc(-50% + ").concat(e.y/I3,"em)) "):o+="translate(".concat(e.x/I3,"em, ").concat(e.y/I3,"em) "),o+="scale(".concat(e.size/I3*(e.flipX?-1:1),", ").concat(e.size/I3*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var OR=`:root, :host {
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
}`;function gf(){var t=ff,e=uf,c=Z.cssPrefix,a=Z.replacementClass,s=OR;if(c!==t||a!==e){var n=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),r=new RegExp("\\.".concat(e),"g");s=s.replace(n,".".concat(c,"-")).replace(i,"--".concat(c,"-")).replace(r,".".concat(a))}return s}var q5=!1;function d8(){Z.autoAddCss&&!q5&&(kR(gf()),q5=!0)}var DR={mixout:function(){return{dom:{css:gf,insertCss:d8}}},hooks:function(){return{beforeDOMElementCreation:function(){d8()},beforeI2svg:function(){d8()}}}},y3=i4||{};y3[w3]||(y3[w3]={});y3[w3].styles||(y3[w3].styles={});y3[w3].hooks||(y3[w3].hooks={});y3[w3].shims||(y3[w3].shims=[]);var W1=y3[w3],Hf=[],FR=function t(){P2.removeEventListener("DOMContentLoaded",t),St=1,Hf.map(function(e){return e()})},St=!1;E3&&(St=(P2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(P2.readyState),St||P2.addEventListener("DOMContentLoaded",FR));function BR(t){E3&&(St?setTimeout(t,0):Hf.push(t))}function o0(t){var e=t.tag,c=t.attributes,a=c===void 0?{}:c,s=t.children,n=s===void 0?[]:s;return typeof t=="string"?vf(t):"<".concat(e," ").concat(PR(a),">").concat(n.map(o0).join(""),"</").concat(e,">")}function G5(t,e,c){if(t&&t[e]&&t[e][c])return{prefix:e,iconName:c,icon:t[e][c]}}var UR=function(e,c){return function(a,s,n,i){return e.call(c,a,s,n,i)}},h8=function(e,c,a,s){var n=Object.keys(e),i=n.length,r=s!==void 0?UR(c,s):c,o,l,f;for(a===void 0?(o=1,f=e[n[0]]):(o=0,f=a);o<i;o++)l=n[o],f=r(f,e[l],l,e);return f};function $R(t){for(var e=[],c=0,a=t.length;c<a;){var s=t.charCodeAt(c++);if(s>=55296&&s<=56319&&c<a){var n=t.charCodeAt(c++);(n&64512)==56320?e.push(((s&1023)<<10)+(n&1023)+65536):(e.push(s),c--)}else e.push(s)}return e}function pa(t){var e=$R(t);return e.length===1?e[0].toString(16):null}function WR(t,e){var c=t.length,a=t.charCodeAt(e),s;return a>=55296&&a<=56319&&c>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(a-55296)*1024+s-56320+65536:a}function j5(t){return Object.keys(t).reduce(function(e,c){var a=t[c],s=!!a.icon;return s?e[a.iconName]=a.icon:e[c]=a,e},{})}function ma(t,e){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=c.skipHooks,s=a===void 0?!1:a,n=j5(e);typeof W1.hooks.addPack=="function"&&!s?W1.hooks.addPack(t,j5(e)):W1.styles[t]=K(K({},W1.styles[t]||{}),n),t==="fas"&&ma("fa",e)}var E0,k0,A0,le=W1.styles,qR=W1.shims,GR=(E0={},j2(E0,k2,Object.values($6[k2])),j2(E0,O2,Object.values($6[O2])),E0),vn=null,zf={},Cf={},Mf={},Vf={},_f={},jR=(k0={},j2(k0,k2,Object.keys(B6[k2])),j2(k0,O2,Object.keys(B6[O2])),k0);function KR(t){return~SR.indexOf(t)}function YR(t,e){var c=e.split("-"),a=c[0],s=c.slice(1).join("-");return a===t&&s!==""&&!KR(s)?s:null}var Lf=function(){var e=function(n){return h8(le,function(i,r,o){return i[o]=h8(r,n,{}),i},{})};zf=e(function(s,n,i){if(n[3]&&(s[n[3]]=i),n[2]){var r=n[2].filter(function(o){return typeof o=="number"});r.forEach(function(o){s[o.toString(16)]=i})}return s}),Cf=e(function(s,n,i){if(s[i]=i,n[2]){var r=n[2].filter(function(o){return typeof o=="string"});r.forEach(function(o){s[o]=i})}return s}),_f=e(function(s,n,i){var r=n[2];return s[i]=i,r.forEach(function(o){s[o]=i}),s});var c="far"in le||Z.autoFetchSvg,a=h8(qR,function(s,n){var i=n[0],r=n[1],o=n[2];return r==="far"&&!c&&(r="fas"),typeof i=="string"&&(s.names[i]={prefix:r,iconName:o}),typeof i=="number"&&(s.unicodes[i.toString(16)]={prefix:r,iconName:o}),s},{names:{},unicodes:{}});Mf=a.names,Vf=a.unicodes,vn=mc(Z.styleDefault,{family:Z.familyDefault})};ER(function(t){vn=mc(t.styleDefault,{family:Z.familyDefault})});Lf();function gn(t,e){return(zf[t]||{})[e]}function XR(t,e){return(Cf[t]||{})[e]}function y4(t,e){return(_f[t]||{})[e]}function bf(t){return Mf[t]||{prefix:null,iconName:null}}function QR(t){var e=Vf[t],c=gn("fas",t);return e||(c?{prefix:"fas",iconName:c}:null)||{prefix:null,iconName:null}}function r4(){return vn}var Hn=function(){return{prefix:null,iconName:null,rest:[]}};function mc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=e.family,a=c===void 0?k2:c,s=B6[a][t],n=U6[a][t]||U6[a][s],i=t in W1.styles?t:null;return n||i||null}var K5=(A0={},j2(A0,k2,Object.keys($6[k2])),j2(A0,O2,Object.keys($6[O2])),A0);function vc(t){var e,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.skipLookups,s=a===void 0?!1:a,n=(e={},j2(e,k2,"".concat(Z.cssPrefix,"-").concat(k2)),j2(e,O2,"".concat(Z.cssPrefix,"-").concat(O2)),e),i=null,r=k2;(t.includes(n[k2])||t.some(function(l){return K5[k2].includes(l)}))&&(r=k2),(t.includes(n[O2])||t.some(function(l){return K5[O2].includes(l)}))&&(r=O2);var o=t.reduce(function(l,f){var u=YR(Z.cssPrefix,f);if(le[f]?(f=GR[r].includes(f)?VR[r][f]:f,i=f,l.prefix=f):jR[r].indexOf(f)>-1?(i=f,l.prefix=mc(f,{family:r})):u?l.iconName=u:f!==Z.replacementClass&&f!==n[k2]&&f!==n[O2]&&l.rest.push(f),!s&&l.prefix&&l.iconName){var d=i==="fa"?bf(l.iconName):{},h=y4(l.prefix,l.iconName);d.prefix&&(i=null),l.iconName=d.iconName||h||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!le.far&&le.fas&&!Z.autoFetchSvg&&(l.prefix="fas")}return l},Hn());return(t.includes("fa-brands")||t.includes("fab"))&&(o.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(o.prefix="fad"),!o.prefix&&r===O2&&(le.fass||Z.autoFetchSvg)&&(o.prefix="fass",o.iconName=y4(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||i==="fa")&&(o.prefix=r4()||"fas"),o}var JR=function(){function t(){fR(this,t),this.definitions={}}return uR(t,[{key:"add",value:function(){for(var c=this,a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];var i=s.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(r){c.definitions[r]=K(K({},c.definitions[r]||{}),i[r]),ma(r,i[r]);var o=$6[k2][r];o&&ma(o,i[r]),Lf()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(c,a){var s=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(s).map(function(n){var i=s[n],r=i.prefix,o=i.iconName,l=i.icon,f=l[2];c[r]||(c[r]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(c[r][u]=l)}),c[r][o]=l}),c}}]),t}(),Y5=[],fe={},Ve={},ZR=Object.keys(Ve);function eO(t,e){var c=e.mixoutsTo;return Y5=t,fe={},Object.keys(Ve).forEach(function(a){ZR.indexOf(a)===-1&&delete Ve[a]}),Y5.forEach(function(a){var s=a.mixout?a.mixout():{};if(Object.keys(s).forEach(function(i){typeof s[i]=="function"&&(c[i]=s[i]),yt(s[i])==="object"&&Object.keys(s[i]).forEach(function(r){c[i]||(c[i]={}),c[i][r]=s[i][r]})}),a.hooks){var n=a.hooks();Object.keys(n).forEach(function(i){fe[i]||(fe[i]=[]),fe[i].push(n[i])})}a.provides&&a.provides(Ve)}),c}function va(t,e){for(var c=arguments.length,a=new Array(c>2?c-2:0),s=2;s<c;s++)a[s-2]=arguments[s];var n=fe[t]||[];return n.forEach(function(i){e=i.apply(null,[e].concat(a))}),e}function K4(t){for(var e=arguments.length,c=new Array(e>1?e-1:0),a=1;a<e;a++)c[a-1]=arguments[a];var s=fe[t]||[];s.forEach(function(n){n.apply(null,c)})}function S3(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ve[t]?Ve[t].apply(null,e):void 0}function ga(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,c=t.prefix||r4();if(e)return e=y4(c,e)||e,G5(wf.definitions,c,e)||G5(W1.styles,c,e)}var wf=new JR,tO=function(){Z.autoReplaceSvg=!1,Z.observeMutations=!1,K4("noAuto")},cO={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return E3?(K4("beforeI2svg",e),S3("pseudoElements2svg",e),S3("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=e.autoReplaceSvgRoot;Z.autoReplaceSvg===!1&&(Z.autoReplaceSvg=!0),Z.observeMutations=!0,BR(function(){sO({autoReplaceSvgRoot:c}),K4("watch",e)})}},aO={icon:function(e){if(e===null)return null;if(yt(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:y4(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var c=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=mc(e[0]);return{prefix:a,iconName:y4(a,c)||c}}if(typeof e=="string"&&(e.indexOf("".concat(Z.cssPrefix,"-"))>-1||e.match(_R))){var s=vc(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||r4(),iconName:y4(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){var n=r4();return{prefix:n,iconName:y4(n,e)||e}}}},S1={noAuto:tO,config:Z,dom:cO,parse:aO,library:wf,findIconDefinition:ga,toHtml:o0},sO=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=e.autoReplaceSvgRoot,a=c===void 0?P2:c;(Object.keys(W1.styles).length>0||Z.autoFetchSvg)&&E3&&Z.autoReplaceSvg&&S1.dom.i2svg({node:a})};function gc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return o0(a)})}}),Object.defineProperty(t,"node",{get:function(){if(E3){var a=P2.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function nO(t){var e=t.children,c=t.main,a=t.mask,s=t.attributes,n=t.styles,i=t.transform;if(mn(i)&&c.found&&!a.found){var r=c.width,o=c.height,l={x:r/o/2,y:.5};s.style=pc(K(K({},n),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function iO(t){var e=t.prefix,c=t.iconName,a=t.children,s=t.attributes,n=t.symbol,i=n===!0?"".concat(e,"-").concat(Z.cssPrefix,"-").concat(c):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:K(K({},s),{},{id:i}),children:a}]}]}function zn(t){var e=t.icons,c=e.main,a=e.mask,s=t.prefix,n=t.iconName,i=t.transform,r=t.symbol,o=t.title,l=t.maskId,f=t.titleId,u=t.extra,d=t.watchable,h=d===void 0?!1:d,v=a.found?a:c,m=v.width,C=v.height,H=s==="fak",p=[Z.replacementClass,n?"".concat(Z.cssPrefix,"-").concat(n):""].filter(function(w){return u.classes.indexOf(w)===-1}).filter(function(w){return w!==""||!!w}).concat(u.classes).join(" "),g={children:[],attributes:K(K({},u.attributes),{},{"data-prefix":s,"data-icon":n,class:p,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(C)})},_=H&&!~u.classes.indexOf("fa-fw")?{width:"".concat(m/C*16*.0625,"em")}:{};h&&(g.attributes[j4]=""),o&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(f||q6())},children:[o]}),delete g.attributes.title);var L=K(K({},g),{},{prefix:s,iconName:n,main:c,mask:a,maskId:l,transform:i,symbol:r,styles:K(K({},_),u.styles)}),k=a.found&&c.found?S3("generateAbstractMask",L)||{children:[],attributes:{}}:S3("generateAbstractIcon",L)||{children:[],attributes:{}},$=k.children,N=k.attributes;return L.children=$,L.attributes=N,r?iO(L):nO(L)}function X5(t){var e=t.content,c=t.width,a=t.height,s=t.transform,n=t.title,i=t.extra,r=t.watchable,o=r===void 0?!1:r,l=K(K(K({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")});o&&(l[j4]="");var f=K({},i.styles);mn(s)&&(f.transform=RR({transform:s,startCentered:!0,width:c,height:a}),f["-webkit-transform"]=f.transform);var u=pc(f);u.length>0&&(l.style=u);var d=[];return d.push({tag:"span",attributes:l,children:[e]}),n&&d.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),d}function rO(t){var e=t.content,c=t.title,a=t.extra,s=K(K(K({},a.attributes),c?{title:c}:{}),{},{class:a.classes.join(" ")}),n=pc(a.styles);n.length>0&&(s.style=n);var i=[];return i.push({tag:"span",attributes:s,children:[e]}),c&&i.push({tag:"span",attributes:{class:"sr-only"},children:[c]}),i}var p8=W1.styles;function Ha(t){var e=t[0],c=t[1],a=t.slice(4),s=ln(a,1),n=s[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(Z.cssPrefix,"-").concat(w4.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Z.cssPrefix,"-").concat(w4.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(Z.cssPrefix,"-").concat(w4.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:e,height:c,icon:i}}var oO={found:!1,width:512,height:512};function lO(t,e){!df&&!Z.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function za(t,e){var c=e;return e==="fa"&&Z.styleDefault!==null&&(e=r4()),new Promise(function(a,s){if(S3("missingIconAbstract"),c==="fa"){var n=bf(t)||{};t=n.iconName||t,e=n.prefix||e}if(t&&e&&p8[e]&&p8[e][t]){var i=p8[e][t];return a(Ha(i))}lO(t,e),a(K(K({},oO),{},{icon:Z.showMissingIcons&&t?S3("missingIconAbstract")||{}:{}}))})}var Q5=function(){},Ca=Z.measurePerformance&&w0&&w0.mark&&w0.measure?w0:{mark:Q5,measure:Q5},l6='FA "6.5.1"',fO=function(e){return Ca.mark("".concat(l6," ").concat(e," begins")),function(){return yf(e)}},yf=function(e){Ca.mark("".concat(l6," ").concat(e," ends")),Ca.measure("".concat(l6," ").concat(e),"".concat(l6," ").concat(e," begins"),"".concat(l6," ").concat(e," ends"))},Cn={begin:fO,end:yf},q0=function(){};function J5(t){var e=t.getAttribute?t.getAttribute(j4):null;return typeof e=="string"}function uO(t){var e=t.getAttribute?t.getAttribute(un):null,c=t.getAttribute?t.getAttribute(dn):null;return e&&c}function dO(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Z.replacementClass)}function hO(){if(Z.autoReplaceSvg===!0)return G0.replace;var t=G0[Z.autoReplaceSvg];return t||G0.replace}function pO(t){return P2.createElementNS("http://www.w3.org/2000/svg",t)}function mO(t){return P2.createElement(t)}function Sf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=e.ceFn,a=c===void 0?t.tag==="svg"?pO:mO:c;if(typeof t=="string")return P2.createTextNode(t);var s=a(t.tag);Object.keys(t.attributes||[]).forEach(function(i){s.setAttribute(i,t.attributes[i])});var n=t.children||[];return n.forEach(function(i){s.appendChild(Sf(i,{ceFn:a}))}),s}function vO(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var G0={replace:function(e){var c=e[0];if(c.parentNode)if(e[1].forEach(function(s){c.parentNode.insertBefore(Sf(s),c)}),c.getAttribute(j4)===null&&Z.keepOriginalSource){var a=P2.createComment(vO(c));c.parentNode.replaceChild(a,c)}else c.remove()},nest:function(e){var c=e[0],a=e[1];if(~pn(c).indexOf(Z.replacementClass))return G0.replace(e);var s=new RegExp("".concat(Z.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var n=a[0].attributes.class.split(" ").reduce(function(r,o){return o===Z.replacementClass||o.match(s)?r.toSvg.push(o):r.toNode.push(o),r},{toNode:[],toSvg:[]});a[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?c.removeAttribute("class"):c.setAttribute("class",n.toNode.join(" "))}var i=a.map(function(r){return o0(r)}).join(`
`);c.setAttribute(j4,""),c.innerHTML=i}};function Z5(t){t()}function xf(t,e){var c=typeof e=="function"?e:q0;if(t.length===0)c();else{var a=Z5;Z.mutateApproach===CR&&(a=i4.requestAnimationFrame||Z5),a(function(){var s=hO(),n=Cn.begin("mutate");t.map(s),n(),c()})}}var Mn=!1;function Nf(){Mn=!0}function Ma(){Mn=!1}var xt=null;function e7(t){if($5&&Z.observeMutations){var e=t.treeCallback,c=e===void 0?q0:e,a=t.nodeCallback,s=a===void 0?q0:a,n=t.pseudoElementsCallback,i=n===void 0?q0:n,r=t.observeMutationsRoot,o=r===void 0?P2:r;xt=new $5(function(l){if(!Mn){var f=r4();je(l).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!J5(u.addedNodes[0])&&(Z.searchPseudoElements&&i(u.target),c(u.target)),u.type==="attributes"&&u.target.parentNode&&Z.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&J5(u.target)&&~yR.indexOf(u.attributeName))if(u.attributeName==="class"&&uO(u.target)){var d=vc(pn(u.target)),h=d.prefix,v=d.iconName;u.target.setAttribute(un,h||f),v&&u.target.setAttribute(dn,v)}else dO(u.target)&&s(u.target)})}}),E3&&xt.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function gO(){xt&&xt.disconnect()}function HO(t){var e=t.getAttribute("style"),c=[];return e&&(c=e.split(";").reduce(function(a,s){var n=s.split(":"),i=n[0],r=n.slice(1);return i&&r.length>0&&(a[i]=r.join(":").trim()),a},{})),c}function zO(t){var e=t.getAttribute("data-prefix"),c=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",s=vc(pn(t));return s.prefix||(s.prefix=r4()),e&&c&&(s.prefix=e,s.iconName=c),s.iconName&&s.prefix||(s.prefix&&a.length>0&&(s.iconName=XR(s.prefix,t.innerText)||gn(s.prefix,pa(t.innerText))),!s.iconName&&Z.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function CO(t){var e=je(t.attributes).reduce(function(s,n){return s.name!=="class"&&s.name!=="style"&&(s[n.name]=n.value),s},{}),c=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return Z.autoA11y&&(c?e["aria-labelledby"]="".concat(Z.replacementClass,"-title-").concat(a||q6()):(e["aria-hidden"]="true",e.focusable="false")),e}function MO(){return{iconName:null,title:null,titleId:null,prefix:null,transform:a3,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function t7(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},c=zO(t),a=c.iconName,s=c.prefix,n=c.rest,i=CO(t),r=va("parseNodeAttributes",{},t),o=e.styleParser?HO(t):[];return K({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:a3,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:o,attributes:i}},r)}var VO=W1.styles;function Tf(t){var e=Z.autoReplaceSvg==="nest"?t7(t,{styleParser:!1}):t7(t);return~e.extra.classes.indexOf(hf)?S3("generateLayersText",t,e):S3("generateSvgReplacementMutation",t,e)}var o4=new Set;hn.map(function(t){o4.add("fa-".concat(t))});Object.keys(B6[k2]).map(o4.add.bind(o4));Object.keys(B6[O2]).map(o4.add.bind(o4));o4=i0(o4);function c7(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!E3)return Promise.resolve();var c=P2.documentElement.classList,a=function(u){return c.add("".concat(W5,"-").concat(u))},s=function(u){return c.remove("".concat(W5,"-").concat(u))},n=Z.autoFetchSvg?o4:hn.map(function(f){return"fa-".concat(f)}).concat(Object.keys(VO));n.includes("fa")||n.push("fa");var i=[".".concat(hf,":not([").concat(j4,"])")].concat(n.map(function(f){return".".concat(f,":not([").concat(j4,"])")})).join(", ");if(i.length===0)return Promise.resolve();var r=[];try{r=je(t.querySelectorAll(i))}catch{}if(r.length>0)a("pending"),s("complete");else return Promise.resolve();var o=Cn.begin("onTree"),l=r.reduce(function(f,u){try{var d=Tf(u);d&&f.push(d)}catch(h){df||h.name==="MissingIcon"&&console.error(h)}return f},[]);return new Promise(function(f,u){Promise.all(l).then(function(d){xf(d,function(){a("active"),a("complete"),s("pending"),typeof e=="function"&&e(),o(),f()})}).catch(function(d){o(),u(d)})})}function _O(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Tf(t).then(function(c){c&&xf([c],e)})}function LO(t){return function(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:ga(e||{}),s=c.mask;return s&&(s=(s||{}).icon?s:ga(s||{})),t(a,K(K({},c),{},{mask:s}))}}var bO=function(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.transform,s=a===void 0?a3:a,n=c.symbol,i=n===void 0?!1:n,r=c.mask,o=r===void 0?null:r,l=c.maskId,f=l===void 0?null:l,u=c.title,d=u===void 0?null:u,h=c.titleId,v=h===void 0?null:h,m=c.classes,C=m===void 0?[]:m,H=c.attributes,p=H===void 0?{}:H,g=c.styles,_=g===void 0?{}:g;if(e){var L=e.prefix,k=e.iconName,$=e.icon;return gc(K({type:"icon"},e),function(){return K4("beforeDOMElementCreation",{iconDefinition:e,params:c}),Z.autoA11y&&(d?p["aria-labelledby"]="".concat(Z.replacementClass,"-title-").concat(v||q6()):(p["aria-hidden"]="true",p.focusable="false")),zn({icons:{main:Ha($),mask:o?Ha(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:L,iconName:k,transform:K(K({},a3),s),symbol:i,title:d,maskId:f,titleId:v,extra:{attributes:p,styles:_,classes:C}})})}},wO={mixout:function(){return{icon:LO(bO)}},hooks:function(){return{mutationObserverCallbacks:function(c){return c.treeCallback=c7,c.nodeCallback=_O,c}}},provides:function(e){e.i2svg=function(c){var a=c.node,s=a===void 0?P2:a,n=c.callback,i=n===void 0?function(){}:n;return c7(s,i)},e.generateSvgReplacementMutation=function(c,a){var s=a.iconName,n=a.title,i=a.titleId,r=a.prefix,o=a.transform,l=a.symbol,f=a.mask,u=a.maskId,d=a.extra;return new Promise(function(h,v){Promise.all([za(s,r),f.iconName?za(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(m){var C=ln(m,2),H=C[0],p=C[1];h([c,zn({icons:{main:H,mask:p},prefix:r,iconName:s,transform:o,symbol:l,maskId:u,title:n,titleId:i,extra:d,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(c){var a=c.children,s=c.attributes,n=c.main,i=c.transform,r=c.styles,o=pc(r);o.length>0&&(s.style=o);var l;return mn(i)&&(l=S3("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),a.push(l||n.icon),{children:a,attributes:s}}}},yO={mixout:function(){return{layer:function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.classes,n=s===void 0?[]:s;return gc({type:"layer"},function(){K4("beforeDOMElementCreation",{assembler:c,params:a});var i=[];return c(function(r){Array.isArray(r)?r.map(function(o){i=i.concat(o.abstract)}):i=i.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(Z.cssPrefix,"-layers")].concat(i0(n)).join(" ")},children:i}]})}}}},SO={mixout:function(){return{counter:function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.title,n=s===void 0?null:s,i=a.classes,r=i===void 0?[]:i,o=a.attributes,l=o===void 0?{}:o,f=a.styles,u=f===void 0?{}:f;return gc({type:"counter",content:c},function(){return K4("beforeDOMElementCreation",{content:c,params:a}),rO({content:c.toString(),title:n,extra:{attributes:l,styles:u,classes:["".concat(Z.cssPrefix,"-layers-counter")].concat(i0(r))}})})}}}},xO={mixout:function(){return{text:function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.transform,n=s===void 0?a3:s,i=a.title,r=i===void 0?null:i,o=a.classes,l=o===void 0?[]:o,f=a.attributes,u=f===void 0?{}:f,d=a.styles,h=d===void 0?{}:d;return gc({type:"text",content:c},function(){return K4("beforeDOMElementCreation",{content:c,params:a}),X5({content:c,transform:K(K({},a3),n),title:r,extra:{attributes:u,styles:h,classes:["".concat(Z.cssPrefix,"-layers-text")].concat(i0(l))}})})}}},provides:function(e){e.generateLayersText=function(c,a){var s=a.title,n=a.transform,i=a.extra,r=null,o=null;if(lf){var l=parseInt(getComputedStyle(c).fontSize,10),f=c.getBoundingClientRect();r=f.width/l,o=f.height/l}return Z.autoA11y&&!s&&(i.attributes["aria-hidden"]="true"),Promise.resolve([c,X5({content:c.innerHTML,width:r,height:o,transform:n,title:s,extra:i,watchable:!0})])}}},NO=new RegExp('"',"ug"),a7=[1105920,1112319];function TO(t){var e=t.replace(NO,""),c=WR(e,0),a=c>=a7[0]&&c<=a7[1],s=e.length===2?e[0]===e[1]:!1;return{value:pa(s?e[0]:e),isSecondary:a||s}}function s7(t,e){var c="".concat(zR).concat(e.replace(":","-"));return new Promise(function(a,s){if(t.getAttribute(c)!==null)return a();var n=je(t.children),i=n.filter(function($){return $.getAttribute(ha)===e})[0],r=i4.getComputedStyle(t,e),o=r.getPropertyValue("font-family").match(LR),l=r.getPropertyValue("font-weight"),f=r.getPropertyValue("content");if(i&&!o)return t.removeChild(i),a();if(o&&f!=="none"&&f!==""){var u=r.getPropertyValue("content"),d=~["Sharp"].indexOf(o[2])?O2:k2,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?U6[d][o[2].toLowerCase()]:bR[d][l],v=TO(u),m=v.value,C=v.isSecondary,H=o[0].startsWith("FontAwesome"),p=gn(h,m),g=p;if(H){var _=QR(m);_.iconName&&_.prefix&&(p=_.iconName,h=_.prefix)}if(p&&!C&&(!i||i.getAttribute(un)!==h||i.getAttribute(dn)!==g)){t.setAttribute(c,g),i&&t.removeChild(i);var L=MO(),k=L.extra;k.attributes[ha]=e,za(p,h).then(function($){var N=zn(K(K({},L),{},{icons:{main:$,mask:Hn()},prefix:h,iconName:g,extra:k,watchable:!0})),w=P2.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(w,t.firstChild):t.appendChild(w),w.outerHTML=N.map(function(y){return o0(y)}).join(`