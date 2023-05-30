//引入Vue文件
import Vue from 'vue'
//引入App组件
import App from './App.vue'
// 引入vue-router插件
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'
//关闭Vue生产提示
Vue.config.productionTip = false

// 使用vueRouter 插件
Vue.use(VueRouter)
//创建VM
new Vue({
    el: '#app',
    render: h => h(App),
    router: router

})
