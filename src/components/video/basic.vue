<template>
    <div class="video-card-common">
    <a :href="'#/details?id='+videoItem.id" target="_blank">
    <div class="card-pic"  @mousemove="movePreview($event)" @mouseout="clearPreview($event)">
        <img :src="videoItem.cover"/> 
        <div class="count" v-show="flag">
            <div class="left">
                <span style="margin-right:16px">
                    <svg style="width:16px;height:16px;vertical-align: middle;" aria-hidden="true">
                            <use xlink:href="#icon-bofangshu"></use>
                    </svg>
                    {{videoItem.playNum}}
                </span>
                <span>
                    <svg style="width:14px;height:14px;vertical-align: middle;" aria-hidden="true">
                        <use xlink:href="#icon-zan"></use>
                    </svg>  
                    {{videoItem.praiseNum}}
                </span>
            </div>
            <div class="right">
                <span>{{videoLength(videoItem.length)}}</span>
            </div>
        </div>
        <div id="preview-container" class="preview-container" :style="{backgroundImage: 'url(' + videoItem.previewUrl + ')'}">
            <div class="van-framepreview">
            <div class="van-fpbar-box">
                <span  class="progress-bar"></span>
            </div>
        </div>    
        </div>
        <p class="ex-title" v-show="flag">
            <a href="#">
                {{videoItem.title}}
            </a>
        </p>    
    </div>
    </a>
    <a href="#" class="ex-up" v-show="flag">
    <svg class="small-icon" aria-hidden="true">
            <use xlink:href="#icon-UPzhu"></use>
    </svg>
    <a href="#" class="upName">
        {{videoItem.upName}}
    </a>
    </a>
    </div>
</template>
<script>
export default {
    props:{
        videoItem:Object,
        flag:{
            default:true,
            type:Boolean
        }
    },
    data(){
        return {
            
        }
    },
    methods:{
        movePreview:function(event){
            let target = event.currentTarget.getElementsByClassName("preview-container")[0];;
            let x = event.offsetX;
            let width = target.offsetWidth
            let i = Math.ceil(x/(width/10));
            target.style.backgroundPosition=""+(-i*width)+"px 0px";
            target.style.zIndex=999;
            let progressBar = target.getElementsByClassName("progress-bar")[0];
            console.log(target);
            progressBar.style.width=i*10+"%"

        },
        clearPreview:function(){
            let target = event.currentTarget.getElementsByClassName("preview-container")[0];
            target.style.zIndex=-1;
            console.log("移除~")
        },
        videoLength:function(length){
                        console.log(length);
            let minutes = parseInt(length/60);
            let second = (length%60);
            minutes = minutes<10?'0'+minutes:minutes;
            second = second<10?'0'+second:second;
            console.log(minutes);
            return minutes+":"+second
        }
    }
}
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
      a {text-decoration:none;color:#000} 
     /*
        视频
      */
     .video-card-common{
        position: relative;
        width: 206px;
        cursor: pointer;
        height: 116px;
        margin-right: 10px;
        display: inline-block;
     }
    .card-pic{
        width: 100%;
        width: 206px;
    }
    .card-pic img{
        max-height: 116px;
        height: 100%;
        width: 100%;
    }
    .video-card-common:last-child{
        margin-right: 0px;
    }

    .count{
        line-height: 10px;
        font-size: 12px;
        z-index: 999;
        position: absolute;
        bottom: 0px;
        width: 100%;
        padding: 6px 8px;
        color: #fff;
    }
    .ex-title{
        font-size: 14px;
        line-height: 20px;
        margin: 10px 0 8px;
        height: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-weight: 500;
        padding-right: 12px;
    }

    .left{
        float: left;
    }

    .right{
        position: relative;
        right: 20px;
        float: right;
        
    }

    /**
        预览图样式
    */

    .preview-container{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        max-height: 116px;
        z-index: -1;
    }

    .van-framepreview{
         max-height: 116px;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;
        transition: opacity .3s;
        z-index: 1;
    }

    .van-fpbar-box{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 10px;
        border-color: #000;
        border-style: solid;
        border-width: 4px 8px;
        background: #444;
        box-sizing: border-box;
    }

    .van-fpbar-box span {
        display: block;
        background: #fff;
        height: 2px;
        transition: width .12s;
    }

    .small-icon {
       width: 22px; height: 24px;
       vertical-align: -0.30em;
       fill: currentColor;
       overflow: hidden;
    }

    .ex-up{
        position: relative;
        bottom: 0;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        font-size: 12px;
        color: #999;
        line-height: 16px;
        
    }

    .ex-title a:hover,.upName:hover{
        color: #00a1d6;
    }
</style>