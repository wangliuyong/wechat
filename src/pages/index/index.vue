<template>
  <div>
    <i-tabs v-model="current" v-on:change="handleChange">
      <i-tab item-key="tab1" title="行业动态"></i-tab>
      <i-tab item-key="tab2" title="招标信息"></i-tab>
      <i-tab item-key="tab3" title="懂微资讯"></i-tab>
    </i-tabs>
    <div class="message-container" v-if="current === 'tab1'">
      <i-button type="primary" @click="toLogin">去注册页</i-button>
      <i-button type="primary" @click="toPay">去支付页</i-button>
    </div> 
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  import button from '@/iview/components/button/button'
  import input from '@/iview/components/input/input'
  import iTabs from 'iview-mpvue/dist/components/tabs/tabs'
  import iTab from 'iview-mpvue/dist/components/tab/tab'

  export default {
    data () {
      return {
        current: 'tab1',
        userInfo: {
          nickName: 'mpvue',
          avatarUrl: ''
        }
      }
    },

    components: {
      'i-button': button,
      'i-input': input,
      'i-tabs': iTabs,
      'i-tab': iTab
    },
    computed: {
      ...mapState(['count'])
    },
    methods: {
      toLogin () {
        mpvue.navigateTo({ 
          url: '../login/main'
        })
      },
      nameChange (value) {
        this.userInfo.nickName = value 
      },
      toPay(){
        
      },
      ...mapActions(['increment', 'decrement']),
       handleChange(val) {
        
          console.log(val)
          console.log(this.current)
      },
      handleChangeScroll(val) {
          // todo
      }
    },

    created () {
      // let app = getApp()
      // console.log(this.$store.state)
    }
  }
</script>

<style scoped>

</style>
