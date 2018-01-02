import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Question from '@/components/Question'
import HTML from '@/components/HTML'
import JS from '@/components/JS'
import CSS from '@/components/CSS'

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
    },
    {
      path: '/css',
      name: 'CSS',
      component: CSS
    },
    {
      path: '/math',
      name: 'Question',
      component: Question
    }
  ]
})
