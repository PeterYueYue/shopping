<style scoped>
    .shop-info {
        padding: 0.24rem 0.18rem;
        background: #fff;
    }

    .shopName {
        font-size: 0.32rem;
        color: #333;
    }

    .shopScore {
        position: relative;
        height: 0.4rem;
        width: 100%;
        margin-top: 0.2rem;
        overflow: hidden;
    }

    .shopScore .score {
        position: absolute;
        left: 0;
        top: 0.06rem;
        z-index: 2;
        width: 1.34rem;
        height: 0.26rem;
        background: url("http://fstatic.udui.com/static/images/score.png") 0 -0.47rem no-repeat;
        background-size: 1.6rem;
    }

    .shopScore .scorebg {
        position: absolute;
        left: 0;
        top: 0.06rem;
        width: 1.34rem;
        height: 0.24rem;
        z-index: 1;
        background: url("http://fstatic.udui.com/static/images/score.png") no-repeat;
        background-size: 1.6rem;
    }

    .scoreTxt {
        position: absolute;
        left: 1.56rem;
        top: -0.05rem;
        color: #ff7e42;
        font-size: 0.3rem;
    }

    .avgPrice {
        margin-left: 0.18rem;
        color: #666;
    }

    .shop-pay {
        padding: 0.18rem;
        margin-top: 0.18rem;
        background: #fff;
        height: 0.72rem;
        line-height: 0.72rem;
    }

    .shop-pay .voucher {
        font-size: 0.3rem;
        color: #333;
        float: left;
    }

    .shop-pay .payBtn {
        display: block;
        width: 1.8rem;
        height: 0.72rem;
        float: right;
        background: #ff2772;
        color: #fff;
        text-align: center;
        font-size: 0.32rem;
        border-radius: 0.06rem;
    }

    .shopContact {
        padding: 0.18rem;
        margin: 0.18rem 0;
        background: #fff;
        height: 0.54rem;
        line-height: 0.54rem;
    }

    .shopAddr {
        float: left;
        width: 5.58rem;
        height: 0.54rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        border-right: 1px solid #ddd;
        font-size: 0.252rem;
        color: #666;
    }

    .shopAddr {
        font-size: 0.26rem;
    }

    .shopTel {
        float: right;
        text-align: right;
        padding-right: 0.36rem;
    }

    .shop-product-box {
        overflow: hidden;
        max-height: 4.18rem;
    }

    .shopGList h3 {
        background: #fff url(../../assets/images/glistico.png) no-repeat;
        background-size: 0.26rem 0.26rem;
        background-position: 0.2rem 0.22rem;
    }
    .shopHotG h3 {
        background: #fff url(../../assets/images/hotIco.png) no-repeat;
        background-size: 0.26rem 0.26rem;
        background-position: 0.2rem 0.22rem;
    }

    .glist h3 {
        padding: 0 0.18rem 0 0.55rem;
        color: #ff7e42;
        height: 0.72rem;
        line-height: 0.72rem;
        font-size: 0.26rem;
        font-weight: normal;
    }

    .glist .more {
        display: block;
        height: 0.54rem;
        line-height: 0.54rem;
        font-size: 0.3rem;
        text-align: center;
        background: #fff;
        color: #ff2772;
    }

    .shop-logo {
        height: 4.24rem;
        overflow: hidden;
        position: relative;
    }

    .shop-logo img {
        height: auto;
    }
    .shopHotG, .shopGList {
        padding-bottom: 1rem;
    }
    .shop-info-box .shop-logo .imgNum{position: absolute; right:0.2rem;
        bottom:0.2rem; height:0.8rem;
        width:0.8rem; line-height: 1.2rem;
        text-align: center; color:white;
        border-radius: 50%; opacity: 0.5;
        background:url(../../assets/images/imgNum.png) center 0.14rem no-repeat;
        background-size: 35%; background-color:#000;
    }
    .bMap{position: absolute; width:100%; left:0; top:0; background:red; z-index: 10;}
    #closeMap{position: fixed; right:0.2rem;top:0.2rem; font-size: 0.3rem; color:white; text-align: center; line-height: 0.3rem; z-index: 15; background:#333; border:1px solid #999; display: inline-block; width:0.4rem; height:0.4rem; border-radius: 50%; }



</style>
<template>
    <div>
        <headnav v-bind:title="pagetitle" :rightIcon="isCollected" @goSetCollect="setCollect"></headnav>
        <div class="shop-info-box">
            <div class="shop-logo">
                <img :src="shopInfo.logo"/>
                <router-link :to="'/shopPhoto/shopId/'+shopInfo.id">
                    <div class="imgNum" v-show="shopInfo.pictuerNumber">{{shopInfo.pictuerNumber}}张</div>
                </router-link>
            </div>
            <div class="shop-info">
                <div class="shopName">{{shopInfo.name}}</div>
                <div class="shopScore">
                    <p class="score" :style="calculateWidth"></p>
                    <p class="scorebg"></p>
                    <div class="scoreTxt">{{shopInfo.score}}分</div>
                    <!-- <span class="avgPrice"></span> -->
                </div>
            </div>
            <div class="shop-pay clearfix">
                <p class="voucher">买单赠送等额优券</p>
                <router-link class="payBtn" :to="'/inShopPay/'+$route.params.sid">买单</router-link>
            </div>
            <div class="shopContact clearfix" @click="showMap(shopInfo.lng,shopInfo.lat)">
                <div class="shopAddr">
                    <i class="iconfont icon-location"></i>
                    <span>{{shopInfo.street}}</span>
                </div>
                <div class="shopTel">
                    <a href="tel:15901986383"><i class="iconfont icon-dianhua"></i></a>
                </div>
            </div>
        </div>
        <div class="shopGList glist" v-if="shopProList.length>0">
            <h3 class="proticon">店铺商品</h3>
            <div class="shop-product-box">
                <shop-pro-list :proList="shopProList.slice(0,2)" :type="1"></shop-pro-list>
            </div>
            <router-link :to="'/shopProList/sid/'+this.$route.params.sid" class="more">
                查看更多
                <i class="iconfont icon-down"></i>
            </router-link>
        </div>
        <div v-if="!shopProList.length>0 && hotShopProList.length>0" class="shopHotG glist">
            <h3 class="hotproticon">同城热卖</h3>
            <div class="shop-product-box">
                <shop-pro-list :proList="hotShopProList" :type="2"></shop-pro-list>
            </div>
            <router-link :to="'/hotShopProList/sid/'+this.$route.params.sid" class="more">查看更多
                <i class="iconfont icon-down"></i>
            </router-link>
        </div>
        <a v-show="bMapShow" id="closeMap" class="close-map" @click="bMapShow=false">x</a>
        <div class="bMap" v-show="bMapShow">
            <div id="allmap" :style="'height:'+height+'px;width:100%;'"></div>
        </div>
        <dialog-pop v-if="dialogOnOff" v-bind:dialog="dialogConfig" v-on:off="offDialog"></dialog-pop>
    </div>
</template>

<script type="text/javascript">
    import headnav      from './../common/header.vue'
    import shopProList  from './shop-pro-list.vue'
    import dialogPop    from './../common/dialog-pop.vue'
    import {
        mapGetters
    }
        from 'vuex'
    const components = {
        headnav, shopProList, dialogPop
    }
    export default {
        computed: {
            ...mapGetters({ //
                positionData:'positionData',
                tcshopCollect: 'tcshopCollect',
                userInfo: 'userInfo',
                shopInfo: 'shopInfo',
                hotShopProList: 'hotShopProList',
                shopProList: 'shopProList',
                isWx : 'isWx'
            }),
            //计算属性，实时计算是否收藏
            isCollected(){
                if (this.tcshopCollect == 0) {
                    return {
                        iconType: '2',
                        iconClass: 'icon-favor'
                    }
                } else {
                    return {
                        iconType: '2',
                        iconClass: 'icon-favorfill'
                    }
                }
            },
            calculateWidth(){
                //满分的是1.34rem
                let ret = this.shopInfo.score * 5 / 1.34;
                return "width: " + ret + "rem"
            }
        },
        data() {
            return {
                pagetitle: '店铺详情',  //title名称
                dialogOnOff: false,  //弹框开关
                dialogConfig: { //弹框配置
                    autoOff: true,
                    txt: ''
                },
                bMapShow:false,
                height:1300,
                eventCode : 'P004',
                clearEventCode : false,
                linkId : null
            }
        },
        methods: {
            offDialog(){
                this.dialogOnOff = false;
            },
            closeMap(){
                this.mapShowOffOn = false;
            },
            showMap(lng, lat) {
                this.bMapShow = true;
                this.$nextTick(()=>{
                    var This = this;
                    var map = new BMap.Map("allmap");
                    var oH = document.body.scrollHeight == 0 ? document.documentElement.scrollHeight : document.body.scrollHeight;
                    This.height = oH;
                    var geolocation = new BMap.Geolocation();
                    geolocation.getCurrentPosition(function(r){
                        switch (this.getStatus()){
                            case BMAP_STATUS_SUCCESS:
                                var pointer = r.point;
                                var latitude = pointer.lat; //纬度
                                var longitude = pointer.lng;
                                var gc = new BMap.Geocoder();
                                var point = new BMap.Point(lng, lat);
                                map.centerAndZoom(point, 15);
                                gc.getLocation(point, function (rs) {
                                    var addComp = rs.addressComponents;
                                });
                                var marker = new BMap.Marker(point);
                                map.centerAndZoom(point, 14);
                                map.addOverlay(marker);
                                break;
                            case BMAP_STATUS_CITY_LIST:
                            case BMAP_STATUS_UNKNOWN_LOCATION:
                            case BMAP_STATUS_UNKNOWN_ROUTE:
                            case BMAP_STATUS_INVALID_KEY:
                            case BMAP_STATUS_INVALID_REQUEST:
                            case BMAP_STATUS_PERMISSION_DENIED:
                            case BMAP_STATUS_SERVICE_UNAVAILABLE:
                            case BMAP_STATUS_TIMEOUT:
                                map.centerAndZoom("上海", 12);
                                break;
                            default:
                                break;
                        }
                    },{enableHighAccuracy: true});
                })
            },
            setCollect(){
                //是否登录
                if (this.userInfo.isLogin) {
                    if (this.tcshopCollect) {
                        //取消收藏
                        this.$store.dispatch('cancleShopCollect', this.$route.params.sid).then(() => {
                            this.dialogOnOff = true;
                            this.dialogConfig.txt = '取消收藏成功';
                        });
                    } else {
                        this.$store.dispatch('tjTrack',{eventCode:'P010',clearEventCode:false,linkId : this.$route.params.sid}).then(function(){

                        },function(){

                        })
                        //加入收藏
                        this.$store.dispatch('setTcShopCollect', {shopId: this.$route.params.sid}).then(() => {
                            this.dialogOnOff = true;
                            this.dialogConfig.txt = '收藏成功';
                        });
                    }
                } else {
                    this.$router.push('/login');
                }
            }
        },
        mounted: function () {
        },
        components: components,
        created() {
            let This = this;
            this.$store.dispatch('tjTrack',{eventCode:this.eventCode,clearEventCode:this.clearEventCode,linkId : this.$route.params.sid}).then(function(){

            },function(){

            })
            this.$store.dispatch('getShopInfo', {sid: this.$route.params.sid}).then(function(res){
                if(This.isWx){
                    let desc = res.avgprice ? ("人均&yen;" + res.avgprice) : "";
                    let url = window.location.href;
                    This.$store.dispatch('wxShare',{title:res.name,desc:desc,link:url,imgUrl:res.logo})
                }
            },function(res){
                alert(res)
            })
            this.$store.dispatch('getShopProduct', {
                shopId: this.$route.params.sid,
                isShopAllHot: '',
                categoryId: '',
                isNewGoods: '',
                keywords: '',
                intelligentSort: '',
                soldSort: '',
                priceSort: '',
                distanceSort: '',
                pageNo: 1
            });
            this.$store.dispatch('getHotShopProduct', {
                shopId: this.$route.params.sid,
                isShopAllHot: 1,
                categoryId: '',
                isNewGoods: '',
                keywords: '',
                intelligentSort: '',
                soldSort: '',
                priceSort: '',
                distanceSort: '',
                pageNo: 1
            })
        }
    }

</script>
