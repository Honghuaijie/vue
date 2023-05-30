<template>
  <div>
    <h1>人员列表</h1>
    <h1 style="color:red">Count组件求和为：{{ sum }}</h1>
    <h3>第一个人员的名字是{{ firstName }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="personAdd">添加</button>
    <button @click="personAddWang">添加一个性王的学生</button>
    <button @click="personAddServer">添加一个随机的学生</button>
    <ul>
        <li v-for="person in personList" :key="person.id">{{person.name}}</li>
    </ul>

  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name: 'Person',
    data() {
        return {
            name:''
        }
    },
    computed: {
        sum() {
            return this.$store.state.countAbout.sum
        },
        personList() {
            return this.$store.state.personAbout.personList
        },
        firstName() {
            return this.$store.getters['personAbout/getFirstName']
        }
    },
    methods: {
        personAdd() {
            const personObj = { id: nanoid(), name: this.name }
            this.$store.commit('personAbout/ADD_PERSON',personObj)
            this.name=''
        },
        personAddWang() {
            const personObj = { id: nanoid(), name: this.name }
            this.$store.dispatch('personAbout/addWang',personObj)
            this.name=''
        },
        personAddServer() {
            this.$store.dispatch('personAbout/addPersonServe')
        }
    },
    mounted() {
        console.log(this.$store);
    }
}
</script>

<style>

</style>