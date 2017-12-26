<style scoped>
    .refundState{height:1rem; color:#f08268; line-height: 1rem; padding-left:0.2rem; background-color:white; font-size: 0.3rem;}
    .refundPro{height:2rem; padding:0.2rem; box-sizing: border-box; }
    .refundPro .gImg{width:1.64rem; height:1.64rem; float:left;}
    .refundPro .gInfo{padding-left:0.2rem; float:left; width:5rem;}
    .refundPro .gInfo .gName{height:0.6rem}
    .refundPro .gInfo .gSpec{height:0.6rem}
    .refundPro .gInfo .gPrice{height:0.6rem}
    .refundPro .gInfo .gNum{float:right;}
    #logs{background-color:white; padding-top:0.2rem; }
    .refundCon{height:0.8rem; border-bottom:1px solid #ccc; padding: 0.1rem 0.2rem;}
    .refundCon p{font-weight: bold;}
    .refundCon p span{float:right; font-weight: normal;}
    .refundCon .des{margin-top:0.1rem; color:#999;}
    .refundReason{padding:0.2rem; background-color:white; padding-bottom:0.2rem; border-bottom:1px solid #ccc;}
    .refundReason>p{font-weight: bold;}
    .refundReason>p>span{float:right; font-weight: normal;}
    .refundReason .rfRtt{height:0.8rem;line-height: 0.8rem;}
    .refundReason .rfMemo{padding-top:0.2rem;}
    .refundReason .rfItt{height:0.8rem;line-height: 0.8rem;}
    .refundReason .rfImgs li{
        float: left; width:33.33%; box-sizing: border-box; padding:0.1rem; height:2rem; border:1px solid #999;
    }
    .refundCancle{height:0.9rem; background-color:white; border-top:1px solid #ccc;  position: fixed; bottom:0; width:100%; box-sizing: border-box; text-align: right; line-height: 0.9rem; padding:0 0.2rem;}
    .refundCancle a{padding:0.1rem 0.2rem; border: 1px solid #f0822d; color:#f0822d; border-radius: 0.05rem;}
    .wuliuInput{height:2.5rem; background-color:white; border-bottom:1px solid #ccc; padding:0.2rem; box-sizing: border-box;}
    .wuliuInput h4{color:#ff0000; line-height: 0.7rem; font-size: 0.28rem;}
    .wuliuInput p{line-height: 0.5rem; height:0.5rem;}
    .wuliuInput p select{border: 1px solid #ccc; height:0.4rem; width: 4rem;}
    .wuliuInput p input{height:0.7rem; margin-top:0.2rem;border:1px solid #ccc; width:4rem; padding-left:0.2rem; box-sizing: border-box; font-size: 28px;}
</style>

<template>
    <div class="refundStateBox">
        <headnav v-bind:title="pagetitle"></headnav>
        <div class="refundState">{{RefundData.refundStatusName}}</div>
        <div class="refundPro clearfix">
            <div class="gImg">
                <!--<router-link :to="'/goodsDetail/pro/'+data.productId">-->
                <img :src="RefundData.productImgUrl">
                <!--</router-link>-->
            </div>
            <div class="gInfo">
                <div class="gName">{{RefundData.productName}}</div>
                <div class="gSpec"></div>
                <div class="gPrice">
                    <span class="gp">¥{{RefundData.totalRefundMoney+RefundData.totalVouchers}}<i>(可抵用{{RefundData.totalVouchers}}优券)</i></span>
                    <span class="gNum">x{{RefundData.count}}</span>
                </div>
            </div>
        </div>
        <div class="wuliuInput" v-show="wuliuOffOn">
            <h4>请填写寄回商品的物流信息</h4>
            <p>快递公司：<select id="company" maxlength="30"></select></p>
            <p>快递单号：<input type="text" id="kdNo"></p>
        </div>
        <div id="logs">
            <div class="refundCon" v-for="item in RefundData.afterSalesLog" v-show="item.orderStatus == 'CLOSED' ">
                <p>{{item.operatorType | zhuanHuan}}<span>{{item.operatorTime}}</span></p>
                <div class="des">{{item.operatorMemo}}</div>
            </div>
        </div>
        <div class="refundReason" v-show="sellerSpeadk">
            <p class="clearfix">{{sellerSpeadk.operatorType | zhuanHuan}}<span>{{sellerSpeadk.operatorTime}}</span></p>
            <div>
                <div class="rfMemo">{{sellerSpeadk.operatorMemo}}</div>
            </div>
        </div>
        <div class="refundReason" v-show="afterSalesLog">
            <p class="clearfix" style="line-height: 0.5rem;">{{afterSalesLog.operatorType | zhuanHuan}}<span>{{afterSalesLog.operatorTime}}</span></p>
            <div>
                <div class="rfMtt">{{afterSalesLog.afterSalesType | stateType}}理由：{{afterSalesLog.afterSalesReasonName}}</div>
                <div class="rfMemo">{{afterSalesLog.afterSalesType | stateType}}说明：{{afterSalesLog.operatorMemo}}</div>
            </div>
            <div v-show="afterSalesLog.imgArray">
                <div class="rfItt">{{afterSalesLog.afterSalesType | stateType}}凭证：</div>
                <div class="rfImgs">
                    <ul class="clearfix">
                        <li v-for="imgSrc in afterSalesLog.imgArray"><img :src="imgSrc"></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="refundCancle">
            <a class="qxsh"
                v-show="qxshOffOn"
               @click="refundCancle">取消退款</a>
        </div>
        <dialog-pop v-if="dialogOnOff" v-bind:dialog="dialogConfig" v-on:off="offDialog"></dialog-pop>
    </div>
</template>
<script type="text/javascript">
    import headnav from './../common/header.vue'
    import dialogPop from './../common/dialog-pop.vue'
    export default {
        data(){
            return {
                pagetitle: '退款状态',//标题配置
                RefundData:{},    //页面数据
                afterSalesLog:{},   //最后次的状态
                dialogOnOff:false,
                dialogConfig : {
                    autoOff:true,
                    txt:''
                },
                qxshOffOn:true,      //取消按钮的开关
                wuliuOffOn:false,    //是否现实物流信息
                sellerSpeadk:{},      //商家是第一个的话
            }
        },
        computed: {

        },
        filters: {
            zhuanHuan(type) {   //
                switch(type) {
                    case 0:
                        return "优兑";
                    case 1:
                        return "卖家";
                    case 2:
                        return "买家";
                }
            },
            stateType(type){
                switch(type) {
                    case 1:
                        return "退款";
                    case 2:
                        return "退货";
                }
            },
        },
        methods: {
            offDialog(){
                this.dialogOnOff=false
            },
            refundCancle(){
                this.$store.dispatch("refundCancle",this.$route.params.oid).then(()=>{
                    this.dialogOnOff=true;
                    this.dialogConfig.txt='取消退款成功';
                    setTimeout(()=>{
                        this.$router.push('/userOrders');
                    },2000);
                });
            }
        },
        created(){
            //获取售后详情方法
            this.$store.dispatch("getRefund",this.$route.params.oid).then((data)=>{
                this.RefundData = data;
                this.afterSalesLog = data.afterSalesLog[0];
                switch (this.RefundData.refundStatus){
                    case 'CLOSED':
                        this.qxshOffOn = false;
                        break;
                    case 'SUCCESS':
                        this.sellerSpeadk = data.afterSalesLog[0];
                        this.afterSalesLog = data.afterSalesLog[1];
                        this.qxshOffOn = false;
                        break;
                    case 'WAIT_BUYER_RETURN_GOODS':
                        this.qxshOffOn = false;
                        this.wuliuOffOn = true;
                        break;
                }
            }).then((data)=>{
                console.log("成功");
            },(data)=>{
                this.dialogOnOff=true;
                this.dialogConfig.txt=data;
                setTimeout(()=>{
                    this.$router.go(-1)
                },1000);
            });
        },
        components: {
            headnav, dialogPop
        }
    }
</script>
