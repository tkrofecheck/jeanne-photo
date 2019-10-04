<template>
  <div class="investment">
    <Welcome msg="Jeanne Sager" sub="photography"/>
    <h4>Photography Investment and Package Information</h4>
    <Copy :paragraphs="content" className="investment__content" />
    <!-- Sections here -->
    <SubCopy :paragraphs="footer" className="investment__footer" />
  </div>
</template>

<script>
// @ is an alias to /src
import Copy from '@/components/Copy.vue';
import SubCopy from '@/components/SubCopy.vue';
import Welcome from '@/components/Welcome.vue';

export default {
  name: 'investment',
  components: {
    Copy,
    SubCopy,
    Welcome,
  },
  computed: {
    content() {
      return this.$store.getters.INVESTMENT.content;
    },
    footer() {
      return this.$store.getters.INVESTMENT.footer;
    },
    sections() {
      return this.$store.getters.INVESTMENT.sections;
    },
  },
};
</script>
