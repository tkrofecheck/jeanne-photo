<template>
  <div class="home">
    <Welcome msg="Jeanne Sager" sub="photography" />
    <ProcessedHtml className="home__content" stateName="HOME" />
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from "@/components/Welcome.vue";
import ProcessedHtml from "@/components/ProcessedHtml.vue";

export default {
  name: "home",
  components: {
    ProcessedHtml,
    Welcome
  },
};
</script>

<style lang="scss">
</style>
