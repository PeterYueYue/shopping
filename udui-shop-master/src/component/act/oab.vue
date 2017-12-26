<style scoped>
.lhj-main {
    width: 100%;
    height: 9.16rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    background-color: #480c6e;
}
.lhj-recordshow {
    position: absolute;
    left: 2rem;
    top: 2.2rem;
    width: 3.5rem;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    overflow: hidden;
}
.lhj-recordshow ul {
    position: absolute;
    left: 0;
    top: 0;
}
.lhj-recordshow li{
    width: 3.5rem;
    height: 0.4rem;
    line-height: 0.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.24rem;
}
.lhj-lottery {
    position: absolute;
    width: 5.4rem;
    height: 1.74rem;
    left: 1.06rem;
    top: 3.9rem;
}
.lhj-lottery-box {
    float: left;
    width: 1rem;
    height: 1.74rem;
    margin: 0 0.17rem;
    overflow: hidden;
    text-align: center;
    line-height: 1.74rem;
    font-size: 0.72rem;
    color: #ff2772;
    font-family: 'microsoft yahei';
    font-weight: 500;
    position: relative;
}
.lhj-lottery-item {
    position: absolute;
    left: 0;
    top: 0;
}
.lhj-lottery-item>div {
    width: 1rem;
    height: 1.74rem;
}
.lhj-btn {
    position: absolute;
    width: 4rem;
    height: 0.9rem;
    left: 1.75rem;
    bottom: 1.1rem;
}
.lhj-hand {
    width: 0.6rem;
    height: 0.8rem;
    background: url('../../assets/images/subject/lhj/hand.png') center no-repeat;
    background-size: 100% 100%;
    position: absolute;
    right: 1.74rem;
    bottom: 0.9rem;
}
.lhj-rule {
    position: absolute;
    left: 50%;
    bottom: 0;
    height: 0.72rem;
    line-height: 0.72rem;
    transform: translate(-50%,0);
    color: #fff;
}
.lhj-rule span {
    margin: 0 0.18rem;
}
.lhj-pop {
    width: 6.5rem;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 11;
}
.lhj-win h3 {
    height: 1.33rem;
    background: url('../../assets/images/subject/lhj/lhjwintt.png') center no-repeat;
    background-size: 100% 100%;
    position: relative;
}
.lhj-win h3 i {
    position: absolute;
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    top: 0.3rem;
    right: 0.18rem;
}
.lhj-win .lhj-popcon {
    background: #fff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 1rem 0.3rem;
    text-align: center;
    line-height: 1.5;
}
.lhj-win .windesc {
    font-size: 0.36rem;
    font-weight: bold;
    color: #ff2772;
}
.lhj-win .wintip {
    color: #999;
    margin-top: 0.3rem;
}
.lhj-fail h3 {
    height: 1.62rem;
    background: url('../../assets/images/subject/lhj/lhjfailtt.png') center no-repeat;
    background-size: 100% 100%;
    position: relative;
}
.lhj-fail h3 i {
    position: absolute;
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    top: 0.3rem;
    right: 0.18rem;
}
.lhj-fail .lhj-popcon {
    background: #fff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 0.3rem 0.3rem 0.6rem;
    text-align: center;
    line-height: 1.5;
}
.lhj-fail .faildesc {
    font-size: 0.36rem;
    font-weight: bold;
    color: #666;
}
.lhj-fail .failtip {
    color: #999;
    margin-top: 0.3rem;
    margin-bottom: 0.6rem;
}
.lhj-fail a {
    display: inline-block;
    width: 2.16rem;
    height: 0.66rem;
    line-height: 0.66rem;
    border: 1px solid #999;
    border-radius: 5px;
    margin: 0 0.12rem;
}
.lhj-fail .lhj-tohome {
    background: #fe2872;
    border-color: #fe2872;
    color: #fff;
}
.lhj-closepop {
    color: #333;
}
.lhj-rulepop {
    width: 6.5rem;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 11;
    background: #fff;
    border-radius: 0.18rem;
    overflow: hidden;
}
.lhj-rulepop h3 {
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    color: #fff;
    background: #ff2772;
    position: relative;
    font-size: 0.36rem;
}
.lhj-rulepop h3 i {
    display: block;
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: 0;
    top: 0;
    font-size: 0.4rem;
}
.lhj-rulepop .rulecon {
    padding: 0.42rem;
    max-height: 9rem;
    line-height: 1.8;
    font-size: 0.27rem;
    overflow: scroll;
}
.lhj-ad h3 {
    width: 100%;
    height: 0.6rem;
    background: url('../../assets/images/subject/lhj/lhjggh3.png') center no-repeat;
    background-size: auto 0.3rem;
}
.lhj-ad li {
    width: 6.9rem;
    height: 2rem;
    border-radius: 0.3rem;
    background: #fff;
    margin: 0 auto 0.18rem;
    overflow: hidden;
}
@keyframes pointer {
    from{
        right: 1.32rem;
        bottom: 0.54rem;
        opacity: 0;
    }
    to{
        right: 1.74rem;
        bottom: 0.9rem;
        opacity: 1;
    }
}
@keyframes infinitScroll {
    from {
        top: 0;
    }
    to{
        top: -15.66rem;
    }
}
.pointer {
    animation: pointer 1s ease 0s infinite normal;
    -moz-animation: pointer 1s ease 0s infinite normal;	/* Firefox */
    -webkit-animation: pointer 1s ease 0s infinite normal;	/* Safari 和 Chrome */
    -o-animation: pointer 1s ease 0s infinite normal;	/* Opera */
}
.ease {
    -webkit-transition: top 4s ease;
    -moz-transition: top 4s ease;
    -o-transition: top 4s ease;
    transition: top 4s ease;

    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);

    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
.infinitScroll {
    animation: infinitScroll 1s linear 0s infinite normal;
    -moz-animation: infinitScroll 1s linear 0s infinite normal;	/* Firefox */
    -webkit-animation: infinitScroll 1s linear 0s infinite normal;	/* Safari 和 Chrome */
    -o-animation: infinitScroll 1s linear 0s infinite normal;	/* Opera */
}
</style>
<template>
<div>
    <div class="lhj-main" :style="'background:url('+oab.oabInfo.img+')'">
        <div class="lhj-recordshow swiper-container">
            <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="data in oab.winRecord"><span>{{data.userLogin}}&nbsp;&nbsp;抽中{{data.giftName}}</span></li>
            </ul>
        </div>
        <div class="lhj-lottery clearfix">
            <div class="lhj-lottery-box"><div class="lhj-lottery-item" :class="[scrollIndex[3]?'infinitScroll':'']">
                <div v-for="num in numlist">{{num}}</div>
            </div></div>
            <div class="lhj-lottery-box"><div class="lhj-lottery-item" :class="[scrollIndex[2]?'infinitScroll':'']">
                <div v-for="num in numlist">{{num}}</div>
            </div></div>
            <div class="lhj-lottery-box"><div class="lhj-lottery-item" :class="[scrollIndex[1]?'infinitScroll':'']">
                <div v-for="num in numlist">{{num}}</div>
            </div></div>
            <div class="lhj-lottery-box"><div class="lhj-lottery-item" :class="[scrollIndex[0]?'infinitScroll':'']">
                <div v-for="num in numlist">{{num}}</div>
            </div></div>
        </div>
        <div class="lhj-btn" @click="doLottery()"></div>
        <div class="lhj-hand" :class="[onlot?'':'pointer']"></div>
        <div class="lhj-rule"><span class="showrule" @click="showRule()">活动规则</span>|<span class="torecord" @click="$router.push('/oab/myrecord/'+oab.oabInfo.codeNo+'/'+oab.oabInfo.urlType+'/'+oab.oabInfo.urlActivityCode+'/'+oab.oabInfo.urlActivityPartitionId)">中奖记录</span></div>
    </div>
    <div class="lhj-ad">
        <h3></h3>
        <ul>
            <li v-for="data in oab.ads[0].list"><router-link :to="data.linkedUrl">
                <img :src="data.linkedImg">
            </router-link></li>
        </ul>
    </div>
    <div class="lhj-pop lhj-win" v-if="lotWinshow">
        <h3><i  @click="closeWinPop()"></i></h3>
        <div class="lhj-popcon">
            <p class="windesc">太棒啦<br/><span>{{oab.winInfo.winAward.awardVoucher}}</span> 元优券已经到账！</p>
            <p class="wintip">{{lotWinTxt}}</p>
        </div>
    </div>
    <div class="lhj-pop lhj-fail" v-if="lotFailShow">
        <h3><i @click="lotFailShow=false;"></i></h3>
        <div class="lhj-popcon">
            <p class="faildesc">今日机会已用完</p>
            <p class="failtip">悄悄告诉你，明天中奖概率高哦~~</p>
            <router-link class="lhj-tohome" to="/index">逛逛优兑</router-link>
            <a class="lhj-closepop" @click="lotFailShow=false;">知道了</a>
        </div>
    </div>
    <div class="lhj-rulepop" v-show="showRulePop">
        <h3>活动规则<i class="iconfont icon-roundclosefill" @click="showRulePop=false;"></i></h3>
        <div class="rulecon"></div>
    </div>
    <layer v-if="lotWinshow||lotFailShow||showRulePop"></layer>
    <div style="display:none;">{{update}}</div>
</div>
</template>

<script>
import {
    mapGetters
}
from 'vuex'

import layer from './../common/layer.vue'
import swiper from '../../../static/swiper-3.4.0.min'

const components = {
    layer
}
export default {
    data() {
        return {
            scrollIndex:[false,false,false,false],
            numlist:[0,1,2,3,4,5,6,7,8,9],
            showPop:false,
            update:0,
            lotWinTxt:'',
            lotWinshow:false,
            lotFailShow:false,
            onlot:false,
            showRulePop:false,
            stopdrump:false
        }
    },
    computed: {
        ...mapGetters({ //
            oab:'oab',
            isWx : 'isWx'
        })
    },
    methods: {
        doLottery:function(){
            let that =this;
            this.$store.dispatch('checkOabChance',{
                activityCode:this.oab.oabInfo.activityCode,
                sameCityId:this.oab.oabInfo.activityPartitionId
            }).then(function(res){
                that.lotEfx();
                if(res.canLottery&&res.remainChangce>0){
                    that.$store.dispatch('oabDoLot',{
                        activityCode:that.oab.oabInfo.activityCode,
                        sameCityId:that.oab.oabInfo.activityPartitionId
                    }).then(function(res){
                        setTimeout(function(){
                            that.endLot();
                        },2000)
                    },function(){})
                }else {
                    that.lotFailShow = true;
                }
            },function(){})
        },
        lotEfx:function(){
            let that = this;
            let i = 0;
            this.scrollIndex[0] = true;
            this.onlot = true;
            var timer = setInterval(function(){
                that.update++;
                that.scrollIndex[i] = true;
                i++;
                if(i>3){
                    clearInterval(timer);
                }
            },500);
        },
        endLot:function(){
            let that = this;
            let i = 0;
            let result = (this.oab.winInfo.winAward.awardVoucher+'').split('');
            if(result.length<4){
                for(let j=0;j<4-result.length;j++){
                    result.unshift('0');
                }
            }
            let scrolls = document.querySelectorAll('.lhj-lottery-item');
            let stepLen = document.querySelector('.lhj-lottery-box').offsetHeight;
            var timer = setInterval(function(){
                that.update++;
                that.scrollIndex[i] = false;
                scrolls[3-i].style.top = '-'+result[3-i]*stepLen+'px';
                i++;
                if(i>3){
                    clearInterval(timer);
                    that.lotWinshow = true;
                    that.onlot = false;
                    let m = 0;
                    let tourl = '';
                    for(let n=0;n<4;n++){
                        setTimeout(function(){
                            if(that.oab.oabInfo.urlType==1){
                                that.lotWinTxt = '马上抵钱花，<span>'+(3-m)+'</span>S 后带你去~~';
                                tourl = '/index';
                            }
                            if(that.oab.oabInfo.urlType==0){
                                that.lotWinTxt = (3-m)+'秒后还有神秘惊喜……';
                                tourl = '/mall';
                            }
                            m++;
                            if(m==4&&!that.stopdrump){
                                that.$router.push(tourl);
                            }
                        },1000*n);
                    }
                }
            },500);
        },
        showRule:function(){
            let that = this;
            this.$store.dispatch('getOabRule',this.oab.oabInfo.codeNo).then(function(res){
                document.querySelector('.rulecon').innerHTML = res;
                that.showRulePop = true;
            },function(){});
        },
        closeWinPop:function(){
            this.stopdrump=true;
            this.$router.push('/index');
        }
    },
    mounted: function() {
        this.$nextTick(function() {
            let mySwiper = new Swiper(
                '.swiper-container', {
                    direction: 'vertical',
                    autoplay: 1000,
                    observer: true, //修改swiper自己或子元素时，自动初始化swiper
                    observeParents: true,
                    loop: true
                }
            )
        })
    },
    components:components,
    created() {
        let that = this;
        this.$store.dispatch('getOab',{
            activityCode:this.$route.params.codeNo,
            CityId:this.$route.params.areaId
        }).then(function(res){
            //微信分享
            var sharetitle = reqs.shareTitle||'优兑狂送5个亿 ，进来试试手气！',
                sharedesc = reqs.shareDesp||'',
                shareimg = reqs.shareImg||reqs.img;
            if(that.isWx){
                let url = window.location.href;
                This.$store.dispatch('wxShare',{title:sharetitle,desc:sharedesc,link:url,imgUrl:shareimg})
            }
            that.$store.dispatch('getOabWinRecord',{
                activityCode:res.codeNo,
                topCount:20,
                priceLine:'',
                sameCityId:res.partitionId
            });
            that.$store.dispatch('getOabAds',{
                regionId:res.bannerPartitionId,
                type:res.bannerPartitionId==-1?2:1,
                appLinkId:res.bannerLinkId,
            })
        },function(res){
            if(res.resultCode==11001){
                that.$router.push('/login');
            }
        })
    }
}
</script>
