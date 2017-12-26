import * as types from '../mutation-types'

const state = {
  	isLogin: false,
	userName        : null,
    realName        : null,
    headPic         : null,
    userAddress     : [],
    userAddrById    : {},
    userAccount     : {vouchers:null},
    userBankCard    : null,
    defaultAddress  : {},
    selectAddress   : {
        receiver:'',
        mobile:'',
        address:''
    },
    carousel        : null,
    orderList       : null,
    orderInfo       : {receiverName:null},
    goodsInfo       : null,
    myValidEnvData  : [],   //为兑换的红包
    myinValidEnvData: [],  //已兑换的红包
    myActivityData  : {module:[]},
    myCollShop      : [],  //我收藏的商家
    myCollPro       : [],  //我收藏的商品
    myDelProCollIds : '',  //保存了我删除商品收藏的ids
    myDelShopCollIds: '',  //我删除商家的ids
    validEvnlopHasnext:false, //没有兑换红包是否有更多
    invalidEvnlopHasnext:false, //已兑换红包是否有更多
    myOrderData:[]          //我的买单数据

}

const mutations = {
    [types.Set_user_info] (state,amount) {
        state.isLogin = amount.success;
        if (amount.success) {
            for(let attr in amount.module){
                state[attr] = amount.module[attr];
            }
            // state.userName = amount.module.userName;
            // state.realName = amount.module.realName;
            // state.headPic  = amount.module.headPic;
        }
    },
    [types.Clear_user_info](state,amount){
        if(amount.success){
            state.isLogin = false;
            state.userName = null;
            state.realName = null;
            state.headPic = null;
            state.carousel = null;
            state.orderList = null;
            state.orderInfo = null;
            state.goodsInfo = null;
            state.myEnvData = null;
            state.myActivityData = null;
        }
    },
    [types.Set_user_orders] (state,amount) {
        state.orderList = amount;
    },
    [types.Add_user_orders] (state,amount) {
        for (let i = 0; i < amount.length; i++) {
            state.orderList.push(amount[i])
        }
    },
    [types.Set_orders_banner](state,amount){
        state.carousel = amount;
    },
    [types.Set_order_info](state,amount){
        state.orderInfo = amount;
    },
    [types.Set_goods_info](state,amount){
        state.goodsInfo = amount;
    },
    [types.Set_valid_evnlop_data](state,amount){
        state.myValidEnvData = amount;
    },
    [types.valid_evnlop_hasnext](state,amount){
        state.validEvnlopHasnext = amount;
    },
    [types.invalid_evnlop_hasnext](state,amount){
        state.invalidEvnlopHasnext = amount;
    },
    [types.Add_valid_evnlop_data](state,amount){
        for (let i = 0; i < amount.length; i++) {
            state.myValidEnvData.push(amount[i])
        }
    },
    [types.Add_invalid_evnlop_data](state,amount){
        for (let i = 0; i < amount.length; i++) {
            state.myinValidEnvData.push(amount[i])
        }
    },
    [types.Set_invalid_evnlop_data](state,amount){
        state.myinValidEnvData = amount;
    },
    [types.Set_activity_data](state,amount){
        state.myActivityData = amount;
    },
    [types.Set_user_address](state,amount){
        state.userAddress = amount;
        let addrDefault;
        for(let i=0;i<amount.length;i++){
            if(amount[i].isDefault==1){
                addrDefault = amount[i];
            }
        }
        addrDefault||(addrDefault=amount[0]);
        state.defaultAddress = addrDefault;
        if(state.selectAddress.receiver==''){
            state.selectAddress = addrDefault;
        }
    },
    [types.Set_user_account](state,amount){
        state.userAccount = amount;
    },
    [types.Ser_user_bankCard](state,amount){
        state.userBankCard = amount;
    },
    [types.Set_user_nickName](state,amount){
        state.nickName = amount.nickName;
    },
    [types.Set_user_addrById](state,amount){
        state.userAddrById = amount;
    },
    [types.Set_user_selectAddr](state,amount){
        state.selectAddress = amount;
    },
    [types.Set_user_coll_shop](state,amount){
        state.myCollShop = amount;
    },
    [types.Set_user_coll_pro](state,amount){
        state.myCollPro = amount;
    },
    [types.Set_del_pro_coll_ids](state,amount){
        state.myDelProCollIds = amount;
    },
    [types.Set_del_shop_coll_ids](state,amount){
        state.myDelShopCollIds = amount;
    },
    [types.Get_My_Order](state,amount){
        state.myOrderData = amount;
    },
    [types.Add_My_Order](state,amount){
        for (let i = 0; i < amount.length; i++) {
            state.myOrderData.push(amount[i])
        }
    }
}

export default {
  state,
  mutations
}
