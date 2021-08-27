// simple store pattern to
// - handle state across components
// - persist user data in local storage

import { reactive } from "vue";
import { runesIds } from "@/data/runes";

const USERDATA_STORAGE_KEY = "runewizard";

/** @typedef {{haveRunes: {[key in RuneId]?: boolean}}} TStore */
/** @typedef {{selectedRunes: RuneId[]}} TUserData */

const store = {
  state: reactive(
    /** @type {TStore} */ ({
      haveRunes: [],
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

  loadState() {
    console.log("store.loadState()");

    if (!this.storage) return;

    const storedData = this.storage.getItem(USERDATA_STORAGE_KEY);
    if (!storedData) return;

    const userData = /** @type {TUserData} */ (JSON.parse(storedData));

    this.setRunes(userData.selectedRunes);
  },

  saveState() {
    console.log("store.saveState()");

    let storedData = "";

    if (!this.storage) return;

    const userData = /** @type {TUserData} */ ({
      selectedRunes: this.getRunes(),
    });

    try {
      storedData = JSON.stringify(userData);
    } catch (e) {
      console.warn("store.save() userData doesn't stringify()");
    }

    this.storage.setItem(USERDATA_STORAGE_KEY, storedData);
  },
};

export default store;
