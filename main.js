const app = new Vue({
    el: '#app',
    data: {
        emails: [],
        display: '',
    },
    computed: {
        emailsAreTen() {
            return this.emails.length > 9 ? true : false;
        },
    },
    methods: {
        get10Mails() {
            this.emails.splice(0);
            for (let i = 1; i < 11; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response => {
                    console.log(response.data.response);
                    this.emails.push(response.data.response);
                });
            }
        }
    },
});