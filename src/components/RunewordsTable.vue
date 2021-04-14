<template>
  <runeword-popup ref="popup" />

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
        <td class="rw-Table-td rw-Table-tdTitle p-0 text-left relative">
          <span
            class="rw-Table-tdTitleSpan cursor-pointer"
            @mouseenter="onEnterRuneword($event, item)"
            @mouseleave="onLeaveRuneword()"
            @click="onEnterRuneword($event, item)"
            >{{ item.title }}</span
          ><span v-if="item.ladder" class="rw-Md-ladder">L</span>
          <span
            class="absolute right-1 top-1/2 -mt-2 bottom-0 bg-[#444] w-4 h-4 hover:text-[#fff] cursor-pointer"
          >
            ...
          </span>
        </td>
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
        <td
          class="rw-Table-td rw-Table-tdType"
          v-html="formatType(item.ttype)"
        ></td>
        <td class="rw-Table-td">{{ item.level }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { defineComponent } from "vue";

import IconArrowUp from "@/icons/IconArrowUp.vue";
import IconArrowDown from "@/icons/IconArrowDown.vue";
import RunewordPopup from "@/components/RunewordPopup.vue";

import runewordsData from "@/data/runewords";
import store from "@/store";

/** @typedef {TVueInstanceOf<RunewordPopup>} TRunewordPopup */

export default defineComponent({
  name: "RunewordsTable",

  components: {
    HelpBox,
    IconArrowDown,
    IconArrowUp,
    IconChevronDown,
    RunewordPopup,
  },

  props: {
    items: {
      /** @type {PropType<Runeword[]>} */
      type: Array,
      required: true,
    },
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
    };
  },

  computed: {
    /** @return {number} */
    // availableCount() {
    //   let count = 0;
    //   this.runewordIsComplete.forEach((isComplete) => isComplete && count++);
    //   return count;
    //},

    /** @return {Map<string, boolean>} */
    runewordIsComplete() {
      // console.log("*** runewordIsComplete()");

      /** @type {Map<string, boolean>} */
      const map = new Map();

      this.items.forEach((runeword) => {
        map.set(
          runeword.title,
          runeword.runes.every((runeId) => this.haveRunes[runeId])
        );
      });

      return map;
    },

    /** @return {Runeword[]} */
    itemsBySort() {
      const list = this.items.slice();

      /** @type {{(a: Runeword, b: Runeword): number} | undefined} */
      let compareFn;

      if (this.sortKey === "title") {
        compareFn = ({ title: a }, { title: b }) =>
          a === b ? 0 : a > b ? 1 : -1;
      } else if (this.sortKey === "level") {
        compareFn = ({ level: a }, { level: b }) =>
          a === b ? 0 : a > b ? 1 : -1;
      } else if (this.sortKey === "ttype") {
        compareFn = ({ ttype: a }, { ttype: b }) =>
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

    /** @return {TRunewordPopup} */
    refPopup() {
      return /** @type {TRunewordPopup} */ (this.$refs.popup);
    },
  },

  methods: {
    /** @param {RuneId} runeId */
    cssActiveRune(runeId) {
      return this.haveRunes[runeId] ? "is-active" : "";
    },

    /** @param {Runeword} word */
    cssCompleteRuneword(word) {
      return this.runewordIsComplete.get(word.title) ? "is-complete" : "";
    },

    /** @param {string} text */
    formatType(text) {
      // could do additional formatting here
      return text;
    },

    /** @param {string} key */
    isSortKey(key) {
      return key === this.sortKey;
    },

    /**
     * @param {Event} ev
     * @param {Runeword} runeword
     */
    onEnterRuneword(ev, runeword) {
      // paranoia
      if (!ev.target) return;

      let { x, y } = /**@type{Element}*/ (ev.target).getBoundingClientRect();

      // don't overlap the mouseover area, avoids flickering & simplifies code
      x = x + 50;
      y =
        y +
        window.pageYOffset +
        /**@type{HTMLElement}*/ (ev.target).offsetHeight +
        4;

      this.refPopup.setContents(runeword).moveTo(x, y).setVisible(true);
    },

    onLeaveRuneword() {
      this.refPopup.setVisible(false);
    },

    /** @param {string} key */
    onSortBy(key) {
      this.sortAsc = this.sortKey === key ? !this.sortAsc : true;
      this.sortKey = key;
    },
  },
});
</script>
