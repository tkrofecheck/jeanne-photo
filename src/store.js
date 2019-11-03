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
    ABOUT: '',
    ABOUT_SCROLLTOP: 0,
    FETCHED_HTML: '',
    GALLERY_NAV: '',
    GALLERY: {
      title: 'Weddings',
      className: 'weddings',
      url: '../galleries/weddings.htm',
      data: '../data/weddings.json',
    },
    GALLERY_URL: '',
    HOME: '',
    INVESTMENT: '',
  },
  mutations: {
    SET_ABOUT(state, payload) {
      state.ABOUT = payload;
    },
    SET_ABOUT_SCROLLTOP(state, payload) {
      state.ABOUT_SCROLLTOP = payload;
    },
    SET_GALLERY_HTML(state, payload) {
      state.GALLERY_HTML = payload;
    },
    SET_GALLERY_NAV(state, payload) {
      state.GALLERY_NAV = payload;
    },
    SET_GALLERY_URL(state, payload) {
      state.GALLERY_URL = payload;
    },
    SET_HOME(state, payload) {
      state.HOME = payload;
    },
    SET_INVESTMENT(state, payload) {
      state.INVESTMENT = payload;
    },
  },
  getters: {
    ABOUT_SCROLLTOP(state) {
      return state.ABOUT_SCROLLTOP;
    },
  },
  actions: {
    async fetchAbout({ commit }) {
      try {
        commit('SET_ABOUT', await fetchData('/pages/about.htm'));
      } catch (e) {
        console.error('error with SET_ABOUT on axios.get', e);
      }
    },
    async fetchGalleryNav({ commit }) {
      try {
        commit('SET_GALLERY_NAV', await fetchData('/pages/gallery-nav.htm'));
      } catch (e) {
        console.error('error with SET_GALLERY_NAV on axios.get', e);
      }
    },
    async fetchHome({ commit }) {
      try {
        commit('SET_HOME', await fetchData('/pages/home.htm'));
      } catch (e) {
        console.error('error with SET_HOME on axios.get', e);
      }
    },
    async fetchInvestment({ commit }) {
      try {
        commit('SET_INVESTMENT', await fetchData('/pages/investment.htm'));
      } catch (e) {
        console.error('error with SET_INVESTMENT on axios.get', e);
      }
    },
    async fetchGallery({ commit }, url) {
      try {
        commit('SET_GALLERY_HTML', await fetchData(`/galleries/${url}`));
      } catch (e) {
        console.error('error with SET_GALLERY_HTML on axios.get', e);
      }
    },
  },
});
