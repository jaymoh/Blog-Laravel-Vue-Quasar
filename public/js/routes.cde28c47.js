(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{1431:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"overlay-heavy force-center"})},n=[],o={name:"AuthRegister"},i=o,r=(s("34de"),s("2877")),l=Object(r["a"])(i,a,n,!1,null,"466070d1",null);e["default"]=l.exports},"21f3":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col"},[s("div",{staticClass:"fit"},[s("q-card",{staticClass:"q-pa-md q-ma-md",attrs:{flat:"",elevated:""}},[t.postsResults.data.length?[s("div",{staticClass:"flex justify-end"},[s("q-btn",{staticClass:"q-ml-md q-px-sm text-capitalize",attrs:{size:"md","icon-right":t.iconDir},on:{click:t.handleSortingByPublicationDate}},[t._v("\n            Publication Date\n          ")])],1),t._l(t.postsResults.data,(function(t,e){return s("PostItem",{key:e,attrs:{"single-post":t}})}))]:s("div",[t._v("No Blog Posts to Show")])],2)],1)])},n=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",{staticClass:"q-pa-sm q-ma-sm",attrs:{flat:"",elevated:""}},[s("q-card-section",{staticClass:"q-pt-xs"},[s("div",{staticClass:"text-h5 q-mt-sm q-mb-xs"},[t._v(t._s(t.singlePost.title))]),s("div",{staticClass:"text-caption text-grey-10"},[t._v("\n      "+t._s(t.singlePost.description)+"\n    ")]),s("div",{staticClass:"flex justify-between"},[s("small",{staticClass:"q-mt-lg"},[t._v(t._s(t.prettyDate(t.singlePost.publication_date)))]),s("small",{staticClass:"text-overline q-mt-lg"},[t._v(t._s(t.singlePost.relationships.user.name))])])]),s("q-separator")],1)},i=[],r=s("b178"),l={name:"PostItem",props:{singlePost:{type:Object,required:!0}},methods:{prettyDate:function(t){return r["a"].formatDate(t,"YY-MM-DD")}}},c=l,u=s("2877"),p=Object(u["a"])(c,o,i,!1,null,"61445ed7",null),d=p.exports,m=s("a2b6"),g={name:"PostsList",components:{PostItem:d},props:{myPage:{type:Boolean,required:!1,default:function(){return!1}}},data:function(){return{pagination:{page:1,perPage:10,total:0,lastPage:1,from:0,to:0,searchQuery:"",sortBy:"id",sortDir:"ASC",includeRelations:["user"]},iconDir:"keyboard_arrow_up"}},computed:{postsResults:function(){return this.$store.getters["posts/GET_POSTS"]},fetchingPosts:function(){return this.$store.getters["posts/GET_FETCHING_POSTS"]},loggedUserData:function(){return this.$store.getters["profile/GET_LOGGED_IN_USER"]}},created:function(){this.myPage&&Object(m["a"])()&&(this.pagination.user=this.loggedUserData.id),this.actionFetchPosts()},methods:{actionFetchPosts:function(){this.$store.dispatch("posts/FETCH_POSTS",this.pagination).then((function(t){return t})).catch((function(t){return t}))},onPageChange:function(t){this.pagination.page=t,this.actionFetchPosts()},handleSortingByPublicationDate:function(){this.iconDir="keyboard_arrow_up"===this.iconDir?"keyboard_arrow_down":"keyboard_arrow_up",this.pagination.sortBy="publication_date",this.pagination.sortDir="keyboard_arrow_up"===this.iconDir?"ASC":"DESC",this.actionFetchPosts()}},watch:{"pagination.searchQuery":{handler:function(){this.pagination.page=1,this.actionFetchPosts()}},"pagination.page":{handler:function(){this.actionFetchPosts()}},postsResults:{deep:!0,handler:function(){Object.prototype.hasOwnProperty.call(this.postsResults,"meta")&&(this.pagination.total=this.postsResults.meta.total,this.pagination.lastPage=this.postsResults.meta.last_page,this.pagination.from=this.postsResults.meta.from,this.pagination.to=this.postsResults.meta.to)}}}},f=g,h=Object(u["a"])(f,a,n,!1,null,null,null);e["a"]=h.exports},"23bb":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"overlay-heavy force-center"},[s("div",{staticClass:"text-center"},[s("router-link",{attrs:{to:"/"}},[s("img",{staticClass:"logo-style responsive",attrs:{src:t.logoImgUrl,alt:"BlogTest"}})]),s("h4",{staticClass:"h4 q-mt-sm"},[t._v("Log In")]),s("div",{staticClass:"login-box"},[s("q-form",{ref:"loginForm"},[s("q-input",{staticClass:"q-ma-xl",attrs:{size:"sm",label:"Email",type:"email",trim:"","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Email Required"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("q-icon",{staticClass:"q-ml-md",attrs:{size:"md",name:"mail"}})]},proxy:!0}]),model:{value:t.loginForm.email,callback:function(e){t.$set(t.loginForm,"email",e)},expression:"loginForm.email"}}),s("q-input",{staticClass:"q-ma-xl",attrs:{size:"sm",label:"Password",type:"password",trim:"","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Password Required"}]},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.loginUser.apply(null,arguments))}},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("q-icon",{staticClass:"q-ml-md",attrs:{size:"md",name:"lock"}})]},proxy:!0}]),model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}})],1),s("div",{staticClass:"q-ma-xl"},[s("q-btn",{staticClass:"full-width q-pa-md q-ma-lg text-capitalize",attrs:{loading:t.loading,disable:t.loading,rounded:"",color:"grey"},on:{click:t.loginUser},scopedSlots:t._u([{key:"loading",fn:function(){return[s("q-spinner-facebook")]},proxy:!0}])},[s("span",{staticClass:"text-h5"},[t._v("Login")])])],1)],1)],1)])},n=[],o=(s("b0c0"),s("a2b6")),i=s("6116"),r=s("4a5a"),l=s("694d"),c={name:"AuthLogin",data:function(){return{logoImgUrl:"img/logo.jpg",loginForm:{email:"",password:""},loading:!1}},methods:{loginUser:function(){var t=this;this.$refs.loginForm.validate().then((function(e){e?(t.loading=!0,r["b"].post("auth/login",Object(i["b"])(t.loginForm)).then((function(e){t.loading=!1;var s=e.data.user;s.role=s.relationships.roles.length?s.relationships.roles[0].name:"user",l["a"].storeAccessToken(e.data.access_token),l["a"].storeRefreshToken(e.data.refresh_token),t.$store.commit("profile/SET_LOGGED_IN_USER",s),Object(o["c"])(t,"positive","Login Success"),t.$router.push({name:"MyPosts"})})).catch((function(e){t.loading=!1,Object(o["b"])(t,e)}))):Object(o["c"])(t,"negative","Please provide your credentials")}))}}},u=c,p=(s("6273"),s("2877")),d=Object(p["a"])(u,a,n,!1,null,"554c2a82",null);e["default"]=d.exports},"34de":function(t,e,s){"use strict";s("3757")},3757:function(t,e,s){},6273:function(t,e,s){"use strict";s("bcd1")},"738e":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",[s("PostsList",{attrs:{"my-page":!0}}),s("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[s("q-btn",{attrs:{fab:"",icon:"add",color:"primary"}})],1)],1)},n=[],o=s("21f3"),i={name:"MyPosts",components:{PostsList:o["a"]},data:function(){return{addPostDialog:!1}},computed:{},methods:{}},r=i,l=s("2877"),c=Object(l["a"])(r,a,n,!1,null,null,null);e["default"]=c.exports},"8b24":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",[s("PostsList")],1)},n=[],o=s("21f3"),i={name:"BlogIndex",components:{PostsList:o["a"]},data:function(){return{}},computed:{},methods:{}},r=i,l=s("2877"),c=Object(l["a"])(r,a,n,!1,null,null,null);e["default"]=c.exports},bcd1:function(t,e,s){},e51e:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fullscreen bg-grey-3 text-primary text-center q-pa-md flex flex-center"},[s("div",[s("div",{staticStyle:{"font-size":"30vh"}},[t._v("404")]),s("div",{staticClass:"text-h2",staticStyle:{opacity:"0.4"}},[t._v("Oops. Nothing here...")]),s("q-btn",{staticClass:"q-mt-xl",attrs:{color:"primary","text-color":"white",unelevated:"",to:"/",label:"Go Home","no-caps":""}})],1)])},n=[],o={name:"Error404"},i=o,r=s("2877"),l=Object(r["a"])(i,a,n,!1,null,null,null);e["default"]=l.exports}}]);