<template>
  <div>
    <button
      v-if="screenShot"
      type="button"
      class="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
      title="Remove captura de tela"
      @click="setScreenshot(null)"
      v-bind:style="{
        'background-image': 'url(' + screenShot + ')',
        'background-position': 'left bottom',
        'background-size': 'cover',
      }"
    >
      <font-awesome-icon icon="fa-regular fa-trash-can" />
    </button>
    <button
      v-if="!screenShot"
      type="button"
      class="p-2 px-4 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-red-500 transition-colors"
      title="Remove captura de tela"
      @click="handleTakeScreenShot"
    >
      <font-awesome-icon
        v-if="!isTakingScreenshot"
        class="text-white"
        icon="fa-solid fa-camera"
      />
      <font-awesome-icon
        v-if="isTakingScreenshot"
        class="text-white animate-spin"
        icon="fa-solid fa-spinner"
      />
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import html2canvas from "html2canvas";

export default Vue.extend({
  name: "ScreenShotButton",
  props: {
    screenShot: String,
    setScreenshot: Function,
  },
  methods: {
    handleTakeScreenShot() {
      this.isTakingScreenshot = true;
      setTimeout(async () => {
        const canvas = await html2canvas(document.querySelector("html")!);
        const base64image = canvas.toDataURL("image/png");
        this.setScreenshot(base64image);
        this.isTakingScreenshot = false;
      }, 5000);
    },
  },
  data() {
    return {
      isTakingScreenshot: false,
    };
  },
});
</script>
