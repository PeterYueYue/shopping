<style scoped>
    .product-detail .proName {padding: 0  0.2rem; height:0.8rem; line-height:0.8rem;font-size: 0.28rem; background:white; white-space:nowrap; text-overflow:ellipsis; -o-text-overflow:ellipsis; overflow:hidden;}
    .product-detail .proPrice{padding: 0.1rem  0.2rem; font-size: 0.26rem; background:white;}
    .product-detail .proPrice .price{font-size: 0.6rem; color:#ff2772; font-weight: bold;}
    .product-detail .proPrice .oldprice{text-decoration:line-through; color:#999;}
    .product-detail .proPrice .sales{padding-left:3.5rem;}
    .product-detail h3.shoptitle{padding:0.2rem;border-top:1px solid #999; border-bottom:1px solid #999; background:white;}
    .product-detail .tcshopInfo{padding:0.1rem 0.2rem; line-height: 0.4rem; position: relative; border-bottom: 1px solid #999; background:white;}
    .product-detail .tcshopInfo .tcshopname{color:black;}
    .product-detail .tcshopInfo .tcshopAddr{color:#999;}
    .product-detail .tcshopInfo .iphone{position: absolute; right:0.3rem; top:0.1rem; border-left:1px solid #ddd; padding-left:0.2rem; height:0.8rem;line-height: 0.8rem;}
    .product-detail .tcshopInfo .iphone i{font-size: 0.6rem; color:#ff2772;}
    .product-detail .DetailHtmlTitle{margin-top:0.2rem; height:0.8rem; line-height: 0.8rem; background:white; padding-left:0.2rem; border-top:1px solid #999;}
    .product-detail .btn-purple{height:1rem; width:100%; background-color:#ff2772; bottom:0; font-size: 0.3rem; text-align: center; line-height: 1rem; color:white; position: fixed; }

     .product-detail .buyPop {  position: fixed;  z-index: 11;  width: 7.1rem;  padding: 0 0.2rem 0.84rem;  background: #fff;  left: 0;  bottom: 0;  }
     .product-detail .buyPop .closePop {  display: block;  width: 0.32rem;  height: 0.32rem;  position: absolute;  right: 0.18rem;  top:0.36rem;  font-size: 0.32rem;  color: #666;  border:none;  text-decoration: none;  }
     .product-detail .buyPop .pro {  border-bottom: 1px solid #eee;  }
     .product-detail .buyPop .sImg {  width: 2.1rem;  height: 2.1rem;  position: relative;  top:-0.36rem;  border:1px solid #cdcdcd;  border-radius: 0.06rem;  overflow: hidden;  }
     .product-detail .buyPop .proN {  position: absolute;  left: 2.6rem;  top:0.36rem;  width: 3.8rem;  line-height: 0.36rem;  font-size: 0.26rem;  color: #000;  }
     .product-detail .buyPop .pickWay {  padding-bottom: 0.24rem;  border-bottom: 1px solid #eee;  }
     .product-detail .buyPop .pickWay h3 {  height: 0.66rem;  line-height: 0.66rem;  font-size: 0.25rem;  color: #666;  font-weight: normal;  }
     .product-detail .buyPop .pickWay li {  float: left;  margin:0 0.36rem 0 0;  width: 1.2rem;  height: 0.5rem;  text-align: center;  line-height: 0.5rem;  border:1px solid #ddd;  color: #000;  font-size: 0.25rem;  }
     .product-detail .buyPop .pickWay li.cur { color: #ff2772; border-color: #ff2772;  }
     .product-detail .buyPop .buyNum {  height: 0.54rem;  line-height: 0.54rem;  padding: 0.3rem 0;  border-bottom: 1px solid #eee;  }
     .product-detail .buyPop .buyNum .fl {  font-size: 0.25rem;  color: #666;  }
     .product-detail .buyPop .buyNum .fr a {  display: block;  width: 0.6rem;  height: 0.54rem;  float: left;  text-align: center;  line-height: 0.54rem;  background: #eee;  }
     .product-detail .buyPop .buyNum .fr a i {  font-size: 0.25rem;  color: #000;  display: block;  }
     .product-detail .buyPop .buyNum .fr input {  display: block;  float: left;  margin: 0 0.036rem;  width: 0.66rem;  height: 0.54rem;  text-align: center;  line-height: 0.54rem;  background: #eee;  border:none;  color: #000;  font-size: 0.32rem;  }
     .product-detail .buyPop .qrjr{  width: 100%;  display: inline-block;  background-color: #eb2258;  color: #fff;  text-align: center;  height: 0.72rem;  line-height: 0.72rem;  font-size: 0.3rem;  border-radius: 0.06rem;  }
     .slip-enter-active, .slip-leave-active {
         transition: all .5s;
         transform: translateY(0);
     }
     .slip-enter, .slip-leave-active {
         transform: translateY(100%);
     }
</style>
<template>
    <div class="product-detail">
        <headnav v-bind:title="pagetitle" :rightIcon="{iconClass:tcProIsCollected ? 'icon-favorfill' : 'icon-favor',iconType: '1'}" @goSetCollectPro="setCollect"></headnav>
        <banner v-bind:banner="{styleObj:{height:'7.5rem'},itemData:tcshopProductInfo.imgs,dataType:2,filterType:5}"
                :bannerConfig="bannerConfig"></banner>
        <p class="proName">{{tcshopProductInfo.name}}</p>
        <div class="proPrice">
            <span class="price">￥{{tcshopProductInfo.price}}</span>
            <span class="oldprice">￥{{tcshopProductInfo.oldPrice}}</span>
            <span class="sales">已售{{tcshopProductInfo.sold}}</span>
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
        <h3 class="DetailHtmlTitle">图文详情</h3>
        <div class="dCon" v-html="removeStyle(tcProductDetailHtml)"></div>
        <div class="btn-purple" @click="showBuyPop">立即购买</div>
        <transition name="slip">
            <div class="buyPop" v-show="showPop">
                <s class="closePop iconfont icon-roundclose" @click="showBuyPop()"></s>
                <div class="pro">
                    <div class="sImg"><img :src="tcshopProductInfo.thumImage"></div>
                    <div class="proN">￥{{tcshopProductInfo.price}}</div>
                </div>
                <div class="pickWay" v-if="false">
                    <h3>提货方式</h3>
                    <ul class="clearfix">
                        <li>到店自提</li>
                        <li>送货上门</li>
                    </ul>
                </div>
                <div class="buyNum clearfix">
                    <div class="fl">
                        购买数量
                    </div>
                    <div class="fr">
                        <a class="minus" @click="buyCountMinus()" ><i class="iconfont icon-move"></i></a>
                        <input type="number" class="numInput" :value="buyCount" readonly="readonly"/>
                        <a class="plus" @click="buyCountPlus()"><i class="iconfont icon-add"></i></a>
                    </div>
                </div>
                <a class="qrjr" @click="setTradePros()">确认</a>
            </div>
        </transition>
         <layer v-if="showPop" @click.native="showBuyPop()"></layer>
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
    import layer from './../common/layer.vue'
    export default{
        data(){
            return {
                pagetitle: '商品详情',   //header标题
                isLoading:true,     //加载动画
                dialogOnOff:false,  //弹框的开关
                dialogConfig : {    //弹框配置
                    autoOff:true,
                    txt:''
                },
                buyCount:1,    //默认购买数量
                showPop:false,   //是否现实遮罩层
                eventCode : 'P001',
                clearEventCode : false,
                linkId : null
            }
        },
        computed: {
            ...mapGetters({
                tcProIsCollected: 'tcProIsCollected',
                tcshopProductInfo: 'tcshopProductInfo',
                tcProductDetailHtml:'tcProductDetailHtml'
            }),
        },
        components: {
            headnav, banner,loading,dialogPop,layer
        },
        methods: {
            buyCountMinus(){
                this.buyCount>1&&this.buyCount--;
            },
            buyCountPlus:function(){
                this.buyCount<this.tcshopProductInfo.stock&&this.buyCount++;
            },
            setTradePros(){
                console.log('去下单页面');
            },
            showBuyPop(buyType){
                this.showPop = !this.showPop;
            },
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
                    this.$store.dispatch('tjTrack',{eventCode:'P009',clearEventCode:this.clearEventCode,linkId : this.$route.params.proId}).then(function(){

                    },function(){

                    })
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
            this.$store.dispatch('tjTrack',{eventCode:this.eventCode,clearEventCode:this.clearEventCode,linkId : this.$route.params.proId}).then(function(){

            },function(){

            })
            this.proId = this.$route.params.proId;
            if(this.tcshopProductInfo.goodsId == this.$route.params.proId){
                this.isLoading = false;
                return false;
            }
            this.$store.dispatch('getTcProductInfo', this.$route.params.proId).then(()=>{
                this.isLoading = false;
            });
        }
    }
</script>
