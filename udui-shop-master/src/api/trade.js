import httpVue from './httpVue'
import encrypt from './../../static/md5'

export default {
    addShopCart(pro) {
        let data = pro;
        let url = httpVue.makeURL('/v1/cart');
        return httpVue.postDataVue(url, data,{
            credentials: true
        });
    },
    getShopCart(){
        let url = httpVue.makeURL('/v1/cart');
        return httpVue.getDataVue(url,{
            credentials: true
        });
    },
    editCartNum(data){
        let url = httpVue.makeURL('/v1/cart/'+data.cartId,data.count);
        return httpVue.putDataVue(url,data,{
            credentials: true
        });
    },
    cartDel(data){
        let url = httpVue.makeURL('/v1/cart',data);
        return httpVue.deleteDataVue(url,{
            credentials: true
        })
    },
    getCartFreight(data){
        let url = httpVue.makeURL('/v1/logistics/getProductFreight');
        return httpVue.postDataVue(url,data,{
            credentials:true
        })
    },
    imgCodeCheck(){
        let url = httpVue.makeURL('/v1/order/check');
        return httpVue.getDataVue(url,{
            credentials:true
        })
    },
    checkProductAreaLimit(data){
        let url = httpVue.makeURL('/v1/logistics/checkProductAreaLimit');
        return httpVue.postDataVue(url,data,{
            credentials:true
        })
    },
    orderConfirm(data){
        let url = httpVue.makeURL('/v1/order');
        return httpVue.postDataVue(url,data,{
            credentials:true
        })
    },
    getOrderPayInfo(data){
        let url = httpVue.makeURL('/v1/order/'+data);
        return httpVue.getDataVue(url,{
            credentials:true
        })
    },
    orderPay(data){
        let url = httpVue.makeURL('/v1/h5OrderPay');
        data.payPasswd = encrypt.hex_md5(data.payPasswd);
        return httpVue.postDataVue(url,data,{
            credentials:true
        })
    },
    editCartProAttr(data){
        let url = httpVue.makeURL('/v1/cart/productSpec/'+data.cartId,{productSpecId:data.productSpecId});
        return httpVue.putDataVue(url,{},{
            credentials:true
        })
    },
    createOrder(data){
        let url = httpVue.makeURL('/v1/order/create');
        return httpVue.postDataVue(url,data,{
            credentials:true
        })
    }
}
