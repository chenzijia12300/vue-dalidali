<template>
  <div id="hello">
    <remote-js src="http://at.alicdn.com/t/font_1923532_t27fwckkxkh.js"></remote-js>
     <el-row class="head">
        <el-col :span="num"><a href="/header"><div class="grid-content bg-purple">主站</div></a></el-col>
        <el-col :span="num"><div class="grid-content bg-purple">番剧</div></el-col>
        <el-col :span="num+0.5"><div class="grid-content bg-purple">游戏中心</div></el-col>
        <el-col :span="num"><div class="grid-content bg-purple">直播</div></el-col>
        <el-col :span="num"><div class="grid-content bg-purple">会员购</div></el-col>
        <el-col :span="num"><div class="grid-content bg-purple">漫画</div></el-col>
        <el-col :span="num"><div class="grid-content bg-purple">赛事</div></el-col>
        <el-col :span="num"><div class="grid-content bg-purple">歌会</div></el-col>
        <el-col :span="6">
            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select" style="margin-top:10px"/>
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-col>
        <el-col :span="0.5">
            <el-avatar :size="size" :src="circleUrl" style="margin-top: 10px;margin-left: 20px;"></el-avatar>
        </el-col>
        <el-col :span="num"><div class="grid-content bg-purple">大会员</div></el-col>
        <el-col :span="num"><div class="grid-content bg-purple">消息</div></el-col>
        <el-col :span="num"><div class="grid-content bg-purple">动态</div></el-col>
        <el-col :span="num"><div class="grid-content bg-purple">收藏</div></el-col>
        <el-col :span="num"><div class="grid-content bg-purple">历史</div></el-col>
        <el-col :span="num+0.5"><div class="grid-content bg-purple">创作中心</div></el-col>
        <el-col :span="num"><el-button type="primary" style="margin-top:10px;background-color:#fb7299;margin-left: 20px;">投稿</el-button></el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num: '1'
    }
  },
  components: {
    "remote-js": {
      render(createElement) {
        return createElement("script", {
          attrs: { type: "text/javascript", src: this.src }
        });
      }
      } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


    .el-row {
      margin-bottom: 20px;
    }
    .el-col {
      border-radius: 4px;
    }
    .grid-content {
      text-shadow:1px 1px 1px #000;
      color:white;
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

    .input-with-select{
        background-color: #fff;
  }
  .back{
    z-index: -1;
    left: 0px;
    top: 0px;
    position:absolute;
    width: 100%;
    height: 155px;
    background:url(https://i0.hdslb.com/bfs/archive/22650682fd25a4a5aa96dd9ef53190c6b8d54912.png) no-repeat -200px;
    
  }
  #type{
    width:1198px;
    height:526px;
    background-color: gray;
    margin:0 auto;
  }
  .con{
    margin: 0; padding: 0;
    text-align: center;
    list-style-type: none;;
    width:200px;
    height:68px;
    border:1px solid;
  }
  .con li{
    float: left;
    width: 48px;
    height: 66px;
    display:block;
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
  .item-type{
    width: 73px;
    height: 34px;
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

  a {text-decoration:none;color:#000} 
  body{
    font:14px -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif
  }

</style>
