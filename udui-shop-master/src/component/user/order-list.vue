<style scoped>

/* line 1, ../sass/ie.scss */

.orderListBox {
    margin-bottom: 0.17rem;
}


/* line 2, ../sass/ie.scss */

.orderListBox .content,
.orderListBox .orderTitle,
.orderListBox .orderStat {
    background: #fff;
    padding: 0 0.18rem;
    line-height: 0.7rem;
    font-size: 0.24rem;
    overflow: hidden;
}


/* line 6, ../sass/ie.scss */

.orderListBox .orderTitle .orderNum {
    float: left;
}


/* line 7, ../sass/ie.scss */

.orderListBox .orderTitle .orderState {
    float: right;
    color:#FF2772;
}


/* line 9, ../sass/ie.scss */

.orderListBox dl {
    padding: 0.18rem;
    overflow: hidden;
    border-bottom: 0.01rem solid #e5e5e5;
    background: #f7f7f7;
}


/* line 11, ../sass/ie.scss */

.orderListBox dl dd {
    float: left;
    width: 1.63rem;
    height: 1.63rem;
    margin-right: 0.16rem;
}


/* line 13, ../sass/ie.scss */

.orderListBox dl dd img {
    display: block;
    width: 100%;
    height: 100%;
}


/* line 15, ../sass/ie.scss */

.orderListBox dl dt {
    text-align: left;
    font-size: 0.23rem;
    color: #000;
    overflow: hidden;
}


/* line 16, ../sass/ie.scss */

.orderListBox dl .proName {
    padding-top: 0.08rem;
}


/* line 18, ../sass/ie.scss */

.orderListBox dl .proName p {
    line-height: 0.3rem;
    height: 0.6rem;
}


/* line 20, ../sass/ie.scss */

.orderListBox dl .proAttribute {
    color: #999999;
    height: 0.65rem;
    line-height: 0.65rem;
}


/* line 23, ../sass/ie.scss */

.orderListBox dl .proPrice {
    line-height: 0.3rem;
}


/* line 25, ../sass/ie.scss */

.orderListBox dl .proPrice .proNum {
    float: right;
}


/* line 28, ../sass/ie.scss */

.orderListBox .orderStat {
    margin-bottom: 0.02rem;
}


/* line 30, ../sass/ie.scss */

.orderListBox .orderStat p {
    color: #000;
    text-align: right;
}


/* line 32, ../sass/ie.scss */

.orderListBox .btns {
    padding: 0.18rem;
    background: #fff;
    overflow: hidden;
}


/* line 34, ../sass/ie.scss */

.orderListBox .btns a {
    width: 1.25rem;
    text-align: center;
    display: inline-block;
    float: right;
    font-size: 0.25rem;
    line-height: 0.52rem;
    border-radius: 0.04rem;
    margin-left: 0.18rem;
    border: 0.01rem solid #666;
    color: #666;
}


/* line 35, ../sass/ie.scss */

.orderListBox .btns .orderInfoBtn {
    border: 0.01rem solid #ff2772;
    color: #ff2772;
}
.orderListBox .btns  .ljzf{
    color:#FF2772;
    border:#FF2772 1px solid;
}

</style>

<template>
<div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <div class="orderListBox" v-for="data in orderList">
        <div class="orderTitle">
            <span class="orderNum">订单编号：{{data.no}}</span>
            <span class="orderState">{{data.orderStatusName}}</span>
        </div>
        <div v-for="d in data.orderItemList">
            <router-link :to="'/goodsDetail/pro/'+d.productId">
                <dl>
                    <dd>
                        <img :src="d.productImgUrl">
                    </dd>
                    <dt class="proName">{{d.productName}}</dt>
                    <dt class="proAttribute">{{d.productSpecFeachure}}</dt>
                    <dt class="proPrice">¥{{d.totalPayment}}  (可抵用{{d.unitVouchers}}优券)<span class="proNum">x{{d.count}}</span></dt>
                </dl>
            </router-link>
            <div class="orderStat">
                <p>共{{d.count}}件商品 合计￥{{data.totalPay}}+{{data.totalVouchers}}优券（含运费￥{{data.totalDeliveryFee}}）</p>
            </div>
        </div>
        <div class="btns">
            <a  v-show="
                data.state == 'TRADE_FINISHED' && !data.evaluateState
                " @click="sendComment(data.no)">发表评价</a>
            <a  v-show="
                data.state == 'TRADE_FINISHED' && data.evaluateState
                ">已经评价</a>
            <a style="color:#FF2772; border-color:#FF2772;" @click="sureReceipt(data.no)" v-show="
                data.state == 'WAIT_BUYER_CONFIRM_GOODS'
                ">确认收货</a>
            <a  v-show="
                data.state == 'WAIT_SELLER_SEND_GOODS' ||
                data.state == 'TRADE_FINISHED' ||
                data.state == 'WAIT_BUYER_CONFIRM_GOODS' ||
                data.state == 'WAIT_SELLER_CONFIRM'" @click="WxShare">晒单</a>
            <a class="ljzf" v-show="data.state == 'WAIT_BUYER_PAY'" @click="ljzf(data.no)">立即支付</a>
            <a v-show="data.state == 'WAIT_BUYER_PAY'" @click="cancelOrder(data.no)">取消订单</a>
            <router-link :to="'/orderInfo/'+data.no">订单详情</router-link>
        </div>
    </div>
    <dialog-pop v-if="dialogOnOff"  v-bind:dialog="dialogConfig" v-on:off="offDialog" @dialogCancle="dialogCancle" @dialogClickOk="dialogClickOk"></dialog-pop>
</div>
</template>

<script type="text/javascript">
import {
    mapGetters
}
from 'vuex'
import dialogPop    from './../common/dialog-pop.vue'
export default {
    data(){
        return {
            busy:false,
            dialogOnOff:false,
            dialogConfig: {
                autoOff: true,
                txt: '',
            },
            currNo:'',  //当前操作的订单号
        }
    },
    methods: {
        sendComment(No){
            this.$router.push('/editevaluate/no/'+No);
        },
        WxShare(){
            console.log("微信分享");
        },
        ljzf(No){
            this.$router.push('/payDo/'+No);
        },
        dialogClickOk(){
            this.dialogConfig.btn=false;
            this.dialogConfig.txt='订单已完成';
            //确认收货方法
            this.$store.dispatch('confirmReceipt',this.currNo).then(()=>{
                setTimeout(()=>{
                    this.dialogOnOff = false;
                    this.$router.push('/orderInfo/'+this.currNo);
                },2000)
            },(data)=>{
                console.log(data);
            });
        },
        dialogCancle(){
            this.dialogOnOff = false;
        },
        sureReceipt(No){
            this.currNo = No;
            this.dialogOnOff = true;
            this.dialogConfig.autoOff=false;
            this.dialogConfig.txt='确认收货后，无法退货退款';
            this.dialogConfig.btn=true;
            this.dialogConfig.cancle='取消';
            this.dialogConfig.ok='确认';
        },
        loadMore(){
            this.$nextTick(()=>{
                this.$emit('loadMore');
            })
        },
        offDialog : function(){
            this.dialogOnOff = false;
        },
        cancelOrder: function(num) {
            this.$store.dispatch('orderCancel',num).then(()=>{
                this.dialogOnOff = true;
                this.dialogConfig.txt="取消订单成功";
                this.$emit('orderCancel');
            });
        }
    },
    computed: {

    },
    filters: {
    },
    props: ['orderList'],
    components: {
      dialogPop
    },
    create(){
    }
}
</script>
