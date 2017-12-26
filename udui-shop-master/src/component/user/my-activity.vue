<style scoped>
    .my-wallet-box {
    }
    .my-wallet-box .noact{ text-align: center; margin-top:3rem;}
    .my-wallet-box .noact img{width:3.3rem;}
    .my-wallet-box .noact .tips{margin-top:0.1rem;}
    .myActivitylist li{ height:1.7rem; font-size: 0.26rem; background-color:white; border-bottom:1px solid #dadada; padding:0.3rem 0.2rem;  box-sizing: border-box; position: relative;}
    .myActivitylist li .actCon{color:#666666; line-height: 0.35rem; width:80%;}
    .myActivitylist li .actCon .actName{font-size: 0.28rem; line-height: 0.5rem;}
    .myActivitylist li .actCon .actTime{color:#9999a2; }
    .myActivitylist li .num{position: absolute; right:0.5rem; top:50%; margin-top:-0.1rem; font-size: 0.3rem; color:#e40075;}
    .myActivitylist li .num i{color:#99999f; font-size: 0.26rem;}
</style>
<template>
    <div class="my-wallet-box">
        <headnav v-bind:title="pagetitle"></headnav>
        <div v-show="!myActivityData.module.length" class="noact clearfix">
            <img src="../../assets/images/user/noact.png">
            <div class="tips">您还没有任何活动哦~</div>
        </div>
        <div class="myActivitylist" v-show="myActivityData.module.length">
            <ul>
                <li class="clearfix" v-for="item in myActivityData.module">
                    <router-link :to="'/discountStreet/'+item.codeNo+'/areaId/'+0">
                        <div class="actCon">
                            <p class="actName">{{item.name}}</p>
                            <p class="actTime">有效期:{{item.startTimeStr}}~{{item.endTimeStr}}</p>
                        </div>
                        <div class="num">{{item.remainChangce}}次 <i class="iconfont icon-right"></i></div>
                    </router-link>
                </li>
            </ul>
        </div>
        <loading :show="loading"></loading>
    </div>
</template>
<script type="text/javascript">
    import {
        mapGetters
    }
        from 'vuex'
    import headnav from './../common/header.vue'
    import loading      from './../common/loading.vue'
    export default {
        data() {
            return {
                pagetitle: "我的活动",
                loading:true,
                myActivityData:{module:[]},
                eventCode : 'R004',
                clearEventCode : false,
                linkId : null
            }
        },
        computed: mapGetters({
            //不用存状态了
            //myActivityData: 'myActivityData'
        }),
        components: {
            headnav,loading
        },
        methods: {},
        created() {
            this.$store.dispatch('tjTrack',{eventCode:this.eventCode,clearEventCode:this.clearEventCode,linkId : this.linkId}).then(function(){

            },function(){

            })
            this.$store.dispatch('getActivityData', {
                areaId: 0,
                pageNo: 1
            }).then((data)=>{
                this.myActivityData = data;
                this.loading = false;
            });
        }
    }
</script>
