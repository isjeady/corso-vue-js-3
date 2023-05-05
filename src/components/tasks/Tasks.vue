<template>
    <div class="max-w-5xl mx-auto">
      <ui-loader v-if="loading" />

      <template v-if="!loading">
        <div class="flex flex-row gap-4 my-4 justify-end">
          <ui-button title="All tasks" @click="filter = 'all'" />
          <ui-button title="Favs tasks" type="success" @click="filter = 'fav'" />
        </div>
        <template v-if="filter === 'all'">
          <p>You have {{ totalCount }} tasks.</p>
          <task v-for="t, idx in tasks" :key="idx" :task="t"   />
        </template>
        <template v-if="filter === 'fav'">
          <p>You have {{ favCount }} favs.</p>
          <task v-for="t, idx in favs" :key="idx" :task="t"   />
        </template>
      </template>
    </div>
</template>
<script>
import Task from "./Task.vue"
import { useTaskStore } from '../../stores/TaskStore'
import UiButton from '../UiButton.vue';
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import UiLoader from '../UiLoader.vue';

export default {
  components: { Task, UiButton, UiLoader },
  setup(props, ctx) {
    const taskStore = useTaskStore();

    const filter = ref('all');

    const {tasks,totalCount,favCount,favs,loading} = storeToRefs(taskStore);

 /*    onMounted(() => {
      taskStore.getTasks()
    }) */

    return {
        tasks,
        totalCount,
        favCount,
        favs,
        filter,
        loading
    };
  } 
}
</script>
