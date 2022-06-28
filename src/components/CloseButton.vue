<template>
  <button
    class="right-5 absolute text-zinc-400 hover:text-zinc-100"
    title="Fechar formulario de Feedback"
    @click="onChangePopOver"
  >
    <font-awesome-icon icon="fa-solid fa-xmark" />
  </button>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "CloseButton",
  props: {
    onChangePopOver: Function,
  },
});
</script>
