(this["webpackJsonpsmart-brain-v2"]=this["webpackJsonpsmart-brain-v2"]||[]).push([[0],{33:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){},78:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),i=n(27),s=n.n(i),r=(n(33),n(9)),a=(n(34),n(35),n(0)),l=function(){return Object(a.jsx)("nav",{className:"container d-flex justify-content-end pt-3",children:Object(a.jsx)("p",{className:"btn btn-warning",children:"Sign Out"})})},u=n(28),b=(n(37),function(){return Object(a.jsx)("div",{className:"container d-flex justify-content-center justify-content-md-start",children:Object(a.jsx)(u.a,{children:Object(a.jsx)("div",{className:"logo"})})})}),j=(n(14),n(38),function(t){var e=t.onInputChange,n=t.onSubmit;return Object(a.jsxs)("div",{className:"d-flex justify-content-center align-items-center pt-2 mt-3",children:[Object(a.jsx)("input",{type:"text",className:"col-6 inputField",onChange:e}),Object(a.jsx)("button",{className:"btn btn-primary col-2 col-md-1",onClick:n,children:"Detect"})]})});var d=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Hey Sibil,your current rank is..."}),Object(a.jsx)("h1",{children:"#1"})]})},f=(n(39),function(t){var e=t.imgUrl,n=t.boxFace;return console.log(n.leftcol),Object(a.jsx)("div",{className:"container mt-3 mb-3 d-flex justify-content-center",children:Object(a.jsxs)("div",{style:{position:"absolute"},children:[Object(a.jsx)("img",{id:"inputImage",src:e,alt:""}),Object(a.jsx)("div",{className:"bounding-box",style:{top:n.toprow,right:n.rightcol,left:n.leftcol,bottom:n.bottomrow}})]})})}),m=n(13),g=n.n(m),x=new g.a.App({apiKey:"513366b794d240b590d899434f9b91f3"});var O=function(){var t=Object(c.useState)(),e=Object(r.a)(t,2),n=e[0],o=e[1],i=Object(c.useState)(),s=Object(r.a)(i,2),u=s[0],m=s[1],O=Object(c.useState)({}),h=Object(r.a)(O,2),p=h[0],v=h[1];return Object(c.useEffect)((function(){console.log("Updated")})),Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(l,{}),Object(a.jsx)(b,{}),Object(a.jsx)(d,{}),Object(a.jsx)("h2",{className:"mt-5",children:"This Magic Brain will detect faces in your pictures, Give it a try"}),Object(a.jsx)(j,{onInputChange:function(t){o(t.target.value,n),console.log(n)},onSubmit:function(){n?(console.log("Clicked! ".concat(n," is passed")),m(n),console.log(u),x.models.predict(g.a.FACE_DETECT_MODEL,n).then((function(t){var e;console.log(t.outputs[0].data.regions[0].region_info.bounding_box),e=function(t){var e=t.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputImage"),c=Number(n.width),o=Number(n.height);return console.log(c,o),{leftcol:e.left_col*c,rightcol:c-e.right_col*c,bottomrow:o-e.bottom_row*o,toprow:e.top_row*o}}(t),v(e)}),(function(t){}))):console.log("Please enter a URL")}}),Object(a.jsx)(f,{imgUrl:u,boxFace:p})]})})};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.bbfe6e3a.chunk.js.map