import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/test.vue'
import Signup from '../views/signup.vue'
import Login from '../views/login.vue'
import PostsIndex from '../views/PostsIndex.vue'
import PostsNew from '../views/PostsNew.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: 'test-page',
    name: 'test',
    component: Test
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/postsindex',
    name: 'PostsIndex',
    component: PostsIndex
  },
  {
    path: '/PostsNew',
    name: 'PostsNew',
    component: PostsNew
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
