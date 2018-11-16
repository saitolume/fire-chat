import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    email: '',
    emailVerified: false,
    loginState: false,
    name: '',
    uid: '',
  },
  getters: {
    email(state)         { return state.email; },
    emailVerified(state) { return state.emailVerified; },
    loginState(state)    { return state.loginState; },
    name(state)          { return state.name; },
    uid(state)           { return state.uid; },
  },
  mutations: {
    setEmail(state, payload)         { state.email = payload.email; },
    setEmailVerified(state, payload) { state.emailVerified = payload.emailVerified; },
    setLoginState(state, value)      { state.loginState = value; },
    setName(state, payload)          { state.name = payload.name; },
    setUid(state, payload)           { state.uid = payload.name; },
  },
  actions: {
    updateEmail({ commit }, email) {
      commit('setEmail', { email });
    },
    updateEmailVerified({ commit }, emailVerified) {
      commit('setEmailVerified', { emailVerified });
    },
    updateLoginState({ commit }, value) {
      commit('setLoginState', value);
    },
    updateName({ commit }, name) {
      commit('setName', { name });
    },
    updateUid({ commit }, uid) {
      commit('setUid', { uid });
    },
  },
});
export default store;
