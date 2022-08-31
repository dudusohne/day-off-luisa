import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import luisa from "luisa-vue";
import Vue3Storage from "vue3-storage";
import VCalendar from "v-calendar";

import "./assets/main.css";

const app = createApp(App);
app.use(VCalendar, {});
app.use(router);
app.use(Vue3Storage);
app.use(luisa);

app.mount("#app");
