<template>
  <!-- optional header to decorate the stand alone version -->
  <header>
    <div class="rw-Layout-rowContainer items-center content-center mx-auto grid grid-cols-3">
      <div class="mt-2 col-span-1 mx-auto mr-5 ">
        <img
          src="@assets/images/logo-rune.png"
          alt="Rune icon original art (c) BLIZZARD ENTERTAINMENT"
          class="w-[69px] h-[67px] "
        />
      </div>
      <div class="col-span-2">
        <h1 class="text-black text-[0px] mt-[19px] mb-[5px] mr-5 md:w-[400px]">
          <img
            src="@assets/images/logo-text-runewizard.png"
            alt="Runewizard"
            class="block w-full h-full"
          />
        </h1>
      </div>
      <div class="col-span-3">
      <div class="justify-between items-center text-lg text-center mx-auto text-[#b5b2b0] pb-4">
     

          <div class="items-center text-[#514f4a] text-base">
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
    <div class="rw-Layout-goldBarSeparator mb-2"></div>
  </header>
</template>

<script>
import { defineComponent } from "vue";

import IconGithub from "@/icons/IconGithub.vue";

export default defineComponent({
  name: "AppHeader",

  components: {
    IconGithub,
  },

  data() {
    return {
      envGithubRepoUrl: import.meta.env.VITE_URL_GITHUB_REPO,
      envMainSiteUrl: import.meta.env.VITE_URL_MAIN_SITE,
    };
  },
});
</script>
