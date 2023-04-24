//引入Vue文件
import Vue from 'vue'
//引入App组件
import App from './App.vue'

//关闭Vue生产提示
Vue.config.productionTip = false



//创建VM
new Vue({
    el: '#app',
    render: h => h(App),
    // beforCreate这个钩子，在事件和生命周期初始化后，在数据代理前执行
    beforeCreate() {
        // $bus的作用：其实就是一个傀儡组件，用作组件和组件之间传递数据的
        Vue.prototype.$bus = this
    }
})