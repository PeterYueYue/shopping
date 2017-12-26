<style>
    .tc-shop-list {
        padding-top: 1.77rem;
        padding-bottom: 0.88rem;
    }
    .fixed-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 3;
    }
</style>
<template>
    <div class="tc-shop-list">
        <div class="fixed-header">
            <headnav v-bind:title="pagetitle" @tcGoSearch="tcGoSearch"></headnav>
            <shop-filter></shop-filter>
        </div>
        <shop-list v-bind:shop-list="tcShopList"></shop-list>
        <search v-show="searchShow" :searchType="'tc'" v-on:hide="searchShow = false"></search>
        <back-top :show="showBackStatus"></back-top>
        <loading :show="shopListLoading"></loading>
    </div>
</template>

<script type="text/javascript">
    import {
        mapGetters
    }
        from 'vuex'
    import headnav  from './../common/header.vue'
    import loading  from './../common/loading.vue'
    import shopFilter from './shop-filter.vue'
    import shopList from './shop-list.vue'
    import backTop from './../common/back-top.vue'
    import {showBack} from './../../../static/mUtils'
    import search from './../common/search.vue'
    const components = {
        headnav, loading, shopFilter, shopList, backTop,search
    }
    export default {
        computed: mapGetters({
            //app组件中存入的状态
            positionState: 'positionState',
            //位置信息
            positionData: 'positionData',
            //过滤条件状态
            filterState: 'tcFilterState',
            //店铺列表
            tcShopList: 'tcShopList',
            //商品的加载动画
            shopListLoading: 'shopListLoading',
            //最后一次的区域Id
            lastAreaId: 'lastAreaId'
        }),
        data() {
            return {
                pagetitle: "同城",
                showBackStatus: false, //显示返回顶部按钮
                searchShow:false,
            }
        },
        components: components,
        methods: {
            tcGoSearch(){
                this.searchShow = true;
            },
            showNum: function () {
                alert(1)
            },
        },
        created() {
            //开始监听scrollTop的值，达到一定程度后显示返回顶部按钮
            showBack(status => {
                this.showBackStatus = status;
            });
            this.$store.dispatch('setLastAreaId', this.filterState.areaId);
            this.$store.dispatch('initTcPageNo'); //初始化第一页
            this.$store.dispatch('setTcFilterState',{
                searchStr:'',
                sortType:1,
                categoryId:'',
                tradeId:'',
                discountType:''
            });
            this.$store.dispatch('getShopList', this.filterState);//根据过滤条件去拿数据
            this.$store.dispatch('getTcShopInitData', {id: this.filterState.areaId})
        }
    }

</script>
