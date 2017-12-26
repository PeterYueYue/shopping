<style>
.ztgg {
    margin-top: 0.18rem;
}
.ztgg li {
    float: left;
    width: 3.72rem;
    margin-bottom: 2px;
}
.ztgg li>div {
    border-right: 1px solid #eee;
    height: 1.42rem;
    background: #fff;
}
.ztgg li>div img {
    display: block;
    width: 100%;
    height: 100%;
}
</style>

<template>
    <div class="ztgg">
        <ul class="clearfix">
            <li v-for="data in getZtggData.list"><div><router-link to="/selectArea"><img :src="data.linkedImg"></router-link></div></li>
        </ul>
    </div>
</template>

<script>
import {
    mapGetters
}
from 'vuex'
export default {
    data(){
        return{}
    },
    computed: mapGetters({
        getZtggData  : 'getZtggData'
    }),
    props: ['show']
}

</script>
