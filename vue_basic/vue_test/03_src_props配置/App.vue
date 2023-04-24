<template>
    <div>
      <!-- 给属性加上v-bind和v-model 你们双引号里面的就是一个表达式了 -->
      <Student name="张三" sex="女" :age="18" ></Student>
    </div>
</template>

<script>
import Student from './components/Student.vue'
export default {
    name: 'App',
    components:{Student}

    
}
</script>

<style>

</style>