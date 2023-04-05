<template>
  <div class="header">
    <h1>Game | Round: {{ round }}</h1>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
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
