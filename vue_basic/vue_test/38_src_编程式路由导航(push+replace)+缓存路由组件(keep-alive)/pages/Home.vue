<template>
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul class="nav nav-tabs">
          <li>
            <router-link  class="list-group-item" active-class="active" to="/home/homeNews">News</router-link>
          </li>
          <li>
            <router-link  class="list-group-item" active-class="active" :to="{path:'/home/homeMessage'}">Message</router-link>
          </li>
        </ul>
        <!-- 显示的内容 -->
        <!-- ???? -->
        <!-- 缓存一个 -->
        <!-- News代表的是组件名 -->
        <keep-alive include="News"> 
          <router-view></router-view>
        </keep-alive>

        <!-- 缓存多个 -->
        <keep-alive :include="['News','Message']"> 
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      name: 'home',
      beforeDestroy() {
        console.log("Home组件即将被销毁");
      },
      mounted() {
        console.log("Home组件被挂载了", this.$router);
        window.homeRoute = this.$route
        window.homeRouter = this.$router
    },
   
      
  }
  </script>
  