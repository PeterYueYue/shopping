<style scoped>
.scanError {
    width: 100%;
    height: 100%;
    background: #eee url('../../assets/images/subject/scanerrorbg.jpg') center no-repeat;
    background-size:100% 100%;
    padding-bottom: 0;
}
.errorMsg {
    position: absolute;
    width: 5rem;
    line-height: 1.5;
    font-size: 0.36rem;
    top: 3.84rem;
    left: 1.2rem;
}
.errorTel {
    position: absolute;
    left: 0;
    bottom: 1.26rem;
    text-align: center;
    width: 100%;
    font-size: 0.3rem;
    line-height: 1.5;
}
.errorTel a {
    color: #666;
}
.errorTel .tohome {
    color:#e3017f;
    text-decoration:underline;
}
</style>
<template>
<div class="scanError">
    <div class="errorMsg">{{errMsg}}</div>
    <div class="errorTel">
        <a class="tohome" to="/index">逛逛优兑商城</a><br/>
        <a href="tel:4000801111">如有疑问，可致电：400-080-1111</a>
    </div>
</div>
</template>

<script>
import common   from   '../../../static/common.js'

export default {
    data() {
        return {
            errMsg:''
        }
    },
    created() {
        this.errMsg = this.$route.params.errMsg;
    }
}
</script>
