<template>
    <div class="countdown" :endTime="endTime" :callback="callback" :endText="endText">
        <slot></slot>
        <span v-html="content"></span>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                content: '',
            }
        },
        props:{
            endTime:{
//                type: String,
                default :''
            },
            endText:{
                type : String,
                default:'已结束'
            },
            cdType:0,
            callback : {
                type : Function,
                default :''
            }
        },
        mounted () {
            this.countdowm(this.endTime,this.cdType)
        },
        methods: {
            countdowm(timestamp,type){
                let self = this;
                let timer = setInterval(function(){
                    let nowTime = new Date();
                    let endTime = new Date(timestamp);
                    let t = endTime.getTime() - nowTime.getTime();
                    if(t>0){
                        let day = Math.floor(t/86400000);
                        let hour=Math.floor((t/3600000)%24);
                        let min=Math.floor((t/60000)%60);
                        let sec=Math.floor((t/1000)%60);
                        let mSec=Math.floor((t/10)%60);
                        hour = hour < 10 ? "0" + hour : hour;
                        min = min < 10 ? "0" + min : min;
                        sec = sec < 10 ? "0" + sec : sec;
                        mSec = mSec < 10 ? "0" + mSec : mSec;
                        let format = '';
                        switch(type){
                            case 'txt':
                                if(day > 0){
                                    format =  `<em>${hour}</em>小时<em>${min}</em>分<em>${sec}</em>秒<em>${mSec}</em>`;
                                }
                                if(day <= 0 && hour > 0 ){
                                    format = `<em>${hour}</em>小时<em>${min}</em>分<em>${sec}</em>秒<em>${mSec}</em>`;
                                }
                                if(day <= 0 && hour <= 0){
                                    format =`<em>${min}</em>分<em>${sec}</em>秒`;
                                }
                                break;
                            case 'colon':
                                if(day > 0){
                                    format =  `<em>${hour}</em>:<em>${min}</em>:<em>${sec}</em>:<em>${mSec}</em>`;
                                }
                                if(day <= 0 && hour > 0 ){
                                    format = `<em>${hour}</em>:<em>${min}</em>:<em>${sec}</em>:<em>${mSec}</em>`;
                                }
                                if(day <= 0 && hour <= 0){
                                    format =`<em>${min}</em>:<em>${sec}</em>`;
                                }
                                break;
                        }
                        // console.log(format);
                        self.content = format;
                    }else{
                        clearInterval(timer);
                        self.content = self.endText;
                        self._callback();
                    }
                },10);
            },
            _callback(){
                if(this.callback && this.callback instanceof Function){
                    this.callback(...this);
                }
            }
        }
    }
</script>
