<template>
  <table class="rw-Table">
    <thead>
      <tr>
        <th class="rw-Table-th" @click="onSortBy('title')">Runeword</th>
        <th class="rw-Table-th" @click="onSortBy('rune0')">Rune</th>
        <th class="rw-Table-th" @click="onSortBy('rune1')">Rune</th>
        <th class="rw-Table-th" @click="onSortBy('rune2')">Rune</th>
        <th class="rw-Table-th" @click="onSortBy('rune3')">Rune</th>
        <th class="rw-Table-th" @click="onSortBy('rune4')">Rune</th>
        <th class="rw-Table-th" @click="onSortBy('rune5')">Rune</th>
        <th class="rw-Table-th" @click="onSortBy('ttype')">Type</th>
        <th class="rw-Table-th" @click="onSortBy('level')">Lvl</th>
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
      sortAsc: false,
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

      this.sortAsc && list.reverse();

      return list;
    },
  },

  methods: {
    // sortedClass(key) {
    //   return this.sortKey === key
    //     ? `sorted ${this.sortAsc ? "asc" : "desc"}`
    //     : "";
    // },

    onSortBy(key: string) {
      this.sortAsc = this.sortKey === key ? !this.sortAsc : true;
      this.sortKey = key;
    },
  },
});
</script>
