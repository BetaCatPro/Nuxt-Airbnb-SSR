import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/components/layout/MainLayout.vue'),
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('@/pages/Home/index.vue')
            },
            {
                path: 'rooms/details/:id',
                name: 'RoomDetails',
                component: () => import('@/pages/RoomDetails/index.vue')
            },
            {
                path: 'reservation-center',
                name: 'Reservations',
                component: () =>
                    import('@/pages/Reservations/AircncReservations.vue')
            },
            {
                path: 'browsing-history',
                name: 'BrowsingHistory',
                component: () =>
                    import('@/pages/BrowsingHistory/AircncBrowsingHistory.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/Auth/index.vue')
    }
]

// Always leave this as last one
routes.push({
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/pages/NotFound/index.vue')
})

export default routes
