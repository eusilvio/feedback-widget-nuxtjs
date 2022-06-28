<template>
  <div>
    <header class="text-center">
      <span class="text-xl leading-6 text-white">Deixe seu feedback</span>
      <CloseButton :onChangePopOver="onChangePopOver" />
    </header>
    <div class="flex py-8 gap-2 w-full">
      <button
        v-for="[key, item] in Object.entries(feedbackTypes)"
        :key="item.title"
        @click="onFeedbackTypeChange(key)"
        class="bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none transition hover:scale-110"
        type="button"
      >
        <img :src="item.image.source" :alt="item.image.alt" />
        <span class="text-white">{{ item.title }}</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { feedbackTypes } from "./WidGet.vue";
export default Vue.extend({
  name: "FeedbackTypeStep",
  props: {
    onFeedbackTypeChange: Function,
    onChangePopOver: Function,
  },
  data() {
    return {
      feedbackTypes,
    };
  },
});
</script>
