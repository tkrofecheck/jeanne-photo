<template>
  <div>
    <span v-for="(photo, index) in photos"
        v-bind:photo="photo"
        v-bind:key="index">
      <img :src="photo" :className="className"/>
    </span>
  </div>
</template>

<script>
export default {
  name: 'photos',
  props: {
    className: String,
    photos: Array,
  },
};
</script>

<style scoped lang="scss">
img {
  max-width: 100%;
  width: auto;
  height: auto;
}

.about__content__img {
  display: block;
}
</style>
