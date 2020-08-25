<template>
  <div class="primary-menu-itnl">
    <common-header></common-header>
    <div class="rank-body">
      <div class="rank-tab-wrap">
        <ul class="rank-tab">
          <li class="active">全站</li>
          <li class>动画</li>
          <li class>国创相关</li>
          <li class>音乐</li>
          <li class>舞蹈</li>
          <li class>游戏</li>
          <li class>知识</li>
          <li class>数码</li>
          <li class>生活</li>
          <li class>鬼畜</li>
          <li class>时尚</li>
          <li class>娱乐</li>
          <li class>影视</li>
        </ul>
      </div>
      <!-- 提示 -->
      <div class="rank-list-head">
        <div class="rank-tips">
          <svg class="small-icon" aria-hidden="true">
            <use xlink:href="#icon-iconcopy" />
          </svg>
          <span class="tip-text">根据稿件内容质量、近期的数据综合展示，动态更新</span>
        </div>
      </div>

      <!-- 视频top内容 -->
      <div class="rank-list-wrap">
        <ul class="rank-list">
          <li class="rank-item">
            <!-- 排名 -->
            <div class="num">1</div>
            <!-- 内容 -->
            <div class="content">
              <div class="img">
                <a href="https://www.bilibili.com/video/BV1x54y1e7zf" target="_blank">
                  <div class="cover">
                    <img
                      alt="游戏科学新作《黑神话：悟空》13分钟实机演示"
                      src="https://i1.hdslb.com/bfs/archive/a9c4c95cc2b115d772928a1ece5296a3681ad7be.jpg@143w_88h.webp"
                    />
                  </div>
                </a>
                <div class="watch-later-trigger w-later"></div>
              </div>
              <div class="info">
                <a
                  href="https://www.bilibili.com/video/BV1x54y1e7zf"
                  target="_blank"
                  class="title"
                >游戏科学新作《黑神话：悟空》13分钟实机演示</a>
                <!---->
                <div class="detail">
                  <span class="data-box">
                    <svg class="video-icon" aria-hidden="true">
                      <use xlink:href="#icon-bofangshu" />
                    </svg>596.0万
                  </span>
                  <span class="data-box">
                    <svg class="video-icon" aria-hidden="true">
                      <use xlink:href="#icon-danmu" />
                    </svg>6.0万
                  </span>
                  <a target="_blank" href="//space.bilibili.com/642389251">
                    <span class="data-box">
                      <svg class="video-icon" aria-hidden="true">
                        <use xlink:href="#icon-renxiang" />
                      </svg>黑神话之悟空
                    </span>
                  </a>
                </div>
                <div class="pts">
                  <div>7944968</div>综合得分
                </div>
              </div>
              <!---->
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* 排行榜 */

.primary-menu-itnl {
  color: black;
  width: 1198px;
  height: 526px;
  margin: 0 auto;
  margin-top: 100px;
}
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
a{
  text-decoration: none;
  color: #99a2aa;
}
img{
  width: 100%;
  height: 100%;
}
.rank-tab-wrap {
  background: #edf2f9;
  padding: 0;
  border-radius: 4px;
  clear: both;
  height: 40px;
}

.rank-tab {
  float: left;
}
.rank-tab li {
  float: left;
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  margin-right: 10px;
}

.active {
  color: #00a1d6;
}

.small-icon {
  width: 20px;
  height: 20px;
  display: inline-block;
  vertical-align: middle;
  margin: 0 10px;
}

/* 文本提示 */
.rank-list-head {
  padding: 15px 0;
}

.rank-tips {
  padding: 7px 0;
  background-color: #edf2f9;
  border-radius: 4px;
}

.tip-text {
  font-size: 12px;
  vertical-align: middle;
}

/* 排行榜内容 */
.rank-item {
    font-size: 12px;
  transition: 0.2s;
  overflow: hidden;
  border-bottom: 1px solid #e5e9ef;
  position: relative;
}


.rank-item .content .info:hover .title {
    color: #00a1d6!important;
}
.rank-item:hover{
  cursor: pointer;
  box-shadow: 0 2px 5px #ccc;
}


.rank-item .num {
  width: 70px;
  height: 70px;
  position: absolute;
  top: 20px;
  left: 0;
  line-height: 70px;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: #b8c0cc;
  font-family: simhei;
}

.rank-item .content {
  padding: 20px 0 0 70px;
  overflow: hidden;
}

.rank-item .content .img {
  position: relative;
  float: left;
}

.cover{
    width: 114px;
    height: 70px;
}

.info {
  padding-bottom: 20px;
  margin-left: 130px;
  height: 70px;
  position: relative;
  display: block;
}
.rank-item .content .info .title {
  height: 20px;
  line-height: 20px;
  font-weight: 700;
  font-size: 14px;
  color: #222;
  transition: 0.3s;
  display: inline-block;
}

.rank-item .content .info .detail {
  margin-top: 20px;
  color: #99a2aa;
}

.rank-item .content .info .pts {
  height: 20px;
  color: #b8c0cc;
  line-height: 20px;
  position: absolute;
  bottom: 40px;
  right: 20px;
  text-align: center;
}


.rank-item .content .info .detail .data-box {
    width: 80px;
    margin-right: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.rank-item .content .info .pts div {
    color: #00a1d6;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 12px;
}

.video-icon {
  width: 12px;
  height: 12px;
  margin-right: 5px;
  display: inline-block;
  vertical-align: text-top;
}
</style>
<script>
import commonHeader from "../home/commonHeader.vue";
export default {
  components: {
    commonHeader,
  },
  data() {
    return {};
  },
};
</script>