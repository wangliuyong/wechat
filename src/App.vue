<script>
import { mapState, mapActions } from "vuex";
import user from "./api/auth";

export default {
  created() {
    console.log(user);


    user.getInfo().then(res => {
      console.log("66666", res);
      this.setLogin({isLogin: true})
    }, (res) => {
      this.setLogin({isLogin: false})
    });

    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    // let logs
    // if (mpvuePlatform === 'my') {
    //   logs = mpvue.getStorageSync({key: 'logs'}).data || []
    //   logs.unshift(Date.now())
    //   mpvue.setStorageSync({
    //     key: 'logs',
    //     data: logs
    //   })
    // } else {
    //   logs = mpvue.getStorageSync('logs') || []
    //   logs.unshift(Date.now())
    //   mpvue.setStorageSync('logs', logs)
    // }
  },
  log () {
    console.log(`log at:${Date.now()}`)
  },
  methods:{
    ...mapActions(['setLogin']),
  }
};
</script>

<style>
</style>
