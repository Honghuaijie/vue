<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称,按回车键确认" ref="value" @keyup.enter="add">
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
	name: 'MyHeader',
	// 接受了一个app传入的函数，也就是说MyList和App共用这一个函数，因为函数是一个地址，用做儿子向父亲传入数据
	methods: {
		//将用户的输入包装成一个todo对象
		add(e) {
			// 首先判断输入的内容是否为空:校验数据
			if(!e.target.value) return alert('请输入内容')
			// 如何获取输入框里面的内容，有三种方法
			// 利用v-model、利用ref、利用e.target.value
			// console.log(this.$refs.value.value);
			// console.log(e.target.value);	

			//引入nanoid包npm i nanoid 用来生成id
			const todoObj = { id: nanoid(), title: e.target.value, done: false }
			// 通知App组件去添加一个todo对象
			this.$emit('addTodo',todoObj)  //触发自定义事件
			// 添加数据后，将输入框清空
			e.target.value=""
		}
	}

	
}
</script>

<style scoped>
/*header*/
	.todo-header input {
		width: 560px;
		height: 28px;
		font-size: 14px;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 4px 7px;
	}

	.todo-header input:focus {
		outline: none;
		border-color: rgba(82, 168, 236, 0.8);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
	}
</style>