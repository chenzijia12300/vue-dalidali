<template>
    <div>
    <div class="back"></div>
    <div id="type">
      <!--导航栏-->
        <div class="primary-menu-itnl">
          <!--小图标-->
            <ul class="con">
            <a href="#">
              <li>
                <div class="round" style="background: #ff5c7c;">
                        <svg class="big-icon" aria-hidden="true">
                            <use xlink:href="#icon-fangzi-copy"></use>
                        </svg> 
                </div>
                <span>首页</span>
              </li>
              </a>
              <a href="#">
              <li>
                <div class="round" style="background-color: #fcba2a;">
                        <svg class="big-icon" aria-hidden="true">
                            <use xlink:href="#icon-fengche"></use>
                        </svg> 
                </div>
                <span>动态</span>
              </li>
              </a>
              <a href="#">
              <li>
                <div class="round" style="background-color:#00a1d6">
                        <svg class="big-icon" aria-hidden="true">
                            <use xlink:href="#icon-paihangbang"></use>
                        </svg> 
                </div>
                <span>排行榜</span>
              </li>
              </a>
              <a href="#">
              <li>
                <div class="round" style="background-color: #6dc781;">
                        <svg class="big-icon" aria-hidden="true">
                            <use xlink:href="#icon-pindaoleibiefenbu"></use>
                        </svg> 
                </div>
                <span>频道</span>
              </li>
              </a>
            </ul>
            <!-------------分割线---------------->
            <span class="tab-line-itnl"></span>
            <!--频道列表-->
            <div class="item-container">
                  <div class="item-type" v-for="(item,index) in items" v-bind:key="index">
                    <el-popover placement="bottom" trigger="hover" width="70">
                        <div>
                            <ul class="sonCategory">
                               <li v-for="(sonItem,sIndex) in item.childList" v-bind:key="sIndex">
                                    <a href="#">
                                        {{sonItem.name}}
                                    </a>   
                                </li> 
                            </ul>
                        </div>
                    
                    <a href="#" slot="reference">
                      <span>{{item.name}}<em>{{item.proNum}}</em></span>
                    </a>
                    </el-popover>
                  </div>  
            </div>
            <!-------------分割线---------------->
            <span class="tab-line-itnl"></span>
            
            <!--一些链接-->
            <div id="primaryFriendshipLink">
                <div class="item-link">
                    <a href="#">
                        <svg class="small-icon" aria-hidden="true">
                            <use xlink:href="#icon-zhuanlan2"></use>
                        </svg>
                        <span>专栏</span>
                    </a>
                </div>
                <div class="item-link">
                    <a href="#">
                        <svg class="small-icon" aria-hidden="true">
                            <use xlink:href="#icon-huodong"></use>
                        </svg>                        
                        <span>活动</span>
                    </a>
                </div>
                <div class="item-link">
                    <a href="#">
                        <svg class="small-icon" aria-hidden="true">
                            <use xlink:href="#icon-xiaoheiwu"></use>
                        </svg> 
                        <span>小黑屋</span>
                    </a>
                </div>
                <div class="item-link">
                    <a href="#">
                        <svg class="small-icon" aria-hidden="true">
                            <use xlink:href="#icon-zhibo"></use>
                        </svg> 
                        <span>直播</span>
                    </a>
                </div>
                <div class="item-link">
                    <a href="#">
                        <svg class="small-icon" aria-hidden="true">
                            <use xlink:href="#icon-ketang"></use>
                        </svg> 
                        <span>课堂</span>
                    </a>
                </div>
                <div class="item-link">
                    <a href="#">
                        <svg class="small-icon" aria-hidden="true">
                            <use xlink:href="#icon-music"></use>
                        </svg> 
                        <span>音乐plus</span>
                    </a>
                </div>                                                                                
            </div>
            <!--推荐内容-->
            <div class="recommend-content">
            <!--轮播图-->
                <div class="focus-carousel">
                    <el-carousel indicator-position="outside"  height="242px" >
                        <el-carousel-item v-for="item in 4" :key="item">
                            <h3>{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            <!--推荐视频-->
            <div class="recommend-box">
                <div class="recommnd-card">
                    <div class="info-box" v-for="(item,index) in recommendRightList" v-bind:key="index">
                        <a href="#">
                            <img :src="item.cover"/>
                        </a>
                        <a :href="'#/details?id='+item.id" target="view_window">
                            <div class="info">
    
                                    <p class="title" :title="item.title">{{item.title}}</p>
                                    <p class="up">
                                        <svg class="small-icon" aria-hidden="true" style="width:16px;height:16px">
                                            <use xlink:href="#icon-UPzhu"></use>
                                        </svg> 
                                        {{item.upName}}
                                    </p>
                                    <p class="play">
                                        {{item.playNum}}播放量
                                    </p>
                            
                            </div>
                        </a>
                    </div>
                </div>
                
            </div>
            </div>
        </div>


        <!--还是推荐内容-->
        <div class="recommend-content">
            <div class="extension">
            <header class="storey-title">
                <div class="l-con">
                    <svg class="recommend-icon" aria-hidden="true">
                            <use xlink:href="#icon-tuiguang"></use>
                    </svg>
                    <a href="#" class="link-name">推广</a>
                    <a href="#" class="text-info-link">
                        <svg class="small-icon" aria-hidden="true">
                            <use xlink:href="#icon-huoyandaping"></use>
                        </svg> 
                        哒理哒理招租
                    </a>
                </div>
            </header>
            <div class="ext-box">
                <basic :videoItem="videoItem" v-for="(videoItem, index) in recommendLeftList" :key="index">      
                </basic>
            </div>
            </div>
            <!--专栏位-->

            <div class="bypb-window">
                <div class="online"><a href="https://www.bilibili.com/video/online.html" target="_blank">在线列表</a></div>
                <a data-loc-id="29" target="_blank" class="operate-card" href="https://www.bilibili.com/read/cv6505287" data-target-url="https://www.bilibili.com/read/cv6505287"><img src="http://i0.hdslb.com/bfs/archive/0bf1a101af3a0014def2a3978ff68101c7002106.jpg" alt="外星人"><!----></a>
            </div>
        </div>
        <div class="storey-box">
            <div class="proxy-box">
                <div class="bili_live">
                <a href="#">
                    <img src="https://i0.hdslb.com/bfs/sycp/creative_img/202007/8fc4eff039caf7bd74950cb548037517.jpg" alt=""> 
                    <svg class="gg-icon" aria-hidden="true">
                            <use xlink:href="#icon-guanggao"></use>
                    </svg>
                </a>
                </div>
        <div class="recommend-content-list" v-for="(item,index) in items" v-bind:key="index">
            <div class="extension">
            <header class="storey-title">
                <div class="l-con">
                    <svg class="recommend-icon" aria-hidden="true">
                            <use xlink:href="#icon-tuiguang"></use>
                    </svg>
                    <a href="#" class="link-name">{{item.name}}</a>
                </div>
            </header>
            <div class="zone-list-box" :id="item.id">
                    <basic :videoItem="videoItem" v-for="(videoItem, index) in videoList[item.id] " :key="index">
                        
                    </basic>
            </div>
        </div>
            <!--专栏位-->
            <div class="rank-list">
                <header class="rank-header">
                    <span class="name">排行榜</span>
                    <a href="/ranking/all/3/0/3" target="_blank" class="more">更多
                        <svg class="small-icon" aria-hidden="true" style="vertical-align: -0.5em;">
                                <use xlink:href="#icon-you"></use>
                    </svg> 
                    </a>
                </header>
                <div class="rank-wrap" v-for="(videoItem,index) in topVideoList[item.id]" :key="index">
                    <a href="#">
                        <span class="number" :class="{ 'on' : index<3}">{{index+1}}</span>
                        <div class="preview" v-if="index==0">
                            <!--图片-->
                            <div class="pic">
                                <a href="#" class="link">
                                    <img :src="videoItem.cover"/>
                                </a>
                            </div>
                            <div class="txt">
                                <a href="#" class="link">
                                    <p title="" >{{videoItem.title}}</p>
                                </a>
                                <span>综合评分:{{videoItem.playNum*1.5}}万</span>
                            </div>
                        </div>
                        <a href="#" class="link" v-else>
                            <p class="title"> {{videoItem.title}}</p>
                        </a>
                    </a>
                </div>
            </div>
        </div>
            </div>
        </div>
    </div>
    </div>  
</template>
<style  scoped>
    @import '../../../static/css/videoRank.css';
    *{
        margin: 0;
        padding: 0;
    }

    .sonCategory li{
        list-style: none;
        line-height: 30px;
    }

    .sonCategory a:hover{
        color: #73c9e5;
    }

    .back{
    z-index: -1;
    left: 0px;
    top: -10px;
    position:absolute;
    width: 100%;
    height: 155px;
    background:url(https://i0.hdslb.com/bfs/archive/22650682fd25a4a5aa96dd9ef53190c6b8d54912.png) no-repeat -200px;
    
  }
    
  a {text-decoration:none;color:#000} 
  #type{
    color:black;
    width:1198px;
    height:526px;
    margin:0 auto;
    margin-top: 100px;
  }

  .primary-menu-itnl {
    width: 100%;
  }


  .con{
    font-size: 14px;
    display: inline-block;
    margin: 0; padding: 0;
    text-align: center;
    list-style-type: none;;
    width:200px;
    height:68px;
  }
  .con li{
    float: left;
    width: 48px;
    height: 66px;
    display:block;
  }
  .con a:hover span{
      color: #73c9e5;
  }
  .round{
    position: relative;
    width: 36px;
    height: 36px;
    border-radius: 36px;
    line-height: 36px;
    text-align: center;
    margin: 0 auto 4px;
  }
  .item-container{
    height: 68px;
    margin: 0; padding: 0;
    width: 748px;
    display: inline-block;
  }
  .item-type{
    float: left;
    display:block;
    width: 73px;
    height: 34px;
  }

  .item-link a:hover span{
      color: #73c9e5;
  }

  .link p{
    font-size: 14px;
    height: 40px;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 5px;
  }
  
  .item-type em{
    font-style: normal;
    font-size: 12px;
    display: inline-block;
    background: #73c9e5;
    border-radius: 2px;
    color: #fff;
    margin-left: 1px;
    transform: scale(.85);
    width: 32px;
    text-align: center;
  }

  a {text-decoration:none;} 

  .tab-line-itnl {
    position: relative;
    top: -20px;
    display: inline-block;
    height: 46px;
    border-left: 1px solid #e7e7e7;
    margin: 0 0 px;
  }


    /*
        连接的css
    */
    #primaryFriendshipLink{
        float:right;
        width: 220px;
        height: 68px;
    }

    .item-link{
        display: inline-block;
        height: 34px;
    }



    .big-icon{
       width: 18px; height: 20px;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
      .small-icon {
       width: 22px; height: 24px;
       vertical-align: -0.30em;
       fill: currentColor;
       overflow: hidden;
    }
  
    /*
        推荐内容的css
    */


    .recommend-content,.recommend-content-list{
        margin-top: px;
        width: 1198px;
        height: 242px;
    }
  
    /*
        轮播图的css
    */


    .focus-carousel{
        float: left;
        text-align: center;
        width: 550px;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 242px;
        margin: 0;
    }
  
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
  
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }


    /*
        推荐视频的css
     */ 
     .recommend-box{
        color:white;
        float: right;
        width: 638px;
        height: 242px;
     }

     .video-card{
        width: 100%;
        height: 100%;
        border-radius: 2px;
     }


     .recommend-box img{
         width: 206px;
         height: 116px;
     }

     .info-box{
        margin-right: 5px;
        display: inline-block;
        width: 206px;
        height: 116px;
        position: relative;
        overflow: hidden;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABHCAMAAAB4UkqjAAAAh1BMVEUAAADd3d3d3d…UCIZXAAAALHRSTlMAoJDx4OYL/DcGF+6+JNi4ycSIT2k6LPeWfRzTVPXPszEQrV0hpo12cEZAZFpRNIQAAAJVSURBVFjD7dbZcpswGIbhHwwSi81q8Ib33fnu//oatRIpmliDhQ/aaZ+TKInnjVgkhb4RJMhP9Fzo8PiD+vEA+JPnqS0+1dRHBJhibAzh2HNeekxP9Z8XBSMZM6SmRBYx65QeM6XsY3rKPqanLGMWqeDmOh0b/Io9+YHi3gKtdExgLznSlyjFMGnUphIMlcgY22C4DSPBxTu4IrXDe+yI6IDWbPSqGVoHoohDyip6XZVB4hFN1TgPyUaYQ5rSWQ0nZGcC6UyJukKypa4yIXX3HLLlqCdHX++HLRfS/9bbWvvHLSLNR3N6tRXdFwdxejekiYF4fDnWYa/WqSm2PqRCSy0hrbP5RxAaW8141N17tVbZ+S1fFYbWFF2+1lqg62BoBdAsqWOLroWhxTh+M8vmWuuaxp1WaWjRSn43yl35sHTLUjxiaWlqnYE4LZoJme3v13MibqepFZRL6otV5V+/Hv+xVvi+FsvZG1qh/LQ7uFXnF/HlwcEfYlDktW2r5EARUiXWc1xRWAC8tGwxsdJ9dcRnYrddMdtrjDZyAy3kXrSJ7O89u8zEZAIKxBRnFzbonWD3ZkfCrrmzP+6979nicjAnW3NZ4OS1R6GtVBa8drTek539up3NAgMvcv51WNZQitCiFBZQaqIMSrx1XrWNoWTy/w1r+hk+xjuMSVjGGC6WZ3S1xlDriqTKxzB+Ra3I4bDHne62drqmied57QR9z0D94dHnOEmvJ/pWAMm4ovL2TTcJ5cRyMlHrbkdG5c/5r82fYqt+K/iR89m2JrP9PEZyI80PsPxVT0P3FAEAAAAASUVORK5CYII=);
        background-repeat: no-repeat;
        background-position: 50%;
     }
    
    .info-box:hover{
        background: gray;

    }

     .info-box:hover .info{
        transform:translateY(-60px);
        background: rgba(0, 0, 0, 0.5);
     }

     .info{
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 116px;
        top: 48px;
        left: 0;
        transition:  .2s;
        padding: 40px 10px 10px;
     }



     .title{
        font-size: 14px;
        line-height: 18px;
        height: 18px;
        color: #fff;
        margin-bottom: 6px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 500;
     }
     .up,.play{
        font-size: 12px;
        color: #e0e0e0;
        margin-bottom: 3px;
     }


     /*
        推广位的css
     */
     .storey-title{
        width:220px;
        display: flex;
        margin-bottom: 16px;
        height: 36px;
     }
     .l-con{
        display: inline-flex;
     }
     .recommend-icon{
        width: 36px;
        height: 36px;
        vertical-align: middle;
        fill: currentColor;
     }
     .link-name{
        margin: 0 20px 0 0;
        vertical-align: bottom;
        font-size: 20px;
        line-height: 36px;
     }
     .text-info-link{
        color: #505050;
        line-height: 36px;
     }
     .extension{
         width:854px;
         float: left;
     }


     /*
        视频
      */
     .video-card-common{
        width: 206px;
        cursor: pointer;
     }




    /*
        专栏位css
     */
     .bypb-window {
        width: 320px;
        float:right;
    }
    .bypb-window img{
        width: 320px;
        height: 185px;
    }

    .online {
        text-align: center;
        margin-top: 3px;
        margin-bottom: 19px;
        height: 30px;
        border: 1px solid #e7e7e7;
        border-radius: 2px;
        background: #f4f4f4;
        color: #505050;
        line-height: 30px;
    }

    .operate-card {
        position: relative;
        display: block;
    }


    .storey-box{
        margin-top: 60px;
        width: 1198px;
    }

    .proxy-box {
        min-height: 1000px;
    }

    .bili_live img{
        width:1198px;
        height: 99px;
        vertical-align: middle;
        border-style: none;
    }

    .gg-icon{
        position: relative;
        left: 5px;
        bottom: 30px;
        width: 38px;
        height: 22px;
        margin-right: 3px;
        z-index: 1;
        vertical-align: middle;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAsCAMAAAD4va5DAAAAolBMVEX///8AAAAAAAAAAAAAAAACAgIAAAAAAAAGBgb5+fns7OwAAACBgYHq6ur9/f17e3tgYGD09PSoqKiLi4sAAAANDQ3V1dW6urqPj48DAwMAAAD////u7u7j4+MbGxv////b29vBwcH19fXt7e3GxsaLi4ukpKRTU1P4+Pjl5eXh4eHX19fLy8vb29v4+PisrKwvLy86Ojr7+/vy8vK4uLhVVVX0WqNFAAAANnRSTlOZAgULFR0IACCBYxIvW4sxJmk0HxoXU0grJQ6TZl0cj1RFcmtENTUmfGFYTUlGcT4rI4dyMhsJ24tXAAABiElEQVRIx+3XyW6DMBCA4WnAzrCUJUDYCpQAIWuTdHn/V6sNqZqFAwSfqv4HJHP4ZECIAabT6ZOQGARnazKqhuBYI1EqjYjSxpsCt6gUaZr8cJoWSZRr0FiObcCIDNvhWoNJTgYjyxypxWhkw+jsiHJsQjVjPGZodMIxSQMBaVKLySIw+R/jxX5lXK2LFYDqK4/tLCeby+UadwA7XAzECj/Py7KcuXVZ5rnv+zHfmEXYzvbuUOwVyU+IGIYhxxLipp4ne15K2Dm/P0Y2ylV8tyQNWF+yEwS6ac4HYC9w0wLT5vr28tvgy7zD3msbhGHqRm369LZqW/Y4FiJxWR7LdQnBMFR6Ylss4KYkSZ4vYkujJ7bDhbjX6YAruGu9nLGW7THvj1Vo3GNzcrIsq64tFtH7YyeELuz3qaT9MQUrcZiKW3HYISw6MSvQddM0dT0gvbH4eIy7MLS41Who9r9nc+hoXX3Auazy/84HZSAmdjwQOriIHKmEDnuCx1ChA7LI0V3sT4XQ351vRIIkxg4KQCAAAAAASUVORK5CYII=);
        background-size: cover;
    }



    /** 
        频道视频通用模块
    */

    .zone-list-box{
        width:880px;
        height: 404px;
        margin: 0;padding: 0;
    }

    .rank-wrap a:hover{
        color: #00a1d6;
    }

    .link:hover .title{
        color: #00a1d6;
    }


</style>   
<script>
import https from '../../https.js'  
import basic from '@/components/video/basic.vue'

export default {
    components:{
        basic
    },
    data(){
        return{
            items:null,
            imageUrl:require("../../assets/image.jpg"),
            recommendLeftList:null,
            recommendRightList:null,
            videoList:new Array(10),
            topVideoList:new Array(10)
      }
    },
    mounted(){
        //加载频道+
        this.$axios.get("http://localhost:8081/category")
        .then(res => {
            res = res.data
            console.log(res.message);
            this.items=res.data;
        })
        .catch(err => {
            console.error(err); 
        })

        //加载推荐左边视频
        this.$axios.get("http://localhost:8081/video/recommend/LEFT/1")
        .then(res => {
            res = res.data
            this.recommendLeftList = res.data
        })
        .catch(err => {
            console.error(err); 
        })

        //加载推荐右边视频
        this.$axios.get("http://localhost:8081/video/recommend/RIGHT/1")
        .then(res => {
            res = res.data
            this.recommendRightList = res.data
        })
        .catch(err => {
            console.error(err); 
        })
    },
    created(){
        myVue = this;
    }
}

/*
         *
         * String: className
         * 指定 lazyLoad 应该使用懒加载的类名
         *
         * function: callback
         * 指定 lazyLoad 的元素到达加载时机触发的回调函数
         * 该回调函数携带了一个参数，为当前到达加载时机的元素
         * 
         */

var myVue = {

}
let videoIndex = 0;
function lazyLoad (className, callback) {
    var imgs = document.getElementsByClassName(className);
    var curI = 0;

    window.addEventListener('scroll', scroll);
    scroll();

    function loadable (ele) {
        if (document.documentElement.scrollTop + document.documentElement.clientHeight >= ele.offsetTop) {
            return true
        }
        return false
    }

    function scroll () {
        for ( var i = curI; i < imgs.length; i++) {
            if (loadable(imgs[i])) {
                callback.call(imgs[i], imgs[i]);
                curI++;
            }
        }
    }
}
lazyLoad('zone-list-box', function (ele) {
    myVue.$axios.get("http://localhost:8081/category/random/"+ele.id)
    .then(res => {
        res = res.data;
        console.log(res)
        myVue.$set(myVue.videoList,ele.id,res.data)
    })
    .catch(err => {
        console.error(err); 
    })

    myVue.$axios.get("http://localhost:8081/video/top/"+ele.id+"/10")
    .then(res => {
        res = res.data;
        console.log(res)
        myVue.$set(myVue.topVideoList,ele.id,res.data)
    })
    .catch(err => {
        console.error(err); 
    })
});
</script>