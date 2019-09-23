<template>
  <div class="about">
    <Welcome msg="Jeanne Sager" sub="photography"/>
    <h4>About</h4>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue';

export default {
  name: 'about',
  components: {
    Welcome,
  },
};
</script>
