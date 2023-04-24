<template>
    <div class="app">
      <h1 >{{ msg }} 学生的姓名是：{{ studentName }}</h1>
      <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
      <School :getSchoolName="getSchoolName"></School>

      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法) -->
      <!-- <Student @hhj="getStudentName" @demo="m1" ></Student> -->
      <!-- <Student @hhj.once="getStudentName" ></Student> -->

      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法） -->
      <Student ref="student" @click.native="show"></Student>

    </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'
export default {
    name: 'App',
    components:{Student,School},
    data() {
      return {
        msg: '你好啊！',
        studentName:''
      }
  },

  methods: {
    getSchoolName(name) {
        console.log("App收到了学校名:",name);
    },
    // 在methods里面定义的函数，他的this一定是该组件本身的实例对象
    getStudentName(name,...params) {
      console.log("App收到了学生名:", name, params);
        this.studentName=name
    },
    m1() {
      console.log("demo事件被触发了");
    },
    show() {
      alert("student被点击l ")
    }
  },
  mounted() {
    this.$refs.student.$on('hhj',  this.getStudentName)  //绑定自定义事件
    // this.$refs.student.$once('hhj', this.getStudentName)  //绑定自定义事件，只执行一次

    // 设计事件三秒后才可以执行
    // setTimeout(() => {
    //   this.$refs.student.$once('hhj', this.getStudentName)  
    // },3000)
    }

    
}
</script>


<style>
.app{
  background-color: gray;
  padding: 5px;
}
</style>