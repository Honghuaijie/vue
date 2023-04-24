<template>
  <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
        <button @click="searchUsers">Search</button>
      </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Search',
  data() {
    return {
        keyWord:''
      }
  },
  methods: {
    searchUsers() {
      // 请求前
      this.$bus.$emit('updataListData',{isFirst:false,isLoading:true,msg:'',items:[],noData:false})
      // 这里GitHub后端使用了cors解决了跨域问题，所以直接请求就行了
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        response => {
          console.log("请求成功了");
          // 请求成功 有两种情况 :数组长度为0，或者不为0
          if (response.data.items.length != 0) {
            this.$bus.$emit('updataListData',{isLoading:false,msg:'',items:response.data.items,noData:false})
          } else {
            console.log(111);
            this.$bus.$emit('updataListData',{isLoading:false,msg:'',items:[],noData:true})
            
          }
          this.keyWord=''
        },
        error => {
          console.log("请求失败了", error.message);
          // 请求错误
          this.$bus.$emit('updataListData',{isLoading:false,msg:error.message,items:[],noData:false})

        }
      )
    }
  }
  
    
}
</script>
