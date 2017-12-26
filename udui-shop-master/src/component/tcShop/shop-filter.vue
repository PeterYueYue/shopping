<style scoped>

/* line 1, ../sass/ie.scss */

#goods-filter-box {

}

#shops-filter-box .shop-screen {
    background: #fff;
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #ddd;
    padding: 0.1rem 0;
    z-index: 10;
}

#shops-filter-box .shop-screen li {
    float: left;
    width: 25%;
    height: 0.54rem;
    line-height: 0.54rem;
    text-align: center;
    font-size: 0.26rem;
    overflow: hidden;
}

#shops-filter-box .shop-screen li>div {
    border-right: 1px solid #eee;
}
#shops-filter-box .shop-screen li i {
    display: inline-block;
    width: 0;
    height: 0;
    position: relative;
}

#shops-filter-box .sec-screen {
    width: 100%;
    background: #fff;
    overflow: hidden;
}

#shops-filter-box .sec-screen .sec-type, .sec-screen .sec-trade {
    height: 4.8rem;
}

#shops-filter-box .sec-screen .pare {
    width: 50%;
    float: left;
    height: 100%;
    overflow: scroll;
}

#shops-filter-box .sec-screen .pare li {
    background: #eee;
    border-top: 1px solid #fff;
}

#shops-filter-box .sec-screen .pare li.cur {
    background: #fff;
}

#shops-filter-box .sec-screen li {
    padding: 0 0.2rem;
    height: 0.72rem;
    line-height: 0.72rem;
    font-size: 0.26rem;
}

#shops-filter-box .sec-screen .child {
    width: 50%;
    float: left;
    height: 100%;
    overflow: scroll;
}

#shops-filter-box .shop-screen li i.downtrg {
    border-width: 0.1rem;
    border-style: solid dashed dashed dashed;
    border-color: #ccc transparent transparent transparent;
    left: 0.1rem;
}


.app-file-enter-active {
    transition: all .3s ease;
}

.app-file-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.app-file-enter,
.app-file-leave-active {
    opacity: 0;
}

</style>

<template>

<div id="shops-filter-box">
    <div class="shop-screen">
        <ul class="clearfix">
            <li class="type" @click="showNum(1)">
                <div><span>全部分类</span><i class="downtrg"></i></div>
            </li>
            <li class="trade" @click="showNum(2)">
                <div><span>全部商圈</span><i class="downtrg"></i></div>
            </li>
            <li class="sort" @click="showNum(3)">
                <div><span>智能排序</span><i class="downtrg"></i></div>
            </li>
            <li class="filter" @click="showNum(4)">
                <div><span>筛选</span><i class="downtrg"></i></div>
            </li>
        </ul>
    </div>
<transition name="app-file">
    <div class="sec-screen" v-show="isShow.show">
        <div class="sec-type clearfix" v-show="isShow.num==1">
            <div class="pare">
                <ul class="">
                    <li @click="showShopClass(0)"><p @click="filterShop(0,filterState.tradeId,filterState.sortType,filterState.discountType)">全部分类</p></li>
                    <li :class="data.id == isShow.shopClassShow ? 'cur':''" @click="showShopClass(data.id)" v-for="data in shopClass">{{data.name}}</li>
                </ul>
            </div>
            <div class="child">
                <div class="scroller">
                    <ul v-show="data.id == isShow.shopClassShow" v-for="data in shopClass">
                        <li>全部</li>
                        <li v-for="d in data.childList" @click="filterShop(d.id,filterState.tradeId,filterState.sortType,filterState.discountType)">{{d.name}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="sec-trade clearfix" v-show="isShow.num==2">
            <div class="pare">
                <ul>
                    <li data-area="0">附近</li>
                    <li :class="data.id == isShow.areaShow ? 'cur':'' " @click="getBusiness(data.id)" v-for="data in tcArea">{{data.name}}</li>
                </ul>
            </div>
            <div class="child">
                <div class="scroller">
                    <ul>
                        <li v-for="data in areaBusinessList" @click="filterShop(filterState.categoryId,data.id,filterState.sortType,filterState.discountType)">
                            {{data.name}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="sec-sort clearfix" v-show="isShow.num==3">
            <div class="pare" id="sortPare"></div>
            <div class="child" id="sortChild">
                <div class="scroller">
                    <ul>
                        <li @click="filterShop(filterState.categoryId,filterState.tradeId,1,filterState.discountType)">按距离排序</li>
                        <li @click="filterShop(filterState.categoryId,filterState.tradeId,2,filterState.discountType)">按销量排序</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="sec-filter clearfix"  v-show="isShow.num==4">
            <div class="pare" id="filterPare"></div>
            <div class="child" id="filterChild">
                <div class="scroller">
                    <ul>
                        <li @click="filterShop(filterState.categoryId,filterState.tradeId,filterState.sortType,0)">全部</li>
                        <li @click="filterShop(filterState.categoryId,filterState.tradeId,filterState.sortType,2)">可抵扣优券</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</transition>
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
export default {
    computed: mapGetters({
        shopClass : 'shopClass',
        tcArea    : 'tcArea',
        areaBusinessList : 'areaBusinessList',
        filterState   : 'tcFilterState'
    }),
    data() {
        return {
            isShow : {
                show : false,
                num  : 0,
                shopClassShow : 0,
                areaShow : 0
            }
        }
    },
    methods: {
        showNum(num){
            if (num ==  this.isShow.num) {
                this.isShow.show = !this.isShow.show;
            }else{
                this.isShow.show = true;
            }
            this.isShow.num = num;
        },
        showShopClass(id){
            console.log(id);
            if(id==0){
                this.isShow.show = false;
                //请求全部数据
            }else{
                this.isShow.shopClassShow = id;
            }
        },
        getBusiness(id){
            this.isShow.areaShow = id;
            this.$store.dispatch('getBusiness',{id:id});
        },
        filterShop(categoryId,tradeId,sortType,discountType) {
//            console.log(categoryId);
//            console.log(trade);
//            console.log(sort);
//            console.log(filter);
//            return false;
            this.isShow.show = false;
            this.$store.dispatch('initTcPageNo');
            this.$store.dispatch('setTcFilterState', {
                categoryId: categoryId,
                tradeId: tradeId,
                sortType: sortType,
                discountType: discountType
            });
            this.$store.dispatch('getShopList', {
                areaId:this.filterState.areaId,
                categoryId: this.filterState.categoryId,
                tradeId: this.filterState.tradeId,
                sortType: this.filterState.sortType,
                discountType: this.filterState.discountType,
                pageNo: 1,
                pageSize: 10,
                lon:this.filterState.lon,
                lat:this.filterState.lat
            });
        }
    },
    props: []
}

</script>
