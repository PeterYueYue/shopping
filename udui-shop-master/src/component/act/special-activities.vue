<style>
.specialAct {
    padding-bottom: 1.2rem;
}
.specAct-hot-pro {
    padding-bottom: 0.24rem;
}
.specAct-hot-pro ul li{
    background:#fff;
    margin:0.12rem 0.12rem 0;
    position:relative;
}
.specAct-hot-pro .itemImg {
    float: left;
    width: 2.8rem;
    height: 2.8rem;
}
.specAct-hot-pro .itemImg img {
    width: 100%;
    height: 100%;
}
.specAct-hot-pro .itemInfo {
    width: 3.98rem;
    float: left;
    margin-left: 0.24rem;
    padding: 0.24rem 0.24rem 0 0;
}
.specAct-hot-pro .itemName {
    font-size: 0.27rem;
    line-height:0.37rem;
    height: 0.72rem;
    overflow: hidden;
}
.specAct-hot-pro .itemDelPrice del {
    display: block;
    height: 0.5rem;
    line-height: 0.5rem;
    color: #999;
}
.specAct-hot-pro .itemPrice {
    height: 0.47rem;
    line-height: 0.47rem;
    color: #ff0047;
    margin: 0.05rem 0;
}
.specAct-hot-pro .itemPrice b {
    font-size: 0.32rem;
    vertical-align: middle;
    margin-right: 0.12rem;
}
.specAct-hot-pro .itemPrice span {
    padding: 0 0.06rem;
    border: 1px dotted #ff000d;
    vertical-align: middle;
    border-radius: 2px;
    font-size: 0.28rem;
    color: #ff000d;
}
.specAct-hot-pro .itemBuyBtn {
    padding: 0.24rem 0 0.12rem;
}
.specAct-hot-pro .itemBuyBtn a {
    display: block;
    height: 0.6rem;
    line-height: 0.6rem;
    width: 100%;
    text-align: center;
    background: #cd1d44;
    color: #fff;
    border-radius: 3px;
}
.specAct-cateMenu li {
    float: left;
    width: 1.86rem;
    border-bottom: 1px solid #ddd;
    text-align: center;
    background: #fff;
}
.specAct-cateMenu li.act {
    color: #FF2772;
}
.specAct-cateMenu li p {
    height: 0.9rem;
    line-height: 0.9rem;
    border-right: 1px solid #ddd;
}
.specAct-cateMenu li:nth-child(4n) p {
    border-right: none;
}
.specAct-gList {
    margin-top: 0.18rem;
}
</style>

<template>
    <div class="specialAct">
        <headnav v-bind:title="SpecialAct.name" :rightIcon="rightIcon"></headnav>
        <banner v-bind:banner="{styleObj:{height:'3rem'},itemData:SpecialAct.bannerList,dataType:2,filterType:5}" :bannerConfig="bannerConfig"></banner>
        <div class="specAct-hot-pro">
            <ul>
                <li class="clearfix" v-for="data in rootPros">
                    <i class="proTag"></i>
                    <div class="itemImg"><img :src="data.img" /></div>
                    <div class="itemInfo">
                        <div class="itemName">{{data.productName}}</div>
                        <div class="itemDelPrice"><del>专柜价：{{data.originalPrice}}</del></div>
                        <div class="itemPrice">
                            <b>&yen;{{data.sellPrice+data.vouchers}}</b><span class="">可抵用{{data.vouchers}}优券</span>
                        </div>
                        <div class="itemBuyBtn"><router-link :to="'/goodsDetail/pro/'+data.productId">立即购买</router-link></div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="specAct-cateMenu">
            <ul class="clearfix">
                <li v-for="data in cateData" :class="{act:setCateId==data.id}" @click="loadSon(data.id,1)"><p>{{data.name}}</p></li>
            </ul>
        </div>
        <div class="specAct-gList">
            <speActList-box :items="SpecialActSon"></speActList-box>
        </div>
        <loading :show="speActLoad"></loading>
        <back-top :show="true"></back-top>
    </div>
</template>

<script>
import {
    mapGetters
}
from 'vuex'
import headnav from './../common/header.vue'
import banner  from './../common/banner.vue'
import loading from './../common/loading.vue'
import backTop from './../common/back-top.vue'
import speActListBox from './speActList-box.vue'

const components = {
    headnav, banner, loading, backTop,speActListBox
}

export default {
    data() {
        return {
            setCateId:0,
            rightIcon: {
                iconClass:'icon-icon',
                iconType:'0'
            },
            bannerConfig: {
                direction: 'horizontal',
                autoplay: 2000,
                spend: 2000,
                loop: true,
                observer: true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents: true,
                //修改swiper的父元素时，自动初始化swiper
                // 如果需要分页器
                pagination: '.swiper-pagination'
            },
            eventCode : 'A001',
            clearEventCode : false,
            linkId : null
        }
    },
    computed: {
        ...mapGetters({ //
            SpecialAct: 'speActDetail',
            SpecialActSon: 'speActSubList',
            SpecialActFilter: 'speActFilter',
            speActLoad:'speActLoad'
        }),
        rootPros:function(){
            return this.SpecialAct.rootProducts.module;
        },
        cateData:function(){
            return this.SpecialAct.categoryList;
        }
    },
    methods: {
        loadSon:function(cateId,pageNo){
            this.setCateId = cateId;
            this.$store.dispatch('getSpeActSubList', {
                activityId:this.SpecialActFilter.actId,
                activitySpecCategoryId:cateId,
                partitionId:this.SpecialActFilter.partId,
                pageNo:pageNo,
                pageSize:10,
                sortNo:'',
                sortType:true,
                minNum:'',
                maxNum:''
            });
        }
    },
    components: components,
    created() {
        this.$store.dispatch('tjTrack',{eventCode:this.eventCode,clearEventCode:this.clearEventCode,linkId : this.$route.params.actId}).then(function(){

        },function(){

        })
        let that = this;
        this.$store.dispatch('getSpeActDetail', {
            appLinkId:this.$route.params.actId,
            partitionId:this.$route.params.partId,
            rootProPageSize:'',
            catProPageSize:''
        }).then(function(res){
            that.$store.dispatch('getSpeActSubList', {
                activityId:res.specId,
                activitySpecCategoryId:res.id,
                partitionId:res.partitionId,
                pageNo:1,
                pageSize:10,
                sortNo:'',
                sortType:true,
                minNum:'',
                maxNum:''
            });
        });
    }
}
</script>
