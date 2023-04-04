<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import UiButton from './components/UiButton.vue';
import ComponentA from './components/ComponentA.vue';
import ComponentB from './components/ComponentB.vue';
import ComponentC from './components/ComponentC.vue';
import { ref } from 'vue'
import WelcomeItem from './components/WelcomeItem.vue';

const buttonsArray = ref([
  'Clicca qui',
  'Elimina',
  'Modifica',
])

const count = ref(0)

const currentComponent = ref("");

</script>

<template>
  
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="my-4">
      <div class="text-xl text-center my-4">Componenti</div>
      <div class="grid grid-cols-4 gap-4">
        <UiButton 
          title="Counter++"
          @evt-click="count++"
        />
        <UiButton 
          title="Counter++"
          color="success"
          @evt-click="count++"
        />
      </div>
      <div class="text-5xl my-8">
          {{ count }}
      </div>
    </div>

    <div class="my-16">
      <div class="text-xl text-center my-4"> Array di Componenti</div>
      <div class="grid grid-cols-6 gap-4">
        <UiButton 
          v-for="(b,idx) in buttonsArray"
          :key="idx"
          :title="b"
        />
      </div>
    </div>
  </header>

  <div class="my-4">
    <div class="text-xl text-center my-4">Componenti Dinamici</div>
    <div class="grid grid-cols-4 gap-4">
      <UiButton 
        title="Component A"
        @evt-click="currentComponent=ComponentA"
      />
      <UiButton 
        title="Component B"
        color="success"
        @evt-click="currentComponent=ComponentB"
      />
      <UiButton 
        title="Component C"
        color="danger"
        @evt-click="currentComponent=ComponentC"
      />
    </div>
    <div class="grid grid-cols-1 gap-4 p-4 border border-dashed border-gray-500 border- w-full h-48 my-8 rounded-md">
      <component :is="currentComponent"></component>
    </div>
  </div>

  <!-- <main>
    <TheWelcome />
  </main> -->
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
