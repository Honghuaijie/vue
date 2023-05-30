# 笔记

## 脚手架文件结构：

![image-20230415110806336](C:\Users\Admin\AppData\Roaming\Typora\typora-user-images\image-20230415110806336.png)

## 关于不同版本的Vue：

![image-20230415110837092](C:\Users\Admin\AppData\Roaming\Typora\typora-user-images\image-20230415110837092.png)



## Vue.config.js配置文件

![image-20230415110852416](C:\Users\Admin\AppData\Roaming\Typora\typora-user-images\image-20230415110852416.png)



## ref属性

1. 被用来给元素或自组件注册引用信息（id的替代者）
2. 应用在html标签上那获取的真实DOM元素，应用在组建标签上那就获取的就是组件实例对象（vc）
3. 使用方式：
   1. 打标识  <h2 v-text="msg" ref="h2"></h2>    <School ref="sch1"></School>
   2. 获取：this.$refs.xxx



## 配置项props

![image-20230419113919186](C:\Users\Admin\AppData\Roaming\Typora\typora-user-images\image-20230419113919186.png)





## mixin 混入

![image-20230419164415178](C:\Users\Admin\AppData\Roaming\Typora\typora-user-images\image-20230419164415178.png)





## 插件

![image-20230420134124888](C:\Users\Admin\AppData\Roaming\Typora\typora-user-images\image-20230420134124888.png)



## scoped样式

​	作用：让样式在局部生效 ，防止冲突

​	写法：<style  scoped>





## 总结TodoList案例

功能点

添加数据、选中和为选中的状态绑定，删除单个事件、判断是否可以全选、全选和全不选、清除已完成

1. 组件化编程流程：

   ​	（1）拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突

   ​	（2）实现动态组件：考虑好**数据的存放位置**，数据是一个组建再用，还是多个组件再用：

   ​			1).一个组件在用：放在组件自身即可

   ​			2).多个组件在用：放在他们共同的父组件上（**状态提升**）

   ​	（3）实现交互：从绑定事件开始。

2. props适用于：

   ​	（1）父组件=>自组件 通信

   ​	（2）子组件=>父组件通信 （要求父组件先给自组件一个函数）

3. 使用v-model时要切记：v-model绑定的值不能是props传入的值，因为props是不可以修改的

4. props传过来的值如果是对象的话，修改对象的属性值是不会报错的，但不推荐这样做



## webStorage

<img src="C:\Users\Admin\AppData\Roaming\Typora\typora-user-images\image-20230422104228890.png" alt="image-20230422104228890" style="zoom:150%;" />



## 组件的自定义事件

1. 一种组件间通信的方式，适用于：子组件===>父组件

2. 使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（<span style="color:red">事件的回调在A中</span>）。只有回调留在父亲这，父亲才能收到子传来的数据

3. 绑定自定义事件：

   1. 第一种方式，在父组件中`<!-- <Student @hhj="getStudentName" v-on:demo="m1" >`
   2. 第二种方式，在父组件中

   ```js
   <Student ref="student">   
   mounted() {
       this.$refs.student.$on('hhj',  this.getStudentName)  //绑定自定义事件
   }
   ```

   	3. 若想让自定义事件只能触发一次，可以使用```once```修饰符，或```$once```方法。

4. 触发自定义事件： this.$emit(‘事件名’)

5. 解绑自定义事件： this.$off(‘事件名’)

6. 组件也可以绑定原生DOM事件，需要使用native修饰符

7. 注意：通过```this.$refs.xxx.$on('atguigu',回调)```绑定自定义事件时，回调<span style="color:red">要么配置在methods中</span>，<span style="color:red">要么用箭头函数</span>，否则this指向会出问题！



全局事件总线（GlobalEventBus)

1. 一种组件间通信的方式，适用于任意组件间通信

2. 安装全局事件总线：

   ```js
   new Vue({
       ...
       beforeCreate() {
           // $bus的作用：其实就是一个傀儡组件，用作组件和组件之间传递数据的
           Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
       }
   })
   ```

3. 使用事件总线

   1. 接受数据：A组件想接受数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身

   ```
   methods:{
   	demo(data){
   		....
   	}
   }
   this.$bus.$on('xxx',this.demo)
   ```

    2. 接受数据:  

       ```
       this.$bus.$emit('事件名')
       ```

4. 最好在beforeDestroy钩子中,用$off去解绑当前组件所用到的事件



## 消息订阅与发布（pubsub)

1. 一种组件间通信的方式，适用于任意组件间通信
2. 使用步骤：
   1. 安装 npm i pubsub-js
   2. 引入 import pubsub from ‘pubsub’
   3. 订阅 pubsub.subscribe(‘消息名’,回调函数)
   4. 发布 pubsub.publish(‘消息名’,数据)
   5. 最好在beforeDestroy钩子中,用pubsub.unsubscribe(pid)去取消订阅



## nextTick

1. 语法：this.$nextTick(回调函数)
2. 作用：在下一次DOM更新结束后执行其指定的回调
3. 什么时候用：当改变数据时，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中进行



## Vue封装的过渡与动画

1. 作用：在插入、更新、或移除DOM元素时，在合适的时候给元素添加样式类名。
2. 图示：

![image-20230424112125011](C:\Users\Admin\AppData\Roaming\Typora\typora-user-images\image-20230424112125011.png)

3. 写法：

   1. 准备好样式：

      - 元素进入的样式
        1. v-enter：进入的起点
        2. v-enter-active：进入过程中
        3. v-enter-to：进入的终点
      - 元素离开的样式
        1. v-leave：离开的起点
        2. v-leave-active：离开过程中
        3. v-leave-to：离开的终点

   2. 使用 <transition>包裹要过渡的元素，并配置name属性：

      ```html
      //appear是用来初始化执行动画
      <transition name="hello" appear>
      
      ​    <h1 v-show="isShow">你好啊！</h1>
      
        </transition>
      ```
   
   3. 备注：若有多个元素需要过度，则需要使用：```<transition-group>```，且每个元素都要指定```key```值。



## Vue脚手架配置代理

### 方法一

​	在vue.config.js中添加如下配置：

```js
devServer: {
    proxy: 'http://localhost:5000'
 },
```

说明：

1. 优点：配置简单，请求资源时直接发给前端（8080）即可
2. 缺点：不能配置多个代理，不能灵活的控制请求是否走代理
3. 工作方式：若按照上述配置，当请求了前端不存在的资源时，那么该请求会转发给服务器（优先匹配前端资源）

### 方法二

编写vue.config.js配置具体代理规则：

```js
devServer: {
    proxy: {
      '/hhj': {   //匹配所有以‘hhj'开头的请求路径
        target: 'http://localhost:5000',   //代理目标的基本路径
        // 将以/hhj开头的路径，替换为空
        pathRewrite: { '^/hhj': '' },
        ws: true,   //用于支持websocket 
        // changeOrigin: true   //用于控制请求头中的host值
      },
      '/demo': {   //通过请求的前缀来判断是否转发给代理服务器，如果前缀是hhj就转发
        target: 'http://localhost:5001',   //转发的给谁
        // 将以/hhj开头的路径，替换为空
        pathRewrite: { '^/demo': '' },
        // ws: true,   //用于支持websocket 
        // changeOrigin: true   //用于控制请求头中的host值
      },
    }
}
```

说明：

1. 优点：可以配置多个代理，且可以灵活的控制请求是否走代理
2. 缺点：配置略微繁琐，请求资源时必须加前缀（在端口号后面加）





## 插槽

1. 作用：让父组件可以向自子组件指定位置插入html结构，也是一种组件间通信的方式，适用于父组件==>子组件

2. 分类：默认插槽、具名插槽、作用域插槽

3. 使用方式：

   1. 默认插槽

   ```html
   //父组件
    <Category title="美食" >
         <img src=".././public/img/1.jpg" alt="">
    </Category>
   //子组件
   <slot>我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
   ```

   2. 具名插槽

   ```html
   //父组件
   <Category title="美食" >
         <img slot="center" src=".././public/img/1.jpg" alt="">
         <a slot="footer" href="#">更多美食</a>
   </Category>
   
   <Category v-slot:footer title="美食" >
         <img  src=".././public/img/1.jpg" alt="">
         <a  href="#">更多美食</a>
   </Category>
   
   //子组件
   <slot name="center">我是一些默认值，当使用者没有传递具体结构时1，我会出现</slot>
   <slot name="footer">我是一些默认值，当使用者没有传递具体结构时2，我会出现</slot>
   ```

   3. 作用域插槽
      1. 理解：数据在组件自身，但根据数据生成的结构需要由组件的使用者决定（数据在儿子身上，但使用数据遍历出来的结构在父亲身上）
      2. 作用域插槽也可以有名字

   ```html
   //父组件
   <Category title="游戏" >
    		//使用slot-scope接收数据   
         <template v-slot=:hh slot-scope="hhj">
           <ul>
             <li v-for="(item,index) in hhj.games" :key="index">{{item}}</li>
           </ul>
         </template>
   </Category>
   //子组件
   <slot name='hh' :games='games'>我是一些默认值，当使用者没有传递具体结构时1，我会出现</slot>
   ```



## Vuex

### 	1.概念

​		在Vue中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信

### 	2.何时使用？

​	多个组件需要共享数据时

### 	3.搭建vuex环境

1. 创建文件:src/store/index.js

```js
//引入Vue核心库
import Vue from 'vue'
//引入Vuex，为了创建Vuex.Store
import Vuex from 'vuex'
// 使用了Vuex插件，才能在vm和vc上找到store属性,并且才能创建store
Vue.use(Vuex)
// 准备Actions——用于响应组件中的动作
const actions = {}
// 准备mutations——用于操作数据（state）
const mutations = {}
// 准备state——用于存储数据（state）
const state = {}
// 创建并暴露store,并传入配置对象
export default new Vuex.Store({
    actions: actions,
    mutations: mutations,
    state  //对象的简写形式
})
```

	2. 在main.js中创建vm时传入store配置项

```js
//引入store,这里没有写引入哪个文件，所以默认就是index
import store from './store'
...
new Vue({
    el: '#app',
    render: h => h(App),
    store,
})
```



### 4.基本使用

1. 初始化数据、配置actions、mutation，操作文件store.js

```js
// 该文件用于创建Vuex中最为核心的store

//引入Vuex，为了创建Vuex.Store
import Vue from 'vue'
import Vuex from 'vuex'
// 使用了Vuex，才能在vm和vc上找到store属性,并且才能创建store
Vue.use(Vuex)
// 准备Actions——用于响应组件中的动作
const actions = {
     jia(context, value) {
         // console.log("action中的jia被调用了", context, value);
         context.commit("JIA", value)
     },

}
// 准备mutations——用于操作数据（state）
const mutations = {
    JIA(state, value) {
        console.log("mutations中的JIA被调用了", state, value);
        state.sum += value
    },
}

// 准备state——用于存储数据（state）
const state = {
    sum: 0,   //当前的和
}

// 创建并暴露store,并传入配置对象
export default new Vuex.Store({
    actions: actions,
    mutations: mutations,
    state  //对象的简写形式
})
```

2. 组件中读取vuex中的数据 $store.state.sum
3. 组件中修改vuex中的数据 $store.dispatch(‘方法名’,数据),$store.commit(‘方法名’,数据)



### 5.getters的使用

1. 概念：当state中的数据需要经过加工后再使用时，可以使用getters加工。
2. 在store.js中追加getters配置

```js
const getters ={
	bigSum(state){
		return state.sum * 10
	}
}

export default new Vuex.Store({
    actions,
    mutation,
    state,
    getters
})
```

3. 组件中读取数据； $store.getters.bigSum



### 6.四个map方法的使用

1. mapState方法：用于帮助我们映射state中的数据为计算属性

```js
// 靠mapstate生成的计算属性，从state中读取数据（对象写法）
// ...mapState({ sum: 'sum', school: 'school' }),
// 靠mapstate生成的计算属性，从state中读取数据（数组写法）
...mapState(['sum','school']),
```



2. mapGetters方法：用于帮助我们映射getters中的数据为计算属性

```
// 靠mapGetters生成的计算属性，从Getters中读取数据（对象写法）
// ...mapGetters({ bigSum: 'bigSum' })
// 靠mapGetters生成的计算属性，从Getters中读取数据（数组写法）
...mapGetters(['bigSum'])
```

3. mapActions方法：用于帮助我们生成与actions对话的方法，即：包含$store.dispatch(xxx)的函数

```js
// 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
...mapActions({ increamentOdd: 'jiaOdd' ,increamentWait:'jiaWait'})
```

4. mapMutations方法:用于帮助我们生成与mutations对话的方法，即：包含$store.commit(xxx)的函数

```js
// 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
...mapMutations({ increament: 'JIA', decreament: 'JIAN' }),
// 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（数组写法）
// ...mapMutations( ['JIA','JIAN' ]),
```

**备注：mapActions和mapMutations使用时，若需要传递参数需要：在模板中绑定事件是传递好参数，否则参数是事件对象**



### 7.模块化+命名控件

模块化编码就是将vuex的store分为多个模块，每个模块都有自己的state、getters、actions、mutations

1. 目的：让代码更好维护，让多种数据分类更加明确
2. 修改store.js

```js
const countAbout ={
	namespaced:true， //开启命名空间：只有开启了命名空间，Vue才会解析嵌套
	actions:{},
	mutations:{},
	state:{},
	getters:{},
}

const personAbout ={
	namespaced:true， //开启命名空间：只有开启了命名空间，Vue才会解析嵌套
	actions:{},
	mutations:{},
	state:{},
	getters:{},
}

export default new vuex.store({
    modules:{
        countAbout,
        personAbout
    }
})
```

3. 开启命名空间后，组件中读取state数据：

```js
//方式一：自己直接读取
this.$store.state.countAbout.sum
//方式二：借助mapState读取
...mapState('countAbout',['sum','school','subject'])
```

4. 开启命名空间后，组件中读取getters数据：

```js
//方式一：自己直接读取
this.$store.getters['countAbout/bigSum']
//方式二：借助mapGetters读取
...mapGetters('countAbout',['bigSum'])
```

5. 开启命名空间后，组件中调用dispatch：

```js
//方式一：自己直接dispatch
this.$store.dispatch['personAbout/addPersonWang',person]
//方式二：借助mapActions读取
...mapActions('countAbout',{ increamentOdd: 'jiaOdd' ,increamentWait:'jiaWait'})
```

4. 开启命名空间后，组件中调用commit：

```js
//方式一：自己直接commit
this.$store.commit['personAbout/ADD_PERSON',personObj]
//方式二：借助mapMutations读取
...mapMutations('countAbout',{ increament: 'JIA', decreament: 'JIAN' }),   
```



## 路由

1. 理解：一个路由（route）就是一组映射关系（key-value)，多个路由需要路由器（router）进行管理。
2. 前端路由：key是路径，value是组件

### 1.基本使用

1. 安装vue-router :vue2支持3版本，vue3支持4版本

```js
npm i vue-router@3
```

2. 应用插件 ：Vue.use(VueRouter)
3. 编写router配置项：

```js
//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../components/About'
import Home from '../components/Home'

// 创建并暴露一个路由器
export default new VueRouter({
    // 路由，因为有多个路由，所以加s
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        },
    ]
})
```

4. 实现切换（active-class可配置高亮样式）

```html
<router-link class="list-group-item"  active-class="active" to="/about">About</router-link>
```

5. 指定显示位置

```html
<router-view></router-view>
```



### 2.几个注意点

1. 路由组件通常放在pages文件夹，一般组件通常存放在components文件夹
2. 通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载。
3. 每个组件都有自己的$route属性，里面存储着自己的路由信息。
4. 整个应用只有一个$router ，可以通过组件的$router属性获取到



### 3.多级路由

1. 配置路由规则，使用children配置项

```js
routes: [
    //一级路由
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            //二级路由
            children: [
                {
                    path: 'homeNews',  //这里不需要写/ 因为后台会自动匹配/
                    component: HomeNews
                },
                {
                    path: 'homeMessage',
                    component: HomeMessage
                },
            ]
        },
```

2. 跳转（要写完整路径）：

```html
<router-link class="list-group-item" active-class="active" to="/home/homeNews">News</router-link>
```



### 4.路由的query参数

1. 传递参数

```html
<!-- 跳转路由并携带query参数，to的字符串写法 -->
<!-- <router-link :to="`/home/homeMessage/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
        
<!-- 跳转路由并携带query参数，to的对象写法 -->
<router-link :to="{
    path:'/home/homeMessage/detail',
    query:{
       id:666,
       title:'你好'
     }
}">
 {{m.title}}
</router-link>
```

2. 接收参数

```js
$route.query.id
$route.query.title
```



### 5.命名路由

1. 作用：可以简化路由的跳转

2. 如何使用

   1. 给路由命名：

      ```js
      children: [
          {
              name: 'xiangqing',  //给路由命名
              path: 'detail',
              component: Detail
          }
      ]
      ```

   2. 简化跳转：

      ```js
      //
      <router-link class="list-group-item"  active-class="active" :to="{name:'guanyu'}">About</router-link>
      //简化写法配合传递参数
      <router-link :to="{
                name:'xiangqing',
                query:{
                  id:m.id,
                  title:m.title
                }
              }">
                {{m.title}}
              </router-link>
      
      ```



### 6.路由的params参数

1. 配置路由

   ```js
   					children: [
                           {
                               name: 'xiangqing',
                               path: 'detail/:id/:title',   //使用占位符声明接收params参数
                               component: Detail
                           }
                       ]
   ```

   2. 传递参数

```html
        <!-- 跳转路由并携带params参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/homeMessage/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
        
        <router-link :to="{
          // 使用params时，不能使用patch配置项，必须使用name传参
          name:'xiangqing',
          params:{
            id:m.id,
            title:m.title
          }
        }">
          {{m.title}}
        </router-link>
```

3. 接受参数：

   ```js
   $route.params.id
   ```

   

### 7.路由的props配置

作用：让路由组件更方便的收到参数

```js
children: [
    {
        name: 'xiangqing',
        path: 'detail',   //使用占位符声明接收params参数
        component: Detail,
        // props的第一种写法，值为对象，该对象中的key-value都会以props的形式传给detail组件
        // props: { id: '666', title: '你好
        // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
        // props: t
        // props的第三种写法，值为函数，
        props($route) {
            return { id: $route.query.id, title: $route.query.title, }
        }
        
    }
],

```



### 8.```<router-link> ```的replace属性

1. 作用：控制路由跳转时操作浏览器历史记录的模式
2. 浏览器的历史记录有两种写入方式：分别为```push```和```replace```，```push```是追加历史记录，```replace```是替换当前记录。路由跳转时候默认为```push```
3. 如何开启```replace```模式：```<router-link replace .......>News</router-link>```

![image-20230427112101954](C:\Users\Admin\AppData\Roaming\Typora\typora-user-images\image-20230427112101954.png)



### 9.编程式路由导航

1. 作用：不借助<router-link>实现路由跳转，让路由跳转更灵活

2. 集体编码：

   ```js
   //router的两个API
   this.$router.push({
     name: 'xiangqing',
     query: {
       id: m.id,
       title: m.title
     }
   })
   
   this.$router.replace({
     name: 'xiangqing',
     query: {
       id: m.id,
       title: m.title
     }
   })
   this.$router.forward()  //前进
   this.$router.back()		//后退
   this.$router.go(1)		//可前进可后退，具体看传入的是正数还是负数
   ```

   

### 10.缓存路由组件

1. 作用：让不展示的路由保持挂载，不被销毁。

2. 具体编码：

   ```html
           <!-- News代表的是组件名 -->
           <keep-alive include="News"> 
             <router-view></router-view>
           </keep-alive>
   ```

   

### 11.两个新的生命周期钩子

1. 作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态

如果你没有使用<keep-alive>缓存组件，那么activated()和deactivated()这两个生命周期钩子函数将不会被调用。

1. 具体名字：
   1. activated     激活
   2. deactivated  失活



### 12.路由守卫

1. 作用：对路由进行权限控制

2. 分类：全局守卫、独享守卫、组件内守卫

3. 全局守卫

   ```js
   // 全局前置路由守卫——初始化的时候被调用、每次路由切换之前被调用
   router.beforeEach((to, from, next) => {
       console.log("前置路由守卫", to);
       // 判断是否需要鉴权
       if (to.meta.isAuth) {
           if (localStorage.getItem('school') === 'hhj') {
               next()
           } else {
               alert("无权")
           }
       } else {
           next()
       }
   })
   
   // 全局后置路由守卫——初始化的时候被调用、每次路由切换之后被调用
   router.afterEach((to, form) => {
       document.title = to.meta.title || '南科院'
   })
   ```

4. 独享守卫

   ```js
   beforeEnter(to,from,next){
   console.log("前置路由守卫", to);
       // 判断是否需要鉴权
       if (to.meta.isAuth) {
           if (localStorage.getItem('school') === 'hhj') {
               next()
           } else {
               alert("无权")
           }
       } else {
           next()
       }
   }
   ```

5. 组件内路由守卫

   ```js
   //进入守卫，通过路由规则，进入该组件时被调用
   beforeRouteEnter(to, from, next) {
       console.log("beforeRouteEnter", to);
       // 判断是否需要鉴权
       if (to.meta.isAuth) {
           if (localStorage.getItem('school') === 'hhj') {
               next()
           } else {
               alert("无权")
           }
       } else {
           next()
       }
     },
   
     // 离开守卫：通过路由规则，离开该组件时被调用
     beforeRouteLeave(to, from, next) {
       console.log("beforeRouteLeave");
       next()
     },
   ```

   

### 13.路由器的两种工作模式

1. 对与url来说，什么是hash值？——#及其后面的内容就是hash值
2. hash值不会包含在http请求中，即：hash值不会带给服务器
3. hash模式：
   1. 地址中永远带着#号，不美观
   2. 若以后将地址通过第三方手机APP方向，若APP校验严格。则地址会被标识为不合法
   3. 兼容性较好
4. history模式：
   1. 地址干净，美观。
   2. 兼容性和hash模式相比略差。
   3. 应用部署上线时需要后端人员支持，解决刷新页面服务端404问题
