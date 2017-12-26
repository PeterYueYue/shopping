import httpVue from './httpVue'

export default {
    getLocalCity (products) {
        let url = httpVue.makeURL('/v1/area/getLocalCity');
        return httpVue.getDataVue(url,{credentials:true});
    },
    getHotCity (products) {
        let url = httpVue.makeURL('/v1/area/getHotCity');
        return httpVue.getDataVue(url,{credentials:true});
    },
    getShopList (data) {
        let url = httpVue.makeURL('/v1/search/cityShopGroup',data);
        return httpVue.postDataVue(url,{credentials:true});
    },
    getShopClass(){
        let url = httpVue.makeURL('/v1/shop/shopClass');
        return httpVue.getDataVue(url,{credentials:true});
    },
    getArea(data){
        let url = httpVue.makeURL('/v1/area/getArea',data);
        return httpVue.getDataVue(url,{credentials:true});
    },
    getBusiness(data){
        let url = httpVue.makeURL('/v1/buss/getBusinessCircleByRegionId',data);
        return httpVue.getDataVue(url,{credentials:true})
    },
    getShopInfo(data){
        let url = httpVue.makeURL('/v1/shop/'+data.sid);
        return httpVue.getDataVue(url,{credentials:true})
    },
    getShopProduct(data){
        console.log(data);
        let url = httpVue.makeURL('/v1/city/shop/sale',data);
        return httpVue.getDataVue(url);
    },
    getTcProductInfo(proId) {
        let url = httpVue.makeURL('/v1/goods/'+proId);
        return httpVue.getDataVue(url,{
            credentials: true
        })
    },
    getTcProductDetailHtml(proId){
        let url = httpVue.makeURL('/v1/goods/text/'+proId);
        return httpVue.getDataVue(url)
    },
    //收藏tc普通商品
    setTcProIsCollected(data){
        let url = httpVue.makeURL('/v1/product/collectProduct');
        return httpVue.postDataVue(url,data,{
            credentials: true
        });
    },
    //取消收藏tc普通商品
    cancleTcProIsCollected(data){
        let url = httpVue.makeURL('/v1/product/relinquishProduct',{productId:data.productId});
        return httpVue.deleteDataVue(url,{
            credentials: true
        });
    },
    creatTcOrder(data){
        let url = httpVue.makeURL('/v1/order/pay');
        return httpVue.postDataVue(url,data,{
            credentials: true
        });
    },
    //加载商家相册分类信息
    getShopPhotoMenu(shopId){
        let url = httpVue.makeURL("/v1/shop/" + shopId + "/photo");
        return httpVue.getDataVue(url,{
            credentials: true
        });
    },
    //加载商家相册分类信息
    getPhotoInfo(data){
        let url = httpVue.makeURL("/v1/shop/" + data.shopId + "/photo/" + data.selectMenuId,{pageNo:data.pageNo});
        console.log(url);
        return httpVue.getDataVue(url,{
            credentials: true
        });
    },
    //获取二级导航
    getNavMenu(data){
        let url = httpVue.makeURL('/v1/navmenu/getNavMenu', {areaId:data.areaId});
        return httpVue.getDataVue(url, {
            credentials: true
        })
    },
    //关联页面检查更新
    checkUpDate(data){
        let url = httpVue.makeURL('/v1/other/init', data);
        return httpVue.getDataVue(url, {
            credentials: true
        })
    },
    //关联页面要获取的所有分类数据
    getAllCate(){
        let url = httpVue.makeURL('/v1/product/category/tree');
        return httpVue.getDataVue(url, {
            credentials: true
        })
    },
    //获得列表页面
    getRecmdList(data){
        let url = httpVue.makeURL('/v1/city/sale/recmd',data);
        return httpVue.getDataVue(url, {
            credentials: true
        })
    },
    //获得列表页面
    getHotShopList(data){
        let url = httpVue.makeURL('/v1/city/sale/hot',data);
        return httpVue.getDataVue(url, {
            credentials: true
        })
    },
    //获取搜索商品
    getTcProList (data) {
        let url = httpVue.makeURL('/v1/search/cityProductGroup',data);
        return httpVue.postDataVue(url,{credentials:true});
    },
}
