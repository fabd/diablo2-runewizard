<template>
  <div>
    <div class="flex justify-end items-center mb-2">
      <a
        href="#"
        class="rw-Help-link self-"
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

    <div class="mb-8">
      <div class="flex justify-between items-center mb-2">
        <h2 class="rw-Title-h2 mb-0">Runewords (pinned)</h2>
      </div>

      <runewords-table :items="pinnedRunewords" />
    </div>

    <div>
      <div class="flex justify-between items-center mb-2">
        <h2 class="rw-Title-h2 mb-0">Runewords</h2>
      </div>

      <runewords-table :items="unpinnedRunewords" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelpBox from "@/components/HelpBox.vue";
import IconChevronDown from "@/icons/IconChevronDown.vue";
import RunewordsTable from "@/components/RunewordsTable.vue";
import runewordsData from "@/data/runewords";
import { Runeword } from "@/types";

export default defineComponent({
  name: "Runewords",
  components: {
    HelpBox,
    IconChevronDown,
    RunewordsTable,
  },

  data() {
    return {
      isHelpVisible: false,
    };
  },

  computed: {
    pinnedRunewords(): Runeword[] {
      return runewordsData.slice(0, 6);
    },

    unpinnedRunewords(): Runeword[] {
      return runewordsData.slice(6);
    },
  },
});
</script>
