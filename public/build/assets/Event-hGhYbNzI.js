import{_ as i}from"./AppLayout-B6lRKjtB.js";import{o as s,c as d,w as c,a as t,e as n,h as l,t as a,F as x}from"./app-DwKAgOmq.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const p=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Event ",-1),_={class:"py-12"},h={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},m={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},u={class:"overflow-x-auto"},g={class:"min-w-full divide-y divide-gray-200"},y=t("thead",{class:"bg-gray-50"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"ID"),t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"Event Name"),t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"Deskripsi"),t("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"Gambar"),t("th",{colspan:"2",scope:"col",class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"},"Action")])],-1),f={class:"bg-white divide-y divide-gray-200"},v={class:"px-6 py-4 text-sm font-medium text-gray-900"},w={class:"px-6 py-4 text-sm text-gray-500"},k={class:"px-6 py-4 text-sm text-gray-500"},b={class:"px-6 py-4 text-sm text-gray-500 square-column"},E=["src"],A={class:"px-6 py-4 text-sm text-gray-500"},B=["href"],D=t("i",{class:"fas fa-edit"},null,-1),F=[D],I={class:"px-6 py-4 text-sm text-gray-500"},N=["href"],j=t("i",{class:"fas fa-trash-alt"},null,-1),q=[j],$={__name:"Event",props:{event:Array},setup(r){const o=r;return console.log(o.event),(C,G)=>(s(),d(i,{title:"Event"},{header:c(()=>[p]),default:c(()=>[t("div",_,[t("div",h,[t("div",m,[t("div",u,[t("table",g,[y,t("tbody",f,[(s(!0),n(x,null,l(o.event,e=>(s(),n("tr",{key:e.event_id},[t("td",v,a(e.event_id),1),t("td",w,a(e.nama_event),1),t("td",k,a(e.deskripsi),1),t("td",b,[t("img",{src:"/storage/"+e.gambar,alt:"Image Description",class:"w-full h-full object-cover rounded-md shadow-md"},null,8,E)]),t("td",A,[t("a",{href:"/event/edit/"+e.event_id,class:"text-blue-500 hover:text-blue-700 mx-2"},F,8,B)]),t("td",I,[t("a",{href:"/delevent/"+e.event_id,onclick:"return confirm('Apakah Anda yakin ingin menghapus pengumuman ini?')",class:"text-red-500 hover:text-red-700 mx-2"},q,8,N)])]))),128))])])])])])])]),_:1}))}};export{$ as default};
