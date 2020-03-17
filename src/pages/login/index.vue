<template>
  <div class="counter-warp">
    <div class="i-input i-cell">
      <view class="i-input-title">用户名</view>
      <input class="i-input-input" v-model="user.value2"/>
    </div>
    <i-button @click="handleClick" type="warning">546454645rning</i-button>
  </div>
</template>

<script>
//import { mapState, mapActions } from 'vuex'
import button from '@/iview/components/button/button'

export default {

  data (){
    return {
     user:{
       value1:2222,
       value2:3333
     }
    }
  },
  components: {
    'i-button': button
  },
  computed: {},
  methods: {
    handleClick(name){
      console.log(this.user.value2)
    }
  },
  created() {}
};
</script>

<style lang="less">
</style>
