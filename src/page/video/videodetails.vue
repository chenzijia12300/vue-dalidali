<template>
<div>
  <app-header :class="{ headerBox :true}"></app-header>
  <div class="v-wrap">
    <div class="header-box"></div>
    <!-- 硬币弹窗 -->
    <div class="dialog-container" v-show="showDialog">
      <div class="dialog-content">
        <!-- 关闭 -->
        <svg
          aria-hidden="true"
          style="width:14px;height:14px;vertical-align:middle;    position: absolute;    right: 16px;
    top: 16px;cursor: pointer;"
          @click="showDialog=false"
        >
          <use xlink:href="#icon-quxiao" />
        </svg>
        <!-- 标题 -->
        <div class="dialog-title">
          给up主投上
          <span>1</span>
          枚硬币
        </div>
        <!-- 盒子 -->
        <div class="dialog-box">
          <div class="dialog-box-left">
            <span class="c-num">1硬币</span>
          </div>
        </div>
        <!-- 确定 -->
        <div class="dialog-bottom" @click="submitCoin()">
          <span class="btn">确定</span>
          <p class="tips">经验值+10（今日10/50）</p>
        </div>
      </div>
    </div>
    <div class="l-con">
      <div class="video-header-info">
        <h1 :title="details.title" class="video-title">
          <!---->
          <span class="tit">{{details.title}}</span>
        </h1>
        <div class="video-data">
          <span class="a-crumbs">
            <a target="_blank" href="//www.bilibili.com/v/information/">{{details.categoryPName}}</a>
            >
            <a
              target="_blank"
              href="//www.bilibili.com/v/information/global/"
            >{{details.categoryName}}</a>
          </span>
          <span>2020-07-08 14:13:48</span>
          <!---->
        </div>
        <div class="video-data">
          <span :title="details.playNum+'总播放数'" class="view">{{details.playNum}}播放量&nbsp;·&nbsp;</span>
          <span title="历史累计弹幕数503" class="dm">{{details.danmuNum}}弹幕</span>
          <span class="copyright">
            <svg aria-hidden="true" style="width:14px;height:14px;vertical-align:middle">
              <use xlink:href="#icon-jinzhi" />
            </svg>
            未经作者授权，禁止转载
          </span>
          <!---->
        </div>
      </div>
      <div class="player-wrap">
        <v-barrage
          ref="barrage"
          :isPause="isPause"
          :percent="100"
          :videoUrl="details.urls"
          :length="details.length"
        ></v-barrage>
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
            <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
            <!--弹幕控制框-->
            <svg class="gg-icon" aria-hidden="true" style="margin-left:10px">
              <use xlink:href="#icon-shiliangzhinengduixiang" />
            </svg>
          </div>
          <div class="player-video-inputbar-wrap">
            <svg class="gg-icon" aria-hidden="true" style="margin-left:10px">
              <use xlink:href="#icon-yansexuanzeqi" />
            </svg>
            <input
              class="player-video-danmaku-input"
              placeholder="发个友善的弹幕见证当下"
              style
              v-model="danmuInput"
            />
            <div class="player-video-danmaku-hint">
              <a href="#" class="hint">
                <span>弹幕礼仪</span>
              </a>
            </div>
            <div class="player-video-danmaku-btn" @click="submitDanmu()">发送</div>
          </div>
        </div>
      </div>
      <div class="ops">
        <span
          :title="'点赞数'+details.praiseNum"
          class="like"
          @mouseover="hasLike=true"
          @mouseout="hasLike=false"
          @click="handlerLike()"
        >
          <!---->
          <!---->
          <!---->
          <!---->
          <!---->
          <svg class="gg-icon" aria-hidden="true" v-if="hasLike || details.log.isPraise">
            <use xlink:href="#icon-dianzan-copy" />
          </svg>
          <svg class="gg-icon" aria-hidden="true" v-else>
            <use xlink:href="#icon-dianzan" />
          </svg>
          {{details.praiseNum}}
        </span>
        <span
          :title="'投硬币枚数'+details.coinNum"
          class="coin"
          @mouseover="hasCoin=true"
          @mouseout="hasCoin=false"
          @click="handlerDialog()"
        >
          <svg class="gg-icon" aria-hidden="true" v-if="hasCoin || details.log.coinNum>0">
            <use xlink:href="#icon-icon_shipin_yingbishu-copy" />
          </svg>
          <svg
            class="gg-icon"
            aria-hidden="true"
            style="background-color:gray;border-radius: 50%;border:none"
            v-else>
            <use xlink:href="#icon-icon_shipin_yingbishu" />
          </svg>
          {{details.coinNum}}
        </span>
        <span
          title="收藏人数894"
          class="collect"
          @mouseover="hasCollect=true"
          @mouseout="hasCollect=false"
          @click="handlerCollection()"
        >
          <svg class="gg-icon" aria-hidden="true" v-if="hasCollect || details.log.isCollection">
            <use xlink:href="#icon-xingxing-copy" />
          </svg>
          <svg class="gg-icon" aria-hidden="true" v-else>
            <use xlink:href="#icon-xingxing" />
          </svg>
          894
        </span>
        <span title="分享" class="share" @mouseover="hasShare=true" @mouseout="hasShare=false">
          <svg class="gg-icon" aria-hidden="true" v-if="hasShare">
            <use xlink:href="#icon-forward-copy" />
          </svg>
          <svg class="gg-icon" aria-hidden="true" v-else>
            <use xlink:href="#icon-forward" />
          </svg>
          102
        </span>
      </div>

      <!--视频简介-->
      <div class="video-desc">
        <span class="info">家本是爱的港湾，而不是仇恨暴力的场所。彼此尊重才能真正解决家暴问题。</span>
      </div>
      <!--视频标签-->
      <div class="video-tags">
        <ul>
          <li class="tag">
            <a href="#" class="tag-link">飙戏</a>
          </li>
        </ul>
      </div>
      <!--相关广告-->
      <div class="advertising-container">
        <a href="#">
          <div class="lazy-img">
            <img src="@/assets/advertising1.jpg" />
          </div>
        </a>
      </div>
      <div>
        <comment :commentNum="details.commentNum"></comment>
      </div>
    </div>
    <div class="r-con">
      <div class="up-info">
        <!--头像-->
        <div class="up-info-face">
          <a href="#" class="fa">
            <img src="@/assets/default_up.jpg" class="up-info-face" />
          </a>
        </div>
        <!--基本信息-->
        <div class="up-info-text">
          <div class="name">
            <a href="#" class="username">观察者网</a>
            <a href="#" class="message">发消息</a>
          </div>
          <!--描述-->
          <div class="desc">我是描述~~~~</div>
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
            <use xlink:href="#icon-gengduo" />
          </svg>
        </div>
        <div class="collapse-header-right">
          <span class="collapse-header-left-text" @click="danmuShow=!danmuShow">展开</span>
        </div>
        <el-collapse-transition>
          <el-table
            v-show="danmuShow"
            :data="tableData"
            height="585"
            style="width: 100%;font-size: 12px;"
          >
            <el-table-column prop="date" label="时间" width="60"></el-table-column>
            <el-table-column prop="name" label="弹幕内容" width="172"></el-table-column>
            <el-table-column prop="address" label="发送时间"></el-table-column>
          </el-table>
        </el-collapse-transition>
        <div class="rec-container">
          <div class="rec-title">相关推荐</div>
          <div class="rec-list">
            <div class="rec-item" v-for="(item,index) in recVideoList" :key="index">
              <basic
                style="width:141px;height:80px;  display: inline-block;"
                :flag="false"
                :videoItem="item"
              ></basic>
              <div class="rec-item-info">
                <a href="#" class="rec-item-title">{{item.title}}</a>
                <div class="count up">
                  <a href="#">{{item.upName}}</a>
                </div>
                <div class="count">{{item.playNum}}播放&nbsp;*&nbsp;{{item.danmuNum}}弹幕</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>

    .headerBox{
        position: relative;
        background: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    }
* {
  margin: 0;
  padding: 0;
}

a {
  color: #999;
  text-decoration: none;
}
a:link:hover,
a:visited {
  text-decoration: none;
}

/*
        详细页的开始
     */
#app {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}

/* 最外层布局  */
.v-wrap {
  width: 1152px;
  max-width: 1660px;
  min-width: 988px;
  margin: 20px auto;
}

/*
        右边布局
     */

.r-con {
  position: relative;
  float: right;
  width: 320px;
  margin-left: 30px;
}

.up-info {
  margin-bottom: 16px;
}

.up-info-face {
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

.up-info-text {
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
  width: 320px;
  background: #f4f4f4;
  color: #222;
  border-radius: 2px;
  cursor: pointer;
}
.collapse-header-left {
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

.collapse-header-left-title {
  font-size: 16px;
  color: #222;
}

.collapse-header-right {
  margin-right: 20px;
  line-height: 46px;
  float: right;
  font-size: 12px;
  height: 14px;
  bottom: 0;
  color: #505050;
}

.header-box {
  position: absolute;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
}

.barrage {
  width: 400px;
  height: 400px;
  border: 1px solid;
}

/**
        左边内容
      */
.l-con {
  float: left;
  width: 802px;
}

/**
            视频头部内容
        */
.video-header-info {
  margin-bottom: 16px;
  width: 802px;
  height: 81px;
}

/**
            视频标题
        */
.video-title {
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
.tit {
  vertical-align: middle;
}
.video-data {
  margin-top: 11px;
  font-size: 12px;
  height: 16px;
  color: #999;
  vertical-align: middle;
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

.player-wrap {
  position: relative;
  width: 802px;
  height: 585px;
}

.player-bottom {
  width: 802px;
  height: 46px;
  line-height: 30px;
  height: 28px;
  font-size: 14px;
  color: #505050;
  border-bottom: 1px solid #e5e9f0;
  padding-bottom: 12px;
}

.ops {
  border-bottom: 1px solid #e5e9f0;
  position: relative;
  float: left;
  height: 24px;
  margin: 20px 0;
  padding-bottom: 12px;
  width: 100%;
  font-size: 100%;
  vertical-align: baseline;
}

.ops span {
  width: 92px;
  margin-right: 8px;
  cursor: pointer;
  transition: all 0.3s;
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
.player-video-sendbar {
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
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

.player-video-info {
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

.player-video-info-people {
  float: left;
}

.player-video-info-people-number {
  height: 14px;
  line-height: 14px;
  font-size: 14px;
  font-weight: 600;
}

/**
            弹幕提交框
        */

.player-video-inputbar-wrap {
  width: 408px;
  border-radius: 2px 0 0 2px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  box-sizing: border-box;
}

.player-video-danmaku-input {
  color: #212121;
  flex-grow: 1;
  border: 0;
  height: 30px;
  line-height: 30px;
  z-index: 12;
  padding: 0 5px;
  background: none;
  font-size: 12px;

  width: 249px;
  outline: none;
}

input:focus {
  color: none;
  border: none;
}

.player-video-danmaku-hint {
  width: 82px;
  float: right;
}

.hint {
  font-size: 12px;
  color: #757575;
  fill: #757575;
  height: 100%;
  display: inline-block;
}

.hint:hover {
  color: #00a1d6;
  fill: #00a1d6;
}

.hint span {
  height: 100%;
  line-height: 28px;
  display: inline-block;
}

/**
            小图标
        */

.gg-icon {
  font-size: 28px;
  vertical-align: middle;
  margin-right: 6px;
  width: 28px;
  height: 28px;
  color: #757575;
}

/**
            视频简介样式
         */

.video-desc .info {
  white-space: pre-line;
  transition: all 0.3s;
  font-size: 12px;
  color: #212121;
  letter-spacing: 0;
  line-height: 18px;
  height: 63px;
  width: 573px;
  overflow: hidden;
}

/**
            标签样式
         */
.video-tags {
  margin-top: 16px;
  position: relative;
  clear: both;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e5e9ef;
}

.video-tags ul {
  height: 32px;
  list-style: none;
  outline: none;
}

.video-tags ul .tag {
  float: left;
  margin: 0 10px 8px 0;
  background: #f4f4f4;
  border-radius: 100px;
  padding: 0 12px;
  position: relative;
  height: 22px;
  line-height: 22px;
  transition: all 0.3s;
  font-size: 12px;
  border: 1px solid #f4f4f4;
}

.tag-link {
  display: inline-block;
  height: 22px;
  color: #505050;
  position: relative;
  z-index: 10;
  transition: all 0.3s;
}

/**
            广告相关样式
         */

.advertising-container {
  width: 100%;
  max-width: 1279px;
  max-height: 106px;
  border-radius: 2px;
}

.lazy-img {
  width: 100%;
  height: 100%;
  display: inline-block;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 2px;
}

.player-video-danmaku-btn {
  float: right;
  background: #1890ff;
  color: #fff;
  z-index: 13;
  height: 30px;
  width: 60px;
  min-width: 60px;
  line-height: 30px;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 0 2px 2px 0;
}

.player-video-danmaku-btn:hover {
  background-color: #00a1d6;
  color: #fff;
  cursor: pointer;
}

/* 推荐视频列表 */
.rec-container {
  position: absolute;
  padding-left: 10px;
  margin-top: 80px;
  z-index: 9998;
  border: 0;
  font-size: 100%;
}

.rec-title {
  font-size: 16px;
  color: #222;
  margin-bottom: 6px;
}

.rec-item-info {
  display: inline-block;
  width: 149px;
}

.rec-item-title {
  color: #222;
  font-size: 14px;
  font-weight: 500;
  height: 36px;
  line-height: 18px;
  margin-bottom: 6px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.count {
  display: inline-block;
  height: 16px;
  width: 100%;
  color: #999;
  font-size: 12px;
}
.up {
  width: 160px;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 投币弹窗 */
.dialog-container {
  background: rgba(0, 0, 0, 0.65);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 10102;
}

.dialog-content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  box-sizing: border-box;
  margin-bottom: 50px;
  width: 430px;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
}

.dialog-title {
  font-size: 16px;
  margin-top: 30px;
  color: #222;
  text-align: center;
}

.dialog-title span {
  font-size: 30px;
  color: #00a1d6;
}

.c-num {
  color: #00a1d6;
  text-align: left;
  font-size: 14px;
  line-height: 40px;
  position: absolute;
  left: 15px;
}

.dialog-box {
  text-align: center;
}

.dialog-box-left {
  margin-left: 35px;
  background-size: 122px;
  background-image: url(//s1.hdslb.com/bfs/static/jinkela/video/asserts/22.gif);
  position: relative;
  display: inline-block;
  margin-right: 30px;
  margin-top: 35px;
  width: 160px;
  height: 230px;
  border: 2px dashed #ccd0d6;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-position: 50%;
  border-style: solid;
  border-color: #02a0d8;
}

.dialog-bottom {
  text-align: center;
  padding: 25px 0;
}

.dialog-bottom .btn {
  display: inline-block;
  background: #00a1d6;
  color: #fff;
  font-size: 14px;
  padding: 4px 18px;
  border-radius: 4px;
  transition: all 0.3s;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid #00a1d6;
  text-align: center;
  cursor: pointer;
}
.dialog-bottom .tips {
  font-size: 12px;
  color: #99a2aa;
  margin-top: 10px;
}
</style>
<script>
import "@/https.js";
import vBarrage from "@/components/VBarrage/index.vue";
import comment from "@/components/comment/Comment.vue";
import basic from "@/components/video/recommend.vue";
import appHeader from "@/components/head/header";

export default {
  components: {
    vBarrage,
    comment,
    basic,
    appHeader,
  },
  data() {
    return {
      //弹幕提交位置
      location: "top",
      //当前秒数
      danmuInput: null,
      isheader: true,
      videoId: 0,
      value: null,
      details: {
        cover:
          "http://192.168.99.103:9000/dalidali/e03036ca-0293-488e-87f2-0521a2593daa.jpg",
        playNum: "541",
        praiseNum: "987",
        length: 68,
        urls:
          "http://192.168.99.103:9000/dalidali/e03036ca-0293-488e-87f2-0521a2593daa.mp4,http://192.168.99.103:9000/dalidali/e03036ca-0293-488e-87f2-0521a2593daa360.mp4,http://192.168.99.103:9000/dalidali/e03036ca-0293-488e-87f2-0521a2593daa480.mp4,http://192.168.99.103:9000/dalidali/e03036ca-0293-488e-87f2-0521a2593daa720.mp4",
        previewUrl:
          "http://192.168.99.103:9000/dalidali/e03036ca-0293-488e-87f2-0521a2593daa_preview.png",
        title: "假装是标题",
        upName: "观察者网",
      },
      arr: [],
      isPause: false,
      tableData: [
        {
          date: "00:08",
          name: "王小虎",
          address: "8-17 19:17",
        },
        {
          date: "00:08",
          name: "王小虎",
          address: "8-17 19:17",
        },
        {
          date: "00:08",
          name: "王小虎",
          address: "8-17 19:17",
        },
        {
          date: "00:08",
          name: "王小虎",
          address: "8-17 19:17",
        },
        {
          date: "00:08",
          name: "王小虎",
          address: "8-17 19:17",
        },
        {
          date: "00:08",
          name: "王小虎",
          address: "8-17 19:17",
        },
      ],
      danmuShow: false,
      recVideoList: [],
      hasLike: false,
      hasCoin: false,
      hasCollect: false,
      hasShare: false,
      showDialog: false,
    };
  },
  created() {
    // 请求视频详细信息
    this.videoId = this.$route.query.id;
    console.log(this.VIDEO_URL);
    this.$axios
      .get(this.VIDEO_URL + "video/" + this.videoId)
      .then((res) => {
        res = res.data;
        console.log(res);
        this.details = res.data;
        if (this.details.log == null) {
          this.details.log = {};
        }
      })
      .catch((err) => {
        console.error(err);
      });

    // 请求相关推荐
    this.$axios
      .get(this.VIDEO_URL + "category/random/all")
      .then((res) => {
        res = res.data;
        console.log(res);
        this.recVideoList = res.data;
      })
      .catch((err) => {
        console.error(err);
      });
  },
  mounted() {},
  methods: {
    // 初始化模拟弹幕数据
    submitDanmu() {
      console.log(this.$refs.barrage);
      let param = {
        vid: this.videoId,
        showSecond: this.$refs.barrage.nowSec,
        uid: 1,
        location: this.location,
        content: this.danmuInput,
      };
      this.$axios
        .post(this.COMMENT_URL + "danmu", param, {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        })
        .then((res) => {
          console.log(res.data);
          this.arr.unshift(param);
        })
        .catch((err) => {
          console.error(err);
        });
      this.danmuInput = "";
    },
    // 处理点赞逻辑
    handlerLike() {
      this.$axios
        .post(
          this.VIDEO_URL + "video/dynamic_like",
          {
            vid: this.videoId,
          },
          {
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
            },
          }
        )
        .then((res) => {
          this.$message("操作成功~");
          this.$set(this.details.log, "isPraise", !this.details.log.isPraise);
          this.details.praiseNum=this.details.praiseNum+1;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    // 投币
    handlerDialog() {
      if (this.details.log.coinNum == null || this.details.log.coinNum < 2) {
        this.showDialog = true;
      } else {
        this.$message({
          type: "warning",
          message: "该视频你已经不能在投币拉",
        });
      }
    },
    submitCoin() {
      this.$axios
        .post(
          this.VIDEO_URL + "video/coin",
          {
            vid: this.videoId,
            num: 1,
          },
          {
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
            },
          }
        )
        .then((res) => {
          this.$message("投币成功,经验加10~");
          this.showDialog = false;
          this.$set(this.details.log, "coinNum", this.details.log.coinNum + 1);
          this.details.coinNum=this.details.coinNum+1
        })
        .catch((err) => {
          console.error(err);
        });
    },
    // 收藏
    handlerCollection() {
      this.$axios
        .post(
          this.VIDEO_URL + "video/collection",
          {
            vid: this.videoId,
          },
          {
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
            },
          }
        )
        .then((res) => {
          this.$message("操作成功~");
          this.$set(
            this.details.log,
            "isCollection",
            !this.details.log.isCollection
          );
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>