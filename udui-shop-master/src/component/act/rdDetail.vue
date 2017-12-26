<style scoped>
    .vorRate {
        padding: 0.2rem 0.18rem;
        display: none;
    }
    .vorRate .fl {
        width: 1.62rem;
        height: 1.5rem;
        background: url("./../../assets/images/subject/coupon.png") no-repeat;
        background-size: 100% 100%;
    }
    .vorRate .fl b {
        position: relative;
        left:0.36rem;
        top:0.54rem;
        font-size: 0.36rem;
        color: #FF2772;
    }
    .vorRate .fr {
        width: 5.16rem;
        line-height: 0.5rem;
    }
    .vorRate .gname {
        font-size: 0.25rem;
    }
    .vorRate .gchance, .vorRate .gexpire {
        color: #666;
    }
    .proImg {
        width: 100%;
        overflow: hidden;
    }
    .proImg li {
        float: left;
    }
    .proName {
        padding: 0.24rem 0.18rem 0;
        font-size: 0.25rem;
        line-height: 0.9;
        background: #fff;
        color: #333;
    }
    .proPrice {
        padding: 0.12rem 0.18rem 0.18rem;
        background: #fff;
        position: relative;
    }
    .originPrice {
        color: #999;
        line-height: 0.5rem;
        margin: 0 0 0.12rem;
    }
    .originPrice .jg {
        margin-right: 1.32rem;
    }
    .actPrice {
        color: #FF2772;
    }
    .actPrice b {
        font-size: 0.48rem;
        /*font-weight: normal;*/
    }
    .actPrice span {
        padding: 0 0.1rem;
        background: #ff834d;
        color: #fff;
        border-radius: 0.05rem;
    }
    .moreTip {
        padding: 0.18rem 0;
        text-align: center;
        color: #999;
    }
    .moreTip i {
        position: relative;
        top:0.018rem;
        left: 0.036rem;
    }
    .buyBtn {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 5;
    }
    .buyBtn a {
        display: block;
        width: 100%;
        height: 0.9rem;
        line-height: 0.9rem;
        font-size: 0.3rem;
        color: #fff;
        text-align: center;
        background: #ff2772;
    }
    .buyPopBg {
        position: fixed;
        width:100%;
        height:100%;
        z-index: 4;
        background: rgba(0,0,0,0.5);
        left: 0;
        top:0;
        display: none;
    }
    .buyPop .pro {
        border-bottom: 1px solid #eee;
    }
    .buyPop .sImg {
        width: 2.1rem;
        height: 2.1rem;
        position: relative;
        top:-0.36rem;
        border:1px solid #cdcdcd;
        border-radius: 0.06rem;
        overflow: hidden;
    }
    .buyPop .proN {
        position: absolute;
        left: 2.58rem;
        top:0.36rem;
        width: 3.84rem;
        line-height: 0.34rem;
        font-size: 0.25rem;
        color: #000;
    }
    .buyPop .pick {
        padding-bottom: 0.24rem;
        border-bottom: 1px solid #eee;
    }
    .buyPop .pick h3 {
        height: 0.66rem;
        line-height: 0.66rem;
        font-size: 0.25rem;
        color: #666;
        font-weight: normal;
    }
    .buyPop .pick li {
        float: left;
        margin:0 0.36rem 0 0;
        width: 1.2rem;
        height: 0.504rem;
        text-align: center;
        line-height: 0.504rem;
        border:1px solid #ddd;
        color: #000;
        font-size: 0.25rem;
    }
    .buyPop .pick li.cur {
        color: #ff2772;
        border-color: #ff2772;
    }
    .buyPop .buyNum {
        height: 0.54rem;
        line-height: 0.54rem;
        padding: 0.3rem 0;
        border-bottom: 1px solid #eee;
    }
    .buyPop .buyNum .fl {
        font-size: 0.25rem;
        color: #666;
    }
    .buyPop .buyNum .fr a {
        display: block;
        width: 0.6rem;
        height: 0.54rem;
        float: left;
        text-align: center;
        line-height: 0.54rem;
        background: #eee;
    }
    .buyPop .buyNum .fr a i {
        font-size: 0.24rem;
        color: #000;
    }
    .buyPop .buyNum .fr input {
        display: block;
        float: left;
        margin: 0 0.036rem;
        width: 0.66rem;
        height: 0.54rem;
        text-align: center;
        line-height: 0.54rem;
        background: #eee;
        border:none;
        color: #000;
        font-size: 0.3rem;
    }
</style>

<template>
    <div class="rdDetail">
        <headnav v-bind:title="pagetitle"></headnav>
        <div class="vorRate clearfix" style="display: block;" v-show="actid != 26">
            <div class="fl"><img :src="actData.awardImg"></div>
            <div class="fr">
                <p class="gname">{{actData.awardDesc}}</p>
                <p class="gchance"></p>
                <p class="gexpire">有效期至：{{actData.expireTime}}</p>
            </div>
        </div>
        <banner v-bind:banner="{styleObj:{height:'7rem'},itemData:swiperImgs,dataType:2,filterType:5}" :bannerConfig="bannerConfig"></banner>
        <div class="proName">
            {{reActive.productName}}
        </div>
        <div class="proPrice">
            <p class="originPrice">
                <span class="jg">价格:&nbsp;&nbsp;<del>￥{{reActive.origPrice}}&nbsp;&nbsp;</del></span>
                <span class="yf">运费:&nbsp;&nbsp;{{proInfoData.feight}}</span>
            </p>
            <p class="actPrice">
                优兑价：&yen;
                <b>{{Number(Number(actData.price)+Number(actData.vouchers)).toFixed(2)}}</b>
                <span>可抵用{{actData.vouchers}}优券</span>
            </p>
        </div>
        <div class="moreTip" v-show="false">向下拖动，查看详情<i class="iconfont icon-down"></i></div>
        <div class="dHtml" v-show="true">
            <detailHtml :proId="reActive.productId" v-if="reActive.productId"></detailHtml>
        </div>
        <div class="buyPopBg"></div>
        <div class="buyBtn" @click="showBuyPop('rd')">
            <a>立即领奖</a>
        </div>
        <selectProAttr v-bind:proData="{product:proInfoData}" :reActive="reActive" v-bind:type="buyType" v-on:hide="showPop=false" v-if="showPop"></selectProAttr>
        <dialog-pop v-if="dialogOnOff" v-bind:dialog="dialogConfig" v-on:off="offDialog"></dialog-pop>
    </div>
</template>

<script type="text/javascript">
    import headnav from './../common/header.vue'
    import dialogPop from './../common/dialog-pop.vue'
    import banner from './../common/banner.vue'
    import detailHtml from './detail-html.vue'
    import selectProAttr from './../common/select-pro-attr.vue'
    export default {
        data(){
            return {
                pagetitle: '我的抽奖',//标题配置
                dialogOnOff:false,
                dialogConfig:{
                    autoOff:true,
                    txt:'',
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
                stock:1,
                buyNum:1,
                pickWay:'1',             //隐藏收货方式，默认快递
                tips:'活动奖品，限购一件',
                envid:'',
                actid:'',
                pid:'',
                proInfoData:{},
                reActive:{},
                actData:{},
                swiperImgs:[],
                productName:'',
                buyType:'rd',
                showPop:false,
            }
        },
        methods: {
            showBuyPop:function(buyType){
                this.buyType = buyType;
                this.showPop = !this.showPop;
            },
            offDialog(){
                this.dialogOnOff=false;
            },
            dialoMsg(msg){
                this.dialogOnOff=true;
                this.dialogConfig.txt=msg;
            },
            _initPageData(){
                this.$nextTick(()=>{
                    this.envId = this.$route.params.envId;
                    this.actid = this.$route.params.actId;
                    this.pid = this.$route.params.proId;
                    if(this.envId && this.actid){
                        //获取中奖奖品详情
                        this.$store.dispatch('getWinPro',{envid:this.envId,actid:this.actid}).then((data)=>{
                            this.proInfoData = data.product;
                            this.reActive = data.activity.activityItemDtoList[0];
                            this.actData = data.activity;
                            this.swiperImgs = data.product.imgs;
                            this.productName = data.product.name;
                        },(data)=>{
                            this.dialoMsg(data);
                            setTimeout(()=>{
                                this.$router.push('/index');
                            },2000)
                        });
                    }else{
                        this.dialoMsg('中奖商品信息有误');
                        setTimeout(()=>{
                            this.$router.push('/index');
                        },2000)
                    }
                })
            },
        },
        created(){
            this._initPageData();
        },
        components: {
            headnav, dialogPop,banner,detailHtml,selectProAttr
        }
    }
</script>
