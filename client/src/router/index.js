import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Game from '@/components/Game'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/games',
      name: 'game',
      component: Game
    }
  ]
})
