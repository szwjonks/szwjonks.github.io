import{a as l}from"./index-LhTk3wao.js";const s={dark:{type:Boolean,default:null}};function r(a,t){return l(()=>a.dark===null?t.dark.isActive:a.dark)}let e=[],n=[];function u(a){n=n.filter(t=>t!==a)}function i(a){u(a),n.push(a)}function c(a){u(a),n.length===0&&e.length!==0&&(e[e.length-1](),e=[])}function d(a){n.length===0?a():e.push(a)}function f(a){e=e.filter(t=>t!==a)}export{r as a,i as b,d as c,f as d,c as r,s as u};
