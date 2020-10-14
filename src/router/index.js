import Vue from 'vue'
import VueRouter from 'vue-router'
import EventCreate from '@/views/EventCreate.vue'
import EventList from '@/views/EventList.vue'
import EventShow from '@/views/EventShow.vue'
import DinamicRoutes01 from '@/views/DinamicRoutes01.vue'
import DinamicRoutes02 from '@/views/DinamicRoutes02.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'event-show',
    component: EventShow,
    props: true
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: EventCreate
  },
  //dinamic routing expl01
  {
    path: '/dinamic-routes01/:username01',
    name: 'dr01',
    component: DinamicRoutes01
  },
  //dinamic routing expl02
  {
    path: '/dinamic-routes02/:username02',
    name: 'dr02',
    component: DinamicRoutes02,
    props: true
  }
  //{
  //path: '/about',
  //name: 'About',
  //// route level code-splitting
  //// this generates a separate chunk (about.[hash].js) for this route
  //// which is lazy-loaded when the route is visited.
  //component: () =>
  //  import(/* webpackChunkName: "about" */ '../views/About.vue')
  //}
]

const router = new VueRouter({
  mode: 'history', // see : https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
  base: process.env.BASE_URL,
  routes
})

export default router
