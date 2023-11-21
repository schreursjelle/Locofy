<template>
  <div :class="$style.os">
    <div :class="$style.background">
      <img :class="$style.backgroundChild" alt="" src="/rectangle-2@2x.png" />
      <div :class="$style.backgroundItem" />
    </div>
    <div :class="$style.bodyContent">
      <Navigation1 />
      <img :class="$style.dividerIcon" alt="" src="/divider1.svg" />
      <div :class="$style.content">
        <div :class="$style.interactiveKennisdatabankParent">
          <div :class="$style.interactiveKennisdatabank">
            Interactive kennisdatabank
          </div>
          <div :class="$style.themes">
            <CardWithClosedSublevels
              image="/image2@2x.png"
              companionComputer="Extra Software ( OS )"
              preferToRunYourAlgorithms="Prefer to run your algorithms on the robot? Take a look at our lightweight edge devices we recommend when working with robots."
            />
            <div :class="$style.frameParent">
              <div :class="$style.cardParent">
                <div :class="$style.card" @click="onCardContainer1Click">
                  <div :class="$style.information">
                    <div :class="$style.arrowLeft">arrow-left</div>
                    <div :class="$style.backToOverview">back to overview</div>
                  </div>
                </div>
                <VisibleSublevelsfalseFixed
                  sensoren="Path Planning"
                  heGaveYouThisGiftOfImagin="Decide what route the robot must make to reach this destination"
                  :showInformation="false"
                  visibleSublevelsfalseFixeHeight="12.25rem"
                  visibleSublevelsfalseFixeCursor="unset"
                  cardWidth="15rem"
                  informationHeight="11.25rem"
                /><VisibleSublevelsfalseFixed
                  sensoren="SLAM"
                  heGaveYouThisGiftOfImagin="Algorithms to do Simulataneous Localization and Mapping of the environment"
                  :showInformation="false"
                  visibleSublevelsfalseFixeHeight="12.25rem"
                  visibleSublevelsfalseFixeCursor="unset"
                  cardWidth="15rem"
                  informationHeight="11.25rem"
                />
              </div>
              <div :class="$style.cardParent">
                <VisibleSublevelsfalseFixed
                  sensoren="Vision"
                  heGaveYouThisGiftOfImagin="Interpret the environment through images by e.g. object detection or segmentation"
                  :showInformation="false"
                  visibleSublevelsfalseFixeHeight="12.25rem"
                  visibleSublevelsfalseFixeCursor="unset"
                  cardWidth="15rem"
                  informationHeight="11.25rem"
                />
                <div :class="$style.cardWithClosedSublevels">
                  <div :class="$style.card1">
                    <div :class="$style.information1">
                      <div :class="$style.arrowLeft">arrow-left</div>
                      <div :class="$style.backToOverview">back to overview</div>
                    </div>
                  </div>
                </div>
                <VisibleSublevelsfalseFixed
                  sensoren="Semantic SLAM"
                  heGaveYouThisGiftOfImagin="He gave you this gift of imagination. Use it. It looks so good, I might as well not stop. Let's make some happy little clouds in our world."
                  :showInformation="false"
                  visibleSublevelsfalseFixeHeight="12.25rem"
                  visibleSublevelsfalseFixeCursor="unset"
                  cardWidth="15rem"
                  informationHeight="11.25rem"
                />
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
  import Navigation1 from "../components/Navigation1.vue";
  import CardWithClosedSublevels from "../components/CardWithClosedSublevels.vue";
  import VisibleSublevelsfalseFixed from "../components/VisibleSublevelsfalseFixed.vue";

  export default defineComponent({
    name: "OS",
    components: {
      Navigation1,
      CardWithClosedSublevels,
      VisibleSublevelsfalseFixed,
    },
    methods: {
      onCardContainer1Click() {
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
  .interactiveKennisdatabank {
    align-self: stretch;
    position: relative;
    font-weight: 800;
  }
  .arrowLeft {
    align-self: stretch;
    position: relative;
  }
  .backToOverview {
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-base);
    font-family: var(--font-barlow);
  }
  .information {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--padding-base);
    gap: var(--gap-3xs);
  }
  .card {
    align-self: stretch;
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
    cursor: pointer;
  }
  .cardParent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .information1 {
    align-self: stretch;
    display: none;
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
  .cardWithClosedSublevels {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .frameParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .themes {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
    text-align: center;
    font-size: var(--font-size-xl);
    color: var(--color-gray-100);
    font-family: var(--font-font-awesome-6-free);
  }
  .interactiveKennisdatabankParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--gap-5xl);
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
  .os {
    position: relative;
    background-color: var(--neutral-1);
    width: 100%;
    height: 64rem;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-13xl);
    color: var(--color-darkslategray);
    font-family: var(--font-barlow);
  }
</style>
