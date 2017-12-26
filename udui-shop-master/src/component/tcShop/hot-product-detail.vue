<style scoped>
    .hot-product-detail .proName {padding: 0  0.2rem; height:0.8rem; line-height:0.8rem;font-size: 0.32rem; color:black; background:white;}
    .hot-product-detail .proTxtInfo{height:0.6rem; line-height: 0.6rem; padding:0 0.2rem; background-color:white; color:#999; font-size: 0.26rem;}
    .hot-product-detail .proTxtInfo .left{float:left;}
    .hot-product-detail .proTxtInfo .left span{text-decoration: line-through; margin-right:0.2rem;}
    .hot-product-detail .proTxtInfo .right{float:right;}
    .hot-product-detail h3.shoptitle{padding:0.2rem;border-top:1px solid #999; border-bottom:1px solid #999; background:white;}
    .hot-product-detail .tcshopInfo{padding:0.1rem 0.2rem; line-height: 0.4rem; position: relative; border-bottom: 1px solid #999; background:white;}
    .hot-product-detail .tcshopInfo .tcshopname{color:black;}
    .hot-product-detail .tcshopInfo .tcshopAddr{color:#999;}
    .hot-product-detail .tcshopInfo .iphone{position: absolute; right:0.3rem; top:0.1rem; border-left:1px solid #ddd; padding-left:0.2rem; height:0.8rem;line-height: 0.8rem;}
    .hot-product-detail .tcshopInfo .iphone i{font-size: 0.6rem; color:#ff2772;}
    .hot-product-detail .DetailHtmlTitle{margin-top:0.2rem; height:0.8rem; line-height: 0.8rem; background:white; padding-left:0.2rem; border-top:1px solid #999;}
    .hot-product-detail .money{padding:0 0.2rem; position: relative; margin-bottom:0.16rem; height:1rem;line-height: 1rem; background-color:white; border-bottom:1px solid #ccc;}
    .hot-product-detail .money .l{color:#ff347a; font-size: 0.36rem;}
    .hot-product-detail .money .c{background-color:#ff7e42; padding:0.02rem 0.1rem; margin-left:0.1rem; border-radius: 0.05rem; color:white;}
    .hot-product-detail .money .r{position: absolute; right:0.3rem; top:0.2rem; line-height: 0.26rem; border-radius: 0.05rem; color:white; padding:0.2rem; display: inline-block;  background-color:#ff2772;}
</style>
<template>
    <div class="hot-product-detail">
        <headnav v-bind:title="pagetitle" :rightIcon="{iconClass:tcProIsCollected ? 'icon-favorfill' : 'icon-favor',iconType: '1'}" @goSetCollectPro="setCollect"></headnav>
        <banner v-bind:banner="{styleObj:{height:'7.5rem'},itemData:tcshopProductInfo.imgs,dataType:2,filterType:5}"
                :bannerConfig="bannerConfig"></banner>
        <p class="proName">{{tcshopProductInfo.name}}</p>
        <div class="proTxtInfo clearfix">
            <p class="left"><span>门店价:￥198</span>已售:35</p>
            <p class="right">库存：20000</p>
        </div>
        <div class="money">
            <span class="l">¥<em class="on">198.00</em></span>
            <span class="c">可抵用<em>56</em>优券</span>
            <span class="r">立即购买</span>
        </div>
        <h3 class="shoptitle">适用商户</h3>
        <div class="tcshopInfo clearfix">
            <router-link :to="'/shopInfo/sid/'+tcshopProductInfo.shopId">
                <p class="tcshopname">{{tcshopProductInfo.shopName}}</p>
                <p class="tcshopAddr">{{tcshopProductInfo.shopAddress}}</p>
            </router-link>
            <a class="iphone" href="tel:15901986383">
                <i class="iconfont icon-dianhua"></i>
            </a>
        </div>
        <h3 class="DetailHtmlTitle">同城热卖详情</h3>
        <div class="dCon" v-html="removeStyle(tcProductDetailHtml)"></div>
        <loading :show="isLoading"></loading>
        <dialog-pop v-if="dialogOnOff" v-bind:dialog="dialogConfig" v-on:off="offDialog"></dialog-pop>
    </div>
</template>
<script type="text/javascript">
    import {
        mapGetters
    }
        from 'vuex'
    import headnav from './../common/header.vue'
    import banner from './../common/banner.vue'
    import loading  from './../common/loading.vue'
    import dialogPop    from './../common/dialog-pop.vue'
    export default{
        data(){
            return {
                pagetitle: '商品详情',
                isLoading:true,
                dialogOnOff:false,
                proId:'',
                dialogConfig : {
                    autoOff:true,
                    txt:''
                }
            }
        },
        computed: {
            ...mapGetters({
                tcProIsCollected: 'tcProIsCollected',
                tcshopProductInfo: 'tcshopProductInfo',
                tcProductDetailHtml:'tcProductDetailHtml',
                isWx:'isWx'
            }),
        },
        components: {
            headnav, banner,loading,dialogPop
        },
        methods: {
            offDialog : function(){
                this.dialogOnOff = false;
            },
            setCollect(){
                if(this.tcProIsCollected){
                    this.$store.dispatch("cancleTcProIsCollected",{productId: this.$route.params.proId}).then(()=>{
                        this.dialogOnOff = true;
                        this.dialogConfig.txt = '取消收藏成功';
                    });
                }else{
                    this.$store.dispatch("setTcProIsCollected",{productId: this.$route.params.proId}).then(()=>{
                        this.dialogOnOff = true;
                        this.dialogConfig.txt = '收藏成功';
                    });
                }
            },
            removeStyle:function(_html){
                return _html.replace(/width.*?\s|height.*?\s/gi,'');
            }
        },
        mounted(){
            var This = this;
            this.proId = this.$route.params.proId;
            if(this.tcshopProductInfo.goodsId == this.$route.params.proId){
                this.isLoading = false;
                return false;
            }
            this.$store.dispatch('getTcProductInfo', this.$route.params.proId).then((data)=>{
                this.isLoading = false;
                if(This.isWx){
                    let url = window.location.href;
                    This.$store.dispatch('wxShare',{title:data.product.shopName,desc:data.product.name,link:url,imgUrl:data.product.proThumImg})
                }
            });
        }
    }
</script>
