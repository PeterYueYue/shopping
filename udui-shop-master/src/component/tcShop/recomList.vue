<style scoped>
    .hasVor{
        height: 0.9rem;
        line-height: 0.9rem;
        background: #fff;
        margin-bottom: 0.18rem;
        text-align: center;
        font-size: 0.3rem;
    }
    .hasVor b {
        color: #FF2772;
        font-weight: normal;
    }
</style>

<template>
    <div class="recomList">
        <headnav v-bind:title="pagetitle"></headnav>
        <div class="hasVor">
            当前可使用优券余额：<b>5105</b>
        </div>
        <gl-goods-filter :navData="navData" :glFilter="glFilter" @filterPro="filterPro" @doSort="filterPro"></gl-goods-filter>
        <tcHotList :proList="glListData" @loadMord="loadMord"></tcHotList>
        <dialog-pop v-if="dialogOnOff" v-bind:dialog="dialogConfig" v-on:off="offDialog"></dialog-pop>
        <backTop v-show="showBackStatus"></backTop>
        <loading :show="isLoading"></loading>
    </div>
</template>

<script type="text/javascript">
    import headnav from './../common/header.vue'
    import dialogPop from './../common/dialog-pop.vue'
    import store from './../../../static/store'
    import backTop       from      './../common/back-top.vue'
    import glGoodsFilter from './gl-goods-filter.vue'
    import tcHotList    from      './../tcShop/tc-hot-list.vue'
    import {showBack}           from       './../../../static/mUtils'
    import loading  from './../common/loading.vue'
    export default {
        data(){
            return {
                pagetitle: '关联推荐',//标题配置
                hasNavCache:false,
                navData:{},
                showBackStatus:false,
                loadMoreOffOn:false,
                dialogOnOff : false,
                isLoading:true,
                dialogConfig : {
                    autoOff:true,
                    txt:''
                },
                glListData:{},
                glFilter:{
                    areaId: undefined,
                    pageNo: 1,
                    categoryId: undefined,
                    voucherPriceStart: undefined,
                    voucherPriceEnd: undefined,
                    deduceSort: undefined,
                    soldSort: undefined,
                    priceSort: undefined,
                },
                eventCode : 'P007',
                clearEventCode : false,
                linkId : null
            }
        },
        methods: {
            offDialog(){
                this.dialogOnOff = false;
            },
            filterPro(filter){
                this.isLoading = true;
                this.$store.dispatch('getRecmdList',filter).then((data)=>{
                    this.glListData = data;
                    this.isLoading = false;
                });
            },
            loadMord(){
                if(this.loadMoreOffOn){
                    this.isLoading = true;
                    this.glFilter.pageNo++;
                    this.$store.dispatch('getRecmdList',JSON.parse(JSON.stringify(this.glFilter))).then((data)=>{
                        data.forEach((item)=>{
                            this.glListData.push(item);
                        });
                        this.isLoading = false;
                    });
                }
            }
        },
        created(){
            this.$store.dispatch('tjTrack',{eventCode:this.eventCode,clearEventCode:this.clearEventCode,linkId : this.linkId}).then(function(){

            },function(){

            })
            //开始监听scrollTop的值，达到一定程度后显示返回顶部按钮
            showBack(status => {
                this.showBackStatus = status;
            });

            if(this.$route.params.isTc == 0){
                this.glFilter.areaId = 0;
            }else{
                this.glFilter.areaId = sessionStorage.getItem('setAreaId') ? sessionStorage.getItem('setAreaId'):'' ;
            }

            //获得列表数据
            this.$store.dispatch('getRecmdList',JSON.parse(JSON.stringify(this.glFilter))).then((data)=>{
               this.glListData = data;
            });

            //获取用户账户信息
            this.$store.dispatch('getUserAccount').then((data)=>{
                console.log(data);
            });
            //初始化关联页面的数据
            this.$store.dispatch('checkUpDate',{
                verCode: 0,
                device: 0,
                phoneType: 0
            }).then((data)=>{
                if(store.has('GlGoodsNav')){
                    this.hasNavCache = true;
                    this.navData  = JSON.parse(localStorage.getItem('GlGoodsNav'));
                }else{
                    this.$store.dispatch('getAllCate').then((data)=>{
                        this.navData = data.children;
                        this.loadMoreOffOn = true;
                        this.isLoading = false;
                    },(data)=>{
                        this.dialogOnOff = true;
                        this.dialogConfig.txt = data;
                    })
                }
            });
        },
        components: {
            headnav, dialogPop,glGoodsFilter,tcHotList,backTop,loading
        }
    }
</script>
