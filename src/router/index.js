import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Resume from '@/components/Resume'
import Zen from '@/components/Zen'
import Music from '@/components/Music'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/r',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/z',
      name: 'Zen',
      component: Zen
    },
    {
      path: '/m',
      name: 'Music',
      component: Music
    }
  ]
})
