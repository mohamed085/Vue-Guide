const app = Vue.createApp({
    data() {
        return {
            course: "Welcome my friend",
            googleLink: "https://www.google.com/",
            courseGoalA : "FinishA",
            courseGoalB : "FinishB"
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
        },
        outputGoalA(){
            const r = Math.random();
            if (r < .5){
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        },

    }
});

app.mount('#user-goal');