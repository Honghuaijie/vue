<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
		<!--MyHeader用这个函数向App传入数据 -->
        <MyHeader :add="add"></MyHeader>
        <MyList :todos="todos" :checkTodo="checkTodo " :delectTodo="delectTodo"></MyList>
        <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearDoneTodos="clearDoneTodos"></MyFooter>
      </div>
    </div>
    
  </div>

</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'
  export default {
    name:'App',
	components: { MyHeader, MyList, MyFooter },
	data() {
		return {
			todos: JSON.parse(localStorage.getItem('todos')) || []
		}
	},
	methods: {
		// 在列表头部添加一个todo
		add(todo) {
			this.todos.unshift(todo)
		},
		// 绑定复选框
		checkTodo(id) {
			this.todos.forEach(todo => {
				if(todo.id === id) todo.done=!todo.done
			})
		},
		// 删除单个done
		delectTodo(id) {
			this.todos = this.todos.filter(todo => todo.id != id)
		},
		// 全选或全不选
		checkAllTodo(done) {
			this.todos.forEach(todo => todo.done=done)
		},
		// 清空已完成的任务
		clearDoneTodos() {
			this.todos = this.todos.filter(todo => !todo.done)
		}

	},
	watch: {
		// 检测todos，当todos发生变化时，将修改后的todos放入本地存储
		todos: {
			deep: true,
			handler(value){
				localStorage.setItem('todos',JSON.stringify(value))
			}
		}
	}
}
</script>

<style>
	/*base*/
	body {
		background: #fff;
	}
	.btn {
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
	}
	.btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}
	.btn-danger:hover {
		color: #fff;
		background-color: #bd362f;
	}
	.btn:focus {
		outline: none;
	}
	.todo-container {
		width: 600px;
		margin: 0 auto;
	}
	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>