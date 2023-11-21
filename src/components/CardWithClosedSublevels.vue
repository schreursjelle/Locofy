<template>
  <div :class="$style.cardWithClosedSublevels">
    <div :class="$style.card">
      <img :class="$style.imageIcon" alt="" :src="image" />
      <div :class="$style.information">
        <b :class="$style.companionComputer">{{companionComputer}}</b>
        <div :class="$style.preferToRun">{{preferToRunYourAlgorithms}}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "CardWithClosedSublevels",
    props: {
      image: { type: String },
      companionComputer: { type: String },
      preferToRunYourAlgorithms: { type: String },
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
    height: 15rem;
    flex-shrink: 0;
    object-fit: cover;
  }
  .companionComputer {
    align-self: stretch;
    position: relative;
  }
  .preferToRun {
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-base);
  }
  .information {
    align-self: stretch;
    height: 11.25rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-base);
    box-sizing: border-box;
    gap: var(--gap-3xs);
  }
  .card {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-5xs);
    background-color: var(--neutral-1);
    box-shadow: 4px 16px 8px rgba(0, 0, 0, 0.16);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xs);
  }
  .cardWithClosedSublevels {
    align-self: stretch;
    flex: 1;
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
