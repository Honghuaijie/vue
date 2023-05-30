<template>
  <el-container>
    <el-header>
      <Top></Top>
    </el-header>
    <el-main>
      <List></List>
    </el-main>
  </el-container>
</template>

<script>
import List from './components/List.vue'
import Top from './components/Top.vue'
export default {
  name: 'App',
  components: {
    List,Top
  },

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>

