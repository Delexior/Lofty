import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from "../components/HomeComponent";
import AboutComponent from "../components/AboutComponent";
import CrudComponent from "../components/CrudComponent";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/crud',
    name: 'Crud',
    component: () => import('../views/Crud.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
