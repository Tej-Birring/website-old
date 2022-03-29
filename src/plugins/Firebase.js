// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/storage";
import "firebase/analytics";
import "firebase/functions";

// Firebase configs
import { firebaseConfig } from "../../configs/firebaseConfig";

firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const storage = firebase.storage();
const functions = firebase.functions();



const Firebase = {};
Firebase.install = function (app) {

    app.provide("$firebase", {
        analytics,
        storage,
        functions
    });

    console.log("Firebase initialized.")
};

export default Firebase;