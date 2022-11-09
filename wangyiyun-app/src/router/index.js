import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import MusicItem from '@/views/MusicItem.vue'
import Sreach from '@/views/Search.vue'
import InfoUser from '@/views/InfoUser.vue'
import Login from '@/views/Login.vue'
import store from '@/store/index.js'
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/musicitem',
    component: MusicItem
  },
  {
    path: '/search',
    component: Sreach
  },
  {
    // 个人中心
    path: '/infoUser',
    component: InfoUser,
    beforeEnter: (to, from, next) => {
      if (
        store.state.isLogin ||
        store.state.token ||
        localStorage.getItem('token')
      ) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    // 登录界面
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from) => {
  if (to.path === '/login') {
    store.state.isFooterShow = false
  } else {
    store.state.isFooterShow = true
  }
})

export default router
