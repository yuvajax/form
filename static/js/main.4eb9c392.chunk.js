(this["webpackJsonpant-form"]=this["webpackJsonpant-form"]||[]).push([[0],{198:function(e,a,s){},200:function(e,a,s){},368:function(e,a,s){"use strict";s.r(a);var t=s(0),r=s.n(t),n=s(34),c=s.n(n),l=(s(198),s(6)),i=s(5),o=(s(199),s(200),s.p+"static/media/image.0c6d32a8.jpg"),j=s(371),u=s(188),m=s(372),d=s(95),b=s(61),h=s(185),p=s.n(h),O=s(178),f=s.n(O),x=s(13);var g=function(e){var a=e.score,s=f()(a),t=100*s.score/4,r=function(){switch(s.score){case 0:return"#828282";case 1:return"#ea1111";case 2:return"#ffad00";case 3:return"rgba(101, 219, 111, 0.815)";case 4:return"#00b500";default:return"none"}};return Object(x.jsx)("div",{className:"password",style:{width:"".concat(t,"%"),background:r(),height:"4px"},children:Object(x.jsx)("p",{style:{color:r()},children:function(){switch(s.score){case 1:return"Weak";case 2:return"Fear";case 3:return"Good";case 4:return"Strong";default:return""}}()})})};s(370);var w=function(e,a){e.handleSubmits;var s,r=Object(t.useState)(""),n=Object(l.a)(r,2),c=n[0],h=n[1],O=j.a.useForm(),f=Object(l.a)(O,1)[0],w=Object(t.useState)([]),v=Object(l.a)(w,2),P=(v[0],v[1]),y=Object(t.useState)([]),N=Object(l.a)(y,2),F=N[0],I=N[1],S=Object(t.useState)(!1),C=Object(l.a)(S,2);return C[0],C[1],Object(x.jsxs)("section",{children:[Object(x.jsx)("div",{className:"imgbx",children:Object(x.jsx)("img",{src:o})}),Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"inner-container",children:[Object(x.jsx)("h1",{children:"Register"}),Object(x.jsxs)(j.a,{className:"form-container",form:f,name:"register",onFinish:function(e){P(e),console.log("Values",e),""!=e&&u.b.success("Registered Successfully")},onFinishfail:function(e){I(e),console.log("Error",F)},children:[Object(x.jsx)(j.a.Item,{className:"label_container",label:"Firstname",name:"firstname",rules:[{required:!0,message:"Please input your Firstname!",whitespace:!0}],children:Object(x.jsx)(m.a,{placeholder:"Firstname"})}),Object(x.jsx)(j.a.Item,{className:"label_container",label:"Lastname",name:"lastname",children:Object(x.jsx)(m.a,{placeholder:"Lastname"})}),Object(x.jsx)(j.a.Item,{className:"label_container",label:"Phone",name:"phone",rules:[{required:!0,message:"Please input your phone!"},{validator:function(e,a){return a<0||a>9&&a.length<11?Promise.resolve():Promise.reject("Enter Valid Number")}}],children:Object(x.jsx)(m.a,{placeholder:"Phone"})}),Object(x.jsx)(j.a.Item,{className:"label_container",label:"Email",name:"email",rules:[{type:"email",message:"Invalid Email"},{required:!0,message:"Please input your Email!"}],children:Object(x.jsx)(m.a,{placeholder:"Email"})}),Object(x.jsx)(j.a.Item,(s={className:"label_container"},Object(i.a)(s,"className","passcontainer"),Object(i.a)(s,"label","Password"),Object(i.a)(s,"name","password"),Object(i.a)(s,"onChange",(function(e){return h(e.target.value)})),Object(i.a)(s,"rules",[{required:!0,message:"Please input your password!"}]),Object(i.a)(s,"children",Object(x.jsx)(m.a.Password,{placeholder:"Password"})),s)),Object(x.jsx)("div",{className:"passwords",children:Object(x.jsx)(g,{score:c})}),Object(x.jsx)(j.a.Item,{className:"label_container",style:{marginLeft:"-60px"},label:"Conform Password",name:"conformpassword",dependencies:[p.a],rules:[{required:!0,message:"Please input your password!"},function(e){var a=e.getFieldValue;return{validator:function(e,s){return s&&a("password")!==s?Promise.reject("Password Mismatch"):Promise.resolve()}}}],children:Object(x.jsx)(m.a.Password,{placeholder:"Password"})}),Object(x.jsx)(j.a.Item,{name:"remember",valuePropName:"checked",wrapperCol:{offset:8,span:16},children:Object(x.jsx)(d.a,{children:"Remember me"})}),Object(x.jsx)(j.a.Item,{shouldUpdate:!0,wrapperCol:{offset:8,span:16},children:function(){return Object(x.jsxs)(t.Fragment,{children:[Object(x.jsx)(b.a,{type:"primary",htmlType:"submit",children:"Register"}),Object(x.jsx)(b.a,{style:{marginLeft:20},htmlType:"button",onClick:function(){return f.resetFields(h("0"))},children:"Reset"})]})}})]})]})})]})};var v=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(w,{})})},P=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,373)).then((function(a){var s=a.getCLS,t=a.getFID,r=a.getFCP,n=a.getLCP,c=a.getTTFB;s(e),t(e),r(e),n(e),c(e)}))};c.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(v,{})}),document.getElementById("root")),P()}},[[368,1,2]]]);
//# sourceMappingURL=main.4eb9c392.chunk.js.map