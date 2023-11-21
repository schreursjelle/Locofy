<template>
  <div :class="$style.openfalse">
    <div :class="$style.sublevel">Sublevel</div>
    <div :class="$style.chevronDown">chevron-down</div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Openfalse",
  });
</script>
<style module>
  .sublevel {
    position: relative;
    font-weight: 500;
  }
  .chevronDown {
    position: relative;
    font-family: var(--font-font-awesome-6-free);
  }
  .openfalse {
    border-radius: var(--br-13xl);
    background-color: var(--neutral-1);
    border: 1px solid var(--neutral-5);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: var(--padding-5xs) var(--padding-5xl);
    gap: var(--gap-3xs);
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-gray-100);
    font-family: var(--font-barlow);
  }
</style>
