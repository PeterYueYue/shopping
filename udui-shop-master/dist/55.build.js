webpackJsonp([55],{103:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var r=this[e];r[2]?t.push("@media "+r[2]+"{"+r[1]+"}"):t.push(r[1])}return t.join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(i[s]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&i[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},104:function(t,e){function r(t,e){for(var r=0;r<t.length;r++){var i=t[r],o=d[i.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](i.parts[s]);for(;s<i.parts.length;s++)o.parts.push(n(i.parts[s],e))}else{for(var a=[],s=0;s<i.parts.length;s++)a.push(n(i.parts[s],e));d[i.id]={id:i.id,refs:1,parts:a}}}}function i(t){for(var e=[],r={},i=0;i<t.length;i++){var o=t[i],s=o[0],a=o[1],n=o[2],c=o[3],l={css:a,media:n,sourceMap:c};r[s]?r[s].parts.push(l):e.push(r[s]={id:s,parts:[l]})}return e}function o(t,e){var r=h(),i=v[v.length-1];if("top"===t.insertAt)i?i.nextSibling?r.insertBefore(e,i.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),v.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=v.indexOf(t);e>=0&&v.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function n(t,e){var r,i,o;if(e.singleton){var n=m++;r=u||(u=a(e)),i=c.bind(null,r,n,!1),o=c.bind(null,r,n,!0)}else r=a(e),i=l.bind(null,r),o=function(){s(r)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}function c(t,e,r,i){var o=r?"":i.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var s=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(s,a[e]):t.appendChild(s)}}function l(t,e){var r=e.css,i=e.media,o=e.sourceMap;if(i&&t.setAttribute("media",i),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var d={},p=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},f=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=p(function(){return document.head||document.getElementsByTagName("head")[0]}),u=null,m=0,v=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},"undefined"==typeof e.singleton&&(e.singleton=f()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var o=i(t);return r(o,e),function(t){for(var s=[],a=0;a<o.length;a++){var n=o[a],c=d[n.id];c.refs--,s.push(c)}if(t){var l=i(t);r(l,e)}for(var a=0;a<s.length;a++){var c=s[a];if(0===c.refs){for(var p=0;p<c.parts.length;p++)c.parts[p]();delete d[c.id]}}}};var g=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},105:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(9);e.default={computed:(0,i.mapGetters)({positionData:"positionData"}),data:function(){return{areaName:!1,backBtn:!0,currCity:""}},methods:{backfn:function(){this.$router.go(-1)},goFn:function(){switch(this.rightIcon.iconType){case"0":this.$router.push("/index");break;case"1":this.$emit("goSetCollectPro");break;case"2":this.$emit("goSetCollect");break;case"3":}},rIconEvent:function(){this.$emit("rIconEvent")}},props:["title","rightIcon"],created:function(){this.currCity=sessionStorage.getItem("setAreaId")?sessionStorage.getItem("setAreaName"):this.positionData.city;var t=this.$route.path;switch(t){case"/tcshop/footBar":this.areaName=!0,this.backBtn=!1;break;case"/tcHotlist":this.areaName=!0,this.backBtn=!1}}}},106:function(t,e,r){e=t.exports=r(103)(),e.push([t.i,"header{height:.6rem;background:#f7f7f7;border-bottom:.01rem solid #dfdfdf;padding:.1rem .3rem;position:relative}header .backBtn{position:absolute;display:block;width:.6rem;height:.6rem;text-align:center;line-height:.6rem;left:0;top:.1rem;z-index:1}header .areaName{color:#333;position:absolute;left:.27rem;height:.54rem;line-height:.54rem;width:1.5rem}header .areaName a{color:#333;font-size:.3rem;float:left}header .areaName i{margin-left:.06rem;line-height:.54rem;position:relative;top:.03rem}header p{font-size:.32rem;text-align:center;line-height:.6rem}header .rightIcon{width:.6rem;text-align:center;right:0}header .rightIcon,header .rightTxt{display:block;height:.6rem;line-height:.6rem;position:absolute;z-index:1;top:.1rem}header .rightTxt{width:1.3rem;text-align:right;right:.2rem;font-size:.3rem}header .iconfont{font-size:.4rem;color:#666}header .icon-favorfill{color:#ff2772}.nav-header .rightTxt{color:#333}",""])},107:function(t,e,r){var i,o;r(109),i=r(105);var s=r(108);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,t.exports=i},108:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"nav-header"},[r("a",{directives:[{name:"show",rawName:"v-show",value:t.backBtn,expression:"backBtn"}],staticClass:"backBtn",on:{click:function(e){t.backfn()}}},[r("i",{staticClass:"iconfont icon-back"})]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.areaName,expression:"areaName"}],staticClass:"areaName"},[r("router-link",{attrs:{to:"/selectArea",id:"areaName"}},[t._v(t._s(t.currCity))]),t._v(" "),r("i",{staticClass:"iconfont icon-down"})],1),t._v(" "),r("p",{staticClass:"headTxt"},[t._v(t._s(t.title))]),t._v(" "),t.rightIcon&&t.rightIcon.iconClass?r("a",{staticClass:"rightIcon",on:{click:function(e){t.goFn()}}},[r("i",{staticClass:"iconfont",class:t.rightIcon.iconClass})]):t._e(),t._v(" "),t.rightIcon&&t.rightIcon.txt?r("a",{staticClass:"rightTxt",on:{click:function(e){t.rIconEvent()}}},[t._v(t._s(t.rightIcon.txt))]):t._e()])},staticRenderFns:[]}},109:function(t,e,r){var i=r(106);"string"==typeof i&&(i=[[t.i,i,""]]);r(104)(i,{});i.locals&&(t.exports=i.locals)},151:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(r(9),{});e.default={computed:{pathTo:function(){return 1==this.type?"/vue/productDetail/proId/":2==this.type?"/vue/hotProDetail/proId/":void 0}},data:function(){return{}},methods:{},mounted:function(){this.proList.length||(this.$store.dispatch("getShopProduct",{shopId:this.$route.params.sid,isShopAllHot:"",categoryId:"",isNewGoods:"",keywords:"",intelligentSort:"",soldSort:"",priceSort:"",distanceSort:"",pageNo:1}),this.$store.dispatch("getHotShopProduct",{shopId:this.$route.params.sid,isShopAllHot:1,categoryId:"",isNewGoods:"",keywords:"",intelligentSort:"",soldSort:"",priceSort:"",distanceSort:"",pageNo:1}))},components:i,created:function(){},props:["proList","type"]}},155:function(t,e,r){e=t.exports=r(103)(),e.push([t.i,".shop-pro-list{margin-top:.18rem}.shop-pro-list li{padding:.18rem;margin-bottom:.18rem;background:#fff;border-top:1px solid #ddd;border-bottom:1px solid #ddd;position:relative}.shop-pro-list li .itemImg{width:1.62rem;height:1.62rem;float:left;margin-right:.18rem}.shop-pro-list li .itemImg img{display:block;width:100%;height:100%}.shop-pro-list li .itemName{height:.36rem;line-height:.36rem;width:3.84rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:.26rem;color:#333}.shop-pro-list li .itemDes{margin-top:.06rem;color:#999}.shop-pro-list li .itemPrice{margin-top:.8rem;color:#999;height:.26rem}.shop-pro-list li .itemPrice .fl{width:4.2rem;height:.42rem;line-height:.42rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:.26rem;color:#ff2772}.shop-pro-list li .itemPrice .fr{width:1.08rem;text-align:right;font-size:.26rem}.shop-pro-list li .distance{position:absolute;top:.18rem;right:.18rem;color:#999;font-size:.26rem}",""])},164:function(t,e,r){var i,o;r(174),i=r(151);var s=r(168);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,t.exports=i},168:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"shop-pro-list"},t._l(t.proList,function(e){return r("router-link",{staticClass:"clearfix",attrs:{to:t.pathTo+e.goodsId}},[r("li",{staticClass:"clearfix"},[r("div",{staticClass:"itemImg"},[r("img",{attrs:{src:e.thumImage}})]),t._v(" "),r("div",{staticClass:"itemName"},[t._v(t._s(e.name))]),t._v(" "),r("div",{staticClass:"itemDes"}),t._v(" "),r("div",{staticClass:"itemPrice clearfix"},[r("div",{staticClass:"fl"},[t._v("¥"+t._s(e.price)+".00")]),t._v(" "),r("div",{staticClass:"fr"},[t._v("已售"+t._s(e.sold))])]),t._v(" "),r("div",{staticClass:"distance"})])])}))},staticRenderFns:[]}},174:function(t,e,r){var i=r(155);"string"==typeof i&&(i=[[t.i,i,""]]);r(104)(i,{});i.locals&&(t.exports=i.locals)},252:function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(107),s=i(o),a=r(164),n=i(a),c=r(9),l={headnav:s.default,shopProList:n.default};e.default={computed:(0,c.mapGetters)({shopProList:"shopProList"}),data:function(){return{pagetitle:"店铺商品",eventCode:"P011",clearEventCode:!1,linkId:null}},methods:{},mounted:function(){},components:l,created:function(){this.$store.dispatch("tjTrack",{eventCode:this.eventCode,clearEventCode:this.clearEventCode,linkId:this.linkId}).then(function(){},function(){})}}},354:function(t,e,r){e=t.exports=r(103)(),e.push([t.i,".recmdMenu[data-v-77f726a8]{border-bottom:1px solid #e6e6e6;background-color:#fff;padding:.09rem 0;position:relative}.recmdMenu li[data-v-77f726a8]{width:22%;height:.54rem;line-height:.54rem;text-align:center;font-size:.26rem;float:left;color:#333;position:relative}.recmdMenu li[data-v-77f726a8]:last-child{width:12%}.recmdMenu li .arrBox[data-v-77f726a8]{display:inline-block;position:relative;left:.09rem;top:.09rem}.recmdMenu li i[data-v-77f726a8]{display:block;width:0;height:0}.recmdMenu li s[data-v-77f726a8]{text-decoration:none;line-height:.65rem;font-size:.3rem}.s-type .arrBox[data-v-77f726a8]{top:0!important}.recmdMenu .uptrg[data-v-77f726a8]{border-width:.09rem;border-style:dashed dashed solid;border-color:transparent transparent #ccc;margin-bottom:.06rem}.recmdMenu .downtrg[data-v-77f726a8]{border-width:.09rem;border-style:solid dashed dashed;border-color:#ccc transparent transparent}.s-up .uptrg[data-v-77f726a8]{border-color:transparent transparent #ff2772}.s-down .downtrg[data-v-77f726a8]{border-color:#ff2772 transparent transparent}.recmdMenu .cur[data-v-77f726a8]{color:#ff2772}.cur i.down-arrow[data-v-77f726a8]{top:.12rem;border-color:transparent transparent #ff2772}.recmdMenu li[data-v-77f726a8]:nth-child(3n){border-right:0}.s-type span[data-v-77f726a8]{color:#ff2772}",""])},550:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("headnav",{attrs:{title:t.pagetitle}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"recmdMenu clearfix"},[t._m(0)]),t._v(" "),r("shop-pro-list",{attrs:{proList:t.shopProList,type:1}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{attrs:{id:"sort-result"}},[r("li",{staticClass:"s-type"},[r("span",[t._v("全部分类")]),t._v(" "),r("div",{staticClass:"arrBox"},[r("i",{staticClass:"downtrg"})])]),t._v(" "),r("li",{staticClass:"s-sale s-down",attrs:{"data-s":"true"}},[r("span",[t._v("销量")]),t._v(" "),r("div",{staticClass:"arrBox"},[r("i",{staticClass:"uptrg"}),r("i",{staticClass:"downtrg"})])]),t._v(" "),r("li",{staticClass:"s-p",attrs:{"data-p":"true"}},[r("span",[t._v("价格")]),t._v(" "),r("div",{staticClass:"arrBox"},[r("i",{staticClass:"uptrg"}),r("i",{staticClass:"downtrg"})])]),t._v(" "),r("li",{staticClass:"s-v",attrs:{"data-v":"true"}},[r("span",[t._v("上架时间")]),t._v(" "),r("div",{staticClass:"arrBox"},[r("i",{staticClass:"uptrg"}),r("i",{staticClass:"downtrg"})])]),t._v(" "),r("li",{staticClass:"s"},[r("s",{staticClass:"iconfont icon-fenlei"})])])}]}},64:function(t,e,r){var i,o;r(640),i=r(252);var s=r(550);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-77f726a8",t.exports=i},640:function(t,e,r){var i=r(354);"string"==typeof i&&(i=[[t.i,i,""]]);r(104)(i,{});i.locals&&(t.exports=i.locals)}});
//# sourceMappingURL=55.build.js.map