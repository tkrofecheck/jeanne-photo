<template>
  <div>
    <div class="section__bg section__bg--hightrans"></div>
    <iframe :class="classNames"
      :src="gallery.url" />
  </div>
</template>

<script>
export default {
  name: 'galleryiframe',
  computed: {
    classNames() {
      return `galleries__iframe ${this.gallery.className}`;
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
