(function(e){function t(t){for(var s,n,c=t[0],l=t[1],i=t[2],u=0,d=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,n=1;n<a.length;n++){var c=a[n];0!==r[c]&&(s=!1)}s&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var s={},n={app:0},r={app:0},o=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-1342ca48":"55189428"}[e]+".js"}function l(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={"chunk-1342ca48":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var s="css/"+({}[e]||e)+"."+{"chunk-1342ca48":"87060e82"}[e]+".css",r=l.p+s,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var i=o[c],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===s||u===r))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){i=d[c],u=i.getAttribute("data-href");if(u===s||u===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var s=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete n[e],f.parentNode.removeChild(f),a(o)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){n[e]=0})));var s=r[e];if(0!==s)if(s)t.push(s[2]);else{var o=new Promise((function(t,a){s=r[e]=[t,a]}));t.push(s[2]=o);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var d=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(f);var a=r[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",d.name="ChunkLoadError",d.type=s,d.request=n,a[1](d)}r[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=s,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(a,s,function(t){return e[t]}.bind(null,s));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=u;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"3c2b":function(e,t,a){"use strict";var s=a("523e"),n=a.n(s);n.a},4255:function(e,t,a){"use strict";var s=a("b847"),n=a.n(s);n.a},4624:function(e,t,a){"use strict";var s=a("1157"),n=a.n(s),r=a("2f62"),o={data(){return{loading:!1}},methods:{getTop(){const e={Home:n()("#Home").offset().top,Counter:n()("#Counter").offset().top,Madmanga:n()("#Madmanga").offset().top,Story:n()("#Story").offset().top,Parallax:n()("#Parallax").offset().top,Evolution:n()("#Evolution").offset().top,Thunder:n()("#Thunder").offset().top,RoadMap:n()("#RoadMap").offset().top,QA:n()("#QA").offset().top,WhoWeAre:n()("#WhoWeAre").offset().top};return e},isScrollToFinished(e,t){const a=setInterval(()=>{e===t&&clearInterval(a)},25)}},computed:{...Object(r["b"])("home",["currentScrollTop","offsetTops"])},mounted(){},watch:{"$route.path"(){}}};t["a"]={global:o}},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},"523e":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("2b0e"),n=a("f23d"),r=(a("202f"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a(e.layout,{tag:"component"},[a("router-view")],1)],1)}),o=[],c={name:"App",computed:{layout(){return"layout-"+(this.$route.meta.layout||"default").toLowerCase()}}},l=c,i=a("2877"),u=Object(i["a"])(l,r,o,!1,null,null,null),d=u.exports,f=a("8c4f");s["default"].use(f["a"]);let p=[{path:"/",name:"HomePage",layout:"dashboard",component:()=>a.e("chunk-1342ca48").then(a.bind(null,"f4a9"))}];function m(e,t="default"){return e.meta=e.meta||{},e.meta.layout=e.layout||t,e.children&&(e.children=e.children.map(t=>m(t,e.meta.layout))),e}p=p.map(e=>m(e));const h=new f["a"]({mode:"history",base:"/",routes:p,scrollBehavior(e,t,a){return e.hash?{selector:e.hash,behavior:"smooth"}:{x:0,y:0,behavior:"smooth"}}});var b=h,j=a("2f62"),g={namespaced:!0,state:{isLoginOpen:!1,currentScrollTop:0,currentWidth:window.innerWidth,offsetTops:{},fullpageElement:null},actions:{updateIsLoginOpen(e,t){e.commit("isLoginOpen",t)},updateCurrentScrollTop(e,t){e.commit("currentScrollTop",t)},updateCurrentWidth(e,t){e.commit("currentWidth",t)},updateOffsetTops(e,t){e.commit("offsetTops",t)},updateFullpageElement(e,t){e.commit("fullpageElement",t)}},mutations:{isLoginOpen(e,t){e.isLoginOpen=t},currentScrollTop(e,t){e.currentScrollTop=t},currentWidth(e,t){e.currentWidth=t},offsetTops(e,t){e.offsetTops=t},fullpageElement(e,t){e.fullpageElement=t}}};s["default"].use(j["a"]);const v=new j["a"].Store({modules:{home:g}});var y=v,k=a("5f5b"),w=a("b1e0"),T=(a("a41b"),a("a0a0"),a("a45e")),_=a.n(T),C=a("77ed"),x=a.n(C),O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",[a("router-view",{key:e.$route.path})],1)},S=[],E={components:{}},L=E,M=Object(i["a"])(L,O,S,!1,null,null,null),z=M.exports,A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.loading?a("a-layout",[a("Loading")],1):a("a-layout",[a("Login"),a("Header"),a("router-view",{key:e.$route.path}),a("Footer")],1)],1)},$=[],P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-page",class:{open:e.isLoginOpen}},[a("div",{staticClass:"expend_login",class:{expend_login_open:e.isLoginOpen,onTop:0==e.currentScrollTop},on:{click:function(t){return t.stopPropagation(),e.TriggerLoginWrapper(!0)}}},[a("div",{staticClass:"login-circle flex jcc aic"},[e.isLoginOpen?a("a-icon",{staticStyle:{"font-size":"24px"},attrs:{type:"cross"},on:{click:function(t){return t.stopPropagation(),e.TriggerLoginWrapper(!1)}}}):a("span",{staticClass:"wallet"},[e._v("WALLET")])],1)]),e.isLoginOpen?a("div",{staticClass:"login_contain flex jcc aic"},[a("div",{staticClass:"login_connect flex jcc aic fdc"},[a("h1",{staticClass:" text-center white font-regular mar_0"},[e._v("METAMASK")]),a("img",{staticClass:"width100 login_dog",attrs:{src:"/images/mad_mange/metamask.png",alt:""}}),a("div",{staticClass:"wid100 flex jcc aic mart_2"},[a("a-button",{staticClass:"login-btn white",attrs:{shape:"round",size:"large"}},[e._v("CONNECT")])],1)])]):e._e()])},W=[],H=a("1157"),N=a.n(H),Z={data(){return{}},computed:{...Object(j["b"])("home",["isLoginOpen","currentScrollTop"])},methods:{TriggerLoginWrapper(e){this.$store.dispatch("home/updateIsLoginOpen",e)}}},B=Z,F=(a("3c2b"),Object(i["a"])(B,P,W,!1,null,null,null)),D=F.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"por"},[a("header",{staticClass:"header-area header-style-two header--fixed color-black por"},[a("div",{staticClass:"header-wrapper"},[a("div",{staticClass:"header-left d-flex align-items-center"},[a("div",{staticClass:"logo"},[a("a",{on:{click:function(t){return e.scrollTo("Home")}}},[a("img",{staticClass:"header_logo",attrs:{src:"/images/logo/header-logo.png",alt:"Digital Agency"}})])]),a("nav",{staticClass:"mainmenunav d-lg-block ml--50"},[a("ul",{staticClass:"mainmenu"},[a("li",[a("a",{on:{click:function(t){return e.scrollTo("Home")}}},[e._v("HOME")])]),a("li",[a("a",{on:{click:function(t){return e.scrollTo("Madmanga")}}},[e._v("STORY")])]),a("li",[a("a",{on:{click:function(t){return e.scrollTo("Evolution")}}},[e._v("FOMO STONE")])]),a("li",[a("a",{on:{click:function(t){return e.scrollTo("RoadMap")}}},[e._v("ROAD MAP")])]),a("li",[a("a",{on:{click:function(t){return e.scrollTo("QA")}}},[e._v("Q&A")])]),a("li",[a("a",{on:{click:function(t){return e.scrollTo("WhoWeAre")}}},[e._v("TEAM")])])])])]),a("div",{staticClass:"header-right"},[a("div",{staticClass:"social-share-inner"},[a("ul",{staticClass:"social-share social-style--2 color-black d-flex justify-content-start liststyle"},[a("li",{staticClass:"flex jcc aic marl_2 marr_2"},[a("a",[a("svg",{staticStyle:{width:"90%"},attrs:{id:"圖層_1","data-name":"圖層 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18.59 14.13"}},[a("path",{staticClass:"cls-1",attrs:{d:"M435.87,401.54c0,.41-.05.82-.07,1.24a.34.34,0,0,1-.16.28,16,16,0,0,1-4.42,2.22.18.18,0,0,1-.24-.08c-.27-.46-.55-.91-.83-1.37-.06-.1,0-.15.08-.19l1.26-.6c.16-.08.15-.11,0-.24a.41.41,0,0,0-.51-.07,10.2,10.2,0,0,1-3.24.88,10.83,10.83,0,0,1-5.1-.66c-.21-.08-.43-.16-.63-.26a.27.27,0,0,0-.34.05c-.25.2-.26.21,0,.35s.76.37,1.15.54c.13.06.15.11.08.23-.28.45-.56.9-.83,1.35-.06.1-.12.1-.22.07a15.36,15.36,0,0,1-4.44-2.25.36.36,0,0,1-.13-.23c0-.65-.06-1.3-.06-1.94a13.52,13.52,0,0,1,.28-2.53,16.26,16.26,0,0,1,2.39-5.75.91.91,0,0,1,.43-.37,16.19,16.19,0,0,1,3.41-1,.18.18,0,0,1,.22.1c.11.25.25.5.36.75a.19.19,0,0,0,.23.12,12.11,12.11,0,0,1,2.33-.14c.54,0,1.08.09,1.62.14a.18.18,0,0,0,.22-.12c.11-.25.24-.5.36-.75a.15.15,0,0,1,.19-.1,15.25,15.25,0,0,1,3.57,1.11.47.47,0,0,1,.19.15,15.77,15.77,0,0,1,2.24,4.81,13.87,13.87,0,0,1,.51,3.2c0,.37,0,.73,0,1.1Zm-4.53-2.6a1.87,1.87,0,0,0-.44-1.28,1.54,1.54,0,0,0-2.3-.17,2,2,0,0,0,0,2.89,1.56,1.56,0,0,0,2,.17A1.89,1.89,0,0,0,431.34,398.94Zm-6.18,0a1.91,1.91,0,0,0-.53-1.4,1.56,1.56,0,0,0-2.24-.05,2,2,0,0,0,0,2.88,1.54,1.54,0,0,0,1.93.17A1.87,1.87,0,0,0,425.16,399Z",transform:"translate(-417.28 -391.17)"}})])])]),a("li",{staticClass:"flex jcc aic marl_2 marr_2"},[a("a",[a("svg",{staticStyle:{width:"80%"},attrs:{id:"圖層_1","data-name":"圖層 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 17.28 17.26"}},[a("path",{staticClass:"cls-1",attrs:{d:"M409.13,400.48c0,.53,0,1,0,1.58,0,.78,0,1.57-.08,2.35a5.09,5.09,0,0,1-.86,2.66,4.36,4.36,0,0,1-2.84,1.83,10.53,10.53,0,0,1-1.78.18c-1.68,0-3.37.06-5.06,0a19.44,19.44,0,0,1-2.65-.18A4.47,4.47,0,0,1,392,405.2a9.89,9.89,0,0,1-.14-1.53c0-1.34,0-2.69,0-4,0-.82,0-1.64,0-2.46a6.71,6.71,0,0,1,.49-2.54,4.3,4.3,0,0,1,2.22-2.24,5.06,5.06,0,0,1,2.09-.47c2.09,0,4.18-.07,6.27-.06a10.09,10.09,0,0,1,2.57.24,4.47,4.47,0,0,1,3.41,3.67,10.72,10.72,0,0,1,.14,1.5c0,1.07,0,2.14,0,3.2Zm-8.69-7.13h0c-.76,0-1.51,0-2.26,0a19.83,19.83,0,0,0-2.18.19,2.88,2.88,0,0,0-2.4,2.23,12.09,12.09,0,0,0-.24,2.81c0,1.95-.09,3.9.1,5.85a5,5,0,0,0,.28,1.21,2.89,2.89,0,0,0,2.58,1.84c.93.09,1.87.14,2.81.15,1.34,0,2.68,0,4,0a12.37,12.37,0,0,0,1.93-.19,2.81,2.81,0,0,0,2.31-2.18,8.94,8.94,0,0,0,.24-2.31c0-1.76,0-3.53,0-5.3a8.8,8.8,0,0,0-.19-1.77,2.8,2.8,0,0,0-2.15-2.25,10.45,10.45,0,0,0-2.43-.25C402,393.33,401.23,393.35,400.44,393.35Z",transform:"translate(-391.86 -391.86)"}}),a("path",{staticClass:"cls-1",attrs:{d:"M400.5,404.9a4.42,4.42,0,1,1,0-8.83,4.42,4.42,0,1,1,0,8.83Zm2.91-4.41a2.92,2.92,0,1,0-3,2.91A2.93,2.93,0,0,0,403.41,400.49Z",transform:"translate(-391.86 -391.86)"}}),a("path",{staticClass:"cls-1",attrs:{d:"M404.13,395.85a1,1,0,1,1,1,1A1,1,0,0,1,404.13,395.85Z",transform:"translate(-391.86 -391.86)"}})])])]),a("li",{staticClass:"flex jcc aic marl_2 marr_2"},[a("a",[a("svg",{staticStyle:{width:"90%"},attrs:{id:"圖層_1","data-name":"圖層 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16.82 13.77"}},[a("path",{staticClass:"cls-1",attrs:{d:"M392.09,405.91a7.16,7.16,0,0,0,5.09-1.47,3.58,3.58,0,0,1-3.27-2.4,4,4,0,0,0,1.61-.09,3.54,3.54,0,0,1-2-1.21,3.48,3.48,0,0,1-.79-2.22,3.56,3.56,0,0,0,1.55.42,3.57,3.57,0,0,1-1.09-4.65,10,10,0,0,0,7.2,3.65c0-.22,0-.4-.05-.58a3.31,3.31,0,0,1,.9-2.58,3.35,3.35,0,0,1,3.12-1.07,3.3,3.3,0,0,1,1.87,1,.24.24,0,0,0,.25.07,6.68,6.68,0,0,0,1.89-.73l.13-.06a2.7,2.7,0,0,1-.58,1.07c-.27.29-.57.55-.85.81a8,8,0,0,0,1.87-.46,4.87,4.87,0,0,1-.33.43c-.38.39-.77.77-1.17,1.13a.48.48,0,0,0-.19.39,9.82,9.82,0,0,1-1.85,6,9.23,9.23,0,0,1-5.6,3.82,10.43,10.43,0,0,1-3.2.25,9.65,9.65,0,0,1-4.42-1.45Z",transform:"translate(-392.09 -393.66)"}})])])])])]),a("div",{staticClass:"humberger-menu d-block d-lg-none pl--20"},[a("span",{staticClass:"menutrigger text-white",on:{click:e.menuTrigger}},[a("a-icon",{staticStyle:{color:"#fff"},attrs:{type:"menu"}})],1)]),a("div",{staticClass:"close-menu d-block d-lg-none"},[a("span",{staticClass:"closeTrigger",on:{click:e.CLoseMenuTrigger}},[a("a-icon",{attrs:{type:"menu"}})],1)])])])])])},q=[],R=a("4624"),Q={name:"Header",mixins:[R["a"].global],data(){return{}},methods:{scrollTo(e){this.$store.dispatch("home/updateOffsetTops",this.getTop());var t=0;t="Home"==e?0:"Madmanga"==e&&this.currentScrollTop>this.offsetTops.Story/2?this.offsetTops.Story/2:this.offsetTops[e],console.log(e,t),window.scrollTo({top:t,behavior:"smooth"})},menuTrigger(){this.$store.dispatch("home/updateIsLoginOpen")},CLoseMenuTrigger(){document.querySelector(".header-wrapper").classList.remove("menu-open")}},computed:{...Object(j["b"])("home",["isLoginOpen","offsetTops","currentScrollTop","fullpageElement"])},mounted(){},watch:{currentScrollTop(e){this.currentScrollTop>110?N()(".header--fixed").addClass("sticky"):N()(".header--fixed").removeClass("sticky"),this.$store.dispatch("home/updateCurrentScrollTop",e)}}},U=Q,J=(a("4255"),Object(i["a"])(U,I,q,!1,null,"2ea27962",null)),K=J.exports,Y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},G=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ptb--5 my_footer",attrs:{"data-black-overlay":"6"}},[a("p",{staticClass:"white text-center"},[e._v("Copyright MadManga all rights reserved 2022")])])}],V=(a("b5f0"),{}),X=Object(i["a"])(V,Y,G,!1,null,"7036e95b",null),ee=X.exports,te=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ae=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"loader flex aic jcc"},[a("img",{staticClass:"loader-rotate",attrs:{src:"/images/logo/header-logo-b.png",alt:""}})])}],se={name:"Loading"},ne=se,re=Object(i["a"])(ne,te,ae,!1,null,null,null),oe=re.exports,ce={mixins:[R["a"].global],components:{Login:D,Header:K,Footer:ee,Loading:oe}},le=ce,ie=Object(i["a"])(le,A,$,!1,null,"515ed572",null),ue=ie.exports,de=(a("fda2"),a("f5af")),fe=a.n(de);a("e829");s["default"].use(k["a"]),s["default"].use(w["a"]),s["default"].use(n["a"]),s["default"].use(_.a),s["default"].use(x.a),s["default"].config.productionTip=!1,s["default"].use(fe.a),s["default"].component("layout-default",z),s["default"].component("layout-dashboard",ue),new s["default"]({router:b,store:y,render:function(e){return e(d)},mounted(){fe.a.init()}}).$mount("#app")},a41b:function(e,t,a){},b5f0:function(e,t,a){"use strict";var s=a("d1ad"),n=a.n(s);n.a},b847:function(e,t,a){},d1ad:function(e,t,a){}});
//# sourceMappingURL=app.f7f71faa.js.map