<style>
.shop-pro-list {
    margin-top: 0.18rem;
}



.shop-pro-list li {
    padding: 0.18rem;
    margin-bottom: 0.18rem;
    background: #fff;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    position: relative;
}

.shop-pro-list li .itemImg {
    width: 1.62rem;
    height: 1.62rem;
    float: left;
    margin-right: 0.18rem;
}

.shop-pro-list li .itemImg img {
    display: block;
    width: 100%;
    height: 100%;
}

.shop-pro-list li .itemName {
    height: 0.36rem;
    line-height: 0.36rem;
    width: 3.84rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.26rem;
    color: #333;
}

.shop-pro-list li .itemDes {
    margin-top: 0.06rem;
    color: #999;
}

.shop-pro-list li .itemPrice {
    margin-top: 0.8rem;
    color: #999;
    height: 0.26rem;
}

.shop-pro-list li .itemPrice .fl {
    width: 4.2rem;
    height: 0.42rem;
    line-height: 0.42rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.26rem;
    color: #ff2772;
}

.shop-pro-list li .itemPrice .fr {
    width: 1.08rem;
    text-align: right;
    font-size: 0.26rem;
}

.shop-pro-list li .distance {
    position: absolute;
    top: 0.18rem;
    right: 0.18rem;
    color: #999;
    font-size: 0.26rem;
}
</style>

<template>
<ul class="shop-pro-list">
    <router-link class="clearfix" :to="pathTo+data.goodsId" v-for="data in proList">
        <li class="clearfix">
            <div class="itemImg"><img :src="data.thumImage"></div>
            <div class="itemName">{{data.name}}</div>
            <div class="itemDes"></div>
            <div class="itemPrice clearfix">
                <div class="fl">¥{{data.price}}.00</div>
                <div class="fr">已售{{data.sold}}</div>
            </div>
            <div class="distance"></div>
        </li>
    </router-link>
</ul>

</template>

<script type="text/javascript">
import {
    mapGetters
}
from 'vuex'
const components = {

}
export default {
    computed:{
        pathTo(){
        	//type类型决定是不是普通商品，还是热卖商品
        	if(this.type == 1){
                return '/productDetail/proId/'
            }else if(this.type == 2){
                return '/hotProDetail/proId/'
            }
        }
    },
    data() {
        return {
        }
    },
    methods: {},
    mounted() {
        if(this.proList.length){
            return;
        }
        this.$store.dispatch('getShopProduct', {
            shopId: this.$route.params.sid,
            isShopAllHot: '',
            categoryId: '',
            isNewGoods: '',
            keywords: '',
            intelligentSort: '',
            soldSort: '',
            priceSort: '',
            distanceSort: '',
            pageNo: 1
        });
        this.$store.dispatch('getHotShopProduct', {
            shopId: this.$route.params.sid,
            isShopAllHot: 1,
            categoryId: '',
            isNewGoods: '',
            keywords: '',
            intelligentSort: '',
            soldSort: '',
            priceSort: '',
            distanceSort: '',
            pageNo: 1
        });
    },
    components: components,
    created() {

    },
    props : ['proList','type']

}

</script>
