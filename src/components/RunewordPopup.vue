<template>
  <div
    class="rw-RunewordPopup absolute"
    :style="{
      display: isVisible ? 'block' : 'none',
      left: unitPx(position.x),
      top: unitPx(position.y),
    }"
  >
    <h3 class="rw-RunewordPopup-title">{{ runeword.title }}</h3>
    <div class="rw-RunewordPopup-type" v-html="runeword.ttype"></div>
    <div class="rw-RunewordPopup-body" v-html="formatBody"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Runeword } from "@/types";
import runewordsMetaData from "@/data/runewords-descriptions";

export default defineComponent({
  name: "RunewordPopup",

  data() {
    return {
      isVisible: false,

      position: { x: 0, y: 0 } as { x: number; y: number },

      runeword: {
        title: "",
        ttype: "",
        level: 0,
      } as Pick<Runeword, "title" | "ttype" | "level">,
    };
  },

  computed: {
    formatBody(): string {
      const runewordId = this.runeword.title;
      let text =
        (runewordId && runewordsMetaData[runewordId]) ||
        "--( invalid runeword id )--";

      text = text.trim().replace(/\n/g, "<br/>");

      return text;
    },
  },

  methods: {
    unitPx(n: number) {
      return `${n}px`;
    },

    moveTo(x: number, y: number) {
      this.position = { x, y };

      return this; // chaining
    },

    setContents(runeword: Runeword) {
      this.runeword = runeword;

      return this; // chaining
    },

    setVisible(value: boolean) {
      this.isVisible = value;

      return this; // chaining
    },
  },
});
</script>
