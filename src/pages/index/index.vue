<template>
  <div>
    <i-input :value="userInfo.nickName" title="收货人" autofocus placeholder="名字" @inputchange="nameChange"/>
    <i-button type="primary" @click="toLogin">去登陆页</i-button>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  import button from '@/iview/components/button/button'
  import input from '@/iview/components/input/input'

  export default {
    data () {
      return {
        motto: 'Hello miniprograme',
        userInfo: {
          nickName: 'mpvue',
          avatarUrl: ''
        }
      }
    },

    components: {
      'i-button': button,
      'i-input': input
    },
    computed: {
      ...mapState(['count'])
    },
    methods: {
      bindViewTap () {
        const url = '../logs/main'
        if (mpvuePlatform === 'wx') {
          mpvue.navigateTo({ url })
          // mpvue.switchTab({ url })
        } else {
          mpvue.navigateTo({ url })
        }
      },
      toLogin () {
        mpvue.navigateTo({ 
          url: '../login/main'
        })
      },
      nameChange (value) {
        console.log(value)
        this.userInfo.nickName = value 
      },
      ...mapActions(['increment', 'decrement']),
    },

    created () {
      // let app = getApp()
      // console.log(this.$store.state)
    }
  }
</script>

<style scoped>

</style>
