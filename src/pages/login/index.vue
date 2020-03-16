<template>
  <div >
   login
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'


export default {
  data () {
    return {
      account: '',
      password: ''
    }
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapActions(['increment', 'decrement']),
  },
  created () {
    // let app = getApp()
    // console.log(this.$store.state)
  }
}
</script>

<style>

</style>
