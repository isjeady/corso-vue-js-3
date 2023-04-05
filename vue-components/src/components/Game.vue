<template>
  <div>
    <HeaderComponent :round="round" />
    <GameOverComponent v-if="winner" @click="newGame" />

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
      <UiButtonComponent
        title="Attacco Speciale"
        @click="attackEnemySpecial"
        :disabled="attackEnemySpecialDisabled"
      />
      <UiButtonComponent
        type="danger"
        title="Medikit"
        @click="medikitPlayer"
        :disabled="medikitDisabled"
      />
      <UiButtonComponent type="danger" title="Mi Arrendo!" @click="gameover" />
    </section>

    <BattleLogComponent :logMessages="logMessages" />
  </div>
</template>

<script>
import HeaderComponent from "./Header.vue";
import UiButtonComponent from "./UiButton.vue";
import GameOverComponent from "./GameOver.vue";
import HealthBarComponent from "./HealthBar.vue";
import BattleLogComponent from "./BattleLog.vue";
import { ref, computed, watch } from "vue";

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

    const newGame = () => {
      playerHealth.value = 100;
      enemyHealth.value = 100;
      round.value = 0;
      winner.value = null;
      logMessages.value = [];
    };

    const generateRandomValue = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min;
    };

    const addLogMessage = (who, what, value) => {
      logMessages.value.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    };

    const attackPlayer = () => {
      const attackValue = generateRandomValue(8, 15);
      if (playerHealth.value - attackValue <= 0) {
        playerHealth.value = 0;
      } else {
        playerHealth.value -= attackValue;
      }
      addLogMessage("enemy", "attack", attackValue);
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
      addLogMessage("player", "attack", attackValue);
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
      addLogMessage("player", "medikit", healValue);
      attackPlayer();
    };

    const gameover = () => {
      winner.value = "enemy";
      playerHealth.value = 0;
    };

    const attackEnemySpecialDisabled = computed(() => {
      return round.value % 3 !== 0;
    });

    const medikitDisabled = computed(() => {
      return playerHealth.value >= 50 || round.value % 3 !== 0;
    });

    watch(enemyHealth, (enemyHealth, prevEnemyHealth) => {
      if (enemyHealth <= 0 && playerHealth.value <= 0) {
        winner.value = "draw"; // A draw
      } else if (enemyHealth <= 0) {
        winner.value = "player"; // Enemy lost
      }
    });

    watch(playerHealth, (playerHealth, prevPlayerHealth) => {
      if (playerHealth <= 0 && enemyHealth.value <= 0) {
        winner.value = "draw"; // A draw
      } else if (playerHealth <= 0) {
        winner.value = "enemy"; // Player lost
      }
    });

    return {
      round,
      playerHealth,
      enemyHealth,
      gameover,
      attackEnemy,
      attackEnemySpecial,
      medikitPlayer,
      attackEnemySpecialDisabled,
      medikitDisabled,
      winner,
      newGame,
      logMessages,
    };
  },
};
</script>
