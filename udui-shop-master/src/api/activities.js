import httpVue from './httpVue'

export default {
    getSpeActDetail(data) {
        let url = httpVue.makeURL('/v1/activity/specialDetail', data);
        return httpVue.getDataVue(url,{
            credentials: true
        })
    },
    getSpeActSubList(data){
        let url = httpVue.makeURL('/v1/activity/spePrpList',data);
        return httpVue.getDataVue(url,{
            credentials: true
        })
    },
    getWinRecord(data){
        let url = httpVue.makeURL('/v1/lottery/envelope/win2TopAwards',data);
        return httpVue.getDataVue(url,{
            credentials: true
        })
    },
    getMyRecord(data){
        let url = httpVue.makeURL('/v1/lottery/envelope/myprizes',data);
        return httpVue.getDataVue(url,{
            credentials: true
        })
    },
    getSignInfo(data){
        let url = httpVue.makeURL('/v1/sign/todySignInfo',data);
        return httpVue.getDataVue(url,{
            credentials: true
        })
    },
    checkLotteryChance(data){
        let url = httpVue.makeURL('/v1/lottery/check/'+data.activityCode,data);
        return httpVue.getDataVue(url,{
            credentials: true
        })
    },
    sign(){
        let url = httpVue.makeURL('/v1/sign/sign');
        return httpVue.getDataVue(url,{
            credentials: true
        })
    },
    getSecSell(){
        let url = httpVue.makeURL('/v1/secKill/GetSecKill');
        return httpVue.getDataVue(url,{
            credentials: true
        })
    },
    getSecSellItem(data){
        let url = httpVue.makeURL('/v1/secKill/GetSecKillProducts',data);
        return httpVue.getDataVue(url,{
            credentials: true
        })
    },
    getOab(data){
        let url = httpVue.makeURL('/v1/lottery/activityPack/'+data.activityCode,data);
        return httpVue.getDataVue(url,{
            credentials: true
        })
    },
    //获取红包信息
    industryDrawInfo(data){
        let url = httpVue.makeURL('/v1/industry/draw/getLuckMoney',data);
        return httpVue.getDataVue(url,{
            credentials: true
        })
    },
    doLottery(data){
        let url = httpVue.makeURL('/v1/lottery/trydraw/'+data.activityCode,data);
        return httpVue.getDataVue(url,{
            credentials: true
        })
    },
    //token获取方式，ture or false
    FromXzFlg(){
        let url = httpVue.makeURL('/v1/wechart/tokenFromXzFlg');
        return httpVue.postDataVue(url,{},{
            credentials: true
        })
    },
    //行业抽奖获取抽奖机会
    industryDrawChance(){
        let url = httpVue.makeURL('/v1/industry/draw/receiveLuckMoney');
        return httpVue.getDataVue(url,{
            credentials: true
        })
    },
    getOabRule(data){
        return httpVue.getDataVue('http://vue.youdui.org:8081/app/actRule/'+data+'Rule.txt',{
            credentials: true,
            emulateJSON:true
        })
    },
    //检测是否已经关注公众号
    isSubscribe(){
        let url = httpVue.makeURL('/v1/wechart/isSubscribe');
        return httpVue.postDataVue(url,{},{
            credentials: true
        })
    },
    //获取抽奖奖品
    getReward(data){
        let actId = data.actId;
        let sameCityId = data.sameCityId
        let url = httpVue.makeURL("/v1/lottery/" + actId + '?sameCityId=' + sameCityId);
        return httpVue.getDataVue(url,{},{
            credentials: true
        })
    },
    //获取抽奖基本信息
    getActBase(data){
        let url = httpVue.makeURL("/v1/lottery/activity/"+data.actId+'?sameCityId='+data.cityId);
        return httpVue.getDataVue(url,{
            credentials: true
        })
    },
    //获取中奖奖品详情
    getWinPro(data){
        let envid = data.envid;
        let actid = data.actid
        let url = httpVue.makeURL("/v1/lottery/envelope/product/" + actid + "/" + envid);
        return httpVue.getDataVue(url,{
            credentials: true
        })
    }
}
