<template>
  <div class="about">
    <Welcome msg="Jeanne Sager" sub="photography"/>
    <h4>About</h4>
    <article class="about__content">
      <Paragraph :content="content" className="about__content" />
    </article>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue';
import Paragraph from '@/components/Paragraph.vue';

export default {
  name: 'about',
  components: {
    Welcome,
    Paragraph,
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
