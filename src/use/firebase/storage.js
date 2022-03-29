import { inject } from "vue";

export default function useFirebaseStorage() {
    const firebase = inject("$firebase");

    function downloadFile(path) {
        const pathRef = firebase.storage.ref(path);
        pathRef.getDownloadURL().then(
            (url) => {
                window.open(url, "_blank");
            },
            (error) => {
                console.error("Error downloading file: ", path);
                console.log(error);
            }
        )
    }

    return {
        downloadFile
    }
}