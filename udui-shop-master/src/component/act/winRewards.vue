<style>
    .winRewards {
        background: #dc0b10;
        padding: 0.12rem;
        height: 100%;
        box-sizing:border-box;
    }
    .winTopTxt {
        background: #fc353a;
        color: #fff;
        text-align: center;
    }
    .winTopTxtType1 {
        padding: 0.24rem;
        line-height: 1.08;
    }
    .winTopTxtType2 {
        line-height: 1.5rem;
    }
    .winTopTxtT1 {
        font-size: 0.42rem;
        font-weight: bold;
    }
    .winTopTxtT2 {
        font-size: 0.252rem;
    }
    .winPros {
        height: 100%;
        background: #fff;
        border-radius: 0.18rem;
        overflow: hidden;
    }
    .winPros .wintt {
        height: 2.16rem;
        background: url('./../../assets/images/subject/discount/winttimg.jpg') center no-repeat;
        background-size: 3.9rem 0.96rem;
        text-align: center;
        line-height: 3.6rem;
        color: #e3363a;
        font-size: 0.26rem;
        font-weight: bold;
    }
    .cutdown {
        font-size: 0.288rem;
        color: #666;
        position: relative;
        padding-bottom: 0.48rem;
        border-bottom: 1px solid #fca7a9;
        width: 6.6rem;
        text-align: center;
        margin: 0 auto;
    }
    .cutdown p, .cutdown li {
        float: left;
        color: #666;
    }
    .cutdown ul {
        display: inline-block;
    }
    .cutdown li {
        height: 0.48rem;
        line-height: 0.48rem;
    }
    .cutdown em{
        color: #fff;
        background:#666;
        padding: 0 5px;
        border-radius: 3px;
        margin: 0 4px;
    }
    .winSinglePro {
        padding: 0.6rem;
    }
    .winProImg {
        width: 3.6rem;
        height: 3.6rem;
        border-radius: 0.24rem;
        margin: 0 auto;
    }
    .winProImg img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 0.24rem;
    }
    .winProName {
        font-size: 0.25rem;
        line-height: 1.5;
        margin: 0.36rem 0;
        max-height: 0.72rem;
        overflow: hidden;
        text-align: center;
    }
    .winProPrice {
        text-align: center;
        line-height: 0.51rem;
        color: #ee0a3b;
    }
    .winProPrice b {
        font-size: 0.48rem;
        font-weight: normal;
    }
    .winProPrice span {
        display: inline-block;
        font-size: 0.25rem;
        line-height: 0.48rem;
        border: 1px solid #ee0a3b;
        padding: 0 10px;
        margin: 0 5px;
        position: relative;
        top: -3px;
        border-radius: 2px;
    }
    .winProPrice i {
        padding: 0.18rem;
        vertical-align: middle;
        color: #999;
        text-decoration: line-through;
    }
    .winProList {
        /*width: 6.6rem;*/
        padding: 0 0.2rem;
        margin: 0 auto;
        height:9.9rem;
        overflow-y: scroll;overflow-x: hidden;
    }
    .winBuyNow {
        display: block;
        position: absolute;
        width: 6rem;
        text-align: center;
        height: 0.816rem;
        line-height: 0.816rem;
        font-size: 0.3rem;
        color: #fff;
        background: #e3363a;
        border-radius: 0.06rem;
        bottom: 0.84rem;
    }
    .winProList ul {
        padding-bottom: 0.18rem;
    }
    .winProList li {
        padding: 0.18rem 0;
        border-bottom: 1px solid #fca7a9;
        position: relative;
    }
    .winProList li .listbuybtn {
        position: absolute;
        padding: 0.12rem;
        bottom: 0.24rem;
        right: 0;
        border-radius: 0.06rem;
        background: #e3363a;
        color: #fff;
        font-size: 0.27rem;
        line-height: 0.3rem;
    }
    .winProList li:last-child {
        border-bottom: none;
    }
    .winProList .itemImg {
        width: 1.518rem;
        height: 1.518rem;
        background: #fff;
        float: left;
    }
    .winProList .itemName {
        padding-left: 0.18rem;
        height: 0.84rem;
        line-height: 0.42rem;
        overflow: hidden;
        background: #fff;
        color: #333;
        font-size: 0.288rem;
        float: left;
        width: 3.96rem;
        text-align: left;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .winProList .itemPrice {
        padding-left: 0.24rem;
        height: 0.6rem;
        line-height: 0.6rem;
        color: #ee0a3b;
        padding-bottom: 0.06rem;
        float: left;
    }
    .winProList .itemPrice b {
        font-size: 0.324rem;
        vertical-align: middle;
        margin-right: 0.04rem;
        font-weight: normal;
    }
    .winProList .itemPrice span {
        padding: 0 0.1rem;
        font-size: 0.24rem;
        border-radius: 1px;
        vertical-align: middle;
        background: #fff;
        color: #ee0a3b;
        border: 1px solid #EE0A3B;
        border-radius: 0.06rem;
    }
    .winProList .itemPrice strong {
        vertical-align: middle;
        color: #999;
        text-decoration: line-through;
        font-weight: normal;
        padding: 0 0.12rem;
    }
    .winProList .itemBtn {
        display: none;
        height: 0.6rem;
        line-height: 0.6rem;
        background: #ea0041;
        color: #fff;
        font-size: 0.324rem;
    }
    .tips {
        width: 6.18rem;
        height: 2.76rem;
        background: #fff;
        filter: alpha(opacity=70);
        border-radius: 0.12rem;
        position: fixed;
        left: calc(50% - 3.09rem);
        top: 2.7rem;
        text-align: center;
        display: none;
        z-index: 10;
    }
    .tips1 {
        width: 5.304rem;
        height: 2.76rem;
        background: #fff;
        filter: alpha(opacity=70);
        border-radius: 0.12rem;
        position: fixed;
        left: calc(50% - 2.652rem);
        top: 2.7rem;
        text-align: center;
        display: none;
        z-index: 10;
    }
    .tips1 .queren {
        height: 0.84rem;
        line-height: 0.84rem;
        border-top: 1px solid #dad9de;
        margin-top: 0.27rem;
        color: blue;
        font-size: 0.36rem;
    }
    .tips_ico {
        width: 0.84rem;
        height: 0.84rem;
        display: block;
        background: url('./../../assets/images/subject/discount/tips_icon.png') no-repeat;
        background-size: 100%;
        margin: 0.27rem auto;
    }
    .bottn {
        position: absolute;
        bottom: 0;
    }
    .tips p {
        font-size: 0.27rem;
    }
    .tips p span {
        float: left;
        width: 3.018rem;
        height: 0.72rem;
        color: blue;
        font-size: 0.42rem;
        line-height: 0.72rem;
        border-top: 1px solid #dad9de;
    }
    .tips p .btn-left {
        border-right: 1px solid #dad9de;
    }
</style>

<template>
    <div class="winRewards">
        <div class="winPros">
            <div class="wintt">{{winttHTML}}</div>
            <div class="cutdown clearfix">
                <ul>
                    <li>领取时限：</li>
                    <li>
                        <countdown :cdType="'colon'" :endTime="Number(this.$route.params.et)" :callback="cdEnd"></countdown>
                    </li>
                </ul>
            </div>
            <div v-if="winAward.length==1" class="winSinglePro">
                <div class="winProImg">
                    <img :src="winAward[0].img" />
                </div>
                <div class="winProName">{{winAward[0].name}}</div>
                <div class="winProPrice">
                    <b>¥{{(Number(winAward[0].activityPrice) + Number(winAward[0].activityVoucher)).toFixed(2)}}</b>
                    <span>{{winAward[0].activityVoucher > 0 ? '可抵用' + winAward[0].activityVoucher + '优券' : '原价：' + winAward[0].origPrice}}</span>
                </div>
                <a @click="goToAct(winAward[0])" class="winBuyNow">立即领奖</a>
            </div>
            <div v-if="winAward.length>1" class="winProList">
                <ul>
                    <li data-souce="ghs" v-for="item in winAward" @click="goToAct(item)">
                        <div class="winSel clearfix">
                            <img class="itemImg" :src="item.img">
                            <div class="itemName">{{item.name}}</div>
                            <div class="itemPrice">
                                <b>¥{{(Number(item.activityPrice) + Number(item.activityVoucher)).toFixed(2)}}</b>
                                <span>{{item.activityVoucher > 0 ? '可抵用' + item.activityVoucher + '优券' : '原价：' + item.origPrice}}</span>
                            </div>
                            <div class="listbuybtn">立即<br>领奖</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <loading :show="isLoading"></loading>
        <dialog-pop v-if="dialogOnOff" v-bind:dialog="dialogConfig" v-on:off="offDialog"></dialog-pop>
    </div>
</template>

<script type="text/javascript">
    import {
        mapGetters
    }
    from 'vuex'

    import layer from './../common/layer.vue'
    import dialogPop from './../common/dialog-pop.vue'
    import loading  from './../common/loading.vue'
    import countdown from './../common/countdown.vue'
    export default {
        data(){
            return {
                winttHTML:'',
                isLoading:false,
                dialogOnOff:false,
                dialogConfig : {
                    autoOff:true,
                    txt:''
                }
            }
        },
        computed: {
            ...mapGetters({ //
    			zkj:'zkj'
            }),
            winAward(){
                let win = [];
                let awards = this.zkj.awards[this.$route.params.winIndex];
                if(awards.awardType==1){
                    win.push(awards);
                }
                if(awards.awardType==4){
                    win = win.concat(awards.package);
                }
                return win;
            }
        },
        methods: {
            cdEnd:function(){},
            offDialog : function(){
                this.dialogOnOff = false;
            },
            dialogMsg(msg){
                this.dialogOnOff = true;
                this.dialogConfig.txt = msg;
            },
            goToAct(item){
                if(item.prodOwnerType == 'tc'){
                    if(item.activityId == null || item.activityId == ''){
                        this.$router.push('/hotProDetail/proId/' + item.id);
                    }else{
                        this.$router.push('/hotProDetail/proId/' + item.id + '/actId/' + item.activityId);
                    }
                    this.istc = 1;
                }else{
                    if(item.activityId == null || item.activityId == ''){
                        this.$router.push('/goodsDetail/pro/' + item.id);
                    }else{
                        this.$router.push('/goodsDetail/pro/' + item.id + '/act/' + item.activityId);
                    }
                    this.istc = 0;
                }
            }
        },
        created(){
        },
        components: {
            dialogPop,loading,countdown
        }
    }
</script>
