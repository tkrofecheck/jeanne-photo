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
    FETCHED_HTML: '',
    GALLERY_NAV: {},
    GALLERY: {
      title: 'Weddings',
      className: 'weddings',
      url: '../galleries/weddings.htm',
      data: '../data/weddings.json',
    },
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
    SET_FETCHED_HTML(state, payload) {
      state.FETCHED_HTML = payload;
    },
    SET_GALLERY_NAV(state, payload) {
      state.GALLERY_NAV = payload;
    },
    SET_GALLERY(state, payload) {
      state.GALLERY = payload;
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
    FETCHED_HTML(state) {
      return state.FETCHED_HTML;
    },
    GALLERY_NAV(state) {
      return state.GALLERY_NAV.galleryNav;
    },
    GALLERY(state) {
      return state.GALLERY;
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
    async fetchGalleryNavData({ commit }) {
      try {
        commit('SET_GALLERY_NAV', await fetchData('/data/gallery-nav.json'));
      } catch (e) {
        console.error('error with SET_GALLERY_NAV on axios.get', e);
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
    async fetchHTML({ commit }, url) {
      try {
        commit('SET_FETCHED_HTML', await fetchData(url));
      } catch (e) {
        console.error('error with SET_FETCHED_HTML on axios.get', e);
      }
    },
  },
});
