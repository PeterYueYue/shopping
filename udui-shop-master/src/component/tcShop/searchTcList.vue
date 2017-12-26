<style scoped>

</style>
<template>
    <div class="searchTcList">
        <div style="position: fixed; z-index: 100; width:100%; top:0;">
            <headnav v-bind:title="pagetitle"></headnav>
            <shop-filter></shop-filter>
        </div>
        <div style="padding-top:1.5rem;" v-if="shopListShow">
            <shop-list :shop-list="tcShopList"></shop-list>
        </div>
        <div style="padding-top:1.5rem;" v-if="proListShow">
            <shop-pro-list :proList="tcProList" :type="1"></shop-pro-list>
        </div>
        <dialog-pop v-if="dialogOnOff" v-bind:dialog="dialogConfig" v-on:off="offDialog"></dialog-pop>
        <back-top :show="showBackStatus"></back-top>
        <loading :show="shopListLoading"></loading>
    </div>
</template>

<script type="text/javascript">
    import headnav from './../common/header.vue'
    import dialogPop from './../common/dialog-pop.vue'
    import loading  from './../common/loading.vue'
    import shopFilter from './shop-filter.vue'
    import shopList from './shop-list.vue'
    import backTop from './../common/back-top.vue'
    import {showBack} from './../../../static/mUtils'
    import shopProList  from './shop-pro-list.vue'
    import {
        mapGetters
    }
        from 'vuex'
    export default {
        data(){
            return {
                pagetitle: this.$route.params.type,//标题配置
                showBackStatus:false,
                shopListShow:false,
                proListShow:false,
            }
        },
        computed: {
            ...mapGetters({
                //app组件中存入的状态
                positionState: 'positionState',
                //位置信息
                positionData: 'positionData',
                //过滤条件状态
                filterState: 'tcFilterState',
                //店铺列表
                tcShopList: 'tcShopList',
                //商品列表
                tcProList: 'tcProList',
                //商品的加载动画
                shopListLoading: 'shopListLoading',
                //最后一次的区域Id
                lastAreaId: 'lastAreaId'
            }),
        },
        methods: {},
        created(){
            //开始监听scrollTop的值，达到一定程度后显示返回顶部按钮
            showBack(status => {
                this.showBackStatus = status;
            });
            this.$store.dispatch('setLastAreaId', this.filterState.areaId);
            this.$store.dispatch('initTcPageNo'); //初始化第一页
            this.$store.dispatch('setTcFilterState',{
                searchStr:this.$route.params.searchStr
            });
            if(this.$route.params.type == '商家'){
                this.shopListShow = true;
                this.$store.dispatch('getShopList', this.filterState);//根据过滤条件去拿数据
            }else{
                this.proListShow = true;
                this.$store.dispatch('getTcProList', this.filterState);//根据过滤条件去拿数据
            }
            this.$store.dispatch('getTcShopInitData', {id: this.filterState.areaId})
        },
        components: {
            headnav, dialogPop,shopFilter,shopList,backTop,loading,shopProList
        }
    }
</script>
