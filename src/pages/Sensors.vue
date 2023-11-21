<template>
  <div :class="$style.sensors">
    <div :class="$style.background">
      <img :class="$style.backgroundChild" alt="" src="/rectangle-2@2x.png" />
      <div :class="$style.backgroundItem" />
    </div>
    <div :class="$style.bodyContent">
      <Navigation1 />
      <img :class="$style.dividerIcon" alt="" src="/divider1.svg" />
      <div :class="$style.content">
        <frame
          image="/image5@2x.png"
          algorithms="Sensors"
          fromVisionAlgorithmsToPat="(Additional) Hardware to help robots with sensing their environment. See here all options of sensors we recommend when working with smart robots"
          sensoren="2D Lidar"
          heGaveYouThisGiftOfImagin="Scan the envrionment to a 2D map"
          sensoren1="3D Lidar"
          heGaveYouThisGiftOfImagin1="Scan the envrionment to a 3D map"
          sensoren2="GPS-systems"
          heGaveYouThisGiftOfImagin2="Enable outdoor positioning via satelite-based navigations systems such as GPS."
          sensoren3="Cameras"
          heGaveYouThisGiftOfImagin3="Interpret the environment of the robot through images by camera"
          sensoren4="IMUs"
          heGaveYouThisGiftOfImagin4="Get all parameters from the robot’s movement with IMU sensors"
          frameDivCursor="unset"
          propCursor="unset"
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
    name: "Sensors",
    components: { Navigation1, Frame },
    methods: {
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
  .sensors {
    position: relative;
    background-color: var(--neutral-1);
    width: 100%;
    height: 64rem;
    overflow: hidden;
  }
</style>
