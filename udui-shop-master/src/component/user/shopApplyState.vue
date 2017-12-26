<style scoped>
    .sa-container {
        padding-top: 3rem;
    }
    .state-text {
        text-align: center;
    }
    .state-text h3 {
        font-size: 0.48rem;
        color: #f5843e;
        font-weight: normal;
    }
    .state-text p {
        padding: 0.16rem 0.24rem;
        font-size: 0.3rem;
        color: #333;
    }
    .state-btn {
        text-align: center;
        margin-top: 0.9rem;
    }
    .state-btn a {
        color: #f5843e;
        border-radius: 0.06rem;
        width: 3.3rem;
        height: 0.72rem;
        line-height: 0.72rem;
        font-size: 0.3rem;
        text-align: center;
        border:1px solid #f5843e;
        display: block;
        margin: 0 auto;
    }
    .download{
        color: #f12469;
        border-radius: 0.06rem;
        width: 2.4rem;
        height: 0.7rem;
        line-height: 0.7rem;
        font-size: 0.3rem;
        text-align: center;
        border:1px solid #F12469;
        display: block;
        margin:0.3rem auto;
    }

</style>

<template>
    <div class="shopApplyState">
        <headnav v-bind:title="pagetitle"></headnav>
        <div class="sa-container">
            <!--审核中....-->
            <div class="sub-suc" v-if="state == 1">
                <div class="state-text">
                    <h3 style="color:#f66495;">已提交申请等待反馈</h3>
                    <p>恭喜您，已提交开店申请，优兑商城将在三日内进行审核反馈，请保持电话畅通，谢谢！</p>
                </div>
            </div>

            <!--初审失败-->
            <div class="sub-fail" id="cssb" v-if="state == 2 || state == 3 || state == 4 ||state == 5">
                <div class="state-text">
                    <h3>您的开店审核未通过</h3>
                    <!--<p>请重新提交申请</p>-->
                    <p>未通过原因:{{pageData.auditMemo}}</p>
                </div>
                <div class="state-btn">
                    <router-link to="/shopApply" v-if="">
                        <a>修改开店申请</a>
                    </router-link>
                </div>
            </div>

            <!--装修完成，开店成功-->
            <div class="shop-done" v-if="state == 6">
                <div class="state-text">
                    <h3 style="color:#31da65;">恭喜您，开店申请已经通过</h3>
                    <p>查看店铺信息,管理店铺,请点击下方按钮下载安装优兑商家版APP,登录商家版APP进行操作.</p>
                </div>
            </div>
            <div class="download">
                下载商家版APP
            </div>
            <div id="footer"></div>
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
                pagetitle: '开店审核',//标题配置
                state:'',
                pageData:{},
                eventCode : 'R011',
                clearEventCode : false,
                linkId : null
            }
        },
        methods: {},
        created(){
            this.$store.dispatch('tjTrack',{eventCode:this.eventCode,clearEventCode:this.clearEventCode,linkId : this.linkId}).then(function(){

            },function(){

            })
            //获取店铺申请状态
            this.$store.dispatch('getShopApplyState').then((data)=>{
                this.pageData = data;
                this.state = data.auditStatus;
            },(data)=>{
                console.log(data.errorMessage);
            });
        },
        components: {
            headnav, dialogPop
        }
    }
</script>
