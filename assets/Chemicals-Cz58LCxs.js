import{b as ft,j as e,l as ke,m as _,X as et,k as je,c as k,as as Je,r as u,a as bt,u as gt,al as yt,q as vt,g as U,G as wt,a5 as rt,a6 as st,$ as re,aa as He,ab as Le,ac as Ge,h as Pe,O as ve,aq as jt,an as X,Z as we,ao as dt,a0 as Nt,a1 as kt,b0 as We,_ as Ke,Y as St,ar as nt,i as qe,z as it,ak as zt,I as Ct,S as Dt,V as Ze,T as lt,n as At}from"./index-CbFF4vOa.js";import{Q as Et}from"./QRScanner-DtqKp2sf.js";import{R as $t}from"./rotate-ccw-h9oSFywT.js";import{u as It}from"./index-DfK0lfGK.js";import{P as Tt}from"./pdfService-DS5kuW3-.js";import{C as Ht}from"./chevron-up-CIZiMi9S.js";import{D as ot}from"./download-NLa7NrVo.js";import{P as Lt}from"./plus-Ra-TkRnT.js";import{F as Gt}from"./funnel-DLKpBS6y.js";import{S as Pt}from"./square-pen-BIk9rWDh.js";import"./jspdf.plugin.autotable-DKK3R9b5.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],ct=ft("wand-sparkles",qt);function Rt({isOpen:z,onClose:i,onSubmit:x,onSmartFill:j,isGenerating:S,newChemical:p,editingChemical:C,onChange:n}){var I;return z?e.jsx(ke,{children:e.jsxs("div",{className:"fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6",children:[e.jsx(_.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:i,className:"absolute inset-0 bg-primary/20 backdrop-blur-sm"}),e.jsxs(_.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},className:"relative bg-surface w-full max-w-4xl rounded-[40px] shadow-2xl overflow-hidden border border-outline/10",children:[e.jsxs("div",{className:"p-8 flex justify-between items-center bg-surface-container-low border-b border-outline/5 relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -mr-8 -mt-8"}),e.jsxs("div",{className:"relative z-10 flex items-center gap-3",children:[e.jsx("div",{className:"bg-primary/10 p-2.5 rounded-2xl text-primary",children:e.jsx(ct,{size:24})}),e.jsx("h3",{className:"text-2xl font-black text-primary",children:C?"تعديل بيانات المادة":"إضافة مادة كيميائية جديدة"})]}),e.jsx("button",{onClick:i,className:"p-2.5 hover:bg-surface-container-high rounded-full transition-all active:scale-90",children:e.jsx(et,{size:24})})]}),e.jsxs("form",{onSubmit:x,className:"p-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-h-[70vh] overflow-y-auto no-scrollbar",children:[e.jsxs("div",{className:"md:col-span-2 flex items-end gap-4",children:[e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx("label",{className:"text-xs font-black text-secondary/60 uppercase tracking-widest mr-2",children:"PRODUIT CHIMIQUE"}),e.jsx("input",{required:!0,className:"w-full bg-surface-container-low border border-outline/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all font-bold",value:p.nameEn||"",onChange:c=>n("nameEn",c.target.value)})]}),e.jsxs("button",{type:"button",onClick:j,disabled:S,className:"bg-primary-container text-primary px-6 py-4 rounded-2xl flex items-center gap-2 font-black hover:bg-primary/10 transition-all active:scale-95 disabled:opacity-50 h-[58px]",title:"تعبئة ذكية للمعلومات",children:[S?e.jsx("div",{className:"w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin"}):e.jsx(ct,{size:20}),e.jsx("span",{className:"hidden md:inline",children:"تعبئة ذكية"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-black text-secondary/60 uppercase tracking-widest mr-2",children:"الاسم العربي"}),e.jsx("input",{className:"w-full bg-surface-container-low border border-outline/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all font-bold",value:p.nameAr||"",onChange:c=>n("nameAr",c.target.value)})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-black text-secondary/60 uppercase tracking-widest mr-2",children:"الصيغة الكيميائية"}),e.jsx("input",{className:"w-full bg-surface-container-low border border-outline/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all font-bold",value:p.formula||"",onChange:c=>n("formula",c.target.value)})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-black text-secondary/60 uppercase tracking-widest mr-2",children:"رقم CAS"}),e.jsx("input",{className:"w-full bg-surface-container-low border border-outline/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all font-bold",value:p.casNumber||"",onChange:c=>n("casNumber",c.target.value)})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-black text-secondary/60 uppercase tracking-widest mr-2",children:"درجة حرارة التخزين"}),e.jsx("input",{className:"w-full bg-surface-container-low border border-outline/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all font-bold",value:p.storageTemp||"",onChange:c=>n("storageTemp",c.target.value)})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-black text-secondary/60 uppercase tracking-widest mr-2",children:"الحالة"}),e.jsxs("select",{className:"w-full bg-surface-container-low border border-outline/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all font-bold appearance-none cursor-pointer",value:p.state||"solid",onChange:c=>n("state",c.target.value),children:[e.jsx("option",{value:"solid",children:"صلب (Solid)"}),e.jsx("option",{value:"liquid",children:"سائل (Liquid)"}),e.jsx("option",{value:"gas",children:"غاز (Gas)"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-black text-secondary/60 uppercase tracking-widest mr-2",children:"الكمية"}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("input",{type:"number",required:!0,className:"flex-1 bg-surface-container-low border border-outline/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all font-bold",value:p.quantity||0,onChange:c=>n("quantity",Number(c.target.value))}),e.jsxs("select",{className:"bg-surface-container-low border border-outline/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all font-bold appearance-none cursor-pointer",value:p.unit||"g",onChange:c=>n("unit",c.target.value),children:[e.jsx("option",{value:"g",children:"g"}),e.jsx("option",{value:"kg",children:"kg"}),e.jsx("option",{value:"ml",children:"ml"}),e.jsx("option",{value:"L",children:"L"}),e.jsx("option",{value:"unit",children:"Unit"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-black text-secondary/60 uppercase tracking-widest mr-2",children:"تصنيف الخطورة"}),e.jsxs("select",{className:"w-full bg-surface-container-low border border-outline/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all font-bold appearance-none cursor-pointer",value:p.hazardClass||"safe",onChange:c=>n("hazardClass",c.target.value),children:[e.jsx("option",{value:"safe",children:"آمن"}),e.jsx("option",{value:"danger",children:"خطر"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-black text-secondary/60 uppercase tracking-widest mr-2",children:"GHS (فواصل بين الرموز)"}),e.jsx("input",{className:"w-full bg-surface-container-low border border-outline/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all font-bold",placeholder:"GHS01, GHS02...",value:((I=p.ghs)==null?void 0:I.join(", "))||"",onChange:c=>n("ghs",c.target.value.split(",").map(A=>A.trim()).filter(Boolean))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-black text-secondary/60 uppercase tracking-widest mr-2",children:"الرف"}),e.jsx("input",{className:"w-full bg-surface-container-low border border-outline/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all font-bold",value:p.shelf||"",onChange:c=>n("shelf",c.target.value)})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs font-black text-secondary/60 uppercase tracking-widest mr-2",children:"الصلاحية ⚠"}),e.jsx("input",{type:"date",className:"w-full bg-surface-container-low border border-outline/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all font-bold",value:p.expiryDate||"",onChange:c=>n("expiryDate",c.target.value)})]}),e.jsxs("div",{className:"md:col-span-2 space-y-2",children:[e.jsx("label",{className:"text-xs font-black text-secondary/60 uppercase tracking-widest mr-2",children:"ملاحظات"}),e.jsx("textarea",{className:"w-full bg-surface-container-low border border-outline/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all font-bold min-h-[100px]",value:p.notes||"",onChange:c=>n("notes",c.target.value)})]}),e.jsx("div",{className:"md:col-span-2 pt-6",children:e.jsx("button",{type:"submit",className:"w-full bg-primary text-on-primary py-5 rounded-full font-black shadow-xl shadow-primary/20 hover:bg-primary-container hover:shadow-2xl transition-all active:scale-95",children:C?"حفظ التعديلات":"تأكيد إضافة المادة للمخزن"})})]})]})]})}):null}function _t({isOpen:z,chemicalsLength:i,onClose:x,onConfirm:j}){return z?e.jsx(ke,{children:e.jsxs("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-6",children:[e.jsx(_.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:x,className:"absolute inset-0 bg-black/60 backdrop-blur-sm"}),e.jsxs(_.div,{initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},className:"relative bg-surface-container-lowest rounded-[32px] p-10 max-w-md w-full shadow-2xl border border-outline/10 text-right",children:[e.jsx("div",{className:"w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8",children:e.jsx(je,{size:40,className:"text-primary"})}),e.jsx("h3",{className:"text-3xl font-black text-primary mb-4 tracking-tight",children:"تحديث ذكي شامل"}),e.jsxs("p",{className:"text-secondary/80 text-lg leading-relaxed mb-10",children:["هل أنت متأكد من رغبتك في تحديث معلومات ",e.jsx("span",{className:"font-black text-primary",children:i})," مادة ذكياً؟",e.jsx("br",{}),e.jsx("br",{}),"قد تستغرق هذه العملية بعض الوقت. سيتم تحديث البيانات تلقائياً بناءً على اقتراحات الذكاء الاصطناعي."]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("button",{onClick:j,className:"flex-1 bg-primary text-on-primary py-5 rounded-full font-black shadow-xl shadow-primary/20 hover:bg-primary-container hover:shadow-2xl transition-all active:scale-95",children:"بدء التحديث"}),e.jsx("button",{onClick:x,className:"flex-1 bg-surface border border-outline/20 text-secondary py-5 rounded-full font-black hover:bg-surface-container-high transition-all active:scale-95",children:"إلغاء"})]})]})]})}):null}function Ot({isOpen:z,suggestedUpdate:i,selectedChemical:x,onClose:j,onApprove:S}){return!z||!i||!x?null:e.jsx(ke,{children:e.jsxs("div",{className:"fixed inset-0 z-[60] flex items-center justify-center p-4",children:[e.jsx(_.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:j,className:"absolute inset-0 bg-primary/20 backdrop-blur-xl"}),e.jsxs(_.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},className:"relative bg-surface w-full max-w-4xl rounded-[40px] shadow-2xl overflow-hidden border border-outline/10",children:[e.jsxs("div",{className:"p-8 flex justify-between items-center bg-surface-container-low border-b border-outline/5",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"bg-primary/10 p-2.5 rounded-2xl text-primary",children:e.jsx(je,{size:24})}),e.jsx("h3",{className:"text-2xl font-black text-primary",children:"مراجعة التحديث الذكي"})]}),e.jsx("button",{onClick:j,className:"p-2.5 hover:bg-surface-container-high rounded-full transition-all active:scale-90",children:e.jsx(et,{size:24})})]}),e.jsxs("div",{className:"p-10 space-y-8 max-h-[70vh] overflow-y-auto no-scrollbar",children:[e.jsx("p",{className:"text-secondary/80 font-bold text-center bg-surface-container-low p-4 rounded-2xl border border-outline/5",children:"تم العثور على معلومات أكثر دقة لهذه المادة. يرجى مراجعة التغييرات المقترحة أدناه قبل الموافقة."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsx("h4",{className:"text-sm font-black text-secondary/40 uppercase tracking-widest border-b border-outline/5 pb-2",children:"المعلومات الحالية"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-surface-container-low/50 p-4 rounded-2xl",children:[e.jsx("label",{className:"text-[10px] font-black text-secondary/40 uppercase block mb-1",children:"الاسم"}),e.jsxs("p",{className:"font-bold text-secondary",children:[x.nameEn," / ",x.nameAr]})]}),e.jsxs("div",{className:"bg-surface-container-low/50 p-4 rounded-2xl",children:[e.jsx("label",{className:"text-[10px] font-black text-secondary/40 uppercase block mb-1",children:"الصيغة"}),e.jsx("p",{className:"font-mono font-bold text-secondary",children:x.formula})]}),e.jsxs("div",{className:"bg-surface-container-low/50 p-4 rounded-2xl",children:[e.jsx("label",{className:"text-[10px] font-black text-secondary/40 uppercase block mb-1",children:"رقم CAS"}),e.jsx("p",{className:"font-bold text-secondary",children:x.casNumber||"غير متوفر"})]}),e.jsxs("div",{className:"bg-surface-container-low/50 p-4 rounded-2xl",children:[e.jsx("label",{className:"text-[10px] font-black text-secondary/40 uppercase block mb-1",children:"درجة التخزين"}),e.jsx("p",{className:"font-bold text-secondary",children:x.storageTemp||"غير متوفر"})]}),e.jsxs("div",{className:"bg-surface-container-low/50 p-4 rounded-2xl",children:[e.jsx("label",{className:"text-[10px] font-black text-secondary/40 uppercase block mb-1",children:"الخطورة"}),e.jsx("p",{className:"font-bold text-secondary",children:x.hazardClass==="danger"?"خطر":"آمن"})]}),e.jsxs("div",{className:"bg-surface-container-low/50 p-4 rounded-2xl",children:[e.jsx("label",{className:"text-[10px] font-black text-secondary/40 uppercase block mb-1",children:"ملاحظات"}),e.jsx("p",{className:"text-xs text-secondary/60",children:x.notes||"لا توجد"})]})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("h4",{className:"text-sm font-black text-primary uppercase tracking-widest border-b border-primary/10 pb-2",children:"المعلومات المقترحة ✨"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:k("p-4 rounded-2xl border transition-all",i.nameEn!==x.nameEn||i.nameAr!==x.nameAr?"bg-primary/5 border-primary/20 shadow-sm":"bg-surface-container-low/50 border-transparent"),children:[e.jsx("label",{className:"text-[10px] font-black text-primary/40 uppercase block mb-1",children:"الاسم"}),e.jsxs("p",{className:"font-bold text-primary",children:[i.nameEn," / ",i.nameAr]})]}),e.jsxs("div",{className:k("p-4 rounded-2xl border transition-all",i.formula!==x.formula?"bg-primary/5 border-primary/20 shadow-sm":"bg-surface-container-low/50 border-transparent"),children:[e.jsx("label",{className:"text-[10px] font-black text-primary/40 uppercase block mb-1",children:"الصيغة"}),e.jsx("p",{className:"font-mono font-bold text-primary",children:i.formula})]}),e.jsxs("div",{className:k("p-4 rounded-2xl border transition-all",i.casNumber!==x.casNumber?"bg-primary/5 border-primary/20 shadow-sm":"bg-surface-container-low/50 border-transparent"),children:[e.jsx("label",{className:"text-[10px] font-black text-primary/40 uppercase block mb-1",children:"رقم CAS"}),e.jsx("p",{className:"font-bold text-primary",children:i.casNumber})]}),e.jsxs("div",{className:k("p-4 rounded-2xl border transition-all",i.storageTemp!==x.storageTemp?"bg-primary/5 border-primary/20 shadow-sm":"bg-surface-container-low/50 border-transparent"),children:[e.jsx("label",{className:"text-[10px] font-black text-primary/40 uppercase block mb-1",children:"درجة التخزين"}),e.jsx("p",{className:"font-bold text-primary",children:i.storageTemp})]}),e.jsxs("div",{className:k("p-4 rounded-2xl border transition-all",i.hazardClass!==x.hazardClass?"bg-primary/5 border-primary/20 shadow-sm":"bg-surface-container-low/50 border-transparent"),children:[e.jsx("label",{className:"text-[10px] font-black text-primary/40 uppercase block mb-1",children:"الخطورة"}),e.jsx("p",{className:"font-bold text-primary",children:i.hazardClass==="danger"?"خطر":"آمن"})]}),e.jsxs("div",{className:k("p-4 rounded-2xl border transition-all",i.notes!==x.notes?"bg-primary/5 border-primary/20 shadow-sm":"bg-surface-container-low/50 border-transparent"),children:[e.jsx("label",{className:"text-[10px] font-black text-primary/40 uppercase block mb-1",children:"ملاحظات"}),e.jsx("p",{className:"text-xs text-primary/80",children:i.notes})]})]})]})]})]}),e.jsxs("div",{className:"p-10 bg-surface-container-low border-t border-outline/5 flex gap-4",children:[e.jsxs("button",{onClick:S,className:"flex-1 bg-primary text-on-primary py-5 rounded-full font-black shadow-xl shadow-primary/20 hover:bg-primary-container hover:shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3",children:[e.jsx(Je,{size:24}),"موافقة وتحديث البيانات"]}),e.jsxs("button",{onClick:j,className:"flex-1 bg-surface border border-outline/20 text-secondary py-5 rounded-full font-black hover:bg-surface-container-high transition-all active:scale-95 flex items-center justify-center gap-3",children:[e.jsx($t,{size:24}),"إلغاء التغييرات"]})]})]})]})})}const se={GHS01:"/ghs/GHS01.png",GHS02:"/ghs/GHS02.png",GHS03:"/ghs/GHS03.png",GHS04:"/ghs/GHS04.png",GHS05:"/ghs/GHS05.png",GHS06:"/ghs/GHS06.png",GHS07:"/ghs/GHS07.png",GHS08:"/ghs/GHS08.png",GHS09:"/ghs/GHS09.png"},Ne={GHS01:"متفجرات",GHS02:"قابل للاشتعال",GHS03:"مؤكسد",GHS04:"غاز تحت الضغط",GHS05:"أكال / مسبب للتآكل",GHS06:"سمية حادة (قاتل)",GHS07:"تهيج / تحسس / خطر",GHS08:"خطر صحي جسيم",GHS09:"خطر بيئي"};function Ft(z,i,x=[]){const[j,S]=u.useState([]),[p,C]=u.useState(!0),[n,I]=u.useState(null),[c,A]=[!1,T=>T()],O=u.useRef(null);return u.useEffect(()=>{C(!0);let T=!0;return O.current=bt(z,g=>{T&&A(()=>{const E=g.docs.map(i);S(E),C(!1)})},g=>{T&&(I(g),C(!1))}),()=>{T=!1,O.current&&O.current()}},x),{data:j,loading:p,error:n}}function Mt(z=!1){const{schoolId:i,schoolName:x,directorate:j}=gt(),[S]=yt(),[p,C]=u.useState([]),[n,I]=u.useState(!0),[c,A]=u.useState(""),[O,T]=u.useState(S.get("filter")==="low"),[g,E]=u.useState(null),[W,ne]=u.useState(!1),[K,ie]=u.useState(null),Z=u.useRef(null),[H,le]=u.useState(!1),[Re,B]=u.useState(!1),[_e,oe]=u.useState(!1),[ce,de]=u.useState(!1),[Oe,J]=u.useState({current:0,total:0}),[Q,Y]=u.useState([]),[N,pe]=u.useState(null),[Fe,me]=u.useState(!1),[v,Se]=u.useState(null),[Me,Ue]=u.useState(!1),ee=t=>{if(!t)return"غير محدد";if(!t.includes("-"))return t;const[a,s,o]=t.split("-");return!a||!s||!o?t:`${o}/${s}/${a}`},[q,$]=u.useState({nameEn:"",nameAr:"",formula:"",casNumber:"",storageTemp:"",unit:"g",quantity:0,state:"solid",hazardClass:"safe",ghs:[],shelf:"",expiryDate:"",notes:""}),{data:L,loading:xe,error:Be}=Ft(vt(U(i,"chemicals")),t=>({id:t.id,...t.data()}),[i]);u.useEffect(()=>{if(!xe){C(L),I(!1);const t=S.get("id");if(t){let a=t;t.startsWith("APP_ID_")&&(a=t.split("_").slice(2,-1).join("_")),A(a);const s=L.find(o=>o.id===t||o.id===a);s?E(s):L.length>0&&!g&&E(L[0])}else L.length>0&&!g&&E(L[0])}},[L,xe,S]);const te=async t=>{t.preventDefault();try{if(K){const{id:a}=K;await Ke(re(U(i,"chemicals"),a),{...q,updatedAt:we()}),await He(i,Le.UPDATE,Ge.CHEMICALS,`تعديل بيانات المادة: ${q.nameAr}`,a)}else{const a=await St(U(i,"chemicals"),{...q,createdAt:we()});await He(i,Le.CREATE,Ge.CHEMICALS,`إضافة مادة جديدة: ${q.nameAr}`,a.id)}ne(!1),ie(null),$({nameEn:"",nameAr:"",formula:"",casNumber:"",storageTemp:"",unit:"g",quantity:0,state:"solid",hazardClass:"safe",ghs:[],shelf:"",expiryDate:"",notes:""})}catch(a){Pe(a,K?ve.UPDATE:ve.CREATE,"chemicals")}},he=async()=>{const t=q.nameEn||q.nameAr;if(!t){alert("يرجى إدخال اسم المادة أولاً (بالعربية أو الإنجليزية)");return}B(!0);try{const a=await We(t);if(a){let s="";if(a.expiryYears>0){const o=new Date;o.setFullYear(o.getFullYear()+a.expiryYears),s=o.toISOString().split("T")[0]}$(o=>({...o,nameEn:a.nameEn||o.nameEn,nameAr:a.nameAr||o.nameAr,formula:a.formula||o.formula,casNumber:a.casNumber||o.casNumber,storageTemp:a.storageTemp||o.storageTemp,hazardClass:a.hazardClass||o.hazardClass,ghs:a.ghs||o.ghs,expiryDate:s||o.expiryDate,notes:a.notes||o.notes}))}else alert("لم نتمكن من الحصول على معلومات دقيقة لهذه المادة. يرجى إدخالها يدوياً.")}catch(a){console.error("Smart fill error:",a),alert("حدث خطأ أثناء محاولة الحصول على المعلومات الذكية.")}finally{B(!1)}},R=async t=>{const a=t||g;if(a){B(!0);try{const s=await We(a.nameEn||a.nameAr);s?(pe(s),t&&E(t),me(!0)):alert("لم نتمكن من الحصول على اقتراحات تحديث لهذه المادة.")}catch(s){console.error("Smart update request error:",s),alert("حدث خطأ أثناء طلب التحديث الذكي.")}finally{B(!1)}}},ze=async()=>{if(!(!g||!N))try{let t=g.expiryDate;if(N.expiryYears>0){const a=new Date;a.setFullYear(a.getFullYear()+N.expiryYears),t=a.toISOString().split("T")[0]}await Ke(re(U(i,"chemicals"),g.id),{nameEn:N.nameEn,nameAr:N.nameAr,formula:N.formula,casNumber:N.casNumber,storageTemp:N.storageTemp,hazardClass:N.hazardClass,ghs:N.ghs,expiryDate:t,notes:N.notes,updatedAt:we()}),me(!1),pe(null),alert("تم تحديث معلومات المادة بنجاح!")}catch(t){Pe(t,ve.UPDATE,`chemicals/${g.id}`)}},Qe=async()=>{if(de(!1),!await kt()){alert("يرجى اختيار مفتاح API الخاص بك لاستخدام ميزة التحديث الذكي.");return}oe(!0),J({current:0,total:p.length});let a=0,s=0;for(let o=0;o<p.length;o++){const h=p[o];J({current:o+1,total:p.length});try{const l=await We(h.nameEn||h.nameAr);if(l){let m=h.expiryDate;if(l.expiryYears>0){const G=new Date;G.setFullYear(G.getFullYear()+l.expiryYears),m=G.toISOString().split("T")[0]}await Ke(re(U(i,"chemicals"),h.id),{nameEn:l.nameEn||h.nameEn,nameAr:l.nameAr||h.nameAr,formula:l.formula||h.formula,casNumber:l.casNumber||h.casNumber,storageTemp:l.storageTemp||h.storageTemp,hazardClass:l.hazardClass||h.hazardClass,ghs:l.ghs||h.ghs,expiryDate:m||h.expiryDate,notes:l.notes||h.notes,updatedAt:we()}),a++}else s++}catch(l){console.error(`Error updating chemical ${h.nameEn}:`,l),s++;const m=(l==null?void 0:l.message)||String(l);if(m.includes("quota")||m.includes("RESOURCE_EXHAUSTED")){alert("تم إيقاف التحديث التلقائي بسبب تجاوز حصة الاستخدام المسموح بها (Quota Exceeded). يرجى المحاولة لاحقاً أو التحقق من حساب Gemini API الخاص بك.");break}}await new Promise(l=>setTimeout(l,5e3))}oe(!1),alert(`اكتمل التحديث الذكي!
تم تحديث: ${a} مادة بنجاح
فشل: ${s} مادة`)},D=async(t,a)=>{try{await Nt(re(U(i,"chemicals"),t)),await He(i,Le.DELETE,Ge.CHEMICALS,`حذف المادة: ${a}`,t),(g==null?void 0:g.id)===t&&E(p.find(s=>s.id!==t)||null)}catch(s){Pe(s,ve.DELETE,`chemicals/${t}`)}},Ce=()=>{const t=window.open("","_blank");if(!t){alert("يرجى السماح بالنوافذ المنبثقة لطباعة القائمة");return}const a=ue.filter(m=>m.ghs&&m.ghs.length>0||m.hazardClass==="danger").length,o=new Date().toLocaleDateString("ar-DZ",{day:"2-digit",month:"2-digit",year:"numeric"}),h="2025/2026",l=ue.map((m,G)=>{const fe=m.ghs&&m.ghs.length>0||m.hazardClass==="danger",be=(m.ghs||[]).map(F=>`<div class="ghs-pic"><img src="${se[F]}" alt="${F}" /></div>`).join("");return`
        <tr class="${fe?"hazardous-row":""}">
          <td class="text-center">${G+1}</td>
          <td class="font-bold text-lg">${m.nameAr}</td>
          <td class="text-sm en-font">${m.nameEn}</td>
          <td class="mono-font">${m.formula||"—"}</td>
          <td class="text-center">${m.unit}</td>
          <td class="text-center font-bold">${m.quantity}</td>
          <td class="text-center">${m.state==="solid"?"صلب":m.state==="liquid"?"سائل":"غاز"}</td>
          <td class="text-center">${m.shelf||"—"}</td>
          <td><div class="ghs-container">${be}</div></td>
          <td class="notes-cell">${m.notes||"—"}</td>
        </tr>
      `}).join("");t.document.write(`
      <html dir="rtl" lang="ar">
        <head>
          <meta charset="UTF-8">
          <title>سجل المواد الكيميائية — ${x}</title>
          <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet">
          <style>
            :root {
              --primary: #006494;
              --on-primary: #ffffff;
              --primary-container: #cbe6ff;
              --secondary: #50606e;
              --surface: #fdfcff;
              --surface-variant: #dee3eb;
              --outline: #71787e;
              --error: #ba1a1a;
            }

            * { box-sizing: border-box; margin: 0; padding: 0; }
            body { 
              font-family: 'Cairo', sans-serif; 
              direction: rtl; 
              background: #f8f9fb; 
              color: #1a1c1e;
              padding: 20px;
            }

            #toolbar {
              position: fixed; top: 0; left: 0; right: 0; 
              z-index: 100; background: #1a1c1e; color: white;
              padding: 12px 24px; display: flex; align-items: center; gap: 15px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            }
            #toolbar h3 { flex: 1; font-weight: 800; font-size: 16px; }
            .tb-btn { 
              padding: 10px 20px; border: none; border-radius: 20px; 
              cursor: pointer; font-weight: 700; font-size: 13px; font-family: Cairo;
              transition: all 0.2s;
            }
            .tb-print { background: #00b894; color: white; }
            .tb-close { background: #e74c3c; color: white; }

            .page-sheet {
              background: white;
              width: 297mm;
              min-height: 210mm;
              margin: 60px auto 20px;
              padding: 15mm;
              box-shadow: 0 10px 30px rgba(0,0,0,0.1);
              display: flex;
              flex-direction: column;
            }

            /* --- Header Layout --- */
            .official-header {
              display: grid;
              grid-template-columns: 1fr 2fr 1fr;
              margin-bottom: 20px;
              padding-bottom: 15px;
              border-bottom: 2px solid var(--primary);
              align-items: start;
            }
            .oh-right { text-align: right; line-height: 1.6; font-size: 10pt; }
            .oh-center { text-align: center; line-height: 1.5; font-size: 11pt; font-weight: 800; }
            .oh-left { text-align: left; line-height: 1.6; font-size: 10pt; }
            .oh-center img { height: 50px; margin-bottom: 5px; }

            .main-title {
              text-align: center;
              font-size: 22pt;
              font-weight: 900;
              color: var(--primary);
              margin: 10px 0;
              letter-spacing: -0.5px;
              text-shadow: 1px 1px 0 rgba(0,0,0,0.05);
            }

            .registry-meta {
              display: flex;
              justify-content: center;
              gap: 30px;
              margin-bottom: 20px;
              padding: 10px;
              background: var(--primary-container);
              border-radius: 12px;
              font-weight: 700;
              color: var(--on-primary-container);
            }

            /* --- Table Design --- */
            .registry-table {
              width: 100%;
              border-collapse: separate;
              border-spacing: 0;
              font-size: 10pt;
              margin-bottom: 20px;
            }
            .registry-table th {
              background: #f0f4f8;
              color: var(--secondary);
              font-weight: 800;
              padding: 12px 8px;
              border: 1px solid #d1d5db;
              text-align: center;
              font-size: 9pt;
            }
            .registry-table td {
              padding: 10px 8px;
              border: 1px solid #e5e7eb;
              line-height: 1.4;
            }
            .registry-table tr:nth-child(even) { background: #fafbfc; }
            .hazardous-row { background-color: #fff1f2 !important; }
            .hazardous-row td:first-child { border-right: 4px solid var(--error); }

            .text-center { text-align: center; }
            .font-bold { font-weight: 800; }
            .mono-font { font-family: 'JetBrains Mono', monospace; font-size: 9pt; }
            .en-font { font-family: sans-serif; color: var(--secondary); }
            .notes-cell { font-size: 9pt; color: #444; font-style: italic; }

            .ghs-container { display: flex; gap: 4px; justify-content: center; flex-wrap: wrap; }
            .ghs-pic { 
              width: 32px; height: 32px; border: 1px solid #ddd; 
              border-radius: 4px; background: white; padding: 2px;
              display: flex; align-items: center; justify-content: center;
            }
            .ghs-pic img { width: 100%; height: 100%; object-fit: contain; }

            /* --- Footer --- */
            .registry-footer {
              margin-top: auto;
              padding-top: 30px;
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 20px;
            }
            .sign-box {
              text-align: center;
              border: 1px solid #eee;
              padding: 15px;
              border-radius: 12px;
              background: #fafafa;
            }
            .sign-box h4 { margin-bottom: 50px; font-weight: 800; text-decoration: underline; color: var(--secondary); }
            
            .inst-stamp {
              width: 40mm;
              height: 25mm;
              border: 2px dashed #ccc;
              border-radius: 12px;
              margin: 10px auto;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 8pt;
              color: #999;
            }

            @media print {
              #toolbar { display: none !important; }
              body { background: white !important; padding: 0 !important; }
              .page-sheet { 
                margin: 0 !important; box-shadow: none !important; 
                width: 100% !important; padding: 10mm !important;
                border-radius: 0 !important;
              }
              @page { size: A4 landscape; margin: 0; }
              .registry-table th { background: #eee !important; -webkit-print-color-adjust: exact; }
              .hazardous-row { background-color: #fff1f1 !important; -webkit-print-color-adjust: exact; }
              .registry-meta { background: #eee !important; color: black !important; -webkit-print-color-adjust: exact; }
            }
          </style>
        </head>
        <body>
          <div id="toolbar">
              <h3>📄 جرد المواد الكيميائية — سجل المخبر</h3>
              <button class="tb-btn tb-print" onclick="window.print()">🖨️ طباعة السجل</button>
              <button class="tb-btn tb-close" onclick="window.close()">✕ إغلاق</button>
          </div>

          <div class="page-sheet">
            <header class="official-header">
              <div class="oh-right">
                <div>وزارة التربية الوطنية</div>
                <div>مديرية التربية لولاية: ${j}</div>
                <div>المؤسسة: ${x}</div>
              </div>
              <div class="oh-center">
                <p>الجمهورية الجزائرية الديمقراطية الشعبية</p>
                <div class="main-title">سجل جرد المواد الكيميائية للمخبر</div>
              </div>
              <div class="oh-left">
                <div>السنة الدراسية: ${h}</div>
                <div>تاريخ الطباعة: ${o}</div>
                <div class="inst-stamp">ختم المؤسسة</div>
              </div>
            </header>

            <div class="registry-meta">
              <span>إجمالي المواد: ${ue.length}</span>
              <span style="border-right: 2px solid rgba(0,0,0,0.1); padding-right: 20px;">المواد الخطرة: ${a}</span>
            </div>

            <table class="registry-table">
              <thead>
                <tr>
                  <th width="40">رقم</th>
                  <th>الاسم العربي للمادة</th>
                  <th>Désignation (En)</th>
                  <th width="120">الصيغة</th>
                  <th width="60">الوحدة</th>
                  <th width="60">الكمية</th>
                  <th width="70">الحالة</th>
                  <th width="60">الرف</th>
                  <th width="100">GHS Pictograms</th>
                  <th>ملاحظات إضافية</th>
                </tr>
              </thead>
              <tbody>
                ${l}
              </tbody>
            </table>

            <footer class="registry-footer">
              <div class="sign-box"><h4>المخبري الرئيسي</h4></div>
              <div class="sign-box"><h4>المقتصد</h4></div>
              <div class="sign-box"><h4>مدير المؤسسة</h4></div>
              <div class="sign-box"><h4>مفتش التربية الوطنية</h4></div>
            </footer>
          </div>
        </body>
      </html>
    `),t.document.close()},De=async()=>{const t=["#","الاسم العلمي","الاسم العربي","الصيغة","الكمية","الرف","تاريخ الصلاحية"],a=V.map((s,o)=>[o+1,s.nameEn||"",s.nameAr||"",s.formula||"",`${s.quantity} ${s.unit}`,s.shelf||"",ee(s.expiryDate)]);await Tt.generateTablePDF("تقرير جرد المواد الكيميائية",t,a,`chemicals_inventory_${new Date().toISOString().split("T")[0]}.pdf`)},Ae=()=>{const t=X.json_to_sheet(V.map(s=>({"الاسم (EN)":s.nameEn,"الاسم (AR)":s.nameAr,الصيغة:s.formula,"رقم CAS":s.casNumber,الكمية:s.quantity,الوحدة:s.unit,الحالة:s.state,الخطورة:s.hazardClass,الرف:s.shelf,"تاريخ الصلاحية":s.expiryDate,ملاحظات:s.notes}))),a=X.book_new();X.book_append_sheet(a,t,"Inventory"),dt(a,`chemical_inventory_${new Date().toISOString().split("T")[0]}.xlsx`)},Ee=async t=>{var o;const a=(o=t.target.files)==null?void 0:o[0];if(!a)return;le(!0);const s=new FileReader;s.onload=async h=>{var l;try{const m=(l=h.target)==null?void 0:l.result,G=jt(m,{type:"binary",cellDates:!0}),fe=G.SheetNames[0],be=G.Sheets[fe],F=X.sheet_to_json(be),$e=f=>{if(!f)return"";if(f instanceof Date)return f.toISOString().split("T")[0];const ae=new Date(f);return isNaN(ae.getTime())?String(f).trim():ae.toISOString().split("T")[0]},P=(f,ae)=>{const Ve=Object.keys(f);for(const ge of ae){const ye=Ve.find(M=>M.toLowerCase().trim()===ge.toLowerCase().trim());if(ye)return f[ye]}},at=rt(st);F.forEach(f=>{const ae=P(f,["PRODUIT CHIMIQUE","Name","nameEn","Product","Chemical"])||"Unnamed Chemical",Ve=P(f,["الاسم العربي","الاسم","Arabic Name","nameAr","Arabic"])||"",ge=P(f,["الكمية","Quantity","quantity","Qty","Amount"]),ye=typeof ge=="number"?ge:parseFloat(String(ge||"0").replace(/[^0-9.]/g,""));let M=String(P(f,["الحالة","State","state","Status"])||"solid").trim(),Ie="solid";M==="صلب"||M.toLowerCase()==="solid"?Ie="solid":M==="سائل"||M.toLowerCase()==="liquid"?Ie="liquid":(M==="غاز"||M.toLowerCase()==="gas")&&(Ie="gas");let Te=String(P(f,["الخطورة","Hazard","hazardClass","Danger"])||"safe").trim(),Xe="safe";Te==="خطر"||Te.toLowerCase()==="danger"?Xe="danger":(Te==="آمن"||Te.toLowerCase()==="safe")&&(Xe="safe");const ht=re(U(i,"chemicals"));at.set(ht,{nameEn:String(ae).trim(),nameAr:String(Ve).trim(),formula:P(f,["الصيغة","Formula","formula"])||"",unit:P(f,["الوحدة","Unit","unit"])||"g",quantity:isNaN(ye)?0:ye,state:Ie,hazardClass:Xe,ghs:Array.isArray(f.GHS)?f.GHS:f.GHS?String(f.GHS).split(",").map(ut=>ut.trim()):[],shelf:P(f,["الرف","Shelf","shelf"])||"",expiryDate:$e(P(f,["الصلاحية","Expiry","تاريخ الانتهاء","expiryDate"])),notes:P(f,["ملاحظات","Notes","notes"])||"",createdAt:we()})}),await at.commit(),alert(`تم استيراد ${F.length} مادة بنجاح!`)}catch(m){console.error("Error importing XLS:",m),alert("حدث خطأ أثناء استيراد الملف. يرجى التأكد من صيغة الملف.")}finally{le(!1),Z.current&&(Z.current.value="")}},s.readAsBinaryString(a)},d=t=>{const a=window.open("","_blank");if(!a){alert("يرجى السماح بالنوافذ المنبثقة لطباعة البطاقات");return}const s=new Date,o="2025/2026",h=t.map((l,m)=>{var F,$e;const G=l.state==="solid"?"صلب":l.state==="liquid"?"سائل":"غاز",fe=l.hazardClass==="danger"?(F=l.ghs)!=null&&F[0]?Ne[l.ghs[0]]:"خطر":"آمن",be=($e=l.ghs)!=null&&$e[0]?"☠️":"—";return`
        <div class="pcard">
          <div class="ph-container">
            <div class="ph">
              <div class="ph-r">مديرية التربية لولاية: ${j}<br>ثانوية: ${x}</div>
              <div class="ph-c">الجمهورية الجزائرية الديمقراطية الشعبية<br>وزارة التربية الوطنية</div>
              <div class="ph-l">
                <div>السنة الدراسية: ${o}</div>
                <div class="header-stamp">ختم المؤسسة</div>
              </div>
            </div>
          </div>

          <div class="pcard-badge">رقم البطاقة: ${m+1}</div>
          <h1 class="pcard-title">بطاقة مخزون مادة كيميائية</h1>
          
          <div class="ic-meta-expressive">
             <div class="ic-field main">
                <span class="l">اسم المادة (AR)</span>
                <span class="v">${l.nameAr}</span>
             </div>
             <div class="ic-field sub">
                <span class="l">NOM DU PRODUIT</span>
                <span class="v en">${l.nameEn}</span>
             </div>
          </div>

          <div class="ic-grid-info">
             <div class="ic-info-box">
                <span class="l">الصيغة</span>
                <span class="v en-bold">${l.formula||"—"}</span>
             </div>
             <div class="ic-info-box">
                <span class="l">الحالة</span>
                <span class="v">${G}</span>
             </div>
             <div class="ic-info-box">
                <span class="l">الرف</span>
                <span class="v">${l.shelf||"—"}</span>
             </div>
             <div class="ic-info-box danger">
                <span class="l">GHS</span>
                <span class="v emoji">${be}</span>
             </div>
          </div>

          <div class="ic-safety-strip">
             <b>طبيعة الخطورة:</b> ${fe} 
             <span style="margin-right: 15px">|</span> 
             <b>وحدة القياس:</b> ${l.unit}
          </div>

          <div class="ic-table-container">
            <table class="ic-tbl">
              <thead>
                <tr>
                  <th rowspan="2" width="12%">التاريخ</th>
                  <th colspan="2">سند الطلب</th>
                  <th rowspan="2">المصدر</th>
                  <th rowspan="2" width="10%">الثمن</th>
                  <th colspan="3">الكمية</th>
                  <th rowspan="2">ملاحظات</th>
                </tr>
                <tr><th>خروج</th><th>دخول</th><th>خروج</th><th>دخول</th><th>المخزون</th></tr>
              </thead>
              <tbody>
                <tr class="initial-stock">
                  <td>${s.toLocaleDateString("en-GB")}</td>
                  <td>-</td><td>-</td>
                  <td>رصيد أول المدة</td>
                  <td>-</td>
                  <td>-</td><td>${l.quantity}</td><td>${l.quantity}</td>
                  <td>رصيد ابتدائي</td>
                </tr>
                ${Array(14).fill("<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>").join("")}
                <tr class="carry-over">
                  <td colspan="5">الرصيد المنقول لظهر البطاقة</td>
                  <td></td><td></td><td class="bold">..........</td>
                  <td>ينقل ←</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="pcard back">
          <div class="back-header">
             <span>تتمة حركة المخزون — ${l.nameAr}</span>
             <span class="ref">REF: ${m+1}</span>
          </div>

          <div class="ic-table-container">
            <table class="ic-tbl">
              <thead>
                <tr>
                  <th rowspan="2" width="12%">التاريخ</th>
                  <th colspan="2">سند الطلب</th>
                  <th rowspan="2">المصدر</th>
                  <th rowspan="2" width="10%">الثمن</th>
                  <th colspan="3">الكمية</th>
                  <th rowspan="2">ملاحظات</th>
                </tr>
                <tr><th>خروج</th><th>دخول</th><th>خروج</th><th>دخول</th><th>المخزون</th></tr>
              </thead>
              <tbody>
                <tr class="initial-stock">
                  <td colspan="5">المجموع المنقول من وجه البطاقة</td>
                  <td></td><td></td><td>..........</td>
                  <td>نقل ←</td>
                </tr>
                ${Array(22).fill("<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>").join("")}
              </tbody>
            </table>
          </div>

          <div class="ic-safety-rules">
             <h3>⚠️ تعليمات السلامة الخاصة بالتخزين</h3>
             <div class="rules-box">
                ${l.notes||"يجب حفظ هذه المادة في ظروف ملائمة بعيداً عن الرطوبة والحرارة ووفق معايير السلامة المنصوص عليها في دليل المختبرات."}
             </div>
          </div>
        </div>
      `}).join("");a.document.write(`
      <html dir="rtl" lang="ar">
        <head>
          <meta charset="UTF-8">
          <title>بطاقة مخزون</title>
          <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet">
          <style>
            :root {
              --primary: #006494;
              --on-primary: #ffffff;
              --primary-container: #cbe6ff;
              --on-primary-container: #001e30;
              --secondary: #50606e;
              --tertiary: #65587b;
              --error: #ba1a1a;
              --outline: #71787e;
              --surface: #fdfcff;
              --surface-variant: #dee3eb;
            }

            * { box-sizing: border-box; margin: 0; padding: 0; }
            body { 
              font-family: 'Cairo', sans-serif; 
              direction: rtl; 
              background: #f0f2f5; 
              color: #1a1c1e;
              padding: 20px;
            }

            #toolbar {
              position: fixed; top: 0; left: 0; right: 0; 
              z-index: 100; background: #1a1c1e; color: white;
              padding: 12px 24px; display: flex; align-items: center; gap: 15px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            }
            #toolbar h3 { flex: 1; font-weight: 800; font-size: 16px; }
            .tb-btn { 
              padding: 10px 20px; border: none; border-radius: 20px; 
              cursor: pointer; font-weight: 700; font-size: 13px; font-family: Cairo;
              transition: all 0.2s;
            }
            .tb-print { background: #00b894; color: white; }
            .tb-close { background: #e74c3c; color: white; }

            #body { padding-top: 60px; max-width: 900px; margin: 0 auto; }

            .pcard {
              background: white;
              width: 148mm;
              height: 210mm;
              margin: 20px auto;
              padding: 8mm;
              border-radius: 24px;
              box-shadow: 0 10px 25px rgba(0,0,0,0.08);
              display: flex;
              flex-direction: column;
              border: 1px solid rgba(0,0,0,0.05);
              position: relative;
              overflow: hidden;
            }

            .pcard.back { border-style: dashed; }

            .ph-container {
              background: var(--surface-variant);
              margin: -8mm -8mm 4mm -8mm;
              padding: 6mm 8mm;
              border-radius: 0 0 24px 24px;
            }
            .ph {
              display: grid; grid-template-columns: 1fr 1.5fr 1fr;
              font-size: 7.5pt; gap: 4px; align-items: start; color: var(--secondary);
            }
            .ph-r { text-align: right; line-height: 1.5; }
            .ph-c { text-align: center; font-weight: 800; line-height: 1.5; }
            .ph-l { text-align: left; line-height: 1.5; }

            .header-stamp {
              margin-top: 5px;
              width: 35mm;
              height: 20mm;
              border: 1px dashed var(--outline);
              border-radius: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 6pt;
              color: var(--outline);
              font-weight: 400;
            }

            .pcard-badge {
              position: absolute; top: 12mm; left: 8mm;
              background: var(--primary-container); color: var(--on-primary-container);
              padding: 2px 12px; border-radius: 12px; font-size: 8pt; font-weight: 700;
            }

            .pcard-title {
              text-align: center; font-size: 14pt; font-weight: 900;
              color: var(--primary); margin: 4mm 0;
            }

            .ic-meta-expressive { display: flex; flex-direction: column; gap: 4px; margin-bottom: 6mm; }
            .ic-field { border-radius: 12px; padding: 6px 12px; display: flex; align-items: center; justify-content: space-between; }
            .ic-field.main { background: #f0f4f9; border-right: 4px solid var(--primary); }
            .ic-field.sub { background: #fafbfc; border-right: 4px solid var(--outline); font-size: 9pt; }
            .ic-field .l { font-weight: 700; color: var(--secondary); font-size: 8.5pt; }
            .ic-field .v { font-weight: 800; font-size: 11pt; }
            .ic-field .v.en { font-family: sans-serif; font-size: 9pt; text-transform: uppercase; }

            .ic-grid-info { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-bottom: 6mm; }
            .ic-info-box { background: #fff; border: 1px solid var(--surface-variant); border-radius: 12px; padding: 6px; text-align: center; }
            .ic-info-box .l { display: block; font-size: 7pt; font-weight: 700; color: var(--tertiary); margin-bottom: 2px; }
            .ic-info-box .v { font-weight: 800; font-size: 9.5pt; }
            .ic-info-box .v.en-bold { font-family: monospace; font-weight: 900; font-size: 10pt; }
            .ic-info-box.danger { border-color: var(--error); background: #fff8f8; }

            .ic-safety-strip { background: var(--on-primary-container); color: white; border-radius: 8px; padding: 5px 12px; font-size: 8.5pt; margin-bottom: 6mm; }

            .ic-table-container { flex: 1; margin-bottom: 4mm; }
            .ic-tbl { width: 100%; border-collapse: collapse; font-size: 8pt; table-layout: fixed; }
            .ic-tbl th, .ic-tbl td { border: 0.5pt solid var(--surface-variant); padding: 4px; text-align: center; }
            .ic-tbl th { background: #e8ecef; color: var(--secondary); font-weight: 800; font-size: 7pt; }
            .ic-tbl td { height: 6mm; }
            tr.initial-stock { background: #f0fdf4; font-weight: 600; }
            .bold { font-weight: 900; }

            .back-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--primary); padding-bottom: 5px; margin-bottom: 6mm; font-weight: 900; font-size: 11pt; color: var(--primary); }
            .rules-box { background: #fffafa; border: 1px solid #ffeded; padding: 10px; border-radius: 12px; font-size: 8.5pt; color: #444; line-height: 1.6; }

            @media print {
              #toolbar { display: none !important; }
              body { background: white !important; padding: 0 !important; }
              @page { size: A5 portrait; margin: 3mm; }
              .pcard {
                width: 100% !important; height: calc(210mm - 6mm) !important;
                margin: 0 !important; border: 1px solid #000 !important;
                border-radius: 0 !important; box-shadow: none !important;
                page-break-after: always !important; padding: 5mm !important;
              }
              .ph-container { border-radius: 0 !important; margin-bottom: 2mm !important; }
              .ic-meta-expressive .ic-field { background: white !important; border: 1px solid #eee !important; box-shadow: none !important; }
              .ic-tbl th { background: #f0f0f0 !important; border: 0.5pt solid #000 !important; print-color-adjust: exact; }
              .ic-tbl td { border: 0.5pt solid #000 !important; }
            }
          </style>
        </head>
        <body>
          <div id="toolbar">
              <h3>🎨 جرد كيميائي — ${t.length} عنصر</h3>
              <button class="tb-btn tb-print" onclick="window.print()">🖨️ بدء الطباعة</button>
              <button class="tb-btn tb-close" onclick="window.close()">✕ إغلاق المعاينة</button>
          </div>
          <div id="body">
            ${h}
          </div>
        </body>
      </html>
    `),a.document.close()},b=t=>{const a=window.open("","_blank");a&&(a.document.write(`
      <html dir="rtl">
        <head>
          <title>بطاقة مادة - ${t.nameEn}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 40px; }
            .header { text-align: center; border-bottom: 2px solid #2b3d22; padding-bottom: 20px; margin-bottom: 30px; }
            .title { font-size: 24px; font-weight: bold; color: #2b3d22; }
            .details { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
            .item { border-bottom: 1px solid #eee; padding: 10px 0; }
            .label { font-weight: bold; color: #5c6146; }
            .hazard { color: #e11d48; font-weight: bold; }
            .footer { margin-top: 50px; text-align: left; font-size: 12px; color: #999; }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="title">بطاقة تعريف مادة كيميائية</div>
            <div>نظام تسيير المخابر المدرسية</div>
          </div>
          <div class="details">
            <div class="item"><span class="label">PRODUIT CHIMIQUE:</span> ${t.nameEn}</div>
            <div class="item"><span class="label">الاسم العربي:</span> ${t.nameAr}</div>
            <div class="item"><span class="label">الصيغة الكيميائية:</span> ${t.formula}</div>
            <div class="item"><span class="label">رقم CAS:</span> ${t.casNumber||"غير متوفر"}</div>
            <div class="item"><span class="label">درجة التخزين:</span> ${t.storageTemp||"غير متوفر"}</div>
            <div class="item"><span class="label">الحالة:</span> ${t.state}</div>
            <div class="item"><span class="label">الكمية الحالية:</span> ${t.quantity} ${t.unit}</div>
            <div class="item"><span class="label">الرف:</span> ${t.shelf}</div>
            <div class="item"><span class="label">الصلاحية:</span> ${t.expiryDate||"غير محدد"}</div>
            <div class="item" style="grid-column: span 2;">
              <span class="label">رموز السلامة GHS:</span>
              <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
                ${(t.ghs||[]).map(s=>`
                  <div style="display: flex; flex-direction: column; align-items: center; border: 1px solid #ccc; padding: 5px; border-radius: 8px; width: 70px; background: #fff;">
                    <img src="${se[s]}" style="width: 40px; height: 40px;" />
                    <span style="font-size: 9px; margin-top: 4px; text-align: center; font-weight: bold;">${Ne[s]||s}</span>
                  </div>
                `).join("")}
              </div>
            </div>
            <div class="item"><span class="label">تصنيف الخطورة:</span> <span class="${t.hazardClass==="danger"?"hazard":""}">${t.hazardClass==="danger"?"خطر":"آمن"}</span></div>
            <div class="item" style="grid-column: span 2;"><span class="label">ملاحظات:</span> ${t.notes||"لا توجد"}</div>
          </div>
          <div class="footer">طبع بتاريخ: ${new Date().toLocaleString("ar-DZ")}</div>
          <script>window.print();<\/script>
        </body>
      </html>
    `),a.document.close())},r=t=>{let a="asc";v&&v.key===t&&v.direction==="asc"&&(a="desc"),Se({key:t,direction:a})},w=t=>{Y(a=>a.includes(t)?a.filter(s=>s!==t):[...a,t])},y=()=>{Q.length===V.length?Y([]):Y(V.map(t=>t.id))},Ye=async()=>{if(window.confirm(`هل أنت متأكد من حذف ${Q.length} مادة؟`))try{const t=rt(st);Q.forEach(a=>{t.delete(re(U(i,"chemicals"),a))}),await t.commit(),await He(i,Le.DELETE,Ge.CHEMICALS,`حذف جماعي لـ ${Q.length} مادة`),Y([]),alert("تم الحذف بنجاح!")}catch(t){Pe(t,ve.DELETE,"chemicals/bulk")}},V=p.filter(t=>{var o,h,l;const a=((o=t.nameEn)==null?void 0:o.toLowerCase().includes(c.toLowerCase()))||((h=t.nameAr)==null?void 0:h.toLowerCase().includes(c.toLowerCase()))||((l=t.formula)==null?void 0:l.toLowerCase().includes(c.toLowerCase())),s=!O||t.quantity<10;return a&&s}),ue=u.useMemo(()=>{const t=[...V];return v!==null&&t.sort((a,s)=>{const o=a[v.key],h=s[v.key];return o===void 0||h===void 0?0:o<h?v.direction==="asc"?-1:1:o>h?v.direction==="asc"?1:-1:0}),t},[V,v]),pt=t=>(v==null?void 0:v.key)===t?v.direction==="asc"?e.jsx(Ht,{size:14,className:"mr-1"}):e.jsx(wt,{size:14,className:"mr-1"}):e.jsx("div",{className:"w-[14px] mr-1"}),mt=p.filter(t=>t.quantity<10).length,tt=u.useRef(null),xt=It({count:ue.length,getScrollElement:()=>tt.current,estimateSize:()=>72,overscan:10});return{searchParams:S,chemicals:p,setChemicals:C,loading:n,setLoading:I,searchTerm:c,setSearchTerm:A,filterLowStock:O,setFilterLowStock:T,selectedChemical:g,setSelectedChemical:E,isAddModalOpen:W,setIsAddModalOpen:ne,editingChemical:K,setEditingChemical:ie,fileInputRef:Z,isImporting:H,setIsImporting:le,isGenerating:Re,setIsGenerating:B,isBulkUpdating:_e,setIsBulkUpdating:oe,isBulkConfirmOpen:ce,setIsBulkConfirmOpen:de,bulkProgress:Oe,setBulkProgress:J,selectedIds:Q,setSelectedIds:Y,suggestedUpdate:N,setSuggestedUpdate:pe,isReviewModalOpen:Fe,setIsReviewModalOpen:me,sortConfig:v,setSortConfig:Se,isQRScannerOpen:Me,setIsQRScannerOpen:Ue,formatDisplayDate:ee,newChemical:q,setNewChemical:$,handleAddChemical:te,handleSmartFill:he,handleRequestSmartUpdate:R,handleApproveUpdate:ze,handleBulkSmartUpdate:Qe,handleDeleteChemical:D,handlePrintList:Ce,handleExportPDF:De,handleExportXLS:Ae,handleImportXLS:Ee,handlePrintInventoryCards:d,handlePrint:b,handleSort:r,handleToggleSelect:w,handleSelectAll:y,handleBulkDelete:Ye,filteredChemicals:V,sortedChemicals:ue,getSortIcon:pt,lowStockCount:mt,parentRef:tt,rowVirtualizer:xt,chemicalsList:L,chemicalsLoading:xe,error:Be,schoolId:i,schoolName:x,stateName:j}}function ta({isNested:z=!1}){var Ce,De,Ae,Ee;const{chemicals:i,loading:x,searchTerm:j,setSearchTerm:S,filterLowStock:p,setFilterLowStock:C,selectedChemical:n,setSelectedChemical:I,isAddModalOpen:c,setIsAddModalOpen:A,editingChemical:O,setEditingChemical:T,fileInputRef:g,isImporting:E,isGenerating:W,isBulkUpdating:ne,isBulkConfirmOpen:K,setIsBulkConfirmOpen:ie,bulkProgress:Z,selectedIds:H,setSelectedIds:le,suggestedUpdate:Re,isReviewModalOpen:B,setIsReviewModalOpen:_e,isQRScannerOpen:oe,setIsQRScannerOpen:ce,formatDisplayDate:de,newChemical:Oe,setNewChemical:J,handleAddChemical:Q,handleSmartFill:Y,handleRequestSmartUpdate:N,handleApproveUpdate:pe,handleBulkSmartUpdate:Fe,handleDeleteChemical:me,handlePrintList:v,handleExportPDF:Se,handleExportXLS:Me,handleImportXLS:Ue,handlePrintInventoryCards:ee,handlePrint:q,handleSort:$,handleToggleSelect:L,handleSelectAll:xe,handleBulkDelete:Be,filteredChemicals:te,sortedChemicals:he,getSortIcon:R,lowStockCount:ze,parentRef:Qe,rowVirtualizer:D}=Mt(z);return e.jsxs("div",{className:k("space-y-10 max-w-7xl mx-auto pb-20",!z&&"px-4"),children:[!z&&e.jsxs("header",{className:"flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-4",children:[e.jsxs("div",{className:"text-right space-y-1",children:[e.jsx("h1",{className:"text-4xl font-black text-primary tracking-tighter",children:"المخزن الكيميائي"}),e.jsx("p",{className:"text-secondary/80 text-base font-medium",children:"إدارة وتتبع المحاليل والكواشف الكيميائية"})]}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx("input",{type:"file",ref:g,onChange:Ue,className:"hidden",accept:".xls,.xlsx"}),e.jsxs("button",{onClick:()=>ce(!0),className:"bg-surface text-secondary border border-outline/10 px-6 py-3.5 rounded-full flex items-center gap-2 font-bold hover:bg-surface-container-high transition-all active:scale-95 shadow-sm",children:[e.jsx(nt,{size:20}),"مسح QR"]}),e.jsxs("button",{onClick:v,className:"bg-surface text-secondary border border-outline/10 px-6 py-3.5 rounded-full flex items-center gap-2 font-bold hover:bg-surface-container-high transition-all active:scale-95 shadow-sm",children:[e.jsx(qe,{size:20}),"طباعة القائمة"]}),e.jsxs("button",{onClick:()=>ee(he),className:"bg-surface text-secondary border border-outline/10 px-6 py-3.5 rounded-full flex items-center gap-2 font-bold hover:bg-surface-container-high transition-all active:scale-95 shadow-sm",children:[e.jsx(qe,{size:20,className:"text-primary"}),"طباعة بطاقات المخزون"]}),e.jsxs("button",{onClick:Se,className:"bg-surface text-secondary border border-outline/10 px-6 py-3.5 rounded-full flex items-center gap-2 font-bold hover:bg-surface-container-high transition-all active:scale-95 shadow-sm",children:[e.jsx(it,{size:20}),"تصدير PDF"]}),e.jsxs("button",{onClick:()=>{var d;return(d=g.current)==null?void 0:d.click()},disabled:E,className:"bg-surface text-secondary border border-outline/10 px-6 py-3.5 rounded-full flex items-center gap-2 font-bold hover:bg-surface-container-high transition-all active:scale-95 shadow-sm disabled:opacity-50",children:[E?e.jsx("div",{className:"w-5 h-5 border-2 border-secondary/30 border-t-secondary rounded-full animate-spin"}):e.jsx(zt,{size:20}),"استيراد XLS"]}),e.jsxs("button",{onClick:Me,className:"bg-surface text-secondary border border-outline/10 px-6 py-3.5 rounded-full flex items-center gap-2 font-bold hover:bg-surface-container-high transition-all active:scale-95 shadow-sm",children:[e.jsx(ot,{size:20}),"تصدير الجرد"]}),e.jsxs("button",{onClick:()=>ie(!0),disabled:ne||i.length===0,className:"bg-primary text-on-primary px-6 py-3.5 rounded-full flex items-center gap-2 font-bold hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/20 disabled:opacity-50",title:"تحديث ذكي لجميع المواد في القائمة",children:[ne?e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"}),e.jsxs("span",{className:"text-xs",children:[Z.current,"/",Z.total]})]}):e.jsx(je,{size:20}),"تحديث ذكي للكل"]}),e.jsxs("button",{onClick:()=>A(!0),className:"bg-primary text-on-primary px-8 py-3.5 rounded-full flex items-center gap-2 font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95",children:[e.jsx(Lt,{size:20}),"إضافة مادة"]})]})]}),!z&&e.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[e.jsxs("div",{className:"bg-surface-container-low p-7 rounded-[32px] border border-outline/5 hover:border-outline/20 transition-all group",children:[e.jsx("p",{className:"text-xs text-secondary/60 font-black uppercase tracking-widest mb-3",children:"إجمالي المواد"}),e.jsx("h3",{className:"text-4xl font-black text-primary group-hover:scale-110 transition-transform origin-right",children:i.length})]}),e.jsxs("div",{className:"bg-error-container/40 p-7 rounded-[32px] border border-error/10 hover:border-error/20 transition-all group",children:[e.jsx("p",{className:"text-xs text-on-error-container/60 font-black uppercase tracking-widest mb-3",children:"مواد خطرة"}),e.jsx("h3",{className:"text-4xl font-black text-error group-hover:scale-110 transition-transform origin-right",children:i.filter(d=>d.ghs&&d.ghs.length>0||d.hazardClass==="danger").length})]}),e.jsxs("div",{className:"bg-tertiary-fixed/40 p-7 rounded-[32px] border border-tertiary/10 hover:border-tertiary/20 transition-all group",children:[e.jsx("p",{className:"text-xs text-on-tertiary-fixed/60 font-black uppercase tracking-widest mb-3",children:"تنتهي قريباً"}),e.jsx("h3",{className:"text-4xl font-black text-tertiary group-hover:scale-110 transition-transform origin-right",children:i.filter(d=>{if(!d.expiryDate)return!1;const b=new Date(d.expiryDate),r=new Date;return r.setMonth(r.getMonth()+3),b<r&&b>new Date}).length.toString().padStart(2,"0")})]}),e.jsxs("div",{className:"bg-primary p-7 rounded-[32px] text-on-primary shadow-xl shadow-primary/20 hover:shadow-2xl transition-all group relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-24 h-24 bg-surface/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700"}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("p",{className:"text-white/60 text-xs font-black uppercase tracking-widest mb-3",children:"سعة التخزين"}),e.jsx("h3",{className:"text-4xl font-black",children:"68%"})]})]})]}),ze>0&&e.jsxs(_.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"bg-error-container/30 backdrop-blur-sm text-on-error-container p-5 rounded-[32px] flex items-center justify-between border border-error/10 shadow-lg shadow-error/5",children:[e.jsxs("div",{className:"flex items-center gap-4 text-error",children:[e.jsx("div",{className:"bg-error p-3 rounded-2xl text-white shadow-lg shadow-error/20",children:e.jsx(Ct,{size:20})}),e.jsxs("span",{className:"font-black text-base",children:["تنبيه: يوجد ",ze," مواد منخفضة المخزون!"]})]}),e.jsx("button",{onClick:()=>C(!p),className:"text-sm font-black underline underline-offset-4 text-error px-6 py-2.5 hover:bg-error/10 rounded-full transition-all active:scale-95",children:p?"عرض الكل":"عرض المواد المنخفضة"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10",children:[e.jsx("div",{className:"lg:col-span-8 space-y-8",children:e.jsxs("div",{className:"bg-surface-container-lowest rounded-[32px] overflow-hidden border border-outline/10 shadow-sm",children:[e.jsxs("div",{className:"p-8 flex flex-col md:flex-row justify-between items-center gap-6 bg-surface-container-low/30 border-b border-outline/5",children:[e.jsxs("div",{className:"relative w-full md:w-80",children:[e.jsx(Dt,{className:"absolute right-4 top-1/2 -translate-y-1/2 text-outline/60",size:20}),e.jsx("input",{className:"w-full bg-surface-container-low border border-outline/10 rounded-full pr-12 pl-6 py-3 text-sm font-bold focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all",placeholder:"بحث عن مادة (اسم أو صيغة)...",value:j,onChange:d=>S(d.target.value)})]}),e.jsx("div",{className:"flex gap-3",children:e.jsx("button",{onClick:()=>C(!p),className:k("p-3 border rounded-full transition-all active:scale-90",p?"bg-primary text-on-primary border-primary shadow-lg shadow-primary/20":"bg-surface-container-low hover:bg-surface-container-high border-outline/10 text-secondary"),title:p?"عرض الكل":"تصفية المواد المنخفضة",children:e.jsx(Gt,{size:22})})})]}),e.jsx("div",{ref:Qe,className:"overflow-auto scrollbar-hide relative max-h-[700px] w-full",children:e.jsxs("table",{className:"w-full text-right border-collapse table-auto relative",children:[e.jsx("thead",{className:"sticky top-0 z-20 bg-surface-container-lowest",children:e.jsxs("tr",{className:"bg-surface-container-low/50 text-secondary/60 text-[11px] font-black uppercase tracking-widest",children:[e.jsx("th",{className:"px-3 py-5 text-right w-12",children:e.jsx("div",{onClick:xe,className:k("w-5 h-5 rounded border-2 cursor-pointer flex items-center justify-center transition-all",H.length===te.length&&te.length>0?"bg-primary border-primary text-white":"border-outline/30 hover:border-primary/50"),children:H.length===te.length&&te.length>0&&e.jsx(Je,{size:12})})}),e.jsx("th",{className:"px-3 py-5 text-right w-10",children:"#"}),e.jsx("th",{className:"px-3 py-5 text-right min-w-[140px] cursor-pointer hover:text-primary transition-colors",onClick:()=>$("nameEn"),children:e.jsxs("div",{className:"flex items-center",children:[R("nameEn"),"المادة (EN/AR)"]})}),e.jsx("th",{className:"px-3 py-5 text-right w-16 hidden sm:table-cell cursor-pointer hover:text-primary transition-colors",onClick:()=>$("formula"),children:e.jsxs("div",{className:"flex items-center",children:[R("formula"),"الصيغة"]})}),e.jsx("th",{className:"px-3 py-5 text-right w-20 cursor-pointer hover:text-primary transition-colors",onClick:()=>$("quantity"),children:e.jsxs("div",{className:"flex items-center",children:[R("quantity"),"الكمية"]})}),e.jsx("th",{className:"px-3 py-5 text-right w-14 hidden lg:table-cell cursor-pointer hover:text-primary transition-colors",onClick:()=>$("state"),children:e.jsxs("div",{className:"flex items-center",children:[R("state"),"الحالة"]})}),e.jsx("th",{className:"px-3 py-5 text-right w-18 cursor-pointer hover:text-primary transition-colors",onClick:()=>$("hazardClass"),children:e.jsxs("div",{className:"flex items-center",children:[R("hazardClass"),"الخطورة"]})}),e.jsx("th",{className:"px-3 py-5 text-right w-20 hidden xl:table-cell",children:"GHS"}),e.jsx("th",{className:"px-3 py-5 text-right w-14 hidden md:table-cell cursor-pointer hover:text-primary transition-colors",onClick:()=>$("shelf"),children:e.jsxs("div",{className:"flex items-center",children:[R("shelf"),"الرف"]})}),e.jsx("th",{className:"px-3 py-5 text-right w-24 cursor-pointer hover:text-primary transition-colors",onClick:()=>$("expiryDate"),children:e.jsxs("div",{className:"flex items-center",children:[R("expiryDate"),"الصلاحية"]})}),e.jsx("th",{className:"px-3 py-5 text-right hidden 2xl:table-cell",children:"ملاحظات"}),e.jsx("th",{className:"px-3 py-5 text-center w-24",children:"إجراءات"})]})}),e.jsx("tbody",{className:"divide-y divide-outline/5 relative w-full",children:x?e.jsx("tr",{children:e.jsx("td",{colSpan:12,className:"px-8 py-20 text-center text-outline/60 font-bold",children:"جاري التحميل..."})}):he.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:12,className:"px-8 py-20 text-center text-outline/60 font-bold",children:"لا توجد مواد مطابقة للبحث"})}):e.jsxs(e.Fragment,{children:[D.getVirtualItems().length>0&&D.getVirtualItems()[0].start>0&&e.jsx("tr",{children:e.jsx("td",{style:{padding:0,height:`${D.getVirtualItems()[0].start}px`},colSpan:12})}),D.getVirtualItems().map(d=>{var w;const b=d.index,r=he[b];return e.jsxs("tr",{onClick:()=>I(r),ref:D.measureElement,"data-index":b,className:k("hover:bg-surface-container-low/40 transition-all group cursor-pointer text-base",(n==null?void 0:n.id)===r.id&&"bg-surface-container-low/60 border-r-4 border-primary"),children:[e.jsx("td",{className:"px-3 py-4",children:e.jsx("div",{onClick:y=>{y.stopPropagation(),L(r.id)},className:k("w-5 h-5 rounded border-2 cursor-pointer flex items-center justify-center transition-all",H.includes(r.id)?"bg-primary border-primary text-white scale-110":"border-outline/30 group-hover:border-primary/50"),children:H.includes(r.id)&&e.jsx(Je,{size:12})})}),e.jsx("td",{className:"px-3 py-4 font-bold text-secondary/60",children:b+1}),e.jsx("td",{className:"px-3 py-4",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"font-black text-primary break-words leading-tight",children:r.nameEn}),e.jsx("span",{className:"text-xs text-secondary/60 break-words mt-0.5",children:r.nameAr})]})}),e.jsx("td",{className:"px-3 py-4 font-mono font-bold text-secondary/80 hidden sm:table-cell text-xs",children:r.formula}),e.jsxs("td",{className:"px-3 py-4 font-black text-primary whitespace-nowrap",children:[r.quantity," ",e.jsx("span",{className:"text-[10px] text-secondary/60",children:r.unit})]}),e.jsx("td",{className:"px-3 py-4 font-bold text-secondary/80 hidden lg:table-cell text-xs",children:r.state==="solid"?"صلب":r.state==="liquid"?"سائل":"غاز"}),e.jsx("td",{className:"px-3 py-4",children:e.jsx("span",{className:k("px-2 py-0.5 rounded-full text-[10px] font-black shadow-sm",r.hazardClass==="danger"?"bg-error-container text-on-error-container":"bg-primary-fixed/40 text-primary"),children:r.hazardClass==="danger"?"خطر":"آمن"})}),e.jsx("td",{className:"px-3 py-4 hidden xl:table-cell",children:e.jsxs("div",{className:"flex gap-1.5",children:[(w=r.ghs)==null?void 0:w.slice(0,3).map((y,Ye)=>e.jsxs("div",{className:"w-9 h-9 bg-surface rounded-lg flex items-center justify-center border border-outline/20 p-1 shadow-sm hover:scale-125 transition-transform z-10 relative group/ghs",title:Ne[y]||y,children:[se[y]?e.jsx("img",{src:se[y],alt:y,className:"w-full h-full object-contain",referrerPolicy:"no-referrer"}):e.jsx("span",{className:"text-[8px] font-black",children:y}),e.jsx("div",{className:"absolute bottom-full mb-2 hidden group-hover/ghs:block bg-secondary text-white text-[10px] px-2 py-1 rounded whitespace-nowrap z-50 pointer-events-none shadow-xl",children:Ne[y]||y})]},Ye)),r.ghs&&r.ghs.length>3&&e.jsxs("span",{className:"text-[10px] text-secondary/40 self-center font-bold",children:["+",r.ghs.length-3]})]})}),e.jsx("td",{className:"px-3 py-4 font-bold text-primary hidden md:table-cell text-xs",children:r.shelf}),e.jsx("td",{className:"px-3 py-4",children:e.jsxs("span",{className:k("font-bold whitespace-nowrap text-xs",r.expiryDate&&new Date(r.expiryDate)<new Date?"text-error flex items-center gap-1":"text-secondary/80"),children:[de(r.expiryDate),r.expiryDate&&new Date(r.expiryDate)<new Date&&e.jsx(Ze,{size:14})]})}),e.jsx("td",{className:"px-3 py-4 text-xs text-secondary/60 hidden 2xl:table-cell min-w-[200px] leading-relaxed break-words",children:r.notes}),e.jsx("td",{className:"px-3 py-4 text-center",children:e.jsxs("div",{className:"flex gap-1 justify-center",children:[e.jsx("button",{onClick:y=>{y.stopPropagation(),N(r)},disabled:W,className:"p-1.5 text-outline/40 hover:text-primary hover:bg-primary/10 transition-all rounded-full active:scale-90",title:"تحديث ذكي",children:e.jsx(je,{size:16})}),e.jsx("button",{onClick:y=>{y.stopPropagation(),T(r),J({nameEn:r.nameEn,nameAr:r.nameAr,formula:r.formula,casNumber:r.casNumber||"",storageTemp:r.storageTemp||"",unit:r.unit,quantity:r.quantity,state:r.state,hazardClass:r.hazardClass,ghs:r.ghs,shelf:r.shelf,expiryDate:r.expiryDate,notes:r.notes}),A(!0)},className:"p-1.5 text-outline/40 hover:text-primary hover:bg-primary/10 transition-all rounded-full active:scale-90",title:"تعديل",children:e.jsx(Pt,{size:16})}),e.jsx("button",{onClick:y=>{y.stopPropagation(),me(r.id,r.nameAr)},className:"p-1.5 text-outline/40 hover:text-error hover:bg-error/10 transition-all rounded-full active:scale-90",title:"حذف",children:e.jsx(lt,{size:16})})]})})]},r.id)}),D.getVirtualItems().length>0&&D.getTotalSize()-(((De=(Ce=D.getVirtualItems())==null?void 0:Ce.at(-1))==null?void 0:De.end)||0)>0&&e.jsx("tr",{children:e.jsx("td",{style:{padding:0,height:`${D.getTotalSize()-(((Ee=(Ae=D.getVirtualItems())==null?void 0:Ae.at(-1))==null?void 0:Ee.end)||0)}px`},colSpan:12})})]})})]})})]})}),e.jsxs("div",{className:"lg:col-span-4 space-y-8",children:[n?e.jsxs(_.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},className:"bg-surface-container-lowest rounded-[32px] p-10 relative overflow-hidden border border-outline/10 shadow-sm",children:[e.jsx("div",{className:"absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-[120px] -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"}),e.jsxs("div",{className:"relative z-10 space-y-8",children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsx("span",{className:k("text-[11px] px-4 py-1.5 rounded-[28px_28px_4px_28px] font-black uppercase tracking-widest shadow-sm",n.hazardClass==="danger"?"bg-error-container text-on-error-container":"bg-tertiary-fixed/60 text-tertiary"),children:n.hazardClass==="danger"?"مادة خطرة":"مادة آمنة"}),n.hazardClass==="danger"&&e.jsx("div",{className:"flex gap-2 text-error animate-pulse",children:e.jsx(Ze,{size:28})})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl font-black text-primary mb-1 tracking-tight",children:n.nameEn}),e.jsx("h3",{className:"text-xl font-bold text-secondary mb-2 tracking-tight",children:n.nameAr}),e.jsx("p",{className:"text-lg font-mono font-bold text-secondary/60",children:n.formula})]}),e.jsxs("div",{className:"space-y-5 pt-8 border-t border-outline/5",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-base font-bold text-secondary/60 uppercase tracking-widest",children:"رقم CAS"}),e.jsx("span",{className:"font-black text-primary text-lg",children:n.casNumber||"غير متوفر"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-base font-bold text-secondary/60 uppercase tracking-widest",children:"درجة التخزين"}),e.jsx("span",{className:"font-black text-primary text-lg",children:n.storageTemp||"غير متوفر"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-base font-bold text-secondary/60 uppercase tracking-widest",children:"الحالة"}),e.jsx("span",{className:"font-black text-primary text-lg",children:n.state==="solid"?"صلب":n.state==="liquid"?"سائل":"غاز"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-base font-bold text-secondary/60 uppercase tracking-widest",children:"الرف"}),e.jsx("span",{className:"font-black text-primary text-lg",children:n.shelf})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-base font-bold text-secondary/60 uppercase tracking-widest",children:"الصلاحية"}),e.jsx("span",{className:k("font-black text-lg",n.expiryDate&&new Date(n.expiryDate)<new Date?"text-error":"text-primary"),children:de(n.expiryDate)})]}),e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsx("span",{className:"text-base font-bold text-secondary/60 uppercase tracking-widest",children:"ملاحظات"}),e.jsx("span",{className:"font-black text-primary text-sm text-left flex-1 mr-4 leading-relaxed break-words",children:n.notes||"لا توجد"})]}),n.ghs&&n.ghs.length>0&&e.jsxs("div",{className:"pt-6 border-t border-outline/5",children:[e.jsx("span",{className:"text-[11px] font-black text-secondary/40 uppercase tracking-[0.2em] block mb-4",children:"رموز السلامة GHS"}),e.jsx("div",{className:"grid grid-cols-3 gap-4",children:n.ghs.map((d,b)=>e.jsxs("div",{className:"bg-surface p-3 rounded-2xl border border-outline/10 shadow-md hover:shadow-lg hover:border-primary/30 transition-all flex flex-col items-center gap-2 group/card",children:[e.jsx("div",{className:"w-16 h-16 flex items-center justify-center group-hover/card:scale-110 transition-transform",children:se[d]?e.jsx("img",{src:se[d],alt:d,className:"w-full h-full object-contain",referrerPolicy:"no-referrer"}):e.jsx("div",{className:"w-full h-full flex items-center justify-center text-xs font-black bg-surface-container-high rounded-xl",children:d})}),e.jsx("span",{className:"text-[10px] font-black text-secondary text-center leading-tight",children:Ne[d]||d})]},b))})]}),e.jsxs("div",{className:"space-y-3 pt-2",children:[e.jsxs("div",{className:"flex justify-between items-end",children:[e.jsx("span",{className:"text-sm font-black text-primary uppercase tracking-widest",children:"مستوى المخزون"}),e.jsxs("span",{className:"text-2xl font-black text-primary",children:[n.quantity," ",e.jsx("span",{className:"text-sm text-secondary/60",children:n.unit})]})]}),e.jsx("div",{className:"h-3 w-full bg-surface-container rounded-full overflow-hidden border border-outline/5 shadow-inner",children:e.jsx("div",{className:"h-full bg-primary rounded-full shadow-sm",style:{width:"70%"}})})]})]}),e.jsxs("div",{className:"flex gap-3 pt-4",children:[e.jsx("button",{onClick:()=>q(n),className:"p-3 bg-surface-container-low hover:bg-surface-container-high border border-outline/10 rounded-full text-primary transition-all active:scale-90",title:"طباعة تعريفية",children:e.jsx(qe,{size:22})}),e.jsx("button",{onClick:()=>ee([n]),className:"p-3 bg-surface-container-low hover:bg-surface-container-high border border-outline/10 rounded-full text-primary transition-all active:scale-90",title:"طباعة بطاقة المخزون",children:e.jsx(it,{size:22})}),e.jsx("button",{onClick:()=>N(),disabled:W,className:"p-3 bg-primary-container hover:bg-primary/20 border border-primary/10 rounded-full text-primary transition-all active:scale-90 disabled:opacity-50",title:"تحديث ذكي للمعلومات",children:W?e.jsx("div",{className:"w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin"}):e.jsx(je,{size:22})}),e.jsx("button",{className:"p-3 bg-surface-container-low hover:bg-surface-container-high border border-outline/10 rounded-full text-primary transition-all active:scale-90",title:"توليد رمز QR",children:e.jsx(nt,{size:22})})]})]})]},n.id):e.jsx("div",{className:"bg-surface-container-lowest rounded-[32px] p-12 text-center text-outline/60 font-bold border border-outline/10 border-dashed",children:"اختر مادة من القائمة لعرض تفاصيلها المخبرية"}),e.jsxs("div",{className:"bg-primary-container/30 backdrop-blur-sm p-8 rounded-[32px] text-on-primary-container border border-primary/10 relative overflow-hidden group shadow-sm",children:[e.jsxs("div",{className:"relative z-10",children:[e.jsxs("h4",{className:"font-black text-lg mb-3 flex items-center gap-2 text-primary",children:[e.jsx(At,{size:20}),"تعليمات السلامة"]}),e.jsx("p",{className:"text-sm font-medium text-primary/80 leading-relaxed",children:(n==null?void 0:n.hazardClass)==="danger"?"يجب ارتداء القفازات والنظارات الواقية عند التعامل مع هذه المادة. يحفظ في مكان بارد وجيد التهوية بعيداً عن مصادر الحرارة.":"يرجى اتباع بروتوكولات المختبر القياسية عند التعامل مع هذه المادة لضمان سلامتك وسلامة الزملاء."})]}),e.jsx(Ze,{className:"absolute -bottom-6 -left-6 text-primary/5 w-32 h-32 rotate-12 group-hover:rotate-0 transition-transform duration-700"})]})]})]}),e.jsx(ke,{children:H.length>0&&e.jsxs(_.div,{initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:100,opacity:0},className:"fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-secondary text-white px-8 py-5 rounded-[32px] shadow-2xl flex items-center gap-10 min-w-[500px]",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("span",{className:"text-sm font-black",children:[H.length," مادة مختارة"]}),e.jsx("span",{className:"text-[10px] text-white/60 font-bold",children:"يمكنك إجراء عمليات جماعية على هذه المواد"})]}),e.jsx("div",{className:"h-10 w-px bg-surface/10"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("button",{onClick:Be,className:"flex items-center gap-2 px-6 py-2.5 rounded-full bg-error/20 text-error-container hover:bg-error hover:text-white transition-all font-black text-sm",children:[e.jsx(lt,{size:18}),"حذف المختار"]}),e.jsxs("button",{className:"flex items-center gap-2 px-6 py-2.5 rounded-full bg-surface/10 hover:bg-surface/20 transition-all font-black text-sm",onClick:()=>{const d=i.filter(w=>H.includes(w.id)),b=X.json_to_sheet(d.map(w=>({Chemical:w.nameEn,Arabic:w.nameAr,Formula:w.formula,Qty:w.quantity,Unit:w.unit}))),r=X.book_new();X.book_append_sheet(r,b,"SelectedItems"),dt(r,`selected_chemicals_${new Date().getTime()}.xlsx`)},children:[e.jsx(ot,{size:18}),"تصدير المختار"]}),e.jsxs("button",{onClick:()=>{const d=i.filter(b=>H.includes(b.id));ee(d)},className:"flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary/20 text-primary-container hover:bg-primary hover:text-white transition-all font-black text-sm",children:[e.jsx(qe,{size:18}),"بطاقات المختار"]}),e.jsx("button",{onClick:()=>le([]),className:"p-2.5 hover:bg-surface/10 rounded-full transition-all",children:e.jsx(et,{size:20})})]})]})}),e.jsx(Rt,{isOpen:c,onClose:()=>A(!1),onSubmit:Q,onSmartFill:Y,isGenerating:W,newChemical:Oe,editingChemical:O,onChange:(d,b)=>J(r=>({...r,[d]:b}))}),e.jsx(_t,{isOpen:K,chemicalsLength:i.length,onClose:()=>ie(!1),onConfirm:Fe}),e.jsx(Ot,{isOpen:B,suggestedUpdate:Re,selectedChemical:n,onClose:()=>_e(!1),onApprove:pe}),e.jsx(ke,{children:oe&&e.jsx(Et,{onClose:()=>ce(!1),onScan:d=>{ce(!1);let b=d;d.startsWith("APP_ID_")&&(b=d.split("_").slice(2,-1).join("_")),S(b);const r=i.find(w=>w.id===b||w.id===d);r?(I(r),T(r),A(!0)):alert("عذراً، لم يتم العثور على المادة بهذه الشيفرة.")}})})]})}export{ta as default};
