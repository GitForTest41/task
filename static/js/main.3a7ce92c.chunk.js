(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{76:function(e,n,t){"use strict";t.r(n);var r,a,c,o,s,i,u,l,d,b,h,p,j,x,f,O,g=t(0),m=t.n(g),w=t(13),v=t.n(w),k=t(3),y=t(2),C=t(4),L=t.n(C),S=t(5),E=t(6),M=t(14),D=t.n(M),T=function(){var e=Object(S.a)(L.a.mark((function e(n){var t,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D()({method:"post",url:"https://recruitment.ultimate.systems/auth/local",data:{identifier:n.login,password:n.password}});case 3:return t=e.sent,r=t.data.user.confirmed,e.next=7,localStorage.setItem("jwt",t.data.jwt);case 7:return e.abrupt("return",{confirmed:r});case 10:throw e.prev=10,e.t0=e.catch(0),new Error("");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}(),z=t(1),I=Object(g.createContext)({}),P=function(e){var n=e.children,t=Object(g.useState)(null),r=Object(E.a)(t,2),a=r[0],c=r[1],o=function(){var e=Object(S.a)(L.a.mark((function e(n){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T(n);case 3:return t=e.sent,e.next=6,c(t);case 6:e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Something bad happend");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),s=function(){c(null),localStorage.removeItem("jwt")};return Object(g.useEffect)((function(){Object(S.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("jwt")){e.next=5;break}c(!0),e.next=7;break;case 5:return e.next=7,s();case 7:case"end":return e.stop()}}),e)})))()})),Object(z.jsx)(I.Provider,{value:{user:a,setUser:c,singIn:o,singOut:s},children:n})},F=function(){var e=Object(g.useContext)(I);if(!e)throw new Error("Incorrect context for hook");return e},V=y.c.svg(r||(r=Object(k.a)(["\n  cursor: pointer;\n"]))),_=function(){var e=F().singOut;return Object(z.jsxs)(V,{width:"85",height:"85",viewBox:"0 0 85 85",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:e,children:[Object(z.jsxs)("g",{clipPath:"url(#clip0_7:263)",children:[Object(z.jsx)("path",{d:"M53.1244 46.0425C51.166 46.0425 49.583 47.6293 49.583 49.5839V63.7508C49.583 65.7021 47.9962 67.2922 46.041 67.2922H35.4161V14.1678C35.4161 11.1432 33.4894 8.44097 30.5926 7.43516L29.544 7.08432H46.041C47.9962 7.08432 49.583 8.67442 49.583 10.6264V21.2513C49.583 23.2058 51.166 24.7927 53.1244 24.7927C55.0829 24.7927 56.6659 23.2058 56.6659 21.2513V10.6264C56.6659 4.76856 51.8988 0.00149536 46.041 0.00149536H7.96867C7.83378 0.00149536 7.72094 0.0618052 7.58995 0.0793143C7.41939 0.0650476 7.25662 0.00149536 7.08348 0.00149536C3.17696 0.00149536 0 3.17781 0 7.08432V70.8337C0 73.8582 1.92667 76.5605 4.82348 77.5663L26.1375 84.6712C26.8599 84.8943 27.5784 85.0006 28.3333 85.0006C32.2398 85.0006 35.4161 81.8236 35.4161 77.9171V74.3757H46.041C51.8988 74.3757 56.6659 69.6087 56.6659 63.7508V49.5839C56.6659 47.6293 55.0829 46.0425 53.1244 46.0425Z",fill:"#FF9900"}),Object(z.jsx)("path",{d:"M83.9616 32.9134L69.7946 18.7471C68.7823 17.7341 67.259 17.4293 65.9348 17.978C64.6138 18.5272 63.7494 19.8197 63.7494 21.2509V31.8758H49.5831C47.6279 31.8758 46.041 33.462 46.041 35.4172C46.041 37.3724 47.6279 38.9586 49.5831 38.9586H63.7494V49.5835C63.7494 51.0147 64.6138 52.3072 65.9348 52.8564C67.259 53.4051 68.7823 53.1003 69.7946 52.088L83.9616 37.921C85.3461 36.5365 85.3461 34.2979 83.9616 32.9134Z",fill:"#FF9900"})]}),Object(z.jsx)("defs",{children:Object(z.jsx)("clipPath",{id:"clip0_7:263",children:Object(z.jsx)("rect",{width:"85",height:"85",fill:"white"})})})]})},B=y.c.div(a||(a=Object(k.a)(["\n  width: 100%;\n  height: 15%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n"]))),A=y.c.h1(c||(c=Object(k.a)(["\n  font-weight: bold;\n  font-family: 'ZCOOLKuaiLe', serif;\n  font-size: 60px;\n  color: ",";\n"])),(function(e){return e.theme.colors.orange})),H=function(){return Object(z.jsxs)(B,{children:[Object(z.jsx)(A,{children:"ToDo-List"}),Object(z.jsx)(_,{})]})},Z=y.c.div(o||(o=Object(k.a)(["\n  width: 100%;\n  height: 100vh;\n  background: ",";\n  margin: 0;\n  padding: 20px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: center;\n"])),(function(e){return e.theme.colors.black})),N=function(e){var n=e.children;return Object(z.jsxs)(Z,{children:[Object(z.jsx)(H,{}),n]})},R=t(15),X=t(8),U=t(7),K=t(22),G=Object(g.createContext)({}),W=function(e){var n=e.children,t=Object(g.useState)(null),r=Object(E.a)(t,2),a=r[0],c=r[1],o=Object(g.useCallback)((function(e){c(e),setTimeout((function(){c("")}),4e3)}),[]);return Object(z.jsxs)(G.Provider,{value:{error:a,dispatchError:o,handleToast:function(e){K.b.success(e,{className:"custom-toast",position:K.b.POSITION.TOP_RIGHT,style:{background:"grey",color:"orange"}})}},children:[Object(z.jsx)(K.a,{}),n]})},Y=function(){var e=Object(g.useContext)(G);if(!e)throw Error("Use Error needs to be used inside ErrContext ");return e},$=y.c.input(s||(s=Object(k.a)(["\n  width: 400px;\n  height: 40px;\n  border: 1px solid #c0c7d6;\n  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);\n  border-radius: 25px;\n  margin: 15px;\n  padding: 10px;\n\n  &:focus {\n    outline: none;\n    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);\n  }\n"]))),J=function(e){var n=e.label,t=e.name,r=e.id,a=e.type,c=e.value,o=e.onChange,s=e.onMouseMoveFunc;return Object(z.jsx)($,{name:t,id:r,type:a,onChange:o,value:c,placeholder:n,onMouseMove:s})},q=y.c.button(i||(i=Object(k.a)(["\n  cursor: pointer;\n  border-radius: 15px;\n  width: ",";\n  height: ",";\n  background-color: ",";\n  border: ",";\n  color: ",";\n  font-size: ",";\n  margin: ",";\n  font-size: 1em;\n  margin-right: ","\n\n  :hover {\n    box-shadow: 0 10px 20px -15px grey;\n  }\n"])),(function(e){return e.width}),(function(e){return e.height}),(function(e){return e.background}),(function(e){return e.border}),(function(e){return e.color}),(function(e){return e.fontSize}),(function(e){return e.margin}),(function(e){return e.marginRight})),Q=function(e){var n=e.name,t=e.func,r=e.type,a=e.disabled,c=e.styles;return Object(z.jsx)(q,Object(X.a)(Object(X.a)({name:n,onClick:t,type:r,disabled:a},c),{},{children:n}))},ee=y.c.div(u||(u=Object(k.a)(["\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 50%;\n  height: 80%;\n  padding: 30px;\n  min-width: 400px;\n  border-radius: 8px;\n"])),(function(e){return e.theme.colors.gray})),ne=(y.c.div(l||(l=Object(k.a)(["\n  display: flex;\n  align-items: center;\n"]))),y.c.h1(d||(d=Object(k.a)(["\n  color: ",";\n  font-weight: bold;\n"])),(function(e){return e.theme.colors.orange}))),te=y.c.div(b||(b=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px;\n"]))),re=t(12),ae=(Object(y.c)(re.b)(h||(h=Object(k.a)(["\n  color: orange;\n"]))),y.c.div(p||(p=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  span {\n    color: white;\n  }\n"])))),ce=y.c.h1(j||(j=Object(k.a)(["\n  color: orange;\n  cursor: pointer;\n"]))),oe=function(e){return e.length>3},se={login:"",password:""},ie=function(){var e=Object(g.useState)(Object(X.a)({},se)),n=Object(E.a)(e,2),t=n[0],r=n[1],a=Object(U.g)(),c=Y(),o=c.dispatchError,s=c.handleToast,i=F().singIn,u=Object(g.useCallback)((function(e){e.persist(),r((function(n){return Object(X.a)(Object(X.a)({},n),{},Object(R.a)({},e.target.name,e.target.value))}))}),[]),l=function(){var e=Object(S.a)(L.a.mark((function e(n){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n.preventDefault(),oe(t.login)||oe(t.password)){e.next=5;break}return o("Invalid Login"),e.abrupt("return");case 5:return e.next=7,i(t);case 7:return e.next=9,s("login is completed");case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),o("User is not exist, try again, if it does not work contact to your support!!");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n){return e.apply(this,arguments)}}(),d=Object(g.useCallback)((function(){return a.push("/register")}),[a]);return Object(z.jsxs)(ee,{children:[Object(z.jsx)(ne,{children:"Login"}),Object(z.jsxs)(te,{as:"form",onSubmit:l,children:[Object(z.jsx)(J,{label:"Email or Username",name:"login",id:"login",type:"text",onChange:u,value:t.login}),Object(z.jsx)(J,{label:"Password",name:"password",id:"password",type:"password",onChange:u,value:t.password}),Object(z.jsx)(Q,{name:"Login",styles:{width:"60%",height:"40%",background:"orange",margin:"10px"}})]}),Object(z.jsxs)(ae,{children:[Object(z.jsx)("span",{children:"or"}),Object(z.jsx)(ce,{onClick:d,children:"Create an account "})]})]})},ue=y.c.input(x||(x=Object(k.a)(["\n  width: 400px;\n  height: 40px;\n  border: 1px solid #c0c7d6;\n  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);\n  border-radius: 25px;\n  margin: 10px;\n  padding: 10px;\n\n  &:focus {\n    outline: none;\n    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);\n  }\n"]))),le=y.c.div(f||(f=Object(k.a)([""]))),de=y.c.div(O||(O=Object(k.a)([""]))),be=Object(g.createContext)({}),he=function(){var e=Object(g.useContext)(be);if(!e)throw new Error("useToDosList must be used inside ToDosListsProvider");return e},pe=function(e){var n=e.children,t=Object(g.useState)([]),r=Object(E.a)(t,2),a=r[0],c=r[1],o=Object(g.useState)([]),s=Object(E.a)(o,2),i=s[0],u=s[1];return Object(z.jsx)(be.Provider,{value:{toDosLists:a,deleteListFromState:function(e){var n=a.filter((function(n){return n.id!==e}));c(n)},setToDosLists:c,setFilteredList:u,filteredList:i},children:n})},je=function(){var e=Object(g.useState)(""),n=Object(E.a)(e,2),t=n[0],r=n[1],a=he(),c=a.filteredList,o=a.setToDosLists,s=a.toDosLists,i=Object(g.useCallback)((function(e){return r(e.target.value)}),[t]),u=Object(g.useCallback)((function(e){return c.filter((function(n){return 0===e.length?n:n.name.toLowerCase().includes(e.toLowerCase())?(console.log("ELEMENT",n),n):void 0}))}),[s]);return Object(z.jsxs)(le,{children:[Object(z.jsx)(ue,{placeholder:"Search",onChange:i,value:t,onKeyUp:function(){o(u(t))}}),Object(z.jsx)(de,{})]})},xe=D.a.create({});xe.interceptors.request.use((function(e){var n=localStorage.getItem("jwt")||"";return n&&e&&e.headers&&(e.headers.Authorization="Bearer "+n),e}),(function(e){return Promise.reject(e)}));var fe,Oe,ge,me,we,ve,ke,ye,Ce,Le,Se,Ee,Me,De,Te,ze,Ie,Pe,Fe,Ve,_e,Be,Ae,He,Ze=function(e){return e.map((function(e){return{id:e.id,name:e.name,created_at:e.created_at.substring(0,10),task:e.task}}))},Ne=function(){var e=Object(S.a)(L.a.mark((function e(){var n,t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,xe.get("https://recruitment.ultimate.systems/to-do-lists");case 3:return n=e.sent,t=n.data,e.next=7,Ze(t);case 7:return e.abrupt("return",e.sent);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),Re=function(){var e=Object(S.a)(L.a.mark((function e(n){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,xe({method:"delete",url:"https://recruitment.ultimate.systems/to-do-lists/".concat(n)});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("error occured when delete list");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n){return e.apply(this,arguments)}}(),Xe=function(){var e=Object(S.a)(L.a.mark((function e(n){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,xe.get("https://recruitment.ultimate.systems/to-do-lists?_sort=".concat(n));case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new Error("Sroting error");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}(),Ue=function(){var e=Object(S.a)(L.a.mark((function e(n,t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,xe({method:"put",url:"http://localhost:1337/to-do-lists/".concat(t),data:{name:n.name,task:n.task}});case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new Error("Error occured");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n,t){return e.apply(this,arguments)}}(),Ke=y.c.button(fe||(fe=Object(k.a)(["\n  cursor: pointer;\n  width: 30%;\n  height: 40px;\n  border-radius: 8px;\n  background-color: rgba(255, 255, 255, 1);\n"]))),Ge=function(){var e=he().setToDosLists,n=Y(),t=n.handleToast,r=n.dispatchError,a=function(){var n=Object(S.a)(L.a.mark((function n(){var a,c,o;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Xe("name");case 3:return a=n.sent,c=a.data,n.next=7,Ze(c);case 7:return o=n.sent,e(o),n.next=11,t("this list is sorted  by date");case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),r(n.t0.message);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(){return n.apply(this,arguments)}}();return Object(z.jsx)(Ke,{onClick:a,children:"Sort"})},We=y.c.svg(Oe||(Oe=Object(k.a)(["\n  cursor: pointer;\n  align-self: self-end;\n  margin-top: auto;\n  width: 80px;\n  height: 80px;\n"]))),Ye=function(e){var n=e.handleClick;return Object(z.jsxs)(We,{onClick:n,width:"80",height:"80",viewBox:"0 0 112 112",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(z.jsx)("g",{filter:"url(#filter0_d_6:75)",children:Object(z.jsx)("circle",{cx:"56",cy:"52",r:"52",fill:"white"})}),Object(z.jsx)("line",{x1:"56.5",y1:"15",x2:"56.5",y2:"93",stroke:"#FF9900",strokeWidth:"5"}),Object(z.jsx)("line",{x1:"95",y1:"52.5",x2:"17",y2:"52.5",stroke:"#FF9900",strokeWidth:"5"}),Object(z.jsx)("defs",{children:Object(z.jsxs)("filter",{id:"filter0_d_6:75",x:"0",y:"0",width:"112",height:"112",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[Object(z.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),Object(z.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),Object(z.jsx)("feOffset",{dy:"4"}),Object(z.jsx)("feGaussianBlur",{stdDeviation:"2"}),Object(z.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),Object(z.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_6:75"}),Object(z.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_6:75",result:"shape"})]})})]})},$e=y.c.div(ge||(ge=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n\n  background-color: ",";\n  width: 70%;\n  height: 80%;\n"])),(function(e){return e.theme.colors.black})),Je=y.c.div(me||(me=Object(k.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2%;\n"]))),qe=y.c.div(we||(we=Object(k.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),Qe=y.c.p(ve||(ve=Object(k.a)(["\n  color: white;\n  font-size: 50px;\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),en=t(42),nn=y.c.div(ke||(ke=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  min-width: 70%;\n  min-height: 90%;\n  background-color: ",";\n  border-radius: 15px;\n  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0.3);\n  padding: 2%;\n"])),(function(e){return e.theme.colors.gray})),tn=y.c.input(ye||(ye=Object(k.a)(["\n  width: 100%;\n  height: 40px;\n  border: 1px solid #c0c7d6;\n  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);\n  border-radius: 25px;\n  padding: 2%;\n\n  &:focus {\n    outline: none;\n    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);\n  }\n"]))),rn=y.c.div(Ce||(Ce=Object(k.a)(["\n  margin-top: auto;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),an=y.c.div(Le||(Le=Object(k.a)(["\n  align-self: flex-end;\n  padding: 10px;\n  display: flex;\n  justify-content: flex-end;\n"]))),cn=y.c.hr(Se||(Se=Object(k.a)(["\n  width: 100%;\n  z-index: 2;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  height: 3px;\n  margin-top: 10px;\n  border-radius: 10%;\n  background-color: orange;\n"]))),on=y.c.div(Ee||(Ee=Object(k.a)(["\n  width: 100%;\n  height: 20%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2%;\n"]))),sn=y.c.div(Me||(Me=Object(k.a)(["\n  margin-top: 10px;\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n"]))),un=y.c.input(De||(De=Object(k.a)(["\n  border: none;\n  background-color: ",";\n  color: ",";\n  width: 92%;\n  border-bottom: 2px solid orange;\n"])),(function(e){return e.theme.colors.gray}),(function(e){return e.theme.colors.white})),ln=y.c.input(Te||(Te=Object(k.a)(["\n  width: 5%;\n  height: 15px;\n  border: 2px solid black;\n  background-color: ",";\n  color: green;\n"])),(function(e){return e.theme.colors.gray})),dn=function(e){var n=e.isChecked,t=e.taskName,r=e.onTaskNameChanged,a=e.onCheckedChange,c=Object(g.useCallback)((function(e){return a(e.target.checked)}),[a]),o=Object(g.useCallback)((function(e){return r(e.target.value)}),[r]);return Object(z.jsxs)(sn,{children:[Object(z.jsx)(ln,{type:"checkbox",name:"isDone",checked:n,onChange:c}),Object(z.jsx)(un,{type:"text",name:"taskName",value:t,onChange:o})]})},bn=function(){var e=Object(S.a)(L.a.mark((function e(n){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,xe({method:"post",url:" https://recruitment.ultimate.systems/to-do-lists",data:{name:n.name,task:n.tasks}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),hn=document.getElementById("modal-container"),pn={name:"",isDone:!1},jn=document.createElement("div"),xn=function(e){var n=e.handleCloseModal,t=e.listItem,r=Object(g.useState)([Object(X.a)({},pn)]),a=Object(E.a)(r,2),c=a[0],o=a[1],s=Object(g.useState)(t.name),i=Object(E.a)(s,2),u=i[0],l=i[1],d=he().setToDosLists,b=Y().dispatchError,h=Object(g.useCallback)((function(e){return function(n){o(c.map((function(t,r){return r===e?Object(X.a)(Object(X.a)({},t),{},{name:n}):t})))}}),[c]),p=Object(g.useCallback)((function(e){return function(n){return o(c.map((function(t,r){return r===e?Object(X.a)(Object(X.a)({},t),{},{isDone:n}):t})))}}),[c]),j=Object(g.useCallback)((function(e){return l(e.target.value)}),[]);Object(g.useEffect)((function(){return null===hn||void 0===hn||hn.appendChild(jn),function(){null===hn||void 0===hn||hn.removeChild(jn)}}),[]);var x={name:u,tasks:c},f=function(){var e=Object(S.a)(L.a.mark((function e(r){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.name){e.next=3;break}return b("You cannot add empty list"),e.abrupt("return");case 3:if(e.prev=3,r.preventDefault(),!t.id){e.next=12;break}return e.next=8,Ue(x,t.id);case 8:return e.next=10,n();case 10:e.next=16;break;case 12:return e.next=14,bn(x);case 14:return e.next=16,n();case 16:return e.next=18,Ne();case 18:return a=e.sent,e.next=21,d(a);case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(3),b(e.t0.message);case 26:case"end":return e.stop()}}),e,null,[[3,23]])})));return function(n){return e.apply(this,arguments)}}();return v.a.createPortal(Object(z.jsxs)(nn,{as:"form",onSubmit:f,children:[Object(z.jsxs)(on,{children:[Object(z.jsx)(tn,{placeholder:"List name",name:"name",value:u,onChange:j}),Object(z.jsx)(cn,{})]}),c.map((function(e,n){return Object(z.jsx)(dn,{isChecked:e.isDone,taskName:e.name,onTaskNameChanged:h(n),onCheckedChange:p(n)},n)})),Object(z.jsxs)(an,{children:[Object(z.jsx)(Q,{name:"cancel",styles:{color:"withe",width:"100px",height:"40px",background:"rgba(255, 61, 0, 1)"},func:function(e){e.preventDefault(),console.log("clicked")}}),Object(z.jsx)(Q,{name:"ADD",styles:{color:"withe",width:"100px",height:"40px",background:"rgba(255, 153, 0, 1)"},func:function(){o([].concat(Object(en.a)(c),[Object(X.a)({},pn)]))},type:"button"})]}),Object(z.jsxs)(rn,{children:[Object(z.jsx)(Q,{name:"CANCEL",styles:{width:"130px",height:"50px",background:"rgba(45, 45, 45, 1)",border:"none",color:"orange",fontSize:"50px"},type:"button",func:n}),Object(z.jsx)(Q,{name:"SAVE",styles:{width:"130px",height:"50px",background:"rgba(255, 153, 0, 1)",color:"white",fontSize:"50px",margin:"10px"},type:"submit"})]})]}),jn)},fn=y.c.div(ze||(ze=Object(k.a)(["\n  height: 10%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: whitesmoke;\n  border-radius: 8px;\n  color: ",";\n  background-color: ",";\n  cursor: pointer;\n  padding: 2%;\n  margin-bottom: 20px;\n\n  &:hover {\n    color: orange;\n  }\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.gray})),On=y.c.span(Ie||(Ie=Object(k.a)(["\n  width: 30%;\n"]))),gn=function(e){var n=e.onClickHandle,t=e.id;return Object(z.jsx)("div",{onClick:function(){return n(t)},children:Object(z.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",className:"bi bi-trash",viewBox:"0 0 16 16",children:[Object(z.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(z.jsx)("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]})})},mn=function(e){var n=e.toDosList,t=e.onClick,r=he().setToDosLists,a=function(){var e=Object(S.a)(L.a.mark((function e(n){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Re(n);case 2:return e.next=4,Ne();case 4:return t=e.sent,e.next=7,r(t);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(z.jsxs)(fn,{children:[Object(z.jsx)(On,{onClick:t,children:n.name}),Object(z.jsxs)("span",{children:["Created at:",n.created_at]}),Object(z.jsx)(gn,{onClickHandle:a,id:n.id})]})},wn=t(78),vn=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=Object(g.useState)(e),t=Object(E.a)(n,2),r=t[0],a=t[1];return{Modal:xn,isOpen:r,handleOpenModal:function(){return a(!0)},handleCloseModal:function(){return a(!1)}}}(),n=e.Modal,t=e.isOpen,r=e.handleOpenModal,a=e.handleCloseModal,c=he(),o=c.toDosLists,s=c.setToDosLists,i=c.setFilteredList,u=Y().handleToast,l={name:"",task:[]},d=Object(g.useState)(l),b=Object(E.a)(d,2),h=b[0],p=b[1],j=Object(g.useState)(!0),x=Object(E.a)(j,2),f=x[0],O=x[1];return console.log("this is todosState",o),Object(g.useEffect)((function(){Object(S.a)(L.a.mark((function e(){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,Ne();case 3:return n=e.sent,e.next=6,s(n);case 6:return e.next=8,i(n);case 8:return e.next=10,setTimeout((function(){}),5e3);case 10:return e.next=12,O(!1);case 12:return e.next=14,u("Updated");case 14:case"end":return e.stop()}}),e)})))()}),[s]),Object(z.jsxs)($e,{children:[Object(z.jsxs)(Je,{children:[Object(z.jsx)(je,{}),Object(z.jsx)(Ge,{})]}),Object(z.jsxs)(qe,{children:[f?Object(z.jsx)(wn.a,{style:{alignSelf:"center",height:"100%"},size:80,thickness:49,speed:51,color:"rgba(172, 99, 57, 1)",secondaryColor:"rgba(172, 77, 57, 0.44)"}):0!==(null===o||void 0===o?void 0:o.length)?null===o||void 0===o?void 0:o.map((function(e){return Object(z.jsx)(mn,{onClick:function(){r(),p(e)},toDosList:e},e.id)})):Object(z.jsx)(Qe,{children:"This list is empty"}),t?Object(z.jsx)(n,{listItem:h,handleCloseModal:a}):null,Object(z.jsx)(Ye,{handleClick:function(){r(),p(l)}})]})]})},kn=Object(y.d)(Pe||(Pe=Object(k.a)(["\n  from {\n    transform: translateX(-50%) translateY(500%);\n  }\n  to {\n    transform: translateX(-50%) translateY(0);\n  }\n"]))),yn=Object(y.d)(Fe||(Fe=Object(k.a)(["\n  from {\n    transform: translateX(-50%) scaleX(1);\n  }\n  to {\n    transform: translateX(-50%) scaleX(0);\n  }\n"]))),Cn=y.c.h1(Ve||(Ve=Object(k.a)(["\n  color: red;\n"]))),Ln=y.c.div(_e||(_e=Object(k.a)(["\n  z-index: 10;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 10%;\n  background-color: white;\n  padding: 25px 25px 15px;\n  color: ",";\n  border: 3px solid ",";\n  border-radius: 15px;\n  animation: "," 1s ease-in-out 1 forwards, "," 1s 6s ease-in-out 1 reverse forwards;\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    left: 50%;\n    top: 15px;\n    transform: translateX(-50%);\n    background-color: ",";\n    width: 60px;\n    height: 5px;\n    border-radius: 50px;\n  }\n  &::before {\n    opacity: 0.5;\n  }\n  &::after {\n    transform: translateX(-50%) scaleX(1);\n    transform-origin: left top;\n    animation: "," 5s 1s linear 1 forwards;\n  }\n"])),(function(e){return e.theme.colors.error}),(function(e){return e.theme.colors.error}),kn,kn,(function(e){return e.theme.colors.error}),yn),Sn=function(e){var n=e.message;return Object(z.jsxs)(Ln,{children:[Object(z.jsx)(Cn,{children:"OOPS!!"}),Object(z.jsx)("p",{children:n})]})},En=y.c.svg(Be||(Be=Object(k.a)(["\n  align-self: flex-start;\n  cursor: pointer;\n"]))),Mn=function(e){var n=e.onClick;return Object(z.jsx)(En,{width:"69",height:"24",viewBox:"0 0 69 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:n,children:Object(z.jsx)("path",{d:"M0.939339 10.9393C0.353554 11.5251 0.353554 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92894 13.1924 1.97919 12.6066 1.3934C12.0208 0.807616 11.0711 0.807617 10.4853 1.3934L0.939339 10.9393ZM69 10.5L2 10.5L2 13.5L69 13.5L69 10.5Z",fill:"white"})})},Dn=Object(g.createContext)({isLogged:!1,setIsLogged:function(e){}}),Tn=y.c.div(Ae||(Ae=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 30vw;\n  height: 15vh;\n  background-color: orange;\n  color: white;\n  border-radius: 10px;\n"]))),zn=y.c.p(He||(He=Object(k.a)(["\n  color: darkgray;\n"]))),In=function(){return Object(z.jsxs)(Tn,{children:[Object(z.jsx)(zn,{children:"Minimum 5 chars, max 15 chars"}),Object(z.jsx)(zn,{children:"At Least one :"}),Object(z.jsx)(zn,{children:"uppercase, digit, special character"})]})},Pn=function(){var e=Object(S.a)(L.a.mark((function e(n){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D()({method:"post",url:"https://recruitment.ultimate.systems/auth/local/register",data:{username:n.username,email:n.email,password:n.password}});case 3:return t=e.sent,e.abrupt("return",t);case 7:throw e.prev=7,e.t0=e.catch(0),new Error("");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),Fn={username:"",email:"",password:"",rPassword:""},Vn=function(){var e=Object(g.useState)(Object(X.a)({},Fn)),n=Object(E.a)(e,2),t=n[0],r=n[1],a=Object(g.useState)(!1),c=Object(E.a)(a,2),o=c[0],s=c[1],i=Object(g.useContext)(Dn).setIsLogged,u=Y(),l=u.dispatchError,d=u.handleToast,b=Object(U.g)(),h=Object(g.useCallback)((function(e){e.persist(),r((function(n){return Object(X.a)(Object(X.a)({},n),{},Object(R.a)({},e.target.name,e.target.value))}))}),[]),p=function(){return b.goBack()},j=Object(g.useCallback)((function(){s(!0),setTimeout((function(){s(!1)}),5e3)}),[]),x=function(){var e=Object(S.a)(L.a.mark((function e(n){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n.preventDefault(),oe(t.username)){e.next=5;break}return l("username is to short"),e.abrupt("return");case 5:if((s=t.email).includes("@")&&s.length>=3){e.next=8;break}return l("your email is incorrect"),e.abrupt("return");case 8:if(o=t.password,new RegExp("^.*(?=.{5,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])[a-zA-Z0-9@#$%^&+=]*$").test(o)){e.next=11;break}return l("Wrong password read cearfuly instructions about strong password"),e.abrupt("return");case 11:if(a=t.password,c=t.rPassword,a===c){e.next=14;break}return l("password are not the same"),e.abrupt("return");case 14:return e.next=16,Pn(t);case 16:return e.next=18,i(!0);case 18:return e.next=20,r(Fn);case 20:return e.next=22,d("Register is completed, now you can login");case 22:return e.next=24,p();case 24:e.next=34;break;case 26:return e.prev=26,e.t0=e.catch(0),e.next=30,i(!1);case 30:return e.next=32,l("Something went wrong with register please contact your support");case 32:return e.next=34,r(Fn);case 34:case"end":return e.stop()}var a,c,o,s}),e,null,[[0,26]])})));return function(n){return e.apply(this,arguments)}}();return Object(z.jsxs)(ee,{children:[Object(z.jsx)(Mn,{onClick:p}),Object(z.jsx)(ne,{children:"Create an new account"}),Object(z.jsxs)(te,{as:"form",onSubmit:x,children:[Object(z.jsx)(J,{label:"Username",name:"username",id:"username",type:"text",onChange:h,value:t.username}),Object(z.jsx)(J,{label:"Email",name:"email",id:"email",type:"text",onChange:h,value:t.email}),Object(z.jsx)(J,{label:"Password",name:"password",id:"password",type:"password",onChange:h,value:t.password,onMouseMoveFunc:j}),Object(z.jsx)(J,{label:"Repeat Password",name:"rPassword",id:"rPassword",type:"Password",onChange:h,value:t.rPassword}),Object(z.jsx)(Q,{name:"Create",styles:{width:"60%",height:"40%",background:"orange",margin:"10px"}})]}),o?Object(z.jsx)(In,{}):null]})},_n=(t(75),function(){return Object(z.jsx)(vn,{})}),Bn=function(){return Object(z.jsxs)(U.d,{children:[Object(z.jsx)(U.b,{path:"/login",component:ie}),Object(z.jsx)(U.b,{path:"/register",component:Vn}),Object(z.jsx)(U.b,{render:function(){return Object(z.jsx)(U.a,{to:"/login"})}})]})};var An,Hn=function(){var e=F().user,n=Y().error;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(N,{children:e?Object(z.jsx)(_n,{}):Object(z.jsx)(Bn,{})}),";",n&&Object(z.jsx)(Sn,{message:n})]})},Zn={colors:{black:"#1A1A1A;",orange:"rgba(255, 153, 0, 1)",gray:"rgba(45, 45, 45, 1)",white:"rgba(255, 255, 255, 1)"}},Nn=t.p+"static/media/ZCOOLKuaiLe-Regular.902f775c.ttf",Rn=Object(y.b)(An||(An=Object(k.a)(["\n\n  @font-face {\n    font-family: 'ZCOOLKuaiLe';\n    src: local('ZCOOLKuaiLe'), local('ZCOOLKuaiLe'),\n    url(",") format('truetype');\n    font-weight: 400;\n    font-style: normal;\n  }\n  \nhtml {\n  box-sizing: border-box;\n}\n\n*, *::after, *::before {\n  box-sizing: inherit;\n}\n\nbody {\n  font-family: 'Roboto', sans-serif;\n  margin: 0;\n  padding: 0;\n  overflow-y: hidden;\n}\n\na, button {\n  font-family: 'Roboto', sans-serif;\n}\n"])),Nn),Xn=function(e){var n=e.children;return Object(z.jsx)(re.a,{children:Object(z.jsx)(y.a,{theme:Zn,children:Object(z.jsx)(W,{children:Object(z.jsxs)(P,{children:[Object(z.jsx)(Rn,{}),Object(z.jsx)(pe,{children:n})]})})})})};v.a.render(Object(z.jsx)(m.a.StrictMode,{children:Object(z.jsx)(Xn,{children:Object(z.jsx)(Hn,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.3a7ce92c.chunk.js.map