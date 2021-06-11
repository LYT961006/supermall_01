import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/views/Home/Home.vue')
const Cat = () => import('@/views/Cat/Cat.vue')
const Order = () => import('@/views/Order/Order.vue')
const Profile = () => import('@/views/Profile/Profile.vue')
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/cat',
      name: 'Cat',
      component: Cat
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ],
  mode: 'history'
})
