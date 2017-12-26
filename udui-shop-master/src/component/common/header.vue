<style>
/* line 6, ../sass/ie.scss */
header {
    height: 0.6rem;
    background: #f7f7f7;
    border-bottom: 0.01rem solid #dfdfdf;
    padding: 0.1rem 0.3rem;
    position: relative;
}
header .backBtn {
    position: absolute;
    display: block;
    width: 0.6rem;
    height: 0.6rem;
    text-align: center;
    line-height: 0.6rem;
    left: 0;
    top: 0.1rem;
    z-index: 1;
}
header .areaName {
    position: relative;
    color: #333;
    height: 0.54rem;
    width:100%;
    padding-top:0.05rem;
    box-sizing: border-box;
}
header .areaName a {
    color: #333;
    font-size: 0.3rem;
}
header p {
    font-size: 0.32rem;
    text-align: center;
    line-height: 0.6rem;
}
header .rightIcon {
    display: block;
    width: 0.6rem;
    height: 0.6rem;
    text-align: center;
    line-height: 0.6rem;
    position: absolute;
    z-index: 1;
    right: 0;
    top: 0.1rem;
}
header .rightTxt {
    display: block;
    width: 1.3rem;
    height: 0.6rem;
    text-align: right;
    line-height: 0.6rem;
    position: absolute;
    z-index: 1;
    right: 0.2rem;
    top: 0.1rem;
    font-size: 0.3rem;
}
header .iconfont {
    font-size: 0.4rem;
    color: #666;
    /*display: block;*/
}
header .icon-favorfill{
  color:#ff2772;
}
.nav-header .rightTxt{color:#333;}
header .areaName .moren{
    background-color:#eeeeee;
    font-size: 0.3rem;
    padding:0.08rem 0.2rem;
    border-radius: 0.05rem;
    display: inline-block;
    width:4rem;
}
header .areaName .downtrg{
    display: inline-block;
    width: 0;
    height: 0;
    border-width: 0.08rem;
    border-style: solid dashed dashed dashed;
    border-color: #000 transparent transparent transparent;
    margin-right:0.2rem;
}
header .areaName .searchInput{
    font-size: 0.3rem;
}
header .areaName .call{
    position: absolute;
    width: 0.45rem;
    height:0.45rem;
    margin-left: 0.3rem;
    background: url(../../assets/images/user/cusver2.png) no-repeat;
    background-size: 100% 100%;
    display: inline-block;
    right:0.2rem;top:0.1rem;
}
</style>

<template>
    <header class="nav-header">
        <!-- <router-link class="backBtn" to="/index"></router-link> -->
        <a class="backBtn" v-show="backBtn" @click="backfn()"><i class="iconfont icon-back"></i></a>
        <div class="areaName" v-show="areaName">
            <router-link to="/selectArea"  id="areaName">{{currCity}}</router-link>
            <i class="iconfont icon-down"></i>
            <span class="moren" @click="tcSearch">
                商家
                <i class="downtrg"></i>
                <span class="searchInput">请输入搜索内容</span>
            </span>
            <a href="tel:4000801111" class="call" ></a>
        </div>
        <p class="headTxt" v-show="!areaName">{{title}}</p>
        <a class="rightIcon" v-if="rightIcon&&rightIcon.iconClass" @click="goFn()">
            <i class="iconfont" :class="rightIcon.iconClass"></i>
        </a>
        <a class="rightTxt" v-if="rightIcon&&rightIcon.txt" @click="rIconEvent()">{{rightIcon.txt}}</a>
    </header>
</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
export default {
    computed: mapGetters({
        positionData: 'positionData'
    }),
    data() {
        return {
            areaName : false,
            backBtn  : true,
            currCity: '',
        }
    },
    methods: {
        backfn: function() {
            this.$router.go(-1)
        },
        tcSearch(){
            this.$emit('tcGoSearch');
        },
        goFn: function(){
            switch(this.rightIcon.iconType){
                case '0':   //回首页
                    this.$router.push('/index')
                    break;
                case '1':   //点击收藏商品
                    this.$emit('goSetCollectPro');
                    break;
                case '2':   //点击收藏店铺
                    this.$emit('goSetCollect');
                    break;
                case '3':   //购物车编辑

                    break;
                default:
                    break;
            }
        },
        rIconEvent:function(){
            this.$emit('rIconEvent');
        }
    },
    props: ['title','rightIcon'],
    created() {
        this.currCity = sessionStorage.getItem('setAreaId') ? sessionStorage.getItem('setAreaName') : this.positionData.city;
        let path = this.$route.path;
        switch (path) {
            case '/tcshop/footBar':
            case '/tcHotlist':
                this.areaName = true;
                this.backBtn = false;
                break;
            default:
                break;
        }
    }
}

</script>
