<template>
  <div class="school">
    <h2>学校名称:{{name}}</h2>
    <h2 >学校地址:{{address}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: 'School', 
    data() {
      return {
        name: '南科院nankeyuan',
        address:'南京'
        }
  },
  mounted() {
    // 订阅消息
    this.pubId = pubsub.subscribe('hello',  (msgName,data) => {
      console.log("有人发布了hello消息，hello消息的回调执行了", msgName, data);
      console.log(this);
    })
  },
  beforeDestroy() {
    // 取消订阅
    pubsub.unsubscribe(this.pubId);
  }
 

  
}
</script>


<style scoped  lang="less">
  .school {
    background-color:skyblue;
    padding: 5px;
  }
</style>