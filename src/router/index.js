import Vue from 'vue'


import home from "../page/home/home.vue"
import videodetails from "../page/video/videodetails.vue"
import Router from 'vue-router'
Vue.use(Router)



export default new Router({
  routes: [
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
