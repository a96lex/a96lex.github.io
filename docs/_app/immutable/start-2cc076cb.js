import{S as pt,i as ht,s as _t,a as mt,e as $,c as gt,b as X,g as ge,t as B,d as we,f as K,h as G,j as wt,o as Te,k as yt,l as bt,m as vt,n as Ie,p as H,q as Et,r as kt,u as Rt,v as Le,w as Q,x,y as De,z as ee,A as te,B as _e}from"./chunks/index-cdc7fb82.js";import{S as it,a as lt,I as F,g as Qe,f as xe,b as Ae,c as me,s as M,i as et,d as ie,e as Z,P as tt,h as St,j as It,k as Lt}from"./chunks/singletons-858511ff.js";import{_ as Y,R as nt,H as le}from"./chunks/control-654b50f6.js";function At(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function Pt(a){return a.split("%25").map(decodeURI).join("%25")}function Ot(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const Ut=["href","pathname","search","searchParams","toString","toJSON"];function Nt(a,e){const n=new URL(a);for(const s of Ut){let i=n[s];Object.defineProperty(n,s,{get(){return e(),i},enumerable:!0,configurable:!0})}return Tt(n),n}function Tt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const jt="/__data.json";function Dt(a){return a.replace(/\/$/,"")+jt}function ct(a){try{return JSON.parse(sessionStorage[a])}catch{}}function at(a,e){const n=JSON.stringify(e);try{sessionStorage[a]=n}catch{}}function Vt(...a){let e=5381;for(const n of a)if(typeof n=="string"){let s=n.length;for(;s;)e=e*33^n.charCodeAt(--s)}else if(ArrayBuffer.isView(n)){const s=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let i=s.length;for(;i;)e=e*33^s[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ye=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ce.delete(Ve(a)),ye(a,e));const ce=new Map;function Ct(a,e){const n=Ve(a,e),s=document.querySelector(n);if(s!=null&&s.textContent){const{body:i,...u}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&ce.set(n,{body:i,init:u,ttl:1e3*Number(t)}),Promise.resolve(new Response(i,u))}return ye(a,e)}function qt(a,e,n){if(ce.size>0){const s=Ve(a,n),i=ce.get(s);if(i){if(performance.now()<i.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(i.body,i.init);ce.delete(s)}}return ye(e,n)}function Ve(a,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;if(e!=null&&e.headers||e!=null&&e.body){const i=[];e.headers&&i.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&i.push(e.body),s+=`[data-hash="${Vt(...i)}"]`}return s}const Ft=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ht(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${$t(a).map(s=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(i)return e.push({name:i[1],matcher:i[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const t=s.split(/\[(.+?)\](?!\])/);return"/"+t.map((_,m)=>{if(m%2){if(_.startsWith("x+"))return Pe(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return Pe(String.fromCharCode(..._.slice(2).split("-").map(P=>parseInt(P,16))));const g=Ft.exec(_);if(!g)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,A,O,I,V]=g;return e.push({name:I,matcher:V,optional:!!A,rest:!!O,chained:O?m===1&&t[0]==="":!1}),O?"(.*?)":A?"([^/]*)?":"([^/]+?)"}return Pe(_)}).join("")}).join("")}/?$`),params:e}}function Mt(a){return!/^\([^)]+\)$/.test(a)}function $t(a){return a.slice(1).split("/").filter(Mt)}function Bt(a,e,n){const s={},i=a.slice(1);let u=0;for(let t=0;t<e.length;t+=1){const f=e[t],_=i[t-u];if(f.chained&&f.rest&&u){s[f.name]=i.slice(t-u,t+1).filter(m=>m).join("/"),u=0;continue}if(_===void 0){f.rest&&(s[f.name]="");continue}if(!f.matcher||n[f.matcher](_)){s[f.name]=_;continue}if(f.optional&&f.chained){u++;continue}return}if(!u)return s}function Pe(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Kt(a,e,n,s){const i=new Set(e);return Object.entries(n).map(([f,[_,m,g]])=>{const{pattern:A,params:O}=Ht(f),I={id:f,exec:V=>{const P=A.exec(V);if(P)return Bt(P,O,s)},errors:[1,...g||[]].map(V=>a[V]),layouts:[0,...m||[]].map(t),leaf:u(_)};return I.errors.length=I.layouts.length=Math.max(I.errors.length,I.layouts.length),I});function u(f){const _=f<0;return _&&(f=~f),[_,a[f]]}function t(f){return f===void 0?f:[i.has(f),a[f]]}}function Gt(a){let e,n,s;var i=a[1][0];function u(t){return{props:{data:t[3],form:t[2]}}}return i&&(e=Q(i,u(a)),a[12](e)),{c(){e&&x(e.$$.fragment),n=$()},l(t){e&&De(e.$$.fragment,t),n=$()},m(t,f){e&&ee(e,t,f),X(t,n,f),s=!0},p(t,f){const _={};if(f&8&&(_.data=t[3]),f&4&&(_.form=t[2]),i!==(i=t[1][0])){if(e){ge();const m=e;B(m.$$.fragment,1,0,()=>{te(m,1)}),we()}i?(e=Q(i,u(t)),t[12](e),x(e.$$.fragment),K(e.$$.fragment,1),ee(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){s||(e&&K(e.$$.fragment,t),s=!0)},o(t){e&&B(e.$$.fragment,t),s=!1},d(t){a[12](null),t&&G(n),e&&te(e,t)}}}function zt(a){let e,n,s;var i=a[1][0];function u(t){return{props:{data:t[3],$$slots:{default:[Jt]},$$scope:{ctx:t}}}}return i&&(e=Q(i,u(a)),a[11](e)),{c(){e&&x(e.$$.fragment),n=$()},l(t){e&&De(e.$$.fragment,t),n=$()},m(t,f){e&&ee(e,t,f),X(t,n,f),s=!0},p(t,f){const _={};if(f&8&&(_.data=t[3]),f&8215&&(_.$$scope={dirty:f,ctx:t}),i!==(i=t[1][0])){if(e){ge();const m=e;B(m.$$.fragment,1,0,()=>{te(m,1)}),we()}i?(e=Q(i,u(t)),t[11](e),x(e.$$.fragment),K(e.$$.fragment,1),ee(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){s||(e&&K(e.$$.fragment,t),s=!0)},o(t){e&&B(e.$$.fragment,t),s=!1},d(t){a[11](null),t&&G(n),e&&te(e,t)}}}function Jt(a){let e,n,s;var i=a[1][1];function u(t){return{props:{data:t[4],form:t[2]}}}return i&&(e=Q(i,u(a)),a[10](e)),{c(){e&&x(e.$$.fragment),n=$()},l(t){e&&De(e.$$.fragment,t),n=$()},m(t,f){e&&ee(e,t,f),X(t,n,f),s=!0},p(t,f){const _={};if(f&16&&(_.data=t[4]),f&4&&(_.form=t[2]),i!==(i=t[1][1])){if(e){ge();const m=e;B(m.$$.fragment,1,0,()=>{te(m,1)}),we()}i?(e=Q(i,u(t)),t[10](e),x(e.$$.fragment),K(e.$$.fragment,1),ee(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){s||(e&&K(e.$$.fragment,t),s=!0)},o(t){e&&B(e.$$.fragment,t),s=!1},d(t){a[10](null),t&&G(n),e&&te(e,t)}}}function rt(a){let e,n=a[6]&&ot(a);return{c(){e=yt("div"),n&&n.c(),this.h()},l(s){e=bt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=vt(e);n&&n.l(i),i.forEach(G),this.h()},h(){Ie(e,"id","svelte-announcer"),Ie(e,"aria-live","assertive"),Ie(e,"aria-atomic","true"),H(e,"position","absolute"),H(e,"left","0"),H(e,"top","0"),H(e,"clip","rect(0 0 0 0)"),H(e,"clip-path","inset(50%)"),H(e,"overflow","hidden"),H(e,"white-space","nowrap"),H(e,"width","1px"),H(e,"height","1px")},m(s,i){X(s,e,i),n&&n.m(e,null)},p(s,i){s[6]?n?n.p(s,i):(n=ot(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&G(e),n&&n.d()}}}function ot(a){let e;return{c(){e=Et(a[7])},l(n){e=kt(n,a[7])},m(n,s){X(n,e,s)},p(n,s){s&128&&Rt(e,n[7])},d(n){n&&G(e)}}}function Yt(a){let e,n,s,i,u;const t=[zt,Gt],f=[];function _(g,A){return g[1][1]?0:1}e=_(a),n=f[e]=t[e](a);let m=a[5]&&rt(a);return{c(){n.c(),s=mt(),m&&m.c(),i=$()},l(g){n.l(g),s=gt(g),m&&m.l(g),i=$()},m(g,A){f[e].m(g,A),X(g,s,A),m&&m.m(g,A),X(g,i,A),u=!0},p(g,[A]){let O=e;e=_(g),e===O?f[e].p(g,A):(ge(),B(f[O],1,1,()=>{f[O]=null}),we(),n=f[e],n?n.p(g,A):(n=f[e]=t[e](g),n.c()),K(n,1),n.m(s.parentNode,s)),g[5]?m?m.p(g,A):(m=rt(g),m.c(),m.m(i.parentNode,i)):m&&(m.d(1),m=null)},i(g){u||(K(n),u=!0)},o(g){B(n),u=!1},d(g){f[e].d(g),g&&G(s),m&&m.d(g),g&&G(i)}}}function Wt(a,e,n){let{stores:s}=e,{page:i}=e,{constructors:u}=e,{components:t=[]}=e,{form:f}=e,{data_0:_=null}=e,{data_1:m=null}=e;wt(s.page.notify);let g=!1,A=!1,O=null;Te(()=>{const k=s.page.subscribe(()=>{g&&(n(6,A=!0),n(7,O=document.title||"untitled page"))});return n(5,g=!0),k});function I(k){Le[k?"unshift":"push"](()=>{t[1]=k,n(0,t)})}function V(k){Le[k?"unshift":"push"](()=>{t[0]=k,n(0,t)})}function P(k){Le[k?"unshift":"push"](()=>{t[0]=k,n(0,t)})}return a.$$set=k=>{"stores"in k&&n(8,s=k.stores),"page"in k&&n(9,i=k.page),"constructors"in k&&n(1,u=k.constructors),"components"in k&&n(0,t=k.components),"form"in k&&n(2,f=k.form),"data_0"in k&&n(3,_=k.data_0),"data_1"in k&&n(4,m=k.data_1)},a.$$.update=()=>{a.$$.dirty&768&&s.page.set(i)},[t,u,f,_,m,g,A,O,s,i,I,V,P]}class Xt extends pt{constructor(e){super(),ht(this,e,Wt,Yt,_t,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const Zt={},be=[()=>Y(()=>import("./chunks/0-7801f4d4.js"),["./chunks/0-7801f4d4.js","./chunks/_layout-da46b06b.js","./components/pages/_layout.svelte-5f7df060.js","./chunks/index-cdc7fb82.js","./chunks/stores-6004bcda.js","./chunks/singletons-858511ff.js","./assets/_layout-83db264a.css"],import.meta.url),()=>Y(()=>import("./chunks/1-ebaf18d7.js"),["./chunks/1-ebaf18d7.js","./components/error.svelte-984a781a.js","./chunks/index-cdc7fb82.js","./chunks/stores-6004bcda.js","./chunks/singletons-858511ff.js"],import.meta.url),()=>Y(()=>import("./chunks/2-16dd00ca.js"),["./chunks/2-16dd00ca.js","./components/pages/blog/_slug_/_error.svelte-b48d525a.js","./chunks/index-cdc7fb82.js"],import.meta.url),()=>Y(()=>import("./chunks/3-25db6f3c.js"),["./chunks/3-25db6f3c.js","./components/pages/_page.svelte-09d9258f.js","./chunks/index-cdc7fb82.js"],import.meta.url),()=>Y(()=>import("./chunks/4-d126499d.js"),["./chunks/4-d126499d.js","./chunks/_page-79491c03.js","./chunks/control-654b50f6.js","./chunks/index-cbbaa776.js","./components/pages/blog/_page.svelte-dc3943b9.js","./chunks/index-cdc7fb82.js","./assets/_page-fa0d1101.css"],import.meta.url),()=>Y(()=>import("./chunks/5-d84d62e3.js"),["./chunks/5-d84d62e3.js","./chunks/_page-81c75cd2.js","./chunks/control-654b50f6.js","./chunks/index-cbbaa776.js","./components/pages/blog/_slug_/_page.svelte-70260e36.js","./chunks/index-cdc7fb82.js","./assets/_page-b4c690b8.css"],import.meta.url),()=>Y(()=>import("./chunks/6-7a49e25b.js"),["./chunks/6-7a49e25b.js","./components/pages/contact/_page.svelte-23f566b8.js","./chunks/index-cdc7fb82.js"],import.meta.url)],ft=[],Qt={"/":[3],"/blog":[4],"/blog/[slug]":[5,[],[2]],"/contact":[6]},xt={handleError:({error:a})=>{console.error(a)}};async function en(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([s,i])=>[s,await i])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const tn=-1,nn=-2,an=-3,rn=-4,on=-5,sn=-6;function ln(a,e){if(typeof a=="number")return i(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const n=a,s=Array(n.length);function i(u,t=!1){if(u===tn)return;if(u===an)return NaN;if(u===rn)return 1/0;if(u===on)return-1/0;if(u===sn)return-0;if(t)throw new Error("Invalid input");if(u in s)return s[u];const f=n[u];if(!f||typeof f!="object")s[u]=f;else if(Array.isArray(f))if(typeof f[0]=="string"){const _=f[0],m=e==null?void 0:e[_];if(m)return s[u]=m(i(f[1]));switch(_){case"Date":s[u]=new Date(f[1]);break;case"Set":const g=new Set;s[u]=g;for(let I=1;I<f.length;I+=1)g.add(i(f[I]));break;case"Map":const A=new Map;s[u]=A;for(let I=1;I<f.length;I+=2)A.set(i(f[I]),i(f[I+1]));break;case"RegExp":s[u]=new RegExp(f[1],f[2]);break;case"Object":s[u]=Object(f[1]);break;case"BigInt":s[u]=BigInt(f[1]);break;case"null":const O=Object.create(null);s[u]=O;for(let I=1;I<f.length;I+=2)O[f[I]]=i(f[I+1]);break;default:throw new Error(`Unknown type ${_}`)}}else{const _=new Array(f.length);s[u]=_;for(let m=0;m<f.length;m+=1){const g=f[m];g!==nn&&(_[m]=i(g))}}else{const _={};s[u]=_;for(const m in f){const g=f[m];_[m]=i(g)}}return s[u]}return i(0)}function cn(a){return a.filter(e=>e!=null)}const Oe=Kt(be,ft,Qt,Zt),ut=be[0],je=be[1];ut();je();const W=ct(it)??{},oe=ct(lt)??{};function Ue(a){W[a]=ie()}function fn({target:a}){var We;const e=document.documentElement,n=[],s=[];let i=null;const u={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,_=!1,m=!0,g=!1,A=!1,O=!1,I=!1,V,P=(We=history.state)==null?void 0:We[F];P||(P=Date.now(),history.replaceState({...history.state,[F]:P},"",location.href));const k=W[P];k&&(history.scrollRestoration="manual",scrollTo(k.x,k.y));let z,Ce,fe;async function qe(){fe=fe||Promise.resolve(),await fe,fe=null;const o=new URL(location.href),r=ae(o,!0);i=null,await $e(r,o,[])}function Fe(o){s.some(r=>r==null?void 0:r.snapshot)&&(oe[o]=s.map(r=>{var c;return(c=r==null?void 0:r.snapshot)==null?void 0:c.capture()}))}function He(o){var r;(r=oe[o])==null||r.forEach((c,l)=>{var p,d;(d=(p=s[l])==null?void 0:p.snapshot)==null||d.restore(c)})}async function ve(o,{noScroll:r=!1,replaceState:c=!1,keepFocus:l=!1,state:p={},invalidateAll:d=!1},w,h){return typeof o=="string"&&(o=new URL(o,Qe(document))),he({url:o,scroll:r?ie():null,keepfocus:l,redirect_chain:w,details:{state:p,replaceState:c},nav_token:h,accepted:()=>{d&&(I=!0)},blocked:()=>{},type:"goto"})}async function Me(o){return i={id:o.id,promise:Ge(o).then(r=>(r.type==="loaded"&&r.state.error&&(i=null),r))},i.promise}async function ue(...o){const c=Oe.filter(l=>o.some(p=>l.exec(p))).map(l=>Promise.all([...l.layouts,l.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(c)}async function $e(o,r,c,l,p,d={},w){var b,y,L;Ce=d;let h=o&&await Ge(o);if(h||(h=await Ye(r,{id:null},await se(new Error(`Not found: ${r.pathname}`),{url:r,params:{},route:{id:null}}),404)),r=(o==null?void 0:o.url)||r,Ce!==d)return!1;if(h.type==="redirect")if(c.length>10||c.includes(r.pathname))h=await de({status:500,error:await se(new Error("Redirect loop"),{url:r,params:{},route:{id:null}}),url:r,route:{id:null}});else return ve(new URL(h.location,r).href,{},[...c,r.pathname],d),!1;else((b=h.props.page)==null?void 0:b.status)>=400&&await M.updated.check()&&await re(r);if(n.length=0,I=!1,g=!0,l&&(Ue(l),Fe(l)),(y=h.props.page)!=null&&y.url&&h.props.page.url.pathname!==r.pathname&&(r.pathname=(L=h.props.page)==null?void 0:L.url.pathname),p&&p.details){const{details:R}=p,D=R.replaceState?0:1;if(R.state[F]=P+=D,history[R.replaceState?"replaceState":"pushState"](R.state,"",r),!R.replaceState){let S=P+1;for(;oe[S]||W[S];)delete oe[S],delete W[S],S+=1}}if(i=null,_?(t=h.state,h.props.page&&(h.props.page.url=r),V.$set(h.props)):Be(h),p){const{scroll:R,keepfocus:D}=p,{activeElement:S}=document;await _e();const v=document.activeElement!==S&&document.activeElement!==document.body;if(!D&&!v&&await Ne(),m){const U=r.hash&&document.getElementById(decodeURIComponent(r.hash.slice(1)));R?scrollTo(R.x,R.y):U?U.scrollIntoView():scrollTo(0,0)}}else await _e();m=!0,h.props.page&&(z=h.props.page),w&&w(),g=!1}function Be(o){var l;t=o.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),z=o.props.page,V=new Xt({target:a,props:{...o.props,stores:M,components:s},hydrate:!0}),He(P);const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};u.after_navigate.forEach(p=>p(c)),_=!0}async function ne({url:o,params:r,branch:c,status:l,error:p,route:d,form:w}){let h="never";for(const S of c)(S==null?void 0:S.slash)!==void 0&&(h=S.slash);o.pathname=At(o.pathname,h),o.search=o.search;const b={type:"loaded",state:{url:o,params:r,branch:c,error:p,route:d},props:{constructors:cn(c).map(S=>S.node.component)}};w!==void 0&&(b.props.form=w);let y={},L=!z,R=0;for(let S=0;S<Math.max(c.length,t.branch.length);S+=1){const v=c[S],U=t.branch[S];(v==null?void 0:v.data)!==(U==null?void 0:U.data)&&(L=!0),v&&(y={...y,...v.data},L&&(b.props[`data_${R}`]=y),R+=1)}return(!t.url||o.href!==t.url.href||t.error!==p||w!==void 0&&w!==z.form||L)&&(b.props.page={error:p,params:r,route:{id:(d==null?void 0:d.id)??null},status:l,url:new URL(o),form:w??null,data:L?y:z.data}),b}async function Ee({loader:o,parent:r,url:c,params:l,route:p,server_data_node:d}){var y,L,R;let w=null;const h={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await o();if((y=b.universal)!=null&&y.load){let D=function(...v){for(const U of v){const{href:C}=new URL(U,c);h.dependencies.add(C)}};const S={route:{get id(){return h.route=!0,p.id}},params:new Proxy(l,{get:(v,U)=>(h.params.add(U),v[U])}),data:(d==null?void 0:d.data)??null,url:Nt(c,()=>{h.url=!0}),async fetch(v,U){let C;v instanceof Request?(C=v.url,U={body:v.method==="GET"||v.method==="HEAD"?void 0:await v.blob(),cache:v.cache,credentials:v.credentials,headers:v.headers,integrity:v.integrity,keepalive:v.keepalive,method:v.method,mode:v.mode,redirect:v.redirect,referrer:v.referrer,referrerPolicy:v.referrerPolicy,signal:v.signal,...U}):C=v;const q=new URL(C,c);return D(q.href),q.origin===c.origin&&(C=q.href.slice(c.origin.length)),_?qt(C,q.href,U):Ct(C,U)},setHeaders:()=>{},depends:D,parent(){return h.parent=!0,r()}};w=await b.universal.load.call(null,S)??null,w=w?await en(w):null}return{node:b,loader:o,server:d,universal:(L=b.universal)!=null&&L.load?{type:"data",data:w,uses:h}:null,data:w??(d==null?void 0:d.data)??null,slash:((R=b.universal)==null?void 0:R.trailingSlash)??(d==null?void 0:d.slash)}}function Ke(o,r,c,l,p){if(I)return!0;if(!l)return!1;if(l.parent&&o||l.route&&r||l.url&&c)return!0;for(const d of l.params)if(p[d]!==t.params[d])return!0;for(const d of l.dependencies)if(n.some(w=>w(new URL(d))))return!0;return!1}function ke(o,r){return(o==null?void 0:o.type)==="data"?{type:"data",data:o.data,uses:{dependencies:new Set(o.uses.dependencies??[]),params:new Set(o.uses.params??[]),parent:!!o.uses.parent,route:!!o.uses.route,url:!!o.uses.url},slash:o.slash}:(o==null?void 0:o.type)==="skip"?r??null:null}async function Ge({id:o,invalidating:r,url:c,params:l,route:p}){if((i==null?void 0:i.id)===o)return i.promise;const{errors:d,layouts:w,leaf:h}=p,b=[...w,h];d.forEach(E=>E==null?void 0:E().catch(()=>{})),b.forEach(E=>E==null?void 0:E[1]().catch(()=>{}));let y=null;const L=t.url?o!==t.url.pathname+t.url.search:!1,R=t.route?p.id!==t.route.id:!1;let D=!1;const S=b.map((E,j)=>{var J;const N=t.branch[j],T=!!(E!=null&&E[0])&&((N==null?void 0:N.loader)!==E[1]||Ke(D,R,L,(J=N.server)==null?void 0:J.uses,l));return T&&(D=!0),T});if(S.some(Boolean)){try{y=await st(c,S)}catch(E){return de({status:E instanceof le?E.status:500,error:await se(E,{url:c,params:l,route:{id:p.id}}),url:c,route:p})}if(y.type==="redirect")return y}const v=y==null?void 0:y.nodes;let U=!1;const C=b.map(async(E,j)=>{var Re;if(!E)return;const N=t.branch[j],T=v==null?void 0:v[j];if((!T||T.type==="skip")&&E[1]===(N==null?void 0:N.loader)&&!Ke(U,R,L,(Re=N.universal)==null?void 0:Re.uses,l))return N;if(U=!0,(T==null?void 0:T.type)==="error")throw T;return Ee({loader:E[1],url:c,params:l,route:p,parent:async()=>{var Ze;const Xe={};for(let Se=0;Se<j;Se+=1)Object.assign(Xe,(Ze=await C[Se])==null?void 0:Ze.data);return Xe},server_data_node:ke(T===void 0&&E[0]?{type:"skip"}:T??null,E[0]?N==null?void 0:N.server:void 0)})});for(const E of C)E.catch(()=>{});const q=[];for(let E=0;E<b.length;E+=1)if(b[E])try{q.push(await C[E])}catch(j){if(j instanceof nt)return{type:"redirect",location:j.location};let N=500,T;if(v!=null&&v.includes(j))N=j.status??N,T=j.error;else if(j instanceof le)N=j.status,T=j.body;else{if(await M.updated.check())return await re(c);T=await se(j,{params:l,url:c,route:{id:p.id}})}const J=await ze(E,q,d);return J?await ne({url:c,params:l,branch:q.slice(0,J.idx).concat(J.node),status:N,error:T,route:p}):await Ye(c,{id:p.id},T,N)}else q.push(void 0);return await ne({url:c,params:l,branch:q,status:200,error:null,route:p,form:r?void 0:null})}async function ze(o,r,c){for(;o--;)if(c[o]){let l=o;for(;!r[l];)l-=1;try{return{idx:l+1,node:{node:await c[o](),loader:c[o],data:{},server:null,universal:null}}}catch{continue}}}async function de({status:o,error:r,url:c,route:l}){const p={};let d=null;if(ft[0]===0)try{const y=await st(c,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;d=y.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await re(c)}const h=await Ee({loader:ut,url:c,params:p,route:l,parent:()=>Promise.resolve({}),server_data_node:ke(d)}),b={node:await je(),loader:je,universal:null,server:null,data:null};return await ne({url:c,params:p,branch:[h,b],status:o,error:r,route:null})}function ae(o,r){if(et(o,Z))return;const c=pe(o);for(const l of Oe){const p=l.exec(c);if(p)return{id:o.pathname+o.search,invalidating:r,route:l,params:Ot(p),url:o}}}function pe(o){return Pt(o.pathname.slice(Z.length)||"/")}function Je({url:o,type:r,intent:c,delta:l}){var h,b;let p=!1;const d={from:{params:t.params,route:{id:((h=t.route)==null?void 0:h.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((b=c==null?void 0:c.route)==null?void 0:b.id)??null},url:o},willUnload:!c,type:r};l!==void 0&&(d.delta=l);const w={...d,cancel:()=>{p=!0}};return A||u.before_navigate.forEach(y=>y(w)),p?null:d}async function he({url:o,scroll:r,keepfocus:c,redirect_chain:l,details:p,type:d,delta:w,nav_token:h,accepted:b,blocked:y}){const L=ae(o,!1),R=Je({url:o,type:d,delta:w,intent:L});if(!R){y();return}const D=P;b(),A=!0,_&&M.navigating.set(R),await $e(L,o,l,D,{scroll:r,keepfocus:c,details:p},h,()=>{A=!1,u.after_navigate.forEach(S=>S(R)),M.navigating.set(null)})}async function Ye(o,r,c,l){return o.origin===location.origin&&o.pathname===location.pathname&&!f?await de({status:l,error:c,url:o,route:r}):await re(o)}function re(o){return location.href=o.href,new Promise(()=>{})}function dt(){let o;e.addEventListener("mousemove",d=>{const w=d.target;clearTimeout(o),o=setTimeout(()=>{l(w,2)},20)});function r(d){l(d.composedPath()[0],1)}e.addEventListener("mousedown",r),e.addEventListener("touchstart",r,{passive:!0});const c=new IntersectionObserver(d=>{for(const w of d)w.isIntersecting&&(ue(pe(new URL(w.target.href))),c.unobserve(w.target))},{threshold:0});function l(d,w){const h=xe(d,e);if(!h)return;const{url:b,external:y}=Ae(h,Z);if(y)return;const L=me(h);if(!L.reload)if(w<=L.preload_data){const R=ae(b,!1);R&&Me(R)}else w<=L.preload_code&&ue(pe(b))}function p(){c.disconnect();for(const d of e.querySelectorAll("a")){const{url:w,external:h}=Ae(d,Z);if(h)continue;const b=me(d);b.reload||(b.preload_code===tt.viewport&&c.observe(d),b.preload_code===tt.eager&&ue(pe(w)))}}u.after_navigate.push(p),p()}return{after_navigate:o=>{Te(()=>(u.after_navigate.push(o),()=>{const r=u.after_navigate.indexOf(o);u.after_navigate.splice(r,1)}))},before_navigate:o=>{Te(()=>(u.before_navigate.push(o),()=>{const r=u.before_navigate.indexOf(o);u.before_navigate.splice(r,1)}))},disable_scroll_handling:()=>{(g||!_)&&(m=!1)},goto:(o,r={})=>ve(o,r,[]),invalidate:o=>{if(typeof o=="function")n.push(o);else{const{href:r}=new URL(o,location.href);n.push(c=>c.href===r)}return qe()},invalidateAll:()=>(I=!0,qe()),preload_data:async o=>{const r=new URL(o,Qe(document)),c=ae(r,!1);if(!c)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);await Me(c)},preload_code:ue,apply_action:async o=>{if(o.type==="error"){const r=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const p=await ze(t.branch.length,c,l.errors);if(p){const d=await ne({url:r,params:t.params,branch:c.slice(0,p.idx).concat(p.node),status:o.status??500,error:o.error,route:l});t=d.state,V.$set(d.props),_e().then(Ne)}}else if(o.type==="redirect")ve(o.location,{invalidateAll:!0},[]);else{const r={form:o.data,page:{...z,form:o.data,status:o.status}};V.$set(r),o.type==="success"&&_e().then(Ne)}},_start_router:()=>{var o;history.scrollRestoration="manual",addEventListener("beforeunload",r=>{var l;let c=!1;if(!A){const p={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};u.before_navigate.forEach(d=>d(p))}c?(r.preventDefault(),r.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&(Ue(P),at(it,W),Fe(P),at(lt,oe))}),(o=navigator.connection)!=null&&o.saveData||dt(),e.addEventListener("click",r=>{if(r.button||r.which!==1||r.metaKey||r.ctrlKey||r.shiftKey||r.altKey||r.defaultPrevented)return;const c=xe(r.composedPath()[0],e);if(!c)return;const{url:l,external:p,target:d}=Ae(c,Z);if(!l)return;if(d==="_parent"||d==="_top"){if(window.parent!==window)return}else if(d&&d!=="_self")return;const w=me(c);if(!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:"))return;if(p||w.reload){Je({url:l,type:"link"})||r.preventDefault(),A=!0;return}const[b,y]=l.href.split("#");if(y!==void 0&&b===location.href.split("#")[0]){O=!0,Ue(P),t.url=l,M.page.set({...z,url:l}),M.page.notify();return}he({url:l,scroll:w.noscroll?ie():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>r.preventDefault(),blocked:()=>r.preventDefault(),type:"link"})}),e.addEventListener("submit",r=>{if(r.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(r.target),l=r.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const d=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(et(d,Z))return;const w=r.target,{noscroll:h,reload:b}=me(w);if(b)return;r.preventDefault(),r.stopPropagation();const y=new FormData(w),L=l==null?void 0:l.getAttribute("name");L&&y.append(L,(l==null?void 0:l.getAttribute("value"))??""),d.search=new URLSearchParams(y).toString(),he({url:d,scroll:h?ie():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async r=>{var c;if((c=r.state)!=null&&c[F]){if(r.state[F]===P)return;const l=W[r.state[F]];if(t.url.href.split("#")[0]===location.href.split("#")[0]){W[P]=ie(),P=r.state[F],scrollTo(l.x,l.y);return}const p=r.state[F]-P;let d=!1;await he({url:new URL(location.href),scroll:l,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=r.state[F]},blocked:()=>{history.go(-p),d=!0},type:"popstate",delta:p}),d||He(P)}}),addEventListener("hashchange",()=>{O&&(O=!1,history.replaceState({...history.state,[F]:++P},"",location.href))});for(const r of document.querySelectorAll("link"))r.rel==="icon"&&(r.href=r.href);addEventListener("pageshow",r=>{r.persisted&&M.navigating.set(null)})},_hydrate:async({status:o=200,error:r,node_ids:c,params:l,route:p,data:d,form:w})=>{f=!0;const h=new URL(location.href);({params:l={},route:p={id:null}}=ae(h,!1)||{});let b;try{const y=c.map(async(L,R)=>{const D=d[R];return Ee({loader:be[L],url:h,params:l,route:p,parent:async()=>{const S={};for(let v=0;v<R;v+=1)Object.assign(S,(await y[v]).data);return S},server_data_node:ke(D)})});b=await ne({url:h,params:l,branch:await Promise.all(y),status:o,error:r,form:w,route:Oe.find(({id:L})=>L===p.id)??null})}catch(y){if(y instanceof nt){await re(new URL(y.location,location.href));return}b=await de({status:y instanceof le?y.status:500,error:await se(y,{url:h,params:l,route:p}),url:h,route:p})}Be(b)}}}async function st(a,e){var u;const n=new URL(a);n.pathname=Dt(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const s=await ye(n.href),i=await s.json();if(!s.ok)throw new le(s.status,i);return(u=i.nodes)==null||u.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=ln(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),i}function se(a,e){return a instanceof le?a.body:xt.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Ne(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(s=>{setTimeout(()=>{var i;s((i=getSelection())==null?void 0:i.removeAllRanges())})})}}async function hn({assets:a,env:e,hydrate:n,target:s,version:i}){It(a),Lt(i);const u=fn({target:s});St({client:u}),n?await u._hydrate(n):u.goto(location.href,{replaceState:!0}),u._start_router()}export{hn as start};