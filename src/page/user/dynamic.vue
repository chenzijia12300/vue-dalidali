<template>
<body>
    <div class="container">
        <!-- 左布局 -->
        <div class="left-container">
            <!-- 用户布局 -->
            <div class="user-wrapper">
                <!-- 用户信息 -->
                <div class="user-info">
                    <!-- 背景图 -->
                    <div class="user-background"></div>
                    <!-- 用户头部 -->
                    <div class="user-info-top">
                        <avatar :avatar="avatar" class="avatar"></avatar>
                        <span class="username">汤姆猫</span>
                    </div>
                    <!-- 用户底部 -->
                    <div class="user-info-bottom">
                      <a href="">
                      <div class="item-value">
                        <span class="item-num">43</span>
                        <span class="item-unit"></span>
                      </div>
                      <div class="item-key">关注</div>
                    
                    </a>
                    <a href="">
                      <div class="item-value">
                        <span class="item-num">43</span>
                        <span class="item-unit"></span>
                      </div>
                      <div class="item-key">粉丝</div>
                    
                    </a>
                    <a href="">
                      <div class="item-value">
                        <span class="item-num">43</span>
                        <span class="item-unit"></span>
                      </div>
                      <div class="item-key">动态</div>
                      
                    </a>  
                              
                    </div>
                </div>





            </div>
        </div>











        <!-- 中间布局 -->
        <div class="mid-container">

            <!-- 用户容器 -->
            <div class="user-dynamic-container">
                <div class="user-dynamic">
                    <div class="editor">
                        123456
                    </div>
                    <div class="toolbar">
                        <a href="#">
                            <svg class="tool-icon" aria-hidden="true">
                                <use xlink:href="#icon-biaoqing"></use>
                            </svg>
                        </a>
                        <a href="#">
                            <svg class="tool-icon" aria-hidden="true">
                                <use xlink:href="#icon-tupian"></use>
                            </svg>
                        </a>
                        <a href="#">
                            <svg class="tool-icon" aria-hidden="true">
                                <use xlink:href="#icon-huati"></use>
                            </svg>
                        </a>
                        <a href="#">
                            <svg class="tool-icon" aria-hidden="true">
                                <use xlink:href="#icon-toupiao"></use>
                            </svg>
                        </a>
                        <a href="#">
                            <svg class="tool-icon" aria-hidden="true">
                                <use xlink:href="#icon-dingshi"></use>
                            </svg>
                        </a>
                        <el-button type="primary" style="width:70px;height:32px;position:absolute;right:20px">发布</el-button>   
                    </div>
                </div>
            </div>

            <!-- up主容器 -->
            <div class="up-container">
                <!-- 左 -->
                <svg class="tool-icon left" aria-hidden="true">
                    <use xlink:href="#icon-zuo"></use>
                </svg>
                <!-- 内容 -->
                <div class="up-list-container">
                    <div class="up-list-content">
                        <a href="#">
                            <div class="up-item">
                                <avatar :avatar="avatar" style="width:40px;height:40px;margin: 0 auto;">
                                    
                                </avatar>
                                
                                    <span class="total-dynamic">全部动态</span>
                                
                            </div>
                        </a>
                        <a href="#">
                            <div class="up-item">
                                <avatar :avatar="avatar" style="width:40px;height:40px;margin: 0 auto;">
                                    
                                </avatar>
                                
                                    <span class="total-dynamic">全部动态</span>
                                
                            </div>
                        </a>
                        <a href="#">
                            <div class="up-item">
                                <avatar :avatar="avatar" style="width:40px;height:40px;margin: 0 auto;">
                                    
                                </avatar>
                                
                                    <span class="total-dynamic">全部动态</span>
                                
                            </div>
                        </a>
                        <a href="#">
                            <div class="up-item">
                                <avatar :avatar="avatar" style="width:40px;height:40px;margin: 0 auto;">
                                    
                                </avatar>
                                
                                    <span class="total-dynamic">全部动态</span>
                                
                            </div>
                        </a>
                        <a href="#">
                            <div class="up-item">
                                <avatar :avatar="avatar" style="width:40px;height:40px;margin: 0 auto;">
                                    
                                </avatar>
                                
                                    <span class="total-dynamic">全部动态</span>
                                
                            </div>
                        </a>
                        <a href="#">
                            <div class="up-item">
                                <avatar :avatar="avatar" style="width:40px;height:40px;margin: 0 auto;">
                                    
                                </avatar>
                                
                                    <span class="total-dynamic">全部动态</span>
                                
                            </div>
                        </a>
                        <a href="#">
                            <div class="up-item">
                                <avatar :avatar="avatar" style="width:40px;height:40px;margin: 0 auto;">
                                    
                                </avatar>
                                
                                    <span class="total-dynamic">全部动态</span>
                                
                            </div>
                        </a>
                        <a href="#">
                            <div class="up-item">
                                <avatar :avatar="avatar" style="width:40px;height:40px;margin: 0 auto;">
                                    
                                </avatar>
                                
                                    <span class="total-dynamic">全部动态</span>
                                
                            </div>
                        </a>
                    </div>
                </div>
                <!-- 右 -->
                <svg class="tool-icon right" aria-hidden="true">
                    <use xlink:href="#icon-you"></use>
                </svg>
            </div>


            <!-- 标签横条 -->
            <div class="tab-bar">
                <div class="tab">
                    <a href="#" class="tab-text">全部</a>
                </div>
                <div class="tab">
                    <a href="#" class="tab-text">投稿视频</a>
                </div>
                <div class="tab">
                    <a href="#" class="tab-text">追番追剧</a>
                </div>
                <div class="tab">
                    <a href="#" class="tab-text">专栏</a>
                </div>
                <div class="line">

                </div>
            </div>


            <!-- 正文内容 -->
            <div class="content">
                <div class="card">
                    <avatar :avatar="avatar" class="up-avatar"></avatar>

                    <div class="main-content">
                        <div class="up-name">
                            <a href="#">
                                观察者网
                            </a>
                        </div>
                        <div class="publish-time">
                            <a href="#">
                                22分钟前
                            </a>
                        </div>
                        <div class="card-content">
                                <div class="description">
                                    <div class="description-content">
                                        <a href="#">#特朗普</a>
                                    </div>
                                </div>
                                <a href="#">
                                <div class="video-container">
                                    <basic :videoItem="videoItem" :flag=false style="width:203px;height:127px;display: inline-block;border-radius: 0 4px 4px 0;">

                                    </basic>
                                    <div class="textarea">  
                                        <div class="title">
                                            <a href="#">阿联酋与以色列将建交，特朗普：太棒了！本来想叫特朗普协议的</a>
                                        </div>
                                        <div class="content">
                                            8月13日，特朗普在白宫召开新闻发布会，宣布阿联酋与以色列将建交并达成协议。对于这份协议，特朗普称：“本来想叫它特朗普协议的，但我认为媒体不会理解”。随后白宫各位同事纷纷对特朗普表达称赞，各种“彩虹屁”轮番上场。最后，特朗普在近半分钟的掌声中露出了满意的招牌特朗普微笑。
                                        </div>
                                        <div class="view-data">
                                            <div class="data-item">
                                                <svg class="video-icon" aria-hidden="true">
                                                    <use xlink:href="#icon-bofangshu"></use>
                                                </svg>
                                                <span class="playNum">
                                                    4.1万
                                                </span>

                                            </div>
                                            <div class="data-item">
                                                <svg class="video-icon" aria-hidden="true">
                                                    <use xlink:href="#icon-danmu"></use>
                                                </svg>
                                                <span class="danmuNum">
                                                    251
                                                </span>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                                <div class="video-bottom">
                                    <a href="#">
                                    <div class="video-bottom-item">
                                        <svg class="video-bottom-icon" aria-hidden="true">
                                            <use xlink:href="#icon-zhuanfa"></use>
                                        </svg>
                                        <span class="danmuNum">
                                            251
                                        </span>
                                    </div>
                                    </a>
                                    <a href="#">
                                    <div class="video-bottom-item">
                                        <svg class="video-bottom-icon" aria-hidden="true">
                                            <use xlink:href="#icon-pinglun"></use>
                                        </svg>
                                        <span class="danmuNum">
                                            251
                                        </span>
                                    </div>
                                    </a>
                                    <a href="#">
                                    <div class="video-bottom-item">
                                        <svg class="video-bottom-icon" aria-hidden="true">
                                            <use xlink:href="#icon-zan1"></use>
                                        </svg>
                                        <span class="danmuNum">
                                            251
                                        </span>
                                    </div>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 右布局 -->
        <div class="right-container">

        </div>
    </div>
</body>
</template>
<script>
import avatar from '@/components/Avatar.vue'
import basic from '@/components/video/basic.vue'
export default {
    name: 'dynamic',
    data(){
        return{
            videoItem:{
                cover:"http://192.168.99.103:9000/dalidali/e03036ca-0293-488e-87f2-0521a2593daa.jpg",
                playNum:"541",
                praiseNum:"987",
                length:68,
                previewUrl:"http://192.168.99.103:9000/dalidali/e03036ca-0293-488e-87f2-0521a2593daa_preview.png",
                title:"假装是标题"
            }
        }
    },
    components:{
        avatar,
        basic
    }
}
</script>
<style scoped>
    ul,li,a,div,body{
        margin: 0;
        padding: 0;
    
    }
    body{
        background-size: cover;
        background-position: center;
        width: 100vw;
        height: 100vh;;
        background-image: url(//s2.hdslb.com/bfs/static/blive/blfe-dynamic-web/static/img/background.bc725153.png);
    }
    .container{
        position: relative;
        padding-top: 10px;
        width: 1160px;
        margin:0 auto;
        border:1px solid;
    }


    a{
        text-decoration: none;
        text-align: center;
    }
    /* 左布局css */
    .left-container{
        display: inline-block;
        width: 244px;
    }

    .user-wrapper{
        background-color: white;
        border-radius: 4px;
    }

    .user-background{
        width: 244px;
        height: 64px;
        background: center/cover no-repeat;
        background-image: url("//i0.hdslb.com/bfs/space/768cc4fd97618cf589d23c2711a1d1a729f42235.png@.webp");
    }


    .user-info-top{
        position: relative;
    }

    .avatar{
        position: absolute;
        width: 56px;
        height: 56px;
        left: 16px;
        top:-20px;
        border-radius: 50%;
        overflow: hidden;
        
    }

    .username{
        display: inline-block;
        font-size: 13px;
        letter-spacing: 0;
        margin-left: 80px;
        padding-top: 10px;
    }

    .user-info-bottom{
        margin-left: 50px;
        
        padding:30px 0px;
    }

    .user-info-bottom a{
        display: inline-block;
        margin-right: 30px;
    }
    /* 通用 */

  .item-key{
    font-size: 12px;
    color: #999;
  }

  .item-value{
    padding-bottom:15px;
    font-size: 16px;
    color: #212121;
    align-items: center;
    font-weight: 600;
    height: 20px;
  }






  /* 中间布局 */
    .mid-container{
        display: inline-block;
        position:absolute;
        top: 10px;
        width: 632px;
        margin: 0 8px;
        border:1px solid;
    }

    .user-dynamic-container{
        width: 100%;
    }

    .editor{
        width: 632px;
    }

    .user-dynamic{
        height: 66px;
        padding: 16px;
        border-radius: 4px;
        background-color: #fff;
        position: relative;
        z-index: 11;
    }


    .toolbar{
        position: absolute;
        left: 10px;
        bottom:10px;
        width: 100%;
    }

    .toolbar a{
        margin-left: 15px;
    }

    .tool-icon{
        color: gray;
        width:24px;
        height: 24px;
    }

    /* up主容器css样式 */

    .up-container{
        display:flex;
        position: relative;
        min-height: 98px;
        width: calc(100% - 2px);
        background: #fff;
        border-radius: 4px;
        top: 6px;
        z-index: 10;
        margin-bottom: 8px;
        align-items: center;
        border:1px solid;
    }

    .up-container svg{
        display: inline-block;
    }


    .up-list-container{
        display: inline-block;
        min-height: 98px;
        overflow: hidden;
        position: relative;
    }

    .up-list-content{
        min-height: 98px;
        overflow: hidden;
        position: relative;
        transition: left 0.35s;
        top: 15px;
        padding: 16px 0;
    }

    .up-item{
        width: 62px;
        margin: 0px 3px 0px 3px;
        display: inline-block;
        text-align: center;
    }
    


    .up-item span{
        color: #6d757a;
        letter-spacing: 0;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 12px;
        line-height: 16px;
        max-height: 2.666666666666667em;
        
    }

    .total-dynamic{
        color: #00b5e5;
    }

    .up-list-content a:hover span{
        color: #00b5e5;
    }


    /* 标签 */
    .tab-bar{
        width: 100%;
        height: 48px;
        background: #fff;
        border-radius: 4px;
        position: relative;
        margin-bottom: 8px;
    }

    .tab{
        display: inline-block;
        min-width: 56px;
        height: 48px;
        text-align: center;
        padding-left: 20px;
        vertical-align: top;
    }

    .tab-text{
        display: inline-block;
        min-width: 56px;
        height: 48px;
        line-height: 48px;
        font-size: 14px;
        letter-spacing: 0;
        cursor: pointer;
        color: #99a2aa;
    }

    .tab-text:hover{
        color: #00b5e5;
    }
    
    .line{
        transform: translateX(20px);
        position: absolute;
        width: 56px;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #00a1d6;
        -webkit-transition-property: -webkit-transform;
        transition-property: -webkit-transform;
        transition-property: transform;
        transition-property: transform, -webkit-transform;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
    }


    /* 正文内容 */



    .content{
        width: 100%;
    }

    .card{
        position: relative;
        top: 0;
        border-radius: 4px;
        min-width: 632px;
        background: #fff; 
    }

    .main-content{
        width: 534px;
        padding-top: 27px;
        margin-left: 88px;
    }

    .up-name{
        color: #222;
    }

    .up-name a:hover{
        color: #fb7299;
    }

    .publish-time{
        padding-top: 4px;
    }

    .card-content{
        width: 532px;
        margin-top: 10px;
        padding-right: 0;
    }

    .card-content a:hover .textarea .title{
        color: #00a1d6;
    }

    .description{
        max-width: 100%;
        margin-bottom: 10px;
        font-size: 14px;
        line-height: 22px;
    }

    .description-content{
        display: block;
        padding-right: 10px;
    }

    .description-content a{
        cursor: pointer;
        color: #00a1d6;
    }

    .video-container{
        width: 530px;
        height: 127px;
        background: #fff;
        border-radius: 4px;
        text-align: left;
        position: relative;
        border: 1px solid #e5e9ef;
        overflow: hidden;
        z-index: 1;
    }


    .textarea{
        float: right;
        width: 289px;
        height: 100%;
        margin: 0 12px 0 16px;
    }


    .textarea .title a:hover{
        color: #00a1d6;
    }

    .textarea .title{
        color: #212121;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 14px;
        line-height: 19px;
        max-height: 2.714285714285714em;
        color: #212121;
        margin-top: 9px;
        height: 38px;
    }


    .textarea .content{
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 12px;
        line-height: 19px;
        max-height: 3.166666666666667em;
        margin-top: 8px;
        color: #666;
        height: 38px;
    }

    .view-data{
        font-size: 12px;
        color: #999;
        line-height: 18px;
        margin-top: 8px;
    }

    .data-item{
        margin-right: 10px;
        display: inline-block;
    }

    .data-item span{
        font-size: 12px;
        color: #999;
        line-height: 18px;
    }

    .up-avatar{
        display: block;
        position: absolute;
        width: 48px;
        height: 48px;
        top: 24px;
        left: 24px;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }

    .basic{
        width:203px;height:127px;display: inline-block;
    }

    .video-icon{
        width: 14px;
        height: 14px;
        vertical-align: -2px;
    }


    .video-bottom{
        width: 100%;
        height: 44px;
        line-height: 44px;
    }

    .video-bottom-item{
        text-align: left;
        display: inline-block;
        width: 92px;
        font-size: 12px;
    }

    .video-bottom-item span{
        font-size: 12px;
        color: #99a2aa;
        position: relative;
        top: 0px;
    }

    .video-bottom-icon{
        width: 20px;
        height: 14px;
    }

    .video-bottom a:hover{
        color: #fb7299;
    }


    
</style>
<style>
    .video-card-common{
        width:203px;height:127px;
        cursor: pointer;
     }
</style>