(function(){"use strict";var t={261:function(t,e,n){var a=n(144),r=n(998),i=function(){var t=this,e=t._self._c;return e(r.Z,[e("router-view")],1)},s=[],o={name:"App",components:{},data:()=>({})},l=o,c=n(1001),u=(0,c.Z)(l,i,s,!1,null,null,null),d=u.exports,p=n(1705);a.ZP.use(p.Z);var m=new p.Z({theme:{options:{customProperties:!0},themes:{light:{primary:"#1a512e"}}}}),f=n(8345),v=n(1701),h=n(6190),b=n(266),x=n(7394),g=n(4324),y=n(1713),Z=n(3687),_=n(626),C=n(4468),w=n(7808),j=function(){var t=this,e=t._self._c;return e("div",[e("HomeAppBar"),e("div",{staticClass:"background-bar"}),e(y.Z,{staticClass:"d-flex justify-center"},[e("div",{staticClass:"search-box mx-6"},[e(w.Z,{staticClass:"transition-swing ma-0 pa-0",attrs:{"prepend-inner-icon":"mdi-magnify",label:"Search...","hide-details":"","single-line":"","justify-sm":"",rounded:"",clearable:""},model:{value:t.searchInput,callback:function(e){t.searchInput=e},expression:"searchInput"}})],1)]),e("div",{staticClass:"mx-1 mx-sm-2 mx-md-10 px-5"},[e(y.Z,{staticClass:"d-flex justify-center py-sm-4 title"},[e("h1",{staticClass:"mt-3"},[t._v("Projects")])]),e(y.Z,{staticClass:"px-sm-4"},[e(b.Z,{staticClass:"px-0",attrs:{cols:"12",sm:"4",md:"3",lg:"2",xl:"1"}},[e(v.Z,{staticClass:"sortField",attrs:{items:t.orderBy,outlined:"",dense:""},model:{value:t.selectedOrder,callback:function(e){t.selectedOrder=e},expression:"selectedOrder"}})],1),e(Z.Z),e(b.Z,{attrs:{cols:"12",sm:"5",md:"5",lg:"4",xl:"2"}},[e(C.Z,{staticClass:"d-flex justify-center",model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(_.Z,{attrs:{href:"#card-view"}},[e(g.Z,{staticClass:"mr-1",attrs:{size:"19"}},[t._v(" mdi-view-grid-outline ")]),t._v(" Card view ")],1),e(_.Z,{attrs:{href:"#table-view"}},[e(g.Z,{staticClass:"mr-1",attrs:{size:"24"}},[t._v(" mdi-view-list-outline ")]),t._v(" Table view ")],1)],1)],1),e(Z.Z),e(b.Z,{staticClass:"d-flex justify-end px-0",attrs:{cols:"12",sm:"3",md:"3",lg:"2",xl:"1"}},[e(h.Z,{staticClass:"filter-btn",class:{"grey lighten-3":t.expand},attrs:{outlined:""},on:{click:function(e){t.expand=!t.expand}}},[e(g.Z,{staticClass:"pr-2",attrs:{size:"20"}},[t._v(" mdi-filter-variant ")]),t._v(" Filters ")],1)],1)],1),e(x.Fx,[e(y.Z,{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}]},[e("FilterField",{attrs:{title:"Tags",properties:t.tag}}),e("FilterField",{attrs:{title:"Render Pipeline",properties:t.renderPipeline}}),e("FilterField",{attrs:{title:"Platform",properties:t.platform,selectedItems:t.selectedPlatforms}}),e("FilterField",{attrs:{title:"Unity Tech Steam",properties:t.unityStream}})],1)],1)],1)],1)},k=[],P=n(6072),O=n(2082),S=function(){var t=this,e=t._self._c;return e(P.Z,{staticClass:"px-1 px-sm-4",attrs:{elevation:"0",color:"white"}},[e(y.Z,{staticClass:"d-none d-sm-inline-flex align-center"},[e("router-link",{attrs:{to:"/"}},[t._v("Project Library")]),e(Z.Z),t._l(t.actionButtons,(function(n,a){return e(h.Z,t._b({key:a,staticClass:"mx-1",attrs:{color:"primary",outlined:"",fab:"",small:""},on:{click:function(t){n.action&&n.action()}}},"v-btn",n.bind,!1),[e(O.Z,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:r}){return[e(g.Z,t._g(t._b({attrs:{size:n.iconSize}},"v-icon",r,!1),a),[t._v(" "+t._s(n.iconName)+" ")])]}}],null,!0)},[e("span",[t._v(" "+t._s(n.tootlip)+" ")])])],1)})),e(h.Z,t._b({staticClass:"px-7 py-5 mx-3",attrs:{color:"primary",elevation:"0",small:""},on:{click:function(e){t.dialog=!0}}},"v-btn",t.attrs,!1),[e("span",{staticClass:"ml-2"},[t._v("Add project")])]),e("AvatarButton")],2),e(y.Z,{staticClass:"d-sm-none d-flex align-center ma-0"},[e("router-link",{attrs:{to:"/"}},[t._v("Project Repository")]),e(Z.Z),e("AvatarButton",{attrs:{imageSize:"40px"}})],1),e("CreateProjectDialog",{attrs:{justify:"center"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}})],1)},F=[],B=n(3423),z=n(9582),A=n(9223),T=n(6098),I=n(4568),M=function(){var t=this,e=t._self._c;return e(I.Z,{attrs:{bottom:"","min-width":"200px",rounded:"","offset-y":"",elevation:"0",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function({on:n}){return[e(h.Z,t._g({attrs:{icon:"","x-large":""}},n),[e(B.Z,{attrs:{size:t.imageSize}},[e("img",{attrs:{src:"https://i.pravatar.cc/43",alt:"Slack Image"}})])],1)]}}])},[e(z.Z,{attrs:{elevation:"0"}},[e(T.km,{staticClass:"justify-center",attrs:{elevation:"0"}},[e("div",{staticClass:"mx-auto text-center"},[t._l(t.menuButtons,(function(n,a){return[e(h.Z,t._b({key:a,attrs:{small:"",text:""},on:{click:function(t){n.action&&n.action()}}},"v-btn",n.bind,!1),[t._v(" "+t._s(n.name)+" ")]),t.menuButtons.length!==a+1?e(A.Z,{key:a,staticClass:"my-3"}):t._e()]}))],2)])],1)],1)},D=[],H={name:"AvatarButton",props:{imageSize:{type:String,default:"43px"}},data:()=>({menuButtons:[{name:"Owned projects"},{name:"Logout"}]})},N=H,L=(0,c.Z)(N,M,D,!1,null,null,null),R=L.exports,$=n(2118),E=n(9930),Q=function(){var t=this,e=t._self._c;return e(E.Z,{attrs:{"max-width":"650"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e(z.Z,{attrs:{shaped:""}},[e($.Z,[t._v(" hello ")])],1)],1)},U=[],q={name:"CreateProjectDialog",data:()=>({}),props:{value:Boolean},computed:{show:{get(){return this.value},set(t){this.$emit("input",t)}}}},G=q,J=(0,c.Z)(G,Q,U,!1,null,null,null),K=J.exports,V={name:"HomeAppBar",data:()=>({dialog:!1,attrs:[],actionButtons:[{name:"Slack Channel",iconName:"mdi-slack",iconSize:"19",tootlip:"Feedback & Questions",bind:{href:"slack://"}},{name:"Documentation",iconName:"mdi-help",iconSize:"17",tootlip:"Documentation",bind:{href:"",target:"_blank"}}],menuButtons:[{name:"Owned projects"},{name:"Logout"}]}),components:{AvatarButton:R,CreateProjectDialog:K}},W=V,X=(0,c.Z)(W,S,F,!1,null,"4814fba1",null),Y=X.exports,tt=function(){var t=this,e=t._self._c;return e(b.Z,{staticClass:"px-3 px-sm-7",attrs:{cols:"12",xl:"3",lg:"3",md:"6",sm:"6"}},[e(y.Z,{staticClass:"font-weight-medium"},[t._v(" "+t._s(t.title)+" ")]),e(y.Z,[e(v.Z,{staticClass:"transition-swing py-2 field",attrs:{items:t.properties,filled:"","item-value":"id","item-text":"name",multiple:"","small-chips":"","return-object":"","hide-selected":"","deletable-chips":"",outlined:"",dense:"","hide-details":""}})],1)],1)},et=[],nt={name:"FilterField",props:{properties:{type:Array,default:null},title:{type:String,default:null},selectedItems:{type:Array,default:null}},data:()=>({})},at=nt,rt=(0,c.Z)(at,tt,et,!1,null,"1d72013c",null),it=rt.exports,st={name:"HomePage",data:()=>({orderBy:["Most recent","Oldest","My projects","Favorite","Popular","Recommended"],selectedOrder:"Most recent",expand:!1,searchInput:"",tab:"card-view"}),components:{HomeAppBar:Y,FilterField:it}},ot=st,lt=(0,c.Z)(ot,j,k,!1,null,"5b3e9738",null),ct=lt.exports;a.ZP.use(f.Z);const ut=[{path:"/",component:ct,children:[]}],dt=new f.Z({mode:"history",base:"/projects-library/",routes:ut});var pt=dt;a.ZP.config.productionTip=!1,new a.ZP({router:pt,vuetify:m,render:t=>t(d)}).$mount("#app")}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,a,r,i){if(!a){var s=1/0;for(u=0;u<t.length;u++){a=t[u][0],r=t[u][1],i=t[u][2];for(var o=!0,l=0;l<a.length;l++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](a[l])}))?a.splice(l--,1):(o=!1,i<s&&(s=i));if(o){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[a,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,i,s=a[0],o=a[1],l=a[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(r in o)n.o(o,r)&&(n.m[r]=o[r]);if(l)var u=l(n)}for(e&&e(a);c<s.length;c++)i=s[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},a=self["webpackChunkprojects_library"]=self["webpackChunkprojects_library"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(261)}));a=n.O(a)})();
//# sourceMappingURL=app.6efb011b.js.map