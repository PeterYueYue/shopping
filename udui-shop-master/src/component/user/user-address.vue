<style>
.userAddress {
	padding-bottom: 0.5rem;
}
.userAddress .addr-list {
	width: 100%;
	padding: 0 0 0.42rem 0;
	overflow: hidden;
	margin-top: 1px;
}
.userAddress .address-list {
	width: 100%;
	overflow: hidden;
}

.userAddress .address-list li {
	position: relative;
	width: 100%;
	height: 2.4rem;
	background-color: #fff;
	margin-bottom: 0.18rem;
}

.userAddress .adress-content {
	position: absolute;
	width: 100%;
	height: 1.44rem;
	background-color: #fff;
	transform: translate3d(0, 0, 0);
	-webkit-transform: translate3d(0, 0, 0);
	transition: transform .2s;
	-webkit-transition: transform .2s;
}

.userAddress .adress-content>p {
	width: 6.72rem;
	padding:0 0.24rem;
	overflow:hidden;
	text-overflow:ellipsis;
	display:-webkit-box;
	-webkit-box-orient:vertical;
	-webkit-line-clamp:2;
}

.userAddress .is-default {
	text-align: center;
	color: #FB0081;
}

.userAddress .is-default i {
	font-size: 0.3rem;
}

.userAddress .phone-num {
	float: right;
}

.userAddress .consignee {
	line-height: 0.72rem;
	font-size: 0.3rem;
}

.userAddress .address-control {
	width: 100%;
	position: absolute;
	right: 0;
	top: 1.44rem;
	height: 0.6rem;
	z-index: 0;
	border-top: 1px solid #e6e6e6;
	padding:0.18rem 0.24rem;
}

.userAddress .add-btn {
	display: block;
	width: 1.5rem;
	height: 0.6rem;
	line-height: 0.6rem;
	text-align: center;
	color: #fff;
	float: right;
	border-radius: 5px;
}

.userAddress .add-btn i {
	font-size: 0.3rem;
}

.userAddress .delete-address {
	background: #ff833e;
	margin-left:0.18rem;
}
.userAddress .edit-address {
	background: #ff2772;
}
.userAddress .add-address a {
	position: fixed;
	bottom: 0;
	border-radius: 0.06rem;
	display: block;
	float: left;
	width: 7.08rem;
	height: 0.72rem;
	background-color: #ff2772;
	text-align: center;
	line-height: 0.72rem;
	color: #fff;
	font-size: 0.3rem;
	margin: 0.18rem;
}
.delete, .edit{
	font-size: 0.27rem;
	line-height: 0.6rem;
}
</style>

<template>

<div class="userAddress">
    <headnav v-bind:title="pagetitle"></headnav>
    <div class="addr-list">
        <ul class="address-list" id="address_list">
			<li v-for="addr in userAddress" @click="selectAddr(addr)">
                <div class="address-control">
                    <a class="delete-address add-btn" @click="delAddr(addr.id)">
                        <span class="delete">删除</span>
                    </a>
                    <router-link class="edit-address add-btn" :to="'/user/editAddress/'+addr.id">
                        <span class="edit">修改</span>
                    </router-link>
                </div>
                <div class="adress-content">
                    <p class="consignee">{{addr.receiver}}<span class="phone-num">{{addr.mobile}}</span></p>
                    <p class="receiving-address"><span class="is-default" v-if="addr.isDefault==1">[默认]</span>收货地址：{{addr.address}}</p>
                </div>
            </li>
        </ul>
    </div>
    <div class="add-address" id="do_add">
		<router-link to="/user/editAddress/1">添加新地址</router-link>
	</div>
    <dialog-pop v-if="dialogOnOff" v-bind:dialog="dialogConfig" v-on:off="offDialog"></dialog-pop>
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
import dialogPop from './../common/dialog-pop.vue'
import headnav      from './../common/header.vue'

const components = {
    headnav,dialogPop
};
export default {
    data() {
        return {
            pagetitle: "管理收货地址",
            dialogOnOff:false,
            dialogConfig: {
                autoOff: true,
                txt: '',
            },
        }
    },
    computed:{
        ...mapGetters({
            userAddress: 'userAddress'
        })
    },
    components: components,
    methods: {
        offDialog(){
            this.dialogOnOff = false;
        },
		delAddr:function(data){
            this.$store.dispatch('delUserAddr',data).then(()=>{
                this.dialogOnOff = true;
                this.dialogConfig.txt = '删除成功';
                setTimeout(()=>{
                    this.$store.dispatch('getUserAddress');
                },2000)
            },(data)=>{
                this.dialogOnOff = true;
                this.dialogConfig.txt = data.errorMessage;
            });
        },
		selectAddr:function(data){
			this.$store.dispatch('setUserSelAddr',data);
//			this.$router.go(-1);
		}
    },
    created() {
        this.$store.dispatch('getUserAddress');
    }
}

</script>
