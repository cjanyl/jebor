import Home from '../views/Home.vue'

export default {
    routeConfig:[
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        }
    ],

    authType: 'white',  //白名单 white 可以跳过登录 | 黑名单 black 不可以跳过登录
    whiteList: [
        // /^\/login/
        /^\/*/
    ],
    blackList: [],
}
