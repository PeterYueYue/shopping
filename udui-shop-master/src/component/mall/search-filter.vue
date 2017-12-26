<style scoped>
.search-filter-box{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 3;
    padding-top: 0.78rem;
}
.header{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0.78rem;
    border-bottom: 0.02rem solid #cccccc;
}
.header h3{
    text-align: center;
    line-height: 0.78rem;
}
.header i{
    position: absolute;
    display: block;
    width: 0.6rem;
    height: 0.6rem;
    text-align: center;
    line-height: 0.6rem;
    left: 0;
    top: 0.1rem;
    font-size: 0.4rem;
}
.main{

}
.class-title{
    line-height: 0.68rem;
    margin: 0 0.18rem;
    border-bottom: 0.02rem solid #cccccc;
}
.pro-class-list{
    overflow: hidden;
    border-bottom: 0.02rem solid #cccccc;
    padding-bottom: 0.24rem;
}
.pro-class-list li{
    width: 1.38rem;
    height: 0.9rem;
    text-align: center;
    line-height: 0.9rem;
    overflow: hidden;
    float: left;
    margin-left: 0.36rem;
    margin-top: 0.24rem;
    border: 0.02rem solid #d7d7d7;
    border-radius: 8px;
}
.pro-class-list li.active{
    border: 0.02rem solid #ff2b70;
}
.filter-price{
    overflow: hidden;
    padding-left: 0.18rem;
}
.filter-price li{
    text-align: center;
    float: left;
    width: 2.96rem;
    height: 0.5rem;
    line-height: 0.5rem;
    border: 0.02rem solid #d7d7d7;
    border-radius: 8px;
    margin: 0.26rem 0 0 0.3rem;
}
.filter-price li.active{
    border: 0.02rem solid #ff2b70;
}
footer{
    position: fixed;
    width: 100%;
    z-index: 4;
    left: 0;
    bottom: 0;
    height: 1.1rem;
    color: #333;
    border-top: 0.02rem solid #cccccc;
}
footer a{
    display: inline-block;
    text-align: center;
    font-size: 0.3rem;
}
.resetBtn{
    width: 2.52rem;
    height: 0.7rem;
    line-height: 0.7rem;
    border: 0.02rem solid #cccccc;
    border-radius: 0.08rem;
    margin: 0.18rem 0.3rem 0 0.18rem;
    color: #000;
}
.filBtn{
    width: 4.2rem;
    height: 0.7rem;
    line-height: 0.7rem;
    background: #ff2b70;
    border: 0.02rem solid #ff2b70;
    border-radius: 0.08rem;
    color: #fff;
}
.filter-class{
    position: relative;
}
.filter-class-input{
    position: absolute;
    top: 0.07rem;
    right: 1.24rem;
}
.filter-class-input input{
    width: 1.32rem;
    height: 0.5rem;
    border: 0.02rem solid #cccccc;
    text-align: center;
    line-height: 0.5rem;
    font-size: 0.36rem;
}
</style>

<template>
<div class="search-filter-box">
    <div class="header">
        <i @click="$emit('hide')" class="iconfont icon-back"></i>
        <h3>筛选</h3>
    </div>
    <div class="main">
        <div class="filter-class">
            <h3 class="class-title">全部分类</h3>
            <ul class="pro-class-list">
                <li v-for="(data,index) in filterClassList" v-if="index<=19" @click="searchFilter(data)" :class="[categoryId==data.categoryId ?'active':'']">
                    {{data.categoryName}}
                </li>
            </ul>
        </div>
        <div class="filter-class">
            <h3 class="class-title">价格</h3>
            <ul class="filter-price">
                <li v-for="(data,index) in filterPriceData" @click="searchFilterPrice(index)" :class="[filterPriceSelect==index ?'active':'']">{{data.minPrice}}-{{data.maxPrice}}</li>
            </ul>
            <div class="filter-class-input">
                <input type="number" v-model="minPrice" />~
                <input type="number" v-model="maxPrice" />
            </div>
        </div>
    </div>
    <footer>
        <a class="resetBtn" @click="reset()">重置</a>
        <a class="filBtn" @click="filter()">确认</a>
    </footer>
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
export default {
    computed: mapGetters({
        filterClassList : 'filterClassList',
        filterState: 'mallFilterState'
    }),
    data() {
        return {
            categoryId : null,
            filterPriceSelect : null,
            minPrice : null,
            maxPrice : null,
            filterPriceData : [
                {
                    minPrice : 0,
                    maxPrice : 500
                },
                {
                    minPrice : 500,
                    maxPrice : 1000
                },
                {
                    minPrice : 1000,
                    maxPrice : 1500
                },
                {
                    minPrice : 1500,
                    maxPrice : 2000
                },
                {
                    minPrice : 2500,
                    maxPrice : 3000
                },
                {
                    minPrice : 3000,
                    maxPrice : null
                }
            ]
        }
    },
    methods: {
        searchFilter(data){
            this.categoryId =  data.categoryId;
        },
        searchFilterPrice(index){
            this.filterPriceSelect=index;
            this.minPrice = this.filterPriceData[index].minPrice;
            this.maxPrice = this.filterPriceData[index].maxPrice;
        },
        reset(){
            this.categoryId = null;
            this.filterPriceSelect = null;
            this.minPrice = null;
            this.maxPrice = null;
        },
        filter(){
            let This = this;
            if(this.categoryId==null&&this.filterPriceSelect==null&&this.minPrice==null&&this.maxPrice==null){
                alert('请选择筛选条件')
            }else{
                this.$store.dispatch('setFilterState', {
                    categoryId  : this.categoryId,
                    minPrice    : this.minPrice,
                    maxPrice    : this.maxPrice,
                    pageNo      : 1,
                    pageSize    : 10
                }).then(function(){
                    console.log(123123);
                    This.$emit('filterData')
                },function(){

                })
            }
        }
    },
    props: []
}

</script>
