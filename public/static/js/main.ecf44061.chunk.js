(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{145:function(t,e,n){},146:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(30),s=n.n(a),o=n(18),u=n(38),i=n(15),l=n(4),p=n.n(l),j=n(7),h=n(47),b=n.n(h),d="/api/",f=b.a.create({withCredentials:!0}),m=function(t,e){return g(t,"GET",e)},O=function(t,e){return g(t,"POST",e)},x=function(t,e){return g(t,"PUT",e)},v=function(t,e){return g(t,"DELETE",e)};function g(t){return A.apply(this,arguments)}function A(){return A=Object(j.a)(p.a.mark((function t(e){var n,r,c,a=arguments;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"GET",r=a.length>2&&void 0!==a[2]?a[2]:null,t.prev=2,t.next=5,f({url:"".concat(d).concat(e),method:n,data:r,params:"GET"===n?r:null});case 5:return c=t.sent,t.abrupt("return",c.data);case 9:throw t.prev=9,t.t0=t.catch(2),console.log("Had Issues ".concat(n,"ing to the backend, endpoint: ").concat(e,", with data: ").concat(r)),console.dir(t.t0),t.t0.response&&t.t0.response.status,t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,9]])}))),A.apply(this,arguments)}var w={getUsers:function(){return m("user")},getById:function(t){return m("user/".concat(t))},remove:function(t){return v("user/".concat(t))},update:function(t){return y.apply(this,arguments)},login:function(t){return C.apply(this,arguments)},signup:function(t){return S.apply(this,arguments)},logout:function(){return k.apply(this,arguments)},getLoggedInUser:function(){return N.apply(this,arguments)}};function y(){return(y=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x("user/".concat(e._id),e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(){return(C=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O("auth/login",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(){return(S=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O("auth/signup",e);case 3:return t.abrupt("return",t.sent);case 6:throw t.prev=6,t.t0=t.catch(0),console.log("service",t.t0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function k(){return(k=Object(j.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O("auth/logout");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(){return(N=Object(j.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m("auth/loggedInUser");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}window.userService=w;var T={addTransaction:function(t,e){return E.apply(this,arguments)},getTransactions:function(){return H.apply(this,arguments)},getTransactionsByContactId:function(t){return F.apply(this,arguments)}};function E(){return(E=Object(j.a)(p.a.mark((function t(e,n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O("transaction/",{contactEmail:e,amount:n});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function H(){return(H=Object(j.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m("transaction/");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function F(){return(F=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",m("transaction/".concat(e)));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var U=function(){return function(){var t=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.getLoggedInUser();case 2:n=t.sent,e({type:"SET_USER",user:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},B=n(6),L=n(190),P=n(191),X=n(188),D=n(192),I=n(186),V=n(185),z=n(193),R=n(187),Q=n(93),G=n.n(Q),J=n(94),Z=n.n(J),M=n(1),K=function(t){var e=t.loggedUser,n=t.logout,c=t.history,a=r.useState(null),s=Object(B.a)(a,2),o=s[0],u=s[1],i=Boolean(o),l=function(){u(null)};return Object(M.jsxs)(r.Fragment,{children:[Object(M.jsx)(L.a,{sx:{display:"flex",alignItems:"center",textAlign:"center"},children:Object(M.jsx)(R.a,{title:"Account settings",children:Object(M.jsx)(z.a,{onClick:function(t){u(t.currentTarget)},size:"small",sx:{ml:2},children:Object(M.jsx)(P.a,{sx:{width:32,height:32},children:"M"})})})}),Object(M.jsxs)(X.a,{anchorEl:o,open:i,onClose:l,onClick:l,PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[Object(M.jsxs)(D.a,{children:[Object(M.jsx)(P.a,{})," Profile"]}),Object(M.jsxs)(D.a,{children:[Object(M.jsx)(P.a,{})," My account"]}),Object(M.jsx)(V.a,{}),e?Object(M.jsxs)(D.a,{onClick:n,children:[Object(M.jsx)(I.a,{children:Object(M.jsx)(G.a,{fontSize:"small"})}),"Logout"]}):Object(M.jsxs)("div",{children:[Object(M.jsxs)(D.a,{onClick:function(){return c.push("/signup")},children:[Object(M.jsx)(I.a,{children:Object(M.jsx)(Z.a,{fontSize:"small"})}),"Login"]}),Object(M.jsx)(D.a,{onClick:function(){return c.push("/signup")},children:"SignUp"}),","]})]})]})},W=function(){var t=Object(o.c)((function(t){return t.userReducer.user})),e=Object(i.f)(),n=Object(o.b)();console.log(e);return Object(M.jsx)("header",{className:"app-header full",children:Object(M.jsxs)("ul",{className:"header-navbar",children:[Object(M.jsx)("li",{children:Object(M.jsx)(u.c,{exact:!0,to:"/",activeClassName:"active-nav",children:Object(M.jsx)("img",{src:"data:image/png;base64,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",alt:"",onClick:function(){return e.push("/")}})})}),Object(M.jsx)("li",{children:Object(M.jsx)(u.c,{to:"/contact",activeClassName:"active-nav",children:Object(M.jsx)("img",{src:"data:image/png;base64,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",alt:""})})}),Object(M.jsx)("li",{children:Object(M.jsx)(u.c,{to:"/statistic",activeClassName:"active-nav",children:Object(M.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAK2SURBVFiF7Za/TxNhGMe/zxUibQNqHHQoBoE/gDg4uGDUxNUEW402pXLFRBM1mrS0DngJxgANIYa4wEktNJDQdDb+GHQwMcTEQReSwmIhTg6QtrTk3tdBaa5XK7R37anpZ3yft28/977f9wfQQB9k5p975MAogCFt+5xvvOAl1NWoVCRoEYSJVpt9y9V7Fu7zF0r6mCoIAM0730PpbObzi+UPbDufL6mbKuid9vdsWw59UsC/ZPO5p68/Lm9p+zTVUsAzE7gEcEvnuj0uSRJT1/pnAjeYgBFwHpoXw7MAMBAJpQEE1f1qskm8EamFKZkJANcAbIA4cU6Pv6ZsiyeO5w4rTJGJw6EIuBoTx1c0HyXNDY5LNRN0y8FuAWyJOLhCwuXuVMvamiN7BeAPAVgA2IiwkGm1PYi7pNLQaTBUsP/ZkItzzAA8djCTvT91Zyq3WzsjSU3t7Wm3AGxExfCr/Y5ZkaBbDlwk8OaulD2hzpR6STn44LwvHK9kXN2CziWnxbrV8QicbhJonXOucOIjXSl7IunY7lQvacw3mjRKbl+CnmjoCO0oixw4CmZxdm4cSK460n0EGv75e2r/3ZLWRdA96z8pMEoQ6G2mLX8r7prM7tYkSRJWHek+gcCiYjhRrYBHDnBtm/qqK3sOemT/XTAaBuh21De2oK3/yqAhWVNfcbE3L4tqJYLOpXtW62bTNEA9jHA6Jo6taPvUk6KrzhsJdlg3m98DQj7btnNKe4iaQWEGvRH/MaawdyB6MjcwNglCSTbMoCD4/Hr4m1sOnouJo0mI1Q+4V+grpSiDRp1hfwp9pZj+HtyLmj631FS79HsKGpmpapZ+XzNoZKYq5f/NoNHHSTl0bZJ6LH1BsF4zUilFM2jmZijHX79JGoJ6aQjqpSGol4agXoqf/GVuD7Pa/wl+AJ+mHQ09/jy4AAAAAElFTkSuQmCC",alt:""})})}),Object(M.jsx)("li",{children:Object(M.jsx)(K,{loggedUser:t,logout:function(){n(function(){var t=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.logout();case 2:e({type:"LOGOUT"});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then((function(){return e.push("/")}))},history:e})})]})})},Y=function(t){var e=t.transaction,n=new Date(e.createdAt).toLocaleTimeString("en-US"),r=new Date(e.createdAt).toLocaleDateString();return Object(M.jsxs)("li",{className:"transaction-preview",children:[Object(M.jsxs)("p",{children:[" From: ",e.from," "]}),Object(M.jsxs)("p",{children:[" To: ",e.to," "]}),Object(M.jsxs)("p",{children:[" Amount: ",e.amount," "]}),Object(M.jsxs)("p",{children:["Created at: ",r,", ",n]})]})},q=function(t){var e=t.transactions,n=t.title;return Object(M.jsxs)("section",{className:"transaction-list",children:[Object(M.jsx)("h3",{children:n}),Object(M.jsx)("ul",{className:"card-list",children:e.map((function(t,e){return Object(M.jsx)(Y,{transaction:t},e)}))})]})},_=function(t){var e=t.contact,n=t.onTransactionCoins,c=Object(r.useState)(0),a=Object(B.a)(c,2),s=a[0],o=a[1],u=Object(i.f)();return Object(M.jsxs)("section",{className:"transaction-fund",children:[Object(M.jsxs)("h3",{children:["Transaction coins to ",e.name,":"]}),Object(M.jsxs)("form",{onSubmit:function(t){n(s,t),u.push("/contact")},children:[Object(M.jsx)("label",{htmlFor:"amount",children:"Amount:"}),Object(M.jsx)("input",{required:!0,type:"number",id:"amount",onChange:function(t){var e=t.target,n="number"===e.type?+e.value:e.value;o(n)}}),Object(M.jsx)("button",{children:"Transaction"})]})]})},$={getContacts:function(){return nt.apply(this,arguments)},getContactById:function(t){return rt.apply(this,arguments)},deleteContact:function(t){return at.apply(this,arguments)},saveContact:function(t){return st.apply(this,arguments)},getEmptyContact:function(){return{contactName:"",contactEmail:"",contactPhone:""}},addContact:function(t){return ct.apply(this,arguments)}},tt="contact/";function et(t){return t.sort((function(t,e){return t.contactName.toLocaleLowerCase()<e.contactName.toLocaleLowerCase()?-1:t.contactName.toLocaleLowerCase()>e.contactName.toLocaleLowerCase()?1:0}))}function nt(){return nt=Object(j.a)(p.a.mark((function t(){var e,n,r,c=arguments;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:null,t.prev=1,t.next=4,m(tt);case 4:if(r=t.sent,!e){t.next=8;break}return n=ot(e,r),t.abrupt("return",et(n));case 8:return t.abrupt("return",et(r));case 11:t.prev=11,t.t0=t.catch(1),console.log("cant get contacts",t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])}))),nt.apply(this,arguments)}function rt(){return(rt=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m(tt+e);case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log("Contact id ".concat(e," not found!"),t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function ct(){return(ct=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O(tt,{contact:e});case 3:return n=t.sent,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log("Contact username ".concat(e.username," not found!"),t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function at(){return(at=Object(j.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v(tt+e,e);case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log("cant delete contact ".concat(e),t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function st(){return(st=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e._id){t.next=7;break}return t.next=4,x(tt+e._id,e);case 4:n=t.sent,t.next=10;break;case 7:return t.next=9,O(tt,e);case 9:n=t.sent;case 10:return t.abrupt("return",n);case 13:t.prev=13,t.t0=t.catch(0),console.log("cant save contact ".concat(e),t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function ot(t,e){t=t.toLocaleLowerCase();var n=e.filter((function(e){return e.contactName.toLocaleLowerCase().includes(t)||e.contactPhone.toLocaleLowerCase().includes(t)||e.contactEmail.toLocaleLowerCase().includes(t)}));return console.log({filteredContacts:n}),n}var ut=n.p+"static/media/contact.42200432.png",it=function(t){var e=Object(o.c)((function(t){return t.userReducer.user})),n=Object(o.c)((function(t){return t.contactReducer.currContact})),c=Object(r.useState)([]),a=Object(B.a)(c,2),s=a[0],u=a[1],i=Object(o.b)();e||i(U()),Object(r.useEffect)((function(){var e;i((e=t.match.params.id,function(){var t=Object(j.a)(p.a.mark((function t(n){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$.getContactById(e);case 2:r=t.sent,n({type:"SET_CONTACT",contact:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[i,t.match.params.id]),Object(r.useEffect)((function(){var t=function(){var t=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.getTransactionsByContactId(n._id);case 2:e=t.sent,u(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();n&&t()}),[n]);return n?Object(M.jsxs)("div",{className:"contact-details",children:[Object(M.jsx)("h1",{children:"Contact Details Page:"}),n.contactImg?Object(M.jsx)("img",{src:n.contactImg,alt:""}):Object(M.jsx)("img",{src:ut,alt:""}),Object(M.jsxs)("p",{children:["Name: ",n.contactName]}),Object(M.jsxs)("p",{children:["Email: ",n.contactEmail]}),Object(M.jsxs)("p",{children:["Phone: ",n.contactPhone]}),Object(M.jsx)(_,{contact:n,onTransactionCoins:function(t,r){if(r.preventDefault(),e.coins<t)return alert("No enough money");var c,a;i((c=n.contactEmail,a=t,function(){var t=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.addTransaction(c,a);case 2:n=t.sent,e({type:"SET_USER",user:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}}),s&&Object(M.jsx)(q,{transactions:s,title:"Transactions with contact"}),Object(M.jsx)("button",{onClick:function(){t.history.push("/contact")},children:"Back"}),Object(M.jsx)("button",{onClick:function(){t.history.push("/contact/edit/".concat(n._id))},children:"Edit"})]}):Object(M.jsx)("div",{children:"Contact not found..."})},lt=n(9),pt=n(17),jt=function(){var t=Object(j.a)(p.a.mark((function t(e){var n,r,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"mister-bitcoin-present","mister-bitcoin",n="https://api.cloudinary.com/v1_1/".concat("mister-bitcoin","/image/upload"),(r=new FormData).append("file",e.target.files[0]),r.append("upload_preset","mister-bitcoin-present"),t.prev=6,t.next=9,b.a.post(n,r);case 9:return c=t.sent,t.abrupt("return",c.data);case 13:t.prev=13,t.t0=t.catch(6),console.error("ERROR!",t.t0);case 16:case"end":return t.stop()}}),t,null,[[6,13]])})));return function(e){return t.apply(this,arguments)}}(),ht=function(t){var e=Object(o.c)((function(t){return t.userReducer.user})),n=Object(r.useState)(null),c=Object(B.a)(n,2),a=c[0],s=c[1],u=Object(o.b)();Object(r.useEffect)((function(){e||u(U());var n=t.match.params.id,r=function(){var t=Object(j.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=6;break}return t.next=3,$.getContactById(e);case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0=$.getEmptyContact();case 7:n=t.t0,s(n);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();r(n)}),[u,e,t.match.params.id]);var i=function(){var t=Object(j.a)(p.a.mark((function t(e){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.target.name,"file"!==e.target.type){t.next=7;break}return t.next=4,jt(e);case 4:r=t.sent.url,t.next=8;break;case 7:r="number"===e.target.type?+e.target.value:e.target.value;case 8:s(Object(pt.a)(Object(pt.a)({},a),{},Object(lt.a)({},n,r)));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var e=Object(j.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.deleteContact(a._id);case 2:t.history.push("/contact");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a?Object(M.jsxs)("div",{className:"contact-edit",children:[Object(M.jsx)("button",{onClick:function(){t.history.push("/contact/".concat(a._id))},children:"Back"}),a._id&&Object(M.jsx)("button",{onClick:l,children:"Delete"}),Object(M.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u(function(t){return function(){var e=Object(j.a)(p.a.mark((function e(n){var r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=!t._id,e.next=3,$.saveContact(t);case 3:c=e.sent,n(r?{type:"ADD_CONTACT",contact:c}:{type:"UPDATE_CONTACT",updatedContact:c});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(a)).then((function(){return t.history.push("/contact")}))},children:[Object(M.jsxs)("div",{className:"contact-edit contact-name",children:[Object(M.jsx)("label",{htmlFor:"contactName",children:"Fullname"}),Object(M.jsx)("input",{required:!0,type:"text",id:"contactName",value:a.contactName,onChange:i,name:"contactName"})]}),Object(M.jsxs)("div",{className:"contact-edit contact-email",children:[Object(M.jsx)("label",{htmlFor:"contactEmail",children:"Email Address"}),Object(M.jsx)("input",{required:!0,type:"text",id:"contactEmail",value:a.contactEmail,onChange:i,name:"contactEmail"})]}),Object(M.jsxs)("div",{className:"contact-edit contact-phone",children:[Object(M.jsx)("label",{htmlFor:"contactPhone",children:"Phone Number"}),Object(M.jsx)("input",{required:!0,type:"text",id:"contactPhone",value:a.contactPhone,onChange:i,name:"contactPhone"})]}),Object(M.jsxs)("div",{className:"contact-edit contact-img",children:[Object(M.jsx)("label",{htmlFor:"contactImg",children:"Image"}),Object(M.jsx)("input",{type:"file",id:"contactImg",onChange:i,name:"contactImg"})]}),Object(M.jsx)("button",{children:"Save Contact"})]})]}):Object(M.jsx)("h1",{children:"Contact not found"})},bt=function(t){return Object(M.jsxs)("form",{className:"contact-filter",onSubmit:function(t){return t.preventDefault()},children:[Object(M.jsx)("label",{htmlFor:"term",children:"Search contact"}),Object(M.jsx)("input",{type:"text",id:"term",name:"term",onChange:function(e){var n=e.target;t.onChangeFilter(n.value)},placeholder:"Search..."})]})},dt=function(t){var e=t.contact;return Object(M.jsx)(u.b,{to:"/contact/".concat(e._id),children:Object(M.jsxs)("div",{className:"contact-preview",children:[e.contactImg?Object(M.jsx)("img",{src:e.contactImg,alt:""}):Object(M.jsx)("img",{src:ut,alt:""}),Object(M.jsx)("p",{children:e.contactName}),Object(M.jsx)("p",{children:e.contactEmail}),Object(M.jsx)("p",{children:e.contactPhone})]})})},ft=function(t){var e=t.contacts;return Object(M.jsx)("ul",{className:"contact-list",children:e.map((function(t){return Object(M.jsx)("li",{children:Object(M.jsx)(dt,{contact:t})},t._id)}))})},mt=function(t){var e=t.history,n=Object(r.useState)(null),c=Object(B.a)(n,2),a=c[0],s=c[1],u=Object(o.c)((function(t){return t.userReducer.user})),i=Object(o.c)((function(t){return t.contactReducer.contacts})),l=Object(o.b)();return Object(r.useEffect)((function(){l(u?function(t){return function(){var e=Object(j.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.getContacts(t);case 2:r=e.sent,n({type:"SET_CONTACTS",contacts:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(a):U())}),[a,l,u]),u&&Object(M.jsxs)("div",{className:"contact-page",children:[Object(M.jsx)(bt,{onChangeFilter:function(t){s(t)}}),Object(M.jsx)("button",{onClick:function(){e.push("/contact/edit")},children:"Add contact"}),i?Object(M.jsx)(ft,{contacts:i}):Object(M.jsx)("h1",{children:"No contacts to show"})]})},Ot=n(47),xt={getRate:function(){return vt.apply(this,arguments)},getMarketPrice:function(){return gt.apply(this,arguments)},getConfirmedTransactions:function(){return At.apply(this,arguments)}};function vt(){return(vt=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Ot.get("https://blockchain.info/tobtc?currency=USD&value=1");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function gt(){return(gt=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Ot.get("https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function At(){return(At=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Ot.get("https://blockchain.info/tobtc?currency=USD&value=1");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}var wt=function(){var t=Object(r.useState)(0),e=Object(B.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)(null),s=Object(B.a)(a,2),u=s[0],i=s[1],l=Object(o.c)((function(t){return t.userReducer.user})),h=Object(o.b)(),b=Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(1/n),d=l?Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(1/n*l.coins):null;return Object(r.useEffect)((function(){var t=function(){var t=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,xt.getRate();case 2:e=t.sent,c(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(r.useEffect)((function(){var t=function(){var t=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.getTransactions();case 2:e=t.sent,i(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();l?t():h(U())}),[l,h]),l?Object(M.jsxs)("div",{className:"home-page",children:[Object(M.jsxs)("h1",{children:["Hello ",l.fullname]}),Object(M.jsxs)("h3",{children:["You have ",l.coins," bitcoins"]}),Object(M.jsxs)("h3",{children:["1 Bitcoin: ",b]}),Object(M.jsxs)("h3",{children:["Your bitcoins value: ",d," "]}),l&&u&&Object(M.jsx)(q,{transactions:u,title:"All your transactions"})]}):Object(M.jsx)("div",{className:"home-page-img"})},yt=function(t){var e=Object(r.useState)(null),n=Object(B.a)(e,2),c=n[0],a=n[1],s=Object(o.b)(),u=function(t){var e=t.target,n=e.name,r="number"===e.value?+e.value:e.value;a(Object(pt.a)(Object(pt.a)({},c),{},Object(lt.a)({},n,r)))};return Object(M.jsxs)("div",{className:"signup-page",children:[Object(M.jsx)("h1",{children:"Signup"}),Object(M.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(function(t){return function(){var e=Object(j.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.signup(t);case 3:e.next=9;break;case 5:throw e.prev=5,e.t0=e.catch(0),console.log({"err actions1":e.t0}),e.t0;case 9:return e.next=11,w.getLoggedInUser();case 11:r=e.sent,n({type:"SET_USER",user:r});case 13:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()}(c)).then((function(){t.history.push("/")})).catch((function(t){console.log({"err page":t})}))},children:[Object(M.jsx)("label",{htmlFor:"fullname",children:"Full name"}),Object(M.jsx)("input",{required:!0,type:"text",id:"fullname",onChange:u,name:"fullname"}),Object(M.jsx)("label",{htmlFor:"username",children:"User name"}),Object(M.jsx)("input",{required:!0,type:"text",id:"username",onChange:u,name:"username"}),Object(M.jsx)("label",{htmlFor:"password",children:"Password"}),Object(M.jsx)("input",{required:!0,type:"password",id:"password-login",onChange:u,name:"password"}),Object(M.jsx)("label",{htmlFor:"email",children:"Email"}),Object(M.jsx)("input",{required:!0,type:"text",id:"email-login",onChange:u,name:"email"}),Object(M.jsx)("label",{htmlFor:"phone",children:"Phone number"}),Object(M.jsx)("input",{required:!0,type:"text",id:"phone",onChange:u,name:"phone"}),Object(M.jsx)("button",{children:"Sign up"}),Object(M.jsx)("hr",{})]}),Object(M.jsx)("h1",{children:"Login"}),Object(M.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(function(t){return function(){var e=Object(j.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.login(t);case 2:r=e.sent,n({type:"SET_USER",user:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(c)),t.history.push("/")},children:[Object(M.jsx)("label",{htmlFor:"email",children:"Email"}),Object(M.jsx)("input",{required:!0,type:"text",id:"email",onChange:u,name:"email"}),Object(M.jsx)("label",{htmlFor:"password",children:"Password"}),Object(M.jsx)("input",{required:!0,type:"password",id:"password",onChange:u,name:"password"}),Object(M.jsx)("button",{children:"Login"})]})]})},Ct=n(74),St=function(t){t.title;var e=t.data,n=t.description;return Object(M.jsxs)("div",{className:"chart",children:[Object(M.jsx)("h1",{children:n}),Object(M.jsx)(Ct.Sparklines,{data:e,children:Object(M.jsx)(Ct.SparklinesLine,{color:"red"})})]})},kt=function(){var t=Object(r.useState)(null),e=Object(B.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)(null),s=Object(B.a)(a,2),o=s[0],u=s[1];return Object(r.useEffect)((function(){var t=function(){var t=Object(j.a)(p.a.mark((function t(){var e,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,xt.getMarketPrice();case 3:e=t.sent,c(e),n=e.values.map((function(t){return t.y})),u(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),n&&o&&Object(M.jsxs)("div",{className:"statistic-page",children:[Object(M.jsx)("h1",{children:"Statistic page:"}),Object(M.jsx)(St,{title:n.name,description:n.description,data:o,color:"red"})]})},Nt=function(){return Object(M.jsx)(u.a,{children:Object(M.jsxs)("div",{className:"App main-layout",children:[Object(M.jsx)(W,{}),Object(M.jsxs)(i.c,{children:[Object(M.jsx)(i.a,{component:ht,path:"/contact/edit/:id?"}),Object(M.jsx)(i.a,{component:it,path:"/contact/:id"}),Object(M.jsx)(i.a,{component:mt,path:"/contact"}),Object(M.jsx)(i.a,{component:kt,path:"/statistic"}),Object(M.jsx)(i.a,{component:yt,path:"/signup"}),Object(M.jsx)(i.a,{component:wt,path:"/"})]})]})})},Tt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,194)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),r(t),c(t),a(t),s(t)}))},Et=n(56),Ht=n(24),Ft={contacts:[],currContact:null};var Ut={user:null},Bt=n(96),Lt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Et.c,Pt=Object(Et.b)({contactReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ft,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_CONTACTS":return Object(pt.a)(Object(pt.a)({},t),{},{contacts:e.contacts});case"SET_CONTACT":return Object(pt.a)(Object(pt.a)({},t),{},{currContact:e.contact});case"ADD_CONTACT":return Object(pt.a)(Object(pt.a)({},t),{},{contacts:[].concat(Object(Ht.a)(t.contacts),[e.contact])});case"REMOVE_CONTACT":return Object(pt.a)(Object(pt.a)({},t),{},{contacts:t.contacts.filter((function(t){return t._id!==e.contactId}))});case"UPDATE_CONTACT":var n=e.updatedContact;return Object(pt.a)(Object(pt.a)({},t),{},{contacts:t.contacts.map((function(t){return t._id===n._id?n:t}))});default:return t}},userReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ut,e=arguments.length>1?arguments[1]:void 0;switch(console.log(e),e.type){case"SET_USER":return Object(pt.a)(Object(pt.a)({},t),{},{user:e.user});case"LOGOUT":return Object(pt.a)(Object(pt.a)({},t),{},{user:null});default:return t}}}),Xt=Object(Et.d)(Pt,Lt(Object(Et.a)(Bt.a)));n(145);s.a.render(Object(M.jsx)(c.a.StrictMode,{children:Object(M.jsx)(o.a,{store:Xt,children:Object(M.jsx)(Nt,{})})}),document.getElementById("root")),Tt()}},[[146,1,2]]]);
//# sourceMappingURL=main.ecf44061.chunk.js.map