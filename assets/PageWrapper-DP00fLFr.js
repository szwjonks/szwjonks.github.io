import{c as p,e as s,f as t,a as c,h as f,j as g,k as h,g as d,_ as y,D as m,E as _,F as v,a3 as x}from"./index-LhTk3wao.js";import{h as C}from"./QBtn-CHLTg2Np.js";const P=p({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:o}){const{proxy:{$q:r}}=d(),e=s(g,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(s(h,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const i=c(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const u=e.isContainer.value===!0?e.containerHeight.value:r.screen.height;return n.styleFn(a,u)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":r.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":r.screen.height-a+"px"}}),l=c(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>f("main",{class:l.value,style:i.value},C(o.default))}}),$={};function F(n,o){return m(),_(P,{class:"column items-center justify-evenly q-pa-xl text-center"},{default:v(()=>[x(n.$slots,"default")]),_:3})}const k=y($,[["render",F],["__file","PageWrapper.vue"]]);export{k as P};