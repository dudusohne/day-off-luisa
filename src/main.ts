import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import luisa from 'luisa-vue'
import Vue3Storage from "vue3-storage";

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(Vue3Storage)
app.use(luisa)

app.mount('#app')
