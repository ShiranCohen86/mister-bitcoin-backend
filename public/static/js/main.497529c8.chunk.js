(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{67:function(t,e,n){},71:function(t,e,n){},72:function(t,e,n){},73:function(t,e,n){},74:function(t,e,n){},75:function(t,e,n){},76:function(t,e,n){},77:function(t,e,n){},78:function(t,e,n){},79:function(t,e,n){},80:function(t,e,n){},81:function(t,e,n){},82:function(t,e,n){},83:function(t,e,n){},84:function(t,e,n){},85:function(t,e,n){},86:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),a=n(20),s=n.n(a),u=n(7),o=n(14),i=n(5),l=n(2),p=n.n(l),j=n(3),f=n(26),h="/api/",d=n.n(f).a.create({withCredentials:!0}),b=function(t,e){return v(t,"GET",e)},O=function(t,e){return v(t,"POST",e)},m=function(t,e){return v(t,"PUT",e)},x=function(t,e){return v(t,"DELETE",e)};function v(t){return y.apply(this,arguments)}function y(){return y=Object(j.a)(p.a.mark((function t(e){var n,r,c,a=arguments;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"GET",r=a.length>2&&void 0!==a[2]?a[2]:null,t.prev=2,t.next=5,d({url:"".concat(h).concat(e),method:n,data:r,params:"GET"===n?r:null});case 5:return c=t.sent,t.abrupt("return",c.data);case 9:throw t.prev=9,t.t0=t.catch(2),console.log("Had Issues ".concat(n,"ing to the backend, endpoint: ").concat(e,", with data: ").concat(r)),console.dir(t.t0),t.t0.response&&t.t0.response.status,t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,9]])}))),y.apply(this,arguments)}var g={getUsers:function(){return b("user")},getById:function(t){return b("user/".concat(t))},remove:function(t){return x("user/".concat(t))},update:function(t){return C.apply(this,arguments)},login:function(t){return w.apply(this,arguments)},signup:function(t){return A.apply(this,arguments)},logout:function(){return T.apply(this,arguments)},getLoggedInUser:k};function C(){return(C=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m("user/".concat(e._id),e);case 2:e=t.sent,k()._id===e._id&&P(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(){return(w=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O("auth/login",e);case 2:if(!(n=t.sent)){t.next=5;break}return t.abrupt("return",P(n));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function A(){return(A=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O("auth/signup",e);case 2:return n=t.sent,t.abrupt("return",P(n));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(){return(T=Object(j.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return sessionStorage.clear(),t.next=3,O("auth/logout");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(){return S.apply(this,arguments)}function S(){return(S=Object(j.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b("auth/loggedinUser");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function P(t){return sessionStorage.setItem("loggedInUser",JSON.stringify(t)),t}window.userService=g;var N={addTransfer:function(t,e){return F.apply(this,arguments)},getTransfers:function(){return U.apply(this,arguments)},getTransfersByUserId:function(t){return E.apply(this,arguments)}};function F(){return(F=Object(j.a)(p.a.mark((function t(e,n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O("transfer/",{contactId:e,amount:n});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function U(){return(U=Object(j.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b("transfer/");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(){return(E=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",b("transfer/".concat(e)));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var D=function(){return function(){var t=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.getLoggedInUser();case 2:n=t.sent,e({type:"SET_USER",user:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},L=(n(67),n(0)),M=function(){var t=Object(u.c)((function(t){return t.userReducer.user})),e=Object(i.f)(),n=Object(u.b)();return Object(L.jsxs)("div",{className:"app-header",children:[Object(L.jsx)("div",{onClick:function(){return e.push("/")},className:"app-logo",children:Object(L.jsx)("img",{src:"data:image/png;base64,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",alt:""})}),Object(L.jsxs)("ul",{children:[Object(L.jsx)("li",{children:Object(L.jsx)(o.c,{exact:!0,to:"/",activeClassName:"active-nav",children:"Home"})}),Object(L.jsx)("li",{children:Object(L.jsx)(o.c,{to:"/contact",activeClassName:"active-nav",children:"Contacts"})}),Object(L.jsx)("li",{children:Object(L.jsx)(o.c,{to:"/statistic",activeClassName:"active-nav",children:"Statistics"})}),Object(L.jsx)("li",{children:t?Object(L.jsx)(o.c,{to:"/signup",activeClassName:"active-nav",onClick:function(){n(function(){var t=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.logout();case 2:e({type:"LOGOUT"});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},children:"Logout"}):Object(L.jsx)(o.c,{to:"/signup",activeClassName:"active-nav",children:"SignUp"})})]})]})},R=n(8),G=(n(71),function(t){var e=t.transfer,n=new Date(e.createdAt).toLocaleTimeString("en-US"),r=new Date(e.createdAt).toLocaleDateString();return Object(L.jsxs)("li",{className:"transfer-preview",children:[Object(L.jsxs)("p",{children:[" From: ",e.fromName," "]}),Object(L.jsxs)("p",{children:[" To: ",e.toName," "]}),Object(L.jsxs)("p",{children:[" Amount: ",e.amount," "]}),Object(L.jsxs)("p",{children:["Created at: ",r,", ",n]})]})}),I=(n(72),function(t){var e=t.transfers;return Object(L.jsx)("section",{className:"transfer-list",children:Object(L.jsx)("ul",{children:e.map((function(t,e){return Object(L.jsx)(G,{transfer:t},e)}))})})}),W=(n(73),function(t){var e=t.contact,n=t.onTransferCoins,c=Object(r.useState)(0),a=Object(R.a)(c,2),s=a[0],u=a[1],o=Object(i.f)();return Object(L.jsxs)("section",{className:"transfer-fund",children:[Object(L.jsxs)("h3",{children:["Transfer coins to ",e.name,":"]}),Object(L.jsxs)("form",{onSubmit:function(t){n(s,t),o.push("/contact")},children:[Object(L.jsx)("label",{htmlFor:"amount",children:"Amount:"}),Object(L.jsx)("input",{required:!0,type:"number",id:"amount",onChange:function(t){var e=t.target,n="number"===e.type?+e.value:e.value;u(n)}}),Object(L.jsx)("button",{children:"Transfer"})]})]})}),H={getContacts:function(){return X.apply(this,arguments)},getContactById:function(t){return B.apply(this,arguments)},deleteContact:function(t){return z.apply(this,arguments)},saveContact:function(t){return Z.apply(this,arguments)},getEmptyContact:function(){return{contactName:"",contactEmail:"",contactPhone:""}},addContact:function(t){return q.apply(this,arguments)}},J="contact/";function K(t){return t.sort((function(t,e){return t.name.toLocaleLowerCase()<e.name.toLocaleLowerCase()?-1:t.name.toLocaleLowerCase()>e.name.toLocaleLowerCase()?1:0}))}function X(){return X=Object(j.a)(p.a.mark((function t(){var e,n,r,c=arguments;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:null,t.prev=1,t.next=4,b(J);case 4:if(r=t.sent,!e){t.next=8;break}return n=Q(e,r),t.abrupt("return",K(n));case 8:return t.abrupt("return",r);case 11:t.prev=11,t.t0=t.catch(1),console.log("cant get contacts",t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])}))),X.apply(this,arguments)}function B(){return(B=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b(J+e);case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log("Contact id ".concat(e," not found!"),t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function q(){return(q=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O(J,{contact:e});case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log("Contact username ".concat(e.username," not found!"),t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function z(){return(z=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x(J+e,e);case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log("cant delete contact ".concat(e),t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function Z(){return(Z=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e._id){t.next=7;break}return t.next=4,m(J+e._id,e);case 4:n=t.sent,t.next=10;break;case 7:return t.next=9,O(J,e);case 9:n=t.sent;case 10:return t.abrupt("return",n);case 13:t.prev=13,t.t0=t.catch(0),console.log("cant save contact ".concat(e),t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function Q(t,e){return t=t.toLocaleLowerCase(),e.filter((function(e){return e.name.toLocaleLowerCase().includes(t)||e.phone.toLocaleLowerCase().includes(t)||e.email.toLocaleLowerCase().includes(t)}))}n(74);var V=function(t){var e=Object(u.c)((function(t){return t.userReducer.user})),n=Object(u.c)((function(t){return t.contactReducer.currContact})),c=Object(r.useState)([]),a=Object(R.a)(c,2),s=(a[0],a[1],Object(u.b)());Object(r.useEffect)((function(){var n;e||s(D()),s((n=t.match.params.id,function(){var t=Object(j.a)(p.a.mark((function t(e){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.getContactById(n);case 2:r=t.sent,e({type:"SET_CONTACT",contact:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[t.match.params.id]);return n?Object(L.jsxs)("div",{className:"contact-details-page",children:[Object(L.jsx)("h1",{children:"Contact Details Page:"}),Object(L.jsx)("img",{src:"https://robohash.org/".concat(n._id),alt:""}),Object(L.jsx)("p",{children:n._id}),Object(L.jsx)("p",{children:n.contactName}),Object(L.jsx)("p",{children:n.contactEmail}),Object(L.jsx)("p",{children:n.contactPhone}),Object(L.jsx)(W,{contact:n,onTransferCoins:function(t,r){if(r.preventDefault(),e.coins<t)return alert("No enough money");var c,a;s((c=n._id,a=t,function(){var t=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.addTransfer(c,a);case 2:n=t.sent,e({type:"SET_USER",user:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}}),Object(L.jsx)("button",{onClick:function(){t.history.push("/contact")},children:"Back"}),Object(L.jsx)("button",{onClick:function(){t.history.push("/contact/edit/".concat(n._id))},children:"Edit"})]}):Object(L.jsx)("div",{children:"Contact not found..."})},Y=n(16),_=n(6),$=(n(75),function(t){var e=Object(u.c)((function(t){return t.userReducer.user})),n=Object(r.useState)(null),c=Object(R.a)(n,2),a=c[0],s=c[1],o=Object(u.b)();Object(r.useEffect)((function(){e||o(D());var n=t.match.params.id,r=function(){var t=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=6;break}return t.next=3,H.getContactById(e);case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0=H.getEmptyContact();case 7:n=t.t0,s(n);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();r(n)}),[]);var i=function(t){var e=t.target,n=e.name,r="number"===e.type?+e.value:e.value;s(Object(_.a)(Object(_.a)({},a),{},Object(Y.a)({},n,r)))},l=function(){var e=Object(j.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.deleteContact(a._id);case 2:t.history.push("/contact");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a?Object(L.jsxs)("div",{className:"contact-edit",children:[Object(L.jsx)("button",{onClick:function(){t.history.push("/contact/".concat(a._id))},children:"Back"}),a._id&&Object(L.jsx)("button",{onClick:l,children:"Delete"}),Object(L.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o(function(t){return function(){var e=Object(j.a)(p.a.mark((function e(n){var r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=!t._id,e.next=3,H.saveContact(t);case 3:c=e.sent,n(r?{type:"ADD_CONTACT",contact:c}:{type:"UPDATE_CONTACT",updatedContact:c});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(a)).then((function(){return t.history.push("/contact")}))},children:[Object(L.jsx)("label",{htmlFor:"contactName",children:"Fullname"}),Object(L.jsx)("input",{required:!0,type:"text",id:"contactName",value:a.contactName,onChange:i,name:"contactName"}),Object(L.jsx)("label",{htmlFor:"contactEmail",children:"Email Address"}),Object(L.jsx)("input",{required:!0,type:"text",id:"contactEmail",value:a.contactEmail,onChange:i,name:"contactEmail"}),Object(L.jsx)("label",{htmlFor:"contactPhone",children:"Phone Number"}),Object(L.jsx)("input",{required:!0,type:"text",id:"contactPhone",value:a.contactPhone,onChange:i,name:"contactPhone"}),Object(L.jsx)("button",{children:"Save Contact"})]})]}):Object(L.jsx)("h1",{children:"Contact not found"})}),tt=(n(76),function(t){return Object(L.jsxs)("form",{className:"contact-filter",onSubmit:function(t){return t.preventDefault()},children:[Object(L.jsx)("label",{htmlFor:"term",children:"Search contact"}),Object(L.jsx)("input",{type:"text",id:"term",name:"term",onChange:function(e){var n=e.target;t.onChangeFilter(n.value)},placeholder:"Search..."})]})}),et=(n(77),function(t){var e=t.contact;return console.log("tet",{contact:e}),Object(L.jsx)(o.b,{to:"/contact/".concat(e._id),children:Object(L.jsxs)("div",{className:"contact-preview",children:[Object(L.jsx)("img",{src:"https://robohash.org/".concat(e._id),alt:""}),Object(L.jsxs)("p",{children:["Fullname: ",e.contactName]}),Object(L.jsxs)("p",{children:["Email: ",e.contactEmail]}),Object(L.jsxs)("p",{children:["Phone Number: ",e.contactPhone]})]})})}),nt=(n(78),function(t){var e=t.contacts;return Object(L.jsx)("ul",{className:"contact-list",children:e.map((function(t){return Object(L.jsx)("li",{children:Object(L.jsx)(et,{contact:t})},t._id)}))})}),rt=(n(79),function(t){var e=t.history,n=Object(r.useState)(null),c=Object(R.a)(n,2),a=c[0],s=c[1],o=Object(u.c)((function(t){return t.userReducer.user})),i=Object(u.c)((function(t){return t.contactReducer.contacts})),l=Object(u.b)();return Object(r.useEffect)((function(){l(o?function(t){return function(){var e=Object(j.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.getContacts(t);case 2:r=e.sent,n({type:"SET_CONTACTS",contacts:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(a):D())}),[]),o&&Object(L.jsxs)("div",{className:"contact-page",children:[Object(L.jsx)(tt,{onChangeFilter:function(t){s(t)}}),i?Object(L.jsx)(nt,{contacts:i}):Object(L.jsx)("h1",{children:"No contacts to show"}),Object(L.jsx)("button",{onClick:function(){e.push("/contact/edit")},children:"Add contact"})]})}),ct=n(26),at={getRate:function(){return st.apply(this,arguments)},getMarketPrice:function(){return ut.apply(this,arguments)},getConfirmedTransactions:function(){return ot.apply(this,arguments)}};function st(){return(st=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ct.get("https://blockchain.info/tobtc?currency=USD&value=1");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function ut(){return(ut=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ct.get("https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function ot(){return(ot=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ct.get("https://blockchain.info/tobtc?currency=USD&value=1");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}var it=n.p+"static/media/home.928af089.jpg",lt=(n(80),function(){var t=Object(r.useState)(0),e=Object(R.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)(null),s=Object(R.a)(a,2),o=s[0],i=(s[1],Object(u.c)((function(t){return t.userReducer.user}))),l=Object(u.b)(),f=Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(1/n),h=i?Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(1/n*i.coins):null;return Object(r.useEffect)((function(){var t=function(){var t=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,at.getRate();case 2:e=t.sent,c(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(r.useEffect)((function(){l(D())}),[]),i?Object(L.jsxs)("div",{className:"home-page",children:[Object(L.jsxs)("h1",{children:["Hello ",i.fullname]}),Object(L.jsxs)("h3",{children:["You have ",i.coins," bitcoins"]}),Object(L.jsxs)("h3",{children:["1 Bitcoin: ",f]}),Object(L.jsxs)("h3",{children:["Your bitcoins value: ",h," "]}),i&&o&&Object(L.jsx)(I,{transfers:o})]}):Object(L.jsx)("div",{className:"home-page-img",children:Object(L.jsx)("img",{src:it,alt:""})})}),pt=(n(81),function(t){var e=Object(r.useState)(null),n=Object(R.a)(e,2),c=n[0],a=n[1],s=Object(u.b)(),o=function(t){var e=t.target,n=e.name,r="number"===e.value?+e.value:e.value;a(Object(_.a)(Object(_.a)({},c),{},Object(Y.a)({},n,r)))};return Object(L.jsxs)("div",{className:"signup-page",children:[Object(L.jsx)("h1",{children:"Signup"}),Object(L.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(function(t){return function(){var e=Object(j.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.signup(t);case 2:return e.next=4,g.getLoggedInUser();case 4:r=e.sent,n({type:"SET_USER",user:r});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(c)).then((function(){return t.history.push("/")}))},children:[Object(L.jsx)("label",{htmlFor:"fullname",children:"Full name"}),Object(L.jsx)("input",{required:!0,type:"text",id:"fullname",onChange:o,name:"fullname"}),Object(L.jsx)("label",{htmlFor:"username",children:"User name"}),Object(L.jsx)("input",{required:!0,type:"text",id:"username",onChange:o,name:"username"}),Object(L.jsx)("label",{htmlFor:"password",children:"Password"}),Object(L.jsx)("input",{required:!0,type:"password",id:"password",onChange:o,name:"password"}),Object(L.jsx)("label",{htmlFor:"email",children:"Email"}),Object(L.jsx)("input",{required:!0,type:"text",id:"email",onChange:o,name:"email"}),Object(L.jsx)("label",{htmlFor:"phone",children:"Phone number"}),Object(L.jsx)("input",{required:!0,type:"text",id:"phone",onChange:o,name:"phone"}),Object(L.jsx)("button",{children:"Sign up"}),Object(L.jsx)("hr",{})]}),Object(L.jsx)("h1",{children:"Login"}),Object(L.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(function(t){return function(){var e=Object(j.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.login(t);case 2:r=e.sent,n({type:"SET_USER",user:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(c)),t.history.push("/")},children:[Object(L.jsx)("label",{htmlFor:"username",children:"User name"}),Object(L.jsx)("input",{required:!0,type:"text",id:"username",onChange:o,name:"username"}),Object(L.jsx)("label",{htmlFor:"password",children:"Password"}),Object(L.jsx)("input",{required:!0,type:"password",id:"password",onChange:o,name:"password"}),Object(L.jsx)("button",{children:"Login"})]})]})}),jt=n(28),ft=(n(82),function(t){t.title;var e=t.data,n=t.description;return Object(L.jsxs)("div",{children:[Object(L.jsx)("h1",{children:n}),Object(L.jsx)(jt.Sparklines,{data:e,children:Object(L.jsx)(jt.SparklinesLine,{color:"red"})})]})}),ht=(n(83),function(){var t=Object(r.useState)(null),e=Object(R.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)(null),s=Object(R.a)(a,2),u=s[0],o=s[1];return Object(r.useEffect)((function(){var t=function(){var t=Object(j.a)(p.a.mark((function t(){var e,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,at.getMarketPrice();case 3:e=t.sent,c(e),n=e.values.map((function(t){return t.y})),o(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),n&&u&&Object(L.jsxs)("div",{children:[Object(L.jsx)("h1",{children:"Statistic page:"}),Object(L.jsx)(ft,{title:n.name,description:n.description,data:u,color:"red"})]})}),dt=(n(84),function(){return Object(L.jsx)(o.a,{children:Object(L.jsxs)("div",{className:"App",children:[Object(L.jsx)(M,{}),Object(L.jsxs)(i.c,{children:[Object(L.jsx)(i.a,{component:$,path:"/contact/edit/:id?"}),Object(L.jsx)(i.a,{component:V,path:"/contact/:id"}),Object(L.jsx)(i.a,{component:rt,path:"/contact"}),Object(L.jsx)(i.a,{component:ht,path:"/statistic"}),Object(L.jsx)(i.a,{component:pt,path:"/signup"}),Object(L.jsx)(i.a,{component:lt,path:"/"})]})]})})}),bt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),r(t),c(t),a(t),s(t)}))},Ot=n(19),mt=n(39),xt={contacts:[],currContact:null};var vt={user:null},yt=n(38),gt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ot.c,Ct=Object(Ot.b)({contactReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_CONTACTS":return Object(_.a)(Object(_.a)({},t),{},{contacts:e.contacts});case"SET_CONTACT":return Object(_.a)(Object(_.a)({},t),{},{currContact:e.contact});case"ADD_CONTACT":return Object(_.a)(Object(_.a)({},t),{},{contacts:[].concat(Object(mt.a)(t.contacts),[e.contact])});case"REMOVE_CONTACT":return Object(_.a)(Object(_.a)({},t),{},{contacts:t.contacts.filter((function(t){return t._id!==e.contactId}))});case"UPDATE_CONTACT":var n=e.updatedContact;return Object(_.a)(Object(_.a)({},t),{},{contacts:t.contacts.map((function(t){return t._id===n._id?n:t}))});default:return t}},userReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,e=arguments.length>1?arguments[1]:void 0;switch(console.log(e),e.type){case"SET_USER":return Object(_.a)(Object(_.a)({},t),{},{user:e.user});case"LOGOUT":return Object(_.a)(Object(_.a)({},t),{},{user:null});default:return t}}}),wt=Object(Ot.d)(Ct,gt(Object(Ot.a)(yt.a)));n(85);s.a.render(Object(L.jsx)(c.a.StrictMode,{children:Object(L.jsx)(u.a,{store:wt,children:Object(L.jsx)(dt,{})})}),document.getElementById("root")),bt()}},[[86,1,2]]]);
//# sourceMappingURL=main.497529c8.chunk.js.map