// import Vue from "vue";
// import Vuex from "vuex";
// import createPersistedState from "vuex-persistedstate";

import games from "./games";

// Vue.use(Vuex);

// export default new Vuex.Store({
//     modules: {
//         games,
//     },
//     plugins: [createPersistedState()],
//     strict: process.env.DEV,
// })

// store/index.js





import { createStore } from 'vuex';

const store = createStore(games);

export default store;
