<template>
  <div :style="gradient" class="gradient"></div>
</template>

<script>
export default {
  name: 'scrollGradient',
  computed: {
    gradient() {
      return {
        height: `${document.getElementById('nav').offsetHeight + 35}px`,
      };
    },
  },
};
</script>

<style lang="scss">
.gradient {
  position: fixed;
  z-index: 2;
  right: 0; top: 0; left: 0;
  background: url(data:image/svg+xml;base64,alotofcodehere);
  background: -moz-linear-gradient(bottom,  rgba(255,255,255,0) 0%, rgba(255,255,255,.95) 85%);
  background: -webkit-gradient(linear, left bottom, left top,
    color-stop(0%,rgba(255,255,255,0)), color-stop(85%,rgba(255,255,255,.95)));
  background: -webkit-linear-gradient(bottom,  rgba(255,255,255,0) 0%,rgba(255,255,255,.95) 85%);
  background: -o-linear-gradient(bottom,  rgba(255,255,255,0) 0%,rgba(255,255,255,.95) 85%);
  background: -ms-linear-gradient(bottom,  rgba(255,255,255,0) 0%,rgba(255,255,255,.95) 85%);
  background: linear-gradient(to top,  rgba(255,255,255,0) 0%,rgba(255,255,255,.95) 85%);
}
</style>
