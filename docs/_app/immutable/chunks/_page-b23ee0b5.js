import{_ as n}from"./control-654b50f6.js";import{e as i}from"./index-cbbaa776.js";const a=(t,e)=>{const o=t[e];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((s,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))})},l=async({params:t})=>{try{const e=await a(Object.assign({"../../../lib/blogEntries/generativeArt.md":()=>n(()=>import("./generativeArt-8baabd99.js"),["./generativeArt-8baabd99.js","./index-cdc7fb82.js","../assets/generativeArt-7c6e2216.css"],import.meta.url)}),`../../../lib/blogEntries/${t.slug}.md`);return{PostContent:e.default,meta:{...e.metadata,slug:t.slug}}}catch(e){throw console.log(e),i(404)}},c=Object.freeze(Object.defineProperty({__proto__:null,load:l},Symbol.toStringTag,{value:"Module"}));export{c as _,l};