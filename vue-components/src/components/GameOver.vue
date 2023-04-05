<template>
  <section class="container">
    <div class="text-3xl">Game Over!</div>
    <div v-if="winner === 'enemy'">You lost!</div>
    <div v-else-if="winner === 'player'">You won!</div>
    <div v-else>It's a draw!</div>
    <UiButtonComponent title="Nuovo Gioco" @click="handleClick" />
  </section>
</template>

<script>
import UiButtonComponent from "./UiButton.vue";

export default {
  components: { UiButtonComponent },
  name: "GameOverComponent",
  props: {
    winner: {
      type: String,
      required: true,
    },
  },
  emits: ["click"],
  setup(props, ctx) {
    const handleClick = () => {
      ctx.emit("click");
    };
    return {
      handleClick,
    };
  },
};
</script>
