<template>
  <div class="counter-warp">
    <i-input :value="userInfo.nickName" title="昵称" autofocus placeholder="名字" @inputchange="nameChange"/>
    <i-button @click="register" type="primary" size="small">注册</i-button>
  </div>
</template>

<script>
//import { mapState, mapActions } from 'vuex'
import button from '@/iview/components/button/button'
import input from '@/iview/components/input/input'

export default {

  data (){
    return {
     userInfo:{
       nickName:'',
       roleId:0
     }
    }
  },
  components: {
    'i-button': button,
    'i-input': input
  },
  computed: {},
  methods: {
    register(){
      console.log(this.userInfo)
    },
    nameChange(value){
      this.userInfo.nickName = value;
    }
  },
  created() {}
};
</script>

<style lang="less">
</style>
