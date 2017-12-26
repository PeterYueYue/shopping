<style scoped>
    .hot-list {
        padding-bottom: 1.1rem;
    }

    .hot-list li {
        padding: 0.18rem;
        position: relative;
        margin-bottom: 0.18rem;
        border-bottom: 1px solid #e6e6e6;
        border-top: 1px solid #e6e6e6;
        background-color: #fff;
    }

    .hot-list li img {
        display: block;
        width: 1.62rem;
        height: 1.62rem;
        float: left;
    }

    .hot-list i {
        font-style: normal;
        float: right;
        width: 0.72rem;
        height: 0.18rem;
        color: #999;
    }

    .hot-list .proName {
        width: 4.5rem;
        position: relative;
    }

    .hot-list .subName {
        width: 4.5rem;
        color: #999;
        height: 0.65rem;
    }

    .hot-list .proName, .hot-list .subName {
        font-size: 0.26rem;
        line-height: 0.9;
        overflow: hidden;
    }

    .hot-list .proPrice {
        margin-top: .18rem;
        color: #ff2772;
        font-size: .35rem;
        height: .24rem;
        line-height: .24rem;
    }

    .hot-list p {
        width: 5.28rem;
        float: left;
        margin-left: .18rem;
        text-indent: .06rem;
        padding: .06rem 0;
    }

    .hot-list .proPrice .quan {
        margin-left: .18rem;
        background-color: #ff7e42;
        color: #fff;
        padding: .03rem .09rem;
        border-radius: .06rem;
        font-size: .24rem;
    }

    .hot-list .proPrice .sold {
        float: right;
        font-size: .26rem;
        color: #999;
    }

    .hot-list a {
        color: #333;
    }
</style>

<template>
    <div class="hot-list">
        <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
            <li class="clearfix" v-for="data in proList">
                <router-link :to="'/hotProDetail/proId/'+data.goodsId">
                    <div>
                        <img :src="data.thumImage">
                        <i></i>
                        <p class="proName">{{data.name}}</p>
                        <p class="subName">{{data.subName}}</p>
                        <p class="proPrice">¥{{data.oldPrice}}.00<span class="quan">可抵用{{data.vouchers}}优券</span><span
                            class="sold">库存{{data.stock}}</span></p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">

    import {
        mapGetters
    }
        from 'vuex'
    const components = {}
    export default {
        computed: mapGetters({}),
        data() {
            return {
                busy:false,
            }
        },
        methods: {
            loadMore(){
                this.$emit('loadMord');
            }
        },
        mounted: function () {

        },
        components: components,
        created() {

        },
        props: ['proList']

    }

</script>
