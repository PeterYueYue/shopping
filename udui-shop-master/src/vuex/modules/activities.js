import * as types from '../mutation-types'

const state = {
    speActDetail:{
        bannerList:[],
        categoryList:[],
        rootProducts:{}
    },
    speActSubList:[],
    speActFilter:{
        actId:'',
        cateId:'',
        partId:0,
        pageNo:1,
        hasNext:true
    },
    speActLoad:true,
    sign:{
        winRecord:{
            bigAwards:[],
            smallAwards:[]
        },
        signInfo:{},
        ad:[
            {list:[
                {
                    linkedUrl:'',
                    linkedImg:''
                }
            ]}
        ],
        lotteryChance:0,
        voucher:0,
        myLottRecord:[]
    },
    zkj:{
        chance:{},
        base:{},
        winRecord:{
            bigAwards:[
                {
                    giftId:'',
                    giftName:'',
                    userLogin:''
                }
            ],
            smallAwards:[
                {
                    giftId:'',
                    giftName:'',
                    userLogin:''
                }
            ]
        },
        awards:[]
    },
    brt:{
        chance:{},
        base:{},
        awards:[],
        winAward:{},
        myRecord:[],
        localWin:[]
    },
    secSell:{
        curIndex:0,
        con:[],
        selItems:[]
    },
    oab:{
        oabInfo:{},
        winRecord:[],
        ads:[{
            list:[]
        }],
        winInfo:{},
        myRecord:[]
    }
}

const mutations = {
    [types.Set_SpeAct_Detail] (state,amount) {
      state.speActDetail = amount;
    },
    [types.Set_SpeAct_SubList] (state,amount) {
        state.speActSubList = amount;
        state.speActLoad= false;
    },
    [types.Add_SpeAct_SubList](state,amount){
        for(var i=0;i<amount.length;i++){
            state.speActSubList.push(amount[i]);
        }
        state.speActLoad= false;
    },
    [types.Add_SpeAct_PageNum] (state){
        state.speActFilter.pageNo++;
    },
    [types.Set_SpeAct_Filter](state,amount){
        if(amount.actId){state.speActFilter.actId = amount.actId;}
        if(amount.cateId){state.speActFilter.cateId = amount.cateId;}
        if(amount.hasNext||amount.hasNext==false){state.speActFilter.hasNext = amount.hasNext;}
        if(amount.partId){state.speActFilter.partId = amount.partId;}
        if(amount.pageNo){state.speActFilter.pageNo = amount.pageNo;}
    },
    [types.Set_SpeAct_Loading](state,amount){
        state.speActLoad = amount;
    },
    [types.Set_sign_winrecord](state,amount){
        state.sign.winRecord = amount;
    },
    [types.Set_sign_signinfo](state,amount){
        state.sign.signInfo = amount;
    },
    [types.Set_sign_ad](state,amount){
        state.sign.ad = amount;
    },
    [types.Set_sign_lottery_chance](state,amount){
        state.sign.lotteryChance += amount.remainChangce;
    },
    [types.Set_sign](state,amount){
        state.sign.signInfo.todaySign = amount.todaySign;
        state.sign.signInfo.serialDays = amount.todaySign;
        state.sign.voucher = amount.voucher;
    },
    [types.Set_sign_mylottrec](state,amount){
        for(let i=0;i<amount.length;i++){
            let gtype = amount[i].awardType;
            let gstate = amount[i].awardState;
            let gbtn ='', gbtnclass='';
            switch (gtype){
    			case 1://实物商品
                    amount[i].expireTime = '';
    				if(gstate==2){
                        amount[i].btnClass = 'dis';
    					amount[i].btnTxt ='已领取';
    				}else if(gstate==1){
                        amount[i].btnClass = 'act';
    					amount[i].btnTxt ='立即领取';
                        amount[i].routerUrl = '/myWallet';
    				}else if(gstate==3){
                        amount[i].btnClass = 'dis';
    					amount[i].btnTxt ='已过期';
    				}
    				break;
    			case 2:
    			case 3:
                    amount[i].btnClass = 'act';
    				amount[i].expireTime = '使用有效期：'+amount[i].expireTime;
    				amount[i].btnTxt = '查看入账';
                    amount[i].routerUrl = '/myWallet';
    				break;
    			case 4:
    				amount[i].expireTime = '使用有效期：'+amount[i].expireTime;
    				if(gstate==2){
                        amount[i].btnClass = 'dis';
    					amount[i].btnTxt ='已领取';
    				}else if(gstate==1){
                        amount[i].btnClass = 'act';
    					amount[i].btnTxt ='立即领取';
                        amount[i].routerUrl = '/myWallet';
    				}else if(gstate==3){
                        amount[i].btnClass = 'dis';
    					amount[i].btnTxt ='已过期';
    				}
    				break;
            }
            state.sign.myLottRecord.push(amount[i]);
        }
    },
    [types.Set_secsell](state,amount){
        state.secSell.con.length = 0;
        let curI = 0;
        for(let i=0;i<amount.length;i++){
            let st = amount[i].activityBegTime,
                et = amount[i].activityEndTime,
                nt = amount[i].serviceTime;
            let _statu = '', _cdTxt = '',_cdDes='',_cdTime=0,itemState = 0;
            switch (true) {
                case nt<st:
                    _statu = '即将开始';
                    _cdTxt = '疯抢即将开始';
                    _cdDes = '距离本场开始';
                    _cdTime = st;
                    itemState = 2;
                    break;
                case nt>=st&&nt<=et:
                    _statu = '已开始';
                    _cdTxt = '还有宝贝可以继续抢';
                    _cdDes = '距离本场结束';
                    curI = i;
                    _cdTime = et;
                    itemState = 1;
                    break;
                case nt>=et:
                    _statu = '已结束';
                    _cdTxt = '已结束';
                    _cdDes = '距离本场结束';
                    _cdTime = et;
                    itemState = 0;
                    break;
                default:
            }
            amount[i].statu = _statu;
            amount[i].cdTxt = _cdTxt;
            amount[i].cdDes = _cdDes;
            amount[i].cdTime = _cdTime;
            amount[i].stFormat = new Date(st).format('HH:mm');
            amount[i].itemState = itemState;
            state.secSell.con.push(amount[i]);
        }
        state.secSell.curIndex = curI;
        if(state.secSell.con.length>0&&state.secSell.con[curI].itemState==1){
            state.secSell.con[curI].statu = '疯抢中';
            state.secSell.con[curI].cdTxt = '限时限量疯抢中';
        }
    },
    [types.Set_secsell_item](state,amount){
        for(let i=0;i<amount.items.length;i++){
            if(amount.items[i].awardTotalCount<=0){
                amount.items[i].btnTxt = '已抢完';
            }else {
                amount.items[i].btnTxt = '马上抢';
            }
        }
        state.secSell.selItems = amount.items;
    },
    [types.Set_oab](state,amount){
        state.oab.oabInfo = amount;
    },
    [types.Set_oab_winrecord](state,amount){
        let arr = [];
        if(amount.bigAwards!=null){
            arr = arr.concat(amount.bigAwards);
        }
        if(amount.smallAwards.length>0){
            arr = arr.concat(amount.smallAwards);
        }
        state.oab.winRecord = arr;
    },
    [types.Set_oab_ads](state,amount){
        state.oab.ads = amount;
    },
    [types.Set_oab_wininfo](state,amount){
        state.oab.winInfo = amount;
    },
    [types.Set_oab_myrecord](state,amount){
        state.oab.myRecord = amount;
    },
    [types.Set_zkj_base](state,amount){
        state.zkj.base = amount;
    },
    [types.Set_zkj_chance](state,amount){
        state.zkj.chance = amount;
    },
    [types.Set_zkj_winrecord](state,amount){
        state.zkj.winRecord = amount;
    },
    [types.Set_zkj_awards](state,amount){
        for(let i=0;i<amount.length;i++){
            amount[i].package = [];
        }
        state.zkj.awards = amount;
    },
    [types.Set_zkj_awardspack](state,amount){
        state.zkj.awards[amount.index].package=amount.data;
    },
    [types.Set_brt_base](state,amount){
        state.brt.base = amount;
    },
    [types.Set_brt_chance](state,amount){
        state.brt.chance = amount;
    },
    [types.Set_brt_awards](state,amount){
        state.brt.awards = amount;
    },
    [types.Set_brt_winaward](state,amount){
        state.brt.winAward = amount.winAward;
    },
    [types.Set_brt_myrecord](state,amount){
        state.brt.myRecord = amount;
    },
    [types.Set_brt_localwin](state,amount){
        state.brt.localWin = amount;
    }
}


export default {
  state,
  mutations
}
