const { createApp } = Vue

createApp({
    data() {
        return {
            // creo un array vuoto in cui conterrò tutte le mie emails
            emailList: [],

            num: '',
        }
    },

    methods: {
        // creo una funzione per generare 10 email
        emailsGen(num) {
            // genero un array che mi tenga in "standby" le email finchè non sono tutte generate 
            const provisionalEmails = [];

            for(let i = 0; i < num; i++) {
                // per ogni iterazione genero una mail dall'API  e la salvo nell'array precente 
                provisionalEmails.push(axios.get('https://flynn.boolean.careers/exercises/api/random/mail')); 
            }

            // tramite il Promise.all aspetto che tutte le iterazioni avvengano 
            // per poi inserire tutte le email generate nel mio array da far visualizzare 
            Promise.all(provisionalEmails).then((responses) =>{

                this.emailList = responses.map((res) => res.data.response);
            })

        }
    },
}).mount('#app');