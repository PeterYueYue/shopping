webpackJsonp([66],{103:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},104:function(e,t){function n(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=f[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(s(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(s(r.parts[i],t));f[r.id]={id:r.id,refs:1,parts:a}}}}function r(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],s=o[2],u=o[3],c={css:a,media:s,sourceMap:u};n[i]?n[i].parts.push(c):t.push(n[i]={id:i,parts:[c]})}return t}function o(e,t){var n=p(),r=m[m.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),m.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=m.indexOf(e);t>=0&&m.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function s(e,t){var n,r,o;if(t.singleton){var s=v++;n=h||(h=a(t)),r=u.bind(null,n,s,!1),o=u.bind(null,n,s,!0)}else n=a(t),r=c.bind(null,n),o=function(){i(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function u(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function c(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var f={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},l=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),p=d(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,v=0,m=[];e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=l()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var o=r(e);return n(o,t),function(e){for(var i=[],a=0;a<o.length;a++){var s=o[a],u=f[s.id];u.refs--,i.push(u)}if(e){var c=r(e);n(c,t)}for(var a=0;a<i.length;a++){var u=i[a];if(0===u.refs){for(var d=0;d<u.parts.length;d++)u.parts[d]();delete f[u.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},144:function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o="http://api.youdui.org/api",i="http://weixin.youdui.org/vue/",a=function(){function e(t){n(this,e),this.serviceHost=t,this.nowUrl=window.location.href,this.domainName=i}return r(e,[{key:"combination",value:function(e,t){var n=this.serviceHost+e;if("undefined"!=typeof t&&""!=t){var r=[];for(var o in t)r.push(o+"="+t[o]);n+="?"+r.join("&")}return n}},{key:"getQueryString",value:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(t);return null!=n?decodeURIComponent(n[2]):null}}]),e}(),s=new a(o),u=function(){function e(){n(this,e),this.ua=window.navigator.userAgent.toLowerCase()}return r(e,[{key:"isWx",value:function(){return"micromessenger"==this.ua.match(/MicroMessenger/i)}},{key:"changeTitle",value:function(e){var t=(document.getElementsByTagName("body")[0],document.createElement("iframe"));document.title=e,t.src="/favicon.ico",document.body.appendChild(t),t.onload=function(){setTimeout(function(){document.body.removeChild(t)},0)}}}]),e}(),c=new u,f=function(){function e(){n(this,e)}return r(e,[{key:"getCookie",value:function(e){var t=void 0,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null}}]),e}();new f;t.default={processingURL:s,browserInfo:c,StorageOperation:f}},211:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(144);r(o);t.default={data:function(){return{errMsg:""}},created:function(){this.errMsg=this.$route.params.errMsg}}},353:function(e,t,n){t=e.exports=n(103)(),t.push([e.i,".scanError[data-v-760dbafb]{width:100%;height:100%;background:#eee url("+n(446)+") 50% no-repeat;background-size:100% 100%;padding-bottom:0}.errorMsg[data-v-760dbafb]{position:absolute;width:5rem;line-height:1.5;font-size:.36rem;top:3.84rem;left:1.2rem}.errorTel[data-v-760dbafb]{position:absolute;left:0;bottom:1.26rem;text-align:center;width:100%;font-size:.3rem;line-height:1.5}.errorTel a[data-v-760dbafb]{color:#666}.errorTel .tohome[data-v-760dbafb]{color:#e3017f;text-decoration:underline}",""])},43:function(e,t,n){var r,o;n(639),r=n(211);var i=n(549);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-760dbafb",e.exports=r},446:function(e,t,n){e.exports=n.p+"img/scanerrorbg.jpg.d4ff68cd"},549:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"scanError"},[n("div",{staticClass:"errorMsg"},[e._v(e._s(e.errMsg))]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"errorTel"},[n("a",{staticClass:"tohome",attrs:{to:"/index"}},[e._v("逛逛优兑商城")]),n("br"),e._v(" "),n("a",{attrs:{href:"tel:4000801111"}},[e._v("如有疑问，可致电：400-080-1111")])])}]}},639:function(e,t,n){var r=n(353);"string"==typeof r&&(r=[[e.i,r,""]]);n(104)(r,{});r.locals&&(e.exports=r.locals)}});
//# sourceMappingURL=66.build.js.map