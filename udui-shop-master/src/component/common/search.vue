<style>

.searchPage-build {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    width: 100%;
    height: 100%;
    background: #eeeeee;
}

.searchPage-build header {
    background: #f7f7f7;
    padding: 0.12rem 0.18rem 0.12rem 0.16rem;
    height: auto;
}

.searchPage-build header i.icon-back {
    color: #666666;
    float: left;
    margin-right: 0.1rem;
    font-size: 0.46rem;
    line-height: 0.54rem;
    margin-left: 0;
}

.searchPage-build header div.searchBox-build {
    float: left;
    width: 5.36rem;
    height: 0.54rem;
    padding: 0 0.18rem 0 0.1rem;
    border-radius: 0.06rem;
    background: #eeeeee;
}

.searchPage-build header div.searchBox-build input {
    float: left;
    height: 0.54rem;
    width: 3.8rem;
    margin-left: 0.12rem;
    line-height: 0.54rem;
    background: #eeeeee;
    border: none;
    font-size: 0.26rem;
    color: #000;
}

.searchPage-build header div.searchBox-build i.icon-iconfontsearch{
    float: left;
    color: #999999;
    line-height: 0.54rem;
    font-size: 0.36rem;
}
.searchPage-build header div.searchBox-build i.icon-roundclosefill{
    float: right;
    color: #999999;
    line-height: 0.54rem;
    font-size: 0.36rem;
}
.searchPage-build header div.more{
    float: left;
    width: 0.89rem;
    color: #000;
    position: relative;
}
.searchPage-build header div.more i{
    color: #000;
    line-height: 0.5rem;
}
.searchPage-build header div.more ul{
    width: 1.8rem;
    position: absolute;
    left: -0.1rem;
    top: 0.69rem;
    z-index: 3;
    background: rgba(143,143,143,0.75);
}
.searchPage-build header div.more ul li{
    text-align: center;
    line-height: 0.73rem;
    color: #fff;
    font-size: 0.3rem;
}
.searchPage-build header a.searchBtn-build {
    margin: 0.05rem 0 0 0.18rem;
    display: inline-block;
    background: #ff2772;
    width: 0.72rem;
    line-height: 0.44rem;
    text-align: center;
    border-radius: 0.06rem;
}
.hisSearchBox, .hotSearchBox{
    padding: 0.3rem 0.18rem;
    width: 7.04rem;
    overflow: hidden;
    position: relative;
}
.hisSearchBox i.icon-deletefill{
    font-size: 0.3rem;
    color: #999;
}
.hisSearchBox h3, .hotSearchBox h3{
    color: #666666;
    font-size: 0.26rem;
}
.hisSearchBox i{
    position: absolute;
    right: 0.36rem;
    top: 0.34rem;
    color: #666666;
}
.hisSearchBox ul , .hotSearchBox ul{
    overflow: hidden;
    width: 7.9rem;
    padding-top: 0.18rem;
}
.hisSearchBox ul li, .hotSearchBox ul li{
    float: left;
    width: 1.58rem;
    height: 0.52rem;
    line-height: 0.52rem;
    font-size: 0.26rem;
    background: #fff;
    border:1px solid #000;
    border-radius: 6px;
    text-align: center;
    margin-right: 0.26rem;
    margin-bottom: 0.14rem;
    overflow: hidden;
}
.searchBox-build .icon-down{
    font-size: 0.3rem;
}
</style>

<template>

<div class='searchPage-build'>
    <header class='clearfix'>
        <i class='iconfont icon-back' @click="hide"></i>
        <div class='searchBox-build clearfix'>
            <div class="more" v-if="searchType=='tc'" @click="initData.selectShow=!initData.selectShow">
                {{initData.selectText}}<i class="iconfont icon-down"></i>
                <ul v-show="initData.selectShow">
                    <li @click="setTcSearchType('商家')">商家</li>
                    <li @click="setTcSearchType('商品')">商品</li>
                </ul>
            </div>
            <i class='iconfont icon-iconfontsearch' v-if="searchType=='mall'"></i>
            <input type='text' v-model="searchText" class='searchText-build' placeholder='输入关键词' />
            <i class='iconfont icon-roundclosefill' @click="searchText=''"></i>
        </div>
        <a class='searchBtn-build' @click="search(searchText)">搜索</a>
    </header>
    <div class='hisSearchBox' v-if="searchType=='mall'&&hisSearchList.mallSearchList.length>0">
        <h3>最近搜索</h3>
        <i class='iconfont icon-deletefill' @click="clearSearchList"></i>
        <ul v-if="hisSearchList.mallSearchList.length>0">
            <li v-for="data in hisSearchList.mallSearchList" @click="toList(data,searchType)">
                {{data}}
            </li>
        </ul>
    </div>
    <div class='hisSearchBox' v-if="searchType=='tc'&&hisSearchList.tcSearchList.length>0">
        <h3>最近搜索</h3>
        <i class='iconfont icon-deletefill' @click="clearSearchList"></i>
        <ul v-if="hisSearchList.tcSearchList.length>0">
            <li v-for="data in hisSearchList.tcSearchList" @click="toList(data,searchType)">
                {{data}}
            </li>
        </ul>
    </div>
    <div class='hotSearchBox' v-show="searchType=='mall'&&hotSearchList.mallHotSearchList.length>0">
        <h3>热门搜索</h3>
        <ul>
            <li v-for="data in hotSearchList.mallHotSearchList" @click="toList(data,searchType)">
                {{data}}
            </li>
        </ul>
    </div>
    <div class='hotSearchBox' v-show="searchType=='tc'&&initData.selectText=='商家'&&hotSearchList.tcShopHotSearchList.length>0">
        <h3>热门搜索</h3>
        <ul>
            <li v-for="data in hotSearchList.tcShopHotSearchList" @click="toList(data,searchType)">
                {{data}}
            </li>
        </ul>
    </div>
    <div class='hotSearchBox' v-show="searchType=='tc'&&initData.selectText=='商品'&&hotSearchList.tcGoodsHotSearchList.length>0">
        <h3>热门搜索</h3>
        <ul>
            <li v-for="data in hotSearchList.tcGoodsHotSearchList" @click="toList(data,searchType)">
                {{data}}
            </li>
        </ul>
    </div>
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
export default {
    computed: mapGetters({
            hisSearchList : 'hisSearchList',
            hotSearchList : 'hotSearchList'
        }),
    data() {
        return {
            searchText : '',
            initData : {
                selectText : '商家',
                selectShow : false,
                searchStr : ''
            }
        }
    },
    methods: {
        backfn: function() {
            this.$router.go(-1)
        },
        setTcSearchType : function(str){
            this.initData.selectText = str;
        },
        hide : function(){
            this.$emit('hide')
        },
        search : function(searchText){
            this.searchStr = searchText.replace(/(^\s*)|(\s*$)/g, "")
            if(str){
                this.$store.dispatch('setHisSearch', {type:this.searchType,text:str,selectText:this.initData.selectText});
                if(this.searchType=='mall'){
                    this.$store.dispatch('tjTrack',{eventCode:'P003',clearEventCode:false,linkId : null}).then(function(){},function(){})
                    this.$router.push("/search/cate/"+str+"/catename/综合")
                }else{
                    if(this.initData.selectText=="商家"){
                        this.$store.dispatch('tjTrack',{eventCode:'P006',clearEventCode:false,linkId : null}).then(function(){},function(){})
                    }else if(this.initData.selectText=="商品"){
                        this.$store.dispatch('tjTrack',{eventCode:'P003',clearEventCode:false,linkId : null}).then(function(){},function(){})
                    }
                    this.$router.push('/searchTcList/'+this.initData.selectText+'/'+ this.searchStr );
                }
            };
        },
        clearSearchList : function(){
            this.$store.dispatch('clearSearchList', {type:this.searchType});
        },
        toList : function(data,type){
            if(type=='mall'){
                this.$store.dispatch('tjTrack',{eventCode:'P003',clearEventCode:false,linkId : null}).then(function(){},function(){})
                this.$router.push("/search/cate/"+data+"/catename/综合")
            }else{
                if(this.initData.selectText=="商家"){
                    this.$store.dispatch('tjTrack',{eventCode:'P006',clearEventCode:false,linkId : null}).then(function(){},function(){})
                }else if(this.initData.selectText=="商品"){
                    this.$store.dispatch('tjTrack',{eventCode:'P003',clearEventCode:false,linkId : null}).then(function(){},function(){})
                }
                this.$router.push('/searchTcList/'+this.initData.selectText+'/'+ data );
            }
        }
    },
    props: ['searchType'],
    created() {
        this.$store.dispatch('getHotSearchList',{type:this.searchType});
    }
}

</script>
