(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{153:function(t,e,n){},154:function(t,e,n){},155:function(t,e,n){},156:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(30),s=n.n(a),o=n(16),i=n(66),u=n(15),l=n(4),j=n.n(l),p=n(10),b=n(47),d=n.n(b),f="/api/",h=d.a.create({withCredentials:!0}),m=function(t,e){return v(t,"GET",e)},O=function(t,e){return v(t,"POST",e)},x=function(t,e){return v(t,"PUT",e)},g=function(t,e){return v(t,"DELETE",e)};function v(t){return w.apply(this,arguments)}function w(){return w=Object(p.a)(j.a.mark((function t(e){var n,c,r,a=arguments;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"GET",c=a.length>2&&void 0!==a[2]?a[2]:null,t.prev=2,t.next=5,h({url:"".concat(f).concat(e),method:n,data:c,params:"GET"===n?c:null});case 5:return r=t.sent,t.abrupt("return",r.data);case 9:throw t.prev=9,t.t0=t.catch(2),console.log("Had Issues ".concat(n,"ing to the backend, endpoint: ").concat(e,", with data: ").concat(c)),console.dir(t.t0),t.t0.response&&t.t0.response.status,t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,9]])}))),w.apply(this,arguments)}var y={getUsers:function(){return m("user")},getById:function(t){return m("user/".concat(t))},remove:function(t){return g("user/".concat(t))},update:function(t){return C.apply(this,arguments)},login:function(t){return k.apply(this,arguments)},signup:function(t){return E.apply(this,arguments)},logout:function(){return N.apply(this,arguments)},getLoggedInUser:function(){return A.apply(this,arguments)}};function C(){return(C=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x("user/".concat(e._id),e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(){return(k=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O("auth/login",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(){return(E=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O("auth/signup",e);case 3:return t.abrupt("return",t.sent);case 6:throw t.prev=6,t.t0=t.catch(0),console.log("service",t.t0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function N(){return(N=Object(p.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O("auth/logout");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function A(){return(A=Object(p.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m("user/loggedInUser");case 3:return t.abrupt("return",t.sent);case 6:throw t.prev=6,t.t0=t.catch(0),t.t0;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}window.userService=y;var T={addTransaction:function(t,e){return S.apply(this,arguments)},getTransactions:function(){return I.apply(this,arguments)},getTransactionsByContactId:function(t){return D.apply(this,arguments)}};function S(){return(S=Object(p.a)(j.a.mark((function t(e,n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O("transaction/",{contactEmail:e,amount:n});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function I(){return(I=Object(p.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m("transaction/");case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function D(){return(D=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m("transaction/".concat(e));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}var B=function(){return function(){var t=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.getLoggedInUser();case 2:n=t.sent,e({type:"SET_USER",user:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},L=n(1);function U(t){var e=t.onClick,n=t.Icon,c=t.children,r=t.className;return Object(L.jsxs)("button",{className:r,onClick:e,children:[Object(L.jsx)(n,{}),c]})}var F=n.p+"static/media/users.2e1249bc.png",P=n.p+"static/media/back.00987031.png",R=n(7),z=n(223),G=n(224),H=n(210),_=n.p+"static/media/bitcoin.2d4930d3.gif",M={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},X=function(){var t=Object(o.c)((function(t){return t.userReducer.user})),e=Object(u.g)(),n=c.useState(!1),r=Object(R.a)(n,2),a=r[0],s=r[1],i=function(){return s(!1)};return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(U,{onClick:function(){return s(!0)},Icon:function(){return Object(L.jsx)("img",{src:_,alt:""})},className:"bitcoin-gif"}),Object(L.jsx)(H.a,{open:a,onClose:i,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(L.jsxs)(z.a,{sx:M,children:[Object(L.jsx)(G.a,{variant:"h2",component:"h2",children:"Select Contact"}),t.contacts.map((function(t){return Object(L.jsx)(G.a,{component:"button",onClick:function(){return n=t._id,i(),void e.push("/contact/".concat(n));var n},children:t.contactName})}))]})})]})},J=function(){var t=Object(o.c)((function(t){return t.userReducer.user})),e=Object(u.g)(),n=Object(o.b)();Object(c.useEffect)((function(){t||n(B)}),[t,n]);return t&&Object(L.jsxs)("div",{className:"app-footer",children:[Object(L.jsx)(U,{className:"go-back-btn",Icon:function(){return Object(L.jsx)("img",{src:P,alt:""})},onClick:function(){e.goBack()}}),Object(L.jsx)(X,{}),Object(L.jsx)(U,{className:"contacts-btn",Icon:function(){return Object(L.jsx)("img",{src:F,alt:""})},onClick:function(){e.push("/contact")}})]})},V=n.p+"static/media/home.a1b9128a.png",Q=n(215),q=n(212),Y=n(213),W=n(207),K=n(225),Z=n(209),$=n(102),tt=n.n($),et=n(103),nt=n.n(et),ct=function(t){var e=t.loggedUser,n=t.logout,r=t.history,a=c.useState(null),s=Object(R.a)(a,2),o=s[0],i=s[1],u=Boolean(o),l=function(){i(null)},j=(null===e||void 0===e?void 0:e.coins)?"amount-plus":"amount-minus";return Object(L.jsxs)(c.Fragment,{children:[Object(L.jsxs)(z.a,{sx:{display:"flex",alignItems:"center",textAlign:"center"},children:[e&&Object(L.jsxs)("div",{className:"details-header",children:[Object(L.jsxs)(G.a,{children:["Welcome,"," ",Object(L.jsx)("span",{className:"header-fullname",children:e.fullname})]}),Object(L.jsxs)(G.a,{children:["Balance:"," ",Object(L.jsx)("span",{className:j,children:e.coins>0?e.coins.toFixed(2):0})," ","\u20bf"]})]}),Object(L.jsx)(Z.a,{title:"Profile",children:Object(L.jsx)(K.a,{onClick:function(t){i(t.currentTarget)},size:"small",sx:{ml:2},children:e?Object(L.jsx)(Q.a,{alt:e.fullname,src:e.img}):Object(L.jsx)(Q.a,{})})})]}),Object(L.jsxs)(q.a,{anchorEl:o,open:u,onClose:l,onClick:l,PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[e&&Object(L.jsxs)(Y.a,{onClick:function(){return r.push("/user")},children:[Object(L.jsx)(Q.a,{}),"Profile"]}),e&&Object(L.jsxs)(Y.a,{onClick:n,children:[Object(L.jsx)(W.a,{children:Object(L.jsx)(tt.a,{fontSize:"small"})}),"Logout"]}),!e&&Object(L.jsxs)(Y.a,{onClick:function(){return r.push("/signup/login")},children:[Object(L.jsx)(W.a,{children:Object(L.jsx)(nt.a,{fontSize:"small"})}),"Login"]}),!e&&Object(L.jsx)(Y.a,{onClick:function(){return r.push("/signup")},children:"SignUp"})]})]})},rt=function(){var t=Object(o.c)((function(t){return t.userReducer.user})),e=Object(u.g)(),n=Object(o.b)();return Object(L.jsxs)("header",{className:"app-header full",children:[Object(L.jsx)(U,{Icon:function(){return Object(L.jsx)("img",{src:V,alt:""})},onClick:function(){return e.push("/")},className:"home-logo"}),Object(L.jsx)(ct,{loggedUser:t,logout:function(){n(function(){var t=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.logout();case 2:e({type:"LOGOUT"});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e.push("/")},history:e})]})},at=n.p+"static/media/send.92500005.png",st=function(t){t.contact;var e=t.onTransactionCoins,n=Object(c.useState)(0),r=Object(R.a)(n,2),a=r[0],s=r[1],o=Object(u.g)(),i=function(t){e(a,t),o.push("/contact")};return Object(L.jsx)("section",{className:"transaction-fund",children:Object(L.jsxs)("form",{onSubmit:i,children:[Object(L.jsx)("label",{htmlFor:"amount",children:"Transaction Coins"}),Object(L.jsx)("input",{required:!0,placeholder:"Amount",min:"0",id:"amount",type:"number",onChange:function(t){var e=t.target,n="number"===e.type?+e.value:e.value;s(n)},name:"amount",step:"0.01"}),Object(L.jsx)(U,{Icon:function(){return Object(L.jsx)("img",{src:at,alt:""})},onClick:i,className:"send-coin-btn"})]})})},ot={getContacts:function(){return lt.apply(this,arguments)},getContactById:function(t){return jt.apply(this,arguments)},deleteContact:function(t){return pt.apply(this,arguments)},saveContact:function(t){return bt.apply(this,arguments)},getEmptyContact:function(){return{contactName:"",contactEmail:"",contactPhone:""}}},it="contact/";function ut(t){return t.sort((function(t,e){return t.contactName.toLocaleLowerCase()<e.contactName.toLocaleLowerCase()?-1:t.contactName.toLocaleLowerCase()>e.contactName.toLocaleLowerCase()?1:0}))}function lt(){return lt=Object(p.a)(j.a.mark((function t(){var e,n,c,r=arguments;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:null,t.prev=1,t.next=4,m(it);case 4:if(c=t.sent,!e){t.next=8;break}return n=dt(e,c),t.abrupt("return",ut(n));case 8:return t.abrupt("return",ut(c));case 11:t.prev=11,t.t0=t.catch(1),console.log("cant get contacts",t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])}))),lt.apply(this,arguments)}function jt(){return(jt=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m(it+e);case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log("Contact id ".concat(e," not found!"),t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function pt(){return(pt=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g(it+e,e);case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log("cant delete contact ".concat(e),t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function bt(){return(bt=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e._id){t.next=7;break}return t.next=4,x(it+e._id,e);case 4:n=t.sent,t.next=10;break;case 7:return t.next=9,O(it,e);case 9:n=t.sent;case 10:return t.abrupt("return",n);case 13:t.prev=13,t.t0=t.catch(0),console.log("cant save contact ".concat(e),t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function dt(t,e){t=t.toLocaleLowerCase();var n=e.filter((function(e){return e.contactName.toLocaleLowerCase().includes(t)||e.contactPhone.toLocaleLowerCase().includes(t)||e.contactEmail.toLocaleLowerCase().includes(t)}));return console.log({filteredContacts:n}),n}var ft=n.p+"static/media/contact.42200432.png",ht=n(218),mt=n(222),Ot=n(221),xt=n(217),gt=n(219),vt=n(220),wt=n(216),yt=function(t){var e=t.rows,n=t.title,c=Object(o.c)((function(t){return t.userReducer.user}));return Object(L.jsxs)(xt.a,{component:wt.a,children:[Object(L.jsx)("h2",{children:n}),Object(L.jsxs)(ht.a,{sx:{minWidth:650},"aria-label":"sticky table",children:[Object(L.jsx)(gt.a,{children:Object(L.jsxs)(vt.a,{hover:!0,role:"checkbox",children:[Object(L.jsx)(Ot.a,{children:"Date"}),Object(L.jsx)(Ot.a,{children:"From"}),Object(L.jsx)(Ot.a,{children:"To"}),Object(L.jsx)(Ot.a,{children:"Amount"}),Object(L.jsx)(Ot.a,{children:"Balance"})]})}),Object(L.jsx)(mt.a,{children:e.map((function(t){return Object(L.jsxs)(vt.a,{hover:!0,sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(L.jsx)(Ot.a,{children:new Date(t.createdAt).toLocaleDateString()}),t.from===c.email?Object(L.jsx)(Ot.a,{children:c.fullname}):Object(L.jsx)(Ot.a,{children:t.from}),t.to===c.email?Object(L.jsx)(Ot.a,{children:c.fullname}):Object(L.jsx)(Ot.a,{children:t.to}),Object(L.jsx)(Ot.a,{className:c.email===t.to?"amount-plus":"amount-minus",children:c.email===t.to?"+".concat(t.amount):"-".concat(t.amount)}),Object(L.jsx)(Ot.a,{children:'"TO_FIX"'})]},t._id)}))})]})]})},Ct=n.p+"static/media/edit.b0c1b178.png",kt=function(t){var e=Object(o.c)((function(t){return t.userReducer.user})),n=Object(o.c)((function(t){return t.contactReducer.currContact})),r=Object(c.useState)(null),a=Object(R.a)(r,2),s=a[0],i=a[1],u=Object(o.b)();Object(c.useEffect)((function(){var e;u((e=t.match.params.id,function(){var t=Object(p.a)(j.a.mark((function t(n){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ot.getContactById(e);case 2:c=t.sent,n({type:"SET_CONTACT",contact:c});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[t.match.params.id,u]),Object(c.useEffect)((function(){e||u(B())}),[e,u]),Object(c.useEffect)((function(){var t=function(){var t=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.getTransactionsByContactId(n._id);case 2:(e=t.sent).length&&i(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();n&&t()}),[n]);return n?Object(L.jsxs)("div",{className:"contact-details-page",children:[Object(L.jsxs)("div",{className:"contact-details",children:[Object(L.jsx)(U,{Icon:function(){return Object(L.jsx)("img",{src:Ct,alt:""})},onClick:function(){t.history.push("/contact/edit/".concat(n._id))},className:"edit-logo"}),Object(L.jsx)("div",{className:"contact-img-details",children:n.contactImg?Object(L.jsx)("img",{src:n.contactImg,alt:"",className:"contact-img"}):Object(L.jsx)("img",{src:ft,alt:"",className:"contact-img"})}),Object(L.jsxs)("p",{children:["Name: ",n.contactName]}),Object(L.jsxs)("p",{children:["Email: ",n.contactEmail]}),Object(L.jsxs)("p",{children:["Phone: ",n.contactPhone]})]}),Object(L.jsx)(st,{contact:n,onTransactionCoins:function(t,c){if(c.preventDefault(),e.coins<t)return alert("No enough money");var r,a;u((r=n.contactEmail,a=t,function(){var t=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.addTransaction(r,a);case 2:n=t.sent,e({type:"SET_USER",user:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}}),s&&Object(L.jsx)(yt,{title:"Transactions with contact",rows:s})]}):Object(L.jsx)("div",{children:"Contact not found..."})},Et=n(9),Nt=n(17),At=function(){var t=Object(p.a)(j.a.mark((function t(e){var n,c,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"mister-bitcoin-present","mister-bitcoin",n="https://api.cloudinary.com/v1_1/".concat("mister-bitcoin","/image/upload"),(c=new FormData).append("file",e.target.files[0]),c.append("upload_preset","mister-bitcoin-present"),t.prev=6,t.next=9,d.a.post(n,c);case 9:return r=t.sent,t.abrupt("return",r.data);case 13:t.prev=13,t.t0=t.catch(6),console.error("ERROR!",t.t0);case 16:case"end":return t.stop()}}),t,null,[[6,13]])})));return function(e){return t.apply(this,arguments)}}(),Tt=n.p+"static/media/add-contact.1f6972cf.png",St=n.p+"static/media/upload.0a143b40.png",It=n.p+"static/media/loading.643ca93f.gif",Dt=function(t){var e=Object(o.c)((function(t){return t.userReducer.user})),n=Object(c.useState)(null),r=Object(R.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(!1),u=Object(R.a)(i,2),l=u[0],b=u[1],d=Object(o.b)();Object(c.useEffect)((function(){e||d(B())}),[d,e]),Object(c.useEffect)((function(){var e=function(){var t=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=6;break}return t.next=3,ot.getContactById(e);case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0=ot.getEmptyContact();case 7:n=t.t0,s(n);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e(t.match.params.id)}),[t.match.params.id]);var f=function(){var t=Object(p.a)(j.a.mark((function t(e){var n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.target.name,"file"!==e.target.type){t.next=9;break}return b(!0),t.next=5,At(e);case 5:c=t.sent.url,b(!1),t.next=10;break;case 9:c="number"===e.target.type?+e.target.value:e.target.value;case 10:s(Object(Nt.a)(Object(Nt.a)({},a),{},Object(Et.a)({},n,c)));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(e){e.preventDefault(),d(function(t){return function(){var e=Object(p.a)(j.a.mark((function e(n){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=!t._id,e.next=3,ot.saveContact(t);case 3:r=e.sent,n(c?{type:"ADD_CONTACT",contact:r}:{type:"UPDATE_CONTACT",updatedContact:r}),n(B());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(a)),t.history.push("/contact")};return a?Object(L.jsx)("div",{className:"contact-edit",children:Object(L.jsxs)("form",{onSubmit:h,children:[Object(L.jsxs)("div",{className:"contact-name",children:[Object(L.jsx)("label",{htmlFor:"contactName",children:"Fullname"}),Object(L.jsx)("input",{required:!0,type:"text",id:"contactName",value:a.contactName,onChange:f,name:"contactName"})]}),Object(L.jsxs)("div",{className:"contact-email",children:[Object(L.jsx)("label",{htmlFor:"contactEmail",children:"Email Address"}),Object(L.jsx)("input",{required:!0,type:"text",id:"contactEmail",value:a.contactEmail,onChange:f,name:"contactEmail"})]}),Object(L.jsxs)("div",{className:"contact-phone",children:[Object(L.jsx)("label",{htmlFor:"contactPhone",children:"Phone Number"}),Object(L.jsx)("input",{required:!0,type:"text",id:"contactPhone",value:a.contactPhone,onChange:f,name:"contactPhone"})]}),Object(L.jsxs)("div",{className:"contact-img",children:[Object(L.jsx)("label",{htmlFor:"contactImg",children:Object(L.jsx)("img",{src:St,alt:""})}),l?Object(L.jsx)("img",{src:It,alt:""}):Object(L.jsx)("label",{htmlFor:"contactImg",children:Object(L.jsx)("img",{src:a.contactImg,alt:""})}),Object(L.jsx)("input",{hidden:!0,type:"file",id:"contactImg",onChange:f,name:"contactImg"})]}),Object(L.jsx)("div",{className:"actions-btn",children:Object(L.jsx)(U,{Icon:function(){return Object(L.jsx)("img",{src:Tt,alt:""})},onClick:h,className:"add-contact-btn"})})]})}):Object(L.jsx)("h1",{children:"Contact not found"})},Bt=function(t){return Object(L.jsxs)("form",{className:"contact-filter",onSubmit:function(t){return t.preventDefault()},children:[Object(L.jsx)("label",{htmlFor:"term",children:"Search contact"}),Object(L.jsx)("input",{type:"text",id:"term",name:"term",onChange:function(e){var n=e.target;t.onChangeFilter(n.value)},placeholder:"Search..."})]})},Lt=function(t){var e=t.contact;return Object(L.jsx)(i.b,{to:"/contact/".concat(e._id),children:Object(L.jsxs)("div",{className:"contact-preview",children:[e.contactImg?Object(L.jsx)("img",{src:e.contactImg,alt:""}):Object(L.jsx)("img",{src:ft,alt:""}),Object(L.jsx)("p",{children:e.contactName}),Object(L.jsx)("p",{children:e.contactEmail}),Object(L.jsx)("p",{children:e.contactPhone})]})})},Ut=function(t){var e=t.contacts;return Object(L.jsx)("ul",{className:"contact-list",children:e.map((function(t){return Object(L.jsx)("li",{children:Object(L.jsx)(Lt,{contact:t})},t._id)}))})},Ft=n.p+"static/media/plus.3463e9e3.png",Pt=function(t){var e=t.history,n=Object(c.useState)(null),r=Object(R.a)(n,2),a=(r[0],r[1]),s=Object(o.c)((function(t){return t.userReducer.user})),i=Object(o.b)();Object(c.useEffect)((function(){s||i(B())}),[i,s]);return s?Object(L.jsxs)("div",{className:"contact-page",children:[Object(L.jsxs)("div",{className:"contact-header",children:[Object(L.jsx)(Bt,{onChangeFilter:function(t){a(t)}}),Object(L.jsx)(U,{Icon:function(){return Object(L.jsx)("img",{src:Ft,alt:""})},onClick:function(){e.push("/contact/edit")},className:"add-contact-btn"})]}),s.contacts?Object(L.jsx)(Ut,{contacts:s.contacts}):Object(L.jsx)("h1",{children:"No contacts to show"})]}):Object(L.jsx)(u.a,{to:"/"})},Rt=n(47),zt={getRate:function(){return Gt.apply(this,arguments)},getMarketPrice:function(){return Ht.apply(this,arguments)},getConfirmedTransactions:function(){return _t.apply(this,arguments)}};function Gt(){return(Gt=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Rt.get("https://blockchain.info/tobtc?currency=USD&value=1");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function Ht(){return(Ht=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Rt.get("https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function _t(){return(_t=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Rt.get("https://blockchain.info/tobtc?currency=USD&value=1");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}var Mt=n(108),Xt=n(104),Jt=n(214),Vt=n(208),Qt=["children"],qt=c.forwardRef((function(t,e){var n=t.children,c=Object(Mt.a)(t,Qt);return Object(L.jsxs)("svg",Object(Nt.a)(Object(Nt.a)({width:"150",height:"50"},c),{},{ref:e,children:[Object(L.jsx)("polygon",{points:"0,50 0,0 150,0 150,50",className:"bg"}),Object(L.jsx)("polygon",{points:"0,50 0,0 150,0 150,50",className:"borderEffect"}),Object(L.jsx)("foreignObject",{x:"0",y:"0",width:"150",height:"50",children:Object(L.jsx)("div",{className:"content",children:n})})]}))})),Yt=Object(Vt.a)(qt)((function(t){var e=t.theme;return"\n  overflow: visible;\n  cursor: pointer;\n  --main-color: ".concat("light"===e.palette.mode?"rgb(25,118,210)":"rgb(144,202,249)",";\n  --hover-color: ").concat("light"===e.palette.mode?"rgba(25,118,210,0.04)":"rgba(144,202,249,0.08)",";\n  --active-color: ").concat("light"===e.palette.mode?"rgba(25,118,210,0.12)":"rgba(144,202,249,0.24)",";\n\n  & polygon {\n    fill: transparent;\n    transition: all 800ms ease;\n    pointer-events: none;\n  }\n  \n  & .bg {\n    stroke: var(--main-color);\n    stroke-width: 0.5;\n    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));\n    fill: transparent;\n  }\n\n  & .borderEffect {\n    stroke: var(--main-color);\n    stroke-width: 2;\n    stroke-dasharray: 150 600;\n    stroke-dashoffset: 150;\n    fill: transparent;\n  }\n\n  &:hover,\n  &.").concat(Xt.a.focusVisible," {\n    .borderEffect {\n      stroke-dashoffset: -600;\n    }\n\n    .bg {\n      fill: var(--hover-color);\n    }\n  }\n\n  &:focus,\n  &.").concat(Xt.a.focusVisible," {\n    outline: none;\n  }\n\n  &.").concat(Xt.a.active," { \n    & .bg {\n      fill: var(--active-color);\n      transition: fill 300ms ease-out;\n    }\n  }\n\n  & foreignObject {\n    pointer-events: none;\n\n    & .content {\n      font-family: Helvetica, Inter, Arial, sans-serif;\n      font-size: 14px;\n      font-weight: 200;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: var(--main-color);\n      text-transform: uppercase;\n    }\n\n    & svg {\n      margin: 0 5px;\n    }\n  }")})),Wt=c.forwardRef((function(t,e){return Object(L.jsx)(Jt.a,Object(Nt.a)(Object(Nt.a)({},t),{},{component:Yt,ref:e}))})),Kt=function(){var t=Object(u.g)();return Object(L.jsx)(Wt,{onClick:function(){return t.push("/signup")},children:"Register Now"})},Zt=n.p+"static/media/minus.fdcf7131.png",$t=function(t){var e=t.history,n=Object(c.useState)(0),r=Object(R.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(!0),u=Object(R.a)(i,2),l=u[0],b=u[1],d=Object(o.c)((function(t){return t.userReducer.user})),f=Object(c.useState)(null),h=Object(R.a)(f,2),m=h[0],O=h[1],x=Object(o.b)(),g=Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(1/a),v=d?Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(1/a*d.coins):null;Object(c.useEffect)((function(){d||x(B())}),[d,x]),Object(c.useEffect)((function(){var t=function(){var t=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.getTransactions();case 2:(e=t.sent)&&O(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();d&&t()}),[d]),Object(c.useEffect)((function(){var t=function(){var t=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,zt.getRate();case 2:e=t.sent,s(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[a]);var w=l?null===m||void 0===m?void 0:m.slice(0,3):m,y=l?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFIElEQVR4nO2bTWxVRRTHfxYeVmyND+PKtiKlQEwUAvhR2tT6sXCjyIaouC5GbUyURFAXbN2aiHEpfiE7UWMMMaZqJSIfsgGkr4ro2oJ9RbDYujj3cs9ML7fv3TszvEr/yUvmZWbO+c/cOTNnZs7APOZxTeO6ADoWAuuBDcBKoAtoB1qBxVGZ88A4cAaoACeB74HDwKUAHJ2jBdgCfApUgemcv3FgH/B0JLPhsRx4G5ggf6Ov9KsCu4BOl4RdmUA78AawGViQkv8z8A0ypCvAaeBPpFEgX3cJsBQxkXVAH7AiRda/wB5gO/CHI/65sQh4jfQvfgR4GemcvOgAtgFHU+RXgVeBUgH5hXA7MlFpUlOI3T/iQV8vsBeZFLXOHxHTC4pNwDmLyEHg3gC670carXWfBZ4IoBuAZzG/wt/AC0BTKAKRrsFId8zjErDVt+IdmD1/HLjLt9IMrEZ8Bs1phy9lWy1FB4BbfCmrA2VgCJPboGslmzCH/T6g2bWSAmhGOGlz2OhKeCfmhDdEYzU+RjPia+iJ8Y6iQhdhzrjHgZuLCvWIMnCChO8PFPQTXlfCznN1J7xasRpzdcg9KXZgenjPuWAXCIOYG6q2PEI+whxKIdf5omgCDpHwf69eAV0ks/4UYTw81+hGuMerwrJ6Kr9D0nufOKcWDp+TtOOtWiu1Ytp+rxdqstX9BRhFRpwPPIC5e7yxlkrPqEpHPRED2cp6d1+BY0rPk3Zm2sSmC33oiRSIjxHjeo969qj0rB1QAvrV/70+GAWGbsODyCHtZdgdsJ7ETirAb/54BcMoSTtuAtboTLsDulX6W4+kQmNIpXt0ht0Bq1T6iDc64aEn85U6w+4AvRyNeKMTHrotxpJrd4D2mU97oxMev6q0cUq90Cqob1/OFVC4AjmQyNo/9FjpVzLKTiEe6amcfM6qdGtWwXESpyGz4CwYVXJc/SoF+LQqOX/pjLm0w/MC2wSqJGbQgoyIPHgU8bqyfO9eEjMYBr7LKDuB6dHVCz2aM9s0QjJUVmUVdICdStdOz7ruVLpO6gzbBH5X6br2zw0O3ZYzOsPugCuul3Mc+u7QmEztDtDDY503OuGxVqUzTeCASvfz/0GfSg/rDLsDDiMzLojHFPza2QOWI1f5ID7ATzrT7oBJ4Gv1f8YBwhzEZpX+CokwuYw0R0ivt0/5YBThH5W+6FGP/ogf11KhBfNQ9GEPpED2C5Xo52vF6ce8IFmcXTzBLlXxSy/UwuALkna8WU/FTszr8L7s4g2JHpKLkUly3BR/QNIBx0gPf2tULEBWtJj/u3mEtGNGeW5zxS4AXsS0/dvyCtKXFxeBe1yw84w1wAUS3lkHLbOihNwMx8JGgVsLEvSJJUhUqo5jKhxIuQw5UtKBiY0YuHwDcpQf8xzDQYhMjI2Yq8J+arxoDIS0IKnHXCsZUAriyNBGMIcyZnDUNBK46QV2oOQI5lYzNO7GDIryfdMMSMCkNocLyLITOlT2eWaGyg6EIvA45sQ4jcTkdGdVcoT7EPPTusfwYPOzoQM5XLDP7/djXUA6wlpgNzPD5Q/i+BVJPSghzlLau6BDwEvkDFGL0BbJsMPjYw9vO1fxwYRGG/A+M79O/DuBBF4NAA8hT2PKiC03RemlUd5AVNae3LSt76aAe+sTnfh7NDWBbNPnxHF9CxJs9RnFns1VEQdnC568zxAPJ0vIJmoDctvUhZhMGWlU/HXHkFdgpxB/fhiZRyYDcJzHPK5V/AcZyuFxZOEzXgAAAABJRU5ErkJggg==":Zt,C=l?"Last 3 Transactions":"All Transactions",k=(null===d||void 0===d?void 0:d.coins)?"amount-plus":"amount-minus";return d?Object(L.jsxs)("div",{className:"home-page logged-user",children:[Object(L.jsxs)("div",{className:"user-balance",children:[Object(L.jsx)("h4",{children:"Wallet Balance:"}),Object(L.jsx)("h2",{className:k,children:v}),Object(L.jsxs)("h3",{children:["You have ",Object(L.jsx)("span",{className:k,children:d.coins})," ","bitcoins"]}),Object(L.jsxs)("h4",{children:["1 Bitcoin: ",g]})]}),m&&Object(L.jsxs)("div",{className:"transactions-table",children:[m.length>3&&Object(L.jsx)(U,{onClick:function(){return b((function(t){return!t}))},Icon:function(){return Object(L.jsx)("img",{src:y,alt:""})},className:"more-less-btn"}),Object(L.jsx)(yt,{title:C,rows:w})]})]}):Object(L.jsx)("div",{className:"home-page guest",children:Object(L.jsxs)("div",{className:"guest-welcome",children:[Object(L.jsx)("h1",{children:"Welcome to Mister Bitcoin"}),Object(L.jsx)("h3",{children:"Demo bitcoin wallet"}),Object(L.jsx)(Kt,{}),Object(L.jsx)("p",{onClick:function(){return e.push("/signup/login")},children:"Already registered? login"})]})})},te=(n(153),function(t){var e=Object(c.useState)(null),n=Object(R.a)(e,2),r=n[0],a=n[1],s=Object(o.b)(),i=Object(u.g)(),l=function(t){var e=t.target,n=e.name,c="number"===e.value?+e.value:e.value;a(Object(Nt.a)(Object(Nt.a)({},r),{},Object(Et.a)({},n,c)))};return Object(L.jsx)("div",{children:Object(L.jsxs)("form",{onSubmit:function(t){t.preventDefault(),s(function(t){return function(){var e=Object(p.a)(j.a.mark((function e(n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.login(t);case 2:c=e.sent,n({type:"SET_USER",user:c});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(r)),i.push("/")},children:[Object(L.jsx)("h1",{children:"Login"}),Object(L.jsx)("label",{htmlFor:"email",children:"Email"}),Object(L.jsx)("input",{required:!0,type:"text",id:"email",onChange:l,name:"email",placeholder:"Ex.. israeli2021@gmail.com"}),Object(L.jsx)("label",{htmlFor:"password",children:"Password"}),Object(L.jsx)("input",{required:!0,type:"password",id:"password",onChange:l,name:"password",placeholder:"Ex.. !#@fdsf54%"}),Object(L.jsx)("button",{children:"Login"}),Object(L.jsx)("p",{onClick:function(){return i.push("/signup")},children:"Register now"})]})})}),ee=(n(154),function(){var t=Object(c.useState)(null),e=Object(R.a)(t,2),n=e[0],r=e[1],a=Object(o.b)(),s=Object(u.g)(),i=function(t){var e=t.target,c=e.name,a="number"===e.value?+e.value:e.value;r(Object(Nt.a)(Object(Nt.a)({},n),{},Object(Et.a)({},c,a)))};return Object(L.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a(function(t){return function(){var e=Object(p.a)(j.a.mark((function e(n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.signup(t);case 3:e.next=9;break;case 5:throw e.prev=5,e.t0=e.catch(0),console.log({"err actions1":e.t0}),e.t0;case 9:return e.next=11,y.getLoggedInUser();case 11:c=e.sent,n({type:"SET_USER",user:c});case 13:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()}(n)).then((function(){s.push("/")})).catch((function(t){console.log({"err page":t})}))},children:[Object(L.jsx)("h1",{children:"Signup"}),Object(L.jsx)("label",{htmlFor:"fullname",children:"Full name"}),Object(L.jsx)("input",{required:!0,type:"text",id:"fullname",onChange:i,name:"fullname",placeholder:"Ex.. Israel Israeli"}),Object(L.jsx)("label",{htmlFor:"password",children:"Password"}),Object(L.jsx)("input",{required:!0,type:"password",id:"password-login",onChange:i,name:"password",placeholder:"Ex.. !#@fdsf54%"}),Object(L.jsx)("label",{htmlFor:"email",children:"Email"}),Object(L.jsx)("input",{required:!0,type:"text",id:"email-login",onChange:i,name:"email",placeholder:"Ex.. israeli2021@gmail.com"}),Object(L.jsx)("label",{htmlFor:"phone",children:"Phone number"}),Object(L.jsx)("input",{required:!0,type:"text",id:"phone",onChange:i,name:"phone",placeholder:"Ex.. 05x-xxxxxxx"}),Object(L.jsx)("button",{children:"Sign up"}),Object(L.jsx)("p",{onClick:function(){return s.push("/signup/login")},children:"Already registered? login"})]})}),ne=function(t){var e=Object(c.useState)("Login"),n=Object(R.a)(e,2),r=n[0],a=n[1];Object(c.useEffect)((function(){var e=t.history.location.pathname;a("/signup/login"===e?"Login":"SignUp")}),[t.history.location]);var s={SignUp:ee,Login:te}[r];return Object(L.jsx)("div",{className:"signup-page",children:Object(L.jsx)(s,{})})},ce=n(69),re=function(t){t.title;var e=t.data,n=t.description;return Object(L.jsxs)("div",{className:"chart",children:[Object(L.jsx)("h1",{children:n}),Object(L.jsxs)(ce.Sparklines,{data:e,children:[Object(L.jsx)(ce.SparklinesLine,{color:"red"}),Object(L.jsx)(ce.SparklinesSpots,{size:1})]})]})},ae=function(){var t=Object(c.useState)(null),e=Object(R.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(null),s=Object(R.a)(a,2),o=s[0],i=s[1];return Object(c.useEffect)((function(){var t=function(){var t=Object(p.a)(j.a.mark((function t(){var e,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,zt.getMarketPrice();case 3:e=t.sent,r(e),n=e.values.map((function(t){return t.y})),i(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),n&&o&&Object(L.jsxs)("div",{className:"statistic-page",children:[Object(L.jsx)("h1",{children:"Statistic page:"}),Object(L.jsx)(re,{title:n.name,description:n.description,data:o,color:"red"})]})},se=function(t){t.history;var e=Object(o.c)((function(t){return t.userReducer.user})),n=e.img?e.img:ft;return Object(L.jsx)("div",{className:"user-details-page",children:Object(L.jsxs)("div",{className:"user-details",children:[Object(L.jsx)("img",{src:n,alt:""}),Object(L.jsxs)("p",{children:["Fullname: ",e.fullname]}),Object(L.jsxs)("p",{children:["Phone: ",e.phone]}),Object(L.jsxs)("p",{children:["Email: ",e.email]})]})})},oe=function(){return Object(L.jsx)(i.a,{children:Object(L.jsxs)("div",{className:"App main-layout",children:[Object(L.jsx)(rt,{}),Object(L.jsxs)(u.d,{children:[Object(L.jsx)(u.b,{component:Dt,path:"/contact/edit/:id?"}),Object(L.jsx)(u.b,{component:kt,path:"/contact/:id"}),Object(L.jsx)(u.b,{component:Pt,path:"/contact"}),Object(L.jsx)(u.b,{component:se,path:"/user"}),Object(L.jsx)(u.b,{component:ae,path:"/statistic"}),Object(L.jsx)(u.b,{component:ne,path:"/signup"}),Object(L.jsx)(u.b,{component:$t,path:"/"})]}),Object(L.jsx)(J,{})]})})},ie=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,226)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),a(t),s(t)}))},ue=n(56),le=n(25),je={contacts:[],currContact:null};var pe={user:null},be=n(105),de=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ue.c,fe=Object(ue.b)({contactReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_CONTACTS":return Object(Nt.a)(Object(Nt.a)({},t),{},{contacts:e.contacts});case"SET_CONTACT":return Object(Nt.a)(Object(Nt.a)({},t),{},{currContact:e.contact});case"ADD_CONTACT":return Object(Nt.a)(Object(Nt.a)({},t),{},{contacts:[].concat(Object(le.a)(t.contacts),[e.contact])});case"REMOVE_CONTACT":return Object(Nt.a)(Object(Nt.a)({},t),{},{contacts:t.contacts.filter((function(t){return t._id!==e.contactId}))});case"UPDATE_CONTACT":var n=e.updatedContact;return Object(Nt.a)(Object(Nt.a)({},t),{},{contacts:t.contacts.map((function(t){return t._id===n._id?n:t}))});default:return t}},userReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,e=arguments.length>1?arguments[1]:void 0;switch(console.log(e),e.type){case"SET_USER":return Object(Nt.a)(Object(Nt.a)({},t),{},{user:e.user});case"LOGOUT":return Object(Nt.a)(Object(Nt.a)({},t),{},{user:null});default:return t}}}),he=Object(ue.d)(fe,de(Object(ue.a)(be.a)));n(155);s.a.render(Object(L.jsx)(r.a.StrictMode,{children:Object(L.jsx)(o.a,{store:he,children:Object(L.jsx)(oe,{})})}),document.getElementById("root")),ie()}},[[156,1,2]]]);
//# sourceMappingURL=main.374771ff.chunk.js.map