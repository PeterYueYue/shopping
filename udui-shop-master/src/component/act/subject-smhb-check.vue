<style scoped>
    s {
        text-decoration: none
    }

    /*扫码*/
    .hbbg {
        width: 100%;
        height: 100%;
        background: url('./../../assets/images/smbb/hbbg.jpg') no-repeat;
        background-size: 100% 100%;
        position: relative;
    }

    .hb {
        width: 6.678rem;
        height: 9.714rem;
        background: url('./../../assets/images/smbb/hb.jpg') center no-repeat;
        background-size: 100%;
        position: absolute;
        bottom: 1.41rem;
        left: 0.381rem;
        z-index: 1;
    }

    .hbopenbtn {
        width: 1.8rem;
        height: 1.8rem;
        background: url('./../../assets/images/smbb/hbopenbtn.png') center no-repeat;
        background-size: 100% 100%;
        position: absolute;
        left: 2.4rem;
        bottom: 1.728rem;
        -webkit-animation-name: beat;
        animation-name: beat;
        -webkit-animation-duration: 0.5s;
        animation-duration: 0.5s;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        z-index: 3;
    }

    .hb-3 {
        position: absolute;
        width: 3.774rem;
        height: 1.668rem;
        bottom: 0.156rem;
        right: 0;
        background: url('./../../assets/images/smbb/hb-3.png') center no-repeat;
        background-size: 100%;
        z-index: 2;
    }

    .hb-hand {
        position: absolute;
        width: 1.08rem;
        height: 1.08rem;
        z-index: 3;
        left: 1.908rem;
        bottom: 1.728rem;
        font-size: 0.84rem;
        line-height: 1.08rem;
        text-align: center;
        color: #fff;
    }

    .hbbg a {
        display: block;
        width: 100%;
        height: 100%;
    }

    @-webkit-keyframes fadeInUp {
        from {
            opacity: 0;
            -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
        }
        to {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
        }
        to {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
        }
    }

    @-webkit-keyframes beat {
        from {
            -webkit-transform: scale3d(1.1, 1.1, 1);
            transform: scale3d(1.1, 1.1, 1);
        }
        to {
            -webkit-transform: none;
            transform: none;
        }
    }

    @keyframes beat {
        from {
            -webkit-transform: scale3d(1.1, 1.1, 1);
            transform: scale3d(1.1, 1.1, 1);
        }
        to {
            -webkit-transform: none;
            transform: none;
        }
    }

    .fadeInUp {
        -webkit-animation-name: fadeInUp;
        animation-name: fadeInUp;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
    }

    .hbopen {
        position: absolute;
        width: 100%;
        min-height: 100%;
        left: 0;
        top: 0;
        z-index: 5;
        background: #d12f20;
    }

    .hbopen1 {
        width: 100%;
        height: 1.938rem;
        background: url('./../../assets/images/smbb/hbopen1.jpg') center no-repeat;
        background-size: 100%;
    }

    .hbopen2 {
        width: 100%;
        height: 5.646rem;
        background: url('./../../assets/images/smbb/hbopen2.jpg') center no-repeat;
        background-size: 100%;
        position: relative;
    }

    .hbopen2 .hbme {
        position: absolute;
        width: 100%;
        height: 1.2rem;
        line-height: 1.2rem;
        font-size: 0.96rem;
        text-align: center;
        left: 0;
        top: 1.32rem;
        font-weight: bold;
        color: #fa4c00;
    }

    .hbopen3 {
        padding-top: 0.54rem;
    }

    .hbopen3 h3 {
        font-size: 0.36rem;
        text-align: center;
        line-height: 1.2;
        color: #fecb10;
        font-weight: normal;
    }

    .hbopen3 input {
        display: block;
        padding: 0 0.15rem;
        width: 5.4rem;
        height: 0.96rem;
        line-height: 0.96rem;
        border-radius: 0.12rem;
        background: #fff;
        border: none;
        margin: 0.36rem auto 0;
        color: #333;
        text-align: center;
        font-size: 0.288rem;
    }

    .hbopen3 a {
        display: block;
        width: 5.7rem;
        height: 0.96rem;
        border-radius: 0.12rem;
        line-height: 0.96rem;
        text-align: center;
        background: #fdc80f;
        color: #ff2d4b;
        font-size: 0.36rem;
        margin: 0.36rem auto 0;
    }

    .hbpopbg {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 10;
        background: rgba(0, 0, 0, 0.5);
        left: 0;
        top: 0;
        overflow: hidden;
    }

    .hblogin,
    .hbreg {
        width: 6.48rem;
        border-radius: 0.12rem;
        overflow: hidden;
        position: fixed;
        top: 2.16rem;
        left: 0.48rem;
        z-index: 11;
    }

    .hblogin h3,
    .hbreg h3 {
        width: 100%;
        height: 0.96rem;
        line-height: 0.96rem;
        text-align: center;
        font-size: 0.3rem;
        font-weight: normal;
        color: #fff;
        background: -webkit-linear-gradient(left, #ff5252, #e1251f);
    }

    .hblogin .loginbox,
    .hbreg .regbox {
        width: 6.48rem;
        /*padding: 0 0.9rem 0.9rem;*/
        background: #fe4035;
    }

    .hblogin .loginboxin,
    .hbreg .regboxin {
        background: #fff;
        width: 100%;
        box-sizing: border-box;
        padding: 0.48rem 0.24rem 0.12rem;
    }

    .hblogin .loginpass {
        background: #f0f0f0;
        border-radius: 0.12rem;
        line-height: 0.9rem;
        overflow: hidden;
    }

    .hblogin .loginpass .iconfont {
        display: block;
        width: 0.8rem;
        height: 0.9rem;
        text-align: center;
        float: left;
        font-size: 0.48rem;
        color: #999;
    }

    .hblogin .loginpass input {
        display: block;
        width: 4.2rem;
        height: 0.9rem;
        float: left;
        background: none;
        font-size: 0.3rem;
    }

    .loginfp {
        text-align: right;
        line-height: 0.9rem;
    }

    .loginfp a {
        color: #00a5ff;
    }

    .loginbtn a {
        display: block;
        width: 100%;
        height: 0.9rem;
        line-height: 0.9rem;
        background: #ff4135;
        border-radius: 0.12rem;
        text-align: center;
        color: #fff;
    }

    .logintip {
        text-align: center;
        line-height: 0.9rem;
        color: #ff4135;
    }

    .regimgcode {
        margin-bottom: 0.36rem;
    }

    .regimgcode .fl {
        width: 3.6rem;
        background: #f0f0f0;
        border-radius: 0.12rem;
        height: 0.9rem;
        line-height: 0.9rem;
    }

    .regimgcode .fl .iconfont {
        display: block;
        width: 0.78rem;
        text-align: center;
        font-size: 0.48rem;
        color: #999;
        float: left;
    }

    .regimgcode .fl input {
        display: block;
        width: 2.7rem;
        height: 0.9rem;
        line-height: 0.9rem;
        background: none;
        float: left;
        font-size: 0.26rem;
    }

    .regimgcode .fr {
        width: 2.04rem;
        height: 0.9rem;
        line-height: 0.9rem;
        background: #cbeaff;
        border-radius: 0.12rem;
        overflow: hidden;
    }

    .regmsgcode {
        height: 0.9rem;
        line-height: 0.9rem;
        border-radius: 0.12rem;
        background: #f0f0f0;
        position: relative;
        margin-bottom: 0.36rem;
    }

    .regmsgcode .iconfont {
        display: block;
        width: 0.78rem;
        text-align: center;
        font-size: 0.48rem;
        color: #999;
        float: left;
    }

    .regmsgcode input {
        display: block;
        float: left;
        width: 2.7rem;
        height: 0.9rem;
        line-height: 0.9rem;
        background: none;
        font-size: 0.26rem;
    }

    .regmsgcode #getCode {
        display: block;
        width: 2.04rem;
        height: 0.6rem;
        background: #ff5252;
        border-radius: 0.12rem;
        position: absolute;
        top: 0.15rem;
        right: 0.15rem;
        line-height: 0.6rem;
        text-align: center;
        color: #fff;
    }

    .regpass {
        margin-bottom: 0.36rem;
        height: 0.9rem;
        line-height: 0.9rem;
        background: #f0f0f0;
        border-radius: 0.12rem;
    }

    .regpass .iconfont {
        display: block;
        width: 0.78rem;
        text-align: center;
        font-size: 0.48rem;
        color: #999;
        float: left;
    }

    .regpass input {
        display: block;
        width: 4.8rem;
        height: 0.9rem;
        line-height: 0.9rem;
        background: none;
        font-size: 0.26rem;
    }

    .regbtn {
        padding-bottom: 0.24rem;
    }

    .regbtn a {
        display: block;
        width: 100%;
        height: 0.9rem;
        line-height: 0.9rem;
        background: #ff4135;
        border-radius: 0.12rem;
        text-align: center;
        color: #fff;
    }

    .hbget {
        width: 6.3rem;
        padding: 0.1rem 0.1rem 0.48rem;
        border-radius: 0.12rem;
        overflow: hidden;
        position: fixed;
        top: 2.16rem;
        left: 0.48rem;
        z-index: 11;
        background: #fff;
        text-align: center;
    }

    .hbget .hbgetimg {
        height: 2.52rem;
        background: url('./../../assets/images/smbb/top1.png') center no-repeat;
        background-size: 100% 100%;
    }

    .retips .hbgetimg {
        background: url('./../../assets/images/smbb/top4.png') center no-repeat;
        background-size: 100% 100%;
    }

    .hbget .hbgettxt {
        line-height: 1.2rem;
        color: #333;
        font-size: 0.36rem;
    }

    .retips .hbgettxt {
        line-height: 0.9rem;
    }

    .hbget .hbgetdes {
        line-height: 0.9;
        font-size: 0.3rem;
        color: #ff4135;
        line-height: 0.3rem;
    }

    .retips .hbgetdes {
        padding: 0 0.36rem;
        text-align: left;
        line-height: 0.4rem;
    }

    .hbget .hbgetbtn,
    .hbbtn {
        width: 5.76rem;
        height: 0.9rem;
        line-height: 0.9rem;
        background: #ff4135;
        font-size: 0.288rem;
        border-radius: 0.12rem;
        text-align: center;
        color: #fff;
        margin: 0.36rem auto 0;
    }

    .newget {
        top: 0.6rem;
    }

    .newget .hbgetqrcode {
        width: 3.48rem;
        height: 3.48rem;
        margin: 0.36rem auto 0;
        border-radius: 0.12rem;
        background: #f7f7f7;
        border: 1px solid #ddd;
    }

    .hberror {
        width: 6.3rem;
        padding: 0.1rem 0.1rem 0.48rem;
        border-radius: 0.12rem;
        overflow: hidden;
        position: fixed;
        top: 0.9rem;
        left: 0.48rem;
        z-index: 11;
        background: #fff;
        text-align: center;
        display: none;
    }

    .hberror .hberrorimg {
        height: 2.52rem;
        background: url('./../../assets/images/smbb/top3.png') center no-repeat;
        background-size: 100% 100%;
    }

    .rescan {
        width: 4.758rem;
        height: 5.85rem;
        background: url('./../../assets/images/smbb/ercsmbg.jpg') center no-repeat;
        background-size: 100% 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        z-index: 11;
        border-radius: 0.18rem;
        color: #fff;
        display: none;
    }

    .rescan .hberrorqrcode {
        width: 3.18rem;
        height: 3.18rem;
        padding: 0.18rem;
        margin: 0.69rem auto 0;
        border-radius: 0.18rem;
        background: #fff;
    }

    .rescan .hberrortxt {
        font-size: 0.336rem;
        color: #fff;
        text-align: center;
        line-height: 0.9;
        padding: 0.3rem 0;
    }


</style>

<template>
    <div class="subjectSmhbCheck" style="width:100%; height:100%; overflow: hidden;">
        <!--不需要头部-->
        <!--<headnav v-bind:title="pagetitle"></headnav>-->
        <div style="width:100%; height:100%;">
            <div class="loading" style="display: block;"></div>
            <div class="hbbg">
                <div class="hb">
                    <div class="hbopenbtn">
                        <a href="#hbopen" @click.prevent="hbOpen"></a>
                    </div>
                </div>
                <div class="hb-3"></div>
                <!-- <div class="hb-hand iconfont icon-Hand-PointingUp fadeInUp"></div> -->
            </div>
            <div class="hbopen" id="hbopen" v-show="hbopenShow">
                <div class="hbopen1"></div>
                <div class="hbopen2">
                    <div class="hbme">{{cardDeno}}元</div>
                </div>
                <div class="hbopen3">
                    <h3>输入手机号，红包入账</h3>
                    <input type="text" id="phoneNum" data-role="tel" v-model="hbOpenPhone" placeholder="请输入您的手机号"
                           autofocus="autofocus"/>
                    <a id="next" @click="nextClick">下一步</a>
                </div>
            </div>
            <div class="hblogin" v-show="hbloginShow">
                <h3>请输入密码登录领取</h3>
                <div class="loginbox">
                    <div class="loginboxin">
                        <div class="loginpass clearfix">
                            <s class="iconfont icon-lock"></s>
                            <input type="text" id="upass" v-model="uduiPassWord" placeholder="您已是优兑会员，请输入密码"/>
                        </div>
                        <router-link to="/userGetPass">
                            <div class="loginfp">
                                <a>忘记密码？</a>
                            </div>
                        </router-link>
                        <div class="loginbtn" @click="loginGetHB">
                            <a>立即领取</a>
                        </div>
                        <div class="logintip">
                            <p>领完红包抽大奖，100%中奖！</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hbreg" v-show="hbregShow">
                <h3>初次见面，设置下账号密码哟~</h3>
                <div class="regbox">
                    <div class="regboxin">
                        <div class="regimgcode clearfix">
                            <div class="fl">
                                <s class="iconfont icon-shield"></s>
                                <input type="text" id="imgCode" v-model="masCode" placeholder="请输入图形验证码"/>
                            </div>
                            <div class="fr">
                                <img id="getImgCode" @click="getImgCode" :src="ImgCode"/>
                            </div>
                        </div>
                        <div class="regmsgcode clearfix">
                            <s class="iconfont icon-shield"></s>
                            <input id="verCode" type="text" v-model="verCodeNum" placeholder="请输入验证码"/>
                            <input id="getCode" :disabled="disabledAttr" v-model="btnTxt" @click="getVerCode"
                                   rol="true"/>
                        </div>
                        <div class="regpass">
                            <s class="iconfont icon-lock"></s>
                            <input type="password" v-model="setNerPassWord" placeholder="请设置个人账户密码"/>
                        </div>
                        <div class="regbtn" @click="regGetHB">
                            <a>立即领取</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hbget oldget" v-show="oldgetShow">
                <div class="hbgetimg"></div>
                <div class="hbgettxt"><span>{{cardDeno}}</span>元优兑红包已经入账</div>
                <div class="hbgetdes">-拼手气 抽大奖-<br/>100%中奖</div>
                <div class="hbgetbtn" @click="hbgejump">去抽奖</div>
            </div>
            <div class="hbget newget" v-show="newgetShow">
                <div class="hbgetimg"></div>
                <div class="hbgettxt"><span></span>元优兑红包已经入账</div>
                <div class="hbgetdes">{{newgetHbgetdesHtml}}</div>
                <div class="hbgetqrcode">
                    <img :src="actQrcode"/>
                </div>
            </div>
            <div class="rescan">
                <div class="hberrorqrcode">
                    <img :src="erWeiMaImg"/>
                </div>
                <div class="hberrortxt">长按识别关注<br/>可能还有大奖藏在这里</div>
            </div>
            <div class="hbget retips" v-show="retipsShow">
                <div class="hbgetimg"></div>
                <div class="hbgettxt">红包已被领走</div>
                <div class="hbgetdes">亲，本卡已被使用，您若领取了红包，请到“用户中心-我的活动”抽奖。</div>
                <router-link to="/myActivity">
                    <div class="hbbtn">去查看</div>
                </router-link>
            </div>
            <!-- <div class="hberror">
                <div class="hberrorimg"></div>
                <div class="hberrortxt">长按识别关注<br/>抽奖机会藏在这里</div>
                <div class="hberrorqrcode">
                    <img src="" />
                </div>
            </div> -->
            <div class="hbpopbg" v-show="maskShow"></div>
        </div>
        <loading :show="isLoading"></loading>
        <dialog-pop v-if="dialogOnOff" v-bind:dialog="dialogConfig" v-on:off="offDialog"></dialog-pop>
    </div>
</template>

<script type="text/javascript">
    import headnav from './../common/header.vue'
    import dialogPop from './../common/dialog-pop.vue'
    import loading from './../common/loading.vue'
    import {validatePhone} from './../../../static/mUtils'
    import encrypt      from './../../../static/md5'
    export default {
        data(){
            return {
                pagetitle: 'Hi，优兑商城给你发红包啦~',//标题配置
                isLoading: true,
                dialogOnOff: false,
                dialogConfig: {
                    autoOff: true,
                    txt: '',
                },
                cardNo: '',          //纸券号码
                cardPass: '',        //纸券密码
                agent: '',           //对应商家
                cardDeno: 0,        //红包钱数目
                scanFlag: false,     //能否拆红包
                erWeiMaImg: '',      //微信二维码的显示
                retipsShow: false,   //显示提示红包已经领过页面
                maskShow: false,    //蒙层的显示
                logFlag: true,     //登录的标识
                hbopenShow: false,    //显示输入手机号的页面
                hbOpenPhone: '',     //拆红包的手机号
                nextClickFlag: true, //是否可以点击输入手机号领红包下一步
                hbloginShow: false,   //优兑用户登录领奖
                hbregShow: false,    //不是优兑用户注册弹框
                ImgCode: '',         //图片验证码src
                masCode: '',         //图片验证码数值（input输入的值）
                disabledAttr: false, //获取验证码的按钮是否可用 false 可用， ture 不可用
                btnTxt: '获取验证码', //获取验证码可能是变成120s 递减，所以做成数据
                regFlag: true,       //可以注册
                uduiPassWord: '',    //密码
                qrCode: '',
                actId: '',
                actAppLink: '',
                actWebLink: '',
                actQrcode: '',
                actTopTip: '',
                actBottomTip: '',
                jumpFlag: false,
                oldgetShow: '',
                newgetHbgetdesHtml: '-拼手气 抽大奖-<br/>100%中奖',
                newgetShow: false,
                setNerPassWord:'',   //新人设置的新密码
                verCodeNum:'',      //验证码
            }
        },
        methods: {
            offDialog(){
                this.dialogOnOff = false;
            },
            _dialogShow(msg){
                this.dialogOnOff = true;
                this.dialogConfig.txt = msg;
            },
            nextClick(){
                if (this.nextClickFlag) {
                    let phoneNum = this.hbOpenPhone.trim()
                    if (validatePhone(phoneNum)) {
                        this.$store.dispatch('getPhoneNumisReg', {mobile: phoneNum}).then((data) => {
                            if (data == 1) {
                                this.hbloginShow = true;
                            } else {
                                this.hbregShow = true;
                            }
                            this.maskShow = true;
                        });
                    } else {
                        this._dialogShow('您输入的手机号格式不正确')
                    }
                }
            },
            hbgejump(){
                if (this.jumpFlag) {
                    location.href = this.actWebLink;
                }
            },
            _getMoney(type){
//                type是登陆和没有登录
                this.isLoading = true;
                this.$store.dispatch('industryDrawChance').then((data) => {
                    console.log(data);
                    if (data.success) {
//                        返回的东西
//                        IS_CHECK_CHANCE:"1"
//                        IS_SEND_VOUCHER:"0"
//                        actImg:"http://img1.udui.com/0/0/3f7be4f2f7d64a8eae25fa507a8b1e2e"
//                        activityAppLinkId:"ZKJ"
//                        appLinkId:"http://wx.youdui.org/app/subject/discount/rotate.html?actId=ZKJ&areaId=0"
//                        barcodeUrl:"http://img1.udui.com/0/0/565fd52f51104450986692b116086ffd"
//                        bottomTip:""
//                        money:"500.00"
//                        qrcodeURL:""
//                        topTip:""
//                        webLinkId:"http://wx.youdui.org/app/subject/discount/rotate.html?actId=ZKJ&areaId=0"
                        this.qrCode = data.module.qrcodeURL;
                        this.actId = data.module.activityAppLinkId;
                        this.cardDeno = Math.floor(data.module.money).toFixed(0);
                        this.actAppLink = data.module.appLinkId;
                        this.actWebLink = data.module.webLinkId;

                        if (data.module.barcodeUrl) {
                            this.actQrcode = data.module.barcodeUrl;
                        }
                        if (data.module.topTip) {
                            this.actTopTip = data.module.topTip.replace(/\|/g, '<br/>');
                        }
                        if (data.module.bottomTip) {
                            this.actBottomTip = data.module.bottomTip;
                        }
                        this.jumpFlag = true;
                        this.isLoading = false;
                        this.logFlag = true;
                        this.maskShow = true;
                        type == 'login' ? this.logFlag = true : this.regFlag = true;
                        this.on_off();
                    } else if (data.resultCode == 11001 || data.resultCode == 11067) {
                        //红包开
                        this.hbopenShow = true;
                    } else if (data.resultCode == 51002) {
                        //亲，您已累计三次抽奖，达到抽奖上限喽！把机会留给别人吧。
                        this._dialogShow(data.errorMessage)
                        type == 'login' ? this.logFlag = true : this.regFlag = true;
                    } else {
                        // 错误信息 "操作过期，请重新扫码！"
                        this._dialogShow(data.errorMessage)
                        type == 'login' ? this.logFlag = true : this.regFlag = true;
                    }
                    this.isLoading = false;
                });
            },
            _isSubscribe(){
                if (this.actTopTip != '') {
                    this.newgetHbgetdesHtml = this.actTopTip
                }
                if (this.actBottomTip != '') {
                }
                //检测是否已经关注公众号
                this.$store.dispatch('isSubscribe').then((reqs) => {
                        if (reqs.success) { //已关注
                            this.oldgetShow = true;
                        } else if (this.actQrcode != '') {
                            //在这里判断是否微信环境  如果不是微信环境不需要跳出扫码关注 直接引导用户去大转盘即可
                            var ua = window.navigator.userAgent.toLowerCase();
                            var isWx = (ua.match(/MicroMessenger/i) == 'micromessenger');
                            if (isWx) {
                                this.newgetShow = true;
                            } else {
                                this.oldgetShow = true;
                            }
                        } else {
                            let rescUrl = "http://www.ceshi.youdui.org/static";
                            switch (this.actId) {
                                case 'BJK1': //白金卡300-800
                                    this.actQrcode = rescUrl + "/images/subject/smhb/BJK1.jpg"
                                    break;
                                case 'BJK2': //白金卡1000-2000
                                    this.actQrcode = rescUrl + "/images/subject/smhb/BJK2.jpg"
                                    break;
                                case 'FLK1000': //福礼卡1000
                                    this.actQrcode = rescUrl + "/images/subject/smhb/FLK1000.jpg"
                                    break;
                                case 'FLK2000': //福礼卡2000
                                    this.actQrcode = rescUrl + "/images/subject/smhb/FLK2000.jpg"
                                    break;
                                case 'HBK1': //红包卡500券
                                    this.actQrcode = rescUrl + "/images/subject/smhb/HBK1.jpg"
                                    break;
                                case 'HBK2': //红包卡1000券
                                    this.actQrcode = rescUrl + "/images/subject/smhb/HBK2.jpg"
                                    break;
                                case 'LYK500': //礼遇卡500
                                    this.actQrcode = rescUrl + "/images/subject/smhb/LYK500.jpg"
                                    break;
                                case 'ZSK1000': //钻石卡1000
                                    this.actQrcode = rescUrl + "/images/subject/smhb/ZSK1000.jpg"
                                    break;
                                case 'ZSK2000': //钻石卡2000
                                    this.actQrcode = rescUrl + "/images/subject/smhb/ZSK2000.jpg"
                                    break;
                                case 'ZZK10000': //至尊卡
                                    this.actQrcode = rescUrl + "/images/subject/smhb/ZZK10000.jpg"
                                    break;
                                case 'ND': //南都
                                    this.actQrcode = rescUrl + "/images/subject/smhb/ND.jpg"
                                    break;
                                case 'JJ500': //久久童装
                                    this.actQrcode = rescUrl + "/images/subject/smhb/JJ500.jpg"
                                    break;
                                case 'DSF1000': //都市风1000
                                    this.actQrcode = rescUrl + "/images/subject/smhb/DSF1000.jpg"
                                    break;
                                case 'GIANT1000': //捷安特1000
                                    this.actQrcode = rescUrl + "/images/subject/smhb/GIANT1000.jpg"
                                    break;
                                case 'XSK_ZKJ': //小白卡
                                    this.actQrcode = rescUrl + "/images/subject/smhb/XSK_ZKJ.jpg"
                                    break;
                                case 'XR2000': //新日2000
                                    this.actQrcode = rescUrl + "/images/subject/smhb/XR2000.jpg"
                                    break;
                                case 'ZKJ': //线下礼遇卡300/500跳折扣街
                                    this.actQrcode = rescUrl + "/images/subject/smhb/ZKJ.jpg"
                                    break;
                                case 'GIANT500': //捷安特500
                                    this.actQrcode = rescUrl + "/images/subject/smhb/GIANT500.jpg"
                                    break;
                                case 'DSFLYK500': //都市风礼遇卡500
                                    this.actQrcode = rescUrl + "/images/subject/smhb/DSFLYK500.jpg"
                                    break;
                                case 'ZKJ_ZW': //巨人科技折扣街
                                    this.actQrcode = rescUrl + "/images/subject/smhb/ZKJ_ZW.jpg"
                                    break;
                                case 'ZTLYK500': //众泰山地车500
                                    this.actQrcode = rescUrl + "/images/subject/smhb/DSFLYK500.jpg"
                                    break;
                                case 'XSJHBK2000': //新世纪红包卡
                                    this.actQrcode = rescUrl + "/images/subject/smhb/XSJHBK2000.jpg"
                                    break;
                                case 'YNLYK500': //毅牛贸易
                                    this.actQrcode = rescUrl + "/images/subject/smhb/YNLYK500.jpg"
                                    break;
                                case 'NYXLYK500': //诺亚信礼遇卡500
                                    this.actQrcode = rescUrl + "/images/subject/smhb/NYXLYK500.jpg"
                                    break;
                                case 'HSLTLYK500': //衡水联通礼遇卡500
                                    this.actQrcode = rescUrl + "/images/subject/smhb/HSLTLYK500.jpg"
                                    break;
                                case 'XXAWLYK500': //雄县艾沃
                                    this.actQrcode = rescUrl + "/images/subject/smhb/XXAWLYK500.jpg"
                                    break;
                                case 'KSAMLYK500': //昆山爱玛礼遇卡500
                                    this.actQrcode = rescUrl + "/images/subject/smhb/KSAMLYK500.jpg"
                                    break;
                            }
                        }
                    }
                );
            },
            on_off(){
                this.$store.dispatch('FromXzFlg').then(
                    (data) => {
                        if (data) {
                            this._isSubscribe();
                        } else {
                            this.oldgetShow = true;
                        }
                    }, () => {
                        //接口失败
                        this._dialogShow(data.errorMessage)
                    })
            },
            loginGetHB(){   //登录的方法
                if (this.logFlag) {
                    this.logFlag = false;
                    this.isLoading = true;
                    let un = this.hbOpenPhone.trim();
                    let upass = this.uduiPassWord.trim();
                    if (upass != '') {
                        this.$store.dispatch('loginfn', {phone: un, pwd: upass}).then((data) => {
                            this._getMoney('login');
                        }, (data) => {
                            this.isLoading = false;
                            this._dialogShow(data)
                        });
                    } else {
                        this.isLoading = false;
                        this._dialogShow('请输入密码')
                        this.logFlag = true;
                    }
                }
            },
            getImgCode(){
                this.$store.dispatch('getImgCode').then((data) => {
                    this.ImgCode = data.imgSrc;
                })
            },
            getVerCode(){
                if(this.hbOpenPhone.trim() != ''){
                    if (validatePhone(this.hbOpenPhone.trim())) {
                        let obj = {
                            phone: this.hbOpenPhone.trim(),
                            smsCode: this.masCode
                        }
                        this.$store.dispatch('getVerCode', obj).then(() => {
                            this.disabledAttr = true;
                            let num = 120;
                            let This = this;
                            let timer = setInterval(function () {
                                This.btnTxt = 120 + '(s)';
                                if (num > 0) {
                                    This.btnTxt = num-- + '(s)';
                                } else {
                                    clearInterval(timer);
                                    This.disabledAttr = false;
                                    This.btnTxt = '获取验证码';
                                }
                            }, 1000)
                        });
                    }else{
                        this._dialogShow('您输入的手机号格式不正确')
                    }
                }else{
                    this._dialogShow('请输入完成信息')
                }
            },
            regGetHB(){
                if (this.regFlag) {
                    this.regFlag = false;
                    this.isLoading = true;
                    if (this.hbOpenPhone.trim() != '' && this.setNerPassWord != '' && this.verCodeNum != '') {
                        if (this.setNerPassWord.length < 6 || this.setNerPassWord.length > 16) {
                            this.isLoading = false;
                            this._dialogShow('密码为6到16数字或字符')
                            return;
                        }
                        let obj = {
                            phone:this.hbOpenPhone.trim(),
                            pwd:encrypt.hex_md5(this.setNerPassWord.trim()),
                            code:this.verCodeNum.trim()
                        }
                        this.$store.dispatch('register',obj).then(()=>{
                            this._getMoney('reg');
                        },(data)=>{
                            this.isLoading = false;
                            this._dialogShow(data)
                        })
                    }else{
                        this.isLoading = false;
                        this._dialogShow('请输入完整的信息')
                        this.logFlag = true;
                    }
                }
            },
            hbOpen(){
                if (!this.scanFlag) {
                    this._dialogShow(this.scanErrMsg)
                }
                this._getMoney('login');
            },
            _initData(){
                //取路由参数初始化值
                this.carNo = this.$route.params.qh;
                this.cardPass = this.$route.params.mm;
                this.agent = this.$route.params.gc;
                if (this.cardNo != null && this.cardPass != null) {
                    //获取红包信息
                    this.$store.dispatch('industryDrawInfo', {
                        no: this.carNo,
                        password: this.cardPass,
                        gd: this.gd
                    }).then((data) => {
                        if (data.success) {  //红包卡没有用的情况
                            this.cardDeno = Math.floor(data.module.money).toFixed(0);
                            this.scanFlag = true;
                        } else if (data.resultCode == 51001) {   //红包卡用了的话    显示 亲，本卡已被使用，您若领取了红包，请到“用户中心-我的活动”抽奖
                            this.scanErrMsg = data.errorMessage;
                            this.isLoading = false;
                            //token获取方式，ture or false
                            this.$store.dispatch('FromXzFlg').then((data) => {
                                if (data) {
                                    //接口成功
                                    this._dialogShow(this.scanErrMsg)
                                    var ua = window.navigator.userAgent.toLowerCase();
                                    var isWx = (ua.match(/MicroMessenger/i) == 'micromessenger');
                                    if (isWx) {
                                        setTimeout(function () {
                                            this.erWeiMaImg = './../../assets/images/smbb/rescan.png'
                                        }, 2000)
                                    }
                                } else {
                                    this.retipsShow = true;
                                }
                                this.maskShow = true;
                            }, () => {
                                //接口失败
                                this._dialogShow(data.errorMessage)
                            });
                        } else {
                            this.scanFlag = false;
                            this._dialogShow(data.errorMessage)
                        }
                        this.isLoading = false;
                    });
                } else {
                    this.isLoading = false;
                    this._dialogShow('无法识别二维码，请将涂层刮干净。')
                }
                //获取图形验证码
                this.$store.dispatch('imgcodeCheck').then(() => {
                    this.$store.dispatch('getImgCode').then((data) => {
                        this.ImgCode = data.imgSrc;
                    })
                });
            }
        },
        created(){
            this.$nextTick(() => {
                //初始化页面的数据
                this._initData();
            })
        },
        components: {
            headnav, dialogPop, loading
        }
    }
</script>
