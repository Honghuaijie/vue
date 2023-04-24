<template>
  <div class="school">
    <h2>欢迎来到:{{name}}</h2>
    <h2>地点:{{address}}</h2>
  </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            name: '南京科技',
            address:'南京'
        }
    },
}
</script>

<style>
    .school{
        background-color: pink;
    }
</style>