<template>
  <div>
    <a v-on:click="loadGallery()"></a>
  </div>
</template>

<script>
export default {
  name: 'GalleryNavLink',
  props: {
    data: Object,
  },
  methods: {
    loadGallery() {
      this.$store.dispatch('fetchGallery', data.href);
    }
  }
};
</script>

<style lang="scss"></style>