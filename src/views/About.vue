<template>
  <div class="about">
    <Welcome msg="Jeanne Sager" sub="photography" />
    <ProcessedHtml className="about__content" stateName="ABOUT" />
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from "@/components/Welcome.vue";
import ProcessedHtml from "@/components/ProcessedHtml.vue";

export default {
  name: "about",
  components: {
    ProcessedHtml,
    Welcome
  },
};
</script>

<style lang="scss">
.about__content {
  flex-flow: row wrap;
}

.about__photo {
  display: flex;
  padding: 0 15px;
}

.about__copy {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 15px;
  text-align: left;
  
  p {
    margin-bottom: 15px;
  }
}
</style>
