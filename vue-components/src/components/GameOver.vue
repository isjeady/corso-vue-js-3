<template>
  <div>GameOver</div>
</template>

<script>
export default {
  name: "GameOverComponent",
  props: {
    round: {
      type: String,
      required: true,
      default: "Titolo...",
    },
  },
  emits: ["evt-click"],
  setup(props, ctx) {
    return {};
  },
};
</script>
