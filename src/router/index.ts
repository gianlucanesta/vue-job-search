import { createRouter, createWebHashHistory } from 'vue-router'
const HomeView = () => import('../views/HomeView.vue')
const JobResultsView = () => import('../views/JobResultsView.vue').then((m) => m.default || m)
const JobView = () => import('../views/JobView.vue').then((m) => m.default || m)
const TeamsView = () => import('@/views/TeamsView.vue').then((m) => m.default || m)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/jobs/results',
    name: 'JobResults',
    component: JobResultsView
  },
  {
    path: '/jobs/results/:id',
    name: 'Joblisting',
    component: JobView
  },
  {
    path: '/teams',
    name: 'Teams',
    component: TeamsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: 'smooth' }
  }
})

export default router
