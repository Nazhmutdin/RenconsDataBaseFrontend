import { createRouter, createWebHistory } from 'vue-router'

import WelderRegistry from '../pages/WelderRegistryPage.vue'
import WelderNDTRegistry from '../pages/WelderNDTRegistry.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import WelderPage from '../pages/WelderPage'
import MainPage from '../pages/MainPage.vue'
import AuthPage from '../pages/AuthPage'
import store from "@/store/index"


let routes = [
    {
        path: '/',
        name: "main",
        component: MainPage,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/welder-registry',
        name: 'welderRegistry',
        component: WelderRegistry,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/welder-ndt-registry',
        name: 'welderNDTRegistry',
        component: WelderNDTRegistry,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/welder/:id',
        name: 'welder',
        component: WelderPage,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: "notFound",
        component: NotFoundPage
    },
    {
        path: "/auth",
        name: "authentication",
        component: AuthPage
    }
]

const router = createRouter(
    {
        mode: 'history',
        history: createWebHistory(),
        routes: routes
    }
)


const isAuthenticated = () => {
    return store.state.isAuthenticated
}


router.beforeEach((to, _, next) => {
    if (to.matched.some((route) => route.meta?.requiresAuth)){
        if (isAuthenticated()){
            next()
        } else{
            next("/auth")
        }
    } else {
        next()
    }
})

export default router
