<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 给插槽传入一组数据，谁使用这个插槽就把数据给谁 -->
    <slot :games="games" msg="你好">我是一些默认值，当使用者没有传递具体结构时1，我会出现</slot>
  </div>
</template>

<script>
export default {
    name: 'Category',
    props: ['title'],
    data() {
        return {
            games: ['红色警戒', '穿越火线', '劲舞团'],
        }
    },
} 
</script>

<style scoped>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    ul{
        
    }
    h3{
        text-align: center;
        background-color: orange;
    }
   
</style>