import { http } from 'src/helpers/service';
import { appendEditForm, appendForm } from 'src/helpers/formHelpers';

const state = () => ({
  posts: {
    data: [],
  },
  fetchingPosts: false,
  singlePost: {},
});

const getters = {
  GET_POSTS: (state) => state.posts,
  GET_FETCHING_POSTS: (state) => state.fetchingPosts,
  GET_SINGLE_POST: (state) => state.singlePost,
};

const mutations = {
  SET_FETCHING_POSTS(state, data) {
    state.fetchingPosts = data;
  },
  SET_POSTS(state, data) {
    state.posts = data;
  },
  SET_SINGLE_POST(state, data) {
    state.singlePost = data;
  },
};

const actions = {
  FETCH_POSTS(context, payload) {
    context.commit('SET_FETCHING_POSTS', true);
    return new Promise((resolve, reject) => {
      http
        .get('posts', { params: payload })
        .then((response) => {
          context.commit('SET_FETCHING_POSTS', false);

          context.commit('SET_POSTS', response.data);

          resolve(response);
        })
        .catch((error) => {
          context.commit('SET_FETCHING_POSTS', false);

          reject(error);
        });
    });
  },

  ADD_POST(context, form) {
    return new Promise((resolve, reject) => {
      http
        .post('posts', appendForm(form))
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  },

  UPDATE_POST(context, form) {
    return new Promise((resolve, reject) => {
      http
        .post(`posts/${form.id}`, appendEditForm(form))
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  },

  DELETE_POST(context, id) {
    return new Promise((resolve, reject) => {
      http
        .delete(`posts/${id}`)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  },
};

export default {
  namespaced: true,
  name: 'posts',
  state,
  getters,
  mutations,
  actions,
};
