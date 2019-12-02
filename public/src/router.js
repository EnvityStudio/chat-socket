/**
 * @author Thuan Envity
 * @date
 */

import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/home',
            name: 'Home',
            component: () => import('@/views/Home.vue')
        },
        {
            path: '/register',
            name: 'Register',
            component:  Register,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('@/views/About.vue')
        },
        {
            path: '*',
            component: () => import('@/components/error/Error.vue')
        }
    ]
});

// router.beforeEach(async (to, from, next) => {
//     if (to.meta.requiresAuth) {
//         if (localStorage.getItem('authToken') === null) {
//             localStorage.clear();
//             next({
//                 name: 'Login',
//                 params: { message: 'You are unauthorized, Please login to access' }
//             });
//         }
//         else {
//             next();
//         }
//     }
// });

export default router;
