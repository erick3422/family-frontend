(this["webpackJsonpproject-front"]=this["webpackJsonpproject-front"]||[]).push([[0],{107:function(e,t,c){},108:function(e,t,c){},109:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/tacos.327c8b2f.jpg"},112:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/pizza.16f90208.jpg"},113:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/hamburgher.3d9ae069.jpg"},114:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/mondogo.3c3214c6.jpg"},115:function(e,t,c){},116:function(e,t,c){},117:function(e,t,c){},118:function(e,t,c){},122:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(23),r=c.n(s),n=(c(78),c(35)),i=c(5),o=c(8),l=c(127),j=(c(79),c(125)),d=c(0);var u=function(e){var t=e.variant,c=e.heading,s=e.message,r=Object(a.useState)(!0),n=Object(i.a)(r,2),o=n[0],l=n[1],u=Object(a.useState)(null),b=Object(i.a)(u,2),h=b[0],m=b[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){return l(!1)}),5e3);return m(e),function(){clearTimeout(h)}}),[]),Object(d.jsx)(j.a,{variant:t,onClose:function(){return l(!1)},dismissible:!0,show:o,children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(j.a.Heading,{children:c}),Object(d.jsx)("p",{className:"alert-body",children:s})]})})},b=c(71),h=c(42),m=c(9),O=(c(84),function(e){var t=e.user;return t.profile?Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)(m.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(d.jsx)(m.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"}),Object(d.jsx)(m.c,{to:"/chat",className:"nav-link",children:"ChatRoom"}),Object(d.jsx)(m.c,{to:"profiles/".concat(t.profile._id),className:"nav-link",children:"My Profile"})]}):Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)(m.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(d.jsx)(m.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"}),Object(d.jsx)(m.c,{to:"/profiles/create",className:"nav-link",children:"Create Profile"})]})}),p=Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)(m.c,{to:"/sign-up",className:"nav-link",children:"Register"}),Object(d.jsx)(m.c,{to:"/sign-in",className:"nav-link",children:"Login"})]}),x=Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)(m.c,{to:"/",className:"nav-link",children:"Home"}),Object(d.jsx)(m.c,{to:"/menu",className:"nav-link",children:"Menu"}),Object(d.jsx)(m.c,{to:"/about",className:"nav-link",children:"About"})]}),f=function(e){var t=e.user;return Object(d.jsxs)(h.a,{bg:"dark",variant:"dark",expand:"md",children:[Object(d.jsx)(h.a.Brand,{children:Object(d.jsx)(m.b,{to:"/",className:"home",style:{color:"#FFF",textDecoration:"none"},children:"Family"})}),Object(d.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(h.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(b.a,{className:"ml-auto",children:[t&&Object(d.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),x,t?O({user:t}):p]})})]})},g=c(15),v=c(12),_=c.n(v),N="https://young-mesa-85080.herokuapp.com",w="http://localhost:4741",y="localhost"===window.location.hostname?w:N,S=c(27),C=c.n(S),k=function(e,t,c){return C()({method:"POST",url:y+"/sign-up/",data:{credentials:{email:e,password:t,password_confirmation:c}}})},P=function(e,t){return C()({url:y+"/sign-in/",method:"POST",data:{credentials:{email:e,password:t}}})},T=function(e){return C()({url:y+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})},E=function(e,t,c){return C()({url:y+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(c.token)},data:{passwords:{old:e,new:t}}})},A=c(7),F=c(17),I=function(e){var t=e.setUser,c=e.msgAlert,s=Object(a.useState)(""),r=Object(i.a)(s,2),n=r[0],l=r[1],j=Object(a.useState)(""),u=Object(i.a)(j,2),b=u[0],h=u[1],m=Object(a.useState)(""),O=Object(i.a)(m,2),p=O[0],x=O[1],f=Object(a.useState)(!1),v=Object(i.a)(f,2),N=v[0],w=v[1],y=function(){var e=Object(g.a)(_.a.mark((function e(a){var s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,k(n,b,p);case 4:return e.next=6,P(n,b);case 6:s=e.sent,t(s.data.user),c({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"}),w(!0),e.next=19;break;case 12:e.prev=12,e.t0=e.catch(1),c({heading:"Sign Up Failed with error: "+e.t0.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"}),console.error(e.t0),l(""),h(""),x("");case 19:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return N?Object(d.jsx)(o.a,{to:"/"}):Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(d.jsx)("h3",{children:"Sign Up"}),Object(d.jsxs)(A.a,{onSubmit:y,children:[Object(d.jsxs)(A.a.Group,{className:"mb-3",controlId:"email",children:[Object(d.jsx)(A.a.Label,{children:"Email address"}),Object(d.jsx)(A.a.Control,{type:"email",placeholder:"Enter email",required:!0,value:n,onChange:function(e){return l(e.target.value)}})]}),Object(d.jsxs)(A.a.Group,{className:"mb-3",controlId:"password",children:[Object(d.jsx)(A.a.Label,{children:"Password"}),Object(d.jsx)(A.a.Control,{required:!0,value:b,type:"password",placeholder:"Password",onChange:function(e){return h(e.target.value)}})]}),Object(d.jsxs)(A.a.Group,{className:"mb-3",controlId:"passwordConfirmation",children:[Object(d.jsx)(A.a.Label,{children:"Password Confirmation"}),Object(d.jsx)(A.a.Control,{required:!0,value:p,type:"password",placeholder:"Confirm Password",onChange:function(e){return x(e.target.value)}})]}),Object(d.jsx)(F.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})},D=(c(107),function(e){var t=e.setUser,c=e.msgAlert,s=Object(a.useState)(""),r=Object(i.a)(s,2),n=r[0],l=r[1],j=Object(a.useState)(""),u=Object(i.a)(j,2),b=u[0],h=u[1],m=Object(a.useState)(!1),O=Object(i.a)(m,2),p=O[0],x=O[1],f=function(){var e=Object(g.a)(_.a.mark((function e(a){var s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,P(n,b);case 4:s=e.sent,t(s.data.user),console.log(s.data.user),c({heading:"Sign In Success!",message:"Welcome!",variant:"success"}),x(!0),e.next=17;break;case 11:e.prev=11,e.t0=e.catch(1),c({heading:"Sign In Failed with error: "+e.t0.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"}),console.error(e.t0),l(""),h("");case 17:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return p?Object(d.jsx)(o.a,{to:"/"}):Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(d.jsx)("h3",{children:"Sign In"}),Object(d.jsxs)(A.a,{onSubmit:f,children:[Object(d.jsxs)(A.a.Group,{className:"mb-3",controlId:"email",children:[Object(d.jsx)(A.a.Label,{children:"Email address"}),Object(d.jsx)(A.a.Control,{type:"email",placeholder:"Enter email",required:!0,value:n,onChange:function(e){return l(e.target.value)}})]}),Object(d.jsxs)(A.a.Group,{className:"mb-3",controlId:"password",children:[Object(d.jsx)(A.a.Label,{children:"Password"}),Object(d.jsx)(A.a.Control,{required:!0,value:b,type:"password",placeholder:"Password",onChange:function(e){return h(e.target.value)}})]}),Object(d.jsx)(F.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}),U=function(e){var t=e.user,c=e.clearUser,s=e.msgAlert,r=Object(a.useState)(!1),n=Object(i.a)(r,2),l=n[0],j=n[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(g.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(t);case 2:s({heading:"Sign Out Success",message:"Come back soon!",variant:"success"}),c(),j(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),!t||l?Object(d.jsx)(o.a,{to:"/"}):""},G=function(e){var t=e.user,c=e.msgAlert,s=Object(a.useState)(""),r=Object(i.a)(s,2),n=r[0],l=r[1],j=Object(a.useState)(""),u=Object(i.a)(j,2),b=u[0],h=u[1],m=Object(a.useState)(!1),O=Object(i.a)(m,2),p=O[0],x=O[1],f=function(){var e=Object(g.a)(_.a.mark((function e(a){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,E(n,b,t);case 4:c({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"}),x(!0),e.next=14;break;case 8:e.prev=8,e.t0=e.catch(1),c({heading:"Change Password Failed with error: "+e.t0.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"}),console.error(e.t0),l(""),h("");case 14:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return p?Object(d.jsx)(o.a,{to:"/"}):Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(d.jsx)("h3",{children:"Sign In"}),Object(d.jsxs)(A.a,{onSubmit:f,children:[Object(d.jsxs)(A.a.Group,{className:"mb-3",controlId:"email",children:[Object(d.jsx)(A.a.Label,{children:"Old Password"}),Object(d.jsx)(A.a.Control,{type:"password",placeholder:"Old Password",required:!0,value:n,onChange:function(e){return l(e.target.value)}})]}),Object(d.jsxs)(A.a.Group,{className:"mb-3",controlId:"password",children:[Object(d.jsx)(A.a.Label,{children:"New Password"}),Object(d.jsx)(A.a.Control,{required:!0,value:b,type:"password",placeholder:"New Password",onChange:function(e){return h(e.target.value)}})]}),Object(d.jsx)(F.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})},R=function(e,t){return C.a.get("".concat(y,"/profiles/").concat(t),{headers:{Authorization:"Bearer ".concat(e.token)}})},L=function(e,t,c){return C.a.post("".concat(y,"/profiles/"),{profile:{name:t,about:c}},{headers:{Authorization:"Bearer ".concat(e.token)}})},M=function(e,t,c,a){return C.a.patch("".concat(y,"/profiles/").concat(t),{profile:{name:c,about:a}},{headers:{Authorization:"Bearer ".concat(e.token)}})},z=function(e,t){return C.a.delete("".concat(y,"/profiles/").concat(t),{headers:{Authorization:"Bearer ".concat(e.token)}})},B=c(126),q=function(e){var t=e.user,c=e.msgAlert,s=Object(a.useState)(null),r=Object(i.a)(s,2),n=r[0],l=r[1],j=Object(a.useState)(!1),u=Object(i.a)(j,2),b=u[0],h=u[1],O=Object(o.h)().id;if(!t)return Object(d.jsx)(o.a,{to:"/"});Object(a.useEffect)((function(){var e=function(){var e=Object(g.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R(t,O).then((function(e){return l(e.data.profile)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),c({heading:"Finding Profile failed with error: ",message:"Uh oh. We couldn't find the profile you were looking for",variant:"danger"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var p=function(){var e=Object(g.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z(t,O).then(delete t.profile,h(!0),c({heading:"Profile Deleted Successfully",message:"Profile successfully deleted. Sad to see you go!",variant:"success"}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),c({heading:"Delete Profile failed with error: ",message:e.t0.message,variant:"danger"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return b?Object(d.jsx)(o.a,{to:"/"}):null===n?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h4",{children:"Fetching Profile"}),Object(d.jsx)(B.a,{animation:"border",role:"status",children:Object(d.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),Object(d.jsx)(F.a,{onClick:function(){return h(!0)},variant:"primary",type:"button",children:"Return Home"})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:n.name}),Object(d.jsx)("h4",{children:"About Me:"}),Object(d.jsx)("p",{children:n.about}),Object(d.jsx)(F.a,{onClick:p,variant:"danger",type:"button",children:"Delete Profile"}),Object(d.jsx)(m.b,{to:"/profiles/".concat(O,"/edit"),children:Object(d.jsx)(F.a,{variant:"primary",type:"submit",children:"Edit Profile"})})]})},$=function(e){var t=e.user,c=(e.setUser,e.msgAlert),s=Object(a.useState)(""),r=Object(i.a)(s,2),n=r[0],l=r[1],j=Object(a.useState)(""),u=Object(i.a)(j,2),b=u[0],h=u[1],m=Object(a.useState)(!1),O=Object(i.a)(m,2),p=O[0],x=O[1];if(!t)return Object(d.jsx)(o.a,{to:"/"});var f=function(){var e=Object(g.a)(_.a.mark((function e(a){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,L(t,n,b).then((function(e){t.profile=e.data.profile}));case 4:c({heading:"Profile Creation Success",message:"Profile created successfully! Get busy chatting!",variant:"success"}),x(!0),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),c({heading:"Profile Creation failed with error: "+e.t0.message,message:"Failed to create a profile. Please check your inputs and try again.",variant:"danger"}),l(""),h("");case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return p?Object(d.jsx)(o.a,{to:"/"}):Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(d.jsx)("h3",{children:"Create Your Profile"}),Object(d.jsxs)(A.a,{onSubmit:f,children:[Object(d.jsxs)(A.a.Group,{className:"mb-3",controlId:"name",children:[Object(d.jsx)(A.a.Label,{children:"Name"}),Object(d.jsx)(A.a.Control,{type:"name",placeholder:"Profile Name",required:!0,value:n,onChange:function(e){return l(e.target.value)}})]}),Object(d.jsxs)(A.a.Group,{className:"mb-3",controlId:"aboutMe",children:[Object(d.jsx)(A.a.Label,{children:"About Me"}),Object(d.jsx)(A.a.Control,{required:!0,value:b,type:"aboutMe",placeholder:"Tell us a bit about yourself",onChange:function(e){return h(e.target.value)}})]}),Object(d.jsx)(F.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})},H=function(e){var t=e.user,c=e.msgAlert,s=Object(a.useState)(""),r=Object(i.a)(s,2),n=r[0],l=r[1],j=Object(a.useState)(""),u=Object(i.a)(j,2),b=u[0],h=u[1],m=Object(a.useState)(!1),O=Object(i.a)(m,2),p=O[0],x=O[1],f=Object(o.h)().id;if(!t)return Object(d.jsx)(o.a,{to:"/"});var v=function(){var e=Object(g.a)(_.a.mark((function e(a){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,M(t,f,n,b);case 4:c({heading:"Profile Edit Success",message:"Profile successfully updated! Get busy chatting!",variant:"success"}),x(!0),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),c({heading:"Profile Edit failed with error: "+e.t0.message,message:"Failed to update your profile. Please check inputs and try again.",variant:"danger"}),l(""),h("");case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return p?Object(d.jsx)(o.a,{to:"/profiles/".concat(f)}):Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(d.jsx)("h3",{children:"Edit Your Profile"}),Object(d.jsxs)(A.a,{onSubmit:v,children:[Object(d.jsxs)(A.a.Group,{className:"mb-3",controlId:"name",children:[Object(d.jsx)(A.a.Label,{children:"Name"}),Object(d.jsx)(A.a.Control,{type:"name",placeholder:"Profile Name",required:!0,value:n,onChange:function(e){return l(e.target.value)}})]}),Object(d.jsxs)(A.a.Group,{className:"mb-3",controlId:"aboutMe",children:[Object(d.jsx)(A.a.Label,{children:"About Me"}),Object(d.jsx)(A.a.Control,{required:!0,value:b,type:"aboutMe",placeholder:"Tell us a bit about yourself",onChange:function(e){return h(e.target.value)}})]}),Object(d.jsx)(F.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})},V=(c(108),function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"title",children:"Home Coming Soon"})})}),W=(c(109),c(110),function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"product",children:[Object(d.jsx)("img",{src:c(54).default}),Object(d.jsxs)("div",{className:"product__info",children:[Object(d.jsx)("p",{className:"info__name",children:"Menudo"}),Object(d.jsx)("p",{className:"info_description",children:"Delicious Menudo"}),Object(d.jsx)("p",{className:"info__price",children:"$7.99"}),Object(d.jsx)(m.b,{to:"/product/".concat(1),className:"info__button",children:"View"})]})]}),Object(d.jsxs)("div",{className:"product",children:[Object(d.jsx)("img",{src:c(111).default}),Object(d.jsxs)("div",{className:"product__info",children:[Object(d.jsx)("p",{className:"info__name",children:"Tacos"}),Object(d.jsx)("p",{className:"info_description",children:"Delicious Tacos"}),Object(d.jsx)("p",{className:"info__price",children:"$9.99"}),Object(d.jsx)(m.b,{to:"/product/".concat(2),className:"info__button",children:"View"})]})]}),Object(d.jsxs)("div",{className:"product",children:[Object(d.jsx)("img",{src:c(112).default}),Object(d.jsxs)("div",{className:"product__info",children:[Object(d.jsx)("p",{className:"info__name",children:"Pizza Napoletana"}),Object(d.jsx)("p",{className:"info_description",children:"Best Italian Pizza"}),Object(d.jsx)("p",{className:"info__price",children:"$30.99"}),Object(d.jsx)(m.b,{to:"/product/".concat(2),className:"info__button",children:"View"})]})]}),Object(d.jsxs)("div",{className:"product",children:[Object(d.jsx)("img",{src:c(113).default}),Object(d.jsxs)("div",{className:"product__info",children:[Object(d.jsx)("p",{className:"info__name",children:"Hamburgher with Fries"}),Object(d.jsx)("p",{className:"info_description",children:"Best Hamburgher with accompany in the best Fries in the town."}),Object(d.jsx)("p",{className:"info__price",children:"$20.99"}),Object(d.jsx)(m.b,{to:"/product/".concat(2),className:"info__button",children:"View"})]})]}),Object(d.jsxs)("div",{className:"product",children:[Object(d.jsx)("img",{src:c(114).default}),Object(d.jsxs)("div",{className:"product__info",children:[Object(d.jsx)("p",{className:"info__name",children:"Mondogo"}),Object(d.jsx)("p",{className:"info_description",children:"Best Colombian Mondogo around the world."}),Object(d.jsx)("p",{className:"info__price",children:"$20.99"}),Object(d.jsx)(m.b,{to:"/product/".concat(2),className:"info__button",children:"View"})]})]})]})}),Q=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("ul",{className:"shopping__cart",children:[Object(d.jsx)("li",{children:Object(d.jsxs)(m.b,{to:"/cart",className:"cart__link",children:[Object(d.jsx)("i",{className:"fa-regular fa-cart-shopping"}),Object(d.jsxs)("span",{children:["Cart",Object(d.jsx)("span",{className:"cart__logo__badge",children:"0"})]})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)(m.b,{to:"/menu",className:"shop__link",children:[Object(d.jsx)("i",{className:"fa-solid fa-store"}),Object(d.jsx)("span",{children:"Shop"})]})})]}),Object(d.jsxs)("div",{className:"menu__screen",children:[Object(d.jsx)("h2",{className:"menu__screen__title",children:"Best Food"}),Object(d.jsx)("div",{className:"menu__screen__products",children:Object(d.jsx)(W,{})})]})]})},Y=(c(115),function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"rulesSock",children:Object(d.jsx)("h1",{className:"rules",children:"About "})})})}),J=(c(116),function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"product__screen",children:[Object(d.jsxs)("div",{className:"product__screen__left",children:[Object(d.jsx)("div",{className:"left__image",children:Object(d.jsx)("img",{src:c(54).default})}),Object(d.jsxs)("div",{className:"left__info",children:[Object(d.jsx)("p",{className:"left__name",children:"Product 1"}),Object(d.jsx)("p",{children:"Price:$49.99"}),Object(d.jsx)("p",{children:"Description: Some goes here "})]})]}),Object(d.jsx)("div",{className:"product__screen__right",children:Object(d.jsxs)("div",{className:"right__info",children:[Object(d.jsxs)("p",{children:["Price: ",Object(d.jsx)("span",{children:"$49.99"})]}),Object(d.jsxs)("p",{children:["Status: ",Object(d.jsx)("span",{children:"In Stock"})]}),Object(d.jsxs)("p",{children:["Qty",Object(d.jsxs)("select",{children:[Object(d.jsx)("option",{value:1,children:"1"}),Object(d.jsx)("option",{value:2,children:"2"}),Object(d.jsx)("option",{value:3,children:"3"}),Object(d.jsx)("option",{value:4,children:"4"}),Object(d.jsx)("option",{value:5,children:"5"})]})]}),Object(d.jsx)("p",{children:Object(d.jsx)("button",{type:"button",children:"Add To Cart"})})]})})]})})}),K=(c(117),c(118),function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"cart__item",children:[Object(d.jsx)("div",{className:"cart__item__image",children:Object(d.jsx)("img",{src:c(54).default})}),Object(d.jsx)(m.b,{to:"/product/".concat(1),className:"cart__item__name",children:Object(d.jsx)("p",{children:"Product 1"})}),Object(d.jsx)("p",{className:"cart__item__price",children:"$49.99"}),Object(d.jsxs)("select",{className:"cart__item__select",children:[Object(d.jsx)("option",{value:1,children:"1"}),Object(d.jsx)("option",{value:2,children:"2"}),Object(d.jsx)("option",{value:3,children:"3"}),Object(d.jsx)("option",{value:4,children:"4"})]}),Object(d.jsx)("button",{className:"cart__item__delete",children:Object(d.jsx)("i",{className:"fa-solid fa-trash"})})]})})}),X=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("ul",{className:"shopping__cart",children:[Object(d.jsx)("li",{children:Object(d.jsxs)(m.b,{to:"/cart",className:"cart__link",children:[Object(d.jsx)("i",{className:"fas fa-shopping-cart"}),Object(d.jsxs)("span",{children:["Cart",Object(d.jsx)("span",{className:"cart__logo__badge",children:"0"})]})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)(m.b,{to:"/menu",className:"shop__link",children:[Object(d.jsx)("i",{className:"fa-solid fa-store"}),Object(d.jsx)("span",{children:"Shop"})]})})]}),Object(d.jsxs)("div",{className:"cart__screen",children:[Object(d.jsxs)("div",{className:"cart__screen__left",children:[Object(d.jsx)("h2",{children:"Shopping Cart"}),Object(d.jsx)(K,{})]}),Object(d.jsxs)("div",{className:"cart__screen__right",children:[Object(d.jsxs)("div",{className:"cart__screen__info",children:[Object(d.jsx)("p",{children:"Subtotal (0) items"}),Object(d.jsx)("p",{children:"$49.99"})]}),Object(d.jsx)("div",{className:"button__checkout",children:Object(d.jsx)("button",{children:"Proceed To Checkout"})})]})]})]})},Z=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)([]),j=Object(i.a)(r,2),b=j[0],h=j[1];console.log(h);var m=function(e){var t=e.heading,c=e.message,a=e.variant,s=Object(l.a)();console.log(s),h((function(e){return[].concat(Object(n.a)(e),[{heading:t,message:c,variant:a,id:s}])}))};return Object(d.jsxs)(d.Fragment,{children:[b.map((function(e){return Object(d.jsx)(u,{heading:e.heading,variant:e.variant,message:e.message},e.id)})),Object(d.jsx)(f,{user:c}),Object(d.jsx)("main",{className:"container",children:Object(d.jsxs)(o.d,{children:[Object(d.jsx)(o.b,{path:"/",element:Object(d.jsx)(V,{})}),Object(d.jsx)(o.b,{path:"/menu",element:Object(d.jsx)(Q,{})}),Object(d.jsx)(o.b,{path:"/about",element:Object(d.jsx)(Y,{})}),Object(d.jsx)(o.b,{path:"/product/:id",element:Object(d.jsx)(J,{})}),Object(d.jsx)(o.b,{path:"/cart",element:Object(d.jsx)(X,{})}),Object(d.jsx)(o.b,{path:"/sign-up",element:Object(d.jsx)(I,{setUser:s,msgAlert:m})}),Object(d.jsx)(o.b,{path:"/sign-in",element:Object(d.jsx)(D,{setUser:s,msgAlert:m})}),Object(d.jsx)(o.b,{path:"/change-password",element:Object(d.jsx)(G,{user:c,msgAlert:m})}),Object(d.jsx)(o.b,{path:"/sign-out/",element:Object(d.jsx)(U,{user:c,clearUser:function(){return s(null)},msgAlert:m})}),Object(d.jsx)(o.b,{path:"/profiles/:id",element:Object(d.jsx)(q,{user:c,msgAlert:m})}),Object(d.jsx)(o.b,{path:"/profiles/:id/edit",element:Object(d.jsx)(H,{user:c,msgAlert:m})}),Object(d.jsx)(o.b,{path:"/profiles/create",element:Object(d.jsx)($,{user:c,setUser:s,msgAlert:m})})]})})]})},ee=c(70),te=c(41),ce=c(69),ae=c(2),se="ADD_TO_CART",re="REMOVE_FROM_CART",ne="GET_PRODUCT_REQUEST",ie="GET_PRODUCT_SUCCESS",oe="GET_PRODUCT_FAIL",le="GET_PRODUCT_REQUEST",je="GET_PRODUCT_SUCCESS",de="GET_PRODUCT_FAIL",ue="GET_PRODUCT_DETAIL_RESET",be=Object(te.combineReducers)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0,c=t.payload,a=e.cartItems.find((function(e){return e.product===c.product}));switch(t.type){case se:return a?Object(ae.a)(Object(ae.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===a.product?c:e}))}):Object(ae.a)(Object(ae.a)({},e),{},{cartItems:[].concat(Object(n.a)(e.cartItems),[c])});case re:return Object(ae.a)(Object(ae.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});default:return e}},getProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return{loading:!0,products:[]};case ie:return{loading:!1,products:t.payload};case oe:return{loading:!1,error:t.payload};default:return e}},getProductDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.types){case le:return{loading:!0};case je:return{loading:!1,product:t.payload};case de:return{loading:!1,error:t.payload};case ue:return{product:{}};default:return e}}}),he=Object(te.createStore)(be,Object(ce.composeWithDevTools)(Object(te.applyMiddleware)())),me=Object(d.jsx)(ee.a,{store:he,children:Object(d.jsx)(m.a,{basename:"/family-frontend",children:Object(d.jsx)(Z,{})})});r.a.render(me,document.getElementById("root"))},54:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/menudo.c6b212c2.jpg"},78:function(e,t,c){},79:function(e,t,c){},84:function(e,t,c){}},[[122,1,2]]]);
//# sourceMappingURL=main.311f5c0d.chunk.js.map