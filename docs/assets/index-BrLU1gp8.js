(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function os(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const j={},Rt=[],Ne=()=>{},vr=()=>!1,bn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ls=e=>e.startsWith("onUpdate:"),ie=Object.assign,as=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Oi=Object.prototype.hasOwnProperty,V=(e,t)=>Oi.call(e,t),k=Array.isArray,Dt=e=>Xt(e)==="[object Map]",yr=e=>Xt(e)==="[object Set]",Ms=e=>Xt(e)==="[object Date]",I=e=>typeof e=="function",re=e=>typeof e=="string",Ke=e=>typeof e=="symbol",K=e=>e!==null&&typeof e=="object",Tr=e=>(K(e)||I(e))&&I(e.then)&&I(e.catch),Cr=Object.prototype.toString,Xt=e=>Cr.call(e),Pi=e=>Xt(e).slice(8,-1),Sr=e=>Xt(e)==="[object Object]",cs=e=>re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ot=os(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),An=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Bi=/-\w/g,xe=An(e=>e.replace(Bi,t=>t.slice(1).toUpperCase())),$i=/\B([A-Z])/g,Ct=An(e=>e.replace($i,"-$1").toLowerCase()),Rn=An(e=>e.charAt(0).toUpperCase()+e.slice(1)),Hn=An(e=>e?`on${Rn(e)}`:""),vt=(e,t)=>!Object.is(e,t),on=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},br=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},us=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Wi=e=>{const t=re(e)?Number(e):NaN;return isNaN(t)?e:t};let xs;const Dn=()=>xs||(xs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yt(e){if(k(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=re(s)?Ui(s):Yt(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(re(e)||K(e))return e}const Vi=/;(?![^(]*\))/g,Ni=/:([^]+)/,Ki=/\/\*[^]*?\*\//g;function Ui(e){const t={};return e.replace(Ki,"").split(Vi).forEach(n=>{if(n){const s=n.split(Ni);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function rt(e){let t="";if(re(e))t=e;else if(k(e))for(let n=0;n<e.length;n++){const s=rt(e[n]);s&&(t+=s+" ")}else if(K(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const qi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gi=os(qi);function Ar(e){return!!e||e===""}function zi(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=fs(e[s],t[s]);return n}function fs(e,t){if(e===t)return!0;let n=Ms(e),s=Ms(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=Ke(e),s=Ke(t),n||s)return e===t;if(n=k(e),s=k(t),n||s)return n&&s?zi(e,t):!1;if(n=K(e),s=K(t),n||s){if(!n||!s)return!1;const r=Object.keys(e).length,i=Object.keys(t).length;if(r!==i)return!1;for(const o in e){const l=e.hasOwnProperty(o),a=t.hasOwnProperty(o);if(l&&!a||!l&&a||!fs(e[o],t[o]))return!1}}return String(e)===String(t)}const Rr=e=>!!(e&&e.__v_isRef===!0),Re=e=>re(e)?e:e==null?"":k(e)||K(e)&&(e.toString===Cr||!I(e.toString))?Rr(e)?Re(e.value):JSON.stringify(e,Dr,2):String(e),Dr=(e,t)=>Rr(t)?Dr(e,t.value):Dt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[On(s,i)+" =>"]=r,n),{})}:yr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>On(n))}:Ke(t)?On(t):K(t)&&!k(t)&&!Sr(t)?String(t):t,On=(e,t="")=>{var n;return Ke(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Ae;class ji{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ae,!t&&Ae&&(this.index=(Ae.scopes||(Ae.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ae;try{return Ae=this,t()}finally{Ae=n}}}on(){++this._on===1&&(this.prevScope=Ae,Ae=this)}off(){this._on>0&&--this._on===0&&(Ae=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Ji(){return Ae}let Z;const Pn=new WeakSet;class _r{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ae&&Ae.active&&Ae.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Pn.has(this)&&(Pn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Lr(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Es(this),Mr(this);const t=Z,n=Ee;Z=this,Ee=!0;try{return this.fn()}finally{xr(this),Z=t,Ee=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ps(t);this.deps=this.depsTail=void 0,Es(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Pn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){jn(this)&&this.run()}get dirty(){return jn(this)}}let wr=0,Pt,Bt;function Lr(e,t=!1){if(e.flags|=8,t){e.next=Bt,Bt=e;return}e.next=Pt,Pt=e}function ds(){wr++}function hs(){if(--wr>0)return;if(Bt){let t=Bt;for(Bt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Pt;){let t=Pt;for(Pt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Mr(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function xr(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),ps(s),Xi(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function jn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Er(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Er(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Kt)||(e.globalVersion=Kt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!jn(e))))return;e.flags|=2;const t=e.dep,n=Z,s=Ee;Z=e,Ee=!0;try{Mr(e);const r=e.fn(e._value);(t.version===0||vt(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{Z=n,Ee=s,xr(e),e.flags&=-3}}function ps(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ps(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Xi(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ee=!0;const kr=[];function Ye(){kr.push(Ee),Ee=!1}function Ze(){const e=kr.pop();Ee=e===void 0?!0:e}function Es(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Z;Z=void 0;try{t()}finally{Z=n}}}let Kt=0;class Yi{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Z||!Ee||Z===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Z)n=this.activeLink=new Yi(Z,this),Z.deps?(n.prevDep=Z.depsTail,Z.depsTail.nextDep=n,Z.depsTail=n):Z.deps=Z.depsTail=n,Ir(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Z.depsTail,n.nextDep=void 0,Z.depsTail.nextDep=n,Z.depsTail=n,Z.deps===n&&(Z.deps=s)}return n}trigger(t){this.version++,Kt++,this.notify(t)}notify(t){ds();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{hs()}}}function Ir(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Ir(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Jn=new WeakMap,yt=Symbol(""),Xn=Symbol(""),Ut=Symbol("");function fe(e,t,n){if(Ee&&Z){let s=Jn.get(e);s||Jn.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new Fr),r.map=s,r.key=n),r.track()}}function Je(e,t,n,s,r,i){const o=Jn.get(e);if(!o){Kt++;return}const l=a=>{a&&a.trigger()};if(ds(),t==="clear")o.forEach(l);else{const a=k(e),d=a&&cs(n);if(a&&n==="length"){const u=Number(s);o.forEach((h,g)=>{(g==="length"||g===Ut||!Ke(g)&&g>=u)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),d&&l(o.get(Ut)),t){case"add":a?d&&l(o.get("length")):(l(o.get(yt)),Dt(e)&&l(o.get(Xn)));break;case"delete":a||(l(o.get(yt)),Dt(e)&&l(o.get(Xn)));break;case"set":Dt(e)&&l(o.get(yt));break}}hs()}function St(e){const t=G(e);return t===e?t:(fe(t,"iterate",Ut),ke(e)?t:t.map(Qe))}function _n(e){return fe(e=G(e),"iterate",Ut),e}function nt(e,t){return it(e)?Lt(Tt(e)?Qe(t):t):Qe(t)}const Zi={__proto__:null,[Symbol.iterator](){return Bn(this,Symbol.iterator,e=>nt(this,e))},concat(...e){return St(this).concat(...e.map(t=>k(t)?St(t):t))},entries(){return Bn(this,"entries",e=>(e[1]=nt(this,e[1]),e))},every(e,t){return qe(this,"every",e,t,void 0,arguments)},filter(e,t){return qe(this,"filter",e,t,n=>n.map(s=>nt(this,s)),arguments)},find(e,t){return qe(this,"find",e,t,n=>nt(this,n),arguments)},findIndex(e,t){return qe(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return qe(this,"findLast",e,t,n=>nt(this,n),arguments)},findLastIndex(e,t){return qe(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return qe(this,"forEach",e,t,void 0,arguments)},includes(...e){return $n(this,"includes",e)},indexOf(...e){return $n(this,"indexOf",e)},join(e){return St(this).join(e)},lastIndexOf(...e){return $n(this,"lastIndexOf",e)},map(e,t){return qe(this,"map",e,t,void 0,arguments)},pop(){return kt(this,"pop")},push(...e){return kt(this,"push",e)},reduce(e,...t){return ks(this,"reduce",e,t)},reduceRight(e,...t){return ks(this,"reduceRight",e,t)},shift(){return kt(this,"shift")},some(e,t){return qe(this,"some",e,t,void 0,arguments)},splice(...e){return kt(this,"splice",e)},toReversed(){return St(this).toReversed()},toSorted(e){return St(this).toSorted(e)},toSpliced(...e){return St(this).toSpliced(...e)},unshift(...e){return kt(this,"unshift",e)},values(){return Bn(this,"values",e=>nt(this,e))}};function Bn(e,t,n){const s=_n(e),r=s[t]();return s!==e&&!ke(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const Qi=Array.prototype;function qe(e,t,n,s,r,i){const o=_n(e),l=o!==e&&!ke(e),a=o[t];if(a!==Qi[t]){const h=a.apply(e,i);return l?Qe(h):h}let d=n;o!==e&&(l?d=function(h,g){return n.call(this,nt(e,h),g,e)}:n.length>2&&(d=function(h,g){return n.call(this,h,g,e)}));const u=a.call(o,d,s);return l&&r?r(u):u}function ks(e,t,n,s){const r=_n(e);let i=n;return r!==e&&(ke(e)?n.length>3&&(i=function(o,l,a){return n.call(this,o,l,a,e)}):i=function(o,l,a){return n.call(this,o,nt(e,l),a,e)}),r[t](i,...s)}function $n(e,t,n){const s=G(e);fe(s,"iterate",Ut);const r=s[t](...n);return(r===-1||r===!1)&&vs(n[0])?(n[0]=G(n[0]),s[t](...n)):r}function kt(e,t,n=[]){Ye(),ds();const s=G(e)[t].apply(e,n);return hs(),Ze(),s}const eo=os("__proto__,__v_isRef,__isVue"),Hr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ke));function to(e){Ke(e)||(e=String(e));const t=G(this);return fe(t,"has",e),t.hasOwnProperty(e)}class Or{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?fo:Wr:i?$r:Br).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=k(t);if(!r){let a;if(o&&(a=Zi[n]))return a;if(n==="hasOwnProperty")return to}const l=Reflect.get(t,n,ye(t)?t:s);if((Ke(n)?Hr.has(n):eo(n))||(r||fe(t,"get",n),i))return l;if(ye(l)){const a=o&&cs(n)?l:l.value;return r&&K(a)?Zn(a):a}return K(l)?r?Zn(l):wn(l):l}}class Pr extends Or{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];const o=k(t)&&cs(n);if(!this._isShallow){const d=it(i);if(!ke(s)&&!it(s)&&(i=G(i),s=G(s)),!o&&ye(i)&&!ye(s))return d||(i.value=s),!0}const l=o?Number(n)<t.length:V(t,n),a=Reflect.set(t,n,s,ye(t)?t:r);return t===G(r)&&(l?vt(s,i)&&Je(t,"set",n,s):Je(t,"add",n,s)),a}deleteProperty(t,n){const s=V(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&Je(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!Ke(n)||!Hr.has(n))&&fe(t,"has",n),s}ownKeys(t){return fe(t,"iterate",k(t)?"length":yt),Reflect.ownKeys(t)}}class no extends Or{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const so=new Pr,ro=new no,io=new Pr(!0);const Yn=e=>e,nn=e=>Reflect.getPrototypeOf(e);function oo(e,t,n){return function(...s){const r=this.__v_raw,i=G(r),o=Dt(i),l=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,d=r[e](...s),u=n?Yn:t?Lt:Qe;return!t&&fe(i,"iterate",a?Xn:yt),ie(Object.create(d),{next(){const{value:h,done:g}=d.next();return g?{value:h,done:g}:{value:l?[u(h[0]),u(h[1])]:u(h),done:g}}})}}function sn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function lo(e,t){const n={get(r){const i=this.__v_raw,o=G(i),l=G(r);e||(vt(r,l)&&fe(o,"get",r),fe(o,"get",l));const{has:a}=nn(o),d=t?Yn:e?Lt:Qe;if(a.call(o,r))return d(i.get(r));if(a.call(o,l))return d(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!e&&fe(G(r),"iterate",yt),r.size},has(r){const i=this.__v_raw,o=G(i),l=G(r);return e||(vt(r,l)&&fe(o,"has",r),fe(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,a=G(l),d=t?Yn:e?Lt:Qe;return!e&&fe(a,"iterate",yt),l.forEach((u,h)=>r.call(i,d(u),d(h),o))}};return ie(n,e?{add:sn("add"),set:sn("set"),delete:sn("delete"),clear:sn("clear")}:{add(r){!t&&!ke(r)&&!it(r)&&(r=G(r));const i=G(this);return nn(i).has.call(i,r)||(i.add(r),Je(i,"add",r,r)),this},set(r,i){!t&&!ke(i)&&!it(i)&&(i=G(i));const o=G(this),{has:l,get:a}=nn(o);let d=l.call(o,r);d||(r=G(r),d=l.call(o,r));const u=a.call(o,r);return o.set(r,i),d?vt(i,u)&&Je(o,"set",r,i):Je(o,"add",r,i),this},delete(r){const i=G(this),{has:o,get:l}=nn(i);let a=o.call(i,r);a||(r=G(r),a=o.call(i,r)),l&&l.call(i,r);const d=i.delete(r);return a&&Je(i,"delete",r,void 0),d},clear(){const r=G(this),i=r.size!==0,o=r.clear();return i&&Je(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=oo(r,e,t)}),n}function gs(e,t){const n=lo(e,t);return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(V(n,r)&&r in s?n:s,r,i)}const ao={get:gs(!1,!1)},co={get:gs(!1,!0)},uo={get:gs(!0,!1)};const Br=new WeakMap,$r=new WeakMap,Wr=new WeakMap,fo=new WeakMap;function ho(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function po(e){return e.__v_skip||!Object.isExtensible(e)?0:ho(Pi(e))}function wn(e){return it(e)?e:ms(e,!1,so,ao,Br)}function go(e){return ms(e,!1,io,co,$r)}function Zn(e){return ms(e,!0,ro,uo,Wr)}function ms(e,t,n,s,r){if(!K(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=po(e);if(i===0)return e;const o=r.get(e);if(o)return o;const l=new Proxy(e,i===2?s:n);return r.set(e,l),l}function Tt(e){return it(e)?Tt(e.__v_raw):!!(e&&e.__v_isReactive)}function it(e){return!!(e&&e.__v_isReadonly)}function ke(e){return!!(e&&e.__v_isShallow)}function vs(e){return e?!!e.__v_raw:!1}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function mo(e){return!V(e,"__v_skip")&&Object.isExtensible(e)&&br(e,"__v_skip",!0),e}const Qe=e=>K(e)?wn(e):e,Lt=e=>K(e)?Zn(e):e;function ye(e){return e?e.__v_isRef===!0:!1}function vo(e){return ye(e)?e.value:e}const yo={get:(e,t,n)=>t==="__v_raw"?e:vo(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return ye(r)&&!ye(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Vr(e){return Tt(e)?e:new Proxy(e,yo)}class To{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Fr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Kt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Z!==this)return Lr(this,!0),!0}get value(){const t=this.dep.track();return Er(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Co(e,t,n=!1){let s,r;return I(e)?s=e:(s=e.get,r=e.set),new To(s,r,n)}const rn={},dn=new WeakMap;let gt;function So(e,t=!1,n=gt){if(n){let s=dn.get(n);s||dn.set(n,s=[]),s.push(e)}}function bo(e,t,n=j){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:a}=n,d=M=>r?M:ke(M)||r===!1||r===0?Xe(M,1):Xe(M);let u,h,g,R,L=!1,E=!1;if(ye(e)?(h=()=>e.value,L=ke(e)):Tt(e)?(h=()=>d(e),L=!0):k(e)?(E=!0,L=e.some(M=>Tt(M)||ke(M)),h=()=>e.map(M=>{if(ye(M))return M.value;if(Tt(M))return d(M);if(I(M))return a?a(M,2):M()})):I(e)?t?h=a?()=>a(e,2):e:h=()=>{if(g){Ye();try{g()}finally{Ze()}}const M=gt;gt=u;try{return a?a(e,3,[R]):e(R)}finally{gt=M}}:h=Ne,t&&r){const M=h,J=r===!0?1/0:r;h=()=>Xe(M(),J)}const Q=Ji(),U=()=>{u.stop(),Q&&Q.active&&as(Q.effects,u)};if(i&&t){const M=t;t=(...J)=>{M(...J),U()}}let P=E?new Array(e.length).fill(rn):rn;const W=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(t){const J=u.run();if(r||L||(E?J.some((oe,pe)=>vt(oe,P[pe])):vt(J,P))){g&&g();const oe=gt;gt=u;try{const pe=[J,P===rn?void 0:E&&P[0]===rn?[]:P,R];P=J,a?a(t,3,pe):t(...pe)}finally{gt=oe}}}else u.run()};return l&&l(W),u=new _r(h),u.scheduler=o?()=>o(W,!1):W,R=M=>So(M,!1,u),g=u.onStop=()=>{const M=dn.get(u);if(M){if(a)a(M,4);else for(const J of M)J();dn.delete(u)}},t?s?W(!0):P=u.run():o?o(W.bind(null,!0),!0):u.run(),U.pause=u.pause.bind(u),U.resume=u.resume.bind(u),U.stop=U,U}function Xe(e,t=1/0,n){if(t<=0||!K(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,ye(e))Xe(e.value,t,n);else if(k(e))for(let s=0;s<e.length;s++)Xe(e[s],t,n);else if(yr(e)||Dt(e))e.forEach(s=>{Xe(s,t,n)});else if(Sr(e)){for(const s in e)Xe(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Xe(e[s],t,n)}return e}function Zt(e,t,n,s){try{return s?e(...s):e()}catch(r){Ln(r,t,n)}}function Fe(e,t,n,s){if(I(e)){const r=Zt(e,t,n,s);return r&&Tr(r)&&r.catch(i=>{Ln(i,t,n)}),r}if(k(e)){const r=[];for(let i=0;i<e.length;i++)r.push(Fe(e[i],t,n,s));return r}}function Ln(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||j;if(t){let l=t.parent;const a=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](e,a,d)===!1)return}l=l.parent}if(i){Ye(),Zt(i,null,10,[e,a,d]),Ze();return}}Ao(e,n,r,s,o)}function Ao(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const me=[];let $e=-1;const _t=[];let st=null,bt=0;const Nr=Promise.resolve();let hn=null;function Ro(e){const t=hn||Nr;return e?t.then(this?e.bind(this):e):t}function Do(e){let t=$e+1,n=me.length;for(;t<n;){const s=t+n>>>1,r=me[s],i=qt(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function ys(e){if(!(e.flags&1)){const t=qt(e),n=me[me.length-1];!n||!(e.flags&2)&&t>=qt(n)?me.push(e):me.splice(Do(t),0,e),e.flags|=1,Kr()}}function Kr(){hn||(hn=Nr.then(qr))}function _o(e){k(e)?_t.push(...e):st&&e.id===-1?st.splice(bt+1,0,e):e.flags&1||(_t.push(e),e.flags|=1),Kr()}function Fs(e,t,n=$e+1){for(;n<me.length;n++){const s=me[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;me.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Ur(e){if(_t.length){const t=[...new Set(_t)].sort((n,s)=>qt(n)-qt(s));if(_t.length=0,st){st.push(...t);return}for(st=t,bt=0;bt<st.length;bt++){const n=st[bt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}st=null,bt=0}}const qt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function qr(e){try{for($e=0;$e<me.length;$e++){const t=me[$e];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Zt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;$e<me.length;$e++){const t=me[$e];t&&(t.flags&=-2)}$e=-1,me.length=0,Ur(),hn=null,(me.length||_t.length)&&qr()}}let _e=null,Gr=null;function pn(e){const t=_e;return _e=e,Gr=e&&e.type.__scopeId||null,t}function zr(e,t=_e,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&yn(-1);const i=pn(t);let o;try{o=e(...r)}finally{pn(i),s._d&&yn(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function wo(e,t){if(_e===null)return e;const n=Fn(_e),s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,o,l,a=j]=t[r];i&&(I(i)&&(i={mounted:i,updated:i}),i.deep&&Xe(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return e}function ft(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let a=l.dir[s];a&&(Ye(),Fe(a,n,8,[e.el,l,e,t]),Ze())}}function Lo(e,t){if(de){let n=de.provides;const s=de.parent&&de.parent.provides;s===n&&(n=de.provides=Object.create(s)),n[e]=t}}function ln(e,t,n=!1){const s=_i();if(s||wt){let r=wt?wt._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&I(t)?t.call(s&&s.proxy):t}}const Mo=Symbol.for("v-scx"),xo=()=>ln(Mo);function Wn(e,t,n){return jr(e,t,n)}function jr(e,t,n=j){const{immediate:s,deep:r,flush:i,once:o}=n,l=ie({},n),a=t&&s||!t&&i!=="post";let d;if(jt){if(i==="sync"){const R=xo();d=R.__watcherHandles||(R.__watcherHandles=[])}else if(!a){const R=()=>{};return R.stop=Ne,R.resume=Ne,R.pause=Ne,R}}const u=de;l.call=(R,L,E)=>Fe(R,u,L,E);let h=!1;i==="post"?l.scheduler=R=>{be(R,u&&u.suspense)}:i!=="sync"&&(h=!0,l.scheduler=(R,L)=>{L?R():ys(R)}),l.augmentJob=R=>{t&&(R.flags|=4),h&&(R.flags|=2,u&&(R.id=u.uid,R.i=u))};const g=bo(e,t,l);return jt&&(d?d.push(g):a&&g()),g}function Eo(e,t,n){const s=this.proxy,r=re(e)?e.includes(".")?Jr(s,e):()=>s[e]:e.bind(s,s);let i;I(t)?i=t:(i=t.handler,n=t);const o=Qt(this),l=jr(r,i.bind(s),n);return o(),l}function Jr(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const ko=Symbol("_vte"),Xr=e=>e.__isTeleport,We=Symbol("_leaveCb"),Ft=Symbol("_enterCb");function Fo(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ri(()=>{e.isMounted=!0}),ii(()=>{e.isUnmounting=!0}),e}const Le=[Function,Array],Yr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Le,onEnter:Le,onAfterEnter:Le,onEnterCancelled:Le,onBeforeLeave:Le,onLeave:Le,onAfterLeave:Le,onLeaveCancelled:Le,onBeforeAppear:Le,onAppear:Le,onAfterAppear:Le,onAppearCancelled:Le},Zr=e=>{const t=e.subTree;return t.component?Zr(t.component):t},Io={name:"BaseTransition",props:Yr,setup(e,{slots:t}){const n=_i(),s=Fo();return()=>{const r=t.default&&ti(t.default(),!0);if(!r||!r.length)return;const i=Qr(r),o=G(e),{mode:l}=o;if(s.isLeaving)return Vn(i);const a=Is(i);if(!a)return Vn(i);let d=Qn(a,o,s,n,h=>d=h);a.type!==ve&&Gt(a,d);let u=n.subTree&&Is(n.subTree);if(u&&u.type!==ve&&!mt(u,a)&&Zr(n).type!==ve){let h=Qn(u,o,s,n);if(Gt(u,h),l==="out-in"&&a.type!==ve)return s.isLeaving=!0,h.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave,u=void 0},Vn(i);l==="in-out"&&a.type!==ve?h.delayLeave=(g,R,L)=>{const E=ei(s,u);E[String(u.key)]=u,g[We]=()=>{R(),g[We]=void 0,delete d.delayedLeave,u=void 0},d.delayedLeave=()=>{L(),delete d.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function Qr(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==ve){t=n;break}}return t}const Ho=Io;function ei(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Qn(e,t,n,s,r){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:a,onEnter:d,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:g,onLeave:R,onAfterLeave:L,onLeaveCancelled:E,onBeforeAppear:Q,onAppear:U,onAfterAppear:P,onAppearCancelled:W}=t,M=String(e.key),J=ei(n,e),oe=(O,z)=>{O&&Fe(O,s,9,z)},pe=(O,z)=>{const te=z[1];oe(O,z),k(O)?O.every(_=>_.length<=1)&&te():O.length<=1&&te()},Te={mode:o,persisted:l,beforeEnter(O){let z=a;if(!n.isMounted)if(i)z=Q||a;else return;O[We]&&O[We](!0);const te=J[M];te&&mt(e,te)&&te.el[We]&&te.el[We](),oe(z,[O])},enter(O){let z=d,te=u,_=h;if(!n.isMounted)if(i)z=U||d,te=P||u,_=W||h;else return;let ee=!1;O[Ft]=Ue=>{ee||(ee=!0,Ue?oe(_,[O]):oe(te,[O]),Te.delayedLeave&&Te.delayedLeave(),O[Ft]=void 0)};const ue=O[Ft].bind(null,!1);z?pe(z,[O,ue]):ue()},leave(O,z){const te=String(e.key);if(O[Ft]&&O[Ft](!0),n.isUnmounting)return z();oe(g,[O]);let _=!1;O[We]=ue=>{_||(_=!0,z(),ue?oe(E,[O]):oe(L,[O]),O[We]=void 0,J[te]===e&&delete J[te])};const ee=O[We].bind(null,!1);J[te]=e,R?pe(R,[O,ee]):ee()},clone(O){const z=Qn(O,t,n,s,r);return r&&r(z),z}};return Te}function Vn(e){if(Mn(e))return e=ot(e),e.children=null,e}function Is(e){if(!Mn(e))return Xr(e.type)&&e.children?Qr(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&I(n.default))return n.default()}}function Gt(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Gt(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ti(e,t=!1,n){let s=[],r=0;for(let i=0;i<e.length;i++){let o=e[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ce?(o.patchFlag&128&&r++,s=s.concat(ti(o.children,t,l))):(t||o.type!==ve)&&s.push(l!=null?ot(o,{key:l}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function at(e,t){return I(e)?ie({name:e.name},t,{setup:e}):e}function ni(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Hs(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const gn=new WeakMap;function $t(e,t,n,s,r=!1){if(k(e)){e.forEach((E,Q)=>$t(E,t&&(k(t)?t[Q]:t),n,s,r));return}if(Wt(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&$t(e,t,n,s.component.subTree);return}const i=s.shapeFlag&4?Fn(s.component):s.el,o=r?null:i,{i:l,r:a}=e,d=t&&t.r,u=l.refs===j?l.refs={}:l.refs,h=l.setupState,g=G(h),R=h===j?vr:E=>Hs(u,E)?!1:V(g,E),L=(E,Q)=>!(Q&&Hs(u,Q));if(d!=null&&d!==a){if(Os(t),re(d))u[d]=null,R(d)&&(h[d]=null);else if(ye(d)){const E=t;L(d,E.k)&&(d.value=null),E.k&&(u[E.k]=null)}}if(I(a))Zt(a,l,12,[o,u]);else{const E=re(a),Q=ye(a);if(E||Q){const U=()=>{if(e.f){const P=E?R(a)?h[a]:u[a]:L()||!e.k?a.value:u[e.k];if(r)k(P)&&as(P,i);else if(k(P))P.includes(i)||P.push(i);else if(E)u[a]=[i],R(a)&&(h[a]=u[a]);else{const W=[i];L(a,e.k)&&(a.value=W),e.k&&(u[e.k]=W)}}else E?(u[a]=o,R(a)&&(h[a]=o)):Q&&(L(a,e.k)&&(a.value=o),e.k&&(u[e.k]=o))};if(o){const P=()=>{U(),gn.delete(e)};P.id=-1,gn.set(e,P),be(P,n)}else Os(e),U()}}}function Os(e){const t=gn.get(e);t&&(t.flags|=8,gn.delete(e))}Dn().requestIdleCallback;Dn().cancelIdleCallback;const Wt=e=>!!e.type.__asyncLoader,Mn=e=>e.type.__isKeepAlive;function Oo(e,t){si(e,"a",t)}function Po(e,t){si(e,"da",t)}function si(e,t,n=de){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(xn(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Mn(r.parent.vnode)&&Bo(s,t,n,r),r=r.parent}}function Bo(e,t,n,s){const r=xn(t,e,s,!0);oi(()=>{as(s[t],r)},n)}function xn(e,t,n=de,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{Ye();const l=Qt(n),a=Fe(t,n,e,o);return l(),Ze(),a});return s?r.unshift(i):r.push(i),i}}const et=e=>(t,n=de)=>{(!jt||e==="sp")&&xn(e,(...s)=>t(...s),n)},$o=et("bm"),ri=et("m"),Wo=et("bu"),Vo=et("u"),ii=et("bum"),oi=et("um"),No=et("sp"),Ko=et("rtg"),Uo=et("rtc");function qo(e,t=de){xn("ec",e,t)}const Go="components";function ae(e,t){return jo(Go,e,!0,t)||e}const zo=Symbol.for("v-ndc");function jo(e,t,n=!0,s=!1){const r=_e||de;if(r){const i=r.type;{const l=Fl(i,!1);if(l&&(l===t||l===xe(t)||l===Rn(xe(t))))return i}const o=Ps(r[e]||i[e],t)||Ps(r.appContext[e],t);return!o&&s?i:o}}function Ps(e,t){return e&&(e[t]||e[xe(t)]||e[Rn(xe(t))])}function mn(e,t,n,s){let r;const i=n,o=k(e);if(o||re(e)){const l=o&&Tt(e);let a=!1,d=!1;l&&(a=!ke(e),d=it(e),e=_n(e)),r=new Array(e.length);for(let u=0,h=e.length;u<h;u++)r[u]=t(a?d?Lt(Qe(e[u])):Qe(e[u]):e[u],u,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=t(l+1,l,void 0,i)}else if(K(e))if(e[Symbol.iterator])r=Array.from(e,(l,a)=>t(l,a,void 0,i));else{const l=Object.keys(e);r=new Array(l.length);for(let a=0,d=l.length;a<d;a++){const u=l[a];r[a]=t(e[u],u,a,i)}}else r=[];return r}const es=e=>e?wi(e)?Fn(e):es(e.parent):null,Vt=ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>es(e.parent),$root:e=>es(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ai(e),$forceUpdate:e=>e.f||(e.f=()=>{ys(e.update)}),$nextTick:e=>e.n||(e.n=Ro.bind(e.proxy)),$watch:e=>Eo.bind(e)}),Nn=(e,t)=>e!==j&&!e.__isScriptSetup&&V(e,t),Jo={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:a}=e;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(Nn(s,t))return o[t]=1,s[t];if(r!==j&&V(r,t))return o[t]=2,r[t];if(V(i,t))return o[t]=3,i[t];if(n!==j&&V(n,t))return o[t]=4,n[t];ts&&(o[t]=0)}}const d=Vt[t];let u,h;if(d)return t==="$attrs"&&fe(e.attrs,"get",""),d(e);if((u=l.__cssModules)&&(u=u[t]))return u;if(n!==j&&V(n,t))return o[t]=4,n[t];if(h=a.config.globalProperties,V(h,t))return h[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return Nn(r,t)?(r[t]=n,!0):s!==j&&V(s,t)?(s[t]=n,!0):V(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,props:i,type:o}},l){let a;return!!(n[l]||e!==j&&l[0]!=="$"&&V(e,l)||Nn(t,l)||V(i,l)||V(s,l)||V(Vt,l)||V(r.config.globalProperties,l)||(a=o.__cssModules)&&a[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:V(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Bs(e){return k(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ts=!0;function Xo(e){const t=ai(e),n=e.proxy,s=e.ctx;ts=!1,t.beforeCreate&&$s(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:l,provide:a,inject:d,created:u,beforeMount:h,mounted:g,beforeUpdate:R,updated:L,activated:E,deactivated:Q,beforeDestroy:U,beforeUnmount:P,destroyed:W,unmounted:M,render:J,renderTracked:oe,renderTriggered:pe,errorCaptured:Te,serverPrefetch:O,expose:z,inheritAttrs:te,components:_,directives:ee,filters:ue}=t;if(d&&Yo(d,s,null),o)for(const ne in o){const X=o[ne];I(X)&&(s[ne]=X.bind(n))}if(r){const ne=r.call(n,n);K(ne)&&(e.data=wn(ne))}if(ts=!0,i)for(const ne in i){const X=i[ne],ct=I(X)?X.bind(n,n):I(X.get)?X.get.bind(n,n):Ne,en=!I(X)&&I(X.set)?X.set.bind(n):Ne,ut=Hl({get:ct,set:en});Object.defineProperty(s,ne,{enumerable:!0,configurable:!0,get:()=>ut.value,set:Ie=>ut.value=Ie})}if(l)for(const ne in l)li(l[ne],s,n,ne);if(a){const ne=I(a)?a.call(n):a;Reflect.ownKeys(ne).forEach(X=>{Lo(X,ne[X])})}u&&$s(u,e,"c");function le(ne,X){k(X)?X.forEach(ct=>ne(ct.bind(n))):X&&ne(X.bind(n))}if(le($o,h),le(ri,g),le(Wo,R),le(Vo,L),le(Oo,E),le(Po,Q),le(qo,Te),le(Uo,oe),le(Ko,pe),le(ii,P),le(oi,M),le(No,O),k(z))if(z.length){const ne=e.exposed||(e.exposed={});z.forEach(X=>{Object.defineProperty(ne,X,{get:()=>n[X],set:ct=>n[X]=ct,enumerable:!0})})}else e.exposed||(e.exposed={});J&&e.render===Ne&&(e.render=J),te!=null&&(e.inheritAttrs=te),_&&(e.components=_),ee&&(e.directives=ee),O&&ni(e)}function Yo(e,t,n=Ne){k(e)&&(e=ns(e));for(const s in e){const r=e[s];let i;K(r)?"default"in r?i=ln(r.from||s,r.default,!0):i=ln(r.from||s):i=ln(r),ye(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function $s(e,t,n){Fe(k(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function li(e,t,n,s){let r=s.includes(".")?Jr(n,s):()=>n[s];if(re(e)){const i=t[e];I(i)&&Wn(r,i)}else if(I(e))Wn(r,e.bind(n));else if(K(e))if(k(e))e.forEach(i=>li(i,t,n,s));else{const i=I(e.handler)?e.handler.bind(n):t[e.handler];I(i)&&Wn(r,i,e)}}function ai(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,l=i.get(t);let a;return l?a=l:!r.length&&!n&&!s?a=t:(a={},r.length&&r.forEach(d=>vn(a,d,o,!0)),vn(a,t,o)),K(t)&&i.set(t,a),a}function vn(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&vn(e,i,n,!0),r&&r.forEach(o=>vn(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const l=Zo[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const Zo={data:Ws,props:Vs,emits:Vs,methods:Ht,computed:Ht,beforeCreate:ge,created:ge,beforeMount:ge,mounted:ge,beforeUpdate:ge,updated:ge,beforeDestroy:ge,beforeUnmount:ge,destroyed:ge,unmounted:ge,activated:ge,deactivated:ge,errorCaptured:ge,serverPrefetch:ge,components:Ht,directives:Ht,watch:el,provide:Ws,inject:Qo};function Ws(e,t){return t?e?function(){return ie(I(e)?e.call(this,this):e,I(t)?t.call(this,this):t)}:t:e}function Qo(e,t){return Ht(ns(e),ns(t))}function ns(e){if(k(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ge(e,t){return e?[...new Set([].concat(e,t))]:t}function Ht(e,t){return e?ie(Object.create(null),e,t):t}function Vs(e,t){return e?k(e)&&k(t)?[...new Set([...e,...t])]:ie(Object.create(null),Bs(e),Bs(t??{})):t}function el(e,t){if(!e)return t;if(!t)return e;const n=ie(Object.create(null),e);for(const s in t)n[s]=ge(e[s],t[s]);return n}function ci(){return{app:null,config:{isNativeTag:vr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tl=0;function nl(e,t){return function(s,r=null){I(s)||(s=ie({},s)),r!=null&&!K(r)&&(r=null);const i=ci(),o=new WeakSet,l=[];let a=!1;const d=i.app={_uid:tl++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Pl,get config(){return i.config},set config(u){},use(u,...h){return o.has(u)||(u&&I(u.install)?(o.add(u),u.install(d,...h)):I(u)&&(o.add(u),u(d,...h))),d},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),d},component(u,h){return h?(i.components[u]=h,d):i.components[u]},directive(u,h){return h?(i.directives[u]=h,d):i.directives[u]},mount(u,h,g){if(!a){const R=d._ceVNode||N(s,r);return R.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),e(R,u,g),a=!0,d._container=u,u.__vue_app__=d,Fn(R.component)}},onUnmount(u){l.push(u)},unmount(){a&&(Fe(l,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(u,h){return i.provides[u]=h,d},runWithContext(u){const h=wt;wt=d;try{return u()}finally{wt=h}}};return d}}let wt=null;const sl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${xe(t)}Modifiers`]||e[`${Ct(t)}Modifiers`];function rl(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||j;let r=n;const i=t.startsWith("update:"),o=i&&sl(s,t.slice(7));o&&(o.trim&&(r=n.map(u=>re(u)?u.trim():u)),o.number&&(r=n.map(us)));let l,a=s[l=Hn(t)]||s[l=Hn(xe(t))];!a&&i&&(a=s[l=Hn(Ct(t))]),a&&Fe(a,e,6,r);const d=s[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Fe(d,e,6,r)}}const il=new WeakMap;function ui(e,t,n=!1){const s=n?il:t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},l=!1;if(!I(e)){const a=d=>{const u=ui(d,t,!0);u&&(l=!0,ie(o,u))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!l?(K(e)&&s.set(e,null),null):(k(i)?i.forEach(a=>o[a]=null):ie(o,i),K(e)&&s.set(e,o),o)}function En(e,t){return!e||!bn(t)?!1:(t=t.slice(2).replace(/Once$/,""),V(e,t[0].toLowerCase()+t.slice(1))||V(e,Ct(t))||V(e,t))}function Ns(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:a,render:d,renderCache:u,props:h,data:g,setupState:R,ctx:L,inheritAttrs:E}=e,Q=pn(e);let U,P;try{if(n.shapeFlag&4){const M=r||s,J=M;U=Ve(d.call(J,M,u,h,R,g,L)),P=l}else{const M=t;U=Ve(M.length>1?M(h,{attrs:l,slots:o,emit:a}):M(h,null)),P=t.props?l:ol(l)}}catch(M){Nt.length=0,Ln(M,e,1),U=N(ve)}let W=U;if(P&&E!==!1){const M=Object.keys(P),{shapeFlag:J}=W;M.length&&J&7&&(i&&M.some(ls)&&(P=ll(P,i)),W=ot(W,P,!1,!0))}return n.dirs&&(W=ot(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&Gt(W,n.transition),U=W,pn(Q),U}const ol=e=>{let t;for(const n in e)(n==="class"||n==="style"||bn(n))&&((t||(t={}))[n]=e[n]);return t},ll=(e,t)=>{const n={};for(const s in e)(!ls(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function al(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:l,patchFlag:a}=t,d=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Ks(s,o,d):!!o;if(a&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const g=u[h];if(fi(o,s,g)&&!En(d,g))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Ks(s,o,d):!0:!!o;return!1}function Ks(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(fi(t,e,i)&&!En(n,i))return!0}return!1}function fi(e,t,n){const s=e[n],r=t[n];return n==="style"&&K(s)&&K(r)?!fs(s,r):s!==r}function cl({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const di={},hi=()=>Object.create(di),pi=e=>Object.getPrototypeOf(e)===di;function ul(e,t,n,s=!1){const r={},i=hi();e.propsDefaults=Object.create(null),gi(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:go(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function fl(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,l=G(r),[a]=e.propsOptions;let d=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let g=u[h];if(En(e.emitsOptions,g))continue;const R=t[g];if(a)if(V(i,g))R!==i[g]&&(i[g]=R,d=!0);else{const L=xe(g);r[L]=ss(a,l,L,R,e,!1)}else R!==i[g]&&(i[g]=R,d=!0)}}}else{gi(e,t,r,i)&&(d=!0);let u;for(const h in l)(!t||!V(t,h)&&((u=Ct(h))===h||!V(t,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=ss(a,l,h,void 0,e,!0)):delete r[h]);if(i!==l)for(const h in i)(!t||!V(t,h))&&(delete i[h],d=!0)}d&&Je(e.attrs,"set","")}function gi(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,l;if(t)for(let a in t){if(Ot(a))continue;const d=t[a];let u;r&&V(r,u=xe(a))?!i||!i.includes(u)?n[u]=d:(l||(l={}))[u]=d:En(e.emitsOptions,a)||(!(a in s)||d!==s[a])&&(s[a]=d,o=!0)}if(i){const a=G(n),d=l||j;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ss(r,a,h,d[h],e,!V(d,h))}}return o}function ss(e,t,n,s,r,i){const o=e[n];if(o!=null){const l=V(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&I(a)){const{propsDefaults:d}=r;if(n in d)s=d[n];else{const u=Qt(r);s=d[n]=a.call(null,t),u()}}else s=a;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===Ct(n))&&(s=!0))}return s}const dl=new WeakMap;function mi(e,t,n=!1){const s=n?dl:t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},l=[];let a=!1;if(!I(e)){const u=h=>{a=!0;const[g,R]=mi(h,t,!0);ie(o,g),R&&l.push(...R)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!a)return K(e)&&s.set(e,Rt),Rt;if(k(i))for(let u=0;u<i.length;u++){const h=xe(i[u]);Us(h)&&(o[h]=j)}else if(i)for(const u in i){const h=xe(u);if(Us(h)){const g=i[u],R=o[h]=k(g)||I(g)?{type:g}:ie({},g),L=R.type;let E=!1,Q=!0;if(k(L))for(let U=0;U<L.length;++U){const P=L[U],W=I(P)&&P.name;if(W==="Boolean"){E=!0;break}else W==="String"&&(Q=!1)}else E=I(L)&&L.name==="Boolean";R[0]=E,R[1]=Q,(E||V(R,"default"))&&l.push(h)}}const d=[o,l];return K(e)&&s.set(e,d),d}function Us(e){return e[0]!=="$"&&!Ot(e)}const Ts=e=>e==="_"||e==="_ctx"||e==="$stable",Cs=e=>k(e)?e.map(Ve):[Ve(e)],hl=(e,t,n)=>{if(t._n)return t;const s=zr((...r)=>Cs(t(...r)),n);return s._c=!1,s},vi=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Ts(r))continue;const i=e[r];if(I(i))t[r]=hl(r,i,s);else if(i!=null){const o=Cs(i);t[r]=()=>o}}},yi=(e,t)=>{const n=Cs(t);e.slots.default=()=>n},Ti=(e,t,n)=>{for(const s in t)(n||!Ts(s))&&(e[s]=t[s])},pl=(e,t,n)=>{const s=e.slots=hi();if(e.vnode.shapeFlag&32){const r=t._;r?(Ti(s,t,n),n&&br(s,"_",r,!0)):vi(t,s)}else t&&yi(e,t)},gl=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=j;if(s.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:Ti(r,t,n):(i=!t.$stable,vi(t,r)),o=t}else t&&(yi(e,t),o={default:1});if(i)for(const l in r)!Ts(l)&&o[l]==null&&delete r[l]},be=Cl;function ml(e){return vl(e)}function vl(e,t){const n=Dn();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:a,setText:d,setElementText:u,parentNode:h,nextSibling:g,setScopeId:R=Ne,insertStaticContent:L}=e,E=(c,f,p,T=null,m=null,v=null,A=void 0,S=null,C=!!f.dynamicChildren)=>{if(c===f)return;c&&!mt(c,f)&&(T=tn(c),Ie(c,m,v,!0),c=null),f.patchFlag===-2&&(C=!1,f.dynamicChildren=null);const{type:y,ref:x,shapeFlag:D}=f;switch(y){case kn:Q(c,f,p,T);break;case ve:U(c,f,p,T);break;case an:c==null&&P(f,p,T,A);break;case ce:_(c,f,p,T,m,v,A,S,C);break;default:D&1?J(c,f,p,T,m,v,A,S,C):D&6?ee(c,f,p,T,m,v,A,S,C):(D&64||D&128)&&y.process(c,f,p,T,m,v,A,S,C,xt)}x!=null&&m?$t(x,c&&c.ref,v,f||c,!f):x==null&&c&&c.ref!=null&&$t(c.ref,null,v,c,!0)},Q=(c,f,p,T)=>{if(c==null)s(f.el=l(f.children),p,T);else{const m=f.el=c.el;f.children!==c.children&&d(m,f.children)}},U=(c,f,p,T)=>{c==null?s(f.el=a(f.children||""),p,T):f.el=c.el},P=(c,f,p,T)=>{[c.el,c.anchor]=L(c.children,f,p,T,c.el,c.anchor)},W=({el:c,anchor:f},p,T)=>{let m;for(;c&&c!==f;)m=g(c),s(c,p,T),c=m;s(f,p,T)},M=({el:c,anchor:f})=>{let p;for(;c&&c!==f;)p=g(c),r(c),c=p;r(f)},J=(c,f,p,T,m,v,A,S,C)=>{if(f.type==="svg"?A="svg":f.type==="math"&&(A="mathml"),c==null)oe(f,p,T,m,v,A,S,C);else{const y=c.el&&c.el._isVueCE?c.el:null;try{y&&y._beginPatch(),O(c,f,m,v,A,S,C)}finally{y&&y._endPatch()}}},oe=(c,f,p,T,m,v,A,S)=>{let C,y;const{props:x,shapeFlag:D,transition:w,dirs:F}=c;if(C=c.el=o(c.type,v,x&&x.is,x),D&8?u(C,c.children):D&16&&Te(c.children,C,null,T,m,Kn(c,v),A,S),F&&ft(c,null,T,"created"),pe(C,c,c.scopeId,A,T),x){for(const Y in x)Y!=="value"&&!Ot(Y)&&i(C,Y,null,x[Y],v,T);"value"in x&&i(C,"value",null,x.value,v),(y=x.onVnodeBeforeMount)&&Be(y,T,c)}F&&ft(c,null,T,"beforeMount");const $=yl(m,w);$&&w.beforeEnter(C),s(C,f,p),((y=x&&x.onVnodeMounted)||$||F)&&be(()=>{y&&Be(y,T,c),$&&w.enter(C),F&&ft(c,null,T,"mounted")},m)},pe=(c,f,p,T,m)=>{if(p&&R(c,p),T)for(let v=0;v<T.length;v++)R(c,T[v]);if(m){let v=m.subTree;if(f===v||Ai(v.type)&&(v.ssContent===f||v.ssFallback===f)){const A=m.vnode;pe(c,A,A.scopeId,A.slotScopeIds,m.parent)}}},Te=(c,f,p,T,m,v,A,S,C=0)=>{for(let y=C;y<c.length;y++){const x=c[y]=S?je(c[y]):Ve(c[y]);E(null,x,f,p,T,m,v,A,S)}},O=(c,f,p,T,m,v,A)=>{const S=f.el=c.el;let{patchFlag:C,dynamicChildren:y,dirs:x}=f;C|=c.patchFlag&16;const D=c.props||j,w=f.props||j;let F;if(p&&dt(p,!1),(F=w.onVnodeBeforeUpdate)&&Be(F,p,f,c),x&&ft(f,c,p,"beforeUpdate"),p&&dt(p,!0),(D.innerHTML&&w.innerHTML==null||D.textContent&&w.textContent==null)&&u(S,""),y?z(c.dynamicChildren,y,S,p,T,Kn(f,m),v):A||X(c,f,S,null,p,T,Kn(f,m),v,!1),C>0){if(C&16)te(S,D,w,p,m);else if(C&2&&D.class!==w.class&&i(S,"class",null,w.class,m),C&4&&i(S,"style",D.style,w.style,m),C&8){const $=f.dynamicProps;for(let Y=0;Y<$.length;Y++){const q=$[Y],Ce=D[q],Se=w[q];(Se!==Ce||q==="value")&&i(S,q,Ce,Se,m,p)}}C&1&&c.children!==f.children&&u(S,f.children)}else!A&&y==null&&te(S,D,w,p,m);((F=w.onVnodeUpdated)||x)&&be(()=>{F&&Be(F,p,f,c),x&&ft(f,c,p,"updated")},T)},z=(c,f,p,T,m,v,A)=>{for(let S=0;S<f.length;S++){const C=c[S],y=f[S],x=C.el&&(C.type===ce||!mt(C,y)||C.shapeFlag&198)?h(C.el):p;E(C,y,x,null,T,m,v,A,!0)}},te=(c,f,p,T,m)=>{if(f!==p){if(f!==j)for(const v in f)!Ot(v)&&!(v in p)&&i(c,v,f[v],null,m,T);for(const v in p){if(Ot(v))continue;const A=p[v],S=f[v];A!==S&&v!=="value"&&i(c,v,S,A,m,T)}"value"in p&&i(c,"value",f.value,p.value,m)}},_=(c,f,p,T,m,v,A,S,C)=>{const y=f.el=c?c.el:l(""),x=f.anchor=c?c.anchor:l("");let{patchFlag:D,dynamicChildren:w,slotScopeIds:F}=f;F&&(S=S?S.concat(F):F),c==null?(s(y,p,T),s(x,p,T),Te(f.children||[],p,x,m,v,A,S,C)):D>0&&D&64&&w&&c.dynamicChildren&&c.dynamicChildren.length===w.length?(z(c.dynamicChildren,w,p,m,v,A,S),(f.key!=null||m&&f===m.subTree)&&Ci(c,f,!0)):X(c,f,p,x,m,v,A,S,C)},ee=(c,f,p,T,m,v,A,S,C)=>{f.slotScopeIds=S,c==null?f.shapeFlag&512?m.ctx.activate(f,p,T,A,C):ue(f,p,T,m,v,A,C):Ue(c,f,C)},ue=(c,f,p,T,m,v,A)=>{const S=c.component=Ll(c,T,m);if(Mn(c)&&(S.ctx.renderer=xt),Ml(S,!1,A),S.asyncDep){if(m&&m.registerDep(S,le,A),!c.el){const C=S.subTree=N(ve);U(null,C,f,p),c.placeholder=C.el}}else le(S,c,f,p,m,v,A)},Ue=(c,f,p)=>{const T=f.component=c.component;if(al(c,f,p))if(T.asyncDep&&!T.asyncResolved){ne(T,f,p);return}else T.next=f,T.update();else f.el=c.el,T.vnode=f},le=(c,f,p,T,m,v,A)=>{const S=()=>{if(c.isMounted){let{next:D,bu:w,u:F,parent:$,vnode:Y}=c;{const Oe=Si(c);if(Oe){D&&(D.el=Y.el,ne(c,D,A)),Oe.asyncDep.then(()=>{be(()=>{c.isUnmounted||y()},m)});return}}let q=D,Ce;dt(c,!1),D?(D.el=Y.el,ne(c,D,A)):D=Y,w&&on(w),(Ce=D.props&&D.props.onVnodeBeforeUpdate)&&Be(Ce,$,D,Y),dt(c,!0);const Se=Ns(c),He=c.subTree;c.subTree=Se,E(He,Se,h(He.el),tn(He),c,m,v),D.el=Se.el,q===null&&cl(c,Se.el),F&&be(F,m),(Ce=D.props&&D.props.onVnodeUpdated)&&be(()=>Be(Ce,$,D,Y),m)}else{let D;const{el:w,props:F}=f,{bm:$,m:Y,parent:q,root:Ce,type:Se}=c,He=Wt(f);dt(c,!1),$&&on($),!He&&(D=F&&F.onVnodeBeforeMount)&&Be(D,q,f),dt(c,!0);{Ce.ce&&Ce.ce._hasShadowRoot()&&Ce.ce._injectChildStyle(Se);const Oe=c.subTree=Ns(c);E(null,Oe,p,T,c,m,v),f.el=Oe.el}if(Y&&be(Y,m),!He&&(D=F&&F.onVnodeMounted)){const Oe=f;be(()=>Be(D,q,Oe),m)}(f.shapeFlag&256||q&&Wt(q.vnode)&&q.vnode.shapeFlag&256)&&c.a&&be(c.a,m),c.isMounted=!0,f=p=T=null}};c.scope.on();const C=c.effect=new _r(S);c.scope.off();const y=c.update=C.run.bind(C),x=c.job=C.runIfDirty.bind(C);x.i=c,x.id=c.uid,C.scheduler=()=>ys(x),dt(c,!0),y()},ne=(c,f,p)=>{f.component=c;const T=c.vnode.props;c.vnode=f,c.next=null,fl(c,f.props,T,p),gl(c,f.children,p),Ye(),Fs(c),Ze()},X=(c,f,p,T,m,v,A,S,C=!1)=>{const y=c&&c.children,x=c?c.shapeFlag:0,D=f.children,{patchFlag:w,shapeFlag:F}=f;if(w>0){if(w&128){en(y,D,p,T,m,v,A,S,C);return}else if(w&256){ct(y,D,p,T,m,v,A,S,C);return}}F&8?(x&16&&Mt(y,m,v),D!==y&&u(p,D)):x&16?F&16?en(y,D,p,T,m,v,A,S,C):Mt(y,m,v,!0):(x&8&&u(p,""),F&16&&Te(D,p,T,m,v,A,S,C))},ct=(c,f,p,T,m,v,A,S,C)=>{c=c||Rt,f=f||Rt;const y=c.length,x=f.length,D=Math.min(y,x);let w;for(w=0;w<D;w++){const F=f[w]=C?je(f[w]):Ve(f[w]);E(c[w],F,p,null,m,v,A,S,C)}y>x?Mt(c,m,v,!0,!1,D):Te(f,p,T,m,v,A,S,C,D)},en=(c,f,p,T,m,v,A,S,C)=>{let y=0;const x=f.length;let D=c.length-1,w=x-1;for(;y<=D&&y<=w;){const F=c[y],$=f[y]=C?je(f[y]):Ve(f[y]);if(mt(F,$))E(F,$,p,null,m,v,A,S,C);else break;y++}for(;y<=D&&y<=w;){const F=c[D],$=f[w]=C?je(f[w]):Ve(f[w]);if(mt(F,$))E(F,$,p,null,m,v,A,S,C);else break;D--,w--}if(y>D){if(y<=w){const F=w+1,$=F<x?f[F].el:T;for(;y<=w;)E(null,f[y]=C?je(f[y]):Ve(f[y]),p,$,m,v,A,S,C),y++}}else if(y>w)for(;y<=D;)Ie(c[y],m,v,!0),y++;else{const F=y,$=y,Y=new Map;for(y=$;y<=w;y++){const De=f[y]=C?je(f[y]):Ve(f[y]);De.key!=null&&Y.set(De.key,y)}let q,Ce=0;const Se=w-$+1;let He=!1,Oe=0;const Et=new Array(Se);for(y=0;y<Se;y++)Et[y]=0;for(y=F;y<=D;y++){const De=c[y];if(Ce>=Se){Ie(De,m,v,!0);continue}let Pe;if(De.key!=null)Pe=Y.get(De.key);else for(q=$;q<=w;q++)if(Et[q-$]===0&&mt(De,f[q])){Pe=q;break}Pe===void 0?Ie(De,m,v,!0):(Et[Pe-$]=y+1,Pe>=Oe?Oe=Pe:He=!0,E(De,f[Pe],p,null,m,v,A,S,C),Ce++)}const _s=He?Tl(Et):Rt;for(q=_s.length-1,y=Se-1;y>=0;y--){const De=$+y,Pe=f[De],ws=f[De+1],Ls=De+1<x?ws.el||bi(ws):T;Et[y]===0?E(null,Pe,p,Ls,m,v,A,S,C):He&&(q<0||y!==_s[q]?ut(Pe,p,Ls,2):q--)}}},ut=(c,f,p,T,m=null)=>{const{el:v,type:A,transition:S,children:C,shapeFlag:y}=c;if(y&6){ut(c.component.subTree,f,p,T);return}if(y&128){c.suspense.move(f,p,T);return}if(y&64){A.move(c,f,p,xt);return}if(A===ce){s(v,f,p);for(let D=0;D<C.length;D++)ut(C[D],f,p,T);s(c.anchor,f,p);return}if(A===an){W(c,f,p);return}if(T!==2&&y&1&&S)if(T===0)S.beforeEnter(v),s(v,f,p),be(()=>S.enter(v),m);else{const{leave:D,delayLeave:w,afterLeave:F}=S,$=()=>{c.ctx.isUnmounted?r(v):s(v,f,p)},Y=()=>{v._isLeaving&&v[We](!0),D(v,()=>{$(),F&&F()})};w?w(v,$,Y):Y()}else s(v,f,p)},Ie=(c,f,p,T=!1,m=!1)=>{const{type:v,props:A,ref:S,children:C,dynamicChildren:y,shapeFlag:x,patchFlag:D,dirs:w,cacheIndex:F}=c;if(D===-2&&(m=!1),S!=null&&(Ye(),$t(S,null,p,c,!0),Ze()),F!=null&&(f.renderCache[F]=void 0),x&256){f.ctx.deactivate(c);return}const $=x&1&&w,Y=!Wt(c);let q;if(Y&&(q=A&&A.onVnodeBeforeUnmount)&&Be(q,f,c),x&6)Hi(c.component,p,T);else{if(x&128){c.suspense.unmount(p,T);return}$&&ft(c,null,f,"beforeUnmount"),x&64?c.type.remove(c,f,p,xt,T):y&&!y.hasOnce&&(v!==ce||D>0&&D&64)?Mt(y,f,p,!1,!0):(v===ce&&D&384||!m&&x&16)&&Mt(C,f,p),T&&Rs(c)}(Y&&(q=A&&A.onVnodeUnmounted)||$)&&be(()=>{q&&Be(q,f,c),$&&ft(c,null,f,"unmounted")},p)},Rs=c=>{const{type:f,el:p,anchor:T,transition:m}=c;if(f===ce){Ii(p,T);return}if(f===an){M(c);return}const v=()=>{r(p),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(c.shapeFlag&1&&m&&!m.persisted){const{leave:A,delayLeave:S}=m,C=()=>A(p,v);S?S(c.el,v,C):C()}else v()},Ii=(c,f)=>{let p;for(;c!==f;)p=g(c),r(c),c=p;r(f)},Hi=(c,f,p)=>{const{bum:T,scope:m,job:v,subTree:A,um:S,m:C,a:y}=c;qs(C),qs(y),T&&on(T),m.stop(),v&&(v.flags|=8,Ie(A,c,f,p)),S&&be(S,f),be(()=>{c.isUnmounted=!0},f)},Mt=(c,f,p,T=!1,m=!1,v=0)=>{for(let A=v;A<c.length;A++)Ie(c[A],f,p,T,m)},tn=c=>{if(c.shapeFlag&6)return tn(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const f=g(c.anchor||c.el),p=f&&f[ko];return p?g(p):f};let In=!1;const Ds=(c,f,p)=>{let T;c==null?f._vnode&&(Ie(f._vnode,null,null,!0),T=f._vnode.component):E(f._vnode||null,c,f,null,null,null,p),f._vnode=c,In||(In=!0,Fs(T),Ur(),In=!1)},xt={p:E,um:Ie,m:ut,r:Rs,mt:ue,mc:Te,pc:X,pbc:z,n:tn,o:e};return{render:Ds,hydrate:void 0,createApp:nl(Ds)}}function Kn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function dt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function yl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ci(e,t,n=!1){const s=e.children,r=t.children;if(k(s)&&k(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=je(r[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Ci(o,l)),l.type===kn&&(l.patchFlag===-1&&(l=r[i]=je(l)),l.el=o.el),l.type===ve&&!l.el&&(l.el=o.el)}}function Tl(e){const t=e.slice(),n=[0];let s,r,i,o,l;const a=e.length;for(s=0;s<a;s++){const d=e[s];if(d!==0){if(r=n[n.length-1],e[r]<d){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,e[n[l]]<d?i=l+1:o=l;d<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Si(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Si(t)}function qs(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function bi(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?bi(t.subTree):null}const Ai=e=>e.__isSuspense;function Cl(e,t){t&&t.pendingBranch?k(e)?t.effects.push(...e):t.effects.push(e):_o(e)}const ce=Symbol.for("v-fgt"),kn=Symbol.for("v-txt"),ve=Symbol.for("v-cmt"),an=Symbol.for("v-stc"),Nt=[];let we=null;function H(e=!1){Nt.push(we=e?null:[])}function Sl(){Nt.pop(),we=Nt[Nt.length-1]||null}let zt=1;function yn(e,t=!1){zt+=e,e<0&&we&&t&&(we.hasOnce=!0)}function Ri(e){return e.dynamicChildren=zt>0?we||Rt:null,Sl(),zt>0&&we&&we.push(e),e}function B(e,t,n,s,r,i){return Ri(b(e,t,n,s,r,i,!0))}function Tn(e,t,n,s,r){return Ri(N(e,t,n,s,r,!0))}function Cn(e){return e?e.__v_isVNode===!0:!1}function mt(e,t){return e.type===t.type&&e.key===t.key}const Di=({key:e})=>e??null,cn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?re(e)||ye(e)||I(e)?{i:_e,r:e,k:t,f:!!n}:e:null);function b(e,t=null,n=null,s=0,r=null,i=e===ce?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Di(t),ref:t&&cn(t),scopeId:Gr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:_e};return l?(Ss(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=re(n)?8:16),zt>0&&!o&&we&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&we.push(a),a}const N=bl;function bl(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===zo)&&(e=ve),Cn(e)){const l=ot(e,t,!0);return n&&Ss(l,n),zt>0&&!i&&we&&(l.shapeFlag&6?we[we.indexOf(e)]=l:we.push(l)),l.patchFlag=-2,l}if(Il(e)&&(e=e.__vccOpts),t){t=Al(t);let{class:l,style:a}=t;l&&!re(l)&&(t.class=rt(l)),K(a)&&(vs(a)&&!k(a)&&(a=ie({},a)),t.style=Yt(a))}const o=re(e)?1:Ai(e)?128:Xr(e)?64:K(e)?4:I(e)?2:0;return b(e,t,n,s,r,o,i,!0)}function Al(e){return e?vs(e)||pi(e)?ie({},e):e:null}function ot(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:a}=e,d=t?Dl(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Di(d),ref:t&&t.ref?n&&i?k(i)?i.concat(cn(t)):[i,cn(t)]:cn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ce?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ot(e.ssContent),ssFallback:e.ssFallback&&ot(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&s&&Gt(u,a.clone(u)),u}function lt(e=" ",t=0){return N(kn,null,e,t)}function Rl(e,t){const n=N(an,null,e);return n.staticCount=t,n}function Me(e="",t=!1){return t?(H(),Tn(ve,null,e)):N(ve,null,e)}function Ve(e){return e==null||typeof e=="boolean"?N(ve):k(e)?N(ce,null,e.slice()):Cn(e)?je(e):N(kn,null,String(e))}function je(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ot(e)}function Ss(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(k(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Ss(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!pi(t)?t._ctx=_e:r===3&&_e&&(_e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else I(t)?(t={default:t,_ctx:_e},n=32):(t=String(t),s&64?(n=16,t=[lt(t)]):n=8);e.children=t,e.shapeFlag|=n}function Dl(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=rt([t.class,s.class]));else if(r==="style")t.style=Yt([t.style,s.style]);else if(bn(r)){const i=t[r],o=s[r];o&&i!==o&&!(k(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function Be(e,t,n,s=null){Fe(e,t,7,[n,s])}const _l=ci();let wl=0;function Ll(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||_l,i={uid:wl++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ji(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mi(s,r),emitsOptions:ui(s,r),emit:null,emitted:null,propsDefaults:j,inheritAttrs:s.inheritAttrs,ctx:j,data:j,props:j,attrs:j,slots:j,refs:j,setupState:j,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=rl.bind(null,i),e.ce&&e.ce(i),i}let de=null;const _i=()=>de||_e;let Sn,rs;{const e=Dn(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Sn=t("__VUE_INSTANCE_SETTERS__",n=>de=n),rs=t("__VUE_SSR_SETTERS__",n=>jt=n)}const Qt=e=>{const t=de;return Sn(e),e.scope.on(),()=>{e.scope.off(),Sn(t)}},Gs=()=>{de&&de.scope.off(),Sn(null)};function wi(e){return e.vnode.shapeFlag&4}let jt=!1;function Ml(e,t=!1,n=!1){t&&rs(t);const{props:s,children:r}=e.vnode,i=wi(e);ul(e,s,i,t),pl(e,r,n||t);const o=i?xl(e,t):void 0;return t&&rs(!1),o}function xl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Jo);const{setup:s}=n;if(s){Ye();const r=e.setupContext=s.length>1?kl(e):null,i=Qt(e),o=Zt(s,e,0,[e.props,r]),l=Tr(o);if(Ze(),i(),(l||e.sp)&&!Wt(e)&&ni(e),l){if(o.then(Gs,Gs),t)return o.then(a=>{zs(e,a)}).catch(a=>{Ln(a,e,0)});e.asyncDep=o}else zs(e,o)}else Li(e)}function zs(e,t,n){I(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:K(t)&&(e.setupState=Vr(t)),Li(e)}function Li(e,t,n){const s=e.type;e.render||(e.render=s.render||Ne);{const r=Qt(e);Ye();try{Xo(e)}finally{Ze(),r()}}}const El={get(e,t){return fe(e,"get",""),e[t]}};function kl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,El),slots:e.slots,emit:e.emit,expose:t}}function Fn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Vr(mo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Vt)return Vt[n](e)},has(t,n){return n in t||n in Vt}})):e.proxy}function Fl(e,t=!0){return I(e)?e.displayName||e.name:e.name||t&&e.__name}function Il(e){return I(e)&&"__vccOpts"in e}const Hl=(e,t)=>Co(e,t,jt);function Ol(e,t,n){try{yn(-1);const s=arguments.length;return s===2?K(t)&&!k(t)?Cn(t)?N(e,null,[t]):N(e,t):N(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Cn(n)&&(n=[n]),N(e,t,n))}finally{yn(1)}}const Pl="3.5.28";let is;const js=typeof window<"u"&&window.trustedTypes;if(js)try{is=js.createPolicy("vue",{createHTML:e=>e})}catch{}const Mi=is?e=>is.createHTML(e):e=>e,Bl="http://www.w3.org/2000/svg",$l="http://www.w3.org/1998/Math/MathML",ze=typeof document<"u"?document:null,Js=ze&&ze.createElement("template"),Wl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?ze.createElementNS(Bl,e):t==="mathml"?ze.createElementNS($l,e):n?ze.createElement(e,{is:n}):ze.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>ze.createTextNode(e),createComment:e=>ze.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ze.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Js.innerHTML=Mi(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=Js.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},tt="transition",It="animation",Jt=Symbol("_vtc"),xi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Vl=ie({},Yr,xi),Nl=e=>(e.displayName="Transition",e.props=Vl,e),Kl=Nl((e,{slots:t})=>Ol(Ho,Ul(e),t)),ht=(e,t=[])=>{k(e)?e.forEach(n=>n(...t)):e&&e(...t)},Xs=e=>e?k(e)?e.some(t=>t.length>1):e.length>1:!1;function Ul(e){const t={};for(const _ in e)_ in xi||(t[_]=e[_]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:d=o,appearToClass:u=l,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:R=`${n}-leave-to`}=e,L=ql(r),E=L&&L[0],Q=L&&L[1],{onBeforeEnter:U,onEnter:P,onEnterCancelled:W,onLeave:M,onLeaveCancelled:J,onBeforeAppear:oe=U,onAppear:pe=P,onAppearCancelled:Te=W}=t,O=(_,ee,ue,Ue)=>{_._enterCancelled=Ue,pt(_,ee?u:l),pt(_,ee?d:o),ue&&ue()},z=(_,ee)=>{_._isLeaving=!1,pt(_,h),pt(_,R),pt(_,g),ee&&ee()},te=_=>(ee,ue)=>{const Ue=_?pe:P,le=()=>O(ee,_,ue);ht(Ue,[ee,le]),Ys(()=>{pt(ee,_?a:i),Ge(ee,_?u:l),Xs(Ue)||Zs(ee,s,E,le)})};return ie(t,{onBeforeEnter(_){ht(U,[_]),Ge(_,i),Ge(_,o)},onBeforeAppear(_){ht(oe,[_]),Ge(_,a),Ge(_,d)},onEnter:te(!1),onAppear:te(!0),onLeave(_,ee){_._isLeaving=!0;const ue=()=>z(_,ee);Ge(_,h),_._enterCancelled?(Ge(_,g),tr(_)):(tr(_),Ge(_,g)),Ys(()=>{_._isLeaving&&(pt(_,h),Ge(_,R),Xs(M)||Zs(_,s,Q,ue))}),ht(M,[_,ue])},onEnterCancelled(_){O(_,!1,void 0,!0),ht(W,[_])},onAppearCancelled(_){O(_,!0,void 0,!0),ht(Te,[_])},onLeaveCancelled(_){z(_),ht(J,[_])}})}function ql(e){if(e==null)return null;if(K(e))return[Un(e.enter),Un(e.leave)];{const t=Un(e);return[t,t]}}function Un(e){return Wi(e)}function Ge(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Jt]||(e[Jt]=new Set)).add(t)}function pt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[Jt];n&&(n.delete(t),n.size||(e[Jt]=void 0))}function Ys(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Gl=0;function Zs(e,t,n,s){const r=e._endId=++Gl,i=()=>{r===e._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:a}=zl(e,t);if(!o)return s();const d=o+"end";let u=0;const h=()=>{e.removeEventListener(d,g),i()},g=R=>{R.target===e&&++u>=a&&h()};setTimeout(()=>{u<a&&h()},l+1),e.addEventListener(d,g)}function zl(e,t){const n=window.getComputedStyle(e),s=L=>(n[L]||"").split(", "),r=s(`${tt}Delay`),i=s(`${tt}Duration`),o=Qs(r,i),l=s(`${It}Delay`),a=s(`${It}Duration`),d=Qs(l,a);let u=null,h=0,g=0;t===tt?o>0&&(u=tt,h=o,g=i.length):t===It?d>0&&(u=It,h=d,g=a.length):(h=Math.max(o,d),u=h>0?o>d?tt:It:null,g=u?u===tt?i.length:a.length:0);const R=u===tt&&/\b(?:transform|all)(?:,|$)/.test(s(`${tt}Property`).toString());return{type:u,timeout:h,propCount:g,hasTransform:R}}function Qs(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>er(n)+er(e[s])))}function er(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function tr(e){return(e?e.ownerDocument:document).body.offsetHeight}function jl(e,t,n){const s=e[Jt];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const nr=Symbol("_vod"),Jl=Symbol("_vsh"),Xl=Symbol(""),Yl=/(?:^|;)\s*display\s*:/;function Zl(e,t,n){const s=e.style,r=re(n);let i=!1;if(n&&!r){if(t)if(re(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&un(s,l,"")}else for(const o in t)n[o]==null&&un(s,o,"");for(const o in n)o==="display"&&(i=!0),un(s,o,n[o])}else if(r){if(t!==n){const o=s[Xl];o&&(n+=";"+o),s.cssText=n,i=Yl.test(n)}}else t&&e.removeAttribute("style");nr in e&&(e[nr]=i?s.display:"",e[Jl]&&(s.display="none"))}const sr=/\s*!important$/;function un(e,t,n){if(k(n))n.forEach(s=>un(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Ql(e,t);sr.test(n)?e.setProperty(Ct(s),n.replace(sr,""),"important"):e[s]=n}}const rr=["Webkit","Moz","ms"],qn={};function Ql(e,t){const n=qn[t];if(n)return n;let s=xe(t);if(s!=="filter"&&s in e)return qn[t]=s;s=Rn(s);for(let r=0;r<rr.length;r++){const i=rr[r]+s;if(i in e)return qn[t]=i}return t}const ir="http://www.w3.org/1999/xlink";function or(e,t,n,s,r,i=Gi(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ir,t.slice(6,t.length)):e.setAttributeNS(ir,t,n):n==null||i&&!Ar(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Ke(n)?String(n):n)}function lr(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Mi(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ar(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(r||t)}function At(e,t,n,s){e.addEventListener(t,n,s)}function ea(e,t,n,s){e.removeEventListener(t,n,s)}const ar=Symbol("_vei");function ta(e,t,n,s,r=null){const i=e[ar]||(e[ar]={}),o=i[t];if(s&&o)o.value=s;else{const[l,a]=na(t);if(s){const d=i[t]=ia(s,r);At(e,l,d,a)}else o&&(ea(e,l,o,a),i[t]=void 0)}}const cr=/(?:Once|Passive|Capture)$/;function na(e){let t;if(cr.test(e)){t={};let s;for(;s=e.match(cr);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ct(e.slice(2)),t]}let Gn=0;const sa=Promise.resolve(),ra=()=>Gn||(sa.then(()=>Gn=0),Gn=Date.now());function ia(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Fe(oa(s,n.value),t,5,[s])};return n.value=e,n.attached=ra(),n}function oa(e,t){if(k(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const ur=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,la=(e,t,n,s,r,i)=>{const o=r==="svg";t==="class"?jl(e,s,o):t==="style"?Zl(e,n,s):bn(t)?ls(t)||ta(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):aa(e,t,s,o))?(lr(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&or(e,t,s,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!re(s))?lr(e,xe(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),or(e,t,s,o))};function aa(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&ur(t)&&I(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ur(t)&&re(n)?!1:t in e}const fr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return k(t)?n=>on(t,n):t};function ca(e){e.target.composing=!0}function dr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const zn=Symbol("_assign");function hr(e,t,n){return t&&(e=e.trim()),n&&(e=us(e)),e}const ua={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e[zn]=fr(r);const i=s||r.props&&r.props.type==="number";At(e,t?"change":"input",o=>{o.target.composing||e[zn](hr(e.value,n,i))}),(n||i)&&At(e,"change",()=>{e.value=hr(e.value,n,i)}),t||(At(e,"compositionstart",ca),At(e,"compositionend",dr),At(e,"change",dr))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(e[zn]=fr(o),e.composing)return;const l=(i||e.type==="number")&&!/^0\d/.test(e.value)?us(e.value):e.value,a=t??"";l!==a&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||r&&e.value.trim()===a)||(e.value=a))}},fa=["ctrl","shift","alt","meta"],da={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>fa.some(n=>e[`${n}Key`]&&!t.includes(n))},bs=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=((r,...i)=>{for(let o=0;o<t.length;o++){const l=da[t[o]];if(l&&l(r,t))return}return e(r,...i)}))},ha=ie({patchProp:la},Wl);let pr;function pa(){return pr||(pr=ml(ha))}const ga=((...e)=>{const t=pa().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=va(s);if(!r)return;const i=t._component;!I(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,ma(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t});function ma(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function va(e){return re(e)?document.querySelector(e):e}var fn=(e=>(e[e.COMMON=1]="COMMON",e[e.SEMIRARE=2]="SEMIRARE",e[e.RARE=3]="RARE",e))(fn||{});const Ei=[{name:"El",tier:1},{name:"Eld",tier:1},{name:"Tir",tier:1},{name:"Nef",tier:1},{name:"Eth",tier:1},{name:"Ith",tier:1},{name:"Tal",tier:1},{name:"Ral",tier:1},{name:"Ort",tier:1},{name:"Thul",tier:1},{name:"Amn",tier:1},{name:"Sol",tier:2},{name:"Shael",tier:2},{name:"Dol",tier:2},{name:"Hel",tier:2},{name:"Io",tier:2},{name:"Lum",tier:2},{name:"Ko",tier:2},{name:"Fal",tier:2},{name:"Lem",tier:2},{name:"Pul",tier:2},{name:"Um",tier:2},{name:"Mal",tier:3},{name:"Ist",tier:3},{name:"Gul",tier:3},{name:"Vex",tier:3},{name:"Ohm",tier:3},{name:"Lo",tier:3},{name:"Sur",tier:3},{name:"Ber",tier:3},{name:"Jah",tier:3},{name:"Cham",tier:3},{name:"Zod",tier:3}];function ya(){return Ei.map(e=>e.name)}const gr="runewizard",mr="2026.03.01",se={state:wn({haveRunes:[],pinned:new Set,updateRead:""}),storage:null,initialize(){this.storage=window.localStorage,se.reset()},clearRunes(){this.setRunes(ya(),!1)},getRunes(){const e=[];for(const t of Object.keys(this.state.haveRunes))this.state.haveRunes[t]&&e.push(t);return e},setRunes(e,t=!0){for(const n of e)this.state.haveRunes[n]=t},hasRune(e){return this.state.haveRunes[e]||!1},reset(){this.clearRunes()},getPinned(){return Array.from(this.state.pinned.values())},isPinned(e){return this.state.pinned.has(e)},setPinned(e,t=!0){const n=t?"add":"delete";e.forEach(s=>{this.state.pinned[n](s)})},isUpdateNew(){return this.state.updateRead!==mr},setUpdateRead(){this.state.updateRead=mr},loadState(){if(!this.storage)return;const e=this.storage.getItem(gr);if(!e)return;let t;try{t=JSON.parse(e)}catch{return}this.setRunes(t.selectedRunes),this.setPinned(t.pinnedRunewords||[]),this.state.updateRead=t.updateRead||""},saveState(){let e="";if(!this.storage)return;const t={selectedRunes:this.getRunes(),pinnedRunewords:this.getPinned(),updateRead:this.state.updateRead};try{e=JSON.stringify(t)}catch{}this.storage.setItem(gr,e)}},Ta={class:"markdown-body"},Ca={__name:"HelpText",setup(e,{expose:t}){return t({frontmatter:{}}),(s,r)=>(H(),B("div",Ta,[...r[0]||(r[0]=[Rl('<h2>What is it?</h2><p>The Runewizard lets you check easily what runewords you can make with the runes you have found.</p><p>Click on the runes to mark which ones you have found. The available runewords will be highlighted automatically.</p><p>The table can be sorted : try clicking on the table headings, you may find it useful!</p><h2>Runes</h2><p>The runes are listed in order of rarity, from top to bottom, and left to right. Each vertical group of rune represents roughly <strong>Common</strong>, <strong>Semi-Rare</strong>, and <strong>Extremely Rare</strong> runes. Note that the order is consistent with the <a href="http://classic.battle.net/diablo2exp/items/cube.shtml">rune upgrade formulas</a> for the Horadric Cube. For example: 3 x Tal = 1 x Ral rune.</p><h2>Runewords</h2><p><strong>Ladder-only runewords</strong> have a small <span class="rw-Md-ladder">L</span> icon next to the name.</p><p><strong>New runewords</strong> added by Diablo II Resurrected are easily identifiable with their colored tags: <span class="rw-Table-tdTitlePatch patch-2-4">2.4</span><span class="rw-Table-tdTitlePatch patch-2-6">2.6</span><span class="rw-Table-tdTitlePatch patch-3-0">3.0</span></p><p>Pay special attention to <span class="rw-Md-note">Note!</span> for important information.</p><h2>Note about storage</h2><p>Your selection of runes is saved in the browser’s <em>local storage</em>. Keep in mind that manually clearing your browser cache may reset the selected runes.</p>',12)])]))}},Sa=at({name:"HelpBox",components:{HelpText:Ca}}),he=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},ba={class:"rw-Help text-md"};function Aa(e,t,n,s,r,i){const o=ae("HelpText");return H(),B("div",ba,[N(o,{class:""})])}const Ra=he(Sa,[["render",Aa]]),Da={name:"PhChatsBold"},_a={width:"1em",height:"1em",viewBox:"0 0 256 256"};function wa(e,t,n,s,r,i){return H(),B("svg",_a,[...t[0]||(t[0]=[b("path",{d:"M236 96a20.023 20.023 0 0 0-20-20h-27.999V48a20.023 20.023 0 0 0-20-20h-128a20.023 20.023 0 0 0-20 20v128a12 12 0 0 0 19.544 9.332L68 162.328V184a20.023 20.023 0 0 0 20 20h92.173l36.283 29.332A12 12 0 0 0 236.001 224zM44.001 150.868V52h120v35.981l-.001.02l.001.019V132H71.583a11.999 11.999 0 0 0-7.544 2.668zm147.96 31.8a11.999 11.999 0 0 0-7.543-2.668H92.001v-24h76a20.023 20.023 0 0 0 20-20v-36H212l.001 98.868z",fill:"currentColor"},null,-1)])])}const La=he(Da,[["render",wa]]),Ma={name:"FaSolidChevronDown"},xa={width:"0.88em",height:"1em",viewBox:"0 0 448 512"};function Ea(e,t,n,s,r,i){return H(),B("svg",xa,[...t[0]||(t[0]=[b("path",{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z",fill:"currentColor"},null,-1)])])}const ka=he(Ma,[["render",Ea]]),Fa={name:"TopcoatCancel"},Ia={width:"1em",height:"1em",viewBox:"0 0 42 42"};function Ha(e,t,n,s,r,i){return H(),B("svg",Ia,[...t[0]||(t[0]=[b("path",{fillRule:"evenodd",d:"M21.002 26.588l10.357 10.604c1.039 1.072 1.715 1.083 2.773 0l2.078-2.128c1.018-1.042 1.087-1.726 0-2.839L25.245 21L36.211 9.775c1.027-1.055 1.047-1.767 0-2.84l-2.078-2.127c-1.078-1.104-1.744-1.053-2.773 0L21.002 15.412L10.645 4.809c-1.029-1.053-1.695-1.104-2.773 0L5.794 6.936c-1.048 1.073-1.029 1.785 0 2.84L16.759 21L5.794 32.225c-1.087 1.113-1.029 1.797 0 2.839l2.077 2.128c1.049 1.083 1.725 1.072 2.773 0l10.358-10.604z",fill:"currentColor"},null,-1)])])}const As=he(Fa,[["render",Ha]]),Oa=at({name:"AppHeader",components:{HelpBox:Ra,IconChat:La,IconChevronDown:ka,IconCancel:As},data(){return{isHelpVisible:!1,showBanner:!1,envGameName:"Diablo II Resurrected: Reign of the Warlock",envGameVersion:"3.1.1",envGithubRepoUrl:"https://github.com/fabd/diablo2-runewizard",envPatchNotesUrl:"https://news.blizzard.com/en-us/article/24244884/reign-of-the-warlock-3-1-1-patch-notes"}},mounted(){this.showBanner=se.isUpdateNew()},methods:{onCloseBanner(){this.showBanner=!1,se.setUpdateRead(),se.saveState()}}}),Pa="/diablo2-runewizard/assets/logo-rune-CI8Fl1wU.png",Ba="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAAAgCAMAAABw1N62AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFdQTFRFt6+XAAAAubOWubGWurGXubCXurCXu7GXv6+furGXurCWurGYu6+XurCWubGXurGWurCXubGXurKXuq+Vu7KWurKWu7KYurCXubGXubCWurCWubGWubGW27u9qQAAAB10Uk5TIABQoP/fv38QkO9vQOCAwJ+wYDBwP0/w0K/Pj19U6DckAAAF80lEQVR4nO2a63ajOAyAHTAJoQQKpANN9v2fcyUbX3RxmnTndOfsWf1KAFvyJ1mWDcYc/penxVS13aU5ntp/25w/XCC0zjZK9/YzWvs/rqPnBGhV1l6GYahH5PX+I1qn39XR8NxsqH6TOqDVWzu63y1G2Uxut8MJZeHNru5yMKJ3/7J5XLn/V9LE9+Tk3YbuT7F7438a3r2/3BcUDc2JCVW6N+sUqG0w6O1D3u2zHn+l2zktsBImI0v7QHBUdEFArunJ9mLtOb9tVmuZQ20usSFmTe8LM8HPoAl+rzuhzdotTjhUVGedDpaLRmu0g3I1S0EyYaOiKJ9BP6UF/fJBwl1VVdbIW01TyJiIxAYKLffgHs7tFsAdDsfUX2PXLLTPVJGglRsVZIEVTBsCDO0yjuOKK5woDUDRNu53rT16nIzWVbB5mhZ1qkYr9tOv6bKx9pZUHeOvEEEz1c/cMgzZMNsu4c6lFgmGmoQBfuP3oiJTYQw2rmNGqxfeeZoWNfQhrUM+mc5pKFOwEEIrUIDQyqcJp5VrmHRTwR+rHlzxeeFsqmiBqO9ccqWEZpZ/XqHV5bge08rH36ahmD24+mQFCy055YmlF22JrO1aiQTDTLqIKUwVgUtxpWC0zt+fiRTXY1rcrhBctTfxFuOpbezlwSBygUfVWzA/z0DjqI4hmDTZTlqV9za53EBpQT60LN89TWskuF6gJYIri6eBZ5wyLbijlnEDDmlWmyU9Z2EuUwRGwn9Cy9zo+ozy/JpY5+UHo2VaQovmYh5cKVVBXNDQKtMCR6/aPIQucEirhjKZNNqN3eOKKkSTaLUfd1hTNq7xhQoCl5bQnNHq52KWF8H1KLTKtEa91ApRNYhJc8hoLTJKhCI00tOKIt3zSr2V4eK0mjfYVX14ebuzlDokHRigD0KrSOuql1oxf7eSR6JlGslSqyAXQmtVtl0vVadjxMVpPa4hLzbsTTA/xCAZ5FJWoFUqtTC0fHTWSnB5B/7COSXqMaEIL3hasKuGkkLFUqaVJ4K9byzHPa7XaNHJF+LJKPFSoFUotXDfdImdiSeSQbJ4FYrmSGv0A1UrXlGBOWn1Eht7cccYnNaGWbLfZRAQUnANaZtSK2R0WqVSC2+EQB2t2FsHVpNyJCoUXXNaRVx6Quh1WhHX4ywv+Mfgwim1W6GFlk6rVGqhGTETK5PEOXDL1qZHimpCq4TrIkqRvbOK/t37xsTzLmi1tIKQvgzB5crcJpr39SD2i/qJ2ZJPjIvY/jiTWh2XUASP0fMtFddZzZ9TOl1hfS8O1wvVqZM9uAysgvumTQ0tlVap1GKpfRaD8zp1XFxRix4h1amKK50M0IvEm2QPCriGV2mh64wb3tz6ODuqXtJolUotBJ6XDWJvHc4gNFxc0YRk6M5HxaUYIxIF6Rtxda/Scoc0Pp5cnPVagaTSKpZafC6LgiQmSwUXU1S5pZrtqjVcvTxQrbmBtO+FnfgR00oCTjH78DC4jlrxrdEqllo4ebr8EPrOZ0k0ScFFFUGGQNKMlooLF3Wyw7yLBZsNYv6ClnZ8gjN+twSaf+qhpdBipZZZ8meFkMappcRFFFXdnlb5CaCGCw8f77GvHqbhyrzJBzE/psW3sE7GNBp3KK6+Fxa0eKk1pDN82EKNVFi2zUwSuDJFLbjO+86/IcunlcPFXpQhrub+1wJb7xM25bCeO5c/hlc+N60mcfX+bshsC6Ellypw3Wc22Y7p9lXm25H4gJT3HBcoesNN7emzsXEz5t++krVCwzWvZOMi1tuaJ9CNVhiH4lsMOpbgha1UE0xM0dlyiRHRyT7o+l4RlzhcieWU9xmKfVNhrNjb6UDbQSgRPe0QXxlNYgnv79ggf5/4DheO9MX317RMMr7Xl4RdURrTUspMfd1p4QmDaM6+eXvCoLmnweCwu7u/2b/H/i7jNc4kNTnobl0GlOq730pktht+DrNLnbn2m2ra6Mu+Vja42zqoI35Sfu4TG/Ke58unv/39SpWCxUy8dJye/BKgJP/tD5I4m3862r8BDNFq5mSmfvcAAAAASUVORK5CYII=",$a={key:0,class:"bg-blood-dark border-b border-blood-light px-4 py-2 flex justify-between items-center text-gold-light text-sm md:text-base mb-4"},Wa={class:"rw-Layout-row mx-auto flex px-4 pt-4"},Va={class:"flex-1"},Na={class:"flex justify-between items-center pb-4"},Ka={class:"text-sm md:text-lg ux-color-gray"},Ua={class:"inline"},qa={class:"ux-color-gold"},Ga={class:"ml-2 ux-color-green whitespace-nowrap"},za={class:"text-xs"},ja=["href"],Ja={class:"flex items-center"},Xa=["href"],Ya={key:0,class:"rw-Layout-row mb-4"};function Za(e,t,n,s,r,i){const o=ae("icon-cancel"),l=ae("icon-chevron-down"),a=ae("icon-chat"),d=ae("help-box");return H(),B("header",null,[e.showBanner?(H(),B("div",$a,[t[2]||(t[2]=b("div",{class:"flex-1 text-center"},[b("strong",null,"Update"),lt(": Runewizard is now optimized for smartphones and tablets! ")],-1)),b("button",{onClick:t[0]||(t[0]=(...u)=>e.onCloseBanner&&e.onCloseBanner(...u)),class:"ml-4 hover:text-white transition-colors"},[N(o,{class:"ux-icon ux-icon--fw"})])])):Me("",!0),b("div",Wa,[t[7]||(t[7]=b("div",{class:"pr-[20px] shrink"},[b("img",{src:Pa,alt:"Rune icon original art (c) BLIZZARD ENTERTAINMENT",class:"w-[49px] md:w-[69px] h-[47px] md:h-[67px]"})],-1)),b("div",Va,[t[6]||(t[6]=b("h1",{class:"text-black text-[0px] mt-1 mb-[5px] w-[225px] h-[24px] md:w-[301px] md:h-[32px]"},[b("img",{src:Ba,alt:"Runewizard",class:"block w-full h-full"})],-1)),b("div",Na,[b("div",Ka,[b("div",Ua,[t[3]||(t[3]=lt(" for ",-1)),b("span",qa,Re(e.envGameName),1)]),b("span",Ga,"Patch "+Re(e.envGameVersion),1),b("span",za,[b("a",{class:"ml-2 underline hover:underline ux-color-link-blue whitespace-nowrap",target:"blank",href:e.envPatchNotesUrl},"Update Notes",8,ja)])]),b("div",Ja,[b("a",{href:"#",class:"rw-HelpLink ml-auto",onClick:t[1]||(t[1]=bs(u=>e.isHelpVisible=!e.isHelpVisible,["prevent"]))},[N(l,{class:rt(["ux-icon ux-icon--fw",{"transform rotate-180":e.isHelpVisible}])},null,8,["class"]),t[4]||(t[4]=b("span",{class:"ml-1"},Re("Help"),-1))]),b("a",{href:`${e.envGithubRepoUrl}/discussions`,class:"rw-Header-link hidden ml-6 md:block"},[N(a,{class:"ux-icon ux-icon--fw ux-icon--lg mr-1"}),t[5]||(t[5]=b("span",null,Re("Feedback"),-1))],8,Xa)])])])]),t[8]||(t[8]=b("div",{class:"rw-Layout-goldBarSeparator mb-2"},null,-1)),N(Kl,{name:"fadein"},{default:zr(()=>[e.isHelpVisible?(H(),B("div",Ya,[N(d)])):Me("",!0)]),_:1})])}const Qa=he(Oa,[["render",Za]]),ec={name:"FaGithub"},tc={width:"1.03em",height:"1em",viewBox:"0 0 1536 1504"};function nc(e,t,n,s,r,i){return H(),B("svg",tc,[...t[0]||(t[0]=[b("path",{d:"M768 0q209 0 385.5 103T1433 382.5T1536 768q0 251-146.5 451.5T1011 1497q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142q57-6 102.5-18t94-39t81-66.5t53-105T1258 728q0-119-79-206q37-91-8-204q-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27T450 331.5T365 318q-45 113-8 204q-79 87-79 206q0 85 20.5 150T351 983t80.5 67t94 39t102.5 18q-39 36-49 103q-21 10-45 15t-57 5t-65.5-21.5T356 1146q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5t9 14t13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30t69.5 7t55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5T0 768q0-209 103-385.5T382.5 103T768 0zM291 1103q3-7-7-12q-10-3-13 2q-3 7 7 12q9 6 13-2zm31 34q7-5-2-16q-10-9-16-3q-7 5 2 16q10 10 16 3zm30 45q9-7 0-19q-8-13-17-6q-9 5 0 18t17 7zm42 42q8-8-4-19q-12-12-20-3q-9 8 4 19q12 12 20 3zm57 25q3-11-13-16q-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11q-16 0-16 11q0 13 17 11q16 0 16-11zm58-10q-2-11-18-9q-16 3-14 15t18 8t14-14z",fill:"currentColor"},null,-1)])])}const sc=he(ec,[["render",nc]]),rc=at({name:"AppFooter",components:{IconGithub:sc},data(){return{envGithubRepoUrl:"https://github.com/fabd/diablo2-runewizard",envMainSiteUrl:"https://fabd.github.io/diablo2"}}}),ic={class:"rw-Footer min-h-[200px]"},oc={class:"text-center text-lg text-gold leading-none"},lc={key:0,class:"mb-2"},ac=["href"],cc=["href"];function uc(e,t,n,s,r,i){const o=ae("icon-github");return H(),B("footer",ic,[t[3]||(t[3]=b("div",{class:"rw-Layout-goldBarSeparator opacity-50 mb-6"},null,-1)),b("div",oc,[e.envMainSiteUrl?(H(),B("div",lc,[t[0]||(t[0]=lt(" Also check out ",-1)),b("a",{href:e.envMainSiteUrl,class:"rw-Footer-link ml-2"},Re("The Tankazon Resource"),8,ac)])):Me("",!0),b("div",null,[t[2]||(t[2]=lt(" Development ",-1)),b("a",{href:e.envGithubRepoUrl,class:"rw-Footer-link ml-2"},[N(o,{class:"ux-icon ux-icon--fw mr-1 mt-[-0.2em]"}),t[1]||(t[1]=b("span",{class:""},Re("fabd/diablo2-runewizard"),-1))],8,cc)])])])}const fc=he(rc,[["render",uc]]),dc=at({name:"Runes",components:{IconCancel:As},data(){return{haveRunes:se.state.haveRunes,runes:Ei}},computed:{isAnyRuneSelected(){return se.getRunes().length>0},runesByTier(){return[this.runes.filter(t=>t.tier===fn.COMMON),this.runes.filter(t=>t.tier===fn.SEMIRARE),this.runes.filter(t=>t.tier===fn.RARE)]}},methods:{onClearRunes(){se.clearRunes(),se.saveState()},onToggleRune(e){const t=se.hasRune(e);se.setRunes([e],!t),se.saveState()}}}),hc={class:"relative"},pc={class:"flex justify-between items-center mb-2"},gc={key:0,class:"-mt-2px"},mc={class:"rw-Runes lg:flex lg:justify-between lg:w-[130px] select-none mb-4"},vc=["onClick"],yc={class:"text-center my-auto"};function Tc(e,t,n,s,r,i){const o=ae("icon-cancel");return H(),B("div",hc,[b("div",pc,[t[2]||(t[2]=b("h2",{class:"rw-Title-h2 mb-0"},"Runes",-1)),e.isAnyRuneSelected?(H(),B("div",gc,[b("a",{class:"rw-Runes-clear",href:"#",onClick:t[0]||(t[0]=bs((...l)=>e.onClearRunes&&e.onClearRunes(...l),["prevent"]))},[N(o,{class:"ux-icon ux-icon--fw rw-Runes-clearIcon text-[#da0000] mr-1"}),t[1]||(t[1]=lt("clear ",-1))])])):Me("",!0)]),b("div",mc,[(H(!0),B(ce,null,mn(e.runesByTier,(l,a)=>(H(),B("div",{key:a,class:"flex lg:block lg:w-1/3 justify-between"},[(H(!0),B(ce,null,mn(l,d=>(H(),B("div",{key:d.name,class:rt(["rw-Rune flex-1",{"is-selected":e.haveRunes[d.name]}]),onClick:u=>e.onToggleRune(d.name)},[b("div",yc,Re(d.name),1)],10,vc))),128))]))),128))])])}const Cc=he(dc,[["render",Tc]]),Sc=[{title:"Ancient's Pledge",runes:["Ral","Ort","Tal"],level:21,ttypes:["Shields","Grimoire"]},{title:"Black",runes:["Thul","Io","Nef"],level:35,ttypes:["Clubs","Hammers","Maces"]},{title:"Fury",runes:["Jah","Gul","Eth"],level:65,ttypes:["Melee Weapons"]},{title:"Holy Thunder",runes:["Eth","Ral","Ort","Tal"],level:21,ttypes:["Scepters"]},{title:"Honor",runes:["Amn","El","Ith","Tir","Sol"],level:27,ttypes:["Melee Weapons"]},{title:"King's Grace",runes:["Amn","Ral","Thul"],level:25,ttypes:["Swords","Scepters"]},{title:"Leaf",runes:["Tir","Ral"],level:19,ttypes:["Staves"],tinfos:"(Not Orbs/Wands)"},{title:"Lionheart",runes:["Hel","Lum","Fal"],level:41,ttypes:["Body Armors"]},{title:"Lore",runes:["Ort","Sol"],level:27,ttypes:["Helms"]},{title:"Malice",runes:["Ith","El","Eth"],level:15,ttypes:["Melee Weapons"]},{title:"Melody",runes:["Shael","Ko","Nef"],level:39,ttypes:["Missile Weapons"]},{title:"Memory",runes:["Lum","Io","Sol","Eth"],level:37,ttypes:["Staves"],tinfos:"(Not Orbs/Wands)"},{title:"Nadir",runes:["Nef","Tir"],level:13,ttypes:["Helms"]},{title:"Radiance",runes:["Nef","Sol","Ith"],level:27,ttypes:["Helms"]},{title:"Rhyme",runes:["Shael","Eth"],level:29,ttypes:["Shields","Grimoire"]},{title:"Silence",runes:["Dol","Eld","Hel","Ist","Tir","Vex"],level:55,ttypes:["Weapons"]},{title:"Smoke",runes:["Nef","Lum"],level:37,ttypes:["Body Armors"]},{title:"Stealth",runes:["Tal","Eth"],level:17,ttypes:["Body Armors"]},{title:"Steel",runes:["Tir","El"],level:13,ttypes:["Swords","Axes","Maces"]},{title:"Strength",runes:["Amn","Tir"],level:25,ttypes:["Melee Weapons"]},{title:"Venom",runes:["Tal","Dol","Mal"],level:49,ttypes:["Weapons"]},{title:"Wealth",runes:["Lem","Ko","Tir"],level:43,ttypes:["Body Armors"]},{title:"White",runes:["Dol","Io"],level:35,ttypes:["Wands"],tinfos:"(Necromancer)"},{title:"Zephyr",runes:["Ort","Eth"],level:21,ttypes:["Missile Weapons"]},{title:"Beast",runes:["Ber","Tir","Um","Mal","Lum"],level:63,ttypes:["Axes","Scepters","Hammers"],version:"1.10"},{title:"Bramble",runes:["Ral","Ohm","Sur","Eth"],level:61,ttypes:["Body Armors"],version:"1.10"},{title:"Breath of the Dying",runes:["Vex","Hel","El","Eld","Zod","Eth"],level:69,ttypes:["Weapons"],version:"1.10"},{title:"Call to Arms",runes:["Amn","Ral","Mal","Ist","Ohm"],level:57,ttypes:["Weapons"],version:"1.10"},{title:"Chaos",runes:["Fal","Ohm","Um"],level:57,ttypes:["Claws"],tinfos:"(Assassin)",version:"1.10"},{title:"Chains of Honor",runes:["Dol","Um","Ber","Ist"],level:63,ttypes:["Body Armors"],version:"1.10"},{title:"Crescent Moon",runes:["Shael","Um","Tir"],level:47,ttypes:["Axes","Swords","Polearms"],version:"1.10"},{title:"Delirium",runes:["Lem","Ist","Io"],level:51,ttypes:["Helms"],version:"1.10"},{title:"Doom",runes:["Hel","Ohm","Um","Lo","Cham"],level:67,ttypes:["Axes","Polearms","Hammers"],version:"1.10"},{title:"Duress",runes:["Shael","Um","Thul"],level:47,ttypes:["Body Armors"],version:"1.10"},{title:"Enigma",runes:["Jah","Ith","Ber"],level:65,ttypes:["Body Armors"],version:"1.10"},{title:"Eternity",runes:["Amn","Ber","Ist","Sol","Sur"],level:63,ttypes:["Melee Weapons"],version:"1.10"},{title:"Exile",runes:["Vex","Ohm","Ist","Dol"],level:57,ttypes:["Paladin Shields"],tinfos:"(Paladin)",version:"1.10"},{title:"Famine",runes:["Fal","Ohm","Ort","Jah"],level:65,ttypes:["Axes","Hammers"],version:"1.10"},{title:"Gloom",runes:["Fal","Um","Pul"],level:47,ttypes:["Body Armors"],version:"1.10"},{title:"Hand of Justice",runes:["Sur","Cham","Amn","Lo"],level:67,ttypes:["Weapons"],version:"1.10"},{title:"Heart of the Oak",runes:["Ko","Vex","Pul","Thul"],level:55,ttypes:["Staves","Maces"],version:"1.10"},{title:"Kingslayer",runes:["Mal","Um","Gul","Fal"],level:53,ttypes:["Swords","Axes"],version:"1.10"},{title:"Passion",runes:["Dol","Ort","Eld","Lem"],level:43,ttypes:["Weapons"],version:"1.10"},{title:"Prudence",runes:["Mal","Tir"],level:49,ttypes:["Body Armors"],version:"1.10"},{title:"Sanctuary",runes:["Ko","Ko","Mal"],level:49,ttypes:["Shields","Grimoire"],version:"1.10"},{title:"Splendor",runes:["Eth","Lum"],level:37,ttypes:["Shields","Grimoire"],version:"1.10"},{title:"Stone",runes:["Shael","Um","Pul","Lum"],level:47,ttypes:["Body Armors"],version:"1.10"},{title:"Wind",runes:["Sur","El"],level:61,ttypes:["Melee Weapons"],version:"1.10"},{title:"Brand",runes:["Jah","Lo","Mal","Gul"],level:65,ttypes:["Missile Weapons"],version:"1.10"},{title:"Death",runes:["Hel","El","Vex","Ort","Gul"],level:55,ttypes:["Swords","Axes"],version:"1.10"},{title:"Destruction",runes:["Vex","Lo","Ber","Jah","Ko"],level:65,ttypes:["Polearms","Swords"],version:"1.10"},{title:"Dragon",runes:["Sur","Lo","Sol"],level:61,ttypes:["Body Armors","Shields","Grimoire"],version:"1.10"},{title:"Dream",runes:["Io","Jah","Pul"],level:65,ttypes:["Helms","Shields","Grimoire"]},{title:"Edge",runes:["Tir","Tal","Amn"],level:25,ttypes:["Missile Weapons"],version:"1.10"},{title:"Faith",runes:["Ohm","Jah","Lem","Eld"],level:65,ttypes:["Missile Weapons"],version:"1.10"},{title:"Fortitude",runes:["El","Sol","Dol","Lo"],level:59,ttypes:["Weapons","Body Armors"],version:"1.10"},{title:"Grief",runes:["Eth","Tir","Lo","Mal","Ral"],level:59,ttypes:["Swords","Axes"],version:"1.10"},{title:"Harmony",runes:["Tir","Ith","Sol","Ko"],level:39,ttypes:["Missile Weapons"],version:"1.10"},{title:"Ice",runes:["Amn","Shael","Jah","Lo"],level:65,ttypes:["Missile Weapons"],version:"1.10"},{title:"Infinity",runes:["Ber","Mal","Ber","Ist"],level:63,ttypes:["Polearms","Spears"],version:"1.10"},{title:"Insight",runes:["Ral","Tir","Tal","Sol"],level:27,ttypes:["Missile Weapons","Polearms","Staves"],version:"1.10"},{title:"Last Wish",runes:["Jah","Mal","Jah","Sur","Jah","Ber"],level:65,ttypes:["Swords","Hammers","Axes"],version:"1.10"},{title:"Lawbringer",runes:["Amn","Lem","Ko"],level:43,ttypes:["Swords","Hammers","Scepters"],version:"1.10"},{title:"Oath",runes:["Shael","Pul","Mal","Lum"],level:49,ttypes:["Swords","Axes","Maces"],version:"1.10"},{title:"Obedience",runes:["Hel","Ko","Thul","Eth","Fal"],level:41,ttypes:["Polearms","Spears"],version:"1.10"},{title:"Phoenix",runes:["Vex","Vex","Lo","Jah"],level:65,ttypes:["Weapons","Shields"],version:"1.10"},{title:"Pride",runes:["Cham","Sur","Io","Lo"],level:67,ttypes:["Polearms","Spears"],version:"1.10"},{title:"Rift",runes:["Hel","Ko","Lem","Gul"],level:53,ttypes:["Polearms","Scepters"],version:"1.10"},{title:"Spirit",runes:["Tal","Thul","Ort","Amn"],level:25,ttypes:["Swords","Shields"],version:"1.10"},{title:"Voice of Reason",runes:["Lem","Ko","El","Eld"],level:43,ttypes:["Swords","Maces"],version:"1.10"},{title:"Wrath",runes:["Pul","Lum","Ber","Mal"],level:63,ttypes:["Missile Weapons"],version:"1.10"},{title:"Bone",runes:["Sol","Um","Um"],level:47,ttypes:["Body Armors"],tinfos:"(Necromancer)",version:"1.11"},{title:"Enlightenment",runes:["Pul","Ral","Sol"],level:45,ttypes:["Body Armors"],tinfos:"(Sorceress)",version:"1.11"},{title:"Myth",runes:["Hel","Amn","Nef"],level:25,ttypes:["Body Armors"],tinfos:"(Barbarian)",version:"1.11"},{title:"Peace",runes:["Shael","Thul","Amn"],level:29,ttypes:["Body Armors"],tinfos:"(Amazon)",version:"1.11"},{title:"Principle",runes:["Ral","Gul","Eld"],level:53,ttypes:["Body Armors"],tinfos:"(Paladin)",version:"1.11"},{title:"Rain",runes:["Ort","Mal","Ith"],level:49,ttypes:["Body Armors"],tinfos:"(Druid)",version:"1.11"},{title:"Treachery",runes:["Shael","Thul","Lem"],level:43,ttypes:["Body Armors"],tinfos:"(Assassin)",version:"1.11"},{title:"Plague",runes:["Cham","Shael","Um"],level:67,ttypes:["Swords","Claws","Daggers"],version:"2.4"},{title:"Pattern",runes:["Tal","Ort","Thul"],level:23,ttypes:["Claws"],tinfos:"(Assassin)",version:"2.4"},{title:"Unbending Will",runes:["Fal","Io","Ith","Eld","El","Hel"],level:41,ttypes:["Swords"],version:"2.4"},{title:"Wisdom",runes:["Pul","Ith","Eld"],level:45,ttypes:["Helms"],version:"2.4"},{title:"Obsession",runes:["Zod","Ist","Lem","Lum","Io","Nef"],level:69,ttypes:["Staves"],version:"2.4"},{title:"Flickering Flame",runes:["Nef","Pul","Vex"],level:55,ttypes:["Helms"],version:"2.4"},{title:"Mist",runes:["Cham","Shael","Gul","Thul","Ith"],level:67,ttypes:["Missile Weapons"],version:"2.4"},{title:"Bulwark",runes:["Shael","Io","Sol"],level:35,ttypes:["Helms"],ladder:!0,version:"2.6"},{title:"Cure",runes:["Shael","Io","Tal"],level:35,ttypes:["Helms"],ladder:!0,version:"2.6"},{title:"Ground",runes:["Shael","Io","Ort"],level:35,ttypes:["Helms"],ladder:!0,version:"2.6"},{title:"Hearth",runes:["Shael","Io","Thul"],level:35,ttypes:["Helms"],ladder:!0,version:"2.6"},{title:"Temper",runes:["Shael","Io","Ral"],level:35,ttypes:["Helms"],ladder:!0,version:"2.6"},{title:"Mosaic",runes:["Mal","Gul","Amn"],level:53,ttypes:["Claws"],tinfos:"(Assassin)",ladder:!0,note:"Disabled in Season 13! Can be crafted offline non-ladder.",version:"2.6"},{title:"Metamorphosis",runes:["Io","Cham","Fal"],level:67,ttypes:["Helms"],ladder:!0,tinfos:"(Druid)",version:"2.6"},{title:"Authority",runes:["Hel","Shael","Ral"],level:29,ttypes:["Body Armors"],version:"3.0"},{title:"Coven",runes:["Ist","Ral","Io"],level:51,ttypes:["Helms"],version:"3.0"},{title:"Void",runes:["Thul","Zod","Ist"],level:69,ttypes:["Daggers"],version:"3.0"},{title:"Vigilance",runes:["Dol","Gul"],level:53,ttypes:["Shields","Paladin Shields","Grimoire"],version:"3.0"},{title:"Ritual",runes:["Amn","Shael","Ohm"],level:57,ttypes:["Daggers"],version:"3.0"},{title:"Mania",runes:["Shael","Ko","Eld"],level:39,ttypes:["Weapons"],ladder:!0,version:"3.0"},{title:"Hysteria",runes:["Shael","Ko","Eld"],level:39,ttypes:["Body Armors"],ladder:!0,version:"3.0"}],bc={name:"FaSolidLongArrowAltUp"},Ac={width:"0.5em",height:"1em",viewBox:"0 0 256 512"};function Rc(e,t,n,s,r,i){return H(),B("svg",Ac,[...t[0]||(t[0]=[b("path",{d:"M88 166.059V468c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12V166.059h46.059c21.382 0 32.09-25.851 16.971-40.971l-86.059-86.059c-9.373-9.373-24.569-9.373-33.941 0l-86.059 86.059c-15.119 15.119-4.411 40.971 16.971 40.971H88z",fill:"currentColor"},null,-1)])])}const Dc=he(bc,[["render",Rc]]),_c={name:"FaSolidLongArrowAltDown"},wc={width:"0.5em",height:"1em",viewBox:"0 0 256 512"};function Lc(e,t,n,s,r,i){return H(),B("svg",wc,[...t[0]||(t[0]=[b("path",{d:"M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z",fill:"currentColor"},null,-1)])])}const Mc=he(_c,[["render",Lc]]),xc={name:"PhDiamondFill"},Ec={width:"1em",height:"1em",viewBox:"0 0 256 256"};function kc(e,t,n,s,r,i){return H(),B("svg",Ec,[...t[0]||(t[0]=[b("path",{d:"M236 139.3L139.3 236a15.9 15.9 0 0 1-22.6 0L20 139.3a16.1 16.1 0 0 1 0-22.6L116.7 20a16.1 16.1 0 0 1 22.6 0l96.7 96.7a16.1 16.1 0 0 1 0 22.6z",fill:"currentColor"},null,-1)])])}const Fc=he(xc,[["render",kc]]),Ic={name:"PhDiamondBold"},Hc={width:"1em",height:"1em",viewBox:"0 0 256 256"};function Oc(e,t,n,s,r,i){return H(),B("svg",Hc,[...t[0]||(t[0]=[b("path",{d:"M238.8 113.9l-96.7-96.7a19.8 19.8 0 0 0-28.2 0l-96.7 96.7a19.8 19.8 0 0 0 0 28.2l96.7 96.7a19.8 19.8 0 0 0 28.2 0l96.7-96.7a19.8 19.8 0 0 0 0-28.2zM128 219l-91-91l91-91l91 91z",fill:"currentColor"},null,-1)])])}const Pc=he(Ic,[["render",Oc]]),Bc={"Ancient's Pledge":`
  +50% Enhanced Defense
  Cold Resist +43%
  Fire Resist +48%
  Lightning Resist +48%
  Poison Resist +48%
  10% Damage Goes To Mana
  `,Black:`
  +120% Enhanced Damage
  40% Chance Of Crushing Blow
  +200 To Attack Rating
  Adds 3-14 Cold Damage - Cold Duration 3 Seconds
  +10 To Vitality
  15% Increased Attack Speed
  Knockback
  Magic Damage Reduced By 2
  Level 4 Corpse Explosion (12 Charges)
  `,Fury:`
  +209% Enhanced Damage
  40% Increased Attack Speed
  Prevent Monster Heal
  66% Chance Of Open Wounds
  33% Deadly Strike
  Ignore Target's Defense
  -25% Target Defense
  20% Bonus To Attack Rating
  6% Life Stolen Per Hit
  +5 To Frenzy (Barbarian Only)
  `,"Holy Thunder":`
  +60% Enhanced Damage
  -25% Target Defense
  Adds 5-30 Fire Damage
  Adds 21-110 Lightning Damage
  +75 Poison Damage Over 5 Seconds
  +10 To Maximum Damage
  Lightning Resistance +60%
  +5 To Maximum Lightning Resistance
  +3 To Holy Shock (Paladin Only)
  Level 7 Chain Lightning (60 Charges)
  `,Honor:`
  +160% Enhanced Damage
  +9 To Minimum Damage
  +9 To Maximum Damage
  25% Deadly Strike
  +250 To Attack Rating
  +1 to All Skills
  7% Life Stolen Per Hit
  Replenish Life +10
  +10 To Strength
  +1 To Light Radius
  +2 To Mana After Each Kill
  `,"King's Grace":`
  +100% Enhanced Damage
  +100% Damage To Demons
  +50% Damage To Undead
  Adds 5-30 Fire Damage
  Adds 3-14 Cold Damage - 3 Second Duration
  +150 To Attack Rating
  +100 To Attack Rating Against Demons
  +100 To Attack Rating Against Undead
  7% Life Stolen Per Hit
  `,Leaf:`
  Adds 5-30 Fire Damage
  +3 To Fire Skills
  +3 To Fire Bolt (Sorceress Only)
  +3 To Inferno (Sorceress Only)
  +3 To Warmth (Sorceress Only)
  +2 To Mana After Each Kill
  + (2 Per Character Level) +2-198 To Defense (Based On Character Level)
  Cold Resist +33%
  `,Lionheart:`
  +20% Enhanced Damage
  Requirements -15%
  +25 To Strength
  +10 To Energy
  +20 To Vitality
  +15 To Dexterity
  +50 To Life
  All Resistances +30
  `,Lore:`
  +1 To All Skill Levels
  +10 To Energy
  +2 To Mana After Each Kill
  Lightning Resist +30%
  Damage Reduced By 7
  +2 To Light Radius
  `,Malice:`
  +33% Enhanced Damage
  +9 To Maximum Damage
  100% Chance Of Open Wounds
  -25% Target Defense
  -100 To Monster Defense Per Hit
  Prevent Monster Heal
  +50 To Attack Rating
  Drain Life -5
  `,Melody:`
  +50% Enhanced Damage
  +300% Damage To Undead
  +3 To Bow and Crossbow Skills (Amazon Only)
  +3 To Critical Strike (Amazon Only)
  +3 To Dodge (Amazon Only)
  +3 To Slow Missiles (Amazon Only)
  20% Increased Attack Speed
  +10 To Dexterity
  Knockback
  `,Memory:`
  +3 to Sorceress Skill Levels
  33% Faster Cast Rate
  Increase Maximum Mana 20%
  +3 Energy Shield (Sorceress Only)
  +2 Static Field (Sorceress Only)
  +10 To Energy
  +10 To Vitality
  +9 To Minimum Damage
  -25% Target Defense
  Magic Damage Reduced By 7
  +50% Enhanced Defense
  `,Nadir:`
  +50% Enhanced Defense
  +10 Defense
  +30 Defense vs. Missile
  Level 13 Cloak of Shadows (9 Charges)
  +2 To Mana After Each Kill
  +5 To Strength
  -33% Extra Gold From Monsters
  -3 To Light Radius
  `,Radiance:`
  +75% Enhanced Defense
  +30 Defense Vs. Missile
  +10 To Energy
  +10 To Vitality
  15% Damage Goes To Mana
  Magic Damage Reduced By 3
  +33 To Mana
  Damage Reduced By 7
  +5 To Light Radius
  `,Rhyme:`
  20% Increased Chance of Blocking
  40% Faster Block Rate
  All Resistances +25
  Regenerate Mana 15%
  Cannot Be Frozen
  50% Extra Gold From Monsters
  25% Better Chance Of Getting Magic Items
  `,Silence:`
  200% Enhanced Damage
  +75% Damage To Undead
  Requirements -20%
  20% Increased Attack Speed
  +50 To Attack Rating Against Undead
  +2 To All Skills
  All Resistances +75
  20% Faster Hit Recovery
  11% Mana Stolen Per Hit
  Hit Causes Monster To Flee 25%
  Hit Blinds Target +33
  +2 To Mana After Each Kill
  30% Better Chance Of Getting Magic Items
  `,Smoke:`
  +75% Enhanced Defense
  +280 Defense Vs. Missile
  All Resistances +50
  20% Faster Hit Recovery
  Level 6 Weaken (18 Charges)
  +10 To Energy
  -1 To Light Radius
  `,Stealth:`
  Magic Damage Reduced By 3
  +6 To Dexterity
  +15 To Maximum Stamina
  Poison Resist +30%
  Regenerate Mana 15%
  25% Faster Run/Walk
  25% Faster Cast Rate
  25% Faster Hit Recovery
  `,Steel:`
  20% Enhanced Damage
  +3 To Minimum Damage
  +3 To Maximum Damage
  +50 To Attack Rating
  50% Chance Of Open Wounds
  25% Increased Attack Speed
  +2 To Mana After Each Kill
  +1 To Light Radius
  `,Strength:`
  35% Enhanced Damage
  25% Chance Of Crushing Blow
  7% Life Stolen Per Hit
  +2 To Mana After Each Kill
  +20 To Strength
  +10 To Vitality
  `,Venom:`
  Hit Causes Monster To Flee 25%
  Prevent Monster Heal
  Ignore Target's Defense
  7% Mana Stolen Per Hit
  Level 15 Poison Explosion (27 Charges)
  Level 13 Poison Nova (11 Charges)
  +273 Poison Damage Over 6 seconds
  `,Wealth:`
  300% Extra Gold From Monsters
  100% Better Chance Of Getting Magic Items
  +2 To Mana After Each Kill
  +10 To Dexterity
  `,White:`
  Hit Causes Monster To Flee 25%
  +10 To Vitality
  +3 To Poison And Bone Skills (Necromancer Only)
  +3 To Bone Armor (Necromancer Only)
  +2 To Bone Spear (Necromancer Only)
  +4 To Skeleton Mastery (Necromancer Only)
  Magic Damage Reduced By 4
  20% Faster Cast Rate
  +13 To Mana
  `,Zephyr:`
  +33% Enhanced Damage
  +66 To Attack Rating
  Adds 1-50 Lightning Damage
  -25% Target Defense
  +25 Defense
  25% Faster Run/Walk
  25% Increased Attack Speed
  7% Chance To Cast Level 1 Twister When Struck
  `,Beast:`
  Level 9 Fanaticism Aura When Equipped
  +40% Increased Attack Speed
  +240-270% Enhanced Damage (varies)
  20% Chance of Crushing Blow
  25% Chance of Open Wounds
  +3 To Werebear
  +3 To Lycanthropy
  Prevent Monster Heal
  +25-40 To Strength (varies)
  +10 To Energy
  +2 To Mana After Each Kill
  Level 13 Summon Grizzly (5 Charges)
  `,Bramble:`
  Level 15-21 Thorns Aura When Equipped (varies)
  +50% Faster Hit Recovery
  +25-50% To Poison Skill Damage (varies)
  +300 Defense
  Increase Maximum Mana 5%
  Regenerate Mana 15%
  +5% To Maximum Cold Resist
  Fire Resist +30%
  Poison Resist +100%
  +13 Life After Each Kill
  Level 13 Spirit of Barbs (33 Charges)
  `,"Breath of the Dying":`
  50% Chance To Cast Level 20 Poison Nova When You Kill An Enemy
  Indestructible
  +60% Increased Attack Speed
  +350-400% Enhanced Damage (varies)
  +200% Damage To Undead
  -25% Target Defense
  +50 To Attack Rating
  +50 To Attack Rating Against Undead
  7% Mana Stolen Per Hit
  12-15% Life Stolen Per Hit (varies)
  Prevent Monster Heal
<U>+30 To All Attributes</U>
  +1 To Light Radius
  Requirements -20%
  `,"Call to Arms":`
  +1 To All Skills
  +40% Increased Attack Speed
  +250-290% Enhanced Damage (varies)
  Adds 5-30 Fire Damage
  7% Life Stolen Per Hit
  +2-6 To Battle Command (varies)*
  +1-6 To Battle Orders (varies)*
  +1-4 To Battle Cry (varies)*
  Prevent Monster Heal
  Replenish Life +12
  30% Better Chance of Getting Magic Items
  `,Chaos:`
  9% Chance To Cast Level 11 Frozen Orb On Striking
  11% Chance To Cast Level 9 Charged Bolt On Striking
  +35% Increased Attack Speed
  +290-340% Enhanced Damage (varies)
  Adds 216-471 Magic Damage
  25% Chance of Open Wounds
  +1 To Whirlwind
  +10 To Strength
  +15 Life After Each Demon Kill
  `,"Chains of Honor":`
  +2 To All Skills
  +200% Damage To Demons
  +100% Damage To Undead
  8% Life Stolen Per Hit
  +70% Enhanced Defense
  +20 To Strength
  Replenish Life +7
  All Resistances +65
  Damage Reduced By 8%
  25% Better Chance of Getting Magic Items
  `,"Crescent Moon":`
  10% Chance To Cast Level 17 Chain Lightning On Striking
  7% Chance To Cast Level 13 Static Field On Striking
  +20% Increased Attack Speed
  +180-220% Enhanced Damage (varies)
  Ignore Target's Defense
  -35% To Enemy Lightning Resistance
  25% Chance of Open Wounds
  +9-11 Magic Absorb (varies)
  +2 To Mana After Each Kill
  Level 18 Summon Spirit Wolf (30 Charges)
  `,Delirium:`
  1% Chance To Cast Level 50 Delirium* (morph) When Struck
  6% Chance To Cast Level 14 Mind Blast When Struck
  14% Chance To Cast Level 13 Terror When Struck
  11% Chance To Cast Level 18 Confuse On Striking
  +2 To All Skills
  +261 Defense
  +10 To Vitality
  50% Extra Gold From Monsters
  25% Better Chance of Getting Magic Items
  Level 17 Attract (60 Charges)
  `,Doom:`
  5% Chance To Cast Level 18 Volcano On Striking
  Level 12 Holy Freeze Aura When Equipped
  +2 To All Skills
  +45% Increased Attack Speed
  +330-370% Enhanced Damage (varies)
  -(40-60)% To Enemy Cold Resistance (varies)
  20% Deadly Strike
  25% Chance of Open Wounds
  Prevent Monster Heal
  Freezes Target +3
  Requirements -20%
  `,Duress:`
  +40% Faster Hit Recovery
  +10-20% Enhanced Damage (varies)
  Adds 37-133 Cold Damage 2 sec. Duration (Normal)
  15% Chance of Crushing Blow
  33% Chance of Open Wounds
  +150-200% Enhanced Defense (varies)
  -20% Slower Stamina Drain
  Cold Resist +45%
  Lightning Resist +15%
  Fire Resist +15%
  Poison Resist +15%
  `,Enigma:`
  +2 To All Skills
  +45% Faster Run/Walk
  +1 To Teleport
  +750-775 Defense (varies)
  + (0.75 Per Character Level) +0-74 To Strength (Based On Character Level)
  Increase Maximum Life 5%
  Damage Reduced By 8%
  +14 Life After Each Kill
  15% Damage Taken Goes To Mana
  + (1 Per Character Level) +1-99% Better Chance of Getting Magic Items (Based On Character Level)
  `,Eternity:`
  Indestructible
  +260-310% Enhanced Damage (varies)
  +9 To Minimum Damage
  7% Life Stolen Per Hit
  20% Chance of Crushing Blow
  Hit Blinds Target
  Slows Target By 33%
  Regenerate Mana 16%
  Replenish Life +16
  Cannot Be Frozen
  30% Better Chance Of Getting Magic Items
  Level 8 Revive (88 Charges)
  `,Exile:`
  15% Chance To Cast Level 5 Life Tap On Striking
  Level 13-16 Defiance Aura When Equipped (varies)
  +2 To Offensive Auras (Paladin Only)
  +30% Faster Block Rate
  Freezes Target
  +220-260% Enhanced Defense (varies)
  Replenish Life +7
  +5% To Maximum Cold Resist
  +5% To Maximum Fire Resist
  25% Better Chance Of Getting Magic Items
  Repairs 1 Durability in 4 Seconds
  `,Famine:`
  +30% Increased Attack Speed
  +320-370% Enhanced Damage (varies)
  Ignore Target's Defense
  Adds 180-200 Magic Damage
  Adds 50-200 Fire Damage
  Adds 51-250 Lightning Damage
  Adds 50-200 Cold Damage
  12% Life Stolen Per Hit
  Prevent Monster Heal
  +10 To Strength
  `,Gloom:`
  15% Chance To Cast Level 3 Dim Vision When Struck
  +10% Faster Hit Recovery
  +200-260% Enhanced Defense (varies)
  +10 To Strength
  All Resistances +45
  Half Freeze Duration
  5% Damage Taken Goes To Mana
  -3 To Light Radius
  `,"Hand of Justice":`
  100% Chance To Cast Level 36 Blaze When You Level-Up
  100% Chance To Cast Level 48 Meteor When You Die
  Level 16 Holy Fire Aura When Equipped
  +33% Increased Attack Speed
  +280-330% Enhanced Damage (varies)
  Ignore Target's Defense
  7% Life Stolen Per Hit
  -20% To Enemy Fire Resistance
  20% Deadly Strike
  Hit Blinds Target
  Freezes Target +3
  `,"Heart of the Oak":`
  +3 To All Skills
  +40% Faster Cast Rate
  +75% Damage To Demons
  +100 To Attack Rating Against Demons
  Adds 3-14 Cold Damage, 3 sec. Duration (Normal)
  7% Mana Stolen Per Hit
  +10 To Dexterity
  Replenish Life +20
  Increase Maximum Mana 15%
  All Resistances +30-40 (varies)
  Level 4 Oak Sage (25 Charges)
  Level 14 Raven (60 Charges)
  `,Kingslayer:`
  +30% Increased Attack Speed
  +230-270% Enhanced Damage (varies)
  -25% Target Defense
  20% Bonus To Attack Rating
  33% Chance of Crushing Blow
  50% Chance of Open Wounds
  +1 To Vengeance
  Prevent Monster Heal
  +10 To Strength
  40% Extra Gold From Monsters
  `,Passion:`
  +25% Increased Attack Speed
  +160-210% Enhanced Damage (varies)
  50-80% Bonus To Attack Rating (varies)
  +75% Damage To Undead
  +50 To Attack Rating Against Undead
  Adds 1-50 Lightning Damage
  +1 To Berserk
  +1 To Zeal
  Hit Blinds Target +10
  Hit Causes Monster To Flee 25%
  75% Extra Gold From Monsters
  Level 3 Heart of Wolverine (12 Charges)
  `,Prudence:`
  +25% Faster Hit Recovery
  +140-170% Enhanced Defense (varies)
  All Resistances +25-35 (varies)
  Damage Reduced by 3
  Magic Damage Reduced by 17
  +2 To Mana After Each Kill
  +1 To Light Radius
  Repairs Durability 1 In 4 Seconds
  `,Sanctuary:`
  +20% Faster Hit Recovery
  +20% Faster Block Rate
  20% Increased Chance of Blocking
  +130-160% Enhanced Defense (varies)
  +250 Defense vs. Missile
  +20 To Dexterity
  All Resistances +50-70 (varies)
  Magic Damage Reduced By 7
  Level 12 Slow Missiles (60 Charges)
  `,Splendor:`
  +1 To All Skills
  +10% Faster Cast Rate
  +20% Faster Block Rate
  +60-100% Enhanced Defense (varies)
  +10 To Energy
  Regenerate Mana 15%
  50% Extra Gold From Monsters
  20% Better Chance of Getting Magic Items
  +3 To Light Radius
  `,Stone:`
  +60% Faster Hit Recovery
  +250-290% Enhanced Defense (varies)
  +300 Defense Vs. Missile
  +16 To Strength
  +16 To Vitality
  +10 To Energy
  All Resistances +15
  Level 16 Molten Boulder (80 Charges)
  Level 16 Clay Golem (16 Charges)
  `,Wind:`
  10% Chance To Cast Level 9 Tornado On Striking
  +20% Faster Run/Walk
  +40% Increased Attack Speed
  +15% Faster Hit Recovery
  +120-160% Enhanced Damage (varies)
  -50% Target Defense
  +50 To Attack Rating
  Hit Blinds Target
  +1 To Light Radius
  Level 13 Twister (127 Charges)
  `,Brand:`
  35% Chance To Cast Level 14 Amplify Damage When Struck
  100% Chance To Cast Level 18 Bone Spear On Striking
  +260-340% Enhanced Damage (varies)
  Ignore Target's Defense
  20% Bonus to Attack Rating
  +280-330% Damage To Demons (varies)
  20% Deadly Strike
  Prevent Monster Heal
  Knockback
  Fires Explosive Arrows or Bolts (15)
  `,Death:`
  100% Chance To Cast Level 44 Chain Lightning When You Die
  25% Chance To Cast Level 18 Glacial Spike On Attack
  Indestructible
  +300-385% Enhanced Damage (varies)*
  20% Bonus To Attack Rating
  +50 To Attack Rating
  Adds 1-50 Lightning Damage
  7% Mana Stolen Per Hit
  50% Chance of Crushing Blow
  +(0.5 per Character Level) 0.5-49.5% Deadly Strike (Based on Character Level)
  +1 To Light Radius
  Level 22 Blood Golem  (15 Charges)
  Requirements -20%
  `,Destruction:`
  23% Chance To Cast Level 12 Volcano On Striking
  5% Chance To Cast Level 23 Molten Boulder On Striking
  100% Chance To Cast level 45 Meteor When You Die
  15% Chance To Cast Level 22 Nova On Attack
  +350% Enhanced Damage
  Ignore Target's Defense
  Adds 100-180 Magic Damage
  7% Mana Stolen Per Hit
  20% Chance Of Crushing Blow
  20% Deadly Strike
  Prevent Monster Heal
  +10 To Dexterity
  `,Dragon:`
  20% Chance to Cast Level 18 Venom When Struck
  12% Chance To Cast Level 15 Hydra On Striking
  Level 14 Holy Fire Aura When Equipped
  +360 Defense
  +230 Defense Vs. Missile
  +3-5 To All Attributes (varies)
  +0.375-37.125 To Strength (Based on Character Level)
  Increase Maximum Mana 5% (Armor Only)
  +50 To Mana (Shields Only)
  +5% To Maximum Lightning Resist
  Damage Reduced by 7
  `,Dream:`
  10% Chance To Cast Level 15 Confuse When Struck
  Level 15 Holy Shock Aura When Equipped
  +20-30% Faster Hit Recovery (varies)
  +30% Enhanced Defense
  +150-220 Defense (varies)
  +10 To Vitality
  Increase Maximum Life 5% (Helms Only)
  +50 To Life (Shields Only)
  +0.625-61.875 To Mana (Based On Character Level)
  All Resistances +5-20 (varies)
  12-25% Better Chance of Getting Magic Items (varies)
  `,Edge:`
  Level 15 Thorns Aura When Equipped
  +35% Increased Attack Speed
  +320-380% Damage To Demons (varies)
  +280% Damage To Undead
  +75 Poison Damage Over 5 Seconds
  7% Life Stolen Per Hit
  Prevent Monster Heal
  +5-10 To All Attributes (varies)
  +2 To Mana After Each Kill
  Reduces All Vendor Prices 15%!!!
  `,Faith:`
  Level 12-15 Fanaticism Aura When Equipped (varies)
  +1-2 To All Skills (varies)
  +330% Enhanced Damage
  Ignore Target's Defense
  300% Bonus To Attack Rating
  +75% Damage To Undead
  +50 To Attack Rating Against Undead
  +120 Fire Damage
  All Resistances +15
  10% Reanimate As: Returned
  75% Extra Gold From Monsters
  `,Fortitude:`
  #### Weapons
  20% Chance To Cast Level 15 Chilling Armor when Struck
  +25% Faster Cast Rate
  +300% Enhanced Damage
  +9 To Minimum Damage
  +50 To Attack Rating
  20% Deadly Strike
  Hit Causes Monster To Flee 25%
  +200% Enhanced Defense
  +X To Life (Based on Character Level)*
  All Resistances +25-30 (varies)
  12% Damage Taken Goes To Mana
  +1 To Light Radius

  #### Body Armor
  20% Chance To Cast Level 15 Chilling Armor when Struck
  +25% Faster Cast Rate
  +300% Enhanced Damage
  +200% Enhanced Defense
  +15 Defense
  +X To Life (Based on Character Level)*
  Replenish Life +7
  +5% To Maximum Lightning Resist
  All Resistances +25-30 (varies)
  Damage Reduced By 7
  12% Damage Taken Goes To Mana
  +1 To Light Radius
  `,Grief:`
  35% Chance To Cast Level 15 Venom On Striking
  +30-40% Increased Attack Speed (varies)
  Damage +340-400 (varies)
  Ignore Target's Defense
  -25% Target Defense
  +(1.875 per character level) 1.875-185.625% Damage To Demons (Based on Character Level) 
  Adds 5-30 Fire Damage
  -20-25% To Enemy Poison Resistance (varies)
  20% Deadly Strike
  Prevent Monster Heal
  +2 To Mana After Each Kill
  +10-15 Life After Each Kill (varies)
  `,Harmony:`
  Level 10 Vigor Aura When Equipped
  +200-275% Enhanced Damage (varies)
  +9 To Minimum Damage
  +9 To Maximum Damage
  Adds 55-160 Lightning Damage
  Adds 55-160 Fire Damage
  Adds 55-160 Cold Damage
  +2-6 To Valkyrie (varies)
  +10 To Dexterity
  Regenerate Mana 20%
  +2 To Mana After Each Kill
  +2 To Light Radius
  Level 20 Revive (25 Charges)
  `,Ice:`
  100% Chance To Cast Level 40 Blizzard When You Level-up
  25% Chance To Cast Level 22 Frost Nova On Striking
  Level 18 Holy Freeze Aura When Equipped
  +20% Increased Attack Speed
  +140-210% Enhanced Damage (varies)
  Ignore Target's Defense
  +25-30% To Cold Skill Damage (varies)
  -20% To Enemy Cold Resistance
  7% Life Stolen Per Hit
  20% Deadly Strike
  3.125-309.375 Extra Gold From Monsters (Based on Character Level)
  `,Infinity:`
  50% Chance To Cast Level 20 Chain Lightning When You Kill An Enemy
  Level 12 Conviction Aura When Equipped
  +35% Faster Run/Walk
  +255-325% Enhanced Damage (varies)
  -(45-55)% To Enemy Lightning Resistance (varies)
  40% Chance of Crushing Blow
  Prevent Monster Heal
  0.5-49.5 To Vitality (Based on Character Level)
  30% Better Chance of Getting Magic Items
  Level 21 Cyclone Armor (30 Charges)
  `,Insight:`
  Level 12-17 Meditation Aura When Equipped (varies)
  +35% Faster Cast Rate
  +200-260% Enhanced Damage (varies)
  +9 To Minimum Damage
  180-250% Bonus to Attack Rating (varies)
  Adds 5-30 Fire Damage
  +75 Poison Damage Over 5 Seconds
  +1-6 To Critical Strike (varies)
  +5 To All Attributes
  +2 To Mana After Each Kill
  23% Better Chance of Getting Magic Items
  `,"Last Wish":`
  6% Chance To Cast Level 11 Fade When Struck
  10% Chance To Cast Level 18 Life Tap On Striking
  20% Chance To Cast Level 20 Charged Bolt On Attack
  Level 17 Might Aura When Equipped
  +330-375% Enhanced Damage (varies)
  Ignore Target's Defense
  60-70% Chance of Crushing Blow (varies)
  Prevent Monster Heal
  Hit Blinds Target
  +(0.5 per character level) 0.5-49.5% Chance of Getting Magic Items (Based on Character Level) 
  `,Lawbringer:`
  20% Chance To Cast Level 15 Decrepify On Striking
  Level 16-18 Sanctuary Aura When Equipped (varies)
  -50% Target Defense
  Adds 150-210 Fire Damage
  Adds 130-180 Cold Damage
  7% Life Stolen Per Hit
  Slain Monsters Rest In Peace
  +200-250 Defense Vs. Missile (varies)
  +10 To Dexterity
  75% Extra Gold From Monsters
  `,Oath:`
  30% Chance To Cast Level 20 Bone Spirit On Striking
  Indestructible
  +50% Increased Attack Speed
  +210-340% Enhanced Damage (varies)
  +75% Damage To Demons
  +100 To Attack Rating Against Demons
  Prevent Monster Heal
  +10 To Energy
  +10-15 Magic Absorb (varies)
  Level 16 Heart Of Wolverine (20 Charges)
  Level 17 Iron Golem (14 Charges)
  `,Obedience:`
  30% Chance To Cast Level 21 Enchant When You Kill An Enemy
  40% Faster Hit Recovery
  +370% Enhanced Damage
  -25% Target Defense
  Adds 3-14 Cold Damage 3 Second Duration (Normal)
  -25% To Enemy Fire Resistance
  40% Chance of Crushing Blow
  +200-300 Defense (varies)
  +10 To Strength
  +10 To Dexterity
  All Resistances +20-30 (varies)
  Requirements -20%
  `,Phoenix:`
  #### Weapons
  100% Chance To Cast level 40 Blaze When You Level-up
  40% Chance To Cast Level 22 Firestorm On Striking
  Level 10-15 Redemption Aura When Equipped (varies)
  +350-400% Enhanced Damage (varies)
  Ignores Target's Defense
  14% Mana Stolen Per Hit
  -28% To Enemy Fire Resistance
  20% Deadly Strike
  +350-400 Defense Vs. Missile (varies)
  +15-21 Fire Absorb (varies)

  #### Shields
  100% Chance To Cast level 40 Blaze When You Level-up
  40% Chance To Cast Level 22 Firestorm On Striking
  Level 10-15 Redemption Aura When Equipped (varies)
  +350-400 Defense Vs. Missile (varies)
  +350-400% Enhanced Damage (varies)
  -28% To Enemy Fire Resistance
  +50 To Life
  +5% To Maximum Lightning Resist
  +10% To Maximum Fire Resist
  +15-21 Fire Absorb (varies)
  `,Pride:`
  25% Chance To Cast Level 17 Fire Wall When Struck
  Level 16-20 Concentration Aura When Equipped (varies)
  260-300% Bonus To Attack Rating (varies)
  +1-99% Damage To Demons (Based on Character Level)
  Adds 50-280 Lightning Damage
  20% Deadly Strike
  Hit Blinds Target
  Freezes Target +3
  +10 To Vitality
  Replenish Life +8
  1.875-185.625% Extra Gold From Monsters (Based on Character Level)
  `,Rift:`
  20% Chance To Cast Level 16 Tornado On Striking
  16% Chance To Cast Level 21 Frozen Orb On Attack
  20% Bonus To Attack Rating
  Adds 160-250 Magic Damage
  Adds 60-180 Fire Damage
  +5-10 To All Stats (varies)
  +10 To Dexterity
  38% Damage Taken Goes To Mana
  75% Extra Gold From Monsters
  Level 15 Iron Maiden (40 Charges)
  Requirements -20%
  `,Spirit:`
  #### Swords
  +2 To All Skills
  +25-35% Faster Cast Rate (varies)
  +55% Faster Hit Recovery
  Adds 1-50 Lightning Damage
  Adds 3-14 Cold Damage 3 Second Duration (Normal)
  +75 Poison Damage Over 5 Seconds
  7% Life Stolen Per Hit
  +250 Defense Vs. Missile
  +22 To Vitality
  +89-112 To Mana (varies)
  +3-8 Magic Absorb (varies)

  #### Shields
  +2 To All Skills
  +25-35% Faster Cast Rate (varies)
  +55% Faster Hit Recovery
  +250 Defense Vs. Missile
  +22 To Vitality
  +89-112 To Mana (varies)
  Cold Resist +35%
  Lightning Resist +35%
  Poison Resist +35%
  +3-8 Magic Absorb (varies)
  Attacker Takes Damage of 14
  `,"Voice of Reason":`
  15% Chance To Cast Level 13 Frozen Orb On Striking
  18% Chance To Cast Level 20 Ice Blast On Striking
  +50 To Attack Rating
  +220-350% Damage To Demons
  +355-375% Damage To Undead (varies)
  +50 To Attack Rating Against Undead
  Adds 100-220 Cold Damage
  -24% To Enemy Cold Resistance
  +10 To Dexterity
  Cannot Be Frozen
  75% Extra Gold From Monsters
  +1 To Light Radius
  `,Wrath:`
  30% Chance To Cast Level 1 Decrepify On Striking
  5% Chance To Cast Level 10 Life Tap On Striking
  +375% Damage To Demons
  +100 To Attack Rating Against Demons
  +250-300% Damage To Undead (varies)
  Adds 85-120 Magic Damage
  Adds 41-240 Lightning Damage
  20% Chance of Crushing Blow
  Prevent Monster Heal
  +10 To Energy
  Cannot Be Frozen
  `,Bone:`
  15% Chance To Cast level 10 Bone Armor When Struck
  15% Chance To Cast level 10 Bone Spear On Striking
  +2 To Necromancer Skill Levels
  +100-150 To Mana (varies)
  All Resistances +30
  Damage Reduced By 7
  `,Enlightenment:`
  5% Chance To Cast Level 15 Blaze When Struck
  5% Chance To Cast level 15 Fire Ball On Striking
  +2 To Sorceress Skill Levels
  +1 To Warmth
  +30% Enhanced Defense
  Fire Resist +30%
  Damage Reduced By 7
  `,Myth:`
  3% Chance To Cast Level 1 Howl When Struck
  10% Chance To Cast Level 1 Taunt On Striking
  +2 To Barbarian Skill Levels
  +30 Defense Vs. Missile
  Replenish Life +10
  Attacker Takes Damage of 14
  Requirements -15%
  `,Peace:`
  4% Chance To Cast Level 5 Slow Missiles When Struck
  2% Chance To Cast level 15 Valkyrie On Striking
  +2 To Amazon Skill Levels
  +20% Faster Hit Recovery
  +2 To Critical Strike
  Cold Resist +30%
  Attacker Takes Damage of 14
  `,Principle:`
  100% Chance To Cast Level 5 Holy Bolt On Striking
  +2 To Paladin Skill Levels
  15% Slower Stamina Drain
  +5% To Maximum Poison Resist
  Fire Resist +30%
  `,Rain:`
  5% Chance To Cast Level 15 Cyclone Armor When Struck
  5% Chance To Cast Level 15 Twister On Striking
  +2 To Druid Skills
  +100-150 To Mana (varies)
  Lightning Resist +30%
  Magic Damage Reduced By 7
  15% Damage Taken Goes to Mana
  `,Treachery:`
  5% Chance To Cast Level 15 Fade When Struck
  25% Chance To Cast level 15 Venom On Striking
  +2 To Assassin Skills
  +45% Increased Attack Speed
  +20% Faster Hit Recovery
  Cold Resist +30%
  50% Extra Gold From Monsters
  `,Plague:`
  20% Chance to Cast level 12 Lower Resist when struck
  25% Chance to Cast level 15 Poison Nova on striking
  Level 13-17 Cleansing Aura When Equipped (varies)
  +1-2 All Skills
  +20% Increased Attack Speed
  +220-320% Enhanced Damage (varies)
  -23% To Enemy Poison Resistance
  0.3% (0-29.7) Deadly Strike (Based on Character Level)
  +25% Chance of Open Wounds
  Freezes Target +3
  `,Pattern:`
  +30% Faster Block Rate
  +40-80% Enhanced Damage (varies)
  10% Bonus to Attack Rating
  Adds 17-62 Fire Damage
  Adds 1-50 Lightning Damage
  Adds 3-14 Cold Damage
  +75 Poison Damage Over 5 Seconds
  +6 to Strength
  +6 to Dexterity
  All Resistances +15
  `,"Unbending Will":`
  18% Chance to cast Level 18 Taunt on striking
  +3 To Combat Skills (Barbarian Only)
  +20-30% Increased Attack Speed (varies)
  +300-350% Enhanced Damage (varies)
  +9 To Maximum Damage
  +50 To Attack Rating
  +75% Damage to Undead
  +50 Attack Rating Against Undead
  8-10% Life Stolen Per Hit (varies)
  Prevent Monster Heal
  +10 To Strength
  +10 To Vitality
  Damage Reduced By 8
  +1 Light Radius
  Requirements -20%
  `,Wisdom:`
  +33% Piercing Attack
  +15-25% Bonus to Attack Rating (varies)
  4-8% Mana Stolen Per Hit (varies)
  +30% Enhanced Defense
  +10 Energy
  15% Slower Stamina Drain
  Cannot Be Frozen
  +5 Mana After Each Kill
  15% Damage Taken Goes to Mana
  `,Obsession:`
  Indestructible
  24% Chance to cast level 10 Weaken when struck
  +4 To All Skills
  +65% Faster Cast Rate
  +60% Faster Hit Recovery
  Knockback
  +10 To Vitality
  +10 To Energy
  Increase Maximum Life 15-25% (varies)
  Regenerate Mana 15-30% (varies)
  All Resistances +60-70 (varies)
  75% Extra Gold from Monsters
  30% Better Chance of Getting Magic Items
  `,"Flickering Flame":`
  Level 4-8 Resist Fire Aura When Equipped (varies)
  +3 To Fire Skills
  -10-15% to Enemy Fire Resistance (varies)
  +30% Enhanced Defense
  +30 Defense Vs. Missile
  +50-75 To Mana (varies)
  Half Freeze Duration
  +5% To Maximum Fire Resist
  Poison Length Reduced by 50%
  `,Mist:`
  Level 8-12 Concentration Aura When Equipped (varies)
  +3 To All Skills
  20% Increased Attack Speed
  +100% Piercing Attack
  +325-375% Enhanced Damage (varies)
  +9 To Maximum Damage
  20% Bonus to Attack Rating
  Adds 3-14 Cold Damage
  Freeze Target +3
  +24 Vitality
  All Resistances +40
  `,Bulwark:`
  +20% Faster Hit Recovery
  +4-6% Life stolen per hit
  +75-100% Enhanced Defense
  +10 to Vitality
  Increase Maximum Life 5%
  Replenish Life +30
  Damage Reduced by 7
  Physical Damage Received Reduced by 10-15%
  `,Cure:`
  Level 1 Cleansing Aura when Equipped
  +20% Faster Hit Recovery
  +75-100% Enhanced Defense
  +10 to Vitality
  Increase Maximum Life 5%
  Poison Resist +40-60%
  Poison Length Reduced by 50%
  `,Ground:`
  +20% Faster Hit Recovery
  +75-100% Enhanced Defense
  +10 to Vitality
  Increase Maximum Life 5%
  Lightning Resist +40-60%
  Lightning Absorb +10-15%
  `,Hearth:`
  +20% Faster Hit Recovery
  +75-100% Enhanced Defense
  +10 to Vitality
  Increase Maximum Life 5%
  Cold Resist +40-60%
  Cold Absorb +10-15%
  Cannot be Frozen
  `,Temper:`
  +20% Faster Hit Recovery
  +75-100% Enhanced Defense
  +10 to Vitality
  Increase Maximum Life 5%
  Fire Resist +40-60%
  Fire Absorb +10-15%
  `,Authority:`
  2% Chance to cast level 10 Psychic Ward when struck
  10% Chance to cast level 15 Miasma Chain on striking
  +2 to Warlock Skill Levels
  +40-60% Enhanced Damage
  Requirements -15%
  +20% Faster Hit Recovery
  Fire Resist +30%
  `,Coven:`
  5% Chance to cast level 10 Sigil Lethargy when struck
  +1 to All Skills
  +20% Faster Cast Rate
  +30-50% Enhanced Defense
  +1-5 Life after each Kill
  26-40% Better Chance of Getting Magic Items
  Fire Resist +30%
  +10 to Vitality
  `,Void:`
  +2 to All Skills
  +40% Faster Cast Rate
  +10-15% to Magic Skill Damage
  +1 to Abyss (Level 3)
  +8-12 to all Attributes
  Level 4 Decrepify (35/35 Charges)
  Adds 3-14 Cold Damage
  Indestructible
  30% Better Chance of Getting Magic Items
  `,Vigilance:`
  5% Chance to cast level 10 Ring of Fire when struck
  +10% Faster Run/Walk
  +30% Faster Block Rate
  +20-40 to Life
  +20-40 to Mana
  All Resistances +25-35
  +75-100% Enhanced Defense
  Replenish Life +7
  +5% to Maximum Poison Resist
  `,Ritual:`
  13% Chance to cast level 1 Sigil Death when struck
  +40% Increased Attack Speed
  +250-320% Enhanced Damage
  +150-250% Damage to Demons
  +200-260% Bonus to Attack Rating
  +3-5 Life after each Kill
  Slain Monsters Rest in Peace
  7% Life stolen per hit
  `,Mania:`
  5% Chance to cast level 1 Burst of Speed on striking
  Level 1 Fanaticism Aura When Equipped
  +30% Increased Attack Speed
  +180-200% Enhanced Damage
  +75% Damage to Undead
  +50 to Attack Rating against Undead
  +10 to Dexterity
  `,Hysteria:`
  +65% Faster Run/Walk
  +40% Increased Attack Speed
  +20% Faster Hit Recovery
  +6 to Evade
  +10 to Dexterity
  50% Slower Stamina Drain
  +All Resistances +10
  `,Mosaic:`
  +50% chance for finishing moves to not consume charges
  +2 to Martial Arts (Assassin only)
  +20% Increased Attack Speed
  +200-250% Enhanced Damage
  +20% Bonus to Attack Rating
  7% Life Steal
  +8-15% to Cold Skill Damage
  +8-15% to Lightning Skill Damage
  +8-15% to Fire Skill Damage
  Prevent Monster Heal
  `,Metamorphosis:`
  100% Chance to cast level 1 Mark of the Wolf on striking
  100% Chance to cast level 1 Mark of the Bear on striking
  +5 to Shape Shifting Skills (Druid only)
  +25% Chance of Crushing Blow
  +50-80% Enhanced Defense
  +10 to Strength
  +10 to Vitality
  All Resistances +10
  Cannot be Frozen
  `},$c=at({name:"RunewordPopup",data(){return{isVisible:!1,position:{x:0,y:0},runeword:{title:"",runes:[],ttypes:[],level:0},haveRunes:[]}},computed:{formatBody(){const e=this.runeword.title;let t=e&&Bc[e]||"---";return t=t.trim(),t=t.replace(/\+?[0-9]+(-[0-9]+)?%?/g,'<span class="is-mod">$&</span>'),t=t.replace(/####\s(.*)\n+/g,'<h4 class="is-title">$1</h4>'),t=t.replace(/\n/g,"<br/>"),t}},methods:{getRunesHtml(e){return ki(e,this.haveRunes)},getItemTypesHtml(e){return Fi(e)},getRoot(){return this.$refs.root},isMobile(){return document.documentElement.clientWidth<=768},moveTo(e){let{x:n,y:s}=e.getBoundingClientRect();n=n+50,s=s+window.pageYOffset+e.offsetHeight+4;const i=this.getRoot().offsetHeight,o=s+i,l=document.documentElement.clientHeight;let a=window.scrollY+l;a-=10,o>a&&(s=a-i,s=Math.max(window.scrollY+10,s)),this.position={x:n,y:s}},showRuneword(e,t,n){this.runeword=e,this.haveRunes=t,this.setVisible(!0),this.getRoot().classList.remove("fadein-enter-active"),this.getRoot().classList.add("fadein-enter-from"),this.$nextTick(()=>{this.moveTo(n),this.getRoot().classList.remove("fadein-enter-from"),this.getRoot().classList.add("fadein-enter-active")})},setVisible(e){this.isVisible=e},onPointerDown(e){switch(e.pointerType){case"mouse":this.setVisible(!1);break;case"touch":e.preventDefault(),e.stopPropagation(),window.setTimeout(()=>{this.setVisible(!1)},10);break}return!1},onLeave(){this.setVisible(!1)}}}),Wc={class:"rw-RunewordPopup-title ux-serif"},Vc=["innerHTML"],Nc=["innerHTML"],Kc=["innerHTML"];function Uc(e,t,n,s,r,i){return H(),B("div",{ref:"root",class:"rw-RunewordPopup absolute",style:Yt({visibility:e.isVisible?"visible":"hidden",left:e.isMobile()?"5%":`${e.position.x}px`,top:`${e.position.y}px`,width:e.isMobile()?"90%":"auto"}),onPointerup:t[0]||(t[0]=o=>e.onPointerDown(o)),onMouseleave:t[1]||(t[1]=o=>e.onLeave())},[b("h3",Wc,Re(e.runeword.title),1),b("div",{class:"rw-RunesTxt rw-RunesTxt--popup",innerHTML:e.getRunesHtml(e.runeword)},null,8,Vc),b("div",{class:"text-sm mb-2",innerHTML:e.getItemTypesHtml(e.runeword)},null,8,Nc),t[2]||(t[2]=b("div",{class:"rw-RunewordPopup-hr mb-3"},null,-1)),b("div",{class:"rw-RunewordPopup-body",innerHTML:e.formatBody},null,8,Kc)],36)}const qc=he($c,[["render",Uc]]);function ki(e,t){return e.runes.map(s=>`<span class="is-rune ${t[s]?"on":"off"}">${s}</span>`).join("")}function Fi(e){let t='<span class="rw-ItemTypes"><em>'+e.ttypes.map(n=>n.replace(" ","&nbsp;")).join("</em> /&nbsp;<em>");return e.tinfos&&(t+=`<div class="rw-ItemTypes-class">${e.tinfos}</div>`),t+="</span>",t}const Gc=at({name:"RunewordsTable",components:{IconArrowDown:Mc,IconArrowUp:Dc,IconCancel:As,IconCheckOn:Fc,IconCheckOff:Pc,RunewordPopup:qc},props:{items:{type:Array,required:!0}},data(){return{haveRunes:se.state.haveRunes,pinnedRunewords:se.state.pinned,sortKey:"level",sortAsc:!0,tableHeads:[{key:"title",label:"Runeword",textLeft:!0},{key:"runes",label:"Runes"},{key:"ttypes",label:"Item Types"},{key:"level",label:"Level"}],envGameVersion:"3.1.1"}},computed:{runewordIsComplete(){const e=new Map;return this.items.forEach(t=>{e.set(t.title,t.runes.every(n=>this.haveRunes[n]))}),e},itemsBySort(){const e=this.items.slice();let t;if(this.sortKey==="title")t=({title:r},{title:i})=>r===i?0:r>i?1:-1;else if(this.sortKey==="level")t=({level:r},{level:i})=>r===i?0:r>i?1:-1;else if(this.sortKey==="ttypes")t=({ttypes:r},{ttypes:i})=>r[0]===i[0]?0:r[0]>i[0]?1:-1;else if(/rune(\d)/.test(this.sortKey)){const r=parseInt(RegExp.$1);t=({runes:i},{runes:o})=>{const l=i[r],a=o[r];return l===a?0:l>a?1:-1}}t&&e.sort(t),!this.sortAsc&&e.reverse();const n=[...e.filter(r=>this.runewordIsComplete.get(r.title)),...e.filter(r=>!this.runewordIsComplete.get(r.title))];return[...n.filter(r=>this.pinnedRunewords.has(r.title)),...n.filter(r=>!this.pinnedRunewords.has(r.title))]},refPopup(){return this.$refs.popup}},methods:{cssCompleteRuneword(e){return this.runewordIsComplete.get(e.title)?"is-complete":""},getRunesHtml(e){return ki(e,this.haveRunes)},getTypeCellHtml(e){return Fi(e)},isSortKey(e){return e===this.sortKey},onEnterRuneword(e,t){e.preventDefault(),this.refPopup.showRuneword(t,this.haveRunes,e.target)},onLeaveRuneword(e){let t=this.refPopup.getRoot();t.contains(e.relatedTarget)||e.relatedTarget===t||this.refPopup.setVisible(!1)},onSortBy(e){this.sortAsc=this.sortKey===e?!this.sortAsc:!0,this.sortKey=e},onTogglePin(e){const t=se.isPinned(e);se.setPinned([e],!t),se.saveState()},unpinAll(){const e=se.getPinned();se.setPinned(e,!1),se.saveState()}}}),zc={class:"rw-Table w-full"},jc=["onClick"],Jc={key:0,class:"rw-Table-thIcon"},Xc={key:1,class:"rw-Table-thIcon"},Yc={key:0,class:"rw-Table-tr"},Zc={class:"rw-Table-td",colspan:"9"},Qc={class:"text-center mt-6 py-2 relative"},eu={key:1,class:"rw-Table-tr"},tu={class:"rw-Table-td rw-Table-tdTitle p-0 text-left relative min-w-[10em]"},nu=["onMouseenter","onClick","onTouchstart"],su={key:0,class:"rw-Md-ladder",title:"Ladder Only"},ru=["title"],iu=["innerHTML"],ou=["onClick"],lu={class:"rw-Table-td hidden md:table-cell text-left"},au=["innerHTML"],cu=["innerHTML"],uu={class:"rw-Table-td"};function fu(e,t,n,s,r,i){const o=ae("runeword-popup"),l=ae("icon-arrow-down"),a=ae("icon-arrow-up"),d=ae("icon-cancel"),u=ae("icon-check-on"),h=ae("icon-check-off");return H(),B(ce,null,[N(o,{ref:"popup"},null,512),b("table",zc,[b("thead",null,[b("tr",null,[(H(!0),B(ce,null,mn(e.tableHeads,g=>(H(),B("th",{key:g.key,class:rt(["rw-Table-th cursor-pointer",{"is-sortCol":e.isSortKey(g.key),"text-left":g.textLeft,"hidden md:table-cell":g.key==="runes"}]),onClick:R=>e.onSortBy(g.key)},[lt(Re(g.label)+" ",1),e.isSortKey(g.key)&&e.sortAsc?(H(),B("span",Jc,[N(l,{class:"ux-icon ux-icon--fw"})])):Me("",!0),e.isSortKey(g.key)&&!e.sortAsc?(H(),B("span",Xc,[N(a,{class:"ux-icon ux-icon--fw"})])):Me("",!0)],10,jc))),128))])]),b("tbody",null,[(H(!0),B(ce,null,mn(e.itemsBySort,(g,R)=>(H(),B(ce,{key:R},[e.pinnedRunewords.size&&R===0?(H(),B("tr",Yc,[b("td",Zc,[b("div",Qc,[t[3]||(t[3]=b("span",{class:"text-md text-gold tracking-[.2em]"},"PINNED RUNEWORDS",-1)),b("a",{class:"rw-Runes-clear absolute right-0 top-1",href:"#",onClick:t[0]||(t[0]=bs((...L)=>e.unpinAll&&e.unpinAll(...L),["prevent"]))},[N(d,{class:"ux-icon ux-icon--fw rw-Runes-clearIcon text-[#da0000] mr-1"}),t[2]||(t[2]=lt("unpin all ",-1))])])])])):Me("",!0),e.pinnedRunewords.size&&R===e.pinnedRunewords.size?(H(),B("tr",eu,[...t[4]||(t[4]=[b("td",{class:"rw-Table-td",colspan:"9"},[b("div",{class:"text-center text-md text-gold tracking-[.2em] mt-6 py-2"},"ALL RUNEWORDS")],-1)])])):Me("",!0),b("tr",{class:rt(["rw-Table-tr",e.cssCompleteRuneword(g)]),style:Yt({display:g.filterMatch?"":"none"})},[b("td",tu,[b("span",{class:"rw-Table-tdTitleSpan ux-serif cursor-pointer",onMouseenter:L=>e.onEnterRuneword(L,g),onMouseleave:t[1]||(t[1]=L=>e.onLeaveRuneword(L)),onClick:L=>e.onEnterRuneword(L,g),onTouchstart:L=>e.onEnterRuneword(L,g)},Re(g.title),41,nu),g.ladder?(H(),B("span",su,"L")):Me("",!0),g.version?(H(),B("span",{key:1,class:rt(["rw-Table-tdTitlePatch",[{"is-new":g.version===e.envGameVersion},`patch-${String(g.version).replace(".","-")}`]]),title:"Patch version"},Re(g.version),3)):Me("",!0),g.note?(H(),B("span",{key:2,class:"rw-Md-note",title:g.note},"Note!",8,ru)):Me("",!0),b("span",{class:"rw-RunesTxt rw-RunesTxtMbl md:hidden pl-4",innerHTML:e.getRunesHtml(g)},null,8,iu),b("div",{class:"rw-Table-pin hidden md:block",onClick:L=>e.onTogglePin(g.title)},[e.pinnedRunewords.has(g.title)?(H(),Tn(u,{key:0,class:"rw-Table-pinIcon"})):(H(),Tn(h,{key:1,class:"rw-Table-pinIcon"}))],8,ou)]),b("td",lu,[b("span",{class:"rw-RunesTxt",innerHTML:e.getRunesHtml(g)},null,8,au)]),b("td",{class:"rw-Table-td rw-Table-tdType min-w-[10em]",innerHTML:e.getTypeCellHtml(g)},null,8,cu),b("td",uu,Re(g.level),1)],6)],64))),128))])])],64)}const du=he(Gc,[["render",fu]]),hu=at({name:"Runewords",components:{RunewordsTable:du},data(){return{isHelpVisible:!1,runewordsList:[],searchText:""}},created(){this.runewordsList=Sc.slice(),this.updateFilter(this.searchText)},methods:{onSearchInput(){this.updateFilter(this.searchText)},updateFilter(e){const t=e.toLowerCase(),n=s=>{const r=s.title.toLowerCase().includes(t),i=s.ttypes.some(o=>o.toLowerCase().includes(t));return t===""||r||i};this.runewordsList.forEach(s=>{s.filterMatch=n(s)})}}}),pu={class:"rw-Search flex items-center mb-8 px-4 lg:px-0"};function gu(e,t,n,s,r,i){const o=ae("runewords-table");return H(),B("div",null,[b("div",pu,[t[2]||(t[2]=b("label",{class:"text-gold whitespace-nowrap mr-4"},Re("Search"),-1)),wo(b("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>e.searchText=l),type:"text",class:"rw-Search-input",onInput:t[1]||(t[1]=(...l)=>e.onSearchInput&&e.onSearchInput(...l)),placeholder:"Runeword name or item type"},null,544),[[ua,e.searchText]])]),b("div",null,[N(o,{items:e.runewordsList},null,8,["items"])])])}const mu=he(hu,[["render",gu]]),vu=at({name:"App",components:{AppHeader:Qa,AppFooter:fc,Runes:Cc,Runewords:mu},computed:{useLayoutHeader(){return!0}}}),yu={class:"rw-Layout-row rw-Main mx-auto lg:px-4 py-4 lg:flex mb-24"},Tu={class:"px-4 lg:px-0"},Cu={class:"flex-1 lg:ml-16"};function Su(e,t,n,s,r,i){const o=ae("app-header"),l=ae("runes"),a=ae("runewords"),d=ae("app-footer");return H(),B(ce,null,[e.useLayoutHeader?(H(),Tn(o,{key:0})):Me("",!0),b("main",yu,[b("div",Tu,[N(l)]),b("div",Cu,[N(a)])]),N(d)],64)}const bu=he(vu,[["render",Su]]),Au=()=>{se.initialize(),se.loadState()};Au();ga(bu).mount("#app");
