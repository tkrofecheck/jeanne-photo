<template>
  <footer :class="className">
    <p v-for="(paragraph, index) in paragraphs"
      v-bind:key="index"
      v-html="paragraph" />
  </footer>
</template>

<script>
export default {
  name: 'footer',
  props: {
    paragraphs: Array,
  },
};
</script>

<style lang="scss">
</style>
