<template>
  <div :class="$style.detail">
    <div :class="$style.background">
      <img :class="$style.backgroundChild" alt="" src="/rectangle-2@2x.png" />
      <div :class="$style.backgroundItem" />
    </div>
    <div :class="$style.bodyContent">
      <Navigation1 />
      <img :class="$style.dividerIcon" alt="" src="/divider1.svg" />
      <div :class="$style.content">
        <Display
          robots="Robots"
          legged="Legged"
          robotsThatCanWalkOnFoot="Robots that can walk on foot."
          stItemLabel="Robots"
          ndItemLabel="Legged"
          :onStItemContainerClick="onStItemContainerClick"
          :showTextText="false"
          :showIconWrapper="false"
        />
        <div :class="$style.subjects">
          <DisplaySub1 /><DisplaySub
            imageDimensions="/rectangle-32@2x.png"
            :showText="false"
            frameDivPadding="0rem var(--padding-base) var(--padding-base)"
            subjectTitleLineHeight="1.5rem"
            ifWereGoingLineHeight="1.31rem"
            datumPublicatieLineHeight="1.5rem"
            buttonDisplayWidth="7.81rem"
            buttonDisplayHeight="2.31rem"
            rectangleDivTop="1.29rem"
            rectangleDivLeft="8.13rem"
            rectangleDivWidth="7.69rem"
            rectangleDivHeight="7.96rem"
            readMoreTop="0.5rem"
            readMoreLeft="1.5rem"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Navigation1 from "../components/Navigation1.vue";
  import Display from "../components/Display.vue";
  import DisplaySub1 from "../components/DisplaySub1.vue";
  import DisplaySub from "../components/DisplaySub.vue";

  export default defineComponent({
    name: "Detail",
    components: { Navigation1, Display, DisplaySub1, DisplaySub },
    methods: {
      onStItemContainerClick() {
        this.$router.push("/robots");
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
  .subjects {
    align-self: stretch;
    height: 34.31rem;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--gap-5xl);
  }
  .content {
    flex: 1;
    width: 90rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--padding-13xl) var(--padding-45xl) var(--padding-base);
    box-sizing: border-box;
    gap: var(--gap-45xl);
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
  .detail {
    position: relative;
    background-color: var(--neutral-1);
    width: 100%;
    height: 64rem;
    overflow: hidden;
  }
</style>
