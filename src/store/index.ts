import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loginState: false,
  },
  getters: {
    loginState(state) {
      return state.loginState;
    },
  },
  mutations: {
    changeLoginStateTrue(state) {
      state.loginState = true;
    },
    changeLoginStateFalse(state) {
      state.loginState = false;
    },
  },
});
export default store;
