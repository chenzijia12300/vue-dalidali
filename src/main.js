// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VideoPlayer from 'vue-video-player'
import axios from 'axios' 
import moment from 'moment'
import 'element-ui/lib/theme-chalk/base.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.component(CollapseTransition.name, CollapseTransition)

Vue.use(VideoPlayer)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios; 
Vue.prototype.COMMENT_URL=process.env.API_ROOT+"commentservice/"
Vue.prototype.USER_URL=process.env.API_ROOT+"userservice/"
Vue.prototype.VIDEO_URL=process.env.API_ROOT+"videoservice/"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
//全局过滤器
Vue.filter('dateFmt', (input, formatString = "YYYY-MM-DD") => {
  if(typeof(input)=="string"){
    return input;
  }
  //es5函数参数设置默认值
  //const lastFormatString = formatString || ''

  
   // moment(input) 把时间字符串转成时间对象
   // format(formatString) 把时间对象，按照指定格式，格式化成符合条件的字符串
  return moment(input).format(formatString) 
})