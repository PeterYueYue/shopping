<style scoped>
    .my-wallet-box {
    }
    .container{line-height: 0.4rem;}
    .container li{margin-bottom:0.2rem;background-color:white;padding:0.2rem;}
    .container .shopName{font-size: 0.25rem;}
    .container .shopName span{float:right; color:#999;}
    .container .orderPrice{color:#999; border-bottom:1px solid #ccc;padding-bottom:0.1rem;}
    .container .payState{padding-top:0.2rem; color:#ff2772;}
    .container .payState span.actPay{float:right; color:#333;}
</style>

<template>

    <div class="my-wallet-box">
        <headnav v-bind:title="pagetitle"></headnav>
        <div class="container">
            <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
                <router-link :to="'/myPayDetail/oid/'+order.orderNo" v-for="order in myOrderData">
                    <li>
                        <p class="shopName">{{order.shopName}} <span class="orderTime">{{order.createTime | date }}</span></p>
                        <p class="orderPrice">消费：¥{{order.totalPay}}</p>
                        <p class="payState">{{order.state | formatOrder}}<span v-if="order.state !='WAIT_BUYER_PAY'" class="actPay">实付：{{order.totalPay}}+{{order.totalVouchers}}优卷</span></p>
                    </li>
                </router-link>
            </ul>
        </div>
        <loading :show="loadingOffOn"></loading>
    </div>
</template>

<script type="text/javascript">
    import loading from './../common/loading.vue'
    import {
        mapGetters
    }
        from 'vuex'
    import headnav from './../common/header.vue'

    const components = {
        headnav,loading
    };
    export default {
        data() {
            return {
                pagetitle: "我的买单",
                pageNum: 1,
                busy:true,
                loadingOffOn:true,
                hasNext:false,
                eventCode : 'T005',
                clearEventCode : false,
                linkId : null
            }
        },
        computed: mapGetters({
            myOrderData: 'myOrderData'
        }),
        filters: {
            formatOrder(type) {
                if(type == 'WAIT_BUYER_PAY'){
                    return '支付失败'
                }else{
                    return '支付成功'
                }
            }
        },
        components: components,
        methods: {
            loadMore(){
                if(this.hasNext){
                    this.pageNum++;
                    this.$store.dispatch('AddOrderData', {
                        pageNo: this.pageNum,
                        pageSize: 20,
                        orderNo: "",
                        orderState: ""
                    }).then(()=>{
                        this.loadingOffOn=false;
                        this.hasNext =data.hasNext
                    })
                }
            },
        },
        created() {
            this.$store.dispatch('tjTrack',{eventCode:this.eventCode,clearEventCode:this.clearEventCode,linkId : this.linkId}).then(function(){

            },function(){

            })
            this.$store.dispatch('getOrder', {
                pageNo: this.pageNum,
                pageSize: 20,
                orderNo: "",
                orderState: ""
            }).then((data)=>{
                this.busy = false;
                this.loadingOffOn=false;
                this.hasNext =data.hasNext
            })
        }
    }

</script>
