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
    ABOUT_CONTENT: {},
    ABOUT_PHOTOS: {},
  },
  mutations: {
    SET_ABOUT_CONTENT(state, payload) {
      state.ABOUT_CONTENT = payload;
    },
    SET_ABOUT_PHOTOS(state, payload) {
      state.ABOUT_PHOTOS = payload;
    },
  },
  getters: {
    ABOUT_CONTENT(state) {
      return state.ABOUT_CONTENT.about.content;
    },
    ABOUT_PHOTOS(state) {
      return state.ABOUT_PHOTOS.about.photos;
    },
  },
  actions: {
    async getAboutPhotos({ commit }) {
      try {
        commit('SET_ABOUT_PHOTOS', await fetchData('/data/about-photos.json'));
      } catch (e) {
        console.error('error with SET_ABOUT_PHOTOS on axios.get', e);
      }
    },
    async getAboutContent({ commit }) {
      try {
        commit('SET_ABOUT_CONTENT', await fetchData('/data/about-content.json'));
      } catch (e) {
        console.error('error with SET_ABOUT_CONTENT on axios.get', e);
      }
    },
  },
});
