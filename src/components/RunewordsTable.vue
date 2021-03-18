<template>
  <div class="flex justify-between items-center mb-4">
    <h2 class="rw-Title-h2 mb-0"
      >Runewords<span v-if="availableCount">
        ({{ availableCount }} available)</span
      ></h2
    >

    <a
      href="#"
      class="rw-Help-link"
      @click.prevent="isHelpVisible = !isHelpVisible"
      >{{ "Help"
      }}<icon-chevron-down
        class="ux-icon ux-icon--fw ml-1"
        :class="{
          'transform rotate-180': isHelpVisible,
        }"
    /></a>
  </div>

  <transition name="fadein">
    <div v-if="isHelpVisible">
      <help-box />
    </div>
  </transition>

  <table class="rw-Table w-full">
    <thead>
      <tr>
        <th
          v-for="col in tableHeads"
          :key="col.key"
          class="rw-Table-th cursor-pointer"
          :class="{
            'is-sortCol': isSortKey(col.key),
            'text-left': col.textLeft,
          }"
          @click="onSortBy(col.key)"
        >
          {{ col.label }}
          <span v-if="isSortKey(col.key) && sortAsc" class="rw-Table-thIcon"
            ><icon-arrow-down class="ux-icon ux-icon--fw"
          /></span>
          <span v-if="isSortKey(col.key) && !sortAsc" class="rw-Table-thIcon"
            ><icon-arrow-up class="ux-icon ux-icon--fw"
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
        <td class="rw-Table-td rw-Table-tdTitle text-left"
          >{{ item.title
          }}<span v-if="item.ladder" class="rw-Md-ladder">L</span></td
        >
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
        <td class="rw-Table-td" v-html="formatType(item.ttype)"></td>
        <td class="rw-Table-td">{{ item.level }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HelpBox from "@/components/HelpBox.vue";
import IconArrowUp from "@/icons/IconArrowUp.vue";
import IconArrowDown from "@/icons/IconArrowDown.vue";
import IconCancel from "@/icons/IconCancel.vue";
import IconChevronDown from "@/icons/IconChevronDown.vue";

import runewordsData from "@/data/runewords";
import { RuneId, Runeword } from "@/types";
import store from "@/store";

export default defineComponent({
  name: "RunewordsTable",

  components: {
    HelpBox,
    IconArrowDown,
    IconArrowUp,
    IconChevronDown,
  },

  data() {
    return {
      haveRunes: store.state.haveRunes,

      // this is our default sort
      sortKey: "level",
      sortAsc: true,

      tableHeads: [
        { key: "title", label: "Runeword", textLeft: true },
        { key: "rune0", label: "Rune" },
        { key: "rune1", label: "Rune" },
        { key: "rune2", label: "Rune" },
        { key: "rune3", label: "Rune" },
        { key: "rune4", label: "Rune" },
        { key: "rune5", label: "Rune" },
        { key: "ttype", label: "Type" },
        { key: "level", label: "Level" },
      ],

      isHelpVisible: false,
    };
  },

  computed: {
    availableCount(): number {
      let count = 0;
      this.runewordIsComplete.forEach((isComplete) => isComplete && count++);
      return count;
    },

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

      // move completed items to the top
      const list2 = list
        .filter((word) => this.runewordIsComplete.get(word.title))
        .concat(
          list.filter((word) => !this.runewordIsComplete.get(word.title))
        );

      return list2;
    },
  },

  methods: {
    cssActiveRune(runeId: RuneId) {
      return this.haveRunes[runeId] ? "is-active" : "";
    },

    cssCompleteRuneword(word: Runeword) {
      return this.runewordIsComplete.get(word.title) ? "is-complete" : "";
    },

    formatType(text: string) {
      return text;
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
