<style scoped>
    .cpBox {
        margin-top: 0.18rem;
        border-top: 1px solid #ccc;
        background: #fff;
        border-bottom: 1px solid #ccc;
        padding: 0 0.18rem;
    }
    .cpBox .form-row {
        border-bottom: 1px solid #eee;
    }
    .cpBox .form-row:last-child {
        border-bottom: none;
    }
    .cpBox .form-label {
        width: 1.9rem;
        font-size: 0.29rem;
        color: #333;
    }
    .cpBox .form-input {
        width: 5rem;
    }
    .cpBox .form-input input {
        display: block;
        width: 90%;
    }
    .cpBox .form-input i {
        display: inline-block;
        width:0.3rem;
        height:0.3rem;
        background-color:#999;
        margin-top:0.3rem;
        text-align: center;
        color:white;
        border-radius: 50%;
        line-height: 0.23rem;
    }
    .verCode {
        padding: 0.18rem 0.18rem 0;
    }
    .verCode .form-row {
        border: 1px solid #ccc;
        border-radius: 0.06rem;
        padding:0 0.18rem;
        margin-bottom: 0.36rem;
        background: #fff;
    }
    .verCode .form-input {
        width: 100%;
        position: relative;
    }
    .verCode .form-row input {
        display: block;
        width: 100%;
    }
    .verCode .inputCode {
        float: left;
        width: 40rem;
    }
    .verCode .getCode {
        float: right;
        width: 20rem;
        border-color: #ff2772;
    }
    .verCode .getCode input {
        color: #ff2772;
    }
    .showPass {
        margin-top: 0.18rem;
        padding: 0 0.18rem;
    }
    .showPass i {
        display: block;
        float: left;
        width: 0.24rem;
        height: 0.24rem;
        border:1px solid #666;
        border-radius: 2px;
        margin-right: 0.12rem;
    }
    .showPass i.open {
        border-color: #ff2772;
        color: #ff2772;
    }
    .showPass span {
        display: block;
        float: left;
        height: 0.36rem;
        line-height: 0.36rem;
        font-size: 0.26rem;
        color: #333;
        position: relative;
        top:-0.05rem;
    }
    .cpSub {
        padding: 0 0.18rem;
        margin:0.9rem 0 0.18rem;
    }
    .cpSub a {
        display: block;
        width: 100%;
        height: 0.9rem;
        line-height: 0.9rem;
        text-align: center;
        color: #fff;
        background: #ff96bb;
        font-size: 0.31rem;
        border-radius: 0.06rem;
    }
    .cpOther {
        text-align: right;
        padding: 0 0.18rem;
    }
    .cpOther a {
        color: #ff833e;
    }
</style>

<template>
    <div class="555555">
        <headnav v-bind:title="pagetitle"></headnav>
        <div class="cpBox" data-show="1">
            <div class="form-row oldPass">
                <div class="form-label">
                    <label for="oldPass">原登录密码：</label>
                </div>
                <div class="form-input passInput">
                    <input id="oldPass" class="ph" data-role="blank" type="password" v-model="oldPass" v-show="!passShow">
                    <input id="oldPassShow" class="ps" data-role="blank" type="text" v-model="oldPass" v-show="passShow">
                    <i v-show="oldPass" @click="oldPass=''">x</i>
                </div>
            </div>
            <div class="form-row newPass">
                <div class="form-label">
                    <label for="newPass">新登录密码：</label>
                </div>
                <div class="form-input passInput ">
                    <input id="newPassShow" class="ps"  type="password" v-model="newPass" v-show="!passShow">
                    <input id="newPass" class="ph"  type="text" v-model="newPass" v-show="passShow">
                    <i v-show="newPass" @click="newPass=''">x</i>
                </div>
            </div>
        </div>
        <div class="showPass clearfix" @click="showPassWord">
            <i :class="passShow?'open':''">{{passShow?'√':''}}</i>
            <span>{{passShow?'隐藏密码':'显示密码'}}</span>
        </div>
        <div class="cpSub">
            <a class="subBtn" style="background: rgb(255, 150, 187);" @click="subData">确定</a>
        </div>
        <div class="cpOther">
            <router-link to="/userGetPass">
                <a>忘记密码？</a>
            </router-link>
        </div>
        <dialog-pop v-if="dialogOnOff" v-bind:dialog="dialogConfig" v-on:off="offDialog"></dialog-pop>
    </div>
</template>

<script type="text/javascript">
    import headnav from './../common/header.vue'
    import dialogPop from './../common/dialog-pop.vue'
    import {
        mapGetters
    }
        from 'vuex'
    export default {
        data(){
            return {
                pagetitle: '修改登录密码',//标题配置
                passShow:false,    //默认不显示密码
                newPass:'',      //新密码
                oldPass:'',     //旧的密码
                dialogOnOff:false,
                dialogConfig: {
                    autoOff: true,
                    txt: '',
                },
            }
        },
        computed: mapGetters({
            userInfo: 'userInfo'
        }),
        methods: {
            offDialog(){
                this.dialogOnOff = false;
            },
            showPassWord(){
                this.passShow = !this.passShow;
            },
            //提交数据方法
            subData(){
                if(this.newPass.length < 6 || this.newPass.length > 16) {
                    this.dialogOnOff = true;
                    this.dialogConfig.txt='密码为6到16数字或字符';
                    return false;
                }
                if(this.newPass == this.oldPass){
                    this.dialogOnOff = true;
                    this.dialogConfig.txt='新密码不能和原密码相同';
                }else{
                    let data = {
                        phone: this.userInfo.userName,
                        oldPwd: this.oldPass,
                        newPwd: this.newPass
                    }
                    this.$store.dispatch("subChangePass",data).then(()=>{
                        this.dialogOnOff = true;
                        this.dialogConfig.txt='修改密码成功';
                        setTimeout(()=>{
                            this.$router.push('/user');
                        },1000)
                    },(data)=>{
                        this.dialogOnOff = true;
                        this.dialogConfig.txt = data.errorMessage;
                    });
                }
            }
        },
        created(){
        },
        components: {
            headnav, dialogPop
        }
    }
</script>
