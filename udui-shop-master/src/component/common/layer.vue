<style>
.mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    z-index: 10;
}
</style>

<template>
<div class="mask" @click="clickMask()"></div>
</template>

<script>
export default {
    methods: {
        clickMask:function(){
            this.$emit('clickMask')
        }
    }
}
</script>
