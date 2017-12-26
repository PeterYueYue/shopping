<style>

.backTop {
    width: 0.8rem;
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;
    position: fixed;
    bottom: 1.2rem;
    right: 0.3rem;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
}
.backTop i {
    font-size: 0.4rem;
    color: #fff;
    display: inherit;
}

</style>

<template>

<div class="backTop" v-show="show" @click="backTop">
    <i class="iconfont icon-top"></i>
</div>

</template>

<script>
    import {animate} from './../../../static/mUtils'
export default {
    methods: {
//        backTop() {
//            document.body.scrollTop = 0;
//            document.documentElement.scrollTop = 0;
//        },
        //返回顶部
        backTop(){
            animate(document.body, {scrollTop: '0'}, 400,'ease-out');
        },
    },
    props: ['show']
}

</script>
