<template>
  <div class="student">
    <h2 >学生姓名:{{name}}</h2>
    <h2 >学生性别:{{sex}}</h2>
    <button @click="sendStudentName">点击我传送姓名给school</button>
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
  methods: {
    sendStudentName() {
      // 调用bus的data事件，用来传输数据
      this.$bus.$emit('data',this.name)
    }
  }
  

  
}
</script>

<style  scoped>
  .student{
    background-color: pink;
    padding: 5px;
    margin-top:30px ;
  }
</style>