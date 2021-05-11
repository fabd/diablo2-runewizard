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

    <div v-if="hasPinnedRunewords" class="mb-8">
      <div class="flex items-center justify-between mb-2">
        <h2 class="rw-Title-h2 mb-0">Runewords (pinned)</h2>

        <div v-if="1" class="ml-8">
          <a class="rw-Runes-clear" href="#" @click.prevent="0"
            ><icon-cancel
              class="ux-icon ux-icon--fw rw-Runes-clearIcon text-[#da0000] mr-1"
            />unpin all</a
          >
        </div>
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

<script>
import { defineComponent } from "vue";
import HelpBox from "@/components/HelpBox.vue";
import IconCancel from "@/icons/IconCancel.vue";
import IconChevronDown from "@/icons/IconChevronDown.vue";
import RunewordsTable from "@/components/RunewordsTable.vue";
import runewordsData from "@/data/runewords";

export default defineComponent({
  name: "Runewords",

  components: {
    HelpBox,
    IconCancel,
    IconChevronDown,
    RunewordsTable,
  },

  data() {
    return {
      isHelpVisible: false,

      /** @type{RunewordItem[]}*/
      runewordsList: [],
    };
  },

  computed: {
    /** @return {boolean} */
    hasPinnedRunewords() {
      return this.runewordsList.some((item) => item.isPinned);
    },

    /** @return {Runeword[]} */
    pinnedRunewords() {
      return this.runewordsList.filter((item) => item.isPinned);
    },

    /** @return {Runeword[]} */
    unpinnedRunewords() {
      return this.runewordsList.filter((item) => !item.isPinned);
    },
  },

  created() {
    this.runewordsList = /** @type{RunewordItem[]}*/ (runewordsData.slice());
    this.runewordsList.forEach((item) => (item.isPinned = false));
  },
});
</script>
