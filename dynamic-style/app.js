const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    boxSelected(box) {
      if (box === 'A') {
        this.boxASelected = true;
        this.boxBSelected = false;
        this.boxCSelected = false;
      } else if (box === 'B') {
        this.boxASelected = false;
        this.boxBSelected = true;
        this.boxCSelected = false;
      } else if (box === 'C') {
        this.boxASelected = false;
        this.boxBSelected = false;
        this.boxCSelected = true;
      }
    },
  },
});

app.mount('#styling');
