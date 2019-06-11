import Vue from 'vue'
import Router from 'vue-router'

const vue = new Vue()
Vue.use(Router)

const checkLogin = () => localStorage.getItem('loanuser') ? '/home' : '/login'

const router = new Router({
  // mode: 'history',
  routes: [{
    path: '/',
    redirect: checkLogin(),
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
                import('@/views/login/'),
  },
  {
    path: '/home',
    name: 'home',
    component: () =>
                import('@/views/home/'),
  },
  {
    path: '*',
    name: '404',
    component: () =>
                import('@/views/error-page/404.vue'),
  },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    next()
    return
  }
  localStorage.getItem('loanuser') ? next() : next('/login')
})
router.afterEach(() => {
  if (window.dom_container) {
    vue.$util.easeout(window.dom_container, 0, 5)
  }
})

export default router
