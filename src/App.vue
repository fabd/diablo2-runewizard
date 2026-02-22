<template>
  <app-header v-if="useLayoutHeader" />

  <main class="rw-Layout-row rw-Main mx-auto py-4 md:flex mb-24">
    <div class="">
      <runes />
    </div>
    <div class="overflow-auto flex-1 md:ml-16">
      <runewords />
    </div>
  </main>

  <app-footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import Runes from "@/components/Runes.vue";
import Runewords from "@/components/Runewords.vue";

export default defineComponent({
  name: "App",

  components: {
    AppHeader,
    AppFooter,
    Runes,
    Runewords,
  },

  computed: {
    useLayoutHeader(): boolean {
      return import.meta.env.VITE_LAYOUT_HEADER === "true";
    },
  },
});
</script>
