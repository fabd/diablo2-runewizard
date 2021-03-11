<template>
  <div class="rw-Runes flex justify-between w-150px">
    <div v-for="(runesTier, i) in runesByTier" :key="i" class="w-50px">
      <div
        v-for="rune in runesTier"
        :key="rune.name"
        class="rw-Rune"
        :class="{
          'is-selected': haveRunes[rune.name],
        }"
        @click="onToggleRune(rune.name)"
      >
        <span class="mx-auto my-auto">{{ rune.name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RuneDef, RuneId, RuneTier } from "@/types";

import store from "@/store";

export default defineComponent({
  name: "Runes",

  data() {
    return {
      haveRunes: store.state.haveRunes,
      runesData: [] as RuneDef[],
    };
  },

  computed: {
    runes(): RuneDef[] {
      return this.runesData;
    },

    runesByTier(): RuneDef[][] {
      const tiers = [
        this.runes.filter((rune) => rune.tier === RuneTier.COMMON),
        this.runes.filter((rune) => rune.tier === RuneTier.SEMIRARE),
        this.runes.filter((rune) => rune.tier === RuneTier.RARE),
      ];

      // console.log(tiers);

      return tiers;
    },
  },

  mounted() {
    this.runesData = window.App.runesData;
  },

  methods: {
    onToggleRune(runeId: RuneId) {
      const state = store.hasRune(runeId);

      store.setRunes([runeId], !state);
      store.saveState();
    },
  },
});
</script>
