<template>
  <div class="relative">
    <div class="flex justify-between items-center px-4 lg:px-0 mb-2">
      <h2 class="rw-Title-h2 mb-0">Runes</h2>

      <div v-if="isAnyRuneSelected" class="-mt-2px">
        <a class="rw-Runes-clear" href="#" @click.prevent="onClearRunes">
          <icon-cancel
            class="ux-icon ux-icon--fw rw-Runes-clearIcon text-[#da0000] mr-1"
          />clear
        </a>
      </div>
    </div>

    <div class="rw-Stash select-none mb-4">
      <div class="rw-StashGrid">
        <template v-for="(cell, i) in stashLayout" :key="i">
          <!-- rune cell -->
          <div
            v-if="cell !== null"
            class="rw-StashCell"
            :class="{
              'is-selected': haveRunes[cell],
            }"
            @click="onToggleRune(cell)"
          >
            <div class="rw-RuneImg" :class="`rune-` + cell"></div>
            <div class="rw-StashCell-name">{{ cell }}</div>
          </div>

          <!-- empty cell -->
          <div v-else class="rw-StashCell rw-StashCell--empty"></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import store from "@/store";

import IconCancel from "@/icons/IconCancel.vue";

// D2R stash layout: 9 columns x 5 rows with Mendeleev-style gaps
// null = empty cell
const STASH_LAYOUT: (TRuneId | null)[] = [
  // Row 1 (9)
  "El",   "Eld",  "Tir",  "Nef",  "Eth",  "Ith",  "Tal",  "Ral",  "Ort",
  // Row 2 (9)
  "Thul", "Amn",  "Sol",  "Shael", "Dol", "Hel",  "Io",   "Lum",  "Ko",
  // Row 3 (9)
  "Fal",  "Lem",  "Pul",  "Um",   "Mal",  "Ist",  "Gul",  "Vex",  "Ohm",
  // Row 4 (2 + 5 empty + 2)
  "Lo",   "Sur",  null,   null,   null,   null,   null,   "Ber",  "Jah",
  // Row 5 (1 + 7 empty + 1)
  "Cham", null,   null,   null,   null,   null,   null,   null,   "Zod",
];

export default defineComponent({
  name: "RunesGrid",

  components: {
    IconCancel,
  },

  data() {
    return {
      haveRunes: store.state.haveRunes,
      stashLayout: STASH_LAYOUT,
    };
  },

  computed: {
    isAnyRuneSelected(): boolean {
      return store.getRunes().length > 0;
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
