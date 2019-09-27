<template>
  <div class="welcome">
    <h1>{{ msg }}</h1>
    <h3>{{ sub }}</h3>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  props: {
    msg: String,
    sub: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1 {
    margin: 40px 0 0;
  }
  h3 {
    margin: 10px 0 0;
  }
</style>
