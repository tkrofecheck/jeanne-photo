<template>
  <div>
    <p :class="paragrahClassNames"
      v-for="(paragraph, index) in content"
      :key="index"
      v-html="paragraph"></p>
  </div>
</template>

<script>
export default {
  name: 'paragraph',
  props: {
    content: Array,
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
