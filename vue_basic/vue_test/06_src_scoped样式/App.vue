<template>
    <div>
      <!-- 给属性加上v-bind和v-model 你们双引号里面的就是一个表达式了 -->
      <Student></Student>
      <School></School>
    </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'
export default {
    name: 'App',
    components:{Student,School}

    
}
</script>


<style>
.test{
  color:blue
}
</style>