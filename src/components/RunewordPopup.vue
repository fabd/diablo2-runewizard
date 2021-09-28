<template>
  <div
    v-if="isVisible"
    class="rw-RunewordPopup absolute"
    :style="{
      left: unitPx(position.x),
      top: unitPx(position.y),
    }"
    @click="setVisible(false)"
  >
    <h3 class="rw-RunewordPopup-title">{{ runeword.title }}</h3>
    <div class="rw-RunewordPopup-type" v-html="runeword.ttype"></div>
    <div class="rw-RunewordPopup-body" v-html="formatBody"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import runewordsMetaData from "@/data/runewords-descriptions";

export default defineComponent({
  name: "RunewordPopup",

  data() {
    return {
      isVisible: false,

      /** @type { { x: number; y: number }} */
      position: { x: 0, y: 0 },

      /** @type {Pick<Runeword, "title" | "ttypes" | "level">} */
      runeword: {
        title: "",
        ttypes: [],
        level: 0,
      },
    };
  },

  computed: {
    /** @returns {string} */
    formatBody() {
      const runewordId = this.runeword.title;
      let text =
        (runewordId && runewordsMetaData[runewordId]) ||
        "--( invalid runeword id )--";

      // remove newlines at beginning and end
      text = text.trim();

      // fix extra spacing caused by newlines after <h4>sections</h4>
      text = text.replace(/<\/h4>\n*/g, "</h4>");

      // replace newlines by html equivalents
      text = text.replace(/\n/g, "<br/>");

      return text;
    },
  },

  methods: {
    /** @param {number} n */
    unitPx(n) {
      return `${n}px`;
    },

    /**
     * @param {number} x
     * @param {number} y
     */
    moveTo(x, y) {
      this.position = { x, y };

      return this; // chaining
    },

    /** @param {Runeword} runeword  */
    setContents(runeword) {
      this.runeword = runeword;

      return this; // chaining
    },

    /** @param {boolean} value */
    setVisible(value) {
      this.isVisible = value;

      return this; // chaining
    },
  },
});
</script>
