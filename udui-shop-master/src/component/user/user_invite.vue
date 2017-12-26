<style scoped>
    .invite-con{text-align: center; font-size: 0.26rem; }
    .invite-con .qrcodeimgbox{width:100%;  margin-top: 0.72rem;}
    .invite-con .qrcodeimgbox img{width:2.7rem; height:2.7rem;}
    .invite-con .share{height:2.3rem; }
    .invite-con .share a{display: inline-block;padding:0.2rem 0.44rem; background:#fb0081; border-radius: 0.05rem; margin-top:0.6rem;}
    .invite-des .myfuli{height:1.5rem; border-top:1px solid #e6e6e6; border-bottom: 1px solid #e6e6e6; background-color:white; text-align: left; padding-left:0.2rem; padding-top:0.3rem; box-sizing: border-box;}
    .invite-des .myfuli li .totp,.invite-des .myfuli li .totq{color:#ff7e6b;}
    .invite-des .myfuli .ckmx{display: inline-block; border-radius: 0.02rem; border:1px solid #333; padding:0.05rem 0.2rem; color:#333; margin-left:0.1rem;}
    .invite-des .shuom{height:2rem;background-color:white; text-align: left; padding-left:0.2rem; padding-top:0.3rem; line-height: 0.4rem;}
    .mask2{position: fixed;width: 100%;height: 100%;left: 0;top: 0;background-color: rgba(0,0,0,.6);z-index: 2000;}
    .mask2 img{height:auto; width:100%;}
</style>

<template>
    <div class="userinvite">
        <headnav v-bind:title="pagetitle"></headnav>
        <div class="invite-con">
            <p class="qrcodeimgbox"><img  :src="QrcodeImgSrc" /></p>
            <p class="yq">邀请好友扫码注册会员</p>
            <p class="share">
                <a @click="share">分享给好友</a>
            </p>
            <div class="invite-des">
                <ul class="myfuli">
                    <li>我的福利:</li>
                    <li>已成功邀请<span class="totp">{{ren_num}}</span>人注册，累计获得奖励<span class="totq">{{giveTicket}}</span>优券
                        <router-link to="/myfriend">
                            <a class="ckmx" >查看明细</a>
                        </router-link>
                    </li>
                    <!--<li>累计获得好友消费佣金<span class="totc">0</span>元。</li>-->
                    <!--<li>累计推广会员<span class="tgnum">0</span>人，合伙人级别<span class="jb">V0</span>
                        <a class="hhrfl" href="../../app/subject/partner/lottery1.html">合伙人福利</a>
                    </li>-->
                </ul>
                <ul class="shuom">
                    <li>推广福利:</li>
                    <li>1、分享到朋友圈，推荐1个好友注册会员奖励20优券;</li>
                    <!--<li>2、推广的好友在优兑消费，可获得佣金回报，现金实时到账;</li>-->
                    <li>2、推广会员达到10人，可升级为优兑合伙人，尊享更多福利。</li>
                </ul>
            </div>
        </div>
        <div class="mask2" v-show="showMask2" @click="showMask2=false">
            <img src="http://fstatic.udui.com/static/images/user/guide1.png">
        </div>
        <dialog-pop v-if="dialogOnOff" v-bind:dialog="dialogConfig" v-on:off="offDialog"></dialog-pop>
        <loading :show="loading"></loading>
    </div>
</template>

<script type="text/javascript">
    import headnav from './../common/header.vue'
    import dialogPop from './../common/dialog-pop.vue'
    import loading      from './../common/loading.vue'
    export default {
        data(){
            return {
                pagetitle:'邀请会员',//标题配置
                QrcodeImgSrc:'',    //二维码地址
                dialogOnOff:false,  //弹层开关
                dialogConfig : {    //弹层配置
                    autoOff:true,
                    txt:''
                },
                showMask2:false,    //是否现实蒙层
                Friends_pageNo:1,   //第一页
                Friends_pageSize:15,//一页上有15个
                ren_num:0,          // 邀请人数
                giveTicket:0,       //获得优卷
                loading:true,       //加载动画
                eventCode : 'R006',
                clearEventCode : false,
                linkId : null
            }
        },
        methods:{
            offDialog : function(){
                this.dialogOnOff = false;
            },
            share(){
                //判断是否是微信
                let ua = window.navigator.userAgent.toLowerCase();
                let isWx = (ua.match(/MicroMessenger/i) == 'micromessenger');
                if(isWx){
                    this.showMask2 = true;
                }else{
                    this.dialogOnOff = true;
                    this.dialogConfig.txt = '请在微信中打开分享!!';
                }
            }
        },
        computed(){

        },
        created(){
            this.$store.dispatch('tjTrack',{eventCode:this.eventCode,clearEventCode:this.clearEventCode,linkId : this.linkId}).then(function(){

            },function(){

            })
            //请求后台二维码
            let p1 = this.$store.dispatch('getUserQrcode').then((data)=>{
                this.QrcodeImgSrc = data;
            });
            //查询推荐的好友
            let p2 = this.$store.dispatch('getUserFriends',{pageNo:this.Friends_pageNo,pageSize:this.Friends_pageSize}).then((data)=>{
                this.ren_num = data.length;
                //循环出所有的分数累加
                for(let i = 0; i<data.length;i++){
                    this.giveTicket += data[i].giveTicket
                }
            });
            //数据加载完毕之后隐藏加载动画
            Promise.all([p1,p2]).then(()=>{
                this.loading=false;
            });
        },
        components:{
            headnav,dialogPop,loading
        }
    }
</script>
