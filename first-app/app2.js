const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: ''
        };
    },
    computed: {
        submit(){
            console.log("Computed");
            alert("Submitted");
        },
    },
    methods: {
        submitForm(){
          alert("Submitted");
        },
        reset(){
            this.counter = 0;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        },
        setName() {
            this.name = event.target.value;
        }
    }
});

app.mount('#events');
