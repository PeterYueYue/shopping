<style>
@import '../static/base.css';
@import 'assets/iconfont/iconfont.css';
</style>

<template>
<div style="height:100%">
    <cover :show="loading"></cover>
    <router-view v-if="!loading" class="view a" name="main"></router-view>
    <router-view class="view b" name="footerMenu"></router-view>
</div>
</template>

<script>
import cover        from      './component/cover.vue' //欢迎动画组件
import common       from      './../static/common.js'
import {
    mapGetters
}
from 'vuex'
const components = {
    cover
}
export default {
    data() {
        return {
        }
    },
    computed: mapGetters({
        loading : "loading"
    }),
    methods:{
    },
    created() {
        let that    = this;
        let nowUrl  = common.processingURL.nowUrl;
        let appId   = 'wx19b6308dd0519cb0';
        let code    = common.processingURL.getQueryString('code');
        console.log(common.browserInfo.isWx(),'hj');
        if(common.browserInfo.isWx()){
            this.$store.dispatch('getWxShare',{url:nowUrl}).then(function(data){},function(){});
            this.$store.dispatch('autoLogin',{"code": code,"resouce":""});
        }
        this.$store.dispatch('getAppInitData');
    },
    components: components
}
</script>
