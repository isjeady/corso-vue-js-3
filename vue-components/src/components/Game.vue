<template>
  <div>
    <HeaderComponent round="4" />
    <GameOverComponent round="4" />

    <HealthBarComponent />

    <section
      id="controls"
      class="grid grid-cols-2 max-w-xl mx-auto gap-8 my-10"
      v-if="!winner"
    >
      <UiButtonComponent />
      <UiButtonComponent />
      <UiButtonComponent />
      <UiButtonComponent />
    </section>
    <BattleLogComponent />
  </div>
</template>
<!-- eslint-disable no-unused-vars -->
<script>
import HeaderComponent from "./Header.vue";
import UiButtonComponent from "./UiButton.vue";
import GameOverComponent from "./GameOver.vue";
import HealthBarComponent from "./HealthBar.vue";
import BattleLogComponent from "./BattleLog.vue";
import { createApp, ref, computed, watch, onMounted } from "vue";

export default {
  components: {
    HeaderComponent,
    GameOverComponent,
    HealthBarComponent,
    BattleLogComponent,
    UiButtonComponent,
  },
  name: "GameComponent",
  props: {
    round: {
      type: String,
      required: true,
      default: "Titolo...",
    },
  },
  emits: ["evt-click"],
  setup(props, ctx) {
    const playerHealth = ref(100);
    const enemyHealth = ref(100);
    const round = ref(0);
    const winner = ref(null);
    const logMessages = ref([]);

    return {};
  },
};
</script>
