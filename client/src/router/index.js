import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/main_pages/Home.vue'
import Login from '@/views/main_pages/Login.vue'
import Register from '@/views/main_pages/Register.vue'
import Search from '@/views/main_pages/Search.vue'
import About from '@/views/main_pages/About.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },{
            path: '/login',
            component: Login
        }, {
            path: '/register',
            component: Register
        },{
            path: '/search',
            component: Search
        },{
            path: '/about',
            component: About
        }
    ]
})
