// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    userInfo: null,
    isLogin: false
  },
  mutations: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    setLogin: (state, payload) => {
      state.isLogin = payload.isLogin
    },
  },
  actions:{
    increment({commit}){
      commit('increment')
    },
    decrement({commit}){
      commit('decrement')
    },
    setLogin({commit}, {isLogin}){
      commit('setLogin', {isLogin})
    }
  }
})

export default store
