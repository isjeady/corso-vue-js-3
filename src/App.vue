<template>
  <div>
    
    <div class="flex flex-col bg-green-300 w-full mx-auto justify-center items-center">
      <div class="flex flex-row gap-8 justify-center items-center align-middle pt-4">
        <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo" width="50">
        <img src="https://router.vuejs.org/logo.svg" alt="pinia logo" width="70">
      </div>
      <p class="text-xl text-center mt-4 font-bold">
        Pinia - Store Manager & Vue Router 
      </p>
      <a class="text-xs underline mb-4" href="https://www.isjeady.com" target="_blank">isjeady.com</a>
     <!--  <task-form v-if="!loading" /> -->
     <navigator />
    </div>
    <!-- <Tasks /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import TaskForm from './components/tasks/TaskForm.vue';
import Tasks from './components/tasks/Tasks.vue';
import UiButton from './components/UiButton.vue';
import { useTaskStore } from './stores/TaskStore'
import Navigator from './components/Navigator.vue';

export default {
  components: { UiButton, Tasks, TaskForm, Navigator },
  setup(props, ctx) {
    const taskStore = useTaskStore();
    const handleReload = () => {
        taskStore.getTasks()
      }
      const handleReset = () => {
        taskStore.$reset();
      }

    onMounted(() => {
      taskStore.getTasks()
    })
    return {taskStore,handleReset,handleReload};
  },
};
</script>

<style scoped></style>
