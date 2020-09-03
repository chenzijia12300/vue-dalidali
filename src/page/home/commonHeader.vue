<template>
  <div class="container">
    <div class="back"></div>
    <!--小图标-->
    <ul class="con">
      <a href="#">
        <li>
          <div class="round" style="background: #ff5c7c;">
            <svg class="big-icon" aria-hidden="true">
              <use xlink:href="#icon-fangzi-copy" />
            </svg>
          </div>
          <span>首页</span>
        </li>
      </a>
      <a href="#">
        <li>
          <div class="round" style="background-color: #fcba2a;">
            <svg class="big-icon" aria-hidden="true">
              <use xlink:href="#icon-fengche" />
            </svg>
          </div>
          <span>动态</span>
        </li>
      </a>
      <a href="/#/rank" target="_blank">
        <li>
          <div class="round" style="background-color:#00a1d6">
            <svg class="big-icon" aria-hidden="true">
              <use xlink:href="#icon-paihangbang1" />
            </svg>
          </div>
          <span>排行榜</span>
        </li>
      </a>
      <a href="#">
        <li>
          <div class="round" style="background-color: #6dc781;">
            <svg class="big-icon" aria-hidden="true">
              <use xlink:href="#icon-pindaoleibiefenbu" />
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
                <a href="#">{{sonItem.name}}</a>
              </li>
            </ul>
          </div>

          <a href="#" slot="reference">
            <span>
              {{item.name}}
              <em>{{item.proNum}}</em>
            </span>
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
            <use xlink:href="#icon-zhuanlan2" />
          </svg>
          <span>专栏</span>
        </a>
      </div>
      <div class="item-link">
        <a href="#">
          <svg class="small-icon" aria-hidden="true">
            <use xlink:href="#icon-huodong" />
          </svg>
          <span>活动</span>
        </a>
      </div>
      <div class="item-link">
        <a href="#">
          <svg class="small-icon" aria-hidden="true">
            <use xlink:href="#icon-xiaoheiwu" />
          </svg>
          <span>小黑屋</span>
        </a>
      </div>
      <div class="item-link">
        <a href="#">
          <svg class="small-icon" aria-hidden="true">
            <use xlink:href="#icon-zhibo" />
          </svg>
          <span>直播</span>
        </a>
      </div>
      <div class="item-link">
        <a href="#">
          <svg class="small-icon" aria-hidden="true">
            <use xlink:href="#icon-ketang" />
          </svg>
          <span>课堂</span>
        </a>
      </div>
      <div class="item-link">
        <a href="#">
          <svg class="small-icon" aria-hidden="true">
            <use xlink:href="#icon-music" />
          </svg>
          <span>音乐plus</span>
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* 头部背景 */

* {
  margin: 0;
  padding: 0;
}

.sonCategory li {
  list-style: none;
  line-height: 30px;
}

.sonCategory a:hover {
  color: #73c9e5;
}
.back {
  z-index: -1;
  left: 0px;
  top: -10px;
  position: absolute;
  width: 100%;
  height: 155px;
  background: url(/assets/home_cover.png)
    no-repeat -200px;
}

a {
  text-decoration: none;
  color: #000;
}
.con {
  font-size: 14px;
  display: inline-block;
  margin: 0;
  padding: 0;
  text-align: center;
  list-style-type: none;
  width: 200px;
  height: 68px;
}
.con li {
  float: left;
  width: 48px;
  height: 66px;
  display: block;
}
.con a:hover span {
  color: #73c9e5;
}
.round {
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 36px;
  line-height: 36px;
  text-align: center;
  margin: 0 auto 4px;
}
.item-container {
  height: 68px;
  margin: 0;
  padding: 0;
  width: 748px;
  display: inline-block;
}
.item-type {
  float: left;
  display: block;
  width: 73px;
  height: 34px;
}

.item-link a:hover span {
  color: #73c9e5;
}

.link p {
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

.item-type em {
  font-style: normal;
  font-size: 12px;
  display: inline-block;
  background: #73c9e5;
  border-radius: 2px;
  color: #fff;
  margin-left: 1px;
  transform: scale(0.85);
  width: 32px;
  text-align: center;
}

a {
  text-decoration: none;
}

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
#primaryFriendshipLink {
  float: right;
  width: 220px;
  height: 68px;
}

.item-link {
  display: inline-block;
  height: 34px;
}

.big-icon {
  width: 18px;
  height: 20px;
  vertical-align: -0.3em;
  fill: currentColor;
  overflow: hidden;
}
.small-icon {
  width: 22px;
  height: 24px;
  vertical-align: -0.3em;
  fill: currentColor;
  overflow: hidden;
}
</style>
<script>
export default {
  data() {
    return {
      items: null,
    };
  },
  mounted() {
    //加载频道+
    this.$axios
      .get(this.VIDEO_URL+"category")
      .then((res) => {
        res = res.data;
        console.log(res.message);
        this.items = res.data;
            this.$emit('categoryList',this.items);
      })
      .catch((err) => {
        console.error(err);
      });
  }
};
</script>