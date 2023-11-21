<template>
  <div
    :class="$style.visibleSublevelsfalseFixed"
    :style="visibleSublevelsfalseFixed1Style"
    @click="onCardWithClosedSublevels1Click"
  >
    <div :class="$style.card" :style="card1Style">
      <img
        :class="$style.imageIcon"
        alt=""
        :src="image"
        :style="imageIconStyle"
      />
      <div :class="$style.information" :style="information1Style">
        <b :class="$style.sensoren">{{sensoren}}</b>
        <div :class="$style.heGaveYou">{{heGaveYouThisGiftOfImagin}}</div>
      </div>
    </div>
    <div
      :class="$style.subsContent"
      :style="subsContentStyle"
      @click="onSubsContentContainerClick"
    >
      <div :class="$style.buttonDisplay" :style="buttonDisplay1Style">
        <div :class="$style.buttonDisplayChild" :style="rectangleDiv2Style" />
        <div :class="$style.readMore" :style="readMore2Style">View all</div>
      </div>
      <div :class="$style.sublevels" :style="sublevelsStyle">
        <div :class="$style.sublevelDisplay">
          <div :class="$style.sublevelCount">
            <div :class="$style.dlidar">2DLIDAR</div>
          </div>
        </div>
        <img
          :class="$style.dividerIcon"
          alt=""
          src="/divider.svg"
          :style="dividerIconStyle"
        />
        <div :class="$style.sublevelDisplay">
          <div :class="$style.sublevelCount">
            <div :class="$style.dlidar">2DLIDAR</div>
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
    name: "VisibleSublevelsfalseFixed1",
    props: {
      image: { type: String },
      sensoren: { type: String },
      heGaveYouThisGiftOfImagin: { type: String },
      visibleSublevelsfalseFixeCursor: { type: String },
      cardWidth: { type: [Object, Array, String, Number, Boolean] },
      imageIconHeight: { type: [Object, Array, String, Number, Boolean] },
      informationHeight: { type: [Object, Array, String, Number, Boolean] },
      subsContentCursor: { type: String },
      buttonDisplayWidth: { type: [Object, Array, String, Number, Boolean] },
      buttonDisplayHeight: { type: [Object, Array, String, Number, Boolean] },
      buttonDisplayBorder: { type: String },
      buttonDisplayBoxSizing: { type: String },
      rectangleDivTop: { type: [Object, Array, String, Number, Boolean] },
      rectangleDivLeft: { type: [Object, Array, String, Number, Boolean] },
      rectangleDivWidth: { type: [Object, Array, String, Number, Boolean] },
      rectangleDivHeight: { type: [Object, Array, String, Number, Boolean] },
      rectangleDivBackground: { type: String },
      rectangleDivBackgroundColor: { type: String },
      readMoreTop: { type: [Object, Array, String, Number, Boolean] },
      readMoreLeft: { type: [Object, Array, String, Number, Boolean] },
      readMoreColor: { type: String },
      sublevelsPadding: { type: [Object, Array, String, Number, Boolean] },
      dividerIconHeight: { type: [Object, Array, String, Number, Boolean] },
      onCardWithClosedSublevels1Click: { type: Function },
      onSubsContentContainerClick: { type: Function },
    },
    computed: {
      visibleSublevelsfalseFixed1Style(): CSS.Properties {
        return {
          cursor: this.visibleSublevelsfalseFixeCursor,
        };
      },
      card1Style(): CSS.Properties {
        return {
          width: this.cardWidth,
        };
      },
      imageIconStyle(): CSS.Properties {
        return {
          height: this.imageIconHeight,
        };
      },
      information1Style(): CSS.Properties {
        return {
          height: this.informationHeight,
        };
      },
      subsContentStyle(): CSS.Properties {
        return {
          cursor: this.subsContentCursor,
        };
      },
      buttonDisplay1Style(): CSS.Properties {
        return {
          width: this.buttonDisplayWidth,
          height: this.buttonDisplayHeight,
          border: this.buttonDisplayBorder,
          boxSizing: this.buttonDisplayBoxSizing,
        };
      },
      rectangleDiv2Style(): CSS.Properties {
        return {
          top: this.rectangleDivTop,
          left: this.rectangleDivLeft,
          width: this.rectangleDivWidth,
          height: this.rectangleDivHeight,
          background: this.rectangleDivBackground,
          backgroundColor: this.rectangleDivBackgroundColor,
        };
      },
      readMore2Style(): CSS.Properties {
        return {
          top: this.readMoreTop,
          left: this.readMoreLeft,
          color: this.readMoreColor,
        };
      },
      sublevelsStyle(): CSS.Properties {
        return {
          padding: this.sublevelsPadding,
        };
      },
      dividerIconStyle(): CSS.Properties {
        return {
          height: this.dividerIconHeight,
        };
      },
    },
  });
</script>
<style module>
  .imageIcon {
    align-self: stretch;
    position: relative;
    border-radius: var(--br-5xs);
    max-width: 100%;
    overflow: hidden;
    height: 160px;
    flex-shrink: 0;
    object-fit: cover;
  }
  .sensoren {
    align-self: stretch;
    position: relative;
  }
  .heGaveYou {
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-base);
  }
  .information {
    align-self: stretch;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-base);
    box-sizing: border-box;
    gap: var(--gap-3xs);
  }
  .card {
    border-radius: var(--br-5xs);
    background-color: var(--neutral-1);
    box-shadow: 2px 8px 8px rgba(0, 0, 0, 0.16);
    width: 240px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xs);
    box-sizing: border-box;
  }
  .buttonDisplayChild {
    position: absolute;
    top: 20.7px;
    left: -32px;
    background: linear-gradient(180deg, #5a3f37, #2c7744);
    width: 123px;
    height: 127.3px;
    transform: rotate(-47.54deg);
    transform-origin: 0 0;
  }
  .readMore {
    position: absolute;
    top: 8px;
    left: 35px;
    font-weight: 500;
  }
  .buttonDisplay {
    position: relative;
    border-radius: var(--br-41xl);
    background-color: var(--neutral-1);
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.16);
    width: 123px;
    height: 35px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .dlidar {
    position: relative;
    font-weight: 600;
  }
  .sublevelCount {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .sublevelDisplay {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .dividerIcon {
    align-self: stretch;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    height: 0px;
    flex-shrink: 0;
  }
  .sublevels {
    flex: 1;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-5xl);
    gap: var(--gap-5xs);
    text-align: left;
  }
  .subsContent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    font-size: var(--font-size-base);
    color: var(--neutral-1);
  }
  .visibleSublevelsfalseFixed {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-13xl);
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--color-gray-100);
    font-family: var(--font-barlow);
  }
</style>
