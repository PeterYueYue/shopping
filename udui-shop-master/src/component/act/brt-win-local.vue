<style>
.brtLocalWin .countdown {
    padding: 0.1rem 0.3rem;
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 0.26rem;
}
.brtLocalWin .countdown em {
    padding: 0.06rem 0.05rem;
    background: #000;
    color: #fff;
    margin: 0 0.1rem;
    border-radius: 0.05rem;
}
.brtLocalWin .alternative-tips {
	width: 100%;
	text-align: center;
	background-color: #ff7f42;
	color: #fff;
	padding: 0.06rem 0;
}
.brtLocalWin .grl li {
	float: left;
	width: 3.66rem;
	margin: 0 0 0.12rem 0;
	background: #fff;
	position: relative;
}
.brtLocalWin .grl li:nth-child(2n) {
	float: right;
}
.brtLocalWin .grl .gImg {
	width: 3.66rem;
	height: 3.66rem;
	overflow: hidden;
}
.brtLocalWin .grl .gInfo {
	padding: 0.12rem;
}
.brtLocalWin .grl .gName {
	font-size: 0.25rem;
	line-height: 0.3rem;
	height: 0.6rem;
	overflow: hidden;
	color: #666;
}
.brtLocalWin .grl .gPrice {
	margin: 0.18rem 0;
	color: #ea0041;
	line-height: 0.15rem;
	text-align: center;
}
.brtLocalWin .grl .gPrice .cash {
	font-size: 0.3rem;
}
.brtLocalWin .grl .gPrice .voucher {
	font-size: 0.25rem;
	padding: 0 0.12rem;
	border: 1px dotted #ea0041;
	border-radius: 0.06rem;
	margin-left: 0.06rem;
}
.brtLocalWin .grl .buyBtn {
	display: block;
	width: 100%;
	height: 0.6rem;
	line-height: 0.6rem;
	text-align: center;
	color: #fff;
	background: #ea0041;
	font-size: 0.32rem;
	border-radius: 0.06rem;
}
</style>
<template>
<div class="brtLocalWin">
    <headnav v-bind:title="pagetitle" :rightIcon="rightIcon"></headnav>
    <countdown :cdType="'colon'" :endTime="Number(this.$route.params.endTime)" :callback="cdEnd">剩余时间</countdown>
    <p class="alternative-tips">选择以下商品任意一件进行购买</p>
    <div class="grl gList">
		<ul class="clearfix">
            <li v-for="data in brt.localWin">
                <div class="gImg">
                    <img :src="data.img">
                </div>
                <div class="gInfo">
                    <p class="gName">{{data.name}}</p>
                    <p class="gPrice">
                        <b class="cash">¥{{(Number(data.activityPrice)+Number(data.activityVoucher)).toFixed(2)}}</b>
                        <span class="voucher">可抵用{{data.activityVoucher}}优券</span>
                    </p>
                    <router-link :to="data|filterBtnLink" class="buyBtn">立即购买</router-link>
                </div>
            </li>
		</ul>
	</div>
</div>
</template>

<script>
import {
    mapGetters
}
from 'vuex'
import headnav from './../common/header.vue'
import countdown from './../common/countdown.vue'

const components = {
    headnav,countdown
}
export default {
    data() {
        return {
            pagetitle:'同城惊喜，款款逆天价！',
            rightIcon:{
                icon:'icon'
            }
        }
    },
    computed: {
        ...mapGetters({ //
            brt:'brt'
        })
    },
    filters:{
        filterBtnLink(data){
            let buyLink = '';
            if(data.prodOwnerType=="tc"){
				if(data.activityId==null||data.activityId==""){
					buyLink = '/hotProDetail/proId/'+data.id;
				}else{
					buyLink = '/hotProDetail/proId/'+data.id + '/actId/'+ data.activityId;
				}
			}else{
				if(data.activityId==null||data.activityId==""){
					buyLink = '/goodsDetail/pro/'+data.id;
				}else{
					buyLink = '/goodsDetail/pro/'+data.id + '/act/'+ data.activityId;
				}
			}
            return buyLink;
        }
    },
    methods:{
        cdEnd:function(){}
    },
    components:components,
    created() {
        this.$store.dispatch('getBRTwinlocal',{
            actId:this.$route.params.actId,
            sameCityId:this.$route.params.areaId
        })
    }
}
</script>
