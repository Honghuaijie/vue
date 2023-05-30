<template>
  <h2>我是About</h2>
</template>

<script>
export default {
  name: 'about',
  beforeDestroy() {
      console.log("About组件即将被销毁");
  },
  mounted() {
    console.log("About组件被挂载了");
    window.aboutRoute = this.$route
    window.aboutRouter = this.$router
  }
}
</script>
