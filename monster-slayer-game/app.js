const app = Vue.createApp({
    data() {
       return {
           playerHealth: 100,
           monsterHealth: 100
       };
    },
    computed: {
        monsterBarStyles() {
            return {width: this.monsterHealth + '%'};
        },
        playerBarStyles() {
            return {width: this.playerHealth + '%'};
        }
    },
    methods: {
        attackMonster() {
            const attackValue = Math.floor(Math.random() * (12 - 5)) + 5;
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = Math.floor(Math.random() * (15 - 8)) + 8;
            this.playerHealth -= attackValue;
        },
        specialAttackMonster() {
            const attackValue = Math.floor(Math.random() * (10 - 25)) + 25;
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
    }
});
app.mount('#game');