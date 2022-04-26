<template>
  <!-- optional header to decorate the stand alone version -->
  <header>
    <div class="rw-Layout-rowContainer h-[106px] flex">
      <div class="pr-[20px] pt-[17px]">
        <img
          src="@assets/images/logo-rune.png"
          alt="Rune icon original art (c) BLIZZARD ENTERTAINMENT"
          class="w-[69px] h-[67px]"
        />
      </div>
      <div class="flex-1">
        <h1 class="text-black text-[0px] mt-[19px] mb-[5px] w-[301px] h-[32px]">
          <img
            src="@assets/images/logo-text-runewizard.png"
            alt="Runewizard"
            class="block w-full h-full"
          />
        </h1>
        <div class="flex justify-between items-center">
          <div class="text-lg text-[#b5b2b0]">
            for <span class="text-[#b5b2b0] font-bold">{{ envGameName }}</span>
            <span class="ml-2 text-[#71B643]">{{ `v${envGameVersion}` }}</span>
          </div>

          <div class="flex items-center text-[#514f4a]">
            <a
              href="#"
              class="rw-HelpLink mr-6"
              @click.prevent="isHelpVisible = !isHelpVisible"
            >
              <icon-chevron-down
                class="ux-icon ux-icon--fw"
                :class="{
                  'transform rotate-180': isHelpVisible,
                }"
              /><span class="ml-1">{{ "Help" }}</span>
            </a>

            <a :href="`${envGithubRepoUrl}/discussions`" class="rw-Header-link">
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
      <div v-if="isHelpVisible" class="rw-Layout-rowContainer mb-4">
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

      envGameName: /**@type {string}*/ (import.meta.env.VITE_GAME_NAME),
      envGameVersion: /**@type {string}*/ (import.meta.env.VITE_GAME_VERSION),
      envGithubRepoUrl: /**@type {string}*/ (import.meta.env
        .VITE_URL_GITHUB_REPO),
    };
  },
});
</script>
