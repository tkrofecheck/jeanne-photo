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
    HOME: {},
    INVESTMENT: {},
  },
  mutations: {
    SET_ABOUT(state, payload) {
      state.ABOUT = payload;
    },
    SET_HOME(state, payload) {
      state.HOME = payload;
    },
    SET_INVESTMENT(state, payload) {
      state.INVESTMENT = payload;
    },
  },
  getters: {
    ABOUT_CONTENT(state) {
      return state.ABOUT.about.content;
    },
    ABOUT_PHOTOS(state) {
      return state.ABOUT.about.photos;
    },
    HOME_CONTENT(state) {
      return state.HOME.home.content;
    },
    HOME_PHOTOS(state) {
      return state.HOME.home.photos;
    },
    INVESTMENT_CONTENT(state) {
      return state.INVESTMENT.investment.content;
    },
    INVESTMENT_SECTIONS(state) {
      return state.INVESTMENT.investment.sections;
    },
  },
  actions: {
    async getAboutData({ commit }) {
      try {
        commit('SET_ABOUT', await fetchData('/data/about.json'));
      } catch (e) {
        console.error('error with SET_ABOUT on axios.get', e);
      }
    },
    async getHomeData({ commit }) {
      try {
        commit('SET_HOME', await fetchData('/data/home.json'));
      } catch (e) {
        console.error('error with SET_HOME on axios.get', e);
      }
    },
    async getInvestmentData({ commit }) {
      try {
        commit('SET_INVESTMENT', await fetchData('/data/investment.json'));
      } catch (e) {
        console.error('error with SET_INVESTMENT on axios.get', e);
      }
    },
  },
});
