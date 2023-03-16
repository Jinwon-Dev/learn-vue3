import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/js/bootstrap.js";

const app = createApp(App);

// app.component('AppCard', AppCard);

app.provide("app-message", "app message 입니다");
app.config.globalProperties.msg = "hello";
app.provide("msg", "hello msg");
app.mount("#app");
