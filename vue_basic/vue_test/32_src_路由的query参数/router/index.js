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
                            path: 'detail',
                            component: Detail
                        }
                    ]
                },
            ]
        },


    ]
})