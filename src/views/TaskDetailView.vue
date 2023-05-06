<template>
    <div class="max-w-5xl mx-auto p-8">
        <h1 class="text-2xl font-bold mx-auto text-center">Tasks Detail</h1>
        <ui-button class="my-4" title="<-- Indietro" @click="handleBack" />

        <template v-if="task">
            <div :class="`p-4 ${task.favourite ? 'bg-red-300' : 'bg-green-300'} text-xl font-bold rounded-t-xl`">
                ID:{{task.id}}
            </div>
            <div class="flex p-4 bg-green-200 h-96 items-center text-center align-middle rounded-b-xl">
                {{task.title}}
            </div>
        </template>

        <div class="flex flex-row gap-4 my-4">
            <router-link :to="{ name : 'tasksDetailComments'}">Commenti</router-link> | 
            <router-link :to="{ name : 'tasksDetailGallery'}">Gallery</router-link>
        </div>

        <router-view></router-view>

        <!-- <pre>
            {{ JSON.stringify(task,undefined,2) }}
        </pre>
        <pre>
            {{ JSON.stringify($route.params.taskId,undefined,2) }}
        </pre> -->
    </div>
</template>
<script>
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTaskStore } from '../stores/TaskStore'
import { storeToRefs } from 'pinia'
import UiButton from '../components/UiButton.vue'
export default {
  components: { UiButton },
  props: ['taskId'],
    setup(props){
        const task = ref(null)
        const taskStore = useTaskStore()

        const router = useRouter();
        const route = useRoute();
        const { params : { taskId } } = route;

        const getTask = (id) => {
            task.value = taskStore.getTaskById(id)
            if(!task.value){
                router.replace({ name : 'notFound'})
            }
        }

        onMounted(()=> {
            getTask(taskId)
        })

        const handleBack = () => {
            // router.back();
            router.push({ name : 'home'})
        }
        
        watch(
            () => route.params.taskId,
            async newId => {
                if(newId){
                    getTask(newId)
                }
            }
        )

        return {
            task,
            handleBack
        }
    }
}
</script>