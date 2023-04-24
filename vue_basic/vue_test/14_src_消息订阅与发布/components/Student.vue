<template>
  <div class="student">
    <h2 >学生姓名:{{name}}</h2>
    <h2 >学生性别:{{sex}}</h2>
    <button @click="sendStudentName">点击我传送姓名给school</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
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
      pubsub.publish('hello',666)
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