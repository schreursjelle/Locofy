<template>
  <div :class="$style.componentsseparator" :style="componentsSeparatorStyle">
    <div :class="$style.separator" :style="separatorStyle">/</div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "ComponentsSeparator",
    props: {
      componentsSeparatorPadding: {
        type: [Object, Array, String, Number, Boolean],
      },
      separatorLineHeight: { type: String },
    },
    computed: {
      componentsSeparatorStyle(): CSS.Properties {
        return {
          padding: this.componentsSeparatorPadding,
        };
      },
      separatorStyle(): CSS.Properties {
        return {
          lineHeight: this.separatorLineHeight,
        };
      },
    },
  });
</script>
<style module>
  .separator {
    position: relative;
    line-height: 22px;
  }
  .componentsseparator {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px var(--padding-5xs);
    text-align: left;
    font-size: var(--body-regular-size);
    color: var(--character-secondary-45);
    font-family: var(--body-regular);
  }
</style>
