import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkView from '@/views/WorkView.vue'
import WorkDetails from '@/views/WorkDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/work',
      name: 'Work',
      component: WorkView,
      children: [
        {
          path: '/:name',
          name: 'WorkDetails',
          component: WorkDetails,
          props: true
        }
      ]
    }
  ]
})

export default router
