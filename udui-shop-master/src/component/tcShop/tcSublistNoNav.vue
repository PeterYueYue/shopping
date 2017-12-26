<style scoped>

</style>
<template>
    <div class="tcShopSublist">
        <headnav v-bind:title="pagetitle"></headnav>
        <div style="position: absolute; z-index: 100; width:100%;">
            <shop-filter></shop-filter>
        </div>
        <div style="padding-top:0.7rem;">
            <shop-list v-bind:shop-list="tcShopList"></shop-list>
        </div>
        <dialog-pop v-if="dialogOnOff" v-bind:dialog="dialogConfig" v-on:off="offDialog"></dialog-pop>
        <loading :show="shopListLoading"></loading>
        <back-top :show="showBackStatus"></back-top>
    </div>
</template>

<script type="text/javascript">
    import headnav from './../common/header.vue'
    import dialogPop from './../common/dialog-pop.vue'
    import shopFilter from './shop-filter.vue'
    import shopList from './shop-list.vue'
    import loading  from './../common/loading.vue'
    import backTop from './../common/back-top.vue'
    import {showBack} from './../../../static/mUtils'
    import {
        mapGetters
    }
        from 'vuex'
    export default {
        data(){
            return {
                pagetitle: '优兑商场',//标题配置
                showMenu:true,
                eventCode : 'P008',
                clearEventCode : false,
                linkId : null
            }
        },
        methods: {
            selectMenu(menu){
                this.showMenu = false;
                this.$router.push('/tcShopSublist/type/'+menu.id+'/cate/'+menu.linkedId);
            }
        },
        computed: {
            ...mapGetters({
                //app组件中存入的状态
                positionState: 'positionState',
                //位置信息
                positionData: 'positionData',
                //过滤条件状态
                filterState: 'tcFilterState',
                //店铺列表
                tcShopList: 'tcShopList',
                //商品的加载动画
                shopListLoading: 'shopListLoading',
                //最后一次的区域Id
                lastAreaId: 'lastAreaId',
                //所有的城市列表
                areaList : "areaList",
                //
                subTcCateMenuData:'subTcCateMenuData'
            }),
        },
        created(){
            this.$store.dispatch('tjTrack',{eventCode:this.eventCode,clearEventCode:this.clearEventCode,linkId : this.$route.params.cate}).then(function(){

            },function(){

            })
            //开始监听scrollTop的值，达到一定程度后显示返回顶部按钮
            showBack(status => {
                this.showBackStatus = status;
            });
            let setCity = sessionStorage.getItem('setAreaName'),
                setId = sessionStorage.getItem('setAreaId');
            this.$store.dispatch('initTcPageNo'); //初始化第一页
            if(setId){   //有的话，去同城之后  //没有的话，在初始化的时候就已经有数据了，在加载首页的时候
                this.$store.dispatch('setTcFilterState',{
                    areaId: setId,
                    typeId: this.$route.params.cate,
                    lon: 0,
                    lat: 0
                })
            }
            //设置最有一次存入的区域
            if (this.lastAreaId == null) {
                this.$store.dispatch('setLastAreaId', this.filterState.areaId);
            } else {
                if (this.lastAreaId == this.filterState.areaId) {

                } else {
                    this.$store.dispatch('setLastAreaId', this.filterState.areaId);
                }
            }
            //去拿商品list
            this.$store.dispatch('getShopList',this.filterState);
            //获取二级导航
            console.log(this.$route.params.type);
            this.$store.dispatch('getTcShopNavMenu',{areaId:this.filterState.areaId,typeId:this.$route.params.type},);
            //去设置过滤字段的数据
            this.$store.dispatch('getTcShopInitData', {id: this.filterState.areaId});
        },
        components: {
            headnav, dialogPop, shopFilter, shopList,loading,backTop
        }
    }
</script>
