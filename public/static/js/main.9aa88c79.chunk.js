(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{47:function(t,e,n){},71:function(t,e,n){},72:function(t,e,n){},73:function(t,e,n){},74:function(t,e,n){},75:function(t,e,n){},76:function(t,e,n){},77:function(t,e,n){},78:function(t,e,n){},79:function(t,e,n){},80:function(t,e,n){},81:function(t,e,n){},82:function(t,e,n){},83:function(t,e,n){},84:function(t,e,n){},85:function(t,e,n){},86:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(20),o=n.n(r),i=n(7),s=n(14),u=n(5),l=(n(47),n(2)),d=n.n(l),j=n(3),h=n(26),f="/api/",p=n.n(h).a.create({withCredentials:!0}),b=function(t,e){return x(t,"GET",e)},m=function(t,e){return x(t,"POST",e)},O=function(t,e){return x(t,"PUT",e)},v=function(t,e){return x(t,"DELETE",e)};function x(t){return g.apply(this,arguments)}function g(){return g=Object(j.a)(d.a.mark((function t(e){var n,c,a,r=arguments;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:"GET",c=r.length>2&&void 0!==r[2]?r[2]:null,t.prev=2,t.next=5,p({url:"".concat(f).concat(e),method:n,data:c,params:"GET"===n?c:null});case 5:return a=t.sent,t.abrupt("return",a.data);case 9:throw t.prev=9,t.t0=t.catch(2),console.log("Had Issues ".concat(n,"ing to the backend, endpoint: ").concat(e,", with data: ").concat(c)),console.dir(t.t0),t.t0.response&&t.t0.response.status,t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,9]])}))),g.apply(this,arguments)}var y={getUsers:function(){return b("user")},getById:function(t){return b("user/".concat(t))},remove:function(t){return v("user/".concat(t))},update:function(t){return C.apply(this,arguments)},login:function(t){return w.apply(this,arguments)},signup:function(t){return N.apply(this,arguments)},logout:function(){return E.apply(this,arguments)},getLoggedInUser:_};function C(){return(C=Object(j.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O("user/".concat(e._id),e);case 2:e=t.sent,_()._id===e._id&&S(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(){return(w=Object(j.a)(d.a.mark((function t(e){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m("auth/login",e);case 2:if(!(n=t.sent)){t.next=5;break}return t.abrupt("return",S(n));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(){return(N=Object(j.a)(d.a.mark((function t(e){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m("auth/signup",e);case 2:return n=t.sent,t.abrupt("return",S(n));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(){return(E=Object(j.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return sessionStorage.clear(),t.next=3,m("auth/logout");case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(){return JSON.parse(sessionStorage.getItem("loggedInUser")||"null")}function S(t){return sessionStorage.setItem("loggedInUser",JSON.stringify(t)),t}window.userService=y;var k=function(){return function(){var t=Object(j.a)(d.a.mark((function t(e){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.getLoggedInUser();case 2:n=t.sent,e({type:"SET_USER",user:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=n(0),T=function(){var t=Object(i.c)((function(t){return t.userReducer.user})),e=Object(u.f)(),n=Object(i.b)();return Object(P.jsxs)("div",{className:"header-layout app-header",children:[Object(P.jsx)("div",{onClick:function(){return e.push("/")},className:"app-logo",children:Object(P.jsx)("h1",{children:"Mister Bitcoin"})}),Object(P.jsxs)("ul",{children:[Object(P.jsx)("li",{children:Object(P.jsx)(s.c,{exact:!0,to:"/",activeClassName:"active-nav",children:"Home"})}),Object(P.jsx)("li",{children:Object(P.jsx)(s.c,{to:"/contact",activeClassName:"active-nav",children:"Contacts"})}),Object(P.jsx)("li",{children:Object(P.jsx)(s.c,{to:"/statistic",activeClassName:"active-nav",children:"Statistics"})}),Object(P.jsx)("li",{children:t?Object(P.jsx)(s.c,{to:"/",activeClassName:"active-nav",onClick:function(){n(function(){var t=Object(j.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.logout();case 2:e({type:"LOGOUT"});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},children:"Logout"}):Object(P.jsx)(s.c,{to:"/signup",activeClassName:"active-nav",children:"SignUp"})})]})]})},R=n(8),D=(n(71),function(t){var e=t.move;return Object(P.jsxs)("li",{className:"move-preview",children:[Object(P.jsxs)("p",{children:["At: ",new Date(e.at).toLocaleDateString()]}),Object(P.jsxs)("p",{children:[" Amount: ",e.amount," "]})]})}),U=(n(72),function(t){var e=t.moves;return Object(P.jsx)("section",{className:"move-list",children:Object(P.jsx)("ul",{children:e.map((function(t,e){return Object(P.jsx)(D,{move:t},e)}))})})}),A=(n(73),function(t){var e=t.contact,n=t.onTransferCoins,a=(t.match,Object(c.useState)(0)),r=Object(R.a)(a,2),o=r[0],i=r[1],s=Object(u.f)();return Object(P.jsxs)("section",{className:"transfer-fund",children:[Object(P.jsxs)("h3",{children:["Transfer coins to ",e.name,":"]}),Object(P.jsxs)("form",{onSubmit:function(t){n(o,t),s.push("/contact")},children:[Object(P.jsx)("label",{htmlFor:"amount",children:"Amount:"}),Object(P.jsx)("input",{required:!0,type:"number",id:"amount",onChange:function(t){var e=t.target,n="number"===e.type?+e.value:e.value;i(n)}}),Object(P.jsx)("button",{children:"Transfer"})]})]})});var z={getContacts:function(){return F.apply(this,arguments)},getContactById:function(t,e){return L.apply(this,arguments)},deleteContact:function(t){return new Promise((function(e,n){var c=I.findIndex((function(e){return e._id===t}));-1!==c&&I.splice(c,1),e(I)}))},saveContact:function(t){return t._id?function(t){return new Promise((function(e,n){var c=I.findIndex((function(e){return t._id===e._id}));-1!==c&&(I[c]=t),e(t)}))}(t):function(t){return new Promise((function(e,n){t._id=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=0;c<t;c++)e+=n.charAt(Math.floor(Math.random()*n.length));return e}(),I.push(t),e(t)}))}(t)},getEmptyContact:function(){return{contactName:"",contactEmail:"",contactPhone:""}}},I=[{_id:"5a56640269f443a5d64b32ca",contactName:"Ochoa Hyde",contactEmail:"ochoahyde@renovize.com",contactPhone:"+1 (968) 593-3824"},{_id:"5a5664025f6ae9aa24a99fde",contactName:"Hallie Mclean",contactEmail:"halliemclean@renovize.com",contactPhone:"+1 (948) 464-2888"},{_id:"5a56640252d6acddd183d319",contactName:"Parsons Norris",contactEmail:"parsonsnorris@renovize.com",contactPhone:"+1 (958) 502-3495"},{_id:"5a566402ed1cf349f0b47b4d",contactName:"Rachel Lowe",contactEmail:"rachellowe@renovize.com",contactPhone:"+1 (911) 475-2312"},{_id:"5a566402abce24c6bfe4699d",contactName:"Dominique Soto",contactEmail:"dominiquesoto@renovize.com",contactPhone:"+1 (807) 551-3258"},{_id:"5a566402a6499c1d4da9220a",contactName:"Shana Pope",contactEmail:"shanapope@renovize.com",contactPhone:"+1 (970) 527-3082"},{_id:"5a566402f90ae30e97f990db",contactName:"Faulkner Flores",contactEmail:"faulknerflores@renovize.com",contactPhone:"+1 (952) 501-2678"},{_id:"5a5664027bae84ef280ffbdf",contactName:"Holder Bean",contactEmail:"holderbean@renovize.com",contactPhone:"+1 (989) 503-2663"},{_id:"5a566402e3b846c5f6aec652",contactName:"Rosanne Shelton",contactEmail:"rosanneshelton@renovize.com",contactPhone:"+1 (968) 454-3851"},{_id:"5a56640272c7dcdf59c3d411",contactName:"Pamela Nolan",contactEmail:"pamelanolan@renovize.com",contactPhone:"+1 (986) 545-2166"},{_id:"5a5664029a8dd82a6178b15f",contactName:"Roy Cantu",contactEmail:"roycantu@renovize.com",contactPhone:"+1 (929) 571-2295"},{_id:"5a5664028c096d08eeb13a8a",contactName:"Ollie Christian",contactEmail:"olliechristian@renovize.com",contactPhone:"+1 (977) 419-3550"},{_id:"5a5664026c53582bb9ebe9d1",contactName:"Nguyen Walls",contactEmail:"nguyenwalls@renovize.com",contactPhone:"+1 (963) 471-3181"},{_id:"5a56640298ab77236845b82b",contactName:"Glenna Santana",contactEmail:"glennasantana@renovize.com",contactPhone:"+1 (860) 467-2376"},{_id:"5a56640208fba3e8ecb97305",contactName:"Malone Clark",contactEmail:"maloneclark@renovize.com",contactPhone:"+1 (818) 565-2557"},{_id:"5a566402abb3146207bc4ec5",contactName:"Floyd Rutledge",contactEmail:"floydrutledge@renovize.com",contactPhone:"+1 (807) 597-3629"},{_id:"5a56640298500fead8cb1ee5",contactName:"Grace James",contactEmail:"gracejames@renovize.com",contactPhone:"+1 (959) 525-2529"},{_id:"5a56640243427b8f8445231e",contactName:"Tanner Gates",contactEmail:"tannergates@renovize.com",contactPhone:"+1 (978) 591-2291"},{_id:"5a5664025c3abdad6f5e098c",contactName:"Lilly Conner",contactEmail:"lillyconner@renovize.com",contactPhone:"+1 (842) 587-3812"}];function F(){return F=Object(j.a)(d.a.mark((function t(){var e,n=arguments;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.length>0&&void 0!==n[0]?n[0]:null,e=n.length>1?n[1]:void 0,t.next=4,m("contact/",{loggedUserId:e});case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)}))),F.apply(this,arguments)}function L(){return(L=Object(j.a)(d.a.mark((function t(e,n){var c,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b("user/".concat(n));case 2:return c=t.sent,a=c.contacts.find((function(t){return t._id===e})),t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}n(74);var B=function(t){var e=Object(i.c)((function(t){return t.userReducer.user})),n=Object(i.c)((function(t){return t.contactReducer.currContact})),a=Object(c.useState)([]),r=Object(R.a)(a,2),o=r[0],s=r[1],u=Object(i.b)();Object(c.useEffect)((function(){var n,c,a,r=null===e||void 0===e||null===(n=e.moves)||void 0===n?void 0:n.filter((function(e){return e.toId===t.match.params.id}));u(k()),e&&u((c=t.match.params.id,a=e._id,function(){var t=Object(j.a)(d.a.mark((function t(e){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z.getContactById(c,a);case 2:n=t.sent,e({type:"SET_CONTACT",contact:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())),r&&s(r)}),[t.match.params.id]);return n?Object(P.jsxs)("div",{className:"contact-details-page",children:[Object(P.jsx)("h1",{children:"Contact Details Page:"}),Object(P.jsx)("img",{src:"https://robohash.org/".concat(n._id),alt:""}),Object(P.jsx)("p",{children:n._id}),Object(P.jsx)("p",{children:n.contactName}),Object(P.jsx)("p",{children:n.contactEmail}),Object(P.jsx)("p",{children:n.contactPhone}),Object(P.jsx)(A,{contact:n,onTransferCoins:function(t,c){if(c.preventDefault(),e.coins<t)return alert("No enough money");u(function(t,e){return function(){var n=Object(j.a)(d.a.mark((function n(c){var a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.addMove(t,e);case 2:a=n.sent,c({type:"SET_USER",updatedUser:a});case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}(n,t))}}),o&&Object(P.jsx)(U,{moves:o}),Object(P.jsx)("button",{onClick:function(){t.history.push("/contact")},children:"Back"}),Object(P.jsx)("button",{onClick:function(){t.history.push("/contact/edit/".concat(n._id))},children:"Edit"})]}):Object(P.jsx)("div",{children:"Contact not found..."})},M=n(16),q=n(6),G=(n(75),function(t){var e=Object(i.c)((function(t){return t.userReducer.user})),n=Object(c.useState)(null),a=Object(R.a)(n,2),r=a[0],o=a[1],s=Object(i.b)();Object(c.useEffect)((function(){if(e){var n=t.match.params.id,c=function(){var t=Object(j.a)(d.a.mark((function t(n){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=6;break}return t.next=3,z.getContactById(n,e._id);case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0=z.getEmptyContact();case 7:c=t.t0,o(c);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();c(n)}else s(k())}),[]);var u=function(t){var e=t.target,n=e.name,c="number"===e.type?+e.value:e.value;o(Object(q.a)(Object(q.a)({},r),{},Object(M.a)({},n,c)))},l=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.deleteContact(r._id);case 2:t.history.push("/contact");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r?Object(P.jsxs)("div",{className:"contact-edit",children:[Object(P.jsx)("button",{onClick:function(){t.history.push("/contact/".concat(r._id))},children:"Back"}),r._id&&Object(P.jsx)("button",{onClick:l,children:"Delete"}),Object(P.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(function(t){return function(){var e=Object(j.a)(d.a.mark((function e(n){var c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=!t._id,e.next=3,z.saveContact(t);case 3:a=e.sent,n(c?{type:"ADD_CONTACT",contact:a}:{type:"UPDATE_CONTACT",contact:a});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(r)),t.history.push("/contact")},children:[Object(P.jsx)("label",{htmlFor:"contactName",children:"Name"}),Object(P.jsx)("input",{required:!0,type:"text",id:"contactName",value:r.contactName,onChange:u,name:"contactName"}),Object(P.jsx)("label",{htmlFor:"contactEmail",children:"Email Address"}),Object(P.jsx)("input",{required:!0,type:"text",id:"contactEmail",value:r.contactEmail,onChange:u,name:"contactEmail"}),Object(P.jsx)("label",{htmlFor:"contactPhone",children:"Phone Number"}),Object(P.jsx)("input",{required:!0,type:"text",id:"contactPhone",value:r.contactPhone,onChange:u,name:"contactPhone"}),Object(P.jsx)("button",{children:"Save Robot"})]})]}):Object(P.jsx)("h1",{children:"Contact not found"})}),H=(n(76),function(t){return Object(P.jsxs)("form",{className:"contact-filter",onSubmit:function(t){return t.preventDefault()},children:[Object(P.jsx)("label",{htmlFor:"term",children:"Search contact"}),Object(P.jsx)("input",{type:"text",id:"term",name:"term",onChange:function(e){var n=e.target;t.onChangeFilter(n.value)},placeholder:"Search..."})]})}),J=(n(77),function(t){var e=t.contact;return Object(P.jsx)(s.b,{to:"/contact/".concat(e._id),children:Object(P.jsxs)("div",{className:"contact-preview",children:[Object(P.jsx)("img",{src:"https://robohash.org/".concat(e._id),alt:""}),Object(P.jsxs)("p",{children:["Name: ",e.contactName]}),Object(P.jsxs)("p",{children:["Email: ",e.contactEmail]}),Object(P.jsxs)("p",{children:["Phone Number: ",e.contactPhone]})]})})}),V=(n(78),function(t){var e=t.contacts;return Object(P.jsx)("ul",{className:"contact-list",children:e.map((function(t){return Object(P.jsx)("li",{children:Object(P.jsx)(J,{contact:t})},t._id)}))})}),X=(n(79),function(t){var e=t.history,n=Object(c.useState)(null),a=Object(R.a)(n,2),r=a[0],o=a[1],s=Object(i.c)((function(t){return t.userReducer.user})),u=Object(i.c)((function(t){return t.contactReducer.contacts})),l=Object(i.b)();return Object(c.useEffect)((function(){s&&(l(k()),l(function(t,e){return function(){var n=Object(j.a)(d.a.mark((function n(c){var a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,z.getContacts(t,e);case 2:a=n.sent,c({type:"SET_CONTACTS",contacts:a});case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}(r,s._id)))}),[r]),s&&Object(P.jsxs)("div",{className:"contact-page",children:[Object(P.jsx)("button",{onClick:function(){e.push("/contact/edit")},children:"Add Contact"}),Object(P.jsx)(H,{onChangeFilter:function(t){o(t)}}),u.length?Object(P.jsx)(V,{contacts:u}):Object(P.jsx)("h1",{children:"No contacts to show"})]})}),W=n(26),Y={getRate:function(){return K.apply(this,arguments)},getMarketPrice:function(){return Q.apply(this,arguments)},getConfirmedTransactions:function(){return Z.apply(this,arguments)}};function K(){return(K=Object(j.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,W.get("https://blockchain.info/tobtc?currency=USD&value=1");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function Q(){return(Q=Object(j.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,W.get("https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function Z(){return(Z=Object(j.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,W.get("https://blockchain.info/tobtc?currency=USD&value=1");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}var $=n.p+"static/media/home.928af089.jpg",tt=(n(80),function(){var t=Object(c.useState)(0),e=Object(R.a)(t,2),n=e[0],a=e[1],r=Object(i.c)((function(t){return t.userReducer.user})),o=Object(i.b)();return Object(c.useEffect)((function(){var t=function(){var t=Object(j.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y.getRate();case 2:e=t.sent,a(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t(),r||o(k())}),[]),r?Object(P.jsxs)("div",{className:"home-page",children:[Object(P.jsxs)("h1",{children:["Hello ",r.fullname]}),Object(P.jsxs)("h3",{children:["You have ",r.coins," coins"]}),Object(P.jsxs)("h3",{children:["Bitcoin rate ",n," per 1$"]}),r.moves&&Object(P.jsx)(U,{moves:r.moves})]}):Object(P.jsx)("div",{children:Object(P.jsx)("img",{src:$,alt:""})})}),et=(n(81),function(t){var e=Object(c.useState)(null),n=Object(R.a)(e,2),a=n[0],r=n[1],o=Object(i.b)(),s=function(t){var e=t.target,n=e.name,c="number"===e.value?+e.value:e.value;r(Object(q.a)(Object(q.a)({},a),{},Object(M.a)({},n,c)))};return Object(P.jsxs)("div",{className:"signup-page",children:[Object(P.jsx)("h1",{children:"Please enter your name"}),Object(P.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o(function(t){return function(){var e=Object(j.a)(d.a.mark((function e(n){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.signup(t);case 2:c=e.sent,n({type:"SET_USER",user:c});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(a)),t.history.push("/")},children:[Object(P.jsx)("label",{htmlFor:"fullname",children:"Full name"}),Object(P.jsx)("input",{required:!0,type:"text",id:"fullname",onChange:s,name:"fullname"}),Object(P.jsx)("label",{htmlFor:"username",children:"User name"}),Object(P.jsx)("input",{required:!0,type:"text",id:"username",onChange:s,name:"username"}),Object(P.jsx)("label",{htmlFor:"password",children:"Password"}),Object(P.jsx)("input",{required:!0,type:"password",id:"password",onChange:s,name:"password"}),Object(P.jsx)("button",{children:"sign up"})]})]})}),nt=n(28),ct=(n(82),function(t){t.title;var e=t.data,n=t.description;return Object(P.jsxs)("div",{children:[Object(P.jsx)("h1",{children:n}),Object(P.jsx)(nt.Sparklines,{data:e,children:Object(P.jsx)(nt.SparklinesLine,{color:"red"})})]})}),at=(n(83),function(){var t=Object(c.useState)(null),e=Object(R.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(null),o=Object(R.a)(r,2),i=o[0],s=o[1];return Object(c.useEffect)((function(){var t=function(){var t=Object(j.a)(d.a.mark((function t(){var e,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Y.getMarketPrice();case 3:e=t.sent,a(e),n=e.values.map((function(t){return t.y})),s(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),n&&i&&Object(P.jsxs)("div",{children:[Object(P.jsx)("h1",{children:"Statistic page:"}),Object(P.jsx)(ct,{title:n.name,description:n.description,data:i,color:"red"})]})}),rt=(n(84),function(){return Object(P.jsx)(s.a,{children:Object(P.jsxs)("div",{className:"App",children:[Object(P.jsx)(T,{}),Object(P.jsxs)(u.c,{children:[Object(P.jsx)(u.a,{component:G,path:"/contact/edit/:id?"}),Object(P.jsx)(u.a,{component:B,path:"/contact/:id"}),Object(P.jsx)(u.a,{component:X,path:"/contact"}),Object(P.jsx)(u.a,{component:at,path:"/statistic"}),Object(P.jsx)(u.a,{component:et,path:"/signup"}),Object(P.jsx)(u.a,{component:tt,path:"/"})]})]})})}),ot=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),r(t),o(t)}))},it=n(19),st=n(39),ut={contacts:[],currContact:null},lt={user:null},dt=n(38),jt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||it.c,ht=Object(it.b)({contactReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_CONTACTS":return Object(q.a)(Object(q.a)({},t),{},{contacts:e.contacts});case"SET_CONTACT":return Object(q.a)(Object(q.a)({},t),{},{currContact:e.contact});case"ADD_CONTACT":return Object(q.a)(Object(q.a)({},t),{},{contacts:[].concat(Object(st.a)(t.contacts),[e.contact])});case"REMOVE_CONTACT":return Object(q.a)(Object(q.a)({},t),{},{contacts:t.contacts.filter((function(t){return t._id!==e.contactId}))});case"UPDATE_CONTACT":var n=Object.assign({},e);return Object(q.a)(Object(q.a)({},t),{},{contacts:t.contacts.map((function(t){return t._id===n._id?n:t}))});default:return t}},userReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,e=arguments.length>1?arguments[1]:void 0;switch(console.log(e),e.type){case"SET_USER":return Object(q.a)(Object(q.a)({},t),{},{user:e.user});case"LOGOUT":return Object(q.a)(Object(q.a)({},t),{},{user:null});default:return t}}}),ft=Object(it.d)(ht,jt(Object(it.a)(dt.a)));n(85);o.a.render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsx)(i.a,{store:ft,children:Object(P.jsx)(rt,{})})}),document.getElementById("root")),ot()}},[[86,1,2]]]);
//# sourceMappingURL=main.9aa88c79.chunk.js.map