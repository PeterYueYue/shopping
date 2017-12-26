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
    <div class="refundList">
        <headnav v-bind:title="pagetitle"></headnav>
        <div class="orderListBox" v-for="data in orderList">
            <div class="orderTitle">
                <span class="orderNum">订单编号：{{data.no}}</span>
                <span class="orderState">{{data.refundStatusName}}</span>
            </div>
        <div>
            <dl>
                <dd>
                    <img :src="data.productImgUrl">
                </dd>
                <dt class="proName">{{data.productName}}</dt>
                <dt class="proAttribute">{{data.productSpecFeachure}}</dt>
                <dt class="proPrice">¥{{data.unitPayPrice}}  (已抵用{{data.totalVouchers}}优券)<span class="proNum">x{{data.count}}</span></dt>
            </dl>
            <div class="orderStat">
                <p>共{{data.count}}件商品 合计￥{{data.totalPay}}+{{data.totalVouchers}}优券（含运费￥{{data.totalDeliveryFee}}）</p>
            </div>
        </div>
            <div class="btns">
                <a @click="refundCancle(data.itemId)" v-show="data.refundStatus == 'WAIT_SELLER_AGREE' || data.refundStatus == 'WAIT_BUYER_RETURN_GOODS'">{{data.refundStatus|stateBtn}}</a>
                <router-link :to="'/refundState/oid/'+data.itemId">退款详情</router-link>
            </div>
        </div>
        <dialog-pop v-if="dialogOnOff" v-bind:dialog="dialogConfig" v-on:off="offDialog"></dialog-pop>
        <backTop v-show="showBackStatus"></backTop>
        <loading :show="loadingOffOn"></loading>
    </div>
</template>

<script type="text/javascript">
    import headnav from './../common/header.vue'
    import dialogPop from './../common/dialog-pop.vue'
    import {showBack} from './../../../static/mUtils'
    import loading  from './../common/loading.vue'
    import backTop  from  './../common/back-top.vue'
    export default {
        data(){
            return {
                pagetitle: '售后单',//标题配置
                orderList:{},
                showBackStatus:false,
                loadingOffOn:true,
                dialogOnOff:false,
                dialogConfig: {
                    autoOff: true,
                    txt: '',
                },
            }
        },
        filters: {
            stateBtn(type){
                switch(type) {
                    case "WAIT_SELLER_AGREE":
                        return '取消售后';
                    case "CLOSED":
                        return '';
                    case "SUCCESS":
                        return '';
                    case "WAIT_BUYER_RETURN_GOODS":
                        return '取消售后';
                    case "SELLER_REFUSE_BUYER": //拒绝退货
                        return '';
                }
            }
        },
        methods: {
            offDialog(){
                this.dialogOnOff = false;
            },
            refundCancle(oid){
                this.$store.dispatch("refundCancle",oid).then(()=>{
                    this.dialogOnOff=true;
                    this.dialogConfig.txt='取消退款成功';
                    setTimeout(()=>{
                        this.$router.push('/userOrders');
                    },2000);
                },(data)=>{
                    this.dialogOnOff=true;
                    this.dialogConfig.txt=data;
                });
            }
        },
        created(){
            //开始监听scrollTop的值，达到一定程度后显示返回顶部按钮
            showBack(status => {
                this.showBackStatus = status;
            });
            this.$store.dispatch('getAfterSalesList',{
                pageNo:1,
                pageSize:15
            }).then((data)=>{
                this.orderList = data;
                this.loadingOffOn = false;
            });
        },
        components: {
            headnav, dialogPop,backTop,loading
        }
    }
</script>
