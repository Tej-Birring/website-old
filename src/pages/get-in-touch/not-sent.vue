<template>
    <cmn-main-content>
        <section class="text-center mb-0">
            <i class="feather-x-circle"></i>
            <h4>Your message could not be sent.</h4>
            <p>There seems to be an error.</p>
            <div class="button-row-center">
                <cmn-button class="mt-2" text="Return Home" icon="feather-home" :on-click="goBackHome" />
                <cmn-button class="mt-2" text="Try Again" icon="feather-mail" force-focus :on-click="goToContactForm" />
            </div>

        </section>
    </cmn-main-content>
</template>

<script>
    import CmnMainContent from "../../components/common/cmn-main-content";
    import CmnButton from "../../components/common/cmn-button";
    export default {
        name: "not-sent",
        components: {CmnButton, CmnMainContent},
        methods: {
            goBackHome() {
                this.$router.push("/");
            },
            goToContactForm() {
                this.$router.push("/get-in-touch");
            }
        }
    }
</script>

<style scoped lang="scss">
    i {
        font-size: 10rem;
        color: $theme-color-fail;
    }
</style>