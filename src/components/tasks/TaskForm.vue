<template>
    <div class="mb-4">
        <form class="flex flew-row gap-2" @submit.prevent="handleSubmit">
            <input
                type="text"
                placeholder="Write task..."
                v-model="newTask"
                class="rounded-md px-4 py-2 w-96"
            />
            <button class="p-2 bg-blue-500 rounded-md text-white">Add</button>
        </form>
    </div>
</template>
<script>
import { ref } from 'vue';
import { useTaskStore } from '../../stores/TaskStore'

export default {
    setup(){
        const taskStore = useTaskStore();

        const newTask = ref('');

        const handleSubmit = () => {
            if(newTask.value.length > 0){
                taskStore.addTask({
                    id: Math.floor(Math.random() * 1000000),
                    title: newTask.value,
                    favourite: false
                })
            }
        }

        return {
            newTask,
            handleSubmit
        }
    }
}
</script>
<style>
    
</style>