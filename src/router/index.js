import Vue from 'vue'
import VueRouter from 'vue-router'
import Tables from '../views/Tables.vue'
import Calculator from '../components/Calculator.vue'
import AddData from '../components/AddData.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tables',
    component: Tables
  },
  {
    path: '/addData',
    name: 'AddData',
    component: AddData
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator
  },
  // {
  //   path: '/calculator',
  //   name: 'Calculator',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Calculator.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
