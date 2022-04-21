<template>
  <div
    ref="root"
    class="rw-RunewordPopup absolute"
    :style="{
      visibility: isVisible ? 'visible' : 'hidden',
      left: unitPx(position.x),
      top: unitPx(position.y),
    }"
    @click="setVisible(false)"
  >
    <h3 class="rw-RunewordPopup-title">{{ rune }}</h3>
    <div class="rw-RunewordPopup-body" v-html="formatBody"></div>
  </div>
</template>

<script>
/** 
 * NOTES
 * 
 *   - we use css `visibility` instead of v-show/v-if so that the popup's
 *     offsetHeight can be obtained as soon as it is rendered by Vue
 *     and we can adjust its position before it is visible.
 * 
 */
import { defineComponent } from "vue";
import runesMetaData from "@/data/runes-descriptions";

export default defineComponent({
  name: "RunePopup",

  data() {
    return {
      isVisible: false,

      /** @type { { x: number; y: number }} */
      position: { x: 0, y: 0 },

      /** @type {string} */
      rune : ""
    };
  },

  computed: {
    /** @returns {string} */
    formatBody() {
      const rune = this.rune;
      let text =
        (rune && runesMetaData[rune] ) ||
        "--( invalid runeword id )--";

      // remove newlines at beginning and end
      text = text.trim();

      // fix extra spacing caused by newlines after <h4>sections</h4>
      text = text.replace(/<\/h4>\n*/g, "</h4>");

      // replace newlines by html equivalents
      text = text.replace(/\n/g, "<br/>");

      // format the mods (numbers) in the item stats
      //   https://regexr.com/66idv
      text = text.replace(/\+?[0-9-]+%?/g, '<span class="is-mod">$&</span>');

      return text;
    },
  },

  methods: {
    /** @param {number} n */
    unitPx(n) {
      return `${n}px`;
    },

    /**
     *
     * @param {HTMLElement} target   element to position popup relative to
     */
    moveTo(target) {
      // minimal gap between popup and viewport edge (px)
      const GAP = 10;

      let { x: popX, y: popY } = target.getBoundingClientRect();

      // place the popup a little below and to the side of the link
      popX = popX + 50;
      popY = popY + window.pageYOffset + target.offsetHeight + 4;

      const elRoot = /**@type HTMLElement*/ (this.$refs.root);

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

    /**
     * @param {string} rune
     * @param {HTMLElement} target
     */
    showRune(rune, target) {
      this.rune = rune;
      this.$nextTick(() => {
        this.moveTo(target);
        this.isVisible = true;
      });
    },

    /** @param {boolean} value */
    setVisible(value) {
      this.isVisible = value;
    },
  },
});
</script>
