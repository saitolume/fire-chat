import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('./views/SignIn.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/SignUp.vue'),
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('./views/Chat.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
  ],
});
