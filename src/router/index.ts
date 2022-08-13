import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home/index.vue'),
        meta: {
            title: '',
            keepAlive: false
        }
    },
    {
        path: '/mine',
        name: 'Mine',
        component: () => import('@/views/Mine/index.vue'),
        meta: {
            title: '',
            keepAlive: false
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login/index.vue'),
        meta: {
            title: '',
            keepAlive: false
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
