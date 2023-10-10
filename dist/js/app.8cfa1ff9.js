(function(){"use strict";var e={258:function(e,t,a){var n=a(6369),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},l=[],r=a(1001),i={},s=(0,r.Z)(i,o,l,!1,null,null,null),c=s.exports,u=a(2631),d=function(){var e=this,t=e._self._c;return t("el-row",[t("el-col",{staticStyle:{"padding-right":"10px"},attrs:{span:8}},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"user"},[t("img",{attrs:{src:a(6982),alt:""}}),t("div",{staticClass:"userinfo"},[t("p",{staticClass:"name"},[e._v("Admin")]),t("p",{staticClass:"access"},[e._v("超级管理员")])])]),t("div",{staticClass:"login-info"},[t("div",{staticClass:"info"},[t("p",[e._v("上次登录时间：")]),t("p",[e._v("2023.10.10")])]),t("div",{staticClass:"info"},[t("p",[e._v("上次登录地点：")]),t("p",[e._v("上海")])])])]),t("el-card",{staticStyle:{"margin-top":"20px",height:"460px"}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},e._l(e.tableLabel,(function(e,a,n){return t("el-table-column",{key:n,attrs:{prop:a,label:e}})})),1)],1)],1),t("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:16}},[t("div",{staticClass:"num"},e._l(e.countData,(function(a){return t("el-card",{key:a.name,attrs:{"body-style":{display:"flex",padding:0}}},[t("i",{staticClass:"icon",class:`el-icon-${a.icon}`,style:{background:a.color}}),t("div",{staticClass:"detail"},[t("p",{staticClass:"price"},[e._v("￥"+e._s(a.value))]),t("p",{staticClass:"desc"},[e._v(e._s(a.name))])])])})),1),t("el-card",{staticStyle:{height:"250px"}},[t("div",{ref:"echarts1",staticStyle:{height:"250px"}})]),t("div",{staticClass:"graph"},[t("el-card",{staticStyle:{height:"250px"}},[t("div",{ref:"echarts2",staticStyle:{height:"250px"}})]),t("el-card",{staticStyle:{height:"250px"}})],1)],1)],1)},p=[],m=(a(7658),a(4161));const f=m.Z.create({baseURL:"/api",timeOut:1e4});f.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),f.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var h=f;const v=()=>h.get("/home/getData");var b=a(347),g={name:"HomeView",data(){return{tableData:[],tableLabel:{name:"课程",todayBuy:"今日购买",monthBuy:"本月购买",totalBuy:"总购买"},countData:[{name:"今日支付订单",value:1234,icon:"success",color:"#2ec7c9"},{name:"今日收藏订单",value:210,icon:"star-on",color:"#ffb980"},{name:"今日未支付订单",value:1234,icon:"s-goods",color:"#5ab1ef"},{name:"本月支付订单",value:1234,icon:"success",color:"#2ec7c9"},{name:"本月收藏订单",value:210,icon:"star-on",color:"#ffb980"},{name:"本月未支付订单",value:1234,icon:"s-goods",color:"#5ab1ef"}]}},mounted(){v().then((({data:e})=>{const{tableData:t,userData:a}=e.data;console.log(e.data),this.tableData=t;const n=b.S1(this.$refs.echarts1);var o={};const{orderData:l}=e.data,r=Object.keys(l.data[0]),i={data:r};o.xAxis=i,o.yAxis={},o.legend=i,o.series=[],r.forEach((e=>{o.series.push({name:e,data:l.data.map((t=>t[e])),type:"line"})})),console.log(o),n.setOption(o);const s=b.S1(this.$refs.echarts2),c={legend:{textStyle:{color:"#333"}},grid:{left:"20%"},tooltip:{trigger:"axis"},xAxis:{type:"category",data:a.map((e=>e.date)),axisLine:{lineStyle:{color:"#17b3a3"}},axisLabel:{interval:0,color:"#333"}},yAxis:[{type:"value",axisLine:{lineStyle:{color:"#17b3a3"}}}],color:["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3"],series:[{name:"新增用户",data:a.map((e=>e.new)),type:"bar"},{name:"活跃用户",data:a.map((e=>e.active)),type:"bar"}]};s.setOption(c)}))}},y=g,C=(0,r.Z)(y,d,p,!1,null,"bab43bf8",null),_=C.exports,x=function(){var e=this,t=e._self._c;return t("div",[t("el-container",[t("el-aside",{attrs:{width:"auto"}},[t("common-aside")],1),e._v(" "),t("el-container",[t("el-header",[t("common-header")],1),t("el-main",[t("router-view")],1)],1)],1)],1)},w=[],k=function(){var e=this,t=e._self._c;return t("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{collapse:e.isCollapse,"background-color":"#545c64","text-color":"#fff","active-text-color":"#fff","collapse-transition":!1},on:{open:e.handleOpen,close:e.handleClose}},[t("h3",[e._v(e._s(e.isCollapse?"后台":"通用后台管理系统")+" ")]),e._l(e.noChildren,(function(a){return t("el-menu-item",{key:a.name,attrs:{index:a.name},on:{click:function(t){return e.clickMenu(a)}}},[t("i",{class:`el-icon-${a.icon}`}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(a.label))])])})),e._l(e.hasChildren,(function(a){return t("el-submenu",{key:a.label,attrs:{index:"item.label"}},[t("template",{slot:"title"},[t("i",{class:`el-icon-${a.icon}`}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(a.label))])]),e._l(a.children,(function(a){return t("el-menu-item-group",{key:a.path},[t("router-link",{attrs:{to:{name:a.name}}},[t("el-menu-item",{attrs:{index:a.path}},[e._v(" "+e._s(a.label)+" ")])],1)],1)}))],2)}))],2)},S=[],O={data(){return{menuData:[{path:"/",name:"home",label:"首页",icon:"s-home",url:"Home/Home"},{path:"/mall",name:"mall",label:"商品管理",icon:"video-play",url:"MallManage/MallManage"},{path:"/user",name:"user",label:"用户管理",icon:"user",url:"UserManage/UserManage"},{label:"其他",icon:"location",children:[{path:"/page1",name:"page1",label:"页面1",icon:"setting",url:"Other/PageOne"},{path:"/page2",name:"page2",label:"页面2",icon:"setting",url:"Other/PageTwo"}]}]}},methods:{handleOpen(e,t){console.log(e,t)},handleClose(e,t){console.log(e,t)},clickMenu(e){console.log(e),this.$route.path===e.path||"/home"===this.$route.path&&"/"===e.path||this.$router.push(e.path)}},computed:{noChildren(){return this.menuData.filter((e=>!e.children))},hasChildren(){return this.menuData.filter((e=>e.children))},isCollapse(){return this.$store.state.tag.isCollapse}}},B=O,D=(0,r.Z)(B,k,S,!1,null,"f360f6ea",null),j=D.exports,P=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header-container"},[t("div",{staticClass:"l-content"},[t("i",{class:e.collapseIcon,staticStyle:{"font-size":"30px",color:"lightblue"},on:{click:e.handleCollapse}}),t("el-breadcrumb",[t("el-breadcrumb-item",{staticClass:"text",attrs:{to:{path:"/"}}},[e._v("首页")])],1)],1),t("div",{staticClass:"r-content"},[t("i",{staticClass:"el-icon-quanping",on:{click:e.handleFullScreen}}),t("el-dropdown",[t("span",{staticClass:"el-dropdown-link"},[t("img",{staticClass:"user",attrs:{src:a(6982),alt:""}})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",[e._v("个人中心")]),t("el-dropdown-item",[e._v("退出")])],1)],1)],1)])},M=[],$={data(){return{collapseIcon:"el-icon-s-fold"}},methods:{handleCollapse(){this.$store.commit("handleCollapse"),this.collapseIcon=this.$store.state.tag.isCollapse?"el-icon-s-unfold":"el-icon-s-fold"},handleFullScreen(){document.documentElement.requestFullscreen()}}},A=$,Z=(0,r.Z)(A,P,M,!1,null,"33d7b77e",null),T=Z.exports,E={components:{CommonAside:j,CommonHeader:T},name:"Main",data(){return{}}},L=E,R=(0,r.Z)(L,x,w,!1,null,"b69b7a16",null),F=R.exports;n["default"].use(u.ZP);const q=[{path:"/",name:"main",component:F,redirect:"/home",children:[{path:"user",name:"user",component:()=>a.e(443).then(a.bind(a,1871))},{path:"home",name:"home",component:_},{path:"mall",name:"mall",component:()=>a.e(592).then(a.bind(a,9592))},{path:"page1",name:"page1",component:()=>a.e(110).then(a.bind(a,110))},{path:"page2",name:"page2",component:()=>a.e(806).then(a.bind(a,6806))}]}],H=new u.ZP({routes:q});var I=H,N=a(3822),U={namespace:!0,state:{isCollapse:!1},mutations:{handleCollapse(e){e.isCollapse=!e.isCollapse}}};n["default"].use(N.ZP);var z=new N.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{tag:U}}),V=a(8499),G=a.n(V),J=a(7634),K=a.n(J);let Q=[];var W={getStatisticalData:()=>{for(let e=0;e<7;e++)Q.push(K().mock({"苹果":K().Random.float(100,8e3,0,0),vivo:K().Random.float(100,8e3,0,0),oppo:K().Random.float(100,8e3,0,0),"魅族":K().Random.float(100,8e3,0,0),"三星":K().Random.float(100,8e3,0,0),"小米":K().Random.float(100,8e3,0,0)}));return{code:2e4,data:{videoData:[{name:"小米",value:2999},{name:"苹果",value:5999},{name:"vivo",value:1500},{name:"oppo",value:1999},{name:"魅族",value:2200},{name:"三星",value:4500}],userData:[{date:"周一",new:5,active:200},{date:"周二",new:10,active:500},{date:"周三",new:12,active:550},{date:"周四",new:60,active:800},{date:"周五",new:65,active:550},{date:"周六",new:53,active:770},{date:"周日",new:33,active:170}],orderData:{date:["20191001","20191002","20191003","20191004","20191005","20191006","20191007"],data:Q},tableData:[{name:"oppo",todayBuy:500,monthBuy:3500,totalBuy:22e3},{name:"vivo",todayBuy:300,monthBuy:2200,totalBuy:24e3},{name:"苹果",todayBuy:800,monthBuy:4500,totalBuy:65e3},{name:"小米",todayBuy:1200,monthBuy:6500,totalBuy:45e3},{name:"三星",todayBuy:300,monthBuy:2e3,totalBuy:34e3},{name:"魅族",todayBuy:350,monthBuy:3e3,totalBuy:22e3}]}}}};K().mock("/api/home/getData",W.getStatisticalData()),n["default"].config.productionTip=!1,n["default"].use(G()),new n["default"]({router:I,store:z,render:e=>e(c)}).$mount("#app")},6982:function(e,t,a){e.exports=a.p+"img/pic.543a1176.jpg"}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var l=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(l.exports,l,l.exports,a),l.loaded=!0,l.exports}a.m=e,function(){a.amdO={}}(),function(){var e=[];a.O=function(t,n,o,l){if(!n){var r=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],l=e[u][2];for(var i=!0,s=0;s<n.length;s++)(!1&l||r>=l)&&Object.keys(a.O).every((function(e){return a.O[e](n[s])}))?n.splice(s--,1):(i=!1,l<r&&(r=l));if(i){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,o,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+(443===e?"about":e)+"."+{110:"bde71f81",443:"ede0108d",592:"660ab133",806:"9747b821"}[e]+".js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="my-app:";a.l=function(n,o,l,r){if(e[n])e[n].push(o);else{var i,s;if(void 0!==l)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+l){i=d;break}}i||(s=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+l),i.src=n),e[n]=[o];var p=function(t,a){i.onerror=i.onload=null,clearTimeout(m);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(a)})),t)return t(a)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),s&&document.head.appendChild(i)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){a.p=""}(),function(){var e={143:0};a.f.j=function(t,n){var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var l=new Promise((function(a,n){o=e[t]=[a,n]}));n.push(o[2]=l);var r=a.p+a.u(t),i=new Error,s=function(n){if(a.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var l=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+l+": "+r+")",i.name="ChunkLoadError",i.type=l,i.request=r,o[1](i)}};a.l(r,s,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,l,r=n[0],i=n[1],s=n[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(s)var u=s(a)}for(t&&t(n);c<r.length;c++)l=r[c],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(u)},n=self["webpackChunkmy_app"]=self["webpackChunkmy_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(258)}));n=a.O(n)})();
//# sourceMappingURL=app.8cfa1ff9.js.map