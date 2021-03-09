<template>
  <table class="rw-Table">
    <thead>
      <tr>
        <th
          v-for="col in tableHeads"
          :key="col.key"
          class="rw-Table-th"
          @click="onSortBy(col.key)"
        >
          {{ col.label }}
          <span v-if="isSortKey(col.key) && sortAsc">v</span>
          <span v-if="isSortKey(col.key) && !sortAsc">^</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in itemsBySort" :key="i">
        <td class="rw-Table-td text-left">{{ item.title }}</td>
        <td class="rw-Table-td">{{ item.runes[0] }}</td>
        <td class="rw-Table-td">{{ item.runes[1] }}</td>
        <td class="rw-Table-td">{{ item.runes[2] }}</td>
        <td class="rw-Table-td">{{ item.runes[3] }}</td>
        <td class="rw-Table-td">{{ item.runes[4] }}</td>
        <td class="rw-Table-td">{{ item.runes[5] }}</td>
        <td class="rw-Table-td">{{ item.ttype }}</td>
        <td class="rw-Table-td">{{ item.level }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import runewordsData from "@/data/runewords";
import { Rune, Runeword } from "@/types";

export default defineComponent({
  name: "RunewordsTable",

  data() {
    return {
      sortKey: "title",
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
