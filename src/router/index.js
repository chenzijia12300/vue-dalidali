import Vue from 'vue'
import home from "../page/home/home.vue"
import rank from "../page/home/rank.vue"
import videodetails from "../page/video/videodetails.vue"
import login from "../page/login/login.vue"
import comments from "../components/comment/Comment.vue"
import dynamic from '../page/user/dynamic.vue'
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
    },
    {
      path: '/comments',
      name: 'comments',
      component: comments
    },{
      path: '/dynamic',
      name: 'dynamic',
      component: dynamic
    },{
      path:'/rank',
      name:'rank',
      component: rank
    }
  ]
})
