<template>
  <div :class="$style.navigation">
    <div :class="$style.menuAndIcons">
      <div :class="$style.icons">
        <div :class="$style.magnifyingGlass">magnifying-glass</div>
        <div :class="$style.magnifyingGlass">bell</div>
      </div>
      <div :class="$style.profileInformation">
        <div :class="$style.profilePictureDayInformat">
          <img
            :class="$style.profilePictureIcon"
            alt=""
            src="/profile-picture@2x.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Navigation1",
  });
</script>
<style module>
  .magnifyingGlass {
    position: relative;
  }
  .icons {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .profilePictureIcon {
    position: absolute;
    top: 0rem;
    left: 0rem;
    border-radius: var(--br-17xl);
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
  }
  .profilePictureDayInformat {
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
  }
  .profileInformation {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .menuAndIcons {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: var(--padding-5xs) 0rem;
    gap: var(--gap-13xl);
  }
  .navigation {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--padding-13xl) var(--padding-45xl) var(--padding-base);
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--color-darkgray);
    font-family: var(--font-font-awesome-6-free);
  }
</style>
