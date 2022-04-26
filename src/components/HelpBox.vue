<template>
  <div class="rw-Help text-md">
    <HelpText class />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HelpText from "@/components/HelpText.md";

export default defineComponent({
  name: "HelpBox",
  components: {
    HelpText,
  },
});
</script>
