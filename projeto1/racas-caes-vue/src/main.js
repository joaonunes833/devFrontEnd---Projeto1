import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "vuedog-6c11d",
    storageBicket: "",
    messagingSenderId: "",
    appId: ""
}

firebase.initializeApp(firebaseConfig)
createApp(App).use(VueAxios, axios).use(router).mount("#app");
