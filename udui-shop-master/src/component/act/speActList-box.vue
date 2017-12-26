<style>
.itemBox li {
    float: left;
    width: 3.65rem;
    margin: 0 0.1rem 0.1rem 0;
    background: #fff;
    position: relative;
}
.box-itemIco{
    position: absolute;
    z-index: 1;
    left: 0.12rem;
    top: 0.12rem;
    width: 0.64rem;
    height: 0.34rem;
    background: url(../../assets/images/sell.png) no-repeat;
    background-size: 100% 100%;
    color: #fff;
    font-size: 0.34rem;
    text-align: center;
    line-height: 0.48;
    font-style: normal;
    padding-top: 0.3rem;
    padding-right: 0.5rem;
}
.box-itemImg {
    width: 3.65rem;
    height: 3.65rem;
    overflow: hidden;
}
.box-itemInfo {
    padding: 0.12rem;
}
.box-itemName {
    font-size: 0.25rem;
    line-height: 0.3rem;
    height: 0.6rem;
    overflow: hidden;
    color: #666;
}
.box-itemPrice {
    margin: 0.1rem 0;
    color: #ea0041;
    line-height: 0.3rem;
    text-align: center;
}
.box-itemCash {
    font-size: 0.3rem;
}
.box-itemVoucher {
    font-size: 0.25rem;
    padding: 0 0.12rem;
    border:1px dotted #ea0041;
    border-radius: 0.06rem;
    margin-left: 0.06rem;
}
.box-itemBuyBtn {
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
    <div class="itemBox">
        <ul class="clearfix" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
            <li v-for="data in items">
                <div v-if="showTag(data.vouchers,data.sellPrice)" class="box-itemIco">
                    <i class="sell">{{rate(data.vouchers,data.sellPrice)}}</i>
                </div>
                <div class="box-itemImg">
                    <img :src="data.img">
                </div>
                <div class="box-itemInfo">
                    <p class="box-itemName">{{data.productName}}</p>
                    <p class="box-itemPrice">
                        <b class="box-itemCash">&yen;{{data.sellPrice+data.vouchers}}</b>
                        <span class="box-itemVoucher">可抵用{{data.vouchers}}优券</span>
                    </p>
                    <router-link class="box-itemBuyBtn" :to="'/goodsDetail/pro/'+data.productId">立即购买</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import {
    mapGetters
}
from 'vuex'

export default {
    props:['items'],
    data() {
        return{
            busy:false
        }
    },
    computed:{
        ...mapGetters({ //
            SpecialAct: 'speActDetail',
            SpecialActSon: 'speActSubList',
            SpecialActFilter: 'speActFilter'
        })
    },
    methods:{
        showTag:function(vou,cash){
            return vou /(vou+cash)*100>=10;
        },
        rate:function(vou,cash){
            return parseInt(vou / (vou+cash) * 100);
        },
        loadMore:function(){
            if(this.items.length==0){
                return;
            }
            this.busy = true;
            console.log(this.SpecialActFilter);
            if(this.SpecialActFilter.hasNext){
                this.$store.dispatch('addPageNum', 'speAct');
                this.$store.dispatch('addSpeActSon',{
                    activityId:this.SpecialActFilter.actId,
                    activitySpecCategoryId:this.SpecialActFilter.cateId,
                    partitionId:this.SpecialActFilter.partId,
                    pageNo:this.SpecialActFilter.pageNo,
                    pageSize:10,
                    sortNo:'',
                    sortType:true,
                    minNum:'',
                    maxNum:''
                });
                this.busy = false;
            }else{
                this.busy = true;
            }
        }
    },
    created() {
    }
}
</script>
