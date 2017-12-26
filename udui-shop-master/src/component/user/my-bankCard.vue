<style>
.tipTop {
    padding: 0.36rem 0.16rem 0;
    color: #999;
}
.tipBot {
    padding: 0.36rem 0.18rem 0;
    color: #ff0900;
}
.setBcBox {
    margin-top: 0.18rem;
    border-top: 1px solid #ccc;
    background: #fff;
    border-bottom: 1px solid #ccc;
    padding: 0 0.18rem;
}
.setBcBox .form-row {
    border-bottom: 1px solid #eee;
}
.setBcBox .form-row:last-child {
    border-bottom: none;
}
.setBcBox .form-label {
    width: 1.8rem;
    font-size: 0.3rem;
    color: #333;
}
.setBcBox .form-input {
    width: 5.1rem;
}
.setBcBox .form-input input {
    display: block;
    width: 100%;
}
.setBcBox .form-input select {
    display: block;
    width: 100%;
    height: 0.9rem;
    line-height: 0.9rem;
    background: #fff;
    -webkit-appearance: none;
    border:none;
    font-size: 0.3rem;
    font-family: 'microsoft yahei';
}
.setBcBox .form-input i {
    right: 0.18rem;
}
.bcNext, .bcSub {
    padding: 0 0.18rem;
    margin:0.54rem 0 0.18rem;
}
.bcNext a {
    display: block;
    width: 100%;
    height: 0.9rem;
    line-height: 0.9rem;
    text-align: center;
    color: #fff;
    background: #FF2772;
    font-size: 0.32rem;
    border-radius: 0.06rem;
}
.step2 {
    padding: 0.5rem 0 0;
}
.step2 input {
    font-size: 0.3rem;
    font-family: 'microsoft yahei';
}
.telShow {
    padding: 0.36rem 0.18rem;
    color: #ff7a46;
    display: none;
}
.bcGetCode {
    padding: 0.18rem;
}
.bcGetCode .fl {
    width: 4.1rem;
    padding: 0 0.18rem;
    background: #fff;
}
.bcGetCode .fr {
    width: 1.98rem;
    padding: 0 0.18rem;
    background: #fff;
}
.bcGetCode input {
    display: block;
    width: 100%;
    height: 0.9rem;
    line-height: 0.9rem;
    background: #fff;
}
</style>

<template>

<div class="myBankCard">
    <headnav v-bind:title="pagetitle"></headnav>
    <div class="addBankCard" v-if="userBankCard==null">
        <div class="step1" v-if="step==1">
            <div class="tipTop">请填写银行卡信息</div>
            <div class="setBcBox">
                <div class="form-row uName">
                    <div class="form-label">
                        <label>开户名：</label>
                    </div>
                    <div class="form-input">
                        <input class="" type="text" v-model="username" placeholder="">
                        <i></i>
                    </div>
                </div>
                <div class="form-row cardNo">
                    <div class="form-label">
                        <label>银行卡号：</label>
                    </div>
                    <div class="form-input">
                        <input class="" type="text" v-model="cardNumber" placeholder="">
                        <i></i>
                    </div>
                </div>
                <div class="form-row bankSel">
                    <div class="form-label">
                        <label>开户银行：</label>
                    </div>
                    <div class="form-input">
                        <select v-model="bankSelected">
                            <option :value="bank.id" v-for="bank in allBank">{{bank.name}}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="tipBot">为保证结算提现成功，请务必填写正确的信息！</div>
            <div class="bcNext">
                <a class="subBtn" @click="bindCardToNext()">下一步</a>
            </div>
        </div>
        <div class="step2" v-if="step==2">
            <div class="telShow"></div>
            <div class="bcGetCode clearfix">
                <div class="fl">
                    <input id="verCode" type="text" v-model="smsCode" placeholder="请输入验证码">
                </div>
                <div class="fr getCode">
                    <smsCodeBtn :codeO="codeO"></smsCodeBtn>
                </div>
            </div>
            <div class="bcSub">
                <a class="subBtn" @click="bindCardSub()">确认</a>
            </div>
        </div>
    </div>
    <div class="editBankCard" v-else></div>
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
import headnav from './../common/header.vue'
import smsCodeBtn from './../common/smsCodeBtn.vue'

const components = {
    headnav,smsCodeBtn
}
export default {
    data() {
        return {
            pagetitle: "",
            step:1,
            username:'',
            cardNumber:'',
            bankSelected:'',
            smsCode:'',
            codeO:{
                type:1,
                phoneNum:'',
                imgCode:''
            }
        }
    },
    computed:{
        ...mapGetters({
            userBankCard: 'userBankCard',
            allBank:'allBank',
            userInfo:'userInfo'
        })
    },
    components: components,
    methods: {
        bindCardToNext:function(){
            switch(''){
                case this.username:
                    alert('请填写开户名');
                    break;
                case this.cardNumber:
                    alert('请填写银行卡号');
                    break;
                case this.bankSelected:
                    alert('请选择银行');
                    break;
                default:
                    this.step = 2;
                    break;
            }
        },
        bindCardSub:function(){
            this.$store.dispatch('bindBankCard');
        }
    },
    created() {
        let that = this;
        this.codeO.phoneNum = this.userInfo.mobile;
        if(this.allBank.length==0){
            this.$store.dispatch('getAllBank');
        }
        this.$store.dispatch('getUserBankCard').then(function(){
            that.pagetitle = "我的银行卡"
        },function(){
            that.pagetitle = "银行卡绑定"
        });
        this.$store.dispatch('getUserInfo');
    }
}

</script>
