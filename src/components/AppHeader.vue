<template>
  <!-- optional header to decorate the stand alone version -->
  <header class="h-[106px] flex">
    <div class="px-[20px] pt-[17px]">
      <img
        src="@/assets/images/logo-rune.png"
        alt="Rune icon original art (c) BLIZZARD ENTERTAINMENT"
        class="w-[69px] h-[67px]"
      />
    </div>
    <div class="">
      <h1 class="text-black text-[0px] mt-[19px] mb-[5px] w-[301px] h-[32px]">
        <img
          src="@/assets/images/logo-text-runewizard.png"
          alt="Runewizard"
          class="block w-full h-full"
        />
      </h1>
      <span class="block text-lg text-[#afafaf]">
        for <span class="text-[#d0d0d0] font-bold">{{ gameName }}</span>
        <span class="ml-2 text-[#71B643]">{{ `v${gameVersion}` }}</span>
      </span>
    </div>
  </header>

  <!-- separator between header and main content, div simply extends to edges -->
  <div class="rw-Header-goldBar mb-2"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppHeader",

  data() {
    return {
      gameName: import.meta.env.VITE_GAME_NAME as string,
      gameVersion: import.meta.env.VITE_GAME_VERSION as string,
    };
  },
});
</script>
