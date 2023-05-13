// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
// import './main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'



const firebaseConfig = {
    apiKey: "AIzaSyD4PZqisaeWvYIabH4Fo9QK9KcAr6JwshU",
    authDomain: "trade-ez.firebaseapp.com",
    projectId: "trade-ez",
    storageBucket: "trade-ez.appspot.com",
    messagingSenderId: "268989279030",
    appId: "1:268989279030:web:442d85ec526951b703a197",
    measurementId: "G-DM7S060PPX"
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)
app.mount('#app')
