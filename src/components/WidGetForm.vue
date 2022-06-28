<template>
  <div
    class="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"
  >
    <FeedbackSuccessStep
      v-if="feedbackSent"
      :onClearFeedBack="onClearFeedBack"
      :onChangePopOver="onChangePopOver"
    />
    <FeedbackContentStep
      v-if="feedbackType && !feedbackSent"
      :feedbackType="feedbackType"
      :onFeedbackTypeChange="onFeedbackTypeChange"
      :onSendFeedback="onSendFeedback"
    />
    <FeedbackTypeStep
      v-if="!feedbackType"
      :onFeedbackTypeChange="onFeedbackTypeChange"
      :onChangePopOver="onChangePopOver"
    />

    <footer class="text-xs text-neutral-400">
      Feito com <span class="text-white">NuxtJs</span> por
      <a class="underline underline-offset-2" href=""> Silvio Campos </a>
    </footer>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { FeedbackType, FeedbackInfo } from "./WidGet.vue";

export default Vue.extend({
  name: "WidGetForm",
  props: {
    onChangePopOver: Function,
  },
  methods: {
    onFeedbackTypeChange(feedbackType: FeedbackType | null) {
      this.feedbackType = feedbackType;
    },
    onSendFeedback(feeedback: FeedbackInfo) {
      this.feedbackSent = !this.feedbackSent;
    },
    onClearFeedBack() {
      this.feedbackSent = !this.feedbackSent;
      this.feedbackType = null;
    },
  },
  data() {
    return {
      feedbackSent: false as boolean,
      feedbackType: null as FeedbackType | null,
    };
  },
});
</script>
