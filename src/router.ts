import Vue from 'vue'
import Router from 'vue-router'
import NowOnAir from './views/NowOnAir.vue'
import Search from './views/Search.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'now-on-air',
      component: NowOnAir
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
