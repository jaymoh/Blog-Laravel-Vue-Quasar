(function(e){function t(t){for(var r,o,s=t[0],c=t[1],i=t[2],f=0,l=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(l.length)l.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={0:0},a={0:0},u=[];function s(e){return c.p+"js/"+({1:"routes"}[e]||e)+"."+{1:"6b0d1495",3:"b0195feb",4:"80e322ad"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={1:1,3:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({1:"routes"}[e]||e)+"."+{1:"89e872f7",3:"b5a90d75",4:"31d6cfe0"}[e]+".css",a=c.p+r,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var i=u[s],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===r||f===a))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){i=l[s],f=i.getAttribute("data-href");if(f===r||f===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],p.parentNode.removeChild(p),n(u)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=s(e);var l=new Error;i=function(t){f.onerror=f.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=f;u.push([0,2]),n()})({0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);var r=n("c973"),o=n.n(r),a=(n("96cf"),n("ac1f"),n("5319"),n("5c7d"),n("7d6e"),n("e54f"),n("4439"),n("4605"),n("f580"),n("5b2b"),n("8753"),n("2967"),n("7e67"),n("d770"),n("dd82"),n("922c"),n("d7fb"),n("a533"),n("c32e"),n("a151"),n("8bc7"),n("e80f"),n("5fec"),n("e42f"),n("57fc"),n("d67f"),n("880e"),n("1c10"),n("9482"),n("e797"),n("4848"),n("53d0"),n("63b1"),n("e9fd"),n("195c"),n("64e9"),n("33c5"),n("4f62"),n("0dbc"),n("7c38"),n("0756"),n("4953"),n("81db"),n("2e52"),n("2248"),n("7797"),n("12a1"),n("ce96"),n("70ca"),n("2318"),n("24bd"),n("8f27"),n("3064"),n("c9a2"),n("8767"),n("4a8e"),n("b828"),n("3c1c"),n("21cb"),n("c00e"),n("e4a8"),n("e4d3"),n("f4d9"),n("fffd"),n("f645"),n("639e"),n("34ee"),n("b794"),n("af24"),n("7c9c"),n("7bb2"),n("64f7"),n("c382"),n("053c"),n("c48f"),n("f5d1"),n("3cec"),n("c00ee"),n("d450"),n("ca07"),n("14e3"),n("9393"),n("9227"),n("1dba"),n("674a"),n("de26"),n("6721"),n("9cb5"),n("ed9b"),n("fc83"),n("98e5"),n("605a"),n("ba60"),n("df07"),n("7903"),n("e046"),n("58af"),n("7713"),n("0571"),n("3e27"),n("6837"),n("3fc9"),n("0693"),n("bf41"),n("985d"),n("0047"),n("2b0e")),u=n("1f91"),s=n("42d2"),c=n("b178");a["a"].use(c["b"],{config:{loadingBar:{color:"#901823",size:"3px",position:"top"}},lang:u["a"],iconSet:s["a"]});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},f=[],l={name:"BlogTest"},p=l,d=n("2877"),h=Object(d["a"])(p,i,f,!1,null,null,null),g=h.exports,m=n("ded3"),b=n.n(m),v=(n("d81d"),n("e260"),n("d3b7"),n("ddb0"),n("159b"),n("b0c0"),n("2f62"));function y(){var e=n("7905");return e.keys().map(e).map((function(e){return e.default}))}a["a"].use(v["a"]);var S={};y().forEach((function(e){S[e.name]=e}));var T=new v["a"].Store({state:{},actions:{},mutations:{},getters:{},modules:b()({},S),strict:!1}),E=function(){return T},_=n("8c4f"),O=n("448a"),w=n.n(O),k=(n("e6cf"),n("3ca3"),[{path:"/",meta:{requiresAuth:!1,title:"BlogTest"},name:"BlogHome",redirect:{name:"PostsList"}},{path:"posts",meta:{requiresAuth:!1,title:"BlogTest"},name:"PostsList",component:function(){return n.e(1).then(n.bind(null,"8b24"))}},{path:"my-posts",meta:{requiresAuth:!0,title:"My Posts"},name:"MyPosts",component:function(){return n.e(1).then(n.bind(null,"738e"))}}]),P=[{path:"/auth",meta:{requiresAuth:!1,redirectIfLoggedIn:!0,title:"BlogTest | Login"},name:"AuthLayout",redirect:{name:"AuthLogin"}},{path:"login",meta:{requiresAuth:!1,redirectIfLoggedIn:!0,title:"BlogTest | Login"},name:"AuthLogin",component:function(){return n.e(1).then(n.bind(null,"23bb"))}},{path:"register",meta:{requiresAuth:!1,redirectIfLoggedIn:!0,title:"BlogTest | Login"},name:"AuthRegister",component:function(){return n.e(1).then(n.bind(null,"1431"))}}],A=[{path:"/",meta:{requiresAuth:!1,title:"BlogTest"},component:function(){return n.e(3).then(n.bind(null,"713b"))},children:w()(k)},{path:"/auth",meta:{requiresAuth:!1,title:"Zimele CS | Authentication"},component:function(){return n.e(4).then(n.bind(null,"25b3"))},children:w()(P)},{path:"*",meta:{requiresAuth:!1,title:"BlogTest | Whoops!"},redirect:{path:"/404"}},{path:"/404",meta:{requiresAuth:!1,title:"BlogTest | Whoops"},name:"NotFound",component:function(){return n.e(1).then(n.bind(null,"e51e"))}}],L=A,N=n("a2b6");a["a"].use(_["a"]);var I=function(){var e=new _["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:L,mode:"history",base:"/"});return e.beforeEach(function(){var e=o()(regeneratorRuntime.mark((function e(t,n,r){var o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!Object(N["a"])()||T.getters["profile/GET_LOGGED_IN_USER"].username){e.next=3;break}return e.next=3,T.dispatch("profile/FETCH_LOGGED_IN_USER",{}).then((function(e){}));case 3:o=t.meta.requiresAuth,t.meta.role||!1,a=t.meta.redirectIfLoggedIn||!1,document.title=t.meta.title,Object(N["a"])()||o||r(),!Object(N["a"])()&&o&&r({name:"AuthLogin"}),Object(N["a"])()&&o&&r(),Object(N["a"])()&&a&&r({name:"BlogHome"}),Object(N["a"])()&&!o&&r();case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()),e},x=function(){return j.apply(this,arguments)};function j(){return j=o()(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof E){e.next=6;break}return e.next=3,E({Vue:a["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=E;case 7:if(t=e.t0,"function"!==typeof I){e.next=14;break}return e.next=11,I({Vue:a["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=I;case 15:return n=e.t1,t.$router=n,r={router:n,store:t,render:function(e){return e(g)}},r.el="#q-app",e.abrupt("return",{app:r,store:t,router:n});case 20:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}var G=n("a925"),D={failed:"Action failed",success:"Action was successful"},U={"en-us":D};a["a"].use(G["a"]);var R=new G["a"]({locale:"en-us",fallbackLocale:"en-us",messages:U}),q=function(e){var t=e.app;t.i18n=R},B=n("bc3a"),C=n.n(B);a["a"].prototype.$axios=C.a;var F="/";function H(){return K.apply(this,arguments)}function K(){return K=o()(regeneratorRuntime.mark((function e(){var t,n,r,o,u,s,c,i,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,n=t.app,r=t.store,o=t.router,u=!1,s=function(e){u=!0;var t=Object(e)===e?o.resolve(e).route.fullPath:e;window.location.href=t},c=window.location.href.replace(window.location.origin,""),i=[q,void 0],f=0;case 11:if(!(!1===u&&f<i.length)){e.next=29;break}if("function"===typeof i[f]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,i[f]({app:n,router:o,store:r,Vue:a["a"],ssrContext:null,redirect:s,urlPath:c,publicPath:F});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:f++,e.next=11;break;case 29:if(!0!==u){e.next=31;break}return e.abrupt("return");case 31:new a["a"](n);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),K.apply(this,arguments)}H()},"4a5a":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));n("d3b7"),n("e6cf");var r=n("bc3a"),o=n.n(r),a=n("694d"),u="http://127.0.0.1:8000/api/",s=o.a.create({baseURL:u,headers:{Accept:"application/json"}});s.interceptors.request.use((function(e){return e.headers["Authorization"]="Bearer ".concat(a["a"].getAccessToken()),e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return e}),(function(e){e.config;var t=e.response;return t&&401===t.status&&(a["a"].clearLocalStorage(),location.reload()),Promise.reject(e)}))},6116:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));n("e9c4");var r=function(e){var t=new FormData;for(var n in e)Array.isArray(e[n])?t.append(n,JSON.stringify(e[n])):t.append(n,e[n]);return t},o=function(e){var t=new FormData;for(var n in e)Array.isArray(e[n])?t.append(n,JSON.stringify(e[n])):t.append(n,e[n]);return t.append("_method","put"),t}},"694d":function(e,t,n){"use strict";var r=n("970b"),o=n.n(r),a=n("5bc3"),u=n.n(a),s=(n("e9c4"),n("4a5a")),c={loginEndpoint:"".concat(s["a"],"auth/login"),registerEndpoint:"".concat(s["a"],"auth/register"),refreshEndpoint:"".concat(s["a"],"auth/token/refresh"),logoutEndpoint:"".concat(s["a"],"auth/logout"),tokenType:"Bearer",storageTokenKeyName:"accessToken",storageRefreshTokenKeyName:"refreshToken",storageUserDataKeyName:"userData"},i=function(){function e(){o()(this,e)}return u()(e,[{key:"storeUserData",value:function(e){sessionStorage.setItem(c.storageUserDataKeyName,JSON.stringify(e))}},{key:"getUserData",value:function(){var e=sessionStorage.getItem(c.storageUserDataKeyName);return e?JSON.parse(e):null}},{key:"storeAccessToken",value:function(e){sessionStorage.setItem(c.storageTokenKeyName,e)}},{key:"getAccessToken",value:function(){return sessionStorage.getItem(c.storageTokenKeyName)}},{key:"storeRefreshToken",value:function(e){sessionStorage.setItem(c.storageRefreshTokenKeyName,e)}},{key:"getRefreshToken",value:function(){return sessionStorage.getItem(c.storageRefreshTokenKeyName)}},{key:"clearLocalStorage",value:function(){sessionStorage.clear()}}]),e}();t["a"]=i=new i},7905:function(e,t,n){var r={"./posts/post":"a377","./posts/post.js":"a377","./users/profile":"96ca","./users/profile.js":"96ca"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="7905"},"96ca":function(e,t,n){"use strict";n.r(t);n("d3b7"),n("e6cf"),n("b0c0");var r=n("a2b6"),o=n("4a5a"),a=n("694d"),u=function(){return{loggedInUser:{}}},s={GET_LOGGED_IN_USER:function(e){return e.loggedInUser}},c={SET_LOGGED_IN_USER:function(e,t){e.loggedInUser=t}},i={FETCH_LOGGED_IN_USER:function(e,t){return Object(r["a"])()?new Promise((function(n,r){o["b"].get("auth/user",{params:t}).then((function(t){var r=t.data.data;r.role=r.relationships.roles.length?r.relationships.roles[0].name:"user",e.commit("SET_LOGGED_IN_USER",r),n(t)})).catch((function(e){return r(e)}))})):null},LOGOUT_USER:function(e){return Object(r["a"])()?new Promise((function(t,n){o["b"].get("auth/logout").then((function(n){e.commit("SET_LOGGED_IN_USER",{}),a["a"].clearLocalStorage(),t(n)})).catch((function(t){e.commit("SET_LOGGED_IN_USER",{}),a["a"].clearLocalStorage(),n(t)}))})):null}};t["default"]={namespaced:!0,name:"profile",state:u,getters:s,mutations:c,actions:i}},a2b6:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return f}));n("ac1f"),n("5319"),n("07ac"),n("d3b7"),n("159b"),n("00b4"),n("d81d"),n("caad"),n("2532");var r=n("694d"),o=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"top-right";e.$q.notify({type:t,message:n,position:r})},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Success!",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"top-right";e.$q.notify({type:"positive",message:t,position:n})},u=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Sorry! An error occurred, please try again shortly";n=s(t,n),o(e,"negative",n)},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Sorry! An error occurred, please try again shortly";return t=e.message?e.message:t,e.response&&e.response.data&&e.response.data.message&&(t=e.response.data.message),t},c=function(e,t){var n=[];t.response&&t.response.data&&t.response.data.errors&&(n=Object.values(t.response.data.errors)),0!==n.length?n.forEach((function(t){o(e,"negative",t)})):u(e,t)},i=n("bbbb"),f=(i.phone,function(){return!!r["a"].getAccessToken()})},a377:function(e,t,n){"use strict";n.r(t);n("d3b7"),n("e6cf");var r=n("4a5a"),o=n("6116"),a=function(){return{posts:{data:[]},fetchingPosts:!1,singlePost:{}}},u={GET_POSTS:function(e){return e.posts},GET_FETCHING_POSTS:function(e){return e.fetchingPosts},GET_SINGLE_POST:function(e){return e.singlePost}},s={SET_FETCHING_POSTS:function(e,t){e.fetchingPosts=t},SET_POSTS:function(e,t){e.posts=t},SET_SINGLE_POST:function(e,t){e.singlePost=t}},c={FETCH_POSTS:function(e,t){return e.commit("SET_FETCHING_POSTS",!0),new Promise((function(n,o){r["b"].get("posts",{params:t}).then((function(t){e.commit("SET_FETCHING_POSTS",!1),e.commit("SET_POSTS",t.data),n(t)})).catch((function(t){e.commit("SET_FETCHING_POSTS",!1),o(t)}))}))},ADD_POST:function(e,t){return new Promise((function(e,n){r["b"].post("posts",Object(o["b"])(t)).then((function(t){return e(t)})).catch((function(e){return n(e)}))}))},UPDATE_POST:function(e,t){return new Promise((function(e,n){r["b"].post("posts/".concat(t.id),Object(o["a"])(t)).then((function(t){return e(t)})).catch((function(e){return n(e)}))}))},DELETE_POST:function(e,t){return new Promise((function(e,n){r["b"].delete("posts/".concat(t)).then((function(t){return e(t)})).catch((function(e){return n(e)}))}))}};t["default"]={namespaced:!0,name:"posts",state:a,getters:u,mutations:s,actions:c}}});