<template>
    <!-- 组件的结构 -->
    <div >
        <h2>学生名称：{{name}}</h2>
        <h2>学生年龄{{address}}</h2>
    </div>
</template>

<script>
    //组件的交互相关代码（数据、方法等）
    export default {
        name:'Student',
        data() {
            return {
                name: '张三',
                age: 20
            }
        },
        
    }
</script>

