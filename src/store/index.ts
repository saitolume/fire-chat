import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loginState: false,
    email: '',
    name: '',
  },
  getters: {
    loginState(state) {
      return state.loginState;
    },
    email(state) {
      return state.email;
    },
    name(state) {
      return state.name;
    },
  },
  mutations: {
    setLoginState(state, value) {
      state.loginState = value;
    },
    setEmail(state, payload) {
      state.email = payload.email;
    },
    setName(state, payload) {
      state.name = payload.name;
    },
  },
  actions: {
    updateLoginState({ commit }, value) {
      commit('setLoginState', value);
    },
    updateEmail({ commit }, email) {
      commit('setEmail', { email });
    },
    updateName({ commit }, name) {
      commit('setName', { name });
    },
  },
});
export default store;
