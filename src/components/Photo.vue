<template>
  <div v-lazy-container="{ selector: 'img' }">
    <img :data-src="data.src" :alt="data.alt" />
  </div>
</template>

<script>
export default {
  name: 'photo',
  props: {
    data: Object,
  },
};
</script>

<style lang="scss">
img {
  max-width: 100%;
  width: auto;
  height: auto;
}
</style>
