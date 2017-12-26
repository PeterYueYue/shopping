<style scoped>
    .tabSwitch ul{border-bottom: 1px solid #999;}
    .tabSwitch li{ height:0.8rem; line-height: 0.8rem; font-size: 0.28rem; float:left;text-align: center; background-color: white; border-bottom:2px solid transparent;}
    .tabSwitch li.act{border-bottom:2px solid #fb0081; color:#fb0081}
</style>
<template>
    <div class="tabSwitch">
        <ul class="clearfix">
            <li
                :class="index==current?'act':''"
                :style="colWidth"
                v-for="(data,index) in tabconfig"
                @click="changeTab(index)"
            >{{data.txt}}</li>
        </ul>
    </div>
</template>
<script type="text/javascript">
	import {mapGetters}from 'vuex'
	export default {
		data() {
			return {
                current:0,//初始化tab索引为第一个
            }
		},
		created() {

		},
        props:['tabconfig'],
		computed: {
			colWidth(){
				return 'width:'+100/this.tabconfig.length+'%'
            }
        },
		methods: {
            changeTab(index){
                this.current = index;
                //通知父组件
                this.$emit('childChangeTab',index)
            }
        },
		components: {}
	}
</script>
