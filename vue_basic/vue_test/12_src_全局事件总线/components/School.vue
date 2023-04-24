<template>
  <div class="school">
    <h2>学校名称:{{name}}</h2>
    <h2 >学校地址:{{address}}</h2>
  </div>
</template>

<script>
export default {
  name: 'School', 
    data() {
      return {
        name: '南科院nankeyuan',
        address:'南京'
        }
  },
  mounted() {
    // 在bus这个傀儡组件上定义一个自定义事件，用来接受数据
    this.$bus.$on('data', (data) => {
      console.log("学生姓名为：",data);
    });
  },
  //这里为什么不用destroy，因为destroy只能销毁自身的自定义事件，
  //而data事件是在Vue原型上定义的
  beforeDestroy() {
    this.$bus.$off('data');
  }

  
}
</script>


<style scoped  lang="less">
  .school {
    background-color:skyblue;
    padding: 5px;
  }
</style>