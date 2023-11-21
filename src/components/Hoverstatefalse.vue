<template>
  <div :class="$style.hoverstatefalse" :style="hoverstatefalseStyle">
    <div :class="$style.hoverstatefalseChild" :style="rectangleDiv1Style" />
    <div :class="$style.readMore" :style="readMore1Style">{{buttonText}}</div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "Hoverstatefalse",
    props: {
      buttonText: { type: String },
      hoverstatefalseBorder: { type: String },
      hoverstatefalseBoxSizing: { type: String },
      hoverstatefalsePosition: { type: String },
      hoverstatefalseFlexShrink: { type: String },
      hoverstatefalseWidth: { type: [Object, Array, String, Number, Boolean] },
      hoverstatefalseHeight: { type: [Object, Array, String, Number, Boolean] },
      rectangleDivLeft: { type: [Object, Array, String, Number, Boolean] },
      rectangleDivBackgroundColor: { type: String },
      rectangleDivBackground: { type: String },
      rectangleDivTop: { type: [Object, Array, String, Number, Boolean] },
      rectangleDivWidth: { type: [Object, Array, String, Number, Boolean] },
      rectangleDivHeight: { type: [Object, Array, String, Number, Boolean] },
      readMoreLeft: { type: [Object, Array, String, Number, Boolean] },
      readMoreColor: { type: String },
      readMoreTextAlign: { type: String },
      readMoreTop: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      hoverstatefalseStyle(): CSS.Properties {
        return {
          border: this.hoverstatefalseBorder,
          boxSizing: this.hoverstatefalseBoxSizing,
          position: this.hoverstatefalsePosition,
          flexShrink: this.hoverstatefalseFlexShrink,
          width: this.hoverstatefalseWidth,
          height: this.hoverstatefalseHeight,
        };
      },
      rectangleDiv1Style(): CSS.Properties {
        return {
          left: this.rectangleDivLeft,
          backgroundColor: this.rectangleDivBackgroundColor,
          background: this.rectangleDivBackground,
          top: this.rectangleDivTop,
          width: this.rectangleDivWidth,
          height: this.rectangleDivHeight,
        };
      },
      readMore1Style(): CSS.Properties {
        return {
          left: this.readMoreLeft,
          color: this.readMoreColor,
          textAlign: this.readMoreTextAlign,
          top: this.readMoreTop,
        };
      },
    },
  });
</script>
<style module>
  .hoverstatefalseChild {
    position: absolute;
    top: 20.7px;
    left: 130px;
    background-color: var(--color-dimgray);
    width: 123px;
    height: 127.3px;
    transform: rotate(-47.54deg);
    transform-origin: 0 0;
  }
  .readMore {
    position: absolute;
    top: 8px;
    left: 24px;
    font-weight: 500;
  }
  .hoverstatefalse {
    border-radius: var(--br-41xl);
    background-color: var(--neutral-1);
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.16);
    border: 2px solid var(--color-darkgreen);
    box-sizing: border-box;
    width: 125px;
    height: 37px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-gray-100);
    font-family: var(--font-barlow);
  }
</style>
