<template>
    <div class="main-content">
        <div class="fixed-width">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cmn-main-content",
        props: {
            fixedWidth: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style scoped>

</style>