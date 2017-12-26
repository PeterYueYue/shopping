import httpVue from './httpVue'

export default {
    autoLogin(data){
        let url = httpVue.makeURL('/v1/wechart/loginByCode');
        return httpVue.postDataVue(url,data,{
            credentials:true
        })
    },
    imgCodeCheck(){
        let url = httpVue.makeURL('/v1/sms/getSmsFlagState');
        return httpVue.getDataVue(url,{
            credentials:true
        })
    },
    getImgCode(){
        let url = httpVue.makeURL('/v1/code');
        return httpVue.getDataVue(url,{
            credentials:true
        })
    },
    getMsgCodeLogin(data){
        let url = httpVue.makeURL('/v1/sendSNoLogin/'+data.type);
        return httpVue.postDataVue(url,data,{
            credentials:true
        })
    },
    getMsgCodeUnlogin(data){
        let url = httpVue.makeURL('/v1/sms/'+data.type,{phone:data.phone,smsCode:data.smsCode});
        return httpVue.postDataVue(url,{
            credentials:true
        })
    },
    userRegister(data){
        let url = httpVue.makeURL('/v1/auth/reg');
        return httpVue.postDataVue(url,data,{
            credentials:true
        })
    },
    getAreaList(data){
        let url = httpVue.makeURL('/v1/area/getArea',data);
        return httpVue.getDataVue(url,{
            credentials:true
        })
    },
    getAllBank(){
        let url = httpVue.makeURL('/v1/bank');
        return httpVue.getDataVue(url,{
            credentials:true
        })
    },
    getNewPass(data){
        let url = httpVue.makeURL('/v1/auth/pass/find');
        return httpVue.postDataVue(url,data,{
            credentials:true
        })
    },
    getReward(data){
        let url = httpVue.makeURL("/v1/lottery/"+data.actId+'?sameCityId='+data.sameCityId);
        return httpVue.getDataVue(url,{
            credentials:true
        })
    },
    gettjTrackData(data){
        let url = httpVue.makeURL("/v1/tongji/track",data);
        return httpVue.getDataVue(url,{
            credentials:true
        })
    },
    getWxShareData(data){
        let url = httpVue.makeURL("/v1/wechart/getJSSDK");
        return httpVue.postDataVue(url,data,{
            credentials:true
        })
    }
}
