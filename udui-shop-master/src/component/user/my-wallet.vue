<style>
.my-wallet-box {}
.daedline-tip{
	display: none;
	height: 0.72rem;
	line-height: 0.72rem;
	text-align: center;
	background-color: #fff;
	color: #ff7e42;
	border-bottom:1px solid #e6e6e6;
	font-size: 0.25rem;
}
.accountCash{
	margin-top: 0.18rem;
	line-height: 1.3rem;
	background-color: #fff;
	border-top:1px solid #e6e6e6;
	padding: 0 0.18rem;
}
.cashLeft {
	height: 1.3rem;
    color: #ff2772;
    font-size: 0.3rem;
    border-bottom:1px solid #e6e6e6;
}
.cashLeft span,.ticket span{
	float: left;
}
.cashLeft .price,.ticket .price{
	font-size: 0.72rem;
	padding-left: 0.18rem;
}
.cashLeft .price b{
	font-weight: normal;
}
.cgAndDep {
    padding: 0.36rem 0;
}
.cgAndDep .deposit {
    background: #ff7f42;
}
.accountVor{
	border-top:1px solid #e6e6e6;
	border-bottom:1px solid #e6e6e6;
	margin-top: 0.18rem;
	padding: 0 0.18rem;
	color: #ff7e42;
	background-color: #FFFFFF;
	font-size: 0.3rem;
    line-height: 1.3rem;
}
.ticket {
	height: 1.3rem;
	border-bottom:1px solid #e6e6e6;
}
.accountVor {
    padding: 0 0.18rem;
}
.vorCg {
    padding: 0.36rem 0;
}
.accountCash a,.accountVor a {
    float: left;
    display: block;
    width: 1.8rem;
    height: 0.72rem;
    line-height: 0.72rem;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #fb0081;
    color: #fff;
    border-radius: 3px;
    margin-right: 0.36rem;
}
.accountVor .deposit {
	background: #fff;
	color:blue;
}
.paySet {
    margin: 0.18rem 0 0;
    background: #fff;
    padding: 0 0.18rem;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
}
.myBank {
    height: 0.9rem;
    line-height: 0.9rem;
    border-bottom: 1px solid #ddd;
}
.payPass {
    height: 0.9rem;
    line-height: 0.9rem;
    border-bottom: 1px solid #ddd;
}
.GetpayPass{
	height: 0.9rem;
    line-height: 0.9rem;
}
.paySet a {
    display: block;
}
.paySet span {
    font-size: 0.25rem;
}
.paySet i {
    float: right;
    font-size: 0.25rem;
    color: #999;
}
.my-wallet-box .warning{
    padding: 0.18rem;
    color: red;
    font-size: 0.25rem;
}
</style>

<template>

<div class="my-wallet-box">
    <headnav v-bind:title="pagetitle"></headnav>
	<div class="daedline-tip" v-if="userAccount.willExpireVoucher">
        您有<span class="will">{{userAccount.willExpireVoucher}}</span>优券将在本月到期，请尽快使用。</div>
	<div class="accountCash">
		<div class="cashLeft clearfix">
			<span>账户余额：</span>
			<span class="price">¥<b>{{userAccount.amount}}</b></span>
		</div>
		<div class="cgAndDep clearfix">
			<a class="charge">充值</a>
			<a class="deposit">提现</a>
		</div>
	</div>
	<div class="accountVor">
		<div class="ticket"><span>优券余额：</span><span class="price">{{userAccount.vouchers}}</span></div>
		<div class="vorCg clearfix">
			<a href="userrecharge.html">充值</a>
			<a class="deposit">优劵规则</a>
		</div>
	</div>
    <div class="paySet">
		<div class="myBank">
            <router-link to="/user/myBankCard" class="black">
                <span>我的银行卡</span>
    			<i class="iconfont icon-right"></i>
            </router-link>
		</div>
		<div class="payPass">
			<span>设置支付密码</span>
			<i class="iconfont icon-right"></i>
		</div>
		<div class="GetpayPass">
			<span>找回支付密码</span>
			<i class="iconfont icon-right"></i>
		</div>
	</div>
    <div class="warning">警告：禁止使用信用卡充值套现，一经发现优兑有权停用您的帐号并上报有关部门!</div>
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
import headnav from './../common/header.vue'

const components = {
    headnav
}
export default {
    data() {
        return {
            pagetitle: "我的钱包",
			eventCode : 'R002',
			clearEventCode : false,
			linkId : null
        }
    },
    computed: mapGetters({
        userAccount: 'userAccount'
    }),
    components: components,
    methods: {},
    created() {
        this.$store.dispatch('getUserAccount')
		this.$store.dispatch('tjTrack',{eventCode:this.eventCode,clearEventCode:this.clearEventCode,linkId : this.linkId}).then(function(){

		},function(){

		})
    }
}

</script>
