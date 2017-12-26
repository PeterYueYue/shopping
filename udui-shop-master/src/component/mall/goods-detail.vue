<style>
.goodsDetail .proName {
    padding: 0.3rem 0.18rem;
    font-size: 0.26rem;
    line-height: 1.5;
    background: #fff;
    color: #333;
}

#pt {
    padding: 0 0.18rem 0.18rem;
    background: #fff;
    position: relative;
}
#pt .price {
    font-size: 0.44rem;
    color: #ff2772;
    height: 0.6rem;
    line-height: 0.6rem;
}
#pt .price span{
    padding:0.03rem 0.06rem;
    border-radius: 0.06rem;
    color: #fff;
    font-size: 0.24rem;
    margin-left: 0.24rem;
    background-color: #ff833e;
    vertical-align: middle;
}
#pt .pcon{
    padding-top: 0.12rem;
}
#pt .pcon span{
    color: #666;
    font-size: 0.26rem;
}
#pt .pcon .oldprice{
    width: 3rem;
    float: left;
}
#pt del {
    font-size: 0.26rem;
    color: #999;
}
#pt .freight {
    width: 3rem;
    float: left;
}
#pt .sales {
    float: right;
}
.proActInfo {
    padding: 0 0.18rem;
    margin: 0.18rem 0;
    background: #fff;
    height:0.72rem;
    line-height: 0.72rem;
    font-size: 0.26rem;
    color: #666;
}
#fuli{
    padding: 0.18rem;
    background: #fff;
    margin: 0.18rem 0;
    font-size: 0.26rem;
    border-radius: 0.06rem;
}
#fuli .ico {
    padding: 0.06rem 0.12rem;
    border-radius: 0.06rem;
    background: #ff833e;
    color: #fff;
}
#fuli .buylimit {
    padding: 0.06rem 0.12rem;
    border-radius: 0.06rem;
    border: 1px solid #999;
    color: #999;
    margin-left: 0.18rem;
}
#fuli .mscd {
    margin-top: 0.2rem;
    padding: 0.06rem 0.12rem;
    border-radius: 0.06rem;
    border: 1px solid #f00;
    color: #f00;
    display: inline-block;
}
#fuli .mscd span {
    margin-left: 0.18rem;
}

.bottomBar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.9rem;
    z-index: 5;
    background-color: #fff;
    border-top: 1px solid #ddd;
}
.bottomBar a {
    display: block;
    height: 0.7rem;
    padding: 0.1rem 0;
    text-align: center;
    float: left;
}
.bottomBar-left, .bottomBar-right {
    float: left;
    width: 50%;
}
.bottomBar-left a {
    width:33.33%;
    padding: 0.15rem 0 0.05rem;
    line-height: 0.35rem;
    color: #999;
    font-size: 0.24rem;
}
.bottomBar-left .iconfont {
    font-size: 0.4rem;
    display: inline;
}
.bottomBar .icon-favorfill {
    color: #FB0081;
}
.bottomBar-right a {
    width: 50%;
    line-height: 0.7rem;
    font-size: 0.3rem;
}
.bottomBar-right .addToCart {
    background: #f57c33;
    color: #fff;
}
.bottomBar-right .buyNow {
    background: #eb2258;
    color: #fff;
}
.bottomBar-right .disabled {
    background: #999;
    color: #fff;
    width: 100%;
}

.buyPop {
    position: fixed;
    z-index: 11;
    width: 7.1rem;
    padding: 0 0.2rem 0.84rem;
    background: #fff;
    left: 0;
    bottom: 0;
}
.buyPop .closePop {
    display: block;
    width: 0.32rem;
    height: 0.32rem;
    position: absolute;
    right: 0.18rem;
    top:0.36rem;
    font-size: 0.32rem;
    color: #666;
    border:none;
    text-decoration: none;
}
.buyPop .pro {
    border-bottom: 1px solid #eee;
}
.buyPop .sImg {
    width: 2.1rem;
    height: 2.1rem;
    position: relative;
    top:-0.36rem;
    border:1px solid #cdcdcd;
    border-radius: 0.06rem;
    overflow: hidden;
}
.buyPop .proN {
    position: absolute;
    left: 2.6rem;
    top:0.36rem;
    width: 3.8rem;
    line-height: 0.36rem;
    font-size: 0.26rem;
    color: #000;
}
.buyPop .pickWay {
    padding-bottom: 0.24rem;
    border-bottom: 1px solid #eee;
}
.buyPop .pickWay h3 {
    height: 0.66rem;
    line-height: 0.66rem;
    font-size: 0.25rem;
    color: #666;
    font-weight: normal;
}
.buyPop .pickWay li {
    float: left;
    margin:0 0.36rem 0 0;
    width: 1.2rem;
    height: 0.5rem;
    text-align: center;
    line-height: 0.5rem;
    border:1px solid #ddd;
    color: #000;
    font-size: 0.25rem;
}
.buyPop .pickWay li.cur {
    color: #ff2772;
    border-color: #ff2772;
}
.buyPop .buyNum {
    height: 0.54rem;
    line-height: 0.54rem;
    padding: 0.3rem 0;
    border-bottom: 1px solid #eee;
}
.buyPop .buyNum .fl {
    font-size: 0.25rem;
    color: #666;
}
.buyPop .buyNum .fr a {
    display: block;
    width: 0.6rem;
    height: 0.54rem;
    float: left;
    text-align: center;
    line-height: 0.54rem;
    background: #eee;
}
.buyPop .buyNum .fr a i {
    font-size: 0.25rem;
    color: #000;
    display: block;
}
.buyPop .buyNum .fr input {
    display: block;
    float: left;
    margin: 0 0.036rem;
    width: 0.66rem;
    height: 0.54rem;
    text-align: center;
    line-height: 0.54rem;
    background: #eee;
    border:none;
    color: #000;
    font-size: 0.32rem;
}
.buyPop .qrjr{
    width: 100%;
    display: inline-block;
    background-color: #eb2258;
    color: #fff;
    text-align: center;
    height: 0.72rem;
    line-height: 0.72rem;
    font-size: 0.3rem;
    border-radius: 0.06rem;
}

</style>

<template>

<div class="goodsDetail">
    <headnav v-bind:title="pagetitle" :rightIcon="rightIcon"></headnav>
    <banner v-bind:banner="{styleObj:{height:'7.5rem'},itemData:proImgs,dataType:2,filterType:5}" :bannerConfig="bannerConfig"></banner>
    <div class="proName">{{proName}}</div>
    <div class="proPrice clearfix" id="pt">
        <p class="price">&yen;{{proTotal}}<span>可抵用{{proVouchers}}优券</span></p>
        <p class="pcon">
            <span class="oldprice">价格：<del>{{oldPrice}}</del></span>
            <span class="freight"><em>{{feight}}</em></span>
            <span class="sales">已售<em>{{soldNum}}</em></span>
        </p>
    </div>
    <div id="fuli">
        <div>
            <span class="ico">活动</span>
            <span class="buylimit" v-if="proInfo.product.buyRuleDesc">{{proInfo.product.buyRuleDesc}}</span>
        </div>
        <p class="mscd" v-if="proInfo.product.countDownTime">
            秒杀中，还剩<span>{{cdTime}}</span>
        </p>
    </div>
    <detailHtml></detailHtml>
    <div class="bottomBar clearfix">
        <div class="bottomBar-left">
            <a :href="tel"><i class="iconfont icon-dianhua"></i><br/><span>电话</span></a>
            <a @click="setCollect()"><i class="iconfont" :class="[proCollect==1 ? 'icon-favorfill' : 'icon-favor']"></i><br/><span>收藏</span></a>
            <router-link to="/shopCart/goodsDetail"><i class="iconfont icon-gouwuche"></i><br/><span>购物车</span></router-link>
        </div>
        <div class="bottomBar-right">
            <a class="addToCart" @click="showBuyPop('cart')" v-if="!disabled&&addToCart">加入购物车</a>
            <a class="buyNow" :style="addToCart?'':{width:'100%'}" @click="showBuyPop('spro')" v-if="!disabled">立即购买</a>
            <a class="disabled" v-if="disabled">已下架</a>
        </div>
    </div>
    <selectProAttr v-bind:proData="proInfo" v-bind:type="buyType" v-on:hide="showPop=false" v-if="showPop"></selectProAttr>
    <layer v-if="showPop" @click.native="showBuyPop()"></layer>
    <back-top :show="true"></back-top>
</div>

</template>

<script>

import {
    mapGetters
}
from 'vuex'
import headnav from './../common/header.vue'
import banner from './../common/banner.vue'
import loading from './../common/loading.vue'
import backTop from './../common/back-top.vue'
import detailHtml from './detail-html.vue'
import layer from './../common/layer.vue'
import selectProAttr from './../common/select-pro-attr.vue'
const components = {
    headnav, banner, loading, backTop, detailHtml, layer, selectProAttr
}
export default {
    data() {
        return {
            pagetitle: '商品详情',
            rightIcon: {
                iconClass:'icon-icon',
                iconType:'0'
            },
            showPop:false,
            pickWay:0,  //0:初始值，1：自提，2：快递
            buyCount:1,
            buyType:'spro',
            bannerConfig: {
                direction: 'horizontal',
                autoplay: 2000,
                spend: 2000,
                loop: true,
                observer: true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents: true,
                //修改swiper的父元素时，自动初始化swiper
                // 如果需要分页器
                pagination: '.swiper-pagination'
            },
            eventCode : 'P001',
            clearEventCode : false,
            linkId : null,
            cdTime:'00 : 00 : 00',
            TIMER:{}
        }
    },
    computed: {
        ...mapGetters({ //
            proInfo: 'proInfo',
            userInfo: 'userInfo',
            isWx : 'isWx'
        }),
        proOwner:function(){   //0：自营（优兑、京东），1：同城，2：供货商
            return this.proInfo.product.ownerType;
        },
        proResource:function(){ //自营类型：空或null为商城自营，jDong为京东
            return this.proInfo.product.resource;
        },
        proImgs:function(){
            return this.proInfo.product.imgs;
        },
        proThumImg:function(){
            return this.proInfo.product.thumImage;
        },
        proName:function(){
            return this.proInfo.product.name;
        },
        proCash:function(){
            return this.proInfo.product.price;
        },
        proVouchers:function(){
            return this.proInfo.product.vouchers;
        },
        proTotal:function(){
            return this.proCash+this.proVouchers;
        },
        oldPrice:function(){
            return this.proInfo.product.oldPrice;
        },
        feight:function(){
            // return this.proInfo.product.feight==0?'包邮':('运费：'+this.proInfo.product.feight);
            return this.proInfo.product.feightDetailed;
        },
        soldNum:function(){
            return this.proInfo.product.sold;
        },
        proStock:function(){
            return this.proInfo.product.stock;
        },
        proCollect:function(){
            return this.proInfo.product.isCollected;
        },
        proActId:function(){
            return this.proInfo.product.activityId;
        },
        tel:function(){
            let phoneNum;
            if(this.proOwner==0||this.proOwner==2){
                phoneNum = this.proInfo.shopTel||'4000801111';
            }else {
                phoneNum = this.proInfo.shop.telphone||'4000801111';
            }
            return 'tel:'+phoneNum;
        },
        disabled:function(){
            let proStatu = this.proInfo.product.status;
            return proStatu!=1;
        },
        addToCart:function(){
            let result;
            if(this.proOwner==0||this.proOwner==2){
                this.proInfo.product.activityId?result=false:result=true;
            }else {
                result=false;
            }
            return result;
        }
    },
    methods: {
        showBuyPop:function(buyType){
            this.buyType = buyType;
            this.showPop = !this.showPop;
        },
        setPickWay:function(val){
            this.pickWay = val;
        },
        setCollect:function(){
            if(this.userInfo.isLogin){
                if(this.proCollect==1){
                    this.$store.dispatch('cancleProductCollect', this.$route.params.goodsId);
                }else {
                    this.$store.dispatch('setProductCollect', {productId:this.$route.params.goodsId});
                }
            }else {
                this.$router.push('/login');
            }
        },
        buyCountPlus:function(){
            this.buyCount<this.proStock&&this.buyCount++;
        },
        buyCountMinus:function(){
            this.buyCount>1&&this.buyCount--;
        },
        setTradePros:function(){
            if(this.userInfo.isLogin){
                let tradePros;
                if(this.buyType=='cart'){
                    tradePros = {
                        productId: this.$route.params.goodsId,
                        productSpecId: 0,
                        activityId: this.proActId,
                        productCount: this.buyCount,
                        expireTime: "",
                        userId: 0
                    };
                    tradePros = JSON.stringify(tradePros);
                    this.$store.dispatch('addShopCart',tradePros);
                    this.showPop = false;
                }else if(this.buyType=='spro'){
                    this.$router.push('/index');
                }
            }else{
                this.$router.push('/login');
            }
        },
        msCountDown:function(t){
            let that = this;
            this.TIMER = setInterval(function(){
                if(t>0){
                    let day = Math.floor(t/86400000);
                    let hour=Math.floor((t/3600000)%24);
                    let min=Math.floor((t/60000)%60);
                    let sec=Math.floor((t/1000)%60);
                    hour = hour < 10 ? "0" + hour : hour;
                    min = min < 10 ? "0" + min : min;
                    sec = sec < 10 ? "0" + sec : sec;
                    that.cdTime = hour+' : '+min+' : '+sec;
                    t -= 1000;
                }else {
                    clearInterval(that.TIMER);
                    that.$store.dispatch('getProductInfo', {
                        proId:that.$route.params.goodsId
                    });
                }
            },1000)
        }
    },
    components: components,
    created() {
        let that =this;
        this.$store.dispatch('tjTrack',{eventCode:this.eventCode,clearEventCode:this.clearEventCode,linkId : this.$route.params.goodsId}).then(function(){

        },function(){

        })
        this.$store.commit('Clean_proInfo_data');
        if(this.$route.params.actId){
            this.$store.dispatch('getProductInfo', {
                proId:this.$route.params.goodsId,
                activityId:this.$route.params.actId
            }).then(function(data){
                if(that.proInfo.product.countDownTime){
                    that.msCountDown(that.proInfo.product.countDownTime);
                }
                if(that.isWx){
                    let url = window.location.href;
                    This.$store.dispatch('wxShare',{title:data.product.name,desc:'',link:url,imgUrl:data.product.thumImage})
                }
            },function(){});
        }else{
            console.log(1);
            this.$store.dispatch('getProductInfo', {
                proId:this.$route.params.goodsId
            }).then(function(data){
                if(that.isWx){
                    let url = window.location.href;
                    This.$store.dispatch('wxShare',{title:data.product.name,desc:'',link:url,imgUrl:data.product.thumImage})
                }
            },function(){})
        }
    }
}

</script>
