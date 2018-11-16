import Vue from 'vue';
import Router from 'vue-router';
import About from './views/About.vue';
import Chat from './views/Chat.vue';
import Home from './views/Home.vue';
import Setting from './views/Setting.vue';
import SignIn from './views/SignIn.vue';
import SignUp from './views/SignUp.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/',        name: 'home',    component: Home },
    { path: '/signin',  name: 'signin',  component: SignIn },
    { path: '/signup',  name: 'signup',  component: SignUp },
    { path: '/chat',    name: 'chat',    component: Chat },
    { path: '/about',   name: 'about',   component: About },
    { path: '/setting', name: 'setting', component: Setting },
  ],
});
