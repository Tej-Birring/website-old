<template>
  <router-view/>
</template>

<script>
  import useKeyboardNavigation from "./use/global/keyboardNavigation";
  import useDisableContextMenus from "./use/global/disableContextMenus";
  import usePlaformSpecificAdjustments from "./use/global/plaformSpecificAdjustments";



  export default {

    setup() {
      useKeyboardNavigation();
      useDisableContextMenus();
      usePlaformSpecificAdjustments();
    },

    created() {
      console.log("App created.");
    },

  }
</script>