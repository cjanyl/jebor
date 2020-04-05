import Vue from 'vue'
import VueRouter from 'vue-router'

import routeConfig from "./routeConfig";


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:routeConfig.routeConfig
});

router.beforeEach((to, from, next) => {
    if(to.path === '/'){
        next('/home')
    }else{
        if (to.meta.title) {
            document.title = 'Jebor-'+to.meta.title;
        }else{
            document.title = 'Jebor';
        }

        //验证地址是否需要登录
        let checkUrl = () => {
            return new Promise((resolve, reject) => {
                let flag;
                if(routeConfig.authType === 'white'){
                    routeConfig.whiteList.forEach(pathRule => {
                        if(pathRule.test(to.path)){
                            flag = true;
                        }
                    });
                }else if(routeConfig.authType === 'black'){
                    flag = true;
                    routeConfig.blackList.forEach(pathRule => {
                        if(pathRule.test(to.path)){
                            flag = false;
                        }
                    });
                }

                if(flag){
                    resolve();
                }else{
                    reject();
                }
            })
        };

        //验证是否已登录
        let checkLogin = () => {
            return new Promise((resolve, reject) => {
                if(router.app.$store.state.userInfo){
                    resolve();
                }else{
                    router.app.$store.commit('init');
                    if(router.app.$store.state.userInfo){
                        resolve();
                    }else{
                        router.app.$store.dispatch('autoLoginByCookie')
                            .then(() => resolve())
                            .catch(() => reject());
                    }
                }
            })
        };

        checkLogin().then(() => next()).catch(() => {
            checkUrl().then(() => next()).catch(() => {
                let redirectUrl = to.path;
                for(let key in to.query){
                    if(redirectUrl.indexOf('?') >= 0){
                        redirectUrl += `&`;
                    }else{
                        redirectUrl += `?`;
                    }
                    redirectUrl += `${key}=${to.query[key]}`;
                }
                router.app.$message('请先登录或注册');
                next(`/login?redirectUrl=${encodeURIComponent(redirectUrl)}`);
            })
        });
    }
})

export default router
