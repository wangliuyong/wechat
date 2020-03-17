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
   <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
   <i-button bind:click="handleClick">默认按钮</i-button>
<i-button bind:click="handleClick" type="error" long="true">联通两边按钮</i-button>
<i-button bind:click="handleClick" type="primary">Primary</i-button>
<i-button bind:click="handleClick" type="ghost">Ghost</i-button>
<i-button bind:click="handleClick" type="info">Info</i-button>
<i-button bind:click="handleClick" type="success">Success</i-button>
<i-button bind:click="handleClick" type="warning">Warning</i-button>
<i-button bind:click="handleClick" type="error">Error</i-button>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import card from '@/components/card'
  import button from '@/iview/components/button/button'

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
      card,
      'i-button': button
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
      handleClick (ev) {
      
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
