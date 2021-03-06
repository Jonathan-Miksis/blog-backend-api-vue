import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PostsIndex from '../views/PostsIndex.vue'
import PostsNew from '../views/PostsNew.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import PostShow from '../views/PostShow.vue'
import PostEdit from '../views/PostEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'PostsIndex',
    component: PostsIndex
  },
  {
    path: '/posts/new',
    name: 'PostsNew',
    component: PostsNew
  },
  {
    path: '/posts/:id',
    name: 'PostShow',
    component: PostShow
  },
  {
    path: '/posts/:id/edit',
    name: 'PostEdit',
    component: PostEdit
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
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
