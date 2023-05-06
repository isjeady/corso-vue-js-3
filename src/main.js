import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";

import "primeicons/primeicons.css";
import { createRouter, createWebHistory } from "vue-router";
import "./assets/main.css";
import { routes } from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});
/* ROUTING */

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
