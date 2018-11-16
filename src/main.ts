import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import Vuetify from 'vuetify';
import firebase from 'firebase/app';
import firebaseConfig from '../firebaseConfig';
import 'firebase/auth';
import 'firebase/firestore';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import './registerServiceWorker';

Vue.config.productionTip = false;

// production: [0], staging: [1]
firebase.initializeApp(firebaseConfig[0]);
firebase.firestore().settings({ timestampsInSnapshots: true });

Vue.use(Vuetify, {
  iconfont: 'mdi',
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
