<template>
  <div class="home">
    <Welcome msg="Jeanne Sager" sub="photography"/>
    <h4>Home</h4>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue';

export default {
  name: 'home',
  components: {
    Welcome,
  },
};
</script>
