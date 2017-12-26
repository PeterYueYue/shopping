<style>
.payDo .orderBox {
    padding: 0.12rem 0.18rem;
    margin-top: 0.18rem;
    background: #fff;
    line-height: 2;
    font-size: 0.3rem;
    color: #666;
}
.payDo .payWay {
    padding: 0 0.18rem;
    background: #fff;
    margin-top: 0.18rem;
}
.payDo .payWay h3 {
    height: 0.9rem;
    line-height: 0.9rem;
    font-size: 0.3rem;
    color: #666;
    border-bottom: 1px solid #ddd;
    font-weight: normal;
}
.payDo .payWay li {
    height: 0.72rem;
    line-height: 0.72rem;
    border-bottom: 1px solid #eee;
    font-size: 0.25rem;
    color: #333;
}
.payDo .payWay li i {
    font-size: 0.25rem;
}
.payDo .payWay li .icon-squarecheck {
    color: #ff2772;
}
.payDo .payWay li .fr {
    color: #999;
    text-align: right;
}
.payDo .payWay li .fl {
    height: 0.72rem;
    overflow: hidden;
}
.payDo .paySub {
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
.payDo .paySub span b {
    font-weight: normal;
    color: #ff2772;
}
.payDo .payBtn {
    display: block;
    height: 100%;
    padding: 0 0.72rem;
    background: #ff2772;
    color: #fff;
    font-size: 0.3rem;
    float: right;
    margin-left: 0.3rem;
}
.payDo .dialog-pop .passInput input {
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

<div class="payDo">
    <headnav v-bind:title="pagetitle"></headnav>
    <div class="orderBox">
        <div class="orderNo">
            订单编号：<span>{{orderNo}}</span>
        </div>
        <div class="orderPrice">
            订单金额：<span>¥{{orderPayInfo.payCash}}+{{orderPayInfo.payVouchers}}优券</span>
        </div>
    </div>
    <div class="payWay">
        <h3>选择支付方式</h3>
        <ul>
            <li id="onlinePay" class="clearfix" @click="setPayWay(4)">
                <div class="fl">
                    <i class="iconfont" :class="[this.orderPayInfo.payWay==4?'icon-squarecheck':'icon-square']"></i>
                    余额支付
                </div>
                <div class="fr">余额：¥{{userAccount.amount}}</div>
            </li>
            <li id="aliPay" class="clearfix" v-if="this.navigatorType=='ali'" @click="setPayWay(1)">
                <div class="fl">
                    <i class="iconfont" :class="[this.orderPayInfo.payWay==1?'icon-squarecheck':'icon-square']"></i>
                    支付宝
                </div>
            </li>
            <li id="wxPay" class="clearfix" v-if="this.navigatorType=='wx'" @click="setPayWay(2)">
                <div class="fl">
                    <i class="iconfont" :class="[this.orderPayInfo.payWay==2?'icon-squarecheck':'icon-square']"></i>
                    微信支付
                </div>
            </li>
        </ul>
    </div>
    <dialogPop v-if="showPayPass" :dialog="dialog" v-on:dialogCancle="showPayPass=false" v-on:dialogConfirm="dialogConfirm"></dialogPop>
    <div class="paySub">
        <span>合计：<b>¥{{orderPayInfo.payCash}}+{{orderPayInfo.payVouchers}}优券</b></span>
        <a class="payBtn" @click="pay()">去支付</a>
    </div>
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
import headnav from '../common/header.vue'
import dialogPop from './../common/dialog-pop.vue'
const components = {
    headnav, dialogPop
}
export default {
    data() {
        return {
            pagetitle: "订单支付",
            rightIcon:{
                iconClass:'icon-icon'
            },
            orderNo:this.$route.params.orderNo,
            showPayPass:false,
            dialog:{
				txt:'请输入支付密码',
				cancle:'取消',
				ok:'确定',
				password:true,
                btn:true
			}
        }
    },
    components: components,
    computed:{
        ...mapGetters({
            navigatorType:'navigatorType',
            orderPayInfo:'orderPayInfo',
            userAccount:'userAccount'
        })
    },
    methods:{
        setPayWay:function(data){
            this.$store.dispatch('setPayWay',data);
        },
        pay:function(){
            //alert(1)
            let This = this;
            if(this.orderPayInfo.payWay==4){ //余额支付
                if(this.userAccount.amount<this.orderPayInfo.payCash){
                    alert('账户余额不足，请选择其他支付方式');
                }else{
                    if(this.userAccount.whetherWithPayPwd==1){
                        this.showPayPass = true;
                    }
                }
            }
            if(this.orderPayInfo.payWay==1){  //支付宝支付
                this.$store.dispatch('orderPay',{
                    delegateUserId:'',
                    payMode:2,
                    thirdPayType:this.orderPayInfo.payWay,
                    orderNo:this.orderNo,
                    payPasswd:'',
                    notifyUrl:'',
                    returnUrl:'http://vue.youdui.org:8080/#/userOrders'
                }).then(function(res){
                    const div = document.createElement('div');
                    div.innerHTML = res.payInfo;
                    document.body.appendChild(div);
                    document.forms.alipaysubmit.submit();
                },function(){});
            }
            if(this.orderPayInfo.payWay==2){ // 微信支付
                this.$store.dispatch('orderPay',{
                    delegateUserId:'',
                    payMode:2,
                    thirdPayType:this.orderPayInfo.payWay,
                    orderNo:this.orderNo,
                    payPasswd:'',
                    notifyUrl:'',
                    returnUrl:''
                }).then(function(res){
                    var module = JSON.parse(res.payInfo);
                    alert(module)
                    This.onBridgeReady(module.appId, module.timeStamp, module.nonceStr, module.packageStr, module.signType, module.paySign);
                },function(){});
            }
        },
        dialogCancle:function(){
            this.showPayPass = false;
        },
        dialogConfirm:function(res){
            let that = this;
            this.$store.dispatch('orderPay',{
                delegateUserId:'',
                payMode:1,
                thirdPayType:this.orderPayInfo.payWay,
                orderNo:this.orderNo,
                payPasswd:res,
                notifyUrl:'',
                returnUrl:''
            }).then(function(){
                that.$router.push('/userOrders');
            },function(){});
        },
        htmlspecialchars_decode:function(str) {
            str = str.replace(/&amp;/g, '&');
            str = str.replace(/&lt;/g, '<');
            str = str.replace(/&gt;/g, '>');
            str = str.replace(/&quot;/g, "\"");
            str = str.replace(/&#39;/g, "\'");
            return str;
        },
        onBridgeReady:function(appId, timeStamp, nonceStr, package1, signType, paySign) {
			WeixinJSBridge.invoke(
				'getBrandWCPayRequest', {
					"appId": appId, //公众号名称，由商户传入
					"timeStamp": timeStamp, //时间戳，自1970年以来的秒数
					"nonceStr": nonceStr, //随机串
					"package": package1,
					"signType": signType, //微信签名方式：
					"paySign": paySign //微信签名
				},
				function(res) {
					//if (res.err_msg == "get_brand_wcpay_request：ok" ) {}     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
					if(res.err_msg == "get_brand_wcpay_request:ok") {
						alert("微信支付成功!");
					} else if(res.err_msg == "get_brand_wcpay_request:cancel") {
						alert("用户取消支付!");
						history.go(-1);
					} else {
						alert(res.err_msg);
						alert("支付失败!");
						history.go(-1);
					}
				}
			)
		}
    },
    created(){
        let that = this;
        if(!this.userAccount.vouchers){
            this.$store.dispatch('getUserAccount').then(function(){
                that.$store.dispatch('getOrderPayInfo',{orderNo:that.orderNo,userCash:that.userAccount.amount,navg:that.navigatorType});
            },function(){});
        }else {
            this.$store.dispatch('getOrderPayInfo',{orderNo:this.orderNo,userCash:this.userAccount.amount,navg:that.navigatorType});
        }
    }
}

</script>
