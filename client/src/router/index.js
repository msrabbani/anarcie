import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import GameTest from '@/components/GameTest'
import LoginTest from '@/components/LoginTest'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/loginfb',
      name: 'Login',
      component: Login
    },
    {
      path: '/test',
      name: 'GameTest',
      component: GameTest
    },
    {
      path: '/login',
      name: 'LoginTest',
      component: LoginTest
    }
  ]
})
