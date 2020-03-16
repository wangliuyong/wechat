<template>
  <div class="counter-warp">
   登陆注册
  </div>
</template>

<script>

// import { mapState, mapActions } from 'vuex'

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
  computed: {
    // ...mapState(['count'])
  },
  methods: {
  //  ...mapActions(['increment', 'decrement']),
  },
  created() {
    // console.log(this.$store)
    // console.log(this.$httpWX)
  },
}
</script>

<style lang="less">
</style>
