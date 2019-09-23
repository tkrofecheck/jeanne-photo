<template>
  <div class="pricing">
    <Welcome msg="Jeanne Sager" sub="photography"/>
    <h4>Pricing</h4>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue';

export default {
  name: 'pricing',
  components: {
    Welcome,
  },
};
</script>
