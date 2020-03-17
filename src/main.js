import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store/store'

import WXrequest from './utils/wx-request'
import 'mpvue-weui/src/style/weui.css';

Vue.prototype.$httpWX = WXrequest




Vue.use(Vuex)

Vue.prototype.$store = store

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})

app.$mount()