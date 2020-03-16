<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['count'])
  },
  methods: {
   ...mapActions(['increment', 'decrement']),
  },
  created() {
    // console.log(this.$store)
    // console.log(this.$httpWX)
  },
}
</script>

<style lang="less">
</style>
