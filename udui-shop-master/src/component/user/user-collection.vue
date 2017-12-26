<style scoped>
    .qxsc{height:0.9rem; line-height: 0.9rem; background-color: #fb0081; position: fixed; bottom:0; width:100%; text-align: center; color:white; font-size: 0.3rem;}
</style>
<template>
    <div class="myCollection">
        <headnav v-bind:title="pagetitle" :rightIcon="rightIcon" @rIconEvent="edit"></headnav>
        <tab-switch :tabconfig="tabconfig" @childChangeTab="selfChangeTab"></tab-switch>
        <!--这里需要的是一个组件-->
        <pro-list
            :prolistData="myCollPro"
            :shopListData="myCollShop"
            :showControl="editState"
            :selectByTab="tabControll" ></pro-list>
        <div class="qxsc" v-show="editState" @click="delItem">
            取消收藏
        </div>
        <loading :show="loading"></loading>
        <dialog-pop v-if="dialogOnOff" v-bind:dialog="dialogConfig" v-on:off="offDialog"></dialog-pop>
    </div>
</template>
<script type="text/javascript">
    import {mapGetters} from 'vuex'
    import headnav      from './../common/header.vue'
    import dialogPop    from './../common/dialog-pop.vue'
    import loading      from './../common/loading.vue'
    import proList      from './pro-list-com.vue'
    import tabSwitch    from './../common/tab-switch.vue'
    export default {
        data() {
            return {
                pagetitle:'我的收藏',
                rightIcon: {
                    txt:'编辑',
                },
                pagenum:1,
                dialogOnOff:false, //弹出层开关
                dialogConfig: {   //弹出层设置
                    autoOff:true,
                    txt : ''
                },
                loading:true,
                tabconfig:[],
                editState:false,   //完成状态
                tabControll:0,
                eventCode : 'R005',
                clearEventCode : false,
                linkId : null
            }
        },
        created() {
            this.$store.dispatch('tjTrack',{eventCode:this.eventCode,clearEventCode:this.clearEventCode,linkId : this.linkId}).then(function(){

            },function(){

            })
            //没有登录就去登录页面
            if(!this.userInfo.isLogin){
                this.dialogOnOff = true;
                this.dialogConfig.txt = '您还没有登录，去登录';
                setTimeout(function(){
                    this.$router.push('/login');
                }.bind(this),2000);
            }
            this.tabconfig = [
                {
                    txt:'商品',
                },
                {
                    txt:'门店',
                }
            ];
            //初始化数据
            this.$store.dispatch('initMyCollection',{
                pageNo: this.pagenum,
                pageSize: 20
            }).then(()=>{
                //成功拿到数据，之后
                this.loading = false;
            });
        },
        computed: {
            ...mapGetters([
                'myCollShop','userInfo','myCollPro','myDelProCollIds','myDelShopCollIds'
            ]),
        },
        methods: {
            edit(){
                this.editState = !this.editState;
                if(this.editState ){
                    this.rightIcon.txt='完成';
                }else{
                    this.rightIcon.txt='编辑';
                }
            },
            //子组件传过来的事件
            offDialog : function(){
                this.dialogOnOff = false;
            },
            //tab切换做出相应的操作，index是子组件传过来的索引
            selfChangeTab(index){
                this.tabControll = index;
            },
            //点击取消收藏
            delItem(){
                if(this.tabControll == 0){
                    this.$store.dispatch('delProCollIds',{productIds:this.myDelProCollIds}).then(()=>{
                        this.$store.dispatch('initMyCollection',{
                            pageNo: this.pagenum,
                            pageSize: 20
                        }).then(()=>{
                            //成功拿到数据，之后
                            this.loading = false;
                        });
                    },(data)=>{
                        this.dialogOnOff = true;
                        this.dialogConfig.txt = data;
                    });
                }else if(this.tabControll == 1){
                    this.$store.dispatch('delShopCollIds',{shopIds:this.myDelShopCollIds}).then(()=>{
                        this.$store.dispatch('initMyCollection',{
                            pageNo: this.pagenum,
                            pageSize: 20
                        }).then(()=>{
                            //成功拿到数据，之后
                            this.loading = false;
                        });
                    },(data)=>{
                        this.dialogOnOff = true;
                        this.dialogConfig.txt = data;
                    });
                }
            }
        },
        components: {
            headnav,dialogPop,loading,proList,tabSwitch
        },
    }
</script>
