<style>
.addrSelGroup {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    background: #eee;
    z-index: 11;
}
.addrSelBtn {
    background: #fff;
    padding: 0 0.3rem;
    height: 0.8rem;
    line-height: 0.8rem;
}
.addrSelBtn a {
    color: #017bfa;
    font-size: 0.24rem;
}
.addrSelGroup select {
    display: block;
    float: left;
    -webkit-appearance: none;
    border:none;
    width: 1.8rem;
    padding-left: 0.4rem;
    height: 1.5rem;
    line-height: 1.5rem;
    background: #eee;
    font-size: 0.25rem;
    font-family: 'microsoft yahei';
}
</style>

<template>

<div class="addrSelect">
    <div class="addrSelGroup">
        <div class="addrSelBtn clearfix">
            <a class="fl" @click="addrSelCancle()">取消</a>
            <a class="fr" @click="addrSelOk()">完成</a>
        </div>
        <div style="padding:0.15rem;">
            <select v-model="provSel" @change="loadCity()">
                <option :value="prov" v-for="prov in allProvince">{{prov.name}}</option>
            </select>
            <select v-model="citySel" @change="loadCounty()">
                <option :value="city" v-for="city in allCity">{{city.name}}</option>
            </select>
            <select v-model="countySel" @change="loadStreet()">
                <option :value="county" v-for="county in allCounty">{{county.name}}</option>
            </select>
            <select v-model="streetSel" v-if="hasStreet">
                <option :value="street" v-for="street in allStreet">{{street.name}}</option>
            </select>
        </div>
    </div>
    <layer></layer>
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
import layer      from './layer.vue'

const components = {
    layer
}
export default {
    data() {
        return {
            provSel:{id:0,name:'选择省'},
            citySel:{id:0,name:'选择市'},
            countySel:{id:0,name:'选择区县'},
            streetSel:{id:0,name:'选择街道'}
        }
    },
    computed:{
        ...mapGetters({
            allProvince: 'allProvince',
            allCity: 'allCity',
            allCounty: 'allCounty',
            allStreet: 'allStreet',
            hasStreet:'hasStreet'
        })
    },
    components: components,
    methods: {
        loadCity:function(){
            this.citySel = {id:0,name:'选择市'};
            this.countySel = {id:0,name:'选择区县'};
            this.streetSel = {id:0,name:'选择街道'};
            this.$store.dispatch('getAllCity',{id:this.provSel.id});
        },
        loadCounty:function(){
            this.countySel = {id:0,name:'选择区县'};
            this.streetSel = {id:0,name:'选择街道'};
            this.$store.dispatch('getAllCounty',{id:this.citySel.id});
        },
        loadStreet:function(){
            this.streetSel = {id:0,name:'选择街道'};
            this.$store.dispatch('getAllStreet',{id:this.countySel.id});
        },
        addrSelCancle:function(){
            this.$emit('addrSelCancle');
        },
        addrSelOk:function(){
            let selId = this.hasStreet?this.streetSel.id:this.countySel.id;
            let selArea = this.provSel.name+'_'+this.citySel.name+'_'+this.countySel.name;
            let selStreet = this.hasStreet?this.streetSel.name:'';
            this.$emit('addrSelOk',[selId,selArea,selStreet]);
        }
    },
    created() {
        this.$store.dispatch('getAllProvince',{id:0});
    }
}

</script>
