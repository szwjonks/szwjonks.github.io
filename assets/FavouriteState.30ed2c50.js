import{c,w as R,o as Se,a as ne,e as Ae,g as D,a6 as Re,r as C,H as Be,F as Pe,X as Ee,L as X,d as je,J as Ne,K as Te,i as De,h as s,N as j,U as Ue,a7 as E,C as Me,a8 as Qe,a9 as Le,aa as ze,A as He,t as We,u as Je}from"./index.667972fd.js";import{Q as Y,f as Ke,a as Ze,u as Ge}from"./QBtn.77184216.js";import{h as N,c as Oe,b as Xe}from"./dom.44fcd101.js";import{api as xe}from"./axios.c23bf210.js";const Ce={dark:{type:Boolean,default:null}};function qe(e,t){return c(()=>e.dark===null?t.dark.isActive:e.dark)}function Ye({validate:e,resetValidation:t,requiresQForm:r}){const o=Ae(Re,!1);if(o!==!1){const{props:u,proxy:i}=D();Object.assign(i,{validate:e,resetValidation:t}),R(()=>u.disable,l=>{l===!0?(typeof t=="function"&&t(),o.unbindComponent(i)):o.bindComponent(i)}),Se(()=>{u.disable!==!0&&o.bindComponent(i)}),ne(()=>{u.disable!==!0&&o.unbindComponent(i)})}else r===!0&&console.error("Parent QForm not found on useFormChild()!")}const ie=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,se=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ce=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,H=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,W=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,Z={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>ie.test(e),hexaColor:e=>se.test(e),hexOrHexaColor:e=>ce.test(e),rgbColor:e=>H.test(e),rgbaColor:e=>W.test(e),rgbOrRgbaColor:e=>H.test(e)||W.test(e),hexOrRgbColor:e=>ie.test(e)||H.test(e),hexaOrRgbaColor:e=>se.test(e)||W.test(e),anyColor:e=>ce.test(e)||H.test(e)||W.test(e)},et=[!0,!1,"ondemand"],tt={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>et.includes(e)}};function rt(e,t){const{props:r,proxy:o}=D(),u=C(!1),i=C(null),l=C(null);Ye({validate:m,resetValidation:q});let b=0,h;const S=c(()=>r.rules!==void 0&&r.rules!==null&&r.rules.length>0),p=c(()=>r.disable!==!0&&S.value===!0),O=c(()=>r.error===!0||u.value===!0),x=c(()=>typeof r.errorMessage=="string"&&r.errorMessage.length>0?r.errorMessage:i.value);R(()=>r.modelValue,()=>{y()}),R(()=>r.reactiveRules,_=>{_===!0?h===void 0&&(h=R(()=>r.rules,()=>{y(!0)})):h!==void 0&&(h(),h=void 0)},{immediate:!0}),R(e,_=>{_===!0?l.value===null&&(l.value=!1):l.value===!1&&(l.value=!0,p.value===!0&&r.lazyRules!=="ondemand"&&t.value===!1&&F())});function q(){b++,t.value=!1,l.value=null,u.value=!1,i.value=null,F.cancel()}function m(_=r.modelValue){if(p.value!==!0)return!0;const V=++b,B=t.value!==!0?()=>{l.value=!0}:()=>{},k=(g,a)=>{g===!0&&B(),u.value=g,i.value=a||null,t.value=!1},I=[];for(let g=0;g<r.rules.length;g++){const a=r.rules[g];let f;if(typeof a=="function"?f=a(_,Z):typeof a=="string"&&Z[a]!==void 0&&(f=Z[a](_)),f===!1||typeof f=="string")return k(!0,f),!1;f!==!0&&f!==void 0&&I.push(f)}return I.length===0?(k(!1),!0):(t.value=!0,Promise.all(I).then(g=>{if(g===void 0||Array.isArray(g)===!1||g.length===0)return V===b&&k(!1),!0;const a=g.find(f=>f===!1||typeof f=="string");return V===b&&k(a!==void 0,a),a===void 0},g=>(V===b&&(console.error(g),k(!0)),!1)))}function y(_){p.value===!0&&r.lazyRules!=="ondemand"&&(l.value===!0||r.lazyRules!==!0&&_!==!0)&&F()}const F=Be(m,0);return ne(()=>{h!==void 0&&h(),F.cancel()}),Object.assign(o,{resetValidation:q,validate:m}),Pe(o,"hasError",()=>O.value),{isDirtyModel:l,hasRules:S,hasError:O,errorMessage:x,validate:m,resetValidation:q}}const de=/^on[A-Z]/;function ot(e,t){const r={listeners:C({}),attributes:C({})};function o(){const u={},i={};for(const l in e)l!=="class"&&l!=="style"&&de.test(l)===!1&&(u[l]=e[l]);for(const l in t.props)de.test(l)===!0&&(i[l]=t.props[l]);r.attributes.value=u,r.listeners.value=i}return Ee(o),o(),r}let G,J=0;const w=new Array(256);for(let e=0;e<256;e++)w[e]=(e+256).toString(16).substring(1);const nt=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const r=new Uint8Array(t);return e.getRandomValues(r),r}}return t=>{const r=[];for(let o=t;o>0;o--)r.push(Math.floor(Math.random()*256));return r}})(),fe=4096;function lt(){(G===void 0||J+16>fe)&&(J=0,G=nt(fe));const e=Array.prototype.slice.call(G,J,J+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,w[e[0]]+w[e[1]]+w[e[2]]+w[e[3]]+"-"+w[e[4]]+w[e[5]]+"-"+w[e[6]]+w[e[7]]+"-"+w[e[8]]+w[e[9]]+"-"+w[e[10]]+w[e[11]]+w[e[12]]+w[e[13]]+w[e[14]]+w[e[15]]}let P=[],T=[];function Fe(e){T=T.filter(t=>t!==e)}function lr(e){Fe(e),T.push(e)}function ar(e){Fe(e),T.length===0&&P.length>0&&(P[P.length-1](),P=[])}function at(e){T.length===0?e():P.push(e)}function ut(e){P=P.filter(t=>t!==e)}function ee(e){return e===void 0?`f_${lt()}`:e}function it(e){return e!=null&&(""+e).length>0}const st={...Ce,...tt,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},ct=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function dt(){const{props:e,attrs:t,proxy:r,vnode:o}=D();return{isDark:qe(e,r.$q),editable:c(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:C(!1),focused:C(!1),hasPopupOpen:!1,splitAttrs:ot(t,o),targetUid:C(ee(e.for)),rootRef:C(null),targetRef:C(null),controlRef:C(null)}}function ft(e){const{props:t,emit:r,slots:o,attrs:u,proxy:i}=D(),{$q:l}=i;let b;e.hasValue===void 0&&(e.hasValue=c(()=>it(t.modelValue))),e.emitValue===void 0&&(e.emitValue=n=>{r("update:modelValue",n)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:$,onFocusout:M}),Object.assign(e,{clearValue:Q,onControlFocusin:$,onControlFocusout:M,focus:a}),e.computedCounter===void 0&&(e.computedCounter=c(()=>{if(t.counter!==!1){const n=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,v=t.maxlength!==void 0?t.maxlength:t.maxValues;return n+(v!==void 0?" / "+v:"")}}));const{isDirtyModel:h,hasRules:S,hasError:p,errorMessage:O,resetValidation:x}=rt(e.focused,e.innerLoading),q=e.floatingLabel!==void 0?c(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):c(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),m=c(()=>t.bottomSlots===!0||t.hint!==void 0||S.value===!0||t.counter===!0||t.error!==null),y=c(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),F=c(()=>`q-field row no-wrap items-start q-field--${y.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(q.value===!0?" q-field--float":"")+(V.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(p.value===!0?" q-field--error":"")+(p.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&m.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),_=c(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(p.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),V=c(()=>t.labelSlot===!0||t.label!==void 0),B=c(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&p.value!==!0?` text-${t.labelColor}`:"")),k=c(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:q.value,modelValue:t.modelValue,emitValue:e.emitValue})),I=c(()=>{const n={for:e.targetUid.value};return t.disable===!0?n["aria-disabled"]="true":t.readonly===!0&&(n["aria-readonly"]="true"),n});R(()=>t.for,n=>{e.targetUid.value=ee(n)});function g(){const n=document.activeElement;let v=e.targetRef!==void 0&&e.targetRef.value;v&&(n===null||n.id!==e.targetUid.value)&&(v.hasAttribute("tabindex")===!0||(v=v.querySelector("[tabindex]")),v&&v!==n&&v.focus({preventScroll:!0}))}function a(){at(g)}function f(){ut(g);const n=document.activeElement;n!==null&&e.rootRef.value.contains(n)&&n.blur()}function $(n){clearTimeout(b),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,r("focus",n))}function M(n,v){clearTimeout(b),b=setTimeout(()=>{document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1)||(e.focused.value===!0&&(e.focused.value=!1,r("blur",n)),v!==void 0&&v())})}function Q(n){X(n),l.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),r("update:modelValue",null),r("clear",t.modelValue),je(()=>{x(),l.platform.is.mobile!==!0&&(h.value=!1)})}function d(){const n=[];return o.prepend!==void 0&&n.push(s("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:j},o.prepend())),n.push(s("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},A())),p.value===!0&&t.noErrorIcon===!1&&n.push(z("error",[s(Y,{name:l.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?n.push(z("inner-loading-append",o.loading!==void 0?o.loading():[s(Ke,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&n.push(z("inner-clearable-append",[s(Y,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||l.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:Q})])),o.append!==void 0&&n.push(s("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:j},o.append())),e.getInnerAppend!==void 0&&n.push(z("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&n.push(e.getControlChild()),n}function A(){const n=[];return t.prefix!==void 0&&t.prefix!==null&&n.push(s("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&n.push(e.getShadowControl()),e.getControl!==void 0?n.push(e.getControl()):o.rawControl!==void 0?n.push(o.rawControl()):o.control!==void 0&&n.push(s("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},o.control(k.value))),V.value===!0&&n.push(s("div",{class:B.value},N(o.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&n.push(s("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),n.concat(N(o.default))}function L(){let n,v;p.value===!0?O.value!==null?(n=[s("div",{role:"alert"},O.value)],v=`q--slot-error-${O.value}`):(n=N(o.error),v="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(n=[s("div",t.hint)],v=`q--slot-hint-${t.hint}`):(n=N(o.hint),v="q--slot-hint"));const ae=t.counter===!0||o.counter!==void 0;if(t.hideBottomSpace===!0&&ae===!1&&n===void 0)return;const ue=s("div",{key:v,class:"q-field__messages col"},n);return s("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:j},[t.hideBottomSpace===!0?ue:s(Ue,{name:"q-transition--field-message"},()=>ue),ae===!0?s("div",{class:"q-field__counter"},o.counter!==void 0?o.counter():e.computedCounter.value):null])}function z(n,v){return v===null?null:s("div",{key:n,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},v)}let le=!1;return Ne(()=>{le=!0}),Te(()=>{le===!0&&t.autofocus===!0&&i.focus()}),Se(()=>{De.value===!0&&t.for===void 0&&(e.targetUid.value=ee()),t.autofocus===!0&&i.focus()}),ne(()=>{clearTimeout(b)}),Object.assign(i,{focus:a,blur:f}),function(){const v=e.getControl===void 0&&o.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...I.value}:I.value;return s("label",{ref:e.rootRef,class:[F.value,u.class],style:u.style,...v},[o.before!==void 0?s("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:j},o.before()):null,s("div",{class:"q-field__inner relative-position col self-stretch"},[s("div",{ref:e.controlRef,class:_.value,tabindex:-1,...e.controlEvents},d()),m.value===!0?L():null]),o.after!==void 0?s("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:j},o.after()):null])}}const vt={name:String};function pt(e={}){return(t,r,o)=>{t[r](s("input",{class:"hidden"+(o||""),...e.value}))}}function ur(e){return c(()=>e.name||e.for)}var ir=Oe({name:"QField",inheritAttrs:!1,props:st,emits:ct,setup(){return ft(dt())}});function mt(e,t){const r=C(null),o=c(()=>e.disable===!0?null:s("span",{ref:r,class:"no-outline",tabindex:-1}));function u(i){const l=t.value;i!==void 0&&i.type.indexOf("key")===0?l!==null&&document.activeElement!==l&&l.contains(document.activeElement)===!0&&l.focus():r.value!==null&&(i===void 0||l!==null&&l.contains(i.target)===!0)&&r.value.focus()}return{refocusTargetEl:o,refocusTarget:u}}var gt={xs:30,sm:35,md:40,lg:50,xl:60};const bt={...Ce,...Ge,...vt,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},ht=["update:modelValue"];function yt(e,t){const{props:r,slots:o,emit:u,proxy:i}=D(),{$q:l}=i,b=qe(r,l),h=C(null),{refocusTargetEl:S,refocusTarget:p}=mt(r,h),O=Ze(r,gt),x=c(()=>r.val!==void 0&&Array.isArray(r.modelValue)),q=c(()=>{const d=E(r.val);return x.value===!0?r.modelValue.findIndex(A=>E(A)===d):-1}),m=c(()=>x.value===!0?q.value>-1:E(r.modelValue)===E(r.trueValue)),y=c(()=>x.value===!0?q.value===-1:E(r.modelValue)===E(r.falseValue)),F=c(()=>m.value===!1&&y.value===!1),_=c(()=>r.disable===!0?-1:r.tabindex||0),V=c(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(r.disable===!0?" disabled":"")+(b.value===!0?` q-${e}--dark`:"")+(r.dense===!0?` q-${e}--dense`:"")+(r.leftLabel===!0?" reverse":"")),B=c(()=>{const d=m.value===!0?"truthy":y.value===!0?"falsy":"indet",A=r.color!==void 0&&(r.keepColor===!0||(e==="toggle"?m.value===!0:y.value!==!0))?` text-${r.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${d}${A}`}),k=c(()=>{const d={type:"checkbox"};return r.name!==void 0&&Object.assign(d,{"^checked":m.value===!0?"checked":void 0,name:r.name,value:x.value===!0?r.val:r.trueValue}),d}),I=pt(k),g=c(()=>{const d={tabindex:_.value,role:e==="toggle"?"switch":"checkbox","aria-label":r.label,"aria-checked":F.value===!0?"mixed":m.value===!0?"true":"false"};return r.disable===!0&&(d["aria-disabled"]="true"),d});function a(d){d!==void 0&&(X(d),p(d)),r.disable!==!0&&u("update:modelValue",f(),d)}function f(){if(x.value===!0){if(m.value===!0){const d=r.modelValue.slice();return d.splice(q.value,1),d}return r.modelValue.concat([r.val])}if(m.value===!0){if(r.toggleOrder!=="ft"||r.toggleIndeterminate===!1)return r.falseValue}else if(y.value===!0){if(r.toggleOrder==="ft"||r.toggleIndeterminate===!1)return r.trueValue}else return r.toggleOrder!=="ft"?r.trueValue:r.falseValue;return r.indeterminateValue}function $(d){(d.keyCode===13||d.keyCode===32)&&X(d)}function M(d){(d.keyCode===13||d.keyCode===32)&&a(d)}const Q=t(m,F);return Object.assign(i,{toggle:a}),()=>{const d=Q();r.disable!==!0&&I(d,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const A=[s("div",{class:B.value,style:O.value,"aria-hidden":"true"},d)];S.value!==null&&A.push(S.value);const L=r.label!==void 0?Xe(o.default,[r.label]):N(o.default);return L!==void 0&&A.push(s("div",{class:`q-${e}__label q-anchor--skip`},L)),s("div",{ref:h,class:V.value,...g.value,onClick:a,onKeydown:$,onKeyup:M},A)}}const _t=s("div",{key:"svg",class:"q-checkbox__bg absolute"},[s("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[s("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),s("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var wt=Oe({name:"QCheckbox",props:bt,emits:ht,setup(e){function t(r,o){const u=c(()=>(r.value===!0?e.checkedIcon:o.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>u.value!==null?[s("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[s(Y,{class:"q-checkbox__icon",name:u.value})])]:[_t]}return yt("checkbox",t)}}),ve;const U=typeof window!="undefined",St=e=>typeof e=="function",Ot=e=>typeof e=="string",xt=()=>{};U&&((ve=window==null?void 0:window.navigator)==null?void 0:ve.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ke(e){return typeof e=="function"?e():Me(e)}function Ct(e,t){function r(...o){e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})}return r}const Ve=e=>e();function qt(e=Ve){const t=C(!0);function r(){t.value=!1}function o(){t.value=!0}return{isActive:t,pause:r,resume:o,eventFilter:(...i)=>{t.value&&e(...i)}}}function Ft(e){return e}function kt(e){return Qe()?(Le(e),!0):!1}var pe=Object.getOwnPropertySymbols,Vt=Object.prototype.hasOwnProperty,It=Object.prototype.propertyIsEnumerable,$t=(e,t)=>{var r={};for(var o in e)Vt.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&pe)for(var o of pe(e))t.indexOf(o)<0&&It.call(e,o)&&(r[o]=e[o]);return r};function At(e,t,r={}){const o=r,{eventFilter:u=Ve}=o,i=$t(o,["eventFilter"]);return R(e,Ct(u,t),i)}var Rt=Object.defineProperty,Bt=Object.defineProperties,Pt=Object.getOwnPropertyDescriptors,K=Object.getOwnPropertySymbols,Ie=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable,me=(e,t,r)=>t in e?Rt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Et=(e,t)=>{for(var r in t||(t={}))Ie.call(t,r)&&me(e,r,t[r]);if(K)for(var r of K(t))$e.call(t,r)&&me(e,r,t[r]);return e},jt=(e,t)=>Bt(e,Pt(t)),Nt=(e,t)=>{var r={};for(var o in e)Ie.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&K)for(var o of K(e))t.indexOf(o)<0&&$e.call(e,o)&&(r[o]=e[o]);return r};function Tt(e,t,r={}){const o=r,{eventFilter:u}=o,i=Nt(o,["eventFilter"]),{eventFilter:l,pause:b,resume:h,isActive:S}=qt(u);return{stop:At(e,t,jt(Et({},i),{eventFilter:l})),pause:b,resume:h,isActive:S}}function Dt(e){var t;const r=ke(e);return(t=r==null?void 0:r.$el)!=null?t:r}const te=U?window:void 0;U&&window.document;U&&window.navigator;U&&window.location;function Ut(...e){let t,r,o,u;if(Ot(e[0])||Array.isArray(e[0])?([r,o,u]=e,t=te):[t,r,o,u]=e,!t)return xt;Array.isArray(r)||(r=[r]),Array.isArray(o)||(o=[o]);const i=[],l=()=>{i.forEach(p=>p()),i.length=0},b=(p,O,x)=>(p.addEventListener(O,x,u),()=>p.removeEventListener(O,x,u)),h=R(()=>Dt(t),p=>{l(),p&&i.push(...r.flatMap(O=>o.map(x=>b(p,O,x))))},{immediate:!0,flush:"post"}),S=()=>{h(),l()};return kt(S),S}const re=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},oe="__vueuse_ssr_handlers__";re[oe]=re[oe]||{};const Mt=re[oe];function Qt(e,t){return Mt[e]||t}function Lt(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var zt=Object.defineProperty,ge=Object.getOwnPropertySymbols,Ht=Object.prototype.hasOwnProperty,Wt=Object.prototype.propertyIsEnumerable,be=(e,t,r)=>t in e?zt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,he=(e,t)=>{for(var r in t||(t={}))Ht.call(t,r)&&be(e,r,t[r]);if(ge)for(var r of ge(t))Wt.call(t,r)&&be(e,r,t[r]);return e};const Jt={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Kt(e,t,r,o={}){var u;const{flush:i="pre",deep:l=!0,listenToStorageChanges:b=!0,writeDefaults:h=!0,mergeDefaults:S=!1,shallow:p,window:O=te,eventFilter:x,onError:q=a=>{console.error(a)}}=o,m=(p?ze:C)(t);if(!r)try{r=Qt("getDefaultStorage",()=>{var a;return(a=te)==null?void 0:a.localStorage})()}catch(a){q(a)}if(!r)return m;const y=ke(t),F=Lt(y),_=(u=o.serializer)!=null?u:Jt[F],{pause:V,resume:B}=Tt(m,()=>k(m.value),{flush:i,deep:l,eventFilter:x});return O&&b&&Ut(O,"storage",g),g(),m;function k(a){try{a==null?r.removeItem(e):r.setItem(e,_.write(a))}catch(f){q(f)}}function I(a){V();try{const f=a?a.newValue:r.getItem(e);if(f==null)return h&&y!==null&&r.setItem(e,_.write(y)),y;if(!a&&S){const $=_.read(f);return St(S)?S($,y):F==="object"&&!Array.isArray($)?he(he({},y),$):$}else return typeof f!="string"?f:_.read(f)}catch(f){q(f)}finally{B()}}function g(a){if(!(a&&a.storageArea!==r)){if(a&&a.key===null){m.value=y;return}a&&a.key!==e||(m.value=I(a))}}}var ye;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(ye||(ye={}));var Zt=Object.defineProperty,_e=Object.getOwnPropertySymbols,Gt=Object.prototype.hasOwnProperty,Xt=Object.prototype.propertyIsEnumerable,we=(e,t,r)=>t in e?Zt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Yt=(e,t)=>{for(var r in t||(t={}))Gt.call(t,r)&&we(e,r,t[r]);if(_e)for(var r of _e(t))Xt.call(t,r)&&we(e,r,t[r]);return e};const er={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Yt({linear:Ft},er);function sr(){const e=Kt("favourites",{});return{mapToUserData:o=>({...o,name:`${o.first_name} ${o.last_name}`,favourite:e.value[o.id]||!1}),changeFavouriteState:(o,u)=>{e.value[o.id]=u}}}const cr=async()=>{const e={params:{per_page:12}};return(await xe.get("users",e)).data.data},dr=async e=>{const t={params:{id:e}};return(await xe.get("users",t)).data.data},fr=He({__name:"FavouriteState",props:{userData:{type:Object,required:!0}},emits:["change"],setup(e,{emit:t}){const r=o=>{t("change",!!o)};return(o,u)=>(We(),Je(wt,{"model-value":e.userData.favourite,"onUpdate:modelValue":r,"checked-icon":"star","unchecked-icon":"star_border","indeterminate-icon":"help"},null,8,["model-value"]))}});export{ir as Q,fr as _,vt as a,ct as b,ur as c,dt as d,ft as e,it as f,at as g,Ce as h,qe as i,lr as j,wt as k,sr as l,cr as m,dr as n,ar as r,st as u};
