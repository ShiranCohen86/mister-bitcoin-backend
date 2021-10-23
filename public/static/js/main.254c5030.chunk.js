(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{154:function(t,e,n){},155:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(30),s=n.n(a),i=n(16),o=n(66),u=n(15),l=n(5),j=n.n(l),p=n(13),b=n(47),d=n.n(b),f="/api/",h=d.a.create({withCredentials:!0}),m=function(t,e){return v(t,"GET",e)},O=function(t,e){return v(t,"POST",e)},x=function(t,e){return v(t,"PUT",e)},g=function(t,e){return v(t,"DELETE",e)};function v(t){return w.apply(this,arguments)}function w(){return w=Object(p.a)(j.a.mark((function t(e){var n,c,r,a=arguments;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"GET",c=a.length>2&&void 0!==a[2]?a[2]:null,t.prev=2,t.next=5,h({url:"".concat(f).concat(e),method:n,data:c,params:"GET"===n?c:null});case 5:return r=t.sent,t.abrupt("return",r.data);case 9:throw t.prev=9,t.t0=t.catch(2),console.log("Had Issues ".concat(n,"ing to the backend, endpoint: ").concat(e,", with data: ").concat(c)),console.dir(t.t0),t.t0.response&&t.t0.response.status,t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,9]])}))),w.apply(this,arguments)}var y={getUsers:function(){return m("user")},getById:function(t){return m("user/".concat(t))},remove:function(t){return g("user/".concat(t))},update:function(t){return E.apply(this,arguments)},login:function(t){return N.apply(this,arguments)},signup:function(t){return S.apply(this,arguments)},logout:function(){return k.apply(this,arguments)},getLoggedInUser:function(){return C.apply(this,arguments)},isSigned:function(t){return A.apply(this,arguments)}};function E(){return(E=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x("user/".concat(e._id),e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(){return(N=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O("auth/login",e);case 3:return n=t.sent,t.abrupt("return",n);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function S(){return(S=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O("auth/signup",e);case 3:return t.abrupt("return",t.sent);case 6:throw t.prev=6,t.t0=t.catch(0),console.log("service",t.t0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function k(){return(k=Object(p.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O("auth/logout");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(){return(C=Object(p.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m("user/loggedInUser");case 3:return t.abrupt("return",t.sent);case 6:throw t.prev=6,t.t0=t.catch(0),t.t0;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function A(){return(A=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m("user/".concat(e));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.data);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}window.userService=y;var I={deleteContact:function(t){return F.apply(this,arguments)},saveContact:function(t){return R.apply(this,arguments)},getEmptyContact:function(){return{contactName:"",contactEmail:"",contactPhone:""}}},T="contact/";function F(){return(F=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g(T+e,e);case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log("cant delete contact ".concat(e),t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function R(){return(R=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e._id){t.next=7;break}return t.next=4,x(T+e._id,e);case 4:n=t.sent,t.next=10;break;case 7:return t.next=9,O(T,e);case 9:n=t.sent;case 10:return t.abrupt("return",n);case 13:t.prev=13,t.t0=t.catch(0),console.log("cant save contact ".concat(e),t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}var D=function(){return function(){var t=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.getLoggedInUser();case 2:n=t.sent,e({type:"SET_USER",user:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},B=n(1);function U(t){var e=t.onClick,n=t.Icon,c=t.children,r=t.className;return Object(B.jsxs)("button",{className:r,onClick:e,children:[Object(B.jsx)(n,{}),c]})}var P=n.p+"static/media/users.2e1249bc.png",L=n.p+"static/media/back.00987031.png",z=n(6),G=n(221),H=n(222),M=n(208),X=n.p+"static/media/bitcoin.2d4930d3.gif",J=n(213),V=n.p+"static/media/plus.3463e9e3.png",_={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"#B8C0C6",border:"2px solid #000",boxShadow:24,p:4,overflow:"auto",maxHeight:"80vh"},Q=function(){var t,e=Object(i.c)((function(t){return t.userReducer.user})),n=Object(u.f)(),r=c.useState(!1),a=Object(z.a)(r,2),s=a[0],o=a[1],l=function(){return o(!1)},j={display:"flex",flexDirection:"row",gap:"20px",alignItems:"center",border:"1px solid black",padding:"10px",bgcolor:"#CEF6FF",cursor:"pointer",borderRadius:"10px"};return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(U,{onClick:function(){return o(!0)},Icon:function(){return Object(B.jsx)("img",{src:X,alt:""})},className:"bitcoin-gif"}),Object(B.jsx)(M.a,{open:s,onClose:l,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(B.jsx)(G.a,{sx:_,children:(null===(t=e.contacts)||void 0===t?void 0:t.length)?Object(B.jsxs)(G.a,{children:[Object(B.jsx)(H.a,{variant:"h2",children:"Select Contact"}),e.contacts.map((function(t){return Object(B.jsxs)(G.a,{sx:j,onClick:function(){return e=t._id,l(),void n.push("/contact/".concat(e));var e},children:[Object(B.jsx)(J.a,{alt:"",src:t.contactImg}),Object(B.jsx)(H.a,{children:t.contactName})]},t._id)}))]}):Object(B.jsxs)(G.a,{className:"no-contacts",children:[Object(B.jsx)(H.a,{variant:"h2",children:"Add Contact..."}),Object(B.jsx)(U,{Icon:function(){return Object(B.jsx)("img",{src:V,alt:""})},onClick:function(){l(),n.push("/contact/edit")},className:"add-contact-btn"})]})})})]})},q=function(){var t=Object(i.c)((function(t){return t.userReducer.user})),e=Object(u.f)(),n=Object(i.b)();Object(c.useEffect)((function(){t||n(D)}),[t,n]);return t&&Object(B.jsxs)("div",{className:"app-footer",children:[Object(B.jsx)(U,{className:"go-back-btn",Icon:function(){return Object(B.jsx)("img",{src:L,alt:""})},onClick:function(){e.goBack()}}),Object(B.jsx)(Q,{}),Object(B.jsx)(U,{className:"contacts-btn",Icon:function(){return Object(B.jsx)("img",{src:P,alt:""})},onClick:function(){e.push("/contact")}})]})},Y=n.p+"static/media/home.a1b9128a.png",W=n(210),K=n(211),Z=n(205),$=n(223),tt=n(207),et=n(103),nt=n.n(et),ct=n(104),rt=n.n(ct),at=function(t){var e=t.loggedUser,n=t.logout,r=t.history,a=c.useState(null),s=Object(z.a)(a,2),i=s[0],o=s[1],u=Boolean(i),l=function(){o(null)},j=(null===e||void 0===e?void 0:e.coins)?"amount-plus":"amount-minus";return Object(B.jsxs)(c.Fragment,{children:[Object(B.jsxs)(G.a,{sx:{display:"flex",alignItems:"center",textAlign:"center"},children:[e&&Object(B.jsxs)("div",{className:"details-header",children:[Object(B.jsxs)(H.a,{children:["Welcome,"," ",Object(B.jsx)("span",{className:"header-fullname",children:e.fullname})]}),Object(B.jsxs)(H.a,{children:["Balance:"," ",Object(B.jsx)("span",{className:j,children:e.coins>0?e.coins.toFixed(2):0})," ","\u20bf"]})]}),Object(B.jsx)(tt.a,{title:"Profile",children:Object(B.jsx)($.a,{onClick:function(t){o(t.currentTarget)},size:"small",sx:{ml:2},children:e?Object(B.jsx)(J.a,{alt:e.fullname,src:e.img}):Object(B.jsx)(J.a,{})})})]}),Object(B.jsxs)(W.a,{anchorEl:i,open:u,onClose:l,onClick:l,PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[e&&Object(B.jsxs)(K.a,{onClick:function(){return r.push("/user")},children:[Object(B.jsx)(J.a,{}),"Profile"]}),e&&Object(B.jsxs)(K.a,{onClick:n,children:[Object(B.jsx)(Z.a,{children:Object(B.jsx)(nt.a,{fontSize:"small"})}),"Logout"]}),!e&&Object(B.jsxs)(K.a,{onClick:function(){return r.push("/signup/login")},children:[Object(B.jsx)(Z.a,{children:Object(B.jsx)(rt.a,{fontSize:"small"})}),"Login"]}),!e&&Object(B.jsx)(K.a,{onClick:function(){return r.push("/signup")},children:"SignUp"})]})]})},st=function(){var t=Object(i.c)((function(t){return t.userReducer.user})),e=Object(u.f)(),n=Object(i.b)();return Object(B.jsxs)("header",{className:"app-header full",children:[Object(B.jsx)(U,{Icon:function(){return Object(B.jsx)("img",{src:Y,alt:""})},onClick:function(){return e.push("/")},className:"home-logo"}),Object(B.jsx)(at,{loggedUser:t,logout:function(){n(function(){var t=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.logout();case 2:e({type:"SET_TRANSFERS",transfers:[]}),e({type:"LOGOUT"});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e.push("/")},history:e})]})},it=n.p+"static/media/send.92500005.png",ot=function(t){t.contact;var e=t.onTransferCoins,n=Object(c.useState)(0),r=Object(z.a)(n,2),a=r[0],s=r[1],i=Object(u.f)(),o=function(t){e(a,t),i.push("/contact")};return Object(B.jsx)("section",{className:"transfer-fund",children:Object(B.jsxs)("form",{onSubmit:o,children:[Object(B.jsx)("label",{htmlFor:"amount",children:"Transfer Coins"}),Object(B.jsx)("input",{required:!0,placeholder:"Amount",min:"0",id:"amount",type:"number",onChange:function(t){var e=t.target,n="number"===e.type?+e.value:e.value;s(n)},name:"amount",step:"0.01"}),Object(B.jsx)(U,{Icon:function(){return Object(B.jsx)("img",{src:it,alt:""})},onClick:o,className:"send-coin-btn"})]})})},ut={addTransfer:function(t,e){return lt.apply(this,arguments)},getTransfers:function(){return jt.apply(this,arguments)},getTransfersByContactId:function(t){return pt.apply(this,arguments)}};function lt(){return(lt=Object(p.a)(j.a.mark((function t(e,n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O("transfer/",{contactEmail:e,amount:n});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function jt(){return(jt=Object(p.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m("transfer/");case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function pt(){return(pt=Object(p.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m("transfer/".concat(e));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}var bt=function(){return function(){var t=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ut.getTransfers();case 2:n=t.sent,e({type:"SET_TRANSFERS",transfers:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},dt=n.p+"static/media/contact.42200432.png",ft=n(216),ht=n(220),mt=n(219),Ot=n(215),xt=n(217),gt=n(218),vt=n(214),wt=function(t){var e=t.rows,n=t.title,c=Object(i.c)((function(t){return t.userReducer.user}));return Object(B.jsxs)(Ot.a,{component:vt.a,children:[Object(B.jsx)(H.a,{variant:"h4",children:n}),Object(B.jsxs)(ft.a,{sx:{minWidth:650},"aria-label":"sticky table",children:[Object(B.jsx)(xt.a,{children:Object(B.jsxs)(gt.a,{hover:!0,role:"checkbox",children:[Object(B.jsx)(mt.a,{children:"Date"}),Object(B.jsx)(mt.a,{children:"From"}),Object(B.jsx)(mt.a,{children:"To"}),Object(B.jsx)(mt.a,{children:"Amount"}),Object(B.jsx)(mt.a,{children:"Balance"})]})}),Object(B.jsx)(ht.a,{children:e.map((function(t){return Object(B.jsxs)(gt.a,{hover:!0,sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(B.jsx)(mt.a,{children:new Date(t.createdAt).toLocaleDateString()}),t.from===c.email?Object(B.jsx)(mt.a,{children:c.fullname}):Object(B.jsx)(mt.a,{children:t.from}),t.to===c.email?Object(B.jsx)(mt.a,{children:c.fullname}):Object(B.jsx)(mt.a,{children:t.to}),Object(B.jsx)(mt.a,{className:c.email===t.to?"amount-plus":"amount-minus",children:c.email===t.to?"+".concat(t.amount):"-".concat(t.amount)}),Object(B.jsx)(mt.a,{children:'"TO_FIX"'})]},t._id)}))})]})]})},yt=n.p+"static/media/edit.b0c1b178.png",Et="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFIElEQVR4nO2bTWxVRRTHfxYeVmyND+PKtiKlQEwUAvhR2tT6sXCjyIaouC5GbUyURFAXbN2aiHEpfiE7UWMMMaZqJSIfsgGkr4ro2oJ9RbDYujj3cs9ML7fv3TszvEr/yUvmZWbO+c/cOTNnZs7APOZxTeO6ADoWAuuBDcBKoAtoB1qBxVGZ88A4cAaoACeB74HDwKUAHJ2jBdgCfApUgemcv3FgH/B0JLPhsRx4G5ggf6Ov9KsCu4BOl4RdmUA78AawGViQkv8z8A0ypCvAaeBPpFEgX3cJsBQxkXVAH7AiRda/wB5gO/CHI/65sQh4jfQvfgR4GemcvOgAtgFHU+RXgVeBUgH5hXA7MlFpUlOI3T/iQV8vsBeZFLXOHxHTC4pNwDmLyEHg3gC670carXWfBZ4IoBuAZzG/wt/AC0BTKAKRrsFId8zjErDVt+IdmD1/HLjLt9IMrEZ8Bs1phy9lWy1FB4BbfCmrA2VgCJPboGslmzCH/T6g2bWSAmhGOGlz2OhKeCfmhDdEYzU+RjPia+iJ8Y6iQhdhzrjHgZuLCvWIMnCChO8PFPQTXlfCznN1J7xasRpzdcg9KXZgenjPuWAXCIOYG6q2PEI+whxKIdf5omgCDpHwf69eAV0ks/4UYTw81+hGuMerwrJ6Kr9D0nufOKcWDp+TtOOtWiu1Ytp+rxdqstX9BRhFRpwPPIC5e7yxlkrPqEpHPRED2cp6d1+BY0rPk3Zm2sSmC33oiRSIjxHjeo969qj0rB1QAvrV/70+GAWGbsODyCHtZdgdsJ7ETirAb/54BcMoSTtuAtboTLsDulX6W4+kQmNIpXt0ht0Bq1T6iDc64aEn85U6w+4AvRyNeKMTHrotxpJrd4D2mU97oxMev6q0cUq90Cqob1/OFVC4AjmQyNo/9FjpVzLKTiEe6amcfM6qdGtWwXESpyGz4CwYVXJc/SoF+LQqOX/pjLm0w/MC2wSqJGbQgoyIPHgU8bqyfO9eEjMYBr7LKDuB6dHVCz2aM9s0QjJUVmUVdICdStdOz7ruVLpO6gzbBH5X6br2zw0O3ZYzOsPugCuul3Mc+u7QmEztDtDDY503OuGxVqUzTeCASvfz/0GfSg/rDLsDDiMzLojHFPza2QOWI1f5ID7ATzrT7oBJ4Gv1f8YBwhzEZpX+CokwuYw0R0ivt0/5YBThH5W+6FGP/ogf11KhBfNQ9GEPpED2C5Xo52vF6ce8IFmcXTzBLlXxSy/UwuALkna8WU/FTszr8L7s4g2JHpKLkUly3BR/QNIBx0gPf2tULEBWtJj/u3mEtGNGeW5zxS4AXsS0/dvyCtKXFxeBe1yw84w1wAUS3lkHLbOihNwMx8JGgVsLEvSJJUhUqo5jKhxIuQw5UtKBiY0YuHwDcpQf8xzDQYhMjI2Yq8J+arxoDIS0IKnHXCsZUAriyNBGMIcyZnDUNBK46QV2oOQI5lYzNO7GDIryfdMMSMCkNocLyLITOlT2eWaGyg6EIvA45sQ4jcTkdGdVcoT7EPPTusfwYPOzoQM5XLDP7/djXUA6wlpgNzPD5Q/i+BVJPSghzlLau6BDwEvkDFGL0BbJsMPjYw9vO1fxwYRGG/A+M79O/DuBBF4NAA8hT2PKiC03RemlUd5AVNae3LSt76aAe+sTnfh7NDWBbNPnxHF9CxJs9RnFns1VEQdnC568zxAPJ0vIJmoDctvUhZhMGWlU/HXHkFdgpxB/fhiZRyYDcJzHPK5V/AcZyuFxZOEzXgAAAABJRU5ErkJggg==",Nt=n.p+"static/media/minus.fdcf7131.png",St=function(t){var e=Object(i.c)((function(t){return t.userReducer.user})),n=Object(c.useState)(!1),r=Object(z.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(null),u=Object(z.a)(o,2),l=u[0],b=u[1],d=Object(c.useState)(null),f=Object(z.a)(d,2),h=f[0],m=f[1],O=Object(c.useState)(null),x=Object(z.a)(O,2),g=x[0],v=x[1],w=Object(i.c)((function(t){return t.transferReducer.transfers})),y=Object(i.b)(),E=a?Nt:Et;Object(c.useEffect)((function(){e?w.length||y(bt()):y(D())}),[e,w.length,y]),Object(c.useEffect)((function(){if(e){var n=t.match.params.id,c=e.contacts.find((function(t){return t._id===n}));b(c)}}),[e,t.match.params.id]),Object(c.useEffect)((function(){if(l&&w){var t=w.filter((function(t){return l.contactEmail===t.to||l.contactEmail===t.from}));t.length&&(v(t),m(a?t:t.slice(0,3)))}}),[a,w,l]);return l?Object(B.jsxs)("div",{className:"contact-details-page",children:[Object(B.jsxs)("div",{className:"contact-details",children:[Object(B.jsx)(U,{Icon:function(){return Object(B.jsx)("img",{src:yt,alt:""})},onClick:function(){t.history.push("/contact/edit/".concat(l._id))},className:"edit-logo"}),Object(B.jsx)("div",{className:"contact-img-details",children:l.contactImg?Object(B.jsx)("img",{src:l.contactImg,alt:"",className:"contact-img"}):Object(B.jsx)("img",{src:dt,alt:"",className:"contact-img"})}),Object(B.jsxs)("p",{children:["Name: ",l.contactName]}),Object(B.jsxs)("p",{children:["Email: ",l.contactEmail]}),Object(B.jsxs)("p",{children:["Phone: ",l.contactPhone]})]}),Object(B.jsx)(ot,{contact:l,onTransferCoins:function(t,n){if(n.preventDefault(),e.coins<t)return alert("No enough money");var c,r;y((c=l.contactEmail,r=t,function(){var t=Object(p.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ut.addTransfer(c,r);case 2:n=t.sent,e({type:"ADD_TRANSFER",transfer:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}}),g&&Object(B.jsxs)("div",{className:"transfers-by-contact",children:[g.length>3&&Object(B.jsx)(U,{onClick:function(){return s((function(t){return!t}))},Icon:function(){return Object(B.jsx)("img",{src:E,alt:""})},className:"more-less-btn"}),Object(B.jsx)(wt,{title:"Transfers with contact",rows:h})]})]}):Object(B.jsx)("div",{children:"Contact not found..."})},kt=n(9),Ct=n(19),At=function(){var t=Object(p.a)(j.a.mark((function t(e){var n,c,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"mister-bitcoin-present","mister-bitcoin",n="https://api.cloudinary.com/v1_1/".concat("mister-bitcoin","/image/upload"),(c=new FormData).append("file",e.target.files[0]),c.append("upload_preset","mister-bitcoin-present"),t.prev=6,t.next=9,d.a.post(n,c);case 9:return r=t.sent,t.abrupt("return",r.data);case 13:t.prev=13,t.t0=t.catch(6),console.error("ERROR!",t.t0);case 16:case"end":return t.stop()}}),t,null,[[6,13]])})));return function(e){return t.apply(this,arguments)}}(),It=n.p+"static/media/add-contact.1f6972cf.png",Tt=n.p+"static/media/upload.0a143b40.png",Ft=n.p+"static/media/loading.06b4e460.gif",Rt=function(t){var e=Object(i.c)((function(t){return t.userReducer.user})),n=Object(c.useState)(null),r=Object(z.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(!1),u=Object(z.a)(o,2),l=u[0],b=u[1],d=Object(i.b)();Object(c.useEffect)((function(){var n=function(){var t=Object(p.a)(j.a.mark((function t(n){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=n?e.contacts.find((function(t){return t._id===n})):I.getEmptyContact(),s(c);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e?n(t.match.params.id):d(D())}),[d,e,t.match.params.id]);var f=function(){var t=Object(p.a)(j.a.mark((function t(e){var n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.target.name,"file"!==e.target.type){t.next=9;break}return b(!0),t.next=5,At(e);case 5:c=t.sent.url,b(!1),t.next=10;break;case 9:c="number"===e.target.type?+e.target.value:e.target.value;case 10:s(Object(Ct.a)(Object(Ct.a)({},a),{},Object(kt.a)({},n,c)));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(e){e.preventDefault(),d(function(t){return function(){var e=Object(p.a)(j.a.mark((function e(n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.saveContact(t);case 2:c=e.sent,n({type:"SET_USER",user:c});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(a)),t.history.push("/contact")};return a?Object(B.jsx)("div",{className:"contact-edit",children:Object(B.jsxs)("form",{onSubmit:h,children:[Object(B.jsxs)("div",{className:"contact-name",children:[Object(B.jsx)("label",{htmlFor:"contactName",children:"Fullname"}),Object(B.jsx)("input",{required:!0,type:"text",id:"contactName",value:a.contactName,onChange:f,name:"contactName"})]}),Object(B.jsxs)("div",{className:"contact-email",children:[Object(B.jsx)("label",{htmlFor:"contactEmail",children:"Email Address"}),Object(B.jsx)("input",{required:!0,type:"text",id:"contactEmail",value:a.contactEmail,onChange:f,name:"contactEmail"})]}),Object(B.jsxs)("div",{className:"contact-phone",children:[Object(B.jsx)("label",{htmlFor:"contactPhone",children:"Phone Number"}),Object(B.jsx)("input",{required:!0,type:"text",id:"contactPhone",value:a.contactPhone,onChange:f,name:"contactPhone"})]}),Object(B.jsxs)("div",{className:"contact-img",children:[Object(B.jsx)("label",{htmlFor:"contactImg",children:Object(B.jsx)("img",{src:Tt,alt:""})}),l?Object(B.jsx)("img",{src:Ft,alt:""}):Object(B.jsx)("label",{htmlFor:"contactImg",children:Object(B.jsx)("img",{src:a.contactImg,alt:""})}),Object(B.jsx)("input",{hidden:!0,type:"file",id:"contactImg",onChange:f,name:"contactImg"})]}),Object(B.jsx)("div",{className:"actions-btn",children:Object(B.jsx)(U,{Icon:function(){return Object(B.jsx)("img",{src:It,alt:""})},onClick:h,className:"add-contact-btn"})})]})}):Object(B.jsx)("h1",{children:"Contact not found"})},Dt=function(t){return Object(B.jsxs)("form",{className:"contact-filter",onSubmit:function(t){return t.preventDefault()},children:[Object(B.jsx)("label",{htmlFor:"term",children:"Search contact"}),Object(B.jsx)("input",{type:"text",id:"term",name:"term",onChange:function(e){var n=e.target;t.onChangeFilter(n.value)},placeholder:"Search..."})]})},Bt=function(t){var e=t.contact;return Object(B.jsx)(o.b,{to:"/contact/".concat(e._id),children:Object(B.jsxs)("div",{className:"contact-preview",children:[e.contactImg?Object(B.jsx)("img",{src:e.contactImg,alt:""}):Object(B.jsx)("img",{src:dt,alt:""}),Object(B.jsx)("p",{children:e.contactName}),Object(B.jsx)("p",{children:e.contactEmail}),Object(B.jsx)("p",{children:e.contactPhone})]})})},Ut=function(t){var e=t.contacts;return Object(B.jsx)("ul",{className:"contact-list",children:e.map((function(t){return Object(B.jsx)("li",{children:Object(B.jsx)(Bt,{contact:t})},t._id)}))})},Pt=function(t){var e=t.history,n=Object(c.useState)(null),r=Object(z.a)(n,2),a=(r[0],r[1]),s=Object(i.c)((function(t){return t.userReducer.user})),o=Object(c.useState)(null),u=Object(z.a)(o,2),l=u[0],j=u[1],p=Object(i.b)();Object(c.useEffect)((function(){var t;s?(null===(t=s.contacts)||void 0===t?void 0:t.length)&&j(s.contacts):p(D())}),[p,s]);return Object(B.jsxs)("div",{className:"contact-page",children:[Object(B.jsxs)("div",{className:"contact-header",children:[Object(B.jsx)(Dt,{onChangeFilter:function(t){a(t)}}),Object(B.jsx)(U,{Icon:function(){return Object(B.jsx)("img",{src:V,alt:""})},onClick:function(){e.push("/contact/edit")},className:"add-contact-btn"})]}),l?Object(B.jsx)(Ut,{contacts:l}):Object(B.jsx)("h1",{children:"No contacts..."})]})},Lt=n(47),zt={getRate:function(){return Gt.apply(this,arguments)},getMarketPrice:function(){return Ht.apply(this,arguments)},getConfirmedTransactions:function(){return Mt.apply(this,arguments)}};function Gt(){return(Gt=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Lt.get("https://blockchain.info/tobtc?currency=USD&value=1");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function Ht(){return(Ht=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Lt.get("https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function Mt(){return(Mt=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Lt.get("https://blockchain.info/tobtc?currency=USD&value=1");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error("bitcoin service: get rate: cant fetch rate data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}var Xt=n(109),Jt=n(105),Vt=n(212),_t=n(206),Qt=["children"],qt=c.forwardRef((function(t,e){var n=t.children,c=Object(Xt.a)(t,Qt);return Object(B.jsxs)("svg",Object(Ct.a)(Object(Ct.a)({width:"150",height:"50"},c),{},{ref:e,children:[Object(B.jsx)("polygon",{points:"0,50 0,0 150,0 150,50",className:"bg"}),Object(B.jsx)("polygon",{points:"0,50 0,0 150,0 150,50",className:"borderEffect"}),Object(B.jsx)("foreignObject",{x:"0",y:"0",width:"150",height:"50",children:Object(B.jsx)("div",{className:"content",children:n})})]}))})),Yt=Object(_t.a)(qt)((function(t){var e=t.theme;return"\n  overflow: visible;\n  cursor: pointer;\n  --main-color: ".concat("light"===e.palette.mode?"rgb(25,118,210)":"rgb(144,202,249)",";\n  --hover-color: ").concat("light"===e.palette.mode?"rgba(25,118,210,0.04)":"rgba(144,202,249,0.08)",";\n  --active-color: ").concat("light"===e.palette.mode?"rgba(25,118,210,0.12)":"rgba(144,202,249,0.24)",";\n\n  & polygon {\n    fill: transparent;\n    transition: all 800ms ease;\n    pointer-events: none;\n  }\n  \n  & .bg {\n    stroke: var(--main-color);\n    stroke-width: 0.5;\n    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));\n    fill: transparent;\n  }\n\n  & .borderEffect {\n    stroke: var(--main-color);\n    stroke-width: 2;\n    stroke-dasharray: 150 600;\n    stroke-dashoffset: 150;\n    fill: transparent;\n  }\n\n  &:hover,\n  &.").concat(Jt.a.focusVisible," {\n    .borderEffect {\n      stroke-dashoffset: -600;\n    }\n\n    .bg {\n      fill: var(--hover-color);\n    }\n  }\n\n  &:focus,\n  &.").concat(Jt.a.focusVisible," {\n    outline: none;\n  }\n\n  &.").concat(Jt.a.active," { \n    & .bg {\n      fill: var(--active-color);\n      transition: fill 300ms ease-out;\n    }\n  }\n\n  & foreignObject {\n    pointer-events: none;\n\n    & .content {\n      font-family: Helvetica, Inter, Arial, sans-serif;\n      font-size: 14px;\n      font-weight: 200;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: var(--main-color);\n      text-transform: uppercase;\n    }\n\n    & svg {\n      margin: 0 5px;\n    }\n  }")})),Wt=c.forwardRef((function(t,e){return Object(B.jsx)(Vt.a,Object(Ct.a)(Object(Ct.a)({},t),{},{component:Yt,ref:e}))})),Kt=function(){var t=Object(u.f)();return Object(B.jsx)(Wt,{onClick:function(){return t.push("/signup")},children:"Register Now"})},Zt=function(t){var e=t.history,n=Object(c.useState)(0),r=Object(z.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(!1),u=Object(z.a)(o,2),l=u[0],b=u[1],d=Object(c.useState)(null),f=Object(z.a)(d,2),h=f[0],m=f[1],O=Object(i.c)((function(t){return t.userReducer.user})),x=Object(i.c)((function(t){return t.transferReducer.transfers})),g=Object(i.b)(),v=Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(1/a),w=O?Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0}).format(1/a*O.coins):null;Object(c.useEffect)((function(){O||g(D())}),[O,g]),console.log({transfers:x}),Object(c.useEffect)((function(){O&&!h&&g(bt())}),[g,O,x,h]),Object(c.useEffect)((function(){var t=function(){var t=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,zt.getRate();case 2:e=t.sent,s(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();O&&!a&&t()}),[a,O]),Object(c.useEffect)((function(){O&&x.length&&m(l?x:x.slice(0,3))}),[l,x,O]);var y=l?Nt:Et,E=l?"All Transfers":"Last 3 Transfers",N=(null===O||void 0===O?void 0:O.coins)?"amount-plus":"amount-minus";return O?Object(B.jsxs)("div",{className:"home-page logged-user",children:[Object(B.jsxs)("div",{className:"user-balance",children:[Object(B.jsx)("h4",{children:"Wallet Balance:"}),Object(B.jsx)("h2",{className:N,children:w}),Object(B.jsxs)("h3",{children:["You have"," ",Object(B.jsx)("span",{className:N,children:O.coins.toFixed(2)})," ","bitcoins"]}),Object(B.jsxs)("h4",{children:["1 Bitcoin: ",v]})]}),h&&Object(B.jsxs)("div",{className:"transfers-table",children:[x.length>3&&Object(B.jsx)(U,{onClick:function(){return b((function(t){return!t}))},Icon:function(){return Object(B.jsx)("img",{src:y,alt:""})},className:"more-less-btn"}),Object(B.jsx)(wt,{title:E,rows:h})]})]}):Object(B.jsx)("div",{className:"home-page guest",children:Object(B.jsxs)("div",{className:"guest-welcome",children:[Object(B.jsx)("h1",{children:"Welcome to Mister Bitcoin"}),Object(B.jsx)("h3",{children:"Demo bitcoin wallet"}),Object(B.jsx)(Kt,{}),Object(B.jsx)("p",{onClick:function(){return e.push("/signup/login")},children:"Already registered? login"})]})})},$t=function(){var t=Object(c.useState)(null),e=Object(z.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(null),s=Object(z.a)(a,2),o=s[0],l=s[1],b=Object(c.useState)(null),d=Object(z.a)(b,2),f=d[0],h=d[1],m=Object(c.useState)(null),O=Object(z.a)(m,2),x=O[0],g=O[1],v=Object(c.useState)(!1),w=Object(z.a)(v,2),E=w[0],N=w[1],S=Object(c.useState)(!1),k=Object(z.a)(S,2),C=k[0],A=k[1],I=(Object(i.c)((function(t){return t.userReducer.user})),Object(i.b)()),T=Object(u.f)(),F=function(t){var e=t.target,c=e.name,a="number"===e.value?+e.value:e.value;r(Object(Ct.a)(Object(Ct.a)({},n),{},Object(kt.a)({},c,a)))};return E?Object(B.jsx)("img",{className:"login-loading",src:Ft,alt:""}):Object(B.jsxs)("div",{className:"login",children:[Object(B.jsx)("h1",{children:"Login"}),Object(B.jsxs)("form",{className:"login-form",onSubmit:function(t){N(!0),t.preventDefault(),I(function(t){return function(){var e=Object(p.a)(j.a.mark((function e(n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.login(t);case 3:c=e.sent,n({type:"SET_USER",user:c}),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}(n)).then((function(){T.push("/")})).catch((function(t){N(!1),A(!0),setTimeout((function(){A(!1)}),1500),"Invalid email"===t.response.data&&(l("error-input"),h("Invalid email"),setTimeout((function(){l(null)}),1500)),"Invalid password"===t.response.data&&(g("error-input"),h("Invalid password"),setTimeout((function(){g(null)}),1500))}))},children:[Object(B.jsx)("label",{htmlFor:"email",children:"Email"}),Object(B.jsx)("input",{className:o,required:!0,type:"text",id:"email",onChange:F,name:"email",placeholder:"Ex.. israeli2021@gmail.com"}),Object(B.jsx)("label",{htmlFor:"password",children:"Password"}),Object(B.jsx)("input",{className:x,required:!0,type:"password",id:"password",onChange:F,name:"password",placeholder:"Ex.. !#@fdsf54%"}),Object(B.jsx)("button",{children:"Login"}),Object(B.jsx)("p",{onClick:function(){return T.push("/signup")},children:"Register now"})]}),C&&Object(B.jsx)("div",{className:"error-msg",children:Object(B.jsx)("h1",{children:f})})]})},te=function(){var t=Object(c.useState)(null),e=Object(z.a)(t,2),n=e[0],r=e[1],a=Object(i.b)(),s=Object(u.f)(),o=function(){var t=Object(p.a)(j.a.mark((function t(e){var c,a,s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=e.target,a=c.name,s="number"===c.value?+c.value:c.value,r(Object(Ct.a)(Object(Ct.a)({},n),{},Object(kt.a)({},a,s)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(p.a)(j.a.mark((function t(e){var n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.target.value,t.next=3,y.isSigned(n);case 3:c=t.sent,console.log({isSigned:c});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(B.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a(function(t){return function(){var e=Object(p.a)(j.a.mark((function e(n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.signup(t);case 3:c=e.sent,n({type:"SET_USER",user:c}),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}(n)).then((function(){s.push("/")})).catch((function(t){console.log(t.response.data)}))},children:[Object(B.jsx)("h1",{children:"Signup"}),Object(B.jsx)("label",{htmlFor:"fullname",children:"Full name"}),Object(B.jsx)("input",{required:!0,type:"text",id:"fullname",onChange:o,name:"fullname",placeholder:"Ex.. Israel Israeli"}),Object(B.jsx)("label",{htmlFor:"password",children:"Password"}),Object(B.jsx)("input",{required:!0,type:"password",id:"password-login",onChange:o,name:"password",placeholder:"Ex.. !#@fdsf54%"}),Object(B.jsx)("label",{htmlFor:"email",children:"Email"}),Object(B.jsx)("input",{required:!0,type:"text",id:"email-login",onChange:o,onBlur:l,name:"email",placeholder:"Ex.. israeli2021@gmail.com"}),Object(B.jsx)("label",{htmlFor:"phone",children:"Phone number"}),Object(B.jsx)("input",{required:!0,type:"text",id:"phone",onChange:o,name:"phone",placeholder:"Ex.. 05x-xxxxxxx"}),Object(B.jsx)("button",{children:"Sign up"}),Object(B.jsx)("p",{onClick:function(){return s.push("/signup/login")},children:"Already registered? login"})]})},ee=function(t){var e=Object(c.useState)("Login"),n=Object(z.a)(e,2),r=n[0],a=n[1];Object(c.useEffect)((function(){var e=t.history.location.pathname;a("/signup/login"===e?"Login":"SignUp")}),[t.history.location]);var s={SignUp:te,Login:$t}[r];return Object(B.jsx)("div",{className:"signup-page",children:Object(B.jsx)(s,{})})},ne=n(69),ce=function(t){t.title;var e=t.data,n=t.description;return Object(B.jsxs)("div",{className:"chart",children:[Object(B.jsx)("h1",{children:n}),Object(B.jsxs)(ne.Sparklines,{data:e,children:[Object(B.jsx)(ne.SparklinesLine,{color:"red"}),Object(B.jsx)(ne.SparklinesSpots,{size:1})]})]})},re=function(){var t=Object(c.useState)(null),e=Object(z.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(null),s=Object(z.a)(a,2),i=s[0],o=s[1];return Object(c.useEffect)((function(){var t=function(){var t=Object(p.a)(j.a.mark((function t(){var e,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,zt.getMarketPrice();case 3:e=t.sent,r(e),n=e.values.map((function(t){return t.y})),o(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.response.data);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),n&&i&&Object(B.jsxs)("div",{className:"statistic-page",children:[Object(B.jsx)("h1",{children:"Statistic page:"}),Object(B.jsx)(ce,{title:n.name,description:n.description,data:i,color:"red"})]})},ae=function(){var t=Object(i.c)((function(t){return t.userReducer.user})),e=t.img?t.img:dt;return Object(B.jsx)("div",{className:"user-details-page",children:Object(B.jsxs)("div",{className:"user-details",children:[Object(B.jsx)("img",{src:e,alt:""}),Object(B.jsxs)("p",{children:["Fullname: ",t.fullname]}),Object(B.jsxs)("p",{children:["Phone: ",t.phone]}),Object(B.jsxs)("p",{children:["Email: ",t.email]})]})})},se=function(){return Object(B.jsx)(o.a,{children:Object(B.jsxs)("div",{className:"App main-layout",children:[Object(B.jsx)(st,{}),Object(B.jsxs)(u.c,{children:[Object(B.jsx)(u.a,{component:Rt,path:"/contact/edit/:id?"}),Object(B.jsx)(u.a,{component:St,path:"/contact/:id"}),Object(B.jsx)(u.a,{component:Pt,path:"/contact"}),Object(B.jsx)(u.a,{component:ae,path:"/user"}),Object(B.jsx)(u.a,{component:re,path:"/statistic"}),Object(B.jsx)(u.a,{component:ee,path:"/signup"}),Object(B.jsx)(u.a,{component:Zt,path:"/"})]}),Object(B.jsx)(q,{})]})})},ie=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,224)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),a(t),s(t)}))},oe=n(56),ue=n(25),le={transfers:[]};var je={user:null},pe=n(106),be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||oe.c,de=Object(oe.b)({transferReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_TRANSFERS":return Object(Ct.a)(Object(Ct.a)({},t),{},{transfers:e.transfers});case"ADD_TRANSFER":return Object(Ct.a)(Object(Ct.a)({},t),{},{transfers:[].concat(Object(ue.a)(t.transfers),[e.transfer])});default:return t}},userReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,e=arguments.length>1?arguments[1]:void 0;switch(console.log(e),e.type){case"SET_USER":return Object(Ct.a)(Object(Ct.a)({},t),{},{user:e.user});case"LOGOUT":return Object(Ct.a)(Object(Ct.a)({},t),{},{user:null});default:return t}}}),fe=Object(oe.d)(de,be(Object(oe.a)(pe.a)));n(154);s.a.render(Object(B.jsx)(r.a.StrictMode,{children:Object(B.jsx)(i.a,{store:fe,children:Object(B.jsx)(se,{})})}),document.getElementById("root")),ie()}},[[155,1,2]]]);
//# sourceMappingURL=main.254c5030.chunk.js.map