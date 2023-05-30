<template>
  <div >
    <Count></Count>
    <hr>
    <Person></Person>
  </div>
</template>

<script>

import Count from './components/Count'
import Person from './components/Person'
export default {
  components: { Count,Person},
  name: 'App',
  
}
</script>
