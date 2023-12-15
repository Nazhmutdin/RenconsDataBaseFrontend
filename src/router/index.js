import { createRouter, createWebHistory } from 'vue-router'

import WelderRegistry from '../pages/WelderRegistryPage.vue'
import WelderNDTRegistry from '../pages/WelderNDTRegistry.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import WelderPage from '../pages/WelderPage'
import MainPage from '../pages/MainPage.vue'


export default new createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "main",
            component: MainPage
        },
        {
            path: '/welder-registry',
            name: 'welderRegistry',
            component: WelderRegistry
        },
        {
            path: '/welder-ndt-registry',
            name: 'welderNDTRegistry',
            component: WelderNDTRegistry
        },
        {
            path: '/welder/:id',
            name: 'welder',
            component: WelderPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: "notFound",
            component: NotFoundPage
        }
    ]
})
