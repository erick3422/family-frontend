(this["webpackJsonpproject-front"]=this["webpackJsonpproject-front"]||[]).push([[0],{130:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/menudo.c6b212c2.jpg"},257:function(e,t,c){},258:function(e,t,c){},262:function(e,t,c){},285:function(e,t,c){},286:function(e,t,c){},287:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Texting 1.3fe4b4d3.png"},288:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Texting 3.5359350f.jpeg"},289:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Texting 4.a0885984.jpeg"},290:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Texting 6.a32ec01f.webp"},291:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Texting 5.013fae61.jpeg"},292:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Message4.ad0083c7.png"},293:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Message2.a5df28fa.png"},294:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Message3.b8224785.png"},295:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Message6.7db2bf97.png"},296:function(e,t,c){},297:function(e,t,c){},298:function(e,t,c){},303:function(e,t,c){},470:function(e,t,c){},471:function(e,t,c){},472:function(e,t,c){},473:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(55),n=c.n(a),r=(c(257),c(172),c(84)),i=c(5),l=c(8),o=c(478),j=(c(258),c(476)),d=c(0);var u=function(e){var t=e.variant,c=e.heading,a=e.message,n=Object(s.useState)(!0),r=Object(i.a)(n,2),l=r[0],o=r[1],u=Object(s.useState)(null),b=Object(i.a)(u,2),h=b[0],m=b[1];return Object(s.useEffect)((function(){var e=setTimeout((function(){return o(!1)}),5e3);return m(e),function(){clearTimeout(h)}}),[]),Object(d.jsx)(j.a,{variant:t,onClose:function(){return o(!1)},dismissible:!0,show:l,children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(j.a.Heading,{children:c}),Object(d.jsx)("p",{className:"alert-body",children:a})]})})},b=c(250),h=c(99),m=c(11),O=(c(262),function(e){var t=e.user;return t.profile?Object(d.jsxs)(s.Fragment,{children:[Object(d.jsx)(m.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(d.jsx)(m.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"}),Object(d.jsx)(m.c,{to:"/chat",className:"nav-link",children:"ChatRoom"}),Object(d.jsx)(m.c,{to:"profiles/".concat(t.profile._id),className:"nav-link",children:"My Profile"})]}):Object(d.jsxs)(s.Fragment,{children:[Object(d.jsx)(m.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(d.jsx)(m.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"}),Object(d.jsx)(m.c,{to:"/profiles/create",className:"nav-link",children:"Create Profile"})]})}),x=Object(d.jsxs)(s.Fragment,{children:[Object(d.jsx)(m.c,{to:"/sign-up",className:"nav-link",children:"Register"}),Object(d.jsx)(m.c,{to:"/sign-in",className:"nav-link",children:"Login"})]}),p=Object(d.jsxs)(s.Fragment,{children:[Object(d.jsx)(m.c,{to:"/",className:"nav-link",children:"Home"}),Object(d.jsx)(m.c,{to:"/menu",className:"nav-link",children:"Menu"}),Object(d.jsx)(m.c,{to:"/about",className:"nav-link",children:"About"})]}),f=function(e){var t=e.user;return Object(d.jsxs)(h.a,{bg:"dark",variant:"dark",expand:"md",children:[Object(d.jsx)(h.a.Brand,{children:Object(d.jsx)(m.b,{to:"/",className:"home",style:{color:"#FFF",textDecoration:"none"},children:"Family"})}),Object(d.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(h.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(b.a,{className:"ml-auto",children:[t&&Object(d.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),p,t?O({user:t}):x]})})]})},g=c(31),v=c(17),N=c.n(v),_="https://young-mesa-85080.herokuapp.com",w="http://localhost:4741",y="localhost"===window.location.hostname?w:_,S=c(57),k=c.n(S),C=function(e,t,c){return k()({method:"POST",url:y+"/sign-up/",data:{credentials:{email:e,password:t,password_confirmation:c}}})},P=function(e,t){return k()({url:y+"/sign-in/",method:"POST",data:{credentials:{email:e,password:t}}})},A=function(e){return k()({url:y+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})},F=function(e,t,c){return k()({url:y+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(c.token)},data:{passwords:{old:e,new:t}}})},T=c(6),E=c(29),q=function(e){var t=e.setUser,c=e.msgAlert,a=Object(s.useState)(""),n=Object(i.a)(a,2),r=n[0],o=n[1],j=Object(s.useState)(""),u=Object(i.a)(j,2),b=u[0],h=u[1],m=Object(s.useState)(""),O=Object(i.a)(m,2),x=O[0],p=O[1],f=Object(s.useState)(!1),v=Object(i.a)(f,2),_=v[0],w=v[1],y=function(){var e=Object(g.a)(N.a.mark((function e(s){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,C(r,b,x);case 4:return e.next=6,P(r,b);case 6:a=e.sent,t(a.data.user),c({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"}),w(!0),e.next=19;break;case 12:e.prev=12,e.t0=e.catch(1),c({heading:"Sign Up Failed with error: "+e.t0.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"}),console.error(e.t0),o(""),h(""),p("");case 19:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return _?Object(d.jsx)(l.a,{to:"/"}):Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(d.jsx)("h3",{children:"Sign Up"}),Object(d.jsxs)(T.a,{onSubmit:y,children:[Object(d.jsxs)(T.a.Group,{className:"mb-3",controlId:"email",children:[Object(d.jsx)(T.a.Label,{children:"Email address"}),Object(d.jsx)(T.a.Control,{type:"email",placeholder:"Enter email",required:!0,value:r,onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)(T.a.Group,{className:"mb-3",controlId:"password",children:[Object(d.jsx)(T.a.Label,{children:"Password"}),Object(d.jsx)(T.a.Control,{required:!0,value:b,type:"password",placeholder:"Password",onChange:function(e){return h(e.target.value)}})]}),Object(d.jsxs)(T.a.Group,{className:"mb-3",controlId:"passwordConfirmation",children:[Object(d.jsx)(T.a.Label,{children:"Password Confirmation"}),Object(d.jsx)(T.a.Control,{required:!0,value:x,type:"password",placeholder:"Confirm Password",onChange:function(e){return p(e.target.value)}})]}),Object(d.jsx)(E.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})},D=(c(285),function(e){var t=e.setUser,c=e.msgAlert,a=Object(s.useState)(""),n=Object(i.a)(a,2),r=n[0],o=n[1],j=Object(s.useState)(""),u=Object(i.a)(j,2),b=u[0],h=u[1],m=Object(s.useState)(!1),O=Object(i.a)(m,2),x=O[0],p=O[1],f=function(){var e=Object(g.a)(N.a.mark((function e(s){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,P(r,b);case 4:a=e.sent,t(a.data.user),console.log(a.data.user),c({heading:"Sign In Success!",message:"Welcome!",variant:"success"}),p(!0),e.next=17;break;case 11:e.prev=11,e.t0=e.catch(1),c({heading:"Sign In Failed with error: "+e.t0.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"}),console.error(e.t0),o(""),h("");case 17:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return x?Object(d.jsx)(l.a,{to:"/"}):Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(d.jsx)("h3",{children:"Sign In"}),Object(d.jsxs)(T.a,{onSubmit:f,children:[Object(d.jsxs)(T.a.Group,{className:"mb-3",controlId:"email",children:[Object(d.jsx)(T.a.Label,{children:"Email address"}),Object(d.jsx)(T.a.Control,{type:"email",placeholder:"Enter email",required:!0,value:r,onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)(T.a.Group,{className:"mb-3",controlId:"password",children:[Object(d.jsx)(T.a.Label,{children:"Password"}),Object(d.jsx)(T.a.Control,{required:!0,value:b,type:"password",placeholder:"Password",onChange:function(e){return h(e.target.value)}})]}),Object(d.jsx)(E.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}),I=function(e){var t=e.user,c=e.clearUser,a=e.msgAlert,n=Object(s.useState)(!1),r=Object(i.a)(n,2),o=r[0],j=r[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(g.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t);case 2:a({heading:"Sign Out Success",message:"Come back soon!",variant:"success"}),c(),j(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),!t||o?Object(d.jsx)(l.a,{to:"/"}):""},M=function(e){var t=e.user,c=e.msgAlert,a=Object(s.useState)(""),n=Object(i.a)(a,2),r=n[0],o=n[1],j=Object(s.useState)(""),u=Object(i.a)(j,2),b=u[0],h=u[1],m=Object(s.useState)(!1),O=Object(i.a)(m,2),x=O[0],p=O[1],f=function(){var e=Object(g.a)(N.a.mark((function e(s){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,F(r,b,t);case 4:c({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"}),p(!0),e.next=14;break;case 8:e.prev=8,e.t0=e.catch(1),c({heading:"Change Password Failed with error: "+e.t0.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"}),console.error(e.t0),o(""),h("");case 14:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return x?Object(d.jsx)(l.a,{to:"/"}):Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(d.jsx)("h3",{children:"Sign In"}),Object(d.jsxs)(T.a,{onSubmit:f,children:[Object(d.jsxs)(T.a.Group,{className:"mb-3",controlId:"email",children:[Object(d.jsx)(T.a.Label,{children:"Old Password"}),Object(d.jsx)(T.a.Control,{type:"password",placeholder:"Old Password",required:!0,value:r,onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)(T.a.Group,{className:"mb-3",controlId:"password",children:[Object(d.jsx)(T.a.Label,{children:"New Password"}),Object(d.jsx)(T.a.Control,{required:!0,value:b,type:"password",placeholder:"New Password",onChange:function(e){return h(e.target.value)}})]}),Object(d.jsx)(E.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})},L=function(e,t){return k.a.get("".concat(y,"/profiles/").concat(t),{headers:{Authorization:"Bearer ".concat(e.token)}})},U=function(e,t,c){return k.a.post("".concat(y,"/profiles/"),{profile:{name:t,about:c}},{headers:{Authorization:"Bearer ".concat(e.token)}})},G=function(e,t,c,s){return k.a.patch("".concat(y,"/profiles/").concat(t),{profile:{name:c,about:s}},{headers:{Authorization:"Bearer ".concat(e.token)}})},B=function(e,t){return k.a.delete("".concat(y,"/profiles/").concat(t),{headers:{Authorization:"Bearer ".concat(e.token)}})},W=c(477),z=function(e){var t=e.user,c=e.msgAlert,a=Object(s.useState)(null),n=Object(i.a)(a,2),r=n[0],o=n[1],j=Object(s.useState)(!1),u=Object(i.a)(j,2),b=u[0],h=u[1],O=Object(l.h)().id;if(!t)return Object(d.jsx)(l.a,{to:"/"});Object(s.useEffect)((function(){var e=function(){var e=Object(g.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L(t,O).then((function(e){return o(e.data.profile)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),c({heading:"Finding Profile failed with error: ",message:"Uh oh. We couldn't find the profile you were looking for",variant:"danger"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var x=function(){var e=Object(g.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B(t,O).then(delete t.profile,h(!0),c({heading:"Profile Deleted Successfully",message:"Profile successfully deleted. Sad to see you go!",variant:"success"}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),c({heading:"Delete Profile failed with error: ",message:e.t0.message,variant:"danger"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return b?Object(d.jsx)(l.a,{to:"/"}):null===r?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h4",{children:"Fetching Profile"}),Object(d.jsx)(W.a,{animation:"border",role:"status",children:Object(d.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),Object(d.jsx)(E.a,{onClick:function(){return h(!0)},variant:"primary",type:"button",children:"Return Home"})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:r.name}),Object(d.jsx)("h4",{children:"About Me:"}),Object(d.jsx)("p",{children:r.about}),Object(d.jsx)(E.a,{onClick:x,variant:"danger",type:"button",children:"Delete Profile"}),Object(d.jsx)(m.b,{to:"/profiles/".concat(O,"/edit"),children:Object(d.jsx)(E.a,{variant:"primary",type:"submit",children:"Edit Profile"})})]})},H=function(e){var t=e.user,c=(e.setUser,e.msgAlert),a=Object(s.useState)(""),n=Object(i.a)(a,2),r=n[0],o=n[1],j=Object(s.useState)(""),u=Object(i.a)(j,2),b=u[0],h=u[1],m=Object(s.useState)(!1),O=Object(i.a)(m,2),x=O[0],p=O[1];if(!t)return Object(d.jsx)(l.a,{to:"/"});var f=function(){var e=Object(g.a)(N.a.mark((function e(s){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,U(t,r,b).then((function(e){t.profile=e.data.profile}));case 4:c({heading:"Profile Creation Success",message:"Profile created successfully! Get busy chatting!",variant:"success"}),p(!0),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),c({heading:"Profile Creation failed with error: "+e.t0.message,message:"Failed to create a profile. Please check your inputs and try again.",variant:"danger"}),o(""),h("");case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return x?Object(d.jsx)(l.a,{to:"/"}):Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(d.jsx)("h3",{children:"Create Your Profile"}),Object(d.jsxs)(T.a,{onSubmit:f,children:[Object(d.jsxs)(T.a.Group,{className:"mb-3",controlId:"name",children:[Object(d.jsx)(T.a.Label,{children:"Name"}),Object(d.jsx)(T.a.Control,{type:"name",placeholder:"Profile Name",required:!0,value:r,onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)(T.a.Group,{className:"mb-3",controlId:"aboutMe",children:[Object(d.jsx)(T.a.Label,{children:"About Me"}),Object(d.jsx)(T.a.Control,{required:!0,value:b,type:"aboutMe",placeholder:"Tell us a bit about yourself",onChange:function(e){return h(e.target.value)}})]}),Object(d.jsx)(E.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})},R=function(e){var t=e.user,c=e.msgAlert,a=Object(s.useState)(""),n=Object(i.a)(a,2),r=n[0],o=n[1],j=Object(s.useState)(""),u=Object(i.a)(j,2),b=u[0],h=u[1],m=Object(s.useState)(!1),O=Object(i.a)(m,2),x=O[0],p=O[1],f=Object(l.h)().id;if(!t)return Object(d.jsx)(l.a,{to:"/"});var v=function(){var e=Object(g.a)(N.a.mark((function e(s){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,G(t,f,r,b);case 4:c({heading:"Profile Edit Success",message:"Profile successfully updated! Get busy chatting!",variant:"success"}),p(!0),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),c({heading:"Profile Edit failed with error: "+e.t0.message,message:"Failed to update your profile. Please check inputs and try again.",variant:"danger"}),o(""),h("");case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return x?Object(d.jsx)(l.a,{to:"/profiles/".concat(f)}):Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(d.jsx)("h3",{children:"Edit Your Profile"}),Object(d.jsxs)(T.a,{onSubmit:v,children:[Object(d.jsxs)(T.a.Group,{className:"mb-3",controlId:"name",children:[Object(d.jsx)(T.a.Label,{children:"Name"}),Object(d.jsx)(T.a.Control,{type:"name",placeholder:"Profile Name",required:!0,value:r,onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)(T.a.Group,{className:"mb-3",controlId:"aboutMe",children:[Object(d.jsx)(T.a.Label,{children:"About Me"}),Object(d.jsx)(T.a.Control,{required:!0,value:b,type:"aboutMe",placeholder:"Tell us a bit about yourself",onChange:function(e){return h(e.target.value)}})]}),Object(d.jsx)(E.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})},$=(c(286),function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"title",children:Object(d.jsx)("h1",{children:"Socket to Me"})}),Object(d.jsxs)("div",{className:"description",children:[Object(d.jsx)("h2",{children:"Revolutionary  idea"}),Object(d.jsx)("h2",{children:"Unique + texting + different"}),Object(d.jsx)("h2",{children:"And"}),Object(d.jsx)("h2",{children:"Socket"})]}),Object(d.jsx)("div",{className:"idea1",children:Object(d.jsx)("img",{className:"Picture1",src:c(287).default})}),Object(d.jsxs)("div",{className:"img-description",children:[Object(d.jsx)("h3",{className:"Title",children:"Unique Socket Experience"}),Object(d.jsxs)("p",{className:"TitleDescription",children:["With Socket Message you will discover a unique Experience,",Object(d.jsx)("br",{})," that is design to enjoy and fulfill the user interaction."]})]}),Object(d.jsx)("div",{className:"idea2",children:Object(d.jsx)("img",{className:"Picture2",src:c(288).default})}),Object(d.jsxs)("div",{className:"img2-description",children:[Object(d.jsx)("h3",{className:"Title",children:"Texting Socket "}),Object(d.jsxs)("p",{className:"TitleDescription",children:["With Unique texting Experience,",Object(d.jsx)("br",{})," like never before, meet people and make friend in the way."]})]}),Object(d.jsx)("div",{className:"idea3",children:Object(d.jsx)("img",{className:"Picture3",src:c(289).default})}),Object(d.jsxs)("div",{className:"img3-description",children:[Object(d.jsx)("h3",{className:"Title",children:"Different From Competition"}),Object(d.jsxs)("p",{className:"TitleDescription",children:["Thats correct, different from competition,",Object(d.jsx)("br",{})," unique socket, unique user, unique you."]})]}),Object(d.jsx)("div",{className:"idea4",children:Object(d.jsx)("img",{className:"Picture4",src:c(290).default})}),Object(d.jsxs)("div",{className:"img4-description",children:[Object(d.jsx)("h3",{className:"Title",children:"iPhone Support"}),Object(d.jsxs)("p",{className:"TitleDescription",children:["Support to the most popular line up, that is correct",Object(d.jsx)("br",{})," iphone will support Socket app, so not need to worry just",Object(d.jsx)("br",{})," sit down and socket. "]})]}),Object(d.jsx)("div",{className:"idea5",children:Object(d.jsx)("img",{className:"Picture5",src:c(291).default})}),Object(d.jsxs)("div",{className:"img5-description",children:[Object(d.jsx)("h3",{className:"Title",children:"Android Support"}),Object(d.jsxs)("p",{className:"TitleDescription",children:["And Why not?, We also decide ",Object(d.jsx)("br",{})," to bring Android support, because we love you."]})]}),Object(d.jsx)("div",{className:"idea6",children:Object(d.jsx)("img",{className:"Cool1",src:c(292).default})}),Object(d.jsx)("div",{className:"idea7",children:Object(d.jsx)("img",{className:"Cool2",src:c(293).default})}),Object(d.jsx)("div",{className:"idea8",children:Object(d.jsx)("img",{className:"Cool3",src:c(294).default})}),Object(d.jsx)("div",{className:"idea9",children:Object(d.jsx)("img",{className:"Cool4",src:c(295).default})})]})}),Y=(c(296),c(297),function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"product",children:[Object(d.jsx)("img",{src:c(130).default}),Object(d.jsxs)("div",{className:"product__info",children:[Object(d.jsx)("p",{className:"info__name",children:"Product 1"}),Object(d.jsx)("p",{className:"info_description",children:"Here is a future description of the product"}),Object(d.jsx)("p",{className:"info__price",children:"$49.99"}),Object(d.jsx)(m.b,{to:"/product/".concat(1),className:"info__button",children:"View"})]})]})})}),J=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("ul",{className:"shopping__cart",children:[Object(d.jsx)("li",{children:Object(d.jsxs)(m.b,{to:"/cart",className:"cart__link",children:[Object(d.jsx)("i",{className:"fas fa-shopping-cart"}),Object(d.jsxs)("span",{children:["Cart",Object(d.jsx)("span",{className:"cart__logo__badge",children:"0"})]})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)(m.b,{to:"/menu",className:"shop__link",children:[Object(d.jsx)("i",{className:"fa-solid fa-store"}),Object(d.jsx)("span",{children:"Shop"})]})})]}),Object(d.jsxs)("div",{className:"menu__screen",children:[Object(d.jsx)("h2",{className:"menu__screen__title",children:"Best Food"}),Object(d.jsxs)("div",{className:"menu__screen__products",children:[Object(d.jsx)(Y,{}),Object(d.jsx)(Y,{}),Object(d.jsx)(Y,{}),Object(d.jsx)(Y,{})]})]})]})},Q=(c(298),function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"rulesSock",children:Object(d.jsx)("h1",{className:"rules",children:"About "})})})}),V=c(13),K=c(2),X=c(249),Z=(c(303),c(248)),ee=Object(X.a)(y,{withCredentials:!0}),te=function(e){var t=e.user;if(!t||!t.profile)return Object(d.jsx)(l.a,{to:"/"});var c=Object(s.useState)([]),a=Object(i.a)(c,2),n=a[0],o=a[1],j=Object(s.useState)({message:"",name:t.profile.name}),u=Object(i.a)(j,2),b=u[0],h=u[1];Object(s.useEffect)((function(){return ee.on("message",(function(e){var t=e.name,c=e.message;o([].concat(Object(r.a)(n),[{name:t,message:c}]))})),function(){ee.off("message")}}));return Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("ul",{className:"chatBox",children:Object(d.jsx)(Z.a,{className:"chatBox",children:n.map((function(e,t){var c=e.name,s=e.message;return Object(d.jsx)("div",{children:Object(d.jsxs)("h3",{children:[c,": ",Object(d.jsx)("span",{children:s})]})},t)}))})}),Object(d.jsx)("div",{})]}),Object(d.jsxs)(T.a,{onSubmit:function(e){e.preventDefault();var t=b.name,c=b.message;ee.emit("message",{name:t,message:c}),h({message:"",name:t})},children:[Object(d.jsxs)(T.a.Group,{controlId:"message",children:[Object(d.jsx)(T.a.Label,{children:"Message"}),Object(d.jsx)(T.a.Control,{required:!0,type:"text",name:"message",value:b.message,placeholder:"Enter message",onChange:function(e){return t=e,h(Object(K.a)(Object(K.a)({},b),{},Object(V.a)({},t.target.name,t.target.value))),void console.log("name ",t.target.name,"  val ",t.target.value);var t}})]}),Object(d.jsx)(E.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})},ce=(c(470),function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"product__screen",children:[Object(d.jsxs)("div",{className:"product__screen__left",children:[Object(d.jsx)("div",{className:"left__image",children:Object(d.jsx)("img",{src:c(130).default})}),Object(d.jsxs)("div",{className:"left__info",children:[Object(d.jsx)("p",{className:"left__name",children:"Product 1"}),Object(d.jsx)("p",{children:"Price:$49.99"}),Object(d.jsx)("p",{children:"Description: Some goes here "})]})]}),Object(d.jsx)("div",{className:"product__screen__right",children:Object(d.jsxs)("div",{className:"right__info",children:[Object(d.jsxs)("p",{children:["Price: ",Object(d.jsx)("span",{children:"$49.99"})]}),Object(d.jsxs)("p",{children:["Status: ",Object(d.jsx)("span",{children:"In Stock"})]}),Object(d.jsxs)("p",{children:["Qty",Object(d.jsxs)("select",{children:[Object(d.jsx)("option",{value:1,children:"1"}),Object(d.jsx)("option",{value:2,children:"2"}),Object(d.jsx)("option",{value:3,children:"3"}),Object(d.jsx)("option",{value:4,children:"4"}),Object(d.jsx)("option",{value:5,children:"5"})]})]}),Object(d.jsx)("p",{children:Object(d.jsx)("button",{type:"button",children:"Add To Cart"})})]})})]})})}),se=(c(471),c(472),function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"cart__item",children:[Object(d.jsx)("div",{className:"cart__item__image",children:Object(d.jsx)("img",{src:c(130).default})}),Object(d.jsx)(m.b,{to:"/product/".concat(1),className:"cart__item__name",children:Object(d.jsx)("p",{children:"Product 1"})}),Object(d.jsx)("p",{className:"cart__item__price",children:"$49.99"}),Object(d.jsxs)("select",{className:"cart__item__select",children:[Object(d.jsx)("option",{value:1,children:"1"}),Object(d.jsx)("option",{value:2,children:"2"}),Object(d.jsx)("option",{value:3,children:"3"}),Object(d.jsx)("option",{value:4,children:"4"})]}),Object(d.jsx)("button",{className:"cart__item__delete",children:Object(d.jsx)("i",{className:"fa-solid fa-trash"})})]})})}),ae=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("ul",{className:"shopping__cart",children:[Object(d.jsx)("li",{children:Object(d.jsxs)(m.b,{to:"/cart",className:"cart__link",children:[Object(d.jsx)("i",{className:"fas fa-shopping-cart"}),Object(d.jsxs)("span",{children:["Cart",Object(d.jsx)("span",{className:"cart__logo__badge",children:"0"})]})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)(m.b,{to:"/menu",className:"shop__link",children:[Object(d.jsx)("i",{className:"fa-solid fa-store"}),Object(d.jsx)("span",{children:"Shop"})]})})]}),Object(d.jsxs)("div",{className:"cart__screen",children:[Object(d.jsxs)("div",{className:"cart__screen__left",children:[Object(d.jsx)("h2",{children:"Shopping Cart"}),Object(d.jsx)(se,{})]}),Object(d.jsxs)("div",{className:"cart__screen__right",children:[Object(d.jsxs)("div",{className:"cart__screen__info",children:[Object(d.jsx)("p",{children:"Subtotal (0) items"}),Object(d.jsx)("p",{children:"$49.99"})]}),Object(d.jsx)("div",{className:"button__checkout",children:Object(d.jsx)("button",{children:"Proceed To Checkout"})})]})]})]})},ne=function(){var e=Object(s.useState)(null),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([]),j=Object(i.a)(n,2),b=j[0],h=j[1];console.log(h);var m=function(e){var t=e.heading,c=e.message,s=e.variant,a=Object(o.a)();console.log(a),h((function(e){return[].concat(Object(r.a)(e),[{heading:t,message:c,variant:s,id:a}])}))};return Object(d.jsxs)(d.Fragment,{children:[b.map((function(e){return Object(d.jsx)(u,{heading:e.heading,variant:e.variant,message:e.message},e.id)})),Object(d.jsx)(f,{user:c}),Object(d.jsx)("main",{className:"container",children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{path:"/",element:Object(d.jsx)($,{})}),Object(d.jsx)(l.b,{path:"/menu",element:Object(d.jsx)(J,{})}),Object(d.jsx)(l.b,{path:"/about",element:Object(d.jsx)(Q,{})}),Object(d.jsx)(l.b,{path:"/product/:id",element:Object(d.jsx)(ce,{})}),Object(d.jsx)(l.b,{path:"/cart",element:Object(d.jsx)(ae,{})}),Object(d.jsx)(l.b,{path:"/sign-up",element:Object(d.jsx)(q,{setUser:a,msgAlert:m})}),Object(d.jsx)(l.b,{path:"/sign-in",element:Object(d.jsx)(D,{setUser:a,msgAlert:m})}),Object(d.jsx)(l.b,{path:"/change-password",element:Object(d.jsx)(M,{user:c,msgAlert:m})}),Object(d.jsx)(l.b,{path:"/sign-out/",element:Object(d.jsx)(I,{user:c,clearUser:function(){return a(null)},msgAlert:m})}),Object(d.jsx)(l.b,{path:"/profiles/:id",element:Object(d.jsx)(z,{user:c,msgAlert:m})}),Object(d.jsx)(l.b,{path:"/profiles/:id/edit",element:Object(d.jsx)(R,{user:c,msgAlert:m})}),Object(d.jsx)(l.b,{path:"/profiles/create",element:Object(d.jsx)(H,{user:c,setUser:a,msgAlert:m})}),Object(d.jsx)(l.b,{path:"/chat",element:Object(d.jsx)(te,{user:c})})]})})]})},re=Object(d.jsxs)(m.a,{basename:"/family-frontend",children:[Object(d.jsx)("script",{src:"/socket.io/socket.io.js"}),Object(d.jsx)("script",{children:"var socket = io();"}),Object(d.jsx)(ne,{})]});n.a.render(re,document.getElementById("root"))}},[[473,1,2]]]);
//# sourceMappingURL=main.21c3f83a.chunk.js.map