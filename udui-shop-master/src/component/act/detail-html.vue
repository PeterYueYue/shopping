<style scoped>
    .dHtml {
        padding: 0 0.18rem;
        background: #fff;
        margin-top: 0.18rem;
        font-size: 0.24rem;
    }

    .dHtml h3 {
        line-height: 0.72rem;
        height: 0.72rem;
        font-size: 0.26rem;
        color: #666;
        border-bottom: 1px solid #eee;
    }

    .dHtml .dCon {
        padding: 0.18rem 0;
        line-height: 1.5;
    }

    .dHtml .dCon img {
        width: 100%;
        height: auto;
    }
</style>

<template>
    <div class="dHtml">
        <h3>图文详情</h3>
        <div class="dCon" v-html="removeStyle(detailHtml)"></div>
    </div>
</template>

<script>
    import {
        mapGetters
    }
        from 'vuex'
    export default {
        computed:{
            ...mapGetters({
                detailHtml:'proDetailHtml'
            })
        },
        data(){
            return{
                getProId:'',
            }
        },
        methods: {
            removeStyle: function (_html) {
                return _html.replace(/width.*?\s|height.*?\s/gi, '');
            }
        },
        created(){
            this.getProId = this.proId;
            this.$store.dispatch('getProductDetailHtml', this.getProId);
        },
        props : ['proId']
    }

</script>
