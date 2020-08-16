import Vue from 'vue'
import Router from 'vue-router'
import {auth, guest, log} from '../middleware/index'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: require('@/components/Auth/Login').default,
            meta: {
                middleware: [guest, log]
            }
        },
        {
            path: '/dashboard',
            component: require('@/components/Layout/Main').default,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: require('@/components/Pages/Dashboard').default,
                    meta: {
                        middleware: [auth, log]
                    }
                },
                {
                    path: 'settings',
                    name: 'settings',
                    component: require('@/components/Pages/Settings').default,
                    meta: {
                        middleware: [auth, log]
                    }
                }
            ]
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
