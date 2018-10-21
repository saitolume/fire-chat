import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loginState: false,
    email: '',
  },
  getters: {
    loginState(state) {
      return state.loginState;
    },
    email(state) {
      return state.email;
    }
  },
  mutations: {
    setLoginState(state, value) {
      state.loginState = value;
    },
    setEmail(state, payload) {
      state.email = payload.email;
    }
  },
  actions: {
    updateLoginState({ commit }, value) {
      commit('setLoginState', value);
    },
    updateEmail({ commit }, email) {
      commit('setEmail', { email });
    },
  },
});
export default store;
