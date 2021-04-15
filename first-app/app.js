const app = Vue.createApp({
    data() {
        return {
            course: "Welcome my friend",
            googleLink: "https://www.google.com/"
        };
    },
    methods: {
        outputGoal(){
            const r = Math.random();
            if (r < .5){
                return 'Learn Vue';
            } else {
                return 'Not Learn Vue';
            }
        }
    }
});

app.mount('#user-goal');