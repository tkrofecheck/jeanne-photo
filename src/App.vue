<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/pricing">Pricing</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    const { dispatch } = this.$store;
    dispatch('getAboutContent');
    dispatch('getAboutPhotos');
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  font-family: 'Poiret One', cursive;
  background-color: lavender;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  a {
    font-weight: bold;
    color: blueviolet;
    padding: 15px;
    text-decoration: none;
    &:hover {
      background-color: violet;
    }
    &.router-link-exact-active {
      color: violet;
      &:hover {
        background-color: transparent;
      }
    }
  }
}
</style>
