<template>
  <div >
    <h1>当前求和为：{{ sum }}</h1>
    <select v-model.number="addnumber" >
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
export default {
    name: 'Count',
    props: ['title'],
    data() {
        return {
            sum: 0,   //当前的和
            addnumber:2  //用户选择的数字
        }
    },
    methods: {
        increament(){
            this.sum +=this.addnumber
        },
        decreament(){
            this.sum -=this.addnumber
        },
        increamentOdd(){
            if(this.sum %2) this.sum +=this.addnumber
        },
        increamentWait(){
            setTimeout(() => {
                this.sum +=this.addnumber
            },500)
        },
    }
   
}
</script>

<style>
button{
    margin-left: 5px;
}

</style>

