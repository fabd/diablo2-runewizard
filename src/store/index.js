// simple store pattern to
// - handle state across components
// - persist user data in local storage

import { reactive } from "vue";
import { runesIds } from "@/data/runes";

const USERDATA_STORAGE_KEY = "runewizard";

const store = {
  state: reactive(
    /** @type {TStore} */ ({
      haveRunes: [],
      pinned: new Set(),
    })
  ),

  /** @type {Storage?} */
  storage: null,

  initialize() {
    this.storage = window.localStorage;
    store.reset();
  },

  clearRunes() {
    this.setRunes(runesIds(), false);
  },

  /**
   * returns an array of selected rune ids
   * @returns {RuneId[]}
   */
  getRunes() {
    /** @type {RuneId[]} */
    const runesIds = [];

    for (const runeId of /** @type {RuneId[]}*/ (Object.keys(
      this.state.haveRunes
    ))) {
      if (this.state.haveRunes[runeId]) {
        runesIds.push(runeId);
      }
    }

    return runesIds;
  },

  /**
   * sets selected runes from an array of rune ids
   * @param {RuneId[]} runes
   * @param {boolean} state
   */
  setRunes(runes, state = true) {
    for (const runeId of runes) {
      this.state.haveRunes[runeId] = state;
    }
  },

  /**
   * @param {RuneId} runeId
   * @returns {boolean}
   */
  hasRune(runeId) {
    return this.state.haveRunes[runeId] || false;
  },

  reset() {
    this.clearRunes();
  },

  /**
   * @return {RunewordId[]}
   */
  getPinned() {
    return Array.from(this.state.pinned.values());
  },

  /**
   * @param {RunewordId} id
   */
  isPinned(id) {
    return this.state.pinned.has(id);
  },

  /**
   * @param {RunewordId[]} ids
   */
  setPinned(ids, state = true) {
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

    const userData = /** @type {TUserData} */ (JSON.parse(storedData));

    this.setRunes(userData.selectedRunes);
    
    // note! watchout for existing users not having updated keys
    this.setPinned(userData.pinnedRunewords || []);
  },

  saveState() {
    let storedData = "";

    if (!this.storage) return;

    const userData = /** @type {TUserData} */ ({
      selectedRunes: this.getRunes(),
      pinnedRunewords: this.getPinned(),
    });

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
