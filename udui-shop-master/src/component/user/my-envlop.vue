<style scoped>
    .my-wallet-box {
    }
    .my-wallet-box .envTab{height:0.74rem;line-height: 0.74rem;background:white;}
    .my-wallet-box .envTab li{float:left; width:50%; border-bottom:2px solid transparent; text-align: center; font-size: 0.26rem; color:black;}
    .my-wallet-box .envTab li.cur{border-bottom: 2px solid #ff2772;}
    .my-wallet-box .envList{ padding: 0.36rem 0.2rem;}
    .my-wallet-box .envList li{width: 100%; height:2rem; background: url("../../assets/images/rebg.png") no-repeat;background-size: 100% 100%;margin-bottom: 0.3rem;  }
    .my-wallet-box .envList li .fl{
        width: 2.7rem;
        height: 100%;
        text-align: center;
        line-height: 2.7rem;
    }
    .my-wallet-box .envList li .fl img{
        width:1.5rem;
        height:1.5rem;
        margin-top:0.3rem;
    }
    .my-wallet-box .envList li .fr{
        position: relative;
        width:4.36rem;
        box-sizing: border-box;
        padding-left:0.2rem;
        padding-top:0.3rem;
        padding-right:0.2rem;
        line-height: 0.4rem;
        color:#999;
    }
    .my-wallet-box .envList li .fr .envType{
        color:#ff2772;
        font-size: 0.32rem;
        margin-bottom:0.2rem;
    }
    .my-wallet-box .envList li .fr .expire{
        position: absolute;
        display: block;
        width: 2.6rem;
        height: 1.5rem;
        background: url("../../assets/images/yiguoqi.png") no-repeat;
        background-size: 100% 100%;
        right: 0.8rem;
        top: 0.3rem;
        z-index: 1;
    }
    .my-wallet-box .envList li .fr P{
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
</style>

<template>
    <div class="my-wallet-box">
        <headnav v-bind:title="pagetitle"></headnav>
        <div class="envTab">
            <ul class="clearfix">
                <li :class='{cur: changeShowType =="valid"}'  @click="tabSwitch" >已中奖品</li>
                <li :class='{cur: changeShowType =="invalid"}' @click="tabSwitch" >历史奖品</li>
            </ul>
        </div>
        <div class="envList">
            <ul class="valid" v-if="changeShowType =='valid'" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
                <li class="clearfix" v-for="item in myValidEnvData">
                    <div class="fl">
                        <img :src="item.giftImg">
                    </div>
                    <div class="fr">
                        <p class="envType">{{item.activityName}}</p>
                        <p class="envName">{{item.awardDesc}}</p>
                        <p class="envExpire">{{item.awardTime}}</p>
                    </div>
                </li>
            </ul>
            <ul class="invalid" v-if="changeShowType =='invalid'" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
                <li class="clearfix" v-for="item in myinValidEnvData">
                    <div class="fl">
                        <img :src="item.giftImg">
                    </div>
                    <div class="fr">
                        <p class="envType">{{item.activityName}}</p>
                        <p class="envName">{{item.awardDesc}}</p>
                        <p class="envExpire">{{item.awardTime}}</p>
                        <i class="expire"></i>
                    </div>
                </li>
            </ul>
        </div>
        <loading :show="shopListLoading"></loading>
    </div>
</template>
<script type="text/javascript">
    import {mapGetters}from 'vuex'
    import headnav from './../common/header.vue'
    import loading  from './../common/loading.vue'
    export default {
        data() {
            return {
                pagetitle: "我的红包",
                changeShowType:'',
                busy: false,
                pageNo:1,
                state:1,
                shopListLoading:true,
                eventCode : 'R003',
                clearEventCode : false,
                linkId : null
            }
        },
        computed:{
            ...mapGetters({
                myValidEnvData: 'myValidEnvData',
                myinValidEnvData: 'myinValidEnvData',
                validEvnlopHasnext: 'validEvnlopHasnext',
                invalidEvnlopHasnext: 'invalidEvnlopHasnext',
            }),
        },
        components: {
            headnav,loading
        },
        methods: {
            loadMore(){
                this.shopListLoading = true;
                this.busy = true;
                this.pageNo++;
                if(this.state==1){
                    if(this.validEvnlopHasnext){
                        this.$store.dispatch('addEnvData',{pageNo: this.pageNo, state: this.state}).then(()=>{
                            this.shopListLoading = false;
                        });
                    }else{
                        this.shopListLoading = false;
                    }
                }else if(this.state == 2){
                    if(this.invalidEvnlopHasnext){
                        this.$store.dispatch('addEnvData',{pageNo: this.pageNo, state: this.state}).then(()=>{
                            this.shopListLoading = false;
                        });
                    }else{
                        this.shopListLoading = false;
                    }
                }
                this.busy = false;
            },
            tabSwitch(){
                this.shopListLoading = true;
                this.changeShowType =="valid" ? this.changeShowType ="invalid" : this.changeShowType ="valid";
                this.state =  this.changeShowType =="valid" ? 1 : 2;
                this.pageNo = 1;
                this.$store.dispatch('getEnvData',{pageNo: this.pageNo, state:this.state}).then(()=>{
                    this.shopListLoading = false;
                });
            }
        },
        created() {
            this.$store.dispatch('tjTrack',{eventCode:this.eventCode,clearEventCode:this.clearEventCode,linkId : this.linkId}).then(function(){

            },function(){

            })
            this.changeShowType = 'valid';
            //初始化数据
            this.$store.dispatch('getEnvData',{pageNo:this.pageNo, state: 1}).then(()=>{
                this.shopListLoading = false;
            });
        }
    }
</script>
