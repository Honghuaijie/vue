<template>
  <div class="container">
    <!-- 这里的title传的就是字符串，所以不需要加: -->
    <Category title="美食" >
      <img slot="center" src=".././public/img/1.jpg" alt="">
      <a slot="footer" href="#">更多美食</a>
    </Category>
    <Category title="游戏" >
      <li slot="center"  v-for="(item,index) in games" :key="index">{{item}}</li>
      <div slot="footer" class="foot">
        <a slot="footer" href="#">单击游戏</a>
        <a slot="footer" href="#">网络游戏</a>
      </div>
    </Category>
    <Category title="电影" >
      <video slot="center"  controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <template v-slot:footer>
        <div  class="foot">
          <a slot="footer" href="#">经典</a>
          <a slot="footer" href="#">热门</a>
          <a slot="footer" href="#">推荐</a>
        </div>
        <h1 >欢迎前来观影</h1>
      </template>
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
 .container,.foot{
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