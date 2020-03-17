<script>
import { mapState, mapActions } from "vuex";
import user from "./api/auth";

export default {
  created() {
    this.checkoutLogin()
  },
  methods:{
    ...mapActions(['setLogin']),
    // 检查登陆状态
    checkoutLogin(){
      user.getInfo().then(res => {
        if(res.code === 1 && res.user.login){
          this.setLogin({isLogin: true})
        } else {
          this.setLogin({isLogin: false})
          // 没有登陆跳到登陆页面
          wx.navigateTo({url: '/pages/login/main'})
        }

        // mpvue.reLaunch({url:'/pages/index/main'})
        }, (res) => {
          this.setLogin({isLogin: false})
      });
    }
  }
};
</script>

<style lang="less">
</style>
