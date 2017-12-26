<style scoped>

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    .index-box header {
        background: #ff2772;
        color: #fff;
        line-height: 0.6rem;
    }

    .index-box header a {
        font-size: 0.27rem;
    }

    .index-box .sc {
        width: 100%;
        text-align: center;
        font-size: 0.27rem;
        color: #fff;
        float: left;
    }

    .app-fade-enter-active {
        transition: all .3s ease;
    }

    .app-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .app-fade-enter,
    .app-fade-leave-active {
        padding-right: 500px;
        padding-left: 500px;
        opacity: 0;
    }

    .search-fade-enter-active {
        transition: all .3s ease;
    }

    .search-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .search-fade-enter, .search-fade-leave-active {
        transform: translateX(-10px);
        opacity: 0;
    }

    .flwithbg .hot1 li {
        float: left;
        width: 3.72rem;
        height: 1.84rem;
        margin-bottom: 1px;
    }

    .flwithbg .hot2 li {
        float: left;
        width: 1.86rem;
        height: 2.24rem;
    }

    .floor h3 {
        height: .84rem;
        line-height: .84rem;
        font-weight: 400;
    }

    .fl1 h3 span {
        background: #0ac4fa;
    }

    .floor h3 span {
        display: inline-block;
        width: .72rem;
        height: 1px;
        vertical-align: middle;
    }

    .floor h3 em {
        margin: 0 .18rem;
        font-size: .32rem;
    }

    .fl1 h3 {
        color: #0ac4fa;
    }

    .floor h3 {
        height: .84rem;
        line-height: .84rem;
        font-weight: 400;
        text-align: center;
    }

    .floor .mod1 a:nth-child(1), .floor .mod1 a:nth-child(2) {
        width: 3.72rem;
        height: 1.86rem;
    }

    .floor a {
        display: block;
        float: left;
    }

    .floor .mod1 a {
        width: 1.86rem;
        height: 2.16rem;
    }

    .fl2 h3 {
        color: #76dfa0;
    }

    .fl2 h3 span {
        background: #76dfa0;
    }

    .floor .mod2 a {
        width: 1.86rem;
        height: 2.16rem;
    }

    .fl3 h3 {
        color: #006cb4;
    }

    .fl3 h3 span {
        background: #006cb4;
    }

    .floor .mod3 a {
        width: 2.48rem;
        height: 3.26rem;
    }

    .fl4 h3 {
        color: #ff8305;
    }

    .fl4 h3 span {
        background: #ff8305;
    }

    .floor .mod4 a {
        width: 3.69rem;
        height: 1.86rem;
        margin: 0 .06rem .06rem 0;
    }

    header {
        padding: 0.12rem 0.18rem;
        background: #ff2772;
        height: 0.6rem;
    }

    header .areaName {
        color: #fff;
        font-size: 0.26rem;
        height: 0.6rem;
        line-height: 0.6rem;
        float: left;
        width: 1.4rem;
    }

    header .areaName a {
        color: #fff;
    }

    header .areaName i {
        margin-left: 0.06rem;
        line-height: 0.54rem;
        position: relative;
        top: 0.018rem;
    }

    header .searchBox {
        width: 5.16rem;
        background: #eee;
        border-radius: 0.6rem;
        height: 0.6rem;
        line-height: 0.6rem;
        float: left;
        color: #999;
    }

    header .sc {
        width: 100%;
        text-align: center;
        height: 0.54rem;
        line-height: 0.324rem;
        font-size: 0.324rem;
        color: #fff;
        float: left;
    }
    header #tel{
        display: block;
        position: absolute;
        width: 0.325rem;
        height: 0.54rem;
        background: url("../../assets/images/kefu.png") center no-repeat;
        background-size: 100%;
        right: 0.18rem;
    }
    header #logo{
        display: block;
        position: absolute;
        width: 0.684rem;
        height: 0.6rem;
        background: url('../../assets/images/udui_logo.png') center no-repeat;
        background-size: 100%;
        left: 0.18rem;
    }
    header .shuru{
        width: 5.64rem !important;
        margin-left: 0.9rem !important;
    }

</style>

<template>
    <div class="index-box">
        <header class="clearfix" @click="searchShow=true">
            <a id="logo"></a>
            <div class="searchBox shuru">
                <i class="iconfont icon-iconfontsearch" style="font-size: 0.32rem; margin-right:0.2rem;"></i>输入你想要搜索的商品
            </div>
            <a id="tel" href="tel:4000801111"></a>
        </header>
        <banner v-bind:banner="{styleObj:{height:'3rem'},itemData:getCarousel,dataType:1,filterType:5}"
                :bannerConfig="bannerConfig"></banner>
        <div v-bind:style="{ backgroundImage: 'url('+indexConfigData.divBgUrl+')'}">
            <navlist :navData="getChannelInfo" :navlistColor="indexConfigData.iconFontColor"></navlist>
            <kyyq :leftfontcolor="indexConfigData.kyyqColor" :rightfontcolor="indexConfigData.yqNumColor"></kyyq>
        </div>
        <div class="floorContent">
            <div class="flwithbg">
                <router-link to="/specialAct/223/part/0"
                             v-bind:style="{ width: '100%',height: '2.25rem',display: 'block'}">
                    <img :src="indexConfigData.topBannerImg" id="banner_img_01">
                </router-link>
                <div class="fbgUl">
                    <ul class="hot1 clearfix">
                        <li>
                            <router-link to="/specialAct/200/part/0">
                                <img :src="indexConfigData.bannerImg1" id="index_img_01">
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/specialAct/202/part/0">
                                <img :src="indexConfigData.bannerImg2" id="index_img_02">
                            </router-link>
                        </li>
                    </ul>
                    <ul class="hot2 clearfix">
                        <li>
                            <router-link to="/specialAct/209/part/0">
                                <img :src="indexConfigData.bannerImg3" id="index_img_03">
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/specialAct/210/part/0">
                                <img :src="indexConfigData.bannerImg4" id="index_img_04">
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/specialAct/211/part/0">
                                <img :src="indexConfigData.bannerImg5" id="index_img_05">
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/specialAct/203/part/0">
                                <img :src="indexConfigData.bannerImg6" id="index_img_06">
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/specialAct/204/part/0">
                                <img :src="indexConfigData.bannerImg7" id="index_img_07">
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/specialAct/205/part/0">
                                <img :src="indexConfigData.bannerImg8" id="index_img_08">
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/specialAct/206/part/0">
                                <img :src="indexConfigData.bannerImg9" id="index_img_09">
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/specialAct/207/part/0">
                                <img :src="indexConfigData.bannerImg10" id="index_img_10">
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="lineBanner">
                <router-link to="/specialAct/156/part/0">
                    <img src="http://fstatic.udui.com/static/images/index/hf2.gif">
                </router-link>
            </div>
            <div class="floor fl1">
                <h3>
                    <span class="leftBar"></span>
                    <em>好生活 并不贵</em>
                    <span class="rightBar"></span></h3>
                <div class="adCon mod1 clearfix">
                    <router-link to="/specialAct/28/part/0">
                        <img src="http://fstatic.udui.com/static/images/index/11.jpg">
                    </router-link>
                    <router-link to="/specialAct/79/part/0">
                        <img src="http://fstatic.udui.com/static/images/index/12.jpg">
                    </router-link>
                    <router-link to="/specialAct/41/part/0">
                        <img src="http://fstatic.udui.com/static/images/index/13.jpg">
                    </router-link>
                    <router-link to="/specialAct/42/part/0">
                        <img src="http://fstatic.udui.com/static/images/index/14.jpg">
                    </router-link>
                    <router-link to="/specialAct/26/part/0">
                        <img src="http://fstatic.udui.com/static/images/index/15.jpg">
                    </router-link>
                    <router-link to="/specialAct/27/part/0">
                        <img src="http://fstatic.udui.com/static/images/index/16.jpg">
                    </router-link>
                </div>
            </div>
            <div class="lineBanner">
                <a href="http://weixin.udui.com/app/product/Odetail.html?proId=25415877&isNormal">
                    <img src="http://fstatic.udui.com/static/images/index/hf3.gif">
                </a>
            </div>
            <div class="floor fl2">
                <h3>
                    <span class="leftBar"></span>
                    <em>潮流酷玩</em>
                    <span class="rightBar"></span></h3>
                <div class="adCon mod2 clearfix">
                    <router-link to="/specialAct/40/part/0">
                        <img src="http://fstatic.udui.com/static/images/index/17.jpg">
                    </router-link>
                    <router-link to="/specialAct/36/part/0">
                        <img src="http://fstatic.udui.com/static/images/index/18.jpg">
                    </router-link>
                    <router-link to="/specialAct/43/part/0">
                        <img src="http://fstatic.udui.com/static/images/index/19.jpg">
                    </router-link>
                    <router-link to="/specialAct/54/part/0">
                        <img src="http://fstatic.udui.com/static/images/index/20.jpg">
                    </router-link>
                </div>
            </div>
            <div class="lineBanner">
                <a href="http://weixin.udui.com/app/product/Odetail.html?proId=25519640&isNormal">
                    <img src="http://fstatic.udui.com/static/images/index/hf4.gif">
                </a>
            </div>
            <div class="floor fl3">
                <h3>
                    <span class="leftBar"></span>
                    <em>尚优兑  选精品</em>
                    <span class="rightBar"></span></h3>
                <div class="adCon mod3 clearfix">
                    <router-link to="/specialAct/339/part/0">
                        <img src="http://fstatic.udui.com/static/images/index/21.jpg">
                    </router-link>
                    <router-link to="/specialAct/354/part/0">
                        <img src="http://fstatic.udui.com/static/images/index/22.jpg">
                    </router-link>
                    <router-link to="/specialAct/150/part/0">
                        <img src="http://fstatic.udui.com/static/images/index/23.jpg">
                    </router-link>
                    <router-link to="/specialAct/44/part/0">
                        <img src="http://fstatic.udui.com/static/images/index/24.jpg">
                    </router-link>
                    <router-link to="/specialAct/45/part/0">
                        <img src="http://fstatic.udui.com/static/images/index/25.jpg">
                    </router-link>
                    <router-link to="/specialAct/348/part/0">
                        <img src="http://fstatic.udui.com/static/images/index/26.jpg">
                    </router-link>
                </div>
            </div>
            <div class="lineBanner">
                <a href="http://weixin.udui.com/app/product/Odetail.html?proId=25612241&isNormal">
                    <img src="http://fstatic.udui.com/static/images/index/hf5.gif">
                </a>
            </div>
            <div class="floor fl4">
                <h3>
                    <span class="leftBar"></span>
                    <em>美味正当季</em>
                    <span class="rightBar"></span></h3>
                <div class="adCon mod4 clearfix">
                    <router-link to="/specialAct/33/part/0">
                        <img src="http://fstatic.udui.com/static/images/index/27.jpg">
                    </router-link>
                    <router-link to="/specialAct/35/part/0">
                        <img src="http://fstatic.udui.com/static/images/index/28.jpg">
                    </router-link>
                    <router-link to="/specialAct/109/part/0">
                        <img src="http://fstatic.udui.com/static/images/index/29.jpg">
                    </router-link>
                    <router-link to="/specialAct/38/part/0">
                        <img src="http://fstatic.udui.com/static/images/index/30.jpg">
                    </router-link>
                </div>
            </div>
            <div class="lineBanner">
                <a href="http://weixin.udui.com/app/tcShop.html">
                    <img src="http://fstatic.udui.com/static/images/index/横幅6.jpg">
                </a>
            </div>
        </div>
        <transition name="search-fade">
            <search v-show="searchShow" :searchType="'mall'" v-on:hide="searchShow = false"></search>
        </transition>
    </div>
</template>

<script>

    import {
        mapGetters
    }
        from 'vuex'
    import banner   from './../common/banner.vue'
    import navlist from './../common/nav-list.vue'
    import search from './../common/search.vue'
    import kyyq from './kyyq.vue'

    const components = {
        banner, navlist, search, kyyq
    }

    export default {
        data() {
            return {
                searchShow: false,
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
                indexConfigData: {
                    iconFontColor: 'white',
                    kyyqColor: 'white',
                    yqNumColor: 'white',
                    divBgUrl: 'http://fstatic.udui.com/static/images/index/ico.jpg',
                    topBannerImg: 'http://fstatic.udui.com/static/images/index/gw.gif',
                    bannerImg1: 'http://fstatic.udui.com/static/images/index/activeimg1.jpg',
                    bannerImg2: 'http://fstatic.udui.com/static/images/index/activeimg2.jpg',
                    bannerImg3: 'http://fstatic.udui.com/static/images/index/activeimg6.jpg',
                    bannerImg4: 'http://fstatic.udui.com/static/images/index/activeimg7.jpg',
                    bannerImg5: 'http://fstatic.udui.com/static/images/index/activeimg8.jpg',
                    bannerImg6: 'http://fstatic.udui.com/static/images/index/activeimg9.jpg',
                    bannerImg7: 'http://fstatic.udui.com/static/images/index/activeimg10.jpg',
                    bannerImg8: 'http://fstatic.udui.com/static/images/index/activeimg11.jpg',
                    bannerImg9: 'http://fstatic.udui.com/static/images/index/activeimg12.jpg',
                    bannerImg10: 'http://fstatic.udui.com/static/images/index/activeimg13.jpg',
                }
            }
        },
        computed: mapGetters({
            getChannelInfo: 'getChannelInfo',
            getCarousel: 'getCarousel'
        }),
        created() {
            this.$store.dispatch('getmallIndexData', {type: 1});
        },
        methods: {},
        name: 'mall-index',
        components: components
    }

</script>
