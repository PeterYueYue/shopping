<style scoped>
.secsell {
    min-height: 100%;
    background: #fff;
}
.timeaxis-curarr {
    display: block;
    width: 0;
    height: 0;
    border-color: #ff2772 transparent transparent transparent;
    border-width: 0.18rem;
    border-style: solid dashed dashed dashed;
    position: absolute;
    left: 3.6rem;
    top: 1.65rem;
    z-index: 2;
}
.swiper-wrapper {
    display: block;
}
.timeaxis-wrap {
    width: 100%;
    height: 0.9rem;
    background: #666;
    position: relative;
    overflow: hidden;
}
.timeaxis-bar {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
}
.timeaxis-bar li {
    width: 1.5rem;
    height: 0.9rem;
    text-align: center;
    color: #fff;
    display: table-cell;
    vertical-align: middle;
}
.timeaxis-state {
    font-size: 0.24rem;
}
.timeaxis-curbg {
    position: absolute;
    z-index: 1;
    width: 1.5rem;
    height: 0.9rem;
    left: 3rem;
    top: 0;
    background: #ff2772;
}
.timeaxis-curbg i {
    display: block;
    width: 0;
    height: 0;
    border-color: #ff2772 transparent transparent transparent;
    border-width: 0.18rem;
    border-style: solid dashed dashed dashed;
    position: absolute;
    left: 0.6rem;
    bottom: -0.3rem;
}
.msCountDown {
    padding: 0 0.18rem 0 0.12rem;
    border-bottom:1px solid #eee;
    border-left: 0.06rem solid #ff2772;
    height: 0.72rem;
    line-height: 0.72rem;
    font-size: 0.24rem;
}
.msCountDown .fl {
    color: #ff2772;
}
.msCountDown .fr {
    color: #666;
}
.msItemList li {
    padding: 0.18rem;
    border-bottom: 1px solid #eee;
    background: #fff;
}
.msItemList li a {
    display: block;
    width: 100%;
    height: 100%;
}
.ms-itemimg {
    float: left;
    width: 2.1rem;
    height: 2.1rem;
    margin-right: 0.18rem;
}
.ms-itemimg img {
    display: block;
    width: 100%;
    height: 100%;
}
.ms-itemname {
    font-size: 0.24rem;
    line-height: 1.5;
    height: 0.72rem;
    overflow: hidden;
    color: #000;
}
.ms-oldprice {
    font-size: 0.24rem;
    line-height: 1.5;
    color: #999;
}
.ms-pricebuy {
    height: 0.48rem;
    line-height: 0.48rem;
}
.ms-nowPrice {
    float: left;
    color: #ff2772;
    font-size: 0.25rem;
}
.ms-btn {
    float: right;
    display: block;
    padding: 0 0.21rem;
    border-radius: 0.06rem;
    color: #fff;
}
.ms-btn.active {
    background: #ff2772;
}
.ms-btn.disable {
    background: #ccc;
}
.ms-stock-bar {
    float: left;
    width: 3.3rem;
    height: 0.18rem;
    border: 1px solid #fc4f8b;
    border-radius: 0.1rem;
    overflow: hidden;
    margin: 0.06rem 0;
}
.ms-stock {
    margin-top: 0.18rem;
}
.ms-stock-bar p {
    width: 50%;
    height: 100%;
    background: #fc4f8b;
}
.ms-stock-txt {
    float: left;
    font-size: 0.24rem;
    line-height: 0.3rem;
    margin-left: 0.12rem;
    color: #999;
}
.ms-opentime {
    color: #10e505;
    font-size: 0.3rem;
    margin-top: 0.18rem;
}
.ms-null {
    padding: 1.2rem 0 0;
}
.ms-null img {
    display: block;
    width: 3.6rem;
    height: 4.7rem;
    margin: 0 auto;
}
.ms-null p {
    margin-top: 0.96rem;
    text-align: center;
    font-size: 0.3rem;
}
.ms-error {
    padding: 0.72rem 0 0;
}
.ms-error img {
    display: block;
    width: 4.8rem;
    height: 3.6rem;
    margin: 0 auto;
}
.ms-error p {
    margin-top: 0.6rem;
    text-align: center;
    font-size: 0.24rem;
}
</style>
<template>
<div class="secsell">
    <headnav :title="pagetitle" style="font-weight: bold;color: #ff2772;" :rightIcon="rightIcon"></headnav>
    <div v-show="secSell.con.length>0">
        <div class="timeaxis-wrap swiper-container">
            <ul class="timeaxis-bar swiper-wrapper" :style="'width:'+secSell.con.length*1.5+'rem'">
                <li class="swiper-slide" v-for="(data,i) in secSell.con" @click="changeSwiper(i)">
                    <div class="timeaxis-time">{{data.stFormat}}</div>
                    <div class="timeaxis-state">{{data.statu}}</div>
                </li>
            </ul>
            <div class="timeaxis-curbg"></div>
        </div>
        <div class="timeaxis-curarr"></div>
        <div class="msItemList">
            <div class="msCountDown clearfix">
                <div class="fl">{{cdTxt}}</div>
                <div class="fr">
                    <span class="msC-state">{{cdDes}}</span>
                    <span>{{cdTime}}</span>
                </div>
            </div>
            <ul>
                <li v-for="data in secSell.selItems" class="clearfix">
                    <router-link :to="itemState==1&&data.awardTotalCount>0?('/goodsDetail/pro/'+data.productID+'/act/'+data.activityID):('/goodsDetail/pro/'+data.productID)">
                        <div class="ms-itemimg"><img :src="data.productImg"></div>
                        <div class="ms-iteminfo">
                            <div class="ms-itemname">{{data.productName}}</div>
                            <div class="ms-oldprice"><del>&yen;{{data.oldPrice}}</del></div>
                            <div class="ms-pricebuy clearfix">
                                <span class="ms-nowPrice">抵券后仅 &yen;<em>{{data.activityPrice}}</em></span>
                                <span v-if="itemState==1" class="ms-btn" :class="[data.awardTotalCount<=0?'disable':'active']">{{data.btnTxt}}</span>
                            </div>
                            <div v-if="itemState==1" class="ms-stock clearfix">
                                <div class="ms-stock-bar">
                                    <p :style="'width:'+(1-data.awardTotalCount/data.awardStockCount).toFixed(2)*100+'%'"></p>
                                </div>
                                <div class="ms-stock-txt">已秒{{(1-data.awardTotalCount/data.awardStockCount).toFixed(2)*100+'%'}}</div>
                            </div>
                            <div v-if="itemState==2" class="ms-opentime">{{stFormat}}准时开抢</div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
    <div v-show="secSell.con.length<=0" class="ms-null">
        <img src="../../assets/images/subject/secsell/msnull.jpg" />
        <p>今日秒杀已结束，请明日赶早~~</p>
    </div>
    <div v-if="mserror" class="ms-error">
        <img src="../../assets/images/subject/secsell/mserrorbg.jpg" />
        <p>哎哟，出现了点小问题，请稍后再试</p>
    </div>
</div>
</template>
<script>
import {
    mapGetters
}
from 'vuex'
import headnav from './../common/header.vue'
import format from '../../../static/format.js'
import swiper from '../../../static/swiper-3.4.0.min'

const components = {
    headnav
}

export default {
    data() {
        return{
            pagetitle:'天天低价秒杀',
            rightIcon:{
                iconClass:'icon-icon',
                iconType:'0'
            },
            selIndex:0,
            mySwiper:{},
            cdDes:'',
            cdTxt:'',
            itemState:0,
            cdTime:'00:00:00',
            timer:{},
            stFormat:'',
            mserror:false
        }
    },
    computed:{
        ...mapGetters({ //
            secSell:'secSell'
        })
    },
    methods:{
        changeSwiper:function(i){
            this.mySwiper.slideTo(i, 300,true);
        },
        loadMsItem:function(i){
            this.countdowm(this.secSell.con[i].cdTime);
            this.cdTxt = this.secSell.con[i].cdTxt;
            this.cdDes = this.secSell.con[i].cdDes;
            this.itemState = this.secSell.con[i].itemState;
            this.stFormat = this.secSell.con[i].stFormat;
            this.$store.dispatch('getSecSellItem',{
                code:this.secSell.con[i].activityCode,
                cityId:this.secSell.con[i].activityPartition,
                index:i
            });
        },
        countdowm:function(cdtime){
            let that = this;
            let range = cdtime-new Date().getTime();
            clearInterval(this.timer);
            if(range>0){
                let day = Math.floor(range/86400000);
                let hour=Math.floor((range/3600000)%24);
                let min=Math.floor((range/60000)%60);
                let sec=Math.floor((range/1000)%60);
                hour = hour < 10 ? "0" + hour : hour;
                min = min < 10 ? "0" + min : min;
                sec = sec < 10 ? "0" + sec : sec;
                this.cdTime = hour+':'+min+':'+sec;
                range -= 1000;
            }else {
                clearInterval(this.timer);
                this.cdTime = '00:00:00';
            }
            this.timer = setInterval(function(){
                if(range>0){
                    let day = Math.floor(range/86400000);
                    let hour=Math.floor((range/3600000)%24);
                    let min=Math.floor((range/60000)%60);
                    let sec=Math.floor((range/1000)%60);
                    hour = hour < 10 ? "0" + hour : hour;
                    min = min < 10 ? "0" + min : min;
                    sec = sec < 10 ? "0" + sec : sec;
                    that.cdTime = hour+':'+min+':'+sec;
                    range -= 1000;
                }else {
                    clearInterval(that.timer);
                    that.cdTime = '00:00:00';
                    // location.reload();
                }
            },1000)
        }
    },
    mounted:function() {
        let that = this;
        this.$nextTick(function() {
            that.mySwiper = new Swiper ('.swiper-container', {
                autoplay:false,
                slidesPerView:'auto',
                observer: true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents: true,
                centeredSlides:true,
                onSlideChangeEnd:function(swiper){
                    that.loadMsItem(swiper.activeIndex);
                }
            })
        })
    },
    components:components,
    created() {
        let that = this;
        this.$store.dispatch('getSecSell').then(function(res){
            that.$store.dispatch('getSecSellItem',{
                code:that.secSell.con[that.secSell.curIndex].activityCode,
                cityId:that.secSell.con[that.secSell.curIndex].activityPartition,
                index:that.secSell.curIndex
            }).then(function(){
                that.mySwiper.slideTo(that.secSell.curIndex,0,true);
            },function(){
                that.mserror = true;
            });
        },function(){
            that.mserror = true;
        });
    }
}
</script>
