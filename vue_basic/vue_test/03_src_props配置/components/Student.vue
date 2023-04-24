<template>
  <div >
    <h1>{{ msg }}</h1>
    <h2>学生信息:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <h2>学生年龄:{{myAge+1}}</h2>
    <button @click="updataAge">点我年龄加1</button>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
      return {
        msg: '我是一名南科院的学生',
        myAge:this.age
        }
  },
  methods: {
    updataAge() {
      this.myAge++
    }
  },
  //可以实现组件复用但是数据是动态的
  // props的优先级比data高
  props:['name','age','sex']   //简单声明接收
  //接收的同时，对数据的类型进行限制
  // props: {
  //   name: String,
  //   age: Number,
  //   sex:String
  // }

  //接收的同时对数据:进行类型限制+默认值的指定+必要性的限制
  // props: {
  //   name: {
  //     type: String, //name的类型
  //     required:true  //名字是必要的
  //   },
  //   age: {
  //     type: Number,
  //     default:99 //默认值
  //   },
  //   sex: {
  //     type: String,
  //     required:true
  //   }
  // }
}
</script>

