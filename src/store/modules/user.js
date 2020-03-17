// import auth from '../../api/auth'
// import { Message } from 'element-ui'
import user from '../../api/user'


const state={
  user:null,
  openid: '',
  isLogin:false
}
const getters={
  userInfo(state){return state.user},
  openId(state){return state.openId},
  isLogin(state){return state.isLogin}
}
const mutations={
  setOpenid(state,payload){
    state.openid=payload.openid;
  },
  setUser(state,payload){
    state.user=payload.user;
  },
  setLogin(state,payload){
    state.isLogin=payload.isLogin;
  }
}
const actions={
  setOpenid({commit},{openid}){
    commit('setOpenId',{openid});
  },
  setUser({commit},{user}){
    commit('setUser',{user});
    commit('setLogin',{isLogin: true});
  },
  setLogin({commit},{isLogin}){
    commit('setLogin',{isLogin});
  }
}

export default {
  state,   
  getters,
  mutations,
  actions
}