import Vue       from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const app                = resolve => {require([ './../App.vue'], resolve)}
const appIndex           = resolve => {require([ './../component/home/index.vue'], resolve)}
const footMenu           = resolve => {require([ './../component/common/footmenu.vue'], resolve)}
const mall               = resolve => {require([ './../component/mall/mall.vue'], resolve)}
const goodsList          = resolve => {require([ './../component/mall/goods-list.vue'], resolve)}
const goodsDetail        = resolve => {require([ './../component/mall/goods-detail.vue'], resolve)}
const tcshop             = resolve => {require([ './../component/tcShop/tcshop.vue'], resolve)}
const shopInfo           = resolve => {require([ './../component/tcShop/shop-info.vue'], resolve)}
const shopProList        = resolve => {require([ './../component/tcShop/shop-product.vue'], resolve)}
const selectArea         = resolve => {require([ './../component/tcShop/select-area.vue'], resolve)}
const shopcar            = resolve => {require([ './../component/shopcar.vue'], resolve)}
const userCenter         = resolve => {require([ './../component/user/user-center.vue'], resolve)}
const userOrders         = resolve => {require([ './../component/user/user-orders.vue'], resolve)}
const detail             = resolve => {require([ './../component/user/detail.vue'], resolve)}
const orderInfo          = resolve => {require([ './../component/user/order-info.vue'], resolve)}
const login              = resolve => {require([ './../component/common/login.vue'], resolve)}
const myWallet           = resolve => {require([ './../component/user/my-wallet.vue'], resolve)}
const myBankCard         = resolve => {require([ './../component/user/my-bankCard.vue'], resolve)}
const myEnvlop           = resolve => {require([ './../component/user/my-envlop.vue'], resolve)}
const myActivity         = resolve => {require([ './../component/user/my-activity.vue'], resolve)}
const myPay              = resolve => {require([ './../component/user/my-pay.vue'], resolve)}
const userInfo           = resolve => {require([ './../component/user/user-info.vue'], resolve)}
const specialAct         = resolve => {require([ './../component/act/special-activities.vue'], resolve)}
const shopCart           = resolve => {require([ './../component/trade/shop-cart.vue'], resolve)}
const orderConfirm       = resolve => {require([ './../component/trade/order-confirm.vue'], resolve)}
const payDo              = resolve => {require([ './../component/trade/pay-do.vue'], resolve)}
const changeName         = resolve => {require([ './../component/user/change-name.vue'], resolve)}
const userAddress        = resolve => {require([ './../component/user/user-address.vue'], resolve)}
const editAddress        = resolve => {require([ './../component/user/edit-address.vue'], resolve)}
const register           = resolve => {require([ './../component/user/register.vue'], resolve)}
const upimg              = resolve => {require([ './../component/user/upimg.vue'], resolve)}
const hotShopProList     = resolve => {require([ './../component/tcShop/hot-shop-product.vue'], resolve)}
const productDetail      = resolve => {require([ './../component/tcShop/product-detail.vue'], resolve)}
const hotProductDetail   = resolve => {require([ './../component/tcShop/hot-product-detail.vue'], resolve)}
const userGetPass        = resolve => {require([ './../component/user/user-getpass.vue'], resolve)}
const userCollection     = resolve => {require([ './../component/user/user-collection.vue'], resolve)}
const userinvite         = resolve => {require([ './../component/user/user_invite.vue'], resolve)}
const myfriend           = resolve => {require([ './../component/user/myfriend.vue'], resolve)}
const youjuanCenter      = resolve => {require([ './../component/user/youjuanCenter.vue'], resolve)}
const shopApply          = resolve => {require([ './../component/user/shopApply.vue'], resolve)}
const refundApply        = resolve => {require([ './../component/user/refundApply.vue'], resolve)}
const refundState        = resolve => {require([ './../component/user/refundState.vue'], resolve)}
const viewLogistics      = resolve => {require([ './../component/user/viewLogistics.vue'], resolve)}
const shopPay            = resolve => {require([ './../component/tcShop/shop-pay.vue'], resolve)}
const tcShopPayInfo      = resolve => {require([ './../component/tcShop/pay-info.vue'], resolve)}
const sign               = resolve => {require([ './../component/act/sign.vue'], resolve)}
const signMyRecord       = resolve => {require([ './../component/act/sign-myrecord.vue'], resolve)}
const secSell            = resolve => {require([ './../component/act/sec-sell.vue'], resolve)}
const myPayDetail        = resolve => {require([ './../component/user/myPayDetail.vue'], resolve)}
const changePass         = resolve => {require([ './../component/user/changePass.vue'], resolve)}
const shopApplyState     = resolve => {require([ './../component/user/shopApplyState.vue'], resolve)}
const shopPhoto          = resolve => {require([ './../component/tcShop/shopPhoto.vue'], resolve)}
const tcShopSublist      = resolve => {require([ './../component/tcShop/tcShopSublist.vue'], resolve)}
const tcSublistNoNav     = resolve => {require([ './../component/tcShop/tcSublistNoNav.vue'], resolve)}
const recomList          = resolve => {require([ './../component/tcShop/recomList.vue'], resolve)}
const tcHotlist          = resolve => {require([ './../component/tcShop/tcHotlist.vue'], resolve)}
const oab                = resolve => {require([ './../component/act/oab.vue'], resolve)}
const oabMyRecord        = resolve => {require([ './../component/act/oab-myrecord.vue'], resolve)}
const refundList         = resolve => {require([ './../component/user/refundList.vue'], resolve)}
const subjectSmhbCheck   = resolve => {require([ './../component/act/subject-smhb-check.vue'], resolve)}
const winRewards         = resolve => {require([ './../component/act/winRewards.vue'], resolve)}
const discountStreet     = resolve => {require([ './../component/act/discount-street.vue'], resolve)}
const brt                = resolve => {require([ './../component/act/brt.vue'], resolve)}
const brtMyRecord        = resolve => {require([ './../component/act/brt-myrecord.vue'], resolve)}
const brtLocalWin        = resolve => {require([ './../component/act/brt-win-local.vue'], resolve)}
const rdDetail           = resolve => {require([ './../component/act/rdDetail.vue'], resolve)}
const editevaluate       = resolve => {require([ './../component/user/editevaluate.vue'], resolve)}
const scanError          = resolve => {require([ './../component/act/scan-error.vue'], resolve)}
const evaluatesuc        = resolve => {require([ './../component/user/evaluatesuc.vue'], resolve)}
const searchTcList       = resolve => {require([ './../component/tcShop/searchTcList.vue'], resolve)}

const router = new VueRouter({
    routes: [
        // {
        //     path: 'app',
        //     components: {
        //         default: app
        //     }
        // },
        {
            path: '/',
            // name:'app',
            components: {
                default: app
            },
            name: 'appIndex',
            children: [
                {
                    path: '',
                    name: 'appIndex',
                    components: {
                        main: appIndex,
                        footerMenu : footMenu
                    }
                },
                {
                    path: 'index',
                    name: 'appIndex',
                    components: {
                        main: appIndex,
                        footerMenu : footMenu
                    }
                },
                {
                    path: 'mall',
                    components: {
                        main: mall,
                        footerMenu : footMenu
                    }
                },
                {
                    path: ':type/cate/:id/catename/:name',
                    components: {
                        main: goodsList
                    }
                },
                {
                    path:'goodsDetail/pro/:goodsId',
                    components: {
                        main: goodsDetail
                    }
                },
                {
                    path:'goodsDetail/pro/:goodsId/act/:actId',
                    components: {
                        main: goodsDetail
                    }
                },
                {
                    path: 'tcshop/:type',
                    components: {
                        main: tcshop,
                        footerMenu : footMenu
                    }
                },
                {
                    path: 'shopInfo/sid/:sid',
                    components: {
                        main: shopInfo,
                        footerMenu : footMenu
                    }
                },
                {
                    path: 'shopProList/sid/:sid',
                    components: {
                        main: shopProList
                    }
                },
                {
                    path:'selectArea',
                    components: {
                        main : selectArea
                    }
                },
                {
                    path: 'shopcar',
                    components: {
                        main: shopcar,
                        footerMenu : footMenu
                    }
                },
                {
                    path: 'user',
                    components: {
                        main: userCenter,
                        footerMenu : footMenu
                    }
                },
                {
                    path: 'userInfo',
                    components: {
                        main: userInfo
                    }
                },
                {
                    path: 'userOrders',
                    components: {
                        main: userOrders,
                        footerMenu : footMenu
                    }
                },
                {
                    path: 'orderInfo/:orderNo',
                    components: {
                        main: orderInfo
                    }
                },
                {
                    path: 'detail/:goodsId',
                    components: {
                        main: detail
                    }
                },
                {
                    path: 'login',
                    components: {
                        main: login
                    }
                },
                {
                    path: 'myWallet',
                    components: {
                        main: myWallet
                    }
                },
                {
                    path: 'user/myBankCard',
                    components: {
                        main: myBankCard
                    }
                },
                {
                    path: 'myEnvlop',
                    components: {
                        main: myEnvlop
                    }
                },
                {
                    path: 'myActivity',
                    components: {
                        main: myActivity
                    }
                },
                {
                    path: 'myPay',
                    components: {
                        main: myPay
                    }
                },
                {
                    path:'specialAct/:actId/part/:partId',
                    components:{
                        main: specialAct,
                        footerMenu : footMenu
                    }
                },
                {
                    path:'shopCart/:mdType',
                    components:{
                        main: shopCart,
                        footerMenu : footMenu
                    }
                },
                {
                    path:'orderConfirm/:type',
                    components:{
                        main: orderConfirm
                    }
                },
                {
                    path:'payDo/:orderNo',
                    components:{
                        main: payDo
                    }
                },
                {
                    path:'changeName',
                    components:{
                        main: changeName
                    }
                },
                {
                    path:'user/userAddress',
                    components:{
                        main: userAddress
                    }
                },
                {
                    path:'user/editAddress/:addrId',
                    components:{
                        main: editAddress
                    }
                },
                {
                    path:'register',
                    components:{
                        main: register
                    }
                },
                {
                    path:'upimg',
                    components:{
                        main: upimg
                    }
                },
                {
                    path: 'hotShopProList/sid/:sid',
                    components: {
                        main: hotShopProList
                    }
                },
                {
                    path: 'productDetail/proId/:proId',
                    components: {
                        main: productDetail
                    }
                },
                {
                    path: 'hotProDetail/proId/:proId',
                    components: {
                        main: hotProductDetail
                    }
                },
                {
                    path: 'hotProDetail/proId/:proId/actId/:actId',
                    components: {
                        main: hotProductDetail
                    }
                },
                {
                    path: 'userGetPass',
                    components: {
                        main: userGetPass
                    }
                },
                {
                    path: 'userCollection',
                    components: {
                        main: userCollection
                    }
                },
                {
                    path: 'userinvite',
                    components: {
                        main: userinvite
                    }
                },
                {
                    path: 'myfriend',
                    components: {
                        main: myfriend
                    }
                },
                {
                    path: 'youjuanCenter',
                    components: {
                        main: youjuanCenter
                    }
                },
                {
                    path: 'shopApply',
                    components: {
                        main: shopApply
                    }
                },
                {
                    path: 'refundApply',
                    components: {
                        main: refundApply
                    }
                },
                {
                    path: 'refundState/oid/:oid',
                    components: {
                        main: refundState
                    }
                },
                {
                    path: 'viewLogistics/n/:id',
                    components: {
                        main: viewLogistics
                    }
                },
                {
                    path: 'sign',
                    components: {
                        main: sign
                    }
                },
                {
                    path: 'sign/myrecord',
                    components: {
                        main: signMyRecord
                    }
                },
                {
                    path: 'inShopPay/:sid',
                    components: {
                        main: shopPay
                    }
                },
                {
                    path: 'tcShopPayInfo/:id',
                    components: {
                        main: tcShopPayInfo
                    }
                },
                {
                    path: 'secSell',
                    components: {
                        main: secSell
                    }
                },
                {
                    path: 'myPayDetail/oid/:oid',
                    components: {
                        main: myPayDetail
                    }
                },
                {
                    path: 'changePass',
                    components: {
                        main: changePass
                    }
                },
                {
                    path: 'shopApplyState',
                    components: {
                        main: shopApplyState
                    }
                },
                {
                    path: 'shopPhoto/shopId/:shopId',
                    components: {
                        main: shopPhoto
                    }
                },
                {
                    path: 'tcShopSublist/type/:type/cate/:cate',
                    components: {
                        main: tcShopSublist
                    }
                },
                {
                    path: 'tcSublistNoNav/type/:type/cate/:cate',
                    components: {
                        main: tcSublistNoNav
                    }
                },
                {
                    path: 'recomList/isTc/:isTc',
                    components: {
                        main: recomList
                    }
                },
                {
                    path: 'tcHotlist',
                    components: {
                        main: tcHotlist
                    }
                },
                {
                    path:'oab/code/:codeNo/area/:areaId',
                    components: {
                        main: oab
                    }
                },
                {
                    path:'oab/myrecord/:code/:totype/:tocode/:toarea',
                    components: {
                        main: oabMyRecord
                    }
                },
                {
                    path: 'refundList',
                    components: {
                        main: refundList
                    }
                },
                {
                    path: 'subjectSmhbCheck/qh/:qh/mm/:mm/gc/:gc',
                    components: {
                        main: subjectSmhbCheck
                    }
                },
                {
                    path: 'winRewards/:winIndex/et/:et',
                    components: {
                        main: winRewards
                    }
                },
                {
                    path: 'discountStreet/:actId/areaId/:areaId',
                    components: {
                        main: discountStreet
                    }
                },
                {
                    path: 'brt/:actId/areaId/:areaId',
                    components: {
                        main: brt
                    }
                },
                {
                    path: 'brt/myrecord/:actId',
                    components: {
                        main: brtMyRecord
                    }
                },
                {
                    path: 'brt/localWin/:actId/:areaId/:endTime',
                    components: {
                        main: brtLocalWin
                    }
                },
                {
                    path: 'rdDetail/envId/:envId/actId/:actId',
                    components: {
                        main: rdDetail
                    }
                },
                {
                    path: 'editevaluate/no/:no',
                    components: {
                        main: editevaluate
                    }
                },
                {
                    path: 'scanError/:errMsg',
                    components: {
                        main: scanError
                    }
                },
                {
                    path: 'evaluatesuc',
                    components: {
                        main: evaluatesuc
                    }
                },
                {
                    path: 'searchTcList/:type/:searchStr',
                    components: {
                        main: searchTcList
                    }
                },
            ]
        }
    ]
})

export default {
  router
}
