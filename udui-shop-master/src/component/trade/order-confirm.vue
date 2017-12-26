<style>
.uAddr {
    padding: 0.18rem;
    background: #fff;
}
.uAddr .fl {
    width: 6rem;
}
.uAddr .fr {
    width: 0.96rem;
    height: 1rem;
    line-height: 1rem;
    text-align: right;
}
.uAddr .user {
    height: 0.6rem;
    line-height: 0.6rem;
    padding-left: 0.36rem;
    font-size: 0.25rem;
    color: #333;
}
.uAddr .uTel {
    margin-left: 0.3rem;
}
.uAddr .addr {
    height: 0.42rem;
    line-height: 0.42rem;
    color: #666;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.uAddr .iconfont {
    font-size: 0.3rem;
}
.orderList {
    margin-top: 0.18rem;
}
.orderList .shopName {
    padding: 0.18rem;
    font-size: 0.25rem;
    color: #333;
    background: #fff;
}
.orderList h3 {
    padding: 0 0.18rem;
    height: 0.9rem;
    line-height: 0.9rem;
    font-size: 0.3rem;
    color: #666;
}
.orderList .pro {
    padding: 0.18rem;
    background: #fafafa;
    border-bottom: 1px solid #ddd;
    position: relative;
}
.orderList .proImg {
    float: left;
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 0.18rem;
}
.orderList .proPrice {
    margin-top: 0.48rem;
    font-size: 0.25rem;
    color: #ff2772;
}
.orderList .proPrice span {
    color: #333;
}
.orderList .proName {
    font-size: 0.25rem;
    line-height: 1.5;
    height: 0.75rem;
    color: #333;
}
.orderList .totalPrice {
    height: 0.72rem;
    line-height: 0.72rem;
    padding: 0 0.18rem;
}
.orderList .numberCount {
    height: 0.54rem;
    line-height: 0.54rem;
    position: absolute;
    right: 0.18rem;
    bottom: 0.18rem;
}
.orderList .numberCount a {
    display: block;
    width: 0.6rem;
    height: 0.54rem;
    float: left;
    text-align: center;
    line-height: 0.54rem;
    background: #fafafa;
    border: 1px solid #999;
}
.orderList .numberCount a i {
    font-size: 0.24rem;
    color: #000;
}
.orderList .numberCount input {
    display: block;
    float: left;
    width: 0.66rem;
    height: 0.54rem;
    text-align: center;
    line-height: 0.54rem;
    background: #fafafa;
    color: #000;
    font-size: 0.32rem;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
}
.orderList .totalPrice {
    text-align: right;
    font-size: 0.25rem;
}
.orderList .totalPrice span {
    margin-left: 0.18rem;
}
.totalMoney b {
    font-weight: normal;
    color: #ff2772;
}
.useCupon {
    background: #fff;
}
.useIf {
    padding: 0 0.18rem;
    height: 0.72rem;
    line-height: 0.72rem;
    border-bottom: 1px solid #eee;
    position: relative;
    font-size: 0.3rem;
}
.useIf span {
    color: #ff7e42;
}
.useIf small {
    font-size: 0.25rem;
    color: #999;
}
.useIf .switchBtn {
    position: absolute;
    width: 1.2rem;
    height: 0.6rem;
    border-radius: 0.3rem;
    top:0.06rem;
    right: 0.18rem;
    box-shadow: 0 0 3px #ccc inset;
}
.useIf .switchBtn i {
    display: block;
    width: 0.54rem;
    height: 0.54rem;
    border-radius: 0.27rem;
    position: absolute;
    left: 0.03rem;
    top:0.03rem;
    box-shadow: 0 0 3px #ccc;
    background: #fff;
}
.useIf .switchBtn.open {
    background: #53d769;
}
.useIf .switchBtn.open i {
    left: initial;
    right: 0.03rem;
}
.giveIf {
    padding: 0 0.18rem;
    height: 0.72rem;
    line-height: 0.72rem;
    font-size: 0.3rem;
    color: #666;
    border-bottom: 1px solid #eee;
}
.orderInfo .giveVor {
    margin-top: 0.18rem;
    padding: 0 0.18rem;
    background: #fff;
    height: 0.72rem;
    line-height: 0.72rem;
    font-size: 0.3rem;
    color: #ff7e42;
}
.orderInfo .delFee {
    padding: 0.18rem;
    border-bottom: 1px solid #eee;
    color: #666;
}
.orderInfo{
    margin-bottom: 0.18rem;
    background-color: #fff;
}
.orderInfo .buyerMsg {
    padding: 0.18rem;
    border-bottom: 1px solid #eee;
}
.orderInfo .buyerMsg label, .orderInfo .buyerMsg input {
    display: block;
    float: left;
    height: 0.36rem;
    line-height: 0.36rem;
}
.orderInfo .buyerMsg label {
    width: 1.44rem;
    color: #666;
}
.orderInfo .buyerMsg input {
    width: 5.4rem;
    font-size: 0.24rem;
}
.confirmSub {
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
.confirmSub span b {
    font-weight: normal;
    color: #ff2772;
}
.confirmBtn {
    display: block;
    height: 100%;
    padding: 0 0.72rem;
    background: #ff2772;
    color: #fff;
    font-size: 0.3rem;
    float: right;
    margin-left: 0.3rem;
}
.imgCodePop {
    width: 4rem;
    position: fixed;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 0.18rem;
    padding: 0.3rem 0.6rem;
    z-index: 1001;
    left: 50%;
    top:50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    overflow: hidden;
}
.imgCodePop h3 {
    font-size: 0.36rem;
    font-weight: normal;
    text-align: center;
    margin-bottom: 0.2rem;
}
.imgCodePop .fl, .imgCodePop .fr {
    width: 45%;
    height: 0.6rem;
    line-height: 0.6rem;
    border: 1px solid #ddd;
}
.imgCodePop .fl input {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    text-align: center;
}
.imgCodePop .fr img {
    display: block;
    width: 100%;
    height: 100%;
}
.areaLimit {
    width: 5.4rem;
    position: fixed;
    background: #fff;
    border-radius: 0.18rem;
    z-index: 1001;
    left: 50%;
    top:50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    overflow: hidden;
}
.areaLimit h3 {
    padding: 0 0.3rem;
    text-align: center;
    height: 0.9rem;
    line-height: 0.9rem;
    font-size: 0.36rem;
    color: #000;
    border-bottom: 1px solid #ddd;
    font-weight: normal;
}
.areaLimit li {
    padding: 0.2rem;
    border-bottom: 1px solid #ddd;
}
.areaLimit li .fl {
    width: 1.5rem;
}
.areaLimit li .fr {
    width: 3.2rem;
}
.areaLimit li .limitProImg {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
}
.areaLimit li .limitProName {
    font-size: 0.3rem;
    line-height: 1.5;
    height: 0.9rem;
    overflow: hidden;
}
.areaLimit li .limitProNum {
    margin-top: 0.18rem;
    color: #999;
}
.areaLimit .limitProEdit, .areaLimit .limitProDel {
    float: left;
    display: block;
    width: 2.7rem;
    height: 0.9rem;
    line-height: 0.9rem;
    text-align: center;
    color: #fff;
    font-size: 0.3rem;
}
.areaLimit .limitProEdit {
    background: #ff2772;
}
.areaLimit .limitProDel {
    background: #ff823f;
}
</style>

<template>
<div style="padding:0 0 0.8rem 0">
    <headnav v-bind:title="pagetitle" :rightIcon="rightIcon"></headnav>
    <div class="uAddr clearfix">
        <router-link to="/user/userAddress">
            <div class="fl">
        		<div class="user">
        			<span class="un">{{userInfo.selectAddress.receiver}}</span>
        			<span class="uTel">{{userInfo.selectAddress.mobile}}</span>
        		</div>
        		<div class="addr">
        			<i class="iconfont icon-location"></i>
        			<span>{{userInfo.selectAddress.address}}</span>
        		</div>
        	</div>
        	<div class="fr"><i class="iconfont icon-right"></i></div>
        </router-link>
    </div>
    <div class="orderList">
		<div class="orderInfo" v-for="(orderShop,sIndex) in order">
            <div class="shopName">{{orderShop.sellerName}}</div>
            <div class="proInfo" v-for="(orderPro,pIndex) in orderShop.shoppingCartDtoList">
                <div class="pro clearfix">
                    <div class="proImg">
                        <img :src="orderPro.productImg">
                    </div>
                    <div class="proName">{{orderPro.productName}}</div>
                    <div class="proPrice clearfix">¥{{orderPro.sellerPrice+orderPro.vouchers}}<span class="fr">x{{orderPro.productCount}}</span></div>
                    <!-- <numCount :number="{min:1,now:orderPro.productCount,max:orderPro.inventory,options:{sIndex:sIndex,pIndex:pIndex}}" v-on:numChange="changeNum"></numCount> -->
                </div>
            </div>
            <div class="useCupon">
                <div class="useIf">
                    <span>优券抵扣¥{{orderShop.usedUq}}</span>
                    <small>（最多可抵扣{{orderShop.totalVouchers}}优券）</small>
                    <div class="switchBtn" :class="[orderShop.useUqActive?'open':'closed']" @click="useUqSwicth(sIndex)"><i></i></div>
                </div>
                <div v-if="orderShop.useUqActive" class="giveIf">赠送0优券</div>
                <div v-else class="giveIf">赠送{{Math.floor(orderShop.total)}}优券</div>
            </div>
            <div class="qcdBox" v-if="orderShop.qcdBoxActive"><p>购物满99元包邮，还差<span>{{orderShop.qcdBoxPrice}}.00</span>元</p><a href="http://wx.youdui.org/app/subject/general.html?id=cd">去凑单&gt;</a></div>
            <div class="delFee clearfix">
                <span class="fl">运费</span>
                <span class="fr">{{orderShop.freight}}元</span>
            </div>
            <div class="buyerMsg clearfix">
                <label for="msg">买家留言：</label>
                <input type="text" placeholder="可填写与商家达成一致的内容" v-model="message">
            </div>
            <div class="totalPrice">
                <span class="totalNum">共 {{orderShop.totalCount}} 件商品</span>
                <span class="totalMoney">合计：<b>¥{{(orderShop.total-orderShop.usedUq).toFixed(2)}}+{{orderShop.usedUq}}优券(不含运费)</b></span>
            </div>
        </div>
    </div>
    <div class="confirmSub">
		<span>合计：<b>{{orderPrice}}</b></span>
		<a class="confirmBtn" @click="firOrderSub()">确认</a>
	</div>
    <div class="areaLimit" v-if="showAreaLimit">
        <h3>该地区以下商品无货</h3>
        <ul>
            <li class="clearfix" v-for="pro in limitPro">
                <div class="fl">
                    <img :src="pro.productImg" class="limitProImg" />
                </div>
                <div class="fr">
                    <p class="limitProName">{{pro.productName}}</p>
                    <p class="limitProNum">(剩余库存{{pro.remainNum}}件)</p>
                </div>
            </li>
        </ul>
        <div class="clearfix">
            <router-link class="limitProEdit" to="/user/userAddress">修改收货地址</router-link>
            <!-- <a class="limitProEdit" @click="editLimit()">修改收货地址</a> -->
            <a class="limitProDel" @click="deleteLimit()">去除无货商品</a>
        </div>
    </div>
    <div class="imgCodePop" v-if="imgCode.check">
        <h3>请输入图片验证码</h3>
        <div class="clearfix">
            <div class="fl">
                <input type="text" value="">
            </div>
            <div class="fr">
                <img src="" />
            </div>
        </div>
        <div class="imgCodeBtn" @click="secOrderSub()">{{imgCode.codeVal}}</div>
    </div>
    <layer v-if="imgCode.check||showAreaLimit"></layer>
</div>
</template>

<script>
import {
    mapGetters
}
from 'vuex'
import headnav from './../common/header.vue'
import dialogPop from './../common/dialog-pop.vue'
import numCount from './../common/num-count.vue'
import layer from './../common/layer.vue'
const components = {
    headnav, dialogPop, numCount,layer
}
export default {
    data(){
        return {
            pagetitle:'订单确认',
            rightIcon:{
                iconClass:'icon-icon'
            },
            message:'',
            freightOk:false,
            limitOk:false,
            eventCode : 'T002',
            clearEventCode : false,
            linkId : null
        }
    },
    computed:{
        ...mapGetters({
            userInfo:'userInfo',
            userAccount:'userAccount',
            order:'order',
            limitPro:'orderLimitPro',
            imgCode:'imgCode'
        }),
        orderPrice:function(){
            let total=0,totalUsedCash=0,totalUsedUq=0;
            for(let i=0;i<this.order.length;i++){
                total+=this.order[i].total;
                totalUsedUq += this.order[i].usedUq;
            }
            totalUsedCash=(total-totalUsedUq).toFixed(2);
            return '¥'+totalUsedCash+'+'+totalUsedUq+'优券';
        },
        showAreaLimit:function(){
            return this.limitPro.length>0;
        }
    },
    methods:{
        // changeNum:function(e){
        //     let that = this;
        //     let curNum = e[0];
        //     let curIndex = e[1];
        //     this.$store.dispatch('orderChangeNum',e).then(function(){
        //         that.getCartFreight();
        //     });
        // },
        useUqSwicth:function(i){
            this.order[i].useUqActive = !this.order[i].useUqActive;
            this.$store.dispatch('swicthUseUq',this.userAccount);
        },
        getCartFreight:function(){    //获取运费信息
            let that = this;
            let freightData = {
                receiverAddressId: this.userInfo.selectAddress.id,
                shopOrderDetailList: [],
                invoiceType:0,
                invoiceTitle:''
            };
            for(let i=0;i<this.order.length;i++){
                let shop = {
                    shopId: this.order[i].sellerId,
                    vouchers: this.order[i].usedUq,
                    buyerMessage: '',
                    orderProductDTOList: []
                }
                let shopPro = this.order[i].shoppingCartDtoList;
                for(let j=0;j<shopPro.length;j++){
                    let pro = {
                        shoppingCartId: shopPro[j].id,
                        productId: shopPro[j].productId,
                        skuId: shopPro[j].productSpecId,
                        productCount: shopPro[j].productCount,
                        activityId: shopPro[j].activityId,
                        envId: shopPro[j].envId
                    }
                    shop.orderProductDTOList.push(pro);
                }
                freightData.shopOrderDetailList.push(shop);
            }
            this.$store.dispatch('getCartFreight',JSON.stringify(freightData)).then(function(){
                that.freightOk = true;
            });
        },
        checkProductAreaLimit:function(){
            let that = this;
            let data = {
                userId: this.userInfo.userId,
                userAddressId: this.userInfo.selectAddress.id,
                prodctList: []
            };
            let shop = this.order;
            for(let i=0;i<shop.length;i++){
                let pro = shop[i].shoppingCartDtoList;
                for(let j=0;j<pro.length;j++){
                    let product = {
                        num: pro[j].productCount,
                        skuId: pro[j].productSpecId,
                        productId: pro[j].productId
                    };
                    data.prodctList.push(product);
                }
            }
            this.$store.dispatch('checkProductAreaLimit',JSON.stringify(data)).then(function(){
                that.limitOk = true;
            });
        },
        editLimit:function(){
            this.showAreaLimit = false;
        },
        deleteLimit:function(){
            let limitPro = this.limitPro;
            let limitProIds = [];
            let that = this;
            for(let i=0;i<limitPro.length;i++){
                limitProIds.push(limitPro[i].id);
            }
            this.$store.dispatch('deleteLimitPro',{
				carIds:limitProIds
			}).then(function(){
                if(that.order.length==0){
                    that.$router.go(-1);
                }
            });
        },
        firOrderSub:function(){
            let that = this;
            let type = this.$route.params.type;
            if (type == 'shopCar') { //购物车
                this.$store.dispatch('orderImgCodeCheck').then(function(){
                    if(that.imgCode.check){
                        that.$store.dispatch('getImgCode');
                    }else{
                        that.orderConfirm();
                    }
                },function(res){
                    alert(res);
                })
            }
            if (type == 'spro') { //立即购买
                let obj = {
                    "receiverAddressId": this.userInfo.selectAddress.id,
                    "receiverMobile": 0,
                    "imgCode": this.imgCode.codeVal,
                    "shopOrderDetailList": [
                    {
                        "shopId": this.order[0].sellerId,
                        "vouchers": this.order[0].usedUq,
                        "buyerMessage": "",
                        "orderProductDTOList": [
                            {
                                "shoppingCartId": 0,
                                "productId": this.order[0].shoppingCartDtoList[0].productId,
                                "skuId": this.order[0].shoppingCartDtoList[0].productSpecId,
                                "productCount": this.order[0].shoppingCartDtoList[0].productCount,
                                "activityId": this.order[0].shoppingCartDtoList[0].activityId
                            }
                        ]
                    }
                    ],
                    "terminalType": ""
                }
                this.$store.dispatch('createOrders',JSON.stringify(obj)).then(function(res){
                    that.$router.push('/payDo/'+res.uduiOrderNo);
                },function(res){
                    alert(res)
                })
            }
            if(type == 'rd'){
                var obj = {
                    "receiverAddressId": this.userInfo.selectAddress.id,
                    "receiverMobile": "",
                    "imgCode": this.imgCode.codeVal,
                    "shopOrderDetailList": [
                        {
                            "shopId": this.order[0].sellerId,
                            "vouchers": this.order[0].usedUq,
                            "buyerMessage": "",
                            "orderProductDTOList": [
                                {
                                    "shoppingCartId": 0,
                                    "productId": this.order[0].shoppingCartDtoList[0].productId,
                                    "skuId": this.order[0].shoppingCartDtoList[0].productSpecId,
                                    "productCount": this.order[0].shoppingCartDtoList[0].productCount,
                                    "activityId": this.order[0].shoppingCartDtoList[0].activityId,
                                    "envId": this.order[0].shoppingCartDtoList[0].envId
                                }
                            ],
                            "invoiceType": 0,
                            "invoiceTitle": ""
                        }
                    ],
                    "createIp": "",
                    "terminalType": ""
                }
                this.$store.dispatch('createOrders',JSON.stringify(obj)).then(function(res){
                    that.$router.push('/payDo/'+res.uduiOrderNo);
                },function(res){
                    alert(res)
                })
            }
        },
        secOrderSub:function(){
            this.orderConfirm();
        },
        orderConfirm:function(){
            if(this.freightOk&&this.limitOk){
                let that = this;
                let data = {
                    receiverAddressId: this.userInfo.selectAddress.id,
                    receiverMobile: 0,
                    imgCode: this.imgCode.codeVal,
                    shopOrderDetailList: []
                };
                let order = this.order;
                for(let i=0;i<order.length;i++){
                    let dataShop = {
                        shopId: order[i].sellerId,
                        vouchers: order[i].usedUq,
                        buyerMessage: this.message,
                        orderProductDTOList: []
                    }
                    let pro = order[i].shoppingCartDtoList;
                    for(let j=0;j<pro.length;j++){
                        let dataPro = {
                            shoppingCartId: pro[j].id,
                            productId: pro[j].productId,
                            skuId: pro[j].productSpecId,
                            productCount: pro[j].productCount,
                            activityId:pro[j].activityId
                        }
                        dataShop.orderProductDTOList.push(dataPro);
                    }
                    data.shopOrderDetailList.push(dataShop);
                }
                this.$store.dispatch('orderConfirm',JSON.stringify(data)).then(function(res){
                    that.$router.push('/payDo/'+res.uduiOrderNo);
                },function(res){
                    alert(res);
                });
            }
        }
    },
    components:components,
    created(){
        this.$store.dispatch('tjTrack',{eventCode:this.eventCode,clearEventCode:this.clearEventCode,linkId : this.linkId}).then(function(){

        },function(){

        })
        let that = this;
        this.$store.dispatch('getUserAccount').then(function(){
            that.$store.dispatch('loadOrders',that.userAccount).then(function(){
                that.getCartFreight();
                that.checkProductAreaLimit();
            },function(res){
                alert(res);
            });
        },function(res){
            alert(res);
        });
    }
}
</script>
