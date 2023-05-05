<template lang="">
    <div class="flex flex-row gap-4 pb-4">
      <!-- <router-link :class="`${classMenu} ${$route.name == 'home' ? classMenuSeleted : ''}`" :to="{ name : 'home'}">Home</router-link>
      <router-link :class="`${classMenu} ${$route.name == 'tasks' ? classMenuSeleted : ''}`"   :to="{ name : 'tasks'}">Tasks</router-link>
     -->
      <router-link
        v-for="route in navRoutes"
        :key="route.name"
        :to="{ name : route.name }"
        :class="`${classMenu} ${$route.name == route.name  ? classMenuSeleted : ''}`"
      >
        {{ route.title }}
      </router-link>

     <router-link :class="`${classMenu}`" to="/tasks/1">T1</router-link>
      <router-link :class="`${classMenu}`"   to="/tasks/2">T2</router-link>
     <!--  <pre>
        {{ JSON.stringify($route.name,undefined,2) }}
      </pre> -->

    </div>
</template>
<script>
export default {
    setup(){
        const classMenu = "bg-blue-500 rounded-md p-2 text-white hover:bg-blue-900 cursor-pointer";
        const classMenuSeleted = "bg-blue-900 hover:bg-blue-700"

        const navRoutes = [
            { title : "Homepage" , name : 'home' },
            { title : "Tasks Page" , name : 'tasks'}
        ]

        return {
            classMenu,
            classMenuSeleted,
            navRoutes
        }
    }
}
</script>
<style lang="">
    
</style>