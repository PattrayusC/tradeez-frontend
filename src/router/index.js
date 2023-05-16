import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccountView from '../views/AccountView.vue'
import CreatePost from '../views/CreatePostView.vue'
import MyPost from '../views/MyPostView.vue'
import MyOrder from '../views/MyOrderView.vue'
import Detail from '../views/Detail.vue'
import EditPost from '../views/EditPost.vue'
import RewardPost from '../views/RewardView.vue'
import Chat from '../views/Chat.vue'
import { getAuth,onAuthStateChanged} from 'firebase/auth'

const isLoggedin = false
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
      path: '/account',
      name: 'account',
      component: AccountView,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/createpost',
      name: 'createpost',
      component: CreatePost,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/mypost',
      name: 'mypost',
      component: MyPost,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/myorder',
      name: 'myorder',
      component: MyOrder,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/detail/:item',
      name: 'detail',
      component: Detail
    },
    {
      path: '/edit/:item',
      name: 'edit',
      component: EditPost,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/chat/:fromblog/:OtherUid',
      name: 'chat',
      component: Chat,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/reward',
      name: 'reward',
      component: RewardPost
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (requiresAuth) {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
          console.log("You are authorized to access this area.");
          next()
      }
      else {
        console.log("You are not authorized to access this area.")
        next('home')
      }
    })
  } else {
    next()
  }
})
export default router