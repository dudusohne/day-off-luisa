import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import luisa from 'luisa-vue'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(luisa)

app.mount('#app')
