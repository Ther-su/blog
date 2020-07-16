import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    modalHint: {
      isShow: false,
      text: ''
    },
    isLoading: false
  },
  mutations: {
    setModalHint (state, modalHint) {
      if (state.modalHint.isShow === true) {
        return null // 避免反复触发
      }
      state.modalHint.text = modalHint.text
      state.modalHint.isShow = true
      setTimeout(() => {
        state.modalHint.isShow = false
      }, 2000)
    },
    setIsLoading (state, value) {
      state.isLoading = value
    }
  }
})

export default store
