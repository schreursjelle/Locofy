<template>
  <div :class="$style.displaySub">
    <div :class="$style.text">
      <img :class="$style.textChild" alt="" src="/rectangle-31@2x.png" />
      <div :class="$style.subjectTitleParent">
        <b :class="$style.subjectTitle">Unitree Go1 Edu</b>
        <div :class="$style.ifWereGoingToHaveAnimalsParent">
          <div :class="$style.ifWereGoing">
            This is the Unitree Go1 Edu robot. It’s a relatively lightweight
            robot that can walk on all terrains as long as there aren’t too big
            gaps in it. Out-of-the-box it comes with a stair mode so it can take
            stairs. It also has some standard programmed dance moves and comes
            with two controllers. Both can be used for controlling the robot
            while the smaller one of them can also be used as a Bleuthooth tag
            on which ...
          </div>
          <div :class="$style.datumPublicatieParent">
            <div :class="$style.subjectTitle">Datum publicatie</div>
            <Hoverstatefalse
              buttonText="Read more"
              hoverstatefalseBorder="2px solid var(--color-darkgreen)"
              hoverstatefalseBoxSizing="border-box"
              hoverstatefalsePosition="relative"
              hoverstatefalseFlexShrink="0"
              hoverstatefalseWidth="7.81rem"
              hoverstatefalseHeight="2.31rem"
              rectangleDivLeft="8.13rem"
              rectangleDivBackgroundColor="#5a3f37"
              rectangleDivBackground="unset"
              rectangleDivTop="1.29rem"
              rectangleDivWidth="7.69rem"
              rectangleDivHeight="7.96rem"
              readMoreLeft="1.5rem"
              readMoreColor="#1e1e1e"
              readMoreTextAlign="left"
              readMoreTop="0.5rem"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Hoverstatefalse from "./Hoverstatefalse.vue";

  export default defineComponent({
    name: "DisplaySub1",
    components: { Hoverstatefalse },
  });
</script>
<style module>
  .textChild {
    align-self: stretch;
    flex: 1;
    position: relative;
    border-radius: var(--br-5xs);
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .subjectTitle {
    position: relative;
    line-height: 1.5rem;
  }
  .ifWereGoing {
    align-self: stretch;
    position: relative;
    line-height: 1.31rem;
  }
  .datumPublicatieParent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: var(--body-regular-size);
    color: var(--color-gray-300);
  }
  .ifWereGoingToHaveAnimalsParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
    font-size: var(--font-size-base);
  }
  .subjectTitleParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0rem var(--padding-base) var(--padding-base);
    gap: var(--gap-base);
  }
  .text {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
  }
  .displaySub {
    align-self: stretch;
    width: 26.33rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    font-size: var(--font-size-lg);
    color: var(--color-black);
    font-family: var(--font-barlow);
  }
</style>
