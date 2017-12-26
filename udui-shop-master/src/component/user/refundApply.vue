<style scoped>
    .refundPro{height:2rem; padding:0.2rem; box-sizing: border-box; }
    .refundPro .gImg{width:1.64rem; height:1.64rem; float:left;}
    .refundPro .gInfo{padding-left:0.2rem; float:left; width:5rem;}
    .refundPro .gInfo .gName{height:0.6rem}
    .refundPro .gInfo .gSpec{height:0.6rem}
    .refundPro .gInfo .gPrice{height:0.6rem}
    .refundPro .gInfo .gNum{float:right;}
    .rWrap{padding: 0.2rem; background-color:white;}
    .rWrap h4{font-weight: normal; line-height: 2;}
    .rWrap h4 i{color:#ff637f;}
    .rWrap input, .rWrap select{ width: 95%;  padding: 0 10px; box-sizing: border-box; height:0.7rem; border-radius: 0.05rem; font-size: 24px; border:1px solid #999; margin-top:0.1rem;}
    .rWrap select option{font-size: 14px; padding-left:0;}
    .rfSub{text-align: center;height:0.8rem;line-height: 0.8rem; background-color:#ff2772; font-size: 0.28rem; color:white; width:80%; margin:0.5rem auto; border-radius: 0.05rem; }
    .rmUpload li{width:33.33%; float:left; height:2rem; padding:0.2rem; box-sizing: border-box;border:1px solid #ccc;}
    .upLoadImg{font-size: 0.28rem; margin-bottom:0.2rem; margin-top:0.2rem; border-radius: 0.05rem; background-color:#ff2772;}
</style>

<template>
    <div class="refundApply">
        <headnav v-bind:title="pagetitle"></headnav>
        <div class="refundPro clearfix" v-for="data in orderInfoData.orderItemList">
            <div class="gImg">
                <!--<router-link :to="'/goodsDetail/pro/'+data.productId">-->
                    <img :src="data.productImgUrl">
                <!--</router-link>-->
            </div>
            <div class="gInfo">
                <div class="gName">{{data.productName}}</div>
                <div class="gSpec"></div>
                <div class="gPrice">
                    <span class="gp">¥{{data.unitSellerPrice+data.unitVouchers}}<i>(可抵用{{data.unitVouchers}}优券)</i></span>
                    <span class="gNum">x{{data.count}}</span>
                </div>
            </div>
        </div>
        <div class="rWrap refundMoney">
            <h4>
                <i>*</i>
                <span>退款金额（元）</span>
                <em></em>
            </h4>
            <div class="rmInput">
                <input type="text" :value="orderInfoData.orderItemList[0].totalPay || orderInfoData.orderItemList.totalPay" readonly="readonly" style="font-size: 0.3rem;background-color: #ddd;">
            </div>
        </div>
        <div class="rWrap refundType">
            <h4>
                <i>*</i>
                <span>选择退货/退款</span>
            </h4>
            <div class="typeSel">
                <select @change="selectTH" v-model="THtype" style="font-size: 0.26rem;">
                    <option value="">选择退货/退款</option>
                    <option value="1">仅退款</option>
                    <option value="2">退货退款</option>
                    <!--<option value="3">换货</option>-->
                </select>
            </div>
        </div>
        <div class="rWrap refundReason">
            <h4>
                <i>*</i>
                <span>{{erjiText}}</span>
            </h4>
            <div class="reasonSel">
                <select v-model="reasonSel" style="font-size: 0.26rem;">
                    <option :value="item.value" v-for="item in erjiOption">{{item.text}}</option>
                </select>
            </div>
        </div>
        <div class="rWrap refundMsg">
            <h4>
                <i>*</i>
                <span>{{sanjiText}}</span>
                <em></em>
            </h4>
            <div class="rmInput" >
                <input type="text" value="" v-model="refundMsg" style="font-size: 0.26rem;">
            </div>
        </div>
        <div class="rWrap">
            <h4>
                <span>上传凭证（最多三张）</span>
                <em></em>
            </h4>
            <vue-file-upload
                style="font-size: 0.26rem;"
                class="upLoadImg"
                url="http://api.youdui.org/api/v1/file"
                ref="vueFileUploader"
                :max="3"
                :autoUpload=true
                v-bind:events='cbEvents'
                v-bind:filters="filters"
                v-bind:request-options="reqopts"
                v-on:onAdd="onAddItem">
            </vue-file-upload>
            <ul class="clearfix rmUpload">
                <li v-for="file in files">
                    <img :src="onPreview(file)" alt="">
                </li>
            </ul>
            <p class="rfSub" @click="subForm">提交</p>
        </div>
        <router-link  class="linkBtn" to="/refundApply">{{probtnText}}</router-link>
        <dialog-pop v-if="dialogConfig.txt"  v-bind:dialog="dialogConfig" v-on:off="offDialog"></dialog-pop>
    </div>
</template>

<script type="text/javascript">
    import headnav from './../common/header.vue'
    import dialogPop from './../common/dialog-pop.vue'
    import VueFileUpload from 'vue-file-upload';
    import {
        mapGetters
    }
        from 'vuex'
    export default {
        data(){
            return {
                pagetitle: '申请退款/退货',       //标题配置
                erjiText:'退款原因：',             //二级选型的文字
                sanjiText:'退款说明',
                reasonSel:'',    //退款原因
                refundMsg:'',    //退款说明
                THtype:'',       //退款类型
                imgSrcs:[],
                erjiOption:[],
                dialogConfig: {
                    autoOff: true,
                    txt: ''
                },
                files:[],
                //过滤器回调
                filters:[
                    {
                        name:"imageFilter",
                        fn(file){
                            var type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
                            var isImg = '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1
                            return isImg;
                        }
                    }
                ],
                //事件回调
                cbEvents:{
                    onCompleteUpload:(file,response,status,header)=>{
                        this.imgSrcs.push(response.module);
                    },
                    onAddFileSuccess:(file)=>{
                        console.log(file);
                    }
                },
                reqopts:{
                    formData:{
                        tokens:'tttttttttttttt'
                    },
                    responseType:'json',
                    withCredentials:true
                }
            }
        },
        computed: {
            ...mapGetters({
                orderInfoData: 'orderInfoData'
            }),
        },
        methods: {
            subForm(){
                this.$nextTick(()=>{
                    if(this.$route.query.order && this.$route.query.orderItem && this.reasonSel && this.THtype ){
                        let subParm = {
                            "orderNo": this.$route.query.order,
                            "orderItemId": this.$route.query.orderItem,
                            "afterSalesReason": this.reasonSel,
                            "memo": this.refundMsg,
                            "img": this.imgSrcs.toString(),
                            "type": this.THtype
                        }
                        //这里的传参需要Json转成字符串才可以
                        subParm = JSON.stringify(subParm)
                        this.$store.dispatch('refundSub',subParm).then(()=>{
                            this.dialogConfig.txt='申请已提交';
                            this.$router.push('/refundState/oid/'+this.orderInfoData.orderItemList[0].id);
                        },(data)=>{
                            this.dialogConfig.txt=data;
                        });
                    }else{
                        this.dialogConfig.txt='请填写完整内容';
                    }
                })
            },
            offDialog : function(){
                this.dialogConfig.txt="";
            },
            onAddItem(files){
                var len = files.length-1;
                if(files[len] && files[len].type.indexOf("image") == 0){
                    if(files[len].size >= 3145728){
                        this.dialogConfig.txt="图片大小不可超过3M";
                        return false;
                    }
                }else{
                    this.dialogConfig.txt="只可上传图片文件";
                    return false;
                }
                this.files = files;
            },
            onPreview(file){
                var src = window.URL.createObjectURL(file.file);
                return src;
            },
            selectTH(el){
              if(el.target.value == 1){
                  this.erjiText = '退款原因：';
                  this.sanjiText = '退款说明：';
                  this.erjiOption = [
                      {
                          value:'',
                          text:'选择退款原因'
                      },
                      {
                          value:'11',
                          text:'未收到货'
                      },
                      {
                          value:'12',
                          text:'虚假发货'
                      },
                      {
                          value:'13',
                          text:'协商一致退款'
                      },
                      {
                          value:'14',
                          text:'其他'
                      },
                  ]

              }else if(el.target.value == 2){
                  this.erjiText = '退货并退款原因：'
                  this.sanjiText = '退货并退款说明：'
                  this.erjiOption = [
                      {
                          value:'',
                          text:'选择退货原因'
                      },
                      {
                          value:'21',
                          text:'七天无理由退货 (运费不退)'
                      },
                      {
                          value:'22',
                          text:'未按时发货'
                      },
                      {
                          value:'23',
                          text:'卖家错发 / 少发 / 漏发'
                      },
                      {
                          value:'24',
                          text:'商品质量问题'
                      },
                      {
                          value:'25',
                          text:'多拍 / 错拍 / 不想要 (运费不退)'
                      },
                  ]
              }
            },
        },
        created(){
            let orderNo = this.$route.query.order;
            this.$store.dispatch('getOrderInfo', {
                orderNo: orderNo
            });
        },
        components: {
            headnav, dialogPop,VueFileUpload
        }
    }
</script>
