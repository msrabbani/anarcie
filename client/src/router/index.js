import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import GameTest from '@/components/GameTest'
import LoginTest from '@/components/LoginTest'
import LoginFB from '@/components/LoginFB'

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
      path: '/logindenny',
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
    },
    {
      path: '/loginfb',
      name: 'LoginFB',
      component: LoginFB
    }
  ]
})
