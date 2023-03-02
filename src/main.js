import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/js/bootstrap";
import AppCard from "@/components/AppCard.vue";

const app = createApp(App);

app.component("AppCard", AppCard);

app.mount("#app");
