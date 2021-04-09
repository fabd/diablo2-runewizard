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
        <div class="flex justify-between items-center text-lg text-[#afafaf]">
          <div>
            for <span class="text-[#d0d0d0] font-bold">{{ envGameName }}</span>
            <span class="ml-2 text-[#71B643]">{{ `v${envGameVersion}` }}</span>
          </div>

          <div class="flex items-center text-[#514f4a] text-base">
            <template v-if="envMainSiteUrl">
              <a :href="envMainSiteUrl" class="rw-Header-link"
                >Back to main site</a
              >
              <span class="mx-3">|</span>
            </template>
            <a :href="envGithubRepoUrl" class="rw-Header-link">
              <icon-github class="ux-icon ux-icon--fw mr-1" />
              <span class="hover:underline align-middle">Github</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- separator between header and main content, div simply extends to edges -->
    <div class="rw-Header-goldBar mb-2"></div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import IconGithub from "@/icons/IconGithub.vue";

export default defineComponent({
  name: "AppHeader",

  components: {
    IconGithub,
  },

  data() {
    return {
      envGithubRepoUrl: import.meta.env.VITE_URL_GITHUB_REPO as string,
      envMainSiteUrl: import.meta.env.VITE_URL_MAIN_SITE as string,
      envGameName: import.meta.env.VITE_GAME_NAME as string,
      envGameVersion: import.meta.env.VITE_GAME_VERSION as string,
    };
  },
});
</script>
