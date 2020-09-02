import Vue from 'vue'
import Vuex, { Store } from 'vuex' 
import home from "../page/home/home.vue"
import rank from "../page/home/rank.vue"
import videodetails from "../page/video/videodetails.vue"
import login from "../page/login/login.vue"
import comments from "../components/comment/Comment.vue"
import dynamic from '../page/user/dynamic.vue'
import Router from 'vue-router'
import axios from 'axios'
Vue.use(Router)
Vue.use(Vuex)
const router = new Router({
  routes: [
    {
      path: '/login',
      component: login,
      meta:{
        title:"登录页"
      }
    },
    {
      path: '/details',
      name: 'videodetails',
      component: videodetails,
      meta:{
        title:"视频详细页",
        requiredAuth:true
      }
    },
    {
      path: '/',
      name: 'home',
      component: home,
      meta:{
        title:"默认首页",
        requiredAuth:true
      }
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
  ],
  beforeEach(to,from,next){
    if(to.meta.requiredAuth){
      if(true){
        next();
      }else{
        next({
          name:"login",
          params:{
            redirect:to.fullPath
          }
        })
      }
    }else{
      next();
    }
  }
  
})

export default router

const store = new Vuex.Store({
  state:{
    user:JSON.parse(localStorage.getItem("userData"))
  },
  mutations:{
    setUser(state,newUser){
      state.user = newUser
    }
  }
})
router.beforeEach((to,from,next)=>{
  if(to.path == '/login'){
    if(store.state.user)
    next({
      path:"/"
    })
  }
  console.log(to.meta.requiredAuth);
  if(to.meta.requiredAuth){
    if(store.state.user){
      console.log("有认证");
      next();
    }else{
      console.log("未登录");
      next({
        path:"login",
        params:{
          redirect:to.fullPath
        }
      })
    }
  }else{
    next();
  }
})