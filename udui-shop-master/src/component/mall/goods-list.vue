<style>

#goods-list-box {}

</style>

<template>

<div>
    <headnav v-bind:title="pagetitle" :rightIcon="rightIcon"></headnav>
    <goods-filter v-bind:filterType="this.$route.params.type" v-on:showSearchFilte="searchFilterActive=true"></goods-filter>
    <products-list v-bind:proData="goodsList"></products-list>
    <loading :show="goodsListLoading"></loading>
    <back-top :show="true"></back-top>
    <searchFilter v-if="searchFilterActive" v-on:hide="searchFilterActive=false" v-on:filterData="filterListData()"></searchFilter>
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
import headnav from './../common/header.vue'
import loading from './../common/loading.vue'
import backTop from './../common/back-top.vue'
import goodsFilter from './goods-filter.vue'
import productsList from './products-list.vue'
import searchFilter from './search-filter.vue'
const components = {
    headnav, productsList, goodsFilter, loading, backTop,  searchFilter
}
export default {
    data() {
        return {
            pagetitle: '商品列表',
            rightIcon: {
                iconClass:'icon-icon',
                iconType:'0'
            },
            productName: '',
            searchFilterActive : false,
            eventCode : 'P002',
            clearEventCode : false,
            linkId : null
        }
    },
    computed: mapGetters({
        goodsList: 'goodsList',
        filterState: 'mallFilterState',
        goodsListLoading: 'goodsListLoading'
    }),
    methods: {
        filterListData(){
            this.$store.dispatch('searchGoodsList', {
                searchStr   : this.filterState.searchStr,
                sortType    : this.filterState.sortType,
                categoryId  : this.filterState.categoryId,
                minPrice    : this.filterState.minPrice,
                maxPrice    : this.filterState.maxPrice,
                pageNo      : this.filterState.pageNo,
                pageSize    : this.filterState.pageSize
            });
            this.searchFilterActive = false;
        }
    },
    components: components,
    created() {
        this.$store.dispatch('tjTrack',{eventCode:this.eventCode,clearEventCode:this.clearEventCode,linkId : this.linkId}).then(function(){

        },function(){

        })
        this.$store.dispatch('initPageNo');
        this.$store.dispatch('getProductTree');
        if(this.$route.params.type=='menu'){
            this.$store.dispatch('setFilterState', {
                proClass    : this.$route.params.name,
                searchStr   : null,
                sortType    : 0,
                categoryId  : this.$route.params.id,
                minPrice    : null,
                maxPrice    : null
            });

        }else if(this.$route.params.type=='search'){
            this.$store.dispatch('setFilterState', {
                proClass    : null,
                searchStr   : this.$route.params.id,
                sortType    : 0,
                categoryId  : null,
                minPrice    : null,
                maxPrice    : null
            });
        }
        this.$store.dispatch('searchGoodsList', {
            searchStr   : this.filterState.searchStr,
            sortType    : this.filterState.sortType,
            categoryId  : this.filterState.categoryId,
            minPrice    : this.filterState.minPrice,
            maxPrice    : this.filterState.maxPrice,
            pageNo      : this.filterState.pageNo,
            pageSize    : this.filterState.pageSize
        });
    }
}

</script>
