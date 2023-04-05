<template>
  <div>BattleLogComponent</div>
</template>

<script>
export default {
  name: "BattleLogComponent",
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
