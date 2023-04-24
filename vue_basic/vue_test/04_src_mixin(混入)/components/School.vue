<template>
  <div >
    <h2 @click="showName">学校名称:{{name}}</h2>
    <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
import {mixin} from '../mixin'
export default {
    name: 'School',
    data() {
      return {
        name: '南科院',
        address:'南京'
        }
  },
  mounted(){
      console.log('School');
    },
   mixins:[mixin]
  
}
</script>

