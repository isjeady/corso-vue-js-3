<template lang="">
    <div>
        <h1 class="p-4 font-bold">Commenti Relativi al Task N°:{{ taskId }}</h1>
        <ul class="list list-disc mx-8">
            <li>Commento</li>
            <li>Commento</li>
            <li>Commento</li>
            <li>Commento</li>
            <li>Commento</li>
            <li>Commento</li>
        </ul>
    </div>
</template>
<script>
export default {
      props: ['taskId'],
      setup(props){
        return {
        }
      }
}
</script>
