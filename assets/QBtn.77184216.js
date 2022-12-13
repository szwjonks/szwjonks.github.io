import{c as o,h as v,g as V,M as N,O as ce,Q as de,G as ae,S as fe,r as U,a as ve,U as ge,B as me,L as P,N as be,l as he}from"./index.667972fd.js";import{c as F,h as ye,b as z,j as ke,d as pe}from"./dom.44fcd101.js";const Q={xs:18,sm:24,md:32,lg:38,xl:46},re={size:String};function ie(e,t=Q){return o(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const H="0 0 24 24",W=e=>e,D=e=>`ionicons ${e}`,le={"mdi-":e=>`mdi ${e}`,"icon-":W,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":D,"ion-ios":D,"ion-logo":D,"iconfont ":W,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},ue={o_:"-outlined",r_:"-round",s_:"-sharp"},se={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},xe=new RegExp("^("+Object.keys(le).join("|")+")"),qe=new RegExp("^("+Object.keys(ue).join("|")+")"),X=new RegExp("^("+Object.keys(se).join("|")+")"),$e=/^[Mm]\s?[-+]?\.?\d/,Ee=/^img:/,Se=/^svguse:/,we=/^ion-/,Re=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var G=F({name:"QIcon",props:{...re,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:r}}=V(),n=ie(e),u=o(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),d=o(()=>{let c,a=e.name;if(a==="none"||!a)return{none:!0};if(r.iconMapFn!==null){const s=r.iconMapFn(a);if(s!==void 0)if(s.icon!==void 0){if(a=s.icon,a==="none"||!a)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if($e.test(a)===!0){const[s,y=H]=a.split("|");return{svg:!0,viewBox:y,nodes:s.split("&&").map(l=>{const[k,b,p]=l.split("@@");return v("path",{style:b,d:k,transform:p})})}}if(Ee.test(a)===!0)return{img:!0,src:a.substring(4)};if(Se.test(a)===!0){const[s,y=H]=a.split("|");return{svguse:!0,src:s.substring(7),viewBox:y}}let q=" ";const h=a.match(xe);if(h!==null)c=le[h[1]](a);else if(Re.test(a)===!0)c=a;else if(we.test(a)===!0)c=`ionicons ion-${r.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(X.test(a)===!0){c="notranslate material-symbols";const s=a.match(X);s!==null&&(a=a.substring(6),c+=se[s[1]]),q=a}else{c="notranslate material-icons";const s=a.match(qe);s!==null&&(a=a.substring(2),c+=ue[s[1]]),q=a}return{cls:c,content:q}});return()=>{const c={class:u.value,style:n.value,"aria-hidden":"true",role:"presentation"};return d.value.none===!0?v(e.tag,c,ye(t.default)):d.value.img===!0?v("span",c,z(t.default,[v("img",{src:d.value.src})])):d.value.svg===!0?v("span",c,z(t.default,[v("svg",{viewBox:d.value.viewBox||"0 0 24 24"},d.value.nodes)])):d.value.svguse===!0?v("span",c,z(t.default,[v("svg",{viewBox:d.value.viewBox},[v("use",{"xlink:href":d.value.src})])])):(d.value.cls!==void 0&&(c.class+=" "+d.value.cls),v(e.tag,c,z(t.default,[d.value.content])))}}});const Le={size:{type:[Number,String],default:"1em"},color:String};function Be(e){return{cSize:o(()=>e.size in Q?`${Q[e.size]}px`:e.size),classes:o(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Ce=F({name:"QSpinner",props:{...Le,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:r}=Be(e);return()=>v("svg",{class:r.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function _e(e,t=250){let r=!1,n;return function(){return r===!1&&(r=!0,setTimeout(()=>{r=!1},t),n=e.apply(this,arguments)),n}}function Y(e,t,r,n){r.modifiers.stop===!0&&ae(e);const u=r.modifiers.color;let d=r.modifiers.center;d=d===!0||n===!0;const c=document.createElement("span"),a=document.createElement("span"),q=fe(e),{left:h,top:s,width:y,height:l}=t.getBoundingClientRect(),k=Math.sqrt(y*y+l*l),b=k/2,p=`${(y-k)/2}px`,f=d?p:`${q.left-h-b}px`,x=`${(l-k)/2}px`,_=d?x:`${q.top-s-b}px`;a.className="q-ripple__inner",pe(a,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${f},${_},0) scale3d(.2,.2,1)`,opacity:0}),c.className=`q-ripple${u?" text-"+u:""}`,c.setAttribute("dir","ltr"),c.appendChild(a),t.appendChild(c);const B=()=>{c.remove(),clearTimeout(C)};r.abort.push(B);let C=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${p},${x},0) scale3d(1,1,1)`,a.style.opacity=.2,C=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,C=setTimeout(()=>{c.remove(),r.abort.splice(r.abort.indexOf(B),1)},275)},250)},50)}function J(e,{modifiers:t,value:r,arg:n}){const u=Object.assign({},e.cfg.ripple,t,r);e.modifiers={early:u.early===!0,stop:u.stop===!0,center:u.center===!0,color:u.color||n,keyCodes:[].concat(u.keyCodes||13)}}var Pe=ke({name:"ripple",beforeMount(e,t){const r=t.instance.$.appContext.config.globalProperties.$q.config||{};if(r.ripple===!1)return;const n={cfg:r,enabled:t.value!==!1,modifiers:{},abort:[],start(u){n.enabled===!0&&u.qSkipRipple!==!0&&u.type===(n.modifiers.early===!0?"pointerdown":"click")&&Y(u,e,n,u.qKeyEvent===!0)},keystart:_e(u=>{n.enabled===!0&&u.qSkipRipple!==!0&&N(u,n.modifiers.keyCodes)===!0&&u.type===`key${n.modifiers.early===!0?"down":"up"}`&&Y(u,e,n,!0)},300)};J(n,t),e.__qripple=n,ce(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const r=e.__qripple;r!==void 0&&(r.enabled=t.value!==!1,r.enabled===!0&&Object(t.value)===t.value&&J(r,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(r=>{r()}),de(t,"main"),delete e._qripple)}});const oe={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Oe=Object.keys(oe),Te={align:{type:String,validator:e=>Oe.includes(e)}};function je(e){return o(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${oe[t]}`})}function Ye(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function Ae(e){return e.appContext.config.globalProperties.$router!==void 0}function Je(e){return e.isUnmounted===!0||e.isDeactivated===!0}function Z(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function ee(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Me(e,t){for(const r in t){const n=t[r],u=e[r];if(typeof n=="string"){if(n!==u)return!1}else if(Array.isArray(u)===!1||u.length!==n.length||n.some((d,c)=>d!==u[c]))return!1}return!0}function te(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((r,n)=>r===t[n]):e.length===1&&e[0]===t}function ze(e,t){return Array.isArray(e)===!0?te(e,t):Array.isArray(t)===!0?te(t,e):e===t}function Ke(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(ze(e[r],t[r])===!1)return!1;return!0}const Ie={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function De({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const r=V(),{props:n,proxy:u,emit:d}=r,c=Ae(r),a=o(()=>n.disable!==!0&&n.href!==void 0),q=t===!0?o(()=>c===!0&&n.disable!==!0&&a.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):o(()=>c===!0&&a.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),h=o(()=>q.value===!0?_(n.to):null),s=o(()=>h.value!==null),y=o(()=>a.value===!0||s.value===!0),l=o(()=>n.type==="a"||y.value===!0?"a":n.tag||e||"div"),k=o(()=>a.value===!0?{href:n.href,target:n.target}:s.value===!0?{href:h.value.href,target:n.target}:{}),b=o(()=>{if(s.value===!1)return-1;const{matched:g}=h.value,{length:$}=g,S=g[$-1];if(S===void 0)return-1;const R=u.$route.matched;if(R.length===0)return-1;const L=R.findIndex(ee.bind(null,S));if(L>-1)return L;const K=Z(g[$-2]);return $>1&&Z(S)===K&&R[R.length-1].path!==K?R.findIndex(ee.bind(null,g[$-2])):L}),p=o(()=>s.value===!0&&b.value!==-1&&Me(u.$route.params,h.value.params)),f=o(()=>p.value===!0&&b.value===u.$route.matched.length-1&&Ke(u.$route.params,h.value.params)),x=o(()=>s.value===!0?f.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function _(g){try{return u.$router.resolve(g)}catch{}return null}function B(g,{returnRouterError:$,to:S=n.to,replace:R=n.replace}={}){if(n.disable===!0)return g.preventDefault(),Promise.resolve(!1);if(g.metaKey||g.altKey||g.ctrlKey||g.shiftKey||g.button!==void 0&&g.button!==0||n.target==="_blank")return Promise.resolve(!1);g.preventDefault();const L=u.$router[R===!0?"replace":"push"](S);return $===!0?L:L.then(()=>{}).catch(()=>{})}function C(g){if(s.value===!0){const $=S=>B(g,S);d("click",g,$),g.defaultPrevented!==!0&&$()}else d("click",g)}return{hasRouterLink:s,hasHrefLink:a,hasLink:y,linkTag:l,resolvedLink:h,linkIsActive:p,linkIsExactActive:f,linkClass:x,linkAttrs:k,getLink:_,navigateToRouterLink:B,navigateOnClick:C}}const ne={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Ne={xs:8,sm:10,md:14,lg:20,xl:24},Qe=["button","submit","reset"],Ve=/[^\s]\/[^\s]/,Fe=["flat","outline","push","unelevated"],Ue=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,He={...re,...Ie,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Fe.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Te.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function We(e){const t=ie(e,Ne),r=je(e),{hasRouterLink:n,hasLink:u,linkTag:d,linkAttrs:c,navigateOnClick:a}=De({fallbackTag:"button"}),q=o(()=>{const f=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},f,{padding:e.padding.split(/\s+/).map(x=>x in ne?ne[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):f}),h=o(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),s=o(()=>e.disable!==!0&&e.loading!==!0),y=o(()=>s.value===!0?e.tabindex||0:-1),l=o(()=>Ue(e,"standard")),k=o(()=>{const f={tabindex:y.value};return u.value===!0?Object.assign(f,c.value):Qe.includes(e.type)===!0&&(f.type=e.type),d.value==="a"?(e.disable===!0?f["aria-disabled"]="true":f.href===void 0&&(f.role="button"),n.value!==!0&&Ve.test(e.type)===!0&&(f.type=e.type)):e.disable===!0&&(f.disabled="",f["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(f,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),f}),b=o(()=>{let f;e.color!==void 0?e.flat===!0||e.outline===!0?f=`text-${e.textColor||e.color}`:f=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(f=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${l.value} q-btn--${x}`+(f!==void 0?" "+f:"")+(s.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=o(()=>r.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:b,style:q,innerClasses:p,attributes:k,hasLink:u,linkTag:d,navigateOnClick:a,isActionable:s}}const{passiveCapture:E}=he;let O=null,T=null,j=null;var Ze=F({name:"QBtn",props:{...He,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:r}){const{proxy:n}=V(),{classes:u,style:d,innerClasses:c,attributes:a,hasLink:q,linkTag:h,navigateOnClick:s,isActionable:y}=We(e),l=U(null),k=U(null);let b=null,p,f;const x=o(()=>e.label!==void 0&&e.label!==null&&e.label!==""),_=o(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),B=o(()=>({center:e.round})),C=o(()=>{const i=Math.max(0,Math.min(100,e.percentage));return i>0?{transition:"transform 0.6s",transform:`translateX(${i-100}%)`}:{}}),g=o(()=>{if(e.loading===!0)return{onMousedown:M,onTouchstart:M,onClick:M,onKeydown:M,onKeyup:M};if(y.value===!0){const i={onClick:S,onKeydown:R,onMousedown:K};if(n.$q.platform.has.touch===!0){const m=e.onTouchstart!==void 0?"":"Passive";i[`onTouchstart${m}`]=L}return i}return{onClick:P}}),$=o(()=>({ref:l,class:"q-btn q-btn-item non-selectable no-outline "+u.value,style:d.value,...a.value,...g.value}));function S(i){if(l.value!==null){if(i!==void 0){if(i.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&l.value.contains(m)===!1&&m.contains(l.value)===!1){l.value.focus();const I=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",I,E),l.value!==null&&l.value.removeEventListener("blur",I,E)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",I,E),l.value.addEventListener("blur",I,E)}}s(i)}}function R(i){l.value!==null&&(r("keydown",i),N(i,[13,32])===!0&&T!==l.value&&(T!==null&&A(),i.defaultPrevented!==!0&&(l.value.focus(),T=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("keyup",w,!0),l.value.addEventListener("blur",w,E)),P(i)))}function L(i){l.value!==null&&(r("touchstart",i),i.defaultPrevented!==!0&&(O!==l.value&&(O!==null&&A(),O=l.value,b=i.target,b.addEventListener("touchcancel",w,E),b.addEventListener("touchend",w,E)),p=!0,clearTimeout(f),f=setTimeout(()=>{p=!1},200)))}function K(i){l.value!==null&&(i.qSkipRipple=p===!0,r("mousedown",i),i.defaultPrevented!==!0&&j!==l.value&&(j!==null&&A(),j=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("mouseup",w,E)))}function w(i){if(l.value!==null&&!(i!==void 0&&i.type==="blur"&&document.activeElement===l.value)){if(i!==void 0&&i.type==="keyup"){if(T===l.value&&N(i,[13,32])===!0){const m=new MouseEvent("click",i);m.qKeyEvent=!0,i.defaultPrevented===!0&&be(m),i.cancelBubble===!0&&ae(m),l.value.dispatchEvent(m),P(i),i.qKeyEvent=!0}r("keyup",i)}A()}}function A(i){const m=k.value;i!==!0&&(O===l.value||j===l.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),O===l.value&&(b!==null&&(b.removeEventListener("touchcancel",w,E),b.removeEventListener("touchend",w,E)),O=b=null),j===l.value&&(document.removeEventListener("mouseup",w,E),j=null),T===l.value&&(document.removeEventListener("keyup",w,!0),l.value!==null&&l.value.removeEventListener("blur",w,E),T=null),l.value!==null&&l.value.classList.remove("q-btn--active")}function M(i){P(i),i.qSkipRipple=!0}return ve(()=>{A(!0)}),Object.assign(n,{click:S}),()=>{let i=[];e.icon!==void 0&&i.push(v(G,{name:e.icon,left:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&i.push(v("span",{class:"block"},[e.label])),i=z(t.default,i),e.iconRight!==void 0&&e.round===!1&&i.push(v(G,{name:e.iconRight,right:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"}));const m=[v("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&m.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:C.value})])),m.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+c.value},i)),e.loading!==null&&m.push(v(ge,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[v(Ce)])]:null)),me(v(h.value,$.value,m),[[Pe,_.value,void 0,B.value]])}}});export{G as Q,Pe as R,ie as a,Ie as b,De as c,Je as d,Ze as e,Ce as f,Ye as g,re as u,Ae as v};
