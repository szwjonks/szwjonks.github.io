import{i as we,r as T,o as oe,w as D,a as y,R as Me,g as X,e as Se,b as ae,S as Re,U as qe,t as ke,v as Ve,d as Y,m as Ae,V as Fe,h as M,W as G,z as _e,X as Ee,u as Be,c as $e,Y as de}from"./index-LhTk3wao.js";import{f as fe,i as Oe,h as J}from"./QBtn-CHLTg2Np.js";import{c as xe,a as Te,d as Ie,u as Pe}from"./focus-manager-99Se8-uf.js";let re,ee=0;const O=new Array(256);for(let e=0;e<256;e++)O[e]=(e+256).toString(16).substring(1);const De=(()=>{const e=typeof crypto<"u"?crypto:typeof window<"u"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const r=new Uint8Array(t);return e.getRandomValues(r),r}}return t=>{const r=[];for(let i=t;i>0;i--)r.push(Math.floor(Math.random()*256));return r}})(),ce=4096;function ie(){(re===void 0||ee+16>ce)&&(ee=0,re=De(ce));const e=Array.prototype.slice.call(re,ee,ee+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,O[e[0]]+O[e[1]]+O[e[2]]+O[e[3]]+"-"+O[e[4]]+O[e[5]]+"-"+O[e[6]]+O[e[7]]+"-"+O[e[8]]+O[e[9]]+"-"+O[e[10]]+O[e[11]]+O[e[12]]+O[e[13]]+O[e[14]]+O[e[15]]}function ze(e){return e??null}function ve(e,t){return e??(t===!0?`f_${ie()}`:null)}function je({getValue:e,required:t=!0}={}){if(we.value===!0){const r=e!==void 0?T(ze(e())):T(null);return t===!0&&r.value===null&&oe(()=>{r.value=`f_${ie()}`}),e!==void 0&&D(e,i=>{r.value=ve(i,t)}),r}return e!==void 0?y(()=>ve(e(),t)):T(`f_${ie()}`)}const ge=/^on[A-Z]/;function Ne(){const{attrs:e,vnode:t}=X(),r={listeners:T({}),attributes:T({})};function i(){const f={},d={};for(const v in e)v!=="class"&&v!=="style"&&ge.test(v)===!1&&(f[v]=e[v]);for(const v in t.props)ge.test(v)===!0&&(d[v]=t.props[v]);r.attributes.value=f,r.listeners.value=d}return Me(i),i(),r}function Ke({validate:e,resetValidation:t,requiresQForm:r}){const i=Se(Re,!1);if(i!==!1){const{props:f,proxy:d}=X();Object.assign(d,{validate:e,resetValidation:t}),D(()=>f.disable,v=>{v===!0?(typeof t=="function"&&t(),i.unbindComponent(d)):i.bindComponent(d)}),oe(()=>{f.disable!==!0&&i.bindComponent(d)}),ae(()=>{f.disable!==!0&&i.unbindComponent(d)})}else r===!0&&console.error("Parent QForm not found on useFormChild()!")}const me=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,he=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,be=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,te=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ne=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ue={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>me.test(e),hexaColor:e=>he.test(e),hexOrHexaColor:e=>be.test(e),rgbColor:e=>te.test(e),rgbaColor:e=>ne.test(e),rgbOrRgbaColor:e=>te.test(e)||ne.test(e),hexOrRgbColor:e=>me.test(e)||te.test(e),hexaOrRgbaColor:e=>he.test(e)||ne.test(e),anyColor:e=>be.test(e)||te.test(e)||ne.test(e)},Le=[!0,!1,"ondemand"],Ze={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>Le.includes(e)}};function Ue(e,t){const{props:r,proxy:i}=X(),f=T(!1),d=T(null),v=T(!1);Ke({validate:j,resetValidation:z});let x=0,E;const R=y(()=>r.rules!==void 0&&r.rules!==null&&r.rules.length!==0),C=y(()=>r.disable!==!0&&R.value===!0&&t.value===!1),b=y(()=>r.error===!0||f.value===!0),H=y(()=>typeof r.errorMessage=="string"&&r.errorMessage.length!==0?r.errorMessage:d.value);D(()=>r.modelValue,()=>{v.value=!0,C.value===!0&&r.lazyRules===!1&&I()});function $(){r.lazyRules!=="ondemand"&&C.value===!0&&v.value===!0&&I()}D(()=>r.reactiveRules,K=>{K===!0?E===void 0&&(E=D(()=>r.rules,$,{immediate:!0,deep:!0})):E!==void 0&&(E(),E=void 0)},{immediate:!0}),D(()=>r.lazyRules,$),D(e,K=>{K===!0?v.value=!0:C.value===!0&&r.lazyRules!=="ondemand"&&I()});function z(){x++,t.value=!1,v.value=!1,f.value=!1,d.value=null,I.cancel()}function j(K=r.modelValue){if(r.disable===!0||R.value===!1)return!0;const F=++x,Q=t.value!==!0?()=>{v.value=!0}:()=>{},L=(S,w)=>{S===!0&&Q(),f.value=S,d.value=w||null,t.value=!1},N=[];for(let S=0;S<r.rules.length;S++){const w=r.rules[S];let B;if(typeof w=="function"?B=w(K,ue):typeof w=="string"&&ue[w]!==void 0&&(B=ue[w](K)),B===!1||typeof B=="string")return L(!0,B),!1;B!==!0&&B!==void 0&&N.push(B)}return N.length===0?(L(!1),!0):(t.value=!0,Promise.all(N).then(S=>{if(S===void 0||Array.isArray(S)===!1||S.length===0)return F===x&&L(!1),!0;const w=S.find(B=>B===!1||typeof B=="string");return F===x&&L(w!==void 0,w),w===void 0},S=>(F===x&&(console.error(S),L(!0)),!1)))}const I=qe(j,0);return ae(()=>{E!==void 0&&E(),I.cancel()}),Object.assign(i,{resetValidation:z,validate:j}),ke(i,"hasError",()=>b.value),{isDirtyModel:v,hasRules:R,hasError:b,errorMessage:H,validate:j,resetValidation:z}}function se(e){return e!=null&&(""+e).length!==0}const He={...Pe,...Ze,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},Qe={...He,maxlength:[Number,String]},Ye=["update:modelValue","clear","focus","blur"];function We({requiredForAttr:e=!0,tagProp:t,changeEvent:r=!1}={}){const{props:i,proxy:f}=X(),d=Te(i,f.$q),v=je({required:e,getValue:()=>i.for});return{requiredForAttr:e,changeEvent:r,tag:t===!0?y(()=>i.tag):{value:"label"},isDark:d,editable:y(()=>i.disable!==!0&&i.readonly!==!0),innerLoading:T(!1),focused:T(!1),hasPopupOpen:!1,splitAttrs:Ne(),targetUid:v,rootRef:T(null),targetRef:T(null),controlRef:T(null)}}function Xe(e){const{props:t,emit:r,slots:i,attrs:f,proxy:d}=X(),{$q:v}=d;let x=null;e.hasValue===void 0&&(e.hasValue=y(()=>se(t.modelValue))),e.emitValue===void 0&&(e.emitValue=u=>{r("update:modelValue",u)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:o,onFocusout:l}),Object.assign(e,{clearValue:s,onControlFocusin:o,onControlFocusout:l,focus:w}),e.computedCounter===void 0&&(e.computedCounter=y(()=>{if(t.counter!==!1){const u=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,c=t.maxlength!==void 0?t.maxlength:t.maxValues;return u+(c!==void 0?" / "+c:"")}}));const{isDirtyModel:E,hasRules:R,hasError:C,errorMessage:b,resetValidation:H}=Ue(e.focused,e.innerLoading),$=e.floatingLabel!==void 0?y(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):y(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),z=y(()=>t.bottomSlots===!0||t.hint!==void 0||R.value===!0||t.counter===!0||t.error!==null),j=y(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),I=y(()=>`q-field row no-wrap items-start q-field--${j.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+($.value===!0?" q-field--float":"")+(F.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(C.value===!0?" q-field--error":"")+(C.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&z.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),K=y(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(C.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),F=y(()=>t.labelSlot===!0||t.label!==void 0),Q=y(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&C.value!==!0?` text-${t.labelColor}`:"")),L=y(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:$.value,modelValue:t.modelValue,emitValue:e.emitValue})),N=y(()=>{const u={};return e.targetUid.value&&(u.for=e.targetUid.value),t.disable===!0&&(u["aria-disabled"]="true"),u});function S(){const u=document.activeElement;let c=e.targetRef!==void 0&&e.targetRef.value;c&&(u===null||u.id!==e.targetUid.value)&&(c.hasAttribute("tabindex")===!0||(c=c.querySelector("[tabindex]")),c&&c!==u&&c.focus({preventScroll:!0}))}function w(){xe(S)}function B(){Ie(S);const u=document.activeElement;u!==null&&e.rootRef.value.contains(u)&&u.blur()}function o(u){x!==null&&(clearTimeout(x),x=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,r("focus",u))}function l(u,c){x!==null&&clearTimeout(x),x=setTimeout(()=>{x=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,r("blur",u)),c!==void 0&&c())})}function s(u){Ve(u),v.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),r("update:modelValue",null),e.changeEvent===!0&&r("change",null),r("clear",t.modelValue),Y(()=>{const c=E.value;H(),E.value=c})}function a(u){[13,32].includes(u.keyCode)&&s(u)}function h(){const u=[];return i.prepend!==void 0&&u.push(M("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:G},i.prepend())),u.push(M("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),C.value===!0&&t.noErrorIcon===!1&&u.push(m("error",[M(fe,{name:v.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?u.push(m("inner-loading-append",i.loading!==void 0?i.loading():[M(Oe,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&u.push(m("inner-clearable-append",[M(fe,{class:"q-field__focusable-action",name:t.clearIcon||v.iconSet.field.clear,tabindex:0,role:"button","aria-hidden":"false","aria-label":v.lang.label.clear,onKeyup:a,onClick:s})])),i.append!==void 0&&u.push(M("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:G},i.append())),e.getInnerAppend!==void 0&&u.push(m("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&u.push(e.getControlChild()),u}function g(){const u=[];return t.prefix!==void 0&&t.prefix!==null&&u.push(M("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&u.push(e.getShadowControl()),e.getControl!==void 0?u.push(e.getControl()):i.rawControl!==void 0?u.push(i.rawControl()):i.control!==void 0&&u.push(M("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(L.value))),F.value===!0&&u.push(M("div",{class:Q.value},J(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&u.push(M("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),u.concat(J(i.default))}function q(){let u,c;C.value===!0?b.value!==null?(u=[M("div",{role:"alert"},b.value)],c=`q--slot-error-${b.value}`):(u=J(i.error),c="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(u=[M("div",t.hint)],c=`q--slot-hint-${t.hint}`):(u=J(i.hint),c="q--slot-hint"));const k=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&k===!1&&u===void 0)return;const V=M("div",{key:c,class:"q-field__messages col"},u);return M("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:G},[t.hideBottomSpace===!0?V:M(_e,{name:"q-transition--field-message"},()=>V),k===!0?M("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function m(u,c){return c===null?null:M("div",{key:u,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},c)}let p=!1;return Ae(()=>{p=!0}),Fe(()=>{p===!0&&t.autofocus===!0&&d.focus()}),t.autofocus===!0&&oe(()=>{d.focus()}),ae(()=>{x!==null&&clearTimeout(x)}),Object.assign(d,{focus:w,blur:B}),function(){const c=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...N.value}:N.value;return M(e.tag.value,{ref:e.rootRef,class:[I.value,f.class],style:f.style,...c},[i.before!==void 0?M("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:G},i.before()):null,M("div",{class:"q-field__inner relative-position col self-stretch"},[M("div",{ref:e.controlRef,class:K.value,tabindex:-1,...e.controlEvents},h()),z.value===!0?q():null]),i.after!==void 0?M("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:G},i.after()):null])}}const pe={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},le={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Ce=Object.keys(le);Ce.forEach(e=>{le[e].regex=new RegExp(le[e].pattern)});const Ge=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Ce.join("")+"])|(.)","g"),ye=/[.*+?^${}()|[\]\\]/g,_="",Je={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function et(e,t,r,i){let f,d,v,x,E,R;const C=T(null),b=T($());function H(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}D(()=>e.type+e.autogrow,j),D(()=>e.mask,o=>{if(o!==void 0)I(b.value,!0);else{const l=w(b.value);j(),e.modelValue!==l&&t("update:modelValue",l)}}),D(()=>e.fillMask+e.reverseFillMask,()=>{C.value===!0&&I(b.value,!0)}),D(()=>e.unmaskedValue,()=>{C.value===!0&&I(b.value)});function $(){if(j(),C.value===!0){const o=N(w(e.modelValue));return e.fillMask!==!1?B(o):o}return e.modelValue}function z(o){if(o<f.length)return f.slice(-o);let l="",s=f;const a=s.indexOf(_);if(a!==-1){for(let h=o-s.length;h>0;h--)l+=_;s=s.slice(0,a)+l+s.slice(a)}return s}function j(){if(C.value=e.mask!==void 0&&e.mask.length!==0&&H(),C.value===!1){x=void 0,f="",d="";return}const o=pe[e.mask]===void 0?e.mask:pe[e.mask],l=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=l.replace(ye,"\\$&"),a=[],h=[],g=[];let q=e.reverseFillMask===!0,m="",p="";o.replace(Ge,(V,n,A,U,Z)=>{if(U!==void 0){const P=le[U];g.push(P),p=P.negate,q===!0&&(h.push("(?:"+p+"+)?("+P.pattern+"+)?(?:"+p+"+)?("+P.pattern+"+)?"),q=!1),h.push("(?:"+p+"+)?("+P.pattern+")?")}else if(A!==void 0)m="\\"+(A==="\\"?"":A),g.push(A),a.push("([^"+m+"]+)?"+m+"?");else{const P=n!==void 0?n:Z;m=P==="\\"?"\\\\\\\\":P.replace(ye,"\\\\$&"),g.push(P),a.push("([^"+m+"]+)?"+m+"?")}});const u=new RegExp("^"+a.join("")+"("+(m===""?".":"[^"+m+"]")+"+)?"+(m===""?"":"["+m+"]*")+"$"),c=h.length-1,k=h.map((V,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+V):n===c?new RegExp("^"+V+"("+(p===""?".":p)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+V));v=g,x=V=>{const n=u.exec(e.reverseFillMask===!0?V:V.slice(0,g.length+1));n!==null&&(V=n.slice(1).join(""));const A=[],U=k.length;for(let Z=0,P=V;Z<U;Z++){const W=k[Z].exec(P);if(W===null)break;P=P.slice(W.shift().length),A.push(...W)}return A.length!==0?A.join(""):V},f=g.map(V=>typeof V=="string"?V:_).join(""),d=f.split(_).join(l)}function I(o,l,s){const a=i.value,h=a.selectionEnd,g=a.value.length-h,q=w(o);l===!0&&j();const m=N(q),p=e.fillMask!==!1?B(m):m,u=b.value!==p;a.value!==p&&(a.value=p),u===!0&&(b.value=p),document.activeElement===a&&Y(()=>{if(p===d){const k=e.reverseFillMask===!0?d.length:0;a.setSelectionRange(k,k,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const k=a.selectionEnd;let V=h-1;for(let n=E;n<=V&&n<k;n++)f[n]!==_&&V++;F.right(a,V);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)!==-1){const k=e.reverseFillMask===!0?h===0?p.length>m.length?1:0:Math.max(0,p.length-(p===d?0:Math.min(m.length,g)+1))+1:h;a.setSelectionRange(k,k,"forward");return}if(e.reverseFillMask===!0)if(u===!0){const k=Math.max(0,p.length-(p===d?0:Math.min(m.length,g+1)));k===1&&h===1?a.setSelectionRange(k,k,"forward"):F.rightReverse(a,k)}else{const k=p.length-g;a.setSelectionRange(k,k,"backward")}else if(u===!0){const k=Math.max(0,f.indexOf(_),Math.min(m.length,h)-1);F.right(a,k)}else{const k=h-1;F.right(a,k)}});const c=e.unmaskedValue===!0?w(p):p;String(e.modelValue)!==c&&(e.modelValue!==null||c!=="")&&r(c,!0)}function K(o,l,s){const a=N(w(o.value));l=Math.max(0,f.indexOf(_),Math.min(a.length,l)),E=l,o.setSelectionRange(l,s,"forward")}const F={left(o,l){const s=f.slice(l-1).indexOf(_)===-1;let a=Math.max(0,l-1);for(;a>=0;a--)if(f[a]===_){l=a,s===!0&&l++;break}if(a<0&&f[l]!==void 0&&f[l]!==_)return F.right(o,0);l>=0&&o.setSelectionRange(l,l,"backward")},right(o,l){const s=o.value.length;let a=Math.min(s,l+1);for(;a<=s;a++)if(f[a]===_){l=a;break}else f[a-1]===_&&(l=a);if(a>s&&f[l-1]!==void 0&&f[l-1]!==_)return F.left(o,s);o.setSelectionRange(l,l,"forward")},leftReverse(o,l){const s=z(o.value.length);let a=Math.max(0,l-1);for(;a>=0;a--)if(s[a-1]===_){l=a;break}else if(s[a]===_&&(l=a,a===0))break;if(a<0&&s[l]!==void 0&&s[l]!==_)return F.rightReverse(o,0);l>=0&&o.setSelectionRange(l,l,"backward")},rightReverse(o,l){const s=o.value.length,a=z(s),h=a.slice(0,l+1).indexOf(_)===-1;let g=Math.min(s,l+1);for(;g<=s;g++)if(a[g-1]===_){l=g,l>0&&h===!0&&l--;break}if(g>s&&a[l-1]!==void 0&&a[l-1]!==_)return F.leftReverse(o,s);o.setSelectionRange(l,l,"forward")}};function Q(o){t("click",o),R=void 0}function L(o){if(t("keydown",o),Ee(o)===!0||o.altKey===!0)return;const l=i.value,s=l.selectionStart,a=l.selectionEnd;if(o.shiftKey||(R=void 0),o.keyCode===37||o.keyCode===39){o.shiftKey&&R===void 0&&(R=l.selectionDirection==="forward"?s:a);const h=F[(o.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(o.preventDefault(),h(l,R===s?a:s),o.shiftKey){const g=l.selectionStart;l.setSelectionRange(Math.min(R,g),Math.max(R,g),"forward")}}else o.keyCode===8&&e.reverseFillMask!==!0&&s===a?(F.left(l,s),l.setSelectionRange(l.selectionStart,a,"backward")):o.keyCode===46&&e.reverseFillMask===!0&&s===a&&(F.rightReverse(l,a),l.setSelectionRange(s,l.selectionEnd,"forward"))}function N(o){if(o==null||o==="")return"";if(e.reverseFillMask===!0)return S(o);const l=v;let s=0,a="";for(let h=0;h<l.length;h++){const g=o[s],q=l[h];if(typeof q=="string")a+=q,g===q&&s++;else if(g!==void 0&&q.regex.test(g))a+=q.transform!==void 0?q.transform(g):g,s++;else return a}return a}function S(o){const l=v,s=f.indexOf(_);let a=o.length-1,h="";for(let g=l.length-1;g>=0&&a!==-1;g--){const q=l[g];let m=o[a];if(typeof q=="string")h=q+h,m===q&&a--;else if(m!==void 0&&q.regex.test(m))do h=(q.transform!==void 0?q.transform(m):m)+h,a--,m=o[a];while(s===g&&m!==void 0&&q.regex.test(m));else return h}return h}function w(o){return typeof o!="string"||x===void 0?typeof o=="number"?x(""+o):o:x(o)}function B(o){return d.length-o.length<=0?o:e.reverseFillMask===!0&&o.length!==0?d.slice(0,-o.length)+o:o+d.slice(o.length)}return{innerValue:b,hasMask:C,moveCursorForPaste:K,updateMaskValue:I,onMaskedKeydown:L,onMaskedClick:Q}}const tt={name:String};function nt(e){return y(()=>e.name||e.for)}function lt(e,t){function r(){const i=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return y(()=>{if(e.type==="file")return r()})}const ot=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,at=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,rt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,ut=/[a-z0-9_ -]$/i;function it(e){return function(r){if(r.type==="compositionend"||r.type==="change"){if(r.target.qComposing!==!0)return;r.target.qComposing=!1,e(r)}else r.type==="compositionupdate"&&r.target.qComposing!==!0&&typeof r.data=="string"&&(Be.is.firefox===!0?ut.test(r.data)===!1:ot.test(r.data)===!0||at.test(r.data)===!0||rt.test(r.data)===!0)===!0&&(r.target.qComposing=!0)}}const ct=$e({name:"QInput",inheritAttrs:!1,props:{...Qe,...Je,...tt,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ye,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:r}){const{proxy:i}=X(),{$q:f}=i,d={};let v=NaN,x,E,R=null,C;const b=T(null),H=nt(e),{innerValue:$,hasMask:z,moveCursorForPaste:j,updateMaskValue:I,onMaskedKeydown:K,onMaskedClick:F}=et(e,t,m,b),Q=lt(e),L=y(()=>se($.value)),N=it(g),S=We({changeEvent:!0}),w=y(()=>e.type==="textarea"||e.autogrow===!0),B=y(()=>w.value===!0||["text","search","url","tel","password"].includes(e.type)),o=y(()=>{const n={...S.splitAttrs.listeners.value,onInput:g,onPaste:h,onChange:u,onBlur:c,onFocus:de};return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=N,z.value===!0&&(n.onKeydown=K,n.onClick=F),e.autogrow===!0&&(n.onAnimationend=q),n}),l=y(()=>{const n={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:H.value,...S.splitAttrs.attributes.value,id:S.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return w.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});D(()=>e.type,()=>{b.value&&(b.value.value=e.modelValue)}),D(()=>e.modelValue,n=>{if(z.value===!0){if(E===!0&&(E=!1,String(n)===v))return;I(n)}else $.value!==n&&($.value=n,e.type==="number"&&d.hasOwnProperty("value")===!0&&(x===!0?x=!1:delete d.value));e.autogrow===!0&&Y(p)}),D(()=>e.autogrow,n=>{n===!0?Y(p):b.value!==null&&r.rows>0&&(b.value.style.height="auto")}),D(()=>e.dense,()=>{e.autogrow===!0&&Y(p)});function s(){xe(()=>{const n=document.activeElement;b.value!==null&&b.value!==n&&(n===null||n.id!==S.targetUid.value)&&b.value.focus({preventScroll:!0})})}function a(){b.value!==null&&b.value.select()}function h(n){if(z.value===!0&&e.reverseFillMask!==!0){const A=n.target;j(A,A.selectionStart,A.selectionEnd)}t("paste",n)}function g(n){if(!n||!n.target)return;if(e.type==="file"){t("update:modelValue",n.target.files);return}const A=n.target.value;if(n.target.qComposing===!0){d.value=A;return}if(z.value===!0)I(A,!1,n.inputType);else if(m(A),B.value===!0&&n.target===document.activeElement){const{selectionStart:U,selectionEnd:Z}=n.target;U!==void 0&&Z!==void 0&&Y(()=>{n.target===document.activeElement&&A.indexOf(n.target.value)===0&&n.target.setSelectionRange(U,Z)})}e.autogrow===!0&&p()}function q(n){t("animationend",n),p()}function m(n,A){C=()=>{R=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==n&&v!==n&&(v=n,A===!0&&(E=!0),t("update:modelValue",n),Y(()=>{v===n&&(v=NaN)})),C=void 0},e.type==="number"&&(x=!0,d.value=n),e.debounce!==void 0?(R!==null&&clearTimeout(R),d.value=n,R=setTimeout(C,e.debounce)):C()}function p(){requestAnimationFrame(()=>{const n=b.value;if(n!==null){const A=n.parentNode.style,{scrollTop:U}=n,{overflowY:Z,maxHeight:P}=f.platform.is.firefox===!0?{}:window.getComputedStyle(n),W=Z!==void 0&&Z!=="scroll";W===!0&&(n.style.overflowY="hidden"),A.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.height=n.scrollHeight+"px",W===!0&&(n.style.overflowY=parseInt(P,10)<n.scrollHeight?"auto":"hidden"),A.marginBottom="",n.scrollTop=U}})}function u(n){N(n),R!==null&&(clearTimeout(R),R=null),C!==void 0&&C(),t("change",n.target.value)}function c(n){n!==void 0&&de(n),R!==null&&(clearTimeout(R),R=null),C!==void 0&&C(),x=!1,E=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{b.value!==null&&(b.value.value=$.value!==void 0?$.value:"")})}function k(){return d.hasOwnProperty("value")===!0?d.value:$.value!==void 0?$.value:""}ae(()=>{c()}),oe(()=>{e.autogrow===!0&&p()}),Object.assign(S,{innerValue:$,fieldClass:y(()=>`q-${w.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:y(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:b,emitValue:m,hasValue:L,floatingLabel:y(()=>L.value===!0&&(e.type!=="number"||isNaN($.value)===!1)||se(e.displayValue)),getControl:()=>M(w.value===!0?"textarea":"input",{ref:b,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...l.value,...o.value,...e.type!=="file"?{value:k()}:Q.value}),getShadowControl:()=>M("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(w.value===!0?"":" text-no-wrap")},[M("span",{class:"invisible"},k()),M("span",e.shadowText)])});const V=Xe(S);return Object.assign(i,{focus:s,select:a,getNativeElement:()=>b.value}),ke(i,"nativeEl",()=>b.value),V}});export{ct as Q};
