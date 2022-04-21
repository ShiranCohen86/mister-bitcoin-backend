(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{150:function(t,e,n){},151:function(t,e,n){},152:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(30),s=n.n(a),o=n(19),i=n(51),u=n(16),l=n(4),p=n.n(l),j=n(10),h=n(47),b=n.n(h),d="/api/",f=b.a.create({withCredentials:!0}),O=function(t,e){return g(t,"GET",e)},m=function(t,e){return g(t,"POST",e)},x=function(t,e){return g(t,"PUT",e)},v=function(t,e){return g(t,"DELETE",e)};function g(t){return w.apply(this,arguments)}function w(){return w=Object(j.a)(p.a.mark((function t(e){var n,r,c,a=arguments;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"GET",r=a.length>2&&void 0!==a[2]?a[2]:null,t.prev=2,t.next=5,f({url:"".concat(d).concat(e),method:n,data:r,params:"GET"===n?r:null});case 5:return c=t.sent,t.abrupt("return",c.data);case 9:throw t.prev=9,t.t0=t.catch(2),console.log("Had Issues ".concat(n,"ing to the backend, endpoint: ").concat(e,", with data: ").concat(r)),console.dir(t.t0),t.t0.response&&t.t0.response.status,t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,9]])}))),w.apply(this,arguments)}var y={getUsers:function(){return O("user")},getById:function(t){return O("user/".concat(t))},remove:function(t){return v("user/".concat(t))},update:function(t){return C.apply(this,arguments)},login:function(t){return k.apply(this,arguments)},signup:function(t){return S.apply(this,arguments)},logout:function(){return T.apply(this,arguments)},getLoggedInUser:function(){return E.apply(this,arguments)}};function C(){return(C=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x("user/".concat(e._id),e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(){return(k=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m("auth/login",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(){return(S=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m("auth/signup",e);case 3:return t.abrupt("return",t.sent);case 6:throw t.prev=6,t.t0=t.catch(0),console.log("service",t.t0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function T(){return(T=Object(j.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m("auth/logout");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(){return(E=Object(j.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O("auth/loggedInUser");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}window.userService=y;var N={addTransaction:function(t,e){return _.apply(this,arguments)},getTransactions:function(){return L.apply(this,arguments)},getTransactionsByContactId:function(t){return D.apply(this,arguments)}};function _(){return(_=Object(j.a)(p.a.mark((function t(e,n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m("transaction/",{contactEmail:e,amount:n});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(){return(L=Object(j.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O("transaction/");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function D(){return(D=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",O("transaction/".concat(e)));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var F=function(){return function(){var t=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.getLoggedInUser();case 2:n=t.sent,e({type:"SET_USER",user:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},U=n(9),I=n(213),P=n(204),A=n(202),R=n(205),B=n(200),q=n(199),z=n(214),M=n(201),G=n(99),H=n.n(G),W=n(100),J=n.n(W),V=n(215),X=n(1),Y=function(t){var e=t.loggedUser,n=t.logout,c=t.history,a=r.useState(null),s=Object(U.a)(a,2),o=s[0],i=s[1],u=Boolean(o),l=function(){i(null)};return Object(X.jsxs)(r.Fragment,{children:[Object(X.jsxs)(I.a,{sx:{display:"flex",alignItems:"center",textAlign:"center"},children:[e&&Object(X.jsx)(V.a,{sx:{minWidth:100},children:e.email}),Object(X.jsx)(M.a,{title:"Profile",children:Object(X.jsx)(z.a,{onClick:function(t){i(t.currentTarget)},size:"small",sx:{ml:2},children:e?Object(X.jsx)(P.a,{alt:e.fullname,src:e.img}):Object(X.jsx)(P.a,{})})})]}),Object(X.jsxs)(A.a,{anchorEl:o,open:u,onClose:l,onClick:l,PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[Object(X.jsxs)(R.a,{onClick:function(){return c.push("/user")},children:[Object(X.jsx)(P.a,{}),"Profile"]}),Object(X.jsx)(q.a,{}),e&&Object(X.jsxs)(R.a,{onClick:n,children:[Object(X.jsx)(B.a,{children:Object(X.jsx)(H.a,{fontSize:"small"})}),"Logout"]}),!e&&Object(X.jsxs)(R.a,{onClick:function(){return c.push("/signup")},children:[Object(X.jsx)(B.a,{children:Object(X.jsx)(J.a,{fontSize:"small"})}),"Login"]}),!e&&Object(X.jsx)(R.a,{onClick:function(){return c.push("/signup")},children:"SignUp"})]})]})},K=function(){var t=Object(o.c)((function(t){return t.userReducer.user})),e=Object(u.f)(),n=Object(o.b)();return Object(X.jsx)("header",{className:"app-header full",children:Object(X.jsx)(Y,{loggedUser:t,logout:function(){n(function(){var t=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.logout();case 2:e({type:"LOGOUT"});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then((function(){return e.push("/")}))},history:e})})},Q=function(t){var e=t.transaction,n=new Date(e.createdAt).toLocaleTimeString("en-US"),r=new Date(e.createdAt).toLocaleDateString();return Object(X.jsxs)("li",{className:"transaction-preview",children:[Object(X.jsxs)("p",{children:[" From: ",e.from," "]}),Object(X.jsxs)("p",{children:[" To: ",e.to," "]}),Object(X.jsxs)("p",{children:[" Amount: ",e.amount," "]}),Object(X.jsxs)("p",{children:["Created at: ",r,", ",n]})]})},Z=function(t){var e=t.transactions,n=t.title;return Object(X.jsxs)("section",{className:"transaction-list",children:[Object(X.jsx)("h3",{children:n}),Object(X.jsx)("ul",{className:"card-list",children:e.map((function(t,e){return Object(X.jsx)(Q,{transaction:t},e)}))})]})},$=function(t){var e=t.contact,n=t.onTransactionCoins,c=Object(r.useState)(0),a=Object(U.a)(c,2),s=a[0],o=a[1],i=Object(u.f)();return Object(X.jsxs)("section",{className:"transaction-fund",children:[Object(X.jsxs)("h3",{children:["Transaction coins to ",e.name,":"]}),Object(X.jsxs)("form",{onSubmit:function(t){n(s,t),i.push("/contact")},children:[Object(X.jsx)("label",{htmlFor:"amount",children:"Amount:"}),Object(X.jsx)("input",{required:!0,id:"amount",onChange:function(t){var e=t.target,n="number"===e.type?+e.value:e.value;o(n)}}),Object(X.jsx)("button",{children:"Transaction"})]})]})},tt={getContacts:function(){return rt.apply(this,arguments)},getContactById:function(t){return ct.apply(this,arguments)},deleteContact:function(t){return st.apply(this,arguments)},saveContact:function(t){return ot.apply(this,arguments)},getEmptyContact:function(){return{contactName:"",contactEmail:"",contactPhone:""}},addContact:function(t){return at.apply(this,arguments)}},et="contact/";function nt(t){return t.sort((function(t,e){return t.contactName.toLocaleLowerCase()<e.contactName.toLocaleLowerCase()?-1:t.contactName.toLocaleLowerCase()>e.contactName.toLocaleLowerCase()?1:0}))}function rt(){return rt=Object(j.a)(p.a.mark((function t(){var e,n,r,c=arguments;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:null,t.prev=1,t.next=4,O(et);case 4:if(r=t.sent,!e){t.next=8;break}return n=it(e,r),t.abrupt("return",nt(n));case 8:return t.abrupt("return",nt(r));case 11:t.prev=11,t.t0=t.catch(1),console.log("cant get contacts",t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])}))),rt.apply(this,arguments)}function ct(){return(ct=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O(et+e);case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log("Contact id ".concat(e," not found!"),t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function at(){return(at=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m(et,{contact:e});case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log("Contact username ".concat(e.username," not found!"),t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function st(){return(st=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v(et+e,e);case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log("cant delete contact ".concat(e),t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function ot(){return(ot=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e._id){t.next=7;break}return t.next=4,x(et+e._id,e);case 4:n=t.sent,t.next=10;break;case 7:return t.next=9,m(et,e);case 9:n=t.sent;case 10:return t.abrupt("return",n);case 13:t.prev=13,t.t0=t.catch(0),console.log("cant save contact ".concat(e),t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function it(t,e){t=t.toLocaleLowerCase();var n=e.filter((function(e){return e.contactName.toLocaleLowerCase().includes(t)||e.contactPhone.toLocaleLowerCase().includes(t)||e.contactEmail.toLocaleLowerCase().includes(t)}));return console.log({filteredContacts:n}),n}var ut=n.p+"static/media/contact.42200432.png",lt=function(t){var e=Object(o.c)((function(t){return t.userReducer.user})),n=Object(o.c)((function(t){return t.contactReducer.currContact})),c=Object(r.useState)([]),a=Object(U.a)(c,2),s=a[0],i=a[1],u=Object(o.b)();e||u(F()),Object(r.useEffect)((function(){var e;u((e=t.match.params.id,function(){var t=Object(j.a)(p.a.mark((function t(n){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,tt.getContactById(e);case 2:r=t.sent,n({type:"SET_CONTACT",contact:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[u,t.match.params.id]),Object(r.useEffect)((function(){var t=function(){var t=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.getTransactionsByContactId(n._id);case 2:e=t.sent,i(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();n&&t()}),[n]);return n?Object(X.jsxs)("div",{className:"contact-details",children:[Object(X.jsx)("h1",{children:"Contact Details Page:"}),n.contactImg?Object(X.jsx)("img",{src:n.contactImg,alt:""}):Object(X.jsx)("img",{src:ut,alt:""}),Object(X.jsxs)("p",{children:["Name: ",n.contactName]}),Object(X.jsxs)("p",{children:["Email: ",n.contactEmail]}),Object(X.jsxs)("p",{children:["Phone: ",n.contactPhone]}),Object(X.jsx)($,{contact:n,onTransactionCoins:function(t,r){if(r.preventDefault(),e.coins<t)return alert("No enough money");var c,a;u((c=n.contactEmail,a=t,function(){var t=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.addTransaction(c,a);case 2:n=t.sent,e({type:"SET_USER",user:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}}),s&&Object(X.jsx)(Z,{transactions:s,title:"Transactions with contact"}),Object(X.jsx)("button",{onClick:function(){t.history.push("/contact")},children:"Back"}),Object(X.jsx)("button",{onClick:function(){t.history.push("/contact/edit/".concat(n._id))},children:"Edit"})]}):Object(X.jsx)("div",{children:"Contact not found..."})},pt=n(8),jt=n(18),ht=function(){var t=Object(j.a)(p.a.mark((function t(e){var n,r,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"mister-bitcoin-present","mister-bitcoin",n="https://api.cloudinary.com/v1_1/".concat("mister-bitcoin","/image/upload"),(r=new FormData).append("file",e.target.files[0]),r.append("upload_preset","mister-bitcoin-present"),t.prev=6,t.next=9,b.a.post(n,r);case 9:return c=t.sent,t.abrupt("return",c.data);case 13:t.prev=13,t.t0=t.catch(6),console.error("ERROR!",t.t0);case 16:case"end":return t.stop()}}),t,null,[[6,13]])})));return function(e){return t.apply(this,arguments)}}(),bt=function(t){var e=Object(o.c)((function(t){return t.userReducer.user})),n=Object(r.useState)(null),c=Object(U.a)(n,2),a=c[0],s=c[1],i=Object(o.b)();Object(r.useEffect)((function(){e||i(F());var n=t.match.params.id,r=function(){var t=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=6;break}return t.next=3,tt.getContactById(e);case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0=tt.getEmptyContact();case 7:n=t.t0,s(n);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();r(n)}),[i,e,t.match.params.id]);var u=function(){var t=Object(j.a)(p.a.mark((function t(e){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.target.name,"file"!==e.target.type){t.next=7;break}return t.next=4,ht(e);case 4:r=t.sent.url,t.next=8;break;case 7:r="number"===e.target.type?+e.target.value:e.target.value;case 8:s(Object(jt.a)(Object(jt.a)({},a),{},Object(pt.a)({},n,r)));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var e=Object(j.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,tt.deleteContact(a._id);case 2:t.history.push("/contact");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a?Object(X.jsxs)("div",{className:"contact-edit",children:[Object(X.jsx)("button",{onClick:function(){t.history.push("/contact/".concat(a._id))},children:"Back"}),a._id&&Object(X.jsx)("button",{onClick:l,children:"Delete"}),Object(X.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(function(t){return function(){var e=Object(j.a)(p.a.mark((function e(n){var r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=!t._id,e.next=3,tt.saveContact(t);case 3:c=e.sent,n(r?{type:"ADD_CONTACT",contact:c}:{type:"UPDATE_CONTACT",updatedContact:c});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(a)).then((function(){return t.history.push("/contact")}))},children:[Object(X.jsxs)("div",{className:"contact-edit contact-name",children:[Object(X.jsx)("label",{htmlFor:"contactName",children:"Fullname"}),Object(X.jsx)("input",{required:!0,type:"text",id:"contactName",value:a.contactName,onChange:u,name:"contactName"})]}),Object(X.jsxs)("div",{className:"contact-edit contact-email",children:[Object(X.jsx)("label",{htmlFor:"contactEmail",children:"Email Address"}),Object(X.jsx)("input",{required:!0,type:"text",id:"contactEmail",value:a.contactEmail,onChange:u,name:"contactEmail"})]}),Object(X.jsxs)("div",{className:"contact-edit contact-phone",children:[Object(X.jsx)("label",{htmlFor:"contactPhone",children:"Phone Number"}),Object(X.jsx)("input",{required:!0,type:"text",id:"contactPhone",value:a.contactPhone,onChange:u,name:"contactPhone"})]}),Object(X.jsxs)("div",{className:"contact-edit contact-img",children:[Object(X.jsx)("label",{htmlFor:"contactImg",children:"Image"}),Object(X.jsx)("input",{type:"file",id:"contactImg",onChange:u,name:"contactImg"})]}),Object(X.jsx)("button",{children:"Save Contact"})]})]}):Object(X.jsx)("h1",{children:"Contact not found"})},dt=function(t){return Object(X.jsxs)("form",{className:"contact-filter",onSubmit:function(t){return t.preventDefault()},children:[Object(X.jsx)("label",{htmlFor:"term",children:"Search contact"}),Object(X.jsx)("input",{type:"text",id:"term",name:"term",onChange:function(e){var n=e.target;t.onChangeFilter(n.value)},placeholder:"Search..."})]})},ft=function(t){var e=t.contact;return Object(X.jsx)(i.b,{to:"/contact/".concat(e._id),children:Object(X.jsxs)("div",{className:"contact-preview",children:[e.contactImg?Object(X.jsx)("img",{src:e.contactImg,alt:""}):Object(X.jsx)("img",{src:ut,alt:""}),Object(X.jsx)("p",{children:e.contactName}),Object(X.jsx)("p",{children:e.contactEmail}),Object(X.jsx)("p",{children:e.contactPhone})]})})},Ot=function(t){var e=t.contacts;return Object(X.jsx)("ul",{className:"contact-list",children:e.map((function(t){return Object(X.jsx)("li",{children:Object(X.jsx)(ft,{contact:t})},t._id)}))})},mt=(n.p,function(t){var e=t.history,n=Object(r.useState)(null),c=Object(U.a)(n,2),a=c[0],s=c[1],i=Object(o.c)((function(t){return t.userReducer.user})),u=Object(o.c)((function(t){return t.contactReducer.contacts})),l=Object(o.b)();return Object(r.useEffect)((function(){l(i?function(t){return function(){var e=Object(j.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,tt.getContacts(t);case 2:r=e.sent,n({type:"SET_CONTACTS",contacts:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(a):F())}),[a,l,i]),i?Object(X.jsxs)("div",{className:"contact-page",children:[Object(X.jsx)(dt,{onChangeFilter:function(t){s(t)}}),Object(X.jsx)("button",{onClick:function(){e.push("/contact/edit")},children:"Add contact"}),u?Object(X.jsx)(Ot,{contacts:u}):Object(X.jsx)("h1",{children:"No contacts to show"})]}):Object(X.jsxs)("div",{className:"contact-page",children:[Object(X.jsx)("h1",{children:"Hello, Stranger"}),Object(X.jsx)("button",{onClick:function(){return e.push("/signup")},children:"Login/SignUp"})]})}),xt=n(47),vt={getRate:function(){return gt.apply(this,arguments)},getMarketPrice:function(){return wt.apply(this,arguments)},getConfirmedTransactions:function(){return yt.apply(this,arguments)}};function gt(){return(gt=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,xt.get("https://blockchain.info/tobtc?currency=USD&value=1");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function wt(){return(wt=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,xt.get("https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function yt(){return(yt=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,xt.get("https://blockchain.info/tobtc?currency=USD&value=1");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}var Ct=n(208),kt=n(212),St=n(211),Tt=n(207),Et=n(209),Nt=n(210),_t=n(206),Lt=function(t){var e=t.rows;return Object(X.jsx)(Tt.a,{component:_t.a,children:Object(X.jsxs)(Ct.a,{sx:{minWidth:650},"aria-label":"sticky table",children:[Object(X.jsx)(Et.a,{children:Object(X.jsxs)(Nt.a,{hover:!0,role:"checkbox",children:[Object(X.jsx)(St.a,{children:"From"}),Object(X.jsx)(St.a,{children:"To"}),Object(X.jsx)(St.a,{children:"Amount"}),Object(X.jsx)(St.a,{children:"Date"})]})}),Object(X.jsx)(kt.a,{children:e.map((function(t){return Object(X.jsxs)(Nt.a,{hover:!0,sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(X.jsx)(St.a,{children:t.from}),Object(X.jsx)(St.a,{children:t.to}),Object(X.jsx)(St.a,{children:t.amount}),Object(X.jsx)(St.a,{children:t.createdAt})]},t._id)}))})]})})},Dt=function(t){var e=t.history,n=Object(r.useState)(0),c=Object(U.a)(n,2),a=c[0],s=c[1],i=Object(o.c)((function(t){return t.userReducer.user})),u=Object(r.useState)(null),l=Object(U.a)(u,2),h=l[0],b=l[1],d=Object(o.b)(),f=Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(1/a),O=i?Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(1/a*i.coins):null;Object(r.useEffect)((function(){var t=function(){var t=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.getTransactions();case 2:e=t.sent,b(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();i?t():d(F())}),[i,d]);var m=function(){var t=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,vt.getRate();case 2:e=t.sent,s(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return m(),i?Object(X.jsxs)("div",{className:"home-page logged-user",children:[Object(X.jsxs)("div",{className:"user-balance",children:[Object(X.jsx)("h2",{children:O}),Object(X.jsxs)("h3",{children:["You have ",i.coins," bitcoins"]}),Object(X.jsxs)("h3",{children:["1 Bitcoin: ",f]})]}),Object(X.jsx)("div",{className:"transactions-table",children:h&&Object(X.jsx)(Lt,{rows:h})})]}):Object(X.jsx)("div",{className:"home-page guest",children:Object(X.jsxs)("div",{className:"guest-welcome",children:[Object(X.jsx)("h1",{children:"Welcome to Mister Bitcoin"}),Object(X.jsx)("p",{children:"Demo bitcoin wallet"}),Object(X.jsx)("button",{onClick:function(){return e.push("/signup")},children:"Login/SignUp"})]})})},Ft=function(t){var e=Object(r.useState)(null),n=Object(U.a)(e,2),c=n[0],a=n[1],s=Object(o.b)(),i=function(t){var e=t.target,n=e.name,r="number"===e.value?+e.value:e.value;a(Object(jt.a)(Object(jt.a)({},c),{},Object(pt.a)({},n,r)))};return Object(X.jsxs)("div",{className:"signup-page",children:[Object(X.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(function(t){return function(){var e=Object(j.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.login(t);case 2:r=e.sent,n({type:"SET_USER",user:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(c)),t.history.push("/")},children:[Object(X.jsx)("h1",{children:"Login"}),Object(X.jsx)("label",{htmlFor:"email",children:"Email"}),Object(X.jsx)("input",{required:!0,type:"text",id:"email",onChange:i,name:"email"}),Object(X.jsx)("label",{htmlFor:"password",children:"Password"}),Object(X.jsx)("input",{required:!0,type:"password",id:"password",onChange:i,name:"password"}),Object(X.jsx)("button",{children:"Login"})]}),Object(X.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(function(t){return function(){var e=Object(j.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.signup(t);case 3:e.next=9;break;case 5:throw e.prev=5,e.t0=e.catch(0),console.log({"err actions1":e.t0}),e.t0;case 9:return e.next=11,y.getLoggedInUser();case 11:r=e.sent,n({type:"SET_USER",user:r});case 13:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()}(c)).then((function(){t.history.push("/")})).catch((function(t){console.log({"err page":t})}))},children:[Object(X.jsx)("h1",{children:"Signup"}),Object(X.jsx)("label",{htmlFor:"fullname",children:"Full name"}),Object(X.jsx)("input",{required:!0,type:"text",id:"fullname",onChange:i,name:"fullname"}),Object(X.jsx)("label",{htmlFor:"username",children:"User name"}),Object(X.jsx)("input",{required:!0,type:"text",id:"username",onChange:i,name:"username"}),Object(X.jsx)("label",{htmlFor:"password",children:"Password"}),Object(X.jsx)("input",{required:!0,type:"password",id:"password-login",onChange:i,name:"password"}),Object(X.jsx)("label",{htmlFor:"email",children:"Email"}),Object(X.jsx)("input",{required:!0,type:"text",id:"email-login",onChange:i,name:"email"}),Object(X.jsx)("label",{htmlFor:"phone",children:"Phone number"}),Object(X.jsx)("input",{required:!0,type:"text",id:"phone",onChange:i,name:"phone"}),Object(X.jsx)("button",{children:"Sign up"}),Object(X.jsx)("hr",{})]})]})},Ut=n(68),It=function(t){t.title;var e=t.data,n=t.description;return Object(X.jsxs)("div",{className:"chart",children:[Object(X.jsx)("h1",{children:n}),Object(X.jsxs)(Ut.Sparklines,{data:e,children:[Object(X.jsx)(Ut.SparklinesLine,{color:"red"}),Object(X.jsx)(Ut.SparklinesSpots,{size:1})]})]})},Pt=function(){var t=Object(r.useState)(null),e=Object(U.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)(null),s=Object(U.a)(a,2),o=s[0],i=s[1];return Object(r.useEffect)((function(){var t=function(){var t=Object(j.a)(p.a.mark((function t(){var e,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,vt.getMarketPrice();case 3:e=t.sent,c(e),n=e.values.map((function(t){return t.y})),i(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),n&&o&&Object(X.jsxs)("div",{className:"statistic-page",children:[Object(X.jsx)("h1",{children:"Statistic page:"}),Object(X.jsx)(It,{title:n.name,description:n.description,data:o,color:"red"})]})},At=(n(150),function(t){var e=t.history;return Object(X.jsxs)("div",{className:"user-details",children:[Object(X.jsx)("h1",{children:"Hello, Stranger"}),Object(X.jsx)("button",{onClick:function(){return e.push("/signup")},children:"Login/SignUp"})]})}),Rt=function(){return Object(X.jsx)(i.a,{children:Object(X.jsxs)("div",{className:"App main-layout",children:[Object(X.jsx)(K,{}),Object(X.jsxs)(u.c,{children:[Object(X.jsx)(u.a,{component:bt,path:"/contact/edit/:id?"}),Object(X.jsx)(u.a,{component:lt,path:"/contact/:id"}),Object(X.jsx)(u.a,{component:mt,path:"/contact"}),Object(X.jsx)(u.a,{component:At,path:"/user"}),Object(X.jsx)(u.a,{component:Pt,path:"/statistic"}),Object(X.jsx)(u.a,{component:Ft,path:"/signup"}),Object(X.jsx)(u.a,{component:Dt,path:"/"})]})]})})},Bt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,216)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),r(t),c(t),a(t),s(t)}))},qt=n(57),zt=n(25),Mt={contacts:[],currContact:null};var Gt={user:null},Ht=n(102),Wt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||qt.c,Jt=Object(qt.b)({contactReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_CONTACTS":return Object(jt.a)(Object(jt.a)({},t),{},{contacts:e.contacts});case"SET_CONTACT":return Object(jt.a)(Object(jt.a)({},t),{},{currContact:e.contact});case"ADD_CONTACT":return Object(jt.a)(Object(jt.a)({},t),{},{contacts:[].concat(Object(zt.a)(t.contacts),[e.contact])});case"REMOVE_CONTACT":return Object(jt.a)(Object(jt.a)({},t),{},{contacts:t.contacts.filter((function(t){return t._id!==e.contactId}))});case"UPDATE_CONTACT":var n=e.updatedContact;return Object(jt.a)(Object(jt.a)({},t),{},{contacts:t.contacts.map((function(t){return t._id===n._id?n:t}))});default:return t}},userReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gt,e=arguments.length>1?arguments[1]:void 0;switch(console.log(e),e.type){case"SET_USER":return Object(jt.a)(Object(jt.a)({},t),{},{user:e.user});case"LOGOUT":return Object(jt.a)(Object(jt.a)({},t),{},{user:null});default:return t}}}),Vt=Object(qt.d)(Jt,Wt(Object(qt.a)(Ht.a)));n(151);s.a.render(Object(X.jsx)(c.a.StrictMode,{children:Object(X.jsx)(o.a,{store:Vt,children:Object(X.jsx)(Rt,{})})}),document.getElementById("root")),Bt()}},[[152,1,2]]]);
//# sourceMappingURL=main.e1204563.chunk.js.map