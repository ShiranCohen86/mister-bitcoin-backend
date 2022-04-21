(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{151:function(t,e,n){},152:function(t,e,n){},153:function(t,e,n){},154:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(30),s=n.n(a),o=n(17),i=n(66),u=n(15),l=n(4),j=n.n(l),p=n(10),b=n(47),h=n.n(b),d="/api/",f=h.a.create({withCredentials:!0}),O=function(t,e){return v(t,"GET",e)},m=function(t,e){return v(t,"POST",e)},x=function(t,e){return v(t,"PUT",e)},g=function(t,e){return v(t,"DELETE",e)};function v(t){return A.apply(this,arguments)}function A(){return A=Object(p.a)(j.a.mark((function t(e){var n,c,r,a=arguments;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"GET",c=a.length>2&&void 0!==a[2]?a[2]:null,t.prev=2,t.next=5,f({url:"".concat(d).concat(e),method:n,data:c,params:"GET"===n?c:null});case 5:return r=t.sent,t.abrupt("return",r.data);case 9:throw t.prev=9,t.t0=t.catch(2),console.log("Had Issues ".concat(n,"ing to the backend, endpoint: ").concat(e,", with data: ").concat(c)),console.dir(t.t0),t.t0.response&&t.t0.response.status,t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,9]])}))),A.apply(this,arguments)}var w={getUsers:function(){return O("user")},getById:function(t){return O("user/".concat(t))},remove:function(t){return g("user/".concat(t))},update:function(t){return y.apply(this,arguments)},login:function(t){return C.apply(this,arguments)},signup:function(t){return k.apply(this,arguments)},logout:function(){return S.apply(this,arguments)},getLoggedInUser:function(){return N.apply(this,arguments)}};function y(){return(y=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x("user/".concat(e._id),e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(){return(C=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m("auth/login",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(){return(k=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m("auth/signup",e);case 3:return t.abrupt("return",t.sent);case 6:throw t.prev=6,t.t0=t.catch(0),console.log("service",t.t0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function S(){return(S=Object(p.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m("auth/logout");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(){return(N=Object(p.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O("user/loggedInUser");case 3:return t.abrupt("return",t.sent);case 6:throw t.prev=6,t.t0=t.catch(0),t.t0;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}window.userService=w;var E={addTransaction:function(t,e){return T.apply(this,arguments)},getTransactions:function(){return F.apply(this,arguments)},getTransactionsByContactId:function(t){return U.apply(this,arguments)}};function T(){return(T=Object(p.a)(j.a.mark((function t(e,n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m("transaction/",{contactEmail:e,amount:n});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function F(){return(F=Object(p.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O("transaction/");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function U(){return(U=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",O("transaction/".concat(e)));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var P=function(){return function(){var t=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.getLoggedInUser();case 2:n=t.sent,e({type:"SET_USER",user:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},R=n(1);function B(t){var e=t.onClick,n=t.Icon,c=t.children,r=t.className;return Object(R.jsxs)("button",{className:r,onClick:e,children:[Object(R.jsx)(n,{}),c]})}var D=function(){var t=Object(o.c)((function(t){return t.userReducer.user})),e=Object(u.g)(),n=Object(o.b)();Object(c.useEffect)((function(){t||n(P)}),[t,n]);return t&&Object(R.jsxs)("div",{className:"app-footer",children:[Object(R.jsx)(B,{className:"go-back-btn",Icon:function(){return Object(R.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAVISURBVFiFzZhdbFRFFMf/M3O3u3u3e9ttSwptMRTWGuQzYHgg0YBJhQKlkNgY48cjJJIADzzIh7gGLJpgNDFo7JuJPChRKB+lYLDGmD4ZI90UoWwbYvqN3e977y57Z8YHuusCW1ra7sL/bc7eM/e3Z87MnHuAZ1xkpo47jrQvERyv2mxskwRWci6qCJEUAKQkgjE6RAm5nkqlrlhC/nLpk239eQds9nUWJ7mxixFlDwUqy8rLiKe0VHWqTtgddpCJ6SQkkmYSRsJEKBTWg+NBSMgRYclT5j3aevXkJn1OATf4OhUtZeylIL7SMg+tqa52lZS4n+D/SUTCUQwODcZDoYgAxNGwop761bfRmjXgzoOX6mBjF1xOdUHdC8+7nU7nNKFyyzQN3Lp1O6brxpAFq/Hi8cbbMwZsPNTewCj5fnFtrXP+gvkKmXHGPigpgaGhQevOnX9MKXhzW8u2K08MuOPwpXcoZV+vWLHcVewunhuyhxSLxeD39xgScve5Yw3fTRuw6fDlnYyy06tWr3Cq6uyWdCrphoHuv7oTkPKNn443nJ8ScOeRi0sl2B+rVi5Xi93uvMKlFY1G4fff0Anna86e2Nqb/RvNHmzwdSqSKOdqa2vthYIDAE3TsGjRcw4orK25+Qc2KaAnldhb7FKrq6rmMxRYVVVVTFWdC606955se2aJXztwxaXa+fCatavdTqdaaD4AgK4buH69O2KxVNUFX6MBZEXQ4bR2e8o89GnBAYDLpUIr0RhLsV1pWwZQIcq+6poa13QnW7fYPtd8AICFNTXFhNF96TEFgO2HLq+klJRp09wY670OvFLnyAugpmlghFU0HWx/MQNIidxcXlE+rZtivdeB9d78RA8ACAHKyz2MUrn5f0DKNmqaNmVI8g2XllaiOalStBHI5CBZqk6xOQoFBwCqqkJKsQwAFADgUlQ47EWTOqxbbM8Jd2BzyaxATnZEctrtdjukEPMygBDCwZTcZ3MhI5cWYwxCSgcwscSSSEDm3iEKzWkumCgAEEKSnOcubn/rTaArkCwoFOcclNAEMLHEjLKxRPLeomKbLadDVyABhT56OE+WQ7NVMpkEYWQMyEQQvYZpPNapkJE0DAMAuQlMAFrc6oiEI+ZUjl2BwkCGIxFDcKsDSG8SQa8Fg0E+Hed8Q0oJhMbDQnJcywCeb2noFlyMR6PRaU2ST8hYNAohxd22E1tuZAABgAvROjg0/PhEzFJXIJEPPgwMDRmSi9b0OANYZNlOjY+PTyTo05GuGwgGQzJhk1+lbRnAM5/WRyDJsb5AX+zp4AGBQF9MCnx02bclk2sP3BOVd+d9FteN0dGRMVFouOHhEaEb+nC0yPF5tv0BwNbWl1JSpLYH+voS8Xi8YHDRWAz9/XdMpHjjw/2aR27as8e3/c25fMvv74knEvnZCNkyzQR6/D26lOLNh7+JASBnCdP7++mbdS+/PTI6NlrvKfXYioomL8Vmo3g8jm6/3+CWeK+tZcuZXM88tshvOtL+OgH51uv1Oior581pXTM6MiYC/f0JCP7uuY+3/jjZc1N+hTR+0LFMgTzvdrsrvd4lrtm23wzDQF+gT4/G9WFpiab0gTxjQOB+S6SEm/uJJB96PKW0pqZa1TTticAi0RgGBgb0cCgsCXA0pDi+nJMGZraafZ3FKcvcTSnbzxRWUuYps5do7qJ0C1hh98s1i6eQNJMwTRORaOzeeDCY5BYPc2F9kUgq38x5CziXdrx/ca1krN5mY/VSSC8XokIIoQKQlFKTUvovpSSQsqyrQvCfL7Q0/jnTdz3T+g9dK0F6xOWAegAAAABJRU5ErkJggg==",alt:""})},onClick:function(){e.goBack()}}),Object(R.jsx)(B,{className:"contacts-btn",Icon:function(){return Object(R.jsx)("img",{src:"data:image/png;base64,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",alt:""})},onClick:function(){e.push("/contact")}})]})},L=n.p+"static/media/home.a1b9128a.png",I=n(7),V=n(220),H=n(212),M=n(208),Q=n(210),X=n(205),z=n(221),J=n(207),K=n(102),Y=n.n(K),q=n(103),Z=n.n(q),G=n(222),W=function(t){var e,n=t.loggedUser,r=t.logout,a=t.history,s=c.useState(null),o=Object(I.a)(s,2),i=o[0],u=o[1],l=Boolean(i),j=function(){u(null)},p=(null===n||void 0===n?void 0:n.coins)?"amount-plus":"amount-minus";return Object(R.jsxs)(c.Fragment,{children:[Object(R.jsxs)(V.a,{sx:{display:"flex",alignItems:"center",textAlign:"center"},children:[n&&Object(R.jsxs)("div",{className:"details-header",children:[Object(R.jsxs)(G.a,{children:["Balance:"," ",Object(R.jsx)("span",{className:p,children:null===(e=n.coins)||void 0===e?void 0:e.toFixed(2)})," ","\u20bf"]}),Object(R.jsx)(G.a,{children:n.email})]}),Object(R.jsx)(J.a,{title:"Profile",children:Object(R.jsx)(z.a,{onClick:function(t){u(t.currentTarget)},size:"small",sx:{ml:2},children:n?Object(R.jsx)(H.a,{alt:n.fullname,src:n.img}):Object(R.jsx)(H.a,{})})})]}),Object(R.jsxs)(M.a,{anchorEl:i,open:l,onClose:j,onClick:j,PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[n&&Object(R.jsxs)(Q.a,{onClick:function(){return a.push("/user")},children:[Object(R.jsx)(H.a,{}),"Profile"]}),n&&Object(R.jsxs)(Q.a,{onClick:r,children:[Object(R.jsx)(X.a,{children:Object(R.jsx)(Y.a,{fontSize:"small"})}),"Logout"]}),!n&&Object(R.jsxs)(Q.a,{onClick:function(){return a.push("/signup/login")},children:[Object(R.jsx)(X.a,{children:Object(R.jsx)(Z.a,{fontSize:"small"})}),"Login"]}),!n&&Object(R.jsx)(Q.a,{onClick:function(){return a.push("/signup")},children:"SignUp"})]})]})},_=function(){var t=Object(o.c)((function(t){return t.userReducer.user})),e=Object(u.g)(),n=Object(o.b)();return Object(R.jsxs)("header",{className:"app-header full",children:[Object(R.jsx)(B,{Icon:function(){return Object(R.jsx)("img",{src:L,alt:""})},onClick:function(){return e.push("/")},className:"home-logo"}),Object(R.jsx)(W,{loggedUser:t,logout:function(){n(function(){var t=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.logout();case 2:e({type:"LOGOUT"});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e.push("/")},history:e})]})},$=function(t){t.contact;var e=t.onTransactionCoins,n=Object(c.useState)(0),r=Object(I.a)(n,2),a=r[0],s=r[1],o=Object(u.g)();return Object(R.jsx)("section",{className:"transaction-fund",children:Object(R.jsxs)("form",{onSubmit:function(t){e(a,t),o.push("/contact")},children:[Object(R.jsx)("label",{htmlFor:"amount",children:"Transaction Coins"}),Object(R.jsx)("input",{required:!0,placeholder:"Amount",min:"0",id:"amount",type:"number",onChange:function(t){var e=t.target,n="number"===e.type?+e.value:e.value;s(n)},name:"amount",step:"0.01"}),Object(R.jsx)("button",{children:"Send"})]})})},tt={getContacts:function(){return ct.apply(this,arguments)},getContactById:function(t){return rt.apply(this,arguments)},deleteContact:function(t){return at.apply(this,arguments)},saveContact:function(t){return st.apply(this,arguments)},getEmptyContact:function(){return{contactName:"",contactEmail:"",contactPhone:""}}},et="contact/";function nt(t){return t.sort((function(t,e){return t.contactName.toLocaleLowerCase()<e.contactName.toLocaleLowerCase()?-1:t.contactName.toLocaleLowerCase()>e.contactName.toLocaleLowerCase()?1:0}))}function ct(){return ct=Object(p.a)(j.a.mark((function t(){var e,n,c,r=arguments;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:null,t.prev=1,t.next=4,O(et);case 4:if(c=t.sent,!e){t.next=8;break}return n=ot(e,c),t.abrupt("return",nt(n));case 8:return t.abrupt("return",nt(c));case 11:t.prev=11,t.t0=t.catch(1),console.log("cant get contacts",t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])}))),ct.apply(this,arguments)}function rt(){return(rt=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O(et+e);case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log("Contact id ".concat(e," not found!"),t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function at(){return(at=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g(et+e,e);case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log("cant delete contact ".concat(e),t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function st(){return(st=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e._id){t.next=7;break}return t.next=4,x(et+e._id,e);case 4:n=t.sent,t.next=10;break;case 7:return t.next=9,m(et,e);case 9:n=t.sent;case 10:return t.abrupt("return",n);case 13:t.prev=13,t.t0=t.catch(0),console.log("cant save contact ".concat(e),t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function ot(t,e){t=t.toLocaleLowerCase();var n=e.filter((function(e){return e.contactName.toLocaleLowerCase().includes(t)||e.contactPhone.toLocaleLowerCase().includes(t)||e.contactEmail.toLocaleLowerCase().includes(t)}));return console.log({filteredContacts:n}),n}var it=n.p+"static/media/contact.42200432.png",ut=n(215),lt=n(219),jt=n(218),pt=n(214),bt=n(216),ht=n(217),dt=n(213),ft=function(t){var e=t.rows,n=t.title,c=Object(o.c)((function(t){return t.userReducer.user}));return Object(R.jsxs)(pt.a,{component:dt.a,children:[Object(R.jsx)("h2",{children:n}),Object(R.jsxs)(ut.a,{sx:{minWidth:650},"aria-label":"sticky table",children:[Object(R.jsx)(bt.a,{children:Object(R.jsxs)(ht.a,{hover:!0,role:"checkbox",children:[Object(R.jsx)(jt.a,{children:"Date"}),Object(R.jsx)(jt.a,{children:"From"}),Object(R.jsx)(jt.a,{children:"To"}),Object(R.jsx)(jt.a,{children:"Amount"}),Object(R.jsx)(jt.a,{children:"Balance"})]})}),Object(R.jsx)(lt.a,{children:e.map((function(t){return Object(R.jsxs)(ht.a,{hover:!0,sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(R.jsx)(jt.a,{children:new Date(t.createdAt).toLocaleDateString()}),Object(R.jsx)(jt.a,{children:t.from}),Object(R.jsx)(jt.a,{children:t.to}),Object(R.jsx)(jt.a,{className:c.email===t.to?"amount-plus":"amount-minus",children:c.email===t.to?"+".concat(t.amount):"-".concat(t.amount)}),Object(R.jsx)(jt.a,{children:c.email===t.to?"".concat((c.coins+t.amount).toFixed(2)," \u20bf"):"".concat((c.coins-t.amount).toFixed(2)," \u20bf")})]},t._id)}))})]})]})},Ot=n.p+"static/media/edit.b0c1b178.png",mt=function(t){var e=Object(o.c)((function(t){return t.userReducer.user})),n=Object(o.c)((function(t){return t.contactReducer.currContact})),r=Object(c.useState)(null),a=Object(I.a)(r,2),s=a[0],i=a[1],u=Object(o.b)();Object(c.useEffect)((function(){var e;u((e=t.match.params.id,function(){var t=Object(p.a)(j.a.mark((function t(n){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,tt.getContactById(e);case 2:c=t.sent,n({type:"SET_CONTACT",contact:c});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[t.match.params.id,u]),Object(c.useEffect)((function(){e||u(P())}),[e,u]),Object(c.useEffect)((function(){var t=function(){var t=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.getTransactionsByContactId(n._id);case 2:(e=t.sent).length&&i(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();n&&t()}),[n]);return n?Object(R.jsxs)("div",{className:"contact-details-page",children:[Object(R.jsxs)("div",{className:"contact-details",children:[Object(R.jsx)(B,{Icon:function(){return Object(R.jsx)("img",{src:Ot,alt:""})},onClick:function(){t.history.push("/contact/edit/".concat(n._id))},className:"edit-logo"}),n.contactImg?Object(R.jsx)("img",{src:n.contactImg,alt:""}):Object(R.jsx)("img",{src:it,alt:""}),Object(R.jsxs)("p",{children:["Name: ",n.contactName]}),Object(R.jsxs)("p",{children:["Email: ",n.contactEmail]}),Object(R.jsxs)("p",{children:["Phone: ",n.contactPhone]})]}),Object(R.jsx)($,{contact:n,onTransactionCoins:function(t,c){if(c.preventDefault(),e.coins<t)return alert("No enough money");var r,a;u((r=n.contactEmail,a=t,function(){var t=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.addTransaction(r,a);case 2:n=t.sent,e({type:"SET_USER",user:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}}),s&&Object(R.jsx)(ft,{title:"Transactions with contact",rows:s})]}):Object(R.jsx)("div",{children:"Contact not found..."})},xt=n(9),gt=n(16),vt=function(){var t=Object(p.a)(j.a.mark((function t(e){var n,c,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"mister-bitcoin-present","mister-bitcoin",n="https://api.cloudinary.com/v1_1/".concat("mister-bitcoin","/image/upload"),(c=new FormData).append("file",e.target.files[0]),c.append("upload_preset","mister-bitcoin-present"),t.prev=6,t.next=9,h.a.post(n,c);case 9:return r=t.sent,t.abrupt("return",r.data);case 13:t.prev=13,t.t0=t.catch(6),console.error("ERROR!",t.t0);case 16:case"end":return t.stop()}}),t,null,[[6,13]])})));return function(e){return t.apply(this,arguments)}}(),At=n.p+"static/media/delete-friend.eb5b9ff3.png",wt=function(t){var e=Object(o.c)((function(t){return t.userReducer.user})),n=Object(c.useState)(null),r=Object(I.a)(n,2),a=r[0],s=r[1],i=Object(o.b)();Object(c.useEffect)((function(){e||i(P())}),[i,e]),Object(c.useEffect)((function(){var e=function(){var t=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=6;break}return t.next=3,tt.getContactById(e);case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0=tt.getEmptyContact();case 7:n=t.t0,s(n);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e(t.match.params.id)}),[t.match.params.id]);var u=function(){var t=Object(p.a)(j.a.mark((function t(e){var n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.target.name,"file"!==e.target.type){t.next=7;break}return t.next=4,vt(e);case 4:c=t.sent.url,t.next=8;break;case 7:c="number"===e.target.type?+e.target.value:e.target.value;case 8:s(Object(gt.a)(Object(gt.a)({},a),{},Object(xt.a)({},n,c)));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var e=Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,tt.deleteContact(a._id);case 2:t.history.push("/contact");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a?Object(R.jsx)("div",{className:"contact-edit",children:Object(R.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(function(t){return function(){var e=Object(p.a)(j.a.mark((function e(n){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=!t._id,e.next=3,tt.saveContact(t);case 3:r=e.sent,n(c?{type:"ADD_CONTACT",contact:r}:{type:"UPDATE_CONTACT",updatedContact:r}),n(P());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(a)),t.history.push("/contact")},children:[Object(R.jsxs)("div",{className:"contact-edit contact-name",children:[Object(R.jsx)("label",{htmlFor:"contactName",children:"Fullname"}),Object(R.jsx)("input",{required:!0,type:"text",id:"contactName",value:a.contactName,onChange:u,name:"contactName"})]}),Object(R.jsxs)("div",{className:"contact-edit contact-email",children:[Object(R.jsx)("label",{htmlFor:"contactEmail",children:"Email Address"}),Object(R.jsx)("input",{required:!0,type:"text",id:"contactEmail",value:a.contactEmail,onChange:u,name:"contactEmail"})]}),Object(R.jsxs)("div",{className:"contact-edit contact-phone",children:[Object(R.jsx)("label",{htmlFor:"contactPhone",children:"Phone Number"}),Object(R.jsx)("input",{required:!0,type:"text",id:"contactPhone",value:a.contactPhone,onChange:u,name:"contactPhone"})]}),Object(R.jsxs)("div",{className:"contact-edit contact-img",children:[Object(R.jsx)("label",{htmlFor:"contactImg",children:"Image"}),Object(R.jsx)("input",{type:"file",id:"contactImg",onChange:u,name:"contactImg"})]}),Object(R.jsx)("button",{children:"Save Contact"}),a._id&&Object(R.jsx)(B,{Icon:function(){return Object(R.jsx)("img",{src:At,alt:""})},onClick:l,className:"delete-btn"})]})}):Object(R.jsx)("h1",{children:"Contact not found"})},yt=function(t){return Object(R.jsxs)("form",{className:"contact-filter",onSubmit:function(t){return t.preventDefault()},children:[Object(R.jsx)("label",{htmlFor:"term",children:"Search contact"}),Object(R.jsx)("input",{type:"text",id:"term",name:"term",onChange:function(e){var n=e.target;t.onChangeFilter(n.value)},placeholder:"Search..."})]})},Ct=function(t){var e=t.contact;return Object(R.jsx)(i.b,{to:"/contact/".concat(e._id),children:Object(R.jsxs)("div",{className:"contact-preview",children:[e.contactImg?Object(R.jsx)("img",{src:e.contactImg,alt:""}):Object(R.jsx)("img",{src:it,alt:""}),Object(R.jsx)("p",{children:e.contactName}),Object(R.jsx)("p",{children:e.contactEmail}),Object(R.jsx)("p",{children:e.contactPhone})]})})},kt=function(t){var e=t.contacts;return Object(R.jsx)("ul",{className:"contact-list",children:e.map((function(t){return Object(R.jsx)("li",{children:Object(R.jsx)(Ct,{contact:t})},t._id)}))})},St=n.p+"static/media/plus.3463e9e3.png",Nt=function(t){var e=t.history,n=Object(c.useState)(null),r=Object(I.a)(n,2),a=(r[0],r[1]),s=Object(o.c)((function(t){return t.userReducer.user})),i=Object(o.b)();Object(c.useEffect)((function(){s||i(P())}),[i,s]);return s?Object(R.jsxs)("div",{className:"contact-page",children:[Object(R.jsxs)("div",{className:"contact-header",children:[Object(R.jsx)(yt,{onChangeFilter:function(t){a(t)}}),Object(R.jsx)(B,{Icon:function(){return Object(R.jsx)("img",{src:St,alt:""})},onClick:function(){e.push("/contact/edit")},className:"add-contact-btn"})]}),s.contacts?Object(R.jsx)(kt,{contacts:s.contacts}):Object(R.jsx)("h1",{children:"No contacts to show"})]}):Object(R.jsx)(u.a,{to:"/"})},Et=n(47),Tt={getRate:function(){return Ft.apply(this,arguments)},getMarketPrice:function(){return Ut.apply(this,arguments)},getConfirmedTransactions:function(){return Pt.apply(this,arguments)}};function Ft(){return(Ft=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Et.get("https://blockchain.info/tobtc?currency=USD&value=1");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function Ut(){return(Ut=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Et.get("https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function Pt(){return(Pt=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Et.get("https://blockchain.info/tobtc?currency=USD&value=1");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}var Rt=n(108),Bt=n(104),Dt=n(211),Lt=n(206),It=["children"],Vt=c.forwardRef((function(t,e){var n=t.children,c=Object(Rt.a)(t,It);return Object(R.jsxs)("svg",Object(gt.a)(Object(gt.a)({width:"150",height:"50"},c),{},{ref:e,children:[Object(R.jsx)("polygon",{points:"0,50 0,0 150,0 150,50",className:"bg"}),Object(R.jsx)("polygon",{points:"0,50 0,0 150,0 150,50",className:"borderEffect"}),Object(R.jsx)("foreignObject",{x:"0",y:"0",width:"150",height:"50",children:Object(R.jsx)("div",{className:"content",children:n})})]}))})),Ht=Object(Lt.a)(Vt)((function(t){var e=t.theme;return"\n  overflow: visible;\n  cursor: pointer;\n  --main-color: ".concat("light"===e.palette.mode?"rgb(25,118,210)":"rgb(144,202,249)",";\n  --hover-color: ").concat("light"===e.palette.mode?"rgba(25,118,210,0.04)":"rgba(144,202,249,0.08)",";\n  --active-color: ").concat("light"===e.palette.mode?"rgba(25,118,210,0.12)":"rgba(144,202,249,0.24)",";\n\n  & polygon {\n    fill: transparent;\n    transition: all 800ms ease;\n    pointer-events: none;\n  }\n  \n  & .bg {\n    stroke: var(--main-color);\n    stroke-width: 0.5;\n    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));\n    fill: transparent;\n  }\n\n  & .borderEffect {\n    stroke: var(--main-color);\n    stroke-width: 2;\n    stroke-dasharray: 150 600;\n    stroke-dashoffset: 150;\n    fill: transparent;\n  }\n\n  &:hover,\n  &.").concat(Bt.a.focusVisible," {\n    .borderEffect {\n      stroke-dashoffset: -600;\n    }\n\n    .bg {\n      fill: var(--hover-color);\n    }\n  }\n\n  &:focus,\n  &.").concat(Bt.a.focusVisible," {\n    outline: none;\n  }\n\n  &.").concat(Bt.a.active," { \n    & .bg {\n      fill: var(--active-color);\n      transition: fill 300ms ease-out;\n    }\n  }\n\n  & foreignObject {\n    pointer-events: none;\n\n    & .content {\n      font-family: Helvetica, Inter, Arial, sans-serif;\n      font-size: 14px;\n      font-weight: 200;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: var(--main-color);\n      text-transform: uppercase;\n    }\n\n    & svg {\n      margin: 0 5px;\n    }\n  }")})),Mt=c.forwardRef((function(t,e){return Object(R.jsx)(Dt.a,Object(gt.a)(Object(gt.a)({},t),{},{component:Ht,ref:e}))})),Qt=function(){var t=Object(u.g)();return Object(R.jsx)(Mt,{onClick:function(){return t.push("/signup")},children:"Register Now"})},Xt=function(t){var e=t.history,n=Object(c.useState)(0),r=Object(I.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(!0),u=Object(I.a)(i,2),l=u[0],b=u[1],h=Object(o.c)((function(t){return t.userReducer.user})),d=Object(c.useState)(null),f=Object(I.a)(d,2),O=f[0],m=f[1],x=Object(o.b)(),g=Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(1/a),v=h?Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(1/a*h.coins):null;Object(c.useEffect)((function(){h||x(P())}),[h,x]),Object(c.useEffect)((function(){var t=function(){var t=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.getTransactions();case 2:(e=t.sent).length&&m(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();h&&t()}),[h]),Object(c.useEffect)((function(){var t=function(){var t=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Tt.getRate();case 2:e=t.sent,s(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[a]);var A=null===O||void 0===O?void 0:O.slice(0,3),w=l?A:O,y=l?"See all..":"See less...",C=l?"Last 3 transactions:":"All transactions:",k=(null===h||void 0===h?void 0:h.coins)?"amount-plus":"amount-minus";return h?Object(R.jsxs)("div",{className:"home-page logged-user",children:[Object(R.jsxs)("div",{className:"user-balance",children:[Object(R.jsx)("h4",{children:"Wallet Balance:"}),Object(R.jsx)("h2",{className:k,children:v}),Object(R.jsxs)("h3",{children:["You have ",Object(R.jsx)("span",{className:k,children:h.coins})," ","bitcoins"]}),Object(R.jsxs)("h4",{children:["1 Bitcoin: ",g]})]}),O&&Object(R.jsxs)("div",{className:"transactions-table",children:[O.length>3&&Object(R.jsx)("p",{onClick:function(){return b((function(t){return!t}))},children:y}),Object(R.jsx)(ft,{title:C,rows:w})]})]}):Object(R.jsx)("div",{className:"home-page guest",children:Object(R.jsxs)("div",{className:"guest-welcome",children:[Object(R.jsx)("h1",{children:"Welcome to Mister Bitcoin"}),Object(R.jsx)("h3",{children:"Demo bitcoin wallet"}),Object(R.jsx)(Qt,{}),Object(R.jsx)("p",{onClick:function(){return e.push("/signup/login")},children:"Already registered? login"})]})})},zt=(n(151),function(t){var e=Object(c.useState)(null),n=Object(I.a)(e,2),r=n[0],a=n[1],s=Object(o.b)(),i=Object(u.g)(),l=function(t){var e=t.target,n=e.name,c="number"===e.value?+e.value:e.value;a(Object(gt.a)(Object(gt.a)({},r),{},Object(xt.a)({},n,c)))};return Object(R.jsx)("div",{children:Object(R.jsxs)("form",{onSubmit:function(t){t.preventDefault(),s(function(t){return function(){var e=Object(p.a)(j.a.mark((function e(n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.login(t);case 2:c=e.sent,n({type:"SET_USER",user:c});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(r)),i.push("/")},children:[Object(R.jsx)("h1",{children:"Login"}),Object(R.jsx)("label",{htmlFor:"email",children:"Email"}),Object(R.jsx)("input",{required:!0,type:"text",id:"email",onChange:l,name:"email",placeholder:"Ex.. israeli2021@gmail.com"}),Object(R.jsx)("label",{htmlFor:"password",children:"Password"}),Object(R.jsx)("input",{required:!0,type:"password",id:"password",onChange:l,name:"password",placeholder:"Ex.. !#@fdsf54%"}),Object(R.jsx)("button",{children:"Login"}),Object(R.jsx)("p",{onClick:function(){return i.push("/signup")},children:"Register now"})]})})}),Jt=(n(152),function(){var t=Object(c.useState)(null),e=Object(I.a)(t,2),n=e[0],r=e[1],a=Object(o.b)(),s=Object(u.g)(),i=function(t){var e=t.target,c=e.name,a="number"===e.value?+e.value:e.value;r(Object(gt.a)(Object(gt.a)({},n),{},Object(xt.a)({},c,a)))};return Object(R.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a(function(t){return function(){var e=Object(p.a)(j.a.mark((function e(n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.signup(t);case 3:e.next=9;break;case 5:throw e.prev=5,e.t0=e.catch(0),console.log({"err actions1":e.t0}),e.t0;case 9:return e.next=11,w.getLoggedInUser();case 11:c=e.sent,n({type:"SET_USER",user:c});case 13:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()}(n)).then((function(){s.push("/")})).catch((function(t){console.log({"err page":t})}))},children:[Object(R.jsx)("h1",{children:"Signup"}),Object(R.jsx)("label",{htmlFor:"fullname",children:"Full name"}),Object(R.jsx)("input",{required:!0,type:"text",id:"fullname",onChange:i,name:"fullname",placeholder:"Ex.. Israel Israeli"}),Object(R.jsx)("label",{htmlFor:"password",children:"Password"}),Object(R.jsx)("input",{required:!0,type:"password",id:"password-login",onChange:i,name:"password",placeholder:"Ex.. !#@fdsf54%"}),Object(R.jsx)("label",{htmlFor:"email",children:"Email"}),Object(R.jsx)("input",{required:!0,type:"text",id:"email-login",onChange:i,name:"email",placeholder:"Ex.. israeli2021@gmail.com"}),Object(R.jsx)("label",{htmlFor:"phone",children:"Phone number"}),Object(R.jsx)("input",{required:!0,type:"text",id:"phone",onChange:i,name:"phone",placeholder:"Ex.. 05x-xxxxxxx"}),Object(R.jsx)("button",{children:"Sign up"}),Object(R.jsx)("p",{onClick:function(){return s.push("/signup/login")},children:"Already registered? login"})]})}),Kt=function(t){var e=Object(c.useState)("Login"),n=Object(I.a)(e,2),r=n[0],a=n[1];Object(c.useEffect)((function(){var e=t.history.location.pathname;a("/signup/login"===e?"Login":"SignUp")}),[t.history.location]);var s={SignUp:Jt,Login:zt}[r];return Object(R.jsx)("div",{className:"signup-page",children:Object(R.jsx)(s,{})})},Yt=n(69),qt=function(t){t.title;var e=t.data,n=t.description;return Object(R.jsxs)("div",{className:"chart",children:[Object(R.jsx)("h1",{children:n}),Object(R.jsxs)(Yt.Sparklines,{data:e,children:[Object(R.jsx)(Yt.SparklinesLine,{color:"red"}),Object(R.jsx)(Yt.SparklinesSpots,{size:1})]})]})},Zt=function(){var t=Object(c.useState)(null),e=Object(I.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(null),s=Object(I.a)(a,2),o=s[0],i=s[1];return Object(c.useEffect)((function(){var t=function(){var t=Object(p.a)(j.a.mark((function t(){var e,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Tt.getMarketPrice();case 3:e=t.sent,r(e),n=e.values.map((function(t){return t.y})),i(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),n&&o&&Object(R.jsxs)("div",{className:"statistic-page",children:[Object(R.jsx)("h1",{children:"Statistic page:"}),Object(R.jsx)(qt,{title:n.name,description:n.description,data:o,color:"red"})]})},Gt=function(t){t.history;var e=Object(o.c)((function(t){return t.userReducer.user})),n=e.img?e.img:it;return Object(R.jsx)("div",{className:"user-details-page",children:Object(R.jsxs)("div",{className:"user-details",children:[Object(R.jsx)("img",{src:n,alt:""}),Object(R.jsxs)("p",{children:["Fullname: ",e.fullname]}),Object(R.jsxs)("p",{children:["Phone: ",e.phone]}),Object(R.jsxs)("p",{children:["Email: ",e.email]})]})})},Wt=function(){return Object(R.jsx)(i.a,{children:Object(R.jsxs)("div",{className:"App main-layout",children:[Object(R.jsx)(_,{}),Object(R.jsxs)(u.d,{children:[Object(R.jsx)(u.b,{component:wt,path:"/contact/edit/:id?"}),Object(R.jsx)(u.b,{component:mt,path:"/contact/:id"}),Object(R.jsx)(u.b,{component:Nt,path:"/contact"}),Object(R.jsx)(u.b,{component:Gt,path:"/user"}),Object(R.jsx)(u.b,{component:Zt,path:"/statistic"}),Object(R.jsx)(u.b,{component:Kt,path:"/signup"}),Object(R.jsx)(u.b,{component:Xt,path:"/"})]}),Object(R.jsx)(D,{})]})})},_t=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,223)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),a(t),s(t)}))},$t=n(56),te=n(25),ee={contacts:[],currContact:null};var ne={user:null},ce=n(105),re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$t.c,ae=Object($t.b)({contactReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_CONTACTS":return Object(gt.a)(Object(gt.a)({},t),{},{contacts:e.contacts});case"SET_CONTACT":return Object(gt.a)(Object(gt.a)({},t),{},{currContact:e.contact});case"ADD_CONTACT":return Object(gt.a)(Object(gt.a)({},t),{},{contacts:[].concat(Object(te.a)(t.contacts),[e.contact])});case"REMOVE_CONTACT":return Object(gt.a)(Object(gt.a)({},t),{},{contacts:t.contacts.filter((function(t){return t._id!==e.contactId}))});case"UPDATE_CONTACT":var n=e.updatedContact;return Object(gt.a)(Object(gt.a)({},t),{},{contacts:t.contacts.map((function(t){return t._id===n._id?n:t}))});default:return t}},userReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,e=arguments.length>1?arguments[1]:void 0;switch(console.log(e),e.type){case"SET_USER":return Object(gt.a)(Object(gt.a)({},t),{},{user:e.user});case"LOGOUT":return Object(gt.a)(Object(gt.a)({},t),{},{user:null});default:return t}}}),se=Object($t.d)(ae,re(Object($t.a)(ce.a)));n(153);s.a.render(Object(R.jsx)(r.a.StrictMode,{children:Object(R.jsx)(o.a,{store:se,children:Object(R.jsx)(Wt,{})})}),document.getElementById("root")),_t()}},[[154,1,2]]]);
//# sourceMappingURL=main.8c811fcb.chunk.js.map