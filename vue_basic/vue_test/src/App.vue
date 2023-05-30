<template>
  <div class="App">
    <h2>学生信息</h2>
    <Add></Add>
    <List></List>
  </div>
</template>

<script>
import Add from './components/Add'
import List from './components/List'
export default {
  name: 'App',
  components: {
    Add,List
  }

}
</script>

<style>
.App{
  margin-left: 300px ;
  
}
/* h2{
  position: relative;
  left: 40%;
} */

</style>
