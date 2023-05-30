<template>
  <div>
    <div v-for="item in studentList" :key="item.id">
    <span>{{ item.name }}</span>
    <button @click="removeStudent(item.id)">删除</button>
    </div>
  </div>
</template>

<script>
// 验证Vue可以监听state传入的数据嘛
import {mapState,mapMutations} from 'vuex'
export default {
    name: 'List',
    computed: {
        ...mapState(['studentList'])
    },
    methods: {
        ...mapMutations({ setStudentList: 'SETSTUDENTLIST', removeStudent: 'REMOVESTUDENT'})
    },
    watch: {
        // 验证从state中传入的数据，可不可以监听：答案是可以的
        // 我监听studentList将新数据利用mutations进行修改
        studentList: {
            handler(value) {
                console.log(value);
                this.setStudentList(value)

            }
        }
    },
    mounted() {
        console.log(this);
    }
}
</script>

<style>

</style>