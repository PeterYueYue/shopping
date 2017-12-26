<style>

</style>

<template>
<div class="numberCount clearfix">
    <a class="iconfont icon-move" @click="minusNum()"></a>
    <input type="number" :value="initNum" readonly="readonly" />
    <a class="iconfont icon-add" @click="addNum()"></a>
</div>
</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
export default {
    props:['number'],
    data() {
        return {
            minNum:-Infinity,
            initNum:1,
            maxNum:Infinity
        }
    },
    computed:{
    },
    methods: {
        addNum:function(){
            if(this.initNum<this.maxNum){
                this.initNum++;
                if(this.number.options){
                    this.$emit('numChange',[this.initNum,this.number.options]);
                }else {
                    this.$emit('numChange',this.initNum);
                }
            }
        },
        minusNum:function(){
            if(this.initNum>this.minNum){
                this.initNum--;
                if(this.number.options){
                    this.$emit('numChange',[this.initNum,this.number.options]);
                }else {
                    this.$emit('numChange',this.initNum);
                }
            }
        }
    },
    created() {
        this.minNum = this.number.min||this.minNum;
        this.initNum = this.number.now||this.initNum;
        this.maxNum = this.number.max||this.maxNum;
    }
}

</script>
