import{q as m,o as c,e as d,b as n,w as o,r as f,n as h,u as g,m as _,d as v,a as e,g as l,D as x,p as b,l as y}from"./app-CkX6QsHd.js";import{_ as p}from"./_plugin-vue_export-helper-DlAUqK2U.js";const w={class:"w-full"},k={__name:"NavLink",props:{href:String,active:Boolean},setup(s){const i=s,t=m(()=>i.active?"rounded-lg inline-flex items-center w-full px-4 pt-4 pb-4 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out active":"rounded-lg inline-flex items-center w-full px-4 pt-4 pb-4 text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:bg-blue-100 focus:outline-none focus:text-gray-700 focus:bg-blue-100 transition duration-150 ease-in-out");return(u,j)=>(c(),d("div",w,[n(g(_),{href:s.href,class:h(t.value)},{default:o(()=>[f(u.$slots,"default",{},void 0,!0)]),_:3},8,["href","class"])]))}},r=p(k,[["__scopeId","data-v-d331a7c9"]]),a=s=>(b("data-v-40a4ddf8"),s=s(),y(),s),B={class:"flex min-h-screen"},I={class:"w-1/4 bg-white p-6 shadow-lg sticky top-0 h-screen flex flex-col justify-between"},S=a(()=>e("div",{class:"flex items-center mb-8"},[e("img",{src:"https://pbs.twimg.com/profile_images/1775455225014607872/uy6WUXI3_400x400.jpg",alt:"Logo BEM",class:"h-12 w-12"}),e("span",{class:"ml-4 font-bold text-lg text-blue-900"},"BahteraKarsa")],-1)),L={class:"space-y-1"},N=a(()=>e("i",{class:"fas fa-home-alt mr-3"},null,-1)),$=a(()=>e("i",{class:"fas fa-calendar-alt mr-3"},null,-1)),A=a(()=>e("i",{class:"fas fa-user-alt mr-3"},null,-1)),C=a(()=>e("i",{class:"fas fa-bullhorn mr-3"},null,-1)),D=a(()=>e("i",{class:"fas fa-sign-out-alt mr-3"},null,-1)),E={class:"w-3/4 bg-gray-100 p-6"},V={__name:"AppLayout",props:{title:String},setup(s){v(!1);const i=()=>{x.post(route("logout"))};return(t,u)=>(c(),d("div",B,[e("div",I,[e("div",null,[S,e("nav",null,[e("ul",L,[e("li",null,[n(r,{href:t.route("dashboard"),class:"flex items-center p-1 rounded-lg text-gray-700",active:t.route().current("dashboard")},{default:o(()=>[N,l(" Dashboard ")]),_:1},8,["href","active"])]),e("li",null,[n(r,{href:t.route("event.index"),class:"flex items-center p-1 rounded-lg text-gray-700",active:t.route().current("event.index")},{default:o(()=>[$,l(" Event ")]),_:1},8,["href","active"])]),e("li",null,[n(r,{href:t.route("pendaftar.index"),class:"flex items-center p-1 rounded-lg text-gray-700",active:t.route().current("pendaftar.index")},{default:o(()=>[A,l(" Pendaftar ")]),_:1},8,["href","active"])]),e("li",null,[n(r,{href:t.route("pengumuman.index"),class:"flex items-center p-1 rounded-lg text-gray-700",active:t.route().current("pengumuman.index")},{default:o(()=>[C,l(" Pengumuman ")]),_:1},8,["href","active"])])])])]),e("div",null,[e("ul",{class:"space-y-1"},[e("li",null,[e("a",{onClick:i,class:"flex items-center p-1 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-900 cursor-pointer"},[D,l(" Keluar ")])])])])]),e("div",E,[f(t.$slots,"default",{},void 0,!0)])]))}},q=p(V,[["__scopeId","data-v-40a4ddf8"]]);export{q as A};
