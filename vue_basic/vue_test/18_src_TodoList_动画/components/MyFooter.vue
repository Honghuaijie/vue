<template>
	<!-- 如果没有数据就不展示 -->
  <div class="todo-footer" v-show="total">
    <label >
	<!-- 第一种写法，使用方法 -->
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll" > -->
	<!--第二种写法，使用计算属性 -->
      <input type="checkbox" v-model="isAll" @change="checkAll" >
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> /全部{{total}}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
    export default {
	name: 'MyFooter',
	props: ['todos','CheckAllTodo','deleteTodo','clearAllTodo'],
	
	computed: {
		total() { 
			return this.todos.length
		},
		doneTotal() {
			return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
		},
		isAll: {
			get() {
				return this.total === this.doneTotal && this.total>0
			},
			set(value) {
				this.CheckAllTodo(value)
			}
		}
	},
	methods: {
		
		//清除已完成任务
		clearAll() {
			this.clearAllTodo()
		},
		// 全选或者全不选
		checkAll(e) {
			this.CheckAllTodo(e.target.checked)
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