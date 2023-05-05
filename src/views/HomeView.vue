<template>
    <div class="max-w-5xl mx-auto p-8">
        <h1 class="text-2xl font-bold mx-auto text-center">Home Page</h1>
        <tasks />
    </div>
</template>
<script>
import Tasks from '../components/tasks/Tasks.vue'
export default {
  components: { Tasks },
    
}
</script>