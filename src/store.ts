/**
 * Simple store pattern.
 *
 *   - handle state across components
 *   - persist the state (eg. selected runes) in local storage
 */

import { reactive } from "vue";
import { runesIds } from "@/data/runes";

type TStoreState = {
  haveRunes: TRuneDict;
  pinned: Set<TRunewordId>;
  updateRead: string;
};

// user data as stored in browser's localStorage
type TUserData = {
  selectedRunes: TRuneId[];
  pinnedRunewords: TRunewordId[];
  updateRead: string;
};

const USERDATA_STORAGE_KEY = "runewizard";
const CURRENT_UPDATE_ID = "2026.03.01";

const store = {
  state: reactive({
    haveRunes: [],
    pinned: new Set(),
    updateRead: "",
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

  getPinned(): TRunewordId[] {
    return Array.from(this.state.pinned.values());
  },

  isPinned(id: TRunewordId) {
    return this.state.pinned.has(id);
  },

  setPinned(ids: TRunewordId[], state = true) {
    const fn = state ? "add" : "delete";
    ids.forEach((id) => {
      this.state.pinned[fn](id);
    });
  },

  isUpdateNew(): boolean {
    return this.state.updateRead !== CURRENT_UPDATE_ID;
  },

  setUpdateRead() {
    this.state.updateRead = CURRENT_UPDATE_ID;
  },

  loadState() {
    console.log("store.loadState()");

    if (!this.storage) return;

    const storedData = this.storage.getItem(USERDATA_STORAGE_KEY);
    if (!storedData) return;

    let userData: any;

    try {
      userData = JSON.parse(storedData);
    } catch {
      console.warn("loadState() JSON.parse error");
      return;
    }

    this.setRunes(userData.selectedRunes);

    // note! watchout for existing users not having updated keys
    this.setPinned(userData.pinnedRunewords || []);

    this.state.updateRead = userData.updateRead || "";
  },

  saveState() {
    let storedData = "";

    if (!this.storage) return;

    const userData: TUserData = {
      selectedRunes: this.getRunes(),
      pinnedRunewords: this.getPinned(),
      updateRead: this.state.updateRead,
    };

    // console.log("store.saveState()", userData);

    try {
      storedData = JSON.stringify(userData);
    } catch {
      console.warn("store.save() userData doesn't stringify()");
    }

    this.storage.setItem(USERDATA_STORAGE_KEY, storedData);
  },
};

export default store;
