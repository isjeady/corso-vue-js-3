const { createApp, ref} = Vue;


const myApp = createApp({
    setup(){
        const testMsg = ref("Messaggio di prova");

        return {
            testMsg
        }
    }
})

myApp.mount('#game');