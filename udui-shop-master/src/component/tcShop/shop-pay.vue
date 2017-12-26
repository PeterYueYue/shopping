<style scoped>
.payInput {
    padding: .48rem .18rem;
}
.payInput .form-row {
    background: #fff;
    border: 1px solid #ddd;
    padding: 0 .18rem;
    margin-bottom: .48rem;
}
.payInput .form-label {
    font-size: .26rem;
    color: #666;
    width: 2.4rem;
}
.payInput .form-label, .payInput input, .payShop, .useIf {
    height: .72rem;
    line-height: .72rem;
}
.form-input, .form-label {
    float: left;
}
.payInput .form-input input {
    width: 100%;
    text-align: right;
    color: #666;
    font-size: .26rem;
}
.payInput .form-input {
    width: 4.2rem;
}
.form-input, .form-label {
    float: left;
}
.payShop {
    background: #fff;
    color: #666;
}
.payShop, .useIf {
    padding: 0 .18rem;
    font-size: .28rem;
}
.shop-pay .payWay {
    padding: 0 0.18rem;
    background: #fff;
    margin-top: 0.18rem;
}
.shop-pay .payWay h3 {
    height: 0.9rem;
    line-height: 0.9rem;
    font-size: 0.3rem;
    color: #666;
    border-bottom: 1px solid #ddd;
    font-weight: normal;
}
.shop-pay .payWay li {
    height: 0.72rem;
    line-height: 0.72rem;
    border-bottom: 1px solid #eee;
    font-size: 0.25rem;
    color: #333;
}
.shop-pay .payWay li i {
    font-size: 0.25rem;
}
.shop-pay .payWay li .icon-squarecheck {
    color: #ff2772;
}
.shop-pay .payWay li .fr {
    color: #999;
    text-align: right;
}
.shop-pay .payWay li .fl {
    height: 0.72rem;
    overflow: hidden;
}
.shop-pay .paySub {
    width: 100%;
    height: 0.9rem;
    line-height: 0.9rem;
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    text-align: right;
    font-size: 0.25rem;
}
.shop-pay .paySub span b {
    font-weight: normal;
    color: #ff2772;
}
.shop-pay .payBtn {
    display: block;
    height: 100%;
    padding: 0 0.72rem;
    background: #ff2772;
    color: #fff;
    font-size: 0.3rem;
    float: right;
    margin-left: 0.3rem;
}
.payVoucher {
    color: #ff7e42;
    height: .72rem;
    line-height: .72rem;
    padding: 0 .18rem;
    font-size: .28rem;
    background: #fff;
}
.shop-pay .dialog-pop .passInput input {
    width: 4rem;
    height: 0.7rem;
    background: #eee;
    margin: 0.1rem;
    line-height: 0.7rem;
    font-size: 0.3rem;
    text-align: center;
}
</style>

<template>
    <div class="shop-pay">
        <headnav v-bind:title="pagetitle"></headnav>
        <div class="payInput">
            <div class="form-row">
                <div class="form-label">
                    <label for="total">买单总金额：</label>
                </div>
                <div class="form-input">
                    <input type="text"  v-model="total" placeholder="0.00">
                </div>
            </div>
            <div class="form-row">
                <div class="form-label">
                    <label for="cash">不参加优惠金额：</label>
                </div>
                <div class="form-input">
                    <input type="text"  placeholder="0.00" v-model="cash">
                </div>
            </div>
        </div>
        <div class="useCupon">
            <div class="useIf" v-if="shopInfo.voucherRate!==0">
                <span style="color: rgb(102, 102, 102);">优券抵扣¥{{(total-cash)*shopInfo.voucherRate}}</span>
                <small>（最多可抵扣{{(total-cash)*shopInfo.voucherRate}}优券）</small>
                <div class="switchBtn" :class="[useUqActive?'open':'closed']" @click="useUqActive=!useUqActive">
                    <i></i>
                </div>
            </div>
            <div v-if="shopInfo.voucherRate==0||!useUqActive" class="giveIf" style="color: rgb(255, 126, 66);">赠送{{total}}优券</div>
        </div>
        <div class="payShop">商家：{{shopInfo.name}}</div>
        <div class="payVoucher" v-if="shopInfo.voucherRate!==0">活动：可使用优券抵扣{{shopInfo.voucherRate*100}}%现金</div>
        <div class="payWay">
            <h3>选择支付方式</h3>
            <ul>
                <li id="onlinePay" class="clearfix" @click="setPayWay(4)">
                    <div class="fl">
                        <i class="iconfont" :class="[PayWay==4?'icon-squarecheck':'icon-square']"></i>
                        余额支付
                    </div>
                    <div class="fr">余额：¥{{userAccount.amount}}</div>
                </li>
                <li id="aliPay" v-if="navigatorType=='ali'" class="clearfix" @click="setPayWay(1)">
                    <div class="fl">
                        <i class="iconfont" :class="[PayWay==1?'icon-squarecheck':'icon-square']"></i>
                        支付宝
                    </div>
                </li>
                <li id="wxPay" v-if="this.navigatorType=='wx'" class="clearfix" @click="setPayWay(2)">
                    <div class="fl">
                        <i class="iconfont" :class="[PayWay==2?'icon-squarecheck':'icon-square']"></i>
                        微信支付
                    </div>
                </li>
            </ul>
        </div>
        <div class="paySub">
            <span>合计：<b>¥{{calcuPrice()}}+{{calcuUq()}}优券</b></span>
            <a class="payBtn" @click="pay()">去支付</a>
        </div>
        <dialogPop v-if="showPayPass" :dialog="dialog" v-on:dialogCancle="showPayPass=false" v-on:dialogConfirm="dialogConfirm"></dialogPop>
    </div>

</template>

<script type="text/javascript">

import { mapGetters } from 'vuex'
import headnav  from './../common/header.vue'
import dialogPop from './../common/dialog-pop.vue'

const components = {
    headnav, dialogPop
}
export default {
    computed: mapGetters({
        shopInfo : 'shopInfo',
        userAccount:'userAccount',
        navigatorType : 'navigatorType'
    }),
    data() {
        return {
            pagetitle: '店铺买单',
            useUqActive : true,
            total : 0,
            cash : 0,
            PayWay : 4,
            imgCode : null,
            showPayPass : false,
            dialog:{
				txt:'请输入支付密码',
				cancle:'取消',
				ok:'确定',
				password:true,
                btn:true
			},
            uduiOrderNo: 0,
            eventCode : 'T006',
            clearEventCode : false,
            linkId : null
        }
    },
    methods: {
        setPayWay:function(data){
            this.PayWay = data;
        },
        calcuPrice:function(){
            if(this.shopInfo.voucherRate!==0&&this.useUqActive){
                return this.total - ((this.total - this.cash)*this.shopInfo.voucherRate)
            }else if(this.shopInfo.voucherRate!==0&&!this.useUqActive){
                return this.total
            }else if(this.shopInfo.voucherRate==0){
                return this.total
            }
        },
        calcuUq:function(){
            if(this.shopInfo.voucherRate!==0&&this.useUqActive){
                return ((this.total - this.cash)*this.shopInfo.voucherRate)
            }else if(this.shopInfo.voucherRate!==0&&!this.useUqActive){
                return 0
            }else if(this.shopInfo.voucherRate==0){
                return 0
            }
        },
        pay : function(){
            let This = this;
            if(this.cash>this.total||this.total==0){
                alert('请输入正确的金额')
            }else{
                let data = {
                    "totalPay": this.calcuPrice(),
        			"vouchers": this.calcuUq(),
        			"noDisPartFee": this.cash,
        			"shopId": this.shopInfo.id,
        			"activityId": ''
                }
                console.log(data);
                this.$store.dispatch('createxxOrder',JSON.stringify(data)).then(function(res){
                    This.uduiOrderNo = res.uduiOrderNo;
                    This.payOrder();
                },function(res){
                    console.log(res);
                })
            }
        },
        payOrder : function(uduiOrderNo){
            switch(this.PayWay) {
				case 4:
                    this.showPayPass = true;
					// if(hasPayPass == 1) {
					// 	$(".loading").hide();
					// 	$(".popup1").hide();
					// 	$(".popup").show();
					// 	$(".mask").show();
					// } else {
					// 	$(".loading").hide();
					// 	$.dialog({
					// 		content: '还没有设置支付密码，去设置',
					// 		title: "alert",
					// 		ok: function() {
					// 			location.href = common.mainUrl + "/user/setPayPass.html?ReturnUrl=" + url;
					// 		}
					// 	})
					// }

					break;
				case '1':
					// appApi.thirdPay('', 2, 1, orderNo, '', rUrl, '', function(reqs) {
					// 	if(reqs.success) {
					// 		$(".loading").hide();
					// 		$('body').html(common.htmlDecode(reqs.module.payInfo));
					// 	} else if(reqs.resultCode == 11001) {
					// 		location.href = common.mainUrl + '/login.html?ReturnUrl=' + url + "&t=" + new Date().getTime();
					// 	} else {
					// 		$(".loading").hide();
					// 		$.dialog({
					// 			content: reqs.errorMessage,
					// 			title: "alert",
					// 			time: "2000"
					// 		})
					// 	}
					// });
					break;
				case '2':
					// appApi.thirdPay('', 2, 2, orderNo, '', '', '', function(reqs) {
					// 	if(reqs.success) {
					// 		$(".loading").hide();
					// 		var module = JSON.parse(common.htmlDecode(reqs.module.payInfo));
					// 		onBridgeReady(module.appId, module.timeStamp, module.nonceStr, module.packageStr, module.signType, module.paySign);
					// 	} else {
					// 		$(".loading").hide();
					// 		$.dialog({
					// 			content: reqs.errorMessage,
					// 			title: "alert",
					// 			time: "2000"
					// 		})
					// 	}
					// });
					break;
			}

        },
        dialogConfirm : function(res){
            let This = this;
            this.$store.dispatch('orderPay',{
                delegateUserId:'',
                payMode:1,
                thirdPayType:This.PayWay,
                orderNo:This.uduiOrderNo,
                payPasswd:res,
                notifyUrl:'',
                returnUrl:''
            }).then(function(res){
                console.log(123123123123123123);
                This.$router.push('/myPayDetail/oid/'+This.uduiOrderNo)
            },function(res){
                alert(res)
            });
        }
    },
    mounted: function () {
    },
    components: components,
    created() {
        this.$store.dispatch('tjTrack',{eventCode:this.eventCode,clearEventCode:this.clearEventCode,linkId : this.linkId}).then(function(){

        },function(){

        })
        if(!this.userAccount.vouchers){
            this.$store.dispatch('getUserAccount');
        }
    }
}
</script>
