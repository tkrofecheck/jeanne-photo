<template>
  <div id="app">
    <div id="bg"></div>
    <div id="nav" ref="nav">
      <div class="nav__bg section__bg--lowtrans"></div>
      <router-link to="/">Home</router-link>
      <router-link to="/investment">Investment</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <Gradient :navHeight="navHeight" />
    <router-view/>
  </div>
</template>

<script>
import Gradient from '@/components/Gradient.vue';

export default {
  name: 'App',
  components: {
    Gradient,
  },
  data() {
    return {
      navHeight: 0,
    };
  },
  mounted() {
    const { dispatch } = this.$store;
    dispatch('fetchAboutData');
    dispatch('fetchHomeData');
    dispatch('fetchInvestmentData');
  },
  updated() {
    this.navHeight = this.$refs.nav.offsetHeight;
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
  background-image: url(~@/assets/backgrounds/hiclipart.com-id_idkan_mobile.png);
  opacity: .5;
  z-index: -1;

  @include respond-above(xs) {
    background-image: url(~@/assets/backgrounds/hiclipart.com-id_idkan_tablet.png);
  }
  @include respond-above(sm) {
    background-image: url(~@/assets/backgrounds/hiclipart.com-id_idkan_desktop.png);
  }
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  line-height: 1.5;
}
#nav {
  font-family: 'Poiret One', cursive;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1000;
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

.nav__bg, .section__bg {
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
}

.section__bg {
  background-color: lavender;
}

.section__bg--hightrans {
  opacity: 0.5;
}

.section__bg--lowtrans {
  opacity: 0.7;
}

.section__bg--notrans {
  opacity: 1;
}
</style>
