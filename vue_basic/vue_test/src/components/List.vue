<template>
  <div class="row">
      <!-- 展示用户列表 -->
      <div v-show="infos.items.length" class="card" v-for="item in infos.items" :key="item.id">
        <!-- html_url是当前用户GitHub的主页地址 -->
        <a :href="item.html_url" target="_blank">
          <!-- avatar_url是用户头像 -->
          <img :src="item.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{ item.login }}</p>
      </div>
      <!-- 欢迎语 -->
      <h1 v-show="infos.isFirst">欢迎使用</h1>
      <!-- 加载中 -->
      <h1 v-show="infos.isLoading">加载中</h1>
      <!-- 错误提示 -->
      <h1 v-show="infos.msg">{{ infos.msg }}</h1>

      <!-- 没有数据 -->
      <h1 v-show="infos.noData">没有数据</h1>


</div>
</template>

<script>
export default {
    name: 'List',
    data() {
        return {
          infos: {
            isFirst: true,
            isLoading: false,
            msg: '',
            noData:false,
            items: []    
          }
        }
    },
    mounted() {
        this.$bus.$on('updataListData',this.getUsers)
    },
    methods: {
        getUsers(dataObj) {
            this.infos = {...this.infos,...dataObj}   //将dataobj和info合并，如果属性相同，具体以dataobj为主
        }
    }
}
</script>

<style scoped>
 .album {
    min-height: 50rem; /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
  }

  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>