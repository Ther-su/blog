import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoading: false
  },
  mutations: {
    setIsLoading (state, value) {
      state.isLoading = value
    }
  }
})

export default store
