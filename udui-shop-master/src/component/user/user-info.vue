<style>

/* line 2, ../sass/ie.scss */

.user-info-box .user-mas {
    padding: 0 0.18rem;
    background: #fff;
}


/* line 4, ../sass/ie.scss */

.user-info-box .user-mas li {
    border-bottom: 0.01rem solid #e0e0e0;
    line-height: 0.9rem;
    font-size: 0.32rem;
    padding-right: 0.34rem;
    position: relative;
}


/* line 6, ../sass/ie.scss */

.user-info-box .user-mas li a {
    display: block;
    overflow: hidden;
}


/* line 7, ../sass/ie.scss */

.user-info-box .user-mas li p {
    float: left;
    color: #333333;
    font-size: 0.32rem;
}


/* line 8, ../sass/ie.scss */

.user-info-box .user-mas li div {
    float: right;
    color: #999999;
    font-size: 0.32rem;
}


/* line 11, ../sass/ie.scss */

.user-info-box .user-mas .headImg p {
    line-height: 1.54rem;
}


/* line 12, ../sass/ie.scss */

.user-info-box .user-mas .headImg div {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    margin-top: 0.18rem;
    border-radius: 50%;
    overflow: hidden;
}


/* line 13, ../sass/ie.scss */

.user-info-box .user-mas .headImg img {
    width: 100%;
    height: 100%;
}


/* line 15, ../sass/ie.scss */

.user-info-box .user-mas i {
    display: block;
    width: 0.13rem;
    height: 0.24rem;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -0.12rem;
    background: url("../../../src/assets/images/ico.png") no-repeat;
    background-position: 0 -6.98rem;
}

.user-info-box .logout {
    position: fixed;
    display: block;
    width: 100%;
    height: 0.72rem;
    background-color: #ff2772;
    text-align: center;
    line-height: 0.72rem;
    color: #fff;
    font-size: 0.32rem;
    left: 0;
    bottom: 0;
}

</style>

<template>

<div class="user-info-box">
    <headnav v-bind:title="pagetitle"></headnav>
    <ul class="user-mas">
        <li class="headImg">
            <router-link to="/upimg">
                <p>会员头像</p>
                <div>
                    <img :src="userInfo.headPic?userInfo.headPic:'../../../src/assets/images/user/touxiang.png'">
                </div>
                <i></i>
            </router-link>
        </li>
        <li>
            <router-link to="/changeName">
                <p>会员昵称</p>
                <div>{{userInfo.nickName}}</div>
                <i></i>
            </router-link>
        </li>
        <li>
            <a @click="tips('添加真实姓名请联系客服')">
                <p>真实姓名</p>
                <div>{{userInfo.realName}}</div>
                <i></i>
            </a>
        </li>
        <li>
            <router-link to="">
                <p>登录手机号</p>
                <div>{{userInfo.userName}}</div>
                <i></i>
            </router-link>
        </li>
        <li>
            <router-link to="/changePass">
                <p>修改登录密码</p>
                <div></div>
                <i></i>
            </router-link>
        </li>
        <li>
            <router-link to="/user/userAddress">
                <p>收货地址</p>
                <div></div>
                <i></i>
            </router-link>
        </li>
    </ul>
    <div class="logout" @click="logOut()">退出登录</div>
    <dialog-pop v-if="dialogOnOff" v-bind:dialog="dialogConfig" v-on:off="offDialog"></dialog-pop>
</div>

</template>

<script type="text/javascript">

import headnav      from './../common/header.vue'
import dialogPop    from './../common/dialog-pop.vue'
import {
    mapGetters
}
from 'vuex'

const components = {
    headnav, dialogPop
}

export default {
    data() {
        return {
            pagetitle   : "个人资料",
            dialogOnOff : false,
            dialogConfig: {
                autoOff:true,
                txt : ''
            },
            eventCode : 'R010',
            clearEventCode : false,
            linkId : null
        }
    },
    computed: mapGetters({
        userInfo: 'userInfo'
    }),
    components: components,
    methods: {
        logOut:function(){
            this.$store.dispatch('logoutfn').then(()=>{
                this.$router.push('/user');
            },(msg)=>{
                alert(msg);
            })
        },
        tips: function(str){
            this.dialogConfig.txt = str;
            this.dialogOnOff = true;
        },
        offDialog : function(){
            this.dialogOnOff = false;
        }
    },
    created() {
        this.$store.dispatch('tjTrack',{eventCode:this.eventCode,clearEventCode:this.clearEventCode,linkId : this.linkId}).then(function(){

        },function(){

        })
        this.$store.dispatch('getUserInfo');
    }
}

</script>
