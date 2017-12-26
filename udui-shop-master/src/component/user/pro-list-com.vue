<style scoped>
    .list-box{overflow: hidden;}
    .pro-list,.shop-list {
        height:2.0rem;
        position: relative; background:white;   box-sizing: border-box; padding:0.2rem;
    }
    .pro-list .imgbox,.shop-list .imgbox{float:left; width:1.64rem;height:1.64rem;}
    .pro-list .imgbox img,.shop-list .imgbox img{width:100%; height:100%;}
    .pro-list .pro-info,.shop-list .myshop-info{float:left;font-size: 0.28rem; width:5rem; padding-left:0.2rem;}
    .pro-list .pro-info .proName,.shop-list .myshop-info .shopname{margin-top:0.1rem; margin-bottom:0.2rem; height:0.4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        color:#333;
    }
    .pro-list .pro-info .proPrice{color:#ff2772;}
    .pro-list .pro-info .proPrice .quan{background-color:#ff7e42; font-size: 0.24rem; color:white; padding:0.02rem 0.05rem; border-radius: 0.05rem;}
    .list-box li{width:100%; position: relative; background:white; margin-bottom:0.2rem;border-bottom: 1px solid #999; }
    .list-box li .del-control{position: absolute; left:0.2rem; width:0.3rem; height:0.3rem;top:40%; border:1px solid #333; border-radius: 50%;}
    .list-box li .for-slider{
        transition: all .4s;
        transform: translateX(0.5rem);
        -webkit-transform: translateX(0.5rem);
    }
    .list-box li .del-control i{display: inline-block; font-size: 0.4rem;margin-left:-0.05rem; margin-top:-0.05rem; color:#fb0081;}
    .shop-list .myshop-info .shopAddr{color:#999;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        color:#333;}
    .shop-list .myshop-info .shopPrice{height:0.4rem; position: relative; margin-bottom: 0.1rem;
    }
    .shop-list .myshop-info .shopPrice .scorebg{
        position: absolute;
        top: 0;
        width: 1.34rem;
        height: 0.24rem;
        z-index: 1;
        background: url(../../assets/images/score.png) no-repeat;
        background-size: 1.6rem;
    }
    .shop-list .myshop-info .shopPrice .score{position: absolute; top:0;z-index: 2; width:1rem; height:0.24rem;
        background: url(../../assets/images/score.png) 0 -.46rem no-repeat; background-size: 1.6rem;}
</style>
<template>
    <div class="list-box">
        <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
            <li v-if="selectByTab==0" v-for="(pro,index) in prolistData">
                <router-link :to="'/goodsDetail/pro/'+pro.productId" >
                    <div class="pro-list clearfix" :class="showControl?'for-slider':''">
                        <div class="imgbox">
                            <img :src="pro.productImg" alt="">
                        </div>
                        <div class="pro-info">
                            <div class="proName">{{pro.productName}}</div>
                            <div class="proPrice">
                                ￥{{pro.origPrice}}
                                <span v-if="pro.voucher" class="quan">可抵用{{pro.voucher}}优券</span>
                            </div>
                        </div>
                    </div>
                </router-link>
                <span class="del-control" v-show="showControl" @click="addDelItem(pro,'pro')">
                    <i v-if="pro.delSelect" class="iconfont icon-roundcheckfill"></i>
                </span>
            </li>
            <li v-if="selectByTab==1" v-for="(shop,index) in shopListData">
                <router-link :to="'/shopInfo/sid/'+shop.id" >
                    <div class="shop-list clearfix" :class="showControl?'for-slider':''">
                        <div class="imgbox">
                            <img :src="shop.logo">
                        </div>
                        <div class="myshop-info">
                            <div class="shopname">{{shop.name}}</div>
                            <div class="shopPrice">
                                <p class="score" :style="'width:'+shop.score*5/1.34"></p>
                                <p class="scorebg"></p>
                            </div>
                            <div class="shopAddr ">{{shop.street}}</div>
                        </div>
                    </div>
                </router-link>
                <span class="del-control" v-show="showControl" @click="addDelItem(shop,'shop')">
                      <i v-if="shop.delSelect" class="iconfont icon-roundcheckfill"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script type="text/javascript">
    import {mapGetters}from 'vuex'
    import Vue from 'vue';
    export default {
        data() {
            return {
                delProIds:'',//需要删除的商品ids
                delShopIds:'', //需要删除的商家id
                DeleProids:[], //商品id
                DeleShopids:[],  //店铺Id
                busy: false
            }
        },
        props: ['prolistData','showControl','shopListData','selectByTab'],
        created() {

        },
        computed: {
        },
        methods: {
            loadMore(){
                console.log("加载更多");
            },
            addDelItem(item,type){
                if(type === 'pro'){
                    let Deleids = this.DeleProids;
                    //数组里面没有的话，就去push
                    if(Deleids.indexOf(item.productId) == -1){
                        Deleids.push(item.productId);
                        Vue.set(item, 'delSelect', 1);
                    }else{
                        //有的话就去删除
                        Deleids.splice(Deleids.indexOf(item.productId),1);
                        Vue.set(item, 'delSelect', 0);
                    }
                    this.delProIds = Deleids.toString();
                    this.$store.dispatch('setDelProCollIds',this.delProIds);
                }else if(type === 'shop'){
                    //如果是商店
                    let DeleShopids = this.DeleShopids;
                    if(DeleShopids.indexOf(item.id) == -1){
                        DeleShopids.push(item.id);
                        Vue.set(item, 'delSelect', 1);
                    }else{
                        //有的话就去删除
                        DeleShopids.splice(DeleShopids.indexOf(item.id),1);
                        Vue.set(item, 'delSelect', 0);
                    }
                    this.delShopIds = DeleShopids.toString();
                    this.$store.dispatch('setDelShopCollIds',this.delShopIds);
                }
            },
            setDelCollIds(){
                console.log(this.selectByTab);
            }
        },
        components: {},
    }
</script>
