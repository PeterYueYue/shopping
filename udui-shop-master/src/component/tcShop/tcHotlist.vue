<style scoped>

</style>

<template>
    <div class="tcHotlist">
        <headnav v-bind:title="pagetitle"></headnav>
        <div style="position: absolute; width:100%; height:0.8rem; z-index: 10;">
            <shop-filter :hotTcFilter="hotTcFilter"  @goFilter="goFilter"></shop-filter>
        </div>
        <div style="padding-top:0.8rem;">
            <tcHotList :proList="pageListData" @loadMord="loadMord"></tcHotList>
        </div>
        <loading :show="shopListLoading"></loading>
        <dialog-pop v-if="dialogOnOff" v-bind:dialog="dialogConfig" v-on:off="offDialog"></dialog-pop>
        <backTop v-show="showBackStatus"></backTop>
    </div>
</template>

<script type="text/javascript">
    import {
        mapGetters
    }
        from 'vuex'
    import headnav from './../common/header.vue'
    import shopFilter from './hotTcMoreFilter.vue'
    import loading  from './../common/loading.vue'
    import dialogPop from './../common/dialog-pop.vue'
    import tcHotList    from      './../tcShop/tc-hot-list.vue'
    import backTop       from      './../common/back-top.vue'
    import {showBack} from './../../../static/mUtils'
    export default {
        data(){
            return {
                pagetitle: '热卖商品',//标题配置
                shopListLoading:true,
                pageListData:{},
                loadMoreOffOn:false,
                showBackStatus:false,
                hotTcFilter:{
                    areaId:undefined,
                    pageNo:1,
                    categoryId:undefined,
                    tradeId:undefined,
                    lon:0,
                    lat:0,
                    intelligentSort:undefined,
                    distanceSort:undefined
                }
            }
        },
        computed: mapGetters({

        }),
        methods: {
            loadMord(){
                if(this.loadMoreOffOn){
                    this.shopListLoading = true;
                    this.hotTcFilter.pageNo++;
                    //根据过滤条件去拿数据
                    this.$store.dispatch('getHotShopList',JSON.parse(JSON.stringify(this.hotTcFilter))).then((data)=>{
                        data.forEach((item)=>{
                            this.pageListData.push(item);
                        });
                        this.shopListLoading = false;
                    });
                }
            },
            goFilter(type,val){
                this.shopListLoading = true;
                this.hotTcFilter.intelligentSort = this.hotTcFilter.distanceSort = undefined;
                this.hotTcFilter[type] = val;
                //根据过滤条件去拿数据
                this.$store.dispatch('getHotShopList',JSON.parse(JSON.stringify(this.hotTcFilter))).then((data)=>{
                    this.shopListLoading = false;
                    this.pageListData = data;
                });
            }
        },
        created(){
            //开始监听scrollTop的值，达到一定程度后显示返回顶部按钮
            showBack(status => {
                this.showBackStatus = status;
            });
            //设置areaId
            this.hotTcFilter.areaId = sessionStorage.getItem('setAreaId') ? sessionStorage.getItem('setAreaId'):'' ;

            // 初始化头部的数据（筛选的数据）
            this.$store.dispatch('getTcShopInitData', {id: this.hotTcFilter.areaId})

            //根据过滤条件去拿数据
            this.$store.dispatch('getHotShopList',JSON.parse(JSON.stringify(this.hotTcFilter))).then((data)=>{
                this.shopListLoading = false;
                this.pageListData = data;
                this.loadMoreOffOn = true;
            });

        },
        components: {
            headnav, dialogPop, shopFilter,tcHotList,loading,backTop
        }
    }
</script>
