(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{154:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(30),s=n.n(a),i=n(16),o=n(66),u=n(15),l=n(5),j=n.n(l),p=n(14),b=n(47),d=n.n(b),f="/api/",h=d.a.create({withCredentials:!0}),O=function(e,t){return v(e,"GET",t)},m=function(e,t){return v(e,"POST",t)},x=function(e,t){return v(e,"PUT",t)},g=function(e,t){return v(e,"DELETE",t)};function v(e){return w.apply(this,arguments)}function w(){return w=Object(p.a)(j.a.mark((function e(t){var n,c,r,a=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"GET",c=a.length>2&&void 0!==a[2]?a[2]:null,e.prev=2,e.next=5,h({url:"".concat(f).concat(t),method:n,data:c,params:"GET"===n?c:null});case 5:return r=e.sent,e.abrupt("return",r.data);case 9:throw e.prev=9,e.t0=e.catch(2),console.log("Had Issues ".concat(n,"ing to the backend, endpoint: ").concat(t,", with data: ").concat(c)),console.dir(e.t0),e.t0.response&&e.t0.response.status,e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,9]])}))),w.apply(this,arguments)}var y={getUsers:function(){return O("user")},getById:function(e){return O("user/".concat(e))},remove:function(e){return g("user/".concat(e))},update:function(e){return E.apply(this,arguments)},login:function(e){return C.apply(this,arguments)},signup:function(e){return k.apply(this,arguments)},logout:function(){return N.apply(this,arguments)},getLoggedInUser:function(){return A.apply(this,arguments)}};function E(){return(E=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("user/".concat(t._id),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("auth/login",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m("auth/signup",t);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),console.log("service",e.t0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function N(){return(N=Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("auth/logout");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return(A=Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("user/loggedInUser");case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}window.userService=y;var S={addTransfer:function(e,t){return T.apply(this,arguments)},getTransfers:function(){return I.apply(this,arguments)},getTransfersByContactId:function(e){return R.apply(this,arguments)}};function T(){return(T=Object(p.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("transfer/",{contactEmail:t,amount:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("transfer/");case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function R(){return(R=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("transfer/".concat(t));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}var F=function(){return function(){var e=Object(p.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.getTransfers();case 2:n=e.sent,t({type:"SET_TRANSFERS",transfers:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=function(){return function(){var e=Object(p.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getLoggedInUser();case 2:n=e.sent,t({type:"SET_USER",user:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},B=n(1);function U(e){var t=e.onClick,n=e.Icon,c=e.children,r=e.className;return Object(B.jsxs)("button",{className:r,onClick:t,children:[Object(B.jsx)(n,{}),c]})}var P=n.p+"static/media/users.2e1249bc.png",L=n.p+"static/media/back.00987031.png",z=n(6),G=n(222),H=n(223),_=n(209),M=n.p+"static/media/bitcoin.2d4930d3.gif",X=n(214),J={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"#B8C0C6",border:"2px solid #000",boxShadow:24,p:4,overflow:"auto",maxHeight:"80vh"},V=function(){var e=Object(i.c)((function(e){return e.userReducer.user})),t=Object(u.f)(),n=c.useState(!1),r=Object(z.a)(n,2),a=r[0],s=r[1],o=function(){return s(!1)},l={display:"flex",flexDirection:"row",gap:"20px",alignItems:"center",border:"1px solid black",padding:"10px",bgcolor:"#CEF6FF",cursor:"pointer",borderRadius:"10px"};return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(U,{onClick:function(){return s(!0)},Icon:function(){return Object(B.jsx)("img",{src:M,alt:""})},className:"bitcoin-gif"}),Object(B.jsx)(_.a,{open:a,onClose:o,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(B.jsxs)(G.a,{sx:J,children:[Object(B.jsx)(H.a,{variant:"h2",children:"Select Contact"}),e.contacts.map((function(e){return Object(B.jsxs)(G.a,{sx:l,onClick:function(){return n=e._id,o(),void t.push("/contact/".concat(n));var n},children:[Object(B.jsx)(X.a,{alt:"",src:e.contactImg}),Object(B.jsx)(H.a,{children:e.contactName})]},e._id)}))]})})]})},Q=function(){var e=Object(i.c)((function(e){return e.userReducer.user})),t=Object(u.f)(),n=Object(i.b)();Object(c.useEffect)((function(){e||n(D)}),[e,n]);return e&&Object(B.jsxs)("div",{className:"app-footer",children:[Object(B.jsx)(U,{className:"go-back-btn",Icon:function(){return Object(B.jsx)("img",{src:L,alt:""})},onClick:function(){t.goBack()}}),Object(B.jsx)(V,{}),Object(B.jsx)(U,{className:"contacts-btn",Icon:function(){return Object(B.jsx)("img",{src:P,alt:""})},onClick:function(){t.push("/contact")}})]})},q=n.p+"static/media/home.a1b9128a.png",Y=n(211),W=n(212),K=n(206),Z=n(224),$=n(208),ee=n(103),te=n.n(ee),ne=n(104),ce=n.n(ne),re=function(e){var t=e.loggedUser,n=e.logout,r=e.history,a=c.useState(null),s=Object(z.a)(a,2),i=s[0],o=s[1],u=Boolean(i),l=function(){o(null)},j=(null===t||void 0===t?void 0:t.coins)?"amount-plus":"amount-minus";return Object(B.jsxs)(c.Fragment,{children:[Object(B.jsxs)(G.a,{sx:{display:"flex",alignItems:"center",textAlign:"center"},children:[t&&Object(B.jsxs)("div",{className:"details-header",children:[Object(B.jsxs)(H.a,{children:["Welcome,"," ",Object(B.jsx)("span",{className:"header-fullname",children:t.fullname})]}),Object(B.jsxs)(H.a,{children:["Balance:"," ",Object(B.jsx)("span",{className:j,children:t.coins>0?t.coins.toFixed(2):0})," ","\u20bf"]})]}),Object(B.jsx)($.a,{title:"Profile",children:Object(B.jsx)(Z.a,{onClick:function(e){o(e.currentTarget)},size:"small",sx:{ml:2},children:t?Object(B.jsx)(X.a,{alt:t.fullname,src:t.img}):Object(B.jsx)(X.a,{})})})]}),Object(B.jsxs)(Y.a,{anchorEl:i,open:u,onClose:l,onClick:l,PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[t&&Object(B.jsxs)(W.a,{onClick:function(){return r.push("/user")},children:[Object(B.jsx)(X.a,{}),"Profile"]}),t&&Object(B.jsxs)(W.a,{onClick:n,children:[Object(B.jsx)(K.a,{children:Object(B.jsx)(te.a,{fontSize:"small"})}),"Logout"]}),!t&&Object(B.jsxs)(W.a,{onClick:function(){return r.push("/signup/login")},children:[Object(B.jsx)(K.a,{children:Object(B.jsx)(ce.a,{fontSize:"small"})}),"Login"]}),!t&&Object(B.jsx)(W.a,{onClick:function(){return r.push("/signup")},children:"SignUp"})]})]})},ae=function(){var e=Object(i.c)((function(e){return e.userReducer.user})),t=Object(u.f)(),n=Object(i.b)();return Object(B.jsxs)("header",{className:"app-header full",children:[Object(B.jsx)(U,{Icon:function(){return Object(B.jsx)("img",{src:q,alt:""})},onClick:function(){return t.push("/")},className:"home-logo"}),Object(B.jsx)(re,{loggedUser:e,logout:function(){n(function(){var e=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.logout();case 2:t({type:"LOGOUT"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.push("/")},history:t})]})},se=n.p+"static/media/send.92500005.png",ie=function(e){e.contact;var t=e.onTransferCoins,n=Object(c.useState)(0),r=Object(z.a)(n,2),a=r[0],s=r[1],i=Object(u.f)(),o=function(e){t(a,e),i.push("/contact")};return Object(B.jsx)("section",{className:"transfer-fund",children:Object(B.jsxs)("form",{onSubmit:o,children:[Object(B.jsx)("label",{htmlFor:"amount",children:"Transfer Coins"}),Object(B.jsx)("input",{required:!0,placeholder:"Amount",min:"0",id:"amount",type:"number",onChange:function(e){var t=e.target,n="number"===t.type?+t.value:t.value;s(n)},name:"amount",step:"0.01"}),Object(B.jsx)(U,{Icon:function(){return Object(B.jsx)("img",{src:se,alt:""})},onClick:o,className:"send-coin-btn"})]})})},oe=n.p+"static/media/contact.42200432.png",ue=n(217),le=n(221),je=n(220),pe=n(216),be=n(218),de=n(219),fe=n(215),he=function(e){var t=e.rows,n=e.title,c=Object(i.c)((function(e){return e.userReducer.user}));return Object(B.jsxs)(pe.a,{component:fe.a,children:[Object(B.jsx)(H.a,{variant:"h4",children:n}),Object(B.jsxs)(ue.a,{sx:{minWidth:650},"aria-label":"sticky table",children:[Object(B.jsx)(be.a,{children:Object(B.jsxs)(de.a,{hover:!0,role:"checkbox",children:[Object(B.jsx)(je.a,{children:"Date"}),Object(B.jsx)(je.a,{children:"From"}),Object(B.jsx)(je.a,{children:"To"}),Object(B.jsx)(je.a,{children:"Amount"}),Object(B.jsx)(je.a,{children:"Balance"})]})}),Object(B.jsx)(le.a,{children:t.map((function(e){return Object(B.jsxs)(de.a,{hover:!0,sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(B.jsx)(je.a,{children:new Date(e.createdAt).toLocaleDateString()}),e.from===c.email?Object(B.jsx)(je.a,{children:c.fullname}):Object(B.jsx)(je.a,{children:e.from}),e.to===c.email?Object(B.jsx)(je.a,{children:c.fullname}):Object(B.jsx)(je.a,{children:e.to}),Object(B.jsx)(je.a,{className:c.email===e.to?"amount-plus":"amount-minus",children:c.email===e.to?"+".concat(e.amount):"-".concat(e.amount)}),Object(B.jsx)(je.a,{children:'"TO_FIX"'})]},e._id)}))})]})]})},Oe=n.p+"static/media/edit.b0c1b178.png",me=function(e){var t=Object(i.c)((function(e){return e.userReducer.user})),n=Object(c.useState)(null),r=Object(z.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(null),u=Object(z.a)(o,2),l=u[0],b=u[1],d=Object(i.b)();Object(c.useEffect)((function(){if(t){var n=e.match.params.id,c=t.contacts.find((function(e){return e._id===n})),r=function(){var e=Object(p.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.getTransfersByContactId(c._id);case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();c&&r(),s(c)}else d(D())}),[t,d,e.match.params.id]);return a?Object(B.jsxs)("div",{className:"contact-details-page",children:[Object(B.jsxs)("div",{className:"contact-details",children:[Object(B.jsx)(U,{Icon:function(){return Object(B.jsx)("img",{src:Oe,alt:""})},onClick:function(){e.history.push("/contact/edit/".concat(a._id))},className:"edit-logo"}),Object(B.jsx)("div",{className:"contact-img-details",children:a.contactImg?Object(B.jsx)("img",{src:a.contactImg,alt:"",className:"contact-img"}):Object(B.jsx)("img",{src:oe,alt:"",className:"contact-img"})}),Object(B.jsxs)("p",{children:["Name: ",a.contactName]}),Object(B.jsxs)("p",{children:["Email: ",a.contactEmail]}),Object(B.jsxs)("p",{children:["Phone: ",a.contactPhone]})]}),Object(B.jsx)(ie,{contact:a,onTransferCoins:function(e,n){if(n.preventDefault(),t.coins<e)return alert("No enough money");var c,r;d((c=a.contactEmail,r=e,function(){var e=Object(p.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.addTransfer(c,r);case 2:n=e.sent,t({type:"SET_USER",user:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}}),l&&Object(B.jsx)(he,{title:"Transfers with contact",rows:l})]}):Object(B.jsx)("div",{children:"Contact not found..."})},xe=n(9),ge=n(17),ve=function(){var e=Object(p.a)(j.a.mark((function e(t){var n,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"mister-bitcoin-present","mister-bitcoin",n="https://api.cloudinary.com/v1_1/".concat("mister-bitcoin","/image/upload"),(c=new FormData).append("file",t.target.files[0]),c.append("upload_preset","mister-bitcoin-present"),e.prev=6,e.next=9,d.a.post(n,c);case 9:return r=e.sent,e.abrupt("return",r.data);case 13:e.prev=13,e.t0=e.catch(6),console.error("ERROR!",e.t0);case 16:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(t){return e.apply(this,arguments)}}(),we={deleteContact:function(e){return Ee.apply(this,arguments)},saveContact:function(e){return Ce.apply(this,arguments)},getEmptyContact:function(){return{contactName:"",contactEmail:"",contactPhone:""}}},ye="contact/";function Ee(){return(Ee=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(ye+t,t);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log("cant delete contact ".concat(t),e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function Ce(){return(Ce=Object(p.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t._id){e.next=7;break}return e.next=4,x(ye+t._id,t);case 4:n=e.sent,e.next=10;break;case 7:return e.next=9,m(ye,t);case 9:n=e.sent;case 10:return e.abrupt("return",n);case 13:e.prev=13,e.t0=e.catch(0),console.log("cant save contact ".concat(t),e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}var ke=n.p+"static/media/add-contact.1f6972cf.png",Ne=n.p+"static/media/upload.0a143b40.png",Ae=n.p+"static/media/loading.06b4e460.gif",Se=function(e){var t=Object(i.c)((function(e){return e.userReducer.user})),n=Object(c.useState)(null),r=Object(z.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(!1),u=Object(z.a)(o,2),l=u[0],b=u[1],d=Object(i.b)();Object(c.useEffect)((function(){var n=function(){var e=Object(p.a)(j.a.mark((function e(n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=n?t.contacts.find((function(e){return e._id===n})):we.getEmptyContact(),s(c);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t?n(e.match.params.id):d(D())}),[d,t,e.match.params.id]);var f=function(){var e=Object(p.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.name,"file"!==t.target.type){e.next=9;break}return b(!0),e.next=5,ve(t);case 5:c=e.sent.url,b(!1),e.next=10;break;case 9:c="number"===t.target.type?+t.target.value:t.target.value;case 10:s(Object(ge.a)(Object(ge.a)({},a),{},Object(xe.a)({},n,c)));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(t){t.preventDefault(),e.history.push("/contact")};return a?Object(B.jsx)("div",{className:"contact-edit",children:Object(B.jsxs)("form",{onSubmit:h,children:[Object(B.jsxs)("div",{className:"contact-name",children:[Object(B.jsx)("label",{htmlFor:"contactName",children:"Fullname"}),Object(B.jsx)("input",{required:!0,type:"text",id:"contactName",value:a.contactName,onChange:f,name:"contactName"})]}),Object(B.jsxs)("div",{className:"contact-email",children:[Object(B.jsx)("label",{htmlFor:"contactEmail",children:"Email Address"}),Object(B.jsx)("input",{required:!0,type:"text",id:"contactEmail",value:a.contactEmail,onChange:f,name:"contactEmail"})]}),Object(B.jsxs)("div",{className:"contact-phone",children:[Object(B.jsx)("label",{htmlFor:"contactPhone",children:"Phone Number"}),Object(B.jsx)("input",{required:!0,type:"text",id:"contactPhone",value:a.contactPhone,onChange:f,name:"contactPhone"})]}),Object(B.jsxs)("div",{className:"contact-img",children:[Object(B.jsx)("label",{htmlFor:"contactImg",children:Object(B.jsx)("img",{src:Ne,alt:""})}),l?Object(B.jsx)("img",{src:Ae,alt:""}):Object(B.jsx)("label",{htmlFor:"contactImg",children:Object(B.jsx)("img",{src:a.contactImg,alt:""})}),Object(B.jsx)("input",{hidden:!0,type:"file",id:"contactImg",onChange:f,name:"contactImg"})]}),Object(B.jsx)("div",{className:"actions-btn",children:Object(B.jsx)(U,{Icon:function(){return Object(B.jsx)("img",{src:ke,alt:""})},onClick:h,className:"add-contact-btn"})})]})}):Object(B.jsx)("h1",{children:"Contact not found"})},Te=function(e){return Object(B.jsxs)("form",{className:"contact-filter",onSubmit:function(e){return e.preventDefault()},children:[Object(B.jsx)("label",{htmlFor:"term",children:"Search contact"}),Object(B.jsx)("input",{type:"text",id:"term",name:"term",onChange:function(t){var n=t.target;e.onChangeFilter(n.value)},placeholder:"Search..."})]})},Ie=function(e){var t=e.contact;return Object(B.jsx)(o.b,{to:"/contact/".concat(t._id),children:Object(B.jsxs)("div",{className:"contact-preview",children:[t.contactImg?Object(B.jsx)("img",{src:t.contactImg,alt:""}):Object(B.jsx)("img",{src:oe,alt:""}),Object(B.jsx)("p",{children:t.contactName}),Object(B.jsx)("p",{children:t.contactEmail}),Object(B.jsx)("p",{children:t.contactPhone})]})})},Re=function(e){var t=e.contacts;return Object(B.jsx)("ul",{className:"contact-list",children:t.map((function(e){return Object(B.jsx)("li",{children:Object(B.jsx)(Ie,{contact:e})},e._id)}))})},Fe=n.p+"static/media/plus.3463e9e3.png",De=function(e){var t=e.history,n=Object(c.useState)(null),r=Object(z.a)(n,2),a=(r[0],r[1]),s=Object(i.c)((function(e){return e.userReducer.user})),o=Object(c.useState)(null),u=Object(z.a)(o,2),l=u[0],j=u[1],p=Object(i.b)();Object(c.useEffect)((function(){s?j(s.contacts):p(D())}),[p,s]);return Object(B.jsxs)("div",{className:"contact-page",children:[Object(B.jsxs)("div",{className:"contact-header",children:[Object(B.jsx)(Te,{onChangeFilter:function(e){a(e)}}),Object(B.jsx)(U,{Icon:function(){return Object(B.jsx)("img",{src:Fe,alt:""})},onClick:function(){t.push("/contact/edit")},className:"add-contact-btn"})]}),l?Object(B.jsx)(Re,{contacts:l}):Object(B.jsx)("h1",{children:"No contacts to show"})]})},Be=n(47),Ue={getRate:function(){return Pe.apply(this,arguments)},getMarketPrice:function(){return Le.apply(this,arguments)},getConfirmedTransactions:function(){return ze.apply(this,arguments)}};function Pe(){return(Pe=Object(p.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Be.get("https://blockchain.info/tobtc?currency=USD&value=1");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function Le(){return(Le=Object(p.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Be.get("https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function ze(){return(ze=Object(p.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Be.get("https://blockchain.info/tobtc?currency=USD&value=1");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var Ge=n(109),He=n(105),_e=n(213),Me=n(207),Xe=["children"],Je=c.forwardRef((function(e,t){var n=e.children,c=Object(Ge.a)(e,Xe);return Object(B.jsxs)("svg",Object(ge.a)(Object(ge.a)({width:"150",height:"50"},c),{},{ref:t,children:[Object(B.jsx)("polygon",{points:"0,50 0,0 150,0 150,50",className:"bg"}),Object(B.jsx)("polygon",{points:"0,50 0,0 150,0 150,50",className:"borderEffect"}),Object(B.jsx)("foreignObject",{x:"0",y:"0",width:"150",height:"50",children:Object(B.jsx)("div",{className:"content",children:n})})]}))})),Ve=Object(Me.a)(Je)((function(e){var t=e.theme;return"\n  overflow: visible;\n  cursor: pointer;\n  --main-color: ".concat("light"===t.palette.mode?"rgb(25,118,210)":"rgb(144,202,249)",";\n  --hover-color: ").concat("light"===t.palette.mode?"rgba(25,118,210,0.04)":"rgba(144,202,249,0.08)",";\n  --active-color: ").concat("light"===t.palette.mode?"rgba(25,118,210,0.12)":"rgba(144,202,249,0.24)",";\n\n  & polygon {\n    fill: transparent;\n    transition: all 800ms ease;\n    pointer-events: none;\n  }\n  \n  & .bg {\n    stroke: var(--main-color);\n    stroke-width: 0.5;\n    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));\n    fill: transparent;\n  }\n\n  & .borderEffect {\n    stroke: var(--main-color);\n    stroke-width: 2;\n    stroke-dasharray: 150 600;\n    stroke-dashoffset: 150;\n    fill: transparent;\n  }\n\n  &:hover,\n  &.").concat(He.a.focusVisible," {\n    .borderEffect {\n      stroke-dashoffset: -600;\n    }\n\n    .bg {\n      fill: var(--hover-color);\n    }\n  }\n\n  &:focus,\n  &.").concat(He.a.focusVisible," {\n    outline: none;\n  }\n\n  &.").concat(He.a.active," { \n    & .bg {\n      fill: var(--active-color);\n      transition: fill 300ms ease-out;\n    }\n  }\n\n  & foreignObject {\n    pointer-events: none;\n\n    & .content {\n      font-family: Helvetica, Inter, Arial, sans-serif;\n      font-size: 14px;\n      font-weight: 200;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: var(--main-color);\n      text-transform: uppercase;\n    }\n\n    & svg {\n      margin: 0 5px;\n    }\n  }")})),Qe=c.forwardRef((function(e,t){return Object(B.jsx)(_e.a,Object(ge.a)(Object(ge.a)({},e),{},{component:Ve,ref:t}))})),qe=function(){var e=Object(u.f)();return Object(B.jsx)(Qe,{onClick:function(){return e.push("/signup")},children:"Register Now"})},Ye=n.p+"static/media/minus.fdcf7131.png",We=function(e){var t=e.history,n=Object(c.useState)(0),r=Object(z.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(!0),u=Object(z.a)(o,2),l=u[0],b=u[1],d=Object(c.useState)([]),f=Object(z.a)(d,2),h=f[0],O=f[1],m=Object(i.c)((function(e){return e.userReducer.user})),x=Object(i.c)((function(e){return e.transferReducer.transfers})),g=Object(i.b)(),v=Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(1/a),w=m?Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(1/a*m.coins):null;Object(c.useEffect)((function(){m||g(D())}),[m,g]),Object(c.useEffect)((function(){m&&!x.length&&g(F())}),[g,m,x.length]),Object(c.useEffect)((function(){var e=function(){var e=Object(p.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ue.getRate();case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();m&&!a&&e()}),[a,m]),Object(c.useEffect)((function(){O(m&&l?x.slice(0,3):x)}),[l,x,m]);var y=l?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFIElEQVR4nO2bTWxVRRTHfxYeVmyND+PKtiKlQEwUAvhR2tT6sXCjyIaouC5GbUyURFAXbN2aiHEpfiE7UWMMMaZqJSIfsgGkr4ro2oJ9RbDYujj3cs9ML7fv3TszvEr/yUvmZWbO+c/cOTNnZs7APOZxTeO6ADoWAuuBDcBKoAtoB1qBxVGZ88A4cAaoACeB74HDwKUAHJ2jBdgCfApUgemcv3FgH/B0JLPhsRx4G5ggf6Ov9KsCu4BOl4RdmUA78AawGViQkv8z8A0ypCvAaeBPpFEgX3cJsBQxkXVAH7AiRda/wB5gO/CHI/65sQh4jfQvfgR4GemcvOgAtgFHU+RXgVeBUgH5hXA7MlFpUlOI3T/iQV8vsBeZFLXOHxHTC4pNwDmLyEHg3gC670carXWfBZ4IoBuAZzG/wt/AC0BTKAKRrsFId8zjErDVt+IdmD1/HLjLt9IMrEZ8Bs1phy9lWy1FB4BbfCmrA2VgCJPboGslmzCH/T6g2bWSAmhGOGlz2OhKeCfmhDdEYzU+RjPia+iJ8Y6iQhdhzrjHgZuLCvWIMnCChO8PFPQTXlfCznN1J7xasRpzdcg9KXZgenjPuWAXCIOYG6q2PEI+whxKIdf5omgCDpHwf69eAV0ks/4UYTw81+hGuMerwrJ6Kr9D0nufOKcWDp+TtOOtWiu1Ytp+rxdqstX9BRhFRpwPPIC5e7yxlkrPqEpHPRED2cp6d1+BY0rPk3Zm2sSmC33oiRSIjxHjeo969qj0rB1QAvrV/70+GAWGbsODyCHtZdgdsJ7ETirAb/54BcMoSTtuAtboTLsDulX6W4+kQmNIpXt0ht0Bq1T6iDc64aEn85U6w+4AvRyNeKMTHrotxpJrd4D2mU97oxMev6q0cUq90Cqob1/OFVC4AjmQyNo/9FjpVzLKTiEe6amcfM6qdGtWwXESpyGz4CwYVXJc/SoF+LQqOX/pjLm0w/MC2wSqJGbQgoyIPHgU8bqyfO9eEjMYBr7LKDuB6dHVCz2aM9s0QjJUVmUVdICdStdOz7ruVLpO6gzbBH5X6br2zw0O3ZYzOsPugCuul3Mc+u7QmEztDtDDY503OuGxVqUzTeCASvfz/0GfSg/rDLsDDiMzLojHFPza2QOWI1f5ID7ATzrT7oBJ4Gv1f8YBwhzEZpX+CokwuYw0R0ivt0/5YBThH5W+6FGP/ogf11KhBfNQ9GEPpED2C5Xo52vF6ce8IFmcXTzBLlXxSy/UwuALkna8WU/FTszr8L7s4g2JHpKLkUly3BR/QNIBx0gPf2tULEBWtJj/u3mEtGNGeW5zxS4AXsS0/dvyCtKXFxeBe1yw84w1wAUS3lkHLbOihNwMx8JGgVsLEvSJJUhUqo5jKhxIuQw5UtKBiY0YuHwDcpQf8xzDQYhMjI2Yq8J+arxoDIS0IKnHXCsZUAriyNBGMIcyZnDUNBK46QV2oOQI5lYzNO7GDIryfdMMSMCkNocLyLITOlT2eWaGyg6EIvA45sQ4jcTkdGdVcoT7EPPTusfwYPOzoQM5XLDP7/djXUA6wlpgNzPD5Q/i+BVJPSghzlLau6BDwEvkDFGL0BbJsMPjYw9vO1fxwYRGG/A+M79O/DuBBF4NAA8hT2PKiC03RemlUd5AVNae3LSt76aAe+sTnfh7NDWBbNPnxHF9CxJs9RnFns1VEQdnC568zxAPJ0vIJmoDctvUhZhMGWlU/HXHkFdgpxB/fhiZRyYDcJzHPK5V/AcZyuFxZOEzXgAAAABJRU5ErkJggg==":Ye,E=l?"Last 3 Transfers":"All Transfers",C=(null===m||void 0===m?void 0:m.coins)?"amount-plus":"amount-minus";return m?Object(B.jsxs)("div",{className:"home-page logged-user",children:[Object(B.jsxs)("div",{className:"user-balance",children:[Object(B.jsx)("h4",{children:"Wallet Balance:"}),Object(B.jsx)("h2",{className:C,children:w}),Object(B.jsxs)("h3",{children:["You have ",Object(B.jsx)("span",{className:C,children:m.coins})," ","bitcoins"]}),Object(B.jsxs)("h4",{children:["1 Bitcoin: ",v]})]}),h.length&&Object(B.jsxs)("div",{className:"transfers-table",children:[x.length>3&&Object(B.jsx)(U,{onClick:function(){return b((function(e){return!e}))},Icon:function(){return Object(B.jsx)("img",{src:y,alt:""})},className:"more-less-btn"}),Object(B.jsx)(he,{title:E,rows:h})]})]}):Object(B.jsx)("div",{className:"home-page guest",children:Object(B.jsxs)("div",{className:"guest-welcome",children:[Object(B.jsx)("h1",{children:"Welcome to Mister Bitcoin"}),Object(B.jsx)("h3",{children:"Demo bitcoin wallet"}),Object(B.jsx)(qe,{}),Object(B.jsx)("p",{onClick:function(){return t.push("/signup/login")},children:"Already registered? login"})]})})},Ke=function(e){var t=Object(c.useState)(null),n=Object(z.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(!1),o=Object(z.a)(s,2),l=o[0],b=o[1],d=Object(i.c)((function(e){return e.userReducer.user})),f=Object(i.b)(),h=Object(u.f)(),O=function(e){var t=e.target,n=t.name,c="number"===t.value?+t.value:t.value;a(Object(ge.a)(Object(ge.a)({},r),{},Object(xe.a)({},n,c)))};return Object(c.useEffect)((function(){d&&h.push("/")}),[d,h]),l?Object(B.jsx)("img",{className:"login-loading",src:Ae,alt:""}):Object(B.jsxs)("form",{onSubmit:function(e){b(!0),e.preventDefault(),f(function(e){return function(){var t=Object(p.a)(j.a.mark((function t(n){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.login(e);case 2:c=t.sent,n({type:"SET_USER",user:c}),n(F());case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(r))},children:[Object(B.jsx)("h1",{children:"Login"}),Object(B.jsx)("label",{htmlFor:"email",children:"Email"}),Object(B.jsx)("input",{required:!0,type:"text",id:"email",onChange:O,name:"email",placeholder:"Ex.. israeli2021@gmail.com"}),Object(B.jsx)("label",{htmlFor:"password",children:"Password"}),Object(B.jsx)("input",{required:!0,type:"password",id:"password",onChange:O,name:"password",placeholder:"Ex.. !#@fdsf54%"}),Object(B.jsx)("button",{children:"Login"}),Object(B.jsx)("p",{onClick:function(){return h.push("/signup")},children:"Register now"})]})},Ze=(n(154),function(){var e=Object(c.useState)(null),t=Object(z.a)(e,2),n=t[0],r=t[1],a=Object(i.b)(),s=Object(u.f)(),o=function(e){var t=e.target,c=t.name,a="number"===t.value?+t.value:t.value;r(Object(ge.a)(Object(ge.a)({},n),{},Object(xe.a)({},c,a)))};return Object(B.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(function(e){return function(){var t=Object(p.a)(j.a.mark((function t(n){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.signup(e);case 3:t.next=9;break;case 5:throw t.prev=5,t.t0=t.catch(0),console.log({"err actions1":t.t0}),t.t0;case 9:return t.next=11,y.getLoggedInUser();case 11:c=t.sent,n({type:"SET_USER",user:c});case 13:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}()}(n)).then((function(){s.push("/")})).catch((function(e){console.log({"err page":e})}))},children:[Object(B.jsx)("h1",{children:"Signup"}),Object(B.jsx)("label",{htmlFor:"fullname",children:"Full name"}),Object(B.jsx)("input",{required:!0,type:"text",id:"fullname",onChange:o,name:"fullname",placeholder:"Ex.. Israel Israeli"}),Object(B.jsx)("label",{htmlFor:"password",children:"Password"}),Object(B.jsx)("input",{required:!0,type:"password",id:"password-login",onChange:o,name:"password",placeholder:"Ex.. !#@fdsf54%"}),Object(B.jsx)("label",{htmlFor:"email",children:"Email"}),Object(B.jsx)("input",{required:!0,type:"text",id:"email-login",onChange:o,name:"email",placeholder:"Ex.. israeli2021@gmail.com"}),Object(B.jsx)("label",{htmlFor:"phone",children:"Phone number"}),Object(B.jsx)("input",{required:!0,type:"text",id:"phone",onChange:o,name:"phone",placeholder:"Ex.. 05x-xxxxxxx"}),Object(B.jsx)("button",{children:"Sign up"}),Object(B.jsx)("p",{onClick:function(){return s.push("/signup/login")},children:"Already registered? login"})]})}),$e=function(e){var t=Object(c.useState)("Login"),n=Object(z.a)(t,2),r=n[0],a=n[1];Object(c.useEffect)((function(){var t=e.history.location.pathname;a("/signup/login"===t?"Login":"SignUp")}),[e.history.location]);var s={SignUp:Ze,Login:Ke}[r];return Object(B.jsx)("div",{className:"signup-page",children:Object(B.jsx)(s,{})})},et=n(69),tt=function(e){e.title;var t=e.data,n=e.description;return Object(B.jsxs)("div",{className:"chart",children:[Object(B.jsx)("h1",{children:n}),Object(B.jsxs)(et.Sparklines,{data:t,children:[Object(B.jsx)(et.SparklinesLine,{color:"red"}),Object(B.jsx)(et.SparklinesSpots,{size:1})]})]})},nt=function(){var e=Object(c.useState)(null),t=Object(z.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),s=Object(z.a)(a,2),i=s[0],o=s[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(p.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ue.getMarketPrice();case 3:t=e.sent,r(t),n=t.values.map((function(e){return e.y})),o(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),n&&i&&Object(B.jsxs)("div",{className:"statistic-page",children:[Object(B.jsx)("h1",{children:"Statistic page:"}),Object(B.jsx)(tt,{title:n.name,description:n.description,data:i,color:"red"})]})},ct=function(e){e.history;var t=Object(i.c)((function(e){return e.userReducer.user})),n=t.img?t.img:oe;return Object(B.jsx)("div",{className:"user-details-page",children:Object(B.jsxs)("div",{className:"user-details",children:[Object(B.jsx)("img",{src:n,alt:""}),Object(B.jsxs)("p",{children:["Fullname: ",t.fullname]}),Object(B.jsxs)("p",{children:["Phone: ",t.phone]}),Object(B.jsxs)("p",{children:["Email: ",t.email]})]})})},rt=function(){return Object(B.jsx)(o.a,{children:Object(B.jsxs)("div",{className:"App main-layout",children:[Object(B.jsx)(ae,{}),Object(B.jsxs)(u.c,{children:[Object(B.jsx)(u.a,{component:Se,path:"/contact/edit/:id?"}),Object(B.jsx)(u.a,{component:me,path:"/contact/:id"}),Object(B.jsx)(u.a,{component:De,path:"/contact"}),Object(B.jsx)(u.a,{component:ct,path:"/user"}),Object(B.jsx)(u.a,{component:nt,path:"/statistic"}),Object(B.jsx)(u.a,{component:$e,path:"/signup"}),Object(B.jsx)(u.a,{component:We,path:"/"})]}),Object(B.jsx)(Q,{})]})})},at=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,225)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},st=n(56),it=n(25),ot={transfers:[],currTransfer:null};var ut={user:null},lt=n(106),jt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||st.c,pt=Object(st.b)({transferReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TRANSFERS":return Object(ge.a)(Object(ge.a)({},e),{},{transfers:t.transfers});case"SET_TRANSFER":return Object(ge.a)(Object(ge.a)({},e),{},{currTransfer:t.transfer});case"ADD_TRANSFER":return Object(ge.a)(Object(ge.a)({},e),{},{transfers:[].concat(Object(it.a)(e.transfers),[t.transfer])});case"REMOVE_TRANSFER":return Object(ge.a)(Object(ge.a)({},e),{},{transfers:e.transfers.filter((function(e){return e._id!==t.transferId}))});case"UPDATE_TRANSFER":var n=t.updatedTransfer;return Object(ge.a)(Object(ge.a)({},e),{},{transfers:e.transfers.map((function(e){return e._id===n._id?n:e}))});default:return e}},userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"SET_USER":return Object(ge.a)(Object(ge.a)({},e),{},{user:t.user});case"LOGOUT":return Object(ge.a)(Object(ge.a)({},e),{},{user:null});default:return e}}}),bt=Object(st.d)(pt,jt(Object(st.a)(lt.a)));n(155);s.a.render(Object(B.jsx)(r.a.StrictMode,{children:Object(B.jsx)(i.a,{store:bt,children:Object(B.jsx)(rt,{})})}),document.getElementById("root")),at()}},[[156,1,2]]]);
//# sourceMappingURL=main.5744a6da.chunk.js.map