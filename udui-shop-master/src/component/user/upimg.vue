<style>
  .upimg {
  }
  .uploadtip {
    padding-top: 1rem;
    text-align: center;
    color: black;
    font-size: 0.26rem;
  }

  .uploadtip i {
    margin-left: 0.7rem;
    padding: 0.03rem 0.2rem;
    font-size: 0.24rem;
    background-color: #999999;
    border-radius: 0.05rem;
    color: white;
  }

  .uploadtip i em {
    margin-right: 0.1rem;
    vertical-align: 0.02rem;
  }

  .uploader {
    width: 4.84rem;
    height: 4.84rem;
    margin: 0.5rem auto 0;
    position: relative;
  }

  .uploader .upimage {
    width: 100%;
    height: 100%;
    background: url('../../../src/assets/images/upBtn.png') no-repeat;
    background-size: 100% 100%;
    position: absolute;
    z-index: 10;
  }

  .uploadPreview {
    width: 100%;
    height: 100%;
    border: 0.1rem solid #fff;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, .3);
    position: absolute;
    left: 0;
    top: 0;
  }

  .uploadsub {
    height: 0.9rem;
    line-height: 0.9rem;
    background-color: #ff2772;
    color: white;
    text-align: center;
    position: fixed;
    width: 100%;
    font-size: 0.32rem;
    bottom: 0;
  }
</style>
<template>
  <div class="upimg">
    <headnav v-bind:title="pagetitle"></headnav>
    <div class="uploadtip">
      请选择图片文件：JPG/PNG
      <i @click="deleteItem(file)"><em class="close">x</em>删除</i>
    </div>
    <div class="uploader">
      <div class="upimage" v-show="!userInfo.headPic">
        <vue-file-upload style="width:100%; height:100%; opacity: 0"
                         url="http://api.youdui.org/api/v1/user/avatar"
                         ref="vueFileUploader"
                         v-bind:events='cbEvents'
                         v-bind:filters="filters"
                         v-bind:request-options="reqopts"
                         v-on:onAdd="onAddItem">
        </vue-file-upload>
      </div>
      <div class="uploadPreview" v-show="userInfo.headPic">
        <img :src='userInfo.headPic'>
      </div>
    </div>
    <div class="uploadsub" @click="uploadItem(file)">
      确定
    </div>
    <dialog-pop v-if="dialogConfig.txt"  v-bind:dialog="dialogConfig" v-on:off="offDialog"></dialog-pop>
  </div>
</template>
<script type="text/ecmascript-6">
  import headnav      from './../common/header.vue'
  import dialogPop    from './../common/dialog-pop.vue'
  import VueFileUpload from 'vue-file-upload';
  import {
    mapGetters
  }
    from 'vuex'
  export default{
    data(){
      return {
        pagetitle: "上传头像",
        dialogConfig: {
          autoOff: true,
          txt: ''
        },
        file: null,
        //文件过滤器，只能上传图片
        filters: [
          {
            name: "imageFilter",
            fn(file){
              var type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
              return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
          }
        ],
        //事件回调
        cbEvents: {
          onCompleteUpload: (file, response, status, header) => {
            //成功之后跳转
             this.$router.push('/userInfo')
          }
        },
        reqopts: {
          responseType: 'json',
          withCredentials: true
        }
      }
    },
    computed: mapGetters({
      userInfo: 'userInfo',
    }),
    methods: {
      offDialog : function(){
        this.dialogConfig.txt="";
      },
      onAddItem(files){
        this.file = files[0];
        if(files[0] && files[0].type.indexOf("image") == 0){
          if(files[0].size >= 3145728){
            this.dialogConfig.txt="图片大小不可超过3M";
            return false;
          }
        }else{
          this.dialogConfig.txt="只可上传图片文件";
          return false;
        }
        var src = window.URL.createObjectURL(files[0].file);
        this.userInfo.headPic = src;
      },
      uploadItem(file){
        if (file) {
          file.upload();
        }
      },
      deleteItem(file){
        if (file) {
          file.remove();
        }
        this.userInfo.headPic = '';
      },
    },
    created() {
    },
    components: {
      headnav, dialogPop, VueFileUpload
    }
  }
</script>
