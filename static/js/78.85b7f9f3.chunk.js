"use strict";(self.webpackChunkdiabetestrackerapp=self.webpackChunkdiabetestrackerapp||[]).push([[78],{10056:function(e,A,a){a.d(A,{x6:function(){return J},Lk:function(){return j},qh:function(){return b},tf:function(){return V},S8:function(){return ee},ns:function(){return ne},q3:function(){return oe}});var n=a(1413),t=a(72791),s=a(16871),r=a(74165),o=a(15861),i=a(4942),c=a(70885),l=a(74569),m=a.n(l),u=a(80184),d=function(){var e=(0,t.useState)({userSugar:"",userMeal:"",userLaunch:"",userDinner:"",userExercise:""}),A=(0,c.Z)(e,2),a=A[0],s=A[1],l=function(e){var A=e.target.name,t=e.target.value;s((0,n.Z)((0,n.Z)({},a),{},(0,i.Z)({},A,t)))},d=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(A){var n,t,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:A.preventDefault(),console.log("Submit running "),n="",t=JSON.parse(localStorage.getItem("MyUser")),s=t.email,console.log(s),null!=s&&""!=s&&void 0!=s?m().put("http://localhost:3001/api/users/getuser",{email:s},{headers:{"Access-control-allow-origin":"*","Content-type":"application/json; charset=utf-8"}}).then((function(e){if(1==e.data.success){console.log(e.data.data.name),n=e.data.data.name;var A=a.userSugar,t=a.userMeal,s=a.userLaunch,r=a.userDinner,o=a.userExercise;m().post("http://localhost:3001/api/userDetails",{sugar_level:A,morning_meal:t,launch:s,dinner:r,exercise_time:o,username:n}).then((function(e){1==e.data.success?alert("Submitted Successfully"):alert("Not Submitted")})).catch((function(e){console.log(e)}))}})).catch((function(e){console.log(e)})):console.log("email  not obtained");case 7:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}();return(0,u.jsxs)("div",{style:{background:"light dim",border:"0.5px solid black",padding:"1rem"},children:[(0,u.jsx)("div",{style:{textAlign:"center",marginBottom:"2rem",fontSize:"2rem"},children:(0,u.jsx)("b",{children:"Enter Your Details Here"})}),(0,u.jsxs)("form",{children:[(0,u.jsxs)("div",{className:"form-outline mb-4",children:[(0,u.jsx)("input",{type:"text",name:"userSugar",id:"userSugar",className:"form-control",autoComplete:"off",value:a.userSugar,onChange:l}),(0,u.jsx)("label",{className:"form-label",htmlFor:"form5Example1",children:"Blood Sugar Level"})]}),(0,u.jsxs)("div",{className:"form-outline mb-4",children:[(0,u.jsx)("input",{type:"text",id:"userMeal",name:"userMeal",className:"form-control",autoComplete:"off",value:a.userMeal,onChange:l}),(0,u.jsx)("label",{className:"form-label",htmlFor:"form5Example2",children:"Your Morning Meal"})]}),(0,u.jsxs)("div",{className:"form-outline mb-4",children:[(0,u.jsx)("input",{type:"text",id:"userLaunch",name:"userLaunch",className:"form-control",autoComplete:"off",value:a.userLaunch,onChange:l}),(0,u.jsx)("label",{className:"form-label",htmlFor:"form5Example2",children:"Your Launch"})]}),(0,u.jsxs)("div",{className:"form-outline mb-4",children:[(0,u.jsx)("input",{type:"text",id:"userDinner",name:"userDinner",className:"form-control",autoComplete:"off",value:a.userDinner,onChange:l}),(0,u.jsx)("label",{className:"form-label",htmlFor:"form5Example2",children:"Your Dinner"})]}),(0,u.jsxs)("div",{className:"form-outline mb-4",children:[(0,u.jsx)("input",{type:"text",id:"userExercise",name:"userExercise",className:"form-control",autoComplete:"off",value:a.userExercise,onChange:l}),(0,u.jsx)("label",{className:"form-label",htmlFor:"form5Example2",children:"Your Exercise Time"})]}),(0,u.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-4",onClick:d,children:"Submit"})]})]})},k=t.lazy((function(){return Promise.all([a.e(603),a.e(905)]).then(a.bind(a,93905))})),g=t.lazy((function(){return a.e(304).then(a.bind(a,23304))})),h=t.lazy((function(){return a.e(243).then(a.bind(a,21243))})),S=t.lazy((function(){return a.e(66).then(a.bind(a,72066))})),p=t.lazy((function(){return a.e(198).then(a.bind(a,75198))})),B=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",element:k},{path:"/addDetails",name:"Add Details",element:d},{path:"/doctor",name:"Doctor",element:t.lazy((function(){return a.e(829).then(a.bind(a,37250))}))},{path:"/profile",name:"Profile",element:t.lazy((function(){return Promise.all([a.e(637),a.e(621)]).then(a.bind(a,6858))}))},{path:"/diabetes_prediction",name:"Prediction",element:t.lazy((function(){return a.e(972).then(a.bind(a,87972))}))},{path:"/notifications",name:"Notifications",element:g,exact:!0},{path:"/notifications/alerts",name:"Alerts",element:g},{path:"/notifications/badges",name:"Badges",element:h},{path:"/notifications/modals",name:"Modals",element:S},{path:"/notifications/toasts",name:"Toasts",element:p}],f=a(78983),C=function(){var e=(0,s.TH)().pathname,A=function(e){var A=[];return e.split("/").reduce((function(e,a,n,t){var s="".concat(e,"/").concat(a),r=function(e,A){var a=A.find((function(A){return A.path===e}));return!!a&&a.name}(s,B);return r&&A.push({pathname:s,name:r,active:n+1===t.length}),s})),A}(e);return(0,u.jsxs)(f.fj,{className:"m-0 ms-2",children:[(0,u.jsx)(f.Sd,{href:"/",children:"Home"}),A.map((function(e,A){return(0,t.createElement)(f.Sd,(0,n.Z)((0,n.Z)({},e.active?{active:!0}:{href:e.pathname}),{},{key:A}),e.name)}))]})},J=t.memo(C),x=function(){return(0,u.jsx)(f.KB,{lg:!0,children:(0,u.jsx)(t.Suspense,{fallback:(0,u.jsx)(f.LQ,{color:"primary"}),children:(0,u.jsxs)(s.Z5,{children:[B.map((function(e,A){return e.element&&(0,u.jsx)(s.AW,{path:e.path,exact:e.exact,name:e.name,element:(0,u.jsx)(e.element,{})},A)})),(0,u.jsx)(s.AW,{path:"/",element:(0,u.jsx)(s.Fg,{to:"dashboard",replace:!0})})]})})})},j=t.memo(x),Q=function(){return(0,u.jsxs)(f.pG,{children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("a",{href:"https://coreui.io",target:"_blank",rel:"noopener noreferrer",children:"DIABETES TRACKER"}),(0,u.jsx)("span",{className:"ms-1",children:"\xa9 2022 creativeLabs."})]}),(0,u.jsxs)("div",{className:"ms-auto",children:[(0,u.jsx)("span",{className:"me-1",children:"Powered by"}),(0,u.jsx)("a",{href:"https://coreui.io/react",target:"_blank",rel:"noopener noreferrer",children:"Diabetes Tracker"})]})]})},b=t.memo(Q),I=a(43504),v=a(59434),w=a(24846),D=a(31389),Z=a(1883),N=a(62412),E=a(65487),U=a(63232),F=a.p+"static/media/8.35ee8919ea545620a475.jpg",M=function(e){e.updateUser;return(0,u.jsxs)(f.w5,{variant:"nav-item",children:[(0,u.jsx)(f.SQ,{placement:"bottom-end",className:"py-0",caret:!1,children:(0,u.jsx)(f.cU,{src:F,size:"md"})}),(0,u.jsxs)(f.$H,{className:"pt-0",placement:"bottom-end",children:[(0,u.jsx)(f.nR,{className:"bg-light fw-semibold py-2",children:"Account"}),(0,u.jsxs)(f.$f,{href:"http://localhost:3000/#/updates",children:[(0,u.jsx)(w.Z,{icon:Z.$,className:"me-2"}),"Updates",(0,u.jsx)(f.C_,{color:"info",className:"ms-2",children:"42"})]}),(0,u.jsx)(f.nR,{className:"bg-light fw-semibold py-2",children:"Settings"}),(0,u.jsxs)(f.$f,{href:"http://localhost:3000/#/profile",children:[(0,u.jsx)(w.Z,{icon:N.E,className:"me-2"}),"Profile"]}),(0,u.jsxs)(f.$f,{href:"http://localhost:3000/#/settings",children:[(0,u.jsx)(w.Z,{icon:E.M,className:"me-2"}),"Settings"]}),(0,u.jsx)(f.lK,{}),(0,u.jsxs)(f.$f,{href:"http://localhost:3000/#/login",children:[(0,u.jsx)(w.Z,{icon:U.U,className:"me-2",onClick:function(){localStorage.removeItem("MyUser")}}),"Lock Account"]})]})]})},Y=["608 134",'\n  <title>coreui react pro</title>\n  <g>\n    <g style="fill:#00a1ff">\n      <path d="M362.0177,90.1512,353.25,69.4149a.2507.2507,0,0,0-.2559-.1914H343.01a.2263.2263,0,0,0-.2559.2559V90.0233a.5657.5657,0,0,1-.64.64h-1.2163a.5652.5652,0,0,1-.64-.64V46.5028a.5655.5655,0,0,1,.64-.64H353.442a9.9792,9.9792,0,0,1,7.7437,3.2324A12.2,12.2,0,0,1,364.13,57.64a12.4389,12.4389,0,0,1-2.24,7.584,9.37,9.37,0,0,1-6.08,3.7441c-.1709.086-.2139.1915-.128.3194l8.7041,20.6084.064.2558q0,.5127-.5757.5118h-1.1523A.703.703,0,0,1,362.0177,90.1512ZM342.754,48.3593v18.496a.2259.2259,0,0,0,.2559.2559h10.3037a7.6713,7.6713,0,0,0,6.0166-2.5918,9.8807,9.8807,0,0,0,2.3037-6.8164,10.2875,10.2875,0,0,0-2.272-6.9756,7.6033,7.6033,0,0,0-6.0483-2.624H343.01A.2263.2263,0,0,0,342.754,48.3593Z"/>\n      <path d="M401.3263,48.1034H381.2945a.2262.2262,0,0,0-.2558.2559v18.496a.2259.2259,0,0,0,.2558.2559h13.8238a.5664.5664,0,0,1,.6406.64v.96a.5663.5663,0,0,1-.6406.6406H381.2945a.2263.2263,0,0,0-.2558.2559v18.56a.2258.2258,0,0,0,.2558.2558h20.0318a.5671.5671,0,0,1,.6406.6407v.96a.566.566,0,0,1-.6406.64H379.1827a.5653.5653,0,0,1-.64-.64V46.5028a.5656.5656,0,0,1,.64-.64h22.1436a.5664.5664,0,0,1,.6406.64v.96A.5663.5663,0,0,1,401.3263,48.1034Z"/>\n      <path d="M439.047,90.1512l-2.4317-8.832a.2971.2971,0,0,0-.32-.1924H419.5274a.2957.2957,0,0,0-.32.1924l-2.3681,8.7676a.6577.6577,0,0,1-.7036.5762H414.919a.5385.5385,0,0,1-.5756-.7041l12.0317-43.584a.6436.6436,0,0,1,.7041-.5117h1.6a.6442.6442,0,0,1,.7041.5117l12.16,43.584.0644.1923q0,.5127-.64.5118h-1.2163A.6428.6428,0,0,1,439.047,90.1512ZM419.9435,78.9188a.3031.3031,0,0,0,.2236.0967h15.4883a.3048.3048,0,0,0,.2236-.0967c.0645-.0635.0742-.1162.0322-.1592l-7.872-28.9287c-.043-.0849-.086-.1279-.128-.1279s-.0859.043-.1279.1279L419.9112,78.76C419.8683,78.8026,419.879,78.8553,419.9435,78.9188Z"/>\n      <path d="M456.6017,87.911a11.6372,11.6372,0,0,1-3.3277-8.7041V57.1913a11.4158,11.4158,0,0,1,3.36-8.5762,12.0941,12.0941,0,0,1,8.8-3.2637,12.2566,12.2566,0,0,1,8.8643,3.2315,11.3927,11.3927,0,0,1,3.36,8.6084v.64a.5663.5663,0,0,1-.6406.6407l-1.28.0634q-.6408,0-.64-.5761v-.8321a9.289,9.289,0,0,0-2.6558-6.9121,10.6734,10.6734,0,0,0-14.0161,0,9.2854,9.2854,0,0,0-2.6563,6.9121V79.3993a9.2808,9.2808,0,0,0,2.6563,6.9121,10.67,10.67,0,0,0,14.0161,0,9.2843,9.2843,0,0,0,2.6558-6.9121v-.7686q0-.5757.64-.5752l1.28.0635a.5667.5667,0,0,1,.6406.6406v.5118a11.4952,11.4952,0,0,1-3.36,8.64,13.6227,13.6227,0,0,1-17.6963,0Z"/>\n      <path d="M514.4376,46.5028v.96a.5658.5658,0,0,1-.64.6406H503.046a.2263.2263,0,0,0-.2559.2559v41.664a.566.566,0,0,1-.6406.64h-1.2158a.5652.5652,0,0,1-.64-.64V48.3593a.2266.2266,0,0,0-.2558-.2559H489.8619a.5656.5656,0,0,1-.64-.6406v-.96a.5656.5656,0,0,1,.64-.64H513.798A.5658.5658,0,0,1,514.4376,46.5028Z"/>\n      <path d="M522.0665,89.5116a2.8385,2.8385,0,0,1-.8-2.0488,2.9194,2.9194,0,0,1,.8-2.1114,2.7544,2.7544,0,0,1,2.08-.832,2.8465,2.8465,0,0,1,2.9438,2.9434,2.7541,2.7541,0,0,1-.832,2.08,2.9221,2.9221,0,0,1-2.1118.8008A2.754,2.754,0,0,1,522.0665,89.5116Z"/>\n      <path d="M542.4054,88.0077a11.3123,11.3123,0,0,1-3.2-8.416v-5.44a.5656.5656,0,0,1,.64-.64h1.2158a.5661.5661,0,0,1,.64.64v5.5039a9.1424,9.1424,0,0,0,2.5283,6.72,8.9745,8.9745,0,0,0,6.6875,2.5605,8.7908,8.7908,0,0,0,9.28-9.28V46.5028a.5655.5655,0,0,1,.64-.64h1.2163a.566.566,0,0,1,.64.64V79.5917a11.2545,11.2545,0,0,1-3.2325,8.416,13.0618,13.0618,0,0,1-17.0556,0Z"/>\n      <path d="M580.35,88.1034a10.4859,10.4859,0,0,1-3.36-8.1279v-1.792a.5663.5663,0,0,1,.64-.6407h1.0884a.5668.5668,0,0,1,.64.6407v1.6a8.5459,8.5459,0,0,0,2.752,6.6562,10.5353,10.5353,0,0,0,7.36,2.4961,9.8719,9.8719,0,0,0,6.9761-2.3681,8.2161,8.2161,0,0,0,2.56-6.336,8.4,8.4,0,0,0-1.12-4.416,11.3812,11.3812,0,0,0-3.3281-3.3926,71.6714,71.6714,0,0,0-6.1763-3.7119,71.0479,71.0479,0,0,1-6.24-3.84,12.1711,12.1711,0,0,1-3.4238-3.68,10.2614,10.2614,0,0,1-1.28-5.3438,9.8579,9.8579,0,0,1,3.0718-7.7441,12.0122,12.0122,0,0,1,8.32-2.752q5.6954,0,8.96,3.1036a10.8251,10.8251,0,0,1,3.2642,8.2246v1.6a.5658.5658,0,0,1-.64.64h-1.1519a.5652.5652,0,0,1-.64-.64V56.8075a8.8647,8.8647,0,0,0-2.624-6.6885,9.9933,9.9933,0,0,0-7.232-2.5273,9.37,9.37,0,0,0-6.5278,2.1435,7.8224,7.8224,0,0,0-2.3682,6.1123,7.8006,7.8006,0,0,0,1.0244,4.16,10.387,10.387,0,0,0,3.0078,3.0391,62.8714,62.8714,0,0,0,5.9522,3.4882,71.0575,71.0575,0,0,1,6.72,4.2559,13.4674,13.4674,0,0,1,3.648,3.9365,10.049,10.049,0,0,1,1.28,5.1836,10.7177,10.7177,0,0,1-3.2637,8.1924q-3.2637,3.0717-8.832,3.0723Q583.71,91.1757,580.35,88.1034Z"/>\n    </g>\n    <g style="fill:#3c4b64">\n      <g>\n        <path d="M99.835,36.0577l-39-22.5167a12,12,0,0,0-12,0l-39,22.5166a12.0339,12.0339,0,0,0-6,10.3924V91.4833a12.0333,12.0333,0,0,0,6,10.3923l39,22.5167a12,12,0,0,0,12,0l39-22.5167a12.0331,12.0331,0,0,0,6-10.3923V46.45A12.0334,12.0334,0,0,0,99.835,36.0577Zm-2,55.4256a4,4,0,0,1-2,3.4641l-39,22.5167a4.0006,4.0006,0,0,1-4,0l-39-22.5167a4,4,0,0,1-2-3.4641V46.45a4,4,0,0,1,2-3.4642l39-22.5166a4,4,0,0,1,4,0l39,22.5166a4,4,0,0,1,2,3.4642Z"/>\n        <path d="M77.8567,82.0046h-2.866a4,4,0,0,0-1.9247.4934L55.7852,91.9833,35.835,80.4648V57.4872l19.95-11.5185,17.2893,9.4549a3.9993,3.9993,0,0,0,1.9192.4906h2.8632a2,2,0,0,0,2-2V51.2024a2,2,0,0,0-1.04-1.7547L59.628,38.9521a8.0391,8.0391,0,0,0-7.8428.09L31.8346,50.56a8.0246,8.0246,0,0,0-4,6.9287v22.976a8,8,0,0,0,4,6.9283l19.95,11.5186a8.0429,8.0429,0,0,0,7.8433.0879l19.19-10.5312a2,2,0,0,0,1.0378-1.7533v-2.71A2,2,0,0,0,77.8567,82.0046Z"/>\n      </g>\n      <g>\n        <path d="M172.58,45.3618a15.0166,15.0166,0,0,0-15,14.9995V77.6387a15,15,0,0,0,30,0V60.3613A15.0166,15.0166,0,0,0,172.58,45.3618Zm7,32.2769a7,7,0,0,1-14,0V60.3613a7,7,0,0,1,14,0Z"/>\n        <path d="M135.9138,53.4211a7.01,7.01,0,0,1,7.8681,6.0752.9894.9894,0,0,0,.9843.865h6.03a1.0108,1.0108,0,0,0,.9987-1.0971,15.0182,15.0182,0,0,0-15.7162-13.8837,15.2881,15.2881,0,0,0-14.2441,15.4163V77.2037A15.288,15.288,0,0,0,136.0792,92.62a15.0183,15.0183,0,0,0,15.7162-13.8842,1.0107,1.0107,0,0,0-.9987-1.0971h-6.03a.9894.9894,0,0,0-.9843.865,7.01,7.01,0,0,1-7.8679,6.0757,7.1642,7.1642,0,0,1-6.0789-7.1849V60.6057A7.1638,7.1638,0,0,1,135.9138,53.4211Z"/>\n        <path d="M218.7572,72.9277a12.1585,12.1585,0,0,0,7.1843-11.0771V58.1494A12.1494,12.1494,0,0,0,213.7921,46H196.835a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V74h6.6216l7.9154,17.4138a1,1,0,0,0,.91.5862h6.5911a1,1,0,0,0,.91-1.4138Zm-.8157-11.0771A4.1538,4.1538,0,0,1,213.7926,66h-9.8511V54h9.8511a4.1538,4.1538,0,0,1,4.1489,4.1494Z"/>\n        <path d="M260.835,46h-26a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h26a1,1,0,0,0,1-1V85a1,1,0,0,0-1-1h-19V72h13a1,1,0,0,0,1-1V65a1,1,0,0,0-1-1h-13V54h19a1,1,0,0,0,1-1V47A1,1,0,0,0,260.835,46Z"/>\n        <path d="M298.835,46h-6a1,1,0,0,0-1,1V69.6475a7.0066,7.0066,0,1,1-14,0V47a1,1,0,0,0-1-1h-6a1,1,0,0,0-1,1V69.6475a15.0031,15.0031,0,1,0,30,0V47A1,1,0,0,0,298.835,46Z"/>\n        <rect x="307.835" y="46" width="8" height="38" rx="1"/>\n      </g>\n    </g>\n  </g>\n'],V=function(e){var A=e.updateUser,a=(0,v.I0)(),n=(0,v.v9)((function(e){return e.sidebarShow}));return(0,u.jsxs)(f.PO,{position:"sticky",className:"mb-4",children:[(0,u.jsxs)(f.KB,{fluid:!0,children:[(0,u.jsx)(f.X4,{className:"ps-1",onClick:function(){return a({type:"set",sidebarShow:!n})},children:(0,u.jsx)(w.Z,{icon:D.N,size:"lg"})}),(0,u.jsx)(f.qy,{className:"mx-auto d-md-none",to:"/",children:(0,u.jsx)(w.Z,{icon:Y,height:48,alt:"Logo"})}),(0,u.jsx)(f.g3,{className:"d-none d-md-flex me-auto",children:(0,u.jsx)(f.U6,{children:(0,u.jsx)(f.AQ,{to:"/dashboard",component:I.OL,children:"Dashboard"})})}),(0,u.jsx)(f.g3,{className:"d-flex justify-content-center align-items-center",children:(0,u.jsx)(f.U6,{children:(0,u.jsx)(f.AQ,{href:"",children:(0,u.jsx)(w.Z,{icon:Z.$,size:"lg"})})})}),(0,u.jsx)(f.g3,{className:"ms-3",children:(0,u.jsx)(M,{updateUser:A})})]}),(0,u.jsx)(f.rc,{}),(0,u.jsx)(f.KB,{fluid:!0,children:(0,u.jsx)(J,{})})]})},y=a(44925),G=["component","name","badge","icon"],X=["component","name","icon","to"],q=function(e){var A=e.items,a=(0,s.TH)(),r=function(e,A,a){return(0,u.jsxs)(u.Fragment,{children:[A&&A,e&&e,a&&(0,u.jsx)(f.C_,{color:a.color,className:"ms-auto",children:a.text})]})},o=function(e,A){var a=e.component,s=e.name,o=e.badge,i=e.icon,c=(0,y.Z)(e,G),l=a;return(0,t.createElement)(l,(0,n.Z)((0,n.Z)({},c.to&&!c.items&&{component:I.OL}),{},{key:A},c),r(s,i,o))},i=function e(A,t){var s,i=A.component,c=A.name,l=A.icon,m=A.to,d=(0,y.Z)(A,X),k=i;return(0,u.jsx)(k,(0,n.Z)((0,n.Z)({idx:String(t),toggler:r(c,l),visible:a.pathname.startsWith(m)},d),{},{children:null===(s=A.items)||void 0===s?void 0:s.map((function(A,a){return A.items?e(A,a):o(A,a)}))}),t)};return(0,u.jsx)(t.Fragment,{children:A&&A.map((function(e,A){return e.items?i(e,A):o(e,A)}))})},K=["160 160",'\n  <title>coreui logo</title>\n  <g>\n    <g style="fill:#fff;">\n      <path d="M125,47.091,86,24.5743a12,12,0,0,0-12,0L35,47.091a12.0336,12.0336,0,0,0-6,10.3923v45.0334a12.0335,12.0335,0,0,0,6,10.3923l39,22.5166a11.9993,11.9993,0,0,0,12,0l39-22.5166a12.0335,12.0335,0,0,0,6-10.3923V57.4833A12.0336,12.0336,0,0,0,125,47.091Zm-2,55.4257a4,4,0,0,1-2,3.464L82,128.4974a4,4,0,0,1-4,0L39,105.9807a4,4,0,0,1-2-3.464V57.4833a4,4,0,0,1,2-3.4641L78,31.5025a4,4,0,0,1,4,0l39,22.5167a4,4,0,0,1,2,3.4641Z"/>\n      <path d="M103.0216,93.0379h-2.866a4,4,0,0,0-1.9246.4935L80.95,103.0167,61,91.4981V68.5206L80.95,57.002l17.2894,9.455a4,4,0,0,0,1.9192.4905h2.8632a2,2,0,0,0,2-2V62.2357a2,2,0,0,0-1.04-1.7547L84.793,49.9854a8.0391,8.0391,0,0,0-7.8428.09L57,61.5929A8.0243,8.0243,0,0,0,53,68.5216v22.976a8,8,0,0,0,4,6.9283l19.95,11.5185a8.0422,8.0422,0,0,0,7.8433.0879l19.19-10.5311a2,2,0,0,0,1.0378-1.7534v-2.71A2,2,0,0,0,103.0216,93.0379Z"/>\n    </g>\n  </g>\n'],R=a(34358),z=(a(82454),a(34708)),L=a(42439),P=a(11713),W=a(8301),H=a(19111),T=a(58675),O=a.p+"static/media/blood-test.76cd44d495407df7c571.png",_=[{component:f.U6,name:"Dashboard",to:"/dashboard",icon:(0,u.jsx)(w.Z,{icon:z.h,customClassName:"nav-icon"})},{component:f.fd,name:"Components"},{component:f.U6,name:"Add Details",to:"/addDetails",icon:(0,u.jsx)(w.Z,{icon:L.q,customClassName:"nav-icon"})},{component:f.U6,name:"Show Activity",to:"/showActivity",icon:(0,u.jsx)(w.Z,{icon:P.c,customClassName:"nav-icon"})},{component:f.U6,name:"Your Doctor",to:"/doctor",icon:(0,u.jsx)(w.Z,{icon:W.J,customClassName:"nav-icon"})},{component:f.U6,name:"Predict  Your Result",to:"/diabetes_prediction",icon:(0,u.jsx)(w.Z,{icon:H.g,customClassName:"nav-icon"})},{component:f.dw,name:"About Diabetes",icon:(0,u.jsx)("img",{src:O,alt:"",style:{height:"20px",margin:"0 18px 0 8px",color:"white",filter:"invert(100%)"}}),items:[{component:f.U6,name:"Causes",to:"/aboutDiabetes/causes"},{component:f.U6,name:"Symptoms",to:"/aboutDiabetes/symptoms"},{component:f.U6,name:"Types",to:"/aboutDiabetes/types"},{component:f.U6,name:"Medications",to:"/aboutDiabetes/medications"},{component:f.U6,name:"Prevention",to:"/aboutDiabetes/prevention"},{component:f.U6,name:"About Insulin",to:"/aboutDiabetes/aboutInsulin"}]},{component:f.U6,name:"About Us",to:"/About Us",icon:(0,u.jsx)(w.Z,{icon:Z.$,customClassName:"nav-icon"})},{component:f.U6,name:"Privacy and Policy",to:"/privacy and policy",icon:(0,u.jsx)(w.Z,{icon:T.o,customClassName:"nav-icon"})}],$=function(){var e=(0,v.I0)(),A=(0,v.v9)((function(e){return e.sidebarUnfoldable})),a=(0,v.v9)((function(e){return e.sidebarShow}));return(0,u.jsxs)(f.z3,{position:"fixed",unfoldable:A,visible:a,onVisibleChange:function(A){e({type:"set",sidebarShow:A})},children:[(0,u.jsxs)(f.Dl,{className:"d-none d-md-flex",to:"/",children:[(0,u.jsx)("img",{src:"data:image/png;base64,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",style:{height:"35px",filter:"invert(100%)",marginRight:"2px"},alt:"Logo"}),(0,u.jsx)("b",{style:{fontSize:"20px"},children:"Diabetes Tracker"}),(0,u.jsx)(w.Z,{className:"sidebar-brand-narrow",icon:K,height:35})]}),(0,u.jsx)(f.Xk,{children:(0,u.jsx)(R.Z,{children:(0,u.jsx)(q,{items:_})})}),(0,u.jsx)(f.iv,{className:"d-none d-lg-flex",onClick:function(){return e({type:"set",sidebarUnfoldable:!A})}})]})},ee=t.memo($),Ae={Y:"4.2"},ae=function(e){var A=e.content,a=e.href,n=e.name,t="s"===n.slice(-1),s="https://coreui.io/react/docs/".concat(Ae.Y,"/").concat(a);return(0,u.jsxs)(f.e_,{color:"info",className:"bg-white",children:[A||"A React ".concat(n," component ").concat(t?"have":"has"," been created as a native React.js version\n      of Bootstrap ").concat(n,". ").concat(n," ").concat(t?"are":"is"," delivered with some new features,\n      variants, and unique design that matches CoreUI Design System requirements."),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),"For more information please visit our official"," ",(0,u.jsx)(f.h7,{href:s,target:"_blank",children:"documentation of CoreUI Components Library for React.js"}),"."]})},ne=t.memo(ae),te=a(52001),se=a(87857),re=function(e){var A=e.children,a=e.href,n="https://coreui.io/react/docs/".concat(Ae.Y,"/").concat(a);return(0,u.jsxs)("div",{className:"example",children:[(0,u.jsxs)(f.n2,{variant:"tabs",children:[(0,u.jsx)(f.U6,{children:(0,u.jsxs)(f.AQ,{href:"#",active:!0,children:[(0,u.jsx)(w.Z,{icon:te.B,className:"me-2"}),"Preview"]})}),(0,u.jsx)(f.U6,{children:(0,u.jsxs)(f.AQ,{href:n,target:"_blank",children:[(0,u.jsx)(w.Z,{icon:se.I,className:"me-2"}),"Code"]})})]}),(0,u.jsx)(f.gr,{className:"rounded-bottom",children:(0,u.jsx)(f.IA,{className:"p-3 preview",visible:!0,children:A})})]})},oe=t.memo(re)},66265:function(e,A,a){a.r(A);a(72791);var n=a(10056),t=a(80184);A.default=function(e){var A=e.updateUser;return(0,t.jsxs)("div",{children:[(0,t.jsx)(n.S8,{}),(0,t.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[(0,t.jsx)(n.tf,{updateUser:A}),(0,t.jsx)("div",{className:"body flex-grow-1 px-3",children:(0,t.jsx)(n.Lk,{})}),(0,t.jsx)(n.qh,{})]})]})}}}]);
//# sourceMappingURL=78.85b7f9f3.chunk.js.map