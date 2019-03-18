import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Luckyspin from '@/view/Luckyspin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/luckyspin',
      name: 'Luckyspin',
      component: Luckyspin
    }
  ]
})
