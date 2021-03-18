import { createApp } from "vue";
import vueApp from "./App.vue";

// import our styles first
import "./assets/styles/main.scss";

import runesData from "@/data/runes";
import store from "@/store";

const init = () => {
  console.log("init()");

  store.initialize();
  store.loadState();

  // testing
  // store.setRunes(["Tir", "Ral"]);

  window.App = {
    runesData,
  };
};

init();

createApp(vueApp).mount("#app");
