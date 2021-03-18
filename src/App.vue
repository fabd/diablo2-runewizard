<template>
  <main class="rw-Main p-4 pl-8 flex max-w-[1000px]">
    <div class="mr-8">
      <runes />
    </div>
    <div class="flex-1">
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
