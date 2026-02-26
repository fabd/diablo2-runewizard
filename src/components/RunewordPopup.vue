<template>
  <div
    v-if="isVisible"
    ref="root"
    class="rw-RunewordPopup absolute"
    :style="{
      visibility: isVisible ? 'visible' : 'hidden',
      left: `${position.x}px`,
      top: `${position.y}px`,
    }"
    @click="setVisible(false)"
  >
    <h3 class="rw-RunewordPopup-title ux-serif">{{ runeword.title }}</h3>
    <div class="rw-RunesTxt rw-RunesTxt--popup" v-html="getRunesHtml(runeword)"></div>
    <div class="rw-RunewordPopup-type" v-html="runeword.ttypes"></div>
    <div class="rw-RunewordPopup-body" v-html="formatBody"></div>
  </div>
</template>

<script lang="ts">
/**
 * NOTES
 *
 *   - we use css `visibility` instead of v-show/v-if so that the popup's
 *     offsetHeight can be obtained as soon as it is rendered by Vue
 *     and we can adjust its position before it is visible.
 *
 */
import { defineComponent } from "vue";

import runewordsMetaData from "@/data/runewords-descriptions";

import { runesHtml } from "./RunewordsTable.vue";

export default defineComponent({
  name: "RunewordPopup",

  data() {
    return {
      isVisible: false,

      position: { x: 0, y: 0 } as { x: number; y: number },

      runeword: {
        title: "",
        runes: [],
        ttypes: [],
        level: 0,
      } as TRuneword,

      haveRunes: [] as TRuneDict,
    };
  },

  computed: {
    formatBody(): string {
      const runewordId = this.runeword.title;
      let text = (runewordId && runewordsMetaData[runewordId]) || "---";

      // remove newlines at beginning and end
      text = text.trim();

      // format the mods (numbers) in the item stats ( regexr.com/6ki7f )
      text = text.replace(
        /\+?[0-9]+(-[0-9]+)?%?/g,
        '<span class="is-mod">$&</span>'
      );

      // replace headings (might not need anything more complex)
      text = text.replace(/####\s(.*)\n+/g, '<h4 class="is-title">$1</h4>');

      // LAST! replace newlines by html equivalents
      text = text.replace(/\n/g, "<br/>");

      return text;
    },
  },

  methods: {
    getRunesHtml(word: TRuneword) {
      return runesHtml(word, this.haveRunes);
    },

    /**
     *
     * @param {HTMLElement} target   element to position popup relative to
     */
    moveTo(target: HTMLElement) {
      // minimal gap between popup and viewport edge (px)
      const GAP = 10;

      let { x: popX, y: popY } = target.getBoundingClientRect();

      // place the popup a little below and to the side of the link
      popX = popX + 50;
      popY = popY + window.pageYOffset + target.offsetHeight + 4;

      const elRoot = this.$refs.root as HTMLElement;

      const popHeight = elRoot.offsetHeight;
      const popY2 = popY + popHeight;
      const viewHeight = document.documentElement.clientHeight;
      let viewY2 = window.scrollY + viewHeight;

      // leave a little gap at bottom of viewport (just looks nicer)
      viewY2 -= GAP;

      if (popY2 > viewY2) {
        // move the popup up to make it fully visible
        popY = viewY2 - popHeight;
        // if it's too tall for viewport + zoomsettings, then let it clip at bottom
        popY = Math.max(window.scrollY + GAP, popY);
      }

      this.position = { x: popX, y: popY };
    },

    showRuneword(
      runeword: TRuneword,
      haveRunes: TRuneDict,
      target: HTMLElement
    ) {
      this.runeword = runeword;
      this.haveRunes = haveRunes;

      this.setVisible(true);

      this.$nextTick(() => {
        this.moveTo(target);
      });
    },

    setVisible(value: boolean) {
      this.isVisible = value;
    },
  },
});
</script>
