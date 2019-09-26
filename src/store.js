import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    FETCHING_PHOTOS: false,
    photos: {},
  },
  mutations: {
    isFetchingPhotos(state, payload) {
      state.FETCHING_PHOTOS = payload;
    },
    setPhotos(state, payload) {
      state.photos = payload;
      return Promise.resolve();
    },
  },
  actions: {
    fetchData({ commit }, url) {
      return new Promise((resolve) => {
        commit('isFetchingPhotos', true);
        axios
          .get(url)
          .then(response => resolve(response));
      });
    },
    async getPhotos({ commit, dispatch }) {
      try {
        await commit('setPhotos', await dispatch('fetchData', './data/photos.json'));
        commit('isFetchingPhotos', false);
      } catch (e) {
        console.error('error with setPhotos on fetch', e);
      }
    },
  },
});
