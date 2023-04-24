<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
		<!--MyHeader用这个函数向App传入数据 -->
        <MyHeader :addTodo="addTodo"></MyHeader>
        <MyList :todos="todos" :CheckTodo="CheckTodo" :deleteTodo="deleteTodo"></MyList>
        <MyFooter :todos="todos"  :deleteTodo="deleteTodo" :clearAllTodo="clearAllTodo"></MyFooter>
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
			todos: [
				{id:'001',title:'抽烟',done:true},
				{id:'002',title:'喝酒',done:true},
				{id:'003',title:'开车',done:false}
			]
		}
	},
	
	methods: {
		// 添加todo
		addTodo(todo) {
			this.todos.unshift(todo)
		},
		// 数据在哪里，那么对数据的操作就在哪里
		// 勾选或者取消
		CheckTodo(id) {
			this.todos.forEach((todo) => {
				if(todo.id === id) todo.done = !todo.done
			});
		},
		//删除一个todo
		deleteTodo(id) {
			this.todos = this.todos.filter(todo =>  todo.id!==id)
		},
		//全选或全不选
		CheckAllTodo(done) {
			this.todos.forEach((todo) => {
				todo.done=done
			})
		},
		// 清空已完成的任务
		clearAllTodo() {
			this.todos = this.todos.filter((todo) => {
				return !todo.done
			})
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