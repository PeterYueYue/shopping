<style>
.kyyq {
    padding: 0 0.18rem;
    height: 1rem;
    line-height: 1rem;
}

.kyyq .fl {
    font-size: 0.3rem;
}

.kyyq .fr {
    font-size: 0.25rem;
    color: #ff7e42;
}

.kyyq .fl b {
    color: #ff7e42;
}


</style>

<template>

<div class="kyyq clearfix">
    <div class="fl">
        <span v-bind:style="{ color: leftfontcolor}">可使用优券：</span>
        <b v-bind:style="{ color: rightfontcolor}">{{userAccount.vouchers}}</b>
    </div>
    <router-link to="/recomList/isTc/1"  class="fr" v-bind:style="{ color: rightfontcolor}">
        <span>我要使用</span>
        <i class="iconfont icon-right"></i>
    </router-link>
</div>

</template>

<script type="text/javascript">
import {
    mapGetters
}
from 'vuex'

export default {
    data() {
        return {}
    },
    computed: mapGetters({
        userAccount: 'userAccount'
    }),
    methods: {},
    created() {
        this.$store.dispatch('getUserAccount')
    },
    props: ['yqData','leftfontcolor','rightfontcolor']
}

</script>
