<template>
  <div class="demo">
    <h2 >学生姓名:{{name}}</h2>
    <h2 class="test">学生性别:{{sex}}</h2>
  </div>
</template>

<script>
//引入一个混入

export default {

    name: 'Student',
    data() {
      return {
        name: '张三',
        sex: '男',
      }
    },

  
}
</script>

<style  scoped>
  .demo{
    background-color: pink;
  }
</style>