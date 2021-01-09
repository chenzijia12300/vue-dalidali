<template>
  <div id="hello">
    <remote-js src="http://at.alicdn.com/t/font_1923532_1mhrzfro251.js"></remote-js>
    <el-row class="head">
      <el-col :span="num">
        <a href="/header">
          <div class="grid-content bg-purple">主站</div>
        </a>
      </el-col>
      <el-col :span="num">
        <a href="/header">
          <div class="grid-content bg-purple">番剧</div>
        </a>
      </el-col>
      <el-col :span="num+0.5">
        <a href="/header">
          <div class="grid-content bg-purple">游戏中心</div>
        </a>
      </el-col>
      <el-col :span="num">
        <a href="/header">
          <div class="grid-content bg-purple">直播</div>
        </a>
      </el-col>
      <el-col :span="num">
        <a href="/header">
          <div class="grid-content bg-purple">会员购</div>
        </a>
      </el-col>
      <el-col :span="num">
        <a href="/header">
          <div class="grid-content bg-purple">漫画</div>
        </a>
      </el-col>
      <el-col :span="num">
        <a href="/header">
          <div class="grid-content bg-purple">赛事</div>
        </a>
      </el-col>
      <el-col :span="num">
        <a href="/header">
          <div class="grid-content bg-purple">歌会</div>
        </a>
      </el-col>
      <el-col :span="7">
        <el-input
          placeholder="请输入内容"
          v-model="search"
          class="input-with-select"
          style="margin-top:10px"
        >
          <el-button slot="append" icon="el-icon-search" style="padding:0px 20px"></el-button>
        </el-input>
      </el-col>
      <div v-if="userInfo != null">
        <el-col :span="1" @mouseleave.native="showDetails(false)">
          <transition name="fade">
            <avatar
              @mouseover.native="showDetails(true)"
              align="center"
              :avatar="avatar"
              :style="avatarCss"
            ></avatar>
          </transition>
          <transition name="fade">
            <div class="userInfo" v-show="isShow">
              <div class="info-container">
                <div class="info-avatar">
                  <a href="#">
                    <avatar
                      :avatar="avatar"
                      style="width:72px;height:72px;text-align: center;position:relative;bottom:20px"
                    ></avatar>
                  </a>
                </div>
                <p class="username">{{userInfo.username}}</p>
                <div class="level-content">
                  <!--等级-->
                  <div class="level-info">
                    <span class="grade">等级 5</span>
                    <span class="progress">14121/28800</span>
                    <a href="#" class="level-link">
                      <div class="level-bar">
                        <div class="level-progress"></div>
                      </div>
                    </a>
                  </div>
                </div>
                <!-- 硬币 -->
                <div class="coins">
                  <a
                    href="https://account.bilibili.com/site/coin"
                    target="_blank"
                    title="硬币"
                    class="jump"
                  >
                    <svg>
                      <use data-v-29bf33c0 xlink:href="#icon-icon_shipin_yingbishu1" />
                    </svg>
                    <span data-v-29bf33c0 class="money">263.0</span>
                  </a>
                  <a
                    href="https://pay.bilibili.com/paywallet-fe/bb_balance.html"
                    target="_blank"
                    title="B币"
                  >
                    <svg>
                      <use data-v-29bf33c0 xlink:href="#icon-icon_dingdao_Bbi" />
                    </svg>
                    <span data-v-29bf33c0 class="money">0</span>
                  </a>
                </div>
                <!-- 总数 -->
                <div class="counts">
                  <a href>
                    <div class="item-key">关注</div>
                    <div class="item-value">
                      <span class="item-num">43</span>
                      <span class="item-unit"></span>
                    </div>
                  </a>
                  <a href>
                    <div class="item-key">粉丝</div>
                    <div class="item-value">
                      <span class="item-num">43</span>
                      <span class="item-unit"></span>
                    </div>
                  </a>
                  <a href>
                    <div class="item-key">动态</div>
                    <div class="item-value">
                      <span class="item-num">43</span>
                      <span class="item-unit"></span>
                    </div>
                  </a>
                </div>
                <!-- 列表 -->
                <div class="links">
                  <a href="https://account.bilibili.com/account/home" class="link-item">
                    <div class="link-title">
                      <svg aria-hidden="true" class="coins-icon">
                        <use xlink:href="#icon-renwu" />
                      </svg>
                      <span>个人中心</span>
                    </div>
                  </a>
                  <a href="https://account.bilibili.com/account/home" class="link-item">
                    <div class="link-title">
                      <svg aria-hidden="true" class="coins-icon">
                        <use xlink:href="#icon-tougao" />
                      </svg>
                      投稿管理
                    </div>
                  </a>
                  <a href="https://account.bilibili.com/account/home" class="link-item">
                    <div class="link-title">
                      <svg aria-hidden="true" class="coins-icon">
                        <use xlink:href="#icon-qianbao" />
                      </svg>
                      B币钱包
                    </div>
                  </a>
                  <a href="https://account.bilibili.com/account/home" class="link-item">
                    <div class="link-title">
                      <svg aria-hidden="true" class="coins-icon">
                        <use xlink:href="#icon-order" />
                      </svg>
                      订单中心
                    </div>
                  </a>
                </div>
                <!-- 退出 -->
                <div class="links">
                  <a class="link-item" @click="logout()">
                    <svg aria-hidden="true" class="coins-icon">
                      <use xlink:href="#icon-zhuxiao" />
                    </svg>
                    退出
                  </a>
                </div>
              </div>
            </div>
          </transition>
        </el-col>
        <el-col :span="num">
          <a href="/header">
            <div class="grid-content bg-purple">大会员</div>
          </a>
        </el-col>
        <el-col :span="num">
          <a href="/header">
            <div class="grid-content bg-purple">消息</div>
          </a>
        </el-col>
        <el-col :span="num">
          <a href="/#/dynamic" target="_blank">
            <div class="grid-content bg-purple">动态</div>
          </a>
        </el-col>
        <el-col :span="num">
          <a href="/header">
            <div class="grid-content bg-purple">收藏</div>
          </a>
        </el-col>
        <el-col :span="num">
          <a href="/header">
            <div class="grid-content bg-purple">历史</div>
          </a>
        </el-col>
        <el-col :span="num+0.5">
          <a href="/header">
            <div class="grid-content bg-purple">创作中心</div>
          </a>
        </el-col>
        <el-col :span="num">
          <a href="/header">
            <el-button
              type="primary"
              style="margin-top:10px;background-color:#fb7299;margin-left: 20px;padding:10px 20px"
            >投稿</el-button>
          </a>
        </el-col>
      </div>
      <div v-else>
        <el-col :span="num">
          <avatar :avatar="'http://static.hdslb.com/images/akari.jpg'" :style="avatarCss"></avatar>
        </el-col>
        <el-col :span="num">
          <a href="/#/login" class="grid-content bg-purple">登录</a>
        </el-col>
        <el-col :span="num">
          <a href="#" class="grid-content bg-purple">注册</a>
        </el-col>
        <el-col :span="num">
          <a href="/header">
            <el-button
              type="primary"
              style="margin-top:10px;background-color:#fb7299;margin-left: 20px;padding:10px 20px"
            >投稿</el-button>
          </a>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
import avatar from "../Avatar.vue";
import {store} from "@/router/index.js"

export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      num: 1,
      size: 1,
      search: null,
      circleUrl: null,
      isShow: false,
      size: 36,
      avatarCss: {
        width: "36px",
        height: "36px",
        lineHeight: "30px",
        marginTop: "10px",
        marginLeft: "20px",
        position: "relative",
        top: "0px",
        zIndex: 1,
      },
      userInfo: null,
      avatar: null,
    };
  },
  components: {
    "remote-js": {
      render(createElement) {
        return createElement("script", {
          attrs: { type: "text/javascript", src: this.src },
        });
      },
    },
    avatar,
  },
  mounted() {
    console.log(store.state.user);
    this.userInfo = store.state.user
  },
  methods: {
    showDetails: function (flag) {
      this.isShow = flag;
      if (flag) {
        console.log("修改");
        this.avatarCss.top = "20px";
      } else {
        this.avatarCss.top = "0px";
      }
    },
    logout(){
      console.log(this.userInfo);
      this.$message({
        message: '欢迎“'+this.userInfo.username+'”下次再来',
      })
      store.commit('setUser',null)
      localStorage.removeItem("userData");
      this.userInfo=null;
      this.$router.push('/login');
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hello {
  z-index: 9999;
}

* {
  padding: 0px;
  margin: 0px;
  font-size: 14px;
}

.el-row {
  text-align: center;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  text-shadow: 1px 1px 1px #000;
  color: white;
  line-height: 56px;
  margin-left: 20px;
  border-radius: 4px;
  min-height: 36px;
  font-size: 14px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.input-with-select {
  background-color: #fff;
}
.back {
  z-index: -1;
  left: 0px;
  top: 0px;
  position: absolute;
  width: 100%;
  height: 155px;
  background: url(https://i0.hdslb.com/bfs/archive/22650682fd25a4a5aa96dd9ef53190c6b8d54912.png)
    no-repeat -200px;
}
#type {
  width: 1198px;
  height: 526px;
  background-color: gray;
  margin: 0 auto;
}
.con {
  margin: 0;
  padding: 0;
  text-align: center;
  list-style-type: none;
  width: 200px;
  height: 68px;
  border: 1px solid;
}
.con li {
  float: left;
  width: 48px;
  height: 66px;
  display: block;
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
.item-type {
  width: 73px;
  height: 34px;
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
  color: #000;
}
body {
  font: 14px -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
}

/* 用户信息 */
.userInfo {
  border: 1px solid;
  top: 50px;
  left: 850px;
  background-color: white;
  position: absolute;
  width: 280px;
  z-index: 9999;
  text-align: left;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.userInfo div {
  display: inline-block;
}

.userInfo svg {
  width: 15px;
  height: 15px;
}

.info-avatar {
  width: 100%;
  text-align: center;
}
.info-container {
  margin: 0 auto;
  min-height: 492px;
  position: relative;
  align-items: center;
}

.username {
  color: #212121;
  font-weight: 600;
  text-align: center;
  font-size: 16px;
}

.level-content {
  align-items: center;
  position: relative;
  width: 100%;
  padding: 0 20px;
}

.level-info {
  margin: 20px 0 5px;
  width: 100%;
  align-items: center;
}

.grade {
  font-size: 14px;
  color: #212121;
}

.progress {
  margin-left: 110px;
  font-size: 12px;
  color: #999;
}

.level-link {
  height: 10px;
  width: 240px;
}

.level-bar {
  width: 240px;
  height: 2px;
  background-color: #f4f4f4;
  position: relative;
  margin: 4px 0;
}

.coins {
  padding: 0px 20px 20px;
  width: 100%;
  border-bottom: 1px solid #f4f4f4;
  color: #212121;
}

.money {
  margin: 0 20px 0 8px;
}

.counts {
  margin: 0px auto;
}

.counts a {
  width: 85px;
  flex: 1;
  display: inline-block;
  text-align: center;
}

.counts div {
  display: block;
}

/* 链接 */
.links {
  width: 100%;
  border-bottom: 1px solid #f4f4f4;
  padding: 7px 0;
  vertical-align: middle;
  color: #979797;
  margin-right: 5px;
}

.links a {
  display: block;
  cursor: pointer;
  align-items: center;
  transition: 0.3s ease;
  padding: 8px 23px;
}

.links a:hover {
  background: #f0f0f0;
}

.links svg {
  width: 20px;
  height: 20px;
}

.link-title span {
  line-height: 30px;
  font-size: 14px;
}

.link-title {
  color: #212121;
  align-items: center;
  vertical-align: middle;
}

/* 通用 */

.item-key {
  font-size: 12px;
  color: #999;
}

.item-value {
  font-size: 16px;
  color: #212121;
  align-items: center;
  font-weight: 600;
  height: 20px;
}
</style>
