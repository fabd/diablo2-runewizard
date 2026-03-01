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
            'hidden md:table-cell': col.key === 'runes',
          }"
          @click="onSortBy(col.key)"
        >
          {{ col.label }}
          <span v-if="isSortKey(col.key) && sortAsc" class="rw-Table-thIcon">
            <icon-arrow-down class="ux-icon ux-icon--fw" />
          </span>
          <span v-if="isSortKey(col.key) && !sortAsc" class="rw-Table-thIcon">
            <icon-arrow-up class="ux-icon ux-icon--fw" />
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item, i) in itemsBySort" :key="i">
        <template v-if="pinnedRunewords.size && i === 0">
          <tr class="rw-Table-tr">
            <td class="rw-Table-td" colspan="9">
              <div class="text-center mt-6 py-2 relative">
                <span class="text-md text-gold tracking-[.2em]"
                  >PINNED RUNEWORDS</span
                >
                <a
                  class="rw-Runes-clear absolute right-0 top-1"
                  href="#"
                  @click.prevent="unpinAll"
                >
                  <icon-cancel
                    class="ux-icon ux-icon--fw rw-Runes-clearIcon text-[#da0000] mr-1"
                  />unpin all
                </a>
              </div>
            </td>
          </tr>
        </template>

        <template v-if="pinnedRunewords.size && i === pinnedRunewords.size">
          <tr class="rw-Table-tr">
            <td class="rw-Table-td" colspan="9">
              <div
                class="text-center text-md text-gold tracking-[.2em] mt-6 py-2"
                >ALL RUNEWORDS</div
              >
            </td>
          </tr>
        </template>

        <tr
          class="rw-Table-tr"
          :class="cssCompleteRuneword(item)"
          :style="{
            display: item.filterMatch ? '' : 'none',
          }"
        >
          <td
            class="rw-Table-td rw-Table-tdTitle p-0 text-left relative min-w-[10em]"
          >
            <span
              class="rw-Table-tdTitleSpan ux-serif cursor-pointer"
              @mouseenter="onEnterRuneword($event, item)"
              @mouseleave="onLeaveRuneword($event)"
              @click="onEnterRuneword($event, item)"
              @touchstart="onEnterRuneword($event, item)"
              >{{ item.title }}</span
            >
            <span v-if="item.ladder" class="rw-Md-ladder" title="Ladder Only"
              >L</span
            >

            <span
              v-if="item.version"
              class="rw-Table-tdTitlePatch"
              :class="[
                { 'is-new': item.version === envGameVersion },
                `patch-${String(item.version).replace('.', '-')}`,
              ]"
              title="Patch version"
            >
              {{ item.version }}
            </span>

            <span v-if="item.note" class="rw-Md-note" :title="item.note"
              >Note!</span
            >

            <span
              class="rw-RunesTxt rw-RunesTxtMbl md:hidden pl-4"
              v-html="getRunesHtml(item)"
            ></span>

            <div
              class="rw-Table-pin hidden md:block"
              @click="onTogglePin(item.title)"
            >
              <icon-check-on
                v-if="pinnedRunewords.has(item.title)"
                class="rw-Table-pinIcon"
              />
              <icon-check-off v-else class="rw-Table-pinIcon" />
            </div>
          </td>
          <td class="rw-Table-td hidden md:table-cell text-left">
            <span class="rw-RunesTxt" v-html="getRunesHtml(item)"></span>
          </td>
          <td
            class="rw-Table-td rw-Table-tdType min-w-[10em]"
            v-html="getTypeCellHtml(item)"
          ></td>
          <td class="rw-Table-td">{{ item.level }}</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import store from "@/store";

import IconArrowUp from "@/icons/IconArrowUp.vue";
import IconArrowDown from "@/icons/IconArrowDown.vue";
import IconCancel from "@/icons/IconCancel.vue";
import IconCheckOn from "@/icons/IconCheckOn.vue";
import IconCheckOff from "@/icons/IconCheckOff.vue";
import RunewordPopup from "@/components/RunewordPopup.vue";

type TRunewordPopup = TVueInstanceOf<typeof RunewordPopup>;

export function runesHtml(word: TRuneword, haveRunes: TRuneDict) {
  const html = word.runes
    .map((runeId: TRuneId) => {
      return `<span class="is-rune ${haveRunes[runeId] ? "on" : "off"}">${runeId}</span>`;
    })
    .join("");
  return html;
}

export function itemTypesHtml(word: TRuneword) {
  let cellHtml =
    '<span class="rw-ItemTypes"><em>' +
    word.ttypes
      .map((type) => {
        const typeHtml = type.replace(" ", "&nbsp;");
        return typeHtml;
      })
      .join("</em> /&nbsp;<em>");

  if (word.tinfos) {
    cellHtml += `<div class="rw-ItemTypes-class">${word.tinfos}</div>`;
  }

  cellHtml += "</span>";

  return cellHtml;
}

export default defineComponent({
  name: "RunewordsTable",

  components: {
    IconArrowDown,
    IconArrowUp,
    IconCancel,
    IconCheckOn,
    IconCheckOff,
    RunewordPopup,
  },

  props: {
    items: { type: Array as PropType<TRunewordItem[]>, required: true },
  },

  data() {
    return {
      haveRunes: store.state.haveRunes,
      pinnedRunewords: store.state.pinned,

      // this is our default sort
      sortKey: "level",
      sortAsc: true,

      tableHeads: [
        { key: "title", label: "Runeword", textLeft: true },
        { key: "runes", label: "Runes" },
        { key: "ttypes", label: "Item Types" },
        { key: "level", label: "Level" },
      ],

      envGameVersion: import.meta.env.VITE_GAME_VERSION as string,
    };
  },

  computed: {
    runewordIsComplete() {
      const map = new Map<string, boolean>();

      this.items.forEach((runeword) => {
        map.set(
          runeword.title,
          runeword.runes.every((runeId) => this.haveRunes[runeId])
        );
      });

      return map;
    },

    itemsBySort(): TRunewordItem[] {
      const list = this.items.slice();

      // let compareFn: ((a: TRuneword, b: TRuneword) => number) | undefined;
      let compareFn: ((a: TRuneword, b: TRuneword) => number) | undefined;

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

      if (compareFn) list.sort(compareFn);

      if (!this.sortAsc) list.reverse();

      // move completed items to the top
      const list2 = [
        ...list.filter((word) => this.runewordIsComplete.get(word.title)),
        ...list.filter((word) => !this.runewordIsComplete.get(word.title)),
      ];

      //
      const list3 = [
        ...list2.filter((word) => this.pinnedRunewords.has(word.title)),
        ...list2.filter((word) => !this.pinnedRunewords.has(word.title)),
      ];

      return list3;
    },

    refPopup(): TRunewordPopup {
      return this.$refs.popup as TRunewordPopup;
    },
  },

  methods: {
    cssCompleteRuneword(word: TRuneword) {
      return this.runewordIsComplete.get(word.title) ? "is-complete" : "";
    },

    getRunesHtml(word: TRuneword) {
      return runesHtml(word, this.haveRunes);
    },

    getTypeCellHtml(word: TRuneword) {
      return itemTypesHtml(word);
    },

    isSortKey(key: string) {
      return key === this.sortKey;
    },

    onEnterRuneword(ev: Event, runeword: TRuneword) {
      // for touch event, prevents the subsequent click event
      ev.preventDefault();

      this.refPopup.showRuneword(
        runeword,
        this.haveRunes,
        ev.target as HTMLElement
      );
    },

    onLeaveRuneword(ev: MouseEvent) {
      console.log("onleave");

      const overlay = this.refPopup.getRoot();

      // prevents triggering enter/leave when mouse is on top of runeword label
      //  but inside the overlay
      if (
        overlay.contains(ev.relatedTarget as Node) ||
        ev.relatedTarget === overlay
      ) {
        // Mouse went to the overlay, ignore it
        return;
      }

      this.refPopup.setVisible(false);
    },

    onSortBy(key: string) {
      this.sortAsc = this.sortKey === key ? !this.sortAsc : true;
      this.sortKey = key;
    },

    onTogglePin(id: TRunewordId) {
      const state = store.isPinned(id);
      store.setPinned([id], !state);
      store.saveState();
    },

    unpinAll() {
      const ids = store.getPinned();
      store.setPinned(ids, false);
      store.saveState();
    },
  },
});
</script>
