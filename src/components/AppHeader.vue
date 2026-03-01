<template>
  <!-- optional header to decorate the stand alone version -->
  <header>
    <div
      v-if="showBanner"
      class="bg-blood-dark border-b border-blood-light px-4 py-2 flex justify-between items-center text-gold-light text-sm md:text-base mb-4"
    >
      <div class="flex-1 text-center">
        <strong>Update</strong>: Runewizard is now optimized for smartphones and tablets!
      </div>
      <button @click="onCloseBanner" class="ml-4 hover:text-white transition-colors">
        <icon-cancel class="ux-icon ux-icon--fw" />
      </button>
    </div>

    <div class="rw-Layout-row mx-auto flex px-4 pt-4">
      <div class="pr-[20px] shrink">
        <img
          src="@assets/images/logo-rune.png"
          alt="Rune icon original art (c) BLIZZARD ENTERTAINMENT"
          class="w-[49px] md:w-[69px] h-[47px] md:h-[67px]"
        />
      </div>
      <div class="flex-1">
        <h1 class="text-black text-[0px] mt-1 mb-[5px] w-[225px] h-[24px] md:w-[301px] md:h-[32px]">
          <img
            src="@assets/images/logo-text-runewizard.png"
            alt="Runewizard"
            class="block w-full h-full"
          />
        </h1>
        <div class="flex justify-between items-center pb-4">
          <div class="text-sm md:text-lg ux-color-gray">
            <div class="inline">
              for <span class="ux-color-gold">{{ envGameName }}</span>
            </div>
            <span class="ml-2 ux-color-green whitespace-nowrap">Patch {{ envGameVersion }}</span>
            <span class="text-xs">
              <a
                class="ml-2 underline hover:underline ux-color-link-blue whitespace-nowrap"
                target="blank"
                :href="envPatchNotesUrl"
                >Update Notes</a
              >
            </span>
          </div>

          <div class="flex items-center">
            <a
              href="#"
              class="rw-HelpLink ml-auto"
              @click.prevent="isHelpVisible = !isHelpVisible"
            >
              <icon-chevron-down
                class="ux-icon ux-icon--fw"
                :class="{
                  'transform rotate-180': isHelpVisible,
                }"
              /><span class="ml-1">{{ "Help" }}</span>
            </a>

            <a :href="`${envGithubRepoUrl}/discussions`" class="rw-Header-link hidden ml-6 md:block">
              <icon-chat class="ux-icon ux-icon--fw ux-icon--lg mr-1" />
              <span>{{ "Feedback" }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- separator between header and main content, div simply extends to edges -->
    <div class="rw-Layout-goldBarSeparator mb-2"></div>

    <transition name="fadein">
      <div v-if="isHelpVisible" class="rw-Layout-row mb-4">
        <help-box />
      </div>
    </transition>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import store from "@/store";

import HelpBox from "@/components/HelpBox.vue";
import IconChat from "@/icons/IconChat.vue";
import IconChevronDown from "@/icons/IconChevronDown.vue";
import IconCancel from "@/icons/IconCancel.vue";

export default defineComponent({
  name: "AppHeader",

  components: {
    HelpBox,
    IconChat,
    IconChevronDown,
    IconCancel,
  },

  data() {
    return {
      isHelpVisible: false,
      showBanner: false,

      envGameName: import.meta.env.VITE_GAME_NAME as string,
      envGameVersion: import.meta.env.VITE_GAME_VERSION as string,
      envGithubRepoUrl: import.meta.env.VITE_URL_GITHUB_REPO as string,
      envPatchNotesUrl: import.meta.env.VITE_URL_PATCH_NOTES as string,
    };
  },

  mounted() {
    // only show banner if it hasn't been read/closed yet
    this.showBanner = store.isUpdateNew();
  },

  methods: {
    onCloseBanner() {
      this.showBanner = false;
      store.setUpdateRead();
      store.saveState();
    },
  },
});
</script>
