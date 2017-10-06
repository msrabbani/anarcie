import Vue from 'vue'
import Vuex from 'vuex'
import router from '../src/router/index'

Vue.use(Vuex)

var state = {
  activePlayer1: {
    name: '',
    img: ''
  },
  activePlayer2: {
    name: '',
    img: ''
  }
}

var mutations = {
  setActivePlayer1 (state, payload) {
    state.activePlayer1 = payload
  },
  setActivePlayer2 (state, payload) {
    state.activePlayer2 = payload
  }
}

var actions = {
  getActivePlayer1 ({ commit }, payload) {
    commit('setActivePlayer1', payload)
  },
  getActivePlayer2 ({ commit }, payload) {
    commit('setActivePlayer2', payload)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
