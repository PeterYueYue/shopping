<style>
.dialog-pop {
    position: fixed;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 0.18rem;
    z-index: 1001;
    left: 50%;
    top:50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    overflow: hidden;
}
.dialog-pop .countWrap {
    padding: 0 0.6rem;
}
.dialog-pop-con {
    padding: 0.18rem 0.18rem 0.4rem;
}
.dialog-txt {
    font-size: 0.3rem;
    text-align: center;
    line-height: 1.5;
    margin-bottom: 0.18rem;
}
.dialog-btn {
    background: #fff;
    border-top: 1px solid #ddd;
}
.dialog-btn a {
    display: block;
    width: 50%;
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;
    float: left;
    position: relative;
    font-size: 0.3rem;
}
.dialog-confirm {
    color: #FF2772;
}
.dialog-btn a s {
    display: block;
    width: 1px;
    height: 100%;
    background: #ddd;
    position: absolute;
    right: 0;
    top: 0;
}
.dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
}
    .dialog-cancle{color:#333;}
</style>

<template>
<div>
    <div class="dialog-pop">
        <div class="dialog-pop-con">
            <div v-if="dialog.icon" class="dialog-icon">
                <i :class="'iconfont '+dialog.icon"></i>
            </div>
            <div v-if="dialog.txt" class="dialog-txt">
                {{dialog.txt}}
            </div>
            <div v-if="dialog.numCount" class="countWrap">
                <numCount :number="number" v-on:numChange="numChange"></numCount>
            </div>
            <div v-if="dialog.password" class="passInput">
                <input type="password" v-model="password" />
            </div>
        </div>
        <div v-if="dialog.btn" class="dialog-btn clearfix">
            <a class="dialog-cancle" @click="cancle()">{{dialog.cancle}}<s></s></a>
            <a class="dialog-confirm" @click="ok()">{{dialog.ok}}</a>
        </div>
    </div>
    <div class="dialog-mask"></div>
</div>
</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
import numCount from './num-count.vue'
const components = {
    numCount
}
export default {
    data() {
        return {
            number:{},
            password:null
        }
    },
    computed: {
        ...mapGetters({
        })
    },
    components: components,
    methods: {
        cancle:function(){
            this.$emit('dialogCancle')
        },
        ok:function(){
            if(this.dialog.numCount){
                this.$emit('dialogConfirm',this.number.now)
            }
            if(this.dialog.password){
                this.$emit('dialogConfirm',this.password)
            }
            this.$emit('dialogClickOk')
        },
        numChange:function(num){
            this.number.now = num;
        }
    },
    props: ['dialog'],
    created() {
        if(this.dialog.autoOff){
            let time = this.dialog.autoOffTime||1500;
            let This = this;
            setTimeout(function(){
                This.$emit('off')
            },time)
        }
        this.number.now = this.dialog.proNumCur;
        this.number.max = this.dialog.proNumMax;
        this.number.min = this.dialog.proNumMin;
    }
}
/*
配置参数
{
    autoOff : 是否自动关闭 true false
    autoOffTime : 自动关闭的时间  毫秒单位
    txt : 提示的文字
}
off=> 当开启自动关闭的时候在倒计时完成之后会触发off事件
*/
</script>
