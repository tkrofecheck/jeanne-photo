<template>
  <div class="investment">
    <Welcome msg="Jeanne Sager" sub="photography"/>
    <h4>Photography Investment and Package Information</h4>
    <Copy :paragraphs="content" className="investment__content" />
  </div>
</template>

<script>
// @ is an alias to /src
import Copy from '@/components/Copy.vue';
import Welcome from '@/components/Welcome.vue';

export default {
  name: 'investment',
  components: {
    Copy,
    Welcome,
  },
  computed: {
    content() {
      return this.$store.getters.INVESTMENT_CONTENT;
    },
    footer() {
      return this.$store.getters.INVESTMENT_FOOTER;
    },
    sections() {
      return this.$store.getters.INVESTMENT_SECTIONS;
    },
  },
};
</script>
