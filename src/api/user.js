import  request from '../utils/wx-request'


const PATH = {
  LOGIN: '/login',
  GET_INFO: '/hi'
}

export default {
  login({code}) {
    return request.get({
      url: PATH.LOGIN,
      data: {code}
    })
  },
  getInfo() {
    return request.get({url: PATH.GET_INFO})
  }
}