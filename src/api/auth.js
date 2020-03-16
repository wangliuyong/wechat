import  request from '../utils/wx-request'


const PATH = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  GET_INFO: ''
}

export default {
  register({username, password}) {
    return request(PATH.REGISTER, 'POST', { username, password })
  },

  login({username, password}) {
    return request(PATH.LOGIN, 'POST', { username, password })
  },

  logout() {
    return request(PATH.LOGOUT)
  },

  getInfo() {
    return request.get({url: PATH.GET_INFO})
  }
}