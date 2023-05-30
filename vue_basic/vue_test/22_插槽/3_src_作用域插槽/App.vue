<template>
  <div class="container">
    <Category title="游戏" >
      <template slot-scope="hhj">
        <ul>
          <li v-for="(item,index) in hhj.games" :key="index">{{item}}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏" >
      <template slot-scope="{games,msg}">
        <ol>
          <li v-for="(item,index) in games" :key="index">{{item}}</li>
        </ol>
        <h3>{{ msg }}</h3>
      </template>
    </Category>

    <Category title="游戏" >
      <template slot-scope="hhj">
      
          <h4 v-for="(item,index) in hhj.games" :key="index">{{item}}</h4>
       
      </template>
    </Category>
  </div>
</template>

<script>

import Category from './components/Category'
export default {
  components: { Category },
  name: 'App',
  
	
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