<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data (){
    return{
      header_show:true,
      isheader:false,
      key:null
    }
  },
  watch: {
		// 方法1
    '$route' (to, from) { //监听路由是否变化
      if(to.path == "/" || to.path == "/rank"){ //跳转到哪个页面
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

<style>
</style>
