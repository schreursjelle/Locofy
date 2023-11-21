<template>
  <div
    :class="$style.visibleSublevelsfalseFixed"
    :style="visibleSublevelsfalseFixedStyle"
    @click="onCardWithClosedSublevels1Click"
  >
    <div :class="$style.card" :style="cardStyle">
      <div
        :class="$style.information"
        v-if="showInformation"
        :style="informationStyle"
      >
        <b :class="$style.sensoren">{{sensoren}}</b>
        <div :class="$style.heGaveYou">{{heGaveYouThisGiftOfImagin}}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "VisibleSublevelsfalseFixed",
    props: {
      sensoren: { type: String },
      heGaveYouThisGiftOfImagin: { type: String },
      showInformation: { type: Boolean },
      visibleSublevelsfalseFixeHeight: {
        type: [Object, Array, String, Number, Boolean],
      },
      visibleSublevelsfalseFixeCursor: { type: String },
      cardWidth: { type: [Object, Array, String, Number, Boolean] },
      informationHeight: { type: [Object, Array, String, Number, Boolean] },
      onCardWithClosedSublevels1Click: { type: Function },
    },
    computed: {
      visibleSublevelsfalseFixedStyle(): CSS.Properties {
        return {
          height: this.visibleSublevelsfalseFixeHeight,
          cursor: this.visibleSublevelsfalseFixeCursor,
        };
      },
      cardStyle(): CSS.Properties {
        return {
          width: this.cardWidth,
        };
      },
      informationStyle(): CSS.Properties {
        return {
          height: this.informationHeight,
        };
      },
    },
  });
</script>
<style module>
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
    justify-content: center;
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
    justify-content: center;
    padding: var(--padding-5xs);
    box-sizing: border-box;
  }
  .visibleSublevelsfalseFixed {
    height: 196px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--color-gray-100);
    font-family: var(--font-barlow);
  }
</style>
