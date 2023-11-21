<template>
  <div :class="$style.display">
    <div :class="$style.greeting">
      <div :class="$style.profileInformation">
        <div :class="$style.profilePictureDayInformat">
          <img
            :class="$style.profilePictureIcon"
            alt=""
            src="/profile-picture1@2x.png"
          />
        </div>
      </div>
      <div :class="$style.profileGreeting">
        <div :class="$style.robotsParent">
          <div :class="$style.robots">Robots</div>
          <div :class="$style.robots">-</div>
          <div :class="$style.robots">Legged</div>
        </div>
        <div :class="$style.robotsThatCan">Robots that can walk on foot.</div>
      </div>
      <div :class="$style.buttonDisplay">
        <div :class="$style.button">
          <div :class="$style.analytics">Analytics</div>
        </div>
        <Openfalse />
      </div>
    </div>
    <div :class="$style.breadcrumb">
      <div :class="$style.breadcrumbNavigation">
        <SizemediumTooltipfalseIc
          text="Sorting order"
          iconWrapper="/iconwrapper1.svg"
          :showTextText="false"
          :showIconWrapper="false"
          sizemediumTooltipfalseIcBackgroundColor="unset"
          sizemediumTooltipfalseIcBoxShadow="unset"
          sizemediumTooltipfalseIcBorder="unset"
          sizemediumTooltipfalseIcTransform=" rotate(180deg)"
          sizemediumTooltipfalseIcTransformOrigin="0 0"
          textLineHeight="1.38rem"
          textFontFamily="'Segoe UI'"
          textColor="#141414"
          iconWrapperWidth="0.63rem"
          iconWrapperHeight="0.71rem"
        />
        <div :class="$style.breadcrumb1">
          <div :class="$style.stItem" @click="onStItemContainerClick">
            <div :class="$style.stItemLabel">Robots</div>
          </div>
          <ComponentsSeparator
            componentsSeparatorPadding="0rem var(--padding-5xs)"
            separatorLineHeight="1.38rem"
          />
          <div :class="$style.stItem" @click="onStItemContainer1Click">
            <div :class="$style.stItemLabel">Legged</div>
          </div>
          <ComponentsSeparator
            componentsSeparatorPadding="0rem var(--padding-5xs)"
            separatorLineHeight="1.38rem"
          />
          <div :class="$style.ndItem">
            <b :class="$style.stItemLabel">Unitree Go1 Edu</b>
          </div>
          <ComponentsSeparator
            componentsSeparatorPadding="0rem var(--padding-5xs)"
            separatorLineHeight="1.38rem"
          />
          <div :class="$style.componentslink">
            <div :class="$style.stItemLabel">...</div>
          </div>
          <div :class="$style.componentsseparator">
            <div :class="$style.stItemLabel">/</div>
          </div>
          <div :class="$style.ndToLastItem">
            <div :class="$style.stItemLabel">Application List</div>
          </div>
          <div :class="$style.componentsseparator">
            <div :class="$style.stItemLabel">/</div>
          </div>
          <div :class="$style.lastItem">
            <div :class="$style.stItemLabel">An Application</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Openfalse from "./Openfalse.vue";
  import SizemediumTooltipfalseIc from "./SizemediumTooltipfalseIc.vue";
  import ComponentsSeparator from "./ComponentsSeparator.vue";

  export default defineComponent({
    name: "Display1",
    components: { Openfalse, SizemediumTooltipfalseIc, ComponentsSeparator },
    methods: {
      onStItemContainerClick() {
        this.$router.push("/robots");
      },
      onStItemContainer1Click() {
        this.$router.push("/");
      },
    },
  });
</script>
<style module>
  .profilePictureIcon {
    position: absolute;
    top: 0rem;
    left: 0rem;
    border-radius: var(--br-141xl);
    width: 5rem;
    height: 5rem;
    object-fit: cover;
  }
  .profilePictureDayInformat {
    position: relative;
    width: 5rem;
    height: 5rem;
  }
  .profileInformation {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .robots {
    position: relative;
    font-weight: 800;
  }
  .robotsParent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
  }
  .robotsThatCan {
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-base);
    color: var(--color-gray-100);
  }
  .profileGreeting {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
  }
  .analytics {
    position: relative;
    font-weight: 500;
  }
  .button {
    align-self: stretch;
    border-radius: var(--br-13xl);
    background-color: var(--color-darkgreen);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: var(--padding-5xs) var(--padding-5xl);
  }
  .buttonDisplay {
    flex: 1;
    height: 2.19rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: var(--gap-5xs);
    font-size: var(--font-size-base);
    color: var(--neutral-1);
  }
  .greeting {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .stItemLabel {
    position: relative;
    line-height: 1.38rem;
  }
  .stItem {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    font-family: var(--font-barlow);
  }
  .ndItem {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: var(--color-gray-100);
    font-family: var(--font-barlow);
  }
  .componentslink {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .componentsseparator {
    overflow: hidden;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0rem var(--padding-5xs);
  }
  .ndToLastItem {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .lastItem {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: var(--character-primary-85);
  }
  .breadcrumb1 {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    transform: rotate(180deg);
    transform-origin: 0 0;
  }
  .breadcrumbNavigation {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    transform: rotate(180deg);
    transform-origin: 0 0;
  }
  .breadcrumb {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: var(--body-regular-size);
    color: var(--character-secondary-45);
    font-family: var(--body-regular);
  }
  .display {
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
