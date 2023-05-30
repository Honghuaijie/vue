<template>
  <div class="container">
    <!-- search -->
    <Search></Search>
    <!-- list -->
    <List></List>
  </div>

</template>

<script>

import Search from './components/Search'
import List from './components/List'
export default {
  components: { Search , List},
	name: 'App',
	
}
</script>


<style>
 
</style>