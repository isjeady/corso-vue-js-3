const { 
    createApp,
    ref,
    computed,
    watch,
    onMounted,
} = Vue;

const generateRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const myApp = createApp({
  setup() {
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
    }

    const attackPlayer = () => {
        const attackValue = generateRandomValue(8, 15);
        if(playerHealth.value - attackValue <= 0){
            playerHealth.value = 0;
        }else{
            playerHealth.value -= attackValue;
        }
        addLogMessage('enemy', 'attack', attackValue);
    }

    const attackEnemy = () => {
        round.value++;
        const attackValue = generateRandomValue(5, 12);
        if(enemyHealth.value - attackValue <= 0){
            enemyHealth.value = 0;
        }else{
            enemyHealth.value -= attackValue;
        }
        addLogMessage('player', 'attack', attackValue);
        attackPlayer();
    }

    const attackEnemySpecial = () => {
        round.value++;
        const attackValue = generateRandomValue(10, 25);
        if(enemyHealth.value - attackValue <= 0){
            enemyHealth.value = 0;
        }else{
            enemyHealth.value -= attackValue;
        }
        addLogMessage('player', 'attack', attackValue);
        attackPlayer();
    }

    const medikitPlayer = () => {
        round.value++;
        const healValue = generateRandomValue(8, 20);
        if (playerHealth.value + healValue > 100) {
            playerHealth.value = 100;
        } else {
            playerHealth.value += healValue;
        }
        addLogMessage('player', 'medikit', healValue);
        attackPlayer();
    }

    const gameover = () => {
        winner.value = 'enemy';
        playerHealth.value = 0;
    }

    const addLogMessage = (who, what, value) => {
        logMessages.value.unshift({
          actionBy: who,
          actionType: what,
          actionValue: value
        });
    }

    const playerBarStyles = computed(() => {
        return { width: playerHealth.value + '%' };
    });

    const enemyBarStyles = computed(() => {
        return { width: enemyHealth.value + '%' };
    });

    const attackEnemySpecialDisabled = computed(() => {
        return round.value % 3 !== 0;
    });

    const medikitDisabled = computed(() => {
        return playerHealth.value >= 50 || round.value % 3 !== 0;
    });
    
    onMounted(() => {
        console.log("onMounted")
    });

    watch(enemyHealth, (enemyHealth, prevEnemyHealth) => {
        if (enemyHealth <= 0 && playerHealth.value <= 0) {
            winner.value = 'draw';// A draw
        } else if (enemyHealth <= 0) {
            winner.value = 'player';// Enemy lost
        }
    });

    watch(playerHealth, (playerHealth, prevPlayerHealth) => {
        if (playerHealth <= 0 && enemyHealth.value <= 0) {
            winner.value = 'draw';// A draw
        } else if (playerHealth <= 0) {
            winner.value = 'enemy';// Player lost
        }
    });

    return {
        attackEnemy,
        attackEnemySpecial,
        medikitPlayer,
        gameover,
        attackEnemySpecialDisabled,
        medikitDisabled,
        newGame,
        playerBarStyles,
        enemyBarStyles,
        playerHealth,
        enemyHealth,
        round,
        winner,
        logMessages
    }
  }
})

myApp.mount('#game')