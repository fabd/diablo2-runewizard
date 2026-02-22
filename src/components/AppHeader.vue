<template>
  <!-- optional header to decorate the stand alone version -->
  <header>
    <div class="rw-Layout-row mx-auto flex pt-4">
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

import HelpBox from "@/components/HelpBox.vue";
import IconChat from "@/icons/IconChat.vue";
import IconChevronDown from "@/icons/IconChevronDown.vue";

export default defineComponent({
  name: "AppHeader",

  components: {
    HelpBox,
    IconChat,
    IconChevronDown,
  },

  data() {
    return {
      isHelpVisible: false,

      envGameName: import.meta.env.VITE_GAME_NAME as string,
      envGameVersion: import.meta.env.VITE_GAME_VERSION as string,
      envGithubRepoUrl: import.meta.env.VITE_URL_GITHUB_REPO as string,
      envPatchNotesUrl: import.meta.env.VITE_URL_PATCH_NOTES as string,
    };
  },
});
</script>
