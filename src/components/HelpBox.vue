<template>
  <div class="rw-HelpText px-4 pt-4 pb-2 mb-6 text-sm">
    <HelpText class="" />
  </div>
</template>

<script>
import { defineComponent } from "vue";

import HelpText from "@/components/HelpText.md";

export default defineComponent({
  name: "HelpBox",
  components: {
    HelpText,
  },
});
</script>
