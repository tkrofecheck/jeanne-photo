<template>
  <div class="about">
    <Welcome msg="Jeanne Sager" sub="photography"/>
    <section class="about__section">
      <Gradient />
      <div class="section__bg section__bg--hightrans"></div>
      <div class="about__section__container">
        <div v-for="(photo, index) in photos"
          v-bind:key="index" class="about__section__images">
          <Photo v-bind:photo="photo" className="about__section__img" />
        </div>
        <Copy :paragraphs="content" className="about__section__content" />
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Copy from '@/components/Copy.vue';
import Gradient from '@/components/Gradient.vue';
import Photo from '@/components/Photo.vue';
import Welcome from '@/components/Welcome.vue';

export default {
  name: 'about',
  components: {
    Copy,
    Gradient,
    Photo,
    Welcome,
  },
  computed: {
    content() {
      return this.$store.getters.ABOUT.content;
    },
    photos() {
      return this.$store.getters.ABOUT.photos;
    },
  },
};
</script>

<style lang="scss">
  .about {
    position: relative;
    font-family: 'Lato', sans-serif;
  }

  .about__section {
    margin: 10px 0;
    position: relative;
  }

  .about__section__container {
    display: flex;
    flex-direction: column;

    @include respond-above(xs) {
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .about__section__content {
    padding: 0 15px;
    text-align: center;

    @include respond-above(xs) {
      width: 50%;
      text-align: left;
    }

    @include respond-above(sm) {
      width: 60%;
    }
  }

  .about__section__images {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    position: relative;

    @include respond-above(xs) {
      width: 50%;
    }

    @include respond-above(sm) {
      width: 40%;
    }
  }

  .about__section__img {
    display: flex;
  }

  .about__section__content__p {
    line-height: 1.5;
    margin-bottom: 10px;
    color: crimson;
    text-shadow: 0px 1px cadetblue;

    @include respond-above(xs) {
      line-height: 1.2;
    }

    @include respond-above(sm) {
      line-height: 1.5;
    }
  }
</style>
