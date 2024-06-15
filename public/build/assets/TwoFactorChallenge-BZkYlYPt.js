import{d,T as b,o as s,e as a,b as o,u as t,w as m,F as c,Z as h,a as i,g as n,i as _,n as C,x as w}from"./app-CkX6QsHd.js";import{A as V}from"./AuthenticationCard-C0RaW-Ro.js";import{_ as T}from"./AuthenticationCardLogo-BzY2o3p8.js";import{_ as p,a as v}from"./TextInput-C2MvflCt.js";import{_ as g}from"./InputLabel-vlwbRmsK.js";import{_ as $}from"./PrimaryButton-XVgi6oQt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const I={class:"mb-4 text-sm text-gray-600"},U={key:0},B={key:1},F={class:"flex items-center justify-end mt-4"},S={__name:"TwoFactorChallenge",setup(N){const r=d(!1),e=b({code:"",recovery_code:""}),f=d(null),y=d(null),k=async()=>{r.value^=!0,await w(),r.value?(f.value.focus(),e.code=""):(y.value.focus(),e.recovery_code="")},x=()=>{e.post(route("two-factor.login"))};return(A,l)=>(s(),a(c,null,[o(t(h),{title:"Two-factor Confirmation"}),o(V,null,{logo:m(()=>[o(T)]),default:m(()=>[i("div",I,[r.value?(s(),a(c,{key:1},[n(" Please confirm access to your account by entering one of your emergency recovery codes. ")],64)):(s(),a(c,{key:0},[n(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")],64))]),i("form",{onSubmit:_(x,["prevent"])},[r.value?(s(),a("div",B,[o(g,{for:"recovery_code",value:"Recovery Code"}),o(p,{id:"recovery_code",ref_key:"recoveryCodeInput",ref:f,modelValue:t(e).recovery_code,"onUpdate:modelValue":l[1]||(l[1]=u=>t(e).recovery_code=u),type:"text",class:"mt-1 block w-full",autocomplete:"one-time-code"},null,8,["modelValue"]),o(v,{class:"mt-2",message:t(e).errors.recovery_code},null,8,["message"])])):(s(),a("div",U,[o(g,{for:"code",value:"Code"}),o(p,{id:"code",ref_key:"codeInput",ref:y,modelValue:t(e).code,"onUpdate:modelValue":l[0]||(l[0]=u=>t(e).code=u),type:"text",inputmode:"numeric",class:"mt-1 block w-full",autofocus:"",autocomplete:"one-time-code"},null,8,["modelValue"]),o(v,{class:"mt-2",message:t(e).errors.code},null,8,["message"])])),i("div",F,[i("button",{type:"button",class:"text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer",onClick:_(k,["prevent"])},[r.value?(s(),a(c,{key:1},[n(" Use an authentication code ")],64)):(s(),a(c,{key:0},[n(" Use a recovery code ")],64))]),o($,{class:C(["ms-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:m(()=>[n(" Log in ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{S as default};
