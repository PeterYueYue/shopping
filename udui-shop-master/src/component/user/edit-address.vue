<style>
.editAddress .choise-default {
	height: 0.12rem;
}

.editAddress .checkbox-cover i {
	font-size: 0.3rem;
}

.editAddress .from-list {
	background-color: #ffffff;
}

.editAddress .icon-square {
	color: #000;
}

.editAddress .icon-squarecheck {
	color: #ff2772;
}

.editAddress .from-list input {
	display: block;
	height: 0.48rem;
	font-size: 0.24rem;
	line-height: 0.48rem;
	color: #555;
	vertical-align: middle;
	float: left;
	padding-left: 0.24rem;
	width: 5.4rem;
}

.editAddress .from-list>li {
	padding: 0.12rem 0.24rem;
	border-bottom: 1px solid #e6e6e6;
	height: 0.48rem;
	line-height: 0.48rem;
	font-size: 0.24rem;
}

.editAddress .from-list label.group-label {
	height: 0.48rem;
	font-size: 0.24rem;
	line-height: 0.48rem;
	display: block;
	float: left;
}

.editAddress .submit-eva {
	border-radius: 0.06rem;
	display: block;
	width: 7rem;
	height: 0.72rem;
	background-color: #ff2772;
	text-align: center;
	line-height: 0.72rem;
	color: #fff;
	font-size: 0.3rem;
	margin: 1.2rem auto 0;
}
</style>

<template>
<div class="editAddress">
	<headnav v-bind:title="pagetitle"></headnav>
	<ul class="from-list">
		<li class="group" id="name">
			<label class="group-label" for="addr_name">收货人:</label>
			<input name="inputAddrNmae" id="addr_name" type="text" placeholder="请输入姓名" v-model="nowAddr.receiver">
		</li>
		<li class="group" id="phone">
			<label class="group-label" for="phone_num">联系电话:</label>
			<input name="inputAddrNmae" id="phone_num" type="tel" maxlength="11" placeholder="请输入11位手机号" v-model="nowAddr.mobile">
		</li>
		<li class="group" id="city">
			<label class="group-label" for="city_code">所在地区:</label>
			<input name="inputAddrNmae" id="city_code" type="text" readonly="readonly" @click="areaSel()" v-model="nowAddr.regionFullName">
		</li>
		<li class="group" id="street">
			<label class="group-label" for="street_code">街道:</label>
			<input name="inputAddrNmae" id="street_code" type="text" readonly="readonly" @click="areaSel()" v-model="nowAddr.street">
		</li>
		<li class="group" id="addr_detail">
			<label class="group-label" for="addr_d">详细地址:</label>
			<input name="inputAddrNmae" id="addr_d" type="text" placeholder="请输入详细地址" v-model="nowAddr.address">
		</li>
		<li class="group" id="zip">
			<label class="group-label" for="zip_code">邮编编码:</label>
			<input name="inputAddrNmae" id="zip_code" type="text" maxlength="6" placeholder="请输入邮编" v-model="nowAddr.post">
		</li>
		<li class="choise-default" @click="setAddrDefault()">
			<a class="set_default checkbox-cover "><i class="iconfont" :class="[nowAddr.isDefault?'icon-squarecheck':'icon-square']"></i></a>
			<span>设为默认地址</span>
		</li>
	</ul>
	<div class="submit-eva" @click="addrSub()">保存</div>
	<addrSel v-if="showAreaSel" v-on:addrSelOk="addrSelOk" v-on:addrSelCancle="addrSelCancle"></addrSel>
</div>
</template>

<script type="text/javascript">
import {
	mapGetters
}
from 'vuex'
import headnav from './../common/header.vue'
import addrSel from './../common/addr-select.vue'

const components = {
	headnav,
	addrSel
}
export default {
	data() {
		return {
			nowAddr: {
				type: 0,
				receiver: '',
				mobile: '',
				regionFullName: '',
				street: '',
				address: '',
				post: '',
				regionId: 0,
				isDefault: 0
			},
			showAreaSel: false
		}
	},
	computed: {
		...mapGetters({
			userAddrById: 'userAddrById'
		}),
		pagetitle: function() {
			if (this.$route.params.addrId == 1) {
				return "添加收货地址"
			} else {
				return "修改收货地址"
			}
		}
	},
	components: components,
	methods: {
		setAddrDefault: function() {
			this.nowAddr.isDefault == 1 ? this.nowAddr.isDefault = 0 : this.nowAddr.isDefault = 1;
		},
		addrSub: function() {
			let that = this;
			let data = {
				type: this.nowAddr.type,
				isDefault: this.nowAddr.isDefault,
				receiver: this.nowAddr.receiver,
				mobile: this.nowAddr.mobile,
				regionId: this.nowAddr.regionId,
				street: this.nowAddr.street,
				post: this.nowAddr.post
			}
			data = JSON.stringify(data);
			if (this.$route.params.addrId != 1) {
				this.$store.dispatch('editAddrSub',{
					addrId: this.$route.params.addrId,
					addrCon: data
				}).then(function() {
					that.$router.go(-1);
				}, function(res) {
					alert(res);
				});
			} else {
				this.$store.dispatch('addAddrSub',data).then(function() {
					that.$router.go(-1);
				}, function(res) {
					alert(res);
				});
			}
		},
		areaSel: function() {
			this.showAreaSel = true;
		},
		addrSelOk: function(e) {
			console.log(e);
			this.showAreaSel = false;
			this.nowAddr.regionId = e[0];
			this.nowAddr.regionFullName = e[1];
			this.nowAddr.street = e[2];
		},
		addrSelCancle: function() {
			this.showAreaSel = false;
		}
	},
	created() {
		let that = this;
		this.$store.dispatch('getUserAddrById', this.$route.params.addrId).then(function() {
			for (let key in that.userAddrById) {
				that.nowAddr[key] = that.userAddrById[key];
			}
		});
	}
}
</script>
