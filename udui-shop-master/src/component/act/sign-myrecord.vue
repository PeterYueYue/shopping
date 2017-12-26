<style scoped>
.sign-myrecord {
    min-height: 100%;
    background: #fff;
    padding-bottom: 1.3rem;
}
.signUpWinRecord {
    padding-bottom: 1.2rem;
}
.yqHead {
    padding: 0.18rem 0;
    text-align: center;
    background: #f0f2f5;
}
.yqHead .p1 {
    width: 4.62rem;
    height: 0.48rem;
    line-height: 0.48rem;
    border-radius: 0.24rem;
    background: #ff2772;
    color: #fff;
    margin: 0 auto;
}
.yqHead .p2 {
    height: 0.72rem;
    line-height: 0.72rem;
    background: #fdfacd;
    width: 4.02rem;
    color: #ff2772;
    margin: 0 auto;
}
.yqHead .p2 b {
    font-size: 0.48rem;
    margin: 0 0.12rem;
}
.signUpWinRecord .navTab li {
    height: 0.72rem;
    line-height: 0.72rem;
    border-bottom: 2px solid #eee;
    text-align: center;
    float: left;
    width: 50%;
}
.signUpWinRecord .navTab .cur {
    color: #ff2772;
    border-color: #ff2772;
}
.signUpWinRecord {
    background: #fff;
}
.recordList .noRecord {
    background: #fff url("../../assets/images/subject/norecord.jpg") top center no-repeat;
    background-size: 2.7rem 2.46rem;
    text-align: center;
    margin-top: 1.122rem;
    padding-top: 2.7rem;
    font-size: 0.3rem;
    color: #999;
    display: none;
}
.recordList li {
    width: 7rem;
    margin: 0.12rem auto;
    padding: 0.12rem;
    background: #fff;
    border-bottom: 1px solid #eee;
}
.recordList li .fl {
    width: 2.325rem;
    height: 2.325rem;
    margin-right: 0.06rem;
}
.recordList li .fl img {
    display: block;
    width: 100%;
    height: 100%;
}
.recordList li .fr {
    width: 4.42rem;
}
.recordList li .rgName {
    font-size: 0.26rem;
    line-height: 1.5;
    height: 0.78rem;
    overflow: hidden;
}
.recordList li .rgExpire {
    font-size: 0.24rem;
    color: #666;
    margin: 0.23rem 0 0.35rem;
}
.recordList li .rgBtn a {
    display: block;
    width: 100%;
    height: 0.65rem;
    color: #fff;
    line-height: 0.65rem;
    text-align: center;
    font-size: 0.26rem;
    border-radius: 5px;
}
.recordList li .rgBtn a.act {
    background: #fb223f;
}
.recordList li .rgBtn a.dis {
    background: #bcbcbc;
}
.yqList {
    display: none;
}
.yqList li {
    padding: 0.24rem 0.18rem;
    background: #fff;
    border-bottom: 1px solid #eee;
    line-height: 2;
    position: relative;
}
.yqList li h3 {
    font-weight: normal;
    font-size: 14px;
}
.yqList li time {
    font-size: 12px;
    color: #999;
}
.yqList li span {
    position: absolute;
    right: 0.18rem;
    top: 0.24rem;
    font-size: 0.48rem;
    color: #ff2772;
}
.yqList .noRecord {
    text-align: center;
    color: #999;
    padding: 0.3rem 0;
    display: none;
}
.signUpWinRecord .wxqrcode {
    text-align: center;
    padding: 0.6rem 0;
}
.signUpWinRecord .wxqrcode img {
    display: inline-block;
    width: 3rem;
    height: 3rem;
}
.signUpWinRecord .wxqrcode p {
    line-height: 1.5;
    margin-top: 0.18rem;
    font-size: 0.3rem;
}
.kftel {
    display: block;
    width: 100%;
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    position: fixed;
    font-size: 0.3rem;
    bottom: 0;
    left: 0;
    z-index: 5;
    background: #fff;
    color: #000;
}
</style>
<template>
<div class="sign-myrecord">
    <div class="yqHead">
        <p class="p1">每天签到领优券，多领一些，囤起来！</p>
        <p class="p2">共计：<b>{{userAccount.vouchers}}</b>优券</p>
    </div>
    <div class="recordList">
        <div class="noRecord">
            亲，您还没有抽过奖哦！
        </div>
        <ul>
            <li class="clearfix" v-for="data in sign.myLottRecord">
                <div class="fl">
                    <img :src="data.giftImg">
                </div>
                <div class="fr">
                    <div class="rgName">{{data.giftName}}</div>
                    <div class="rgExpire">{{data.expireTime}}</div>
                    <div class="rgBtn">
                        <router-link :to="data.routerUrl?data.routerUrl:''" :class="data.btnClass">{{data.btnTxt}}</router-link>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <a class="kftel" href="tel:4000801111">咨询热线：400-080-1111</a>
</div>
</template>
<script>
import {
    mapGetters
}
from 'vuex'

export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters({ //
            userAccount: 'userAccount',
            sign:'sign'
        }),
    },
    methods: {

    },
    created() {
        if(!this.userAccount.vouchers){
            this.$store.dispatch('getUserAccount');
            this.$store.dispatch('getMySignLottRecord',{
                pageNo:1,
                state:0,
                activityType:'',
                activityCode:['ZKJ_FZCM','ZP_FZCM']
            });
        }
    }
}
</script>
