import httpVue from './httpVue'
import encrypt from './../../static/md5'

export default {
    login(products) {
        let url = httpVue.makeURL('/v1/auth/login');
        products.pwd = encrypt.hex_md5(products.pwd);
        let data = products;
        return httpVue.postDataVue(url, data, {
            credentials: true
        })
    },
    logout(data){
        let url = httpVue.makeURL('/v1/auth/loginout');
        return httpVue.postDataVue(url, data, {
            credentials: true
        })
    },
    userMas(data) {
        let url = httpVue.makeURL('/v1/user/details');
        return httpVue.getDataVue(url, {
            credentials: true
        });
    },
    userOrders(products) {
        let data = {
            pageNo: products.pageNo,
            pageSize: products.pageSize,
            orderNo: products.orderNo,
            orderState: products.orderState
        };
        let url = httpVue.makeURL('/v1/order', data);
        return httpVue.getDataVue(url, {
            credentials: true
        });
    },
    orderInfo(data) {
        let link = '/v1/order/' + data.orderNo;
        let url = httpVue.makeURL(link);
        return httpVue.getDataVue(url, {
            credentials: true
        });
    },
    goodsInfo(products) {
        let link = '/v1/goods/' + products.goodsId;
        let url = httpVue.makeURL(link);
        return httpVue.getDataVue(url, {
            credentials: true
        });
    },
    myEnvData(data) {
        let url = httpVue.makeURL('/v1/lottery/envelope/myprizes', data);
        return httpVue.getDataVue(url, {
            credentials: true
        });
    },
    myActivityData(products) {
        let url = httpVue.makeURL('/v1/lottery/myactivities', products);
        console.log();
        return httpVue.getDataVue(url, {
            credentials: true
        });
    },
    collectProduct(proId) {
        let url = httpVue.makeURL('/v1/product/collectProduct');
        return httpVue.postDataVue(url, proId, {
            credentials: true
        });
    },
    relinquishProduct(proIds){
        let url = httpVue.makeURL('/v1/product/relinquishProduct/batch', {productIds: proIds});
        return httpVue.deleteDataVue(url, {
            credentials: true
        });
    },
    getUserAddress(){
        let url = httpVue.makeURL('/v1/user/address/shoppingAddressList');
        return httpVue.getDataVue(url, {
            credentials: true
        });
    },
    getUserAddrById(addrId){
        let url = httpVue.makeURL('/v1/user/address/' + addrId);
        return httpVue.getDataVue(url, {
            credentials: true
        });
    },
    editUserAddr(data){
        let url = httpVue.makeURL('/v1/user/address/' + data.addrId);
        return httpVue.putDataVue(url, data.addrCon, {
            credentials: true
        });
    },
    addUserAddr(data){
        let url = httpVue.makeURL('/v1/user/address');
        return httpVue.postDataVue(url, data, {
            credentials: true
        });
    },
    getUserAccount(){
        let url = httpVue.makeURL('/v1/user/purse/get');
        return httpVue.getDataVue(url, {
            credentials: true
        });
    },
    getUserBankCard(){
        let url = httpVue.makeURL('/v1/user/bankCard/bind');
        return httpVue.getDataVue(url, {
            credentials: true
        });
    },
    changeName(data){
        let url = httpVue.makeURL('/v1/auth/nick', data);
        return httpVue.getDataVue(url, {
            credentials: true
        });
    },
    //取消同城商家收藏
    relinquish(shopId){
        let url = httpVue.makeURL('/v1/shop/relinquish', {shopId: shopId});
        return httpVue.deleteDataVue(url, {
            credentials: true
        });
    },
    //收藏同城商家
    tcShopCollect(data){
        let url = httpVue.makeURL('/v1/shop/collect');
        return httpVue.postDataVue(url, data, {
            credentials: true
        });
    },
    //获取收藏店铺列表
    getUserCollectListShop(data){
        let url = httpVue.makeURL('/v1/shop/collectList',data);
        return httpVue.getDataVue(url, {
            credentials: true
        });
    },
    //获取收藏商品列表
    getUserCollectProduct(data){
        let url = httpVue.makeURL('/v1/product/collectList',data);
        return httpVue.getDataVue(url, {
            credentials: true
        });
    },
    //批量删除已收藏的商品
    delProCollIds(data){
        let url = httpVue.makeURL('/v1/product/relinquishProduct/batch',data);
        return httpVue.deleteDataVue(url, {
            credentials: true
        });
    },
    //批量删除已收藏的商家
    delShopCollIds(data){
        let url = httpVue.makeURL('/v1/shop/relinquish/batch',data);
        return httpVue.deleteDataVue(url, {
            credentials: true
        });
    },
    //获取二维码
    getUserQrcode(){
        let url = httpVue.makeURL('/v1/user/qrCode4UserUrl');
        return httpVue.getDataVue(url, {
            credentials: true
        });
    },
    //查询推荐的好友
    getUserFriends(data){
        let url = httpVue.makeURL('/v1/user/friend',data);
        return httpVue.getDataVue(url, {
            credentials: true
        });
    },
    //获取行业分类
    getIndustry(){
        let url = httpVue.makeURL('/v1/shop/shopClass');
        return httpVue.getDataVue(url, {
            credentials: true
        });
    },
    //获取城市数据
    getCitys(data){
        let url = httpVue.makeURL('/v1/area/getArea',data);
        return httpVue.getDataVue(url, {
            credentials: true
        });
    },
    //查询本级商圈
    userGetBusiness(data){
        let url = httpVue.makeURL('/v1/buss/getBusinessCircleByRegionId',data);
        return httpVue.getDataVue(url, {
            credentials: true
        });
    },
    //取消订单
    orderCancel(data){
        let url = httpVue.makeURL("/v1/order/" + data + "/cancel");
        return httpVue.patchDataVue(url,'', {
            credentials: true
        });
    },
    //申请退款提交表单
    refundSub(data){
        let url = httpVue.makeURL("/v1/order/afterSales",);
        return httpVue.postDataVue(url,data,{
            credentials: true
        });
    },
    //申请退款提交表单
    getRefund(data){
        let url = httpVue.makeURL("/v1/order/afterSales/"+data);
        return httpVue.getDataVue(url,{
            credentials: true
        });
    },
    //取消售后方法
    refundCancle(oid){
        let url = httpVue.makeURL("/v1/order/afterSales/" + oid + "/cancel");
        return httpVue.patchDataVue(url,'',{
            credentials: true
        });
    },
    //获取买单数据
    getOrder(data){
        let url = httpVue.makeURL("/v1/order/offline",data);
        return httpVue.getDataVue(url,{
            credentials: true
        });
    },
    //获取加载更多的买单数据
    getOrder(data){
        let url = httpVue.makeURL("/v1/order/offline",data);
        return httpVue.getDataVue(url,{
            credentials: true
        });
    },
    //获取支付详细信息
    getPayDetail(oid){
        let url = httpVue.makeURL("/v1/order/" + oid);
        return httpVue.getDataVue(url,{
            credentials: true
        });
    },
    //修改密码
    subChangePass(data){
        let url = httpVue.makeURL("/v1/auth/pass/update");
        data.oldPwd = encrypt.hex_md5(data.oldPwd);
        data.newPwd = encrypt.hex_md5(data.newPwd);
        return httpVue.postDataVue(url,data,{
            credentials: true
        });
    },
    //修改密码
    delUserAddr(addid){
        let url = httpVue.makeURL("/v1/user/address/" + addid);
        return httpVue.deleteDataVue(url,{
            credentials: true
        });
    },
    //验证手机是否已经注册
    getPhoneNumisReg(data){
        let url = httpVue.makeURL("/v1/user/checkMobile",data);
        return httpVue.getDataVue(url,{
            credentials: true
        });
    },
    //获取非登录短信验证码
    getVerCode(data){
        let url = httpVue.makeURL("/v1/sms/1");
        return httpVue.postDataVue(url,data,{
            credentials: true
        });
    },
    //提交开店申请
    subShopApply(data){
        let url = httpVue.makeURL("/v1/shop/addShop");
        return httpVue.postDataVue(url,data,{
            credentials: true
        });
    },
    //提交开店申请
    getShopApplyState(){
        let url = httpVue.makeURL("/v1/shop/getShopAuditStatus");
        return httpVue.getDataVue(url,{
            credentials: true
        });
    },
    //获得售后列表页面
    getAfterSalesList(data){
        let url = httpVue.makeURL("/v1/order/afterSales",data);
        return httpVue.getDataVue(url,{
            credentials: true
        });
    },
    //确认收货方法
    confirmReceipt(No){
        let url = httpVue.makeURL("/v1/order/" + No + "/finish");
        return httpVue.patchDataVue(url,{},{
            credentials: true
        });
    },
    //提交订单评论
    creatCom(data){
        let url = httpVue.makeURL("/v1/comment/add");
        return httpVue.postDataVue(url,data,{
            credentials: true
        });
    },
    //获取物流信息根据订单号
    ProStreamInfo(data){
        let url = httpVue.makeURL("/v1/order/0/express/0",data);
        return httpVue.getDataVue(url,{
            credentials: true
        });
    },
}
