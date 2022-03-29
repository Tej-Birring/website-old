<template>
    <div>
        <i v-if="activeStatusIconPair" :class="activeStatusIconPair.icon" ></i>
    </div>
</template>

<script>
    export default {
        name: "cmn-status-icon",
        props: {
            statusIconPairs: { // { status: x, icon: x }
                type: Array,
                required: true
            },
            status: {
                type: String,
                required: false
            }
        },
        computed: {
            activeStatusIconPair() {
                if (!this.status || !this.statusIconPairs) return;
                return this.statusIconPairs.filter( pair => pair.status === this.status )[0];
            }
        }
    }
</script>

<style scoped>

</style>