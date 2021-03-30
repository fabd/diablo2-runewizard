<template>
  <app-header v-if="useLayoutHeader" />

  <main class="rw-Layout-rowContainer rw-Main py-4 flex mb-[200px]">
    <div class="mr-16">
      <runes />
    </div>
    <div class="flex-1">
      <runewords-table />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AppHeader from "./components/AppHeader.vue";
import Runes from "./components/Runes.vue";
import RunewordsTable from "./components/RunewordsTable.vue";

export default defineComponent({
  name: "App",

  components: {
    AppHeader,
    Runes,
    RunewordsTable,
  },

  computed: {
    useLayoutHeader(): boolean {
      return import.meta.env.VITE_LAYOUT_HEADER === "true";
    },
  },
});
</script>
