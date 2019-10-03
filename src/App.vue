<template>
  <div id="app">
    <div id="bg"></div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/investment">Investment</router-link>
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
    dispatch('fetchAboutData');
    dispatch('fetchHomeData');
    dispatch('fetchInvestmentData');
  },
};
</script>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
}
#bg {
  position: fixed;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  background-size: contain;
  background-image: url(~@/assets/hiclipart.com-id_idkan_mobile.png);
  opacity: .5;
  z-index: -1;
  @media screen and (min-width: 415px) {
    background-image: url(~@/assets/hiclipart.com-id_idkan_tablet.png);
  }
  @media screen and (min-width: 769px) {
    background-image: url(~@/assets/hiclipart.com-id_idkan_desktop.png);
  }
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  font-family: 'Poiret One', cursive;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  a {
    font-weight: bold;
    color: blueviolet;
    padding: 15px;
    text-decoration: none;
    &.router-link-exact-active {
      color: violet;
    }
  }
}
</style>
