import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// pages
import Home from '../views/Home.vue'
import Document from '../views/Document.vue'

let routes = [
  {
    path: '/',
    component: Home,
    props: true
  },
  {
    path: '/:categories/:document',
    component: Document,
    props: true
  },
  {
    path: '*',
    component: Home,
    props: true
  }
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router