import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Cart from '@/components/Cart'

import Index from '@/components/admin/Index'
import New from '@/components/admin/New'
import Products from '@/components/admin/Products'
import Edit from '@/components/admin/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Index,
      children: [
        {
            path: 'new',
            name: 'New',
            component: New
        },
        {
            path: '',
            name: 'Products',
            component: Products
        },
        {
            path: 'edit/:id',
            name: 'Edit',
            component: Edit
        }
      ]
    }
  ]
})
