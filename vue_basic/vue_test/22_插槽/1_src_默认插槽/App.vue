<template>
  <div class="container">
    <!-- 这里的title传的就是字符串，所以不需要加: -->
    <Category title="美食" >
      <img src=".././public/img/1.jpg" alt="">
    </Category>
    <Category title="游戏" >
      <li v-for="(item,index) in games" :key="index">{{item}}</li>
    </Category>
    <Category title="电影" >
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
  </div>

</template>

<script>

import Category from './components/Category'
export default {
  components: { Category },
  name: 'App',
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾'],
      games: ['红色警戒', '穿越火线', '劲舞团'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》']
    }
  },
	
}
</script>


<style>
 .container{
  display:flex;
  justify-content:space-around;
 }
 video{
  width: 100%;
 }
 img{
      width: 100%;
  }
</style>