<template>
  <div class="counter-warp">
     <i-input :value="value1" title="收货人" :autofocus="true" placeholder="名字" @change="xxx"/>
     <div class="i-input i-cell">
        <view class="i-input-title">xxxxx</view>
        <input class="i-input-input" v-model="user.value2"/>
     </div>
    
    <i-button @click="handleClick" type="warning">Warning</i-button>
   
  </div>
</template>

<script>
//import { mapState, mapActions } from 'vuex'

import iInput from 'iview-mpvue/dist/components/input/input'
  


export default {

  data (){
    return {
      value1:454454,
     user:{
       value1:2222,
       value2:3333
     }

    }
  },
  components: {
    'i-input': iInput
  },
  computed: {},
  methods: {
    handleClick(name){
      console.log(this.value1)
      console.log(this.user.value2)
    }
  },
  created() {}
};
</script>

<style lang="less">
</style>
