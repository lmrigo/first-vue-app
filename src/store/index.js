import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 10
  },
  getters: {
    getCount: state => state.count
  },
  mutations: {
    inc(state) {
      state.count++
    },
    dec(state) {
      state.count--
    }
  },
  actions: {
    callWithDelay({commit}) {
      setTimeout(() => {
        commit('inc')
      },2000)
    }
  },
  modules: {
  }
})
