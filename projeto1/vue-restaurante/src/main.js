import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import axios from 'axios'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCGIb_gPDOkeQDFf1LfIqrIGjwXce9oUdM",
    authDomain: "restaurante-bec76.firebaseapp.com",
    databaseURL: "https://restaurante-bec76-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "restaurante-bec76",
    storageBucket: "restaurante-bec76.appspot.com",
    messagingSenderId: "867687785534",
    appId: "1:867687785534:web:89fbe59b6ed5b790cfdd6f"
  };

firebase.initializeApp(firebaseConfig);
createApp(App).use(VueAxios, axios).use(store).use(router).mount('#app')
