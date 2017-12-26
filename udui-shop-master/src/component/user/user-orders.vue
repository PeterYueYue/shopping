<style>
    .user-orders-box {
        padding-bottom: 0.8rem;
    }
</style>
<template>
    <div class="user-orders-box">
        <headnav v-bind:title="pagetitle" :rightIcon="rightIcon" @rIconEvent="rIconEvent"></headnav>
        <div>
            <!--一张图片不需要轮播-->
            <img src="http://udui.img-cn-shanghai.aliyuncs.com/0/0/83d7d30aae594c719fc1dad654b9cc62@800w_800h_90Q" alt="">
        </div>
        <!--<banner v-bind:banner="{dataType:1,itemData:getOrdersCarousel,filterType:5}"-->
                <!--v-bind:bannerConfig="bannerConfig"></banner>-->
        <order-list :orderList="orderList" @orderCancel="fromChildCancel" @loadMore="loadMore"></order-list>
        <loading :show="loadingOffOn"></loading>
        <backTop v-show="showBackStatus"></backTop>
    </div>
</template>
<script type="text/javascript">
    import {
        mapGetters
    }
        from 'vuex'
    import headnav from './../common/header.vue'
    import banner from './../common/banner.vue'
    import orderList from './order-list.vue'
    import loading from './../common/loading.vue'
    import {showBack} from './../../../static/mUtils'
    import backTop       from      './../common/back-top.vue'
    const components = {
        headnav, banner, orderList, loading, backTop
    }
    export default {
        data() {
            return {
                pagetitle: "我的订单",
                rightIcon: {
                    txt: '售后单'
                },
                showBackStatus: false,
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
                PageNo: 1,
                pageSize: 10,
                orderNo: '',
                orderState: '',
                loadMordOffOn: false,      //防止刚开始就加载二页的bug
                loadingOffOn: true,
                hasNext: false,
                eventCode: 'T004',
                clearEventCode: false,
                linkId: null
            }
        },
        computed: mapGetters({
            getOrdersCarousel: 'getOrdersCarousel',
            orderList: 'orderList'
        }),
        components: components,
        methods: {
            rIconEvent(){
                this.$router.push('/refundList');
            },
            //加载更多
            loadMore(){
                if (this.loadMordOffOn) {
                    if (this.hasNext) {
                        this.loadingOffOn = true;
                        this.PageNo++;
                        let parameter2 = {
                            pageNo: this.PageNo,
                            pageSize: this.pageSize,
                            orderNo: this.orderNo,
                            orderState: this.orderState
                        };
                        this.$store.dispatch('AddUserOrders', parameter2).then((data) => {
                            this.loadingOffOn = false;
                            this.hasNext = data.hasNext;
                        });
                    }
                }
            },
            //取消订单
            fromChildCancel(){
                this.loadingOffOn = true;
                this.PageNo = 1;
                let parameter2 = {
                    pageNo: this.PageNo,
                    pageSize: this.pageSize,
                    orderNo: this.orderNo,
                    orderState: this.orderState
                }
                this.$store.dispatch('getUserOrders', parameter2).then((data) => {
                    this.loadingOffOn = false;
                    this.hasNext = data.hasNext;
                });
            }
        },
        created() {
            this.$store.dispatch('tjTrack', {
                eventCode: this.eventCode,
                clearEventCode: this.clearEventCode,
                linkId: this.linkId
            }).then(function () {

            }, function () {

            })
            //开始监听scrollTop的值，达到一定程度后显示返回顶部按钮
            showBack(status => {
                this.showBackStatus = status;
            });
            //获取banner数据
            let parameter1 = {regionId: -1, type: 2, appLinkId: 'myOrderBanner'};
            this.$store.dispatch('getUserOrdersBanner', parameter1);
            //获取第一页数据
//            this.PageNo = 5;
            let parameter2 = {
                pageNo: this.PageNo,
                pageSize: this.pageSize,
                orderNo: this.orderNo,
                orderState: this.orderState
            }
            this.$store.dispatch('getUserOrders', parameter2).then((data) => {
                this.loadMordOffOn = true;
                this.loadingOffOn = false;
                this.hasNext = data.hasNext;
            });
        }
    }
</script>
