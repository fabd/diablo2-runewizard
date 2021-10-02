<template>
    <div class="flex justify-between items-center mb-2">
      <h2 class="rw-Title-h2 mb-0">Runes</h2>

      <div v-if="isAnyRuneSelected" class="-mt-2px">
        <a class="rw-Runes-clear" href="#" @click.prevent="onClearRunes"
          ><icon-cancel
            class="ux-icon ux-icon--fw rw-Runes-clearIcon text-[#da0000] mr-1"
          />clear</a
        >
      </div>
    </div>

    <div class="rw-Runes flex justify-between w-[130px] select-none">
      <div v-for="(runesTier, i) in runesByTier" :key="i" class="w-1/3">
        <!-- a single rune -->
        <div
          v-for="rune in runesTier"
          :key="rune.name"
          class="rw-Rune mx-auto"
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

<script>
import { defineComponent } from "vue";
import IconCancel from "@/icons/IconCancel.vue";

import { EnumRuneTier } from "@/data/runes";
import runesData from "@/data/runes";
import store from "@/store";

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
    /** @returns {boolean}  */
    isAnyRuneSelected() {
      return store.getRunes().length > 0;
    },

    /** @return {RuneDef[][]} */
    runesByTier() {
      const tiers = [
        this.runes.filter((rune) => rune.tier === EnumRuneTier.COMMON),
        this.runes.filter((rune) => rune.tier === EnumRuneTier.SEMIRARE),
        this.runes.filter((rune) => rune.tier === EnumRuneTier.RARE),
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

    /** @param {RuneId} runeId */
    onToggleRune(runeId) {
      const state = store.hasRune(runeId);

      store.setRunes([runeId], !state);
      store.saveState();
    },
  },
});
</script>
