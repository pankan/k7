import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Works from './views/Works.vue'
import Contact from './views/Contact.vue'
import WorkDetail from './views/WorkDetail.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/works', component: Works },
  { path: '/contact', component: Contact },
  { path: '/works/:id', component: WorkDetail, name: 'WorkDetail' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Always scroll to top
    return { top: 0 }
  },
})

export default router;
