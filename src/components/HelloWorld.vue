<template>
  <div class="">
    <h1 class="rw-title text-2rem mb-0.5rem">WindiCSS test</h1>

    <div class="bg-purple-100 text-lg italic font-mono max-w-300px mx-auto rounded-md py-2">
      <div class="flex justify-center items-center text-hex-408035">
        <div class="px-4 py-2 font-bold">flex</div>
        <div class="px-4 py-2 font-bold">flexx</div>
        <div class="px-4 py-2 font-bold">flexxx</div>
      </div>
      <p>asdasd lad as;ldk as;ldk;alskd;a</p>
    </div>

    <button @click="count++">count is: {{ count }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",

  props: {
    msg: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      count: 0,
    };
  },
});
</script>

<style lang="scss">
.rw {
  &-title {
    color: red;
  }

  a {
    color: #42b983;
  }

  label {
    margin: 0 0.5em;
    font-weight: bold;
  }

  code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
  }
}
</style>
