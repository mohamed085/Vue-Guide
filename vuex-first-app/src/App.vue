<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Add 1</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from "./components/TheCounter";
import ChangeCounter from "./components/ChangeCounter";
import FavoriteValue from "./components/FavoriteValue";

export default {
  components: {
    FavoriteValue,
    ChangeCounter,
    TheCounter,
    BaseContainer,
  },
  methods: {
    addOne() {
      this.$store.commit({
        type: 'increase',
        value: 10
      });
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