<template>
  <div id="app">
    <app-header v-if="header_show" v-bind:class="{'header-box': isheader}" :key="key"></app-header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/head/header'
export default {
  name: 'App',
  data (){
    return{
      header_show:true,
      isheader:false
    }
  },
  components: {
    'app-header':Header
  },
  watch: {
		// 方法1
		'$route' (to, from) { //监听路由是否变化
      if(to.path == "/"){ //跳转到哪个页面
      		console.log(999)
          this.isheader=false
			}else{
          console.log(123)
          this.isheader=true
      }
		}
  }
}
</script>

<style scope>
    /**
        头部布局
     */
    .header-box{
        position: relative;
        background: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    }
</style>
