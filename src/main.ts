import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import firebase from 'firebase';
import './registerServiceWorker';

Vue.config.productionTip = false;

const config = {
  apiKey: 'AIzaSyDR5YMxACiJmAXU2-ai7fd902UHQ8Toa6I',
  authDomain: 'fire-chat-165bc.firebaseapp.com',
  databaseURL: 'https://fire-chat-165bc.firebaseio.com',
  projectId: 'fire-chat-165bc',
  storageBucket: 'fire-chat-165bc.appspot.com',
  messagingSenderId: '69151851685',
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
