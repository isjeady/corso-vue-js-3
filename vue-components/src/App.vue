<template>
  <div>
    <GameComponent />
  </div>
</template>

<script>
import GameComponent from "./components/Game.vue";

export default {
  components: { GameComponent },
  setup(props, ctx) {
    return {};
  },
};
</script>

<style scoped></style>
