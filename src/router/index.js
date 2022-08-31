import Vue from 'vue';
import Router from 'vue-router';
import Flowers from '../views/Flowers.vue';
import Register from '../views/Register.vue'
import ThankYou from '../views/ThankYou.vue'
import Analytics from '../views/Analytics.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/flowers'
    },
    {
      path: '/flowers',
      name: 'flowers',
      component: Flowers
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/thankyou',
      name: 'thankyou',
      component: ThankYou
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: Analytics
    }
  ]
});