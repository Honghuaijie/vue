//引入Vue文件
import Vue from 'vue'
//引入App组件
import App from './App.vue'
//关闭Vue生产提示
Vue.config.productionTip = false

import { mixin2 } from './mixin'
Vue.mixin(mixin2)

//创建VM
new Vue({
    el: '#app',
    render: h => h(App)
})