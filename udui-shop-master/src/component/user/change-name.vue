<style>
.userBox {
    background: #fff;
    padding: 0 .18rem;
}
/*.form-input input, .form-label {

}*/
.form-input, .subBtn {
    width: 100%;
    overflow: hidden;
}
.form-input input {
    display: block;
    width: 90%;
    background: #fff;
    float: left;
    height: .9rem;
    line-height: .9rem;
    font-size: 0.3rem;
}
.form-input .icon-roundclosefill{
    float: right;
    line-height: .9rem;
    font-size: 0.4rem;
    color: #999;
}
.tip {
    color: #999;
    margin-top: .18rem;
}
.sub, .tip {
    padding: 0 .18rem;
}
.sub {
    margin-top: .18rem;
}
.subBtn {
    display: block;
    height: 0.9rem;
    line-height: 0.9rem;
    color: #fff;
    background: #ff2772;
    border-radius: .06rem;
    text-align: center;
    font-size: 0.4rem;
}
</style>

<template>

<div class="change-name-box">
    <headnav v-bind:title="pagetitle"></headnav>
    <div class="userBox">
        <div class="form-row changeNick">
            <!-- <div class="form-label"></div> -->
            <div class="form-input">
                <input id="changeNick" type="text" v-model="nickName" maxlength="12">
                <i class="iconfont icon-roundclosefill" @click="nickName=''"></i>
            </div>
        </div>
    </div>
    <div class="tip">昵称由3~12个字符组成(禁止输入特殊字符)</div>
    <div class="sub">
        <a class="subBtn" @click="changeName">确定</a>
    </div>
    <dialog-pop v-if="dialogOnOff" v-bind:dialog="dialogConfig" v-on:off="offDialog"></dialog-pop>
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
import headnav      from './../common/header.vue'
import dialogPop    from './../common/dialog-pop.vue'

const components = {
    headnav, dialogPop
}
export default {
    data() {
        return {
            pagetitle: "修改昵称",
            nickName : "",
            dialogOnOff : false,
            dialogConfig : {
                autoOff:true,
                txt:'请不要输入特殊字符'
            }
        }
    },
    computed: mapGetters({
        userInfo: 'userInfo'
    }),
    components: components,
    methods: {
        changeName : function(){
            let pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
            let This = this;
            if (!pattern.test(this.nickName)){
                if(this.nickName.length<3||this.nickName.length>12){
                    this.dialogConfig.txt = '请输入3~12个字符组成的昵称';
                    this.dialogOnOff = true;
                }else{
                    this.$store.dispatch('changeName', {nickName: this.nickName}).then(
                        function(){
                            This.dialogConfig.txt = '修改成功';
                            This.dialogOnOff = true;

                            setTimeout(function(){
                                This.$router.push("/userInfo");
                            },1500)
                        },
                        function(res){
                            This.dialogConfig.txt = res;
                            This.dialogOnOff = true;
                        }
                    );
                }
            }else{
                this.dialogOnOff = true;
            }

        },
        offDialog : function(){
            this.dialogOnOff = false;
        }
    },
    created() {
        this.nickName=this.userInfo.nickName
    }
}

</script>
