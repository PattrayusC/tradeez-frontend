import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const firebaseConfig = {
    apiKey: "AIzaSyBYChCa0ONCFzKEMo44EzQr4hZG7B7x6T0",
    authDomain: "fcg-auth-81803.firebaseapp.com",
    projectId: "fcg-auth-81803",
    storageBucket: "fcg-auth-81803.appspot.com",
    messagingSenderId: "19083552179",
    appId: "1:19083552179:web:17b151cd0e64d0857457c6"
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)
app.mount('#app')
