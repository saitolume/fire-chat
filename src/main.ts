import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase';
import './registerServiceWorker';

Vue.config.productionTip = false;

const config = {
  apiKey: 'AIzaSyCIdk8lf09fbKcgGuMXa-kwOo9HCyFR9Zw',
  authDomain: 'fire-chat-2aa0b.firebaseapp.com',
  databaseURL: 'https://fire-chat-2aa0b.firebaseio.com',
  projectId: 'fire-chat-2aa0b',
  storageBucket: 'fire-chat-2aa0b.appspot.com',
  messagingSenderId: '729648464323'
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
