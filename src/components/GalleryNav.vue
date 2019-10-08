<template>
  <div class="galleries__nav">
    <span v-for="(link, index) in links"
      v-bind:key="index"
      v-bind:link="link">
      <button v-on:click="loadGallery(link)">
        {{ link.title }}
      </button>
    </span>
  </div>
</template>

<script>
export default {
  name: 'galleryNav',
  props: {
    links: Array,
  },
  methods: {
    getGalleryContent() {
      this.$store.dispatch('fetchHTML', this.$store.getters.GALLERY.url);
    },
    async loadGallery(link) {
      await this.$store.commit('SET_GALLERY', link);
      this.getGalleryContent();
    },
  },
  mounted() {
    this.getGalleryContent();
  },
};
</script>

<style lang="scss">
</style>
