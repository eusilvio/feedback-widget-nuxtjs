<template>
  <div
    class="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end"
  >
    <WidGetForm v-if="popOverOpen" :onChangePopOver="onChangePopOver" />

    <button
      class="bg-red-500 rounded-full p-3 h-12 text-white shadow-lg flex items-center group"
      @click="onChangePopOver"
    >
      <font-awesome-icon class="text-2xl" icon="fa-regular fa-comment-dots" />
      <span
        class="overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear"
        v-bind:class="{ 'max-w-0': !popOverOpen }"
      >
        <span class="pl-2"></span>
        Feedback
        <span class="pr-2"></span>
      </span>
    </button>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import BugImage from "@/assets/bug.svg";
import Idea from "@/assets/idea.svg";
import Thought from "@/assets/thought.svg";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: BugImage,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: Idea,
      alt: "Imagem de um lampada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: Thought,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;
export type FeedbackInfo = {
  title: string;
  image: {
    source: any;
    alt: string;
  };
};
export default Vue.extend({
  name: "WidGet",
  methods: {
    onChangePopOver() {
      this.popOverOpen = !this.popOverOpen;
    },
  },
  data() {
    return {
      popOverOpen: false,
    };
  },
});
</script>
