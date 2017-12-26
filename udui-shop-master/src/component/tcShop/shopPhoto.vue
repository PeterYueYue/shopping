<style scoped>
    .shopPhoto{ width:100%; overflow: hidden}
    .PhotoCon .Pmenu {height:1rem; box-sizing: border-box; background-color:white; padding: 0 0.2rem; width:100%; overflow-x: auto; }
    .PhotoCon .Pmenu ul{width:10000px;}
    .PhotoCon .Pmenu li{float: left; width:1.5rem; line-height: 0.97rem;  text-align: center; }
    .PhotoCon .Pmenu li.act{border-bottom:50px solid #e40075;}
    .PhotoCon .Plist li {width:50%;padding:0.2rem; height:4rem; box-sizing: border-box; float: left; }
    .PhotoCon .Plist li .list{position: relative; height:100%;}
    .PhotoCon .Plist li p{position: absolute; bottom:0; width:100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: center; line-height: 0.5rem;  color:white; box-sizing: border-box; left:0; height:0.5rem; background-color:rgba(0,0,0,0.5);}
</style>
<template>
    <div class="shopPhoto">
        <headnav v-bind:title="pagetitle"></headnav>
        <div class="PhotoCon">
            <div class="Pmenu">
                <ul class="clearfix" :style="'width:'+MenuWidth">
                    <li :class="selectMenuId == item.id ? 'act' : '' " v-for="item in PmenuData" @click="selectMenu(item)">{{item.name}}</li>
                </ul>
            </div>
            <div class="Plist">
                <ul class="clearfix">
                    <li v-for="d in PhotoData">
                        <div class="list">
                            <img :src="d.linkedUrl" alt="">
                            <p class="name">{{d.name}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <dialog-pop v-if="dialogOnOff" v-bind:dialog="dialogConfig" v-on:off="offDialog"></dialog-pop>
    </div>
</template>

<script type="text/javascript">
    import headnav from './../common/header.vue'
    import dialogPop from './../common/dialog-pop.vue'
    export default {
        data(){
            return {
                pagetitle: '商家相册',//标题配置
                PmenuData:{},   //菜单数据
                pageNo:1,
                selectMenuId:'',
                PhotoData:{},
                MenuWidth:'',
            }
        },
        methods: {
            selectMenu(item){
                this.selectMenuId = item.id;
                this.$store.dispatch('getPhotoInfo',{
                    pageNo: this.pageNo,
                    shopId:this.$route.params.shopId,
                    selectMenuId:this.selectMenuId
                }).then((data)=>{
                    this.PhotoData = data;
                });
            },
        },
        created(){
            //加载商家相册分类信息
            this.$store.dispatch('getShopPhotoMenu',this.$route.params.shopId).then((data)=>{
                this.PmenuData = data;
                this.selectMenuId = data[0].id;
                this.MenuWidth = data.length * 1.5 + 'rem';
                console.log(this.MenuWidth);
            }).then(()=>{
                this.$store.dispatch('getPhotoInfo',{
                    pageNo: this.pageNo,
                    shopId:this.$route.params.shopId,
                    selectMenuId:this.selectMenuId
                }).then((data)=>{
                    this.PhotoData = data;
                });
            });





        },
        components: {
            headnav, dialogPop
        }
    }
</script>
