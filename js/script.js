const { createApp } = Vue

createApp({
    data() {
        return {
            // creo un array vuoto in cui conterrò tutte le mie emails
            emailList: [],
        }
    },

    methods: {
        // creo una funzione per generare 10 email
        emailsGen() {
            for(let i = 0; i < 10; i++) {

                // per ogni iterazione genero una mail dall'API 

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                    // la pusho nel mio array 
                    this.emailList.push(res.data.response);
                })
            }
        }
    },
    
    // al caricamento della pagina:
    mounted() {
        // richiamo la mia funzione
        this.emailsGen();
    },
}).mount('#app');