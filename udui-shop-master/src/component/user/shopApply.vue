<style scoped>
    .sa-container{padding:0.2rem;}
    .form-row .form-label{width:20%; float:left;}
    .form-row .form-input{width:80%; float:left;}
    .form-row .form-input input{height:0.75rem; width:100%; border-radius: 0.05rem; border:1px solid #999; line-height: 0.75rem; padding-left:0.1rem; box-sizing: border-box;}
    .form-row .form-input select{height:0.75rem;width:100%; font-size: 0.26rem; margin-bottom:0.2rem; padding-left:10px; -webkit-appearance: none;
        -webkit-tap-highlight-color: #fff;
        outline: 0;}
    .form-row .form-input select option{font-size: 14px;}
    .bMap{position: absolute; width:100%; left:0; top:0; background:red; z-index: 10;}
    .bMap .mapControl{position: fixed; z-index: 11; padding:10px 0;margin-left:0.2rem;}
    #setCenter{height:0.6rem; font-size: 0.26rem; padding-left:0.2rem; border-radius: 0.05rem;}
    #setBtn,#save{height:0.6rem; font-size: 0.26rem; padding:0 0.2rem; color:#333; background:white; border-radius: 0.05rem; border:1px solid #ccc;}
    #allmap{}
    .filerUpload{width:100%; height:0.8rem;font-size: 0.26rem; line-height: 0.7rem;border-radius: 0.05rem;background-color:white; box-sizing: border-box; color:#333;border:1px solid #999;}
    .UploadSucess{background-color:green; color:white;}
    #closeMap{position: fixed; right:0.2rem;top:0.2rem; font-size: 0.3rem; color:#333; text-align: center; line-height: 0.3rem; z-index: 15; background:white; border:1px solid #999; display: inline-block; width:0.4rem; height:0.4rem; border-radius: 50%; }
    .form-row .form-input input.hasmap{background-color:green; color:white;}
    .sub-apply{width:100%; height:0.8rem; line-height: 0.8rem; background-color:#ff2772; color:white; text-align: center; margin:0 auto; border-radius: 0.05rem; font-size: 0.28rem;}
</style>

<template>
    <div class="shopApply">
        <headnav v-bind:title="pagetitle"></headnav>
        <div class="sa-container">
            <div class="form-row">
                <div class="form-label"><label for="shopName">店铺名称：</label></div>
                <div class="form-input">
                    <input id="shopName" type="text" v-model="shopName" placeholder="请输入店铺名称">
                </div>
            </div>
            <div id="industry" class="form-row">
                <div class="form-label">所属行业：</div>
                <div class="form-input">
                    <select class="city-select" name="industry1"  id="industry_level1" @change="selectVal">
                        <option rol="0">请选择</option>
                        <option v-for="item in industry">{{item.name}}</option>
                    </select>
                    <div id="childlist">
                        <select name="" id="" v-for="list in industry" v-show="list.id == industryShowId">
                            <option value="">请选择</option>
                            <option value="" v-for="item in list.childList">{{item.name}}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div id="address" class="form-row">
                <div class="form-label">所在地区：</div>
                <!--<div class="form-input hasVal">-->
                    <!--<div class="valBox clearfix">-->
                        <!--<span id="addrVal" class="left"></span>-->
                        <!--<span class="edit">修改</span>-->
                    <!--</div>-->
                <!--</div>-->
                <div class="form-input editBox">
                    <select class="city-select" name="provience" id="addr_province" @change="selectProv">
                        <option>省</option>
                        <option v-for="prov in provs" >{{prov.name}}</option>
                    </select>
                    <select class="city-select" name="city" id="addr_city" @change="selectCity">
                        <option>市</option>
                        <option v-for="city in citys">{{city.name}}</option>
                    </select>
                    <select class="city-select" name="area" id="addr_area"  @change="selectArea">
                        <option>区域</option>
                        <option v-for="area in areas">{{area.name}}</option>
                    </select>
                </div>
            </div>
            <div id="sq" class="form-row">
                <div class="form-label">所属商圈：</div>
                <!--<div class="form-input hasVal">-->
                    <!--<div class="valBox clearfix">-->
                        <!--<span id="sqVal" class="left"></span>-->
                        <!--<span class="edit">修改</span>-->
                    <!--</div>-->
                <!--</div>-->
                <div class="form-input editBox">
                    <select class="sq-select" name="squan" id="sqSelect">
                        <option> 请选择 </option>
                        <option v-for="item in business">{{item.name}}</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-label"><label for="addrDetail">详细地址：</label></div>
                <div class="form-input"><input id="addrDetail" type="text" v-model="addrDetail" placeholder="街道、路、门牌号"></div>
            </div>
            <div class="form-row">
                <div class="form-label">生成地图：</div>
                <div class="form-input" @click="bMap">
                    <input :disabled="hasMap" id="buildMap" :class="hasMap ? 'hasmap': ''" type="button" :value="hasMap?'地图已生成':'点击添加地图位置'">
                </div>
            </div>
            <div class="form-row">
                <div class="form-label"><label for="uName">联系人：</label></div>
                <div class="form-input">
                    <input id="uName" type="text" v-model="contact">
                </div>
            </div>
            <div class="form-row">
                <div class="form-label"><label for="uTel">联系电话：</label></div>
                <div class="form-input">
                    <input id="uTel" type="text" v-model="mobile">
                </div>
            </div>
            <div class="form-row">
                <div class="form-label">营业执照：</div>
                <div class="form-input">
                    <vue-file-upload class="filerUpload " :class="{UploadSucess:UploadSucess}"
                                     url="http://192.168.0.10:8090/api/v1/file"
                                     ref="vueFileUploader"
                                     :autoUpload=true
                                     :label="labelText"
                                     v-bind:events='cbEvents'
                                     v-bind:filters="filters"
                                     v-bind:request-options="reqopts"
                                     v-on:onAdd="onAddItem">
                    </vue-file-upload>
                </div>
            </div>
            <div class="form-row">
                <div class="form-label"><label for="InvCode">邀请码：</label></div>
                <div class="form-input">
                    <input style="background: #eee" id="InvCode" type="text" readonly="readonly" value="">
                </div>
            </div>
            <div class="form-row">
                <div class="form-label"><label></label></div>
                <div class="form-input">
                    <p id="yzyqm"></p>
                </div>
            </div>
            <div class="sub-apply" @click="subApply">
                <a>确认提交</a>
            </div>
        </div>
        <a v-show="bMapShow" id="closeMap" class="close-map" @click="bMapShow=false">x</a>
        <div class="bMap" ref="bMap" v-show="bMapShow">
            <div class="mapControl clearfix">
                <input id="setCenter" type="text" placeholder="输入城市" v-model="mapSetCenter"/>
                <input id="setBtn" type="button" @click="mapGetPoint" value="选择城市"/>
                <input id="save" type="button" @click="mapSave" value="保存地图"/>
            </div>
            <div id="allmap" :style="'height:'+height+'px;width:100%;'"></div>
        </div>
        <dialog-pop v-if="dialogOnOff" v-bind:dialog="dialogConfig" v-on:off="offDialog"></dialog-pop>
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
                pagetitle: '开店申请',//标题配置
                shopId:0,       //商家Id
                shopName: '',   //商家名字
                industry:[],    //所属类型数据
                industryShowId:'', //要显示的所属行业Id子属性
                contact:'',       //联系人
                mobile:'',       //联系电话
                areasId:'',       //区域Id
                addrDetail:'',    //详细地址
                imgSrc: '',       //上传成功之后的图片地址（服务器上的）
                apiState:true,    //
                provs:[],      //省份数据
                citys:[],     //城市的数据
                areas:[],     //区域的数据
                business:[],   //所属商圈数据
                labelText:'点击添加营业执照',
                file:null,      //需要上传的文件
                UploadSucess:false,
                dialogOnOff : false,
                dialogConfig : {
                    autoOff:true,
                    txt:'请不要输入特殊字符'
                },
                hasMapObj:false,
                hasMap:false,
                mapCode:'',     //生成地图之后就有值了
                bMapShow:false,
                height:1300,
                longitude:'',
                latitude:'',
                mapSetCenter:'',    //地图选择的城市
                //文件过滤器，只能上传图片
                filters: [
                    {
                        name: "imageFilter",
                        fn(file){
                            var type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
                            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
                        }
                    }
                ],
                //事件回调
                cbEvents: {
                    onCompleteUpload: (file, response, status, header) => {
                        this.imgSrc = response.module;
                    },
                    onAddFileSuccess:(file)=>{
//                        console.log(file);
                    }
                },
                reqopts: {
                    responseType: 'json',
                    withCredentials: true
                }
            }
        },
        computed: mapGetters({
            userInfo:'userInfo',
            positionData: 'positionData'
        }),
        methods: {
            subApply(){
                let parmas = {
                    "shopId": this.shopId,
                    "classId": this.industryShowId,
                    "contact": this.contact,
                    "lat": this.latitude,
                    "lng": this.longitude,
                    "mobile": this.userInfo.mobile,
                    "name": this.shopName,
                    "ownerId": this.userInfo.userId,
                    "regionId": this.areasId,
                    "telephone": this.mobile,
                    "street": this.addrDetail,
                    "invitationShopId": '',
                    "invitationUserId": '',
                    "certImg": this.imgSrc
                };
                var sendData = JSON.stringify(parmas);
                //提交开店申请
                this.$store.dispatch('subShopApply',sendData).then(()=>{
                    this.dialogOnOff = true;
                    this.dialogConfig.txt="提交成功";
                });
            },
            mapSave(){
                if(this.mapCode != ''){
                    this.hasMap = true;
                    this.bMapShow = false;
                }else{
                    this.dialogOnOff = true;
                    this.dialogConfig.txt = '请选择地点'
                }
            },
            mapGetPoint(){
                var This = this;
                var map = this.creatMap();
                map.clearOverlays();
                var mapCenter = this.mapSetCenter;
                // 创建地址解析器实例
                var myGeo = new BMap.Geocoder();
                // 将地址解析结果显示在地图上,并调整地图视野
                myGeo.getPoint(mapCenter, function (point) {
                    if (point) {
                        map.centerAndZoom(point, 16);
                        map.addOverlay(new BMap.Marker(point));
                    } else {
                        This.dialogOnOff = true;
                        This.dialogConfig.txt = '您选择地址没有解析到结果'
                    }
                }, "");
                map.enableScrollWheelZoom(true);
                map.enableDragging();
                map.addEventListener("click", function (e) {
                    map.clearOverlays();
                    var _point = new BMap.Point(e.point.lng, e.point.lat);
                    var marker = new BMap.Marker(_point);
                    This.mapCode = e.point.lng + "," + e.point.lat;
                    map.addOverlay(marker);
                    marker.setAnimation(BMAP_ANIMATION_BOUNCE);
                    This.longitude = e.point.lng;
                    This.latitude = e.point.lat;
                });
            },
            creatMap(){
                if(!this.hasMapObj){
                    return new BMap.Map("allmap");
                }
            },
            bMap(){
                this.bMapShow = true;
                this.$nextTick(()=>{
                    var This = this;
                    if(!this.hasMap){
                        var map = this.creatMap();
                        var geolocation = new BMap.Geolocation();
                        geolocation.getCurrentPosition(function(r){
                            switch (this.getStatus()){
                                case BMAP_STATUS_SUCCESS:
                                    var pointer = r.point;
                                    var latitude = pointer.lat; //纬度
                                    var longitude = pointer.lng;
                                    var gc = new BMap.Geocoder();
                                    var point = new BMap.Point(longitude, latitude);
                                    this.longitude = longitude
                                    this.latitude = latitude
                                    map.centerAndZoom(point, 15);
                                    gc.getLocation(point, function (rs) {
                                        var addComp = rs.addressComponents;
                                       // console.log(addComp);
                                       // callback(addComp);
                                    });
                                    break;
                                case BMAP_STATUS_CITY_LIST:
                                case BMAP_STATUS_UNKNOWN_LOCATION:
                                case BMAP_STATUS_UNKNOWN_ROUTE:
                                case BMAP_STATUS_INVALID_KEY:
                                case BMAP_STATUS_INVALID_REQUEST:
                                case BMAP_STATUS_PERMISSION_DENIED:
                                case BMAP_STATUS_SERVICE_UNAVAILABLE:
                                case BMAP_STATUS_TIMEOUT:
                                    map.centerAndZoom("上海", 12);
                                    break;
                                default:
                                    break;
                            }
                        },{enableHighAccuracy: true});
                        map.enableScrollWheelZoom(true);
                        map.enableDragging();
                        map.addEventListener("click", function (e) {
                            map.clearOverlays();
                            var _point = new BMap.Point(e.point.lng, e.point.lat);
                            var marker = new BMap.Marker(_point);
                            This.mapCode = e.point.lng + "," + e.point.lat;
                            map.addOverlay(marker);
                            marker.setAnimation(BMAP_ANIMATION_BOUNCE);
                            This.longitude = e.point.lng;
                            This.latitude = e.point.lat;
                        });
                    }
                })
            },
            onAddItem(files){
                //已经上传了
                if( this.file ){
                    return;
                }
                this.file=files[0];
                if(files[0] && files[0].type.indexOf("image") == 0){
                    if(files[0].size >= 3145728){
                        this.dialogOnOff = true;
                        this.dialogConfig.txt="图片大小不可超过3M";
                        return false;
                    }
                }else{
                    this.dialogOnOff = true;
                    this.dialogConfig.txt="只可上传图片文件";
                    return false;
                }
                if(files[0]){
                    this.UploadSucess = true;
                    this.labelText = "已添加营业执照"
                }
            },
            selectVal(ele){
                let industry = this.industry.slice();
                for(var i = 0; i<industry.length; i++){
                    if(industry[i].name == ele.target.value){
                        this.industryShowId = industry[i].id;
                    }
                }
            },
            selectProv(ele){
                for(var i = 0; i<this.provs.length; i++){
                    if(this.provs[i].name == ele.target.value){
                        this.$store.dispatch('getCitys',{id:this.provs[i].id}).then((data)=>{
                            this.citys = data;
                        });
                    }
                }
            },
            selectCity(ele){
                for(var i = 0; i<this.citys.length; i++){
                    if(this.citys[i].name == ele.target.value){
                        this.$store.dispatch('getCitys',{id:this.citys[i].id}).then((data)=>{
                            this.areas = data;
                        });
                    }
                }
            },
            selectArea(ele){
                for(var i = 0; i<this.areas.length; i++){
                    if(this.areas[i].name == ele.target.value){
                        this.areasId = this.areas[i].id;
                        this.$store.dispatch('userGetBusiness',{id:this.areas[i].id}).then((data)=>{
                            this.business = data;
                        });
                    }
                }
            },
            offDialog : function(){
                this.dialogOnOff = false;
            }
        },
        created(){
            //获取所属行业数据
            this.$store.dispatch('getIndustry').then(
                //成功的回调
                (data)=>{
                    this.industry = data;
                },
                //失败的回调
                (data)=>{
                    console.log(data);
                }
            );
            //获取城市数据
            this.$store.dispatch('getCitys',{id:0}).then((data)=>{
                this.provs = data;
            });
            this.$store.dispatch('getShopApplyState').then((data)=>{
                this.apiState = false;




            });


        },
        mounted(){

        },
        components: {
            headnav, dialogPop,VueFileUpload
        },
    }
</script>
