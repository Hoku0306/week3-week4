import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/week3-week4',
        redirect: '/Home',
        children: [
            {
                path: '/Home',
                component: () => import('../views/HomeVue.vue')
            }
        ]
    },
    {
        path:'*',
        redirect: '/week3-week4',
      },
    {
        path: '/Blog',
        component: () => import('../views/BlogVue.vue'),
        children: [
            {
                path: 'BlogNews',
                component: () => import('../components/BlogNews.vue')
            },
            {
                path: 'BlogContent',
                component: () => import('../components/BlogContent.vue')
            }
        ]
    },
    {
        path: '/Optical',
        name: 'Optical',
        component: () => import('../views/OpticalVue.vue')
    },
    {
        path: '/Sunglasses',
        name: 'Sunglasses',
        component: () => import('../views/SunglassesVue.vue')
    },
    {
        path: '/Qa',
        component: () => import('../views/QaVue.vue')
    },
    {
        path: '/ShopList',
        component: () => import('../views/ShopList.vue')
    },
    {
        path: '/ShopInfo',
        component: () => import('../views/ShopInfo.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;