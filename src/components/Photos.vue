<template>
  <div>
    <span v-if="(photo, index) in photos"
        v-bind:key="index"
        :className="className">
      <img :src="imgProps(photo)" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'photos',
  computed: {
    imgProps(photo) {
      return this.preloadImage(photo);
    },
  },
  methods: {
    preloadImage(photo) {
      return new Promise((resolve, reject) => {
        const img = new Image();

        // resolve the promise with our url so it is
        // returned in the result of Promise.all
        img.onload = resolve(photo);
        img.onerror = err => reject(err);
        img.src = photo;
      });
    },
  },
  props: {
    className: String,
    photos: Array,
  },
};
</script>

<style lang="scss">
.about__content__img {
  display: block;
  max-width: 100%;
  width: auto;
  height: auto;
}
</style>
