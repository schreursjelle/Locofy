<template>
  <div
    :class="$style.sizemediumTooltipfalseIc"
    :style="sizemediumTooltipfalseIcStyle"
  >
    <div :class="$style.texttext" v-if="showTextText">
      <div :class="$style.text" :style="textStyle">{{text}}</div>
    </div>
    <img
      :class="$style.iconWrapper"
      v-if="showIconWrapper"
      alt=""
      :src="iconWrapper"
      :style="iconWrapperStyle"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "SizemediumTooltipfalseIc",
    props: {
      text: { type: String },
      iconWrapper: { type: String },
      showTextText: { type: Boolean },
      showIconWrapper: { type: Boolean },
      sizemediumTooltipfalseIcBackgroundColor: { type: String },
      sizemediumTooltipfalseIcBoxShadow: { type: String },
      sizemediumTooltipfalseIcBorder: { type: String },
      sizemediumTooltipfalseIcTransform: { type: String },
      sizemediumTooltipfalseIcTransformOrigin: { type: String },
      textLineHeight: { type: String },
      textFontFamily: { type: String },
      textColor: { type: String },
      iconWrapperWidth: { type: [Object, Array, String, Number, Boolean] },
      iconWrapperHeight: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      sizemediumTooltipfalseIcStyle(): CSS.Properties {
        return {
          backgroundColor: this.sizemediumTooltipfalseIcBackgroundColor,
          boxShadow: this.sizemediumTooltipfalseIcBoxShadow,
          border: this.sizemediumTooltipfalseIcBorder,
          transform: this.sizemediumTooltipfalseIcTransform,
          transformOrigin: this.sizemediumTooltipfalseIcTransformOrigin,
        };
      },
      textStyle(): CSS.Properties {
        return {
          lineHeight: this.textLineHeight,
          fontFamily: this.textFontFamily,
          color: this.textColor,
        };
      },
      iconWrapperStyle(): CSS.Properties {
        return {
          width: this.iconWrapperWidth,
          height: this.iconWrapperHeight,
        };
      },
    },
  });
</script>
<style module>
  .text {
    position: relative;
    line-height: 22px;
  }
  .texttext {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .iconWrapper {
    position: relative;
    width: 10px;
    height: 11.3px;
  }
  .sizemediumTooltipfalseIc {
    border-radius: var(--br-11xs);
    background-color: var(--neutral-1);
    box-shadow: var(--drop-shadow-button-secondary);
    border: 1px solid var(--neutral-5);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-8xs) var(--padding-base);
    gap: var(--gap-5xs);
    text-align: left;
    font-size: var(--body-regular-size);
    color: var(--character-primary-85);
    font-family: var(--body-regular);
  }
</style>
