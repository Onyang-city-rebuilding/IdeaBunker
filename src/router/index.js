import Vue from 'vue'
import Router from 'vue-router'
import nav_bottom from '@/components/nav_bottom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'nav_bottom',
      component: nav_bottom
    }
  ]
})


