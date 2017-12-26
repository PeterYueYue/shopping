<style>
.tc-hot-box{
    margin-top: 0.18rem;
}
.tc-hot-box .title{
    padding: 0 .18rem 0 .48rem;
    color: #ff7e42;
    height:0.72rem;
    line-height: 0.72rem;
    font-weight: 400;
    background: #fff url("./../../assets/images/hotIco.png")  no-repeat;
    background-size: 0.23rem 0.26rem;
    background-position: 0.2rem 0.22rem;

}
</style>

<template>
    <div class="tc-hot-box">
        <h3 class="title">同城热卖<span class="fr" @click="getMore">更多&gt;</span></h3>
        <tcHotList v-bind:proList="tcIndexTcHotList"></tcHotList>
    </div>
</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
import tcHotList    from      './../tcShop/tc-hot-list.vue'
const components = {
    tcHotList
}
export default {
    computed: mapGetters({
        tcIndexTcHotList : 'tcIndexTcHotList'
    }),
    data() {
        return {
        }
    },
    methods: {
        getMore(){
            this.$router.push('/tcHotlist');
        }
    },
    mounted: function() {
    },
    components: components,
    created() {
    }

}

</script>
