<template>
  <div class="galleries__nav">
    <span v-for="(link, index) in links"
      v-bind:key="index"
      v-bind:link="link">
      <button v-on:click="loadIframe(link)">
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
    loadIframe(link) {
      console.log('load iframe', link);
      this.$store.commit('SET_GALLERY', link);
    },
  },
};
</script>

<style lang="scss">
</style>
