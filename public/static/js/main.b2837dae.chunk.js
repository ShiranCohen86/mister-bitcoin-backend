(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{150:function(t,e,n){},151:function(t,e,n){},152:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(30),s=n.n(a),o=n(18),i=n(51),u=n(15),l=n(4),p=n.n(l),j=n(10),h=n(47),b=n.n(h),d="/api/",f=b.a.create({withCredentials:!0}),O=function(t,e){return g(t,"GET",e)},m=function(t,e){return g(t,"POST",e)},x=function(t,e){return g(t,"PUT",e)},v=function(t,e){return g(t,"DELETE",e)};function g(t){return y.apply(this,arguments)}function y(){return y=Object(j.a)(p.a.mark((function t(e){var n,c,r,a=arguments;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"GET",c=a.length>2&&void 0!==a[2]?a[2]:null,t.prev=2,t.next=5,f({url:"".concat(d).concat(e),method:n,data:c,params:"GET"===n?c:null});case 5:return r=t.sent,t.abrupt("return",r.data);case 9:throw t.prev=9,t.t0=t.catch(2),console.log("Had Issues ".concat(n,"ing to the backend, endpoint: ").concat(e,", with data: ").concat(c)),console.dir(t.t0),t.t0.response&&t.t0.response.status,t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,9]])}))),y.apply(this,arguments)}var w={getUsers:function(){return O("user")},getById:function(t){return O("user/".concat(t))},remove:function(t){return v("user/".concat(t))},update:function(t){return C.apply(this,arguments)},login:function(t){return k.apply(this,arguments)},signup:function(t){return S.apply(this,arguments)},logout:function(){return N.apply(this,arguments)},getLoggedInUser:function(){return T.apply(this,arguments)}};function C(){return(C=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x("user/".concat(e._id),e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(){return(k=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m("auth/login",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(){return(S=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m("auth/signup",e);case 3:return t.abrupt("return",t.sent);case 6:throw t.prev=6,t.t0=t.catch(0),console.log("service",t.t0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function N(){return(N=Object(j.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m("auth/logout");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(){return(T=Object(j.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O("auth/loggedInUser");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}window.userService=w;var E={addTransaction:function(t,e){return _.apply(this,arguments)},getTransactions:function(){return L.apply(this,arguments)},getTransactionsByContactId:function(t){return D.apply(this,arguments)}};function _(){return(_=Object(j.a)(p.a.mark((function t(e,n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m("transaction/",{contactEmail:e,amount:n});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(){return(L=Object(j.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O("transaction/");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function D(){return(D=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",O("transaction/".concat(e)));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var F=function(){return function(){var t=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.getLoggedInUser();case 2:n=t.sent,e({type:"SET_USER",user:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},U=n(1),I=function(){var t=Object(o.c)((function(t){return t.userReducer.user})),e=Object(u.f)(),n=Object(o.b)();Object(c.useEffect)((function(){t||n(F)}),[t,n]);return Object(U.jsx)("div",{className:"app-footer",children:t&&"/contact"!=e.location.pathname&&Object(U.jsx)("button",{className:"transaction-btn",onClick:function(){e.push("/contact")},children:"Contacts"})})},P=n.p+"static/media/bitcoin.762cc73c.png",A=n(9),R=n(213),B=n(204),q=n(202),z=n(205),M=n(200),G=n(199),H=n(214),W=n(201),J=n(100),V=n.n(J),X=n(101),Y=n.n(X),K=n(215),Q=function(t){var e=t.loggedUser,n=t.logout,r=t.history,a=c.useState(null),s=Object(A.a)(a,2),o=s[0],i=s[1],u=Boolean(o),l=function(){i(null)};return Object(U.jsxs)(c.Fragment,{children:[Object(U.jsxs)(R.a,{sx:{display:"flex",alignItems:"center",textAlign:"center"},children:[e&&Object(U.jsx)(K.a,{sx:{minWidth:100},children:e.email}),Object(U.jsx)(W.a,{title:"Profile",children:Object(U.jsx)(H.a,{onClick:function(t){i(t.currentTarget)},size:"small",sx:{ml:2},children:e?Object(U.jsx)(B.a,{alt:e.fullname,src:e.img}):Object(U.jsx)(B.a,{})})})]}),Object(U.jsxs)(q.a,{anchorEl:o,open:u,onClose:l,onClick:l,PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[Object(U.jsxs)(z.a,{onClick:function(){return r.push("/user")},children:[Object(U.jsx)(B.a,{}),"Profile"]}),Object(U.jsx)(G.a,{}),e&&Object(U.jsxs)(z.a,{onClick:n,children:[Object(U.jsx)(M.a,{children:Object(U.jsx)(V.a,{fontSize:"small"})}),"Logout"]}),!e&&Object(U.jsxs)(z.a,{onClick:function(){return r.push("/signup")},children:[Object(U.jsx)(M.a,{children:Object(U.jsx)(Y.a,{fontSize:"small"})}),"Login"]}),!e&&Object(U.jsx)(z.a,{onClick:function(){return r.push("/signup")},children:"SignUp"})]})]})},Z=function(){var t=Object(o.c)((function(t){return t.userReducer.user})),e=Object(u.f)(),n=Object(o.b)();return Object(U.jsxs)("header",{className:"app-header full",children:[Object(U.jsx)("div",{onClick:function(){return e.push("/")},className:"home-logo",children:Object(U.jsx)("img",{src:P,alt:""})}),Object(U.jsx)(Q,{loggedUser:t,logout:function(){n(function(){var t=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.logout();case 2:e({type:"LOGOUT"});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then((function(){return e.push("/")}))},history:e})]})},$=function(t){var e=t.transaction,n=new Date(e.createdAt).toLocaleTimeString("en-US"),c=new Date(e.createdAt).toLocaleDateString();return Object(U.jsxs)("li",{className:"transaction-preview",children:[Object(U.jsxs)("p",{children:[" From: ",e.from," "]}),Object(U.jsxs)("p",{children:[" To: ",e.to," "]}),Object(U.jsxs)("p",{children:[" Amount: ",e.amount," "]}),Object(U.jsxs)("p",{children:["Created at: ",c,", ",n]})]})},tt=function(t){var e=t.transactions,n=t.title;return Object(U.jsxs)("section",{className:"transaction-list",children:[Object(U.jsx)("h3",{children:n}),Object(U.jsx)("ul",{className:"card-list",children:e.map((function(t,e){return Object(U.jsx)($,{transaction:t},e)}))})]})},et=function(t){var e=t.contact,n=t.onTransactionCoins,r=Object(c.useState)(0),a=Object(A.a)(r,2),s=a[0],o=a[1],i=Object(u.f)();return Object(U.jsxs)("section",{className:"transaction-fund",children:[Object(U.jsxs)("h3",{children:["Transaction coins to ",e.name,":"]}),Object(U.jsxs)("form",{onSubmit:function(t){n(s,t),i.push("/contact")},children:[Object(U.jsx)("label",{htmlFor:"amount",children:"Amount:"}),Object(U.jsx)("input",{required:!0,id:"amount",onChange:function(t){var e=t.target,n="number"===e.type?+e.value:e.value;o(n)}}),Object(U.jsx)("button",{children:"Transaction"})]})]})},nt={getContacts:function(){return at.apply(this,arguments)},getContactById:function(t){return st.apply(this,arguments)},deleteContact:function(t){return it.apply(this,arguments)},saveContact:function(t){return ut.apply(this,arguments)},getEmptyContact:function(){return{contactName:"",contactEmail:"",contactPhone:""}},addContact:function(t){return ot.apply(this,arguments)}},ct="contact/";function rt(t){return t.sort((function(t,e){return t.contactName.toLocaleLowerCase()<e.contactName.toLocaleLowerCase()?-1:t.contactName.toLocaleLowerCase()>e.contactName.toLocaleLowerCase()?1:0}))}function at(){return at=Object(j.a)(p.a.mark((function t(){var e,n,c,r=arguments;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:null,t.prev=1,t.next=4,O(ct);case 4:if(c=t.sent,!e){t.next=8;break}return n=lt(e,c),t.abrupt("return",rt(n));case 8:return t.abrupt("return",rt(c));case 11:t.prev=11,t.t0=t.catch(1),console.log("cant get contacts",t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])}))),at.apply(this,arguments)}function st(){return(st=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O(ct+e);case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log("Contact id ".concat(e," not found!"),t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function ot(){return(ot=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m(ct,{contact:e});case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log("Contact username ".concat(e.username," not found!"),t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function it(){return(it=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v(ct+e,e);case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log("cant delete contact ".concat(e),t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function ut(){return(ut=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e._id){t.next=7;break}return t.next=4,x(ct+e._id,e);case 4:n=t.sent,t.next=10;break;case 7:return t.next=9,m(ct,e);case 9:n=t.sent;case 10:return t.abrupt("return",n);case 13:t.prev=13,t.t0=t.catch(0),console.log("cant save contact ".concat(e),t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function lt(t,e){t=t.toLocaleLowerCase();var n=e.filter((function(e){return e.contactName.toLocaleLowerCase().includes(t)||e.contactPhone.toLocaleLowerCase().includes(t)||e.contactEmail.toLocaleLowerCase().includes(t)}));return console.log({filteredContacts:n}),n}var pt=n.p+"static/media/contact.42200432.png",jt=function(t){var e=Object(o.c)((function(t){return t.userReducer.user})),n=Object(o.c)((function(t){return t.contactReducer.currContact})),r=Object(c.useState)([]),a=Object(A.a)(r,2),s=a[0],i=a[1],u=Object(o.b)();e||u(F()),Object(c.useEffect)((function(){var e;u((e=t.match.params.id,function(){var t=Object(j.a)(p.a.mark((function t(n){var c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,nt.getContactById(e);case 2:c=t.sent,n({type:"SET_CONTACT",contact:c});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[u,t.match.params.id]),Object(c.useEffect)((function(){var t=function(){var t=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.getTransactionsByContactId(n._id);case 2:e=t.sent,i(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();n&&t()}),[n]);return n?Object(U.jsxs)("div",{className:"contact-details",children:[Object(U.jsx)("h1",{children:"Contact Details Page:"}),n.contactImg?Object(U.jsx)("img",{src:n.contactImg,alt:""}):Object(U.jsx)("img",{src:pt,alt:""}),Object(U.jsxs)("p",{children:["Name: ",n.contactName]}),Object(U.jsxs)("p",{children:["Email: ",n.contactEmail]}),Object(U.jsxs)("p",{children:["Phone: ",n.contactPhone]}),Object(U.jsx)(et,{contact:n,onTransactionCoins:function(t,c){if(c.preventDefault(),document.body.style.zoom=1,e.coins<t)return alert("No enough money");var r,a;u((r=n.contactEmail,a=t,function(){var t=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.addTransaction(r,a);case 2:n=t.sent,e({type:"SET_USER",user:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}}),s&&Object(U.jsx)(tt,{transactions:s,title:"Transactions with contact"}),Object(U.jsx)("button",{onClick:function(){t.history.push("/contact")},children:"Back"}),Object(U.jsx)("button",{onClick:function(){t.history.push("/contact/edit/".concat(n._id))},children:"Edit"})]}):Object(U.jsx)("div",{children:"Contact not found..."})},ht=n(8),bt=n(19),dt=function(){var t=Object(j.a)(p.a.mark((function t(e){var n,c,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"mister-bitcoin-present","mister-bitcoin",n="https://api.cloudinary.com/v1_1/".concat("mister-bitcoin","/image/upload"),(c=new FormData).append("file",e.target.files[0]),c.append("upload_preset","mister-bitcoin-present"),t.prev=6,t.next=9,b.a.post(n,c);case 9:return r=t.sent,t.abrupt("return",r.data);case 13:t.prev=13,t.t0=t.catch(6),console.error("ERROR!",t.t0);case 16:case"end":return t.stop()}}),t,null,[[6,13]])})));return function(e){return t.apply(this,arguments)}}(),ft=function(t){var e=Object(o.c)((function(t){return t.userReducer.user})),n=Object(c.useState)(null),r=Object(A.a)(n,2),a=r[0],s=r[1],i=Object(o.b)();Object(c.useEffect)((function(){e||i(F());var n=t.match.params.id,c=function(){var t=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=6;break}return t.next=3,nt.getContactById(e);case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0=nt.getEmptyContact();case 7:n=t.t0,s(n);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();c(n)}),[i,e,t.match.params.id]);var u=function(){var t=Object(j.a)(p.a.mark((function t(e){var n,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.target.name,"file"!==e.target.type){t.next=7;break}return t.next=4,dt(e);case 4:c=t.sent.url,t.next=8;break;case 7:c="number"===e.target.type?+e.target.value:e.target.value;case 8:s(Object(bt.a)(Object(bt.a)({},a),{},Object(ht.a)({},n,c)));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var e=Object(j.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,nt.deleteContact(a._id);case 2:t.history.push("/contact");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a?Object(U.jsxs)("div",{className:"contact-edit",children:[Object(U.jsx)("button",{onClick:function(){t.history.push("/contact/".concat(a._id))},children:"Back"}),a._id&&Object(U.jsx)("button",{onClick:l,children:"Delete"}),Object(U.jsxs)("form",{onSubmit:function(e){e.preventDefault(),document.body.style.zoom=1,i(function(t){return function(){var e=Object(j.a)(p.a.mark((function e(n){var c,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=!t._id,e.next=3,nt.saveContact(t);case 3:r=e.sent,n(c?{type:"ADD_CONTACT",contact:r}:{type:"UPDATE_CONTACT",updatedContact:r});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(a)).then((function(){return t.history.push("/contact")}))},children:[Object(U.jsxs)("div",{className:"contact-edit contact-name",children:[Object(U.jsx)("label",{htmlFor:"contactName",children:"Fullname"}),Object(U.jsx)("input",{required:!0,type:"text",id:"contactName",value:a.contactName,onChange:u,name:"contactName"})]}),Object(U.jsxs)("div",{className:"contact-edit contact-email",children:[Object(U.jsx)("label",{htmlFor:"contactEmail",children:"Email Address"}),Object(U.jsx)("input",{required:!0,type:"text",id:"contactEmail",value:a.contactEmail,onChange:u,name:"contactEmail"})]}),Object(U.jsxs)("div",{className:"contact-edit contact-phone",children:[Object(U.jsx)("label",{htmlFor:"contactPhone",children:"Phone Number"}),Object(U.jsx)("input",{required:!0,type:"text",id:"contactPhone",value:a.contactPhone,onChange:u,name:"contactPhone"})]}),Object(U.jsxs)("div",{className:"contact-edit contact-img",children:[Object(U.jsx)("label",{htmlFor:"contactImg",children:"Image"}),Object(U.jsx)("input",{type:"file",id:"contactImg",onChange:u,name:"contactImg"})]}),Object(U.jsx)("button",{children:"Save Contact"})]})]}):Object(U.jsx)("h1",{children:"Contact not found"})},Ot=function(t){return Object(U.jsxs)("form",{className:"contact-filter",onSubmit:function(t){return t.preventDefault()},children:[Object(U.jsx)("label",{htmlFor:"term",children:"Search contact"}),Object(U.jsx)("input",{type:"text",id:"term",name:"term",onChange:function(e){var n=e.target;t.onChangeFilter(n.value)},placeholder:"Search..."})]})},mt=function(t){var e=t.contact;return Object(U.jsx)(i.b,{to:"/contact/".concat(e._id),children:Object(U.jsxs)("div",{className:"contact-preview",children:[e.contactImg?Object(U.jsx)("img",{src:e.contactImg,alt:""}):Object(U.jsx)("img",{src:pt,alt:""}),Object(U.jsx)("p",{children:e.contactName}),Object(U.jsx)("p",{children:e.contactEmail}),Object(U.jsx)("p",{children:e.contactPhone})]})})},xt=function(t){var e=t.contacts;return Object(U.jsx)("ul",{className:"contact-list",children:e.map((function(t){return Object(U.jsx)("li",{children:Object(U.jsx)(mt,{contact:t})},t._id)}))})},vt=(n.p,function(t){var e=t.history,n=Object(c.useState)(null),r=Object(A.a)(n,2),a=r[0],s=r[1],i=Object(o.c)((function(t){return t.userReducer.user})),u=Object(o.c)((function(t){return t.contactReducer.contacts})),l=Object(o.b)();return Object(c.useEffect)((function(){l(i?function(t){return function(){var e=Object(j.a)(p.a.mark((function e(n){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,nt.getContacts(t);case 2:c=e.sent,n({type:"SET_CONTACTS",contacts:c});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(a):F())}),[a,l,i]),i?Object(U.jsxs)("div",{className:"contact-page",children:[Object(U.jsx)(Ot,{onChangeFilter:function(t){s(t)}}),Object(U.jsx)("button",{onClick:function(){e.push("/contact/edit")},children:"Add contact"}),u?Object(U.jsx)(xt,{contacts:u}):Object(U.jsx)("h1",{children:"No contacts to show"})]}):Object(U.jsxs)("div",{className:"contact-page",children:[Object(U.jsx)("h1",{children:"Hello, Stranger"}),Object(U.jsx)("button",{onClick:function(){return e.push("/signup")},children:"Login/SignUp"})]})}),gt=n(47),yt={getRate:function(){return wt.apply(this,arguments)},getMarketPrice:function(){return Ct.apply(this,arguments)},getConfirmedTransactions:function(){return kt.apply(this,arguments)}};function wt(){return(wt=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,gt.get("https://blockchain.info/tobtc?currency=USD&value=1");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function Ct(){return(Ct=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,gt.get("https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function kt(){return(kt=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,gt.get("https://blockchain.info/tobtc?currency=USD&value=1");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}var St=n(208),Nt=n(212),Tt=n(211),Et=n(207),_t=n(209),Lt=n(210),Dt=n(206),Ft=function(t){var e=t.rows;return Object(U.jsx)(Et.a,{component:Dt.a,children:Object(U.jsxs)(St.a,{sx:{minWidth:650},"aria-label":"sticky table",children:[Object(U.jsx)(_t.a,{children:Object(U.jsxs)(Lt.a,{hover:!0,role:"checkbox",children:[Object(U.jsx)(Tt.a,{children:"From"}),Object(U.jsx)(Tt.a,{children:"To"}),Object(U.jsx)(Tt.a,{children:"Amount"}),Object(U.jsx)(Tt.a,{children:"Date"})]})}),Object(U.jsx)(Nt.a,{children:e.map((function(t){return Object(U.jsxs)(Lt.a,{hover:!0,sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(U.jsx)(Tt.a,{children:t.from}),Object(U.jsx)(Tt.a,{children:t.to}),Object(U.jsx)(Tt.a,{children:t.amount}),Object(U.jsx)(Tt.a,{children:t.createdAt})]},t._id)}))})]})})},Ut=function(t){var e=t.history,n=Object(c.useState)(0),r=Object(A.a)(n,2),a=r[0],s=r[1],i=Object(o.c)((function(t){return t.userReducer.user})),u=Object(c.useState)(null),l=Object(A.a)(u,2),h=l[0],b=l[1],d=Object(o.b)(),f=Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(1/a),O=i?Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(1/a*i.coins):null;Object(c.useEffect)((function(){var t=function(){var t=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.getTransactions();case 2:e=t.sent,b(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();i?t():d(F())}),[i,d]);var m=function(){var t=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,yt.getRate();case 2:e=t.sent,s(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return m(),i?Object(U.jsxs)("div",{className:"home-page logged-user",children:[Object(U.jsxs)("div",{className:"user-balance",children:[Object(U.jsx)("h2",{children:O}),Object(U.jsxs)("h3",{children:["You have ",i.coins," bitcoins"]}),Object(U.jsxs)("h3",{children:["1 Bitcoin: ",f]})]}),Object(U.jsx)("div",{className:"transactions-table",children:h&&Object(U.jsx)(Ft,{rows:h})})]}):Object(U.jsx)("div",{className:"home-page guest",children:Object(U.jsxs)("div",{className:"guest-welcome",children:[Object(U.jsx)("h1",{children:"Welcome to Mister Bitcoin"}),Object(U.jsx)("p",{children:"Demo bitcoin wallet"}),Object(U.jsx)("button",{onClick:function(){return e.push("/signup")},children:"Login/SignUp"})]})})},It=function(t){var e=Object(c.useState)(null),n=Object(A.a)(e,2),r=n[0],a=n[1],s=Object(o.b)(),i=function(t){var e=t.target,n=e.name,c="number"===e.value?+e.value:e.value;a(Object(bt.a)(Object(bt.a)({},r),{},Object(ht.a)({},n,c)))};return Object(U.jsxs)("div",{className:"signup-page",children:[Object(U.jsxs)("form",{onSubmit:function(e){e.preventDefault(),document.body.style.transform="scale(0)",s(function(t){return function(){var e=Object(j.a)(p.a.mark((function e(n){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.login(t);case 2:c=e.sent,n({type:"SET_USER",user:c});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(r)),t.history.push("/")},children:[Object(U.jsx)("h1",{children:"Login"}),Object(U.jsx)("label",{htmlFor:"email",children:"Email"}),Object(U.jsx)("input",{required:!0,type:"text",id:"email",onChange:i,name:"email"}),Object(U.jsx)("label",{htmlFor:"password",children:"Password"}),Object(U.jsx)("input",{required:!0,type:"password",id:"password",onChange:i,name:"password"}),Object(U.jsx)("button",{children:"Login"})]}),Object(U.jsxs)("form",{onSubmit:function(e){e.preventDefault(),document.body.style.transform="scale(0)",s(function(t){return function(){var e=Object(j.a)(p.a.mark((function e(n){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.signup(t);case 3:e.next=9;break;case 5:throw e.prev=5,e.t0=e.catch(0),console.log({"err actions1":e.t0}),e.t0;case 9:return e.next=11,w.getLoggedInUser();case 11:c=e.sent,n({type:"SET_USER",user:c});case 13:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()}(r)).then((function(){t.history.push("/")})).catch((function(t){console.log({"err page":t})}))},children:[Object(U.jsx)("h1",{children:"Signup"}),Object(U.jsx)("label",{htmlFor:"fullname",children:"Full name"}),Object(U.jsx)("input",{required:!0,type:"text",id:"fullname",onChange:i,name:"fullname"}),Object(U.jsx)("label",{htmlFor:"username",children:"User name"}),Object(U.jsx)("input",{required:!0,type:"text",id:"username",onChange:i,name:"username"}),Object(U.jsx)("label",{htmlFor:"password",children:"Password"}),Object(U.jsx)("input",{required:!0,type:"password",id:"password-login",onChange:i,name:"password"}),Object(U.jsx)("label",{htmlFor:"email",children:"Email"}),Object(U.jsx)("input",{required:!0,type:"text",id:"email-login",onChange:i,name:"email"}),Object(U.jsx)("label",{htmlFor:"phone",children:"Phone number"}),Object(U.jsx)("input",{required:!0,type:"text",id:"phone",onChange:i,name:"phone"}),Object(U.jsx)("button",{children:"Sign up"}),Object(U.jsx)("hr",{})]})]})},Pt=n(68),At=function(t){t.title;var e=t.data,n=t.description;return Object(U.jsxs)("div",{className:"chart",children:[Object(U.jsx)("h1",{children:n}),Object(U.jsxs)(Pt.Sparklines,{data:e,children:[Object(U.jsx)(Pt.SparklinesLine,{color:"red"}),Object(U.jsx)(Pt.SparklinesSpots,{size:1})]})]})},Rt=function(){var t=Object(c.useState)(null),e=Object(A.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(null),s=Object(A.a)(a,2),o=s[0],i=s[1];return Object(c.useEffect)((function(){var t=function(){var t=Object(j.a)(p.a.mark((function t(){var e,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,yt.getMarketPrice();case 3:e=t.sent,r(e),n=e.values.map((function(t){return t.y})),i(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),n&&o&&Object(U.jsxs)("div",{className:"statistic-page",children:[Object(U.jsx)("h1",{children:"Statistic page:"}),Object(U.jsx)(At,{title:n.name,description:n.description,data:o,color:"red"})]})},Bt=(n(150),function(t){var e=t.history;return Object(U.jsxs)("div",{className:"user-details",children:[Object(U.jsx)("h1",{children:"Hello, Stranger"}),Object(U.jsx)("button",{onClick:function(){return e.push("/signup")},children:"Login/SignUp"})]})}),qt=function(){return Object(U.jsx)(i.a,{children:Object(U.jsxs)("div",{className:"App main-layout",children:[Object(U.jsx)(Z,{}),Object(U.jsxs)(u.c,{children:[Object(U.jsx)(u.a,{component:ft,path:"/contact/edit/:id?"}),Object(U.jsx)(u.a,{component:jt,path:"/contact/:id"}),Object(U.jsx)(u.a,{component:vt,path:"/contact"}),Object(U.jsx)(u.a,{component:Bt,path:"/user"}),Object(U.jsx)(u.a,{component:Rt,path:"/statistic"}),Object(U.jsx)(u.a,{component:It,path:"/signup"}),Object(U.jsx)(u.a,{component:Ut,path:"/"})]}),Object(U.jsx)(I,{})]})})},zt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,216)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),a(t),s(t)}))},Mt=n(57),Gt=n(25),Ht={contacts:[],currContact:null};var Wt={user:null},Jt=n(102),Vt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Mt.c,Xt=Object(Mt.b)({contactReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ht,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_CONTACTS":return Object(bt.a)(Object(bt.a)({},t),{},{contacts:e.contacts});case"SET_CONTACT":return Object(bt.a)(Object(bt.a)({},t),{},{currContact:e.contact});case"ADD_CONTACT":return Object(bt.a)(Object(bt.a)({},t),{},{contacts:[].concat(Object(Gt.a)(t.contacts),[e.contact])});case"REMOVE_CONTACT":return Object(bt.a)(Object(bt.a)({},t),{},{contacts:t.contacts.filter((function(t){return t._id!==e.contactId}))});case"UPDATE_CONTACT":var n=e.updatedContact;return Object(bt.a)(Object(bt.a)({},t),{},{contacts:t.contacts.map((function(t){return t._id===n._id?n:t}))});default:return t}},userReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Wt,e=arguments.length>1?arguments[1]:void 0;switch(console.log(e),e.type){case"SET_USER":return Object(bt.a)(Object(bt.a)({},t),{},{user:e.user});case"LOGOUT":return Object(bt.a)(Object(bt.a)({},t),{},{user:null});default:return t}}}),Yt=Object(Mt.d)(Xt,Vt(Object(Mt.a)(Jt.a)));n(151);s.a.render(Object(U.jsx)(r.a.StrictMode,{children:Object(U.jsx)(o.a,{store:Yt,children:Object(U.jsx)(qt,{})})}),document.getElementById("root")),zt()}},[[152,1,2]]]);
//# sourceMappingURL=main.b2837dae.chunk.js.map