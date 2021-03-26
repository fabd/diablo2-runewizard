import { createApp } from "vue";
import vueApp from "./App.vue";

import "./assets/styles/main.scss";

import store from "@/store";

const init = () => {
  console.log("init()");

  store.initialize();
  store.loadState();
};

init();

createApp(vueApp).mount("#app");
