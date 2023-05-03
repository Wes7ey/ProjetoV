import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/resumo',
      name: 'resumo',
      component: () => import('../views/Resumo.vue')
    },
    {
      path: '/qualificacoes',
      name: 'qualificacoes',
      component: () => import('../views/Qualificacoes.vue')
    },
    {
      path: '/hobbies',
      name: 'hobbies',
      component: () => import('../views/Hobbies.vue')
    },
    {
      path: '/interesses',
      name: 'interesses',
      component: () => import('../views/Interesses.vue')
    },
    {
      path: '/contatos',
      name: 'contatos',
      component: () => import('../views/Contatos.vue')
    }
  ]
})

export default router
