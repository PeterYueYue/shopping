<style scoped>
.zkj {
	min-height: 100%;
	background: #fff;
	padding-bottom: 1px;
}
.zkjmain {
	height: 13.8rem;
	background: #ea1b5f url('../../assets/images/subject/discount/zkjmainbg.jpg') no-repeat;
	background-size: 100% 100%;
	position: relative;
}
.rotateTable {
	width: 5.4rem;
	height: 5.4rem;
	position: absolute;
	z-index: 2;
    top: 3.68rem;
    left: 1.07rem;
}
.rotateTable canvas {
	width: 100%;
	height: 100%;
}
.rotateBtn {
	width: 1.56rem;
	height: 2.04rem;
	background: url("../../assets/images/subject/discount/zparrow2.png") no-repeat;
	background-size: 100% 100%;
	position: absolute;
	left: 1.94rem;
	top: 1.5rem;
	z-index: 5;
}
.rotateCover {
	width: 100%;
	height: 100%;
	background: url("../../assets/images/subject/discount/zpcover2.png") no-repeat;
	background-size: 100% 100%;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 3;
	border-radius: 50%;
}
.zpcs {
	position: absolute;
	left: 0;
	bottom: 3.3rem;
	width: 100%;
	height: 0.54rem;
	line-height: 0.54rem;
	text-align: center;
	font-size: 0.42rem;
	color: #e4175a;
}
.lotteryRule {
	position: absolute;
	display: block;
	top: 0.24rem;
	right: 0.3rem;
	height: 0.42rem;
	line-height: 0.42rem;
	text-align: center;
	font-size: 24px;
	color: #fff;
	border-bottom: 1px solid #fff;
}
.lotteryNum span, .lotteryNum i {
	padding: 0 0.06rem;
	color: #fcff00;
}
.recordWrap {
	padding: 0.2rem 0 0.4rem;
	position: absolute;
	z-index: 5;
	left: 0;
	bottom: 1.6rem;
	width: 100%;
}
.allRecord {
	overflow: hidden;
	position: relative;
	color: #fff;
}
.allRecord ul {
	position: relative;
	left: 0;
	top: 0;
}
.allRecord li {
	height: 0.48rem;
	line-height: 0.48rem;
	font-size: 0.25rem;
}
.allRecord li span {
	display: block;
	float: left;
}
.allRecord li .uN {
	width: 2rem;
	padding-left: 0.5rem;
	overflow: hidden;
	white-space: nowrap;
}
.allRecord li .itemN {
	width: 4rem;
	margin-left: 0.5rem;
	height: 100%;
	overflow: hidden;
}
.smallRecord {
	height: 0.48rem;
}

.tabCon {
	padding: 0 0.12rem;
}
.tabCon .content {
	background-color: #fff;
	border-radius: 0.12rem;
	margin-bottom: 0.3rem;
	border: 1px solid #ddd;
}
.content h3 {
	font-size: 0.3rem;
	height: 0.66rem;
	line-height: 0.66rem;
	border-bottom: 1px solid #ddd;
}
.content h3 i {
	float: left;
	color: #ee950a;
}
.content h3 span {
	float: right;
	color: #999;
	margin-right: 0.18rem;
	font-weight: normal;
}
.tabCon li {
	padding: 0.1rem 0;
	position: relative;
	border-bottom: 1px solid #ddd;
}
.tabCon li:last-child {
	border-bottom: none;
}
.tabCon li i.zkIco {
	display: block;
	width: 0.7rem;
	height: 0.54rem;
	color: #fff;
	border-bottom-right-radius: 0.12rem;
	background: #ff4f00;
	position: absolute;
	left: 0.1rem;
	background: -webkit-radial-gradient(#ff8000 10%, #ff4f00);
}
.tabCon li i.zkIco s {
	position: absolute;
	top: -0.06rem;
	left: 0.1rem;
	font-size: 0.48rem;
	font-weight: 500;
}
.tabCon li i.zkIco sup {
	position: absolute;
	top: 0.06rem;
	left: 0.4rem;
	font-size: 0.2rem;
	letter-spacing: 0;
	line-height: 1;
}
.tabCon .itemImg {
	width: 1.53rem;
	height: 1.53rem;
	background: #fff;
	float: left;
}
.tabCon .itemName {
	height: 0.8rem;
	line-height: 0.4rem;
	overflow: hidden;
	background: #fff;
	color: #333;
	font-size: 0.26rem;
	float: left;
	width: 5.2rem;
	margin-left: 0.3rem;
	margin-bottom: 0.25rem;
}
.tabCon .itemPrice {
	height: 0.4rem;
	line-height: 0.4rem;
	color: #ff2772;
	float: left;
	margin-left: 0.3rem;
}
.tabCon .itemPrice b {
	display: block;
	float: left;
	font-size: 0.3rem;
	margin-right: 0.0775rem;
	font-weight: normal;
}
.tabCon .itemPrice span {
	display: block;
	float: left;
	padding: 0 5px;
	border-radius: 1px;
	color: #ff2772;
	border: 1px solid #ff2772;
	margin-left: 0.2rem;
}
.rulePop{
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
.rulePop h3 {
	height: 1.2rem;
	text-align: center;
	line-height: 1.2rem;
	background-image: -webkit-linear-gradient(left, #ff7c49, #ff2a31);
	font-size: 0.4rem;
	color: #fff;
	font-weight: normal;
}
.rulePop .ruleCon {
	padding: 0.36rem;
	max-height: 10rem;
	overflow: auto;
	font-size: 0.24rem;
	line-height: 1.5;
	color: #666;
}
.rulePop .ruleCon p {
	margin: 0.2rem 0;
}
.rulePop .ruleClose {
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
.noChance {
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
.noChance .notice {
	font-size: 0.3rem;
	margin: 0.2rem 0;
}
.noChance a {
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
@keyframes rotate {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
.onrotate {
	animation: rotate 0.5s infinite linear forwards;
}
</style>
<template>
<div class="zkj">
    <div class="zkjmain" :style="{backgroundImage:'url('+zkj.base.zkjBackImg+')'}">
		<div class="rotateTable">
			<canvas class="item" :class="[rotState?'onrotate':'']" id="wheelcanvas"></canvas>
			<div class="rotateBtn" @click="doLottery()"></div>
			<div class="rotateCover"></div>
		</div>
		<a class="lotteryRule" @click="ruleShow = true">活动须知</a>
		<div class="clearfix zpcs">
			<p class="lotteryNum">你共有<span>{{zkj.chance.totalChangce}}</span>次机会，今天还能抽<i>{{zkj.chance.remainChangce}}</i>次</p>
		</div>
		<div class="recordWrap">
			<div class="allRecord bigRecord">
				<ul>
					<li class="clearfix">
						<span class="uN">{{zkj.winRecord.bigAwards[0].userLogin}}</span>
						<span class="itemN">抽中“{{zkj.winRecord.bigAwards[0].giftName}}”</span>
					</li>
				</ul>
			</div>
			<div class="allRecord smallRecord swiper-container">
				<ul class="swiper-wrapper">
					<li v-for="data in zkj.winRecord.smallAwards" class="swiper-slide clearfix">
						<span class="uN">{{data.userLogin}}</span>
						<span class="itemN">抽中“{{data.giftName}}”</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="tabCon">
		<div v-for="pack in zkj.awards" class="content clearfix">
			<h3 class="clearfix"><i>{{pack.awardDesc.substring(0, 9)}}</i><span v-if="pack.chanceAppLinkId">中奖者任选其一购买即可</span></h3>
			<ul v-if="pack.chanceAppLinkId">
				<li v-for="data in pack.package" class="clearfix">
					<i v-if="data.awardType!=2&&data.awardType!=3" class="zkIco">
						<s>{{(data.activityPrice/data.origPrice*10).toFixed(1).split('.')[0]}}</s>
						<sup>.{{(data.activityPrice/data.origPrice*10).toFixed(1).split('.')[1]}}<br>折</sup>
					</i>
					<img class="itemImg" :src="data.img">
					<div class="itemName">{{data.name}}</div>
					<div class="itemPrice">
						<b>¥{{(data.activityVoucher+data.activityPrice).toFixed(2)}}</b>
						<span v-if="data.activityVoucher>0">可抵用{{data.activityVoucher}}优券</span>
						<del v-else>原价：{{data.origPrice}}</del>
					</div>
				</li>
			</ul>
			<ul v-else>
				<li class="clearfix">
					<i v-if="pack.awardType!=2&&pack.awardType!=3" class="zkIco">
						<s>{{(pack.activityPrice/pack.origPrice*10).toFixed(1).split('.')[0]}}</s>
						<sup>.{{(pack.activityPrice/pack.origPrice*10).toFixed(1).split('.')[1]}}<br>折</sup>
					</i>
					<img class="itemImg" :src="pack.img">
					<div class="itemName">{{pack.name}}</div>
					<div class="itemPrice">
						<b>¥{{(pack.activityVoucher+pack.activityPrice).toFixed(2)}}</b>
						<span v-if="pack.activityVoucher>0">可抵用{{pack.activityVoucher}}优券</span>
						<del v-else>原价：{{pack.origPrice}}</del>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<div v-if="noChanceShow" class="noChance">
		<div class="con">
			<div class="topImg">
				<img src="../../assets/images/subject/fail.png" />
			</div>
			<div class="notice">
				小主，您暂时还没有抽奖机会~<br/> 请先去商城逛逛！
			</div>
			<router-link to='/index'>知道了</router-link>
		</div>
	</div>
	<div v-if="ruleShow" class="rulePop">
		<h3>抽奖规则</h3>
		<div class="ruleCon" v-html="ruleHtml"></div>
		<a class="ruleClose" @click="ruleShow=false">去抽奖</a>
	</div>
	<layer v-if="ruleShow||winShow||failShow||noChanceShow"></layer>
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

const components = {
    layer
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
				colors: ["#f8ce09", "#fee134", "#f8ce09", "#fee134", "#f8ce09", "#fee134", "#f8ce09", "#fee134", "#f8ce09", "#fee134"], //大转盘奖品区块对应背景颜色
				outsideRadius: 300, //大转盘外圆的半径
				textRadius: 260, //大转盘奖品位置距离圆心的距离
				insideRadius: 0, //大转盘内圆的半径
				startAngle: 1.5 * Math.PI, //开始角度
				bRotate: false //false:停止;ture:旋转
			},
			updateSwiper:0,
			ruleHtml:'',
			fxTxt:'',
			fxDes:'',
			fxUrl:'',
			fxImg:'',
			ruleShow:false,
			winShow:false,
			failShow:false,
			noChanceShow:false,
			rotState:false
        }
    },
    computed: {
        ...mapGetters({ //
			zkj:'zkj'
        })
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
					ctx.fillStyle = "#675203";
					let text = this.turnplate.restaraunts[i],
						levelTxt = this.turnplate.awardLevel[i],
						text2;
					let line_height = 15;
					//translate方法重新映射画布上的 (0,0) 位置
					ctx.translate(this.x + Math.cos(angle + arc / 2) * this.turnplate.textRadius, this.y + Math.sin(angle + arc / 2) * this.turnplate.textRadius);
					//rotate方法旋转当前的绘图
					ctx.rotate(angle + arc / 2 + Math.PI / 2);
					//添加对应图标
					var img = This.turnplate.imgs[cont];
					ctx.drawImage(img, -55, 40, 110, 110);
					text = text.substring(0, 9);
					ctx.fillText(text, -ctx.measureText(text).width / 2, line_height);
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
			let awards = this.zkj.awards;
			if(this.zkj.chance.canLottery&&this.zkj.chance.remainChangce>0){
				that.rotState = true;
				this.$store.dispatch('zkjDoLot',{
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
							switch (res.winAward.awardType) {
								case 1:
									that.$router.push('/winRewards/'+winPos+'/et/'+res.winAward.expireTime);
									break;
								case 4:
									that.$router.push('/winRewards/'+winPos+'/et/'+res.winAward.expireTime);
									break;
								default:
							}
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
		}
    },
    components:components,
	mounted(){
		let that =this;
		this.$nextTick(function() {
			switch (that.$route.params.actId) {
				case 'ZKJ_FZCM':
					that.ruleHtml = '<p>1、活动期间，每人每天可签到1次，签到后可获得68元优券和1次日常抽奖机会；</p>' +
						'<p>2、每连续签到7天，第7天可参与1次专享抽奖活动。两个抽奖活动不同时享受；</p>' +
						'<p>3、日常抽奖活动包含低折扣实体奖品。专享抽奖活动包含免费实体奖品和优券；</p>' +
						'<p>4、优券是优兑商城特有的购物抵用券，可在优兑商城购物抵现使用，1券=1元，不转赠，不提现。可登录【优兑商城】个人中心查看；</p>' +
						'<p>5、如有未使用抽奖机会，可点击页面“点我抽奖”按钮完成抽奖；</p>' +
						'<p>6、抽中的实体奖品和优券点击中奖纪录查看。</p>'
					break;
				default:
					that.ruleHtml = '<p>1、在商城线上或线下现金支付超过10元，即可获得1次抽奖机会；</p>' +
						'<p>2、所有抽奖机会可累计使用，每个会员每天最多可使用3次抽奖机会；</p>' +
						'<p>3、抽中折扣街商品请在指定时间内购买；</p>' +
						'<p>4、购买折扣街抽中的商品，不再赠送折扣街抽奖机会；</p>' +
						'<p>5、抽中奖品池类的奖项可在对应奖品池中选择任一款商品购买（仅限1款）</p>' +
						'<p>6、此活动中所有“苹果”系列抽奖产品均由优兑商城赞助，与苹果公司（APPLE Inc）无关</p>'
			}
        })
	},
    created(){
        let that = this;
        this.$store.dispatch('getZKJbase',{		//获取活动基本信息及抽奖次数
            actId:that.$route.params.actId,
            cityId:that.$route.params.areaId
        }).then(function(res){
			if(res=='unlogin'){
				that.$router.push('/login');
			}
			common.browserInfo.changeTitle(res.base.zkjTitle);	//动态修改title
		},function(){})
        this.$store.dispatch('getZKJreward',{	//获取活动奖项
            actId:that.$route.params.actId,
            sameCityId:that.$route.params.areaId
        }).then(function(res){
			that.loadRewards(res);
			for(let i=0;i<res.length;i++){
                if(res[i].chanceAppLinkId!=null){
                    that.$store.dispatch('getZKJreward_JH',{	//获取活动聚合奖品信息
                        jhAwardLevel:res[i].awardLevel,
                        actId:res[i].chanceAppLinkId,
                        sameCityId:that.$route.params.areaId,
						index:i
                    })
                }
            }
        },function(){})
        this.$store.dispatch('getZKJwins',{		//获取活动中奖记录
            activityCode:that.$route.params.actId,
            topCount:20,
            priceLine:'',
            sameCityId:that.$route.params.areaId
        }).then(function(){
			let mySwiper = new Swiper(
                '.swiper-container', {
                    direction: 'vertical',
                    autoplay: 1500,
                    observer: true, //修改swiper自己或子元素时，自动初始化swiper
                    observeParents: true,
                    loop: true
                }
            )
		},function(){})
    }
}
</script>
