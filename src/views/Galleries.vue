<template>
  <div class="galleries">
    <Welcome msg="Jeanne Sager" sub="photography" />
    <GalleryNav ref="GalleryNav" stateName="GALLERY_NAV"/>
    <Gallery ref="Gallery" />
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
};
</script>

<style lang="scss">
.galleries {
  position: relative;
}
</style>
