(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();const qt=!1;var nt=Array.isArray,$e=Array.from,zt=Object.defineProperty,Ke=Object.getOwnPropertyDescriptor,at=Object.getOwnPropertyDescriptors,ot=Object.getPrototypeOf;function Bt(e){return e()}function Le(e){for(var t=0;t<e.length;t++)e[t]()}const M=2,it=4,ue=8,qe=16,F=32,Ee=64,Ne=128,X=256,me=512,S=1024,W=2048,fe=4096,O=8192,ee=16384,Vt=32768,ze=65536,Ht=1<<19,lt=1<<20,Je=Symbol("$state"),Ut=Symbol("");function st(e){return e===this.v}function Wt(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function ut(e){return!Wt(e,this.v)}function Yt(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Gt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Kt(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Jt(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Xt(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function jt(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let ce=!1;function Zt(){ce=!0}const Qt=1,er=2,tr=16,rr=1,nr=2,ar=Symbol();function ye(e,t){var r={f:0,v:e,reactions:null,equals:st,version:0};return r}function ft(e,t=!1){var n;const r=ye(e);return t||(r.equals=ut),ce&&y!==null&&y.l!==null&&((n=y.l).s??(n.s=[])).push(r),r}function Ce(e,t=!1){return or(ft(e,t))}function or(e){return m!==null&&m.f&M&&(R===null?wr([e]):R.push(e)),e}function pe(e,t){return m!==null&&We()&&m.f&(M|qe)&&(R===null||!R.includes(e))&&jt(),ct(e,t)}function ct(e,t){return e.equals(t)||(e.v=t,e.version=Nt(),vt(e,W),We()&&h!==null&&h.f&S&&!(h.f&F)&&(T!==null&&T.includes(e)?($(h,W),Se(h)):U===null?br([e]):U.push(e))),t}function vt(e,t){var r=e.reactions;if(r!==null)for(var n=We(),a=r.length,o=0;o<a;o++){var i=r[o],f=i.f;f&W||!n&&i===h||($(i,t),f&(S|X)&&(f&M?vt(i,fe):Se(i)))}}let dt=!1;var Xe,pt,ht;function ir(){if(Xe===void 0){Xe=window;var e=Element.prototype,t=Node.prototype;pt=Ke(t,"firstChild").get,ht=Ke(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function _t(e=""){return document.createTextNode(e)}function Q(e){return pt.call(e)}function Ae(e){return ht.call(e)}function x(e,t){return Q(e)}function lr(e,t){{var r=Q(e);return r instanceof Comment&&r.data===""?Ae(r):r}}function E(e,t=1,r=!1){let n=e;for(;t--;)n=Ae(n);return n}function sr(e){e.textContent=""}function gt(e){var t=M|W;h===null?t|=X:h.f|=lt;var r=m!==null&&m.f&M?m:null;const n={children:null,ctx:y,deps:null,equals:st,f:t,fn:e,reactions:null,v:null,version:0,parent:r??h};return r!==null&&(r.children??(r.children=[])).push(n),n}function ur(e){const t=gt(e);return t.equals=ut,t}function mt(e){var t=e.children;if(t!==null){e.children=null;for(var r=0;r<t.length;r+=1){var n=t[r];n.f&M?Be(n):Y(n)}}}function fr(e){for(var t=e.parent;t!==null;){if(!(t.f&M))return t;t=t.parent}return null}function yt(e){var t,r=h;K(fr(e));try{mt(e),t=Ct(e)}finally{K(r)}return t}function wt(e){var t=yt(e),r=(J||e.f&X)&&e.deps!==null?fe:S;$(e,r),e.equals(t)||(e.v=t,e.version=Nt())}function Be(e){mt(e),se(e,0),$(e,ee),e.v=e.children=e.deps=e.ctx=e.reactions=null}function bt(e){h===null&&m===null&&Kt(),m!==null&&m.f&X&&Gt(),Ue&&Yt()}function cr(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function te(e,t,r,n=!0){var a=(e&Ee)!==0,o=h,i={ctx:y,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|W,first:null,fn:t,last:null,next:null,parent:a?null:o,prev:null,teardown:null,transitions:null,version:0};if(r){var f=Z;try{je(!0),Ie(i),i.f|=Vt}catch(c){throw Y(i),c}finally{je(f)}}else t!==null&&Se(i);var l=r&&i.deps===null&&i.first===null&&i.nodes_start===null&&i.teardown===null&&(i.f&lt)===0;if(!l&&!a&&n&&(o!==null&&cr(i,o),m!==null&&m.f&M)){var u=m;(u.children??(u.children=[])).push(i)}return i}function vr(e){const t=te(ue,null,!1);return $(t,S),t.teardown=e,t}function Me(e){bt();var t=h!==null&&(h.f&F)!==0&&y!==null&&!y.m;if(t){var r=y;(r.e??(r.e=[])).push({fn:e,effect:h,reaction:m})}else{var n=xt(e);return n}}function dr(e){return bt(),hr(e)}function pr(e){const t=te(Ee,e,!0);return(r={})=>new Promise(n=>{r.outro?we(t,()=>{Y(t),n(void 0)}):(Y(t),n(void 0))})}function xt(e){return te(it,e,!1)}function hr(e){return te(ue,e,!0)}function z(e){return Ve(e)}function Ve(e,t=0){return te(ue|qe|t,e,!0)}function le(e,t=!0){return te(ue|F,e,!0,t)}function kt(e){var t=e.teardown;if(t!==null){const r=Ue,n=m;Ze(!0),G(null);try{t.call(null)}finally{Ze(r),G(n)}}}function Et(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var r=0;r<t.length;r+=1)Be(t[r])}}function At(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var n=r.next;Y(r,t),r=n}}function _r(e){for(var t=e.first;t!==null;){var r=t.next;t.f&F||Y(t),t=r}}function Y(e,t=!0){var r=!1;if((t||e.f&Ht)&&e.nodes_start!==null){for(var n=e.nodes_start,a=e.nodes_end;n!==null;){var o=n===a?null:Ae(n);n.remove(),n=o}r=!0}At(e,t&&!r),Et(e),se(e,0),$(e,ee);var i=e.transitions;if(i!==null)for(const l of i)l.stop();kt(e);var f=e.parent;f!==null&&f.first!==null&&Tt(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Tt(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function we(e,t){var r=[];He(e,r,!0),It(r,()=>{Y(e),t&&t()})}function It(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function He(e,t,r){if(!(e.f&O)){if(e.f^=O,e.transitions!==null)for(const i of e.transitions)(i.is_global||r)&&t.push(i);for(var n=e.first;n!==null;){var a=n.next,o=(n.f&ze)!==0||(n.f&F)!==0;He(n,t,o?r:!1),n=a}}}function be(e){St(e,!0)}function St(e,t){if(e.f&O){ve(e)&&Ie(e),e.f^=O;for(var r=e.first;r!==null;){var n=r.next,a=(r.f&ze)!==0||(r.f&F)!==0;St(r,a?t:!1),r=n}if(e.transitions!==null)for(const o of e.transitions)(o.is_global||t)&&o.in()}}let De=!1,Pe=[];function gr(){De=!1;const e=Pe.slice();Pe=[],Le(e)}function mr(e){De||(De=!0,queueMicrotask(gr)),Pe.push(e)}function yr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let he=!1,xe=!1,ke=null,Z=!1,Ue=!1;function je(e){Z=e}function Ze(e){Ue=e}let Oe=[],ae=0;let m=null;function G(e){m=e}let h=null;function K(e){h=e}let R=null;function wr(e){R=e}let T=null,N=0,U=null;function br(e){U=e}let Lt=1,J=!1,y=null;function Nt(){return++Lt}function We(){return!ce||y!==null&&y.l===null}function ve(e){var u;var t=e.f;if(t&W)return!0;if(t&fe){var r=e.deps,n=(t&X)!==0;if(r!==null){var a,o,i=(t&me)!==0,f=n&&h!==null&&!J,l=r.length;if(i||f){for(a=0;a<l;a++)o=r[a],(u=o==null?void 0:o.reactions)!=null&&u.includes(e)||(o.reactions??(o.reactions=[])).push(e);i&&(e.f^=me)}for(a=0;a<l;a++)if(o=r[a],ve(o)&&wt(o),o.version>e.version)return!0}(!n||h!==null&&!J)&&$(e,S)}return!1}function xr(e,t){for(var r=t;r!==null;){if(r.f&Ne)try{r.fn(e);return}catch{r.f^=Ne}r=r.parent}throw he=!1,e}function kr(e){return(e.f&ee)===0&&(e.parent===null||(e.parent.f&Ne)===0)}function Te(e,t,r,n){if(he){if(r===null&&(he=!1),kr(t))throw e;return}r!==null&&(he=!0);{xr(e,t);return}}function Ct(e){var v;var t=T,r=N,n=U,a=m,o=J,i=R,f=y,l=e.f;T=null,N=0,U=null,m=l&(F|Ee)?null:e,J=!Z&&(l&X)!==0,R=null,y=e.ctx;try{var u=(0,e.fn)(),c=e.deps;if(T!==null){var s;if(se(e,N),c!==null&&N>0)for(c.length=N+T.length,s=0;s<T.length;s++)c[N+s]=T[s];else e.deps=c=T;if(!J)for(s=N;s<c.length;s++)((v=c[s]).reactions??(v.reactions=[])).push(e)}else c!==null&&N<c.length&&(se(e,N),c.length=N);return u}finally{T=t,N=r,U=n,m=a,J=o,R=i,y=f}}function Er(e,t){let r=t.reactions;if(r!==null){var n=r.indexOf(e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&t.f&M&&(T===null||!T.includes(t))&&($(t,fe),t.f&(X|me)||(t.f^=me),se(t,0))}function se(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Er(e,r[n])}function Ie(e){var t=e.f;if(!(t&ee)){$(e,S);var r=h,n=y;h=e;try{t&qe?_r(e):At(e),Et(e),kt(e);var a=Ct(e);e.teardown=typeof a=="function"?a:null,e.version=Lt}catch(o){Te(o,e,r,n||e.ctx)}finally{h=r}}}function Ar(){if(ae>1e3){ae=0;try{Jt()}catch(e){if(ke!==null)Te(e,ke,null);else throw e}}ae++}function Tr(e){var t=e.length;if(t!==0){Ar();var r=Z;Z=!0;try{for(var n=0;n<t;n++){var a=e[n];a.f&S||(a.f^=S);var o=[];Mt(a,o),Ir(o)}}finally{Z=r}}}function Ir(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var n=e[r];if(!(n.f&(ee|O)))try{ve(n)&&(Ie(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?Tt(n):n.fn=null))}catch(a){Te(a,n,null,n.ctx)}}}function Sr(){if(xe=!1,ae>1001)return;const e=Oe;Oe=[],Tr(e),xe||(ae=0,ke=null)}function Se(e){xe||(xe=!0,queueMicrotask(Sr)),ke=e;for(var t=e;t.parent!==null;){t=t.parent;var r=t.f;if(r&(Ee|F)){if(!(r&S))return;t.f^=S}}Oe.push(t)}function Mt(e,t){var r=e.first,n=[];e:for(;r!==null;){var a=r.f,o=(a&F)!==0,i=o&&(a&S)!==0,f=r.next;if(!i&&!(a&O))if(a&ue){if(o)r.f^=S;else try{ve(r)&&Ie(r)}catch(s){Te(s,r,null,r.ctx)}var l=r.first;if(l!==null){r=l;continue}}else a&it&&n.push(r);if(f===null){let s=r.parent;for(;s!==null;){if(e===s)break e;var u=s.next;if(u!==null){r=u;continue e}s=s.parent}}r=f}for(var c=0;c<n.length;c++)l=n[c],t.push(l),Mt(l,t)}function g(e){var c;var t=e.f,r=(t&M)!==0;if(r&&t&ee){var n=yt(e);return Be(e),n}if(m!==null){R!==null&&R.includes(e)&&Xt();var a=m.deps;T===null&&a!==null&&a[N]===e?N++:T===null?T=[e]:T.push(e),U!==null&&h!==null&&h.f&S&&!(h.f&F)&&U.includes(e)&&($(h,W),Se(h))}else if(r&&e.deps===null)for(var o=e,i=o.parent,f=o;i!==null;)if(i.f&M){var l=i;f=l,i=l.parent}else{var u=i;(c=u.deriveds)!=null&&c.includes(f)||(u.deriveds??(u.deriveds=[])).push(f);break}return r&&(o=e,ve(o)&&wt(o)),e.v}function Dt(e){const t=m;try{return m=null,e()}finally{m=t}}const Lr=~(W|fe|S);function $(e,t){e.f=e.f&Lr|t}function Ye(e,t=!1,r){y={p:y,c:null,e:null,m:!1,s:e,x:null,l:null},ce&&!t&&(y.l={s:null,u:null,r1:[],r2:ye(!1)})}function Ge(e){const t=y;if(t!==null){const i=t.e;if(i!==null){var r=h,n=m;t.e=null;try{for(var a=0;a<i.length;a++){var o=i[a];K(o.effect),G(o.reaction),xt(o.fn)}}finally{K(r),G(n)}}y=t.p,t.m=!0}return{}}function Nr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Je in e)Re(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&Je in r&&Re(r)}}}function Re(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{Re(e[n],t)}catch{}const r=ot(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=at(r);for(let a in n){const o=n[a].get;if(o)try{o.call(e)}catch{}}}}}const Cr=["touchstart","touchmove"];function Mr(e){return Cr.includes(e)}function Dr(e){var t=m,r=h;G(null),K(null);try{return e()}finally{G(t),K(r)}}const Pr=new Set,Qe=new Set;function Or(e,t,r,n){function a(o){if(n.capture||re.call(t,o),!o.cancelBubble)return Dr(()=>r.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?mr(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function Rr(e,t,r,n,a){var o={capture:n,passive:a},i=Or(e,t,r,o);(t===document.body||t===window||t===document)&&vr(()=>{t.removeEventListener(e,i,o)})}function re(e){var _;var t=this,r=t.ownerDocument,n=e.type,a=((_=e.composedPath)==null?void 0:_.call(e))||[],o=a[0]||e.target,i=0,f=e.__root;if(f){var l=a.indexOf(f);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var u=a.indexOf(t);if(u===-1)return;l<=u&&(i=l)}if(o=a[i]||e.target,o!==t){zt(e,"currentTarget",{configurable:!0,get(){return o||r}});var c=m,s=h;G(null),K(null);try{for(var v,d=[];o!==null;){var p=o.assignedSlot||o.parentNode||o.host||null;try{var w=o["__"+n];if(w!==void 0&&!o.disabled)if(nt(w)){var[I,...L]=w;I.apply(o,[e,...L])}else w.call(o,e)}catch(b){v?d.push(b):v=b}if(e.cancelBubble||p===t||p===null)break;o=p}if(v){for(let b of d)queueMicrotask(()=>{throw b});throw v}}finally{e.__root=t,delete e.currentTarget,G(c),K(s)}}}function Pt(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function Fe(e,t){var r=h;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function A(e,t){var r=(t&rr)!==0,n=(t&nr)!==0,a,o=!e.startsWith("<!>");return()=>{a===void 0&&(a=Pt(o?e:"<!>"+e),r||(a=Q(a)));var i=n?document.importNode(a,!0):a.cloneNode(!0);if(r){var f=Q(i),l=i.lastChild;Fe(f,l)}else Fe(i,i);return i}}function Ot(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,o;return()=>{if(!o){var i=Pt(a),f=Q(i);o=Q(f)}var l=o.cloneNode(!0);return Fe(l,l),l}}function k(e,t){e!==null&&e.before(t)}function H(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function Fr(e,t){return $r(e,t)}const j=new Map;function $r(e,{target:t,anchor:r,props:n={},events:a,context:o,intro:i=!0}){ir();var f=new Set,l=s=>{for(var v=0;v<s.length;v++){var d=s[v];if(!f.has(d)){f.add(d);var p=Mr(d);t.addEventListener(d,re,{passive:p});var w=j.get(d);w===void 0?(document.addEventListener(d,re,{passive:p}),j.set(d,1)):j.set(d,w+1)}}};l($e(Pr)),Qe.add(l);var u=void 0,c=pr(()=>{var s=r??t.appendChild(_t());return le(()=>{if(o){Ye({});var v=y;v.c=o}a&&(n.$$events=a),u=e(s,n)||{},o&&Ge()}),()=>{var p;for(var v of f){t.removeEventListener(v,re);var d=j.get(v);--d===0?(document.removeEventListener(v,re),j.delete(v)):j.set(v,d)}Qe.delete(l),s!==r&&((p=s.parentNode)==null||p.removeChild(s))}});return qr.set(u,c),u}let qr=new WeakMap;function _e(e,t,r=!1){var n=e,a=null,o=null,i=ar,f=r?ze:0,l=!1;const u=(s,v=!0)=>{l=!0,c(v,s)},c=(s,v)=>{i!==(i=s)&&(i?(a?be(a):v&&(a=le(()=>v(n))),o&&we(o,()=>{o=null})):(o?be(o):v&&(o=le(()=>v(n))),a&&we(a,()=>{a=null})))};Ve(()=>{l=!1,t(u),l||c(null,null)},f)}function oe(e,t){return t}function zr(e,t,r,n){for(var a=[],o=t.length,i=0;i<o;i++)He(t[i].e,a,!0);var f=o>0&&a.length===0&&r!==null;if(f){var l=r.parentNode;sr(l),l.append(r),n.clear(),V(e,t[0].prev,t[o-1].next)}It(a,()=>{for(var u=0;u<o;u++){var c=t[u];f||(n.delete(c.k),V(e,c.prev,c.next)),Y(c.e,!f)}})}function ie(e,t,r,n,a,o=null){var i=e,f={flags:t,items:new Map,first:null};{var l=e;i=l.appendChild(_t())}var u=null,c=!1;Ve(()=>{var s=r(),v=nt(s)?s:s==null?[]:$e(s),d=v.length;if(!(c&&d===0)){c=d===0;{var p=m;Br(v,f,i,a,t,(p.f&O)!==0,n)}o!==null&&(d===0?u?be(u):u=le(()=>o(i)):u!==null&&we(u,()=>{u=null})),r()}})}function Br(e,t,r,n,a,o,i,f){var l=e.length,u=t.items,c=t.first,s=c,v,d=null,p=[],w=[],I,L,_,b;for(b=0;b<l;b+=1){if(I=e[b],L=i(I,b),_=u.get(L),_===void 0){var C=s?s.e.nodes_start:r;d=Hr(C,t,d,d===null?t.first:d.next,I,L,b,n,a),u.set(L,d),p=[],w=[],s=d.next;continue}if(Vr(_,I,b),_.e.f&O&&be(_.e),_!==s){if(v!==void 0&&v.has(_)){if(p.length<w.length){var B=w[0],D;d=B.prev;var de=p[0],P=p[p.length-1];for(D=0;D<p.length;D+=1)et(p[D],B,r);for(D=0;D<w.length;D+=1)v.delete(w[D]);V(t,de.prev,P.next),V(t,d,de),V(t,P,B),s=B,d=P,b-=1,p=[],w=[]}else v.delete(_),et(_,s,r),V(t,_.prev,_.next),V(t,_,d===null?t.first:d.next),V(t,d,_),d=_;continue}for(p=[],w=[];s!==null&&s.k!==L;)(o||!(s.e.f&O))&&(v??(v=new Set)).add(s),w.push(s),s=s.next;if(s===null)continue;_=s}p.push(_),d=_,s=_.next}if(s!==null||v!==void 0){for(var q=v===void 0?[]:$e(v);s!==null;)(o||!(s.e.f&O))&&q.push(s),s=s.next;var Ft=q.length;if(Ft>0){var $t=l===0?r:null;zr(t,q,$t,u)}}h.first=t.first&&t.first.e,h.last=d&&d.e}function Vr(e,t,r,n){ct(e.v,t),e.i=r}function Hr(e,t,r,n,a,o,i,f,l,u){var c=(l&Qt)!==0,s=(l&tr)===0,v=c?s?ft(a):ye(a):a,d=l&er?ye(i):i,p={i:d,v,k:o,a:null,e:null,prev:r,next:n};try{return p.e=le(()=>f(e,v,d),dt),p.e.prev=r&&r.e,p.e.next=n&&n.e,r===null?t.first=p:(r.next=p,r.e.next=p.e),n!==null&&(n.prev=p,n.e.prev=p.e),p}finally{}}function et(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,o=e.e.nodes_start;o!==n;){var i=Ae(o);a.before(o),o=i}}function V(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function ge(e,t,r,n){var a=e.__attributes??(e.__attributes={});a[t]!==(a[t]=r)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[Ut]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Ur(e).includes(t)?e[t]=r:e.setAttribute(t,r))}var tt=new Map;function Ur(e){var t=tt.get(e.nodeName);if(t)return t;tt.set(e.nodeName,t=[]);for(var r,n=e,a=Element.prototype;a!==n;){r=at(n);for(var o in r)r[o].set&&t.push(o);n=ot(n)}return t}function ne(e,t,r){var n=e.__className,a=Wr(t);(n!==a||dt)&&(t==null&&!r?e.removeAttribute("class"):e.className=a,e.__className=a)}function Wr(e,t){return(e??"")+""}function Rt(e=!1){const t=y,r=t.l.u;if(!r)return;let n=()=>Nr(t.s);if(e){let a=0,o={};const i=gt(()=>{let f=!1;const l=t.s;for(const u in l)l[u]!==o[u]&&(o[u]=l[u],f=!0);return f&&a++,a});n=()=>g(i)}r.b.length&&dr(()=>{rt(t,n),Le(r.b)}),Me(()=>{const a=Dt(()=>r.m.map(Bt));return()=>{for(const o of a)typeof o=="function"&&o()}}),r.a.length&&Me(()=>{rt(t,n),Le(r.a)})}function rt(e,t){if(e.l.s)for(const r of e.l.s)g(r);t()}function Yr(e){y===null&&yr(),ce&&y.l!==null?Gr(y).m.push(e):Me(()=>{const t=Dt(e);if(typeof t=="function")return t})}function Gr(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const Kr="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Kr);Zt();var Jr=Ot('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6 text-gray-100"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>'),Xr=Ot('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6 text-yellow-500"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path></svg>'),jr=A('<button aria-label="Toggle theme" class="p-2 rounded-full focus:outline-none"><!></button>');function Zr(e,t){Ye(t,!1);let r=Ce(localStorage.darkMode==="true"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches);g(r)?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark");function n(){pe(r,!g(r)),localStorage.darkMode=g(r),document.documentElement.classList.toggle("dark")}Rt();var a=jr(),o=x(a);{var i=l=>{var u=Jr();k(l,u)},f=l=>{var u=Xr();k(l,u)};_e(o,l=>{g(r)?l(i):l(f,!1)})}Rr("click",a,n),k(e,a),Ge()}var Qr=A("<div></div>");function en(e,t){Ye(t,!1);let r=Ce(""),n=Ce("opacity-0");const a=(f,l)=>{pe(n,"opacity-20"),pe(r,`background: radial-gradient(500px at ${f}px ${l}px, currentColor, transparent 70%)`)},o=()=>{pe(n,"opacity-0")};Yr(()=>{const f=u=>{a(u.clientX,u.clientY)},l=u=>{u.touches.length>0&&a(u.touches[0].clientX,u.touches[0].clientY)};return window.addEventListener("mousemove",f),window.addEventListener("touchmove",l),window.addEventListener("touchend",o),()=>{window.removeEventListener("mousemove",f),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",o)}}),Rt();var i=Qr();z(()=>{ne(i,`fixed inset-0 text-red-400 dark:text-blue-600 ${g(n)} z-0`),ge(i,"style",g(r))}),k(e,i),Ge()}var tn=A(`<div><h2>Who am I</h2> <p>I'm a software engineer who loves solving problems and creating things that
    people can actually use. From web apps to backend systems, I enjoy the
    challenge of turning an idea into something functional. I'm always learning
    and looking for new ways to improve. Whether I'm diving into new
    technologies, optimizing workflows, or collaborating with others, I'm all
    about making things better, faster, and more efficient. If you're looking
    for someone who's passionate about tech and loves making a real impact,
    that's me.</p></div>`);function rn(e){var t=tn();k(e,t)}var nn=A('<div><h1 class="text-5xl font-bold py-2">Alex Párraga Ferrer</h1> <p>Building things that work and make life a little easier</p></div>');function an(e){var t=nn();k(e,t)}const on=[{name:"Better",description:"A habit tracking app designed to help users reduce substance abuse by building healthier routines.",tags:["Flutter"],url:"https://github.com/a96lex/better",image:"/better.png"},{name:"Slime mold simulator",description:"An interactive web application that simulates the behavior and growth patterns of slime molds.",tags:["JavaScript"],url:"https://github.com/a96lex/physarum-simulation",image:"/slime-mold.png"},{name:"CoronaTiquets",description:"A platform for managing appointments to ensure the continuity of small business during the COVID-19 pandemic.",tags:["Angular Native"],url:"https://upcoders.eebe.upc.edu/coronatiquets.html",image:"/coronatiquets.png"},{name:"HotReach",description:"An AI-powered system for generating cold outreach messages based on prospect data, streamlining sales processes.",tags:["Serverless","BeautifulSoup4"],url:"https://hotreach.io/",image:"/hotreach.png"},{name:"Aras",description:"A client appointment management system created for a family business, optimizing scheduling and customer interactions.",tags:["FastAPI","React"],url:"https://aras.netlify.app/",image:"/aras.png"},{name:"Tank game",description:"A browser-based aim-and-shoot game inspired by diep.io, built using Python, pygame, and pyodide for browser compatibility.",tags:["Pygame","Pyodide","Pygbag"],url:"https://alex-pf.itch.io/tank-game",image:"/tank-game.png"},{name:"Rocket game",description:"A physics-based, Flappy Bird-inspired game where players navigate a rocket through obstacles, aiming for high scores.",tags:["Pygame"],url:"https://github.com/a96lex/pygame-floating-rocket",image:"/rocket.png"},{name:"Loora",description:"A home safety device that uses Long Range technology to monitor the activity of loved ones, ensuring their well-being.",tags:["Arduino","Flask"],url:"https://devpost.com/software/loora",image:"/loora.png"},{name:"Dono",description:"A charitable gift card platform where I contributed to data collection efforts.",tags:["BeautifulSoup4"],url:"https://devpost.com/software/dono-4e563v",image:"/dono.png"},{name:"Wordle breaker",description:"A command-line tool designed to help users solve Wordle puzzles efficiently by providing hints and solutions.",tags:["Python"],url:"https://github.com/a96lex/wordle-breaker/",image:"/wordle.png"}];var ln=A('<div class="absolute rounded-lg inset-0 bg-gray-100 dark:bg-gray-800 opacity-100"></div> <div class="absolute rounded-lg inset-0 bg-cover bg-center opacity-10 group-hover:opacity-50"></div>',1),sn=A('<img alt="URL Icon">'),un=A("<span>🔗</span>"),fn=A('<a class="opacity-10 group-hover:opacity-100" aria-label="project url" target="_blank" rel="noopener noreferrer"><!></a>'),cn=A("<span> </span>"),vn=A('<div><!> <div class="relative"><h3><span> </span> <!></h3> <p class="px-6 mt-3 mb-6"> </p> <div class="px-4 pb-2"></div></div></div>'),dn=A('<div class="w-full"><h2>Projects</h2> <p class="mb-4">Here is a sample of what I have done in the past years.</p> <div class="flex flex-row flex-wrap justify-between"></div></div>');function pn(e){const t=a=>{if(a.match(/github\.com/))return{src:"https://github.githubassets.com/favicons/favicon.svg",invertOnDarkMode:!0};if(a.match(/devpost\.com/))return{src:"https://devpost.com/favicon.ico"};if(a.match(/itch\.io/))return{src:"https://itch.io/favicon.ico"}};var r=dn(),n=E(x(r),4);ie(n,5,()=>on,oe,(a,o)=>{var i=vn();ne(i,"z-40 transition-all duration-300 mb-4 rounded-lg text-gray-800 dark:text-gray-200 w-full pb-2 lg:w-[calc(50%-0.5em)] relative group");var f=x(i);{var l=_=>{var b=ln(),C=E(lr(b),2);z(()=>ge(C,"style",`background-image: url('${g(o).image}');`)),k(_,b)};_e(f,_=>{g(o).image&&_(l)})}var u=E(f,2),c=x(u),s=x(c),v=x(s),d=E(s,2);{var p=_=>{var b=fn();const C=ur(()=>t(g(o).url));var B=x(b);{var D=P=>{var q=sn();z(()=>{ge(q,"src",g(C).src),ne(q,`h-5 w-5  ${g(C).invertOnDarkMode&&"dark:invert"}`)}),k(P,q)},de=P=>{var q=un();k(P,q)};_e(B,P=>{g(C)?P(D):P(de,!1)})}z(()=>ge(b,"href",g(o).url)),k(_,b)};_e(d,_=>{g(o).url&&_(p)})}var w=E(c,2),I=x(w),L=E(w,2);ie(L,5,()=>g(o).tags,oe,(_,b)=>{var C=cn(),B=x(C);z(()=>{ne(C,`p-2 bg-gray-300 dark:bg-gray-700 m-1 rounded-md backdrop-blur-sm ${g(o).image&&"bg-opacity-50 dark:bg-opacity-50"}`),H(B,g(b))}),k(_,C)}),z(()=>{ne(c,`text-lg font-bold bg-gray-300 dark:bg-gray-700 rounded-t-lg px-6 py-2 flex justify-between items-center ${g(o).image&&"bg-opacity-50 dark:bg-opacity-50"} backdrop-blur-sm`),H(v,g(o).name),H(I,g(o).description)}),k(a,i)}),k(e,r)}const hn=[{title:"Software Engineer",company:"LambdaLoopers",bulletpoints:["Refactored and improved the microservices architecture, enhancing code quality through CI/CD pipelines, testing, and documentation.","Increased image segmentation pipeline efficiency by 5x through algorithm optimization and resource tuning.","Designed and deployed a new microservice, seamlessly integrating it into the existing microservice architecture and ensuring smooth interaction with external systems."],tags:["Python","PyTorch","Langchain","FastAPI","React","Filament","NestJs","Docker","Kubernetes"],from:"May 2024",to:"Nov 2024"},{title:"Software Engineer",company:"Unith Research Labs",bulletpoints:["Implemented a research-backed proof of concept into a production-ready REST API, serving as a core company product.","Parallelized machine learning workflows to handle high concurrency, reducing latency and improving user experience.","Led the technical and behavioral interview process, assessments, and candidate evaluations, resulting in the expansion of the tech team from 2 to 8 members.","Led DevOps modernization, introducing CI/CD, containerization, and Infrastructure as Code (IaC) practices."],tags:["Python","PyTorch","Langchain","FastAPI","Svelte","NestJs","Ansible","Triton","TensorRT","Docker","Terraform"],from:"Sep 2021",to:"Dec 2023"},{title:"Software Engineer",company:"AudioStack",bulletpoints:["Developed and optimized a front-end sales funnel to drive product trials and increase conversions.","Managed microservices and database components, ensuring high uptime and reliability for key system functions."],tags:["Python","Serverless","React","React Native"],from:"Aug 2020",to:"Sep 2021"}];var _n=A('<li class="text-gray-700 dark:text-gray-300"> </li>'),gn=A('<span class="inline-block py-1 px-3 text-sm font-medium bg-gray-200 dark:bg-gray-700 rounded-md text-gray-700 dark:text-gray-300 m-1 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"> </span>'),mn=A('<div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl"><h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2"> <span class="font-normal text-gray-700 dark:text-gray-300">at</span> <span class="font-medium text-gray-700 dark:text-gray-300"> </span></h3> <p class="text-sm text-gray-500 dark:text-gray-400 mb-4"> </p> <ul class="list-disc pl-6 space-y-2"></ul> <div class="mt-4"></div></div>'),yn=A('<div class="w-full"><h2 class="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Experience</h2> <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">Summary of my employment history</p> <div class="flex flex-col space-y-6"></div></div>');function wn(e){var t=yn(),r=E(x(t),4);ie(r,5,()=>hn,oe,(n,a)=>{var o=mn(),i=x(o),f=x(i),l=E(f,3),u=x(l),c=E(i,2),s=x(c),v=E(c,2);ie(v,5,()=>g(a).bulletpoints,oe,(p,w)=>{var I=_n(),L=x(I);z(()=>H(L,g(w))),k(p,I)});var d=E(v,2);ie(d,5,()=>g(a).tags,oe,(p,w)=>{var I=gn(),L=x(I);z(()=>H(L,g(w))),k(p,I)}),z(()=>{H(f,`${g(a).title??""} `),H(u,g(a).company),H(s,`${g(a).from??""} - ${g(a).to??""}`)}),k(n,o)}),k(e,t)}var bn=A('<div><h2 class="text-2xl font-bold mb-4">Contact Me</h2> <div class="flex space-x-6"><a href="https://www.linkedin.com/in/a96lex/" target="_blank" class="flex items-center space-x-2 hover:opacity-50 invert dark:invert-0"><img src="linkedin.png" alt="LinkedIn" class="w-6 h-6"></a> <a href="mailto:a96lex@gmail.com" class="flex items-center space-x-2 hover:opacity-75 grayscale"><img src="gmail.png" alt="Gmail" class="w-8 h-6"></a></div></div>');function xn(e){var t=bn();k(e,t)}var kn=A('<main class="min-h-screen bg-gray-100 dark:bg-gray-800 pb-12 relative"><div class="flex justify-end items-center fixed top-0 md:top-4 md:right-4 right-0 w-full z-50 pointer-events-auto"><!></div> <!> <div class="flex flex-col items-start gap-10 max-w-3xl lg:max-w-4xl mx-auto px-10 relative z-10 pt-20"><!> <!> <!> <!> <!></div></main>');function En(e){var t=kn(),r=x(t),n=x(r);Zr(n,{});var a=E(r,2);en(a,{});var o=E(a,2),i=x(o);an(i);var f=E(i,2);rn(f);var l=E(f,2);pn(l);var u=E(l,2);wn(u);var c=E(u,2);xn(c),k(e,t)}Fr(En,{target:document.getElementById("app")});
