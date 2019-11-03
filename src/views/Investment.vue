<template>
  <div class="investment">
    <Welcome msg="Jeanne Sager" sub="photography" />
    <ProcessedHtml className="investment__content" stateName="INVESTMENT" />
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from "@/components/Welcome.vue";
import ProcessedHtml from "@/components/ProcessedHtml.vue";

export default {
  name: "investment",
  components: {
    ProcessedHtml,
    Welcome
  },
};
</script>

<style lang="scss">
.investment__content {
  flex-flow: column;
}
</style>
