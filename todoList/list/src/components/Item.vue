<template>

  <transition
  appear
  name="animate__animated animate__bounce"
  enter-active-class="animate__backInLeft"
  leave-active-class="animate__lightSpeedOutRight"
  >
    <tr >
      <th scope="row">
        <input type="checkbox" :checked="todo.statu" @change="handleCheck(todo.id)">
      </th>
      <td style="width:250px">
        <!-- updataStatu为true显示原值，updata为假显示编辑模式 -->
        <span v-show="updataStatu">{{ todo.title }}</span>
        <input v-show="!updataStatu" ref="inputTitle" type="text" :value="todo.title" @blur="updataTodo(todo.id)">
      </td>
      <td>
        <button class="btn btn-primary" @click="removeTodo(todo.id)">删除</button>
        <button  v-show="updataStatu"  class="btn btn-warning" @click="handleUpdata">修改</button>

      </td>
    
   </tr>
  </transition>
  
</template>

<script>
export default {
  name: 'Item',
  props: ['todo'],
    data() {
      return {
        updataStatu:true
      }
  },
  methods: {
    // 点击删除按钮
    removeTodo(id) {
      this.$bus.$emit('removeTodo',id)
    },
    //点击修改按钮，显示输入框
    handleUpdata() {
      this.updataStatu = false
      this.$nextTick(function () {
        this.$refs.inputTitle.focus()
      })
    },
    // 修改数据
    updataTodo(id) {
      this.updataStatu = true
      this.$bus.$emit('updataTodo',{id:id,title:this.$refs.inputTitle.value})
    },
    // 点击勾选框
    handleCheck(id) {
      this.$bus.$emit('checkTodo',id)
    }
  }
    

    
}
</script>

<style scoped>
/* 列表样式 */
/* .todoList{
 margin-top:10px ;
 border: 1px solid gray;
}

.todoList .removeButton,
.todoList .updataButton{
  float: right;
} */
</style>