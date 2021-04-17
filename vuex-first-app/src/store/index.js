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
  }
})
