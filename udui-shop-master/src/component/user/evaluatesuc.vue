<style scoped>
    /*评价成功*/
    .cont{
        width: 100%;
    }
    .state{
        width: 100%;
        text-align: center;
        margin-top: 1.26rem;
    }
    .state i{
        font-size: 1.32rem;
        color: #44be45;
    }
    .cont p{
        width: 100%;
        margin: 0.24rem 0 0.72rem;
        text-align: center;
        font-size: 0.324rem;
        color: #666;
    }
    .cont a{
        display: block;
        width: 1.8rem;
        height: 0.72rem;
        font-size: 0.324rem;
        line-height: 0.72rem;
        text-align: center;
        color: #ff833e;
        border: 1px solid #ff833e;
        border-radius: 0.12rem;
        margin: 0 auto;
    }

</style>

<template>
    <div class="evaluatesuc">
        <headnav v-bind:title="pagetitle"></headnav>
        <div class="cont">
            <div class="state">
                <i class="iconfont icon-roundcheck"></i>
            </div>
            <p>感谢您的评价！</p>
            <router-link to="/userOrders">
                <a>完成</a>
            </router-link>
        </div>
        <dialog-pop v-if="dialogOnOff" v-bind:dialog="dialogConfig" v-on:off="offDialog"></dialog-pop>
    </div>
</template>

<script type="text/javascript">
    import headnav from './../common/header.vue'
    import dialogPop from './../common/dialog-pop.vue'
    export default {
        data(){
            return {
                pagetitle: '评论成功',//标题配置
            }
        },
        methods: {},
        created(){
        },
        components: {
            headnav, dialogPop
        }
    }
</script>
