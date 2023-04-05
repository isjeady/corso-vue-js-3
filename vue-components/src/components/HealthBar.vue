<template>
  <section id="enemy" class="container">
    <h2>{{ title }} ({{ health }})</h2>
    <div class="healthbar">
      <div class="healthbar__value" :style="barStyles"></div>
    </div>
  </section>
</template>

<script>
import { computed } from "vue";

export default {
  name: "HealthBarComponent",
  props: {
    title: {
      type: String,
      required: true,
      default: "",
    },
    health: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  setup(props, ctx) {
    const barStyles = computed(() => {
      return { width: props.health + "%" };
    });

    return {
      barStyles,
    };
  },
};
</script>

<style>
.healthbar {
  @apply rounded-md border border-gray-500 w-full h-6;
}
.healthbar__value {
  @apply h-full w-full bg-red-400 hover:bg-red-600;
}
</style>
