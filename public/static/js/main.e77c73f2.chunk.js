(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{47:function(t,e,n){},71:function(t,e,n){},72:function(t,e,n){},73:function(t,e,n){},74:function(t,e,n){},75:function(t,e,n){},76:function(t,e,n){},77:function(t,e,n){},78:function(t,e,n){},79:function(t,e,n){},80:function(t,e,n){},81:function(t,e,n){},82:function(t,e,n){},83:function(t,e,n){},84:function(t,e,n){},85:function(t,e,n){},86:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(20),s=n.n(a),o=n(6),u=n(14),i=n(5),l=(n(47),n(2)),p=n.n(l),j=n(3),f=n(26),h="/api/",b=n.n(f).a.create({withCredentials:!0}),d=function(t,e){return x(t,"GET",e)},O=function(t,e){return x(t,"POST",e)},v=function(t,e){return x(t,"PUT",e)},m=function(t,e){return x(t,"DELETE",e)};function x(t){return g.apply(this,arguments)}function g(){return g=Object(j.a)(p.a.mark((function t(e){var n,c,r,a=arguments;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"GET",c=a.length>2&&void 0!==a[2]?a[2]:null,t.prev=2,t.next=5,b({url:"".concat(h).concat(e),method:n,data:c,params:"GET"===n?c:null});case 5:return r=t.sent,t.abrupt("return",r.data);case 9:throw t.prev=9,t.t0=t.catch(2),console.log("Had Issues ".concat(n,"ing to the backend, endpoint: ").concat(e,", with data: ").concat(c)),console.dir(t.t0),t.t0.response&&t.t0.response.status,t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,9]])}))),g.apply(this,arguments)}var y={getUsers:function(){return d("user")},getById:function(t){return d("user/".concat(t))},remove:function(t){return m("user/".concat(t))},update:function(t){return w.apply(this,arguments)},login:function(t){return C.apply(this,arguments)},signup:function(t){return S.apply(this,arguments)},logout:function(){return k.apply(this,arguments)},getLoggedInUser:T};function w(){return(w=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v("user/".concat(e._id),e);case 2:e=t.sent,T()._id===e._id&&E(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(){return(C=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O("auth/login",e);case 2:if(!(n=t.sent)){t.next=5;break}return t.abrupt("return",E(n));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(){return(S=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O("auth/signup",e);case 2:return n=t.sent,t.abrupt("return",E(n));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(){return(k=Object(j.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return sessionStorage.clear(),t.next=3,O("auth/logout");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(){return JSON.parse(sessionStorage.getItem("loggedInUser")||"null")}function E(t){return sessionStorage.setItem("loggedInUser",JSON.stringify(t)),t}window.userService=y;var N=function(){return function(){var t=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.getLoggedInUser();case 2:n=t.sent,e({type:"SET_USER",user:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=n(0),L=function(){var t=Object(o.c)((function(t){return t.userReducer.user})),e=Object(i.f)(),n=Object(o.b)();return Object(_.jsxs)("div",{className:"header-layout app-header",children:[Object(_.jsx)("div",{onClick:function(){return e.push("/")},className:"app-logo",children:Object(_.jsx)("h1",{children:"Mister Bitcoin"})}),Object(_.jsxs)("ul",{children:[Object(_.jsx)("li",{children:Object(_.jsx)(u.c,{exact:!0,to:"/",activeClassName:"active-nav",children:"Home"})}),Object(_.jsx)("li",{children:Object(_.jsx)(u.c,{to:"/contact",activeClassName:"active-nav",children:"Contacts"})}),Object(_.jsx)("li",{children:Object(_.jsx)(u.c,{to:"/statistic",activeClassName:"active-nav",children:"Statistics"})}),Object(_.jsx)("li",{children:t?Object(_.jsx)(u.c,{to:"/",activeClassName:"active-nav",onClick:function(){n(function(){var t=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.logout();case 2:e({type:"LOGOUT"});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},children:"Logout"}):Object(_.jsx)(u.c,{to:"/signup",activeClassName:"active-nav",children:"SignUp"})})]})]})},D=n(8),U=(n(71),function(t){var e=t.move;return Object(_.jsxs)("li",{className:"move-preview",children:[Object(_.jsxs)("p",{children:["At: ",new Date(e.at).toLocaleDateString()]}),Object(_.jsxs)("p",{children:[" Amount: ",e.amount," "]})]})}),P=(n(72),function(t){var e=t.moves;return Object(_.jsx)("section",{className:"move-list",children:Object(_.jsx)("ul",{children:e.map((function(t,e){return Object(_.jsx)(U,{move:t},e)}))})})}),A=(n(73),function(t){var e=t.contact,n=t.onTransferCoins,r=(t.match,Object(c.useState)(0)),a=Object(D.a)(r,2),s=a[0],o=a[1],u=Object(i.f)();return Object(_.jsxs)("section",{className:"transfer-fund",children:[Object(_.jsxs)("h3",{children:["Transfer coins to ",e.name,":"]}),Object(_.jsxs)("form",{onSubmit:function(t){n(s,t),u.push("/contact")},children:[Object(_.jsx)("label",{htmlFor:"amount",children:"Amount:"}),Object(_.jsx)("input",{required:!0,type:"number",id:"amount",onChange:function(t){var e=t.target,n="number"===e.type?+e.value:e.value;o(n)}}),Object(_.jsx)("button",{children:"Transfer"})]})]})}),R={getContacts:function(){return B.apply(this,arguments)},getContactById:function(t){return q.apply(this,arguments)},deleteContact:function(t){return G.apply(this,arguments)},saveContact:function(t){return J.apply(this,arguments)},getEmptyContact:function(){return{name:"",email:"",phone:""}},addContact:function(t){return M.apply(this,arguments)}},F="contact/";function I(t){return t.sort((function(t,e){return t.name.toLocaleLowerCase()<e.name.toLocaleLowerCase()?-1:t.name.toLocaleLowerCase()>e.name.toLocaleLowerCase()?1:0}))}function B(){return B=Object(j.a)(p.a.mark((function t(){var e,n,c,r=arguments;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:null,t.prev=1,t.next=4,d(F);case 4:if(c=t.sent,!e){t.next=8;break}return n=H(e,c),t.abrupt("return",I(n));case 8:return t.abrupt("return",I(c));case 11:t.prev=11,t.t0=t.catch(1),console.log("cant get contacts",t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])}))),B.apply(this,arguments)}function q(){return(q=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d(F+e);case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log("Contact id ".concat(e," not found!"),t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function M(){return(M=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O(F,{username:e});case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log("Contact username ".concat(e," not found!"),t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function G(){return(G=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m(F+e,e);case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log("cant delete contact ".concat(e),t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function J(){return(J=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e._id){t.next=7;break}return t.next=4,v(F+e._id,e);case 4:n=t.sent,t.next=10;break;case 7:return t.next=9,O(F,e);case 9:n=t.sent;case 10:return t.abrupt("return",n);case 13:t.prev=13,t.t0=t.catch(0),console.log("cant save contact ".concat(e),t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function H(t,e){return t=t.toLocaleLowerCase(),e.filter((function(e){return e.name.toLocaleLowerCase().includes(t)||e.phone.toLocaleLowerCase().includes(t)||e.email.toLocaleLowerCase().includes(t)}))}n(74);var V=function(t){var e=Object(o.c)((function(t){return t.userReducer.user})),n=Object(o.c)((function(t){return t.contactReducer.currContact})),r=Object(c.useState)([]),a=Object(D.a)(r,2),s=a[0],u=a[1],i=Object(o.b)();Object(c.useEffect)((function(){var n,c,r=null===e||void 0===e||null===(n=e.moves)||void 0===n?void 0:n.filter((function(e){return e.toId===t.match.params.id}));i(e?(c=t.match.params.id,e._id,function(){var t=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.getContactById(c);case 2:n=t.sent,e({type:"SET_CONTACT",contact:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()):N()),r&&u(r)}),[t.match.params.id]);return n?Object(_.jsxs)("div",{className:"contact-details-page",children:[Object(_.jsx)("h1",{children:"Contact Details Page:"}),Object(_.jsx)("img",{src:"https://robohash.org/".concat(n._id),alt:""}),Object(_.jsx)("p",{children:n._id}),Object(_.jsx)("p",{children:n.contactName}),Object(_.jsx)("p",{children:n.contactEmail}),Object(_.jsx)("p",{children:n.contactPhone}),Object(_.jsx)(A,{contact:n,onTransferCoins:function(t,c){if(c.preventDefault(),e.coins<t)return alert("No enough money");i(function(t,e){return function(){var n=Object(j.a)(p.a.mark((function n(c){var r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.addMove(t,e);case 2:r=n.sent,c({type:"SET_USER",updatedUser:r});case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}(n,t))}}),s&&Object(_.jsx)(P,{moves:s}),Object(_.jsx)("button",{onClick:function(){t.history.push("/contact")},children:"Back"}),Object(_.jsx)("button",{onClick:function(){t.history.push("/contact/edit/".concat(n._id))},children:"Edit"})]}):Object(_.jsx)("div",{children:"Contact not found..."})},X=n(16),Y=n(7),$=(n(75),function(t){var e=Object(o.c)((function(t){return t.userReducer.user})),n=Object(c.useState)(null),r=Object(D.a)(n,2),a=r[0],s=r[1],u=Object(o.b)();Object(c.useEffect)((function(){if(e){var n=t.match.params.id,c=function(){var t=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=6;break}return t.next=3,R.getContactById(e);case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0=R.getEmptyContact();case 7:n=t.t0,s(n);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();c(n)}else u(N())}),[]);var i=function(t){var e=t.target,n=e.name,c="number"===e.type?+e.value:e.value;s(Object(Y.a)(Object(Y.a)({},a),{},Object(X.a)({},n,c)))},l=function(){var e=Object(j.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.deleteContact(a._id);case 2:t.history.push("/contact");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a?Object(_.jsxs)("div",{className:"contact-edit",children:[Object(_.jsx)("button",{onClick:function(){t.history.push("/contact/".concat(a._id))},children:"Back"}),a._id&&Object(_.jsx)("button",{onClick:l,children:"Delete"}),Object(_.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u(function(t){return function(){var e=Object(j.a)(p.a.mark((function e(n){var c,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=!t._id,e.next=3,R.saveContact(t);case 3:r=e.sent,n(c?{type:"ADD_CONTACT",contact:r}:{type:"UPDATE_CONTACT",contact:r});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(a)),t.history.push("/contact")},children:[Object(_.jsx)("label",{htmlFor:"contactName",children:"Name"}),Object(_.jsx)("input",{required:!0,type:"text",id:"contactName",value:a.contactName,onChange:i,name:"contactName"}),Object(_.jsx)("label",{htmlFor:"contactEmail",children:"Email Address"}),Object(_.jsx)("input",{required:!0,type:"text",id:"contactEmail",value:a.contactEmail,onChange:i,name:"contactEmail"}),Object(_.jsx)("label",{htmlFor:"contactPhone",children:"Phone Number"}),Object(_.jsx)("input",{required:!0,type:"text",id:"contactPhone",value:a.contactPhone,onChange:i,name:"contactPhone"}),Object(_.jsx)("button",{children:"Save Robot"})]})]}):Object(_.jsx)("h1",{children:"Contact not found"})}),z=(n(76),function(t){return Object(_.jsxs)("form",{className:"contact-filter",onSubmit:function(t){return t.preventDefault()},children:[Object(_.jsx)("label",{htmlFor:"term",children:"Search contact"}),Object(_.jsx)("input",{type:"text",id:"term",name:"term",onChange:function(e){var n=e.target;t.onChangeFilter(n.value)},placeholder:"Search..."})]})}),K=(n(77),function(t){var e=t.contact;return Object(_.jsx)(u.b,{to:"/contact/".concat(e._id),children:Object(_.jsxs)("div",{className:"contact-preview",children:[Object(_.jsx)("img",{src:"https://robohash.org/".concat(e._id),alt:""}),Object(_.jsxs)("p",{children:["Name: ",e.contactName]}),Object(_.jsxs)("p",{children:["Email: ",e.contactEmail]}),Object(_.jsxs)("p",{children:["Phone Number: ",e.contactPhone]})]})})}),Q=(n(78),function(t){var e=t.contacts;return Object(_.jsx)("ul",{className:"contact-list",children:e.map((function(t){return Object(_.jsx)("li",{children:Object(_.jsx)(K,{contact:t})},t._id)}))})}),W=(n(79),function(t){t.history;var e=Object(c.useState)(null),n=Object(D.a)(e,2),r=n[0],a=n[1],s=Object(c.useState)(null),u=Object(D.a)(s,2),i=u[0],l=u[1],f=Object(o.c)((function(t){return t.userReducer.user})),h=Object(o.c)((function(t){return t.contactReducer.contacts})),b=Object(o.c)((function(t){return t.contactReducer.currContact}));console.log({contact:b});var d=Object(o.b)();return Object(c.useEffect)((function(){}),[i]),Object(c.useEffect)((function(){d(f?function(t){return function(){var e=Object(j.a)(p.a.mark((function e(n){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.getContacts(t);case 2:c=e.sent,n({type:"SET_CONTACTS",contacts:c});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(r):N())}),[r]),f&&Object(_.jsxs)("div",{className:"contact-page",children:[Object(_.jsxs)("form",{onSubmit:function(t){var e;t.preventDefault(),d((e=i,function(){var t=Object(j.a)(p.a.mark((function t(n){var c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.addContact(e);case 2:c=t.sent,n({type:"SET_CONTACT",contact:c});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))},children:[Object(_.jsx)("label",{htmlFor:"contactName",children:"Search contact"}),Object(_.jsx)("input",{type:"text",id:"contactName",onChange:function(t){var e=t.target;l(e.value)},name:"contactName"}),Object(_.jsx)("button",{children:"Add contact"})]}),Object(_.jsx)(z,{onChangeFilter:function(t){a(t)}}),h.length?Object(_.jsx)(Q,{contacts:h}):Object(_.jsx)("h1",{children:"No contacts to show"})]})}),Z=n(26),tt={getRate:function(){return et.apply(this,arguments)},getMarketPrice:function(){return nt.apply(this,arguments)},getConfirmedTransactions:function(){return ct.apply(this,arguments)}};function et(){return(et=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Z.get("https://blockchain.info/tobtc?currency=USD&value=1");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function nt(){return(nt=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Z.get("https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function ct(){return(ct=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Z.get("https://blockchain.info/tobtc?currency=USD&value=1");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}var rt=n.p+"static/media/home.928af089.jpg",at=(n(80),function(){var t=Object(c.useState)(0),e=Object(D.a)(t,2),n=e[0],r=e[1],a=Object(o.c)((function(t){return t.userReducer.user})),s=Object(o.b)();return Object(c.useEffect)((function(){var t=function(){var t=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,tt.getRate();case 2:e=t.sent,r(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t(),a||s(N())}),[]),a?Object(_.jsxs)("div",{className:"home-page",children:[Object(_.jsxs)("h1",{children:["Hello ",a.fullname]}),Object(_.jsxs)("h3",{children:["You have ",a.coins," coins"]}),Object(_.jsxs)("h3",{children:["Bitcoin rate ",n," per 1$"]}),a.moves&&Object(_.jsx)(P,{moves:a.moves})]}):Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:rt,alt:""})})}),st=(n(81),function(t){var e=Object(c.useState)(null),n=Object(D.a)(e,2),r=n[0],a=n[1],s=Object(o.b)(),u=function(t){var e=t.target,n=e.name,c="number"===e.value?+e.value:e.value;a(Object(Y.a)(Object(Y.a)({},r),{},Object(X.a)({},n,c)))};return Object(_.jsxs)("div",{className:"signup-page",children:[Object(_.jsx)("h1",{children:"Please enter your name"}),Object(_.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(function(t){return function(){var e=Object(j.a)(p.a.mark((function e(n){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.signup(t);case 2:c=e.sent,n({type:"SET_USER",user:c});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(r)),t.history.push("/")},children:[Object(_.jsx)("label",{htmlFor:"fullname",children:"Full name"}),Object(_.jsx)("input",{required:!0,type:"text",id:"fullname",onChange:u,name:"fullname"}),Object(_.jsx)("label",{htmlFor:"username",children:"User name"}),Object(_.jsx)("input",{required:!0,type:"text",id:"username",onChange:u,name:"username"}),Object(_.jsx)("label",{htmlFor:"password",children:"Password"}),Object(_.jsx)("input",{required:!0,type:"password",id:"password",onChange:u,name:"password"}),Object(_.jsx)("button",{children:"Sign up"}),Object(_.jsx)("hr",{})]}),Object(_.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(function(t){return function(){var e=Object(j.a)(p.a.mark((function e(n){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.login(t);case 2:c=e.sent,n({type:"SET_USER",user:c});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(r)),t.history.push("/")},children:[Object(_.jsx)("label",{htmlFor:"username",children:"User name"}),Object(_.jsx)("input",{required:!0,type:"text",id:"username",onChange:u,name:"username"}),Object(_.jsx)("label",{htmlFor:"password",children:"Password"}),Object(_.jsx)("input",{required:!0,type:"password",id:"password",onChange:u,name:"password"}),Object(_.jsx)("button",{children:"Login"})]})]})}),ot=n(28),ut=(n(82),function(t){t.title;var e=t.data,n=t.description;return Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{children:n}),Object(_.jsx)(ot.Sparklines,{data:e,children:Object(_.jsx)(ot.SparklinesLine,{color:"red"})})]})}),it=(n(83),function(){var t=Object(c.useState)(null),e=Object(D.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(null),s=Object(D.a)(a,2),o=s[0],u=s[1];return Object(c.useEffect)((function(){var t=function(){var t=Object(j.a)(p.a.mark((function t(){var e,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,tt.getMarketPrice();case 3:e=t.sent,r(e),n=e.values.map((function(t){return t.y})),u(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),n&&o&&Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{children:"Statistic page:"}),Object(_.jsx)(ut,{title:n.name,description:n.description,data:o,color:"red"})]})}),lt=(n(84),function(){return Object(_.jsx)(u.a,{children:Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)(L,{}),Object(_.jsxs)(i.c,{children:[Object(_.jsx)(i.a,{component:$,path:"/contact/edit/:id?"}),Object(_.jsx)(i.a,{component:V,path:"/contact/:id"}),Object(_.jsx)(i.a,{component:W,path:"/contact"}),Object(_.jsx)(i.a,{component:it,path:"/statistic"}),Object(_.jsx)(i.a,{component:st,path:"/signup"}),Object(_.jsx)(i.a,{component:at,path:"/"})]})]})})}),pt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),a(t),s(t)}))},jt=n(19),ft=n(39),ht={contacts:[],currContact:null},bt={user:null},dt=n(38),Ot=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||jt.c,vt=Object(jt.b)({contactReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_CONTACTS":return Object(Y.a)(Object(Y.a)({},t),{},{contacts:e.contacts});case"SET_CONTACT":return Object(Y.a)(Object(Y.a)({},t),{},{currContact:e.contact});case"ADD_CONTACT":return Object(Y.a)(Object(Y.a)({},t),{},{contacts:[].concat(Object(ft.a)(t.contacts),[e.contact])});case"REMOVE_CONTACT":return Object(Y.a)(Object(Y.a)({},t),{},{contacts:t.contacts.filter((function(t){return t._id!==e.contactId}))});case"UPDATE_CONTACT":var n=Object.assign({},e);return Object(Y.a)(Object(Y.a)({},t),{},{contacts:t.contacts.map((function(t){return t._id===n._id?n:t}))});default:return t}},userReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,e=arguments.length>1?arguments[1]:void 0;switch(console.log(e),e.type){case"SET_USER":return Object(Y.a)(Object(Y.a)({},t),{},{user:e.user});case"LOGOUT":return Object(Y.a)(Object(Y.a)({},t),{},{user:null});default:return t}}}),mt=Object(jt.d)(vt,Ot(Object(jt.a)(dt.a)));n(85);s.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(o.a,{store:mt,children:Object(_.jsx)(lt,{})})}),document.getElementById("root")),pt()}},[[86,1,2]]]);
//# sourceMappingURL=main.e77c73f2.chunk.js.map