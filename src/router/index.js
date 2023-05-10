import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccountView from '../views/AccountView.vue'
import CreatePost from '../views/CreatePostView.vue'
import MyPost from '../views/MyPostView.vue'
import MyOrder from '../views/MyOrderView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView
    },
    {
      path: '/createpost',
      name: 'createpost',
      component: CreatePost
    },
    {
      path: '/mypost',
      name: 'mypost',
      component: MyPost
    },
    {
      path: '/myorder',
      name: 'myorder',
      component: MyOrder
    }
  ]
})

export default router