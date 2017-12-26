import indexApi   from '../api/index'
import userApi    from '../api/user'
import mallApi    from '../api/mall'
import tradeApi   from '../api/trade'
import actApi     from '../api/activities'
import tcShop     from '../api/tc-shop'
import otherApi   from '../api/other'
import * as types from './mutation-types'
import store      from './../../static/store.js'

export const autoLogin = ({commit}, data) => {
    return new Promise((resolve,reject) =>{
        otherApi.autoLogin(data).then((res)=>{
            if(res.body.success){
                resolve();
                commit(types.Set_user_info,res.body);
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

export const increment = ({ commit }, data) => {
    commit(types.ADD_NUMBER, 1)
}

export const getmallIndexData = ({ commit }, data) => {
  indexApi.getBannerList({regionId:-1,type:2,appLinkId:'scrollPicture'}).then((res) => {
    var arr = res.body.module[0].list
    commit(types.Set_indexData, arr)
  });
  indexApi.getChannel(data).then((res)=>{
      commit(types.Set_Channel_Info,res.body.module);
  });
}

export const getTcIndexData = ({commit},data) => {
    indexApi.getNavMenu({areaId:data.areaId}).then((res) => {
        commit(types.Set_tcCate_menu,res.body.module)
    })
    indexApi.getBannerList({regionId:data.areaId,type:1,appLinkId:'TCSY'}).then((res) => {
        if(res.body.success){
            commit(types.Set_tc_ztgg, res.body.module[0])
        }
    });
    indexApi.getTcIndexTcHotList({areaId:data.areaId,topCount:30}).then((res) => {
        if(res.body.success){
            commit(types.Set_tcIndex_tcHot, res.body.module)
        }
    })
}

export const loginfn = ({ commit }, data) => {
    return new Promise((resolve,reject)=>{
            userApi.login(data).then((res) => {
                if(res.body.success){
                    commit(types.Set_user_info,res.body);
                    resolve();
                }else{
                    reject(res.body.errorMessage);
                }
            })
        }
    );
}

export const logoutfn = ({commit},data)=>{
    return new Promise((resolve,reject)=>{
        userApi.logout().then((res)=>{
            if(res.body.success){
                commit(types.Clear_user_info,res.body);
                resolve();
            }else{
                reject(res.body.errorMessage);
            }
        })
    })
}

export const getUserInfo = ({ commit }, data) => {
  userApi.userMas().then((res) => {
      commit(types.Set_user_info, res.body);
  });
}

export const getUserAddress = ({commit}) => {
    userApi.getUserAddress().then((res)=>{
        commit(types.Set_user_address,res.body.module);
    })
}

export const getUserAddrById = ({commit},data) => {
    return new Promise((resolve,reject)=>{
        userApi.getUserAddrById(data).then((res)=>{
            if(res.body.success){
                commit(types.Set_user_addrById,res.body.module);
                resolve();
            }else{
                reject(res.body.errorMessage);
            }
        })
    })
}

export const editAddrSub = ({commit},data) => {
    return new Promise((resolve,reject)=>{
        userApi.editUserAddr(data).then((res)=>{
            if(res.body.success){
                resolve();
            }else{
                reject(res.body.errorMessage);
            }
        })
    })
}

export const addAddrSub = ({commit},data) => {
    return new Promise((resolve,reject)=>{
        userApi.addUserAddr(data).then((res)=>{
            if(res.body.success){
                resolve();
            }else{
                reject(res.body.errorMessage);
            }
        })
    })
}

export const setUserSelAddr = ({commit},data) => {
    commit(types.Set_user_selectAddr,data);
}

export const getAllProvince = ({commit},data) => {
    return new Promise((resolve,reject)=>{
        otherApi.getAreaList(data).then((res)=>{
            if(res.body.success){
                commit(types.Set_other_allprov,res.body.module);
                resolve();
            }else{
                reject(res.body.errorMessage);
            }
        })
    })
}

export const getAllCity = ({commit},data) => {
    return new Promise((resolve,reject)=>{
        otherApi.getAreaList(data).then((res)=>{
            if(res.body.success){
                commit(types.Set_other_allcity,res.body.module);
                resolve();
            }else{
                reject(res.body.errorMessage);
            }
        })
    })
}

export const getAllCounty = ({commit},data) => {
    return new Promise((resolve,reject)=>{
        otherApi.getAreaList(data).then((res)=>{
            if(res.body.success){
                commit(types.Set_other_allcounty,res.body.module);
                resolve();
            }else{
                reject(res.body.errorMessage);
            }
        })
    })
}

export const getAllStreet = ({commit},data) => {
    return new Promise((resolve,reject)=>{
        otherApi.getAreaList(data).then((res)=>{
            if(res.body.success){
                commit(types.Set_other_allstreet,res.body.module);
                resolve();
            }else{
                commit(types.Set_other_allstreet,[]);
                reject(res.body.errorMessage);
            }
        })
    })
}

export const getUserAccount = ({commit})=>{
    return new Promise((resolve,reject)=>{
        userApi.getUserAccount().then((res)=>{
            if(res.body.success){
                commit(types.Set_user_account,res.body.module);
                resolve(res.body.module);
            }else{
                reject(res.body.errorMessage);
            }
        })
    })
}

export const getUserBankCard = ({commit}) => {
    return new Promise((resolve,reject)=>{
        userApi.getUserBankCard().then((res)=>{
            if(res.body.success){
                commit(types.Set_user_bankCard,res.body.module);
                resolve();
            }else{
                reject(res.body);
            }
        })
    })
}

export const getAllBank = ({commit}) => {
    return new Promise((resolve,reject)=>{
        otherApi.getAllBank().then((res)=>{
            if(res.body.success){
                commit(types.Set_other_allBank,res.body.module);
                resolve();
            }else{
                reject(res.body.errorMessage);
            }
        })
    })
}

export const getUserOrders = ({ commit },data) => {
    return new Promise((resolve,reject)=>{
        userApi.userOrders(data).then((res) => {
            if(res.body.success){
                commit(types.Set_user_orders, res.body.module);
                resolve(res.body);
            }else{
                reject(res.body.errorMessage);
            }
        });
    })
}
export const AddUserOrders = ({ commit },data) => {
    return new Promise((resolve,reject)=>{
        userApi.userOrders(data).then((res) => {
            if(res.body.success){
                commit(types.Add_user_orders, res.body.module);
                resolve(res.body);
            }else{
                reject(res.body.errorMessage);
            }
        });
    })
}
export const getUserOrdersBanner = ({ commit },data) => {
    indexApi.getBannerList(data).then((res) => {
        let arr = res.body.module[0].list
        commit(types.Set_orders_banner, arr)
    });
}

export const getOrderInfo = ({ commit }, data) => {
    return new Promise((resolve,reject)=>{
        userApi.orderInfo(data).then((res) => {
            if(res.body.success){
                commit(types.Set_order_info,res.body.module)
                resolve(res.body.module);
            }else{
                reject(res.body.errorMessage);
            }

        });
    })
}

export const getGoodsInfo = ({ commit }, data) => {
  userApi.goodsInfo(data).then((res) => {
    commit(types.Set_goods_info,res.body.module)
  });
}

export const getEnvData = ({ commit },data) => {
    return new Promise((resolve,reject)=>{
        if(data.state == 1){
            //没有兑换
            userApi.myEnvData(data).then((res) => {
                commit(types.valid_evnlop_hasnext,res.body.hasNext)
                commit(types.Set_valid_evnlop_data,res.body.module)
                resolve();
            });
        }else if(data.state == 2){
            //已兑换
            userApi.myEnvData(data).then((res) => {
                commit(types.invalid_evnlop_hasnext,res.body.hasNext)
                commit(types.Set_invalid_evnlop_data,res.body.module)
                resolve();
            });
        }
    })
}

export const addEnvData = ({ commit },data) => {
    return new Promise((resolve,reject)=>{
        if(data.state == 1){
            //没有兑换
            userApi.myEnvData(data).then((res) => {
                commit(types.valid_evnlop_hasnext,res.body.hasNext)
                commit(types.Add_valid_evnlop_data,res.body.module)
                resolve();
            });
        }else if(data.state == 2){
            //已兑换
            userApi.myEnvData(data).then((res) => {
                commit(types.invalid_evnlop_hasnext,res.body.hasNext)
                commit(types.Add_invalid_evnlop_data,res.body.module)
                resolve();
            });
        }

    })
}

export const getActivityData = ({commit},data) => {
    return new Promise((resolve,reject)=>{
        userApi.myActivityData(data).then((res) => {
            resolve(res.body);
            commit(types.Set_activity_data,res.body)
        });
    })
}

export const getNavMenu = ({commit},data) => {
  if (store.has('navMenuArr')) {//判断menu版本号是否相同
    let navMenuArr = store.get('navMenuArr');
    commit(types.Set_nav_menu,navMenuArr);
  }else{
    mallApi.getNavMenu(data).then((res) => {
      let navMenuArr = res.body.module;
      commit(types.Set_nav_menu,navMenuArr);
      store.set('navMenuArr',navMenuArr)
    });
  }
}

export const loadSubClass = ({ commit }, data) => {
    commit(types.Set_sub_class,data)
}

export const getGoodsList = ({ commit }, data) => {
  mallApi.getGoodsList(data).then((res) => {
    commit(types.Set_has_next,res.body.hasNext);
    commit(types.Set_goods_list,res.body.module)
  })
}

export const loadMore_mall = ({commit}, data) => {
  commit(types.Set_mall_loading);
  mallApi.getGoodsList(data).then((res) => {
    commit(types.Set_has_next,res.body.hasNext);
    commit(types.Add_mall_proList,res.body.module);
  })
}
export const loadMore_tc = ({commit}, data) => {
    commit(types.Set_tcShop_loading);
    tcShop.getShopList(data).then((res) => {
        commit(types.Add_tc_shopList, res.body.module.pageDto.module);
    })
}
export const addPageNum = ({commit}, data) => {
    if(data == 'mall')
    {
        commit(types.Add_mall_pageNum)
    }
    else if (data == 'tc') {
        commit(types.Add_tc_pageNum)
    }
    else if (data == 'speAct'){
        commit(types.Add_SpeAct_PageNum)
    }
}

export const initPageNo = ({commit}, data) => {
  commit(types.Init_page_no);
}

export const getProductTree = ({commit},data) => {
  mallApi.getProductTree().then((res) => {
    commit(types.Set_pro_tree,res.body.module);
  })
}

export const setFilterState = ({commit},data) => {
    return new Promise((resolve,reject)=>{
        commit(types.Set_filter_state,data);
        resolve()
    })
}

export const setTcFilterState = ({commit},data) => {
    console.log(data);
    commit(types.Set_tc_filter,data)
}

export const getHotCity = ({commit},data) => {
    tcShop.getHotCity().then((res) => {
        commit(types.Set_hot_city,res.body.module)
    })
}

export const getAppInitData = ({commit},data) => {
    //var state = 0;
    commit(types.Set_navigator_type);
    var p1 = new Promise(
        function(resolve,reject){
            console.log('开始定位');
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function(r){
                if(this.getStatus() == BMAP_STATUS_SUCCESS)
                    {
                        console.log('定位成功');
                        resolve(r)
                    }
                else if(this.getStatus() == BMAP_STATUS_UNKNOWN_LOCATION)
                    {
                        reject();
                        //位置结果未知
                        console.log('位置结果未知');
                    }
                else if(this.getStatus() == BMAP_STATUS_TIMEOUT)
                    {
                        reject();
                        //超时
                        console.log('超时');
                    }
                else if(this.getStatus() == BMAP_STATUS_INVALID_KEY)
                    {
                        reject();
                        //非法密钥
                        console.log('非法密钥');
                    }
                else if(this.getStatus() == BMAP_STATUS_INVALID_REQUEST)
                    {
                        reject();
                        //非法请求
                        console.log('非法请求');
                    }
                else
                    {
                        reject();
                        console.log('定位错误');
                        alert('failed'+this.getStatus());
                    }
            },{enableHighAccuracy: true})
        }
    );
    p1.then(
        function(r){
            console.log('拿到定位数据');
            commit(types.Set_position_data,{lng:r.point.lng,lat:r.point.lat,city:r.address.city})
        },
        function(){
            console.log('失败')
        }
    )

    var p2 = new Promise(
        function(resolve,reject){
            indexApi.getMaxAreaVersionTime().then((res) => {
                if(res.body.success && store.has('areaLastTime') && store.get('areaLastTime') == res.body.module && store.has('areaList')){
                    let arr = store.get('areaList');
                    resolve(arr);
                }else{
                    store.set('areaLastTime',res.body.module);
                    tcShop.getLocalCity().then((res) => {
                        if(res.body.success){
                            let arr = res.body.module;
                            store.set('areaList',arr);
                            resolve(arr);
                        }
                    })
                }
            })
        }
    );
    p2.then(
        function(arr){
            console.log('拿到城市数据');
            commit(types.Set_area_list,arr);
        },
        function(){
            console.log('失败')
        }
    )

    var p = Promise.all([p1,p2]);
    p.then(
        function(){
            commit(types.Set_cover_state,false);
            commit(types.Verify_pos_city);
        },
        function(){
            commit(types.Set_cover_state,false);
            commit(types.Set_pos_state);
        }
    );

    if(store.has('mallHisSearchArr')){
        commit(types.Set_search_list,{data:store.get('mallHisSearchArr'),type:'mall'})
    }
    if(store.has('tcHisSearchArr')){
        commit(types.Set_search_list,{data:store.get('tcHisSearchArr'),type:'tc'})
    }
}

export const getShopList = ({commit},data) => {
    commit(types.Set_tcShop_loading);
    let newData = {};
    for(var key in data){
        if(data[key] == '' || data[key] == undefined){

        }else{
            newData[key] = data[key]
        }
    }
    tcShop.getShopList(newData).then((res) => {
        commit(types.Set_shop_list,res.body.module.pageDto.module)
    })
}

export const initTcPageNo = ({commit},data) => {
    commit(types.Init_tc_PageNo);
}

export const setPosArea = ({commit},data) => {
    commit(types.Set_pos_area,data)
    commit(types.Verify_pos_city);
}

export const getTcShopInitData = ({commit},data) => {
    tcShop.getShopClass().then((res) => {
        commit(types.Set_shop_class,res.body.module)
    })
    tcShop.getArea(data).then((res) => {
        commit(types.Set_tc_area,res.body.module)
    })
}

export const getBusiness = ({commit},data) => {
    tcShop.getBusiness(data).then((res) => {
        commit(types.Set_area_business,res.body.module)
    })
}

export const setLastAreaId = ({commit},data) => {
    commit(types.Set_last_areaId,data)
}

export const getShopInfo = ({commit},data) => {
    return new Promise((resolve,regect)=>{
        tcShop.getShopInfo(data).then((res) => {
            if(res.body.success){
                commit(types.Set_shop_info,res.body.module);
                resolve(res.body.module);
            }else{
                reject(res.body.errorMessage);
            }
        })
    })
}

export const getProductInfo = ({commit},data)=>{
    return new Promise((resolve,reject)=>{
        mallApi.getProductInfo(data).then((res)=>{
            if(res.body.success){
                commit(types.Set_product_Info,res.body.module);
                resolve(res.body.module);
            }else{
                reject(res.body.errorMessage);
            }
        })
    });
}

export const getProductDetailHtml = ({commit},data) => {
    mallApi.getProductDetailHtml(data).then((res)=>{
        var reader = new FileReader();
        reader.readAsText(res.data, 'utf-8');
        reader.onload = function (e) {
            commit(types.Set_product_detailHtml,reader.result);
        }
    })
}

export const getShopProduct  = ({commit},data) => {
    tcShop.getShopProduct(data).then((res) => {
        commit(types.Set_shop_product,res.body.module);
    })
}

export const getHotShopProduct  = ({commit},data) => {
  tcShop.getShopProduct(data).then((res) => {
    commit(types.Set_hot_shop_product,res.body.module);
  })
}

export const setProductCollect = ({commit},data) => {
    userApi.collectProduct(data).then((res)=>{
        if(res.body.resultCode==11001){
            commit(types.Set_user_info,res.body);
        }else {
            commit(types.Set_product_collect,res.body.module);
        }
    })
}

export const cancleProductCollect = ({commit},data) => {
    userApi.relinquishProduct(data).then((res)=>{
        commit(types.Cancle_product_collect,res.body.module);
    })
}

export const getSpeActDetail = ({commit},data)=>{
    return new Promise((resolve,reject)=>{
            actApi.getSpeActDetail(data).then((res)=>{
                if(res.body.success){
                    commit(types.Set_SpeAct_Filter,{
                        actId:res.body.module.id,
                        partId:res.body.module.partitionId
                    })
                    commit(types.Set_SpeAct_Detail,res.body.module);
                    resolve(res.body.module.categoryList[0]);
                }else{
                    reject(res.body.errorMessage);
                }
            })
        }
    );
}

export const getSpeActSubList = ({commit},data)=>{
    actApi.getSpeActSubList(data).then((res)=>{
        commit(types.Set_SpeAct_Filter,{
            cateId:data.activitySpecCategoryId,
            pageNo:data.pageNo,
            hasNext:res.body.hasNext
        });
        commit(types.Set_SpeAct_SubList,res.body.module);
    })
}

export const addSpeActSon = ({commit},data)=>{
    commit(types.Set_SpeAct_Loading,true);
    actApi.getSpeActSubList(data).then((res)=>{
        console.log(res.body.hasNext);
        commit(types.Set_SpeAct_Filter,{
            hasNext:res.body.hasNext
        });
        commit(types.Add_SpeAct_SubList,res.body.module);
    })
}

export const setSpeActFileter = ({commit},data)=>{
    commit(types.Set_SpeAct_Filter,data);
}

export const getChannelInfo = ({commit},data)=>{
    indexApi.getChannel(data).then((res)=>{
        commit(types.Set_Channel_Info,res.body.module);
    })
}

export const addShopCart = ({commit},data)=>{

    return new Promise((resolve,reject)=>{
        tradeApi.addShopCart(data).then((res)=>{
            if(res.body.success){
                commit(types.Add_ShopCart,res.body.module);
                resolve();
            }else{
                reject(res.body.errorMessage);
            }
        })
    })
}

export const getShopCart = ({commit},data)=>{
    tradeApi.getShopCart().then((res)=>{
        commit(types.Set_ShopCart,res.body.module);
    })
}

export const selectShop = ({commit},data)=>{
    commit(types.Select_cart_shop,data);
}

export const selectPro = ({commit},data)=>{
    commit(types.Select_cart_pro,data);
}

export const selectAll = ({commit},data)=>{
    commit(types.Select_cart_all);
}

export const cartDel = ({commit},data)=>{
    tradeApi.cartDel(data).then((res)=>{
        commit(types.Del_Cart_Pro);
    })
}

export const delInvalidCarts = ({commit},data)=>{
    tradeApi.cartDel(data).then((res)=>{
        commit(types.Del_invalid_carts);
    })
}

export const editCartNum = ({commit},data)=>{
    return new Promise((resolve,reject)=>{
        tradeApi.editCartNum(data).then((res)=>{
            if(res.body.success){
                resolve();
                commit(types.Set_Cart_Num,data);
            }else{
                reject(res.body.errorMessage);
            }
        })
    })
}

export const cartCommit = ({commit},data) =>{
    commit(types.Set_order_pros,data);
}

export const loadOrders = ({commit},data) => {
    return new Promise((resolve,reject)=>{
        userApi.getUserAddress().then((res)=>{
            if(res.body.success){
                commit(types.Set_user_address,res.body.module);
                commit(types.Set_order_useuq,data);
                resolve();
            }else{
                reject(res.body.errorMessage);
            }
        });
    })
}

export const getCartFreight = ({commit},data)=>{
    return new Promise((resolve,reject)=>{
        tradeApi.getCartFreight(data).then((res)=>{
            if(res.body.success){
                commit(types.Set_order_freight,res.body.module);
                resolve();
            }else{
                reject(res.body.errorMessage);
            }
        });
    })
}

// export const orderChangeNum = ({commit},data)=>{
//     return new Promise((resolve,reject)=>{
//         commit(types.Change_order_num,data);
//         resolve();
//     })
// }

export const swicthUseUq = ({commit},data)=>{
    commit(types.Set_order_useuq,data);
}

export const orderImgCodeCheck = ({commit},data) => {
    return new Promise((resolve,reject)=>{
        tradeApi.imgCodeCheck().then((res)=>{
            if(res.body.success){
                commit(types.Set_imgcode_check,res.body.module);
                resolve();
            }else{
                reject(res.body.errorMessage);
            }
        })
    })
}

export const getImgCode = ({commit},data) => {
    return new Promise((resolve,reject)=>{
        otherApi.getImgCode().then((res)=>{
            if(res.body.success){
                commit(types.Set_imgcode_val,res.body.module.imgSrc);
                commit(types.Set_register_imgCode,res.body.module.imgSrc)
                resolve(res.body.module);
            }else{
                reject(res.body.errorMessage);
            }
        })
    })
}

export const checkProductAreaLimit = ({commit},data) => {
    return new Promise((resolve,reject)=>{
        tradeApi.checkProductAreaLimit(data).then((res)=>{
            if(res.body.success){
                commit(types.Set_pro_arealimit,res.body.module);
                resolve(res.body.module);
            }else{
                reject(res.body.errorMessage);
            }
        })
    })
}

export const orderConfirm = ({commit},data) => {
    return new Promise((resolve,reject)=>{
        tradeApi.orderConfirm(data).then((res)=>{
            if(res.body.success){
                resolve(res.body.module);
            }else{
                reject(res.body.errorMessage);
            }
        })
    })
}

export const deleteLimitPro = ({commit},data) => {
    return new Promise((resolve,reject)=>{
        tradeApi.cartDel(data).then((res)=>{
            if(res.body.success){
                commit(types.Del_order_limitpro,data);
                resolve();
            }else{
                reject();
            }
        })
    })
}

export const getOrderPayInfo = ({commit},data) => {
    return new Promise((resolve,reject)=>{
        tradeApi.getOrderPayInfo(data.orderNo).then((res)=>{
            if(res.body.success){
                commit(types.Set_order_payinfo,{uCash:data.userCash,payInfo:res.body.module,navg:data.navg});
                resolve();
            }else{
                reject();
            }
        })
    })
}

export const setPayWay = ({commit},data) => {
    commit(types.Set_order_payway,data);
}

export const orderPay = ({commit},data) => {
    return new Promise((resolve,reject)=>{
        tradeApi.orderPay(data).then((res)=>{
            if(res.body.success){
                resolve(res.body.module);
            }else{
                reject(res.body.errorMessage);
            }
        })
    })
}

export const searchGoodsList = ({commit},data) => {
    mallApi.mallSearch(data).then((res)=>{
        commit(types.Set_has_next,res.body.module.pageDto.hasNext);
        commit(types.Set_goods_list,res.body.module.pageDto.module);
        commit(types.Set_filter_class,res.body.module.categoryDtoList);
    })
}

export const loadMore_mall_search = ({commit},data) => {
    commit(types.Set_mall_loading);
    mallApi.mallSearch(data).then((res)=>{
        commit(types.Set_has_next,res.body.module.pageDto.hasNext);
        commit(types.Add_mall_proList,res.body.module.pageDto.module);
    })
}

export const setHisSearch = ({commit},data) => {
    if(store.has(data.type+'HisSearchArr'))
    {
        let arr = store.get(data.type+'HisSearchArr');
        let set = new Set(arr);
        if(set.has(data.text))
        {
            set.delete(data.text);
            set.add(data.text);
            setData(Array.from(set),data.type);
        }
        else
        {
            if(set.size==4)
            {
                let sraechList = Array.from(set);
                sraechList.shift();
                sraechList.push(data.text);
                setData(sraechList,data.type);
            }
            else
            {
                set.add(data.text);
                setData(Array.from(set),data.type);
            }
        }
    }
    else
    {
        let sraechList = [data.text];
        setData(sraechList,data.type);
    }
    function setData(list,type){
        store.set(type+'HisSearchArr',list)
        commit(types.Set_search_list,{data:list,type:type})
    }

}

export const clearSearchList = ({commit},data) => {
    store.clear(data.type+'HisSearchArr')
    commit(types.Clear_search_list,{type:data.type})
}

export const getHotSearchList = ({commit},data) => {
    if(data.type=='mall'){
        indexApi.getHotSearchList({source:0}).then((res)=>{
            console.log(res);
            commit(types.Set_hotSearch_list,{type:0,list:res.body.module})
        })
    }else{
        indexApi.getHotSearchList({source:1}).then((res)=>{
            commit(types.Set_hotSearch_list,{type:1,list:res.body.module})
        })
        indexApi.getHotSearchList({source:2}).then((res)=>{
            commit(types.Set_hotSearch_list,{type:2,list:res.body.module})
        })
    }
}

export const changeName = ({commit},data) => {
    return new Promise((resolve,reject)=>{
            userApi.changeName(data).then((res)=>{
                if(res.body.success){
                    console.log(res);
                    commit(types.Set_user_nickName,data)
                    resolve();
                }else{
                    reject(res.body.errorMessage);
                }
            })
        }
    );
}



export const imgcodeCheck = ({commit},data) => {
    return new Promise((resolve,reject)=>{
            otherApi.imgCodeCheck().then((res)=>{
                if(res.body.success){
                    resolve();
                }else{
                    reject();
                }
            })
        }
    );
}



export const getMsgCode = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        if(data.isLogin){
            otherApi.getMsgCodeLogin({
                type:data.type,
                phone:data.phone,
                smsCode:data.imgCode
            }).then((res)=>{
                if(res.body.success){
                    resolve();
                }else{
                    reject(res.body.errorMessage);
                }
            })
        }else{
            otherApi.getMsgCodeUnlogin({
                type:data.type,
                phone:data.phone,
                smsCode:data.imgCode
            }).then((res)=>{
                console.log(res);
                if(res.body.success){
                    resolve();
                }else{
                    reject(res.body.errorMessage);
                }
            })
        }
    })
}

export const register = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        otherApi.userRegister(data).then((res)=>{
            if(res.body.success){
                resolve()
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}
//取消同城商家收藏
export const cancleShopCollect = ({commit},data) => {
  return new Promise((resolve,reject)=>{
    userApi.relinquish(data).then((res)=>{
      if(res.body.success){
        resolve()
        commit(types.Set_tcshop_collect,0)
      }else{
        reject(res.body.errorMessage)
      }
    })
  });

}

//同城商家收藏
export const setTcShopCollect = ({commit},data) => {
  return new Promise((resolve,reject)=>{
    userApi.tcShopCollect(data).then((res)=>{
      if(res.body.success){
        resolve()
        commit(types.Set_tcshop_collect,1)
      }else{
        reject(res.body.errorMessage)
      }
    })
  });
}

export const getTcProductInfo = ({commit},data) => {
    //获得同城商品详情信息
    let p1 = new Promise((resolve,reject)=>{
        tcShop.getTcProductInfo(data).then((res)=>{
            if(res.body.success){
                resolve(res.body.module);
                commit(types.Set_tc_product_Info,res.body.module.product);
                commit(types.Set_tc_pro_isCollected,res.body.module.product.isCollected);
            }else{
                reject(res.body.errorMessage)
            }
        })
    });
    //获取同城商品的图文信息
    let p2 = new Promise((resolve,reject)=>{
        tcShop.getTcProductDetailHtml(data).then((res)=>{
            if(res.body){
                resolve();
                let reader = new FileReader();
                reader.readAsText(res.data, 'utf-8');
                reader.onload = function (e) {
                    commit(types.Set_tc_product_detailHtml,reader.result);
                }
            }else{
                reject(res.body.errorMessage)
            }
        })
    });
    return Promise.all([p1,p2]);
}
//tcshop普通商品收藏
export const setTcProIsCollected = ({commit},data)=>{
    return new Promise((resolve,reject)=>{
        tcShop.setTcProIsCollected(data).then((res)=>{
           if(res.body.success){
               resolve();
               commit(types.Set_tc_pro_isCollected,1);
           }else{
               reject(res.body.errorMessage)
           }
        });
    });
}
//tcshop普通商取消收藏
export const cancleTcProIsCollected = ({commit},data)=>{
    return new Promise((resolve,reject)=>{
        tcShop.cancleTcProIsCollected(data).then((res)=>{
            if(res.body.success){
                resolve();
                commit(types.Set_tc_pro_isCollected,0);
            }else{
                reject(res.body.errorMessage)
            }
        });
    });
}

export const getNewPass = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        otherApi.getNewPass(data).then((res)=>{
            if(res.body.success){
                resolve()
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

export const initMyCollection = ({commit},data) => {
    let p1 = new Promise((resolve, reject) => {
        userApi.getUserCollectListShop(data).then((res)=>{
            if(res.body.success){
                resolve(res.body);
                commit(types.Set_user_coll_shop,res.body.module);
            }else{
                reject(res.body.errorMessage)
            }
        });
    });
    let p2 = new Promise((resolve, reject) => {
        userApi.getUserCollectProduct(data).then((res)=>{
            if(res.body.success){
                resolve(res.body);
                commit(types.Set_user_coll_pro,res.body.module);
            }else{
                reject(res.body.errorMessage)
            }
        });
    });
    return Promise.all([p1,p2]);
}

export const setDelProCollIds = ({commit},data) => {
    commit(types.Set_del_pro_coll_ids,data);
}

export const setDelShopCollIds = ({commit},data) => {
    commit(types.Set_del_shop_coll_ids,data);
}

export const delProCollIds = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        userApi.delProCollIds(data).then((res)=>{
            if(res.body.success){
                resolve()
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

export const delShopCollIds = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        userApi.delShopCollIds(data).then((res)=>{
            if(res.body.success){
                resolve()
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

export const setSignWinRecord = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.getWinRecord(data).then((res)=>{
            if(res.body.success){
                commit(types.Set_sign_winrecord,res.body.module);
                resolve();
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

export const editProductSpecId = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        tradeApi.editCartProAttr(data).then((res)=>{
            if(res.body.success){
                commit('set_cart_Spec',data)
                resolve();
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

export const setSignInfo = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.getSignInfo(data).then((res)=>{
            if(res.body.success){
                commit(types.Set_sign_signinfo,res.body.module);
                resolve();
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

export const getUserQrcode = ({commit}) => {
    return new Promise((resolve,reject) =>{
        userApi.getUserQrcode().then((res)=>{
            if(res.body.success){
                resolve(res.body.module)
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

export const setSignAd = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        indexApi.getBannerList(data).then((res)=>{
            if(res.body.success){
                commit(types.Set_sign_ad,res.body.module);
                resolve();
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

export const getUserFriends = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        userApi.getUserFriends(data).then((res)=>{
            if(res.body.success){
                resolve(res.body.module)
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

export const checkSignLotteryChance = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.checkLotteryChance({
            activityCode:data.activityCode[0],
            sameCityId:data.sameCityId
        }).then((res)=>{
            if(res.body.success){
                commit(types.Set_sign_lottery_chance,res.body.module);
                actApi.checkLotteryChance({
                    activityCode:data.activityCode[1],
                    sameCityId:data.sameCityId
                }).then((res)=>{
                    if(res.body.success){
                        commit(types.Set_sign_lottery_chance,res.body.module);
                        resolve();
                    }else{
                        reject(res.body.errorMessage)
                    }
                })
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

//获取所属行业数据
export const getIndustry = ({commit}) => {
    return new Promise((resolve,reject) =>{
        userApi.getIndustry().then((res)=>{
            if(res.body.success){
                resolve(res.body.module)
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}
//获取城市数据
export const getCitys = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        userApi.getCitys(data).then((res)=>{
            if(res.body.success){
                resolve(res.body.module)
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}
//查询本级商圈
export const userGetBusiness = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        userApi.userGetBusiness(data).then((res)=>{
            if(res.body.success){
                resolve(res.body.module)
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}
//取消订单方法
export const orderCancel = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        userApi.orderCancel(data).then((res)=>{
            if(res.body.success){
                resolve()
            }else{
                reject(res.errorMessage)
            }
        })
    })
}
//退款提交表单
export const refundSub = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        userApi.refundSub(data).then((res)=>{
            if(res.body.success){
                resolve()
            }else{
                reject(res.data.errorMessage)
            }
        })
    })
}
//获取售后详情方法
export const getRefund = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        userApi.getRefund(data).then((res)=>{
            if(res.body.success){
                resolve(res.body.module)
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

export const sign = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.sign().then((res)=>{
            if(res.body.success){
                commit(types.Set_sign,res.body.module);
                resolve(res.body.module);
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

export const createOrders = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        tradeApi.createOrder(data).then((res)=>{
            if(res.body.success){
                resolve(res.body.module)
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

export const getMySignLottRecord = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.getMyRecord({
            pageNo:data.pageNo,
            state:data.state,
            activityType:data.activityType,
            activityCode:data.activityCode[0]
        }).then((res)=>{
            if(res.body.success){
                commit(types.Set_sign_mylottrec,res.body.module);
                actApi.getMyRecord({
                    pageNo:data.pageNo,
                    state:data.state,
                    activityType:data.activityType,
                    activityCode:data.activityCode[1]
                }).then((res)=>{
                    if(res.body.success){
                        commit(types.Set_sign_mylottrec,res.body.module);
                        resolve(res.body.module);
                    }else{
                        reject(res.body.errorMessage)
                    }
                })
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

//取消售后方法
export const refundCancle = ({commit},oid) => {
    return new Promise((resolve,reject) =>{
        userApi.refundCancle(oid).then((res)=>{
            if(res.body.success){
                resolve()
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

//获取初始化买单数据
export const getOrder = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        userApi.getOrder(data).then((res)=>{
            if(res.body.success){
                commit(types.Get_My_Order,res.body.module);
                resolve(res.body)
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}
//获取加载更多的买单数据
export const AddOrderData = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        userApi.getOrder(data).then((res)=>{
            if(res.body.success){
                commit(types.Add_My_Order,res.body.module);
                resolve(res.body)
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}
//获取支付详细信息
export const getPayDetail = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        userApi.getPayDetail(data).then((res)=>{
            if(res.body.success){
                resolve(res.body.module)
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}


//获取抽奖数据
export const getRewardData = ({commit},data) => {
    return new Promise((resolve,reject) => {
        otherApi.getReward(data).then((res)=>{
            if(res.body.success){
                console.log(res.body.module);
                resolve(res.body.module)
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}
//修改密码
export const subChangePass = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        userApi.subChangePass(data).then((res)=>{
            console.log(res);
            if(res.body.success){
                resolve()
            }else{
                reject(res.body)
            }
        })
    })
}
//修改密码
export const delUserAddr = ({commit},addrId) => {
    return new Promise((resolve,reject) =>{
        userApi.delUserAddr(addrId).then((res)=>{
            if(res.body.success){
                resolve()
            }else{
                reject(res.body)
            }
        })
    })
}
//验证手机是否已经注册
export const getPhoneNumisReg = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        userApi.getPhoneNumisReg(data).then((res)=>{
            if(res.body.success){
                resolve(res.body.module)
            }else{
                reject(res.body)
            }
        })
    })
}
//获取非登录短信验证码
export const getVerCode = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        userApi.getVerCode(data).then((res)=>{
            if(res.body.success){
                resolve(res.body.module)
            }else{
                reject(res.body)
            }
        })
    })
}
//提交开店申请
export const subShopApply = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        userApi.subShopApply(data).then((res)=>{
            if(res.body.success){
                resolve(res.body.module)
            }else{
                reject(res.body)
            }
        })
    })
}
//提交开店申请
export const getShopApplyState = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        userApi.getShopApplyState(data).then((res)=>{
            if(res.body.success){
                resolve(res.body.module)
            }else{
                reject(res.body)
            }
        })
    })
}

//加载商家相册分类信息
export const getShopPhotoMenu = ({commit},shopId) => {
    return new Promise((resolve,reject) =>{
        tcShop.getShopPhotoMenu(shopId).then((res)=>{
            if(res.body.success){
                resolve(res.body.module)
            }else{
                reject(res.body)
            }
        })
    })
}
//获取相册信息
export const getPhotoInfo = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        tcShop.getPhotoInfo(data).then((res)=>{
            if(res.body.success){
                resolve(res.body.module)
            }else{
                reject(res.body)
            }
        })
    })
}

//获取二级导航
export const getTcShopNavMenu = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        tcShop.getNavMenu(data).then((res)=>{
            if(res.body.success){
                var cateMenuData = [];
                var amount = res.body.module;
                for(var i = 0;i < amount.length; i++){
                    if(amount[i].parentId == data.typeId && amount[i].type == 1 && amount[i].linkedType == 1){
                        cateMenuData.push(amount[i]);
                    }
                }
                commit(types.Set_tcCate_submenu,cateMenuData);
                resolve(res.body.module)
            }else{
                reject(res.body)
            }
        })
    })
}

//创建同城店铺买单
export const createxxOrder = ({commit},data) => {
    return new Promise((resolve,reject) => {
        tcShop.creatTcOrder(data).then((res)=>{
            if(res.body.success){
                resolve(res.body.module)
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

//初始化关联页面的数据
export const checkUpDate = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        tcShop.checkUpDate(data).then((res)=>{
            if(res.body.success){
                if (store.has('tut') && store.has('aut')) {
                    var oldTypeUpdateTime = localStorage.getItem('tut'),
                        oldAreaUpdateTime = localStorage.getItem('aut'),
                        newTypeUpdateTime = res.body.module.typeUpdateTime,
                        newAreaUpdateTime = res.body.module.areaUpdateTime;
                    if(oldTypeUpdateTime != newTypeUpdateTime){
                        localStorage.removeItem('GlGoodsNav');
                        localStorage.removeItem('GlAllCate');
                    }
                }
                localStorage.setItem('tut', res.body.module.typeUpdateTime);
                localStorage.setItem('aut', res.body.module.areaUpdateTime);
                resolve(res.body.module)
            }else{
                reject(res.body)
            }
        })
    })
}

export const getTcOrderInfo = ({ commit }, data) => {
    return new Promise((resolve,reject)=>{
        userApi.orderInfo(data).then((res) => {
            if(res.body.success){
                resolve(res.body.module);
            }else{
                reject(res.body.errorMessage);
            }
        });
    })
}

//秒杀活动信息获取
export const getSecSell = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.getSecSell(data).then((res)=>{
            if(res.body.success){
                commit(types.Set_secsell,res.body.module);
                resolve(res.body.module);
            }else{
                reject(res.body)
            }
        })
    })
}

//秒杀活动商品获取
export const getSecSellItem = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.getSecSellItem(data).then((res)=>{
            if(res.body.success){
                let o = {
                    pIndex:data.index,
                    items:res.body.module
                }
                commit(types.Set_secsell_item,o);
                resolve(res.body.module);
            }else{
                reject(res.body)
            }
        })
    })
}

//关联页面要获取的所有分类数据
export const getAllCate = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        tcShop.getAllCate(data).then((res)=>{
            if(res.body.success){
                store.set('GlAllCate',res.body.module.children)
                resolve(res.body.module)
            }else{
                reject(res.body)
            }
        })
    })
}
//获得列表页面
export const getRecmdList = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        tcShop.getRecmdList(data).then((res)=>{
            if(res.body.success){
                resolve(res.body.module)
            }else{
                reject(res.body)
            }
        })
    })
}

//老虎机活动信息获取
export const getOab = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.getOab(data).then((res)=>{
            if(res.body.success){
                commit(types.Set_oab,res.body.module);
                resolve(res.body.module)
            }else{
                reject(res.body)
            }
        })
    })
}

//获取老虎机中奖记录
export const getOabWinRecord = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.getWinRecord(data).then((res)=>{
            if(res.body.success){
                commit(types.Set_oab_winrecord,res.body.module);
                resolve(res.body.module)
            }else{
                reject(res.body)
            }
        })
    })
}

//埋点
export const tjTrack = ({commit},data) => {
    console.log(data);
    return new Promise((resolve,reject) => {
        if(data.clearEventCode){
            store.set('tjTrackData',[data.eventCode])
            otherApi.gettjTrackData({eventCode:data.eventCode,fm:null,linkId:data.linkId}).then((res) =>{
                resolve()
            })
        }else{
            if(store.has('tjTrackData')){
                var fm    = store.get('tjTrackData');
                var newFm = [];
                for (var i = 0; i < fm.length; i++) {
                    if(fm[i]==data.eventCode){
                        break;
                    }else{
                        newFm.push(fm[i]);
                    }
                }
                var newFmData = newFm.join(',');
                newFm.push(data.eventCode);
                store.set('tjTrackData',newFm)
                otherApi.gettjTrackData({eventCode:data.eventCode,fm:newFmData,linkId:data.linkId}).then((res) =>{
                    resolve()
                })
            }else{
                store.set('tjTrackData',[data.eventCode])
                otherApi.gettjTrackData({eventCode:data.eventCode,fm:null,linkId:data.linkId}).then((res) =>{
                    resolve()
                })
            }
        }
    })
}
//获得列表页面
export const getHotShopList = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        tcShop.getHotShopList(data).then((res)=>{
            if(res.body.success){
                resolve(res.body.module)
            }else{
                reject(res.body)
            }
        })
    })
}

//获取老虎机广告位
export const getOabAds = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        indexApi.getBannerList(data).then((res)=>{
            if(res.body.success){
                commit(types.Set_oab_ads,res.body.module);
                resolve(res.body.module)
            }else{
                reject(res.body)
            }
        })
    })
}

//获得售后列表页面
export const getAfterSalesList = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        userApi.getAfterSalesList(data).then((res)=>{
            if(res.body.success){
                resolve(res.body.module)
            }else{
                reject(res.body)
            }
        })
    })
}

//检测老虎机抽奖前置
export const checkOabChance = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.checkLotteryChance(data).then((res)=>{
            if(res.body.success){
                resolve(res.body.module)
            }else{
                reject(res.body)
            }
        })
    })
}

//老虎机抽奖
export const oabDoLot = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.doLottery(data).then((res)=>{
            if(res.body.success){
                commit(types.Set_oab_wininfo,res.body.module);
                resolve(res.body.module)
            }else{
                reject(res.body)
            }
        })
    })
}

//获取红包信息
export const industryDrawInfo = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.industryDrawInfo(data).then((res)=>{
             resolve(res.body);
        })
    })
}
//token获取方式，ture or false
export const FromXzFlg = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.FromXzFlg(data).then((res)=>{
            if(res.body.success){
                resolve(res.body.module)
            }else{
                reject(res.body)
            }
        })
    })
}

//获取老虎机规则
export const getOabRule = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.getOabRule(data).then((res)=>{
            resolve(res.body)
        })
    })
}

//行业抽奖获取抽奖机会
export const industryDrawChance = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.industryDrawChance(data).then((res)=>{
             resolve(res.body)
        })
    })
}

//老虎机我的中奖记录
export const getOabMyRecord = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.getMyRecord(data).then((res)=>{
            if(res.body.success){
                commit(types.Set_oab_myrecord,res.body.module);
                resolve(res.body.module)
            }else{
                reject(res.body)
            }
        })
    })
}

//检测是否已经关注公众号
export const isSubscribe = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.isSubscribe(data).then((res)=>{
            console.log(res);
            if(res.body.success){
                resolve(res.body)
            }else{
                reject(res.body)
            }
        })
    })
}

//老虎机中奖记录跳转验证
export const checkOabToAct = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.checkLotteryChance(data).then((res)=>{
            if(res.body.success){
                resolve(res.body.module)
            }else{
                reject(res.body)
            }
        })
    })
}

//获取抽奖奖品
export const getReward = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.getReward(data).then((res)=>{
            if(res.body.success){
                resolve(res.body.module)
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

//获取折扣街基本信息
export const getZKJbase = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.getActBase(data).then((res)=>{
            if(res.body.success){
                let zkjbase = res.body.module;
                commit(types.Set_zkj_base,res.body.module);
                actApi.checkLotteryChance({
                    activityCode:data.actId,
                    sameCityId:data.cityId
                }).then((res)=>{
                    if(res.body.success){
                        resolve({
                            base:zkjbase,
                            chance:res.body.module
                        })
                        commit(types.Set_zkj_chance,res.body.module);
                    }else if(res.body.resultCode==11001){
                        resolve('unlogin')
                    }
                })
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

//获取折扣街奖品
export const getZKJreward = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.getReward(data).then((res)=>{
            if(res.body.success){
                commit(types.Set_zkj_awards,res.body.module);
                resolve(res.body.module)
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

//获取折扣街奖品聚合列表
export const getZKJreward_JH = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.getReward(data).then((res)=>{
            if(res.body.success){
                commit(types.Set_zkj_awardspack,{
                    index:data.index,
                    data:res.body.module
                });
                resolve(res.body.module)
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

//获取折扣街中奖记录
export const getZKJwins = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.getWinRecord(data).then((res)=>{
            if(res.body.success){
                commit(types.Set_zkj_winrecord,res.body.module);
                resolve(res.body.module)
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

//折扣街抽奖
export const zkjDoLot = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.doLottery(data).then((res)=>{
            if(res.body.success){
                resolve(res.body.module)
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

//获取大转盘基本信息
export const getBRTbase = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.getActBase(data).then((res)=>{
            if(res.body.success){
                let brtbase = res.body.module;
                commit(types.Set_brt_base,res.body.module);
                actApi.checkLotteryChance({
                    activityCode:data.actId,
                    sameCityId:data.cityId
                }).then((res)=>{
                    if(res.body.success){
                        resolve({
                            base:brtbase,
                            chance:res.body.module
                        })
                        commit(types.Set_brt_chance,res.body.module);
                    }else if(res.body.resultCode==11001){
                        resolve('unlogin')
                    }
                })
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

//获取大转盘奖品
export const getBRTreward = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.getReward(data).then((res)=>{
            if(res.body.success){
                commit(types.Set_brt_awards,res.body.module);
                resolve(res.body.module)
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

//获取中奖奖品详情
export const getWinPro = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.getWinPro(data).then((res)=>{
            if(res.body.success){
                resolve(res.body.module)
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

//确认收货方法
export const confirmReceipt = ({commit},No) => {
    return new Promise((resolve,reject) =>{
        userApi.confirmReceipt(No).then((res)=>{
            console.log(res);
            if(res.body.success){
                resolve(res.body.module)
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

//大转盘抽奖
export const brtDoLot = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.doLottery(data).then((res)=>{
            if(res.body.success){
                commit(types.Set_brt_winaward,res.body.module);
                resolve(res.body.module)
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

//大转盘我的中奖记录
export const getBRTmyrecord = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.getMyRecord(data).then((res)=>{
            if(res.body.success){
                commit(types.Set_brt_myrecord,res.body.module);
                resolve(res.body.module)
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

//同城大转盘聚合奖品获取
export const getBRTwinlocal = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        actApi.getReward(data).then((res)=>{
            if(res.body.success){
                commit(types.Set_brt_localwin,res.body.module);
                resolve(res.body.module)
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

//获取微信参数
export const getWxShare = ({commit},data) => {
    return new Promise((resolve,reject) => {
        otherApi.getWxShareData(data).then((res)=>{
            if(res.body.success){
                resolve(res.body.module)
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: res.body.module.appId, // 必填，公众号的唯一标识
                    timestamp: res.body.module.timestamp, // 必填，生成签名的时间戳
                    nonceStr: res.body.module.nonceStr, // 必填，生成签名的随机串
                    signature: res.body.module.signature,// 必填，签名，见附录1
                    jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                });
                commit(types.Set_is_wx)
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

//提交订单评论
export const creatCom = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        userApi.creatCom(data).then((res)=>{
            if(res.body.success){
                resolve(res.body.module)
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}

//微信分享
export const wxShare = ({commit},data) => {
    return new Promise((resolve,reject) => {
        wx.ready(function() {
            wx.onMenuShareAppMessage({
                title: data.title,
                desc: data.desc,
                link: data.link,
                imgUrl: data.imgUrl,
                success: function(res) {
                    resolve(res)
                },
                cancel: function(res) {
                    reject(res)
                },
                fail: function(res) {
                    reject(res)
                }
            });

            wx.onMenuShareTimeline({
                title: data.title,
                desc: data.desc,
                link: data.link,
                imgUrl: data.imgUrl,
                success: function(res) {
                        resolve(res)
                },
                cancel: function(res) {
                        reject(res)
                },
                fail: function(res) {
                    reject(res)
                }
            })
        });
    })
}

//获取物流信息根据订单号
export const ProStreamInfo = ({commit},data) => {
    return new Promise((resolve,reject) =>{
        userApi.ProStreamInfo(data).then((res)=>{
            console.log(res);
            if(res.body.success){
                resolve(res.body.module)
            }else{
                reject(res.body.errorMessage)
            }
        })
    })
}
//
export const getTcProList = ({commit},data) => {
    commit(types.Set_tcShop_loading);
    let newData = {};
    for(var key in data){
        if(data[key] == '' || data[key] == undefined){

        }else{
            newData[key] = data[key]
        }
    }
    tcShop.getTcProList(newData).then((res) => {
        commit(types.Set_pro_list,res.body.module.pageDto.module)
    })
}

