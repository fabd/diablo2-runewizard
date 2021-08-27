<template>
  <app-header v-if="useLayoutHeader" />

  <main class="rw-Layout-rowContainer rw-Main py-4 flex mb-24">
    <div class="mr-16">
      <runes />
    </div>
    <div class="flex-1">
      <runewords-table />
    </div>
  </main>

  <app-footer />
</template>

<script>
import { defineComponent } from "vue";

import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import Runes from "@/components/Runes.vue";
import RunewordsTable from "@/components/RunewordsTable.vue";

export default defineComponent({
  name: "App",

  components: {
    AppHeader,
    AppFooter,
    Runes,
    RunewordsTable,
  },

  computed: {
    /** @return {boolean} */
    useLayoutHeader() {
      return import.meta.env.VITE_LAYOUT_HEADER === "true";
    },
  },
});
</script>
