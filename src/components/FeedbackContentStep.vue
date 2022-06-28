<template>
  <div>
    <header>
      <button
        type="button"
        class="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        @click="onFeedbackTypeChange(null)"
      >
        <font-awesome-icon icon="fa-solid fa-arrow-left" />
      </button>
      <div
        class="text-xl text-center leading-6 flex items-center justify-center gap-2"
      >
        <img
          :src="feedbackTypeInfo.image.source"
          :alt="feedbackTypeInfo.image.alt"
          class="w-6 h-6"
        />
        <span class="text-white">{{ feedbackTypeInfo.title }}</span>
      </div>
    </header>
    <form class="my-4 w-full">
      <textarea
        class="min-w-[304px] w-full min-h-[112px] p-4 text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md ring-1 ring-red-500 focus:border-red-500 focus:ring-red-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-red-700 scrollbar-track-transparent scrollbar-thin"
        placeholder="Conte com detalhes o que esta acontecendo..."
      ></textarea>
      <footer class="flex gap-2 mt-2">
        <ScreenShotButton
          :screenShot="screenShot"
          :setScreenshot="setScreenshot"
        />
        <button
          type="button"
          class="p-2 bg-red-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-900 focus:ring-red-500 transition-all disabled:opacity-50 disabled:hover:bg-red-500 text-white"
          title="Enviar feedback"
          @click="onSendFeedback(feedbackTypeInfo)"
        >
          Enviar feedback
        </button>
      </footer>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { FeedbackType, feedbackTypes } from "./WidGet.vue";

export default Vue.extend({
  name: "FeedbackContentStep",
  props: {
    feedbackType: String,
    onFeedbackTypeChange: Function,
    onSendFeedback: Function,
  },
  methods: {
    setScreenshot(screenShotBase64: string) {
      this.screenShot = screenShotBase64;
    },
  },
  data() {
    return {
      feedbackTypeInfo: feedbackTypes[this.feedbackType as FeedbackType],
      screenShot: null as any,
    };
  },
});
</script>
