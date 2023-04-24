<template>
  <div >
    <h2>学校名称:{{name | mySlice}}</h2>
    <h2>学校地址:{{address}}</h2>
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

  
}
</script>

