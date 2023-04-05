<template>
  <div>HealthBar</div>
</template>

<script>
export default {
  name: "HealthBarComponent",
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
