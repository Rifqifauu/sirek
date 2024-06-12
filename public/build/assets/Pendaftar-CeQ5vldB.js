import{d as l,q as h,o,c as y,w as g,a as t,k as v,B as m,e as c,h as p,t as s,F as u}from"./app-BtGpYb37.js";import{A as k}from"./AppLayout-B9S94xXm.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const w=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Pendaftar ",-1),b={class:"mt-2 flex justify-end"},E=t("option",{value:""},"Pilih Event",-1),A=["value"],B={class:"py-5"},P={class:"max-w-full"},q={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},j={class:"overflow-x-auto"},C={class:"min-w-full divide-y divide-gray-200"},F=t("thead",{class:"bg-gray-50"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Event"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Nama"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"NIM"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Jurusan"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Fakultas"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Angkatan"),t("th",{colspan:"3",scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"Action")])],-1),N={class:"bg-white divide-y divide-gray-200"},D={class:"px-6 py-4 text-sm font-medium text-gray-900"},I={class:"px-6 py-4 text-sm text-gray-500"},L={class:"px-6 py-4 text-sm text-gray-500"},M={class:"px-6 py-4 text-sm text-gray-500"},S={class:"px-6 py-4 text-sm text-gray-500"},V={class:"px-6 py-4 text-sm text-gray-500"},J={class:"px-6 py-4 text-sm text-gray-500 flex items-center justify-center space-x-2"},U=["href"],z=t("i",{class:"fa-solid fa-eye"},null,-1),G=[z],H=["href"],K=t("i",{class:"fas fa-edit"},null,-1),O=[K],Q=["href"],R=t("i",{class:"fas fa-trash-alt"},null,-1),T=[R],Z={__name:"Pendaftar",props:{pendaftar:Array},setup(x){const d=x,r=l(""),i=l(d.pendaftar);function _(){r.value!==""?i.value=d.pendaftar.filter(a=>a.event.event_id===r.value):i.value=d.pendaftar}const f=h(()=>{const a=[],n=[];return d.pendaftar.forEach(e=>{a.includes(e.event.event_id)||(a.push(e.event.event_id),n.push(e.event))}),n});return(a,n)=>(o(),y(k,{title:"Pendaftar"},{default:g(()=>[w,t("div",b,[v(t("select",{"onUpdate:modelValue":n[0]||(n[0]=e=>r.value=e),onChange:_,class:"appearance-none block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"},[E,(o(!0),c(u,null,p(f.value,e=>(o(),c("option",{value:e.event_id,key:e.event_id},s(e.nama_event),9,A))),128))],544),[[m,r.value]])]),t("div",B,[t("div",P,[t("div",q,[t("div",j,[t("table",C,[F,t("tbody",N,[(o(!0),c(u,null,p(i.value,e=>(o(),c("tr",{key:e.pendaftar_id},[t("td",D,s(e.event.nama_event),1),t("td",I,s(e.nama),1),t("td",L,s(e.nim),1),t("td",M,s(e.jurusan),1),t("td",S,s(e.fakultas),1),t("td",V,s(e.angkatan),1),t("td",J,[t("a",{href:"/detailpendaftar/"+e.pendaftar_id,class:"text-blue-500 hover:text-blue-700"},G,8,U),t("a",{href:"/pendaftar/edit/"+e.event_id+"/"+e.pendaftar_id,class:"text-gray-500 hover:text-gray-700"},O,8,H),t("a",{href:"/delpendaftar/"+e.pendaftar_id,onclick:"return confirm('Apakah Anda yakin ingin menghapus pendaftar ini?')",class:"text-red-500 hover:text-red-700"},T,8,Q)])]))),128))])])])])])])]),_:1}))}};export{Z as default};
