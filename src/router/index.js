import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkView from '@/views/WorkView.vue'
import ContactView from '@/views/ContactView.vue'
import WorkDetails from '@/views/WorkDetails.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView
    },
    {
      path: '/projects',
      name: 'Projects',
      component: WorkView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },

    {
      path: '/projects/:name',
      name: 'WorkDetails',
      component: WorkDetails,
      props: true
    }
  ]
})

export default router
