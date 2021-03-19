<template>
  <div
    class="rw-RunewordPopup absolute"
    :style="{
      display: isVisible ? 'block' : 'none',
      left: unitPx(position.x),
      top: unitPx(position.y),
    }"
  >
    <div class="rw-RunewordPopup-title">{{ runeword.title }}</div>
    <div class="rw-RunewordPopup-type">{{ runeword.ttype }}</div>
    <div class="rw-RunewordPopup-body">
      4% Chance To Cast Level 5 Slow Missiles When Struck<br />
      2% Chance To Cast level 15 Valkyrie On Striking<br />
      +2 To Amazon Skill Levels<br />
      +20% Faster Hit Recovery<br />
      +2 To Critical Strike<br />
      Cold Resist +30%<br />
      Attacker Takes Damage of 14
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Runeword } from "@/types";

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
      } as Partial<Runeword>,
    };
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
