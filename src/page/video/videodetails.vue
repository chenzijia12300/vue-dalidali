<template>
        <div class="v-wrap">
            <div class="header-box">

            </div>
            <div class="l-con">
                <div class="video-header-info">
                    <h1 :title="details.title" class="video-title">
                        <!---->
                        <span class="tit">{{details.title}}</span>
                        </h1>
                    <div class="video-data">
                        <span class="a-crumbs">
                            <a target="_blank" href="//www.bilibili.com/v/information/"
                            >{{details.categoryPName}}</a>
                            >
                            <a target="_blank" href="//www.bilibili.com/v/information/global/">{{details.categoryName}}</a>
                            </span><span>2020-07-08 14:13:48</span>
                            <!---->
                            </div>
                            <div class="video-data">
                                <span :title="details.playNum+'总播放数'" class="view">
                                    {{details.playNum}}播放量&nbsp;·&nbsp;
                                </span><span title="历史累计弹幕数503" class="dm">{{details.danmuNum}}弹幕</span><span class="copyright"><i class="van-icon-info_prohibit"></i>未经作者授权，禁止转载</span><!----></div>
                </div>
                 <div class="player-wrap">
                    <v-barrage :arr="arr"
                        :isPause="isPause"
                        :percent="100"
                        :videoUrl="details.urls"
                        >
                    </v-barrage>
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
            <div class="r-con">
                <div class="up-info">
                    <!--头像-->
                    <div class="up-info-face">
                        <a href="#" class="fa">
                            <img src="//i1.hdslb.com/bfs/face/1d6f100b921c9b48914eda8f3b37e76ba9ef4ca5.jpg@68w_68h.webp" class="up-info-face">
                        </a>
                    </div>
                    <!--基本信息-->
                    <div class="up-info-text">
                        <div class="name">
                            <a href="#" class="username">
                                观察者网    
                            </a>
                            <a href="#" class="message">
                                发消息
                            </a>
                        </div>
                        <!--描述-->
                        <div class="desc">
                            我是描述~~~~
                        </div>
                    </div>
                </div>
                <!--按钮-->
                <div class="btn-panel">
                    <div class="btn-charge">
                        <span>为TA充电</span>
                    </div>
                    <div class="btn-follow">
                        <span>关注</span>
                    </div>
                </div>
                <!--弹幕列表框-->
                <div class="collapse-header">
                    <div class="collapse-header-left">
                        <span class="collapse-header-left-title">弹幕列表</span>
                        <svg class="gg-icon" aria-hidden="true" style="margin-left:10px;width:16px;height:16px;">
                                <use xlink:href="#icon-gengduo"></use>
                        </svg>
                    </div>
                    <div class="collapse-header-right">
                        <span class="collapse-header-left-text">展开</span>
                    </div>
                </div>
            </div>

            </div>

</template>

<style scoped>


    a{
        color: #999;
        text-decoration: none;
    }
    a:link:hover, a:visited {
        text-decoration: none;
    }

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
    
    /*
        右边布局
     */

     .r-con{
        position: relative;
        float:right;
        width: 320px;
        margin-left: 30px;
     }

     .up-info{
         
        margin-bottom: 16px;
     }

     .up-info-face{
        float: left;
        width: 48px;
        height: 48px;
        position: relative;    
     }

    .up-info .up-info-face .fa {
        display: block;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        overflow: hidden;
        background-color: #f4f5f7;
    }

    .up-info-text{
        
        margin-bottom: 5px;
        text-align: left;
        margin-left: 16px;
        float: left;
    }

    .name {
        font-size: 14px;
        color: #00a1d6;
    }

    .username {
        font-size: 14px;
        color: #212121;
        font-weight: 500;
        display: inline-block;
        max-width: 180px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: top;
    }  
    .message {
        margin-left: 12px;
        font-size: 12px;
        color: #505050;
        display: inline-block;
        vertical-align: middle;
    }

    .desc {
        margin-top: 4px;
        width: 256px;
        font-size: 12px;
        line-height: 16px;
        height: 16px;
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    } 

    .up-info .btn-panel {
        display: flex;
        margin-left: 63px;
    }

    .btn-charge {
        text-align: center;
        cursor: pointer;
        border-radius: 2px;
        line-height: 30px;
        font-size: 14px;
        height: 30px;
        display: inline-block;
        background: #fb7299;
        color: #fff;
        width: 123px;
    }

    .btn-follow {
        text-align: center;
        cursor: pointer;
        border-radius: 2px;
        line-height: 30px;
        font-size: 14px;
        height: 30px;
        display: inline-block;
        color: #999;
        border: 1px solid #e7e7e7;
        background: #e7e7e7;
        width: 123px;
    }

    /**
        弹幕列表框
     */
    .collapse-header {
        top: 32px;
        position: relative;
        height: 46px;
        width: 100%;
        background: #f4f4f4;
        color: #222;
        border-radius: 2px;
        cursor: pointer;
    }
    .collapse-header-left{
        float: left;
        z-index: 2;
        background: #f4f5f7;
        height: 46px;
        line-height: 46px;
        border: none;
        border-radius: 2px;
        padding: 0 10px 0 16px;
        zoom: 1;
    }

    .collapse-header-left-title{
        font-size: 16px;
        color: #222;
    }

    .collapse-header-right{
        margin-right: 20px;
        line-height: 46px;
        float: right;
        font-size: 12px;
        height: 14px;
        bottom: 0;
        color: #505050;
    }

    .header-box{
        position: absolute;
        background: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    }


    .barrage{
        width:400px;
        height: 400px;
        border: 1px solid;
    }

    /**
        左边内容
      */
      .l-con{
        float: left;
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
            position: relative;
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

        /**
            视频播放器样式
         */
        .video-js{
            position: relative;
            border: 1px solid;
            width: 100%;
            height: 100%;
            display: block;
            z-index: 99999;
        }



</style>
<script>
import '@/https.js'
import vBarrage from '@/components/VBarrage/index.vue'
export default {
    components:{
        vBarrage
    },
    data(){
        return{
            isheader:true,
        
            value:null,
            details:null,
            arr:[],
            isPause: false
        }
    },
    created(){
        const videoId = this.$route.query.id
        this.$axios.get("http://localhost:8081/video/"+videoId+"?userId=1")
        .then(res => {
            res = res.data
            console.log(res)
            this.details=res.data
        })
        .catch(err => {
            console.error(err); 
        })
    },
    mounted(){
        this.initTestData();
    },
    methods:{
            // 初始化模拟弹幕数据
        initTestData () {
        let arr = [
            '这是一条有弹幕',
            '今天去打LOL',
            '可以吗？',
            '一起嗨！！！'
        ]
        for (let i = 0; i < 6; i++) {
            for (let index = 0; index < 1000; index++) {
            if (index % 2 == 0) {
                this.arr.push({
                direction: 'top',
                content: arr[parseInt(Math.random() * arr.length)]
                })
            } else {
                this.arr.push({
                direction: 'default',
                content: arr[parseInt(Math.random() * arr.length)]
                })
            }
            }
        }
        }
    }
}
</script>