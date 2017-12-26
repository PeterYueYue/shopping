<style>

</style>

<template>
    <div class="pay-info">
        <headnav v-bind:title="pagetitle"></headnav>
    </div>

</template>

<script type="text/javascript">

import { mapGetters } from 'vuex'
import headnav  from './../common/header.vue'

const components = {
    headnav
}
export default {
    computed: mapGetters({
    }),
    data() {
        return {
            pagetitle: '支付详情',
            tcOrderInfo : null
        }
    },
    methods: {

    },
    mounted: function () {
    },
    components: components,
    created() {
        let This = this;
        this.$store.dispatch('getTcOrderInfo',{orderNo:This.$route.params.id}).then(function(res){
            This.tcOrderInfo = res;
        },function(res){
            alert(res)
        })
    }
}
</script>
