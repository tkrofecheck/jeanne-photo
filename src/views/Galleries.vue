<template>
  <div class="galleries" :style="style">
    <GalleryNav ref="GalleryNav"
      :links="this.$store.getters.GALLERY_NAV" />
    <Gallery
      ref="Gallery"
      :gallery="this.$store.getters.GALLERY"
      :html="this.$store.getters.FETCHED_HTML" />
  </div>
</template>

<script>
import Gallery from '@/components/Gallery.vue';
import GalleryNav from '@/components/GalleryNav.vue';

export default {
  name: 'galleries',
  components: {
    Gallery,
    GalleryNav,
  },
  computed: {
    className() {
      return '';
    },
    style() {
      return {
        top: `${document.getElementById('nav').offsetHeight}px`,
      };
    },
  },
};
</script>

<style lang="scss">
.galleries {
  position: relative;
}
</style>
