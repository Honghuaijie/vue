<template>
  <div >
    <h2 @click="showName">学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <h2>学生年龄:{{age}}</h2>
  </div>
</template>

<script>
//引入一个混入
import {mixin} from '../mixin'

export default {

    name: 'Student',
    data() {
      return {
        name: '张三',
        sex: '男',
        age:18
      }
    },
    mounted(){
      console.log('student');
    },
    mixins:[mixin]
  
}
</script>

