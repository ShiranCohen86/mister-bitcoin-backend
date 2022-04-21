(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{150:function(t,e,n){},151:function(t,e,n){},152:function(t,e,n){},153:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(30),s=n.n(a),o=n(16),i=n(64),u=n(15),l=n(4),j=n.n(l),p=n(10),h=n(47),b=n.n(h),d="/api/",f=b.a.create({withCredentials:!0}),O=function(t,e){return g(t,"GET",e)},m=function(t,e){return g(t,"POST",e)},x=function(t,e){return g(t,"PUT",e)},v=function(t,e){return g(t,"DELETE",e)};function g(t){return A.apply(this,arguments)}function A(){return A=Object(p.a)(j.a.mark((function t(e){var n,c,r,a=arguments;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"GET",c=a.length>2&&void 0!==a[2]?a[2]:null,t.prev=2,t.next=5,f({url:"".concat(d).concat(e),method:n,data:c,params:"GET"===n?c:null});case 5:return r=t.sent,t.abrupt("return",r.data);case 9:throw t.prev=9,t.t0=t.catch(2),console.log("Had Issues ".concat(n,"ing to the backend, endpoint: ").concat(e,", with data: ").concat(c)),console.dir(t.t0),t.t0.response&&t.t0.response.status,t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,9]])}))),A.apply(this,arguments)}var w={getUsers:function(){return O("user")},getById:function(t){return O("user/".concat(t))},remove:function(t){return v("user/".concat(t))},update:function(t){return y.apply(this,arguments)},login:function(t){return C.apply(this,arguments)},signup:function(t){return k.apply(this,arguments)},logout:function(){return S.apply(this,arguments)},getLoggedInUser:function(){return N.apply(this,arguments)}};function y(){return(y=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x("user/".concat(e._id),e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(){return(C=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m("auth/login",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(){return(k=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m("auth/signup",e);case 3:return t.abrupt("return",t.sent);case 6:throw t.prev=6,t.t0=t.catch(0),console.log("service",t.t0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function S(){return(S=Object(p.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m("auth/logout");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(){return(N=Object(p.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O("auth/loggedInUser");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}window.userService=w;var T={addTransaction:function(t,e){return E.apply(this,arguments)},getTransactions:function(){return U.apply(this,arguments)},getTransactionsByContactId:function(t){return P.apply(this,arguments)}};function E(){return(E=Object(p.a)(j.a.mark((function t(e,n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m("transaction/",{contactEmail:e,amount:n});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function U(){return(U=Object(p.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O("transaction/");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function P(){return(P=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",O("transaction/".concat(e)));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var F=function(){return function(){var t=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.getLoggedInUser();case 2:n=t.sent,e({type:"SET_USER",user:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=n(1);function R(t){var e=t.onClick,n=t.Icon,c=t.children,r=t.className;return Object(I.jsxs)("button",{className:r,onClick:e,children:[Object(I.jsx)(n,{}),c]})}var D=function(){var t=Object(o.c)((function(t){return t.userReducer.user})),e=Object(u.f)(),n=Object(o.b)();Object(c.useEffect)((function(){t||n(F)}),[t,n]);return Object(I.jsx)("div",{className:"app-footer",children:t&&Object(I.jsx)(R,{className:"contacts-btn",Icon:function(){return Object(I.jsx)("img",{src:"data:image/png;base64,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",alt:""})},onClick:function(){e.push("/contact")}})})},B=n.p+"static/media/bitcoin.a8165561.png",H=n(9),L=n(214),V=n(205),G=n(203),X=n(206),z=n(201),J=n(200),Q=n(215),Z=n(202),q=n(100),M=n.n(q),K=n(101),Y=n.n(K),W=n(216),_=function(t){var e=t.loggedUser,n=t.logout,r=t.history,a=c.useState(null),s=Object(H.a)(a,2),o=s[0],i=s[1],u=Boolean(o),l=function(){i(null)};return Object(I.jsxs)(c.Fragment,{children:[Object(I.jsxs)(L.a,{sx:{display:"flex",alignItems:"center",textAlign:"center"},children:[e&&Object(I.jsx)(W.a,{sx:{minWidth:100},children:e.email}),Object(I.jsx)(Z.a,{title:"Profile",children:Object(I.jsx)(Q.a,{onClick:function(t){i(t.currentTarget)},size:"small",sx:{ml:2},children:e?Object(I.jsx)(V.a,{alt:e.fullname,src:e.img}):Object(I.jsx)(V.a,{})})})]}),Object(I.jsxs)(G.a,{anchorEl:o,open:u,onClose:l,onClick:l,PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[e&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(X.a,{onClick:function(){return r.push("/user")},children:[Object(I.jsx)(V.a,{}),"Profile"]}),Object(I.jsx)(J.a,{})]}),e&&Object(I.jsxs)(X.a,{onClick:n,children:[Object(I.jsx)(z.a,{children:Object(I.jsx)(M.a,{fontSize:"small"})}),"Logout"]}),!e&&Object(I.jsxs)(X.a,{onClick:function(){return r.push("/signup/login")},children:[Object(I.jsx)(z.a,{children:Object(I.jsx)(Y.a,{fontSize:"small"})}),"Login"]}),!e&&Object(I.jsx)(X.a,{onClick:function(){return r.push("/signup")},children:"SignUp"})]})]})},$=function(){var t=Object(o.c)((function(t){return t.userReducer.user})),e=Object(u.f)(),n=Object(o.b)();return Object(I.jsxs)("header",{className:"app-header full",children:[Object(I.jsx)("div",{onClick:function(){return e.push("/")},className:"home-logo",children:Object(I.jsx)("img",{src:B,alt:""})}),Object(I.jsx)(_,{loggedUser:t,logout:function(){n(function(){var t=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.logout();case 2:e({type:"LOGOUT"});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e.push("/")},history:e})]})},tt=function(t){var e=t.transaction,n=new Date(e.createdAt).toLocaleTimeString("en-US"),c=new Date(e.createdAt).toLocaleDateString();return Object(I.jsxs)("li",{className:"transaction-preview",children:[Object(I.jsxs)("p",{children:[" From: ",e.from," "]}),Object(I.jsxs)("p",{children:[" To: ",e.to," "]}),Object(I.jsxs)("p",{children:[" Amount: ",e.amount," "]}),Object(I.jsxs)("p",{children:["Created at: ",c,", ",n]})]})},et=function(t){var e=t.transactions,n=t.title;return Object(I.jsxs)("section",{className:"transaction-list",children:[Object(I.jsx)("h3",{children:n}),Object(I.jsx)("ul",{className:"card-list",children:e.map((function(t,e){return Object(I.jsx)(tt,{transaction:t},e)}))})]})},nt=function(t){var e=t.contact,n=t.onTransactionCoins,r=Object(c.useState)(0),a=Object(H.a)(r,2),s=a[0],o=a[1],i=Object(u.f)();return Object(I.jsxs)("section",{className:"transaction-fund",children:[Object(I.jsxs)("h3",{children:["Transaction coins to ",e.name,":"]}),Object(I.jsxs)("form",{onSubmit:function(t){n(s,t),i.push("/contact")},children:[Object(I.jsx)("label",{htmlFor:"amount",children:"Amount:"}),Object(I.jsx)("input",{required:!0,id:"amount",onChange:function(t){var e=t.target,n="number"===e.type?+e.value:e.value;o(n)}}),Object(I.jsx)("button",{children:"Transaction"})]})]})},ct={getContacts:function(){return st.apply(this,arguments)},getContactById:function(t){return ot.apply(this,arguments)},deleteContact:function(t){return ut.apply(this,arguments)},saveContact:function(t){return lt.apply(this,arguments)},getEmptyContact:function(){return{contactName:"",contactEmail:"",contactPhone:""}},addContact:function(t){return it.apply(this,arguments)}},rt="contact/";function at(t){return t.sort((function(t,e){return t.contactName.toLocaleLowerCase()<e.contactName.toLocaleLowerCase()?-1:t.contactName.toLocaleLowerCase()>e.contactName.toLocaleLowerCase()?1:0}))}function st(){return st=Object(p.a)(j.a.mark((function t(){var e,n,c,r=arguments;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:null,t.prev=1,t.next=4,O(rt);case 4:if(c=t.sent,!e){t.next=8;break}return n=jt(e,c),t.abrupt("return",at(n));case 8:return t.abrupt("return",at(c));case 11:t.prev=11,t.t0=t.catch(1),console.log("cant get contacts",t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])}))),st.apply(this,arguments)}function ot(){return(ot=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O(rt+e);case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log("Contact id ".concat(e," not found!"),t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function it(){return(it=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m(rt,{contact:e});case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log("Contact username ".concat(e.username," not found!"),t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function ut(){return(ut=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v(rt+e,e);case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log("cant delete contact ".concat(e),t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function lt(){return(lt=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e._id){t.next=7;break}return t.next=4,x(rt+e._id,e);case 4:n=t.sent,t.next=10;break;case 7:return t.next=9,m(rt,e);case 9:n=t.sent;case 10:return t.abrupt("return",n);case 13:t.prev=13,t.t0=t.catch(0),console.log("cant save contact ".concat(e),t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function jt(t,e){t=t.toLocaleLowerCase();var n=e.filter((function(e){return e.contactName.toLocaleLowerCase().includes(t)||e.contactPhone.toLocaleLowerCase().includes(t)||e.contactEmail.toLocaleLowerCase().includes(t)}));return console.log({filteredContacts:n}),n}var pt=n.p+"static/media/contact.42200432.png",ht=function(t){var e=Object(o.c)((function(t){return t.userReducer.user})),n=Object(o.c)((function(t){return t.contactReducer.currContact})),r=Object(c.useState)(null),a=Object(H.a)(r,2),s=a[0],i=a[1],u=Object(o.b)();e||u(F()),Object(c.useEffect)((function(){var e;u((e=t.match.params.id,function(){var t=Object(p.a)(j.a.mark((function t(n){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ct.getContactById(e);case 2:c=t.sent,n({type:"SET_CONTACT",contact:c});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[u,t.match.params.id]),Object(c.useEffect)((function(){var t=function(){var t=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.getTransactionsByContactId(n._id);case 2:(e=t.sent).length&&i(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();n&&t()}),[n]);return n?Object(I.jsxs)("div",{className:"contact-details-page",children:[Object(I.jsxs)("div",{className:"action-buttons",children:[Object(I.jsx)("button",{onClick:function(){t.history.push("/contact")},children:"Back"}),Object(I.jsx)("button",{onClick:function(){t.history.push("/contact/edit/".concat(n._id))},children:"Edit"})]}),Object(I.jsxs)("div",{className:"contact-details",children:[n.contactImg?Object(I.jsx)("img",{src:n.contactImg,alt:""}):Object(I.jsx)("img",{src:pt,alt:""}),Object(I.jsxs)("p",{children:["Name: ",n.contactName]}),Object(I.jsxs)("p",{children:["Email: ",n.contactEmail]}),Object(I.jsxs)("p",{children:["Phone: ",n.contactPhone]})]}),Object(I.jsx)(nt,{contact:n,onTransactionCoins:function(t,c){if(c.preventDefault(),e.coins<t)return alert("No enough money");var r,a;u((r=n.contactEmail,a=t,function(){var t=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.addTransaction(r,a);case 2:n=t.sent,e({type:"SET_USER",user:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}}),s&&Object(I.jsx)(et,{transactions:s,title:"Transactions with contact"})]}):Object(I.jsx)("div",{children:"Contact not found..."})},bt=n(8),dt=n(18),ft=function(){var t=Object(p.a)(j.a.mark((function t(e){var n,c,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"mister-bitcoin-present","mister-bitcoin",n="https://api.cloudinary.com/v1_1/".concat("mister-bitcoin","/image/upload"),(c=new FormData).append("file",e.target.files[0]),c.append("upload_preset","mister-bitcoin-present"),t.prev=6,t.next=9,b.a.post(n,c);case 9:return r=t.sent,t.abrupt("return",r.data);case 13:t.prev=13,t.t0=t.catch(6),console.error("ERROR!",t.t0);case 16:case"end":return t.stop()}}),t,null,[[6,13]])})));return function(e){return t.apply(this,arguments)}}(),Ot=function(t){var e=Object(o.c)((function(t){return t.userReducer.user})),n=Object(c.useState)(null),r=Object(H.a)(n,2),a=r[0],s=r[1],i=Object(o.b)();Object(c.useEffect)((function(){e||i(F());var n=t.match.params.id,c=function(){var t=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=6;break}return t.next=3,ct.getContactById(e);case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0=ct.getEmptyContact();case 7:n=t.t0,s(n);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();c(n)}),[i,e,t.match.params.id]);var u=function(){var t=Object(p.a)(j.a.mark((function t(e){var n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.target.name,"file"!==e.target.type){t.next=7;break}return t.next=4,ft(e);case 4:c=t.sent.url,t.next=8;break;case 7:c="number"===e.target.type?+e.target.value:e.target.value;case 8:s(Object(dt.a)(Object(dt.a)({},a),{},Object(bt.a)({},n,c)));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var e=Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ct.deleteContact(a._id);case 2:t.history.push("/contact");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a?Object(I.jsxs)("div",{className:"contact-edit",children:[Object(I.jsx)("button",{onClick:function(){t.history.push("/contact/")},children:"Back to contacts"}),a._id&&Object(I.jsx)("button",{onClick:l,children:"Delete"}),Object(I.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(function(t){return function(){var e=Object(p.a)(j.a.mark((function e(n){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=!t._id,e.next=3,ct.saveContact(t);case 3:r=e.sent,n(c?{type:"ADD_CONTACT",contact:r}:{type:"UPDATE_CONTACT",updatedContact:r});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(a)).then((function(){return t.history.push("/contact")}))},children:[Object(I.jsxs)("div",{className:"contact-edit contact-name",children:[Object(I.jsx)("label",{htmlFor:"contactName",children:"Fullname"}),Object(I.jsx)("input",{required:!0,type:"text",id:"contactName",value:a.contactName,onChange:u,name:"contactName"})]}),Object(I.jsxs)("div",{className:"contact-edit contact-email",children:[Object(I.jsx)("label",{htmlFor:"contactEmail",children:"Email Address"}),Object(I.jsx)("input",{required:!0,type:"text",id:"contactEmail",value:a.contactEmail,onChange:u,name:"contactEmail"})]}),Object(I.jsxs)("div",{className:"contact-edit contact-phone",children:[Object(I.jsx)("label",{htmlFor:"contactPhone",children:"Phone Number"}),Object(I.jsx)("input",{required:!0,type:"text",id:"contactPhone",value:a.contactPhone,onChange:u,name:"contactPhone"})]}),Object(I.jsxs)("div",{className:"contact-edit contact-img",children:[Object(I.jsx)("label",{htmlFor:"contactImg",children:"Image"}),Object(I.jsx)("input",{type:"file",id:"contactImg",onChange:u,name:"contactImg"})]}),Object(I.jsx)("button",{children:"Save Contact"})]})]}):Object(I.jsx)("h1",{children:"Contact not found"})},mt=function(t){return Object(I.jsxs)("form",{className:"contact-filter",onSubmit:function(t){return t.preventDefault()},children:[Object(I.jsx)("label",{htmlFor:"term",children:"Search contact"}),Object(I.jsx)("input",{type:"text",id:"term",name:"term",onChange:function(e){var n=e.target;t.onChangeFilter(n.value)},placeholder:"Search..."})]})},xt=function(t){var e=t.contact;return Object(I.jsx)(i.b,{to:"/contact/".concat(e._id),children:Object(I.jsxs)("div",{className:"contact-preview",children:[e.contactImg?Object(I.jsx)("img",{src:e.contactImg,alt:""}):Object(I.jsx)("img",{src:pt,alt:""}),Object(I.jsx)("p",{children:e.contactName}),Object(I.jsx)("p",{children:e.contactEmail}),Object(I.jsx)("p",{children:e.contactPhone})]})})},vt=function(t){var e=t.contacts;return Object(I.jsx)("ul",{className:"contact-list",children:e.map((function(t){return Object(I.jsx)("li",{children:Object(I.jsx)(xt,{contact:t})},t._id)}))})},gt=function(t){var e=t.history,n=Object(c.useState)(null),r=Object(H.a)(n,2),a=r[0],s=r[1],i=Object(o.c)((function(t){return t.userReducer.user})),u=Object(o.c)((function(t){return t.contactReducer.contacts})),l=Object(o.b)(),h=function(){e.push("/contact/edit")};Object(c.useEffect)((function(){l(i?function(t){return function(){var e=Object(p.a)(j.a.mark((function e(n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ct.getContacts(t);case 2:c=e.sent,n({type:"SET_CONTACTS",contacts:c});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(a):F())}),[a,l,i]);return i?Object(I.jsxs)("div",{className:"contact-page",children:[Object(I.jsx)(mt,{onChangeFilter:function(t){s(t)}}),Object(I.jsxs)("div",{className:"add-contact",children:[Object(I.jsx)("p",{onClick:h,children:"Add contact"}),Object(I.jsx)(R,{className:"add-contact-btn",onClick:h,Icon:function(){return Object(I.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPRSURBVFhH3VhLTxNRFJ5El/ozfCQm6j9wo33QUlcmEI00JuJSRR4LTNwI7UwLCxagCZjgkoWPqGGhPDSQzkzZKIkgJIgSNHEjdKYYQsl4vnobZDwwt3QgyJd8Sds595zTufe8rnJgcUEbOxtWM3ei6exgNG3MhzQ9H0xmCiA+R9PmZzyj7w0hLXNaLNtdxNSxo+Gk3hxJmwuxzqxV/3j2192XPxx1JOd0ZVad7myhSHzGb6307AbJxDqyFtZUqXrTuXsjR4Q6/0BKD4eSemNYM6z4o+l8+5sl58HEujR7iG1DS068d8oOa7oV1DIN0CnUV4ZA2/jJKs2Yvfxw0kq/s1kHymHqre3U9kxakZQxHVTHTggzO0OVpl8k56zmZ9/WOWOVEDrDqm4H1UxMmCsPoYR+LZI28snhHGvADyaGl51IylwJJ/Srwqwcim8uZeT92FIvYsthS/pNijNntQ8tswp3g7BFTlqeZxKRFU2ZMy3Pv/t+5rxIZ7JAgTO1bXQjlSBaOQVedIOT8WJtzwcrpOq3hTubgQRKW5vb6blzg5PxIs5jOGXk4ItwawMh1WhBEuYWytANTkaG8d5pm0plo3BrA7T/C8j23CIZusHJyLCNqhT58kW49QeBhH4m1jFhoSRxi2ToBicjQ/iA2h1MGqeEe4qCrgRFnVsgSzc4GVle759doYC9JdxTlGhndhBdCScsSzc4GVmiC6pOm6+Ee+Qg9W7J0cpKmhucjCxRXqk9mxPuYYv1fJe+ygqX6Dc4GyWin0RbJtxTFHTB3WaBFS7Rb3A2Suw21xxK2GvCvf/AwX2/xdST7e8gQZpBaHPCsnSDk5Fl6wtXmtmPiZp8uincK5U6094vpa66I2tvKnUAFeivKNTcIhm6wcnI8P7rnw4Vjnnh1gbQ4sT7pm1ukQzd4GRkWEezc4COnHBrA2gSEdpoGrmFXnSDk/GiNmpRetmiYQUw8WOo5hZ70Q1OZjvi7NX0vKfB6a/gcAMDC+XET81PF/d8aGp6slgcmi4NDBwS7vDA6IeJf6/HTtgMtxvHhRvbA0M0humdnsdyWPbgXkIoadThWmI33yRmoIhmroQSmSvCbHkIqONRGkXtJp/PJAKCdBZwgxFM6BFhbmc4r2aO4fBiqE6NVr7lGm1pDemKpoyP0C3MVAZENyZ+DNXxvikbFaecsghZVAgkYehAKoFOod4/IIHiGhelCKMhijq6ILRHxStganpBfMZveFbfP7NSvAKmlg5XK1smYb+BYo7REG1RNJ2dK15Gikt0+hM2/Yk5PIPMP4X/4EBRfgMZf0kSNetpswAAAABJRU5ErkJggg==",alt:""})}})]}),u?Object(I.jsx)(vt,{contacts:u}):Object(I.jsx)("h1",{children:"No contacts to show"})]}):Object(I.jsxs)("div",{className:"contact-page",children:[Object(I.jsx)("h1",{children:"Hello, Stranger"}),Object(I.jsx)("button",{onClick:function(){return e.push("/signup")},children:"Login/SignUp"})]})},At=n(47),wt={getRate:function(){return yt.apply(this,arguments)},getMarketPrice:function(){return Ct.apply(this,arguments)},getConfirmedTransactions:function(){return kt.apply(this,arguments)}};function yt(){return(yt=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,At.get("https://blockchain.info/tobtc?currency=USD&value=1");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function Ct(){return(Ct=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,At.get("https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function kt(){return(kt=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,At.get("https://blockchain.info/tobtc?currency=USD&value=1");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}var St=n(209),Nt=n(213),Tt=n(212),Et=n(208),Ut=n(210),Pt=n(211),Ft=n(207),It=function(t){var e=t.rows;return Object(I.jsx)(Et.a,{component:Ft.a,children:Object(I.jsxs)(St.a,{sx:{minWidth:650},"aria-label":"sticky table",children:[Object(I.jsx)(Ut.a,{children:Object(I.jsxs)(Pt.a,{hover:!0,role:"checkbox",children:[Object(I.jsx)(Tt.a,{children:"From"}),Object(I.jsx)(Tt.a,{children:"To"}),Object(I.jsx)(Tt.a,{children:"Amount"}),Object(I.jsx)(Tt.a,{children:"Date"})]})}),Object(I.jsx)(Nt.a,{children:e.map((function(t){return Object(I.jsxs)(Pt.a,{hover:!0,sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(I.jsx)(Tt.a,{children:t.from}),Object(I.jsx)(Tt.a,{children:t.to}),Object(I.jsx)(Tt.a,{children:t.amount}),Object(I.jsx)(Tt.a,{children:t.createdAt})]},t._id)}))})]})})},Rt=function(t){var e=t.history,n=Object(c.useState)(0),r=Object(H.a)(n,2),a=r[0],s=r[1],i=Object(o.c)((function(t){return t.userReducer.user})),u=Object(c.useState)(null),l=Object(H.a)(u,2),h=l[0],b=l[1],d=Object(o.b)(),f=Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(1/a),O=i?Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(1/a*i.coins):null;Object(c.useEffect)((function(){var t=function(){var t=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.getTransactions();case 2:e=t.sent,b(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();i?t():d(F())}),[i,d]);var m=function(){var t=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,wt.getRate();case 2:e=t.sent,s(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return m(),i?Object(I.jsxs)("div",{className:"home-page logged-user",children:[Object(I.jsxs)("div",{className:"user-balance",children:[Object(I.jsx)("h2",{children:O}),Object(I.jsxs)("h3",{children:["You have ",i.coins," bitcoins"]}),Object(I.jsxs)("h3",{children:["1 Bitcoin: ",f]})]}),Object(I.jsx)("div",{className:"transactions-table",children:h&&Object(I.jsx)(It,{rows:h})})]}):Object(I.jsx)("div",{className:"home-page guest",children:Object(I.jsxs)("div",{className:"guest-welcome",children:[Object(I.jsx)("h1",{children:"Welcome to Mister Bitcoin"}),Object(I.jsx)("p",{children:"Demo bitcoin wallet"}),Object(I.jsx)("button",{onClick:function(){return e.push("/signup")},children:"Register Now"})]})})},Dt=(n(150),function(t){var e=Object(c.useState)(null),n=Object(H.a)(e,2),r=n[0],a=n[1],s=Object(o.b)(),i=Object(u.f)(),l=function(t){var e=t.target,n=e.name,c="number"===e.value?+e.value:e.value;a(Object(dt.a)(Object(dt.a)({},r),{},Object(bt.a)({},n,c)))};return Object(I.jsx)("div",{children:Object(I.jsxs)("form",{onSubmit:function(t){t.preventDefault(),s(function(t){return function(){var e=Object(p.a)(j.a.mark((function e(n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.login(t);case 2:c=e.sent,n({type:"SET_USER",user:c});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(r)),i.push("/")},children:[Object(I.jsx)("h1",{children:"Login"}),Object(I.jsx)("label",{htmlFor:"email",children:"Email"}),Object(I.jsx)("input",{required:!0,type:"text",id:"email",onChange:l,name:"email"}),Object(I.jsx)("label",{htmlFor:"password",children:"Password"}),Object(I.jsx)("input",{required:!0,type:"password",id:"password",onChange:l,name:"password"}),Object(I.jsx)("button",{children:"Login"})]})})}),Bt=(n(151),function(){var t=Object(c.useState)(null),e=Object(H.a)(t,2),n=e[0],r=e[1],a=Object(o.b)(),s=Object(u.f)(),i=function(t){var e=t.target,c=e.name,a="number"===e.value?+e.value:e.value;r(Object(dt.a)(Object(dt.a)({},n),{},Object(bt.a)({},c,a)))};return Object(I.jsx)("div",{children:Object(I.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a(function(t){return function(){var e=Object(p.a)(j.a.mark((function e(n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.signup(t);case 3:e.next=9;break;case 5:throw e.prev=5,e.t0=e.catch(0),console.log({"err actions1":e.t0}),e.t0;case 9:return e.next=11,w.getLoggedInUser();case 11:c=e.sent,n({type:"SET_USER",user:c});case 13:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()}(n)).then((function(){s.push("/")})).catch((function(t){console.log({"err page":t})}))},children:[Object(I.jsx)("h1",{children:"Signup"}),Object(I.jsx)("label",{htmlFor:"fullname",children:"Full name"}),Object(I.jsx)("input",{required:!0,type:"text",id:"fullname",onChange:i,name:"fullname"}),Object(I.jsx)("label",{htmlFor:"username",children:"User name"}),Object(I.jsx)("input",{required:!0,type:"text",id:"username",onChange:i,name:"username"}),Object(I.jsx)("label",{htmlFor:"password",children:"Password"}),Object(I.jsx)("input",{required:!0,type:"password",id:"password-login",onChange:i,name:"password"}),Object(I.jsx)("label",{htmlFor:"email",children:"Email"}),Object(I.jsx)("input",{required:!0,type:"text",id:"email-login",onChange:i,name:"email"}),Object(I.jsx)("label",{htmlFor:"phone",children:"Phone number"}),Object(I.jsx)("input",{required:!0,type:"text",id:"phone",onChange:i,name:"phone"}),Object(I.jsx)("button",{children:"Sign up"}),Object(I.jsx)("hr",{})]})})}),Ht=function(t){var e=Object(c.useState)("Login"),n=Object(H.a)(e,2),r=n[0],a=n[1];Object(c.useEffect)((function(){var e=t.history.location.pathname;a("/signup/login"===e?"Login":"SignUp")}),[t.history.location]);var s={SignUp:Bt,Login:Dt}[r],o="Login"===r?"SignUp":"Login",i="Login"===r?"Register now":"Already registered? login";return Object(I.jsxs)("div",{className:"signup-page",children:[Object(I.jsx)(s,{}),Object(I.jsx)("button",{onClick:function(){return a(o)},children:i})]})},Lt=n(68),Vt=function(t){t.title;var e=t.data,n=t.description;return Object(I.jsxs)("div",{className:"chart",children:[Object(I.jsx)("h1",{children:n}),Object(I.jsxs)(Lt.Sparklines,{data:e,children:[Object(I.jsx)(Lt.SparklinesLine,{color:"red"}),Object(I.jsx)(Lt.SparklinesSpots,{size:1})]})]})},Gt=function(){var t=Object(c.useState)(null),e=Object(H.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(null),s=Object(H.a)(a,2),o=s[0],i=s[1];return Object(c.useEffect)((function(){var t=function(){var t=Object(p.a)(j.a.mark((function t(){var e,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,wt.getMarketPrice();case 3:e=t.sent,r(e),n=e.values.map((function(t){return t.y})),i(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),n&&o&&Object(I.jsxs)("div",{className:"statistic-page",children:[Object(I.jsx)("h1",{children:"Statistic page:"}),Object(I.jsx)(Vt,{title:n.name,description:n.description,data:o,color:"red"})]})},Xt=function(t){t.history;var e=Object(o.c)((function(t){return t.userReducer.user}));return Object(I.jsxs)("div",{className:"user-details-page",children:[Object(I.jsx)("img",{src:e.img,alt:""}),Object(I.jsxs)("p",{children:["Fullname: ",e.fullname]}),Object(I.jsxs)("p",{children:["Username: ",e.username]}),Object(I.jsxs)("p",{children:["Phome: ",e.phone]}),Object(I.jsxs)("p",{children:["Email: ",e.email]})]})},zt=function(){return Object(I.jsx)(i.a,{children:Object(I.jsxs)("div",{className:"App main-layout",children:[Object(I.jsx)($,{}),Object(I.jsxs)(u.c,{children:[Object(I.jsx)(u.a,{component:Ot,path:"/contact/edit/:id?"}),Object(I.jsx)(u.a,{component:ht,path:"/contact/:id"}),Object(I.jsx)(u.a,{component:gt,path:"/contact"}),Object(I.jsx)(u.a,{component:Xt,path:"/user"}),Object(I.jsx)(u.a,{component:Gt,path:"/statistic"}),Object(I.jsx)(u.a,{component:Ht,path:"/signup"}),Object(I.jsx)(u.a,{component:Rt,path:"/"})]}),Object(I.jsx)(D,{})]})})},Jt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,217)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),a(t),s(t)}))},Qt=n(56),Zt=n(25),qt={contacts:[],currContact:null};var Mt={user:null},Kt=n(102),Yt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Qt.c,Wt=Object(Qt.b)({contactReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_CONTACTS":return Object(dt.a)(Object(dt.a)({},t),{},{contacts:e.contacts});case"SET_CONTACT":return Object(dt.a)(Object(dt.a)({},t),{},{currContact:e.contact});case"ADD_CONTACT":return Object(dt.a)(Object(dt.a)({},t),{},{contacts:[].concat(Object(Zt.a)(t.contacts),[e.contact])});case"REMOVE_CONTACT":return Object(dt.a)(Object(dt.a)({},t),{},{contacts:t.contacts.filter((function(t){return t._id!==e.contactId}))});case"UPDATE_CONTACT":var n=e.updatedContact;return Object(dt.a)(Object(dt.a)({},t),{},{contacts:t.contacts.map((function(t){return t._id===n._id?n:t}))});default:return t}},userReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt,e=arguments.length>1?arguments[1]:void 0;switch(console.log(e),e.type){case"SET_USER":return Object(dt.a)(Object(dt.a)({},t),{},{user:e.user});case"LOGOUT":return Object(dt.a)(Object(dt.a)({},t),{},{user:null});default:return t}}}),_t=Object(Qt.d)(Wt,Yt(Object(Qt.a)(Kt.a)));n(152);s.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(o.a,{store:_t,children:Object(I.jsx)(zt,{})})}),document.getElementById("root")),Jt()}},[[153,1,2]]]);
//# sourceMappingURL=main.9e33cd90.chunk.js.map