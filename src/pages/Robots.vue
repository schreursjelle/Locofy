<template>
  <div :class="$style.robots">
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
              image="/image3@2x.png"
              companionComputer="Robots"
              preferToRunYourAlgorithms="Looking for a legged robot or a wheel-based robot? Take a look at some interesting robots."
            />
            <div :class="$style.frameParent">
              <div :class="$style.cardWithClosedSublevelsParent">
                <VisibleSublevelsfalseFixed
                  sensoren="Legged"
                  heGaveYouThisGiftOfImagin="Robots that can walk on foot."
                  :showInformation="true"
                  visibleSublevelsfalseFixeHeight="12.25rem"
                  visibleSublevelsfalseFixeCursor="unset"
                  cardWidth="15rem"
                  informationHeight="11.25rem"
                /><VisibleSublevelsfalseFixed
                  sensoren="Wheels"
                  heGaveYouThisGiftOfImagin="Robots that move through the use of wheels"
                  :showInformation="true"
                  visibleSublevelsfalseFixeHeight="12.25rem"
                  visibleSublevelsfalseFixeCursor="unset"
                  cardWidth="15rem"
                  informationHeight="11.25rem"
                /><VisibleSublevelsfalseFixed
                  sensoren="Safety"
                  heGaveYouThisGiftOfImagin="He gave you this gift of imagination. Use it. It looks so good, I might as well not stop. Let's make some happy little clouds in our world."
                  :showInformation="false"
                  visibleSublevelsfalseFixeHeight="12.25rem"
                  visibleSublevelsfalseFixeCursor="unset"
                  cardWidth="15rem"
                  informationHeight="11.25rem"
                />
              </div>
              <div :class="$style.cardWithClosedSublevelsParent">
                <div
                  :class="$style.cardWithClosedSublevels"
                  @click="onCardWithClosedSublevels4Click"
                >
                  <div :class="$style.card">
                    <div :class="$style.information">
                      <div :class="$style.arrowLeft">arrow-left</div>
                      <div :class="$style.backToOverview">back to overview</div>
                    </div>
                  </div>
                </div>
                <VisibleSublevelsfalseFixed
                  sensoren="Vision"
                  heGaveYouThisGiftOfImagin="Interpret the environment through images by e.g. object detection or segmentation"
                  :showInformation="false"
                  visibleSublevelsfalseFixeHeight="12.25rem"
                  visibleSublevelsfalseFixeCursor="unset"
                  cardWidth="15rem"
                  informationHeight="11.25rem"
                /><VisibleSublevelsfalseFixed
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
    name: "Robots",
    components: {
      Navigation1,
      CardWithClosedSublevels,
      VisibleSublevelsfalseFixed,
    },
    methods: {
      onCardWithClosedSublevels4Click() {
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
  .cardWithClosedSublevelsParent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
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
    cursor: pointer;
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
  .robots {
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
