(function(){"use strict";var t={4345:function(t,e,n){var r=n(144),i=n(998),a=function(){var t=this,e=t._self._c;return e(i.Z,[e("router-view")],1)},s=[],o={name:"App",components:{},data:()=>({})},l=o,c=n(1001),u=(0,c.Z)(l,a,s,!1,null,null,null),p=u.exports,d=n(1705);r.ZP.use(d.Z);var m=new d.Z({theme:{options:{customProperties:!0},themes:{light:{primary:"#1a512e"}}}}),f=n(8345),v=n(1701),y=n(6190),h=n(266),x=n(7394),b=n(4324),Z=n(1713),g=n(8718),_=n(7808),C=function(){var t=this,e=t._self._c;return e("div",[e("HomeAppBar"),e("div",{staticClass:"background-bar"}),e(Z.Z,{staticClass:"d-flex justify-center"},[e("div",{staticClass:"search-box mx-6"},[e(_.Z,{staticClass:"transition-swing ma-0 pa-0",attrs:{"prepend-inner-icon":"mdi-magnify",label:"Search...","hide-details":"","single-line":"","justify-sm":"",rounded:"",clearable:""},model:{value:t.searchInput,callback:function(e){t.searchInput=e},expression:"searchInput"}})],1)]),e("div",{staticClass:"mx-1 mx-sm-2 mx-md-10 px-5"},[e(Z.Z,{staticClass:"d-flex justify-center py-sm-4 title"},[e("h1",{staticClass:"mt-3"},[t._v("Projects")])]),e(Z.Z,[e(h.Z,{staticClass:"px-0",attrs:{cols:"12",sm:"4",md:"3",lg:"2",xl:"1"}},[e(v.Z,{attrs:{items:t.orderBy,outlined:"",dense:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),e(g.Z),e(h.Z,{staticClass:"d-flex justify-end px-0",attrs:{cols:"12",sm:"3",md:"3",lg:"2",xl:"1"}},[e(y.Z,{staticClass:"filter-btn",class:{"grey lighten-3":t.expand},attrs:{outlined:""},on:{click:function(e){t.expand=!t.expand}}},[e(b.Z,{staticClass:"pr-2",attrs:{size:"20"}},[t._v(" mdi-filter-variant ")]),t._v(" Filters ")],1)],1)],1),e(x.Fx,[e(Z.Z,{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}]},[e("FilterField",{attrs:{title:"Tags",properties:t.tag}}),e("FilterField",{attrs:{title:"Render Pipeline",properties:t.renderPipeline}}),e("FilterField",{attrs:{title:"Platform",properties:t.platform,selectedItems:t.selectedPlatforms}}),e("FilterField",{attrs:{title:"Unity Tech Steam",properties:t.unityStream}})],1)],1)],1)],1)},k=[],j=n(3136),w=n(2082),S=function(){var t=this,e=t._self._c;return e(j.Z,{staticClass:"px-1 px-sm-4",attrs:{elevation:"0",color:"white"}},[e(Z.Z,{staticClass:"d-none d-sm-inline-flex align-center"},[e("router-link",{attrs:{to:"/"}},[t._v("Project Repository")]),e(g.Z),t._l(t.actionButtons,(function(n,r){return e(y.Z,t._b({key:r,staticClass:"mx-1",attrs:{color:"primary",outlined:"",fab:"",small:""},on:{click:function(t){n.action&&n.action()}}},"v-btn",n.bind,!1),[e(w.Z,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:r,attrs:i}){return[e(b.Z,t._g(t._b({attrs:{size:n.iconSize}},"v-icon",i,!1),r),[t._v(" "+t._s(n.iconName)+" ")])]}}],null,!0)},[e("span",[t._v(" "+t._s(n.tootlip)+" ")])])],1)})),e(y.Z,{staticClass:"px-7 py-5 mx-3",attrs:{color:"primary",elevation:"0",small:""}},[e("span",{staticClass:"ml-2"},[t._v("Add project")])]),e("AvatarButton")],2),e(Z.Z,{staticClass:"d-sm-none d-flex align-center ma-0"},[e("router-link",{attrs:{to:"/"}},[t._v("Project Repository")]),e(g.Z),e("AvatarButton",{attrs:{imageSize:"40px"}})],1)],1)},P=[],F=n(3423),O=n(9582),B=n(9223),A=n(6435),z=n(4604),I=function(){var t=this,e=t._self._c;return e(z.Z,{attrs:{bottom:"","min-width":"200px",rounded:"","offset-y":"",elevation:"0",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function({on:n}){return[e(y.Z,t._g({attrs:{icon:"","x-large":""}},n),[e(F.Z,{attrs:{size:t.imageSize}},[e("img",{attrs:{src:"https://i.pravatar.cc/43",alt:"Slack Image"}})])],1)]}}])},[e(O.Z,{attrs:{elevation:"0"}},[e(A.km,{staticClass:"justify-center",attrs:{elevation:"0"}},[e("div",{staticClass:"mx-auto text-center"},[t._l(t.menuButtons,(function(n,r){return[e(y.Z,t._b({key:r,attrs:{small:"",text:""},on:{click:function(t){n.action&&n.action()}}},"v-btn",n.bind,!1),[t._v(" "+t._s(n.name)+" ")]),t.menuButtons.length!==r+1?e(B.Z,{key:r,staticClass:"my-3"}):t._e()]}))],2)])],1)],1)},T=[],M={name:"AvatarButton",props:{imageSize:{type:String,default:"43px"}},data:()=>({menuButtons:[{name:"Owned projects"},{name:"Logout"}]})},H=M,N=(0,c.Z)(H,I,T,!1,null,null,null),R=N.exports,D={name:"HomeAppBar",data:()=>({actionButtons:[{name:"Slack Channel",iconName:"mdi-slack",iconSize:"19",tootlip:"Feedback & Questions",bind:{href:"slack://"}},{name:"Documentation",iconName:"mdi-help",iconSize:"17",tootlip:"Documentation",bind:{href:"",target:"_blank"}}]}),components:{AvatarButton:R}},E=D,L=(0,c.Z)(E,S,P,!1,null,"650e9280",null),Q=L.exports,U=function(){var t=this,e=t._self._c;return e(h.Z,{staticClass:"px-3 px-sm-7",attrs:{cols:"12",xl:"3",lg:"3",md:"6",sm:"6"}},[e(Z.Z,{staticClass:"font-weight-medium"},[t._v(" "+t._s(t.title)+" ")]),e(Z.Z,[e(v.Z,{staticClass:"transition-swing py-2 field",attrs:{items:t.properties,filled:"","item-value":"id","item-text":"name",multiple:"","small-chips":"","return-object":"","hide-selected":"","deletable-chips":"",outlined:"",dense:"","hide-details":""}})],1)],1)},$=[],q={name:"FilterField",props:{properties:{type:Array,default:null},title:{type:String,default:null},selectedItems:{type:Array,default:null}},data:()=>({})},G=q,J=(0,c.Z)(G,U,$,!1,null,"1d72013c",null),K=J.exports,V={name:"HomePage",data:()=>({orderBy:["Most recent","Oldest","My projects","Favorite","Popular","Recommended"],selected:"Most recent",expand:!1,searchInput:""}),components:{HomeAppBar:Q,FilterField:K}},W=V,X=(0,c.Z)(W,C,k,!1,null,"4bebd415",null),Y=X.exports;r.ZP.use(f.Z);const tt=[{path:"/",component:Y,children:[]}],et=new f.Z({mode:"history",base:"/projects-library/",routes:tt});var nt=et;r.ZP.config.productionTip=!1,new r.ZP({router:nt,vuetify:m,render:t=>t(p)}).$mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,a){if(!r){var s=1/0;for(u=0;u<t.length;u++){r=t[u][0],i=t[u][1],a=t[u][2];for(var o=!0,l=0;l<r.length;l++)(!1&a||s>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(o=!1,a<s&&(s=a));if(o){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[r,i,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,a,s=r[0],o=r[1],l=r[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(l)var u=l(n)}for(e&&e(r);c<s.length;c++)a=s[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},r=self["webpackChunkprojects_library"]=self["webpackChunkprojects_library"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4345)}));r=n.O(r)})();
//# sourceMappingURL=app.a510b29e.js.map