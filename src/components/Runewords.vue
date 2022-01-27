<template>
  <div>
    <div class="rw-Search flex items-center mb-4">
      <label class="text-gold whitespace-nowrap mr-4">{{ "Search" }}</label>
      <input v-model="searchText" type="text" class="rw-Search-input" @input="onSearchInput" />
    </div>

    <div v-if="hasPinnedRunewords" class="mb-8">
      <div class="flex items-center justify-between mb-2">
        <h2 class="rw-Title-h2 mb-0">Runewords (pinned)</h2>

        <div v-if="1" class="ml-8">
          <a class="rw-Runes-clear" href="#" @click.prevent="unpinAll">
            <icon-cancel class="ux-icon ux-icon--fw rw-Runes-clearIcon text-[#da0000] mr-1" />unpin all
          </a>
        </div>
      </div>

      <runewords-table :items="pinnedRunewords" />
    </div>

    <div>
      <div class="flex justify-between items-center mb-2">
        <h2 class="rw-Title-h2 mb-0">Runewords</h2>
      </div>

      <runewords-table :items="unpinnedRunewords" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import IconCancel from "@/icons/IconCancel.vue";
import RunewordsTable from "@/components/RunewordsTable.vue";

import runewordsData from "@/data/runewords";

export default defineComponent({
  name: "Runewords",

  components: {
    IconCancel,
    RunewordsTable,
  },

  data() {
    return {
      isHelpVisible: false,

      /** @type {RunewordItem[]} */
      runewordsList: [],

      searchText: "",
    };
  },

  computed: {
    /** @return {boolean} */
    hasPinnedRunewords() {
      return this.pinnedRunewords.length > 0;
    },

    /** @return {RunewordItem[]} */
    pinnedRunewords() {
      return this.runewordsList.filter((item) => item.isPinned);
    },

    /** @return {RunewordItem[]} */
    unpinnedRunewords() {
      return this.runewordsList.filter((item) => !item.isPinned);
    },
  },

  created() {
    this.runewordsList = /** @type{RunewordItem[]}*/ (runewordsData.slice());
    this.unpinAll();
    this.updateFilter(this.searchText);
  },

  methods: {
    onSearchInput() {
      this.updateFilter(this.searchText);
    },

    unpinAll() {
      this.runewordsList.forEach((item) => { item.isPinned = false; });
    },

    /** @param {string} text */
    updateFilter(text) {
      const searchTerm = text.toLowerCase();

      /** @param {RunewordItem} item */
      const matches = (item) => {
        const matchesTitle = item.title.toLowerCase().includes(searchTerm);
        const matchesType = item.ttypes.some((type) => {
          return type.toLowerCase().includes(searchTerm);
        });

        return searchTerm === "" || matchesTitle || matchesType;
      };

      this.runewordsList.forEach((item) => {
        item.filterMatch = matches(item);
      });
    },
  },
});
</script>
