const baseUrl = 'http://192.168.0.136:8089'
 
function request (url, method = 'get' , data = {}) {
  // wx.showLoading({
  //   title: '加载中' // 数据请求前loading
  // })
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url, // 仅为示例，并非真实的接口地址
      method: method,
      data: data,
      headers: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        // wx.hideLoading()
        resolve(res.data)
      },
      fail: function (res) {
        // wx.hideLoading()
        reject(res)
      },
      complete: function () {
        // wx.hideLoading()
      }
    })
  })
}
 
function get (obj) {
  return request(obj.url, 'GET', obj.data)
}
 
function post (obj) {
  return request(obj.url, 'POST', obj.data)
}
 
export default {
  request,
  get,
  post,
  baseUrl
}