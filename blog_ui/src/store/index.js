import Vue from 'vue';
import Vuex from 'vuex';

// import example from './module-example'

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

// Import all the resource store files.
function loadStores() {
  const context = require.context('./modules', true);
  return context
    .keys()
    .map(context) // import module
    .map((m) => m.default); // get `default` export from each resolved module
}

const resourceModules = {};

loadStores().forEach((resource) => {
  resourceModules[resource.name] = resource;
});

export const Store = new Vuex.Store({
  state: {},
  actions: {},
  mutations: {},
  getters: {},
  modules: {
    ...resourceModules,
  },

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEBUGGING,
});

export default function (/* { ssrContext } */) {
  return Store;
}
