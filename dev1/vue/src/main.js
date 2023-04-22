// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import "@/assets/bootstrap-3.4.1-dist/css/bootstrap.css"
import "@/assets/bootstrap-3.4.1-dist/js/jquery.slim.min.js"
import "@/assets/bootstrap-3.4.1-dist/js/bootstrap.js"
import "@/assets/iconfont/font_3652118_l8wphtrngy/iconfont.css"
import "@/assets/iconfont/font_3652118_l8wphtrngy/iconfont.ttf"
import "@/assets/iconfont/font_1/iconfont.css"
import "@/assets/iconfont/font_2/iconfont.css"
import "@/assets/iconfont/font_3/iconfont.css"
import "@/assets/iconfont/font_4/iconfont.css"
import "@/assets/iconfont/font_5/iconfont.css"
import "@/assets/iconfont/font_6/iconfont.css"
import "@/assets/iconfont/font_7/iconfont.css"
import "@/assets/iconfont/font_8/iconfont.css"
import "@/assets/iconfont/font_10/iconfont.css"
import "@/assets/iconfont/font_11/iconfont.css"
import "@/assets/iconfont/font_12/iconfont.css"
import "@/assets/iconfont/font_13/iconfont.css"
import "@/assets/iconfont/font_14/iconfont.css"
import "@/assets/css/style.css"


import ElementUI from 'element-ui' //element-ui的全部组件

Vue.use(ElementUI) //使用elementUI

import axios from 'axios'
Vue.prototype.$axios=axios
axios.defaults.baseURL="http://localhost:8080/web22/"
Vue.config.productionTip = false


import BaiduMap from 'vue-baidu-map';
Vue.use(BaiduMap, {
  ak: 'haDYWlM8tEdoDO0r4WRTIieBXIVsthCK'
})

import store from '@/components/Store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',

});

//加载页面停留在最上面
// router.afterEach((to,from,next)=>{
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop=0;
// })
