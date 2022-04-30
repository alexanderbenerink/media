import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'films',
    component: () => import(/* webpackChunkName: "about" */ '../views/FilmView.vue')
  },
  {
    path: '/games',
    name: 'games',
    component: () => import(/* webpackChunkName: "about" */ '../views/GameView.vue')
  },
  {
    path: '/wheel',
    name: 'wheel',
    component: () => import(/* webpackChunkName: "about" */ '../views/WheelView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
