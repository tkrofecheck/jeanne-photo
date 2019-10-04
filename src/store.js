import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const fetchData = url => new Promise((resolve) => {
  axios
    .get(url)
    .then(response => resolve(response.data));
});

export default new Vuex.Store({
  state: {
    ABOUT: {},
    ABOUT_SCROLLTOP: 0,
    HOME: {},
    INVESTMENT: {},
  },
  mutations: {
    SET_ABOUT(state, payload) {
      state.ABOUT = payload;
    },
    SET_ABOUT_SCROLLTOP(state, payload) {
      state.ABOUT_SCROLLTOP = payload;
    },
    SET_HOME(state, payload) {
      state.HOME = payload;
    },
    SET_INVESTMENT(state, payload) {
      state.INVESTMENT = payload;
    },
  },
  getters: {
    ABOUT(state) {
      return state.ABOUT.about;
    },
    ABOUT_SCROLLTOP(state) {
      return state.ABOUT_SCROLLTOP;
    },
    HOME(state) {
      return state.HOME.home;
    },
    INVESTMENT(state) {
      return state.INVESTMENT.investment;
    },
  },
  actions: {
    async fetchAboutData({ commit }) {
      try {
        commit('SET_ABOUT', await fetchData('/data/about.json'));
      } catch (e) {
        console.error('error with SET_ABOUT on axios.get', e);
      }
    },
    async fetchHomeData({ commit }) {
      try {
        commit('SET_HOME', await fetchData('/data/home.json'));
      } catch (e) {
        console.error('error with SET_HOME on axios.get', e);
      }
    },
    async fetchInvestmentData({ commit }) {
      try {
        commit('SET_INVESTMENT', await fetchData('/data/investment.json'));
      } catch (e) {
        console.error('error with SET_INVESTMENT on axios.get', e);
      }
    },
  },
});
