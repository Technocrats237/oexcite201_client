import Vue from 'vue'
import App from './App.vue'
import VueStrap from 'vue-strap'
import axios from 'axios'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import middlewarePipeline from './middleware/middleware'

import {loadLocaleMessages} from './locales/i18n'
import AuthService from './services/auth.service'


Vue.config.productionTip = false
axios.defaults.baseURL = process.env.BASE_API || 'http://localhost:8000/api/v1/'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem('token')
    if (token)
        config.headers['Authorization'] = `Bearer ${token}`
    return config
}, function (error) {
    // Do something with request error
    return Promise.reject(error)
})
Vue.prototype.$http = axios

Vue.use(VueRouter)
Vue.use(VueStrap)
Vue.use(VueI18n)
Vue.use(ElementUI)

const i18n = new VueI18n({
    locale: process.env.VUE_APP_I18N_LOCALE || 'en',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
    messages: loadLocaleMessages()
})
Vue.prototype.$authService = new AuthService(axios, store, router)

router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next()
    }
    const middleware = to.meta.middleware
    const context = {
        to,
        from,
        next,
        store,
        router,
        axios
    }
    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    })
})

Vue.mixin({
    data() {
        return {
            appName: process.env.APP_NAME || "Smarta"
        }
    }
})

new Vue({
    router,
    i18n,
    store,
    render: h => h(App)
}).$mount('#app');
