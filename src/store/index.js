import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    games: [
      { name: '1', description: '1' },
      { name: '2', description: '2' },
      { name: '3', description: '3' },
    ],
  },
  mutations: {
    updateGames(state, games) {
      state.games = games;
    },
  },
  actions: {
    async getGames({ commit }) {
      try {
        const result = await axios.get('/api/game/getGames');
        commit('updateGames', result.data);
      } catch (error) {
        console.error('Failed retrieving games', error);
      }
    },
  },
  modules: {
  },
});
