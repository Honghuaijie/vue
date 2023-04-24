<template>
    <!-- 组件的结构 -->
    <div class = "demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showInfo"> 点我输出学校名称 </button>
    </div>
</template>

<script>
    //组件的交互相关代码（数据、方法等）
    export default {
        name:'SchoolInfo',
        data() {
            return {
                name: '张三',
                address: '南京'
            }
        },
        methods: {
            showInfo() {
                console.log(this.name)
            }
        }
    }
</script>

<style>
    /* 组件的样式 */
    .demo {
        background-color: pink;
    }
</style>