import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      counter: 0
    }
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payLoad) {
      state.counter = state.counter + payLoad.value;
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(state) {
      const finalCounter = state.counter * 2;
      if (finalCounter < 0 ) {
        return 0;
      } else if (finalCounter > 100) {
        return 100;
      } else {
        return finalCounter;
      }
    }
  }
})
