const { createApp } = Vue

createApp({
    data() {
        return {
            randomEmail: '',
        }
    },
    
    // al caricamento della pagina:
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
            // così visualizzo la mail generata dall'APi
            console.log(response.data.response);

            this.randomEmail = response.data.response;
        })
        
    },
}).mount('#app');