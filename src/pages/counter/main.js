import Vue from 'vue'
import App from './index'

import store from '../../store/store'
// 重要，否则会出现辅助函数不能使用问题
Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()


