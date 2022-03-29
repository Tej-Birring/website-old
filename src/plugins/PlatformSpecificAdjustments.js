const PlatformSpecificAdjustments = {};
PlatformSpecificAdjustments.install = function (Vue) {
    Vue.mixin({
        updated() {
            const userAgent = navigator.userAgent;
            const isTablet = /(mobile|ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/
                .test(userAgent.toLowerCase());

            if (!isTablet) return;

            document.querySelectorAll("[hide-on-mobile-devices]").forEach(
                (el) => {
                    // el.remove();
                    el.style.display = "none";
                }
            );
        }
    });
};

export default PlatformSpecificAdjustments;