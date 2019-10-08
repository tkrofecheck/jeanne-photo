<template>
  <div>
    <div class="section__bg section__bg--hightrans"></div>
    <!-- <iframe :class="classNames"
      :src="gallery.url" /> -->
    <div v-html="html"></div>
  </div>
</template>

<script>
export default {
  name: 'gallery',
  computed: {
    classNames() {
      return `gallery__container ${this.gallery.className}`;
    },
  },
  props: {
    gallery: Object,
    html: String,
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
