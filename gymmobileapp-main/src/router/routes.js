import MainLayout from "@/layouts/MainLayout.vue";
import authRoutes from "@/apps/auth/routes.js";
import trainingRoutes from "@/apps/training/routes.js";
import blogPage from "@/apps/home/blogs/blogPage.vue";

const layoutChildrenRoutes = [
    {
        path: '/home',
        name: 'index',
        component: () => import('@/pages/IndexPage.vue'),
        meta: {
            authRequired: true
        }
    },
    {
        path: '/home/blog/:blogId',
        name: 'blog',
        component: blogPage,
        meta: {
            authRequired: true
        },
        props: (route) => {
            const blogId = Number.parseInt(route.params.blogId, 10);
            if (Number.isNaN(blogId)) {
                return 0;
            }
            return {blogId};
        },
    }

]
layoutChildrenRoutes.push.apply(layoutChildrenRoutes, trainingRoutes)
let routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/',
        component: MainLayout,
        children: layoutChildrenRoutes
    },


    {
        path: '/:catchAll(.*)*',
        component: () => import('@/pages/ErrorNotFound.vue')
    }
];

//add the auth routes
routes.push.apply(routes, authRoutes)

export default routes;