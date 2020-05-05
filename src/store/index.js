import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    games: [
      { title: '1', html: '1' },
      { title: '2', html: '2' },
      { title: '3', html: '3' },
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
        const mappedResult = result.data.map((game) => {
          const stats = JSON.parse(game.meta_description);
          Object.defineProperty(game, 'stats', {
            value: stats,
            writable: true,
          });
          const tags = game.tags.map((tag) => {
            return tag.name;
          });
          Object.defineProperty(game, 'my_tags', {
            value: tags,
            writable: true,
          });
          return game;
        });
        commit('updateGames', mappedResult);
      } catch (error) {
        console.error('Failed retrieving games', error);
      }
    },
  },
  modules: {
  },
});
