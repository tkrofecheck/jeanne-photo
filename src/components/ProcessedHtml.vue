<template>
  <div>
    <component v-bind:is="processedHtml"></component>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import forEach from 'lodash-es/forEach';
import Photo from "@/components/Photo.vue";

Vue.component("photo", Photo);

export default {
  name: "ProcessedHtml",
  components: {
    Photo
  },
  computed: mapState({
    html(state) {
      return state[this.stateName];
    },
    processedHtml(state) {
      const div = document.createElement("div");
      let newHtml = this.html;
      let images = [];

      div.innerHTML = newHtml;
      images = div.querySelectorAll("img");

      forEach(images, (image, index) => {
        const id = `img${index}`;

        newHtml = this.loadPhoto(image, id, div.innerHTML);
      });

      return {
        name: 'ProcessedHtmlComponent',
        template: `<div class="${this.className} processed__html">${newHtml}</div>`,
        props: this.componentProps,
      };
    }
  }),
  props: {
    className: String,
    stateName: String
  },
  data() {
    return {
      componentProps: {
        className: {
          type: String,
          default: () => this.className
        }
      }
    };
  },
  methods: {
    loadPhoto(photo, id, html) {
      const elementProps = {
        src: photo.src || '',
        alt: photo.alt || 'photo'
      };
      let adjustedHtml = html;

      this.componentProps[id] = {
        type: Object,
        default: () => elementProps
      };

      adjustedHtml = html.replace(
        photo.outerHTML,
        elementProps.src ? `<photo :data="${id}"></photo>` : ''
      );

      return adjustedHtml;
    }
  },
};
</script>

<style lang="scss">
.processed__html {
  box-sizing: border-box;
  display: flex;
  position: relative;
}
</style>
