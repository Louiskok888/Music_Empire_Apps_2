(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[923],{5563:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/RegisterPage",function(){return t(4009)}])},4009:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t(8520),a=t.n(r),s=t(5893),i=t(7294),u=t(9669),o=t.n(u),c=(t(5021),t(1664)),l=t(2494),p=t.n(l),h=t(1163);function f(e,n,t,r,a,s,i){try{var u=e[s](i),o=u.value}catch(c){return void t(c)}u.done?n(o):Promise.resolve(o).then(r,a)}function g(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var s=e.apply(n,t);function i(e){f(s,r,a,i,u,"next",e)}function u(e){f(s,r,a,i,u,"throw",e)}i(void 0)}))}}function d(){var e=(0,i.useState)(),n=e[0],t=e[1],r=(0,i.useState)(),u=r[0],l=r[1],f=(0,i.useState)(),d=f[0],_=f[1],v=(0,h.useRouter)();function w(){return(w=g(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,r={name:n,email:u,password:d},e.next=5,o().post("http://localhost:3000/api/user",r);case 5:v.push("/LoginPage"),alert("Registration successful. Now you can log in"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),alert("Registration failed. Please try again later");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return(0,s.jsx)("div",{className:p().container,children:(0,s.jsxs)("div",{className:p().wrapper,children:[(0,s.jsx)("h1",{children:"Register"}),(0,s.jsxs)("form",{className:p().wrapper,children:[(0,s.jsx)("input",{className:p().input,type:"text",placeholder:"name",value:n,onChange:function(e){return t(e.target.value)}}),(0,s.jsx)("input",{className:p().input,type:"email",placeholder:"email address",value:u,onChange:function(e){return l(e.target.value)}}),(0,s.jsx)("input",{className:p().input,type:"password",placeholder:"password",value:d,onChange:function(e){return _(e.target.value)}}),(0,s.jsx)("button",{onClick:function(e){return w.apply(this,arguments)},className:p().button,children:"Register"}),(0,s.jsxs)("div",{children:["Already have an account?"," ",(0,s.jsx)(c.default,{href:"/LoginPage",passHref:!0,children:(0,s.jsx)("div",{className:p().login,children:"Go to Login"})})]})]})]})})}},2494:function(e){e.exports={container:"RegisterPage_container____Bzh",wrapper:"RegisterPage_wrapper__TYkHI",input:"RegisterPage_input__kQzHz",button:"RegisterPage_button__eeZJV",login:"RegisterPage_login__W3wTj"}}},function(e){e.O(0,[669,644,774,888,179],(function(){return n=5563,e(e.s=n);var n}));var n=e.O();_N_E=n}]);