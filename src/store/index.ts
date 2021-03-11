// simple store pattern to
// - handle state across components
// - persist user data in local storage

import { reactive } from "vue";
import { RuneId } from "@/types";
import { runesIds } from "@/data/runes";

const USERDATA_STORAGE_KEY = "runewizard";

type TStore = {
  haveRunes: { [key in RuneId]?: boolean };
};

type TUserData = {
  selectedRunes: RuneId[];
};

const store = {
  state: reactive({
    haveRunes: [],
  }) as TStore,

  storage: null as Storage | null,

  initialize() {
    this.storage = window.localStorage;
    store.reset();
  },

  clearRunes() {
    this.setRunes(runesIds(), false);
  },

  // returns an array of selected rune ids
  getRunes() {
    const runesIds: RuneId[] = [];

    for (const runeId of Object.keys(this.state.haveRunes) as RuneId[]) {
      if (this.state.haveRunes[runeId]) {
        runesIds.push(runeId);
      }
    }

    return runesIds;
  },

  // sets selected runes from an array of rune ids
  setRunes(runes: RuneId[], state = true) {
    for (const runeId of runes) {
      this.state.haveRunes[runeId] = state;
    }
  },

  hasRune(runeId: RuneId): boolean {
    return this.state.haveRunes[runeId] || false;
  },

  reset() {
    // console.log("store.reset()");
    this.clearRunes();
  },

  loadState() {
    console.log("store.loadState()");

    if (!this.storage) return;

    const storedData = this.storage.getItem(USERDATA_STORAGE_KEY);
    if (!storedData) return;

    const userData: TUserData = JSON.parse(storedData);

    this.setRunes(userData.selectedRunes);
  },

  saveState() {
    console.log("store.saveState()");

    let storedData = "";

    if (!this.storage) return;

    const userData: TUserData = {
      selectedRunes: this.getRunes(),
    };

    try {
      storedData = JSON.stringify(userData);
    } catch (e) {
      console.log("store.save() userData doesn't stringify()");
    }

    this.storage.setItem(USERDATA_STORAGE_KEY, storedData);
  },
};

export default store;
