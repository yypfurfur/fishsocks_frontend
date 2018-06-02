import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Index from '@/components/Index'
import Pay from '@/components/Pay'
import Ticket from '@/components/Ticket'
import Demo from '@/components/demo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/pay',
      name: 'Pay',
      component: Pay
    },
    {
      path: '/ticket',
      name: 'Ticket',
      component: Ticket
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    }
  ]
})
