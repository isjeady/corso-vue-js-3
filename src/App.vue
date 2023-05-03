<template>
  <div class="flex flex-col text-4xl h-screen justify-center items-center">
    <p>
      INIT
    </p>
    <div>
      <ui-button title="Test" type="success" @click="handleClick" />
    </div>
  </div>
</template>

<script>
import UiButton from './components/UiButton.vue';

export default {
  components: { UiButton },
  setup(props, ctx) {

    const handleClick = () => {
      alert('click')
    }

    return {handleClick};
  },
};
</script>

<style scoped></style>
