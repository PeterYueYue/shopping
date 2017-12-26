<style scoped>
    .con-des{height:0.8rem; line-height: 0.8rem; text-align: center; border-bottom:1px solid #ccc;}
    .con-des .num,.con-des .quan{color:#ff7e42;}
    .con-list{width:100%;}
    .con-list .myfriend {border-top: 1px solid #ddd;color: #333;  }
    .con-list .myfriend li{height:0.8rem;background-color:white; line-height: 0.8rem;}
    .con-list .myfriend li p.tbl{width:30%;}
    .con-list .myfriend li p.tbm{width:40%;}
    .con-list .myfriend li p.tbr{width:30%;}
    .con-list .myfriend li p{float:left; text-align: center; border-right:1px solid #ccc; border-bottom:1px solid #ccc; box-sizing: border-box;}
</style>

<template>
    <div class="myfriend">
        <headnav v-bind:title="pagetitle"></headnav>
        <div class="con-des">
            已经成功邀请<span class="num">{{ren_num}}</span>人注册，累计获得奖励<span class="quan">{{giveTicket}}</span>优券
        </div>
        <div class="con-list">
            <ul class="myfriend haoyou" >
                <li class="clearfix tit">
                    <p class="tbl">好友账号</p>
                    <p class="tbm">注册时间</p>
                    <p class="tbr">奖励优券</p>
                </li>
                <li class="clearfix" v-for="item in Friends_list">
                    <p class="tbl">{{item.phone}}</p>
                    <p class="tbm">{{item.createTime | formatDate}}</p>
                    <p class="tbr">{{item.giveTicket}}</p>
                </li>
            </ul>
        </div>
        <dialog-pop v-if="dialogOnOff" v-bind:dialog="dialogConfig" v-on:off="offDialog"></dialog-pop>
        <loading :show="loading"></loading>
    </div>
</template>

<script type="text/javascript">
    import headnav from './../common/header.vue'
    import dialogPop from './../common/dialog-pop.vue'
    import loading      from './../common/loading.vue'
    import {formatDate} from '../../../static/mUtils'
    export default {
        data(){
            return {
                pagetitle:'我的好友',//标题配置
                Friends_pageNo:1,   //第一页
                Friends_pageSize:15,//一页上有15个
                ren_num:0,          // 邀请人数
                giveTicket:0,       //获得优卷
                Friends_list:[],    //列表数据
                loading:true,
                eventCode : 'R007',
                clearEventCode : false,
                linkId : null
            }
        },
        methods:{
        },
        filters: {
            formatDate(time) {
                let date = new Date(time);
                return formatDate(date, 'yyyy-MM-dd hh:mm');
            }
        },
        created(){
            this.$store.dispatch('tjTrack',{eventCode:this.eventCode,clearEventCode:this.clearEventCode,linkId : this.linkId}).then(function(){

            },function(){

            })
            //查询推荐的好友
            this.$store.dispatch('getUserFriends',{pageNo:this.Friends_pageNo,pageSize:this.Friends_pageSize}).then((data)=>{
                this.loading = false;
                this.ren_num = data.length;
                this.Friends_list = data;
                //循环出所有的分数累加
                for(let i = 0; i<data.length;i++){
                    this.giveTicket += data[i].giveTicket
                }
            });
        },
        components:{
            headnav,dialogPop,loading
        }
    }
</script>
