<template>
  <div :class="$style.interactiveKennisdatabankParent">
    <div :class="$style.interactiveKennisdatabank">
      Interactive kennisdatabank
    </div>
    <div :class="$style.themes">
      <div :class="$style.cardWithClosedSublevels">
        <div :class="$style.card">
          <img :class="$style.imageIcon" alt="" :src="image" />
          <div :class="$style.information">
            <b :class="$style.algorithms">{{algorithms}}</b>
            <div :class="$style.fromVisionAlgorithms">
              {{fromVisionAlgorithmsToPat}}
            </div>
          </div>
        </div>
      </div>
      <div :class="$style.frameParent">
        <div :class="$style.cardWithClosedSublevelsParent">
          <VisibleSublevelsfalseFixed
            sensoren="Path Planning"
            heGaveYouThisGiftOfImagin="Determine optimal routes in complex environments"
            :showInformation="true"
            visibleSublevelsfalseFixeHeight="12.25rem"
            visibleSublevelsfalseFixeCursor="pointer"
            cardWidth="15rem"
            informationHeight="11.25rem"
            :onCardWithClosedSublevels1Click="onCardWithClosedSublevels1Click"
          /><VisibleSublevelsfalseFixed
            sensoren="SLAM"
            heGaveYouThisGiftOfImagin="Algorithms to do Simulataneous Localization and Mapping of the environment"
            :showInformation="true"
            visibleSublevelsfalseFixeHeight="12.25rem"
            visibleSublevelsfalseFixeCursor="unset"
            cardWidth="15rem"
            informationHeight="11.25rem"
          /><VisibleSublevelsfalseFixed
            sensoren="Vision"
            heGaveYouThisGiftOfImagin="Interpret the environment through images by e.g. object detection or segmentation"
            :showInformation="true"
            visibleSublevelsfalseFixeHeight="12.25rem"
            visibleSublevelsfalseFixeCursor="unset"
            cardWidth="15rem"
            informationHeight="11.25rem"
          />
        </div>
        <div :class="$style.cardWithClosedSublevelsParent">
          <VisibleSublevelsfalseFixed
            sensoren="Safety"
            heGaveYouThisGiftOfImagin="Identify and mitigate potential hazards caused by robot actions"
            :showInformation="true"
            visibleSublevelsfalseFixeHeight="12.25rem"
            visibleSublevelsfalseFixeCursor="pointer"
            cardWidth="15rem"
            informationHeight="11.25rem"
            :onCardWithClosedSublevels1Click="onCardWithClosedSublevels4Click"
          /><VisibleSublevelsfalseFixed
            sensoren="Semantic SLAM"
            heGaveYouThisGiftOfImagin="Algorithms doing SLAM while adding a semantic meaning to the environment"
            :showInformation="true"
            visibleSublevelsfalseFixeHeight="12.25rem"
            visibleSublevelsfalseFixeCursor="unset"
            cardWidth="15rem"
            informationHeight="11.25rem"
          />
          <div
            :class="$style.cardWithClosedSublevels1"
            @click="onCardWithClosedSublevels6Click"
          >
            <div :class="$style.card1">
              <div :class="$style.information1">
                <div :class="$style.algorithms">arrow-left</div>
                <div :class="$style.backToOverview">back to overview</div>
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
  import VisibleSublevelsfalseFixed from "./VisibleSublevelsfalseFixed.vue";

  export default defineComponent({
    name: "Frame",
    components: { VisibleSublevelsfalseFixed },
    props: {
      image: { type: String },
      algorithms: { type: String },
      fromVisionAlgorithmsToPat: { type: String },
      sensoren: { type: String },
      heGaveYouThisGiftOfImagin: { type: String },
      sensoren1: { type: String },
      heGaveYouThisGiftOfImagin1: { type: String },
      sensoren2: { type: String },
      heGaveYouThisGiftOfImagin2: { type: String },
      sensoren3: { type: String },
      heGaveYouThisGiftOfImagin3: { type: String },
      sensoren4: { type: String },
      heGaveYouThisGiftOfImagin4: { type: String },
      showInformation: { type: Boolean },
      frameDivCursor: { type: String },
      propCursor: { type: String },
      onCardWithClosedSublevels1Click: { type: Function },
      onCardWithClosedSublevels4Click: { type: Function },
      onCardWithClosedSublevels6Click: { type: Function },
    },
    computed: {
      visibleSublevelsfalseFixedStyle(): CSS.Properties {
        return {
          cursor: this.frameDivCursor,
        };
      },
      visibleSublevelsfalseFixedStyle1(): CSS.Properties {
        return {
          cursor: this.propCursor,
        };
      },
    },
  });
</script>
<style module>
  .interactiveKennisdatabank {
    align-self: stretch;
    position: relative;
    font-weight: 800;
  }
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
  .algorithms {
    align-self: stretch;
    position: relative;
  }
  .fromVisionAlgorithms {
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
  }
  .cardWithClosedSublevelsParent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .backToOverview {
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-base);
    font-family: var(--font-barlow);
  }
  .information1 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--padding-base);
    gap: var(--gap-3xs);
  }
  .card1 {
    flex: 1;
    border-radius: var(--br-5xs);
    background-color: var(--neutral-1);
    box-shadow: 2px 8px 8px rgba(0, 0, 0, 0.16);
    width: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--padding-5xs);
    box-sizing: border-box;
  }
  .cardWithClosedSublevels1 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    cursor: pointer;
  }
  .frameParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
    text-align: center;
    font-family: var(--font-font-awesome-6-free);
  }
  .themes {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
    font-size: var(--font-size-xl);
    color: var(--color-gray-100);
  }
  .interactiveKennisdatabankParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--gap-5xl);
    text-align: left;
    font-size: var(--font-size-13xl);
    color: var(--color-darkslategray);
    font-family: var(--font-barlow);
  }
</style>
