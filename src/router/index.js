import Vue from 'vue'
import home from "../page/home/home.vue"
import videodetails from "../page/video/videodetails.vue"
import login from "../page/login/login.vue"
import Router from 'vue-router'
import axios from 'axios'
Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/details',
      name: 'videodetails',
      component: videodetails
    },
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
