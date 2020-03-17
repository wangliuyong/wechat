import Vue from 'vue'
import App from './index'

import 'iview-mpvue/dist/components/tabs/style/css'
import 'iview-mpvue/dist/components/tab/style/css'

import store from '../../store/store'
// 重要，否则会出现辅助函数不能使用问题
Vue.prototype.$store = store

// add this to handle exception
Vue.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err)
  }
}

const app = new Vue(App)
app.$mount()
