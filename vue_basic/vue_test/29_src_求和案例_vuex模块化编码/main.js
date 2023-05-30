//引入Vue文件
import Vue from 'vue'
//引入App组件
import App from './App.vue'
// 引入插件
import vueResource from 'vue-resource'

//引入store,这里没有写引入哪个文件，所以默认就是index
import store from './store'

//关闭Vue生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(vueResource)



//创建VM
new Vue({
    el: '#app',
    render: h => h(App),
    store,
    beforeCreate() {
        // 定义全局总线
        Vue.prototype.$bus = this
    }
})
