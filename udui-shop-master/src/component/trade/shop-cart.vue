<style>
.shopCart {
	padding-bottom: 1.1rem;
}
.shopCart .shopList{
	margin-bottom: 0.18rem;
	border-bottom: 1px solid #ddd;
}
.shopCart .pname{
	height: 0.72rem;
	line-height: 0.72rem;
	background-color: #fff;
	padding: 0 0.18rem;
}
.shopCart .pname span{
	font-size: 0.25rem;
	padding-left: 0.18rem;
}
.shopCart .pro-list{
	width: 100%;
    overflow: hidden;
}
.shopCart .dis {
    margin-top: 0.18rem;
    border-top: 1px solid #ddd;
}
.shopCart .disIco {
    display: block;
    float: left;
    margin-top: 0.6rem;
    color: #fff;
    background: #999;
    border-radius: 3px;
    padding: 0 2px;
    font-size: 0.24rem;
    margin-left: -6px;
    margin-right: 3px;
}
.shopCart .disDel {
    display: block;
    width: 1.8rem;
    height: 0.54rem;
    text-align: center;
    line-height: 0.54rem;
    background: #999;
    border-radius: 0.06rem;
    margin: 0.18rem auto;
    color: #fff;
}
.shopCart .pro-list li{
	padding: 0.18rem;
	position: relative;
	margin-top:0.03rem ;
	background-color: #f7f7f7;
	height: 1.6rem;
}
.shopCart .pro-list li:first-child{
	margin-top: 0;
}
.shopCart .pro-list li img{
	display: block;
    width: 1.6rem;
    height: 1.6rem;
    float: left;
}
.shopCart .pro-list p{
	width: 4.8rem;
    float: left;
    margin-left: 0.18rem;
    font-size: 0.25rem;
    text-indent: 0.06rem;
    padding: 0.01rem 0;
}
.shopCart .pro-list .proName {
	overflow: hidden;
    font-size: 0.25rem;
    line-height: 1.5;
    color: #333;
    height: 0.72rem;
}
.shopCart .pro-list .proAttrName{
	margin-bottom: 0.3rem;
}
.shopCart .pro-list>i{
	font-style: normal;
	float: right;
	width: 0.72rem;
	height: 0.36rem;
	color: #999;
	font-size: 0.25rem;
}
.shopCart .pro-list .subName{
	color: #999;
	font-size: 0.25rem;
	height: 0.6rem;
	line-height: 1.2;
	overflow: hidden;
}
.shopCart .pro-list .proPrice{
	color: #ff2772;
	font-size: 0.25rem;
	height: 0.24rem;
	line-height: 0.24rem;
	width: 3.6rem;
	float: left;
}
.shopCart .pro-list .proPrice .quan{
	margin-left: 0.18rem;
	background-color: #ff7e42;
	color:#fff;
	padding: 0.03rem 0.09rem;
	border-radius: 0.061rem;
	font-size: 0.18rem;
}
.shopCart .pro-list .proPrice .sold{
	float: right;
	font-size: 0.25rem;
	color: #999;
}
.shopCart .pro-list .num{
	width: 0.9rem;
	float: right;
    text-align: right;
}
.shopCart .pro-list .more {
    height: 0.72rem;
    text-align: center;
    font-size: 0.25rem;
    color: #999;
}
.shopCart .check-btn{
	width: 0.32rem;
	height: 1.6rem;
    padding-right: 0.18rem;
	float: left;
	color: #000;
}
.shopCart .icon-round, .shopCart .icon-roundcheckfill {
    font-size: 0.32rem;
}
.shopCart .check-btn>i{
    line-height: 1.6rem;
}
.shopCart .icon-roundcheckfill{
	color: #ff2772 !important;
}
.shopCart .tot-con{
	width: 100%;
	height: 1rem;
	line-height: 1rem;
	position: fixed;
	bottom: 0;
	float: left;
	background-color: #fff;
	font-size: 0.25rem;
	color: #333;
	z-index: 5;
}
.shopCart .tot-con .checkall {
	color: #000;
}

.shopCart .tot-con .checkall i{
	padding: 0 0.18rem;
}
.shopCart .tot-con .tot{
	float: right;
	height: 0.84rem;
    padding: 0.12rem;
}
.shopCart .tot-con .tot p{
	height: 0.42rem;
	line-height: 0.42rem;
	text-align: right;
	padding-right: 0.18rem;
}
.shopCart .tot-con .tot .yunf{
	color: #666;
}
.shopCart .tot-con .tot span{
	color: #FF2772;
}
.shopCart .tot-con .cartSub, .tot-con .cartDel{
	float: right;
	width: 2rem;
	background-color: #FF2772;
	color: #fff;
	text-align: center;
	font-size: 0.3rem;
}
.shopCart .edit p{
	padding-top: 0.15rem;
}
.shopCart .edit .limt{
	color: #FF833E;
}
.shopCart .edit .sx{
	color: #999;
}
.shopCart .fr{
	width: 4.8rem;
	height: 0.54rem;
	border: 1px solid #ddd;
}
.shopCart .fr a {
    display: block;
    width: 0.6rem;
    height: 0.54rem;
    float: left;
    text-align: center;
    line-height: 0.54rem;
    background: #eee;
}
.shopCart .fr input {
    display: block;
    float: left;
    width:3.6rem;
    height: 0.54rem;
    text-align: center;
    line-height: 0.54rem;
    background: #eee;
    border: none;
    color: #000;
    font-size: 0.32rem;
}
.shopCart .icon-add{
	font-size: 0.18rem;
	color: #FF2772;
}
.shopCart .popbg{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 4;
    background: rgba(0,0,0,0.5);
    left: 0;
    top: 0;
    display: none;
}
.shopCart .editnum{
	width: 4.9rem;
	height: 2.73rem;
	background-color: #f9f9f9;
	border-radius: 0.18rem;
	position: fixed;
    left: 1.27rem;
    top:3.6rem;
    z-index: 10;
    display: none;
}
.shopCart .editnum p{
	height: 0.9rem;
	line-height: 0.9rem;
	text-align: center;
	font-size: 0.3rem;
}
.shopCart .editnum .fr{
	width: 3.6rem;
	height: 0.55rem;
	border: 1px solid #ddd;
	margin-right: 0.66rem;
}
.shopCart .editnum .fr a {
    display: block;
    width: 0.6rem;
    height: 0.54rem;
    float: left;
    text-align: center;
    line-height: 0.54rem;
    background: #eee;
}
.shopCart .editnum .fr input {
    display: block;
    float: left;
    width:2.4rem;
    height: 0.54rem;
    text-align: center;
    line-height: 0.54rem;
    background: #eee;
    border: none;
    color: #000;
    font-size: 0.32rem;
}
.shopCart .editnum .btn{
	position: absolute;
	height: 0.82rem;
	line-height: 0.82rem;
	bottom: 0;
	border-top: 1px solid #ddd;
	width: 100%;
}
.shopCart .editnum .btn a{
	display: block;
	width: 2.4rem;
	text-align: center;
	float: left;
	font-size: 0.3rem;
}
.shopCart .editnum .btn .no{
	border-right: 1px solid #ddd;
	color: #999;
}
.shopCart .editnum .btn .ok{
	color: #FF2772;
}

.shopCart .nopros img{
	width:3.12rem;
	height:3.9rem;
	display: block;
	margin: 0.9rem auto 0;
}
.shopCart .nopros p{
	text-align: center;
	padding: 0.3rem 0 0.72rem;
	font-size: 0.25rem;
}
.shopCart .nopros a{
	position: fixed;
    display: block;
    width: 2.16rem;
    height: 0.72rem;
    background-color: #ff2772;
    text-align: center;
    line-height: 0.72rem;
    color: #fff;
    border-radius: 0.09rem;
    margin-left:2.64rem;
    font-size: 0.32rem;
}

.shopCart .numberCount {
    width: 3.6rem;
    background:#eee;
    border: 1px solid #ddd;
    color: #000;
}
.shopCart .numberCount a{
    display: block;
    width: 0.6rem;
    height: 0.6rem;
    float: left;
    text-align: center;
    line-height: 0.6rem;
    font-size: 0.3rem !important;
    background: none;
}
.shopCart .numberCount input[type=number]{
    display: block;
    width: 2.4rem;
    height: 0.6rem;
    float: left;
    text-align: center;
    line-height: 0.6rem;
    font-size: 0.3rem;
    background: none;
}
.qcdBox {
    background: #fff;
    overflow: hidden;
    padding-left: 0.6rem;
    padding-right: .24rem;
    height: .6rem;
    line-height: .6rem;
}
.qcdBox p {
    float: left;
    color: #888;
}
.qcdBox a {
    float: right;
    color: #FF2772;
}
</style>

<template>

<div class="shopCart">
    <headnav v-bind:title="pagetitle" :rightIcon="rightIcon" v-on:rIconEvent="rIconEvent"></headnav>
    <div v-if="userInfo.isLogin && !isEmpty" class="proList">
        <div class="list-content">
            <div class="shopList" v-if="shopCart.cartBySellerList!=null" v-for="(shop,sIndex) in shopCart.cartBySellerList">
                <p class="pname">
                    <a class="check-all" @click="selectShop(sIndex)">
                        <i class="iconfont" :class="[shop.buyShopSelectAll?'icon-roundcheckfill':'icon-round']"></i>
                    </a>
                    <span>{{shop.sellerName}}</span>
                </p>
                <ul class="pro-list prs">
                    <li class="clearfix" v-for="(pro,pIndex) in shop.shoppingCartDtoList">
                        <a class="check-btn" @click="selectPro(sIndex,pIndex)">
                            <i class="iconfont" :class="[pro.buyProSelect?'icon-roundcheckfill':'icon-round']"></i>
                        </a>
                        <router-link :to="'/goodsDetail/pro/'+pro.productId">
                            <img :src="pro.productImg">
                        </router-link>
                        <div class="clearfix proInfo" v-if="rightIcon.state==0">
                            <p class="proName">{{pro.productName}}</p>
							<p class="proAttrName">{{pro.productSpecName}}</p>
                            <p class="proPrice">
                                &yen;<em class="singleP">{{pro.sellerPrice+pro.vouchers}}</em>
                                <span class="quan">可抵用<em class="singleV">{{pro.vouchers}}</em>优券</span>
                            </p>
                            <p class="num">x{{pro.productCount}}</p>
                        </div>
                        <div class="edit" v-if="rightIcon.state==1">
                            <div class="fr" @click="showEditDialog(pro.id,1,pro.stock,pro.productCount)">
								<a class="minus"><i class="iconfont icon-move"></i></a>
                                <input type="number" class="numInput" :value="pro.productCount" readonly="readonly">
                                <a class="plus"><i class="iconfont icon-add"></i></a>
                            </div>
							<p @click="showSelectAttrPop(pro)" v-show="pro.productSpecName!==''" class="proAttrName">{{pro.productSpecName}}</p>
                        </div>
                    </li>
                </ul>
				<div class="qcdBox" v-if="shop.qcdBoxActive"><p>购物满99元包邮，还差<span>{{shop.qcdBoxPrice}}.00</span>元</p><a href="http://wx.youdui.org/app/subject/general.html?id=cd">去凑单&gt;</a></div>
            </div>
        </div>
        <div class="list-content" id="fails" v-if="shopCart.failureProductList.length>0">
			<a class="disDel" @click="delInvalidCarts()">清除失效商品</a>
            <ul class="pro-list dis">
                <li class="clearfix" v-for="pro in shopCart.failureProductList">
					<a><em class="disIco">失效</em></a>
					<router-link :to="'/goodsDetail/pro/'+pro.productId">
						<img src="pro.productImg"/>
                    </router-link>
					<div class="clearfix proInfo">
						<p class="proName">{{pro.productName}}</p>
						<p class="subName">商品已失效</p>
					</div>
				</li>
			</ul>
        </div>
        <div class="tot-con">
            <a class="checkall" @click="selectAll()">
                <i class="iconfont" :class="[shopCart.cartSelectAll?'icon-roundcheckfill':'icon-round']"></i>
                全选
            </a>
            <a class="cartDel" v-if="rightIcon.state==1" @click="cartDel()">删除</a>
            <a class="cartSub" v-if="rightIcon.state==0" @click="cartConfirm()">结算</a>
            <div class="tot clearfix"  v-if="rightIcon.state==0">
                <p>合计：<span class="price">{{priceCalcu}}</span></p>
                <p class="yunf">不含运费</p>
            </div>
        </div>
		<dialogPop v-if="showDialog" :dialog="dialog" v-on:dialogCancle="dialogCancle" v-on:dialogConfirm="dialogConfirm"></dialogPop>
    </div>
	<div v-else-if="isEmpty">
		<div class="nopros">
        	<img src="./../../assets/images/user/gwc.png">
        	<p>空空如也</p>
        	<router-link to="/index">去商城逛逛</router-link>
        </div>
        <!-- <footMenu></footMenu> -->
	</div>
    <div v-else>
        <div class="nopros">
        	<img src="./../../assets/images/user/gwc.png">
        	<p>您还未登录</p>
        	<router-link to="/login">点我登录</router-link>
        </div>
        <!-- <footMenu></footMenu> -->
    </div>
	<selectProAttr v-bind:proData="proInfo" v-bind:type="'shopCar'" v-if="selectProAttrActive" v-on:hide="selectProAttrActive=false"></selectProAttr>
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
import headnav 			from './../common/header.vue'
import footMenu 		from './../common/footmenu.vue'
import selectProAttr 	from './../common/select-pro-attr.vue'
import dialogPop 		from './../common/dialog-pop.vue'
const components = {
    headnav, footMenu, selectProAttr, dialogPop
}
export default {
    data() {
        return {
            pagetitle: "购物车",
            allSelect:false,
			rightIcon:{
				txt:'编辑',
				state:0
			},
			showDialog:false,
			dialog:{
				txt:'修改商品数量',
				cancle:'取消',
				ok:'确定',
				type:'shopCart',
				proId:0,
				numCount:true,
				btn:true,
				proNumMin:1,
				proNumMax:100,
				proNumCur:1
			},
			selectProAttrActive : false,
			proInfo : null,
			eventCode : 'H005',
			clearEventCode : true,
			linkId : null
        }
    },
    computed:{
        ...mapGetters({
            shopCart:'getShopCart',
            userInfo:'userInfo',
			order:'order'
        }),
		isEmpty:function(){
			if(this.shopCart==null){
				return true;
			}else {
				return false;
			}
		},
		priceCalcu:function(){
			let totalStr='';
			let cartShops = this.shopCart.cartBySellerList||[];
			let cash=0,voucher=0,total=0;
			for(let i=0;i<cartShops.length;i++){
				let cartpros = cartShops[i].shoppingCartDtoList;
				for(let j=0;j<cartpros.length;j++){
					if(cartpros[j].buyProSelect){
						cash+=cartpros[j].sellerPrice*cartpros[j].productCount;
						voucher+=cartpros[j].vouchers*cartpros[j].productCount;
					}
				}
			}
			total = (cash+voucher).toFixed(2);
			totalStr = '￥'+cash.toFixed(2)+'+'+Math.floor(voucher)+'优券';
			return totalStr;
		}
    },
    components: components,
    methods: {
		delInvalidCarts:function(){
			this.$store.dispatch('delInvalidCarts',{
				carIds:this.shopCart.failIds
			});
		},
		rIconEvent:function(){
			switch (this.rightIcon.state){
				case 0:
					this.rightIcon.state = 1;
					this.rightIcon.txt = '完成';
					break;
				case 1:
					this.rightIcon.state = 0;
					this.rightIcon.txt = '编辑';
					break;
			}
		},
        selectPro:function(sIndex,pIndex){
			let oIndex = {
				si:sIndex,
				pi:pIndex
			}
			this.$store.dispatch('selectPro',oIndex);
        },
		selectShop:function(sIndex){
			this.$store.dispatch('selectShop',sIndex);
		},
		selectAll:function(){
			this.$store.dispatch('selectAll');
		},
		showEditDialog:function(id,min,max,now){
			this.showDialog = true;
			this.dialog.proId = id;
			this.dialog.proNumCur = now;
			this.dialog.proNumMax = max;
			this.dialog.proNumMin = min;
		},
		dialogCancle:function(){
			this.showDialog = false;
		},
		dialogConfirm:function(num){
			let that = this;
			this.$store.dispatch('editCartNum',{
				cartId:this.dialog.proId,
				count:{count:num}
			}).then(function(){
				that.showDialog = false;
			},function(errmsg){
				that.showDialog = false;
				alert(errmsg);
			});
		},
		cartDel:function(){
			let selIds = [];
			let carts = this.shopCart.cartBySellerList||[];
			for(let i=0;i<carts.length;i++){
				let pros = carts[i].shoppingCartDtoList;
				for(let j=0;j<pros.length;j++){
					if(pros[j].buyProSelect){
						selIds.push(pros[j].id);
					}
				}
			}
			this.$store.dispatch('cartDel',{
				carIds:selIds
			});
		},
		cartConfirm:function(){
			let carts = this.shopCart.cartBySellerList||[];
			let selected = false;
			let cartSelected = JSON.parse(JSON.stringify(carts));
			for(let i=0;i<cartSelected.length;i++){
				if(!cartSelected[i].buyShopSelect){
					cartSelected.splice(i,1);
					i=i-1;
				}else {
					let proSelected = cartSelected[i].shoppingCartDtoList;
					for(let j=0;j<proSelected.length;j++){
						if(!proSelected[j].buyProSelect){
							proSelected.splice(j,1);
							j=j-1;
						}
					}
				}
			}
			if(cartSelected.length>0){
				let that = this;
				this.$store.dispatch('cartCommit',cartSelected);
				that.$router.push('/orderConfirm/shopCar');
			}else {
				alert('please choose an item');
			}
		},
		showSelectAttrPop : function(data){
			this.proInfo = {product:data};
			this.selectProAttrActive = true;
		}
    },
    created() {
		if(this.$route.params.mdType == 'footBar'){
			this.eventCode = 'H005';
			this.clearEventCode = true;
		}else if(this.$route.params.mdType == 'goodsDetail'){
			this.eventCode = 'T001';
			this.clearEventCode = false;
		}
		this.$store.dispatch('tjTrack',{eventCode:this.eventCode,clearEventCode:this.clearEventCode,linkId : this.linkId}).then(function(){

		},function(){

		})
        if(this.userInfo.isLogin){
            this.$store.dispatch('getShopCart');
        }else {
			console.log(this.userInfo.isLogin);
        }
    }
}

</script>
