(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{154:function(t,e,n){},155:function(t,e,n){},156:function(t,e,n){},157:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(30),s=n.n(a),o=n(16),i=n(66),u=n(15),l=n(4),j=n.n(l),p=n(10),b=n(47),d=n.n(b),h="/api/",f=d.a.create({withCredentials:!0}),m=function(t,e){return v(t,"GET",e)},O=function(t,e){return v(t,"POST",e)},x=function(t,e){return v(t,"PUT",e)},g=function(t,e){return v(t,"DELETE",e)};function v(t){return w.apply(this,arguments)}function w(){return w=Object(p.a)(j.a.mark((function t(e){var n,c,r,a=arguments;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"GET",c=a.length>2&&void 0!==a[2]?a[2]:null,t.prev=2,t.next=5,f({url:"".concat(h).concat(e),method:n,data:c,params:"GET"===n?c:null});case 5:return r=t.sent,t.abrupt("return",r.data);case 9:throw t.prev=9,t.t0=t.catch(2),console.log("Had Issues ".concat(n,"ing to the backend, endpoint: ").concat(e,", with data: ").concat(c)),console.dir(t.t0),t.t0.response&&t.t0.response.status,t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,9]])}))),w.apply(this,arguments)}var y={getUsers:function(){return m("user")},getById:function(t){return m("user/".concat(t))},remove:function(t){return g("user/".concat(t))},update:function(t){return C.apply(this,arguments)},login:function(t){return k.apply(this,arguments)},signup:function(t){return N.apply(this,arguments)},logout:function(){return E.apply(this,arguments)},getLoggedInUser:function(){return A.apply(this,arguments)}};function C(){return(C=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x("user/".concat(e._id),e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(){return(k=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O("auth/login",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(){return(N=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O("auth/signup",e);case 3:return t.abrupt("return",t.sent);case 6:throw t.prev=6,t.t0=t.catch(0),console.log("service",t.t0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function E(){return(E=Object(p.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O("auth/logout");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function A(){return(A=Object(p.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m("user/loggedInUser");case 3:return t.abrupt("return",t.sent);case 6:throw t.prev=6,t.t0=t.catch(0),t.t0;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}window.userService=y;var S={addTransfer:function(t,e){return T.apply(this,arguments)},getTransfers:function(){return I.apply(this,arguments)},getTransfersByContactId:function(t){return D.apply(this,arguments)}};function T(){return(T=Object(p.a)(j.a.mark((function t(e,n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O("transfer/",{contactEmail:e,amount:n});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function I(){return(I=Object(p.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m("transfer/");case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function D(){return(D=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m("transfer/".concat(e));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}var L=function(){return function(){var t=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.getLoggedInUser();case 2:n=t.sent,e({type:"SET_USER",user:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},U=n(1);function B(t){var e=t.onClick,n=t.Icon,c=t.children,r=t.className;return Object(U.jsxs)("button",{className:r,onClick:e,children:[Object(U.jsx)(n,{}),c]})}var F=n.p+"static/media/users.2e1249bc.png",P=n.p+"static/media/back.00987031.png",R=n(6),z=n(223),G=n(224),_=n(210),H=n.p+"static/media/bitcoin.2d4930d3.gif",M=n(215),X={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"#B8C0C6",border:"2px solid #000",boxShadow:24,p:4,overflow:"auto",maxHeight:"80vh"},J=function(){var t=Object(o.c)((function(t){return t.userReducer.user})),e=Object(u.f)(),n=c.useState(!1),r=Object(R.a)(n,2),a=r[0],s=r[1],i=function(){return s(!1)},l={display:"flex",flexDirection:"row",gap:"20px",alignItems:"center",border:"1px solid black",padding:"10px",bgcolor:"#CEF6FF",cursor:"pointer",borderRadius:"10px"};return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(B,{onClick:function(){return s(!0)},Icon:function(){return Object(U.jsx)("img",{src:H,alt:""})},className:"bitcoin-gif"}),Object(U.jsx)(_.a,{open:a,onClose:i,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(U.jsxs)(z.a,{sx:X,children:[Object(U.jsx)(G.a,{variant:"h2",children:"Select Contact"}),t.contacts.map((function(t){return Object(U.jsxs)(z.a,{sx:l,onClick:function(){return n=t._id,i(),void e.push("/contact/".concat(n));var n},children:[Object(U.jsx)(M.a,{alt:"",src:t.contactImg}),Object(U.jsx)(G.a,{children:t.contactName})]},t._id)}))]})})]})},V=function(){var t=Object(o.c)((function(t){return t.userReducer.user})),e=Object(u.f)(),n=Object(o.b)();Object(c.useEffect)((function(){t||n(L)}),[t,n]);return t&&Object(U.jsxs)("div",{className:"app-footer",children:[Object(U.jsx)(B,{className:"go-back-btn",Icon:function(){return Object(U.jsx)("img",{src:P,alt:""})},onClick:function(){e.goBack()}}),Object(U.jsx)(J,{}),Object(U.jsx)(B,{className:"contacts-btn",Icon:function(){return Object(U.jsx)("img",{src:F,alt:""})},onClick:function(){e.push("/contact")}})]})},Q=n.p+"static/media/home.a1b9128a.png",q=n(212),Y=n(213),W=n(207),K=n(225),Z=n(209),$=n(103),tt=n.n($),et=n(104),nt=n.n(et),ct=function(t){var e=t.loggedUser,n=t.logout,r=t.history,a=c.useState(null),s=Object(R.a)(a,2),o=s[0],i=s[1],u=Boolean(o),l=function(){i(null)},j=(null===e||void 0===e?void 0:e.coins)?"amount-plus":"amount-minus";return Object(U.jsxs)(c.Fragment,{children:[Object(U.jsxs)(z.a,{sx:{display:"flex",alignItems:"center",textAlign:"center"},children:[e&&Object(U.jsxs)("div",{className:"details-header",children:[Object(U.jsxs)(G.a,{children:["Welcome,"," ",Object(U.jsx)("span",{className:"header-fullname",children:e.fullname})]}),Object(U.jsxs)(G.a,{children:["Balance:"," ",Object(U.jsx)("span",{className:j,children:e.coins>0?e.coins.toFixed(2):0})," ","\u20bf"]})]}),Object(U.jsx)(Z.a,{title:"Profile",children:Object(U.jsx)(K.a,{onClick:function(t){i(t.currentTarget)},size:"small",sx:{ml:2},children:e?Object(U.jsx)(M.a,{alt:e.fullname,src:e.img}):Object(U.jsx)(M.a,{})})})]}),Object(U.jsxs)(q.a,{anchorEl:o,open:u,onClose:l,onClick:l,PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[e&&Object(U.jsxs)(Y.a,{onClick:function(){return r.push("/user")},children:[Object(U.jsx)(M.a,{}),"Profile"]}),e&&Object(U.jsxs)(Y.a,{onClick:n,children:[Object(U.jsx)(W.a,{children:Object(U.jsx)(tt.a,{fontSize:"small"})}),"Logout"]}),!e&&Object(U.jsxs)(Y.a,{onClick:function(){return r.push("/signup/login")},children:[Object(U.jsx)(W.a,{children:Object(U.jsx)(nt.a,{fontSize:"small"})}),"Login"]}),!e&&Object(U.jsx)(Y.a,{onClick:function(){return r.push("/signup")},children:"SignUp"})]})]})},rt=function(){var t=Object(o.c)((function(t){return t.userReducer.user})),e=Object(u.f)(),n=Object(o.b)();return Object(U.jsxs)("header",{className:"app-header full",children:[Object(U.jsx)(B,{Icon:function(){return Object(U.jsx)("img",{src:Q,alt:""})},onClick:function(){return e.push("/")},className:"home-logo"}),Object(U.jsx)(ct,{loggedUser:t,logout:function(){n(function(){var t=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.logout();case 2:e({type:"LOGOUT"});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e.push("/")},history:e})]})},at=n.p+"static/media/send.92500005.png",st=function(t){t.contact;var e=t.onTransferCoins,n=Object(c.useState)(0),r=Object(R.a)(n,2),a=r[0],s=r[1],o=Object(u.f)(),i=function(t){e(a,t),o.push("/contact")};return Object(U.jsx)("section",{className:"transfer-fund",children:Object(U.jsxs)("form",{onSubmit:i,children:[Object(U.jsx)("label",{htmlFor:"amount",children:"Transfer Coins"}),Object(U.jsx)("input",{required:!0,placeholder:"Amount",min:"0",id:"amount",type:"number",onChange:function(t){var e=t.target,n="number"===e.type?+e.value:e.value;s(n)},name:"amount",step:"0.01"}),Object(U.jsx)(B,{Icon:function(){return Object(U.jsx)("img",{src:at,alt:""})},onClick:i,className:"send-coin-btn"})]})})},ot={getContacts:function(){return lt.apply(this,arguments)},getContactById:function(t){return jt.apply(this,arguments)},deleteContact:function(t){return pt.apply(this,arguments)},saveContact:function(t){return bt.apply(this,arguments)},getEmptyContact:function(){return{contactName:"",contactEmail:"",contactPhone:""}}},it="contact/";function ut(t){return t.sort((function(t,e){return t.contactName.toLocaleLowerCase()<e.contactName.toLocaleLowerCase()?-1:t.contactName.toLocaleLowerCase()>e.contactName.toLocaleLowerCase()?1:0}))}function lt(){return lt=Object(p.a)(j.a.mark((function t(){var e,n,c,r,a=arguments;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:null,t.prev=1,t.next=4,y.getLoggedInUser();case 4:if(n=t.sent,c=n.contacts,!e){t.next=9;break}return r=dt(e,c),t.abrupt("return",ut(r));case 9:return t.abrupt("return",ut(c));case 12:t.prev=12,t.t0=t.catch(1),console.log("cant get contacts",t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])}))),lt.apply(this,arguments)}function jt(){return(jt=Object(p.a)(j.a.mark((function t(e){var n,c,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.getLoggedInUser();case 3:return n=t.sent,c=n.contacts,r=c.find((function(t){return t._id===e})),t.abrupt("return",r);case 9:t.prev=9,t.t0=t.catch(0),console.log("Contact id ".concat(e," not found!"),t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function pt(){return(pt=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g(it+e,e);case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log("cant delete contact ".concat(e),t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function bt(){return(bt=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e._id){t.next=7;break}return t.next=4,x(it+e._id,e);case 4:n=t.sent,t.next=10;break;case 7:return t.next=9,O(it,e);case 9:n=t.sent;case 10:return t.abrupt("return",n);case 13:t.prev=13,t.t0=t.catch(0),console.log("cant save contact ".concat(e),t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function dt(t,e){return t=t.toLocaleLowerCase(),e.filter((function(e){return e.contactName.toLocaleLowerCase().includes(t)||e.contactPhone.toLocaleLowerCase().includes(t)||e.contactEmail.toLocaleLowerCase().includes(t)}))}var ht=n.p+"static/media/contact.42200432.png",ft=n(218),mt=n(222),Ot=n(221),xt=n(217),gt=n(219),vt=n(220),wt=n(216),yt=function(t){var e=t.rows,n=t.title,c=Object(o.c)((function(t){return t.userReducer.user}));return Object(U.jsxs)(xt.a,{component:wt.a,children:[Object(U.jsx)(G.a,{variant:"h4",children:n}),Object(U.jsxs)(ft.a,{sx:{minWidth:650},"aria-label":"sticky table",children:[Object(U.jsx)(gt.a,{children:Object(U.jsxs)(vt.a,{hover:!0,role:"checkbox",children:[Object(U.jsx)(Ot.a,{children:"Date"}),Object(U.jsx)(Ot.a,{children:"From"}),Object(U.jsx)(Ot.a,{children:"To"}),Object(U.jsx)(Ot.a,{children:"Amount"}),Object(U.jsx)(Ot.a,{children:"Balance"})]})}),Object(U.jsx)(mt.a,{children:e.map((function(t){return Object(U.jsxs)(vt.a,{hover:!0,sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(U.jsx)(Ot.a,{children:new Date(t.createdAt).toLocaleDateString()}),t.from===c.email?Object(U.jsx)(Ot.a,{children:c.fullname}):Object(U.jsx)(Ot.a,{children:t.from}),t.to===c.email?Object(U.jsx)(Ot.a,{children:c.fullname}):Object(U.jsx)(Ot.a,{children:t.to}),Object(U.jsx)(Ot.a,{className:c.email===t.to?"amount-plus":"amount-minus",children:c.email===t.to?"+".concat(t.amount):"-".concat(t.amount)}),Object(U.jsx)(Ot.a,{children:'"TO_FIX"'})]},t._id)}))})]})]})},Ct=n.p+"static/media/edit.b0c1b178.png",kt=function(t){var e=Object(o.c)((function(t){return t.userReducer.user})),n=Object(c.useState)(null),r=Object(R.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(null),u=Object(R.a)(i,2),l=u[0],b=u[1],d=Object(o.b)();Object(c.useEffect)((function(){if(e){var n=t.match.params.id,c=e.contacts.find((function(t){return t._id===n})),r=function(){var t=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.getTransfersByContactId(c._id);case 2:e=t.sent,b(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();c&&r(),s(c)}else d(L())}),[e,d,t.match.params.id]);return a?Object(U.jsxs)("div",{className:"contact-details-page",children:[Object(U.jsxs)("div",{className:"contact-details",children:[Object(U.jsx)(B,{Icon:function(){return Object(U.jsx)("img",{src:Ct,alt:""})},onClick:function(){t.history.push("/contact/edit/".concat(a._id))},className:"edit-logo"}),Object(U.jsx)("div",{className:"contact-img-details",children:a.contactImg?Object(U.jsx)("img",{src:a.contactImg,alt:"",className:"contact-img"}):Object(U.jsx)("img",{src:ht,alt:"",className:"contact-img"})}),Object(U.jsxs)("p",{children:["Name: ",a.contactName]}),Object(U.jsxs)("p",{children:["Email: ",a.contactEmail]}),Object(U.jsxs)("p",{children:["Phone: ",a.contactPhone]})]}),Object(U.jsx)(st,{contact:a,onTransferCoins:function(t,n){if(n.preventDefault(),e.coins<t)return alert("No enough money");var c,r;d((c=a.contactEmail,r=t,function(){var t=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.addTransfer(c,r);case 2:n=t.sent,e({type:"SET_USER",user:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}}),l&&Object(U.jsx)(yt,{title:"Transfers with contact",rows:l})]}):Object(U.jsx)("div",{children:"Contact not found..."})},Nt=n(9),Et=n(17),At=function(){var t=Object(p.a)(j.a.mark((function t(e){var n,c,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"mister-bitcoin-present","mister-bitcoin",n="https://api.cloudinary.com/v1_1/".concat("mister-bitcoin","/image/upload"),(c=new FormData).append("file",e.target.files[0]),c.append("upload_preset","mister-bitcoin-present"),t.prev=6,t.next=9,d.a.post(n,c);case 9:return r=t.sent,t.abrupt("return",r.data);case 13:t.prev=13,t.t0=t.catch(6),console.error("ERROR!",t.t0);case 16:case"end":return t.stop()}}),t,null,[[6,13]])})));return function(e){return t.apply(this,arguments)}}(),St=n.p+"static/media/add-contact.1f6972cf.png",Tt=n.p+"static/media/upload.0a143b40.png",It=n.p+"static/media/loading.643ca93f.gif",Dt=function(t){var e=Object(o.c)((function(t){return t.userReducer.user})),n=Object(c.useState)(null),r=Object(R.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(!1),u=Object(R.a)(i,2),l=u[0],b=u[1],d=Object(o.b)();Object(c.useEffect)((function(){var n=function(){var t=Object(p.a)(j.a.mark((function t(n){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=n?e.contacts.find((function(t){return t._id===n})):ot.getEmptyContact(),s(c);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e?n(t.match.params.id):d(L())}),[d,e,t.match.params.id]);var h=function(){var t=Object(p.a)(j.a.mark((function t(e){var n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.target.name,"file"!==e.target.type){t.next=9;break}return b(!0),t.next=5,At(e);case 5:c=t.sent.url,b(!1),t.next=10;break;case 9:c="number"===e.target.type?+e.target.value:e.target.value;case 10:s(Object(Et.a)(Object(Et.a)({},a),{},Object(Nt.a)({},n,c)));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(e){e.preventDefault(),d(function(t){return function(){var e=Object(p.a)(j.a.mark((function e(n){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=!t._id,e.next=3,ot.saveContact(t);case 3:r=e.sent,n(c?{type:"ADD_CONTACT",contact:r}:{type:"UPDATE_CONTACT",updatedContact:r});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(a)),t.history.push("/contact")};return a?Object(U.jsx)("div",{className:"contact-edit",children:Object(U.jsxs)("form",{onSubmit:f,children:[Object(U.jsxs)("div",{className:"contact-name",children:[Object(U.jsx)("label",{htmlFor:"contactName",children:"Fullname"}),Object(U.jsx)("input",{required:!0,type:"text",id:"contactName",value:a.contactName,onChange:h,name:"contactName"})]}),Object(U.jsxs)("div",{className:"contact-email",children:[Object(U.jsx)("label",{htmlFor:"contactEmail",children:"Email Address"}),Object(U.jsx)("input",{required:!0,type:"text",id:"contactEmail",value:a.contactEmail,onChange:h,name:"contactEmail"})]}),Object(U.jsxs)("div",{className:"contact-phone",children:[Object(U.jsx)("label",{htmlFor:"contactPhone",children:"Phone Number"}),Object(U.jsx)("input",{required:!0,type:"text",id:"contactPhone",value:a.contactPhone,onChange:h,name:"contactPhone"})]}),Object(U.jsxs)("div",{className:"contact-img",children:[Object(U.jsx)("label",{htmlFor:"contactImg",children:Object(U.jsx)("img",{src:Tt,alt:""})}),l?Object(U.jsx)("img",{src:It,alt:""}):Object(U.jsx)("label",{htmlFor:"contactImg",children:Object(U.jsx)("img",{src:a.contactImg,alt:""})}),Object(U.jsx)("input",{hidden:!0,type:"file",id:"contactImg",onChange:h,name:"contactImg"})]}),Object(U.jsx)("div",{className:"actions-btn",children:Object(U.jsx)(B,{Icon:function(){return Object(U.jsx)("img",{src:St,alt:""})},onClick:f,className:"add-contact-btn"})})]})}):Object(U.jsx)("h1",{children:"Contact not found"})},Lt=function(t){return Object(U.jsxs)("form",{className:"contact-filter",onSubmit:function(t){return t.preventDefault()},children:[Object(U.jsx)("label",{htmlFor:"term",children:"Search contact"}),Object(U.jsx)("input",{type:"text",id:"term",name:"term",onChange:function(e){var n=e.target;t.onChangeFilter(n.value)},placeholder:"Search..."})]})},Ut=function(t){var e=t.contact;return Object(U.jsx)(i.b,{to:"/contact/".concat(e._id),children:Object(U.jsxs)("div",{className:"contact-preview",children:[e.contactImg?Object(U.jsx)("img",{src:e.contactImg,alt:""}):Object(U.jsx)("img",{src:ht,alt:""}),Object(U.jsx)("p",{children:e.contactName}),Object(U.jsx)("p",{children:e.contactEmail}),Object(U.jsx)("p",{children:e.contactPhone})]})})},Bt=function(t){var e=t.contacts;return Object(U.jsx)("ul",{className:"contact-list",children:e.map((function(t){return Object(U.jsx)("li",{children:Object(U.jsx)(Ut,{contact:t})},t._id)}))})},Ft=n.p+"static/media/plus.3463e9e3.png",Pt=function(t){var e=t.history,n=Object(c.useState)(null),r=Object(R.a)(n,2),a=(r[0],r[1]),s=Object(o.c)((function(t){return t.userReducer.user})),i=Object(c.useState)(null),u=Object(R.a)(i,2),l=u[0],j=u[1],p=Object(o.b)();Object(c.useEffect)((function(){s?j(s.contacts):p(L())}),[p,s]);return Object(U.jsxs)("div",{className:"contact-page",children:[Object(U.jsxs)("div",{className:"contact-header",children:[Object(U.jsx)(Lt,{onChangeFilter:function(t){a(t)}}),Object(U.jsx)(B,{Icon:function(){return Object(U.jsx)("img",{src:Ft,alt:""})},onClick:function(){e.push("/contact/edit")},className:"add-contact-btn"})]}),l?Object(U.jsx)(Bt,{contacts:l}):Object(U.jsx)("h1",{children:"No contacts to show"})]})},Rt=n(47),zt={getRate:function(){return Gt.apply(this,arguments)},getMarketPrice:function(){return _t.apply(this,arguments)},getConfirmedTransactions:function(){return Ht.apply(this,arguments)}};function Gt(){return(Gt=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Rt.get("https://blockchain.info/tobtc?currency=USD&value=1");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function _t(){return(_t=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Rt.get("https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function Ht(){return(Ht=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Rt.get("https://blockchain.info/tobtc?currency=USD&value=1");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}var Mt=n(109),Xt=n(105),Jt=n(214),Vt=n(208),Qt=["children"],qt=c.forwardRef((function(t,e){var n=t.children,c=Object(Mt.a)(t,Qt);return Object(U.jsxs)("svg",Object(Et.a)(Object(Et.a)({width:"150",height:"50"},c),{},{ref:e,children:[Object(U.jsx)("polygon",{points:"0,50 0,0 150,0 150,50",className:"bg"}),Object(U.jsx)("polygon",{points:"0,50 0,0 150,0 150,50",className:"borderEffect"}),Object(U.jsx)("foreignObject",{x:"0",y:"0",width:"150",height:"50",children:Object(U.jsx)("div",{className:"content",children:n})})]}))})),Yt=Object(Vt.a)(qt)((function(t){var e=t.theme;return"\n  overflow: visible;\n  cursor: pointer;\n  --main-color: ".concat("light"===e.palette.mode?"rgb(25,118,210)":"rgb(144,202,249)",";\n  --hover-color: ").concat("light"===e.palette.mode?"rgba(25,118,210,0.04)":"rgba(144,202,249,0.08)",";\n  --active-color: ").concat("light"===e.palette.mode?"rgba(25,118,210,0.12)":"rgba(144,202,249,0.24)",";\n\n  & polygon {\n    fill: transparent;\n    transition: all 800ms ease;\n    pointer-events: none;\n  }\n  \n  & .bg {\n    stroke: var(--main-color);\n    stroke-width: 0.5;\n    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));\n    fill: transparent;\n  }\n\n  & .borderEffect {\n    stroke: var(--main-color);\n    stroke-width: 2;\n    stroke-dasharray: 150 600;\n    stroke-dashoffset: 150;\n    fill: transparent;\n  }\n\n  &:hover,\n  &.").concat(Xt.a.focusVisible," {\n    .borderEffect {\n      stroke-dashoffset: -600;\n    }\n\n    .bg {\n      fill: var(--hover-color);\n    }\n  }\n\n  &:focus,\n  &.").concat(Xt.a.focusVisible," {\n    outline: none;\n  }\n\n  &.").concat(Xt.a.active," { \n    & .bg {\n      fill: var(--active-color);\n      transition: fill 300ms ease-out;\n    }\n  }\n\n  & foreignObject {\n    pointer-events: none;\n\n    & .content {\n      font-family: Helvetica, Inter, Arial, sans-serif;\n      font-size: 14px;\n      font-weight: 200;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: var(--main-color);\n      text-transform: uppercase;\n    }\n\n    & svg {\n      margin: 0 5px;\n    }\n  }")})),Wt=c.forwardRef((function(t,e){return Object(U.jsx)(Jt.a,Object(Et.a)(Object(Et.a)({},t),{},{component:Yt,ref:e}))})),Kt=function(){var t=Object(u.f)();return Object(U.jsx)(Wt,{onClick:function(){return t.push("/signup")},children:"Register Now"})},Zt=n.p+"static/media/minus.fdcf7131.png",$t=function(t){var e=t.history,n=Object(c.useState)(0),r=Object(R.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(!0),u=Object(R.a)(i,2),l=u[0],b=u[1],d=Object(o.c)((function(t){return t.userReducer.user})),h=Object(c.useState)(null),f=Object(R.a)(h,2),m=f[0],O=f[1],x=Object(o.b)(),g=Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(1/a),v=d?Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(1/a*d.coins):null;Object(c.useEffect)((function(){var t=function(){var t=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.getTransfers();case 2:(e=t.sent)&&O(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();d?t():x(L())}),[d,x]),Object(c.useEffect)((function(){var t=function(){var t=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,zt.getRate();case 2:e=t.sent,s(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[a]);var w=l?null===m||void 0===m?void 0:m.slice(0,3):m,y=l?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFIElEQVR4nO2bTWxVRRTHfxYeVmyND+PKtiKlQEwUAvhR2tT6sXCjyIaouC5GbUyURFAXbN2aiHEpfiE7UWMMMaZqJSIfsgGkr4ro2oJ9RbDYujj3cs9ML7fv3TszvEr/yUvmZWbO+c/cOTNnZs7APOZxTeO6ADoWAuuBDcBKoAtoB1qBxVGZ88A4cAaoACeB74HDwKUAHJ2jBdgCfApUgemcv3FgH/B0JLPhsRx4G5ggf6Ov9KsCu4BOl4RdmUA78AawGViQkv8z8A0ypCvAaeBPpFEgX3cJsBQxkXVAH7AiRda/wB5gO/CHI/65sQh4jfQvfgR4GemcvOgAtgFHU+RXgVeBUgH5hXA7MlFpUlOI3T/iQV8vsBeZFLXOHxHTC4pNwDmLyEHg3gC670carXWfBZ4IoBuAZzG/wt/AC0BTKAKRrsFId8zjErDVt+IdmD1/HLjLt9IMrEZ8Bs1phy9lWy1FB4BbfCmrA2VgCJPboGslmzCH/T6g2bWSAmhGOGlz2OhKeCfmhDdEYzU+RjPia+iJ8Y6iQhdhzrjHgZuLCvWIMnCChO8PFPQTXlfCznN1J7xasRpzdcg9KXZgenjPuWAXCIOYG6q2PEI+whxKIdf5omgCDpHwf69eAV0ks/4UYTw81+hGuMerwrJ6Kr9D0nufOKcWDp+TtOOtWiu1Ytp+rxdqstX9BRhFRpwPPIC5e7yxlkrPqEpHPRED2cp6d1+BY0rPk3Zm2sSmC33oiRSIjxHjeo969qj0rB1QAvrV/70+GAWGbsODyCHtZdgdsJ7ETirAb/54BcMoSTtuAtboTLsDulX6W4+kQmNIpXt0ht0Bq1T6iDc64aEn85U6w+4AvRyNeKMTHrotxpJrd4D2mU97oxMev6q0cUq90Cqob1/OFVC4AjmQyNo/9FjpVzLKTiEe6amcfM6qdGtWwXESpyGz4CwYVXJc/SoF+LQqOX/pjLm0w/MC2wSqJGbQgoyIPHgU8bqyfO9eEjMYBr7LKDuB6dHVCz2aM9s0QjJUVmUVdICdStdOz7ruVLpO6gzbBH5X6br2zw0O3ZYzOsPugCuul3Mc+u7QmEztDtDDY503OuGxVqUzTeCASvfz/0GfSg/rDLsDDiMzLojHFPza2QOWI1f5ID7ATzrT7oBJ4Gv1f8YBwhzEZpX+CokwuYw0R0ivt0/5YBThH5W+6FGP/ogf11KhBfNQ9GEPpED2C5Xo52vF6ce8IFmcXTzBLlXxSy/UwuALkna8WU/FTszr8L7s4g2JHpKLkUly3BR/QNIBx0gPf2tULEBWtJj/u3mEtGNGeW5zxS4AXsS0/dvyCtKXFxeBe1yw84w1wAUS3lkHLbOihNwMx8JGgVsLEvSJJUhUqo5jKhxIuQw5UtKBiY0YuHwDcpQf8xzDQYhMjI2Yq8J+arxoDIS0IKnHXCsZUAriyNBGMIcyZnDUNBK46QV2oOQI5lYzNO7GDIryfdMMSMCkNocLyLITOlT2eWaGyg6EIvA45sQ4jcTkdGdVcoT7EPPTusfwYPOzoQM5XLDP7/djXUA6wlpgNzPD5Q/i+BVJPSghzlLau6BDwEvkDFGL0BbJsMPjYw9vO1fxwYRGG/A+M79O/DuBBF4NAA8hT2PKiC03RemlUd5AVNae3LSt76aAe+sTnfh7NDWBbNPnxHF9CxJs9RnFns1VEQdnC568zxAPJ0vIJmoDctvUhZhMGWlU/HXHkFdgpxB/fhiZRyYDcJzHPK5V/AcZyuFxZOEzXgAAAABJRU5ErkJggg==":Zt,C=l?"Last 3 Transfers":"All Transfers",k=(null===d||void 0===d?void 0:d.coins)?"amount-plus":"amount-minus";return d?Object(U.jsxs)("div",{className:"home-page logged-user",children:[Object(U.jsxs)("div",{className:"user-balance",children:[Object(U.jsx)("h4",{children:"Wallet Balance:"}),Object(U.jsx)("h2",{className:k,children:v}),Object(U.jsxs)("h3",{children:["You have ",Object(U.jsx)("span",{className:k,children:d.coins})," ","bitcoins"]}),Object(U.jsxs)("h4",{children:["1 Bitcoin: ",g]})]}),m&&Object(U.jsxs)("div",{className:"transfers-table",children:[m.length>3&&Object(U.jsx)(B,{onClick:function(){return b((function(t){return!t}))},Icon:function(){return Object(U.jsx)("img",{src:y,alt:""})},className:"more-less-btn"}),Object(U.jsx)(yt,{title:C,rows:w})]})]}):Object(U.jsx)("div",{className:"home-page guest",children:Object(U.jsxs)("div",{className:"guest-welcome",children:[Object(U.jsx)("h1",{children:"Welcome to Mister Bitcoin"}),Object(U.jsx)("h3",{children:"Demo bitcoin wallet"}),Object(U.jsx)(Kt,{}),Object(U.jsx)("p",{onClick:function(){return e.push("/signup/login")},children:"Already registered? login"})]})})},te=(n(154),function(t){var e=Object(c.useState)(null),n=Object(R.a)(e,2),r=n[0],a=n[1],s=Object(o.b)(),i=Object(u.f)(),l=function(t){var e=t.target,n=e.name,c="number"===e.value?+e.value:e.value;a(Object(Et.a)(Object(Et.a)({},r),{},Object(Nt.a)({},n,c)))};return Object(U.jsx)("div",{children:Object(U.jsxs)("form",{onSubmit:function(t){t.preventDefault(),s(function(t){return function(){var e=Object(p.a)(j.a.mark((function e(n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.login(t);case 2:c=e.sent,n({type:"SET_USER",user:c});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(r)),i.push("/")},children:[Object(U.jsx)("h1",{children:"Login"}),Object(U.jsx)("label",{htmlFor:"email",children:"Email"}),Object(U.jsx)("input",{required:!0,type:"text",id:"email",onChange:l,name:"email",placeholder:"Ex.. israeli2021@gmail.com"}),Object(U.jsx)("label",{htmlFor:"password",children:"Password"}),Object(U.jsx)("input",{required:!0,type:"password",id:"password",onChange:l,name:"password",placeholder:"Ex.. !#@fdsf54%"}),Object(U.jsx)("button",{children:"Login"}),Object(U.jsx)("p",{onClick:function(){return i.push("/signup")},children:"Register now"})]})})}),ee=(n(155),function(){var t=Object(c.useState)(null),e=Object(R.a)(t,2),n=e[0],r=e[1],a=Object(o.b)(),s=Object(u.f)(),i=function(t){var e=t.target,c=e.name,a="number"===e.value?+e.value:e.value;r(Object(Et.a)(Object(Et.a)({},n),{},Object(Nt.a)({},c,a)))};return Object(U.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a(function(t){return function(){var e=Object(p.a)(j.a.mark((function e(n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.signup(t);case 3:e.next=9;break;case 5:throw e.prev=5,e.t0=e.catch(0),console.log({"err actions1":e.t0}),e.t0;case 9:return e.next=11,y.getLoggedInUser();case 11:c=e.sent,n({type:"SET_USER",user:c});case 13:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()}(n)).then((function(){s.push("/")})).catch((function(t){console.log({"err page":t})}))},children:[Object(U.jsx)("h1",{children:"Signup"}),Object(U.jsx)("label",{htmlFor:"fullname",children:"Full name"}),Object(U.jsx)("input",{required:!0,type:"text",id:"fullname",onChange:i,name:"fullname",placeholder:"Ex.. Israel Israeli"}),Object(U.jsx)("label",{htmlFor:"password",children:"Password"}),Object(U.jsx)("input",{required:!0,type:"password",id:"password-login",onChange:i,name:"password",placeholder:"Ex.. !#@fdsf54%"}),Object(U.jsx)("label",{htmlFor:"email",children:"Email"}),Object(U.jsx)("input",{required:!0,type:"text",id:"email-login",onChange:i,name:"email",placeholder:"Ex.. israeli2021@gmail.com"}),Object(U.jsx)("label",{htmlFor:"phone",children:"Phone number"}),Object(U.jsx)("input",{required:!0,type:"text",id:"phone",onChange:i,name:"phone",placeholder:"Ex.. 05x-xxxxxxx"}),Object(U.jsx)("button",{children:"Sign up"}),Object(U.jsx)("p",{onClick:function(){return s.push("/signup/login")},children:"Already registered? login"})]})}),ne=function(t){var e=Object(c.useState)("Login"),n=Object(R.a)(e,2),r=n[0],a=n[1];Object(c.useEffect)((function(){var e=t.history.location.pathname;a("/signup/login"===e?"Login":"SignUp")}),[t.history.location]);var s={SignUp:ee,Login:te}[r];return Object(U.jsx)("div",{className:"signup-page",children:Object(U.jsx)(s,{})})},ce=n(69),re=function(t){t.title;var e=t.data,n=t.description;return Object(U.jsxs)("div",{className:"chart",children:[Object(U.jsx)("h1",{children:n}),Object(U.jsxs)(ce.Sparklines,{data:e,children:[Object(U.jsx)(ce.SparklinesLine,{color:"red"}),Object(U.jsx)(ce.SparklinesSpots,{size:1})]})]})},ae=function(){var t=Object(c.useState)(null),e=Object(R.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(null),s=Object(R.a)(a,2),o=s[0],i=s[1];return Object(c.useEffect)((function(){var t=function(){var t=Object(p.a)(j.a.mark((function t(){var e,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,zt.getMarketPrice();case 3:e=t.sent,r(e),n=e.values.map((function(t){return t.y})),i(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),n&&o&&Object(U.jsxs)("div",{className:"statistic-page",children:[Object(U.jsx)("h1",{children:"Statistic page:"}),Object(U.jsx)(re,{title:n.name,description:n.description,data:o,color:"red"})]})},se=function(t){t.history;var e=Object(o.c)((function(t){return t.userReducer.user})),n=e.img?e.img:ht;return Object(U.jsx)("div",{className:"user-details-page",children:Object(U.jsxs)("div",{className:"user-details",children:[Object(U.jsx)("img",{src:n,alt:""}),Object(U.jsxs)("p",{children:["Fullname: ",e.fullname]}),Object(U.jsxs)("p",{children:["Phone: ",e.phone]}),Object(U.jsxs)("p",{children:["Email: ",e.email]})]})})},oe=function(){return Object(U.jsx)(i.a,{children:Object(U.jsxs)("div",{className:"App main-layout",children:[Object(U.jsx)(rt,{}),Object(U.jsxs)(u.c,{children:[Object(U.jsx)(u.a,{component:Dt,path:"/contact/edit/:id?"}),Object(U.jsx)(u.a,{component:kt,path:"/contact/:id"}),Object(U.jsx)(u.a,{component:Pt,path:"/contact"}),Object(U.jsx)(u.a,{component:se,path:"/user"}),Object(U.jsx)(u.a,{component:ae,path:"/statistic"}),Object(U.jsx)(u.a,{component:ne,path:"/signup"}),Object(U.jsx)(u.a,{component:$t,path:"/"})]}),Object(U.jsx)(V,{})]})})},ie=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,226)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),a(t),s(t)}))},ue=n(56),le=n(25),je={contacts:[],currContact:null};var pe={user:null},be=n(106),de=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ue.c,he=Object(ue.b)({contactReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_CONTACTS":return Object(Et.a)(Object(Et.a)({},t),{},{contacts:e.contacts});case"SET_CONTACT":return Object(Et.a)(Object(Et.a)({},t),{},{currContact:e.contact});case"ADD_CONTACT":return Object(Et.a)(Object(Et.a)({},t),{},{contacts:[].concat(Object(le.a)(t.contacts),[e.contact])});case"REMOVE_CONTACT":return Object(Et.a)(Object(Et.a)({},t),{},{contacts:t.contacts.filter((function(t){return t._id!==e.contactId}))});case"UPDATE_CONTACT":var n=e.updatedContact;return Object(Et.a)(Object(Et.a)({},t),{},{contacts:t.contacts.map((function(t){return t._id===n._id?n:t}))});default:return t}},userReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,e=arguments.length>1?arguments[1]:void 0;switch(console.log(e),e.type){case"SET_USER":return Object(Et.a)(Object(Et.a)({},t),{},{user:e.user});case"LOGOUT":return Object(Et.a)(Object(Et.a)({},t),{},{user:null});default:return t}}}),fe=Object(ue.d)(he,de(Object(ue.a)(be.a)));n(156);s.a.render(Object(U.jsx)(r.a.StrictMode,{children:Object(U.jsx)(o.a,{store:fe,children:Object(U.jsx)(oe,{})})}),document.getElementById("root")),ie()}},[[157,1,2]]]);
//# sourceMappingURL=main.01d1a23b.chunk.js.map