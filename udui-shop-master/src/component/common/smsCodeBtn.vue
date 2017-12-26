<style>
</style>

<template>

<div>
    <input type="button" :value="btnTxt" @click="getSmsCode()" :disabled="disabledAttr">
    <dialog v-if="dialogShow" v-on:off="dialogShow=false" v-bind:dialog = "dialog"></dialog>
</div>

</template>

<script>
import {
    mapGetters
}
from 'vuex'
import dialog  from './dialog-pop.vue'
const components = {
    dialog
}
export default {
    data() {
        return {
            dialog      : {autoOff : true, txt : ''},
            dialogShow  : false,
            btnTxt      : '获取验证码',
            disabledAttr : false
        }
    },
    computed: mapGetters({
        userInfo : 'userInfo'
    }),
    methods: {
        getSmsCode() {
            if (!/^(0|86|17951)?(121|13[0-9]|15[012356789]|18[0-9]|14[57]|17[0-9])[0-9]{8}$/.test(this.codeO.phoneNum)) {
                this.dialog.txt = "手机号格式不正确";
                this.dialogShow = true;
            } else {
                let obj = {
                    type : this.codeO.type,
                    phone : this.codeO.phoneNum,
                    imgCode : this.codeO.imgCode,
                    isLogin: this.userInfo.isLogin
                }
                let that = this;
                this.$store.dispatch('getMsgCode',obj).then(function(){
                    that.disabledAttr = true;
                    let num = 120;
                    let timer = setInterval(function(){
                        that.btnTxt = 120 + '(s)';
                        if(num>0){
                            that.btnTxt = num-- + '(s)';
                        }else{
                            clearInterval(timer);
                            that.disabledAttr = false;
                            that.btnTxt = '获取验证码';
                        }
                    },1000)
                },function(res){
                    alert(res);
                });
            }
        }
    },
    props: ['codeO']
}

</script>
