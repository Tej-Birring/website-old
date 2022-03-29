<template>
    <cmn-main-content>
        <section class="text-center mb-0">
            <i class="feather-check-circle"></i>
            <h4>Your message was sent.</h4>
            <p class="mb-2">Thank you for getting in touch.</p>
            <cmn-button text="Return Home" icon="feather-home" force-focus :on-click="goBackHome"/>
        </section>
    </cmn-main-content>
</template>

<script>
    import CmnMainContent from "../../components/common/cmn-main-content";
    import CmnButton from "../../components/common/cmn-button";

    export default {
        name: "sent",
        components: {CmnButton, CmnMainContent },
        methods: {
            goBackHome() {
                this.$router.push("/");
            }
        }
    }
</script>

<style scoped lang="scss">
    i {
        font-size: 10rem;
        color: $theme-color-success;
    }
</style>