import * as types from '../mutation-types'

const state = {
    navigatorType:0,
    imgCode:{
        check:false,
        codeVal:''
    },
    msgCodeLogin:'',
    msgCodeUnlogin:'',
    allProvince:[{id:0,name:'选择省'}],
    allCity:[{id:0,name:'选择市'}],
    allCounty:[{id:0,name:'选择区县'}],
    allStreet:[{id:0,name:'选择街道'}],
    hasStreet:true,
    addrIdSel:0,
    reInmgCode : null,
    allBank:[],
    isWx : false
}

const mutations = {
    [types.Set_navigator_type](state,amount){
        let ua = window.navigator.userAgent.toLowerCase();
        if(ua.indexOf('micromessenger')>=0){
            state.navigatorType = 'wx';
        }
        if(ua.indexOf('micromessenger')<0){
            state.navigatorType = 'ali';
        }
        if(ua.indexOf('udui')>=0){
            state.navigatorType = 'app';
        }
    },
    [types.Set_imgcode_check](state,amount){
        if(amount==0){
            state.imgCode.check = false;
        }
        if(amount==1){
            state.imgCode.check = true;
        }
    },
    [types.Set_imgcode_val](state,amount){
        state.imgCode.codeVal = amount.imgSrc;
    },
    [types.Set_other_allprov](state,amount){
        let n = state.allProvince.length;
        state.allProvince.splice(1,n);
        let m = state.allCity.length;
        state.allCity.splice(1,m);
        let o = state.allCounty.length;
        state.allCounty.splice(1,o);
        let p = state.allStreet.length;
        state.allStreet.splice(1,p);
        for(let i=0;i<amount.length;i++){
            state.allProvince.push(amount[i]);
        }
    },
    [types.Set_other_allcity](state,amount){
        let m = state.allCity.length;
        state.allCity.splice(1,m);
        let o = state.allCounty.length;
        state.allCounty.splice(1,o);
        let p = state.allStreet.length;
        state.allStreet.splice(1,p);
        for(let i=0;i<amount.length;i++){
            state.allCity.push(amount[i]);
        }
    },
    [types.Set_other_allcounty](state,amount){
        let o = state.allCounty.length;
        state.allCounty.splice(1,o);
        let p = state.allStreet.length;
        state.allStreet.splice(1,p);
        for(let i=0;i<amount.length;i++){
            state.allCounty.push(amount[i]);
        }
    },
    [types.Set_other_allstreet](state,amount){
        if(amount.length==0){
            state.hasStreet = false;
        }else{
            state.hasStreet = true;
            let n = state.allStreet.length;
            state.allStreet.splice(1,n);
            for(let i=0;i<amount.length;i++){
                state.allStreet.push(amount[i]);
            }
        }
    },
    [types.Set_register_imgCode](state,amount){
        state.reInmgCode = amount;
    },
    [types.Set_other_allBank](state,amount){
        for(let i=0;i<amount.length;i++){
            state.allBank.push(amount[i]);
        }
    },
    [types.Set_is_wx](state){
        state.isWx = true;
    }
}

export default {
  state,
  mutations
}
