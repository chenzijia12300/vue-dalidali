<template>
  <div id="app">
    <app-header v-if="header_show"></app-header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/head/header'
export default {
  name: 'App',
  data(){
    return{
      header_show:true
    }
  },
  components:{
    'app-header':Header
  },
  methods:{
         //是否显示头部
      header:function (bool) {
        this.header_show = bool;
      }
  }
}
</script>

<style>

</style>
