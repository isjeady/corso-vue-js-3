<template>
  <div class="max-w-5xl mx-auto p-8">
      <h1 class="text-2xl font-bold mx-auto text-center">Home Page</h1>

      <div class="flex flex-row justify-center my-4">
        <task-form />
      </div>

      <tasks />
  </div>
</template>
<script>
import TaskForm from '../components/tasks/TaskForm.vue'
import Tasks from '../components/tasks/Tasks.vue'
export default {
components: { Tasks, TaskForm },
  
}
</script>