<style>

</style>

<template>
    <div>
        <headnav v-bind:title="pagetitle"></headnav>
        <shop-pro-list :proList="hotShopProList" type="2"></shop-pro-list>
    </div>
</template>

<script type="text/javascript">
    import headnav      from './../common/header.vue'
    import shopProList  from './shop-pro-list.vue'
    import {
        mapGetters
    }
        from 'vuex'
    const components = {
        headnav, shopProList
    }
    export default {
        computed: mapGetters({
            hotShopProList: 'hotShopProList'
        }),
        data() {
            return {
                pagetitle: '同城热卖'
            }
        },
        methods: {},
        mounted: function () {

        },
        components: components,
        created() {

        }
    }
</script>
