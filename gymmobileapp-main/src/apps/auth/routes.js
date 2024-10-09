import Login from "@/apps/auth/pages/Login.vue";
import register from "@/apps/auth/pages/Register.vue";


const authRoutes = [
    {
        path: '/login',
        component: Login,
        name: 'login',

    },
    {
        path: '/logout',
        name: 'logout',

    },
    {
        path: '/register',
        component: register,
        name: 'register'

    },

]

export default authRoutes;