import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Question from '@/components/Question'
import HTML from '@/components/HTML'
import JS from '@/components/JS'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/html',
      name: 'HTML',
      component: HTML
    },
    {
      path: '/js',
      name: 'JS',
      component: JS
    }
  ]
})
