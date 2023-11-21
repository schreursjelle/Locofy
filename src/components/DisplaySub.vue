<template>
  <div :class="$style.displaySub">
    <div :class="$style.text" v-if="showText">
      <img :class="$style.textChild" alt="" :src="imageDimensions" />
      <div :class="$style.subjectTitleParent" :style="frameDivStyle">
        <b :class="$style.subjectTitle" :style="subjectTitleStyle"
          >Subject title</b
        >
        <div :class="$style.ifWereGoingToHaveAnimalsParent">
          <div :class="$style.ifWereGoing" :style="ifWereGoingStyle">
            If we're going to have animals around we all have to be concerned
            about them and take care of them. Think about a cloud. Just float
            around and be there. Let your imagination be your guide. As trees
            get older they lose their chlorophyll. Just make a decision and let
            it go. I will take some magic white, and a little bit of Vandyke
            brown and a little touch of yellow. Let's get wild today. But we're
            not there yet, so we don't need to worry about it.
          </div>
          <div :class="$style.datumPublicatieParent">
            <div :class="$style.subjectTitle" :style="datumPublicatieStyle">
              Datum publicatie
            </div>
            <div :class="$style.buttonDisplay" :style="buttonDisplayStyle">
              <div
                :class="$style.buttonDisplayChild"
                :style="rectangleDivStyle"
              />
              <div :class="$style.readMore" :style="readMoreStyle">
                Read more
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "DisplaySub",
    props: {
      imageDimensions: { type: String },
      showText: { type: Boolean },
      frameDivPadding: { type: [Object, Array, String, Number, Boolean] },
      subjectTitleLineHeight: { type: String },
      ifWereGoingLineHeight: { type: String },
      datumPublicatieLineHeight: { type: String },
      buttonDisplayWidth: { type: [Object, Array, String, Number, Boolean] },
      buttonDisplayHeight: { type: [Object, Array, String, Number, Boolean] },
      rectangleDivTop: { type: [Object, Array, String, Number, Boolean] },
      rectangleDivLeft: { type: [Object, Array, String, Number, Boolean] },
      rectangleDivWidth: { type: [Object, Array, String, Number, Boolean] },
      rectangleDivHeight: { type: [Object, Array, String, Number, Boolean] },
      readMoreTop: { type: [Object, Array, String, Number, Boolean] },
      readMoreLeft: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      frameDivStyle(): CSS.Properties {
        return {
          padding: this.frameDivPadding,
        };
      },
      subjectTitleStyle(): CSS.Properties {
        return {
          lineHeight: this.subjectTitleLineHeight,
        };
      },
      ifWereGoingStyle(): CSS.Properties {
        return {
          lineHeight: this.ifWereGoingLineHeight,
        };
      },
      datumPublicatieStyle(): CSS.Properties {
        return {
          lineHeight: this.datumPublicatieLineHeight,
        };
      },
      buttonDisplayStyle(): CSS.Properties {
        return {
          width: this.buttonDisplayWidth,
          height: this.buttonDisplayHeight,
        };
      },
      rectangleDivStyle(): CSS.Properties {
        return {
          top: this.rectangleDivTop,
          left: this.rectangleDivLeft,
          width: this.rectangleDivWidth,
          height: this.rectangleDivHeight,
        };
      },
      readMoreStyle(): CSS.Properties {
        return {
          top: this.readMoreTop,
          left: this.readMoreLeft,
        };
      },
    },
  });
</script>
<style module>
  .textChild {
    align-self: stretch;
    flex: 1;
    position: relative;
    border-radius: var(--br-5xs);
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .subjectTitle {
    position: relative;
    line-height: 24px;
  }
  .ifWereGoing {
    align-self: stretch;
    position: relative;
    line-height: 21px;
  }
  .buttonDisplayChild {
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
  .buttonDisplay {
    position: relative;
    border-radius: var(--br-41xl);
    background-color: var(--neutral-1);
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.16);
    border: 2px solid var(--color-darkgreen);
    box-sizing: border-box;
    width: 125px;
    height: 37px;
    overflow: hidden;
    flex-shrink: 0;
    font-size: var(--font-size-base);
    color: var(--color-gray-100);
  }
  .datumPublicatieParent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: var(--body-regular-size);
    color: var(--color-gray-300);
  }
  .ifWereGoingToHaveAnimalsParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
    font-size: var(--font-size-base);
  }
  .subjectTitleParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-base) var(--padding-base);
    gap: var(--gap-base);
  }
  .text {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
  }
  .displaySub {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    font-size: var(--font-size-lg);
    color: var(--color-black);
    font-family: var(--font-barlow);
    align-self: stretch;
    flex: 1;
  }
</style>
