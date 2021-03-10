import { createApp } from "vue";
import vueApp from "./App.vue";

// import our styles first
import "./assets/styles/main.scss";

// import tailwind utilities *after*
import "windi.css";

import runesData from "@/data/runes";
import store from "@/store";

const init = () => {
  console.log("init()");

  store.reset();

  window.App = {
    runesData,
  };
};

init();

createApp(vueApp).mount("#app");
