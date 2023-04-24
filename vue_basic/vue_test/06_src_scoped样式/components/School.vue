<template>
  <div class="demo">
    <h2 class="abs">学校名称:{{eventNames}}</h2>
    <h2 class="test">学校地址:{{address}}</h2>
  </div>
</template>

<script>
export default {
    name: 'School',
    data() {
      return {
        name: '南科院nankeyuan',
        address:'南京'
        }
  },

  
}
</script>


<style scoped  lang="less">
  .demo {
    background-color:skyblue;
    .abs{
      font-size:50px
    }
  }
</style>