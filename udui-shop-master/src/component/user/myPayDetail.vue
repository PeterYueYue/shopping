<style scoped>
    .paySuc {
        padding: 0 0.18rem;
        background: #fff;
        height: 0.9rem;
        line-height: 0.9rem;
    }
    .paySuc span {
        color: #53d769;
        font-size: 0.228rem;
    }
    .paySuc a {
        display: block;
        width: 1.44rem;
        height: 0.54rem;
        border: 1px solid #ff7e42;
        color: #ff7e42;
        border-radius: 0.06rem;
        margin-top: 0.18rem;
        text-align: center;
        line-height: 0.54rem;
    }
    .payInfo {
        padding: 0.36rem 0.18rem;
        background: #fff;
        margin-top: 0.18rem;
        line-height: 2;
        font-size:0.25rem;
        border-bottom: 1px solid #ddd;
    }
    .payInfo p:after{
        clear:both;
        content:" ";
        display:block;
        font-size:0;
        height:0;
        visibility:hidden
    }
    .payInfo p .fl {
        color: #666;
    }
    .paycash .fr {
        color: #ff2772;
    }
    .paygive .fr {
        color: #ff7e42;
    }
    .giveVor {
        padding: 0 0.18rem;
        background: #fff;
        height: 0.9rem;
        line-height: 0.9rem;
    }
    .giveVor span {
        font-size: 0.42rem;
        color: #666;
    }
    .giveVor span b {
        color: #ff7e42;
        font-weight: normal;
        margin: 0 0.036rem;
    }
    .giveVor a {
        display: block;
        width: 1.44rem;
        height: 0.54rem;
        border: 1px solid #ff7e42;
        color: #ff7e42;
        border-radius: 0.06rem;
        margin-top: 0.18rem;
        text-align: center;
        line-height: 0.54rem;
    }
    .orderState {
        height: 0.9rem;
        line-height: 0.9rem;
        padding: 0 0.18rem;
        background: #fff;
    }
    .orderState .fl {
        color: #666;
        font-size: 0.3rem;
    }
    .orderState .fl span {
        font-size: 0.3rem;
        color: #000;
    }
    .orderState .fr a {
        height: 0.54rem;
        width: 19rem;
        border:1px solid #ff2772;
        color: #FF2772;
        float: right;
        margin-top: 0.18rem;
        line-height: 0.54rem;
        text-align: center;
        border-radius: 0.06rem;
    }
</style>

<template>
    <div class="myPayDetail">
        <headnav v-bind:title="pagetitle"></headnav>
        <div class="payInfo">
            <p class="paysn">
                <span class="fl">商家名称：</span>
                <span class="fr">{{myPayDetailData.sellerName}}</span>
            </p>
            <p class="paytotal">
                <span class="fl">消费总金额：</span>
                <span class="fr">¥{{myPayDetailData.totalPayment}}</span>
            </p>
            <p class="payother">
                <span class="fl">不计入优惠金额：</span>
                <span class="fr">¥{{errorData}}</span>
            </p>
            <p class="paycou">
                <span class="fl">活动抵扣：</span>
                <span class="fr">-¥{{myPayDetailData.totalVouchers}}</span>
            </p>
            <p class="paycash">
                <span class="fl">总支付金额：</span>
                <span class="fr">¥{{ Number(myPayDetailData.totalSellerPrice)}}+{{myPayDetailData.totalVouchers}}优券</span>
            </p>
            <p class="paytime">
                <span class="fl">支付时间：</span>
                <span class="fr">{{myPayDetailData.createTime | date}}</span>
            </p>
            <p class="payway">
                <span class="fl">支付渠道：</span>
                <span class="fr">{{myPayDetailData.paymentChannelDto == null ? '' : myPayDetailData.paymentChannelDto.account}}</span>
            </p>
            <p class="payun">
                <span class="fl">支付账户名：</span>
                <span class="fr">{{myPayDetailData.userName}}</span>
            </p>
        </div>
        <div class="orderState">
            <div class="fl">
                支付状态：<span>{{myPayDetailData.state == 'WAIT_BUYER_PAY'?'支付失败':'支付成功'}}</span>
            </div>
            <div class="fr"></div>
        </div>
        <dialog-pop v-if="dialogOnOff" v-bind:dialog="dialogConfig" v-on:off="offDialog"></dialog-pop>
    </div>
</template>

<script type="text/javascript">
    import headnav from './../common/header.vue'
    import dialogPop from './../common/dialog-pop.vue'
    import common from './../../../static/common'
    import {
        mapGetters
    }
        from 'vuex'
    export default {
        data(){
            return {
                pagetitle: '支付详情',//标题配置
                myPayDetailData:{},
                errorData:'',
            }
        },
        methods: mapGetters([
            'isWx'
        ]),
        created(){
            var This = this;
            this.$store.dispatch('getPayDetail',this.$route.params.oid).then((data)=>{
                this.myPayDetailData = data;
                this.errorData = data.orderItemList[0].noDisPartFee
                if(This.isWx){
                    let titleStr = '我刚刚用优兑商城在' + data.sellerName + '买单成功，推荐你也看看';
                    let url = common.processingURL.domainName+'shopInfo/sid/'+data.sellerId;
                    This.$store.dispatch('wxShare',{title:titleStr,desc:'',link:url,imgUrl:''})
                }
            });
        },
        components: {
            headnav, dialogPop
        }
    }
</script>
