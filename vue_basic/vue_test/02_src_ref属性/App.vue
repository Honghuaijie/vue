<template>
    <div>
        <h2 v-text="msg" id="h2" ref="h2"></h2>
        <button @click="showInfo" > 点我显示上方的DOM元素</button>
        <School ref="sch"></School>
        <School ref="sch1"></School>
    </div>
</template>

<script>
import School from './components/School.vue'
export default {
    name: 'App',
    components:{School},
    data() {
        return {
            msg:'欢迎您'
        }
    },
    methods: {
        showInfo() {
            // 这里的this是App的组件实例对象
            // console.log(document.getElementById("h2"));
            console.log(this.$refs.sch);   //获取的是Scholl组件的实例对象(VC)
            console.log(this.$refs.h2);   //真实的DOM元素
        }
    }
    
}
</script>

<style>

</style>