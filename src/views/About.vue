<template>
  <div class="about">
    <Welcome msg="Jeanne Sager" sub="photography"/>
    <section class="about__section">
      <div v-for="(photo, index) in photos"
        v-bind:key="index" class="about__content__images">
        <Photo v-bind:photo="photo" className="about__content__img" />
      </div>
      <Copy :paragraphs="content" className="about__content" />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Copy from '@/components/Copy.vue';
import Photo from '@/components/Photo.vue';
import Welcome from '@/components/Welcome.vue';

export default {
  name: 'about',
  components: {
    Copy,
    Photo,
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
    @include respond-above(xs) {
      flex-direction: row;
    }
  }

  .about__content {
    padding: 0 15px;
    text-align: center;

    @include respond-above(xs) {
      width: 50%;
      text-align: left;
    }
  }

  .about__content__images {
    @include respond-above(xs) {
      width: 50%;
    }
  }

  .about__content__img {
    display: block;
  }

  .about__content__p {
    margin-bottom: 10px;
    color: crimson;
    text-shadow: 1px 1px cadetblue;
  }
</style>
