<template>
<!--    <cmn-status-icon :status-icon-pairs="statusIconPairs" :status="translatedStatus" />-->
    <div class="status-icon">
        <slot name="valid" v-if="translatedStatus === 'valid'">
            <i class="feather-check"></i>
        </slot>
        <slot name="invalid" v-if="translatedStatus === 'invalid'">
            <i class="feather-alert-triangle"></i>
        </slot>
    </div>
</template>

<script>

    export default {
        name: "cmn-validation-status-icon",
        components: {},
        props: {
            status: {
                type: Boolean,
                required: false
            }
        },
        computed: {
            translatedStatus() {
                    if (this.status === true)
                        return "valid";
                    else if (this.status === false)
                        return "invalid";
                    else
                        return undefined;
            }
        }
    }
</script>

<style scoped>

</style>