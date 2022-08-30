import Vue from 'vue';
import Router from 'vue-router';
import Flowers from '../views/Flowers.vue';

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
    }
  ]
});