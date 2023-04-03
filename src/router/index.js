import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Usuarios from '../views/Usuarios.vue'
import Imagenes from '../views/Imagenes.vue'
import Clientes from '../views/Clientes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/usuarios/:id',
    name: 'usuarios',
    component: Usuarios
  },
  {
    path: '/imagenes',
    name: 'imagenes',
    component: Imagenes
  },
  {
    path: '/clientes',
    name: 'clientes',
    component: Clientes
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //   }
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
