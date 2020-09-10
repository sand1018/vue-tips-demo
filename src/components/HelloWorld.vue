<template>
  <div class="hello">
      <button @click="mClick">打开提示</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
     
    }
  },
  methods:{
    mClick(){
      this.$tips.success('成功提示！！！！！！！！！',2000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
