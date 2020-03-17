<script>
import { mapState, mapActions } from "vuex";
import user from "./api/user";

export default {
  created() {
    this.checkoutLogin();
  },
  methods: {
    ...mapActions(["setLogin","setOpenid"]),
    // 检查登陆状态
    checkoutLogin() {
      user.getInfo().then(
        res => {
          console.log(res);
          if (res.code === 1 && res.user.login) {
            this.setLogin({ isLogin: true })

          } else {
            this.setLogin({ isLogin: false })
            // 没有登陆跳到登陆页面
            wx.navigateTo({ url: "/pages/login/main" })
          }
        },
        res => {
          this.setLogin({ isLogin: false })
          console.log(this.$store)
        }
      );

      wx.login({
        success(res) {
          if (res.code) {
            //发起网络请求
            user.login({code: res.code}).then((res) => {
              console.log(res);
              this.setOpenid({openid: res.openid});
            },(res) => {
              
            })
          } else {
            console.log(res.errMsg);
          }
        }
      });
    }
  }
};
</script>

<style lang="less">
</style>
