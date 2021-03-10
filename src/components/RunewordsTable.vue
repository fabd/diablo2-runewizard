<template>
  <table class="rw-Table">
    <thead>
      <tr>
        <th
          v-for="col in tableHeads"
          :key="col.key"
          class="rw-Table-th cursor-pointer"
          @click="onSortBy(col.key)"
        >
          {{ col.label }}
          <span v-if="isSortKey(col.key) && sortAsc" class="rw-Table-thIcon"
            ><arrow-down class="ux-svgIcon"
          /></span>
          <span v-if="isSortKey(col.key) && !sortAsc" class="rw-Table-thIcon"
            ><arrow-up class="ux-svgIcon"
          /></span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, i) in itemsBySort"
        :key="i"
        class="rw-Table-tr"
        :class="cssCompleteRuneword(item)"
      >
        <td class="rw-Table-td rw-Table-tdTitle text-left">{{ item.title }}</td>
        <td class="rw-Table-td is-rune" :class="cssActiveRune(item.runes[0])">{{
          item.runes[0]
        }}</td>
        <td class="rw-Table-td is-rune" :class="cssActiveRune(item.runes[1])">{{
          item.runes[1]
        }}</td>
        <td class="rw-Table-td is-rune" :class="cssActiveRune(item.runes[2])">{{
          item.runes[2]
        }}</td>
        <td class="rw-Table-td is-rune" :class="cssActiveRune(item.runes[3])">{{
          item.runes[3]
        }}</td>
        <td class="rw-Table-td is-rune" :class="cssActiveRune(item.runes[4])">{{
          item.runes[4]
        }}</td>
        <td class="rw-Table-td is-rune" :class="cssActiveRune(item.runes[5])">{{
          item.runes[5]
        }}</td>
        <td class="rw-Table-td">{{ item.ttype }}</td>
        <td class="rw-Table-td">{{ item.level }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ArrowUp from "@/icons/ArrowUp.vue";
import ArrowDown from "@/icons/ArrowDown.vue";

import runewordsData from "@/data/runewords";
import { RuneId, Runeword } from "@/types";
import store from "@/store";

export default defineComponent({
  name: "RunewordsTable",

  components: {
    ArrowDown,
    ArrowUp,
  },

  data() {
    return {
      haveRunes: store.state.haveRunes,

      // this is our default sort
      sortKey: "level",
      sortAsc: true,

      tableHeads: [
        { key: "title", label: "Runeword" },
        { key: "rune0", label: "Rune" },
        { key: "rune1", label: "Rune" },
        { key: "rune2", label: "Rune" },
        { key: "rune3", label: "Rune" },
        { key: "rune4", label: "Rune" },
        { key: "rune5", label: "Rune" },
        { key: "ttype", label: "Type" },
        { key: "level", label: "Level" },
      ],
    };
  },

  computed: {
    runewordIsComplete(): Map<string, boolean> {
      console.log("*** runewordIsComplete()");

      const map: Map<string, boolean> = new Map();

      runewordsData.forEach((runeword) => {
        map.set(
          runeword.title,
          runeword.runes.every((runeId) => this.haveRunes[runeId])
        );
      });

      return map;
    },

    items(): Runeword[] {
      return runewordsData;
    },

    itemsBySort(): Runeword[] {
      const list = this.items.slice();
      let compareFn: { (a: Runeword, b: Runeword): number } | undefined;

      if (this.sortKey === "title") {
        compareFn = ({ title: a }: Runeword, { title: b }: Runeword) =>
          a === b ? 0 : a > b ? 1 : -1;
      } else if (this.sortKey === "level") {
        compareFn = ({ level: a }: Runeword, { level: b }: Runeword) =>
          a === b ? 0 : a > b ? 1 : -1;
      } else if (this.sortKey === "ttype") {
        compareFn = ({ ttype: a }: Runeword, { ttype: b }: Runeword) =>
          a === b ? 0 : a > b ? 1 : -1;
      } else if (/rune(\d)/.test(this.sortKey)) {
        const runeNr = parseInt(RegExp.$1);

        compareFn = ({ runes: runesA }, { runes: runesB }) => {
          const a = runesA[runeNr];
          const b = runesB[runeNr];
          return a === b ? 0 : a > b ? 1 : -1;
        };
      }

      compareFn && list.sort(compareFn);

      !this.sortAsc && list.reverse();

      return list;
    },
  },

  methods: {
    cssActiveRune(runeId: RuneId) {
      return this.haveRunes[runeId] ? "is-active" : "";
    },

    cssCompleteRuneword(word: Runeword) {
      return this.runewordIsComplete.get(word.title) ? "is-complete" : "";
    },

    isSortKey(key: string) {
      return key === this.sortKey;
    },

    onSortBy(key: string) {
      this.sortAsc = this.sortKey === key ? !this.sortAsc : true;
      this.sortKey = key;

      console.log(this.sortAsc);
    },
  },
});
</script>
