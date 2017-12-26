<style scoped>
    .recmdMenu{
        border-bottom: 1px solid #e6e6e6;
        background-color: #fff;
        padding: 0.09rem 0;
        position: relative;
    }
    .recmdMenu li{
        width: 22%;
        height: 0.54rem;
        line-height: 0.54rem;
        text-align: center;
        font-size: 0.26rem;
        float: left;
        color: #333;
        position: relative;
    }
    .recmdMenu li:last-child{
        width: 12%;
    }
    .recmdMenu li .arrBox {
        display: inline-block;
        position: relative;
        left: 0.09rem;
        top: 0.09rem;
    }
    .recmdMenu li i {
        display: block;
        width: 0;
        height: 0;
    }
    .recmdMenu li s {
        text-decoration:none;
        line-height: 0.65rem;
        font-size: 0.3rem;
    }
    .s-type .arrBox {
        top:0 !important;
    }
    .recmdMenu .uptrg{
        border-width: 0.09rem;
        border-style: dashed dashed solid dashed;
        border-color: transparent transparent #ccc transparent;
        margin-bottom: 0.06rem;
    }
    .recmdMenu .downtrg {
        border-width: 0.09rem;
        border-style: solid dashed dashed dashed;
        border-color: #ccc transparent transparent transparent;
    }
    .s-up .uptrg {
        border-color: transparent transparent #FF2772 transparent;
    }
    .s-down .downtrg {
        border-color: #FF2772 transparent transparent transparent;
    }
    .recmdMenu .cur{
        color: #FF2772;
    }
    .cur i.down-arrow{
        top: 0.12rem;
        border-color: transparent transparent #FF2772;
    }
    .recmdMenu li:nth-child(3n){
        border-right:0;
    }
    .s-type span {
        color: #FF2772;
    }


</style>

<template>
<div>
    <headnav v-bind:title="pagetitle"></headnav>
    <div class="recmdMenu clearfix" v-show="false">
        <ul id="sort-result">
            <li class="s-type"><span>全部分类</span>
                <div class="arrBox"><i class="downtrg"></i></div>
            </li>
            <li class="s-sale s-down" data-s="true"><span>销量</span>
                <div class="arrBox"><i class="uptrg"></i><i class="downtrg"></i></div>
            </li>
            <li class="s-p" data-p="true"><span>价格</span>
                <div class="arrBox"><i class="uptrg"></i><i class="downtrg"></i></div>
            </li>
            <li class="s-v" data-v="true"><span>上架时间</span>
                <div class="arrBox"><i class="uptrg"></i><i class="downtrg"></i></div>
            </li>
            <li class="s">
                <s class="iconfont icon-fenlei"></s>
            </li>
        </ul>
    </div>
    <shop-pro-list :proList="shopProList" :type="1"></shop-pro-list>
</div>
</template>

<script type="text/javascript">
import headnav      from './../common/header.vue'
import shopProList  from './shop-pro-list.vue'
import {
    mapGetters
}
from 'vuex'
const components = {
    headnav, shopProList
}
export default {
    computed: mapGetters({
        shopProList : 'shopProList'
    }),
    data() {
        return {
            pagetitle : '店铺商品',
            eventCode : 'P011',
            clearEventCode : false,
            linkId : null
        }
    },
    methods: {},
    mounted: function() {

    },
    components: components,
    created() {
        this.$store.dispatch('tjTrack',{eventCode:this.eventCode,clearEventCode:this.clearEventCode,linkId : this.linkId}).then(function(){

        },function(){

        })
    }

}

</script>
