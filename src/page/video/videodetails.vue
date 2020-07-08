<template>
        <div class="v-wrap">
            <div class="l-con">
                <div class="video-header-info">
                    <h1 title="巴西总统宣布确诊&nbsp;转头就为特朗普推荐的“神药”代言" class="video-title">
                        <!---->
                        <span class="tit">巴西总统宣布确诊&nbsp;转头就为特朗普推荐的“神药”代言</span>
                        </h1>
                    <div class="video-data">
                        <span class="a-crumbs">
                            <a target="_blank" href="//www.bilibili.com/v/information/"
                            >资讯</a><i class="van-icon-general_enter_s"></i>
                            <a target="_blank" href="//www.bilibili.com/v/information/global/">环球</a>
                            </span><span>2020-07-08 14:13:48</span>
                            <!---->
                            </div>
                            <div class="video-data">
                                <span title="总播放数128539" class="view">
                                    12.9万播放&nbsp;·&nbsp;
                                </span><span title="历史累计弹幕数503" class="dm">503弹幕</span><span class="copyright"><i class="van-icon-info_prohibit"></i>未经作者授权，禁止转载</span><!----></div>
                </div>
            </div>
            <div class="player-wrap">
                <video-player  class="video-player vjs-custom-skin"
                    ref="videoPlayer" 
                    :playsinline="true" 
                    :options="playerOptions"
                ></video-player>
                </div>
                <div class="player-bottom">
                    <div class="player-video-sendbar">
                        <!--多少人在看-->
                        <div class="player-video-info">
                            <div class="player-video-info-people">
                                <span class="player-video-info-people-number">9999</span>
                                <span class="player-video-info-people-text">人正在看</span>
                            </div>
                            <!--多少弹幕量-->
                            <div class="player-video-info-danmu">
                                <span>，</span>
                                <span class="player-video-info-danmu-number">1246</span>
                                <span class="player-video-info-danmu-text">条弹幕</span>
                            </div>
                        </div>
                        <div class="player-video-danmaku-root">
                            <!--开关按钮-->
                            <el-switch
                            v-model="value"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                            </el-switch>
                            <!--弹幕控制框-->
                            <svg class="gg-icon" aria-hidden="true" style="margin-left:10px">
                                <use xlink:href="#icon-shiliangzhinengduixiang"></use>
                            </svg>
                    
                        </div>
                        <div class="player-video-inputbar-wrap">
                                <svg class="gg-icon" aria-hidden="true" style="margin-left:10px">
                                    <use xlink:href="#icon-yansexuanzeqi"></use>
                                </svg> 
                                <input class="player-video-danmaku-input" placeholder="发个友善的弹幕见证当下" style="">
                            </div>
                    </div>
                </div>
                    <div class="ops">
                        <span title="点赞数4098" class="like"><!----><!----><!----><!----><!---->
                            <svg class="gg-icon" aria-hidden="true">
                                <use xlink:href="#icon-dianzan"></use>
                            </svg>
                            4098</span>
                        <span title="投硬币枚数1446" class="coin">
                            <svg class="gg-icon" aria-hidden="true">
                                <use xlink:href="#icon-icon_shipin_yingbishu"></use>
                            </svg>
                            1446</span>
                        <span title="收藏人数894" class="collect">
                    
                            <svg class="gg-icon" aria-hidden="true">
                                <use xlink:href="#icon-xingxing"></use>
                            </svg>
                            894</span>
                        <span title="分享" class="share">
                            <svg class="gg-icon" aria-hidden="true">
                                <use xlink:href="#icon-forward"></use>
                            </svg>
                        102</span>
                    </div>
            </div>

</template>

<style scoped>
    /*
        详细页的开始
     */
     #app{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
     }

    /* 最外层布局  */
     .v-wrap{
        
        width:1152px;
        max-width: 1660px;
        min-width: 988px;
        margin: 20px auto;
     }
     
    /**
        左边内容
      */
      .l-con{
        width: 802px; 
      }

    /**
        视频头部内容
    */
    .video-header-info{
        margin-bottom: 16px;
        width:802px;
        height: 81px;
    }

    /**
        视频标题
     */
    .video-title{
        font-size: 18px;
        font-weight: 500;
        color: #212121;
        line-height: 26px;
        height: 26px;
        margin-bottom: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .tit{   
        vertical-align: middle;
    }
    .video-data{
        margin-top: 11px;
        font-size: 12px;
        height: 16px;
        color: #999;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .a-crumbs {
        margin-right: 16px;
    }

    .video-data span {
        display: inline-block;
        height: 16px;
    }
    .copyright {
        margin-left: 16px;
        display: inline-block;
        font-size: 12px;
        line-height: 18px;
    }

    .player-wrap{
        width:802px;
        height: 585px;
        border: 1px solid;
    }

    .player-bottom{
        
        width: 802px;
        height: 46px;
        line-height: 30px;
        height: 28px;
        font-size: 14px;
        color: #505050;
        border-bottom: 1px solid #e5e9f0;
        padding-bottom: 12px;
    }

    .ops{
        position: relative;
        float: left;
        height: 24px;
        margin: 20px 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
    }

    .ops span{
        width: 92px;
        margin-right: 8px;
        cursor: pointer;
        transition: all .3s;
        display: inline-block;
        white-space: nowrap;
        color: #505050;
        position: relative;

    }

    .video-toolbar .ops .share {
        position: relative;
        height: 35px;
        width: 62px;
    }



    /**
        视频下框的信息
     */
    .player-video-sendbar{
        box-shadow:0px 2px 3px  rgba(0,0,0,.5);
        -ms-flex-negative: 0;
        flex-shrink: 0;
        position: relative;
        height: 46px;
        display: flex;
        align-items: center;
        padding: 0 12px 0 20px;
        background: #fff;
        zoom: 1;
    }

    .player-video-info{
        flex-shrink: 1;
        font-size: 12px;
        height: 16px;
        line-height: 12px;
        color: #505050;
        align-items: center;
        margin-right: 12px;
        width: 208px;
        white-space: nowrap;
        align-items: flex-end;
        overflow: hidden;
    }

    .player-video-info-people{
        float: left;
    }

    .player-video-info-people-number{
        height: 14px;
        line-height: 14px;
        font-size: 14px;
        font-weight: 600;
    }


    /**
        弹幕提交框
     */

    .player-video-inputbar-wrap {
        width: 200px;
        border-radius: 2px 0 0 2px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        border: 1px solid #e7e7e7;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

     .player-video-danmaku-input{
        color: #212121;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        border: 0;
        height: 30px;
        line-height: 30px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        z-index: 12;
        padding: 0 5px;
        background: none;
        font-size: 12px;
        min-width: 115px;
        width: 100%;
        outline: none;
     }

    input:focus{
        color:none;
        border:none;
    }




    /**
        小图标
     */

     .gg-icon{
        font-size: 28px;
        vertical-align: middle;
        margin-right: 6px;
        width: 28px;
        height: 28px;
        color: #757575;
     }

    
</style>
<script>

export default {
    data(){
        return{
            playerOptions:{
                height:585,
                 sources: [{
                    type: "video/mp4",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
                    src: require("@/assets/video.mp4") //url地址
                }]
            }
        }
    }
    }
</script>