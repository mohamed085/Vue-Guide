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
            const myAttackValue = Math.floor(Math.random() * (12 - 5)) + 5;
            this.monsterHealth -= myAttackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = Math.floor(Math.random() * (15 - 8)) + 8;
            this.playerHealth -= attackValue;
        },
    }
});
app.mount('#game');