<style>
.register-box{
    background: #fff;
    padding: .72rem .18rem 0;
}
.regBox .form-row {
    border: 1px solid #ccc;
    border-radius: .06rem;
    padding: 0 .18rem;
    margin-bottom: .36rem;
}
.regBox .inputCode {
    float: left;
    width: 4.08rem;
}
.regBox .getImgCode {
    float: right;
    width: 1.86rem;
    padding: 0;
}
.regBox .getImgCode img {
    display: block;
    width: 100%;
    height: 0.9rem;
}
.regBox .getCode {
    float: right;
    width: 1.98rem;
    border-color: #ff2772;
}
 .register-box .other{
     height:0.8rem;
     line-height: 0.8rem;
 }
.register-box .other a{
    color:#3a78cc;
}
input{
    font-size: 0.36rem;
}
.register-box .icon-show {
    width: 0.46rem;
    height: 0.46rem;
    background: url("../../../src/assets/images/icn/icon-show.png") center center no-repeat;
    background-size: 0.3rem auto;
    float: right;
    margin-top: 0.2rem;
}
.register-box .passInput .form-input{
    width: 100%;
}
.register-box .passInput input{
    display: inline-block;
}
</style>

<template>
<div>
    <headnav v-bind:title="pagetitle"></headnav>
    <div class="register-box">
        <div class="regBox">
            <div class="userInput form-row">
                <div class="form-input">
                    <input type="text" v-model="phoneNum" placeholder="请输入手机号码">
                    <i></i>
                </div>
            </div>
            <div class="clearfix imgCode" v-if="imgCodeShow">
            <div class="form-row inputCode"><div class="form-input"><input type="text" v-model="imgCode" placeholder="请输入图形验证码"><i></i></div></div><div class="form-row getImgCode"> <img @click="getImgCode" id="getImgCode" :src="reInmgCode"></div></div>
            <div class="clearfix verCode">
                <div class="form-row inputCode">
                    <div class="form-input">
                        <input type="text" v-model="masCode" placeholder="请输入验证码">
                        <i></i>
                    </div>
                </div>
                <div class="form-row getCode">
                    <div class="form-input">
                        <input @click="getCode(phoneNum)" type="button" :value="btnTxt"  :disabled="disabledAttr">
                    </div>
                </div>
            </div>
            <div class="passInput form-row" data-show="1">
                <div class="form-input">
                    <input id="passwordInput" v-model="passWord" type="password" placeholder="密码">
                    <span @click="activeType" class="icon-show show-pw"></span>
                </div>
            </div>
            <div class="regSub">
                <a @click="register(phoneNum,passWord,masCode)" class="subBtn">注册</a>
            </div>
            <div class="other">
                注册即视为同意<a href="javascript:;">《优兑服务条款》</a>
            </div>
        </div>
    </div>
    <dialogMask v-if="dialogShow" v-on:off="dialogShow=false" v-bind:dialog = "dialog"></dialogMask>
</div>


</template>

<script type="text/javascript">
import {
    mapGetters
}
from 'vuex'
// import {
//     mapActions
// }
// from 'vuex'
import headnav      from './../common/header.vue'
import dialogMask   from './../common/dialog-pop.vue'
import encrypt      from './../../../static/md5'
const components = {
    headnav, dialogMask
}
export default {
    data() {
        return {
            pagetitle   : "注册",
            imgCodeShow : false,
            phoneNum    : '',
            imgCode     : '',
            masCode     : '',
            passWord    : '',
            dialog      : {autoOff : true, txt : ''},
            dialogShow  : false,
            btnTxt      : '获取验证码',
            disabledAttr : false,
            passwordTyep : 'password'
        }
    },
    computed: mapGetters({
        reInmgCode: 'reInmgCode'
    }),
    components: components,
    methods:{
        getImgCode : function(){
            this.$store.dispatch('getReImgCode');
        },
        getCode:function(phoneNum){
            if (!/^(0|86|17951)?(121|13[0-9]|15[012356789]|18[0-9]|14[57]|17[0-9])[0-9]{8}$/.test(phoneNum)) {
                this.dialog.txt = "手机号格式不正确";
                this.dialogShow = true;
                return false;
            } else {
                //判断是否已经注册
                this.$store.dispatch('getPhoneNumisReg',{mobile:phoneNum}).then((data)=>{
                    if(data == 1){
                        this.dialogShow = true;
                        this.dialog.txt = "该账号已注册";
                    }else{
                        let obj = {
                            phone:phoneNum,
                            smsCode:this.masCode
                        }
                        //没有注册过的话，就发送验证码给用户
                        this.$store.dispatch("getVerCode",obj).then(()=>{
                            this.disabledAttr = true;
                            let num = 120;
                            let This = this;
                            let timer = setInterval(function(){
                                This.btnTxt = 120 + '(s)';
                                if(num>0){
                                    This.btnTxt = num-- + '(s)';
                                }else{
                                    clearInterval(timer);
                                    This.disabledAttr = false;
                                    This.btnTxt = '获取验证码';
                                }
                            },1000)
                        },()=>{
                            this.dialogShow = true;
                            this.dialog.txt = data.errorMessage;
                        });
                        //以前写的走不通
//                        let obj = {
//                            type : 1,
//                            phone : phoneNum
//                        };
//                        if(this.imgCodeShow){
//                            this.$store.dispatch('getMsgCode',obj);
//                        }else{
//                            obj.smsCode = this.imgCode;
//                            console.log(obj);
//                            this.$store.dispatch('getMsgCode',obj);
//                        }
//                        this.disabledAttr = true;
//                        let num = 120;
//                        let This = this;
//                        let timer = setInterval(function(){
//                            This.btnTxt = 120 + '(s)';
//                            if(num>0){
//                                This.btnTxt = num-- + '(s)';
//                            }else{
//                                clearInterval(timer);
//                                This.disabledAttr = false;
//                                This.btnTxt = '获取验证码';
//                            }
//                        },1000)
                    }
                },(data)=>{
                    this.dialogShow = true;
                    this.dialog.txt = data.errorMessage;
                });
            }
        },
        register:function(phoneNum,passWord,masCode){
            console.log(454545454545);
            let This = this;
            if (!/^(0|86|17951)?(121|13[0-9]|15[012356789]|18[0-9]|14[57]|17[0-9])[0-9]{8}$/.test(phoneNum)) {
                this.dialog.txt = "手机号格式不正确";
                this.dialogShow = true;
            } else {
                if(passWord.length < 6 || passWord.length > 16) {
                    this.dialog.txt = "密码长度不符合";
                    this.dialogShow = true;
        		}else{
                    let obj = {
                        phone:phoneNum,
                        pwd:encrypt.hex_md5(passWord),
                        code:masCode
                    }
                    this.$store.dispatch('register',obj).then(function(){
                        This.$router.go(-1);
                    },function(res){
                        This.dialog.txt = res;
                        This.dialogShow = true;
                    });
                }
            }
        },
        activeType : function(){
            var str = document.getElementById('passwordInput').type
            if(str == 'password'){
                document.getElementById('passwordInput').type = 'test';
            }else{
                document.getElementById('passwordInput').type = 'password';
            }
        }
    },
    created() {
        var This = this;
        this.$store.dispatch('imgcodeCheck').then(
            function(){
                This.imgCodeShow = true;
                This.$store.dispatch('getReImgCode');
            },function(){

            })
    }
}

</script>
