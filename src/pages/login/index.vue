<template>
  <div class="counter-warp">
    <i-button bind:click="handleClick" type="success">登陆注册</i-button>
   
  </div>
</template>

<script>
//import { mapState, mapActions } from 'vuex'
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
    'i-button': button
  },
  computed: {
  },
  methods: {

  },
  created() {
  
  },
}
</script>

<style lang="less">
</style>
