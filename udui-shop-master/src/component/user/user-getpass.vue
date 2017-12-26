<style scoped>
    .getPass {
        height: 100%;
        background: #fff;
    }
    .getPassBox {
        background: #fff;
        padding: .72rem .18rem 0;
    }

    .getBox .form-row {
        border: 1px solid #ccc;
        border-radius: .06rem;
        padding: 0 .18rem;
        margin-bottom: .36rem;
    }

    .getBox .inputCode {
        float: left;
        width: 4.08rem;
    }

    .getBox .getImgCode {
        float: right;
        width: 2.3rem;
        padding: 0;
    }

    .getBox .getImgCode img {
        display: block;
        width: 100%;
        height: 0.9rem;
    }

    .getBox .getCode {
        float: right;
        width: 1.98rem;
        border-color: #ff2772;
    }
    .getBox .form-input i{
        display: inline-block;
        background-color: #999;
        width:0.3rem;
        height:0.3rem;
        border-radius: 50%;
        margin-top:0.3rem;
        color:white;
        text-align: center;
        line-height: 0.25rem;
    }
</style>
<template>
    <div class="getPass">
        <headnav v-bind:title="pagetitle"></headnav>
        <div class="getPassBox">
            <div class="getBox">
                <div class="userInput form-row">
                    <div class="form-input">
                        <input type="text" v-model="phoneNum" placeholder="请输入手机号码">
                        <i v-show="phoneNum" @click="phoneNum=''">x</i>
                    </div>
                </div>
                <div class="clearfix imgCode" v-if="imgCodeShow">
                    <div class="form-row inputCode">
                        <div class="form-input"><input type="text" v-model="imgCode" placeholder="请输入图形验证码">
                            <i v-show="imgCode" @click="imgCode=''">x</i>
                        </div>
                    </div>
                    <div class="form-row getImgCode"><img @click="getImgCode" id="getImgCode" :src="reInmgCode"></div>
                </div>
                <div class="clearfix verCode">
                    <div class="form-row inputCode">
                        <div class="form-input">
                            <input type="text" v-model="masCode" placeholder="请输入验证码">
                            <i v-show="masCode" @click="masCode=''">x</i>
                        </div>
                    </div>
                    <div class="form-row getCode">
                        <div class="form-input">
                            <input @click="getCode(phoneNum)" type="button" :value="btnTxt" :disabled="disabledAttr">
                        </div>
                    </div>
                </div>
                <div class="passInput form-row" data-show="1">
                    <div class="form-input">
                        <input v-model="newPassWord" type="passWord" placeholder="请输入新的密码">
                        <i v-show="newPassWord" @click="newPassWord=''">x</i>
                        <s class="hide"></s>
                    </div>
                </div>
                <div class="regSub">
                    <a @click="getPass(phoneNum,newPassWord,masCode)" class="subBtn">确定</a>
                </div>
            </div>
        </div>
        <dialogMask v-if="dialogShow" v-on:off="dialogShow=false" v-bind:dialog = "dialog"></dialogMask>
    </div>
</template>

<script type="text/javascript">
    import {mapGetters}from 'vuex'
    import headnav      from './../common/header.vue'
    import dialogMask   from './../common/dialog-pop.vue'
    import encrypt      from './../../../static/md5'
    import {
        mapActions
    }
        from 'vuex'
    export default {
        data() {
            return {
                pagetitle: "找回密码",
                imgCodeShow: true,
                phoneNum: '',
                imgCode: '',
                masCode: '',
                newPassWord: '',
                dialog: {autoOff: true, txt: ''},
                dialogShow: false,
                btnTxt: '获取验证码',
                disabledAttr: false
            }
        },
        created() {
            let This = this;
            this.$store.dispatch('imgcodeCheck').then(
                function(){
                    This.imgCodeShow = true;
                    This.$store.dispatch('getImgCode');
                },function(){

                })
        },
        computed: {
            ...mapGetters([
                'reInmgCode',
            ]),
        },
        methods: {
            ...mapGetters({ //
                loginfn: 'loginfn'
            }),
        	//从新获取验证码
            getImgCode(){
                this.$store.dispatch('getReImgCode');
            },
            //获取验证码
            getCode(phoneNum){
            	//判断是不是手机号
                if (!/^(0|86|17951)?(121|13[0-9]|15[012356789]|18[0-9]|14[57]|17[0-9])[0-9]{8}$/.test(phoneNum)) {
                    this.dialog.txt = "手机号格式不正确";
                    this.dialogShow = true;
                } else {
                    let obj = {
                        phone:phoneNum,
                        smsCode:this.masCode
                    };
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
                    },(data)=>{
                        this.dialogShow = true;
                        this.dialog.txt = data.errorMessage;
                    });
                }
            },
            //提交
            getPass(phoneNum,newPwd,masCode){
                var This = this;
                if (!/^(0|86|17951)?(121|13[0-9]|15[012356789]|18[0-9]|14[57]|17[0-9])[0-9]{8}$/.test(phoneNum.trim())) {
                    this.dialog.txt = "手机号格式不正确";
                    this.dialogShow = true;
                } else {
                    if(newPwd.length < 6 || newPwd.length > 16){
                        this.dialog.txt = "密码为6到16数字或字符";
                        this.dialogShow = true;
                    }else{
                        let obj = {
                            phone:phoneNum,
                            newPwd:encrypt.hex_md5(newPwd),
                            code:masCode
                        };
                        this.$store.dispatch('getNewPass',obj).then(function(){
                            This.dialogShow = true;
                            This.dialog.txt = "成功找回密码";
                            This.$store.dispatch('loginfn',{phone:phoneNum,pwd:newPwd}).then(()=>{
                                setTimeout(()=>{
                                    This.$router.push('/user');
                                },1500)
                            });
                        },function(res){
                            This.dialog.txt = res;
                            This.dialogShow = true;
                        });
                    }
                }
            }
        },
        components: {
            headnav,dialogMask,encrypt
        }
    }
</script>
