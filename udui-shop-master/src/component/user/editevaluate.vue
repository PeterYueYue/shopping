<style scoped>
    .container {
        width: 100%;
    }

    #tc-evaluate, #sc-evaluate {
        /* display: none; */
    }

    .p-star {
        height: 1.8rem;
        background-color: #fff;
        font-size: 0.25rem;
        margin-bottom: 0.18rem;
    }

    .p-star p {
        color: #999;
        text-align: center;
        height: 0.78rem;
        line-height: 0.78rem;
    }

    .p-star p i {
        font-size: 0.54rem;
    }

    .stars {
        display: inline-block;
        height: 0.6rem;
        width: 100%;
    }

    .stars a {
        display: inline-block;
        width: 0.6rem;
        height: 0.54rem;
        text-align: center;
        color: #ddd;
        line-height: 0.54rem;
    }

    .stars i {
        font-size: 0.54rem;
    }

    .star-full {
        color: #ff833e !important;
    }

    .p-con {
        background-color: #fff;
        padding: 0.27rem 0.18rem;
        margin-bottom: 0.18rem;
    }

    .p-info img {
        width: 1.092rem;
        height: 1.092rem;
        display: block;
        float: left;
    }

    .p-info p {
        padding-left: 0.3rem;
        padding-top: 0.3rem;
        width: 5.64rem;
        float: left;
    }

    .sp-info img {
        width: 1.092rem;
        height: 1.092rem;
        display: block;
        float: left;
    }

    .proName {
        overflow: hidden;
        position: relative;
        font-size: 0.25rem;
        color: #333;
    }

    .subName {
        color: #999;
        font-size: 0.25rem;
        line-height: 0.72rem;
        overflow: hidden;
    }

    .sp-info p {
        padding-left: 0.3rem;
        width: 5.64rem;
        float: left;
    }

    .p-txt {
        width: 7.08rem;
        padding-top: 0.27rem;
        position: relative;
    }

    textarea {
        font-size: 0.26rem;
        width: 6.84rem;
        height: 1.8rem;
        padding: 0.12rem;
        border: 1px solid #666;
    }

    .wordwrap {
        position: absolute;
        right: 0.12rem;
        bottom: 0.12rem;
        color: #999;
    }

    .wordwrap var {
        font-style: normal;
    }

    .up-img {
        padding-top: 0.27rem;
        line-height: 0.9rem;
    }

    .up-img span {
        color: #999;
    }

    .pic-btn {
        width: 0.9rem;
        height: 0.9rem;
        padding-right: 0.18rem;
        float: left;
        position: relative;
    }

    .pic-btn label {
        background: url("/static/images/user/photo.png") 0 0/0.9rem 0.9rem no-repeat;
        display: block;
        height: 100%;
        text-align: center;
        width: 100%;
    }

    .pic-btn input {
        display: none;
    }

    .pic-btn img {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }

    .pic-show {
        padding: 0 0.18rem;
        position: absolute;
        left: 0;
    }

    .pic-show img {
        float: left;
        width: 0.9rem;
        height: 0.9rem;
        margin-right: 0.18rem;
        display: block;
        overflow: hidden;
        border: 1px solid #ddd;
        box-sizing: border-box;
    }

    .action {
        position: fixed;
        bottom: 0;
        display: block;
        width: 100%;
        height: 0.9rem;
        background-color: #ff2772;
        text-align: center;
        line-height: 0.9rem;
        color: #fff;
        font-size: 0.324rem;
    }

    /*评价成功*/
    .cont {
        width: 100%;
    }

    .state {
        width: 100%;
        text-align: center;
        margin-top: 1.26rem;
    }

    .state i {
        font-size: 1.32rem;
        color: #44be45;
    }

    .cont p {
        width: 100%;
        margin: 0.24rem 0 0.72rem;
        text-align: center;
        font-size: 0.324rem;
        color: #666;
    }

    .cont a {
        display: block;
        width: 1.8rem;
        height: 0.72rem;
        font-size: 0.324rem;
        line-height: 0.72rem;
        text-align: center;
        color: #ff833e;
        border: 1px solid #ff833e;
        border-radius: 0.12rem;
        margin: 0 auto;
    }
</style>

<template>
    <div class="editevaluate">
        <headnav v-bind:title="pagetitle"></headnav>
        <div class="container" v-if="proInfo.orderItemList">
            <div class="p-star" v-if="proInfo.cityFlag == 1">
                <p>为商家打分</p>
                <p class="stars" rol="1">
                    <a v-for="index in [1,2,3,4,5]" @click="selectStart(index)">
                        <i class="iconfont " :class="index < startDefault+1 ? 'icon-favorfill star-full' : 'icon-favor'"></i>
                    </a>
                </p>
            </div>
            <div class="p-con"  v-for="(data,index) in proInfo.orderItemList">
                <div class="sp-info clearfix">
                    <img :src="data.productImgUrl">
                    <p class="proName">{{data.productName}}</p>
                    <p class="subName">{{data.productSpecFeachure}}</p>
                </div>
                <div class="p-txt clearfix wordCount">
                    <textarea name="text" class="comment" maxlength="120" v-model="textVal[index]"
                              placeholder="请写评价，是否喜欢该商品。"></textarea>
                    <span class="wordwrap">
                        <em class="word">{{(textVal[index]+'').length}}</em>/{{maxCount}}
                    </span>
                </div>
            </div>
            <a class="action" @click="creatCom">确认发布</a>
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
                pagetitle: '评论', //标题配置
                dialogOnOff: false,
                dialogConfig: {
                    autoOff: true,
                    txt: ''
                },
                startDefault: 2,    //默认星星的评价为2
                proInfo: {},        //页面信息
                maxCount: 120,       //最大的字数
                textVal: [],        //文字的内容
            }
        },
        computed(){

        },
        methods: {
            offDialog: function () {
                this.dialogOnOff = false;
            },
            creatCom(){
                let reqd = [];
                if (this.proInfo.cityFlag == 0) {    //普通商品
                    this.startDefault = 0;
                }
                if(this.textVal.length > 0 ){
                    this.textVal.forEach((item,index)=>{
                        var Pro = {
                            "grade":  this.startDefault ,
                            "memo": item,
                            "orderItemId":  this.proInfo.orderItemList[index].id,
                        };
                        reqd.push(Pro);
                    })
                    let reqVal = JSON.stringify(reqd);
                    this.$store.dispatch('creatCom',reqVal).then((data)=>{
                        //跳转到评论成功页面
                        this.$router.push('/evaluatesuc');
                    },(data)=>{
                        this.dialogOnOff = true;
                        this.dialogConfig.txt = data;
                    });
                }else{
                    this.dialogOnOff = true;
                    this.dialogConfig.txt = '请填写完成信息';
                }
            },
            selectStart(index){   //选择星星
                this.startDefault = index;
            },
            limtTxt(){
                let arr = this.textVal.slice();
                arr.forEach((item,index) => {
                    if (item.length == this.maxCount ) {
                        this.dialogOnOff = true;
                        this.dialogConfig.txt = '超过字数限制，多出的字将被截断！';
                    }
                });
            }
        },
        created(){
            //获得商品信息
            this.$store.dispatch('getOrderInfo', {
                orderNo: this.$route.params.no
            }).then((data) => {
                this.proInfo = data;
            }, (data) => { //接口返回错误
                this.dialogOnOff = true;
                this.dialogConfig.txt = data;
            });
        },
        watch: {
            textVal: function (value) {
                this.limtTxt();
            }
        },
        components: {
            headnav, dialogPop
        }
    }
</script>
