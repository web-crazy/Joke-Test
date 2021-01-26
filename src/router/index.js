import Vue from 'vue'
import VueRouter from 'vue-router'
import JokeList from '../views/joke-list/index.vue'
import JokeDetail from '../views/joke-detail/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'JokeList',
    component: JokeList
  },
  {
    path: '/:id',
    name: 'JokeDetail',
    component: JokeDetail
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
