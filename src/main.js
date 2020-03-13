import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store/store'

Vue.use(Vuex)

// Vue.prototype.$store = store

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})

app.$mount()