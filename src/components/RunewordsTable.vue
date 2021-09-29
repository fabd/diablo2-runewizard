<template>
  <div class="flex justify-between items-center mb-2">
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
        <td class="rw-Table-td rw-Table-tdTitle p-0 text-left"
          ><span
            class="rw-Table-tdTitleSpan cursor-pointer"
            @mouseenter="onEnterRuneword($event, item)"
            @mouseleave="onLeaveRuneword()"
            @click="onEnterRuneword($event, item)"
            >{{ item.title }}</span
          ><span v-if="item.ladder" class="rw-Md-ladder">L</span></td
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
        <td
          class="rw-Table-td rw-Table-tdType"
          v-html="getTypeCellHtml(item)"
        ></td>
        <td class="rw-Table-td">{{ item.level }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { defineComponent } from "vue";

import HelpBox from "@/components/HelpBox.vue";
import IconArrowUp from "@/icons/IconArrowUp.vue";
import IconArrowDown from "@/icons/IconArrowDown.vue";
import IconChevronDown from "@/icons/IconChevronDown.vue";
import RunewordPopup from "@/components/RunewordPopup.vue";

import runewordsData from "@/data/runewords";
import typeData from "@/data/types";
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
        { key: "ttypes", label: "Type" },
        { key: "level", label: "Level" },
      ],

      isHelpVisible: false,
    };
  },

  computed: {
    /** @return {number} */
    availableCount() {
      let count = 0;
      this.runewordIsComplete.forEach((isComplete) => isComplete && count++);
      return count;
    },

    /** @return {Map<string, boolean>} */
    runewordIsComplete() {
      // console.log("*** runewordIsComplete()");

      /** @type {Map<string, boolean>} */
      const map = new Map();

      runewordsData.forEach((runeword) => {
        map.set(
          runeword.title,
          runeword.runes.every((runeId) => this.haveRunes[runeId])
        );
      });

      return map;
    },

    /** @return {Runeword[]} */
    items() {
      return runewordsData;
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
      } else if (this.sortKey === "ttypes") {
        compareFn = ({ ttypes: a }, { ttypes: b }) =>
          a[0] === b[0] ? 0 : a[0] > b[0] ? 1 : -1;
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

    /** @param {Runeword} word */
    getTypeCellHtml(word) {
      // could do additional formatting here
      let cellHtml = word.ttypes.map(type => {
				let typeHtml = type.replace(" ", "&nbsp;")
				if (typeData[type].url) 
					return `<a href="${typeData[type].url}">${typeHtml}</a>`;
				return typeHtml;
			}).join('&nbsp;/&nbsp;');
			if (word.tinfos)
				cellHtml += `<br><em>${word.tinfos}</em>`;
			return cellHtml;
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
