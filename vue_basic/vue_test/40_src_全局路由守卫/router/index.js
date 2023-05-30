//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import HomeNews from '../pages/home/HomeNews'
import HomeMessage from '../pages/home/HomeMessage'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
const router = new VueRouter({
    // 路由，因为有多个路由，所以加s
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { title: '关于' },
        },
        {
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            children: [
                {
                    name: 'xinwen',
                    path: 'homeNews',  //这里不需要写/ 因为后台会自动匹配/
                    component: HomeNews,
                    meta: { isAuth: true, title: '新闻' }  //放一些元数据
                },
                {
                    name: 'xiaoxi',
                    path: 'homeMessage',
                    component: HomeMessage,
                    meta: { isAuth: true, title: '消息' },
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',   //使用占位符声明接收params参数
                            component: Detail,
                            meta: { isAuth: true, title: '详情' },  //放一些元数据

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
router.afterEach((to) => {
    document.title = to.meta.title || 'vue_test'
})

export default router