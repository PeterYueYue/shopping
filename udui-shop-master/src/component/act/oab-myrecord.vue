<style scoped>
.lhj-record {
    padding-top: 0.27rem;
}
.lhj-record li {
    height: 2.1rem;
    background: url('../../assets/images/subject/lhj/lhjlvlist.png') center no-repeat;
    background-size: auto 100%;
    position: relative;
    margin-bottom: 0.3rem;
}
.lhj-record li .recimg {
    display: block;
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 0.3rem;
    left: 0.18rem;
    top: 0.42rem;
}
.lhj-record li .recname {
    display: block;
    position: absolute;
    width: 3rem;
    left: 1.5rem;
    bottom: 1rem;
    font-size: 0.36rem;
    line-height: 1;
    height: 0.48rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.lhj-record li .rectime {
    display: block;
    position: absolute;
    width: 3rem;
    left: 1.5rem;
    top: 1.2rem;
    font-size: 0.2rem;
    color: #999;
}
.lhj-record li .recprice {
    width: 2.64rem;
    text-align: center;
    display: block;
    position: absolute;
    right: 0.24rem;
    bottom: 1rem;
    color: #ff2772;
}
.lhj-record li .recprice b {
    font-size: 0.72rem;
    margin-left: 0.1rem;
    font-weight: normal;
}
.lhj-record li .recbtn {
    width: 1.8rem;
    height: 0.6rem;
    text-align: center;
    line-height: 0.6rem;
    display: block;
    position: absolute;
    top: 1.2rem;
    right: 0.6rem;
    background: #ff2772;
    color: #fff;
    border-radius: 0.06rem;
}
.lhj-record li .recbtn.disable {
    background: #ccc;
}
.lhj-qrcode {
    width: 3.18rem;
    height: 3.18rem;
    margin:1.32rem auto 0.48rem;
}
.lhj-qrcode img{
    display: block;
    width: 100%;
    height: 100%;
}
.lhj-qrcodetxt {
    text-align:center;
    font-size:0.34rem;
    padding-bottom: 1rem;
}
.lhj-norecord {
    padding: 1.68rem 0 1.38rem;
    text-align: center;
}
.lhj-norecord p {
    font-size: 0.36rem;
    color: #666;
    margin-bottom: 1.14rem;
}
.lhj-norecord a {
    font-size: 0.36rem;
    color: #fff;
    padding:0.18rem 0.42rem;
    line-height: 1;
    background: #ff2772;
    border-radius: 0.12rem;
}
.lhj-pop {
    width: 6.5rem;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 11;
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
</style>
<template>
<div class="oab-myrecord">
    <div class="lhj-record">
        <ul v-if="oab.myRecord.length>0">
            <li v-for="data in oab.myRecord">
                <img class="recimg" :src="data.giftImg">
                <p class="recname">{{data.awardDesc?data.awardDesc:'优兑商城抵扣券'}}</p>
                <p class="rectime">{{data.awardTime.split(' ')[0]}}-{{data.expireTime.split(' ')[0]}}</p>
                <p class="recprice">¥<b>{{data.winVoucher}}</b></p>
                <p class="recbtn" :class="[data.remainExpireTime>0?'':'disable']" @click="lhj_rec_tolot()">{{data.remainExpireTime>0?($route.params.totype==0?'去抽奖':'立即使用'):'已过期'}}</p>
            </li>
        </ul>
        <div v-if="oab.myRecord.length==0" class="lhj-norecord">
            <p>哎呀，空空如也，你还没有参加活动哦~~</p>
            <a @click="back()">立即参加</a>
        </div>
        <div class="lhj-qrcode">
            <img src="../../assets/images/subject/lhj/lhj-qrcode.png" />
        </div>
        <div class="lhj-qrcodetxt">
            长按识别二维码<br/>发现更多的优惠
        </div>
    </div>
    <div class="lhj-pop lhj-fail" v-if="nochance">
        <h3><i @click="nochance=false"></i></h3>
        <div class="lhj-popcon">
            <p class="faildesc">今日机会已用完</p>
            <p class="failtip">悄悄告诉你，明天中奖概率高哦~~</p>
            <router-link to="/index" class="lhj-tohome">逛逛优兑</router-link>
            <a class="lhj-closepop" @click="nochance=false">知道了</a>
        </div>
    </div>
    <layer v-if="nochance"></layer>
</div>
</template>
<script>
import {
    mapGetters
}
from 'vuex'
import layer from './../common/layer.vue'

const components = {
    layer
}

export default {
    data() {
        return {
            nochance:false
        }
    },
    computed: {
        ...mapGetters({ //
            oab:'oab'
        }),
    },
    methods: {
        lhj_rec_tolot:function(){
            let that = this;
            if(this.$route.params.totype==0){
                this.$store.dispatch('checkOabToAct',{
                    activityCode:this.$route.params.tocode,
                    sameCityId:this.$route.params.toarea
                }).then(function(res){
                    if(res.canLottery&&res.remainChangce>0){
                        that.$router.push('/specialAct/'+that.$route.params.tocode+'/part/'+that.$route.params.toarea);
                    }else {
                        that.nochance = true;
                    }
                },function(){});
            }
            if(this.$route.params.totype==1){
                this.$router.push('/specialAct/'+this.$route.params.tocode+'/part/'+this.$route.params.toarea);
            }
        },
        back:function(){
            this.$router.go(-1);
        }
    },
    components:components,
    created() {
        this.$store.dispatch('getOabMyRecord',{
            pageNo:1,
            state:0,
            activityType:'',
            activityCode:this.$route.params.code
        })
    }
}
</script>
