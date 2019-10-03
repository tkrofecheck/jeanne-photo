<template>
  <div class="about">
    <Welcome msg="Jeanne Sager" sub="photography"/>
    <section class="about__section">
      <Photos :photos="photos" className="about__content__img" />
      <Copy :paragraphs="content" className="about__content" />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Copy from '@/components/Copy.vue';
import Photos from '@/components/Photos.vue';
import Welcome from '@/components/Welcome.vue';

export default {
  name: 'about',
  components: {
    Copy,
    Photos,
    Welcome,
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
  .about__section {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    @media screen and (min-width: 415px) {
      flex-direction: row;
    }
  }

  .about__content {
    padding: 0 15px;
    text-align: center;
  }

  .about__content__p {
    margin-bottom: 10px;
  }
</style>
