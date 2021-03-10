<template>
  <main class="rw-Main p-4 flex">
    <div class="w-200px">
      <h2 class="text-xl text-gray-100 font-bold mb-4">Runes</h2>
      <runes />
    </div>
    <div class="w">
      <h2>Runewords</h2>
      <runewords-table />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Runes from "./components/Runes.vue";
import RunewordsTable from "./components/RunewordsTable.vue";

export default defineComponent({
  name: "App",
  components: {
    Runes,
    RunewordsTable,
  },
  mounted() {
    // console.log("App() ", window.App.runesData);
  },
});
</script>

<style lang="scss"></style>
