<style>

    .buyPop {
        position: fixed;
        z-index: 11;
        width: 7.1rem;
        padding: 0 0.2rem 0.84rem;
        background: #fff;
        left: 0;
        bottom: 0;
    }

    .buyPop .closePop {
        display: block;
        width: 0.32rem;
        height: 0.32rem;
        position: absolute;
        right: 0.18rem;
        top: 0.36rem;
        font-size: 0.32rem;
        color: #666;
        border: none;
        text-decoration: none;
    }

    .buyPop .pro {
        border-bottom: 1px solid #eee;
    }

    .buyPop .sImg {
        width: 2.1rem;
        height: 2.1rem;
        position: relative;
        top: -0.36rem;
        border: 1px solid #cdcdcd;
        border-radius: 0.06rem;
        overflow: hidden;
    }

    .buyPop .proP {
        position: absolute;
        left: 2.6rem;
        top: 0.36rem;
        width: 3.8rem;
        line-height: 0.36rem;
        font-size: 0.26rem;
    }

    .proPriceBox {
        color: #FF2772;
        float: left;
    }

    .vouchersBox {
        background: #ff833e;
        color: #fff;
        text-align: center;
        border-radius: .06rem;
        margin-left: .2rem;
        padding: 0 0.04rem;
        float: left;
    }

    .buyPop .proN {
        position: absolute;
        left: 2.6rem;
        top: 0.76rem;
        width: 3.8rem;
        line-height: 0.36rem;
        font-size: 0.26rem;
        color: #000;
    }

    .buyPop .pickWay {
        padding-bottom: 0.24rem;
        border-bottom: 1px solid #eee;
    }

    .buyPop .pickWay h3 {
        height: 0.66rem;
        line-height: 0.66rem;
        font-size: 0.25rem;
        color: #666;
        font-weight: normal;
    }

    .buyPop .pickWay li {
        float: left;
        margin: 0 0.36rem 0 0;
        width: 1.2rem;
        height: 0.5rem;
        text-align: center;
        line-height: 0.5rem;
        border: 1px solid #ddd;
        color: #000;
        font-size: 0.25rem;
    }

    .buyPop .pickWay li.cur {
        color: #ff2772;
        border-color: #ff2772;
    }

    .buyPop .buyNum {
        height: 0.54rem;
        line-height: 0.54rem;
        padding: 0.3rem 0;
        border-bottom: 1px solid #eee;
    }

    .buyPop .buyNum .fl {
        font-size: 0.25rem;
        color: #666;
    }

    .buyPop .buyNum .fr a {
        display: block;
        width: 0.6rem;
        height: 0.54rem;
        float: left;
        text-align: center;
        line-height: 0.54rem;
        background: #eee;
    }

    .buyPop .buyNum .fr a i {
        font-size: 0.25rem;
        color: #000;
        display: block;
    }

    .buyPop .buyNum .fr input {
        display: block;
        float: left;
        margin: 0 0.036rem;
        width: 0.66rem;
        height: 0.54rem;
        text-align: center;
        line-height: 0.54rem;
        background: #eee;
        border: none;
        color: #000;
        font-size: 0.32rem;
    }

    .buyPop .qrjr {
        width: 100%;
        display: inline-block;
        background-color: #eb2258;
        color: #fff;
        text-align: center;
        height: 0.72rem;
        line-height: 0.72rem;
        font-size: 0.3rem;
        border-radius: 0.06rem;
    }

    .buyAttr {
        padding: .18rem 0;
        border-bottom: 1px solid #eee;
    }

    .buyAttr h3 {
        font-weight: 400;
        font-size: .26rem;
        padding-bottom: .18rem;
    }

    .buyAttr ul {
        width: 100%;
    }

    .buyAttr li {
        height: .52rem;
        border: 1px solid #ddd;
        text-align: center;
        color: #333;
        margin-right: .4rem;
        margin-bottom: .18rem;
        padding: 0 .12rem;
        overflow: hidden;
        line-height: .52rem;
        float: left;
    }

    .buyAttr li.cur {
        color: #FF2772;
        border-color: #FF2772;
    }

    .buyAttrList .oos {
        border-color: #fff !important;
        background: #ddd !important;
        color: #fff !important;
    }
</style>

<template>

    <div class="buyPopBox">
        <div class="buyPop">
            <s class="closePop iconfont icon-roundclose" @click="$emit('hide')"></s>
            <div class="pro">
                <div class="sImg"><img :src="proThumImg"></div>
                <div class="proP clearfix" id="proP">
                    <div class="proPriceBox">{{proPrice}}</div>
                    <div class="vouchersBox" v-if="vouchers">可抵用{{vouchers}}优券</div>
                </div>
                <div class="proN" v-if="proInfo.product.feature!=null">
                    <div v-if="feature">
                        请选择：<span v-for="(data,index) in proInfo.product.feature"><em v-if="!data.select"> {{data.name}} </em></span>
                    </div>
                    <div v-if="!feature">
                        已选择<span v-for="data in proInfo.product.feature"> {{data.name}}: <em
                        v-for="(d,sIndex) in data.data" v-show="data.selectItem==sIndex"> {{d.name}} </em> </span>
                    </div>
                </div>
            </div>
            <div class="buyAttr clearfix" v-for="(data,index) in proInfo.product.feature">
                <h3>{{data.name}}</h3>
                <ul class="buyAttrList">
                    <li v-for="(d,subIndex) in data.data" :class="activeClassName(data.selectItem,subIndex,d.hasStock)"
                        @click="selectAttr(index,subIndex,d.hasStock)">{{d.name}}
                    </li>
                </ul>
            </div>
            <div class="pickWay" v-if="false">
                <h3>提货方式</h3>
                <ul class="clearfix">
                    <li :class="{cur:pickWay==1}" @click="setPickWay(1)">到店自提</li>
                    <li :class="{cur:pickWay==2}" @click="setPickWay(2)">送货上门</li>
                </ul>
            </div>
            <div class="buyNum clearfix" v-if="type!=='shopCar'">
                <div class="fl">
                    购买数量
                </div>
                <div class="fr">
                    <a class="minus" @click="buyCountMinus()"><i class="iconfont icon-move"></i></a>
                    <input type="number" class="numInput" :value="buyCount" readonly="readonly"/>
                    <a class="plus" @click="buyCountPlus()"><i class="iconfont icon-add"></i></a>
                </div>
            </div>
            <a class="qrjr" @click="setTradePros(feature)">确认</a>
            <input type="hidden" :value="update"/>
        </div>
        <dialog-pop v-if="dialogOnOff" v-bind:dialog="dialogConfig" v-on:off="offDialog"></dialog-pop>
    </div>
</template>
<script>
    import dialogPop from './../common/dialog-pop.vue'
    import {
        mapGetters
    }
        from 'vuex'
    const components = {dialogPop}
    export default {
        data() {
            return {
                dialogOnOff:false,
                dialogConfig : {
                    autoOff:true,
                    txt:''
                },
                update: 0,              //更新
                pickWay: 0,             //0:初始值，1：自提，2：快递,
                buyCount: 1,            //默认购买数量
                stock: false,           //是否多规格
                proInfo: {},            //商品信息
                feature: true,          // 是否已选择所有规格
                proPrice: null,         //商品的价格
                vouchers: null,         //优卷数
                proThumImg: null,       //商品的缩略图
                productSpecId: null,    //商品的规则Id
                priceName: 'price',     //价格名字
                oldPriceNmae: 'oldPrice',   //原价
                imgName: 'thumImage',    //图片的名字
                sproData: {}             //
            }
        },
        methods: {
            offDialog : function(){
                this.dialogOnOff = false;
            },
            dialogMsg(msg){
                this.dialogOnOff = true;
                this.dialogConfig.txt = msg;
            },
            activeClassName: function (a, b, c) {
                if (!c) {
                    //没有这个规格了
                    return 'oos'
                } else {
                    if (a == b) {
                        return 'cur'
                    } else {
                        return '';
                    }
                }
            },
            setPickWay: function (val) {
                this.pickWay = val;
            },
            buyCountMinus: function () {
                this.buyCount > 1 && this.buyCount--;
            },
            buyCountPlus: function () {
                if (this.proInfo.product.maxCanBuyCount == null) {//判断商品是否限购
                    if (this.stock) { //判断是否有多规格库存
                        this.buyCount < this.stock && this.buyCount++;
                    } else {
                        this.buyCount < this.proData.product.stock && this.buyCount++;
                    }
                } else {
                    this.buyCount < this.proData.product.maxCanBuyCount && this.buyCount++;
                    if( this.buyCount == this.proData.product.maxCanBuyCount){
                        this.dialogMsg("活动商品限购" + this.buyCount  + '件')
                    }
                }
            },
            selectAttr: function (index, subIndex, hasStock) {
                if (!hasStock) {//如果是无货
                    return;
                }
                this.proInfo.product.feature[index].select = true;
                this.proInfo.product.feature[index].selectItem = subIndex;
                var This = this;
                let isSelectAll = this.isSelectAll(this.proInfo.product.feature); //是否选中全部规格
                if (this.proInfo.product.feature.length > 1) {
                    this.setProStockStatus(index, subIndex)
                }
                if (isSelectAll) {//只选中一个规格
                } else {//已经选中所有的规格
                    this.feature = false;
                    this.buyCount = 1; //选择规格之后把购买数量初始化为1
                    let proAttrName = [];
                    for (var i = 0; i < this.proInfo.product.feature.length; i++) {
                        proAttrName.push(this.proInfo.product.feature[i].data[this.proInfo.product.feature[i].selectItem].name)
                    }
                    this.querySkus(proAttrName.join("|"))
                }
                this.update++;
            },
            isSelectAll: function (data) {
                console.log(data);
                let box = [];
                for (var i = 0; i < data.length; i++) {
                    box.push(data[i].select)
                }
                ;
                return box.includes(false);
            },
            querySkus: function (attrName) {
                for (var i = 0; i < this.proInfo.product.skus.length; i++) {
                    if (this.proInfo.product.skus[i].name == attrName) {
                        let skuData = this.proInfo.product.skus[i];
                        if (this.type != 'rd') {//设置价格
                            this.proPrice = '￥' + (Number(skuData[this.priceName]) + Number(skuData.vouchers));
                            this.vouchers = skuData.vouchers;
                        }
                        if (skuData.imgs != null && skuData.imgs instanceof Array && skuData.imgs.length >= 1 && skuData.imgs[0] != "") { //设置规格图片
                            this.proThumImg = skuData.imgs[0];
                        }
                        this.productSpecId = skuData.id;
                    }
                }
            },
            setProStockStatus: function (index, subIndex) {
                let attrName = this.proInfo.product.feature[index].data[subIndex].name;//已经选中的规格名字

                let arr = this.proInfo.product.feature[index == 0 ? 1 : 0].data;//未被选中规格的所有属性
                let searchArr = []; //需要遍历的所有完整名称
                for (var i = 0; i < arr.length; i++) {
                    if (index == 0) {
                        searchArr.push(attrName + "|" + arr[i].name)
                    } else {
                        searchArr.push(arr[i].name + "|" + attrName)
                    }
                }
                console.log(searchArr);
                for (var j = 0; j < searchArr.length; j++) {
                    for (var k = 0; k < this.proInfo.product.skus.length; k++) {
                        if (searchArr[j] == this.proInfo.product.skus[k].name) {
                            if (this.proInfo.product.skus[k].stock == 0) {
                                this.proInfo.product.feature[(index == 0 ? 1 : 0)].data[j].hasStock = false;
                            } else {
                                this.proInfo.product.feature[(index == 0 ? 1 : 0)].data[j].hasStock = true;
                            }
                        }
                    }
                }
            },
            setTradePros: function (feature) {
                let This = this;
                if (feature) {      //  如果没有选择多规格
                    alert('请选择规格')
                    return;
                }
                if (this.type == 'cart') {   //加入购物车
                    var obj = {
                        productId: this.proInfo.product.goodsId,
                        productSpecId: this.productSpecId,
                        activityId: this.proInfo.product.activityId,
                        productCount: this.buyCount,
                        expireTime: ''
                    }
                    obj = JSON.stringify(obj);
                    this.$store.dispatch('addShopCart', obj).then(function () {
                        This.$emit('hide')
                    }, function (errorMessage) {
                        alert(errorMessage)
                    })
                }
                if (this.type == 'spro') {  //立即购买
                    let proInfo = this.proData.product;
                    let str = "";
                    let sellerId = 0;
                    if (this.proInfo.product.feature !== null) {
                        for (var i = 0; i < this.proInfo.product.feature.length; i++) {
                            str += '"' + this.proInfo.product.feature[i].name + '"' + ':' + '"' + this.proInfo.product.feature[i].data[this.proInfo.product.feature[i].selectItem].name + '"' + ' '
                        }
                    }
                    if (proInfo.resource == 'jDong') {
                        sellerId = -1;
                    }
                    this.sproData = [
                        {
                            sellerId: sellerId,
                            sellerName: proInfo.shopName,
                            sellerType: 0,
                            shoppingCartDtoList: [
                                {
                                    productImg: proInfo.thumImage,
                                    activityName: null,
                                    activityId: proInfo.activityId,
                                    origPrice: proInfo.oldPrice,
                                    feature: proInfo.feature,
                                    expireTime: null,//过期时间??
                                    vouchers: proInfo.vouchers,
                                    sellerId: 0, //卖家ID？
                                    productName: proInfo.name,
                                    productSpecId: this.productSpecId,
                                    productCount: this.buyCount,
                                    productId: proInfo.goodsId,
                                    inventory: 20000,
                                    productSpecName: str,
                                    sellerName: proInfo.shopName,
                                    sellerPrice: proInfo.price,
                                    sellerType: 0,//卖家类型：0=平台，1=店铺，2=买家,
                                    skus: proInfo.skus,
                                    status: 'normal'
                                }
                            ]
                        }
                    ]
                    this.$store.dispatch('cartCommit', this.sproData);
                    this.$router.push('/orderConfirm/spro');
                }
                if (this.type == 'shopCar') {  //购物车
                    let str = "";
                    if (this.proInfo.product.feature !== null) {
                        for (var i = 0; i < this.proInfo.product.feature.length; i++) {
                            str += '"' + this.proInfo.product.feature[i].name + '"' + ':' + '"' + this.proInfo.product.feature[i].data[this.proInfo.product.feature[i].selectItem].name + '"' + ' '
                        }
                    }
                    let data = {
                        cartId: this.proData.product.id,
                        productSpecId: this.productSpecId,
                        name: str,
                        productImg: this.proThumImg
                    }
                    this.$store.dispatch('editProductSpecId', data).then(function () {
                        console.log('修改成功');
                        This.$emit('hide');
                    }, function () {

                    })
                }
                if (this.type == 'rd'){
                        if(this.$route.params.envId){
//                            var buyInfo = {
//                                proId: this.proInfo.product.goodsId,
//                                buyNum: this.buyCount,
//                                pickWay: this.pickWay,
//                                envId: this.$route.params.envId,
//                                actId: this.$route.params.actId,
//                                reActiveData : this.reActive
//                            };
                            let proInfo = this.proData.product;
                            let str = "";
                            let sellerId = 0;
                            if (this.proInfo.product.feature !== null) {
                                for (var i = 0; i < this.proInfo.product.feature.length; i++) {
                                    str += '"' + this.proInfo.product.feature[i].name + '"' + ':' + '"' + this.proInfo.product.feature[i].data[this.proInfo.product.feature[i].selectItem].name + '"' + ' '
                                }
                            }
                            if (proInfo.resource == 'jDong') {
                                sellerId = -1;
                            }
                            this.sproData = [
                                {
                                    sellerId: sellerId,
                                    sellerName: proInfo.shopName,
                                    sellerType: 0,
                                    shoppingCartDtoList: [
                                        {
                                            productImg: proInfo.thumImage,
                                            envId:this.$route.params.envId,
                                            activityName: null,
                                            activityId: proInfo.activityId,
                                            origPrice: proInfo.oldPrice,
                                            feature: proInfo.feature,
                                            expireTime: null,//过期时间??
                                            vouchers: proInfo.vouchers,
                                            sellerId: 0, //卖家ID？
                                            productName: proInfo.name,
                                            productSpecId: this.productSpecId,
                                            productCount: this.buyCount,
                                            productId: proInfo.goodsId,
                                            inventory: 20000,
                                            productSpecName: str,
                                            sellerName: proInfo.shopName,
                                            sellerPrice: proInfo.price,
                                            sellerType: 0,//卖家类型：0=平台，1=店铺，2=买家,
                                            skus: proInfo.skus,
                                            status: 'normal'
                                        }
                                    ]
                                }
                            ]
                            this.$store.dispatch('cartCommit', this.sproData);
                            // this.$store.dispatch('rdCommit', this.buyInfo);
                            this.$router.push('/orderConfirm/rd');
                    }
                }
            }
        },
        components: components,
        created() {
            if (this.type == 'spro') {    //如果是立即购买

            }
            if (this.proData.product.feature == null) {   //没有多规格
                this.feature = false;
                this.productSpecId = this.proData.product.skus[0].id;
            }
            var This = this;
            this.proInfo = JSON.parse(JSON.stringify(This.proData));
            //后台返回数据字段名不统一  所以需要提前判断
            if (this.type == 'shopCar') {
                this.priceName = "sellPrice";
                this.oldPriceNmae = 'origPrice';
                this.imgName = 'productImg';
                this.productSpecId = this.proInfo.product.productSpecId;
            }
            //初始化默认图片
            this.proThumImg = this.proInfo.product[this.imgName];
            //初始化价格
            if (this.type == "rd") {//如果type是rd (红包抽奖商品) 即使有多规格也要显示商品活动价格
                this.proPrice = "￥" + (Number(this.proInfo.product[this.priceName]) + Number(this.proInfo.product.vouchers));
                this.vouchers = this.proInfo.product.vouchers;
            }
            if (this.type == 'shopCar') { //如果是购物车价格要定位到之前选择的商品价格
                for (var i = 0; i < this.proInfo.product.skus.length; i++) {
                    if (this.proInfo.product.skus[i].id == this.proInfo.product.productSpecId) {
                        this.proPrice = '￥' + (this.proInfo.product.skus[i][this.priceName] + this.proInfo.product.skus[i].vouchers);
                        this.vouchers = Number(this.proInfo.product.skus[i].vouchers == 0) ? false : this.proInfo.product.skus[i].vouchers;
                    }
                }
            } else {
                if (this.proInfo.product.skus.length == 1) { //如果该商品只有一种规格
                    this.proPrice = '￥' + (Number(this.proInfo.product.skus[0][this.priceName]) + Number(this.proInfo.product.skus[0].vouchers));
                    this.vouchers = Number(this.proInfo.product.skus[0].vouchers == 0) ? false : this.proInfo.product.skus[0].vouchers;
                } else {   //如果有多种规格那我们希望显示价格区间
                    var priceList = [];
                    for (var i = 0; i < this.proInfo.product.skus.length; i++) {
                        if (this.proInfo.product.skus[i].stock !== 0) {//忽略没有库存的商品价格
                            priceList.push(Number(this.proInfo.product.skus[i][this.priceName]) + Number(this.proInfo.product.skus[i].vouchers));
                        }
                    }
                    var minPrice = Math.min.apply(null, priceList);
                    var maxPrice = Math.max.apply(null, priceList);
                    if (minPrice == maxPrice) {
                        this.proPrice = "￥" + minPrice;
                    } else {
                        this.proPrice = "￥" + minPrice + "--￥" + maxPrice;
                    }
                }
            }

            //重新格式化多规格数据格式
            if (this.proInfo.product.feature != null) {
                for (var i = 0; i < this.proInfo.product.feature.length; i++) {
                    let featureArr = [];
                    for (var j = 0; j < this.proInfo.product.feature[i].data.length; j++) {
                        featureArr.push({"name": this.proInfo.product.feature[i].data[j], "hasStock": true})
                    }
                    this.proInfo.product.feature[i].data = featureArr;
                    //初始化多规格选中状态
                    if (this.type == 'shopCar') { //购物车默认是选中状态
                        this.proInfo.product.feature[i].select = true;
                    } else {
                        this.proInfo.product.feature[i].select = false;
                    }
                }
            }

            //初始化多规格选中状态 和 单类规格的库存状态
            if (this.proInfo.product.feature != null && this.proInfo.product.feature.length == 1) { //如果有多规格并且只有一类
                //单类规格的库存状态
                for (var i = 0; i < this.proInfo.product.feature[0].data.length; i++) {
                    for (var j = 0; j < this.proInfo.product.skus.length; j++) {
                        if (this.proInfo.product.feature[0].data[i].name == this.proInfo.product.skus[j].name && this.proInfo.product.skus[j].stock == 0) { //判断该规格是否无货
                            this.proInfo.product.feature[0].data[i].hasStock = false;
                        }
                    }
                }
            }

            //当在购物车选择多规格的时候需要定位到上次选择的结果
            if (this.type == 'shopCar') {
                for (var i = 0; i < this.proInfo.product.skus.length; i++) {
                    if (this.proInfo.product.skus[i].id == this.proInfo.product.productSpecId) {
                        var arr = this.proInfo.product.skus[i].name.split("|");
                        for (var j = 0; j < this.proInfo.product.feature.length; j++) {
                            for (var k = 0; k < this.proInfo.product.feature[j].data.length; k++) {
                                if (this.proInfo.product.feature[j].data[k].name == arr[j]) {
                                    this.proInfo.product.feature[j].selectItem = k;
                                }
                            }
                        }
                    }
                }
            }

        },
        props: ['type', 'proData','reActive']
    }
    /*
     type : {
     spro ： 立即购买
     cart ： 加入购物车
     rd   : 红包
     shopCar ： 购物车
     tcProInfo ： 同城商品详情
     tcHot ： 同城热卖详情
     }
     */
</script>
