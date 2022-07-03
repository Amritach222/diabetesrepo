"use strict";(self.webpackChunkdiabetestrackerapp=self.webpackChunkdiabetestrackerapp||[]).push([[140],{13140:function(e,a,t){t.r(a),t.d(a,{default:function(){return ke}});var r=t(74165),n=t(15861),o=t(4942),s=t(1413),l=t(70885),i=t(72791),c=t(5037),d=t(63366),u=t(87462),p=t(94419),m=t(12065),h=t(28182),f=t(14036),g=t(55255),v=t(48744),b=t(52930),x=t(80637),Z=t(97225),y=t(75878);function w(e){return(0,Z.Z)("PrivateSwitchBase",e)}(0,y.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var j=t(80184),C=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],k=(0,g.ZP)(x.Z)((function(e){var a=e.ownerState;return(0,u.Z)({padding:9,borderRadius:"50%"},"start"===a.edge&&{marginLeft:"small"===a.size?-3:-12},"end"===a.edge&&{marginRight:"small"===a.size?-3:-12})})),R=(0,g.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),S=i.forwardRef((function(e,a){var t=e.autoFocus,r=e.checked,n=e.checkedIcon,o=e.className,s=e.defaultChecked,i=e.disabled,c=e.disableFocusRipple,m=void 0!==c&&c,g=e.edge,x=void 0!==g&&g,Z=e.icon,y=e.id,S=e.inputProps,P=e.inputRef,N=e.name,F=e.onBlur,B=e.onChange,M=e.onFocus,z=e.readOnly,I=e.required,L=e.tabIndex,T=e.type,W=e.value,D=(0,d.Z)(e,C),O=(0,v.Z)({controlled:r,default:Boolean(s),name:"SwitchBase",state:"checked"}),E=(0,l.Z)(O,2),Y=E[0],A=E[1],G=(0,b.Z)(),q=i;G&&"undefined"===typeof q&&(q=G.disabled);var U="checkbox"===T||"radio"===T,H=(0,u.Z)({},e,{checked:Y,disabled:q,disableFocusRipple:m,edge:x}),V=function(e){var a=e.classes,t=e.checked,r=e.disabled,n=e.edge,o={root:["root",t&&"checked",r&&"disabled",n&&"edge".concat((0,f.Z)(n))],input:["input"]};return(0,p.Z)(o,w,a)}(H);return(0,j.jsxs)(k,(0,u.Z)({component:"span",className:(0,h.Z)(V.root,o),centerRipple:!0,focusRipple:!m,disabled:q,tabIndex:null,role:void 0,onFocus:function(e){M&&M(e),G&&G.onFocus&&G.onFocus(e)},onBlur:function(e){F&&F(e),G&&G.onBlur&&G.onBlur(e)},ownerState:H,ref:a},D,{children:[(0,j.jsx)(R,(0,u.Z)({autoFocus:t,checked:r,defaultChecked:s,className:V.input,disabled:q,id:U&&y,name:N,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var a=e.target.checked;A(a),B&&B(e,a)}},readOnly:z,ref:P,required:I,ownerState:H,tabIndex:L,type:T},"checkbox"===T&&void 0===W?{}:{value:W},S)),Y?n:Z]}))})),P=t(61046),N=t(76189),F=(0,N.Z)((0,j.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),B=(0,N.Z)((0,j.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),M=(0,g.ZP)("span")({position:"relative",display:"flex"}),z=(0,g.ZP)(F)({transform:"scale(1)"}),I=(0,g.ZP)(B)((function(e){var a=e.theme,t=e.ownerState;return(0,u.Z)({left:0,position:"absolute",transform:"scale(0)",transition:a.transitions.create("transform",{easing:a.transitions.easing.easeIn,duration:a.transitions.duration.shortest})},t.checked&&{transform:"scale(1)",transition:a.transitions.create("transform",{easing:a.transitions.easing.easeOut,duration:a.transitions.duration.shortest})})}));var L=function(e){var a=e.checked,t=void 0!==a&&a,r=e.classes,n=void 0===r?{}:r,o=e.fontSize,s=(0,u.Z)({},e,{checked:t});return(0,j.jsxs)(M,{className:n.root,ownerState:s,children:[(0,j.jsx)(z,{fontSize:o,className:n.background,ownerState:s}),(0,j.jsx)(I,{fontSize:o,className:n.dot,ownerState:s})]})},T=t(78949).Z;var W=i.createContext(void 0);function D(e){return(0,Z.Z)("MuiRadio",e)}var O=(0,y.Z)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),E=["checked","checkedIcon","color","icon","name","onChange","size"],Y=(0,g.ZP)(S,{shouldForwardProp:function(e){return(0,g.FO)(e)||"classes"===e},name:"MuiRadio",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[a.root,a["color".concat((0,f.Z)(t.color))]]}})((function(e){var a=e.theme,t=e.ownerState;return(0,u.Z)({color:(a.vars||a).palette.text.secondary,"&:hover":{backgroundColor:a.vars?"rgba(".concat("default"===t.color?a.vars.palette.action.activeChannel:a.vars.palette[t.color].mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,m.Fq)("default"===t.color?a.palette.action.active:a.palette[t.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&(0,o.Z)({},"&.".concat(O.checked),{color:(a.vars||a).palette[t.color].main}),(0,o.Z)({},"&.".concat(O.disabled),{color:(a.vars||a).palette.action.disabled}))}));var A=(0,j.jsx)(L,{checked:!0}),G=(0,j.jsx)(L,{}),q=i.forwardRef((function(e,a){var t,r,n,o,s=(0,P.Z)({props:e,name:"MuiRadio"}),l=s.checked,c=s.checkedIcon,m=void 0===c?A:c,h=s.color,g=void 0===h?"primary":h,v=s.icon,b=void 0===v?G:v,x=s.name,Z=s.onChange,y=s.size,w=void 0===y?"medium":y,C=(0,d.Z)(s,E),k=(0,u.Z)({},s,{color:g,size:w}),R=function(e){var a=e.classes,t=e.color,r={root:["root","color".concat((0,f.Z)(t))]};return(0,u.Z)({},a,(0,p.Z)(r,D,a))}(k),S=i.useContext(W),N=l,F=T(Z,S&&S.onChange),B=x;return S&&("undefined"===typeof N&&(n=S.value,N="object"===typeof(o=s.value)&&null!==o?n===o:String(n)===String(o)),"undefined"===typeof B&&(B=S.name)),(0,j.jsx)(Y,(0,u.Z)({type:"radio",icon:i.cloneElement(b,{fontSize:null!=(t=G.props.fontSize)?t:w}),checkedIcon:i.cloneElement(m,{fontSize:null!=(r=A.props.fontSize)?r:w}),ownerState:k,classes:R,name:B,checked:N,onChange:F,ref:a},C))}));function U(e){return(0,Z.Z)("MuiFormGroup",e)}(0,y.Z)("MuiFormGroup",["root","row","error"]);var H=t(76147),V=["className","row"],J=(0,g.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[a.root,t.row&&a.row]}})((function(e){var a=e.ownerState;return(0,u.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},a.row&&{flexDirection:"row"})})),K=i.forwardRef((function(e,a){var t=(0,P.Z)({props:e,name:"MuiFormGroup"}),r=t.className,n=t.row,o=void 0!==n&&n,s=(0,d.Z)(t,V),l=(0,b.Z)(),i=(0,H.Z)({props:t,muiFormControl:l,states:["error"]}),c=(0,u.Z)({},t,{row:o,error:i.error}),m=function(e){var a=e.classes,t={root:["root",e.row&&"row",e.error&&"error"]};return(0,p.Z)(t,U,a)}(c);return(0,j.jsx)(J,(0,u.Z)({className:(0,h.Z)(m.root,r),ownerState:c,ref:a},s))})),Q=t(42071),X=t(96248).Z,$=["actions","children","defaultValue","name","onChange","value"],_=i.forwardRef((function(e,a){var t=e.actions,r=e.children,n=e.defaultValue,o=e.name,s=e.onChange,c=e.value,p=(0,d.Z)(e,$),m=i.useRef(null),h=(0,v.Z)({controlled:c,default:n,name:"RadioGroup"}),f=(0,l.Z)(h,2),g=f[0],b=f[1];i.useImperativeHandle(t,(function(){return{focus:function(){var e=m.current.querySelector("input:not(:disabled):checked");e||(e=m.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var x=(0,Q.Z)(a,m),Z=X(o);return(0,j.jsx)(W.Provider,{value:{name:Z,onChange:function(e){b(e.target.value),s&&s(e,e.target.value)},value:g},children:(0,j.jsx)(K,(0,u.Z)({role:"radiogroup",ref:x},p,{children:r}))})})),ee=t(42982),ae=t(82466),te=t(46001),re=["sx"];function ne(e){var a,t=e.sx,r=function(e){var a={systemProps:{},otherProps:{}};return Object.keys(e).forEach((function(t){te.Gc[t]?a.systemProps[t]=e[t]:a.otherProps[t]=e[t]})),a}((0,d.Z)(e,re)),n=r.systemProps,o=r.otherProps;return a=Array.isArray(t)?[n].concat((0,ee.Z)(t)):"function"===typeof t?function(){var e=t.apply(void 0,arguments);return(0,ae.P)(e)?(0,u.Z)({},n,e):n}:(0,u.Z)({},n,t),(0,u.Z)({},o,{sx:a})}function oe(e){return(0,Z.Z)("MuiTypography",e)}(0,y.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var se=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],le=(0,g.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[a.root,t.variant&&a[t.variant],"inherit"!==t.align&&a["align".concat((0,f.Z)(t.align))],t.noWrap&&a.noWrap,t.gutterBottom&&a.gutterBottom,t.paragraph&&a.paragraph]}})((function(e){var a=e.theme,t=e.ownerState;return(0,u.Z)({margin:0},t.variant&&a.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})})),ie={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},ce={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},de=i.forwardRef((function(e,a){var t=(0,P.Z)({props:e,name:"MuiTypography"}),r=function(e){return ce[e]||e}(t.color),n=ne((0,u.Z)({},t,{color:r})),o=n.align,s=void 0===o?"inherit":o,l=n.className,i=n.component,c=n.gutterBottom,m=void 0!==c&&c,g=n.noWrap,v=void 0!==g&&g,b=n.paragraph,x=void 0!==b&&b,Z=n.variant,y=void 0===Z?"body1":Z,w=n.variantMapping,C=void 0===w?ie:w,k=(0,d.Z)(n,se),R=(0,u.Z)({},n,{align:s,color:r,className:l,component:i,gutterBottom:m,noWrap:v,paragraph:x,variant:y,variantMapping:C}),S=i||(x?"p":C[y]||ie[y])||"span",N=function(e){var a=e.align,t=e.gutterBottom,r=e.noWrap,n=e.paragraph,o=e.variant,s=e.classes,l={root:["root",o,"inherit"!==e.align&&"align".concat((0,f.Z)(a)),t&&"gutterBottom",r&&"noWrap",n&&"paragraph"]};return(0,p.Z)(l,oe,s)}(R);return(0,j.jsx)(le,(0,u.Z)({as:S,ref:a,ownerState:R,className:(0,h.Z)(N.root,l)},k))}));function ue(e){return(0,Z.Z)("MuiFormControlLabel",e)}var pe=(0,y.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),me=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],he=(0,g.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[(0,o.Z)({},"& .".concat(pe.label),a.label),a.root,a["labelPlacement".concat((0,f.Z)(t.labelPlacement))]]}})((function(e){var a=e.theme,t=e.ownerState;return(0,u.Z)((0,o.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(pe.disabled),{cursor:"default"}),"start"===t.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===t.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===t.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,o.Z)({},"& .".concat(pe.label),(0,o.Z)({},"&.".concat(pe.disabled),{color:(a.vars||a).palette.text.disabled})))})),fe=i.forwardRef((function(e,a){var t=(0,P.Z)({props:e,name:"MuiFormControlLabel"}),r=t.className,n=t.componentsProps,o=void 0===n?{}:n,s=t.control,l=t.disabled,c=t.disableTypography,m=t.label,g=t.labelPlacement,v=void 0===g?"end":g,x=(0,d.Z)(t,me),Z=(0,b.Z)(),y=l;"undefined"===typeof y&&"undefined"!==typeof s.props.disabled&&(y=s.props.disabled),"undefined"===typeof y&&Z&&(y=Z.disabled);var w={disabled:y};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof s.props[e]&&"undefined"!==typeof t[e]&&(w[e]=t[e])}));var C=(0,H.Z)({props:t,muiFormControl:Z,states:["error"]}),k=(0,u.Z)({},t,{disabled:y,labelPlacement:v,error:C.error}),R=function(e){var a=e.classes,t=e.disabled,r=e.labelPlacement,n=e.error,o={root:["root",t&&"disabled","labelPlacement".concat((0,f.Z)(r)),n&&"error"],label:["label",t&&"disabled"]};return(0,p.Z)(o,ue,a)}(k),S=m;return null==S||S.type===de||c||(S=(0,j.jsx)(de,(0,u.Z)({component:"span",className:R.label},o.typography,{children:S}))),(0,j.jsxs)(he,(0,u.Z)({className:(0,h.Z)(R.root,r),ownerState:k,ref:a},x,{children:[i.cloneElement(s,w),S]}))})),ge=t(66362),ve=t(17133),be=t(36151),xe=t(74027),Ze=t(78983),ye=(t(24846),t(43504)),we=t(16871),je=t(74569),Ce=t.n(je),ke=(t(75985),t(5462),function(){var e=(0,we.s0)(),a=(0,i.useState)({fullname:"",username:"",age:"",weight:"",gender:"",email:"",password:"",cpassword:""}),t=(0,l.Z)(a,2),d=t[0],u=t[1],p=(0,i.useState)(""),m=(0,l.Z)(p,2),h=m[0],f=m[1],g=function(e){var a=e.target.name,t=e.target.value;u((0,s.Z)((0,s.Z)({},d),{},(0,o.Z)({},a,t))),console.log(a,t),f("")},v=function(){var a=(0,n.Z)((0,r.Z)().mark((function a(t){var n,o,s,l,i,c,u,p,m;return(0,r.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.preventDefault(),n=d.fullname,o=d.username,s=d.age,l=d.weight,i=d.gender,c=d.email,u=d.password,p=d.cpassword,m=/[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g.test(c),""===n||""===o||""===s||""===l||""===i||""===c||""===u||""===p?f("Fields cant be empty"):u!==p?f("Password must be matched"):u.length<8?f("Password must be of minimum 8 characters"):!1===m?f("Enter a valid email"):(f(""),Ce().get("http://localhost:3001/api/users/userValidation/").then((function(a){if(1===a.data.success){var t=a.data.data,r=t.filter((function(e){return e.name==o})),d=t.filter((function(e){return e.email==c}));r.length?f("Username already exist"):d.length?f("Email already exist"):Ce().post("http://localhost:3001/api/users/",{fullname:n,username:o,age:s,weight:l,gender:i,email:c,password:u,cpassword:p}).then((function(a){console.log("res"),1===a.data.success&&e("/login"),Ce().post("http://localhost:3001/api/users/userDetails",{fullname:n,username:o,age:s,weight:l,gender:i,email:c,password:u,cpassword:p}).then((function(e){console.log(e),1===e.data.success&&console.log("User Details Table Created")})).catch((function(e){console.log(e),0===e.data.success&&console.log("User Details Table Not Created")}))})).catch((function(e){console.log(e),0===e.data.success&&alert("Registration Unsuccessful")}))}})));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return(0,j.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:(0,j.jsx)(Ze.KB,{children:(0,j.jsx)(Ze.rb,{className:"justify-content-center",children:(0,j.jsx)(Ze.b7,{md:8,children:(0,j.jsxs)(Ze.dL,{style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},children:[(0,j.jsx)(Ze.xH,{className:!0,children:(0,j.jsxs)(Ze.sl,{className:"p-4",style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},children:[(0,j.jsxs)(Ze.lx,{action:"",children:[(0,j.jsx)("h1",{children:"Register"}),(0,j.jsx)("p",{className:"text-medium-emphasis",children:"Create your account"}),(0,j.jsxs)("div",{className:"d-flex ",children:[(0,j.jsx)(Ze.YR,{className:"mb-1 me-1",children:(0,j.jsx)(c.Z,{style:{width:"100%"},name:"fullname",id:"fullname",autoComplete:"off",value:d.fullname,onChange:g,label:"Full Name",type:"text",variant:"standard"})}),(0,j.jsx)(Ze.YR,{className:"mb-1 ms-1",children:(0,j.jsx)(c.Z,{style:{width:"100%"},name:"username",id:"username",autoComplete:"off",value:d.username,onChange:g,label:"username",type:"text",variant:"standard"})})]}),(0,j.jsxs)("div",{className:"d-flex",children:[(0,j.jsx)(Ze.YR,{className:"mb-1 me-1",children:(0,j.jsx)(c.Z,{style:{width:"100%"},label:"age",type:"number",variant:"standard",name:"age",id:"age",autoComplete:"off",value:d.age,onChange:g})}),(0,j.jsx)(Ze.YR,{className:"mb-1 ms-1",children:(0,j.jsx)(c.Z,{style:{width:"100%"},label:"weight (kg)",type:"number",variant:"standard",name:"weight",id:"weight",autoComplete:"off",value:d.weight,onChange:g})})]}),(0,j.jsx)(Ze.YR,{className:"mb-3",children:(0,j.jsxs)(ge.Z,{style:{marginBottom:"-20px",marginTop:"20px"},children:[(0,j.jsx)(ve.Z,{id:"demo-row-radio-buttons-group-label",children:"Gender"}),(0,j.jsxs)(_,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"gender",value:d.gender,onChange:g,children:[(0,j.jsx)(fe,{value:"female",control:(0,j.jsx)(q,{}),label:"Female"}),(0,j.jsx)(fe,{value:"male",control:(0,j.jsx)(q,{}),label:"Male"}),(0,j.jsx)(fe,{value:"other",control:(0,j.jsx)(q,{}),label:"Other"})]})]})}),(0,j.jsx)(Ze.YR,{className:"mb-1",children:(0,j.jsx)(c.Z,{style:{width:"100%"},label:"email",type:"email",variant:"standard",name:"email",id:"email",autoComplete:"off",value:d.email,onChange:g})}),(0,j.jsx)(Ze.YR,{className:"mb-1",children:(0,j.jsx)(c.Z,{style:{width:"100%"},label:"password",type:"password",variant:"standard",name:"password",id:"password",autoComplete:"off",value:d.password,onChange:g})}),(0,j.jsx)(Ze.YR,{className:"mb-4",children:(0,j.jsx)(c.Z,{style:{width:"100%"},label:"confirm password",type:"password",variant:"standard",name:"cpassword",id:"cpassword",autoComplete:"off",value:d.cpassword,onChange:g})}),(0,j.jsx)(Ze.YR,{className:"mb-2 align-center",children:(0,j.jsx)(be.Z,{variant:"contained",type:"submit",name:"register",id:"register",onClick:v,children:"Create Account"})}),(0,j.jsx)("span",{className:"text-danger ms-1",children:h})]}),(0,j.jsxs)("p",{className:"d-flex justify-content-center",children:["Already have an account ?",(0,j.jsx)(ye.rU,{to:"/login",className:"d-flex justify-content-center",style:{textDecoration:"none",color:"red",fontStyle:"italic",marginLeft:"8px"},children:"Login"})]})]})}),(0,j.jsx)(Ze.xH,{className:"text-black bg-gradient py-5",style:{width:"44%"},children:(0,j.jsx)(Ze.sl,{className:" d-flex justify-content-center align-items-center",children:(0,j.jsx)("img",{src:xe,alt:"GIF"})})})]})})})})})})},74027:function(e,a,t){e.exports=t.p+"static/media/register.f956dab5a52313725b9f.png"}}]);
//# sourceMappingURL=140.87be8b6d.chunk.js.map