<template>
  <div>
    <div class="section__bg section__bg--hightrans"></div>
    <iframe :class="classNames"
      :src="gallery.url" />
    <div v-html="getHTML(gallery.url)"></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'galleryiframe',
  computed: {
    classNames() {
      return `galleries__iframe ${this.gallery.className}`;
    },
  },
  methods: {
    getHTML(url) {
      // return this.$store.getters.FETCHED_HTML;
      return axios
        .get(url)
        .then((response) => {
          console.log(response);
          return response.data;
        });
    },
  },
  props: {
    gallery: Object,
  },
};
</script>

<style lang="scss">
.galleries__iframe {
  border: 0;
  width: 100%;
  height: 100%;
}
</style>
