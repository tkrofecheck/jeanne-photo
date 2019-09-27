<template>
  <article :class="className">
    <p v-for="(paragraph, index) in paragraphs"
      :key="index"
      :class="paragrahClassNames"
      v-html="paragraph"></p>
  </article>
</template>

<script>
export default {
  name: 'copy',
  props: {
    paragraphs: Array,
    className: String,
  },
  computed: {
    paragrahClassNames() {
      return `${this.className}__p`;
    },
  },
};
</script>

<style lang="scss">

</style>
