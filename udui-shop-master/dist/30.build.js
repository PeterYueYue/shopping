webpackJsonp([30],{103:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(n[r]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&n[a[0]]||(i&&!a[2]?a[2]=i:i&&(a[2]="("+a[2]+") and ("+i+")"),t.push(a))}},t}},104:function(t,e){function i(t,e){for(var i=0;i<t.length;i++){var n=t[i],o=l[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(s(n.parts[r],e))}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(s(n.parts[r],e));l[n.id]={id:n.id,refs:1,parts:a}}}}function n(t){for(var e=[],i={},n=0;n<t.length;n++){var o=t[n],r=o[0],a=o[1],s=o[2],c=o[3],u={css:a,media:s,sourceMap:c};i[r]?i[r].parts.push(u):e.push(i[r]={id:r,parts:[u]})}return e}function o(t,e){var i=h(),n=g[g.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function r(t){t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function s(t,e){var i,n,o;if(e.singleton){var s=p++;i=m||(m=a(e)),n=c.bind(null,i,s,!1),o=c.bind(null,i,s,!0)}else i=a(e),n=u.bind(null,i),o=function(){r(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}function c(t,e,i,n){var o=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=v(e,o);else{var r=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function u(t,e){var i=e.css,n=e.media,o=e.sourceMap;if(n&&t.setAttribute("media",n),o&&(i+="\n/*# sourceURL="+o.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var l={},d=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},f=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=d(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,p=0,g=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},"undefined"==typeof e.singleton&&(e.singleton=f()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var o=n(t);return i(o,e),function(t){for(var r=[],a=0;a<o.length;a++){var s=o[a],c=l[s.id];c.refs--,r.push(c)}if(t){var u=n(t);i(u,e)}for(var a=0;a<r.length;a++){var c=r[a];if(0===c.refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete l[c.id]}}}};var v=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},105:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(9);e.default={computed:(0,n.mapGetters)({positionData:"positionData"}),data:function(){return{areaName:!1,backBtn:!0,currCity:""}},methods:{backfn:function(){this.$router.go(-1)},goFn:function(){switch(this.rightIcon.iconType){case"0":this.$router.push("/index");break;case"1":this.$emit("goSetCollectPro");break;case"2":this.$emit("goSetCollect");break;case"3":}},rIconEvent:function(){this.$emit("rIconEvent")}},props:["title","rightIcon"],created:function(){this.currCity=sessionStorage.getItem("setAreaId")?sessionStorage.getItem("setAreaName"):this.positionData.city;var t=this.$route.path;switch(t){case"/tcshop/footBar":this.areaName=!0,this.backBtn=!1;break;case"/tcHotlist":this.areaName=!0,this.backBtn=!1}}}},106:function(t,e,i){e=t.exports=i(103)(),e.push([t.i,"header{height:.6rem;background:#f7f7f7;border-bottom:.01rem solid #dfdfdf;padding:.1rem .3rem;position:relative}header .backBtn{position:absolute;display:block;width:.6rem;height:.6rem;text-align:center;line-height:.6rem;left:0;top:.1rem;z-index:1}header .areaName{color:#333;position:absolute;left:.27rem;height:.54rem;line-height:.54rem;width:1.5rem}header .areaName a{color:#333;font-size:.3rem;float:left}header .areaName i{margin-left:.06rem;line-height:.54rem;position:relative;top:.03rem}header p{font-size:.32rem;text-align:center;line-height:.6rem}header .rightIcon{width:.6rem;text-align:center;right:0}header .rightIcon,header .rightTxt{display:block;height:.6rem;line-height:.6rem;position:absolute;z-index:1;top:.1rem}header .rightTxt{width:1.3rem;text-align:right;right:.2rem;font-size:.3rem}header .iconfont{font-size:.4rem;color:#666}header .icon-favorfill{color:#ff2772}.nav-header .rightTxt{color:#333}",""])},107:function(t,e,i){var n,o;i(109),n=i(105);var r=i(108);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=n},108:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"nav-header"},[i("a",{directives:[{name:"show",rawName:"v-show",value:t.backBtn,expression:"backBtn"}],staticClass:"backBtn",on:{click:function(e){t.backfn()}}},[i("i",{staticClass:"iconfont icon-back"})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.areaName,expression:"areaName"}],staticClass:"areaName"},[i("router-link",{attrs:{to:"/selectArea",id:"areaName"}},[t._v(t._s(t.currCity))]),t._v(" "),i("i",{staticClass:"iconfont icon-down"})],1),t._v(" "),i("p",{staticClass:"headTxt"},[t._v(t._s(t.title))]),t._v(" "),t.rightIcon&&t.rightIcon.iconClass?i("a",{staticClass:"rightIcon",on:{click:function(e){t.goFn()}}},[i("i",{staticClass:"iconfont",class:t.rightIcon.iconClass})]):t._e(),t._v(" "),t.rightIcon&&t.rightIcon.txt?i("a",{staticClass:"rightTxt",on:{click:function(e){t.rIconEvent()}}},[t._v(t._s(t.rightIcon.txt))]):t._e()])},staticRenderFns:[]}},109:function(t,e,i){var n=i(106);"string"==typeof n&&(n=[[t.i,n,""]]);i(104)(n,{});n.locals&&(t.exports=n.locals)},110:function(t,e,i){var n,o;i(119),n=i(112);var r=i(117);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=n},111:function(t,e,i){var n,o;i(118),n=i(113);var r=i(116);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=n},112:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},r=i(9),a=i(111),s=n(a),c={numCount:s.default};e.default={data:function(){return{number:{},password:null}},computed:o({},(0,r.mapGetters)({})),components:c,methods:{cancle:function(){this.$emit("dialogCancle")},ok:function(){this.dialog.numCount&&this.$emit("dialogConfirm",this.number.now),this.dialog.password&&this.$emit("dialogConfirm",this.password),this.$emit("dialogClickOk")},numChange:function(t){this.number.now=t}},props:["dialog"],created:function(){var t=this;this.dialog.autoOff&&!function(){var e=t.dialog.autoOffTime||1500,i=t;setTimeout(function(){i.$emit("off")},e)}(),this.number.now=this.dialog.proNumCur,this.number.max=this.dialog.proNumMax,this.number.min=this.dialog.proNumMin}}},113:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i(9);e.default={props:["number"],data:function(){return{minNum:-(1/0),initNum:1,maxNum:1/0}},computed:{},methods:{addNum:function(){this.initNum<this.maxNum&&(this.initNum++,this.number.options?this.$emit("numChange",[this.initNum,this.number.options]):this.$emit("numChange",this.initNum))},minusNum:function(){this.initNum>this.minNum&&(this.initNum--,this.number.options?this.$emit("numChange",[this.initNum,this.number.options]):this.$emit("numChange",this.initNum))}},created:function(){this.minNum=this.number.min||this.minNum,this.initNum=this.number.now||this.initNum,this.maxNum=this.number.max||this.maxNum}}},114:function(t,e,i){e=t.exports=i(103)(),e.push([t.i,"",""])},115:function(t,e,i){e=t.exports=i(103)(),e.push([t.i,".dialog-pop{position:fixed;background:#fff;border:1px solid #ddd;border-radius:.18rem;z-index:1001;left:50%;top:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);overflow:hidden}.dialog-pop .countWrap{padding:0 .6rem}.dialog-pop-con{padding:.18rem .18rem .4rem}.dialog-txt{font-size:.3rem;text-align:center;line-height:1.5;margin-bottom:.18rem}.dialog-btn{background:#fff;border-top:1px solid #ddd}.dialog-btn a{display:block;width:50%;height:.8rem;text-align:center;line-height:.8rem;float:left;position:relative;font-size:.3rem}.dialog-confirm{color:#ff2772}.dialog-btn a s{display:block;width:1px;height:100%;background:#ddd;position:absolute;right:0;top:0}.dialog-mask{position:fixed;top:0;left:0;z-index:1000;width:100%;height:100%;background:rgba(0,0,0,.4)}.dialog-cancle{color:#333}",""])},116:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"numberCount clearfix"},[i("a",{staticClass:"iconfont icon-move",on:{click:function(e){t.minusNum()}}}),t._v(" "),i("input",{attrs:{type:"number",readonly:"readonly"},domProps:{value:t.initNum}}),t._v(" "),i("a",{staticClass:"iconfont icon-add",on:{click:function(e){t.addNum()}}})])},staticRenderFns:[]}},117:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"dialog-pop"},[i("div",{staticClass:"dialog-pop-con"},[t.dialog.icon?i("div",{staticClass:"dialog-icon"},[i("i",{class:"iconfont "+t.dialog.icon})]):t._e(),t._v(" "),t.dialog.txt?i("div",{staticClass:"dialog-txt"},[t._v("\n                "+t._s(t.dialog.txt)+"\n            ")]):t._e(),t._v(" "),t.dialog.numCount?i("div",{staticClass:"countWrap"},[i("numCount",{attrs:{number:t.number},on:{numChange:t.numChange}})],1):t._e(),t._v(" "),t.dialog.password?i("div",{staticClass:"passInput"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]):t._e()]),t._v(" "),t.dialog.btn?i("div",{staticClass:"dialog-btn clearfix"},[i("a",{staticClass:"dialog-cancle",on:{click:function(e){t.cancle()}}},[t._v(t._s(t.dialog.cancle)),i("s")]),t._v(" "),i("a",{staticClass:"dialog-confirm",on:{click:function(e){t.ok()}}},[t._v(t._s(t.dialog.ok))])]):t._e()]),t._v(" "),i("div",{staticClass:"dialog-mask"})])},staticRenderFns:[]}},118:function(t,e,i){var n=i(114);"string"==typeof n&&(n=[[t.i,n,""]]);i(104)(n,{});n.locals&&(t.exports=n.locals)},119:function(t,e,i){var n=i(115);"string"==typeof n&&(n=[[t.i,n,""]]);i(104)(n,{});n.locals&&(t.exports=n.locals)},287:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(107),r=n(o),a=i(110),s=n(a),c=i(9),u={headnav:r.default,dialogPop:s.default};e.default={data:function(){return{pagetitle:"个人资料",dialogOnOff:!1,dialogConfig:{autoOff:!0,txt:""},eventCode:"R010",clearEventCode:!1,linkId:null}},computed:(0,c.mapGetters)({userInfo:"userInfo"}),components:u,methods:{logOut:function(){var t=this;this.$store.dispatch("logoutfn").then(function(){t.$router.push("/user")},function(t){alert(t)})},tips:function(t){this.dialogConfig.txt=t,this.dialogOnOff=!0},offDialog:function(){this.dialogOnOff=!1}},created:function(){this.$store.dispatch("tjTrack",{eventCode:this.eventCode,clearEventCode:this.clearEventCode,linkId:this.linkId}).then(function(){},function(){}),this.$store.dispatch("getUserInfo")}}},309:function(t,e,i){e=t.exports=i(103)(),e.push([t.i,".user-info-box .user-mas{padding:0 .18rem;background:#fff}.user-info-box .user-mas li{border-bottom:.01rem solid #e0e0e0;line-height:.9rem;font-size:.32rem;padding-right:.34rem;position:relative}.user-info-box .user-mas li a{display:block;overflow:hidden}.user-info-box .user-mas li p{float:left;color:#333;font-size:.32rem}.user-info-box .user-mas li div{float:right;color:#999;font-size:.32rem}.user-info-box .user-mas .headImg p{line-height:1.54rem}.user-info-box .user-mas .headImg div{width:1.2rem;height:1.2rem;margin-top:.18rem;border-radius:50%;overflow:hidden}.user-info-box .user-mas .headImg img{width:100%;height:100%}.user-info-box .user-mas i{display:block;width:.13rem;height:.24rem;position:absolute;right:0;top:50%;margin-top:-.12rem;background:url("+i(411)+") no-repeat;background-position:0 -6.98rem}.user-info-box .logout{position:fixed;display:block;width:100%;height:.72rem;background-color:#ff2772;text-align:center;line-height:.72rem;color:#fff;font-size:.32rem;left:0;bottom:0}",""])},411:function(t,e,i){t.exports=i.p+"img/ico.png.80716da8"},505:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"user-info-box"},[i("headnav",{attrs:{title:t.pagetitle}}),t._v(" "),i("ul",{staticClass:"user-mas"},[i("li",{staticClass:"headImg"},[i("router-link",{attrs:{to:"/upimg"}},[i("p",[t._v("会员头像")]),t._v(" "),i("div",[i("img",{attrs:{src:t.userInfo.headPic?t.userInfo.headPic:"../../../src/assets/images/user/touxiang.png"}})]),t._v(" "),i("i")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/changeName"}},[i("p",[t._v("会员昵称")]),t._v(" "),i("div",[t._v(t._s(t.userInfo.nickName))]),t._v(" "),i("i")])],1),t._v(" "),i("li",[i("a",{on:{click:function(e){t.tips("添加真实姓名请联系客服")}}},[i("p",[t._v("真实姓名")]),t._v(" "),i("div",[t._v(t._s(t.userInfo.realName))]),t._v(" "),i("i")])]),t._v(" "),i("li",[i("router-link",{attrs:{to:""}},[i("p",[t._v("登录手机号")]),t._v(" "),i("div",[t._v(t._s(t.userInfo.userName))]),t._v(" "),i("i")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/changePass"}},[i("p",[t._v("修改登录密码")]),t._v(" "),i("div"),t._v(" "),i("i")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/user/userAddress"}},[i("p",[t._v("收货地址")]),t._v(" "),i("div"),t._v(" "),i("i")])],1)]),t._v(" "),i("div",{staticClass:"logout",on:{click:function(e){t.logOut()}}},[t._v("退出登录")]),t._v(" "),t.dialogOnOff?i("dialog-pop",{attrs:{dialog:t.dialogConfig},on:{off:t.offDialog}}):t._e()],1)},staticRenderFns:[]}},595:function(t,e,i){var n=i(309);"string"==typeof n&&(n=[[t.i,n,""]]);i(104)(n,{});n.locals&&(t.exports=n.locals)},98:function(t,e,i){var n,o;i(595),n=i(287);var r=i(505);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=n}});
//# sourceMappingURL=30.build.js.map