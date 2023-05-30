<template>
  <div >
    <h1>当前求和为:{{ sum }}</h1>
    <h1>当前求和*10倍为:{{ bigSum }}</h1>
    <h1>我在{{ school }}，学习{{ subject }}</h1>
    <select v-model.number="number" >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increament">+</button>
    <button @click="decreament">-</button>
    <button @click="increamentOdd">点我奇数在加</button>
    <button @click="increamentWait">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
    name: 'Count',
    props: ['title'],
    data() {
        return {
            number:2  //用户选择的数字
        }
    },
    computed: {
        // 程序员自己写的计算属性
        // sum() {
        //     return this.$store.state.sum
        // },
        // school() {
        //     return this.$store.state.school
        // },
        // subject() {
        //     return this.$store.state.subject
        // },

        // 靠mapstate生成的计算属性，从state中读取数据（对象写法）
        // ...mapState({ sum: 'sum', school: 'school', subject: 'subject' }),

        // 靠mapstate生成的计算属性，从state中读取数据（数组写法）
        ...mapState(['sum','school','subject']),

        //  *******************************************************//

        // bigSum() {
        //     return this.$store.getters.bigSum
        // },
        // 靠mapGetters生成的计算属性，从Getters中读取数据（对象写法）
        // ...mapGetters({ bigSum: 'bigSum' })
        // 靠mapGetters生成的计算属性，从Getters中读取数据（数组写法）
        ...mapGetters(['bigSum'])

    },
    methods: {
        // commit对应的是mutation。dispatch对应的是action
        increament(){
            this.$store.commit('JIA',this.number)
        },
        decreament(){
            this.$store.commit('JIAN',this.number)
        },
        increamentOdd() {
            this.$store.dispatch('jianOdd',this.number)
        },
        increamentWait() {
            this.$store.dispatch('jianWait',this.number)
        },
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

