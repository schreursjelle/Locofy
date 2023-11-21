<template>
  <div :class="$style.algorithms">
    <div :class="$style.background">
      <img :class="$style.backgroundChild" alt="" src="/rectangle-2@2x.png" />
      <div :class="$style.backgroundItem" />
    </div>
    <div :class="$style.bodyContent">
      <Navigation1 />
      <img :class="$style.dividerIcon" alt="" src="/divider1.svg" />
      <div :class="$style.content">
        <frame
          image="/image4@2x.png"
          algorithms="Algorithms"
          fromVisionAlgorithmsToPat="From vision algorithms to path planning algorithms: dive into our recommendations of various algorithms"
          sensoren="Path Planning"
          heGaveYouThisGiftOfImagin="Determine optimal routes in complex environments"
          sensoren1="SLAM"
          heGaveYouThisGiftOfImagin1="Algorithms to do Simulataneous Localization and Mapping of the environment"
          sensoren2="Vision"
          heGaveYouThisGiftOfImagin2="Interpret the environment through images by e.g. object detection or segmentation"
          sensoren3="Safety"
          heGaveYouThisGiftOfImagin3="Identify and mitigate potential hazards caused by robot actions"
          sensoren4="Semantic SLAM"
          heGaveYouThisGiftOfImagin4="Algorithms doing SLAM while adding a semantic meaning to the environment"
          :onCardWithClosedSublevels1Click="onCardWithClosedSublevels1Click"
          :onCardWithClosedSublevels4Click="onCardWithClosedSublevels4Click"
          :onCardWithClosedSublevels6Click="onCardWithClosedSublevels6Click"
          :showInformation="true"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Navigation1 from "../components/Navigation1.vue";
  import Frame from "../components/Frame.vue";

  export default defineComponent({
    name: "Algorithms",
    components: { Navigation1, Frame },
    methods: {
      onCardWithClosedSublevels1Click() {
        this.$router.push("/detail");
      },
      onCardWithClosedSublevels4Click() {
        this.$router.push("/detailsafety");
      },
      onCardWithClosedSublevels6Click() {
        this.$router.push("/index");
      },
    },
  });
</script>
<style module>
  .backgroundChild {
    position: absolute;
    top: 0rem;
    left: 0rem;
    width: 90rem;
    height: 64rem;
    object-fit: cover;
  }
  .backgroundItem {
    position: absolute;
    top: 0rem;
    left: 0rem;
    background-color: var(--color-gray-200);
    backdrop-filter: blur(160px);
    width: 90rem;
    height: 64rem;
  }
  .background {
    position: absolute;
    top: 0rem;
    left: 0rem;
    width: 90rem;
    height: 64rem;
  }
  .dividerIcon {
    align-self: stretch;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    height: 0.06rem;
    flex-shrink: 0;
  }
  .content {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--padding-13xl) var(--padding-45xl) var(--padding-base);
  }
  .bodyContent {
    position: absolute;
    top: 0rem;
    left: 0rem;
    width: 90rem;
    height: 64rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0rem 0rem var(--padding-13xl);
    box-sizing: border-box;
  }
  .algorithms {
    position: relative;
    background-color: var(--neutral-1);
    width: 100%;
    height: 64rem;
    overflow: hidden;
  }
</style>
