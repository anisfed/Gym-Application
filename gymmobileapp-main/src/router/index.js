import {createRouter, createWebHistory} from '@ionic/vue-router';
import routes from "@/router/routes.js";


const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('token');
    if (to.name === 'logout' && isAuthenticated) {
        localStorage.removeItem('token');
        next({name: 'login'});
    } else if (to.name === 'login' && isAuthenticated) {
        next({name: 'index'});
    } else if (to.meta.authRequired && !isAuthenticated) {
        next({name: 'login'});
    } else {
        next();
    }
});
export default router;