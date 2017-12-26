const testServiceHost           = 'http://test.youdui.org:8090/api/';
const developmentServiceHost    = 'http://api.youdui.org/api';
const productionServiceHost     = 'http://fapi.udui.com/api';
const domainName                = 'http://weixin.youdui.org/vue/';


class ProcessingURL {
    constructor(serviceHost){
        this.serviceHost = serviceHost;
        this.nowUrl = window.location.href;
        this.domainName = domainName;
    }
    combination(url,data){
        let link = this.serviceHost + url;
        if (typeof data != "undefined" && data != "") {
            var paramArr = [];
            for (var attr in  data) {
                paramArr.push(attr + '=' +  data[attr]);
            }
            link += '?' + paramArr.join('&');
        }
        return link;
    }
    getQueryString(name){
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        let r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURIComponent(r[2]);
        return null;
    }
}

const processingURL = new ProcessingURL(developmentServiceHost)

class BrowserInfo {
    constructor(){
        this.ua = window.navigator.userAgent.toLowerCase();
    }
    isWx(){
        return (this.ua.match(/MicroMessenger/i) == 'micromessenger');
    }
    changeTitle(title){
       let $body = document.getElementsByTagName('body')[0];
       let $iframe = document.createElement('iframe');
       document.title = title;
       $iframe.src = '/favicon.ico';
       document.body.appendChild($iframe);
       $iframe.onload = function() {
           setTimeout(function() {
               document.body.removeChild($iframe);
           }, 0);
       };
   }
   
}

const browserInfo = new BrowserInfo();

class StorageOperation {
    constructor(){
    }
    getCookie(name){
        let arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg)){
            return unescape(arr[2]);
        }else{
            return null;
        }
    }
}

const store = new StorageOperation();

export default {
    processingURL, browserInfo, StorageOperation
}
