<style>
.cateMenu {
    padding: 0.36rem 0 0.18rem;
    height: 1.64rem;
}
.cateMenu li {
    float: left;
    width: 1.5rem;
    text-align: center;
}
.cateMenu li .cateIco {
    width: 0.9rem;
    height: 0.9rem;
    margin: 0 auto 0.18rem;
}
.cateMenu li .cateIco img {
    display: block;
}
.cateMenu li .cateName {
    font-size: 0.25rem;
    color: #333;
}
</style>

<template>
    <div class="cateMenu">
        <ul class="clearfix">
            <li v-for="(data,index) in navData" v-if="index<5">
                <router-link to="/specialAct/151/part/0">
                    <div class="cateIco"><img :src="data.image"></div>
                    <div class="cateName" v-bind:style="{ color: navlistColor}">{{data.name}}</div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import {
    mapGetters
}
from 'vuex'

export default {
    data() {
        return {
        }
    },
    props:['navData','navlistColor'],
    created() {
    }
}
</script>
