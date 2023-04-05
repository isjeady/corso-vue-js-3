<template>
  <div>
    <HeaderComponent :round="round" />
    <GameOverComponent />

    <div class="my-24">
      <HealthBarComponent title="Tu" :health="playerHealth" />
      <HealthBarComponent title="Nemico" :health="enemyHealth" />
    </div>

    <section
      id="controls"
      class="grid grid-cols-2 max-w-xl mx-auto gap-8 my-10"
      v-if="!winner"
    >
      <UiButtonComponent title="Attacco" @click="attackEnemy" />
      <UiButtonComponent title="Attacco Speciale" @click="attackEnemySpecial" />
      <UiButtonComponent type="danger" title="Medikit" @click="medikitPlayer" />
      <UiButtonComponent type="danger" title="Mi Arrendo!" @click="gameover" />
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
  emits: ["evt-click"],
  setup(props, ctx) {
    const playerHealth = ref(100);
    const enemyHealth = ref(100);
    const round = ref(0);
    const winner = ref(null);
    const logMessages = ref([]);

    const generateRandomValue = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min;
    };

    const attackPlayer = () => {
      const attackValue = generateRandomValue(8, 15);
      if (playerHealth.value - attackValue <= 0) {
        playerHealth.value = 0;
      } else {
        playerHealth.value -= attackValue;
      }
      // addLogMessage("enemy", "attack", attackValue);
    };

    const attackEnemy = () => {
      round.value++;
      const attackValue = generateRandomValue(5, 12);
      if (enemyHealth.value - attackValue <= 0) {
        enemyHealth.value = 0;
      } else {
        enemyHealth.value -= attackValue;
      }
      // addLogMessage("player", "attack", attackValue);
      attackPlayer();
    };

    const attackEnemySpecial = () => {
      round.value++;
      const attackValue = generateRandomValue(10, 25);
      if (enemyHealth.value - attackValue <= 0) {
        enemyHealth.value = 0;
      } else {
        enemyHealth.value -= attackValue;
      }
      // addLogMessage("player", "attack", attackValue);
      attackPlayer();
    };

    const medikitPlayer = () => {
      round.value++;
      const healValue = generateRandomValue(8, 20);
      if (playerHealth.value + healValue > 100) {
        playerHealth.value = 100;
      } else {
        playerHealth.value += healValue;
      }
      // addLogMessage("player", "medikit", healValue);
      attackPlayer();
    };

    const gameover = () => {
      winner.value = "enemy";
      playerHealth.value = 0;
    };

    return {
      round,
      playerHealth,
      enemyHealth,
      gameover,
      attackEnemy,
      attackEnemySpecial,
      medikitPlayer,
    };
  },
};
</script>
