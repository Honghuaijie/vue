//引入Vue文件
import Vue from 'vue'
//引入App组件
import App from './App.vue'
//引入store
import store from './store'
import { Button, Row, DatePicker } from 'element-ui';

//关闭Vue生产提示
Vue.config.productionTip = false

Vue.component(Button.name, Button);
Vue.component(DatePicker.name, DatePicker);
Vue.component(Row.name, Row);
// 使用vueRouter 插件
//创建VM
new Vue({
    el: '#app',
    store,
    render: h => h(App),
})
