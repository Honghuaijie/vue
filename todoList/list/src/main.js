import Vue from 'vue'
import App from './App.vue'
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.css';
// 引入动画样式
import 'animate.css';
Vue.config.productionTip = false
// 使用插件
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  beforeCreate() {
    // 创建全局事件总线
    Vue.prototype.$bus = this
  }
}).$mount('#app')
