//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import HomeNews from '../pages/home/HomeNews'
import HomeMessage from '../pages/home/HomeMessage'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
export default new VueRouter({
    // 路由，因为有多个路由，所以加s
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'homeNews',  //这里不需要写/ 因为后台会自动匹配/
                    component: HomeNews
                },
                {
                    path: 'homeMessage',
                    component: HomeMessage,
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',   //使用占位符声明接收params参数
                            component: Detail,
                            // props的第一种写法，值为对象，该对象中的key-value都会以props的形式传给detail组件
                            // props: { id: '666', title: '你好啊' }

                            // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
                            // props: true,

                            // props的第三种写法，值为函数，
                            props($route) {
                                return { id: $route.query.id, title: $route.query.title, }
                            }

                        }
                    ],

                },
            ]
        },


    ]
})