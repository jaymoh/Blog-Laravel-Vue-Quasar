import { isUserLoggedIn } from 'src/helpers/utils';
import { http } from 'src/helpers/service';
import AppStorage from 'src/helpers/AppStorage';

const state = () => ({
  loggedInUser: {},
});

const getters = {
  GET_LOGGED_IN_USER: (state) => state.loggedInUser,
};

const mutations = {
  SET_LOGGED_IN_USER(state, data) {
    state.loggedInUser = data;
  },
};

const actions = {
  FETCH_LOGGED_IN_USER(context, payload) {
    if (!isUserLoggedIn()) {
      return null;
    }
    return new Promise((resolve, reject) => {
      http
        .get('auth/user', { params: payload })
        .then((response) => {
          const userData = response.data.data;
          // assign the first role
          userData.role = userData.relationships.roles.length
            ? userData.relationships.roles[0].name
            : 'user';

          // update current user state data
          context.commit('SET_LOGGED_IN_USER', userData);

          resolve(response);
        })
        .catch((error) => reject(error));
    });
  },

  LOGOUT_USER(context) {
    if (!isUserLoggedIn()) {
      return null;
    }
    return new Promise((resolve, reject) => {
      http
        .get('auth/logout')
        .then((response) => {
          // reset store data
          context.commit('SET_LOGGED_IN_USER', {});

          // Remove userData from localStorage
          AppStorage.clearLocalStorage();

          resolve(response);
        })
        .catch((error) => {
          // reset store data
          context.commit('SET_LOGGED_IN_USER', {});

          // Remove userData from localStorage
          AppStorage.clearLocalStorage();

          reject(error);
        });
    });
  },
};

export default {
  namespaced: true,
  name: 'profile',
  state,
  getters,
  mutations,
  actions,
};
