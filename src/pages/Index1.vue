<template>
  <div :class="$style.index1">
    <div :class="$style.background">
      <img :class="$style.backgroundChild" alt="" src="/rectangle-2@2x.png" />
      <div :class="$style.backgroundItem" />
    </div>
    <div :class="$style.bodyContent">
      <Navigation2 />
      <img :class="$style.dividerIcon" alt="" src="/divider1.svg" />
      <div :class="$style.content">
        <div :class="$style.interactiveKennisdatabankParent">
          <div :class="$style.interactiveKennisdatabank">
            Interactive kennisdatabank
          </div>
          <div :class="$style.themes">
            <VisibleSublevelsfalseFixed1
              image="/image6@2x.png"
              sensoren="Sensors"
              heGaveYouThisGiftOfImagin="(Additional) Hardware to help robots with sensing their environment. See here all options of sensors we recommend when working with smart robots"
              visibleSublevelsfalseFixeCursor="unset"
              cardWidth="15rem"
              imageIconHeight="10rem"
              informationHeight="11.25rem"
              subsContentCursor="pointer"
              buttonDisplayWidth="7.69rem"
              buttonDisplayHeight="2.19rem"
              buttonDisplayBorder="unset"
              buttonDisplayBoxSizing="unset"
              rectangleDivTop="1.29rem"
              rectangleDivLeft="-2rem"
              rectangleDivWidth="7.69rem"
              rectangleDivHeight="7.96rem"
              rectangleDivBackground="linear-gradient(180deg, #5a3f37, #2c7744)"
              rectangleDivBackgroundColor="unset"
              readMoreTop="0.5rem"
              readMoreLeft="2.19rem"
              readMoreColor="#fff"
              sublevelsPadding="0rem var(--padding-5xl)"
              dividerIconHeight="0rem"
              :onSubsContentContainerClick="onSubsContentContainerClick"
            /><VisibleSublevelsfalseFixed1
              image="/image7@2x.png"
              sensoren="Algorithms"
              heGaveYouThisGiftOfImagin="From vision algorithms to path planning algorithms: dive into our recommendations of various algorithms"
              visibleSublevelsfalseFixeCursor="pointer"
              cardWidth="15rem"
              imageIconHeight="10rem"
              informationHeight="11.25rem"
              subsContentCursor="unset"
              buttonDisplayWidth="7.81rem"
              buttonDisplayHeight="2.31rem"
              buttonDisplayBorder="2px solid var(--color-darkgreen)"
              buttonDisplayBoxSizing="border-box"
              rectangleDivTop="1.29rem"
              rectangleDivLeft="8.13rem"
              rectangleDivWidth="7.69rem"
              rectangleDivHeight="7.96rem"
              rectangleDivBackground="unset"
              rectangleDivBackgroundColor="#5a3f37"
              readMoreTop="0.5rem"
              readMoreLeft="2.19rem"
              readMoreColor="#1e1e1e"
              sublevelsPadding="0rem var(--padding-5xl)"
              dividerIconHeight="0rem"
              :onCardWithClosedSublevels1Click="onCardWithClosedSublevels1Click"
            /><VisibleSublevelsfalseFixed1
              image="/image8@2x.png"
              sensoren="Robots"
              heGaveYouThisGiftOfImagin="Looking for a legged robot or a wheel-based robot? Take a look at some interesting robots."
              visibleSublevelsfalseFixeCursor="pointer"
              cardWidth="15rem"
              imageIconHeight="10rem"
              informationHeight="11.25rem"
              subsContentCursor="unset"
              buttonDisplayWidth="7.81rem"
              buttonDisplayHeight="2.31rem"
              buttonDisplayBorder="2px solid var(--color-darkgreen)"
              buttonDisplayBoxSizing="border-box"
              rectangleDivTop="1.29rem"
              rectangleDivLeft="8.13rem"
              rectangleDivWidth="7.69rem"
              rectangleDivHeight="7.96rem"
              rectangleDivBackground="unset"
              rectangleDivBackgroundColor="#5a3f37"
              readMoreTop="0.5rem"
              readMoreLeft="2.19rem"
              readMoreColor="#1e1e1e"
              sublevelsPadding="0rem var(--padding-5xl)"
              dividerIconHeight="0rem"
              :onCardWithClosedSublevels1Click="onCardWithClosedSublevels2Click"
            /><VisibleSublevelsfalseFixed1
              image="/image9@2x.png"
              sensoren="Extra Software"
              heGaveYouThisGiftOfImagin="Algorithms need a backbone OS to run on. Find the ones which are suitable for your robotic applications."
              visibleSublevelsfalseFixeCursor="pointer"
              cardWidth="15rem"
              imageIconHeight="10rem"
              informationHeight="11.25rem"
              subsContentCursor="unset"
              buttonDisplayWidth="7.81rem"
              buttonDisplayHeight="2.31rem"
              buttonDisplayBorder="2px solid var(--color-darkgreen)"
              buttonDisplayBoxSizing="border-box"
              rectangleDivTop="1.29rem"
              rectangleDivLeft="8.13rem"
              rectangleDivWidth="7.69rem"
              rectangleDivHeight="7.96rem"
              rectangleDivBackground="unset"
              rectangleDivBackgroundColor="#5a3f37"
              readMoreTop="0.5rem"
              readMoreLeft="2.19rem"
              readMoreColor="#1e1e1e"
              sublevelsPadding="0rem var(--padding-5xl)"
              dividerIconHeight="0rem"
              :onCardWithClosedSublevels1Click="onCardWithClosedSublevels3Click"
            /><VisibleSublevelsfalseFixed1
              image="/image10@2x.png"
              sensoren="Companion computer"
              heGaveYouThisGiftOfImagin="Prefer to run your algorithms on the robot? Take a look at our lightweight edge devices we recommend when working with robots."
              visibleSublevelsfalseFixeCursor="pointer"
              cardWidth="15rem"
              imageIconHeight="10rem"
              informationHeight="11.25rem"
              subsContentCursor="unset"
              buttonDisplayWidth="7.81rem"
              buttonDisplayHeight="2.31rem"
              buttonDisplayBorder="2px solid var(--color-darkgreen)"
              buttonDisplayBoxSizing="border-box"
              rectangleDivTop="1.29rem"
              rectangleDivLeft="8.13rem"
              rectangleDivWidth="7.69rem"
              rectangleDivHeight="7.96rem"
              rectangleDivBackground="unset"
              rectangleDivBackgroundColor="#5a3f37"
              readMoreTop="0.5rem"
              readMoreLeft="2.19rem"
              readMoreColor="#1e1e1e"
              sublevelsPadding="0rem var(--padding-5xl)"
              dividerIconHeight="0rem"
              :onCardWithClosedSublevels1Click="onCardWithClosedSublevels4Click"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Navigation2 from "../components/Navigation2.vue";
  import VisibleSublevelsfalseFixed1 from "../components/VisibleSublevelsfalseFixed1.vue";

  export default defineComponent({
    name: "Index1",
    components: { Navigation2, VisibleSublevelsfalseFixed1 },
    methods: {
      onSubsContentContainerClick() {
        this.$router.push("/sensors");
      },
      onCardWithClosedSublevels1Click() {
        this.$router.push("/algorithms");
      },
      onCardWithClosedSublevels2Click() {
        this.$router.push("/robots");
      },
      onCardWithClosedSublevels3Click() {
        this.$router.push("/os");
      },
      onCardWithClosedSublevels4Click() {
        this.$router.push("/minicomputers");
      },
    },
  });
</script>
<style module>
  .backgroundChild {
    align-self: stretch;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    height: 64rem;
    flex-shrink: 0;
    object-fit: cover;
  }
  .backgroundItem {
    align-self: stretch;
    position: relative;
    background-color: var(--color-gray-200);
    backdrop-filter: blur(160px);
    height: 64rem;
    margin-top: -64rem;
  }
  .background {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
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
  .themes {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
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
    align-self: stretch;
    height: 64rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0rem 0rem var(--padding-13xl);
    box-sizing: border-box;
    margin-top: -64rem;
  }
  .index1 {
    position: relative;
    background-color: var(--neutral-1);
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    font-size: var(--font-size-13xl);
    color: var(--color-darkslategray);
    font-family: var(--font-barlow);
  }
</style>
