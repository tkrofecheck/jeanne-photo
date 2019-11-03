<template>
  <div class="gallery">
    <ProcessedHtml className="gallery__content" stateName="GALLERY" />
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from "@/components/Welcome.vue";
import ProcessedHtml from "@/components/ProcessedHtml.vue";

export default {
  name: "gallery",
  components: {
    ProcessedHtml,
    Welcome
  },
};
</script>

<style lang="scss">
</style>
