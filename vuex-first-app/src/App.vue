<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="addOne">Add 1</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from "./components/TheCounter";
import ChangeCounter from "./components/ChangeCounter";

export default {
  components: {
    ChangeCounter,
    TheCounter,
    BaseContainer,
  },
  methods: {
    addOne() {
      this.$store.commit('increase', { value: 10 });
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>