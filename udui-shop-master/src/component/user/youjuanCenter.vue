<style scoped>
    .discountBanner{position: relative; font-size: 0;}
    .discountBanner .ruleBtn{width: 2rem;height: 0.6rem;position: absolute;left: 50%;bottom: 0;margin-left:-1rem;background: url("../../assets/images/user/rule.png") no-repeat center;background-size: 100% 100%;}
    .discountBanner .ruleBtn2{width: 2rem;height: 0.6rem;position: absolute;left: 50%;bottom: 0;margin-left:-1rem;background: url("../../assets/images/user/rule2.png") no-repeat center;background-size: 100% 100%;}
    .disTab{background-color: #fe0049; padding-top: 0.2rem;}
    .disTab ul{width:90%; margin:0 auto;}
    .disTab li{width:50%; float: left; height:1rem; text-align: center; color:white; box-sizing: border-box; padding:0.1rem; padding-bottom:0;}
    .disTab li span{display: inline-block; width:100%; color:#fd0049; text-align: center; line-height: 0.9rem; font-size: 0.32rem; height:100%; background:white; border-top-left-radius: 0.1rem;border-top-right-radius: 0.1rem;}
    .disTab li.curColor span{background-color:#cb003a; color:white;}
    .discounList{ padding-top: 0.03rem;padding-bottom: 0.15rem;margin: 0 0.1rem;background: #fff2f6;}
    .discounList .valid li{position: relative;background: #fff;border-bottom: 1px solid #d9d9d9;padding: 0.25rem 0.26rem 0.19rem 0.26rem;height: 2rem;  }
    .discounList .valid li img{float: left;width: 1.9rem;height: 1.9rem;  }
    .discounList .valid li .rightBox{float:left;width:4.6rem;margin-left:0.2rem;margin-top:0.2rem;}
    .discounList .valid li .rightBox .proName{font-size: 0.3rem;font-weight: bold; margin-bottom:0.2rem;}
    .discounList .valid li .rightBox .proCon{color:#666666;}
    .discounList .valid li .rightBox .btnLink{display: inline-block;padding:0.1rem 0.2rem; background-color:#fe0049; margin-top:0.1rem; float: right; border-radius: 0.3rem;}
    .discounList .valid li.lastLi img{width:100%;}
    .invalid li{background-color:white; margin-bottom:0.15rem;}
    .ruleCon{background-color:#fe0049; padding:0.2rem; color:white; line-height: 0.35rem;}
    .ruleCon img{margin-top:0.2rem;}
    .ruleCon p:nth-child(odd) {
        font-weight: 900;
    }
</style>
<template>
    <div class="youjuancenter">
        <headnav v-bind:title="pagetitle"></headnav>
        <div class="discountBanner">
            <img src="http://fstatic.udui.com/static/images/user/discountBg.jpg" alt="banner">
            <div v-if="!ruleShow" class="ruleBtn" @click="ruleOffOn"></div>
            <div v-if="ruleShow" class="ruleBtn2" @click="ruleOffOn"></div>
        </div>
        <div class="ruleCon" v-show="ruleShow">
            <p>Q：什么是优券？</p>
            <p>A：优券是优兑商城发行的购物代金券，1优券=1元。在优兑商城购物时，可用优券抵扣相应的金额。优券不找零，不兑现。</p>
            <p>Q：如何获取优券？</p>
            <p>A：新会员注册即赠100优券，其他方式可查看“赚券”页详情。</p>
            <p>Q：优券使用期限？</p>
            <p>A：自优券入账日起，保留1年使用权。</p>
            <p>Q：如何使用优券？</p>
            <p>A：当您的优券余额充足时，商品标价减去可抵用优券就是您所需支付的现金价；如优券余额不足，只抵扣当前优券余额。支付时系统默认优先使用优券抵扣现金。</p>
            <img src="http://fstatic.udui.com/static/images/user/egbg.jpg" alt="eg">
        </div>
        <div class="disTab">
            <ul class="clearfix">
                <li :class="{curColor:tabState == 'useRoll'}" @click="tabState='makeRoll'"><span>赚劵</span></li>
                <li :class="{curColor:tabState == 'makeRoll'}" @click="tabState='useRoll'"><span>用劵</span></li>
            </ul>
        </div>
        <div class="discounList">
            <ul class="valid" v-show="tabState == 'makeRoll'">
                <li class="clearfix">
                    <img class="img" src="http://fstatic.udui.com/static/images/user/showpic1.jpg" alt="img">
                    <div class="rightBox">
                        <p class="proName">推荐有礼</p>
                        <p class="proCon">每邀请一位好友注册,可获赠20优劵</p>
                        <router-link :to="'/userinvite'">
                            <a href="javascript:;"  class="btnLink btn1">去推荐</a>
                        </router-link>
                    </div>
                </li>
                <li class="clearfix">
                    <img class="img" src="http://fstatic.udui.com/static/images/user/showpic2.jpg" alt="img">
                    <div class="rightBox">
                        <p class="proName">晒单赠券</p>
                        <p class="proCon">分享订单可获赠20优劵</p>
                        <!--<p class="point">(进入订单详情可分享)</p>-->
                        <router-link :to="'/userOrders'">
                            <a href="javascript:;" class="btnLink btn2">我要晒单</a>
                        </router-link>
                    </div>
                </li>
                <li class="clearfix">
                    <img class="img" src="http://fstatic.udui.com/static/images/user/showpic3.jpg" alt="img">
                    <div class="rightBox">
                        <p class="proName">同城赠券</p>
                        <p class="proCon">线下部分同城商家，消费赠优券</p>
                        <router-link :to="'/tcshop/footBar'">
                            <a href="javascript:;" class="btnLink btn3">查看附近商家</a>
                        </router-link>
                    </div>
                </li>
                <li class="clearfix">
                    <img class="img" src="http://fstatic.udui.com/static/images/user/showpic4.jpg" alt="img">
                    <div class="rightBox">
                        <p class="proName">活动赠券</p>
                        <p class="proCon">线上或线下活动时以电子或纸质形式派发的优券，登录商城个人中心—我的红包—优券余额中查看或者充值。</p>
                    </div>

                </li>
                <li class="clearfix">
                    <img class="img" src="http://fstatic.udui.com/static/images/user/showpic5.jpg" alt="img">
                    <div class="rightBox">
                        <p class="proName">优兑红包卡</p>
                        <p class="proCon">优兑派发的VIP会员红包卡，扫描红包卡上二维码注册或登录优兑后，指定额度的优券直接入账。</p>
                    </div>
                </li>
                <li class="clearfix lastLi">
                    <img src="http://fstatic.udui.com/static/images/user/signimg.jpg" alt="img">
                </li>
            </ul>
            <ul class="invalid" v-show="tabState == 'useRoll'">
                <li>
                    <router-link to="/specialAct/151/part/0">
                        <img src="http://fstatic.udui.com/static/images/user/linkTtjx.jpg" alt="picture">
                    </router-link>
                </li>
                <li>
                    <a href="http://weixin.udui.com/app/subject/general.html?id=230&amp;from=uq">
                        <img src="http://fstatic.udui.com/static/images/user/linkZdm.jpg" alt="picture">
                    </a>
                </li>
                <li>
                    <a href="http://weixin.udui.com/app/subject/general.html?id=156&amp;from=uq">
                        <img src="http://fstatic.udui.com/static/images/user/linkArea.jpg" alt="picture">
                    </a>
                </li>
                <li class="linkZkj">
                    <router-link to="discountStreet/ZKJ/areaId/0">
                        <img src="http://fstatic.udui.com/static/images/user/linkZkj.jpg" alt="picture">
                    </router-link>
                </li>
            </ul>
        </div>
        <dialog-pop v-if="dialogOnOff" v-bind:dialog="dialogConfig" v-on:off="offDialog"></dialog-pop>
    </div>
</template>

<script type="text/javascript">
    import headnav from './../common/header.vue'
    import dialogPop from './../common/dialog-pop.vue'
    export default {
        data(){
            return {
                pagetitle: '优劵中心',//标题配置
                tabState:'makeRoll',   //makeRoll赚卷    useRoll用卷
                ruleShow:false,
                eventCode : 'R009',
                clearEventCode : false,
                linkId : null,
            }
        },
        methods: {
            ruleOffOn(){
                this.ruleShow = !this.ruleShow;
            }
        },
        created(){
            this.$store.dispatch('tjTrack',{eventCode:this.eventCode,clearEventCode:this.clearEventCode,linkId : this.linkId}).then(function(){

            },function(){

            })
        },
        components: {
            headnav, dialogPop
        }
    }
</script>
