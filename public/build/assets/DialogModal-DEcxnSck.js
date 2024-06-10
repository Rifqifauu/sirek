import{S as g}from"./SectionTitle-BSya7uvs.js";import{o as u,e as x,b as m,w as c,r as l,a as e,d as y,H as b,y as $,A as k,k as B,l as p,C as w,E as v,n as S,f as C,c as E}from"./app-BzHlyD74.js";const W={class:"md:grid md:grid-cols-3 md:gap-6"},M={class:"mt-5 md:mt-0 md:col-span-2"},z={class:"px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg"},q={__name:"ActionSection",setup(t){return(a,s)=>(u(),x("div",W,[m(g,null,{title:c(()=>[l(a.$slots,"title")]),description:c(()=>[l(a.$slots,"description")]),_:3}),e("div",M,[e("div",z,[l(a.$slots,"content")])])]))}},N={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},T=e("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),V=[T],A={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(t,{emit:a}){const s=t,d=a,o=y(),i=y(s.show);b(()=>s.show,()=>{var n;s.show?(document.body.style.overflow="hidden",i.value=!0,(n=o.value)==null||n.showModal()):(document.body.style.overflow=null,setTimeout(()=>{var r;(r=o.value)==null||r.close(),i.value=!1},200))});const f=()=>{s.closeable&&d("close")},h=n=>{n.key==="Escape"&&s.show&&f()};$(()=>document.addEventListener("keydown",h)),k(()=>{document.removeEventListener("keydown",h),document.body.style.overflow=null});const _=B(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[s.maxWidth]);return(n,r)=>(u(),x("dialog",{class:"z-50 m-0 min-h-full min-w-full overflow-y-auto bg-transparent backdrop:bg-transparent",ref_key:"dialog",ref:o},[e("div",N,[m(v,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:c(()=>[p(e("div",{class:"fixed inset-0 transform transition-all",onClick:f},V,512),[[w,t.show]])]),_:1}),m(v,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:c(()=>[p(e("div",{class:S(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",_.value])},[i.value?l(n.$slots,"default",{key:0}):C("",!0)],2),[[w,t.show]])]),_:3})])],512))}},D={class:"px-6 py-4"},L={class:"text-lg font-medium text-gray-900"},j={class:"mt-4 text-sm text-gray-600"},H={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 text-end"},F={__name:"DialogModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(t,{emit:a}){const s=a,d=()=>{s("close")};return(o,i)=>(u(),E(A,{show:t.show,"max-width":t.maxWidth,closeable:t.closeable,onClose:d},{default:c(()=>[e("div",D,[e("div",L,[l(o.$slots,"title")]),e("div",j,[l(o.$slots,"content")])]),e("div",H,[l(o.$slots,"footer")])]),_:3},8,["show","max-width","closeable"]))}};export{A as _,q as a,F as b};