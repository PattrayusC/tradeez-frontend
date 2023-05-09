// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import './main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
