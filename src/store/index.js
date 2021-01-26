import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const API_URL = 'https://api.chucknorris.io'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jokes: [],
    currentJoke: null,
    categories: []
  },
  mutations: {
    setCategories (state, payload) {
      state.categories = payload
    },
    addJokes (state, payload) {
      state.jokes = [...state.jokes, ...payload]
    },
    setCurrentJoke (state, payload) {
      state.currentJoke = payload
    }
  },
  actions: {
    async getCategories ({ commit }) {
      const response = await axios.get(`${API_URL}/jokes/categories`)
      commit('setCategories', response.data)
    },
    async addJokes ({ commit }) {
      const response = await axios.get(`${API_URL}/jokes/search?query=develop`)
      commit('addJokes', response.data ? response.data.result : [])
    },
    async getJoke ({ commit }, id) {
      const response = await axios.get(`${API_URL}/jokes/${id}`)
      commit('setCurrentJoke', response.data)
    }
  },
  modules: {
  }
})
