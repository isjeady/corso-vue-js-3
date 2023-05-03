<template>
  <div class="p-4">
      
    <div class="flex flex-col bg-green-300 w-full mx-auto justify-center items-center rounded-md">
      <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo" width="50">
      <p class="text-xl text-center mt-4 font-bold">
        Pinia - Store Manager 
      </p>
      <a class="text-xs underline mb-4" href="https://www.isjeady.com" target="_blank">isjeady.com</a>
      
      <task-form v-if="!taskStore.loading" />
    </div>
    
    <tasks />

    <ui-button title="Reset" class="mr-2" type="danger" @click="handleReset" />
    <ui-button title="Reload" @click="handleReload" />
  </div>
</template>

<script>
import TaskForm from './components/tasks/TaskForm.vue';
import Tasks from './components/tasks/Tasks.vue';
import UiButton from './components/UiButton.vue';
import { useTaskStore } from './stores/TaskStore'

export default {
  components: { UiButton, Tasks, TaskForm },
  setup(props, ctx) {
    const taskStore = useTaskStore();
    const handleReload = () => {
        taskStore.getTasks()
      }
      const handleReset = () => {
        taskStore.$reset();
      }
    return {taskStore,handleReset,handleReload};
  },
};
</script>

<style scoped></style>
