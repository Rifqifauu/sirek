import{A as r}from"./AppLayout-BFbyKLkl.js";import{o as s,c as d,w as n,a as t,e as o,h as l,t as a,F as p}from"./app-B3-pmjQ5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Pengumuman ",-1),u={class:"py-12"},x={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},_={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},h={class:"overflow-x-auto"},g={class:"min-w-full divide-y divide-gray-200"},y=t("thead",{class:"bg-gray-50"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Nama Event"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Date"),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Description"),t("th",{colspan:"2",scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Action")])],-1),f={class:"bg-white divide-y divide-gray-200"},v={class:"px-6 py-4 text-sm text-gray-500"},w={class:"px-6 py-4 text-sm text-gray-500"},k={class:"px-6 py-4 text-sm text-gray-500"},b={class:"overflow-y-auto max-h-32"},A={class:"px-6 py-4 text-sm text-gray-500"},B=["href"],D=t("i",{class:"fas fa-edit"},null,-1),P=[D],E=["href"],F=t("i",{class:"fas fa-trash-alt"},null,-1),L=[F],q={__name:"Pengumuman",props:{pengumuman:Array},setup(c){const i=c;return(N,C)=>(s(),d(r,{title:"Pengumuman"},{header:n(()=>[m]),default:n(()=>[t("div",u,[t("div",x,[t("div",_,[t("div",h,[t("table",g,[y,t("tbody",f,[(s(!0),o(p,null,l(i.pengumuman,e=>(s(),o("tr",{key:e.pengumuman_id},[t("td",v,a(e.event.nama_event),1),t("td",w,a(e.tgl_pengumuman),1),t("td",k,[t("div",b,a(e.keterangan),1)]),t("td",A,[t("a",{href:"/pengumuman/edit/"+e.pengumuman_id,class:"text-blue-500 hover:text-blue-700 mx-2"},P,8,B),t("a",{href:"/delpengumuman/"+e.pengumuman_id,onclick:"return confirm('Apakah Anda yakin ingin menghapus pengumuman ini?')",class:"text-red-500 hover:text-red-700 mx-2"},L,8,E)])]))),128))])])])])])])]),_:1}))}};export{q as default};