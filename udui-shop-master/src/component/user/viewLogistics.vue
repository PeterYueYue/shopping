<style scoped>
    #add-info {
        padding: 0.18rem;
        background-color: #fff;
    }
    .add-name {
        height: 0.66rem;
        line-height: 0.66rem;
        font-size: 0.288rem;
        color: #333;
        padding-left: 0.54rem;
    }

    .add-name span {
        padding-left: 0.54rem;
    }

    .adds {
        height: 0.54rem;
        line-height: 0.54rem;
        font-size: 0.252rem;
        color: #666;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .adds i {
        font-size: 0.36rem;
        padding-right: 0.18rem;
    }
    .logistic-content{
        margin-top: 0.18rem;
    }
    .wl-content .wl-tit {
        padding: 0 0.18rem;
        height: 0.72rem;
        font-size: 0.252rem;
        line-height: 0.72rem;
        background-color: #ff833e;
        color: #fff;
    }

    .wl-content .wl-tit span {
        float: right;
    }

    .pro-info img {
        display: inline-block;
        width: 1.62rem;
        height: 1.62rem;
        float: left;
    }

    .pro-info {
        padding: 0.3rem 0.18rem;
        background-color: #f7f7f7;
    }

    .pro-info p {
        font-size: 0.252rem;
        line-height: 0.78rem;
    }

    .pro-info p span {
        float: right;
        color: #FF2772;
    }

    .pro-name {
        width: 5.76rem;
        height: 0.66rem;
        float: left;
        color: #333;
        margin-left: 0.15rem;
        overflow: hidden;
        padding: 0!important;
    }

    .pro-name a {
        width: 100%;
        font-size: 0.252rem;
        line-height: 0.9rem;
    }

    .pro-price {
        width: 4.8rem;
        float: left;
        line-height: 0.42rem;
        color: #333;
        margin-top: 0.15rem;
        margin-left: 0.15rem;
        font-size: 0.252rem;
        height: 0.33rem;
    }

    .pro-attribute {
        width: 5.31rem;
        color: #999;
        float: left;
        margin-top: 0.15rem;
        margin-left: 0.15rem;
        height: 0.33rem;
        line-height: 0.33rem;
        font-size: 0.252rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .pro-num {
        margin-top: 0.15rem;
        width: 0.51rem;
        float: right;
        text-align: right;
        height: 0.33rem;
        line-height: 0.42rem;
    }

    .wl-det {
        background-color: #fff;
        padding: 0.18rem;
    }

    .wl-det p {
        font-size: 0.252rem;
        color: #666;
    }

    .wl-det p span {
        color: #333;
    }

    .track-rcol {
        width: 100%;
        margin-top: 0.18rem;
    }

    .track-list {
        margin: 0.12rem;
        position: relative;
    }

    .track-list li {
        position: relative;
        padding: 0.3rem 0 0 0;
        line-height: 0.72rem;
        border-left: 1px solid #d9d9d9;
        color: #666;
    }
    .track-list li:first-child{
        padding-top: 0;
    }
    .track-list li:last-child .node-icon {
        background-position: 0 -0.15rem;
        background-size: 100%;
        top: 0.3rem;
    }

    .track-list li .node-icon {
        position: absolute;
        left: -0.168rem;
        width: 0.324rem;
        height: 0.324rem;
        background: url(../../assets/images/user/order-icons.png) center -1.32rem no-repeat;
        background-size: 150%;
    }

    .track-list li .node {
        float: left;
        margin-left: 0.39rem;
        border-bottom: 1px solid #ddd;
        padding-bottom: 0.18rem;
    }

    .track-list li .time {
        margin-right: 0.24rem;
        top: 0.24rem;
        float: left;
        color: #999;
        line-height: 0.9rem;
        padding-top: 0.12rem;
    }

    .track-list li .txt {
        width: 6.6rem;
        top: 0.24rem;
        float: left;
        vertical-align: middle;
    }

    .track-list li.first .time {
        margin-right: 0.24rem;
    }

    .track-list li.first .txt {
        width: 6.6rem;
    }
    .add-info {
        padding: 0.2rem 0.18rem 0.2rem;
        margin-bottom: 0.18rem;
        background-color:white;
    }
    .add-info .add-name {
        padding-left: 0.46rem;
        color: #333333;
        font-size: 0.3rem;
    }
     .add-info .add-name span {
        padding-left: 0.54rem;
    }
    .add-info .adds {
        font-size: 0.26rem;
        color: #666666;
    }
    .add-info .adds .icon-position {
        padding: 0 0.23rem;
        background: url("../../../src/assets/images/icn/icon-position.png") center center no-repeat;
        background-size: 0.21rem 0.27rem;
    }
</style>
<template>
    <div class="wuliu">
        <headnav v-bind:title="pagetitle"></headnav>
        <div class="add-info">
            <p class="add-name">{{orderInfoData.receiverName}}<span>{{orderInfoData.userName}}</span></p>
            <p class="adds"><i class="icon-position"></i>{{orderInfoData.receiverArea + orderInfoData.receiverAddress}}</p>
        </div>
        <div class="logistic-content">
            <div class="wl-content">
                <div class="wl-det">
                    <p id="wl-no">运单编号：<span>{{ProStreamInfo.deliveryNo}}</span></p>
                    <p id="wl-com">快递公司：<span>{{ProStreamInfo.companyName}}</span></p>
                    <p>物流跟踪：</p>
                    <div class="track-rcol" >
                        <!--有物流的情况-->
                        <div v-if="ProStreamInfo.flowStat" class="track-list">
                            <ul class="clearfix">
                                <li class="clearfix" v-for="data in ProStreamInfo.flowStat">
                                    <i class="node-icon"></i>
                                    <div class="node ">
                                        <span class="txt">data.context</span>
                                        <span class="time">data.time</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!--没有物流的信息-->
                        <div v-else>
                            <ul class="clearfix">
                                <li>暂无物流信息</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <dialog-pop v-if="dialogOnOff" v-bind:dialog="dialogConfig" v-on:off="offDialog"></dialog-pop>
    </div>
</template>

<script type="text/javascript">
    import {
        mapGetters
    }
        from 'vuex'
    import headnav from './../common/header.vue'
    import dialogPop from './../common/dialog-pop.vue'
    export default {
        data(){
            return {
                pagetitle: '物流详情页面',//标题配置
                ProStreamInfo:{},
            }
        },
        computed: {
            ...mapGetters({
                orderInfoData: 'orderInfoData'
            }),
        },
        methods: {},
        created(){
            this.$store.dispatch('ProStreamInfo',{orderItemId:this.$route.params.id}).then((data)=>{
                this.ProStreamInfo = data;
            },(data)=>{
                alert(data);
            });
        },
        components: {
            headnav, dialogPop
        }
    }
</script>
