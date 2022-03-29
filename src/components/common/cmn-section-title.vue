<template>
    <div class="section-title" tabindex="0" nogrow :class="{pgBreakBefore: pgBreakBefore}"><span>{{title}}</span><i v-if="icon" :class="icon"></i></div>
</template>

<script>
    export default {
        name: "cmn-section-title",
        props: {
            title: {
                type: String,
                required: true
            },
            icon: {
                type: String,
                default: null
            },
            pgBreakBefore: {
                type: Boolean
            }
        }
    }
</script>

<style scoped lang="scss">
</style>