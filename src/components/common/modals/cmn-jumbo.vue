<template>
    <div class="cmn-jumbo" hide-on-mobile-devices>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "cmn-jumbo"
    }
</script>

<style scoped lang="scss">
    .cmn-jumbo {
        margin: 3rem 0 0 0;

        background-color: transparentize($theme-color-4, 0.3);
        color: $theme-color-2;

        padding: 2rem 0 2rem 0;
        @media(max-width: $breakpoint-portrait-tablet) {
            padding: 1.5rem;
        }
    }
</style>