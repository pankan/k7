import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Works from './views/Works.vue'
import Contact from './views/Contact.vue'
import Detail from './views/Detail.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/works', component: Works },
  { path: '/contact', component: Contact },
  { path: '/works/detail', component: Detail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
