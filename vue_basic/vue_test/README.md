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
