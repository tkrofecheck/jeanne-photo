<template>
  <div v-lazy-container="{ selector: 'img' }" :class="className">
    <img :data-src="require(`../assets/photos/${photo}`)" v-bind:alt="photo" />
  </div>
</template>

<script>
export default {
  name: 'photo',
  props: {
    className: String,
    photo: String,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
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
