import { createApp } from "vue";
import vueApp from "./App.vue";

// import our styles first
import "./assets/styles/main.scss";

// import tailwind utilities *after*
import "windi.css";

console.log("main.ts");

import runesData from "@/data/runes";

const init = () => {
  window.App = {
    runesData,
  };
};

init();

createApp(vueApp).mount("#app");
