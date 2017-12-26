<style>
.brt {
	min-height: 100%;
	background: #e40021 url('../../assets/images/subject/brt/zpbg.jpg') no-repeat;
    background-size: 100% 100%;
}
.brt .lotteryBox {
	padding-top: 3.16rem;
	padding-bottom: 0.3rem;
}
.brt .rotateWrap {
	width: 6.6rem;
	height: 6.6rem;
	margin: 0 auto;
	position: relative;
}
.brt .rotateTable {
	width: 100%;
	height: 100%;
	background: url("../../assets/images/subject/brt/zpbg1.png") no-repeat;
	background-size: 100% 100%;
	position: relative;
	z-index: 2;
}
.brt .rotateCover {
	width: 5.82rem;
	height: 5.82rem;
	background: url("../../assets/images/subject/brt/zpcover.png") no-repeat;
	background-size: 100% 100%;
	position: absolute;
	left: 0.39rem;
	top: 0.39rem;
	z-index: 3;
	border-radius: 50%;
}
.brt #wheelcanvas {
    width: 5.82rem;
    height: 5.82rem;
    position: absolute;
    z-index: 0;
    left: 0.39rem;
    top: 0.39rem;
}
.brt .rotateBtn {
	width: 1.7rem;
	height: 2rem;
	background: url("../../assets/images/subject/brt/zparrow.png") no-repeat;
	background-size: 100% 100%;
	position: absolute;
	left: 2.45rem;
	top: 2.14rem;
	z-index: 5;
}
.brt .zpcs {
	width: 100%;
	height: 0.54rem;
	line-height: 0.54rem;
	text-align: center;
	margin: 0.6rem auto 0;
	font-size: 0.36rem;
	color: #fff;
}
.brt .lotteryRule,
.brt .myReward {
	float: left;
	display: block;
	bottom: 0;
	width: 1.4rem;
	height: 0.54rem;
	background: rgba(0, 0, 0, 0.3);
	font-size: 0.24rem;
	color: #fff;
}
.brt .lotteryRule {
	border-top-right-radius: 0.27rem;
	border-bottom-right-radius: 0.27rem;
}
.brt .myReward {
	border-top-left-radius: 0.27rem;
	border-bottom-left-radius: 0.27rem;
}
.brt .lotteryNum {
	float: left;
	width: 4.7rem;
	height: 0.5rem;
}
.brt .lotteryNum span {
	padding: 0 0.06rem;
	margin: 0 0.12rem;
	color: #fcff00;
	border-radius: 0.06rem;
	background: rgba(0, 0, 0, 0.3);
}
.brt .rulePop{
	position: fixed;
	z-index: 11;
	background: #fff;
	border-radius: 0.1rem;
	width: 6.5rem;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
	overflow: hidden;
	padding-bottom: 1px;
}
.brt .rulePop h3 {
	height: 1.2rem;
	text-align: center;
	line-height: 1.2rem;
	background-image: -webkit-linear-gradient(left, #ff7c49, #ff2a31);
	font-size: 0.4rem;
	color: #fff;
	font-weight: normal;
}
.brt .rulePop .ruleCon {
	padding: 0.36rem;
	max-height: 10rem;
	overflow: auto;
	font-size: 0.24rem;
	line-height: 1.5;
	color: #666;
}
.brt .rulePop .ruleCon p {
	margin: 0.2rem 0;
}
.brt .rulePop .ruleClose {
	display: block;
	width: 5.78rem;
	height: 0.84rem;
	line-height: 0.84rem;
	text-align: center;
	border-radius: 0.1rem;
	background: #ff2a31;
	color: #fff;
	font-size: 0.3rem;
	margin: 0.24rem auto 0.3rem;
}
.brt .noChance {
	position: fixed;
	z-index: 11;
	background: #fff;
	border-radius: 0.1rem;
	width: 6.5rem;
	padding: 0.12rem;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
	text-align: center;
}
.brt .noChance .notice {
	font-size: 0.3rem;
	margin: 0.2rem 0;
}
.brt .noChance a {
	display: block;
	width: 100%;
	height: 0.84rem;
	line-height: 0.84rem;
	text-align: center;
	border-radius: 0.1rem;
	background: #ff2a31;
	color: #fff;
	font-size: 0.3rem;
}

.brt .winPop {
	width: 6.42rem;
	position: absolute;
	top: 1.2rem;
	left: 0.51rem;
	z-index: 11;
}
.brt .winPop h3 {
	height: 1.08rem;
	background: url("../../assets/images/subject/brt/zpwintt.png") no-repeat;
	background-size: 100% 100%;
}
.brt .winPop .winCon {
	width: 5.4rem;
	margin: 0 auto;
	background: #fff8ce;
	padding-bottom: 0.54rem;
	border-bottom-left-radius: 0.3rem;
	border-bottom-right-radius: 0.3rem;
}
.brt .winTxt {
	text-align: center;
	padding: 0.3rem 0;
	font-size: 0.24rem;
}
.brt .winName,
.brt .winPrice {
	color: #333;
	font-size: 0.28rem;
	padding: 0 0.48rem;
}
.brt .winPrice {
	line-height: 0.35rem;
	max-height: 0.7rem;
	overflow: hidden;
}
.brt .winTip {
	color: #999;
	text-align: center;
}
.brt .winImg {
	width: 3.65rem;
	height: 3.65rem;
	margin: 0.6rem auto;
}
.brt .winImg img {
	width: 100%;
	height: 100%;
	display: block;
}
.brt .winPop a {
	display: block;
	width: 5.4rem;
	height: 0.9rem;
	line-height: 0.9rem;
	border-radius: 0.45rem;
	background: #e50a42;
	color: #fedd3a;
	text-align: center;
	margin: 0.36rem auto 0;
	font-size: 0.3rem;
	font-weight: bold;
}
.brt .countdown {
	height: 0.6rem;
	line-height: 0.6rem;
	padding: 0.12rem 0;
	font-size: 0.26rem;
}
.brt .countdown em{
	padding: 0.05rem 0.05rem;
	margin: 0 0.05rem;
	background: rgba(0,0,0,0.4);
	color: #fff;
	border-radius: 0.05rem;
}


@keyframes rotate {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
.brt .onrotate {
	animation: rotate 0.5s infinite linear forwards;
}
</style>
<template>
<div class="brt">
    <div class="lotteryBox">
		<div class="rotateWrap">
			<div class="rotateTable">
				<canvas class="item" :class="[rotState?'onrotate':'']" id="wheelcanvas"></canvas>
				<div class="rotateCover"></div>
			</div>
			<div class="rotateBtn" @click="doLottery()"></div>
		</div>
		<div class="clearfix zpcs">
			<a class="lotteryRule" @click="ruleShow=true">抽奖规则</a>
			<p class="lotteryNum">您还有<span>{{brt.chance.remainChangce}}</span>次抽奖机会</p>
			<router-link :to="'/brt/myrecord/'+$route.params.actId" class="myReward">中奖记录</router-link>
		</div>
	</div>
    <div v-if="winShow" class="winPop winCash">
		<h3></h3>
		<div class="winCon">
			<div class="winTxt">
				<p class="winName">您抽中了</p>
				<p class="winPrice" v-html="winTxt"></p>
				<countdown v-if="brt.winAward.awardType==1" :cdType="'txt'" :endTime="Number(brt.winAward.expireTime)" :callback="cdEnd">领取时限：</countdown>
			</div>
			<div class="winImg"><img :src="brt.winAward.img" /></div>
			<p v-if="brt.winAward.awardType==2" class="winTip">该现金可在优兑商城购物使用，不可提现<br/>使用有效期：3个月</p>
		</div>
		<router-link v-if="brt.winAward.awardType==2||brt.winAward.awardType==3" to="/myWallet" class="winCheck">立即查看</router-link>
		<router-link v-if="brt.winAward.awardType==1" :to="'/rdDetail/envId/'+brt.winAward.envId+'/actId/'+brt.winAward.activityId" class="winCheck">立即领奖</router-link>
		<router-link v-if="brt.winAward.awardType==4" :to="'/brt/localWin/'+brt.winAward.chanceActivityCode+'/'+brt.winAward.chancePartitionId+'/'+brt.winAward.expireTime" class="winCheck">立即领奖</router-link>
	</div>
	<div v-if="noChanceShow" class="noChance">
		<div class="con">
			<div class="topImg">
				<img src="../../assets/images/subject/fail.png" />
			</div>
			<div class="notice">
				小主，本张VIP红包卡已经抽过奖了哦~<br/> 请去个人中心查看您抽到的奖品！
			</div>
			<a @click="noChanceShow=false">知道了</a>
		</div>
	</div>
    <div v-if="ruleShow" class="rulePop">
		<h3>抽奖规则</h3>
		<div class="ruleCon" v-html="ruleHtml"></div>
        <a class="ruleClose" @click="ruleShow=false">去抽奖</a>
	</div>
	<layer v-if="ruleShow||winShow||failShow||noChanceShow" v-on:clickMask="winShow=false"></layer>
</div>
</template>

<script>
import {
    mapGetters
}
from 'vuex'

import layer from './../common/layer.vue'
import swiper from '../../../static/swiper-3.4.0.min'
import common from '../../../static/common'
import countdown from './../common/countdown.vue'

const components = {
    layer,countdown
}
export default {
    data() {
        return {
            x:300,
            y:300,
            r:300,
            turnplate:{
				restaraunts: [], //大转盘奖品名称
				awardLevel: [], //奖品等级
				imgs: [], //奖品图片
				colors: ["#f57301", "#5283f9", "#eb1517", "#311df0", "#a800fe", "#f7198a", "#f57301", "#5283f9", "#eb1517", "#311df0", "#a800fe", "#f7198a"], //大转盘奖品区块对应背景颜色
				outsideRadius: 300, //大转盘外圆的半径
				textRadius: 240, //大转盘奖品位置距离圆心的距离
				insideRadius: 0, //大转盘内圆的半径
				startAngle: 1.5 * Math.PI, //开始角度
				bRotate: false //false:停止;ture:旋转
			},
			updateSwiper:0,
			fxTxt:'',
			fxDes:'',
			fxUrl:'',
			fxImg:'',
            ruleHtml:'',
			ruleShow:false,
			winShow:false,
			failShow:false,
			noChanceShow:false,
			rotState:false
        }
    },
    computed: {
        ...mapGetters({ //
			brt:'brt'
        }),
        winTxt(){
            let wins = this.brt.winAward;
            let txt = '';
            switch (wins.awardType) {
                case 1:
                    txt = '<font color="red">价值 &yen;' + wins.origPrice + ' 元</font> ' + wins.awardDesc;
                    break;
                case 2:
                    txt = wins.awardCash + ' 元现金';
                    break;
                case 3:
                    txt = wins.awardVoucher + ' 元 优券红包';
                    break;
                case 4:
                    txt = wins.awardDesc;
                    break;
                default:

            }
            return txt;
        }
    },
    methods: {
		loadRewards(data){
			let that = this;
			for(let i = 0;i<data.length;i++){
				var oImg = new Image();
				oImg.src = data[i].img;
				this.turnplate.imgs.push(oImg);
				this.turnplate.restaraunts.push(data[i].awardDesc);
				this.turnplate.awardLevel.push(data[i].awardLevelName);
				oImg.onload = function(){
					that.drawRouletteWheel();
				}
			}
		},
        drawRouletteWheel() {
            let This = this;
            let canvas = document.getElementById("wheelcanvas");
			canvas.width = 600;
			canvas.height = 600;
			if(canvas.getContext) {
				//根据奖品个数计算圆周角度
				let arc = Math.PI / (this.turnplate.restaraunts.length / 2);
				let ctx = canvas.getContext("2d");
				//在给定矩形内清空一个矩形
				ctx.clearRect(0, 0, 2 * this.r, 2 * this.r);
				//strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式
				//font 属性设置或返回画布上文本内容的当前字体属性
				ctx.font = '28px Microsoft YaHei';
				let cont = 0;
				for(let i = 0; i < this.turnplate.restaraunts.length; i++) {
					let angle = this.turnplate.startAngle + i * arc;
					ctx.fillStyle = this.turnplate.colors[i];
					ctx.beginPath();
					//arc(x,y,r,起始角,结束角,绘制方向) 方法创建弧/曲线（用于创建圆或部分圆）
					ctx.arc(this.x, this.y, this.turnplate.outsideRadius, angle, angle + arc, false);
					ctx.arc(this.x, this.y, this.turnplate.insideRadius, angle, angle + arc, false);
					ctx.fill();
					//锁画布(为了保存之前的画布状态)
					ctx.save();
					//----绘制奖品开始----
					ctx.fillStyle = "#fff";
					let text = this.turnplate.restaraunts[i],
						levelTxt = this.turnplate.awardLevel[i],
						text2;
					let line_height = 30;
					//translate方法重新映射画布上的 (0,0) 位置
					ctx.translate(this.x + Math.cos(angle + arc / 2) * this.turnplate.textRadius, this.y + Math.sin(angle + arc / 2) * this.turnplate.textRadius);
					//rotate方法旋转当前的绘图
					ctx.rotate(angle + arc / 2 + Math.PI / 2);
					//添加对应图标
					var img = This.turnplate.imgs[cont];
					ctx.drawImage(img, -50, 45, 100, 100);

                    text2 = levelTxt + "||" + text;
					var text3 = text2.split("||");
                    for(var m = 0; m < text3.length; m++) {
						ctx.font = m == 0 ? 'bold 32px Microsoft YaHei' : 'normal 24px Microsoft YaHei';
						if(m > 0) {
							text3[m] = text3[m].substring(0, 9);
						}
						ctx.fillText(text3[m], -ctx.measureText(text3[m]).width / 2, m * line_height);
					}
					cont++;
					//把当前画布返回（调整）到上一个save()状态之前
					ctx.restore();
					//----绘制奖品结束----
				}
			}
		},
		doLottery(){
			let that = this;
			let canv = document.getElementById('wheelcanvas');
			let awards = this.brt.awards;
			if(this.brt.chance.canLottery&&this.brt.chance.remainChangce>0){
				that.rotState = true;
				this.$store.dispatch('brtDoLot',{
					activityCode:this.$route.params.actId,
					sameCityId:this.$route.params.areaId
				}).then(function(res){
					let winPos = 0;
					setTimeout(function(){
						that.stopRotate();
						if(res.resultType == 5){
							for(let i=0;i<awards.length;i++){
								if(awards[i].id==res.winAward.id){
									winPos = i;
								}
							}
							canv.style.transform = 'rotate('+360*(1-(winPos+0.5)/awards.length)+'deg)';
							that.winShow = true;
						}
					},2000)
				},function(){})
			}else{
				this.noChanceShow = true;
			}
		},
		startRotate(){
			this.rotState = true;
		},
		stopRotate(){
			this.rotState = false;
		},
		cdEnd(){

		}
    },
    components:components,
	mounted(){
        let that =this;
		this.$nextTick(function() {
			switch (that.$route.params.areaId) {
				case 0:
					that.ruleHtml = '<p>1、活动领取的红包内，包含由优兑商城补贴赠送的购物抵用券及VIP会员专享抽奖机会1次。赠送的购物抵用券可在优兑商城消费时抵用现金，1券抵用1元，不找零不兑现。</p>' +
							'<p>2、每个会员最多可领取3次红包，每领取1次红包，可参与1次抽奖。</p>' +
							'<p>3、活动中奖率１００％，抽到的所有中奖奖品均可用红包直接购买' + expireTime + '。同时，系统将自动赠送该中奖奖品等额的优券到会员账户；</p>' +
							'<p>4、所有的中奖奖品均快递上门，需自行支付邮费，商品不予退换；</p>' +
							'<p>5、抽取到的现金奖为现金奖券，不可提现，可在优兑全平台消费时使用，系统将直接充值到您在优兑的账户余额中，请您于中奖之日起3个月内使用，否则，逾期将直接从账户中扣除。</p>'
					break;
				default:
					that.ruleHtml = '<p>1、会员在优兑特约合作商家单笔消费现金部分达到指定额度（可咨询商家），即可获得1次抽奖机会，消费达到指定额度的次数越多，抽奖次数越多；</p>' +
							'<p>2、会员多次消费未达到指定金额不能累计抽奖，会员消费达到指定额度可参与同城抽奖活动，中奖率100%，所抽到的中奖奖品需在7天之内支付完成，逾期丧失领奖资格；</p>' +
							'<p>3、会员抽中一二等奖时，系统将自动赠送该中奖奖品等额的优券到会员账户；所中奖奖品中的一、二等奖奖品，需要自行支付邮费，商品不予退换；</p>' +
							'<p>4、会员抽取到三、四等奖后，点击进入奖品领取页面，任意且只能选择1款奖品下单领取；所中奖奖品中的三、四等奖奖品，需自行领取上门消费；</p>' +
							'<p>5、本活动最终解释权归优兑所有，如疑问请咨询400-080-1111。</p>'
			}
        })
	},
    created(){
        let that = this;
        this.$store.dispatch('getBRTbase',{		//获取活动基本信息及抽奖次数
            actId:that.$route.params.actId,
            cityId:that.$route.params.areaId
        }).then(function(res){
			if(res=='unlogin'){
				that.$router.push('/login');
			}
		},function(){})
        this.$store.dispatch('getBRTreward',{	//获取活动奖项
            actId:that.$route.params.actId,
            sameCityId:that.$route.params.areaId
        }).then(function(res){
			that.loadRewards(res);
        },function(){})
    }
}
</script>
