webpackJsonp([29],{102:function(t,e,i){var a,n;i(623),a=i(291);var s=i(533);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-54190d24",t.exports=a},103:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},n=0;n<this.length;n++){var s=this[n][0];"number"==typeof s&&(a[s]=!0)}for(n=0;n<e.length;n++){var r=e[n];"number"==typeof r[0]&&a[r[0]]||(i&&!r[2]?r[2]=i:i&&(r[2]="("+r[2]+") and ("+i+")"),t.push(r))}},t}},104:function(t,e){function i(t,e){for(var i=0;i<t.length;i++){var a=t[i],n=d[a.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](a.parts[s]);for(;s<a.parts.length;s++)n.parts.push(o(a.parts[s],e))}else{for(var r=[],s=0;s<a.parts.length;s++)r.push(o(a.parts[s],e));d[a.id]={id:a.id,refs:1,parts:r}}}}function a(t){for(var e=[],i={},a=0;a<t.length;a++){var n=t[a],s=n[0],r=n[1],o=n[2],c=n[3],l={css:r,media:o,sourceMap:c};i[s]?i[s].parts.push(l):e.push(i[s]={id:s,parts:[l]})}return e}function n(t,e){var i=m(),a=v[v.length-1];if("top"===t.insertAt)a?a.nextSibling?i.insertBefore(e,a.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),v.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=v.indexOf(t);e>=0&&v.splice(e,1)}function r(t){var e=document.createElement("style");return e.type="text/css",n(t,e),e}function o(t,e){var i,a,n;if(e.singleton){var o=h++;i=p||(p=r(e)),a=c.bind(null,i,o,!1),n=c.bind(null,i,o,!0)}else i=r(e),a=l.bind(null,i),n=function(){s(i)};return a(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;a(t=e)}else n()}}function c(t,e,i,a){var n=i?"":a.css;if(t.styleSheet)t.styleSheet.cssText=g(e,n);else{var s=document.createTextNode(n),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(s,r[e]):t.appendChild(s)}}function l(t,e){var i=e.css,a=e.media,n=e.sourceMap;if(a&&t.setAttribute("media",a),n&&(i+="\n/*# sourceURL="+n.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var d={},u=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},f=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=u(function(){return document.head||document.getElementsByTagName("head")[0]}),p=null,h=0,v=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},"undefined"==typeof e.singleton&&(e.singleton=f()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=a(t);return i(n,e),function(t){for(var s=[],r=0;r<n.length;r++){var o=n[r],c=d[o.id];c.refs--,s.push(c)}if(t){var l=a(t);i(l,e)}for(var r=0;r<s.length;r++){var c=s[r];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete d[c.id]}}}};var g=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},105:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(9);e.default={computed:(0,a.mapGetters)({positionData:"positionData"}),data:function(){return{areaName:!1,backBtn:!0,currCity:""}},methods:{backfn:function(){this.$router.go(-1)},goFn:function(){switch(this.rightIcon.iconType){case"0":this.$router.push("/index");break;case"1":this.$emit("goSetCollectPro");break;case"2":this.$emit("goSetCollect");break;case"3":}},rIconEvent:function(){this.$emit("rIconEvent")}},props:["title","rightIcon"],created:function(){this.currCity=sessionStorage.getItem("setAreaId")?sessionStorage.getItem("setAreaName"):this.positionData.city;var t=this.$route.path;switch(t){case"/tcshop/footBar":this.areaName=!0,this.backBtn=!1;break;case"/tcHotlist":this.areaName=!0,this.backBtn=!1}}}},106:function(t,e,i){e=t.exports=i(103)(),e.push([t.i,"header{height:.6rem;background:#f7f7f7;border-bottom:.01rem solid #dfdfdf;padding:.1rem .3rem;position:relative}header .backBtn{position:absolute;display:block;width:.6rem;height:.6rem;text-align:center;line-height:.6rem;left:0;top:.1rem;z-index:1}header .areaName{color:#333;position:absolute;left:.27rem;height:.54rem;line-height:.54rem;width:1.5rem}header .areaName a{color:#333;font-size:.3rem;float:left}header .areaName i{margin-left:.06rem;line-height:.54rem;position:relative;top:.03rem}header p{font-size:.32rem;text-align:center;line-height:.6rem}header .rightIcon{width:.6rem;text-align:center;right:0}header .rightIcon,header .rightTxt{display:block;height:.6rem;line-height:.6rem;position:absolute;z-index:1;top:.1rem}header .rightTxt{width:1.3rem;text-align:right;right:.2rem;font-size:.3rem}header .iconfont{font-size:.4rem;color:#666}header .icon-favorfill{color:#ff2772}.nav-header .rightTxt{color:#333}",""])},107:function(t,e,i){var a,n;i(109),a=i(105);var s=i(108);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,t.exports=a},108:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"nav-header"},[i("a",{directives:[{name:"show",rawName:"v-show",value:t.backBtn,expression:"backBtn"}],staticClass:"backBtn",on:{click:function(e){t.backfn()}}},[i("i",{staticClass:"iconfont icon-back"})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.areaName,expression:"areaName"}],staticClass:"areaName"},[i("router-link",{attrs:{to:"/selectArea",id:"areaName"}},[t._v(t._s(t.currCity))]),t._v(" "),i("i",{staticClass:"iconfont icon-down"})],1),t._v(" "),i("p",{staticClass:"headTxt"},[t._v(t._s(t.title))]),t._v(" "),t.rightIcon&&t.rightIcon.iconClass?i("a",{staticClass:"rightIcon",on:{click:function(e){t.goFn()}}},[i("i",{staticClass:"iconfont",class:t.rightIcon.iconClass})]):t._e(),t._v(" "),t.rightIcon&&t.rightIcon.txt?i("a",{staticClass:"rightTxt",on:{click:function(e){t.rIconEvent()}}},[t._v(t._s(t.rightIcon.txt))]):t._e()])},staticRenderFns:[]}},109:function(t,e,i){var a=i(106);"string"==typeof a&&(a=[[t.i,a,""]]);i(104)(a,{});a.locals&&(t.exports=a.locals)},110:function(t,e,i){var a,n;i(119),a=i(112);var s=i(117);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,t.exports=a},111:function(t,e,i){var a,n;i(118),a=i(113);var s=i(116);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,t.exports=a},112:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},s=i(9),r=i(111),o=a(r),c={numCount:o.default};e.default={data:function(){return{number:{},password:null}},computed:n({},(0,s.mapGetters)({})),components:c,methods:{cancle:function(){this.$emit("dialogCancle")},ok:function(){this.dialog.numCount&&this.$emit("dialogConfirm",this.number.now),this.dialog.password&&this.$emit("dialogConfirm",this.password),this.$emit("dialogClickOk")},numChange:function(t){this.number.now=t}},props:["dialog"],created:function(){var t=this;this.dialog.autoOff&&!function(){var e=t.dialog.autoOffTime||1500,i=t;setTimeout(function(){i.$emit("off")},e)}(),this.number.now=this.dialog.proNumCur,this.number.max=this.dialog.proNumMax,this.number.min=this.dialog.proNumMin}}},113:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i(9);e.default={props:["number"],data:function(){return{minNum:-(1/0),initNum:1,maxNum:1/0}},computed:{},methods:{addNum:function(){this.initNum<this.maxNum&&(this.initNum++,this.number.options?this.$emit("numChange",[this.initNum,this.number.options]):this.$emit("numChange",this.initNum))},minusNum:function(){this.initNum>this.minNum&&(this.initNum--,this.number.options?this.$emit("numChange",[this.initNum,this.number.options]):this.$emit("numChange",this.initNum))}},created:function(){this.minNum=this.number.min||this.minNum,this.initNum=this.number.now||this.initNum,this.maxNum=this.number.max||this.maxNum}}},114:function(t,e,i){e=t.exports=i(103)(),e.push([t.i,"",""])},115:function(t,e,i){e=t.exports=i(103)(),e.push([t.i,".dialog-pop{position:fixed;background:#fff;border:1px solid #ddd;border-radius:.18rem;z-index:1001;left:50%;top:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);overflow:hidden}.dialog-pop .countWrap{padding:0 .6rem}.dialog-pop-con{padding:.18rem .18rem .4rem}.dialog-txt{font-size:.3rem;text-align:center;line-height:1.5;margin-bottom:.18rem}.dialog-btn{background:#fff;border-top:1px solid #ddd}.dialog-btn a{display:block;width:50%;height:.8rem;text-align:center;line-height:.8rem;float:left;position:relative;font-size:.3rem}.dialog-confirm{color:#ff2772}.dialog-btn a s{display:block;width:1px;height:100%;background:#ddd;position:absolute;right:0;top:0}.dialog-mask{position:fixed;top:0;left:0;z-index:1000;width:100%;height:100%;background:rgba(0,0,0,.4)}.dialog-cancle{color:#333}",""])},116:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"numberCount clearfix"},[i("a",{staticClass:"iconfont icon-move",on:{click:function(e){t.minusNum()}}}),t._v(" "),i("input",{attrs:{type:"number",readonly:"readonly"},domProps:{value:t.initNum}}),t._v(" "),i("a",{staticClass:"iconfont icon-add",on:{click:function(e){t.addNum()}}})])},staticRenderFns:[]}},117:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"dialog-pop"},[i("div",{staticClass:"dialog-pop-con"},[t.dialog.icon?i("div",{staticClass:"dialog-icon"},[i("i",{class:"iconfont "+t.dialog.icon})]):t._e(),t._v(" "),t.dialog.txt?i("div",{staticClass:"dialog-txt"},[t._v("\n                "+t._s(t.dialog.txt)+"\n            ")]):t._e(),t._v(" "),t.dialog.numCount?i("div",{staticClass:"countWrap"},[i("numCount",{attrs:{number:t.number},on:{numChange:t.numChange}})],1):t._e(),t._v(" "),t.dialog.password?i("div",{staticClass:"passInput"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]):t._e()]),t._v(" "),t.dialog.btn?i("div",{staticClass:"dialog-btn clearfix"},[i("a",{staticClass:"dialog-cancle",on:{click:function(e){t.cancle()}}},[t._v(t._s(t.dialog.cancle)),i("s")]),t._v(" "),i("a",{staticClass:"dialog-confirm",on:{click:function(e){t.ok()}}},[t._v(t._s(t.dialog.ok))])]):t._e()]),t._v(" "),i("div",{staticClass:"dialog-mask"})])},staticRenderFns:[]}},118:function(t,e,i){var a=i(114);"string"==typeof a&&(a=[[t.i,a,""]]);i(104)(a,{});a.locals&&(t.exports=a.locals)},119:function(t,e,i){var a=i(115);"string"==typeof a&&(a=[[t.i,a,""]]);i(104)(a,{});a.locals&&(t.exports=a.locals)},291:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(107),s=a(n),r=i(110),o=a(r);e.default={data:function(){return{pagetitle:"优劵中心",tabState:"makeRoll",ruleShow:!1,eventCode:"R009",clearEventCode:!1,linkId:null}},methods:{ruleOffOn:function(){this.ruleShow=!this.ruleShow}},created:function(){this.$store.dispatch("tjTrack",{eventCode:this.eventCode,clearEventCode:this.clearEventCode,linkId:this.linkId}).then(function(){},function(){})},components:{headnav:s.default,dialogPop:o.default}}},337:function(t,e,i){e=t.exports=i(103)(),e.push([t.i,".discountBanner[data-v-54190d24]{position:relative;font-size:0}.discountBanner .ruleBtn[data-v-54190d24]{width:2rem;height:.6rem;position:absolute;left:50%;bottom:0;margin-left:-1rem;background:url("+i(467)+") no-repeat 50%;background-size:100% 100%}.disTab[data-v-54190d24]{background-color:#fe0049;padding-top:.2rem}.disTab ul[data-v-54190d24]{width:90%;margin:0 auto}.disTab li[data-v-54190d24]{width:50%;float:left;height:1rem;text-align:center;color:#fff;box-sizing:border-box;padding:.1rem;padding-bottom:0}.disTab li span[data-v-54190d24]{display:inline-block;width:100%;color:#fd0049;text-align:center;line-height:.9rem;font-size:.32rem;height:100%;background:#fff;border-top-left-radius:.1rem;border-top-right-radius:.1rem}.disTab li.curColor span[data-v-54190d24]{background-color:#cb003a;color:#fff}.discounList[data-v-54190d24]{padding-top:.03rem;padding-bottom:.15rem;margin:0 .1rem;background:#fff2f6}.discounList .valid li[data-v-54190d24]{position:relative;background:#fff;border-bottom:1px solid #d9d9d9;padding:.25rem .26rem .19rem;height:2rem}.discounList .valid li img[data-v-54190d24]{float:left;width:1.9rem;height:1.9rem}.discounList .valid li .rightBox[data-v-54190d24]{float:left;width:4.6rem;margin-left:.2rem;margin-top:.2rem}.discounList .valid li .rightBox .proName[data-v-54190d24]{font-size:.3rem;font-weight:700;margin-bottom:.2rem}.discounList .valid li .rightBox .proCon[data-v-54190d24]{color:#666}.discounList .valid li .rightBox .btnLink[data-v-54190d24]{display:inline-block;padding:.1rem .2rem;background-color:#fe0049;margin-top:.1rem;float:right;border-radius:.3rem}.discounList .valid li.lastLi img[data-v-54190d24]{width:100%}.invalid li[data-v-54190d24]{background-color:#fff;margin-bottom:.15rem}.ruleCon[data-v-54190d24]{background-color:#fe0049;padding:.2rem;color:#fff;line-height:.35rem}.ruleCon img[data-v-54190d24]{margin-top:.2rem}.ruleCon p[data-v-54190d24]:nth-child(odd){font-weight:900}",""])},467:function(t,e){t.exports="data:image/png;base64,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"},533:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"youjuancenter"},[i("headnav",{attrs:{title:t.pagetitle}}),t._v(" "),i("div",{staticClass:"discountBanner"},[i("img",{attrs:{src:"http://fstatic.udui.com/static/images/user/discountBg.jpg",alt:"banner"}}),t._v(" "),i("div",{staticClass:"ruleBtn",on:{click:t.ruleOffOn}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.ruleShow,expression:"ruleShow"}],staticClass:"ruleCon"},[i("p",[t._v("Q：什么是优券？")]),t._v(" "),i("p",[t._v("A：优券是优兑商城发行的购物代金券，1优券=1元。在优兑商城购物时，可用优券抵扣相应的金额。优券不找零，不兑现。")]),t._v(" "),i("p",[t._v("Q：如何获取优券？")]),t._v(" "),i("p",[t._v("A：新会员注册即赠100优券，其他方式可查看“赚券”页详情。")]),t._v(" "),i("p",[t._v("Q：优券使用期限？")]),t._v(" "),i("p",[t._v("A：自优券入账日起，保留1年使用权。")]),t._v(" "),i("p",[t._v("Q：如何使用优券？")]),t._v(" "),i("p",[t._v("A：当您的优券余额充足时，商品标价减去可抵用优券就是您所需支付的现金价；如优券余额不足，只抵扣当前优券余额。支付时系统默认优先使用优券抵扣现金。")]),t._v(" "),i("img",{attrs:{src:"http://fstatic.udui.com/static/images/user/egbg.jpg",alt:"eg"}})]),t._v(" "),i("div",{staticClass:"disTab"},[i("ul",{staticClass:"clearfix"},[i("li",{class:{curColor:"useRoll"==t.tabState},on:{click:function(e){t.tabState="makeRoll"}}},[i("span",[t._v("赚劵")])]),t._v(" "),i("li",{class:{curColor:"makeRoll"==t.tabState},on:{click:function(e){t.tabState="useRoll"}}},[i("span",[t._v("用劵")])])])]),t._v(" "),i("div",{staticClass:"discounList"},[i("ul",{directives:[{name:"show",rawName:"v-show",value:"makeRoll"==t.tabState,expression:"tabState == 'makeRoll'"}],staticClass:"valid"},[i("li",{staticClass:"clearfix"},[i("img",{staticClass:"img",attrs:{src:"http://fstatic.udui.com/static/images/user/showpic1.jpg",alt:"img"}}),t._v(" "),i("div",{staticClass:"rightBox"},[i("p",{staticClass:"proName"},[t._v("推荐有礼")]),t._v(" "),i("p",{staticClass:"proCon"},[t._v("每邀请一位好友注册,可获赠20优劵")]),t._v(" "),i("router-link",{attrs:{to:"/userinvite"}},[i("a",{staticClass:"btnLink btn1",attrs:{href:"javascript:;"}},[t._v("去推荐")])])],1)]),t._v(" "),t._m(0),t._v(" "),i("li",{staticClass:"clearfix"},[i("img",{staticClass:"img",attrs:{src:"http://fstatic.udui.com/static/images/user/showpic3.jpg",alt:"img"}}),t._v(" "),i("div",{staticClass:"rightBox"},[i("p",{staticClass:"proName"},[t._v("同城赠券")]),t._v(" "),i("p",{staticClass:"proCon"},[t._v("线下部分同城商家，消费赠优券")]),t._v(" "),i("router-link",{attrs:{to:"/tcshop"}},[i("a",{staticClass:"btnLink btn3",attrs:{href:"javascript:;"}},[t._v("查看附近商家")])])],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)]),t._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:"useRoll"==t.tabState,expression:"tabState == 'useRoll'"}],staticClass:"invalid"},[t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7)])]),t._v(" "),t.dialogOnOff?i("dialog-pop",{attrs:{dialog:t.dialogConfig},on:{off:t.offDialog}}):t._e()],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"clearfix"},[i("img",{staticClass:"img",attrs:{src:"http://fstatic.udui.com/static/images/user/showpic2.jpg",alt:"img"}}),t._v(" "),i("div",{staticClass:"rightBox"},[i("p",{staticClass:"proName"},[t._v("晒单赠券")]),t._v(" "),i("p",{staticClass:"proCon"},[t._v("分享订单可获赠20优劵")]),t._v(" "),i("a",{staticClass:"btnLink btn2",attrs:{href:"javascript:;"}},[t._v("我要晒单")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"clearfix"},[i("img",{staticClass:"img",attrs:{src:"http://fstatic.udui.com/static/images/user/showpic4.jpg",alt:"img"}}),t._v(" "),i("div",{staticClass:"rightBox"},[i("p",{staticClass:"proName"},[t._v("活动赠券")]),t._v(" "),i("p",{staticClass:"proCon"},[t._v("线上或线下活动时以电子或纸质形式派发的优券，登录商城个人中心—我的红包—优券余额中查看或者充值。")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"clearfix"},[i("img",{staticClass:"img",attrs:{src:"http://fstatic.udui.com/static/images/user/showpic5.jpg",alt:"img"}}),t._v(" "),i("div",{staticClass:"rightBox"},[i("p",{staticClass:"proName"},[t._v("优兑红包卡")]),t._v(" "),i("p",{staticClass:"proCon"},[t._v("优兑派发的VIP会员红包卡，扫描红包卡上二维码注册或登录优兑后，指定额度的优券直接入账。")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"clearfix lastLi"},[i("img",{attrs:{src:"http://fstatic.udui.com/static/images/user/signimg.jpg",alt:"img"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("a",{attrs:{href:"http://weixin.udui.com/app/subject/general.html?id=151&from=uq"}},[i("img",{attrs:{src:"http://fstatic.udui.com/static/images/user/linkTtjx.jpg",alt:"picture"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("a",{attrs:{href:"http://weixin.udui.com/app/subject/general.html?id=230&from=uq"}},[i("img",{attrs:{src:"http://fstatic.udui.com/static/images/user/linkZdm.jpg",alt:"picture"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("a",{attrs:{href:"http://weixin.udui.com/app/subject/general.html?id=156&from=uq"}},[i("img",{attrs:{src:"http://fstatic.udui.com/static/images/user/linkArea.jpg",alt:"picture"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"linkZkj"},[i("a",{attrs:{href:"javascript:;"}},[i("img",{attrs:{src:"http://fstatic.udui.com/static/images/user/linkZkj.jpg",alt:"picture"}})])])}]}},623:function(t,e,i){var a=i(337);"string"==typeof a&&(a=[[t.i,a,""]]);i(104)(a,{});a.locals&&(t.exports=a.locals)}});
//# sourceMappingURL=29.build.js.map