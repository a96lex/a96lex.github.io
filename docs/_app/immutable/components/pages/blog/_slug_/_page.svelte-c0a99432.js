import{S as A,i as S,s as q,H as J,a as B,c as I,b as T,f as y,g as K,t as k,d as O,I as R,J as V,K as W,h as _,o as F,k as g,q as v,l as b,m as C,r as E,n as j,D as $,L as G,M as Q,N as U,x as z,y as D,z as H,A as M}from"../../../../chunks/index-1d44dd6c.js";function X(r){const e=r-1;return e*e*e+1}function N(r,{delay:e=0,duration:l=400,easing:t=X,x:a=0,y:o=0,opacity:s=0}={}){const n=getComputedStyle(r),f=+n.opacity,p=n.transform==="none"?"":n.transform,h=f*(1-s);return{delay:e,duration:l,easing:t,css:(u,c)=>`
			transform: ${p} translate(${(1-u)*a}px, ${(1-u)*o}px);
			opacity: ${f-h*c}`}}function w(r){let e,l,t,a,o;return{c(){e=g("div"),l=v("Copied to clipboard! 📚"),this.h()},l(s){e=b(s,"DIV",{class:!0});var n=C(e);l=E(n,"Copied to clipboard! 📚"),n.forEach(_),this.h()},h(){j(e,"class","copy-tooltip svelte-1rrx98s")},m(s,n){T(s,e,n),$(e,l),o=!0},i(s){o||(G(()=>{a&&a.end(1),t=Q(e,N,{x:-100}),t.start()}),o=!0)},o(s){t&&t.invalidate(),a=U(e,N,{x:100}),o=!1},d(s){s&&_(e),s&&a&&a.end()}}}function Y(r){let e,l,t=r[0]&&w();const a=r[2].default,o=J(a,r,r[1],null);return{c(){t&&t.c(),e=B(),o&&o.c()},l(s){t&&t.l(s),e=I(s),o&&o.l(s)},m(s,n){t&&t.m(s,n),T(s,e,n),o&&o.m(s,n),l=!0},p(s,[n]){s[0]?t?n&1&&y(t,1):(t=w(),t.c(),y(t,1),t.m(e.parentNode,e)):t&&(K(),k(t,1,1,()=>{t=null}),O()),o&&o.p&&(!l||n&2)&&R(o,a,s,s[1],l?W(a,s[1],n,null):V(s[1]),null)},i(s){l||(y(t),y(o,s),l=!0)},o(s){k(t),k(o,s),l=!1},d(s){t&&t.d(s),s&&_(e),o&&o.d(s)}}}function Z(r,e,l){let{$$slots:t={},$$scope:a}=e,o=!1,s;return F(()=>{let n=document.getElementsByTagName("pre");for(let f of n){const p=f;if(![...p.classList].some(c=>c.startsWith("language-")))continue;const h=p.innerText;let u=document.createElement("button");u.addEventListener("click",()=>(navigator.clipboard.writeText(h),l(0,o=!0),s&&clearTimeout(s),s=setTimeout(()=>l(0,o=!1),1500))),u.className="copy",u.innerText="Copy",p.appendChild(u)}}),r.$$set=n=>{"$$scope"in n&&l(1,a=n.$$scope)},[o,a,t]}class tt extends A{constructor(e){super(),S(this,e,Z,Y,q,{})}}function et(r){let e,l;return e=new r[2]({}),{c(){z(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,a){H(e,t,a),l=!0},i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){M(e,t)}}}function st(r){let e,l,t,a,o,s,n,f,p,h,u,c,x;return c=new tt({props:{$$slots:{default:[et]},$$scope:{ctx:r}}}),{c(){e=g("a"),l=v("Back to Blog"),t=B(),a=g("article"),o=g("h1"),s=v(r[0]),n=B(),f=g("p"),p=v("Published: "),h=v(r[1]),u=B(),z(c.$$.fragment),this.h()},l(i){e=b(i,"A",{class:!0,href:!0});var d=C(e);l=E(d,"Back to Blog"),d.forEach(_),t=I(i),a=b(i,"ARTICLE",{});var m=C(a);o=b(m,"H1",{});var L=C(o);s=E(L,r[0]),L.forEach(_),n=I(m),f=b(m,"P",{});var P=C(f);p=E(P,"Published: "),h=E(P,r[1]),P.forEach(_),u=I(m),D(c.$$.fragment,m),m.forEach(_),this.h()},h(){j(e,"class","underlined-a svelte-1oe4znu"),j(e,"href","/blog")},m(i,d){T(i,e,d),$(e,l),T(i,t,d),T(i,a,d),$(a,o),$(o,s),$(a,n),$(a,f),$(f,p),$(f,h),$(a,u),H(c,a,null),x=!0},p(i,[d]){const m={};d&16&&(m.$$scope={dirty:d,ctx:i}),c.$set(m)},i(i){x||(y(c.$$.fragment,i),x=!0)},o(i){k(c.$$.fragment,i),x=!1},d(i){i&&_(e),i&&_(t),i&&_(a),M(c)}}}function ot(r,e,l){let{data:t}=e;const{title:a,date:o}=t.meta,s=t.PostContent;return r.$$set=n=>{"data"in n&&l(3,t=n.data)},[a,o,s,t]}class nt extends A{constructor(e){super(),S(this,e,ot,st,q,{data:3})}}export{nt as default};