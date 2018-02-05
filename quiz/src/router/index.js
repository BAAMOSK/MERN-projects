import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Navbar from '@/components/Navbar'
import Lesson from '@/components/Lesson'
import Quiz from '@/components/Quiz'
import Chat from '@/components/Chat'
import ChatRoom from '@/components/ChatRoom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/lesson',
      name: 'Lesson',
      component: Lesson
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/chatroom',
      name: 'Chatroom',
      component: ChatRoom
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: Quiz
    }
  ]
})
