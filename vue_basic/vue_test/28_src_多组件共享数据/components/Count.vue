<template>
  <div >
    <h1>当前求和为:{{ sum }}</h1>
    <h1>当前求和*10倍为:{{ bigSum }}</h1>
    <h1>我在{{ school }}，学习{{ subject }}</h1>
    <h1 style="color:red">Person组件的总人数是{{ personList.length }}</h1>
    <select v-model.number="number" >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increament(number)">+</button>
    <button @click="decreament(number)">-</button>
    <button @click="increamentOdd(number)">点我奇数在加</button>
    <button @click="increamentWait(number)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    name: 'Count',
    props: ['title'],
    data() {
        return {
            number:2  //用户选择的数字
        }
    },
    computed: {
        // 靠mapstate生成的计算属性，从state中读取数据（数组写法）
        ...mapState(['sum','school','subject','personList']),
        // 靠mapGetters生成的计算属性，从Getters中读取数据（数组写法）
        ...mapGetters(['bigSum'])

    },
    methods: {
        // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
        ...mapMutations({ increament: 'JIA', decreament: 'JIAN' }),   
        // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
        ...mapActions({ increamentOdd: 'jiaOdd' ,increamentWait:'jiaWait'})
    },
    mounted() {
        const x = mapState({ sum: 'sum', school: 'school', subject: 'subject' })
        console.log(x);
    }
   

   
}
</script>

<style>
button{
    margin-left: 5px;
}

</style>

