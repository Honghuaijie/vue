<template>
  <div>
    <h1>人员列表</h1>
    <h1 style="color:red">Count组件求和为：{{ $store.state.sum }}</h1>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="personAdd">添加</button>
    <ul>
        <li v-for="person in $store.state.personList" :key="person.id">{{person.name}}</li>
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
    methods: {
        personAdd() {
            const personObj = { id: nanoid(), name: this.name }
            this.$store.commit('ADD_PERSON',personObj)
            this.name=''
        }
    }
}
</script>

<style>

</style>