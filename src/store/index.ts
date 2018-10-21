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
    setLoginState(state, value) {
      state.loginState = value;
    },
  },
  actions: {
    changeLoginState({ commit }, value) {
      commit('setLoginState', value);
    },
  },
});
export default store;
