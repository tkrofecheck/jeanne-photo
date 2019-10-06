<template>
  <div class="galleries" :style="style">
    <GalleryNav ref="GalleryNav"
      :links="this.$store.getters.GALLERY_NAV" />
    <GalleryIframe
      ref="GalleryIframe"
      :gallery="this.$store.getters.GALLERY" />
  </div>
</template>

<script>
import GalleryIframe from '@/components/GalleryIframe.vue';
import GalleryNav from '@/components/GalleryNav.vue';

export default {
  name: 'galleries',
  components: {
    GalleryIframe,
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
