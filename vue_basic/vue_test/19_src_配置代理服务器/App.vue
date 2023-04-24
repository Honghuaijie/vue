<template>
  <div >
	<button @click="getStudents">获取学生信息</button>
	<button @click="getCars">获取学生信息</button>
  </div>

</template>

<script>
import axios from 'axios'
  export default {
	name: 'App',
	methods: {
		getStudents() {
			// axios是前端的技术，所以必须向代理服务器要数据
			axios.get('http://localhost:8080/hhj/students').then(
				// 请求成功
				response => {
					console.log("请求成功了",response.data);
				},
				// 请求失败
				error => {
					console.log("请求失败了",error.message);
				}
			)
		},
		getCars() {
			axios.get('http://localhost:8080/demo/cars').then(
				response => {
					console.log("请求成功了",response.data);
				},
				error => {
					console.log("请求失败了",error.message);
				}
			)
		}
	}
	
}
</script>
