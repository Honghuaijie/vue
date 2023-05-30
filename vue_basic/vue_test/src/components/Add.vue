<template>
  <div>
    <input type="text" placeholder="请输入学生信息" v-model="inputValue" @keyup.enter="addStudent(inputValue)">
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'Add',
    data() {
        return {
            inputValue:''
        }
    },
    methods: {
        // addStudent是要生成在本组件的方法，addStudent是action中已经定义的方法
        // addStudent(name) {
        //     // console.log(name);
        //     this.$store.dispatch('addStudent',name)
        // }
        ...mapActions({ addStudent:'addStudent'})
    }
}
</script>

<style>

</style>