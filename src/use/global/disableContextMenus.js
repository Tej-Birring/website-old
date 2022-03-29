import { onMounted } from "vue";

export default function useDisableContextMenus() {
    onMounted( () => {
        document.addEventListener("contextmenu", (ev) => {
            // console.log(ev);

            // disable context menus on images:
            if (ev.target.tagName === "IMG")
                ev.preventDefault();
        });
    });
}