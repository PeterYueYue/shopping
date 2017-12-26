<style>

</style>

<template>
    <div class="index-box">
        <mall-index v-if="positionState==2 || positionState==3"></mall-index>
        <tc-index v-else-if="positionState==1"></tc-index>
        <back-top :show="showBackStatus"></back-top>
    </div>
</template>

<script>
import {
    mapGetters
}
    from 'vuex'
import mallIndex from './mall-index.vue'
import tcIndex from './tc-index.vue'
import loading from './../common/loading.vue'
import backTop from './../common/back-top.vue'
import {showBack} from './../../../static/mUtils'
const components = {
    mallIndex, tcIndex, loading,backTop
}
export default {
    data() {
        return {
            lo: false,
            eventCode: 'H001',
            clearEventCode: true,
            linkId: null,
            showBackStatus:false
        }
    },
    computed: mapGetters({
        positionState: 'positionState',
        positionData: 'positionData'
    }),
    created() {
        //开始监听scrollTop的值，达到一定程度后显示返回顶部按钮
        showBack(status => {
            this.showBackStatus = status;
        });
        this.$store.dispatch('tjTrack', { eventCode: this.eventCode, clearEventCode: this.clearEventCode, linkId: this.linkId }).then(function () {

        }, function () {

        })
    },
    name: 'index',
    components: components
}

</script>
