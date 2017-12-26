<style scoped>
.brt_myrecord {
    min-height: 100%;
    background: #fff;
}
.recordBanner {
	height: 2.6rem;
	background: url("../../assets/images/subject/brt/zpjlbn.jpg") no-repeat;
	background-size: 100% 100%;
	position: relative;
}

.recordList .noRecord {
	background: #fff url("../../assets/images/subject/brt/norecord.jpg") top center no-repeat;
	background-size: 2.7rem 2.46rem;
	text-align: center;
	margin-top: 1.2rem;
	padding-top: 2.7rem;
	font-size: 0.3rem;
	color: #999;
}

.recordList li {
	width: 7rem;
	margin: 0.12rem auto;
	padding: 0.12rem;
	background: #fff;
	border-bottom: 1px solid #eee;
}

.recordList li .fl {
	width: 2.3rem;
	height: 2.3rem;
	margin-right: 0.06rem;
}

.recordList li .fl img {
	display: block;
	width: 100%;
	height: 100%;
}

.recordList li .fr {
	width: 4.4rem;
}

.recordList li .rgName {
	font-size: 0.26rem;
	line-height: 1.5;
	height: 0.78rem;
	overflow: hidden;
}

.recordList li .rgExpire {
	font-size: 0.24rem;
	color: #666;
	margin: 0.2rem 0 0.3rem;
}

.recordList li .rgBtn a {
	display: block;
	width: 100%;
	height: 0.65rem;
	color: #fff;
	line-height: 0.65rem;
	text-align: center;
	font-size: 0.26rem;
	border-radius: 0.05rem;
}

.recordList li .rgBtn a.act {
	background: #fb223f;
}

.recordList li .rgBtn a.dis {
	background: #bcbcbc;
}
</style>
<template>
<div class="brt_myrecord">
    <div class="recordBanner" @click="$router.go(-1)"></div>
    <div class="recordList">
        <ul v-if="brt.myRecord.length>0">
            <li v-for="data in brt.myRecord" class="clearfix">
                <div class="fl">
                    <img :src="data.giftImg">
                </div>
                <div class="fr">
                    <div class="rgName">{{data.giftName}}</div>
                    <div class="rgExpire">
                        {{data|filterRgx}}{{data.expireTime}}
                    </div>
                    <div class="rgBtn">
                        <router-link :to="data|filterBtnLink" v-if="data.awardType!=5&&data.awardType!=6" :class="data|filterBtnCls">{{data|filterBtnTxt}}</router-link>
                        <p v-else>所中奖品将在一周内充入指定手机号，请注意查收短信</p>
                    </div>
                </div>
            </li>
        </ul>
        <div v-else class="noRecord">
            亲，您还没有抽过奖哦！
        </div>
    </div>
</div>
</template>

<script>
import {
    mapGetters
}
from 'vuex'

export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters({ //
            brt: 'brt'
        })
    },
    filters: {
        filterRgx:function(data){
            let rgxTxt = '';
            switch (data.awardType){
                case 1:
                    rgxTxt = '领取有效期至：';
                    break;
                case 2:
                case 3:
                case 4:
                    rgxTxt = '使用有效期至：';
                    break;
                case 5:
                case 6:
                    rgxTxt = '中奖时间：';
                    break;
                default:
            }
            return rgxTxt;
        },
        filterBtnTxt:function(data){
            let btnTxt = '';
            switch (true){
                case data.awardType==1&&data.awardState==1:
                case data.awardType==4&&data.awardState==1:
                    btnTxt='去领取';
                    break;
                case data.awardType==1&&data.awardState==2:
                case data.awardType==4&&data.awardState==2:
                    btnTxt='已兑换';
                    break;
                case data.awardType==1&&data.awardState==3:
                case data.awardType==4&&data.awardState==3:
                    btnTxt='已过期';
                    break;
                case data.awardType==2:
                case data.awardType==3:
                    btnTxt='查看入账';
                    break;
                default:
            }
            return btnTxt;
        },
        filterBtnCls:function(data){
            let btnClass = '';
            switch (true){
                case data.awardType==1&&data.awardState==2:
                case data.awardType==1&&data.awardState==3:
                case data.awardType==4&&data.awardState==2:
                case data.awardType==4&&data.awardState==3:
                    btnClass = 'dis';
                    break;
                case data.awardType==1&&data.awardState==1:
                case data.awardType==4&&data.awardState==1:
                case data.awardType==2:
                case data.awardType==3:
                    btnClass = 'act';
                    break;
                default:
                    btnClass = '';
            }
            return btnClass;
        },
        filterBtnLink:function(data){
            let btnLink = '';
            switch (true){
                case data.awardType==1&&data.awardState==1:
                    btnLink = '/rdDetail/envId/'+data.envId+'/actId/'+data.activityId;
                    break;
                case data.awardType==4&&data.awardState==1:
                    btnLink = '/mall';
                    break;
                case data.awardType==2:
                case data.awardType==3:
                    btnLink = '/myWallet';
                    break;
                default:
                    btnLink = '';
            }
            return btnLink;
        }
    },
    methods: {

    },
    created() {
        this.$store.dispatch('getBRTmyrecord',{
            pageNo:1,
            state:0,
            activityType:'',
            activityCode:this.$route.params.actId
        });
    }
}
</script>
