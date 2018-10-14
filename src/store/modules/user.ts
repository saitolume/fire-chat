import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface UserState {
  email: string;
  name: string;
  password: string;
  signin: boolean;
}

export default new Vuex.Store({
  state: {
    email: '',
    name: '',
    password: '',
    signin: false,
  } as UserState,
  getters: {
    getName: (state, getters) => () => {
      return state.name;
    },
  },
  mutations: {
    setName(state, payload) {
      state.name = payload.name;
    },
  },
  actions: {

  },
});
