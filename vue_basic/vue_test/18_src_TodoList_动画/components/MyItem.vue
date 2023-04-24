<template>
  <transition 
  name="animate__animated animate__bounce" 
  appear
  enter-active-class="animate__backInRight"
  leave-active-class="animate__backOutUp"
  >
	<li>	
		<label >
		<input type="checkbox" :checked="todoObj.done" @change="handleCheck(todoObj.id)">
		<!-- 如下代码也可以实现功能，但是不建议使用，也有点违反原则，修改了todoObj.done-->
		<!-- <input type="checkbox" v-model="todoObj.done"> -->
		<span v-show="isEdit" >{{ todoObj.title }}</span>
		<input 
			v-show ="!isEdit"
			type="text" 
			:value="todoObj.title" 
			@blur="updataTodo($event,todoObj.id)"
			ref="inputTitle"
			>
		</label>
		<button v-show="isEdit" class="btn btn-skyblue " @click="handleEdit" >修改</button>
		<button class="btn btn-danger" @click="handleDelete(todoObj.id)" >删除</button>
    </li>
  </transition>
</template>

<script>
import 'animate.css';
import pubsub from 'pubsub-js'
    export default {
	name: 'MyItem',
		// 接受数据，并对数据进行类型限制
	props: ['todoObj'],
	data() {
		return {
			isEdit:true
			}
		},
		methods: {
			handleDelete(id) {
				if (confirm("确定删除吗?")) {
					// 通知App组件将对应的todo对象删除
					this.$bus.$emit('deleteTodo',id)
				}
			},
			//勾选or取消勾选
			handleCheck(id) {
				// 通知APP组件将对应的todo对象的done的属性取反
				// this.$bus.$emit('CheckTodo',id)
				pubsub.publish('CheckTodo',id)
			},
			handleEdit() {
				this.isEdit=!this.isEdit
				//这是页面还没有出现input框，所以不能获取焦点
				// this.$refs.inputTitle.focus()

				//nexttick 的回调函数，会在DOM更新后，执行
				this.$nextTick(function () {
				this.$refs.inputTitle.focus()
					
				})
			},
			updataTodo(event,id) {
				const value = event.target.value
				if(!value) return alert("输入不能为空")
				pubsub.publish('updataTodoTitle',{value:value,id:id})
				this.isEdit=!this.isEdit

			}
		}
	}
</script>

<style scoped>

/*item*/
    li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	.btn-skyblue{
		color: #fff;
		background-color: skyblue;
	}

	li button {
		float: right;
		display: none;
		margin-top: 3px;
		margin-left: 3px;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}

	li:hover{
		background-color: #ddd;
	}
	
	li:hover button{
		display: block;
	}

	.todo-enter-active{
    animation: atguigu 1s;
	}
	.todo-leave-active{
		animation:atguigu 1s reverse;
	}

	/* 动画 */
	@keyframes atguigu {
		from{
			transform: translateX(-100%);
		}
		to{
			transform:translateX(0px)
		}
	}
</style>