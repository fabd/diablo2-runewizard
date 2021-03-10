// simple store pattern to
// - handle state across components
// - persist user data in local storage

import { reactive } from "vue";
import { RuneId } from "@/types";
import { runesIds } from "@/data/runes";

type userData = {
  haveRunes: { [key in RuneId]?: boolean };
};

const store = {
  state: reactive({
    haveRunes: [],
  }) as userData,

  setRunes(runes: RuneId[], state = true) {
    for (const runeId of runes) {
      this.state.haveRunes[runeId] = state;
    }
  },

  hasRune(runeId: RuneId): boolean {
    return this.state.haveRunes[runeId] || false;
  },

  reset() {
    console.log("store.reset()");
    this.setRunes(runesIds(), false);
  },

  load() {
    console.log("store.load()");
  },

  save() {
    console.log("store.save()");
  },
};

export default store;
