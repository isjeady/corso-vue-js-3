<template>
    <div class="flex flex-row gap-2 bg-green-100 hover:bg-green-300 m-4 p-4 rounded-md">
        <div class="w-5/6">
            <h3>{{ task.title }}</h3>
            <p class="text-xs">(id:{{ task.id }})</p>
        </div>
        <div class="w-1/6">
            <div class="flex flex-row gap-2 justify-end">
                <span @click="handleDel" class="pi pi-trash p-2 bg-blue-500 rounded-md text-white hover:bg-blue-800 cursor-pointer"></span>
                <span v-if="!task.favourite" @click="handleToggle" class="pi pi-heart p-2 bg-blue-500 text-white rounded-md hover:bg-blue-800 cursor-pointer"></span>    
                <span v-if="task.favourite" @click="handleToggle" class="pi pi-heart-fill p-2 bg-blue-50 text-red-500 rounded-md hover:bg-blue-800 cursor-pointer"></span>
            </div>   
        </div>
    </div>
</template>
  
<script>
import { useTaskStore } from '../../stores/TaskStore'

  export default {
      components : {  },
      props: ['task'],
      setup(props){
        const taskStore = useTaskStore();

        const handleToggle = () => {
            //alert(props.task.id)
            taskStore.toggleFav(props.task.id)
        }

        const handleDel = () => {
            if(confirm("Sei sicuro di voler eliminare questo task?")){
                taskStore.deleteTask(props.task.id)
            }
        }

        return {
            handleDel,
            handleToggle
        }
      }
    }
</script>