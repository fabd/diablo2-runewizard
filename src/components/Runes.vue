<template>
  <div class="relative">
    <div class="flex justify-between items-center mb-2">
      <h2 class="rw-Title-h2 mb-0">Runes</h2>

      <div v-if="isAnyRuneSelected" class="-mt-2px">
        <a class="rw-Runes-clear" href="#" @click.prevent="onClearRunes">
          <icon-cancel class="ux-icon ux-icon--fw rw-Runes-clearIcon text-[#da0000] mr-1" />clear
        </a>
      </div>
    </div>

    <div class="rw-Runes md:flex md:justify-between md:w-[130px] select-none mb-4">
      <div v-for="(runesTier, i) in runesByTier" :key="i" 
        class="flex md:block md:w-1/3 justify-between">
        <!-- a single rune -->
        <div
          v-for="rune in runesTier"
          :key="rune.name"
          class="rw-Rune flex-1"
          :class="{
            'is-selected': haveRunes[rune.name],
          }"
          @click="onToggleRune(rune.name)"
        >
          <div class="text-center my-auto">{{ rune.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import runesData, { ERuneTier } from "@/data/runes";
import store from "@/store";

import IconCancel from "@/icons/IconCancel.vue";

export default defineComponent({
  name: "Runes",

  components: {
    IconCancel,
  },

  data() {
    return {
      haveRunes: store.state.haveRunes,
      runes: runesData,
    };
  },

  computed: {
    isAnyRuneSelected(): boolean {
      return store.getRunes().length > 0;
    },

    runesByTier(): TRuneDef[][] {
      const tiers = [
        this.runes.filter((rune) => rune.tier === ERuneTier.COMMON),
        this.runes.filter((rune) => rune.tier === ERuneTier.SEMIRARE),
        this.runes.filter((rune) => rune.tier === ERuneTier.RARE),
      ];

      // console.log(tiers);

      return tiers;
    },
  },

  methods: {
    onClearRunes() {
      store.clearRunes();
      store.saveState();
    },

    onToggleRune(runeId: TRuneId) {
      const state = store.hasRune(runeId);

      store.setRunes([runeId], !state);
      store.saveState();
    },
  },
});
</script>
