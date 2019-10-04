<template>
  <footer :class="className">
    <p v-for="(paragraph, index) in paragraphs"
      v-bind:key="index"
      v-html="paragraph" />
  </footer>
</template>

<script>
export default {
  name: 'subcopy',
  props: {
    className: String,
    paragraphs: Array,
  },
};
</script>

<style lang="scss">
</style>
