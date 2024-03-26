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
  { path: '/works/:id', component: WorkDetail, name: 'WorkDetail', meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Always scroll to top
    return { top: 0 }
  },
})

router.beforeEach((to, _, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated')
    if (isAuthenticated) {
      next()
    } else {
      const password = prompt('Please enter the password to view the work detail')
      if (password === '0pen$esam3') {
        sessionStorage.setItem('isAuthenticated', 'true')
        next()
      } else {
        alert('Invalid password. Access denied.')
        next(false)
      }
    }
  } else {
    next()
  }
})

export default router;
