<template>
    <div class="no-wrap text-center">
        <div>
            <cmn-key icon="feather-chevron-up" />
        </div>
        <div>
            <cmn-key icon="feather-chevron-left"/>
            <cmn-key icon="feather-chevron-down"/>
            <cmn-key icon="feather-chevron-right"/>
        </div>
    </div>
</template>

<script>
    import CmnKey from "./cmn-key";
    export default {
        name: "cmn-arrow-keys",
        components: {CmnKey}
    }
</script>

<style scoped>

</style>