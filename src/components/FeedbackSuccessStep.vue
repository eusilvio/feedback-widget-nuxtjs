<template>
  <div>
    <header>
      <CloseButton :onChangePopOver="onChangePopOver" />
    </header>
    <div class="flex flex-col items-center py-10 w-[304px]">
      <img class="mx-auto" :src="SuccessImage" alt="Success Image" />
      <div class="text-xl mt-2 text-white">Agradecemos o feedback!</div>
      <button
        class="py-2 px-6 mt-6 bg-red-800 rounded-md border-transparent text-sm leading-6 hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-red-800 text-white"
        title="Quer enviar outro feedback"
        @click="onClearFeedBack"
      >
        Quer enviar outro feedback
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SuccessImage from "@/assets/success.svg";
export default Vue.extend({
  name: "FeedbackSuccessStep",
  props: {
    onClearFeedBack: Function,
    onChangePopOver: Function,
  },
  data() {
    return {
      SuccessImage,
    };
  },
});
</script>
