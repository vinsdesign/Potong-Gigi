import { createRouter, createWebHistory } from 'vue-router'
import FirstPage from '../views/FirstPage.vue'
import SecondPage from '../views/SecondPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/SecondPage',
      name: 'SecondPage',
      component: SecondPage
    }
  ]
})

export default router
