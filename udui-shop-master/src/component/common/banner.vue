<style scoped>

@import '../../../static/swiper.min.css';

.carousel {
    width: 100%;
}

.carousel .swiper-slide img {
    width: 100%;
    height: 100%;
}

.tc-banner {
    width: 100%;
    padding: 0.36rem 0 0.24rem;
    background: #fff;
}
.tc-banner .swiper-slide div{
    padding: 0.15rem 0.4rem;
}
.tc-banner .swiper-slide a{

}
.tc-banner .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
}
.tc-banner .swiper-slide p {
    font-size: 0.26rem;
    text-align: center;
    color: #000;
}

</style>

<template>

<div class="swiper-container" :class="banner.dataType==3?'tc-banner':'carousel'" :style="banner.styleObj">
    <div class="swiper-wrapper" v-if="banner.dataType==1"> <!--indexBanner-->
        <div class="swiper-slide" v-for="d in banner.itemData" @click="toUrl(d.linkedUrl)">
                <img :src="d.linkedImg|imgFilter(banner.filterType)">
        </div>
    </div>
    <div class="swiper-wrapper" v-if="banner.dataType==2"> <!--proDetailBanner-->
        <div class="swiper-slide" v-for="d in banner.itemData"><img :src="d|imgFilter(banner.filterType)"></div>
    </div>
    <!--var href = data[i].linkedId ? (common.mainUrl + '/sublist.html?type=' + data[i].id + '&cate=' + data[i].linkedId) : (common.mainUrl + '/tcShop.html');-->
    <div class="swiper-wrapper" v-if="banner.dataType==3"> <!--tcIndexBanner-->
        <div class="swiper-slide" v-for="data in banner.itemData">
            <router-link :to="data.linkedId ? '/tcShopSublist/type/'+data.id+'/cate/'+data.linkedId : '/tcshop'">
                <div>
                    <img :src="data.image" />
                </div>
                <p>{{data.linkedName}}</p>
            </router-link>
        </div>
    </div>
    <!--分页器 -->
    <div class="swiper-pagination"></div>
</div>

</template>

<script type="text/javascript">

import swiper from '../../../static/swiper-3.4.0.min'
export default {
    props: ['banner','bannerConfig'],
    data(){
        return{

        }
    },
    mounted: function() {
        this.$nextTick(function() {
            let mySwiper = new Swiper(
                '.swiper-container', this.bannerConfig
            )
        })
    },
    methods : {
        toUrl(url){
            if(this.$route.path == "/userOrders"){
                this.$store.dispatch('tjTrack',{eventCode:'A007',clearEventCode:true,linkId : null}).then(function(){},function(){})
                this.$router.push(url)
              
            }else{
                this.$router.push(url)
            }
        }
    },
    created() {
        console.log(this.banner);
    }
}

</script>
