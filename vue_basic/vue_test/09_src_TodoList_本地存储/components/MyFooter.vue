<template>
	<!-- 如果没有数据就不展示 -->
  <div class="todo-footer" v-show="total" >
    <label >
      <input type="checkbox" v-model="isAll">
    </label>
    <span>
      <span>已完成{{doneTotal}}</span> /全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearDoneTodos" >清除已完成任务</button>
  </div>
</template>

<script>

export default {
	name: 'MyFooter',
	props:['todos','checkAllTodo','clearDoneTodos'],
	computed: {
		// 所有todo总数
		total() {
			return this.todos.length
		},
		// 已完成的todo总数
		doneTotal() {
			return this.todos.reduce((pre, todo)=>  pre+ (todo.done? 1:0) ,0)
		},
		// 如果isAll需要改变那就需要写set方法
		isAll: {
			get() {
				return this.total === this.doneTotal && this.total>0
			},
			set(value) {
				this.checkAllTodo(value)
			}
		}
	},
	methods: {
		// checkAll(e) {
		// 	this.checkAllTodo(e.target.checked)
		// }
		clearTodos() {
			this.clearDoneTodos()
		}
	}
	
}

</script>


<style scoped>
	/*footer*/
	.todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}

	.todo-footer label {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}

	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}

	.todo-footer button {
		float: right;
		margin-top: 5px;
	}
</style>