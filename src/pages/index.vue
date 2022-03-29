<template>
  <cmn-jumbo>
    <div class="d-flex-col-nowrap text-center">
      <cmn-arrow-keys class="mt-1" />
      <h6 tabindex="0" nogrow>
        You can use your arrow keys to navigate this website.
      </h6>
      <p>(Supported by most modern browsers.)</p>
    </div>
  </cmn-jumbo>

  <cmn-main-content>
    <div class="profile">
      <img src="../assets/images/profile.png" alt="" />
      <div>
        <p class="text-medium-large">
          <span class="text-theme-5">Hey, I'm <strong>Tej.</strong> 🤝</span>
          <br />
          <span class="text-theme-3">Nice to meet you!</span> 🙂
          <br />
          <span class="text-theme-2-faded">Enjoy your visit up here.</span> 🏔
        </p>
        <br />
      </div>
    </div>
  </cmn-main-content>
</template>

<script>
// @ is an alias to /src
import CmnArrowKeys from "../components/common/cmn-arrow-keys";
import CmnJumbo from "../components/common/modals/cmn-jumbo";
import CmnMainContent from "../components/common/cmn-main-content";

export default {
  name: "home",
  components: { CmnMainContent, CmnJumbo, CmnArrowKeys },
};
</script>

<style scoped lang="scss">
div.profile {
  display: flex;
  flex-flow: row nowrap;
  @media (max-width: $breakpoint-landscape-tablet) {
    flex-flow: column nowrap;
  }
  justify-content: center;
  align-content: center;
  overflow: hidden;

  img {
    align-self: center;
    border-radius: 50%;
    width: 40vmin;
    height: 40vmin;
    margin-right: 4rem;
    @media (max-width: $breakpoint-landscape-tablet) {
      width: 60vmin;
      height: 60vmin;
      margin-bottom: 2rem;
      margin-right: 0;
    }
  }

  div {
    align-self: center;
    color: $theme-color-2;
    text-align: left;
    max-width: 50%;

    @media (max-width: $breakpoint-landscape-tablet) {
      text-align: center;
      max-width: 100%;
      margin-bottom: 1rem;
    }
  }
}
</style>

