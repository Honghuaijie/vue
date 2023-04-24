//该文件是整个项目的入口文件


/*
关于不同版本的Vue:
  1.vue.js与vue.runtime.xxx.js的区别:
    (1).vue.js是完整版的Vue，包含:核心功能+模板解析器。
    (2).vue.runtime.xxx.js是运行版的Vue，只包含:核心功能;没有模板解析器。
  2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容。
*/

//引入Vue 此处的vue是残缺版的，如果想要引入完整版，可以在Vue/dist/vue里面
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false
//创建Vue实例对象
new Vue({
  //下面这行代码，完成了：讲APP组件放入容器中
  render: h => h(App),

  // 1.render完整版写法
  // render(createElement) {
  //   // createElement 会帮你渲染你传入的标签和标签内容
  //   return createElement('h1', '你好啊')
  // }
  // 2.render简写版
  // q是传入的参数createElemet 并且也是一个函数  
  // =>后面是函数体语句
  // render: q => q(App)

  // template: `<App></App>`,
  // components: { App }
}).$mount('#app')  //指定容器

let a;