<template>
  <div class="linksWrapper">
    <cmn-button
      :disabled="link.disabled"
      class="link"
      v-for="(link, idx) in linksFiltered"
      :key="idx"
      :text="link.name"
      :icon="link.icon"
      @click="visit(link.url)"
    ></cmn-button>
  </div>
</template>

<script>
import links from "../../data/links.js";
import CmnButton from "../components/common/cmn-button";

export default {
  name: "link-tree",
  components: { CmnButton },
  data() {
    return {};
  },
  computed: {
    linksFiltered() {
      const hostname = location.hostname;
      links.forEach((el) => {
        if (el.url.includes(hostname)) {
          el.disabled = true;
        }
      });
      return links;
    },
  },
  methods: {
    visit(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped lang="scss">
.linksWrapper {
  display: flex;
  flex-flow: column nowrap;
  max-width: 500px;
  margin: 0 auto;
  padding: 6rem;
  @media (max-width: $breakpoint-portrait-tablet) {
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: 6rem;
    padding-right: 6rem;
  }
  .link {
    margin: 1.6rem 0;
    height: 5.2rem;
  }
  .link:first-child {
    margin-top: 0;
  }
}
</style>