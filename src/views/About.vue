<template>
  <div class="about">
    <Welcome msg="Jeanne Sager" sub="photography"/>
    <h4>About</h4>
    <Copy :paragraphs="content" className="about__content" />
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue';
import Copy from '@/components/Copy.vue';

export default {
  name: 'about',
  components: {
    Welcome,
    Copy,
  },
  computed: {
    content() {
      return this.$store.getters.ABOUT_CONTENT;
    },
    photos() {
      return this.$store.getters.ABOUT_PHOTOS;
    },
  },
};
</script>

<style lang="scss">
  .about__content {
    padding: 10px;
    text-align: center;
  }

  .about__content__p {
    margin-bottom: 10px;
  }
</style>
