<template>
  <div class="student">
    <h2 >学生姓名:{{name}}</h2>
    <h2 >学生性别:{{sex}}</h2>
    <h2> number的值为{{ number }}</h2>
    <button @click="add">点我number+1</button>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑hhj事件</button>
    <button @click="death">销毁当前student组件的实例</button>
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
        number:0
      }
  },
  methods: {
    add() { 
      console.log("add被调用了");
      this.number++
    },
    sendStudentName() {
      // 触发student组件实例对象身上的atguigu事件
      this.$emit('hhj', this.name, 600, 700, 800)
      this.$emit('demo')
    },
    // 解绑事件
    unbind() {
      // this.$off('hhj') //解绑一个自定义事件
      // this.$off(['hhj','demo']) //解绑多个自定义事件
      this.$off()   //解绑所有自定义事件
    },
    death() {
      this.$destroy()  //销毁了当前student组件的实例，
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