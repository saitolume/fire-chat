import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import Vuetify from 'vuetify';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import './registerServiceWorker';

Vue.config.productionTip = false;

const config = {
  // Production
  // apiKey:            'AIzaSyDR5YMxACiJmAXU2-ai7fd902UHQ8Toa6I',
  // authDomain:        'fire-chat-165bc.firebaseapp.com',
  // databaseURL:       'https://fire-chat-165bc.firebaseio.com',
  // projectId:         'fire-chat-165bc',
  // storageBucket:     'fire-chat-165bc.appspot.com',
  // messagingSenderId: '69151851685',

  // Staging
  apiKey:            'AIzaSyALjVHuHDcsLN1zG9xdbyIJPGDkRekFLqg',
  authDomain:        'fire-chat-staging.firebaseapp.com',
  databaseURL:       'https://fire-chat-staging.firebaseio.com',
  projectId:         'fire-chat-staging',
  storageBucket:     'fire-chat-staging.appspot.com',
  messagingSenderId: '97524655712',
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });

Vue.use(Vuetify, {
  iconfont: 'mdi',
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
