import { onMounted } from "vue";

/*
* This actually doesn't do anything,
* just shows data on console.
*
* It's the plugin (./plugins/PlatformSpecificAdjustments.js) that does the magic.
*
* */

export default function usePlaformSpecificAdjustments() {

    onMounted( () => {
        const userAgent = navigator.userAgent;
        console.log("You are viewing this website on: ", userAgent);
        const isTablet =
            /(mobile|ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/
            .test(userAgent.toLowerCase());
        console.log("Is mobile device: ", isTablet);
    });

}