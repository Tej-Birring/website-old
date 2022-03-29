<template>
    <button ref="button" @click.prevent.stop="click" :disabled="disabled" :tabindex="tabIndex" >
        {{text}}
        <i v-if="icon" :class="icon"></i>
    </button>
</template>

<script>
    export default {
        name: "cmn-button",
        props: {
            icon: {
                type: String,
                default: null
            },
            text: {
                type: String,
                required: true
            },
            onClick: {
                type: Function,
                default: null
            },
            disabled: {
                type: Boolean,
                default: false
            },
            forceFocus: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            click() {
                this.onClick();
            }
        },
        computed: {
            tabIndex() {
                if (this.disabled)
                    return -1;
                else
                    return 0;
            }
        },
        mounted() {
            if (this.forceFocus) {
                this.$refs.button.focus();
            }
        }
    }
</script>

<style scoped lang="scss">

</style>