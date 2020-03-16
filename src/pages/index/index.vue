<template>
  <div >
    <button @click="increment">+{{count}}</button>
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>

    <a href="/pages/login/main" class="counter">去往Vuex示例页面</a>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import card from '@/components/card'

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
    card
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
    clickHandle (ev) {
    
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
