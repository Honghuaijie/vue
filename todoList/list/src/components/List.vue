<template>
  <div class="list">
    <div class="listTop">
      <el-input
        placeholder="请输入内容"
        v-model="text"
        clearable>
      </el-input>
      <el-button type="primary" style="margin-left: 20px; height: 40px;"  @click="addTodo">添加</el-button>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th scope="col" style="width:50px">
            <input v-show="todoList.length !=0" type="checkbox"  v-model="AllCheck"  >
            <input v-show="todoList.length === 0" type="checkbox" disabled  >
          </th>
          <th scope="col">事情</th>
          <th scope="col " class="caoz"  >操作</th>
        </tr>
      </thead>
      <tbody>
        <Item
        v-for="todo in todoList" :key="todo.id"
        :todo="todo"
      >
    </Item>
      </tbody>
    </table>
    

    
   
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import Item from './Item.vue'
export default {
  name: 'List',
  components:{Item},
    data() {
      return {
        todoList: JSON.parse(localStorage.getItem('todoList')) || [],
        text:''
      }
  },
  methods: {
    // 增加功能
    addTodo() {
      if (this.text) {
        // 生成对象
        const todo = {id:nanoid(),title:this.text,statu:false}
        this.todoList.unshift(todo)
        this.text=''
      } else {
        alert('待办事项不能是空')
      }
      
    },
    removeTodo(id) {
      console.log(id);
      this.todoList = this.todoList.filter(todo => todo.id !=id )
    },
    // 根据传入的id和value值，进行修改数据
    updataTodo(todoObj) {
      this.todoList.forEach(todo => {
        if(todo.id === todoObj.id) todo.title=todoObj.title
      });
    },
    checkTodo(id) {
      this.todoList.forEach(todo => {
        if(todo.id === id) todo.statu=!todo.statu
      })
    }

  },
  mounted() {
    this.$bus.$on('removeTodo', this.removeTodo)
    this.$bus.$on('updataTodo', this.updataTodo)
    this.$bus.$on('checkTodo', this.checkTodo)
  },

  beforeDestroy() {
    this.$bus.$off('removeTodo')
    this.$bus.$off('updataTodo')
    this.$bus.$off('checkTodo')
  },
    
  watch: {
    todoList: {
      deep: true,
      handler(value) {
          localStorage.setItem('todoList',JSON.stringify(value))
        }
      }
  },
  computed: {
    AllCheck: {
      get() {
        const doneList = this.todoList.reduce((pre, todo) => pre + (todo.statu ? 1 : 0), 0)
        console.log(doneList === this.todoList.length && this.todoList.length!=0);
        return doneList === this.todoList.length && this.todoList.length!=0
      },
      set(value) {
        
        this.todoList.forEach(todo => {
            todo.statu = value
          })
        }
      
    }
    }
}
</script>
 
<style >
/* 整个大的列表 */
.list {
  position: absolute;
  left: 40%;
  margin-top: 50px;
}

/* 输入框样式 */
.listTop {
  display: flex;
  width: 400px;
  height: 30px;
  margin-bottom: 20px;
}

.caoz{
  text-align: center;
}




</style>