<template>
  <div >
    <h2 @click="hello">学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <input type="text" v-fbind:value="name">
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

