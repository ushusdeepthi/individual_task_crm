(this.webpackJsonpindividual_task_crm=this.webpackJsonpindividual_task_crm||[]).push([[0],{37:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(2),s=n.n(c),a=n(25),o=n.n(a),i=(n(37),n(3)),l=n(31),j=n(11),u=n(9),d=n(10),b=n(5),m=n(26),h=Object(c.createContext)();function O(e){var t=e.children,n=Object(c.useState)([]),s=Object(d.a)(n,2),a=s[0],o=s[1],l=Object(c.useState)({}),j=Object(d.a)(l,2),u=j[0],b=j[1],m=Object(c.useState)({}),O=Object(d.a)(m,2),x=O[0],f=O[1],p=Object(c.useState)(null),g=Object(d.a)(p,2),v=g[0],N=g[1],y=Object(i.f)(),C={customerList:a,setCustomerList:o,userInfo:u,setUserInfo:b,getItem:function(){var e=localStorage.getItem("User");fetch("https://frebi.willandskill.eu/api/v1/customers/",{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).then((function(e){console.log(e.results),o(e.results)}))},customerDetail:x,setCustomerDetail:f,customerItem:v,setCustomerItem:N,history:y};return Object(r.jsx)(h.Provider,{value:C,children:t})}function x(){var e=Object(c.useContext)(h),t=e.userInfo,n=e.history;return Object(r.jsxs)("nav",{className:"d-flex justify-content-between bg-info p-3 ",children:[Object(r.jsx)("div",{children:t&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("h6",{children:["User: ",t.firstName," ",t.lastName," "]}),Object(r.jsxs)("h6",{children:["E-mail: ",t.email," "]})," "]})}),Object(r.jsx)("h6",{className:"align-self-center",children:Object(r.jsx)(b.b,{className:"text-dark",to:"/customers",children:"Home"})}),Object(r.jsx)("h6",{className:"align-self-center",children:Object(r.jsx)(b.b,{className:"text-dark",to:"/Create",children:"Create"})}),Object(r.jsxs)("h6",{className:"align-self-center",onClick:function(){localStorage.removeItem("User"),n.push("/login"),alert("Will you discontinue the session!!!")},children:["Logout ",Object(r.jsx)(m.a,{})]})]})}var f=n(13),p=n(14);function g(){var e=Object(f.a)(["\n    border-collapse: separate;\n    background:#fff;\n    border-radius:5px;\n    margin:50px auto;\n    box-shadow: 0px 0px 5px rgba(0,0,0,0.3); \n\ntbody tr td {\n  font-family: 'Open Sans', sans-serif;\n  font-weight:900;\n  color:#5f6062;\n  font-size:13px;\n  padding:20px 20px 20px 20px;\n  border-bottom:1px solid #e0e0e0;\n  \n}\n\n\n"]);return g=function(){return e},e}function v(){var e=Object(f.a)(["\n    color: purple; \n    text-shadow: 0 0 10px rgba(0,0,0,0.3); \n    letter-spacing:1px; \n    text-align:center;\n    margin:1em;\n"]);return v=function(){return e},e}function N(){var e=Object(f.a)(["\n    background: rgba(0,0,0,0.3);\n    border: none;\n    outline: none;\n    width:",";\n    padding: 10px;\n    font-size: 13px;\n    color: #fff;\n    text-shadow: 1px 1px 1px rgba(0,0,0,0.3);\n    border: 1px solid rgba(0,0,0,0.3);\n    border-radius: 5px;   \n"]);return N=function(){return e},e}function y(){var e=Object(f.a)(["\n    border-color:red;\n    &:hover{\n        border-color:black;\n        background:red;\n    }\n    \n"]);return y=function(){return e},e}function C(){var e=Object(f.a)(["\n    cursor: pointer; \n    padding: 9px 14px; \n    border-radius: 5px;\n    background-color:#4a77d4;\n    display:block;\n"]);return C=function(){return e},e}var w=p.a.button(C()),k=Object(p.a)(w)(y()),S=p.a.input(N(),(function(e){return e.secondary?"100%":"40%"})),I=p.a.h2(v()),T=p.a.table(g());function E(){var e=Object(c.useState)({}),t=Object(d.a)(e,2),n=t[0],s=t[1],a=Object(c.useContext)(h),o=a.history,i=a.setCustomerList,b=a.customerList;a.getItem;function m(e,t,n){return Object(r.jsxs)("div",{className:"m-2 col-md-12 align-self-center",children:[Object(r.jsx)("label",{className:"w-25",htmlFor:e,children:t}),Object(r.jsx)(S,{type:n||"text",name:e,onChange:O,id:e}),Object(r.jsx)("br",{})]})}var O=function(e){s(Object(u.a)(Object(u.a)({},n),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(x,{}),Object(r.jsx)(I,{children:"Let's create a new customer"}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("form",{className:"row",onSubmit:function(e){if(e.preventDefault(),console.log(e.target.vatNr.value),!0===function(e){var t=e.trim(),n=t.slice(0,2),r=t.slice(2,13);return"SE"==n&&10===r.length&&!isNaN(r)||(alert("Vat Number should be in format SE followed by 10 digits without any space or special characters"),!1)}(e.target.vatNr.value)){var t=localStorage.getItem("User");fetch("https://frebi.willandskill.eu/api/v1/customers/",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).then((function(e){i([].concat(Object(l.a)(b),[e])),o.push("/customers")}))}},children:[m("name","Customer Name"),m("organisationNr","Organisation Number"),m("vatNr","Vat Number"),m("reference","Reference"),m("paymentTerm","Payment Term","number"),m("website","Website","url"),m("email","Customer Email","email"),m("phoneNumber","Phone Number","tel"),Object(r.jsx)(w,{className:"col-md-6 m-5",type:"submit",children:"Create Customer"})]}),Object(r.jsx)("code",{children:JSON.stringify(n)})]})]})}function U(e){var t=Object(c.useContext)(h),n=t.customerList,s=t.setCustomerList,a=t.customerItem,o=t.setCustomerItem,i=t.history,l=e.match.params.id,j="https://frebi.willandskill.eu/api/v1/customers/".concat(l,"/"),u=localStorage.getItem("User");return Object(c.useEffect)((function(){fetch(j,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(u)}}).then((function(e){return e.json()})).then((function(e){console.log(e),o(e)}))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(x,{}),a&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(I,{children:["Details about customer- ",a.name]}),Object(r.jsx)(T,{children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Organisation Number"}),Object(r.jsx)("td",{children:a.organisationNr})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"VAT Number"}),Object(r.jsx)("td",{children:a.vatNr})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Reference"}),Object(r.jsx)("td",{children:a.reference})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Payment Term"}),Object(r.jsx)("td",{children:a.paymentTerm})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Website"}),Object(r.jsx)("td",{children:a.website})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Email"}),Object(r.jsx)("td",{children:a.email})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Phone Number"}),Object(r.jsx)("td",{children:a.phoneNumber})]})]})}),Object(r.jsxs)("div",{className:"d-flex justify-content-center ",children:[Object(r.jsx)(k,{onClick:function(){fetch(j,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(u)}}).then((function(){var e=n.filter((function(e){return e.id!==a.id}));s(e),i.push("/customers")}))},children:"Delete Customer"}),Object(r.jsxs)(w,{className:"ml-5",children:[Object(r.jsx)(b.b,{className:"text-dark",to:"/customers/".concat(l,"/edit"),children:"Edit Customer"})," "]})]})]})]})}function L(e){var t=e.id,n=e.name;return Object(r.jsx)("div",{className:"col-sm-4",children:Object(r.jsx)("h5",{className:"border rounded p-3 bg-info text-center",children:Object(r.jsx)(b.b,{className:"text-dark",to:"/customers/".concat(t),children:n})})})}function D(){var e=Object(c.useContext)(h),t=e.customerList,n=e.getItem;return Object(c.useEffect)((function(){n(),console.log("hello. How are you there!!!")}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(x,{}),Object(r.jsx)(I,{children:"List of Customers"}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"row",children:t&&t.map((function(e){return Object(r.jsx)(L,Object(u.a)({},e),e.id)}))}),Object(r.jsx)("div",{className:"row justify-content-center m-3",children:Object(r.jsx)(w,{children:Object(r.jsx)(b.b,{className:"text-dark",to:"/create",children:"Create a new customer"})})})]})]})}var P=n(30);function z(){var e=Object(c.useContext)(h),t=e.history,n=e.setUserInfo,s=Object(c.useState)({email:"Deepthi.Ushus@yh.nackademin.se",password:"javascriptoramverk"}),a=Object(d.a)(s,2),o=a[0],i=a[1];function l(e){i(Object(u.a)(Object(u.a)({},o),{},Object(j.a)({},e.target.name,e.target.value))),console.log(o)}return Object(r.jsxs)("div",{className:"w-25 mx-auto mt-10",children:[Object(r.jsx)(I,{children:"Login page"}),Object(r.jsx)("div",{className:"text-center",children:Object(r.jsx)(P.a,{})}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r={email:o.email,password:o.password};fetch("https://frebi.willandskill.eu/api-token-auth/",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("User",e.token),function(){var e=localStorage.getItem("User");fetch("https://frebi.willandskill.eu/api/v1/me/",{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).then((function(e){console.log(e),n(e)}))}(),t.push("/customers")}))},children:[Object(r.jsx)("label",{htmlFor:"email",children:"Email"}),Object(r.jsx)(S,{secondary:!0,type:"email",id:"email",name:"email",value:o.email,onChange:l}),Object(r.jsx)("label",{htmlFor:"password",children:"Password"}),Object(r.jsx)(S,{secondary:!0,type:"text",id:"password",name:"password",value:o.password,onChange:l}),Object(r.jsx)(w,{className:"w-100 mt-3",type:"submit",children:"Login"})]})]})}function F(e){var t=e.match.params.id,n=Object(i.f)(),s=Object(c.useContext)(h),a=s.customerDetail,o=s.setCustomerDetail;function l(e){var t=e.target.name,n=e.target.value,r=Object(u.a)(Object(u.a)({},a),{},Object(j.a)({},t,n));o(r)}function d(e,t,n){return Object(r.jsxs)("tr",{children:[Object(r.jsxs)("td",{children:[" ",Object(r.jsx)("label",{htmlFor:e,children:t})]}),Object(r.jsx)("td",{children:Object(r.jsx)(S,{secondary:!0,type:n||"text",name:e,value:a[e]||"",id:e,onChange:l})})]})}return Object(c.useEffect)((function(){!function(){var e="https://frebi.willandskill.eu/api/v1/customers/".concat(t,"/"),n=localStorage.getItem("User");fetch(e,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})).then((function(e){console.log(e),o(e)}))}()}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)(x,{}),Object(r.jsx)(I,{children:"Update Customer"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r="https://frebi.willandskill.eu/api/v1/customers/".concat(t,"/"),c=localStorage.getItem("User");fetch(r,{method:"PUT",body:JSON.stringify(a),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c)}}).then((function(e){return e.json()})).then((function(e){console.log(e),n.push("/customers/".concat(t))}))},children:[Object(r.jsx)(T,{children:Object(r.jsxs)("tbody",{children:[d("name","Customer Name"),d("organisationNr","Organisation Number"),d("vatNr","Vat Number"),d("reference","Reference"),d("paymentTerm","Payment Term","number"),d("website","Website","url"),d("email","Customer Email","email"),d("phoneNumber","Phone Number","tel")]})}),Object(r.jsx)(w,{className:"mx-auto",type:"submit",children:"Update Customer"})]})]})}function A(){return Object(r.jsx)("div",{children:Object(r.jsx)(O,{children:Object(r.jsxs)(i.c,{children:[Object(r.jsx)(i.a,{path:"/customers/:id/edit",component:F}),Object(r.jsx)(i.a,{path:"/customers/:id",component:U}),Object(r.jsx)(i.a,{path:"/customers",children:Object(r.jsx)(D,{})}),Object(r.jsx)(i.a,{path:"/create",children:Object(r.jsx)(E,{})}),Object(r.jsx)(i.a,{path:"/",children:Object(r.jsx)(z,{})})]})})})}n(44);o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(b.a,{children:Object(r.jsx)(A,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.7573af43.chunk.js.map