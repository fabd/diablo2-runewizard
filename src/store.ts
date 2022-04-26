/**
 * Simple store pattern.
 * 
 *   - handle state across components
 *   - persist the state (eg. selected runes) in local storage
 */

import { reactive } from "vue";
import { runesIds } from "@/data/runes";

type TStoreState = {
  haveRunes: { [key in TRuneId]?: boolean };
  pinned: Set<RunewordId>;
};

// user data as stored in browser's localStorage
type TUserData = {
  selectedRunes: TRuneId[];
  pinnedRunewords: RunewordId[];
};

const USERDATA_STORAGE_KEY = "runewizard";

const store = {
  state: reactive({
    haveRunes: [],
    pinned: new Set(),
  }) as TStoreState,

  storage: null as Storage | null,

  initialize() {
    this.storage = window.localStorage;
    store.reset();
  },

  clearRunes() {
    this.setRunes(runesIds(), false);
  },

  /**
   * returns an array of selected rune ids
   */
  getRunes() {
    const runesIds: TRuneId[] = [];

    for (const runeId of Object.keys(this.state.haveRunes) as TRuneId[]) {
      if (this.state.haveRunes[runeId]) {
        runesIds.push(runeId);
      }
    }

    return runesIds;
  },

  /**
   * sets selected runes from an array of rune ids
   */
  setRunes(runes: TRuneId[], state = true) {
    for (const runeId of runes) {
      this.state.haveRunes[runeId] = state;
    }
  },

  hasRune(runeId: TRuneId) {
    return this.state.haveRunes[runeId] || false;
  },

  reset() {
    this.clearRunes();
  },

  getPinned(): RunewordId[] {
    return Array.from(this.state.pinned.values());
  },

  isPinned(id: RunewordId) {
    return this.state.pinned.has(id);
  },

  setPinned(ids: RunewordId[], state = true) {
    const fn = state ? "add" : "delete";
    ids.forEach((id) => {
      this.state.pinned[fn](id);
    });
  },

  loadState() {
    console.log("store.loadState()");

    if (!this.storage) return;

    const storedData = this.storage.getItem(USERDATA_STORAGE_KEY);
    if (!storedData) return;

    const userData: TUserData = JSON.parse(storedData);

    this.setRunes(userData.selectedRunes);

    // note! watchout for existing users not having updated keys
    this.setPinned(userData.pinnedRunewords || []);
  },

  saveState() {
    let storedData = "";

    if (!this.storage) return;

    const userData = /** @type {TUserData} */ {
      selectedRunes: this.getRunes(),
      pinnedRunewords: this.getPinned(),
    };

    // console.log("store.saveState()", userData);

    try {
      storedData = JSON.stringify(userData);
    } catch (e) {
      console.warn("store.save() userData doesn't stringify()");
    }

    this.storage.setItem(USERDATA_STORAGE_KEY, storedData);
  },
};

export default store;
